webpackHotUpdate(0,{

/***/ 203:
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
        { className: "columns" },
        _react2.default.createElement(
            "div",
            { className: "column" },
            _react2.default.createElement(
                "h2",
                null,
                page.title.rendered
            ),
            _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: page.content.rendered } })
        )
    );
};

exports.default = PageRender;

/***/ })

})