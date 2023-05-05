import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { notifySuccess } from "../../../alert/Alert";
import { Rating } from "@smastrom/react-rating";


const SIngleRecipeCard = ({ recipe }) => {
  const [seeMore, setSeeMore] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const handleSeeMore = () => {
    setSeeMore(!seeMore);
  };

  const handleFavorite = () => {
    setFavorite(true);
    notifySuccess("Added to favorite Successfully");
  };

  const { recipe_name, image, ingredients, cooking_method, rating } = recipe;
  return (
    <div className="w-[90%] mx-auto">
      <div className="card  bg-base-100 shadow-xl my-2">
        <figure>
          <img src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className=" text-2xl font-bold text-primary">{recipe_name}</h2>
          <p>
            <span className="font-semibold text-lg">Ingredients</span>
            {ingredients.map((i) => {
              return <li>{i}</li>;
            })}
          </p>
          <p>
            <p className="font-semibold text-lg">Cooking Method</p>
            {seeMore ? cooking_method : cooking_method.slice(0, 250) + "..."}

            <button className="btn btn-link" onClick={handleSeeMore}>
              {seeMore ? "See Less" : "See More"}
            </button>
          </p>

          <p className="flex items-center gap-2">
            <Rating style={{ maxWidth: 180 }} value={rating} readOnly /> <span className="text-lg">{rating}</span>
          </p>
          <div className="card-actions justify-end">
            <button
              onClick={handleFavorite}
              className={favorite ? "btn  btn-disabled" : "btn btn-primary"}
            >
              Add to favorite <FaRegHeart className=" ml-1"></FaRegHeart>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIngleRecipeCard;
