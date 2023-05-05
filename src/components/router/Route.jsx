import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import ChefRecipe from "../pages/ChefRecipe/ChefRecipe";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:3000/chefs"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "/chefrecipe/:chefId",
        element: (
          <PrivateRoute>
            <ChefRecipe></ChefRecipe>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(`http://localhost:3000/chefrecipe/${params.chefId}`);
        },
      },
      {
        path: "/about",
        element: <h1>About</h1>,
      },
    ],
  },
]);

export default router;
