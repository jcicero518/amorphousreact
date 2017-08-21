import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import * as pageActions from "../actions/pageActions";
import Header from "./common/Header";
import {bindActionCreators} from "redux";
//import Page from "../pages/page";

class App extends React.Component {

    render() {
        console.log(this, 'app');
        return (
            <div className="l-wrap">
                <Header />
            </div>
        );
    }
}


App.propTypes = {
    //actions: PropTypes.object.isRequired,
    //page: PropTypes.array
    //children: PropTypes.object.isRequired
};

function mapStateToProps( state, newProp ) {
    return {
        page: state.page
        //pages: state.pages
    };
}

// determines what actions are available in the component
function mapDispatchToProps( dispatch ) {
    /**
     * or
     * return {
     *   loadCourses: () => { dispatch( loadCourses() )
     *   }
     */
    return {
        actions: bindActionCreators( pageActions, dispatch ) // becomes this.props.actions
    };
}

//export default App;
export default connect( mapStateToProps, mapDispatchToProps )( App );