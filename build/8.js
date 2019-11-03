(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([[8],{

/***/ "./pragma/dist/esm-es5/pragma-tree.entry.js":
/*!**************************************************!*\
  !*** ./pragma/dist/esm-es5/pragma-tree.entry.js ***!
  \**************************************************/
/*! exports provided: pragma_tree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pragma_tree\", function() { return Tree; });\n/* harmony import */ var _core_6eb29490_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-6eb29490.js */ \"./pragma/dist/esm-es5/core-6eb29490.js\");\n\n\nvar Tree =\n/** @class */\nfunction () {\n  function Tree(hostRef) {\n    Object(_core_6eb29490_js__WEBPACK_IMPORTED_MODULE_0__[\"r\"])(this, hostRef);\n    /**\r\n     * The children of the root node of the tree.\r\n     */\n\n    this.fields = [];\n  }\n\n  Tree.prototype.render = function () {\n    // TODO: Functional component that renders an array of fields\n    return this.fields ? this.fields.map(function (child) {\n      if (!child || !child.tag || !child.visible) return;\n      var ChildTag = child.tag;\n      return Object(_core_6eb29490_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(ChildTag, {\n        key: child.path,\n        field: child\n      }, Object(_core_6eb29490_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"pragma-tree\", {\n        fields: child.children\n      }));\n    }) : null;\n  };\n\n  return Tree;\n}();\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./pragma/dist/esm-es5/pragma-tree.entry.js?");

/***/ })

}]);