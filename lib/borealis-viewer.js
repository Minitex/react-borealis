'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var BorealisViewer = (function (_React$Component) {
  _inherits(BorealisViewer, _React$Component);

  function BorealisViewer(props) {
    _classCallCheck(this, BorealisViewer);

    _get(Object.getPrototypeOf(BorealisViewer.prototype), 'constructor', this).call(this, props);
    this._player = this._player.bind(this);
  }

  _createClass(BorealisViewer, [{
    key: '_player',
    value: function _player() {
      var _props$active_asset = this.props.active_asset;
      var type = _props$active_asset.type;
      var src = _props$active_asset.src;

      switch (type) {
        case 'pdf':
          return _react2['default'].createElement(_borealisPdf2['default'], { src: src });
          break;
        case 'audio':
          return _react2['default'].createElement(_borealisAudio2['default'], { src: src });
          break;
        case 'video':
          var _props$active_asset2 = this.props.active_asset,
              height = _props$active_asset2.height,
              width = _props$active_asset2.width;

          return _react2['default'].createElement(_borealisVideo2['default'], { src: src });
          break;
        case 'image':
          var _props$active_asset3 = this.props.active_asset,
              include_navigator = _props$active_asset3.include_navigator,
              include_controls = _props$active_asset3.include_controls,
              os_config = _props$active_asset3.os_config;

          return _react2['default'].createElement(_reactOpenseadragon2['default'], { include_navigator: include_navigator,
            include_controls: include_controls,
            config: os_config });
          break;
        default:
          return _react2['default'].createElement(
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
      return _react2['default'].createElement(
        'div',
        { id: 'react-borealis', className: 'react-borealis col-md-12' },
        this._player()
      );
    }
  }]);

  return BorealisViewer;
})(_react2['default'].Component);

exports['default'] = BorealisViewer;

var propTypes = {
  active_asset: _react2['default'].PropTypes.object.isRequired
};

BorealisViewer.propTypes = propTypes;
module.exports = exports['default'];