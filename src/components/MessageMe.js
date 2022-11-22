import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

export default function MessageMe() {
    const form = useRef();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isCheckMarked, setIsCheckMarked] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;
    const [ isUp, setIsUp] = useState(false)

    useEffect(() => {
        function handleNavigation(e) {
            if (e.deltaY < 1) {
                setIsUp(true)
                navigate("/work", {state:{value: -1000}});
            
            }
        }
        window.addEventListener("wheel", handleNavigation);

        return () => window.removeEventListener("wheel", handleNavigation);
    });


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_l0ydn4l', 'template_pfrc4lb', form.current, 'Gvck6KUwM1AwGXsPy')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setIsSubmitted(true);
        setIsCheckMarked(true)

        setTimeout(() => {
            setIsCheckMarked(false);
        }, 1500)
    };



    return (
        <>
            <img
                src={require("../resources/green-checkmark.png")}
                className={isCheckMarked ? "messageme--checkmark on" : "messageme--checkmark"}
            />

            <motion.div
                className='messageme--main'
                initial={{ opacity: 0, y: 1000, transition: { duration: 0.8 } }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
                exit={{ opacity: 0, y: 1000, transition: { duration: 0.8 } }}
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
                                        required
                                    />
                                </div>
                                <div className='form--email'>
                                    <label>Your Email</label>
                                    <input type="email"
                                        name="user_email"
                                        placeholder='Enter your email address'
                                        disabled={isSubmitted}
                                        required
                                    />
                                </div>
                            </div>
                            <div className='form--message'>
                                <label>Your Message</label>
                                <textarea name="message"
                                    placeholder='Hi, I would love to get in touch and talk about XY.'
                                    disabled={isSubmitted}
                                    required
                                />
                            </div>
                            <input className={isSubmitted ? "button button--sent" : "button"}
                                value={isSubmitted ? "Sent!" : "Send"}
                                type="submit"
                                disabled={isSubmitted}
                            />
                        </form>
                    </div>
                </div>
            </motion.div>
        </>
    );
};