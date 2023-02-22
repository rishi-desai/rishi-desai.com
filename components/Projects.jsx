import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gtlink from "../public/assets/Icon.png";
import Link from "next/link";

function Projects() {
  const gtlink = {
    name: "GTLink",
    description:
      "Implemented screens that enable the user to view collaborative posts from other users. Integrated Georgia Tech’s Microsoft Exchange signup/login into the app allowing only students and faculty access, thus increasing user safety.",
    link: "https://github.com/azooz2003-bit/GTLink",
  };

  const sustainavestor = {
    name: "Sustainavestor",
    description:
      "Created a RESTful web API from scratch to allow for seamless communication between the front and back end. Built a dynamic website that allowed users to answer ESG questions and receives stocks based on their results. Developed an algorithm to evaluate S&P 500 stocks cultivated from BlackRock’s specific ESG principals.",
    link: "https://devpost.com/software/sustainavestor",
  };
  const projects = [gtlink, sustainavestor];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ opacity: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full 
    px-10 justify-evenly mx-auto items-center z-0"
    >
      <h3
        className="absolute top-24 uppercase tracking-[20px] text-gray-500 font-chivomonobold 
      text-2xl"
      >
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((projects, i) => (
          <div
            key={projects}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen mt-20"
          >
            <div className="space-y-10 px-0 md:px-10 max-w-6xl  font-chivomonoreg">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Project {i + 1}:
                </span>{" "}
                <Link href={projects.link} className="hover:text-[#F7AB0A]">
                  {projects.name}
                </Link>
              </h4>

              <p className="text-lg text-center md:text-left">
                {projects.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
