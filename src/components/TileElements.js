import React from "react";
import { data } from "./data";
import { useParams } from "react-router-dom";

export default function TileElements() {

    const {project} = useParams();
    const thisProject = data.find(item => item.name === project)
    
    return (
        <div className="elements--container">
            <h1>{thisProject.name}</h1>
        </div>
    )
}