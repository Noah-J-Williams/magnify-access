import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Magnify_Logo.jpg";

export default function Navbar(){
    return(
    <nav>
        <img src={logo} alt="Magnify Access"/>
        <ul className="flex justify-evenly">
            <NavLink to='/upload'><li>Upload</li></NavLink>
            <NavLink to='/lookup'><li>Lookup</li></NavLink>
        </ul>
    </nav>
    );
}