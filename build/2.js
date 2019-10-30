(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([[2],{

/***/ "./pragma/dist/esm-es5/pragma-number.entry.js":
/*!****************************************************!*\
  !*** ./pragma/dist/esm-es5/pragma-number.entry.js ***!
  \****************************************************/
/*! exports provided: pragma_number */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pragma_number\", function() { return Number; });\n/* harmony import */ var _core_fff8af1f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-fff8af1f.js */ \"./pragma/dist/esm-es5/core-fff8af1f.js\");\n/* harmony import */ var _utils_af84b61f_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils-af84b61f.js */ \"./pragma/dist/esm-es5/utils-af84b61f.js\");\n/* harmony import */ var _types_958969d4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types-958969d4.js */ \"./pragma/dist/esm-es5/types-958969d4.js\");\n\n\n\n\nvar Number =\n/** @class */\nfunction () {\n  function Number(hostRef) {\n    Object(_core_fff8af1f_js__WEBPACK_IMPORTED_MODULE_0__[\"r\"])(this, hostRef);\n    /**\r\n     * Pragma field definition.\r\n     *\r\n     * TODO: Field definition type.\r\n     */\n\n    this.field = _types_958969d4_js__WEBPACK_IMPORTED_MODULE_2__[\"d\"];\n    /**\r\n     * The value step.\r\n     */\n\n    this.step = 1;\n    /**\r\n     * The field's value.\r\n     */\n\n    this.value = 0;\n    /**\r\n     * Whether the field is disabled.\r\n     */\n\n    this.disabled = false;\n  }\n  /**\r\n   * Handle the component loading.\r\n   */\n\n\n  Number.prototype.componentWillLoad = function () {\n    this.parseFieldDefinition(this.field, _types_958969d4_js__WEBPACK_IMPORTED_MODULE_2__[\"d\"]);\n  };\n  /**\r\n   * Parse the field attribute when it changes.\r\n   *\r\n   * @param {object|string} newValue\r\n   * @param {object|string} oldValue\r\n   */\n\n\n  Number.prototype.parseFieldDefinition = function (newValue, oldValue) {\n    this.field = Object.assign(Object(_utils_af84b61f_js__WEBPACK_IMPORTED_MODULE_1__[\"p\"])(this.field), Object.assign(Object(_utils_af84b61f_js__WEBPACK_IMPORTED_MODULE_1__[\"p\"])(oldValue), Object(_utils_af84b61f_js__WEBPACK_IMPORTED_MODULE_1__[\"p\"])(newValue)));\n    console.log('pragma-number', oldValue, newValue, this.field);\n    this.path = this.field.path;\n    this.label = this.field.name;\n    this.min = this.field.options.min;\n    this.max = this.field.options.max;\n    this.step = this.field.options.step;\n    this.value = this.field.value;\n    this.disabled = this.field.disabled;\n  };\n\n  ;\n\n  Number.prototype.render = function () {\n    console.log(this.field, this.path, this.label, this.min, this.max, this.step, this.value, this.disabled);\n    return Object(_core_fff8af1f_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"input\", {\n      type: \"number\",\n      name: this.path,\n      title: this.label,\n      min: this.min,\n      max: this.max,\n      step: this.step,\n      value: this.value,\n      disabled: this.disabled\n    });\n  };\n\n  Object.defineProperty(Number, \"watchers\", {\n    get: function get() {\n      return {\n        \"field\": [\"parseFieldDefinition\"]\n      };\n    },\n    enumerable: true,\n    configurable: true\n  });\n  return Number;\n}();\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./pragma/dist/esm-es5/pragma-number.entry.js?");

/***/ }),

/***/ "./pragma/dist/esm-es5/types-958969d4.js":
/*!***********************************************!*\
  !*** ./pragma/dist/esm-es5/types-958969d4.js ***!
  \***********************************************/
/*! exports provided: d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"d\", function() { return defaultField; });\n/**\r\n * Default field definition.\r\n */\nvar defaultField = {\n  path: null,\n  name: null,\n  value: null,\n  options: {},\n  visible: true,\n  disabled: false\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./pragma/dist/esm-es5/types-958969d4.js?");

/***/ }),

/***/ "./pragma/dist/esm-es5/utils-af84b61f.js":
/*!***********************************************!*\
  !*** ./pragma/dist/esm-es5/utils-af84b61f.js ***!
  \***********************************************/
/*! exports provided: p */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"p\", function() { return parseField; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/**\r\n * Parse a field definition from a JSON object string or a JavaScript object.\r\n *\r\n * Throws an error if the given value is not a string or an object.\r\n *\r\n * @param {string|object} field - The field definition to parse.\r\n * @return {object} The parsed JSON object.\r\n * @throws {Error} If the given value is not a string or an object. Accepts null.\r\n */\nfunction parseField(field) {\n  if (field == null) return {};\n  field = parseJson(field);\n  if (!Array.isArray(field) && _typeof(field) !== 'object') throw Error('Field definition must be a JSON object string or an object literal'); // TODO: Check for Field type, when it's defined\n\n  return field;\n}\n/**\r\n * Loosely parse an value as JSON.\r\n *\r\n * Parses as JSON if the value is a string, otherwise returns as-is.\r\n *\r\n * @param {*} value\r\n * @return {*}\r\n */\n\n\nfunction parseJson(value) {\n  if (typeof value === 'string') value = JSON.parse(value);\n  return value;\n}\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./pragma/dist/esm-es5/utils-af84b61f.js?");

/***/ })

}]);