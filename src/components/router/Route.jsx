import React from 'react';
import { createBrowserRouter} from "react-router-dom";
import Main from '../layouts/Main';
import Home from '../pages/Home/Home';

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
        path: "/about",
        element: <h1>About</h1>,
      },
    ],
  },
]);


export default router;