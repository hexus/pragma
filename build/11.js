(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([[11],{

/***/ "./dist/esm/pragma-section.entry.js":
/*!******************************************!*\
  !*** ./dist/esm/pragma-section.entry.js ***!
  \******************************************/
/*! exports provided: pragma_section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pragma_section\", function() { return PragmaSection; });\n/* harmony import */ var _index_defa1365_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-defa1365.js */ \"./dist/esm/index-defa1365.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar PragmaSection = /*#__PURE__*/function () {\n  function PragmaSection(hostRef) {\n    _classCallCheck(this, PragmaSection);\n\n    Object(_index_defa1365_js__WEBPACK_IMPORTED_MODULE_0__[\"r\"])(this, hostRef);\n    this.field = {};\n  }\n\n  _createClass(PragmaSection, [{\n    key: \"render\",\n    value: function render() {\n      if (!Array.isArray(this.field.children)) {\n        this.field.children = [];\n      }\n\n      var children = this.field.children.slice();\n      return Object(_index_defa1365_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"fieldset\", {\n        name: this.field.path,\n        title: this.field.description\n      }, Object(_index_defa1365_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"legend\", null, this.field.label), Object(_index_defa1365_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"slot\", null), Object(_index_defa1365_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"pragma-fields\", {\n        path: this.field.path,\n        fields: children\n      }));\n    }\n  }]);\n\n  return PragmaSection;\n}();\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./dist/esm/pragma-section.entry.js?");

/***/ })

}]);