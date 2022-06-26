import React from 'react';
import './Sidebar.css';
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <ul>
                <Link to="/Personal-Portfolio/ChiragGupta">
                    <li>Home</li>
                </Link>
                <Link to="/Personal-Portfolio/ChiragGupta/Intro">
                    <li>Intro</li>
                </Link>
                <Link to="/Personal-Portfolio/ChiragGupta/Services">
                    <li>Services</li>
                </Link>
                <Link to="/Personal-Portfolio/ChiragGupta/Blogs">
                    <li>Blog</li>
                </Link>
                <Link to="/Personal-Portfolio/ChiragGupta/Contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Sidebar;