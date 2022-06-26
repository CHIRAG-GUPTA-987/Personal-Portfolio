import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="mainContact"> 
            <div className="contactForm">
                <form action="Contact.html">
                    <div className="heading">
                        <h1>Contact me for Work/General Enquiries</h1>
                    </div>
                    <div className="Name">
                        <label for="name">Name: </label>
                        <input type="text" name="name" id="name" placeholder="Enter your name: "/>
                    </div>
                    <div className="email">
                        <label for="Email">Email Address: </label>
                        <input type="email" name="Email" id="Email" placeholder="xyz@gmail.com"/>
                    </div>
                    <div className="phone">
                        <label for="Phone">Phone: </label>
                        <input type="number" name="Phone" id="Phone" minlength="10" maxlength="10" placeholder="XXXXXXXXXXX"/>
                    </div>
                    <div className="promise">We will never share your email and phone with third parties</div>
                    <div className="Enquiry">
                        <label for="enquiry">Enquiry: </label>
                        <textarea name="enquiry" id="enquiry" rows="4" placeholder="Enter you enquiry"></textarea>
                    </div>
                    <div className="isclient">
                        <input type="checkbox" name="isClient" id="isClient" checked/>
                        <label for="isClient">I want you to work on a project with me!</label>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;