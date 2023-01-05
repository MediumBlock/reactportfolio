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
                    <h1>Over the past year<span>,</span></h1>
                    <h3>After many years working in different industries, disciplines and countries, in organsiations where I would often make presentations and reports where I needed extensive of use excel to help sort, filter & manage data I realised my passion and enthusiasm for all things technical. On April 1st, 2022, I decided to try my hand at coding, and from that day forward; even after many bugs, errors and issues, I found that my love for coding was indeed not a joke.
                        <br />
                        Since that day forward I have studied religiously never missing an opportunity to try and learn more in my newly adopted craft, from starting with HTML and CSS and then moving forward to deep dives into JavaScript, React and all the Libraries that come with it such as Redux. I have found a constant joy and passion with every new skill I've been able to learn and every app I've been able to build.
                        <br />
                        Every journey begins with a first step, and I am very fortunate to have been able to find something that allows me to be so creative whilst being able to also understand and engineer something so technical at the same time.
                        <br />
                        Utilising learning platforms such as Codecademy and Scrimba I am entirely self-taught and self-motivated, nothing gives me more satisfaction than building a new app or idea, or finding the solution to that one bug in the code that has been paining me for hours.
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