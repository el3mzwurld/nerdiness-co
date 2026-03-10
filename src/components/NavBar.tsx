import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IoMenu, IoClose } from "react-icons/io5";
import logo from "../assets/images/nav_logo.png";

interface NavProps {
  links: Array<string>;
}

const NavBar = ({ links }: NavProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="w-full px-2.5 py-2.5 flex items-center justify-between bg-transparent absolute top-0 left-0 z-1">
      <div className="logo w-[55px] h-[auto]">
        <img src={logo} className="w-[100%] h-auto bg-white rounded-[0.5em]" />
      </div>
      <div
        className="hamburger w-[35px] h-[35px] flex items-center justify-center"
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        {isNavOpen ? (
          <IoClose color="white" className="w-[60%] h-[60%]"></IoClose>
        ) : (
          <IoMenu color="white" className="w-[60%] h-[60%]"></IoMenu>
        )}
      </div>

      {isNavOpen && (
        <AnimatePresence>
          {" "}
          <motion.nav
            className={`${isNavOpen ? "nav-open" : ""} absolute -translate-x-1/2 left-[50%] flex flex-col w-[50%] h-auto z-[1] items-center justify-center gap-2 list-none py-[10px] px-[5px] text-[12px] font-medium text-gray-500`}
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

            <li className="w-auto text-center">Manage Account</li>
          </motion.nav>
        </AnimatePresence>
      )}
    </div>
  );
};

export default NavBar;
