import React from "react";
import { motion } from "framer-motion";

export default function AboutMe() {

    return (
        <motion.div
            className="aboutme--top"
            initial={{ opacity: 0, y: 1000, transition: { duration: 0.8 } }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            exit={{ opacity: 0, y: -1000, transition: { duration: 0.8 } }}
        >
            <div className="aboutme--container">
                <div className="aboutme--content">
                    <h1>Over the past year<span>,</span></h1>
                    <h3>I've built products for companies and businesses around the globe ranging from marketing websites to complex solutions and enterprise apps with focus on fast, elegant and accessible user experiences.

                        Currently, I work at Shopify as a Senior UX Developer and Accessibility advocate crafting thoughtful and inclusive experiences that adhere to web standards for over a million merchants across the world.

                        Before now, I was Principal Frontend Engineer at hellotax, where I worked on a suite of tools and services tailored at providing fast, automated VAT Registration / filings & Returns solutions for multi-channel sellers across Europe.

                        Prior to hellotax, I was Senior frontend engineering contractor with Pixel2HTML, building JavaScript applications and interfaces for orgs and individuals.

                        I once also led the frontend team at a Russian startup, Conectar through building multiple React applications into a single robust learning platform.
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