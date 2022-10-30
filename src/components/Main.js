import React from "react";

export default function Main() {

    return (
        <div className="main--container">
            <div className="main--logo">
                <img src={require("../resources/logo2.png")}
                    className="logo"
                />
            </div>
            <div className="main--left">
                <h1>Front-end <br />  Developer<span>.</span></h1>
                <h2>A love for creating detailed and complete frontend packages for a great end user experience.</h2>
                <img src={require("../resources/line.png")}
                        className="squiggle"
                    />
            </div>
            <div className="main--right">
                <div className="sub--main">
                    <img src={require("../resources/headshot.png")}
                        className="headshot"
                    />
                    <img src={require("../resources/whiteframe.png")}
                        className="whiteframe"
                    />
                    <img src={require("../resources/mainimg.png")}
                        className="main--img"
                    />

                </div>
            </div>
        </div>
    )
}