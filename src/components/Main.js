import React, { useState, useRef } from "react";

export default function Main() {

    const toggleRef = useRef(null)
    const [isToggled, setIsToggled] = useState(false)

    function handleToggle() {
        setIsToggled(!isToggled)
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
                            className={isToggled ? "menu--dropdown top--tile motion" : "menu--dropdown top--tile reverse--motion"}
                        />
                        <img src={require("../resources/menu-dropdown.png")}
                            className={isToggled ? "menu--dropdown bottom--tile motion" : "menu--dropdown bottom--tile reverse--motion"}
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