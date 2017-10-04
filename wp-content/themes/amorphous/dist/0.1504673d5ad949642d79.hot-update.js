webpackHotUpdate(0,{

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadPagesSuccess = loadPagesSuccess;
exports.loadPageSuccess = loadPageSuccess;
exports.loadPathSuccess = loadPathSuccess;
exports.loadPageByPath = loadPageByPath;
exports.loadPages = loadPages;
exports.loadPage = loadPage;

var _actionTypes = __webpack_require__(56);

var types = _interopRequireWildcard(_actionTypes);

var _pagesApi = __webpack_require__(429);

var _pagesApi2 = _interopRequireDefault(_pagesApi);

var _ajaxStatusActions = __webpack_require__(449);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function loadPagesSuccess(pages) {
    return {
        type: types.LOAD_PAGES_SUCCESS,
        pages: pages
    };
}

function loadPageSuccess(page) {
    return {
        type: types.LOAD_PAGE_SUCCESS,
        page: page
    };
}

function loadPathSuccess(pageId) {
    return {
        type: types.ROUTER,
        pageId: pageId
    };
}

/**
 * Thunks
 */
function loadPageByPath(path) {
    var api = new _pagesApi2.default();
    return function (dispatch) {
        dispatch((0, _ajaxStatusActions.beginAjaxCall)());
        return api.getPageByPath(path).then(function (page) {
            dispatch(loadPathSuccess(page.id));
        }).catch(function (error) {
            dispatch((0, _ajaxStatusActions.ajaxCallError)(error));
            throw error;
        });
    };
}

function loadPages() {
    var api = new _pagesApi2.default();
    return function (dispatch) {
        dispatch((0, _ajaxStatusActions.beginAjaxCall)());
        return api.getPages().then(function (pages) {
            dispatch(loadPagesSuccess(pages));
        }).catch(function (error) {
            dispatch((0, _ajaxStatusActions.ajaxCallError)(error));
            throw error;
        });
    };
}

function loadPage() {
    var api = new _pagesApi2.default();
    return function (dispatch) {
        dispatch((0, _ajaxStatusActions.beginAjaxCall)());
        return api.getPage().then(function (page) {
            dispatch(loadPageSuccess(page));
        }).catch(function (error) {
            dispatch((0, _ajaxStatusActions.ajaxCallError)(error));
            throw error;
        });
    };
}

/***/ })

})