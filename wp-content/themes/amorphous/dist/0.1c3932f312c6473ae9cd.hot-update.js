webpackHotUpdate(0,{

/***/ 404:
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

var _LoadingDots = __webpack_require__(405);

var _LoadingDots2 = _interopRequireDefault(_LoadingDots);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
    var loading = _ref.loading;


    return _react2.default.createElement(
        "nav",
        { className: "navbar" },
        _react2.default.createElement("div", { className: "navbar-brand" }),
        _react2.default.createElement(
            "div",
            { className: "navbar-menu" },
            _react2.default.createElement(
                _reactRouterDom.NavLink,
                { to: "/", activeClassName: "active", className: "nav-item" },
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
    );
};

Header.propTypes = {
    loading: _propTypes2.default.bool.isRequired
};

exports.default = Header;

/***/ })

})