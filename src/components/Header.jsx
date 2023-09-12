import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css'; // Import Materialize CSS styles
import M from "materialize-css/dist/js/materialize.min.js"; // Import Materialize JS

export const Header = () => {
    useEffect(() => {
        // Initialize side-menu (right edge)
        const sideMenus = document.querySelectorAll(".sidenav");
        M.Sidenav.init(sideMenus, { edge: "right" });


    }, []);

    return (
        <>
            {/* top nav */}
            <nav className="z-depth-0">
                <div className="nav-wrapper container">
                    <NavLink to="/">Hasty <span>Tasty</span> </NavLink>
                    <span className="right grey-text text-darken-1">
                        <i className="material-icons sidenav-trigger" data-target="side-menu">menu</i>
                    </span>
                </div>
            </nav>

            {/* side nav */}
            <ul id="side-menu" className="sidenav">
                <li>
                    <NavLink className="subheader">Tasty Tasty</NavLink>
                </li>
                <li>
                    <NavLink to="/" className="waves-effect">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="waves-effect">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="waves-effect">Contact</NavLink>
                </li>
            </ul>
        </>
    );
};
