import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import LoadingDots from "./LoadingDots";

const Header = ({loading}) => {
    return (
        <nav>
            <Link to="/">Home</Link>
            {" | "}
            <Link to="/about">About</Link>
            {loading && <LoadingDots interval={100} dots={20} />}
        </nav>
    );
};

export default Header;