import { motion } from "motion/react";
import logo from "../assets/images/nav_logo.png";
import { Link } from "@tanstack/react-router";

const Login = () => {
  return (
    <div>
      <div className="main max-md:w-full h-screen">
        <div className="header h-auto w-full py-5 px-2.5">
          <div className="logo w-[100px] h-[100px]">
            <img
              src={logo}
              className="h-[100%] w-[100%] bg-white rounded-[10px] object-cover object-center p-2.5"
              alt=""
            />
          </div>
        </div>

        <div className="form-container w-full flex flex-1 h-[90%] px-3.5 py-10 flex-col items-center">
          <h2 className="text-pink-800 text-[45px] max-[390px]:text-[30px] mb-10 font-bold">
            Login
          </h2>
          <motion.form
            className="w-full h-auto flex flex-col gap-10"
            action="post"
            onSubmit={(e) => {
              e.preventDefault();
            }}
            initial={{ opacity: 0, y: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="form-field">
              <label htmlFor="email" className="text-[18px]">
                Email:{" "}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full h-12.5 my-2.5 border-[1.3px] border-solid border-pink-800 rounded-md px-3 focus:outline-none"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="pword">Password: </label>
              <input
                type="password"
                name="passwd"
                id="pword"
                className="w-full h-12.5 my-2.5 border-[1.3px] border-solid border-pink-800 rounded-md px-3 focus:outline-none"
                required
              />
            </div>

            <p className="w-full text-right text-[18px]">
              Forgot password?{" "}
              <span className="text-pink-900 font-semibold">
                click here
              </span>{" "}
            </p>

            <button className="w-full my-2.5 py-2.5 text-[18px] text-white font-medium rounded-lg bg-pink-800">
              Login
            </button>
          </motion.form>

          <p className="w-full h-auto mt-10 text-center text-[18px]">
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
      <div className="ill max-md:hidden"></div>
    </div>
  );
};

export default Login;
