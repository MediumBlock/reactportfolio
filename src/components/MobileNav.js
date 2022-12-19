import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Hooks/Context";
import { Link, useLocation, useNavigate } from "react-router-dom"



export default function MobileNav() {

    const [nav, setNav] = useState("")
    const { breakpoint, width } = useContext(Context);
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;


    useEffect(() => {
        switch (pathname) {
            case "/skills":
                setNav("/");
                break;
            case "/aboutme":
                setNav("/skills");
                break;
            case "/work":
                setNav("/aboutme");
                break;
            case "/messageme":
                setNav("/work");
                break;
        }
    }, [pathname, nav])


    console.log("hello", nav);



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