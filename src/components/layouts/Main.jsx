import React from "react";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ToastContainer position="bottom-center"></ToastContainer>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
