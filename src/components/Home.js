import React from 'react';
import {Link} from 'react-router-dom';
import profile from '../developerInformation/profile.jpeg';
import resume from '../developerInformation/resume.pdf';
import './Home.css';

const Home = () => {
    return (
        <div className="mainHome"> 
            <div className="infoContainer">
                <div className="devInfo">
                    <div className="hello">Hello, I am</div>
                    <div className="name">Chirag Gupta</div>
                    <div className="About">
                        <ul>
                            <li>Student at MSIT, Delhi</li>
                            <li>A Full Stack Web Developer</li>
                            <li>Competitive Programmer</li>
                            <li>Video Editor</li>
                        </ul>
                    </div>
                    <div className="buttons">
                        <a href={resume} download="resume"><button className="CV btn">Download CV</button></a>
                        <Link to="/Personal-Portfolio/ChiragGupta/Contact"><button className="contact btn">Contact Me</button></Link>
                    </div>
                </div>
                <div className="devPic">
                    <img src={profile} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Home;