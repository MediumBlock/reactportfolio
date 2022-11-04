import React, { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom";

const Context = React.createContext()

function ContextProvider({ children }) {
    const [componentLocation, setComponentLocation] = useState("");

    const location = useLocation();
    const navigate = useNavigate();

    console.log(componentLocation)

    useEffect(() => {
        window.addEventListener("wheel", (e) => handleNavigation(e));

        return () => {
            window.removeEventListener("wheel", (e) => handleNavigation(e));
        };
    }, []);

    function handleNavigation(e) {
        if (e.deltaY > 1 && location.pathname === "/") {
            navigate("/skills")
        } else if (e.deltaY < 1 && location.pathname === "/skills") {
            navigate("/")
        }
        console.log()
    }


    return (
        <Context.Provider value={{
            setComponentLocation       
        }} >
            {children}
        </Context.Provider>
    )
}


export { ContextProvider, Context }