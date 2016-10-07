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

var _borealisViewer = require('./borealis-viewer');

var _borealisViewer2 = _interopRequireDefault(_borealisViewer);

var _borealisTray = require('./borealis-tray');

var _borealisTray2 = _interopRequireDefault(_borealisTray);

var _reactOpenseadragon = require('react-openseadragon');

var _reactOpenseadragon2 = _interopRequireDefault(_reactOpenseadragon);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var Borealis = (function (_React$Component) {
  _inherits(Borealis, _React$Component);

  function Borealis(props) {
    _classCallCheck(this, Borealis);

    _get(Object.getPrototypeOf(Borealis.prototype), 'constructor', this).call(this, props);
    this.state = { objects: this.props.objects };
    this._bindInit();
  }

  _createClass(Borealis, [{
    key: '_bindInit',
    value: function _bindInit() {
      this._hasFocus = this._hasFocus.bind(this);
      this._getActiveObject = this._getActiveObject.bind(this);
      this._setActiveObject = this._setActiveObject.bind(this);
      this._getActiveIndex = this._getActiveIndex.bind(this);
      this._updateFocus = this._updateFocus.bind(this);
      this._immutableObjects = this._immutableObjects.bind(this);
      this._unFocused = this._unFocused.bind(this);
    }
  }, {
    key: '_setActiveObject',
    value: function _setActiveObject(i, e) {
      e.preventDefault();
      this.setState({ objects: this._updateFocus(this._unFocused(), i, true).toJS() });
    }
  }, {
    key: '_getActiveIndex',
    value: function _getActiveIndex() {
      return this.state.objects.findIndex(this._hasFocus);
    }
  }, {
    key: '_getActiveObject',
    value: function _getActiveObject() {
      return this.state.objects.find(this._hasFocus);
    }
  }, {
    key: '_hasFocus',
    value: function _hasFocus(object) {
      return object.focus == true;
    }
  }, {
    key: '_unFocused',
    value: function _unFocused() {
      return this._updateFocus(this._immutableObjects(), this._getActiveIndex(), false);
    }
  }, {
    key: '_updateFocus',
    value: function _updateFocus(list, i, state) {
      return list.update(i, function (object) {
        return object.set("focus", state);
      });
    }
  }, {
    key: '_immutableObjects',
    value: function _immutableObjects() {
      return new _immutable2['default'].fromJS(this.state.objects);
    }
  }, {
    key: 'render',
    value: function render() {
      var objects = this.state.objects;

      return _react2['default'].createElement(
        'div',
        { className: 'container' },
        _react2['default'].createElement(
          'div',
          { className: 'panel panel-default' },
          _react2['default'].createElement(
            'div',
            { className: 'panel-body' },
            _react2['default'].createElement(_borealisViewer2['default'], { active_object: this._getActiveObject() })
          ),
          _react2['default'].createElement(
            'div',
            { className: 'panel-footer' },
            _react2['default'].createElement(
              'div',
              { className: 'row borealis-tray' },
              _react2['default'].createElement(_borealisTray2['default'], { objects: objects, handler: this._setActiveObject })
            )
          )
        )
      );
    }
  }]);

  return Borealis;
})(_react2['default'].Component);

exports['default'] = Borealis;

var propTypes = {
  objects: _react2['default'].PropTypes.array.isRequired
};

Borealis.propTypes = propTypes;
module.exports = exports['default'];