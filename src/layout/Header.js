import React from "react";
import {Link} from "react-router-dom";

import "./Header.css";

const Header = () => {
    return(
        <div className="Header">
            <div className="HeaderItem">
                <div className="HeaderLogo">
                    LOGO
                </div>
                <div className="HeaderNav">
                    <Link to="/">
                        <div>Home</div>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default Header;