(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("react-borealis", [], factory);
	else if(typeof exports === 'object')
		exports["react-borealis"] = factory();
	else
		root["react-borealis"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactActiveItem = __webpack_require__(32);
	
	var _reactActiveItem2 = _interopRequireDefault(_reactActiveItem);
	
	var _reactOpenseadragon = __webpack_require__(34);
	
	var _reactOpenseadragon2 = _interopRequireDefault(_reactOpenseadragon);
	
	var _borealisTray = __webpack_require__(35);
	
	var _borealisTray2 = _interopRequireDefault(_borealisTray);
	
	var _borealisPdf = __webpack_require__(37);
	
	var _borealisPdf2 = _interopRequireDefault(_borealisPdf);
	
	var _borealisAudio = __webpack_require__(40);
	
	var _borealisAudio2 = _interopRequireDefault(_borealisAudio);
	
	var _borealisVideo = __webpack_require__(42);
	
	var _borealisVideo2 = _interopRequireDefault(_borealisVideo);
	
	__webpack_require__(44);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Borealis = function (_React$Component) {
	  _inherits(Borealis, _React$Component);
	
	  function Borealis(props) {
	    _classCallCheck(this, Borealis);
	
	    var _this = _possibleConstructorReturn(this, (Borealis.__proto__ || Object.getPrototypeOf(Borealis)).call(this, props));
	
	    _this._player = _this._player.bind(_this);
	    return _this;
	  }
	
	  _createClass(Borealis, [{
	    key: '_player',
	    value: function _player() {
	      var item = this.props.getActiveItem();
	      switch (item.type) {
	        case 'pdf':
	          return _react2.default.createElement(_borealisPdf2.default, item);
	          break;
	        case 'audio':
	          return _react2.default.createElement(_borealisAudio2.default, item);
	          break;
	        case 'video':
	          return _react2.default.createElement(_borealisVideo2.default, item);
	          break;
	        case 'image':
	          return _react2.default.createElement(_reactOpenseadragon2.default, item);
	          break;
	        default:
	          return _react2.default.createElement(
	            'div',
	            null,
	            'No Viewer Avaialable for type: "',
	            item.type,
	            '"'
	          );
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { id: 'react-borealis', className: 'react-borealis col-md-12' },
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(_borealisTray2.default, this.props)
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          this._player()
	        )
	      );
	    }
	  }]);
	
	  return Borealis;
	}(_react2.default.Component);
	
	var propTypes = {
	  items: _react2.default.PropTypes.array.isRequired
	};
	
	Borealis.propTypes = propTypes;
	
	exports.default = (0, _reactActiveItem2.default)(Borealis);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(2);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(4);
	
	var ReactChildren = __webpack_require__(5);
	var ReactComponent = __webpack_require__(18);
	var ReactPureComponent = __webpack_require__(21);
	var ReactClass = __webpack_require__(22);
	var ReactDOMFactories = __webpack_require__(24);
	var ReactElement = __webpack_require__(9);
	var ReactPropTypes = __webpack_require__(29);
	var ReactVersion = __webpack_require__(30);
	
	var onlyChild = __webpack_require__(31);
	var warning = __webpack_require__(11);
	
	var createElement = ReactElement.createElement;
	var createFactory = ReactElement.createFactory;
	var cloneElement = ReactElement.cloneElement;
	
	if (process.env.NODE_ENV !== 'production') {
	  var ReactElementValidator = __webpack_require__(25);
	  createElement = ReactElementValidator.createElement;
	  createFactory = ReactElementValidator.createFactory;
	  cloneElement = ReactElementValidator.cloneElement;
	}
	
	var __spread = _assign;
	
	if (process.env.NODE_ENV !== 'production') {
	  var warned = false;
	  __spread = function () {
	    process.env.NODE_ENV !== 'production' ? warning(warned, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.') : void 0;
	    warned = true;
	    return _assign.apply(null, arguments);
	  };
	}
	
	var React = {
	
	  // Modern
	
	  Children: {
	    map: ReactChildren.map,
	    forEach: ReactChildren.forEach,
	    count: ReactChildren.count,
	    toArray: ReactChildren.toArray,
	    only: onlyChild
	  },
	
	  Component: ReactComponent,
	  PureComponent: ReactPureComponent,
	
	  createElement: createElement,
	  cloneElement: cloneElement,
	  isValidElement: ReactElement.isValidElement,
	
	  // Classic
	
	  PropTypes: ReactPropTypes,
	  createClass: ReactClass.createClass,
	  createFactory: createFactory,
	  createMixin: function (mixin) {
	    // Currently a noop. Will be used to validate and trace mixins.
	    return mixin;
	  },
	
	  // This looks DOM specific but these are actually isomorphic helpers
	  // since they are just generating DOM strings.
	  DOM: ReactDOMFactories,
	
	  version: ReactVersion,
	
	  // Deprecated hook for JSX spread, don't use this for anything.
	  __spread: __spread
	};
	
	module.exports = React;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var PooledClass = __webpack_require__(6);
	var ReactElement = __webpack_require__(9);
	
	var emptyFunction = __webpack_require__(12);
	var traverseAllChildren = __webpack_require__(15);
	
	var twoArgumentPooler = PooledClass.twoArgumentPooler;
	var fourArgumentPooler = PooledClass.fourArgumentPooler;
	
	var userProvidedKeyEscapeRegex = /\/+/g;
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
	}
	
	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * traversal. Allows avoiding binding callbacks.
	 *
	 * @constructor ForEachBookKeeping
	 * @param {!function} forEachFunction Function to perform traversal with.
	 * @param {?*} forEachContext Context to perform context with.
	 */
	function ForEachBookKeeping(forEachFunction, forEachContext) {
	  this.func = forEachFunction;
	  this.context = forEachContext;
	  this.count = 0;
	}
	ForEachBookKeeping.prototype.destructor = function () {
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);
	
	function forEachSingleChild(bookKeeping, child, name) {
	  var func = bookKeeping.func,
	      context = bookKeeping.context;
	
	  func.call(context, child, bookKeeping.count++);
	}
	
	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }
	  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  ForEachBookKeeping.release(traverseContext);
	}
	
	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * mapping. Allows avoiding binding callbacks.
	 *
	 * @constructor MapBookKeeping
	 * @param {!*} mapResult Object containing the ordered map of results.
	 * @param {!function} mapFunction Function to perform mapping with.
	 * @param {?*} mapContext Context to perform mapping with.
	 */
	function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
	  this.result = mapResult;
	  this.keyPrefix = keyPrefix;
	  this.func = mapFunction;
	  this.context = mapContext;
	  this.count = 0;
	}
	MapBookKeeping.prototype.destructor = function () {
	  this.result = null;
	  this.keyPrefix = null;
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);
	
	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result,
	      keyPrefix = bookKeeping.keyPrefix,
	      func = bookKeeping.func,
	      context = bookKeeping.context;
	
	
	  var mappedChild = func.call(context, child, bookKeeping.count++);
	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
	  } else if (mappedChild != null) {
	    if (ReactElement.isValidElement(mappedChild)) {
	      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
	      // Keep both the (mapped) and old keys if they differ, just as
	      // traverseAllChildren used to do for objects as children
	      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
	    }
	    result.push(mappedChild);
	  }
	}
	
	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
	  var escapedPrefix = '';
	  if (prefix != null) {
	    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
	  }
	  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  MapBookKeeping.release(traverseContext);
	}
	
	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
	  return result;
	}
	
	function forEachSingleChildDummy(traverseContext, child, name) {
	  return null;
	}
	
	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children, context) {
	  return traverseAllChildren(children, forEachSingleChildDummy, null);
	}
	
	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
	 */
	function toArray(children) {
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
	  return result;
	}
	
	var ReactChildren = {
	  forEach: forEachChildren,
	  map: mapChildren,
	  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
	  count: countChildren,
	  toArray: toArray
	};
	
	module.exports = ReactChildren;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var _prodInvariant = __webpack_require__(7);
	
	var invariant = __webpack_require__(8);
	
	/**
	 * Static poolers. Several custom versions for each potential number of
	 * arguments. A completely generic pooler is easy to implement, but would
	 * require accessing the `arguments` object. In each of these, `this` refers to
	 * the Class itself, not an instance. If any others are needed, simply add them
	 * here, or in their own files.
	 */
	var oneArgumentPooler = function (copyFieldsFrom) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, copyFieldsFrom);
	    return instance;
	  } else {
	    return new Klass(copyFieldsFrom);
	  }
	};
	
	var twoArgumentPooler = function (a1, a2) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2);
	    return instance;
	  } else {
	    return new Klass(a1, a2);
	  }
	};
	
	var threeArgumentPooler = function (a1, a2, a3) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3);
	  }
	};
	
	var fourArgumentPooler = function (a1, a2, a3, a4) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4);
	  }
	};
	
	var standardReleaser = function (instance) {
	  var Klass = this;
	  !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
	  instance.destructor();
	  if (Klass.instancePool.length < Klass.poolSize) {
	    Klass.instancePool.push(instance);
	  }
	};
	
	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;
	
	/**
	 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
	 * itself (statically) not adding any prototypical fields. Any CopyConstructor
	 * you give this may have a `poolSize` property, and will look for a
	 * prototypical `destructor` on instances.
	 *
	 * @param {Function} CopyConstructor Constructor that can be used to reset.
	 * @param {Function} pooler Customizable pooler.
	 */
	var addPoolingTo = function (CopyConstructor, pooler) {
	  // Casting as any so that flow ignores the actual implementation and trusts
	  // it to match the type we declared
	  var NewKlass = CopyConstructor;
	  NewKlass.instancePool = [];
	  NewKlass.getPooled = pooler || DEFAULT_POOLER;
	  if (!NewKlass.poolSize) {
	    NewKlass.poolSize = DEFAULT_POOL_SIZE;
	  }
	  NewKlass.release = standardReleaser;
	  return NewKlass;
	};
	
	var PooledClass = {
	  addPoolingTo: addPoolingTo,
	  oneArgumentPooler: oneArgumentPooler,
	  twoArgumentPooler: twoArgumentPooler,
	  threeArgumentPooler: threeArgumentPooler,
	  fourArgumentPooler: fourArgumentPooler
	};
	
	module.exports = PooledClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';
	
	/**
	 * WARNING: DO NOT manually require this module.
	 * This is a replacement for `invariant(...)` used by the error code system
	 * and will _only_ be required by the corresponding babel pass.
	 * It always throws.
	 */
	
	function reactProdInvariant(code) {
	  var argCount = arguments.length - 1;
	
	  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;
	
	  for (var argIdx = 0; argIdx < argCount; argIdx++) {
	    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
	  }
	
	  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';
	
	  var error = new Error(message);
	  error.name = 'Invariant Violation';
	  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame
	
	  throw error;
	}
	
	module.exports = reactProdInvariant;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var validateFormat = function validateFormat(format) {};
	
	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}
	
	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}
	
	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(4);
	
	var ReactCurrentOwner = __webpack_require__(10);
	
	var warning = __webpack_require__(11);
	var canDefineProperty = __webpack_require__(13);
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	var REACT_ELEMENT_TYPE = __webpack_require__(14);
	
	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	
	var specialPropKeyWarningShown, specialPropRefWarningShown;
	
	function hasValidRef(config) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.ref !== undefined;
	}
	
	function hasValidKey(config) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.key !== undefined;
	}
	
	function defineKeyPropWarningGetter(props, displayName) {
	  var warnAboutAccessingKey = function () {
	    if (!specialPropKeyWarningShown) {
	      specialPropKeyWarningShown = true;
	      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingKey.isReactWarning = true;
	  Object.defineProperty(props, 'key', {
	    get: warnAboutAccessingKey,
	    configurable: true
	  });
	}
	
	function defineRefPropWarningGetter(props, displayName) {
	  var warnAboutAccessingRef = function () {
	    if (!specialPropRefWarningShown) {
	      specialPropRefWarningShown = true;
	      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingRef.isReactWarning = true;
	  Object.defineProperty(props, 'ref', {
	    get: warnAboutAccessingRef,
	    configurable: true
	  });
	}
	
	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, no instanceof check
	 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @param {*} owner
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allow us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };
	
	  if (process.env.NODE_ENV !== 'production') {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {};
	
	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    if (canDefineProperty) {
	      Object.defineProperty(element._store, 'validated', {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: false
	      });
	      // self and source are DEV only properties.
	      Object.defineProperty(element, '_self', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: self
	      });
	      // Two elements created in two different places should be considered
	      // equal for testing purposes and therefore we hide it from enumeration.
	      Object.defineProperty(element, '_source', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: source
	      });
	    } else {
	      element._store.validated = false;
	      element._self = self;
	      element._source = source;
	    }
	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }
	
	  return element;
	};
	
	/**
	 * Create and return a new ReactElement of the given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
	 */
	ReactElement.createElement = function (type, config, children) {
	  var propName;
	
	  // Reserved names are extracted
	  var props = {};
	
	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;
	
	  if (config != null) {
	    if (hasValidRef(config)) {
	      ref = config.ref;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }
	
	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }
	
	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    if (process.env.NODE_ENV !== 'production') {
	      if (Object.freeze) {
	        Object.freeze(childArray);
	      }
	    }
	    props.children = childArray;
	  }
	
	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    if (key || ref) {
	      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
	        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
	        if (key) {
	          defineKeyPropWarningGetter(props, displayName);
	        }
	        if (ref) {
	          defineRefPropWarningGetter(props, displayName);
	        }
	      }
	    }
	  }
	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	};
	
	/**
	 * Return a function that produces ReactElements of a given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
	 */
	ReactElement.createFactory = function (type) {
	  var factory = ReactElement.createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  // Legacy hook TODO: Warn if this is accessed
	  factory.type = type;
	  return factory;
	};
	
	ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
	
	  return newElement;
	};
	
	/**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
	 */
	ReactElement.cloneElement = function (element, config, children) {
	  var propName;
	
	  // Original props are copied
	  var props = _assign({}, element.props);
	
	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;
	  // Self is preserved since the owner is preserved.
	  var self = element._self;
	  // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.
	  var source = element._source;
	
	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;
	
	  if (config != null) {
	    if (hasValidRef(config)) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }
	
	    // Remaining properties override existing props
	    var defaultProps;
	    if (element.type && element.type.defaultProps) {
	      defaultProps = element.type.defaultProps;
	    }
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        if (config[propName] === undefined && defaultProps !== undefined) {
	          // Resolve default props
	          props[propName] = defaultProps[propName];
	        } else {
	          props[propName] = config[propName];
	        }
	      }
	    }
	  }
	
	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }
	
	  return ReactElement(element.type, key, ref, self, source, owner, props);
	};
	
	/**
	 * Verifies the object is a ReactElement.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	ReactElement.isValidElement = function (object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	};
	
	module.exports = ReactElement;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */
	var ReactCurrentOwner = {
	
	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null
	
	};
	
	module.exports = ReactCurrentOwner;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(12);
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = emptyFunction;
	
	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var printWarning = function printWarning(format) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    };
	
	    warning = function warning(condition, format) {
	      if (format === undefined) {
	        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	      }
	
	      if (format.indexOf('Failed Composite propType: ') === 0) {
	        return; // Ignore CompositeComponent proptype check.
	      }
	
	      if (!condition) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }
	
	        printWarning.apply(undefined, [format].concat(args));
	      }
	    };
	  })();
	}
	
	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var canDefineProperty = false;
	if (process.env.NODE_ENV !== 'production') {
	  try {
	    // $FlowFixMe https://github.com/facebook/flow/issues/285
	    Object.defineProperty({}, 'x', { get: function () {} });
	    canDefineProperty = true;
	  } catch (x) {
	    // IE will fail on defineProperty
	  }
	}
	
	module.exports = canDefineProperty;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 14 */
/***/ function(module, exports) {

	/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	// The Symbol used to tag the ReactElement type. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	
	var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;
	
	module.exports = REACT_ELEMENT_TYPE;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var _prodInvariant = __webpack_require__(7);
	
	var ReactCurrentOwner = __webpack_require__(10);
	var REACT_ELEMENT_TYPE = __webpack_require__(14);
	
	var getIteratorFn = __webpack_require__(16);
	var invariant = __webpack_require__(8);
	var KeyEscapeUtils = __webpack_require__(17);
	var warning = __webpack_require__(11);
	
	var SEPARATOR = '.';
	var SUBSEPARATOR = ':';
	
	/**
	 * This is inlined from ReactElement since this file is shared between
	 * isomorphic and renderers. We could extract this to a
	 *
	 */
	
	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */
	
	var didWarnAboutMaps = false;
	
	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  // Do some typechecking here since we call this blindly. We want to ensure
	  // that we don't block potential future ES APIs.
	  if (component && typeof component === 'object' && component.key != null) {
	    // Explicit key
	    return KeyEscapeUtils.escape(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}
	
	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
	  var type = typeof children;
	
	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }
	
	  if (children === null || type === 'string' || type === 'number' ||
	  // The following is inlined from ReactElement. This means we can optimize
	  // some checks. React Fiber also inlines this logic for similar purposes.
	  type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
	    callback(traverseContext, children,
	    // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows.
	    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
	    return 1;
	  }
	
	  var child;
	  var nextName;
	  var subtreeCount = 0; // Count of children found in the current subtree.
	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
	
	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getComponentKey(child, i);
	      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);
	    if (iteratorFn) {
	      var iterator = iteratorFn.call(children);
	      var step;
	      if (iteratorFn !== children.entries) {
	        var ii = 0;
	        while (!(step = iterator.next()).done) {
	          child = step.value;
	          nextName = nextNamePrefix + getComponentKey(child, ii++);
	          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	        }
	      } else {
	        if (process.env.NODE_ENV !== 'production') {
	          var mapsAsChildrenAddendum = '';
	          if (ReactCurrentOwner.current) {
	            var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
	            if (mapsAsChildrenOwnerName) {
	              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
	            }
	          }
	          process.env.NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
	          didWarnAboutMaps = true;
	        }
	        // Iterator will provide entry [k,v] tuples rather than values.
	        while (!(step = iterator.next()).done) {
	          var entry = step.value;
	          if (entry) {
	            child = entry[1];
	            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
	            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	          }
	        }
	      }
	    } else if (type === 'object') {
	      var addendum = '';
	      if (process.env.NODE_ENV !== 'production') {
	        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
	        if (children._isReactElement) {
	          addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
	        }
	        if (ReactCurrentOwner.current) {
	          var name = ReactCurrentOwner.current.getName();
	          if (name) {
	            addendum += ' Check the render method of `' + name + '`.';
	          }
	        }
	      }
	      var childrenString = String(children);
	       true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
	    }
	  }
	
	  return subtreeCount;
	}
	
	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }
	
	  return traverseAllChildrenImpl(children, '', callback, traverseContext);
	}
	
	module.exports = traverseAllChildren;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	/* global Symbol */
	
	var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
	
	/**
	 * Returns the iterator method function contained on the iterable object.
	 *
	 * Be sure to invoke the function with the iterable as context:
	 *
	 *     var iteratorFn = getIteratorFn(myIterable);
	 *     if (iteratorFn) {
	 *       var iterator = iteratorFn.call(myIterable);
	 *       ...
	 *     }
	 *
	 * @param {?object} maybeIterable
	 * @return {?function}
	 */
	function getIteratorFn(maybeIterable) {
	  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	  if (typeof iteratorFn === 'function') {
	    return iteratorFn;
	  }
	}
	
	module.exports = getIteratorFn;

/***/ },
/* 17 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	/**
	 * Escape and wrap key so it is safe to use as a reactid
	 *
	 * @param {string} key to be escaped.
	 * @return {string} the escaped key.
	 */
	
	function escape(key) {
	  var escapeRegex = /[=:]/g;
	  var escaperLookup = {
	    '=': '=0',
	    ':': '=2'
	  };
	  var escapedString = ('' + key).replace(escapeRegex, function (match) {
	    return escaperLookup[match];
	  });
	
	  return '$' + escapedString;
	}
	
	/**
	 * Unescape and unwrap key for human-readable display
	 *
	 * @param {string} key to unescape.
	 * @return {string} the unescaped key.
	 */
	function unescape(key) {
	  var unescapeRegex = /(=0|=2)/g;
	  var unescaperLookup = {
	    '=0': '=',
	    '=2': ':'
	  };
	  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);
	
	  return ('' + keySubstring).replace(unescapeRegex, function (match) {
	    return unescaperLookup[match];
	  });
	}
	
	var KeyEscapeUtils = {
	  escape: escape,
	  unescape: unescape
	};
	
	module.exports = KeyEscapeUtils;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var _prodInvariant = __webpack_require__(7);
	
	var ReactNoopUpdateQueue = __webpack_require__(19);
	
	var canDefineProperty = __webpack_require__(13);
	var emptyObject = __webpack_require__(20);
	var invariant = __webpack_require__(8);
	var warning = __webpack_require__(11);
	
	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}
	
	ReactComponent.prototype.isReactComponent = {};
	
	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.setState = function (partialState, callback) {
	  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : _prodInvariant('85') : void 0;
	  this.updater.enqueueSetState(this, partialState);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'setState');
	  }
	};
	
	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'forceUpdate');
	  }
	};
	
	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */
	if (process.env.NODE_ENV !== 'production') {
	  var deprecatedAPIs = {
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
	  };
	  var defineDeprecationWarning = function (methodName, info) {
	    if (canDefineProperty) {
	      Object.defineProperty(ReactComponent.prototype, methodName, {
	        get: function () {
	          process.env.NODE_ENV !== 'production' ? warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : void 0;
	          return undefined;
	        }
	      });
	    }
	  };
	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}
	
	module.exports = ReactComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var warning = __webpack_require__(11);
	
	function warnNoop(publicInstance, callerName) {
	  if (process.env.NODE_ENV !== 'production') {
	    var constructor = publicInstance.constructor;
	    process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
	  }
	}
	
	/**
	 * This is the abstract API for an update queue.
	 */
	var ReactNoopUpdateQueue = {
	
	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function (publicInstance) {
	    return false;
	  },
	
	  /**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
	  enqueueCallback: function (publicInstance, callback) {},
	
	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @internal
	   */
	  enqueueForceUpdate: function (publicInstance) {
	    warnNoop(publicInstance, 'forceUpdate');
	  },
	
	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @internal
	   */
	  enqueueReplaceState: function (publicInstance, completeState) {
	    warnNoop(publicInstance, 'replaceState');
	  },
	
	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
	  enqueueSetState: function (publicInstance, partialState) {
	    warnNoop(publicInstance, 'setState');
	  }
	};
	
	module.exports = ReactNoopUpdateQueue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var emptyObject = {};
	
	if (process.env.NODE_ENV !== 'production') {
	  Object.freeze(emptyObject);
	}
	
	module.exports = emptyObject;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(4);
	
	var ReactComponent = __webpack_require__(18);
	var ReactNoopUpdateQueue = __webpack_require__(19);
	
	var emptyObject = __webpack_require__(20);
	
	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactPureComponent(props, context, updater) {
	  // Duplicated from ReactComponent.
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}
	
	function ComponentDummy() {}
	ComponentDummy.prototype = ReactComponent.prototype;
	ReactPureComponent.prototype = new ComponentDummy();
	ReactPureComponent.prototype.constructor = ReactPureComponent;
	// Avoid an extra prototype jump for these methods.
	_assign(ReactPureComponent.prototype, ReactComponent.prototype);
	ReactPureComponent.prototype.isPureReactComponent = true;
	
	module.exports = ReactPureComponent;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var _prodInvariant = __webpack_require__(7),
	    _assign = __webpack_require__(4);
	
	var ReactComponent = __webpack_require__(18);
	var ReactElement = __webpack_require__(9);
	var ReactPropTypeLocationNames = __webpack_require__(23);
	var ReactNoopUpdateQueue = __webpack_require__(19);
	
	var emptyObject = __webpack_require__(20);
	var invariant = __webpack_require__(8);
	var warning = __webpack_require__(11);
	
	var MIXINS_KEY = 'mixins';
	
	// Helper function to allow the creation of anonymous functions which do not
	// have .name set to the name of the variable being assigned to.
	function identity(fn) {
	  return fn;
	}
	
	/**
	 * Policies that describe methods in `ReactClassInterface`.
	 */
	
	
	var injectedMixins = [];
	
	/**
	 * Composite components are higher-level components that compose other composite
	 * or host components.
	 *
	 * To create a new type of `ReactClass`, pass a specification of
	 * your new class to `React.createClass`. The only requirement of your class
	 * specification is that you implement a `render` method.
	 *
	 *   var MyComponent = React.createClass({
	 *     render: function() {
	 *       return <div>Hello World</div>;
	 *     }
	 *   });
	 *
	 * The class specification supports a specific protocol of methods that have
	 * special meaning (e.g. `render`). See `ReactClassInterface` for
	 * more the comprehensive protocol. Any other properties and methods in the
	 * class specification will be available on the prototype.
	 *
	 * @interface ReactClassInterface
	 * @internal
	 */
	var ReactClassInterface = {
	
	  /**
	   * An array of Mixin objects to include when defining your component.
	   *
	   * @type {array}
	   * @optional
	   */
	  mixins: 'DEFINE_MANY',
	
	  /**
	   * An object containing properties and methods that should be defined on
	   * the component's constructor instead of its prototype (static methods).
	   *
	   * @type {object}
	   * @optional
	   */
	  statics: 'DEFINE_MANY',
	
	  /**
	   * Definition of prop types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  propTypes: 'DEFINE_MANY',
	
	  /**
	   * Definition of context types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  contextTypes: 'DEFINE_MANY',
	
	  /**
	   * Definition of context types this component sets for its children.
	   *
	   * @type {object}
	   * @optional
	   */
	  childContextTypes: 'DEFINE_MANY',
	
	  // ==== Definition methods ====
	
	  /**
	   * Invoked when the component is mounted. Values in the mapping will be set on
	   * `this.props` if that prop is not specified (i.e. using an `in` check).
	   *
	   * This method is invoked before `getInitialState` and therefore cannot rely
	   * on `this.state` or use `this.setState`.
	   *
	   * @return {object}
	   * @optional
	   */
	  getDefaultProps: 'DEFINE_MANY_MERGED',
	
	  /**
	   * Invoked once before the component is mounted. The return value will be used
	   * as the initial value of `this.state`.
	   *
	   *   getInitialState: function() {
	   *     return {
	   *       isOn: false,
	   *       fooBaz: new BazFoo()
	   *     }
	   *   }
	   *
	   * @return {object}
	   * @optional
	   */
	  getInitialState: 'DEFINE_MANY_MERGED',
	
	  /**
	   * @return {object}
	   * @optional
	   */
	  getChildContext: 'DEFINE_MANY_MERGED',
	
	  /**
	   * Uses props from `this.props` and state from `this.state` to render the
	   * structure of the component.
	   *
	   * No guarantees are made about when or how often this method is invoked, so
	   * it must not have side effects.
	   *
	   *   render: function() {
	   *     var name = this.props.name;
	   *     return <div>Hello, {name}!</div>;
	   *   }
	   *
	   * @return {ReactComponent}
	   * @nosideeffects
	   * @required
	   */
	  render: 'DEFINE_ONCE',
	
	  // ==== Delegate methods ====
	
	  /**
	   * Invoked when the component is initially created and about to be mounted.
	   * This may have side effects, but any external subscriptions or data created
	   * by this method must be cleaned up in `componentWillUnmount`.
	   *
	   * @optional
	   */
	  componentWillMount: 'DEFINE_MANY',
	
	  /**
	   * Invoked when the component has been mounted and has a DOM representation.
	   * However, there is no guarantee that the DOM node is in the document.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been mounted (initialized and rendered) for the first time.
	   *
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidMount: 'DEFINE_MANY',
	
	  /**
	   * Invoked before the component receives new props.
	   *
	   * Use this as an opportunity to react to a prop transition by updating the
	   * state using `this.setState`. Current props are accessed via `this.props`.
	   *
	   *   componentWillReceiveProps: function(nextProps, nextContext) {
	   *     this.setState({
	   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	   *     });
	   *   }
	   *
	   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	   * transition may cause a state change, but the opposite is not true. If you
	   * need it, you are probably looking for `componentWillUpdate`.
	   *
	   * @param {object} nextProps
	   * @optional
	   */
	  componentWillReceiveProps: 'DEFINE_MANY',
	
	  /**
	   * Invoked while deciding if the component should be updated as a result of
	   * receiving new props, state and/or context.
	   *
	   * Use this as an opportunity to `return false` when you're certain that the
	   * transition to the new props/state/context will not require a component
	   * update.
	   *
	   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	   *     return !equal(nextProps, this.props) ||
	   *       !equal(nextState, this.state) ||
	   *       !equal(nextContext, this.context);
	   *   }
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @return {boolean} True if the component should update.
	   * @optional
	   */
	  shouldComponentUpdate: 'DEFINE_ONCE',
	
	  /**
	   * Invoked when the component is about to update due to a transition from
	   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	   * and `nextContext`.
	   *
	   * Use this as an opportunity to perform preparation before an update occurs.
	   *
	   * NOTE: You **cannot** use `this.setState()` in this method.
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @param {ReactReconcileTransaction} transaction
	   * @optional
	   */
	  componentWillUpdate: 'DEFINE_MANY',
	
	  /**
	   * Invoked when the component's DOM representation has been updated.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been updated.
	   *
	   * @param {object} prevProps
	   * @param {?object} prevState
	   * @param {?object} prevContext
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidUpdate: 'DEFINE_MANY',
	
	  /**
	   * Invoked when the component is about to be removed from its parent and have
	   * its DOM representation destroyed.
	   *
	   * Use this as an opportunity to deallocate any external resources.
	   *
	   * NOTE: There is no `componentDidUnmount` since your component will have been
	   * destroyed by that point.
	   *
	   * @optional
	   */
	  componentWillUnmount: 'DEFINE_MANY',
	
	  // ==== Advanced methods ====
	
	  /**
	   * Updates the component's currently mounted DOM representation.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   * @overridable
	   */
	  updateComponent: 'OVERRIDE_BASE'
	
	};
	
	/**
	 * Mapping from class specification keys to special processing functions.
	 *
	 * Although these are declared like instance properties in the specification
	 * when defining classes using `React.createClass`, they are actually static
	 * and are accessible on the constructor instead of the prototype. Despite
	 * being static, they must be defined outside of the "statics" key under
	 * which all other static methods are defined.
	 */
	var RESERVED_SPEC_KEYS = {
	  displayName: function (Constructor, displayName) {
	    Constructor.displayName = displayName;
	  },
	  mixins: function (Constructor, mixins) {
	    if (mixins) {
	      for (var i = 0; i < mixins.length; i++) {
	        mixSpecIntoComponent(Constructor, mixins[i]);
	      }
	    }
	  },
	  childContextTypes: function (Constructor, childContextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, childContextTypes, 'childContext');
	    }
	    Constructor.childContextTypes = _assign({}, Constructor.childContextTypes, childContextTypes);
	  },
	  contextTypes: function (Constructor, contextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, contextTypes, 'context');
	    }
	    Constructor.contextTypes = _assign({}, Constructor.contextTypes, contextTypes);
	  },
	  /**
	   * Special case getDefaultProps which should move into statics but requires
	   * automatic merging.
	   */
	  getDefaultProps: function (Constructor, getDefaultProps) {
	    if (Constructor.getDefaultProps) {
	      Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
	    } else {
	      Constructor.getDefaultProps = getDefaultProps;
	    }
	  },
	  propTypes: function (Constructor, propTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, propTypes, 'prop');
	    }
	    Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	  },
	  statics: function (Constructor, statics) {
	    mixStaticSpecIntoComponent(Constructor, statics);
	  },
	  autobind: function () {} };
	
	function validateTypeDef(Constructor, typeDef, location) {
	  for (var propName in typeDef) {
	    if (typeDef.hasOwnProperty(propName)) {
	      // use a warning instead of an invariant so components
	      // don't show up in prod but only in __DEV__
	      process.env.NODE_ENV !== 'production' ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : void 0;
	    }
	  }
	}
	
	function validateMethodOverride(isAlreadyDefined, name) {
	  var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;
	
	  // Disallow overriding of base class methods unless explicitly allowed.
	  if (ReactClassMixin.hasOwnProperty(name)) {
	    !(specPolicy === 'OVERRIDE_BASE') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.', name) : _prodInvariant('73', name) : void 0;
	  }
	
	  // Disallow defining methods more than once unless explicitly allowed.
	  if (isAlreadyDefined) {
	    !(specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('74', name) : void 0;
	  }
	}
	
	/**
	 * Mixin helper which handles policy validation and reserved
	 * specification keys when building React classes.
	 */
	function mixSpecIntoComponent(Constructor, spec) {
	  if (!spec) {
	    if (process.env.NODE_ENV !== 'production') {
	      var typeofSpec = typeof spec;
	      var isMixinValid = typeofSpec === 'object' && spec !== null;
	
	      process.env.NODE_ENV !== 'production' ? warning(isMixinValid, '%s: You\'re attempting to include a mixin that is either null ' + 'or not an object. Check the mixins included by the component, ' + 'as well as any mixins they include themselves. ' + 'Expected object but got %s.', Constructor.displayName || 'ReactClass', spec === null ? null : typeofSpec) : void 0;
	    }
	
	    return;
	  }
	
	  !(typeof spec !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component class or function as a mixin. Instead, just use a regular object.') : _prodInvariant('75') : void 0;
	  !!ReactElement.isValidElement(spec) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component as a mixin. Instead, just use a regular object.') : _prodInvariant('76') : void 0;
	
	  var proto = Constructor.prototype;
	  var autoBindPairs = proto.__reactAutoBindPairs;
	
	  // By handling mixins before any other properties, we ensure the same
	  // chaining order is applied to methods with DEFINE_MANY policy, whether
	  // mixins are listed before or after these methods in the spec.
	  if (spec.hasOwnProperty(MIXINS_KEY)) {
	    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	  }
	
	  for (var name in spec) {
	    if (!spec.hasOwnProperty(name)) {
	      continue;
	    }
	
	    if (name === MIXINS_KEY) {
	      // We have already handled mixins in a special case above.
	      continue;
	    }
	
	    var property = spec[name];
	    var isAlreadyDefined = proto.hasOwnProperty(name);
	    validateMethodOverride(isAlreadyDefined, name);
	
	    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	      RESERVED_SPEC_KEYS[name](Constructor, property);
	    } else {
	      // Setup methods on prototype:
	      // The following member methods should not be automatically bound:
	      // 1. Expected ReactClass methods (in the "interface").
	      // 2. Overridden methods (that were mixed in).
	      var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	      var isFunction = typeof property === 'function';
	      var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;
	
	      if (shouldAutoBind) {
	        autoBindPairs.push(name, property);
	        proto[name] = property;
	      } else {
	        if (isAlreadyDefined) {
	          var specPolicy = ReactClassInterface[name];
	
	          // These cases should already be caught by validateMethodOverride.
	          !(isReactClassMethod && (specPolicy === 'DEFINE_MANY_MERGED' || specPolicy === 'DEFINE_MANY')) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.', specPolicy, name) : _prodInvariant('77', specPolicy, name) : void 0;
	
	          // For methods which are defined more than once, call the existing
	          // methods before calling the new property, merging if appropriate.
	          if (specPolicy === 'DEFINE_MANY_MERGED') {
	            proto[name] = createMergedResultFunction(proto[name], property);
	          } else if (specPolicy === 'DEFINE_MANY') {
	            proto[name] = createChainedFunction(proto[name], property);
	          }
	        } else {
	          proto[name] = property;
	          if (process.env.NODE_ENV !== 'production') {
	            // Add verbose displayName to the function, which helps when looking
	            // at profiling tools.
	            if (typeof property === 'function' && spec.displayName) {
	              proto[name].displayName = spec.displayName + '_' + name;
	            }
	          }
	        }
	      }
	    }
	  }
	}
	
	function mixStaticSpecIntoComponent(Constructor, statics) {
	  if (!statics) {
	    return;
	  }
	  for (var name in statics) {
	    var property = statics[name];
	    if (!statics.hasOwnProperty(name)) {
	      continue;
	    }
	
	    var isReserved = name in RESERVED_SPEC_KEYS;
	    !!isReserved ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', name) : _prodInvariant('78', name) : void 0;
	
	    var isInherited = name in Constructor;
	    !!isInherited ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('79', name) : void 0;
	    Constructor[name] = property;
	  }
	}
	
	/**
	 * Merge two objects, but throw if both contain the same key.
	 *
	 * @param {object} one The first object, which is mutated.
	 * @param {object} two The second object
	 * @return {object} one after it has been mutated to contain everything in two.
	 */
	function mergeIntoWithNoDuplicateKeys(one, two) {
	  !(one && two && typeof one === 'object' && typeof two === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : _prodInvariant('80') : void 0;
	
	  for (var key in two) {
	    if (two.hasOwnProperty(key)) {
	      !(one[key] === undefined) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.', key) : _prodInvariant('81', key) : void 0;
	      one[key] = two[key];
	    }
	  }
	  return one;
	}
	
	/**
	 * Creates a function that invokes two functions and merges their return values.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createMergedResultFunction(one, two) {
	  return function mergedResult() {
	    var a = one.apply(this, arguments);
	    var b = two.apply(this, arguments);
	    if (a == null) {
	      return b;
	    } else if (b == null) {
	      return a;
	    }
	    var c = {};
	    mergeIntoWithNoDuplicateKeys(c, a);
	    mergeIntoWithNoDuplicateKeys(c, b);
	    return c;
	  };
	}
	
	/**
	 * Creates a function that invokes two functions and ignores their return vales.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createChainedFunction(one, two) {
	  return function chainedFunction() {
	    one.apply(this, arguments);
	    two.apply(this, arguments);
	  };
	}
	
	/**
	 * Binds a method to the component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 * @param {function} method Method to be bound.
	 * @return {function} The bound method.
	 */
	function bindAutoBindMethod(component, method) {
	  var boundMethod = method.bind(component);
	  if (process.env.NODE_ENV !== 'production') {
	    boundMethod.__reactBoundContext = component;
	    boundMethod.__reactBoundMethod = method;
	    boundMethod.__reactBoundArguments = null;
	    var componentName = component.constructor.displayName;
	    var _bind = boundMethod.bind;
	    boundMethod.bind = function (newThis) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      // User is trying to bind() an autobound method; we effectively will
	      // ignore the value of "this" that the user is trying to use, so
	      // let's warn.
	      if (newThis !== component && newThis !== null) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : void 0;
	      } else if (!args.length) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : void 0;
	        return boundMethod;
	      }
	      var reboundMethod = _bind.apply(boundMethod, arguments);
	      reboundMethod.__reactBoundContext = component;
	      reboundMethod.__reactBoundMethod = method;
	      reboundMethod.__reactBoundArguments = args;
	      return reboundMethod;
	    };
	  }
	  return boundMethod;
	}
	
	/**
	 * Binds all auto-bound methods in a component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 */
	function bindAutoBindMethods(component) {
	  var pairs = component.__reactAutoBindPairs;
	  for (var i = 0; i < pairs.length; i += 2) {
	    var autoBindKey = pairs[i];
	    var method = pairs[i + 1];
	    component[autoBindKey] = bindAutoBindMethod(component, method);
	  }
	}
	
	/**
	 * Add more to the ReactClass base class. These are all legacy features and
	 * therefore not already part of the modern ReactComponent.
	 */
	var ReactClassMixin = {
	
	  /**
	   * TODO: This will be deprecated because state should always keep a consistent
	   * type signature and the only use case for this, is to avoid that.
	   */
	  replaceState: function (newState, callback) {
	    this.updater.enqueueReplaceState(this, newState);
	    if (callback) {
	      this.updater.enqueueCallback(this, callback, 'replaceState');
	    }
	  },
	
	  /**
	   * Checks whether or not this composite component is mounted.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function () {
	    return this.updater.isMounted(this);
	  }
	};
	
	var ReactClassComponent = function () {};
	_assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);
	
	/**
	 * Module for creating composite components.
	 *
	 * @class ReactClass
	 */
	var ReactClass = {
	
	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  createClass: function (spec) {
	    // To keep our warnings more understandable, we'll use a little hack here to
	    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
	    // unnecessarily identify a class without displayName as 'Constructor'.
	    var Constructor = identity(function (props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.
	
	      if (process.env.NODE_ENV !== 'production') {
	        process.env.NODE_ENV !== 'production' ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : void 0;
	      }
	
	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }
	
	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;
	
	      this.state = null;
	
	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.
	
	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (process.env.NODE_ENV !== 'production') {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (initialState === undefined && this.getInitialState._isMockFunction) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      !(typeof initialState === 'object' && !Array.isArray(initialState)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : _prodInvariant('82', Constructor.displayName || 'ReactCompositeComponent') : void 0;
	
	      this.state = initialState;
	    });
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];
	
	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));
	
	    mixSpecIntoComponent(Constructor, spec);
	
	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }
	
	    !Constructor.prototype.render ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createClass(...): Class specification must implement a `render` method.') : _prodInvariant('83') : void 0;
	
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : void 0;
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : void 0;
	    }
	
	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }
	
	    return Constructor;
	  },
	
	  injection: {
	    injectMixin: function (mixin) {
	      injectedMixins.push(mixin);
	    }
	  }
	
	};
	
	module.exports = ReactClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var ReactPropTypeLocationNames = {};
	
	if (process.env.NODE_ENV !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	}
	
	module.exports = ReactPropTypeLocationNames;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var ReactElement = __webpack_require__(9);
	
	/**
	 * Create a factory that creates HTML tag elements.
	 *
	 * @private
	 */
	var createDOMFactory = ReactElement.createFactory;
	if (process.env.NODE_ENV !== 'production') {
	  var ReactElementValidator = __webpack_require__(25);
	  createDOMFactory = ReactElementValidator.createFactory;
	}
	
	/**
	 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	 * This is also accessible via `React.DOM`.
	 *
	 * @public
	 */
	var ReactDOMFactories = {
	  a: createDOMFactory('a'),
	  abbr: createDOMFactory('abbr'),
	  address: createDOMFactory('address'),
	  area: createDOMFactory('area'),
	  article: createDOMFactory('article'),
	  aside: createDOMFactory('aside'),
	  audio: createDOMFactory('audio'),
	  b: createDOMFactory('b'),
	  base: createDOMFactory('base'),
	  bdi: createDOMFactory('bdi'),
	  bdo: createDOMFactory('bdo'),
	  big: createDOMFactory('big'),
	  blockquote: createDOMFactory('blockquote'),
	  body: createDOMFactory('body'),
	  br: createDOMFactory('br'),
	  button: createDOMFactory('button'),
	  canvas: createDOMFactory('canvas'),
	  caption: createDOMFactory('caption'),
	  cite: createDOMFactory('cite'),
	  code: createDOMFactory('code'),
	  col: createDOMFactory('col'),
	  colgroup: createDOMFactory('colgroup'),
	  data: createDOMFactory('data'),
	  datalist: createDOMFactory('datalist'),
	  dd: createDOMFactory('dd'),
	  del: createDOMFactory('del'),
	  details: createDOMFactory('details'),
	  dfn: createDOMFactory('dfn'),
	  dialog: createDOMFactory('dialog'),
	  div: createDOMFactory('div'),
	  dl: createDOMFactory('dl'),
	  dt: createDOMFactory('dt'),
	  em: createDOMFactory('em'),
	  embed: createDOMFactory('embed'),
	  fieldset: createDOMFactory('fieldset'),
	  figcaption: createDOMFactory('figcaption'),
	  figure: createDOMFactory('figure'),
	  footer: createDOMFactory('footer'),
	  form: createDOMFactory('form'),
	  h1: createDOMFactory('h1'),
	  h2: createDOMFactory('h2'),
	  h3: createDOMFactory('h3'),
	  h4: createDOMFactory('h4'),
	  h5: createDOMFactory('h5'),
	  h6: createDOMFactory('h6'),
	  head: createDOMFactory('head'),
	  header: createDOMFactory('header'),
	  hgroup: createDOMFactory('hgroup'),
	  hr: createDOMFactory('hr'),
	  html: createDOMFactory('html'),
	  i: createDOMFactory('i'),
	  iframe: createDOMFactory('iframe'),
	  img: createDOMFactory('img'),
	  input: createDOMFactory('input'),
	  ins: createDOMFactory('ins'),
	  kbd: createDOMFactory('kbd'),
	  keygen: createDOMFactory('keygen'),
	  label: createDOMFactory('label'),
	  legend: createDOMFactory('legend'),
	  li: createDOMFactory('li'),
	  link: createDOMFactory('link'),
	  main: createDOMFactory('main'),
	  map: createDOMFactory('map'),
	  mark: createDOMFactory('mark'),
	  menu: createDOMFactory('menu'),
	  menuitem: createDOMFactory('menuitem'),
	  meta: createDOMFactory('meta'),
	  meter: createDOMFactory('meter'),
	  nav: createDOMFactory('nav'),
	  noscript: createDOMFactory('noscript'),
	  object: createDOMFactory('object'),
	  ol: createDOMFactory('ol'),
	  optgroup: createDOMFactory('optgroup'),
	  option: createDOMFactory('option'),
	  output: createDOMFactory('output'),
	  p: createDOMFactory('p'),
	  param: createDOMFactory('param'),
	  picture: createDOMFactory('picture'),
	  pre: createDOMFactory('pre'),
	  progress: createDOMFactory('progress'),
	  q: createDOMFactory('q'),
	  rp: createDOMFactory('rp'),
	  rt: createDOMFactory('rt'),
	  ruby: createDOMFactory('ruby'),
	  s: createDOMFactory('s'),
	  samp: createDOMFactory('samp'),
	  script: createDOMFactory('script'),
	  section: createDOMFactory('section'),
	  select: createDOMFactory('select'),
	  small: createDOMFactory('small'),
	  source: createDOMFactory('source'),
	  span: createDOMFactory('span'),
	  strong: createDOMFactory('strong'),
	  style: createDOMFactory('style'),
	  sub: createDOMFactory('sub'),
	  summary: createDOMFactory('summary'),
	  sup: createDOMFactory('sup'),
	  table: createDOMFactory('table'),
	  tbody: createDOMFactory('tbody'),
	  td: createDOMFactory('td'),
	  textarea: createDOMFactory('textarea'),
	  tfoot: createDOMFactory('tfoot'),
	  th: createDOMFactory('th'),
	  thead: createDOMFactory('thead'),
	  time: createDOMFactory('time'),
	  title: createDOMFactory('title'),
	  tr: createDOMFactory('tr'),
	  track: createDOMFactory('track'),
	  u: createDOMFactory('u'),
	  ul: createDOMFactory('ul'),
	  'var': createDOMFactory('var'),
	  video: createDOMFactory('video'),
	  wbr: createDOMFactory('wbr'),
	
	  // SVG
	  circle: createDOMFactory('circle'),
	  clipPath: createDOMFactory('clipPath'),
	  defs: createDOMFactory('defs'),
	  ellipse: createDOMFactory('ellipse'),
	  g: createDOMFactory('g'),
	  image: createDOMFactory('image'),
	  line: createDOMFactory('line'),
	  linearGradient: createDOMFactory('linearGradient'),
	  mask: createDOMFactory('mask'),
	  path: createDOMFactory('path'),
	  pattern: createDOMFactory('pattern'),
	  polygon: createDOMFactory('polygon'),
	  polyline: createDOMFactory('polyline'),
	  radialGradient: createDOMFactory('radialGradient'),
	  rect: createDOMFactory('rect'),
	  stop: createDOMFactory('stop'),
	  svg: createDOMFactory('svg'),
	  text: createDOMFactory('text'),
	  tspan: createDOMFactory('tspan')
	};
	
	module.exports = ReactDOMFactories;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	/**
	 * ReactElementValidator provides a wrapper around a element factory
	 * which validates the props passed to the element. This is intended to be
	 * used only in DEV and could be replaced by a static type checker for languages
	 * that support it.
	 */
	
	'use strict';
	
	var ReactCurrentOwner = __webpack_require__(10);
	var ReactComponentTreeHook = __webpack_require__(26);
	var ReactElement = __webpack_require__(9);
	
	var checkReactTypeSpec = __webpack_require__(27);
	
	var canDefineProperty = __webpack_require__(13);
	var getIteratorFn = __webpack_require__(16);
	var warning = __webpack_require__(11);
	
	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner.current) {
	    var name = ReactCurrentOwner.current.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}
	
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */
	var ownerHasKeyUseWarning = {};
	
	function getCurrentComponentErrorInfo(parentType) {
	  var info = getDeclarationErrorAddendum();
	
	  if (!info) {
	    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
	    if (parentName) {
	      info = ' Check the top-level render call using <' + parentName + '>.';
	    }
	  }
	  return info;
	}
	
	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function validateExplicitKey(element, parentType) {
	  if (!element._store || element._store.validated || element.key != null) {
	    return;
	  }
	  element._store.validated = true;
	
	  var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});
	
	  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
	  if (memoizer[currentComponentErrorInfo]) {
	    return;
	  }
	  memoizer[currentComponentErrorInfo] = true;
	
	  // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.
	  var childOwner = '';
	  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
	    // Give the component that originally created this child.
	    childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
	  }
	
	  process.env.NODE_ENV !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, ReactComponentTreeHook.getCurrentStackAddendum(element)) : void 0;
	}
	
	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */
	function validateChildKeys(node, parentType) {
	  if (typeof node !== 'object') {
	    return;
	  }
	  if (Array.isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];
	      if (ReactElement.isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (ReactElement.isValidElement(node)) {
	    // This element was passed in a valid location.
	    if (node._store) {
	      node._store.validated = true;
	    }
	  } else if (node) {
	    var iteratorFn = getIteratorFn(node);
	    // Entry iterators provide implicit keys.
	    if (iteratorFn) {
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (ReactElement.isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    }
	  }
	}
	
	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */
	function validatePropTypes(element) {
	  var componentClass = element.type;
	  if (typeof componentClass !== 'function') {
	    return;
	  }
	  var name = componentClass.displayName || componentClass.name;
	  if (componentClass.propTypes) {
	    checkReactTypeSpec(componentClass.propTypes, element.props, 'prop', name, element, null);
	  }
	  if (typeof componentClass.getDefaultProps === 'function') {
	    process.env.NODE_ENV !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
	  }
	}
	
	var ReactElementValidator = {
	
	  createElement: function (type, props, children) {
	    var validType = typeof type === 'string' || typeof type === 'function';
	    // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.
	    if (!validType) {
	      if (typeof type !== 'function' && typeof type !== 'string') {
	        var info = '';
	        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	          info += ' You likely forgot to export your component from the file ' + 'it\'s defined in.';
	        }
	        info += getDeclarationErrorAddendum();
	        process.env.NODE_ENV !== 'production' ? warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info) : void 0;
	      }
	    }
	
	    var element = ReactElement.createElement.apply(this, arguments);
	
	    // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.
	    if (element == null) {
	      return element;
	    }
	
	    // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)
	    if (validType) {
	      for (var i = 2; i < arguments.length; i++) {
	        validateChildKeys(arguments[i], type);
	      }
	    }
	
	    validatePropTypes(element);
	
	    return element;
	  },
	
	  createFactory: function (type) {
	    var validatedFactory = ReactElementValidator.createElement.bind(null, type);
	    // Legacy hook TODO: Warn if this is accessed
	    validatedFactory.type = type;
	
	    if (process.env.NODE_ENV !== 'production') {
	      if (canDefineProperty) {
	        Object.defineProperty(validatedFactory, 'type', {
	          enumerable: false,
	          get: function () {
	            process.env.NODE_ENV !== 'production' ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : void 0;
	            Object.defineProperty(this, 'type', {
	              value: type
	            });
	            return type;
	          }
	        });
	      }
	    }
	
	    return validatedFactory;
	  },
	
	  cloneElement: function (element, props, children) {
	    var newElement = ReactElement.cloneElement.apply(this, arguments);
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], newElement.type);
	    }
	    validatePropTypes(newElement);
	    return newElement;
	  }
	
	};
	
	module.exports = ReactElementValidator;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var _prodInvariant = __webpack_require__(7);
	
	var ReactCurrentOwner = __webpack_require__(10);
	
	var invariant = __webpack_require__(8);
	var warning = __webpack_require__(11);
	
	function isNative(fn) {
	  // Based on isNative() from Lodash
	  var funcToString = Function.prototype.toString;
	  var hasOwnProperty = Object.prototype.hasOwnProperty;
	  var reIsNative = RegExp('^' + funcToString
	  // Take an example native function source for comparison
	  .call(hasOwnProperty)
	  // Strip regex characters so we can use it for regex
	  .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  // Remove hasOwnProperty from the template to make it generic
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	  try {
	    var source = funcToString.call(fn);
	    return reIsNative.test(source);
	  } catch (err) {
	    return false;
	  }
	}
	
	var canUseCollections =
	// Array.from
	typeof Array.from === 'function' &&
	// Map
	typeof Map === 'function' && isNative(Map) &&
	// Map.prototype.keys
	Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
	// Set
	typeof Set === 'function' && isNative(Set) &&
	// Set.prototype.keys
	Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);
	
	var setItem;
	var getItem;
	var removeItem;
	var getItemIDs;
	var addRoot;
	var removeRoot;
	var getRootIDs;
	
	if (canUseCollections) {
	  var itemMap = new Map();
	  var rootIDSet = new Set();
	
	  setItem = function (id, item) {
	    itemMap.set(id, item);
	  };
	  getItem = function (id) {
	    return itemMap.get(id);
	  };
	  removeItem = function (id) {
	    itemMap['delete'](id);
	  };
	  getItemIDs = function () {
	    return Array.from(itemMap.keys());
	  };
	
	  addRoot = function (id) {
	    rootIDSet.add(id);
	  };
	  removeRoot = function (id) {
	    rootIDSet['delete'](id);
	  };
	  getRootIDs = function () {
	    return Array.from(rootIDSet.keys());
	  };
	} else {
	  var itemByKey = {};
	  var rootByKey = {};
	
	  // Use non-numeric keys to prevent V8 performance issues:
	  // https://github.com/facebook/react/pull/7232
	  var getKeyFromID = function (id) {
	    return '.' + id;
	  };
	  var getIDFromKey = function (key) {
	    return parseInt(key.substr(1), 10);
	  };
	
	  setItem = function (id, item) {
	    var key = getKeyFromID(id);
	    itemByKey[key] = item;
	  };
	  getItem = function (id) {
	    var key = getKeyFromID(id);
	    return itemByKey[key];
	  };
	  removeItem = function (id) {
	    var key = getKeyFromID(id);
	    delete itemByKey[key];
	  };
	  getItemIDs = function () {
	    return Object.keys(itemByKey).map(getIDFromKey);
	  };
	
	  addRoot = function (id) {
	    var key = getKeyFromID(id);
	    rootByKey[key] = true;
	  };
	  removeRoot = function (id) {
	    var key = getKeyFromID(id);
	    delete rootByKey[key];
	  };
	  getRootIDs = function () {
	    return Object.keys(rootByKey).map(getIDFromKey);
	  };
	}
	
	var unmountedIDs = [];
	
	function purgeDeep(id) {
	  var item = getItem(id);
	  if (item) {
	    var childIDs = item.childIDs;
	
	    removeItem(id);
	    childIDs.forEach(purgeDeep);
	  }
	}
	
	function describeComponentFrame(name, source, ownerName) {
	  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
	}
	
	function getDisplayName(element) {
	  if (element == null) {
	    return '#empty';
	  } else if (typeof element === 'string' || typeof element === 'number') {
	    return '#text';
	  } else if (typeof element.type === 'string') {
	    return element.type;
	  } else {
	    return element.type.displayName || element.type.name || 'Unknown';
	  }
	}
	
	function describeID(id) {
	  var name = ReactComponentTreeHook.getDisplayName(id);
	  var element = ReactComponentTreeHook.getElement(id);
	  var ownerID = ReactComponentTreeHook.getOwnerID(id);
	  var ownerName;
	  if (ownerID) {
	    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
	  }
	  process.env.NODE_ENV !== 'production' ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
	  return describeComponentFrame(name, element && element._source, ownerName);
	}
	
	var ReactComponentTreeHook = {
	  onSetChildren: function (id, nextChildIDs) {
	    var item = getItem(id);
	    !item ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
	    item.childIDs = nextChildIDs;
	
	    for (var i = 0; i < nextChildIDs.length; i++) {
	      var nextChildID = nextChildIDs[i];
	      var nextChild = getItem(nextChildID);
	      !nextChild ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('140') : void 0;
	      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : _prodInvariant('141') : void 0;
	      !nextChild.isMounted ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('71') : void 0;
	      if (nextChild.parentID == null) {
	        nextChild.parentID = id;
	        // TODO: This shouldn't be necessary but mounting a new root during in
	        // componentWillMount currently causes not-yet-mounted components to
	        // be purged from our tree data so their parent id is missing.
	      }
	      !(nextChild.parentID === id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : _prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
	    }
	  },
	  onBeforeMountComponent: function (id, element, parentID) {
	    var item = {
	      element: element,
	      parentID: parentID,
	      text: null,
	      childIDs: [],
	      isMounted: false,
	      updateCount: 0
	    };
	    setItem(id, item);
	  },
	  onBeforeUpdateComponent: function (id, element) {
	    var item = getItem(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.element = element;
	  },
	  onMountComponent: function (id) {
	    var item = getItem(id);
	    !item ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
	    item.isMounted = true;
	    var isRoot = item.parentID === 0;
	    if (isRoot) {
	      addRoot(id);
	    }
	  },
	  onUpdateComponent: function (id) {
	    var item = getItem(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.updateCount++;
	  },
	  onUnmountComponent: function (id) {
	    var item = getItem(id);
	    if (item) {
	      // We need to check if it exists.
	      // `item` might not exist if it is inside an error boundary, and a sibling
	      // error boundary child threw while mounting. Then this instance never
	      // got a chance to mount, but it still gets an unmounting event during
	      // the error boundary cleanup.
	      item.isMounted = false;
	      var isRoot = item.parentID === 0;
	      if (isRoot) {
	        removeRoot(id);
	      }
	    }
	    unmountedIDs.push(id);
	  },
	  purgeUnmountedComponents: function () {
	    if (ReactComponentTreeHook._preventPurging) {
	      // Should only be used for testing.
	      return;
	    }
	
	    for (var i = 0; i < unmountedIDs.length; i++) {
	      var id = unmountedIDs[i];
	      purgeDeep(id);
	    }
	    unmountedIDs.length = 0;
	  },
	  isMounted: function (id) {
	    var item = getItem(id);
	    return item ? item.isMounted : false;
	  },
	  getCurrentStackAddendum: function (topElement) {
	    var info = '';
	    if (topElement) {
	      var name = getDisplayName(topElement);
	      var owner = topElement._owner;
	      info += describeComponentFrame(name, topElement._source, owner && owner.getName());
	    }
	
	    var currentOwner = ReactCurrentOwner.current;
	    var id = currentOwner && currentOwner._debugID;
	
	    info += ReactComponentTreeHook.getStackAddendumByID(id);
	    return info;
	  },
	  getStackAddendumByID: function (id) {
	    var info = '';
	    while (id) {
	      info += describeID(id);
	      id = ReactComponentTreeHook.getParentID(id);
	    }
	    return info;
	  },
	  getChildIDs: function (id) {
	    var item = getItem(id);
	    return item ? item.childIDs : [];
	  },
	  getDisplayName: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element) {
	      return null;
	    }
	    return getDisplayName(element);
	  },
	  getElement: function (id) {
	    var item = getItem(id);
	    return item ? item.element : null;
	  },
	  getOwnerID: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element || !element._owner) {
	      return null;
	    }
	    return element._owner._debugID;
	  },
	  getParentID: function (id) {
	    var item = getItem(id);
	    return item ? item.parentID : null;
	  },
	  getSource: function (id) {
	    var item = getItem(id);
	    var element = item ? item.element : null;
	    var source = element != null ? element._source : null;
	    return source;
	  },
	  getText: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (typeof element === 'string') {
	      return element;
	    } else if (typeof element === 'number') {
	      return '' + element;
	    } else {
	      return null;
	    }
	  },
	  getUpdateCount: function (id) {
	    var item = getItem(id);
	    return item ? item.updateCount : 0;
	  },
	
	
	  getRootIDs: getRootIDs,
	  getRegisteredIDs: getItemIDs
	};
	
	module.exports = ReactComponentTreeHook;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var _prodInvariant = __webpack_require__(7);
	
	var ReactPropTypeLocationNames = __webpack_require__(23);
	var ReactPropTypesSecret = __webpack_require__(28);
	
	var invariant = __webpack_require__(8);
	var warning = __webpack_require__(11);
	
	var ReactComponentTreeHook;
	
	if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'test') {
	  // Temporary hack.
	  // Inline requires don't work well with Jest:
	  // https://github.com/facebook/react/issues/7240
	  // Remove the inline requires when we don't need them anymore:
	  // https://github.com/facebook/react/pull/7178
	  ReactComponentTreeHook = __webpack_require__(26);
	}
	
	var loggedTypeFailures = {};
	
	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?object} element The React element that is being type-checked
	 * @param {?number} debugID The React component instance that is being type-checked
	 * @private
	 */
	function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
	  for (var typeSpecName in typeSpecs) {
	    if (typeSpecs.hasOwnProperty(typeSpecName)) {
	      var error;
	      // Prop type validation may throw. In case they do, we don't want to
	      // fail the render phase where it didn't fail before. So we log it.
	      // After these have been cleaned up, we'll let them throw.
	      try {
	        // This is intentionally an invariant that gets caught. It's the same
	        // behavior as without this statement except with a better message.
	        !(typeof typeSpecs[typeSpecName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : _prodInvariant('84', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : void 0;
	        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	      } catch (ex) {
	        error = ex;
	      }
	      process.env.NODE_ENV !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName, typeof error) : void 0;
	      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	        // Only monitor this failure once because there tends to be a lot of the
	        // same error.
	        loggedTypeFailures[error.message] = true;
	
	        var componentStackInfo = '';
	
	        if (process.env.NODE_ENV !== 'production') {
	          if (!ReactComponentTreeHook) {
	            ReactComponentTreeHook = __webpack_require__(26);
	          }
	          if (debugID !== null) {
	            componentStackInfo = ReactComponentTreeHook.getStackAddendumByID(debugID);
	          } else if (element !== null) {
	            componentStackInfo = ReactComponentTreeHook.getCurrentStackAddendum(element);
	          }
	        }
	
	        process.env.NODE_ENV !== 'production' ? warning(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
	      }
	    }
	  }
	}
	
	module.exports = checkReactTypeSpec;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 28 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	
	module.exports = ReactPropTypesSecret;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var ReactElement = __webpack_require__(9);
	var ReactPropTypeLocationNames = __webpack_require__(23);
	var ReactPropTypesSecret = __webpack_require__(28);
	
	var emptyFunction = __webpack_require__(12);
	var getIteratorFn = __webpack_require__(16);
	var warning = __webpack_require__(11);
	
	/**
	 * Collection of methods that allow declaration and validation of props that are
	 * supplied to React components. Example usage:
	 *
	 *   var Props = require('ReactPropTypes');
	 *   var MyArticle = React.createClass({
	 *     propTypes: {
	 *       // An optional string prop named "description".
	 *       description: Props.string,
	 *
	 *       // A required enum prop named "category".
	 *       category: Props.oneOf(['News','Photos']).isRequired,
	 *
	 *       // A prop named "dialog" that requires an instance of Dialog.
	 *       dialog: Props.instanceOf(Dialog).isRequired
	 *     },
	 *     render: function() { ... }
	 *   });
	 *
	 * A more formal specification of how these methods are used:
	 *
	 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	 *   decl := ReactPropTypes.{type}(.isRequired)?
	 *
	 * Each and every declaration produces a function with the same signature. This
	 * allows the creation of custom validation functions. For example:
	 *
	 *  var MyLink = React.createClass({
	 *    propTypes: {
	 *      // An optional string or URI prop named "href".
	 *      href: function(props, propName, componentName) {
	 *        var propValue = props[propName];
	 *        if (propValue != null && typeof propValue !== 'string' &&
	 *            !(propValue instanceof URI)) {
	 *          return new Error(
	 *            'Expected a string or an URI for ' + propName + ' in ' +
	 *            componentName
	 *          );
	 *        }
	 *      }
	 *    },
	 *    render: function() {...}
	 *  });
	 *
	 * @internal
	 */
	
	var ANONYMOUS = '<<anonymous>>';
	
	var ReactPropTypes = {
	  array: createPrimitiveTypeChecker('array'),
	  bool: createPrimitiveTypeChecker('boolean'),
	  func: createPrimitiveTypeChecker('function'),
	  number: createPrimitiveTypeChecker('number'),
	  object: createPrimitiveTypeChecker('object'),
	  string: createPrimitiveTypeChecker('string'),
	  symbol: createPrimitiveTypeChecker('symbol'),
	
	  any: createAnyTypeChecker(),
	  arrayOf: createArrayOfTypeChecker,
	  element: createElementTypeChecker(),
	  instanceOf: createInstanceTypeChecker,
	  node: createNodeChecker(),
	  objectOf: createObjectOfTypeChecker,
	  oneOf: createEnumTypeChecker,
	  oneOfType: createUnionTypeChecker,
	  shape: createShapeTypeChecker
	};
	
	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	/*eslint-disable no-self-compare*/
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    return x !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}
	/*eslint-enable no-self-compare*/
	
	/**
	 * We use an Error-like object for backward compatibility as people may call
	 * PropTypes directly and inspect their output. However we don't use real
	 * Errors anymore. We don't inspect their stack anyway, and creating them
	 * is prohibitively expensive if they are created too often, such as what
	 * happens in oneOfType() for any type before the one that matched.
	 */
	function PropTypeError(message) {
	  this.message = message;
	  this.stack = '';
	}
	// Make `instanceof Error` still work for returned errors.
	PropTypeError.prototype = Error.prototype;
	
	function createChainableTypeChecker(validate) {
	  if (process.env.NODE_ENV !== 'production') {
	    var manualPropTypeCallCache = {};
	  }
	  function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	    componentName = componentName || ANONYMOUS;
	    propFullName = propFullName || propName;
	    if (process.env.NODE_ENV !== 'production') {
	      if (secret !== ReactPropTypesSecret && typeof console !== 'undefined') {
	        var cacheKey = componentName + ':' + propName;
	        if (!manualPropTypeCallCache[cacheKey]) {
	          process.env.NODE_ENV !== 'production' ? warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will not work in production with the next major version. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName) : void 0;
	          manualPropTypeCallCache[cacheKey] = true;
	        }
	      }
	    }
	    if (props[propName] == null) {
	      var locationName = ReactPropTypeLocationNames[location];
	      if (isRequired) {
	        if (props[propName] === null) {
	          return new PropTypeError('The ' + locationName + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	        }
	        return new PropTypeError('The ' + locationName + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	      }
	      return null;
	    } else {
	      return validate(props, propName, componentName, location, propFullName);
	    }
	  }
	
	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);
	
	  return chainedCheckType;
	}
	
	function createPrimitiveTypeChecker(expectedType) {
	  function validate(props, propName, componentName, location, propFullName, secret) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== expectedType) {
	      var locationName = ReactPropTypeLocationNames[location];
	      // `propValue` being instance of, say, date/regexp, pass the 'object'
	      // check, but we can offer a more precise error message here rather than
	      // 'of type `object`'.
	      var preciseType = getPreciseType(propValue);
	
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createAnyTypeChecker() {
	  return createChainableTypeChecker(emptyFunction.thatReturns(null));
	}
	
	function createArrayOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (typeof typeChecker !== 'function') {
	      return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	    }
	    var propValue = props[propName];
	    if (!Array.isArray(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	    }
	    for (var i = 0; i < propValue.length; i++) {
	      var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	      if (error instanceof Error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createElementTypeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    if (!ReactElement.isValidElement(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createInstanceTypeChecker(expectedClass) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!(props[propName] instanceof expectedClass)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var expectedClassName = expectedClass.name || ANONYMOUS;
	      var actualClassName = getClassName(props[propName]);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createEnumTypeChecker(expectedValues) {
	  if (!Array.isArray(expectedValues)) {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	    return emptyFunction.thatReturnsNull;
	  }
	
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    for (var i = 0; i < expectedValues.length; i++) {
	      if (is(propValue, expectedValues[i])) {
	        return null;
	      }
	    }
	
	    var locationName = ReactPropTypeLocationNames[location];
	    var valuesString = JSON.stringify(expectedValues);
	    return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createObjectOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (typeof typeChecker !== 'function') {
	      return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	    }
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	    }
	    for (var key in propValue) {
	      if (propValue.hasOwnProperty(key)) {
	        var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createUnionTypeChecker(arrayOfTypeCheckers) {
	  if (!Array.isArray(arrayOfTypeCheckers)) {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	    return emptyFunction.thatReturnsNull;
	  }
	
	  function validate(props, propName, componentName, location, propFullName) {
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	        return null;
	      }
	    }
	
	    var locationName = ReactPropTypeLocationNames[location];
	    return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createNodeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!isNode(props[propName])) {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createShapeTypeChecker(shapeTypes) {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	    }
	    for (var key in shapeTypes) {
	      var checker = shapeTypes[key];
	      if (!checker) {
	        continue;
	      }
	      var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	      if (error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function isNode(propValue) {
	  switch (typeof propValue) {
	    case 'number':
	    case 'string':
	    case 'undefined':
	      return true;
	    case 'boolean':
	      return !propValue;
	    case 'object':
	      if (Array.isArray(propValue)) {
	        return propValue.every(isNode);
	      }
	      if (propValue === null || ReactElement.isValidElement(propValue)) {
	        return true;
	      }
	
	      var iteratorFn = getIteratorFn(propValue);
	      if (iteratorFn) {
	        var iterator = iteratorFn.call(propValue);
	        var step;
	        if (iteratorFn !== propValue.entries) {
	          while (!(step = iterator.next()).done) {
	            if (!isNode(step.value)) {
	              return false;
	            }
	          }
	        } else {
	          // Iterator will provide entry [k,v] tuples rather than values.
	          while (!(step = iterator.next()).done) {
	            var entry = step.value;
	            if (entry) {
	              if (!isNode(entry[1])) {
	                return false;
	              }
	            }
	          }
	        }
	      } else {
	        return false;
	      }
	
	      return true;
	    default:
	      return false;
	  }
	}
	
	function isSymbol(propType, propValue) {
	  // Native Symbol.
	  if (propType === 'symbol') {
	    return true;
	  }
	
	  // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	  if (propValue['@@toStringTag'] === 'Symbol') {
	    return true;
	  }
	
	  // Fallback for non-spec compliant Symbols which are polyfilled.
	  if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	    return true;
	  }
	
	  return false;
	}
	
	// Equivalent of `typeof` but with special handling for array and regexp.
	function getPropType(propValue) {
	  var propType = typeof propValue;
	  if (Array.isArray(propValue)) {
	    return 'array';
	  }
	  if (propValue instanceof RegExp) {
	    // Old webkits (at least until Android 4.0) return 'function' rather than
	    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	    // passes PropTypes.object.
	    return 'object';
	  }
	  if (isSymbol(propType, propValue)) {
	    return 'symbol';
	  }
	  return propType;
	}
	
	// This handles more types than `getPropType`. Only used for error messages.
	// See `createPrimitiveTypeChecker`.
	function getPreciseType(propValue) {
	  var propType = getPropType(propValue);
	  if (propType === 'object') {
	    if (propValue instanceof Date) {
	      return 'date';
	    } else if (propValue instanceof RegExp) {
	      return 'regexp';
	    }
	  }
	  return propType;
	}
	
	// Returns class name of the object, if any.
	function getClassName(propValue) {
	  if (!propValue.constructor || !propValue.constructor.name) {
	    return ANONYMOUS;
	  }
	  return propValue.constructor.name;
	}
	
	module.exports = ReactPropTypes;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 30 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	module.exports = '15.4.2';

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	'use strict';
	
	var _prodInvariant = __webpack_require__(7);
	
	var ReactElement = __webpack_require__(9);
	
	var invariant = __webpack_require__(8);
	
	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
	 *
	 * The current implementation of this function assumes that a single child gets
	 * passed without a wrapper, but the purpose of this helper function is to
	 * abstract away the particular structure of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactElement} The first and only `ReactElement` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  !ReactElement.isValidElement(children) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'React.Children.only expected to receive a single React element child.') : _prodInvariant('143') : void 0;
	  return children;
	}
	
	module.exports = onlyChild;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.default = activeItem;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _immutable = __webpack_require__(33);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// TODO: Split this out as a separate react component and add as a dependency
	
	function activeItem(WrappedComponent) {
	  return function (_React$Component) {
	    _inherits(ActiveItem, _React$Component);
	
	    function ActiveItem(props) {
	      _classCallCheck(this, ActiveItem);
	
	      var _this = _possibleConstructorReturn(this, (ActiveItem.__proto__ || Object.getPrototypeOf(ActiveItem)).call(this, props));
	
	      _this.state = { items: _this.props.items };
	      _this._bindInit();
	      return _this;
	    }
	
	    _createClass(ActiveItem, [{
	      key: '_bindInit',
	      value: function _bindInit() {
	        this.getActiveItem = this.getActiveItem.bind(this);
	        this.setActiveItem = this.setActiveItem.bind(this);
	        this.getActiveItemIndex = this.getActiveItemIndex.bind(this);
	        this._hasFocus = this._hasFocus.bind(this);
	        this._updateFocus = this._updateFocus.bind(this);
	        this._immutableAssets = this._immutableAssets.bind(this);
	        this._unFocused = this._unFocused.bind(this);
	        this._handlers = this._handlers.bind(this);
	      }
	    }, {
	      key: 'setActiveItem',
	      value: function setActiveItem(i, e) {
	        if (typeof e != 'undefined') {
	          e.preventDefault();
	        }
	        this.setState({ items: this._updateFocus(this._unFocused(), i, true).toJS() });
	      }
	    }, {
	      key: 'getActiveItem',
	      value: function getActiveItem() {
	        return this.state.items.find(this._hasFocus);
	      }
	    }, {
	      key: 'getActiveItemIndex',
	      value: function getActiveItemIndex() {
	        return this.state.items.findIndex(this._hasFocus);
	      }
	
	      // "private"
	
	    }, {
	      key: '_hasFocus',
	      value: function _hasFocus(item) {
	        return item.focus == true;
	      }
	    }, {
	      key: '_unFocused',
	      value: function _unFocused() {
	        return this._updateFocus(this._immutableAssets(), this.getActiveItemIndex(), false);
	      }
	    }, {
	      key: '_updateFocus',
	      value: function _updateFocus(list, i, status) {
	        return list.update(i, function (item) {
	          return item.set('focus', status);
	        });
	      }
	    }, {
	      key: '_immutableAssets',
	      value: function _immutableAssets() {
	        return new _immutable2.default.fromJS(this.state.items);
	      }
	    }, {
	      key: '_handlers',
	      value: function _handlers() {
	        return {
	          setActiveItem: this.setActiveItem.bind(this),
	          getActiveItem: this.getActiveItem.bind(this),
	          getActiveItemIndex: this.getActiveItemIndex.bind(this)
	        };
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        return _react2.default.createElement(WrappedComponent, _extends({}, this.props, this.state, this._handlers()));
	      }
	    }]);
	
	    return ActiveItem;
	  }(_react2.default.Component);
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2014-2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Immutable = factory());
	}(this, function () { 'use strict';var SLICE$0 = Array.prototype.slice;
	
	  function createClass(ctor, superClass) {
	    if (superClass) {
	      ctor.prototype = Object.create(superClass.prototype);
	    }
	    ctor.prototype.constructor = ctor;
	  }
	
	  function Iterable(value) {
	      return isIterable(value) ? value : Seq(value);
	    }
	
	
	  createClass(KeyedIterable, Iterable);
	    function KeyedIterable(value) {
	      return isKeyed(value) ? value : KeyedSeq(value);
	    }
	
	
	  createClass(IndexedIterable, Iterable);
	    function IndexedIterable(value) {
	      return isIndexed(value) ? value : IndexedSeq(value);
	    }
	
	
	  createClass(SetIterable, Iterable);
	    function SetIterable(value) {
	      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
	    }
	
	
	
	  function isIterable(maybeIterable) {
	    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
	  }
	
	  function isKeyed(maybeKeyed) {
	    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
	  }
	
	  function isIndexed(maybeIndexed) {
	    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
	  }
	
	  function isAssociative(maybeAssociative) {
	    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
	  }
	
	  function isOrdered(maybeOrdered) {
	    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
	  }
	
	  Iterable.isIterable = isIterable;
	  Iterable.isKeyed = isKeyed;
	  Iterable.isIndexed = isIndexed;
	  Iterable.isAssociative = isAssociative;
	  Iterable.isOrdered = isOrdered;
	
	  Iterable.Keyed = KeyedIterable;
	  Iterable.Indexed = IndexedIterable;
	  Iterable.Set = SetIterable;
	
	
	  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';
	
	  // Used for setting prototype methods that IE8 chokes on.
	  var DELETE = 'delete';
	
	  // Constants describing the size of trie nodes.
	  var SHIFT = 5; // Resulted in best performance after ______?
	  var SIZE = 1 << SHIFT;
	  var MASK = SIZE - 1;
	
	  // A consistent shared value representing "not set" which equals nothing other
	  // than itself, and nothing that could be provided externally.
	  var NOT_SET = {};
	
	  // Boolean references, Rough equivalent of `bool &`.
	  var CHANGE_LENGTH = { value: false };
	  var DID_ALTER = { value: false };
	
	  function MakeRef(ref) {
	    ref.value = false;
	    return ref;
	  }
	
	  function SetRef(ref) {
	    ref && (ref.value = true);
	  }
	
	  // A function which returns a value representing an "owner" for transient writes
	  // to tries. The return value will only ever equal itself, and will not equal
	  // the return of any subsequent call of this function.
	  function OwnerID() {}
	
	  // http://jsperf.com/copy-array-inline
	  function arrCopy(arr, offset) {
	    offset = offset || 0;
	    var len = Math.max(0, arr.length - offset);
	    var newArr = new Array(len);
	    for (var ii = 0; ii < len; ii++) {
	      newArr[ii] = arr[ii + offset];
	    }
	    return newArr;
	  }
	
	  function ensureSize(iter) {
	    if (iter.size === undefined) {
	      iter.size = iter.__iterate(returnTrue);
	    }
	    return iter.size;
	  }
	
	  function wrapIndex(iter, index) {
	    // This implements "is array index" which the ECMAString spec defines as:
	    //
	    //     A String property name P is an array index if and only if
	    //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
	    //     to 2^32−1.
	    //
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
	    if (typeof index !== 'number') {
	      var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
	      if ('' + uint32Index !== index || uint32Index === 4294967295) {
	        return NaN;
	      }
	      index = uint32Index;
	    }
	    return index < 0 ? ensureSize(iter) + index : index;
	  }
	
	  function returnTrue() {
	    return true;
	  }
	
	  function wholeSlice(begin, end, size) {
	    return (begin === 0 || (size !== undefined && begin <= -size)) &&
	      (end === undefined || (size !== undefined && end >= size));
	  }
	
	  function resolveBegin(begin, size) {
	    return resolveIndex(begin, size, 0);
	  }
	
	  function resolveEnd(end, size) {
	    return resolveIndex(end, size, size);
	  }
	
	  function resolveIndex(index, size, defaultIndex) {
	    return index === undefined ?
	      defaultIndex :
	      index < 0 ?
	        Math.max(0, size + index) :
	        size === undefined ?
	          index :
	          Math.min(size, index);
	  }
	
	  /* global Symbol */
	
	  var ITERATE_KEYS = 0;
	  var ITERATE_VALUES = 1;
	  var ITERATE_ENTRIES = 2;
	
	  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator';
	
	  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;
	
	
	  function Iterator(next) {
	      this.next = next;
	    }
	
	    Iterator.prototype.toString = function() {
	      return '[Iterator]';
	    };
	
	
	  Iterator.KEYS = ITERATE_KEYS;
	  Iterator.VALUES = ITERATE_VALUES;
	  Iterator.ENTRIES = ITERATE_ENTRIES;
	
	  Iterator.prototype.inspect =
	  Iterator.prototype.toSource = function () { return this.toString(); }
	  Iterator.prototype[ITERATOR_SYMBOL] = function () {
	    return this;
	  };
	
	
	  function iteratorValue(type, k, v, iteratorResult) {
	    var value = type === 0 ? k : type === 1 ? v : [k, v];
	    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
	      value: value, done: false
	    });
	    return iteratorResult;
	  }
	
	  function iteratorDone() {
	    return { value: undefined, done: true };
	  }
	
	  function hasIterator(maybeIterable) {
	    return !!getIteratorFn(maybeIterable);
	  }
	
	  function isIterator(maybeIterator) {
	    return maybeIterator && typeof maybeIterator.next === 'function';
	  }
	
	  function getIterator(iterable) {
	    var iteratorFn = getIteratorFn(iterable);
	    return iteratorFn && iteratorFn.call(iterable);
	  }
	
	  function getIteratorFn(iterable) {
	    var iteratorFn = iterable && (
	      (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
	      iterable[FAUX_ITERATOR_SYMBOL]
	    );
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }
	
	  function isArrayLike(value) {
	    return value && typeof value.length === 'number';
	  }
	
	  createClass(Seq, Iterable);
	    function Seq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        isIterable(value) ? value.toSeq() : seqFromValue(value);
	    }
	
	    Seq.of = function(/*...values*/) {
	      return Seq(arguments);
	    };
	
	    Seq.prototype.toSeq = function() {
	      return this;
	    };
	
	    Seq.prototype.toString = function() {
	      return this.__toString('Seq {', '}');
	    };
	
	    Seq.prototype.cacheResult = function() {
	      if (!this._cache && this.__iterateUncached) {
	        this._cache = this.entrySeq().toArray();
	        this.size = this._cache.length;
	      }
	      return this;
	    };
	
	    // abstract __iterateUncached(fn, reverse)
	
	    Seq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, true);
	    };
	
	    // abstract __iteratorUncached(type, reverse)
	
	    Seq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, true);
	    };
	
	
	
	  createClass(KeyedSeq, Seq);
	    function KeyedSeq(value) {
	      return value === null || value === undefined ?
	        emptySequence().toKeyedSeq() :
	        isIterable(value) ?
	          (isKeyed(value) ? value.toSeq() : value.fromEntrySeq()) :
	          keyedSeqFromValue(value);
	    }
	
	    KeyedSeq.prototype.toKeyedSeq = function() {
	      return this;
	    };
	
	
	
	  createClass(IndexedSeq, Seq);
	    function IndexedSeq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
	    }
	
	    IndexedSeq.of = function(/*...values*/) {
	      return IndexedSeq(arguments);
	    };
	
	    IndexedSeq.prototype.toIndexedSeq = function() {
	      return this;
	    };
	
	    IndexedSeq.prototype.toString = function() {
	      return this.__toString('Seq [', ']');
	    };
	
	    IndexedSeq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, false);
	    };
	
	    IndexedSeq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, false);
	    };
	
	
	
	  createClass(SetSeq, Seq);
	    function SetSeq(value) {
	      return (
	        value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value
	      ).toSetSeq();
	    }
	
	    SetSeq.of = function(/*...values*/) {
	      return SetSeq(arguments);
	    };
	
	    SetSeq.prototype.toSetSeq = function() {
	      return this;
	    };
	
	
	
	  Seq.isSeq = isSeq;
	  Seq.Keyed = KeyedSeq;
	  Seq.Set = SetSeq;
	  Seq.Indexed = IndexedSeq;
	
	  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';
	
	  Seq.prototype[IS_SEQ_SENTINEL] = true;
	
	
	
	  createClass(ArraySeq, IndexedSeq);
	    function ArraySeq(array) {
	      this._array = array;
	      this.size = array.length;
	    }
	
	    ArraySeq.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
	    };
	
	    ArraySeq.prototype.__iterate = function(fn, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };
	
	    ArraySeq.prototype.__iterator = function(type, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      var ii = 0;
	      return new Iterator(function() 
	        {return ii > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++])}
	      );
	    };
	
	
	
	  createClass(ObjectSeq, KeyedSeq);
	    function ObjectSeq(object) {
	      var keys = Object.keys(object);
	      this._object = object;
	      this._keys = keys;
	      this.size = keys.length;
	    }
	
	    ObjectSeq.prototype.get = function(key, notSetValue) {
	      if (notSetValue !== undefined && !this.has(key)) {
	        return notSetValue;
	      }
	      return this._object[key];
	    };
	
	    ObjectSeq.prototype.has = function(key) {
	      return this._object.hasOwnProperty(key);
	    };
	
	    ObjectSeq.prototype.__iterate = function(fn, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        if (fn(object[key], key, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };
	
	    ObjectSeq.prototype.__iterator = function(type, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      var ii = 0;
	      return new Iterator(function()  {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, key, object[key]);
	      });
	    };
	
	  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;
	
	
	  createClass(IterableSeq, IndexedSeq);
	    function IterableSeq(iterable) {
	      this._iterable = iterable;
	      this.size = iterable.length || iterable.size;
	    }
	
	    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      var iterations = 0;
	      if (isIterator(iterator)) {
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (fn(step.value, iterations++, this) === false) {
	            break;
	          }
	        }
	      }
	      return iterations;
	    };
	
	    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      if (!isIterator(iterator)) {
	        return new Iterator(iteratorDone);
	      }
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step : iteratorValue(type, iterations++, step.value);
	      });
	    };
	
	
	
	  createClass(IteratorSeq, IndexedSeq);
	    function IteratorSeq(iterator) {
	      this._iterator = iterator;
	      this._iteratorCache = [];
	    }
	
	    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      while (iterations < cache.length) {
	        if (fn(cache[iterations], iterations++, this) === false) {
	          return iterations;
	        }
	      }
	      var step;
	      while (!(step = iterator.next()).done) {
	        var val = step.value;
	        cache[iterations] = val;
	        if (fn(val, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };
	
	    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      return new Iterator(function()  {
	        if (iterations >= cache.length) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          cache[iterations] = step.value;
	        }
	        return iteratorValue(type, iterations, cache[iterations++]);
	      });
	    };
	
	
	
	
	  // # pragma Helper functions
	
	  function isSeq(maybeSeq) {
	    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
	  }
	
	  var EMPTY_SEQ;
	
	  function emptySequence() {
	    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
	  }
	
	  function keyedSeqFromValue(value) {
	    var seq =
	      Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() :
	      isIterator(value) ? new IteratorSeq(value).fromEntrySeq() :
	      hasIterator(value) ? new IterableSeq(value).fromEntrySeq() :
	      typeof value === 'object' ? new ObjectSeq(value) :
	      undefined;
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of [k, v] entries, '+
	        'or keyed object: ' + value
	      );
	    }
	    return seq;
	  }
	
	  function indexedSeqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value);
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values: ' + value
	      );
	    }
	    return seq;
	  }
	
	  function seqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value) ||
	      (typeof value === 'object' && new ObjectSeq(value));
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values, or keyed object: ' + value
	      );
	    }
	    return seq;
	  }
	
	  function maybeIndexedSeqFromValue(value) {
	    return (
	      isArrayLike(value) ? new ArraySeq(value) :
	      isIterator(value) ? new IteratorSeq(value) :
	      hasIterator(value) ? new IterableSeq(value) :
	      undefined
	    );
	  }
	
	  function seqIterate(seq, fn, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    }
	    return seq.__iterateUncached(fn, reverse);
	  }
	
	  function seqIterator(seq, type, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      var ii = 0;
	      return new Iterator(function()  {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
	      });
	    }
	    return seq.__iteratorUncached(type, reverse);
	  }
	
	  function fromJS(json, converter) {
	    return converter ?
	      fromJSWith(converter, json, '', {'': json}) :
	      fromJSDefault(json);
	  }
	
	  function fromJSWith(converter, json, key, parentJSON) {
	    if (Array.isArray(json)) {
	      return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    if (isPlainObj(json)) {
	      return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    return json;
	  }
	
	  function fromJSDefault(json) {
	    if (Array.isArray(json)) {
	      return IndexedSeq(json).map(fromJSDefault).toList();
	    }
	    if (isPlainObj(json)) {
	      return KeyedSeq(json).map(fromJSDefault).toMap();
	    }
	    return json;
	  }
	
	  function isPlainObj(value) {
	    return value && (value.constructor === Object || value.constructor === undefined);
	  }
	
	  /**
	   * An extension of the "same-value" algorithm as [described for use by ES6 Map
	   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
	   *
	   * NaN is considered the same as NaN, however -0 and 0 are considered the same
	   * value, which is different from the algorithm described by
	   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
	   *
	   * This is extended further to allow Objects to describe the values they
	   * represent, by way of `valueOf` or `equals` (and `hashCode`).
	   *
	   * Note: because of this extension, the key equality of Immutable.Map and the
	   * value equality of Immutable.Set will differ from ES6 Map and Set.
	   *
	   * ### Defining custom values
	   *
	   * The easiest way to describe the value an object represents is by implementing
	   * `valueOf`. For example, `Date` represents a value by returning a unix
	   * timestamp for `valueOf`:
	   *
	   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
	   *     var date2 = new Date(1234567890000);
	   *     date1.valueOf(); // 1234567890000
	   *     assert( date1 !== date2 );
	   *     assert( Immutable.is( date1, date2 ) );
	   *
	   * Note: overriding `valueOf` may have other implications if you use this object
	   * where JavaScript expects a primitive, such as implicit string coercion.
	   *
	   * For more complex types, especially collections, implementing `valueOf` may
	   * not be performant. An alternative is to implement `equals` and `hashCode`.
	   *
	   * `equals` takes another object, presumably of similar type, and returns true
	   * if the it is equal. Equality is symmetrical, so the same result should be
	   * returned if this and the argument are flipped.
	   *
	   *     assert( a.equals(b) === b.equals(a) );
	   *
	   * `hashCode` returns a 32bit integer number representing the object which will
	   * be used to determine how to store the value object in a Map or Set. You must
	   * provide both or neither methods, one must not exist without the other.
	   *
	   * Also, an important relationship between these methods must be upheld: if two
	   * values are equal, they *must* return the same hashCode. If the values are not
	   * equal, they might have the same hashCode; this is called a hash collision,
	   * and while undesirable for performance reasons, it is acceptable.
	   *
	   *     if (a.equals(b)) {
	   *       assert( a.hashCode() === b.hashCode() );
	   *     }
	   *
	   * All Immutable collections implement `equals` and `hashCode`.
	   *
	   */
	  function is(valueA, valueB) {
	    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	      return true;
	    }
	    if (!valueA || !valueB) {
	      return false;
	    }
	    if (typeof valueA.valueOf === 'function' &&
	        typeof valueB.valueOf === 'function') {
	      valueA = valueA.valueOf();
	      valueB = valueB.valueOf();
	      if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	        return true;
	      }
	      if (!valueA || !valueB) {
	        return false;
	      }
	    }
	    if (typeof valueA.equals === 'function' &&
	        typeof valueB.equals === 'function' &&
	        valueA.equals(valueB)) {
	      return true;
	    }
	    return false;
	  }
	
	  function deepEqual(a, b) {
	    if (a === b) {
	      return true;
	    }
	
	    if (
	      !isIterable(b) ||
	      a.size !== undefined && b.size !== undefined && a.size !== b.size ||
	      a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash ||
	      isKeyed(a) !== isKeyed(b) ||
	      isIndexed(a) !== isIndexed(b) ||
	      isOrdered(a) !== isOrdered(b)
	    ) {
	      return false;
	    }
	
	    if (a.size === 0 && b.size === 0) {
	      return true;
	    }
	
	    var notAssociative = !isAssociative(a);
	
	    if (isOrdered(a)) {
	      var entries = a.entries();
	      return b.every(function(v, k)  {
	        var entry = entries.next().value;
	        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
	      }) && entries.next().done;
	    }
	
	    var flipped = false;
	
	    if (a.size === undefined) {
	      if (b.size === undefined) {
	        if (typeof a.cacheResult === 'function') {
	          a.cacheResult();
	        }
	      } else {
	        flipped = true;
	        var _ = a;
	        a = b;
	        b = _;
	      }
	    }
	
	    var allEqual = true;
	    var bSize = b.__iterate(function(v, k)  {
	      if (notAssociative ? !a.has(v) :
	          flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
	        allEqual = false;
	        return false;
	      }
	    });
	
	    return allEqual && a.size === bSize;
	  }
	
	  createClass(Repeat, IndexedSeq);
	
	    function Repeat(value, times) {
	      if (!(this instanceof Repeat)) {
	        return new Repeat(value, times);
	      }
	      this._value = value;
	      this.size = times === undefined ? Infinity : Math.max(0, times);
	      if (this.size === 0) {
	        if (EMPTY_REPEAT) {
	          return EMPTY_REPEAT;
	        }
	        EMPTY_REPEAT = this;
	      }
	    }
	
	    Repeat.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Repeat []';
	      }
	      return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
	    };
	
	    Repeat.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._value : notSetValue;
	    };
	
	    Repeat.prototype.includes = function(searchValue) {
	      return is(this._value, searchValue);
	    };
	
	    Repeat.prototype.slice = function(begin, end) {
	      var size = this.size;
	      return wholeSlice(begin, end, size) ? this :
	        new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
	    };
	
	    Repeat.prototype.reverse = function() {
	      return this;
	    };
	
	    Repeat.prototype.indexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return 0;
	      }
	      return -1;
	    };
	
	    Repeat.prototype.lastIndexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return this.size;
	      }
	      return -1;
	    };
	
	    Repeat.prototype.__iterate = function(fn, reverse) {
	      for (var ii = 0; ii < this.size; ii++) {
	        if (fn(this._value, ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };
	
	    Repeat.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      var ii = 0;
	      return new Iterator(function() 
	        {return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone()}
	      );
	    };
	
	    Repeat.prototype.equals = function(other) {
	      return other instanceof Repeat ?
	        is(this._value, other._value) :
	        deepEqual(other);
	    };
	
	
	  var EMPTY_REPEAT;
	
	  function invariant(condition, error) {
	    if (!condition) throw new Error(error);
	  }
	
	  createClass(Range, IndexedSeq);
	
	    function Range(start, end, step) {
	      if (!(this instanceof Range)) {
	        return new Range(start, end, step);
	      }
	      invariant(step !== 0, 'Cannot step a Range by 0');
	      start = start || 0;
	      if (end === undefined) {
	        end = Infinity;
	      }
	      step = step === undefined ? 1 : Math.abs(step);
	      if (end < start) {
	        step = -step;
	      }
	      this._start = start;
	      this._end = end;
	      this._step = step;
	      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
	      if (this.size === 0) {
	        if (EMPTY_RANGE) {
	          return EMPTY_RANGE;
	        }
	        EMPTY_RANGE = this;
	      }
	    }
	
	    Range.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Range []';
	      }
	      return 'Range [ ' +
	        this._start + '...' + this._end +
	        (this._step !== 1 ? ' by ' + this._step : '') +
	      ' ]';
	    };
	
	    Range.prototype.get = function(index, notSetValue) {
	      return this.has(index) ?
	        this._start + wrapIndex(this, index) * this._step :
	        notSetValue;
	    };
	
	    Range.prototype.includes = function(searchValue) {
	      var possibleIndex = (searchValue - this._start) / this._step;
	      return possibleIndex >= 0 &&
	        possibleIndex < this.size &&
	        possibleIndex === Math.floor(possibleIndex);
	    };
	
	    Range.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      begin = resolveBegin(begin, this.size);
	      end = resolveEnd(end, this.size);
	      if (end <= begin) {
	        return new Range(0, 0);
	      }
	      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
	    };
	
	    Range.prototype.indexOf = function(searchValue) {
	      var offsetValue = searchValue - this._start;
	      if (offsetValue % this._step === 0) {
	        var index = offsetValue / this._step;
	        if (index >= 0 && index < this.size) {
	          return index
	        }
	      }
	      return -1;
	    };
	
	    Range.prototype.lastIndexOf = function(searchValue) {
	      return this.indexOf(searchValue);
	    };
	
	    Range.prototype.__iterate = function(fn, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(value, ii, this) === false) {
	          return ii + 1;
	        }
	        value += reverse ? -step : step;
	      }
	      return ii;
	    };
	
	    Range.prototype.__iterator = function(type, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      var ii = 0;
	      return new Iterator(function()  {
	        var v = value;
	        value += reverse ? -step : step;
	        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
	      });
	    };
	
	    Range.prototype.equals = function(other) {
	      return other instanceof Range ?
	        this._start === other._start &&
	        this._end === other._end &&
	        this._step === other._step :
	        deepEqual(this, other);
	    };
	
	
	  var EMPTY_RANGE;
	
	  createClass(Collection, Iterable);
	    function Collection() {
	      throw TypeError('Abstract');
	    }
	
	
	  createClass(KeyedCollection, Collection);function KeyedCollection() {}
	
	  createClass(IndexedCollection, Collection);function IndexedCollection() {}
	
	  createClass(SetCollection, Collection);function SetCollection() {}
	
	
	  Collection.Keyed = KeyedCollection;
	  Collection.Indexed = IndexedCollection;
	  Collection.Set = SetCollection;
	
	  var imul =
	    typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ?
	    Math.imul :
	    function imul(a, b) {
	      a = a | 0; // int
	      b = b | 0; // int
	      var c = a & 0xffff;
	      var d = b & 0xffff;
	      // Shift by 0 fixes the sign on the high part.
	      return (c * d) + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0) | 0; // int
	    };
	
	  // v8 has an optimization for storing 31-bit signed numbers.
	  // Values which have either 00 or 11 as the high order bits qualify.
	  // This function drops the highest order bit in a signed number, maintaining
	  // the sign bit.
	  function smi(i32) {
	    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xBFFFFFFF);
	  }
	
	  function hash(o) {
	    if (o === false || o === null || o === undefined) {
	      return 0;
	    }
	    if (typeof o.valueOf === 'function') {
	      o = o.valueOf();
	      if (o === false || o === null || o === undefined) {
	        return 0;
	      }
	    }
	    if (o === true) {
	      return 1;
	    }
	    var type = typeof o;
	    if (type === 'number') {
	      if (o !== o || o === Infinity) {
	        return 0;
	      }
	      var h = o | 0;
	      if (h !== o) {
	        h ^= o * 0xFFFFFFFF;
	      }
	      while (o > 0xFFFFFFFF) {
	        o /= 0xFFFFFFFF;
	        h ^= o;
	      }
	      return smi(h);
	    }
	    if (type === 'string') {
	      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
	    }
	    if (typeof o.hashCode === 'function') {
	      return o.hashCode();
	    }
	    if (type === 'object') {
	      return hashJSObj(o);
	    }
	    if (typeof o.toString === 'function') {
	      return hashString(o.toString());
	    }
	    throw new Error('Value type ' + type + ' cannot be hashed.');
	  }
	
	  function cachedHashString(string) {
	    var hash = stringHashCache[string];
	    if (hash === undefined) {
	      hash = hashString(string);
	      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
	        STRING_HASH_CACHE_SIZE = 0;
	        stringHashCache = {};
	      }
	      STRING_HASH_CACHE_SIZE++;
	      stringHashCache[string] = hash;
	    }
	    return hash;
	  }
	
	  // http://jsperf.com/hashing-strings
	  function hashString(string) {
	    // This is the hash from JVM
	    // The hash code for a string is computed as
	    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
	    // where s[i] is the ith character of the string and n is the length of
	    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
	    // (exclusive) by dropping high bits.
	    var hash = 0;
	    for (var ii = 0; ii < string.length; ii++) {
	      hash = 31 * hash + string.charCodeAt(ii) | 0;
	    }
	    return smi(hash);
	  }
	
	  function hashJSObj(obj) {
	    var hash;
	    if (usingWeakMap) {
	      hash = weakMap.get(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }
	
	    hash = obj[UID_HASH_KEY];
	    if (hash !== undefined) {
	      return hash;
	    }
	
	    if (!canDefineProperty) {
	      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
	      if (hash !== undefined) {
	        return hash;
	      }
	
	      hash = getIENodeHash(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }
	
	    hash = ++objHashUID;
	    if (objHashUID & 0x40000000) {
	      objHashUID = 0;
	    }
	
	    if (usingWeakMap) {
	      weakMap.set(obj, hash);
	    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
	      throw new Error('Non-extensible objects are not allowed as keys.');
	    } else if (canDefineProperty) {
	      Object.defineProperty(obj, UID_HASH_KEY, {
	        'enumerable': false,
	        'configurable': false,
	        'writable': false,
	        'value': hash
	      });
	    } else if (obj.propertyIsEnumerable !== undefined &&
	               obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
	      // Since we can't define a non-enumerable property on the object
	      // we'll hijack one of the less-used non-enumerable properties to
	      // save our hash on it. Since this is a function it will not show up in
	      // `JSON.stringify` which is what we want.
	      obj.propertyIsEnumerable = function() {
	        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
	      };
	      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
	    } else if (obj.nodeType !== undefined) {
	      // At this point we couldn't get the IE `uniqueID` to use as a hash
	      // and we couldn't use a non-enumerable property to exploit the
	      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
	      // itself.
	      obj[UID_HASH_KEY] = hash;
	    } else {
	      throw new Error('Unable to set a non-enumerable property on object.');
	    }
	
	    return hash;
	  }
	
	  // Get references to ES5 object methods.
	  var isExtensible = Object.isExtensible;
	
	  // True if Object.defineProperty works as expected. IE8 fails this test.
	  var canDefineProperty = (function() {
	    try {
	      Object.defineProperty({}, '@', {});
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }());
	
	  // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
	  // and avoid memory leaks from the IE cloneNode bug.
	  function getIENodeHash(node) {
	    if (node && node.nodeType > 0) {
	      switch (node.nodeType) {
	        case 1: // Element
	          return node.uniqueID;
	        case 9: // Document
	          return node.documentElement && node.documentElement.uniqueID;
	      }
	    }
	  }
	
	  // If possible, use a WeakMap.
	  var usingWeakMap = typeof WeakMap === 'function';
	  var weakMap;
	  if (usingWeakMap) {
	    weakMap = new WeakMap();
	  }
	
	  var objHashUID = 0;
	
	  var UID_HASH_KEY = '__immutablehash__';
	  if (typeof Symbol === 'function') {
	    UID_HASH_KEY = Symbol(UID_HASH_KEY);
	  }
	
	  var STRING_HASH_CACHE_MIN_STRLEN = 16;
	  var STRING_HASH_CACHE_MAX_SIZE = 255;
	  var STRING_HASH_CACHE_SIZE = 0;
	  var stringHashCache = {};
	
	  function assertNotInfinite(size) {
	    invariant(
	      size !== Infinity,
	      'Cannot perform this action with an infinite size.'
	    );
	  }
	
	  createClass(Map, KeyedCollection);
	
	    // @pragma Construction
	
	    function Map(value) {
	      return value === null || value === undefined ? emptyMap() :
	        isMap(value) && !isOrdered(value) ? value :
	        emptyMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }
	
	    Map.of = function() {var keyValues = SLICE$0.call(arguments, 0);
	      return emptyMap().withMutations(function(map ) {
	        for (var i = 0; i < keyValues.length; i += 2) {
	          if (i + 1 >= keyValues.length) {
	            throw new Error('Missing value for key: ' + keyValues[i]);
	          }
	          map.set(keyValues[i], keyValues[i + 1]);
	        }
	      });
	    };
	
	    Map.prototype.toString = function() {
	      return this.__toString('Map {', '}');
	    };
	
	    // @pragma Access
	
	    Map.prototype.get = function(k, notSetValue) {
	      return this._root ?
	        this._root.get(0, undefined, k, notSetValue) :
	        notSetValue;
	    };
	
	    // @pragma Modification
	
	    Map.prototype.set = function(k, v) {
	      return updateMap(this, k, v);
	    };
	
	    Map.prototype.setIn = function(keyPath, v) {
	      return this.updateIn(keyPath, NOT_SET, function()  {return v});
	    };
	
	    Map.prototype.remove = function(k) {
	      return updateMap(this, k, NOT_SET);
	    };
	
	    Map.prototype.deleteIn = function(keyPath) {
	      return this.updateIn(keyPath, function()  {return NOT_SET});
	    };
	
	    Map.prototype.update = function(k, notSetValue, updater) {
	      return arguments.length === 1 ?
	        k(this) :
	        this.updateIn([k], notSetValue, updater);
	    };
	
	    Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
	      if (!updater) {
	        updater = notSetValue;
	        notSetValue = undefined;
	      }
	      var updatedValue = updateInDeepMap(
	        this,
	        forceIterator(keyPath),
	        notSetValue,
	        updater
	      );
	      return updatedValue === NOT_SET ? undefined : updatedValue;
	    };
	
	    Map.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._root = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyMap();
	    };
	
	    // @pragma Composition
	
	    Map.prototype.merge = function(/*...iters*/) {
	      return mergeIntoMapWith(this, undefined, arguments);
	    };
	
	    Map.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, merger, iters);
	    };
	
	    Map.prototype.mergeIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.merge === 'function' ?
	          m.merge.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };
	
	    Map.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoMapWith(this, deepMerger, arguments);
	    };
	
	    Map.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, deepMergerWith(merger), iters);
	    };
	
	    Map.prototype.mergeDeepIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.mergeDeep === 'function' ?
	          m.mergeDeep.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };
	
	    Map.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator));
	    };
	
	    Map.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator, mapper));
	    };
	
	    // @pragma Mutability
	
	    Map.prototype.withMutations = function(fn) {
	      var mutable = this.asMutable();
	      fn(mutable);
	      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
	    };
	
	    Map.prototype.asMutable = function() {
	      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
	    };
	
	    Map.prototype.asImmutable = function() {
	      return this.__ensureOwner();
	    };
	
	    Map.prototype.wasAltered = function() {
	      return this.__altered;
	    };
	
	    Map.prototype.__iterator = function(type, reverse) {
	      return new MapIterator(this, type, reverse);
	    };
	
	    Map.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      this._root && this._root.iterate(function(entry ) {
	        iterations++;
	        return fn(entry[1], entry[0], this$0);
	      }, reverse);
	      return iterations;
	    };
	
	    Map.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeMap(this.size, this._root, ownerID, this.__hash);
	    };
	
	
	  function isMap(maybeMap) {
	    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
	  }
	
	  Map.isMap = isMap;
	
	  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';
	
	  var MapPrototype = Map.prototype;
	  MapPrototype[IS_MAP_SENTINEL] = true;
	  MapPrototype[DELETE] = MapPrototype.remove;
	  MapPrototype.removeIn = MapPrototype.deleteIn;
	
	
	  // #pragma Trie Nodes
	
	
	
	    function ArrayMapNode(ownerID, entries) {
	      this.ownerID = ownerID;
	      this.entries = entries;
	    }
	
	    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };
	
	    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;
	
	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;
	
	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }
	
	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);
	
	      if (removed && entries.length === 1) {
	        return; // undefined
	      }
	
	      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
	        return createNodes(ownerID, entries, key, value);
	      }
	
	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);
	
	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }
	
	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }
	
	      return new ArrayMapNode(ownerID, newEntries);
	    };
	
	
	
	
	    function BitmapIndexedNode(ownerID, bitmap, nodes) {
	      this.ownerID = ownerID;
	      this.bitmap = bitmap;
	      this.nodes = nodes;
	    }
	
	    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var bit = (1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK));
	      var bitmap = this.bitmap;
	      return (bitmap & bit) === 0 ? notSetValue :
	        this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
	    };
	
	    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var bit = 1 << keyHashFrag;
	      var bitmap = this.bitmap;
	      var exists = (bitmap & bit) !== 0;
	
	      if (!exists && value === NOT_SET) {
	        return this;
	      }
	
	      var idx = popCount(bitmap & (bit - 1));
	      var nodes = this.nodes;
	      var node = exists ? nodes[idx] : undefined;
	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
	
	      if (newNode === node) {
	        return this;
	      }
	
	      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
	        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
	      }
	
	      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
	        return nodes[idx ^ 1];
	      }
	
	      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
	        return newNode;
	      }
	
	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
	      var newNodes = exists ? newNode ?
	        setIn(nodes, idx, newNode, isEditable) :
	        spliceOut(nodes, idx, isEditable) :
	        spliceIn(nodes, idx, newNode, isEditable);
	
	      if (isEditable) {
	        this.bitmap = newBitmap;
	        this.nodes = newNodes;
	        return this;
	      }
	
	      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
	    };
	
	
	
	
	    function HashArrayMapNode(ownerID, count, nodes) {
	      this.ownerID = ownerID;
	      this.count = count;
	      this.nodes = nodes;
	    }
	
	    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var node = this.nodes[idx];
	      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
	    };
	
	    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var removed = value === NOT_SET;
	      var nodes = this.nodes;
	      var node = nodes[idx];
	
	      if (removed && !node) {
	        return this;
	      }
	
	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
	      if (newNode === node) {
	        return this;
	      }
	
	      var newCount = this.count;
	      if (!node) {
	        newCount++;
	      } else if (!newNode) {
	        newCount--;
	        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
	          return packNodes(ownerID, nodes, newCount, idx);
	        }
	      }
	
	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newNodes = setIn(nodes, idx, newNode, isEditable);
	
	      if (isEditable) {
	        this.count = newCount;
	        this.nodes = newNodes;
	        return this;
	      }
	
	      return new HashArrayMapNode(ownerID, newCount, newNodes);
	    };
	
	
	
	
	    function HashCollisionNode(ownerID, keyHash, entries) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entries = entries;
	    }
	
	    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };
	
	    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	
	      var removed = value === NOT_SET;
	
	      if (keyHash !== this.keyHash) {
	        if (removed) {
	          return this;
	        }
	        SetRef(didAlter);
	        SetRef(didChangeSize);
	        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
	      }
	
	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;
	
	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }
	
	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);
	
	      if (removed && len === 2) {
	        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
	      }
	
	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);
	
	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }
	
	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }
	
	      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
	    };
	
	
	
	
	    function ValueNode(ownerID, keyHash, entry) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entry = entry;
	    }
	
	    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
	    };
	
	    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;
	      var keyMatch = is(key, this.entry[0]);
	      if (keyMatch ? value === this.entry[1] : removed) {
	        return this;
	      }
	
	      SetRef(didAlter);
	
	      if (removed) {
	        SetRef(didChangeSize);
	        return; // undefined
	      }
	
	      if (keyMatch) {
	        if (ownerID && ownerID === this.ownerID) {
	          this.entry[1] = value;
	          return this;
	        }
	        return new ValueNode(ownerID, this.keyHash, [key, value]);
	      }
	
	      SetRef(didChangeSize);
	      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
	    };
	
	
	
	  // #pragma Iterators
	
	  ArrayMapNode.prototype.iterate =
	  HashCollisionNode.prototype.iterate = function (fn, reverse) {
	    var entries = this.entries;
	    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
	      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
	        return false;
	      }
	    }
	  }
	
	  BitmapIndexedNode.prototype.iterate =
	  HashArrayMapNode.prototype.iterate = function (fn, reverse) {
	    var nodes = this.nodes;
	    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
	      var node = nodes[reverse ? maxIndex - ii : ii];
	      if (node && node.iterate(fn, reverse) === false) {
	        return false;
	      }
	    }
	  }
	
	  ValueNode.prototype.iterate = function (fn, reverse) {
	    return fn(this.entry);
	  }
	
	  createClass(MapIterator, Iterator);
	
	    function MapIterator(map, type, reverse) {
	      this._type = type;
	      this._reverse = reverse;
	      this._stack = map._root && mapIteratorFrame(map._root);
	    }
	
	    MapIterator.prototype.next = function() {
	      var type = this._type;
	      var stack = this._stack;
	      while (stack) {
	        var node = stack.node;
	        var index = stack.index++;
	        var maxIndex;
	        if (node.entry) {
	          if (index === 0) {
	            return mapIteratorValue(type, node.entry);
	          }
	        } else if (node.entries) {
	          maxIndex = node.entries.length - 1;
	          if (index <= maxIndex) {
	            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
	          }
	        } else {
	          maxIndex = node.nodes.length - 1;
	          if (index <= maxIndex) {
	            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
	            if (subNode) {
	              if (subNode.entry) {
	                return mapIteratorValue(type, subNode.entry);
	              }
	              stack = this._stack = mapIteratorFrame(subNode, stack);
	            }
	            continue;
	          }
	        }
	        stack = this._stack = this._stack.__prev;
	      }
	      return iteratorDone();
	    };
	
	
	  function mapIteratorValue(type, entry) {
	    return iteratorValue(type, entry[0], entry[1]);
	  }
	
	  function mapIteratorFrame(node, prev) {
	    return {
	      node: node,
	      index: 0,
	      __prev: prev
	    };
	  }
	
	  function makeMap(size, root, ownerID, hash) {
	    var map = Object.create(MapPrototype);
	    map.size = size;
	    map._root = root;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }
	
	  var EMPTY_MAP;
	  function emptyMap() {
	    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
	  }
	
	  function updateMap(map, k, v) {
	    var newRoot;
	    var newSize;
	    if (!map._root) {
	      if (v === NOT_SET) {
	        return map;
	      }
	      newSize = 1;
	      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
	    } else {
	      var didChangeSize = MakeRef(CHANGE_LENGTH);
	      var didAlter = MakeRef(DID_ALTER);
	      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
	      if (!didAlter.value) {
	        return map;
	      }
	      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
	    }
	    if (map.__ownerID) {
	      map.size = newSize;
	      map._root = newRoot;
	      map.__hash = undefined;
	      map.__altered = true;
	      return map;
	    }
	    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
	  }
	
	  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	    if (!node) {
	      if (value === NOT_SET) {
	        return node;
	      }
	      SetRef(didAlter);
	      SetRef(didChangeSize);
	      return new ValueNode(ownerID, keyHash, [key, value]);
	    }
	    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
	  }
	
	  function isLeafNode(node) {
	    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
	  }
	
	  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
	    if (node.keyHash === keyHash) {
	      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
	    }
	
	    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
	    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	
	    var newNode;
	    var nodes = idx1 === idx2 ?
	      [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] :
	      ((newNode = new ValueNode(ownerID, keyHash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);
	
	    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
	  }
	
	  function createNodes(ownerID, entries, key, value) {
	    if (!ownerID) {
	      ownerID = new OwnerID();
	    }
	    var node = new ValueNode(ownerID, hash(key), [key, value]);
	    for (var ii = 0; ii < entries.length; ii++) {
	      var entry = entries[ii];
	      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
	    }
	    return node;
	  }
	
	  function packNodes(ownerID, nodes, count, excluding) {
	    var bitmap = 0;
	    var packedII = 0;
	    var packedNodes = new Array(count);
	    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
	      var node = nodes[ii];
	      if (node !== undefined && ii !== excluding) {
	        bitmap |= bit;
	        packedNodes[packedII++] = node;
	      }
	    }
	    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
	  }
	
	  function expandNodes(ownerID, nodes, bitmap, including, node) {
	    var count = 0;
	    var expandedNodes = new Array(SIZE);
	    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
	      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
	    }
	    expandedNodes[including] = node;
	    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
	  }
	
	  function mergeIntoMapWith(map, merger, iterables) {
	    var iters = [];
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = KeyedIterable(value);
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    return mergeIntoCollectionWith(map, merger, iters);
	  }
	
	  function deepMerger(existing, value, key) {
	    return existing && existing.mergeDeep && isIterable(value) ?
	      existing.mergeDeep(value) :
	      is(existing, value) ? existing : value;
	  }
	
	  function deepMergerWith(merger) {
	    return function(existing, value, key)  {
	      if (existing && existing.mergeDeepWith && isIterable(value)) {
	        return existing.mergeDeepWith(merger, value);
	      }
	      var nextValue = merger(existing, value, key);
	      return is(existing, nextValue) ? existing : nextValue;
	    };
	  }
	
	  function mergeIntoCollectionWith(collection, merger, iters) {
	    iters = iters.filter(function(x ) {return x.size !== 0});
	    if (iters.length === 0) {
	      return collection;
	    }
	    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
	      return collection.constructor(iters[0]);
	    }
	    return collection.withMutations(function(collection ) {
	      var mergeIntoMap = merger ?
	        function(value, key)  {
	          collection.update(key, NOT_SET, function(existing )
	            {return existing === NOT_SET ? value : merger(existing, value, key)}
	          );
	        } :
	        function(value, key)  {
	          collection.set(key, value);
	        }
	      for (var ii = 0; ii < iters.length; ii++) {
	        iters[ii].forEach(mergeIntoMap);
	      }
	    });
	  }
	
	  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
	    var isNotSet = existing === NOT_SET;
	    var step = keyPathIter.next();
	    if (step.done) {
	      var existingValue = isNotSet ? notSetValue : existing;
	      var newValue = updater(existingValue);
	      return newValue === existingValue ? existing : newValue;
	    }
	    invariant(
	      isNotSet || (existing && existing.set),
	      'invalid keyPath'
	    );
	    var key = step.value;
	    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
	    var nextUpdated = updateInDeepMap(
	      nextExisting,
	      keyPathIter,
	      notSetValue,
	      updater
	    );
	    return nextUpdated === nextExisting ? existing :
	      nextUpdated === NOT_SET ? existing.remove(key) :
	      (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
	  }
	
	  function popCount(x) {
	    x = x - ((x >> 1) & 0x55555555);
	    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
	    x = (x + (x >> 4)) & 0x0f0f0f0f;
	    x = x + (x >> 8);
	    x = x + (x >> 16);
	    return x & 0x7f;
	  }
	
	  function setIn(array, idx, val, canEdit) {
	    var newArray = canEdit ? array : arrCopy(array);
	    newArray[idx] = val;
	    return newArray;
	  }
	
	  function spliceIn(array, idx, val, canEdit) {
	    var newLen = array.length + 1;
	    if (canEdit && idx + 1 === newLen) {
	      array[idx] = val;
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        newArray[ii] = val;
	        after = -1;
	      } else {
	        newArray[ii] = array[ii + after];
	      }
	    }
	    return newArray;
	  }
	
	  function spliceOut(array, idx, canEdit) {
	    var newLen = array.length - 1;
	    if (canEdit && idx === newLen) {
	      array.pop();
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        after = 1;
	      }
	      newArray[ii] = array[ii + after];
	    }
	    return newArray;
	  }
	
	  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
	  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
	  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;
	
	  createClass(List, IndexedCollection);
	
	    // @pragma Construction
	
	    function List(value) {
	      var empty = emptyList();
	      if (value === null || value === undefined) {
	        return empty;
	      }
	      if (isList(value)) {
	        return value;
	      }
	      var iter = IndexedIterable(value);
	      var size = iter.size;
	      if (size === 0) {
	        return empty;
	      }
	      assertNotInfinite(size);
	      if (size > 0 && size < SIZE) {
	        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
	      }
	      return empty.withMutations(function(list ) {
	        list.setSize(size);
	        iter.forEach(function(v, i)  {return list.set(i, v)});
	      });
	    }
	
	    List.of = function(/*...values*/) {
	      return this(arguments);
	    };
	
	    List.prototype.toString = function() {
	      return this.__toString('List [', ']');
	    };
	
	    // @pragma Access
	
	    List.prototype.get = function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      if (index >= 0 && index < this.size) {
	        index += this._origin;
	        var node = listNodeFor(this, index);
	        return node && node.array[index & MASK];
	      }
	      return notSetValue;
	    };
	
	    // @pragma Modification
	
	    List.prototype.set = function(index, value) {
	      return updateList(this, index, value);
	    };
	
	    List.prototype.remove = function(index) {
	      return !this.has(index) ? this :
	        index === 0 ? this.shift() :
	        index === this.size - 1 ? this.pop() :
	        this.splice(index, 1);
	    };
	
	    List.prototype.insert = function(index, value) {
	      return this.splice(index, 0, value);
	    };
	
	    List.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = this._origin = this._capacity = 0;
	        this._level = SHIFT;
	        this._root = this._tail = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyList();
	    };
	
	    List.prototype.push = function(/*...values*/) {
	      var values = arguments;
	      var oldSize = this.size;
	      return this.withMutations(function(list ) {
	        setListBounds(list, 0, oldSize + values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(oldSize + ii, values[ii]);
	        }
	      });
	    };
	
	    List.prototype.pop = function() {
	      return setListBounds(this, 0, -1);
	    };
	
	    List.prototype.unshift = function(/*...values*/) {
	      var values = arguments;
	      return this.withMutations(function(list ) {
	        setListBounds(list, -values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(ii, values[ii]);
	        }
	      });
	    };
	
	    List.prototype.shift = function() {
	      return setListBounds(this, 1);
	    };
	
	    // @pragma Composition
	
	    List.prototype.merge = function(/*...iters*/) {
	      return mergeIntoListWith(this, undefined, arguments);
	    };
	
	    List.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, merger, iters);
	    };
	
	    List.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoListWith(this, deepMerger, arguments);
	    };
	
	    List.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, deepMergerWith(merger), iters);
	    };
	
	    List.prototype.setSize = function(size) {
	      return setListBounds(this, 0, size);
	    };
	
	    // @pragma Iteration
	
	    List.prototype.slice = function(begin, end) {
	      var size = this.size;
	      if (wholeSlice(begin, end, size)) {
	        return this;
	      }
	      return setListBounds(
	        this,
	        resolveBegin(begin, size),
	        resolveEnd(end, size)
	      );
	    };
	
	    List.prototype.__iterator = function(type, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      return new Iterator(function()  {
	        var value = values();
	        return value === DONE ?
	          iteratorDone() :
	          iteratorValue(type, index++, value);
	      });
	    };
	
	    List.prototype.__iterate = function(fn, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      var value;
	      while ((value = values()) !== DONE) {
	        if (fn(value, index++, this) === false) {
	          break;
	        }
	      }
	      return index;
	    };
	
	    List.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        return this;
	      }
	      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
	    };
	
	
	  function isList(maybeList) {
	    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
	  }
	
	  List.isList = isList;
	
	  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';
	
	  var ListPrototype = List.prototype;
	  ListPrototype[IS_LIST_SENTINEL] = true;
	  ListPrototype[DELETE] = ListPrototype.remove;
	  ListPrototype.setIn = MapPrototype.setIn;
	  ListPrototype.deleteIn =
	  ListPrototype.removeIn = MapPrototype.removeIn;
	  ListPrototype.update = MapPrototype.update;
	  ListPrototype.updateIn = MapPrototype.updateIn;
	  ListPrototype.mergeIn = MapPrototype.mergeIn;
	  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  ListPrototype.withMutations = MapPrototype.withMutations;
	  ListPrototype.asMutable = MapPrototype.asMutable;
	  ListPrototype.asImmutable = MapPrototype.asImmutable;
	  ListPrototype.wasAltered = MapPrototype.wasAltered;
	
	
	
	    function VNode(array, ownerID) {
	      this.array = array;
	      this.ownerID = ownerID;
	    }
	
	    // TODO: seems like these methods are very similar
	
	    VNode.prototype.removeBefore = function(ownerID, level, index) {
	      if (index === level ? 1 << level : 0 || this.array.length === 0) {
	        return this;
	      }
	      var originIndex = (index >>> level) & MASK;
	      if (originIndex >= this.array.length) {
	        return new VNode([], ownerID);
	      }
	      var removingFirst = originIndex === 0;
	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[originIndex];
	        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && removingFirst) {
	          return this;
	        }
	      }
	      if (removingFirst && !newChild) {
	        return this;
	      }
	      var editable = editableVNode(this, ownerID);
	      if (!removingFirst) {
	        for (var ii = 0; ii < originIndex; ii++) {
	          editable.array[ii] = undefined;
	        }
	      }
	      if (newChild) {
	        editable.array[originIndex] = newChild;
	      }
	      return editable;
	    };
	
	    VNode.prototype.removeAfter = function(ownerID, level, index) {
	      if (index === (level ? 1 << level : 0) || this.array.length === 0) {
	        return this;
	      }
	      var sizeIndex = ((index - 1) >>> level) & MASK;
	      if (sizeIndex >= this.array.length) {
	        return this;
	      }
	
	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[sizeIndex];
	        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
	          return this;
	        }
	      }
	
	      var editable = editableVNode(this, ownerID);
	      editable.array.splice(sizeIndex + 1);
	      if (newChild) {
	        editable.array[sizeIndex] = newChild;
	      }
	      return editable;
	    };
	
	
	
	  var DONE = {};
	
	  function iterateList(list, reverse) {
	    var left = list._origin;
	    var right = list._capacity;
	    var tailPos = getTailOffset(right);
	    var tail = list._tail;
	
	    return iterateNodeOrLeaf(list._root, list._level, 0);
	
	    function iterateNodeOrLeaf(node, level, offset) {
	      return level === 0 ?
	        iterateLeaf(node, offset) :
	        iterateNode(node, level, offset);
	    }
	
	    function iterateLeaf(node, offset) {
	      var array = offset === tailPos ? tail && tail.array : node && node.array;
	      var from = offset > left ? 0 : left - offset;
	      var to = right - offset;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        if (from === to) {
	          return DONE;
	        }
	        var idx = reverse ? --to : from++;
	        return array && array[idx];
	      };
	    }
	
	    function iterateNode(node, level, offset) {
	      var values;
	      var array = node && node.array;
	      var from = offset > left ? 0 : (left - offset) >> level;
	      var to = ((right - offset) >> level) + 1;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        do {
	          if (values) {
	            var value = values();
	            if (value !== DONE) {
	              return value;
	            }
	            values = null;
	          }
	          if (from === to) {
	            return DONE;
	          }
	          var idx = reverse ? --to : from++;
	          values = iterateNodeOrLeaf(
	            array && array[idx], level - SHIFT, offset + (idx << level)
	          );
	        } while (true);
	      };
	    }
	  }
	
	  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
	    var list = Object.create(ListPrototype);
	    list.size = capacity - origin;
	    list._origin = origin;
	    list._capacity = capacity;
	    list._level = level;
	    list._root = root;
	    list._tail = tail;
	    list.__ownerID = ownerID;
	    list.__hash = hash;
	    list.__altered = false;
	    return list;
	  }
	
	  var EMPTY_LIST;
	  function emptyList() {
	    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
	  }
	
	  function updateList(list, index, value) {
	    index = wrapIndex(list, index);
	
	    if (index !== index) {
	      return list;
	    }
	
	    if (index >= list.size || index < 0) {
	      return list.withMutations(function(list ) {
	        index < 0 ?
	          setListBounds(list, index).set(0, value) :
	          setListBounds(list, 0, index + 1).set(index, value)
	      });
	    }
	
	    index += list._origin;
	
	    var newTail = list._tail;
	    var newRoot = list._root;
	    var didAlter = MakeRef(DID_ALTER);
	    if (index >= getTailOffset(list._capacity)) {
	      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
	    } else {
	      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
	    }
	
	    if (!didAlter.value) {
	      return list;
	    }
	
	    if (list.__ownerID) {
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
	  }
	
	  function updateVNode(node, ownerID, level, index, value, didAlter) {
	    var idx = (index >>> level) & MASK;
	    var nodeHas = node && idx < node.array.length;
	    if (!nodeHas && value === undefined) {
	      return node;
	    }
	
	    var newNode;
	
	    if (level > 0) {
	      var lowerNode = node && node.array[idx];
	      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
	      if (newLowerNode === lowerNode) {
	        return node;
	      }
	      newNode = editableVNode(node, ownerID);
	      newNode.array[idx] = newLowerNode;
	      return newNode;
	    }
	
	    if (nodeHas && node.array[idx] === value) {
	      return node;
	    }
	
	    SetRef(didAlter);
	
	    newNode = editableVNode(node, ownerID);
	    if (value === undefined && idx === newNode.array.length - 1) {
	      newNode.array.pop();
	    } else {
	      newNode.array[idx] = value;
	    }
	    return newNode;
	  }
	
	  function editableVNode(node, ownerID) {
	    if (ownerID && node && ownerID === node.ownerID) {
	      return node;
	    }
	    return new VNode(node ? node.array.slice() : [], ownerID);
	  }
	
	  function listNodeFor(list, rawIndex) {
	    if (rawIndex >= getTailOffset(list._capacity)) {
	      return list._tail;
	    }
	    if (rawIndex < 1 << (list._level + SHIFT)) {
	      var node = list._root;
	      var level = list._level;
	      while (node && level > 0) {
	        node = node.array[(rawIndex >>> level) & MASK];
	        level -= SHIFT;
	      }
	      return node;
	    }
	  }
	
	  function setListBounds(list, begin, end) {
	    // Sanitize begin & end using this shorthand for ToInt32(argument)
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
	    if (begin !== undefined) {
	      begin = begin | 0;
	    }
	    if (end !== undefined) {
	      end = end | 0;
	    }
	    var owner = list.__ownerID || new OwnerID();
	    var oldOrigin = list._origin;
	    var oldCapacity = list._capacity;
	    var newOrigin = oldOrigin + begin;
	    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
	    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
	      return list;
	    }
	
	    // If it's going to end after it starts, it's empty.
	    if (newOrigin >= newCapacity) {
	      return list.clear();
	    }
	
	    var newLevel = list._level;
	    var newRoot = list._root;
	
	    // New origin might need creating a higher root.
	    var offsetShift = 0;
	    while (newOrigin + offsetShift < 0) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
	      newLevel += SHIFT;
	      offsetShift += 1 << newLevel;
	    }
	    if (offsetShift) {
	      newOrigin += offsetShift;
	      oldOrigin += offsetShift;
	      newCapacity += offsetShift;
	      oldCapacity += offsetShift;
	    }
	
	    var oldTailOffset = getTailOffset(oldCapacity);
	    var newTailOffset = getTailOffset(newCapacity);
	
	    // New size might need creating a higher root.
	    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
	      newLevel += SHIFT;
	    }
	
	    // Locate or create the new tail.
	    var oldTail = list._tail;
	    var newTail = newTailOffset < oldTailOffset ?
	      listNodeFor(list, newCapacity - 1) :
	      newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;
	
	    // Merge Tail into tree.
	    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
	      newRoot = editableVNode(newRoot, owner);
	      var node = newRoot;
	      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
	        var idx = (oldTailOffset >>> level) & MASK;
	        node = node.array[idx] = editableVNode(node.array[idx], owner);
	      }
	      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
	    }
	
	    // If the size has been reduced, there's a chance the tail needs to be trimmed.
	    if (newCapacity < oldCapacity) {
	      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
	    }
	
	    // If the new origin is within the tail, then we do not need a root.
	    if (newOrigin >= newTailOffset) {
	      newOrigin -= newTailOffset;
	      newCapacity -= newTailOffset;
	      newLevel = SHIFT;
	      newRoot = null;
	      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);
	
	    // Otherwise, if the root has been trimmed, garbage collect.
	    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
	      offsetShift = 0;
	
	      // Identify the new top root node of the subtree of the old root.
	      while (newRoot) {
	        var beginIndex = (newOrigin >>> newLevel) & MASK;
	        if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
	          break;
	        }
	        if (beginIndex) {
	          offsetShift += (1 << newLevel) * beginIndex;
	        }
	        newLevel -= SHIFT;
	        newRoot = newRoot.array[beginIndex];
	      }
	
	      // Trim the new sides of the new root.
	      if (newRoot && newOrigin > oldOrigin) {
	        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
	      }
	      if (newRoot && newTailOffset < oldTailOffset) {
	        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
	      }
	      if (offsetShift) {
	        newOrigin -= offsetShift;
	        newCapacity -= offsetShift;
	      }
	    }
	
	    if (list.__ownerID) {
	      list.size = newCapacity - newOrigin;
	      list._origin = newOrigin;
	      list._capacity = newCapacity;
	      list._level = newLevel;
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
	  }
	
	  function mergeIntoListWith(list, merger, iterables) {
	    var iters = [];
	    var maxSize = 0;
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = IndexedIterable(value);
	      if (iter.size > maxSize) {
	        maxSize = iter.size;
	      }
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    if (maxSize > list.size) {
	      list = list.setSize(maxSize);
	    }
	    return mergeIntoCollectionWith(list, merger, iters);
	  }
	
	  function getTailOffset(size) {
	    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
	  }
	
	  createClass(OrderedMap, Map);
	
	    // @pragma Construction
	
	    function OrderedMap(value) {
	      return value === null || value === undefined ? emptyOrderedMap() :
	        isOrderedMap(value) ? value :
	        emptyOrderedMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }
	
	    OrderedMap.of = function(/*...values*/) {
	      return this(arguments);
	    };
	
	    OrderedMap.prototype.toString = function() {
	      return this.__toString('OrderedMap {', '}');
	    };
	
	    // @pragma Access
	
	    OrderedMap.prototype.get = function(k, notSetValue) {
	      var index = this._map.get(k);
	      return index !== undefined ? this._list.get(index)[1] : notSetValue;
	    };
	
	    // @pragma Modification
	
	    OrderedMap.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._map.clear();
	        this._list.clear();
	        return this;
	      }
	      return emptyOrderedMap();
	    };
	
	    OrderedMap.prototype.set = function(k, v) {
	      return updateOrderedMap(this, k, v);
	    };
	
	    OrderedMap.prototype.remove = function(k) {
	      return updateOrderedMap(this, k, NOT_SET);
	    };
	
	    OrderedMap.prototype.wasAltered = function() {
	      return this._map.wasAltered() || this._list.wasAltered();
	    };
	
	    OrderedMap.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._list.__iterate(
	        function(entry ) {return entry && fn(entry[1], entry[0], this$0)},
	        reverse
	      );
	    };
	
	    OrderedMap.prototype.__iterator = function(type, reverse) {
	      return this._list.fromEntrySeq().__iterator(type, reverse);
	    };
	
	    OrderedMap.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      var newList = this._list.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        this._list = newList;
	        return this;
	      }
	      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
	    };
	
	
	  function isOrderedMap(maybeOrderedMap) {
	    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
	  }
	
	  OrderedMap.isOrderedMap = isOrderedMap;
	
	  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
	  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;
	
	
	
	  function makeOrderedMap(map, list, ownerID, hash) {
	    var omap = Object.create(OrderedMap.prototype);
	    omap.size = map ? map.size : 0;
	    omap._map = map;
	    omap._list = list;
	    omap.__ownerID = ownerID;
	    omap.__hash = hash;
	    return omap;
	  }
	
	  var EMPTY_ORDERED_MAP;
	  function emptyOrderedMap() {
	    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
	  }
	
	  function updateOrderedMap(omap, k, v) {
	    var map = omap._map;
	    var list = omap._list;
	    var i = map.get(k);
	    var has = i !== undefined;
	    var newMap;
	    var newList;
	    if (v === NOT_SET) { // removed
	      if (!has) {
	        return omap;
	      }
	      if (list.size >= SIZE && list.size >= map.size * 2) {
	        newList = list.filter(function(entry, idx)  {return entry !== undefined && i !== idx});
	        newMap = newList.toKeyedSeq().map(function(entry ) {return entry[0]}).flip().toMap();
	        if (omap.__ownerID) {
	          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
	        }
	      } else {
	        newMap = map.remove(k);
	        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
	      }
	    } else {
	      if (has) {
	        if (v === list.get(i)[1]) {
	          return omap;
	        }
	        newMap = map;
	        newList = list.set(i, [k, v]);
	      } else {
	        newMap = map.set(k, list.size);
	        newList = list.set(list.size, [k, v]);
	      }
	    }
	    if (omap.__ownerID) {
	      omap.size = newMap.size;
	      omap._map = newMap;
	      omap._list = newList;
	      omap.__hash = undefined;
	      return omap;
	    }
	    return makeOrderedMap(newMap, newList);
	  }
	
	  createClass(ToKeyedSequence, KeyedSeq);
	    function ToKeyedSequence(indexed, useKeys) {
	      this._iter = indexed;
	      this._useKeys = useKeys;
	      this.size = indexed.size;
	    }
	
	    ToKeyedSequence.prototype.get = function(key, notSetValue) {
	      return this._iter.get(key, notSetValue);
	    };
	
	    ToKeyedSequence.prototype.has = function(key) {
	      return this._iter.has(key);
	    };
	
	    ToKeyedSequence.prototype.valueSeq = function() {
	      return this._iter.valueSeq();
	    };
	
	    ToKeyedSequence.prototype.reverse = function() {var this$0 = this;
	      var reversedSequence = reverseFactory(this, true);
	      if (!this._useKeys) {
	        reversedSequence.valueSeq = function()  {return this$0._iter.toSeq().reverse()};
	      }
	      return reversedSequence;
	    };
	
	    ToKeyedSequence.prototype.map = function(mapper, context) {var this$0 = this;
	      var mappedSequence = mapFactory(this, mapper, context);
	      if (!this._useKeys) {
	        mappedSequence.valueSeq = function()  {return this$0._iter.toSeq().map(mapper, context)};
	      }
	      return mappedSequence;
	    };
	
	    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var ii;
	      return this._iter.__iterate(
	        this._useKeys ?
	          function(v, k)  {return fn(v, k, this$0)} :
	          ((ii = reverse ? resolveSize(this) : 0),
	            function(v ) {return fn(v, reverse ? --ii : ii++, this$0)}),
	        reverse
	      );
	    };
	
	    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
	      if (this._useKeys) {
	        return this._iter.__iterator(type, reverse);
	      }
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var ii = reverse ? resolveSize(this) : 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, reverse ? --ii : ii++, step.value, step);
	      });
	    };
	
	  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;
	
	
	  createClass(ToIndexedSequence, IndexedSeq);
	    function ToIndexedSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }
	
	    ToIndexedSequence.prototype.includes = function(value) {
	      return this._iter.includes(value);
	    };
	
	    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      return this._iter.__iterate(function(v ) {return fn(v, iterations++, this$0)}, reverse);
	    };
	
	    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, iterations++, step.value, step)
	      });
	    };
	
	
	
	  createClass(ToSetSequence, SetSeq);
	    function ToSetSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }
	
	    ToSetSequence.prototype.has = function(key) {
	      return this._iter.includes(key);
	    };
	
	    ToSetSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(v ) {return fn(v, v, this$0)}, reverse);
	    };
	
	    ToSetSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, step.value, step.value, step);
	      });
	    };
	
	
	
	  createClass(FromEntriesSequence, KeyedSeq);
	    function FromEntriesSequence(entries) {
	      this._iter = entries;
	      this.size = entries.size;
	    }
	
	    FromEntriesSequence.prototype.entrySeq = function() {
	      return this._iter.toSeq();
	    };
	
	    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(entry ) {
	        // Check if entry exists first so array access doesn't throw for holes
	        // in the parent iteration.
	        if (entry) {
	          validateEntry(entry);
	          var indexedIterable = isIterable(entry);
	          return fn(
	            indexedIterable ? entry.get(1) : entry[1],
	            indexedIterable ? entry.get(0) : entry[0],
	            this$0
	          );
	        }
	      }, reverse);
	    };
	
	    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          // Check if entry exists first so array access doesn't throw for holes
	          // in the parent iteration.
	          if (entry) {
	            validateEntry(entry);
	            var indexedIterable = isIterable(entry);
	            return iteratorValue(
	              type,
	              indexedIterable ? entry.get(0) : entry[0],
	              indexedIterable ? entry.get(1) : entry[1],
	              step
	            );
	          }
	        }
	      });
	    };
	
	
	  ToIndexedSequence.prototype.cacheResult =
	  ToKeyedSequence.prototype.cacheResult =
	  ToSetSequence.prototype.cacheResult =
	  FromEntriesSequence.prototype.cacheResult =
	    cacheResultThrough;
	
	
	  function flipFactory(iterable) {
	    var flipSequence = makeSequence(iterable);
	    flipSequence._iter = iterable;
	    flipSequence.size = iterable.size;
	    flipSequence.flip = function()  {return iterable};
	    flipSequence.reverse = function () {
	      var reversedSequence = iterable.reverse.apply(this); // super.reverse()
	      reversedSequence.flip = function()  {return iterable.reverse()};
	      return reversedSequence;
	    };
	    flipSequence.has = function(key ) {return iterable.includes(key)};
	    flipSequence.includes = function(key ) {return iterable.has(key)};
	    flipSequence.cacheResult = cacheResultThrough;
	    flipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(k, v, this$0) !== false}, reverse);
	    }
	    flipSequence.__iteratorUncached = function(type, reverse) {
	      if (type === ITERATE_ENTRIES) {
	        var iterator = iterable.__iterator(type, reverse);
	        return new Iterator(function()  {
	          var step = iterator.next();
	          if (!step.done) {
	            var k = step.value[0];
	            step.value[0] = step.value[1];
	            step.value[1] = k;
	          }
	          return step;
	        });
	      }
	      return iterable.__iterator(
	        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
	        reverse
	      );
	    }
	    return flipSequence;
	  }
	
	
	  function mapFactory(iterable, mapper, context) {
	    var mappedSequence = makeSequence(iterable);
	    mappedSequence.size = iterable.size;
	    mappedSequence.has = function(key ) {return iterable.has(key)};
	    mappedSequence.get = function(key, notSetValue)  {
	      var v = iterable.get(key, NOT_SET);
	      return v === NOT_SET ?
	        notSetValue :
	        mapper.call(context, v, key, iterable);
	    };
	    mappedSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(
	        function(v, k, c)  {return fn(mapper.call(context, v, k, c), k, this$0) !== false},
	        reverse
	      );
	    }
	    mappedSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      return new Iterator(function()  {
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var key = entry[0];
	        return iteratorValue(
	          type,
	          key,
	          mapper.call(context, entry[1], key, iterable),
	          step
	        );
	      });
	    }
	    return mappedSequence;
	  }
	
	
	  function reverseFactory(iterable, useKeys) {
	    var reversedSequence = makeSequence(iterable);
	    reversedSequence._iter = iterable;
	    reversedSequence.size = iterable.size;
	    reversedSequence.reverse = function()  {return iterable};
	    if (iterable.flip) {
	      reversedSequence.flip = function () {
	        var flipSequence = flipFactory(iterable);
	        flipSequence.reverse = function()  {return iterable.flip()};
	        return flipSequence;
	      };
	    }
	    reversedSequence.get = function(key, notSetValue) 
	      {return iterable.get(useKeys ? key : -1 - key, notSetValue)};
	    reversedSequence.has = function(key )
	      {return iterable.has(useKeys ? key : -1 - key)};
	    reversedSequence.includes = function(value ) {return iterable.includes(value)};
	    reversedSequence.cacheResult = cacheResultThrough;
	    reversedSequence.__iterate = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(v, k, this$0)}, !reverse);
	    };
	    reversedSequence.__iterator =
	      function(type, reverse)  {return iterable.__iterator(type, !reverse)};
	    return reversedSequence;
	  }
	
	
	  function filterFactory(iterable, predicate, context, useKeys) {
	    var filterSequence = makeSequence(iterable);
	    if (useKeys) {
	      filterSequence.has = function(key ) {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
	      };
	      filterSequence.get = function(key, notSetValue)  {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && predicate.call(context, v, key, iterable) ?
	          v : notSetValue;
	      };
	    }
	    filterSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      }, reverse);
	      return iterations;
	    };
	    filterSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          var key = entry[0];
	          var value = entry[1];
	          if (predicate.call(context, value, key, iterable)) {
	            return iteratorValue(type, useKeys ? key : iterations++, value, step);
	          }
	        }
	      });
	    }
	    return filterSequence;
	  }
	
	
	  function countByFactory(iterable, grouper, context) {
	    var groups = Map().asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        0,
	        function(a ) {return a + 1}
	      );
	    });
	    return groups.asImmutable();
	  }
	
	
	  function groupByFactory(iterable, grouper, context) {
	    var isKeyedIter = isKeyed(iterable);
	    var groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        function(a ) {return (a = a || [], a.push(isKeyedIter ? [k, v] : v), a)}
	      );
	    });
	    var coerce = iterableClass(iterable);
	    return groups.map(function(arr ) {return reify(iterable, coerce(arr))});
	  }
	
	
	  function sliceFactory(iterable, begin, end, useKeys) {
	    var originalSize = iterable.size;
	
	    // Sanitize begin & end using this shorthand for ToInt32(argument)
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
	    if (begin !== undefined) {
	      begin = begin | 0;
	    }
	    if (end !== undefined) {
	      if (end === Infinity) {
	        end = originalSize;
	      } else {
	        end = end | 0;
	      }
	    }
	
	    if (wholeSlice(begin, end, originalSize)) {
	      return iterable;
	    }
	
	    var resolvedBegin = resolveBegin(begin, originalSize);
	    var resolvedEnd = resolveEnd(end, originalSize);
	
	    // begin or end will be NaN if they were provided as negative numbers and
	    // this iterable's size is unknown. In that case, cache first so there is
	    // a known size and these do not resolve to NaN.
	    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
	      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
	    }
	
	    // Note: resolvedEnd is undefined when the original sequence's length is
	    // unknown and this slice did not supply an end and should contain all
	    // elements after resolvedBegin.
	    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
	    var resolvedSize = resolvedEnd - resolvedBegin;
	    var sliceSize;
	    if (resolvedSize === resolvedSize) {
	      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
	    }
	
	    var sliceSeq = makeSequence(iterable);
	
	    // If iterable.size is undefined, the size of the realized sliceSeq is
	    // unknown at this point unless the number of items to slice is 0
	    sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;
	
	    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
	      sliceSeq.get = function (index, notSetValue) {
	        index = wrapIndex(this, index);
	        return index >= 0 && index < sliceSize ?
	          iterable.get(index + resolvedBegin, notSetValue) :
	          notSetValue;
	      }
	    }
	
	    sliceSeq.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (sliceSize === 0) {
	        return 0;
	      }
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var skipped = 0;
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k)  {
	        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0) !== false &&
	                 iterations !== sliceSize;
	        }
	      });
	      return iterations;
	    };
	
	    sliceSeq.__iteratorUncached = function(type, reverse) {
	      if (sliceSize !== 0 && reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      // Don't bother instantiating parent iterator if taking 0.
	      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
	      var skipped = 0;
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (skipped++ < resolvedBegin) {
	          iterator.next();
	        }
	        if (++iterations > sliceSize) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (useKeys || type === ITERATE_VALUES) {
	          return step;
	        } else if (type === ITERATE_KEYS) {
	          return iteratorValue(type, iterations - 1, undefined, step);
	        } else {
	          return iteratorValue(type, iterations - 1, step.value[1], step);
	        }
	      });
	    }
	
	    return sliceSeq;
	  }
	
	
	  function takeWhileFactory(iterable, predicate, context) {
	    var takeSequence = makeSequence(iterable);
	    takeSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c) 
	        {return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0)}
	      );
	      return iterations;
	    };
	    takeSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterating = true;
	      return new Iterator(function()  {
	        if (!iterating) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var k = entry[0];
	        var v = entry[1];
	        if (!predicate.call(context, v, k, this$0)) {
	          iterating = false;
	          return iteratorDone();
	        }
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return takeSequence;
	  }
	
	
	  function skipWhileFactory(iterable, predicate, context, useKeys) {
	    var skipSequence = makeSequence(iterable);
	    skipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      });
	      return iterations;
	    };
	    skipSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var skipping = true;
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step, k, v;
	        do {
	          step = iterator.next();
	          if (step.done) {
	            if (useKeys || type === ITERATE_VALUES) {
	              return step;
	            } else if (type === ITERATE_KEYS) {
	              return iteratorValue(type, iterations++, undefined, step);
	            } else {
	              return iteratorValue(type, iterations++, step.value[1], step);
	            }
	          }
	          var entry = step.value;
	          k = entry[0];
	          v = entry[1];
	          skipping && (skipping = predicate.call(context, v, k, this$0));
	        } while (skipping);
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return skipSequence;
	  }
	
	
	  function concatFactory(iterable, values) {
	    var isKeyedIterable = isKeyed(iterable);
	    var iters = [iterable].concat(values).map(function(v ) {
	      if (!isIterable(v)) {
	        v = isKeyedIterable ?
	          keyedSeqFromValue(v) :
	          indexedSeqFromValue(Array.isArray(v) ? v : [v]);
	      } else if (isKeyedIterable) {
	        v = KeyedIterable(v);
	      }
	      return v;
	    }).filter(function(v ) {return v.size !== 0});
	
	    if (iters.length === 0) {
	      return iterable;
	    }
	
	    if (iters.length === 1) {
	      var singleton = iters[0];
	      if (singleton === iterable ||
	          isKeyedIterable && isKeyed(singleton) ||
	          isIndexed(iterable) && isIndexed(singleton)) {
	        return singleton;
	      }
	    }
	
	    var concatSeq = new ArraySeq(iters);
	    if (isKeyedIterable) {
	      concatSeq = concatSeq.toKeyedSeq();
	    } else if (!isIndexed(iterable)) {
	      concatSeq = concatSeq.toSetSeq();
	    }
	    concatSeq = concatSeq.flatten(true);
	    concatSeq.size = iters.reduce(
	      function(sum, seq)  {
	        if (sum !== undefined) {
	          var size = seq.size;
	          if (size !== undefined) {
	            return sum + size;
	          }
	        }
	      },
	      0
	    );
	    return concatSeq;
	  }
	
	
	  function flattenFactory(iterable, depth, useKeys) {
	    var flatSequence = makeSequence(iterable);
	    flatSequence.__iterateUncached = function(fn, reverse) {
	      var iterations = 0;
	      var stopped = false;
	      function flatDeep(iter, currentDepth) {var this$0 = this;
	        iter.__iterate(function(v, k)  {
	          if ((!depth || currentDepth < depth) && isIterable(v)) {
	            flatDeep(v, currentDepth + 1);
	          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
	            stopped = true;
	          }
	          return !stopped;
	        }, reverse);
	      }
	      flatDeep(iterable, 0);
	      return iterations;
	    }
	    flatSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(type, reverse);
	      var stack = [];
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (iterator) {
	          var step = iterator.next();
	          if (step.done !== false) {
	            iterator = stack.pop();
	            continue;
	          }
	          var v = step.value;
	          if (type === ITERATE_ENTRIES) {
	            v = v[1];
	          }
	          if ((!depth || stack.length < depth) && isIterable(v)) {
	            stack.push(iterator);
	            iterator = v.__iterator(type, reverse);
	          } else {
	            return useKeys ? step : iteratorValue(type, iterations++, v, step);
	          }
	        }
	        return iteratorDone();
	      });
	    }
	    return flatSequence;
	  }
	
	
	  function flatMapFactory(iterable, mapper, context) {
	    var coerce = iterableClass(iterable);
	    return iterable.toSeq().map(
	      function(v, k)  {return coerce(mapper.call(context, v, k, iterable))}
	    ).flatten(true);
	  }
	
	
	  function interposeFactory(iterable, separator) {
	    var interposedSequence = makeSequence(iterable);
	    interposedSequence.size = iterable.size && iterable.size * 2 -1;
	    interposedSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k) 
	        {return (!iterations || fn(separator, iterations++, this$0) !== false) &&
	        fn(v, iterations++, this$0) !== false},
	        reverse
	      );
	      return iterations;
	    };
	    interposedSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      var step;
	      return new Iterator(function()  {
	        if (!step || iterations % 2) {
	          step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	        }
	        return iterations % 2 ?
	          iteratorValue(type, iterations++, separator) :
	          iteratorValue(type, iterations++, step.value, step);
	      });
	    };
	    return interposedSequence;
	  }
	
	
	  function sortFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    var isKeyedIterable = isKeyed(iterable);
	    var index = 0;
	    var entries = iterable.toSeq().map(
	      function(v, k)  {return [k, v, index++, mapper ? mapper(v, k, iterable) : v]}
	    ).toArray();
	    entries.sort(function(a, b)  {return comparator(a[3], b[3]) || a[2] - b[2]}).forEach(
	      isKeyedIterable ?
	      function(v, i)  { entries[i].length = 2; } :
	      function(v, i)  { entries[i] = v[1]; }
	    );
	    return isKeyedIterable ? KeyedSeq(entries) :
	      isIndexed(iterable) ? IndexedSeq(entries) :
	      SetSeq(entries);
	  }
	
	
	  function maxFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    if (mapper) {
	      var entry = iterable.toSeq()
	        .map(function(v, k)  {return [v, mapper(v, k, iterable)]})
	        .reduce(function(a, b)  {return maxCompare(comparator, a[1], b[1]) ? b : a});
	      return entry && entry[0];
	    } else {
	      return iterable.reduce(function(a, b)  {return maxCompare(comparator, a, b) ? b : a});
	    }
	  }
	
	  function maxCompare(comparator, a, b) {
	    var comp = comparator(b, a);
	    // b is considered the new max if the comparator declares them equal, but
	    // they are not equal and b is in fact a nullish value.
	    return (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) || comp > 0;
	  }
	
	
	  function zipWithFactory(keyIter, zipper, iters) {
	    var zipSequence = makeSequence(keyIter);
	    zipSequence.size = new ArraySeq(iters).map(function(i ) {return i.size}).min();
	    // Note: this a generic base implementation of __iterate in terms of
	    // __iterator which may be more generically useful in the future.
	    zipSequence.__iterate = function(fn, reverse) {
	      /* generic:
	      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        iterations++;
	        if (fn(step.value[1], step.value[0], this) === false) {
	          break;
	        }
	      }
	      return iterations;
	      */
	      // indexed:
	      var iterator = this.__iterator(ITERATE_VALUES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        if (fn(step.value, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };
	    zipSequence.__iteratorUncached = function(type, reverse) {
	      var iterators = iters.map(function(i )
	        {return (i = Iterable(i), getIterator(reverse ? i.reverse() : i))}
	      );
	      var iterations = 0;
	      var isDone = false;
	      return new Iterator(function()  {
	        var steps;
	        if (!isDone) {
	          steps = iterators.map(function(i ) {return i.next()});
	          isDone = steps.some(function(s ) {return s.done});
	        }
	        if (isDone) {
	          return iteratorDone();
	        }
	        return iteratorValue(
	          type,
	          iterations++,
	          zipper.apply(null, steps.map(function(s ) {return s.value}))
	        );
	      });
	    };
	    return zipSequence
	  }
	
	
	  // #pragma Helper Functions
	
	  function reify(iter, seq) {
	    return isSeq(iter) ? seq : iter.constructor(seq);
	  }
	
	  function validateEntry(entry) {
	    if (entry !== Object(entry)) {
	      throw new TypeError('Expected [K, V] tuple: ' + entry);
	    }
	  }
	
	  function resolveSize(iter) {
	    assertNotInfinite(iter.size);
	    return ensureSize(iter);
	  }
	
	  function iterableClass(iterable) {
	    return isKeyed(iterable) ? KeyedIterable :
	      isIndexed(iterable) ? IndexedIterable :
	      SetIterable;
	  }
	
	  function makeSequence(iterable) {
	    return Object.create(
	      (
	        isKeyed(iterable) ? KeyedSeq :
	        isIndexed(iterable) ? IndexedSeq :
	        SetSeq
	      ).prototype
	    );
	  }
	
	  function cacheResultThrough() {
	    if (this._iter.cacheResult) {
	      this._iter.cacheResult();
	      this.size = this._iter.size;
	      return this;
	    } else {
	      return Seq.prototype.cacheResult.call(this);
	    }
	  }
	
	  function defaultComparator(a, b) {
	    return a > b ? 1 : a < b ? -1 : 0;
	  }
	
	  function forceIterator(keyPath) {
	    var iter = getIterator(keyPath);
	    if (!iter) {
	      // Array might not be iterable in this environment, so we need a fallback
	      // to our wrapped type.
	      if (!isArrayLike(keyPath)) {
	        throw new TypeError('Expected iterable or array-like: ' + keyPath);
	      }
	      iter = getIterator(Iterable(keyPath));
	    }
	    return iter;
	  }
	
	  createClass(Record, KeyedCollection);
	
	    function Record(defaultValues, name) {
	      var hasInitialized;
	
	      var RecordType = function Record(values) {
	        if (values instanceof RecordType) {
	          return values;
	        }
	        if (!(this instanceof RecordType)) {
	          return new RecordType(values);
	        }
	        if (!hasInitialized) {
	          hasInitialized = true;
	          var keys = Object.keys(defaultValues);
	          setProps(RecordTypePrototype, keys);
	          RecordTypePrototype.size = keys.length;
	          RecordTypePrototype._name = name;
	          RecordTypePrototype._keys = keys;
	          RecordTypePrototype._defaultValues = defaultValues;
	        }
	        this._map = Map(values);
	      };
	
	      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
	      RecordTypePrototype.constructor = RecordType;
	
	      return RecordType;
	    }
	
	    Record.prototype.toString = function() {
	      return this.__toString(recordName(this) + ' {', '}');
	    };
	
	    // @pragma Access
	
	    Record.prototype.has = function(k) {
	      return this._defaultValues.hasOwnProperty(k);
	    };
	
	    Record.prototype.get = function(k, notSetValue) {
	      if (!this.has(k)) {
	        return notSetValue;
	      }
	      var defaultVal = this._defaultValues[k];
	      return this._map ? this._map.get(k, defaultVal) : defaultVal;
	    };
	
	    // @pragma Modification
	
	    Record.prototype.clear = function() {
	      if (this.__ownerID) {
	        this._map && this._map.clear();
	        return this;
	      }
	      var RecordType = this.constructor;
	      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
	    };
	
	    Record.prototype.set = function(k, v) {
	      if (!this.has(k)) {
	        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
	      }
	      if (this._map && !this._map.has(k)) {
	        var defaultVal = this._defaultValues[k];
	        if (v === defaultVal) {
	          return this;
	        }
	      }
	      var newMap = this._map && this._map.set(k, v);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };
	
	    Record.prototype.remove = function(k) {
	      if (!this.has(k)) {
	        return this;
	      }
	      var newMap = this._map && this._map.remove(k);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };
	
	    Record.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };
	
	    Record.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterator(type, reverse);
	    };
	
	    Record.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterate(fn, reverse);
	    };
	
	    Record.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map && this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return makeRecord(this, newMap, ownerID);
	    };
	
	
	  var RecordPrototype = Record.prototype;
	  RecordPrototype[DELETE] = RecordPrototype.remove;
	  RecordPrototype.deleteIn =
	  RecordPrototype.removeIn = MapPrototype.removeIn;
	  RecordPrototype.merge = MapPrototype.merge;
	  RecordPrototype.mergeWith = MapPrototype.mergeWith;
	  RecordPrototype.mergeIn = MapPrototype.mergeIn;
	  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
	  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
	  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  RecordPrototype.setIn = MapPrototype.setIn;
	  RecordPrototype.update = MapPrototype.update;
	  RecordPrototype.updateIn = MapPrototype.updateIn;
	  RecordPrototype.withMutations = MapPrototype.withMutations;
	  RecordPrototype.asMutable = MapPrototype.asMutable;
	  RecordPrototype.asImmutable = MapPrototype.asImmutable;
	
	
	  function makeRecord(likeRecord, map, ownerID) {
	    var record = Object.create(Object.getPrototypeOf(likeRecord));
	    record._map = map;
	    record.__ownerID = ownerID;
	    return record;
	  }
	
	  function recordName(record) {
	    return record._name || record.constructor.name || 'Record';
	  }
	
	  function setProps(prototype, names) {
	    try {
	      names.forEach(setProp.bind(undefined, prototype));
	    } catch (error) {
	      // Object.defineProperty failed. Probably IE8.
	    }
	  }
	
	  function setProp(prototype, name) {
	    Object.defineProperty(prototype, name, {
	      get: function() {
	        return this.get(name);
	      },
	      set: function(value) {
	        invariant(this.__ownerID, 'Cannot set on an immutable record.');
	        this.set(name, value);
	      }
	    });
	  }
	
	  createClass(Set, SetCollection);
	
	    // @pragma Construction
	
	    function Set(value) {
	      return value === null || value === undefined ? emptySet() :
	        isSet(value) && !isOrdered(value) ? value :
	        emptySet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }
	
	    Set.of = function(/*...values*/) {
	      return this(arguments);
	    };
	
	    Set.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };
	
	    Set.prototype.toString = function() {
	      return this.__toString('Set {', '}');
	    };
	
	    // @pragma Access
	
	    Set.prototype.has = function(value) {
	      return this._map.has(value);
	    };
	
	    // @pragma Modification
	
	    Set.prototype.add = function(value) {
	      return updateSet(this, this._map.set(value, true));
	    };
	
	    Set.prototype.remove = function(value) {
	      return updateSet(this, this._map.remove(value));
	    };
	
	    Set.prototype.clear = function() {
	      return updateSet(this, this._map.clear());
	    };
	
	    // @pragma Composition
	
	    Set.prototype.union = function() {var iters = SLICE$0.call(arguments, 0);
	      iters = iters.filter(function(x ) {return x.size !== 0});
	      if (iters.length === 0) {
	        return this;
	      }
	      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
	        return this.constructor(iters[0]);
	      }
	      return this.withMutations(function(set ) {
	        for (var ii = 0; ii < iters.length; ii++) {
	          SetIterable(iters[ii]).forEach(function(value ) {return set.add(value)});
	        }
	      });
	    };
	
	    Set.prototype.intersect = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (!iters.every(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };
	
	    Set.prototype.subtract = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (iters.some(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };
	
	    Set.prototype.merge = function() {
	      return this.union.apply(this, arguments);
	    };
	
	    Set.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return this.union.apply(this, iters);
	    };
	
	    Set.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator));
	    };
	
	    Set.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator, mapper));
	    };
	
	    Set.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };
	
	    Set.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._map.__iterate(function(_, k)  {return fn(k, k, this$0)}, reverse);
	    };
	
	    Set.prototype.__iterator = function(type, reverse) {
	      return this._map.map(function(_, k)  {return k}).__iterator(type, reverse);
	    };
	
	    Set.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return this.__make(newMap, ownerID);
	    };
	
	
	  function isSet(maybeSet) {
	    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
	  }
	
	  Set.isSet = isSet;
	
	  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';
	
	  var SetPrototype = Set.prototype;
	  SetPrototype[IS_SET_SENTINEL] = true;
	  SetPrototype[DELETE] = SetPrototype.remove;
	  SetPrototype.mergeDeep = SetPrototype.merge;
	  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
	  SetPrototype.withMutations = MapPrototype.withMutations;
	  SetPrototype.asMutable = MapPrototype.asMutable;
	  SetPrototype.asImmutable = MapPrototype.asImmutable;
	
	  SetPrototype.__empty = emptySet;
	  SetPrototype.__make = makeSet;
	
	  function updateSet(set, newMap) {
	    if (set.__ownerID) {
	      set.size = newMap.size;
	      set._map = newMap;
	      return set;
	    }
	    return newMap === set._map ? set :
	      newMap.size === 0 ? set.__empty() :
	      set.__make(newMap);
	  }
	
	  function makeSet(map, ownerID) {
	    var set = Object.create(SetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }
	
	  var EMPTY_SET;
	  function emptySet() {
	    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
	  }
	
	  createClass(OrderedSet, Set);
	
	    // @pragma Construction
	
	    function OrderedSet(value) {
	      return value === null || value === undefined ? emptyOrderedSet() :
	        isOrderedSet(value) ? value :
	        emptyOrderedSet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }
	
	    OrderedSet.of = function(/*...values*/) {
	      return this(arguments);
	    };
	
	    OrderedSet.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };
	
	    OrderedSet.prototype.toString = function() {
	      return this.__toString('OrderedSet {', '}');
	    };
	
	
	  function isOrderedSet(maybeOrderedSet) {
	    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
	  }
	
	  OrderedSet.isOrderedSet = isOrderedSet;
	
	  var OrderedSetPrototype = OrderedSet.prototype;
	  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;
	
	  OrderedSetPrototype.__empty = emptyOrderedSet;
	  OrderedSetPrototype.__make = makeOrderedSet;
	
	  function makeOrderedSet(map, ownerID) {
	    var set = Object.create(OrderedSetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }
	
	  var EMPTY_ORDERED_SET;
	  function emptyOrderedSet() {
	    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
	  }
	
	  createClass(Stack, IndexedCollection);
	
	    // @pragma Construction
	
	    function Stack(value) {
	      return value === null || value === undefined ? emptyStack() :
	        isStack(value) ? value :
	        emptyStack().unshiftAll(value);
	    }
	
	    Stack.of = function(/*...values*/) {
	      return this(arguments);
	    };
	
	    Stack.prototype.toString = function() {
	      return this.__toString('Stack [', ']');
	    };
	
	    // @pragma Access
	
	    Stack.prototype.get = function(index, notSetValue) {
	      var head = this._head;
	      index = wrapIndex(this, index);
	      while (head && index--) {
	        head = head.next;
	      }
	      return head ? head.value : notSetValue;
	    };
	
	    Stack.prototype.peek = function() {
	      return this._head && this._head.value;
	    };
	
	    // @pragma Modification
	
	    Stack.prototype.push = function(/*...values*/) {
	      if (arguments.length === 0) {
	        return this;
	      }
	      var newSize = this.size + arguments.length;
	      var head = this._head;
	      for (var ii = arguments.length - 1; ii >= 0; ii--) {
	        head = {
	          value: arguments[ii],
	          next: head
	        };
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };
	
	    Stack.prototype.pushAll = function(iter) {
	      iter = IndexedIterable(iter);
	      if (iter.size === 0) {
	        return this;
	      }
	      assertNotInfinite(iter.size);
	      var newSize = this.size;
	      var head = this._head;
	      iter.reverse().forEach(function(value ) {
	        newSize++;
	        head = {
	          value: value,
	          next: head
	        };
	      });
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };
	
	    Stack.prototype.pop = function() {
	      return this.slice(1);
	    };
	
	    Stack.prototype.unshift = function(/*...values*/) {
	      return this.push.apply(this, arguments);
	    };
	
	    Stack.prototype.unshiftAll = function(iter) {
	      return this.pushAll(iter);
	    };
	
	    Stack.prototype.shift = function() {
	      return this.pop.apply(this, arguments);
	    };
	
	    Stack.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._head = undefined;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyStack();
	    };
	
	    Stack.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      var resolvedBegin = resolveBegin(begin, this.size);
	      var resolvedEnd = resolveEnd(end, this.size);
	      if (resolvedEnd !== this.size) {
	        // super.slice(begin, end);
	        return IndexedCollection.prototype.slice.call(this, begin, end);
	      }
	      var newSize = this.size - resolvedBegin;
	      var head = this._head;
	      while (resolvedBegin--) {
	        head = head.next;
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };
	
	    // @pragma Mutability
	
	    Stack.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeStack(this.size, this._head, ownerID, this.__hash);
	    };
	
	    // @pragma Iteration
	
	    Stack.prototype.__iterate = function(fn, reverse) {
	      if (reverse) {
	        return this.reverse().__iterate(fn);
	      }
	      var iterations = 0;
	      var node = this._head;
	      while (node) {
	        if (fn(node.value, iterations++, this) === false) {
	          break;
	        }
	        node = node.next;
	      }
	      return iterations;
	    };
	
	    Stack.prototype.__iterator = function(type, reverse) {
	      if (reverse) {
	        return this.reverse().__iterator(type);
	      }
	      var iterations = 0;
	      var node = this._head;
	      return new Iterator(function()  {
	        if (node) {
	          var value = node.value;
	          node = node.next;
	          return iteratorValue(type, iterations++, value);
	        }
	        return iteratorDone();
	      });
	    };
	
	
	  function isStack(maybeStack) {
	    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
	  }
	
	  Stack.isStack = isStack;
	
	  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';
	
	  var StackPrototype = Stack.prototype;
	  StackPrototype[IS_STACK_SENTINEL] = true;
	  StackPrototype.withMutations = MapPrototype.withMutations;
	  StackPrototype.asMutable = MapPrototype.asMutable;
	  StackPrototype.asImmutable = MapPrototype.asImmutable;
	  StackPrototype.wasAltered = MapPrototype.wasAltered;
	
	
	  function makeStack(size, head, ownerID, hash) {
	    var map = Object.create(StackPrototype);
	    map.size = size;
	    map._head = head;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }
	
	  var EMPTY_STACK;
	  function emptyStack() {
	    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
	  }
	
	  /**
	   * Contributes additional methods to a constructor
	   */
	  function mixin(ctor, methods) {
	    var keyCopier = function(key ) { ctor.prototype[key] = methods[key]; };
	    Object.keys(methods).forEach(keyCopier);
	    Object.getOwnPropertySymbols &&
	      Object.getOwnPropertySymbols(methods).forEach(keyCopier);
	    return ctor;
	  }
	
	  Iterable.Iterator = Iterator;
	
	  mixin(Iterable, {
	
	    // ### Conversion to other types
	
	    toArray: function() {
	      assertNotInfinite(this.size);
	      var array = new Array(this.size || 0);
	      this.valueSeq().__iterate(function(v, i)  { array[i] = v; });
	      return array;
	    },
	
	    toIndexedSeq: function() {
	      return new ToIndexedSequence(this);
	    },
	
	    toJS: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJS === 'function' ? value.toJS() : value}
	      ).__toJS();
	    },
	
	    toJSON: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJSON === 'function' ? value.toJSON() : value}
	      ).__toJS();
	    },
	
	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, true);
	    },
	
	    toMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Map(this.toKeyedSeq());
	    },
	
	    toObject: function() {
	      assertNotInfinite(this.size);
	      var object = {};
	      this.__iterate(function(v, k)  { object[k] = v; });
	      return object;
	    },
	
	    toOrderedMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedMap(this.toKeyedSeq());
	    },
	
	    toOrderedSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
	    },
	
	    toSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Set(isKeyed(this) ? this.valueSeq() : this);
	    },
	
	    toSetSeq: function() {
	      return new ToSetSequence(this);
	    },
	
	    toSeq: function() {
	      return isIndexed(this) ? this.toIndexedSeq() :
	        isKeyed(this) ? this.toKeyedSeq() :
	        this.toSetSeq();
	    },
	
	    toStack: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Stack(isKeyed(this) ? this.valueSeq() : this);
	    },
	
	    toList: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return List(isKeyed(this) ? this.valueSeq() : this);
	    },
	
	
	    // ### Common JavaScript methods and properties
	
	    toString: function() {
	      return '[Iterable]';
	    },
	
	    __toString: function(head, tail) {
	      if (this.size === 0) {
	        return head + tail;
	      }
	      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
	    },
	
	
	    // ### ES6 Collection methods (ES6 Array and Map)
	
	    concat: function() {var values = SLICE$0.call(arguments, 0);
	      return reify(this, concatFactory(this, values));
	    },
	
	    includes: function(searchValue) {
	      return this.some(function(value ) {return is(value, searchValue)});
	    },
	
	    entries: function() {
	      return this.__iterator(ITERATE_ENTRIES);
	    },
	
	    every: function(predicate, context) {
	      assertNotInfinite(this.size);
	      var returnValue = true;
	      this.__iterate(function(v, k, c)  {
	        if (!predicate.call(context, v, k, c)) {
	          returnValue = false;
	          return false;
	        }
	      });
	      return returnValue;
	    },
	
	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, true));
	    },
	
	    find: function(predicate, context, notSetValue) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[1] : notSetValue;
	    },
	
	    forEach: function(sideEffect, context) {
	      assertNotInfinite(this.size);
	      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
	    },
	
	    join: function(separator) {
	      assertNotInfinite(this.size);
	      separator = separator !== undefined ? '' + separator : ',';
	      var joined = '';
	      var isFirst = true;
	      this.__iterate(function(v ) {
	        isFirst ? (isFirst = false) : (joined += separator);
	        joined += v !== null && v !== undefined ? v.toString() : '';
	      });
	      return joined;
	    },
	
	    keys: function() {
	      return this.__iterator(ITERATE_KEYS);
	    },
	
	    map: function(mapper, context) {
	      return reify(this, mapFactory(this, mapper, context));
	    },
	
	    reduce: function(reducer, initialReduction, context) {
	      assertNotInfinite(this.size);
	      var reduction;
	      var useFirst;
	      if (arguments.length < 2) {
	        useFirst = true;
	      } else {
	        reduction = initialReduction;
	      }
	      this.__iterate(function(v, k, c)  {
	        if (useFirst) {
	          useFirst = false;
	          reduction = v;
	        } else {
	          reduction = reducer.call(context, reduction, v, k, c);
	        }
	      });
	      return reduction;
	    },
	
	    reduceRight: function(reducer, initialReduction, context) {
	      var reversed = this.toKeyedSeq().reverse();
	      return reversed.reduce.apply(reversed, arguments);
	    },
	
	    reverse: function() {
	      return reify(this, reverseFactory(this, true));
	    },
	
	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, true));
	    },
	
	    some: function(predicate, context) {
	      return !this.every(not(predicate), context);
	    },
	
	    sort: function(comparator) {
	      return reify(this, sortFactory(this, comparator));
	    },
	
	    values: function() {
	      return this.__iterator(ITERATE_VALUES);
	    },
	
	
	    // ### More sequential methods
	
	    butLast: function() {
	      return this.slice(0, -1);
	    },
	
	    isEmpty: function() {
	      return this.size !== undefined ? this.size === 0 : !this.some(function()  {return true});
	    },
	
	    count: function(predicate, context) {
	      return ensureSize(
	        predicate ? this.toSeq().filter(predicate, context) : this
	      );
	    },
	
	    countBy: function(grouper, context) {
	      return countByFactory(this, grouper, context);
	    },
	
	    equals: function(other) {
	      return deepEqual(this, other);
	    },
	
	    entrySeq: function() {
	      var iterable = this;
	      if (iterable._cache) {
	        // We cache as an entries array, so we can just return the cache!
	        return new ArraySeq(iterable._cache);
	      }
	      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
	      entriesSequence.fromEntrySeq = function()  {return iterable.toSeq()};
	      return entriesSequence;
	    },
	
	    filterNot: function(predicate, context) {
	      return this.filter(not(predicate), context);
	    },
	
	    findEntry: function(predicate, context, notSetValue) {
	      var found = notSetValue;
	      this.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          found = [k, v];
	          return false;
	        }
	      });
	      return found;
	    },
	
	    findKey: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry && entry[0];
	    },
	
	    findLast: function(predicate, context, notSetValue) {
	      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
	    },
	
	    findLastEntry: function(predicate, context, notSetValue) {
	      return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
	    },
	
	    findLastKey: function(predicate, context) {
	      return this.toKeyedSeq().reverse().findKey(predicate, context);
	    },
	
	    first: function() {
	      return this.find(returnTrue);
	    },
	
	    flatMap: function(mapper, context) {
	      return reify(this, flatMapFactory(this, mapper, context));
	    },
	
	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, true));
	    },
	
	    fromEntrySeq: function() {
	      return new FromEntriesSequence(this);
	    },
	
	    get: function(searchKey, notSetValue) {
	      return this.find(function(_, key)  {return is(key, searchKey)}, undefined, notSetValue);
	    },
	
	    getIn: function(searchKeyPath, notSetValue) {
	      var nested = this;
	      // Note: in an ES6 environment, we would prefer:
	      // for (var key of searchKeyPath) {
	      var iter = forceIterator(searchKeyPath);
	      var step;
	      while (!(step = iter.next()).done) {
	        var key = step.value;
	        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
	        if (nested === NOT_SET) {
	          return notSetValue;
	        }
	      }
	      return nested;
	    },
	
	    groupBy: function(grouper, context) {
	      return groupByFactory(this, grouper, context);
	    },
	
	    has: function(searchKey) {
	      return this.get(searchKey, NOT_SET) !== NOT_SET;
	    },
	
	    hasIn: function(searchKeyPath) {
	      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
	    },
	
	    isSubset: function(iter) {
	      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
	      return this.every(function(value ) {return iter.includes(value)});
	    },
	
	    isSuperset: function(iter) {
	      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
	      return iter.isSubset(this);
	    },
	
	    keyOf: function(searchValue) {
	      return this.findKey(function(value ) {return is(value, searchValue)});
	    },
	
	    keySeq: function() {
	      return this.toSeq().map(keyMapper).toIndexedSeq();
	    },
	
	    last: function() {
	      return this.toSeq().reverse().first();
	    },
	
	    lastKeyOf: function(searchValue) {
	      return this.toKeyedSeq().reverse().keyOf(searchValue);
	    },
	
	    max: function(comparator) {
	      return maxFactory(this, comparator);
	    },
	
	    maxBy: function(mapper, comparator) {
	      return maxFactory(this, comparator, mapper);
	    },
	
	    min: function(comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
	    },
	
	    minBy: function(mapper, comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
	    },
	
	    rest: function() {
	      return this.slice(1);
	    },
	
	    skip: function(amount) {
	      return this.slice(Math.max(0, amount));
	    },
	
	    skipLast: function(amount) {
	      return reify(this, this.toSeq().reverse().skip(amount).reverse());
	    },
	
	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, true));
	    },
	
	    skipUntil: function(predicate, context) {
	      return this.skipWhile(not(predicate), context);
	    },
	
	    sortBy: function(mapper, comparator) {
	      return reify(this, sortFactory(this, comparator, mapper));
	    },
	
	    take: function(amount) {
	      return this.slice(0, Math.max(0, amount));
	    },
	
	    takeLast: function(amount) {
	      return reify(this, this.toSeq().reverse().take(amount).reverse());
	    },
	
	    takeWhile: function(predicate, context) {
	      return reify(this, takeWhileFactory(this, predicate, context));
	    },
	
	    takeUntil: function(predicate, context) {
	      return this.takeWhile(not(predicate), context);
	    },
	
	    valueSeq: function() {
	      return this.toIndexedSeq();
	    },
	
	
	    // ### Hashable Object
	
	    hashCode: function() {
	      return this.__hash || (this.__hash = hashIterable(this));
	    }
	
	
	    // ### Internal
	
	    // abstract __iterate(fn, reverse)
	
	    // abstract __iterator(type, reverse)
	  });
	
	  // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';
	
	  var IterablePrototype = Iterable.prototype;
	  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
	  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
	  IterablePrototype.__toJS = IterablePrototype.toArray;
	  IterablePrototype.__toStringMapper = quoteString;
	  IterablePrototype.inspect =
	  IterablePrototype.toSource = function() { return this.toString(); };
	  IterablePrototype.chain = IterablePrototype.flatMap;
	  IterablePrototype.contains = IterablePrototype.includes;
	
	  mixin(KeyedIterable, {
	
	    // ### More sequential methods
	
	    flip: function() {
	      return reify(this, flipFactory(this));
	    },
	
	    mapEntries: function(mapper, context) {var this$0 = this;
	      var iterations = 0;
	      return reify(this,
	        this.toSeq().map(
	          function(v, k)  {return mapper.call(context, [k, v], iterations++, this$0)}
	        ).fromEntrySeq()
	      );
	    },
	
	    mapKeys: function(mapper, context) {var this$0 = this;
	      return reify(this,
	        this.toSeq().flip().map(
	          function(k, v)  {return mapper.call(context, k, v, this$0)}
	        ).flip()
	      );
	    }
	
	  });
	
	  var KeyedIterablePrototype = KeyedIterable.prototype;
	  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
	  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
	  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
	  KeyedIterablePrototype.__toStringMapper = function(v, k)  {return JSON.stringify(k) + ': ' + quoteString(v)};
	
	
	
	  mixin(IndexedIterable, {
	
	    // ### Conversion to other types
	
	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, false);
	    },
	
	
	    // ### ES6 Collection methods (ES6 Array and Map)
	
	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, false));
	    },
	
	    findIndex: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[0] : -1;
	    },
	
	    indexOf: function(searchValue) {
	      var key = this.keyOf(searchValue);
	      return key === undefined ? -1 : key;
	    },
	
	    lastIndexOf: function(searchValue) {
	      var key = this.lastKeyOf(searchValue);
	      return key === undefined ? -1 : key;
	    },
	
	    reverse: function() {
	      return reify(this, reverseFactory(this, false));
	    },
	
	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, false));
	    },
	
	    splice: function(index, removeNum /*, ...values*/) {
	      var numArgs = arguments.length;
	      removeNum = Math.max(removeNum | 0, 0);
	      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
	        return this;
	      }
	      // If index is negative, it should resolve relative to the size of the
	      // collection. However size may be expensive to compute if not cached, so
	      // only call count() if the number is in fact negative.
	      index = resolveBegin(index, index < 0 ? this.count() : this.size);
	      var spliced = this.slice(0, index);
	      return reify(
	        this,
	        numArgs === 1 ?
	          spliced :
	          spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
	      );
	    },
	
	
	    // ### More collection methods
	
	    findLastIndex: function(predicate, context) {
	      var entry = this.findLastEntry(predicate, context);
	      return entry ? entry[0] : -1;
	    },
	
	    first: function() {
	      return this.get(0);
	    },
	
	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, false));
	    },
	
	    get: function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      return (index < 0 || (this.size === Infinity ||
	          (this.size !== undefined && index > this.size))) ?
	        notSetValue :
	        this.find(function(_, key)  {return key === index}, undefined, notSetValue);
	    },
	
	    has: function(index) {
	      index = wrapIndex(this, index);
	      return index >= 0 && (this.size !== undefined ?
	        this.size === Infinity || index < this.size :
	        this.indexOf(index) !== -1
	      );
	    },
	
	    interpose: function(separator) {
	      return reify(this, interposeFactory(this, separator));
	    },
	
	    interleave: function(/*...iterables*/) {
	      var iterables = [this].concat(arrCopy(arguments));
	      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
	      var interleaved = zipped.flatten(true);
	      if (zipped.size) {
	        interleaved.size = zipped.size * iterables.length;
	      }
	      return reify(this, interleaved);
	    },
	
	    keySeq: function() {
	      return Range(0, this.size);
	    },
	
	    last: function() {
	      return this.get(-1);
	    },
	
	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, false));
	    },
	
	    zip: function(/*, ...iterables */) {
	      var iterables = [this].concat(arrCopy(arguments));
	      return reify(this, zipWithFactory(this, defaultZipper, iterables));
	    },
	
	    zipWith: function(zipper/*, ...iterables */) {
	      var iterables = arrCopy(arguments);
	      iterables[0] = this;
	      return reify(this, zipWithFactory(this, zipper, iterables));
	    }
	
	  });
	
	  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
	  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;
	
	
	
	  mixin(SetIterable, {
	
	    // ### ES6 Collection methods (ES6 Array and Map)
	
	    get: function(value, notSetValue) {
	      return this.has(value) ? value : notSetValue;
	    },
	
	    includes: function(value) {
	      return this.has(value);
	    },
	
	
	    // ### More sequential methods
	
	    keySeq: function() {
	      return this.valueSeq();
	    }
	
	  });
	
	  SetIterable.prototype.has = IterablePrototype.includes;
	  SetIterable.prototype.contains = SetIterable.prototype.includes;
	
	
	  // Mixin subclasses
	
	  mixin(KeyedSeq, KeyedIterable.prototype);
	  mixin(IndexedSeq, IndexedIterable.prototype);
	  mixin(SetSeq, SetIterable.prototype);
	
	  mixin(KeyedCollection, KeyedIterable.prototype);
	  mixin(IndexedCollection, IndexedIterable.prototype);
	  mixin(SetCollection, SetIterable.prototype);
	
	
	  // #pragma Helper functions
	
	  function keyMapper(v, k) {
	    return k;
	  }
	
	  function entryMapper(v, k) {
	    return [k, v];
	  }
	
	  function not(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    }
	  }
	
	  function neg(predicate) {
	    return function() {
	      return -predicate.apply(this, arguments);
	    }
	  }
	
	  function quoteString(value) {
	    return typeof value === 'string' ? JSON.stringify(value) : String(value);
	  }
	
	  function defaultZipper() {
	    return arrCopy(arguments);
	  }
	
	  function defaultNegComparator(a, b) {
	    return a < b ? 1 : a > b ? -1 : 0;
	  }
	
	  function hashIterable(iterable) {
	    if (iterable.size === Infinity) {
	      return 0;
	    }
	    var ordered = isOrdered(iterable);
	    var keyed = isKeyed(iterable);
	    var h = ordered ? 1 : 0;
	    var size = iterable.__iterate(
	      keyed ?
	        ordered ?
	          function(v, k)  { h = 31 * h + hashMerge(hash(v), hash(k)) | 0; } :
	          function(v, k)  { h = h + hashMerge(hash(v), hash(k)) | 0; } :
	        ordered ?
	          function(v ) { h = 31 * h + hash(v) | 0; } :
	          function(v ) { h = h + hash(v) | 0; }
	    );
	    return murmurHashOfSize(size, h);
	  }
	
	  function murmurHashOfSize(size, h) {
	    h = imul(h, 0xCC9E2D51);
	    h = imul(h << 15 | h >>> -15, 0x1B873593);
	    h = imul(h << 13 | h >>> -13, 5);
	    h = (h + 0xE6546B64 | 0) ^ size;
	    h = imul(h ^ h >>> 16, 0x85EBCA6B);
	    h = imul(h ^ h >>> 13, 0xC2B2AE35);
	    h = smi(h ^ h >>> 16);
	    return h;
	  }
	
	  function hashMerge(a, b) {
	    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
	  }
	
	  var Immutable = {
	
	    Iterable: Iterable,
	
	    Seq: Seq,
	    Collection: Collection,
	    Map: Map,
	    OrderedMap: OrderedMap,
	    List: List,
	    Stack: Stack,
	    Set: Set,
	    OrderedSet: OrderedSet,
	
	    Record: Record,
	    Range: Range,
	    Repeat: Repeat,
	
	    is: is,
	    fromJS: fromJS
	
	  };
	
	  return Immutable;
	
	}));

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define("react-openseadragon",[],t):"object"==typeof exports?exports["react-openseadragon"]=t():e["react-openseadragon"]=t()}(this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.OpenSeadragonControls=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},l=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),u=i(1);Object.defineProperty(t,"OpenSeadragonControls",{enumerable:!0,get:function(){return u.OpenSeadragonControls}});var c=i(2),h=n(c),d=i(33),p=n(d),f=i(35),m=n(f),g=i(36),v=n(g);i(38);var y=function(e){function t(e){r(this,t);var i=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i.viewer=i.viewer.bind(i),i.page_handler=i.page_handler.bind(i),i.state={text:i.text(0),viewer:{},last_page:0},i}return s(t,e),l(t,[{key:"text",value:function(e){return this.props.items[1].texts[e]}},{key:"page_handler",value:function(e,t){this.setState({last_page:e.page}),this.setState({text:this.text(e.page)}),this.setState({viewer:t})}},{key:"viewer",value:function(){var e=this.props.getActiveItem(),t=e.type;e.text;switch(t){case"image":return h.default.createElement(v.default,{last_page:this.state.last_page,page_handler:this.page_handler,config:this.props.getActiveItem()});case"transcript":return h.default.createElement("div",null,this.state.text);default:return h.default.createElement("div",null,'No Viewer Avaialable for type: "',t,'"')}}},{key:"render",value:function(){this.props.include_controls;if(null!=this.state){this.state.viewer;return h.default.createElement("div",null,h.default.createElement("div",{className:"row"},h.default.createElement(m.default,a({viewer:this.state.viewer},this.props))),h.default.createElement("div",{className:"row"},this.viewer()))}return h.default.createElement("div",null,h.default.createElement("div",{className:"row"},h.default.createElement(m.default,a({viewer:this.state.viewer},this.props))),h.default.createElement("div",{className:"row"},this.viewer()))}}]),t}(h.default.Component),w={items:h.default.PropTypes.array.isRequired};y.propTypes=w,t.default=(0,p.default)(y)},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=i(2),o=n(r),s=function(e){return o.default.createElement("ul",{className:"osd-toolbar"},o.default.createElement("li",null,o.default.createElement("a",{id:"zoom-in"},o.default.createElement("i",{className:"glyphicon glyphicon-zoom-in"}))),o.default.createElement("li",null,o.default.createElement("a",{id:"zoom-out"},o.default.createElement("i",{className:"glyphicon glyphicon-zoom-out"}))),o.default.createElement("li",null,o.default.createElement("a",{id:"reset"},o.default.createElement("i",{className:"glyphicon glyphicon-home"}))),o.default.createElement("li",null,o.default.createElement("a",{id:"full-page"},o.default.createElement("i",{className:"glyphicon glyphicon-resize-full"}))),o.default.createElement("li",null,o.default.createElement("a",{id:"previous"},o.default.createElement("i",{className:"glyphicon glyphicon-arrow-left"}))),o.default.createElement("li",null,o.default.createElement("a",{id:"next"},o.default.createElement("i",{className:"glyphicon glyphicon-arrow-right"}))))};t.default=s},function(e,t,i){"use strict";e.exports=i(3)},function(e,t,i){(function(t){"use strict";var n=i(5),r=i(6),o=i(19),s=i(22),a=i(23),l=i(25),u=i(10),c=i(30),h=i(31),d=i(32),p=i(12),f=u.createElement,m=u.createFactory,g=u.cloneElement;if("production"!==t.env.NODE_ENV){var v=i(26);f=v.createElement,m=v.createFactory,g=v.cloneElement}var y=n;if("production"!==t.env.NODE_ENV){var w=!1;y=function(){return"production"!==t.env.NODE_ENV?p(w,"React.__spread is deprecated and should not be used. Use Object.assign directly or another helper function with similar semantics. You may be seeing this warning due to your compiler. See https://fb.me/react-spread-deprecation for more details."):void 0,w=!0,n.apply(null,arguments)}}var _={Children:{map:r.map,forEach:r.forEach,count:r.count,toArray:r.toArray,only:d},Component:o,PureComponent:s,createElement:f,cloneElement:g,isValidElement:u.isValidElement,PropTypes:c,createClass:a.createClass,createFactory:m,createMixin:function(e){return e},DOM:l,version:h,__spread:y};e.exports=_}).call(t,i(4))},function(e,t){function i(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function r(e){if(c===setTimeout)return setTimeout(e,0);if((c===i||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function o(e){if(h===clearTimeout)return clearTimeout(e);if((h===n||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(e);try{return h(e)}catch(t){try{return h.call(null,e)}catch(t){return h.call(this,e)}}}function s(){m&&p&&(m=!1,p.length?f=p.concat(f):g=-1,f.length&&a())}function a(){if(!m){var e=r(s);m=!0;for(var t=f.length;t;){for(p=f,f=[];++g<t;)p&&p[g].run();g=-1,t=f.length}p=null,m=!1,o(e)}}function l(e,t){this.fun=e,this.array=t}function u(){}var c,h,d=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:i}catch(e){c=i}try{h="function"==typeof clearTimeout?clearTimeout:n}catch(e){h=n}}();var p,f=[],m=!1,g=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];f.push(new l(e,t)),1!==f.length||m||r(a)},l.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=u,d.addListener=u,d.once=u,d.off=u,d.removeListener=u,d.removeAllListeners=u,d.emit=u,d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t){"use strict";function i(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function n(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},i=0;i<10;i++)t["_"+String.fromCharCode(i)]=i;var n=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==n.join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}var r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=n()?Object.assign:function(e,t){for(var n,s,a=i(e),l=1;l<arguments.length;l++){n=Object(arguments[l]);for(var u in n)r.call(n,u)&&(a[u]=n[u]);if(Object.getOwnPropertySymbols){s=Object.getOwnPropertySymbols(n);for(var c=0;c<s.length;c++)o.call(n,s[c])&&(a[s[c]]=n[s[c]])}}return a}},function(e,t,i){"use strict";function n(e){return(""+e).replace(_,"$&/")}function r(e,t){this.func=e,this.context=t,this.count=0}function o(e,t,i){var n=e.func,r=e.context;n.call(r,t,e.count++)}function s(e,t,i){if(null==e)return e;var n=r.getPooled(t,i);v(e,o,n),r.release(n)}function a(e,t,i,n){this.result=e,this.keyPrefix=t,this.func=i,this.context=n,this.count=0}function l(e,t,i){var r=e.result,o=e.keyPrefix,s=e.func,a=e.context,l=s.call(a,t,e.count++);Array.isArray(l)?u(l,r,i,g.thatReturnsArgument):null!=l&&(m.isValidElement(l)&&(l=m.cloneAndReplaceKey(l,o+(!l.key||t&&t.key===l.key?"":n(l.key)+"/")+i)),r.push(l))}function u(e,t,i,r,o){var s="";null!=i&&(s=n(i)+"/");var u=a.getPooled(t,s,r,o);v(e,l,u),a.release(u)}function c(e,t,i){if(null==e)return e;var n=[];return u(e,n,null,t,i),n}function h(e,t,i){return null}function d(e,t){return v(e,h,null)}function p(e){var t=[];return u(e,t,null,g.thatReturnsArgument),t}var f=i(7),m=i(10),g=i(13),v=i(16),y=f.twoArgumentPooler,w=f.fourArgumentPooler,_=/\/+/g;r.prototype.destructor=function(){this.func=null,this.context=null,this.count=0},f.addPoolingTo(r,y),a.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},f.addPoolingTo(a,w);var S={forEach:s,map:c,mapIntoWithKeyPrefixInternal:u,count:d,toArray:p};e.exports=S},function(e,t,i){(function(t){"use strict";var n=i(8),r=i(9),o=function(e){var t=this;if(t.instancePool.length){var i=t.instancePool.pop();return t.call(i,e),i}return new t(e)},s=function(e,t){var i=this;if(i.instancePool.length){var n=i.instancePool.pop();return i.call(n,e,t),n}return new i(e,t)},a=function(e,t,i){var n=this;if(n.instancePool.length){var r=n.instancePool.pop();return n.call(r,e,t,i),r}return new n(e,t,i)},l=function(e,t,i,n){var r=this;if(r.instancePool.length){var o=r.instancePool.pop();return r.call(o,e,t,i,n),o}return new r(e,t,i,n)},u=function(e,t,i,n,r){var o=this;if(o.instancePool.length){var s=o.instancePool.pop();return o.call(s,e,t,i,n,r),s}return new o(e,t,i,n,r)},c=function(e){var i=this;e instanceof i?void 0:"production"!==t.env.NODE_ENV?r(!1,"Trying to release an instance into a pool of a different type."):n("25"),e.destructor(),i.instancePool.length<i.poolSize&&i.instancePool.push(e)},h=10,d=o,p=function(e,t){var i=e;return i.instancePool=[],i.getPooled=t||d,i.poolSize||(i.poolSize=h),i.release=c,i},f={addPoolingTo:p,oneArgumentPooler:o,twoArgumentPooler:s,threeArgumentPooler:a,fourArgumentPooler:l,fiveArgumentPooler:u};e.exports=f}).call(t,i(4))},function(e,t){"use strict";function i(e){for(var t=arguments.length-1,i="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)i+="&args[]="+encodeURIComponent(arguments[n+1]);i+=" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";var r=new Error(i);throw r.name="Invariant Violation",r.framesToPop=1,r}e.exports=i},function(e,t,i){(function(t){"use strict";function i(e,t,i,r,o,s,a,l){if(n(t),!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[i,r,o,s,a,l],h=0;u=new Error(t.replace(/%s/g,function(){return c[h++]})),u.name="Invariant Violation"}throw u.framesToPop=1,u}}var n=function(e){};"production"!==t.env.NODE_ENV&&(n=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")}),e.exports=i}).call(t,i(4))},function(e,t,i){(function(t){"use strict";function n(e){if("production"!==t.env.NODE_ENV&&p.call(e,"ref")){var i=Object.getOwnPropertyDescriptor(e,"ref").get;if(i&&i.isReactWarning)return!1}return void 0!==e.ref}function r(e){if("production"!==t.env.NODE_ENV&&p.call(e,"key")){var i=Object.getOwnPropertyDescriptor(e,"key").get;if(i&&i.isReactWarning)return!1}return void 0!==e.key}function o(e,i){var n=function(){a||(a=!0,"production"!==t.env.NODE_ENV?h(!1,"%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)",i):void 0)};n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}function s(e,i){var n=function(){l||(l=!0,"production"!==t.env.NODE_ENV?h(!1,"%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)",i):void 0)};n.isReactWarning=!0,Object.defineProperty(e,"ref",{get:n,configurable:!0})}var a,l,u=i(5),c=i(11),h=i(12),d=i(14),p=Object.prototype.hasOwnProperty,f=i(15),m={key:!0,ref:!0,__self:!0,__source:!0},g=function(e,i,n,r,o,s,a){var l={$$typeof:f,type:e,key:i,ref:n,props:a,_owner:s};return"production"!==t.env.NODE_ENV&&(l._store={},d?(Object.defineProperty(l._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(l,"_self",{configurable:!1,enumerable:!1,writable:!1,value:r}),Object.defineProperty(l,"_source",{configurable:!1,enumerable:!1,writable:!1,value:o})):(l._store.validated=!1,l._self=r,l._source=o),Object.freeze&&(Object.freeze(l.props),Object.freeze(l))),l};g.createElement=function(e,i,a){var l,u={},h=null,d=null,v=null,y=null;if(null!=i){n(i)&&(d=i.ref),r(i)&&(h=""+i.key),v=void 0===i.__self?null:i.__self,y=void 0===i.__source?null:i.__source;for(l in i)p.call(i,l)&&!m.hasOwnProperty(l)&&(u[l]=i[l])}var w=arguments.length-2;if(1===w)u.children=a;else if(w>1){for(var _=Array(w),S=0;S<w;S++)_[S]=arguments[S+2];"production"!==t.env.NODE_ENV&&Object.freeze&&Object.freeze(_),u.children=_}if(e&&e.defaultProps){var E=e.defaultProps;for(l in E)void 0===u[l]&&(u[l]=E[l])}if("production"!==t.env.NODE_ENV&&(h||d)&&("undefined"==typeof u.$$typeof||u.$$typeof!==f)){var T="function"==typeof e?e.displayName||e.name||"Unknown":e;h&&o(u,T),d&&s(u,T)}return g(e,h,d,v,y,c.current,u)},g.createFactory=function(e){var t=g.createElement.bind(null,e);return t.type=e,t},g.cloneAndReplaceKey=function(e,t){var i=g(e.type,t,e.ref,e._self,e._source,e._owner,e.props);return i},g.cloneElement=function(e,t,i){var o,s=u({},e.props),a=e.key,l=e.ref,h=e._self,d=e._source,f=e._owner;if(null!=t){n(t)&&(l=t.ref,f=c.current),r(t)&&(a=""+t.key);var v;e.type&&e.type.defaultProps&&(v=e.type.defaultProps);for(o in t)p.call(t,o)&&!m.hasOwnProperty(o)&&(void 0===t[o]&&void 0!==v?s[o]=v[o]:s[o]=t[o])}var y=arguments.length-2;if(1===y)s.children=i;else if(y>1){for(var w=Array(y),_=0;_<y;_++)w[_]=arguments[_+2];s.children=w}return g(e.type,a,l,h,d,f,s)},g.isValidElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===f},e.exports=g}).call(t,i(4))},function(e,t){"use strict";var i={current:null};e.exports=i},function(e,t,i){(function(t){"use strict";var n=i(13),r=n;"production"!==t.env.NODE_ENV&&!function(){var e=function(e){for(var t=arguments.length,i=Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];var r=0,o="Warning: "+e.replace(/%s/g,function(){return i[r++]});"undefined"!=typeof console&&console.error(o);try{throw new Error(o)}catch(e){}};r=function(t,i){if(void 0===i)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==i.indexOf("Failed Composite propType: ")&&!t){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];e.apply(void 0,[i].concat(r))}}}(),e.exports=r}).call(t,i(4))},function(e,t){"use strict";function i(e){return function(){return e}}var n=function(){};n.thatReturns=i,n.thatReturnsFalse=i(!1),n.thatReturnsTrue=i(!0),n.thatReturnsNull=i(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(e){return e},e.exports=n},function(e,t,i){(function(t){"use strict";var i=!1;if("production"!==t.env.NODE_ENV)try{Object.defineProperty({},"x",{get:function(){}}),i=!0}catch(e){}e.exports=i}).call(t,i(4))},function(e,t){"use strict";var i="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;e.exports=i},function(e,t,i){(function(t){"use strict";function n(e,t){return e&&"object"==typeof e&&null!=e.key?h.escape(e.key):t.toString(36)}function r(e,i,o,g){var v=typeof e;if("undefined"!==v&&"boolean"!==v||(e=null),null===e||"string"===v||"number"===v||"object"===v&&e.$$typeof===l)return o(g,e,""===i?p+n(e,0):i),1;var y,w,_=0,S=""===i?p:i+f;if(Array.isArray(e))for(var E=0;E<e.length;E++)y=e[E],w=S+n(y,E),_+=r(y,w,o,g);else{var T=u(e);if(T){var x,b=T.call(e);if(T!==e.entries)for(var P=0;!(x=b.next()).done;)y=x.value,w=S+n(y,P++),_+=r(y,w,o,g);else{if("production"!==t.env.NODE_ENV){var R="";if(a.current){var O=a.current.getName();O&&(R=" Check the render method of `"+O+"`.")}"production"!==t.env.NODE_ENV?d(m,"Using Maps as children is not yet fully supported. It is an experimental feature that might be removed. Convert it to a sequence / iterable of keyed ReactElements instead.%s",R):void 0,m=!0}for(;!(x=b.next()).done;){var I=x.value;I&&(y=I[1],w=S+h.escape(I[0])+f+n(y,0),_+=r(y,w,o,g))}}}else if("object"===v){var C="";if("production"!==t.env.NODE_ENV&&(C=" If you meant to render a collection of children, use an array instead or wrap the object using createFragment(object) from the React add-ons.",e._isReactElement&&(C=" It looks like you're using an element created by a different version of React. Make sure to use only one copy of React."),a.current)){var D=a.current.getName();D&&(C+=" Check the render method of `"+D+"`.")}var k=String(e);"production"!==t.env.NODE_ENV?c(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===k?"object with keys {"+Object.keys(e).join(", ")+"}":k,C):s("31","[object Object]"===k?"object with keys {"+Object.keys(e).join(", ")+"}":k,C)}}return _}function o(e,t,i){return null==e?0:r(e,"",t,i)}var s=i(8),a=i(11),l=i(15),u=i(17),c=i(9),h=i(18),d=i(12),p=".",f=":",m=!1;e.exports=o}).call(t,i(4))},function(e,t){"use strict";function i(e){var t=e&&(n&&e[n]||e[r]);if("function"==typeof t)return t}var n="function"==typeof Symbol&&Symbol.iterator,r="@@iterator";e.exports=i},function(e,t){"use strict";function i(e){var t=/[=:]/g,i={"=":"=0",":":"=2"},n=(""+e).replace(t,function(e){return i[e]});return"$"+n}function n(e){var t=/(=0|=2)/g,i={"=0":"=","=2":":"},n="."===e[0]&&"$"===e[1]?e.substring(2):e.substring(1);return(""+n).replace(t,function(e){return i[e]})}var r={escape:i,unescape:n};e.exports=r},function(e,t,i){(function(t){"use strict";function n(e,t,i){this.props=e,this.context=t,this.refs=a,this.updater=i||o}var r=i(8),o=i(20),s=i(14),a=i(21),l=i(9),u=i(12);if(n.prototype.isReactComponent={},n.prototype.setState=function(e,i){"object"!=typeof e&&"function"!=typeof e&&null!=e?"production"!==t.env.NODE_ENV?l(!1,"setState(...): takes an object of state variables to update or a function which returns an object of state variables."):r("85"):void 0,this.updater.enqueueSetState(this,e),i&&this.updater.enqueueCallback(this,i,"setState")},n.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this),e&&this.updater.enqueueCallback(this,e,"forceUpdate")},"production"!==t.env.NODE_ENV){var c={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},h=function(e,i){s&&Object.defineProperty(n.prototype,e,{get:function(){"production"!==t.env.NODE_ENV?u(!1,"%s(...) is deprecated in plain JavaScript React classes. %s",i[0],i[1]):void 0}})};for(var d in c)c.hasOwnProperty(d)&&h(d,c[d])}e.exports=n}).call(t,i(4))},function(e,t,i){(function(t){"use strict";function n(e,i){if("production"!==t.env.NODE_ENV){var n=e.constructor;"production"!==t.env.NODE_ENV?r(!1,"%s(...): Can only update a mounted or mounting component. This usually means you called %s() on an unmounted component. This is a no-op. Please check the code for the %s component.",i,i,n&&(n.displayName||n.name)||"ReactClass"):void 0}}var r=i(12),o={isMounted:function(e){return!1},enqueueCallback:function(e,t){},enqueueForceUpdate:function(e){n(e,"forceUpdate")},enqueueReplaceState:function(e,t){n(e,"replaceState")},enqueueSetState:function(e,t){n(e,"setState")}};e.exports=o}).call(t,i(4))},function(e,t,i){(function(t){"use strict";var i={};"production"!==t.env.NODE_ENV&&Object.freeze(i),e.exports=i}).call(t,i(4))},function(e,t,i){"use strict";function n(e,t,i){this.props=e,this.context=t,this.refs=l,this.updater=i||a}function r(){}var o=i(5),s=i(19),a=i(20),l=i(21);r.prototype=s.prototype,n.prototype=new r,n.prototype.constructor=n,o(n.prototype,s.prototype),n.prototype.isPureReactComponent=!0,e.exports=n},function(e,t,i){(function(t){"use strict";function n(e){return e}function r(e,i,n){for(var r in i)i.hasOwnProperty(r)&&("production"!==t.env.NODE_ENV?S("function"==typeof i[r],"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",e.displayName||"ReactClass",v[n],r):void 0)}function o(e,i){var n=x.hasOwnProperty(i)?x[i]:null;P.hasOwnProperty(i)&&("OVERRIDE_BASE"!==n?"production"!==t.env.NODE_ENV?_(!1,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",i):p("73",i):void 0),e&&("DEFINE_MANY"!==n&&"DEFINE_MANY_MERGED"!==n?"production"!==t.env.NODE_ENV?_(!1,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",i):p("74",i):void 0)}function s(e,i){if(i){"function"==typeof i?"production"!==t.env.NODE_ENV?_(!1,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."):p("75"):void 0,g.isValidElement(i)?"production"!==t.env.NODE_ENV?_(!1,"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object."):p("76"):void 0;var n=e.prototype,r=n.__reactAutoBindPairs;i.hasOwnProperty(E)&&b.mixins(e,i.mixins);for(var s in i)if(i.hasOwnProperty(s)&&s!==E){var a=i[s],l=n.hasOwnProperty(s);if(o(l,s),b.hasOwnProperty(s))b[s](e,a);else{var h=x.hasOwnProperty(s),d="function"==typeof a,f=d&&!h&&!l&&i.autobind!==!1;if(f)r.push(s,a),n[s]=a;else if(l){var m=x[s];!h||"DEFINE_MANY_MERGED"!==m&&"DEFINE_MANY"!==m?"production"!==t.env.NODE_ENV?_(!1,"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",m,s):p("77",m,s):void 0,"DEFINE_MANY_MERGED"===m?n[s]=u(n[s],a):"DEFINE_MANY"===m&&(n[s]=c(n[s],a))}else n[s]=a,"production"!==t.env.NODE_ENV&&"function"==typeof a&&i.displayName&&(n[s].displayName=i.displayName+"_"+s)}}}else if("production"!==t.env.NODE_ENV){var v=typeof i,y="object"===v&&null!==i;"production"!==t.env.NODE_ENV?S(y,"%s: You're attempting to include a mixin that is either null or not an object. Check the mixins included by the component, as well as any mixins they include themselves. Expected object but got %s.",e.displayName||"ReactClass",null===i?null:v):void 0}}function a(e,i){if(i)for(var n in i){var r=i[n];if(i.hasOwnProperty(n)){var o=n in b;o?"production"!==t.env.NODE_ENV?_(!1,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n):p("78",n):void 0;var s=n in e;s?"production"!==t.env.NODE_ENV?_(!1,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n):p("79",n):void 0,e[n]=r}}}function l(e,i){e&&i&&"object"==typeof e&&"object"==typeof i?void 0:"production"!==t.env.NODE_ENV?_(!1,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects."):p("80");for(var n in i)i.hasOwnProperty(n)&&(void 0!==e[n]?"production"!==t.env.NODE_ENV?_(!1,"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n):p("81",n):void 0,e[n]=i[n]);return e}function u(e,t){return function(){var i=e.apply(this,arguments),n=t.apply(this,arguments);if(null==i)return n;if(null==n)return i;var r={};return l(r,i),l(r,n),r}}function c(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function h(e,i){var n=i.bind(e);if("production"!==t.env.NODE_ENV){n.__reactBoundContext=e,n.__reactBoundMethod=i,n.__reactBoundArguments=null;var r=e.constructor.displayName,o=n.bind;n.bind=function(s){for(var a=arguments.length,l=Array(a>1?a-1:0),u=1;u<a;u++)l[u-1]=arguments[u];if(s!==e&&null!==s)"production"!==t.env.NODE_ENV?S(!1,"bind(): React component methods may only be bound to the component instance. See %s",r):void 0;else if(!l.length)return"production"!==t.env.NODE_ENV?S(!1,"bind(): You are binding a component method to the component. React does this for you automatically in a high-performance way, so you can safely remove this call. See %s",r):void 0,n;var c=o.apply(n,arguments);return c.__reactBoundContext=e,c.__reactBoundMethod=i,c.__reactBoundArguments=l,c}}return n}function d(e){for(var t=e.__reactAutoBindPairs,i=0;i<t.length;i+=2){var n=t[i],r=t[i+1];e[n]=h(e,r)}}var p=i(8),f=i(5),m=i(19),g=i(10),v=i(24),y=i(20),w=i(21),_=i(9),S=i(12),E="mixins",T=[],x={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},b={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var i=0;i<t.length;i++)s(e,t[i])},childContextTypes:function(e,i){"production"!==t.env.NODE_ENV&&r(e,i,"childContext"),e.childContextTypes=f({},e.childContextTypes,i)},contextTypes:function(e,i){"production"!==t.env.NODE_ENV&&r(e,i,"context"),e.contextTypes=f({},e.contextTypes,i)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=u(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,i){"production"!==t.env.NODE_ENV&&r(e,i,"prop"),e.propTypes=f({},e.propTypes,i)},statics:function(e,t){a(e,t)},autobind:function(){}},P={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e),t&&this.updater.enqueueCallback(this,t,"replaceState")},isMounted:function(){return this.updater.isMounted(this)}},R=function(){};f(R.prototype,m.prototype,P);var O={createClass:function(e){var i=n(function(e,n,r){"production"!==t.env.NODE_ENV&&("production"!==t.env.NODE_ENV?S(this instanceof i,"Something is calling a React component directly. Use a factory or JSX instead. See: https://fb.me/react-legacyfactory"):void 0),this.__reactAutoBindPairs.length&&d(this),this.props=e,this.context=n,this.refs=w,this.updater=r||y,this.state=null;var o=this.getInitialState?this.getInitialState():null;"production"!==t.env.NODE_ENV&&void 0===o&&this.getInitialState._isMockFunction&&(o=null),"object"!=typeof o||Array.isArray(o)?"production"!==t.env.NODE_ENV?_(!1,"%s.getInitialState(): must return an object or null",i.displayName||"ReactCompositeComponent"):p("82",i.displayName||"ReactCompositeComponent"):void 0,this.state=o});i.prototype=new R,i.prototype.constructor=i,i.prototype.__reactAutoBindPairs=[],T.forEach(s.bind(null,i)),s(i,e),i.getDefaultProps&&(i.defaultProps=i.getDefaultProps()),"production"!==t.env.NODE_ENV&&(i.getDefaultProps&&(i.getDefaultProps.isReactClassApproved={}),i.prototype.getInitialState&&(i.prototype.getInitialState.isReactClassApproved={})),i.prototype.render?void 0:"production"!==t.env.NODE_ENV?_(!1,"createClass(...): Class specification must implement a `render` method."):p("83"),"production"!==t.env.NODE_ENV&&("production"!==t.env.NODE_ENV?S(!i.prototype.componentShouldUpdate,"%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",e.displayName||"A component"):void 0,"production"!==t.env.NODE_ENV?S(!i.prototype.componentWillRecieveProps,"%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",e.displayName||"A component"):void 0);for(var r in x)i.prototype[r]||(i.prototype[r]=null);return i},injection:{injectMixin:function(e){T.push(e)}}};e.exports=O}).call(t,i(4))},function(e,t,i){(function(t){"use strict";var i={};"production"!==t.env.NODE_ENV&&(i={prop:"prop",context:"context",childContext:"child context"}),e.exports=i}).call(t,i(4))},function(e,t,i){(function(t){"use strict";var n=i(10),r=n.createFactory;if("production"!==t.env.NODE_ENV){var o=i(26);r=o.createFactory}var s={a:r("a"),abbr:r("abbr"),address:r("address"),area:r("area"),article:r("article"),aside:r("aside"),audio:r("audio"),b:r("b"),base:r("base"),bdi:r("bdi"),bdo:r("bdo"),big:r("big"),blockquote:r("blockquote"),body:r("body"),br:r("br"),button:r("button"),canvas:r("canvas"),caption:r("caption"),cite:r("cite"),code:r("code"),col:r("col"),colgroup:r("colgroup"),data:r("data"),datalist:r("datalist"),dd:r("dd"),del:r("del"),details:r("details"),dfn:r("dfn"),dialog:r("dialog"),div:r("div"),dl:r("dl"),dt:r("dt"),em:r("em"),embed:r("embed"),fieldset:r("fieldset"),figcaption:r("figcaption"),figure:r("figure"),footer:r("footer"),form:r("form"),h1:r("h1"),h2:r("h2"),h3:r("h3"),h4:r("h4"),h5:r("h5"),h6:r("h6"),head:r("head"),header:r("header"),hgroup:r("hgroup"),hr:r("hr"),html:r("html"),i:r("i"),iframe:r("iframe"),img:r("img"),input:r("input"),ins:r("ins"),kbd:r("kbd"),keygen:r("keygen"),label:r("label"),legend:r("legend"),li:r("li"),link:r("link"),main:r("main"),map:r("map"),mark:r("mark"),menu:r("menu"),menuitem:r("menuitem"),meta:r("meta"),meter:r("meter"),nav:r("nav"),noscript:r("noscript"),object:r("object"),ol:r("ol"),optgroup:r("optgroup"),option:r("option"),output:r("output"),p:r("p"),param:r("param"),picture:r("picture"),pre:r("pre"),progress:r("progress"),q:r("q"),rp:r("rp"),rt:r("rt"),ruby:r("ruby"),s:r("s"),samp:r("samp"),script:r("script"),section:r("section"),select:r("select"),small:r("small"),source:r("source"),span:r("span"),strong:r("strong"),style:r("style"),sub:r("sub"),summary:r("summary"),sup:r("sup"),table:r("table"),tbody:r("tbody"),td:r("td"),textarea:r("textarea"),tfoot:r("tfoot"),th:r("th"),thead:r("thead"),time:r("time"),title:r("title"),tr:r("tr"),track:r("track"),u:r("u"),ul:r("ul"),var:r("var"),video:r("video"),wbr:r("wbr"),circle:r("circle"),clipPath:r("clipPath"),defs:r("defs"),ellipse:r("ellipse"),g:r("g"),image:r("image"),line:r("line"),linearGradient:r("linearGradient"),mask:r("mask"),path:r("path"),pattern:r("pattern"),polygon:r("polygon"),polyline:r("polyline"),radialGradient:r("radialGradient"),rect:r("rect"),stop:r("stop"),svg:r("svg"),text:r("text"),tspan:r("tspan")};e.exports=s}).call(t,i(4))},function(e,t,i){(function(t){"use strict";function n(){if(l.current){var e=l.current.getName();if(e)return" Check the render method of `"+e+"`."}return""}function r(e){var t=n();if(!t){var i="string"==typeof e?e:e.displayName||e.name;i&&(t=" Check the top-level render call using <"+i+">.")}return t}function o(e,i){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var n=m.uniqueKey||(m.uniqueKey={}),o=r(i);if(!n[o]){n[o]=!0;var s="";e&&e._owner&&e._owner!==l.current&&(s=" It was passed a child from "+e._owner.getName()+"."),"production"!==t.env.NODE_ENV?f(!1,'Each child in an array or iterator should have a unique "key" prop.%s%s See https://fb.me/react-warning-keys for more information.%s',o,s,u.getCurrentStackAddendum(e)):void 0;
	}}}function s(e,t){if("object"==typeof e)if(Array.isArray(e))for(var i=0;i<e.length;i++){var n=e[i];c.isValidElement(n)&&o(n,t)}else if(c.isValidElement(e))e._store&&(e._store.validated=!0);else if(e){var r=p(e);if(r&&r!==e.entries)for(var s,a=r.call(e);!(s=a.next()).done;)c.isValidElement(s.value)&&o(s.value,t)}}function a(e){var i=e.type;if("function"==typeof i){var n=i.displayName||i.name;i.propTypes&&h(i.propTypes,e.props,"prop",n,e,null),"function"==typeof i.getDefaultProps&&("production"!==t.env.NODE_ENV?f(i.getDefaultProps.isReactClassApproved,"getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead."):void 0)}}var l=i(11),u=i(27),c=i(10),h=i(28),d=i(14),p=i(17),f=i(12),m={},g={createElement:function(e,i,r){var o="string"==typeof e||"function"==typeof e;o||("production"!==t.env.NODE_ENV?f(!1,"React.createElement: type should not be null, undefined, boolean, or number. It should be a string (for DOM elements) or a ReactClass (for composite components).%s",n()):void 0);var l=c.createElement.apply(this,arguments);if(null==l)return l;if(o)for(var u=2;u<arguments.length;u++)s(arguments[u],e);return a(l),l},createFactory:function(e){var i=g.createElement.bind(null,e);return i.type=e,"production"!==t.env.NODE_ENV&&d&&Object.defineProperty(i,"type",{enumerable:!1,get:function(){return"production"!==t.env.NODE_ENV?f(!1,"Factory.type is deprecated. Access the class directly before passing it to createFactory."):void 0,Object.defineProperty(this,"type",{value:e}),e}}),i},cloneElement:function(e,t,i){for(var n=c.cloneElement.apply(this,arguments),r=2;r<arguments.length;r++)s(arguments[r],n.type);return a(n),n}};e.exports=g}).call(t,i(4))},function(e,t,i){(function(t){"use strict";function n(e){var t=Function.prototype.toString,i=Object.prototype.hasOwnProperty,n=RegExp("^"+t.call(i).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");try{var r=t.call(e);return n.test(r)}catch(e){return!1}}function r(e){var t=u(e);if(t){var i=t.childIDs;c(e),i.forEach(r)}}function o(e,t,i){return"\n    in "+(e||"Unknown")+(t?" (at "+t.fileName.replace(/^.*[\\\/]/,"")+":"+t.lineNumber+")":i?" (created by "+i+")":"")}function s(e){return null==e?"#empty":"string"==typeof e||"number"==typeof e?"#text":"string"==typeof e.type?e.type:e.type.displayName||e.type.name||"Unknown"}function a(e){var i,n=R.getDisplayName(e),r=R.getElement(e),s=R.getOwnerID(e);return s&&(i=R.getDisplayName(s)),"production"!==t.env.NODE_ENV?y(r,"ReactComponentTreeHook: Missing React element for debugID %s when building stack",e):void 0,o(n,r&&r._source,i)}var l,u,c,h,d,p,f,m=i(8),g=i(11),v=i(9),y=i(12),w="function"==typeof Array.from&&"function"==typeof Map&&n(Map)&&null!=Map.prototype&&"function"==typeof Map.prototype.keys&&n(Map.prototype.keys)&&"function"==typeof Set&&n(Set)&&null!=Set.prototype&&"function"==typeof Set.prototype.keys&&n(Set.prototype.keys);if(w){var _=new Map,S=new Set;l=function(e,t){_.set(e,t)},u=function(e){return _.get(e)},c=function(e){_.delete(e)},h=function(){return Array.from(_.keys())},d=function(e){S.add(e)},p=function(e){S.delete(e)},f=function(){return Array.from(S.keys())}}else{var E={},T={},x=function(e){return"."+e},b=function(e){return parseInt(e.substr(1),10)};l=function(e,t){var i=x(e);E[i]=t},u=function(e){var t=x(e);return E[t]},c=function(e){var t=x(e);delete E[t]},h=function(){return Object.keys(E).map(b)},d=function(e){var t=x(e);T[t]=!0},p=function(e){var t=x(e);delete T[t]},f=function(){return Object.keys(T).map(b)}}var P=[],R={onSetChildren:function(e,i){var n=u(e);n?void 0:"production"!==t.env.NODE_ENV?v(!1,"Item must have been set"):m("144"),n.childIDs=i;for(var r=0;r<i.length;r++){var o=i[r],s=u(o);s?void 0:"production"!==t.env.NODE_ENV?v(!1,"Expected hook events to fire for the child before its parent includes it in onSetChildren()."):m("140"),null==s.childIDs&&"object"==typeof s.element&&null!=s.element?"production"!==t.env.NODE_ENV?v(!1,"Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren()."):m("141"):void 0,s.isMounted?void 0:"production"!==t.env.NODE_ENV?v(!1,"Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren()."):m("71"),null==s.parentID&&(s.parentID=e),s.parentID!==e?"production"!==t.env.NODE_ENV?v(!1,"Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).",o,s.parentID,e):m("142",o,s.parentID,e):void 0}},onBeforeMountComponent:function(e,t,i){var n={element:t,parentID:i,text:null,childIDs:[],isMounted:!1,updateCount:0};l(e,n)},onBeforeUpdateComponent:function(e,t){var i=u(e);i&&i.isMounted&&(i.element=t)},onMountComponent:function(e){var i=u(e);i?void 0:"production"!==t.env.NODE_ENV?v(!1,"Item must have been set"):m("144"),i.isMounted=!0;var n=0===i.parentID;n&&d(e)},onUpdateComponent:function(e){var t=u(e);t&&t.isMounted&&t.updateCount++},onUnmountComponent:function(e){var t=u(e);if(t){t.isMounted=!1;var i=0===t.parentID;i&&p(e)}P.push(e)},purgeUnmountedComponents:function(){if(!R._preventPurging){for(var e=0;e<P.length;e++){var t=P[e];r(t)}P.length=0}},isMounted:function(e){var t=u(e);return!!t&&t.isMounted},getCurrentStackAddendum:function(e){var t="";if(e){var i=s(e),n=e._owner;t+=o(i,e._source,n&&n.getName())}var r=g.current,a=r&&r._debugID;return t+=R.getStackAddendumByID(a)},getStackAddendumByID:function(e){for(var t="";e;)t+=a(e),e=R.getParentID(e);return t},getChildIDs:function(e){var t=u(e);return t?t.childIDs:[]},getDisplayName:function(e){var t=R.getElement(e);return t?s(t):null},getElement:function(e){var t=u(e);return t?t.element:null},getOwnerID:function(e){var t=R.getElement(e);return t&&t._owner?t._owner._debugID:null},getParentID:function(e){var t=u(e);return t?t.parentID:null},getSource:function(e){var t=u(e),i=t?t.element:null,n=null!=i?i._source:null;return n},getText:function(e){var t=R.getElement(e);return"string"==typeof t?t:"number"==typeof t?""+t:null},getUpdateCount:function(e){var t=u(e);return t?t.updateCount:0},getRootIDs:f,getRegisteredIDs:h};e.exports=R}).call(t,i(4))},function(e,t,i){(function(t){"use strict";function n(e,n,h,d,p,f){for(var m in e)if(e.hasOwnProperty(m)){var g;try{"function"!=typeof e[m]?"production"!==t.env.NODE_ENV?l(!1,"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",d||"React class",s[h],m):o("84",d||"React class",s[h],m):void 0,g=e[m](n,m,d,h,null,a)}catch(e){g=e}if("production"!==t.env.NODE_ENV?u(!g||g instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",d||"React class",s[h],m,typeof g):void 0,g instanceof Error&&!(g.message in c)){c[g.message]=!0;var v="";"production"!==t.env.NODE_ENV&&(r||(r=i(27)),null!==f?v=r.getStackAddendumByID(f):null!==p&&(v=r.getCurrentStackAddendum(p))),"production"!==t.env.NODE_ENV?u(!1,"Failed %s type: %s%s",h,g.message,v):void 0}}}var r,o=i(8),s=i(24),a=i(29),l=i(9),u=i(12);"undefined"!=typeof t&&t.env&&"test"===t.env.NODE_ENV&&(r=i(27));var c={};e.exports=n}).call(t,i(4))},function(e,t){"use strict";var i="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=i},function(e,t,i){(function(t){"use strict";function n(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}function r(e){this.message=e,this.stack=""}function o(e){function i(i,o,s,a,l,u,c){if(a=a||R,u=u||s,"production"!==t.env.NODE_ENV&&c!==T&&"undefined"!=typeof console){var h=a+":"+s;n[h]||("production"!==t.env.NODE_ENV?P(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will not work in production with the next major version. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",u,a):void 0,n[h]=!0)}if(null==o[s]){var d=E[l];return i?new r(null===o[s]?"The "+d+" `"+u+"` is marked as required "+("in `"+a+"`, but its value is `null`."):"The "+d+" `"+u+"` is marked as required in "+("`"+a+"`, but its value is `undefined`.")):null}return e(o,s,a,l,u)}if("production"!==t.env.NODE_ENV)var n={};var o=i.bind(null,!1);return o.isRequired=i.bind(null,!0),o}function s(e){function t(t,i,n,o,s,a){var l=t[i],u=y(l);if(u!==e){var c=E[o],h=w(l);return new r("Invalid "+c+" `"+s+"` of type "+("`"+h+"` supplied to `"+n+"`, expected ")+("`"+e+"`."))}return null}return o(t)}function a(){return o(x.thatReturns(null))}function l(e){function t(t,i,n,o,s){if("function"!=typeof e)return new r("Property `"+s+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var a=t[i];if(!Array.isArray(a)){var l=E[o],u=y(a);return new r("Invalid "+l+" `"+s+"` of type "+("`"+u+"` supplied to `"+n+"`, expected an array."))}for(var c=0;c<a.length;c++){var h=e(a,c,n,o,s+"["+c+"]",T);if(h instanceof Error)return h}return null}return o(t)}function u(){function e(e,t,i,n,o){var s=e[t];if(!S.isValidElement(s)){var a=E[n],l=y(s);return new r("Invalid "+a+" `"+o+"` of type "+("`"+l+"` supplied to `"+i+"`, expected a single ReactElement."))}return null}return o(e)}function c(e){function t(t,i,n,o,s){if(!(t[i]instanceof e)){var a=E[o],l=e.name||R,u=_(t[i]);return new r("Invalid "+a+" `"+s+"` of type "+("`"+u+"` supplied to `"+n+"`, expected ")+("instance of `"+l+"`."))}return null}return o(t)}function h(e){function i(t,i,o,s,a){for(var l=t[i],u=0;u<e.length;u++)if(n(l,e[u]))return null;var c=E[s],h=JSON.stringify(e);return new r("Invalid "+c+" `"+a+"` of value `"+l+"` "+("supplied to `"+o+"`, expected one of "+h+"."))}return Array.isArray(e)?o(i):("production"!==t.env.NODE_ENV?P(!1,"Invalid argument supplied to oneOf, expected an instance of array."):void 0,x.thatReturnsNull)}function d(e){function t(t,i,n,o,s){if("function"!=typeof e)return new r("Property `"+s+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var a=t[i],l=y(a);if("object"!==l){var u=E[o];return new r("Invalid "+u+" `"+s+"` of type "+("`"+l+"` supplied to `"+n+"`, expected an object."))}for(var c in a)if(a.hasOwnProperty(c)){var h=e(a,c,n,o,s+"."+c,T);if(h instanceof Error)return h}return null}return o(t)}function p(e){function i(t,i,n,o,s){for(var a=0;a<e.length;a++){var l=e[a];if(null==l(t,i,n,o,s,T))return null}var u=E[o];return new r("Invalid "+u+" `"+s+"` supplied to "+("`"+n+"`."))}return Array.isArray(e)?o(i):("production"!==t.env.NODE_ENV?P(!1,"Invalid argument supplied to oneOfType, expected an instance of array."):void 0,x.thatReturnsNull)}function f(){function e(e,t,i,n,o){if(!g(e[t])){var s=E[n];return new r("Invalid "+s+" `"+o+"` supplied to "+("`"+i+"`, expected a ReactNode."))}return null}return o(e)}function m(e){function t(t,i,n,o,s){var a=t[i],l=y(a);if("object"!==l){var u=E[o];return new r("Invalid "+u+" `"+s+"` of type `"+l+"` "+("supplied to `"+n+"`, expected `object`."))}for(var c in e){var h=e[c];if(h){var d=h(a,c,n,o,s+"."+c,T);if(d)return d}}return null}return o(t)}function g(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(g);if(null===e||S.isValidElement(e))return!0;var t=b(e);if(!t)return!1;var i,n=t.call(e);if(t!==e.entries){for(;!(i=n.next()).done;)if(!g(i.value))return!1}else for(;!(i=n.next()).done;){var r=i.value;if(r&&!g(r[1]))return!1}return!0;default:return!1}}function v(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function y(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":v(t,e)?"symbol":t}function w(e){var t=y(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function _(e){return e.constructor&&e.constructor.name?e.constructor.name:R}var S=i(10),E=i(24),T=i(29),x=i(13),b=i(17),P=i(12),R="<<anonymous>>",O={array:s("array"),bool:s("boolean"),func:s("function"),number:s("number"),object:s("object"),string:s("string"),symbol:s("symbol"),any:a(),arrayOf:l,element:u(),instanceOf:c,node:f(),objectOf:d,oneOf:h,oneOfType:p,shape:m};r.prototype=Error.prototype,e.exports=O}).call(t,i(4))},function(e,t){"use strict";e.exports="15.4.1"},function(e,t,i){(function(t){"use strict";function n(e){return o.isValidElement(e)?void 0:"production"!==t.env.NODE_ENV?s(!1,"React.Children.only expected to receive a single React element child."):r("143"),e}var r=i(8),o=i(10),s=i(9);e.exports=n}).call(t,i(4))},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){return function(t){function i(e){r(this,i);var t=o(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,e));return t.state={items:t.props.items},t._bindInit(),t}return s(i,t),u(i,[{key:"_bindInit",value:function(){this.getActiveItem=this.getActiveItem.bind(this),this.setActiveItem=this.setActiveItem.bind(this),this.getActiveItemIndex=this.getActiveItemIndex.bind(this),this._hasFocus=this._hasFocus.bind(this),this._updateFocus=this._updateFocus.bind(this),this._immutableAssets=this._immutableAssets.bind(this),this._unFocused=this._unFocused.bind(this),this._handlers=this._handlers.bind(this)}},{key:"setActiveItem",value:function(e,t){"undefined"!=typeof t&&t.preventDefault(),this.setState({items:this._updateFocus(this._unFocused(),e,!0).toJS()})}},{key:"getActiveItem",value:function(){return this.state.items.find(this._hasFocus)}},{key:"getActiveItemIndex",value:function(){return this.state.items.findIndex(this._hasFocus)}},{key:"_hasFocus",value:function(e){return 1==e.focus}},{key:"_unFocused",value:function(){return this._updateFocus(this._immutableAssets(),this.getActiveItemIndex(),!1)}},{key:"_updateFocus",value:function(e,t,i){return e.update(t,function(e){return e.set("focus",i)})}},{key:"_immutableAssets",value:function(){return new p.default.fromJS(this.state.items)}},{key:"_handlers",value:function(){return{setActiveItem:this.setActiveItem.bind(this),getActiveItem:this.getActiveItem.bind(this),getActiveItemIndex:this.getActiveItemIndex.bind(this)}}},{key:"render",value:function(){return h.default.createElement(e,l({},this.props,this.state,this._handlers()))}}]),i}(h.default.Component)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},u=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}();t.default=a;var c=i(2),h=n(c),d=i(34),p=n(d)},function(e,t,i){!function(t,i){e.exports=i()}(this,function(){"use strict";function e(e,t){t&&(e.prototype=Object.create(t.prototype)),e.prototype.constructor=e}function t(e){return o(e)?e:I(e)}function i(e){return s(e)?e:C(e)}function n(e){return a(e)?e:D(e)}function r(e){return o(e)&&!l(e)?e:k(e)}function o(e){return!(!e||!e[li])}function s(e){return!(!e||!e[ui])}function a(e){return!(!e||!e[ci])}function l(e){return s(e)||a(e)}function u(e){return!(!e||!e[hi])}function c(e){return e.value=!1,e}function h(e){e&&(e.value=!0)}function d(){}function p(e,t){t=t||0;for(var i=Math.max(0,e.length-t),n=new Array(i),r=0;r<i;r++)n[r]=e[r+t];return n}function f(e){return void 0===e.size&&(e.size=e.__iterate(g)),e.size}function m(e,t){if("number"!=typeof t){var i=t>>>0;if(""+i!==t||4294967295===i)return NaN;t=i}return t<0?f(e)+t:t}function g(){return!0}function v(e,t,i){return(0===e||void 0!==i&&e<=-i)&&(void 0===t||void 0!==i&&t>=i)}function y(e,t){return _(e,t,0)}function w(e,t){return _(e,t,t)}function _(e,t,i){return void 0===e?i:e<0?Math.max(0,t+e):void 0===t?e:Math.min(t,e)}function S(e){this.next=e}function E(e,t,i,n){var r=0===e?t:1===e?i:[t,i];return n?n.value=r:n={value:r,done:!1},n}function T(){return{value:void 0,done:!0}}function x(e){return!!R(e)}function b(e){return e&&"function"==typeof e.next}function P(e){var t=R(e);return t&&t.call(e)}function R(e){var t=e&&(Ei&&e[Ei]||e[Ti]);if("function"==typeof t)return t}function O(e){return e&&"number"==typeof e.length}function I(e){return null===e||void 0===e?F():o(e)?e.toSeq():V(e)}function C(e){return null===e||void 0===e?F().toKeyedSeq():o(e)?s(e)?e.toSeq():e.fromEntrySeq():L(e)}function D(e){return null===e||void 0===e?F():o(e)?s(e)?e.entrySeq():e.toIndexedSeq():H(e)}function k(e){return(null===e||void 0===e?F():o(e)?s(e)?e.entrySeq():e:H(e)).toSetSeq()}function N(e){this._array=e,this.size=e.length}function z(e){var t=Object.keys(e);this._object=e,this._keys=t,this.size=t.length}function M(e){this._iterable=e,this.size=e.length||e.size}function B(e){this._iterator=e,this._iteratorCache=[]}function A(e){return!(!e||!e[bi])}function F(){return Pi||(Pi=new N([]))}function L(e){var t=Array.isArray(e)?new N(e).fromEntrySeq():b(e)?new B(e).fromEntrySeq():x(e)?new M(e).fromEntrySeq():"object"==typeof e?new z(e):void 0;if(!t)throw new TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: "+e);return t}function H(e){var t=j(e);if(!t)throw new TypeError("Expected Array or iterable object of values: "+e);return t}function V(e){var t=j(e)||"object"==typeof e&&new z(e);if(!t)throw new TypeError("Expected Array or iterable object of values, or keyed object: "+e);return t}function j(e){return O(e)?new N(e):b(e)?new B(e):x(e)?new M(e):void 0}function U(e,t,i,n){var r=e._cache;if(r){for(var o=r.length-1,s=0;s<=o;s++){var a=r[i?o-s:s];if(t(a[1],n?a[0]:s,e)===!1)return s+1}return s}return e.__iterateUncached(t,i)}function q(e,t,i,n){var r=e._cache;if(r){var o=r.length-1,s=0;return new S(function(){var e=r[i?o-s:s];return s++>o?T():E(t,n?e[0]:s-1,e[1])})}return e.__iteratorUncached(t,i)}function W(e,t){return t?$(t,e,"",{"":e}):G(e)}function $(e,t,i,n){return Array.isArray(t)?e.call(n,i,D(t).map(function(i,n){return $(e,i,n,t)})):Z(t)?e.call(n,i,C(t).map(function(i,n){return $(e,i,n,t)})):t}function G(e){return Array.isArray(e)?D(e).map(G).toList():Z(e)?C(e).map(G).toMap():e}function Z(e){return e&&(e.constructor===Object||void 0===e.constructor)}function X(e,t){if(e===t||e!==e&&t!==t)return!0;if(!e||!t)return!1;if("function"==typeof e.valueOf&&"function"==typeof t.valueOf){if(e=e.valueOf(),t=t.valueOf(),e===t||e!==e&&t!==t)return!0;if(!e||!t)return!1}return!("function"!=typeof e.equals||"function"!=typeof t.equals||!e.equals(t))}function K(e,t){if(e===t)return!0;if(!o(t)||void 0!==e.size&&void 0!==t.size&&e.size!==t.size||void 0!==e.__hash&&void 0!==t.__hash&&e.__hash!==t.__hash||s(e)!==s(t)||a(e)!==a(t)||u(e)!==u(t))return!1;if(0===e.size&&0===t.size)return!0;var i=!l(e);if(u(e)){var n=e.entries();return t.every(function(e,t){var r=n.next().value;return r&&X(r[1],e)&&(i||X(r[0],t))})&&n.next().done}var r=!1;if(void 0===e.size)if(void 0===t.size)"function"==typeof e.cacheResult&&e.cacheResult();else{r=!0;var c=e;e=t,t=c}var h=!0,d=t.__iterate(function(t,n){if(i?!e.has(t):r?!X(t,e.get(n,gi)):!X(e.get(n,gi),t))return h=!1,!1});return h&&e.size===d}function Y(e,t){if(!(this instanceof Y))return new Y(e,t);if(this._value=e,this.size=void 0===t?1/0:Math.max(0,t),0===this.size){if(Ri)return Ri;Ri=this}}function J(e,t){if(!e)throw new Error(t)}function Q(e,t,i){if(!(this instanceof Q))return new Q(e,t,i);if(J(0!==i,"Cannot step a Range by 0"),e=e||0,void 0===t&&(t=1/0),i=void 0===i?1:Math.abs(i),t<e&&(i=-i),this._start=e,this._end=t,this._step=i,this.size=Math.max(0,Math.ceil((t-e)/i-1)+1),0===this.size){if(Oi)return Oi;Oi=this}}function ee(){throw TypeError("Abstract")}function te(){}function ie(){}function ne(){}function re(e){return e>>>1&1073741824|3221225471&e}function oe(e){if(e===!1||null===e||void 0===e)return 0;if("function"==typeof e.valueOf&&(e=e.valueOf(),e===!1||null===e||void 0===e))return 0;if(e===!0)return 1;var t=typeof e;if("number"===t){if(e!==e||e===1/0)return 0;var i=0|e;for(i!==e&&(i^=4294967295*e);e>4294967295;)e/=4294967295,i^=e;return re(i)}if("string"===t)return e.length>Bi?se(e):ae(e);if("function"==typeof e.hashCode)return e.hashCode();if("object"===t)return le(e);if("function"==typeof e.toString)return ae(e.toString());throw new Error("Value type "+t+" cannot be hashed.")}function se(e){var t=Li[e];return void 0===t&&(t=ae(e),Fi===Ai&&(Fi=0,Li={}),Fi++,Li[e]=t),t}function ae(e){for(var t=0,i=0;i<e.length;i++)t=31*t+e.charCodeAt(i)|0;return re(t)}function le(e){var t;if(Ni&&(t=Ii.get(e),void 0!==t))return t;if(t=e[Mi],void 0!==t)return t;if(!ki){if(t=e.propertyIsEnumerable&&e.propertyIsEnumerable[Mi],void 0!==t)return t;if(t=ue(e),void 0!==t)return t}if(t=++zi,1073741824&zi&&(zi=0),Ni)Ii.set(e,t);else{if(void 0!==Di&&Di(e)===!1)throw new Error("Non-extensible objects are not allowed as keys.");if(ki)Object.defineProperty(e,Mi,{enumerable:!1,configurable:!1,writable:!1,value:t});else if(void 0!==e.propertyIsEnumerable&&e.propertyIsEnumerable===e.constructor.prototype.propertyIsEnumerable)e.propertyIsEnumerable=function(){return this.constructor.prototype.propertyIsEnumerable.apply(this,arguments)},e.propertyIsEnumerable[Mi]=t;else{if(void 0===e.nodeType)throw new Error("Unable to set a non-enumerable property on object.");e[Mi]=t}}return t}function ue(e){if(e&&e.nodeType>0)switch(e.nodeType){case 1:return e.uniqueID;case 9:return e.documentElement&&e.documentElement.uniqueID}}function ce(e){J(e!==1/0,"Cannot perform this action with an infinite size.")}function he(e){return null===e||void 0===e?Ee():de(e)&&!u(e)?e:Ee().withMutations(function(t){var n=i(e);ce(n.size),n.forEach(function(e,i){return t.set(i,e)})})}function de(e){return!(!e||!e[Hi])}function pe(e,t){this.ownerID=e,this.entries=t}function fe(e,t,i){this.ownerID=e,this.bitmap=t,this.nodes=i}function me(e,t,i){this.ownerID=e,this.count=t,this.nodes=i}function ge(e,t,i){this.ownerID=e,this.keyHash=t,this.entries=i}function ve(e,t,i){this.ownerID=e,this.keyHash=t,this.entry=i}function ye(e,t,i){this._type=t,this._reverse=i,this._stack=e._root&&_e(e._root)}function we(e,t){return E(e,t[0],t[1])}function _e(e,t){return{node:e,index:0,__prev:t}}function Se(e,t,i,n){var r=Object.create(Vi);return r.size=e,r._root=t,r.__ownerID=i,r.__hash=n,r.__altered=!1,r}function Ee(){return ji||(ji=Se(0))}function Te(e,t,i){var n,r;if(e._root){var o=c(vi),s=c(yi);if(n=xe(e._root,e.__ownerID,0,void 0,t,i,o,s),!s.value)return e;r=e.size+(o.value?i===gi?-1:1:0)}else{if(i===gi)return e;r=1,n=new pe(e.__ownerID,[[t,i]])}return e.__ownerID?(e.size=r,e._root=n,e.__hash=void 0,e.__altered=!0,e):n?Se(r,n):Ee()}function xe(e,t,i,n,r,o,s,a){return e?e.update(t,i,n,r,o,s,a):o===gi?e:(h(a),h(s),new ve(t,n,[r,o]))}function be(e){return e.constructor===ve||e.constructor===ge}function Pe(e,t,i,n,r){if(e.keyHash===n)return new ge(t,n,[e.entry,r]);var o,s=(0===i?e.keyHash:e.keyHash>>>i)&mi,a=(0===i?n:n>>>i)&mi,l=s===a?[Pe(e,t,i+pi,n,r)]:(o=new ve(t,n,r),s<a?[e,o]:[o,e]);return new fe(t,1<<s|1<<a,l)}function Re(e,t,i,n){e||(e=new d);for(var r=new ve(e,oe(i),[i,n]),o=0;o<t.length;o++){var s=t[o];r=r.update(e,0,void 0,s[0],s[1])}return r}function Oe(e,t,i,n){for(var r=0,o=0,s=new Array(i),a=0,l=1,u=t.length;a<u;a++,l<<=1){var c=t[a];void 0!==c&&a!==n&&(r|=l,s[o++]=c)}return new fe(e,r,s)}function Ie(e,t,i,n,r){for(var o=0,s=new Array(fi),a=0;0!==i;a++,i>>>=1)s[a]=1&i?t[o++]:void 0;return s[n]=r,new me(e,o+1,s)}function Ce(e,t,n){for(var r=[],s=0;s<n.length;s++){var a=n[s],l=i(a);o(a)||(l=l.map(function(e){return W(e)})),r.push(l)}return Ne(e,t,r)}function De(e,t,i){return e&&e.mergeDeep&&o(t)?e.mergeDeep(t):X(e,t)?e:t}function ke(e){return function(t,i,n){if(t&&t.mergeDeepWith&&o(i))return t.mergeDeepWith(e,i);var r=e(t,i,n);return X(t,r)?t:r}}function Ne(e,t,i){return i=i.filter(function(e){return 0!==e.size}),0===i.length?e:0!==e.size||e.__ownerID||1!==i.length?e.withMutations(function(e){for(var n=t?function(i,n){e.update(n,gi,function(e){return e===gi?i:t(e,i,n)})}:function(t,i){e.set(i,t)},r=0;r<i.length;r++)i[r].forEach(n)}):e.constructor(i[0])}function ze(e,t,i,n){var r=e===gi,o=t.next();if(o.done){var s=r?i:e,a=n(s);return a===s?e:a}J(r||e&&e.set,"invalid keyPath");var l=o.value,u=r?gi:e.get(l,gi),c=ze(u,t,i,n);return c===u?e:c===gi?e.remove(l):(r?Ee():e).set(l,c)}function Me(e){return e-=e>>1&1431655765,e=(858993459&e)+(e>>2&858993459),e=e+(e>>4)&252645135,e+=e>>8,e+=e>>16,127&e}function Be(e,t,i,n){var r=n?e:p(e);return r[t]=i,r}function Ae(e,t,i,n){var r=e.length+1;if(n&&t+1===r)return e[t]=i,e;for(var o=new Array(r),s=0,a=0;a<r;a++)a===t?(o[a]=i,s=-1):o[a]=e[a+s];return o}function Fe(e,t,i){var n=e.length-1;if(i&&t===n)return e.pop(),e;for(var r=new Array(n),o=0,s=0;s<n;s++)s===t&&(o=1),r[s]=e[s+o];return r}function Le(e){var t=qe();if(null===e||void 0===e)return t;if(He(e))return e;var i=n(e),r=i.size;return 0===r?t:(ce(r),r>0&&r<fi?Ue(0,r,pi,null,new Ve(i.toArray())):t.withMutations(function(e){e.setSize(r),i.forEach(function(t,i){return e.set(i,t)})}))}function He(e){return!(!e||!e[$i])}function Ve(e,t){this.array=e,this.ownerID=t}function je(e,t){function i(e,t,i){return 0===t?n(e,i):r(e,t,i)}function n(e,i){var n=i===a?l&&l.array:e&&e.array,r=i>o?0:o-i,u=s-i;return u>fi&&(u=fi),function(){if(r===u)return Xi;var e=t?--u:r++;return n&&n[e]}}function r(e,n,r){var a,l=e&&e.array,u=r>o?0:o-r>>n,c=(s-r>>n)+1;return c>fi&&(c=fi),function(){for(;;){if(a){var e=a();if(e!==Xi)return e;a=null}if(u===c)return Xi;var o=t?--c:u++;a=i(l&&l[o],n-pi,r+(o<<n))}}}var o=e._origin,s=e._capacity,a=Ye(s),l=e._tail;return i(e._root,e._level,0)}function Ue(e,t,i,n,r,o,s){var a=Object.create(Gi);return a.size=t-e,a._origin=e,a._capacity=t,a._level=i,a._root=n,a._tail=r,a.__ownerID=o,a.__hash=s,a.__altered=!1,a}function qe(){return Zi||(Zi=Ue(0,0,pi))}function We(e,t,i){if(t=m(e,t),t!==t)return e;if(t>=e.size||t<0)return e.withMutations(function(e){t<0?Xe(e,t).set(0,i):Xe(e,0,t+1).set(t,i)});t+=e._origin;var n=e._tail,r=e._root,o=c(yi);return t>=Ye(e._capacity)?n=$e(n,e.__ownerID,0,t,i,o):r=$e(r,e.__ownerID,e._level,t,i,o),o.value?e.__ownerID?(e._root=r,e._tail=n,e.__hash=void 0,e.__altered=!0,e):Ue(e._origin,e._capacity,e._level,r,n):e}function $e(e,t,i,n,r,o){var s=n>>>i&mi,a=e&&s<e.array.length;if(!a&&void 0===r)return e;var l;if(i>0){var u=e&&e.array[s],c=$e(u,t,i-pi,n,r,o);return c===u?e:(l=Ge(e,t),l.array[s]=c,l)}return a&&e.array[s]===r?e:(h(o),l=Ge(e,t),void 0===r&&s===l.array.length-1?l.array.pop():l.array[s]=r,l)}function Ge(e,t){return t&&e&&t===e.ownerID?e:new Ve(e?e.array.slice():[],t)}function Ze(e,t){if(t>=Ye(e._capacity))return e._tail;if(t<1<<e._level+pi){for(var i=e._root,n=e._level;i&&n>0;)i=i.array[t>>>n&mi],n-=pi;return i}}function Xe(e,t,i){void 0!==t&&(t|=0),void 0!==i&&(i|=0);var n=e.__ownerID||new d,r=e._origin,o=e._capacity,s=r+t,a=void 0===i?o:i<0?o+i:r+i;if(s===r&&a===o)return e;if(s>=a)return e.clear();for(var l=e._level,u=e._root,c=0;s+c<0;)u=new Ve(u&&u.array.length?[void 0,u]:[],n),l+=pi,c+=1<<l;c&&(s+=c,r+=c,a+=c,o+=c);for(var h=Ye(o),p=Ye(a);p>=1<<l+pi;)u=new Ve(u&&u.array.length?[u]:[],n),l+=pi;var f=e._tail,m=p<h?Ze(e,a-1):p>h?new Ve([],n):f;if(f&&p>h&&s<o&&f.array.length){u=Ge(u,n);for(var g=u,v=l;v>pi;v-=pi){var y=h>>>v&mi;g=g.array[y]=Ge(g.array[y],n)}g.array[h>>>pi&mi]=f}if(a<o&&(m=m&&m.removeAfter(n,0,a)),s>=p)s-=p,a-=p,l=pi,u=null,m=m&&m.removeBefore(n,0,s);else if(s>r||p<h){for(c=0;u;){var w=s>>>l&mi;if(w!==p>>>l&mi)break;w&&(c+=(1<<l)*w),l-=pi,u=u.array[w]}u&&s>r&&(u=u.removeBefore(n,l,s-c)),u&&p<h&&(u=u.removeAfter(n,l,p-c)),c&&(s-=c,a-=c)}return e.__ownerID?(e.size=a-s,e._origin=s,e._capacity=a,e._level=l,e._root=u,e._tail=m,e.__hash=void 0,e.__altered=!0,e):Ue(s,a,l,u,m)}function Ke(e,t,i){for(var r=[],s=0,a=0;a<i.length;a++){var l=i[a],u=n(l);u.size>s&&(s=u.size),o(l)||(u=u.map(function(e){return W(e)})),r.push(u)}return s>e.size&&(e=e.setSize(s)),Ne(e,t,r)}function Ye(e){return e<fi?0:e-1>>>pi<<pi}function Je(e){return null===e||void 0===e?tt():Qe(e)?e:tt().withMutations(function(t){var n=i(e);ce(n.size),n.forEach(function(e,i){return t.set(i,e)})})}function Qe(e){return de(e)&&u(e)}function et(e,t,i,n){var r=Object.create(Je.prototype);return r.size=e?e.size:0,r._map=e,r._list=t,r.__ownerID=i,r.__hash=n,r}function tt(){return Ki||(Ki=et(Ee(),qe()))}function it(e,t,i){var n,r,o=e._map,s=e._list,a=o.get(t),l=void 0!==a;if(i===gi){if(!l)return e;s.size>=fi&&s.size>=2*o.size?(r=s.filter(function(e,t){return void 0!==e&&a!==t}),n=r.toKeyedSeq().map(function(e){return e[0]}).flip().toMap(),e.__ownerID&&(n.__ownerID=r.__ownerID=e.__ownerID)):(n=o.remove(t),r=a===s.size-1?s.pop():s.set(a,void 0))}else if(l){if(i===s.get(a)[1])return e;n=o,r=s.set(a,[t,i])}else n=o.set(t,s.size),r=s.set(s.size,[t,i]);return e.__ownerID?(e.size=n.size,e._map=n,e._list=r,e.__hash=void 0,e):et(n,r)}function nt(e,t){this._iter=e,this._useKeys=t,this.size=e.size}function rt(e){this._iter=e,this.size=e.size}function ot(e){this._iter=e,this.size=e.size}function st(e){this._iter=e,this.size=e.size}function at(e){var t=Ot(e);return t._iter=e,t.size=e.size,t.flip=function(){return e},t.reverse=function(){var t=e.reverse.apply(this);return t.flip=function(){return e.reverse()},t},t.has=function(t){return e.includes(t)},t.includes=function(t){return e.has(t)},t.cacheResult=It,t.__iterateUncached=function(t,i){var n=this;return e.__iterate(function(e,i){return t(i,e,n)!==!1},i)},t.__iteratorUncached=function(t,i){if(t===Si){var n=e.__iterator(t,i);return new S(function(){var e=n.next();if(!e.done){var t=e.value[0];e.value[0]=e.value[1],e.value[1]=t}return e})}return e.__iterator(t===_i?wi:_i,i)},t}function lt(e,t,i){var n=Ot(e);return n.size=e.size,n.has=function(t){return e.has(t)},n.get=function(n,r){var o=e.get(n,gi);return o===gi?r:t.call(i,o,n,e)},n.__iterateUncached=function(n,r){var o=this;return e.__iterate(function(e,r,s){return n(t.call(i,e,r,s),r,o)!==!1},r)},n.__iteratorUncached=function(n,r){var o=e.__iterator(Si,r);return new S(function(){var r=o.next();if(r.done)return r;var s=r.value,a=s[0];return E(n,a,t.call(i,s[1],a,e),r)})},n}function ut(e,t){var i=Ot(e);return i._iter=e,i.size=e.size,i.reverse=function(){return e},e.flip&&(i.flip=function(){var t=at(e);return t.reverse=function(){return e.flip()},t}),i.get=function(i,n){return e.get(t?i:-1-i,n)},i.has=function(i){return e.has(t?i:-1-i)},i.includes=function(t){return e.includes(t)},i.cacheResult=It,i.__iterate=function(t,i){var n=this;return e.__iterate(function(e,i){return t(e,i,n)},!i)},i.__iterator=function(t,i){return e.__iterator(t,!i)},i}function ct(e,t,i,n){var r=Ot(e);return n&&(r.has=function(n){var r=e.get(n,gi);return r!==gi&&!!t.call(i,r,n,e)},r.get=function(n,r){var o=e.get(n,gi);return o!==gi&&t.call(i,o,n,e)?o:r}),r.__iterateUncached=function(r,o){var s=this,a=0;return e.__iterate(function(e,o,l){if(t.call(i,e,o,l))return a++,r(e,n?o:a-1,s)},o),a},r.__iteratorUncached=function(r,o){var s=e.__iterator(Si,o),a=0;return new S(function(){for(;;){var o=s.next();if(o.done)return o;var l=o.value,u=l[0],c=l[1];if(t.call(i,c,u,e))return E(r,n?u:a++,c,o)}})},r}function ht(e,t,i){var n=he().asMutable();return e.__iterate(function(r,o){n.update(t.call(i,r,o,e),0,function(e){return e+1})}),n.asImmutable()}function dt(e,t,i){
	var n=s(e),r=(u(e)?Je():he()).asMutable();e.__iterate(function(o,s){r.update(t.call(i,o,s,e),function(e){return e=e||[],e.push(n?[s,o]:o),e})});var o=Rt(e);return r.map(function(t){return xt(e,o(t))})}function pt(e,t,i,n){var r=e.size;if(void 0!==t&&(t|=0),void 0!==i&&(i===1/0?i=r:i|=0),v(t,i,r))return e;var o=y(t,r),s=w(i,r);if(o!==o||s!==s)return pt(e.toSeq().cacheResult(),t,i,n);var a,l=s-o;l===l&&(a=l<0?0:l);var u=Ot(e);return u.size=0===a?a:e.size&&a||void 0,!n&&A(e)&&a>=0&&(u.get=function(t,i){return t=m(this,t),t>=0&&t<a?e.get(t+o,i):i}),u.__iterateUncached=function(t,i){var r=this;if(0===a)return 0;if(i)return this.cacheResult().__iterate(t,i);var s=0,l=!0,u=0;return e.__iterate(function(e,i){if(!l||!(l=s++<o))return u++,t(e,n?i:u-1,r)!==!1&&u!==a}),u},u.__iteratorUncached=function(t,i){if(0!==a&&i)return this.cacheResult().__iterator(t,i);var r=0!==a&&e.__iterator(t,i),s=0,l=0;return new S(function(){for(;s++<o;)r.next();if(++l>a)return T();var e=r.next();return n||t===_i?e:t===wi?E(t,l-1,void 0,e):E(t,l-1,e.value[1],e)})},u}function ft(e,t,i){var n=Ot(e);return n.__iterateUncached=function(n,r){var o=this;if(r)return this.cacheResult().__iterate(n,r);var s=0;return e.__iterate(function(e,r,a){return t.call(i,e,r,a)&&++s&&n(e,r,o)}),s},n.__iteratorUncached=function(n,r){var o=this;if(r)return this.cacheResult().__iterator(n,r);var s=e.__iterator(Si,r),a=!0;return new S(function(){if(!a)return T();var e=s.next();if(e.done)return e;var r=e.value,l=r[0],u=r[1];return t.call(i,u,l,o)?n===Si?e:E(n,l,u,e):(a=!1,T())})},n}function mt(e,t,i,n){var r=Ot(e);return r.__iterateUncached=function(r,o){var s=this;if(o)return this.cacheResult().__iterate(r,o);var a=!0,l=0;return e.__iterate(function(e,o,u){if(!a||!(a=t.call(i,e,o,u)))return l++,r(e,n?o:l-1,s)}),l},r.__iteratorUncached=function(r,o){var s=this;if(o)return this.cacheResult().__iterator(r,o);var a=e.__iterator(Si,o),l=!0,u=0;return new S(function(){var e,o,c;do{if(e=a.next(),e.done)return n||r===_i?e:r===wi?E(r,u++,void 0,e):E(r,u++,e.value[1],e);var h=e.value;o=h[0],c=h[1],l&&(l=t.call(i,c,o,s))}while(l);return r===Si?e:E(r,o,c,e)})},r}function gt(e,t){var n=s(e),r=[e].concat(t).map(function(e){return o(e)?n&&(e=i(e)):e=n?L(e):H(Array.isArray(e)?e:[e]),e}).filter(function(e){return 0!==e.size});if(0===r.length)return e;if(1===r.length){var l=r[0];if(l===e||n&&s(l)||a(e)&&a(l))return l}var u=new N(r);return n?u=u.toKeyedSeq():a(e)||(u=u.toSetSeq()),u=u.flatten(!0),u.size=r.reduce(function(e,t){if(void 0!==e){var i=t.size;if(void 0!==i)return e+i}},0),u}function vt(e,t,i){var n=Ot(e);return n.__iterateUncached=function(n,r){function s(e,u){var c=this;e.__iterate(function(e,r){return(!t||u<t)&&o(e)?s(e,u+1):n(e,i?r:a++,c)===!1&&(l=!0),!l},r)}var a=0,l=!1;return s(e,0),a},n.__iteratorUncached=function(n,r){var s=e.__iterator(n,r),a=[],l=0;return new S(function(){for(;s;){var e=s.next();if(e.done===!1){var u=e.value;if(n===Si&&(u=u[1]),t&&!(a.length<t)||!o(u))return i?e:E(n,l++,u,e);a.push(s),s=u.__iterator(n,r)}else s=a.pop()}return T()})},n}function yt(e,t,i){var n=Rt(e);return e.toSeq().map(function(r,o){return n(t.call(i,r,o,e))}).flatten(!0)}function wt(e,t){var i=Ot(e);return i.size=e.size&&2*e.size-1,i.__iterateUncached=function(i,n){var r=this,o=0;return e.__iterate(function(e,n){return(!o||i(t,o++,r)!==!1)&&i(e,o++,r)!==!1},n),o},i.__iteratorUncached=function(i,n){var r,o=e.__iterator(_i,n),s=0;return new S(function(){return(!r||s%2)&&(r=o.next(),r.done)?r:s%2?E(i,s++,t):E(i,s++,r.value,r)})},i}function _t(e,t,i){t||(t=Ct);var n=s(e),r=0,o=e.toSeq().map(function(t,n){return[n,t,r++,i?i(t,n,e):t]}).toArray();return o.sort(function(e,i){return t(e[3],i[3])||e[2]-i[2]}).forEach(n?function(e,t){o[t].length=2}:function(e,t){o[t]=e[1]}),n?C(o):a(e)?D(o):k(o)}function St(e,t,i){if(t||(t=Ct),i){var n=e.toSeq().map(function(t,n){return[t,i(t,n,e)]}).reduce(function(e,i){return Et(t,e[1],i[1])?i:e});return n&&n[0]}return e.reduce(function(e,i){return Et(t,e,i)?i:e})}function Et(e,t,i){var n=e(i,t);return 0===n&&i!==t&&(void 0===i||null===i||i!==i)||n>0}function Tt(e,i,n){var r=Ot(e);return r.size=new N(n).map(function(e){return e.size}).min(),r.__iterate=function(e,t){for(var i,n=this.__iterator(_i,t),r=0;!(i=n.next()).done&&e(i.value,r++,this)!==!1;);return r},r.__iteratorUncached=function(e,r){var o=n.map(function(e){return e=t(e),P(r?e.reverse():e)}),s=0,a=!1;return new S(function(){var t;return a||(t=o.map(function(e){return e.next()}),a=t.some(function(e){return e.done})),a?T():E(e,s++,i.apply(null,t.map(function(e){return e.value})))})},r}function xt(e,t){return A(e)?t:e.constructor(t)}function bt(e){if(e!==Object(e))throw new TypeError("Expected [K, V] tuple: "+e)}function Pt(e){return ce(e.size),f(e)}function Rt(e){return s(e)?i:a(e)?n:r}function Ot(e){return Object.create((s(e)?C:a(e)?D:k).prototype)}function It(){return this._iter.cacheResult?(this._iter.cacheResult(),this.size=this._iter.size,this):I.prototype.cacheResult.call(this)}function Ct(e,t){return e>t?1:e<t?-1:0}function Dt(e){var i=P(e);if(!i){if(!O(e))throw new TypeError("Expected iterable or array-like: "+e);i=P(t(e))}return i}function kt(e,t){var i,n=function(o){if(o instanceof n)return o;if(!(this instanceof n))return new n(o);if(!i){i=!0;var s=Object.keys(e);Mt(r,s),r.size=s.length,r._name=t,r._keys=s,r._defaultValues=e}this._map=he(o)},r=n.prototype=Object.create(Yi);return r.constructor=n,n}function Nt(e,t,i){var n=Object.create(Object.getPrototypeOf(e));return n._map=t,n.__ownerID=i,n}function zt(e){return e._name||e.constructor.name||"Record"}function Mt(e,t){try{t.forEach(Bt.bind(void 0,e))}catch(e){}}function Bt(e,t){Object.defineProperty(e,t,{get:function(){return this.get(t)},set:function(e){J(this.__ownerID,"Cannot set on an immutable record."),this.set(t,e)}})}function At(e){return null===e||void 0===e?Vt():Ft(e)&&!u(e)?e:Vt().withMutations(function(t){var i=r(e);ce(i.size),i.forEach(function(e){return t.add(e)})})}function Ft(e){return!(!e||!e[Ji])}function Lt(e,t){return e.__ownerID?(e.size=t.size,e._map=t,e):t===e._map?e:0===t.size?e.__empty():e.__make(t)}function Ht(e,t){var i=Object.create(Qi);return i.size=e?e.size:0,i._map=e,i.__ownerID=t,i}function Vt(){return en||(en=Ht(Ee()))}function jt(e){return null===e||void 0===e?Wt():Ut(e)?e:Wt().withMutations(function(t){var i=r(e);ce(i.size),i.forEach(function(e){return t.add(e)})})}function Ut(e){return Ft(e)&&u(e)}function qt(e,t){var i=Object.create(tn);return i.size=e?e.size:0,i._map=e,i.__ownerID=t,i}function Wt(){return nn||(nn=qt(tt()))}function $t(e){return null===e||void 0===e?Xt():Gt(e)?e:Xt().unshiftAll(e)}function Gt(e){return!(!e||!e[rn])}function Zt(e,t,i,n){var r=Object.create(on);return r.size=e,r._head=t,r.__ownerID=i,r.__hash=n,r.__altered=!1,r}function Xt(){return sn||(sn=Zt(0))}function Kt(e,t){var i=function(i){e.prototype[i]=t[i]};return Object.keys(t).forEach(i),Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(t).forEach(i),e}function Yt(e,t){return t}function Jt(e,t){return[t,e]}function Qt(e){return function(){return!e.apply(this,arguments)}}function ei(e){return function(){return-e.apply(this,arguments)}}function ti(e){return"string"==typeof e?JSON.stringify(e):String(e)}function ii(){return p(arguments)}function ni(e,t){return e<t?1:e>t?-1:0}function ri(e){if(e.size===1/0)return 0;var t=u(e),i=s(e),n=t?1:0,r=e.__iterate(i?t?function(e,t){n=31*n+si(oe(e),oe(t))|0}:function(e,t){n=n+si(oe(e),oe(t))|0}:t?function(e){n=31*n+oe(e)|0}:function(e){n=n+oe(e)|0});return oi(r,n)}function oi(e,t){return t=Ci(t,3432918353),t=Ci(t<<15|t>>>-15,461845907),t=Ci(t<<13|t>>>-13,5),t=(t+3864292196|0)^e,t=Ci(t^t>>>16,2246822507),t=Ci(t^t>>>13,3266489909),t=re(t^t>>>16)}function si(e,t){return e^t+2654435769+(e<<6)+(e>>2)|0}var ai=Array.prototype.slice;e(i,t),e(n,t),e(r,t),t.isIterable=o,t.isKeyed=s,t.isIndexed=a,t.isAssociative=l,t.isOrdered=u,t.Keyed=i,t.Indexed=n,t.Set=r;var li="@@__IMMUTABLE_ITERABLE__@@",ui="@@__IMMUTABLE_KEYED__@@",ci="@@__IMMUTABLE_INDEXED__@@",hi="@@__IMMUTABLE_ORDERED__@@",di="delete",pi=5,fi=1<<pi,mi=fi-1,gi={},vi={value:!1},yi={value:!1},wi=0,_i=1,Si=2,Ei="function"==typeof Symbol&&Symbol.iterator,Ti="@@iterator",xi=Ei||Ti;S.prototype.toString=function(){return"[Iterator]"},S.KEYS=wi,S.VALUES=_i,S.ENTRIES=Si,S.prototype.inspect=S.prototype.toSource=function(){return this.toString()},S.prototype[xi]=function(){return this},e(I,t),I.of=function(){return I(arguments)},I.prototype.toSeq=function(){return this},I.prototype.toString=function(){return this.__toString("Seq {","}")},I.prototype.cacheResult=function(){return!this._cache&&this.__iterateUncached&&(this._cache=this.entrySeq().toArray(),this.size=this._cache.length),this},I.prototype.__iterate=function(e,t){return U(this,e,t,!0)},I.prototype.__iterator=function(e,t){return q(this,e,t,!0)},e(C,I),C.prototype.toKeyedSeq=function(){return this},e(D,I),D.of=function(){return D(arguments)},D.prototype.toIndexedSeq=function(){return this},D.prototype.toString=function(){return this.__toString("Seq [","]")},D.prototype.__iterate=function(e,t){return U(this,e,t,!1)},D.prototype.__iterator=function(e,t){return q(this,e,t,!1)},e(k,I),k.of=function(){return k(arguments)},k.prototype.toSetSeq=function(){return this},I.isSeq=A,I.Keyed=C,I.Set=k,I.Indexed=D;var bi="@@__IMMUTABLE_SEQ__@@";I.prototype[bi]=!0,e(N,D),N.prototype.get=function(e,t){return this.has(e)?this._array[m(this,e)]:t},N.prototype.__iterate=function(e,t){for(var i=this._array,n=i.length-1,r=0;r<=n;r++)if(e(i[t?n-r:r],r,this)===!1)return r+1;return r},N.prototype.__iterator=function(e,t){var i=this._array,n=i.length-1,r=0;return new S(function(){return r>n?T():E(e,r,i[t?n-r++:r++])})},e(z,C),z.prototype.get=function(e,t){return void 0===t||this.has(e)?this._object[e]:t},z.prototype.has=function(e){return this._object.hasOwnProperty(e)},z.prototype.__iterate=function(e,t){for(var i=this._object,n=this._keys,r=n.length-1,o=0;o<=r;o++){var s=n[t?r-o:o];if(e(i[s],s,this)===!1)return o+1}return o},z.prototype.__iterator=function(e,t){var i=this._object,n=this._keys,r=n.length-1,o=0;return new S(function(){var s=n[t?r-o:o];return o++>r?T():E(e,s,i[s])})},z.prototype[hi]=!0,e(M,D),M.prototype.__iterateUncached=function(e,t){if(t)return this.cacheResult().__iterate(e,t);var i=this._iterable,n=P(i),r=0;if(b(n))for(var o;!(o=n.next()).done&&e(o.value,r++,this)!==!1;);return r},M.prototype.__iteratorUncached=function(e,t){if(t)return this.cacheResult().__iterator(e,t);var i=this._iterable,n=P(i);if(!b(n))return new S(T);var r=0;return new S(function(){var t=n.next();return t.done?t:E(e,r++,t.value)})},e(B,D),B.prototype.__iterateUncached=function(e,t){if(t)return this.cacheResult().__iterate(e,t);for(var i=this._iterator,n=this._iteratorCache,r=0;r<n.length;)if(e(n[r],r++,this)===!1)return r;for(var o;!(o=i.next()).done;){var s=o.value;if(n[r]=s,e(s,r++,this)===!1)break}return r},B.prototype.__iteratorUncached=function(e,t){if(t)return this.cacheResult().__iterator(e,t);var i=this._iterator,n=this._iteratorCache,r=0;return new S(function(){if(r>=n.length){var t=i.next();if(t.done)return t;n[r]=t.value}return E(e,r,n[r++])})};var Pi;e(Y,D),Y.prototype.toString=function(){return 0===this.size?"Repeat []":"Repeat [ "+this._value+" "+this.size+" times ]"},Y.prototype.get=function(e,t){return this.has(e)?this._value:t},Y.prototype.includes=function(e){return X(this._value,e)},Y.prototype.slice=function(e,t){var i=this.size;return v(e,t,i)?this:new Y(this._value,w(t,i)-y(e,i))},Y.prototype.reverse=function(){return this},Y.prototype.indexOf=function(e){return X(this._value,e)?0:-1},Y.prototype.lastIndexOf=function(e){return X(this._value,e)?this.size:-1},Y.prototype.__iterate=function(e,t){for(var i=0;i<this.size;i++)if(e(this._value,i,this)===!1)return i+1;return i},Y.prototype.__iterator=function(e,t){var i=this,n=0;return new S(function(){return n<i.size?E(e,n++,i._value):T()})},Y.prototype.equals=function(e){return e instanceof Y?X(this._value,e._value):K(e)};var Ri;e(Q,D),Q.prototype.toString=function(){return 0===this.size?"Range []":"Range [ "+this._start+"..."+this._end+(1!==this._step?" by "+this._step:"")+" ]"},Q.prototype.get=function(e,t){return this.has(e)?this._start+m(this,e)*this._step:t},Q.prototype.includes=function(e){var t=(e-this._start)/this._step;return t>=0&&t<this.size&&t===Math.floor(t)},Q.prototype.slice=function(e,t){return v(e,t,this.size)?this:(e=y(e,this.size),t=w(t,this.size),t<=e?new Q(0,0):new Q(this.get(e,this._end),this.get(t,this._end),this._step))},Q.prototype.indexOf=function(e){var t=e-this._start;if(t%this._step===0){var i=t/this._step;if(i>=0&&i<this.size)return i}return-1},Q.prototype.lastIndexOf=function(e){return this.indexOf(e)},Q.prototype.__iterate=function(e,t){for(var i=this.size-1,n=this._step,r=t?this._start+i*n:this._start,o=0;o<=i;o++){if(e(r,o,this)===!1)return o+1;r+=t?-n:n}return o},Q.prototype.__iterator=function(e,t){var i=this.size-1,n=this._step,r=t?this._start+i*n:this._start,o=0;return new S(function(){var s=r;return r+=t?-n:n,o>i?T():E(e,o++,s)})},Q.prototype.equals=function(e){return e instanceof Q?this._start===e._start&&this._end===e._end&&this._step===e._step:K(this,e)};var Oi;e(ee,t),e(te,ee),e(ie,ee),e(ne,ee),ee.Keyed=te,ee.Indexed=ie,ee.Set=ne;var Ii,Ci="function"==typeof Math.imul&&Math.imul(4294967295,2)===-2?Math.imul:function(e,t){e|=0,t|=0;var i=65535&e,n=65535&t;return i*n+((e>>>16)*n+i*(t>>>16)<<16>>>0)|0},Di=Object.isExtensible,ki=function(){try{return Object.defineProperty({},"@",{}),!0}catch(e){return!1}}(),Ni="function"==typeof WeakMap;Ni&&(Ii=new WeakMap);var zi=0,Mi="__immutablehash__";"function"==typeof Symbol&&(Mi=Symbol(Mi));var Bi=16,Ai=255,Fi=0,Li={};e(he,te),he.of=function(){var e=ai.call(arguments,0);return Ee().withMutations(function(t){for(var i=0;i<e.length;i+=2){if(i+1>=e.length)throw new Error("Missing value for key: "+e[i]);t.set(e[i],e[i+1])}})},he.prototype.toString=function(){return this.__toString("Map {","}")},he.prototype.get=function(e,t){return this._root?this._root.get(0,void 0,e,t):t},he.prototype.set=function(e,t){return Te(this,e,t)},he.prototype.setIn=function(e,t){return this.updateIn(e,gi,function(){return t})},he.prototype.remove=function(e){return Te(this,e,gi)},he.prototype.deleteIn=function(e){return this.updateIn(e,function(){return gi})},he.prototype.update=function(e,t,i){return 1===arguments.length?e(this):this.updateIn([e],t,i)},he.prototype.updateIn=function(e,t,i){i||(i=t,t=void 0);var n=ze(this,Dt(e),t,i);return n===gi?void 0:n},he.prototype.clear=function(){return 0===this.size?this:this.__ownerID?(this.size=0,this._root=null,this.__hash=void 0,this.__altered=!0,this):Ee()},he.prototype.merge=function(){return Ce(this,void 0,arguments)},he.prototype.mergeWith=function(e){var t=ai.call(arguments,1);return Ce(this,e,t)},he.prototype.mergeIn=function(e){var t=ai.call(arguments,1);return this.updateIn(e,Ee(),function(e){return"function"==typeof e.merge?e.merge.apply(e,t):t[t.length-1]})},he.prototype.mergeDeep=function(){return Ce(this,De,arguments)},he.prototype.mergeDeepWith=function(e){var t=ai.call(arguments,1);return Ce(this,ke(e),t)},he.prototype.mergeDeepIn=function(e){var t=ai.call(arguments,1);return this.updateIn(e,Ee(),function(e){return"function"==typeof e.mergeDeep?e.mergeDeep.apply(e,t):t[t.length-1]})},he.prototype.sort=function(e){return Je(_t(this,e))},he.prototype.sortBy=function(e,t){return Je(_t(this,t,e))},he.prototype.withMutations=function(e){var t=this.asMutable();return e(t),t.wasAltered()?t.__ensureOwner(this.__ownerID):this},he.prototype.asMutable=function(){return this.__ownerID?this:this.__ensureOwner(new d)},he.prototype.asImmutable=function(){return this.__ensureOwner()},he.prototype.wasAltered=function(){return this.__altered},he.prototype.__iterator=function(e,t){return new ye(this,e,t)},he.prototype.__iterate=function(e,t){var i=this,n=0;return this._root&&this._root.iterate(function(t){return n++,e(t[1],t[0],i)},t),n},he.prototype.__ensureOwner=function(e){return e===this.__ownerID?this:e?Se(this.size,this._root,e,this.__hash):(this.__ownerID=e,this.__altered=!1,this)},he.isMap=de;var Hi="@@__IMMUTABLE_MAP__@@",Vi=he.prototype;Vi[Hi]=!0,Vi[di]=Vi.remove,Vi.removeIn=Vi.deleteIn,pe.prototype.get=function(e,t,i,n){for(var r=this.entries,o=0,s=r.length;o<s;o++)if(X(i,r[o][0]))return r[o][1];return n},pe.prototype.update=function(e,t,i,n,r,o,s){for(var a=r===gi,l=this.entries,u=0,c=l.length;u<c&&!X(n,l[u][0]);u++);var d=u<c;if(d?l[u][1]===r:a)return this;if(h(s),(a||!d)&&h(o),!a||1!==l.length){if(!d&&!a&&l.length>=Ui)return Re(e,l,n,r);var f=e&&e===this.ownerID,m=f?l:p(l);return d?a?u===c-1?m.pop():m[u]=m.pop():m[u]=[n,r]:m.push([n,r]),f?(this.entries=m,this):new pe(e,m)}},fe.prototype.get=function(e,t,i,n){void 0===t&&(t=oe(i));var r=1<<((0===e?t:t>>>e)&mi),o=this.bitmap;return 0===(o&r)?n:this.nodes[Me(o&r-1)].get(e+pi,t,i,n)},fe.prototype.update=function(e,t,i,n,r,o,s){void 0===i&&(i=oe(n));var a=(0===t?i:i>>>t)&mi,l=1<<a,u=this.bitmap,c=0!==(u&l);if(!c&&r===gi)return this;var h=Me(u&l-1),d=this.nodes,p=c?d[h]:void 0,f=xe(p,e,t+pi,i,n,r,o,s);if(f===p)return this;if(!c&&f&&d.length>=qi)return Ie(e,d,u,a,f);if(c&&!f&&2===d.length&&be(d[1^h]))return d[1^h];if(c&&f&&1===d.length&&be(f))return f;var m=e&&e===this.ownerID,g=c?f?u:u^l:u|l,v=c?f?Be(d,h,f,m):Fe(d,h,m):Ae(d,h,f,m);return m?(this.bitmap=g,this.nodes=v,this):new fe(e,g,v)},me.prototype.get=function(e,t,i,n){void 0===t&&(t=oe(i));var r=(0===e?t:t>>>e)&mi,o=this.nodes[r];return o?o.get(e+pi,t,i,n):n},me.prototype.update=function(e,t,i,n,r,o,s){void 0===i&&(i=oe(n));var a=(0===t?i:i>>>t)&mi,l=r===gi,u=this.nodes,c=u[a];if(l&&!c)return this;var h=xe(c,e,t+pi,i,n,r,o,s);if(h===c)return this;var d=this.count;if(c){if(!h&&(d--,d<Wi))return Oe(e,u,d,a)}else d++;var p=e&&e===this.ownerID,f=Be(u,a,h,p);return p?(this.count=d,this.nodes=f,this):new me(e,d,f)},ge.prototype.get=function(e,t,i,n){for(var r=this.entries,o=0,s=r.length;o<s;o++)if(X(i,r[o][0]))return r[o][1];return n},ge.prototype.update=function(e,t,i,n,r,o,s){void 0===i&&(i=oe(n));var a=r===gi;if(i!==this.keyHash)return a?this:(h(s),h(o),Pe(this,e,t,i,[n,r]));for(var l=this.entries,u=0,c=l.length;u<c&&!X(n,l[u][0]);u++);var d=u<c;if(d?l[u][1]===r:a)return this;if(h(s),(a||!d)&&h(o),a&&2===c)return new ve(e,this.keyHash,l[1^u]);var f=e&&e===this.ownerID,m=f?l:p(l);return d?a?u===c-1?m.pop():m[u]=m.pop():m[u]=[n,r]:m.push([n,r]),f?(this.entries=m,this):new ge(e,this.keyHash,m)},ve.prototype.get=function(e,t,i,n){return X(i,this.entry[0])?this.entry[1]:n},ve.prototype.update=function(e,t,i,n,r,o,s){var a=r===gi,l=X(n,this.entry[0]);return(l?r===this.entry[1]:a)?this:(h(s),a?void h(o):l?e&&e===this.ownerID?(this.entry[1]=r,this):new ve(e,this.keyHash,[n,r]):(h(o),Pe(this,e,t,oe(n),[n,r])))},pe.prototype.iterate=ge.prototype.iterate=function(e,t){for(var i=this.entries,n=0,r=i.length-1;n<=r;n++)if(e(i[t?r-n:n])===!1)return!1},fe.prototype.iterate=me.prototype.iterate=function(e,t){for(var i=this.nodes,n=0,r=i.length-1;n<=r;n++){var o=i[t?r-n:n];if(o&&o.iterate(e,t)===!1)return!1}},ve.prototype.iterate=function(e,t){return e(this.entry)},e(ye,S),ye.prototype.next=function(){for(var e=this._type,t=this._stack;t;){var i,n=t.node,r=t.index++;if(n.entry){if(0===r)return we(e,n.entry)}else if(n.entries){if(i=n.entries.length-1,r<=i)return we(e,n.entries[this._reverse?i-r:r])}else if(i=n.nodes.length-1,r<=i){var o=n.nodes[this._reverse?i-r:r];if(o){if(o.entry)return we(e,o.entry);t=this._stack=_e(o,t)}continue}t=this._stack=this._stack.__prev}return T()};var ji,Ui=fi/4,qi=fi/2,Wi=fi/4;e(Le,ie),Le.of=function(){return this(arguments)},Le.prototype.toString=function(){return this.__toString("List [","]")},Le.prototype.get=function(e,t){if(e=m(this,e),e>=0&&e<this.size){e+=this._origin;var i=Ze(this,e);return i&&i.array[e&mi]}return t},Le.prototype.set=function(e,t){return We(this,e,t)},Le.prototype.remove=function(e){return this.has(e)?0===e?this.shift():e===this.size-1?this.pop():this.splice(e,1):this},Le.prototype.insert=function(e,t){return this.splice(e,0,t)},Le.prototype.clear=function(){return 0===this.size?this:this.__ownerID?(this.size=this._origin=this._capacity=0,this._level=pi,this._root=this._tail=null,this.__hash=void 0,this.__altered=!0,this):qe()},Le.prototype.push=function(){var e=arguments,t=this.size;return this.withMutations(function(i){Xe(i,0,t+e.length);for(var n=0;n<e.length;n++)i.set(t+n,e[n])})},Le.prototype.pop=function(){return Xe(this,0,-1)},Le.prototype.unshift=function(){var e=arguments;return this.withMutations(function(t){Xe(t,-e.length);for(var i=0;i<e.length;i++)t.set(i,e[i])})},Le.prototype.shift=function(){return Xe(this,1)},Le.prototype.merge=function(){return Ke(this,void 0,arguments)},Le.prototype.mergeWith=function(e){var t=ai.call(arguments,1);return Ke(this,e,t)},Le.prototype.mergeDeep=function(){return Ke(this,De,arguments)},Le.prototype.mergeDeepWith=function(e){var t=ai.call(arguments,1);return Ke(this,ke(e),t)},Le.prototype.setSize=function(e){return Xe(this,0,e)},Le.prototype.slice=function(e,t){var i=this.size;return v(e,t,i)?this:Xe(this,y(e,i),w(t,i))},Le.prototype.__iterator=function(e,t){var i=0,n=je(this,t);return new S(function(){var t=n();return t===Xi?T():E(e,i++,t)})},Le.prototype.__iterate=function(e,t){for(var i,n=0,r=je(this,t);(i=r())!==Xi&&e(i,n++,this)!==!1;);return n},Le.prototype.__ensureOwner=function(e){return e===this.__ownerID?this:e?Ue(this._origin,this._capacity,this._level,this._root,this._tail,e,this.__hash):(this.__ownerID=e,this)},Le.isList=He;var $i="@@__IMMUTABLE_LIST__@@",Gi=Le.prototype;Gi[$i]=!0,Gi[di]=Gi.remove,Gi.setIn=Vi.setIn,Gi.deleteIn=Gi.removeIn=Vi.removeIn,Gi.update=Vi.update,Gi.updateIn=Vi.updateIn,Gi.mergeIn=Vi.mergeIn,Gi.mergeDeepIn=Vi.mergeDeepIn,Gi.withMutations=Vi.withMutations,Gi.asMutable=Vi.asMutable,Gi.asImmutable=Vi.asImmutable,Gi.wasAltered=Vi.wasAltered,Ve.prototype.removeBefore=function(e,t,i){if(i===t?1<<t:0===this.array.length)return this;var n=i>>>t&mi;if(n>=this.array.length)return new Ve([],e);var r,o=0===n;if(t>0){var s=this.array[n];if(r=s&&s.removeBefore(e,t-pi,i),r===s&&o)return this}if(o&&!r)return this;var a=Ge(this,e);if(!o)for(var l=0;l<n;l++)a.array[l]=void 0;return r&&(a.array[n]=r),a},Ve.prototype.removeAfter=function(e,t,i){if(i===(t?1<<t:0)||0===this.array.length)return this;var n=i-1>>>t&mi;if(n>=this.array.length)return this;var r;if(t>0){var o=this.array[n];if(r=o&&o.removeAfter(e,t-pi,i),r===o&&n===this.array.length-1)return this}var s=Ge(this,e);return s.array.splice(n+1),r&&(s.array[n]=r),s};var Zi,Xi={};e(Je,he),Je.of=function(){return this(arguments)},Je.prototype.toString=function(){return this.__toString("OrderedMap {","}")},Je.prototype.get=function(e,t){var i=this._map.get(e);return void 0!==i?this._list.get(i)[1]:t},Je.prototype.clear=function(){return 0===this.size?this:this.__ownerID?(this.size=0,this._map.clear(),this._list.clear(),this):tt()},Je.prototype.set=function(e,t){return it(this,e,t)},Je.prototype.remove=function(e){return it(this,e,gi)},Je.prototype.wasAltered=function(){return this._map.wasAltered()||this._list.wasAltered()},Je.prototype.__iterate=function(e,t){var i=this;return this._list.__iterate(function(t){return t&&e(t[1],t[0],i)},t)},Je.prototype.__iterator=function(e,t){return this._list.fromEntrySeq().__iterator(e,t)},Je.prototype.__ensureOwner=function(e){if(e===this.__ownerID)return this;var t=this._map.__ensureOwner(e),i=this._list.__ensureOwner(e);return e?et(t,i,e,this.__hash):(this.__ownerID=e,this._map=t,this._list=i,this)},Je.isOrderedMap=Qe,Je.prototype[hi]=!0,Je.prototype[di]=Je.prototype.remove;var Ki;e(nt,C),nt.prototype.get=function(e,t){return this._iter.get(e,t)},nt.prototype.has=function(e){return this._iter.has(e)},nt.prototype.valueSeq=function(){return this._iter.valueSeq()},nt.prototype.reverse=function(){var e=this,t=ut(this,!0);return this._useKeys||(t.valueSeq=function(){return e._iter.toSeq().reverse()}),t},nt.prototype.map=function(e,t){var i=this,n=lt(this,e,t);return this._useKeys||(n.valueSeq=function(){return i._iter.toSeq().map(e,t)}),n},nt.prototype.__iterate=function(e,t){var i,n=this;return this._iter.__iterate(this._useKeys?function(t,i){return e(t,i,n)}:(i=t?Pt(this):0,function(r){return e(r,t?--i:i++,n)}),t)},nt.prototype.__iterator=function(e,t){if(this._useKeys)return this._iter.__iterator(e,t);var i=this._iter.__iterator(_i,t),n=t?Pt(this):0;return new S(function(){var r=i.next();return r.done?r:E(e,t?--n:n++,r.value,r)})},nt.prototype[hi]=!0,e(rt,D),rt.prototype.includes=function(e){return this._iter.includes(e)},rt.prototype.__iterate=function(e,t){var i=this,n=0;return this._iter.__iterate(function(t){return e(t,n++,i)},t)},rt.prototype.__iterator=function(e,t){var i=this._iter.__iterator(_i,t),n=0;return new S(function(){var t=i.next();return t.done?t:E(e,n++,t.value,t)})},e(ot,k),ot.prototype.has=function(e){return this._iter.includes(e)},ot.prototype.__iterate=function(e,t){var i=this;return this._iter.__iterate(function(t){return e(t,t,i)},t)},ot.prototype.__iterator=function(e,t){var i=this._iter.__iterator(_i,t);return new S(function(){var t=i.next();return t.done?t:E(e,t.value,t.value,t)})},e(st,C),st.prototype.entrySeq=function(){return this._iter.toSeq()},st.prototype.__iterate=function(e,t){var i=this;return this._iter.__iterate(function(t){if(t){bt(t);var n=o(t);return e(n?t.get(1):t[1],n?t.get(0):t[0],i)}},t)},st.prototype.__iterator=function(e,t){var i=this._iter.__iterator(_i,t);return new S(function(){for(;;){var t=i.next();if(t.done)return t;var n=t.value;if(n){bt(n);var r=o(n);return E(e,r?n.get(0):n[0],r?n.get(1):n[1],t)}}})},rt.prototype.cacheResult=nt.prototype.cacheResult=ot.prototype.cacheResult=st.prototype.cacheResult=It,e(kt,te),kt.prototype.toString=function(){return this.__toString(zt(this)+" {","}")},kt.prototype.has=function(e){return this._defaultValues.hasOwnProperty(e)},kt.prototype.get=function(e,t){if(!this.has(e))return t;var i=this._defaultValues[e];return this._map?this._map.get(e,i):i},kt.prototype.clear=function(){if(this.__ownerID)return this._map&&this._map.clear(),this;var e=this.constructor;return e._empty||(e._empty=Nt(this,Ee()))},kt.prototype.set=function(e,t){if(!this.has(e))throw new Error('Cannot set unknown key "'+e+'" on '+zt(this));if(this._map&&!this._map.has(e)){var i=this._defaultValues[e];if(t===i)return this}var n=this._map&&this._map.set(e,t);return this.__ownerID||n===this._map?this:Nt(this,n)},kt.prototype.remove=function(e){if(!this.has(e))return this;var t=this._map&&this._map.remove(e);return this.__ownerID||t===this._map?this:Nt(this,t)},kt.prototype.wasAltered=function(){return this._map.wasAltered()},kt.prototype.__iterator=function(e,t){var n=this;return i(this._defaultValues).map(function(e,t){return n.get(t)}).__iterator(e,t)},kt.prototype.__iterate=function(e,t){var n=this;return i(this._defaultValues).map(function(e,t){return n.get(t)}).__iterate(e,t)},kt.prototype.__ensureOwner=function(e){if(e===this.__ownerID)return this;var t=this._map&&this._map.__ensureOwner(e);return e?Nt(this,t,e):(this.__ownerID=e,this._map=t,this)};var Yi=kt.prototype;Yi[di]=Yi.remove,Yi.deleteIn=Yi.removeIn=Vi.removeIn,Yi.merge=Vi.merge,Yi.mergeWith=Vi.mergeWith,Yi.mergeIn=Vi.mergeIn,Yi.mergeDeep=Vi.mergeDeep,Yi.mergeDeepWith=Vi.mergeDeepWith,Yi.mergeDeepIn=Vi.mergeDeepIn,Yi.setIn=Vi.setIn,Yi.update=Vi.update,Yi.updateIn=Vi.updateIn,Yi.withMutations=Vi.withMutations,Yi.asMutable=Vi.asMutable,Yi.asImmutable=Vi.asImmutable,e(At,ne),At.of=function(){return this(arguments)},At.fromKeys=function(e){return this(i(e).keySeq())},At.prototype.toString=function(){return this.__toString("Set {","}")},At.prototype.has=function(e){return this._map.has(e)},At.prototype.add=function(e){return Lt(this,this._map.set(e,!0))},At.prototype.remove=function(e){return Lt(this,this._map.remove(e))},At.prototype.clear=function(){return Lt(this,this._map.clear())},At.prototype.union=function(){var e=ai.call(arguments,0);return e=e.filter(function(e){return 0!==e.size}),0===e.length?this:0!==this.size||this.__ownerID||1!==e.length?this.withMutations(function(t){for(var i=0;i<e.length;i++)r(e[i]).forEach(function(e){return t.add(e)})}):this.constructor(e[0])},At.prototype.intersect=function(){var e=ai.call(arguments,0);if(0===e.length)return this;e=e.map(function(e){return r(e)});var t=this;return this.withMutations(function(i){t.forEach(function(t){e.every(function(e){return e.includes(t)})||i.remove(t)})})},At.prototype.subtract=function(){var e=ai.call(arguments,0);if(0===e.length)return this;e=e.map(function(e){return r(e)});var t=this;return this.withMutations(function(i){t.forEach(function(t){e.some(function(e){return e.includes(t)})&&i.remove(t)})})},At.prototype.merge=function(){return this.union.apply(this,arguments)},At.prototype.mergeWith=function(e){var t=ai.call(arguments,1);return this.union.apply(this,t)},At.prototype.sort=function(e){return jt(_t(this,e))},At.prototype.sortBy=function(e,t){return jt(_t(this,t,e))},At.prototype.wasAltered=function(){return this._map.wasAltered()},At.prototype.__iterate=function(e,t){var i=this;return this._map.__iterate(function(t,n){return e(n,n,i)},t)},At.prototype.__iterator=function(e,t){return this._map.map(function(e,t){return t}).__iterator(e,t)},At.prototype.__ensureOwner=function(e){if(e===this.__ownerID)return this;var t=this._map.__ensureOwner(e);return e?this.__make(t,e):(this.__ownerID=e,this._map=t,this)},At.isSet=Ft;var Ji="@@__IMMUTABLE_SET__@@",Qi=At.prototype;Qi[Ji]=!0,Qi[di]=Qi.remove,Qi.mergeDeep=Qi.merge,Qi.mergeDeepWith=Qi.mergeWith,Qi.withMutations=Vi.withMutations,Qi.asMutable=Vi.asMutable,Qi.asImmutable=Vi.asImmutable,Qi.__empty=Vt,Qi.__make=Ht;var en;e(jt,At),jt.of=function(){return this(arguments)},jt.fromKeys=function(e){return this(i(e).keySeq())},jt.prototype.toString=function(){return this.__toString("OrderedSet {","}")},jt.isOrderedSet=Ut;var tn=jt.prototype;tn[hi]=!0,tn.__empty=Wt,tn.__make=qt;var nn;e($t,ie),$t.of=function(){return this(arguments)},$t.prototype.toString=function(){return this.__toString("Stack [","]")},$t.prototype.get=function(e,t){var i=this._head;for(e=m(this,e);i&&e--;)i=i.next;return i?i.value:t},$t.prototype.peek=function(){return this._head&&this._head.value},$t.prototype.push=function(){if(0===arguments.length)return this;for(var e=this.size+arguments.length,t=this._head,i=arguments.length-1;i>=0;i--)t={value:arguments[i],next:t};return this.__ownerID?(this.size=e,this._head=t,this.__hash=void 0,this.__altered=!0,this):Zt(e,t)},$t.prototype.pushAll=function(e){if(e=n(e),0===e.size)return this;ce(e.size);var t=this.size,i=this._head;return e.reverse().forEach(function(e){t++,i={value:e,next:i}}),this.__ownerID?(this.size=t,this._head=i,this.__hash=void 0,this.__altered=!0,this):Zt(t,i)},$t.prototype.pop=function(){return this.slice(1)},$t.prototype.unshift=function(){return this.push.apply(this,arguments)},$t.prototype.unshiftAll=function(e){return this.pushAll(e)},$t.prototype.shift=function(){return this.pop.apply(this,arguments)},$t.prototype.clear=function(){return 0===this.size?this:this.__ownerID?(this.size=0,this._head=void 0,this.__hash=void 0,this.__altered=!0,this):Xt()},$t.prototype.slice=function(e,t){if(v(e,t,this.size))return this;var i=y(e,this.size),n=w(t,this.size);if(n!==this.size)return ie.prototype.slice.call(this,e,t);for(var r=this.size-i,o=this._head;i--;)o=o.next;return this.__ownerID?(this.size=r,this._head=o,this.__hash=void 0,this.__altered=!0,this):Zt(r,o)},$t.prototype.__ensureOwner=function(e){return e===this.__ownerID?this:e?Zt(this.size,this._head,e,this.__hash):(this.__ownerID=e,this.__altered=!1,this)},$t.prototype.__iterate=function(e,t){if(t)return this.reverse().__iterate(e);for(var i=0,n=this._head;n&&e(n.value,i++,this)!==!1;)n=n.next;return i},$t.prototype.__iterator=function(e,t){if(t)return this.reverse().__iterator(e);var i=0,n=this._head;return new S(function(){
	if(n){var t=n.value;return n=n.next,E(e,i++,t)}return T()})},$t.isStack=Gt;var rn="@@__IMMUTABLE_STACK__@@",on=$t.prototype;on[rn]=!0,on.withMutations=Vi.withMutations,on.asMutable=Vi.asMutable,on.asImmutable=Vi.asImmutable,on.wasAltered=Vi.wasAltered;var sn;t.Iterator=S,Kt(t,{toArray:function(){ce(this.size);var e=new Array(this.size||0);return this.valueSeq().__iterate(function(t,i){e[i]=t}),e},toIndexedSeq:function(){return new rt(this)},toJS:function(){return this.toSeq().map(function(e){return e&&"function"==typeof e.toJS?e.toJS():e}).__toJS()},toJSON:function(){return this.toSeq().map(function(e){return e&&"function"==typeof e.toJSON?e.toJSON():e}).__toJS()},toKeyedSeq:function(){return new nt(this,!0)},toMap:function(){return he(this.toKeyedSeq())},toObject:function(){ce(this.size);var e={};return this.__iterate(function(t,i){e[i]=t}),e},toOrderedMap:function(){return Je(this.toKeyedSeq())},toOrderedSet:function(){return jt(s(this)?this.valueSeq():this)},toSet:function(){return At(s(this)?this.valueSeq():this)},toSetSeq:function(){return new ot(this)},toSeq:function(){return a(this)?this.toIndexedSeq():s(this)?this.toKeyedSeq():this.toSetSeq()},toStack:function(){return $t(s(this)?this.valueSeq():this)},toList:function(){return Le(s(this)?this.valueSeq():this)},toString:function(){return"[Iterable]"},__toString:function(e,t){return 0===this.size?e+t:e+" "+this.toSeq().map(this.__toStringMapper).join(", ")+" "+t},concat:function(){var e=ai.call(arguments,0);return xt(this,gt(this,e))},includes:function(e){return this.some(function(t){return X(t,e)})},entries:function(){return this.__iterator(Si)},every:function(e,t){ce(this.size);var i=!0;return this.__iterate(function(n,r,o){if(!e.call(t,n,r,o))return i=!1,!1}),i},filter:function(e,t){return xt(this,ct(this,e,t,!0))},find:function(e,t,i){var n=this.findEntry(e,t);return n?n[1]:i},forEach:function(e,t){return ce(this.size),this.__iterate(t?e.bind(t):e)},join:function(e){ce(this.size),e=void 0!==e?""+e:",";var t="",i=!0;return this.__iterate(function(n){i?i=!1:t+=e,t+=null!==n&&void 0!==n?n.toString():""}),t},keys:function(){return this.__iterator(wi)},map:function(e,t){return xt(this,lt(this,e,t))},reduce:function(e,t,i){ce(this.size);var n,r;return arguments.length<2?r=!0:n=t,this.__iterate(function(t,o,s){r?(r=!1,n=t):n=e.call(i,n,t,o,s)}),n},reduceRight:function(e,t,i){var n=this.toKeyedSeq().reverse();return n.reduce.apply(n,arguments)},reverse:function(){return xt(this,ut(this,!0))},slice:function(e,t){return xt(this,pt(this,e,t,!0))},some:function(e,t){return!this.every(Qt(e),t)},sort:function(e){return xt(this,_t(this,e))},values:function(){return this.__iterator(_i)},butLast:function(){return this.slice(0,-1)},isEmpty:function(){return void 0!==this.size?0===this.size:!this.some(function(){return!0})},count:function(e,t){return f(e?this.toSeq().filter(e,t):this)},countBy:function(e,t){return ht(this,e,t)},equals:function(e){return K(this,e)},entrySeq:function(){var e=this;if(e._cache)return new N(e._cache);var t=e.toSeq().map(Jt).toIndexedSeq();return t.fromEntrySeq=function(){return e.toSeq()},t},filterNot:function(e,t){return this.filter(Qt(e),t)},findEntry:function(e,t,i){var n=i;return this.__iterate(function(i,r,o){if(e.call(t,i,r,o))return n=[r,i],!1}),n},findKey:function(e,t){var i=this.findEntry(e,t);return i&&i[0]},findLast:function(e,t,i){return this.toKeyedSeq().reverse().find(e,t,i)},findLastEntry:function(e,t,i){return this.toKeyedSeq().reverse().findEntry(e,t,i)},findLastKey:function(e,t){return this.toKeyedSeq().reverse().findKey(e,t)},first:function(){return this.find(g)},flatMap:function(e,t){return xt(this,yt(this,e,t))},flatten:function(e){return xt(this,vt(this,e,!0))},fromEntrySeq:function(){return new st(this)},get:function(e,t){return this.find(function(t,i){return X(i,e)},void 0,t)},getIn:function(e,t){for(var i,n=this,r=Dt(e);!(i=r.next()).done;){var o=i.value;if(n=n&&n.get?n.get(o,gi):gi,n===gi)return t}return n},groupBy:function(e,t){return dt(this,e,t)},has:function(e){return this.get(e,gi)!==gi},hasIn:function(e){return this.getIn(e,gi)!==gi},isSubset:function(e){return e="function"==typeof e.includes?e:t(e),this.every(function(t){return e.includes(t)})},isSuperset:function(e){return e="function"==typeof e.isSubset?e:t(e),e.isSubset(this)},keyOf:function(e){return this.findKey(function(t){return X(t,e)})},keySeq:function(){return this.toSeq().map(Yt).toIndexedSeq()},last:function(){return this.toSeq().reverse().first()},lastKeyOf:function(e){return this.toKeyedSeq().reverse().keyOf(e)},max:function(e){return St(this,e)},maxBy:function(e,t){return St(this,t,e)},min:function(e){return St(this,e?ei(e):ni)},minBy:function(e,t){return St(this,t?ei(t):ni,e)},rest:function(){return this.slice(1)},skip:function(e){return this.slice(Math.max(0,e))},skipLast:function(e){return xt(this,this.toSeq().reverse().skip(e).reverse())},skipWhile:function(e,t){return xt(this,mt(this,e,t,!0))},skipUntil:function(e,t){return this.skipWhile(Qt(e),t)},sortBy:function(e,t){return xt(this,_t(this,t,e))},take:function(e){return this.slice(0,Math.max(0,e))},takeLast:function(e){return xt(this,this.toSeq().reverse().take(e).reverse())},takeWhile:function(e,t){return xt(this,ft(this,e,t))},takeUntil:function(e,t){return this.takeWhile(Qt(e),t)},valueSeq:function(){return this.toIndexedSeq()},hashCode:function(){return this.__hash||(this.__hash=ri(this))}});var an=t.prototype;an[li]=!0,an[xi]=an.values,an.__toJS=an.toArray,an.__toStringMapper=ti,an.inspect=an.toSource=function(){return this.toString()},an.chain=an.flatMap,an.contains=an.includes,Kt(i,{flip:function(){return xt(this,at(this))},mapEntries:function(e,t){var i=this,n=0;return xt(this,this.toSeq().map(function(r,o){return e.call(t,[o,r],n++,i)}).fromEntrySeq())},mapKeys:function(e,t){var i=this;return xt(this,this.toSeq().flip().map(function(n,r){return e.call(t,n,r,i)}).flip())}});var ln=i.prototype;ln[ui]=!0,ln[xi]=an.entries,ln.__toJS=an.toObject,ln.__toStringMapper=function(e,t){return JSON.stringify(t)+": "+ti(e)},Kt(n,{toKeyedSeq:function(){return new nt(this,!1)},filter:function(e,t){return xt(this,ct(this,e,t,!1))},findIndex:function(e,t){var i=this.findEntry(e,t);return i?i[0]:-1},indexOf:function(e){var t=this.keyOf(e);return void 0===t?-1:t},lastIndexOf:function(e){var t=this.lastKeyOf(e);return void 0===t?-1:t},reverse:function(){return xt(this,ut(this,!1))},slice:function(e,t){return xt(this,pt(this,e,t,!1))},splice:function(e,t){var i=arguments.length;if(t=Math.max(0|t,0),0===i||2===i&&!t)return this;e=y(e,e<0?this.count():this.size);var n=this.slice(0,e);return xt(this,1===i?n:n.concat(p(arguments,2),this.slice(e+t)))},findLastIndex:function(e,t){var i=this.findLastEntry(e,t);return i?i[0]:-1},first:function(){return this.get(0)},flatten:function(e){return xt(this,vt(this,e,!1))},get:function(e,t){return e=m(this,e),e<0||this.size===1/0||void 0!==this.size&&e>this.size?t:this.find(function(t,i){return i===e},void 0,t)},has:function(e){return e=m(this,e),e>=0&&(void 0!==this.size?this.size===1/0||e<this.size:this.indexOf(e)!==-1)},interpose:function(e){return xt(this,wt(this,e))},interleave:function(){var e=[this].concat(p(arguments)),t=Tt(this.toSeq(),D.of,e),i=t.flatten(!0);return t.size&&(i.size=t.size*e.length),xt(this,i)},keySeq:function(){return Q(0,this.size)},last:function(){return this.get(-1)},skipWhile:function(e,t){return xt(this,mt(this,e,t,!1))},zip:function(){var e=[this].concat(p(arguments));return xt(this,Tt(this,ii,e))},zipWith:function(e){var t=p(arguments);return t[0]=this,xt(this,Tt(this,e,t))}}),n.prototype[ci]=!0,n.prototype[hi]=!0,Kt(r,{get:function(e,t){return this.has(e)?e:t},includes:function(e){return this.has(e)},keySeq:function(){return this.valueSeq()}}),r.prototype.has=an.includes,r.prototype.contains=r.prototype.includes,Kt(C,i.prototype),Kt(D,n.prototype),Kt(k,r.prototype),Kt(te,i.prototype),Kt(ie,n.prototype),Kt(ne,r.prototype);var un={Iterable:t,Seq:I,Collection:ee,Map:he,OrderedMap:Je,List:Le,Stack:$t,Set:At,OrderedSet:jt,Record:kt,Range:Q,Repeat:Y,is:X,fromJS:W};return un})},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),l=i(2),u=n(l),c=function(e){function t(e){r(this,t);var i=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i.active_index=i.active_index.bind(i),i.active_class=i.active_class.bind(i),i.handleChange=i.handleChange.bind(i),i}return s(t,e),a(t,[{key:"active_index",value:function(){return this.props.getActiveItemIndex()}},{key:"active_class",value:function(e){return this.active_index()==e?"active":""}},{key:"handleChange",value:function(e,t){this.props.viewer.goToPage(e.target.value)}},{key:"render",value:function(){var e=this.props,t=e.items,i=(e.class_name,e.setActiveItem),n=(e.getActiveItem,e.tocs),r=(e.viewer,this.active_class);return u.default.createElement("div",{className:"row image-nav"},u.default.createElement("ul",{className:"nav nav-pills"},t.map(function(e,t){return u.default.createElement("li",{role:"presentation",className:r(t),onClick:i.bind(this,t),key:t},u.default.createElement("a",{href:""},e.label))}),u.default.createElement("li",null,u.default.createElement("div",{className:"toc-select"},u.default.createElement("label",{htmlFor:"toc"},"Table of Contents:"),u.default.createElement("select",{name:"toc",onChange:this.handleChange},n.map(function(e,t){var i=t+1;return u.default.createElement("option",{value:t,key:t},i,". ",e)}))))))}}]),t}(u.default.Component);t.default=c;var h={items:u.default.PropTypes.array.isRequired,setActiveItem:u.default.PropTypes.func.isRequired,tocs:u.default.PropTypes.array,viewer:u.default.PropTypes.object};c.propTypes=h},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),l=i(2),u=n(l),c=i(37),h=(n(c),i(1)),d=n(h),p=function(e){function t(e){r(this,t);var i=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i._config=i._config.bind(i),i}return s(t,e),a(t,[{key:"componentDidMount",value:function(){var e=this.props.page_handler;window.OPENSEADRAGONVIEWER=window.OpenSeadragon(this._config()),this.setState({viewer:OPENSEADRAGONVIEWER}),OPENSEADRAGONVIEWER.addHandler("page",function(t){e(t,OPENSEADRAGONVIEWER)}),OPENSEADRAGONVIEWER.goToPage(this.props.last_page)}},{key:"_config",value:function(){return Object.assign(this.props.default_config,this.props.config)}},{key:"render",value:function(){var e=this.props,t=(e.text,e.include_controls),i=t?u.default.createElement(d.default,null):"";return u.default.createElement("div",{className:"osd col-md-12"},u.default.createElement("div",{className:"openseadragon",id:"osd-viewer"},i))}}]),t}(u.default.Component);t.default=p,p.defaultProps={include_navigator:!0,include_controls:!0,default_config:{showNavigator:!0,id:"osd-viewer",visibilityRatio:1,constrainDuringPan:!1,defaultZoomLevel:1,minZoomLevel:1,maxZoomLevel:10,zoomInButton:"zoom-in",zoomOutButton:"zoom-out",homeButton:"reset",fullPageButton:"full-page",nextButton:"next",previousButton:"previous"}},p.propTypes={page_handler:u.default.PropTypes.func,config:u.default.PropTypes.object.isRequired}},function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;//! openseadragon 2.2.1
	//! Built on 2016-07-01
	//! Git commit: v2.2.1-0-babdefd
	//! http://openseadragon.github.io
	//! License: http://openseadragon.github.io/license/
	window.OpenSeadragon=window.OpenSeadragon||function(e){return new OpenSeadragon.Viewer(e)},__WEBPACK_AMD_DEFINE_RESULT__=function(){return window.OpenSeadragon}.call(exports,__webpack_require__,exports,module),!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)),function(e){e.version={versionStr:"2.2.1",major:parseInt("2",10),minor:parseInt("2",10),revision:parseInt("1",10)};var t={"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Object]":"object"},i=Object.prototype.toString,n=Object.prototype.hasOwnProperty;e.isFunction=function(t){return"function"===e.type(t)},e.isArray=Array.isArray||function(t){return"array"===e.type(t)},e.isWindow=function(e){return e&&"object"==typeof e&&"setInterval"in e},e.type=function(e){return null===e||void 0===e?String(e):t[i.call(e)]||"object"},e.isPlainObject=function(t){if(!t||"object"!==OpenSeadragon.type(t)||t.nodeType||e.isWindow(t))return!1;if(t.constructor&&!n.call(t,"constructor")&&!n.call(t.constructor.prototype,"isPrototypeOf"))return!1;var i;for(var r in t)i=r;return void 0===i||n.call(t,i)},e.isEmptyObject=function(e){for(var t in e)return!1;return!0},e.freezeObject=function(t){return Object.freeze?e.freezeObject=Object.freeze:e.freezeObject=function(e){return e},e.freezeObject(t)},e.supportsCanvas=function(){var t=document.createElement("canvas");return!(!e.isFunction(t.getContext)||!t.getContext("2d"))}(),e.isCanvasTainted=function(e){var t=!1;try{e.getContext("2d").getImageData(0,0,1,1)}catch(e){t=!0}return t},e.pixelDensityRatio=function(){if(e.supportsCanvas){var t=document.createElement("canvas").getContext("2d"),i=window.devicePixelRatio||1,n=t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1;return i/n}return 1}()}(OpenSeadragon),function($){function getOffsetParent(e,t){return t&&e!=document.body?document.body:e.offsetParent}$.extend=function(){var e,t,i,n,r,o,s=arguments[0]||{},a=arguments.length,l=!1,u=1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},u=2),"object"==typeof s||OpenSeadragon.isFunction(s)||(s={}),a===u&&(s=this,--u);u<a;u++)if(e=arguments[u],null!==e||void 0!==e)for(t in e)i=s[t],n=e[t],s!==n&&(l&&n&&(OpenSeadragon.isPlainObject(n)||(r=OpenSeadragon.isArray(n)))?(r?(r=!1,o=i&&OpenSeadragon.isArray(i)?i:[]):o=i&&OpenSeadragon.isPlainObject(i)?i:{},s[t]=OpenSeadragon.extend(l,o,n)):void 0!==n&&(s[t]=n));return s};var isIOSDevice=function(){if("object"!=typeof navigator)return!1;var e=navigator.userAgent;return"string"==typeof e&&(e.indexOf("iPhone")!==-1||e.indexOf("iPad")!==-1||e.indexOf("iPod")!==-1)};$.extend($,{DEFAULT_SETTINGS:{xmlPath:null,tileSources:null,tileHost:null,initialPage:0,crossOriginPolicy:!1,ajaxWithCredentials:!1,panHorizontal:!0,panVertical:!0,constrainDuringPan:!1,wrapHorizontal:!1,wrapVertical:!1,visibilityRatio:.5,minPixelRatio:.5,defaultZoomLevel:0,minZoomLevel:null,maxZoomLevel:null,homeFillsViewer:!1,clickTimeThreshold:300,clickDistThreshold:5,dblClickTimeThreshold:300,dblClickDistThreshold:20,springStiffness:6.5,animationTime:1.2,gestureSettingsMouse:{scrollToZoom:!0,clickToZoom:!0,dblClickToZoom:!1,pinchToZoom:!1,flickEnabled:!1,flickMinSpeed:120,flickMomentum:.25,pinchRotate:!1},gestureSettingsTouch:{scrollToZoom:!1,clickToZoom:!1,dblClickToZoom:!0,pinchToZoom:!0,flickEnabled:!0,flickMinSpeed:120,flickMomentum:.25,pinchRotate:!1},gestureSettingsPen:{scrollToZoom:!1,clickToZoom:!0,dblClickToZoom:!1,pinchToZoom:!1,flickEnabled:!1,flickMinSpeed:120,flickMomentum:.25,pinchRotate:!1},gestureSettingsUnknown:{scrollToZoom:!1,clickToZoom:!1,dblClickToZoom:!0,pinchToZoom:!0,flickEnabled:!0,flickMinSpeed:120,flickMomentum:.25,pinchRotate:!1},zoomPerClick:2,zoomPerScroll:1.2,zoomPerSecond:1,blendTime:0,alwaysBlend:!1,autoHideControls:!0,immediateRender:!1,minZoomImageRatio:.9,maxZoomPixelRatio:1.1,smoothTileEdgesMinZoom:1.1,iOSDevice:isIOSDevice(),pixelsPerWheelLine:40,autoResize:!0,preserveImageSizeOnResize:!1,minScrollDeltaTime:50,showSequenceControl:!0,sequenceControlAnchor:null,preserveViewport:!1,preserveOverlays:!1,navPrevNextWrap:!1,showNavigationControl:!0,navigationControlAnchor:null,showZoomControl:!0,showHomeControl:!0,showFullPageControl:!0,showRotationControl:!1,controlsFadeDelay:2e3,controlsFadeLength:1500,mouseNavEnabled:!0,showNavigator:!1,navigatorId:null,navigatorPosition:null,navigatorSizeRatio:.2,navigatorMaintainSizeRatio:!1,navigatorTop:null,navigatorLeft:null,navigatorHeight:null,navigatorWidth:null,navigatorAutoResize:!0,navigatorAutoFade:!0,navigatorRotate:!0,degrees:0,opacity:1,compositeOperation:null,placeholderFillStyle:null,showReferenceStrip:!1,referenceStripScroll:"horizontal",referenceStripElement:null,referenceStripHeight:null,referenceStripWidth:null,referenceStripPosition:"BOTTOM_LEFT",referenceStripSizeRatio:.2,collectionRows:3,collectionColumns:0,collectionLayout:"horizontal",collectionMode:!1,collectionTileSize:800,collectionTileMargin:80,imageLoaderLimit:0,maxImageCacheCount:200,timeout:3e4,useCanvas:!0,prefixUrl:"/images/",navImages:{zoomIn:{REST:"zoomin_rest.png",GROUP:"zoomin_grouphover.png",HOVER:"zoomin_hover.png",DOWN:"zoomin_pressed.png"},zoomOut:{REST:"zoomout_rest.png",GROUP:"zoomout_grouphover.png",HOVER:"zoomout_hover.png",DOWN:"zoomout_pressed.png"},home:{REST:"home_rest.png",GROUP:"home_grouphover.png",HOVER:"home_hover.png",DOWN:"home_pressed.png"},fullpage:{REST:"fullpage_rest.png",GROUP:"fullpage_grouphover.png",HOVER:"fullpage_hover.png",DOWN:"fullpage_pressed.png"},rotateleft:{REST:"rotateleft_rest.png",GROUP:"rotateleft_grouphover.png",HOVER:"rotateleft_hover.png",DOWN:"rotateleft_pressed.png"},rotateright:{REST:"rotateright_rest.png",GROUP:"rotateright_grouphover.png",HOVER:"rotateright_hover.png",DOWN:"rotateright_pressed.png"},previous:{REST:"previous_rest.png",GROUP:"previous_grouphover.png",HOVER:"previous_hover.png",DOWN:"previous_pressed.png"},next:{REST:"next_rest.png",GROUP:"next_grouphover.png",HOVER:"next_hover.png",DOWN:"next_pressed.png"}},debugMode:!1,debugGridColor:"#437AB2"},SIGNAL:"----seadragon----",delegate:function(e,t){return function(){var i=arguments;return void 0===i&&(i=[]),t.apply(e,i)}},BROWSERS:{UNKNOWN:0,IE:1,FIREFOX:2,SAFARI:3,CHROME:4,OPERA:5},getElement:function(e){return"string"==typeof e&&(e=document.getElementById(e)),e},getElementPosition:function(e){var t,i,n=new $.Point;for(e=$.getElement(e),t="fixed"==$.getElementStyle(e).position,i=getOffsetParent(e,t);i;)n.x+=e.offsetLeft,n.y+=e.offsetTop,t&&(n=n.plus($.getPageScroll())),e=i,t="fixed"==$.getElementStyle(e).position,i=getOffsetParent(e,t);return n},getElementOffset:function(e){e=$.getElement(e);var t,i,n=e&&e.ownerDocument,r={top:0,left:0};return n?(t=n.documentElement,"undefined"!=typeof e.getBoundingClientRect&&(r=e.getBoundingClientRect()),i=n==n.window?n:9===n.nodeType&&(n.defaultView||n.parentWindow),new $.Point(r.left+(i.pageXOffset||t.scrollLeft)-(t.clientLeft||0),r.top+(i.pageYOffset||t.scrollTop)-(t.clientTop||0))):new $.Point},getElementSize:function(e){return e=$.getElement(e),new $.Point(e.clientWidth,e.clientHeight)},getElementStyle:document.documentElement.currentStyle?function(e){return e=$.getElement(e),e.currentStyle}:function(e){return e=$.getElement(e),window.getComputedStyle(e,"")},getCssPropertyWithVendorPrefix:function(e){var t={};return $.getCssPropertyWithVendorPrefix=function(e){if(void 0!==t[e])return t[e];var i=document.createElement("div").style,n=null;if(void 0!==i[e])n=e;else for(var r=["Webkit","Moz","MS","O","webkit","moz","ms","o"],o=$.capitalizeFirstLetter(e),s=0;s<r.length;s++){var a=r[s]+o;if(void 0!==i[a]){n=a;break}}return t[e]=n,n},$.getCssPropertyWithVendorPrefix(e)},capitalizeFirstLetter:function(e){return e.charAt(0).toUpperCase()+e.slice(1)},pointInElement:function(e,t){e=$.getElement(e);var i=$.getElementOffset(e),n=$.getElementSize(e);return t.x>=i.x&&t.x<i.x+n.x&&t.y<i.y+n.y&&t.y>=i.y},getEvent:function(e){return e?$.getEvent=function(e){return e}:$.getEvent=function(){return window.event},$.getEvent(e)},getMousePosition:function(e){if("number"==typeof e.pageX)$.getMousePosition=function(e){var t=new $.Point;return e=$.getEvent(e),t.x=e.pageX,t.y=e.pageY,t};else{if("number"!=typeof e.clientX)throw new Error("Unknown event mouse position, no known technique.");$.getMousePosition=function(e){var t=new $.Point;return e=$.getEvent(e),t.x=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,t.y=e.clientY+document.body.scrollTop+document.documentElement.scrollTop,t}}return $.getMousePosition(e)},getPageScroll:function(){var e=document.documentElement||{},t=document.body||{};if("number"==typeof window.pageXOffset)$.getPageScroll=function(){return new $.Point(window.pageXOffset,window.pageYOffset)};else if(t.scrollLeft||t.scrollTop)$.getPageScroll=function(){return new $.Point(document.body.scrollLeft,document.body.scrollTop)};else{if(!e.scrollLeft&&!e.scrollTop)return new $.Point(0,0);$.getPageScroll=function(){return new $.Point(document.documentElement.scrollLeft,document.documentElement.scrollTop)}}return $.getPageScroll()},setPageScroll:function(e){if("undefined"!=typeof window.scrollTo)$.setPageScroll=function(e){window.scrollTo(e.x,e.y)};else{var t=$.getPageScroll();if(t.x===e.x&&t.y===e.y)return;document.body.scrollLeft=e.x,document.body.scrollTop=e.y;var i=$.getPageScroll();if(i.x!==t.x&&i.y!==t.y)return void($.setPageScroll=function(e){document.body.scrollLeft=e.x,document.body.scrollTop=e.y});if(document.documentElement.scrollLeft=e.x,document.documentElement.scrollTop=e.y,i=$.getPageScroll(),i.x!==t.x&&i.y!==t.y)return void($.setPageScroll=function(e){document.documentElement.scrollLeft=e.x,document.documentElement.scrollTop=e.y});$.setPageScroll=function(e){}}return $.setPageScroll(e)},getWindowSize:function(){var e=document.documentElement||{},t=document.body||{};if("number"==typeof window.innerWidth)$.getWindowSize=function(){return new $.Point(window.innerWidth,window.innerHeight)};else if(e.clientWidth||e.clientHeight)$.getWindowSize=function(){return new $.Point(document.documentElement.clientWidth,document.documentElement.clientHeight)};else{if(!t.clientWidth&&!t.clientHeight)throw new Error("Unknown window size, no known technique.");$.getWindowSize=function(){return new $.Point(document.body.clientWidth,document.body.clientHeight)}}return $.getWindowSize()},makeCenteredNode:function(e){e=$.getElement(e);var t=[$.makeNeutralElement("div"),$.makeNeutralElement("div"),$.makeNeutralElement("div")];return $.extend(t[0].style,{display:"table",height:"100%",width:"100%"}),$.extend(t[1].style,{display:"table-row"}),$.extend(t[2].style,{display:"table-cell",verticalAlign:"middle",textAlign:"center"}),t[0].appendChild(t[1]),t[1].appendChild(t[2]),t[2].appendChild(e),t[0]},makeNeutralElement:function(e){var t=document.createElement(e),i=t.style;return i.background="transparent none",i.border="none",i.margin="0px",i.padding="0px",i.position="static",t},now:function(){return Date.now?$.now=Date.now:$.now=function(){return(new Date).getTime()},$.now()},makeTransparentImage:function(e){return $.makeTransparentImage=function(e){var t=$.makeNeutralElement("img");return t.src=e,t},$.Browser.vendor==$.BROWSERS.IE&&$.Browser.version<7&&($.makeTransparentImage=function(e){var t=$.makeNeutralElement("img"),i=null;return i=$.makeNeutralElement("span"),i.style.display="inline-block",t.onload=function(){i.style.width=i.style.width||t.width+"px",i.style.height=i.style.height||t.height+"px",t.onload=null,t=null},t.src=e,i.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+e+"', sizingMethod='scale')",i}),$.makeTransparentImage(e)},setElementOpacity:function(e,t,i){var n,r;e=$.getElement(e),i&&!$.Browser.alpha&&(t=Math.round(t)),$.Browser.opacity?e.style.opacity=t<1?t:"":t<1?(n=Math.round(100*t),r="alpha(opacity="+n+")",e.style.filter=r):e.style.filter=""},setElementTouchActionNone:function(e){e=$.getElement(e),"undefined"!=typeof e.style.touchAction?e.style.touchAction="none":"undefined"!=typeof e.style.msTouchAction&&(e.style.msTouchAction="none")},addClass:function(e,t){e=$.getElement(e),e.className?(" "+e.className+" ").indexOf(" "+t+" ")===-1&&(e.className+=" "+t):e.className=t},indexOf:function(e,t,i){return Array.prototype.indexOf?this.indexOf=function(e,t,i){return e.indexOf(t,i)}:this.indexOf=function(e,t,i){var n,r,o=i?i:0;if(!e)throw new TypeError;if(r=e.length,0===r||o>=r)return-1;for(o<0&&(o=r-Math.abs(o)),n=o;n<r;n++)if(e[n]===t)return n;return-1},this.indexOf(e,t,i)},removeClass:function(e,t){var i,n,r=[];for(e=$.getElement(e),i=e.className.split(/\s+/),n=0;n<i.length;n++)i[n]&&i[n]!==t&&r.push(i[n]);e.className=r.join(" ")},addEvent:function(){if(window.addEventListener)return function(e,t,i,n){e=$.getElement(e),e.addEventListener(t,i,n)};if(window.attachEvent)return function(e,t,i,n){e=$.getElement(e),e.attachEvent("on"+t,i)};throw new Error("No known event model.")}(),removeEvent:function(){if(window.removeEventListener)return function(e,t,i,n){e=$.getElement(e),e.removeEventListener(t,i,n)};if(window.detachEvent)return function(e,t,i,n){e=$.getElement(e),e.detachEvent("on"+t,i)};throw new Error("No known event model.")}(),cancelEvent:function(e){e=$.getEvent(e),e.preventDefault?$.cancelEvent=function(e){e.preventDefault()}:$.cancelEvent=function(e){e=$.getEvent(e),e.cancel=!0,e.returnValue=!1},$.cancelEvent(e)},stopEvent:function(e){e=$.getEvent(e),e.stopPropagation?$.stopEvent=function(e){e.stopPropagation()}:$.stopEvent=function(e){e=$.getEvent(e),e.cancelBubble=!0},$.stopEvent(e)},createCallback:function(e,t){var i,n=[];for(i=2;i<arguments.length;i++)n.push(arguments[i]);return function(){var i,r=n.concat([]);for(i=0;i<arguments.length;i++)r.push(arguments[i]);return t.apply(e,r)}},getUrlParameter:function(e){var t=URLPARAMS[e];return t?t:null},getUrlProtocol:function(e){var t=e.match(/^([a-z]+:)\/\//i);return null===t?window.location.protocol:t[1].toLowerCase()},createAjaxRequest:function(e){var t;try{t=!!new ActiveXObject("Microsoft.XMLHTTP")}catch(e){t=!1}if(t)window.XMLHttpRequest?$.createAjaxRequest=function(e){return e?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest}:$.createAjaxRequest=function(){return new ActiveXObject("Microsoft.XMLHTTP")};else{if(!window.XMLHttpRequest)throw new Error("Browser doesn't support XMLHttpRequest.");$.createAjaxRequest=function(){return new XMLHttpRequest}}return $.createAjaxRequest(e)},makeAjaxRequest:function(e,t,i){var n;$.isPlainObject(e)&&(t=e.success,i=e.error,n=e.withCredentials,e=e.url);var r=$.getUrlProtocol(e),o=$.createAjaxRequest("file:"===r);if(!$.isFunction(t))throw new Error("makeAjaxRequest requires a success callback");o.onreadystatechange=function(){4==o.readyState&&(o.onreadystatechange=function(){},200===o.status||0===o.status&&"http:"!==r&&"https:"!==r?t(o):($.console.log("AJAX request returned %d: %s",o.status,e),$.isFunction(i)&&i(o)))},n&&(o.withCredentials=!0);try{o.open("GET",e,!0),o.send(null)}catch(n){var s=n.message,a=$.Browser.vendor==$.BROWSERS.IE&&$.Browser.version<10;if(a&&"undefined"!=typeof n.number&&n.number==-2147024891&&(s+="\nSee http://msdn.microsoft.com/en-us/library/ms537505(v=vs.85).aspx#xdomain"),$.console.log("%s while making AJAX request: %s",n.name,s),o.onreadystatechange=function(){},window.XDomainRequest){var l=new XDomainRequest;if(l){l.onload=function(e){$.isFunction(t)&&t({responseText:l.responseText,status:200,statusText:"OK"})},l.onerror=function(e){$.isFunction(i)&&i({responseText:l.responseText,status:444,statusText:"An error happened. Due to an XDomainRequest deficiency we can not extract any information about this error. Upgrade your browser."})};try{l.open("GET",e),l.send()}catch(e){$.isFunction(i)&&i(o,n)}}}else $.isFunction(i)&&i(o,n)}},jsonp:function(e){var t,i=e.url,n=document.head||document.getElementsByTagName("head")[0]||document.documentElement,r=e.callbackName||"openseadragon"+$.now(),o=window[r],s="$1"+r+"$2",a=e.param||"callback",l=e.callback;i=i.replace(/(\=)\?(&|$)|\?\?/i,s),i+=(/\?/.test(i)?"&":"?")+a+"="+r,window[r]=function(e){if(o)window[r]=o;else try{delete window[r]}catch(e){}l&&$.isFunction(l)&&l(e)},t=document.createElement("script"),void 0===e.async&&!1===e.async||(t.async="async"),e.scriptCharset&&(t.charset=e.scriptCharset),t.src=i,t.onload=t.onreadystatechange=function(e,i){(i||!t.readyState||/loaded|complete/.test(t.readyState))&&(t.onload=t.onreadystatechange=null,n&&t.parentNode&&n.removeChild(t),t=void 0)},n.insertBefore(t,n.firstChild)},createFromDZI:function(){throw"OpenSeadragon.createFromDZI is deprecated, use Viewer.open."},parseXml:function(e){if(window.DOMParser)$.parseXml=function(e){var t,i=null;return t=new DOMParser,i=t.parseFromString(e,"text/xml")};else{if(!window.ActiveXObject)throw new Error("Browser doesn't support XML DOM.");$.parseXml=function(e){var t=null;return t=new ActiveXObject("Microsoft.XMLDOM"),t.async=!1,t.loadXML(e),t}}return $.parseXml(e)},parseJSON:function(string){return window.JSON&&window.JSON.parse?$.parseJSON=window.JSON.parse:$.parseJSON=function(string){return eval("("+string+")")},$.parseJSON(string)},imageFormatSupported:function(e){return e=e?e:"",!!FILEFORMATS[e.toLowerCase()]}}),$.Browser={vendor:$.BROWSERS.UNKNOWN,version:0,alpha:!0};var FILEFORMATS={bmp:!1,jpeg:!0,jpg:!0,png:!0,tif:!1,wdp:!1},URLPARAMS={};!function(){var e,t=(navigator.appName,navigator.appVersion),i=navigator.userAgent;switch(navigator.appName){case"Microsoft Internet Explorer":window.attachEvent&&window.ActiveXObject&&($.Browser.vendor=$.BROWSERS.IE,$.Browser.version=parseFloat(i.substring(i.indexOf("MSIE")+5,i.indexOf(";",i.indexOf("MSIE")))));break;case"Netscape":window.addEventListener&&(i.indexOf("Firefox")>=0?($.Browser.vendor=$.BROWSERS.FIREFOX,$.Browser.version=parseFloat(i.substring(i.indexOf("Firefox")+8))):i.indexOf("Safari")>=0?($.Browser.vendor=i.indexOf("Chrome")>=0?$.BROWSERS.CHROME:$.BROWSERS.SAFARI,$.Browser.version=parseFloat(i.substring(i.substring(0,i.indexOf("Safari")).lastIndexOf("/")+1,i.indexOf("Safari")))):(e=new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})"),null!==e.exec(i)&&($.Browser.vendor=$.BROWSERS.IE,$.Browser.version=parseFloat(RegExp.$1))));break;case"Opera":$.Browser.vendor=$.BROWSERS.OPERA,$.Browser.version=parseFloat(t)}var n,r,o,s=window.location.search.substring(1),a=s.split("&");for(o=0;o<a.length;o++)n=a[o],r=n.indexOf("="),r>0&&(URLPARAMS[n.substring(0,r)]=decodeURIComponent(n.substring(r+1)));$.Browser.alpha=!($.Browser.vendor==$.BROWSERS.IE&&$.Browser.version<9||$.Browser.vendor==$.BROWSERS.CHROME&&$.Browser.version<2),$.Browser.opacity=!($.Browser.vendor==$.BROWSERS.IE&&$.Browser.version<9)}();var nullfunction=function(e){};$.console=window.console||{log:nullfunction,debug:nullfunction,info:nullfunction,warn:nullfunction,error:nullfunction,assert:nullfunction},function(e){var t=e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame||e.msRequestAnimationFrame,i=e.cancelAnimationFrame||e.mozCancelAnimationFrame||e.webkitCancelAnimationFrame||e.msCancelAnimationFrame;if(t&&i)$.requestAnimationFrame=function(){return t.apply(e,arguments)},$.cancelAnimationFrame=function(){return i.apply(e,arguments)};else{var n,r=[],o=[],s=0;$.requestAnimationFrame=function(e){return r.push([++s,e]),n||(n=setInterval(function(){if(r.length){var e=$.now(),t=o;for(o=r,r=t;o.length;)o.shift()[1](e)}else clearInterval(n),n=void 0},20)),s},$.cancelAnimationFrame=function(e){var t,i;for(t=0,i=r.length;t<i;t+=1)if(r[t][0]===e)return void r.splice(t,1);for(t=0,i=o.length;t<i;t+=1)if(o[t][0]===e)return void o.splice(t,1)}}}(window)}(OpenSeadragon),function(e){var t={supportsFullScreen:!1,isFullScreen:function(){return!1},getFullScreenElement:function(){return null},requestFullScreen:function(){},exitFullScreen:function(){},cancelFullScreen:function(){},fullScreenEventName:"",fullScreenErrorEventName:""};document.exitFullscreen?(t.supportsFullScreen=!0,t.getFullScreenElement=function(){return document.fullscreenElement},t.requestFullScreen=function(e){return e.requestFullscreen()},t.exitFullScreen=function(){document.exitFullscreen()},t.fullScreenEventName="fullscreenchange",t.fullScreenErrorEventName="fullscreenerror"):document.msExitFullscreen?(t.supportsFullScreen=!0,t.getFullScreenElement=function(){return document.msFullscreenElement},t.requestFullScreen=function(e){return e.msRequestFullscreen()},t.exitFullScreen=function(){document.msExitFullscreen()},t.fullScreenEventName="MSFullscreenChange",t.fullScreenErrorEventName="MSFullscreenError"):document.webkitExitFullscreen?(t.supportsFullScreen=!0,t.getFullScreenElement=function(){return document.webkitFullscreenElement},t.requestFullScreen=function(e){return e.webkitRequestFullscreen()},t.exitFullScreen=function(){document.webkitExitFullscreen()},t.fullScreenEventName="webkitfullscreenchange",t.fullScreenErrorEventName="webkitfullscreenerror"):document.webkitCancelFullScreen?(t.supportsFullScreen=!0,t.getFullScreenElement=function(){return document.webkitCurrentFullScreenElement},t.requestFullScreen=function(e){return e.webkitRequestFullScreen()},t.exitFullScreen=function(){document.webkitCancelFullScreen()},t.fullScreenEventName="webkitfullscreenchange",t.fullScreenErrorEventName="webkitfullscreenerror"):document.mozCancelFullScreen&&(t.supportsFullScreen=!0,t.getFullScreenElement=function(){return document.mozFullScreenElement},t.requestFullScreen=function(e){return e.mozRequestFullScreen()},t.exitFullScreen=function(){document.mozCancelFullScreen()},t.fullScreenEventName="mozfullscreenchange",t.fullScreenErrorEventName="mozfullscreenerror"),t.isFullScreen=function(){return null!==t.getFullScreenElement()},t.cancelFullScreen=function(){e.console.error("cancelFullScreen is deprecated. Use exitFullScreen instead."),t.exitFullScreen()},e.extend(e,t)}(OpenSeadragon),function(e){e.EventSource=function(){this.events={}},e.EventSource.prototype={addOnceHandler:function(e,t,i,n){var r=this;n=n||1;var o=0,s=function(i){o++,o===n&&r.removeHandler(e,s),t(i)};this.addHandler(e,s,i)},addHandler:function(t,i,n){var r=this.events[t];r||(this.events[t]=r=[]),i&&e.isFunction(i)&&(r[r.length]={handler:i,userData:n||null})},removeHandler:function(t,i){var n,r=this.events[t],o=[];if(r&&e.isArray(r)){for(n=0;n<r.length;n++)r[n].handler!==i&&o.push(r[n]);this.events[t]=o}},removeAllHandlers:function(e){if(e)this.events[e]=[];else for(var t in this.events)this.events[t]=[]},getHandler:function(e){var t=this.events[e];return t&&t.length?(t=1===t.length?[t[0]]:Array.apply(null,t),function(e,i){var n,r=t.length;for(n=0;n<r;n++)t[n]&&(i.eventSource=e,i.userData=t[n].userData,t[n].handler(i))}):null},raiseEvent:function(e,t){var i=this.getHandler(e);i&&(t||(t={}),i(this,t))}}}(OpenSeadragon),function(e){function t(t){var i,n=me[t.hash],r=n.activePointersLists.length;for(i=0;i<r;i++)n.activePointersLists[i].captureCount>0&&(e.removeEvent(e.MouseTracker.captureElement,"mousemove",n.mousemovecaptured,!0),e.removeEvent(e.MouseTracker.captureElement,"mouseup",n.mouseupcaptured,!0),e.removeEvent(e.MouseTracker.captureElement,e.MouseTracker.unprefixedPointerEvents?"pointermove":"MSPointerMove",n.pointermovecaptured,!0),e.removeEvent(e.MouseTracker.captureElement,e.MouseTracker.unprefixedPointerEvents?"pointerup":"MSPointerUp",n.pointerupcaptured,!0),e.removeEvent(e.MouseTracker.captureElement,"touchmove",n.touchmovecaptured,!0),e.removeEvent(e.MouseTracker.captureElement,"touchend",n.touchendcaptured,!0),n.activePointersLists[i].captureCount=0);for(i=0;i<r;i++)n.activePointersLists.pop()}function i(i){var n,r,o=me[i.hash];if(!o.tracking){for(r=0;r<e.MouseTracker.subscribeEvents.length;r++)n=e.MouseTracker.subscribeEvents[r],e.addEvent(i.element,n,o[n],!1);t(i),o.tracking=!0}}function n(i){var n,r,o=me[i.hash];if(o.tracking){for(r=0;r<e.MouseTracker.subscribeEvents.length;r++)n=e.MouseTracker.subscribeEvents[r],e.removeEvent(i.element,n,o[n],!1);t(i),o.tracking=!1}}function r(t,i){var n=me[t.hash];if("pointerevent"===i)return{upName:e.MouseTracker.unprefixedPointerEvents?"pointerup":"MSPointerUp",upHandler:n.pointerupcaptured,moveName:e.MouseTracker.unprefixedPointerEvents?"pointermove":"MSPointerMove",moveHandler:n.pointermovecaptured};if("mouse"===i)return{upName:"mouseup",upHandler:n.mouseupcaptured,moveName:"mousemove",moveHandler:n.mousemovecaptured};if("touch"===i)return{upName:"touchend",upHandler:n.touchendcaptured,moveName:"touchmove",moveHandler:n.touchmovecaptured};throw new Error("MouseTracker.getCaptureEventParams: Unknown pointer type.")}function o(t,i,n){var o,s=t.getActivePointersListByType(i);s.captureCount+=n||1,1===s.captureCount&&(e.Browser.vendor===e.BROWSERS.IE&&e.Browser.version<9?t.element.setCapture(!0):(o=r(t,e.MouseTracker.havePointerEvents?"pointerevent":i),ge&&pe(window.top)&&e.addEvent(window.top,o.upName,o.upHandler,!0),e.addEvent(e.MouseTracker.captureElement,o.upName,o.upHandler,!0),e.addEvent(e.MouseTracker.captureElement,o.moveName,o.moveHandler,!0)))}function s(t,i,n){var o,s=t.getActivePointersListByType(i);s.captureCount-=n||1,0===s.captureCount&&(e.Browser.vendor===e.BROWSERS.IE&&e.Browser.version<9?t.element.releaseCapture():(o=r(t,e.MouseTracker.havePointerEvents?"pointerevent":i),ge&&pe(window.top)&&e.removeEvent(window.top,o.upName,o.upHandler,!0),e.removeEvent(e.MouseTracker.captureElement,o.moveName,o.moveHandler,!0),e.removeEvent(e.MouseTracker.captureElement,o.upName,o.upHandler,!0)))}function a(t){var i;if(e.MouseTracker.unprefixedPointerEvents)i=t.pointerType;else switch(t.pointerType){case 2:i="touch";break;case 3:i="pen";break;case 4:i="mouse";break;default:i=""}return i}function l(t){return e.getMousePosition(t)}function u(e,t){return c(l(e),t)}function c(t,i){var n=e.getElementOffset(i);return t.minus(n)}function h(t,i){return new e.Point((t.x+i.x)/2,(t.y+i.y)/2)}function d(t,i){t.clickHandler&&e.cancelEvent(i)}function p(t,i){t.dblClickHandler&&e.cancelEvent(i)}function f(t,i){var n;t.keyDownHandler&&(i=e.getEvent(i),n=t.keyDownHandler({eventSource:t,keyCode:i.keyCode?i.keyCode:i.charCode,ctrl:i.ctrlKey,shift:i.shiftKey,alt:i.altKey,meta:i.metaKey,originalEvent:i,preventDefaultAction:!1,userData:t.userData}),n||e.cancelEvent(i))}function m(t,i){var n;t.keyUpHandler&&(i=e.getEvent(i),n=t.keyUpHandler({eventSource:t,keyCode:i.keyCode?i.keyCode:i.charCode,ctrl:i.ctrlKey,shift:i.shiftKey,alt:i.altKey,meta:i.metaKey,originalEvent:i,preventDefaultAction:!1,userData:t.userData}),n||e.cancelEvent(i))}function g(t,i){var n;t.keyHandler&&(i=e.getEvent(i),n=t.keyHandler({eventSource:t,keyCode:i.keyCode?i.keyCode:i.charCode,ctrl:i.ctrlKey,shift:i.shiftKey,alt:i.altKey,meta:i.metaKey,originalEvent:i,preventDefaultAction:!1,userData:t.userData}),n||e.cancelEvent(i))}function v(t,i){var n;t.focusHandler&&(i=e.getEvent(i),n=t.focusHandler({eventSource:t,originalEvent:i,preventDefaultAction:!1,userData:t.userData}),n===!1&&e.cancelEvent(i))}function y(t,i){var n;t.blurHandler&&(i=e.getEvent(i),n=t.blurHandler({eventSource:t,originalEvent:i,preventDefaultAction:!1,userData:t.userData}),n===!1&&e.cancelEvent(i))}function w(e,t){S(e,t,t)}function _(t,i){i=e.getEvent(i);var n={target:i.target||i.srcElement,type:"wheel",shiftKey:i.shiftKey||!1,clientX:i.clientX,clientY:i.clientY,pageX:i.pageX?i.pageX:i.clientX,pageY:i.pageY?i.pageY:i.clientY,deltaMode:"MozMousePixelScroll"==i.type?0:1,deltaX:0,deltaZ:0};"mousewheel"==e.MouseTracker.wheelEventName?n.deltaY=-1/e.DEFAULT_SETTINGS.pixelsPerWheelLine*i.wheelDelta:n.deltaY=i.detail,S(t,n,i)}function S(t,i,n){var r,o=0;o=i.deltaY<0?1:-1,t.scrollHandler&&(r=t.scrollHandler({eventSource:t,pointerType:"mouse",position:u(i,t.element),scroll:o,shift:i.shiftKey,isTouchEvent:!1,originalEvent:n,preventDefaultAction:!1,userData:t.userData}),r===!1&&e.cancelEvent(n))}function E(e,t){if(e===t)return!1;for(;t&&t!==e;)t=t.parentNode;return t===e}function T(t,i){i=e.getEvent(i),b(t,i)}function x(t,i){i=e.getEvent(i),i.currentTarget===i.relatedTarget||E(i.currentTarget,i.relatedTarget)||b(t,i)}function b(t,i){var n={id:e.MouseTracker.mousePointerId,type:"mouse",isPrimary:!0,currentPos:l(i),currentTime:e.now()};se(t,i,[n])}function P(t,i){i=e.getEvent(i),O(t,i)}function R(t,i){i=e.getEvent(i),i.currentTarget===i.relatedTarget||E(i.currentTarget,i.relatedTarget)||O(t,i)}function O(t,i){var n={id:e.MouseTracker.mousePointerId,type:"mouse",isPrimary:!0,currentPos:l(i),currentTime:e.now()};ae(t,i,[n])}function I(t){return e.Browser.vendor===e.BROWSERS.IE&&e.Browser.version<9?1===t?0:2===t?2:4===t?1:-1:t}function C(t,i){var n;i=e.getEvent(i),n={id:e.MouseTracker.mousePointerId,type:"mouse",isPrimary:!0,currentPos:l(i),currentTime:e.now()},le(t,i,[n],I(i.button))&&(e.stopEvent(i),o(t,"mouse")),(t.clickHandler||t.dblClickHandler||t.pressHandler||t.dragHandler||t.dragEndHandler)&&e.cancelEvent(i)}function D(e,t){N(e,t)}function k(t,i){N(t,i),e.stopEvent(i)}function N(t,i){var n;i=e.getEvent(i),n={id:e.MouseTracker.mousePointerId,type:"mouse",isPrimary:!0,currentPos:l(i),currentTime:e.now()},ue(t,i,[n],I(i.button))&&s(t,"mouse")}function z(e,t){B(e,t)}function M(t,i){B(t,i),e.stopEvent(i)}function B(t,i){var n;i=e.getEvent(i),n={id:e.MouseTracker.mousePointerId,type:"mouse",isPrimary:!0,currentPos:l(i),currentTime:e.now()},ce(t,i,[n])}function A(e,t,i){var n,r=i.getLength(),o=[];for(n=0;n<r;n++)o.push(i.getByIndex(n));o.length>0&&(ue(e,t,o,0),i.captureCount=1,s(e,"touch"),ae(e,t,o))}function F(t,i){var n,r,s,a,u=i.changedTouches.length,c=[],h=t.getActivePointersListByType("touch");for(n=e.now(),h.getLength()>i.touches.length-u&&(e.console.warn("Tracked touch contact count doesn't match event.touches.length. Removing all tracked touch pointers."),A(t,i,h)),r=0;r<u;r++)c.push({id:i.changedTouches[r].identifier,type:"touch",currentPos:l(i.changedTouches[r]),currentTime:n});for(se(t,i,c),r=0;r<fe.length;r++)if(fe[r]!==t&&fe[r].isTracking()&&E(fe[r].element,t.element)){for(a=[],s=0;s<u;s++)a.push({id:i.changedTouches[s].identifier,type:"touch",currentPos:l(i.changedTouches[s]),currentTime:n});se(fe[r],i,a)}le(t,i,c,0)&&(e.stopEvent(i),o(t,"touch",u)),e.cancelEvent(i)}function L(e,t){V(e,t)}function H(t,i){V(t,i),e.stopEvent(i)}function V(t,i){var n,r,o,a,u=i.changedTouches.length,c=[];for(n=e.now(),r=0;r<u;r++)c.push({id:i.changedTouches[r].identifier,type:"touch",currentPos:l(i.changedTouches[r]),currentTime:n});for(ue(t,i,c,0)&&s(t,"touch",u),ae(t,i,c),r=0;r<fe.length;r++)if(fe[r]!==t&&fe[r].isTracking()&&E(fe[r].element,t.element)){for(a=[],o=0;o<u;o++)a.push({id:i.changedTouches[o].identifier,type:"touch",currentPos:l(i.changedTouches[o]),currentTime:n});ae(fe[r],i,a)}e.cancelEvent(i)}function j(e,t){q(e,t)}function U(t,i){q(t,i),e.stopEvent(i)}function q(t,i){var n,r=i.changedTouches.length,o=[];for(n=0;n<r;n++)o.push({id:i.changedTouches[n].identifier,type:"touch",currentPos:l(i.changedTouches[n]),currentTime:e.now()});ce(t,i,o),e.cancelEvent(i)}function W(e,t){var i=(t.changedTouches.length,e.getActivePointersListByType("touch"));A(e,t,i)}function $(e,t){return t.stopPropagation(),t.preventDefault(),!1}function G(e,t){return t.stopPropagation(),t.preventDefault(),!1}function Z(t,i){var n;i.currentTarget===i.relatedTarget||E(i.currentTarget,i.relatedTarget)||(n={id:i.pointerId,type:a(i),isPrimary:i.isPrimary,currentPos:l(i),currentTime:e.now()},se(t,i,[n]))}function X(t,i){var n;i.currentTarget===i.relatedTarget||E(i.currentTarget,i.relatedTarget)||(n={id:i.pointerId,type:a(i),isPrimary:i.isPrimary,currentPos:l(i),currentTime:e.now()},ae(t,i,[n]))}function K(t,i){var n;n={id:i.pointerId,type:a(i),isPrimary:i.isPrimary,currentPos:l(i),currentTime:e.now()},le(t,i,[n],i.button)&&(e.stopEvent(i),o(t,n.type)),(t.clickHandler||t.dblClickHandler||t.pressHandler||t.dragHandler||t.dragEndHandler||t.pinchHandler)&&e.cancelEvent(i)}function Y(e,t){
	Q(e,t)}function J(t,i){var n=t.getActivePointersListByType(a(i));n.getById(i.pointerId)&&Q(t,i),e.stopEvent(i)}function Q(t,i){var n;n={id:i.pointerId,type:a(i),isPrimary:i.isPrimary,currentPos:l(i),currentTime:e.now()},ue(t,i,[n],i.button)&&s(t,n.type)}function ee(e,t){ie(e,t)}function te(t,i){var n=t.getActivePointersListByType(a(i));n.getById(i.pointerId)&&ie(t,i),e.stopEvent(i)}function ie(t,i){var n;n={id:i.pointerId,type:a(i),isPrimary:i.isPrimary,currentPos:l(i),currentTime:e.now()},ce(t,i,[n])}function ne(e,t){var i;i={id:t.pointerId,type:a(t)},he(e,t,[i])}function re(e,t){return t.hasOwnProperty("isPrimary")||(0===e.getLength()?t.isPrimary=!0:t.isPrimary=!1),t.speed=0,t.direction=0,t.contactPos=t.currentPos,t.contactTime=t.currentTime,t.lastPos=t.currentPos,t.lastTime=t.currentTime,e.add(t)}function oe(e,t){var i,n;return e.getById(t.id)?(i=e.removeById(t.id),t.hasOwnProperty("isPrimary")||(n=e.getPrimary(),n||(n=e.getByIndex(0),n&&(n.isPrimary=!0)))):i=e.getLength(),i}function se(t,i,n){var r,o,s,a,l=t.getActivePointersListByType(n[0].type),u=n.length;for(r=0;r<u;r++)o=n[r],s=l.getById(o.id),s?(s.insideElement=!0,s.lastPos=s.currentPos,s.lastTime=s.currentTime,s.currentPos=o.currentPos,s.currentTime=o.currentTime,o=s):(o.captured=!1,o.insideElementPressed=!1,o.insideElement=!0,re(l,o)),t.enterHandler&&(a=t.enterHandler({eventSource:t,pointerType:o.type,position:c(o.currentPos,t.element),buttons:l.buttons,pointers:t.getActivePointerCount(),insideElementPressed:o.insideElementPressed,buttonDownAny:0!==l.buttons,isTouchEvent:"touch"===o.type,originalEvent:i,preventDefaultAction:!1,userData:t.userData}),a===!1&&e.cancelEvent(i))}function ae(t,i,n){var r,o,s,a,l=(me[t.hash],t.getActivePointersListByType(n[0].type)),u=n.length;for(r=0;r<u;r++)o=n[r],s=l.getById(o.id),s&&(s.captured?(s.insideElement=!1,s.lastPos=s.currentPos,s.lastTime=s.currentTime,s.currentPos=o.currentPos,s.currentTime=o.currentTime):oe(l,s),o=s),t.exitHandler&&(a=t.exitHandler({eventSource:t,pointerType:o.type,position:c(o.currentPos,t.element),buttons:l.buttons,pointers:t.getActivePointerCount(),insideElementPressed:!!s&&s.insideElementPressed,buttonDownAny:0!==l.buttons,isTouchEvent:"touch"===o.type,originalEvent:i,preventDefaultAction:!1,userData:t.userData}),a===!1&&e.cancelEvent(i))}function le(t,i,n,r){var o,s,a,l,u=me[t.hash],d=t.getActivePointersListByType(n[0].type),p=n.length;if("undefined"!=typeof i.buttons?d.buttons=i.buttons:e.Browser.vendor===e.BROWSERS.IE&&e.Browser.version<9?0===r?d.buttons+=1:1===r?d.buttons+=4:2===r?d.buttons+=2:3===r?d.buttons+=8:4===r?d.buttons+=16:5===r&&(d.buttons+=32):0===r?d.buttons|=1:1===r?d.buttons|=4:2===r?d.buttons|=2:3===r?d.buttons|=8:4===r?d.buttons|=16:5===r&&(d.buttons|=32),0!==r)return t.nonPrimaryPressHandler&&(o=t.nonPrimaryPressHandler({eventSource:t,pointerType:n[0].type,position:c(n[0].currentPos,t.element),button:r,buttons:d.buttons,isTouchEvent:"touch"===n[0].type,originalEvent:i,preventDefaultAction:!1,userData:t.userData}),o===!1&&e.cancelEvent(i)),!1;for(s=0;s<p;s++)a=n[s],l=d.getById(a.id),l?(l.captured=!0,l.insideElementPressed=!0,l.insideElement=!0,l.contactPos=a.currentPos,l.contactTime=a.currentTime,l.lastPos=l.currentPos,l.lastTime=l.currentTime,l.currentPos=a.currentPos,l.currentTime=a.currentTime,a=l):(a.captured=!0,a.insideElementPressed=!0,a.insideElement=!0,re(d,a)),d.contacts++,(t.dragHandler||t.dragEndHandler||t.pinchHandler)&&e.MouseTracker.gesturePointVelocityTracker.addPoint(t,a),1===d.contacts?t.pressHandler&&(o=t.pressHandler({eventSource:t,pointerType:a.type,position:c(a.contactPos,t.element),buttons:d.buttons,isTouchEvent:"touch"===a.type,originalEvent:i,preventDefaultAction:!1,userData:t.userData}),o===!1&&e.cancelEvent(i)):2===d.contacts&&t.pinchHandler&&"touch"===a.type&&(u.pinchGPoints=d.asArray(),u.lastPinchDist=u.currentPinchDist=u.pinchGPoints[0].currentPos.distanceTo(u.pinchGPoints[1].currentPos),u.lastPinchCenter=u.currentPinchCenter=h(u.pinchGPoints[0].currentPos,u.pinchGPoints[1].currentPos));return!0}function ue(t,i,n,r){var o,s,a,l,u,d,p,f=me[t.hash],m=t.getActivePointersListByType(n[0].type),g=n.length,v=!1,y=!1;if("undefined"!=typeof i.buttons?m.buttons=i.buttons:e.Browser.vendor===e.BROWSERS.IE&&e.Browser.version<9?0===r?m.buttons-=1:1===r?m.buttons-=4:2===r?m.buttons-=2:3===r?m.buttons-=8:4===r?m.buttons-=16:5===r&&(m.buttons-=32):0===r?m.buttons^=-2:1===r?m.buttons^=-5:2===r?m.buttons^=-3:3===r?m.buttons^=-9:4===r?m.buttons^=-17:5===r&&(m.buttons^=-33),0!==r)return t.nonPrimaryReleaseHandler&&(o=t.nonPrimaryReleaseHandler({eventSource:t,pointerType:n[0].type,position:c(n[0].currentPos,t.element),button:r,buttons:m.buttons,isTouchEvent:"touch"===n[0].type,originalEvent:i,preventDefaultAction:!1,userData:t.userData}),o===!1&&e.cancelEvent(i)),!1;for(l=0;l<g;l++)u=n[l],d=m.getById(u.id),d&&(d.captured&&(d.captured=!1,v=!0,y=!0),d.lastPos=d.currentPos,d.lastTime=d.currentTime,d.currentPos=u.currentPos,d.currentTime=u.currentTime,d.insideElement||oe(m,d),s=d.currentPos,a=d.currentTime,y?(m.contacts--,(t.dragHandler||t.dragEndHandler||t.pinchHandler)&&e.MouseTracker.gesturePointVelocityTracker.removePoint(t,d),0===m.contacts?(t.releaseHandler&&(o=t.releaseHandler({eventSource:t,pointerType:d.type,position:c(s,t.element),buttons:m.buttons,insideElementPressed:d.insideElementPressed,insideElementReleased:d.insideElement,isTouchEvent:"touch"===d.type,originalEvent:i,preventDefaultAction:!1,userData:t.userData}),o===!1&&e.cancelEvent(i)),t.dragEndHandler&&!d.currentPos.equals(d.contactPos)&&(o=t.dragEndHandler({eventSource:t,pointerType:d.type,position:c(d.currentPos,t.element),speed:d.speed,direction:d.direction,shift:i.shiftKey,isTouchEvent:"touch"===d.type,originalEvent:i,preventDefaultAction:!1,userData:t.userData}),o===!1&&e.cancelEvent(i)),(t.clickHandler||t.dblClickHandler)&&d.insideElement&&(p=a-d.contactTime<=t.clickTimeThreshold&&d.contactPos.distanceTo(s)<=t.clickDistThreshold,t.clickHandler&&(o=t.clickHandler({eventSource:t,pointerType:d.type,position:c(d.currentPos,t.element),quick:p,shift:i.shiftKey,isTouchEvent:"touch"===d.type,originalEvent:i,preventDefaultAction:!1,userData:t.userData}),o===!1&&e.cancelEvent(i)),t.dblClickHandler&&p&&(m.clicks++,1===m.clicks?(f.lastClickPos=s,f.dblClickTimeOut=setTimeout(function(){m.clicks=0},t.dblClickTimeThreshold)):2===m.clicks&&(clearTimeout(f.dblClickTimeOut),m.clicks=0,f.lastClickPos.distanceTo(s)<=t.dblClickDistThreshold&&(o=t.dblClickHandler({eventSource:t,pointerType:d.type,position:c(d.currentPos,t.element),shift:i.shiftKey,isTouchEvent:"touch"===d.type,originalEvent:i,preventDefaultAction:!1,userData:t.userData}),o===!1&&e.cancelEvent(i)),f.lastClickPos=null)))):2===m.contacts&&t.pinchHandler&&"touch"===d.type&&(f.pinchGPoints=m.asArray(),f.lastPinchDist=f.currentPinchDist=f.pinchGPoints[0].currentPos.distanceTo(f.pinchGPoints[1].currentPos),f.lastPinchCenter=f.currentPinchCenter=h(f.pinchGPoints[0].currentPos,f.pinchGPoints[1].currentPos))):t.releaseHandler&&(o=t.releaseHandler({eventSource:t,pointerType:d.type,position:c(s,t.element),buttons:m.buttons,insideElementPressed:d.insideElementPressed,insideElementReleased:d.insideElement,isTouchEvent:"touch"===d.type,originalEvent:i,preventDefaultAction:!1,userData:t.userData}),o===!1&&e.cancelEvent(i)));return v}function ce(t,i,n){var r,o,s,a,l,u,d=me[t.hash],p=t.getActivePointersListByType(n[0].type),f=n.length;for("undefined"!=typeof i.buttons&&(p.buttons=i.buttons),r=0;r<f;r++)o=n[r],s=p.getById(o.id),s?(o.hasOwnProperty("isPrimary")&&(s.isPrimary=o.isPrimary),s.lastPos=s.currentPos,s.lastTime=s.currentTime,s.currentPos=o.currentPos,s.currentTime=o.currentTime):(o.captured=!1,o.insideElementPressed=!1,o.insideElement=!0,re(p,o));t.stopHandler&&"mouse"===n[0].type&&(clearTimeout(t.stopTimeOut),t.stopTimeOut=setTimeout(function(){de(t,i,n[0].type)},t.stopDelay)),0===p.contacts?t.moveHandler&&(u=t.moveHandler({eventSource:t,pointerType:n[0].type,position:c(n[0].currentPos,t.element),buttons:p.buttons,isTouchEvent:"touch"===n[0].type,originalEvent:i,preventDefaultAction:!1,userData:t.userData}),u===!1&&e.cancelEvent(i)):1===p.contacts?(t.moveHandler&&(s=p.asArray()[0],u=t.moveHandler({eventSource:t,pointerType:s.type,position:c(s.currentPos,t.element),buttons:p.buttons,isTouchEvent:"touch"===s.type,originalEvent:i,preventDefaultAction:!1,userData:t.userData}),u===!1&&e.cancelEvent(i)),t.dragHandler&&(s=p.asArray()[0],l=s.currentPos.minus(s.lastPos),u=t.dragHandler({eventSource:t,pointerType:s.type,position:c(s.currentPos,t.element),buttons:p.buttons,delta:l,speed:s.speed,direction:s.direction,shift:i.shiftKey,isTouchEvent:"touch"===s.type,originalEvent:i,preventDefaultAction:!1,userData:t.userData}),u===!1&&e.cancelEvent(i))):2===p.contacts&&(t.moveHandler&&(a=p.asArray(),u=t.moveHandler({eventSource:t,pointerType:a[0].type,position:c(h(a[0].currentPos,a[1].currentPos),t.element),buttons:p.buttons,isTouchEvent:"touch"===a[0].type,originalEvent:i,preventDefaultAction:!1,userData:t.userData}),u===!1&&e.cancelEvent(i)),t.pinchHandler&&"touch"===n[0].type&&(l=d.pinchGPoints[0].currentPos.distanceTo(d.pinchGPoints[1].currentPos),l!=d.currentPinchDist&&(d.lastPinchDist=d.currentPinchDist,d.currentPinchDist=l,d.lastPinchCenter=d.currentPinchCenter,d.currentPinchCenter=h(d.pinchGPoints[0].currentPos,d.pinchGPoints[1].currentPos),u=t.pinchHandler({eventSource:t,pointerType:"touch",gesturePoints:d.pinchGPoints,lastCenter:c(d.lastPinchCenter,t.element),center:c(d.currentPinchCenter,t.element),lastDistance:d.lastPinchDist,distance:d.currentPinchDist,shift:i.shiftKey,originalEvent:i,preventDefaultAction:!1,userData:t.userData}),u===!1&&e.cancelEvent(i))))}function he(e,t,i){ue(e,t,i,0),ae(e,t,i)}function de(e,t,i){e.stopHandler&&e.stopHandler({eventSource:e,pointerType:i,position:u(t,e.element),buttons:e.getActivePointersListByType(i).buttons,isTouchEvent:"touch"===i,originalEvent:t,preventDefaultAction:!1,userData:e.userData})}function pe(e){try{return e.addEventListener&&e.removeEventListener}catch(e){return!1}}var fe=[],me={};e.MouseTracker=function(t){fe.push(this);var i=arguments;e.isPlainObject(t)||(t={element:i[0],clickTimeThreshold:i[1],clickDistThreshold:i[2]}),this.hash=Math.random(),this.element=e.getElement(t.element),this.clickTimeThreshold=t.clickTimeThreshold||e.DEFAULT_SETTINGS.clickTimeThreshold,this.clickDistThreshold=t.clickDistThreshold||e.DEFAULT_SETTINGS.clickDistThreshold,this.dblClickTimeThreshold=t.dblClickTimeThreshold||e.DEFAULT_SETTINGS.dblClickTimeThreshold,this.dblClickDistThreshold=t.dblClickDistThreshold||e.DEFAULT_SETTINGS.dblClickDistThreshold,this.userData=t.userData||null,this.stopDelay=t.stopDelay||50,this.enterHandler=t.enterHandler||null,this.exitHandler=t.exitHandler||null,this.pressHandler=t.pressHandler||null,this.nonPrimaryPressHandler=t.nonPrimaryPressHandler||null,this.releaseHandler=t.releaseHandler||null,this.nonPrimaryReleaseHandler=t.nonPrimaryReleaseHandler||null,this.moveHandler=t.moveHandler||null,this.scrollHandler=t.scrollHandler||null,this.clickHandler=t.clickHandler||null,this.dblClickHandler=t.dblClickHandler||null,this.dragHandler=t.dragHandler||null,this.dragEndHandler=t.dragEndHandler||null,this.pinchHandler=t.pinchHandler||null,this.stopHandler=t.stopHandler||null,this.keyDownHandler=t.keyDownHandler||null,this.keyUpHandler=t.keyUpHandler||null,this.keyHandler=t.keyHandler||null,this.focusHandler=t.focusHandler||null,this.blurHandler=t.blurHandler||null;var n=this;me[this.hash]={click:function(e){d(n,e)},dblclick:function(e){p(n,e)},keydown:function(e){f(n,e)},keyup:function(e){m(n,e)},keypress:function(e){g(n,e)},focus:function(e){v(n,e)},blur:function(e){y(n,e)},wheel:function(e){w(n,e)},mousewheel:function(e){_(n,e)},DOMMouseScroll:function(e){_(n,e)},MozMousePixelScroll:function(e){_(n,e)},mouseenter:function(e){T(n,e)},mouseleave:function(e){P(n,e)},mouseover:function(e){x(n,e)},mouseout:function(e){R(n,e)},mousedown:function(e){C(n,e)},mouseup:function(e){D(n,e)},mouseupcaptured:function(e){k(n,e)},mousemove:function(e){z(n,e)},mousemovecaptured:function(e){M(n,e)},touchstart:function(e){F(n,e)},touchend:function(e){L(n,e)},touchendcaptured:function(e){H(n,e)},touchmove:function(e){j(n,e)},touchmovecaptured:function(e){U(n,e)},touchcancel:function(e){W(n,e)},gesturestart:function(e){$(n,e)},gesturechange:function(e){G(n,e)},pointerover:function(e){Z(n,e)},MSPointerOver:function(e){Z(n,e)},pointerout:function(e){X(n,e)},MSPointerOut:function(e){X(n,e)},pointerdown:function(e){K(n,e)},MSPointerDown:function(e){K(n,e)},pointerup:function(e){Y(n,e)},MSPointerUp:function(e){Y(n,e)},pointermove:function(e){ee(n,e)},MSPointerMove:function(e){ee(n,e)},pointercancel:function(e){ne(n,e)},MSPointerCancel:function(e){ne(n,e)},pointerupcaptured:function(e){J(n,e)},pointermovecaptured:function(e){te(n,e)},tracking:!1,activePointersLists:[],lastClickPos:null,dblClickTimeOut:null,pinchGPoints:[],lastPinchDist:0,currentPinchDist:0,lastPinchCenter:null,currentPinchCenter:null},t.startDisabled||this.setTracking(!0)},e.MouseTracker.prototype={destroy:function(){var e;for(n(this),this.element=null,e=0;e<fe.length;e++)if(fe[e]===this){fe.splice(e,1);break}me[this.hash]=null,delete me[this.hash]},isTracking:function(){return me[this.hash].tracking},setTracking:function(e){return e?i(this):n(this),this},getActivePointersListByType:function(t){var i,n,r=me[this.hash],o=r.activePointersLists.length;for(i=0;i<o;i++)if(r.activePointersLists[i].type===t)return r.activePointersLists[i];return n=new e.MouseTracker.GesturePointList(t),r.activePointersLists.push(n),n},getActivePointerCount:function(){var e,t=me[this.hash],i=t.activePointersLists.length,n=0;for(e=0;e<i;e++)n+=t.activePointersLists[e].getLength();return n},enterHandler:function(){},exitHandler:function(){},pressHandler:function(){},nonPrimaryPressHandler:function(){},releaseHandler:function(){},nonPrimaryReleaseHandler:function(){},moveHandler:function(){},scrollHandler:function(){},clickHandler:function(){},dblClickHandler:function(){},dragHandler:function(){},dragEndHandler:function(){},pinchHandler:function(){},stopHandler:function(){},keyDownHandler:function(){},keyUpHandler:function(){},keyHandler:function(){},focusHandler:function(){},blurHandler:function(){}},e.MouseTracker.gesturePointVelocityTracker=function(){var t=[],i=0,n=0,r=function(e,t){return e.hash.toString()+t.type+t.id.toString()},o=function(){var i,r,o,s,a,l,u=t.length,c=e.now();for(s=c-n,n=c,i=0;i<u;i++)r=t[i],o=r.gPoint,o.direction=Math.atan2(o.currentPos.y-r.lastPos.y,o.currentPos.x-r.lastPos.x),a=r.lastPos.distanceTo(o.currentPos),r.lastPos=o.currentPos,l=1e3*a/(s+1),o.speed=.75*l+.25*o.speed},s=function(s,a){var l=r(s,a);t.push({guid:l,gPoint:a,lastPos:a.currentPos}),1===t.length&&(n=e.now(),i=window.setInterval(o,50))},a=function(e,n){var o,s=r(e,n),a=t.length;for(o=0;o<a;o++)if(t[o].guid===s){t.splice(o,1),a--,0===a&&window.clearInterval(i);break}};return{addPoint:s,removePoint:a}}(),e.MouseTracker.captureElement=document,e.MouseTracker.wheelEventName=e.Browser.vendor==e.BROWSERS.IE&&e.Browser.version>8||"onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll",e.MouseTracker.supportsMouseCapture=function(){var t=document.createElement("div");return e.isFunction(t.setCapture)&&e.isFunction(t.releaseCapture)}(),e.MouseTracker.subscribeEvents=["click","dblclick","keydown","keyup","keypress","focus","blur",e.MouseTracker.wheelEventName],"DOMMouseScroll"==e.MouseTracker.wheelEventName&&e.MouseTracker.subscribeEvents.push("MozMousePixelScroll"),window.PointerEvent&&(window.navigator.pointerEnabled||e.Browser.vendor!==e.BROWSERS.IE)?(e.MouseTracker.havePointerEvents=!0,e.MouseTracker.subscribeEvents.push("pointerover","pointerout","pointerdown","pointerup","pointermove","pointercancel"),e.MouseTracker.unprefixedPointerEvents=!0,navigator.maxTouchPoints?e.MouseTracker.maxTouchPoints=navigator.maxTouchPoints:e.MouseTracker.maxTouchPoints=0,e.MouseTracker.haveMouseEnter=!1):window.MSPointerEvent&&window.navigator.msPointerEnabled?(e.MouseTracker.havePointerEvents=!0,e.MouseTracker.subscribeEvents.push("MSPointerOver","MSPointerOut","MSPointerDown","MSPointerUp","MSPointerMove","MSPointerCancel"),e.MouseTracker.unprefixedPointerEvents=!1,navigator.msMaxTouchPoints?e.MouseTracker.maxTouchPoints=navigator.msMaxTouchPoints:e.MouseTracker.maxTouchPoints=0,e.MouseTracker.haveMouseEnter=!1):(e.MouseTracker.havePointerEvents=!1,e.Browser.vendor===e.BROWSERS.IE&&e.Browser.version<9?(e.MouseTracker.subscribeEvents.push("mouseenter","mouseleave"),e.MouseTracker.haveMouseEnter=!0):(e.MouseTracker.subscribeEvents.push("mouseover","mouseout"),e.MouseTracker.haveMouseEnter=!1),e.MouseTracker.subscribeEvents.push("mousedown","mouseup","mousemove"),"ontouchstart"in window&&e.MouseTracker.subscribeEvents.push("touchstart","touchend","touchmove","touchcancel"),"ongesturestart"in window&&e.MouseTracker.subscribeEvents.push("gesturestart","gesturechange"),e.MouseTracker.mousePointerId="legacy-mouse",e.MouseTracker.maxTouchPoints=10),e.MouseTracker.GesturePointList=function(e){this._gPoints=[],this.type=e,this.buttons=0,this.contacts=0,this.clicks=0,this.captureCount=0},e.MouseTracker.GesturePointList.prototype={getLength:function(){return this._gPoints.length},asArray:function(){return this._gPoints},add:function(e){return this._gPoints.push(e)},removeById:function(e){var t,i=this._gPoints.length;for(t=0;t<i;t++)if(this._gPoints[t].id===e){this._gPoints.splice(t,1);break}return this._gPoints.length},getByIndex:function(e){return e<this._gPoints.length?this._gPoints[e]:null},getById:function(e){var t,i=this._gPoints.length;for(t=0;t<i;t++)if(this._gPoints[t].id===e)return this._gPoints[t];return null},getPrimary:function(e){var t,i=this._gPoints.length;for(t=0;t<i;t++)if(this._gPoints[t].isPrimary)return this._gPoints[t];return null}};var ge=function(){try{return window.self!==window.top}catch(e){return!0}}()}(OpenSeadragon),function(e){e.ControlAnchor={NONE:0,TOP_LEFT:1,TOP_RIGHT:2,BOTTOM_RIGHT:3,BOTTOM_LEFT:4,ABSOLUTE:5},e.Control=function(t,i,n){var r=t.parentNode;"number"==typeof i&&(e.console.error("Passing an anchor directly into the OpenSeadragon.Control constructor is deprecated; please use an options object instead.  Support for this deprecated variant is scheduled for removal in December 2013"),i={anchor:i}),i.attachToViewer="undefined"==typeof i.attachToViewer||i.attachToViewer,this.autoFade="undefined"==typeof i.autoFade||i.autoFade,this.element=t,this.anchor=i.anchor,this.container=n,this.anchor==e.ControlAnchor.ABSOLUTE?(this.wrapper=e.makeNeutralElement("div"),this.wrapper.style.position="absolute",this.wrapper.style.top="number"==typeof i.top?i.top+"px":i.top,this.wrapper.style.left="number"==typeof i.left?i.left+"px":i.left,this.wrapper.style.height="number"==typeof i.height?i.height+"px":i.height,this.wrapper.style.width="number"==typeof i.width?i.width+"px":i.width,this.wrapper.style.margin="0px",this.wrapper.style.padding="0px",this.element.style.position="relative",this.element.style.top="0px",this.element.style.left="0px",this.element.style.height="100%",this.element.style.width="100%"):(this.wrapper=e.makeNeutralElement("div"),this.wrapper.style.display="inline-block",this.anchor==e.ControlAnchor.NONE&&(this.wrapper.style.width=this.wrapper.style.height="100%")),this.wrapper.appendChild(this.element),i.attachToViewer?this.anchor==e.ControlAnchor.TOP_RIGHT||this.anchor==e.ControlAnchor.BOTTOM_RIGHT?this.container.insertBefore(this.wrapper,this.container.firstChild):this.container.appendChild(this.wrapper):r.appendChild(this.wrapper)},e.Control.prototype={destroy:function(){this.wrapper.removeChild(this.element),this.container.removeChild(this.wrapper)},isVisible:function(){return"none"!=this.wrapper.style.display},setVisible:function(t){this.wrapper.style.display=t?this.anchor==e.ControlAnchor.ABSOLUTE?"block":"inline-block":"none"},setOpacity:function(t){this.element[e.SIGNAL]&&e.Browser.vendor==e.BROWSERS.IE?e.setElementOpacity(this.element,t,!0):e.setElementOpacity(this.wrapper,t,!0)}}}(OpenSeadragon),function(e){function t(e,t){var i,n=e.controls;for(i=n.length-1;i>=0;i--)if(n[i].element==t)return i;return-1}e.ControlDock=function(t){var i,n,r=["topleft","topright","bottomright","bottomleft"];for(e.extend(!0,this,{id:"controldock-"+e.now()+"-"+Math.floor(1e6*Math.random()),container:e.makeNeutralElement("div"),controls:[]},t),this.container.onsubmit=function(){return!1},this.element&&(this.element=e.getElement(this.element),this.element.appendChild(this.container),this.element.style.position="relative",this.container.style.width="100%",this.container.style.height="100%"),n=0;n<r.length;n++)i=r[n],this.controls[i]=e.makeNeutralElement("div"),this.controls[i].style.position="absolute",i.match("left")&&(this.controls[i].style.left="0px"),i.match("right")&&(this.controls[i].style.right="0px"),i.match("top")&&(this.controls[i].style.top="0px"),i.match("bottom")&&(this.controls[i].style.bottom="0px");this.container.appendChild(this.controls.topleft),this.container.appendChild(this.controls.topright),this.container.appendChild(this.controls.bottomright),this.container.appendChild(this.controls.bottomleft)},e.ControlDock.prototype={addControl:function(i,n){i=e.getElement(i);var r=null;if(!(t(this,i)>=0)){switch(n.anchor){case e.ControlAnchor.TOP_RIGHT:r=this.controls.topright,i.style.position="relative",i.style.paddingRight="0px",i.style.paddingTop="0px";break;case e.ControlAnchor.BOTTOM_RIGHT:r=this.controls.bottomright,i.style.position="relative",i.style.paddingRight="0px",i.style.paddingBottom="0px";break;case e.ControlAnchor.BOTTOM_LEFT:r=this.controls.bottomleft,i.style.position="relative",i.style.paddingLeft="0px",i.style.paddingBottom="0px";break;case e.ControlAnchor.TOP_LEFT:r=this.controls.topleft,i.style.position="relative",i.style.paddingLeft="0px",i.style.paddingTop="0px";break;case e.ControlAnchor.ABSOLUTE:r=this.container,i.style.margin="0px",i.style.padding="0px";break;default:case e.ControlAnchor.NONE:r=this.container,i.style.margin="0px",i.style.padding="0px"}this.controls.push(new e.Control(i,n,r)),i.style.display="inline-block"}},removeControl:function(i){i=e.getElement(i);var n=t(this,i);return n>=0&&(this.controls[n].destroy(),this.controls.splice(n,1)),this},clearControls:function(){for(;this.controls.length>0;)this.controls.pop().destroy();return this},areControlsEnabled:function(){var e;for(e=this.controls.length-1;e>=0;e--)if(this.controls[e].isVisible())return!0;return!1},setControlsEnabled:function(e){var t;for(t=this.controls.length-1;t>=0;t--)this.controls[t].setVisible(e);return this}}}(OpenSeadragon),function(e){e.Placement=e.freezeObject({CENTER:0,TOP_LEFT:1,TOP:2,TOP_RIGHT:3,RIGHT:4,BOTTOM_RIGHT:5,BOTTOM:6,BOTTOM_LEFT:7,LEFT:8,properties:{0:{isLeft:!1,isHorizontallyCentered:!0,isRight:!1,isTop:!1,isVerticallyCentered:!0,isBottom:!1},1:{isLeft:!0,isHorizontallyCentered:!1,isRight:!1,isTop:!0,isVerticallyCentered:!1,isBottom:!1},2:{isLeft:!1,isHorizontallyCentered:!0,isRight:!1,isTop:!0,isVerticallyCentered:!1,isBottom:!1},3:{isLeft:!1,isHorizontallyCentered:!1,isRight:!0,isTop:!0,isVerticallyCentered:!1,isBottom:!1},4:{isLeft:!1,isHorizontallyCentered:!1,isRight:!0,isTop:!1,isVerticallyCentered:!0,isBottom:!1},5:{isLeft:!1,isHorizontallyCentered:!1,isRight:!0,isTop:!1,isVerticallyCentered:!1,isBottom:!0},6:{isLeft:!1,isHorizontallyCentered:!0,isRight:!1,isTop:!1,isVerticallyCentered:!1,isBottom:!0},7:{isLeft:!0,isHorizontallyCentered:!1,isRight:!1,isTop:!1,isVerticallyCentered:!1,isBottom:!0},8:{isLeft:!0,isHorizontallyCentered:!1,isRight:!1,isTop:!1,isVerticallyCentered:!0,isBottom:!1}}})}(OpenSeadragon),function(e){function t(t){return t=e.getElement(t),new e.Point(0===t.clientWidth?1:t.clientWidth,0===t.clientHeight?1:t.clientHeight)}function i(t,i,n,r){function o(e,t){e.ready?n(e):(e.addHandler("ready",function(){n(e)}),e.addHandler("open-failed",function(e){r({message:e.message,source:t})}))}var s=t;"string"==e.type(i)&&(i.match(/\s*<.*/)?i=e.parseXml(i):i.match(/\s*[\{\[].*/)&&(i=e.parseJSON(i))),setTimeout(function(){if("string"==e.type(i))i=new e.TileSource({url:i,crossOriginPolicy:t.crossOriginPolicy,ajaxWithCredentials:t.ajaxWithCredentials,useCanvas:t.useCanvas,success:function(e){n(e.tileSource)}}),i.addHandler("open-failed",function(e){r(e)});else if(e.isPlainObject(i)||i.nodeType)if(!i.crossOriginPolicy&&t.crossOriginPolicy&&(i.crossOriginPolicy=t.crossOriginPolicy),void 0===i.ajaxWithCredentials&&(i.ajaxWithCredentials=t.ajaxWithCredentials),void 0===i.useCanvas&&(i.useCanvas=t.useCanvas),e.isFunction(i.getTileUrl)){var a=new e.TileSource(i);a.getTileUrl=i.getTileUrl,n(a)}else{var l=e.TileSource.determineType(s,i);if(!l)return void r({message:"Unable to load TileSource",source:i});var u=l.prototype.configure.apply(s,[i]);o(new l(u),i)}else o(i,i)})}function n(t,i){if(i instanceof e.Overlay)return i;var n=null;if(i.element)n=e.getElement(i.element);else{var r=i.id?i.id:"openseadragon-overlay-"+Math.floor(1e7*Math.random());n=e.getElement(i.id),n||(n=document.createElement("a"),n.href="#/overlay/"+r),n.id=r,e.addClass(n,i.className?i.className:"openseadragon-overlay")}var o=i.location,s=i.width,a=i.height;if(!o){var l=i.x,u=i.y;if(void 0!==i.px){var c=t.viewport.imageToViewportRectangle(new e.Rect(i.px,i.py,s||0,a||0));l=c.x,u=c.y,s=void 0!==s?c.width:void 0,a=void 0!==a?c.height:void 0}o=new e.Point(l,u)}var h=i.placement;return h&&"string"===e.type(h)&&(h=e.Placement[i.placement.toUpperCase()]),new e.Overlay({element:n,location:o,placement:h,onDraw:i.onDraw,checkResize:i.checkResize,width:s,height:a,rotationMode:i.rotationMode})}function r(e,t){var i;for(i=e.length-1;i>=0;i--)if(e[i].element===t)return i;return-1}function o(t,i){return e.requestAnimationFrame(function(){i(t)})}function s(t){e.requestAnimationFrame(function(){l(t)})}function a(t){t.autoHideControls&&(t.controlsShouldFade=!0,t.controlsFadeBeginTime=e.now()+t.controlsFadeDelay,window.setTimeout(function(){s(t)},t.controlsFadeDelay))}function l(t){var i,n,r,o;if(t.controlsShouldFade){for(i=e.now(),n=i-t.controlsFadeBeginTime,r=1-n/t.controlsFadeLength,r=Math.min(1,r),r=Math.max(0,r),o=t.controls.length-1;o>=0;o--)t.controls[o].autoFade&&t.controls[o].setOpacity(r);r>0&&s(t)}}function u(e){var t;for(e.controlsShouldFade=!1,t=e.controls.length-1;t>=0;t--)e.controls[t].setOpacity(1)}function c(){u(this)}function h(){a(this)}function d(t){if(t.preventDefaultAction||t.ctrl||t.alt||t.meta)return!0;switch(t.keyCode){case 38:return t.shift?this.viewport.zoomBy(1.1):this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0,-40))),this.viewport.applyConstraints(),!1;case 40:return t.shift?this.viewport.zoomBy(.9):this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0,40))),this.viewport.applyConstraints(),!1;case 37:return this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(-40,0))),this.viewport.applyConstraints(),!1;case 39:return this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(40,0))),this.viewport.applyConstraints(),!1;default:return!0}}function p(t){if(t.preventDefaultAction||t.ctrl||t.alt||t.meta)return!0;switch(t.keyCode){case 43:case 61:return this.viewport.zoomBy(1.1),this.viewport.applyConstraints(),!1;case 45:return this.viewport.zoomBy(.9),this.viewport.applyConstraints(),!1;case 48:return this.viewport.goHome(),this.viewport.applyConstraints(),!1;case 119:case 87:return t.shift?this.viewport.zoomBy(1.1):this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0,-40))),this.viewport.applyConstraints(),!1;case 115:case 83:return t.shift?this.viewport.zoomBy(.9):this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0,40))),this.viewport.applyConstraints(),!1;case 97:return this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(-40,0))),this.viewport.applyConstraints(),!1;case 100:return this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(40,0))),this.viewport.applyConstraints(),!1;default:return!0}}function f(e){var t,i=document.activeElement==this.canvas;i||this.canvas.focus(),!e.preventDefaultAction&&this.viewport&&e.quick&&(t=this.gestureSettingsByDeviceType(e.pointerType),t.clickToZoom&&(this.viewport.zoomBy(e.shift?1/this.zoomPerClick:this.zoomPerClick,this.viewport.pointFromPixel(e.position,!0)),this.viewport.applyConstraints())),this.raiseEvent("canvas-click",{tracker:e.eventSource,position:e.position,quick:e.quick,shift:e.shift,originalEvent:e.originalEvent})}function m(e){var t;!e.preventDefaultAction&&this.viewport&&(t=this.gestureSettingsByDeviceType(e.pointerType),t.dblClickToZoom&&(this.viewport.zoomBy(e.shift?1/this.zoomPerClick:this.zoomPerClick,this.viewport.pointFromPixel(e.position,!0)),this.viewport.applyConstraints())),this.raiseEvent("canvas-double-click",{tracker:e.eventSource,position:e.position,shift:e.shift,originalEvent:e.originalEvent})}function g(e){var t;!e.preventDefaultAction&&this.viewport&&(t=this.gestureSettingsByDeviceType(e.pointerType),this.panHorizontal||(e.delta.x=0),this.panVertical||(e.delta.y=0),this.viewport.panBy(this.viewport.deltaPointsFromPixels(e.delta.negate()),t.flickEnabled),this.constrainDuringPan&&this.viewport.applyConstraints()),this.raiseEvent("canvas-drag",{tracker:e.eventSource,position:e.position,delta:e.delta,speed:e.speed,direction:e.direction,shift:e.shift,originalEvent:e.originalEvent})}function v(t){if(!t.preventDefaultAction&&this.viewport){var i=this.gestureSettingsByDeviceType(t.pointerType);if(i.flickEnabled&&t.speed>=i.flickMinSpeed){var n=0;this.panHorizontal&&(n=i.flickMomentum*t.speed*Math.cos(t.direction));var r=0;this.panVertical&&(r=i.flickMomentum*t.speed*Math.sin(t.direction));var o=this.viewport.pixelFromPoint(this.viewport.getCenter(!0)),s=this.viewport.pointFromPixel(new e.Point(o.x-n,o.y-r));this.viewport.panTo(s,!1)}this.viewport.applyConstraints()}this.raiseEvent("canvas-drag-end",{tracker:t.eventSource,position:t.position,speed:t.speed,direction:t.direction,shift:t.shift,originalEvent:t.originalEvent})}function y(e){this.raiseEvent("canvas-enter",{tracker:e.eventSource,pointerType:e.pointerType,position:e.position,buttons:e.buttons,pointers:e.pointers,insideElementPressed:e.insideElementPressed,buttonDownAny:e.buttonDownAny,originalEvent:e.originalEvent})}function w(e){this.raiseEvent("canvas-exit",{tracker:e.eventSource,pointerType:e.pointerType,position:e.position,buttons:e.buttons,pointers:e.pointers,insideElementPressed:e.insideElementPressed,buttonDownAny:e.buttonDownAny,originalEvent:e.originalEvent})}function _(e){this.raiseEvent("canvas-press",{tracker:e.eventSource,pointerType:e.pointerType,position:e.position,insideElementPressed:e.insideElementPressed,insideElementReleased:e.insideElementReleased,originalEvent:e.originalEvent})}function S(e){this.raiseEvent("canvas-release",{tracker:e.eventSource,pointerType:e.pointerType,position:e.position,insideElementPressed:e.insideElementPressed,insideElementReleased:e.insideElementReleased,originalEvent:e.originalEvent})}function E(e){this.raiseEvent("canvas-nonprimary-press",{tracker:e.eventSource,position:e.position,pointerType:e.pointerType,button:e.button,buttons:e.buttons,originalEvent:e.originalEvent})}function T(e){this.raiseEvent("canvas-nonprimary-release",{tracker:e.eventSource,position:e.position,pointerType:e.pointerType,button:e.button,buttons:e.buttons,originalEvent:e.originalEvent})}function x(e){var t,i,n,r;if(!e.preventDefaultAction&&this.viewport&&(t=this.gestureSettingsByDeviceType(e.pointerType),t.pinchToZoom&&(i=this.viewport.pointFromPixel(e.center,!0),n=this.viewport.pointFromPixel(e.lastCenter,!0),r=n.minus(i),this.panHorizontal||(r.x=0),this.panVertical||(r.y=0),this.viewport.zoomBy(e.distance/e.lastDistance,i,!0),this.viewport.panBy(r,!0),this.viewport.applyConstraints()),t.pinchRotate)){var o=Math.atan2(e.gesturePoints[0].currentPos.y-e.gesturePoints[1].currentPos.y,e.gesturePoints[0].currentPos.x-e.gesturePoints[1].currentPos.x),s=Math.atan2(e.gesturePoints[0].lastPos.y-e.gesturePoints[1].lastPos.y,e.gesturePoints[0].lastPos.x-e.gesturePoints[1].lastPos.x);
	this.viewport.setRotation(this.viewport.getRotation()+(o-s)*(180/Math.PI))}return this.raiseEvent("canvas-pinch",{tracker:e.eventSource,gesturePoints:e.gesturePoints,lastCenter:e.lastCenter,center:e.center,lastDistance:e.lastDistance,distance:e.distance,shift:e.shift,originalEvent:e.originalEvent}),!1}function b(t){var i,n,r,o;if(r=e.now(),o=r-this._lastScrollTime,o>this.minScrollDeltaTime){if(this._lastScrollTime=r,!t.preventDefaultAction&&this.viewport&&(i=this.gestureSettingsByDeviceType(t.pointerType),i.scrollToZoom&&(n=Math.pow(this.zoomPerScroll,t.scroll),this.viewport.zoomBy(n,this.viewport.pointFromPixel(t.position,!0)),this.viewport.applyConstraints())),this.raiseEvent("canvas-scroll",{tracker:t.eventSource,position:t.position,scroll:t.scroll,shift:t.shift,originalEvent:t.originalEvent}),i&&i.scrollToZoom)return!1}else if(i=this.gestureSettingsByDeviceType(t.pointerType),i&&i.scrollToZoom)return!1}function P(e){$[this.hash].mouseInside=!0,u(this),this.raiseEvent("container-enter",{tracker:e.eventSource,position:e.position,buttons:e.buttons,pointers:e.pointers,insideElementPressed:e.insideElementPressed,buttonDownAny:e.buttonDownAny,originalEvent:e.originalEvent})}function R(e){e.pointers<1&&($[this.hash].mouseInside=!1,$[this.hash].animating||a(this)),this.raiseEvent("container-exit",{tracker:e.eventSource,position:e.position,buttons:e.buttons,pointers:e.pointers,insideElementPressed:e.insideElementPressed,buttonDownAny:e.buttonDownAny,originalEvent:e.originalEvent})}function O(e){I(e),e.isOpen()?e._updateRequestId=o(e,O):e._updateRequestId=!1}function I(e){if(!e._opening){if(e.autoResize){var i=t(e.container),n=$[e.hash].prevContainerSize;if(!i.equals(n)){var r=e.viewport;if(e.preserveImageSizeOnResize){var o=n.x/i.x,s=r.getZoom()*o,l=r.getCenter();r.resize(i,!1),r.zoomTo(s,null,!0),r.panTo(l,!0)}else{var c=r.getBounds();r.resize(i,!0),r.fitBoundsWithConstraints(c,!0)}$[e.hash].prevContainerSize=i,$[e.hash].forceRedraw=!0}}var h=e.viewport.update(),d=e.world.update()||h;h&&e.raiseEvent("viewport-change"),e.referenceStrip&&(d=e.referenceStrip.update(e.viewport)||d),!$[e.hash].animating&&d&&(e.raiseEvent("animation-start"),u(e)),(d||$[e.hash].forceRedraw||e.world.needsDraw())&&(C(e),e._drawOverlays(),e.navigator&&e.navigator.update(e.viewport),$[e.hash].forceRedraw=!1,d&&e.raiseEvent("animation")),$[e.hash].animating&&!d&&(e.raiseEvent("animation-finish"),$[e.hash].mouseInside||a(e)),$[e.hash].animating=d}}function C(e){e.imageLoader.clear(),e.drawer.clear(),e.world.draw(),e.raiseEvent("update-viewport",{})}function D(e,t){return e?e+t:t}function k(){$[this.hash].lastZoomTime=e.now(),$[this.hash].zoomFactor=this.zoomPerSecond,$[this.hash].zooming=!0,M(this)}function N(){$[this.hash].lastZoomTime=e.now(),$[this.hash].zoomFactor=1/this.zoomPerSecond,$[this.hash].zooming=!0,M(this)}function z(){$[this.hash].zooming=!1}function M(t){e.requestAnimationFrame(e.delegate(t,B))}function B(){var t,i,n;$[this.hash].zooming&&this.viewport&&(t=e.now(),i=t-$[this.hash].lastZoomTime,n=Math.pow($[this.hash].zoomFactor,i/1e3),this.viewport.zoomBy(n),this.viewport.applyConstraints(),$[this.hash].lastZoomTime=t,M(this))}function A(){this.viewport&&($[this.hash].zooming=!1,this.viewport.zoomBy(this.zoomPerClick/1),this.viewport.applyConstraints())}function F(){this.viewport&&($[this.hash].zooming=!1,this.viewport.zoomBy(1/this.zoomPerClick),this.viewport.applyConstraints())}function L(){this.buttons.emulateEnter(),this.buttons.emulateExit()}function H(){this.viewport&&this.viewport.goHome()}function V(){this.isFullPage()&&!e.isFullScreen()?this.setFullPage(!1):this.setFullScreen(!this.isFullPage()),this.buttons&&this.buttons.emulateExit(),this.fullPageButton.element.focus(),this.viewport&&this.viewport.applyConstraints()}function j(){if(this.viewport){var e=this.viewport.getRotation();0===e?e=270:e-=90,this.viewport.setRotation(e)}}function U(){if(this.viewport){var e=this.viewport.getRotation();270===e?e=0:e+=90,this.viewport.setRotation(e)}}function q(){var e=this._sequenceIndex-1;this.navPrevNextWrap&&e<0&&(e+=this.tileSources.length),this.goToPage(e)}function W(){var e=this._sequenceIndex+1;this.navPrevNextWrap&&e>=this.tileSources.length&&(e=0),this.goToPage(e)}var $={},G=1;e.Viewer=function(i){var n,r=arguments,s=this;if(e.isPlainObject(i)||(i={id:r[0],xmlPath:r.length>1?r[1]:void 0,prefixUrl:r.length>2?r[2]:void 0,controls:r.length>3?r[3]:void 0,overlays:r.length>4?r[4]:void 0}),i.config&&(e.extend(!0,i,i.config),delete i.config),e.extend(!0,this,{id:i.id,hash:i.hash||G++,element:null,container:null,canvas:null,overlays:[],overlaysContainer:null,previousBody:[],customControls:[],source:null,drawer:null,world:null,viewport:null,navigator:null,collectionViewport:null,collectionDrawer:null,navImages:null,buttons:null,profiler:null},e.DEFAULT_SETTINGS,i),"undefined"==typeof this.hash)throw new Error("A hash must be defined, either by specifying options.id or options.hash.");for("undefined"!=typeof $[this.hash]&&e.console.warn("Hash "+this.hash+" has already been used."),$[this.hash]={fsBoundsDelta:new e.Point(1,1),prevContainerSize:null,animating:!1,forceRedraw:!1,mouseInside:!1,group:null,zooming:!1,zoomFactor:null,lastZoomTime:null,fullPage:!1,onfullscreenchange:null},this._sequenceIndex=0,this._firstOpen=!0,this._updateRequestId=null,this._loadQueue=[],this.currentOverlays=[],this._lastScrollTime=e.now(),e.EventSource.call(this),this.addHandler("open-failed",function(t){var i=e.getString("Errors.OpenFailed",t.eventSource,t.message);s._showMessage(i)}),e.ControlDock.call(this,i),this.xmlPath&&(this.tileSources=[this.xmlPath]),this.element=this.element||document.getElementById(this.id),this.canvas=e.makeNeutralElement("div"),this.canvas.className="openseadragon-canvas",function(e){e.width="100%",e.height="100%",e.overflow="hidden",e.position="absolute",e.top="0px",e.left="0px"}(this.canvas.style),e.setElementTouchActionNone(this.canvas),""!==i.tabIndex&&(this.canvas.tabIndex=void 0===i.tabIndex?0:i.tabIndex),this.container.className="openseadragon-container",function(e){e.width="100%",e.height="100%",e.position="relative",e.overflow="hidden",e.left="0px",e.top="0px",e.textAlign="left"}(this.container.style),this.container.insertBefore(this.canvas,this.container.firstChild),this.element.appendChild(this.container),this.bodyWidth=document.body.style.width,this.bodyHeight=document.body.style.height,this.bodyOverflow=document.body.style.overflow,this.docOverflow=document.documentElement.style.overflow,this.innerTracker=new e.MouseTracker({element:this.canvas,startDisabled:!this.mouseNavEnabled,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,dblClickTimeThreshold:this.dblClickTimeThreshold,dblClickDistThreshold:this.dblClickDistThreshold,keyDownHandler:e.delegate(this,d),keyHandler:e.delegate(this,p),clickHandler:e.delegate(this,f),dblClickHandler:e.delegate(this,m),dragHandler:e.delegate(this,g),dragEndHandler:e.delegate(this,v),enterHandler:e.delegate(this,y),exitHandler:e.delegate(this,w),pressHandler:e.delegate(this,_),releaseHandler:e.delegate(this,S),nonPrimaryPressHandler:e.delegate(this,E),nonPrimaryReleaseHandler:e.delegate(this,T),scrollHandler:e.delegate(this,b),pinchHandler:e.delegate(this,x)}),this.outerTracker=new e.MouseTracker({element:this.container,startDisabled:!this.mouseNavEnabled,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,dblClickTimeThreshold:this.dblClickTimeThreshold,dblClickDistThreshold:this.dblClickDistThreshold,enterHandler:e.delegate(this,P),exitHandler:e.delegate(this,R)}),this.toolbar&&(this.toolbar=new e.ControlDock({element:this.toolbar})),this.bindStandardControls(),$[this.hash].prevContainerSize=t(this.container),this.world=new e.World({viewer:this}),this.world.addHandler("add-item",function(e){s.source=s.world.getItemAt(0).source,$[s.hash].forceRedraw=!0,s._updateRequestId||(s._updateRequestId=o(s,O))}),this.world.addHandler("remove-item",function(e){s.world.getItemCount()?s.source=s.world.getItemAt(0).source:s.source=null,$[s.hash].forceRedraw=!0}),this.world.addHandler("metrics-change",function(e){s.viewport&&s.viewport._setContentBounds(s.world.getHomeBounds(),s.world.getContentFactor())}),this.world.addHandler("item-index-change",function(e){s.source=s.world.getItemAt(0).source}),this.viewport=new e.Viewport({containerSize:$[this.hash].prevContainerSize,springStiffness:this.springStiffness,animationTime:this.animationTime,minZoomImageRatio:this.minZoomImageRatio,maxZoomPixelRatio:this.maxZoomPixelRatio,visibilityRatio:this.visibilityRatio,wrapHorizontal:this.wrapHorizontal,wrapVertical:this.wrapVertical,defaultZoomLevel:this.defaultZoomLevel,minZoomLevel:this.minZoomLevel,maxZoomLevel:this.maxZoomLevel,viewer:this,degrees:this.degrees,navigatorRotate:this.navigatorRotate,homeFillsViewer:this.homeFillsViewer,margins:this.viewportMargins}),this.viewport._setContentBounds(this.world.getHomeBounds(),this.world.getContentFactor()),this.imageLoader=new e.ImageLoader({jobLimit:this.imageLoaderLimit}),this.tileCache=new e.TileCache({maxImageCacheCount:this.maxImageCacheCount}),this.drawer=new e.Drawer({viewer:this,viewport:this.viewport,element:this.canvas,debugGridColor:this.debugGridColor}),this.overlaysContainer=e.makeNeutralElement("div"),this.canvas.appendChild(this.overlaysContainer),this.drawer.canRotate()||(this.rotateLeft&&(n=this.buttons.buttons.indexOf(this.rotateLeft),this.buttons.buttons.splice(n,1),this.buttons.element.removeChild(this.rotateLeft.element)),this.rotateRight&&(n=this.buttons.buttons.indexOf(this.rotateRight),this.buttons.buttons.splice(n,1),this.buttons.element.removeChild(this.rotateRight.element))),this.showNavigator&&(this.navigator=new e.Navigator({id:this.navigatorId,position:this.navigatorPosition,sizeRatio:this.navigatorSizeRatio,maintainSizeRatio:this.navigatorMaintainSizeRatio,top:this.navigatorTop,left:this.navigatorLeft,width:this.navigatorWidth,height:this.navigatorHeight,autoResize:this.navigatorAutoResize,autoFade:this.navigatorAutoFade,prefixUrl:this.prefixUrl,viewer:this,navigatorRotate:this.navigatorRotate,crossOriginPolicy:this.crossOriginPolicy})),this.sequenceMode&&this.bindSequenceControls(),this.tileSources&&this.open(this.tileSources),n=0;n<this.customControls.length;n++)this.addControl(this.customControls[n].id,{anchor:this.customControls[n].anchor});e.requestAnimationFrame(function(){a(s)})},e.extend(e.Viewer.prototype,e.EventSource.prototype,e.ControlDock.prototype,{isOpen:function(){return!!this.world.getItemCount()},openDzi:function(t){return e.console.error("[Viewer.openDzi] this function is deprecated; use Viewer.open() instead."),this.open(t)},openTileSource:function(t){return e.console.error("[Viewer.openTileSource] this function is deprecated; use Viewer.open() instead."),this.open(t)},open:function(t){var i=this;if(this.close(),t){if(this.sequenceMode&&e.isArray(t))return this.referenceStrip&&(this.referenceStrip.destroy(),this.referenceStrip=null),this.tileSources=t,this._sequenceIndex=Math.max(0,Math.min(this.tileSources.length-1,this.initialPage)),this.tileSources.length&&(this.open(this.tileSources[this._sequenceIndex]),this.showReferenceStrip&&(this.referenceStrip=new e.ReferenceStrip({id:this.referenceStripElement,position:this.referenceStripPosition,sizeRatio:this.referenceStripSizeRatio,scroll:this.referenceStripScroll,height:this.referenceStripHeight,width:this.referenceStripWidth,tileSources:this.tileSources,prefixUrl:this.prefixUrl,viewer:this}))),void this._updateSequenceButtons(this._sequenceIndex);if(e.isArray(t)||(t=[t]),t.length){this._opening=!0;for(var r,o=t.length,s=0,a=0,l=function(){if(s+a===o)if(s){!i._firstOpen&&i.preserveViewport||(i.viewport.goHome(!0),i.viewport.update()),i._firstOpen=!1;var e=t[0];if(e.tileSource&&(e=e.tileSource),i.overlays&&!i.preserveOverlays)for(var l=0;l<i.overlays.length;l++)i.currentOverlays[l]=n(i,i.overlays[l]);i._drawOverlays(),i._opening=!1,i.raiseEvent("open",{source:e})}else i._opening=!1,i.raiseEvent("open-failed",r)},u=function(t){e.isPlainObject(t)&&t.tileSource||(t={tileSource:t}),void 0!==t.index&&(e.console.error("[Viewer.open] setting indexes here is not supported; use addTiledImage instead"),delete t.index),void 0===t.collectionImmediately&&(t.collectionImmediately=!0);var n=t.success;t.success=function(e){if(s++,t.tileSource.overlays)for(var r=0;r<t.tileSource.overlays.length;r++)i.addOverlay(t.tileSource.overlays[r]);n&&n(e),l()};var o=t.error;t.error=function(e){a++,r||(r=e),o&&o(e),l()},i.addTiledImage(t)},c=0;c<t.length;c++)u(t[c]);return this}}},close:function(){return $[this.hash]?(this._opening=!1,this.navigator&&this.navigator.close(),this.preserveOverlays||(this.clearOverlays(),this.overlaysContainer.innerHTML=""),$[this.hash].animating=!1,this.world.removeAll(),this.imageLoader.clear(),this.raiseEvent("close"),this):this},destroy:function(){if($[this.hash]){if(this.close(),this.clearOverlays(),this.overlaysContainer.innerHTML="",this.referenceStrip&&(this.referenceStrip.destroy(),this.referenceStrip=null),null!==this._updateRequestId&&(e.cancelAnimationFrame(this._updateRequestId),this._updateRequestId=null),this.drawer&&this.drawer.destroy(),this.removeAllHandlers(),this.element)for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);this.innerTracker&&this.innerTracker.destroy(),this.outerTracker&&this.outerTracker.destroy(),$[this.hash]=null,delete $[this.hash],this.canvas=null,this.container=null,this.element=null}},isMouseNavEnabled:function(){return this.innerTracker.isTracking()},setMouseNavEnabled:function(e){return this.innerTracker.setTracking(e),this.outerTracker.setTracking(e),this.raiseEvent("mouse-enabled",{enabled:e}),this},areControlsEnabled:function(){var e,t=this.controls.length;for(e=0;e<this.controls.length;e++)t=t&&this.controls[e].isVisibile();return t},setControlsEnabled:function(e){return e?u(this):a(this),this.raiseEvent("controls-enabled",{enabled:e}),this},isFullPage:function(){return $[this.hash].fullPage},setFullPage:function(t){var i,n,r=document.body,o=r.style,s=document.documentElement.style,a=this;if(t==this.isFullPage())return this;var l={fullPage:t,preventDefaultAction:!1};if(this.raiseEvent("pre-full-page",l),l.preventDefaultAction)return this;if(t){for(this.elementSize=e.getElementSize(this.element),this.pageScroll=e.getPageScroll(),this.elementMargin=this.element.style.margin,this.element.style.margin="0",this.elementPadding=this.element.style.padding,this.element.style.padding="0",this.bodyMargin=o.margin,this.docMargin=s.margin,o.margin="0",s.margin="0",this.bodyPadding=o.padding,this.docPadding=s.padding,o.padding="0",s.padding="0",this.bodyWidth=o.width,this.docWidth=s.width,o.width="100%",s.width="100%",this.bodyHeight=o.height,this.docHeight=s.height,o.height="100%",s.height="100%",this.previousBody=[],$[this.hash].prevElementParent=this.element.parentNode,$[this.hash].prevNextSibling=this.element.nextSibling,$[this.hash].prevElementWidth=this.element.style.width,$[this.hash].prevElementHeight=this.element.style.height,i=r.childNodes.length,n=0;n<i;n++)this.previousBody.push(r.childNodes[0]),r.removeChild(r.childNodes[0]);this.toolbar&&this.toolbar.element&&(this.toolbar.parentNode=this.toolbar.element.parentNode,this.toolbar.nextSibling=this.toolbar.element.nextSibling,r.appendChild(this.toolbar.element),e.addClass(this.toolbar.element,"fullpage")),e.addClass(this.element,"fullpage"),r.appendChild(this.element),this.element.style.height=e.getWindowSize().y+"px",this.element.style.width=e.getWindowSize().x+"px",this.toolbar&&this.toolbar.element&&(this.element.style.height=e.getElementSize(this.element).y-e.getElementSize(this.toolbar.element).y+"px"),$[this.hash].fullPage=!0,e.delegate(this,P)({})}else{for(this.element.style.margin=this.elementMargin,this.element.style.padding=this.elementPadding,o.margin=this.bodyMargin,s.margin=this.docMargin,o.padding=this.bodyPadding,s.padding=this.docPadding,o.width=this.bodyWidth,s.width=this.docWidth,o.height=this.bodyHeight,s.height=this.docHeight,r.removeChild(this.element),i=this.previousBody.length,n=0;n<i;n++)r.appendChild(this.previousBody.shift());e.removeClass(this.element,"fullpage"),$[this.hash].prevElementParent.insertBefore(this.element,$[this.hash].prevNextSibling),this.toolbar&&this.toolbar.element&&(r.removeChild(this.toolbar.element),e.removeClass(this.toolbar.element,"fullpage"),this.toolbar.parentNode.insertBefore(this.toolbar.element,this.toolbar.nextSibling),delete this.toolbar.parentNode,delete this.toolbar.nextSibling),this.element.style.width=$[this.hash].prevElementWidth,this.element.style.height=$[this.hash].prevElementHeight;var u=0,c=function(){e.setPageScroll(a.pageScroll);var t=e.getPageScroll();u++,(u<10&&t.x!==a.pageScroll.x||t.y!==a.pageScroll.y)&&e.requestAnimationFrame(c)};e.requestAnimationFrame(c),$[this.hash].fullPage=!1,e.delegate(this,R)({})}return this.navigator&&this.viewport&&this.navigator.update(this.viewport),this.raiseEvent("full-page",{fullPage:t}),this},setFullScreen:function(t){var i=this;if(!e.supportsFullScreen)return this.setFullPage(t);if(e.isFullScreen()===t)return this;var n={fullScreen:t,preventDefaultAction:!1};if(this.raiseEvent("pre-full-screen",n),n.preventDefaultAction)return this;if(t){if(this.setFullPage(!0),!this.isFullPage())return this;this.fullPageStyleWidth=this.element.style.width,this.fullPageStyleHeight=this.element.style.height,this.element.style.width="100%",this.element.style.height="100%";var r=function(){var t=e.isFullScreen();t||(e.removeEvent(document,e.fullScreenEventName,r),e.removeEvent(document,e.fullScreenErrorEventName,r),i.setFullPage(!1),i.isFullPage()&&(i.element.style.width=i.fullPageStyleWidth,i.element.style.height=i.fullPageStyleHeight)),i.navigator&&i.viewport&&i.navigator.update(i.viewport),i.raiseEvent("full-screen",{fullScreen:t})};e.addEvent(document,e.fullScreenEventName,r),e.addEvent(document,e.fullScreenErrorEventName,r),e.requestFullScreen(document.body)}else e.exitFullScreen();return this},isVisible:function(){return"hidden"!=this.container.style.visibility},setVisible:function(e){return this.container.style.visibility=e?"":"hidden",this.raiseEvent("visible",{visible:e}),this},addTiledImage:function(t){function n(e){for(var i=0;i<o._loadQueue.length;i++)if(o._loadQueue[i]===s){o._loadQueue.splice(i,1);break}0===o._loadQueue.length&&r(s),o.raiseEvent("add-item-failed",e),t.error&&t.error(e)}function r(e){o.collectionMode&&(o.world.arrange({immediately:e.options.collectionImmediately,rows:o.collectionRows,columns:o.collectionColumns,layout:o.collectionLayout,tileSize:o.collectionTileSize,tileMargin:o.collectionTileMargin}),o.world.setAutoRefigureSizes(!0))}e.console.assert(t,"[Viewer.addTiledImage] options is required"),e.console.assert(t.tileSource,"[Viewer.addTiledImage] options.tileSource is required"),e.console.assert(!t.replace||t.index>-1&&t.index<this.world.getItemCount(),"[Viewer.addTiledImage] if options.replace is used, options.index must be a valid index in Viewer.world");var o=this;t.replace&&(t.replaceItem=o.world.getItemAt(t.index)),this._hideMessage(),void 0===t.placeholderFillStyle&&(t.placeholderFillStyle=this.placeholderFillStyle),void 0===t.opacity&&(t.opacity=this.opacity),void 0===t.compositeOperation&&(t.compositeOperation=this.compositeOperation);var s={options:t};return e.isArray(t.tileSource)?void setTimeout(function(){n({message:"[Viewer.addTiledImage] Sequences can not be added; add them one at a time instead.",source:t.tileSource,options:t})}):(this._loadQueue.push(s),void i(this,t.tileSource,function(t){s.tileSource=t;for(var i,n,a;o._loadQueue.length&&(i=o._loadQueue[0],i.tileSource);){if(o._loadQueue.splice(0,1),i.options.replace){var l=o.world.getIndexOfItem(i.options.replaceItem);l!=-1&&(i.options.index=l),o.world.removeItem(i.options.replaceItem)}n=new e.TiledImage({viewer:o,source:i.tileSource,viewport:o.viewport,drawer:o.drawer,tileCache:o.tileCache,imageLoader:o.imageLoader,x:i.options.x,y:i.options.y,width:i.options.width,height:i.options.height,fitBounds:i.options.fitBounds,fitBoundsPlacement:i.options.fitBoundsPlacement,clip:i.options.clip,placeholderFillStyle:i.options.placeholderFillStyle,opacity:i.options.opacity,compositeOperation:i.options.compositeOperation,springStiffness:o.springStiffness,animationTime:o.animationTime,minZoomImageRatio:o.minZoomImageRatio,wrapHorizontal:o.wrapHorizontal,wrapVertical:o.wrapVertical,immediateRender:o.immediateRender,blendTime:o.blendTime,alwaysBlend:o.alwaysBlend,minPixelRatio:o.minPixelRatio,smoothTileEdgesMinZoom:o.smoothTileEdgesMinZoom,iOSDevice:o.iOSDevice,crossOriginPolicy:o.crossOriginPolicy,debugMode:o.debugMode}),o.collectionMode&&o.world.setAutoRefigureSizes(!1),o.world.addItem(n,{index:i.options.index}),0===o._loadQueue.length&&r(i),1!==o.world.getItemCount()||o.preserveViewport||o.viewport.goHome(!0),o.navigator&&(a=e.extend({},i.options,{replace:!1,originalTiledImage:n,tileSource:i.tileSource}),o.navigator.addTiledImage(a)),i.options.success&&i.options.success({item:n})}},function(e){e.options=t,n(e)}))},addSimpleImage:function(t){e.console.assert(t,"[Viewer.addSimpleImage] options is required"),e.console.assert(t.url,"[Viewer.addSimpleImage] options.url is required");var i=e.extend({},t,{tileSource:{type:"image",url:t.url}});delete i.url,this.addTiledImage(i)},addLayer:function(t){var i=this;e.console.error("[Viewer.addLayer] this function is deprecated; use Viewer.addTiledImage() instead.");var n=e.extend({},t,{success:function(e){i.raiseEvent("add-layer",{options:t,drawer:e.item})},error:function(e){i.raiseEvent("add-layer-failed",e)}});return this.addTiledImage(n),this},getLayerAtLevel:function(t){return e.console.error("[Viewer.getLayerAtLevel] this function is deprecated; use World.getItemAt() instead."),this.world.getItemAt(t)},getLevelOfLayer:function(t){return e.console.error("[Viewer.getLevelOfLayer] this function is deprecated; use World.getIndexOfItem() instead."),this.world.getIndexOfItem(t)},getLayersCount:function(){return e.console.error("[Viewer.getLayersCount] this function is deprecated; use World.getItemCount() instead."),this.world.getItemCount()},setLayerLevel:function(t,i){return e.console.error("[Viewer.setLayerLevel] this function is deprecated; use World.setItemIndex() instead."),this.world.setItemIndex(t,i)},removeLayer:function(t){return e.console.error("[Viewer.removeLayer] this function is deprecated; use World.removeItem() instead."),this.world.removeItem(t)},forceRedraw:function(){return $[this.hash].forceRedraw=!0,this},bindSequenceControls:function(){var t=e.delegate(this,c),i=e.delegate(this,h),n=e.delegate(this,W),r=e.delegate(this,q),o=this.navImages,s=!0;return this.showSequenceControl&&((this.previousButton||this.nextButton)&&(s=!1),this.previousButton=new e.Button({element:this.previousButton?e.getElement(this.previousButton):null,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,tooltip:e.getString("Tooltips.PreviousPage"),srcRest:D(this.prefixUrl,o.previous.REST),srcGroup:D(this.prefixUrl,o.previous.GROUP),srcHover:D(this.prefixUrl,o.previous.HOVER),srcDown:D(this.prefixUrl,o.previous.DOWN),onRelease:r,onFocus:t,onBlur:i}),this.nextButton=new e.Button({element:this.nextButton?e.getElement(this.nextButton):null,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,tooltip:e.getString("Tooltips.NextPage"),srcRest:D(this.prefixUrl,o.next.REST),srcGroup:D(this.prefixUrl,o.next.GROUP),srcHover:D(this.prefixUrl,o.next.HOVER),srcDown:D(this.prefixUrl,o.next.DOWN),onRelease:n,onFocus:t,onBlur:i}),this.navPrevNextWrap||this.previousButton.disable(),this.tileSources&&this.tileSources.length||this.nextButton.disable(),s&&(this.paging=new e.ButtonGroup({buttons:[this.previousButton,this.nextButton],clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold}),this.pagingControl=this.paging.element,this.toolbar?this.toolbar.addControl(this.pagingControl,{anchor:e.ControlAnchor.BOTTOM_RIGHT}):this.addControl(this.pagingControl,{anchor:this.sequenceControlAnchor||e.ControlAnchor.TOP_LEFT}))),this},bindStandardControls:function(){var t=e.delegate(this,k),i=e.delegate(this,z),n=e.delegate(this,A),r=e.delegate(this,N),o=e.delegate(this,F),s=e.delegate(this,H),a=e.delegate(this,V),l=e.delegate(this,j),u=e.delegate(this,U),d=e.delegate(this,c),p=e.delegate(this,h),f=this.navImages,m=[],g=!0;return this.showNavigationControl&&((this.zoomInButton||this.zoomOutButton||this.homeButton||this.fullPageButton||this.rotateLeftButton||this.rotateRightButton)&&(g=!1),this.showZoomControl&&(m.push(this.zoomInButton=new e.Button({element:this.zoomInButton?e.getElement(this.zoomInButton):null,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,tooltip:e.getString("Tooltips.ZoomIn"),srcRest:D(this.prefixUrl,f.zoomIn.REST),srcGroup:D(this.prefixUrl,f.zoomIn.GROUP),srcHover:D(this.prefixUrl,f.zoomIn.HOVER),srcDown:D(this.prefixUrl,f.zoomIn.DOWN),onPress:t,onRelease:i,onClick:n,onEnter:t,onExit:i,onFocus:d,onBlur:p})),m.push(this.zoomOutButton=new e.Button({element:this.zoomOutButton?e.getElement(this.zoomOutButton):null,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,tooltip:e.getString("Tooltips.ZoomOut"),srcRest:D(this.prefixUrl,f.zoomOut.REST),srcGroup:D(this.prefixUrl,f.zoomOut.GROUP),srcHover:D(this.prefixUrl,f.zoomOut.HOVER),srcDown:D(this.prefixUrl,f.zoomOut.DOWN),onPress:r,onRelease:i,onClick:o,onEnter:r,onExit:i,onFocus:d,onBlur:p}))),this.showHomeControl&&m.push(this.homeButton=new e.Button({element:this.homeButton?e.getElement(this.homeButton):null,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,tooltip:e.getString("Tooltips.Home"),srcRest:D(this.prefixUrl,f.home.REST),srcGroup:D(this.prefixUrl,f.home.GROUP),srcHover:D(this.prefixUrl,f.home.HOVER),srcDown:D(this.prefixUrl,f.home.DOWN),onRelease:s,onFocus:d,onBlur:p})),this.showFullPageControl&&m.push(this.fullPageButton=new e.Button({element:this.fullPageButton?e.getElement(this.fullPageButton):null,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,tooltip:e.getString("Tooltips.FullPage"),srcRest:D(this.prefixUrl,f.fullpage.REST),srcGroup:D(this.prefixUrl,f.fullpage.GROUP),srcHover:D(this.prefixUrl,f.fullpage.HOVER),srcDown:D(this.prefixUrl,f.fullpage.DOWN),onRelease:a,onFocus:d,onBlur:p})),this.showRotationControl&&(m.push(this.rotateLeftButton=new e.Button({element:this.rotateLeftButton?e.getElement(this.rotateLeftButton):null,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,tooltip:e.getString("Tooltips.RotateLeft"),srcRest:D(this.prefixUrl,f.rotateleft.REST),srcGroup:D(this.prefixUrl,f.rotateleft.GROUP),srcHover:D(this.prefixUrl,f.rotateleft.HOVER),srcDown:D(this.prefixUrl,f.rotateleft.DOWN),onRelease:l,onFocus:d,onBlur:p})),m.push(this.rotateRightButton=new e.Button({element:this.rotateRightButton?e.getElement(this.rotateRightButton):null,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,tooltip:e.getString("Tooltips.RotateRight"),srcRest:D(this.prefixUrl,f.rotateright.REST),srcGroup:D(this.prefixUrl,f.rotateright.GROUP),srcHover:D(this.prefixUrl,f.rotateright.HOVER),srcDown:D(this.prefixUrl,f.rotateright.DOWN),onRelease:u,onFocus:d,onBlur:p}))),g&&(this.buttons=new e.ButtonGroup({buttons:m,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold}),this.navControl=this.buttons.element,this.addHandler("open",e.delegate(this,L)),this.toolbar?this.toolbar.addControl(this.navControl,{anchor:e.ControlAnchor.TOP_LEFT}):this.addControl(this.navControl,{anchor:this.navigationControlAnchor||e.ControlAnchor.TOP_LEFT}))),this},currentPage:function(){return this._sequenceIndex},goToPage:function(e){return this.tileSources&&e>=0&&e<this.tileSources.length&&(this.raiseEvent("page",{page:e}),this._sequenceIndex=e,this._updateSequenceButtons(e),this.open(this.tileSources[e]),this.referenceStrip&&this.referenceStrip.setFocus(e)),this},addOverlay:function(t,i,o,s){var a;if(a=e.isPlainObject(t)?t:{element:t,location:i,placement:o,onDraw:s},t=e.getElement(a.element),r(this.currentOverlays,t)>=0)return this;var l=n(this,a);return this.currentOverlays.push(l),l.drawHTML(this.overlaysContainer,this.viewport),this.raiseEvent("add-overlay",{element:t,location:a.location,placement:a.placement}),this},updateOverlay:function(t,i,n){var o;return t=e.getElement(t),o=r(this.currentOverlays,t),o>=0&&(this.currentOverlays[o].update(i,n),$[this.hash].forceRedraw=!0,this.raiseEvent("update-overlay",{element:t,location:i,placement:n})),this},removeOverlay:function(t){var i;return t=e.getElement(t),i=r(this.currentOverlays,t),i>=0&&(this.currentOverlays[i].destroy(),this.currentOverlays.splice(i,1),$[this.hash].forceRedraw=!0,this.raiseEvent("remove-overlay",{element:t})),this},clearOverlays:function(){for(;this.currentOverlays.length>0;)this.currentOverlays.pop().destroy();return $[this.hash].forceRedraw=!0,this.raiseEvent("clear-overlay",{}),this},getOverlayById:function(t){var i;return t=e.getElement(t),i=r(this.currentOverlays,t),i>=0?this.currentOverlays[i]:null},_updateSequenceButtons:function(e){this.nextButton&&(this.tileSources&&this.tileSources.length-1!==e?this.nextButton.enable():this.navPrevNextWrap||this.nextButton.disable()),this.previousButton&&(e>0?this.previousButton.enable():this.navPrevNextWrap||this.previousButton.disable())},_showMessage:function(t){this._hideMessage();var i=e.makeNeutralElement("div");i.appendChild(document.createTextNode(t)),this.messageDiv=e.makeCenteredNode(i),e.addClass(this.messageDiv,"openseadragon-message"),this.container.appendChild(this.messageDiv)},_hideMessage:function(){var e=this.messageDiv;e&&(e.parentNode.removeChild(e),delete this.messageDiv)},gestureSettingsByDeviceType:function(e){switch(e){case"mouse":return this.gestureSettingsMouse;case"touch":return this.gestureSettingsTouch;case"pen":return this.gestureSettingsPen;default:return this.gestureSettingsUnknown}},_drawOverlays:function(){var e,t=this.currentOverlays.length;for(e=0;e<t;e++)this.currentOverlays[e].drawHTML(this.overlaysContainer,this.viewport)},_cancelPendingImages:function(){this._loadQueue=[]}})}(OpenSeadragon),function(e){function t(e){e.quick&&this.viewer.viewport&&(this.viewer.viewport.panTo(this.viewport.pointFromPixel(e.position)),this.viewer.viewport.applyConstraints())}function i(e){this.viewer.viewport&&(this.panHorizontal||(e.delta.x=0),this.panVertical||(e.delta.y=0),this.viewer.viewport.panBy(this.viewport.deltaPointsFromPixels(e.delta)))}function n(e){e.insideElementPressed&&this.viewer.viewport&&this.viewer.viewport.applyConstraints()}function r(e){return this.viewer.raiseEvent("navigator-scroll",{tracker:e.eventSource,position:e.position,scroll:e.scroll,shift:e.shift,originalEvent:e.originalEvent}),!1}function o(e,t){e.style.webkitTransform="rotate("+t+"deg)",e.style.mozTransform="rotate("+t+"deg)",e.style.msTransform="rotate("+t+"deg)",e.style.oTransform="rotate("+t+"deg)",e.style.transform="rotate("+t+"deg)"}e.Navigator=function(s){function a(e){o(h.displayRegionContainer,e),o(h.displayRegion,-e),h.viewport.setRotation(e)}var l,u,c=s.viewer,h=this;if(s.id?(this.element=document.getElementById(s.id),s.controlOptions={anchor:e.ControlAnchor.NONE,attachToViewer:!1,autoFade:!1}):(s.id="navigator-"+e.now(),this.element=e.makeNeutralElement("div"),s.controlOptions={anchor:e.ControlAnchor.TOP_RIGHT,attachToViewer:!0,autoFade:s.autoFade},s.position&&("BOTTOM_RIGHT"==s.position?s.controlOptions.anchor=e.ControlAnchor.BOTTOM_RIGHT:"BOTTOM_LEFT"==s.position?s.controlOptions.anchor=e.ControlAnchor.BOTTOM_LEFT:"TOP_RIGHT"==s.position?s.controlOptions.anchor=e.ControlAnchor.TOP_RIGHT:"TOP_LEFT"==s.position?s.controlOptions.anchor=e.ControlAnchor.TOP_LEFT:"ABSOLUTE"==s.position&&(s.controlOptions.anchor=e.ControlAnchor.ABSOLUTE,
	s.controlOptions.top=s.top,s.controlOptions.left=s.left,s.controlOptions.height=s.height,s.controlOptions.width=s.width))),this.element.id=s.id,this.element.className+=" navigator",s=e.extend(!0,{sizeRatio:e.DEFAULT_SETTINGS.navigatorSizeRatio},s,{element:this.element,tabIndex:-1,showNavigator:!1,mouseNavEnabled:!1,showNavigationControl:!1,showSequenceControl:!1,immediateRender:!0,blendTime:0,animationTime:0,autoResize:s.autoResize,minZoomImageRatio:1}),s.minPixelRatio=this.minPixelRatio=c.minPixelRatio,e.setElementTouchActionNone(this.element),this.borderWidth=2,this.fudge=new e.Point(1,1),this.totalBorderWidths=new e.Point(2*this.borderWidth,2*this.borderWidth).minus(this.fudge),s.controlOptions.anchor!=e.ControlAnchor.NONE&&!function(e,t){e.margin="0px",e.border=t+"px solid #555",e.padding="0px",e.background="#000",e.opacity=.8,e.overflow="hidden"}(this.element.style,this.borderWidth),this.displayRegion=e.makeNeutralElement("div"),this.displayRegion.id=this.element.id+"-displayregion",this.displayRegion.className="displayregion",function(e,t){e.position="relative",e.top="0px",e.left="0px",e.fontSize="0px",e.overflow="hidden",e.border=t+"px solid #900",e.margin="0px",e.padding="0px",e.background="transparent",e.float="left",e.cssFloat="left",e.styleFloat="left",e.zIndex=999999999,e.cursor="default"}(this.displayRegion.style,this.borderWidth),this.displayRegionContainer=e.makeNeutralElement("div"),this.displayRegionContainer.id=this.element.id+"-displayregioncontainer",this.displayRegionContainer.className="displayregioncontainer",this.displayRegionContainer.style.width="100%",this.displayRegionContainer.style.height="100%",c.addControl(this.element,s.controlOptions),this._resizeWithViewer=s.controlOptions.anchor!=e.ControlAnchor.ABSOLUTE&&s.controlOptions.anchor!=e.ControlAnchor.NONE,this._resizeWithViewer&&(s.width&&s.height?(this.element.style.height="number"==typeof s.height?s.height+"px":s.height,this.element.style.width="number"==typeof s.width?s.width+"px":s.width):(l=e.getElementSize(c.element),this.element.style.height=Math.round(l.y*s.sizeRatio)+"px",this.element.style.width=Math.round(l.x*s.sizeRatio)+"px",this.oldViewerSize=l),u=e.getElementSize(this.element),this.elementArea=u.x*u.y),this.oldContainerSize=new e.Point(0,0),e.Viewer.apply(this,[s]),this.displayRegionContainer.appendChild(this.displayRegion),this.element.getElementsByTagName("div")[0].appendChild(this.displayRegionContainer),s.navigatorRotate){var d=s.viewer.viewport?s.viewer.viewport.getRotation():s.viewer.degrees||0;a(d),s.viewer.addHandler("rotate",function(e){a(e.degrees)})}this.innerTracker.destroy(),this.innerTracker=new e.MouseTracker({element:this.element,dragHandler:e.delegate(this,i),clickHandler:e.delegate(this,t),releaseHandler:e.delegate(this,n),scrollHandler:e.delegate(this,r)}),this.addHandler("reset-size",function(){h.viewport&&h.viewport.goHome(!0)}),c.world.addHandler("item-index-change",function(e){var t=h.world.getItemAt(e.previousIndex);h.world.setItemIndex(t,e.newIndex)}),c.world.addHandler("remove-item",function(e){var t=e.item,i=h._getMatchingItem(t);i&&h.world.removeItem(i)}),this.update(c.viewport)},e.extend(e.Navigator.prototype,e.EventSource.prototype,e.Viewer.prototype,{updateSize:function(){if(this.viewport){var t=new e.Point(0===this.container.clientWidth?1:this.container.clientWidth,0===this.container.clientHeight?1:this.container.clientHeight);t.equals(this.oldContainerSize)||(this.viewport.resize(t,!0),this.viewport.goHome(!0),this.oldContainerSize=t,this.drawer.clear(),this.world.draw())}},update:function(t){var i,n,r,o,s,a;if(i=e.getElementSize(this.viewer.element),this._resizeWithViewer&&i.x&&i.y&&!i.equals(this.oldViewerSize)&&(this.oldViewerSize=i,this.maintainSizeRatio||!this.elementArea?(n=i.x*this.sizeRatio,r=i.y*this.sizeRatio):(n=Math.sqrt(this.elementArea*(i.x/i.y)),r=this.elementArea/n),this.element.style.width=Math.round(n)+"px",this.element.style.height=Math.round(r)+"px",this.elementArea||(this.elementArea=n*r),this.updateSize()),t&&this.viewport){o=t.getBoundsNoRotate(!0),s=this.viewport.pixelFromPointNoRotate(o.getTopLeft(),!1),a=this.viewport.pixelFromPointNoRotate(o.getBottomRight(),!1).minus(this.totalBorderWidths);var l=this.displayRegion.style;l.display=this.world.getItemCount()?"block":"none",l.top=Math.round(s.y)+"px",l.left=Math.round(s.x)+"px";var u=Math.abs(s.x-a.x),c=Math.abs(s.y-a.y);l.width=Math.round(Math.max(u,0))+"px",l.height=Math.round(Math.max(c,0))+"px"}},addTiledImage:function(t){var i=this,n=t.originalTiledImage;delete t.original;var r=e.extend({},t,{success:function(e){var t=e.item;t._originalForNavigator=n,i._matchBounds(t,n,!0),n.addHandler("bounds-change",function(){i._matchBounds(t,n)})}});return e.Viewer.prototype.addTiledImage.apply(this,[r])},_getMatchingItem:function(e){for(var t,i=this.world.getItemCount(),n=0;n<i;n++)if(t=this.world.getItemAt(n),t._originalForNavigator===e)return t;return null},_matchBounds:function(e,t,i){var n=t.getBounds();e.setPosition(n.getTopLeft(),i),e.setWidth(n.width,i)}})}(OpenSeadragon),function(e){var t={Errors:{Dzc:"Sorry, we don't support Deep Zoom Collections!",Dzi:"Hmm, this doesn't appear to be a valid Deep Zoom Image.",Xml:"Hmm, this doesn't appear to be a valid Deep Zoom Image.",ImageFormat:"Sorry, we don't support {0}-based Deep Zoom Images.",Security:"It looks like a security restriction stopped us from loading this Deep Zoom Image.",Status:"This space unintentionally left blank ({0} {1}).",OpenFailed:"Unable to open {0}: {1}"},Tooltips:{FullPage:"Toggle full page",Home:"Go home",ZoomIn:"Zoom in",ZoomOut:"Zoom out",NextPage:"Next page",PreviousPage:"Previous page",RotateLeft:"Rotate left",RotateRight:"Rotate right"}};e.extend(e,{getString:function(i){var n,r=i.split("."),o=null,s=arguments,a=t;for(n=0;n<r.length-1;n++)a=a[r[n]]||{};return o=a[r[n]],"string"!=typeof o&&(e.console.debug("Untranslated source string:",i),o=""),o.replace(/\{\d+\}/g,function(e){var t=parseInt(e.match(/\d+/),10)+1;return t<s.length?s[t]:""})},setString:function(e,i){var n,r=e.split("."),o=t;for(n=0;n<r.length-1;n++)o[r[n]]||(o[r[n]]={}),o=o[r[n]];o[r[n]]=i}})}(OpenSeadragon),function(e){e.Point=function(e,t){this.x="number"==typeof e?e:0,this.y="number"==typeof t?t:0},e.Point.prototype={clone:function(){return new e.Point(this.x,this.y)},plus:function(t){return new e.Point(this.x+t.x,this.y+t.y)},minus:function(t){return new e.Point(this.x-t.x,this.y-t.y)},times:function(t){return new e.Point(this.x*t,this.y*t)},divide:function(t){return new e.Point(this.x/t,this.y/t)},negate:function(){return new e.Point(-this.x,-this.y)},distanceTo:function(e){return Math.sqrt(Math.pow(this.x-e.x,2)+Math.pow(this.y-e.y,2))},apply:function(t){return new e.Point(t(this.x),t(this.y))},equals:function(t){return t instanceof e.Point&&this.x===t.x&&this.y===t.y},rotate:function(t,i){i=i||new e.Point(0,0);var n,r;if(t%90===0){var o=t%360;switch(o<0&&(o+=360),o){case 0:n=1,r=0;break;case 90:n=0,r=1;break;case 180:n=-1,r=0;break;case 270:n=0,r=-1}}else{var s=t*Math.PI/180;n=Math.cos(s),r=Math.sin(s)}var a=n*(this.x-i.x)-r*(this.y-i.y)+i.x,l=r*(this.x-i.x)+n*(this.y-i.y)+i.y;return new e.Point(a,l)},toString:function(){return"("+Math.round(100*this.x)/100+","+Math.round(100*this.y)/100+")"}}}(OpenSeadragon),function(e){function t(t){var i,n,r=t.responseText,o=t.status;if(!t)throw new Error(e.getString("Errors.Security"));if(200!==t.status&&0!==t.status)throw o=t.status,i=404==o?"Not Found":t.statusText,new Error(e.getString("Errors.Status",o,i));if(r.match(/\s*<.*/))try{n=t.responseXML&&t.responseXML.documentElement?t.responseXML:e.parseXml(r)}catch(e){n=t.responseText}else n=r.match(/\s*[\{\[].*/)?e.parseJSON(r):r;return n}e.TileSource=function(t,i,n,r,o,s){var a,l,u=this,c=arguments;if(a=e.isPlainObject(t)?t:{width:c[0],height:c[1],tileSize:c[2],tileOverlap:c[3],minLevel:c[4],maxLevel:c[5]},e.EventSource.call(this),e.extend(!0,this,a),!this.success)for(l=0;l<arguments.length;l++)if(e.isFunction(arguments[l])){this.success=arguments[l];break}this.success&&this.addHandler("ready",function(e){u.success(e)}),"string"==e.type(arguments[0])&&(this.url=arguments[0]),this.url?(this.aspectRatio=1,this.dimensions=new e.Point(10,10),this._tileWidth=0,this._tileHeight=0,this.tileOverlap=0,this.minLevel=0,this.maxLevel=0,this.ready=!1,this.getImageInfo(this.url)):(this.ready=!0,this.aspectRatio=a.width&&a.height?a.width/a.height:1,this.dimensions=new e.Point(a.width,a.height),this.tileSize?(this._tileWidth=this._tileHeight=this.tileSize,delete this.tileSize):(this.tileWidth?(this._tileWidth=this.tileWidth,delete this.tileWidth):this._tileWidth=0,this.tileHeight?(this._tileHeight=this.tileHeight,delete this.tileHeight):this._tileHeight=0),this.tileOverlap=a.tileOverlap?a.tileOverlap:0,this.minLevel=a.minLevel?a.minLevel:0,this.maxLevel=void 0!==a.maxLevel&&null!==a.maxLevel?a.maxLevel:a.width&&a.height?Math.ceil(Math.log(Math.max(a.width,a.height))/Math.log(2)):0,this.success&&e.isFunction(this.success)&&this.success(this))},e.TileSource.prototype={getTileSize:function(t){return e.console.error("[TileSource.getTileSize] is deprecated.Use TileSource.getTileWidth() and TileSource.getTileHeight() instead"),this._tileWidth},getTileWidth:function(e){return this._tileWidth?this._tileWidth:this.getTileSize(e)},getTileHeight:function(e){return this._tileHeight?this._tileHeight:this.getTileSize(e)},getLevelScale:function(e){var t,i={};for(t=0;t<=this.maxLevel;t++)i[t]=1/Math.pow(2,this.maxLevel-t);return this.getLevelScale=function(e){return i[e]},this.getLevelScale(e)},getNumTiles:function(t){var i=this.getLevelScale(t),n=Math.ceil(i*this.dimensions.x/this.getTileWidth(t)),r=Math.ceil(i*this.dimensions.y/this.getTileHeight(t));return new e.Point(n,r)},getPixelRatio:function(t){var i=this.dimensions.times(this.getLevelScale(t)),n=1/i.x,r=1/i.y;return new e.Point(n,r)},getClosestLevel:function(t){var i,n,r;for(i=this.minLevel;i<this.maxLevel&&(r=this.getNumTiles(i),n=new e.Point(Math.floor(t.x/this.getTileWidth(i)),Math.floor(t.y/this.getTileHeight(i))),!(r.x+1>=n.x&&r.y+1>=n.y));i++);return Math.max(0,i-1)},getTileAtPoint:function(t,i){var n=i.times(this.dimensions.x).times(this.getLevelScale(t)),r=Math.floor(n.x/this.getTileWidth(t)),o=Math.floor(n.y/this.getTileHeight(t));return new e.Point(r,o)},getTileBounds:function(t,i,n){var r=this.dimensions.times(this.getLevelScale(t)),o=this.getTileWidth(t),s=this.getTileHeight(t),a=0===i?0:o*i-this.tileOverlap,l=0===n?0:s*n-this.tileOverlap,u=o+(0===i?1:2)*this.tileOverlap,c=s+(0===n?1:2)*this.tileOverlap,h=1/r.x;return u=Math.min(u,r.x-a),c=Math.min(c,r.y-l),new e.Rect(a*h,l*h,u*h,c*h)},getImageInfo:function(i){var n,r,o,s,a,l,u,c=this;i&&(a=i.split("/"),l=a[a.length-1],u=l.lastIndexOf("."),u>-1&&(a[a.length-1]=l.slice(0,u))),r=function(t){"string"==typeof t&&(t=e.parseXml(t));var n=e.TileSource.determineType(c,t,i);return n?(s=n.prototype.configure.apply(c,[t,i]),void 0===s.ajaxWithCredentials&&(s.ajaxWithCredentials=c.ajaxWithCredentials),o=new n(s),c.ready=!0,void c.raiseEvent("ready",{tileSource:o})):void c.raiseEvent("open-failed",{message:"Unable to load TileSource",source:i})},i.match(/\.js$/)?(n=i.split("/").pop().replace(".js",""),e.jsonp({url:i,async:!1,callbackName:n,callback:r})):e.makeAjaxRequest({url:i,withCredentials:this.ajaxWithCredentials,success:function(e){var i=t(e);r(i)},error:function(e,t){var n;try{n="HTTP "+e.status+" attempting to load TileSource"}catch(e){var r;r="undefined"!=typeof t&&t.toString?t.toString():"Unknown error",n=r+" attempting to load TileSource"}c.raiseEvent("open-failed",{message:n,source:i})}})},supports:function(e,t){return!1},configure:function(e,t){throw new Error("Method not implemented.")},getTileUrl:function(e,t,i){throw new Error("Method not implemented.")},tileExists:function(e,t,i){var n=this.getNumTiles(e);return e>=this.minLevel&&e<=this.maxLevel&&t>=0&&i>=0&&t<n.x&&i<n.y}},e.extend(!0,e.TileSource.prototype,e.EventSource.prototype),e.TileSource.determineType=function(t,i,n){var r;for(r in OpenSeadragon)if(r.match(/.+TileSource$/)&&e.isFunction(OpenSeadragon[r])&&e.isFunction(OpenSeadragon[r].prototype.supports)&&OpenSeadragon[r].prototype.supports.call(t,i,n))return OpenSeadragon[r];e.console.error("No TileSource was able to open %s %s",n,i)}}(OpenSeadragon),function(e){function t(t,n){if(!n||!n.documentElement)throw new Error(e.getString("Errors.Xml"));var r,o,s,a,l,u=n.documentElement,c=u.localName||u.tagName,h=n.documentElement.namespaceURI,d=null,p=[];if("Image"==c)try{if(a=u.getElementsByTagName("Size")[0],void 0===a&&(a=u.getElementsByTagNameNS(h,"Size")[0]),d={Image:{xmlns:"http://schemas.microsoft.com/deepzoom/2008",Url:u.getAttribute("Url"),Format:u.getAttribute("Format"),DisplayRect:null,Overlap:parseInt(u.getAttribute("Overlap"),10),TileSize:parseInt(u.getAttribute("TileSize"),10),Size:{Height:parseInt(a.getAttribute("Height"),10),Width:parseInt(a.getAttribute("Width"),10)}}},!e.imageFormatSupported(d.Image.Format))throw new Error(e.getString("Errors.ImageFormat",d.Image.Format.toUpperCase()));for(r=u.getElementsByTagName("DisplayRect"),void 0===r&&(r=u.getElementsByTagNameNS(h,"DisplayRect")[0]),l=0;l<r.length;l++)o=r[l],s=o.getElementsByTagName("Rect")[0],void 0===s&&(s=o.getElementsByTagNameNS(h,"Rect")[0]),p.push({Rect:{X:parseInt(s.getAttribute("X"),10),Y:parseInt(s.getAttribute("Y"),10),Width:parseInt(s.getAttribute("Width"),10),Height:parseInt(s.getAttribute("Height"),10),MinLevel:parseInt(o.getAttribute("MinLevel"),10),MaxLevel:parseInt(o.getAttribute("MaxLevel"),10)}});return p.length&&(d.Image.DisplayRect=p),i(t,d)}catch(t){throw t instanceof Error?t:new Error(e.getString("Errors.Dzi"))}else{if("Collection"==c)throw new Error(e.getString("Errors.Dzc"));if("Error"==c){var f=u.getElementsByTagName("Message")[0],m=f.firstChild.nodeValue;throw new Error(m)}}throw new Error(e.getString("Errors.Dzi"))}function i(t,i){var n,r,o=i.Image,s=o.Url,a=o.Format,l=o.Size,u=o.DisplayRect||[],c=parseInt(l.Width,10),h=parseInt(l.Height,10),d=parseInt(o.TileSize,10),p=parseInt(o.Overlap,10),f=[];for(r=0;r<u.length;r++)n=u[r].Rect,f.push(new e.DisplayRect(parseInt(n.X,10),parseInt(n.Y,10),parseInt(n.Width,10),parseInt(n.Height,10),parseInt(n.MinLevel,10),parseInt(n.MaxLevel,10)));return e.extend(!0,{width:c,height:h,tileSize:d,tileOverlap:p,minLevel:null,maxLevel:null,tilesUrl:s,fileFormat:a,displayRects:f},i)}e.DziTileSource=function(t,i,n,r,o,s,a,l,u){var c,h,d,p;if(p=e.isPlainObject(t)?t:{width:arguments[0],height:arguments[1],tileSize:arguments[2],tileOverlap:arguments[3],tilesUrl:arguments[4],fileFormat:arguments[5],displayRects:arguments[6],minLevel:arguments[7],maxLevel:arguments[8]},this._levelRects={},this.tilesUrl=p.tilesUrl,this.fileFormat=p.fileFormat,this.displayRects=p.displayRects,this.displayRects)for(c=this.displayRects.length-1;c>=0;c--)for(h=this.displayRects[c],d=h.minLevel;d<=h.maxLevel;d++)this._levelRects[d]||(this._levelRects[d]=[]),this._levelRects[d].push(h);e.TileSource.apply(this,[p])},e.extend(e.DziTileSource.prototype,e.TileSource.prototype,{supports:function(e,t){var i;return e.Image?i=e.Image.xmlns:e.documentElement&&("Image"!=e.documentElement.localName&&"Image"!=e.documentElement.tagName||(i=e.documentElement.namespaceURI)),"http://schemas.microsoft.com/deepzoom/2008"==i||"http://schemas.microsoft.com/deepzoom/2009"==i},configure:function(n,r){var o;return o=e.isPlainObject(n)?i(this,n):t(this,n),r&&!o.tilesUrl&&(o.tilesUrl=r.replace(/([^\/]+?)(\.(dzi|xml|js))?\/?(\?.*)?$/,"$1_files/"),r.search(/\.(dzi|xml|js)\?/)!=-1?o.queryParams=r.match(/\?.*/):o.queryParams=""),o},getTileUrl:function(e,t,i){return[this.tilesUrl,e,"/",t,"_",i,".",this.fileFormat,this.queryParams].join("")},tileExists:function(e,t,i){var n,r,o,s,a,l,u,c=this._levelRects[e];if(!c||!c.length)return!0;for(u=c.length-1;u>=0;u--)if(n=c[u],!(e<n.minLevel||e>n.maxLevel)&&(r=this.getLevelScale(e),o=n.x*r,s=n.y*r,a=o+n.width*r,l=s+n.height*r,o=Math.floor(o/this.tileSize),s=Math.floor(s/this.tileSize),a=Math.ceil(a/this.tileSize),l=Math.ceil(l/this.tileSize),o<=t&&t<a&&s<=i&&i<l))return!0;return!1}})}(OpenSeadragon),function(e){function t(e){var t=["http://library.stanford.edu/iiif/image-api/compliance.html#level0","http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level0","http://iiif.io/api/image/2/level0.json"],i=t.indexOf(e[0])!=-1;return!i||e.indexOf("sizeByW")!=-1}function i(e){for(var t=[],i=0;i<e.sizes.length;i++)t.push({url:e["@id"]+"/full/"+e.sizes[i].width+",/0/default.jpg",width:e.sizes[i].width,height:e.sizes[i].height});return t.sort(function(e,t){return e.width-t.width})}function n(t){if(!t||!t.documentElement)throw new Error(e.getString("Errors.Xml"));var i=t.documentElement,n=i.tagName,o=null;if("info"==n)try{return o={},r(i,o),o}catch(t){throw t instanceof Error?t:new Error(e.getString("Errors.IIIF"))}throw new Error(e.getString("Errors.IIIF"))}function r(t,i,n){var o,s;if(3==t.nodeType&&n)s=t.nodeValue.trim(),s.match(/^\d*$/)&&(s=Number(s)),i[n]?(e.isArray(i[n])||(i[n]=[i[n]]),i[n].push(s)):i[n]=s;else if(1==t.nodeType)for(o=0;o<t.childNodes.length;o++)r(t.childNodes[o],i,t.nodeName)}e.IIIFTileSource=function(n){if(e.extend(!0,this,n),!(this.height&&this.width&&this["@id"]))throw new Error("IIIF required parameters not provided.");if(n.tileSizePerScaleFactor={},this.tile_width&&this.tile_height)n.tileWidth=this.tile_width,n.tileHeight=this.tile_height;else if(this.tile_width)n.tileSize=this.tile_width;else if(this.tile_height)n.tileSize=this.tile_height;else if(this.tiles)if(1==this.tiles.length)n.tileWidth=this.tiles[0].width,n.tileHeight=this.tiles[0].height||this.tiles[0].width,this.scale_factors=this.tiles[0].scaleFactors;else{this.scale_factors=[];for(var r=0;r<this.tiles.length;r++)for(var o=0;o<this.tiles[r].scaleFactors.length;o++){var s=this.tiles[r].scaleFactors[o];this.scale_factors.push(s),n.tileSizePerScaleFactor[s]={width:this.tiles[r].width,height:this.tiles[r].height||this.tiles[r].width}}}else if(t(n.profile)){for(var a=Math.min(this.height,this.width),l=[256,512,1024],u=[],c=0;c<l.length;c++)l[c]<=a&&u.push(l[c]);u.length>0?n.tileSize=Math.max.apply(null,u):n.tileSize=a}else this.sizes&&this.sizes.length>0?(this.emulateLegacyImagePyramid=!0,n.levels=i(this),e.extend(!0,n,{width:n.levels[n.levels.length-1].width,height:n.levels[n.levels.length-1].height,tileSize:Math.max(n.height,n.width),tileOverlap:0,minLevel:0,maxLevel:n.levels.length-1}),this.levels=n.levels):e.console.error("Nothing in the info.json to construct image pyramids from");n.maxLevel||this.emulateLegacyImagePyramid||(this.scale_factors?n.maxLevel=Math.floor(Math.pow(Math.max.apply(null,this.scale_factors),.5)):n.maxLevel=Number(Math.ceil(Math.log(Math.max(this.width,this.height),2)))),e.TileSource.apply(this,[n])},e.extend(e.IIIFTileSource.prototype,e.TileSource.prototype,{supports:function(e,t){return!(!e.protocol||"http://iiif.io/api/image"!=e.protocol)||(!(!e["@context"]||"http://library.stanford.edu/iiif/image-api/1.1/context.json"!=e["@context"]&&"http://iiif.io/api/image/1/context.json"!=e["@context"])||(!(!e.profile||0!==e.profile.indexOf("http://library.stanford.edu/iiif/image-api/compliance.html"))||(!!(e.identifier&&e.width&&e.height)||!(!e.documentElement||"info"!=e.documentElement.tagName||"http://library.stanford.edu/iiif/image-api/ns/"!=e.documentElement.namespaceURI))))},configure:function(t,i){if(e.isPlainObject(t))return t["@context"]?t:(t["@context"]="http://iiif.io/api/image/1.0/context.json",t["@id"]=i.replace("/info.json",""),t);var r=n(t);return r["@context"]="http://iiif.io/api/image/1.0/context.json",r["@id"]=i.replace("/info.xml",""),r},getTileWidth:function(t){if(this.emulateLegacyImagePyramid)return e.TileSource.prototype.getTileWidth.call(this,t);var i=Math.pow(2,this.maxLevel-t);return this.tileSizePerScaleFactor&&this.tileSizePerScaleFactor[i]?this.tileSizePerScaleFactor[i].width:this._tileWidth},getTileHeight:function(t){if(this.emulateLegacyImagePyramid)return e.TileSource.prototype.getTileHeight.call(this,t);var i=Math.pow(2,this.maxLevel-t);return this.tileSizePerScaleFactor&&this.tileSizePerScaleFactor[i]?this.tileSizePerScaleFactor[i].height:this._tileHeight},getLevelScale:function(t){if(this.emulateLegacyImagePyramid){var i=NaN;return this.levels.length>0&&t>=this.minLevel&&t<=this.maxLevel&&(i=this.levels[t].width/this.levels[this.maxLevel].width),i}return e.TileSource.prototype.getLevelScale.call(this,t)},getNumTiles:function(t){if(this.emulateLegacyImagePyramid){var i=this.getLevelScale(t);return i?new e.Point(1,1):new e.Point(0,0)}return e.TileSource.prototype.getNumTiles.call(this,t)},getTileAtPoint:function(t,i){return this.emulateLegacyImagePyramid?new e.Point(0,0):e.TileSource.prototype.getTileAtPoint.call(this,t,i)},getTileUrl:function(e,t,i){if(this.emulateLegacyImagePyramid){var n=null;return this.levels.length>0&&e>=this.minLevel&&e<=this.maxLevel&&(n=this.levels[e].url),n}var r,o,s,a,l,u,c,h,d,p,f,m,g="0",v=Math.pow(.5,this.maxLevel-e),y=Math.ceil(this.width*v),w=Math.ceil(this.height*v);return r=this.getTileWidth(e),o=this.getTileHeight(e),s=Math.ceil(r/v),a=Math.ceil(o/v),f=this["@context"].indexOf("/1.0/context.json")>-1||this["@context"].indexOf("/1.1/context.json")>-1||this["@context"].indexOf("/1/context.json")>-1?"native.jpg":"default.jpg",y<r&&w<o?(p=y+",",l="full"):(u=t*s,c=i*a,h=Math.min(s,this.width-u),d=Math.min(a,this.height-c),p=Math.ceil(h*v)+",",l=[u,c,h,d].join(",")),m=[this["@id"],l,p,g,f].join("/")}})}(OpenSeadragon),function(e){e.OsmTileSource=function(t,i,n,r,o){var s;s=e.isPlainObject(t)?t:{width:arguments[0],height:arguments[1],tileSize:arguments[2],tileOverlap:arguments[3],tilesUrl:arguments[4]},s.width&&s.height||(s.width=65572864,s.height=65572864),s.tileSize||(s.tileSize=256,s.tileOverlap=0),s.tilesUrl||(s.tilesUrl="http://tile.openstreetmap.org/"),s.minLevel=8,e.TileSource.apply(this,[s])},e.extend(e.OsmTileSource.prototype,e.TileSource.prototype,{supports:function(e,t){return e.type&&"openstreetmaps"==e.type},configure:function(e,t){return e},getTileUrl:function(e,t,i){return this.tilesUrl+(e-8)+"/"+t+"/"+i+".png"}})}(OpenSeadragon),function(e){e.TmsTileSource=function(t,i,n,r,o){var s;s=e.isPlainObject(t)?t:{width:arguments[0],height:arguments[1],tileSize:arguments[2],tileOverlap:arguments[3],tilesUrl:arguments[4]};var a,l=256*Math.ceil(s.width/256),u=256*Math.ceil(s.height/256);a=l>u?l/256:u/256,s.maxLevel=Math.ceil(Math.log(a)/Math.log(2))-1,s.tileSize=256,s.width=l,s.height=u,e.TileSource.apply(this,[s])},e.extend(e.TmsTileSource.prototype,e.TileSource.prototype,{supports:function(e,t){return e.type&&"tiledmapservice"==e.type},configure:function(e,t){return e},getTileUrl:function(e,t,i){var n=this.getNumTiles(e).y-1;return this.tilesUrl+e+"/"+t+"/"+(n-i)+".png"}})}(OpenSeadragon),function(e){function t(t){var i,n,r=[];for(n=0;n<t.length;n++)i=t[n],i.height&&i.width&&i.url&&(i.url.toLowerCase().match(/^.*\.(png|jpg|jpeg|gif)(?:\?.*)?$/)||i.mimetype&&i.mimetype.toLowerCase().match(/^.*\/(png|jpg|jpeg|gif)$/))?r.push({url:i.url,width:Number(i.width),height:Number(i.height)}):e.console.error("Unsupported image format: %s",i.url?i.url:"<no URL>");return r.sort(function(e,t){return e.height-t.height})}function i(t,i){if(!i||!i.documentElement)throw new Error(e.getString("Errors.Xml"));var r,o,s=i.documentElement,a=s.tagName,l=null,u=[];if("image"==a)try{for(l={type:s.getAttribute("type"),levels:[]},u=s.getElementsByTagName("level"),o=0;o<u.length;o++)r=u[o],l.levels.push({url:r.getAttribute("url"),width:parseInt(r.getAttribute("width"),10),height:parseInt(r.getAttribute("height"),10)});return n(t,l)}catch(e){throw e instanceof Error?e:new Error("Unknown error parsing Legacy Image Pyramid XML.")}else{if("collection"==a)throw new Error("Legacy Image Pyramid Collections not yet supported.");if("error"==a)throw new Error("Error: "+i)}throw new Error("Unknown element "+a)}function n(e,t){return t.levels}e.LegacyTileSource=function(i){var n,r,o;e.isArray(i)&&(n={type:"legacy-image-pyramid",levels:i}),n.levels=t(n.levels),n.levels.length>0?(r=n.levels[n.levels.length-1].width,o=n.levels[n.levels.length-1].height):(r=0,o=0,e.console.error("No supported image formats found")),e.extend(!0,n,{width:r,height:o,tileSize:Math.max(o,r),tileOverlap:0,minLevel:0,maxLevel:n.levels.length>0?n.levels.length-1:0}),e.TileSource.apply(this,[n]),this.levels=n.levels},e.extend(e.LegacyTileSource.prototype,e.TileSource.prototype,{supports:function(e,t){return e.type&&"legacy-image-pyramid"==e.type||e.documentElement&&"legacy-image-pyramid"==e.documentElement.getAttribute("type")},configure:function(t,r){var o;return o=e.isPlainObject(t)?n(this,t):i(this,t)},getLevelScale:function(e){var t=NaN;return this.levels.length>0&&e>=this.minLevel&&e<=this.maxLevel&&(t=this.levels[e].width/this.levels[this.maxLevel].width),t},getNumTiles:function(t){var i=this.getLevelScale(t);return i?new e.Point(1,1):new e.Point(0,0)},getTileAtPoint:function(t,i){return new e.Point(0,0)},getTileUrl:function(e,t,i){var n=null;return this.levels.length>0&&e>=this.minLevel&&e<=this.maxLevel&&(n=this.levels[e].url),n}})}(OpenSeadragon),function(e){e.ImageTileSource=function(t){t=e.extend({buildPyramid:!0,crossOriginPolicy:!1,ajaxWithCredentials:!1,useCanvas:!0},t),e.TileSource.apply(this,[t])},e.extend(e.ImageTileSource.prototype,e.TileSource.prototype,{supports:function(e,t){return e.type&&"image"===e.type},configure:function(e,t){return e},getImageInfo:function(t){var i=this._image=new Image,n=this;this.crossOriginPolicy&&(i.crossOrigin=this.crossOriginPolicy),this.ajaxWithCredentials&&(i.useCredentials=this.ajaxWithCredentials),e.addEvent(i,"load",function(){n.width=i.naturalWidth,n.height=i.naturalHeight,n.aspectRatio=n.width/n.height,n.dimensions=new e.Point(n.width,n.height),n._tileWidth=n.width,n._tileHeight=n.height,n.tileOverlap=0,n.minLevel=0,n.levels=n._buildLevels(),n.maxLevel=n.levels.length-1,n.ready=!0,n.raiseEvent("ready",{tileSource:n})}),e.addEvent(i,"error",function(){n.raiseEvent("open-failed",{message:"Error loading image at "+t,source:t})}),i.src=t},getLevelScale:function(e){var t=NaN;return e>=this.minLevel&&e<=this.maxLevel&&(t=this.levels[e].width/this.levels[this.maxLevel].width),t},getNumTiles:function(t){var i=this.getLevelScale(t);return i?new e.Point(1,1):new e.Point(0,0)},getTileAtPoint:function(t,i){return new e.Point(0,0)},getTileUrl:function(e,t,i){var n=null;return e>=this.minLevel&&e<=this.maxLevel&&(n=this.levels[e].url),n},getContext2D:function(e,t,i){var n=null;return e>=this.minLevel&&e<=this.maxLevel&&(n=this.levels[e].context2D),n},_buildLevels:function(){var t=[{url:this._image.src,width:this._image.naturalWidth,height:this._image.naturalHeight}];if(!this.buildPyramid||!e.supportsCanvas||!this.useCanvas)return delete this._image,t;var i=this._image.naturalWidth,n=this._image.naturalHeight,r=document.createElement("canvas"),o=r.getContext("2d");if(r.width=i,r.height=n,o.drawImage(this._image,0,0,i,n),t[0].context2D=o,delete this._image,e.isCanvasTainted(r))return t;for(;i>=2&&n>=2;){i=Math.floor(i/2),n=Math.floor(n/2);var s=document.createElement("canvas"),a=s.getContext("2d");s.width=i,s.height=n,a.drawImage(r,0,0,i,n),t.splice(0,0,{context2D:a,width:i,height:n}),r=s,o=a}return t}})}(OpenSeadragon),function(e){e.TileSourceCollection=function(t,i,n,r){e.console.error("TileSourceCollection is deprecated; use World instead")}}(OpenSeadragon),function(e){function t(t){e.requestAnimationFrame(function(){i(t)})}function i(i){var n,r,o;i.shouldFade&&(n=e.now(),r=n-i.fadeBeginTime,o=1-r/i.fadeLength,o=Math.min(1,o),o=Math.max(0,o),i.imgGroup&&e.setElementOpacity(i.imgGroup,o,!0),o>0&&t(i))}function n(i){i.shouldFade=!0,i.fadeBeginTime=e.now()+i.fadeDelay,window.setTimeout(function(){t(i)},i.fadeDelay)}function r(t){t.shouldFade=!1,t.imgGroup&&e.setElementOpacity(t.imgGroup,1,!0)}function o(t,i){t.element.disabled||(i>=e.ButtonState.GROUP&&t.currentState==e.ButtonState.REST&&(r(t),t.currentState=e.ButtonState.GROUP),i>=e.ButtonState.HOVER&&t.currentState==e.ButtonState.GROUP&&(t.imgHover&&(t.imgHover.style.visibility=""),t.currentState=e.ButtonState.HOVER),i>=e.ButtonState.DOWN&&t.currentState==e.ButtonState.HOVER&&(t.imgDown&&(t.imgDown.style.visibility=""),t.currentState=e.ButtonState.DOWN))}function s(t,i){t.element.disabled||(i<=e.ButtonState.HOVER&&t.currentState==e.ButtonState.DOWN&&(t.imgDown&&(t.imgDown.style.visibility="hidden"),t.currentState=e.ButtonState.HOVER),i<=e.ButtonState.GROUP&&t.currentState==e.ButtonState.HOVER&&(t.imgHover&&(t.imgHover.style.visibility="hidden"),t.currentState=e.ButtonState.GROUP),i<=e.ButtonState.REST&&t.currentState==e.ButtonState.GROUP&&(n(t),t.currentState=e.ButtonState.REST))}e.ButtonState={REST:0,GROUP:1,HOVER:2,DOWN:3},e.Button=function(t){var i=this;e.EventSource.call(this),e.extend(!0,this,{tooltip:null,srcRest:null,srcGroup:null,srcHover:null,srcDown:null,clickTimeThreshold:e.DEFAULT_SETTINGS.clickTimeThreshold,clickDistThreshold:e.DEFAULT_SETTINGS.clickDistThreshold,fadeDelay:0,fadeLength:2e3,onPress:null,onRelease:null,onClick:null,onEnter:null,onExit:null,onFocus:null,onBlur:null},t),this.element=t.element||e.makeNeutralElement("div"),t.element||(this.imgRest=e.makeTransparentImage(this.srcRest),this.imgGroup=e.makeTransparentImage(this.srcGroup),this.imgHover=e.makeTransparentImage(this.srcHover),this.imgDown=e.makeTransparentImage(this.srcDown),this.imgRest.alt=this.imgGroup.alt=this.imgHover.alt=this.imgDown.alt=this.tooltip,this.element.style.position="relative",e.setElementTouchActionNone(this.element),this.imgGroup.style.position=this.imgHover.style.position=this.imgDown.style.position="absolute",this.imgGroup.style.top=this.imgHover.style.top=this.imgDown.style.top="0px",this.imgGroup.style.left=this.imgHover.style.left=this.imgDown.style.left="0px",this.imgHover.style.visibility=this.imgDown.style.visibility="hidden",e.Browser.vendor==e.BROWSERS.FIREFOX&&e.Browser.version<3&&(this.imgGroup.style.top=this.imgHover.style.top=this.imgDown.style.top=""),this.element.appendChild(this.imgRest),this.element.appendChild(this.imgGroup),this.element.appendChild(this.imgHover),this.element.appendChild(this.imgDown)),this.addHandler("press",this.onPress),this.addHandler("release",this.onRelease),this.addHandler("click",this.onClick),this.addHandler("enter",this.onEnter),this.addHandler("exit",this.onExit),this.addHandler("focus",this.onFocus),this.addHandler("blur",this.onBlur),this.currentState=e.ButtonState.GROUP,this.fadeBeginTime=null,this.shouldFade=!1,this.element.style.display="inline-block",this.element.style.position="relative",this.element.title=this.tooltip,this.tracker=new e.MouseTracker({element:this.element,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,enterHandler:function(t){t.insideElementPressed?(o(i,e.ButtonState.DOWN),i.raiseEvent("enter",{originalEvent:t.originalEvent})):t.buttonDownAny||o(i,e.ButtonState.HOVER)},focusHandler:function(e){this.enterHandler(e),i.raiseEvent("focus",{originalEvent:e.originalEvent})},exitHandler:function(t){s(i,e.ButtonState.GROUP),t.insideElementPressed&&i.raiseEvent("exit",{originalEvent:t.originalEvent})},blurHandler:function(e){this.exitHandler(e),i.raiseEvent("blur",{originalEvent:e.originalEvent})},pressHandler:function(t){o(i,e.ButtonState.DOWN),i.raiseEvent("press",{originalEvent:t.originalEvent})},releaseHandler:function(t){t.insideElementPressed&&t.insideElementReleased?(s(i,e.ButtonState.HOVER),i.raiseEvent("release",{originalEvent:t.originalEvent})):t.insideElementPressed?s(i,e.ButtonState.GROUP):o(i,e.ButtonState.HOVER)},clickHandler:function(e){e.quick&&i.raiseEvent("click",{originalEvent:e.originalEvent})},keyHandler:function(e){return 13!==e.keyCode||(i.raiseEvent("click",{originalEvent:e.originalEvent}),i.raiseEvent("release",{originalEvent:e.originalEvent}),!1)}}),s(this,e.ButtonState.REST)},e.extend(e.Button.prototype,e.EventSource.prototype,{
	notifyGroupEnter:function(){o(this,e.ButtonState.GROUP)},notifyGroupExit:function(){s(this,e.ButtonState.REST)},disable:function(){this.notifyGroupExit(),this.element.disabled=!0,e.setElementOpacity(this.element,.2,!0)},enable:function(){this.element.disabled=!1,e.setElementOpacity(this.element,1,!0),this.notifyGroupEnter()}})}(OpenSeadragon),function(e){e.ButtonGroup=function(t){e.extend(!0,this,{buttons:[],clickTimeThreshold:e.DEFAULT_SETTINGS.clickTimeThreshold,clickDistThreshold:e.DEFAULT_SETTINGS.clickDistThreshold,labelText:""},t);var i,n=this.buttons.concat([]),r=this;if(this.element=t.element||e.makeNeutralElement("div"),!t.group)for(this.label=e.makeNeutralElement("label"),this.element.style.display="inline-block",this.element.appendChild(this.label),i=0;i<n.length;i++)this.element.appendChild(n[i].element);e.setElementTouchActionNone(this.element),this.tracker=new e.MouseTracker({element:this.element,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,enterHandler:function(e){var t;for(t=0;t<r.buttons.length;t++)r.buttons[t].notifyGroupEnter()},exitHandler:function(e){var t;if(!e.insideElementPressed)for(t=0;t<r.buttons.length;t++)r.buttons[t].notifyGroupExit()}})},e.ButtonGroup.prototype={emulateEnter:function(){this.tracker.enterHandler({eventSource:this.tracker})},emulateExit:function(){this.tracker.exitHandler({eventSource:this.tracker})}}}(OpenSeadragon),function(e){e.Rect=function(e,t,i,n,r){this.x="number"==typeof e?e:0,this.y="number"==typeof t?t:0,this.width="number"==typeof i?i:0,this.height="number"==typeof n?n:0,this.degrees="number"==typeof r?r:0,this.degrees=this.degrees%360,this.degrees<0&&(this.degrees+=360);var o,s;this.degrees>=270?(o=this.getTopRight(),this.x=o.x,this.y=o.y,s=this.height,this.height=this.width,this.width=s,this.degrees-=270):this.degrees>=180?(o=this.getBottomRight(),this.x=o.x,this.y=o.y,this.degrees-=180):this.degrees>=90&&(o=this.getBottomLeft(),this.x=o.x,this.y=o.y,s=this.height,this.height=this.width,this.width=s,this.degrees-=90)},e.Rect.fromSummits=function(t,i,n){var r=t.distanceTo(i),o=t.distanceTo(n),s=i.minus(t),a=Math.atan(s.y/s.x);return s.x<0?a+=Math.PI:s.y<0&&(a+=2*Math.PI),new e.Rect(t.x,t.y,r,o,a/Math.PI*180)},e.Rect.prototype={clone:function(){return new e.Rect(this.x,this.y,this.width,this.height,this.degrees)},getAspectRatio:function(){return this.width/this.height},getTopLeft:function(){return new e.Point(this.x,this.y)},getBottomRight:function(){return new e.Point(this.x+this.width,this.y+this.height).rotate(this.degrees,this.getTopLeft())},getTopRight:function(){return new e.Point(this.x+this.width,this.y).rotate(this.degrees,this.getTopLeft())},getBottomLeft:function(){return new e.Point(this.x,this.y+this.height).rotate(this.degrees,this.getTopLeft())},getCenter:function(){return new e.Point(this.x+this.width/2,this.y+this.height/2).rotate(this.degrees,this.getTopLeft())},getSize:function(){return new e.Point(this.width,this.height)},equals:function(t){return t instanceof e.Rect&&this.x===t.x&&this.y===t.y&&this.width===t.width&&this.height===t.height&&this.degrees===t.degrees},times:function(t){return new e.Rect(this.x*t,this.y*t,this.width*t,this.height*t,this.degrees)},translate:function(t){return new e.Rect(this.x+t.x,this.y+t.y,this.width,this.height,this.degrees)},union:function(t){var i=this.getBoundingBox(),n=t.getBoundingBox(),r=Math.min(i.x,n.x),o=Math.min(i.y,n.y),s=Math.max(i.x+i.width,n.x+n.width),a=Math.max(i.y+i.height,n.y+n.height);return new e.Rect(r,o,s-r,a-o)},intersection:function(t){function i(t,i,r,o){var s=i.minus(t),a=o.minus(r),l=-a.x*s.y+s.x*a.y;if(0===l)return null;var u=(s.x*(t.y-r.y)-s.y*(t.x-r.x))/l,c=(a.x*(t.y-r.y)-a.y*(t.x-r.x))/l;return-n<=u&&u<=1-n&&-n<=c&&c<=1-n?new e.Point(t.x+c*s.x,t.y+c*s.y):null}var n=1e-10,r=[],o=this.getTopLeft();t.containsPoint(o,n)&&r.push(o);var s=this.getTopRight();t.containsPoint(s,n)&&r.push(s);var a=this.getBottomLeft();t.containsPoint(a,n)&&r.push(a);var l=this.getBottomRight();t.containsPoint(l,n)&&r.push(l);var u=t.getTopLeft();this.containsPoint(u,n)&&r.push(u);var c=t.getTopRight();this.containsPoint(c,n)&&r.push(c);var h=t.getBottomLeft();this.containsPoint(h,n)&&r.push(h);var d=t.getBottomRight();this.containsPoint(d,n)&&r.push(d);for(var p=this._getSegments(),f=t._getSegments(),m=0;m<p.length;m++)for(var g=p[m],v=0;v<f.length;v++){var y=f[v],w=i(g[0],g[1],y[0],y[1]);w&&r.push(w)}if(0===r.length)return null;for(var _=r[0].x,S=r[0].x,E=r[0].y,T=r[0].y,x=1;x<r.length;x++){var b=r[x];b.x<_&&(_=b.x),b.x>S&&(S=b.x),b.y<E&&(E=b.y),b.y>T&&(T=b.y)}return new e.Rect(_,E,S-_,T-E)},_getSegments:function(){var e=this.getTopLeft(),t=this.getTopRight(),i=this.getBottomLeft(),n=this.getBottomRight();return[[e,t],[t,n],[n,i],[i,e]]},rotate:function(t,i){if(t%=360,0===t)return this.clone();t<0&&(t+=360),i=i||this.getCenter();var n=this.getTopLeft().rotate(t,i),r=this.getTopRight().rotate(t,i),o=r.minus(n),s=Math.atan(o.y/o.x);return o.x<0?s+=Math.PI:o.y<0&&(s+=2*Math.PI),new e.Rect(n.x,n.y,this.width,this.height,s/Math.PI*180)},getBoundingBox:function(){if(0===this.degrees)return this.clone();var t=this.getTopLeft(),i=this.getTopRight(),n=this.getBottomLeft(),r=this.getBottomRight(),o=Math.min(t.x,i.x,n.x,r.x),s=Math.max(t.x,i.x,n.x,r.x),a=Math.min(t.y,i.y,n.y,r.y),l=Math.max(t.y,i.y,n.y,r.y);return new e.Rect(o,a,s-o,l-a)},getIntegerBoundingBox:function(){var t=this.getBoundingBox(),i=Math.floor(t.x),n=Math.floor(t.y),r=Math.ceil(t.width+t.x-i),o=Math.ceil(t.height+t.y-n);return new e.Rect(i,n,r,o)},containsPoint:function(e,t){t=t||0;var i=this.getTopLeft(),n=this.getTopRight(),r=this.getBottomLeft(),o=n.minus(i),s=r.minus(i);return(e.x-i.x)*o.x+(e.y-i.y)*o.y>=-t&&(e.x-n.x)*o.x+(e.y-n.y)*o.y<=t&&(e.x-i.x)*s.x+(e.y-i.y)*s.y>=-t&&(e.x-r.x)*s.x+(e.y-r.y)*s.y<=t},toString:function(){return"["+Math.round(100*this.x)/100+", "+Math.round(100*this.y)/100+", "+Math.round(100*this.width)/100+"x"+Math.round(100*this.height)/100+", "+Math.round(100*this.degrees)/100+"deg]"}}}(OpenSeadragon),function(e){function t(t){var i=Number(this.element.style.marginLeft.replace("px","")),r=Number(this.element.style.marginTop.replace("px","")),o=Number(this.element.style.width.replace("px","")),s=Number(this.element.style.height.replace("px","")),a=e.getElementSize(this.viewer.canvas);return this.dragging=!0,this.element&&("horizontal"==this.scroll?-t.delta.x>0?i>-(o-a.x)&&(this.element.style.marginLeft=i+2*t.delta.x+"px",n(this,a.x,i+2*t.delta.x)):-t.delta.x<0&&i<0&&(this.element.style.marginLeft=i+2*t.delta.x+"px",n(this,a.x,i+2*t.delta.x)):-t.delta.y>0?r>-(s-a.y)&&(this.element.style.marginTop=r+2*t.delta.y+"px",n(this,a.y,r+2*t.delta.y)):-t.delta.y<0&&r<0&&(this.element.style.marginTop=r+2*t.delta.y+"px",n(this,a.y,r+2*t.delta.y))),!1}function i(t){var i=Number(this.element.style.marginLeft.replace("px","")),r=Number(this.element.style.marginTop.replace("px","")),o=Number(this.element.style.width.replace("px","")),s=Number(this.element.style.height.replace("px","")),a=e.getElementSize(this.viewer.canvas);return this.element&&("horizontal"==this.scroll?t.scroll>0?i>-(o-a.x)&&(this.element.style.marginLeft=i-60*t.scroll+"px",n(this,a.x,i-60*t.scroll)):t.scroll<0&&i<0&&(this.element.style.marginLeft=i-60*t.scroll+"px",n(this,a.x,i-60*t.scroll)):t.scroll<0?r>a.y-s&&(this.element.style.marginTop=r+60*t.scroll+"px",n(this,a.y,r+60*t.scroll)):t.scroll>0&&r<0&&(this.element.style.marginTop=r+60*t.scroll+"px",n(this,a.y,r+60*t.scroll))),!1}function n(t,i,n){var r,o,s,a,l,u,c;for(r="horizontal"==t.scroll?t.panelWidth:t.panelHeight,o=Math.ceil(i/r)+5,s=Math.ceil((Math.abs(n)+i)/r)+1,o=s-o,o=o<0?0:o,u=o;u<s&&u<t.panels.length;u++)c=t.panels[u],c.activePanel||(a=new e.Viewer({id:c.id,tileSources:[t.viewer.tileSources[u]],element:c,navigatorSizeRatio:t.sizeRatio,showNavigator:!1,mouseNavEnabled:!1,showNavigationControl:!1,showSequenceControl:!1,immediateRender:!0,blendTime:0,animationTime:0}),a.displayRegion=e.makeNeutralElement("div"),a.displayRegion.id=c.id+"-displayregion",a.displayRegion.className="displayregion",l=a.displayRegion.style,l.position="relative",l.top="0px",l.left="0px",l.fontSize="0px",l.overflow="hidden",l.float="left",l.cssFloat="left",l.styleFloat="left",l.zIndex=999999999,l.cursor="default",l.width=t.panelWidth-4+"px",l.height=t.panelHeight-4+"px",a.displayRegion.innerTracker=new e.MouseTracker({element:a.displayRegion,startDisabled:!0}),c.getElementsByTagName("div")[0].appendChild(a.displayRegion),c.activePanel=!0)}function r(e){var t=e.eventSource.element;return"horizontal"==this.scroll?t.style.marginBottom="0px":t.style.marginLeft="0px",!1}function o(t){var i=t.eventSource.element;return"horizontal"==this.scroll?i.style.marginBottom="-"+e.getElementSize(i).y/2+"px":i.style.marginLeft="-"+e.getElementSize(i).x/2+"px",!1}function s(e){if(e.preventDefaultAction||e.ctrl||e.alt||e.meta)return!0;switch(e.keyCode){case 38:return i.call(this,{eventSource:this.tracker,position:null,scroll:1,shift:null}),!1;case 40:return i.call(this,{eventSource:this.tracker,position:null,scroll:-1,shift:null}),!1;case 37:return i.call(this,{eventSource:this.tracker,position:null,scroll:-1,shift:null}),!1;case 39:return i.call(this,{eventSource:this.tracker,position:null,scroll:1,shift:null}),!1;default:return!0}}function a(e){if(e.preventDefaultAction||e.ctrl||e.alt||e.meta)return!0;switch(e.keyCode){case 61:return i.call(this,{eventSource:this.tracker,position:null,scroll:1,shift:null}),!1;case 45:return i.call(this,{eventSource:this.tracker,position:null,scroll:-1,shift:null}),!1;case 48:case 119:case 87:return i.call(this,{eventSource:this.tracker,position:null,scroll:1,shift:null}),!1;case 115:case 83:return i.call(this,{eventSource:this.tracker,position:null,scroll:-1,shift:null}),!1;case 97:return i.call(this,{eventSource:this.tracker,position:null,scroll:-1,shift:null}),!1;case 100:return i.call(this,{eventSource:this.tracker,position:null,scroll:1,shift:null}),!1;default:return!0}}var l={};e.ReferenceStrip=function(u){var c,h,d,p=this,f=u.viewer,m=e.getElementSize(f.element);for(u.id||(u.id="referencestrip-"+e.now(),this.element=e.makeNeutralElement("div"),this.element.id=u.id,this.element.className="referencestrip"),u=e.extend(!0,{sizeRatio:e.DEFAULT_SETTINGS.referenceStripSizeRatio,position:e.DEFAULT_SETTINGS.referenceStripPosition,scroll:e.DEFAULT_SETTINGS.referenceStripScroll,clickTimeThreshold:e.DEFAULT_SETTINGS.clickTimeThreshold},u,{element:this.element,showNavigator:!1,mouseNavEnabled:!1,showNavigationControl:!1,showSequenceControl:!1}),e.extend(this,u),l[this.id]={animating:!1},this.minPixelRatio=this.viewer.minPixelRatio,h=this.element.style,h.marginTop="0px",h.marginRight="0px",h.marginBottom="0px",h.marginLeft="0px",h.left="0px",h.bottom="0px",h.border="0px",h.background="#000",h.position="relative",e.setElementTouchActionNone(this.element),e.setElementOpacity(this.element,.8),this.viewer=f,this.innerTracker=new e.MouseTracker({element:this.element,dragHandler:e.delegate(this,t),scrollHandler:e.delegate(this,i),enterHandler:e.delegate(this,r),exitHandler:e.delegate(this,o),keyDownHandler:e.delegate(this,s),keyHandler:e.delegate(this,a)}),u.width&&u.height?(this.element.style.width=u.width+"px",this.element.style.height=u.height+"px",f.addControl(this.element,{anchor:e.ControlAnchor.BOTTOM_LEFT})):"horizontal"==u.scroll?(this.element.style.width=m.x*u.sizeRatio*f.tileSources.length+12*f.tileSources.length+"px",this.element.style.height=m.y*u.sizeRatio+"px",f.addControl(this.element,{anchor:e.ControlAnchor.BOTTOM_LEFT})):(this.element.style.height=m.y*u.sizeRatio*f.tileSources.length+12*f.tileSources.length+"px",this.element.style.width=m.x*u.sizeRatio+"px",f.addControl(this.element,{anchor:e.ControlAnchor.TOP_LEFT})),this.panelWidth=m.x*this.sizeRatio+8,this.panelHeight=m.y*this.sizeRatio+8,this.panels=[],d=0;d<f.tileSources.length;d++)c=e.makeNeutralElement("div"),c.id=this.element.id+"-"+d,c.style.width=p.panelWidth+"px",c.style.height=p.panelHeight+"px",c.style.display="inline",c.style.float="left",c.style.cssFloat="left",c.style.styleFloat="left",c.style.padding="2px",e.setElementTouchActionNone(c),c.innerTracker=new e.MouseTracker({element:c,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,pressHandler:function(t){t.eventSource.dragging=e.now()},releaseHandler:function(t){var i=t.eventSource,n=i.element.id,r=Number(n.split("-")[2]),o=e.now();t.insideElementPressed&&t.insideElementReleased&&i.dragging&&o-i.dragging<i.clickTimeThreshold&&(i.dragging=null,f.goToPage(r))}}),this.element.appendChild(c),c.activePanel=!1,this.panels.push(c);n(this,"vertical"==this.scroll?m.y:m.x,0),this.setFocus(0)},e.extend(e.ReferenceStrip.prototype,e.EventSource.prototype,e.Viewer.prototype,{setFocus:function(t){var i,o=e.getElement(this.element.id+"-"+t),s=e.getElementSize(this.viewer.canvas),a=Number(this.element.style.width.replace("px","")),l=Number(this.element.style.height.replace("px","")),u=-Number(this.element.style.marginLeft.replace("px","")),c=-Number(this.element.style.marginTop.replace("px",""));this.currentSelected!==o&&(this.currentSelected&&(this.currentSelected.style.background="#000"),this.currentSelected=o,this.currentSelected.style.background="#999","horizontal"==this.scroll?(i=Number(t)*(this.panelWidth+3),i>u+s.x-this.panelWidth?(i=Math.min(i,a-s.x),this.element.style.marginLeft=-i+"px",n(this,s.x,-i)):i<u&&(i=Math.max(0,i-s.x/2),this.element.style.marginLeft=-i+"px",n(this,s.x,-i))):(i=Number(t)*(this.panelHeight+3),i>c+s.y-this.panelHeight?(i=Math.min(i,l-s.y),this.element.style.marginTop=-i+"px",n(this,s.y,-i)):i<c&&(i=Math.max(0,i-s.y/2),this.element.style.marginTop=-i+"px",n(this,s.y,-i))),this.currentPage=t,r.call(this,{eventSource:this.innerTracker}))},update:function(){return!!l[this.id].animating&&(e.console.log("image reference strip update"),!0)},destroy:function(){this.element&&this.element.parentNode.removeChild(this.element)}})}(OpenSeadragon),function(e){e.DisplayRect=function(t,i,n,r,o,s){e.Rect.apply(this,[t,i,n,r]),this.minLevel=o,this.maxLevel=s},e.extend(e.DisplayRect.prototype,e.Rect.prototype)}(OpenSeadragon),function(e){function t(e,t){return(1-Math.exp(e*-t))/(1-Math.exp(-e))}e.Spring=function(t){var i=arguments;"object"!=typeof t&&(t={initial:i.length&&"number"==typeof i[0]?i[0]:void 0,springStiffness:i.length>1?i[1].springStiffness:5,animationTime:i.length>1?i[1].animationTime:1.5}),e.console.assert("number"==typeof t.springStiffness&&0!==t.springStiffness,"[OpenSeadragon.Spring] options.springStiffness must be a non-zero number"),e.console.assert("number"==typeof t.animationTime&&t.animationTime>=0,"[OpenSeadragon.Spring] options.animationTime must be a number greater than or equal to 0"),t.exponential&&(this._exponential=!0,delete t.exponential),e.extend(!0,this,t),this.current={value:"number"==typeof this.initial?this.initial:this._exponential?0:1,time:e.now()},e.console.assert(!this._exponential||0!==this.current.value,"[OpenSeadragon.Spring] value must be non-zero for exponential springs"),this.start={value:this.current.value,time:this.current.time},this.target={value:this.current.value,time:this.current.time},this._exponential&&(this.start._logValue=Math.log(this.start.value),this.target._logValue=Math.log(this.target.value),this.current._logValue=Math.log(this.current.value))},e.Spring.prototype={resetTo:function(t){e.console.assert(!this._exponential||0!==t,"[OpenSeadragon.Spring.resetTo] target must be non-zero for exponential springs"),this.start.value=this.target.value=this.current.value=t,this.start.time=this.target.time=this.current.time=e.now(),this._exponential&&(this.start._logValue=Math.log(this.start.value),this.target._logValue=Math.log(this.target.value),this.current._logValue=Math.log(this.current.value))},springTo:function(t){e.console.assert(!this._exponential||0!==t,"[OpenSeadragon.Spring.springTo] target must be non-zero for exponential springs"),this.start.value=this.current.value,this.start.time=this.current.time,this.target.value=t,this.target.time=this.start.time+1e3*this.animationTime,this._exponential&&(this.start._logValue=Math.log(this.start.value),this.target._logValue=Math.log(this.target.value))},shiftBy:function(t){this.start.value+=t,this.target.value+=t,this._exponential&&(e.console.assert(0!==this.target.value&&0!==this.start.value,"[OpenSeadragon.Spring.shiftBy] spring value must be non-zero for exponential springs"),this.start._logValue=Math.log(this.start.value),this.target._logValue=Math.log(this.target.value))},setExponential:function(t){this._exponential=t,this._exponential&&(e.console.assert(0!==this.current.value&&0!==this.target.value&&0!==this.start.value,"[OpenSeadragon.Spring.setExponential] spring value must be non-zero for exponential springs"),this.start._logValue=Math.log(this.start.value),this.target._logValue=Math.log(this.target.value),this.current._logValue=Math.log(this.current.value))},update:function(){this.current.time=e.now();var i,n;this._exponential?(i=this.start._logValue,n=this.target._logValue):(i=this.start.value,n=this.target.value);var r=this.current.time>=this.target.time?n:i+(n-i)*t(this.springStiffness,(this.current.time-this.start.time)/(this.target.time-this.start.time));this._exponential?this.current.value=Math.exp(r):this.current.value=r},isAtTargetValue:function(){return this.current.value===this.target.value}}}(OpenSeadragon),function(e){function t(t){e.extend(!0,this,{timeout:e.DEFAULT_SETTINGS.timeout,jobId:null},t),this.image=null}function i(e,t,i){var n;e.jobsInProgress--,(!e.jobLimit||e.jobsInProgress<e.jobLimit)&&e.jobQueue.length>0&&(n=e.jobQueue.shift(),n.start(),e.jobsInProgress++),i(t.image,t.errorMsg)}t.prototype={errorMsg:null,start:function(){var e=this;this.image=new Image,this.crossOriginPolicy!==!1&&(this.image.crossOrigin=this.crossOriginPolicy),this.image.onload=function(){e.finish(!0)},this.image.onabort=this.image.onerror=function(){e.errorMsg="Image load aborted",e.finish(!1)},this.jobId=window.setTimeout(function(){e.errorMsg="Image load exceeded timeout",e.finish(!1)},this.timeout),this.image.src=this.src},finish:function(e){this.image.onload=this.image.onerror=this.image.onabort=null,e||(this.image=null),this.jobId&&window.clearTimeout(this.jobId),this.callback(this)}},e.ImageLoader=function(t){e.extend(!0,this,{jobLimit:e.DEFAULT_SETTINGS.imageLoaderLimit,jobQueue:[],jobsInProgress:0},t)},e.ImageLoader.prototype={addJob:function(e){var n=this,r=function(t){i(n,t,e.callback)},o={src:e.src,crossOriginPolicy:e.crossOriginPolicy,callback:r,abort:e.abort},s=new t(o);!this.jobLimit||this.jobsInProgress<this.jobLimit?(s.start(),this.jobsInProgress++):this.jobQueue.push(s)},clear:function(){for(var e=0;e<this.jobQueue.length;e++){var t=this.jobQueue[e];"function"==typeof t.abort&&t.abort()}this.jobQueue=[]}}}(OpenSeadragon),function(e){e.Tile=function(e,t,i,n,r,o,s){this.level=e,this.x=t,this.y=i,this.bounds=n,this.exists=r,this.url=o,this.context2D=s,this.loaded=!1,this.loading=!1,this.element=null,this.imgElement=null,this.image=null,this.style=null,this.position=null,this.size=null,this.blendStart=null,this.opacity=null,this.distance=null,this.visibility=null,this.beingDrawn=!1,this.lastTouchTime=0},e.Tile.prototype={toString:function(){return this.level+"/"+this.x+"_"+this.y},_hasTransparencyChannel:function(){return!!this.context2D||this.url.match(".png")},drawHTML:function(t){return this.cacheImageRecord?this.loaded?(this.element||(this.element=e.makeNeutralElement("div"),this.imgElement=this.cacheImageRecord.getImage().cloneNode(),this.imgElement.style.msInterpolationMode="nearest-neighbor",this.imgElement.style.width="100%",this.imgElement.style.height="100%",this.style=this.element.style,this.style.position="absolute"),this.element.parentNode!=t&&t.appendChild(this.element),this.imgElement.parentNode!=this.element&&this.element.appendChild(this.imgElement),this.style.top=this.position.y+"px",this.style.left=this.position.x+"px",this.style.height=this.size.y+"px",this.style.width=this.size.x+"px",void e.setElementOpacity(this.element,this.opacity)):void e.console.warn("Attempting to draw tile %s when it's not yet loaded.",this.toString()):void e.console.warn("[Tile.drawHTML] attempting to draw tile %s when it's not cached",this.toString())},drawCanvas:function(t,i,n,r){var o,s=this.position.times(e.pixelDensityRatio),a=this.size.times(e.pixelDensityRatio);return this.context2D||this.cacheImageRecord?(o=this.context2D||this.cacheImageRecord.getRenderedContext(),this.loaded&&o?(t.save(),t.globalAlpha=this.opacity,"number"==typeof n&&1!==n&&(s=s.times(n),a=a.times(n)),r instanceof e.Point&&(s=s.plus(r)),1===t.globalAlpha&&this._hasTransparencyChannel()&&t.clearRect(s.x+1,s.y+1,a.x-2,a.y-2),i({context:t,tile:this,rendered:o}),t.drawImage(o.canvas,0,0,o.canvas.width,o.canvas.height,s.x,s.y,a.x,a.y),void t.restore()):void e.console.warn("Attempting to draw tile %s when it's not yet loaded.",this.toString())):void e.console.warn("[Tile.drawCanvas] attempting to draw tile %s when it's not cached",this.toString())},getScaleForEdgeSmoothing:function(){var t;if(this.cacheImageRecord)t=this.cacheImageRecord.getRenderedContext();else{if(!this.context2D)return e.console.warn("[Tile.drawCanvas] attempting to get tile scale %s when tile's not cached",this.toString()),1;t=this.context2D}return t.canvas.width/(this.size.x*e.pixelDensityRatio)},getTranslationForEdgeSmoothing:function(t,i,n){var r=Math.max(1,Math.ceil((n.x-i.x)/2)),o=Math.max(1,Math.ceil((n.y-i.y)/2));return new e.Point(r,o).minus(this.position.times(e.pixelDensityRatio).times(t||1).apply(function(e){return e%1}))},unload:function(){this.imgElement&&this.imgElement.parentNode&&this.imgElement.parentNode.removeChild(this.imgElement),this.element&&this.element.parentNode&&this.element.parentNode.removeChild(this.element),this.element=null,this.imgElement=null,this.loaded=!1,this.loading=!1}}}(OpenSeadragon),function(e){e.OverlayPlacement=e.Placement,e.OverlayRotationMode=e.freezeObject({NO_ROTATION:1,EXACT:2,BOUNDING_BOX:3}),e.Overlay=function(t,i,n){var r;r=e.isPlainObject(t)?t:{element:t,location:i,placement:n},this.element=r.element,this.style=r.element.style,this._init(r)},e.Overlay.prototype={_init:function(t){this.location=t.location,this.placement=void 0===t.placement?e.Placement.TOP_LEFT:t.placement,this.onDraw=t.onDraw,this.checkResize=void 0===t.checkResize||t.checkResize,this.width=void 0===t.width?null:t.width,this.height=void 0===t.height?null:t.height,this.rotationMode=t.rotationMode||e.OverlayRotationMode.EXACT,this.location instanceof e.Rect&&(this.width=this.location.width,this.height=this.location.height,this.location=this.location.getTopLeft(),this.placement=e.Placement.TOP_LEFT),this.scales=null!==this.width&&null!==this.height,this.bounds=new e.Rect(this.location.x,this.location.y,this.width,this.height),this.position=this.location},adjust:function(t,i){var n=e.Placement.properties[this.placement];n&&(n.isHorizontallyCentered?t.x-=i.x/2:n.isRight&&(t.x-=i.x),n.isVerticallyCentered?t.y-=i.y/2:n.isBottom&&(t.y-=i.y))},destroy:function(){var t=this.element,i=this.style;t.parentNode&&(t.parentNode.removeChild(t),t.prevElementParent&&(i.display="none",document.body.appendChild(t))),this.onDraw=null,i.top="",i.left="",i.position="",null!==this.width&&(i.width=""),null!==this.height&&(i.height="");var n=e.getCssPropertyWithVendorPrefix("transformOrigin"),r=e.getCssPropertyWithVendorPrefix("transform");n&&r&&(i[n]="",i[r]="")},drawHTML:function(t,i){var n=this.element;n.parentNode!==t&&(n.prevElementParent=n.parentNode,n.prevNextSibling=n.nextSibling,t.appendChild(n),this.size=e.getElementSize(n));var r=this._getOverlayPositionAndSize(i),o=r.position,s=this.size=r.size,a=r.rotate;if(this.onDraw)this.onDraw(o,s,this.element);else{var l=this.style;l.left=o.x+"px",l.top=o.y+"px",null!==this.width&&(l.width=s.x+"px"),null!==this.height&&(l.height=s.y+"px");var u=e.getCssPropertyWithVendorPrefix("transformOrigin"),c=e.getCssPropertyWithVendorPrefix("transform");u&&c&&(a?(l[u]=this._getTransformOrigin(),l[c]="rotate("+a+"deg)"):(l[u]="",l[c]="")),l.position="absolute","none"!==l.display&&(l.display="block")}},_getOverlayPositionAndSize:function(t){var i=t.pixelFromPoint(this.location,!0),n=this._getSizeInPixels(t);this.adjust(i,n);var r=0;if(t.degrees&&this.rotationMode!==e.OverlayRotationMode.NO_ROTATION)if(this.rotationMode===e.OverlayRotationMode.BOUNDING_BOX&&null!==this.width&&null!==this.height){var o=new e.Rect(i.x,i.y,n.x,n.y),s=this._getBoundingBox(o,t.degrees);i=s.getTopLeft(),n=s.getSize()}else r=t.degrees;return{position:i,size:n,rotate:r}},_getSizeInPixels:function(t){var i=this.size.x,n=this.size.y;if(null!==this.width||null!==this.height){var r=t.deltaPixelsFromPointsNoRotate(new e.Point(this.width||0,this.height||0),!0);null!==this.width&&(i=r.x),null!==this.height&&(n=r.y)}if(this.checkResize&&(null===this.width||null===this.height)){var o=this.size=e.getElementSize(this.element);null===this.width&&(i=o.x),null===this.height&&(n=o.y)}return new e.Point(i,n)},_getBoundingBox:function(e,t){var i=this._getPlacementPoint(e);return e.rotate(t,i).getBoundingBox()},_getPlacementPoint:function(t){var i=new e.Point(t.x,t.y),n=e.Placement.properties[this.placement];return n&&(n.isHorizontallyCentered?i.x+=t.width/2:n.isRight&&(i.x+=t.width),n.isVerticallyCentered?i.y+=t.height/2:n.isBottom&&(i.y+=t.height)),i},_getTransformOrigin:function(){var t="",i=e.Placement.properties[this.placement];return i?(i.isLeft?t="left":i.isRight&&(t="right"),i.isTop?t+=" top":i.isBottom&&(t+=" bottom"),t):t},update:function(t,i){var n=e.isPlainObject(t)?t:{location:t,placement:i};this._init({location:n.location||this.location,placement:void 0!==n.placement?n.placement:this.placement,onDraw:n.onDraw||this.onDraw,checkResize:n.checkResize||this.checkResize,width:void 0!==n.width?n.width:this.width,height:void 0!==n.height?n.height:this.height,rotationMode:n.rotationMode||this.rotationMode})},getBounds:function(t){e.console.assert(t,"A viewport must now be passed to Overlay.getBounds.");var i=this.width,n=this.height;if(null===i||null===n){var r=t.deltaPointsFromPixelsNoRotate(this.size,!0);null===i&&(i=r.x),null===n&&(n=r.y)}var o=this.location.clone();return this.adjust(o,new e.Point(i,n)),this._adjustBoundsForRotation(t,new e.Rect(o.x,o.y,i,n))},_adjustBoundsForRotation:function(t,i){if(!t||0===t.degrees||this.rotationMode===e.OverlayRotationMode.EXACT)return i;if(this.rotationMode===e.OverlayRotationMode.BOUNDING_BOX){if(null===this.width||null===this.height)return i;var n=this._getOverlayPositionAndSize(t);return t.viewerElementToViewportRectangle(new e.Rect(n.position.x,n.position.y,n.size.x,n.size.y))}return i.rotate(-t.degrees,this._getPlacementPoint(i))}}}(OpenSeadragon),function(e){e.Drawer=function(t){e.console.assert(t.viewer,"[Drawer] options.viewer is required");var i=arguments;if(e.isPlainObject(t)||(t={source:i[0],viewport:i[1],element:i[2]}),e.console.assert(t.viewport,"[Drawer] options.viewport is required"),e.console.assert(t.element,"[Drawer] options.element is required"),t.source&&e.console.error("[Drawer] options.source is no longer accepted; use TiledImage instead"),this.viewer=t.viewer,this.viewport=t.viewport,this.debugGridColor=t.debugGridColor||e.DEFAULT_SETTINGS.debugGridColor,t.opacity&&e.console.error("[Drawer] options.opacity is no longer accepted; set the opacity on the TiledImage instead"),this.useCanvas=e.supportsCanvas&&(!this.viewer||this.viewer.useCanvas),this.container=e.getElement(t.element),this.canvas=e.makeNeutralElement(this.useCanvas?"canvas":"div"),this.context=this.useCanvas?this.canvas.getContext("2d"):null,this.sketchCanvas=null,this.sketchContext=null,this.element=this.container,this.container.dir="ltr",this.useCanvas){var n=this._calculateCanvasSize();this.canvas.width=n.x,this.canvas.height=n.y}this.canvas.style.width="100%",this.canvas.style.height="100%",this.canvas.style.position="absolute",e.setElementOpacity(this.canvas,this.opacity,!0),this.container.style.textAlign="left",this.container.appendChild(this.canvas)},e.Drawer.prototype={addOverlay:function(t,i,n,r){return e.console.error("drawer.addOverlay is deprecated. Use viewer.addOverlay instead."),this.viewer.addOverlay(t,i,n,r),this},updateOverlay:function(t,i,n){return e.console.error("drawer.updateOverlay is deprecated. Use viewer.updateOverlay instead."),this.viewer.updateOverlay(t,i,n),this},removeOverlay:function(t){return e.console.error("drawer.removeOverlay is deprecated. Use viewer.removeOverlay instead."),this.viewer.removeOverlay(t),this},clearOverlays:function(){return e.console.error("drawer.clearOverlays is deprecated. Use viewer.clearOverlays instead."),this.viewer.clearOverlays(),this},setOpacity:function(t){e.console.error("drawer.setOpacity is deprecated. Use tiledImage.setOpacity instead.");for(var i=this.viewer.world,n=0;n<i.getItemCount();n++)i.getItemAt(n).setOpacity(t);return this},getOpacity:function(){e.console.error("drawer.getOpacity is deprecated. Use tiledImage.getOpacity instead.");for(var t=this.viewer.world,i=0,n=0;n<t.getItemCount();n++){var r=t.getItemAt(n).getOpacity();r>i&&(i=r)}return i},needsUpdate:function(){return e.console.error("[Drawer.needsUpdate] this function is deprecated. Use World.needsDraw instead."),this.viewer.world.needsDraw()},numTilesLoaded:function(){return e.console.error("[Drawer.numTilesLoaded] this function is deprecated. Use TileCache.numTilesLoaded instead."),this.viewer.tileCache.numTilesLoaded()},reset:function(){return e.console.error("[Drawer.reset] this function is deprecated. Use World.resetItems instead."),this.viewer.world.resetItems(),this},update:function(){return e.console.error("[Drawer.update] this function is deprecated. Use Drawer.clear and World.draw instead."),this.clear(),this.viewer.world.draw(),this},canRotate:function(){return this.useCanvas},destroy:function(){this.canvas.width=1,this.canvas.height=1,this.sketchCanvas=null,this.sketchContext=null},clear:function(){if(this.canvas.innerHTML="",this.useCanvas){var e=this._calculateCanvasSize();if((this.canvas.width!=e.x||this.canvas.height!=e.y)&&(this.canvas.width=e.x,this.canvas.height=e.y,null!==this.sketchCanvas)){var t=this._calculateSketchCanvasSize();this.sketchCanvas.width=t.x,this.sketchCanvas.height=t.y}this._clear()}},_clear:function(e,t){if(this.useCanvas){var i=this._getContext(e);if(t)i.clearRect(t.x,t.y,t.width,t.height);else{var n=i.canvas;i.clearRect(0,0,n.width,n.height)}}},viewportToDrawerRectangle:function(t){var i=this.viewport.pixelFromPointNoRotate(t.getTopLeft(),!0),n=this.viewport.deltaPixelsFromPointsNoRotate(t.getSize(),!0);return new e.Rect(i.x*e.pixelDensityRatio,i.y*e.pixelDensityRatio,n.x*e.pixelDensityRatio,n.y*e.pixelDensityRatio)},drawTile:function(t,i,n,r,o){if(e.console.assert(t,"[Drawer.drawTile] tile is required"),e.console.assert(i,"[Drawer.drawTile] drawingHandler is required"),this.useCanvas){var s=this._getContext(n);r=r||1,t.drawCanvas(s,i,r,o)}else t.drawHTML(this.canvas)},_getContext:function(e){var t=this.context;if(e){if(null===this.sketchCanvas){this.sketchCanvas=document.createElement("canvas");var i=this._calculateSketchCanvasSize();if(this.sketchCanvas.width=i.x,this.sketchCanvas.height=i.y,this.sketchContext=this.sketchCanvas.getContext("2d"),0===this.viewport.getRotation()){var n=this;this.viewer.addHandler("rotate",function e(){n.viewer.removeHandler("rotate",e);var t=n._calculateSketchCanvasSize();n.sketchCanvas.width=t.x,n.sketchCanvas.height=t.y})}}t=this.sketchContext}return t},saveContext:function(e){this.useCanvas&&this._getContext(e).save()},restoreContext:function(e){this.useCanvas&&this._getContext(e).restore()},setClip:function(e,t){if(this.useCanvas){var i=this._getContext(t);i.beginPath(),i.rect(e.x,e.y,e.width,e.height),i.clip()}},drawRectangle:function(e,t,i){if(this.useCanvas){var n=this._getContext(i);n.save(),n.fillStyle=t,
	n.fillRect(e.x,e.y,e.width,e.height),n.restore()}},blendSketch:function(t,i,n,r){var o=t;if(e.isPlainObject(o)||(o={opacity:t,scale:i,translate:n,compositeOperation:r}),this.useCanvas&&this.sketchCanvas){t=o.opacity,r=o.compositeOperation;var s=o.bounds;if(this.context.save(),this.context.globalAlpha=t,r&&(this.context.globalCompositeOperation=r),s)this.context.drawImage(this.sketchCanvas,s.x,s.y,s.width,s.height,s.x,s.y,s.width,s.height);else{i=o.scale||1,n=o.translate;var a=n instanceof e.Point?n:new e.Point(0,0),l=0,u=0;if(n){var c=this.sketchCanvas.width-this.canvas.width,h=this.sketchCanvas.height-this.canvas.height;l=Math.round(c/2),u=Math.round(h/2)}this.context.drawImage(this.sketchCanvas,a.x-l*i,a.y-u*i,(this.canvas.width+2*l)*i,(this.canvas.height+2*u)*i,-l,-u,this.canvas.width+2*l,this.canvas.height+2*u)}this.context.restore()}},drawDebugInfo:function(t,i,n){if(this.useCanvas){var r=this.context;r.save(),r.lineWidth=2*e.pixelDensityRatio,r.font="small-caps bold "+13*e.pixelDensityRatio+"px arial",r.strokeStyle=this.debugGridColor,r.fillStyle=this.debugGridColor,0!==this.viewport.degrees&&this._offsetForRotation(this.viewport.degrees),r.strokeRect(t.position.x*e.pixelDensityRatio,t.position.y*e.pixelDensityRatio,t.size.x*e.pixelDensityRatio,t.size.y*e.pixelDensityRatio);var o=(t.position.x+t.size.x/2)*e.pixelDensityRatio,s=(t.position.y+t.size.y/2)*e.pixelDensityRatio;r.translate(o,s),r.rotate(Math.PI/180*-this.viewport.degrees),r.translate(-o,-s),0===t.x&&0===t.y&&(r.fillText("Zoom: "+this.viewport.getZoom(),t.position.x*e.pixelDensityRatio,(t.position.y-30)*e.pixelDensityRatio),r.fillText("Pan: "+this.viewport.getBounds().toString(),t.position.x*e.pixelDensityRatio,(t.position.y-20)*e.pixelDensityRatio)),r.fillText("Level: "+t.level,(t.position.x+10)*e.pixelDensityRatio,(t.position.y+20)*e.pixelDensityRatio),r.fillText("Column: "+t.x,(t.position.x+10)*e.pixelDensityRatio,(t.position.y+30)*e.pixelDensityRatio),r.fillText("Row: "+t.y,(t.position.x+10)*e.pixelDensityRatio,(t.position.y+40)*e.pixelDensityRatio),r.fillText("Order: "+n+" of "+i,(t.position.x+10)*e.pixelDensityRatio,(t.position.y+50)*e.pixelDensityRatio),r.fillText("Size: "+t.size.toString(),(t.position.x+10)*e.pixelDensityRatio,(t.position.y+60)*e.pixelDensityRatio),r.fillText("Position: "+t.position.toString(),(t.position.x+10)*e.pixelDensityRatio,(t.position.y+70)*e.pixelDensityRatio),0!==this.viewport.degrees&&this._restoreRotationChanges(),r.restore()}},debugRect:function(t){if(this.useCanvas){var i=this.context;i.save(),i.lineWidth=2*e.pixelDensityRatio,i.strokeStyle=this.debugGridColor,i.fillStyle=this.debugGridColor,i.strokeRect(t.x*e.pixelDensityRatio,t.y*e.pixelDensityRatio,t.width*e.pixelDensityRatio,t.height*e.pixelDensityRatio),i.restore()}},getCanvasSize:function(t){var i=this._getContext(t).canvas;return new e.Point(i.width,i.height)},_offsetForRotation:function(e,t){var i=this.canvas.width/2,n=this.canvas.height/2,r=this._getContext(t);r.save(),r.translate(i,n),r.rotate(Math.PI/180*e),r.translate(-i,-n)},_restoreRotationChanges:function(e){var t=this._getContext(e);t.restore()},_calculateCanvasSize:function(){var t=e.pixelDensityRatio,i=this.viewport.getContainerSize();return{x:i.x*t,y:i.y*t}},_calculateSketchCanvasSize:function(){var e=this._calculateCanvasSize();if(0===this.viewport.getRotation())return e;var t=Math.ceil(Math.sqrt(e.x*e.x+e.y*e.y));return{x:t,y:t}}}}(OpenSeadragon),function(e){e.Viewport=function(t){var i=arguments;i.length&&i[0]instanceof e.Point&&(t={containerSize:i[0],contentSize:i[1],config:i[2]}),t.config&&(e.extend(!0,t,t.config),delete t.config),this._margins=e.extend({left:0,top:0,right:0,bottom:0},t.margins||{}),delete t.margins,e.extend(!0,this,{containerSize:null,contentSize:null,zoomPoint:null,viewer:null,springStiffness:e.DEFAULT_SETTINGS.springStiffness,animationTime:e.DEFAULT_SETTINGS.animationTime,minZoomImageRatio:e.DEFAULT_SETTINGS.minZoomImageRatio,maxZoomPixelRatio:e.DEFAULT_SETTINGS.maxZoomPixelRatio,visibilityRatio:e.DEFAULT_SETTINGS.visibilityRatio,wrapHorizontal:e.DEFAULT_SETTINGS.wrapHorizontal,wrapVertical:e.DEFAULT_SETTINGS.wrapVertical,defaultZoomLevel:e.DEFAULT_SETTINGS.defaultZoomLevel,minZoomLevel:e.DEFAULT_SETTINGS.minZoomLevel,maxZoomLevel:e.DEFAULT_SETTINGS.maxZoomLevel,degrees:e.DEFAULT_SETTINGS.degrees,homeFillsViewer:e.DEFAULT_SETTINGS.homeFillsViewer},t),this._updateContainerInnerSize(),this.centerSpringX=new e.Spring({initial:0,springStiffness:this.springStiffness,animationTime:this.animationTime}),this.centerSpringY=new e.Spring({initial:0,springStiffness:this.springStiffness,animationTime:this.animationTime}),this.zoomSpring=new e.Spring({exponential:!0,initial:1,springStiffness:this.springStiffness,animationTime:this.animationTime}),this._oldCenterX=this.centerSpringX.current.value,this._oldCenterY=this.centerSpringY.current.value,this._oldZoom=this.zoomSpring.current.value,this._setContentBounds(new e.Rect(0,0,1,1),1),this.goHome(!0),this.update()},e.Viewport.prototype={resetContentSize:function(t){return e.console.assert(t,"[Viewport.resetContentSize] contentSize is required"),e.console.assert(t instanceof e.Point,"[Viewport.resetContentSize] contentSize must be an OpenSeadragon.Point"),e.console.assert(t.x>0,"[Viewport.resetContentSize] contentSize.x must be greater than 0"),e.console.assert(t.y>0,"[Viewport.resetContentSize] contentSize.y must be greater than 0"),this._setContentBounds(new e.Rect(0,0,1,t.y/t.x),t.x),this},setHomeBounds:function(t,i){e.console.error("[Viewport.setHomeBounds] this function is deprecated; The content bounds should not be set manually."),this._setContentBounds(t,i)},_setContentBounds:function(t,i){e.console.assert(t,"[Viewport._setContentBounds] bounds is required"),e.console.assert(t instanceof e.Rect,"[Viewport._setContentBounds] bounds must be an OpenSeadragon.Rect"),e.console.assert(t.width>0,"[Viewport._setContentBounds] bounds.width must be greater than 0"),e.console.assert(t.height>0,"[Viewport._setContentBounds] bounds.height must be greater than 0"),this._contentBoundsNoRotate=t.clone(),this._contentSizeNoRotate=this._contentBoundsNoRotate.getSize().times(i),this._contentBounds=t.rotate(this.degrees).getBoundingBox(),this._contentSize=this._contentBounds.getSize().times(i),this._contentAspectRatio=this._contentSize.x/this._contentSize.y,this.viewer&&this.viewer.raiseEvent("reset-size",{contentSize:this._contentSizeNoRotate.clone(),contentFactor:i,homeBounds:this._contentBoundsNoRotate.clone(),contentBounds:this._contentBounds.clone()})},getHomeZoom:function(){if(this.defaultZoomLevel)return this.defaultZoomLevel;var e,t=this._contentAspectRatio/this.getAspectRatio();return e=this.homeFillsViewer?t>=1?t:1:t>=1?1:t,e/this._contentBounds.width},getHomeBounds:function(){return this.getHomeBoundsNoRotate().rotate(-this.getRotation())},getHomeBoundsNoRotate:function(){var t=this._contentBounds.getCenter(),i=1/this.getHomeZoom(),n=i/this.getAspectRatio();return new e.Rect(t.x-i/2,t.y-n/2,i,n)},goHome:function(e){return this.viewer&&this.viewer.raiseEvent("home",{immediately:e}),this.fitBounds(this.getHomeBounds(),e)},getMinZoom:function(){var e=this.getHomeZoom(),t=this.minZoomLevel?this.minZoomLevel:this.minZoomImageRatio*e;return t},getMaxZoom:function(){var e=this.maxZoomLevel;return e||(e=this._contentSize.x*this.maxZoomPixelRatio/this._containerInnerSize.x,e/=this._contentBounds.width),Math.max(e,this.getHomeZoom())},getAspectRatio:function(){return this._containerInnerSize.x/this._containerInnerSize.y},getContainerSize:function(){return new e.Point(this.containerSize.x,this.containerSize.y)},getMargins:function(){return e.extend({},this._margins)},setMargins:function(t){e.console.assert("object"===e.type(t),"[Viewport.setMargins] margins must be an object"),this._margins=e.extend({left:0,top:0,right:0,bottom:0},t),this._updateContainerInnerSize(),this.viewer&&this.viewer.forceRedraw()},getBounds:function(e){return this.getBoundsNoRotate(e).rotate(-this.getRotation())},getBoundsNoRotate:function(t){var i=this.getCenter(t),n=1/this.getZoom(t),r=n/this.getAspectRatio();return new e.Rect(i.x-n/2,i.y-r/2,n,r)},getBoundsWithMargins:function(e){return this.getBoundsNoRotateWithMargins(e).rotate(-this.getRotation(),this.getCenter(e))},getBoundsNoRotateWithMargins:function(e){var t=this.getBoundsNoRotate(e),i=this._containerInnerSize.x*this.getZoom(e);return t.x-=this._margins.left/i,t.y-=this._margins.top/i,t.width+=(this._margins.left+this._margins.right)/i,t.height+=(this._margins.top+this._margins.bottom)/i,t},getCenter:function(t){var i,n,r,o,s,a,l,u,c=new e.Point(this.centerSpringX.current.value,this.centerSpringY.current.value),h=new e.Point(this.centerSpringX.target.value,this.centerSpringY.target.value);return t?c:this.zoomPoint?(i=this.pixelFromPoint(this.zoomPoint,!0),n=this.getZoom(),r=1/n,o=r/this.getAspectRatio(),s=new e.Rect(c.x-r/2,c.y-o/2,r,o),a=this._pixelFromPoint(this.zoomPoint,s),l=a.minus(i),u=l.divide(this._containerInnerSize.x*n),h.plus(u)):h},getZoom:function(e){return e?this.zoomSpring.current.value:this.zoomSpring.target.value},_applyZoomConstraints:function(e){return Math.max(Math.min(e,this.getMaxZoom()),this.getMinZoom())},_applyBoundaryConstraints:function(t,i){var n=new e.Rect(t.x,t.y,t.width,t.height);if(this.wrapHorizontal);else{var r=this.visibilityRatio*n.width,o=n.x+n.width,s=this._contentBoundsNoRotate.x+this._contentBoundsNoRotate.width,a=this._contentBoundsNoRotate.x-o+r,l=s-n.x-r;r>this._contentBoundsNoRotate.width?n.x+=(a+l)/2:l<0?n.x+=l:a>0&&(n.x+=a)}if(this.wrapVertical);else{var u=this.visibilityRatio*n.height,c=n.y+n.height,h=this._contentBoundsNoRotate.y+this._contentBoundsNoRotate.height,d=this._contentBoundsNoRotate.y-c+u,p=h-n.y-u;u>this._contentBoundsNoRotate.height?n.y+=(d+p)/2:p<0?n.y+=p:d>0&&(n.y+=d)}return this.viewer&&this.viewer.raiseEvent("constrain",{immediately:i}),n},applyConstraints:function(e){var t=this.getZoom(),i=this._applyZoomConstraints(t);t!==i&&this.zoomTo(i,this.zoomPoint,e);var n=this.getBoundsNoRotate(),r=this._applyBoundaryConstraints(n,e);return(n.x!==r.x||n.y!==r.y||e)&&this.fitBounds(r.rotate(-this.getRotation()),e),this},ensureVisible:function(e){return this.applyConstraints(e)},_fitBounds:function(t,i){i=i||{};var n=i.immediately||!1,r=i.constraints||!1,o=this.getAspectRatio(),s=t.getCenter(),a=new e.Rect(t.x,t.y,t.width,t.height,t.degrees+this.getRotation()).getBoundingBox();a.getAspectRatio()>=o?a.height=a.width/o:a.width=a.height*o,a.x=s.x-a.width/2,a.y=s.y-a.height/2;var l=1/a.width;if(r){var u=a.getAspectRatio(),c=this._applyZoomConstraints(l);l!==c&&(l=c,a.width=1/l,a.x=s.x-a.width/2,a.height=a.width/u,a.y=s.y-a.height/2),a=this._applyBoundaryConstraints(a,n),s=a.getCenter()}if(n)return this.panTo(s,!0),this.zoomTo(l,null,!0);this.panTo(this.getCenter(!0),!0),this.zoomTo(this.getZoom(!0),null,!0);var h=this.getBounds(),d=this.getZoom();if(0===d||Math.abs(l/d-1)<1e-8)return this.zoomTo(l,!0),this.panTo(s,n);a=a.rotate(-this.getRotation());var p=a.getTopLeft().times(l).minus(h.getTopLeft().times(d)).divide(l-d);return this.zoomTo(l,p,n)},fitBounds:function(e,t){return this._fitBounds(e,{immediately:t,constraints:!1})},fitBoundsWithConstraints:function(e,t){return this._fitBounds(e,{immediately:t,constraints:!0})},fitVertically:function(t){var i=new e.Rect(this._contentBounds.x+this._contentBounds.width/2,this._contentBounds.y,0,this._contentBounds.height);return this.fitBounds(i,t)},fitHorizontally:function(t){var i=new e.Rect(this._contentBounds.x,this._contentBounds.y+this._contentBounds.height/2,this._contentBounds.width,0);return this.fitBounds(i,t)},panBy:function(t,i){var n=new e.Point(this.centerSpringX.target.value,this.centerSpringY.target.value);return this.panTo(n.plus(t),i)},panTo:function(e,t){return t?(this.centerSpringX.resetTo(e.x),this.centerSpringY.resetTo(e.y)):(this.centerSpringX.springTo(e.x),this.centerSpringY.springTo(e.y)),this.viewer&&this.viewer.raiseEvent("pan",{center:e,immediately:t}),this},zoomBy:function(e,t,i){return this.zoomTo(this.zoomSpring.target.value*e,t,i)},zoomTo:function(t,i,n){return this.zoomPoint=i instanceof e.Point&&!isNaN(i.x)&&!isNaN(i.y)?i:null,n?this.zoomSpring.resetTo(t):this.zoomSpring.springTo(t),this.viewer&&this.viewer.raiseEvent("zoom",{zoom:t,refPoint:i,immediately:n}),this},setRotation:function(e){return this.viewer&&this.viewer.drawer.canRotate()?(e%=360,e<0&&(e+=360),this.degrees=e,this._setContentBounds(this.viewer.world.getHomeBounds(),this.viewer.world.getContentFactor()),this.viewer.forceRedraw(),this.viewer.raiseEvent("rotate",{degrees:e}),this):this},getRotation:function(){return this.degrees},resize:function(e,t){var i,n=this.getBoundsNoRotate(),r=n;return this.containerSize.x=e.x,this.containerSize.y=e.y,this._updateContainerInnerSize(),t&&(i=e.x/this.containerSize.x,r.width=n.width*i,r.height=r.width/this.getAspectRatio()),this.viewer&&this.viewer.raiseEvent("resize",{newContainerSize:e,maintain:t}),this.fitBounds(r,!0)},_updateContainerInnerSize:function(){this._containerInnerSize=new e.Point(Math.max(1,this.containerSize.x-(this._margins.left+this._margins.right)),Math.max(1,this.containerSize.y-(this._margins.top+this._margins.bottom)))},update:function(){if(this.zoomPoint){var e=this.pixelFromPoint(this.zoomPoint,!0);this.zoomSpring.update();var t=this.pixelFromPoint(this.zoomPoint,!0),i=t.minus(e),n=this.deltaPointsFromPixels(i,!0);this.centerSpringX.shiftBy(n.x),this.centerSpringY.shiftBy(n.y),this.zoomSpring.isAtTargetValue()&&(this.zoomPoint=null)}else this.zoomSpring.update();this.centerSpringX.update(),this.centerSpringY.update();var r=this.centerSpringX.current.value!==this._oldCenterX||this.centerSpringY.current.value!==this._oldCenterY||this.zoomSpring.current.value!==this._oldZoom;return this._oldCenterX=this.centerSpringX.current.value,this._oldCenterY=this.centerSpringY.current.value,this._oldZoom=this.zoomSpring.current.value,r},deltaPixelsFromPointsNoRotate:function(e,t){return e.times(this._containerInnerSize.x*this.getZoom(t))},deltaPixelsFromPoints:function(e,t){return this.deltaPixelsFromPointsNoRotate(e.rotate(this.getRotation()),t)},deltaPointsFromPixelsNoRotate:function(e,t){return e.divide(this._containerInnerSize.x*this.getZoom(t))},deltaPointsFromPixels:function(e,t){return this.deltaPointsFromPixelsNoRotate(e,t).rotate(-this.getRotation())},pixelFromPointNoRotate:function(e,t){return this._pixelFromPointNoRotate(e,this.getBoundsNoRotate(t))},pixelFromPoint:function(e,t){return this._pixelFromPoint(e,this.getBoundsNoRotate(t))},_pixelFromPointNoRotate:function(t,i){return t.minus(i.getTopLeft()).times(this._containerInnerSize.x/i.width).plus(new e.Point(this._margins.left,this._margins.top))},_pixelFromPoint:function(e,t){return this._pixelFromPointNoRotate(e.rotate(this.getRotation(),this.getCenter(!0)),t)},pointFromPixelNoRotate:function(t,i){var n=this.getBoundsNoRotate(i);return t.minus(new e.Point(this._margins.left,this._margins.top)).divide(this._containerInnerSize.x/n.width).plus(n.getTopLeft())},pointFromPixel:function(e,t){return this.pointFromPixelNoRotate(e,t).rotate(-this.getRotation(),this.getCenter(!0))},_viewportToImageDelta:function(t,i){var n=this._contentBoundsNoRotate.width;return new e.Point(t*this._contentSizeNoRotate.x/n,i*this._contentSizeNoRotate.x/n)},viewportToImageCoordinates:function(t,i){if(t instanceof e.Point)return this.viewportToImageCoordinates(t.x,t.y);if(this.viewer){var n=this.viewer.world.getItemCount();if(n>1)e.console.error("[Viewport.viewportToImageCoordinates] is not accurate with multi-image; use TiledImage.viewportToImageCoordinates instead.");else if(1===n){var r=this.viewer.world.getItemAt(0);return r.viewportToImageCoordinates(t,i,!0)}}return this._viewportToImageDelta(t-this._contentBoundsNoRotate.x,i-this._contentBoundsNoRotate.y)},_imageToViewportDelta:function(t,i){var n=this._contentBoundsNoRotate.width;return new e.Point(t/this._contentSizeNoRotate.x*n,i/this._contentSizeNoRotate.x*n)},imageToViewportCoordinates:function(t,i){if(t instanceof e.Point)return this.imageToViewportCoordinates(t.x,t.y);if(this.viewer){var n=this.viewer.world.getItemCount();if(n>1)e.console.error("[Viewport.imageToViewportCoordinates] is not accurate with multi-image; use TiledImage.imageToViewportCoordinates instead.");else if(1===n){var r=this.viewer.world.getItemAt(0);return r.imageToViewportCoordinates(t,i,!0)}}var o=this._imageToViewportDelta(t,i);return o.x+=this._contentBoundsNoRotate.x,o.y+=this._contentBoundsNoRotate.y,o},imageToViewportRectangle:function(t,i,n,r){var o=t;if(o instanceof e.Rect||(o=new e.Rect(t,i,n,r)),this.viewer){var s=this.viewer.world.getItemCount();if(s>1)e.console.error("[Viewport.imageToViewportRectangle] is not accurate with multi-image; use TiledImage.imageToViewportRectangle instead.");else if(1===s){var a=this.viewer.world.getItemAt(0);return a.imageToViewportRectangle(t,i,n,r,!0)}}var l=this.imageToViewportCoordinates(o.x,o.y),u=this._imageToViewportDelta(o.width,o.height);return new e.Rect(l.x,l.y,u.x,u.y,o.degrees)},viewportToImageRectangle:function(t,i,n,r){var o=t;if(o instanceof e.Rect||(o=new e.Rect(t,i,n,r)),this.viewer){var s=this.viewer.world.getItemCount();if(s>1)e.console.error("[Viewport.viewportToImageRectangle] is not accurate with multi-image; use TiledImage.viewportToImageRectangle instead.");else if(1===s){var a=this.viewer.world.getItemAt(0);return a.viewportToImageRectangle(t,i,n,r,!0)}}var l=this.viewportToImageCoordinates(o.x,o.y),u=this._viewportToImageDelta(o.width,o.height);return new e.Rect(l.x,l.y,u.x,u.y,o.degrees)},viewerElementToImageCoordinates:function(e){var t=this.pointFromPixel(e,!0);return this.viewportToImageCoordinates(t)},imageToViewerElementCoordinates:function(e){var t=this.imageToViewportCoordinates(e);return this.pixelFromPoint(t,!0)},windowToImageCoordinates:function(t){e.console.assert(this.viewer,"[Viewport.windowToImageCoordinates] the viewport must have a viewer.");var i=t.minus(e.getElementPosition(this.viewer.element));return this.viewerElementToImageCoordinates(i)},imageToWindowCoordinates:function(t){e.console.assert(this.viewer,"[Viewport.imageToWindowCoordinates] the viewport must have a viewer.");var i=this.imageToViewerElementCoordinates(t);return i.plus(e.getElementPosition(this.viewer.element))},viewerElementToViewportCoordinates:function(e){return this.pointFromPixel(e,!0)},viewportToViewerElementCoordinates:function(e){return this.pixelFromPoint(e,!0)},viewerElementToViewportRectangle:function(t){return e.Rect.fromSummits(this.pointFromPixel(t.getTopLeft(),!0),this.pointFromPixel(t.getTopRight(),!0),this.pointFromPixel(t.getBottomLeft(),!0))},viewportToViewerElementRectangle:function(t){return e.Rect.fromSummits(this.pixelFromPoint(t.getTopLeft(),!0),this.pixelFromPoint(t.getTopRight(),!0),this.pixelFromPoint(t.getBottomLeft(),!0))},windowToViewportCoordinates:function(t){e.console.assert(this.viewer,"[Viewport.windowToViewportCoordinates] the viewport must have a viewer.");var i=t.minus(e.getElementPosition(this.viewer.element));return this.viewerElementToViewportCoordinates(i)},viewportToWindowCoordinates:function(t){e.console.assert(this.viewer,"[Viewport.viewportToWindowCoordinates] the viewport must have a viewer.");var i=this.viewportToViewerElementCoordinates(t);return i.plus(e.getElementPosition(this.viewer.element))},viewportToImageZoom:function(t){if(this.viewer){var i=this.viewer.world.getItemCount();if(i>1)e.console.error("[Viewport.viewportToImageZoom] is not accurate with multi-image.");else if(1===i){var n=this.viewer.world.getItemAt(0);return n.viewportToImageZoom(t)}}var r=this._contentSizeNoRotate.x,o=this._containerInnerSize.x,s=this._contentBoundsNoRotate.width,a=o/r*s;return t*a},imageToViewportZoom:function(t){if(this.viewer){var i=this.viewer.world.getItemCount();if(i>1)e.console.error("[Viewport.imageToViewportZoom] is not accurate with multi-image.");else if(1===i){var n=this.viewer.world.getItemAt(0);return n.imageToViewportZoom(t)}}var r=this._contentSizeNoRotate.x,o=this._containerInnerSize.x,s=this._contentBoundsNoRotate.width,a=r/o/s;return t*a}}}(OpenSeadragon),function(e){function t(t){t._needsDraw=!1;for(var n,r,s,a,l,u,h,d,p=null,f=!1,g=e.now(),v=t.viewport.getBoundsWithMargins(!0),y=t.viewport.deltaPixelsFromPointsNoRotate(t.source.getPixelRatio(0),!0).x*t._scaleSpring.current.value,w=Math.max(t.source.minLevel,Math.floor(Math.log(t.minZoomImageRatio)/Math.log(2))),_=Math.min(Math.abs(t.source.maxLevel),Math.abs(Math.floor(Math.log(y/t.minPixelRatio)/Math.log(2))));t.lastDrawn.length>0;)n=t.lastDrawn.pop(),n.beingDrawn=!1;if(!t.wrapHorizontal&&!t.wrapVertical){var S=t.getClippedBounds(!0),E=v.intersection(S);if(null===E)return;v=E}v=v.getBoundingBox(),v.x-=t._xSpring.current.value,v.y-=t._ySpring.current.value;var T=v.getTopLeft(),x=v.getBottomRight();if((t.wrapHorizontal||!(x.x<0||T.x>t._worldWidthCurrent))&&(t.wrapVertical||!(x.y<0||T.y>t._worldHeightCurrent))){t.wrapHorizontal||(T.x=Math.max(T.x,0),x.x=Math.min(x.x,t._worldWidthCurrent)),t.wrapVertical||(T.y=Math.max(T.y,0),x.y=Math.min(x.y,t._worldHeightCurrent)),w=Math.min(w,_);var b;for(r=_;r>=w;r--){if(b=!1,s=t.viewport.deltaPixelsFromPointsNoRotate(t.source.getPixelRatio(r),!0).x*t._scaleSpring.current.value,!f&&s>=t.minPixelRatio||r==w)b=!0,f=!0;else if(!f)continue;if(a=t.viewport.deltaPixelsFromPointsNoRotate(t.source.getPixelRatio(r),!1).x*t._scaleSpring.current.value,l=t.viewport.deltaPixelsFromPointsNoRotate(t.source.getPixelRatio(Math.max(t.source.getClosestLevel(t.viewport.containerSize)-1,0)),!1).x*t._scaleSpring.current.value,u=t.immediateRender?1:l,h=Math.min(1,(s-.5)/.5),d=u/Math.abs(u-a),p=i(t,f,b,r,h,d,T,x,g,p),c(t.coverage,r))break}m(t,t.lastDrawn),p&&!p.context2D&&o(t,p,g)}}function i(e,t,i,r,o,s,a,l,u,c){var h,d,f,m,g,v=e.viewport.pixelFromPoint(e.viewport.getCenter());for(e.viewer&&e.viewer.raiseEvent("update-level",{tiledImage:e,havedrawn:t,level:r,opacity:o,visibility:s,topleft:a,bottomright:l,currenttime:u,best:c}),f=e.source.getTileAtPoint(r,a.divide(e._scaleSpring.current.value)),m=e.source.getTileAtPoint(r,l.divide(e._scaleSpring.current.value)),g=e.source.getNumTiles(r),p(e.coverage,r),e.wrapHorizontal||(m.x=Math.min(m.x,g.x-1)),e.wrapVertical||(m.y=Math.min(m.y,g.y-1)),h=f.x;h<=m.x;h++)for(d=f.y;d<=m.y;d++)c=n(e,i,t,h,d,r,o,s,v,g,u,c);return c}function n(e,t,i,n,o,s,c,p,m,g,v,y){var w=r(n,o,s,e.source,e.tilesMatrix,v,g,e._worldWidthCurrent,e._worldHeightCurrent),_=t;if(e.viewer&&e.viewer.raiseEvent("update-tile",{tiledImage:e,tile:w}),d(e.coverage,s,n,o,!1),!w.exists)return y;if(i&&!_&&(h(e.coverage,s,n,o)?d(e.coverage,s,n,o,!0):_=!0),!_)return y;if(l(w,e.source.tileOverlap,e.viewport,m,p,e),!w.loaded)if(w.context2D)a(e,w);else{var S=e._tileCache.getImageRecord(w.url);if(S){var E=S.getImage();a(e,w,E)}}if(w.loaded){var T=u(e,w,n,o,s,c,v);T&&(e._needsDraw=!0)}else w.loading||(y=f(y,w));return y}function r(t,i,n,r,o,s,a,l,u){var c,h,d,p,f,m,g;return o[n]||(o[n]={}),o[n][t]||(o[n][t]={}),o[n][t][i]||(c=(a.x+t%a.x)%a.x,h=(a.y+i%a.y)%a.y,d=r.getTileBounds(n,c,h),p=r.tileExists(n,c,h),f=r.getTileUrl(n,c,h),m=r.getContext2D?r.getContext2D(n,c,h):void 0,d.x+=(t-c)/a.x,d.y+=u/l*((i-h)/a.y),o[n][t][i]=new e.Tile(n,t,i,d,p,f,m)),g=o[n][t][i],g.lastTouchTime=s,g}function o(e,t,i){t.loading=!0,e._imageLoader.addJob({src:t.url,crossOriginPolicy:e.crossOriginPolicy,callback:function(n,r){s(e,t,i,n,r)},abort:function(){t.loading=!1}})}function s(t,i,n,r,o){if(!r)return e.console.log("Tile %s failed to load: %s - error: %s",i,i.url,o),t.viewer.raiseEvent("tile-load-failed",{tile:i,tiledImage:t,time:n,message:o}),i.loading=!1,void(i.exists=!1);if(n<t.lastResetTime)return e.console.log("Ignoring tile %s loaded before reset: %s",i,i.url),void(i.loading=!1);var s=function(){var e=Math.ceil(Math.log(t.source.getTileWidth(i.level))/Math.log(2));a(t,i,r,e)};t._midDraw?window.setTimeout(s,1):s()}function a(e,t,i,n){function r(){return s++,o}function o(){s--,0===s&&(t.loading=!1,t.loaded=!0,t.context2D||e._tileCache.cacheTile({image:i,tile:t,cutoff:n,tiledImage:e}),e._needsDraw=!0)}var s=0;e.viewer.raiseEvent("tile-loaded",{tile:t,tiledImage:e,image:i,getCompletionCallback:r}),r()()}function l(t,i,n,r,o,s){var a=t.bounds.getTopLeft();a.x*=s._scaleSpring.current.value,a.y*=s._scaleSpring.current.value,a.x+=s._xSpring.current.value,a.y+=s._ySpring.current.value;var l=t.bounds.getSize();l.x*=s._scaleSpring.current.value,l.y*=s._scaleSpring.current.value;var u=n.pixelFromPointNoRotate(a,!0),c=n.pixelFromPointNoRotate(a,!1),h=n.deltaPixelsFromPointsNoRotate(l,!0),d=n.deltaPixelsFromPointsNoRotate(l,!1),p=c.plus(d.divide(2)),f=r.distanceTo(p);i||(h=h.plus(new e.Point(1,1))),t.position=u,t.size=h,t.distance=f,t.visibility=o}function u(e,t,i,n,r,o,s){var a,l,u=1e3*e.blendTime;if(t.blendStart||(t.blendStart=s),a=s-t.blendStart,l=u?Math.min(1,a/u):1,e.alwaysBlend&&(l*=o),t.opacity=l,e.lastDrawn.push(t),1==l)d(e.coverage,r,i,n,!0),e._hasOpaqueTile=!0;else if(a<u)return!0;return!1}function c(e,t,i,n){var r,o,s,a;if(!e[t])return!1;if(void 0===i||void 0===n){r=e[t];for(s in r)if(r.hasOwnProperty(s)){o=r[s];for(a in o)if(o.hasOwnProperty(a)&&!o[a])return!1}return!0}return void 0===e[t][i]||void 0===e[t][i][n]||e[t][i][n]===!0}function h(e,t,i,n){return void 0===i||void 0===n?c(e,t+1):c(e,t+1,2*i,2*n)&&c(e,t+1,2*i,2*n+1)&&c(e,t+1,2*i+1,2*n)&&c(e,t+1,2*i+1,2*n+1)}function d(t,i,n,r,o){return t[i]?(t[i][n]||(t[i][n]={}),void(t[i][n][r]=o)):void e.console.warn("Setting coverage for a tile before its level's coverage has been reset: %s",i)}function p(e,t){e[t]={}}function f(e,t){return e?t.visibility>e.visibility?t:t.visibility==e.visibility&&t.distance<e.distance?t:e:t}function m(t,i){if(0!==i.length){var n,r,o=i[0],s=t.opacity<1||t.compositeOperation&&"source-over"!==t.compositeOperation||!t._isBottomItem()&&o._hasTransparencyChannel(),a=t.viewport.getZoom(!0),l=t.viewportToImageZoom(a);l>t.smoothTileEdgesMinZoom&&!t.iOSDevice&&(s=!0,n=o.getScaleForEdgeSmoothing(),r=o.getTranslationForEdgeSmoothing(n,t._drawer.getCanvasSize(!1),t._drawer.getCanvasSize(!0)));var u;s&&(n||(u=t.viewport.viewportToViewerElementRectangle(t.getClippedBounds(!0)).getIntegerBoundingBox().times(e.pixelDensityRatio)),t._drawer._clear(!0,u)),0===t.viewport.degrees||n||t._drawer._offsetForRotation(t.viewport.degrees,s);var c=!1;if(t._clip){t._drawer.saveContext(s);var h=t.imageToViewportRectangle(t._clip,!0),d=t._drawer.viewportToDrawerRectangle(h);n&&(d=d.times(n)),r&&(d=d.translate(r)),t._drawer.setClip(d,s),c=!0}if(t.placeholderFillStyle&&t._hasOpaqueTile===!1){var p=t._drawer.viewportToDrawerRectangle(t.getBounds(!0));n&&(p=p.times(n)),r&&(p=p.translate(r));var f=null;f="function"==typeof t.placeholderFillStyle?t.placeholderFillStyle(t,t._drawer.context):t.placeholderFillStyle,t._drawer.drawRectangle(p,f,s)}for(var m=i.length-1;m>=0;m--)o=i[m],t._drawer.drawTile(o,t._drawingHandler,s,n,r),o.beingDrawn=!0,t.viewer&&t.viewer.raiseEvent("tile-drawn",{tiledImage:t,tile:o});if(c&&t._drawer.restoreContext(s),0===t.viewport.degrees||n||t._drawer._restoreRotationChanges(s),s){var v=0!==t.viewport.degrees&&n;v&&t._drawer._offsetForRotation(t.viewport.degrees,!1),t._drawer.blendSketch({opacity:t.opacity,scale:n,translate:r,compositeOperation:t.compositeOperation,bounds:u}),v&&t._drawer._restoreRotationChanges(!1)}g(t,i)}}function g(t,i){if(t.debugMode)for(var n=i.length-1;n>=0;n--){var r=i[n];try{t._drawer.drawDebugInfo(r,i.length,n)}catch(t){e.console.error(t)}}}e.TiledImage=function(t){var i=this;e.console.assert(t.tileCache,"[TiledImage] options.tileCache is required"),e.console.assert(t.drawer,"[TiledImage] options.drawer is required"),e.console.assert(t.viewer,"[TiledImage] options.viewer is required"),e.console.assert(t.imageLoader,"[TiledImage] options.imageLoader is required"),e.console.assert(t.source,"[TiledImage] options.source is required"),e.console.assert(!t.clip||t.clip instanceof e.Rect,"[TiledImage] options.clip must be an OpenSeadragon.Rect if present"),e.EventSource.call(this),this._tileCache=t.tileCache,delete t.tileCache,this._drawer=t.drawer,delete t.drawer,this._imageLoader=t.imageLoader,delete t.imageLoader,t.clip instanceof e.Rect&&(this._clip=t.clip.clone()),delete t.clip;var n=t.x||0;delete t.x;var r=t.y||0;delete t.y,this.normHeight=t.source.dimensions.y/t.source.dimensions.x,this.contentAspectX=t.source.dimensions.x/t.source.dimensions.y;var o=1;t.width?(o=t.width,delete t.width,t.height&&(e.console.error("specifying both width and height to a tiledImage is not supported"),delete t.height)):t.height&&(o=t.height/this.normHeight,delete t.height);var s=t.fitBounds;delete t.fitBounds;var a=t.fitBoundsPlacement||OpenSeadragon.Placement.CENTER;delete t.fitBoundsPlacement,e.extend(!0,this,{viewer:null,tilesMatrix:{},coverage:{},lastDrawn:[],lastResetTime:0,_midDraw:!1,_needsDraw:!0,_hasOpaqueTile:!1,springStiffness:e.DEFAULT_SETTINGS.springStiffness,animationTime:e.DEFAULT_SETTINGS.animationTime,minZoomImageRatio:e.DEFAULT_SETTINGS.minZoomImageRatio,wrapHorizontal:e.DEFAULT_SETTINGS.wrapHorizontal,wrapVertical:e.DEFAULT_SETTINGS.wrapVertical,immediateRender:e.DEFAULT_SETTINGS.immediateRender,blendTime:e.DEFAULT_SETTINGS.blendTime,alwaysBlend:e.DEFAULT_SETTINGS.alwaysBlend,minPixelRatio:e.DEFAULT_SETTINGS.minPixelRatio,smoothTileEdgesMinZoom:e.DEFAULT_SETTINGS.smoothTileEdgesMinZoom,iOSDevice:e.DEFAULT_SETTINGS.iOSDevice,debugMode:e.DEFAULT_SETTINGS.debugMode,crossOriginPolicy:e.DEFAULT_SETTINGS.crossOriginPolicy,placeholderFillStyle:e.DEFAULT_SETTINGS.placeholderFillStyle,opacity:e.DEFAULT_SETTINGS.opacity,compositeOperation:e.DEFAULT_SETTINGS.compositeOperation},t),this._xSpring=new e.Spring({initial:n,springStiffness:this.springStiffness,animationTime:this.animationTime}),this._ySpring=new e.Spring({initial:r,springStiffness:this.springStiffness,animationTime:this.animationTime}),this._scaleSpring=new e.Spring({initial:o,springStiffness:this.springStiffness,animationTime:this.animationTime}),this._updateForScale(),s&&this.fitBounds(s,a,!0),this._drawingHandler=function(t){i.viewer.raiseEvent("tile-drawing",e.extend({tiledImage:i},t))}},e.extend(e.TiledImage.prototype,e.EventSource.prototype,{needsDraw:function(){return this._needsDraw},reset:function(){this._tileCache.clearTilesFor(this),this.lastResetTime=e.now(),this._needsDraw=!0},update:function(){var e=this._xSpring.current.value,t=this._ySpring.current.value,i=this._scaleSpring.current.value;return this._xSpring.update(),this._ySpring.update(),this._scaleSpring.update(),(this._xSpring.current.value!==e||this._ySpring.current.value!==t||this._scaleSpring.current.value!==i)&&(this._updateForScale(),this._needsDraw=!0,!0)},draw:function(){0!==this.opacity&&(this._midDraw=!0,t(this),this._midDraw=!1)},destroy:function(){this.reset()},getBounds:function(t){return t?new e.Rect(this._xSpring.current.value,this._ySpring.current.value,this._worldWidthCurrent,this._worldHeightCurrent):new e.Rect(this._xSpring.target.value,this._ySpring.target.value,this._worldWidthTarget,this._worldHeightTarget)},getWorldBounds:function(){return e.console.error("[TiledImage.getWorldBounds] is deprecated; use TiledImage.getBounds instead"),this.getBounds()},getClippedBounds:function(t){var i=this.getBounds(t);if(this._clip){var n=this._worldWidthCurrent/this.source.dimensions.x,r=this._clip.times(n);i=new e.Rect(i.x+r.x,i.y+r.y,r.width,r.height)}return i},getContentSize:function(){return new e.Point(this.source.dimensions.x,this.source.dimensions.y)},_viewportToImageDelta:function(t,i,n){var r=n?this._scaleSpring.current.value:this._scaleSpring.target.value;return new e.Point(t*(this.source.dimensions.x/r),i*(this.source.dimensions.y*this.contentAspectX/r))},viewportToImageCoordinates:function(t,i,n){return t instanceof e.Point&&(n=i,i=t.y,t=t.x),n?this._viewportToImageDelta(t-this._xSpring.current.value,i-this._ySpring.current.value):this._viewportToImageDelta(t-this._xSpring.target.value,i-this._ySpring.target.value);
	},_imageToViewportDelta:function(t,i,n){var r=n?this._scaleSpring.current.value:this._scaleSpring.target.value;return new e.Point(t/this.source.dimensions.x*r,i/this.source.dimensions.y/this.contentAspectX*r)},imageToViewportCoordinates:function(t,i,n){t instanceof e.Point&&(n=i,i=t.y,t=t.x);var r=this._imageToViewportDelta(t,i);return n?(r.x+=this._xSpring.current.value,r.y+=this._ySpring.current.value):(r.x+=this._xSpring.target.value,r.y+=this._ySpring.target.value),r},imageToViewportRectangle:function(t,i,n,r,o){var s=t;s instanceof e.Rect?o=i:s=new e.Rect(t,i,n,r);var a=this.imageToViewportCoordinates(s.getTopLeft(),o),l=this._imageToViewportDelta(s.width,s.height,o);return new e.Rect(a.x,a.y,l.x,l.y,s.degrees)},viewportToImageRectangle:function(t,i,n,r,o){var s=t;t instanceof e.Rect?o=i:s=new e.Rect(t,i,n,r);var a=this.viewportToImageCoordinates(s.getTopLeft(),o),l=this._viewportToImageDelta(s.width,s.height,o);return new e.Rect(a.x,a.y,l.x,l.y,s.degrees)},viewerElementToImageCoordinates:function(e){var t=this.viewport.pointFromPixel(e,!0);return this.viewportToImageCoordinates(t)},imageToViewerElementCoordinates:function(e){var t=this.imageToViewportCoordinates(e);return this.viewport.pixelFromPoint(t,!0)},windowToImageCoordinates:function(e){var t=e.minus(OpenSeadragon.getElementPosition(this.viewer.element));return this.viewerElementToImageCoordinates(t)},imageToWindowCoordinates:function(e){var t=this.imageToViewerElementCoordinates(e);return t.plus(OpenSeadragon.getElementPosition(this.viewer.element))},viewportToImageZoom:function(e){var t=this._scaleSpring.current.value*this.viewport._containerInnerSize.x/this.source.dimensions.x;return t*e},imageToViewportZoom:function(e){var t=this._scaleSpring.current.value*this.viewport._containerInnerSize.x/this.source.dimensions.x;return e/t},setPosition:function(e,t){var i=this._xSpring.target.value===e.x&&this._ySpring.target.value===e.y;if(t){if(i&&this._xSpring.current.value===e.x&&this._ySpring.current.value===e.y)return;this._xSpring.resetTo(e.x),this._ySpring.resetTo(e.y),this._needsDraw=!0}else{if(i)return;this._xSpring.springTo(e.x),this._ySpring.springTo(e.y),this._needsDraw=!0}i||this._raiseBoundsChange()},setWidth:function(e,t){this._setScale(e,t)},setHeight:function(e,t){this._setScale(e/this.normHeight,t)},fitBounds:function(t,i,n){i=i||e.Placement.CENTER;var r=e.Placement.properties[i],o=this.contentAspectX,s=0,a=0,l=1,u=1;if(this._clip&&(o=this._clip.getAspectRatio(),l=this._clip.width/this.source.dimensions.x,u=this._clip.height/this.source.dimensions.y,t.getAspectRatio()>o?(s=this._clip.x/this._clip.height*t.height,a=this._clip.y/this._clip.height*t.height):(s=this._clip.x/this._clip.width*t.width,a=this._clip.y/this._clip.width*t.width)),t.getAspectRatio()>o){var c=t.height/u,h=0;r.isHorizontallyCentered?h=(t.width-t.height*o)/2:r.isRight&&(h=t.width-t.height*o),this.setPosition(new e.Point(t.x-s+h,t.y-a),n),this.setHeight(c,n)}else{var d=t.width/l,p=0;r.isVerticallyCentered?p=(t.height-t.width/o)/2:r.isBottom&&(p=t.height-t.width/o),this.setPosition(new e.Point(t.x-s,t.y-a+p),n),this.setWidth(d,n)}},getClip:function(){return this._clip?this._clip.clone():null},setClip:function(t){e.console.assert(!t||t instanceof e.Rect,"[TiledImage.setClip] newClip must be an OpenSeadragon.Rect or null"),t instanceof e.Rect?this._clip=t.clone():this._clip=null,this._needsDraw=!0},getOpacity:function(){return this.opacity},setOpacity:function(e){this.opacity=e,this._needsDraw=!0},getCompositeOperation:function(){return this.compositeOperation},setCompositeOperation:function(e){this.compositeOperation=e,this._needsDraw=!0},_setScale:function(e,t){var i=this._scaleSpring.target.value===e;if(t){if(i&&this._scaleSpring.current.value===e)return;this._scaleSpring.resetTo(e),this._updateForScale(),this._needsDraw=!0}else{if(i)return;this._scaleSpring.springTo(e),this._updateForScale(),this._needsDraw=!0}i||this._raiseBoundsChange()},_updateForScale:function(){this._worldWidthTarget=this._scaleSpring.target.value,this._worldHeightTarget=this.normHeight*this._scaleSpring.target.value,this._worldWidthCurrent=this._scaleSpring.current.value,this._worldHeightCurrent=this.normHeight*this._scaleSpring.current.value},_raiseBoundsChange:function(){this.raiseEvent("bounds-change")},_isBottomItem:function(){return this.viewer.world.getItemAt(0)===this}})}(OpenSeadragon),function(e){var t=function(t){e.console.assert(t,"[TileCache.cacheTile] options is required"),e.console.assert(t.tile,"[TileCache.cacheTile] options.tile is required"),e.console.assert(t.tiledImage,"[TileCache.cacheTile] options.tiledImage is required"),this.tile=t.tile,this.tiledImage=t.tiledImage},i=function(t){e.console.assert(t,"[ImageRecord] options is required"),e.console.assert(t.image,"[ImageRecord] options.image is required"),this._image=t.image,this._tiles=[]};i.prototype={destroy:function(){this._image=null,this._renderedContext=null,this._tiles=null},getImage:function(){return this._image},getRenderedContext:function(){if(!this._renderedContext){var e=document.createElement("canvas");e.width=this._image.width,e.height=this._image.height,this._renderedContext=e.getContext("2d"),this._renderedContext.drawImage(this._image,0,0),this._image=null}return this._renderedContext},setRenderedContext:function(t){e.console.error("ImageRecord.setRenderedContext is deprecated. The rendered context should be created by the ImageRecord itself when calling ImageRecord.getRenderedContext."),this._renderedContext=t},addTile:function(t){e.console.assert(t,"[ImageRecord.addTile] tile is required"),this._tiles.push(t)},removeTile:function(t){for(var i=0;i<this._tiles.length;i++)if(this._tiles[i]===t)return void this._tiles.splice(i,1);e.console.warn("[ImageRecord.removeTile] trying to remove unknown tile",t)},getTileCount:function(){return this._tiles.length}},e.TileCache=function(t){t=t||{},this._maxImageCacheCount=t.maxImageCacheCount||e.DEFAULT_SETTINGS.maxImageCacheCount,this._tilesLoaded=[],this._imagesLoaded=[],this._imagesLoadedCount=0},e.TileCache.prototype={numTilesLoaded:function(){return this._tilesLoaded.length},cacheTile:function(n){e.console.assert(n,"[TileCache.cacheTile] options is required"),e.console.assert(n.tile,"[TileCache.cacheTile] options.tile is required"),e.console.assert(n.tile.url,"[TileCache.cacheTile] options.tile.url is required"),e.console.assert(n.tiledImage,"[TileCache.cacheTile] options.tiledImage is required");var r=n.cutoff||0,o=this._tilesLoaded.length,s=this._imagesLoaded[n.tile.url];if(s||(e.console.assert(n.image,"[TileCache.cacheTile] options.image is required to create an ImageRecord"),s=this._imagesLoaded[n.tile.url]=new i({image:n.image}),this._imagesLoadedCount++),s.addTile(n.tile),n.tile.cacheImageRecord=s,this._imagesLoadedCount>this._maxImageCacheCount){for(var a,l,u,c,h,d,p=null,f=-1,m=null,g=this._tilesLoaded.length-1;g>=0;g--)d=this._tilesLoaded[g],a=d.tile,a.level<=r||a.beingDrawn||(p?(c=a.lastTouchTime,l=p.lastTouchTime,h=a.level,u=p.level,(c<l||c==l&&h>u)&&(p=a,f=g,m=d)):(p=a,f=g,m=d));p&&f>=0&&(this._unloadTile(m),o=f)}this._tilesLoaded[o]=new t({tile:n.tile,tiledImage:n.tiledImage})},clearTilesFor:function(t){e.console.assert(t,"[TileCache.clearTilesFor] tiledImage is required");for(var i,n=0;n<this._tilesLoaded.length;++n)i=this._tilesLoaded[n],i.tiledImage===t&&(this._unloadTile(i),this._tilesLoaded.splice(n,1),n--)},getImageRecord:function(t){return e.console.assert(t,"[TileCache.getImageRecord] url is required"),this._imagesLoaded[t]},_unloadTile:function(t){e.console.assert(t,"[TileCache._unloadTile] tileRecord is required");var i=t.tile,n=t.tiledImage;i.unload(),i.cacheImageRecord=null;var r=this._imagesLoaded[i.url];r.removeTile(i),r.getTileCount()||(r.destroy(),delete this._imagesLoaded[i.url],this._imagesLoadedCount--),n.viewer.raiseEvent("tile-unloaded",{tile:i,tiledImage:n})}}}(OpenSeadragon),function(e){e.World=function(t){var i=this;e.console.assert(t.viewer,"[World] options.viewer is required"),e.EventSource.call(this),this.viewer=t.viewer,this._items=[],this._needsDraw=!1,this._autoRefigureSizes=!0,this._needsSizesFigured=!1,this._delegatedFigureSizes=function(e){i._autoRefigureSizes?i._figureSizes():i._needsSizesFigured=!0},this._figureSizes()},e.extend(e.World.prototype,e.EventSource.prototype,{addItem:function(t,i){if(e.console.assert(t,"[World.addItem] item is required"),e.console.assert(t instanceof e.TiledImage,"[World.addItem] only TiledImages supported at this time"),i=i||{},void 0!==i.index){var n=Math.max(0,Math.min(this._items.length,i.index));this._items.splice(n,0,t)}else this._items.push(t);this._autoRefigureSizes?this._figureSizes():this._needsSizesFigured=!0,this._needsDraw=!0,t.addHandler("bounds-change",this._delegatedFigureSizes),this.raiseEvent("add-item",{item:t})},getItemAt:function(t){return e.console.assert(void 0!==t,"[World.getItemAt] index is required"),this._items[t]},getIndexOfItem:function(t){return e.console.assert(t,"[World.getIndexOfItem] item is required"),e.indexOf(this._items,t)},getItemCount:function(){return this._items.length},setItemIndex:function(t,i){e.console.assert(t,"[World.setItemIndex] item is required"),e.console.assert(void 0!==i,"[World.setItemIndex] index is required");var n=this.getIndexOfItem(t);if(i>=this._items.length)throw new Error("Index bigger than number of layers.");i!==n&&n!==-1&&(this._items.splice(n,1),this._items.splice(i,0,t),this._needsDraw=!0,this.raiseEvent("item-index-change",{item:t,previousIndex:n,newIndex:i}))},removeItem:function(t){e.console.assert(t,"[World.removeItem] item is required");var i=e.indexOf(this._items,t);i!==-1&&(t.removeHandler("bounds-change",this._delegatedFigureSizes),t.destroy(),this._items.splice(i,1),this._figureSizes(),this._needsDraw=!0,this._raiseRemoveItem(t))},removeAll:function(){this.viewer._cancelPendingImages();for(var e,t=0;t<this._items.length;t++)e=this._items[t],e.removeHandler("bounds-change",this._delegatedFigureSizes),e.destroy();var i=this._items;for(this._items=[],this._figureSizes(),this._needsDraw=!0,t=0;t<i.length;t++)e=i[t],this._raiseRemoveItem(e)},resetItems:function(){for(var e=0;e<this._items.length;e++)this._items[e].reset()},update:function(){for(var e=!1,t=0;t<this._items.length;t++)e=this._items[t].update()||e;return e},draw:function(){for(var e=0;e<this._items.length;e++)this._items[e].draw();this._needsDraw=!1},needsDraw:function(){for(var e=0;e<this._items.length;e++)if(this._items[e].needsDraw())return!0;return this._needsDraw},getHomeBounds:function(){return this._homeBounds.clone()},getContentFactor:function(){return this._contentFactor},setAutoRefigureSizes:function(e){this._autoRefigureSizes=e,e&this._needsSizesFigured&&(this._figureSizes(),this._needsSizesFigured=!1)},arrange:function(t){t=t||{};var i,n=t.immediately||!1,r=t.layout||e.DEFAULT_SETTINGS.collectionLayout,o=t.rows||e.DEFAULT_SETTINGS.collectionRows,s=t.columns||e.DEFAULT_SETTINGS.collectionColumns,a=t.tileSize||e.DEFAULT_SETTINGS.collectionTileSize,l=t.tileMargin||e.DEFAULT_SETTINGS.collectionTileMargin,u=a+l;i=!t.rows&&s?s:Math.ceil(this._items.length/o);var c,h,d,p,f,m=0,g=0;this.setAutoRefigureSizes(!1);for(var v=0;v<this._items.length;v++)v&&v%i===0&&("horizontal"===r?(g+=u,m=0):(m+=u,g=0)),c=this._items[v],h=c.getBounds(),d=h.width>h.height?a:a*(h.width/h.height),p=d*(h.height/h.width),f=new e.Point(m+(a-d)/2,g+(a-p)/2),c.setPosition(f,n),c.setWidth(d,n),"horizontal"===r?m+=u:g+=u;this.setAutoRefigureSizes(!0)},_figureSizes:function(){var t=this._homeBounds?this._homeBounds.clone():null,i=this._contentSize?this._contentSize.clone():null,n=this._contentFactor||0;if(this._items.length){var r=this._items[0],o=r.getBounds();this._contentFactor=r.getContentSize().x/o.width;for(var s=r.getClippedBounds(),a=s.x,l=s.y,u=s.x+s.width,c=s.y+s.height,h=1;h<this._items.length;h++)r=this._items[h],o=r.getBounds(),this._contentFactor=Math.max(this._contentFactor,r.getContentSize().x/o.width),s=r.getClippedBounds(),a=Math.min(a,s.x),l=Math.min(l,s.y),u=Math.max(u,s.x+s.width),c=Math.max(c,s.y+s.height);this._homeBounds=new e.Rect(a,l,u-a,c-l),this._contentSize=new e.Point(this._homeBounds.width*this._contentFactor,this._homeBounds.height*this._contentFactor)}else this._homeBounds=new e.Rect(0,0,1,1),this._contentSize=new e.Point(1,1),this._contentFactor=1;this._contentFactor===n&&this._homeBounds.equals(t)&&this._contentSize.equals(i)||this.raiseEvent("metrics-change",{})},_raiseRemoveItem:function(e){this.raiseEvent("remove-item",{item:e})}})}(OpenSeadragon)},function(e,t){}])});

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _borealisThumbnail = __webpack_require__(36);
	
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
	          { className: 'borealis-tray' },
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

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Thumbnail = function Thumbnail(props) {
	  return _react2.default.createElement(
	    "div",
	    { className: "col-md-2" },
	    _react2.default.createElement(
	      "a",
	      { onClick: props.setActiveItem, className: "thumbnail " + (props.is_active ? 'active' : '') },
	      _react2.default.createElement("img", { src: props.src })
	    )
	  );
	};
	
	var propTypes = {
	  is_active: _react2.default.PropTypes.bool,
	  setActiveItem: _react2.default.PropTypes.func.isRequired,
	  src: _react2.default.PropTypes.string.isRequired
	};
	
	Thumbnail.propTypes = propTypes;
	
	exports.default = Thumbnail;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactActiveItem = __webpack_require__(32);
	
	var _reactActiveItem2 = _interopRequireDefault(_reactActiveItem);
	
	var _transcriptNav = __webpack_require__(38);
	
	var _transcriptNav2 = _interopRequireDefault(_transcriptNav);
	
	var _borealisPdfViewer = __webpack_require__(39);
	
	var _borealisPdfViewer2 = _interopRequireDefault(_borealisPdfViewer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BorealisPDF = function (_React$Component) {
	  _inherits(BorealisPDF, _React$Component);
	
	  function BorealisPDF(props) {
	    _classCallCheck(this, BorealisPDF);
	
	    var _this = _possibleConstructorReturn(this, (BorealisPDF.__proto__ || Object.getPrototypeOf(BorealisPDF)).call(this, props));
	
	    _this.viewer = _this.viewer.bind(_this);
	    return _this;
	  }
	
	  _createClass(BorealisPDF, [{
	    key: 'viewer',
	    value: function viewer() {
	      var item = this.props.getActiveItem();
	      switch (item.type) {
	        case 'pdf':
	          return _react2.default.createElement(_borealisPdfViewer2.default, item);
	          break;
	        case 'transcript':
	          return _react2.default.createElement(
	            'div',
	            null,
	            item.texts[0]
	          );
	          break;
	        default:
	          return _react2.default.createElement(
	            'div',
	            null,
	            'No Viewer Avaialable for type: "',
	            item.type,
	            '"'
	          );
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(_transcriptNav2.default, this.props)
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          this.viewer()
	        )
	      );
	    }
	  }]);
	
	  return BorealisPDF;
	}(_react2.default.Component);
	
	var propTypes = {
	  items: _react2.default.PropTypes.array
	};
	
	BorealisPDF.propTypes = propTypes;
	
	exports.default = (0, _reactActiveItem2.default)(BorealisPDF);

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TranscriptNav = function (_React$Component) {
	  _inherits(TranscriptNav, _React$Component);
	
	  function TranscriptNav(props) {
	    _classCallCheck(this, TranscriptNav);
	
	    var _this = _possibleConstructorReturn(this, (TranscriptNav.__proto__ || Object.getPrototypeOf(TranscriptNav)).call(this, props));
	
	    _this.active_index = _this.active_index.bind(_this);
	    _this.active_class = _this.active_class.bind(_this);
	    return _this;
	  }
	
	  _createClass(TranscriptNav, [{
	    key: 'active_index',
	    value: function active_index() {
	      return this.props.getActiveItemIndex();
	    }
	  }, {
	    key: 'active_class',
	    value: function active_class(i) {
	      return this.active_index() == i ? 'active' : '';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          items = _props.items,
	          class_name = _props.class_name,
	          setActiveItem = _props.setActiveItem,
	          getActiveItem = _props.getActiveItem;
	
	      var active_class = this.active_class;
	      return _react2.default.createElement(
	        'div',
	        { className: 'row image-nav' },
	        _react2.default.createElement(
	          'ul',
	          { className: 'nav nav-pills' },
	          items.map(function (item, i) {
	            return _react2.default.createElement(
	              'li',
	              { role: 'presentation', className: active_class(i), onClick: setActiveItem.bind(this, i), key: i },
	              _react2.default.createElement(
	                'a',
	                { href: '' },
	                item.label
	              )
	            );
	          })
	        )
	      );
	    }
	  }]);
	
	  return TranscriptNav;
	}(_react2.default.Component);
	
	exports.default = TranscriptNav;
	
	
	var propTypes = {
	  items: _react2.default.PropTypes.array.isRequired,
	  setActiveItem: _react2.default.PropTypes.func.isRequired
	};
	
	TranscriptNav.propTypes = propTypes;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BorealisPDFViewer = function (_React$Component) {
	  _inherits(BorealisPDFViewer, _React$Component);
	
	  function BorealisPDFViewer(props) {
	    _classCallCheck(this, BorealisPDFViewer);
	
	    return _possibleConstructorReturn(this, (BorealisPDFViewer.__proto__ || Object.getPrototypeOf(BorealisPDFViewer)).call(this, props));
	  }
	
	  _createClass(BorealisPDFViewer, [{
	    key: "render",
	    value: function render() {
	      var _props = this.props,
	          src = _props.src,
	          height = _props.height,
	          width = _props.width,
	          thumbnail = _props.thumbnail;
	
	      return _react2.default.createElement(
	        "object",
	        { data: src, type: "application/pdf", width: width, height: height },
	        _react2.default.createElement("img", { src: thumbnail }),
	        " ",
	        _react2.default.createElement(
	          "a",
	          { href: src },
	          _react2.default.createElement("span", { className: "glyphicon glyphicon-download-alt" }),
	          " ",
	          src
	        )
	      );
	    }
	  }]);
	
	  return BorealisPDFViewer;
	}(_react2.default.Component);
	
	exports.default = BorealisPDFViewer;
	
	
	BorealisPDFViewer.defaultProps = {
	  height: 500,
	  width: 800
	};
	
	BorealisPDFViewer.propTypes = {
	  src: _react2.default.PropTypes.string.isRequired,
	  height: _react2.default.PropTypes.number,
	  width: _react2.default.PropTypes.number,
	  thumbnail: _react2.default.PropTypes.string
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _borealisAudioPlayer = __webpack_require__(41);
	
	var _borealisAudioPlayer2 = _interopRequireDefault(_borealisAudioPlayer);
	
	var _transcriptNav = __webpack_require__(38);
	
	var _transcriptNav2 = _interopRequireDefault(_transcriptNav);
	
	var _reactActiveItem = __webpack_require__(32);
	
	var _reactActiveItem2 = _interopRequireDefault(_reactActiveItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BorealisAudio = function (_React$Component) {
	  _inherits(BorealisAudio, _React$Component);
	
	  function BorealisAudio(props) {
	    _classCallCheck(this, BorealisAudio);
	
	    var _this = _possibleConstructorReturn(this, (BorealisAudio.__proto__ || Object.getPrototypeOf(BorealisAudio)).call(this, props));
	
	    _this.viewer = _this.viewer.bind(_this);
	    return _this;
	  }
	
	  _createClass(BorealisAudio, [{
	    key: 'viewer',
	    value: function viewer() {
	      var item = this.props.getActiveItem();
	      switch (item.type) {
	        case 'audio':
	          return _react2.default.createElement(_borealisAudioPlayer2.default, item);
	          break;
	        case 'transcript':
	          return _react2.default.createElement(
	            'div',
	            null,
	            item.texts[0]
	          );
	          break;
	        default:
	          return _react2.default.createElement(
	            'div',
	            null,
	            'No Viewer Avaialable for type: "',
	            item.type,
	            '"'
	          );
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(_transcriptNav2.default, this.props)
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          this.viewer()
	        )
	      );
	    }
	  }]);
	
	  return BorealisAudio;
	}(_react2.default.Component);
	
	var propTypes = {
	  items: _react2.default.PropTypes.array.isRequired
	};
	
	BorealisAudio.propTypes = propTypes;
	
	exports.default = (0, _reactActiveItem2.default)(BorealisAudio);

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BorealisAudioPlayer = function (_React$Component) {
	    _inherits(BorealisAudioPlayer, _React$Component);
	
	    function BorealisAudioPlayer(props) {
	        _classCallCheck(this, BorealisAudioPlayer);
	
	        return _possibleConstructorReturn(this, (BorealisAudioPlayer.__proto__ || Object.getPrototypeOf(BorealisAudioPlayer)).call(this, props));
	    }
	
	    _createClass(BorealisAudioPlayer, [{
	        key: "render",
	        value: function render() {
	            var src = this.props.src;
	
	            return _react2.default.createElement(
	                "audio",
	                { controls: true, className: "audio-player" },
	                _react2.default.createElement("source", { src: src, type: "audio/mpeg" }),
	                "Your browser does not support the audio element."
	            );
	        }
	    }]);
	
	    return BorealisAudioPlayer;
	}(_react2.default.Component);
	
	exports.default = BorealisAudioPlayer;
	
	
	BorealisAudioPlayer.propTypes = {
	    src: _react2.default.PropTypes.string.isRequired
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transcriptNav = __webpack_require__(38);
	
	var _transcriptNav2 = _interopRequireDefault(_transcriptNav);
	
	var _reactActiveItem = __webpack_require__(32);
	
	var _reactActiveItem2 = _interopRequireDefault(_reactActiveItem);
	
	var _borealisVideoPlayer = __webpack_require__(43);
	
	var _borealisVideoPlayer2 = _interopRequireDefault(_borealisVideoPlayer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BorealisVideo = function (_React$Component) {
	  _inherits(BorealisVideo, _React$Component);
	
	  function BorealisVideo(props) {
	    _classCallCheck(this, BorealisVideo);
	
	    var _this = _possibleConstructorReturn(this, (BorealisVideo.__proto__ || Object.getPrototypeOf(BorealisVideo)).call(this, props));
	
	    _this.viewer = _this.viewer.bind(_this);
	    return _this;
	  }
	
	  _createClass(BorealisVideo, [{
	    key: 'viewer',
	    value: function viewer() {
	      var item = this.props.getActiveItem();
	      switch (item.type) {
	        case 'video':
	          return _react2.default.createElement(_borealisVideoPlayer2.default, item);
	          break;
	        case 'transcript':
	          return _react2.default.createElement(
	            'div',
	            null,
	            item.texts[0]
	          );
	          break;
	        default:
	          return _react2.default.createElement(
	            'div',
	            null,
	            'No Viewer Avaialable for type: "',
	            item.type,
	            '"'
	          );
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(_transcriptNav2.default, this.props)
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          this.viewer()
	        )
	      );
	    }
	  }]);
	
	  return BorealisVideo;
	}(_react2.default.Component);
	
	BorealisVideo.propTypes = {
	  items: _react2.default.PropTypes.array.isRequired
	};
	
	exports.default = (0, _reactActiveItem2.default)(BorealisVideo);

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BorealisVideoPlayer = function (_React$Component) {
	  _inherits(BorealisVideoPlayer, _React$Component);
	
	  function BorealisVideoPlayer(props) {
	    _classCallCheck(this, BorealisVideoPlayer);
	
	    return _possibleConstructorReturn(this, (BorealisVideoPlayer.__proto__ || Object.getPrototypeOf(BorealisVideoPlayer)).call(this, props));
	  }
	
	  _createClass(BorealisVideoPlayer, [{
	    key: "render",
	    value: function render() {
	      var _props = this.props,
	          src = _props.src,
	          width = _props.width,
	          height = _props.height;
	
	      return _react2.default.createElement(
	        "video",
	        { width: this.props.width, height: this.props.height, controls: true },
	        _react2.default.createElement("source", { src: this.props.src, type: "video/mp4" }),
	        "Your browser does not support the video tag."
	      );
	    }
	  }]);
	
	  return BorealisVideoPlayer;
	}(_react2.default.Component);
	
	exports.default = BorealisVideoPlayer;
	
	
	BorealisVideoPlayer.defaultProps = {
	  height: 800,
	  width: 800
	};
	
	BorealisVideoPlayer.propTypes = {
	  src: _react2.default.PropTypes.string.isRequired,
	  height: _react2.default.PropTypes.number,
	  width: _react2.default.PropTypes.number
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-borealis.js.map