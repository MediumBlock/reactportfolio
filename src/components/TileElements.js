import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { data } from "../resources/data";

export default function TileElements() {

    const navigate = useNavigate();
    const [isGoingBack, setIsGoingBack] = useState(false)
    const { project } = useParams();
    const thisProject = data.find(item => item.name === project)

    const navBack = !isGoingBack &&
        <div className="tile--backarrow">
            <img src={require("../resources/mobilenavpurp.webp")}
                onClick={handleNavBack}
                alt="go back"
            />
        </div>


    function handleNavBack() {
        setTimeout(() => {
            setIsGoingBack(true)
            navigate("/work", { state: { value: 1000 } });
        }, 200)
    }


    return (
        <motion.div
            initial={{ opacity: 0, y: 1000, transition: { duration: 0.65 } }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.65 } }}
            exit={{ opacity: 0, y: -1000, transition: { duration: 0.65 } }}
            className="elements--container"
        >
            {navBack}
            <div>
                <h2>{thisProject.name}</h2>
                <div className="elements--content">
                    <div className="elements--text">
                        <p>{thisProject.description.p1}</p>
                        <br /><br />
                        <p>{thisProject.description.p2}</p>
                        <br /><br />
                        <p>{thisProject.description.p3}</p>
                        <br /><br />
                        <p>{thisProject.description.p4}</p>
                        {thisProject.description.p4 && <><br /><br /></>}
                        <p>{thisProject.description.p5}</p>
                        {thisProject.description.p5 && <><br /></>}
                        <h4>Technologies and tools used:</h4>
                        <ul>{thisProject.features.map(item => (<li key={uuidv4()}>{item}</li>))}</ul>
                        <h4>Approx time to complete:</h4>
                        <p>{thisProject.time}</p>
                        <h4>Link to project on GitHub <a href={thisProject.gitLink}
                            target='_blank'
                            rel="noopener"
                            aria-label={thisProject.name}
                        >
                            here.
                        </a></h4>
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
            </div>

        </motion.div>
    )
}