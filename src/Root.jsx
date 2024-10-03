import {Outlet} from "react-router-dom";
import NavBar from "./Components/Pages/Shared/NavBar/NavBar.jsx";
import Footer from "./Components/Pages/Shared/Footer.jsx";

const Root = () => {
    return (
        <div className="md:mx-20 ">
            <NavBar></NavBar>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;