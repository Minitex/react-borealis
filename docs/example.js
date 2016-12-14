require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactBorealis = require('react-borealis');

var _reactBorealis2 = _interopRequireDefault(_reactBorealis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = [{
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
    "texts": ["First Image Item Transcript", "Second Image Item  Transcript"],
    "focus": false
  }]
}, {
  "focus": true,
  "type": "pdf",
  "height": 800,
  "src": "https://s3.amazonaws.com/mdl-assets/stpaul.pdf",
  "thumbnail": "http://reflections.mndigital.org/utils/getthumbnail/collection/p16022coll35/id/0",
  "items": [{
    "type": "pdf",
    "label": "PDF",
    "focus": true,
    "src": "https://s3.amazonaws.com/mdl-assets/stpaul.pdf"
  }, {
    "type": "transcript",
    "label": "Transcript",
    "text": "PDF Transcript Here",
    "focus": false
  }]
}, {
  "focus": false,
  "type": "audio",
  "src": "http://reflections.mndigital.org/utils/getstream/collection/mhs/id/1919",
  "thumbnail": "http://reflections.mndigital.org/utils/getthumbnail/collection/jhs/id/885",
  "items": [{
    "type": "audio",
    "label": "Audio",
    "focus": true,
    "src": "http://reflections.mndigital.org/utils/getstream/collection/mhs/id/1919"
  }, {
    "type": "transcript",
    "label": "Transcript",
    "text": "Audio Transcript Here",
    "focus": false
  }]
}, {
  "focus": false,
  "type": "video",
  "thumbnail": "http://reflections.mndigital.org/utils/getthumbnail/collection/p16022coll38/id/0",
  "items": [{
    "type": "video",
    "label": "Video",
    "height": 500,
    "width": 500,
    "focus": true,
    "src": "http://reflections.mndigital.org/utils/getstream/collection/stc/id/8470"
  }, {
    "type": "transcript",
    "label": "Transcript",
    "text": "Video Transcript Here",
    "focus": false
  }]
}];

