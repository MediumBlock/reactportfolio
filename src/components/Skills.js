import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";



export default function Skills(props) {


    const location = useLocation();

    console.log('skills', props)

    return (
        <motion.div
            initial={location.pathname === "/skills" ? { opacity: 1, y: 1000, transition: { duration: 0.8 } } : { opacity: 1, y: -1000, transition: { duration: 0.8 } }}
            // animate={{ opacity: 1, transition: { duration: 0.5 } }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            exit={location.pathname === "/skills" ? { opacity: 1, y: 1000, transition: { duration: 0.8 } } : { opacity: 1, y: 1000, transition: { duration: 0.8 } }}
            className="skills--background"
        >
            <div className="skills">
                <div className="skills--left">
                    <img src={require("../resources/green-dots.png")}
                        className="green" />
                    <h1>Design</h1>
                    <h5>I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me (~_^). I'm committed to creating fluent user experiences while staying fashionable.</h5>
                    <img src={require("../resources/skills-left.png")} />
                </div>
                <div className="skills--right">
                    <img src={require("../resources/skills-right.png")} />
                    <h1>Engineering</h1>
                    <h5>In building JavaScript applications, I'm equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — performance and scalabilty are priorities on my radar.</h5>
                    <img />
                </div>
            </div>
            <div>
                <img src={require("../resources/line.png")}
                    className="squiggle--skills"
                />
            </div>
        </motion.div>
    )
}