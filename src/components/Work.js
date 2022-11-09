import React from "react";
import Tile from "./Tile";
import { motion } from "framer-motion";

export default function Work() {


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0 }}
            className="work--top"

        >
            <h2>/work.</h2>
            <h4>personal projects I've worked on in the past.</h4>
            <Tile />
        </motion.div>
    )
}