import React, { useContext, useEffect } from "react";
import { Context } from "../Hooks/Context";
import { Link, useLocation, useNavigate } from "react-router-dom"



export default function MobileNav() {

    const { breakpoint, width } = useContext(Context);
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location

    function navUp() {
        switch (pathname) {
            case "/skills":
                return "/";
                break;
            case "/aboutme":
                return "/skills";
                break;
            case "/work":
                return "/aboutme";
                break;
            case "/messageme":
                return "/work";
                break;
        }
    }


    console.log("hello", navUp());



    return (
        <div className="mobile--container">
            <div className="mobile--top"
                onClick={
                    () => navigate("/")
                }
            >
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