webpackHotUpdate(0,{

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(40);

var _reactRouterRedux = __webpack_require__(105);

var _ajaxStatusReducer = __webpack_require__(455);

var _ajaxStatusReducer2 = _interopRequireDefault(_ajaxStatusReducer);

var _pageReducer = __webpack_require__(456);

var _pageReducer2 = _interopRequireDefault(_pageReducer);

var _pagesReducer = __webpack_require__(457);

var _pagesReducer2 = _interopRequireDefault(_pagesReducer);

var _routerReducer = __webpack_require__(689);

var _routerReducer2 = _interopRequireDefault(_routerReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
    page: _pageReducer2.default,
    pages: _pagesReducer2.default,
    pageId: _routerReducer2.default,
    ajaxCallsInProgress: _ajaxStatusReducer2.default,
    routing: _reactRouterRedux.routerReducer
});

exports.default = rootReducer;

/***/ }),

/***/ 689:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actionTypes = __webpack_require__(56);

var types = _interopRequireWildcard(_actionTypes);

var _initialState = __webpack_require__(110);

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function routerReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default.pageId;
    var action = arguments[1];

    switch (action.type) {
        case types.ROUTER:
            return action.pageId;

        default:
            return state;
    }
}

exports.default = routerReducer;

/***/ })

})