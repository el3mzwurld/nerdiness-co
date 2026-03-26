import NavBar from "../components/NavBar";
import vector from "../assets/images/hero-vector.png";
import body_img from "../assets/images/body-2.png";
import frontEnd from "../assets/images/frontdev.webp";
import backEnd from "../assets/images/backend.webp";
import production from "../assets/images/production.webp";
import careers from "../assets/images/careers.png";
import logo from "../assets/images/nav_logo.png";
import hero from "../assets/images/hero-img.png";
import productCta from "../assets/images/cta-products.png";
import finCta from "../assets/images/financials-cta.png";
import customer from "../assets/images/Customer Service 1.png";
import { motion, AnimatePresence, easeInOut } from "motion/react";
import { FaMediumM, FaLinkedinIn, FaMedium } from "react-icons/fa";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const Links = ["About us", "Academy", "Financials", "Projects", "Contact us"];
  const LinkRoutes = ["/about", "academy", "/*", "/*", "/contact"];
  const Services = [
    { image: frontEnd, title: "Front-end development Training" },
    { image: backEnd, title: "Backend development Training" },
    { image: production, title: "Production level Projects" },
  ];
  const CtaSections = [
    {
      title: "Our Projects",
      body: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. ",
      image: productCta,
    },
    {
      title: "Nerdiness financials",
      body: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
      image: finCta,
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <header className="w-full h-auto bg-transparent">
        <NavBar links={Links} windowWidth={windowWidth} routes={LinkRoutes} />
      </header>

      <main className="w-full min-h-screen flex-col bg-[#FFF6FB] flex gap-5 ">
        <section className="hero w-full h-screen pt-[70px] relative z-0 overflow-hidden sm:pt-[0px] sm:flex sm:flex-row-reverse">
          <motion.div className="relative w-full h-full flex items-center justify-center sm:flex-1 sm:w-[100%] bg-[#50052D]">
            <img
              src={vector}
              className="absolute -bottom-[6px] w-[70px] right-2"
              alt=""
            />
            <img
              src={vector}
              className="absolute top-[6px] w-[70px] left-2 max-lg:hidden"
              alt=""
            />

            <motion.div
              initial={{ opacity: 0.1, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
              className="txt w-[80%] lg:w-full lg:pl-25 h-auto flex max-lg:itmes-center flex-col gap-5 sm:pl-9 lg:gap-2 lg:items-start"
            >
              <p className="title max-[390px]:text-[30px] text-[40px] sm:text-[20px] lg:text-[22px] w-full text-white font-semibold text-center lg:text-left">
                TECHNOLOGICALLY TRANSFORMING LIVES
              </p>
              <p className="text-[18px] text-center text-white px-5 font-light leading-7 sm:text-[12px] lg:text-[12px] xl:text-[14px] selection:bg-transparent lg:text-left lg:w-85/100 lg:p-0">
                Our continuous, excellent systems and solutions support, stand
                us out of the crowd. We believe that we can only succeed when
                you do!
              </p>

              <button className="btn bg-white lg:w-[120px] h-[35px] mt-5 text-[12px] text-pink-900 rounded-md font-bold">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 3.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9 }}
            className="hidden sm:flex sm:w-[51%] sm:relative sm:h-full"
          >
            <div className="container w-full absolute -right-16 top-1/2 h-[60%] rounded-sm -translate-y-1/2">
              <img
                src={hero}
                className="object-cover object-center w-full h-full"
                alt=""
              />
            </div>
          </motion.div>
        </section>
        <section className="body-2 w-full max-md:h-screen flex flex-col items-center justify-center gap-10 px-10 py-2.5 lg:flex-row-reverse lg:py-5">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.09 }}
            className="w-[90%] h-[50%] lg:w-1/2 lg:h-full"
          >
            <img
              src={body_img}
              alt=""
              className="w-auto h-[100%] object-cover object-center rounded-[10px]"
            />
          </motion.div>

          <div className="txt flex flex-col items-center lg:items-start justify-center lg:max-w-[40%] max-md:w-full max-md:h-auto gap-[10px]">
            <h2 className="title text-[#7B0041] w-full text-center lg:text-left text-[20px] lg:text-[30px]">
              Who we are
            </h2>
            <p className="text-black text-[12px] text-center leading-[2.5] lg:text-left max-[450px]:text-[14px] lg:text-[14px]">
              We are a leading IT solutions provider based in Alberta, Canada.
              We provide custom made software and application design,
              installation, and technology infrastructure support.
            </p>
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8 }}
              className="bg-[#9D2F69] px-8 py-3 text-[12px] text-white rounded-[5px]"
            >
              Read More
            </motion.button>
          </div>
        </section>
        <section className="body-3 w-full lg:px-30 max-md:h-min-screen flex flex-col items-center justify-evenly px-5 py-10 gap-10 lg:justify-start lg:flex-row-reverse">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col h-auto max-md:w-full gap-5 items-center lg:flex-row lg:w-[65%] lg:flex-row-reverse"
          >
            <div className="video max-md:h-[480px] flex flex-col rounded-[10px] max-md:w-full lg:w-45/100 lg:h-120">
              <p className="title text-[#7B0041] text-[20px] font-medium lg:w-full lg:h-auto lg:text-left">
                Nerdiness Academy
              </p>
              <div className="w-full flex-1 h-full flex flex-col justify-evenly lg:justify-center items-start gap-.5 lg:h-1/2 lg:w-full lg:gap-1.5">
                <div className="vid-container w-full h-55 bg-gray-500 rounded-lg"></div>
                <div className="txt w-full flex flex-col items-start gap-4 h-auto lg:gap-2">
                  <p className="title font-light text-[#B5889F] text-[14px]">
                    Functional and Interactive
                  </p>
                  <p className="page-cat font-bold text-[#9D2F69] text-[14px]">
                    Study Center
                  </p>
                  <p className="desc text-[12px] w-[90%]">
                    We have a functioning, adaptable, interactive, safe and
                    secure student platform where student can login to access
                    their information and can also initiate self service
                    seamlessly
                  </p>
                </div>
              </div>
            </div>
            <div className="cta max-md:h-100 rounded-md bg-[#50052D] max-md:w-full p-5 flex flex-col items-start lg:flex-1">
              <h2 className="title text-white font-bold">About our academy</h2>

              <p className="text-white font-extralight text-[12px] my-5 leading-loose lg:flex lg:flex-col lg:gap-1 ">
                <span>
                  We prepare you for tomorrow from today. Nerdiness offers a
                  range of professionally accredited front-end and back-end
                  coding courses based on our schedule. Check here for upcoming
                  programs.
                </span>
                <span>
                  Nerdiness is involved across the entire value chain of the IT
                  industry so our students get an opportunity to contribute to
                  ongoing projects to further develop practical skills and the
                  confidence required in real-life work situations which can
                  immediately be transferred into today’s workplace
                </span>
                <span>
                  As part of our services, we offer a 8 weeks bootcamp
                </span>
              </p>

              <button className="w-[50%] cursor-pointer lg:w-1.5/3 bg-transparent border-white border text-white rounded-md my-2.5 text-[12px] py-2">
                Get Started
              </button>
            </div>
          </motion.div>

          <div className="max-lg:w-full h-auto flex flex-col gap-3.5 lg:flex-1">
            {Services.map((item, index) => (
              <ServiceBody
                key={index}
                image={item.image}
                service={item.title}
              ></ServiceBody>
            ))}
          </div>
        </section>
        <section className="ctas w-full h-auto py-5 px-5 flex flex-col gap-5 lg:gap-8 lg:px-20 xl:px-15">
          {CtaSections.map((section, index) => (
            <CtaSection
              key={index}
              title={section.title}
              body={section.body}
              image={section.image}
            />
          ))}
        </section>
        <section className="careers w-full h-[500px] py-5 flex flex-col gap-5 relative z-0 lg:h-[350px] xl:h-130">
          <div className="cover absolute z-1 h-full w-full bg-[#7b004252]"></div>
          <img
            src={careers}
            className="absolute w-full h-full object-cover object-center -z-2"
            alt=""
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="txt w-full h-full bg-transparent selection:bg-none flex flex-col items-center justify-evenly z-1 py-2.5"
          >
            <h2 className="text-[25px] text-white">Careers</h2>
            <p className="text-[16px] text-white text-center px-5 lg:px-50">
              We are looking for team members who don’t only define themselves
              based on their skill and experience. We want to know what really
              motivates and drives you in life. So, how does Nerdiness fit into
              that journey? We want to get to know you
            </p>
            <button className="text-[16px] text-[#7b0041] text-center px-6 py-2.5 bg-white rounded-md lg:px-10 lg:py-1.5 lg:font-bold lg:text-[14px] cursor-pointer lg:hover:bg-pink-800 lg:hover:text-white lg:ease-in lg:duration-200 lg:transition-all">
              Join Us
            </button>
          </motion.div>
        </section>

        <section className="h-auto w-full px-20">
          <Contact />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export const Links = [
  "About us",
  "Academy",
  "Financials",
  "Projects",
  "Contact us",
];
export const LinkRoutes = ["/about", "/academy", "/*", "/*", "/contact"];

