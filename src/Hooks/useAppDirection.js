import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"

function useAppDirection(navDown, navUp, directionValueDown, directionValueUp) {
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;
    const [isUp, setIsUp] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        function handleNavigation(e) {
            if (e.deltaY > 1) {
                setIsUp(false)
                setTimeout(() => {
                    navigate(navDown, { state: { value: directionValueDown } });
                }, 200)
            } else if (e.deltaY < 1) {
                setIsUp(true)
                setTimeout(() => {
                    navigate(navUp, { state: { value: directionValueUp } });
                }, 200)
            }
        }
        window.addEventListener("wheel", handleNavigation);

        return () => window.removeEventListener("wheel", handleNavigation);
    }, [pathname]);

    function handleNavArrowsUp() {
        setIsUp(true);
        setIsTransitioning(true);
        setTimeout(() => {
            navigate(navUp, { state: { value: directionValueUp } });
        }, 200)

    }

    function handleNavArrowsDown() {
        setIsUp(false)
        setIsTransitioning(true);
        setTimeout(() => {
            navigate(navDown, { state: { value: directionValueDown } });
        }, 200)
    }

    const navArrows = !isTransitioning && <div className="mobile--container">
        <div className="mobile--top">
            {
                location.pathname === "/aboutme"
                    ?
                    <img src={require("../resources/mobilenavgreen.png")}
                        onClick={handleNavArrowsUp}
                    />
                    :
                    <img src={require("../resources/mobilenavpurp.png")}
                        onClick={handleNavArrowsUp}
                    />
            }
        </div>
        <div className="mobile--bottom">
            {
                location.pathname === "/aboutme"
                    ?
                    <img src={require("../resources/mobilenavgreen.png")}
                        onClick={handleNavArrowsDown}
                    />
                    :
                    <img src={require("../resources/mobilenavpurp.png")}
                        onClick={handleNavArrowsDown}
                    />
            }
        </div>
    </div>



    return { location, isUp, navArrows }
}

export default useAppDirection