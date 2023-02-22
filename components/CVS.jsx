import React from "react";
import Image from "next/image";
import cvs from "../public/assets/cvs.jpg";
import { motion } from "framer-motion";

function CVS() {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-x-7 space-y-7 flex-shrink-0 w-[500px] 
    md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 
    cursor-pointer transition-opacity duration-200 overflow-hidden mt-25"
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
          src={cvs}
          alt="CVS Logo"
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        />
      </motion.div>

      <div className="px-0 md:px-10 font-chivomonoreg">
        {/* Job Title */}
        <h4 className="text-3xl font-light">Retail/Customer Associate</h4>

        {/* Company */}
        <p className="font-bold text-xl mt-1">CVS</p>

        {/* Tech Used */}
        <div className="flex space-x-2 my-2"></div>

        {/* Time Frame */}
        <p className="uppercase py-5 text-gray-300">
          October 2019 - April 2021
        </p>

        {/* Job Descriptions */}
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Engaged customers while solving issues and providing solutions with
            fast and accurate transaction processing.
          </li>
          <li>
            Exceeded team goals and collaborated with staff to implement
            customer service initiatives.
          </li>
        </ul>
      </div>
    </article>
  );
}

export default CVS;
