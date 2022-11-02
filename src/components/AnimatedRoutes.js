import React from "react";
import Skills from "./Skills";
import Main from "./Main";
import { Routes, Route, useLocation, BrowserRouter as Router } from "react-router-dom"
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {

    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route index path="/" element={<Main />} />
                <Route index path="/skills" element={<Skills />} />
            </Routes>
        </AnimatePresence>
    )
}