require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactBorealis = require('react-borealis');

var _reactBorealis2 = _interopRequireDefault(_reactBorealis);

var objects = [{
  "focus": true,
  "type": "iiif",
  "include_controls": true,
  "thumbnails": ["http://lib-mdl-dev.oit.umn.edu/thumbnails/p16022coll39/438"],
  "config": {
    "sequenceMode": true,
    "showReferenceStrip": true,
    "tileSources": [{
      "type": "image",
      "url": "http://lib-mdl-dev.oit.umn.edu/contentdm-images?id=p16022coll39:438"
    }, {
      "type": "image",
      "url": "http://lib-mdl-dev.oit.umn.edu/contentdm-images?id=p16022coll39:439"
    }, {
      "type": "image",
      "url": "http://lib-mdl-dev.oit.umn.edu/contentdm-images?id=p16022coll39:440"
    }, {
      "type": "image",
      "url": "http://lib-mdl-dev.oit.umn.edu/contentdm-images?id=p16022coll39:441"
    }]
  }
}, {
  "focus": false,
  "type": "pdf",
  "config": {
    "srcs": ["http://reflections.mndigital.org/utils/getfile/collection/p16022coll35/id/1/filename/2.pdf"]
  },
  "thumbnails": ["http://lib-mdl-dev.oit.umn.edu/thumbnails/p16022coll35/0"]
}, {
  "focus": false,
  "type": "audio",
  "config": {
    "srcs": ["http://reflections.mndigital.org/utils/getstream/collection/mhs/id/1919"]
  },
  "thumbnails": ["http://lib-mdl-dev.oit.umn.edu/thumbnails/jhs/885"]
}, {
  "focus": false,
  "type": "video",
  "config": {
    "height": 500,
    "width": 500,
    "srcs": ["http://reflections.mndigital.org/utils/getstream/collection/stc/id/8470"]
  },
  "thumbnails": ["http://reflections.mndigital.org/utils/getthumbnail/collection/p16022coll38/id/0"]
}];

var App = _react2['default'].createClass({
  displayName: 'App',

  render: function render() {
    return _react2['default'].createElement(_reactBorealis2['default'], { objects: this.props.objects, type: 'video' });
  }
});

_reactDom2['default'].render(_react2['default'].createElement(App, { objects: objects }), document.getElementById('app'));

},{"react":undefined,"react-borealis":undefined,"react-dom":undefined}]},{},[1]);
