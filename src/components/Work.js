import React from "react";
import Tile from "./Tile";
import { motion } from "framer-motion";
import { data } from "./data"

export default function Work() {


    const dataMap = data.map(item => (
        <Tile
            name={item.name}
            key={item.name}
        />
    ))

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0 }}
            className="work--top"

        >
            <div className="work--text">
                <h2>/work.</h2>
                <h4>personal projects I've worked on in the past.</h4>
            </div>

            <div className="tile--container">
                {dataMap}
            </div>

        </motion.div>
    )
}