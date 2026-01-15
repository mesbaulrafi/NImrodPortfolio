import React from "react";
import Conteinar from "../Conteinar";
import Button from "../Button";
import { FaArrowRight } from "react-icons/fa";
import Images from "../Images";
import Orabi from "/src/assets/orebi.png"
import Agency from "/src/assets/agency.png"
import Finance from "/src/assets/finance.png"
import { Link } from "react-router-dom";
import { FaLink ,FaGithub } from "react-icons/fa";


const Projects = () => {
  return (
    <>
      <div className="px-10 md:px-24 py-20 bg-[#0f172a]" id="projects">
        <Conteinar>
          <div className="">
            <div className="flex items-end justify-between">
              <div className="">
                <h2 className="text-3xl font-bold text-white border-b-2 border-[#10b981] inline-block pb-2 mb-12">
                  Projects
                </h2>
              </div>
              <div className="flex pb-4">
                <Link to={'/work'}> <p className="hidden md:block text-[#55E5A4] hover:text-white transition">View All Projects</p></Link>
                <FaArrowRight className="text-[#55E5A4] pl-2 text-2xl" />
              </div>
            </div>
            {/* ========== */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* ============ Work One */}
              <div className="group bg-[#1e293b] rounded-xl overflow-hidden border border-gray-800 hover:border-[#10b981] transition hover:-translate-y-2 duration-300">
                <div className="relative overflow-hidden">
                  <Images imgSrc={Orabi} className={'w-full h-48 object-cover group-hover:scale-110 transition duration-500'}/>
                  <div className="">
                    <ul className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                      <Link to={'https://orebi-iota-mocha.vercel.app/'}><li className="p-3 bg-white text-black rounded-full mx-2 hover:text-[#10b981] hover:bg-[#000000]"><FaLink /></li></Link>
                      <Link to={'https://github.com/mesbaulrafi'}><li className="p-3 bg-white text-black rounded-full mx-2 hover:text-[#10b981] hover:bg-[#000000]"><FaGithub  /></li></Link>
                    </ul>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-white mb-2">E-commerce</h2>
                  <p className="text-gray-400 text-sm mb-4">A complete dashboard built using React, Tailwind CSS,.</p>
                  <div className="flex gap-2">
                    <span class="text-xs px-2 py-1 bg-gray-800 rounded text-[#10b981]">React</span>
                            <span class="text-xs px-2 py-1 bg-gray-800 rounded text-[#10b981]">Tailwind</span>
                  </div>
                </div>
              </div>
              {/* ========== */}
              {/* ============ Work Two */}
              <div className="group bg-[#1e293b] rounded-xl overflow-hidden border border-gray-800 hover:border-[#10b981] transition hover:-translate-y-2 duration-300">
                <div className="relative overflow-hidden">
                  <Images imgSrc={Agency} className={'w-full h-48 object-cover group-hover:scale-110 transition duration-500'}/>
                  <div className="">
                    <ul className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                      <Link to={''}><li className="p-3 bg-white text-black rounded-full mx-2 hover:text-[#10b981] hover:bg-[#000000]"><FaLink /></li></Link>
                      <Link to={''}><li className="p-3 bg-white text-black rounded-full mx-2 hover:text-[#10b981] hover:bg-[#000000]"><FaGithub  /></li></Link>
                    </ul>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-white mb-2">Agency</h2>
                  <p className="text-gray-400 text-sm mb-4">A complete dashboard built using Html, CSS.</p>
                  <div className="flex gap-2">
                    <span class="text-xs px-2 py-1 bg-gray-800 rounded text-[#10b981]">Html</span>
                            <span class="text-xs px-2 py-1 bg-gray-800 rounded text-[#10b981]">Css</span>
                  </div>
                </div>
              </div>
              {/* ========== */}
              {/* ============ Work Three */}
              <div className="group bg-[#1e293b] rounded-xl overflow-hidden border border-gray-800 hover:border-[#10b981] transition hover:-translate-y-2 duration-300">
                <div className="relative overflow-hidden">
                  <Images imgSrc={Finance} className={'w-full h-48 object-cover group-hover:scale-110 transition duration-500'}/>
                  <div className="">
                    <ul className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                      <Link to={''}><li className="p-3 bg-white text-black rounded-full mx-2 hover:text-[#10b981] hover:bg-[#000000]"><FaLink /></li></Link>
                      <Link to={''}><li className="p-3 bg-white text-black rounded-full mx-2 hover:text-[#10b981] hover:bg-[#000000]"><FaGithub  /></li></Link>
                    </ul>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-white mb-2">Mobail Finance</h2>
                  <p className="text-gray-400 text-sm mb-4">A complete dashboard built using Html,  CSS, JavaScript.</p>
                  <div className="flex gap-2">
                    <span class="text-xs px-2 py-1 bg-gray-800 rounded text-[#10b981]">Html</span>
                            <span class="text-xs px-2 py-1 bg-gray-800 rounded text-[#10b981]">JavaScript</span>
                  </div>
                </div>
              </div>
              {/* ========== */}
            </div>
          </div>
        </Conteinar>
      </div>
    </>
  );
};

export default Projects;
