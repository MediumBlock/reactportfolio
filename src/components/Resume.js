import React from "react";
import { motion } from "framer-motion";

export default function Resume() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0 }}
            className="resume--container">
                <div className="resume--section">
                    <div className="resume--left">
                        <div className="contact--left">

                        </div>
                        <div className="tech--left">

                        </div>
                        <div className="education--left">

                        </div>
                    </div>
                    <div className="resume--right">
                        <div className="hero--right">

                        </div>
                        <div className="education--right">

                        </div>
                        <div className="experience--right">

                        </div>

                    </div>

                </div>

        </motion.div>
    )
}