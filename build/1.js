(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([[1],{

/***/ "./pragma/dist/esm-es5/pragma-string.entry.js":
/*!****************************************************!*\
  !*** ./pragma/dist/esm-es5/pragma-string.entry.js ***!
  \****************************************************/
/*! exports provided: pragma_string */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pragma_string\", function() { return String; });\n/* harmony import */ var _core_fa8589cf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-fa8589cf.js */ \"./pragma/dist/esm-es5/core-fa8589cf.js\");\n/* harmony import */ var _utils_af84b61f_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils-af84b61f.js */ \"./pragma/dist/esm-es5/utils-af84b61f.js\");\n\n\nvar defaultField = {\n  path: null,\n  name: null,\n  value: null,\n  options: {},\n  visible: true,\n  disabled: false\n};\n\nvar String =\n/** @class */\nfunction () {\n  function String(hostRef) {\n    Object(_core_fa8589cf_js__WEBPACK_IMPORTED_MODULE_0__[\"r\"])(this, hostRef);\n    /**\r\n     * Pragma field definition.\r\n     */\n\n    this.field = defaultField;\n    /**\r\n     * The field's value.\r\n     */\n\n    this.value = '';\n    /**\r\n     * Whether the field is disabled.\r\n     */\n\n    this.disabled = false;\n  }\n  /**\r\n   * Handle the component loading.\r\n   */\n\n\n  String.prototype.componentWillLoad = function () {\n    this.parseFieldDefinition(this.field, defaultField);\n  };\n  /**\r\n   * Parse the field attribute when it changes.\r\n   *\r\n   * @param {object|string} newValue\r\n   * @param {object|string} oldValue\r\n   */\n\n\n  String.prototype.parseFieldDefinition = function (newValue, oldValue) {\n    var parsedField = Object(_utils_af84b61f_js__WEBPACK_IMPORTED_MODULE_1__[\"p\"])(newValue);\n    this.field = Object.assign(oldValue, parsedField);\n    console.log('pragma-string', oldValue, newValue, parsedField, this.field);\n    this.path = this.field.path;\n    this.label = this.field.name;\n    this.value = this.field.value;\n    this.disabled = this.field.disabled;\n  };\n\n  ;\n\n  String.prototype.render = function () {\n    return Object(_core_fa8589cf_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"input\", {\n      type: \"text\",\n      name: this.path,\n      title: this.label,\n      value: this.value,\n      disabled: this.disabled\n    });\n  };\n\n  Object.defineProperty(String, \"watchers\", {\n    get: function get() {\n      return {\n        \"field\": [\"parseFieldDefinition\"]\n      };\n    },\n    enumerable: true,\n    configurable: true\n  });\n  return String;\n}();\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./pragma/dist/esm-es5/pragma-string.entry.js?");

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