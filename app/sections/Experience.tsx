"use client";
import { companies, companiesInfo } from "@/datas/data";
import { useState, useEffect, useRef } from "react";
import { RiArrowDropRightFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const Experience = () => {
  const [tab, setTab] = useState<number>(0);
  const [direction, setDirection] = useState<string>("right");
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (id: number) => {
    if (id > tab) {
      setDirection("right");
    } else {
      setDirection("left");
    }
    setTab(id);
    scrollContainer(id);
  };

  const scrollContainer = (id: number) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const selectedTab = container.children[id] as HTMLElement;
      const containerWidth = container.clientWidth;
      const selectedTabOffsetLeft = selectedTab.offsetLeft;
      const selectedTabWidth = selectedTab.clientWidth;

      container.scroll({
        left: selectedTabOffsetLeft - containerWidth / 2 + selectedTabWidth / 2,
        behavior: "smooth",
      });
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1024);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileVariants = {
    hidden: (direction: string) => ({
      opacity: 0,
      x: direction === "right" ? 100 : -100,
    }),
    visible: { opacity: 1, x: 0 },
    exit: (direction: string) => ({
      opacity: 0,
      x: direction === "right" ? -100 : 100,
    }),
  };

  const desktopVariants = {
    hidden: (direction: string) => ({
      opacity: 0,
      y: direction === "right" ? 100 : -100,
    }),
    visible: { opacity: 1, y: 0 },
    exit: (direction: string) => ({
      opacity: 0,
      y: direction === "right" ? -100 : 100,
    }),
  };

  const variants = isMobile ? mobileVariants : desktopVariants;

  return (
    <section
      className="flex flex-col mx-0 xl:mx-[10%] lg:mx-[7%] md:mx-[7%] pt-28 lg:pt-48 relative"
      id="experience"
      data-aos="fade-up"
    >
      <header className="flex flex-row gap-4 justify-start items-center font-bold">
        <span className="font-bold text-lg sm:text-2xl font-idgrotesk">
          02. Where I've worked
        </span>
        <div className="w-[5%] lg:w-36 border-b-[1px] border-b-border-color"></div>
      </header>
      <div className="flex flex-col gap-5 lg:flex-row w-full py-10 lg:gap-10 items-center">
        <div
          id="companies-scrollbar"
          ref={containerRef}
          className="flex lg:gap-0 overflow-x-scroll lg:inline-block w-[100%] lg:w-[30%] lg:border-l-[#f2f2f2] lg:border-l-2"
          style={{ backgroundImage: "url('/patterns/pattern-4.svg')" }}
        >
          {companies.map((company, id) => (
            <div
              key={id}
              className={`lg:w-full cursor-pointer hover:text-primary-color hover:bg-[#FBEDDD] transition-all px-5 py-2 font-bold ${
                tab === id &&
                " lg:border-l-2 border-secondary-color-3 bg-[#FBEDDD] text-primary-color"
              }`}
              onClick={() => handleTabClick(id)}
            >
              {company}
            </div>
          ))}
        </div>
        <div className="w-[100%] lg:w-[60%] lg:h-64">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={tab}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
              custom={direction}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-bold font-grotesk">
                {companiesInfo[tab].title} @
                <span className="text-secondary-color-3">
                  {companiesInfo[tab].company}
                </span>
              </h3>
              <p className="text-base text-gray-500 mt-2 font-idgrotesk">
                {companiesInfo[tab].location}
              </p>
              <h3 className="mt-2 text-gray-500 font-idgrotesk">
                {companiesInfo[tab].duration}
              </h3>
              {companiesInfo[tab].roles.map((role) => (
                <div key={role} className="flex justify-start mt-2">
                  <div>
                    <RiArrowDropRightFill
                      size={40}
                      className="text-secondary-color-3"
                    />
                  </div>
                  <p className="text-base">{role}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Experience;
