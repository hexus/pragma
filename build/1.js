(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([[1],{

/***/ "./pragma/dist/esm-es5/pragma-group.entry.js":
/*!***************************************************!*\
  !*** ./pragma/dist/esm-es5/pragma-group.entry.js ***!
  \***************************************************/
/*! exports provided: pragma_group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pragma_group\", function() { return Group; });\n/* harmony import */ var _core_fff8af1f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-fff8af1f.js */ \"./pragma/dist/esm-es5/core-fff8af1f.js\");\n/* harmony import */ var _utils_7de9a266_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils-7de9a266.js */ \"./pragma/dist/esm-es5/utils-7de9a266.js\");\n/* harmony import */ var _types_958969d4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types-958969d4.js */ \"./pragma/dist/esm-es5/types-958969d4.js\");\n\n\n\n\nvar Group =\n/** @class */\nfunction () {\n  function Group(hostRef) {\n    Object(_core_fff8af1f_js__WEBPACK_IMPORTED_MODULE_0__[\"r\"])(this, hostRef);\n    /**\r\n     * Pragma field definition.\r\n     */\n\n    this.field = _types_958969d4_js__WEBPACK_IMPORTED_MODULE_2__[\"d\"];\n    /**\r\n     * Whether to hide the field's label.\r\n     */\n\n    this.hideLabel = false;\n  }\n  /**\r\n   * Handle the component loading.\r\n   */\n\n\n  Group.prototype.componentWillLoad = function () {\n    this.parseFieldDefinition(this.field, _types_958969d4_js__WEBPACK_IMPORTED_MODULE_2__[\"d\"]);\n  };\n  /**\r\n   * Parse the field attribute when it changes.\r\n   *\r\n   * @param {object|string} newValue\r\n   * @param {object|string} oldValue\r\n   */\n\n\n  Group.prototype.parseFieldDefinition = function (newValue, oldValue) {\n    this.field = Object(_utils_7de9a266_js__WEBPACK_IMPORTED_MODULE_1__[\"p\"])(this.field, oldValue, newValue);\n    this.path = this.field.path;\n    this.label = this.field.name;\n    this.hideLabel = !!this.field.options.hideLabel;\n  };\n\n  ;\n\n  Group.prototype.render = function () {\n    return Object(_core_fff8af1f_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"div\", {\n      \"class\": \"group-container\"\n    }, !this.hideLabel ? Object(_core_fff8af1f_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"span\", null, this.label) : null, Object(_core_fff8af1f_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"span\", null, Object(_core_fff8af1f_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"slot\", null)));\n  };\n\n  Object.defineProperty(Group, \"watchers\", {\n    get: function get() {\n      return {\n        \"field\": [\"parseFieldDefinition\"]\n      };\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(Group, \"style\", {\n    get: function get() {\n      return \".group-container{margin:8px 0}\";\n    },\n    enumerable: true,\n    configurable: true\n  });\n  return Group;\n}();\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./pragma/dist/esm-es5/pragma-group.entry.js?");

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

/***/ "./pragma/dist/esm-es5/utils-7de9a266.js":
/*!***********************************************!*\
  !*** ./pragma/dist/esm-es5/utils-7de9a266.js ***!
  \***********************************************/
/*! exports provided: p */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"p\", function() { return parseAndMergeFields; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/**\r\n * Parse and merge a set of field definitions.\r\n *\r\n * Accepts JSON object strings or JavaScript objects.\r\n *\r\n * If the first argument is an object, its reference is maintained.\r\n *\r\n * @param {Array<string|object>} fields - The fields to parse and merge.\r\n * @return {object} The parsed Field\r\n */\nfunction parseAndMergeFields() {\n  var fields = [];\n\n  for (var _i = 0; _i < arguments.length; _i++) {\n    fields[_i] = arguments[_i];\n  }\n\n  fields = fields.map(parseField);\n  var field = fields.shift();\n  return Object.assign(field, fields.reduce(Object.assign));\n}\n/**\r\n * Parse a field definition from a JSON object string or a JavaScript object.\r\n *\r\n * Throws an error if the given value is not a string or an object.\r\n *\r\n * @param {string|object} field - The field definition to parse.\r\n * @return {object} The parsed field.\r\n * @throws {Error} If the given value is not a string or an object. Accepts null.\r\n */\n\n\nfunction parseField(field) {\n  if (field == null) return {};\n  field = parseJson(field);\n  if (!Array.isArray(field) && _typeof(field) !== 'object') throw Error('Field definition must be a JSON object string or an object literal'); // TODO: Check for Field type, when it's defined\n\n  return field;\n}\n/**\r\n * Loosely parse an value as JSON.\r\n *\r\n * Parses as JSON if the value is a string, otherwise returns as-is.\r\n *\r\n * @param {*} value\r\n * @return {*}\r\n */\n\n\nfunction parseJson(value) {\n  if (typeof value === 'string') value = JSON.parse(value);\n  return value;\n}\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./pragma/dist/esm-es5/utils-7de9a266.js?");

/***/ })

}]);