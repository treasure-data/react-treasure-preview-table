(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["TreasurePreviewTable"] = factory(require("React"));
	else
		root["TreasurePreviewTable"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2),
	  Tooltip = __webpack_require__(3),
	  OverlayTrigger = __webpack_require__(4);

	var TreasurePreviewTable = React.createClass({displayName: "TreasurePreviewTable",
	  getDefaultProps: function () {
	    return {
	      metadata: {},
	      columns: [],
	      rows: []
	    };
	  },
	  render: function () {

	    var metadata = this.props.metadata;
	    var columns = this.props.columns.map(function (column, key) {
	      var metadataTooltip;

	      // Skip time and v columns
	      if (['time', 'v'].indexOf(column.name) === -1) {
	        var metadataClasses = 'treasure-preview-table-metadata sprite16 ',
	          metadataText = metadata[column.name];

	        if (metadataText) {
	          metadataTooltip = (
	            React.createElement(OverlayTrigger, {placement: "top", overlay: React.createElement(Tooltip, null, metadataText)}, 
	              React.createElement("span", {className: metadataClasses + 'desc16'})
	            )
	          );
	        } else {
	          metadataTooltip = React.createElement("span", {className: metadataClasses + 'nodesc16'});
	        }
	      }

	      return (
	        React.createElement("th", {key: key, className: "treasure-preview-table-head-column"}, 
	          React.createElement("span", {className: "treasure-preview-table-head-column-title"}, column.title), 
	          React.createElement("span", {className: "treasure-preview-table-head-column-type"}, column.type), 
	          metadataTooltip
	        )
	      );
	    });

	    var rows = this.props.rows.map(function (row, key) {
	      var columns = this.props.columns.map(function (column, key) {
	        var value = JSON.stringify(row[column.name]);
	        return React.createElement("td", {key: key}, value);
	      });

	      return React.createElement("tr", {key: key, className: "treasure-preview-table-body-row"}, columns);
	    }.bind(this));

	    return (
	      React.createElement("div", {className: "treasure-preview-table datapreview"}, 
	        React.createElement("table", {className: "table table-bordered table-striped resulttable querylist"}, 
	          React.createElement("thead", null, 
	            React.createElement("tr", null, 
	              columns
	            )
	          ), 
	          React.createElement("tbody", null, 
	            rows
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = TreasurePreviewTable;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	var joinClasses = __webpack_require__(5);
	var classSet = __webpack_require__(6);
	var BootstrapMixin = __webpack_require__(7);


	var Tooltip = React.createClass({displayName: "Tooltip",
	  mixins: [BootstrapMixin],

	  propTypes: {
	    placement: React.PropTypes.oneOf(['top','right', 'bottom', 'left']),
	    positionLeft: React.PropTypes.number,
	    positionTop: React.PropTypes.number,
	    arrowOffsetLeft: React.PropTypes.number,
	    arrowOffsetTop: React.PropTypes.number
	  },

	  getDefaultProps: function () {
	    return {
	      placement: 'right'
	    };
	  },

	  render: function () {
	    var classes = {};
	    classes['tooltip'] = true;
	    classes[this.props.placement] = true;
	    classes['in'] = this.props.positionLeft != null || this.props.positionTop != null;

	    var style = {};
	    style['left'] = this.props.positionLeft;
	    style['top'] = this.props.positionTop;

	    var arrowStyle = {};
	    arrowStyle['left'] = this.props.arrowOffsetLeft;
	    arrowStyle['top'] = this.props.arrowOffsetTop;

	    return (
	        React.createElement("div", React.__spread({},  this.props, {className: joinClasses(this.props.className, classSet(classes)), style: style}), 
	          React.createElement("div", {className: "tooltip-arrow", style: arrowStyle}), 
	          React.createElement("div", {className: "tooltip-inner"}, 
	            this.props.children
	          )
	        )
	      );
	  }
	});

	module.exports = Tooltip;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	var OverlayMixin = __webpack_require__(8);
	var domUtils = __webpack_require__(9);
	var cloneWithProps = __webpack_require__(10);

	var createChainedFunction = __webpack_require__(11);
	var assign = __webpack_require__(12);

	/**
	 * Check if value one is inside or equal to the of value
	 *
	 * @param {string} one
	 * @param {string|array} of
	 * @returns {boolean}
	 */
	function isOneOf(one, of) {
	  if (Array.isArray(of)) {
	    return of.indexOf(one) >= 0;
	  }
	  return one === of;
	}

	var OverlayTrigger = React.createClass({displayName: "OverlayTrigger",
	  mixins: [OverlayMixin],

	  propTypes: {
	    trigger: React.PropTypes.oneOfType([
	      React.PropTypes.oneOf(['manual', 'click', 'hover', 'focus']),
	      React.PropTypes.arrayOf(React.PropTypes.oneOf(['click', 'hover', 'focus']))
	    ]),
	    placement: React.PropTypes.oneOf(['top','right', 'bottom', 'left']),
	    delay: React.PropTypes.number,
	    delayShow: React.PropTypes.number,
	    delayHide: React.PropTypes.number,
	    defaultOverlayShown: React.PropTypes.bool,
	    overlay: React.PropTypes.node.isRequired
	  },

	  getDefaultProps: function () {
	    return {
	      placement: 'right',
	      trigger: ['hover', 'focus']
	    };
	  },

	  getInitialState: function () {
	    return {
	      isOverlayShown: this.props.defaultOverlayShown == null ?
	        false : this.props.defaultOverlayShown,
	      overlayLeft: null,
	      overlayTop: null
	    };
	  },

	  show: function () {
	    this.setState({
	      isOverlayShown: true
	    }, function() {
	      this.updateOverlayPosition();
	    });
	  },

	  hide: function () {
	    this.setState({
	      isOverlayShown: false
	    });
	  },

	  toggle: function () {
	    this.state.isOverlayShown ?
	      this.hide() : this.show();
	  },

	  renderOverlay: function () {
	    if (!this.state.isOverlayShown) {
	      return React.createElement("span", null);
	    }

	    return cloneWithProps(
	      this.props.overlay,
	      {
	        onRequestHide: this.hide,
	        placement: this.props.placement,
	        positionLeft: this.state.overlayLeft,
	        positionTop: this.state.overlayTop
	      }
	    );
	  },

	  render: function () {
	    if (this.props.trigger === 'manual') {
	      return React.Children.only(this.props.children);
	    }

	    var props = {};

	    if (isOneOf('click', this.props.trigger)) {
	      props.onClick = createChainedFunction(this.toggle, this.props.onClick);
	    }

	    if (isOneOf('hover', this.props.trigger)) {
	      props.onMouseOver = createChainedFunction(this.handleDelayedShow, this.props.onMouseOver);
	      props.onMouseOut = createChainedFunction(this.handleDelayedHide, this.props.onMouseOut);
	    }

	    if (isOneOf('focus', this.props.trigger)) {
	      props.onFocus = createChainedFunction(this.handleDelayedShow, this.props.onFocus);
	      props.onBlur = createChainedFunction(this.handleDelayedHide, this.props.onBlur);
	    }

	    return cloneWithProps(
	      React.Children.only(this.props.children),
	      props
	    );
	  },

	  componentWillUnmount: function() {
	    clearTimeout(this._hoverDelay);
	  },

	  componentDidMount: function() {
	    this.updateOverlayPosition();
	  },

	  handleDelayedShow: function () {
	    if (this._hoverDelay != null) {
	      clearTimeout(this._hoverDelay);
	      this._hoverDelay = null;
	      return;
	    }

	    var delay = this.props.delayShow != null ?
	      this.props.delayShow : this.props.delay;

	    if (!delay) {
	      this.show();
	      return;
	    }

	    this._hoverDelay = setTimeout(function() {
	      this._hoverDelay = null;
	      this.show();
	    }.bind(this), delay);
	  },

	  handleDelayedHide: function () {
	    if (this._hoverDelay != null) {
	      clearTimeout(this._hoverDelay);
	      this._hoverDelay = null;
	      return;
	    }

	    var delay = this.props.delayHide != null ?
	      this.props.delayHide : this.props.delay;

	    if (!delay) {
	      this.hide();
	      return;
	    }

	    this._hoverDelay = setTimeout(function() {
	      this._hoverDelay = null;
	      this.hide();
	    }.bind(this), delay);
	  },

	  updateOverlayPosition: function () {
	    if (!this.isMounted()) {
	      return;
	    }

	    var pos = this.calcOverlayPosition();

	    this.setState({
	      overlayLeft: pos.left,
	      overlayTop: pos.top
	    });
	  },

	  calcOverlayPosition: function () {
	    var childOffset = this.getPosition();

	    var overlayNode = this.getOverlayDOMNode();
	    var overlayHeight = overlayNode.offsetHeight;
	    var overlayWidth = overlayNode.offsetWidth;

	    switch (this.props.placement) {
	      case 'right':
	        return {
	          top: childOffset.top + childOffset.height / 2 - overlayHeight / 2,
	          left: childOffset.left + childOffset.width
	        };
	      case 'left':
	        return {
	          top: childOffset.top + childOffset.height / 2 - overlayHeight / 2,
	          left: childOffset.left - overlayWidth
	        };
	      case 'top':
	        return {
	          top: childOffset.top - overlayHeight,
	          left: childOffset.left + childOffset.width / 2 - overlayWidth / 2
	        };
	      case 'bottom':
	        return {
	          top: childOffset.top + childOffset.height,
	          left: childOffset.left + childOffset.width / 2 - overlayWidth / 2
	        };
	      default:
	        throw new Error('calcOverlayPosition(): No such placement of "' + this.props.placement + '" found.');
	    }
	  },

	  getPosition: function () {
	    var node = this.getDOMNode();
	    var container = this.getContainerDOMNode();

	    var offset = container.tagName == 'BODY' ?
	      domUtils.getOffset(node) : domUtils.getPosition(node, container);

	    return assign({}, offset, {
	      height: node.offsetHeight,
	      width: node.offsetWidth
	    });
	  }
	});

	module.exports = OverlayTrigger;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This file contains an unmodified version of:
	 * https://github.com/facebook/react/blob/v0.12.0/src/utils/joinClasses.js
	 *
	 * This source code is licensed under the BSD-style license found here:
	 * https://github.com/facebook/react/blob/v0.12.0/LICENSE
	 * An additional grant of patent rights can be found here:
	 * https://github.com/facebook/react/blob/v0.12.0/PATENTS
	 */

	"use strict";

	/**
	 * Combines multiple className strings into one.
	 * http://jsperf.com/joinclasses-args-vs-array
	 *
	 * @param {...?string} classes
	 * @return {string}
	 */
	function joinClasses(className/*, ... */) {
	  if (!className) {
	    className = '';
	  }
	  var nextClass;
	  var argLength = arguments.length;
	  if (argLength > 1) {
	    for (var ii = 1; ii < argLength; ii++) {
	      nextClass = arguments[ii];
	      if (nextClass) {
	        className = (className ? className + ' ' : '') + nextClass;
	      }
	    }
	  }
	  return className;
	}

	module.exports = joinClasses;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This file contains an unmodified version of:
	 * https://github.com/facebook/react/blob/v0.12.0/src/vendor/stubs/cx.js
	 *
	 * This source code is licensed under the BSD-style license found here:
	 * https://github.com/facebook/react/blob/v0.12.0/LICENSE
	 * An additional grant of patent rights can be found here:
	 * https://github.com/facebook/react/blob/v0.12.0/PATENTS
	 */

	/**
	 * This function is used to mark string literals representing CSS class names
	 * so that they can be transformed statically. This allows for modularization
	 * and minification of CSS class names.
	 *
	 * In static_upstream, this function is actually implemented, but it should
	 * eventually be replaced with something more descriptive, and the transform
	 * that is used in the main stack should be ported for use elsewhere.
	 *
	 * @param string|object className to modularize, or an object of key/values.
	 *                      In the object case, the values are conditions that
	 *                      determine if the className keys should be included.
	 * @param [string ...]  Variable list of classNames in the string case.
	 * @return string       Renderable space-separated CSS className.
	 */
	function cx(classNames) {
	  if (typeof classNames == 'object') {
	    return Object.keys(classNames).filter(function(className) {
	      return classNames[className];
	    }).join(' ');
	  } else {
	    return Array.prototype.join.call(arguments, ' ');
	  }
	}

	module.exports = cx;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	var constants = __webpack_require__(13);

	var BootstrapMixin = {
	  propTypes: {
	    bsClass: React.PropTypes.oneOf(Object.keys(constants.CLASSES)),
	    bsStyle: React.PropTypes.oneOf(Object.keys(constants.STYLES)),
	    bsSize: React.PropTypes.oneOf(Object.keys(constants.SIZES))
	  },

	  getBsClassSet: function () {
	    var classes = {};

	    var bsClass = this.props.bsClass && constants.CLASSES[this.props.bsClass];
	    if (bsClass) {
	      classes[bsClass] = true;

	      var prefix = bsClass + '-';

	      var bsSize = this.props.bsSize && constants.SIZES[this.props.bsSize];
	      if (bsSize) {
	        classes[prefix + bsSize] = true;
	      }

	      var bsStyle = this.props.bsStyle && constants.STYLES[this.props.bsStyle];
	      if (this.props.bsStyle) {
	        classes[prefix + bsStyle] = true;
	      }
	    }

	    return classes;
	  }
	};

	module.exports = BootstrapMixin;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	var CustomPropTypes = __webpack_require__(14);

	module.exports = {
	  propTypes: {
	    container: CustomPropTypes.mountable
	  },

	  getDefaultProps: function () {
	    return {
	      container: {
	        // Provide `getDOMNode` fn mocking a React component API. The `document.body`
	        // reference needs to be contained within this function so that it is not accessed
	        // in environments where it would not be defined, e.g. nodejs. Equally this is needed
	        // before the body is defined where `document.body === null`, this ensures
	        // `document.body` is only accessed after componentDidMount.
	        getDOMNode: function getDOMNode() {
	          return document.body;
	        }
	      }
	    };
	  },

	  componentWillUnmount: function () {
	    this._unrenderOverlay();
	    if (this._overlayTarget) {
	      this.getContainerDOMNode()
	        .removeChild(this._overlayTarget);
	      this._overlayTarget = null;
	    }
	  },

	  componentDidUpdate: function () {
	    this._renderOverlay();
	  },

	  componentDidMount: function () {
	    this._renderOverlay();
	  },

	  _mountOverlayTarget: function () {
	    this._overlayTarget = document.createElement('div');
	    this.getContainerDOMNode()
	      .appendChild(this._overlayTarget);
	  },

	  _renderOverlay: function () {
	    if (!this._overlayTarget) {
	      this._mountOverlayTarget();
	    }

	    var overlay = this.renderOverlay();

	    // Save reference to help testing
	    if (overlay !== null) {
	      this._overlayInstance = React.render(overlay, this._overlayTarget);
	    } else {
	      // Unrender if the component is null for transitions to null
	      this._unrenderOverlay();
	    }
	  },

	  _unrenderOverlay: function () {
	    React.unmountComponentAtNode(this._overlayTarget);
	    this._overlayInstance = null;
	  },

	  getOverlayDOMNode: function () {
	    if (!this.isMounted()) {
	      throw new Error('getOverlayDOMNode(): A component must be mounted to have a DOM node.');
	    }

	    if (this._overlayInstance) {
	      return this._overlayInstance.getDOMNode();
	    }

	    return null;
	  },

	  getContainerDOMNode: function () {
	    return this.props.container.getDOMNode ?
	      this.props.container.getDOMNode() : this.props.container;
	  }
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Shortcut to compute element style
	 *
	 * @param {HTMLElement} elem
	 * @returns {CssStyle}
	 */
	function getComputedStyles(elem) {
	  return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
	}

	/**
	 * Get elements offset
	 *
	 * TODO: REMOVE JQUERY!
	 *
	 * @param {HTMLElement} DOMNode
	 * @returns {{top: number, left: number}}
	 */
	function getOffset(DOMNode) {
	  if (window.jQuery) {
	    return window.jQuery(DOMNode).offset();
	  }

	  var docElem = document.documentElement;
	  var box = { top: 0, left: 0 };

	  // If we don't have gBCR, just use 0,0 rather than error
	  // BlackBerry 5, iOS 3 (original iPhone)
	  if ( typeof DOMNode.getBoundingClientRect !== 'undefined' ) {
	    box = DOMNode.getBoundingClientRect();
	  }

	  return {
	    top: box.top + window.pageYOffset - docElem.clientTop,
	    left: box.left + window.pageXOffset - docElem.clientLeft
	  };
	}

	/**
	 * Get elements position
	 *
	 * TODO: REMOVE JQUERY!
	 *
	 * @param {HTMLElement} elem
	 * @param {HTMLElement?} offsetParent
	 * @returns {{top: number, left: number}}
	 */
	function getPosition(elem, offsetParent) {
	  if (window.jQuery) {
	    return window.jQuery(elem).position();
	  }

	  var offset,
	      parentOffset = {top: 0, left: 0};

	  // Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
	  if (getComputedStyles(elem).position === 'fixed' ) {
	    // We assume that getBoundingClientRect is available when computed position is fixed
	    offset = elem.getBoundingClientRect();

	  } else {
	    if (!offsetParent) {
	      // Get *real* offsetParent
	      offsetParent = offsetParent(elem);
	    }

	    // Get correct offsets
	    offset = getOffset(elem);
	    if ( offsetParent.nodeName !== 'HTML') {
	      parentOffset = getOffset(offsetParent);
	    }

	    // Add offsetParent borders
	    parentOffset.top += parseInt(getComputedStyles(offsetParent).borderTopWidth, 10);
	    parentOffset.left += parseInt(getComputedStyles(offsetParent).borderLeftWidth, 10);
	  }

	  // Subtract parent offsets and element margins
	  return {
	    top: offset.top - parentOffset.top - parseInt(getComputedStyles(elem).marginTop, 10),
	    left: offset.left - parentOffset.left - parseInt(getComputedStyles(elem).marginLeft, 10)
	  };
	}

	/**
	 * Get parent element
	 *
	 * @param {HTMLElement?} elem
	 * @returns {HTMLElement}
	 */
	function offsetParent(elem) {
	  var docElem = document.documentElement;
	  var offsetParent = elem.offsetParent || docElem;

	  while ( offsetParent && ( offsetParent.nodeName !== 'HTML' &&
	    getComputedStyles(offsetParent).position === 'static' ) ) {
	    offsetParent = offsetParent.offsetParent;
	  }

	  return offsetParent || docElem;
	}

	module.exports = {
	  getComputedStyles: getComputedStyles,
	  getOffset: getOffset,
	  getPosition: getPosition,
	  offsetParent: offsetParent
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This file contains modified versions of:
	 * https://github.com/facebook/react/blob/v0.12.0/src/utils/cloneWithProps.js
	 * https://github.com/facebook/react/blob/v0.12.0/src/core/ReactPropTransferer.js
	 *
	 * This source code is licensed under the BSD-style license found here:
	 * https://github.com/facebook/react/blob/v0.12.0/LICENSE
	 * An additional grant of patent rights can be found here:
	 * https://github.com/facebook/react/blob/v0.12.0/PATENTS
	 *
	 * TODO: This should be replaced as soon as cloneWithProps is available via
	 *  the core React package or a separate package.
	 *  @see https://github.com/facebook/react/issues/1906
	 */

	var React = __webpack_require__(2);
	var joinClasses = __webpack_require__(5);
	var assign = __webpack_require__(12);

	/**
	 * Creates a transfer strategy that will merge prop values using the supplied
	 * `mergeStrategy`. If a prop was previously unset, this just sets it.
	 *
	 * @param {function} mergeStrategy
	 * @return {function}
	 */
	function createTransferStrategy(mergeStrategy) {
	  return function(props, key, value) {
	    if (!props.hasOwnProperty(key)) {
	      props[key] = value;
	    } else {
	      props[key] = mergeStrategy(props[key], value);
	    }
	  };
	}

	var transferStrategyMerge = createTransferStrategy(function(a, b) {
	  // `merge` overrides the first object's (`props[key]` above) keys using the
	  // second object's (`value`) keys. An object's style's existing `propA` would
	  // get overridden. Flip the order here.
	  return assign({}, b, a);
	});

	function emptyFunction() {}

	/**
	 * Transfer strategies dictate how props are transferred by `transferPropsTo`.
	 * NOTE: if you add any more exceptions to this list you should be sure to
	 * update `cloneWithProps()` accordingly.
	 */
	var TransferStrategies = {
	  /**
	   * Never transfer `children`.
	   */
	  children: emptyFunction,
	  /**
	   * Transfer the `className` prop by merging them.
	   */
	  className: createTransferStrategy(joinClasses),
	  /**
	   * Transfer the `style` prop (which is an object) by merging them.
	   */
	  style: transferStrategyMerge
	};

	/**
	 * Mutates the first argument by transferring the properties from the second
	 * argument.
	 *
	 * @param {object} props
	 * @param {object} newProps
	 * @return {object}
	 */
	function transferInto(props, newProps) {
	  for (var thisKey in newProps) {
	    if (!newProps.hasOwnProperty(thisKey)) {
	      continue;
	    }

	    var transferStrategy = TransferStrategies[thisKey];

	    if (transferStrategy && TransferStrategies.hasOwnProperty(thisKey)) {
	      transferStrategy(props, thisKey, newProps[thisKey]);
	    } else if (!props.hasOwnProperty(thisKey)) {
	      props[thisKey] = newProps[thisKey];
	    }
	  }
	  return props;
	}

	/**
	 * Merge two props objects using TransferStrategies.
	 *
	 * @param {object} oldProps original props (they take precedence)
	 * @param {object} newProps new props to merge in
	 * @return {object} a new object containing both sets of props merged.
	 */
	function mergeProps(oldProps, newProps) {
	  return transferInto(assign({}, oldProps), newProps);
	}


	var ReactPropTransferer = {
	  mergeProps: mergeProps
	};

	var CHILDREN_PROP = 'children';

	/**
	 * Sometimes you want to change the props of a child passed to you. Usually
	 * this is to add a CSS class.
	 *
	 * @param {object} child child component you'd like to clone
	 * @param {object} props props you'd like to modify. They will be merged
	 * as if you used `transferPropsTo()`.
	 * @return {object} a clone of child with props merged in.
	 */
	function cloneWithProps(child, props) {
	  var newProps = ReactPropTransferer.mergeProps(props, child.props);

	  // Use `child.props.children` if it is provided.
	  if (!newProps.hasOwnProperty(CHILDREN_PROP) &&
	    child.props.hasOwnProperty(CHILDREN_PROP)) {
	    newProps.children = child.props.children;
	  }

	  if (React.version.substr(0, 4) === '0.12'){
	    var mockLegacyFactory = function(){};
	    mockLegacyFactory.isReactLegacyFactory = true;
	    mockLegacyFactory.type = child.type;

	    return React.createElement(mockLegacyFactory, newProps);
	  }

	  // The current API doesn't retain _owner and _context, which is why this
	  // doesn't use ReactElement.cloneAndReplaceProps.
	  return React.createElement(child.type, newProps);
	}

	module.exports = cloneWithProps;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Safe chained function
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 *
	 * @param {function} one
	 * @param {function} two
	 * @returns {function|null}
	 */
	function createChainedFunction(one, two) {
	  var hasOne = typeof one === 'function';
	  var hasTwo = typeof two === 'function';

	  if (!hasOne && !hasTwo) { return null; }
	  if (!hasOne) { return two; }
	  if (!hasTwo) { return one; }

	  return function chainedFunction() {
	    one.apply(this, arguments);
	    two.apply(this, arguments);
	  };
	}

	module.exports = createChainedFunction;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This file contains an unmodified version of:
	 * https://github.com/facebook/react/blob/v0.12.0/src/vendor/stubs/Object.assign.js
	 *
	 * This source code is licensed under the BSD-style license found here:
	 * https://github.com/facebook/react/blob/v0.12.0/LICENSE
	 * An additional grant of patent rights can be found here:
	 * https://github.com/facebook/react/blob/v0.12.0/PATENTS
	 */

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign

	function assign(target, sources) {
	  if (target == null) {
	    throw new TypeError('Object.assign target cannot be null or undefined');
	  }

	  var to = Object(target);
	  var hasOwnProperty = Object.prototype.hasOwnProperty;

	  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
	    var nextSource = arguments[nextIndex];
	    if (nextSource == null) {
	      continue;
	    }

	    var from = Object(nextSource);

	    // We don't currently support accessors nor proxies. Therefore this
	    // copy cannot throw. If we ever supported this then we must handle
	    // exceptions and side-effects. We don't support symbols so they won't
	    // be transferred.

	    for (var key in from) {
	      if (hasOwnProperty.call(from, key)) {
	        to[key] = from[key];
	      }
	    }
	  }

	  return to;
	};

	module.exports = assign;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  CLASSES: {
	    'alert': 'alert',
	    'button': 'btn',
	    'button-group': 'btn-group',
	    'button-toolbar': 'btn-toolbar',
	    'column': 'col',
	    'input-group': 'input-group',
	    'form': 'form',
	    'glyphicon': 'glyphicon',
	    'label': 'label',
	    'list-group-item': 'list-group-item',
	    'panel': 'panel',
	    'panel-group': 'panel-group',
	    'progress-bar': 'progress-bar',
	    'nav': 'nav',
	    'navbar': 'navbar',
	    'modal': 'modal',
	    'row': 'row',
	    'well': 'well'
	  },
	  STYLES: {
	    'default': 'default',
	    'primary': 'primary',
	    'success': 'success',
	    'info': 'info',
	    'warning': 'warning',
	    'danger': 'danger',
	    'link': 'link',
	    'inline': 'inline',
	    'tabs': 'tabs',
	    'pills': 'pills'
	  },
	  SIZES: {
	    'large': 'lg',
	    'medium': 'md',
	    'small': 'sm',
	    'xsmall': 'xs'
	  },
	  GLYPHS: [
	    'asterisk',
	    'plus',
	    'euro',
	    'eur',
	    'minus',
	    'cloud',
	    'envelope',
	    'pencil',
	    'glass',
	    'music',
	    'search',
	    'heart',
	    'star',
	    'star-empty',
	    'user',
	    'film',
	    'th-large',
	    'th',
	    'th-list',
	    'ok',
	    'remove',
	    'zoom-in',
	    'zoom-out',
	    'off',
	    'signal',
	    'cog',
	    'trash',
	    'home',
	    'file',
	    'time',
	    'road',
	    'download-alt',
	    'download',
	    'upload',
	    'inbox',
	    'play-circle',
	    'repeat',
	    'refresh',
	    'list-alt',
	    'lock',
	    'flag',
	    'headphones',
	    'volume-off',
	    'volume-down',
	    'volume-up',
	    'qrcode',
	    'barcode',
	    'tag',
	    'tags',
	    'book',
	    'bookmark',
	    'print',
	    'camera',
	    'font',
	    'bold',
	    'italic',
	    'text-height',
	    'text-width',
	    'align-left',
	    'align-center',
	    'align-right',
	    'align-justify',
	    'list',
	    'indent-left',
	    'indent-right',
	    'facetime-video',
	    'picture',
	    'map-marker',
	    'adjust',
	    'tint',
	    'edit',
	    'share',
	    'check',
	    'move',
	    'step-backward',
	    'fast-backward',
	    'backward',
	    'play',
	    'pause',
	    'stop',
	    'forward',
	    'fast-forward',
	    'step-forward',
	    'eject',
	    'chevron-left',
	    'chevron-right',
	    'plus-sign',
	    'minus-sign',
	    'remove-sign',
	    'ok-sign',
	    'question-sign',
	    'info-sign',
	    'screenshot',
	    'remove-circle',
	    'ok-circle',
	    'ban-circle',
	    'arrow-left',
	    'arrow-right',
	    'arrow-up',
	    'arrow-down',
	    'share-alt',
	    'resize-full',
	    'resize-small',
	    'exclamation-sign',
	    'gift',
	    'leaf',
	    'fire',
	    'eye-open',
	    'eye-close',
	    'warning-sign',
	    'plane',
	    'calendar',
	    'random',
	    'comment',
	    'magnet',
	    'chevron-up',
	    'chevron-down',
	    'retweet',
	    'shopping-cart',
	    'folder-close',
	    'folder-open',
	    'resize-vertical',
	    'resize-horizontal',
	    'hdd',
	    'bullhorn',
	    'bell',
	    'certificate',
	    'thumbs-up',
	    'thumbs-down',
	    'hand-right',
	    'hand-left',
	    'hand-up',
	    'hand-down',
	    'circle-arrow-right',
	    'circle-arrow-left',
	    'circle-arrow-up',
	    'circle-arrow-down',
	    'globe',
	    'wrench',
	    'tasks',
	    'filter',
	    'briefcase',
	    'fullscreen',
	    'dashboard',
	    'paperclip',
	    'heart-empty',
	    'link',
	    'phone',
	    'pushpin',
	    'usd',
	    'gbp',
	    'sort',
	    'sort-by-alphabet',
	    'sort-by-alphabet-alt',
	    'sort-by-order',
	    'sort-by-order-alt',
	    'sort-by-attributes',
	    'sort-by-attributes-alt',
	    'unchecked',
	    'expand',
	    'collapse-down',
	    'collapse-up',
	    'log-in',
	    'flash',
	    'log-out',
	    'new-window',
	    'record',
	    'save',
	    'open',
	    'saved',
	    'import',
	    'export',
	    'send',
	    'floppy-disk',
	    'floppy-saved',
	    'floppy-remove',
	    'floppy-save',
	    'floppy-open',
	    'credit-card',
	    'transfer',
	    'cutlery',
	    'header',
	    'compressed',
	    'earphone',
	    'phone-alt',
	    'tower',
	    'stats',
	    'sd-video',
	    'hd-video',
	    'subtitles',
	    'sound-stereo',
	    'sound-dolby',
	    'sound-5-1',
	    'sound-6-1',
	    'sound-7-1',
	    'copyright-mark',
	    'registration-mark',
	    'cloud-download',
	    'cloud-upload',
	    'tree-conifer',
	    'tree-deciduous',
	    'cd',
	    'save-file',
	    'open-file',
	    'level-up',
	    'copy',
	    'paste',
	    'alert',
	    'equalizer',
	    'king',
	    'queen',
	    'pawn',
	    'bishop',
	    'knight',
	    'baby-formula',
	    'tent',
	    'blackboard',
	    'bed',
	    'apple',
	    'erase',
	    'hourglass',
	    'lamp',
	    'duplicate',
	    'piggy-bank',
	    'scissors',
	    'bitcoin',
	    'yen',
	    'ruble',
	    'scale',
	    'ice-lolly',
	    'ice-lolly-tasted',
	    'education',
	    'option-horizontal',
	    'option-vertical',
	    'menu-hamburger',
	    'modal-window',
	    'oil',
	    'grain',
	    'sunglasses',
	    'text-size',
	    'text-color',
	    'text-background',
	    'object-align-top',
	    'object-align-bottom',
	    'object-align-horizontal',
	    'object-align-left',
	    'object-align-vertical',
	    'object-align-right',
	    'triangle-right',
	    'triangle-left',
	    'triangle-bottom',
	    'triangle-top',
	    'console',
	    'superscript',
	    'subscript',
	    'menu-left',
	    'menu-right',
	    'menu-down',
	    'menu-up'
	  ]
	};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);

	var ANONYMOUS = '<<anonymous>>';

	var CustomPropTypes = {
	  /**
	   * Checks whether a prop provides a DOM element
	   *
	   * The element can be provided in two forms:
	   * - Directly passed
	   * - Or passed an object which has a `getDOMNode` method which will return the required DOM element
	   *
	   * @param props
	   * @param propName
	   * @param componentName
	   * @returns {Error|undefined}
	   */
	  mountable: createMountableChecker()
	};

	/**
	 * Create chain-able isRequired validator
	 *
	 * Largely copied directly from:
	 *  https://github.com/facebook/react/blob/0.11-stable/src/core/ReactPropTypes.js#L94
	 */
	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName) {
	    componentName = componentName || ANONYMOUS;
	    if (props[propName] == null) {
	      if (isRequired) {
	        return new Error(
	          'Required prop `' + propName + '` was not specified in ' +
	            '`' + componentName + '`.'
	        );
	      }
	    } else {
	      return validate(props, propName, componentName);
	    }
	  }

	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);

	  return chainedCheckType;
	}

	function createMountableChecker() {
	  function validate(props, propName, componentName) {
	    if (typeof props[propName] !== 'object' ||
	      typeof props[propName].getDOMNode !== 'function' && props[propName].nodeType !== 1) {
	      return new Error(
	        'Invalid prop `' + propName + '` supplied to ' +
	          '`' + componentName + '`, expected a DOM element or an object that has a `getDOMNode` method'
	      );
	    }
	  }

	  return createChainableTypeChecker(validate);
	}

	module.exports = CustomPropTypes;

/***/ }
/******/ ])
});
