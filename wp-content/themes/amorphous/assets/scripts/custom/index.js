import React from "react";
import {render} from "react-dom";
import configureStore from "./store/configureStore";
import {Provider} from "react-redux";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from "./routes";
import {loadPage} from "./actions/pageActions";
import App from "./components/App";

let history = createBrowserHistory();


const rootEl = document.getElementById( 'app' );
const store = configureStore();

store.dispatch( loadPage() );

render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={App} />
            </Switch>
        </Router>
    </Provider>, rootEl
);







