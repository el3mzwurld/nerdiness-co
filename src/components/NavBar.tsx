import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IoMenu, IoClose } from "react-icons/io5";
import logo from "../assets/images/nav_logo.png";
import { Link } from "@tanstack/react-router";

interface NavProps {
  links: Array<string>;
  windowWidth: number;
}

const NavBar = ({ links, windowWidth }: NavProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="w-full px-2.5 py-2.5 flex items-center bg-transparent absolute top-0 left-0 z-1 sm:gap-3.5">
      <div className="logo w-[55px] h-[auto] sm:w-[40px]">
        <img
          src={logo}
          className="w-[100%] h-auto bg-white rounded-[0.5em] sm:rounded-[0px]"
        />
      </div>
      <div
        className="hamburger sm:hidden w-[35px] h-[35px] flex items-center justify-center"
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        {isNavOpen ? (
          <IoClose color="white" className="w-[60%] h-[60%]"></IoClose>
        ) : (
          <IoMenu color="white" className="w-[60%] h-[60%]"></IoMenu>
        )}
      </div>

      {isNavOpen && windowWidth < 628 ? (
        <AnimatePresence>
          <motion.nav
            className={`${isNavOpen ? "nav-open" : ""} bg-[#f0f0f0;] absolute -translate-x-1/2 left-[50%] flex flex-col w-[50%] h-auto z-[1] items-center justify-center gap-2 list-none py-[10px] px-[5px] text-[12px] font-medium text-gray-500`}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ duration: 0.08 }}
          >
            <ul className="flex-col flex items-center justify-center gap-2">
              {links.map((link, index) => (
                <li key={index} className="w-auto text-center">
                  {link}
                </li>
              ))}
            </ul>
            {windowWidth < 768 ? (
              <ul className="w-full flex flex-col items-center justify-center gap-2">
                <Link
                  to={"/create-account"}
                  className="w-auto text-center text-pink-900 text-bold"
                >
                  Register
                </Link>
                <Link
                  to={"login"}
                  className="w-auto text-center text-pink-900 text-bold"
                >
                  Login
                </Link>
              </ul>
            ) : (
              <li className="w-auto text-center">Manage Account</li>
            )}
          </motion.nav>
        </AnimatePresence>
      ) : (
        <nav className="w-[100%] flex flex-1 h-auto py-1.25 list-none justify-between text-white px-2.5">
          <ul className="flex items-center justify-center gap-2 text-pink-900 text-[10px] font-semibold">
            {links.map((link, index) => (
              <li key={index} className="w-auto text-center">
                {link}
              </li>
            ))}
          </ul>
          <li className="w-auto text-center text-sm bg-transparent text-[10px]">
            Manage Account
          </li>
        </nav>
      )}
    </div>
  );
};

export default NavBar;
