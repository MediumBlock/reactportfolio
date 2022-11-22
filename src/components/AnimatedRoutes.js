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
    const location = useLocation();
    const { pathname } = location;


    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                    <Route index path="/" element={<Main />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/aboutme" element={<AboutMe />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/work/:project" element={<TileElements />} />
                    <Route path="/messageme" element={<MessageMe />} />
                    <Route path="/resume" element={<Resume />} />
            </Routes>
        </AnimatePresence>
    )
}