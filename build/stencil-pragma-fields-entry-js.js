(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["stencil-pragma-fields-entry-js"],{

/***/ "./pragma/dist/esm-es5/pragma-fields.entry.js":
/*!****************************************************!*\
  !*** ./pragma/dist/esm-es5/pragma-fields.entry.js ***!
  \****************************************************/
/*! exports provided: pragma_fields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pragma_fields\", function() { return PragmaFields; });\n/* harmony import */ var _index_dcff8ef0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-dcff8ef0.js */ \"./pragma/dist/esm-es5/index-dcff8ef0.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar PragmaFields =\n/*#__PURE__*/\nfunction () {\n  function PragmaFields(hostRef) {\n    _classCallCheck(this, PragmaFields);\n\n    Object(_index_dcff8ef0_js__WEBPACK_IMPORTED_MODULE_0__[\"r\"])(this, hostRef);\n    /**\r\n     * The set of fields to render.\r\n     */\n\n    this.fields = [];\n  }\n\n  _createClass(PragmaFields, [{\n    key: \"render\",\n    value: function render() {\n      if (!this.fields.length) return; // TODO: Functional component that renders an array of fields\n\n      return this.fields.map(function (child) {\n        if (!child || !child.tag || !child.visible) return;\n        var ChildTag = child.tag;\n        return Object(_index_dcff8ef0_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(ChildTag, {\n          key: child.path,\n          field: child\n        });\n      });\n    }\n  }, {\n    key: \"element\",\n    get: function get() {\n      return Object(_index_dcff8ef0_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"])(this);\n    }\n  }]);\n\n  return PragmaFields;\n}();\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./pragma/dist/esm-es5/pragma-fields.entry.js?");

/***/ })

}]);