import React from "react";
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import banner from "../../../assets/banner.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-primary">Login</h2>
            <p className="text-xs mt-4 text-[#002D74]">
              If you are already a member, easily log in
            </p>

            <form action="" className="flex flex-col gap-4">
              <input
                className="p-2 mt-8 rounded-xl border"
                type="email"
                name="email"
                placeholder="Email"
              />
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <FaEye className="absolute right-3 top-[35%] text-gray-400"></FaEye>
              </div>
              <button className="btn btn-primary rounded-xl text-white py-2 hover:scale-105 duration-300">
                Login
              </button>
            </form>

            <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>

            <button className="bg-white border py-2 w-full rounded-xl mt-5 flex gap-2 justify-center items-center text-sm hover:scale-105 duration-300 text-primary">
              <FaGoogle></FaGoogle>
              Login with Google
            </button>
            <button className="bg-white border py-2 w-full rounded-xl mt-5 flex gap-2 justify-center items-center text-sm hover:scale-105 duration-300 text-primary">
              <FaGithub></FaGithub>
              Login with Github
            </button>

            <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
              <a href="#">Forgot your password?</a>
            </div>

            <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
              <p>Don't have an account?</p>
              <Link to="/signup" className="py-2 px-5 bg-white border text-primary rounded-xl hover:scale-110 duration-300">
                Register
              </Link>
            </div>
          </div>

          <div className="md:block hidden w-1/2">
            <img
              className="rounded-2xl"
              src={banner}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
