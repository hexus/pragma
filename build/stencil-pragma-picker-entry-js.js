(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["stencil-pragma-picker-entry-js"],{

/***/ "./pragma/dist/esm-es5/pragma-picker.entry.js":
/*!****************************************************!*\
  !*** ./pragma/dist/esm-es5/pragma-picker.entry.js ***!
  \****************************************************/
/*! exports provided: pragma_picker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pragma_picker\", function() { return PragmaPicker; });\n/* harmony import */ var _index_f24d0843_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-f24d0843.js */ \"./pragma/dist/esm-es5/index-f24d0843.js\");\n/* harmony import */ var _types_62e2bf97_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types-62e2bf97.js */ \"./pragma/dist/esm-es5/types-62e2bf97.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar PragmaPicker =\n/*#__PURE__*/\nfunction () {\n  function PragmaPicker(hostRef) {\n    _classCallCheck(this, PragmaPicker);\n\n    Object(_index_f24d0843_js__WEBPACK_IMPORTED_MODULE_0__[\"r\"])(this, hostRef);\n    /**\r\n     * Pragma field definition.\r\n     */\n\n    this.field = _types_62e2bf97_js__WEBPACK_IMPORTED_MODULE_1__[\"d\"];\n    /**\r\n     * The field's value.\r\n     */\n\n    this.value = false;\n    /**\r\n     * Whether the field is disabled.\r\n     */\n\n    this.disabled = false;\n    /**\r\n     * Source URL to load picker options from.\r\n     */\n\n    this.source = '';\n    /**\r\n     * Placeholder value displayed when an option hasn't been selected.\r\n     */\n\n    this.placeholder = '';\n  }\n  /**\r\n   * Handle the component loading.\r\n   */\n\n\n  _createClass(PragmaPicker, [{\n    key: \"componentWillLoad\",\n    value: function componentWillLoad() {\n      this.parseFieldDefinition(this.field, _types_62e2bf97_js__WEBPACK_IMPORTED_MODULE_1__[\"d\"]);\n    }\n    /**\r\n     * Parse the field attribute when it changes.\r\n     *\r\n     * @param {object|string} newValue\r\n     * @param {object|string} oldValue\r\n     */\n\n  }, {\n    key: \"parseFieldDefinition\",\n    value: function parseFieldDefinition(newValue, oldValue) {\n      this.field = Object(_types_62e2bf97_js__WEBPACK_IMPORTED_MODULE_1__[\"p\"])(this.field, oldValue, newValue);\n\n      if (!this.field.options) {\n        this.field.options = {};\n      }\n\n      this.path = this.path || this.field.path;\n      this.label = this.label || this.field.name;\n      this.value = this.value || this.field.value;\n      this.disabled = this.disabled || this.field.disabled;\n      this.placeholder = this.placeholder || this.field.options.placeholder;\n      this.source = this.source || this.field.options.source;\n      this.target = this.target || this.field.options.target;\n      this.listPath = this.listPath || this.field.options.listPath;\n      this.labelKey = this.labelKey || this.field.options.labelKey;\n      this.valueKey = this.valueKey || this.field.options.valueKey; // TODO: Define further properties\n    }\n  }, {\n    key: \"componentWillUpdate\",\n    value: function componentWillUpdate() {} // TODO: Load options from source if available\n\n    /**\r\n     * Determine whether to show a placeholder option.\r\n     */\n\n  }, {\n    key: \"showPlaceholder\",\n    value: function showPlaceholder() {\n      return !!this.placeholder;\n    }\n    /**\r\n     * Get the placeholder markup, if it is to be shown.\r\n     *\r\n     * Returns null if the placeholder is not to be shown.\r\n     */\n\n  }, {\n    key: \"getPlaceholder\",\n    value: function getPlaceholder() {\n      if (this.showPlaceholder()) {\n        return Object(_index_f24d0843_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"option\", {\n          value: \"\"\n        }, this.placeholder);\n      }\n\n      return null;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      console.log(this.field, this.path, this.label, this.value, this.disabled, this.source, this.placeholder);\n      return [Object(_index_f24d0843_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"select\", null, this.getPlaceholder(), Object(_index_f24d0843_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"slot\", null))];\n    }\n  }], [{\n    key: \"watchers\",\n    get: function get() {\n      return {\n        \"field\": [\"parseFieldDefinition\"]\n      };\n    }\n  }]);\n\n  return PragmaPicker;\n}();\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./pragma/dist/esm-es5/pragma-picker.entry.js?");

/***/ }),

/***/ "./pragma/dist/esm-es5/types-62e2bf97.js":
/*!***********************************************!*\
  !*** ./pragma/dist/esm-es5/types-62e2bf97.js ***!
  \***********************************************/
/*! exports provided: d, p */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"d\", function() { return defaultField; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"p\", function() { return parseAndMergeFields; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/**\r\n * Parse and merge a set of field definitions.\r\n *\r\n * Accepts JSON object strings or JavaScript objects.\r\n *\r\n * If the first argument is an object, its reference is maintained.\r\n *\r\n * TODO: Use a proper merge function.\r\n *\r\n * @param {Array<string|object>} fields - The fields to parse and merge.\r\n * @return {object} The parsed Field\r\n */\nfunction parseAndMergeFields() {\n  for (var _len = arguments.length, fields = new Array(_len), _key = 0; _key < _len; _key++) {\n    fields[_key] = arguments[_key];\n  }\n\n  var parsedFields = fields.map(parseField);\n  /**\r\n   * @var {object} field\r\n   */\n\n  var field = parsedFields.shift();\n  return Object.assign(field, parsedFields.reduce(function (previous, current) {\n    return Object.assign(Object.assign({}, previous), Object.assign({}, current));\n  }));\n}\n/**\r\n * Parse a field definition from a JSON object string or a JavaScript object.\r\n *\r\n * Throws an error if the given value is not a string or an object.\r\n *\r\n * @param {string|object} field - The field definition to parse.\r\n * @return {object} The parsed field.\r\n * @throws {Error} If the given value is not a string or an object. Accepts null.\r\n */\n\n\nfunction parseField(field) {\n  if (field == null) return {};\n  field = parseJson(field);\n  if (!Array.isArray(field) && _typeof(field) !== 'object') throw Error('Field definition must be a JSON object string or an object literal'); // TODO: Check for Field type, when it's defined\n\n  return field;\n}\n/**\r\n * Loosely parse an value as JSON.\r\n *\r\n * Parses as JSON if the value is a string, otherwise returns as-is.\r\n *\r\n * @param {*} value\r\n * @return {*}\r\n */\n\n\nfunction parseJson(value) {\n  if (typeof value === 'string') value = JSON.parse(value);\n  return value;\n}\n/**\r\n * Default field definition.\r\n */\n\n\nvar defaultField = {\n  path: null,\n  name: null,\n  value: null,\n  options: {},\n  visible: true,\n  disabled: false\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./pragma/dist/esm-es5/types-62e2bf97.js?");

/***/ })

}]);