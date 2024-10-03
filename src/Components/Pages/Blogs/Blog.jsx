// src/components/Blog.jsx

import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { AiOutlineExpand } from 'react-icons/ai';

const Blog = ({ blog}) => {
    const { title, excerpt, author, publishDate, thumbnail } = blog;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <div className="m-4">
                <div className="flex gap-3">
                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
                        </div>
                    </div>

                    <div>
                        <h1 className="font-bold">{author.name}</h1>
                        <h1>{publishDate}</h1>
                    </div>
                </div>
            </div>
            <figure><img src={thumbnail} alt={title}/></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-justify">{excerpt}</p>
                {/*<div className="card-actions justify-end">*/}
                {/*    <button className="btn btn-primary">Details</button>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default Blog;
