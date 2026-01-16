import Conteinar from "../Conteinar";
import Button from "../Button";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";
// Email js
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_b72onp8", "template_ntfcmao", form.current, {
        publicKey: "V8SchcnpuuscsQxv-",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="px-10 md:px-24 py-20 bg-[#0b1120]" id="contact">
        <Conteinar>
          <div className="bg-[#1e293b]/50 p-10 rounded-3xl flex flex-col md:flex-row gap-10 ">
            <div className="md:w-1/2">
              <h3 className="text-4xl font-bold text-white">Let's discuss</h3>
              <h2 className="text-4xl font-bold text-white mb-6">
                {" "}
                on something <span className="text-[#10b981]">cool</span>{" "}
                together
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
            {/* Masage send Part  */}
            <div className="md:w-1/2 bg-white p-8 rounded-2xl text-black">
              <div className="space-y-4">
                <div className="flex gap-2 mb-4">
                  <button
                    type="button"
                    className="bg-[#10b981] text-white px-4 py-2 rounded-lg text-sm"
                  >
                    Frontend
                  </button>
                </div>
                <form className="space-y-4" ref={form} onSubmit={sendEmail}>
                  {/* Name  */}
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your name"
                    className="w-full border-b py-2 focus:outline-none focus:border-[#10b981]"
                  />
                  {/* Email  */}
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your email"
                    className="w-full border-b py-2 focus:outline-none focus:border-[#10b981]"
                  ></input>
                  {/* Send Masage  */}
                  <textarea
                    type="message"
                    
                    
                    placeholder="Your message"
                    className="w-full border-b py-2 focus:outline-none focus:border-[#10b981]"
                  ></textarea>
                </form>
                {/* Button  */}
                <Link to={""}>
                  {" "}
                  <Button
                    IoIosSend
                    value="Send"
                    className={
                      "w-full bg-[#10b981] text-white py-3 rounded-lg flex items-center justify-center gap-2 font-bold"
                    }
                    btnText={" Send Message"}
                  />
                </Link>
              </div>
            </div>
          </div>
        </Conteinar>
      </div>
    </>
  );
};

export default Contact;
