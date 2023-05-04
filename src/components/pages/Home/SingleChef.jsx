import React from "react";

const SingleChef = ({ chef }) => {
  const { chef_id, chef_picture, chef_name, years_of_experience, num_recipes, likes } = chef;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl w-full">
      <figure>
        <img src={chef_picture} alt="Album" className="h-full w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{chef_name}</h2>
        <p>
          <span className="font-semibold">{years_of_experience}</span> years of experience
        </p>
        <p>
          <span className="font-semibold">{num_recipes}</span> recipes
        </p>
        <p>
          <span className="font-semibold">{likes}</span> likes
        </p>

        <div className="card-actions justify-center">
          <button className="btn btn-primary">View Recipes</button>
        </div>
      </div>
    </div>
  );
};

export default SingleChef;
