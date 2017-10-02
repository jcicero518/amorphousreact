webpackHotUpdate(0,{

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoadingDots = function (_React$Component) {
    _inherits(LoadingDots, _React$Component);

    function LoadingDots(props, context) {
        _classCallCheck(this, LoadingDots);

        var _this = _possibleConstructorReturn(this, (LoadingDots.__proto__ || Object.getPrototypeOf(LoadingDots)).call(this, props, context));

        _this.state = { frame: 1 };
        return _this;
    }

    _createClass(LoadingDots, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.interval = setInterval(function () {
                _this2.setState({ // eslint-disable-line react/no-did-mount-set-state
                    frame: _this2.state.frame + 1
                });
            }, this.props.interval);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearInterval(this.interval);
        }
    }, {
        key: 'render',
        value: function render() {
            var dots = this.state.frame % (this.props.dots + 1);
            var text = '';
            while (dots > 0) {
                text += '.';
                dots--;
            }
            return _react2.default.createElement(
                'span',
                _extends({}, this.props, { className: 'loadingDots' }),
                text,
                '\xA0'
            );
        }
    }]);

    return LoadingDots;
}(_react2.default.Component);

LoadingDots.defaultProps = {
    interval: 300, dots: 3
};

LoadingDots.propTypes = {
    interval: _react.PropTypes.number,
    dots: _react.PropTypes.number
};

exports.default = LoadingDots;

/***/ })

})