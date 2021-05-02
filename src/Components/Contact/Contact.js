import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <section style={{backgroundColor:'#f1f2f6', height:'600px'}}>
             <div className="d-flex justify-content-center">
           <div id="container">  
          
           <form id="contactus" action="" method="post" style={{marginTop:'100px'}}>
            <h3>Contact form</h3>
            <fieldset> <input placeholder="name" type="text" tabindex="1" required autofocus/> </fieldset>
            <fieldset> <input placeholder="Email Address" type="email" tabindex="2" required/> </fieldset>
            <fieldset> <input placeholder="Phone Number" type="tel" tabindex="3" required/> </fieldset>
            <fieldset> <textarea placeholder="Type your message here..." tabindex="5" required></textarea> </fieldset>
            <fieldset> <button name="submit" type="submit" id="contactus-submit" data-submit="...Sending">Send Now</button> </fieldset>
            </form>
           </div>
            </div>
        </section>
    );
};

export default Contact;