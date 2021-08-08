(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([[9],{

/***/ "./dist/esm/pragma-table.entry.js":
/*!****************************************!*\
  !*** ./dist/esm/pragma-table.entry.js ***!
  \****************************************/
/*! exports provided: pragma_table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pragma_table\", function() { return PragmaTable; });\n/* harmony import */ var _index_dac03656_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-dac03656.js */ \"./dist/esm/index-dac03656.js\");\n/* harmony import */ var _types_011ef867_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types-011ef867.js */ \"./dist/esm/types-011ef867.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar PragmaTable = /*#__PURE__*/function () {\n  function PragmaTable(hostRef) {\n    _classCallCheck(this, PragmaTable);\n\n    Object(_index_dac03656_js__WEBPACK_IMPORTED_MODULE_0__[\"r\"])(this, hostRef);\n    /**\n     * Pragma field definition.\n     */\n\n    this.field = _types_011ef867_js__WEBPACK_IMPORTED_MODULE_1__[\"d\"];\n    /**\n     * Whether the field is disabled.\n     */\n\n    this.disabled = false;\n    /**\n     * Whether to show labels for each row.\n     *\n     * Displayed in an extra column on the far left of the table.\n     */\n\n    this.showLabel = false;\n    /**\n     * Table column headings.\n     */\n\n    this.headings = [];\n  }\n  /**\n   * Handle the component loading.\n   */\n\n\n  _createClass(PragmaTable, [{\n    key: \"componentWillLoad\",\n    value: function componentWillLoad() {\n      this.parseFieldDefinition(this.field, _types_011ef867_js__WEBPACK_IMPORTED_MODULE_1__[\"d\"]);\n    }\n    /**\n     * Parse the field attribute when it changes.\n     *\n     * @param {object|string} newValue\n     * @param {object|string} oldValue\n     */\n\n  }, {\n    key: \"parseFieldDefinition\",\n    value: function parseFieldDefinition(newValue, oldValue) {\n      this.field = Object(_types_011ef867_js__WEBPACK_IMPORTED_MODULE_1__[\"p\"])(this.field, oldValue, newValue);\n\n      if (!this.field.children) {\n        this.field.children = [];\n      } // console.log('pragma-table', oldValue, newValue, this.field);\n\n\n      this.path = this.field.path;\n      this.label = this.field.label;\n      this.disabled = this.field.disabled;\n      var options = this.field.options;\n      this.showLabel = options ? options.showLabel : false;\n      this.headings = options ? options.headings : [];\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      var hasHeadings = this.headings && Array.isArray(this.headings) && this.headings.length > 0;\n      return Object(_index_dac03656_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"div\", {\n        style: {\n          overflow: 'auto'\n        }\n      }, Object(_index_dac03656_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"table\", {\n        \"data-name\": this.path\n      }, hasHeadings ? Object(_index_dac03656_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"thead\", null, this.headings.map(function (heading) {\n        return Object(_index_dac03656_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"th\", null, heading);\n      })) : null, Object(_index_dac03656_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"tbody\", null, this.field.children.map(function (row) {\n        return Object(_index_dac03656_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"tr\", {\n          key: row.path\n        }, _this.showLabel ? Object(_index_dac03656_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"th\", null, row.label) : null, row.children ? row.children.map(function (child) {\n          return Object(_index_dac03656_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"td\", {\n            key: child.path\n          }, Object(_index_dac03656_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"pragma-fields\", {\n            key: child.path,\n            path: child.path,\n            fields: [child]\n          }));\n        }) : null);\n      }))));\n    }\n  }], [{\n    key: \"watchers\",\n    get: function get() {\n      return {\n        \"field\": [\"parseFieldDefinition\"]\n      };\n    }\n  }]);\n\n  return PragmaTable;\n}();\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./dist/esm/pragma-table.entry.js?");

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