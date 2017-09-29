import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class HomePage extends React.Component {

    render() {
        return (
            <section class="section">
                <div class="container">
                    <h1>Home page</h1>
                    <h2>Welcome to the app</h2>
                </div>
            </section>
        )
    }
}

export default HomePage;