_reactDom2.default.render(_react2.default.createElement(_reactBorealis2.default, { items: items }), document.getElementById('app'));

},{"react":undefined,"react-borealis":undefined,"react-dom":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9yZWFjdC1jb21wb25lbnQtZ3VscC10YXNrcy9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiZXhhbXBsZS9zcmMvZXhhbXBsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSxJQUFNLFFBQ04sQ0FDRTtBQUNFLFdBQVMsSUFEWDtBQUVFLFVBQVEsT0FGVjtBQUdFLGVBQWEsNEZBSGY7QUFJRSxXQUFTLENBQ1A7QUFDRSxZQUFRLE9BRFY7QUFFRSxhQUFTLE9BRlg7QUFHRSxhQUFTLElBSFg7QUFJRSx3QkFBb0IsSUFKdEI7QUFLRSxvQkFBZ0IsSUFMbEI7QUFNRSwwQkFBc0IsSUFOeEI7QUFPRSx3QkFBb0IsQ0FQdEI7QUFRRSxtQkFBZSxDQUNiLDRFQURhLEVBRWIseURBRmE7QUFSakIsR0FETyxFQWNQO0FBQ0UsWUFBUSxZQURWO0FBRUUsYUFBUyxZQUZYO0FBR0UsYUFBUyxDQUNQLDZCQURPLEVBRVAsK0JBRk8sQ0FIWDtBQU9FLGFBQVM7QUFQWCxHQWRPO0FBSlgsQ0FERixFQThCRTtBQUNFLFdBQVMsSUFEWDtBQUVFLFVBQVEsS0FGVjtBQUdFLFlBQVUsR0FIWjtBQUlFLFNBQU8sZ0RBSlQ7QUFLRSxlQUFhLGtGQUxmO0FBTUUsV0FBUyxDQUNQO0FBQ0UsWUFBUSxLQURWO0FBRUUsYUFBUyxLQUZYO0FBR0UsYUFBUyxJQUhYO0FBSUUsV0FBTztBQUpULEdBRE8sRUFPUDtBQUNFLFlBQVEsWUFEVjtBQUVFLGFBQVMsWUFGWDtBQUdFLFlBQVEscUJBSFY7QUFJRSxhQUFTO0FBSlgsR0FQTztBQU5YLENBOUJGLEVBbURFO0FBQ0UsV0FBUyxLQURYO0FBRUUsVUFBUSxPQUZWO0FBR0UsU0FBTyx5RUFIVDtBQUlFLGVBQWEsMkVBSmY7QUFLRSxXQUFTLENBQ1A7QUFDRSxZQUFRLE9BRFY7QUFFRSxhQUFTLE9BRlg7QUFHRSxhQUFTLElBSFg7QUFJRSxXQUFPO0FBSlQsR0FETyxFQU9QO0FBQ0UsWUFBUSxZQURWO0FBRUUsYUFBUyxZQUZYO0FBR0UsWUFBUSx1QkFIVjtBQUlFLGFBQVM7QUFKWCxHQVBPO0FBTFgsQ0FuREYsRUF1RUU7QUFDRSxXQUFTLEtBRFg7QUFFRSxVQUFRLE9BRlY7QUFHRSxlQUFhLGtGQUhmO0FBSUUsV0FBUyxDQUNQO0FBQ0UsWUFBUSxPQURWO0FBRUUsYUFBUyxPQUZYO0FBR0UsY0FBVSxHQUhaO0FBSUUsYUFBUyxHQUpYO0FBS0UsYUFBUyxJQUxYO0FBTUUsV0FBTztBQU5ULEdBRE8sRUFTUDtBQUNFLFlBQVEsWUFEVjtBQUVFLGFBQVMsWUFGWDtBQUdFLFlBQVEsdUJBSFY7QUFJRSxhQUFTO0FBSlgsR0FUTztBQUpYLENBdkVGLENBREE7O0FBK0ZBLG1CQUFTLE1BQVQsQ0FBZ0IseURBQVUsT0FBTyxLQUFqQixHQUFoQixFQUE0QyxTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBNUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBCb3JlYWxpcyAgZnJvbSAncmVhY3QtYm9yZWFsaXMnXG5cblxuY29uc3QgaXRlbXMgPSAgXG5bXG4gIHtcbiAgICBcImZvY3VzXCI6IHRydWUsXG4gICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vc3RhY2tzLnN0YW5mb3JkLmVkdS9pbWFnZS9paWlmL2hnNjc2amI0OTY0JTI1MkYwMzgwXzc5Ni00NC9mdWxsLzM0MCwvMC9kZWZhdWx0LmpwZ1wiLCAgICAgIFxuICAgIFwiaXRlbXNcIjogW1xuICAgICAge1xuICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICBcImxhYmVsXCI6IFwiSW1hZ2VcIixcbiAgICAgICAgXCJmb2N1c1wiOiB0cnVlLFxuICAgICAgICBcImluY2x1ZGVfY29udHJvbHNcIjogdHJ1ZSxcbiAgICAgICAgXCJzZXF1ZW5jZU1vZGVcIjogdHJ1ZSxcbiAgICAgICAgXCJzaG93UmVmZXJlbmNlU3RyaXBcIjogdHJ1ZSxcbiAgICAgICAgXCJkZWZhdWx0Wm9vbUxldmVsXCI6IDAsXG4gICAgICAgIFwidGlsZVNvdXJjZXNcIjogW1xuICAgICAgICAgIFwiaHR0cHM6Ly9zdGFja3Muc3RhbmZvcmQuZWR1L2ltYWdlL2lpaWYvaGc2NzZqYjQ5NjQlMkYwMzgwXzc5Ni00NC9pbmZvLmpzb25cIixcbiAgICAgICAgICBcImh0dHBzOi8vaWRzLmxpYi5oYXJ2YXJkLmVkdS9pZHMvaWlpZi8yNTI4NjYxMC9pbmZvLmpzb25cIlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInR5cGVcIjogXCJ0cmFuc2NyaXB0XCIsXG4gICAgICAgIFwibGFiZWxcIjogXCJUcmFuc2NyaXB0XCIsXG4gICAgICAgIFwidGV4dHNcIjogW1xuICAgICAgICAgIFwiRmlyc3QgSW1hZ2UgSXRlbSBUcmFuc2NyaXB0XCIsXG4gICAgICAgICAgXCJTZWNvbmQgSW1hZ2UgSXRlbSAgVHJhbnNjcmlwdFwiXG4gICAgICAgIF0sXG4gICAgICAgIFwiZm9jdXNcIjogZmFsc2VcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcImZvY3VzXCI6IHRydWUsXG4gICAgXCJ0eXBlXCI6IFwicGRmXCIsXG4gICAgXCJoZWlnaHRcIjogODAwLFxuICAgIFwic3JjXCI6IFwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL21kbC1hc3NldHMvc3RwYXVsLnBkZlwiLFxuICAgIFwidGh1bWJuYWlsXCI6IFwiaHR0cDovL3JlZmxlY3Rpb25zLm1uZGlnaXRhbC5vcmcvdXRpbHMvZ2V0dGh1bWJuYWlsL2NvbGxlY3Rpb24vcDE2MDIyY29sbDM1L2lkLzBcIixcbiAgICBcIml0ZW1zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJ0eXBlXCI6IFwicGRmXCIsXG4gICAgICAgIFwibGFiZWxcIjogXCJQREZcIixcbiAgICAgICAgXCJmb2N1c1wiOiB0cnVlLFxuICAgICAgICBcInNyY1wiOiBcImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9tZGwtYXNzZXRzL3N0cGF1bC5wZGZcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwidHlwZVwiOiBcInRyYW5zY3JpcHRcIixcbiAgICAgICAgXCJsYWJlbFwiOiBcIlRyYW5zY3JpcHRcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiUERGIFRyYW5zY3JpcHQgSGVyZVwiLFxuICAgICAgICBcImZvY3VzXCI6IGZhbHNlXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJmb2N1c1wiOiBmYWxzZSxcbiAgICBcInR5cGVcIjogXCJhdWRpb1wiLFxuICAgIFwic3JjXCI6IFwiaHR0cDovL3JlZmxlY3Rpb25zLm1uZGlnaXRhbC5vcmcvdXRpbHMvZ2V0c3RyZWFtL2NvbGxlY3Rpb24vbWhzL2lkLzE5MTlcIixcbiAgICBcInRodW1ibmFpbFwiOiBcImh0dHA6Ly9yZWZsZWN0aW9ucy5tbmRpZ2l0YWwub3JnL3V0aWxzL2dldHRodW1ibmFpbC9jb2xsZWN0aW9uL2pocy9pZC84ODVcIixcbiAgICBcIml0ZW1zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiYXVkaW9cIixcbiAgICAgICAgXCJsYWJlbFwiOiBcIkF1ZGlvXCIsXG4gICAgICAgIFwiZm9jdXNcIjogdHJ1ZSxcbiAgICAgICAgXCJzcmNcIjogXCJodHRwOi8vcmVmbGVjdGlvbnMubW5kaWdpdGFsLm9yZy91dGlscy9nZXRzdHJlYW0vY29sbGVjdGlvbi9taHMvaWQvMTkxOVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInR5cGVcIjogXCJ0cmFuc2NyaXB0XCIsXG4gICAgICAgIFwibGFiZWxcIjogXCJUcmFuc2NyaXB0XCIsXG4gICAgICAgIFwidGV4dFwiOiBcIkF1ZGlvIFRyYW5zY3JpcHQgSGVyZVwiLFxuICAgICAgICBcImZvY3VzXCI6IGZhbHNlXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJmb2N1c1wiOiBmYWxzZSxcbiAgICBcInR5cGVcIjogXCJ2aWRlb1wiLFxuICAgIFwidGh1bWJuYWlsXCI6IFwiaHR0cDovL3JlZmxlY3Rpb25zLm1uZGlnaXRhbC5vcmcvdXRpbHMvZ2V0dGh1bWJuYWlsL2NvbGxlY3Rpb24vcDE2MDIyY29sbDM4L2lkLzBcIixcbiAgICBcIml0ZW1zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJ0eXBlXCI6IFwidmlkZW9cIixcbiAgICAgICAgXCJsYWJlbFwiOiBcIlZpZGVvXCIsXG4gICAgICAgIFwiaGVpZ2h0XCI6IDUwMCxcbiAgICAgICAgXCJ3aWR0aFwiOiA1MDAsXG4gICAgICAgIFwiZm9jdXNcIjogdHJ1ZSxcbiAgICAgICAgXCJzcmNcIjogXCJodHRwOi8vcmVmbGVjdGlvbnMubW5kaWdpdGFsLm9yZy91dGlscy9nZXRzdHJlYW0vY29sbGVjdGlvbi9zdGMvaWQvODQ3MFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInR5cGVcIjogXCJ0cmFuc2NyaXB0XCIsXG4gICAgICAgIFwibGFiZWxcIjogXCJUcmFuc2NyaXB0XCIsXG4gICAgICAgIFwidGV4dFwiOiBcIlZpZGVvIFRyYW5zY3JpcHQgSGVyZVwiLFxuICAgICAgICBcImZvY3VzXCI6IGZhbHNlXG4gICAgICB9XG4gICAgXSAgICBcbiAgfVxuXVxuXG5SZWFjdERPTS5yZW5kZXIoPEJvcmVhbGlzIGl0ZW1zPXtpdGVtc30gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iXX0=
