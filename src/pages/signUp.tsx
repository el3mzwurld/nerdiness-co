import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Footer } from "./home";
import { Links, LinkRoutes } from "./home";

import img from "../assets/images/registerImg.png";
const SignUp = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWidth);
    return () => window.removeEventListener("resize", handleWidth);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="lg:flex lg:flex-col min-h-screen">
      <header className="relative lg:w-full h-17.5 lg:bg-white">
        <NavBar links={Links} routes={LinkRoutes} windowWidth={width} />
      </header>
      <div className="main flex h-screen relative max-lg:hidden w-full z-0">
        <div className="cover absolute z-0 bg-pink-600 opacity-[0.4] w-full h-full"></div>
        <div className="image absolute -z-1 w-full h-full">
          <img
            src={img}
            className="w-full h-full object-cover object-center"
            alt=""
          />
        </div>
        <div className="title absolute z-1 bg-transparent w-full h-full flex items-center justify-center text-[90px] text-white font-medium">
          REGISTER NOW!
        </div>
      </div>
      <div className="form-container flex flex-col max-lg:px-5 py-4.5 w-full min-h-screen bg-pink-600 items-center gap-5">
        <h2 className="title text-[40px] my-5 block text-white font-semibold">
          Registration
        </h2>

        <form
          action=""
          onSubmit={(e) => handleSubmit(e)}
          className="w-full flex flex-1 items-center flex-col py-10 px-5 bg-white rounded-lg gap-5 lg:w-7/10"
        >
          <h1 className="form-title lg:text-2xl font-bold lg:my-5">
            Please fill in your details below
          </h1>
          <div className="form-group flex flex-col gap-1 w-full lg:w-7/10 items-start">
            <label htmlFor="" className="text-black text-[18px] lg:text-[16px]">
              First Name
            </label>
            <input
              type="text"
              name="fName"
              className="w-full h-10.5 px-2.5 py-1.5 text-[14px] border border-black rounded-md focus:outline-none"
            />
          </div>
          <div className="form-group flex flex-col gap-1 w-full  lg:w-7/10 items-start">
            <label htmlFor="" className="text-black text-[18px] lg:text-[16px]">
              Last Name
            </label>
            <input
              type="text"
              name="fName"
              className="w-full h-10.5 px-2.5 py-1.5 text-[14px] border border-black rounded-md focus:outline-none"
            />
          </div>{" "}
          <div className="form-group flex flex-col gap-1 w-full  lg:w-7/10 items-start">
            <label htmlFor="" className="text-black text-[18px] lg:text-[16px]">
              Preffered Name
            </label>
            <input
              type="text"
              name="fName"
              className="w-full h-10.5 px-2.5 py-1.5 text-[14px] border border-black rounded-md focus:outline-none"
            />
          </div>{" "}
          <div className="form-group flex flex-col gap-1 w-full  lg:w-7/10 items-start">
            <label htmlFor="" className="text-black text-[18px] lg:text-[16px]">
              Gender
            </label>
            <input
              type="text"
              name="fName"
              className="w-full h-10.5  px-2.5 py-1.5 text-[14px] border border-black rounded-md focus:outline-none focus:outline-none"
            />
          </div>{" "}
          <div className="form-group flex flex-col gap-1 w-full  lg:w-7/10 items-start">
            <label htmlFor="" className="text-black text-[18px] lg:text-[16px]">
              Phone Number
            </label>
            <input
              type="tel"
              name="fName"
              className="w-full h-10.5 px-2.5 py-1.5 text-[14px] border border-black rounded-md focus:outline-none"
            />
          </div>{" "}
          <div className="form-group flex flex-col gap-1 w-full  lg:w-7/10 items-start">
            <label htmlFor="" className="text-black text-[18px] lg:text-[16px]">
              Email
            </label>
            <input
              type="text"
              name="fName"
              className="w-full h-10.5 px-2.5 py-1.5 text-[14px] border border-black rounded-md focus:outline-none"
            />
          </div>{" "}
          <div className="form-group flex flex-col gap-1 w-full  lg:w-7/10 items-start">
            <label htmlFor="" className="text-black text-[18px] lg:text-[16px]">
              Highest Educational Qualification
            </label>
            <input
              type="text"
              name="fName"
              className="w-full h-10.5 px-2.5 py-1.5 text-[14px] border border-black rounded-md focus:outline-none"
            />
          </div>{" "}
          <div className="form-group flex flex-col gap-1 w-full  lg:w-7/10 items-start">
            <label htmlFor="" className="text-black text-[18px] lg:text-[16px]">
              Address
            </label>
            <textarea className="w-full h-20 border px-2.5 py-1.5 text-[14px] border-black rounded-md focus:outline-none" />
          </div>{" "}
          <div className="form-group flex flex-col gap-1 w-full  lg:w-7/10 items-start">
            <label htmlFor="" className="text-black text-[18px] lg:text-[16px]">
              Work Experience
            </label>
            <textarea
              name="fName"
              className="w-full h-20 border px-2.5 py-1.5 text-[14px] border-black rounded-md focus:outline-none"
            />
          </div>
          <div className="form-group flex flex-col gap-1 w-full  lg:w-7/10 items-start">
            <label htmlFor="" className="text-black text-[18px] lg:text-[16px]">
              Highest Educational Qualification
            </label>
            <input
              type="file"
              name="statementUpload"
              className="w-full h-10.5 border border-black rounded-md flex px-2.5 items-center justify-between py-2.5"
            />
          </div>{" "}
          <div className="form-group flex flex-col gap-1 w-full  lg:w-7/10 items-start">
            <label htmlFor="" className="text-black text-[18px] lg:text-[16px]">
              Upload Picture Of Past Code/Work Done(If any)
            </label>
            <input
              type="file"
              name="picUpload"
              className="w-full h-10.5 border border-black rounded-md flex px-2.5 items-center justify-center py-2.5"
            ></input>
          </div>{" "}
          <div className="form-txt w-full px-2.5 py-2.5 h-auto flex flex-col items-center gap-2.5 lg:px-5.5">
            <h2 className="title text-lg font-bold text-black w-full text-left lg:text-[16px]">
              Declaration
            </h2>

            <p className="text text-lg font-light text-black w-full text-left leading-6 lg:text-[16px]">
              I declare that all the information contained herein are true and
              reflect my current and past situation. I understand that my
              application, admission or certification can be withdrawn at any
              time by Nerdiness if any information I have provided is found to
              be untrue
            </p>

            <div className="inputfield w-75/100 h-auto flex flex-col justify-center items-center my-5 gap-2">
              <label htmlFor="" className="w-full text-left">
                Signature
              </label>
              <input
                type="text"
                name="fName"
                placeholder="Enter your signature here..."
                className="w-full h-10.5 border px-5 border-black rounded-md text-[14px]"
              />
            </div>

            <p className="text text-lg text-pink-800 w-full text-left leading-6 font-semibold lg:text-[16px] lg-px-2.5">
              Please note that attendance is mandatory for all classes
              throughout the duration of your course. If you will be absent due
              to unavoidable circumstances, please contact our programs office.
              Click here.
            </p>

            <button className="w-[160px] h-[55px] bg-pink-950 my-2.5 text-white rounded-lg lg:text-[14px] lg:my-4">
              Submit
            </button>
          </div>
        </form>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default SignUp;
