import { Contact, Footer } from "./home";
import NavBar from "../components/NavBar";
import { Links, LinkRoutes } from "./home";
import { useState, useEffect } from "react";
const ContactUs = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <header>
        <NavBar links={Links} windowWidth={windowWidth} routes={LinkRoutes} />
      </header>
      <main className="max-lg:py-15 lg:py-10 xl:py-8">
        <Contact />
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default ContactUs;
