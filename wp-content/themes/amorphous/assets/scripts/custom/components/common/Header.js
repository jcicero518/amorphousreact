import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Redirect, Switch, Route, Link, NavLink } from "react-router-dom";

import AboutPage from "../about/AboutPage";
import LoadingDots from "./LoadingDots";

const Header = ({loading, pages}) => {

    return (

        <nav>
            <NavLink to="/" activeClassName="active">Home</NavLink>
            {" | "}
            <NavLink to="/about" activeClassName="active">About</NavLink>
            {loading && <LoadingDots interval={100} dots={20} />}
        </nav>
    );
};

export default Header;