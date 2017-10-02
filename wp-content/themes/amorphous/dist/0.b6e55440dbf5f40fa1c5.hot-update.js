webpackHotUpdate(0,{

/***/ 104:
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

var _reactRedux = __webpack_require__(67);

var _pageActions = __webpack_require__(107);

var pageActions = _interopRequireWildcard(_pageActions);

var _redux = __webpack_require__(54);

var _reactRouterDom = __webpack_require__(39);

var _pageRender = __webpack_require__(202);

var _pageRender2 = _interopRequireDefault(_pageRender);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AboutPage = function (_React$Component) {
    _inherits(AboutPage, _React$Component);

    function AboutPage() {
        _classCallCheck(this, AboutPage);

        return _possibleConstructorReturn(this, (AboutPage.__proto__ || Object.getPrototypeOf(AboutPage)).apply(this, arguments));
    }

    _createClass(AboutPage, [{
        key: "render",

        // https://wpengine.com/wp-content/uploads/2017/02/WP-EBK-LT-UltimateGuideToPhp-FINAL.pdf
        // https://github.com/DreySkee/wp-api-react
        //http://jpsierens.com/simple-react-redux-application/
        value: function render() {
            console.log(this, 'about render');
            //const {rendered} = this.props.page.title;
            // <PageRender page={this.props.page} />
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "h1",
                    null,
                    "About Page"
                ),
                _react2.default.createElement(
                    "h2",
                    null,
                    this.props.page.title.rendered
                ),
                _react2.default.createElement(_pageRender2.default, { page: this.props.page })
            );
        }
    }]);

    return AboutPage;
}(_react2.default.Component);

AboutPage.propTypes = {
    page: _propTypes2.default.object,
    history: _propTypes2.default.object,
    match: _propTypes2.default.object
};

function getPageBySlug(pages, slug) {
    return pages.filter(function (page) {
        return page.slug === slug;
    });
}

function mapStateToProps(state, ownProps) {
    console.log(ownProps, 'ownProps');
    var pageSlug = ownProps.match.path.replace('/', '');
    var page = getPageBySlug(state.pages, pageSlug);

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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactRouterDom.withRouter)(AboutPage));

/***/ }),

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
                "section",
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

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageRender = function PageRender(_ref) {
    var page = _ref.page;

    console.log(page, 'page');
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "h2",
            null,
            page.title.rendered
        )
    );
};

exports.default = PageRender;

/***/ }),

/***/ 203:
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

var _reactRouterDom = __webpack_require__(39);

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
                "div",
                null,
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
            );
        }
    }]);

    return HomePage;
}(_react2.default.Component);

exports.default = HomePage;

/***/ }),

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
    );
};

exports.default = Header;

/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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
                this.props,
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

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(39);

var _App = __webpack_require__(187);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(203);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _AboutPage = __webpack_require__(104);

