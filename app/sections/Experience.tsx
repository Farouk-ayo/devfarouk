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

      if (isMobile) {
        container.scroll({
          left:
            selectedTabOffsetLeft - containerWidth / 2 + selectedTabWidth / 2,
          behavior: "smooth",
        });
      }
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
      <header className="flex flex-row gap-4 justify-start items-center overflow-visible">
        <span className="text-2xl sm:text-3xl font-bold font-display">
          Where I&apos;ve worked
        </span>

        <span className="hidden lg:block text-[5.5rem] font-black text-secondary-color-3 opacity-[0.12] dark:opacity-[0.25] leading-none pointer-events-none select-none">02</span>

        {/* mobile line */}
        <div className="w-[5%] lg:hidden border-b border-gray-200 dark:border-gray-700"></div>
      </header>
      <div className="flex flex-col gap-5 lg:flex-row w-full py-10 lg:gap-10 items-start">
        <div
          id="companies-scrollbar"
          ref={containerRef}
          className="flex lg:gap-0 overflow-x-auto lg:overflow-visible scrollbar-hide lg:inline-block w-full lg:w-[38%] border-b lg:border-b-0 lg:border-l border-gray-200 dark:border-gray-700 lg:pb-0"
        >
          {companies.map((company, id) => (
            <div
              key={id}
              className={`lg:w-full min-w-max flex-shrink-0 cursor-pointer transition-all px-5 py-3 text-sm font-medium border-b-2 lg:border-b-0 lg:border-l-2 -mb-px lg:mb-0 lg:-ml-px ${
                tab === id
                  ? "border-secondary-color-3 text-secondary-color-3 bg-[#FBEDDD] dark:bg-secondary-color-3/10 font-semibold relative z-10"
                  : "border-transparent text-gray-600 dark:text-gray-300 hover:border-secondary-color-3/50 hover:text-secondary-color-3 hover:bg-[#FBEDDD]/50 dark:hover:bg-secondary-color-3/5"
              }`}
              onClick={() => handleTabClick(id)}
            >
              {company}
            </div>
          ))}
        </div>
        <div className="w-full lg:w-[62%] overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={tab}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
              custom={direction}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-base lg:text-lg font-semibold font-display text-gray-900 dark:text-white">
                {companiesInfo[tab].title}{" "}
                <span className="font-normal text-gray-400 dark:text-gray-500">@</span>{" "}
                <span className="text-secondary-color-3">
                  {companiesInfo[tab].company}
                </span>
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1.5">
                {companiesInfo[tab].location}
              </p>
              <p className="mt-0.5 text-sm text-gray-400 dark:text-gray-500 font-mono tracking-wide">
                {companiesInfo[tab].duration}
              </p>
              <div className="mt-4 flex flex-col gap-2">
                {companiesInfo[tab].roles.map((role) => (
                  <div key={role} className="flex justify-start items-start gap-1">
                    <RiArrowDropRightFill
                      size={24}
                      className="text-secondary-color-3 shrink-0 mt-0.5"
                    />
                    <p className="text-sm lg:text-base text-gray-700 dark:text-gray-200 leading-relaxed">{role}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Experience;