interface serviceBodyProps {
  image: string;
  service: string;
}
const ServiceBody = ({ image, service }: serviceBodyProps) => {
  return (
    <div className="service relative w-full h-30 z-0 overflow-hidden lg:h-30 overflow-hidden  rounded-md ">
      <div className="container absolute w-full h-full bg-gray-700 -z-1 blur-[1px]">
        <img
          src={image}
          alt={`Learn ${service}`}
          className="object-cover object-center absolute -z-1  rounded-md"
        />
        <div className="cover h-full w-full absolute   bg-[#00000047] z-0  rounded-md"></div>
      </div>
      <span className="txt  bg-none absolute w-full h-full  rounded-md  flex items-center justify-center max-lg:text-[20px] z-1 lg:text-[16px] font-bold text-white">
        {service}
      </span>
    </div>
  );
};
interface CtaSectionProps {
  title: string;
  body: string;
  image: string;
}
const CtaSection = ({ title, body, image }: CtaSectionProps) => {
  return (
    <div className="cta-section w-full h-[35rem] flex-col flex items-center justify-center lg:h-[20rem] lg:my-10 lg:flex-row lg:gap-10 lg:items-center lg:justify-center lg:my-10">
      <div className="img-container w-full h-[50%] overflow-hidden lg:h-full lg:w-[45%]">
        <img
          src={image}
          className="object-cover object-center w-full h-full rounded-md"
        ></img>
      </div>
      <div className="text-container flex-1 flex flex-col items-start justify-between py-2 pt-3.5 lg:flex-1 lg:w-full lg:h-full lg:justify-evenly">
        <h2 className="text-[#50052d] text-[20px] font-medium lg:text-[26px]">
          {title}
        </h2>
        <p className="text-black font-light text-3.5 text-left leading-loose lg:text-[16px] xl:text-lg">
          {body}
        </p>
        <button className="text-white bg-[#9D2F69] py-2.5 px-4 text-center lg:px:2.5 lg:py-2 cursor-pointer">
          Read More
        </button>
      </div>
    </div>
  );
};

