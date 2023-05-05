import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";
import { AiFillLike } from "react-icons/ai";

const ChefBanner = ({ chefId }) => {
  const [chefData, setChefData] = useState({});

  useEffect(() => {
    fetch(`https://chef-server-saadrafi.vercel.app/chefs/${chefId}`)
      .then((res) => res.json())
      .then((data) => setChefData(data));
  }, []);

  const { chef_name, chef_picture, years_of_experience, num_recipes, likes, bio } = chefData;

  return (
    <div className="my-12">
      <div className="w-[90%] mx-auto flex flex-col lg:flex-row bg-base-100 justify-around items-center gap-3">
        <div className=" w-1/2 h-full flex-1">
          <LazyLoad>
            <img className="w-full h-full" src={chef_picture} alt="Chef" />
          </LazyLoad>
        </div>
        <div className="flex flex-col gap-3 flex-1 px-4">
          <h1 className=" text-center text-3xl text-primary font-bold">{chef_name}</h1>
          <p className=" text-justify text-gray-400">{bio}</p>
          <p className="text-lg text-primary">
            Has <span className="font-medium">{years_of_experience}</span> years of experience
          </p>
          <p className="text-lg text-primary">
            <span className="font-medium">{num_recipes}</span> recipes
          </p>
          <p className="flex items-center gap-2 text-lg">
            <AiFillLike></AiFillLike>

            <span className="text-primary font-medium">{likes} likes</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChefBanner;
