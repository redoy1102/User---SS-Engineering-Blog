import Blog from "./Blog.jsx";

const Blogs = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <Blog/>
                <Blog/>
                <Blog/>
                <Blog/>
                <Blog/>
                <Blog/>
                <Blog/>
            </div>
        </div>
    );
};

export default Blogs;