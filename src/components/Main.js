import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";


export default function Main() {


    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;
    const [ isUp, setIsUp] = useState(false)

    useEffect(() => {
        function handleNavigation(e) {
            if (e.deltaY > 1) {
                setIsUp(false)
                navigate("/skills", {state:{value: 1000}});
        
            }
        }
        window.addEventListener("wheel", handleNavigation);

        return () => window.removeEventListener("wheel", handleNavigation);
    }, [pathname]);


    return (
        <motion.div
            className="main--container"
            initial={{ opacity: 0, y: -1000, transition: { duration: 0.8 } }}
            animate={{opacity: 1, y: 0, transition: { duration: 0.8 }}}
            exit={{ opacity: 0, y: -1000, transition: { duration: 0.8 } }}
        >
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
         </motion.div >
    )
}