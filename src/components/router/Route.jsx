import React from 'react';
import { createBrowserRouter} from "react-router-dom";
import Main from '../layouts/Main';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Login/Register';

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
        path:"/login",
        element:<Login></Login>
      },
      {
        path: "/signup",
        element:<Register></Register>
      },
      {
        path: "/about",
        element: <h1>About</h1>,
      },
    ],
  },
]);


export default router;