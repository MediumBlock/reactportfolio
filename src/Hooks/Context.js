import React, { useState, useEffect } from "react"


const Context = React.createContext()
function ContextProvider({ children }) {


    const [width, setWidth] = useState(window.innerWidth)
    
    const breakpoint = 800;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
    
        return () => window.removeEventListener("resize", handleWindowResize);
      }, []);

      return (
        <Context.Provider value={{
            width,
            breakpoint
        }} >
            {children}
        </Context.Provider>
    )
}


export { ContextProvider, Context }