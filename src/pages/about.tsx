import { Links, LinkRoutes, Footer } from "./home";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { motion } from "motion/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaCloudUploadAlt, FaUpload } from "react-icons/fa";

import faq from "../assets/images/faq.png";
import heroBg from "../assets/images/body-2.png";
import team from "../assets/images/team.png";
const About = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="relative h-full w-full">
      <header className="w-full relative lg:h-[70px]">
        <NavBar links={Links} routes={LinkRoutes} windowWidth={windowWidth} />
      </header>

      <main className="w-full flex flex-col h-auto bg-white mb-5">
        <section className="abt-1 w-full relative z-0 max-lg:h-screen lg:h-screen">
          <div className="cover w-full h-full absolute -z-1 bg-pink-900 opacity-[0.3]"></div>
          <img
            src={heroBg}
            className="absolute w-auto h-full object-cover object-center -z-2 lg:w-full"
            alt=""
          />
          <div className="txt absolute w-full h-full z-0 flex flex-col items-center justify-center lg:justify-center lg:gap-10 max-lg:gap-10">
            <h1 className="max-lg:font-semibold font-bold max-lg:text-3xl text-white lg:text-3xl">
              About Us
            </h1>

            <p className="text-white font-light block text-center px-5 text-[18px] lg:text-[14px] lg:px-55 ">
              We are a leading IT solutions provider based in Alberta, Canada.
              We provide custom made software and application design,
              installation, and technology infrastructure support. Our
              continuous, excellent systems and solutions support, stand us out
              of the crowd. We believe that we can only succeed when you do!
            </p>
          </div>
        </section>

        <section className="abt-2  w-full max-md:h-screen flex flex-col items-center justify-center gap-10 px-10 py-2.5 lg:py-10 lg:flex-row-reverse lg:py-5">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.09 }}
            className="w-[90%] h-[50%] lg:w-1/2 lg:h-full"
          >
            <img
              src={team}
              alt=""
              className="w-auto h-[100%] object-cover object-center rounded-[10px]"
            />
          </motion.div>

          <div className="txt flex flex-col items-center justify-center lg:max-w-[40%] max-md:w-full max-md:h-auto gap-[10px]">
            <h2 className="title text-[#7B0041] w-full text-center font-bold text-[20px] lg:text-[22px]">
              Meet the team
            </h2>
            <p className="text-black text-[12px] text-center leading-[2.5] max-[450px]:text-[14px] lg:text-[14px]">
              Our team of professionals include IT consultants with over 120
              years of combined experience in Software/Systems Architecture
              Design, Development and Deployment with Support (UI/UX designs and
              support). Most of our designers have passed through our academy
              and have been certified by our award-winning team of experts.
            </p>
          </div>
        </section>
        <section className="abt-3 h-screen flex max-lg:flex-col items-center justify-between lg:px-10 px-7 lg:py-2.5 py-5 lg:justify-center items-center">
          <div className="ico max-lg:hidden w-45/100 h-full">
            <img src={faq} alt="" />
          </div>
          <div className="faqs flex-1 w-full h-full flex flex-col lg:gap-10 max-lg:gap-10">
            <h1 className="title text-3xl text-pink-900 lg:text-2xl w-full text-center">
              Frequently Asked Questions
            </h1>
            <div className="questions py-3 w-full h-auto flex flex-1 flex-col gap-2.5">
              <Question
                question="Do you provide customer support?"
                windowWidth={windowWidth}
              />
              <Question
                question="How do i register?"
                windowWidth={windowWidth}
              />
              <Question
                question="Is registration free?"
                windowWidth={windowWidth}
              />
              <Question
                question="What are the requirements to join the academy?"
                windowWidth={windowWidth}
              />
              <Question
                question="What is the duration of the frontend training?"
                windowWidth={windowWidth}
              />
            </div>
          </div>
        </section>
        <section className="abt-4  w-full max-md:h-screen flex flex-col items-center justify-center gap-10 px-10 py-2.5 lg:flex-row-reverse lg:py-5 max-lg:my-5">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.09 }}
            className="w-[90%] h-[50%] lg:w-1/2 lg:h-full"
          >
            <img
              src={team}
              alt=""
              className="w-auto h-[100%] object-cover object-center rounded-[10px]"
            />
          </motion.div>

          <div className="txt flex flex-col items-center justify-center lg:justify-evenly lg:full lg:max-w-[40%] max-md:w-full max-md:h-auto gap-[10px]">
            <h2 className="title text-[#7B0041] w-full text-center font-bold text-[20px] lg:text-[22px]">
              Join our team
            </h2>
            <p className="text-black text-[12px] text-center leading-[2.5] max-[450px]:text-[14px] lg:text-[14px]">
              Our team of professionals include IT consultants with over 120
              years of combined experience in Software/Systems Architecture
              Design, Development and Deployment with Support (UI/UX designs and
              support). Most of our designers have passed through our academy
              and have been certified by our award-winning team of experts.
            </p>
            <div className="btn-grp w-full lg:mt-5 h-auto flex max-lg:flex-col justify-between items-center max-lg:gap-10">
              <span className="w-auto h-auto flex flex-col gap-3">
                <button className="px-5 py-2.5 bg-pink-900 text-white flex gap-3 items-center justify-center rounded-md lg:justify-evenly lg:px-3 lg:text-[12px] w-50">
                  <span>Upload Resume</span>
                  <FaCloudUploadAlt />
                </button>
              </span>
              <button className="px-5 py-3 max-lg:px-9 bg-white border-pink-950 border-[1.5px] text-pink-950 flex gap-3 items-center justify-center rounded-md">
                Submit
              </button>
            </div>

            <p className="block max-lg:text-left text-sm w-full text-left">
              Max. allowable file size is 2MB and file type should be in
              pdf/docx format
            </p>
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

interface QuestionProps {
  question: string;
  windowWidth: number;
}
const Question = ({ question, windowWidth }: QuestionProps) => {
  return (
    <div className="container w-full h-auto max-lg:text-lg max-lg:py-3.5 lg:py-4 px-3 bg-gray-300 text-[#50052D] rounded-sm flex justify-between">
      <p>{question}</p>

      <span>
        <RiArrowDropDownLine
          color="#50052D"
          size={windowWidth < 1024 ? 30 : 25}
        />
      </span>
    </div>
  );
};
export default About;
