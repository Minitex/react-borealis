"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Thumbnail = function Thumbnail(props) {
  return _react2["default"].createElement(
    "div",
    { className: "col-md-2" },
    _react2["default"].createElement(
      "a",
      { onClick: props.handler, className: "thumbnail" },
      _react2["default"].createElement("img", { src: props.src })
    )
  );
};

exports["default"] = Thumbnail;
module.exports = exports["default"];