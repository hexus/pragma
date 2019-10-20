(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([[2],{

/***/ "./pragma/dist/esm-es5/pragma-number.entry.js":
/*!****************************************************!*\
  !*** ./pragma/dist/esm-es5/pragma-number.entry.js ***!
  \****************************************************/
/*! exports provided: pragma_number */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pragma_number\", function() { return Number; });\n/* harmony import */ var _core_49716357_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-49716357.js */ \"./pragma/dist/esm-es5/core-49716357.js\");\n\n/**\r\n * Loosely parse an value as JSON.\r\n *\r\n * Parses as JSON if the value is a string, otherwise returns as-is.\r\n *\r\n * @param {*} value\r\n * @return {*}\r\n */\n\nfunction parseJson(value) {\n  if (typeof value === 'string') value = JSON.parse(value);\n  return value;\n}\n\nvar Number =\n/** @class */\nfunction () {\n  function Number(hostRef) {\n    Object(_core_49716357_js__WEBPACK_IMPORTED_MODULE_0__[\"r\"])(this, hostRef);\n    /**\r\n     * Property data.\r\n     */\n\n    this.property = {};\n  }\n\n  Number.prototype.componentWillLoad = function () {\n    this.parseProperty(this.property);\n  };\n\n  Number.prototype.parseProperty = function (newValue) {\n    this.property = parseJson(newValue);\n  };\n\n  ;\n\n  Number.prototype.render = function () {\n    console.log(this.property);\n    return Object(_core_49716357_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"input\", {\n      type: \"number\",\n      name: this.property.path\n    });\n  };\n\n  Object.defineProperty(Number, \"watchers\", {\n    get: function get() {\n      return {\n        \"property\": [\"parseProperty\"]\n      };\n    },\n    enumerable: true,\n    configurable: true\n  });\n  return Number;\n}();\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./pragma/dist/esm-es5/pragma-number.entry.js?");

/***/ })

}]);