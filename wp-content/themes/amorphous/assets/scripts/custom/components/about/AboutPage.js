import React from "react";
import PropTypes from "prop-types";

import {connect} from "react-redux";
import * as pageActions from "../../actions/pageActions";

import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";

import PageRender from "../page/pageRender";

class AboutPage extends React.Component {

    render() {
        console.log(this, 'about page');
        const {rendered: titleRendered} = this.props.page.title;
        return (
            <div>
                <h1>About Page</h1>
                <PageRender page={this.props.page} />
            </div>
        )
    }
}

AboutPage.propTypes = {
    page: PropTypes.array,
    history: PropTypes.object
};

function mapStateToProps( state, newProp ) {
    return {
        page: state.page
    };
}

// determines what actions are available in the component
function mapDispatchToProps( dispatch ) {
    return {
        actions: bindActionCreators( pageActions, dispatch ) // becomes this.props.actions
    };
}

export default connect( mapStateToProps, mapDispatchToProps )( withRouter( AboutPage ));