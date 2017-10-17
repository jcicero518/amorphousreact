/*global themeApi */
import React, {Component} from "react";
import ReactDOM from "react-dom";
import Sticky from "react-sticky-el";

class StickyContainer extends Component {

    render() {
        const {logo} = themeApi;

        return (
            <Sticky topOffset={70} style={{zIndex: '5'}}>
                <div className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="/">Amorphous Web Solutions</a>
                        </div>
                    </div>
                </div>
            </Sticky>
        )
    }
}

ReactDOM.render( <StickyContainer />, document.getElementById('sticky-span'));