import React from "react";
import { motion } from "framer-motion";

export default function AboutMe() {

    return (
        <motion.div
            className="aboutme--top"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0 }}
        >
            <div>

            </div>
        </motion.div>
    )
}