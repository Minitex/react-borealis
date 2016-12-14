'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactActiveItem = require('react-active-item');

var _reactActiveItem2 = _interopRequireDefault(_reactActiveItem);

var _reactOpenseadragon = require('react-openseadragon');

var _reactOpenseadragon2 = _interopRequireDefault(_reactOpenseadragon);

var _borealisTray = require('./borealis-tray');

var _borealisTray2 = _interopRequireDefault(_borealisTray);

var _borealisPdf = require('./borealis-pdf');

var _borealisPdf2 = _interopRequireDefault(_borealisPdf);

var _borealisAudio = require('./borealis-audio');

var _borealisAudio2 = _interopRequireDefault(_borealisAudio);

var _borealisVideo = require('./borealis-video');

var _borealisVideo2 = _interopRequireDefault(_borealisVideo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Borealis = function (_React$Component) {
  _inherits(Borealis, _React$Component);

  function Borealis(props) {
    _classCallCheck(this, Borealis);

    var _this = _possibleConstructorReturn(this, (Borealis.__proto__ || Object.getPrototypeOf(Borealis)).call(this, props));

    _this._player = _this._player.bind(_this);
    return _this;
  }

  _createClass(Borealis, [{
    key: '_player',
    value: function _player() {
      var item = this.props.getActiveItem();
      switch (item.type) {
        case 'pdf':
          return _react2.default.createElement(_borealisPdf2.default, item);
          break;
        case 'audio':
          return _react2.default.createElement(_borealisAudio2.default, item);
          break;
        case 'video':
          return _react2.default.createElement(_borealisVideo2.default, item);
          break;
        case 'image':
          return _react2.default.createElement(_reactOpenseadragon2.default, item);
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
        { id: 'react-borealis', className: 'react-borealis col-md-12' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(_borealisTray2.default, this.props)
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          this._player()
        )
      );
    }
  }]);

  return Borealis;
}(_react2.default.Component);

var propTypes = {
  items: _react2.default.PropTypes.array.isRequired
};

Borealis.propTypes = propTypes;

exports.default = (0, _reactActiveItem2.default)(Borealis);