import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import pfp from "../public/assets/pfp.png";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 font-chivomonobold text-2xl">
        About
      </h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
      >
        <Image
          src={pfp}
          alt="Selfie of Rishi Desai"
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />
      </motion.div>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-chivomonoreg font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/40">little</span>{" "}
          background
        </h4>
        <p className="text-base font-chivomonoreg ">
          I'm Rishi, I am an undergraduate computer science student at the
          Georgia Institute of Technology. I am passionate about software
          engineering, data science, and artificial intelligence.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
