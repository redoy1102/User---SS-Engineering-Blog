// src/components/Blogs.jsx

import React, { useState } from "react";
import Blog from "./Blog.jsx";
import { Helmet } from 'react-helmet-async';
import useBlogs from "../../../Hooks/useBlogs.jsx";

const Blogs = () => {
    const [blogs, loading, error] = useBlogs();

    const cProgramming = blogs.filter(blog => blog.category === "C")
    const pythonBlogs = blogs.filter(blog => blog.category === "Python")
    const cppBlogs = blogs.filter(blog => blog.category === "C++")
    const phpBlogs = blogs.filter(blog => blog.category === "Php")

    const isLoading = blogs.length === 0;

    return (
        <div className="container mx-auto p-4">
            <Helmet>
                <title>Blogs - SS Blog</title>
            </Helmet>

            {isLoading ? (
                <p className="text-center text-gray-500">Loading blogs...</p>
            ) : (
                <div>
                    <h1 className="mb-5 text-3xl text-center font-bold">C Programming Related Blogs</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        {cProgramming.map((blog) => (
                            <Blog
                                key={blog.id}
                                blog={blog}
                            />
                        ))}
                    </div>


                    <h1 className="my-5 text-3xl text-center font-bold">C++ Related Blogs</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        {cppBlogs.map((blog) => (
                            <Blog
                                key={blog.id}
                                blog={blog}
                            />
                        ))}
                    </div>

                    <h1 className="my-5 text-3xl text-center font-bold">Php Related Blogs</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        {phpBlogs.map((blog) => (
                            <Blog
                                key={blog.id}
                                blog={blog}
                            />
                        ))}
                    </div>

                    <h1 className="my-5 text-3xl text-center font-bold">Python Related Blogs</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        {pythonBlogs.map((blog) => (
                            <Blog
                                key={blog.id}
                                blog={blog}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Blogs;
