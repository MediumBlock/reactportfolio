import React from "react";
import { data } from "./data";
import { useParams } from "react-router-dom";

export default function TileElements() {

    const { project } = useParams();
    const thisProject = data.find(item => item.name === project)

    return (
        <div className="elements--container">
            <h2>{thisProject.name}</h2>
            <div className="elements--content">
                <div className="elements--text">
                    <p>{thisProject.description}</p>
                    <br />
                    <br />
                    <p>{thisProject.features}</p>
                </div>
                <img src={require(`../resources/${thisProject.thumbnail}`)} />
            </div>

        </div>
    )
}