import React, { useContext } from "react";
import { data } from "../resources/data";
import { motion } from "framer-motion";
import { Context } from "../Hooks/Context";

import { Link, useParams } from "react-router-dom";

export default function TileElements() {

    const { project } = useParams();
    const { width, breakpoint } = useContext(Context)
    const thisProject = data.find(item => item.name === project)

    return (
        <motion.div
            initial={{ opacity: 0, y: 1000, transition: { duration: 0.65 } }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.65 } }}
            exit={{ opacity: 0, y: 1000, transition: { duration: 0.65 } }}
            className="elements--container"
        >
            <h2>{thisProject.name}</h2>
            <div className="elements--content">
                <div className="elements--text">
                    <p>{thisProject.description.p1}</p>
                    <br />
                    <p>{thisProject.description.p2}</p>
                    <br />
                    <p>{thisProject.description.p3}</p>
                    <br />
                    <p>{thisProject.description.p4}</p>
                    <br />
                    <p>{thisProject.description.p5}</p>
                    <br />
                    <h4>Features Incorporated:</h4>
                    <ul>{thisProject.features.map(item => (<><li>{item}</li></>))}</ul>
                    <p>Approx time to complete:</p>
                    <br />
                    <p>{thisProject.time}</p>

                </div>
                <a href={thisProject.link}
                    target='_blank'
                    rel="noopener"
                    aria-label={thisProject.name}>
                    <img src={require(`../resources/${thisProject.thumbnail}`)}
                        alt="project image"
                    />
                </a>
            </div>

        </motion.div>
    )
}