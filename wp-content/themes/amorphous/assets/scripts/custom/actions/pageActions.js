import * as types from "./actionTypes";
import PagesApi from "../api/pagesApi";

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
        return api.getPages().then( pages => {
            dispatch( loadPagesSuccess( pages ) );
        }).catch( error => {
            throw(error);
        });
    };
}

export function loadPage() {
    let api = new PagesApi();
    return function( dispatch ) {
        return api.getPage().then( page => {
            console.log(page, 'page');
            dispatch( loadPageSuccess( page ) );
        }).catch( error => {
            throw(error);
        });
    };
}