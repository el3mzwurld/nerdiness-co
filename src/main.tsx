import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
import { RouterProvider } from "@tanstack/react-router";
import { AppRouter } from "./router/routerHandler.ts";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={AppRouter}></RouterProvider>
  </StrictMode>,
);
