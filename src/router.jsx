import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Main from "@components/pages/main";
import Result from "@components/pages/result";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: "result",
        element: <Result />,
      },
    ],
  },
]);
