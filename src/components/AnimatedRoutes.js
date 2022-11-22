import React, {useEffect, useState} from "react";
import Skills from "./Skills";
import Main from "./Main";
import AboutMe from "./AboutMe";
import Work from "./Work";
import { Routes, Route, useNavigate, useLocation, BrowserRouter as Router } from "react-router-dom"
import { AnimatePresence } from "framer-motion";
import TileElements from "./TileElements";
import MessageMe from "./MessageMe";
import Resume from "./Resume";


export default function AnimatedRoutes() {
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;
    const [ testUp, setTestUp] = useState(true)

    console.log('testing', testUp)

    useEffect(() => {
        function handleNavigation(e) {
            if (e.deltaY > 1 && pathname === "/aboutme") {
                setTestUp(false);
                navigate("/work");
            } else if(e.deltaY < 1 && pathname === "/aboutme") {
                setTestUp(true)
                navigate("/skills")
            }
        }
        window.addEventListener("wheel", handleNavigation);

        return () => window.removeEventListener("wheel", handleNavigation);
    });



    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                    <Route index path="/" element={<Main />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/aboutme" element={<AboutMe direction={testUp} />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/work/:project" element={<TileElements />} />
                    <Route path="/messageme" element={<MessageMe />} />
                    <Route path="/resume" element={<Resume />} />
            </Routes>
        </AnimatePresence>
    )
}