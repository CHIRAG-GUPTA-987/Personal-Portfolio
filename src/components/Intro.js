import React from 'react'
import './Intro.css'

const Intro = () => {
    return (
        <>
            <div className="main"> 
                <h2>About Me</h2>
                <div className="About">Hi there, I am Chirag Gupta, a sophomore at Maharaja Surajmal Instittute of Technology. I am a developer having decent knowledge of Data Structures and related Algorithms. Moreover, I am one of the core team member of a Peer programming community "Decypher".</div>
                <h2>My Skills</h2>
                <div className="skills">
                    <ul>
                        <li>Full Stack Web Developer</li>
                        <li>Video Editing</li>
                        <li>Problem Solving</li>
                        <li>Data Structures</li>
                        <li>WordPress</li>
                    </ul>
                </div>
                <h2>Languages Known</h2>
                <div className="languages">
                    <ul>
                        <li className="language">
                            <div className="languageInfo">HTML&nbsp;&nbsp;
                                <span className="skillKnown" width="15vw"></span>
                            </div>
                        </li>
                        <li className="language">
                            <div className="languageInfo">CSS&nbsp;&nbsp;
                                <span className="skillKnown" width="0vw"></span>
                            </div>
                        </li>
                        <li className="language">
                            <div className="languageInfo">JS&nbsp;&nbsp;
                                <span className="skillKnown" width="15vw"></span>
                            </div>
                        </li>
                        <li className="language">
                            <div className="languageInfo">C++&nbsp;&nbsp;
                                <span className="skillKnown" width="15vw"></span>
                            </div>
                        </li>
                        <li className="language">
                            <div className="languageInfo">C&nbsp;&nbsp;
                                <span className="skillKnown" width="15vw"></span>
                            </div>
                        </li>
                        <li className="language">
                            <div className="languageInfo">Java&nbsp;&nbsp;
                                <span className="skillKnown" width="15vw"></span>
                            </div>
                        </li>
                        <li className="language">
                            <div className="languageInfo">Hindi&nbsp;&nbsp;
                                <span className="skillKnown" width="15vw"></span>
                            </div>
                        </li>
                        <li className="language">
                            <div className="languageInfo">English&nbsp;&nbsp;
                                <span className="skillKnown" width="14vw"></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Intro;