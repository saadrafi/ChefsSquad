import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleChef from './SingleChef';

const ChefSection = () => {
    const chefs =useLoaderData();
    return (
      <div className="w-[90%] mx-auto my-8">
        <h1 className="text-4xl text-center font-bold mt-10">Our Chefs</h1>
        <p className="text-center text-gray-500 my-4">Our chefs are the best in the world</p>
        <div className=" grid lg:grid-cols-2 gap-3 grid-cols-1">
          {chefs.map((chef) => (
            <SingleChef chef={chef} key={chef.chef_id}></SingleChef>
          ))}
        </div>
      </div>
    );
};

export default ChefSection;