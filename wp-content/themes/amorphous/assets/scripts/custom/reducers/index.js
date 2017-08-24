import {combineReducers} from "redux";
import { routerReducer as routing } from 'react-router-redux';

import page from "../reducers/pageReducer";
import pages from "../reducers/pagesReducer";

const rootReducer = combineReducers({
    page,
    pages,
    routing
});

export default rootReducer;