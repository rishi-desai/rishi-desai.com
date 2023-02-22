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
  SiFlask,
  SiNodedotjs,
  SiDocker,
  SiNumpy,
  SiPandas,
  SiJupyter,
} from "react-icons/si";

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10
      min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 font-chivomonobold text-2xl">
        Skills
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <SiFirebase className="skills" />
        <SiVisualstudio className="skills" />
        <SiPython className="skills" />
        <SiJava className="skills" />
        <SiJavascript className="skills" />
        <SiSwift className="skills" />
        <SiCss3 className="skills" />
        <SiHtml5 className="skills" />
        <SiTailwindcss className="skills" />
        <SiReact className="skills" />
        <SiMysql className="skills" />
        <SiNextdotjs className="skills" />
        <SiFlask className="skills" />
        <SiNodedotjs className="skills" />
        <SiDocker className="skills" />
        <SiPandas className="skills" />
        <SiNumpy className="skills" />
        <SiJupyter className="skills" />
      </div>
    </motion.div>
  );
}

export default Skills;
