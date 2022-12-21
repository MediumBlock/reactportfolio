import React, { useContext } from "react";
import { motion } from "framer-motion";
import useAppDirection from "../Hooks/useAppDirection";
import { Context } from "../Hooks/Context";


export default function Skills() {

    const { isUp, location, navArrows } = useAppDirection("/aboutme", "/", 1000);
    const { width, breakpoint } = useContext(Context);



    return (
        <motion.div
            initial={{ opacity: 0, y: location.state.value, transition: { duration: 0.8 } }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            exit={{ opacity: 0, y: isUp ? 1000 : -1000, transition: { duration: 0.8 } }}
            className="skills--background"
        >
            {navArrows}
            <div className="skills">
                <div className="skills--left">
                    {width > breakpoint && <img src={require("../resources/green-dots.png")}
                        className="green" />}
                    <h1>Design</h1>
                    <h5>Experience in most aspects of visual design across multiple disciplines such as colour theory, typography, visual hierachy, design philosophy and more.
                        <br /><br />Also experienced in achieving the best possible end user experience utilising UX topics such as Interaction / Inclusive Design, Design Psychology, as well as encoporating methods to help speed up and streamline the design process such as Wireframing and Prototyping
                        <br /><br />All the design principles listed above and more have not only been extensively studied but also put into practise across multiple projects showcased later on.</h5>
                    {width > breakpoint && <img src={require("../resources/skills-left.png")} />}
                </div>
                <div className="skills--right">
                    {width > breakpoint && <img src={require("../resources/skills-right.png")} />}
                    <h1>Engineering</h1>
                    <h5>What's good design without the means to implement? It has been crucial in my development to focus on sharpening my skills on all languages learnt throughout my studies with a particular focus on JavaScript and React.
                        <br /><br /> I have made countless apps from scratch to solidify my skills and test the limits of my knowledge; whether it is a simple task list app that every developer starts off with to more detailed and complex apps such as reddit clones or even this very portfolio you are viewing now, each app was created with a purpose in mind, and none of them were lacking in passion. </h5>
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