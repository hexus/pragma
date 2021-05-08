(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([[3],{

/***/ "./dist/esm/pragma-group.entry.js":
/*!****************************************!*\
  !*** ./dist/esm/pragma-group.entry.js ***!
  \****************************************/
/*! exports provided: pragma_group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pragma_group\", function() { return PragmaGroup; });\n/* harmony import */ var _index_defa1365_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-defa1365.js */ \"./dist/esm/index-defa1365.js\");\n/* harmony import */ var _types_011ef867_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types-011ef867.js */ \"./dist/esm/types-011ef867.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar PragmaGroup = /*#__PURE__*/function () {\n  function PragmaGroup(hostRef) {\n    _classCallCheck(this, PragmaGroup);\n\n    Object(_index_defa1365_js__WEBPACK_IMPORTED_MODULE_0__[\"r\"])(this, hostRef);\n    /**\n     * Pragma field definition.\n     */\n\n    this.field = _types_011ef867_js__WEBPACK_IMPORTED_MODULE_1__[\"d\"];\n    /**\n     * Whether to hide the field's label.\n     */\n\n    this.hideLabel = false;\n  }\n  /**\n   * Handle the component loading.\n   */\n\n\n  _createClass(PragmaGroup, [{\n    key: \"componentWillLoad\",\n    value: function componentWillLoad() {\n      this.parseFieldDefinition(this.field, _types_011ef867_js__WEBPACK_IMPORTED_MODULE_1__[\"d\"]);\n    }\n    /**\n     * Parse the field attribute when it changes.\n     *\n     * @param {object|string} newValue\n     * @param {object|string} oldValue\n     */\n\n  }, {\n    key: \"parseFieldDefinition\",\n    value: function parseFieldDefinition(newValue, oldValue) {\n      this.field = Object(_types_011ef867_js__WEBPACK_IMPORTED_MODULE_1__[\"p\"])(this.field, oldValue, newValue);\n      this.path = this.field.path;\n      this.label = this.field.label;\n      this.hideLabel = !!this.field.options.hideLabel;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return Object(_index_defa1365_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"div\", {\n        \"class\": \"group-container\"\n      }, !this.hideLabel ? Object(_index_defa1365_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"span\", null, this.label) : null, Object(_index_defa1365_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"span\", null, Object(_index_defa1365_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"pragma-fields\", {\n        path: this.field.path,\n        fields: this.field.children\n      })));\n    }\n  }], [{\n    key: \"watchers\",\n    get: function get() {\n      return {\n        \"field\": [\"parseFieldDefinition\"]\n      };\n    }\n  }]);\n\n  return PragmaGroup;\n}();\n\nPragmaGroup.style = \".group-container {\\n      margin: 8px 0;\\n    }\";\n\n\n//# sourceURL=webpack://%5Bname%5D/./dist/esm/pragma-group.entry.js?");

/***/ }),

/***/ "./dist/esm/types-011ef867.js":
/*!************************************!*\
  !*** ./dist/esm/types-011ef867.js ***!
  \************************************/
/*! exports provided: d, p */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"d\", function() { return defaultField; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"p\", function() { return parseAndMergeFields; });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/**\n * Parse and merge a set of field definitions.\n *\n * Accepts JSON object strings or JavaScript objects.\n *\n * If the first argument is an object, its reference is maintained.\n *\n * TODO: Use a proper merge function.\n *\n * @param {Array<string|object>} fields - The fields to parse and merge.\n * @return {object} The parsed Field\n */\nfunction parseAndMergeFields() {\n  for (var _len = arguments.length, fields = new Array(_len), _key = 0; _key < _len; _key++) {\n    fields[_key] = arguments[_key];\n  }\n\n  var parsedFields = fields.map(parseField);\n  /**\n   * @var {object} field\n   */\n\n  var field = parsedFields.shift();\n  return Object.assign(field, parsedFields.reduce(function (previous, current) {\n    return Object.assign(Object.assign({}, previous), Object.assign({}, current));\n  }));\n}\n/**\n * Parse a field definition from a JSON object string or a JavaScript object.\n *\n * Throws an error if the given value is not a string or an object.\n *\n * @param {string|object} field - The field definition to parse.\n * @return {object} The parsed field.\n * @throws {Error} If the given value is not a string or an object. Accepts null.\n */\n\n\nfunction parseField(field) {\n  if (field == null) return {};\n  field = parseJson(field);\n  if (!Array.isArray(field) && _typeof(field) !== 'object') throw Error('Field definition must be a JSON object string or an object literal'); // TODO: Check for Field type, when it's defined\n\n  return field;\n}\n/**\n * Loosely parse an value as JSON.\n *\n * Parses as JSON if the value is a string, otherwise returns as-is.\n *\n * @param {*} value\n * @return {*}\n */\n\n\nfunction parseJson(value) {\n  if (typeof value === 'string') value = JSON.parse(value);\n  return value;\n}\n/**\n * Default field definition.\n */\n\n\nvar defaultField = {\n  path: null,\n  name: null,\n  value: null,\n  options: {},\n  visible: true,\n  disabled: false\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./dist/esm/types-011ef867.js?");

/***/ })

}]);