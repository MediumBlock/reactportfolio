import React, { useContext } from "react";
import { motion } from "framer-motion";
import useAppDirection from "../Hooks/useAppDirection";
import { Context } from "../Hooks/Context";


export default function Main() {

    const { isUp, location, navArrows } = useAppDirection("/skills", "/", 1000, -1000);
    const { width, breakpoint } = useContext(Context)


    return (
        <motion.div
            className="main--container"
            initial={{ opacity: 0, y: -1000, transition: { duration: 0.65 } }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.65 } }}
            exit={{ opacity: 0, y: -1000, transition: { duration: 0.65 } }}
        >
            {navArrows}
            <div className="main--content">
                <div className="main--left">
                    <h1>Front-end <br />  Developer<span>.</span></h1>
                    <h2>A love for creating detailed and complete frontend packages for a great end user experience.</h2>
                    <div className="subtext">
                        <h4 className="subheading">Self-motivated and experienced in several disciplines from UI to UX and all the programming needed in between.</h4>
                        <h4 className="subheading">Eager to tackle any challenges big or small and willing to learn any new concepts, ideas, languages or frameworks.</h4>
                    </div>
                    {breakpoint < width &&
                        <img src={require("../resources/line.png")}
                            className="squiggle"
                        />}
                </div>
                <div className="main--right">
                    <div className="sub--main">
                        <img src={require("../resources/headshot.png")}
                            className="headshot"
                            alt="developer headshot"
                        />
                        <img src={require("../resources/whiteframe.png")}
                            className="whiteframe"
                            alt="background graphic"
                        />
                        {breakpoint < width ? <img src={require("../resources/mainimg.png")}
                            className="main--img"
                            alt="background graphic"
                        />
                            :
                            <img src={require("../resources/mainimg-mobile.png")}
                                className="main--img"
                                alt="background graphic"
                            />}

                    </div>
                </div>
            </div>
        </motion.div >
    )
}