import React from "react";
import { motion } from "framer-motion";

export default function Resume() {

    return (
        <motion.div
            initial={{ opacity: 0, y: 1000, transition: { duration: 0.8 } }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            exit={{ opacity: 0, y: 1000, transition: { duration: 0.8 } }}
            className="resume--container">
            <div className="resume--section">
                <div className="resume--left">
                    <div className="contact--left">
                        <h4>Details</h4>
                        <ul>
                            <li>Melbourne, Australia</li>
                            <li>+61 420 686 886</li>
                            <li>m.paspaliaris@gmail.com</li>
                        </ul>
                    </div>
                    <div className="tech--left">
                        <h4>Core Technologies</h4>
                        <ul>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>CSS</li>
                            <li>React Router</li>
                            <li>Redux</li>
                            <li>HTML</li>
                        </ul>

                    </div>
                    <div className="education--left">
                        <h4>Formal Education</h4>
                        <ul>
                            <li>Bachelor of Accounting<br />University of South Australia</li>
                            <li>Bachelor of Mechanical & Manufacturing Engineering <br />University of Melbourne(incomplete)</li>
                        </ul>
                    </div>
                </div>
                <div className="resume--right">
                    <div className="hero--right">
                        <h1>Michael Paspa</h1>
                        <h2>Aspiring Developer</h2>
                        <h4>Driven with a passion for life and programming, eager to hit the ground running and see what the future holds</h4>
                        <hr />
                    </div>
                    <div className="education--right">
                        <h3>Education - Programming</h3>
                        <h4>Codecademy | April - December 2022</h4>
                        <h5>Course: Front-End Developer</h5>
                        <p>Codecademy is a paid service that offers many pathways in many different programming disciplines, in the front-end developer course over 7 months I took classes, completed assignments & projects in the the following fields / learning objectives: </p>
                        <ul>
                            <li>Web Design (color theory etc)</li>
                            <li>CSS + HTML</li>
                            <li>Responsive + Animations</li>
                            <li>Deploying websites / Github</li>
                            <li>Javascript Fundamentals / Async / Javascript Testing</li>
                            <li>React / JSX / Lifecycle Methods / Functional & Class Components</li>
                            <li>Redux</li>
                            <li>Algorithms / Data structures</li>
                        </ul>
                        <h4>Scrimba | July - August 2022</h4>
                        <h5>Course: React Developer</h5>
                        <p>Scrimba is platform that offers both paid and free interactive visual courses in many area regarding web deveopment, I enrolled and completed all react curses by Bob Ziroll upto and including Advanced.</p>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="experience--right">

                    </div>

                </div>

            </div>

        </motion.div>
    )
}