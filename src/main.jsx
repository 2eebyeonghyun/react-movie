import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@assets/scss/index.scss";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { Router } from "./router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
