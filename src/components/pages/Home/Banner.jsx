import React from "react";
import banner from "../../../assets/banner.png";

const Banner = () => {
  return (
    <div className="w-[90%] mx-auto my-7 bg-gradient-to-r from-lime-500 to-lime-300">
      <div className="flex lg:flex-row flex-col-reverse p-8">
        <div className=" lg:w-1/2 flex flex-col justify-center gap-4 italic">
          <h1 className="text-5xl font-bold text-center">Welcome to Chef's Squad</h1>
          <p className="text-center">
            Find the finest Italian recipes. Discover the authentic and delicious flavors of Italy.
            Our website is dedicated to bringing you a wide variety of traditional Italian recipes,
            including classic pasta dishes, mouth-watering pizza recipes, succulent meat dishes,
            fresh salads, and decadent desserts.Whether you're looking for a quick weeknight meal or
            a special dish for a celebration, our Italian recipe website has something for everyone.
            So, come explore and savor the rich culinary heritage of Italy with us!
            <br />
          </p>
          <span className="text-2xl font-bold btn-primary btn">Buon Appetito!</span>
        </div>
        <div className=" h-full lg:w-1/2">
          <img src={banner} alt="" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
