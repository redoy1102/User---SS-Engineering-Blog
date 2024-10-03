import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./Components/Pages/ErrorPage.jsx";
import Root from "./Root.jsx";
import Blogs from "./Components/Pages/Blogs/Blogs.jsx";
import BlogDetails from "./Components/Pages/Blogs/BlogDetails.jsx";
import Home from "./Components/Pages/Home/Home.jsx";
import Dashboard from "./Components/Shared/NavBar/Dashboard.jsx";
import './index.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
              path: '/',
              element: <Home />
            },
            {
                path: "/blogs",
                element: <Blogs />,
            },
            {
                path: "blogDetails/:id",
                element: <BlogDetails />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            }
        ],
    },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
