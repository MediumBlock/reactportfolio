import React from "react";
import { motion } from "framer-motion";

export default function Work() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0 }}
            className="work--top"

        >
            <div
            >
                <h1>hello</h1>
            </div>
        </motion.div>
    )
}