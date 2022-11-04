import React, { useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"

export default function Navigation() {

    const toggleTopRef = useRef(null)
    const toggleBotRef = useRef(null)
    const toggleBotMenuRef = useRef(null)
    const location = useLocation()






    function handleToggle() {
        const top = toggleTopRef.current;
        const bottom = toggleBotRef.current;
        const menu = toggleBotMenuRef.current;
        top.classList.toggle("reverse--motion")
        bottom.classList.toggle("reverse--motion")
        menu.classList.toggle("visible")
    }


    const boxFilled = <img
        src={require("../resources/box-purple.png")}
        className="marker unfilled"
    />

    const boxUnfilled = <img
        src={require("../resources/box-purple-filled.png")}
        className="marker filled"
    />

    return (
        <div className="navigation--container">
            <div className="main--logo">
                <Link to="/">
                    {
                        location.pathname === "/"
                            ?
                            <img src={require("../resources/logo2.png")}
                                className="logo"
                            />
                            :
                            <img src={require("../resources/logo-purp.png")}
                                className="logo"
                            />
                    }
                </Link>
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
                <div className="page--markers">
                    <Link to="/">
                        {location.pathname === "/"
                            ?
                            boxFilled
                            :
                            boxUnfilled
                        }
                    </Link>
                    <Link to="/skills">
                        {location.pathname === "/skills"
                            ?
                            boxFilled
                            :
                            boxUnfilled
                        }
                    </Link>
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