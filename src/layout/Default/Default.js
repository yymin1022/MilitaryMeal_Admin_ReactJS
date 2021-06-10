import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Default = props => {
  const{
    className,
    children,
  } = props;
  
  return(
    <div className={className}>
      <div className="Header">
        <div className="HeaderLogo">
          LOGO
        </div>
        <div className="HeaderNav">
          <Link to="/">
            <div>Home</div>
          </Link>
        </div>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}

Default.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Default;