var _AboutPage2 = _interopRequireDefault(_AboutPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
    _reactRouterDom.Switch,
    null,
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/", component: _HomePage2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/about", component: _AboutPage2.default })
);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9jdXN0b20vY29tcG9uZW50cy9hYm91dC9BYm91dFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvY3VzdG9tL2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2N1c3RvbS9jb21wb25lbnRzL3BhZ2UvcGFnZVJlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9jdXN0b20vY29tcG9uZW50cy9ob21lL0hvbWVQYWdlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2N1c3RvbS9jb21wb25lbnRzL2NvbW1vbi9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvY3VzdG9tL2NvbXBvbmVudHMvY29tbW9uL0xvYWRpbmdEb3RzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2N1c3RvbS9yb3V0ZXMuanMiXSwibmFtZXMiOlsicGFnZUFjdGlvbnMiLCJBYm91dFBhZ2UiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJwYWdlIiwidGl0bGUiLCJyZW5kZXJlZCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIm9iamVjdCIsImhpc3RvcnkiLCJtYXRjaCIsImdldFBhZ2VCeVNsdWciLCJwYWdlcyIsInNsdWciLCJmaWx0ZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwicGFnZVNsdWciLCJwYXRoIiwicmVwbGFjZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYWN0aW9ucyIsIkFwcCIsImxvYWRpbmciLCJib29sIiwiaXNSZXF1aXJlZCIsImFycmF5IiwibmV3UHJvcCIsImFqYXhDYWxsc0luUHJvZ3Jlc3MiLCJQYWdlUmVuZGVyIiwiSG9tZVBhZ2UiLCJIZWFkZXIiLCJMb2FkaW5nRG90cyIsImNvbnRleHQiLCJmcmFtZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJzZXRTdGF0ZSIsImNsZWFySW50ZXJ2YWwiLCJkb3RzIiwidGV4dCIsImRlZmF1bHRQcm9wcyIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7O0lBQVlBLFc7O0FBRVo7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0lBRU1DLFM7Ozs7Ozs7Ozs7OztBQUNGO0FBQ0E7QUFDQTtpQ0FDUztBQUNMQyxvQkFBUUMsR0FBUixDQUFZLElBQVosRUFBa0IsY0FBbEI7QUFDQTtBQUNBO0FBQ0EsbUJBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQUVJO0FBQUE7QUFBQTtBQUFLLHlCQUFLQyxLQUFMLENBQVdDLElBQVgsQ0FBZ0JDLEtBQWhCLENBQXNCQztBQUEzQixpQkFGSjtBQUdJLHNFQUFZLE1BQU0sS0FBS0gsS0FBTCxDQUFXQyxJQUE3QjtBQUhKLGFBREo7QUFPSDs7OztFQWZtQixnQkFBTUcsUzs7QUFtQjlCUCxVQUFVUSxTQUFWLEdBQXNCO0FBQ2xCSixVQUFNLG9CQUFVSyxNQURFO0FBRWxCQyxhQUFTLG9CQUFVRCxNQUZEO0FBR2xCRSxXQUFPLG9CQUFVRjtBQUhDLENBQXRCOztBQU1BLFNBQVNHLGFBQVQsQ0FBd0JDLEtBQXhCLEVBQStCQyxJQUEvQixFQUFzQztBQUNsQyxXQUFPRCxNQUFNRSxNQUFOLENBQWMsZ0JBQVE7QUFDekIsZUFBT1gsS0FBS1UsSUFBTCxLQUFjQSxJQUFyQjtBQUNILEtBRk0sQ0FBUDtBQUdIOztBQUVELFNBQVNFLGVBQVQsQ0FBMEJDLEtBQTFCLEVBQWlDQyxRQUFqQyxFQUE0QztBQUN4Q2pCLFlBQVFDLEdBQVIsQ0FBWWdCLFFBQVosRUFBc0IsVUFBdEI7QUFDQSxRQUFNQyxXQUFXRCxTQUFTUCxLQUFULENBQWVTLElBQWYsQ0FBb0JDLE9BQXBCLENBQTZCLEdBQTdCLEVBQWtDLEVBQWxDLENBQWpCO0FBQ0EsUUFBSWpCLE9BQU9RLGNBQWVLLE1B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QUFDQTs7Ozs7O2tCQUdJO0FBQUE7QUFBQTtBQUNJLDJEQUFPLFdBQVAsRUFBYSxNQUFLLEdBQWxCLEVBQXNCLDZCQUF0QixHQURKO0FBRUksMkRBQU8sV0FBUCxFQUFhLE1BQUssUUFBbEIsRUFBMkIsOEJBQTNCO0FBRkosQyIsImZpbGUiOiIwLmI2ZTU1NDQwZGJmNWY0MGZhMWM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgKiBhcyBwYWdlQWN0aW9ucyBmcm9tIFwiLi4vLi4vYWN0aW9ucy9wYWdlQWN0aW9uc1wiO1xuXG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCBQYWdlUmVuZGVyIGZyb20gXCIuLi9wYWdlL3BhZ2VSZW5kZXJcIjtcblxuY2xhc3MgQWJvdXRQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAvLyBodHRwczovL3dwZW5naW5lLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMi9XUC1FQkstTFQtVWx0aW1hdGVHdWlkZVRvUGhwLUZJTkFMLnBkZlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EcmV5U2tlZS93cC1hcGktcmVhY3RcbiAgICAvL2h0dHA6Ly9qcHNpZXJlbnMuY29tL3NpbXBsZS1yZWFjdC1yZWR1eC1hcHBsaWNhdGlvbi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMsICdhYm91dCByZW5kZXInKTtcbiAgICAgICAgLy9jb25zdCB7cmVuZGVyZWR9ID0gdGhpcy5wcm9wcy5wYWdlLnRpdGxlO1xuICAgICAgICAvLyA8UGFnZVJlbmRlciBwYWdlPXt0aGlzLnByb3BzLnBhZ2V9IC8+XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5BYm91dCBQYWdlPC9oMT5cbiAgICAgICAgICAgICAgICA8aDI+e3RoaXMucHJvcHMucGFnZS50aXRsZS5yZW5kZXJlZH08L2gyPlxuICAgICAgICAgICAgICAgIDxQYWdlUmVuZGVyIHBhZ2U9e3RoaXMucHJvcHMucGFnZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG59XG5cbkFib3V0UGFnZS5wcm9wVHlwZXMgPSB7XG4gICAgcGFnZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBoaXN0b3J5OiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIG1hdGNoOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuXG5mdW5jdGlvbiBnZXRQYWdlQnlTbHVnKCBwYWdlcywgc2x1ZyApIHtcbiAgICByZXR1cm4gcGFnZXMuZmlsdGVyKCBwYWdlID0+IHtcbiAgICAgICAgcmV0dXJuIHBhZ2Uuc2x1ZyA9PT0gc2x1ZztcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKCBzdGF0ZSwgb3duUHJvcHMgKSB7XG4gICAgY29uc29sZS5sb2cob3duUHJvcHMsICdvd25Qcm9wcycpO1xuICAgIGNvbnN0IHBhZ2VTbHVnID0gb3duUHJvcHMubWF0Y2gucGF0aC5yZXBsYWNlKCAnLycsICcnICk7XG4gICAgbGV0IHBhZ2UgPSBnZXRQYWdlQnlTbHVnKCBzdGF0ZS5wYWdlcywgcGFnZVNsdWcgKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2U6IHBhZ2VbMF0sXG4gICAgICAgIHBhZ2VzOiBzdGF0ZS5wYWdlc1xuICAgIH07XG59XG5cbi8vIGRldGVybWluZXMgd2hhdCBhY3Rpb25zIGFyZSBhdmFpbGFibGUgaW4gdGhlIGNvbXBvbmVudFxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKCBkaXNwYXRjaCApIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoIHBhZ2VBY3Rpb25zLCBkaXNwYXRjaCApIC8vIGJlY29tZXMgdGhpcy5wcm9wcy5hY3Rpb25zXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCggbWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMgKSggd2l0aFJvdXRlciggQWJvdXRQYWdlICkpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9zY3JpcHRzL2N1c3RvbS9jb21wb25lbnRzL2Fib3V0L0Fib3V0UGFnZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9jb21tb24vSGVhZGVyXCI7XG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSBcIi4vaG9tZS9Ib21lUGFnZVwiO1xuaW1wb3J0IEFib3V0UGFnZSBmcm9tIFwiLi9hYm91dC9BYm91dFBhZ2VcIjtcbmltcG9ydCBQYWdlUmVuZGVyIGZyb20gXCIuL3BhZ2UvcGFnZVJlbmRlclwiO1xuXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbXBvcnQgKiBhcyBwYWdlQWN0aW9ucyBmcm9tIFwiLi4vYWN0aW9ucy9wYWdlQWN0aW9uc1wiO1xuXG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQge0Jyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSZWRpcmVjdCwgU3dpdGNoLCBSb3V0ZSwgd2l0aFJvdXRlcn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuaW1wb3J0IFJvdXRlcyBmcm9tIFwiLi4vcm91dGVzXCI7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsLXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgbG9hZGluZz17dGhpcy5wcm9wcy5sb2FkaW5nfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtSb3V0ZXN9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5BcHAucHJvcFR5cGVzID0ge1xuICAgIG1hdGNoOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgcGFnZXM6IFByb3BUeXBlcy5hcnJheVxufTtcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKCBzdGF0ZSwgbmV3UHJvcCApIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBsb2FkaW5nOiBzdGF0ZS5hamF4Q2FsbHNJblByb2dyZXNzID4gMCxcbiAgICAgICAgcGFnZXM6IHN0YXRlLnBhZ2VzXG4gICAgfTtcbn1cblxuLy8gZGV0ZXJtaW5lcyB3aGF0IGFjdGlvbnMgYXJlIGF2YWlsYWJsZSBpbiB0aGUgY29tcG9uZW50XG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoIGRpc3BhdGNoICkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyggcGFnZUFjdGlvbnMsIGRpc3BhdGNoICkgLy8gYmVjb21lcyB0aGlzLnByb3BzLmFjdGlvbnNcbiAgICB9O1xufVxuXG4vL2V4cG9ydCBkZWZhdWx0IEFwcDtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoIG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzICkoIEFwcCApO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9zY3JpcHRzL2N1c3RvbS9jb21wb25lbnRzL0FwcC5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuY29uc3QgUGFnZVJlbmRlciA9ICh7cGFnZX0pID0+IHtcbiAgICBjb25zb2xlLmxvZyhwYWdlLCAncGFnZScpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDI+e3BhZ2UudGl0bGUucmVuZGVyZWR9PC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZVJlbmRlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc2NyaXB0cy9jdXN0b20vY29tcG9uZW50cy9wYWdlL3BhZ2VSZW5kZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuY2xhc3MgSG9tZVBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+SG9tZSBwYWdlPC9oMT5cbiAgICAgICAgICAgICAgICA8aDI+V2VsY29tZSB0byB0aGUgYXBwPC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc2NyaXB0cy9jdXN0b20vY29tcG9uZW50cy9ob21lL0hvbWVQYWdlLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJlZGlyZWN0LCBTd2l0Y2gsIFJvdXRlLCBMaW5rLCBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuaW1wb3J0IEFib3V0UGFnZSBmcm9tIFwiLi4vYWJvdXQvQWJvdXRQYWdlXCI7XG5pbXBvcnQgTG9hZGluZ0RvdHMgZnJvbSBcIi4vTG9hZGluZ0RvdHNcIjtcblxuY29uc3QgSGVhZGVyID0gKHtsb2FkaW5nLCBwYWdlc30pID0+IHtcblxuICAgIHJldHVybiAoXG5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL1wiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPkhvbWU8L05hdkxpbms+XG4gICAgICAgICAgICB7XCIgfCBcIn1cbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2Fib3V0XCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+QWJvdXQ8L05hdkxpbms+XG4gICAgICAgICAgICB7bG9hZGluZyAmJiA8TG9hZGluZ0RvdHMgaW50ZXJ2YWw9ezEwMH0gZG90cz17MjB9IC8+fVxuICAgICAgICA8L25hdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9zY3JpcHRzL2N1c3RvbS9jb21wb25lbnRzL2NvbW1vbi9IZWFkZXIuanMiLCJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXN9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgTG9hZGluZ0RvdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge2ZyYW1lOiAxfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9uby1kaWQtbW91bnQtc2V0LXN0YXRlXG4gICAgICAgICAgICAgICAgZnJhbWU6IHRoaXMuc3RhdGUuZnJhbWUgKyAxXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgdGhpcy5wcm9wcy5pbnRlcnZhbCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgZG90cyA9IHRoaXMuc3RhdGUuZnJhbWUgJSAodGhpcy5wcm9wcy5kb3RzICsgMSk7XG4gICAgICAgIGxldCB0ZXh0ID0gJyc7XG4gICAgICAgIHdoaWxlIChkb3RzID4gMCkge1xuICAgICAgICAgICAgdGV4dCArPSAnLic7XG4gICAgICAgICAgICBkb3RzLS07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDxzcGFuIHsuLi50aGlzLnByb3BzfT57dGV4dH0mbmJzcDs8L3NwYW4+O1xuICAgIH1cbn1cblxuTG9hZGluZ0RvdHMuZGVmYXVsdFByb3BzID0ge1xuICAgIGludGVydmFsOiAzMDAsIGRvdHM6IDNcbn07XG5cbkxvYWRpbmdEb3RzLnByb3BUeXBlcyA9IHtcbiAgICBpbnRlcnZhbDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBkb3RzOiBQcm9wVHlwZXMubnVtYmVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nRG90cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9zY3JpcHRzL2N1c3RvbS9jb21wb25lbnRzL2NvbW1vbi9Mb2FkaW5nRG90cy5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSwgTGluaywgU3dpdGNoIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vY29tcG9uZW50cy9BcHBcIjtcbmltcG9ydCBIb21lUGFnZSBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUvSG9tZVBhZ2VcIjtcbmltcG9ydCBBYm91dFBhZ2UgZnJvbSBcIi4vY29tcG9uZW50cy9hYm91dC9BYm91dFBhZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgKFxuICAgIDxTd2l0Y2g+XG4gICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGNvbXBvbmVudD17SG9tZVBhZ2V9Lz5cbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvYWJvdXRcIiBjb21wb25lbnQ9e0Fib3V0UGFnZX0vPlxuICAgIDwvU3dpdGNoPlxuKTtcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc2NyaXB0cy9jdXN0b20vcm91dGVzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==