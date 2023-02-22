import React from "react";
import Image from "next/image";
import gt from "../public/assets/gt.jpg";
import { motion } from "framer-motion";
import {
  DiVisualstudio,
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiPython,
} from "react-icons/di";

function ExperienceCard() {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-x-7 space-y-7 flex-shrink-0 w-[500px] 
    md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 
    cursor-pointer transition-opacity duration-200 overflow-hidden mt-20"
    >
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
      >
        <Image
          src={gt}
          alt="Georgia Institute of Technology Logo"
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        />
      </motion.div>

      <div className="px-0 md:px-10 font-chivomonoreg">
        {/* Job Title */}
        <h4 className="text-3xl font-light">Research Team Software Engineer</h4>

        {/* Company */}
        <p className="font-bold text-xl mt-1">
          Georgia Institute of Technology
        </p>

        {/* Tech Used */}
        <div className="flex space-x-2 my-2">
          <DiJavascript1 className="techIcon" />
          <DiCss3 className="techIcon" />
          <DiHtml5 className="techIcon" />
          <DiPython className="techIcon" />
          <DiVisualstudio className="techIcon" />
        </div>

        {/* Time Frame */}
        <p className="uppercase py-5 text-gray-300">August 2022 - Present</p>

        {/* Job Descriptions */}
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Test Description</li>
          <li>Test Description</li>
          <li>Test Description</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
