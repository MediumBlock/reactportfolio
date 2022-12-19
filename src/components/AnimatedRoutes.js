import React, {useEffect, useState, useContext} from "react";
import Skills from "./Skills";
import Main from "./Main";
import AboutMe from "./AboutMe";
import Work from "./Work";
import { Context } from "../Hooks/Context";
import { Routes, Route, useNavigate, useLocation, BrowserRouter as Router } from "react-router-dom"
import { AnimatePresence } from "framer-motion";
import TileElements from "./TileElements";
import MessageMe from "./MessageMe";
import Resume from "./Resume";
import MobileNav from "./MobileNav";


export default function AnimatedRoutes() {
    const location = useLocation();
    const { pathname } = location;
    const { breakpoint, width } = useContext(Context);



    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                    <Route index path="/" element={<Main />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/aboutme" element={<AboutMe d />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/work/:project" element={<TileElements />} />
                    <Route path="/messageme" element={<MessageMe />} />
                    <Route path="/resume" element={<Resume />} />
            </Routes>
            {/* {width < breakpoint && <MobileNav />} */}
        </AnimatePresence>
    )
}