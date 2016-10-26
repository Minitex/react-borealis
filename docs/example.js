require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactBorealis = require('react-borealis');

var _reactBorealis2 = _interopRequireDefault(_reactBorealis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var assets = [{
  "focus": true,
  "type": "image",
  "include_controls": true,
  "thumbnail": "https://stacks.stanford.edu/image/iiif/hg676jb4964%252F0380_796-44/full/340,/0/default.jpg",
  "os_config": {
    "sequenceMode": true,
    "showReferenceStrip": true,
    "tileSources": ["https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/info.json", "https://ids.lib.harvard.edu/ids/iiif/25286610/info.json"]
  }
}, {
  "focus": true,
  "type": "pdf",
  "src": "https://s3.amazonaws.com/mdl-assets/stpaul.pdf",
  "thumbnail": "http://reflections.mndigital.org/utils/getthumbnail/collection/p16022coll35/id/0"
}, {
  "focus": false,
  "type": "audio",
  "src": "http://reflections.mndigital.org/utils/getstream/collection/mhs/id/1919",
  "thumbnail": "http://reflections.mndigital.org/utils/getthumbnail/collection/jhs/id/885"
}, {
  "focus": false,
  "type": "video",
  "height": 500,
  "width": 500,
  "src": "http://reflections.mndigital.org/utils/getstream/collection/stc/id/8470",
  "thumbnail": "http://reflections.mndigital.org/utils/getthumbnail/collection/p16022coll38/id/0"
}];

var App = _react2.default.createClass({
  displayName: 'App',
  render: function render() {
    return _react2.default.createElement(_reactBorealis2.default, { assets: this.props.assets });
  }
});

_reactDom2.default.render(_react2.default.createElement(App, { assets: assets }), document.getElementById('app'));

},{"react":undefined,"react-borealis":undefined,"react-dom":undefined}]},{},[1]);
