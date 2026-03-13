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

const routeTree = rootRoute.addChildren([mainRoute, LoginRoute, signUpRoute]);

export const AppRouter = createRouter({ routeTree });
