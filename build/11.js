(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([[11],{

/***/ "./pragma/dist/esm-es5/pragma-fields.entry.js":
/*!****************************************************!*\
  !*** ./pragma/dist/esm-es5/pragma-fields.entry.js ***!
  \****************************************************/
/*! exports provided: pragma_fields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pragma_fields\", function() { return PragmaFields; });\n/* harmony import */ var _core_005f02d1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-005f02d1.js */ \"./pragma/dist/esm-es5/core-005f02d1.js\");\n\n\nvar PragmaFields =\n/** @class */\nfunction () {\n  function PragmaFields(hostRef) {\n    Object(_core_005f02d1_js__WEBPACK_IMPORTED_MODULE_0__[\"r\"])(this, hostRef);\n    /**\r\n     * The set of fields to render.\r\n     */\n\n    this.fields = [];\n  }\n\n  PragmaFields.prototype.render = function () {\n    if (!this.fields.length) return; // TODO: Functional component that renders an array of fields\n\n    return this.fields.map(function (child) {\n      if (!child || !child.tag || !child.visible) return;\n      var ChildTag = child.tag;\n      return Object(_core_005f02d1_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(ChildTag, {\n        key: child.path,\n        field: child\n      });\n    });\n  };\n\n  return PragmaFields;\n}();\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./pragma/dist/esm-es5/pragma-fields.entry.js?");

/***/ })

}]);