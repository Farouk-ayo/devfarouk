"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { sections } from "@/datas/data";
import Link from "next/link";
import { HiOutlineDocumentText } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "./ThemeSwitch";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section
      className="fixed top-0 h-20 lg:h-24 flex flex-row items-center w-full shadow-sm justify-between px-2 sm:px-16 z-20 backdrop-blur-lg"
      data-aos="fade-down"
    >
      <div className="flex justify-start sm:justify-center items-center uppercase tracking-wider">
        <Link href="/" className="flex items-center">
          <h1 className="text-3xl sm:text-3xl font-bold lg:text-4xl text-gray-900 dark:text-white font-display">
            Dev
          </h1>
          <span className="text-xl sm:text-2xl lg:text-2xl font-bold font-display text-secondary-color-3">
            Far
          </span>
        </Link>
        <ThemeSwitcher />
        <Link href="/" className="text-xl sm:text-2xl lg:text-2xl font-bold font-display text-secondary-color-3">
          uk
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-2">
        <nav className="w-full flex flex-row items-center">
          <ul className="w-full flex flex-row justify-start items-center gap-6">
            {sections.map((section, id) => (
              <Button
                variant={"link"}
                key={id}
                className="hidden lg:inline-flex p-0 h-auto text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white no-underline hover:no-underline"
                asChild
              >
                <Link key={id} href={section.idRoute}>
                  {section.name}
                </Link>
              </Button>
            ))}
            <li className="hidden lg:inline-block">
              <Link
                href="https://docs.google.com/document/d/1EktAf1QQtH6vMP7XUi9i0LLCasbY9IPy7YLwGasTA7k/edit?usp=sharing"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border border-secondary-color-3 text-secondary-color-3 hover:bg-secondary-color-3 hover:text-white rounded-sm transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
                <HiOutlineDocumentText size={16} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="lg:hidden z-50">
        <button
          className={`hamburger ${
            isOpen ? "open" : ""
          } relative z-30 w-8 h-4 flex flex-col justify-between items-center`}
          onClick={toggleMenu}
        >
          <span className="line block w-full h-0.5 dark:bg-secondary-color-3 bg-black transition-transform duration-300 ease-in-out origin-center"></span>
          <span className="line block w-full h-0.5 dark:bg-secondary-color-3 bg-black transition-opacity duration-300 ease-in-out"></span>
          <span className="line block w-full h-0.5 dark:bg-secondary-color-3 bg-black transition-transform duration-300 ease-in-out origin-center"></span>
        </button>
      </div>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ duration: 0.5 }}
        className={`fixed inset-0 w-full h-lvh bg-black bg-opacity-50 lg:hidden`}
      >
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? "0%" : "100%" }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 right-0 h-full w-3/4 bg-white dark:bg-gray-950 shadow-lg p-4 border-l border-gray-100 dark:border-gray-800"
        >
          <nav className="w-full flex flex-col items-center z-40 mt-36 gap-5 justify-center">
            {sections.map((section, id) => (
              <Link
                key={id}
                href={section.idRoute}
                onClick={toggleMenu}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-secondary-color-3 dark:hover:text-secondary-color-3 transition-colors"
              >
                {section.name}
              </Link>
            ))}
            <Link
              href="https://docs.google.com/document/d/1EktAf1QQtH6vMP7XUi9i0LLCasbY9IPy7YLwGasTA7k/edit?usp=sharing"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border border-secondary-color-3 text-secondary-color-3 hover:bg-secondary-color-3 hover:text-white rounded-sm transition-all"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
            >
              View Resume
              <HiOutlineDocumentText size={16} />
            </Link>
            <ThemeSwitcher />
          </nav>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Navbar;
