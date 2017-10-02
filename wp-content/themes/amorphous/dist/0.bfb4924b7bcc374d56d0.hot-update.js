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
        { "class": "section" },
        _react2.default.createElement(
            "div",
            { "class": "container" },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9jdXN0b20vY29tcG9uZW50cy9jb21tb24vSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsImxvYWRpbmciLCJwYWdlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUyxPQUFzQjtBQUFBLFFBQXBCQyxPQUFvQixRQUFwQkEsT0FBb0I7QUFBQSxRQUFYQyxLQUFXLFFBQVhBLEtBQVc7OztBQUVqQyxXQUNJO0FBQUE7QUFBQSxVQUFTLFNBQU0sU0FBZjtBQUNJO0FBQUE7QUFBQSxjQUFLLFNBQU0sV0FBWDtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxzQkFBUyxJQUFHLEdBQVosRUFBZ0IsaUJBQWdCLFFBQWhDO0FBQUE7QUFBQSxpQkFESjtBQUVLLHFCQUZMO0FBR0k7QUFBQTtBQUFBLHNCQUFTLElBQUcsUUFBWixFQUFxQixpQkFBZ0IsUUFBckM7QUFBQTtBQUFBLGlCQUhKO0FBSUtELDJCQUFXLHVEQUFhLFVBQVUsR0FBdkIsRUFBNEIsTUFBTSxFQUFsQztBQUpoQjtBQURKO0FBREosS0FESjtBQVlILENBZEQ7O2tCQWdCZUQsTSIsImZpbGUiOiIwLmJmYjQ5MjRiN2JjYzM3NGQ1NmQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUmVkaXJlY3QsIFN3aXRjaCwgUm91dGUsIExpbmssIE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgQWJvdXRQYWdlIGZyb20gXCIuLi9hYm91dC9BYm91dFBhZ2VcIjtcbmltcG9ydCBMb2FkaW5nRG90cyBmcm9tIFwiLi9Mb2FkaW5nRG90c1wiO1xuXG5jb25zdCBIZWFkZXIgPSAoe2xvYWRpbmcsIHBhZ2VzfSkgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+SG9tZTwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAge1wiIHwgXCJ9XG4gICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2Fib3V0XCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+QWJvdXQ8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nICYmIDxMb2FkaW5nRG90cyBpbnRlcnZhbD17MTAwfSBkb3RzPXsyMH0gLz59XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NjcmlwdHMvY3VzdG9tL2NvbXBvbmVudHMvY29tbW9uL0hlYWRlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=