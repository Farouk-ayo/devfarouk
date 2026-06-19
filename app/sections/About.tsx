import { technologies } from "@/datas/data";

const About = () => {
  return (
    <section
      className="flex flex-col   mx-0 xl:mx-[10%] lg:mx-[7%] md:mx-[7%]"
      id="about"
      data-aos="fade-up"
    >
      <div className="flex flex-row gap-4 justify-center lg:justify-end items-center overflow-visible">
        {/* mobile left line */}
        <div className="w-[5%] lg:hidden border-b border-gray-200 dark:border-gray-700"></div>

        <span className="text-2xl sm:text-3xl font-bold font-display">About Me</span>

        <span className="hidden lg:block text-[5.5rem] font-black text-secondary-color-3 opacity-[0.12] dark:opacity-[0.25] leading-none pointer-events-none select-none">01</span>

        {/* mobile right line */}
        <div className="w-[5%] lg:hidden border-b border-gray-200 dark:border-gray-700"></div>
      </div>
      <div className="flex flex-col  lg:flex-row w-full py-10  gap-10">
        <div className="w-full lg:w-[50%] flex flex-col gap-4 order-2 lg:order-1">
          <h4 className="font-medium">Technologies I work with</h4>
          <div
            className="bg-no-repeat bg-contain"
            // style={{ backgroundImage: "url('/patterns/pattern-4.svg')" }}
          >
            <ul className="px-6 py-6 flex flex-wrap gap-x-6 gap-y-4 sm:grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 ">
              {technologies.map((tech, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 cursor-pointer filter grayscale hover:grayscale-0 transition-all duration-300 dark:filter dark:brightness-50 dark:invert hover:dark:brightness-100 hover:dark:invert-0 hover:font-medium"
                >
                  <img
                    src={tech.iconLink}
                    alt={tech.name}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                  <span className="hidden sm:inline-block">{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[50%] order-1 lg:order-2">
          <article className="leading-relaxed text-base md:text-lg">
            I'm Farouk Mustapha, also known as{" "}
            <span className="text-[#E88D67]">devFarouk</span> <br />
            <br />
            A Software Developer based in Lagos, Nigeria, with over 3 years of
            experience building web and mobile apps. I work mostly with
            JavaScript, TypeScript, Python, React, React Native, Next.js,
            Vue.js, Angular and Nodejs, turning ideas and designs into clean,
            functional user interfaces.
            <br />
            <br />
            I enjoy transforming complex ideas, whether design concepts or
            engineering models into interactive, high-performance digital
            experiences. I’ve collaborated with product designers, 3D artists,
            developers, and DevOps teams to deliver production-ready systems,
            simulation tools, and visualization platforms.
            <br />
            <br />
            Outside of code, I play chess and watch anime. I genuinely enjoy
            building things and no matter what happens, I’ll always be an
            engineer.
          </article>
        </div>
      </div>
    </section>
  );
};
export default About;
