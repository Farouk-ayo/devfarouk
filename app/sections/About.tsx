import { technologies } from "@/datas/data";

const About = () => {
  return (
    <section
      className="flex flex-col pt-28 lg:pt-48 mx-0 xl:mx-[10%] lg:mx-[7%] md:mx-[7%]"
      id="about"
      data-aos="fade-up"
    >
      <div className="flex flex-row gap-4 justify-center lg:justify-end items-center font-bold">
        <div className="w-[5%%] lg:hidden lg:w-36 border-b-[1px] border-b-border-color"></div>
        <span className=" font-bold text-lg sm:text-2xl font-idgrotesk">
          01. About Me
        </span>
        <div className="w-[5%] lg:w-36 border-b-[1px] border-b-border-color"></div>
      </div>
      <div className="flex flex-col  lg:flex-row w-full py-10  gap-10">
        <div className="w-full lg:w-[50%] flex flex-col gap-4 order-2 lg:order-1">
          <h4 className="font-bold">Technologies I work with</h4>
          <div
            className="bg-no-repeat bg-contain"
            style={{ backgroundImage: "url('/patterns/pattern-4.svg')" }}
          >
            <ul className="px-6 py-6 flex flex-wrap gap-x-6 gap-y-4 sm:grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 font-idgrotesk">
              {technologies.map((tech, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 cursor-pointer filter grayscale hover:grayscale-0 transition-all duration-300 dark:filter dark:brightness-50 dark:invert hover:dark:brightness-100 hover:dark:invert-0"
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
            I'm Farouk Mustapha, a Software Developer based in Lagos, Nigeria,
            with over 3 years of experience building web and mobile apps. I work
            mostly with JavaScript, TypeScript, React, React Native, Next.js,
            and Nodejs, turning ideas and designs into clean, functional user
            interfaces.
            <br />
            <br />
            I enjoy collaborating with designers, backend devs, frontend devs,
            and DevOps to bring products to life. I've worked on projects across
            startups like Pathpalz, Berrystamp, and JustDoStartUp, and I've
            learned a lot along the way.
            <br />
            <br />
            Outside of code, I play chess, watch anime, and constantly look for
            better ways to solve problems. I genuinely enjoy building things and
            no matter what happens, I’ll always be an engineer.
          </article>
        </div>
      </div>
    </section>
  );
};
export default About;
