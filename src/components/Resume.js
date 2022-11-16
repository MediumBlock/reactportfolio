import React from "react";
import { motion } from "framer-motion";

export default function Resume() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0 }}
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
                            <li>React Redux</li>
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
                    </div>
                    <div className="education--right">
                        <p>codecademy</p>
                    </div>
                    <div className="experience--right">

                    </div>

                </div>

            </div>

        </motion.div>
    )
}