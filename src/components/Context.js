import React, { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom";

const Context = React.createContext()

function ContextProvider({ children }) {

    const navigate = useNavigate();
    const location = useLocation();

    console.log(location)

    useEffect(() => {
        window.addEventListener("wheel", (e) => handleNavigation(e));

        return () => {
            window.removeEventListener("wheel", (e) => handleNavigation(e));
        };
    }, [location]);

    function handleNavigation(e) {

        if (e.deltaY > 1 && location.pathname === "/") {
            navigate("/skills")
        } else if (e.deltaY < 1 && location.pathname === "/skills") {
            navigate("")
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