webpackHotUpdate(0,{

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*global mwccRestApi, settings */


var _axios = __webpack_require__(14);

var _axios2 = _interopRequireDefault(_axios);

var _codePost = __webpack_require__(42);

var _codePost2 = _interopRequireDefault(_codePost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var boxContainer = document.getElementById('content-inner-replace');

var Pagination = function () {
    function Pagination(params) {
        _classCallCheck(this, Pagination);

        var appUrl = mwccRestApi.home;
        var pageContainer = document.querySelector('.pagination');

        this.postType = params[0] ? params[0] : 'card';
        this.category = params[1] ? params[1] : 'general-news';
        this.categoryId = params[2] ? params[2] : 0;
        this.page = 1;
        this.endPoint = appUrl + "/wp-json/wp/v2/" + this.postType;
        // get category by slug
        // http://mwcc.local/wp-json/wp/v2/categories?slug=general-news
        // returns id to be used in filtering post

        // get news by category
        // general-news id = 8
        // http://mwcc.local/wp-json/wp/v2/news-article?per_page=3&categories=8
        if (pageContainer) {
            this.pageLinks = [].concat(_toConsumableArray(pageContainer.querySelectorAll('a'))).filter(function (link) {
                return link.hasAttribute('href') && link.innerHTML.match(/\d{1,}/);
            });
        }
    }

    _createClass(Pagination, [{
        key: "setPostType",
        value: function setPostType(postType) {
            this.postType = postType;
        }
    }, {
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
    }, {
        key: "renderPage",
        value: function renderPage(payload) {
            var boxChildren = boxContainer.children;
            payload.forEach(function (post, iterator) {
                var eachTemplate = (0, _codePost2.default)(post);
                var boxChild = boxChildren[iterator];
                console.log(boxChild, 'boxChild');
                //let mount = document.getElementById( 'content-replace' );
                //boxContainer.removeChild( boxChildren[iterator] );
                boxContainer.insertAdjacentHTML('beforeend', eachTemplate);
                boxChild.classList.remove('hidden');
                boxChild.classList.add('visible');
            });
        }
    }, {
        key: "getPage",
        value: function getPage(pageNum) {
            var _this = this;

            console.log(_codePost2.default, 'codePost');
            this.api(this.endPoint + "?per_page=5&page=" + pageNum).then(function (payload) {
                console.log(payload);
                _this.renderPage(payload);
            });
        }
    }, {
        key: "watchLinks",
        value: function watchLinks() {
            var _this2 = this;

            this.pageLinks.forEach(function (link) {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    var newPage = link.innerHTML;
                    _this2.getPage(newPage);
                    console.log(link, 'link');
                });
            });
        }
    }]);

    return Pagination;
}();

exports.default = Pagination;

/***/ })

})