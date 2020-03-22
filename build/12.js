(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([[12],{

/***/ "./pragma/dist/esm-es5/pragma-section.entry.js":
/*!*****************************************************!*\
  !*** ./pragma/dist/esm-es5/pragma-section.entry.js ***!
  \*****************************************************/
/*! exports provided: pragma_section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pragma_section\", function() { return Section; });\n/* harmony import */ var _core_005f02d1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-005f02d1.js */ \"./pragma/dist/esm-es5/core-005f02d1.js\");\n\n\nvar Section =\n/** @class */\nfunction () {\n  function Section(hostRef) {\n    Object(_core_005f02d1_js__WEBPACK_IMPORTED_MODULE_0__[\"r\"])(this, hostRef);\n    this.field = {};\n  }\n\n  Section.prototype.render = function () {\n    return Object(_core_005f02d1_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"fieldset\", {\n      name: this.field.path,\n      title: this.field.description\n    }, Object(_core_005f02d1_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"legend\", null, this.field.label), Object(_core_005f02d1_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"pragma-fields\", {\n      fields: this.field.children\n    }));\n  };\n\n  return Section;\n}();\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./pragma/dist/esm-es5/pragma-section.entry.js?");

/***/ })

}]);