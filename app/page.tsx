import Image from "next/image";
import Header from "./components/Header";
import About from "./components/About";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
    </main>
  );
}
