'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _borealisAudioPlayer = require('./borealis-audio-player');

var _borealisAudioPlayer2 = _interopRequireDefault(_borealisAudioPlayer);

var _transcriptNav = require('./transcript-nav');

var _transcriptNav2 = _interopRequireDefault(_transcriptNav);

var _reactActiveItem = require('react-active-item');

var _reactActiveItem2 = _interopRequireDefault(_reactActiveItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BorealisAudio = function (_React$Component) {
  _inherits(BorealisAudio, _React$Component);

  function BorealisAudio(props) {
    _classCallCheck(this, BorealisAudio);

    var _this = _possibleConstructorReturn(this, (BorealisAudio.__proto__ || Object.getPrototypeOf(BorealisAudio)).call(this, props));

    _this.viewer = _this.viewer.bind(_this);
    return _this;
  }

  _createClass(BorealisAudio, [{
    key: 'viewer',
    value: function viewer() {
      var item = this.props.getActiveItem();
      switch (item.type) {
        case 'audio':
          return _react2.default.createElement(_borealisAudioPlayer2.default, item);
          break;
        case 'transcript':
          return _react2.default.createElement(
            'div',
            null,
            item.texts[0]
          );
          break;
        default:
          return _react2.default.createElement(
            'div',
            null,
            'No Viewer Avaialable for type: "',
            item.type,
            '"'
          );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(_transcriptNav2.default, this.props)
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          this.viewer()
        )
      );
    }
  }]);

  return BorealisAudio;
}(_react2.default.Component);

var propTypes = {
  items: _react2.default.PropTypes.array.isRequired
};

BorealisAudio.propTypes = propTypes;

exports.default = (0, _reactActiveItem2.default)(BorealisAudio);