import {Outlet} from "react-router-dom";
import NavBar from "./Components/Shared/NavBar/NavBar.jsx";

const Root = () => {
    return (
        <div className="md:mx-20 ">
            <NavBar></NavBar>
            <Outlet />
        </div>
    );
};

export default Root;