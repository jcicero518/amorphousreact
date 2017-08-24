import React from "react";
import PropTypes from "prop-types";
import { Route } from 'react-router-dom';

import Header from "./common/Header";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";

import {connect} from "react-redux";
import * as pageActions from "../actions/pageActions";

import {bindActionCreators} from "redux";


class App extends React.Component {

    render() {
        return (
            <div className="l-wrap">
                <Header loading={this.props.loading} />
                <Route exact path="/" component={HomePage} />
                <Route path="/page/:id" component={AboutPage} />
            </div>
        );
    }
}


App.propTypes = {
    match: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

function mapStateToProps( state, newProp ) {
    return {
        loading: state.ajaxCallsInProgress > 0
    };
}

//export default App;
export default connect( mapStateToProps )( App );