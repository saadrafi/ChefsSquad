import React from "react";
import { notifySuccess } from "../../../alert/Alert";

const FormPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const recipe = e.target.recipe.value;
    const description = e.target.description.value;
    const data = { name, email, recipe, description };
    e.target.reset();
    notifySuccess("Recipe added successfully");
    
  };
  return (
    <div className="w-[90%] mx-auto my-10">
      <div className="md:w-1/2 px-8 md:px-16 mx-auto">
        <h2 className="font-bold text-2xl text-primary">Are you a Chef</h2>
        <p className="text-xs mt-4 text-[#002D74]"> Add you recipe quickly & become famous</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="p-2 mt-8 rounded-xl border"
            type="text"
            name="name"
            placeholder="name"
            required
          />
          <input
            className="p-2 rounded-xl border"
            type="email"
            name="email"
            placeholder="email"
            required
          />
          <input
            className="p-2 rounded-xl border"
            type="text"
            name="recipe"
            placeholder="recipe name"
          />

          <textarea
            className="p-2 rounded-xl border"
            type="text"
            name="description"
            placeholder="description"
            required
          />

          <button className="btn btn-primary rounded-xl text-white py-2 hover:scale-105 duration-300">
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
