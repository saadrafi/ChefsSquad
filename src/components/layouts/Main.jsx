import React from "react";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ToastContainer position="bottom-center"></ToastContainer>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
