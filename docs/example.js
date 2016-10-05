require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactBorealis = require('react-borealis');

var _reactBorealis2 = _interopRequireDefault(_reactBorealis);

var App = _react2['default'].createClass({
  displayName: 'App',

  getInitialState: function getInitialState() {
    return { player: _react2['default'].createElement(_reactBorealis2['default'], { src: 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf', type: 'pdf' }) };
  },
  _setPlayer: function _setPlayer(type, e) {
    e.preventDefault();
    switch (type) {
      case 'pdf':
        this.setState({ player: _react2['default'].createElement(_reactBorealis2['default'], { src: 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf', type: 'pdf' }) });
        break;
      case 'audio':
        this.setState({ player: _react2['default'].createElement(_reactBorealis2['default'], { src: 'http://reflections.mndigital.org/utils/getstream/collection/jhs/id/1022', type: 'audio' }) });
        break;
      case 'video':
        this.setState({ player: _react2['default'].createElement(_reactBorealis2['default'], { src: 'http://www.w3schools.com/html/mov_bbb.mp4', type: 'video' }) });
        break;
      case 'iiif':
        var seadragon_conf = {
          sequenceMode: true,
          showReferenceStrip: true,
          tileSources: ["https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/info.json", "https://ids.lib.harvard.edu/ids/iiif/25286610/info.json"]
        };
        this.setState({ player: _react2['default'].createElement(_reactBorealis2['default'], { config: seadragon_conf, type: 'iiif' }) });
        break;
    }
  },
  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'ul',
        null,
        _react2['default'].createElement(
          'li',
          null,
          _react2['default'].createElement(
            'a',
            { href: '#', onClick: this._setPlayer.bind(this, 'pdf') },
            'pdf'
          )
        ),
        _react2['default'].createElement(
          'li',
          null,
          _react2['default'].createElement(
            'a',
            { href: '#', onClick: this._setPlayer.bind(this, 'audio') },
            'audio'
          )
        ),
        _react2['default'].createElement(
          'li',
          null,
          _react2['default'].createElement(
            'a',
            { href: '#', onClick: this._setPlayer.bind(this, 'video') },
            'video'
          )
        ),
        _react2['default'].createElement(
          'li',
          null,
          _react2['default'].createElement(
            'a',
            { href: '#', onClick: this._setPlayer.bind(this, 'iiif') },
            'iiif image'
          )
        )
      ),
      this.state.player
    );
  }
});

_reactDom2['default'].render(_react2['default'].createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-borealis":undefined,"react-dom":undefined}]},{},[1]);
