webpackHotUpdate(0,{

/***/ 188:
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

var _HomePage = __webpack_require__(189);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _AboutPage = __webpack_require__(107);

var _AboutPage2 = _interopRequireDefault(_AboutPage);

var _pageRender = __webpack_require__(111);

var _pageRender2 = _interopRequireDefault(_pageRender);

var _reactRedux = __webpack_require__(56);

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

    function App(props, context) {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props, context));
    }

    _createClass(App, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var path = this.props.location.pathname;
            if (path == '/') {
                path = '/home';
            }
            //this.props.actions.loadPageByPath( path );
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            var path = this.props.location.pathname;
            if (path == '/') {
                path = '/home';
            }
            if (path !== nextProps.location.pathname) {}
            //this.props.actions.loadPageByPath( path );

            // this.props.pageId -> nextProps.match.params for pageId?
        }
    }, {
        key: "render",
        value: function render() {
            console.log(this, 'app render this');
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(_Header2.default, { loading: this.props.loading })
            );
        }
    }]);

    return App;
}(_react2.default.Component);

App.propTypes = {
    match: _propTypes2.default.object,
    loading: _propTypes2.default.bool.isRequired,
    pages: _propTypes2.default.array,
    page: _propTypes2.default.object
};

function mapStateToProps(state, ownProps) {
    console.log(ownProps, 'newProp in App');
    var path = ownProps.location.pathname;
    if (path == '/') {
        path = '/home';
    }
    return {
        loading: state.ajaxCallsInProgress > 0,
        page: state.page,
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
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactRouterDom.withRouter)(App));

/***/ }),

/***/ 189:
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

var _reactRouterDom = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_React$Component) {
    _inherits(HomePage, _React$Component);

    function HomePage() {
        _classCallCheck(this, HomePage);

        return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
    }

    _createClass(HomePage, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "section",
                { className: "section" },
                _react2.default.createElement(
                    "div",
                    { className: "container" },
                    _react2.default.createElement(
                        "h1",
                        null,
                        "Home page"
                    ),
                    _react2.default.createElement(
                        "h2",
                        null,
                        "Welcome to the app"
                    )
                )
            );
        }
    }]);

    return HomePage;
}(_react2.default.Component);

exports.default = HomePage;

/***/ }),

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

var _reactRouterDom = __webpack_require__(26);

var _LoadingDots = __webpack_require__(405);

var _LoadingDots2 = _interopRequireDefault(_LoadingDots);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
    var loading = _ref.loading;


    return _react2.default.createElement(
        "nav",
        { className: "navbar" },
        _react2.default.createElement(
            "div",
            { className: "container" },
            _react2.default.createElement(
                "div",
                { className: "navbar-brand" },
                _react2.default.createElement(
                    "a",
                    { className: "navbar-item", href: "http://bulma.io" },
                    _react2.default.createElement("img", { src: "http://bulma.io/images/bulma-logo.png", alt: "Bulma: a modern CSS framework based on Flexbox", width: "112", height: "28" })
                )
            ),
            _react2.default.createElement(
                "div",
                { className: "navbar-menu" },
                _react2.default.createElement(
                    _reactRouterDom.NavLink,
                    { to: "/", activeClassName: "active", className: "navbar-item" },
                    "Home"
                ),
                " | ",
                _react2.default.createElement(
                    _reactRouterDom.NavLink,
                    { to: "/about", activeClassName: "active", className: "navbar-item" },
                    "About"
                ),
                loading && _react2.default.createElement(_LoadingDots2.default, { interval: 100, dots: 20 })
            )
        )
    );
};

Header.propTypes = {
    loading: _propTypes2.default.bool.isRequired
};

exports.default = Header;

/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoadingDots = function (_React$Component) {
    _inherits(LoadingDots, _React$Component);

    function LoadingDots(props, context) {
        _classCallCheck(this, LoadingDots);

        var _this = _possibleConstructorReturn(this, (LoadingDots.__proto__ || Object.getPrototypeOf(LoadingDots)).call(this, props, context));

        _this.state = { frame: 1 };
        return _this;
    }

    _createClass(LoadingDots, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.interval = setInterval(function () {
                _this2.setState({ // eslint-disable-line react/no-did-mount-set-state
                    frame: _this2.state.frame + 1
                });
            }, this.props.interval);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearInterval(this.interval);
        }
    }, {
        key: 'render',
        value: function render() {
            var dots = this.state.frame % (this.props.dots + 1);
            var text = '';
            while (dots > 0) {
                text += '.';
                dots--;
            }
            return _react2.default.createElement(
                'span',
                _extends({}, this.props, { className: 'loadingDots' }),
                text,
                '\xA0'
            );
        }
    }]);

    return LoadingDots;
}(_react2.default.Component);

LoadingDots.defaultProps = {
    interval: 300, dots: 3
};

LoadingDots.propTypes = {
    interval: _react.PropTypes.number,
    dots: _react.PropTypes.number
};

exports.default = LoadingDots;

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(26);

var _App = __webpack_require__(188);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(189);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _AboutPage = __webpack_require__(107);

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

/***/ }),

/***/ 451:
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

var _reactRedux = __webpack_require__(56);

var _pageActions = __webpack_require__(69);

var pageActions = _interopRequireWildcard(_pageActions);

var _redux = __webpack_require__(40);

var _reactRouterDom = __webpack_require__(26);

var _pageRender = __webpack_require__(111);

var _pageRender2 = _interopRequireDefault(_pageRender);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_React$Component) {
    _inherits(Main, _React$Component);

    function Main() {
        _classCallCheck(this, Main);

        return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
    }

    _createClass(Main, [{
        key: "render",

        // https://wpengine.com/wp-content/uploads/2017/02/WP-EBK-LT-UltimateGuideToPhp-FINAL.pdf
        // https://github.com/DreySkee/wp-api-react
        //http://jpsierens.com/simple-react-redux-application/
        value: function render() {

            return _react2.default.createElement(
                "div",
                { className: "section" },
                _react2.default.createElement(
                    "div",
                    { className: "container" },
                    _react2.default.createElement(_pageRender2.default, { page: this.props.page })
                )
            );
        }
    }]);

    return Main;
}(_react2.default.Component);

Main.propTypes = {
    page: _propTypes2.default.object,
    history: _propTypes2.default.object,
    location: _propTypes2.default.object,
    match: _propTypes2.default.object
};

function getPageBySlug(pages, slug) {
    return pages.filter(function (page) {
        return page.slug === slug;
    });
}

function mapStateToProps(state, ownProps) {
    console.log(state, 'main state');
    console.log(ownProps, 'ownProps');
    var pageSlug = ownProps.match.path.replace('/', '');
    console.log(pageSlug, 'pageSlug');
    var page = pageSlug.length === 0 ? getPageBySlug(state.pages, 'home') : getPageBySlug(state.pages, pageSlug);

    return {
        page: page[0],
        pages: state.pages
    };
}

// determines what actions are available in the component
function mapDispatchToProps(dispatch) {
    return {
        actions: (0, _redux.bindActionCreators)(pageActions, dispatch) // becomes this.props.actions
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactRouterDom.withRouter)(Main));

/***/ })

})