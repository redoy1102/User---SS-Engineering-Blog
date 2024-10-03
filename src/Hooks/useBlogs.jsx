import {useEffect, useState} from "react";

const UseBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("/blogsData.json")
            .then(res => res.json())
            .then(data => setBlogs(data))

            .catch(err => console.error("Error fetching blogs:", err));
    }, []);

    return [blogs];
};

export default UseBlogs;