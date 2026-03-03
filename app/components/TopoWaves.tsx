"use client";

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { useTheme } from "next-themes";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function hexToColor(hex: string) {
  return new THREE.Color(hex);
}

function TopographicPlane() {
  const geomRef = useRef<THREE.PlaneGeometry>(null);
  const matRef = useRef<THREE.MeshStandardMaterial>(null);

  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const palette = useMemo(() => {
    return {
      light: {
        bg: hexToColor("#ffffff"),
        wireframe: hexToColor("#E88D67"),
      },
      dark: {
        bg: hexToColor("#000000"),
        wireframe: hexToColor("#E88D67"),
      },
    };
  }, []);

  useFrame((state, delta) => {
    const target = isDark ? palette.dark : palette.light;

    if (matRef.current) {
      matRef.current.color.lerp(target.wireframe, 0.05);
    }
    state.scene.background ??= new THREE.Color();
    (state.scene.background as THREE.Color).lerp(target.bg, 0.05);

    if (!geomRef.current) return;

    const time = state.clock.elapsedTime * 0.5;
    const positions = geomRef.current.attributes.position;

    const ptrX = state.pointer.x;
    const ptrY = state.pointer.y;

    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);

      const wave1 = Math.sin(x * 0.3 + time) * 0.5;
      const wave2 = Math.cos(y * 0.2 - time * 0.8) * 0.5;

      const distX = x - ptrX * 10;
      const distY = y - ptrY * -10;
      const dist = Math.sqrt(distX * distX + distY * distY);
      const ripple = Math.sin(dist * 0.5 - time * 2) * 0.2;

      const z = wave1 + wave2 + ripple;

      positions.setZ(i, z);
    }

    positions.needsUpdate = true;
    geomRef.current.computeVertexNormals();
  });

  return (
    <>
      <ambientLight intensity={isDark ? 0.5 : 1.0} />
      <mesh rotation={[-Math.PI / 2.5, 0, 0]} position={[0, 0, -5]}>
        <planeGeometry ref={geomRef} args={[40, 30, 80, 60]} />
        <meshStandardMaterial
          ref={matRef}
          wireframe
          transparent
          opacity={isDark ? 0.15 : 0.04}
        />
      </mesh>
    </>
  );
}

export default function TopoWaves() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        transform: "translateZ(0)",
      }}
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 1, 5], fov: 45 }}
        gl={{
          antialias: false,
          powerPreference: "high-performance",
          alpha: false,
        }}
      >
        <TopographicPlane />

        {isDark && (
          <EffectComposer multisampling={0}>
            <Bloom
              intensity={1.2}
              luminanceThreshold={0.1}
              luminanceSmoothing={0.9}
              mipmapBlur={false}
            />
          </EffectComposer>
        )}
      </Canvas>

      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/5 dark:to-black/80 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90 dark:to-black/90 pointer-events-none" />
    </div>
  );
}
