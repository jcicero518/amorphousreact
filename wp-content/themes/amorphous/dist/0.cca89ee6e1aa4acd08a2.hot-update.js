webpackHotUpdate(0,{

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ })

})