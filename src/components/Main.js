import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function Main() {


    return (
        <motion.div
            className="main--container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 }}}
            exit={{ opacity: 0 }}
        >
            <div className="main--left">
                <h1>Front-end <br />  Developer<span>.</span></h1>
                <h2>A love for creating detailed and complete frontend packages for a great end user experience.</h2>
                <div className="subtext">
                    <h4 className="subheading">Self-motivated and experienced in several disciplines from UI to UX and all the programming needed in between</h4>
                    <h4>Eager to tackle any challenges and skill up in front end or back</h4>
                </div>
                <img src={require("../resources/line.png")}
                    className="squiggle"
                />
            </div>
            <div className="main--right">
                <div className="sub--main">
                    <img src={require("../resources/headshot.png")}
                        className="headshot"
                    />
                    <img src={require("../resources/whiteframe.png")}
                        className="whiteframe"
                    />
                    <img src={require("../resources/mainimg.png")}
                        className="main--img"
                    />

                </div>
            </div>
        </motion.div >
    )
}