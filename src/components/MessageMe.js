import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

export default function MessageMe() {
    const form = useRef();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_l0ydn4l', 'template_pfrc4lb', form.current, 'Gvck6KUwM1AwGXsPy')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setIsSubmitted(true);
    };

    return (
        <motion.div
            className='messageme--main'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0 }}
        >
            <div className='messageme--container'>
                <div className='messageme--title'>
                    <h2>Send me a message!</h2>
                    <h4>Got a question or proposal, or just want
                        to say hello? Go ahead.</h4>
                </div>
                <div className='form--container'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='form--row1'>
                            <div className='form--name'>
                                <label>Your Name</label>
                                <input type="text"
                                    name="user_name"
                                    placeholder='Enter your name'
                                    disabled={isSubmitted}
                                />
                            </div>
                            <div className='form--email'>
                                <label>Your Email</label>
                                <input type="email"
                                    name="user_email"
                                    placeholder='Enter your email address'
                                    disabled={isSubmitted}
                                />
                            </div>
                        </div>
                        <div className='form--message'>
                            <label>Your Message</label>
                            <textarea name="message"
                                placeholder='Hi, I would love to get in touch and talk about XY.'
                                disabled={isSubmitted}
                            />
                        </div>
                            <input className={isSubmitted ? "button button--sent" : "button" }
                                value={isSubmitted ? "Sent!" : "Send" }
                                type="submit"
                                disabled={isSubmitted}
                            />
                    </form>
                </div>
            </div>

        </motion.div>
    );
};