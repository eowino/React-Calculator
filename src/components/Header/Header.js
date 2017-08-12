import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  return (
    <header>
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <h1>{props.title}</h1>
        </div>
      </nav>
    </header>
  );
};

Header.proptypes = {
  title: PropTypes.string.isRequired
};

export default Header;
