import React, { useContext } from "react";
import { Context } from "../Hooks/Context";
import { Link, useLocation, useNavigate } from "react-router-dom"



export default function MobileNav() {

    const { breakpoint, width } = useContext(Context);
    const location = useLocation();

    return (
        <div className="mobile--container">
            <div className="mobile--top">
                {
                    location.pathname === "/aboutme"
                        ?
                        <img src={require("../resources/mobilenavgreen.png")}
                        />
                        :
                        <img src={require("../resources/mobilenavpurp.png")}
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
                        />
                }
            </div>



        </div>
    )
}