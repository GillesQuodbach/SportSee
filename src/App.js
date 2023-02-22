import React from "react";
import Header from "./Components/Header/Header";
import SideBare from "./Components/SideBar/SideBar";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <SideBare />
      <Outlet />
    </>
  );
}
