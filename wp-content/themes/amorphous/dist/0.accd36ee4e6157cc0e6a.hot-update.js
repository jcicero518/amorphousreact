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

var _Header = __webpack_require__(404);

var _Header2 = _interopRequireDefault(_Header);

var _HomePage = __webpack_require__(188);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _AboutPage = __webpack_require__(189);

var _AboutPage2 = _interopRequireDefault(_AboutPage);

var _pageRender = __webpack_require__(109);

var _pageRender2 = _interopRequireDefault(_pageRender);

var _reactRedux = __webpack_require__(55);

var _pageActions = __webpack_require__(69);

var pageActions = _interopRequireWildcard(_pageActions);

var _redux = __webpack_require__(40);

var _reactRouterDom = __webpack_require__(26);

var _routes = __webpack_require__(450);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // https://github.com/jackreichert/a-wp-react-redux-theme/


var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var path = this.props.location.pathname;
            if (path == '/') {
                path = '/home';
            }
            this.props.actions.loadPageByPath(path);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            console.log(nextProps, 'App next props');
            // this.props.pageId -> nextProps.match.params for pageId?
        }
    }, {
        key: "render",
        value: function render() {
            console.log(this.props, 'App props');
            return _react2.default.createElement(
                "div",
                { className: "l-wrap" },
                _react2.default.createElement(_Header2.default, { loading: this.props.loading }),
                _routes2.default
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
    console.log(newProp, 'newProp in App');
    return {
        loading: state.ajaxCallsInProgress > 0,
        pages: state.pages,
        pageId: state.pageId

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