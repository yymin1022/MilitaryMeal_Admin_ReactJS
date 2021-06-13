import React from "react";
import {Link} from "react-router-dom";

import "./MainView.css";

const MainView = () => {
    return(
        <div>
            Main Layout
            
            <Link to="/approve">
                <div>Approve User Account Registration</div>
            </Link>
            <Link to="/manage">
                <div>Menu Filtering Manage</div>
            </Link>
            <Link to="/rank">
                <div>Rank List</div>
            </Link>
        </div>
    );
}
 
export default MainView;