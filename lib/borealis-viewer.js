'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _borealisPdf = require('./borealis-pdf');

var _borealisPdf2 = _interopRequireDefault(_borealisPdf);

var _borealisAudio = require('./borealis-audio');

var _borealisAudio2 = _interopRequireDefault(_borealisAudio);

var _borealisVideo = require('./borealis-video');

var _borealisVideo2 = _interopRequireDefault(_borealisVideo);

var _reactOpenseadragon = require('react-openseadragon');

var _reactOpenseadragon2 = _interopRequireDefault(_reactOpenseadragon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BorealisViewer = function (_React$Component) {
  _inherits(BorealisViewer, _React$Component);

  function BorealisViewer(props) {
    _classCallCheck(this, BorealisViewer);

    var _this = _possibleConstructorReturn(this, (BorealisViewer.__proto__ || Object.getPrototypeOf(BorealisViewer)).call(this, props));

    _this._player = _this._player.bind(_this);
    return _this;
  }

  _createClass(BorealisViewer, [{
    key: '_player',
    value: function _player() {
      var _props$active_asset = this.props.active_asset,
          type = _props$active_asset.type,
          src = _props$active_asset.src,
          thumbnail = _props$active_asset.thumbnail;

      switch (type) {
        case 'pdf':
          return _react2.default.createElement(_borealisPdf2.default, { src: src, thumbnail: thumbnail });
          break;
        case 'audio':
          return _react2.default.createElement(_borealisAudio2.default, { src: src });
          break;
        case 'video':
          var _props$active_asset2 = this.props.active_asset,
              height = _props$active_asset2.height,
              width = _props$active_asset2.width;

          return _react2.default.createElement(_borealisVideo2.default, { src: src });
          break;
        case 'image':
          var _props$active_asset3 = this.props.active_asset,
              include_navigator = _props$active_asset3.include_navigator,
              include_controls = _props$active_asset3.include_controls,
              os_config = _props$active_asset3.os_config;

          return _react2.default.createElement(_reactOpenseadragon2.default, { include_navigator: include_navigator,
            include_controls: include_controls,
            config: os_config });
          break;
        default:
          return _react2.default.createElement(
            'div',
            null,
            'No Viewer Avaialable for type: "',
            type,
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
        this._player()
      );
    }
  }]);

  return BorealisViewer;
}(_react2.default.Component);

exports.default = BorealisViewer;


var propTypes = {
  active_asset: _react2.default.PropTypes.object.isRequired
};

BorealisViewer.propTypes = propTypes;