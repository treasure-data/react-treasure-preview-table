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

	var React = __webpack_require__(2);
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

	      if (['time', 'v'].indexOf(column.name) === -1) {
	        var metadataText = metadata[column.name], tooltipClass;
	        if (metadataText) {
	          tooltipClass = 'treasure-preview-table-metadata sprite16 desc16';
	        } else {
	          tooltipClass = 'treasure-preview-table-metadata sprite16 nodesc16';
	          metadataText = 'no description';
	        }

	        metadataTooltip = (
	          React.createElement("span", {className: tooltipClass, "data-tooltip": metadataText})
	        );
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

/***/ }
/******/ ])
});
