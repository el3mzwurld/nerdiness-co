import { useNavigate } from "@tanstack/react-router";
import NavBar from "../components/NavBar";
import { Links, LinkRoutes } from "./home";
import { useState, useEffect } from "react";
export default function NotFound() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  const navigate = useNavigate();

  const handleNavtoHome = () => {
    navigate({ to: "/" });
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <header>
        <NavBar links={Links} routes={LinkRoutes} windowWidth={windowWidth} />
      </header>
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-gray-500">Page not found</p>
    </div>
  );
}
