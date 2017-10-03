webpackHotUpdate(0,{

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*global mwccRestApi, globalPost, mainMenu */


var _axios = __webpack_require__(430);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PagesApi = function () {
    function PagesApi() {
        var postType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'pages';

        _classCallCheck(this, PagesApi);

        var appUrl = mwccRestApi.home;
        var restApiUrl = mwccRestApi.rest;
        var _globalPost = globalPost,
            postID = _globalPost.postID;

        var pages = [];
        var PRETTYPERMALINK_ENDPOINT = restApiUrl + "amorphous-theme/v1/prettyPermalink/";

        this.pagesEndPoint = appUrl + "/wp-json/wp/v2/pages";
        this.postsEndPoint = appUrl + "/wp-json/wp/v2/" + postType; // Endpoint for WP posts
        this.postIdEndPoint = appUrl + "/wp-json/wp/v2/" + postType + "/" + postID;
    }

    _createClass(PagesApi, [{
        key: "api",
        value: function api(endPoint) {
            return new Promise(function (resolve, reject) {
                _axios2.default.get(endPoint).then(function (response) {
                    resolve(response.data);
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /*getPageById() {
            return new Promise( ( resolve, reject ) => {
                axios.get()
            })
        }*/

    }, {
        key: "getPage",
        value: function getPage() {
            var _this = this;

            return new Promise(function (resolve, reject) {
                _axios2.default.get(_this.postIdEndPoint).then(function (response) {
                    resolve(Object.assign([], response.data));
                });
            });
        }
    }, {
        key: "getPages",
        value: function getPages() {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
                _axios2.default.get(_this2.pagesEndPoint).then(function (response) {
                    resolve(Object.assign([], response.data));
                });
            });
            /*this.api(this.postsEndPoint).then(response => {
                return Object.assign({}, this.pages);
            });*/
        }
    }]);

    return PagesApi;
}();

exports.default = PagesApi;

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
    _react2.default.createElement(_reactRouterDom.Route, { path: "/page/:pagePath", component: _Main2.default })
);

/***/ })

})