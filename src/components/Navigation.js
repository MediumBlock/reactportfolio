import React, { useRef, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"

export default function Navigation() {

    const toggleTopRef = useRef(null)
    const toggleBotRef = useRef(null)
    const toggleBotMenuRef = useRef(null)
    const location = useLocation()
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false)


    function handleToggle() {
        const top = toggleTopRef.current;
        const bottom = toggleBotRef.current;
        const menu = toggleBotMenuRef.current;
        top.classList.toggle("reverse--motion")
        bottom.classList.toggle("reverse--motion")
        menu.classList.toggle("visible")
        setIsMenuOpen(prev => !prev)
    }

    function handleNavigate() {
        location.pathname === "/messageme" || location.pathname === "/resume"
        ? 
        navigate("/work", {state:{value: -1000}})
        :
        navigate("/work", {state:{value: 1000}})

    }
    
    function handleSideBar(loc) {
        navigate(loc, {state:{value: 1000}})
    }


    useEffect(() => {
        let handler = (event) => {
            if (isMenuOpen && !toggleBotMenuRef.current.contains(event.target)
                || toggleBotRef.current.contains(event.target)
                || toggleTopRef.current.contains(event.target)) {
                handleToggle()
            }
        };
        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });




    const boxFilled = location.pathname === "/aboutme" ?
        <img
            src={require("../resources/box-green.png")}
            className="marker unfilled"
        />
        :
        <img
            src={require("../resources/box-purple.png")}
            className="marker unfilled"
        />


    const boxUnfilled = location.pathname === "/aboutme" ?
        <img
            src={require("../resources/box-green-filled.png")}
            className="marker filled"
        />
        :
        <img
            src={require("../resources/box-purple-filled.png")}
            className="marker filled"
        />

    const LinkArray = ["/", "/skills", "/aboutme", "/work", "/messageme"]
    const LinkBoxes = LinkArray.map(item => (
        <div onClick={() => handleSideBar(item)}
            key={item}
        >
            {location.pathname === item ? boxFilled : boxUnfilled}
        </div>
    ))



    return (
        <div className="navigation--container">
            <div className="main--logo">
                <Link to="/">
                    {
                        location.pathname === "/" || location.pathname === "/aboutme"
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
                    <div>
                        {location.pathname !== "/aboutme"
                            ?
                            <>
                                < img src={require("../resources/menu-dropdown.png")}
                                    className="menu--dropdown top--menu motion"
                                    ref={toggleTopRef}
                                />
                                <img src={require("../resources/menu-dropdown.png")}
                                    className="menu--dropdown bottom--menu motion"
                                    ref={toggleBotRef}
                                />
                            </>
                            :
                            <>
                                <img src={require("../resources/menu-dropdown-green.png")}
                                    className="menu--dropdown top--menu motion"
                                    ref={toggleTopRef}
                                />
                                <img src={require("../resources/menu-dropdown-green.png")}
                                    className="menu--dropdown bottom--menu motion"
                                    ref={toggleBotRef}
                                />
                            </>

                        }
                    </div>

                    <div className="menu"
                        ref={toggleBotMenuRef}
                    >
                        <div className="menu--text">
                            <Link to="/resume">
                                <h5>My Résumé</h5>
                            </Link>
                            <div onClick={handleNavigate}>
                                <h5>My Projects</h5>
                            </div>
                            <h5 className="hello">SAY HELLO</h5>
                            <h5>m.paspaliaris@gmail.com</h5>
                            <h5>+61 420 686 886</h5>
                        </div>
                    </div>
                </div>

                {location.pathname.includes("/work/") || location.pathname.includes("/resume") ? null :
                    <div className="page--markers">
                        {LinkBoxes}
                    </div>
                }
            </div>
        </div>
    )
}