import {
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";

import App from "../App";
import Home from "../pages/home";
import SignUp from "../pages/signUp";
import Login from "../pages/login";
import NotFound from "../pages/notFound";
import About from "../pages/about";
import Academy from "../pages/academy";
import ContactUs from "../pages/ContactUs";
const rootRoute = createRootRoute({
  component: App,
  notFoundComponent: NotFound,
});

const mainRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const LoginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
});

const signUpRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/create-account",
  component: SignUp,
});

const AboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});
const AcademyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/academy",
  component: Academy,
});

const ContactUsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactUs,
});
const routeTree = rootRoute.addChildren([
  mainRoute,
  LoginRoute,
  signUpRoute,
  AboutRoute,
  AcademyRoute,
  ContactUsRoute,
]);

export const AppRouter = createRouter({ routeTree });
