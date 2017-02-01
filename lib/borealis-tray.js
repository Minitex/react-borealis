'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _borealisThumbnail = require('./borealis-thumbnail');

var _borealisThumbnail2 = _interopRequireDefault(_borealisThumbnail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BorealisTray = function (_React$Component) {
  _inherits(BorealisTray, _React$Component);

  function BorealisTray(props) {
    _classCallCheck(this, BorealisTray);

    return _possibleConstructorReturn(this, (BorealisTray.__proto__ || Object.getPrototypeOf(BorealisTray)).call(this, props));
  }

  _createClass(BorealisTray, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          items = _props.items,
          setActiveItem = _props.setActiveItem;

      if (items.length > 1) {
        return _react2.default.createElement(
          'div',
          { className: 'row borealis-tray' },
          items.map(function (item, i) {
            return _react2.default.createElement(_borealisThumbnail2.default, { is_active: item.focus, setActiveItem: setActiveItem.bind(this, i), key: i, src: item.thumbnail });
          })
        );
      } else {
        return _react2.default.createElement('span', null);
      }
    }
  }]);

  return BorealisTray;
}(_react2.default.Component);

exports.default = BorealisTray;


var propTypes = {
  items: _react2.default.PropTypes.array.isRequired
};

BorealisTray.propTypes = propTypes;