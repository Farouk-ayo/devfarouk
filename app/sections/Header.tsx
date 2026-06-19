import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-col lg:flex-row justify-between mx-0 mt-40 lg:mt-0 items-center  bg-center xl:mx-[10%] lg:mx-[7%] md:mx-[7%] lg:min-h-screen  ">
      <section
        className="w-full xl:w-[70%] relative pb-10 flex flex-col gap-4 lg:w-[70%]"
        data-aos="fade-right"
      >
        <div className="flex flex-col gap-3">
          <span className="text-sm text-gray-500 dark:text-gray-400">Hi, I&apos;m</span>
          <h1 className="font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[5.5rem] font-display leading-[1.0] tracking-tight">
            <span className="text-gray-900 dark:text-white">Farouk</span>{" "}
            <span className="text-secondary-color-3">Mustapha.</span>
          </h1>
        </div>

        <div className="mt-1 flex flex-col gap-3 max-w-2xl">
          <p className="leading-relaxed text-sm sm:text-base text-gray-600 dark:text-gray-300">
            I build scalable web platforms and{" "}
            <span className="font-medium text-gray-900 dark:text-white">real-time 3D experiences</span>{" "}
            that run directly in the browser. My work combines modern frontend
            development, full-stack systems, and computational thinking to create
            performant, reliable products.
          </p>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
            Let&apos;s build something remarkable together.
          </p>
        </div>

        <div className="mt-4">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"mailto:mustaphafarouk41@gmail.com"}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-secondary-color-3 bg-secondary-color-3 text-white hover:bg-primary-color hover:border-primary-color transition-all text-sm font-medium rounded-sm"
          >
            Get in Touch
            <Image
              alt="message"
              src={"/svgs/message-programming.svg"}
              width={18}
              height={18}
            />
          </Link>
        </div>
      </section>
      <section
        className=" w-full justify-center md:justify-center relative flex lg:justify-end items-center xl:w-[30%] h-[25rem] bg-center lg:bg-right bg-contain bg-no-repeat lg:w-[30%] group"
        style={{ backgroundImage: "url('/svgs/profile-bg.svg')" }}
        data-aos="zoom-in"
      >
        <div className="relative h-[18rem] w-[18rem] lg:h-[17rem] lg:w-[17rem]">
          <Image
            alt="profile image"
            src={"/pprofile.webp"}
            quality={100}
            className="grayscale-[30%] contrast-[1.15] saturate-[1.1] transition-all"
            style={{
              borderRadius: "50%",
              height: "100%",
              width: "100%",
            }}
            objectFit="cover"
            layout="fill"
          />
        </div>
      </section>
    </header>
  );
};
export default Header;
