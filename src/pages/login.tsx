import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";

import logo from "../assets/images/nav_logo.png";
import illustration from "../assets/images/welcome-back.png";
const Login = () => {
  return (
    <div className="lg:flex p-0">
      <div className="main max-md:w-full h-screen flex flex-1 flex-col">
        <div className="header h-auto w-full py-5 px-2.5">
          <div className="logo w-[100px] h-[100px] lg:w-15 lg:h-15">
            <img
              src={logo}
              className="h-[100%] w-[100%] bg-white rounded-[10px] object-cover object-center p-2.5"
              alt=""
            />
          </div>
        </div>

        <div className="form-container w-full flex flex-1 h-[90%] px-3.5 py-10 flex-col items-center lg:pr-5 lg:py-0">
          <h2 className="text-pink-800 text-[45px] max-[390px]:text-[30px] mb-10 font-bold lg:text-[30px]">
            Login
          </h2>
          <motion.form
            className="w-full h-auto flex flex-col gap-10 lg:gap-7.5 items-center"
            action="post"
            onSubmit={(e) => {
              e.preventDefault();
            }}
            initial={{ opacity: 0, y: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="form-field flex flex-col w-full">
              <label htmlFor="email" className="text-[18px] lg:text-[14px]">
                Email:{" "}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full h-12.5 my-2.5 border-[1.3px] border-solid border-pink-800 rounded-md px-3 text-[14px] lg:h-10  focus:outline-none"
                required
              />
            </div>

            <div className="form-field flex flex-col w-full">
              <label htmlFor="pword" className="lg:text-[14px] text-[18px]">
                Password:{" "}
              </label>
              <input
                type="password"
                name="passwd"
                id="pword"
                className="w-full h-12.5 my-2.5 border-[1.3px] border-solid border-pink-800 rounded-md px-3 text-[14px] lg:h-10  focus:outline-none"
                required
              />
            </div>

            <p className="w-full text-right text-[18px] lg:text-[14px]">
              Forgot password?{" "}
              <span className="text-pink-900 font-semibold">
                click here
              </span>{" "}
            </p>

            <button className="w-full my-2.5 py-2.5 text-[18px] lg:text-[16px]  text-white font-medium rounded-lg bg-pink-800">
              Login
            </button>
          </motion.form>

          <p className="w-full h-auto mt-10 text-center text-[18px] lg:text-[14px]">
            Don't have an account?{" "}
            <Link
              to={"/create-account"}
              className="text-pink-900 font-semibold"
            >
              Register
            </Link>{" "}
          </p>
        </div>
      </div>
      <div className="ill max-lg:hidden h-screen w-55/100 relative z-0">
        <div className="cover w-full h-full absolute z-0 bg-pink-800 opacity-[0.3]"></div>
        <div className="ill absolute -z-1 w-full h-full">
          <img
            src={illustration}
            className="object-cover object-center h-full w-full"
            alt=""
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeIn", duration: 1 }}
          className="content w-full h-full absolute z-1 flex flex-col items-center justify-center gap-10"
        >
          <div className="logo w-20 h-20">
            <img
              src={logo}
              className="h-[100%] w-[100%] bg-white rounded-[10px] object-cover object-center p-2.5"
              alt=""
            />
          </div>

          <div className="text-[40px] xl:text-7.5 h-auto mt-2.5 text-white flex flex-col items-center">
            <span className="font-semibold">Welcome Back!</span>
            <span className="text-[16px] xl:text-5 h-auto font-light text-white">
              Please login to continue
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
