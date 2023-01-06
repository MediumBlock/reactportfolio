import React from "react";
import { motion } from "framer-motion";
import useAppDirection from "../Hooks/useAppDirection";


export default function AboutMe() {
    const { isUp, location, navArrows } = useAppDirection("/work", "/skills", 1000, -1000);

    return (
        <motion.div
            className="aboutme--top"
            initial={{ opacity: 0, y: location.state.value, transition: { duration: 0.65 } }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.65 } }}
            exit={{ opacity: 0, y:  isUp ? 1300 : -1300, transition: { duration: 0.65 } }}
        >
            {navArrows}
            <div className="aboutme--container">
                <div className="aboutme--content">
                    <h1>Over the past year<span>...</span></h1>
                    <h3>After years working in diverse industries, disciplines and countries, frequently presenting and reporting, often using Excel to sort, filter & manage data, I realised my passion and enthusiasm for all things technical.
                        <br />
                        In April 2022, I decided to try my hand at coding, and from that day forward, through all the debugging, errors and problem-solving, saw my love for coding take flight.
                        <br />
                        Since that day forward I have studied religiously, never missing an opportunity to refine my newly-adopted craft, from starting with HTML and CSS and through to deep dives into JavaScript, React and all the Libraries that come with it, such as Redux. I thrive with every new skill I've been able to learn, and every app I've been able to build.
                        <br />
                        Every journey begins with a first step, and I am very fortunate to have found a calling where I can merge cutting-edge creativity with engineering technical solutions to unique challenges.
                        <br />
                        Building-upon learning platforms such as Codecademy and Scrimba where I am entirely self-taught and self-motivated, nothing gives me more satisfaction than building a new app or idea, or finding the solution to that one tenacious bug in the code.
                    </h3>
                </div>
                    <img
                        src={require("../resources/transparency8.png")}
                        className="aboutme--image"
                        alt="computer graphic"
                    />
            </div>
        </motion.div >
    )
}