import React from "react";
import Conteinar from "../Conteinar";
import Button from "../Button";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";


const Contact = () => {
  return (
    <>
      <div className="px-10 md:px-24 py-20 bg-[#0b1120]" id="contact">
        <Conteinar>
          <div className="bg-[#1e293b]/50 p-10 rounded-3xl flex flex-col md:flex-row gap-10 ">
            <div className="md:w-1/2">
              <h3 className="text-4xl font-bold text-white">Let's discuss</h3>
              <h2 className="text-4xl font-bold text-white mb-6">
                {" "}
                on something <span class="text-[#10b981]">cool</span> together
              </h2>
              <p className="text-base text-gray-300 capitalize w-70">
                Do you have a project idea or just want to say hi? Send me a
                message.
              </p>
              <p className="text-lg text-gray-100 pt-10 flex items-center gap-x-5">
                <MdEmail className="text-[#55E5A4] text-2xl" />{" "}
                mesbaulrafi@gmail.com
              </p>
              <p className="text-lg text-gray-100 pt-5 flex items-center gap-x-5">
                {" "}
                <IoLocation className="text-[#55E5A4] text-2xl" />
                Dhaka, Bangladesh
              </p>
            </div>
            <div className="md:w-1/2 bg-white p-8 rounded-2xl text-black">
              <div className="space-y-4">
                <div class="flex gap-2 mb-4">
                  <button
                    type="button"
                    class="bg-[#10b981] text-white px-4 py-2 rounded-lg text-sm"
                  >
                    Frontend
                  </button>
                </div>
                <input type="text" placeholder="Your name" className="w-full border-b py-2 focus:outline-none focus:border-[#10b981]" />
                <input type="email" placeholder="Your email" className="w-full border-b py-2 focus:outline-none focus:border-[#10b981]"></input>
                <textarea placeholder="Your message" className="w-full border-b py-2 focus:outline-none focus:border-[#10b981]"></textarea>
                <Link to={''}> <Button IoIosSend  className={'w-full bg-[#10b981] text-white py-3 rounded-lg flex items-center justify-center gap-2 font-bold'}  btnText={' Send Message'}/></Link>
              </div>
            </div>
          </div>
        </Conteinar>
      </div>
    </>
  );
};

export default Contact;
