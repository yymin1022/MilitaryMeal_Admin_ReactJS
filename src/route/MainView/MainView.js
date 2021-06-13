import React from 'react';
import {Link} from "react-router-dom";

import "./MainView.css";

const MainView = () => {
    return(
        <div>
            Main Layout
            <Link to="/manageUser">
                <div>User Account Registration  Approve</div>
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