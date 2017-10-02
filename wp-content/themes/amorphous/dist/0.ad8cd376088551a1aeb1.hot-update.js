webpackHotUpdate(0,{

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Header = __webpack_require__(403);

var _Header2 = _interopRequireDefault(_Header);

var _HomePage = __webpack_require__(203);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _AboutPage = __webpack_require__(104);

var _AboutPage2 = _interopRequireDefault(_AboutPage);

var _pageRender = __webpack_require__(202);

var _pageRender2 = _interopRequireDefault(_pageRender);

var _reactRedux = __webpack_require__(67);

var _pageActions = __webpack_require__(107);

var pageActions = _interopRequireWildcard(_pageActions);

var _redux = __webpack_require__(54);

var _reactRouterDom = __webpack_require__(39);

var _routes = __webpack_require__(448);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "div",
                { "class": "section" },
                _react2.default.createElement(
                    "div",
                    { "class": "container" },
                    _react2.default.createElement(
                        "div",
                        { className: "l-wrap" },
                        _react2.default.createElement(_Header2.default, { loading: this.props.loading }),
                        _routes2.default
                    )
                )
            );
        }
    }]);

    return App;
}(_react2.default.Component);

App.propTypes = {
    match: _propTypes2.default.object,
    loading: _propTypes2.default.bool.isRequired,
    pages: _propTypes2.default.array
};

function mapStateToProps(state, newProp) {
    return {
        loading: state.ajaxCallsInProgress > 0,
        pages: state.pages
    };
}

// determines what actions are available in the component
function mapDispatchToProps(dispatch) {
    return {
        actions: (0, _redux.bindActionCreators)(pageActions, dispatch) // becomes this.props.actions
    };
}

//export default App;
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9jdXN0b20vY29tcG9uZW50cy9BcHAuanMiXSwibmFtZXMiOlsicGFnZUFjdGlvbnMiLCJBcHAiLCJwcm9wcyIsImxvYWRpbmciLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJtYXRjaCIsIm9iamVjdCIsImJvb2wiLCJpc1JlcXVpcmVkIiwicGFnZXMiLCJhcnJheSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibmV3UHJvcCIsImFqYXhDYWxsc0luUHJvZ3Jlc3MiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBRUE7O0lBQVlBLFc7O0FBRVo7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0lBRU1DLEc7Ozs7Ozs7Ozs7O2lDQUVPOztBQUVMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxTQUFNLFNBQVg7QUFDSTtBQUFBO0FBQUEsc0JBQUssU0FBTSxXQUFYO0FBQ0k7QUFBQTtBQUFBLDBCQUFLLFdBQVUsUUFBZjtBQUNJLDBFQUFRLFNBQVMsS0FBS0MsS0FBTCxDQUFXQyxPQUE1QixHQURKO0FBQUE7QUFBQTtBQURKO0FBREosYUFESjtBQVVIOzs7O0VBZGEsZ0JBQU1DLFM7O0FBa0J4QkgsSUFBSUksU0FBSixHQUFnQjtBQUNaQyxXQUFPLG9CQUFVQyxNQURMO0FBRVpKLGFBQVMsb0JBQVVLLElBQVYsQ0FBZUMsVUFGWjtBQUdaQyxXQUFPLG9CQUFVQztBQUhMLENBQWhCOztBQU1BLFNBQVNDLGVBQVQsQ0FBMEJDLEtBQTFCLEVBQWlDQyxPQUFqQyxFQUEyQztBQUN2QyxXQUFPO0FBQ0hYLGlCQUFTVSxNQUFNRSxtQkFBTixHQUE0QixDQURsQztBQUVITCxlQUFPRyxNQUFNSDtBQUZWLEtBQVA7QUFJSDs7QUFFRDtBQUNBLFNBQVNNLGtCQUFULENBQTZCQyxRQUE3QixFQUF3QztBQUNwQyxXQUFPO0FBQ0hDLGlCQUFTLCtCQUFvQmxCLFdBQXBCLEVBQWlDaUIsUUFBakMsQ0FETixDQUNrRDtBQURsRCxLQUFQO0FBR0g7O0FBRUQ7a0JBQ2UseUJBQVNMLGVBQVQsRUFBMEJJLGtCQUExQixFQUFnRGYsR0FBaEQsQyIsImZpbGUiOiIwLmFkOGNkMzc2MDg4NTUxYTFhZWIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vY29tbW9uL0hlYWRlclwiO1xuaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIuL2hvbWUvSG9tZVBhZ2VcIjtcbmltcG9ydCBBYm91dFBhZ2UgZnJvbSBcIi4vYWJvdXQvQWJvdXRQYWdlXCI7XG5pbXBvcnQgUGFnZVJlbmRlciBmcm9tIFwiLi9wYWdlL3BhZ2VSZW5kZXJcIjtcblxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0ICogYXMgcGFnZUFjdGlvbnMgZnJvbSBcIi4uL2FjdGlvbnMvcGFnZUFjdGlvbnNcIjtcblxuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHtCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUmVkaXJlY3QsIFN3aXRjaCwgUm91dGUsIHdpdGhSb3V0ZXJ9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCBSb3V0ZXMgZnJvbSBcIi4uL3JvdXRlc1wiO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsLXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgbG9hZGluZz17dGhpcy5wcm9wcy5sb2FkaW5nfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtSb3V0ZXN9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbkFwcC5wcm9wVHlwZXMgPSB7XG4gICAgbWF0Y2g6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBwYWdlczogUHJvcFR5cGVzLmFycmF5XG59O1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoIHN0YXRlLCBuZXdQcm9wICkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxvYWRpbmc6IHN0YXRlLmFqYXhDYWxsc0luUHJvZ3Jlc3MgPiAwLFxuICAgICAgICBwYWdlczogc3RhdGUucGFnZXNcbiAgICB9O1xufVxuXG4vLyBkZXRlcm1pbmVzIHdoYXQgYWN0aW9ucyBhcmUgYXZhaWxhYmxlIGluIHRoZSBjb21wb25lbnRcbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyggZGlzcGF0Y2ggKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKCBwYWdlQWN0aW9ucywgZGlzcGF0Y2ggKSAvLyBiZWNvbWVzIHRoaXMucHJvcHMuYWN0aW9uc1xuICAgIH07XG59XG5cbi8vZXhwb3J0IGRlZmF1bHQgQXBwO1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCggbWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMgKSggQXBwICk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NjcmlwdHMvY3VzdG9tL2NvbXBvbmVudHMvQXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==