// https://github.com/jackreichert/a-wp-react-redux-theme/
import React from "react";
import PropTypes from "prop-types";

import Header from "./common/Header";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import PageRender from "./page/pageRender";

import {connect} from "react-redux";

import * as pageActions from "../actions/pageActions";

import {bindActionCreators} from "redux";
import {BrowserRouter as Router, Redirect, Switch, Route, withRouter} from "react-router-dom";

import Routes from "../routes";

class App extends React.Component {

    render() {
        console.log(this.props, 'App props');
        return (

            <div className="l-wrap">
                <Header loading={this.props.loading} />
                {Routes}
            </div>

        );
    }
}


App.propTypes = {
    match: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    pages: PropTypes.array
};

function mapStateToProps( state, newProp ) {
    return {
        loading: state.ajaxCallsInProgress > 0,
        pages: state.pages
    };
}

// determines what actions are available in the component
function mapDispatchToProps( dispatch ) {
    return {
        actions: bindActionCreators( pageActions, dispatch ) // becomes this.props.actions
    };
}

//export default App;
export default connect( mapStateToProps, mapDispatchToProps )( App );