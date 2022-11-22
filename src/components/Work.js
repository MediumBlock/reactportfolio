import React, {useEffect, useState} from "react";
import Tile from "./Tile";
import { motion } from "framer-motion";
import { data } from "../resources/data"
import { useNavigate, useLocation } from "react-router-dom";


export default function Work() {

    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;
    const [ isUp, setIsUp] = useState(false)

    const dataMap = data.map(item => (
        <Tile
            name={item.name}
            key={item.name}
            logo={item.logo}
        />
    ))


    useEffect(() => {
        function handleNavigation(e) {
            if (e.deltaY > 1) {
                setIsUp(false)
                navigate("/messageme", {state:{value: 1000}});
            } else if(e.deltaY < 1) {
                setIsUp(true)
                navigate("/aboutme", {state:{value: -1000}})
            }
        }
        window.addEventListener("wheel", handleNavigation);

        return () => window.removeEventListener("wheel", handleNavigation);
    }, [pathname]);



    return (
        <motion.div
            initial={{ opacity: 0, y: location.state.value ? location.state.value : 0, transition: { duration: 0.8 } }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            exit={{ opacity: 0, y: isUp ? 1000 : -1000, transition: { duration: 0.8 } }}
            className="work--top"
        >
            <div className="work--text">
                <h2><span>/</span>work<span>.</span></h2>
                <h4>some of the personal projects I've worked on in the past.</h4>
            </div>
            <div className="tile--container">
                {dataMap}
            </div>

        </motion.div >
    )
}