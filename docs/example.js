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
  "thumbnail": "https://stacks.stanford.edu/image/iiif/hg676jb4964%252F0380_796-44/full/340,/0/default.jpg",
  "items": [{
    "type": "image",
    "label": "Image",
    "focus": true,
    "include_controls": true,
    "sequenceMode": true,
    "showReferenceStrip": true,
    "defaultZoomLevel": 0,
    "tileSources": ["https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/info.json", "https://ids.lib.harvard.edu/ids/iiif/25286610/info.json"]
  }, {
    "type": "transcript",
    "label": "Transcript",
    "texts": ["First Item", "Second Item"],
    "focus": false
  }]
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

},{"react":undefined,"react-borealis":undefined,"react-dom":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9yZWFjdC1jb21wb25lbnQtZ3VscC10YXNrcy9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiZXhhbXBsZS9zcmMvZXhhbXBsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSxJQUFNLFNBQ04sQ0FDRTtBQUNFLFdBQVMsSUFEWDtBQUVFLFVBQVEsT0FGVjtBQUdFLGVBQWEsNEZBSGY7QUFJRSxXQUFTLENBQ1A7QUFDRSxZQUFRLE9BRFY7QUFFRSxhQUFTLE9BRlg7QUFHRSxhQUFTLElBSFg7QUFJRSx3QkFBb0IsSUFKdEI7QUFLRSxvQkFBZ0IsSUFMbEI7QUFNRSwwQkFBc0IsSUFOeEI7QUFPRSx3QkFBb0IsQ0FQdEI7QUFRRSxtQkFBZSxDQUNiLDRFQURhLEVBRWIseURBRmE7QUFSakIsR0FETyxFQWNQO0FBQ0UsWUFBUSxZQURWO0FBRUUsYUFBUyxZQUZYO0FBR0UsYUFBUyxDQUNQLFlBRE8sRUFFUCxhQUZPLENBSFg7QUFPRSxhQUFTO0FBUFgsR0FkTztBQUpYLENBREYsRUE4QkU7QUFDRSxXQUFTLElBRFg7QUFFRSxVQUFRLEtBRlY7QUFHRSxTQUFPLGdEQUhUO0FBSUUsZUFBYTtBQUpmLENBOUJGLEVBb0NFO0FBQ0UsV0FBUyxLQURYO0FBRUUsVUFBUSxPQUZWO0FBR0UsU0FBTyx5RUFIVDtBQUlFLGVBQWE7QUFKZixDQXBDRixFQTBDRTtBQUNFLFdBQVMsS0FEWDtBQUVFLFVBQVEsT0FGVjtBQUdFLFlBQVUsR0FIWjtBQUlFLFdBQVMsR0FKWDtBQUtFLFNBQU8seUVBTFQ7QUFNRSxlQUFhO0FBTmYsQ0ExQ0YsQ0FEQTs7QUFxREEsSUFBTSxNQUFNLGdCQUFNLFdBQU4sQ0FBa0I7QUFBQTtBQUM1QixRQUQ0QixvQkFDbEI7QUFDUixXQUFRLHlEQUFVLFFBQVEsS0FBSyxLQUFMLENBQVcsTUFBN0IsR0FBUjtBQUNEO0FBSDJCLENBQWxCLENBQVo7O0FBTUEsbUJBQVMsTUFBVCxDQUFnQiw4QkFBQyxHQUFELElBQUssUUFBUSxNQUFiLEdBQWhCLEVBQXlDLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQUF6QyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IEJvcmVhbGlzICBmcm9tICdyZWFjdC1ib3JlYWxpcydcblxuXG5jb25zdCBhc3NldHMgPSAgXG5bXG4gIHtcbiAgICBcImZvY3VzXCI6IHRydWUsXG4gICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vc3RhY2tzLnN0YW5mb3JkLmVkdS9pbWFnZS9paWlmL2hnNjc2amI0OTY0JTI1MkYwMzgwXzc5Ni00NC9mdWxsLzM0MCwvMC9kZWZhdWx0LmpwZ1wiLCAgICAgIFxuICAgIFwiaXRlbXNcIjogW1xuICAgICAge1xuICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICBcImxhYmVsXCI6IFwiSW1hZ2VcIixcbiAgICAgICAgXCJmb2N1c1wiOiB0cnVlLFxuICAgICAgICBcImluY2x1ZGVfY29udHJvbHNcIjogdHJ1ZSxcbiAgICAgICAgXCJzZXF1ZW5jZU1vZGVcIjogdHJ1ZSxcbiAgICAgICAgXCJzaG93UmVmZXJlbmNlU3RyaXBcIjogdHJ1ZSxcbiAgICAgICAgXCJkZWZhdWx0Wm9vbUxldmVsXCI6IDAsXG4gICAgICAgIFwidGlsZVNvdXJjZXNcIjogW1xuICAgICAgICAgIFwiaHR0cHM6Ly9zdGFja3Muc3RhbmZvcmQuZWR1L2ltYWdlL2lpaWYvaGc2NzZqYjQ5NjQlMkYwMzgwXzc5Ni00NC9pbmZvLmpzb25cIixcbiAgICAgICAgICBcImh0dHBzOi8vaWRzLmxpYi5oYXJ2YXJkLmVkdS9pZHMvaWlpZi8yNTI4NjYxMC9pbmZvLmpzb25cIlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInR5cGVcIjogXCJ0cmFuc2NyaXB0XCIsXG4gICAgICAgIFwibGFiZWxcIjogXCJUcmFuc2NyaXB0XCIsXG4gICAgICAgIFwidGV4dHNcIjogW1xuICAgICAgICAgIFwiRmlyc3QgSXRlbVwiLFxuICAgICAgICAgIFwiU2Vjb25kIEl0ZW1cIlxuICAgICAgICBdLFxuICAgICAgICBcImZvY3VzXCI6IGZhbHNlXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJmb2N1c1wiOiB0cnVlLFxuICAgIFwidHlwZVwiOiBcInBkZlwiLFxuICAgIFwic3JjXCI6IFwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL21kbC1hc3NldHMvc3RwYXVsLnBkZlwiLFxuICAgIFwidGh1bWJuYWlsXCI6IFwiaHR0cDovL3JlZmxlY3Rpb25zLm1uZGlnaXRhbC5vcmcvdXRpbHMvZ2V0dGh1bWJuYWlsL2NvbGxlY3Rpb24vcDE2MDIyY29sbDM1L2lkLzBcIlxuICB9LFxuICB7XG4gICAgXCJmb2N1c1wiOiBmYWxzZSxcbiAgICBcInR5cGVcIjogXCJhdWRpb1wiLFxuICAgIFwic3JjXCI6IFwiaHR0cDovL3JlZmxlY3Rpb25zLm1uZGlnaXRhbC5vcmcvdXRpbHMvZ2V0c3RyZWFtL2NvbGxlY3Rpb24vbWhzL2lkLzE5MTlcIixcbiAgICBcInRodW1ibmFpbFwiOiBcImh0dHA6Ly9yZWZsZWN0aW9ucy5tbmRpZ2l0YWwub3JnL3V0aWxzL2dldHRodW1ibmFpbC9jb2xsZWN0aW9uL2pocy9pZC84ODVcIlxuICB9LFxuICB7XG4gICAgXCJmb2N1c1wiOiBmYWxzZSxcbiAgICBcInR5cGVcIjogXCJ2aWRlb1wiLFxuICAgIFwiaGVpZ2h0XCI6IDUwMCxcbiAgICBcIndpZHRoXCI6IDUwMCxcbiAgICBcInNyY1wiOiBcImh0dHA6Ly9yZWZsZWN0aW9ucy5tbmRpZ2l0YWwub3JnL3V0aWxzL2dldHN0cmVhbS9jb2xsZWN0aW9uL3N0Yy9pZC84NDcwXCIsXG4gICAgXCJ0aHVtYm5haWxcIjogXCJodHRwOi8vcmVmbGVjdGlvbnMubW5kaWdpdGFsLm9yZy91dGlscy9nZXR0aHVtYm5haWwvY29sbGVjdGlvbi9wMTYwMjJjb2xsMzgvaWQvMFwiXG4gIH1cbl1cblxuY29uc3QgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoPEJvcmVhbGlzIGFzc2V0cz17dGhpcy5wcm9wcy5hc3NldHN9IC8+KVxuICB9XG59KTtcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgYXNzZXRzPXthc3NldHN9IC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIl19
