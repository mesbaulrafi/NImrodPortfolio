import React from "react";
import Conteinar from "../Conteinar";
import Images from "../Images";
import Logo from "/src/assets/Logo-bg.png";
import { Link } from "react-router-dom";
import Button from "../Button";

const Header = () => {
  return (
    <div className="bg-[#0b1120] sticky top-0  z-50">
      <Conteinar>
        <div className="flex justify-between items-center px-10 py-6 ">
          <div className="w-10 h-10 mt-1">
           <Link to={'./'}><Images imgSrc={Logo} className={""} /></Link>
          </div>
          <div className="">
            <ul className="flex gap-8 text-sm font-medium text-white">
              <Link to={"./"}>
                <li className="bg-[#55E5A4] px-4 py-2 rounded-full text-black border border-[#10b981] hover:text-[#fcfcfc] hover:bg-transparent hover:border hover:border-[#fcfcfc]">
                  Home
                </li>
              </Link>
              
                <a href="#about"><li className="bg-[#55E5A4] px-4 py-2 rounded-full text-black border border-[#10b981] hover:text-[#fcfcfc] hover:bg-transparent hover:border hover:border-[#fcfcfc]">
                  About
                </li></a>
              
              <a href="#projects">
                <li className="bg-[#55E5A4] px-4 py-2 rounded-full text-black border border-[#10b981] hover:text-[#fcfcfc] hover:bg-transparent hover:border hover:border-[#fcfcfc]">
                  Projects
                </li>
              </a>
              <Link to={"/contact"}>
                <li className="bg-[#55E5A4] px-4 py-2 rounded-full text-black border border-[#10b981] hover:text-[#fcfcfc] hover:bg-transparent hover:border hover:border-[#fcfcfc] ">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div className="">
            <Link to={'/contact'}><i className="bg-[#55E5A4] px-4 py-2 rounded-full text-white text-lg font-semibold border border-[#10b981] hover:text-[#fcfcfc] hover:bg-transparent hover:border hover:border-[#fcfcfc]">Hire Me</i></Link>
          </div>
        </div>
      </Conteinar>
    </div>
  );
};

export default Header;
