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

var categoryMount = document.getElementById('content-inner-replace');

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
            payload.forEach(function (post) {
                var eachTemplate = (0, _codePost2.default)(post);
                //let mount = document.getElementById( 'content-replace' );
                //mount.replaceWith( eachTemplate );
                categoryMount.insertAdjacentHTML('beforeend', eachTemplate);
                //categoryMount.appendChild( element );
            });
        }
    }, {
        key: "getPage",
        value: function getPage(pageNum) {
            var _this = this;

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

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(43);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    return "                \n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"box\">\n    <header class=\"entry-header\">\n        <h2 class=\"title\"><a href=\""
    + alias4(((helper = (helper = helpers.post_permalink || (depth0 != null ? depth0.post_permalink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"post_permalink","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.plaintitle || (depth0 != null ? depth0.plaintitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"plaintitle","hash":{},"data":data}) : helper)))
    + "</a></h2>\n        <div class=\"entry-meta\">\n            <span class=\"tag is-info "
    + alias4(((helper = (helper = helpers.tagClass || (depth0 != null ? depth0.tagClass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tagClass","hash":{},"data":data}) : helper)))
    + "\">Topics</span>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.post_code_cat_tax : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n    </header>\n    <div class=\"entry-content\">"
    + alias4(((helper = (helper = helpers.post_excerpt || (depth0 != null ? depth0.post_excerpt : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"post_excerpt","hash":{},"data":data}) : helper)))
    + "</div>\n</div>";
},"useData":true});

/***/ })

})