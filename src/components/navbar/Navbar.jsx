import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="navbar w-[90%] mx-auto bg-base-100">
      <div className="flex justify-between w-full">
        <Link to="/" className="font-extrabold cursor-pointer text-3xl ">
          <span>Chef's</span>
          <span className=" text-green-700">Squad</span>
        </Link>
        <div className="flex lg:flex-row">
          <div>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "btn btn-link" : "btn btn-ghost")}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "btn btn-link" : "btn btn-ghost")}
            >
              About
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "btn btn-link" : "btn btn-ghost")}
            >
              Blog
            </NavLink>
          </div>
          <div className="flex flex-row items-center ml-auto gap-3">
            <div
              className="h-[40px] w-[40px] tooltip tooltip-bottom tooltip-info"
              data-tip={user?.displayName ? user?.displayName : "User"}
            >
              {user?.photoURL ? (
                <img src={user?.photoURL} alt="user" className="h-full w-full rounded-full" />
              ) : (
                <FaUser className="h-full w-full"></FaUser>
              )}
            </div>
            {user ? (
              <Link onClick={logOut} className="btn btn-primary">
                LogOut
              </Link>
            ) : (
              <Link to="/login" className="btn btn-primary">
                LogIn
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
