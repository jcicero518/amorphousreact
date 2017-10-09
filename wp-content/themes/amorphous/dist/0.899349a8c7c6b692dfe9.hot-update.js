webpackHotUpdate(0,{

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pageContainer = document.querySelector('.pagination');

var Pagination = function () {
    function Pagination() {
        _classCallCheck(this, Pagination);

        if (pageContainer) {
            this.pageLinks = [].concat(_toConsumableArray(pageContainer.querySelectorAll('a'))).filter(function (link) {
                return link.hasAttribute('href') && link.innerHTML.match(/\d{1,}/);
            });
        }
    }

    _createClass(Pagination, [{
        key: 'watchLinks',
        value: function watchLinks() {
            this.pageLinks.forEach(function (link) {
                link.addEventListener('click', function (e) {
                    console.log(e.target);
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