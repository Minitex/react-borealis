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
  }],
  tocs: ["MLK", "A Statue"]
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9yZWFjdC1jb21wb25lbnQtZ3VscC10YXNrcy9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiZXhhbXBsZS9zcmMvZXhhbXBsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSxJQUFNLFFBQ04sQ0FDRTtBQUNFLFdBQVMsSUFEWDtBQUVFLFVBQVEsT0FGVjtBQUdFLGVBQWEsNEZBSGY7QUFJRSxXQUFTLENBQ1A7QUFDRSxZQUFRLE9BRFY7QUFFRSxhQUFTLE9BRlg7QUFHRSxhQUFTLElBSFg7QUFJRSx3QkFBb0IsSUFKdEI7QUFLRSxvQkFBZ0IsSUFMbEI7QUFNRSwwQkFBc0IsSUFOeEI7QUFPRSx3QkFBb0IsQ0FQdEI7QUFRRSxtQkFBZSxDQUNiLDRFQURhLEVBRWIseURBRmE7QUFSakIsR0FETyxFQWNQO0FBQ0UsWUFBUSxZQURWO0FBRUUsYUFBUyxZQUZYO0FBR0UsYUFBUyxDQUNQLDZCQURPLEVBRVAsK0JBRk8sQ0FIWDtBQU9FLGFBQVM7QUFQWCxHQWRPLENBSlg7QUE0QkUsUUFBTSxDQUNGLEtBREUsRUFFRixVQUZFO0FBNUJSLENBREYsRUFrQ0U7QUFDRSxXQUFTLElBRFg7QUFFRSxVQUFRLEtBRlY7QUFHRSxZQUFVLEdBSFo7QUFJRSxTQUFPLGdEQUpUO0FBS0UsZUFBYSxrRkFMZjtBQU1FLFdBQVMsQ0FDUDtBQUNFLFlBQVEsS0FEVjtBQUVFLGFBQVMsS0FGWDtBQUdFLGFBQVMsSUFIWDtBQUlFLFdBQU87QUFKVCxHQURPLEVBT1A7QUFDRSxZQUFRLFlBRFY7QUFFRSxhQUFTLFlBRlg7QUFHRSxZQUFRLHFCQUhWO0FBSUUsYUFBUztBQUpYLEdBUE87QUFOWCxDQWxDRixFQXVERTtBQUNFLFdBQVMsS0FEWDtBQUVFLFVBQVEsT0FGVjtBQUdFLFNBQU8seUVBSFQ7QUFJRSxlQUFhLDJFQUpmO0FBS0UsV0FBUyxDQUNQO0FBQ0UsWUFBUSxPQURWO0FBRUUsYUFBUyxPQUZYO0FBR0UsYUFBUyxJQUhYO0FBSUUsV0FBTztBQUpULEdBRE8sRUFPUDtBQUNFLFlBQVEsWUFEVjtBQUVFLGFBQVMsWUFGWDtBQUdFLFlBQVEsdUJBSFY7QUFJRSxhQUFTO0FBSlgsR0FQTztBQUxYLENBdkRGLEVBMkVFO0FBQ0UsV0FBUyxLQURYO0FBRUUsVUFBUSxPQUZWO0FBR0UsZUFBYSxrRkFIZjtBQUlFLFdBQVMsQ0FDUDtBQUNFLFlBQVEsT0FEVjtBQUVFLGFBQVMsT0FGWDtBQUdFLGNBQVUsR0FIWjtBQUlFLGFBQVMsR0FKWDtBQUtFLGFBQVMsSUFMWDtBQU1FLFdBQU87QUFOVCxHQURPLEVBU1A7QUFDRSxZQUFRLFlBRFY7QUFFRSxhQUFTLFlBRlg7QUFHRSxZQUFRLHVCQUhWO0FBSUUsYUFBUztBQUpYLEdBVE87QUFKWCxDQTNFRixDQURBOztBQW1HQSxtQkFBUyxNQUFULENBQWdCLHlEQUFVLE9BQU8sS0FBakIsR0FBaEIsRUFBNEMsU0FBUyxjQUFULENBQXdCLEtBQXhCLENBQTVDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgQm9yZWFsaXMgIGZyb20gJ3JlYWN0LWJvcmVhbGlzJ1xuXG5cbmNvbnN0IGl0ZW1zID0gIFxuW1xuICB7XG4gICAgXCJmb2N1c1wiOiB0cnVlLFxuICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL3N0YWNrcy5zdGFuZm9yZC5lZHUvaW1hZ2UvaWlpZi9oZzY3NmpiNDk2NCUyNTJGMDM4MF83OTYtNDQvZnVsbC8zNDAsLzAvZGVmYXVsdC5qcGdcIiwgICAgICBcbiAgICBcIml0ZW1zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgXCJsYWJlbFwiOiBcIkltYWdlXCIsXG4gICAgICAgIFwiZm9jdXNcIjogdHJ1ZSxcbiAgICAgICAgXCJpbmNsdWRlX2NvbnRyb2xzXCI6IHRydWUsXG4gICAgICAgIFwic2VxdWVuY2VNb2RlXCI6IHRydWUsXG4gICAgICAgIFwic2hvd1JlZmVyZW5jZVN0cmlwXCI6IHRydWUsXG4gICAgICAgIFwiZGVmYXVsdFpvb21MZXZlbFwiOiAwLFxuICAgICAgICBcInRpbGVTb3VyY2VzXCI6IFtcbiAgICAgICAgICBcImh0dHBzOi8vc3RhY2tzLnN0YW5mb3JkLmVkdS9pbWFnZS9paWlmL2hnNjc2amI0OTY0JTJGMDM4MF83OTYtNDQvaW5mby5qc29uXCIsXG4gICAgICAgICAgXCJodHRwczovL2lkcy5saWIuaGFydmFyZC5lZHUvaWRzL2lpaWYvMjUyODY2MTAvaW5mby5qc29uXCJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJ0eXBlXCI6IFwidHJhbnNjcmlwdFwiLFxuICAgICAgICBcImxhYmVsXCI6IFwiVHJhbnNjcmlwdFwiLFxuICAgICAgICBcInRleHRzXCI6IFtcbiAgICAgICAgICBcIkZpcnN0IEltYWdlIEl0ZW0gVHJhbnNjcmlwdFwiLFxuICAgICAgICAgIFwiU2Vjb25kIEltYWdlIEl0ZW0gIFRyYW5zY3JpcHRcIlxuICAgICAgICBdLFxuICAgICAgICBcImZvY3VzXCI6IGZhbHNlXG4gICAgICB9XG4gICAgXSxcbiAgICB0b2NzOiBbXG4gICAgICAgIFwiTUxLXCIsXG4gICAgICAgIFwiQSBTdGF0dWVcIlxuICAgICAgXVxuICB9LFxuICB7XG4gICAgXCJmb2N1c1wiOiB0cnVlLFxuICAgIFwidHlwZVwiOiBcInBkZlwiLFxuICAgIFwiaGVpZ2h0XCI6IDgwMCxcbiAgICBcInNyY1wiOiBcImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9tZGwtYXNzZXRzL3N0cGF1bC5wZGZcIixcbiAgICBcInRodW1ibmFpbFwiOiBcImh0dHA6Ly9yZWZsZWN0aW9ucy5tbmRpZ2l0YWwub3JnL3V0aWxzL2dldHRodW1ibmFpbC9jb2xsZWN0aW9uL3AxNjAyMmNvbGwzNS9pZC8wXCIsXG4gICAgXCJpdGVtc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwidHlwZVwiOiBcInBkZlwiLFxuICAgICAgICBcImxhYmVsXCI6IFwiUERGXCIsXG4gICAgICAgIFwiZm9jdXNcIjogdHJ1ZSxcbiAgICAgICAgXCJzcmNcIjogXCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vbWRsLWFzc2V0cy9zdHBhdWwucGRmXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInR5cGVcIjogXCJ0cmFuc2NyaXB0XCIsXG4gICAgICAgIFwibGFiZWxcIjogXCJUcmFuc2NyaXB0XCIsXG4gICAgICAgIFwidGV4dFwiOiBcIlBERiBUcmFuc2NyaXB0IEhlcmVcIixcbiAgICAgICAgXCJmb2N1c1wiOiBmYWxzZVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiZm9jdXNcIjogZmFsc2UsXG4gICAgXCJ0eXBlXCI6IFwiYXVkaW9cIixcbiAgICBcInNyY1wiOiBcImh0dHA6Ly9yZWZsZWN0aW9ucy5tbmRpZ2l0YWwub3JnL3V0aWxzL2dldHN0cmVhbS9jb2xsZWN0aW9uL21ocy9pZC8xOTE5XCIsXG4gICAgXCJ0aHVtYm5haWxcIjogXCJodHRwOi8vcmVmbGVjdGlvbnMubW5kaWdpdGFsLm9yZy91dGlscy9nZXR0aHVtYm5haWwvY29sbGVjdGlvbi9qaHMvaWQvODg1XCIsXG4gICAgXCJpdGVtc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwidHlwZVwiOiBcImF1ZGlvXCIsXG4gICAgICAgIFwibGFiZWxcIjogXCJBdWRpb1wiLFxuICAgICAgICBcImZvY3VzXCI6IHRydWUsXG4gICAgICAgIFwic3JjXCI6IFwiaHR0cDovL3JlZmxlY3Rpb25zLm1uZGlnaXRhbC5vcmcvdXRpbHMvZ2V0c3RyZWFtL2NvbGxlY3Rpb24vbWhzL2lkLzE5MTlcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJ0eXBlXCI6IFwidHJhbnNjcmlwdFwiLFxuICAgICAgICBcImxhYmVsXCI6IFwiVHJhbnNjcmlwdFwiLFxuICAgICAgICBcInRleHRcIjogXCJBdWRpbyBUcmFuc2NyaXB0IEhlcmVcIixcbiAgICAgICAgXCJmb2N1c1wiOiBmYWxzZVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiZm9jdXNcIjogZmFsc2UsXG4gICAgXCJ0eXBlXCI6IFwidmlkZW9cIixcbiAgICBcInRodW1ibmFpbFwiOiBcImh0dHA6Ly9yZWZsZWN0aW9ucy5tbmRpZ2l0YWwub3JnL3V0aWxzL2dldHRodW1ibmFpbC9jb2xsZWN0aW9uL3AxNjAyMmNvbGwzOC9pZC8wXCIsXG4gICAgXCJpdGVtc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwidHlwZVwiOiBcInZpZGVvXCIsXG4gICAgICAgIFwibGFiZWxcIjogXCJWaWRlb1wiLFxuICAgICAgICBcImhlaWdodFwiOiA1MDAsXG4gICAgICAgIFwid2lkdGhcIjogNTAwLFxuICAgICAgICBcImZvY3VzXCI6IHRydWUsXG4gICAgICAgIFwic3JjXCI6IFwiaHR0cDovL3JlZmxlY3Rpb25zLm1uZGlnaXRhbC5vcmcvdXRpbHMvZ2V0c3RyZWFtL2NvbGxlY3Rpb24vc3RjL2lkLzg0NzBcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJ0eXBlXCI6IFwidHJhbnNjcmlwdFwiLFxuICAgICAgICBcImxhYmVsXCI6IFwiVHJhbnNjcmlwdFwiLFxuICAgICAgICBcInRleHRcIjogXCJWaWRlbyBUcmFuc2NyaXB0IEhlcmVcIixcbiAgICAgICAgXCJmb2N1c1wiOiBmYWxzZVxuICAgICAgfVxuICAgIF0gICAgXG4gIH1cbl1cblxuUmVhY3RET00ucmVuZGVyKDxCb3JlYWxpcyBpdGVtcz17aXRlbXN9IC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIl19
