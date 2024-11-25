import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <nav className="Navbar">
            <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : "link"}>
                Vending Machine
            </NavLink>
            <NavLink to="/chips" className={({ isActive }) => isActive ? "active-link" : "link"}>
                Chips
            </NavLink>
            <NavLink to="/soda" className={({ isActive }) => isActive ? "active-link" : "link"}>
                Soda
            </NavLink>
            <NavLink to="/sardines" className={({ isActive }) => isActive ? "active-link" : "link"}>
                Sardines
            </NavLink>
        </nav>
    );
}

export default Navbar;