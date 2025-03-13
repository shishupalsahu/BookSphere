import React from 'react';
import './Contact.css'; // Optional: Add a CSS file for styling

function Contact() {
    return (
        <div className='bg-gray-900'>
        <div className=" contact" id="contact">
            <div className="contact_main">
                <form action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="79e400c0-1c71-40c8-ab38-9bbc1ebce30b" />
                    <h1 className='font-bold text-red-900'>Send Me A Message</h1>
                    <p>Your email address will not be published. All fields are required</p>
                    <div>
                        <input type="text" className="name" name="name" placeholder="Your Name" required />
                        <input type="text" className="mail" name="email" placeholder="Your Email" required />
                    </div>
                    <textarea name="Text" cols="30" rows="10" placeholder="Message" required></textarea>
                    <button type="submit">
                        <span className="text">Submit</span><span>Thanks!</span>
                    </button>
                </form>
            </div>
        </div>
    </div>
    );
}

export default Contact;
