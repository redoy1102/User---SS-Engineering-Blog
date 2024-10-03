import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useBlogs from "../../../../../Hooks/useBlogs.jsx";
import DashboardBlog from "./DashboardBlog.jsx";

const Dashboard = () => {
    const [blogs] = useBlogs();

    const cProgramming = blogs.filter(blog => blog.category === "C");
    const pythonBlogs = blogs.filter(blog => blog.category === "Python");
    const cppBlogs = blogs.filter(blog => blog.category === "C++");
    const phpBlogs = blogs.filter(blog => blog.category === "Php");

    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div>
            <h1 className="my-3 text-3xl text-center font-bold">Published Blogs - {blogs.length}</h1>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>C Programming - {cProgramming.length}</Tab>
                    <Tab>C++ - {cppBlogs.length}</Tab>
                    <Tab>Python - {pythonBlogs.length}</Tab>
                    <Tab>Php - {phpBlogs.length}</Tab>
                </TabList>

                <TabPanel>
                    <DashboardBlog blogs={cProgramming} />
                </TabPanel>
                <TabPanel>
                    <DashboardBlog blogs={cppBlogs} />
                </TabPanel>
                <TabPanel>
                    <DashboardBlog blogs={pythonBlogs} />
                </TabPanel>
                <TabPanel>
                    <DashboardBlog blogs={phpBlogs} />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Dashboard;
