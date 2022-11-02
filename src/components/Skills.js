import React from "react";
import { motion } from "framer-motion";


export default function Skills() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0 }}
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