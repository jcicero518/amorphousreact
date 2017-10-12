webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

__webpack_require__(3);

var _pagination = __webpack_require__(5);

var _pagination2 = _interopRequireDefault(_pagination);

__webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(settings, 'settings');
var _settings$queriedObje = settings.queriedObject,
    category_nicename = _settings$queriedObje.category_nicename,
    cat_ID = _settings$queriedObje.cat_ID;

console.log(settings.queriedObject, 'queried');
var page = new _pagination2.default(['card', category_nicename, cat_ID]);
page.watchLinks();
// Entry point app
//import "./index";

/***/ })
])