import React from "react";
import Logo from '../assets/pulseLogo.jpg'
import Today from "./Today";

// NavBar functional component: allow user to navigate web-app
const NavBar = () => {

    // return JSX/HTML
    return (
        <div className="navbar flexbox-container">

            <Today className = "flexbox-container" />

            <div className="topics">
                <nav className="flexbox-container">
                    <a>Home</a>
                    <a>Politics</a>
                    <a>Business</a>
                    <a>Technology</a>
                    <a>Science</a>
                    <a>Health</a>
                    <a>Entertainment</a>
                    <a>Sports</a>
                </nav>
            </div>

        </div>
    );
};

// export component to be used in other files
export default NavBar;