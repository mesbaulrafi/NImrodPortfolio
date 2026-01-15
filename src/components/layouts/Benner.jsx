import React from "react";
import Images from "../Images";
import Photo from "/src/assets/rrP.png";
import Conteinar from "../Conteinar";
import Button from "../Button";

const Benner = () => {
  return (
    <>
      <div className="bg-[#0b1120] py-22">
        <Conteinar>
          <div className="flex flex-col md:flex-row items-center justify-between px-10 md:px-24 py-20">
            <div className="">
              <h5 className="text-[#55E5A4] text-2xl uppercase ">
                Mesbaul Rafi .
              </h5>
              <h5 className=" text-white text-[42px] font-bold ">
                Frontend Developer.{" "}
              </h5>
              <p className="text-gray-400 max-w-md">
                {" "}
                I specialize in building immersive user experiences using the
                latest frontend technologies and frameworks. I love creating
                beautiful and user-friendly websites. React and Tailwind CSS are
                my main tools.
              </p>
              <div className="flex items-center gap-x-16 pt-18">
                <Button
                  btnText={"Get in Touch"}
                  className={
                    "bg-[#55E5A4] border border-[#10b981] hover:text-[#55E5A4] hover:bg-[#92edc444] hover:border hover:border-[#fcfcfc]"
                  }
                />
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>{" "}
                  Available Now
                </div>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0 flex justify-end">
            <div className="relative w-80 h-80 bg-[#10b981] rounded-3xl overflow-hidden transform ">
              <Images imgSrc={Photo} className={'w-full h-[370px] object-cover'}/>
            </div>
            </div>
          </div>
        </Conteinar>
      </div>
    </>
  );
};

export default Benner;
