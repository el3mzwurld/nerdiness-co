import NavBar from "../components/NavBar";
import { Footer } from "./home";
import { Links, LinkRoutes } from "./home";
import { useState, useEffect } from "react";
import heroBg from "../assets/images/projects hero.png";

import Ser1 from "../assets/images/serv1.png";
import Ser2 from "../assets/images/serv2.png";
import Ser3 from "../assets/images/serv3.png";
import Ser4 from "../assets/images/serv4.png";
import process from "../assets/images/process.png";
import Hero2 from "../assets/images/projHero2.png";
import valueProp from "../assets/images/valueProp.png";
import { motion } from "motion/react";
const Projects = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  return (
    <div>
      <header className="w-full relative lg:h-[70px]">
        <NavBar links={Links} windowWidth={windowWidth} routes={LinkRoutes} />
      </header>

      <main className="w-full flex flex-col h-auto bg-white">
        <section className="proj-1 w-full relative z-0 max-lg:h-screen lg:h-screen">
          <div className="cover w-full h-full absolute -z-1 bg-[#50052D] opacity-[0.6]"></div>
          <img
            src={heroBg}
            className="absolute w-auto h-full object-cover object-center -z-2 lg:w-full"
            alt=""
          />
          <div className="txt absolute w-full h-full z-0 flex flex-col items-center justify-center lg:justify-evenly lg:gap-10 max-lg:gap-10 lg:pb-30">
            <h1 className="max-lg:font-semibold font-medium max-lg:text-3xl text-white lg:text-[36px]">
              Projects
            </h1>

            <p className="text-white font-light block text-center px-5 text-[18px] lg:text-[14px] lg:px-55 ">
              Guaranteed end to end cutting edge solutions for all industries.
            </p>
          </div>
        </section>

        <section className="proj-2 w-full h-auto max-lg:h-auto flex flex-col items-center justify-evenly gap-30 py-10">
          <div className="title lg:text-[38px] xl:text-[48px] text-[#7b0041] font-semibold">
            Our Services
          </div>

          <ProjectCard image={Ser1} header="Cloud Backup Services" />
          <ProjectCard image={Ser2} header="Cyber-security" direction={true} />
          <ProjectCard image={Ser3} header="Business Intelligence" />
          <ProjectCard image={Ser4} header="Data Analytics" direction={true} />
        </section>

        <section className="proj-3 w-full max-h-screen flex items-center px-25 justify-center gap-10 py-20 bg-[#AD8B9D]">
          <div className="img w-45/100 h-full">
            <img
              src={process}
              alt="Process"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="txt flex flex-1 flex-col items-start h-full text-white">
            <h2 className="text-[30px]">Our Process</h2>
            <p className="lg:text-[16px] font-light mt-5">
              A saepe odit rem dolorem amet ex culpa omnis cum ducimus amet et
              odio laborum et itaque nemo et consequuntur dolores. Id dolores
              atque ea dolore placeat non dolores eius cum iure atque ut
              possimus reprehenderit.
            </p>
          </div>
        </section>

        <section className="proj-4 w-full h-screen flex">
          <div className="txt flex w-55/100 items-center justify-center">
            <p className="txt h-auto font-semibold w-7/10 items-start">
              <h2 className="lg:text-4xl xl:text-[48px] text-[#7b0041]">
                Why work with us?
              </h2>
              <span className="w-full h-auto lg:text-[18px] xl:text-[20px] font-extralight mt-5">
                A saepe odit rem dolorem amet ex culpa omnis cum ducimus amet et
                odio laborum et itaque nemo et consequuntur dolores. Id dolores
                atque ea dolore placeat non dolores eius cum iure atque ut
                possimus reprehenderit.
              </span>
            </p>
          </div>
          <motion.div
            initial={{
              opacity: 0,
              width: "0%",
              height: "100%",
              transform: "translateX(0%)",
            }}
            whileInView={{
              opacity: 1,
              width: "45%",
            }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.5 }}
            className="img w-45/100 h-full flex items-center justify-end"
          >
            <img
              src={Hero2}
              className="w-full h-full object-center object-cover "
              alt=""
            />
          </motion.div>
        </section>
        <section className="proj-3 w-full max-h-screen flex items-center px-25 justify-center gap-8 py-20 bg-[#AD8B9D]">
          <div className="img w-45/100 h-full">
            <img
              src={valueProp}
              alt="Value Proposition"
              className="w-75/100 h-75/100 object-cover object-center"
            />
          </div>
          <div className="txt flex flex-1 flex-col items-start h-full text-white">
            <h2 className="text-[30px]">Our Value Proposition</h2>
            <p className="lg:text-[16px] font-light mt-5">
              A saepe odit rem dolorem amet ex culpa omnis cum ducimus amet et
              odio laborum et itaque nemo et consequuntur dolores. Id dolores
              atque ea dolore placeat non dolores eius cum iure atque ut
              possimus reprehenderit.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

interface ProjectCardProps {
  image: string;
  header: string;
  direction?: boolean;
}
const ProjectCard = (props: ProjectCardProps) => {
  return (
    <motion.div
      className={`project w-full flex justify-between items-center max-lg:flex-col-reverse lg:flex-${props.direction ? "row-reverse" : "row"} lg:px-35 `}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{
        amount: 0.3,
        // margin: "-100px",
      }}
    >
      <div className="card-img lg:w-85.5 lg:h-85.5">
        <img
          src={props.image}
          className="w-full h-full object-cover object-center"
          alt=""
        />
      </div>
      <div className="card-txt w-85.5 text-center h-auto lg:text-[38px] xl:text-[48px]">
        {props.header}
      </div>
    </motion.div>
  );
};

export default Projects;
