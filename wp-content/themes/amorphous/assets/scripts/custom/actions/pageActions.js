import * as types from "./actionTypes";
import PagesApi from "../api/pagesApi";
import {beginAjaxCall, ajaxCallError} from "../actions/ajaxStatusActions";

export function loadPagesSuccess( pages ) {
    return {
        type: types.LOAD_PAGES_SUCCESS,
        pages
    };
}

export function loadPageSuccess( page ) {
    return {
        type: types.LOAD_PAGE_SUCCESS,
        page
    };
}

/**
 * Thunks
 */
export function loadPages() {
    let api = new PagesApi();
    return function( dispatch ) {
        dispatch( beginAjaxCall() );
        return api.getPages().then( pages => {
            dispatch( loadPagesSuccess( pages ) );
        }).catch( error => {
            dispatch( ajaxCallError( error ) );
            throw(error);
        });
    };
}

export function loadPage() {
    let api = new PagesApi();
    return function( dispatch ) {
        dispatch( beginAjaxCall() );
        return api.getPage().then( page => {
            dispatch( loadPageSuccess( page ) );
        }).catch( error => {
            dispatch( ajaxCallError( error ) );
            throw(error);
        });
    };
}