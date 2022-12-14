import React, { useContext } from "react";
import { motion } from "framer-motion";
import useAppDirection from "../Hooks/useAppDirection";
import { Context } from "../Hooks/Context";


export default function Skills() {

    const { isUp, location, navArrows } = useAppDirection("/aboutme", "/", 1000, -1000);
    const { width, breakpoint } = useContext(Context);



    return (
        <motion.div
            initial={{ opacity: 0, y: location.state.value, transition: { duration: 0.65 } }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.65 } }}
            exit={{ opacity: 0, y: isUp ? 1000 : -1000, transition: { duration: 0.65 } }}
            className="skills--background"
        >
            {navArrows}
            <div className="skills">
                <div className="skills--left">
                    {width > breakpoint && <img src={require("../resources/green-dots.webp")}
                        className="green"
                        alt=""
                    />}
                    <h1>Design</h1>
                    <h5>Experience in most aspects of visual design across multiple disciplines; such as colour theory, typography, visual hierachy, design philosophy and more.
                        <br /><br />Also experienced in achieving the best possible end user experience utilising UX topics such as Interaction / Inclusive Design, Design Psychology, and combining tools and processes such as Wireframing and Prototyping to speed-up and streamline design processes.
                        <br /><br />All the design principles listed above have not only been extensively studied but also put into practise across multiple projects showcased later on.</h5>
                    {width > breakpoint && <img src={require("../resources/skills-left.webp")}
                        alt=""
                    />}
                </div>
                <div className="skills--right">
                    {width > breakpoint && <img src={require("../resources/skills-right.webp")}
                        alt=""
                    />}
                    <h1>Engineering</h1>
                    <h5>What's good design without the means to implement? It has been crucial in my development to focus on sharpening my skills on all languages learnt throughout my ongoing studies with a particular focus on JavaScript, specifically, the React library.
                        <br /><br /> I have made countless apps from scratch to solidify my skills and test the limits of my knowledge; whether it is a simple task list app that every new developer surely has created to more detailed and complicated apps such as reddit clones or even this very portfolio. Each app was created with a purpose in mind, and a drive to see it to completion. </h5>
                </div>
            </div>
            <div>
                <img src={require("../resources/line.webp")}
                    className="squiggle--skills"
                    alt=""
                />
            </div>
        </motion.div>
    )
}