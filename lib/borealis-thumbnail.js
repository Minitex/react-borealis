"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Thumbnail = function Thumbnail(props) {
  return _react2.default.createElement(
    "div",
    { className: "col-md-2" },
    _react2.default.createElement(
      "a",
      { onClick: props.setActiveItem, className: "thumbnail" },
      _react2.default.createElement("img", { src: props.src })
    )
  );
};

var propTypes = {
  setActiveItem: _react2.default.PropTypes.func.isRequired,
  src: _react2.default.PropTypes.string.isRequired
};

Thumbnail.propTypes = propTypes;

exports.default = Thumbnail;