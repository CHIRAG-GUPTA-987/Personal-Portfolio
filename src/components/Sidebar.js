import React from 'react';
import './Sidebar.css';
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <ul>
                <Link to="/ChiragGupta">
                    <li>Home</li>
                </Link>
                <Link to="/ChiragGupta/Intro">
                    <li>Intro</li>
                </Link>
                <Link to="/ChiragGupta/Services">
                    <li>Services</li>
                </Link>
                <Link to="/ChiragGupta/Blogs">
                    <li>Blog</li>
                </Link>
                <Link to="/ChiragGupta/Contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Sidebar;