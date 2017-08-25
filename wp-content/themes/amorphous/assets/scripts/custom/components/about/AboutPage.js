import React from "react";
import PropTypes from "prop-types";

import {connect} from "react-redux";
import * as pageActions from "../../actions/pageActions";

import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";

import PageRender from "../page/pageRender";

class AboutPage extends React.Component {
    // https://github.com/DreySkee/wp-api-react
    render() {
        console.log(this, 'about render');
        let thepage = this.getPageBySlug();
        console.log( thepage, 'thepage' );
        //const {rendered} = this.props.page.title;
        // <PageRender page={this.props.page} />
        return (
            <div>
                <h1>About Page</h1>

            </div>
        )
    }

    getPageBySlug() {
        const {pages, match} = this.props;
        let slug = match.url;
        return pages.filter( page => {
            return page.title.rendered === match.url.replace( '/', '' );
        });
    }
}

AboutPage.propTypes = {
    page: PropTypes.array,
    history: PropTypes.object,
    match: PropTypes.object
};

function mapStateToProps( state, newProp ) {
    return {
        page: state.page,
        pages: state.pages
    };
}

// determines what actions are available in the component
function mapDispatchToProps( dispatch ) {
    return {
        actions: bindActionCreators( pageActions, dispatch ) // becomes this.props.actions
    };
}

export default connect( mapStateToProps, mapDispatchToProps )( withRouter( AboutPage ));