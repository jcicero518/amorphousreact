/*global themeApi, mainMenu */
import React, {Component} from "react";
import ReactDOM from "react-dom";
import StickyContainer from "./sticky-container";

class Sticky extends Component {

    render() {
        const menu = { __html: mainMenu };

        return (
            <StickyContainer stickyClass="sticky-component" enter="80">
                <div className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="/">Amorphous Web Solutions</a>
                        </div>
                        <div className="navbar-menu" dangerouslySetInnerHTML={menu}>
                        </div>
                    </div>
                </div>
            </StickyContainer>
        );
    }
}


ReactDOM.render( <Sticky />, document.getElementById( 'sticky-span' ) );