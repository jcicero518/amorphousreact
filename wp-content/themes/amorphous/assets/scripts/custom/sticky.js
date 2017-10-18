/*global themeApi */
import React, {Component} from "react";
import ReactDOM from "react-dom";
import StickyContainer from "./sticky-container";

class Sticky extends Component {

    render() {

        return (
            <StickyContainer stickyClass="sticky-component" enter="80">
                <div className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="/">Amorphous Web Solutions</a>
                        </div>
                        <div className="navbar-menu">
                            <ul className="navbar-menu navbar-end">
                                <li><a className="navbar-item" href="http://amorphous.local/about/">About</a></li>
                                <li><a className="navbar-item" href="http://amorphous.local/code/">Code</a></li>
                                <li><a className="navbar-item" href="http://amorphous.local/portfolio/">Portfolio</a></li>
                                <li><a className="navbar-item" href="http://amorphous.local/contact/">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </StickyContainer>
        );
    }
}


ReactDOM.render( <Sticky />, document.getElementById( 'sticky-span' ) );