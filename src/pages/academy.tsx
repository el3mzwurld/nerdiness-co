import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Footer } from "./home";
import { motion } from "motion/react";
import { useNavigate } from "@tanstack/react-router";
import bootcamp from "../assets/images/bootcamp.png";
import illustration1 from "../assets/images/mobWhoweare.png";
import illustration2 from "../assets/images/standout.svg";
import acaBox1 from "../assets/images/aca-box1.png";
import acaBox2 from "../assets/images/academyBox2.png";
import calendar from "../assets/images/calendar.png";
import img1 from "../assets/images/academyhero1.png";
import img2 from "../assets/images/academyhero2.png";
import curiousGray from "../assets/images/academyBody1-removebg-preview.png";
import chess from "../assets/images/chess.png";
import academyLearning from "../assets/images/academyLearning.png";
const Academy = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const Links = ["About us", "Academy", "Financials", "Projects", "Contact us"];
  const LinkRoutes = ["/about", "/academy", "/*", "/*", "/contact"];

  const navigate = useNavigate();
  const navToLogin = () => {
    navigate({ to: "/login" });
  };
  const navToRegister = () => {
    navigate({ to: "/register" });
  };
  return (
    <div className="overflow-hidden">
      <header className="w-full h-auto bg-transparent">
        <NavBar links={Links} windowWidth={windowWidth} routes={LinkRoutes} />
      </header>

      <main className="w-full min-h-screen lg:mb-10">
        <section className="academy-hero relative flex-col z-0 w-full max-lg:h-150 max-lg:py-17.5 flex items-center justify-center lg:justify-between lg:h-125">
          <div className="cta-group relative max-lg:w-full max-lg:h-full flex px-10 flex-col lg:items-start justify-center lg:flex-1 gap-5 lg:w-full lg:px-20">
            <div className="txt text-center lg:text-left">
              <p className="text-[18px]">We prepare you for tomorrow</p>
              <p className="text-3xl lg:my-2 font-bold text-pink-900">
                Nerdiness Academy
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeIn" }}
              className="btn w-full h-auto flex items-center justify-center gap-5 lg:w-auto"
            >
              <button
                className=" bg-pink-900 py-2.5 items-center justify-center w-40 text-white rounded-md"
                onClick={navToRegister}
              >
                Register Now
              </button>
              <button
                className="shadow bg-white flex py-2.5 items-center justify-center w-40 rounded-md"
                onClick={navToLogin}
              >
                Login
              </button>
            </motion.div>
            <div className="image1 -z-1 absolute max-lg:hidden top-15 right-13 w-70">
              <img src={img1} alt="" />
            </div>
            <div className="image2 -z-2 absolute max-lg:hidden -top-40 -right-70 w-150">
              <img src={img2} alt="" />
            </div>
          </div>
          <div className="cta-bootcamp w-full max-lg:h-35 py-5 relative z-0 flex items-center">
            <div className="cover -z-1 absolute w-full h-full">
              <img
                src={bootcamp}
                className="object-cover object-center w-full h-full blur-[2px]"
                alt=""
              />
            </div>
            <div className="content z-1 w-full h-full bg-transparent text-white py-5  lg:py-3 flex items-center justify-evenly lg:justify-between lg:px-40">
              <p className="font-semibold text-[18px] lg:text-[14px]">
                8 weeks bootcamp
              </p>
              <button
                className="border-[1.5px] px-5 py-2.5 lg:py-1.5 rounded-md"
                onClick={navToRegister}
              >
                Get Started
              </button>
            </div>
          </div>
        </section>
        <section className="academy-2 w-full max-lg:max-h-370 flex flex-col py-5">
          <p className="title block text-center font-semibold text-[25px] text-pink-900">
            Who we are
          </p>
          <div className="sec-1 flex flex-row max-lg:flex-col lg:h-130 lg:pt-10 xl:h-150">
            <div className="img max-lg:w-full max-lg:h-4/5 px-5 py-5 w-1/2 lg:p-0">
              <div className="actual lg:hidden w-full h-full">
                <img
                  src={illustration1}
                  className="w-full h-full object-cover object-center"
                  alt=""
                />
              </div>
              <div className="desktop max-lg:hidden bg-white h-full w-full flex items-center justify-center">
                <div className="actual w-8/10 h-8/10 flex items-center justify-center">
                  <img
                    src={curiousGray}
                    className="w-full h-9/10 object-cover object-center"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="txt flex flex-col max-lg:w-full max-lg:h-auto lg:h-full max-lg:justify-start items-center justify-center py-10 px-7.5 max-lg:gap-8 lg:flex-1 lg:bg-pink-950 lg:gap-4 lg:px-18">
              <h2 className="title block text-center  lg:text-left max-lg:text-pink-900 max-lg:text-[20px] font-bold lg:text-white lg:w-full">
                How does it work?
              </h2>
              <p className="block text-center lg:text-left lg:text-white lg:text-[14px] lg:font-light">
                We prepare you for tomorrow from today. Nerdiness offers a range
                of professionally accredited front-end and back-end coding
                courses based on our schedule. Check here for upcoming programs
              </p>
            </div>
          </div>
          <div className="sec-1 flex flex-row-reverse max-lg:flex-col lg:h-130 lg:pb-10 xl:h-150">
            <div className="img max-lg:w-full max-lg:h-4/5 px-5 py-5 w-1/2 lg:p-0">
              <div className="actual lg:hidden w-full h-full">
                <img
                  src={illustration2}
                  className="w-full h-full object-cover object-center"
                  alt=""
                />
              </div>
              <div className="desktop max-lg:hidden bg-white h-full w-full flex items-end justify-end">
                <img
                  src={chess}
                  className="w-full h-full object-cover object-center"
                  alt=""
                />
              </div>
            </div>
            <div className="txt flex flex-col max-lg:w-full max-lg:h-auto lg:h-full max-lg:justify-start items-center justify-center py-10 px-7.5 max-lg:gap-8 lg:flex-1 lg:bg-pink-950 lg:gap-4 lg:px-18">
              <h2 className="title block text-center  lg:text-left max-lg:text-pink-900 max-lg:text-[20px] font-bold lg:text-white lg:w-full">
                What makes us unique?{" "}
              </h2>
              <p className="block text-center lg:text-left lg:text-white lg:text-[14px] lg:font-light">
                Nerdiness is involved across the entire value chain of the IT
                industry so our students get an opportunity to contribute to
                ongoing projects to further develop practical skills and the
                confidence required in real-life work situations which can
                immediately be transferred into today’s workplace
              </p>
            </div>
          </div>
        </section>
        <section className="academy-3 w-full max-lg:min-h-screen flex flex-col lg:flex-row items-start justify-center lg:justify-evenly lg:px-10">
          <div className="box-group w-full h-auto flex flex-col gap-5 items-center px-10 py-2 lg:px-0 lg:w-auto ">
            <h1 className="title text-[25px] lg:text-[20px] font-bold text-pink-900">
              Trainings
            </h1>
            <div className="grp w-full h-auto flex max-lg:flex-col flex-row gap-5 items-center">
              <BoxBig
                button={true}
                title="8 weeks online bootcamp"
                buttonTxt="Click here for details"
              ></BoxBig>
              <BoxBig
                title="Physical classes"
                image={true}
                isImgBg={true}
                imageSrc={academyLearning}
              ></BoxBig>
            </div>
          </div>
          <div className="box-group flex flex-col w-auto h-auto max-lg:gap-7.5 items-center px-7 py-10 lg:px-5 lg:py-2.5 gap-3.5 justify-between lg:px-0 lg:gap-5">
            <h1 className="title text-[25px] lg:text-[20px] font-bold text-pink-900">
              Our Offerings
            </h1>
            <div className="grp w-auto max-lg:w-full h-auto flex max-lg:flex-col flex-col gap-5 items-center py-2 lg:p-0 lg:w-auto">
              <BoxSmall
                title="Programming languages training"
                image={true}
                isImgBg={false}
                imageSrc={acaBox1}
              />
              <BoxSmall
                title="Application design method"
                image={true}
                isImgBg={false}
                imageSrc={acaBox2}
              />
            </div>
          </div>
          <div className="box-group w-full h-auto flex flex-col gap-5 items-center px-10 py-2 lg:px-2.5 lg:w-auto ">
            <h1 className="title text-[25px] lg:text-[20px] font-bold text-pink-900">
              Our Curriculum
            </h1>
            <BoxBig title="Click here for details" />
          </div>
        </section>
        <section className="academy-4 w-full max-lg:h-125 flex flex-col items-center px-3 max-lg:py-10 lg:mt-10">
          <h1 className="text-[25px] text-pink-900 block font-semibold">
            Upcoming Events
          </h1>
          <div className="container flex flex-1 w-full h-full items-center justify-center lg:px-10 lg:py-10">
            <img
              src={calendar}
              className="w-full h-auto object-cover object-center"
              alt=""
            />
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

interface BoxProps {
  title: string;
  button?: boolean;
  buttonTxt?: string;
  image?: boolean;
  imageSrc?: string;
  isImgBg?: boolean;
}
const BoxBig = (props: BoxProps) => {
  return (
    <div
      className={`box relative z-0 max-lg:w-full max-lg:h-80 lg:w-[250px] xl:w-70 lg:h-[450px] rounded-md flex flex-col items-center justify-evenly ${props.image && "text-white"} ${!props.image && "bg-[#722D54]"}`}
    >
      {props.image && props.isImgBg && (
        <div className="absolute -z-1 w-full h-full rounded-md">
          <div className="cover absolute -z-1 w-full h-full bg-black opacity-[0.5] rounded-md"></div>
          <div className="img absolute -z-2 w-full h-full rounded-md">
            <img
              src={props.imageSrc}
              className="w-full h-full object-cover object-center rounded-md"
            />
          </div>
        </div>
      )}
      {props.image && !props.isImgBg && (
        <div className="img-container w-full p-2.5 h-45/100">
          <img src={props.imageSrc} alt="" />
        </div>
      )}
      <div className="txt max-lg:text-[20px] w-full h-auto lg:text-[18px] flex items-center text-white justify-center lg:font-bold lg:px-5 text-center lg:text-[24px]">
        {props.title}
      </div>
      {props.button && (
        <button className="bottom-4 left-5 lg:text-sm lg:font-bold px-6 py-3 lg:px-3 lg:py-1.5 text-[#722D54] bg-white rounded-md">
          {props.buttonTxt}
        </button>
      )}
    </div>
  );
};

const BoxSmall = (props: BoxProps) => {
  return (
    <div className="box-small relative z-0 max-lg:w-full max-lg:h-53 lg:w-[200px] lg:h-[200px] rounded-md max-lg:shadow-pink-800">
      {props.image && props.isImgBg ? (
        <div className="absolute -z-1 w-full h-full">
          <div className="cover absolute -z-1 w-full h-full bg-black opacity-[0.3]"></div>
          <div className="img absolute -z-2 w-9/10 h-9/10">
            <img src={props.imageSrc} />
          </div>
        </div>
      ) : (
        <div className="img-container w-full h-75/100 lg:7/10 flex items-center justify-center">
          <img
            src={props.imageSrc}
            className="w-1/2 h-auto object-fit object-center"
          ></img>
        </div>
      )}
      <div
        className={`${props.image ? "text-[12px]" : "text-[18px]"} block text-center font-semibold mt-2.5 lg:m-0 lg:text-[12px] max-lg:px-2 lg:px-5 lg:text-[13px]`}
      >
        {props.title}
      </div>
      {props.button && <button></button>}
    </div>
  );
};
export default Academy;
