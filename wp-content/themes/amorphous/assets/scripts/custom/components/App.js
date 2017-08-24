import React from "react";
import PropTypes from "prop-types";
import { Route } from 'react-router-dom';

import Header from "./common/Header";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";

import {connect} from "react-redux";

import * as pageActions from "../actions/pageActions";

import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";


class App extends React.Component {

    render() {
        console.log(this, 'App');
        return (
            <div className="l-wrap">
                <Header loading={this.props.loading} />
                <Route exact path="/" component={HomePage} />
                <Route path="/page/:id" component={AboutPage} />
            </div>
        );
    }

    buildRoutes( data ) {

    }
}


App.propTypes = {
    match: PropTypes.object.isRequired,
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
export default connect( mapStateToProps, mapDispatchToProps )( withRouter( App ) );