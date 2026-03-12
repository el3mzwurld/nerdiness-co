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
    <div className="w-full px-2.5 py-2.5 flex items-center justify-between bg-transparent absolute top-0 left-0 z-1">
      <div className="logo w-[55px] h-[auto]">
        <img src={logo} className="w-[100%] h-auto bg-white rounded-[0.5em]" />
      </div>
      <div
        className="hamburger w-[35px] h-[35px] flex items-center justify-center lg:hidden"
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        {isNavOpen ? (
          <IoClose color="white" className="w-[60%] h-[60%]"></IoClose>
        ) : (
          <IoMenu color="white" className="w-[60%] h-[60%]"></IoMenu>
        )}
      </div>
      {windowWidth < 1024 && isNavOpen && (
        <AnimatePresence>
          {" "}
          <motion.nav
            className={`${isNavOpen ? "nav-open" : ""} absolute -translate-x-1/2 bg-white left-[50%] flex flex-col w-[50%] h-auto z-[1] items-center justify-center gap-2 list-none py-[10px] px-[5px] text-[12px] font-medium text-gray-500 opacity-0`}
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
      )}

      {windowWidth > 1023 && (
        <nav className="max-sm:hidden flex-1 flex w-full h-auto items-center gap-2 list-none py-[10px] px-5 text-[12px] font-medium text-gray-500 justify-between">
          <ul className="flex items-center justify-center gap-3.5 text-pink-900 text-[14px] xl:gap-5">
            {links.map((link, index) => (
              <li
                key={index}
                className="w-auto text-center cursor-pointer before:absolute before:w-full relative before:-bottom-1.5 before:bg-pink-700 before:h-1 before:rounded-md before:opacity-0 before:invisible before-content-[''] hover:before:opacity-100 hover:before:visible before:ease-in-out before:duration-500 hover:before:-bottom-1 before:translate-y-1 hover:before:w-[80%] before:-translate-x-1/2 before:left-1/2"
              >
                {link}
              </li>
            ))}
          </ul>

          <li className="w-auto text-center text-[14px] text-white cursor-pointer">
            Manage Account
          </li>
        </nav>
      )}
    </div>
  );
};

export default NavBar;
