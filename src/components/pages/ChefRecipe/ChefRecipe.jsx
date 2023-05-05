import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SIngleRecipeCard from "./SIngleRecipeCard";
import ChefBanner from "./ChefBanner";

const ChefRecipe = () => {
  const recipes = useLoaderData();

  const { chefId } = useParams();

  return (
    <div>
      <ChefBanner chefId={chefId} key={chefId}></ChefBanner>
      <br />
      {recipes.map((recipe) => (
        <SIngleRecipeCard recipe={recipe} key={recipe.recipe_id}></SIngleRecipeCard>
      ))}
    </div>
  );
};

export default ChefRecipe;
