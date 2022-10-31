import React, { useState, useRef } from "react";

export default function Main() {

    const toggleRef = useRef(null)
    const toggleSecondRef = useRef(null)
// reverse--motion 
    function handleToggle() {
        const wrapper = toggleRef.current;
        const secondWrapper = toggleSecondRef.current
        wrapper.classList.toggle("reverse--motion")
        secondWrapper.classList.toggle("reverse--motion")

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
                    <div className="menu"
                        onClick={handleToggle}
                    >
                        <img src={require("../resources/menu-dropdown.png")}
                            className="menu--dropdown top--tile motion"
                            ref={toggleRef}
                        />
                        <img src={require("../resources/menu-dropdown.png")}
                            className="menu--dropdown bottom--tile motion"
                            ref={toggleSecondRef}
                        />
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
            </div>
        </div>
    )
}