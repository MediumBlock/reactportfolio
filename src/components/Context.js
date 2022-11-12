import React, { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom";

const Context = React.createContext()

function ContextProvider({ children }) {

    const navigate = useNavigate();
    const location = useLocation();


    useEffect(() => {
        window.addEventListener("wheel", (e) => handleNavigation(e));

        return () => {
            window.removeEventListener("wheel", (e) => handleNavigation(e));
        };
    }, [location]);

    function handleNavigation(e) {
        if (location.pathname.includes("/work/")) {
            return;
        } else {
            if (e.deltaY > 1 && location.pathname === "/") {
                navigate("/skills")
            } else if (e.deltaY < 1 && location.pathname === "/skills") {
                navigate("")
            } else if (e.deltaY > 1 && location.pathname === "/skills") {
                navigate("/aboutme")
            } else if (e.deltaY < 1 && location.pathname === "/aboutme") {
                navigate("/skills")
            } else if (e.deltaY > 1 && location.pathname === "/aboutme") {
                navigate("/work")
            } else if (e.deltaY < 1 && location.pathname === "/work") {
                navigate("/aboutme")
            } else if (e.deltaY > 1 && location.pathname === "/work") {
                navigate("/messageme")
            } else if (e.deltaY < 1 && location.pathname === "/messageme") {
                navigate("/work")
            }
        }


    }


    return (
        <Context.Provider value={{
        }} >
            {children}
        </Context.Provider>
    )
}


export { ContextProvider, Context }