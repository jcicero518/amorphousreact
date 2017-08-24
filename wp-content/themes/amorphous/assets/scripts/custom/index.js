import React from "react";
import {render} from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./components/App";

import configureStore from "./store/configureStore";
import {Provider} from "react-redux";
import createHistory from "history/createBrowserHistory";

import {loadPage, loadPages} from "./actions/pageActions";

const history = createHistory();
const rootEl = document.getElementById( 'app' );
const store = configureStore();

store.dispatch( loadPages() );

render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App} />
        </Router>
    </Provider>, rootEl
);







