import React from 'react';
import './Services.css';
import {Link} from 'react-router-dom';

const Services = () => {
    return (
        <div class="mainServices">
            <div class="heading">Services</div>
            <button>Go For a Project</button>
            <button>Solve a Problem</button>
            <button>Collaborate</button>
            <Link to="/Personal-Portfolio/ChiragGupta/Contact"><button>Contact us for more services</button></Link>
        </div>
    )
}

export default Services;