export const Contact = () => {
  const [formError, setFormError] = useState(false);
  const [email, setEmail] = useState("");

  const isEmailValid = (mail: string): boolean => {
    const testEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    return testEmail;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isEmailValid(email)) {
      setFormError((prev) => !prev);
      return;
    }

    setFormError(false);
    console.error("The Email is valid :", email);
  };
  return (
    <div
      className="contact-us w-full h-90vh py-5 lg:py-0 lg:flex lg:flex-row-reverse items-center"
      id="contact"
    >
      <div className="illustration max-md:hidden flex flex-1 w-30/100 h-[100%]">
        <img
          src={customer}
          className="object-cover object-center w-full h-full"
          alt=""
        />
      </div>
      <div className="form-container max-lg:h-full max-lg:w-full flex flex-col items-start justify-center lg:w-37.5/100">
        <div className="title flex flex-col items-start m-3">
          <p className="font-bold text-[30px]">Get In Touch</p>
          <p className="font-medium text-[16px] w-full mt-2.5">
            Comments? Enquiries? Ideas? Or just to say Hi.... <br />
            We're always here.
          </p>
        </div>
        <motion.form
          action=""
          className="flex flex-col w-full px-2.5 items-start "
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="field h-auto w-full flex flex-col gap-3.5 py-2.5">
            <label htmlFor="" className="text-[14px]">
              Full name
            </label>
            <input className="h-12 w-full border-[1.5px] px-2.5 focus:outline-none lg:text-sm"></input>
          </div>
          <div className="field h-auto w-full flex flex-col gap-3.5 py-2.5">
            <label htmlFor="" className="text-[14px]">
              Email
            </label>
            <input
              type="text"
              className="h-12 w-full border-[1.5px] px-2.5 focus:outline-none lg:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            {formError && (
              <span className="text-red-500 text-[10px] my-0.5 w-full text-left">
                Input a valid email address
              </span>
            )}
          </div>
          <div className="field h-auto w-full flex flex-col gap-3.5 py-2.5">
            <label htmlFor="" className="text-[14px]">
              Message
            </label>
            <textarea
              className="h-25 w-full border-[1.5px] px-2.5 py-2.5 focus:outline-none placeholder:text-gray-400 lg:text-sm"
              placeholder="Tell us what you think..."
            ></textarea>
          </div>
          <button className="px-10 mt-5 py-2.5 rounded-md text-white font-bold bg-[#7B0041]">
            Send
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

  const handleHomeNav = () => {
    navigate({ to: "/" });
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="footer w-full h-auto py-5 bg-[#50052D] lg:flex lg:px-20 lg:py-15">
      <div className="logo max-sm:h-[350px] flex flex-col px-3.5 pt-3.5 lg:w-3/10 lg:py-2.5 lg:items-start">
        <div
          className="main w-20.75 h-20.75 lg:w-18 lg:h-18 cursor-pointer"
          onClick={handleHomeNav}
        >
          <img src={logo} className="bg-white p-2.5 rounded-md" alt="" />
        </div>
        <p className="w-full h-auto leading-7.5 text-[14px] text-white font-light my-3.5">
          The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
          quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick
          quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs
          grab quick-jived waltz.
        </p>
        <div className="socials flex w-full h-auto py-5 items-center gap-5 lg:justify-start lg:gap-5 lg:items-center">
          <span className="ico">
            <FaFacebookF size={windowWidth < 620 ? 30 : 25} color="white" />
          </span>
          <span className="ico">
            <FaLinkedinIn size={windowWidth < 620 ? 30 : 25} color="white" />
          </span>{" "}
          <span className="ico">
            <FaMediumM size={windowWidth < 620 ? 30 : 25} color="white" />
          </span>{" "}
          <span className="ico">
            <FaInstagram size={windowWidth < 620 ? 30 : 25} color="white" />
          </span>{" "}
          <span className="ico">
            <FaTwitter size={windowWidth < 620 ? 30 : 25} color="white" />
          </span>
        </div>
      </div>
      <div className="links flex flex-1 flex-row flex-wrap w-full h-[100%] px-5 py-5.5 items-start justify-between gap-x-5 gap-y-10 lg:w-full lg:items-start lg:justify-center lg:h-[300px] lg:py-20 lg:justify-evenly">
        <ul className="link-group flex flex-col items-start gap-[10px] text-white text-[14px]">
          <h2 className="linkG-title text-[20px] lg:text-[18px] text-white">
            About Us
          </h2>
          <li className="link-item">Our History</li>
          <li className="link-item">Purpose</li>
          <li className="link-item">The Team</li>
          <li className="link-item">Careers</li>
        </ul>
        <ul className="link-group flex flex-col items-start gap-[10px]  text-white text-[14px]">
          <h2 className="linkG-title text-[20px] lg:text-[18px] text-white">
            Projects
          </h2>
          <li className="link-item">Our Services</li>
          <li className="link-item">Our Process</li>
          <li className="link-item">Why work with us?</li>
          <li className="link-item">Our value proposition</li>
        </ul>{" "}
        <ul className="link-group flex flex-col items-start gap-[10px] text-white text-[14px]">
          <h2 className="linkG-title text-[20px] lg:text-[18px] text-white">
            About Us
          </h2>
          <li className="link-item">Application</li>
          <li className="link-item">Student login</li>
          <li className="link-item">Student self service</li>
        </ul>
      </div>
    </div>
  );
};
export default Home;
