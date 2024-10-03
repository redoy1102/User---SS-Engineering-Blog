import React from 'react';

const DashboardBlog = ({ blogs }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* Table head, rendered only once */}
                <thead>
                <tr>
                    <th>Banner</th>
                    <th>Title</th>
                    <th>Published Date</th>
                    <th>Action</th>
                </tr>
                </thead>
                {/* Table body for blog rows */}
                <tbody>
                {blogs.length > 0 && blogs.map((blog, index) => {
                    const { title, publishDate, thumbnail } = blog;
                    return (
                        <tr key={index}>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img src={thumbnail} alt={title} />
                                    </div>
                                </div>
                            </td>
                            <td>{title}</td>
                            <td>{publishDate}</td>
                            <td>
                                <button className="btn btn-outline btn-warning mr-2">Edit</button>
                                <button className="btn btn-outline btn-error">Delete</button>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};

export default DashboardBlog;
