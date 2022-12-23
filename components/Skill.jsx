import React from "react";
import { motion } from "framer-motion";
import {
  SiFirebase,
  SiVisualstudio,
  SiPython,
  SiJava,
  SiJavascript,
  SiSwift,
  SiCss3,
  SiHtml5,
  SiTailwindcss,
  SiReact,
  SiMysql,
  SiNextdotjs,
} from "react-icons/si";

function Skill({ directionLeft }) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
      >
        <SiFirebase
          className="rounded-full border border-gray-500 object-cover h-20 w-20 md:h-24 md:w-24 
          xl:h-28 xl:w-28 filter group-hover:bg-gray-500 transition duration-300 ease-in-out"
        />
      </motion.div>
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out 
      group-hover:bg-white h-20 w-20 md:h-24 md:w-24 xl:h-28 xl:w-28 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
