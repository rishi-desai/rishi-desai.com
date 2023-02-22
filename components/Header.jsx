import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import { IconContext } from "react-icons";

function Header() {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <IconContext.Provider value={{ color: "gray" }}>
          <div className="flex flex-row space-x-4">
            <Link href="https://www.linkedin.com/in/rishiidesai/">
              <AiFillLinkedin className="h-6 w-6 md:h-8 md:w-8 bg-transparent" />
            </Link>
            <Link href="https://github.com/rishi-desai">
              <AiFillGithub className="h-6 w-6 md:h-8 md:w-8 bg-transparent" />
            </Link>
          </div>
        </IconContext.Provider>
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer space-x-4"
      >
        <IconContext.Provider value={{ color: "gray" }}>
          <Link href="#contact">
            <AiFillMail className="cursor-pointer h-6 w-6 md:h-8 md:w-8 bg-transparent" />
          </Link>
        </IconContext.Provider>
        <p className="font-chivomonoreg uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
