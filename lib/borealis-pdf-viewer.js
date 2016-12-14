"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BorealisPDFViewer = function (_React$Component) {
  _inherits(BorealisPDFViewer, _React$Component);

  function BorealisPDFViewer(props) {
    _classCallCheck(this, BorealisPDFViewer);

    return _possibleConstructorReturn(this, (BorealisPDFViewer.__proto__ || Object.getPrototypeOf(BorealisPDFViewer)).call(this, props));
  }

  _createClass(BorealisPDFViewer, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          src = _props.src,
          height = _props.height,
          width = _props.width,
          thumbnail = _props.thumbnail;

      return _react2.default.createElement(
        "object",
        { data: src, type: "application/pdf", width: width, height: height },
        _react2.default.createElement("img", { src: thumbnail }),
        " ",
        _react2.default.createElement(
          "a",
          { href: src },
          _react2.default.createElement("span", { className: "glyphicon glyphicon-download-alt" }),
          " ",
          src
        )
      );
    }
  }]);

  return BorealisPDFViewer;
}(_react2.default.Component);

exports.default = BorealisPDFViewer;


BorealisPDFViewer.defaultProps = {
  height: 500,
  width: 800
};

BorealisPDFViewer.propTypes = {
  src: _react2.default.PropTypes.string.isRequired,
  height: _react2.default.PropTypes.number,
  width: _react2.default.PropTypes.number,
  thumbnail: _react2.default.PropTypes.string
};