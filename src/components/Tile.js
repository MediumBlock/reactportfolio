import React from "react";
import { Link } from "react-router-dom";

export default function Tile(props) {


    return (
        <Link to={`/work/${props.name}`} className="tile">
            <div className="tile--top">
                <img src={require(`../resources/${props.logo}`)} />
            </div>
            <div className="tile--bottom">
                <h5>{props.name}</h5>
            </div>
        </Link>
    )
}

