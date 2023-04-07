import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';


export default function Contact () {

    const [emailSent, setEmailSent] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_m19uao8', 'template_bp2v5xx', form.current, 'GTFXUyur1bqYGfTkG')
        .then((result) => {
            console.log(result.text);
            console.log("message sent")
            setEmailSent(true);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <>
          <div className='contactForm'>
            {!emailSent && (
              <>
                <h1>Reach Out Below</h1>
                <h3>I look forward to hearing from you!</h3>
                <form ref={form} onSubmit={sendEmail}>
                  <label>Name</label>
                  <input type="text" name="form_name" required/>
                  <label>Email</label>
                  <input type="email" name="form_email" required/>
                  <label>Message</label>
                  <textarea name="message" required/>
                  <input id='contactButton' type="submit" value="Send" />
                </form>
              </>
            )}
            {emailSent && <h3>Thank you! Your message has been sent.</h3>}
          </div>
        </>
      );
}