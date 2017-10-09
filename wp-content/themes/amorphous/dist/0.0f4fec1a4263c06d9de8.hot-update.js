webpackHotUpdate(0,{

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pageContainer = document.querySelector('.pagination');

var Pagination = function Pagination() {
    _classCallCheck(this, Pagination);

    if (pageContainer) {
        this.pageLinks = [].concat(_toConsumableArray(pageContainer.querySelectorAll('a'))).filter(function (link) {
            return link.hasAttribute('href') && link.innerHTML.match(/\d{1,}/);
        });
    }
};

exports.default = Pagination;

/***/ })

})