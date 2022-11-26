import React from "react";
import { data } from "../resources/data";
import { motion } from "framer-motion";

import { useParams } from "react-router-dom";

export default function TileElements() {

    const { project } = useParams();
    const thisProject = data.find(item => item.name === project)

    return (
        <motion.div
        initial={{ opacity: 0, y: 1000, transition: { duration: 0.8 } }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, y: 1000, transition: { duration: 0.8 } }} 
        className="elements--container"
        >
            <h2>{thisProject.name}</h2>
            <div className="elements--content">
                <div className="elements--text">
                    <p>{thisProject.description.p1}</p>
                    <br />
                    <br />
                    <p>{thisProject.description.p2}</p>
                    <br />
                    <br />
                    <p>{thisProject.description.p3}</p>
                    <br />
                    <br />
                    <p>{thisProject.description.p4}</p>
                    <br />
                    <br />
                    <p>{thisProject.description.p5}</p>
                    <br />
                    <br />
                    <p>{thisProject.features}</p>
                </div>
                <img src={require(`../resources/${thisProject.thumbnail}`)} />
            </div>

        </motion.div>
    )
}