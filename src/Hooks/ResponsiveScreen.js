import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"

function ResponsiveScreen(navDown, navUp, directionValueDown, directionValueUp) {
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;
    const [isUp, setIsUp] = useState(false);



    const navArrows = <div className="mobile--container">
        <div className="mobile--top">
            {
                location.pathname === "/aboutme"
                    ?
                    <img src={require("../resources/mobilenavgreen.png")}
                    />
                    :
                    <img src={require("../resources/mobilenavpurp.png")}
                        onClick={() => navigate(navUp, { state: { value: 1000 } })}
                    />
            }
        </div>
        <div className="mobile--bottom">
            {
                location.pathname === "/aboutme"
                    ?
                    <img src={require("../resources/mobilenavgreen.png")}
                    />
                    :
                    <img src={require("../resources/mobilenavpurp.png")}
                        onClick={() => navigate(navDown, { state: { value: directionValueDown } })}
                    />
            }
        </div>
    </div>



    return { navArrows }
}

export default ResponsiveScreen