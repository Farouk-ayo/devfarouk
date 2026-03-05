// components/SplashScreen.js
import { motion } from "framer-motion";


const SplashScreen = ({ finishLoading }: { finishLoading: () => void }) => {
  return (
    <section className="flex w-full h-screen justify-center items-center">
      <div className="flex justify-start sm:justify-center items-center uppercase tracking-wider">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
          onAnimationComplete={finishLoading}
        >
          <h1 className="text-3xl sm:text-3xl font-bold lg:text-4xl text-secondary-color-3 text-center font-idgrotesk">
            Dev
          </h1>
          <p className="text-xl sm:text-2xl lg:text-2xl font-extrabold text-center font-grotesk">
            Farouk
          </p>
        </motion.div>
      </div>
    </section>
  );

};

export default SplashScreen;
