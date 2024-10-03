import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ErrorPage from "./Components/Pages/ErrorPage.jsx";
import Root from "./Root.jsx";
import Blogs from "./Components/Pages/Blogs/Blogs.jsx";
import BlogDetails from "./Components/Pages/Blogs/BlogDetails.jsx";
import Home from "./Components/Pages/Home/Home.jsx";
import Dashboard from "./Components/Pages/Shared/NavBar/Dashboard/Dashboard.jsx";
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
     <HelmetProvider>
         <RouterProvider router={router} />
     </HelmetProvider>
  </StrictMode>,
)
