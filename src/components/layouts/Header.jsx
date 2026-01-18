import React from "react";
import Conteinar from "../Conteinar";
import Images from "../Images";
import Logo from "/src/assets/Logo-bg.png";
import { Link } from "react-router-dom";


const Header = () => {

  // ১. এই ফাংশনটি পেজকে স্মুথলি উপরে নিয়ে যাবে
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // স্মুথ স্ক্রল এনিমেশন হবে
    });
  };

  return (
    <div className="bg-[#0b1120] sticky top-0 z-50">
      <Conteinar>
        <div className="flex justify-between items-center px-10 py-6 ">
          {/* Logo Section - লোগোতে ক্লিক করলেও টপে যাবে */}
          <div className="w-10 h-10 mt-1">
            <Link to={'/'} onClick={scrollToTop}>
              <Images imgSrc={Logo} className={""} />
            </Link>
          </div>

          <div className="">
            <ul className="flex gap-8 text-sm font-medium text-white">
              
              {/* ২. Home  */}
              <Link to={"/"} onClick={scrollToTop}>
                <li className="bg-[#55E5A4] px-4 py-2 rounded-full text-black border border-[#10b981] hover:text-[#fcfcfc] hover:bg-transparent hover:border hover:border-[#fcfcfc] cursor-pointer">
                  Home
                </li>
              </Link>

              <a href="#about">
                <li className="bg-[#55E5A4] px-4 py-2 rounded-full text-black border border-[#10b981] hover:text-[#fcfcfc] hover:bg-transparent hover:border hover:border-[#fcfcfc] cursor-pointer">
                  About
                </li>
              </a>
              
              <a href="#projects">
                <li className="bg-[#55E5A4] px-4 py-2 rounded-full text-black border border-[#10b981] hover:text-[#fcfcfc] hover:bg-transparent hover:border hover:border-[#fcfcfc] cursor-pointer">
                  Projects
                </li>
              </a>
              
              
            </ul>
          </div>

          <div className="">
            <Link to={"/contact"}>
                <i className="bg-[#55E5A4] px-4 py-2 rounded-full text-black border border-[#10b981] hover:text-[#fcfcfc] hover:bg-transparent hover:border hover:border-[#fcfcfc] cursor-pointer">
                  Contact
                </i>
              </Link>
          </div>
        </div>
      </Conteinar>
    </div>
  );
};

export default Header;
