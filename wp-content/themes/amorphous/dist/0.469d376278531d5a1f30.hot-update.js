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

var _reactRedux = __webpack_require__(68);

var _pageActions = __webpack_require__(107);

var pageActions = _interopRequireWildcard(_pageActions);

var _redux = __webpack_require__(54);

var _reactRouterDom = __webpack_require__(39);

var _pageRender = __webpack_require__(203);

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

/***/ })

})