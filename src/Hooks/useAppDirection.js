import { useState, useEffect } from "react";
import {useLocation, useNavigate} from "react-router-dom"

function useAppDirection(navUp, navDown, directionValue) {
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;
    const [ isUp, setIsUp] = useState(false);

    useEffect(() => {
        function handleNavigation(e) {
            if (e.deltaY > 1) {
                setIsUp(false)
                setTimeout(() => {
                    navigate(navDown, { state: { value: directionValue } });
                }, 200)
            } else if(e.deltaY < 1) {
                setIsUp(true)
                setTimeout(() => {
                    navigate(navUp);
                }, 200)
            }
        }
        window.addEventListener("wheel", handleNavigation);

        return () => window.removeEventListener("wheel", handleNavigation);
    }, [pathname]);

    return {location, isUp}
}

export default useAppDirection