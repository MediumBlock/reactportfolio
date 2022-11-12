import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function MessageMe() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_l0ydn4l', 'template_pfrc4lb', form.current, 'Gvck6KUwM1AwGXsPy')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <div className='messageme--title'>
                <h2>Send me a message!</h2>
                <h4>Got a question or proposal, or just want
                    to say hello? Go ahead.</h4>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <div className='form--name'>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                </div>
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};