import React from "react";
import PropTypes from "prop-types";
import { Link, Switch } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <Link to="/" activeClassName="active">Home</Link>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
        </nav>
    );
};

export default Header;