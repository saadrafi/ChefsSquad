import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SingleRecipe = ({ data }) => {
  const { recipe_name, image } = data;
  return (
    <div className="card w-full  bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body  h-48">
        <h2 className="card-title h-1/2">
          {recipe_name}
          <div className="badge badge-secondary">Treanding</div>
        </h2>
        <div className="card-actions  justify-end">
          <button className="btn btn-primary">View Recipe</button>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
