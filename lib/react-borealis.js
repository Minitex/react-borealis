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

var _borealisViewer = require('./borealis-viewer');

var _borealisViewer2 = _interopRequireDefault(_borealisViewer);

var _borealisTray = require('./borealis-tray');

var _borealisTray2 = _interopRequireDefault(_borealisTray);

var _reactOpenseadragon = require('react-openseadragon');

var _reactOpenseadragon2 = _interopRequireDefault(_reactOpenseadragon);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Borealis = function (_React$Component) {
  _inherits(Borealis, _React$Component);

  function Borealis(props) {
    _classCallCheck(this, Borealis);

    var _this = _possibleConstructorReturn(this, (Borealis.__proto__ || Object.getPrototypeOf(Borealis)).call(this, props));

    _this.state = { assets: _this.props.assets };
    _this._bindInit();
    return _this;
  }

  _createClass(Borealis, [{
    key: '_bindInit',
    value: function _bindInit() {
      this._hasFocus = this._hasFocus.bind(this);
      this._getActiveAsset = this._getActiveAsset.bind(this);
      this._setActiveAsset = this._setActiveAsset.bind(this);
      this._getActiveIndex = this._getActiveIndex.bind(this);
      this._updateFocus = this._updateFocus.bind(this);
      this._immutableAssets = this._immutableAssets.bind(this);
      this._unFocused = this._unFocused.bind(this);
      this._tray = this._tray.bind(this);
    }
  }, {
    key: '_setActiveAsset',
    value: function _setActiveAsset(i, e) {
      e.preventDefault();
      this.setState({ assets: this._updateFocus(this._unFocused(), i, true).toJS() });
    }
  }, {
    key: '_getActiveIndex',
    value: function _getActiveIndex() {
      return this.state.assets.findIndex(this._hasFocus);
    }
  }, {
    key: '_getActiveAsset',
    value: function _getActiveAsset() {
      return this.state.assets.find(this._hasFocus);
    }
  }, {
    key: '_hasFocus',
    value: function _hasFocus(asset) {
      return asset.focus == true;
    }
  }, {
    key: '_unFocused',
    value: function _unFocused() {
      return this._updateFocus(this._immutableAssets(), this._getActiveIndex(), false);
    }
  }, {
    key: '_updateFocus',
    value: function _updateFocus(list, i, state) {
      return list.update(i, function (asset) {
        return asset.set("focus", state);
      });
    }
  }, {
    key: '_immutableAssets',
    value: function _immutableAssets() {
      return new _immutable2.default.fromJS(this.state.assets);
    }
  }, {
    key: '_tray',
    value: function _tray(assets) {
      if (this.state.assets.length > 1) {
        return _react2.default.createElement(_borealisTray2.default, { assets: this.state.assets, handler: this._setActiveAsset });
      } else {
        return '';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_borealisViewer2.default, { active_asset: this._getActiveAsset() }),
        this._tray()
      );
    }
  }]);

  return Borealis;
}(_react2.default.Component);

exports.default = Borealis;


var propTypes = {
  assets: _react2.default.PropTypes.array.isRequired
};

Borealis.propTypes = propTypes;