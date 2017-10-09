webpackHotUpdate(0,{

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

__webpack_require__(3);

var _pagination = __webpack_require__(11);

var _pagination2 = _interopRequireDefault(_pagination);

__webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pag = new _pagination2.default();
console.log(pag, 'pag');
// Entry point app
//import "./index";

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pageContainer = document.querySelector('.pagination');

var Pagination = function Pagination() {
    _classCallCheck(this, Pagination);

    if (pageContainer) {
        this.pageLinks = pageContainer.querySelectorAll('a').filter(function (link) {
            return link.hasAttribute('href') && link.innerHTML.match(/\d{1,}/);
        });
    }
};

exports.default = Pagination;

/***/ })

})