import React from "react";
import {render} from "react-dom";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import App from "./components/App";

import configureStore from "./store/configureStore";
import {Provider} from "react-redux";
import createHistory from "history/createBrowserHistory";

import {loadPages} from "./actions/pageActions";

const history = createHistory();
const rootEl = document.getElementById( 'app' );
const store = configureStore();


store.dispatch( loadPages() );
//store.dispatch( loadPage() );
render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route path="/" component={App} />
        </ConnectedRouter>
    </Provider>, rootEl
);







