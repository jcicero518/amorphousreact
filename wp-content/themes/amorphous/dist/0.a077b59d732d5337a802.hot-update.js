webpackHotUpdate(0,{

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(26);

var _App = __webpack_require__(187);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(188);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _AboutPage = __webpack_require__(189);

var _AboutPage2 = _interopRequireDefault(_AboutPage);

var _Main = __webpack_require__(451);

var _Main2 = _interopRequireDefault(_Main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
    _reactRouterDom.Switch,
    null,
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/", component: _HomePage2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: "/about", component: _Main2.default })
);

/***/ })

})