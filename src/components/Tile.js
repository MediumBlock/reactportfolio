import React from "react";

export default function Tile(props) {


    return (
        <div className="tile">
            <div className="tile--top">
                <h4>title + logo</h4>
            </div>            
            <div className="tile--bottom">
                <h5>{props.name}</h5>
            </div>
        </div>
    )
}

