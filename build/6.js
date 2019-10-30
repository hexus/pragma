(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([[6],{

/***/ "./pragma/dist/esm-es5/pragma-section.entry.js":
/*!*****************************************************!*\
  !*** ./pragma/dist/esm-es5/pragma-section.entry.js ***!
  \*****************************************************/
/*! exports provided: pragma_section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pragma_section\", function() { return Section; });\n/* harmony import */ var _core_fff8af1f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-fff8af1f.js */ \"./pragma/dist/esm-es5/core-fff8af1f.js\");\n\n\nvar Section =\n/** @class */\nfunction () {\n  function Section(hostRef) {\n    Object(_core_fff8af1f_js__WEBPACK_IMPORTED_MODULE_0__[\"r\"])(this, hostRef);\n    this.field = {};\n  }\n\n  Section.prototype.render = function () {\n    return Object(_core_fff8af1f_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"fieldset\", {\n      name: this.field.path,\n      title: this.field.description\n    }, Object(_core_fff8af1f_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"legend\", null, this.field.label), Object(_core_fff8af1f_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"slot\", null));\n  };\n\n  return Section;\n}();\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./pragma/dist/esm-es5/pragma-section.entry.js?");

/***/ })

}]);