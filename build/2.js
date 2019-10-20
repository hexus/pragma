(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([[2],{

/***/ "./pragma/dist/esm-es5/my-component.entry.js":
/*!***************************************************!*\
  !*** ./pragma/dist/esm-es5/my-component.entry.js ***!
  \***************************************************/
/*! exports provided: my_component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"my_component\", function() { return MyComponent; });\n/* harmony import */ var _core_d78a5142_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-d78a5142.js */ \"./pragma/dist/esm-es5/core-d78a5142.js\");\n\n\nfunction format(first, middle, last) {\n  return (first || '') + (middle ? \" \" + middle : '') + (last ? \" \" + last : '');\n}\n\nvar MyComponent =\n/** @class */\nfunction () {\n  function MyComponent(hostRef) {\n    Object(_core_d78a5142_js__WEBPACK_IMPORTED_MODULE_0__[\"r\"])(this, hostRef);\n  }\n\n  MyComponent.prototype.getText = function () {\n    return format(this.first, this.middle, this.last);\n  };\n\n  MyComponent.prototype.render = function () {\n    return Object(_core_d78a5142_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"div\", null, \"Hello, World! I'm \", this.getText());\n  };\n\n  Object.defineProperty(MyComponent, \"style\", {\n    get: function get() {\n      return \"\";\n    },\n    enumerable: true,\n    configurable: true\n  });\n  return MyComponent;\n}();\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./pragma/dist/esm-es5/my-component.entry.js?");

/***/ })

}]);