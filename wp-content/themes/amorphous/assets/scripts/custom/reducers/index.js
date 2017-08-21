import {combineReducers} from "redux";
import { routerReducer as routing } from 'react-router-redux';
//import pageReducer from "../reducers/pageReducer";
//import pages from "../reducers/pagesReducer";
import page from "../reducers/pageReducer";

const rootReducer = combineReducers({
    page,
    routing
});

export default rootReducer;