import { Links, LinkRoutes } from "./home";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { motion } from "motion/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaCloudUploadAlt } from "react-icons/fa";
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
      <header className="w-full h-auto">
        <NavBar links={Links} routes={LinkRoutes} windowWidth={windowWidth} />
      </header>

      <main className="w-full flex flex-col h-auto bg-white">
        <section className="abt-1 w-full relative z-0 lg:px-18 max-lg:h-screen">
          <div className="cover w-full h-full absolute -z-1 bg-pink-900 opacity-[0.3]"></div>
          <img
            src={heroBg}
            className="absolute w-auto h-full object-cover object-center -z-2"
            alt=""
          />
          <div className="txt absolute w-full h-full z-0 flex flex-col items-center justify-center max-lg:gap-10">
            <h1 className="max-lg:font-semibold font-bold max-lg:text-3xl text-white">
              About Us
            </h1>

            <p className="text-white font-light block text-center px-5 text-[18px]">
              We are a leading IT solutions provider based in Alberta, Canada.
              We provide custom made software and application design,
              installation, and technology infrastructure support. Our
              continuous, excellent systems and solutions support, stand us out
              of the crowd. We believe that we can only succeed when you do!
            </p>
          </div>
        </section>

        <section className="abt-2  w-full max-md:h-screen flex flex-col items-center justify-center gap-10 px-10 py-2.5 lg:flex-row-reverse lg:py-5">
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
        <section className="abt-3 h-screen flex max-lg:flex-col items-center justify-between lg:px-5 px-7 lg:py-2.5 py-5">
          <div className="ico max-lg:hidden w-45/100"></div>
          <div className="faqs flex-1 w-full h-full flex flex-col max-lg:gap-10">
            <h1 className="title text-3xl text-pink-900 w-full text-center">
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
        <section className="abt-2  w-full max-md:h-screen flex flex-col items-center justify-center gap-10 px-10 py-2.5 lg:flex-row-reverse lg:py-5">
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
              Join our team
            </h2>
            <p className="text-black text-[12px] text-center leading-[2.5] max-[450px]:text-[14px] lg:text-[14px]">
              Our team of professionals include IT consultants with over 120
              years of combined experience in Software/Systems Architecture
              Design, Development and Deployment with Support (UI/UX designs and
              support). Most of our designers have passed through our academy
              and have been certified by our award-winning team of experts.
            </p>
          </div>

          <div className="btn-grp w-full h-auto flex justify-between items-center">
            <span className="w-auto h-auto flex flex-col">
              <button className="px-5 py-2.5 bg-pink-900">Upload Resume</button>
            </span>
          </div>
        </section>
      </main>
    </div>
  );
};

interface QuestionProps {
  question: string;
  windowWidth: number;
}
const Question = ({ question, windowWidth }: QuestionProps) => {
  return (
    <div className="container w-full h-auto max-lg:text-lg max-lg:py-3.5 px-3 bg-gray-300 text-[#50052D] rounded-sm flex justify-between">
      <p>{question}</p>

      <span>
        <RiArrowDropDownLine
          color="#50052D"
          size={windowWidth < 1024 ? 30 : 20}
        />
      </span>
    </div>
  );
};
export default About;
