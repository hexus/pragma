(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([[3],{

/***/ "./pragma/dist/esm-es5/pragma-number.entry.js":
/*!****************************************************!*\
  !*** ./pragma/dist/esm-es5/pragma-number.entry.js ***!
  \****************************************************/
/*! exports provided: pragma_number */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pragma_number\", function() { return Number; });\n/* harmony import */ var _core_b70c969b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-b70c969b.js */ \"./pragma/dist/esm-es5/core-b70c969b.js\");\n\n\nvar Number =\n/** @class */\nfunction () {\n  function Number(hostRef) {\n    Object(_core_b70c969b_js__WEBPACK_IMPORTED_MODULE_0__[\"r\"])(this, hostRef);\n    /**\r\n     * Property data.\r\n     */\n\n    this.property = {};\n  }\n\n  Number.prototype.componentWillLoad = function () {\n    this.parseProperty(this.property);\n  };\n\n  Number.prototype.parseProperty = function (newValue) {\n    if (typeof newValue === 'string') newValue = JSON.parse(newValue);\n    this.property = newValue;\n  };\n\n  ;\n\n  Number.prototype.getPath = function () {\n    return this.property ? this.property.path : '';\n  };\n\n  Number.prototype.render = function () {\n    console.log(this.property);\n    return Object(_core_b70c969b_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"input\", {\n      type: \"number\",\n      name: this.getPath()\n    });\n  };\n\n  Object.defineProperty(Number, \"watchers\", {\n    get: function get() {\n      return {\n        \"property\": [\"parseProperty\"]\n      };\n    },\n    enumerable: true,\n    configurable: true\n  });\n  return Number;\n}();\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./pragma/dist/esm-es5/pragma-number.entry.js?");

/***/ })

}]);