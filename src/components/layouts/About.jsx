import Button from "../Button";
import Conteinar from "../Conteinar";
import Images from "../Images";
import Photo from "/src/assets/rafi.png";
import { FaReact, FaHtml5, FaJs, FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const About = () => {
  return (
    <>
      <div className="px-10 md:px-24 py-20 bg-[#0f172a]" id="about">
        <Conteinar>
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-80 h-110 shrink-0">
              <Images
                imgSrc={Photo}
                className={"rounded-xl border-l-8 border-b-8 border-[#10b981]"}
              />
            </div>
            <div className="space-y-6">
              <h2 class="text-3xl font-bold text-white border-b-2 border-[#10b981] inline-block pb-2">
                About Me
              </h2>
              <p class="text-gray-300 leading-relaxed w-[500px]">
                I am currently a student in Applied Geoinformatics. I have a
                keen interest in frontend and GIS development. My goal is to
                apply my expertise in building exciting and functional web
                interfaces.
              </p>
              <div className="">
                <ul className="flex gap-4 flex-wrap">
                  <li className="p-2 bg-[#1e293b] rounded text-orange-500">
                    <FaHtml5 />
                  </li>
                  <li className="p-2 bg-[#1e293b] rounded text-blue-500">
                    <FaCss3Alt />
                  </li>
                  <li className="p-2 bg-[#1e293b] rounded text-blue-400">
                    <RiTailwindCssFill />
                  </li>
                  <li className="p-2 bg-[#1e293b] rounded text-blue-400">
                    <FaReact />
                  </li>
                  <li className="p-2 bg-[#1e293b] rounded text-yellow-300">
                    <FaJs />
                  </li>
                </ul>
              </div>
              <Button
                className={
                  "border border-[#55E5A4] text-[#55E5A4] px-6 py-2 rounded hover:bg-[#55E5A4] hover:text-black transition"
                }
                btnText={"Download Resume"}
              />
            </div>
          </div>
        </Conteinar>
      </div>
    </>
  );
};

export default About;
