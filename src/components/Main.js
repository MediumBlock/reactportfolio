import React, { useState, useRef } from "react";

export default function Main() {

    const toggleTopRef = useRef(null)
    const toggleBotRef = useRef(null)
    const toggleBotMenuRef = useRef(null)


    function handleToggle() {
        const top = toggleTopRef.current;
        const bottom = toggleBotRef.current;
        const menu = toggleBotMenuRef.current;
        top.classList.toggle("reverse--motion")
        bottom.classList.toggle("reverse--motion")
        menu.classList.toggle("visible")

    }

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
                <div className="subtext">
                    <h4 className="subheading">Self-motivated and experienced in several disciplines from UI to UX and all the programming needed in between</h4>
                    <h4>Eager to tackle any challenges and skill up in front end or back</h4>
                </div>
                <img src={require("../resources/line.png")}
                    className="squiggle"
                />
            </div>
            <div className="main--right">
                <div>
                    <div onClick={handleToggle}>
                        <img src={require("../resources/menu-dropdown.png")}
                            className="menu--dropdown top--tile motion"
                            ref={toggleTopRef}
                        />
                        <img src={require("../resources/menu-dropdown.png")}
                            className="menu--dropdown bottom--tile motion"
                            ref={toggleBotRef}
                        />
                    </div>
                    <div className="menu"
                        ref={toggleBotMenuRef}
                    >
                        <div className="menu--text">
                            <h5>My Résumé</h5>
                            <h5>My Projects</h5>
                            <h5 className="hello">SAY HELLO</h5>
                            <h5>m.paspaliaris@gmail.com</h5>
                            <h5>+61 420 686 886</h5>
                        </div>
                    </div>
                </div>
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
                <div className="page--markers">
                    <img src={require("../resources/box-purple.png")}
                        className="marker unfilled"
                    />
                    <img src={require("../resources/box-purple-filled.png")}
                        className="marker filled"
                    />
                    <img src={require("../resources/box-purple-filled.png")}
                        className="marker filled"
                    />
                    <img src={require("../resources/box-purple-filled.png")}
                        className="marker filled"
                    />
                    <img src={require("../resources/box-purple-filled.png")}
                        className="marker filled"
                    />

                </div>
            </div>
        </div>
    )
}