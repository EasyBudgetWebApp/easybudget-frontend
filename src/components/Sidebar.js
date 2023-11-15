import { Link } from "react-router-dom";
import Logo from './Logo';
import Wrapper from "../wrappers/Sidebar";
import { useState } from "react";

const Sidebar = () => {
    const [isVisible, setIsVisible] = useState(true);

    const toggleSidebar = () => {
        setIsVisible(!isVisible);
    }
    console.log(isVisible);
    return (
        <Wrapper className={isVisible ? 'show' : 'hide'}>
            <Link to='/landing-page'>
                <Logo/>
            </Link>
            <button onClick={toggleSidebar}>toggle</button>
            
        </Wrapper>
    )
}

export default Sidebar;