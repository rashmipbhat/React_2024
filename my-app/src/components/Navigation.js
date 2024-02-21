import React from "react";
import {NavLink} from 'react-router-dom';

const Navigation=()=>{
    return(
        <nav className="main-nav">
            <u>
                <li><NavLink to="/mountains"></NavLink></li>
                <li><NavLink to="/beaches"></NavLink></li>
                <li><NavLink to="/food"></NavLink></li>
            </u>

        </nav>
    )
}
export default Navigation;