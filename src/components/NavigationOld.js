import React, { useRef, useEffect, useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Context } from "../Hooks/Context";

export default function NavigationOld() {

    const toggleTopRef = useRef(null)
    const toggleBotRef = useRef(null)
    const toggleBotMenuRef = useRef(null)
    const location = useLocation()
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { width, breakpoint } = useContext(Context);

    const menuCrossPurp =
        <>
            <img src={require("../resources/menu-dropdown.webp")}
                className="menu--dropdown top--menu motion"
                ref={toggleTopRef}
                alt="menu dropdown"
            />
            <img src={require("../resources/menu-dropdown.webp")}
                className="menu--dropdown bottom--menu motion"
                ref={toggleBotRef}
                alt="menu dropdown"
            />
        </>

    const menuCrossGreen =
        <>
            <img src={require("../resources/menu-dropdown-green.webp")}
                className="menu--dropdown top--menu motion"
                ref={toggleTopRef}
                alt="menu dropdown"
            />
            <img src={require("../resources/menu-dropdown-green.webp")}
                className="menu--dropdown bottom--menu motion"
                ref={toggleBotRef}
                alt="menu dropdown"
            />
        </>


    const boxFilled = location.pathname === "/aboutme" ?
        <img
            src={require("../resources/box-green.webp")}
            className="marker unfilled"
            alt="sidebar nav"
        />
        :
        <img
            src={require("../resources/box-purple.webp")}
            className="marker unfilled"
            alt="sidebar nav"
        />


    const boxUnfilled = location.pathname === "/aboutme" ?
        <img
            src={require("../resources/box-green-filled.webp")}
            className="marker filled"
            alt="sidebar nav"
        />
        :
        <img
            src={require("../resources/box-purple-filled.webp")}
            className="marker filled"
            alt="sidebar nav"
        />

    const LinkArray = ["/", "/skills", "/aboutme", "/work", "/messageme"]
    const LinkBoxes = LinkArray.map(item => (
        <div onClick={() => handleSideBar(item)}
            key={item}
            alt=""
        >
            {location.pathname === item ? boxFilled : boxUnfilled}
        </div>
    ))


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
            navigate("/work", { state: { value: -1000 } })
            :
            navigate("/work", { state: { value: 1000 } })
        handleToggle();
    }

    function handleSideBar(loc) {
        navigate(loc, { state: { value: 1000 } })
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


    return (
        <div className="navigation--container">
            <div className="nav--logo">
                <Link to="/">
                    {isMenuOpen && width < breakpoint ?
                        <img src={require("../resources/logo-purp.webp")}
                            className="logo"
                            alt="logo"
                        />
                        :
                        location.pathname === "/" || location.pathname === "/aboutme"
                            ?
                            <img src={require("../resources/logo2.webp")}
                                className="logo"
                                alt="logo"
                            />
                            :
                            <img src={require("../resources/logo-purp.webp")}
                                className="logo"
                                alt="logo"
                            />
                    }
                </Link>
            </div>
            <div className="nav--right">
                <div>
                    <div>
                        {
                            location.pathname !== "/aboutme" && location.pathname === "/" && width < breakpoint && !isMenuOpen
                                ?
                                menuCrossGreen
                                :
                                location.pathname === "/aboutme" && !isMenuOpen
                                    ?
                                    menuCrossGreen
                                    :
                                    menuCrossPurp
                        }
                    </div>
                    <div className="menu"
                        ref={toggleBotMenuRef}
                    >
                        <div className="menu--text">
                            <Link to="/resume"
                                onClick={handleToggle}>
                                <h5>My Résumé</h5>
                            </Link>
                            <div onClick={handleNavigate}
                                className="menu--projects">
                                <h5>My Projects</h5>
                            </div>
                            <h5 className="hello">SAY HELLO</h5>
                            <h5>michael.paspa@gmail.com</h5>
                            <h5>+61 420 686 886</h5>
                        </div>
                    </div>
                </div>

                {location.pathname.includes("/work/") || location.pathname.includes("/resume") || width < breakpoint ? null :
                    <div className="page--markers">
                        {LinkBoxes}
                    </div>
                }
            </div>
        </div>
    )
}