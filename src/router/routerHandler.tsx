import {
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";

import App from "../App";
import Home from "../pages/home";
import SignUp from "../pages/signUp";
import Login from "../pages/login";

const rootRoute = createRootRoute({
  component: App,
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
