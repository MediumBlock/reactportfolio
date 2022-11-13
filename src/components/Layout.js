import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const { pathname } = location;

    useEffect(() => {
        function handleNavigation(e) {
            if (pathname.includes("/work/")) {
                return;
            } else {
                if (e.deltaY > 1 && pathname === "/") {
                    navigate("/skills");
                } else if (e.deltaY < 1 && pathname === "/skills") {
                    navigate("/");
                } else if (e.deltaY > 1 && pathname === "/skills") {
                    navigate("/aboutme");
                } else if (e.deltaY < 1 && pathname === "/aboutme") {
                    navigate("/skills");
                } else if (e.deltaY > 1 && pathname === "/aboutme") {
                    navigate("/work");
                } else if (e.deltaY < 1 && pathname === "/work") {
                    navigate("/aboutme");
                } else if (e.deltaY > 1 && location.pathname === "/work") {
                    navigate("/messageme")
                } else if (e.deltaY < 1 && location.pathname === "/messageme") {
                    navigate("/work")
                }
            }
        }
        window.addEventListener("wheel", handleNavigation);

        return () => window.removeEventListener("wheel", handleNavigation);
    }, [pathname]);

    return <>{children}</>;
};

export default Layout;