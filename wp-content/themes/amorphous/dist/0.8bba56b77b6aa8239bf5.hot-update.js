webpackHotUpdate(0,{

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(290);

var _reactRouterDom = __webpack_require__(26);

var _reactRouterRedux = __webpack_require__(105);

var _App = __webpack_require__(187);

var _App2 = _interopRequireDefault(_App);

var _configureStore = __webpack_require__(452);

var _configureStore2 = _interopRequireDefault(_configureStore);

var _reactRedux = __webpack_require__(55);

var _createBrowserHistory = __webpack_require__(100);

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _pageActions = __webpack_require__(69);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)();
var rootEl = document.getElementById('app');
var store = (0, _configureStore2.default)();

//store.dispatch( loadPages() );
//store.dispatch( loadPage() );
store.dispatch((0, _pageActions.loadPageByPath)());
(0, _reactDom.render)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
        _reactRouterRedux.ConnectedRouter,
        { history: history },
        _react2.default.createElement(_reactRouterDom.Route, { path: "/", component: _App2.default })
    )
), rootEl);

/***/ })

})