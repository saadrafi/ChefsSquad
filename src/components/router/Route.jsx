import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import ChefRecipe from "../pages/ChefRecipe/ChefRecipe";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Error/ErrorPage";
import BlogPage from "../blog/BlogPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://chef-server-saadrafi.vercel.app/chefs"),
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
          return fetch(`https://chef-server-saadrafi.vercel.app/chefrecipe/${params.chefId}`);
        },
      },
      {
        path: "/about",
        element: <h1>About</h1>,
      },
      {
        path: "/blog",
        element: <BlogPage></BlogPage>,
      },
    ],
  },
]);

export default router;
