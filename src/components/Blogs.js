import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className="mainBlogs"> 
            <div className="blogs">
                <div className="blog blog1">
                    <h2>Why Javascript is Fun?</h2>
                    <p>I am learning javascript from the starting of 2022, I have learned many concepts in JS. I have seen that the latest version of JS has a feature in which the code gets executed randomly and that feature is so amazing.</p>
                    <button>Read More!</button>
                </div>
                <div className="blog blog2">
                    <h2>Why C++ is Amazing?</h2>
                    <p>C++, developed by Bjarne Stroustrup, is an amazing language. It is easy to learn as well as closely related to computer hardware systems.</p>
                    <button>Read More!</button>
                </div>
            </div>
        </div>
    )
}

export default Blogs