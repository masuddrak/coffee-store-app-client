import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import AddCoffee from './Pages/AddCoffee';
import EspressoEmporium from './Pages/EspressoEmporium';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/espressoEmporium",
        element:<EspressoEmporium></EspressoEmporium>,
        loader:()=>fetch("http://localhost:5000/coffees")
      },
      {
        path:"/addCoffee",
        element:<AddCoffee></AddCoffee>
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
