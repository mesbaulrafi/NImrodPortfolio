import React from "react";
import Conteinar from "../Conteinar";
import { FaReact, FaHtml5, FaJs, FaCss3Alt,FaGitAlt,FaNpm  } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Technology = () => {
  return (
    <>
      <div className="py-10 bg-[#0b1120]">
        <Conteinar>
          <div className="">
            <p className="text-center mb-8 font-medium text-3xl  text-white capitalize">
              Technologies I work with
            </p>
            <ul className="flex flex-wrap justify-center gap-8 md:gap-16">
              <li className="text-5xl text-orange-500">
                <FaHtml5 />
              </li>
              <li className="text-5xl text-blue-500">
                <FaCss3Alt />
              </li>
              <li className="text-5xl text-blue-400">
                <RiTailwindCssFill />
              </li>
              <li className="text-5xl text-cyan-400 animate-[spin_10s_linear_infinite]">
                <FaReact />
              </li>
              <li className="text-5xl text-yellow-400">
                <FaJs />
              </li>
              <li className="text-5xl text-red-500">
                <FaGitAlt/>
              </li>
              <li className="text-5xl text-red-600">
                <FaNpm  />
              </li>
            </ul>
          </div>
        </Conteinar>
      </div>
    </>
  );
};

export default Technology;
