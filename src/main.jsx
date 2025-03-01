import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@assets/scss/index.scss";
import App from "./App.jsx";
import { Router } from "./router.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Router}>
        <App />
      </RouterProvider>
    </QueryClientProvider>
  </StrictMode>
);
