webpackHotUpdate(0,{

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(39);

var _AboutPage = __webpack_require__(104);

var _AboutPage2 = _interopRequireDefault(_AboutPage);

var _LoadingDots = __webpack_require__(447);

var _LoadingDots2 = _interopRequireDefault(_LoadingDots);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
    var loading = _ref.loading,
        pages = _ref.pages;


    return _react2.default.createElement(
        "section",
        { className: "section" },
        _react2.default.createElement(
            "div",
            { className: "container" },
            _react2.default.createElement(
                "nav",
                null,
                _react2.default.createElement(
                    _reactRouterDom.NavLink,
                    { to: "/", activeClassName: "active" },
                    "Home"
                ),
                " | ",
                _react2.default.createElement(
                    _reactRouterDom.NavLink,
                    { to: "/about", activeClassName: "active" },
                    "About"
                ),
                loading && _react2.default.createElement(_LoadingDots2.default, { interval: 100, dots: 20 })
            )
        )
    );
};

exports.default = Header;

/***/ })

})