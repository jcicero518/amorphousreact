import {combineReducers} from "redux";
import { routerReducer as routing } from 'react-router-redux';
import ajaxCallsInProgress from "./ajaxStatusReducer";

import page from "../reducers/pageReducer";
import pages from "../reducers/pagesReducer";

const rootReducer = combineReducers({
    page,
    pages,
    ajaxCallsInProgress,
    routing
});

export default rootReducer;