import React from "react";
import { motion } from "framer-motion";
import useAppDirection from "../Hooks/useAppDirection";


export default function AboutMe() {
    const { isUp, location } = useAppDirection("/work", "/skills", 1000, -1000);

    return (
        <motion.div
            className="aboutme--top"
            initial={{ opacity: 0, y: location.state.value, transition: { duration: 0.8 } }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            exit={{ opacity: 0, y:  isUp ? 1300 : -1300, transition: { duration: 0.8 } }}
        >
            <div className="aboutme--container">
                <div className="aboutme--content">
                    <h1>Over the past year<span>,</span></h1>
                    <h3>I started my coding journey on April the 1st 2022, after many years working in different industries, disciplines and countries I found an immediate and profound satisfaction with programming, from my first lesson on April fools day, I found out that my love for coding was indeed not a joke.
                        <br />
                        From that day forward I have studied almost religiously never missing a day to try and learn more in my newly adapted craft, from starting with html and css and then moving forward to deep dives into JavaScript, React and all the React Libraries that come with it such as Redux. I have found a constant joy and passion with every new skill I've been able to learn and utilise.
                        <br />
                        Every journey begins with a first step, and I am very fortunate to have taken that step as I wouldn't have been able to find a passion that allows me to be so creative and understand something so technical at the same time.
                        <br />
                        Utilising learning platforms such as Codecademy and Scrimba I am entirely self-taught and self-motivated, nothing gives me more satisfaction than building a new app or idea, or finding the solution to that one bug in the code that was paining me for hours.
                    </h3>

                </div>
                <div>
                    <img
                        src={require("../resources/transparency8.png")}
                        className="aboutme--image"
                    />

                </div>

            </div>
        </motion.div >
    )
}