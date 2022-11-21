import React from "react";
import Tile from "./Tile";
import { motion } from "framer-motion";
import { data } from "../resources/data"

export default function Work() {


    const dataMap = data.map(item => (
        <Tile
            name={item.name}
            key={item.name}
            logo={item.logo}
        />
    ))

    return (
        <motion.div
            initial={{ opacity: 0, y: 1000, transition: { duration: 0.8 } }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            exit={{ opacity: 0, y: -1000, transition: { duration: 0.8 } }}
            className="work--top"
        >


            <div className="work--text">
                <h2><span>/</span>work<span>.</span></h2>
                <h4>some of the personal projects I've worked on in the past.</h4>
            </div>
            <div className="tile--container">
                {dataMap}
            </div>

        </motion.div >
    )
}