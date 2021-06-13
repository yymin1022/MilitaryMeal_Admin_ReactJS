import React from "react";
import PropTypes from "prop-types";

import Header from "../Header";

import "./Default.css";

const Default = (props) => {
    const{
        className,
        children
    } = props;
    
    return(
        <div className={className}>
            <Header />
            <div>
                {children}
            </div>
        </div>
    );
}

Default.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}

export default Default;