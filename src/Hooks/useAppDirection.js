import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { debounce } from "lodash";
import { Context } from "./Context";

function useAppDirection(navDown, navUp, directionValueDown, directionValueUp) {
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;
    const [isUp, setIsUp] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const { breakpoint, width } = useContext(Context);


    useEffect(() => {
        const debouncedEvent = debounce(function handleNavigation(e) {
            if (e.deltaY > 1) {
                setIsUp(false)
                    navigate(navDown, { state: { value: directionValueDown } });   
            } else if (e.deltaY < 1) {
                setIsUp(true)
                    navigate(navUp, { state: { value: directionValueUp } });
            }
        }, 300)
        
        window.addEventListener("wheel", debouncedEvent);

        return () => window.removeEventListener("wheel", debouncedEvent);
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


    const navArrows = !isTransitioning && width < breakpoint && <div className="mobile--container">
        {pathname !== "/" &&
            <div className="mobile--top">
                {
                    pathname === "/aboutme"
                        ?
                        <img src={require("../resources/mobilenavgreen.webp")}
                            onClick={handleNavArrowsUp}
                            alt="navigate back"
                        />
                        :
                        <img src={require("../resources/mobilenavpurp.webp")}
                            onClick={handleNavArrowsUp}
                            alt="navigate forward"
                        />
                }
            </div>
        }
        {pathname !== "/messageme" &&
            <div className="mobile--bottom">
                {
                    pathname === "/aboutme"
                        ?
                        <img src={require("../resources/mobilenavgreen.webp")}
                            onClick={handleNavArrowsDown}
                            alt="navigate back"
                        />
                        :
                        <img src={require("../resources/mobilenavpurp.webp")}
                            onClick={handleNavArrowsDown}
                            alt="navigate forward"
                        />
                }
            </div>
        }
    </div>



    return { location, isUp, navArrows }
}

export default useAppDirection