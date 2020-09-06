(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["stencil-pragma-fields-entry-js"],{

/***/ "./pragma/dist/esm-es5/pragma-fields.entry.js":
/*!****************************************************!*\
  !*** ./pragma/dist/esm-es5/pragma-fields.entry.js ***!
  \****************************************************/
/*! exports provided: pragma_fields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pragma_fields\", function() { return PragmaFields; });\n/* harmony import */ var _index_87f19a0a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-87f19a0a.js */ \"./pragma/dist/esm-es5/index-87f19a0a.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar PragmaFields =\n/*#__PURE__*/\nfunction () {\n  function PragmaFields(hostRef) {\n    _classCallCheck(this, PragmaFields);\n\n    Object(_index_87f19a0a_js__WEBPACK_IMPORTED_MODULE_0__[\"r\"])(this, hostRef);\n    /**\r\n     * The set of fields to render.\r\n     */\n\n    this.fields = [];\n  }\n  /**\r\n   * Set the set of fields to render.\r\n   *\r\n   * @param {Array<Field>} fields - The set of fields to render.\r\n   */\n\n\n  _createClass(PragmaFields, [{\n    key: \"setFields\",\n    value: function () {\n      var _setFields = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee(fields) {\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                this.fields = fields;\n                this.element.forceUpdate();\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function setFields(_x) {\n        return _setFields.apply(this, arguments);\n      }\n\n      return setFields;\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      if (!this.fields.length) return;\n      console.log('pragma-fields render()'); // TODO: Functional component that renders an array of fields\n\n      return this.fields.map(function (child) {\n        if (!child || !child.tag || !child.visible) return;\n        var ChildTag = child.tag; // Force stencil to update the child component\n        // TODO: Is there a better way?\n\n        child = Object.assign({}, child);\n        return Object(_index_87f19a0a_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(ChildTag, {\n          key: child.path,\n          field: child\n        });\n      });\n    }\n  }, {\n    key: \"element\",\n    get: function get() {\n      return Object(_index_87f19a0a_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"])(this);\n    }\n  }]);\n\n  return PragmaFields;\n}();\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./pragma/dist/esm-es5/pragma-fields.entry.js?");

/***/ })

}]);