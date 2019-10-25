(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([[5],{

/***/ "./pragma/dist/esm-es5/pragma-tree.entry.js":
/*!**************************************************!*\
  !*** ./pragma/dist/esm-es5/pragma-tree.entry.js ***!
  \**************************************************/
/*! exports provided: pragma_tree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pragma_tree\", function() { return Tree; });\n/* harmony import */ var _core_fa8589cf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-fa8589cf.js */ \"./pragma/dist/esm-es5/core-fa8589cf.js\");\n\n\nvar Tree =\n/** @class */\nfunction () {\n  function Tree(hostRef) {\n    Object(_core_fa8589cf_js__WEBPACK_IMPORTED_MODULE_0__[\"r\"])(this, hostRef);\n  }\n\n  Tree.prototype.render = function () {\n    return this.fields.map(function (child) {\n      console.log(child.path, child);\n      if (!child || !child.tag || !child.visible) return;\n      var ChildTag = child.tag;\n      return Object(_core_fa8589cf_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(ChildTag, {\n        field: child\n      }, child.children ? Object(_core_fa8589cf_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"pragma-tree\", {\n        fields: child.children\n      }) : null);\n    });\n  };\n\n  return Tree;\n}();\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./pragma/dist/esm-es5/pragma-tree.entry.js?");

/***/ })

}]);