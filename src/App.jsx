import { Outlet } from "react-router-dom";
import Header from "@components/layout/Header.jsx";

export default function RoutingApp() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
