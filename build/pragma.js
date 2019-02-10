(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["pragma"] = factory();
	else
		root["pragma"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pragma.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/case/dist/Case.js":
/*!****************************************!*\
  !*** ./node_modules/case/dist/Case.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*! Case - v1.6.1 - 2019-01-11\n* Copyright (c) 2019 Nathan Bubna; Licensed MIT, GPL */\n(function() {\n    \"use strict\";\n    var unicodes = function(s, prefix) {\n        prefix = prefix || '';\n        return s.replace(/(^|-)/g, '$1\\\\u'+prefix).replace(/,/g, '\\\\u'+prefix);\n    },\n    basicSymbols = unicodes('20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7', '00'),\n    baseLowerCase = 'a-z'+unicodes('DF-F6,F8-FF', '00'),\n    baseUpperCase = 'A-Z'+unicodes('C0-D6,D8-DE', '00'),\n    improperInTitle = 'A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\\\.?|Via',\n    regexps = function(symbols, lowers, uppers, impropers) {\n        symbols = symbols || basicSymbols;\n        lowers = lowers || baseLowerCase;\n        uppers = uppers || baseUpperCase;\n        impropers = impropers || improperInTitle;\n        return {\n            capitalize: new RegExp('(^|['+symbols+'])(['+lowers+'])', 'g'),\n            pascal: new RegExp('(^|['+symbols+'])+(['+lowers+uppers+'])', 'g'),\n            fill: new RegExp('['+symbols+']+(.|$)','g'),\n            sentence: new RegExp('(^\\\\s*|[\\\\?\\\\!\\\\.]+\"?\\\\s+\"?|,\\\\s+\")(['+lowers+'])', 'g'),\n            improper: new RegExp('\\\\b('+impropers+')\\\\b', 'g'),\n            relax: new RegExp('([^'+uppers+'])(['+uppers+']*)(['+uppers+'])(?=[^'+uppers+']|$)', 'g'),\n            upper: new RegExp('^[^'+lowers+']+$'),\n            hole: /[^\\s]\\s[^\\s]/,\n            apostrophe: /'/g,\n            room: new RegExp('['+symbols+']')\n        };\n    },\n    re = regexps(),\n    _ = {\n        re: re,\n        unicodes: unicodes,\n        regexps: regexps,\n        types: [],\n        up: String.prototype.toUpperCase,\n        low: String.prototype.toLowerCase,\n        cap: function(s) {\n            return _.up.call(s.charAt(0))+s.slice(1);\n        },\n        decap: function(s) {\n            return _.low.call(s.charAt(0))+s.slice(1);\n        },\n        deapostrophe: function(s) {\n            return s.replace(re.apostrophe, '');\n        },\n        fill: function(s, fill, deapostrophe) {\n            if (fill != null) {\n                s = s.replace(re.fill, function(m, next) {\n                    return next ? fill + next : '';\n                });\n            }\n            if (deapostrophe) {\n                s = _.deapostrophe(s);\n            }\n            return s;\n        },\n        prep: function(s, fill, pascal, upper) {\n            s = s == null ? '' : s + '';// force to string\n            if (!upper && re.upper.test(s)) {\n                s = _.low.call(s);\n            }\n            if (!fill && !re.hole.test(s)) {\n                var holey = _.fill(s, ' ');\n                if (re.hole.test(holey)) {\n                    s = holey;\n                }\n            }\n            if (!pascal && !re.room.test(s)) {\n                s = s.replace(re.relax, _.relax);\n            }\n            return s;\n        },\n        relax: function(m, before, acronym, caps) {\n            return before + ' ' + (acronym ? acronym+' ' : '') + caps;\n        }\n    },\n    Case = {\n        _: _,\n        of: function(s) {\n            for (var i=0,m=_.types.length; i<m; i++) {\n                if (Case[_.types[i]].apply(Case, arguments) === s){ return _.types[i]; }\n            }\n        },\n        flip: function(s) {\n            return s.replace(/\\w/g, function(l) {\n                return (l == _.up.call(l) ? _.low : _.up).call(l);\n            });\n        },\n        random: function(s) {\n            return s.replace(/\\w/g, function(l) {\n                return (Math.round(Math.random()) ? _.up : _.low).call(l);\n            });\n        },\n        type: function(type, fn) {\n            Case[type] = fn;\n            _.types.push(type);\n        }\n    },\n    types = {\n        lower: function(s, fill, deapostrophe) {\n            return _.fill(_.low.call(_.prep(s, fill)), fill, deapostrophe);\n        },\n        snake: function(s) {\n            return Case.lower(s, '_', true);\n        },\n        constant: function(s) {\n            return Case.upper(s, '_', true);\n        },\n        camel: function(s) {\n            return _.decap(Case.pascal(s));\n        },\n        kebab: function(s) {\n            return Case.lower(s, '-', true);\n        },\n        upper: function(s, fill, deapostrophe) {\n            return _.fill(_.up.call(_.prep(s, fill, false, true)), fill, deapostrophe);\n        },\n        capital: function(s, fill, deapostrophe) {\n            return _.fill(_.prep(s).replace(re.capitalize, function(m, border, letter) {\n                return border+_.up.call(letter);\n            }), fill, deapostrophe);\n        },\n        header: function(s) {\n            return Case.capital(s, '-', true);\n        },\n        pascal: function(s) {\n            return _.fill(_.prep(s, false, true).replace(re.pascal, function(m, border, letter) {\n                return _.up.call(letter);\n            }), '', true);\n        },\n        title: function(s) {\n            return Case.capital(s).replace(re.improper, function(small, p, i, s) {\n                return i > 0 && i < s.lastIndexOf(' ') ? _.low.call(small) : small;\n            });\n        },\n        sentence: function(s, names, abbreviations) {\n            s = Case.lower(s).replace(re.sentence, function(m, prelude, letter) {\n                return prelude + _.up.call(letter);\n            });\n            if (names) {\n                names.forEach(function(name) {\n                    s = s.replace(new RegExp('\\\\b'+Case.lower(name)+'\\\\b', \"g\"), _.cap);\n                });\n            }\n            if (abbreviations) {\n                abbreviations.forEach(function(abbr) {\n                    s = s.replace(new RegExp('(\\\\b'+Case.lower(abbr)+'\\\\. +)(\\\\w)'), function(m, abbrAndSpace, letter) {\n                        return abbrAndSpace + _.low.call(letter);\n                    });\n                });\n            }\n            return s;\n        }\n    };\n\n    // TODO: Remove \"squish\" in a future breaking release.\n    types.squish = types.pascal;\n\n    for (var type in types) {\n        Case.type(type, types[type]);\n    }\n    // export Case (AMD, commonjs, or global)\n    var define = typeof define === \"function\" ? define : function(){};\n    define( true && module.exports ? module.exports = Case : this.Case = Case);\n\n}).call(this);\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/case/dist/Case.js?");

/***/ }),

/***/ "./node_modules/deep-object-diff/dist/added/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/deep-object-diff/dist/added/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ../utils */ \"./node_modules/deep-object-diff/dist/utils/index.js\")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else { var mod; }\n})(this, function (module, exports, _utils) {\n  'use strict';\n\n  Object.defineProperty(exports, \"__esModule\", {\n    value: true\n  });\n\n  function _defineProperty(obj, key, value) {\n    if (key in obj) {\n      Object.defineProperty(obj, key, {\n        value: value,\n        enumerable: true,\n        configurable: true,\n        writable: true\n      });\n    } else {\n      obj[key] = value;\n    }\n\n    return obj;\n  }\n\n  var _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  var addedDiff = function addedDiff(lhs, rhs) {\n\n    if (lhs === rhs || !(0, _utils.isObject)(lhs) || !(0, _utils.isObject)(rhs)) return {};\n\n    var l = (0, _utils.properObject)(lhs);\n    var r = (0, _utils.properObject)(rhs);\n\n    return Object.keys(r).reduce(function (acc, key) {\n      if (l.hasOwnProperty(key)) {\n        var difference = addedDiff(l[key], r[key]);\n\n        if ((0, _utils.isObject)(difference) && (0, _utils.isEmpty)(difference)) return acc;\n\n        return _extends({}, acc, _defineProperty({}, key, difference));\n      }\n\n      return _extends({}, acc, _defineProperty({}, key, r[key]));\n    }, {});\n  };\n\n  exports.default = addedDiff;\n  module.exports = exports['default'];\n});\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/deep-object-diff/dist/added/index.js?");

/***/ }),

/***/ "./node_modules/deep-object-diff/dist/deleted/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/deep-object-diff/dist/deleted/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ../utils */ \"./node_modules/deep-object-diff/dist/utils/index.js\")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else { var mod; }\n})(this, function (module, exports, _utils) {\n  'use strict';\n\n  Object.defineProperty(exports, \"__esModule\", {\n    value: true\n  });\n\n  function _defineProperty(obj, key, value) {\n    if (key in obj) {\n      Object.defineProperty(obj, key, {\n        value: value,\n        enumerable: true,\n        configurable: true,\n        writable: true\n      });\n    } else {\n      obj[key] = value;\n    }\n\n    return obj;\n  }\n\n  var _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  var deletedDiff = function deletedDiff(lhs, rhs) {\n    if (lhs === rhs || !(0, _utils.isObject)(lhs) || !(0, _utils.isObject)(rhs)) return {};\n\n    var l = (0, _utils.properObject)(lhs);\n    var r = (0, _utils.properObject)(rhs);\n\n    return Object.keys(l).reduce(function (acc, key) {\n      if (r.hasOwnProperty(key)) {\n        var difference = deletedDiff(l[key], r[key]);\n\n        if ((0, _utils.isObject)(difference) && (0, _utils.isEmpty)(difference)) return acc;\n\n        return _extends({}, acc, _defineProperty({}, key, difference));\n      }\n\n      return _extends({}, acc, _defineProperty({}, key, undefined));\n    }, {});\n  };\n\n  exports.default = deletedDiff;\n  module.exports = exports['default'];\n});\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/deep-object-diff/dist/deleted/index.js?");

/***/ }),

/***/ "./node_modules/deep-object-diff/dist/detailed/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/deep-object-diff/dist/detailed/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ../added */ \"./node_modules/deep-object-diff/dist/added/index.js\"), __webpack_require__(/*! ../deleted */ \"./node_modules/deep-object-diff/dist/deleted/index.js\"), __webpack_require__(/*! ../updated */ \"./node_modules/deep-object-diff/dist/updated/index.js\")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else { var mod; }\n})(this, function (module, exports, _added, _deleted, _updated) {\n  'use strict';\n\n  Object.defineProperty(exports, \"__esModule\", {\n    value: true\n  });\n\n  var _added2 = _interopRequireDefault(_added);\n\n  var _deleted2 = _interopRequireDefault(_deleted);\n\n  var _updated2 = _interopRequireDefault(_updated);\n\n  function _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n      default: obj\n    };\n  }\n\n  var detailedDiff = function detailedDiff(lhs, rhs) {\n    return {\n      added: (0, _added2.default)(lhs, rhs),\n      deleted: (0, _deleted2.default)(lhs, rhs),\n      updated: (0, _updated2.default)(lhs, rhs)\n    };\n  };\n\n  exports.default = detailedDiff;\n  module.exports = exports['default'];\n});\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/deep-object-diff/dist/detailed/index.js?");

/***/ }),

/***/ "./node_modules/deep-object-diff/dist/diff/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/deep-object-diff/dist/diff/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ../utils */ \"./node_modules/deep-object-diff/dist/utils/index.js\")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else { var mod; }\n})(this, function (module, exports, _utils) {\n  'use strict';\n\n  Object.defineProperty(exports, \"__esModule\", {\n    value: true\n  });\n\n  function _defineProperty(obj, key, value) {\n    if (key in obj) {\n      Object.defineProperty(obj, key, {\n        value: value,\n        enumerable: true,\n        configurable: true,\n        writable: true\n      });\n    } else {\n      obj[key] = value;\n    }\n\n    return obj;\n  }\n\n  var _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  var diff = function diff(lhs, rhs) {\n    if (lhs === rhs) return {}; // equal return no diff\n\n    if (!(0, _utils.isObject)(lhs) || !(0, _utils.isObject)(rhs)) return rhs; // return updated rhs\n\n    var l = (0, _utils.properObject)(lhs);\n    var r = (0, _utils.properObject)(rhs);\n\n    var deletedValues = Object.keys(l).reduce(function (acc, key) {\n      return r.hasOwnProperty(key) ? acc : _extends({}, acc, _defineProperty({}, key, undefined));\n    }, {});\n\n    if ((0, _utils.isDate)(l) || (0, _utils.isDate)(r)) {\n      if (l.valueOf() == r.valueOf()) return {};\n      return r;\n    }\n\n    return Object.keys(r).reduce(function (acc, key) {\n      if (!l.hasOwnProperty(key)) return _extends({}, acc, _defineProperty({}, key, r[key])); // return added r key\n\n      var difference = diff(l[key], r[key]);\n\n      if ((0, _utils.isObject)(difference) && (0, _utils.isEmpty)(difference) && !(0, _utils.isDate)(difference)) return acc; // return no diff\n\n      return _extends({}, acc, _defineProperty({}, key, difference)); // return updated key\n    }, deletedValues);\n  };\n\n  exports.default = diff;\n  module.exports = exports['default'];\n});\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/deep-object-diff/dist/diff/index.js?");

/***/ }),

/***/ "./node_modules/deep-object-diff/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/deep-object-diff/dist/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./diff */ \"./node_modules/deep-object-diff/dist/diff/index.js\"), __webpack_require__(/*! ./added */ \"./node_modules/deep-object-diff/dist/added/index.js\"), __webpack_require__(/*! ./deleted */ \"./node_modules/deep-object-diff/dist/deleted/index.js\"), __webpack_require__(/*! ./updated */ \"./node_modules/deep-object-diff/dist/updated/index.js\"), __webpack_require__(/*! ./detailed */ \"./node_modules/deep-object-diff/dist/detailed/index.js\")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else { var mod; }\n})(this, function (exports, _diff, _added, _deleted, _updated, _detailed) {\n  'use strict';\n\n  Object.defineProperty(exports, \"__esModule\", {\n    value: true\n  });\n  exports.detailedDiff = exports.updatedDiff = exports.deletedDiff = exports.diff = exports.addedDiff = undefined;\n\n  var _diff2 = _interopRequireDefault(_diff);\n\n  var _added2 = _interopRequireDefault(_added);\n\n  var _deleted2 = _interopRequireDefault(_deleted);\n\n  var _updated2 = _interopRequireDefault(_updated);\n\n  var _detailed2 = _interopRequireDefault(_detailed);\n\n  function _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n      default: obj\n    };\n  }\n\n  exports.addedDiff = _added2.default;\n  exports.diff = _diff2.default;\n  exports.deletedDiff = _deleted2.default;\n  exports.updatedDiff = _updated2.default;\n  exports.detailedDiff = _detailed2.default;\n});\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/deep-object-diff/dist/index.js?");

/***/ }),

/***/ "./node_modules/deep-object-diff/dist/updated/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/deep-object-diff/dist/updated/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(/*! ../utils */ \"./node_modules/deep-object-diff/dist/utils/index.js\")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else { var mod; }\n})(this, function (module, exports, _utils) {\n  'use strict';\n\n  Object.defineProperty(exports, \"__esModule\", {\n    value: true\n  });\n\n  function _defineProperty(obj, key, value) {\n    if (key in obj) {\n      Object.defineProperty(obj, key, {\n        value: value,\n        enumerable: true,\n        configurable: true,\n        writable: true\n      });\n    } else {\n      obj[key] = value;\n    }\n\n    return obj;\n  }\n\n  var _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  var updatedDiff = function updatedDiff(lhs, rhs) {\n\n    if (lhs === rhs) return {};\n\n    if (!(0, _utils.isObject)(lhs) || !(0, _utils.isObject)(rhs)) return rhs;\n\n    var l = (0, _utils.properObject)(lhs);\n    var r = (0, _utils.properObject)(rhs);\n\n    if ((0, _utils.isDate)(l) || (0, _utils.isDate)(r)) {\n      if (l.valueOf() == r.valueOf()) return {};\n      return r;\n    }\n\n    return Object.keys(r).reduce(function (acc, key) {\n\n      if (l.hasOwnProperty(key)) {\n        var difference = updatedDiff(l[key], r[key]);\n\n        if ((0, _utils.isObject)(difference) && (0, _utils.isEmpty)(difference) && !(0, _utils.isDate)(difference)) return acc;\n\n        return _extends({}, acc, _defineProperty({}, key, difference));\n      }\n\n      return acc;\n    }, {});\n  };\n\n  exports.default = updatedDiff;\n  module.exports = exports['default'];\n});\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/deep-object-diff/dist/updated/index.js?");

/***/ }),

/***/ "./node_modules/deep-object-diff/dist/utils/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/deep-object-diff/dist/utils/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else { var mod; }\n})(this, function (exports) {\n  'use strict';\n\n  Object.defineProperty(exports, \"__esModule\", {\n    value: true\n  });\n\n  var _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  var _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  };\n\n  var isDate = exports.isDate = function isDate(d) {\n    return d instanceof Date;\n  };\n  var isEmpty = exports.isEmpty = function isEmpty(o) {\n    return Object.keys(o).length === 0;\n  };\n  var isObject = exports.isObject = function isObject(o) {\n    return o != null && (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object';\n  };\n  var properObject = exports.properObject = function properObject(o) {\n    return isObject(o) && !o.hasOwnProperty ? _extends({}, o) : o;\n  };\n});\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/deep-object-diff/dist/utils/index.js?");

/***/ }),

/***/ "./node_modules/expr-eval/dist/bundle.js":
/*!***********************************************!*\
  !*** ./node_modules/expr-eval/dist/bundle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function (global, factory) {\n   true ? module.exports = factory() :\n  undefined;\n}(this, (function () { 'use strict';\n\n  var INUMBER = 'INUMBER';\n  var IOP1 = 'IOP1';\n  var IOP2 = 'IOP2';\n  var IOP3 = 'IOP3';\n  var IVAR = 'IVAR';\n  var IFUNCALL = 'IFUNCALL';\n  var IEXPR = 'IEXPR';\n  var IMEMBER = 'IMEMBER';\n\n  function Instruction(type, value) {\n    this.type = type;\n    this.value = (value !== undefined && value !== null) ? value : 0;\n  }\n\n  Instruction.prototype.toString = function () {\n    switch (this.type) {\n      case INUMBER:\n      case IOP1:\n      case IOP2:\n      case IOP3:\n      case IVAR:\n        return this.value;\n      case IFUNCALL:\n        return 'CALL ' + this.value;\n      case IMEMBER:\n        return '.' + this.value;\n      default:\n        return 'Invalid Instruction';\n    }\n  };\n\n  function unaryInstruction(value) {\n    return new Instruction(IOP1, value);\n  }\n\n  function binaryInstruction(value) {\n    return new Instruction(IOP2, value);\n  }\n\n  function ternaryInstruction(value) {\n    return new Instruction(IOP3, value);\n  }\n\n  function simplify(tokens, unaryOps, binaryOps, ternaryOps, values) {\n    var nstack = [];\n    var newexpression = [];\n    var n1, n2, n3;\n    var f;\n    for (var i = 0; i < tokens.length; i++) {\n      var item = tokens[i];\n      var type = item.type;\n      if (type === INUMBER) {\n        nstack.push(item);\n      } else if (type === IVAR && values.hasOwnProperty(item.value)) {\n        item = new Instruction(INUMBER, values[item.value]);\n        nstack.push(item);\n      } else if (type === IOP2 && nstack.length > 1) {\n        n2 = nstack.pop();\n        n1 = nstack.pop();\n        f = binaryOps[item.value];\n        item = new Instruction(INUMBER, f(n1.value, n2.value));\n        nstack.push(item);\n      } else if (type === IOP3 && nstack.length > 2) {\n        n3 = nstack.pop();\n        n2 = nstack.pop();\n        n1 = nstack.pop();\n        if (item.value === '?') {\n          nstack.push(n1.value ? n2.value : n3.value);\n        } else {\n          f = ternaryOps[item.value];\n          item = new Instruction(INUMBER, f(n1.value, n2.value, n3.value));\n          nstack.push(item);\n        }\n      } else if (type === IOP1 && nstack.length > 0) {\n        n1 = nstack.pop();\n        f = unaryOps[item.value];\n        item = new Instruction(INUMBER, f(n1.value));\n        nstack.push(item);\n      } else if (type === IEXPR) {\n        while (nstack.length > 0) {\n          newexpression.push(nstack.shift());\n        }\n        newexpression.push(new Instruction(IEXPR, simplify(item.value, unaryOps, binaryOps, ternaryOps, values)));\n      } else if (type === IMEMBER && nstack.length > 0) {\n        n1 = nstack.pop();\n        nstack.push(new Instruction(INUMBER, n1.value[item.value]));\n      } else {\n        while (nstack.length > 0) {\n          newexpression.push(nstack.shift());\n        }\n        newexpression.push(item);\n      }\n    }\n    while (nstack.length > 0) {\n      newexpression.push(nstack.shift());\n    }\n    return newexpression;\n  }\n\n  function substitute(tokens, variable, expr) {\n    var newexpression = [];\n    for (var i = 0; i < tokens.length; i++) {\n      var item = tokens[i];\n      var type = item.type;\n      if (type === IVAR && item.value === variable) {\n        for (var j = 0; j < expr.tokens.length; j++) {\n          var expritem = expr.tokens[j];\n          var replitem;\n          if (expritem.type === IOP1) {\n            replitem = unaryInstruction(expritem.value);\n          } else if (expritem.type === IOP2) {\n            replitem = binaryInstruction(expritem.value);\n          } else if (expritem.type === IOP3) {\n            replitem = ternaryInstruction(expritem.value);\n          } else {\n            replitem = new Instruction(expritem.type, expritem.value);\n          }\n          newexpression.push(replitem);\n        }\n      } else if (type === IEXPR) {\n        newexpression.push(new Instruction(IEXPR, substitute(item.value, variable, expr)));\n      } else {\n        newexpression.push(item);\n      }\n    }\n    return newexpression;\n  }\n\n  function evaluate(tokens, expr, values) {\n    var nstack = [];\n    var n1, n2, n3;\n    var f;\n    for (var i = 0; i < tokens.length; i++) {\n      var item = tokens[i];\n      var type = item.type;\n      if (type === INUMBER) {\n        nstack.push(item.value);\n      } else if (type === IOP2) {\n        n2 = nstack.pop();\n        n1 = nstack.pop();\n        if (item.value === 'and') {\n          nstack.push(n1 ? !!evaluate(n2, expr, values) : false);\n        } else if (item.value === 'or') {\n          nstack.push(n1 ? true : !!evaluate(n2, expr, values));\n        } else {\n          f = expr.binaryOps[item.value];\n          nstack.push(f(n1, n2));\n        }\n      } else if (type === IOP3) {\n        n3 = nstack.pop();\n        n2 = nstack.pop();\n        n1 = nstack.pop();\n        if (item.value === '?') {\n          nstack.push(evaluate(n1 ? n2 : n3, expr, values));\n        } else {\n          f = expr.ternaryOps[item.value];\n          nstack.push(f(n1, n2, n3));\n        }\n      } else if (type === IVAR) {\n        if (item.value in expr.functions) {\n          nstack.push(expr.functions[item.value]);\n        } else {\n          var v = values[item.value];\n          if (v !== undefined) {\n            nstack.push(v);\n          } else {\n            throw new Error('undefined variable: ' + item.value);\n          }\n        }\n      } else if (type === IOP1) {\n        n1 = nstack.pop();\n        f = expr.unaryOps[item.value];\n        nstack.push(f(n1));\n      } else if (type === IFUNCALL) {\n        var argCount = item.value;\n        var args = [];\n        while (argCount-- > 0) {\n          args.unshift(nstack.pop());\n        }\n        f = nstack.pop();\n        if (f.apply && f.call) {\n          nstack.push(f.apply(undefined, args));\n        } else {\n          throw new Error(f + ' is not a function');\n        }\n      } else if (type === IEXPR) {\n        nstack.push(item.value);\n      } else if (type === IMEMBER) {\n        n1 = nstack.pop();\n        nstack.push(n1[item.value]);\n      } else {\n        throw new Error('invalid Expression');\n      }\n    }\n    if (nstack.length > 1) {\n      throw new Error('invalid Expression (parity)');\n    }\n    return nstack[0];\n  }\n\n  function expressionToString(tokens, toJS) {\n    var nstack = [];\n    var n1, n2, n3;\n    var f;\n    for (var i = 0; i < tokens.length; i++) {\n      var item = tokens[i];\n      var type = item.type;\n      if (type === INUMBER) {\n        if (typeof item.value === 'number' && item.value < 0) {\n          nstack.push('(' + item.value + ')');\n        } else {\n          nstack.push(escapeValue(item.value));\n        }\n      } else if (type === IOP2) {\n        n2 = nstack.pop();\n        n1 = nstack.pop();\n        f = item.value;\n        if (toJS) {\n          if (f === '^') {\n            nstack.push('Math.pow(' + n1 + ', ' + n2 + ')');\n          } else if (f === 'and') {\n            nstack.push('(!!' + n1 + ' && !!' + n2 + ')');\n          } else if (f === 'or') {\n            nstack.push('(!!' + n1 + ' || !!' + n2 + ')');\n          } else if (f === '||') {\n            nstack.push('(String(' + n1 + ') + String(' + n2 + '))');\n          } else if (f === '==') {\n            nstack.push('(' + n1 + ' === ' + n2 + ')');\n          } else if (f === '!=') {\n            nstack.push('(' + n1 + ' !== ' + n2 + ')');\n          } else {\n            nstack.push('(' + n1 + ' ' + f + ' ' + n2 + ')');\n          }\n        } else {\n          nstack.push('(' + n1 + ' ' + f + ' ' + n2 + ')');\n        }\n      } else if (type === IOP3) {\n        n3 = nstack.pop();\n        n2 = nstack.pop();\n        n1 = nstack.pop();\n        f = item.value;\n        if (f === '?') {\n          nstack.push('(' + n1 + ' ? ' + n2 + ' : ' + n3 + ')');\n        } else {\n          throw new Error('invalid Expression');\n        }\n      } else if (type === IVAR) {\n        nstack.push(item.value);\n      } else if (type === IOP1) {\n        n1 = nstack.pop();\n        f = item.value;\n        if (f === '-' || f === '+') {\n          nstack.push('(' + f + n1 + ')');\n        } else if (toJS) {\n          if (f === 'not') {\n            nstack.push('(' + '!' + n1 + ')');\n          } else if (f === '!') {\n            nstack.push('fac(' + n1 + ')');\n          } else {\n            nstack.push(f + '(' + n1 + ')');\n          }\n        } else if (f === '!') {\n          nstack.push('(' + n1 + '!)');\n        } else {\n          nstack.push('(' + f + ' ' + n1 + ')');\n        }\n      } else if (type === IFUNCALL) {\n        var argCount = item.value;\n        var args = [];\n        while (argCount-- > 0) {\n          args.unshift(nstack.pop());\n        }\n        f = nstack.pop();\n        nstack.push(f + '(' + args.join(', ') + ')');\n      } else if (type === IMEMBER) {\n        n1 = nstack.pop();\n        nstack.push(n1 + '.' + item.value);\n      } else if (type === IEXPR) {\n        nstack.push('(' + expressionToString(item.value, toJS) + ')');\n      } else {\n        throw new Error('invalid Expression');\n      }\n    }\n    if (nstack.length > 1) {\n      throw new Error('invalid Expression (parity)');\n    }\n    return String(nstack[0]);\n  }\n\n  function escapeValue(v) {\n    if (typeof v === 'string') {\n      return JSON.stringify(v).replace(/\\u2028/g, '\\\\u2028').replace(/\\u2029/g, '\\\\u2029');\n    }\n    return v;\n  }\n\n  function contains(array, obj) {\n    for (var i = 0; i < array.length; i++) {\n      if (array[i] === obj) {\n        return true;\n      }\n    }\n    return false;\n  }\n\n  function getSymbols(tokens, symbols, options) {\n    options = options || {};\n    var withMembers = !!options.withMembers;\n    var prevVar = null;\n\n    for (var i = 0; i < tokens.length; i++) {\n      var item = tokens[i];\n      if (item.type === IVAR && !contains(symbols, item.value)) {\n        if (!withMembers) {\n          symbols.push(item.value);\n        } else if (prevVar !== null) {\n          if (!contains(symbols, prevVar)) {\n            symbols.push(prevVar);\n          }\n          prevVar = item.value;\n        } else {\n          prevVar = item.value;\n        }\n      } else if (item.type === IMEMBER && withMembers && prevVar !== null) {\n        prevVar += '.' + item.value;\n      } else if (item.type === IEXPR) {\n        getSymbols(item.value, symbols, options);\n      } else if (prevVar !== null) {\n        if (!contains(symbols, prevVar)) {\n          symbols.push(prevVar);\n        }\n        prevVar = null;\n      }\n    }\n\n    if (prevVar !== null && !contains(symbols, prevVar)) {\n      symbols.push(prevVar);\n    }\n  }\n\n  function Expression(tokens, parser) {\n    this.tokens = tokens;\n    this.parser = parser;\n    this.unaryOps = parser.unaryOps;\n    this.binaryOps = parser.binaryOps;\n    this.ternaryOps = parser.ternaryOps;\n    this.functions = parser.functions;\n  }\n\n  Expression.prototype.simplify = function (values) {\n    values = values || {};\n    return new Expression(simplify(this.tokens, this.unaryOps, this.binaryOps, this.ternaryOps, values), this.parser);\n  };\n\n  Expression.prototype.substitute = function (variable, expr) {\n    if (!(expr instanceof Expression)) {\n      expr = this.parser.parse(String(expr));\n    }\n\n    return new Expression(substitute(this.tokens, variable, expr), this.parser);\n  };\n\n  Expression.prototype.evaluate = function (values) {\n    values = values || {};\n    return evaluate(this.tokens, this, values);\n  };\n\n  Expression.prototype.toString = function () {\n    return expressionToString(this.tokens, false);\n  };\n\n  Expression.prototype.symbols = function (options) {\n    options = options || {};\n    var vars = [];\n    getSymbols(this.tokens, vars, options);\n    return vars;\n  };\n\n  Expression.prototype.variables = function (options) {\n    options = options || {};\n    var vars = [];\n    getSymbols(this.tokens, vars, options);\n    var functions = this.functions;\n    return vars.filter(function (name) {\n      return !(name in functions);\n    });\n  };\n\n  Expression.prototype.toJSFunction = function (param, variables) {\n    var expr = this;\n    var f = new Function(param, 'with(this.functions) with (this.ternaryOps) with (this.binaryOps) with (this.unaryOps) { return ' + expressionToString(this.simplify(variables).tokens, true) + '; }'); // eslint-disable-line no-new-func\n    return function () {\n      return f.apply(expr, arguments);\n    };\n  };\n\n  var TEOF = 'TEOF';\n  var TOP = 'TOP';\n  var TNUMBER = 'TNUMBER';\n  var TSTRING = 'TSTRING';\n  var TPAREN = 'TPAREN';\n  var TCOMMA = 'TCOMMA';\n  var TNAME = 'TNAME';\n\n  function Token(type, value, index) {\n    this.type = type;\n    this.value = value;\n    this.index = index;\n  }\n\n  Token.prototype.toString = function () {\n    return this.type + ': ' + this.value;\n  };\n\n  function TokenStream(parser, expression) {\n    this.pos = 0;\n    this.current = null;\n    this.unaryOps = parser.unaryOps;\n    this.binaryOps = parser.binaryOps;\n    this.ternaryOps = parser.ternaryOps;\n    this.consts = parser.consts;\n    this.expression = expression;\n    this.savedPosition = 0;\n    this.savedCurrent = null;\n    this.options = parser.options;\n  }\n\n  TokenStream.prototype.newToken = function (type, value, pos) {\n    return new Token(type, value, pos != null ? pos : this.pos);\n  };\n\n  TokenStream.prototype.save = function () {\n    this.savedPosition = this.pos;\n    this.savedCurrent = this.current;\n  };\n\n  TokenStream.prototype.restore = function () {\n    this.pos = this.savedPosition;\n    this.current = this.savedCurrent;\n  };\n\n  TokenStream.prototype.next = function () {\n    if (this.pos >= this.expression.length) {\n      return this.newToken(TEOF, 'EOF');\n    }\n\n    if (this.isWhitespace() || this.isComment()) {\n      return this.next();\n    } else if (this.isRadixInteger() ||\n        this.isNumber() ||\n        this.isOperator() ||\n        this.isString() ||\n        this.isParen() ||\n        this.isComma() ||\n        this.isNamedOp() ||\n        this.isConst() ||\n        this.isName()) {\n      return this.current;\n    } else {\n      this.parseError('Unknown character \"' + this.expression.charAt(this.pos) + '\"');\n    }\n  };\n\n  TokenStream.prototype.isString = function () {\n    var r = false;\n    var startPos = this.pos;\n    var quote = this.expression.charAt(startPos);\n\n    if (quote === '\\'' || quote === '\"') {\n      var index = this.expression.indexOf(quote, startPos + 1);\n      while (index >= 0 && this.pos < this.expression.length) {\n        this.pos = index + 1;\n        if (this.expression.charAt(index - 1) !== '\\\\') {\n          var rawString = this.expression.substring(startPos + 1, index);\n          this.current = this.newToken(TSTRING, this.unescape(rawString), startPos);\n          r = true;\n          break;\n        }\n        index = this.expression.indexOf(quote, index + 1);\n      }\n    }\n    return r;\n  };\n\n  TokenStream.prototype.isParen = function () {\n    var c = this.expression.charAt(this.pos);\n    if (c === '(' || c === ')') {\n      this.current = this.newToken(TPAREN, c);\n      this.pos++;\n      return true;\n    }\n    return false;\n  };\n\n  TokenStream.prototype.isComma = function () {\n    var c = this.expression.charAt(this.pos);\n    if (c === ',') {\n      this.current = this.newToken(TCOMMA, ',');\n      this.pos++;\n      return true;\n    }\n    return false;\n  };\n\n  TokenStream.prototype.isConst = function () {\n    var startPos = this.pos;\n    var i = startPos;\n    for (; i < this.expression.length; i++) {\n      var c = this.expression.charAt(i);\n      if (c.toUpperCase() === c.toLowerCase()) {\n        if (i === this.pos || (c !== '_' && c !== '.' && (c < '0' || c > '9'))) {\n          break;\n        }\n      }\n    }\n    if (i > startPos) {\n      var str = this.expression.substring(startPos, i);\n      if (str in this.consts) {\n        this.current = this.newToken(TNUMBER, this.consts[str]);\n        this.pos += str.length;\n        return true;\n      }\n    }\n    return false;\n  };\n\n  TokenStream.prototype.isNamedOp = function () {\n    var startPos = this.pos;\n    var i = startPos;\n    for (; i < this.expression.length; i++) {\n      var c = this.expression.charAt(i);\n      if (c.toUpperCase() === c.toLowerCase()) {\n        if (i === this.pos || (c !== '_' && (c < '0' || c > '9'))) {\n          break;\n        }\n      }\n    }\n    if (i > startPos) {\n      var str = this.expression.substring(startPos, i);\n      if (this.isOperatorEnabled(str) && (str in this.binaryOps || str in this.unaryOps || str in this.ternaryOps)) {\n        this.current = this.newToken(TOP, str);\n        this.pos += str.length;\n        return true;\n      }\n    }\n    return false;\n  };\n\n  TokenStream.prototype.isName = function () {\n    var startPos = this.pos;\n    var i = startPos;\n    var hasLetter = false;\n    for (; i < this.expression.length; i++) {\n      var c = this.expression.charAt(i);\n      if (c.toUpperCase() === c.toLowerCase()) {\n        if (i === this.pos && (c === '$' || c === '_')) {\n          if (c === '_') {\n            hasLetter = true;\n          }\n          continue;\n        } else if (i === this.pos || !hasLetter || (c !== '_' && (c < '0' || c > '9'))) {\n          break;\n        }\n      } else {\n        hasLetter = true;\n      }\n    }\n    if (hasLetter) {\n      var str = this.expression.substring(startPos, i);\n      this.current = this.newToken(TNAME, str);\n      this.pos += str.length;\n      return true;\n    }\n    return false;\n  };\n\n  TokenStream.prototype.isWhitespace = function () {\n    var r = false;\n    var c = this.expression.charAt(this.pos);\n    while (c === ' ' || c === '\\t' || c === '\\n' || c === '\\r') {\n      r = true;\n      this.pos++;\n      if (this.pos >= this.expression.length) {\n        break;\n      }\n      c = this.expression.charAt(this.pos);\n    }\n    return r;\n  };\n\n  var codePointPattern = /^[0-9a-f]{4}$/i;\n\n  TokenStream.prototype.unescape = function (v) {\n    var index = v.indexOf('\\\\');\n    if (index < 0) {\n      return v;\n    }\n\n    var buffer = v.substring(0, index);\n    while (index >= 0) {\n      var c = v.charAt(++index);\n      switch (c) {\n        case '\\'':\n          buffer += '\\'';\n          break;\n        case '\"':\n          buffer += '\"';\n          break;\n        case '\\\\':\n          buffer += '\\\\';\n          break;\n        case '/':\n          buffer += '/';\n          break;\n        case 'b':\n          buffer += '\\b';\n          break;\n        case 'f':\n          buffer += '\\f';\n          break;\n        case 'n':\n          buffer += '\\n';\n          break;\n        case 'r':\n          buffer += '\\r';\n          break;\n        case 't':\n          buffer += '\\t';\n          break;\n        case 'u':\n          // interpret the following 4 characters as the hex of the unicode code point\n          var codePoint = v.substring(index + 1, index + 5);\n          if (!codePointPattern.test(codePoint)) {\n            this.parseError('Illegal escape sequence: \\\\u' + codePoint);\n          }\n          buffer += String.fromCharCode(parseInt(codePoint, 16));\n          index += 4;\n          break;\n        default:\n          throw this.parseError('Illegal escape sequence: \"\\\\' + c + '\"');\n      }\n      ++index;\n      var backslash = v.indexOf('\\\\', index);\n      buffer += v.substring(index, backslash < 0 ? v.length : backslash);\n      index = backslash;\n    }\n\n    return buffer;\n  };\n\n  TokenStream.prototype.isComment = function () {\n    var c = this.expression.charAt(this.pos);\n    if (c === '/' && this.expression.charAt(this.pos + 1) === '*') {\n      this.pos = this.expression.indexOf('*/', this.pos) + 2;\n      if (this.pos === 1) {\n        this.pos = this.expression.length;\n      }\n      return true;\n    }\n    return false;\n  };\n\n  TokenStream.prototype.isRadixInteger = function () {\n    var pos = this.pos;\n\n    if (pos >= this.expression.length - 2 || this.expression.charAt(pos) !== '0') {\n      return false;\n    }\n    ++pos;\n\n    var radix;\n    var validDigit;\n    if (this.expression.charAt(pos) === 'x') {\n      radix = 16;\n      validDigit = /^[0-9a-f]$/i;\n      ++pos;\n    } else if (this.expression.charAt(pos) === 'b') {\n      radix = 2;\n      validDigit = /^[01]$/i;\n      ++pos;\n    } else {\n      return false;\n    }\n\n    var valid = false;\n    var startPos = pos;\n\n    while (pos < this.expression.length) {\n      var c = this.expression.charAt(pos);\n      if (validDigit.test(c)) {\n        pos++;\n        valid = true;\n      } else {\n        break;\n      }\n    }\n\n    if (valid) {\n      this.current = this.newToken(TNUMBER, parseInt(this.expression.substring(startPos, pos), radix));\n      this.pos = pos;\n    }\n    return valid;\n  };\n\n  TokenStream.prototype.isNumber = function () {\n    var valid = false;\n    var pos = this.pos;\n    var startPos = pos;\n    var resetPos = pos;\n    var foundDot = false;\n    var foundDigits = false;\n    var c;\n\n    while (pos < this.expression.length) {\n      c = this.expression.charAt(pos);\n      if ((c >= '0' && c <= '9') || (!foundDot && c === '.')) {\n        if (c === '.') {\n          foundDot = true;\n        } else {\n          foundDigits = true;\n        }\n        pos++;\n        valid = foundDigits;\n      } else {\n        break;\n      }\n    }\n\n    if (valid) {\n      resetPos = pos;\n    }\n\n    if (c === 'e' || c === 'E') {\n      pos++;\n      var acceptSign = true;\n      var validExponent = false;\n      while (pos < this.expression.length) {\n        c = this.expression.charAt(pos);\n        if (acceptSign && (c === '+' || c === '-')) {\n          acceptSign = false;\n        } else if (c >= '0' && c <= '9') {\n          validExponent = true;\n          acceptSign = false;\n        } else {\n          break;\n        }\n        pos++;\n      }\n\n      if (!validExponent) {\n        pos = resetPos;\n      }\n    }\n\n    if (valid) {\n      this.current = this.newToken(TNUMBER, parseFloat(this.expression.substring(startPos, pos)));\n      this.pos = pos;\n    } else {\n      this.pos = resetPos;\n    }\n    return valid;\n  };\n\n  TokenStream.prototype.isOperator = function () {\n    var startPos = this.pos;\n    var c = this.expression.charAt(this.pos);\n\n    if (c === '+' || c === '-' || c === '*' || c === '/' || c === '%' || c === '^' || c === '?' || c === ':' || c === '.') {\n      this.current = this.newToken(TOP, c);\n    } else if (c === '∙' || c === '•') {\n      this.current = this.newToken(TOP, '*');\n    } else if (c === '>') {\n      if (this.expression.charAt(this.pos + 1) === '=') {\n        this.current = this.newToken(TOP, '>=');\n        this.pos++;\n      } else {\n        this.current = this.newToken(TOP, '>');\n      }\n    } else if (c === '<') {\n      if (this.expression.charAt(this.pos + 1) === '=') {\n        this.current = this.newToken(TOP, '<=');\n        this.pos++;\n      } else {\n        this.current = this.newToken(TOP, '<');\n      }\n    } else if (c === '|') {\n      if (this.expression.charAt(this.pos + 1) === '|') {\n        this.current = this.newToken(TOP, '||');\n        this.pos++;\n      } else {\n        return false;\n      }\n    } else if (c === '=') {\n      if (this.expression.charAt(this.pos + 1) === '=') {\n        this.current = this.newToken(TOP, '==');\n        this.pos++;\n      } else {\n        return false;\n      }\n    } else if (c === '!') {\n      if (this.expression.charAt(this.pos + 1) === '=') {\n        this.current = this.newToken(TOP, '!=');\n        this.pos++;\n      } else {\n        this.current = this.newToken(TOP, c);\n      }\n    } else {\n      return false;\n    }\n    this.pos++;\n\n    if (this.isOperatorEnabled(this.current.value)) {\n      return true;\n    } else {\n      this.pos = startPos;\n      return false;\n    }\n  };\n\n  var optionNameMap = {\n    '+': 'add',\n    '-': 'subtract',\n    '*': 'multiply',\n    '/': 'divide',\n    '%': 'remainder',\n    '^': 'power',\n    '!': 'factorial',\n    '<': 'comparison',\n    '>': 'comparison',\n    '<=': 'comparison',\n    '>=': 'comparison',\n    '==': 'comparison',\n    '!=': 'comparison',\n    '||': 'concatenate',\n    'and': 'logical',\n    'or': 'logical',\n    'not': 'logical',\n    '?': 'conditional',\n    ':': 'conditional'\n  };\n\n  function getOptionName(op) {\n    return optionNameMap.hasOwnProperty(op) ? optionNameMap[op] : op;\n  }\n\n  TokenStream.prototype.isOperatorEnabled = function (op) {\n    var optionName = getOptionName(op);\n    var operators = this.options.operators || {};\n\n    // in is a special case for now because it's disabled by default\n    if (optionName === 'in') {\n      return !!operators['in'];\n    }\n\n    return !(optionName in operators) || !!operators[optionName];\n  };\n\n  TokenStream.prototype.getCoordinates = function () {\n    var line = 0;\n    var column;\n    var newline = -1;\n    do {\n      line++;\n      column = this.pos - newline;\n      newline = this.expression.indexOf('\\n', newline + 1);\n    } while (newline >= 0 && newline < this.pos);\n\n    return {\n      line: line,\n      column: column\n    };\n  };\n\n  TokenStream.prototype.parseError = function (msg) {\n    var coords = this.getCoordinates();\n    throw new Error('parse error [' + coords.line + ':' + coords.column + ']: ' + msg);\n  };\n\n  function ParserState(parser, tokenStream, options) {\n    this.parser = parser;\n    this.tokens = tokenStream;\n    this.current = null;\n    this.nextToken = null;\n    this.next();\n    this.savedCurrent = null;\n    this.savedNextToken = null;\n    this.allowMemberAccess = options.allowMemberAccess !== false;\n  }\n\n  ParserState.prototype.next = function () {\n    this.current = this.nextToken;\n    return (this.nextToken = this.tokens.next());\n  };\n\n  ParserState.prototype.tokenMatches = function (token, value) {\n    if (typeof value === 'undefined') {\n      return true;\n    } else if (Array.isArray(value)) {\n      return contains(value, token.value);\n    } else if (typeof value === 'function') {\n      return value(token);\n    } else {\n      return token.value === value;\n    }\n  };\n\n  ParserState.prototype.save = function () {\n    this.savedCurrent = this.current;\n    this.savedNextToken = this.nextToken;\n    this.tokens.save();\n  };\n\n  ParserState.prototype.restore = function () {\n    this.tokens.restore();\n    this.current = this.savedCurrent;\n    this.nextToken = this.savedNextToken;\n  };\n\n  ParserState.prototype.accept = function (type, value) {\n    if (this.nextToken.type === type && this.tokenMatches(this.nextToken, value)) {\n      this.next();\n      return true;\n    }\n    return false;\n  };\n\n  ParserState.prototype.expect = function (type, value) {\n    if (!this.accept(type, value)) {\n      var coords = this.tokens.getCoordinates();\n      throw new Error('parse error [' + coords.line + ':' + coords.column + ']: Expected ' + (value || type));\n    }\n  };\n\n  ParserState.prototype.parseAtom = function (instr) {\n    if (this.accept(TNAME)) {\n      instr.push(new Instruction(IVAR, this.current.value));\n    } else if (this.accept(TNUMBER)) {\n      instr.push(new Instruction(INUMBER, this.current.value));\n    } else if (this.accept(TSTRING)) {\n      instr.push(new Instruction(INUMBER, this.current.value));\n    } else if (this.accept(TPAREN, '(')) {\n      this.parseExpression(instr);\n      this.expect(TPAREN, ')');\n    } else {\n      throw new Error('unexpected ' + this.nextToken);\n    }\n  };\n\n  ParserState.prototype.parseExpression = function (instr) {\n    this.parseConditionalExpression(instr);\n  };\n\n  ParserState.prototype.parseConditionalExpression = function (instr) {\n    this.parseOrExpression(instr);\n    while (this.accept(TOP, '?')) {\n      var trueBranch = [];\n      var falseBranch = [];\n      this.parseConditionalExpression(trueBranch);\n      this.expect(TOP, ':');\n      this.parseConditionalExpression(falseBranch);\n      instr.push(new Instruction(IEXPR, trueBranch));\n      instr.push(new Instruction(IEXPR, falseBranch));\n      instr.push(ternaryInstruction('?'));\n    }\n  };\n\n  ParserState.prototype.parseOrExpression = function (instr) {\n    this.parseAndExpression(instr);\n    while (this.accept(TOP, 'or')) {\n      var falseBranch = [];\n      this.parseAndExpression(falseBranch);\n      instr.push(new Instruction(IEXPR, falseBranch));\n      instr.push(binaryInstruction('or'));\n    }\n  };\n\n  ParserState.prototype.parseAndExpression = function (instr) {\n    this.parseComparison(instr);\n    while (this.accept(TOP, 'and')) {\n      var trueBranch = [];\n      this.parseComparison(trueBranch);\n      instr.push(new Instruction(IEXPR, trueBranch));\n      instr.push(binaryInstruction('and'));\n    }\n  };\n\n  var COMPARISON_OPERATORS = ['==', '!=', '<', '<=', '>=', '>', 'in'];\n\n  ParserState.prototype.parseComparison = function (instr) {\n    this.parseAddSub(instr);\n    while (this.accept(TOP, COMPARISON_OPERATORS)) {\n      var op = this.current;\n      this.parseAddSub(instr);\n      instr.push(binaryInstruction(op.value));\n    }\n  };\n\n  var ADD_SUB_OPERATORS = ['+', '-', '||'];\n\n  ParserState.prototype.parseAddSub = function (instr) {\n    this.parseTerm(instr);\n    while (this.accept(TOP, ADD_SUB_OPERATORS)) {\n      var op = this.current;\n      this.parseTerm(instr);\n      instr.push(binaryInstruction(op.value));\n    }\n  };\n\n  var TERM_OPERATORS = ['*', '/', '%'];\n\n  ParserState.prototype.parseTerm = function (instr) {\n    this.parseFactor(instr);\n    while (this.accept(TOP, TERM_OPERATORS)) {\n      var op = this.current;\n      this.parseFactor(instr);\n      instr.push(binaryInstruction(op.value));\n    }\n  };\n\n  ParserState.prototype.parseFactor = function (instr) {\n    var unaryOps = this.tokens.unaryOps;\n    function isPrefixOperator(token) {\n      return token.value in unaryOps;\n    }\n\n    this.save();\n    if (this.accept(TOP, isPrefixOperator)) {\n      if ((this.current.value !== '-' && this.current.value !== '+' && this.nextToken.type === TPAREN && this.nextToken.value === '(')) {\n        this.restore();\n        this.parseExponential(instr);\n      } else {\n        var op = this.current;\n        this.parseFactor(instr);\n        instr.push(unaryInstruction(op.value));\n      }\n    } else {\n      this.parseExponential(instr);\n    }\n  };\n\n  ParserState.prototype.parseExponential = function (instr) {\n    this.parsePostfixExpression(instr);\n    while (this.accept(TOP, '^')) {\n      this.parseFactor(instr);\n      instr.push(binaryInstruction('^'));\n    }\n  };\n\n  ParserState.prototype.parsePostfixExpression = function (instr) {\n    this.parseFunctionCall(instr);\n    while (this.accept(TOP, '!')) {\n      instr.push(unaryInstruction('!'));\n    }\n  };\n\n  ParserState.prototype.parseFunctionCall = function (instr) {\n    var unaryOps = this.tokens.unaryOps;\n    function isPrefixOperator(token) {\n      return token.value in unaryOps;\n    }\n\n    if (this.accept(TOP, isPrefixOperator)) {\n      var op = this.current;\n      this.parseAtom(instr);\n      instr.push(unaryInstruction(op.value));\n    } else {\n      this.parseMemberExpression(instr);\n      while (this.accept(TPAREN, '(')) {\n        if (this.accept(TPAREN, ')')) {\n          instr.push(new Instruction(IFUNCALL, 0));\n        } else {\n          var argCount = this.parseArgumentList(instr);\n          instr.push(new Instruction(IFUNCALL, argCount));\n        }\n      }\n    }\n  };\n\n  ParserState.prototype.parseArgumentList = function (instr) {\n    var argCount = 0;\n\n    while (!this.accept(TPAREN, ')')) {\n      this.parseExpression(instr);\n      ++argCount;\n      while (this.accept(TCOMMA)) {\n        this.parseExpression(instr);\n        ++argCount;\n      }\n    }\n\n    return argCount;\n  };\n\n  ParserState.prototype.parseMemberExpression = function (instr) {\n    this.parseAtom(instr);\n    while (this.accept(TOP, '.')) {\n      if (!this.allowMemberAccess) {\n        throw new Error('unexpected \".\", member access is not permitted');\n      }\n\n      this.expect(TNAME);\n      instr.push(new Instruction(IMEMBER, this.current.value));\n    }\n  };\n\n  function add(a, b) {\n    return Number(a) + Number(b);\n  }\n\n  function sub(a, b) {\n    return a - b;\n  }\n\n  function mul(a, b) {\n    return a * b;\n  }\n\n  function div(a, b) {\n    return a / b;\n  }\n\n  function mod(a, b) {\n    return a % b;\n  }\n\n  function concat(a, b) {\n    return '' + a + b;\n  }\n\n  function equal(a, b) {\n    return a === b;\n  }\n\n  function notEqual(a, b) {\n    return a !== b;\n  }\n\n  function greaterThan(a, b) {\n    return a > b;\n  }\n\n  function lessThan(a, b) {\n    return a < b;\n  }\n\n  function greaterThanEqual(a, b) {\n    return a >= b;\n  }\n\n  function lessThanEqual(a, b) {\n    return a <= b;\n  }\n\n  function andOperator(a, b) {\n    return Boolean(a && b);\n  }\n\n  function orOperator(a, b) {\n    return Boolean(a || b);\n  }\n\n  function inOperator(a, b) {\n    return contains(b, a);\n  }\n\n  function sinh(a) {\n    return ((Math.exp(a) - Math.exp(-a)) / 2);\n  }\n\n  function cosh(a) {\n    return ((Math.exp(a) + Math.exp(-a)) / 2);\n  }\n\n  function tanh(a) {\n    if (a === Infinity) return 1;\n    if (a === -Infinity) return -1;\n    return (Math.exp(a) - Math.exp(-a)) / (Math.exp(a) + Math.exp(-a));\n  }\n\n  function asinh(a) {\n    if (a === -Infinity) return a;\n    return Math.log(a + Math.sqrt((a * a) + 1));\n  }\n\n  function acosh(a) {\n    return Math.log(a + Math.sqrt((a * a) - 1));\n  }\n\n  function atanh(a) {\n    return (Math.log((1 + a) / (1 - a)) / 2);\n  }\n\n  function log10(a) {\n    return Math.log(a) * Math.LOG10E;\n  }\n\n  function neg(a) {\n    return -a;\n  }\n\n  function not(a) {\n    return !a;\n  }\n\n  function trunc(a) {\n    return a < 0 ? Math.ceil(a) : Math.floor(a);\n  }\n\n  function random(a) {\n    return Math.random() * (a || 1);\n  }\n\n  function factorial(a) { // a!\n    return gamma(a + 1);\n  }\n\n  function isInteger(value) {\n    return isFinite(value) && (value === Math.round(value));\n  }\n\n  var GAMMA_G = 4.7421875;\n  var GAMMA_P = [\n    0.99999999999999709182,\n    57.156235665862923517, -59.597960355475491248,\n    14.136097974741747174, -0.49191381609762019978,\n    0.33994649984811888699e-4,\n    0.46523628927048575665e-4, -0.98374475304879564677e-4,\n    0.15808870322491248884e-3, -0.21026444172410488319e-3,\n    0.21743961811521264320e-3, -0.16431810653676389022e-3,\n    0.84418223983852743293e-4, -0.26190838401581408670e-4,\n    0.36899182659531622704e-5\n  ];\n\n  // Gamma function from math.js\n  function gamma(n) {\n    var t, x;\n\n    if (isInteger(n)) {\n      if (n <= 0) {\n        return isFinite(n) ? Infinity : NaN;\n      }\n\n      if (n > 171) {\n        return Infinity; // Will overflow\n      }\n\n      var value = n - 2;\n      var res = n - 1;\n      while (value > 1) {\n        res *= value;\n        value--;\n      }\n\n      if (res === 0) {\n        res = 1; // 0! is per definition 1\n      }\n\n      return res;\n    }\n\n    if (n < 0.5) {\n      return Math.PI / (Math.sin(Math.PI * n) * gamma(1 - n));\n    }\n\n    if (n >= 171.35) {\n      return Infinity; // will overflow\n    }\n\n    if (n > 85.0) { // Extended Stirling Approx\n      var twoN = n * n;\n      var threeN = twoN * n;\n      var fourN = threeN * n;\n      var fiveN = fourN * n;\n      return Math.sqrt(2 * Math.PI / n) * Math.pow((n / Math.E), n) *\n        (1 + (1 / (12 * n)) + (1 / (288 * twoN)) - (139 / (51840 * threeN)) -\n        (571 / (2488320 * fourN)) + (163879 / (209018880 * fiveN)) +\n        (5246819 / (75246796800 * fiveN * n)));\n    }\n\n    --n;\n    x = GAMMA_P[0];\n    for (var i = 1; i < GAMMA_P.length; ++i) {\n      x += GAMMA_P[i] / (n + i);\n    }\n\n    t = n + GAMMA_G + 0.5;\n    return Math.sqrt(2 * Math.PI) * Math.pow(t, n + 0.5) * Math.exp(-t) * x;\n  }\n\n  function stringLength(s) {\n    return String(s).length;\n  }\n\n  function hypot() {\n    var sum = 0;\n    var larg = 0;\n    for (var i = 0; i < arguments.length; i++) {\n      var arg = Math.abs(arguments[i]);\n      var div;\n      if (larg < arg) {\n        div = larg / arg;\n        sum = (sum * div * div) + 1;\n        larg = arg;\n      } else if (arg > 0) {\n        div = arg / larg;\n        sum += div * div;\n      } else {\n        sum += arg;\n      }\n    }\n    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);\n  }\n\n  function condition(cond, yep, nope) {\n    return cond ? yep : nope;\n  }\n\n  /**\n  * Decimal adjustment of a number.\n  * From @escopecz.\n  *\n  * @param {Number} value The number.\n  * @param {Integer} exp  The exponent (the 10 logarithm of the adjustment base).\n  * @return {Number} The adjusted value.\n  */\n  function roundTo(value, exp) {\n    // If the exp is undefined or zero...\n    if (typeof exp === 'undefined' || +exp === 0) {\n      return Math.round(value);\n    }\n    value = +value;\n    exp = -(+exp);\n    // If the value is not a number or the exp is not an integer...\n    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {\n      return NaN;\n    }\n    // Shift\n    value = value.toString().split('e');\n    value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));\n    // Shift back\n    value = value.toString().split('e');\n    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));\n  }\n\n  function Parser(options) {\n    this.options = options || {};\n    this.unaryOps = {\n      sin: Math.sin,\n      cos: Math.cos,\n      tan: Math.tan,\n      asin: Math.asin,\n      acos: Math.acos,\n      atan: Math.atan,\n      sinh: Math.sinh || sinh,\n      cosh: Math.cosh || cosh,\n      tanh: Math.tanh || tanh,\n      asinh: Math.asinh || asinh,\n      acosh: Math.acosh || acosh,\n      atanh: Math.atanh || atanh,\n      sqrt: Math.sqrt,\n      log: Math.log,\n      ln: Math.log,\n      lg: Math.log10 || log10,\n      log10: Math.log10 || log10,\n      abs: Math.abs,\n      ceil: Math.ceil,\n      floor: Math.floor,\n      round: Math.round,\n      trunc: Math.trunc || trunc,\n      '-': neg,\n      '+': Number,\n      exp: Math.exp,\n      not: not,\n      length: stringLength,\n      '!': factorial\n    };\n\n    this.binaryOps = {\n      '+': add,\n      '-': sub,\n      '*': mul,\n      '/': div,\n      '%': mod,\n      '^': Math.pow,\n      '||': concat,\n      '==': equal,\n      '!=': notEqual,\n      '>': greaterThan,\n      '<': lessThan,\n      '>=': greaterThanEqual,\n      '<=': lessThanEqual,\n      and: andOperator,\n      or: orOperator,\n      'in': inOperator\n    };\n\n    this.ternaryOps = {\n      '?': condition\n    };\n\n    this.functions = {\n      random: random,\n      fac: factorial,\n      min: Math.min,\n      max: Math.max,\n      hypot: Math.hypot || hypot,\n      pyt: Math.hypot || hypot, // backward compat\n      pow: Math.pow,\n      atan2: Math.atan2,\n      'if': condition,\n      gamma: gamma,\n      roundTo: roundTo\n    };\n\n    this.consts = {\n      E: Math.E,\n      PI: Math.PI,\n      'true': true,\n      'false': false\n    };\n  }\n\n  Parser.prototype.parse = function (expr) {\n    var instr = [];\n    var parserState = new ParserState(\n      this,\n      new TokenStream(this, expr),\n      { allowMemberAccess: this.options.allowMemberAccess }\n    );\n\n    parserState.parseExpression(instr);\n    parserState.expect(TEOF, 'EOF');\n\n    return new Expression(instr, this);\n  };\n\n  Parser.prototype.evaluate = function (expr, variables) {\n    return this.parse(expr).evaluate(variables);\n  };\n\n  var sharedParser = new Parser();\n\n  Parser.parse = function (expr) {\n    return sharedParser.parse(expr);\n  };\n\n  Parser.evaluate = function (expr, variables) {\n    return sharedParser.parse(expr).evaluate(variables);\n  };\n\n  /*!\n   Based on ndef.parser, by Raphael Graf(r@undefined.ch)\n   http://www.undefined.ch/mparser/index.html\n\n   Ported to JavaScript and modified by Matthew Crumley (email@matthewcrumley.com, http://silentmatt.com/)\n\n   You are free to use and modify this code in anyway you find useful. Please leave this comment in the code\n   to acknowledge its original source. If you feel like it, I enjoy hearing about projects that use my code,\n   but don't feel like you have to let me know or ask permission.\n  */\n\n  var index = {\n    Parser: Parser,\n    Expression: Expression\n  };\n\n  return index;\n\n})));\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/expr-eval/dist/bundle.js?");

/***/ }),

/***/ "./node_modules/flat/index.js":
/*!************************************!*\
  !*** ./node_modules/flat/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isBuffer = __webpack_require__(/*! is-buffer */ \"./node_modules/is-buffer/index.js\")\n\nmodule.exports = flatten\nflatten.flatten = flatten\nflatten.unflatten = unflatten\n\nfunction flatten (target, opts) {\n  opts = opts || {}\n\n  var delimiter = opts.delimiter || '.'\n  var maxDepth = opts.maxDepth\n  var output = {}\n\n  function step (object, prev, currentDepth) {\n    currentDepth = currentDepth || 1\n    Object.keys(object).forEach(function (key) {\n      var value = object[key]\n      var isarray = opts.safe && Array.isArray(value)\n      var type = Object.prototype.toString.call(value)\n      var isbuffer = isBuffer(value)\n      var isobject = (\n        type === '[object Object]' ||\n        type === '[object Array]'\n      )\n\n      var newKey = prev\n        ? prev + delimiter + key\n        : key\n\n      if (!isarray && !isbuffer && isobject && Object.keys(value).length &&\n        (!opts.maxDepth || currentDepth < maxDepth)) {\n        return step(value, newKey, currentDepth + 1)\n      }\n\n      output[newKey] = value\n    })\n  }\n\n  step(target)\n\n  return output\n}\n\nfunction unflatten (target, opts) {\n  opts = opts || {}\n\n  var delimiter = opts.delimiter || '.'\n  var overwrite = opts.overwrite || false\n  var result = {}\n\n  var isbuffer = isBuffer(target)\n  if (isbuffer || Object.prototype.toString.call(target) !== '[object Object]') {\n    return target\n  }\n\n  // safely ensure that the key is\n  // an integer.\n  function getkey (key) {\n    var parsedKey = Number(key)\n\n    return (\n      isNaN(parsedKey) ||\n      key.indexOf('.') !== -1 ||\n      opts.object\n    ) ? key\n      : parsedKey\n  }\n\n  var sortedKeys = Object.keys(target).sort(function (keyA, keyB) {\n    return keyA.length - keyB.length\n  })\n\n  sortedKeys.forEach(function (key) {\n    var split = key.split(delimiter)\n    var key1 = getkey(split.shift())\n    var key2 = getkey(split[0])\n    var recipient = result\n\n    while (key2 !== undefined) {\n      var type = Object.prototype.toString.call(recipient[key1])\n      var isobject = (\n        type === '[object Object]' ||\n        type === '[object Array]'\n      )\n\n      // do not write over falsey, non-undefined values if overwrite is false\n      if (!overwrite && !isobject && typeof recipient[key1] !== 'undefined') {\n        return\n      }\n\n      if ((overwrite && !isobject) || (!overwrite && recipient[key1] == null)) {\n        recipient[key1] = (\n          typeof key2 === 'number' &&\n          !opts.object ? [] : {}\n        )\n      }\n\n      recipient = recipient[key1]\n      if (split.length > 0) {\n        key1 = getkey(split.shift())\n        key2 = getkey(split[0])\n      }\n    }\n\n    // unflatten again for 'messy objects'\n    recipient[key1] = unflatten(target[key], opts)\n  })\n\n  return result\n}\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/flat/index.js?");

/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*!\n * Determine if an object is a Buffer\n *\n * @author   Feross Aboukhadijeh <https://feross.org>\n * @license  MIT\n */\n\n// The _isBuffer check is for Safari 5-7 support, because it's missing\n// Object.prototype.constructor. Remove this eventually\nmodule.exports = function (obj) {\n  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)\n}\n\nfunction isBuffer (obj) {\n  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)\n}\n\n// For Node v0.10 support. Remove this eventually.\nfunction isSlowBuffer (obj) {\n  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))\n}\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/is-buffer/index.js?");

/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar DataView = getNative(root, 'DataView');\n\nmodule.exports = DataView;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_DataView.js?");

/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var hashClear = __webpack_require__(/*! ./_hashClear */ \"./node_modules/lodash/_hashClear.js\"),\n    hashDelete = __webpack_require__(/*! ./_hashDelete */ \"./node_modules/lodash/_hashDelete.js\"),\n    hashGet = __webpack_require__(/*! ./_hashGet */ \"./node_modules/lodash/_hashGet.js\"),\n    hashHas = __webpack_require__(/*! ./_hashHas */ \"./node_modules/lodash/_hashHas.js\"),\n    hashSet = __webpack_require__(/*! ./_hashSet */ \"./node_modules/lodash/_hashSet.js\");\n\n/**\n * Creates a hash object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction Hash(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `Hash`.\nHash.prototype.clear = hashClear;\nHash.prototype['delete'] = hashDelete;\nHash.prototype.get = hashGet;\nHash.prototype.has = hashHas;\nHash.prototype.set = hashSet;\n\nmodule.exports = Hash;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_Hash.js?");

/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ \"./node_modules/lodash/_listCacheClear.js\"),\n    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ \"./node_modules/lodash/_listCacheDelete.js\"),\n    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ \"./node_modules/lodash/_listCacheGet.js\"),\n    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ \"./node_modules/lodash/_listCacheHas.js\"),\n    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ \"./node_modules/lodash/_listCacheSet.js\");\n\n/**\n * Creates an list cache object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction ListCache(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `ListCache`.\nListCache.prototype.clear = listCacheClear;\nListCache.prototype['delete'] = listCacheDelete;\nListCache.prototype.get = listCacheGet;\nListCache.prototype.has = listCacheHas;\nListCache.prototype.set = listCacheSet;\n\nmodule.exports = ListCache;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_ListCache.js?");

/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar Map = getNative(root, 'Map');\n\nmodule.exports = Map;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_Map.js?");

/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ \"./node_modules/lodash/_mapCacheClear.js\"),\n    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ \"./node_modules/lodash/_mapCacheDelete.js\"),\n    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ \"./node_modules/lodash/_mapCacheGet.js\"),\n    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ \"./node_modules/lodash/_mapCacheHas.js\"),\n    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ \"./node_modules/lodash/_mapCacheSet.js\");\n\n/**\n * Creates a map cache object to store key-value pairs.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction MapCache(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `MapCache`.\nMapCache.prototype.clear = mapCacheClear;\nMapCache.prototype['delete'] = mapCacheDelete;\nMapCache.prototype.get = mapCacheGet;\nMapCache.prototype.has = mapCacheHas;\nMapCache.prototype.set = mapCacheSet;\n\nmodule.exports = MapCache;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_MapCache.js?");

/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar Promise = getNative(root, 'Promise');\n\nmodule.exports = Promise;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_Promise.js?");

/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar Set = getNative(root, 'Set');\n\nmodule.exports = Set;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_Set.js?");

/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var MapCache = __webpack_require__(/*! ./_MapCache */ \"./node_modules/lodash/_MapCache.js\"),\n    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ \"./node_modules/lodash/_setCacheAdd.js\"),\n    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ \"./node_modules/lodash/_setCacheHas.js\");\n\n/**\n *\n * Creates an array cache object to store unique values.\n *\n * @private\n * @constructor\n * @param {Array} [values] The values to cache.\n */\nfunction SetCache(values) {\n  var index = -1,\n      length = values == null ? 0 : values.length;\n\n  this.__data__ = new MapCache;\n  while (++index < length) {\n    this.add(values[index]);\n  }\n}\n\n// Add methods to `SetCache`.\nSetCache.prototype.add = SetCache.prototype.push = setCacheAdd;\nSetCache.prototype.has = setCacheHas;\n\nmodule.exports = SetCache;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_SetCache.js?");

/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ListCache = __webpack_require__(/*! ./_ListCache */ \"./node_modules/lodash/_ListCache.js\"),\n    stackClear = __webpack_require__(/*! ./_stackClear */ \"./node_modules/lodash/_stackClear.js\"),\n    stackDelete = __webpack_require__(/*! ./_stackDelete */ \"./node_modules/lodash/_stackDelete.js\"),\n    stackGet = __webpack_require__(/*! ./_stackGet */ \"./node_modules/lodash/_stackGet.js\"),\n    stackHas = __webpack_require__(/*! ./_stackHas */ \"./node_modules/lodash/_stackHas.js\"),\n    stackSet = __webpack_require__(/*! ./_stackSet */ \"./node_modules/lodash/_stackSet.js\");\n\n/**\n * Creates a stack cache object to store key-value pairs.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction Stack(entries) {\n  var data = this.__data__ = new ListCache(entries);\n  this.size = data.size;\n}\n\n// Add methods to `Stack`.\nStack.prototype.clear = stackClear;\nStack.prototype['delete'] = stackDelete;\nStack.prototype.get = stackGet;\nStack.prototype.has = stackHas;\nStack.prototype.set = stackSet;\n\nmodule.exports = Stack;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_Stack.js?");

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Symbol = root.Symbol;\n\nmodule.exports = Symbol;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_Symbol.js?");

/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Uint8Array = root.Uint8Array;\n\nmodule.exports = Uint8Array;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_Uint8Array.js?");

/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar WeakMap = getNative(root, 'WeakMap');\n\nmodule.exports = WeakMap;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_WeakMap.js?");

/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A faster alternative to `Function#apply`, this function invokes `func`\n * with the `this` binding of `thisArg` and the arguments of `args`.\n *\n * @private\n * @param {Function} func The function to invoke.\n * @param {*} thisArg The `this` binding of `func`.\n * @param {Array} args The arguments to invoke `func` with.\n * @returns {*} Returns the result of `func`.\n */\nfunction apply(func, thisArg, args) {\n  switch (args.length) {\n    case 0: return func.call(thisArg);\n    case 1: return func.call(thisArg, args[0]);\n    case 2: return func.call(thisArg, args[0], args[1]);\n    case 3: return func.call(thisArg, args[0], args[1], args[2]);\n  }\n  return func.apply(thisArg, args);\n}\n\nmodule.exports = apply;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_apply.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayEach.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayEach.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.forEach` for arrays without support for\n * iteratee shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns `array`.\n */\nfunction arrayEach(array, iteratee) {\n  var index = -1,\n      length = array == null ? 0 : array.length;\n\n  while (++index < length) {\n    if (iteratee(array[index], index, array) === false) {\n      break;\n    }\n  }\n  return array;\n}\n\nmodule.exports = arrayEach;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_arrayEach.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.filter` for arrays without support for\n * iteratee shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} predicate The function invoked per iteration.\n * @returns {Array} Returns the new filtered array.\n */\nfunction arrayFilter(array, predicate) {\n  var index = -1,\n      length = array == null ? 0 : array.length,\n      resIndex = 0,\n      result = [];\n\n  while (++index < length) {\n    var value = array[index];\n    if (predicate(value, index, array)) {\n      result[resIndex++] = value;\n    }\n  }\n  return result;\n}\n\nmodule.exports = arrayFilter;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_arrayFilter.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayIncludes.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayIncludes.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ \"./node_modules/lodash/_baseIndexOf.js\");\n\n/**\n * A specialized version of `_.includes` for arrays without support for\n * specifying an index to search from.\n *\n * @private\n * @param {Array} [array] The array to inspect.\n * @param {*} target The value to search for.\n * @returns {boolean} Returns `true` if `target` is found, else `false`.\n */\nfunction arrayIncludes(array, value) {\n  var length = array == null ? 0 : array.length;\n  return !!length && baseIndexOf(array, value, 0) > -1;\n}\n\nmodule.exports = arrayIncludes;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_arrayIncludes.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayIncludesWith.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash/_arrayIncludesWith.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This function is like `arrayIncludes` except that it accepts a comparator.\n *\n * @private\n * @param {Array} [array] The array to inspect.\n * @param {*} target The value to search for.\n * @param {Function} comparator The comparator invoked per element.\n * @returns {boolean} Returns `true` if `target` is found, else `false`.\n */\nfunction arrayIncludesWith(array, value, comparator) {\n  var index = -1,\n      length = array == null ? 0 : array.length;\n\n  while (++index < length) {\n    if (comparator(value, array[index])) {\n      return true;\n    }\n  }\n  return false;\n}\n\nmodule.exports = arrayIncludesWith;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_arrayIncludesWith.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseTimes = __webpack_require__(/*! ./_baseTimes */ \"./node_modules/lodash/_baseTimes.js\"),\n    isArguments = __webpack_require__(/*! ./isArguments */ \"./node_modules/lodash/isArguments.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isBuffer = __webpack_require__(/*! ./isBuffer */ \"./node_modules/lodash/isBuffer.js\"),\n    isIndex = __webpack_require__(/*! ./_isIndex */ \"./node_modules/lodash/_isIndex.js\"),\n    isTypedArray = __webpack_require__(/*! ./isTypedArray */ \"./node_modules/lodash/isTypedArray.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Creates an array of the enumerable property names of the array-like `value`.\n *\n * @private\n * @param {*} value The value to query.\n * @param {boolean} inherited Specify returning inherited property names.\n * @returns {Array} Returns the array of property names.\n */\nfunction arrayLikeKeys(value, inherited) {\n  var isArr = isArray(value),\n      isArg = !isArr && isArguments(value),\n      isBuff = !isArr && !isArg && isBuffer(value),\n      isType = !isArr && !isArg && !isBuff && isTypedArray(value),\n      skipIndexes = isArr || isArg || isBuff || isType,\n      result = skipIndexes ? baseTimes(value.length, String) : [],\n      length = result.length;\n\n  for (var key in value) {\n    if ((inherited || hasOwnProperty.call(value, key)) &&\n        !(skipIndexes && (\n           // Safari 9 has enumerable `arguments.length` in strict mode.\n           key == 'length' ||\n           // Node.js 0.10 has enumerable non-index properties on buffers.\n           (isBuff && (key == 'offset' || key == 'parent')) ||\n           // PhantomJS 2 has enumerable non-index properties on typed arrays.\n           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||\n           // Skip index properties.\n           isIndex(key, length)\n        ))) {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\nmodule.exports = arrayLikeKeys;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_arrayLikeKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.map` for arrays without support for iteratee\n * shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the new mapped array.\n */\nfunction arrayMap(array, iteratee) {\n  var index = -1,\n      length = array == null ? 0 : array.length,\n      result = Array(length);\n\n  while (++index < length) {\n    result[index] = iteratee(array[index], index, array);\n  }\n  return result;\n}\n\nmodule.exports = arrayMap;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_arrayMap.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Appends the elements of `values` to `array`.\n *\n * @private\n * @param {Array} array The array to modify.\n * @param {Array} values The values to append.\n * @returns {Array} Returns `array`.\n */\nfunction arrayPush(array, values) {\n  var index = -1,\n      length = values.length,\n      offset = array.length;\n\n  while (++index < length) {\n    array[offset + index] = values[index];\n  }\n  return array;\n}\n\nmodule.exports = arrayPush;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_arrayPush.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayReduce.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayReduce.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.reduce` for arrays without support for\n * iteratee shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @param {*} [accumulator] The initial value.\n * @param {boolean} [initAccum] Specify using the first element of `array` as\n *  the initial value.\n * @returns {*} Returns the accumulated value.\n */\nfunction arrayReduce(array, iteratee, accumulator, initAccum) {\n  var index = -1,\n      length = array == null ? 0 : array.length;\n\n  if (initAccum && length) {\n    accumulator = array[++index];\n  }\n  while (++index < length) {\n    accumulator = iteratee(accumulator, array[index], index, array);\n  }\n  return accumulator;\n}\n\nmodule.exports = arrayReduce;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_arrayReduce.js?");

/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.some` for arrays without support for iteratee\n * shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} predicate The function invoked per iteration.\n * @returns {boolean} Returns `true` if any element passes the predicate check,\n *  else `false`.\n */\nfunction arraySome(array, predicate) {\n  var index = -1,\n      length = array == null ? 0 : array.length;\n\n  while (++index < length) {\n    if (predicate(array[index], index, array)) {\n      return true;\n    }\n  }\n  return false;\n}\n\nmodule.exports = arraySome;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_arraySome.js?");

/***/ }),

/***/ "./node_modules/lodash/_asciiToArray.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_asciiToArray.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Converts an ASCII `string` to an array.\n *\n * @private\n * @param {string} string The string to convert.\n * @returns {Array} Returns the converted array.\n */\nfunction asciiToArray(string) {\n  return string.split('');\n}\n\nmodule.exports = asciiToArray;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_asciiToArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_assignMergeValue.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_assignMergeValue.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ \"./node_modules/lodash/_baseAssignValue.js\"),\n    eq = __webpack_require__(/*! ./eq */ \"./node_modules/lodash/eq.js\");\n\n/**\n * This function is like `assignValue` except that it doesn't assign\n * `undefined` values.\n *\n * @private\n * @param {Object} object The object to modify.\n * @param {string} key The key of the property to assign.\n * @param {*} value The value to assign.\n */\nfunction assignMergeValue(object, key, value) {\n  if ((value !== undefined && !eq(object[key], value)) ||\n      (value === undefined && !(key in object))) {\n    baseAssignValue(object, key, value);\n  }\n}\n\nmodule.exports = assignMergeValue;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_assignMergeValue.js?");

/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ \"./node_modules/lodash/_baseAssignValue.js\"),\n    eq = __webpack_require__(/*! ./eq */ \"./node_modules/lodash/eq.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Assigns `value` to `key` of `object` if the existing value is not equivalent\n * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * for equality comparisons.\n *\n * @private\n * @param {Object} object The object to modify.\n * @param {string} key The key of the property to assign.\n * @param {*} value The value to assign.\n */\nfunction assignValue(object, key, value) {\n  var objValue = object[key];\n  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||\n      (value === undefined && !(key in object))) {\n    baseAssignValue(object, key, value);\n  }\n}\n\nmodule.exports = assignValue;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_assignValue.js?");

/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var eq = __webpack_require__(/*! ./eq */ \"./node_modules/lodash/eq.js\");\n\n/**\n * Gets the index at which the `key` is found in `array` of key-value pairs.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {*} key The key to search for.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\nfunction assocIndexOf(array, key) {\n  var length = array.length;\n  while (length--) {\n    if (eq(array[length][0], key)) {\n      return length;\n    }\n  }\n  return -1;\n}\n\nmodule.exports = assocIndexOf;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_assocIndexOf.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseAssign.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseAssign.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var copyObject = __webpack_require__(/*! ./_copyObject */ \"./node_modules/lodash/_copyObject.js\"),\n    keys = __webpack_require__(/*! ./keys */ \"./node_modules/lodash/keys.js\");\n\n/**\n * The base implementation of `_.assign` without support for multiple sources\n * or `customizer` functions.\n *\n * @private\n * @param {Object} object The destination object.\n * @param {Object} source The source object.\n * @returns {Object} Returns `object`.\n */\nfunction baseAssign(object, source) {\n  return object && copyObject(source, keys(source), object);\n}\n\nmodule.exports = baseAssign;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseAssign.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseAssignIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseAssignIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var copyObject = __webpack_require__(/*! ./_copyObject */ \"./node_modules/lodash/_copyObject.js\"),\n    keysIn = __webpack_require__(/*! ./keysIn */ \"./node_modules/lodash/keysIn.js\");\n\n/**\n * The base implementation of `_.assignIn` without support for multiple sources\n * or `customizer` functions.\n *\n * @private\n * @param {Object} object The destination object.\n * @param {Object} source The source object.\n * @returns {Object} Returns `object`.\n */\nfunction baseAssignIn(object, source) {\n  return object && copyObject(source, keysIn(source), object);\n}\n\nmodule.exports = baseAssignIn;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseAssignIn.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineProperty = __webpack_require__(/*! ./_defineProperty */ \"./node_modules/lodash/_defineProperty.js\");\n\n/**\n * The base implementation of `assignValue` and `assignMergeValue` without\n * value checks.\n *\n * @private\n * @param {Object} object The object to modify.\n * @param {string} key The key of the property to assign.\n * @param {*} value The value to assign.\n */\nfunction baseAssignValue(object, key, value) {\n  if (key == '__proto__' && defineProperty) {\n    defineProperty(object, key, {\n      'configurable': true,\n      'enumerable': true,\n      'value': value,\n      'writable': true\n    });\n  } else {\n    object[key] = value;\n  }\n}\n\nmodule.exports = baseAssignValue;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseAssignValue.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseClamp.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseClamp.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.clamp` which doesn't coerce arguments.\n *\n * @private\n * @param {number} number The number to clamp.\n * @param {number} [lower] The lower bound.\n * @param {number} upper The upper bound.\n * @returns {number} Returns the clamped number.\n */\nfunction baseClamp(number, lower, upper) {\n  if (number === number) {\n    if (upper !== undefined) {\n      number = number <= upper ? number : upper;\n    }\n    if (lower !== undefined) {\n      number = number >= lower ? number : lower;\n    }\n  }\n  return number;\n}\n\nmodule.exports = baseClamp;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseClamp.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseClone.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseClone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Stack = __webpack_require__(/*! ./_Stack */ \"./node_modules/lodash/_Stack.js\"),\n    arrayEach = __webpack_require__(/*! ./_arrayEach */ \"./node_modules/lodash/_arrayEach.js\"),\n    assignValue = __webpack_require__(/*! ./_assignValue */ \"./node_modules/lodash/_assignValue.js\"),\n    baseAssign = __webpack_require__(/*! ./_baseAssign */ \"./node_modules/lodash/_baseAssign.js\"),\n    baseAssignIn = __webpack_require__(/*! ./_baseAssignIn */ \"./node_modules/lodash/_baseAssignIn.js\"),\n    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ \"./node_modules/lodash/_cloneBuffer.js\"),\n    copyArray = __webpack_require__(/*! ./_copyArray */ \"./node_modules/lodash/_copyArray.js\"),\n    copySymbols = __webpack_require__(/*! ./_copySymbols */ \"./node_modules/lodash/_copySymbols.js\"),\n    copySymbolsIn = __webpack_require__(/*! ./_copySymbolsIn */ \"./node_modules/lodash/_copySymbolsIn.js\"),\n    getAllKeys = __webpack_require__(/*! ./_getAllKeys */ \"./node_modules/lodash/_getAllKeys.js\"),\n    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ \"./node_modules/lodash/_getAllKeysIn.js\"),\n    getTag = __webpack_require__(/*! ./_getTag */ \"./node_modules/lodash/_getTag.js\"),\n    initCloneArray = __webpack_require__(/*! ./_initCloneArray */ \"./node_modules/lodash/_initCloneArray.js\"),\n    initCloneByTag = __webpack_require__(/*! ./_initCloneByTag */ \"./node_modules/lodash/_initCloneByTag.js\"),\n    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ \"./node_modules/lodash/_initCloneObject.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isBuffer = __webpack_require__(/*! ./isBuffer */ \"./node_modules/lodash/isBuffer.js\"),\n    isMap = __webpack_require__(/*! ./isMap */ \"./node_modules/lodash/isMap.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    isSet = __webpack_require__(/*! ./isSet */ \"./node_modules/lodash/isSet.js\"),\n    keys = __webpack_require__(/*! ./keys */ \"./node_modules/lodash/keys.js\");\n\n/** Used to compose bitmasks for cloning. */\nvar CLONE_DEEP_FLAG = 1,\n    CLONE_FLAT_FLAG = 2,\n    CLONE_SYMBOLS_FLAG = 4;\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]',\n    arrayTag = '[object Array]',\n    boolTag = '[object Boolean]',\n    dateTag = '[object Date]',\n    errorTag = '[object Error]',\n    funcTag = '[object Function]',\n    genTag = '[object GeneratorFunction]',\n    mapTag = '[object Map]',\n    numberTag = '[object Number]',\n    objectTag = '[object Object]',\n    regexpTag = '[object RegExp]',\n    setTag = '[object Set]',\n    stringTag = '[object String]',\n    symbolTag = '[object Symbol]',\n    weakMapTag = '[object WeakMap]';\n\nvar arrayBufferTag = '[object ArrayBuffer]',\n    dataViewTag = '[object DataView]',\n    float32Tag = '[object Float32Array]',\n    float64Tag = '[object Float64Array]',\n    int8Tag = '[object Int8Array]',\n    int16Tag = '[object Int16Array]',\n    int32Tag = '[object Int32Array]',\n    uint8Tag = '[object Uint8Array]',\n    uint8ClampedTag = '[object Uint8ClampedArray]',\n    uint16Tag = '[object Uint16Array]',\n    uint32Tag = '[object Uint32Array]';\n\n/** Used to identify `toStringTag` values supported by `_.clone`. */\nvar cloneableTags = {};\ncloneableTags[argsTag] = cloneableTags[arrayTag] =\ncloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =\ncloneableTags[boolTag] = cloneableTags[dateTag] =\ncloneableTags[float32Tag] = cloneableTags[float64Tag] =\ncloneableTags[int8Tag] = cloneableTags[int16Tag] =\ncloneableTags[int32Tag] = cloneableTags[mapTag] =\ncloneableTags[numberTag] = cloneableTags[objectTag] =\ncloneableTags[regexpTag] = cloneableTags[setTag] =\ncloneableTags[stringTag] = cloneableTags[symbolTag] =\ncloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =\ncloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;\ncloneableTags[errorTag] = cloneableTags[funcTag] =\ncloneableTags[weakMapTag] = false;\n\n/**\n * The base implementation of `_.clone` and `_.cloneDeep` which tracks\n * traversed objects.\n *\n * @private\n * @param {*} value The value to clone.\n * @param {boolean} bitmask The bitmask flags.\n *  1 - Deep clone\n *  2 - Flatten inherited properties\n *  4 - Clone symbols\n * @param {Function} [customizer] The function to customize cloning.\n * @param {string} [key] The key of `value`.\n * @param {Object} [object] The parent object of `value`.\n * @param {Object} [stack] Tracks traversed objects and their clone counterparts.\n * @returns {*} Returns the cloned value.\n */\nfunction baseClone(value, bitmask, customizer, key, object, stack) {\n  var result,\n      isDeep = bitmask & CLONE_DEEP_FLAG,\n      isFlat = bitmask & CLONE_FLAT_FLAG,\n      isFull = bitmask & CLONE_SYMBOLS_FLAG;\n\n  if (customizer) {\n    result = object ? customizer(value, key, object, stack) : customizer(value);\n  }\n  if (result !== undefined) {\n    return result;\n  }\n  if (!isObject(value)) {\n    return value;\n  }\n  var isArr = isArray(value);\n  if (isArr) {\n    result = initCloneArray(value);\n    if (!isDeep) {\n      return copyArray(value, result);\n    }\n  } else {\n    var tag = getTag(value),\n        isFunc = tag == funcTag || tag == genTag;\n\n    if (isBuffer(value)) {\n      return cloneBuffer(value, isDeep);\n    }\n    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {\n      result = (isFlat || isFunc) ? {} : initCloneObject(value);\n      if (!isDeep) {\n        return isFlat\n          ? copySymbolsIn(value, baseAssignIn(result, value))\n          : copySymbols(value, baseAssign(result, value));\n      }\n    } else {\n      if (!cloneableTags[tag]) {\n        return object ? value : {};\n      }\n      result = initCloneByTag(value, tag, isDeep);\n    }\n  }\n  // Check for circular references and return its corresponding clone.\n  stack || (stack = new Stack);\n  var stacked = stack.get(value);\n  if (stacked) {\n    return stacked;\n  }\n  stack.set(value, result);\n\n  if (isSet(value)) {\n    value.forEach(function(subValue) {\n      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));\n    });\n\n    return result;\n  }\n\n  if (isMap(value)) {\n    value.forEach(function(subValue, key) {\n      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));\n    });\n\n    return result;\n  }\n\n  var keysFunc = isFull\n    ? (isFlat ? getAllKeysIn : getAllKeys)\n    : (isFlat ? keysIn : keys);\n\n  var props = isArr ? undefined : keysFunc(value);\n  arrayEach(props || value, function(subValue, key) {\n    if (props) {\n      key = subValue;\n      subValue = value[key];\n    }\n    // Recursively populate clone (susceptible to call stack limits).\n    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));\n  });\n  return result;\n}\n\nmodule.exports = baseClone;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseClone.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n\n/** Built-in value references. */\nvar objectCreate = Object.create;\n\n/**\n * The base implementation of `_.create` without support for assigning\n * properties to the created object.\n *\n * @private\n * @param {Object} proto The object to inherit from.\n * @returns {Object} Returns the new object.\n */\nvar baseCreate = (function() {\n  function object() {}\n  return function(proto) {\n    if (!isObject(proto)) {\n      return {};\n    }\n    if (objectCreate) {\n      return objectCreate(proto);\n    }\n    object.prototype = proto;\n    var result = new object;\n    object.prototype = undefined;\n    return result;\n  };\n}());\n\nmodule.exports = baseCreate;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseCreate.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseDifference.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseDifference.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var SetCache = __webpack_require__(/*! ./_SetCache */ \"./node_modules/lodash/_SetCache.js\"),\n    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ \"./node_modules/lodash/_arrayIncludes.js\"),\n    arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ \"./node_modules/lodash/_arrayIncludesWith.js\"),\n    arrayMap = __webpack_require__(/*! ./_arrayMap */ \"./node_modules/lodash/_arrayMap.js\"),\n    baseUnary = __webpack_require__(/*! ./_baseUnary */ \"./node_modules/lodash/_baseUnary.js\"),\n    cacheHas = __webpack_require__(/*! ./_cacheHas */ \"./node_modules/lodash/_cacheHas.js\");\n\n/** Used as the size to enable large array optimizations. */\nvar LARGE_ARRAY_SIZE = 200;\n\n/**\n * The base implementation of methods like `_.difference` without support\n * for excluding multiple arrays or iteratee shorthands.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {Array} values The values to exclude.\n * @param {Function} [iteratee] The iteratee invoked per element.\n * @param {Function} [comparator] The comparator invoked per element.\n * @returns {Array} Returns the new array of filtered values.\n */\nfunction baseDifference(array, values, iteratee, comparator) {\n  var index = -1,\n      includes = arrayIncludes,\n      isCommon = true,\n      length = array.length,\n      result = [],\n      valuesLength = values.length;\n\n  if (!length) {\n    return result;\n  }\n  if (iteratee) {\n    values = arrayMap(values, baseUnary(iteratee));\n  }\n  if (comparator) {\n    includes = arrayIncludesWith;\n    isCommon = false;\n  }\n  else if (values.length >= LARGE_ARRAY_SIZE) {\n    includes = cacheHas;\n    isCommon = false;\n    values = new SetCache(values);\n  }\n  outer:\n  while (++index < length) {\n    var value = array[index],\n        computed = iteratee == null ? value : iteratee(value);\n\n    value = (comparator || value !== 0) ? value : 0;\n    if (isCommon && computed === computed) {\n      var valuesIndex = valuesLength;\n      while (valuesIndex--) {\n        if (values[valuesIndex] === computed) {\n          continue outer;\n        }\n      }\n      result.push(value);\n    }\n    else if (!includes(values, computed, comparator)) {\n      result.push(value);\n    }\n  }\n  return result;\n}\n\nmodule.exports = baseDifference;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseDifference.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseEach.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseEach.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ \"./node_modules/lodash/_baseForOwn.js\"),\n    createBaseEach = __webpack_require__(/*! ./_createBaseEach */ \"./node_modules/lodash/_createBaseEach.js\");\n\n/**\n * The base implementation of `_.forEach` without support for iteratee shorthands.\n *\n * @private\n * @param {Array|Object} collection The collection to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array|Object} Returns `collection`.\n */\nvar baseEach = createBaseEach(baseForOwn);\n\nmodule.exports = baseEach;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseEach.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseFindIndex.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseFindIndex.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.findIndex` and `_.findLastIndex` without\n * support for iteratee shorthands.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {Function} predicate The function invoked per iteration.\n * @param {number} fromIndex The index to search from.\n * @param {boolean} [fromRight] Specify iterating from right to left.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\nfunction baseFindIndex(array, predicate, fromIndex, fromRight) {\n  var length = array.length,\n      index = fromIndex + (fromRight ? 1 : -1);\n\n  while ((fromRight ? index-- : ++index < length)) {\n    if (predicate(array[index], index, array)) {\n      return index;\n    }\n  }\n  return -1;\n}\n\nmodule.exports = baseFindIndex;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseFindIndex.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseFlatten.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseFlatten.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayPush = __webpack_require__(/*! ./_arrayPush */ \"./node_modules/lodash/_arrayPush.js\"),\n    isFlattenable = __webpack_require__(/*! ./_isFlattenable */ \"./node_modules/lodash/_isFlattenable.js\");\n\n/**\n * The base implementation of `_.flatten` with support for restricting flattening.\n *\n * @private\n * @param {Array} array The array to flatten.\n * @param {number} depth The maximum recursion depth.\n * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.\n * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.\n * @param {Array} [result=[]] The initial result value.\n * @returns {Array} Returns the new flattened array.\n */\nfunction baseFlatten(array, depth, predicate, isStrict, result) {\n  var index = -1,\n      length = array.length;\n\n  predicate || (predicate = isFlattenable);\n  result || (result = []);\n\n  while (++index < length) {\n    var value = array[index];\n    if (depth > 0 && predicate(value)) {\n      if (depth > 1) {\n        // Recursively flatten arrays (susceptible to call stack limits).\n        baseFlatten(value, depth - 1, predicate, isStrict, result);\n      } else {\n        arrayPush(result, value);\n      }\n    } else if (!isStrict) {\n      result[result.length] = value;\n    }\n  }\n  return result;\n}\n\nmodule.exports = baseFlatten;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseFlatten.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ \"./node_modules/lodash/_createBaseFor.js\");\n\n/**\n * The base implementation of `baseForOwn` which iterates over `object`\n * properties returned by `keysFunc` and invokes `iteratee` for each property.\n * Iteratee functions may exit iteration early by explicitly returning `false`.\n *\n * @private\n * @param {Object} object The object to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @param {Function} keysFunc The function to get the keys of `object`.\n * @returns {Object} Returns `object`.\n */\nvar baseFor = createBaseFor();\n\nmodule.exports = baseFor;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseFor.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseFor = __webpack_require__(/*! ./_baseFor */ \"./node_modules/lodash/_baseFor.js\"),\n    keys = __webpack_require__(/*! ./keys */ \"./node_modules/lodash/keys.js\");\n\n/**\n * The base implementation of `_.forOwn` without support for iteratee shorthands.\n *\n * @private\n * @param {Object} object The object to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Object} Returns `object`.\n */\nfunction baseForOwn(object, iteratee) {\n  return object && baseFor(object, iteratee, keys);\n}\n\nmodule.exports = baseForOwn;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseForOwn.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var castPath = __webpack_require__(/*! ./_castPath */ \"./node_modules/lodash/_castPath.js\"),\n    toKey = __webpack_require__(/*! ./_toKey */ \"./node_modules/lodash/_toKey.js\");\n\n/**\n * The base implementation of `_.get` without support for default values.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {Array|string} path The path of the property to get.\n * @returns {*} Returns the resolved value.\n */\nfunction baseGet(object, path) {\n  path = castPath(path, object);\n\n  var index = 0,\n      length = path.length;\n\n  while (object != null && index < length) {\n    object = object[toKey(path[index++])];\n  }\n  return (index && index == length) ? object : undefined;\n}\n\nmodule.exports = baseGet;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayPush = __webpack_require__(/*! ./_arrayPush */ \"./node_modules/lodash/_arrayPush.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\");\n\n/**\n * The base implementation of `getAllKeys` and `getAllKeysIn` which uses\n * `keysFunc` and `symbolsFunc` to get the enumerable property names and\n * symbols of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {Function} keysFunc The function to get the keys of `object`.\n * @param {Function} symbolsFunc The function to get the symbols of `object`.\n * @returns {Array} Returns the array of property names and symbols.\n */\nfunction baseGetAllKeys(object, keysFunc, symbolsFunc) {\n  var result = keysFunc(object);\n  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));\n}\n\nmodule.exports = baseGetAllKeys;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseGetAllKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    getRawTag = __webpack_require__(/*! ./_getRawTag */ \"./node_modules/lodash/_getRawTag.js\"),\n    objectToString = __webpack_require__(/*! ./_objectToString */ \"./node_modules/lodash/_objectToString.js\");\n\n/** `Object#toString` result references. */\nvar nullTag = '[object Null]',\n    undefinedTag = '[object Undefined]';\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * The base implementation of `getTag` without fallbacks for buggy environments.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nfunction baseGetTag(value) {\n  if (value == null) {\n    return value === undefined ? undefinedTag : nullTag;\n  }\n  return (symToStringTag && symToStringTag in Object(value))\n    ? getRawTag(value)\n    : objectToString(value);\n}\n\nmodule.exports = baseGetTag;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseGetTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * The base implementation of `_.has` without support for deep paths.\n *\n * @private\n * @param {Object} [object] The object to query.\n * @param {Array|string} key The key to check.\n * @returns {boolean} Returns `true` if `key` exists, else `false`.\n */\nfunction baseHas(object, key) {\n  return object != null && hasOwnProperty.call(object, key);\n}\n\nmodule.exports = baseHas;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseHasIn.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.hasIn` without support for deep paths.\n *\n * @private\n * @param {Object} [object] The object to query.\n * @param {Array|string} key The key to check.\n * @returns {boolean} Returns `true` if `key` exists, else `false`.\n */\nfunction baseHasIn(object, key) {\n  return object != null && key in Object(object);\n}\n\nmodule.exports = baseHasIn;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseHasIn.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIndexOf.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIndexOf.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ \"./node_modules/lodash/_baseFindIndex.js\"),\n    baseIsNaN = __webpack_require__(/*! ./_baseIsNaN */ \"./node_modules/lodash/_baseIsNaN.js\"),\n    strictIndexOf = __webpack_require__(/*! ./_strictIndexOf */ \"./node_modules/lodash/_strictIndexOf.js\");\n\n/**\n * The base implementation of `_.indexOf` without `fromIndex` bounds checks.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {*} value The value to search for.\n * @param {number} fromIndex The index to search from.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\nfunction baseIndexOf(array, value, fromIndex) {\n  return value === value\n    ? strictIndexOf(array, value, fromIndex)\n    : baseFindIndex(array, baseIsNaN, fromIndex);\n}\n\nmodule.exports = baseIndexOf;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseIndexOf.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIndexOfWith.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIndexOfWith.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This function is like `baseIndexOf` except that it accepts a comparator.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {*} value The value to search for.\n * @param {number} fromIndex The index to search from.\n * @param {Function} comparator The comparator invoked per element.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\nfunction baseIndexOfWith(array, value, fromIndex, comparator) {\n  var index = fromIndex - 1,\n      length = array.length;\n\n  while (++index < length) {\n    if (comparator(array[index], value)) {\n      return index;\n    }\n  }\n  return -1;\n}\n\nmodule.exports = baseIndexOfWith;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseIndexOfWith.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIntersection.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIntersection.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var SetCache = __webpack_require__(/*! ./_SetCache */ \"./node_modules/lodash/_SetCache.js\"),\n    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ \"./node_modules/lodash/_arrayIncludes.js\"),\n    arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ \"./node_modules/lodash/_arrayIncludesWith.js\"),\n    arrayMap = __webpack_require__(/*! ./_arrayMap */ \"./node_modules/lodash/_arrayMap.js\"),\n    baseUnary = __webpack_require__(/*! ./_baseUnary */ \"./node_modules/lodash/_baseUnary.js\"),\n    cacheHas = __webpack_require__(/*! ./_cacheHas */ \"./node_modules/lodash/_cacheHas.js\");\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeMin = Math.min;\n\n/**\n * The base implementation of methods like `_.intersection`, without support\n * for iteratee shorthands, that accepts an array of arrays to inspect.\n *\n * @private\n * @param {Array} arrays The arrays to inspect.\n * @param {Function} [iteratee] The iteratee invoked per element.\n * @param {Function} [comparator] The comparator invoked per element.\n * @returns {Array} Returns the new array of shared values.\n */\nfunction baseIntersection(arrays, iteratee, comparator) {\n  var includes = comparator ? arrayIncludesWith : arrayIncludes,\n      length = arrays[0].length,\n      othLength = arrays.length,\n      othIndex = othLength,\n      caches = Array(othLength),\n      maxLength = Infinity,\n      result = [];\n\n  while (othIndex--) {\n    var array = arrays[othIndex];\n    if (othIndex && iteratee) {\n      array = arrayMap(array, baseUnary(iteratee));\n    }\n    maxLength = nativeMin(array.length, maxLength);\n    caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))\n      ? new SetCache(othIndex && array)\n      : undefined;\n  }\n  array = arrays[0];\n\n  var index = -1,\n      seen = caches[0];\n\n  outer:\n  while (++index < length && result.length < maxLength) {\n    var value = array[index],\n        computed = iteratee ? iteratee(value) : value;\n\n    value = (comparator || value !== 0) ? value : 0;\n    if (!(seen\n          ? cacheHas(seen, computed)\n          : includes(result, computed, comparator)\n        )) {\n      othIndex = othLength;\n      while (--othIndex) {\n        var cache = caches[othIndex];\n        if (!(cache\n              ? cacheHas(cache, computed)\n              : includes(arrays[othIndex], computed, comparator))\n            ) {\n          continue outer;\n        }\n      }\n      if (seen) {\n        seen.push(computed);\n      }\n      result.push(value);\n    }\n  }\n  return result;\n}\n\nmodule.exports = baseIntersection;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseIntersection.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]';\n\n/**\n * The base implementation of `_.isArguments`.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an `arguments` object,\n */\nfunction baseIsArguments(value) {\n  return isObjectLike(value) && baseGetTag(value) == argsTag;\n}\n\nmodule.exports = baseIsArguments;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseIsArguments.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ \"./node_modules/lodash/_baseIsEqualDeep.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/**\n * The base implementation of `_.isEqual` which supports partial comparisons\n * and tracks traversed objects.\n *\n * @private\n * @param {*} value The value to compare.\n * @param {*} other The other value to compare.\n * @param {boolean} bitmask The bitmask flags.\n *  1 - Unordered comparison\n *  2 - Partial comparison\n * @param {Function} [customizer] The function to customize comparisons.\n * @param {Object} [stack] Tracks traversed `value` and `other` objects.\n * @returns {boolean} Returns `true` if the values are equivalent, else `false`.\n */\nfunction baseIsEqual(value, other, bitmask, customizer, stack) {\n  if (value === other) {\n    return true;\n  }\n  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {\n    return value !== value && other !== other;\n  }\n  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);\n}\n\nmodule.exports = baseIsEqual;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseIsEqual.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Stack = __webpack_require__(/*! ./_Stack */ \"./node_modules/lodash/_Stack.js\"),\n    equalArrays = __webpack_require__(/*! ./_equalArrays */ \"./node_modules/lodash/_equalArrays.js\"),\n    equalByTag = __webpack_require__(/*! ./_equalByTag */ \"./node_modules/lodash/_equalByTag.js\"),\n    equalObjects = __webpack_require__(/*! ./_equalObjects */ \"./node_modules/lodash/_equalObjects.js\"),\n    getTag = __webpack_require__(/*! ./_getTag */ \"./node_modules/lodash/_getTag.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isBuffer = __webpack_require__(/*! ./isBuffer */ \"./node_modules/lodash/isBuffer.js\"),\n    isTypedArray = __webpack_require__(/*! ./isTypedArray */ \"./node_modules/lodash/isTypedArray.js\");\n\n/** Used to compose bitmasks for value comparisons. */\nvar COMPARE_PARTIAL_FLAG = 1;\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]',\n    arrayTag = '[object Array]',\n    objectTag = '[object Object]';\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * A specialized version of `baseIsEqual` for arrays and objects which performs\n * deep comparisons and tracks traversed objects enabling objects with circular\n * references to be compared.\n *\n * @private\n * @param {Object} object The object to compare.\n * @param {Object} other The other object to compare.\n * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.\n * @param {Function} customizer The function to customize comparisons.\n * @param {Function} equalFunc The function to determine equivalents of values.\n * @param {Object} [stack] Tracks traversed `object` and `other` objects.\n * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.\n */\nfunction baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {\n  var objIsArr = isArray(object),\n      othIsArr = isArray(other),\n      objTag = objIsArr ? arrayTag : getTag(object),\n      othTag = othIsArr ? arrayTag : getTag(other);\n\n  objTag = objTag == argsTag ? objectTag : objTag;\n  othTag = othTag == argsTag ? objectTag : othTag;\n\n  var objIsObj = objTag == objectTag,\n      othIsObj = othTag == objectTag,\n      isSameTag = objTag == othTag;\n\n  if (isSameTag && isBuffer(object)) {\n    if (!isBuffer(other)) {\n      return false;\n    }\n    objIsArr = true;\n    objIsObj = false;\n  }\n  if (isSameTag && !objIsObj) {\n    stack || (stack = new Stack);\n    return (objIsArr || isTypedArray(object))\n      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)\n      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);\n  }\n  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {\n    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),\n        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');\n\n    if (objIsWrapped || othIsWrapped) {\n      var objUnwrapped = objIsWrapped ? object.value() : object,\n          othUnwrapped = othIsWrapped ? other.value() : other;\n\n      stack || (stack = new Stack);\n      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);\n    }\n  }\n  if (!isSameTag) {\n    return false;\n  }\n  stack || (stack = new Stack);\n  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);\n}\n\nmodule.exports = baseIsEqualDeep;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseIsEqualDeep.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsMap.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsMap.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getTag = __webpack_require__(/*! ./_getTag */ \"./node_modules/lodash/_getTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar mapTag = '[object Map]';\n\n/**\n * The base implementation of `_.isMap` without Node.js optimizations.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a map, else `false`.\n */\nfunction baseIsMap(value) {\n  return isObjectLike(value) && getTag(value) == mapTag;\n}\n\nmodule.exports = baseIsMap;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseIsMap.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsMatch.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsMatch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Stack = __webpack_require__(/*! ./_Stack */ \"./node_modules/lodash/_Stack.js\"),\n    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ \"./node_modules/lodash/_baseIsEqual.js\");\n\n/** Used to compose bitmasks for value comparisons. */\nvar COMPARE_PARTIAL_FLAG = 1,\n    COMPARE_UNORDERED_FLAG = 2;\n\n/**\n * The base implementation of `_.isMatch` without support for iteratee shorthands.\n *\n * @private\n * @param {Object} object The object to inspect.\n * @param {Object} source The object of property values to match.\n * @param {Array} matchData The property names, values, and compare flags to match.\n * @param {Function} [customizer] The function to customize comparisons.\n * @returns {boolean} Returns `true` if `object` is a match, else `false`.\n */\nfunction baseIsMatch(object, source, matchData, customizer) {\n  var index = matchData.length,\n      length = index,\n      noCustomizer = !customizer;\n\n  if (object == null) {\n    return !length;\n  }\n  object = Object(object);\n  while (index--) {\n    var data = matchData[index];\n    if ((noCustomizer && data[2])\n          ? data[1] !== object[data[0]]\n          : !(data[0] in object)\n        ) {\n      return false;\n    }\n  }\n  while (++index < length) {\n    data = matchData[index];\n    var key = data[0],\n        objValue = object[key],\n        srcValue = data[1];\n\n    if (noCustomizer && data[2]) {\n      if (objValue === undefined && !(key in object)) {\n        return false;\n      }\n    } else {\n      var stack = new Stack;\n      if (customizer) {\n        var result = customizer(objValue, srcValue, key, object, source, stack);\n      }\n      if (!(result === undefined\n            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)\n            : result\n          )) {\n        return false;\n      }\n    }\n  }\n  return true;\n}\n\nmodule.exports = baseIsMatch;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseIsMatch.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsNaN.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsNaN.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.isNaN` without support for number objects.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.\n */\nfunction baseIsNaN(value) {\n  return value !== value;\n}\n\nmodule.exports = baseIsNaN;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseIsNaN.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isFunction = __webpack_require__(/*! ./isFunction */ \"./node_modules/lodash/isFunction.js\"),\n    isMasked = __webpack_require__(/*! ./_isMasked */ \"./node_modules/lodash/_isMasked.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    toSource = __webpack_require__(/*! ./_toSource */ \"./node_modules/lodash/_toSource.js\");\n\n/**\n * Used to match `RegExp`\n * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).\n */\nvar reRegExpChar = /[\\\\^$.*+?()[\\]{}|]/g;\n\n/** Used to detect host constructors (Safari). */\nvar reIsHostCtor = /^\\[object .+?Constructor\\]$/;\n\n/** Used for built-in method references. */\nvar funcProto = Function.prototype,\n    objectProto = Object.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Used to detect if a method is native. */\nvar reIsNative = RegExp('^' +\n  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\\\$&')\n  .replace(/hasOwnProperty|(function).*?(?=\\\\\\()| for .+?(?=\\\\\\])/g, '$1.*?') + '$'\n);\n\n/**\n * The base implementation of `_.isNative` without bad shim checks.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a native function,\n *  else `false`.\n */\nfunction baseIsNative(value) {\n  if (!isObject(value) || isMasked(value)) {\n    return false;\n  }\n  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;\n  return pattern.test(toSource(value));\n}\n\nmodule.exports = baseIsNative;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseIsNative.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsSet.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsSet.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getTag = __webpack_require__(/*! ./_getTag */ \"./node_modules/lodash/_getTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar setTag = '[object Set]';\n\n/**\n * The base implementation of `_.isSet` without Node.js optimizations.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a set, else `false`.\n */\nfunction baseIsSet(value) {\n  return isObjectLike(value) && getTag(value) == setTag;\n}\n\nmodule.exports = baseIsSet;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseIsSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isLength = __webpack_require__(/*! ./isLength */ \"./node_modules/lodash/isLength.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]',\n    arrayTag = '[object Array]',\n    boolTag = '[object Boolean]',\n    dateTag = '[object Date]',\n    errorTag = '[object Error]',\n    funcTag = '[object Function]',\n    mapTag = '[object Map]',\n    numberTag = '[object Number]',\n    objectTag = '[object Object]',\n    regexpTag = '[object RegExp]',\n    setTag = '[object Set]',\n    stringTag = '[object String]',\n    weakMapTag = '[object WeakMap]';\n\nvar arrayBufferTag = '[object ArrayBuffer]',\n    dataViewTag = '[object DataView]',\n    float32Tag = '[object Float32Array]',\n    float64Tag = '[object Float64Array]',\n    int8Tag = '[object Int8Array]',\n    int16Tag = '[object Int16Array]',\n    int32Tag = '[object Int32Array]',\n    uint8Tag = '[object Uint8Array]',\n    uint8ClampedTag = '[object Uint8ClampedArray]',\n    uint16Tag = '[object Uint16Array]',\n    uint32Tag = '[object Uint32Array]';\n\n/** Used to identify `toStringTag` values of typed arrays. */\nvar typedArrayTags = {};\ntypedArrayTags[float32Tag] = typedArrayTags[float64Tag] =\ntypedArrayTags[int8Tag] = typedArrayTags[int16Tag] =\ntypedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =\ntypedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =\ntypedArrayTags[uint32Tag] = true;\ntypedArrayTags[argsTag] = typedArrayTags[arrayTag] =\ntypedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =\ntypedArrayTags[dataViewTag] = typedArrayTags[dateTag] =\ntypedArrayTags[errorTag] = typedArrayTags[funcTag] =\ntypedArrayTags[mapTag] = typedArrayTags[numberTag] =\ntypedArrayTags[objectTag] = typedArrayTags[regexpTag] =\ntypedArrayTags[setTag] = typedArrayTags[stringTag] =\ntypedArrayTags[weakMapTag] = false;\n\n/**\n * The base implementation of `_.isTypedArray` without Node.js optimizations.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.\n */\nfunction baseIsTypedArray(value) {\n  return isObjectLike(value) &&\n    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];\n}\n\nmodule.exports = baseIsTypedArray;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseIsTypedArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseMatches = __webpack_require__(/*! ./_baseMatches */ \"./node_modules/lodash/_baseMatches.js\"),\n    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ \"./node_modules/lodash/_baseMatchesProperty.js\"),\n    identity = __webpack_require__(/*! ./identity */ \"./node_modules/lodash/identity.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    property = __webpack_require__(/*! ./property */ \"./node_modules/lodash/property.js\");\n\n/**\n * The base implementation of `_.iteratee`.\n *\n * @private\n * @param {*} [value=_.identity] The value to convert to an iteratee.\n * @returns {Function} Returns the iteratee.\n */\nfunction baseIteratee(value) {\n  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.\n  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.\n  if (typeof value == 'function') {\n    return value;\n  }\n  if (value == null) {\n    return identity;\n  }\n  if (typeof value == 'object') {\n    return isArray(value)\n      ? baseMatchesProperty(value[0], value[1])\n      : baseMatches(value);\n  }\n  return property(value);\n}\n\nmodule.exports = baseIteratee;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseIteratee.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isPrototype = __webpack_require__(/*! ./_isPrototype */ \"./node_modules/lodash/_isPrototype.js\"),\n    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ \"./node_modules/lodash/_nativeKeys.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n */\nfunction baseKeys(object) {\n  if (!isPrototype(object)) {\n    return nativeKeys(object);\n  }\n  var result = [];\n  for (var key in Object(object)) {\n    if (hasOwnProperty.call(object, key) && key != 'constructor') {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\nmodule.exports = baseKeys;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    isPrototype = __webpack_require__(/*! ./_isPrototype */ \"./node_modules/lodash/_isPrototype.js\"),\n    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ \"./node_modules/lodash/_nativeKeysIn.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n */\nfunction baseKeysIn(object) {\n  if (!isObject(object)) {\n    return nativeKeysIn(object);\n  }\n  var isProto = isPrototype(object),\n      result = [];\n\n  for (var key in object) {\n    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\nmodule.exports = baseKeysIn;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseKeysIn.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseEach = __webpack_require__(/*! ./_baseEach */ \"./node_modules/lodash/_baseEach.js\"),\n    isArrayLike = __webpack_require__(/*! ./isArrayLike */ \"./node_modules/lodash/isArrayLike.js\");\n\n/**\n * The base implementation of `_.map` without support for iteratee shorthands.\n *\n * @private\n * @param {Array|Object} collection The collection to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the new mapped array.\n */\nfunction baseMap(collection, iteratee) {\n  var index = -1,\n      result = isArrayLike(collection) ? Array(collection.length) : [];\n\n  baseEach(collection, function(value, key, collection) {\n    result[++index] = iteratee(value, key, collection);\n  });\n  return result;\n}\n\nmodule.exports = baseMap;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseMap.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseMatches.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseMatches.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ \"./node_modules/lodash/_baseIsMatch.js\"),\n    getMatchData = __webpack_require__(/*! ./_getMatchData */ \"./node_modules/lodash/_getMatchData.js\"),\n    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ \"./node_modules/lodash/_matchesStrictComparable.js\");\n\n/**\n * The base implementation of `_.matches` which doesn't clone `source`.\n *\n * @private\n * @param {Object} source The object of property values to match.\n * @returns {Function} Returns the new spec function.\n */\nfunction baseMatches(source) {\n  var matchData = getMatchData(source);\n  if (matchData.length == 1 && matchData[0][2]) {\n    return matchesStrictComparable(matchData[0][0], matchData[0][1]);\n  }\n  return function(object) {\n    return object === source || baseIsMatch(object, source, matchData);\n  };\n}\n\nmodule.exports = baseMatches;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseMatches.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_baseMatchesProperty.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ \"./node_modules/lodash/_baseIsEqual.js\"),\n    get = __webpack_require__(/*! ./get */ \"./node_modules/lodash/get.js\"),\n    hasIn = __webpack_require__(/*! ./hasIn */ \"./node_modules/lodash/hasIn.js\"),\n    isKey = __webpack_require__(/*! ./_isKey */ \"./node_modules/lodash/_isKey.js\"),\n    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ \"./node_modules/lodash/_isStrictComparable.js\"),\n    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ \"./node_modules/lodash/_matchesStrictComparable.js\"),\n    toKey = __webpack_require__(/*! ./_toKey */ \"./node_modules/lodash/_toKey.js\");\n\n/** Used to compose bitmasks for value comparisons. */\nvar COMPARE_PARTIAL_FLAG = 1,\n    COMPARE_UNORDERED_FLAG = 2;\n\n/**\n * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.\n *\n * @private\n * @param {string} path The path of the property to get.\n * @param {*} srcValue The value to match.\n * @returns {Function} Returns the new spec function.\n */\nfunction baseMatchesProperty(path, srcValue) {\n  if (isKey(path) && isStrictComparable(srcValue)) {\n    return matchesStrictComparable(toKey(path), srcValue);\n  }\n  return function(object) {\n    var objValue = get(object, path);\n    return (objValue === undefined && objValue === srcValue)\n      ? hasIn(object, path)\n      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);\n  };\n}\n\nmodule.exports = baseMatchesProperty;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseMatchesProperty.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseMerge.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseMerge.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Stack = __webpack_require__(/*! ./_Stack */ \"./node_modules/lodash/_Stack.js\"),\n    assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ \"./node_modules/lodash/_assignMergeValue.js\"),\n    baseFor = __webpack_require__(/*! ./_baseFor */ \"./node_modules/lodash/_baseFor.js\"),\n    baseMergeDeep = __webpack_require__(/*! ./_baseMergeDeep */ \"./node_modules/lodash/_baseMergeDeep.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    keysIn = __webpack_require__(/*! ./keysIn */ \"./node_modules/lodash/keysIn.js\"),\n    safeGet = __webpack_require__(/*! ./_safeGet */ \"./node_modules/lodash/_safeGet.js\");\n\n/**\n * The base implementation of `_.merge` without support for multiple sources.\n *\n * @private\n * @param {Object} object The destination object.\n * @param {Object} source The source object.\n * @param {number} srcIndex The index of `source`.\n * @param {Function} [customizer] The function to customize merged values.\n * @param {Object} [stack] Tracks traversed source values and their merged\n *  counterparts.\n */\nfunction baseMerge(object, source, srcIndex, customizer, stack) {\n  if (object === source) {\n    return;\n  }\n  baseFor(source, function(srcValue, key) {\n    if (isObject(srcValue)) {\n      stack || (stack = new Stack);\n      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);\n    }\n    else {\n      var newValue = customizer\n        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)\n        : undefined;\n\n      if (newValue === undefined) {\n        newValue = srcValue;\n      }\n      assignMergeValue(object, key, newValue);\n    }\n  }, keysIn);\n}\n\nmodule.exports = baseMerge;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseMerge.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseMergeDeep.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseMergeDeep.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ \"./node_modules/lodash/_assignMergeValue.js\"),\n    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ \"./node_modules/lodash/_cloneBuffer.js\"),\n    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ \"./node_modules/lodash/_cloneTypedArray.js\"),\n    copyArray = __webpack_require__(/*! ./_copyArray */ \"./node_modules/lodash/_copyArray.js\"),\n    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ \"./node_modules/lodash/_initCloneObject.js\"),\n    isArguments = __webpack_require__(/*! ./isArguments */ \"./node_modules/lodash/isArguments.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ \"./node_modules/lodash/isArrayLikeObject.js\"),\n    isBuffer = __webpack_require__(/*! ./isBuffer */ \"./node_modules/lodash/isBuffer.js\"),\n    isFunction = __webpack_require__(/*! ./isFunction */ \"./node_modules/lodash/isFunction.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    isPlainObject = __webpack_require__(/*! ./isPlainObject */ \"./node_modules/lodash/isPlainObject.js\"),\n    isTypedArray = __webpack_require__(/*! ./isTypedArray */ \"./node_modules/lodash/isTypedArray.js\"),\n    safeGet = __webpack_require__(/*! ./_safeGet */ \"./node_modules/lodash/_safeGet.js\"),\n    toPlainObject = __webpack_require__(/*! ./toPlainObject */ \"./node_modules/lodash/toPlainObject.js\");\n\n/**\n * A specialized version of `baseMerge` for arrays and objects which performs\n * deep merges and tracks traversed objects enabling objects with circular\n * references to be merged.\n *\n * @private\n * @param {Object} object The destination object.\n * @param {Object} source The source object.\n * @param {string} key The key of the value to merge.\n * @param {number} srcIndex The index of `source`.\n * @param {Function} mergeFunc The function to merge values.\n * @param {Function} [customizer] The function to customize assigned values.\n * @param {Object} [stack] Tracks traversed source values and their merged\n *  counterparts.\n */\nfunction baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {\n  var objValue = safeGet(object, key),\n      srcValue = safeGet(source, key),\n      stacked = stack.get(srcValue);\n\n  if (stacked) {\n    assignMergeValue(object, key, stacked);\n    return;\n  }\n  var newValue = customizer\n    ? customizer(objValue, srcValue, (key + ''), object, source, stack)\n    : undefined;\n\n  var isCommon = newValue === undefined;\n\n  if (isCommon) {\n    var isArr = isArray(srcValue),\n        isBuff = !isArr && isBuffer(srcValue),\n        isTyped = !isArr && !isBuff && isTypedArray(srcValue);\n\n    newValue = srcValue;\n    if (isArr || isBuff || isTyped) {\n      if (isArray(objValue)) {\n        newValue = objValue;\n      }\n      else if (isArrayLikeObject(objValue)) {\n        newValue = copyArray(objValue);\n      }\n      else if (isBuff) {\n        isCommon = false;\n        newValue = cloneBuffer(srcValue, true);\n      }\n      else if (isTyped) {\n        isCommon = false;\n        newValue = cloneTypedArray(srcValue, true);\n      }\n      else {\n        newValue = [];\n      }\n    }\n    else if (isPlainObject(srcValue) || isArguments(srcValue)) {\n      newValue = objValue;\n      if (isArguments(objValue)) {\n        newValue = toPlainObject(objValue);\n      }\n      else if (!isObject(objValue) || isFunction(objValue)) {\n        newValue = initCloneObject(srcValue);\n      }\n    }\n    else {\n      isCommon = false;\n    }\n  }\n  if (isCommon) {\n    // Recursively merge objects and arrays (susceptible to call stack limits).\n    stack.set(srcValue, newValue);\n    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);\n    stack['delete'](srcValue);\n  }\n  assignMergeValue(object, key, newValue);\n}\n\nmodule.exports = baseMergeDeep;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseMergeDeep.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseOrderBy.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseOrderBy.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayMap = __webpack_require__(/*! ./_arrayMap */ \"./node_modules/lodash/_arrayMap.js\"),\n    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ \"./node_modules/lodash/_baseIteratee.js\"),\n    baseMap = __webpack_require__(/*! ./_baseMap */ \"./node_modules/lodash/_baseMap.js\"),\n    baseSortBy = __webpack_require__(/*! ./_baseSortBy */ \"./node_modules/lodash/_baseSortBy.js\"),\n    baseUnary = __webpack_require__(/*! ./_baseUnary */ \"./node_modules/lodash/_baseUnary.js\"),\n    compareMultiple = __webpack_require__(/*! ./_compareMultiple */ \"./node_modules/lodash/_compareMultiple.js\"),\n    identity = __webpack_require__(/*! ./identity */ \"./node_modules/lodash/identity.js\");\n\n/**\n * The base implementation of `_.orderBy` without param guards.\n *\n * @private\n * @param {Array|Object} collection The collection to iterate over.\n * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.\n * @param {string[]} orders The sort orders of `iteratees`.\n * @returns {Array} Returns the new sorted array.\n */\nfunction baseOrderBy(collection, iteratees, orders) {\n  var index = -1;\n  iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(baseIteratee));\n\n  var result = baseMap(collection, function(value, key, collection) {\n    var criteria = arrayMap(iteratees, function(iteratee) {\n      return iteratee(value);\n    });\n    return { 'criteria': criteria, 'index': ++index, 'value': value };\n  });\n\n  return baseSortBy(result, function(object, other) {\n    return compareMultiple(object, other, orders);\n  });\n}\n\nmodule.exports = baseOrderBy;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseOrderBy.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.property` without support for deep paths.\n *\n * @private\n * @param {string} key The key of the property to get.\n * @returns {Function} Returns the new accessor function.\n */\nfunction baseProperty(key) {\n  return function(object) {\n    return object == null ? undefined : object[key];\n  };\n}\n\nmodule.exports = baseProperty;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseProperty.js?");

/***/ }),

/***/ "./node_modules/lodash/_basePropertyDeep.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_basePropertyDeep.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGet = __webpack_require__(/*! ./_baseGet */ \"./node_modules/lodash/_baseGet.js\");\n\n/**\n * A specialized version of `baseProperty` which supports deep paths.\n *\n * @private\n * @param {Array|string} path The path of the property to get.\n * @returns {Function} Returns the new accessor function.\n */\nfunction basePropertyDeep(path) {\n  return function(object) {\n    return baseGet(object, path);\n  };\n}\n\nmodule.exports = basePropertyDeep;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_basePropertyDeep.js?");

/***/ }),

/***/ "./node_modules/lodash/_basePullAll.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_basePullAll.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayMap = __webpack_require__(/*! ./_arrayMap */ \"./node_modules/lodash/_arrayMap.js\"),\n    baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ \"./node_modules/lodash/_baseIndexOf.js\"),\n    baseIndexOfWith = __webpack_require__(/*! ./_baseIndexOfWith */ \"./node_modules/lodash/_baseIndexOfWith.js\"),\n    baseUnary = __webpack_require__(/*! ./_baseUnary */ \"./node_modules/lodash/_baseUnary.js\"),\n    copyArray = __webpack_require__(/*! ./_copyArray */ \"./node_modules/lodash/_copyArray.js\");\n\n/** Used for built-in method references. */\nvar arrayProto = Array.prototype;\n\n/** Built-in value references. */\nvar splice = arrayProto.splice;\n\n/**\n * The base implementation of `_.pullAllBy` without support for iteratee\n * shorthands.\n *\n * @private\n * @param {Array} array The array to modify.\n * @param {Array} values The values to remove.\n * @param {Function} [iteratee] The iteratee invoked per element.\n * @param {Function} [comparator] The comparator invoked per element.\n * @returns {Array} Returns `array`.\n */\nfunction basePullAll(array, values, iteratee, comparator) {\n  var indexOf = comparator ? baseIndexOfWith : baseIndexOf,\n      index = -1,\n      length = values.length,\n      seen = array;\n\n  if (array === values) {\n    values = copyArray(values);\n  }\n  if (iteratee) {\n    seen = arrayMap(array, baseUnary(iteratee));\n  }\n  while (++index < length) {\n    var fromIndex = 0,\n        value = values[index],\n        computed = iteratee ? iteratee(value) : value;\n\n    while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {\n      if (seen !== array) {\n        splice.call(seen, fromIndex, 1);\n      }\n      splice.call(array, fromIndex, 1);\n    }\n  }\n  return array;\n}\n\nmodule.exports = basePullAll;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_basePullAll.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseReduce.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseReduce.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.reduce` and `_.reduceRight`, without support\n * for iteratee shorthands, which iterates over `collection` using `eachFunc`.\n *\n * @private\n * @param {Array|Object} collection The collection to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @param {*} accumulator The initial value.\n * @param {boolean} initAccum Specify using the first or last element of\n *  `collection` as the initial value.\n * @param {Function} eachFunc The function to iterate over `collection`.\n * @returns {*} Returns the accumulated value.\n */\nfunction baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {\n  eachFunc(collection, function(value, index, collection) {\n    accumulator = initAccum\n      ? (initAccum = false, value)\n      : iteratee(accumulator, value, index, collection);\n  });\n  return accumulator;\n}\n\nmodule.exports = baseReduce;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseReduce.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var identity = __webpack_require__(/*! ./identity */ \"./node_modules/lodash/identity.js\"),\n    overRest = __webpack_require__(/*! ./_overRest */ \"./node_modules/lodash/_overRest.js\"),\n    setToString = __webpack_require__(/*! ./_setToString */ \"./node_modules/lodash/_setToString.js\");\n\n/**\n * The base implementation of `_.rest` which doesn't validate or coerce arguments.\n *\n * @private\n * @param {Function} func The function to apply a rest parameter to.\n * @param {number} [start=func.length-1] The start position of the rest parameter.\n * @returns {Function} Returns the new function.\n */\nfunction baseRest(func, start) {\n  return setToString(overRest(func, start, identity), func + '');\n}\n\nmodule.exports = baseRest;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseRest.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assignValue = __webpack_require__(/*! ./_assignValue */ \"./node_modules/lodash/_assignValue.js\"),\n    castPath = __webpack_require__(/*! ./_castPath */ \"./node_modules/lodash/_castPath.js\"),\n    isIndex = __webpack_require__(/*! ./_isIndex */ \"./node_modules/lodash/_isIndex.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    toKey = __webpack_require__(/*! ./_toKey */ \"./node_modules/lodash/_toKey.js\");\n\n/**\n * The base implementation of `_.set`.\n *\n * @private\n * @param {Object} object The object to modify.\n * @param {Array|string} path The path of the property to set.\n * @param {*} value The value to set.\n * @param {Function} [customizer] The function to customize path creation.\n * @returns {Object} Returns `object`.\n */\nfunction baseSet(object, path, value, customizer) {\n  if (!isObject(object)) {\n    return object;\n  }\n  path = castPath(path, object);\n\n  var index = -1,\n      length = path.length,\n      lastIndex = length - 1,\n      nested = object;\n\n  while (nested != null && ++index < length) {\n    var key = toKey(path[index]),\n        newValue = value;\n\n    if (index != lastIndex) {\n      var objValue = nested[key];\n      newValue = customizer ? customizer(objValue, key, nested) : undefined;\n      if (newValue === undefined) {\n        newValue = isObject(objValue)\n          ? objValue\n          : (isIndex(path[index + 1]) ? [] : {});\n      }\n    }\n    assignValue(nested, key, newValue);\n    nested = nested[key];\n  }\n  return object;\n}\n\nmodule.exports = baseSet;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var constant = __webpack_require__(/*! ./constant */ \"./node_modules/lodash/constant.js\"),\n    defineProperty = __webpack_require__(/*! ./_defineProperty */ \"./node_modules/lodash/_defineProperty.js\"),\n    identity = __webpack_require__(/*! ./identity */ \"./node_modules/lodash/identity.js\");\n\n/**\n * The base implementation of `setToString` without support for hot loop shorting.\n *\n * @private\n * @param {Function} func The function to modify.\n * @param {Function} string The `toString` result.\n * @returns {Function} Returns `func`.\n */\nvar baseSetToString = !defineProperty ? identity : function(func, string) {\n  return defineProperty(func, 'toString', {\n    'configurable': true,\n    'enumerable': false,\n    'value': constant(string),\n    'writable': true\n  });\n};\n\nmodule.exports = baseSetToString;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseSetToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.slice` without an iteratee call guard.\n *\n * @private\n * @param {Array} array The array to slice.\n * @param {number} [start=0] The start position.\n * @param {number} [end=array.length] The end position.\n * @returns {Array} Returns the slice of `array`.\n */\nfunction baseSlice(array, start, end) {\n  var index = -1,\n      length = array.length;\n\n  if (start < 0) {\n    start = -start > length ? 0 : (length + start);\n  }\n  end = end > length ? length : end;\n  if (end < 0) {\n    end += length;\n  }\n  length = start > end ? 0 : ((end - start) >>> 0);\n  start >>>= 0;\n\n  var result = Array(length);\n  while (++index < length) {\n    result[index] = array[index + start];\n  }\n  return result;\n}\n\nmodule.exports = baseSlice;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseSlice.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseSortBy.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseSortBy.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.sortBy` which uses `comparer` to define the\n * sort order of `array` and replaces criteria objects with their corresponding\n * values.\n *\n * @private\n * @param {Array} array The array to sort.\n * @param {Function} comparer The function to define sort order.\n * @returns {Array} Returns `array`.\n */\nfunction baseSortBy(array, comparer) {\n  var length = array.length;\n\n  array.sort(comparer);\n  while (length--) {\n    array[length] = array[length].value;\n  }\n  return array;\n}\n\nmodule.exports = baseSortBy;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseSortBy.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseSum.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseSum.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.sum` and `_.sumBy` without support for\n * iteratee shorthands.\n *\n * @private\n * @param {Array} array The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {number} Returns the sum.\n */\nfunction baseSum(array, iteratee) {\n  var result,\n      index = -1,\n      length = array.length;\n\n  while (++index < length) {\n    var current = iteratee(array[index]);\n    if (current !== undefined) {\n      result = result === undefined ? current : (result + current);\n    }\n  }\n  return result;\n}\n\nmodule.exports = baseSum;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseSum.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.times` without support for iteratee shorthands\n * or max array length checks.\n *\n * @private\n * @param {number} n The number of times to invoke `iteratee`.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the array of results.\n */\nfunction baseTimes(n, iteratee) {\n  var index = -1,\n      result = Array(n);\n\n  while (++index < n) {\n    result[index] = iteratee(index);\n  }\n  return result;\n}\n\nmodule.exports = baseTimes;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseTimes.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseToNumber.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToNumber.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar NAN = 0 / 0;\n\n/**\n * The base implementation of `_.toNumber` which doesn't ensure correct\n * conversions of binary, hexadecimal, or octal string values.\n *\n * @private\n * @param {*} value The value to process.\n * @returns {number} Returns the number.\n */\nfunction baseToNumber(value) {\n  if (typeof value == 'number') {\n    return value;\n  }\n  if (isSymbol(value)) {\n    return NAN;\n  }\n  return +value;\n}\n\nmodule.exports = baseToNumber;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseToNumber.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    arrayMap = __webpack_require__(/*! ./_arrayMap */ \"./node_modules/lodash/_arrayMap.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar INFINITY = 1 / 0;\n\n/** Used to convert symbols to primitives and strings. */\nvar symbolProto = Symbol ? Symbol.prototype : undefined,\n    symbolToString = symbolProto ? symbolProto.toString : undefined;\n\n/**\n * The base implementation of `_.toString` which doesn't convert nullish\n * values to empty strings.\n *\n * @private\n * @param {*} value The value to process.\n * @returns {string} Returns the string.\n */\nfunction baseToString(value) {\n  // Exit early for strings to avoid a performance hit in some environments.\n  if (typeof value == 'string') {\n    return value;\n  }\n  if (isArray(value)) {\n    // Recursively convert values (susceptible to call stack limits).\n    return arrayMap(value, baseToString) + '';\n  }\n  if (isSymbol(value)) {\n    return symbolToString ? symbolToString.call(value) : '';\n  }\n  var result = (value + '');\n  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;\n}\n\nmodule.exports = baseToString;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.unary` without support for storing metadata.\n *\n * @private\n * @param {Function} func The function to cap arguments for.\n * @returns {Function} Returns the new capped function.\n */\nfunction baseUnary(func) {\n  return function(value) {\n    return func(value);\n  };\n}\n\nmodule.exports = baseUnary;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseUnary.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseZipObject.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseZipObject.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This base implementation of `_.zipObject` which assigns values using `assignFunc`.\n *\n * @private\n * @param {Array} props The property identifiers.\n * @param {Array} values The property values.\n * @param {Function} assignFunc The function to assign values.\n * @returns {Object} Returns the new object.\n */\nfunction baseZipObject(props, values, assignFunc) {\n  var index = -1,\n      length = props.length,\n      valsLength = values.length,\n      result = {};\n\n  while (++index < length) {\n    var value = index < valsLength ? values[index] : undefined;\n    assignFunc(result, props[index], value);\n  }\n  return result;\n}\n\nmodule.exports = baseZipObject;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseZipObject.js?");

/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if a `cache` value for `key` exists.\n *\n * @private\n * @param {Object} cache The cache to query.\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction cacheHas(cache, key) {\n  return cache.has(key);\n}\n\nmodule.exports = cacheHas;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_cacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_castArrayLikeObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_castArrayLikeObject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ \"./node_modules/lodash/isArrayLikeObject.js\");\n\n/**\n * Casts `value` to an empty array if it's not an array like object.\n *\n * @private\n * @param {*} value The value to inspect.\n * @returns {Array|Object} Returns the cast array-like object.\n */\nfunction castArrayLikeObject(value) {\n  return isArrayLikeObject(value) ? value : [];\n}\n\nmodule.exports = castArrayLikeObject;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_castArrayLikeObject.js?");

/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isKey = __webpack_require__(/*! ./_isKey */ \"./node_modules/lodash/_isKey.js\"),\n    stringToPath = __webpack_require__(/*! ./_stringToPath */ \"./node_modules/lodash/_stringToPath.js\"),\n    toString = __webpack_require__(/*! ./toString */ \"./node_modules/lodash/toString.js\");\n\n/**\n * Casts `value` to a path array if it's not one.\n *\n * @private\n * @param {*} value The value to inspect.\n * @param {Object} [object] The object to query keys on.\n * @returns {Array} Returns the cast property path array.\n */\nfunction castPath(value, object) {\n  if (isArray(value)) {\n    return value;\n  }\n  return isKey(value, object) ? [value] : stringToPath(toString(value));\n}\n\nmodule.exports = castPath;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_castPath.js?");

/***/ }),

/***/ "./node_modules/lodash/_castSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_castSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseSlice = __webpack_require__(/*! ./_baseSlice */ \"./node_modules/lodash/_baseSlice.js\");\n\n/**\n * Casts `array` to a slice if it's needed.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {number} start The start position.\n * @param {number} [end=array.length] The end position.\n * @returns {Array} Returns the cast slice.\n */\nfunction castSlice(array, start, end) {\n  var length = array.length;\n  end = end === undefined ? length : end;\n  return (!start && end >= length) ? array : baseSlice(array, start, end);\n}\n\nmodule.exports = castSlice;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_castSlice.js?");

/***/ }),

/***/ "./node_modules/lodash/_charsEndIndex.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_charsEndIndex.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ \"./node_modules/lodash/_baseIndexOf.js\");\n\n/**\n * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol\n * that is not found in the character symbols.\n *\n * @private\n * @param {Array} strSymbols The string symbols to inspect.\n * @param {Array} chrSymbols The character symbols to find.\n * @returns {number} Returns the index of the last unmatched string symbol.\n */\nfunction charsEndIndex(strSymbols, chrSymbols) {\n  var index = strSymbols.length;\n\n  while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}\n  return index;\n}\n\nmodule.exports = charsEndIndex;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_charsEndIndex.js?");

/***/ }),

/***/ "./node_modules/lodash/_charsStartIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_charsStartIndex.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ \"./node_modules/lodash/_baseIndexOf.js\");\n\n/**\n * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol\n * that is not found in the character symbols.\n *\n * @private\n * @param {Array} strSymbols The string symbols to inspect.\n * @param {Array} chrSymbols The character symbols to find.\n * @returns {number} Returns the index of the first unmatched string symbol.\n */\nfunction charsStartIndex(strSymbols, chrSymbols) {\n  var index = -1,\n      length = strSymbols.length;\n\n  while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}\n  return index;\n}\n\nmodule.exports = charsStartIndex;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_charsStartIndex.js?");

/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ \"./node_modules/lodash/_Uint8Array.js\");\n\n/**\n * Creates a clone of `arrayBuffer`.\n *\n * @private\n * @param {ArrayBuffer} arrayBuffer The array buffer to clone.\n * @returns {ArrayBuffer} Returns the cloned array buffer.\n */\nfunction cloneArrayBuffer(arrayBuffer) {\n  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);\n  new Uint8Array(result).set(new Uint8Array(arrayBuffer));\n  return result;\n}\n\nmodule.exports = cloneArrayBuffer;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_cloneArrayBuffer.js?");

/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Detect free variable `exports`. */\nvar freeExports =  true && exports && !exports.nodeType && exports;\n\n/** Detect free variable `module`. */\nvar freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;\n\n/** Detect the popular CommonJS extension `module.exports`. */\nvar moduleExports = freeModule && freeModule.exports === freeExports;\n\n/** Built-in value references. */\nvar Buffer = moduleExports ? root.Buffer : undefined,\n    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;\n\n/**\n * Creates a clone of  `buffer`.\n *\n * @private\n * @param {Buffer} buffer The buffer to clone.\n * @param {boolean} [isDeep] Specify a deep clone.\n * @returns {Buffer} Returns the cloned buffer.\n */\nfunction cloneBuffer(buffer, isDeep) {\n  if (isDeep) {\n    return buffer.slice();\n  }\n  var length = buffer.length,\n      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);\n\n  buffer.copy(result);\n  return result;\n}\n\nmodule.exports = cloneBuffer;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_cloneBuffer.js?");

/***/ }),

/***/ "./node_modules/lodash/_cloneDataView.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_cloneDataView.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ \"./node_modules/lodash/_cloneArrayBuffer.js\");\n\n/**\n * Creates a clone of `dataView`.\n *\n * @private\n * @param {Object} dataView The data view to clone.\n * @param {boolean} [isDeep] Specify a deep clone.\n * @returns {Object} Returns the cloned data view.\n */\nfunction cloneDataView(dataView, isDeep) {\n  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;\n  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);\n}\n\nmodule.exports = cloneDataView;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_cloneDataView.js?");

/***/ }),

/***/ "./node_modules/lodash/_cloneRegExp.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneRegExp.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used to match `RegExp` flags from their coerced string values. */\nvar reFlags = /\\w*$/;\n\n/**\n * Creates a clone of `regexp`.\n *\n * @private\n * @param {Object} regexp The regexp to clone.\n * @returns {Object} Returns the cloned regexp.\n */\nfunction cloneRegExp(regexp) {\n  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));\n  result.lastIndex = regexp.lastIndex;\n  return result;\n}\n\nmodule.exports = cloneRegExp;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_cloneRegExp.js?");

/***/ }),

/***/ "./node_modules/lodash/_cloneSymbol.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneSymbol.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\");\n\n/** Used to convert symbols to primitives and strings. */\nvar symbolProto = Symbol ? Symbol.prototype : undefined,\n    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;\n\n/**\n * Creates a clone of the `symbol` object.\n *\n * @private\n * @param {Object} symbol The symbol object to clone.\n * @returns {Object} Returns the cloned symbol object.\n */\nfunction cloneSymbol(symbol) {\n  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};\n}\n\nmodule.exports = cloneSymbol;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_cloneSymbol.js?");

/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ \"./node_modules/lodash/_cloneArrayBuffer.js\");\n\n/**\n * Creates a clone of `typedArray`.\n *\n * @private\n * @param {Object} typedArray The typed array to clone.\n * @param {boolean} [isDeep] Specify a deep clone.\n * @returns {Object} Returns the cloned typed array.\n */\nfunction cloneTypedArray(typedArray, isDeep) {\n  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;\n  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);\n}\n\nmodule.exports = cloneTypedArray;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_cloneTypedArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_compareAscending.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_compareAscending.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/**\n * Compares values to sort them in ascending order.\n *\n * @private\n * @param {*} value The value to compare.\n * @param {*} other The other value to compare.\n * @returns {number} Returns the sort order indicator for `value`.\n */\nfunction compareAscending(value, other) {\n  if (value !== other) {\n    var valIsDefined = value !== undefined,\n        valIsNull = value === null,\n        valIsReflexive = value === value,\n        valIsSymbol = isSymbol(value);\n\n    var othIsDefined = other !== undefined,\n        othIsNull = other === null,\n        othIsReflexive = other === other,\n        othIsSymbol = isSymbol(other);\n\n    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||\n        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||\n        (valIsNull && othIsDefined && othIsReflexive) ||\n        (!valIsDefined && othIsReflexive) ||\n        !valIsReflexive) {\n      return 1;\n    }\n    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||\n        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||\n        (othIsNull && valIsDefined && valIsReflexive) ||\n        (!othIsDefined && valIsReflexive) ||\n        !othIsReflexive) {\n      return -1;\n    }\n  }\n  return 0;\n}\n\nmodule.exports = compareAscending;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_compareAscending.js?");

/***/ }),

/***/ "./node_modules/lodash/_compareMultiple.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_compareMultiple.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var compareAscending = __webpack_require__(/*! ./_compareAscending */ \"./node_modules/lodash/_compareAscending.js\");\n\n/**\n * Used by `_.orderBy` to compare multiple properties of a value to another\n * and stable sort them.\n *\n * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,\n * specify an order of \"desc\" for descending or \"asc\" for ascending sort order\n * of corresponding values.\n *\n * @private\n * @param {Object} object The object to compare.\n * @param {Object} other The other object to compare.\n * @param {boolean[]|string[]} orders The order to sort by for each property.\n * @returns {number} Returns the sort order indicator for `object`.\n */\nfunction compareMultiple(object, other, orders) {\n  var index = -1,\n      objCriteria = object.criteria,\n      othCriteria = other.criteria,\n      length = objCriteria.length,\n      ordersLength = orders.length;\n\n  while (++index < length) {\n    var result = compareAscending(objCriteria[index], othCriteria[index]);\n    if (result) {\n      if (index >= ordersLength) {\n        return result;\n      }\n      var order = orders[index];\n      return result * (order == 'desc' ? -1 : 1);\n    }\n  }\n  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications\n  // that causes it, under certain circumstances, to provide the same value for\n  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247\n  // for more details.\n  //\n  // This also ensures a stable sort in V8 and other engines.\n  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.\n  return object.index - other.index;\n}\n\nmodule.exports = compareMultiple;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_compareMultiple.js?");

/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Copies the values of `source` to `array`.\n *\n * @private\n * @param {Array} source The array to copy values from.\n * @param {Array} [array=[]] The array to copy values to.\n * @returns {Array} Returns `array`.\n */\nfunction copyArray(source, array) {\n  var index = -1,\n      length = source.length;\n\n  array || (array = Array(length));\n  while (++index < length) {\n    array[index] = source[index];\n  }\n  return array;\n}\n\nmodule.exports = copyArray;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_copyArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assignValue = __webpack_require__(/*! ./_assignValue */ \"./node_modules/lodash/_assignValue.js\"),\n    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ \"./node_modules/lodash/_baseAssignValue.js\");\n\n/**\n * Copies properties of `source` to `object`.\n *\n * @private\n * @param {Object} source The object to copy properties from.\n * @param {Array} props The property identifiers to copy.\n * @param {Object} [object={}] The object to copy properties to.\n * @param {Function} [customizer] The function to customize copied values.\n * @returns {Object} Returns `object`.\n */\nfunction copyObject(source, props, object, customizer) {\n  var isNew = !object;\n  object || (object = {});\n\n  var index = -1,\n      length = props.length;\n\n  while (++index < length) {\n    var key = props[index];\n\n    var newValue = customizer\n      ? customizer(object[key], source[key], key, object, source)\n      : undefined;\n\n    if (newValue === undefined) {\n      newValue = source[key];\n    }\n    if (isNew) {\n      baseAssignValue(object, key, newValue);\n    } else {\n      assignValue(object, key, newValue);\n    }\n  }\n  return object;\n}\n\nmodule.exports = copyObject;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_copyObject.js?");

/***/ }),

/***/ "./node_modules/lodash/_copySymbols.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_copySymbols.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var copyObject = __webpack_require__(/*! ./_copyObject */ \"./node_modules/lodash/_copyObject.js\"),\n    getSymbols = __webpack_require__(/*! ./_getSymbols */ \"./node_modules/lodash/_getSymbols.js\");\n\n/**\n * Copies own symbols of `source` to `object`.\n *\n * @private\n * @param {Object} source The object to copy symbols from.\n * @param {Object} [object={}] The object to copy symbols to.\n * @returns {Object} Returns `object`.\n */\nfunction copySymbols(source, object) {\n  return copyObject(source, getSymbols(source), object);\n}\n\nmodule.exports = copySymbols;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_copySymbols.js?");

/***/ }),

/***/ "./node_modules/lodash/_copySymbolsIn.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_copySymbolsIn.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var copyObject = __webpack_require__(/*! ./_copyObject */ \"./node_modules/lodash/_copyObject.js\"),\n    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ \"./node_modules/lodash/_getSymbolsIn.js\");\n\n/**\n * Copies own and inherited symbols of `source` to `object`.\n *\n * @private\n * @param {Object} source The object to copy symbols from.\n * @param {Object} [object={}] The object to copy symbols to.\n * @returns {Object} Returns `object`.\n */\nfunction copySymbolsIn(source, object) {\n  return copyObject(source, getSymbolsIn(source), object);\n}\n\nmodule.exports = copySymbolsIn;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_copySymbolsIn.js?");

/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Used to detect overreaching core-js shims. */\nvar coreJsData = root['__core-js_shared__'];\n\nmodule.exports = coreJsData;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_coreJsData.js?");

/***/ }),

/***/ "./node_modules/lodash/_createAssigner.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createAssigner.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseRest = __webpack_require__(/*! ./_baseRest */ \"./node_modules/lodash/_baseRest.js\"),\n    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ \"./node_modules/lodash/_isIterateeCall.js\");\n\n/**\n * Creates a function like `_.assign`.\n *\n * @private\n * @param {Function} assigner The function to assign values.\n * @returns {Function} Returns the new assigner function.\n */\nfunction createAssigner(assigner) {\n  return baseRest(function(object, sources) {\n    var index = -1,\n        length = sources.length,\n        customizer = length > 1 ? sources[length - 1] : undefined,\n        guard = length > 2 ? sources[2] : undefined;\n\n    customizer = (assigner.length > 3 && typeof customizer == 'function')\n      ? (length--, customizer)\n      : undefined;\n\n    if (guard && isIterateeCall(sources[0], sources[1], guard)) {\n      customizer = length < 3 ? undefined : customizer;\n      length = 1;\n    }\n    object = Object(object);\n    while (++index < length) {\n      var source = sources[index];\n      if (source) {\n        assigner(object, source, index, customizer);\n      }\n    }\n    return object;\n  });\n}\n\nmodule.exports = createAssigner;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_createAssigner.js?");

/***/ }),

/***/ "./node_modules/lodash/_createBaseEach.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createBaseEach.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isArrayLike = __webpack_require__(/*! ./isArrayLike */ \"./node_modules/lodash/isArrayLike.js\");\n\n/**\n * Creates a `baseEach` or `baseEachRight` function.\n *\n * @private\n * @param {Function} eachFunc The function to iterate over a collection.\n * @param {boolean} [fromRight] Specify iterating from right to left.\n * @returns {Function} Returns the new base function.\n */\nfunction createBaseEach(eachFunc, fromRight) {\n  return function(collection, iteratee) {\n    if (collection == null) {\n      return collection;\n    }\n    if (!isArrayLike(collection)) {\n      return eachFunc(collection, iteratee);\n    }\n    var length = collection.length,\n        index = fromRight ? length : -1,\n        iterable = Object(collection);\n\n    while ((fromRight ? index-- : ++index < length)) {\n      if (iteratee(iterable[index], index, iterable) === false) {\n        break;\n      }\n    }\n    return collection;\n  };\n}\n\nmodule.exports = createBaseEach;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_createBaseEach.js?");

/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Creates a base function for methods like `_.forIn` and `_.forOwn`.\n *\n * @private\n * @param {boolean} [fromRight] Specify iterating from right to left.\n * @returns {Function} Returns the new base function.\n */\nfunction createBaseFor(fromRight) {\n  return function(object, iteratee, keysFunc) {\n    var index = -1,\n        iterable = Object(object),\n        props = keysFunc(object),\n        length = props.length;\n\n    while (length--) {\n      var key = props[fromRight ? length : ++index];\n      if (iteratee(iterable[key], key, iterable) === false) {\n        break;\n      }\n    }\n    return object;\n  };\n}\n\nmodule.exports = createBaseFor;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_createBaseFor.js?");

/***/ }),

/***/ "./node_modules/lodash/_createMathOperation.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_createMathOperation.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseToNumber = __webpack_require__(/*! ./_baseToNumber */ \"./node_modules/lodash/_baseToNumber.js\"),\n    baseToString = __webpack_require__(/*! ./_baseToString */ \"./node_modules/lodash/_baseToString.js\");\n\n/**\n * Creates a function that performs a mathematical operation on two values.\n *\n * @private\n * @param {Function} operator The function to perform the operation.\n * @param {number} [defaultValue] The value used for `undefined` arguments.\n * @returns {Function} Returns the new mathematical operation function.\n */\nfunction createMathOperation(operator, defaultValue) {\n  return function(value, other) {\n    var result;\n    if (value === undefined && other === undefined) {\n      return defaultValue;\n    }\n    if (value !== undefined) {\n      result = value;\n    }\n    if (other !== undefined) {\n      if (result === undefined) {\n        return other;\n      }\n      if (typeof value == 'string' || typeof other == 'string') {\n        value = baseToString(value);\n        other = baseToString(other);\n      } else {\n        value = baseToNumber(value);\n        other = baseToNumber(other);\n      }\n      result = operator(value, other);\n    }\n    return result;\n  };\n}\n\nmodule.exports = createMathOperation;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_createMathOperation.js?");

/***/ }),

/***/ "./node_modules/lodash/_customDefaultsMerge.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_customDefaultsMerge.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseMerge = __webpack_require__(/*! ./_baseMerge */ \"./node_modules/lodash/_baseMerge.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n\n/**\n * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source\n * objects into destination objects that are passed thru.\n *\n * @private\n * @param {*} objValue The destination value.\n * @param {*} srcValue The source value.\n * @param {string} key The key of the property to merge.\n * @param {Object} object The parent object of `objValue`.\n * @param {Object} source The parent object of `srcValue`.\n * @param {Object} [stack] Tracks traversed source values and their merged\n *  counterparts.\n * @returns {*} Returns the value to assign.\n */\nfunction customDefaultsMerge(objValue, srcValue, key, object, source, stack) {\n  if (isObject(objValue) && isObject(srcValue)) {\n    // Recursively merge objects and arrays (susceptible to call stack limits).\n    stack.set(srcValue, objValue);\n    baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);\n    stack['delete'](srcValue);\n  }\n  return objValue;\n}\n\nmodule.exports = customDefaultsMerge;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_customDefaultsMerge.js?");

/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\");\n\nvar defineProperty = (function() {\n  try {\n    var func = getNative(Object, 'defineProperty');\n    func({}, '', {});\n    return func;\n  } catch (e) {}\n}());\n\nmodule.exports = defineProperty;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_defineProperty.js?");

/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var SetCache = __webpack_require__(/*! ./_SetCache */ \"./node_modules/lodash/_SetCache.js\"),\n    arraySome = __webpack_require__(/*! ./_arraySome */ \"./node_modules/lodash/_arraySome.js\"),\n    cacheHas = __webpack_require__(/*! ./_cacheHas */ \"./node_modules/lodash/_cacheHas.js\");\n\n/** Used to compose bitmasks for value comparisons. */\nvar COMPARE_PARTIAL_FLAG = 1,\n    COMPARE_UNORDERED_FLAG = 2;\n\n/**\n * A specialized version of `baseIsEqualDeep` for arrays with support for\n * partial deep comparisons.\n *\n * @private\n * @param {Array} array The array to compare.\n * @param {Array} other The other array to compare.\n * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.\n * @param {Function} customizer The function to customize comparisons.\n * @param {Function} equalFunc The function to determine equivalents of values.\n * @param {Object} stack Tracks traversed `array` and `other` objects.\n * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.\n */\nfunction equalArrays(array, other, bitmask, customizer, equalFunc, stack) {\n  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,\n      arrLength = array.length,\n      othLength = other.length;\n\n  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {\n    return false;\n  }\n  // Assume cyclic values are equal.\n  var stacked = stack.get(array);\n  if (stacked && stack.get(other)) {\n    return stacked == other;\n  }\n  var index = -1,\n      result = true,\n      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;\n\n  stack.set(array, other);\n  stack.set(other, array);\n\n  // Ignore non-index properties.\n  while (++index < arrLength) {\n    var arrValue = array[index],\n        othValue = other[index];\n\n    if (customizer) {\n      var compared = isPartial\n        ? customizer(othValue, arrValue, index, other, array, stack)\n        : customizer(arrValue, othValue, index, array, other, stack);\n    }\n    if (compared !== undefined) {\n      if (compared) {\n        continue;\n      }\n      result = false;\n      break;\n    }\n    // Recursively compare arrays (susceptible to call stack limits).\n    if (seen) {\n      if (!arraySome(other, function(othValue, othIndex) {\n            if (!cacheHas(seen, othIndex) &&\n                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {\n              return seen.push(othIndex);\n            }\n          })) {\n        result = false;\n        break;\n      }\n    } else if (!(\n          arrValue === othValue ||\n            equalFunc(arrValue, othValue, bitmask, customizer, stack)\n        )) {\n      result = false;\n      break;\n    }\n  }\n  stack['delete'](array);\n  stack['delete'](other);\n  return result;\n}\n\nmodule.exports = equalArrays;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_equalArrays.js?");

/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ \"./node_modules/lodash/_Uint8Array.js\"),\n    eq = __webpack_require__(/*! ./eq */ \"./node_modules/lodash/eq.js\"),\n    equalArrays = __webpack_require__(/*! ./_equalArrays */ \"./node_modules/lodash/_equalArrays.js\"),\n    mapToArray = __webpack_require__(/*! ./_mapToArray */ \"./node_modules/lodash/_mapToArray.js\"),\n    setToArray = __webpack_require__(/*! ./_setToArray */ \"./node_modules/lodash/_setToArray.js\");\n\n/** Used to compose bitmasks for value comparisons. */\nvar COMPARE_PARTIAL_FLAG = 1,\n    COMPARE_UNORDERED_FLAG = 2;\n\n/** `Object#toString` result references. */\nvar boolTag = '[object Boolean]',\n    dateTag = '[object Date]',\n    errorTag = '[object Error]',\n    mapTag = '[object Map]',\n    numberTag = '[object Number]',\n    regexpTag = '[object RegExp]',\n    setTag = '[object Set]',\n    stringTag = '[object String]',\n    symbolTag = '[object Symbol]';\n\nvar arrayBufferTag = '[object ArrayBuffer]',\n    dataViewTag = '[object DataView]';\n\n/** Used to convert symbols to primitives and strings. */\nvar symbolProto = Symbol ? Symbol.prototype : undefined,\n    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;\n\n/**\n * A specialized version of `baseIsEqualDeep` for comparing objects of\n * the same `toStringTag`.\n *\n * **Note:** This function only supports comparing values with tags of\n * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.\n *\n * @private\n * @param {Object} object The object to compare.\n * @param {Object} other The other object to compare.\n * @param {string} tag The `toStringTag` of the objects to compare.\n * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.\n * @param {Function} customizer The function to customize comparisons.\n * @param {Function} equalFunc The function to determine equivalents of values.\n * @param {Object} stack Tracks traversed `object` and `other` objects.\n * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.\n */\nfunction equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {\n  switch (tag) {\n    case dataViewTag:\n      if ((object.byteLength != other.byteLength) ||\n          (object.byteOffset != other.byteOffset)) {\n        return false;\n      }\n      object = object.buffer;\n      other = other.buffer;\n\n    case arrayBufferTag:\n      if ((object.byteLength != other.byteLength) ||\n          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {\n        return false;\n      }\n      return true;\n\n    case boolTag:\n    case dateTag:\n    case numberTag:\n      // Coerce booleans to `1` or `0` and dates to milliseconds.\n      // Invalid dates are coerced to `NaN`.\n      return eq(+object, +other);\n\n    case errorTag:\n      return object.name == other.name && object.message == other.message;\n\n    case regexpTag:\n    case stringTag:\n      // Coerce regexes to strings and treat strings, primitives and objects,\n      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring\n      // for more details.\n      return object == (other + '');\n\n    case mapTag:\n      var convert = mapToArray;\n\n    case setTag:\n      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;\n      convert || (convert = setToArray);\n\n      if (object.size != other.size && !isPartial) {\n        return false;\n      }\n      // Assume cyclic values are equal.\n      var stacked = stack.get(object);\n      if (stacked) {\n        return stacked == other;\n      }\n      bitmask |= COMPARE_UNORDERED_FLAG;\n\n      // Recursively compare objects (susceptible to call stack limits).\n      stack.set(object, other);\n      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);\n      stack['delete'](object);\n      return result;\n\n    case symbolTag:\n      if (symbolValueOf) {\n        return symbolValueOf.call(object) == symbolValueOf.call(other);\n      }\n  }\n  return false;\n}\n\nmodule.exports = equalByTag;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_equalByTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ \"./node_modules/lodash/_getAllKeys.js\");\n\n/** Used to compose bitmasks for value comparisons. */\nvar COMPARE_PARTIAL_FLAG = 1;\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * A specialized version of `baseIsEqualDeep` for objects with support for\n * partial deep comparisons.\n *\n * @private\n * @param {Object} object The object to compare.\n * @param {Object} other The other object to compare.\n * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.\n * @param {Function} customizer The function to customize comparisons.\n * @param {Function} equalFunc The function to determine equivalents of values.\n * @param {Object} stack Tracks traversed `object` and `other` objects.\n * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.\n */\nfunction equalObjects(object, other, bitmask, customizer, equalFunc, stack) {\n  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,\n      objProps = getAllKeys(object),\n      objLength = objProps.length,\n      othProps = getAllKeys(other),\n      othLength = othProps.length;\n\n  if (objLength != othLength && !isPartial) {\n    return false;\n  }\n  var index = objLength;\n  while (index--) {\n    var key = objProps[index];\n    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {\n      return false;\n    }\n  }\n  // Assume cyclic values are equal.\n  var stacked = stack.get(object);\n  if (stacked && stack.get(other)) {\n    return stacked == other;\n  }\n  var result = true;\n  stack.set(object, other);\n  stack.set(other, object);\n\n  var skipCtor = isPartial;\n  while (++index < objLength) {\n    key = objProps[index];\n    var objValue = object[key],\n        othValue = other[key];\n\n    if (customizer) {\n      var compared = isPartial\n        ? customizer(othValue, objValue, key, other, object, stack)\n        : customizer(objValue, othValue, key, object, other, stack);\n    }\n    // Recursively compare objects (susceptible to call stack limits).\n    if (!(compared === undefined\n          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))\n          : compared\n        )) {\n      result = false;\n      break;\n    }\n    skipCtor || (skipCtor = key == 'constructor');\n  }\n  if (result && !skipCtor) {\n    var objCtor = object.constructor,\n        othCtor = other.constructor;\n\n    // Non `Object` object instances with different constructors are not equal.\n    if (objCtor != othCtor &&\n        ('constructor' in object && 'constructor' in other) &&\n        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&\n          typeof othCtor == 'function' && othCtor instanceof othCtor)) {\n      result = false;\n    }\n  }\n  stack['delete'](object);\n  stack['delete'](other);\n  return result;\n}\n\nmodule.exports = equalObjects;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_equalObjects.js?");

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof global == 'object' && global && global.Object === Object && global;\n\nmodule.exports = freeGlobal;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_freeGlobal.js?");

/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ \"./node_modules/lodash/_baseGetAllKeys.js\"),\n    getSymbols = __webpack_require__(/*! ./_getSymbols */ \"./node_modules/lodash/_getSymbols.js\"),\n    keys = __webpack_require__(/*! ./keys */ \"./node_modules/lodash/keys.js\");\n\n/**\n * Creates an array of own enumerable property names and symbols of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names and symbols.\n */\nfunction getAllKeys(object) {\n  return baseGetAllKeys(object, keys, getSymbols);\n}\n\nmodule.exports = getAllKeys;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_getAllKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_getAllKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getAllKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ \"./node_modules/lodash/_baseGetAllKeys.js\"),\n    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ \"./node_modules/lodash/_getSymbolsIn.js\"),\n    keysIn = __webpack_require__(/*! ./keysIn */ \"./node_modules/lodash/keysIn.js\");\n\n/**\n * Creates an array of own and inherited enumerable property names and\n * symbols of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names and symbols.\n */\nfunction getAllKeysIn(object) {\n  return baseGetAllKeys(object, keysIn, getSymbolsIn);\n}\n\nmodule.exports = getAllKeysIn;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_getAllKeysIn.js?");

/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isKeyable = __webpack_require__(/*! ./_isKeyable */ \"./node_modules/lodash/_isKeyable.js\");\n\n/**\n * Gets the data for `map`.\n *\n * @private\n * @param {Object} map The map to query.\n * @param {string} key The reference key.\n * @returns {*} Returns the map data.\n */\nfunction getMapData(map, key) {\n  var data = map.__data__;\n  return isKeyable(key)\n    ? data[typeof key == 'string' ? 'string' : 'hash']\n    : data.map;\n}\n\nmodule.exports = getMapData;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_getMapData.js?");

/***/ }),

/***/ "./node_modules/lodash/_getMatchData.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getMatchData.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ \"./node_modules/lodash/_isStrictComparable.js\"),\n    keys = __webpack_require__(/*! ./keys */ \"./node_modules/lodash/keys.js\");\n\n/**\n * Gets the property names, values, and compare flags of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the match data of `object`.\n */\nfunction getMatchData(object) {\n  var result = keys(object),\n      length = result.length;\n\n  while (length--) {\n    var key = result[length],\n        value = object[key];\n\n    result[length] = [key, value, isStrictComparable(value)];\n  }\n  return result;\n}\n\nmodule.exports = getMatchData;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_getMatchData.js?");

/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ \"./node_modules/lodash/_baseIsNative.js\"),\n    getValue = __webpack_require__(/*! ./_getValue */ \"./node_modules/lodash/_getValue.js\");\n\n/**\n * Gets the native function at `key` of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {string} key The key of the method to get.\n * @returns {*} Returns the function if it's native, else `undefined`.\n */\nfunction getNative(object, key) {\n  var value = getValue(object, key);\n  return baseIsNative(value) ? value : undefined;\n}\n\nmodule.exports = getNative;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_getNative.js?");

/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var overArg = __webpack_require__(/*! ./_overArg */ \"./node_modules/lodash/_overArg.js\");\n\n/** Built-in value references. */\nvar getPrototype = overArg(Object.getPrototypeOf, Object);\n\nmodule.exports = getPrototype;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_getPrototype.js?");

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the raw `toStringTag`.\n */\nfunction getRawTag(value) {\n  var isOwn = hasOwnProperty.call(value, symToStringTag),\n      tag = value[symToStringTag];\n\n  try {\n    value[symToStringTag] = undefined;\n    var unmasked = true;\n  } catch (e) {}\n\n  var result = nativeObjectToString.call(value);\n  if (unmasked) {\n    if (isOwn) {\n      value[symToStringTag] = tag;\n    } else {\n      delete value[symToStringTag];\n    }\n  }\n  return result;\n}\n\nmodule.exports = getRawTag;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_getRawTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ \"./node_modules/lodash/_arrayFilter.js\"),\n    stubArray = __webpack_require__(/*! ./stubArray */ \"./node_modules/lodash/stubArray.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Built-in value references. */\nvar propertyIsEnumerable = objectProto.propertyIsEnumerable;\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeGetSymbols = Object.getOwnPropertySymbols;\n\n/**\n * Creates an array of the own enumerable symbols of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of symbols.\n */\nvar getSymbols = !nativeGetSymbols ? stubArray : function(object) {\n  if (object == null) {\n    return [];\n  }\n  object = Object(object);\n  return arrayFilter(nativeGetSymbols(object), function(symbol) {\n    return propertyIsEnumerable.call(object, symbol);\n  });\n};\n\nmodule.exports = getSymbols;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_getSymbols.js?");

/***/ }),

/***/ "./node_modules/lodash/_getSymbolsIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getSymbolsIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayPush = __webpack_require__(/*! ./_arrayPush */ \"./node_modules/lodash/_arrayPush.js\"),\n    getPrototype = __webpack_require__(/*! ./_getPrototype */ \"./node_modules/lodash/_getPrototype.js\"),\n    getSymbols = __webpack_require__(/*! ./_getSymbols */ \"./node_modules/lodash/_getSymbols.js\"),\n    stubArray = __webpack_require__(/*! ./stubArray */ \"./node_modules/lodash/stubArray.js\");\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeGetSymbols = Object.getOwnPropertySymbols;\n\n/**\n * Creates an array of the own and inherited enumerable symbols of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of symbols.\n */\nvar getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {\n  var result = [];\n  while (object) {\n    arrayPush(result, getSymbols(object));\n    object = getPrototype(object);\n  }\n  return result;\n};\n\nmodule.exports = getSymbolsIn;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_getSymbolsIn.js?");

/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DataView = __webpack_require__(/*! ./_DataView */ \"./node_modules/lodash/_DataView.js\"),\n    Map = __webpack_require__(/*! ./_Map */ \"./node_modules/lodash/_Map.js\"),\n    Promise = __webpack_require__(/*! ./_Promise */ \"./node_modules/lodash/_Promise.js\"),\n    Set = __webpack_require__(/*! ./_Set */ \"./node_modules/lodash/_Set.js\"),\n    WeakMap = __webpack_require__(/*! ./_WeakMap */ \"./node_modules/lodash/_WeakMap.js\"),\n    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    toSource = __webpack_require__(/*! ./_toSource */ \"./node_modules/lodash/_toSource.js\");\n\n/** `Object#toString` result references. */\nvar mapTag = '[object Map]',\n    objectTag = '[object Object]',\n    promiseTag = '[object Promise]',\n    setTag = '[object Set]',\n    weakMapTag = '[object WeakMap]';\n\nvar dataViewTag = '[object DataView]';\n\n/** Used to detect maps, sets, and weakmaps. */\nvar dataViewCtorString = toSource(DataView),\n    mapCtorString = toSource(Map),\n    promiseCtorString = toSource(Promise),\n    setCtorString = toSource(Set),\n    weakMapCtorString = toSource(WeakMap);\n\n/**\n * Gets the `toStringTag` of `value`.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nvar getTag = baseGetTag;\n\n// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.\nif ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||\n    (Map && getTag(new Map) != mapTag) ||\n    (Promise && getTag(Promise.resolve()) != promiseTag) ||\n    (Set && getTag(new Set) != setTag) ||\n    (WeakMap && getTag(new WeakMap) != weakMapTag)) {\n  getTag = function(value) {\n    var result = baseGetTag(value),\n        Ctor = result == objectTag ? value.constructor : undefined,\n        ctorString = Ctor ? toSource(Ctor) : '';\n\n    if (ctorString) {\n      switch (ctorString) {\n        case dataViewCtorString: return dataViewTag;\n        case mapCtorString: return mapTag;\n        case promiseCtorString: return promiseTag;\n        case setCtorString: return setTag;\n        case weakMapCtorString: return weakMapTag;\n      }\n    }\n    return result;\n  };\n}\n\nmodule.exports = getTag;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_getTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Gets the value at `key` of `object`.\n *\n * @private\n * @param {Object} [object] The object to query.\n * @param {string} key The key of the property to get.\n * @returns {*} Returns the property value.\n */\nfunction getValue(object, key) {\n  return object == null ? undefined : object[key];\n}\n\nmodule.exports = getValue;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_getValue.js?");

/***/ }),

/***/ "./node_modules/lodash/_hasPath.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var castPath = __webpack_require__(/*! ./_castPath */ \"./node_modules/lodash/_castPath.js\"),\n    isArguments = __webpack_require__(/*! ./isArguments */ \"./node_modules/lodash/isArguments.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isIndex = __webpack_require__(/*! ./_isIndex */ \"./node_modules/lodash/_isIndex.js\"),\n    isLength = __webpack_require__(/*! ./isLength */ \"./node_modules/lodash/isLength.js\"),\n    toKey = __webpack_require__(/*! ./_toKey */ \"./node_modules/lodash/_toKey.js\");\n\n/**\n * Checks if `path` exists on `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {Array|string} path The path to check.\n * @param {Function} hasFunc The function to check properties.\n * @returns {boolean} Returns `true` if `path` exists, else `false`.\n */\nfunction hasPath(object, path, hasFunc) {\n  path = castPath(path, object);\n\n  var index = -1,\n      length = path.length,\n      result = false;\n\n  while (++index < length) {\n    var key = toKey(path[index]);\n    if (!(result = object != null && hasFunc(object, key))) {\n      break;\n    }\n    object = object[key];\n  }\n  if (result || ++index != length) {\n    return result;\n  }\n  length = object == null ? 0 : object.length;\n  return !!length && isLength(length) && isIndex(key, length) &&\n    (isArray(object) || isArguments(object));\n}\n\nmodule.exports = hasPath;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_hasPath.js?");

/***/ }),

/***/ "./node_modules/lodash/_hasUnicode.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hasUnicode.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used to compose unicode character classes. */\nvar rsAstralRange = '\\\\ud800-\\\\udfff',\n    rsComboMarksRange = '\\\\u0300-\\\\u036f',\n    reComboHalfMarksRange = '\\\\ufe20-\\\\ufe2f',\n    rsComboSymbolsRange = '\\\\u20d0-\\\\u20ff',\n    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,\n    rsVarRange = '\\\\ufe0e\\\\ufe0f';\n\n/** Used to compose unicode capture groups. */\nvar rsZWJ = '\\\\u200d';\n\n/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */\nvar reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');\n\n/**\n * Checks if `string` contains Unicode symbols.\n *\n * @private\n * @param {string} string The string to inspect.\n * @returns {boolean} Returns `true` if a symbol is found, else `false`.\n */\nfunction hasUnicode(string) {\n  return reHasUnicode.test(string);\n}\n\nmodule.exports = hasUnicode;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_hasUnicode.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/**\n * Removes all key-value entries from the hash.\n *\n * @private\n * @name clear\n * @memberOf Hash\n */\nfunction hashClear() {\n  this.__data__ = nativeCreate ? nativeCreate(null) : {};\n  this.size = 0;\n}\n\nmodule.exports = hashClear;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_hashClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Removes `key` and its value from the hash.\n *\n * @private\n * @name delete\n * @memberOf Hash\n * @param {Object} hash The hash to modify.\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction hashDelete(key) {\n  var result = this.has(key) && delete this.__data__[key];\n  this.size -= result ? 1 : 0;\n  return result;\n}\n\nmodule.exports = hashDelete;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_hashDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/** Used to stand-in for `undefined` hash values. */\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Gets the hash value for `key`.\n *\n * @private\n * @name get\n * @memberOf Hash\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction hashGet(key) {\n  var data = this.__data__;\n  if (nativeCreate) {\n    var result = data[key];\n    return result === HASH_UNDEFINED ? undefined : result;\n  }\n  return hasOwnProperty.call(data, key) ? data[key] : undefined;\n}\n\nmodule.exports = hashGet;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_hashGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Checks if a hash value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf Hash\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction hashHas(key) {\n  var data = this.__data__;\n  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);\n}\n\nmodule.exports = hashHas;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_hashHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/** Used to stand-in for `undefined` hash values. */\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n\n/**\n * Sets the hash `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf Hash\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the hash instance.\n */\nfunction hashSet(key, value) {\n  var data = this.__data__;\n  this.size += this.has(key) ? 0 : 1;\n  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;\n  return this;\n}\n\nmodule.exports = hashSet;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_hashSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_initCloneArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneArray.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Initializes an array clone.\n *\n * @private\n * @param {Array} array The array to clone.\n * @returns {Array} Returns the initialized clone.\n */\nfunction initCloneArray(array) {\n  var length = array.length,\n      result = new array.constructor(length);\n\n  // Add properties assigned by `RegExp#exec`.\n  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {\n    result.index = array.index;\n    result.input = array.input;\n  }\n  return result;\n}\n\nmodule.exports = initCloneArray;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_initCloneArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_initCloneByTag.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneByTag.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ \"./node_modules/lodash/_cloneArrayBuffer.js\"),\n    cloneDataView = __webpack_require__(/*! ./_cloneDataView */ \"./node_modules/lodash/_cloneDataView.js\"),\n    cloneRegExp = __webpack_require__(/*! ./_cloneRegExp */ \"./node_modules/lodash/_cloneRegExp.js\"),\n    cloneSymbol = __webpack_require__(/*! ./_cloneSymbol */ \"./node_modules/lodash/_cloneSymbol.js\"),\n    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ \"./node_modules/lodash/_cloneTypedArray.js\");\n\n/** `Object#toString` result references. */\nvar boolTag = '[object Boolean]',\n    dateTag = '[object Date]',\n    mapTag = '[object Map]',\n    numberTag = '[object Number]',\n    regexpTag = '[object RegExp]',\n    setTag = '[object Set]',\n    stringTag = '[object String]',\n    symbolTag = '[object Symbol]';\n\nvar arrayBufferTag = '[object ArrayBuffer]',\n    dataViewTag = '[object DataView]',\n    float32Tag = '[object Float32Array]',\n    float64Tag = '[object Float64Array]',\n    int8Tag = '[object Int8Array]',\n    int16Tag = '[object Int16Array]',\n    int32Tag = '[object Int32Array]',\n    uint8Tag = '[object Uint8Array]',\n    uint8ClampedTag = '[object Uint8ClampedArray]',\n    uint16Tag = '[object Uint16Array]',\n    uint32Tag = '[object Uint32Array]';\n\n/**\n * Initializes an object clone based on its `toStringTag`.\n *\n * **Note:** This function only supports cloning values with tags of\n * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.\n *\n * @private\n * @param {Object} object The object to clone.\n * @param {string} tag The `toStringTag` of the object to clone.\n * @param {boolean} [isDeep] Specify a deep clone.\n * @returns {Object} Returns the initialized clone.\n */\nfunction initCloneByTag(object, tag, isDeep) {\n  var Ctor = object.constructor;\n  switch (tag) {\n    case arrayBufferTag:\n      return cloneArrayBuffer(object);\n\n    case boolTag:\n    case dateTag:\n      return new Ctor(+object);\n\n    case dataViewTag:\n      return cloneDataView(object, isDeep);\n\n    case float32Tag: case float64Tag:\n    case int8Tag: case int16Tag: case int32Tag:\n    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:\n      return cloneTypedArray(object, isDeep);\n\n    case mapTag:\n      return new Ctor;\n\n    case numberTag:\n    case stringTag:\n      return new Ctor(object);\n\n    case regexpTag:\n      return cloneRegExp(object);\n\n    case setTag:\n      return new Ctor;\n\n    case symbolTag:\n      return cloneSymbol(object);\n  }\n}\n\nmodule.exports = initCloneByTag;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_initCloneByTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseCreate = __webpack_require__(/*! ./_baseCreate */ \"./node_modules/lodash/_baseCreate.js\"),\n    getPrototype = __webpack_require__(/*! ./_getPrototype */ \"./node_modules/lodash/_getPrototype.js\"),\n    isPrototype = __webpack_require__(/*! ./_isPrototype */ \"./node_modules/lodash/_isPrototype.js\");\n\n/**\n * Initializes an object clone.\n *\n * @private\n * @param {Object} object The object to clone.\n * @returns {Object} Returns the initialized clone.\n */\nfunction initCloneObject(object) {\n  return (typeof object.constructor == 'function' && !isPrototype(object))\n    ? baseCreate(getPrototype(object))\n    : {};\n}\n\nmodule.exports = initCloneObject;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_initCloneObject.js?");

/***/ }),

/***/ "./node_modules/lodash/_isFlattenable.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_isFlattenable.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    isArguments = __webpack_require__(/*! ./isArguments */ \"./node_modules/lodash/isArguments.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\");\n\n/** Built-in value references. */\nvar spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;\n\n/**\n * Checks if `value` is a flattenable `arguments` object or array.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.\n */\nfunction isFlattenable(value) {\n  return isArray(value) || isArguments(value) ||\n    !!(spreadableSymbol && value && value[spreadableSymbol]);\n}\n\nmodule.exports = isFlattenable;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_isFlattenable.js?");

/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used as references for various `Number` constants. */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/** Used to detect unsigned integer values. */\nvar reIsUint = /^(?:0|[1-9]\\d*)$/;\n\n/**\n * Checks if `value` is a valid array-like index.\n *\n * @private\n * @param {*} value The value to check.\n * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.\n * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.\n */\nfunction isIndex(value, length) {\n  var type = typeof value;\n  length = length == null ? MAX_SAFE_INTEGER : length;\n\n  return !!length &&\n    (type == 'number' ||\n      (type != 'symbol' && reIsUint.test(value))) &&\n        (value > -1 && value % 1 == 0 && value < length);\n}\n\nmodule.exports = isIndex;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_isIndex.js?");

/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_isIterateeCall.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var eq = __webpack_require__(/*! ./eq */ \"./node_modules/lodash/eq.js\"),\n    isArrayLike = __webpack_require__(/*! ./isArrayLike */ \"./node_modules/lodash/isArrayLike.js\"),\n    isIndex = __webpack_require__(/*! ./_isIndex */ \"./node_modules/lodash/_isIndex.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n\n/**\n * Checks if the given arguments are from an iteratee call.\n *\n * @private\n * @param {*} value The potential iteratee value argument.\n * @param {*} index The potential iteratee index or key argument.\n * @param {*} object The potential iteratee object argument.\n * @returns {boolean} Returns `true` if the arguments are from an iteratee call,\n *  else `false`.\n */\nfunction isIterateeCall(value, index, object) {\n  if (!isObject(object)) {\n    return false;\n  }\n  var type = typeof index;\n  if (type == 'number'\n        ? (isArrayLike(object) && isIndex(index, object.length))\n        : (type == 'string' && index in object)\n      ) {\n    return eq(object[index], value);\n  }\n  return false;\n}\n\nmodule.exports = isIterateeCall;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_isIterateeCall.js?");

/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used to match property names within property paths. */\nvar reIsDeepProp = /\\.|\\[(?:[^[\\]]*|([\"'])(?:(?!\\1)[^\\\\]|\\\\.)*?\\1)\\]/,\n    reIsPlainProp = /^\\w*$/;\n\n/**\n * Checks if `value` is a property name and not a property path.\n *\n * @private\n * @param {*} value The value to check.\n * @param {Object} [object] The object to query keys on.\n * @returns {boolean} Returns `true` if `value` is a property name, else `false`.\n */\nfunction isKey(value, object) {\n  if (isArray(value)) {\n    return false;\n  }\n  var type = typeof value;\n  if (type == 'number' || type == 'symbol' || type == 'boolean' ||\n      value == null || isSymbol(value)) {\n    return true;\n  }\n  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||\n    (object != null && value in Object(object));\n}\n\nmodule.exports = isKey;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_isKey.js?");

/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is suitable for use as unique object key.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is suitable, else `false`.\n */\nfunction isKeyable(value) {\n  var type = typeof value;\n  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')\n    ? (value !== '__proto__')\n    : (value === null);\n}\n\nmodule.exports = isKeyable;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_isKeyable.js?");

/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var coreJsData = __webpack_require__(/*! ./_coreJsData */ \"./node_modules/lodash/_coreJsData.js\");\n\n/** Used to detect methods masquerading as native. */\nvar maskSrcKey = (function() {\n  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');\n  return uid ? ('Symbol(src)_1.' + uid) : '';\n}());\n\n/**\n * Checks if `func` has its source masked.\n *\n * @private\n * @param {Function} func The function to check.\n * @returns {boolean} Returns `true` if `func` is masked, else `false`.\n */\nfunction isMasked(func) {\n  return !!maskSrcKey && (maskSrcKey in func);\n}\n\nmodule.exports = isMasked;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_isMasked.js?");

/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Checks if `value` is likely a prototype object.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.\n */\nfunction isPrototype(value) {\n  var Ctor = value && value.constructor,\n      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;\n\n  return value === proto;\n}\n\nmodule.exports = isPrototype;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_isPrototype.js?");

/***/ }),

/***/ "./node_modules/lodash/_isStrictComparable.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash/_isStrictComparable.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n\n/**\n * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` if suitable for strict\n *  equality comparisons, else `false`.\n */\nfunction isStrictComparable(value) {\n  return value === value && !isObject(value);\n}\n\nmodule.exports = isStrictComparable;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_isStrictComparable.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Removes all key-value entries from the list cache.\n *\n * @private\n * @name clear\n * @memberOf ListCache\n */\nfunction listCacheClear() {\n  this.__data__ = [];\n  this.size = 0;\n}\n\nmodule.exports = listCacheClear;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_listCacheClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/** Used for built-in method references. */\nvar arrayProto = Array.prototype;\n\n/** Built-in value references. */\nvar splice = arrayProto.splice;\n\n/**\n * Removes `key` and its value from the list cache.\n *\n * @private\n * @name delete\n * @memberOf ListCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction listCacheDelete(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    return false;\n  }\n  var lastIndex = data.length - 1;\n  if (index == lastIndex) {\n    data.pop();\n  } else {\n    splice.call(data, index, 1);\n  }\n  --this.size;\n  return true;\n}\n\nmodule.exports = listCacheDelete;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_listCacheDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Gets the list cache value for `key`.\n *\n * @private\n * @name get\n * @memberOf ListCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction listCacheGet(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  return index < 0 ? undefined : data[index][1];\n}\n\nmodule.exports = listCacheGet;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_listCacheGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Checks if a list cache value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf ListCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction listCacheHas(key) {\n  return assocIndexOf(this.__data__, key) > -1;\n}\n\nmodule.exports = listCacheHas;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_listCacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Sets the list cache `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf ListCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the list cache instance.\n */\nfunction listCacheSet(key, value) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    ++this.size;\n    data.push([key, value]);\n  } else {\n    data[index][1] = value;\n  }\n  return this;\n}\n\nmodule.exports = listCacheSet;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_listCacheSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Hash = __webpack_require__(/*! ./_Hash */ \"./node_modules/lodash/_Hash.js\"),\n    ListCache = __webpack_require__(/*! ./_ListCache */ \"./node_modules/lodash/_ListCache.js\"),\n    Map = __webpack_require__(/*! ./_Map */ \"./node_modules/lodash/_Map.js\");\n\n/**\n * Removes all key-value entries from the map.\n *\n * @private\n * @name clear\n * @memberOf MapCache\n */\nfunction mapCacheClear() {\n  this.size = 0;\n  this.__data__ = {\n    'hash': new Hash,\n    'map': new (Map || ListCache),\n    'string': new Hash\n  };\n}\n\nmodule.exports = mapCacheClear;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_mapCacheClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Removes `key` and its value from the map.\n *\n * @private\n * @name delete\n * @memberOf MapCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction mapCacheDelete(key) {\n  var result = getMapData(this, key)['delete'](key);\n  this.size -= result ? 1 : 0;\n  return result;\n}\n\nmodule.exports = mapCacheDelete;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_mapCacheDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Gets the map value for `key`.\n *\n * @private\n * @name get\n * @memberOf MapCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction mapCacheGet(key) {\n  return getMapData(this, key).get(key);\n}\n\nmodule.exports = mapCacheGet;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_mapCacheGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Checks if a map value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf MapCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction mapCacheHas(key) {\n  return getMapData(this, key).has(key);\n}\n\nmodule.exports = mapCacheHas;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_mapCacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Sets the map `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf MapCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the map cache instance.\n */\nfunction mapCacheSet(key, value) {\n  var data = getMapData(this, key),\n      size = data.size;\n\n  data.set(key, value);\n  this.size += data.size == size ? 0 : 1;\n  return this;\n}\n\nmodule.exports = mapCacheSet;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_mapCacheSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Converts `map` to its key-value pairs.\n *\n * @private\n * @param {Object} map The map to convert.\n * @returns {Array} Returns the key-value pairs.\n */\nfunction mapToArray(map) {\n  var index = -1,\n      result = Array(map.size);\n\n  map.forEach(function(value, key) {\n    result[++index] = [key, value];\n  });\n  return result;\n}\n\nmodule.exports = mapToArray;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_mapToArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
/*!*********************************************************!*\
  !*** ./node_modules/lodash/_matchesStrictComparable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `matchesProperty` for source values suitable\n * for strict equality comparisons, i.e. `===`.\n *\n * @private\n * @param {string} key The key of the property to get.\n * @param {*} srcValue The value to match.\n * @returns {Function} Returns the new spec function.\n */\nfunction matchesStrictComparable(key, srcValue) {\n  return function(object) {\n    if (object == null) {\n      return false;\n    }\n    return object[key] === srcValue &&\n      (srcValue !== undefined || (key in Object(object)));\n  };\n}\n\nmodule.exports = matchesStrictComparable;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_matchesStrictComparable.js?");

/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var memoize = __webpack_require__(/*! ./memoize */ \"./node_modules/lodash/memoize.js\");\n\n/** Used as the maximum memoize cache size. */\nvar MAX_MEMOIZE_SIZE = 500;\n\n/**\n * A specialized version of `_.memoize` which clears the memoized function's\n * cache when it exceeds `MAX_MEMOIZE_SIZE`.\n *\n * @private\n * @param {Function} func The function to have its output memoized.\n * @returns {Function} Returns the new memoized function.\n */\nfunction memoizeCapped(func) {\n  var result = memoize(func, function(key) {\n    if (cache.size === MAX_MEMOIZE_SIZE) {\n      cache.clear();\n    }\n    return key;\n  });\n\n  var cache = result.cache;\n  return result;\n}\n\nmodule.exports = memoizeCapped;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_memoizeCapped.js?");

/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\");\n\n/* Built-in method references that are verified to be native. */\nvar nativeCreate = getNative(Object, 'create');\n\nmodule.exports = nativeCreate;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_nativeCreate.js?");

/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var overArg = __webpack_require__(/*! ./_overArg */ \"./node_modules/lodash/_overArg.js\");\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeKeys = overArg(Object.keys, Object);\n\nmodule.exports = nativeKeys;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_nativeKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This function is like\n * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)\n * except that it includes inherited enumerable properties.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n */\nfunction nativeKeysIn(object) {\n  var result = [];\n  if (object != null) {\n    for (var key in Object(object)) {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\nmodule.exports = nativeKeysIn;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_nativeKeysIn.js?");

/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `exports`. */\nvar freeExports =  true && exports && !exports.nodeType && exports;\n\n/** Detect free variable `module`. */\nvar freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;\n\n/** Detect the popular CommonJS extension `module.exports`. */\nvar moduleExports = freeModule && freeModule.exports === freeExports;\n\n/** Detect free variable `process` from Node.js. */\nvar freeProcess = moduleExports && freeGlobal.process;\n\n/** Used to access faster Node.js helpers. */\nvar nodeUtil = (function() {\n  try {\n    // Use `util.types` for Node.js 10+.\n    var types = freeModule && freeModule.require && freeModule.require('util').types;\n\n    if (types) {\n      return types;\n    }\n\n    // Legacy `process.binding('util')` for Node.js < 10.\n    return freeProcess && freeProcess.binding && freeProcess.binding('util');\n  } catch (e) {}\n}());\n\nmodule.exports = nodeUtil;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_nodeUtil.js?");

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/**\n * Converts `value` to a string using `Object.prototype.toString`.\n *\n * @private\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n */\nfunction objectToString(value) {\n  return nativeObjectToString.call(value);\n}\n\nmodule.exports = objectToString;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_objectToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Creates a unary function that invokes `func` with its argument transformed.\n *\n * @private\n * @param {Function} func The function to wrap.\n * @param {Function} transform The argument transform.\n * @returns {Function} Returns the new function.\n */\nfunction overArg(func, transform) {\n  return function(arg) {\n    return func(transform(arg));\n  };\n}\n\nmodule.exports = overArg;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_overArg.js?");

/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var apply = __webpack_require__(/*! ./_apply */ \"./node_modules/lodash/_apply.js\");\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeMax = Math.max;\n\n/**\n * A specialized version of `baseRest` which transforms the rest array.\n *\n * @private\n * @param {Function} func The function to apply a rest parameter to.\n * @param {number} [start=func.length-1] The start position of the rest parameter.\n * @param {Function} transform The rest array transform.\n * @returns {Function} Returns the new function.\n */\nfunction overRest(func, start, transform) {\n  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);\n  return function() {\n    var args = arguments,\n        index = -1,\n        length = nativeMax(args.length - start, 0),\n        array = Array(length);\n\n    while (++index < length) {\n      array[index] = args[start + index];\n    }\n    index = -1;\n    var otherArgs = Array(start + 1);\n    while (++index < start) {\n      otherArgs[index] = args[index];\n    }\n    otherArgs[start] = transform(array);\n    return apply(func, this, otherArgs);\n  };\n}\n\nmodule.exports = overRest;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_overRest.js?");

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\nmodule.exports = root;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_root.js?");

/***/ }),

/***/ "./node_modules/lodash/_safeGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_safeGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Gets the value at `key`, unless `key` is \"__proto__\".\n *\n * @private\n * @param {Object} object The object to query.\n * @param {string} key The key of the property to get.\n * @returns {*} Returns the property value.\n */\nfunction safeGet(object, key) {\n  if (key == '__proto__') {\n    return;\n  }\n\n  return object[key];\n}\n\nmodule.exports = safeGet;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_safeGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used to stand-in for `undefined` hash values. */\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n\n/**\n * Adds `value` to the array cache.\n *\n * @private\n * @name add\n * @memberOf SetCache\n * @alias push\n * @param {*} value The value to cache.\n * @returns {Object} Returns the cache instance.\n */\nfunction setCacheAdd(value) {\n  this.__data__.set(value, HASH_UNDEFINED);\n  return this;\n}\n\nmodule.exports = setCacheAdd;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_setCacheAdd.js?");

/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is in the array cache.\n *\n * @private\n * @name has\n * @memberOf SetCache\n * @param {*} value The value to search for.\n * @returns {number} Returns `true` if `value` is found, else `false`.\n */\nfunction setCacheHas(value) {\n  return this.__data__.has(value);\n}\n\nmodule.exports = setCacheHas;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_setCacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Converts `set` to an array of its values.\n *\n * @private\n * @param {Object} set The set to convert.\n * @returns {Array} Returns the values.\n */\nfunction setToArray(set) {\n  var index = -1,\n      result = Array(set.size);\n\n  set.forEach(function(value) {\n    result[++index] = value;\n  });\n  return result;\n}\n\nmodule.exports = setToArray;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_setToArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ \"./node_modules/lodash/_baseSetToString.js\"),\n    shortOut = __webpack_require__(/*! ./_shortOut */ \"./node_modules/lodash/_shortOut.js\");\n\n/**\n * Sets the `toString` method of `func` to return `string`.\n *\n * @private\n * @param {Function} func The function to modify.\n * @param {Function} string The `toString` result.\n * @returns {Function} Returns `func`.\n */\nvar setToString = shortOut(baseSetToString);\n\nmodule.exports = setToString;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_setToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used to detect hot functions by number of calls within a span of milliseconds. */\nvar HOT_COUNT = 800,\n    HOT_SPAN = 16;\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeNow = Date.now;\n\n/**\n * Creates a function that'll short out and invoke `identity` instead\n * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`\n * milliseconds.\n *\n * @private\n * @param {Function} func The function to restrict.\n * @returns {Function} Returns the new shortable function.\n */\nfunction shortOut(func) {\n  var count = 0,\n      lastCalled = 0;\n\n  return function() {\n    var stamp = nativeNow(),\n        remaining = HOT_SPAN - (stamp - lastCalled);\n\n    lastCalled = stamp;\n    if (remaining > 0) {\n      if (++count >= HOT_COUNT) {\n        return arguments[0];\n      }\n    } else {\n      count = 0;\n    }\n    return func.apply(undefined, arguments);\n  };\n}\n\nmodule.exports = shortOut;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_shortOut.js?");

/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ListCache = __webpack_require__(/*! ./_ListCache */ \"./node_modules/lodash/_ListCache.js\");\n\n/**\n * Removes all key-value entries from the stack.\n *\n * @private\n * @name clear\n * @memberOf Stack\n */\nfunction stackClear() {\n  this.__data__ = new ListCache;\n  this.size = 0;\n}\n\nmodule.exports = stackClear;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_stackClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Removes `key` and its value from the stack.\n *\n * @private\n * @name delete\n * @memberOf Stack\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction stackDelete(key) {\n  var data = this.__data__,\n      result = data['delete'](key);\n\n  this.size = data.size;\n  return result;\n}\n\nmodule.exports = stackDelete;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_stackDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Gets the stack value for `key`.\n *\n * @private\n * @name get\n * @memberOf Stack\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction stackGet(key) {\n  return this.__data__.get(key);\n}\n\nmodule.exports = stackGet;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_stackGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if a stack value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf Stack\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction stackHas(key) {\n  return this.__data__.has(key);\n}\n\nmodule.exports = stackHas;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_stackHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ListCache = __webpack_require__(/*! ./_ListCache */ \"./node_modules/lodash/_ListCache.js\"),\n    Map = __webpack_require__(/*! ./_Map */ \"./node_modules/lodash/_Map.js\"),\n    MapCache = __webpack_require__(/*! ./_MapCache */ \"./node_modules/lodash/_MapCache.js\");\n\n/** Used as the size to enable large array optimizations. */\nvar LARGE_ARRAY_SIZE = 200;\n\n/**\n * Sets the stack `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf Stack\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the stack cache instance.\n */\nfunction stackSet(key, value) {\n  var data = this.__data__;\n  if (data instanceof ListCache) {\n    var pairs = data.__data__;\n    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {\n      pairs.push([key, value]);\n      this.size = ++data.size;\n      return this;\n    }\n    data = this.__data__ = new MapCache(pairs);\n  }\n  data.set(key, value);\n  this.size = data.size;\n  return this;\n}\n\nmodule.exports = stackSet;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_stackSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_strictIndexOf.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_strictIndexOf.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.indexOf` which performs strict equality\n * comparisons of values, i.e. `===`.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {*} value The value to search for.\n * @param {number} fromIndex The index to search from.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\nfunction strictIndexOf(array, value, fromIndex) {\n  var index = fromIndex - 1,\n      length = array.length;\n\n  while (++index < length) {\n    if (array[index] === value) {\n      return index;\n    }\n  }\n  return -1;\n}\n\nmodule.exports = strictIndexOf;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_strictIndexOf.js?");

/***/ }),

/***/ "./node_modules/lodash/_stringToArray.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_stringToArray.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var asciiToArray = __webpack_require__(/*! ./_asciiToArray */ \"./node_modules/lodash/_asciiToArray.js\"),\n    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ \"./node_modules/lodash/_hasUnicode.js\"),\n    unicodeToArray = __webpack_require__(/*! ./_unicodeToArray */ \"./node_modules/lodash/_unicodeToArray.js\");\n\n/**\n * Converts `string` to an array.\n *\n * @private\n * @param {string} string The string to convert.\n * @returns {Array} Returns the converted array.\n */\nfunction stringToArray(string) {\n  return hasUnicode(string)\n    ? unicodeToArray(string)\n    : asciiToArray(string);\n}\n\nmodule.exports = stringToArray;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_stringToArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ \"./node_modules/lodash/_memoizeCapped.js\");\n\n/** Used to match property names within property paths. */\nvar rePropName = /[^.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))/g;\n\n/** Used to match backslashes in property paths. */\nvar reEscapeChar = /\\\\(\\\\)?/g;\n\n/**\n * Converts `string` to a property path array.\n *\n * @private\n * @param {string} string The string to convert.\n * @returns {Array} Returns the property path array.\n */\nvar stringToPath = memoizeCapped(function(string) {\n  var result = [];\n  if (string.charCodeAt(0) === 46 /* . */) {\n    result.push('');\n  }\n  string.replace(rePropName, function(match, number, quote, subString) {\n    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));\n  });\n  return result;\n});\n\nmodule.exports = stringToPath;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_stringToPath.js?");

/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar INFINITY = 1 / 0;\n\n/**\n * Converts `value` to a string key if it's not a string or symbol.\n *\n * @private\n * @param {*} value The value to inspect.\n * @returns {string|symbol} Returns the key.\n */\nfunction toKey(value) {\n  if (typeof value == 'string' || isSymbol(value)) {\n    return value;\n  }\n  var result = (value + '');\n  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;\n}\n\nmodule.exports = toKey;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_toKey.js?");

/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar funcProto = Function.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/**\n * Converts `func` to its source code.\n *\n * @private\n * @param {Function} func The function to convert.\n * @returns {string} Returns the source code.\n */\nfunction toSource(func) {\n  if (func != null) {\n    try {\n      return funcToString.call(func);\n    } catch (e) {}\n    try {\n      return (func + '');\n    } catch (e) {}\n  }\n  return '';\n}\n\nmodule.exports = toSource;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_toSource.js?");

/***/ }),

/***/ "./node_modules/lodash/_unicodeToArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_unicodeToArray.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used to compose unicode character classes. */\nvar rsAstralRange = '\\\\ud800-\\\\udfff',\n    rsComboMarksRange = '\\\\u0300-\\\\u036f',\n    reComboHalfMarksRange = '\\\\ufe20-\\\\ufe2f',\n    rsComboSymbolsRange = '\\\\u20d0-\\\\u20ff',\n    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,\n    rsVarRange = '\\\\ufe0e\\\\ufe0f';\n\n/** Used to compose unicode capture groups. */\nvar rsAstral = '[' + rsAstralRange + ']',\n    rsCombo = '[' + rsComboRange + ']',\n    rsFitz = '\\\\ud83c[\\\\udffb-\\\\udfff]',\n    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',\n    rsNonAstral = '[^' + rsAstralRange + ']',\n    rsRegional = '(?:\\\\ud83c[\\\\udde6-\\\\uddff]){2}',\n    rsSurrPair = '[\\\\ud800-\\\\udbff][\\\\udc00-\\\\udfff]',\n    rsZWJ = '\\\\u200d';\n\n/** Used to compose unicode regexes. */\nvar reOptMod = rsModifier + '?',\n    rsOptVar = '[' + rsVarRange + ']?',\n    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',\n    rsSeq = rsOptVar + reOptMod + rsOptJoin,\n    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';\n\n/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */\nvar reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');\n\n/**\n * Converts a Unicode `string` to an array.\n *\n * @private\n * @param {string} string The string to convert.\n * @returns {Array} Returns the converted array.\n */\nfunction unicodeToArray(string) {\n  return string.match(reUnicode) || [];\n}\n\nmodule.exports = unicodeToArray;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_unicodeToArray.js?");

/***/ }),

/***/ "./node_modules/lodash/clamp.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/clamp.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseClamp = __webpack_require__(/*! ./_baseClamp */ \"./node_modules/lodash/_baseClamp.js\"),\n    toNumber = __webpack_require__(/*! ./toNumber */ \"./node_modules/lodash/toNumber.js\");\n\n/**\n * Clamps `number` within the inclusive `lower` and `upper` bounds.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Number\n * @param {number} number The number to clamp.\n * @param {number} [lower] The lower bound.\n * @param {number} upper The upper bound.\n * @returns {number} Returns the clamped number.\n * @example\n *\n * _.clamp(-10, -5, 5);\n * // => -5\n *\n * _.clamp(10, -5, 5);\n * // => 5\n */\nfunction clamp(number, lower, upper) {\n  if (upper === undefined) {\n    upper = lower;\n    lower = undefined;\n  }\n  if (upper !== undefined) {\n    upper = toNumber(upper);\n    upper = upper === upper ? upper : 0;\n  }\n  if (lower !== undefined) {\n    lower = toNumber(lower);\n    lower = lower === lower ? lower : 0;\n  }\n  return baseClamp(toNumber(number), lower, upper);\n}\n\nmodule.exports = clamp;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/clamp.js?");

/***/ }),

/***/ "./node_modules/lodash/clone.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/clone.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseClone = __webpack_require__(/*! ./_baseClone */ \"./node_modules/lodash/_baseClone.js\");\n\n/** Used to compose bitmasks for cloning. */\nvar CLONE_SYMBOLS_FLAG = 4;\n\n/**\n * Creates a shallow clone of `value`.\n *\n * **Note:** This method is loosely based on the\n * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)\n * and supports cloning arrays, array buffers, booleans, date objects, maps,\n * numbers, `Object` objects, regexes, sets, strings, symbols, and typed\n * arrays. The own enumerable properties of `arguments` objects are cloned\n * as plain objects. An empty object is returned for uncloneable values such\n * as error objects, functions, DOM nodes, and WeakMaps.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to clone.\n * @returns {*} Returns the cloned value.\n * @see _.cloneDeep\n * @example\n *\n * var objects = [{ 'a': 1 }, { 'b': 2 }];\n *\n * var shallow = _.clone(objects);\n * console.log(shallow[0] === objects[0]);\n * // => true\n */\nfunction clone(value) {\n  return baseClone(value, CLONE_SYMBOLS_FLAG);\n}\n\nmodule.exports = clone;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/clone.js?");

/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Creates a function that returns `value`.\n *\n * @static\n * @memberOf _\n * @since 2.4.0\n * @category Util\n * @param {*} value The value to return from the new function.\n * @returns {Function} Returns the new constant function.\n * @example\n *\n * var objects = _.times(2, _.constant({ 'a': 1 }));\n *\n * console.log(objects);\n * // => [{ 'a': 1 }, { 'a': 1 }]\n *\n * console.log(objects[0] === objects[1]);\n * // => true\n */\nfunction constant(value) {\n  return function() {\n    return value;\n  };\n}\n\nmodule.exports = constant;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/constant.js?");

/***/ }),

/***/ "./node_modules/lodash/defaultTo.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/defaultTo.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks `value` to determine whether a default value should be returned in\n * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,\n * or `undefined`.\n *\n * @static\n * @memberOf _\n * @since 4.14.0\n * @category Util\n * @param {*} value The value to check.\n * @param {*} defaultValue The default value.\n * @returns {*} Returns the resolved value.\n * @example\n *\n * _.defaultTo(1, 10);\n * // => 1\n *\n * _.defaultTo(undefined, 10);\n * // => 10\n */\nfunction defaultTo(value, defaultValue) {\n  return (value == null || value !== value) ? defaultValue : value;\n}\n\nmodule.exports = defaultTo;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/defaultTo.js?");

/***/ }),

/***/ "./node_modules/lodash/defaultsDeep.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/defaultsDeep.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var apply = __webpack_require__(/*! ./_apply */ \"./node_modules/lodash/_apply.js\"),\n    baseRest = __webpack_require__(/*! ./_baseRest */ \"./node_modules/lodash/_baseRest.js\"),\n    customDefaultsMerge = __webpack_require__(/*! ./_customDefaultsMerge */ \"./node_modules/lodash/_customDefaultsMerge.js\"),\n    mergeWith = __webpack_require__(/*! ./mergeWith */ \"./node_modules/lodash/mergeWith.js\");\n\n/**\n * This method is like `_.defaults` except that it recursively assigns\n * default properties.\n *\n * **Note:** This method mutates `object`.\n *\n * @static\n * @memberOf _\n * @since 3.10.0\n * @category Object\n * @param {Object} object The destination object.\n * @param {...Object} [sources] The source objects.\n * @returns {Object} Returns `object`.\n * @see _.defaults\n * @example\n *\n * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });\n * // => { 'a': { 'b': 2, 'c': 3 } }\n */\nvar defaultsDeep = baseRest(function(args) {\n  args.push(undefined, customDefaultsMerge);\n  return apply(mergeWith, undefined, args);\n});\n\nmodule.exports = defaultsDeep;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/defaultsDeep.js?");

/***/ }),

/***/ "./node_modules/lodash/difference.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/difference.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseDifference = __webpack_require__(/*! ./_baseDifference */ \"./node_modules/lodash/_baseDifference.js\"),\n    baseFlatten = __webpack_require__(/*! ./_baseFlatten */ \"./node_modules/lodash/_baseFlatten.js\"),\n    baseRest = __webpack_require__(/*! ./_baseRest */ \"./node_modules/lodash/_baseRest.js\"),\n    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ \"./node_modules/lodash/isArrayLikeObject.js\");\n\n/**\n * Creates an array of `array` values not included in the other given arrays\n * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * for equality comparisons. The order and references of result values are\n * determined by the first array.\n *\n * **Note:** Unlike `_.pullAll`, this method returns a new array.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Array\n * @param {Array} array The array to inspect.\n * @param {...Array} [values] The values to exclude.\n * @returns {Array} Returns the new array of filtered values.\n * @see _.without, _.xor\n * @example\n *\n * _.difference([2, 1], [2, 3]);\n * // => [1]\n */\nvar difference = baseRest(function(array, values) {\n  return isArrayLikeObject(array)\n    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))\n    : [];\n});\n\nmodule.exports = difference;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/difference.js?");

/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Performs a\n * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * comparison between two values to determine if they are equivalent.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to compare.\n * @param {*} other The other value to compare.\n * @returns {boolean} Returns `true` if the values are equivalent, else `false`.\n * @example\n *\n * var object = { 'a': 1 };\n * var other = { 'a': 1 };\n *\n * _.eq(object, object);\n * // => true\n *\n * _.eq(object, other);\n * // => false\n *\n * _.eq('a', 'a');\n * // => true\n *\n * _.eq('a', Object('a'));\n * // => false\n *\n * _.eq(NaN, NaN);\n * // => true\n */\nfunction eq(value, other) {\n  return value === other || (value !== value && other !== other);\n}\n\nmodule.exports = eq;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/eq.js?");

/***/ }),

/***/ "./node_modules/lodash/findIndex.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/findIndex.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ \"./node_modules/lodash/_baseFindIndex.js\"),\n    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ \"./node_modules/lodash/_baseIteratee.js\"),\n    toInteger = __webpack_require__(/*! ./toInteger */ \"./node_modules/lodash/toInteger.js\");\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeMax = Math.max;\n\n/**\n * This method is like `_.find` except that it returns the index of the first\n * element `predicate` returns truthy for instead of the element itself.\n *\n * @static\n * @memberOf _\n * @since 1.1.0\n * @category Array\n * @param {Array} array The array to inspect.\n * @param {Function} [predicate=_.identity] The function invoked per iteration.\n * @param {number} [fromIndex=0] The index to search from.\n * @returns {number} Returns the index of the found element, else `-1`.\n * @example\n *\n * var users = [\n *   { 'user': 'barney',  'active': false },\n *   { 'user': 'fred',    'active': false },\n *   { 'user': 'pebbles', 'active': true }\n * ];\n *\n * _.findIndex(users, function(o) { return o.user == 'barney'; });\n * // => 0\n *\n * // The `_.matches` iteratee shorthand.\n * _.findIndex(users, { 'user': 'fred', 'active': false });\n * // => 1\n *\n * // The `_.matchesProperty` iteratee shorthand.\n * _.findIndex(users, ['active', false]);\n * // => 0\n *\n * // The `_.property` iteratee shorthand.\n * _.findIndex(users, 'active');\n * // => 2\n */\nfunction findIndex(array, predicate, fromIndex) {\n  var length = array == null ? 0 : array.length;\n  if (!length) {\n    return -1;\n  }\n  var index = fromIndex == null ? 0 : toInteger(fromIndex);\n  if (index < 0) {\n    index = nativeMax(length + index, 0);\n  }\n  return baseFindIndex(array, baseIteratee(predicate, 3), index);\n}\n\nmodule.exports = findIndex;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/findIndex.js?");

/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGet = __webpack_require__(/*! ./_baseGet */ \"./node_modules/lodash/_baseGet.js\");\n\n/**\n * Gets the value at `path` of `object`. If the resolved value is\n * `undefined`, the `defaultValue` is returned in its place.\n *\n * @static\n * @memberOf _\n * @since 3.7.0\n * @category Object\n * @param {Object} object The object to query.\n * @param {Array|string} path The path of the property to get.\n * @param {*} [defaultValue] The value returned for `undefined` resolved values.\n * @returns {*} Returns the resolved value.\n * @example\n *\n * var object = { 'a': [{ 'b': { 'c': 3 } }] };\n *\n * _.get(object, 'a[0].b.c');\n * // => 3\n *\n * _.get(object, ['a', '0', 'b', 'c']);\n * // => 3\n *\n * _.get(object, 'a.b.c', 'default');\n * // => 'default'\n */\nfunction get(object, path, defaultValue) {\n  var result = object == null ? undefined : baseGet(object, path);\n  return result === undefined ? defaultValue : result;\n}\n\nmodule.exports = get;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/get.js?");

/***/ }),

/***/ "./node_modules/lodash/has.js":
/*!************************************!*\
  !*** ./node_modules/lodash/has.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseHas = __webpack_require__(/*! ./_baseHas */ \"./node_modules/lodash/_baseHas.js\"),\n    hasPath = __webpack_require__(/*! ./_hasPath */ \"./node_modules/lodash/_hasPath.js\");\n\n/**\n * Checks if `path` is a direct property of `object`.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Object\n * @param {Object} object The object to query.\n * @param {Array|string} path The path to check.\n * @returns {boolean} Returns `true` if `path` exists, else `false`.\n * @example\n *\n * var object = { 'a': { 'b': 2 } };\n * var other = _.create({ 'a': _.create({ 'b': 2 }) });\n *\n * _.has(object, 'a');\n * // => true\n *\n * _.has(object, 'a.b');\n * // => true\n *\n * _.has(object, ['a', 'b']);\n * // => true\n *\n * _.has(other, 'a');\n * // => false\n */\nfunction has(object, path) {\n  return object != null && hasPath(object, path, baseHas);\n}\n\nmodule.exports = has;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/has.js?");

/***/ }),

/***/ "./node_modules/lodash/hasIn.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ \"./node_modules/lodash/_baseHasIn.js\"),\n    hasPath = __webpack_require__(/*! ./_hasPath */ \"./node_modules/lodash/_hasPath.js\");\n\n/**\n * Checks if `path` is a direct or inherited property of `object`.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Object\n * @param {Object} object The object to query.\n * @param {Array|string} path The path to check.\n * @returns {boolean} Returns `true` if `path` exists, else `false`.\n * @example\n *\n * var object = _.create({ 'a': _.create({ 'b': 2 }) });\n *\n * _.hasIn(object, 'a');\n * // => true\n *\n * _.hasIn(object, 'a.b');\n * // => true\n *\n * _.hasIn(object, ['a', 'b']);\n * // => true\n *\n * _.hasIn(object, 'b');\n * // => false\n */\nfunction hasIn(object, path) {\n  return object != null && hasPath(object, path, baseHasIn);\n}\n\nmodule.exports = hasIn;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/hasIn.js?");

/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This method returns the first argument it receives.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Util\n * @param {*} value Any value.\n * @returns {*} Returns `value`.\n * @example\n *\n * var object = { 'a': 1 };\n *\n * console.log(_.identity(object) === object);\n * // => true\n */\nfunction identity(value) {\n  return value;\n}\n\nmodule.exports = identity;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/identity.js?");

/***/ }),

/***/ "./node_modules/lodash/intersection.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/intersection.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayMap = __webpack_require__(/*! ./_arrayMap */ \"./node_modules/lodash/_arrayMap.js\"),\n    baseIntersection = __webpack_require__(/*! ./_baseIntersection */ \"./node_modules/lodash/_baseIntersection.js\"),\n    baseRest = __webpack_require__(/*! ./_baseRest */ \"./node_modules/lodash/_baseRest.js\"),\n    castArrayLikeObject = __webpack_require__(/*! ./_castArrayLikeObject */ \"./node_modules/lodash/_castArrayLikeObject.js\");\n\n/**\n * Creates an array of unique values that are included in all given arrays\n * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * for equality comparisons. The order and references of result values are\n * determined by the first array.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Array\n * @param {...Array} [arrays] The arrays to inspect.\n * @returns {Array} Returns the new array of intersecting values.\n * @example\n *\n * _.intersection([2, 1], [2, 3]);\n * // => [2]\n */\nvar intersection = baseRest(function(arrays) {\n  var mapped = arrayMap(arrays, castArrayLikeObject);\n  return (mapped.length && mapped[0] === arrays[0])\n    ? baseIntersection(mapped)\n    : [];\n});\n\nmodule.exports = intersection;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/intersection.js?");

/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ \"./node_modules/lodash/_baseIsArguments.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Built-in value references. */\nvar propertyIsEnumerable = objectProto.propertyIsEnumerable;\n\n/**\n * Checks if `value` is likely an `arguments` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an `arguments` object,\n *  else `false`.\n * @example\n *\n * _.isArguments(function() { return arguments; }());\n * // => true\n *\n * _.isArguments([1, 2, 3]);\n * // => false\n */\nvar isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {\n  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&\n    !propertyIsEnumerable.call(value, 'callee');\n};\n\nmodule.exports = isArguments;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/isArguments.js?");

/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is classified as an `Array` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array, else `false`.\n * @example\n *\n * _.isArray([1, 2, 3]);\n * // => true\n *\n * _.isArray(document.body.children);\n * // => false\n *\n * _.isArray('abc');\n * // => false\n *\n * _.isArray(_.noop);\n * // => false\n */\nvar isArray = Array.isArray;\n\nmodule.exports = isArray;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/isArray.js?");

/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isFunction = __webpack_require__(/*! ./isFunction */ \"./node_modules/lodash/isFunction.js\"),\n    isLength = __webpack_require__(/*! ./isLength */ \"./node_modules/lodash/isLength.js\");\n\n/**\n * Checks if `value` is array-like. A value is considered array-like if it's\n * not a function and has a `value.length` that's an integer greater than or\n * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is array-like, else `false`.\n * @example\n *\n * _.isArrayLike([1, 2, 3]);\n * // => true\n *\n * _.isArrayLike(document.body.children);\n * // => true\n *\n * _.isArrayLike('abc');\n * // => true\n *\n * _.isArrayLike(_.noop);\n * // => false\n */\nfunction isArrayLike(value) {\n  return value != null && isLength(value.length) && !isFunction(value);\n}\n\nmodule.exports = isArrayLike;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/isArrayLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isArrayLikeObject.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/isArrayLikeObject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isArrayLike = __webpack_require__(/*! ./isArrayLike */ \"./node_modules/lodash/isArrayLike.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/**\n * This method is like `_.isArrayLike` except that it also checks if `value`\n * is an object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array-like object,\n *  else `false`.\n * @example\n *\n * _.isArrayLikeObject([1, 2, 3]);\n * // => true\n *\n * _.isArrayLikeObject(document.body.children);\n * // => true\n *\n * _.isArrayLikeObject('abc');\n * // => false\n *\n * _.isArrayLikeObject(_.noop);\n * // => false\n */\nfunction isArrayLikeObject(value) {\n  return isObjectLike(value) && isArrayLike(value);\n}\n\nmodule.exports = isArrayLikeObject;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/isArrayLikeObject.js?");

/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\"),\n    stubFalse = __webpack_require__(/*! ./stubFalse */ \"./node_modules/lodash/stubFalse.js\");\n\n/** Detect free variable `exports`. */\nvar freeExports =  true && exports && !exports.nodeType && exports;\n\n/** Detect free variable `module`. */\nvar freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;\n\n/** Detect the popular CommonJS extension `module.exports`. */\nvar moduleExports = freeModule && freeModule.exports === freeExports;\n\n/** Built-in value references. */\nvar Buffer = moduleExports ? root.Buffer : undefined;\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;\n\n/**\n * Checks if `value` is a buffer.\n *\n * @static\n * @memberOf _\n * @since 4.3.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.\n * @example\n *\n * _.isBuffer(new Buffer(2));\n * // => true\n *\n * _.isBuffer(new Uint8Array(2));\n * // => false\n */\nvar isBuffer = nativeIsBuffer || stubFalse;\n\nmodule.exports = isBuffer;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/isBuffer.js?");

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n\n/** `Object#toString` result references. */\nvar asyncTag = '[object AsyncFunction]',\n    funcTag = '[object Function]',\n    genTag = '[object GeneratorFunction]',\n    proxyTag = '[object Proxy]';\n\n/**\n * Checks if `value` is classified as a `Function` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a function, else `false`.\n * @example\n *\n * _.isFunction(_);\n * // => true\n *\n * _.isFunction(/abc/);\n * // => false\n */\nfunction isFunction(value) {\n  if (!isObject(value)) {\n    return false;\n  }\n  // The use of `Object#toString` avoids issues with the `typeof` operator\n  // in Safari 9 which returns 'object' for typed arrays and other constructors.\n  var tag = baseGetTag(value);\n  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;\n}\n\nmodule.exports = isFunction;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/isFunction.js?");

/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used as references for various `Number` constants. */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/**\n * Checks if `value` is a valid array-like length.\n *\n * **Note:** This method is loosely based on\n * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.\n * @example\n *\n * _.isLength(3);\n * // => true\n *\n * _.isLength(Number.MIN_VALUE);\n * // => false\n *\n * _.isLength(Infinity);\n * // => false\n *\n * _.isLength('3');\n * // => false\n */\nfunction isLength(value) {\n  return typeof value == 'number' &&\n    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;\n}\n\nmodule.exports = isLength;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/isLength.js?");

/***/ }),

/***/ "./node_modules/lodash/isMap.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isMap.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsMap = __webpack_require__(/*! ./_baseIsMap */ \"./node_modules/lodash/_baseIsMap.js\"),\n    baseUnary = __webpack_require__(/*! ./_baseUnary */ \"./node_modules/lodash/_baseUnary.js\"),\n    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ \"./node_modules/lodash/_nodeUtil.js\");\n\n/* Node.js helper references. */\nvar nodeIsMap = nodeUtil && nodeUtil.isMap;\n\n/**\n * Checks if `value` is classified as a `Map` object.\n *\n * @static\n * @memberOf _\n * @since 4.3.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a map, else `false`.\n * @example\n *\n * _.isMap(new Map);\n * // => true\n *\n * _.isMap(new WeakMap);\n * // => false\n */\nvar isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;\n\nmodule.exports = isMap;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/isMap.js?");

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return value != null && (type == 'object' || type == 'function');\n}\n\nmodule.exports = isObject;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/isObject.js?");

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return value != null && typeof value == 'object';\n}\n\nmodule.exports = isObjectLike;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/isObjectLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/isPlainObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    getPrototype = __webpack_require__(/*! ./_getPrototype */ \"./node_modules/lodash/_getPrototype.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar objectTag = '[object Object]';\n\n/** Used for built-in method references. */\nvar funcProto = Function.prototype,\n    objectProto = Object.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Used to infer the `Object` constructor. */\nvar objectCtorString = funcToString.call(Object);\n\n/**\n * Checks if `value` is a plain object, that is, an object created by the\n * `Object` constructor or one with a `[[Prototype]]` of `null`.\n *\n * @static\n * @memberOf _\n * @since 0.8.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n * }\n *\n * _.isPlainObject(new Foo);\n * // => false\n *\n * _.isPlainObject([1, 2, 3]);\n * // => false\n *\n * _.isPlainObject({ 'x': 0, 'y': 0 });\n * // => true\n *\n * _.isPlainObject(Object.create(null));\n * // => true\n */\nfunction isPlainObject(value) {\n  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {\n    return false;\n  }\n  var proto = getPrototype(value);\n  if (proto === null) {\n    return true;\n  }\n  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;\n  return typeof Ctor == 'function' && Ctor instanceof Ctor &&\n    funcToString.call(Ctor) == objectCtorString;\n}\n\nmodule.exports = isPlainObject;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/isPlainObject.js?");

/***/ }),

/***/ "./node_modules/lodash/isSet.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isSet.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsSet = __webpack_require__(/*! ./_baseIsSet */ \"./node_modules/lodash/_baseIsSet.js\"),\n    baseUnary = __webpack_require__(/*! ./_baseUnary */ \"./node_modules/lodash/_baseUnary.js\"),\n    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ \"./node_modules/lodash/_nodeUtil.js\");\n\n/* Node.js helper references. */\nvar nodeIsSet = nodeUtil && nodeUtil.isSet;\n\n/**\n * Checks if `value` is classified as a `Set` object.\n *\n * @static\n * @memberOf _\n * @since 4.3.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a set, else `false`.\n * @example\n *\n * _.isSet(new Set);\n * // => true\n *\n * _.isSet(new WeakSet);\n * // => false\n */\nvar isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;\n\nmodule.exports = isSet;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/isSet.js?");

/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar symbolTag = '[object Symbol]';\n\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\nfunction isSymbol(value) {\n  return typeof value == 'symbol' ||\n    (isObjectLike(value) && baseGetTag(value) == symbolTag);\n}\n\nmodule.exports = isSymbol;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/isSymbol.js?");

/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ \"./node_modules/lodash/_baseIsTypedArray.js\"),\n    baseUnary = __webpack_require__(/*! ./_baseUnary */ \"./node_modules/lodash/_baseUnary.js\"),\n    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ \"./node_modules/lodash/_nodeUtil.js\");\n\n/* Node.js helper references. */\nvar nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;\n\n/**\n * Checks if `value` is classified as a typed array.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.\n * @example\n *\n * _.isTypedArray(new Uint8Array);\n * // => true\n *\n * _.isTypedArray([]);\n * // => false\n */\nvar isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;\n\nmodule.exports = isTypedArray;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/isTypedArray.js?");

/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ \"./node_modules/lodash/_arrayLikeKeys.js\"),\n    baseKeys = __webpack_require__(/*! ./_baseKeys */ \"./node_modules/lodash/_baseKeys.js\"),\n    isArrayLike = __webpack_require__(/*! ./isArrayLike */ \"./node_modules/lodash/isArrayLike.js\");\n\n/**\n * Creates an array of the own enumerable property names of `object`.\n *\n * **Note:** Non-object values are coerced to objects. See the\n * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)\n * for more details.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Object\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n *   this.b = 2;\n * }\n *\n * Foo.prototype.c = 3;\n *\n * _.keys(new Foo);\n * // => ['a', 'b'] (iteration order is not guaranteed)\n *\n * _.keys('hi');\n * // => ['0', '1']\n */\nfunction keys(object) {\n  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);\n}\n\nmodule.exports = keys;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/keys.js?");

/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ \"./node_modules/lodash/_arrayLikeKeys.js\"),\n    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ \"./node_modules/lodash/_baseKeysIn.js\"),\n    isArrayLike = __webpack_require__(/*! ./isArrayLike */ \"./node_modules/lodash/isArrayLike.js\");\n\n/**\n * Creates an array of the own and inherited enumerable property names of `object`.\n *\n * **Note:** Non-object values are coerced to objects.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category Object\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n *   this.b = 2;\n * }\n *\n * Foo.prototype.c = 3;\n *\n * _.keysIn(new Foo);\n * // => ['a', 'b', 'c'] (iteration order is not guaranteed)\n */\nfunction keysIn(object) {\n  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);\n}\n\nmodule.exports = keysIn;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/keysIn.js?");

/***/ }),

/***/ "./node_modules/lodash/map.js":
/*!************************************!*\
  !*** ./node_modules/lodash/map.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayMap = __webpack_require__(/*! ./_arrayMap */ \"./node_modules/lodash/_arrayMap.js\"),\n    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ \"./node_modules/lodash/_baseIteratee.js\"),\n    baseMap = __webpack_require__(/*! ./_baseMap */ \"./node_modules/lodash/_baseMap.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\");\n\n/**\n * Creates an array of values by running each element in `collection` thru\n * `iteratee`. The iteratee is invoked with three arguments:\n * (value, index|key, collection).\n *\n * Many lodash methods are guarded to work as iteratees for methods like\n * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.\n *\n * The guarded methods are:\n * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,\n * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,\n * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,\n * `template`, `trim`, `trimEnd`, `trimStart`, and `words`\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Collection\n * @param {Array|Object} collection The collection to iterate over.\n * @param {Function} [iteratee=_.identity] The function invoked per iteration.\n * @returns {Array} Returns the new mapped array.\n * @example\n *\n * function square(n) {\n *   return n * n;\n * }\n *\n * _.map([4, 8], square);\n * // => [16, 64]\n *\n * _.map({ 'a': 4, 'b': 8 }, square);\n * // => [16, 64] (iteration order is not guaranteed)\n *\n * var users = [\n *   { 'user': 'barney' },\n *   { 'user': 'fred' }\n * ];\n *\n * // The `_.property` iteratee shorthand.\n * _.map(users, 'user');\n * // => ['barney', 'fred']\n */\nfunction map(collection, iteratee) {\n  var func = isArray(collection) ? arrayMap : baseMap;\n  return func(collection, baseIteratee(iteratee, 3));\n}\n\nmodule.exports = map;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/map.js?");

/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var MapCache = __webpack_require__(/*! ./_MapCache */ \"./node_modules/lodash/_MapCache.js\");\n\n/** Error message constants. */\nvar FUNC_ERROR_TEXT = 'Expected a function';\n\n/**\n * Creates a function that memoizes the result of `func`. If `resolver` is\n * provided, it determines the cache key for storing the result based on the\n * arguments provided to the memoized function. By default, the first argument\n * provided to the memoized function is used as the map cache key. The `func`\n * is invoked with the `this` binding of the memoized function.\n *\n * **Note:** The cache is exposed as the `cache` property on the memoized\n * function. Its creation may be customized by replacing the `_.memoize.Cache`\n * constructor with one whose instances implement the\n * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)\n * method interface of `clear`, `delete`, `get`, `has`, and `set`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Function\n * @param {Function} func The function to have its output memoized.\n * @param {Function} [resolver] The function to resolve the cache key.\n * @returns {Function} Returns the new memoized function.\n * @example\n *\n * var object = { 'a': 1, 'b': 2 };\n * var other = { 'c': 3, 'd': 4 };\n *\n * var values = _.memoize(_.values);\n * values(object);\n * // => [1, 2]\n *\n * values(other);\n * // => [3, 4]\n *\n * object.a = 2;\n * values(object);\n * // => [1, 2]\n *\n * // Modify the result cache.\n * values.cache.set(object, ['a', 'b']);\n * values(object);\n * // => ['a', 'b']\n *\n * // Replace `_.memoize.Cache`.\n * _.memoize.Cache = WeakMap;\n */\nfunction memoize(func, resolver) {\n  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {\n    throw new TypeError(FUNC_ERROR_TEXT);\n  }\n  var memoized = function() {\n    var args = arguments,\n        key = resolver ? resolver.apply(this, args) : args[0],\n        cache = memoized.cache;\n\n    if (cache.has(key)) {\n      return cache.get(key);\n    }\n    var result = func.apply(this, args);\n    memoized.cache = cache.set(key, result) || cache;\n    return result;\n  };\n  memoized.cache = new (memoize.Cache || MapCache);\n  return memoized;\n}\n\n// Expose `MapCache`.\nmemoize.Cache = MapCache;\n\nmodule.exports = memoize;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/memoize.js?");

/***/ }),

/***/ "./node_modules/lodash/merge.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/merge.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseMerge = __webpack_require__(/*! ./_baseMerge */ \"./node_modules/lodash/_baseMerge.js\"),\n    createAssigner = __webpack_require__(/*! ./_createAssigner */ \"./node_modules/lodash/_createAssigner.js\");\n\n/**\n * This method is like `_.assign` except that it recursively merges own and\n * inherited enumerable string keyed properties of source objects into the\n * destination object. Source properties that resolve to `undefined` are\n * skipped if a destination value exists. Array and plain object properties\n * are merged recursively. Other objects and value types are overridden by\n * assignment. Source objects are applied from left to right. Subsequent\n * sources overwrite property assignments of previous sources.\n *\n * **Note:** This method mutates `object`.\n *\n * @static\n * @memberOf _\n * @since 0.5.0\n * @category Object\n * @param {Object} object The destination object.\n * @param {...Object} [sources] The source objects.\n * @returns {Object} Returns `object`.\n * @example\n *\n * var object = {\n *   'a': [{ 'b': 2 }, { 'd': 4 }]\n * };\n *\n * var other = {\n *   'a': [{ 'c': 3 }, { 'e': 5 }]\n * };\n *\n * _.merge(object, other);\n * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }\n */\nvar merge = createAssigner(function(object, source, srcIndex) {\n  baseMerge(object, source, srcIndex);\n});\n\nmodule.exports = merge;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/merge.js?");

/***/ }),

/***/ "./node_modules/lodash/mergeWith.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/mergeWith.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseMerge = __webpack_require__(/*! ./_baseMerge */ \"./node_modules/lodash/_baseMerge.js\"),\n    createAssigner = __webpack_require__(/*! ./_createAssigner */ \"./node_modules/lodash/_createAssigner.js\");\n\n/**\n * This method is like `_.merge` except that it accepts `customizer` which\n * is invoked to produce the merged values of the destination and source\n * properties. If `customizer` returns `undefined`, merging is handled by the\n * method instead. The `customizer` is invoked with six arguments:\n * (objValue, srcValue, key, object, source, stack).\n *\n * **Note:** This method mutates `object`.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Object\n * @param {Object} object The destination object.\n * @param {...Object} sources The source objects.\n * @param {Function} customizer The function to customize assigned values.\n * @returns {Object} Returns `object`.\n * @example\n *\n * function customizer(objValue, srcValue) {\n *   if (_.isArray(objValue)) {\n *     return objValue.concat(srcValue);\n *   }\n * }\n *\n * var object = { 'a': [1], 'b': [2] };\n * var other = { 'a': [3], 'b': [4] };\n *\n * _.mergeWith(object, other, customizer);\n * // => { 'a': [1, 3], 'b': [2, 4] }\n */\nvar mergeWith = createAssigner(function(object, source, srcIndex, customizer) {\n  baseMerge(object, source, srcIndex, customizer);\n});\n\nmodule.exports = mergeWith;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/mergeWith.js?");

/***/ }),

/***/ "./node_modules/lodash/multiply.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/multiply.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var createMathOperation = __webpack_require__(/*! ./_createMathOperation */ \"./node_modules/lodash/_createMathOperation.js\");\n\n/**\n * Multiply two numbers.\n *\n * @static\n * @memberOf _\n * @since 4.7.0\n * @category Math\n * @param {number} multiplier The first number in a multiplication.\n * @param {number} multiplicand The second number in a multiplication.\n * @returns {number} Returns the product.\n * @example\n *\n * _.multiply(6, 4);\n * // => 24\n */\nvar multiply = createMathOperation(function(multiplier, multiplicand) {\n  return multiplier * multiplicand;\n}, 1);\n\nmodule.exports = multiply;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/multiply.js?");

/***/ }),

/***/ "./node_modules/lodash/property.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/property.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseProperty = __webpack_require__(/*! ./_baseProperty */ \"./node_modules/lodash/_baseProperty.js\"),\n    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ \"./node_modules/lodash/_basePropertyDeep.js\"),\n    isKey = __webpack_require__(/*! ./_isKey */ \"./node_modules/lodash/_isKey.js\"),\n    toKey = __webpack_require__(/*! ./_toKey */ \"./node_modules/lodash/_toKey.js\");\n\n/**\n * Creates a function that returns the value at `path` of a given object.\n *\n * @static\n * @memberOf _\n * @since 2.4.0\n * @category Util\n * @param {Array|string} path The path of the property to get.\n * @returns {Function} Returns the new accessor function.\n * @example\n *\n * var objects = [\n *   { 'a': { 'b': 2 } },\n *   { 'a': { 'b': 1 } }\n * ];\n *\n * _.map(objects, _.property('a.b'));\n * // => [2, 1]\n *\n * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');\n * // => [1, 2]\n */\nfunction property(path) {\n  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);\n}\n\nmodule.exports = property;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/property.js?");

/***/ }),

/***/ "./node_modules/lodash/pull.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/pull.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseRest = __webpack_require__(/*! ./_baseRest */ \"./node_modules/lodash/_baseRest.js\"),\n    pullAll = __webpack_require__(/*! ./pullAll */ \"./node_modules/lodash/pullAll.js\");\n\n/**\n * Removes all given values from `array` using\n * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * for equality comparisons.\n *\n * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`\n * to remove elements from an array by predicate.\n *\n * @static\n * @memberOf _\n * @since 2.0.0\n * @category Array\n * @param {Array} array The array to modify.\n * @param {...*} [values] The values to remove.\n * @returns {Array} Returns `array`.\n * @example\n *\n * var array = ['a', 'b', 'c', 'a', 'b', 'c'];\n *\n * _.pull(array, 'a', 'c');\n * console.log(array);\n * // => ['b', 'b']\n */\nvar pull = baseRest(pullAll);\n\nmodule.exports = pull;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/pull.js?");

/***/ }),

/***/ "./node_modules/lodash/pullAll.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/pullAll.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var basePullAll = __webpack_require__(/*! ./_basePullAll */ \"./node_modules/lodash/_basePullAll.js\");\n\n/**\n * This method is like `_.pull` except that it accepts an array of values to remove.\n *\n * **Note:** Unlike `_.difference`, this method mutates `array`.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Array\n * @param {Array} array The array to modify.\n * @param {Array} values The values to remove.\n * @returns {Array} Returns `array`.\n * @example\n *\n * var array = ['a', 'b', 'c', 'a', 'b', 'c'];\n *\n * _.pullAll(array, ['a', 'c']);\n * console.log(array);\n * // => ['b', 'b']\n */\nfunction pullAll(array, values) {\n  return (array && array.length && values && values.length)\n    ? basePullAll(array, values)\n    : array;\n}\n\nmodule.exports = pullAll;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/pullAll.js?");

/***/ }),

/***/ "./node_modules/lodash/reduce.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/reduce.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayReduce = __webpack_require__(/*! ./_arrayReduce */ \"./node_modules/lodash/_arrayReduce.js\"),\n    baseEach = __webpack_require__(/*! ./_baseEach */ \"./node_modules/lodash/_baseEach.js\"),\n    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ \"./node_modules/lodash/_baseIteratee.js\"),\n    baseReduce = __webpack_require__(/*! ./_baseReduce */ \"./node_modules/lodash/_baseReduce.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\");\n\n/**\n * Reduces `collection` to a value which is the accumulated result of running\n * each element in `collection` thru `iteratee`, where each successive\n * invocation is supplied the return value of the previous. If `accumulator`\n * is not given, the first element of `collection` is used as the initial\n * value. The iteratee is invoked with four arguments:\n * (accumulator, value, index|key, collection).\n *\n * Many lodash methods are guarded to work as iteratees for methods like\n * `_.reduce`, `_.reduceRight`, and `_.transform`.\n *\n * The guarded methods are:\n * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,\n * and `sortBy`\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Collection\n * @param {Array|Object} collection The collection to iterate over.\n * @param {Function} [iteratee=_.identity] The function invoked per iteration.\n * @param {*} [accumulator] The initial value.\n * @returns {*} Returns the accumulated value.\n * @see _.reduceRight\n * @example\n *\n * _.reduce([1, 2], function(sum, n) {\n *   return sum + n;\n * }, 0);\n * // => 3\n *\n * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {\n *   (result[value] || (result[value] = [])).push(key);\n *   return result;\n * }, {});\n * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)\n */\nfunction reduce(collection, iteratee, accumulator) {\n  var func = isArray(collection) ? arrayReduce : baseReduce,\n      initAccum = arguments.length < 3;\n\n  return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);\n}\n\nmodule.exports = reduce;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/reduce.js?");

/***/ }),

/***/ "./node_modules/lodash/set.js":
/*!************************************!*\
  !*** ./node_modules/lodash/set.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseSet = __webpack_require__(/*! ./_baseSet */ \"./node_modules/lodash/_baseSet.js\");\n\n/**\n * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,\n * it's created. Arrays are created for missing index properties while objects\n * are created for all other missing properties. Use `_.setWith` to customize\n * `path` creation.\n *\n * **Note:** This method mutates `object`.\n *\n * @static\n * @memberOf _\n * @since 3.7.0\n * @category Object\n * @param {Object} object The object to modify.\n * @param {Array|string} path The path of the property to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns `object`.\n * @example\n *\n * var object = { 'a': [{ 'b': { 'c': 3 } }] };\n *\n * _.set(object, 'a[0].b.c', 4);\n * console.log(object.a[0].b.c);\n * // => 4\n *\n * _.set(object, ['x', '0', 'y', 'z'], 5);\n * console.log(object.x[0].y.z);\n * // => 5\n */\nfunction set(object, path, value) {\n  return object == null ? object : baseSet(object, path, value);\n}\n\nmodule.exports = set;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/set.js?");

/***/ }),

/***/ "./node_modules/lodash/sortBy.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/sortBy.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ \"./node_modules/lodash/_baseFlatten.js\"),\n    baseOrderBy = __webpack_require__(/*! ./_baseOrderBy */ \"./node_modules/lodash/_baseOrderBy.js\"),\n    baseRest = __webpack_require__(/*! ./_baseRest */ \"./node_modules/lodash/_baseRest.js\"),\n    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ \"./node_modules/lodash/_isIterateeCall.js\");\n\n/**\n * Creates an array of elements, sorted in ascending order by the results of\n * running each element in a collection thru each iteratee. This method\n * performs a stable sort, that is, it preserves the original sort order of\n * equal elements. The iteratees are invoked with one argument: (value).\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Collection\n * @param {Array|Object} collection The collection to iterate over.\n * @param {...(Function|Function[])} [iteratees=[_.identity]]\n *  The iteratees to sort by.\n * @returns {Array} Returns the new sorted array.\n * @example\n *\n * var users = [\n *   { 'user': 'fred',   'age': 48 },\n *   { 'user': 'barney', 'age': 36 },\n *   { 'user': 'fred',   'age': 40 },\n *   { 'user': 'barney', 'age': 34 }\n * ];\n *\n * _.sortBy(users, [function(o) { return o.user; }]);\n * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]\n *\n * _.sortBy(users, ['user', 'age']);\n * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]\n */\nvar sortBy = baseRest(function(collection, iteratees) {\n  if (collection == null) {\n    return [];\n  }\n  var length = iteratees.length;\n  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {\n    iteratees = [];\n  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {\n    iteratees = [iteratees[0]];\n  }\n  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);\n});\n\nmodule.exports = sortBy;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/sortBy.js?");

/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This method returns a new empty array.\n *\n * @static\n * @memberOf _\n * @since 4.13.0\n * @category Util\n * @returns {Array} Returns the new empty array.\n * @example\n *\n * var arrays = _.times(2, _.stubArray);\n *\n * console.log(arrays);\n * // => [[], []]\n *\n * console.log(arrays[0] === arrays[1]);\n * // => false\n */\nfunction stubArray() {\n  return [];\n}\n\nmodule.exports = stubArray;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/stubArray.js?");

/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This method returns `false`.\n *\n * @static\n * @memberOf _\n * @since 4.13.0\n * @category Util\n * @returns {boolean} Returns `false`.\n * @example\n *\n * _.times(2, _.stubFalse);\n * // => [false, false]\n */\nfunction stubFalse() {\n  return false;\n}\n\nmodule.exports = stubFalse;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/stubFalse.js?");

/***/ }),

/***/ "./node_modules/lodash/sum.js":
/*!************************************!*\
  !*** ./node_modules/lodash/sum.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseSum = __webpack_require__(/*! ./_baseSum */ \"./node_modules/lodash/_baseSum.js\"),\n    identity = __webpack_require__(/*! ./identity */ \"./node_modules/lodash/identity.js\");\n\n/**\n * Computes the sum of the values in `array`.\n *\n * @static\n * @memberOf _\n * @since 3.4.0\n * @category Math\n * @param {Array} array The array to iterate over.\n * @returns {number} Returns the sum.\n * @example\n *\n * _.sum([4, 2, 8, 6]);\n * // => 20\n */\nfunction sum(array) {\n  return (array && array.length)\n    ? baseSum(array, identity)\n    : 0;\n}\n\nmodule.exports = sum;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/sum.js?");

/***/ }),

/***/ "./node_modules/lodash/sumBy.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/sumBy.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIteratee = __webpack_require__(/*! ./_baseIteratee */ \"./node_modules/lodash/_baseIteratee.js\"),\n    baseSum = __webpack_require__(/*! ./_baseSum */ \"./node_modules/lodash/_baseSum.js\");\n\n/**\n * This method is like `_.sum` except that it accepts `iteratee` which is\n * invoked for each element in `array` to generate the value to be summed.\n * The iteratee is invoked with one argument: (value).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Math\n * @param {Array} array The array to iterate over.\n * @param {Function} [iteratee=_.identity] The iteratee invoked per element.\n * @returns {number} Returns the sum.\n * @example\n *\n * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];\n *\n * _.sumBy(objects, function(o) { return o.n; });\n * // => 20\n *\n * // The `_.property` iteratee shorthand.\n * _.sumBy(objects, 'n');\n * // => 20\n */\nfunction sumBy(array, iteratee) {\n  return (array && array.length)\n    ? baseSum(array, baseIteratee(iteratee, 2))\n    : 0;\n}\n\nmodule.exports = sumBy;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/sumBy.js?");

/***/ }),

/***/ "./node_modules/lodash/toFinite.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toFinite.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toNumber = __webpack_require__(/*! ./toNumber */ \"./node_modules/lodash/toNumber.js\");\n\n/** Used as references for various `Number` constants. */\nvar INFINITY = 1 / 0,\n    MAX_INTEGER = 1.7976931348623157e+308;\n\n/**\n * Converts `value` to a finite number.\n *\n * @static\n * @memberOf _\n * @since 4.12.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {number} Returns the converted number.\n * @example\n *\n * _.toFinite(3.2);\n * // => 3.2\n *\n * _.toFinite(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toFinite(Infinity);\n * // => 1.7976931348623157e+308\n *\n * _.toFinite('3.2');\n * // => 3.2\n */\nfunction toFinite(value) {\n  if (!value) {\n    return value === 0 ? value : 0;\n  }\n  value = toNumber(value);\n  if (value === INFINITY || value === -INFINITY) {\n    var sign = (value < 0 ? -1 : 1);\n    return sign * MAX_INTEGER;\n  }\n  return value === value ? value : 0;\n}\n\nmodule.exports = toFinite;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/toFinite.js?");

/***/ }),

/***/ "./node_modules/lodash/toInteger.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/toInteger.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toFinite = __webpack_require__(/*! ./toFinite */ \"./node_modules/lodash/toFinite.js\");\n\n/**\n * Converts `value` to an integer.\n *\n * **Note:** This method is loosely based on\n * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {number} Returns the converted integer.\n * @example\n *\n * _.toInteger(3.2);\n * // => 3\n *\n * _.toInteger(Number.MIN_VALUE);\n * // => 0\n *\n * _.toInteger(Infinity);\n * // => 1.7976931348623157e+308\n *\n * _.toInteger('3.2');\n * // => 3\n */\nfunction toInteger(value) {\n  var result = toFinite(value),\n      remainder = result % 1;\n\n  return result === result ? (remainder ? result - remainder : result) : 0;\n}\n\nmodule.exports = toInteger;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/toInteger.js?");

/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar NAN = 0 / 0;\n\n/** Used to match leading and trailing whitespace. */\nvar reTrim = /^\\s+|\\s+$/g;\n\n/** Used to detect bad signed hexadecimal string values. */\nvar reIsBadHex = /^[-+]0x[0-9a-f]+$/i;\n\n/** Used to detect binary string values. */\nvar reIsBinary = /^0b[01]+$/i;\n\n/** Used to detect octal string values. */\nvar reIsOctal = /^0o[0-7]+$/i;\n\n/** Built-in method references without a dependency on `root`. */\nvar freeParseInt = parseInt;\n\n/**\n * Converts `value` to a number.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to process.\n * @returns {number} Returns the number.\n * @example\n *\n * _.toNumber(3.2);\n * // => 3.2\n *\n * _.toNumber(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toNumber(Infinity);\n * // => Infinity\n *\n * _.toNumber('3.2');\n * // => 3.2\n */\nfunction toNumber(value) {\n  if (typeof value == 'number') {\n    return value;\n  }\n  if (isSymbol(value)) {\n    return NAN;\n  }\n  if (isObject(value)) {\n    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;\n    value = isObject(other) ? (other + '') : other;\n  }\n  if (typeof value != 'string') {\n    return value === 0 ? value : +value;\n  }\n  value = value.replace(reTrim, '');\n  var isBinary = reIsBinary.test(value);\n  return (isBinary || reIsOctal.test(value))\n    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)\n    : (reIsBadHex.test(value) ? NAN : +value);\n}\n\nmodule.exports = toNumber;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/toNumber.js?");

/***/ }),

/***/ "./node_modules/lodash/toPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/toPlainObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var copyObject = __webpack_require__(/*! ./_copyObject */ \"./node_modules/lodash/_copyObject.js\"),\n    keysIn = __webpack_require__(/*! ./keysIn */ \"./node_modules/lodash/keysIn.js\");\n\n/**\n * Converts `value` to a plain object flattening inherited enumerable string\n * keyed properties of `value` to own properties of the plain object.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {Object} Returns the converted plain object.\n * @example\n *\n * function Foo() {\n *   this.b = 2;\n * }\n *\n * Foo.prototype.c = 3;\n *\n * _.assign({ 'a': 1 }, new Foo);\n * // => { 'a': 1, 'b': 2 }\n *\n * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));\n * // => { 'a': 1, 'b': 2, 'c': 3 }\n */\nfunction toPlainObject(value) {\n  return copyObject(value, keysIn(value));\n}\n\nmodule.exports = toPlainObject;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/toPlainObject.js?");

/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseToString = __webpack_require__(/*! ./_baseToString */ \"./node_modules/lodash/_baseToString.js\");\n\n/**\n * Converts `value` to a string. An empty string is returned for `null`\n * and `undefined` values. The sign of `-0` is preserved.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n * @example\n *\n * _.toString(null);\n * // => ''\n *\n * _.toString(-0);\n * // => '-0'\n *\n * _.toString([1, 2, 3]);\n * // => '1,2,3'\n */\nfunction toString(value) {\n  return value == null ? '' : baseToString(value);\n}\n\nmodule.exports = toString;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/toString.js?");

/***/ }),

/***/ "./node_modules/lodash/toUpper.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/toUpper.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toString = __webpack_require__(/*! ./toString */ \"./node_modules/lodash/toString.js\");\n\n/**\n * Converts `string`, as a whole, to upper case just like\n * [String#toUpperCase](https://mdn.io/toUpperCase).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category String\n * @param {string} [string=''] The string to convert.\n * @returns {string} Returns the upper cased string.\n * @example\n *\n * _.toUpper('--foo-bar--');\n * // => '--FOO-BAR--'\n *\n * _.toUpper('fooBar');\n * // => 'FOOBAR'\n *\n * _.toUpper('__foo_bar__');\n * // => '__FOO_BAR__'\n */\nfunction toUpper(value) {\n  return toString(value).toUpperCase();\n}\n\nmodule.exports = toUpper;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/toUpper.js?");

/***/ }),

/***/ "./node_modules/lodash/trim.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/trim.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseToString = __webpack_require__(/*! ./_baseToString */ \"./node_modules/lodash/_baseToString.js\"),\n    castSlice = __webpack_require__(/*! ./_castSlice */ \"./node_modules/lodash/_castSlice.js\"),\n    charsEndIndex = __webpack_require__(/*! ./_charsEndIndex */ \"./node_modules/lodash/_charsEndIndex.js\"),\n    charsStartIndex = __webpack_require__(/*! ./_charsStartIndex */ \"./node_modules/lodash/_charsStartIndex.js\"),\n    stringToArray = __webpack_require__(/*! ./_stringToArray */ \"./node_modules/lodash/_stringToArray.js\"),\n    toString = __webpack_require__(/*! ./toString */ \"./node_modules/lodash/toString.js\");\n\n/** Used to match leading and trailing whitespace. */\nvar reTrim = /^\\s+|\\s+$/g;\n\n/**\n * Removes leading and trailing whitespace or specified characters from `string`.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category String\n * @param {string} [string=''] The string to trim.\n * @param {string} [chars=whitespace] The characters to trim.\n * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.\n * @returns {string} Returns the trimmed string.\n * @example\n *\n * _.trim('  abc  ');\n * // => 'abc'\n *\n * _.trim('-_-abc-_-', '_-');\n * // => 'abc'\n *\n * _.map(['  foo  ', '  bar  '], _.trim);\n * // => ['foo', 'bar']\n */\nfunction trim(string, chars, guard) {\n  string = toString(string);\n  if (string && (guard || chars === undefined)) {\n    return string.replace(reTrim, '');\n  }\n  if (!string || !(chars = baseToString(chars))) {\n    return string;\n  }\n  var strSymbols = stringToArray(string),\n      chrSymbols = stringToArray(chars),\n      start = charsStartIndex(strSymbols, chrSymbols),\n      end = charsEndIndex(strSymbols, chrSymbols) + 1;\n\n  return castSlice(strSymbols, start, end).join('');\n}\n\nmodule.exports = trim;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/trim.js?");

/***/ }),

/***/ "./node_modules/lodash/zipObject.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/zipObject.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assignValue = __webpack_require__(/*! ./_assignValue */ \"./node_modules/lodash/_assignValue.js\"),\n    baseZipObject = __webpack_require__(/*! ./_baseZipObject */ \"./node_modules/lodash/_baseZipObject.js\");\n\n/**\n * This method is like `_.fromPairs` except that it accepts two arrays,\n * one of property identifiers and one of corresponding values.\n *\n * @static\n * @memberOf _\n * @since 0.4.0\n * @category Array\n * @param {Array} [props=[]] The property identifiers.\n * @param {Array} [values=[]] The property values.\n * @returns {Object} Returns the new object.\n * @example\n *\n * _.zipObject(['a', 'b'], [1, 2]);\n * // => { 'a': 1, 'b': 2 }\n */\nfunction zipObject(props, values) {\n  return baseZipObject(props || [], values || [], assignValue);\n}\n\nmodule.exports = zipObject;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/zipObject.js?");

/***/ }),

/***/ "./node_modules/riot/riot.js":
/*!***********************************!*\
  !*** ./node_modules/riot/riot.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(riot) {/* Riot v3.13.2, @license MIT */\n(function (global, factory) {\n   true ? factory(exports) :\n  undefined;\n}(this, (function (exports) { 'use strict';\n\n  /**\n   * Shorter and fast way to select a single node in the DOM\n   * @param   { String } selector - unique dom selector\n   * @param   { Object } ctx - DOM node where the target of our search will is located\n   * @returns { Object } dom node found\n   */\n  function $(selector, ctx) {\n    return (ctx || document).querySelector(selector)\n  }\n\n  var\n    // be aware, internal usage\n    // ATTENTION: prefix the global dynamic variables with `__`\n    // tags instances cache\n    __TAGS_CACHE = [],\n    // tags implementation cache\n    __TAG_IMPL = {},\n    YIELD_TAG = 'yield',\n\n    /**\n     * Const\n     */\n    GLOBAL_MIXIN = '__global_mixin',\n\n    // riot specific prefixes or attributes\n    ATTRS_PREFIX = 'riot-',\n\n    // Riot Directives\n    REF_DIRECTIVES = ['ref', 'data-ref'],\n    IS_DIRECTIVE = 'data-is',\n    CONDITIONAL_DIRECTIVE = 'if',\n    LOOP_DIRECTIVE = 'each',\n    LOOP_NO_REORDER_DIRECTIVE = 'no-reorder',\n    SHOW_DIRECTIVE = 'show',\n    HIDE_DIRECTIVE = 'hide',\n    KEY_DIRECTIVE = 'key',\n    RIOT_EVENTS_KEY = '__riot-events__',\n\n    // for typeof == '' comparisons\n    T_STRING = 'string',\n    T_OBJECT = 'object',\n    T_UNDEF  = 'undefined',\n    T_FUNCTION = 'function',\n\n    XLINK_NS = 'http://www.w3.org/1999/xlink',\n    SVG_NS = 'http://www.w3.org/2000/svg',\n    XLINK_REGEX = /^xlink:(\\w+)/,\n\n    WIN = typeof window === T_UNDEF ? /* istanbul ignore next */ undefined : window,\n\n    // special native tags that cannot be treated like the others\n    RE_SPECIAL_TAGS = /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/,\n    RE_SPECIAL_TAGS_NO_OPTION = /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/,\n    RE_EVENTS_PREFIX = /^on/,\n    RE_HTML_ATTRS = /([-\\w]+) ?= ?(?:\"([^\"]*)|'([^']*)|({[^}]*}))/g,\n    // some DOM attributes must be normalized\n    CASE_SENSITIVE_ATTRIBUTES = {\n      'viewbox': 'viewBox',\n      'preserveaspectratio': 'preserveAspectRatio'\n    },\n    /**\n     * Matches boolean HTML attributes in the riot tag definition.\n     * With a long list like this, a regex is faster than `[].indexOf` in most browsers.\n     * @const {RegExp}\n     * @see [attributes.md](https://github.com/riot/compiler/blob/dev/doc/attributes.md)\n     */\n    RE_BOOL_ATTRS = /^(?:disabled|checked|readonly|required|allowfullscreen|auto(?:focus|play)|compact|controls|default|formnovalidate|hidden|ismap|itemscope|loop|multiple|muted|no(?:resize|shade|validate|wrap)?|open|reversed|seamless|selected|sortable|truespeed|typemustmatch)$/,\n    // version# for IE 8-11, 0 for others\n    IE_VERSION = (WIN && WIN.document || /* istanbul ignore next */ {}).documentMode | 0;\n\n  /**\n   * Create a generic DOM node\n   * @param   { String } name - name of the DOM node we want to create\n   * @returns { Object } DOM node just created\n   */\n  function makeElement(name) {\n    return name === 'svg' ? document.createElementNS(SVG_NS, name) : document.createElement(name)\n  }\n\n  /**\n   * Set any DOM attribute\n   * @param { Object } dom - DOM node we want to update\n   * @param { String } name - name of the property we want to set\n   * @param { String } val - value of the property we want to set\n   */\n  function setAttribute(dom, name, val) {\n    var xlink = XLINK_REGEX.exec(name);\n    if (xlink && xlink[1])\n      { dom.setAttributeNS(XLINK_NS, xlink[1], val); }\n    else\n      { dom.setAttribute(name, val); }\n  }\n\n  var styleNode;\n  // Create cache and shortcut to the correct property\n  var cssTextProp;\n  var byName = {};\n  var needsInject = false;\n\n  // skip the following code on the server\n  if (WIN) {\n    styleNode = ((function () {\n      // create a new style element with the correct type\n      var newNode = makeElement('style');\n      // replace any user node or insert the new one into the head\n      var userNode = $('style[type=riot]');\n\n      setAttribute(newNode, 'type', 'text/css');\n      /* istanbul ignore next */\n      if (userNode) {\n        if (userNode.id) { newNode.id = userNode.id; }\n        userNode.parentNode.replaceChild(newNode, userNode);\n      } else { document.head.appendChild(newNode); }\n\n      return newNode\n    }))();\n    cssTextProp = styleNode.styleSheet;\n  }\n\n  /**\n   * Object that will be used to inject and manage the css of every tag instance\n   */\n  var styleManager = {\n    styleNode: styleNode,\n    /**\n     * Save a tag style to be later injected into DOM\n     * @param { String } css - css string\n     * @param { String } name - if it's passed we will map the css to a tagname\n     */\n    add: function add(css, name) {\n      byName[name] = css;\n      needsInject = true;\n    },\n    /**\n     * Inject all previously saved tag styles into DOM\n     * innerHTML seems slow: http://jsperf.com/riot-insert-style\n     */\n    inject: function inject() {\n      if (!WIN || !needsInject) { return }\n      needsInject = false;\n      var style = Object.keys(byName)\n        .map(function (k) { return byName[k]; })\n        .join('\\n');\n      /* istanbul ignore next */\n      if (cssTextProp) { cssTextProp.cssText = style; }\n      else { styleNode.innerHTML = style; }\n    },\n\n    /**\n     * Remove a tag style of injected DOM later.\n     * @param {String} name a registered tagname\n     */\n    remove: function remove(name) {\n      delete byName[name];\n      needsInject = true;\n    }\n  };\n\n  /**\n   * The riot template engine\n   * @version v3.0.8\n   */\n\n  /* istanbul ignore next */\n  var skipRegex = (function () { //eslint-disable-line no-unused-vars\n\n    var beforeReChars = '[{(,;:?=|&!^~>%*/';\n\n    var beforeReWords = [\n      'case',\n      'default',\n      'do',\n      'else',\n      'in',\n      'instanceof',\n      'prefix',\n      'return',\n      'typeof',\n      'void',\n      'yield'\n    ];\n\n    var wordsLastChar = beforeReWords.reduce(function (s, w) {\n      return s + w.slice(-1)\n    }, '');\n\n    var RE_REGEX = /^\\/(?=[^*>/])[^[/\\\\]*(?:(?:\\\\.|\\[(?:\\\\.|[^\\]\\\\]*)*\\])[^[\\\\/]*)*?\\/[gimuy]*/;\n    var RE_VN_CHAR = /[$\\w]/;\n\n    function prev (code, pos) {\n      while (--pos >= 0 && /\\s/.test(code[pos])){ }\n      return pos\n    }\n\n    function _skipRegex (code, start) {\n\n      var re = /.*/g;\n      var pos = re.lastIndex = start++;\n      var match = re.exec(code)[0].match(RE_REGEX);\n\n      if (match) {\n        var next = pos + match[0].length;\n\n        pos = prev(code, pos);\n        var c = code[pos];\n\n        if (pos < 0 || ~beforeReChars.indexOf(c)) {\n          return next\n        }\n\n        if (c === '.') {\n\n          if (code[pos - 1] === '.') {\n            start = next;\n          }\n\n        } else if (c === '+' || c === '-') {\n\n          if (code[--pos] !== c ||\n              (pos = prev(code, pos)) < 0 ||\n              !RE_VN_CHAR.test(code[pos])) {\n            start = next;\n          }\n\n        } else if (~wordsLastChar.indexOf(c)) {\n\n          var end = pos + 1;\n\n          while (--pos >= 0 && RE_VN_CHAR.test(code[pos])){ }\n          if (~beforeReWords.indexOf(code.slice(pos + 1, end))) {\n            start = next;\n          }\n        }\n      }\n\n      return start\n    }\n\n    return _skipRegex\n\n  })();\n\n  /**\n   * riot.util.brackets\n   *\n   * - `brackets    ` - Returns a string or regex based on its parameter\n   * - `brackets.set` - Change the current riot brackets\n   *\n   * @module\n   */\n\n  /* global riot */\n\n  /* istanbul ignore next */\n  var brackets = (function (UNDEF) {\n\n    var\n      REGLOB = 'g',\n\n      R_MLCOMMS = /\\/\\*[^*]*\\*+(?:[^*\\/][^*]*\\*+)*\\//g,\n\n      R_STRINGS = /\"[^\"\\\\]*(?:\\\\[\\S\\s][^\"\\\\]*)*\"|'[^'\\\\]*(?:\\\\[\\S\\s][^'\\\\]*)*'|`[^`\\\\]*(?:\\\\[\\S\\s][^`\\\\]*)*`/g,\n\n      S_QBLOCKS = R_STRINGS.source + '|' +\n        /(?:\\breturn\\s+|(?:[$\\w\\)\\]]|\\+\\+|--)\\s*(\\/)(?![*\\/]))/.source + '|' +\n        /\\/(?=[^*\\/])[^[\\/\\\\]*(?:(?:\\[(?:\\\\.|[^\\]\\\\]*)*\\]|\\\\.)[^[\\/\\\\]*)*?([^<]\\/)[gim]*/.source,\n\n      UNSUPPORTED = RegExp('[\\\\' + 'x00-\\\\x1F<>a-zA-Z0-9\\'\",;\\\\\\\\]'),\n\n      NEED_ESCAPE = /(?=[[\\]()*+?.^$|])/g,\n\n      S_QBLOCK2 = R_STRINGS.source + '|' + /(\\/)(?![*\\/])/.source,\n\n      FINDBRACES = {\n        '(': RegExp('([()])|'   + S_QBLOCK2, REGLOB),\n        '[': RegExp('([[\\\\]])|' + S_QBLOCK2, REGLOB),\n        '{': RegExp('([{}])|'   + S_QBLOCK2, REGLOB)\n      },\n\n      DEFAULT = '{ }';\n\n    var _pairs = [\n      '{', '}',\n      '{', '}',\n      /{[^}]*}/,\n      /\\\\([{}])/g,\n      /\\\\({)|{/g,\n      RegExp('\\\\\\\\(})|([[({])|(})|' + S_QBLOCK2, REGLOB),\n      DEFAULT,\n      /^\\s*{\\^?\\s*([$\\w]+)(?:\\s*,\\s*(\\S+))?\\s+in\\s+(\\S.*)\\s*}/,\n      /(^|[^\\\\]){=[\\S\\s]*?}/\n    ];\n\n    var\n      cachedBrackets = UNDEF,\n      _regex,\n      _cache = [],\n      _settings;\n\n    function _loopback (re) { return re }\n\n    function _rewrite (re, bp) {\n      if (!bp) { bp = _cache; }\n      return new RegExp(\n        re.source.replace(/{/g, bp[2]).replace(/}/g, bp[3]), re.global ? REGLOB : ''\n      )\n    }\n\n    function _create (pair) {\n      if (pair === DEFAULT) { return _pairs }\n\n      var arr = pair.split(' ');\n\n      if (arr.length !== 2 || UNSUPPORTED.test(pair)) {\n        throw new Error('Unsupported brackets \"' + pair + '\"')\n      }\n      arr = arr.concat(pair.replace(NEED_ESCAPE, '\\\\').split(' '));\n\n      arr[4] = _rewrite(arr[1].length > 1 ? /{[\\S\\s]*?}/ : _pairs[4], arr);\n      arr[5] = _rewrite(pair.length > 3 ? /\\\\({|})/g : _pairs[5], arr);\n      arr[6] = _rewrite(_pairs[6], arr);\n      arr[7] = RegExp('\\\\\\\\(' + arr[3] + ')|([[({])|(' + arr[3] + ')|' + S_QBLOCK2, REGLOB);\n      arr[8] = pair;\n      return arr\n    }\n\n    function _brackets (reOrIdx) {\n      return reOrIdx instanceof RegExp ? _regex(reOrIdx) : _cache[reOrIdx]\n    }\n\n    _brackets.split = function split (str, tmpl, _bp) {\n      // istanbul ignore next: _bp is for the compiler\n      if (!_bp) { _bp = _cache; }\n\n      var\n        parts = [],\n        match,\n        isexpr,\n        start,\n        pos,\n        re = _bp[6];\n\n      var qblocks = [];\n      var prevStr = '';\n      var mark, lastIndex;\n\n      isexpr = start = re.lastIndex = 0;\n\n      while ((match = re.exec(str))) {\n\n        lastIndex = re.lastIndex;\n        pos = match.index;\n\n        if (isexpr) {\n\n          if (match[2]) {\n\n            var ch = match[2];\n            var rech = FINDBRACES[ch];\n            var ix = 1;\n\n            rech.lastIndex = lastIndex;\n            while ((match = rech.exec(str))) {\n              if (match[1]) {\n                if (match[1] === ch) { ++ix; }\n                else if (!--ix) { break }\n              } else {\n                rech.lastIndex = pushQBlock(match.index, rech.lastIndex, match[2]);\n              }\n            }\n            re.lastIndex = ix ? str.length : rech.lastIndex;\n            continue\n          }\n\n          if (!match[3]) {\n            re.lastIndex = pushQBlock(pos, lastIndex, match[4]);\n            continue\n          }\n        }\n\n        if (!match[1]) {\n          unescapeStr(str.slice(start, pos));\n          start = re.lastIndex;\n          re = _bp[6 + (isexpr ^= 1)];\n          re.lastIndex = start;\n        }\n      }\n\n      if (str && start < str.length) {\n        unescapeStr(str.slice(start));\n      }\n\n      parts.qblocks = qblocks;\n\n      return parts\n\n      function unescapeStr (s) {\n        if (prevStr) {\n          s = prevStr + s;\n          prevStr = '';\n        }\n        if (tmpl || isexpr) {\n          parts.push(s && s.replace(_bp[5], '$1'));\n        } else {\n          parts.push(s);\n        }\n      }\n\n      function pushQBlock(_pos, _lastIndex, slash) { //eslint-disable-line\n        if (slash) {\n          _lastIndex = skipRegex(str, _pos);\n        }\n\n        if (tmpl && _lastIndex > _pos + 2) {\n          mark = '\\u2057' + qblocks.length + '~';\n          qblocks.push(str.slice(_pos, _lastIndex));\n          prevStr += str.slice(start, _pos) + mark;\n          start = _lastIndex;\n        }\n        return _lastIndex\n      }\n    };\n\n    _brackets.hasExpr = function hasExpr (str) {\n      return _cache[4].test(str)\n    };\n\n    _brackets.loopKeys = function loopKeys (expr) {\n      var m = expr.match(_cache[9]);\n\n      return m\n        ? { key: m[1], pos: m[2], val: _cache[0] + m[3].trim() + _cache[1] }\n        : { val: expr.trim() }\n    };\n\n    _brackets.array = function array (pair) {\n      return pair ? _create(pair) : _cache\n    };\n\n    function _reset (pair) {\n      if ((pair || (pair = DEFAULT)) !== _cache[8]) {\n        _cache = _create(pair);\n        _regex = pair === DEFAULT ? _loopback : _rewrite;\n        _cache[9] = _regex(_pairs[9]);\n      }\n      cachedBrackets = pair;\n    }\n\n    function _setSettings (o) {\n      var b;\n\n      o = o || {};\n      b = o.brackets;\n      Object.defineProperty(o, 'brackets', {\n        set: _reset,\n        get: function () { return cachedBrackets },\n        enumerable: true\n      });\n      _settings = o;\n      _reset(b);\n    }\n\n    Object.defineProperty(_brackets, 'settings', {\n      set: _setSettings,\n      get: function () { return _settings }\n    });\n\n    /* istanbul ignore next: in the browser riot is always in the scope */\n    _brackets.settings = typeof riot !== 'undefined' && riot.settings || {};\n    _brackets.set = _reset;\n    _brackets.skipRegex = skipRegex;\n\n    _brackets.R_STRINGS = R_STRINGS;\n    _brackets.R_MLCOMMS = R_MLCOMMS;\n    _brackets.S_QBLOCKS = S_QBLOCKS;\n    _brackets.S_QBLOCK2 = S_QBLOCK2;\n\n    return _brackets\n\n  })();\n\n  /**\n   * @module tmpl\n   *\n   * tmpl          - Root function, returns the template value, render with data\n   * tmpl.hasExpr  - Test the existence of a expression inside a string\n   * tmpl.loopKeys - Get the keys for an 'each' loop (used by `_each`)\n   */\n\n  /* istanbul ignore next */\n  var tmpl = (function () {\n\n    var _cache = {};\n\n    function _tmpl (str, data) {\n      if (!str) { return str }\n\n      return (_cache[str] || (_cache[str] = _create(str))).call(\n        data, _logErr.bind({\n          data: data,\n          tmpl: str\n        })\n      )\n    }\n\n    _tmpl.hasExpr = brackets.hasExpr;\n\n    _tmpl.loopKeys = brackets.loopKeys;\n\n    // istanbul ignore next\n    _tmpl.clearCache = function () { _cache = {}; };\n\n    _tmpl.errorHandler = null;\n\n    function _logErr (err, ctx) {\n\n      err.riotData = {\n        tagName: ctx && ctx.__ && ctx.__.tagName,\n        _riot_id: ctx && ctx._riot_id  //eslint-disable-line camelcase\n      };\n\n      if (_tmpl.errorHandler) { _tmpl.errorHandler(err); }\n      else if (\n        typeof console !== 'undefined' &&\n        typeof console.error === 'function'\n      ) {\n        console.error(err.message);\n        console.log('<%s> %s', err.riotData.tagName || 'Unknown tag', this.tmpl); // eslint-disable-line\n        console.log(this.data); // eslint-disable-line\n      }\n    }\n\n    function _create (str) {\n      var expr = _getTmpl(str);\n\n      if (expr.slice(0, 11) !== 'try{return ') { expr = 'return ' + expr; }\n\n      return new Function('E', expr + ';')    // eslint-disable-line no-new-func\n    }\n\n    var RE_DQUOTE = /\\u2057/g;\n    var RE_QBMARK = /\\u2057(\\d+)~/g;\n\n    function _getTmpl (str) {\n      var parts = brackets.split(str.replace(RE_DQUOTE, '\"'), 1);\n      var qstr = parts.qblocks;\n      var expr;\n\n      if (parts.length > 2 || parts[0]) {\n        var i, j, list = [];\n\n        for (i = j = 0; i < parts.length; ++i) {\n\n          expr = parts[i];\n\n          if (expr && (expr = i & 1\n\n              ? _parseExpr(expr, 1, qstr)\n\n              : '\"' + expr\n                  .replace(/\\\\/g, '\\\\\\\\')\n                  .replace(/\\r\\n?|\\n/g, '\\\\n')\n                  .replace(/\"/g, '\\\\\"') +\n                '\"'\n\n            )) { list[j++] = expr; }\n\n        }\n\n        expr = j < 2 ? list[0]\n             : '[' + list.join(',') + '].join(\"\")';\n\n      } else {\n\n        expr = _parseExpr(parts[1], 0, qstr);\n      }\n\n      if (qstr.length) {\n        expr = expr.replace(RE_QBMARK, function (_, pos) {\n          return qstr[pos]\n            .replace(/\\r/g, '\\\\r')\n            .replace(/\\n/g, '\\\\n')\n        });\n      }\n      return expr\n    }\n\n    var RE_CSNAME = /^(?:(-?[_A-Za-z\\xA0-\\xFF][-\\w\\xA0-\\xFF]*)|\\u2057(\\d+)~):/;\n    var\n      RE_BREND = {\n        '(': /[()]/g,\n        '[': /[[\\]]/g,\n        '{': /[{}]/g\n      };\n\n    function _parseExpr (expr, asText, qstr) {\n\n      expr = expr\n        .replace(/\\s+/g, ' ').trim()\n        .replace(/\\ ?([[\\({},?\\.:])\\ ?/g, '$1');\n\n      if (expr) {\n        var\n          list = [],\n          cnt = 0,\n          match;\n\n        while (expr &&\n              (match = expr.match(RE_CSNAME)) &&\n              !match.index\n          ) {\n          var\n            key,\n            jsb,\n            re = /,|([[{(])|$/g;\n\n          expr = RegExp.rightContext;\n          key  = match[2] ? qstr[match[2]].slice(1, -1).trim().replace(/\\s+/g, ' ') : match[1];\n\n          while (jsb = (match = re.exec(expr))[1]) { skipBraces(jsb, re); }\n\n          jsb  = expr.slice(0, match.index);\n          expr = RegExp.rightContext;\n\n          list[cnt++] = _wrapExpr(jsb, 1, key);\n        }\n\n        expr = !cnt ? _wrapExpr(expr, asText)\n             : cnt > 1 ? '[' + list.join(',') + '].join(\" \").trim()' : list[0];\n      }\n      return expr\n\n      function skipBraces (ch, re) {\n        var\n          mm,\n          lv = 1,\n          ir = RE_BREND[ch];\n\n        ir.lastIndex = re.lastIndex;\n        while (mm = ir.exec(expr)) {\n          if (mm[0] === ch) { ++lv; }\n          else if (!--lv) { break }\n        }\n        re.lastIndex = lv ? expr.length : ir.lastIndex;\n      }\n    }\n\n    // istanbul ignore next: not both\n    var // eslint-disable-next-line max-len\n      JS_CONTEXT = '\"in this?this:' + (typeof window !== 'object' ? 'global' : 'window') + ').',\n      JS_VARNAME = /[,{][\\$\\w]+(?=:)|(^ *|[^$\\w\\.{])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\\w]))([$_A-Za-z][$\\w]*)/g,\n      JS_NOPROPS = /^(?=(\\.[$\\w]+))\\1(?:[^.[(]|$)/;\n\n    function _wrapExpr (expr, asText, key) {\n      var tb;\n\n      expr = expr.replace(JS_VARNAME, function (match, p, mvar, pos, s) {\n        if (mvar) {\n          pos = tb ? 0 : pos + match.length;\n\n          if (mvar !== 'this' && mvar !== 'global' && mvar !== 'window') {\n            match = p + '(\"' + mvar + JS_CONTEXT + mvar;\n            if (pos) { tb = (s = s[pos]) === '.' || s === '(' || s === '['; }\n          } else if (pos) {\n            tb = !JS_NOPROPS.test(s.slice(pos));\n          }\n        }\n        return match\n      });\n\n      if (tb) {\n        expr = 'try{return ' + expr + '}catch(e){E(e,this)}';\n      }\n\n      if (key) {\n\n        expr = (tb\n            ? 'function(){' + expr + '}.call(this)' : '(' + expr + ')'\n          ) + '?\"' + key + '\":\"\"';\n\n      } else if (asText) {\n\n        expr = 'function(v){' + (tb\n            ? expr.replace('return ', 'v=') : 'v=(' + expr + ')'\n          ) + ';return v||v===0?v:\"\"}.call(this)';\n      }\n\n      return expr\n    }\n\n    _tmpl.version = brackets.version = 'v3.0.8';\n\n    return _tmpl\n\n  })();\n\n  /* istanbul ignore next */\n  var observable = function(el) {\n\n    /**\n     * Extend the original object or create a new empty one\n     * @type { Object }\n     */\n\n    el = el || {};\n\n    /**\n     * Private variables\n     */\n    var callbacks = {},\n      slice = Array.prototype.slice;\n\n    /**\n     * Public Api\n     */\n\n    // extend the el object adding the observable methods\n    Object.defineProperties(el, {\n      /**\n       * Listen to the given `event` ands\n       * execute the `callback` each time an event is triggered.\n       * @param  { String } event - event id\n       * @param  { Function } fn - callback function\n       * @returns { Object } el\n       */\n      on: {\n        value: function(event, fn) {\n          if (typeof fn == 'function')\n            { (callbacks[event] = callbacks[event] || []).push(fn); }\n          return el\n        },\n        enumerable: false,\n        writable: false,\n        configurable: false\n      },\n\n      /**\n       * Removes the given `event` listeners\n       * @param   { String } event - event id\n       * @param   { Function } fn - callback function\n       * @returns { Object } el\n       */\n      off: {\n        value: function(event, fn) {\n          if (event == '*' && !fn) { callbacks = {}; }\n          else {\n            if (fn) {\n              var arr = callbacks[event];\n              for (var i = 0, cb; cb = arr && arr[i]; ++i) {\n                if (cb == fn) { arr.splice(i--, 1); }\n              }\n            } else { delete callbacks[event]; }\n          }\n          return el\n        },\n        enumerable: false,\n        writable: false,\n        configurable: false\n      },\n\n      /**\n       * Listen to the given `event` and\n       * execute the `callback` at most once\n       * @param   { String } event - event id\n       * @param   { Function } fn - callback function\n       * @returns { Object } el\n       */\n      one: {\n        value: function(event, fn) {\n          function on() {\n            el.off(event, on);\n            fn.apply(el, arguments);\n          }\n          return el.on(event, on)\n        },\n        enumerable: false,\n        writable: false,\n        configurable: false\n      },\n\n      /**\n       * Execute all callback functions that listen to\n       * the given `event`\n       * @param   { String } event - event id\n       * @returns { Object } el\n       */\n      trigger: {\n        value: function(event) {\n          var arguments$1 = arguments;\n\n\n          // getting the arguments\n          var arglen = arguments.length - 1,\n            args = new Array(arglen),\n            fns,\n            fn,\n            i;\n\n          for (i = 0; i < arglen; i++) {\n            args[i] = arguments$1[i + 1]; // skip first argument\n          }\n\n          fns = slice.call(callbacks[event] || [], 0);\n\n          for (i = 0; fn = fns[i]; ++i) {\n            fn.apply(el, args);\n          }\n\n          if (callbacks['*'] && event != '*')\n            { el.trigger.apply(el, ['*', event].concat(args)); }\n\n          return el\n        },\n        enumerable: false,\n        writable: false,\n        configurable: false\n      }\n    });\n\n    return el\n\n  };\n\n  /**\n   * Short alias for Object.getOwnPropertyDescriptor\n   */\n  function getPropDescriptor (o, k) {\n    return Object.getOwnPropertyDescriptor(o, k)\n  }\n\n  /**\n   * Check if passed argument is undefined\n   * @param   { * } value -\n   * @returns { Boolean } -\n   */\n  function isUndefined(value) {\n    return typeof value === T_UNDEF\n  }\n\n  /**\n   * Check whether object's property could be overridden\n   * @param   { Object }  obj - source object\n   * @param   { String }  key - object property\n   * @returns { Boolean } true if writable\n   */\n  function isWritable(obj, key) {\n    var descriptor = getPropDescriptor(obj, key);\n    return isUndefined(obj[key]) || descriptor && descriptor.writable\n  }\n\n  /**\n   * Extend any object with other properties\n   * @param   { Object } src - source object\n   * @returns { Object } the resulting extended object\n   *\n   * var obj = { foo: 'baz' }\n   * extend(obj, {bar: 'bar', foo: 'bar'})\n   * console.log(obj) => {bar: 'bar', foo: 'bar'}\n   *\n   */\n  function extend(src) {\n    var obj;\n    var i = 1;\n    var args = arguments;\n    var l = args.length;\n\n    for (; i < l; i++) {\n      if (obj = args[i]) {\n        for (var key in obj) {\n          // check if this property of the source object could be overridden\n          if (isWritable(src, key))\n            { src[key] = obj[key]; }\n        }\n      }\n    }\n    return src\n  }\n\n  /**\n   * Alias for Object.create\n   */\n  function create(src) {\n    return Object.create(src)\n  }\n\n  var settings = extend(create(brackets.settings), {\n    skipAnonymousTags: true,\n    // the \"value\" attributes will be preserved\n    keepValueAttributes: false,\n    // handle the auto updates on any DOM event\n    autoUpdate: true\n  });\n\n  /**\n   * Shorter and fast way to select multiple nodes in the DOM\n   * @param   { String } selector - DOM selector\n   * @param   { Object } ctx - DOM node where the targets of our search will is located\n   * @returns { Object } dom nodes found\n   */\n  function $$(selector, ctx) {\n    return [].slice.call((ctx || document).querySelectorAll(selector))\n  }\n\n  /**\n   * Create a document text node\n   * @returns { Object } create a text node to use as placeholder\n   */\n  function createDOMPlaceholder() {\n    return document.createTextNode('')\n  }\n\n  /**\n   * Toggle the visibility of any DOM node\n   * @param   { Object }  dom - DOM node we want to hide\n   * @param   { Boolean } show - do we want to show it?\n   */\n\n  function toggleVisibility(dom, show) {\n    dom.style.display = show ? '' : 'none';\n    dom.hidden = show ? false : true;\n  }\n\n  /**\n   * Get the value of any DOM attribute on a node\n   * @param   { Object } dom - DOM node we want to parse\n   * @param   { String } name - name of the attribute we want to get\n   * @returns { String | undefined } name of the node attribute whether it exists\n   */\n  function getAttribute(dom, name) {\n    return dom.getAttribute(name)\n  }\n\n  /**\n   * Remove any DOM attribute from a node\n   * @param   { Object } dom - DOM node we want to update\n   * @param   { String } name - name of the property we want to remove\n   */\n  function removeAttribute(dom, name) {\n    dom.removeAttribute(name);\n  }\n\n  /**\n   * Set the inner html of any DOM node SVGs included\n   * @param { Object } container - DOM node where we'll inject new html\n   * @param { String } html - html to inject\n   * @param { Boolean } isSvg - svg tags should be treated a bit differently\n   */\n  /* istanbul ignore next */\n  function setInnerHTML(container, html, isSvg) {\n    // innerHTML is not supported on svg tags so we neet to treat them differently\n    if (isSvg) {\n      var node = container.ownerDocument.importNode(\n        new DOMParser()\n          .parseFromString((\"<svg xmlns=\\\"\" + SVG_NS + \"\\\">\" + html + \"</svg>\"), 'application/xml')\n          .documentElement,\n        true\n      );\n\n      container.appendChild(node);\n    } else {\n      container.innerHTML = html;\n    }\n  }\n\n  /**\n   * Minimize risk: only zero or one _space_ between attr & value\n   * @param   { String }   html - html string we want to parse\n   * @param   { Function } fn - callback function to apply on any attribute found\n   */\n  function walkAttributes(html, fn) {\n    if (!html) { return }\n    var m;\n    while (m = RE_HTML_ATTRS.exec(html))\n      { fn(m[1].toLowerCase(), m[2] || m[3] || m[4]); }\n  }\n\n  /**\n   * Create a document fragment\n   * @returns { Object } document fragment\n   */\n  function createFragment() {\n    return document.createDocumentFragment()\n  }\n\n  /**\n   * Insert safely a tag to fix #1962 #1649\n   * @param   { HTMLElement } root - children container\n   * @param   { HTMLElement } curr - node to insert\n   * @param   { HTMLElement } next - node that should preceed the current node inserted\n   */\n  function safeInsert(root, curr, next) {\n    root.insertBefore(curr, next.parentNode && next);\n  }\n\n  /**\n   * Convert a style object to a string\n   * @param   { Object } style - style object we need to parse\n   * @returns { String } resulting css string\n   * @example\n   * styleObjectToString({ color: 'red', height: '10px'}) // => 'color: red; height: 10px'\n   */\n  function styleObjectToString(style) {\n    return Object.keys(style).reduce(function (acc, prop) {\n      return (acc + \" \" + prop + \": \" + (style[prop]) + \";\")\n    }, '')\n  }\n\n  /**\n   * Walk down recursively all the children tags starting dom node\n   * @param   { Object }   dom - starting node where we will start the recursion\n   * @param   { Function } fn - callback to transform the child node just found\n   * @param   { Object }   context - fn can optionally return an object, which is passed to children\n   */\n  function walkNodes(dom, fn, context) {\n    if (dom) {\n      var res = fn(dom, context);\n      var next;\n      // stop the recursion\n      if (res === false) { return }\n\n      dom = dom.firstChild;\n\n      while (dom) {\n        next = dom.nextSibling;\n        walkNodes(dom, fn, res);\n        dom = next;\n      }\n    }\n  }\n\n\n\n  var dom = /*#__PURE__*/Object.freeze({\n    $$: $$,\n    $: $,\n    createDOMPlaceholder: createDOMPlaceholder,\n    mkEl: makeElement,\n    setAttr: setAttribute,\n    toggleVisibility: toggleVisibility,\n    getAttr: getAttribute,\n    remAttr: removeAttribute,\n    setInnerHTML: setInnerHTML,\n    walkAttrs: walkAttributes,\n    createFrag: createFragment,\n    safeInsert: safeInsert,\n    styleObjectToString: styleObjectToString,\n    walkNodes: walkNodes\n  });\n\n  /**\n   * Check against the null and undefined values\n   * @param   { * }  value -\n   * @returns {Boolean} -\n   */\n  function isNil(value) {\n    return isUndefined(value) || value === null\n  }\n\n  /**\n   * Check if passed argument is empty. Different from falsy, because we dont consider 0 or false to be blank\n   * @param { * } value -\n   * @returns { Boolean } -\n   */\n  function isBlank(value) {\n    return isNil(value) || value === ''\n  }\n\n  /**\n   * Check if passed argument is a function\n   * @param   { * } value -\n   * @returns { Boolean } -\n   */\n  function isFunction(value) {\n    return typeof value === T_FUNCTION\n  }\n\n  /**\n   * Check if passed argument is an object, exclude null\n   * NOTE: use isObject(x) && !isArray(x) to excludes arrays.\n   * @param   { * } value -\n   * @returns { Boolean } -\n   */\n  function isObject(value) {\n    return value && typeof value === T_OBJECT // typeof null is 'object'\n  }\n\n  /**\n   * Check if a DOM node is an svg tag or part of an svg\n   * @param   { HTMLElement }  el - node we want to test\n   * @returns {Boolean} true if it's an svg node\n   */\n  function isSvg(el) {\n    var owner = el.ownerSVGElement;\n    return !!owner || owner === null\n  }\n\n  /**\n   * Check if passed argument is a kind of array\n   * @param   { * } value -\n   * @returns { Boolean } -\n   */\n  function isArray(value) {\n    return Array.isArray(value) || value instanceof Array\n  }\n\n  /**\n   * Check if the passed argument is a boolean attribute\n   * @param   { String } value -\n   * @returns { Boolean } -\n   */\n  function isBoolAttr(value) {\n    return RE_BOOL_ATTRS.test(value)\n  }\n\n  /**\n   * Check if passed argument is a string\n   * @param   { * } value -\n   * @returns { Boolean } -\n   */\n  function isString(value) {\n    return typeof value === T_STRING\n  }\n\n\n\n  var check = /*#__PURE__*/Object.freeze({\n    isBlank: isBlank,\n    isFunction: isFunction,\n    isObject: isObject,\n    isSvg: isSvg,\n    isWritable: isWritable,\n    isArray: isArray,\n    isBoolAttr: isBoolAttr,\n    isNil: isNil,\n    isString: isString,\n    isUndefined: isUndefined\n  });\n\n  /**\n   * Check whether an array contains an item\n   * @param   { Array } array - target array\n   * @param   { * } item - item to test\n   * @returns { Boolean } -\n   */\n  function contains(array, item) {\n    return array.indexOf(item) !== -1\n  }\n\n  /**\n   * Specialized function for looping an array-like collection with `each={}`\n   * @param   { Array } list - collection of items\n   * @param   {Function} fn - callback function\n   * @returns { Array } the array looped\n   */\n  function each(list, fn) {\n    var len = list ? list.length : 0;\n    var i = 0;\n    for (; i < len; i++) { fn(list[i], i); }\n    return list\n  }\n\n  /**\n   * Faster String startsWith alternative\n   * @param   { String } str - source string\n   * @param   { String } value - test string\n   * @returns { Boolean } -\n   */\n  function startsWith(str, value) {\n    return str.slice(0, value.length) === value\n  }\n\n  /**\n   * Function returning always a unique identifier\n   * @returns { Number } - number from 0...n\n   */\n  var uid = (function uid() {\n    var i = -1;\n    return function () { return ++i; }\n  })();\n\n  /**\n   * Helper function to set an immutable property\n   * @param   { Object } el - object where the new property will be set\n   * @param   { String } key - object key where the new property will be stored\n   * @param   { * } value - value of the new property\n   * @param   { Object } options - set the propery overriding the default options\n   * @returns { Object } - the initial object\n   */\n  function define(el, key, value, options) {\n    Object.defineProperty(el, key, extend({\n      value: value,\n      enumerable: false,\n      writable: false,\n      configurable: true\n    }, options));\n    return el\n  }\n\n  /**\n   * Convert a string containing dashes to camel case\n   * @param   { String } str - input string\n   * @returns { String } my-string -> myString\n   */\n  function toCamel(str) {\n    return str.replace(/-(\\w)/g, function (_, c) { return c.toUpperCase(); })\n  }\n\n  /**\n   * Warn a message via console\n   * @param   {String} message - warning message\n   */\n  function warn(message) {\n    if (console && console.warn) { console.warn(message); }\n  }\n\n\n\n  var misc = /*#__PURE__*/Object.freeze({\n    contains: contains,\n    each: each,\n    getPropDescriptor: getPropDescriptor,\n    startsWith: startsWith,\n    uid: uid,\n    defineProperty: define,\n    objectCreate: create,\n    extend: extend,\n    toCamel: toCamel,\n    warn: warn\n  });\n\n  /**\n   * Set the property of an object for a given key. If something already\n   * exists there, then it becomes an array containing both the old and new value.\n   * @param { Object } obj - object on which to set the property\n   * @param { String } key - property name\n   * @param { Object } value - the value of the property to be set\n   * @param { Boolean } ensureArray - ensure that the property remains an array\n   * @param { Number } index - add the new item in a certain array position\n   */\n  function arrayishAdd(obj, key, value, ensureArray, index) {\n    var dest = obj[key];\n    var isArr = isArray(dest);\n    var hasIndex = !isUndefined(index);\n\n    if (dest && dest === value) { return }\n\n    // if the key was never set, set it once\n    if (!dest && ensureArray) { obj[key] = [value]; }\n    else if (!dest) { obj[key] = value; }\n    // if it was an array and not yet set\n    else {\n      if (isArr) {\n        var oldIndex = dest.indexOf(value);\n        // this item never changed its position\n        if (oldIndex === index) { return }\n        // remove the item from its old position\n        if (oldIndex !== -1) { dest.splice(oldIndex, 1); }\n        // move or add the item\n        if (hasIndex) {\n          dest.splice(index, 0, value);\n        } else {\n          dest.push(value);\n        }\n      } else { obj[key] = [dest, value]; }\n    }\n  }\n\n  /**\n   * Detect the tag implementation by a DOM node\n   * @param   { Object } dom - DOM node we need to parse to get its tag implementation\n   * @returns { Object } it returns an object containing the implementation of a custom tag (template and boot function)\n   */\n  function get(dom) {\n    return dom.tagName && __TAG_IMPL[getAttribute(dom, IS_DIRECTIVE) ||\n      getAttribute(dom, IS_DIRECTIVE) || dom.tagName.toLowerCase()]\n  }\n\n  /**\n   * Get the tag name of any DOM node\n   * @param   { Object } dom - DOM node we want to parse\n   * @param   { Boolean } skipDataIs - hack to ignore the data-is attribute when attaching to parent\n   * @returns { String } name to identify this dom node in riot\n   */\n  function getName(dom, skipDataIs) {\n    var child = get(dom);\n    var namedTag = !skipDataIs && getAttribute(dom, IS_DIRECTIVE);\n    return namedTag && !tmpl.hasExpr(namedTag) ?\n      namedTag : child ? child.name : dom.tagName.toLowerCase()\n  }\n\n  /**\n   * Return a temporary context containing also the parent properties\n   * @this Tag\n   * @param { Tag } - temporary tag context containing all the parent properties\n   */\n  function inheritParentProps() {\n    if (this.parent) { return extend(create(this), this.parent) }\n    return this\n  }\n\n  /*\n    Includes hacks needed for the Internet Explorer version 9 and below\n    See: http://kangax.github.io/compat-table/es5/#ie8\n         http://codeplanet.io/dropping-ie8/\n  */\n\n  var\n    reHasYield  = /<yield\\b/i,\n    reYieldAll  = /<yield\\s*(?:\\/>|>([\\S\\s]*?)<\\/yield\\s*>|>)/ig,\n    reYieldSrc  = /<yield\\s+to=['\"]([^'\">]*)['\"]\\s*>([\\S\\s]*?)<\\/yield\\s*>/ig,\n    reYieldDest = /<yield\\s+from=['\"]?([-\\w]+)['\"]?\\s*(?:\\/>|>([\\S\\s]*?)<\\/yield\\s*>)/ig,\n    rootEls = { tr: 'tbody', th: 'tr', td: 'tr', col: 'colgroup' },\n    tblTags = IE_VERSION && IE_VERSION < 10 ? RE_SPECIAL_TAGS : RE_SPECIAL_TAGS_NO_OPTION,\n    GENERIC = 'div',\n    SVG = 'svg';\n\n\n  /*\n    Creates the root element for table or select child elements:\n    tr/th/td/thead/tfoot/tbody/caption/col/colgroup/option/optgroup\n  */\n  function specialTags(el, tmpl, tagName) {\n\n    var\n      select = tagName[0] === 'o',\n      parent = select ? 'select>' : 'table>';\n\n    // trim() is important here, this ensures we don't have artifacts,\n    // so we can check if we have only one element inside the parent\n    el.innerHTML = '<' + parent + tmpl.trim() + '</' + parent;\n    parent = el.firstChild;\n\n    // returns the immediate parent if tr/th/td/col is the only element, if not\n    // returns the whole tree, as this can include additional elements\n    /* istanbul ignore next */\n    if (select) {\n      parent.selectedIndex = -1;  // for IE9, compatible w/current riot behavior\n    } else {\n      // avoids insertion of cointainer inside container (ex: tbody inside tbody)\n      var tname = rootEls[tagName];\n      if (tname && parent.childElementCount === 1) { parent = $(tname, parent); }\n    }\n    return parent\n  }\n\n  /*\n    Replace the yield tag from any tag template with the innerHTML of the\n    original tag in the page\n  */\n  function replaceYield(tmpl, html) {\n    // do nothing if no yield\n    if (!reHasYield.test(tmpl)) { return tmpl }\n\n    // be careful with #1343 - string on the source having `$1`\n    var src = {};\n\n    html = html && html.replace(reYieldSrc, function (_, ref, text) {\n      src[ref] = src[ref] || text;   // preserve first definition\n      return ''\n    }).trim();\n\n    return tmpl\n      .replace(reYieldDest, function (_, ref, def) {  // yield with from - to attrs\n        return src[ref] || def || ''\n      })\n      .replace(reYieldAll, function (_, def) {        // yield without any \"from\"\n        return html || def || ''\n      })\n  }\n\n  /**\n   * Creates a DOM element to wrap the given content. Normally an `DIV`, but can be\n   * also a `TABLE`, `SELECT`, `TBODY`, `TR`, or `COLGROUP` element.\n   *\n   * @param   { String } tmpl  - The template coming from the custom tag definition\n   * @param   { String } html - HTML content that comes from the DOM element where you\n   *           will mount the tag, mostly the original tag in the page\n   * @param   { Boolean } isSvg - true if the root node is an svg\n   * @returns { HTMLElement } DOM element with _tmpl_ merged through `YIELD` with the _html_.\n   */\n  function mkdom(tmpl, html, isSvg) {\n    var match   = tmpl && tmpl.match(/^\\s*<([-\\w]+)/);\n    var  tagName = match && match[1].toLowerCase();\n    var el = makeElement(isSvg ? SVG : GENERIC);\n\n    // replace all the yield tags with the tag inner html\n    tmpl = replaceYield(tmpl, html);\n\n    /* istanbul ignore next */\n    if (tblTags.test(tagName))\n      { el = specialTags(el, tmpl, tagName); }\n    else\n      { setInnerHTML(el, tmpl, isSvg); }\n\n    return el\n  }\n\n  var EVENT_ATTR_RE = /^on/;\n\n  /**\n   * True if the event attribute starts with 'on'\n   * @param   { String } attribute - event attribute\n   * @returns { Boolean }\n   */\n  function isEventAttribute(attribute) {\n    return EVENT_ATTR_RE.test(attribute)\n  }\n\n  /**\n   * Loop backward all the parents tree to detect the first custom parent tag\n   * @param   { Object } tag - a Tag instance\n   * @returns { Object } the instance of the first custom parent tag found\n   */\n  function getImmediateCustomParent(tag) {\n    var ptag = tag;\n    while (ptag.__.isAnonymous) {\n      if (!ptag.parent) { break }\n      ptag = ptag.parent;\n    }\n    return ptag\n  }\n\n  /**\n   * Trigger DOM events\n   * @param   { HTMLElement } dom - dom element target of the event\n   * @param   { Function } handler - user function\n   * @param   { Object } e - event object\n   */\n  function handleEvent(dom, handler, e) {\n    var ptag = this.__.parent;\n    var item = this.__.item;\n\n    if (!item)\n      { while (ptag && !item) {\n        item = ptag.__.item;\n        ptag = ptag.__.parent;\n      } }\n\n    // override the event properties\n    /* istanbul ignore next */\n    if (isWritable(e, 'currentTarget')) { e.currentTarget = dom; }\n    /* istanbul ignore next */\n    if (isWritable(e, 'target')) { e.target = e.srcElement; }\n    /* istanbul ignore next */\n    if (isWritable(e, 'which')) { e.which = e.charCode || e.keyCode; }\n\n    e.item = item;\n\n    handler.call(this, e);\n\n    // avoid auto updates\n    if (!settings.autoUpdate) { return }\n\n    if (!e.preventUpdate) {\n      var p = getImmediateCustomParent(this);\n      // fixes #2083\n      if (p.isMounted) { p.update(); }\n    }\n  }\n\n  /**\n   * Attach an event to a DOM node\n   * @param { String } name - event name\n   * @param { Function } handler - event callback\n   * @param { Object } dom - dom node\n   * @param { Tag } tag - tag instance\n   */\n  function setEventHandler(name, handler, dom, tag) {\n    var eventName;\n    var cb = handleEvent.bind(tag, dom, handler);\n\n    // avoid to bind twice the same event\n    // possible fix for #2332\n    dom[name] = null;\n\n    // normalize event name\n    eventName = name.replace(RE_EVENTS_PREFIX, '');\n\n    // cache the listener into the listeners array\n    if (!contains(tag.__.listeners, dom)) { tag.__.listeners.push(dom); }\n    if (!dom[RIOT_EVENTS_KEY]) { dom[RIOT_EVENTS_KEY] = {}; }\n    if (dom[RIOT_EVENTS_KEY][name]) { dom.removeEventListener(eventName, dom[RIOT_EVENTS_KEY][name]); }\n\n    dom[RIOT_EVENTS_KEY][name] = cb;\n    dom.addEventListener(eventName, cb, false);\n  }\n\n  /**\n   * Create a new child tag including it correctly into its parent\n   * @param   { Object } child - child tag implementation\n   * @param   { Object } opts - tag options containing the DOM node where the tag will be mounted\n   * @param   { String } innerHTML - inner html of the child node\n   * @param   { Object } parent - instance of the parent tag including the child custom tag\n   * @returns { Object } instance of the new child tag just created\n   */\n  function initChild(child, opts, innerHTML, parent) {\n    var tag = createTag(child, opts, innerHTML);\n    var tagName = opts.tagName || getName(opts.root, true);\n    var ptag = getImmediateCustomParent(parent);\n    // fix for the parent attribute in the looped elements\n    define(tag, 'parent', ptag);\n    // store the real parent tag\n    // in some cases this could be different from the custom parent tag\n    // for example in nested loops\n    tag.__.parent = parent;\n\n    // add this tag to the custom parent tag\n    arrayishAdd(ptag.tags, tagName, tag);\n\n    // and also to the real parent tag\n    if (ptag !== parent)\n      { arrayishAdd(parent.tags, tagName, tag); }\n\n    return tag\n  }\n\n  /**\n   * Removes an item from an object at a given key. If the key points to an array,\n   * then the item is just removed from the array.\n   * @param { Object } obj - object on which to remove the property\n   * @param { String } key - property name\n   * @param { Object } value - the value of the property to be removed\n   * @param { Boolean } ensureArray - ensure that the property remains an array\n  */\n  function arrayishRemove(obj, key, value, ensureArray) {\n    if (isArray(obj[key])) {\n      var index = obj[key].indexOf(value);\n      if (index !== -1) { obj[key].splice(index, 1); }\n      if (!obj[key].length) { delete obj[key]; }\n      else if (obj[key].length === 1 && !ensureArray) { obj[key] = obj[key][0]; }\n    } else if (obj[key] === value)\n      { delete obj[key]; } // otherwise just delete the key\n  }\n\n  /**\n   * Adds the elements for a virtual tag\n   * @this Tag\n   * @param { Node } src - the node that will do the inserting or appending\n   * @param { Tag } target - only if inserting, insert before this tag's first child\n   */\n  function makeVirtual(src, target) {\n    var this$1 = this;\n\n    var head = createDOMPlaceholder();\n    var tail = createDOMPlaceholder();\n    var frag = createFragment();\n    var sib;\n    var el;\n\n    this.root.insertBefore(head, this.root.firstChild);\n    this.root.appendChild(tail);\n\n    this.__.head = el = head;\n    this.__.tail = tail;\n\n    while (el) {\n      sib = el.nextSibling;\n      frag.appendChild(el);\n      this$1.__.virts.push(el); // hold for unmounting\n      el = sib;\n    }\n\n    if (target)\n      { src.insertBefore(frag, target.__.head); }\n    else\n      { src.appendChild(frag); }\n  }\n\n  /**\n   * makes a tag virtual and replaces a reference in the dom\n   * @this Tag\n   * @param { tag } the tag to make virtual\n   * @param { ref } the dom reference location\n   */\n  function makeReplaceVirtual(tag, ref) {\n    if (!ref.parentNode) { return }\n    var frag = createFragment();\n    makeVirtual.call(tag, frag);\n    ref.parentNode.replaceChild(frag, ref);\n  }\n\n  /**\n   * Update dynamically created data-is tags with changing expressions\n   * @param { Object } expr - expression tag and expression info\n   * @param { Tag }    parent - parent for tag creation\n   * @param { String } tagName - tag implementation we want to use\n   */\n  function updateDataIs(expr, parent, tagName) {\n    var tag = expr.tag || expr.dom._tag;\n    var ref;\n\n    var ref$1 = tag ? tag.__ : {};\n    var head = ref$1.head;\n    var isVirtual = expr.dom.tagName === 'VIRTUAL';\n\n    if (tag && expr.tagName === tagName) {\n      tag.update();\n      return\n    }\n\n    // sync _parent to accommodate changing tagnames\n    if (tag) {\n      // need placeholder before unmount\n      if(isVirtual) {\n        ref = createDOMPlaceholder();\n        head.parentNode.insertBefore(ref, head);\n      }\n\n      tag.unmount(true);\n    }\n\n    // unable to get the tag name\n    if (!isString(tagName)) { return }\n\n    expr.impl = __TAG_IMPL[tagName];\n\n    // unknown implementation\n    if (!expr.impl) { return }\n\n    expr.tag = tag = initChild(\n      expr.impl, {\n        root: expr.dom,\n        parent: parent,\n        tagName: tagName\n      },\n      expr.dom.innerHTML,\n      parent\n    );\n\n    each(expr.attrs, function (a) { return setAttribute(tag.root, a.name, a.value); });\n    expr.tagName = tagName;\n    tag.mount();\n\n    // root exist first time, after use placeholder\n    if (isVirtual) { makeReplaceVirtual(tag, ref || tag.root); }\n\n    // parent is the placeholder tag, not the dynamic tag so clean up\n    parent.__.onUnmount = function () {\n      var delName = tag.opts.dataIs;\n      arrayishRemove(tag.parent.tags, delName, tag);\n      arrayishRemove(tag.__.parent.tags, delName, tag);\n      tag.unmount();\n    };\n  }\n\n  /**\n   * Nomalize any attribute removing the \"riot-\" prefix\n   * @param   { String } attrName - original attribute name\n   * @returns { String } valid html attribute name\n   */\n  function normalizeAttrName(attrName) {\n    if (!attrName) { return null }\n    attrName = attrName.replace(ATTRS_PREFIX, '');\n    if (CASE_SENSITIVE_ATTRIBUTES[attrName]) { attrName = CASE_SENSITIVE_ATTRIBUTES[attrName]; }\n    return attrName\n  }\n\n  /**\n   * Update on single tag expression\n   * @this Tag\n   * @param { Object } expr - expression logic\n   * @returns { undefined }\n   */\n  function updateExpression(expr) {\n    if (this.root && getAttribute(this.root,'virtualized')) { return }\n\n    var dom = expr.dom;\n    // remove the riot- prefix\n    var attrName = normalizeAttrName(expr.attr);\n    var isToggle = contains([SHOW_DIRECTIVE, HIDE_DIRECTIVE], attrName);\n    var isVirtual = expr.root && expr.root.tagName === 'VIRTUAL';\n    var ref = this.__;\n    var isAnonymous = ref.isAnonymous;\n    var parent = dom && (expr.parent || dom.parentNode);\n    var keepValueAttributes = settings.keepValueAttributes;\n    // detect the style attributes\n    var isStyleAttr = attrName === 'style';\n    var isClassAttr = attrName === 'class';\n    var isValueAttr = attrName === 'value';\n\n    var value;\n\n    // if it's a tag we could totally skip the rest\n    if (expr._riot_id) {\n      if (expr.__.wasCreated) {\n        expr.update();\n      // if it hasn't been mounted yet, do that now.\n      } else {\n        expr.mount();\n        if (isVirtual) {\n          makeReplaceVirtual(expr, expr.root);\n        }\n      }\n      return\n    }\n\n    // if this expression has the update method it means it can handle the DOM changes by itself\n    if (expr.update) { return expr.update() }\n\n    var context = isToggle && !isAnonymous ? inheritParentProps.call(this) : this;\n\n    // ...it seems to be a simple expression so we try to calculate its value\n    value = tmpl(expr.expr, context);\n\n    var hasValue = !isBlank(value);\n    var isObj = isObject(value);\n\n    // convert the style/class objects to strings\n    if (isObj) {\n      if (isClassAttr) {\n        value = tmpl(JSON.stringify(value), this);\n      } else if (isStyleAttr) {\n        value = styleObjectToString(value);\n      }\n    }\n\n    // remove original attribute\n    if (expr.attr &&\n        (\n          // the original attribute can be removed only if we are parsing the original expression\n          !expr.wasParsedOnce ||\n          // or its value is false\n          value === false ||\n          // or if its value is currently falsy...\n          // We will keep the \"value\" attributes if the \"keepValueAttributes\"\n          // is enabled though\n          (!hasValue && (!isValueAttr || isValueAttr && !keepValueAttributes))\n        )\n    ) {\n      // remove either riot-* attributes or just the attribute name\n      removeAttribute(dom, getAttribute(dom, expr.attr) ? expr.attr : attrName);\n    }\n\n    // for the boolean attributes we don't need the value\n    // we can convert it to checked=true to checked=checked\n    if (expr.bool) { value = value ? attrName : false; }\n    if (expr.isRtag) { return updateDataIs(expr, this, value) }\n    if (expr.wasParsedOnce && expr.value === value) { return }\n\n    // update the expression value\n    expr.value = value;\n    expr.wasParsedOnce = true;\n\n    // if the value is an object (and it's not a style or class attribute) we can not do much more with it\n    if (isObj && !isClassAttr && !isStyleAttr && !isToggle) { return }\n    // avoid to render undefined/null values\n    if (!hasValue) { value = ''; }\n\n    // textarea and text nodes have no attribute name\n    if (!attrName) {\n      // about #815 w/o replace: the browser converts the value to a string,\n      // the comparison by \"==\" does too, but not in the server\n      value += '';\n      // test for parent avoids error with invalid assignment to nodeValue\n      if (parent) {\n        // cache the parent node because somehow it will become null on IE\n        // on the next iteration\n        expr.parent = parent;\n        if (parent.tagName === 'TEXTAREA') {\n          parent.value = value;                    // #1113\n          if (!IE_VERSION) { dom.nodeValue = value; }  // #1625 IE throws here, nodeValue\n        }                                         // will be available on 'updated'\n        else { dom.nodeValue = value; }\n      }\n      return\n    }\n\n    switch (true) {\n    // handle events binding\n    case isFunction(value):\n      if (isEventAttribute(attrName)) {\n        setEventHandler(attrName, value, dom, this);\n      }\n      break\n    // show / hide\n    case isToggle:\n      toggleVisibility(dom, attrName === HIDE_DIRECTIVE ? !value : value);\n      break\n    // handle attributes\n    default:\n      if (expr.bool) {\n        dom[attrName] = value;\n      }\n\n      if (isValueAttr && dom.value !== value) {\n        dom.value = value;\n      } else if (hasValue && value !== false) {\n        setAttribute(dom, attrName, value);\n      }\n\n      // make sure that in case of style changes\n      // the element stays hidden\n      if (isStyleAttr && dom.hidden) { toggleVisibility(dom, false); }\n    }\n  }\n\n  /**\n   * Update all the expressions in a Tag instance\n   * @this Tag\n   * @param { Array } expressions - expression that must be re evaluated\n   */\n  function update(expressions) {\n    each(expressions, updateExpression.bind(this));\n  }\n\n  /**\n   * We need to update opts for this tag. That requires updating the expressions\n   * in any attributes on the tag, and then copying the result onto opts.\n   * @this Tag\n   * @param   {Boolean} isLoop - is it a loop tag?\n   * @param   { Tag }  parent - parent tag node\n   * @param   { Boolean }  isAnonymous - is it a tag without any impl? (a tag not registered)\n   * @param   { Object }  opts - tag options\n   * @param   { Array }  instAttrs - tag attributes array\n   */\n  function updateOpts(isLoop, parent, isAnonymous, opts, instAttrs) {\n    // isAnonymous `each` tags treat `dom` and `root` differently. In this case\n    // (and only this case) we don't need to do updateOpts, because the regular parse\n    // will update those attrs. Plus, isAnonymous tags don't need opts anyway\n    if (isLoop && isAnonymous) { return }\n    var ctx = isLoop ? inheritParentProps.call(this) : parent || this;\n\n    each(instAttrs, function (attr) {\n      if (attr.expr) { updateExpression.call(ctx, attr.expr); }\n      // normalize the attribute names\n      opts[toCamel(attr.name).replace(ATTRS_PREFIX, '')] = attr.expr ? attr.expr.value : attr.value;\n    });\n  }\n\n  /**\n   * Update the tag expressions and options\n   * @param { Tag } tag - tag object\n   * @param { * } data - data we want to use to extend the tag properties\n   * @param { Array } expressions - component expressions array\n   * @returns { Tag } the current tag instance\n   */\n  function componentUpdate(tag, data, expressions) {\n    var __ = tag.__;\n    var nextOpts = {};\n    var canTrigger = tag.isMounted && !__.skipAnonymous;\n\n    // inherit properties from the parent tag\n    if (__.isAnonymous && __.parent) { extend(tag, __.parent); }\n    extend(tag, data);\n\n    updateOpts.apply(tag, [__.isLoop, __.parent, __.isAnonymous, nextOpts, __.instAttrs]);\n\n    if (\n      canTrigger &&\n      tag.isMounted &&\n      isFunction(tag.shouldUpdate) && !tag.shouldUpdate(data, nextOpts)\n    ) {\n      return tag\n    }\n\n    extend(tag.opts, nextOpts);\n\n    if (canTrigger) { tag.trigger('update', data); }\n    update.call(tag, expressions);\n    if (canTrigger) { tag.trigger('updated'); }\n\n    return tag\n  }\n\n  /**\n   * Get selectors for tags\n   * @param   { Array } tags - tag names to select\n   * @returns { String } selector\n   */\n  function query(tags) {\n    // select all tags\n    if (!tags) {\n      var keys = Object.keys(__TAG_IMPL);\n      return keys + query(keys)\n    }\n\n    return tags\n      .filter(function (t) { return !/[^-\\w]/.test(t); })\n      .reduce(function (list, t) {\n        var name = t.trim().toLowerCase();\n        return list + \",[\" + IS_DIRECTIVE + \"=\\\"\" + name + \"\\\"]\"\n      }, '')\n  }\n\n  /**\n   * Another way to create a riot tag a bit more es6 friendly\n   * @param { HTMLElement } el - tag DOM selector or DOM node/s\n   * @param { Object } opts - tag logic\n   * @returns { Tag } new riot tag instance\n   */\n  function Tag(el, opts) {\n    // get the tag properties from the class constructor\n    var ref = this;\n    var name = ref.name;\n    var tmpl = ref.tmpl;\n    var css = ref.css;\n    var attrs = ref.attrs;\n    var onCreate = ref.onCreate;\n    // register a new tag and cache the class prototype\n    if (!__TAG_IMPL[name]) {\n      tag(name, tmpl, css, attrs, onCreate);\n      // cache the class constructor\n      __TAG_IMPL[name].class = this.constructor;\n    }\n\n    // mount the tag using the class instance\n    mount$1(el, name, opts, this);\n    // inject the component css\n    if (css) { styleManager.inject(); }\n\n    return this\n  }\n\n  /**\n   * Create a new riot tag implementation\n   * @param   { String }   name - name/id of the new riot tag\n   * @param   { String }   tmpl - tag template\n   * @param   { String }   css - custom tag css\n   * @param   { String }   attrs - root tag attributes\n   * @param   { Function } fn - user function\n   * @returns { String } name/id of the tag just created\n   */\n  function tag(name, tmpl, css, attrs, fn) {\n    if (isFunction(attrs)) {\n      fn = attrs;\n\n      if (/^[\\w-]+\\s?=/.test(css)) {\n        attrs = css;\n        css = '';\n      } else\n        { attrs = ''; }\n    }\n\n    if (css) {\n      if (isFunction(css))\n        { fn = css; }\n      else\n        { styleManager.add(css, name); }\n    }\n\n    name = name.toLowerCase();\n    __TAG_IMPL[name] = { name: name, tmpl: tmpl, attrs: attrs, fn: fn };\n\n    return name\n  }\n\n  /**\n   * Create a new riot tag implementation (for use by the compiler)\n   * @param   { String }   name - name/id of the new riot tag\n   * @param   { String }   tmpl - tag template\n   * @param   { String }   css - custom tag css\n   * @param   { String }   attrs - root tag attributes\n   * @param   { Function } fn - user function\n   * @returns { String } name/id of the tag just created\n   */\n  function tag2(name, tmpl, css, attrs, fn) {\n    if (css) { styleManager.add(css, name); }\n\n    __TAG_IMPL[name] = { name: name, tmpl: tmpl, attrs: attrs, fn: fn };\n\n    return name\n  }\n\n  /**\n   * Mount a tag using a specific tag implementation\n   * @param   { * } selector - tag DOM selector or DOM node/s\n   * @param   { String } tagName - tag implementation name\n   * @param   { Object } opts - tag logic\n   * @returns { Array } new tags instances\n   */\n  function mount(selector, tagName, opts) {\n    var tags = [];\n    var elem, allTags;\n\n    function pushTagsTo(root) {\n      if (root.tagName) {\n        var riotTag = getAttribute(root, IS_DIRECTIVE), tag;\n\n        // have tagName? force riot-tag to be the same\n        if (tagName && riotTag !== tagName) {\n          riotTag = tagName;\n          setAttribute(root, IS_DIRECTIVE, tagName);\n        }\n\n        tag = mount$1(\n          root,\n          riotTag || root.tagName.toLowerCase(),\n          isFunction(opts) ? opts() : opts\n        );\n\n        if (tag)\n          { tags.push(tag); }\n      } else if (root.length)\n        { each(root, pushTagsTo); } // assume nodeList\n    }\n\n    // inject styles into DOM\n    styleManager.inject();\n\n    if (isObject(tagName) || isFunction(tagName)) {\n      opts = tagName;\n      tagName = 0;\n    }\n\n    // crawl the DOM to find the tag\n    if (isString(selector)) {\n      selector = selector === '*' ?\n        // select all registered tags\n        // & tags found with the riot-tag attribute set\n        allTags = query() :\n        // or just the ones named like the selector\n        selector + query(selector.split(/, */));\n\n      // make sure to pass always a selector\n      // to the querySelectorAll function\n      elem = selector ? $$(selector) : [];\n    }\n    else\n      // probably you have passed already a tag or a NodeList\n      { elem = selector; }\n\n    // select all the registered and mount them inside their root elements\n    if (tagName === '*') {\n      // get all custom tags\n      tagName = allTags || query();\n      // if the root els it's just a single tag\n      if (elem.tagName)\n        { elem = $$(tagName, elem); }\n      else {\n        // select all the children for all the different root elements\n        var nodeList = [];\n\n        each(elem, function (_el) { return nodeList.push($$(tagName, _el)); });\n\n        elem = nodeList;\n      }\n      // get rid of the tagName\n      tagName = 0;\n    }\n\n    pushTagsTo(elem);\n\n    return tags\n  }\n\n  // Create a mixin that could be globally shared across all the tags\n  var mixins = {};\n  var globals = mixins[GLOBAL_MIXIN] = {};\n  var mixins_id = 0;\n\n  /**\n   * Create/Return a mixin by its name\n   * @param   { String }  name - mixin name (global mixin if object)\n   * @param   { Object }  mix - mixin logic\n   * @param   { Boolean } g - is global?\n   * @returns { Object }  the mixin logic\n   */\n  function mixin(name, mix, g) {\n    // Unnamed global\n    if (isObject(name)) {\n      mixin((\"__\" + (mixins_id++) + \"__\"), name, true);\n      return\n    }\n\n    var store = g ? globals : mixins;\n\n    // Getter\n    if (!mix) {\n      if (isUndefined(store[name]))\n        { throw new Error((\"Unregistered mixin: \" + name)) }\n\n      return store[name]\n    }\n\n    // Setter\n    store[name] = isFunction(mix) ?\n      extend(mix.prototype, store[name] || {}) && mix :\n      extend(store[name] || {}, mix);\n  }\n\n  /**\n   * Update all the tags instances created\n   * @returns { Array } all the tags instances\n   */\n  function update$1() {\n    return each(__TAGS_CACHE, function (tag) { return tag.update(); })\n  }\n\n  function unregister(name) {\n    styleManager.remove(name);\n    return delete __TAG_IMPL[name]\n  }\n\n  var version = 'v3.13.2';\n\n  var core = /*#__PURE__*/Object.freeze({\n    Tag: Tag,\n    tag: tag,\n    tag2: tag2,\n    mount: mount,\n    mixin: mixin,\n    update: update$1,\n    unregister: unregister,\n    version: version\n  });\n\n  /**\n   * Add a mixin to this tag\n   * @returns { Tag } the current tag instance\n   */\n  function componentMixin(tag$$1) {\n    var mixins = [], len = arguments.length - 1;\n    while ( len-- > 0 ) mixins[ len ] = arguments[ len + 1 ];\n\n    each(mixins, function (mix) {\n      var instance;\n      var obj;\n      var props = [];\n\n      // properties blacklisted and will not be bound to the tag instance\n      var propsBlacklist = ['init', '__proto__'];\n\n      mix = isString(mix) ? mixin(mix) : mix;\n\n      // check if the mixin is a function\n      if (isFunction(mix)) {\n        // create the new mixin instance\n        instance = new mix();\n      } else { instance = mix; }\n\n      var proto = Object.getPrototypeOf(instance);\n\n      // build multilevel prototype inheritance chain property list\n      do { props = props.concat(Object.getOwnPropertyNames(obj || instance)); }\n      while (obj = Object.getPrototypeOf(obj || instance))\n\n      // loop the keys in the function prototype or the all object keys\n      each(props, function (key) {\n        // bind methods to tag\n        // allow mixins to override other properties/parent mixins\n        if (!contains(propsBlacklist, key)) {\n          // check for getters/setters\n          var descriptor = getPropDescriptor(instance, key) || getPropDescriptor(proto, key);\n          var hasGetterSetter = descriptor && (descriptor.get || descriptor.set);\n\n          // apply method only if it does not already exist on the instance\n          if (!tag$$1.hasOwnProperty(key) && hasGetterSetter) {\n            Object.defineProperty(tag$$1, key, descriptor);\n          } else {\n            tag$$1[key] = isFunction(instance[key]) ?\n              instance[key].bind(tag$$1) :\n              instance[key];\n          }\n        }\n      });\n\n      // init method will be called automatically\n      if (instance.init)\n        { instance.init.bind(tag$$1)(tag$$1.opts); }\n    });\n\n    return tag$$1\n  }\n\n  /**\n   * Move the position of a custom tag in its parent tag\n   * @this Tag\n   * @param   { String } tagName - key where the tag was stored\n   * @param   { Number } newPos - index where the new tag will be stored\n   */\n  function moveChild(tagName, newPos) {\n    var parent = this.parent;\n    var tags;\n    // no parent no move\n    if (!parent) { return }\n\n    tags = parent.tags[tagName];\n\n    if (isArray(tags))\n      { tags.splice(newPos, 0, tags.splice(tags.indexOf(this), 1)[0]); }\n    else { arrayishAdd(parent.tags, tagName, this); }\n  }\n\n  /**\n   * Move virtual tag and all child nodes\n   * @this Tag\n   * @param { Node } src  - the node that will do the inserting\n   * @param { Tag } target - insert before this tag's first child\n   */\n  function moveVirtual(src, target) {\n    var this$1 = this;\n\n    var el = this.__.head;\n    var sib;\n    var frag = createFragment();\n\n    while (el) {\n      sib = el.nextSibling;\n      frag.appendChild(el);\n      el = sib;\n      if (el === this$1.__.tail) {\n        frag.appendChild(el);\n        src.insertBefore(frag, target.__.head);\n        break\n      }\n    }\n  }\n\n  /**\n   * Convert the item looped into an object used to extend the child tag properties\n   * @param   { Object } expr - object containing the keys used to extend the children tags\n   * @param   { * } key - value to assign to the new object returned\n   * @param   { * } val - value containing the position of the item in the array\n   * @returns { Object } - new object containing the values of the original item\n   *\n   * The variables 'key' and 'val' are arbitrary.\n   * They depend on the collection type looped (Array, Object)\n   * and on the expression used on the each tag\n   *\n   */\n  function mkitem(expr, key, val) {\n    var item = {};\n    item[expr.key] = key;\n    if (expr.pos) { item[expr.pos] = val; }\n    return item\n  }\n\n  /**\n   * Unmount the redundant tags\n   * @param   { Array } items - array containing the current items to loop\n   * @param   { Array } tags - array containing all the children tags\n   */\n  function unmountRedundant(items, tags, filteredItemsCount) {\n    var i = tags.length;\n    var j = items.length - filteredItemsCount;\n\n    while (i > j) {\n      i--;\n      remove.apply(tags[i], [tags, i]);\n    }\n  }\n\n\n  /**\n   * Remove a child tag\n   * @this Tag\n   * @param   { Array } tags - tags collection\n   * @param   { Number } i - index of the tag to remove\n   */\n  function remove(tags, i) {\n    tags.splice(i, 1);\n    this.unmount();\n    arrayishRemove(this.parent, this, this.__.tagName, true);\n  }\n\n  /**\n   * Move the nested custom tags in non custom loop tags\n   * @this Tag\n   * @param   { Number } i - current position of the loop tag\n   */\n  function moveNestedTags(i) {\n    var this$1 = this;\n\n    each(Object.keys(this.tags), function (tagName) {\n      moveChild.apply(this$1.tags[tagName], [tagName, i]);\n    });\n  }\n\n  /**\n   * Move a child tag\n   * @this Tag\n   * @param   { HTMLElement } root - dom node containing all the loop children\n   * @param   { Tag } nextTag - instance of the next tag preceding the one we want to move\n   * @param   { Boolean } isVirtual - is it a virtual tag?\n   */\n  function move(root, nextTag, isVirtual) {\n    if (isVirtual)\n      { moveVirtual.apply(this, [root, nextTag]); }\n    else\n      { safeInsert(root, this.root, nextTag.root); }\n  }\n\n  /**\n   * Insert and mount a child tag\n   * @this Tag\n   * @param   { HTMLElement } root - dom node containing all the loop children\n   * @param   { Tag } nextTag - instance of the next tag preceding the one we want to insert\n   * @param   { Boolean } isVirtual - is it a virtual tag?\n   */\n  function insert(root, nextTag, isVirtual) {\n    if (isVirtual)\n      { makeVirtual.apply(this, [root, nextTag]); }\n    else\n      { safeInsert(root, this.root, nextTag.root); }\n  }\n\n  /**\n   * Append a new tag into the DOM\n   * @this Tag\n   * @param   { HTMLElement } root - dom node containing all the loop children\n   * @param   { Boolean } isVirtual - is it a virtual tag?\n   */\n  function append(root, isVirtual) {\n    if (isVirtual)\n      { makeVirtual.call(this, root); }\n    else\n      { root.appendChild(this.root); }\n  }\n\n  /**\n   * Return the value we want to use to lookup the postion of our items in the collection\n   * @param   { String }  keyAttr         - lookup string or expression\n   * @param   { * }       originalItem    - original item from the collection\n   * @param   { Object }  keyedItem       - object created by riot via { item, i in collection }\n   * @param   { Boolean } hasKeyAttrExpr  - flag to check whether the key is an expression\n   * @returns { * } value that we will use to figure out the item position via collection.indexOf\n   */\n  function getItemId(keyAttr, originalItem, keyedItem, hasKeyAttrExpr) {\n    if (keyAttr) {\n      return hasKeyAttrExpr ?  tmpl(keyAttr, keyedItem) :  originalItem[keyAttr]\n    }\n\n    return originalItem\n  }\n\n  /**\n   * Manage tags having the 'each'\n   * @param   { HTMLElement } dom - DOM node we need to loop\n   * @param   { Tag } parent - parent tag instance where the dom node is contained\n   * @param   { String } expr - string contained in the 'each' attribute\n   * @returns { Object } expression object for this each loop\n   */\n  function _each(dom, parent, expr) {\n    var mustReorder = typeof getAttribute(dom, LOOP_NO_REORDER_DIRECTIVE) !== T_STRING || removeAttribute(dom, LOOP_NO_REORDER_DIRECTIVE);\n    var keyAttr = getAttribute(dom, KEY_DIRECTIVE);\n    var hasKeyAttrExpr = keyAttr ? tmpl.hasExpr(keyAttr) : false;\n    var tagName = getName(dom);\n    var impl = __TAG_IMPL[tagName];\n    var parentNode = dom.parentNode;\n    var placeholder = createDOMPlaceholder();\n    var child = get(dom);\n    var ifExpr = getAttribute(dom, CONDITIONAL_DIRECTIVE);\n    var tags = [];\n    var isLoop = true;\n    var innerHTML = dom.innerHTML;\n    var isAnonymous = !__TAG_IMPL[tagName];\n    var isVirtual = dom.tagName === 'VIRTUAL';\n    var oldItems = [];\n\n    // remove the each property from the original tag\n    removeAttribute(dom, LOOP_DIRECTIVE);\n    removeAttribute(dom, KEY_DIRECTIVE);\n\n    // parse the each expression\n    expr = tmpl.loopKeys(expr);\n    expr.isLoop = true;\n\n    if (ifExpr) { removeAttribute(dom, CONDITIONAL_DIRECTIVE); }\n\n    // insert a marked where the loop tags will be injected\n    parentNode.insertBefore(placeholder, dom);\n    parentNode.removeChild(dom);\n\n    expr.update = function updateEach() {\n      // get the new items collection\n      expr.value = tmpl(expr.val, parent);\n\n      var items = expr.value;\n      var frag = createFragment();\n      var isObject = !isArray(items) && !isString(items);\n      var root = placeholder.parentNode;\n      var tmpItems = [];\n      var hasKeys = isObject && !!items;\n\n      // if this DOM was removed the update here is useless\n      // this condition fixes also a weird async issue on IE in our unit test\n      if (!root) { return }\n\n      // object loop. any changes cause full redraw\n      if (isObject) {\n        items = items ? Object.keys(items).map(function (key) { return mkitem(expr, items[key], key); }) : [];\n      }\n\n      // store the amount of filtered items\n      var filteredItemsCount = 0;\n\n      // loop all the new items\n      each(items, function (_item, index) {\n        var i = index - filteredItemsCount;\n        var item = !hasKeys && expr.key ? mkitem(expr, _item, index) : _item;\n\n        // skip this item because it must be filtered\n        if (ifExpr && !tmpl(ifExpr, extend(create(parent), item))) {\n          filteredItemsCount ++;\n          return\n        }\n\n        var itemId = getItemId(keyAttr, _item, item, hasKeyAttrExpr);\n        // reorder only if the items are not objects\n        // or a key attribute has been provided\n        var doReorder = !isObject && mustReorder && typeof _item === T_OBJECT || keyAttr;\n        var oldPos = oldItems.indexOf(itemId);\n        var isNew = oldPos === -1;\n        var pos = !isNew && doReorder ? oldPos : i;\n        // does a tag exist in this position?\n        var tag = tags[pos];\n        var mustAppend = i >= oldItems.length;\n        var mustCreate = doReorder && isNew || !doReorder && !tag || !tags[i];\n\n        // new tag\n        if (mustCreate) {\n          tag = createTag(impl, {\n            parent: parent,\n            isLoop: isLoop,\n            isAnonymous: isAnonymous,\n            tagName: tagName,\n            root: dom.cloneNode(isAnonymous),\n            item: item,\n            index: i,\n          }, innerHTML);\n\n          // mount the tag\n          tag.mount();\n\n          if (mustAppend)\n            { append.apply(tag, [frag || root, isVirtual]); }\n          else\n            { insert.apply(tag, [root, tags[i], isVirtual]); }\n\n          if (!mustAppend) { oldItems.splice(i, 0, item); }\n          tags.splice(i, 0, tag);\n          if (child) { arrayishAdd(parent.tags, tagName, tag, true); }\n        } else if (pos !== i && doReorder) {\n          // move\n          if (keyAttr || contains(items, oldItems[pos])) {\n            move.apply(tag, [root, tags[i], isVirtual]);\n            // move the old tag instance\n            tags.splice(i, 0, tags.splice(pos, 1)[0]);\n            // move the old item\n            oldItems.splice(i, 0, oldItems.splice(pos, 1)[0]);\n          }\n\n          // update the position attribute if it exists\n          if (expr.pos) { tag[expr.pos] = i; }\n\n          // if the loop tags are not custom\n          // we need to move all their custom tags into the right position\n          if (!child && tag.tags) { moveNestedTags.call(tag, i); }\n        }\n\n        // cache the original item to use it in the events bound to this node\n        // and its children\n        extend(tag.__, {\n          item: item,\n          index: i,\n          parent: parent\n        });\n\n        tmpItems[i] = itemId;\n\n        if (!mustCreate) { tag.update(item); }\n      });\n\n      // remove the redundant tags\n      unmountRedundant(items, tags, filteredItemsCount);\n\n      // clone the items array\n      oldItems = tmpItems.slice();\n\n      root.insertBefore(frag, placeholder);\n    };\n\n    expr.unmount = function () {\n      each(tags, function (t) { t.unmount(); });\n    };\n\n    return expr\n  }\n\n  var RefExpr = {\n    init: function init(dom, parent, attrName, attrValue) {\n      this.dom = dom;\n      this.attr = attrName;\n      this.rawValue = attrValue;\n      this.parent = parent;\n      this.hasExp = tmpl.hasExpr(attrValue);\n      return this\n    },\n    update: function update() {\n      var old = this.value;\n      var customParent = this.parent && getImmediateCustomParent(this.parent);\n      // if the referenced element is a custom tag, then we set the tag itself, rather than DOM\n      var tagOrDom = this.dom.__ref || this.tag || this.dom;\n\n      this.value = this.hasExp ? tmpl(this.rawValue, this.parent) : this.rawValue;\n\n      // the name changed, so we need to remove it from the old key (if present)\n      if (!isBlank(old) && customParent) { arrayishRemove(customParent.refs, old, tagOrDom); }\n      if (!isBlank(this.value) && isString(this.value)) {\n        // add it to the refs of parent tag (this behavior was changed >=3.0)\n        if (customParent) { arrayishAdd(\n          customParent.refs,\n          this.value,\n          tagOrDom,\n          // use an array if it's a looped node and the ref is not an expression\n          null,\n          this.parent.__.index\n        ); }\n\n        if (this.value !== old) {\n          setAttribute(this.dom, this.attr, this.value);\n        }\n      } else {\n        removeAttribute(this.dom, this.attr);\n      }\n\n      // cache the ref bound to this dom node\n      // to reuse it in future (see also #2329)\n      if (!this.dom.__ref) { this.dom.__ref = tagOrDom; }\n    },\n    unmount: function unmount() {\n      var tagOrDom = this.tag || this.dom;\n      var customParent = this.parent && getImmediateCustomParent(this.parent);\n      if (!isBlank(this.value) && customParent)\n        { arrayishRemove(customParent.refs, this.value, tagOrDom); }\n    }\n  };\n\n  /**\n   * Create a new ref directive\n   * @param   { HTMLElement } dom - dom node having the ref attribute\n   * @param   { Tag } context - tag instance where the DOM node is located\n   * @param   { String } attrName - either 'ref' or 'data-ref'\n   * @param   { String } attrValue - value of the ref attribute\n   * @returns { RefExpr } a new RefExpr object\n   */\n  function createRefDirective(dom, tag, attrName, attrValue) {\n    return create(RefExpr).init(dom, tag, attrName, attrValue)\n  }\n\n  /**\n   * Trigger the unmount method on all the expressions\n   * @param   { Array } expressions - DOM expressions\n   */\n  function unmountAll(expressions) {\n    each(expressions, function (expr) {\n      if (expr.unmount) { expr.unmount(true); }\n      else if (expr.tagName) { expr.tag.unmount(true); }\n      else if (expr.unmount) { expr.unmount(); }\n    });\n  }\n\n  var IfExpr = {\n    init: function init(dom, tag, expr) {\n      removeAttribute(dom, CONDITIONAL_DIRECTIVE);\n      extend(this, { tag: tag, expr: expr, stub: createDOMPlaceholder(), pristine: dom });\n      var p = dom.parentNode;\n      p.insertBefore(this.stub, dom);\n      p.removeChild(dom);\n\n      return this\n    },\n    update: function update$$1() {\n      this.value = tmpl(this.expr, this.tag);\n\n      if (!this.stub.parentNode) { return }\n\n      if (this.value && !this.current) { // insert\n        this.current = this.pristine.cloneNode(true);\n        this.stub.parentNode.insertBefore(this.current, this.stub);\n        this.expressions = parseExpressions.apply(this.tag, [this.current, true]);\n      } else if (!this.value && this.current) { // remove\n        this.unmount();\n        this.current = null;\n        this.expressions = [];\n      }\n\n      if (this.value) { update.call(this.tag, this.expressions); }\n    },\n    unmount: function unmount() {\n      if (this.current) {\n        if (this.current._tag) {\n          this.current._tag.unmount();\n        } else if (this.current.parentNode) {\n          this.current.parentNode.removeChild(this.current);\n        }\n      }\n\n      unmountAll(this.expressions || []);\n    }\n  };\n\n  /**\n   * Create a new if directive\n   * @param   { HTMLElement } dom - if root dom node\n   * @param   { Tag } context - tag instance where the DOM node is located\n   * @param   { String } attr - if expression\n   * @returns { IFExpr } a new IfExpr object\n   */\n  function createIfDirective(dom, tag, attr) {\n    return create(IfExpr).init(dom, tag, attr)\n  }\n\n  /**\n   * Walk the tag DOM to detect the expressions to evaluate\n   * @this Tag\n   * @param   { HTMLElement } root - root tag where we will start digging the expressions\n   * @param   { Boolean } mustIncludeRoot - flag to decide whether the root must be parsed as well\n   * @returns { Array } all the expressions found\n   */\n  function parseExpressions(root, mustIncludeRoot) {\n    var this$1 = this;\n\n    var expressions = [];\n\n    walkNodes(root, function (dom) {\n      var type = dom.nodeType;\n      var attr;\n      var tagImpl;\n\n      if (!mustIncludeRoot && dom === root) { return }\n\n      // text node\n      if (type === 3 && dom.parentNode.tagName !== 'STYLE' && tmpl.hasExpr(dom.nodeValue))\n        { expressions.push({dom: dom, expr: dom.nodeValue}); }\n\n      if (type !== 1) { return }\n\n      var isVirtual = dom.tagName === 'VIRTUAL';\n\n      // loop. each does it's own thing (for now)\n      if (attr = getAttribute(dom, LOOP_DIRECTIVE)) {\n        if(isVirtual) { setAttribute(dom, 'loopVirtual', true); } // ignore here, handled in _each\n        expressions.push(_each(dom, this$1, attr));\n        return false\n      }\n\n      // if-attrs become the new parent. Any following expressions (either on the current\n      // element, or below it) become children of this expression.\n      if (attr = getAttribute(dom, CONDITIONAL_DIRECTIVE)) {\n        expressions.push(createIfDirective(dom, this$1, attr));\n        return false\n      }\n\n      if (attr = getAttribute(dom, IS_DIRECTIVE)) {\n        if (tmpl.hasExpr(attr)) {\n          expressions.push({\n            isRtag: true,\n            expr: attr,\n            dom: dom,\n            attrs: [].slice.call(dom.attributes)\n          });\n\n          return false\n        }\n      }\n\n      // if this is a tag, stop traversing here.\n      // we ignore the root, since parseExpressions is called while we're mounting that root\n      tagImpl = get(dom);\n\n      if(isVirtual) {\n        if(getAttribute(dom, 'virtualized')) {dom.parentElement.removeChild(dom); } // tag created, remove from dom\n        if(!tagImpl && !getAttribute(dom, 'virtualized') && !getAttribute(dom, 'loopVirtual'))  // ok to create virtual tag\n          { tagImpl = { tmpl: dom.outerHTML }; }\n      }\n\n      if (tagImpl && (dom !== root || mustIncludeRoot)) {\n        var hasIsDirective = getAttribute(dom, IS_DIRECTIVE);\n        if(isVirtual && !hasIsDirective) { // handled in update\n          // can not remove attribute like directives\n          // so flag for removal after creation to prevent maximum stack error\n          setAttribute(dom, 'virtualized', true);\n          var tag = createTag(\n            {tmpl: dom.outerHTML},\n            {root: dom, parent: this$1},\n            dom.innerHTML\n          );\n\n          expressions.push(tag); // no return, anonymous tag, keep parsing\n        } else {\n          if (hasIsDirective && isVirtual)\n            { warn((\"Virtual tags shouldn't be used together with the \\\"\" + IS_DIRECTIVE + \"\\\" attribute - https://github.com/riot/riot/issues/2511\")); }\n\n          expressions.push(\n            initChild(\n              tagImpl,\n              {\n                root: dom,\n                parent: this$1\n              },\n              dom.innerHTML,\n              this$1\n            )\n          );\n          return false\n        }\n      }\n\n      // attribute expressions\n      parseAttributes.apply(this$1, [dom, dom.attributes, function (attr, expr) {\n        if (!expr) { return }\n        expressions.push(expr);\n      }]);\n    });\n\n    return expressions\n  }\n\n  /**\n   * Calls `fn` for every attribute on an element. If that attr has an expression,\n   * it is also passed to fn.\n   * @this Tag\n   * @param   { HTMLElement } dom - dom node to parse\n   * @param   { Array } attrs - array of attributes\n   * @param   { Function } fn - callback to exec on any iteration\n   */\n  function parseAttributes(dom, attrs, fn) {\n    var this$1 = this;\n\n    each(attrs, function (attr) {\n      if (!attr) { return false }\n\n      var name = attr.name;\n      var bool = isBoolAttr(name);\n      var expr;\n\n      if (contains(REF_DIRECTIVES, name) && dom.tagName.toLowerCase() !== YIELD_TAG) {\n        expr =  createRefDirective(dom, this$1, name, attr.value);\n      } else if (tmpl.hasExpr(attr.value)) {\n        expr = {dom: dom, expr: attr.value, attr: name, bool: bool};\n      }\n\n      fn(attr, expr);\n    });\n  }\n\n  /**\n   * Manage the mount state of a tag triggering also the observable events\n   * @this Tag\n   * @param { Boolean } value - ..of the isMounted flag\n   */\n  function setMountState(value) {\n    var ref = this.__;\n    var isAnonymous = ref.isAnonymous;\n    var skipAnonymous = ref.skipAnonymous;\n\n    define(this, 'isMounted', value);\n\n    if (!isAnonymous || !skipAnonymous) {\n      if (value) { this.trigger('mount'); }\n      else {\n        this.trigger('unmount');\n        this.off('*');\n        this.__.wasCreated = false;\n      }\n    }\n  }\n\n  /**\n   * Mount the current tag instance\n   * @returns { Tag } the current tag instance\n   */\n  function componentMount(tag$$1, dom, expressions, opts) {\n    var __ = tag$$1.__;\n    var root = __.root;\n    root._tag = tag$$1; // keep a reference to the tag just created\n\n    // Read all the attrs on this instance. This give us the info we need for updateOpts\n    parseAttributes.apply(__.parent, [root, root.attributes, function (attr, expr) {\n      if (!__.isAnonymous && RefExpr.isPrototypeOf(expr)) { expr.tag = tag$$1; }\n      attr.expr = expr;\n      __.instAttrs.push(attr);\n    }]);\n\n    // update the root adding custom attributes coming from the compiler\n    walkAttributes(__.impl.attrs, function (k, v) { __.implAttrs.push({name: k, value: v}); });\n    parseAttributes.apply(tag$$1, [root, __.implAttrs, function (attr, expr) {\n      if (expr) { expressions.push(expr); }\n      else { setAttribute(root, attr.name, attr.value); }\n    }]);\n\n    // initialiation\n    updateOpts.apply(tag$$1, [__.isLoop, __.parent, __.isAnonymous, opts, __.instAttrs]);\n\n    // add global mixins\n    var globalMixin = mixin(GLOBAL_MIXIN);\n\n    if (globalMixin && !__.skipAnonymous) {\n      for (var i in globalMixin) {\n        if (globalMixin.hasOwnProperty(i)) {\n          tag$$1.mixin(globalMixin[i]);\n        }\n      }\n    }\n\n    if (__.impl.fn) { __.impl.fn.call(tag$$1, opts); }\n\n    if (!__.skipAnonymous) { tag$$1.trigger('before-mount'); }\n\n    // parse layout after init. fn may calculate args for nested custom tags\n    each(parseExpressions.apply(tag$$1, [dom, __.isAnonymous]), function (e) { return expressions.push(e); });\n\n    tag$$1.update(__.item);\n\n    if (!__.isAnonymous && !__.isInline) {\n      while (dom.firstChild) { root.appendChild(dom.firstChild); }\n    }\n\n    define(tag$$1, 'root', root);\n\n    // if we need to wait that the parent \"mount\" or \"updated\" event gets triggered\n    if (!__.skipAnonymous && tag$$1.parent) {\n      var p = getImmediateCustomParent(tag$$1.parent);\n      p.one(!p.isMounted ? 'mount' : 'updated', function () {\n        setMountState.call(tag$$1, true);\n      });\n    } else {\n      // otherwise it's not a child tag we can trigger its mount event\n      setMountState.call(tag$$1, true);\n    }\n\n    tag$$1.__.wasCreated = true;\n\n    return tag$$1\n  }\n\n  /**\n   * Unmount the tag instance\n   * @param { Boolean } mustKeepRoot - if it's true the root node will not be removed\n   * @returns { Tag } the current tag instance\n   */\n  function tagUnmount(tag, mustKeepRoot, expressions) {\n    var __ = tag.__;\n    var root = __.root;\n    var tagIndex = __TAGS_CACHE.indexOf(tag);\n    var p = root.parentNode;\n\n    if (!__.skipAnonymous) { tag.trigger('before-unmount'); }\n\n    // clear all attributes coming from the mounted tag\n    walkAttributes(__.impl.attrs, function (name) {\n      if (startsWith(name, ATTRS_PREFIX))\n        { name = name.slice(ATTRS_PREFIX.length); }\n\n      removeAttribute(root, name);\n    });\n\n    // remove all the event listeners\n    tag.__.listeners.forEach(function (dom) {\n      Object.keys(dom[RIOT_EVENTS_KEY]).forEach(function (eventName) {\n        dom.removeEventListener(eventName, dom[RIOT_EVENTS_KEY][eventName]);\n      });\n    });\n\n    // remove tag instance from the global tags cache collection\n    if (tagIndex !== -1) { __TAGS_CACHE.splice(tagIndex, 1); }\n\n    // clean up the parent tags object\n    if (__.parent && !__.isAnonymous) {\n      var ptag = getImmediateCustomParent(__.parent);\n\n      if (__.isVirtual) {\n        Object\n          .keys(tag.tags)\n          .forEach(function (tagName) { return arrayishRemove(ptag.tags, tagName, tag.tags[tagName]); });\n      } else {\n        arrayishRemove(ptag.tags, __.tagName, tag);\n      }\n    }\n\n    // unmount all the virtual directives\n    if (tag.__.virts) {\n      each(tag.__.virts, function (v) {\n        if (v.parentNode) { v.parentNode.removeChild(v); }\n      });\n    }\n\n    // allow expressions to unmount themselves\n    unmountAll(expressions);\n    each(__.instAttrs, function (a) { return a.expr && a.expr.unmount && a.expr.unmount(); });\n\n    // clear the tag html if it's necessary\n    if (mustKeepRoot) { setInnerHTML(root, ''); }\n    // otherwise detach the root tag from the DOM\n    else if (p) { p.removeChild(root); }\n\n    // custom internal unmount function to avoid relying on the observable\n    if (__.onUnmount) { __.onUnmount(); }\n\n    // weird fix for a weird edge case #2409 and #2436\n    // some users might use your software not as you've expected\n    // so I need to add these dirty hacks to mitigate unexpected issues\n    if (!tag.isMounted) { setMountState.call(tag, true); }\n\n    setMountState.call(tag, false);\n\n    delete root._tag;\n\n    return tag\n  }\n\n  /**\n   * Tag creation factory function\n   * @constructor\n   * @param { Object } impl - it contains the tag template, and logic\n   * @param { Object } conf - tag options\n   * @param { String } innerHTML - html that eventually we need to inject in the tag\n   */\n  function createTag(impl, conf, innerHTML) {\n    if ( impl === void 0 ) impl = {};\n    if ( conf === void 0 ) conf = {};\n\n    var tag = conf.context || {};\n    var opts = conf.opts || {};\n    var parent = conf.parent;\n    var isLoop = conf.isLoop;\n    var isAnonymous = !!conf.isAnonymous;\n    var skipAnonymous = settings.skipAnonymousTags && isAnonymous;\n    var item = conf.item;\n    // available only for the looped nodes\n    var index = conf.index;\n    // All attributes on the Tag when it's first parsed\n    var instAttrs = [];\n    // expressions on this type of Tag\n    var implAttrs = [];\n    var tmpl = impl.tmpl;\n    var expressions = [];\n    var root = conf.root;\n    var tagName = conf.tagName || getName(root);\n    var isVirtual = tagName === 'virtual';\n    var isInline = !isVirtual && !tmpl;\n    var dom;\n\n    if (isInline || isLoop && isAnonymous) {\n      dom = root;\n    } else {\n      if (!isVirtual) { root.innerHTML = ''; }\n      dom = mkdom(tmpl, innerHTML, isSvg(root));\n    }\n\n    // make this tag observable\n    if (!skipAnonymous) { observable(tag); }\n\n    // only call unmount if we have a valid __TAG_IMPL (has name property)\n    if (impl.name && root._tag) { root._tag.unmount(true); }\n\n    define(tag, '__', {\n      impl: impl,\n      root: root,\n      skipAnonymous: skipAnonymous,\n      implAttrs: implAttrs,\n      isAnonymous: isAnonymous,\n      instAttrs: instAttrs,\n      innerHTML: innerHTML,\n      tagName: tagName,\n      index: index,\n      isLoop: isLoop,\n      isInline: isInline,\n      item: item,\n      parent: parent,\n      // tags having event listeners\n      // it would be better to use weak maps here but we can not introduce breaking changes now\n      listeners: [],\n      // these vars will be needed only for the virtual tags\n      virts: [],\n      wasCreated: false,\n      tail: null,\n      head: null\n    });\n\n    // tag protected properties\n    return [\n      ['isMounted', false],\n      // create a unique id to this tag\n      // it could be handy to use it also to improve the virtual dom rendering speed\n      ['_riot_id', uid()],\n      ['root', root],\n      ['opts', opts, { writable: true, enumerable: true }],\n      ['parent', parent || null],\n      // protect the \"tags\" and \"refs\" property from being overridden\n      ['tags', {}],\n      ['refs', {}],\n      ['update', function (data) { return componentUpdate(tag, data, expressions); }],\n      ['mixin', function () {\n        var mixins = [], len = arguments.length;\n        while ( len-- ) mixins[ len ] = arguments[ len ];\n\n        return componentMixin.apply(void 0, [ tag ].concat( mixins ));\n    }],\n      ['mount', function () { return componentMount(tag, dom, expressions, opts); }],\n      ['unmount', function (mustKeepRoot) { return tagUnmount(tag, mustKeepRoot, expressions); }]\n    ].reduce(function (acc, ref) {\n      var key = ref[0];\n      var value = ref[1];\n      var opts = ref[2];\n\n      define(tag, key, value, opts);\n      return acc\n    }, extend(tag, item))\n  }\n\n  /**\n   * Mount a tag creating new Tag instance\n   * @param   { Object } root - dom node where the tag will be mounted\n   * @param   { String } tagName - name of the riot tag we want to mount\n   * @param   { Object } opts - options to pass to the Tag instance\n   * @param   { Object } ctx - optional context that will be used to extend an existing class ( used in riot.Tag )\n   * @returns { Tag } a new Tag instance\n   */\n  function mount$1(root, tagName, opts, ctx) {\n    var impl = __TAG_IMPL[tagName];\n    var implClass = __TAG_IMPL[tagName].class;\n    var context = ctx || (implClass ? create(implClass.prototype) : {});\n    // cache the inner HTML to fix #855\n    var innerHTML = root._innerHTML = root._innerHTML || root.innerHTML;\n    var conf = extend({ root: root, opts: opts, context: context }, { parent: opts ? opts.parent : null });\n    var tag;\n\n    if (impl && root) { tag = createTag(impl, conf, innerHTML); }\n\n    if (tag && tag.mount) {\n      tag.mount(true);\n      // add this tag to the virtualDom variable\n      if (!contains(__TAGS_CACHE, tag)) { __TAGS_CACHE.push(tag); }\n    }\n\n    return tag\n  }\n\n\n\n  var tags = /*#__PURE__*/Object.freeze({\n    arrayishAdd: arrayishAdd,\n    getTagName: getName,\n    inheritParentProps: inheritParentProps,\n    mountTo: mount$1,\n    selectTags: query,\n    arrayishRemove: arrayishRemove,\n    getTag: get,\n    initChildTag: initChild,\n    moveChildTag: moveChild,\n    makeReplaceVirtual: makeReplaceVirtual,\n    getImmediateCustomParentTag: getImmediateCustomParent,\n    makeVirtual: makeVirtual,\n    moveVirtual: moveVirtual,\n    unmountAll: unmountAll,\n    createIfDirective: createIfDirective,\n    createRefDirective: createRefDirective\n  });\n\n  /**\n   * Riot public api\n   */\n  var settings$1 = settings;\n  var util = {\n    tmpl: tmpl,\n    brackets: brackets,\n    styleManager: styleManager,\n    vdom: __TAGS_CACHE,\n    styleNode: styleManager.styleNode,\n    // export the riot internal utils as well\n    dom: dom,\n    check: check,\n    misc: misc,\n    tags: tags\n  };\n\n  // export the core props/methods\n  var Tag$1 = Tag;\n  var tag$1 = tag;\n  var tag2$1 = tag2;\n  var mount$2 = mount;\n  var mixin$1 = mixin;\n  var update$2 = update$1;\n  var unregister$1 = unregister;\n  var version$1 = version;\n  var observable$1 = observable;\n\n  var riot$1 = extend({}, core, {\n    observable: observable,\n    settings: settings$1,\n    util: util,\n  });\n\n  exports.settings = settings$1;\n  exports.util = util;\n  exports.Tag = Tag$1;\n  exports.tag = tag$1;\n  exports.tag2 = tag2$1;\n  exports.mount = mount$2;\n  exports.mixin = mixin$1;\n  exports.update = update$2;\n  exports.unregister = unregister$1;\n  exports.version = version$1;\n  exports.observable = observable$1;\n  exports.default = riot$1;\n\n  Object.defineProperty(exports, '__esModule', { value: true });\n\n})));\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! riot */ \"./node_modules/riot/riot.js\")))\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/riot/riot.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://%5Bname%5D/(webpack)/buildin/global.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/(webpack)/buildin/module.js?");

/***/ }),

/***/ "./src/functions/buildDictionary.js":
/*!******************************************!*\
  !*** ./src/functions/buildDictionary.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Build a dictionary from a list of objects.\n *\n * @param {Object[]} objects    - The objects to make a dictionary from.\n * @param {string} [key='path'] - The property to key each object by.\n * @return {Object.<string, Object>} The dictionary of objects.\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (objects) {\n  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'path';\n  var dictionary = {};\n\n  if (!Array.isArray(objects)) {\n    return dictionary;\n  }\n\n  for (var i = 0; i < objects.length; i++) {\n    if (!objects[i] || !objects[i][key]) {\n      continue;\n    }\n\n    dictionary[objects[i][key]] = objects[i];\n  }\n\n  return dictionary;\n});\n\n//# sourceURL=webpack://%5Bname%5D/./src/functions/buildDictionary.js?");

/***/ }),

/***/ "./src/functions/buildTree.js":
/*!************************************!*\
  !*** ./src/functions/buildTree.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Build a property tree from a dictionary of fields.\n *\n * @param {FieldDictionary} dictionary\n * @returns {Field}\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (dictionary) {\n  // Let's make a tree out of a dictionary\n  var tree = {\n    path: '',\n    children: []\n  }; // Bail early on an empty dictionary\n\n  if (!dictionary) {\n    return tree;\n  } // Make sure the root is available as a parent in the dictionary\n\n\n  if (dictionary['']) {\n    tree = dictionary[''];\n  } else {\n    dictionary[''] = tree;\n  }\n\n  var path, field, parent; // Link up properties to their parents, placing any properties without\n  // parents into the children of our tree\n\n  for (path in dictionary) {\n    field = dictionary[path]; // Skip the root node silently\n\n    if (field === tree) {\n      continue;\n    }\n\n    if (!field || field.path == null || path !== field.path) {\n      // You're weird and don't belong in our tree, bye Felicia\n      // TODO: \"path\" could be valid here, set it to field.path if so\n      console.warn(\"Skipped field without path\", field);\n      continue;\n    }\n\n    if (field.parent == null) {\n      // You don't have an explicitly defined parent, bye Felicia\n      // TODO: Add to root?\n      console.warn(\"Skipped field '\".concat(path, \"'; it has no parent\"));\n      continue;\n    }\n\n    parent = dictionary[field.parent];\n\n    if (!parent) {\n      // Sorry, you're an orphan, you don't get into the tree\n      // TODO: Be nice and create a parent for them?\n      console.warn(\"Orphaned field '\".concat(path, \"'\"));\n      continue;\n    }\n\n    parent.children = parent.children || [];\n\n    if (!parent.children.includes(field)) {\n      parent.children.push(field);\n    }\n  }\n\n  return tree;\n});\n\n//# sourceURL=webpack://%5Bname%5D/./src/functions/buildTree.js?");

/***/ }),

/***/ "./src/functions/joinPath.js":
/*!***********************************!*\
  !*** ./src/functions/joinPath.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash_trim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/trim */ \"./node_modules/lodash/trim.js\");\n/* harmony import */ var lodash_trim__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_trim__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * Join field path segments together.\n *\n * @param {...string} segments The path segments to join\n * @return {string} The joined path\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  for (var _len = arguments.length, segments = new Array(_len), _key = 0; _key < _len; _key++) {\n    segments[_key] = arguments[_key];\n  }\n\n  if (!segments || segments.length === 0) return ''; // Trim whitespace and dots\n\n  segments = segments.map(function (segment) {\n    return lodash_trim__WEBPACK_IMPORTED_MODULE_0___default()(segment, ' .');\n  }); // Join with dots\n\n  return segments.join('.');\n});\n\n//# sourceURL=webpack://%5Bname%5D/./src/functions/joinPath.js?");

/***/ }),

/***/ "./src/functions/multiply.js":
/*!***********************************!*\
  !*** ./src/functions/multiply.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash_multiply__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/multiply */ \"./node_modules/lodash/multiply.js\");\n/* harmony import */ var lodash_multiply__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_multiply__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (lodash_multiply__WEBPACK_IMPORTED_MODULE_0___default.a);\n\n//# sourceURL=webpack://%5Bname%5D/./src/functions/multiply.js?");

/***/ }),

/***/ "./src/functions/splitPath.js":
/*!************************************!*\
  !*** ./src/functions/splitPath.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Split a field path into its \"parent path\" and \"key\" segments.\n *\n * @param {string} path            - The field path to split.\n * @param {string} [delimiter='.'] - The path delimiter to use.\n * @return {string[]} [parentPath, key]\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (path) {\n  var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.';\n  var parentPath, key;\n  var lastDelimiterIndex = path.lastIndexOf(delimiter);\n\n  if (lastDelimiterIndex < 1) {\n    parentPath = '';\n    key = path;\n  } else {\n    parentPath = path.substring(0, lastDelimiterIndex);\n    key = path.substring(lastDelimiterIndex + 1);\n  }\n\n  return [parentPath, key];\n});\n\n//# sourceURL=webpack://%5Bname%5D/./src/functions/splitPath.js?");

/***/ }),

/***/ "./src/functions/sum.js":
/*!******************************!*\
  !*** ./src/functions/sum.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash_sum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/sum */ \"./node_modules/lodash/sum.js\");\n/* harmony import */ var lodash_sum__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_sum__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {\n    values[_key] = arguments[_key];\n  }\n\n  return lodash_sum__WEBPACK_IMPORTED_MODULE_0___default()(values);\n});\n\n//# sourceURL=webpack://%5Bname%5D/./src/functions/sum.js?");

/***/ }),

/***/ "./src/functions/traverseTree.js":
/*!***************************************!*\
  !*** ./src/functions/traverseTree.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isFunction */ \"./node_modules/lodash/isFunction.js\");\n/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * Traverse a tree.\n *\n * TODO: Visitor object? Could have multiple pre/post callbacks.\n *\n * Traversal of children can be halted by returning false from the pre-order\n * operation function.\n *\n * @param {Object}   node - The node to traverse.\n * @param {Function} pre  - Pre-order operation.\n * @param {Function} post - Post-order operation.\n */\n\nfunction traverseTree(node) {\n  var pre = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  var post = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n\n  if (!node) {\n    return;\n  }\n\n  var result;\n\n  if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default()(pre)) {\n    result = pre(node);\n\n    if (result === false) {\n      return;\n    }\n  }\n\n  var children = node.children || [];\n\n  for (var i = 0; i < children.length; i++) {\n    traverseTree(children[i], pre, post);\n  }\n\n  if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default()(post)) {\n    post(node);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (traverseTree);\n\n//# sourceURL=webpack://%5Bname%5D/./src/functions/traverseTree.js?");

/***/ }),

/***/ "./src/mixins/domEvent.js":
/*!********************************!*\
  !*** ./src/mixins/domEvent.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * A mixin for firing DOM events from a Riot tag.\n *\n * Adapted from cognitom's Riot mixin pack.\n *\n * @mixin\n * @see {@link https://github.com/cognitom/riot-mixin-pack}\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  /**\n   * Trigger a DOM event on the root element of the tag.\n   *\n   * @param {string}       eventName      - The name of the event to fire\n   * @param {Event|Object} [event]        - The event object to dispatch, or data to attach to the created event.\n   * @param {boolean}      [bubbles=true] - Whether the event should bubble up the DOM.\n   */\n  triggerDom: function triggerDom(eventName, event, bubbles) {\n    bubbles = bubbles !== undefined ? bubbles : true; // Create the event if one isn't given\n\n    if (!event || !(event instanceof Event)) {\n      event = new CustomEvent(eventName, {\n        bubbles: bubbles,\n        cancelable: true,\n        detail: event\n      });\n    }\n\n    this.root.dispatchEvent(event);\n  }\n});\n\n//# sourceURL=webpack://%5Bname%5D/./src/mixins/domEvent.js?");

/***/ }),

/***/ "./src/mixins/edit.js":
/*!****************************!*\
  !*** ./src/mixins/edit.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  edit: function edit(event) {\n    // Grab the input element\n    var input = event.target; // Dispatch an edit event\n\n    this.triggerDom('edit', {\n      input: input,\n      name: input.name,\n      value: getInputValue(input)\n    });\n  }\n});\n\nfunction getInputValue(input) {\n  if (input.type === 'checkbox') {\n    return input.checked;\n  }\n\n  return input.value;\n}\n\n//# sourceURL=webpack://%5Bname%5D/./src/mixins/edit.js?");

/***/ }),

/***/ "./src/mixins/util.js":
/*!****************************!*\
  !*** ./src/mixins/util.js ***!
  \****************************/
/*! exports provided: default, util */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"util\", function() { return util; });\n/* harmony import */ var case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! case */ \"./node_modules/case/dist/Case.js\");\n/* harmony import */ var case__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(case__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_toUpper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/toUpper */ \"./node_modules/lodash/toUpper.js\");\n/* harmony import */ var lodash_toUpper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_toUpper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_clamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/clamp */ \"./node_modules/lodash/clamp.js\");\n/* harmony import */ var lodash_clamp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_clamp__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/**\n * Utility functions mixin for Riot tags.\n *\n * TODO: Extract these and just compose them here for the mixin.\n */\n\nvar util = {\n  /**\n   * Convert a string to title case.\n   *\n   * TODO: This could really be enhanced!\n   *\n   * @param {string} string\n   * @return {string}\n   */\n  sentenceCase: function sentenceCase(string) {\n    return case__WEBPACK_IMPORTED_MODULE_0___default.a.sentence(string);\n  },\n\n  /**\n   * Convert a string to upper case.\n   *\n   * @param {string} string\n   * @return {string}\n   */\n  upperCase: function upperCase(string) {\n    return lodash_toUpper__WEBPACK_IMPORTED_MODULE_1___default()(string);\n  },\n\n  /**\n   * Clamp a value.\n   *\n   * TODO: Seems to be redundant.\n   *\n   * @param {number} value\n   * @param {number} min\n   * @param {number} max\n   * @return {string|number}\n   */\n  clamp: function clamp(value, min, max) {\n    return lodash_clamp__WEBPACK_IMPORTED_MODULE_2___default()(value, min, max);\n  },\n\n  /**\n   * Determine whether a value is numeric.\n   *\n   * @param {*} value\n   * @return boolean\n   */\n  isNumeric: function isNumeric(value) {\n    return (typeof value === 'number' || typeof value === 'string') && !isNaN(parseFloat(value)) && isFinite(value);\n  }\n};\n/**\n * @mixin\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  util: util\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/mixins/util.js?");

/***/ }),

/***/ "./src/pragma.js":
/*!***********************!*\
  !*** ./src/pragma.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var riot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! riot */ \"./node_modules/riot/riot.js\");\n/* harmony import */ var riot__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(riot__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tags_pragma_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tags/pragma.tag */ \"./src/tags/pragma.tag\");\n\n\nriot__WEBPACK_IMPORTED_MODULE_0___default.a.mount('*');\n\n//# sourceURL=webpack://%5Bname%5D/./src/pragma.js?");

/***/ }),

/***/ "./src/services/FormProcessor.js":
/*!***************************************!*\
  !*** ./src/services/FormProcessor.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FormProcessor; });\n/* harmony import */ var expr_eval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! expr-eval */ \"./node_modules/expr-eval/dist/bundle.js\");\n/* harmony import */ var expr_eval__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(expr_eval__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/clone */ \"./node_modules/lodash/clone.js\");\n/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_clone__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/merge */ \"./node_modules/lodash/merge.js\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_defaultsDeep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/defaultsDeep */ \"./node_modules/lodash/defaultsDeep.js\");\n/* harmony import */ var lodash_defaultsDeep__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_defaultsDeep__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/map */ \"./node_modules/lodash/map.js\");\n/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/reduce */ \"./node_modules/lodash/reduce.js\");\n/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/has */ \"./node_modules/lodash/has.js\");\n/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/get */ \"./node_modules/lodash/get.js\");\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/set */ \"./node_modules/lodash/set.js\");\n/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var lodash_pull__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/pull */ \"./node_modules/lodash/pull.js\");\n/* harmony import */ var lodash_pull__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_pull__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var lodash_defaultTo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/defaultTo */ \"./node_modules/lodash/defaultTo.js\");\n/* harmony import */ var lodash_defaultTo__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_defaultTo__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var lodash_difference__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/difference */ \"./node_modules/lodash/difference.js\");\n/* harmony import */ var lodash_difference__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_difference__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var lodash_intersection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/intersection */ \"./node_modules/lodash/intersection.js\");\n/* harmony import */ var lodash_intersection__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_intersection__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash/isPlainObject */ \"./node_modules/lodash/isPlainObject.js\");\n/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash/toNumber */ \"./node_modules/lodash/toNumber.js\");\n/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash_toNumber__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var lodash_zipObject__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash/zipObject */ \"./node_modules/lodash/zipObject.js\");\n/* harmony import */ var lodash_zipObject__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash_zipObject__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash/sortBy */ \"./node_modules/lodash/sortBy.js\");\n/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash_sortBy__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _mixins_util__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../mixins/util */ \"./src/mixins/util.js\");\n/* harmony import */ var _functions_sum__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../functions/sum */ \"./src/functions/sum.js\");\n/* harmony import */ var lodash_sumBy__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! lodash/sumBy */ \"./node_modules/lodash/sumBy.js\");\n/* harmony import */ var lodash_sumBy__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(lodash_sumBy__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _functions_multiply__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../functions/multiply */ \"./src/functions/multiply.js\");\n/* harmony import */ var _functions_buildDictionary__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../functions/buildDictionary */ \"./src/functions/buildDictionary.js\");\n/* harmony import */ var _functions_buildTree__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../functions/buildTree */ \"./src/functions/buildTree.js\");\n/* harmony import */ var _functions_traverseTree__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../functions/traverseTree */ \"./src/functions/traverseTree.js\");\n/* harmony import */ var _functions_splitPath__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../functions/splitPath */ \"./src/functions/splitPath.js\");\n/* harmony import */ var _functions_joinPath__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../functions/joinPath */ \"./src/functions/joinPath.js\");\n/* harmony import */ var flat__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! flat */ \"./node_modules/flat/index.js\");\n/* harmony import */ var flat__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(flat__WEBPACK_IMPORTED_MODULE_26__);\n/* harmony import */ var deep_object_diff__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! deep-object-diff */ \"./node_modules/deep-object-diff/dist/index.js\");\n/* harmony import */ var deep_object_diff__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(deep_object_diff__WEBPACK_IMPORTED_MODULE_27__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar UP = -1;\nvar BOTH = 0;\nvar DOWN = 1;\n/**\n * Pragma form.\n *\n * Expands field lists a dictionary and tree. Processes field expressions from\n * state data.\n *\n * TODO: Rename to Form?\n *\n * @class FormProcessor\n */\n\nvar FormProcessor =\n/*#__PURE__*/\nfunction () {\n  /**\n   * Create a new property processor.\n   *\n   * @constructor\n   * @param {Field[]}                     [fields=[]]       - Initial form fields.\n   * @param {Object.<string, Function>}   [functions={}]    - Functions to make available for field expressions.\n   * @param {Object.<string, Object>}     [inputOptions={}] - Default input options keyed by input type.\n   */\n  function FormProcessor() {\n    var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var functions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    var inputOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n    _classCallCheck(this, FormProcessor);\n\n    /**\n     * Typecasting functions for each field type.\n     *\n     * TODO: Strong casting functions\n     *\n     * @type {Object.<string, Function>}\n     */\n    this.casts = {\n      'string': function string(f, v) {\n        return v == null ? '' : '' + v;\n      },\n      'number': function number(f, v) {\n        return lodash_toNumber__WEBPACK_IMPORTED_MODULE_14___default()(_mixins_util__WEBPACK_IMPORTED_MODULE_17__[\"util\"].clamp(v, lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(f, 'options.min'), lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(f, 'options.max')));\n      },\n      'boolean': function boolean(f, v) {\n        return !!v;\n      }\n    };\n    /**\n     * Default property values for each field type.\n     *\n     * @type {Object}\n     */\n\n    this.defaults = {};\n    this.setDefaults({\n      '*': {\n        type: 'number',\n        visible: true\n      },\n      'virtual': {\n        visible: false,\n        virtual: true,\n        omit: true\n      },\n      'string': {\n        input: 'string',\n        default: ''\n      },\n      'number': {\n        input: 'number',\n        default: 0,\n        options: {\n          min: -100,\n          max: 100,\n          step: 1\n        }\n      },\n      'boolean': {\n        input: 'boolean',\n        default: false\n      },\n      'selection': {\n        input: 'selection',\n        options: {\n          options: {}\n        }\n      },\n      'section': {\n        input: 'section'\n      },\n      'group': {\n        input: 'group'\n      },\n      'list': {\n        input: 'list'\n      },\n      'list-item': {\n        input: 'list-item'\n      },\n      'table': {\n        input: 'pragma-table'\n      }\n    });\n    /**\n     * Default input options for each input type.\n     *\n     * @type {Object.<string, Object>}\n     */\n\n    this.inputOptions = lodash_merge__WEBPACK_IMPORTED_MODULE_2___default()({}, inputOptions);\n    /**\n     * Expression functions.\n     *\n     * @type {Object.<string, Function>}\n     */\n\n    this.functions = {};\n    /**\n     * Expression parser.\n     *\n     * @type {Parser}\n     */\n\n    this.parser = new expr_eval__WEBPACK_IMPORTED_MODULE_0___default.a.Parser({\n      operators: {\n        in: true\n      }\n    }); // Set the functions\n\n    this.addFunctions(lodash_merge__WEBPACK_IMPORTED_MODULE_2___default()({\n      concat: function concat() {\n        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n          args[_key] = arguments[_key];\n        }\n\n        return args.join('');\n      },\n      keys: Object.keys,\n      multiply: _functions_multiply__WEBPACK_IMPORTED_MODULE_20__[\"default\"],\n      sum: _functions_sum__WEBPACK_IMPORTED_MODULE_18__[\"default\"],\n      sumBy: lodash_sumBy__WEBPACK_IMPORTED_MODULE_19___default.a,\n      map: lodash_map__WEBPACK_IMPORTED_MODULE_4___default.a,\n      reduce: lodash_reduce__WEBPACK_IMPORTED_MODULE_5___default.a\n    }, functions));\n    /**\n     * The set of form fields.\n     *\n     * @type {Field[]}\n     */\n\n    this.fields = [];\n    /**\n     * Fields keyed by path.\n     *\n     * @type {FieldDictionary}\n     */\n\n    this.dictionary = {};\n    /**\n     * The root node of the field tree.\n     *\n     * @type {Field}\n     */\n\n    this.tree = {}; // Set the form fields\n\n    this.setFields(fields);\n    /**\n     * Value cache for each field.\n     *\n     * @type {Object.<string, *>}\n     */\n\n    this.valueCache = {};\n    /**\n     * Field expression cache keyed by path.\n     *\n     * @type {Object.<string, Expression>}\n     */\n\n    this.expressionCache = {};\n    /**\n     * Field update dependencies keyed by path.\n     *\n     * @type {Object.<string, string[]>}\n     */\n\n    this.expressionDependencies = {};\n    /**\n     * Map of updated fields.\n     *\n     * Used to prevent updating fields more than once.\n     *\n     * @type {Object.<string, boolean>}\n     */\n\n    this.updatedFields = {};\n  }\n  /**\n   * Check whether a field exists at the given path.\n   *\n   * @protected\n   * @param {string} path - The path of the field to check.\n   * @return {boolean}\n   */\n\n\n  _createClass(FormProcessor, [{\n    key: \"hasField\",\n    value: function hasField(path) {\n      return lodash_has__WEBPACK_IMPORTED_MODULE_6___default()(this.dictionary, path);\n    }\n    /**\n     * Get the field at the given path.\n     *\n     * @protected\n     * @param {string} path - The path of the field to get.\n     * @return {Field}\n     */\n\n  }, {\n    key: \"getField\",\n    value: function getField(path) {\n      return this.dictionary[path];\n    }\n    /**\n     * Get the parent field of the field at the given path.\n     *\n     * @protected\n     * @param {Field} field\n     * @return {Field|null}\n     */\n\n  }, {\n    key: \"getFieldParent\",\n    value: function getFieldParent(field) {\n      if (!field) {\n        return null;\n      }\n\n      return this.getField(field.parent);\n    }\n    /**\n     * Get the ancestors of a field.\n     *\n     * @protected\n     * @param {Field} field\n     * @return {Field[]}\n     */\n\n  }, {\n    key: \"getFieldAncestors\",\n    value: function getFieldAncestors(field) {\n      var ancestors = [];\n\n      while (field.hasOwnProperty('parent') && this.hasField(field.parent)) {\n        field = this.getFieldParent(field);\n        ancestors.push(field);\n      }\n\n      return ancestors;\n    }\n    /**\n     * Get the descendants of a field.\n     *\n     * @protected\n     * @param {Field} field\n     * @return {Field[]}\n     */\n\n  }, {\n    key: \"getFieldDescendants\",\n    value: function getFieldDescendants(field) {\n      var i,\n          descendants = [];\n      Object(_functions_traverseTree__WEBPACK_IMPORTED_MODULE_23__[\"default\"])(field, function (descendant) {\n        descendants.push(descendant);\n      });\n      return descendants;\n    }\n    /**\n     * Get the current value of a field.\n     *\n     * @protected\n     * @param {Field} field     - The field to get the value of.\n     * @param {*}     [data={}] - Optional data to read current values from.\n     * @param {*}     [value]   - Optional current value.\n     * @return {*} The current value of the field.\n     */\n\n  }, {\n    key: \"getFieldValue\",\n    value: function getFieldValue(field) {\n      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n\n      if (!field) {\n        return value;\n      }\n\n      value = lodash_defaultTo__WEBPACK_IMPORTED_MODULE_10___default()(value, lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(data, field.path)); // Merge default values if specified\n\n      if (field.merge) {\n        if (lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_13___default()(field.default)) {\n          return lodash_merge__WEBPACK_IMPORTED_MODULE_2___default()({}, field.default, field.value, value);\n        } // TODO: Handle arrays\n\n      } // Otherwise use the first defined value\n\n\n      return lodash_defaultTo__WEBPACK_IMPORTED_MODULE_10___default()(value, lodash_defaultTo__WEBPACK_IMPORTED_MODULE_10___default()(field.value, field.default));\n    }\n    /**\n     * Get the default value of a field.\n     *\n     * @protected\n     * @param {Field} field - The field to get the default value of.\n     * @return {*} The default value of the field.\n     */\n\n  }, {\n    key: \"getFieldDefaultValue\",\n    value: function getFieldDefaultValue(field) {\n      if (!field) {\n        return null;\n      }\n\n      return field.default;\n    }\n    /**\n     * Get the template field that a field should a extend.\n     *\n     * @param {Field} field - The field to get the template for.\n     * @return {Field|null} The template field.\n     */\n\n  }, {\n    key: \"getFieldTemplate\",\n    value: function getFieldTemplate(field) {\n      if (!field) {\n        return null;\n      }\n\n      return this.getField(field.extends);\n    }\n    /**\n     * Get the keys of the field's children.\n     *\n     * @protected\n     * @param {Field} field - The field to get the child keys of.\n     * @return {array} The keys of the field's children.\n     */\n\n  }, {\n    key: \"getFieldChildrenKeys\",\n    value: function getFieldChildrenKeys(field) {\n      var i,\n          keys = [],\n          children = field.children || [];\n\n      for (i = 0; i < children.length; i++) {\n        keys.push(children[i].pathFragment);\n      }\n\n      return keys;\n    }\n    /**\n     * Get the template that a field's children should extend.\n     *\n     * @protected\n     * @param {Field} field - The field to get the child template for.\n     * @return {Field|null} The template field.\n     */\n\n  }, {\n    key: \"getFieldChildrenTemplate\",\n    value: function getFieldChildrenTemplate(field) {\n      if (!field) {\n        return null;\n      }\n\n      return this.getField(field.template);\n    }\n    /**\n     * Get the fields dependent upon the given field's expression.\n     *\n     * @protected\n     * @param {Field} field - The field whose expression to get dependent fields of.\n     * @return {Field[]} The dependent fields of the given field's expression\n     */\n\n  }, {\n    key: \"getFieldExpressionDependencies\",\n    value: function getFieldExpressionDependencies(field) {\n      var dependencies = this.expressionDependencies[field.path]; // Skip if the field has no dependencies\n\n      if (!dependencies || !dependencies.length) {\n        return [];\n      }\n\n      var fields = [];\n\n      for (var i = 0; i < dependencies.length; i++) {\n        var dependency = this.getField(dependencies[i]);\n\n        if (!dependency) {\n          continue;\n        }\n\n        fields.push(dependency);\n      }\n\n      return fields;\n    }\n    /**\n     * Get the current value of a field.\n     *\n     * Falls back to default values as appropriate.\n     *\n     * @public\n     * @param {string} path - The path to the field.\n     * @return {*} The value of the field\n     */\n\n  }, {\n    key: \"getValue\",\n    value: function getValue(path) {\n      return this.getFieldValue(this.getField(path));\n    }\n    /**\n     * Cast a value based on the property it belongs to.\n     *\n     * @public\n     * @param {Field} field\n     * @param {*} value\n     */\n\n  }, {\n    key: \"castValue\",\n    value: function castValue(field, value) {\n      if (!field) return value;\n      if (!this.casts[field.type]) return value; // if (Array.isArray(value))\n      // \treturn value.map(this.casts[field.type]);\n\n      value = this.casts[field.type](field, value);\n      return value;\n    }\n    /**\n     * Derive a field's value from some data.\n     *\n     * @protected\n     * @param {string} path - The path of the field to derive a value for.\n     * @param {Object} data - The data to derive values from.\n     * @return {*} The derived value.\n     */\n\n  }, {\n    key: \"deriveValue\",\n    value: function deriveValue(path, data) {\n      // Return from the value cache if a value is set\n      if (this.valueCache.hasOwnProperty(path)) {\n        return this.valueCache[path];\n      }\n\n      var field = this.getField(path);\n      var value = this.getFieldValue(field, data); // Return the raw value if there's no such field\n\n      if (!field) {\n        return value;\n      } // Cast the value\n\n\n      value = this.castValue(field, value); // Evaluate the field's expression\n\n      value = this.evaluateFieldExpression(field, data, value); // Fall back to defaults\n      //value = defaultTo(value, defaultTo(field.default, null));\n\n      value = this.getFieldValue(field, data, value); // Update the value cache\n\n      this.valueCache[path] = value;\n      return value;\n    }\n    /**\n     * Build a field's expression.\n     *\n     * @param {Field} field - The field to build an expression for.\n     * @return {Expression} The built expression.\n     */\n\n  }, {\n    key: \"buildFieldExpression\",\n    value: function buildFieldExpression(field) {\n      if (field.expression == null || typeof field.expression !== 'string') {\n        return null;\n      } // Use the cached expression if one is available\n\n\n      if (this.expressionCache[field.path]) {\n        return this.expressionCache[field.path];\n      } // Build the initial expression\n\n\n      var expression;\n\n      try {\n        expression = this.parser.parse(field.expression);\n      } catch (error) {\n        console.error(\"Error parsing expression for field '\".concat(field.path, \"': \").concat(error.message));\n        return null;\n      } // Substitute contextual variables\n\n\n      var substitutions = {\n        $parent: field.parent\n      };\n\n      for (var s in substitutions) {\n        try {\n          expression = expression.substitute(s, substitutions[s]);\n        } catch (error) {\n          console.error(\"Error substituting expression variable '\".concat(s, \"' for field '\").concat(field.path, \": \").concat(error.message));\n          return null;\n        }\n      }\n\n      this.expressionCache[field.path] = expression;\n      return expression;\n    }\n    /**\n     * Evaluate a field's value from its expression.\n     *\n     * Causes the evaluation of any field dependencies as a result.\n     *\n     * TODO: Evaluate (and cache) expressions for other field properties! :D\n     *\n     * @param {Field}  field   - The field to compute the value of.\n     * @param {Object} data    - The data to derive values from.\n     * @param {*}      [value] - The current value of the field.\n     * @return {*} The computed value of the field's expression.\n     */\n\n  }, {\n    key: \"evaluateFieldExpression\",\n    value: function evaluateFieldExpression(field, data, value) {\n      var _this = this;\n\n      value = this.getFieldValue(field, data, value); // Parse the expression\n\n      var expression = this.buildFieldExpression(field);\n\n      if (!expression) {\n        return value;\n      } // TODO: Extract deriving variables and building contextual functions\n      //       let variables = buildExpressionContext(field, data, expression, value)?\n      //       Contextual functions should still update the same \"variables\" reference\n      // Derive values for the variables in the expression\n\n\n      var variables = expression.variables({\n        withMembers: true\n      });\n      var values = {\n        $this: field,\n        $value: value\n      };\n\n      for (var v = 0; v < variables.length; v++) {\n        var variable = variables[v];\n        if (lodash_has__WEBPACK_IMPORTED_MODULE_6___default()(values, variable)) continue;\n        lodash_set__WEBPACK_IMPORTED_MODULE_8___default()(values, variable, this.deriveValue(variable, data));\n      } // Build contextual functions\n\n\n      values = lodash_merge__WEBPACK_IMPORTED_MODULE_2___default()(values, {\n        field: function field(path) {\n          variables.push(path);\n          return _this.getField(path);\n        },\n        value: function value(path) {\n          // Add the path to the list of expression variables\n          variables.push(path); // Derive the value for the expression\n\n          return _this.deriveValue(path, data);\n        }\n      }); // Evaluate the expression\n\n      try {\n        value = expression.evaluate(values);\n      } catch (error) {\n        console.log('evaluateFieldExpression', field, data, value);\n        console.error(\"Error evaluating expression for field '\".concat(field.path, \"': \").concat(error.message));\n      } //console.log('evaluateFieldExpression', field.path, expression.toString(), variables, values, value);\n      //console.log('evaluateFieldExpression expression', expression);\n      // Update the map of field update dependencies\n      // TODO: Exclude contextual variables\n      // TODO: Move this to an earlier processing step that evaluates the\n      //       expression with spy functions\n\n\n      for (var _v = 0; _v < variables.length; _v++) {\n        var _variable = variables[_v];\n        this.expressionDependencies[_variable] = this.expressionDependencies[_variable] || [];\n\n        if (this.expressionDependencies[_variable].indexOf(field.path) < 0) {\n          this.expressionDependencies[_variable].push(field.path);\n        }\n      }\n\n      return value;\n    }\n    /**\n     * Prepare fields from a set of field descriptions.\n     *\n     * Ascertain's the parent path and path fragment (key) of each field.\n     *\n     * TODO: Field class, FieldDescription typedef.\n     *\n     * @protected\n     * @param {Field[]} fields - The field description.\n     * @returns {Field[]} The given fields prepared with pathFragment and parent properties.\n     */\n\n  }, {\n    key: \"prepareFields\",\n    value: function prepareFields(fields) {\n      if (!fields || !fields.length) {\n        return fields;\n      }\n\n      var i, field, pathFragment, parentPath;\n\n      for (i = 0; i < fields.length; i++) {\n        field = fields[i]; // Ascertain a parent path and path fragment\n\n        var _splitPath = Object(_functions_splitPath__WEBPACK_IMPORTED_MODULE_24__[\"default\"])(field.path);\n\n        var _splitPath2 = _slicedToArray(_splitPath, 2);\n\n        parentPath = _splitPath2[0];\n        pathFragment = _splitPath2[1];\n        field.pathFragment = lodash_defaultTo__WEBPACK_IMPORTED_MODULE_10___default()(field.pathFragment, pathFragment);\n        field.parent = lodash_defaultTo__WEBPACK_IMPORTED_MODULE_10___default()(field.parent, parentPath);\n      }\n\n      return fields;\n    }\n    /**\n     * Set the form's fields.\n     *\n     * TODO: Creates, updates and removes fields accordingly.\n     *\n     * @public\n     * @param {Field[]} fields\n     */\n\n  }, {\n    key: \"setFields\",\n    value: function setFields(fields) {\n      // Prepare the fields\n      this.fields = this.prepareFields(fields); // TODO: Build dictionary from given fields, compare with current fields,\n      //       update things accordingly\n      //this.dictionary = this.buildDictionary(this.fields);\n\n      this.dictionary = this.updateDictionary(this.fields); // Compose the fields into a tree\n\n      this.tree = this.buildTree(this.dictionary); // Clear all caches\n\n      this.valueCache = {}; //this.expressionCache = {};\n\n      this.expressionDependencies = {};\n    }\n    /**\n     * Add a form field.\n     *\n     * @param {Field} field\n     */\n\n  }, {\n    key: \"addField\",\n    value: function addField(field) {\n      var parent = this.getFieldParent(field);\n\n      if (!parent) {\n        console.warn(\"Could not set field \".concat(field.path, \" - its parent does not exist\"));\n        return;\n      }\n\n      if (!parent.children) {\n        parent.children = [];\n      }\n\n      if (!parent.children.includes(field)) {\n        parent.children.push(field);\n      }\n\n      this.dictionary[field.path] = field;\n    }\n    /**\n     * Update a property with the given value.\n     *\n     * @public\n     * @param {Object} data  - The data to update.\n     * @param {string} path  - The path of the field to update.\n     * @param {*}      value - The value to set.\n     * @return {*} The updated value\n     */\n\n  }, {\n    key: \"setValue\",\n    value: function setValue(data, path, value) {\n      var field = this.getField(path); // Update the value if one is given\n\n      if (value !== undefined) {\n        if (field) {\n          field.value = value;\n        }\n\n        lodash_set__WEBPACK_IMPORTED_MODULE_8___default()(data, path, value);\n      } // Update the field at this path\n\n\n      this.updatePath(path, data); // Get the updated value\n\n      return lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(data, path);\n    }\n    /**\n     * Clear the value cache.\n     *\n     * Optionally accepts a path to clear.\n     *\n     * @param {string} path\n     */\n\n  }, {\n    key: \"clearValueCache\",\n    value: function clearValueCache() {\n      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n\n      // Just empty the entire cache if there's no path is or there's no field\n      // at the given path\n      if (!path || !this.getField(path)) {\n        this.valueCache = {};\n        return;\n      }\n\n      var i,\n          field = this.getField(path); // Clear cached values of child fields iteratively\n\n      var child,\n          children = field.children,\n          nextChildren = [];\n\n      while (children && children.length) {\n        nextChildren = [];\n\n        for (i = 0; i < children.length; i++) {\n          child = children[i];\n          delete this.valueCache[child.path];\n\n          if (child.children) {\n            nextChildren = nextChildren.concat(child.children);\n          }\n        }\n\n        children = nextChildren;\n      } // Clear the cached value for this field\n\n\n      delete this.valueCache[field.path]; // Clear cached values of parent fields iteratively\n\n      var ancestors = this.getFieldAncestors(field);\n\n      for (i = 0; i < ancestors.length; i++) {\n        delete this.valueCache[ancestors[i].path];\n      }\n    }\n    /**\n     * Derive a property's name from its path.\n     *\n     * @protected\n     * @param {Field} field\n     * @return {string} The derived name\n     */\n\n  }, {\n    key: \"deriveName\",\n    value: function deriveName(field) {\n      var path = field.path;\n      var lastDotIndex = path.lastIndexOf('.');\n      return _mixins_util__WEBPACK_IMPORTED_MODULE_17__[\"util\"].sentenceCase(path.substring(lastDotIndex + 1));\n    }\n    /**\n     * Set the default field properties for each type.\n     *\n     * @param {Object.<string, Object>} fieldProperties - The default field properties, keyed by field type.\n     */\n\n  }, {\n    key: \"setDefaults\",\n    value: function setDefaults(fieldProperties) {\n      this.defaults = lodash_merge__WEBPACK_IMPORTED_MODULE_2___default()(this.defaults, fieldProperties);\n    }\n    /**\n     * Apply the form's default properties to the given fields.\n     *\n     * Fills in default values, derives default names.\n     *\n     * @protected\n     * @param {Field[]} fields - The fields to apply default values to.\n     * @returns {Field[]}\n     */\n\n  }, {\n    key: \"applyDefaults\",\n    value: function applyDefaults(fields) {\n      if (!fields || !fields.length) {\n        return fields;\n      }\n\n      var i, field;\n\n      for (i = 0; i < fields.length; i++) {\n        field = fields[i]; // Derive a name\n\n        if (field.name === undefined) {\n          field.name = this.deriveName(field);\n        } // Apply global defaults\n\n\n        field = lodash_defaultsDeep__WEBPACK_IMPORTED_MODULE_3___default()(field, this.defaults['*']); // Apply type-specific defaults\n\n        if (this.defaults[field.type]) {\n          field = lodash_defaultsDeep__WEBPACK_IMPORTED_MODULE_3___default()(field, this.defaults[field.type]);\n        } // Apply default input options\n\n\n        if (this.inputOptions[field.input]) {\n          field.options = field.options || {};\n          field.options = lodash_defaultsDeep__WEBPACK_IMPORTED_MODULE_3___default()(field.options, this.inputOptions[field.input]);\n        } // Disable the field implicitly if it has an expression\n\n\n        if (!field.hasOwnProperty('disabled')) {\n          field.disabled = !!field.expression;\n        }\n      }\n\n      return fields;\n    }\n    /**\n     * Add to the form's functions.\n     *\n     * @param {Object.<string, Function>} functions - Functions to add, keyed by name.\n     */\n\n  }, {\n    key: \"addFunctions\",\n    value: function addFunctions(functions) {\n      // Add the functions to the form\n      this.functions = lodash_merge__WEBPACK_IMPORTED_MODULE_2___default()(this.functions, functions); // Add the functions to the expression parser\n\n      this.parser.functions = lodash_merge__WEBPACK_IMPORTED_MODULE_2___default()(this.parser.functions, this.functions); // Clear the expression cache\n      //this.expressionCache = {};\n    }\n    /**\n     * Diff the given data with the current form data.\n     *\n     * @protected\n     * @param {Object} data - The data to diff with the current form data.\n     * @return {Object} The detailed diff of current form data and given data.\n     */\n\n  }, {\n    key: \"diffFormData\",\n    value: function diffFormData(data) {\n      //console.time('buildData(this.tree)');\n      var formData = this.buildData(this.tree); //console.timeEnd('buildData(this.tree)');\n      //console.log(formData);\n      //console.time('detailedDiff');\n\n      var diff = Object(deep_object_diff__WEBPACK_IMPORTED_MODULE_27__[\"detailedDiff\"])(formData, data); //console.timeEnd('detailedDiff');\n      //console.log(diff);\n\n      return diff;\n    }\n    /**\n     * Update the form using the given data.\n     *\n     * @public\n     * @param {Object} [data] - The data to update with.\n     */\n\n  }, {\n    key: \"update\",\n    value: function update(data) {\n      this.updatePath('', data);\n    }\n    /**\n     * Update the field at the given path.\n     *\n     * @param {string} path         - The path of the field to update.\n     * @param {Object} data         - The data to update with.\n     * @param {Object} [visited={}] - Map of fields already visited.\n     */\n\n  }, {\n    key: \"updatePath\",\n    value: function updatePath(path, data) {\n      var _this2 = this;\n\n      var visited = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n      var field = this.getField(path);\n\n      if (!field || visited[field.path]) {\n        return;\n      }\n\n      this.clearValueCache(path); // Update the field and its children\n      //console.time('updatePath() ' + path);\n\n      Object(_functions_traverseTree__WEBPACK_IMPORTED_MODULE_23__[\"default\"])(field, function (field) {\n        return _this2.preUpdateField(field, data);\n      }, function (field) {\n        // Skip fields that have already been visited\n        if (visited[field.path]) {\n          //console.warn('skipped visited field', field.path);\n          return;\n        }\n\n        _this2.updateField(field, data);\n\n        visited[field.path] = true;\n      }); // Update parent fields and their dependencies\n\n      var i;\n      var ancestors = this.getFieldAncestors(field);\n\n      for (i = 0; i < ancestors.length; i++) {\n        if (visited[ancestors[i].path]) {\n          //console.log('skipped visited ancestor', field.path, ancestors[i].path, visited);\n          continue;\n        }\n\n        this.updateField(ancestors[i], data, visited);\n        visited[ancestors[i].path] = true;\n      } //console.timeEnd('updatePath() ' + path);\n\n    }\n    /**\n     * Update the given fields with the given data.\n     *\n     * Recursively descends into child fields and updates dependent fields,\n     * including parents.\n     *\n     * @protected\n     * @param {Field[]} fields - The fields to update.\n     * @param {Object}  data   - The data to update with.\n     */\n\n  }, {\n    key: \"updateFields\",\n    value: function updateFields(fields, data) {\n      if (!Array.isArray(fields) || !fields.length) {\n        return;\n      }\n\n      for (var i = 0; i < fields.length; i++) {\n        this.updatePath(fields[i].path, data);\n      }\n    }\n    /**\n     * Pre-order update the given field with the given data.\n     *\n     * @protected\n     * @param {Field}  field - The field to update.\n     * @param {Object} data  - The data to update with.\n     * @returns {boolean}\n     */\n\n  }, {\n    key: \"preUpdateField\",\n    value: function preUpdateField(field, data) {\n      this.updateFieldInheritance(field, data);\n      return !field.omit;\n    }\n    /**\n     * Update the given field with the given data.\n     *\n     * Recursively descends into child fields and updates dependent fields,\n     * including parents.\n     *\n     * @protected\n     * @param {Field}   field        - The field to update.\n     * @param {Object}  data         - The data to update with.\n     * @param {Object}  [visited={}] - Map of fields already visited.\n     */\n\n  }, {\n    key: \"updateField\",\n    value: function updateField(field, data) {\n      var visited = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n      //console.log('updateField()', field.path);\n      // Apply default values\n      this.applyDefaults([field]); // Update the state's value\n\n      this.updateDataValue(field, data); // Update the field's value (and update all fields dependent on this one)\n\n      this.updateFieldValue(field, data); // Update the fields that are dependent upon the value of this field\n\n      this.updateFieldDependencies(field, data, visited);\n    }\n    /**\n     * Update data from the given field.\n     *\n     * @protected\n     * @param {Field}  field - The field to update with.\n     * @param {Object} data  - The data to update.\n     * @return {Object} The updated data.\n     */\n\n  }, {\n    key: \"updateDataValue\",\n    value: function updateDataValue(field, data) {\n      if (!field || field.omit || field.virtual) {\n        return data;\n      }\n\n      lodash_set__WEBPACK_IMPORTED_MODULE_8___default()(data, field.path, this.deriveValue(field.path, data));\n      return data;\n    }\n    /**\n     * Update a field using the given data.\n     *\n     * @protected\n     * @param {Field}  field - The field to update.\n     * @param {Object} data  - The data to update with.\n     */\n\n  }, {\n    key: \"updateFieldValue\",\n    value: function updateFieldValue(field, data) {\n      if (!field) {\n        return;\n      } //console.log('updateFieldValue()', field.path);\n      // Update the field value\n\n\n      field.value = lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(data, field.path);\n    }\n    /**\n     * Update fields that are dependent upon the value of the given field.\n     *\n     * @protected\n     * @param {Field}  field        - The field to update dependencies of.\n     * @param {Object} data         - The data to update from.\n     * @param {Object} [visited={}] - Map of fields already visited.\n     */\n\n  }, {\n    key: \"updateFieldDependencies\",\n    value: function updateFieldDependencies(field, data) {\n      var visited = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n      // Update the field's expression dependencies\n      var dependencies = this.getFieldExpressionDependencies(field);\n\n      for (var i = 0; i < dependencies.length; i++) {\n        this.updatePath(dependencies[i].path, data, visited);\n      }\n    }\n    /**\n     * Update the ancestors of the given field.\n     *\n     * @protected\n     * @param {Field}  field - The field to update parents of.\n     * @param {Object} data  - The data to update with.\n     */\n\n  }, {\n    key: \"updateFieldAncestorValues\",\n    value: function updateFieldAncestorValues(field, data) {\n      var i,\n          parents = this.getFieldAncestors(field);\n\n      for (i = 0; i < parents.length; i++) {\n        this.updateFieldValue(parents[i], data);\n      }\n    }\n    /**\n     * Update a field's inheritance.\n     *\n     * Ensures that inherited child fields exist.\n     *\n     * @param {Field}  field - The field to update the inheritance of.\n     * @param {Object} data  - The date to update with.\n     */\n\n  }, {\n    key: \"updateFieldInheritance\",\n    value: function updateFieldInheritance(field, data) {\n      // Update child template fields\n      this.updateTemplateFields(field, data); // Inherit the field's template\n\n      this.inheritTemplate(field, data);\n    }\n    /**\n     * Get the keys of child fields that don't exist in the given data.\n     *\n     * Retrieves the new keys, existing keys and old keys of a field compared\n     * to its data.\n     *\n     * @protected\n     * @param {Field} field - The field with a template.\n     * @param {Object} data - The data to diff against.\n     * @return array [newPaths[], existingPaths[], oldPaths[]]\n     */\n\n  }, {\n    key: \"diffFieldDataKeys\",\n    value: function diffFieldDataKeys(field, data) {\n      // Grab the data keys and child field keys\n      var childData = this.getFieldValue(field, data);\n      var childDataKeys = childData ? Object.keys(childData) : [];\n      var childFieldKeys = this.getFieldChildrenKeys(field); // Keys in data that aren't in fields\n\n      var newKeys = lodash_difference__WEBPACK_IMPORTED_MODULE_11___default()(childDataKeys, childFieldKeys); // Keys in data and fields\n\n      var existingKeys = lodash_intersection__WEBPACK_IMPORTED_MODULE_12___default()(childDataKeys, childFieldKeys); // Keys in fields that aren't in data\n\n      var oldKeys = lodash_difference__WEBPACK_IMPORTED_MODULE_11___default()(childFieldKeys, childDataKeys); // console.log('diffTemplateFieldKeys()', field.path, 'newKeys', newKeys);\n      // console.log('diffTemplateFieldKeys()', field.path, 'existingKeys', existingKeys);\n      // console.log('diffTemplateFieldKeys()', field.path, 'oldKeys', oldKeys);\n\n      return [newKeys, existingKeys, oldKeys];\n    }\n    /**\n     * Unravel all templates into fields for the given field and data.\n     *\n     * TODO: Try to merge this into inheritTemplate(), or extract a method\n     *       that can handle both cases, like updateFieldChildrenInheritance().\n     *\n     * @protected\n     * @param {Field}  field  - The field to update template fields for.\n     * @param {Object} [data] - The data used to unravel field templates.\n     */\n\n  }, {\n    key: \"updateTemplateFields\",\n    value: function updateTemplateFields(field, data) {\n      if (!field) {\n        return;\n      }\n\n      var template = this.getFieldChildrenTemplate(field);\n\n      if (!template) {\n        return;\n      }\n\n      var i,\n          key,\n          path,\n          value,\n          defaultValue,\n          existingField,\n          newField,\n          newFields = []; // Find child fields that need to be added, updated or removed\n\n      var _this$diffFieldDataKe = this.diffFieldDataKeys(field, data),\n          _this$diffFieldDataKe2 = _slicedToArray(_this$diffFieldDataKe, 3),\n          newKeys = _this$diffFieldDataKe2[0],\n          existingKeys = _this$diffFieldDataKe2[1],\n          oldKeys = _this$diffFieldDataKe2[2];\n\n      var existingFieldKeys = this.getFieldChildrenKeys(field);\n      var fixedKeys = field.fixed || []; // TODO: Extract to... diffFixedFieldDataKeys()...?\n      // Remove fixed keys from the keys that need removing\n\n      oldKeys = lodash_difference__WEBPACK_IMPORTED_MODULE_11___default()(oldKeys, fixedKeys); // Add the existent fixed keys to the keys that need updating\n\n      existingKeys = existingKeys.concat(lodash_difference__WEBPACK_IMPORTED_MODULE_11___default()(lodash_intersection__WEBPACK_IMPORTED_MODULE_12___default()(fixedKeys, existingFieldKeys), existingKeys, newKeys)); // Add the non-existent fixed keys to the keys that need creating\n\n      newKeys = newKeys.concat(lodash_difference__WEBPACK_IMPORTED_MODULE_11___default()(fixedKeys, existingFieldKeys, newKeys)); //console.log(field.path, newKeys, existingKeys, oldKeys, fixedKeys, existingFieldKeys);\n      // Remove old fields\n\n      for (i = 0; i < oldKeys.length; i++) {\n        key = oldKeys[i];\n        path = Object(_functions_joinPath__WEBPACK_IMPORTED_MODULE_25__[\"default\"])(field.path, key); //console.log('updateTemplateFields() oldField', field.path, path);\n\n        this.removeField(this.getField(path));\n      } // Update existing fields\n\n\n      for (i = 0; i < existingKeys.length; i++) {\n        key = existingKeys[i];\n        path = Object(_functions_joinPath__WEBPACK_IMPORTED_MODULE_25__[\"default\"])(field.path, key); //console.log('updateTemplateFields() existingField', field.path, path);\n        // Ensure the existing field has the correct template\n\n        existingField = this.getField(path);\n        existingField.extends = template.path;\n      } // Build new fields\n\n\n      value = this.getFieldValue(field, data);\n      defaultValue = this.getFieldDefaultValue(field);\n\n      for (i = 0; i < newKeys.length; i++) {\n        key = newKeys[i];\n        path = Object(_functions_joinPath__WEBPACK_IMPORTED_MODULE_25__[\"default\"])(field.path, key); //console.log('updateTemplateFields() newField', path, value[key]);\n\n        newField = {\n          path: path,\n          pathFragment: key,\n          parent: field.path,\n          extends: template.path\n        };\n\n        if (value != null && value.hasOwnProperty(key)) {\n          newField.value = value[key];\n        }\n\n        if (defaultValue != null && defaultValue.hasOwnProperty(key)) {\n          newField.default = defaultValue[key];\n        }\n\n        newFields.push(newField);\n      } // Add the new fields to the parent field and dictionary\n\n\n      if (newFields.length) {\n        field.children = field.children || [];\n        field.children = field.children.concat(newFields);\n      }\n\n      this.updateDictionary(newFields);\n    }\n    /**\n     * Diff the keys of the first field's children with those of the second\n     * field's children.\n     *\n     * Finds keys of the first that aren't of the second, keys that are of both,\n     * and keys of the second that aren't of the first.\n     *\n     * @protected\n     * @param {Field} firstField\n     * @param {Field} secondField\n     * @returns {array} [newKeys, existingKeys, oldKeys]\n     */\n\n  }, {\n    key: \"diffFieldChildrenKeys\",\n    value: function diffFieldChildrenKeys(firstField, secondField) {\n      var firstFieldKeys = this.getFieldChildrenKeys(firstField);\n      var secondFieldKeys = this.getFieldChildrenKeys(secondField); // Child keys of the first field that aren't of the second field\n\n      var newKeys = lodash_difference__WEBPACK_IMPORTED_MODULE_11___default()(firstFieldKeys, secondFieldKeys); // Keys in the children of both fields\n\n      var existingKeys = lodash_intersection__WEBPACK_IMPORTED_MODULE_12___default()(firstFieldKeys, secondFieldKeys); // Child keys of the second field that aren't of the first\n\n      var oldKeys = lodash_difference__WEBPACK_IMPORTED_MODULE_11___default()(secondFieldKeys, firstFieldKeys);\n      return [newKeys, existingKeys, oldKeys];\n    }\n    /**\n     * Apply a field's inheritance.\n     *\n     * Ensures that a field inherits from its base field.\n     *\n     * @param {Field}  field - The inheriting field.\n     * @param {Object} data  - The data to update with.\n     * @return {Field}\n     */\n\n  }, {\n    key: \"inheritTemplate\",\n    value: function inheritTemplate(field, data) {\n      if (!field) {\n        return field;\n      }\n\n      var template = this.getFieldTemplate(field); // Skip fields without a template\n\n      if (!template) {\n        return field;\n      } // Inherit the template\n\n\n      if (field.extended !== template.path) {\n        var templateClone = lodash_clone__WEBPACK_IMPORTED_MODULE_1___default()(template); // We don't want to inherit children, nor do we support more than a\n        // single layer of inheritance\n\n        delete templateClone.children;\n        delete templateClone.template; // if (field.path === 'skills.list.test.ability') {\n        // \tconsole.log('skills.list.test.ability', clone(field), templateClone);\n        // }\n        // Merge sandwich to retain original values\n\n        field = lodash_merge__WEBPACK_IMPORTED_MODULE_2___default()(field, templateClone, lodash_clone__WEBPACK_IMPORTED_MODULE_1___default()(field));\n\n        if (field.name == null) {\n          field.name = this.deriveName(field);\n        }\n\n        field.extended = template.path;\n        this.prepareFields([field]);\n      } //console.log('inheritTemplate()', field.path, template.path);\n      // Update child field inheritance\n\n\n      var i,\n          key,\n          path,\n          value,\n          defaultValue,\n          existingField,\n          newField,\n          newFields = []; // Diff field child keys and template child keys\n\n      var _this$diffFieldChildr = this.diffFieldChildrenKeys(template, field),\n          _this$diffFieldChildr2 = _slicedToArray(_this$diffFieldChildr, 2),\n          newKeys = _this$diffFieldChildr2[0],\n          existingKeys = _this$diffFieldChildr2[1]; // Update existing template fields\n\n\n      for (var _i2 = 0; _i2 < existingKeys.length; _i2++) {\n        key = existingKeys[_i2];\n        path = Object(_functions_joinPath__WEBPACK_IMPORTED_MODULE_25__[\"default\"])(field.path, key);\n        existingField = this.getField(path); //console.log('inheritTemplate() existingField', path, existingField);\n\n        existingField.extends = Object(_functions_joinPath__WEBPACK_IMPORTED_MODULE_25__[\"default\"])(template.path, key);\n      } // Build new template fields\n\n\n      value = this.getFieldValue(field, data);\n      defaultValue = this.getFieldDefaultValue(field); //console.log('inheritTemplate()', field.path, value);\n\n      for (var _i3 = 0; _i3 < newKeys.length; _i3++) {\n        key = newKeys[_i3];\n        path = Object(_functions_joinPath__WEBPACK_IMPORTED_MODULE_25__[\"default\"])(field.path, key); //console.log('inherit newKey', path, value[key]);\n        // Build the new field\n\n        newField = {\n          path: path,\n          pathFragment: key,\n          parent: field.path,\n          extends: Object(_functions_joinPath__WEBPACK_IMPORTED_MODULE_25__[\"default\"])(template.path, key)\n        }; // Propagate values\n\n        if (value != null && value.hasOwnProperty(key)) {\n          newField.value = value[key];\n        }\n\n        if (defaultValue != null && defaultValue.hasOwnProperty(key)) {\n          newField.default = defaultValue[key];\n        }\n\n        newFields.push(newField);\n      } // Add the new fields to the parent field and dictionary\n      // TODO: Extract addFieldChildren(field, children)\n\n\n      if (newFields.length) {\n        field.children = field.children || [];\n        field.children = field.children.concat(newFields); // We then want to sort these in the order of template's children\n        // TODO: Extract sortFieldChildren(field)\n\n        var templateChildKeys = this.getFieldChildrenKeys(template); // We flip the child keys into an object where the values are the\n        // indices of the child keys array\n\n        templateChildKeys = lodash_zipObject__WEBPACK_IMPORTED_MODULE_15___default()(templateChildKeys, _toConsumableArray(templateChildKeys.keys())); // This makes it easier to sort\n\n        field.children = lodash_sortBy__WEBPACK_IMPORTED_MODULE_16___default()(field.children, function (child) {\n          return templateChildKeys[child.pathFragment];\n        });\n      }\n\n      this.updateDictionary(newFields);\n      return field;\n    }\n    /**\n     * Remove data from the given path.\n     *\n     * @public\n     * @param {Object} data - The data to change.\n     * @param {string} path - The path to remove.\n     */\n\n  }, {\n    key: \"removeValue\",\n    value: function removeValue(data, path) {\n      this.removePath(path, data);\n    }\n    /**\n     * Remove data at the given path and update parent fields.\n     *\n     * TODO: The naming and existence of this method doesn't quite make sense.\n     *       You'd expect it to remove the field(s) too, considering updatePath().\n     *       Refactor?\n     *\n     * @protected\n     * @param {string}  path - The path to remove.\n     * @param {Object}  data - The data to remove the path from.\n     */\n\n  }, {\n    key: \"removePath\",\n    value: function removePath(path, data) {\n      var field = this.getField(path);\n\n      if (!field) {\n        return;\n      } // Remove the state data\n\n\n      this.removeData(field, data); // Update the parent field\n\n      this.updatePath(this.getFieldParent(field).path, data);\n    }\n    /**\n     * Remove the given fields.\n     *\n     * @protected\n     * @param {Field[]} fields - The fields to remove.\n     * @return {Field[]} The removed fields.\n     */\n\n  }, {\n    key: \"removeFields\",\n    value: function removeFields(fields) {\n      if (!Array.isArray(fields) || !fields.length) {\n        return [];\n      }\n\n      var removed = [];\n\n      for (var i = 0; i < fields.length; i++) {\n        removed.push(this.removeField(fields[i]));\n      }\n\n      return removed;\n    }\n    /**\n     * Remove a field.\n     *\n     * Clears dictionary and parent references to the field.\n     *\n     * Doesn't remove data or update parent field values.\n     *\n     * @protected\n     * @param {Field} field - The field to remove.\n     * @return {Field} The removed field.\n     */\n\n  }, {\n    key: \"removeField\",\n    value: function removeField(field) {\n      var _this3 = this;\n\n      if (!field) {\n        return field;\n      } // Remove the field and its children from the value cache, dictionary\n      // and dependency list\n\n\n      this.clearValueCache(field.path);\n      Object(_functions_traverseTree__WEBPACK_IMPORTED_MODULE_23__[\"default\"])(field, function (field) {\n        delete _this3.dictionary[field.path];\n        delete _this3.expressionDependencies[field.path];\n      }); // Remove the field from its parent\n\n      var parent = this.getFieldParent(field);\n      lodash_pull__WEBPACK_IMPORTED_MODULE_9___default()(parent.children, field);\n      return field;\n    }\n    /**\n     * Remove a field's path from the given data.\n     *\n     * @protected\n     * @param {Field} field - The field whose path to remove from data.\n     * @param {Object} data - The data to remove from.\n     */\n\n  }, {\n    key: \"removeData\",\n    value: function removeData(field, data) {\n      if (!field) {\n        return;\n      }\n\n      var parent = this.getField(field.parent);\n\n      if (!parent) {\n        return;\n      }\n\n      var parentPath = parent.path;\n      var parentValue = this.getFieldValue(parent, data);\n      var key = field.pathFragment;\n\n      if (Array.isArray(parentValue)) {\n        parentValue.splice(key, 1);\n      } else {\n        delete parentValue[key];\n      }\n\n      lodash_set__WEBPACK_IMPORTED_MODULE_8___default()(data, parentPath, parentValue);\n    }\n    /**\n     * Update the dictionary with the given fields.\n     *\n     * @param {Field[]} fields\n     * @returns {FieldDictionary}\n     */\n\n  }, {\n    key: \"updateDictionary\",\n    value: function updateDictionary(fields) {\n      if (!Array.isArray(fields)) {\n        return this.dictionary;\n      }\n\n      for (var i = 0; i < fields.length; i++) {\n        if (!fields[i] || !fields[i].path) {\n          continue;\n        }\n\n        this.dictionary[fields[i].path] = fields[i];\n      }\n\n      return this.dictionary;\n    }\n    /**\n     * Build a dictionary from the given fields.\n     *\n     * @param {Field[]} fields\n     * @return {FieldDictionary}\n     */\n\n  }, {\n    key: \"buildDictionary\",\n    value: function buildDictionary(fields) {\n      return Object(_functions_buildDictionary__WEBPACK_IMPORTED_MODULE_21__[\"default\"])(fields);\n    }\n    /**\n     * Build a tree from the given dictionary.\n     *\n     * @protected\n     * @param {FieldDictionary} dictionary\n     * @returns {Field}\n     */\n\n  }, {\n    key: \"buildTree\",\n    value: function buildTree(dictionary) {\n      return Object(_functions_buildTree__WEBPACK_IMPORTED_MODULE_22__[\"default\"])(dictionary);\n    }\n    /**\n     * Build data from the current field state.\n     *\n     * @param {Field}  field     - The root field to traverse from.\n     * @param {Object} [data={}] - The target data object.\n     * @return {Object} The built data.\n     */\n\n  }, {\n    key: \"buildData\",\n    value: function buildData(field) {\n      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n      if (!field) {\n        return data;\n      }\n\n      var child, childData; // If the field has children, build the data of its children\n\n      if (field.children) {\n        for (var c = 0; c < field.children.length; c++) {\n          child = field.children[c];\n\n          if (child.omit) {\n            continue;\n          }\n\n          childData = this.buildData(field.children[c], data);\n        }\n\n        return data;\n      } // Set data\n\n\n      lodash_set__WEBPACK_IMPORTED_MODULE_8___default()(data, field.path, lodash_defaultTo__WEBPACK_IMPORTED_MODULE_10___default()(field.value, field.default));\n      return data;\n    }\n    /**\n     * Build data for a field's template.\n     *\n     * @protected\n     * @param {Field}  field  - The field to build child data for.\n     * @param {Object} [data] - The target data object.\n     * @return {Object} The built data.\n     */\n\n  }, {\n    key: \"buildTemplateData\",\n    value: function buildTemplateData(field, data) {\n      var template = this.getFieldChildrenTemplate(field);\n\n      if (!template) {\n        return null;\n      }\n\n      return lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(this.buildData(template), template.path);\n    }\n    /**\n     * Add new child data for the field at the given path using its template.\n     *\n     * @public\n     * @param {Object}        data  - The data to change.\n     * @param {string}        path  - The path of the field to add new child data to.\n     * @param {string|number} [key] - Optional key to use for the new child data.\n     */\n\n  }, {\n    key: \"addItem\",\n    value: function addItem(data, path, key) {\n      var field = this.getField(path);\n\n      if (!field) {\n        return;\n      } // Build the new child data\n\n\n      var newData = this.buildTemplateData(field); // Get the target for the data\n\n      var target = lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(data, path, []); // Add the new child data to the collection\n\n      if (Array.isArray(target)) {\n        target.push(newData);\n      } else if (key != null && _typeof(target) === 'object') {\n        target[key] = newData;\n      } else {\n        // Bail if we're not dealing with a collection\n        console.warn(\"Could not create new child data for '\".concat(path, \"';\") + \" either it wasn't an array or wasn't an object with a key provided\");\n        return;\n      } // Set it back\n\n\n      lodash_set__WEBPACK_IMPORTED_MODULE_8___default()(data, path, target); // Update the form\n\n      this.updatePath(path, data);\n    }\n  }]);\n\n  return FormProcessor;\n}();\n/**\n * A dictionary of fields.\n *\n * Fields are keyed by their path.\n *\n * @typedef {Object.<string, Field>} FieldDictionary\n */\n\n/**\n * A field description.\n *\n * TODO: Update this to reflect the simplest approach to describing fields.\n *       Could also be called FieldOptions if passed to the constructor of a\n *       Field class.\n *\n * @typedef {Object} FieldDescription\n */\n\n/**\n * A field.\n *\n * TODO: Formalise as a class?\n *\n * @typedef {Object} Field\n *\n * @property {string}         path             - The path of the field.\n * @property {string}         [parent]         - The path of the field's parent, if any. Overrides the parent that would otherwise be determined from the `path`.\n * @property {string}         [pathFragment]   - The leaf of the field's path. TODO: Rename to key\n * @property {string}         [type]           - The type of the field. Determines the type of value to read and store. Defaults to `'number'`.\n * @property {string}         [input]          - The input type to use for this field, if any. // TODO: Rename? Might not be an actual input... (i.e. section). `element` might be a good name.\n * @property {Object}         [options]        - The input options. A free-form object for different input types to interpret and utilise.\n * @property {string}         [name]           - The field's name. Defaults to a sentence-case translation of the field's key. TODO: Rename to label?\n * @property {string}         [description]    - The field's description.\n * @property {boolean}        [omit=false]     - Whether to prevent storing the property's value in data AND prevent updating any children. Defaults to `false`.\n * @property {boolean}        [virtual=false]  - Whether to prevent storing the property's value in data. Defaults to `false`.\n * @property {string|boolean} [visible=true]   - Whether the property is visible. Defaults to `true`. String values are interpreted as expressions.\n * @property {string|boolean} [disabled=false] - Whether the property is disabled. Defaults to `true` if `expression` is set, otherwise defaults to `false`. String values are interpreted as expressions. TODO: Input options?\n * @property {*}              [value]          - The field's value.\n * @property {*}              [default]        - The field's default value. Defaults appropriately for the set `type`.\n * @property {boolean}        [merge]          - Whether to merge the field's non-scalar value with its default value.\n * @property {string}         [expression]     - An expression used to compute the field's value. Implies `disabled` when set.\n * @property {string}         [validator]      - The field's validation function. Defaults as appropriate to the `type`.\n * @property {string}         [extends]        - The path of a field to inherit.\n * @property {string}         [extended]       - The path of a field that been inherited.\n * @property {string}         [mirror]         - The path of a field to mirror. TODO: Implement\n * @property {Field[]}        [children]       - Child fields.\n * @property {string}         [template]       - Template field that all child fields should extend. Can be a `Field` or a `path` to a field.\n * @property {Object|array}   [fixed]          - A map or list of child keys that cannot be removed at runtime, if present.\n */\n\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/services/FormProcessor.js?");

/***/ }),

/***/ "./src/tags/input/boolean.tag":
/*!************************************!*\
  !*** ./src/tags/input/boolean.tag ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mixins_edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/edit */ \"./src/mixins/edit.js\");\n\n    var riot = __webpack_require__(/*! riot */ \"./node_modules/riot/riot.js\")\n    \nriot.tag2('boolean', '<input type=\"checkbox\" name=\"{opts.property.path}\" title=\"{opts.property.name}\" checked=\"{!!opts.property.value}\" disabled=\"{!!opts.property.disabled}\" oninput=\"{edit}\">', '', '', function(opts) {\nthis.mixin(_mixins_edit__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n});\n\n    \n  \n\n//# sourceURL=webpack://%5Bname%5D/./src/tags/input/boolean.tag?");

/***/ }),

/***/ "./src/tags/input/group.tag":
/*!**********************************!*\
  !*** ./src/tags/input/group.tag ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ \"./node_modules/lodash/get.js\");\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);\n\n    var riot = __webpack_require__(/*! riot */ \"./node_modules/riot/riot.js\")\n    \nriot.tag2('group', '<div class=\"group-container\"> <span if=\"{!get(opts.property, \\'options.hideLabel\\')}\"> {opts.property.name} </span> <span> <yield></yield> </span> </div>', 'group .group-container,[data-is=\"group\"] .group-container{ margin: 8px 0; }', '', function(opts) {\nthis.get = lodash_get__WEBPACK_IMPORTED_MODULE_0___default.a;\n});\n\n    \n  \n\n//# sourceURL=webpack://%5Bname%5D/./src/tags/input/group.tag?");

/***/ }),

/***/ "./src/tags/input/list-item.tag":
/*!**************************************!*\
  !*** ./src/tags/input/list-item.tag ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var riot = __webpack_require__(/*! riot */ \"./node_modules/riot/riot.js\")\n    riot.tag2('list-item', '<div> <div style=\"display:inline-block;\"> <tree children=\"{[opts.property]}\"></tree> </div> <div style=\"display:inline-block;\" if=\"{opts.removable}\"> <button type=\"button\" onclick=\"{remove}\">Remove</button> </div> </div>', '', '', function(opts) {\nthis.remove = function () {\n  if (!this.opts.removable) {\n    return;\n  }\n\n  this.triggerDom('remove', {\n    name: this.opts.property.path\n  });\n};\n});\n\n    \n  \n\n//# sourceURL=webpack://%5Bname%5D/./src/tags/input/list-item.tag?");

/***/ }),

/***/ "./src/tags/input/list.tag":
/*!*********************************!*\
  !*** ./src/tags/input/list.tag ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ \"./node_modules/lodash/get.js\");\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_findIndex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/findIndex */ \"./node_modules/lodash/findIndex.js\");\n/* harmony import */ var lodash_findIndex__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_findIndex__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isPlainObject */ \"./node_modules/lodash/isPlainObject.js\");\n/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _list_item_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-item.tag */ \"./src/tags/input/list-item.tag\");\n/* harmony import */ var _list_item_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_list_item_tag__WEBPACK_IMPORTED_MODULE_3__);\n\n    var riot = __webpack_require__(/*! riot */ \"./node_modules/riot/riot.js\")\n    \n\n\n\nriot.tag2('list', '<div class=\"list-container\"> <div if=\"{showLabel()}\">{opts.property.name}</div> <virtual each=\"{child in opts.property.children}\" key=\"path\"> <list-item property=\"{child}\" removable=\"{editable() && !fixed(child.pathFragment)}\"></list-item> </virtual> <button type=\"button\" if=\"{editable()}\" onclick=\"{add}\">Add</button> </div>', 'list .list-container,[data-is=\"list\"] .list-container{ margin: 8px auto; }', '', function(opts) {\n\nthis.add = function () {\n  if (!this.editable()) {\n    return;\n  }\n\n  this.triggerDom('add', {\n    name: this.opts.property.path\n  });\n};\n/**\n * Determine whether to show the list's label.\n *\n * @return boolean\n */\n\nthis.showLabel = function () {\n  return !!lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this.opts.property, 'options.showLabel');\n};\n/**\n * Determine whether the list is editable.\n *\n * @returns {boolean} Whether the list is editable.\n */\n\nthis.editable = function () {\n  return !!lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this.opts.property, 'options.editable');\n};\n/**\n * Determine whether a list item is fixed.\n *\n * @param {string} key The key of the field to check.\n * @return {boolean} Whether the list item is fixed.\n */\n\nthis.fixed = function (key) {\n  if (!this.opts.property.fixed) return false;\n  if (Array.isArray(this.opts.property.fixed)) return lodash_findIndex__WEBPACK_IMPORTED_MODULE_1___default()(this.opts.property.fixed, key) >= 0;\n  if (lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2___default()(this.opts.property.fixed)) return !!this.opts.property.fixed[key];\n  return false;\n};\n});\n\n    \n  \n\n//# sourceURL=webpack://%5Bname%5D/./src/tags/input/list.tag?");

/***/ }),

/***/ "./src/tags/input/number.tag":
/*!***********************************!*\
  !*** ./src/tags/input/number.tag ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mixins_edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/edit */ \"./src/mixins/edit.js\");\n\n    var riot = __webpack_require__(/*! riot */ \"./node_modules/riot/riot.js\")\n    \nriot.tag2('number', '<input name=\"{opts.property.path}\" title=\"{opts.property.name}\" min=\"{opts.property.options.min}\" max=\"{opts.property.options.max}\" step=\"{opts.property.options.step}\" riot-value=\"{opts.property.value}\" disabled=\"{opts.property.disabled}\" oninput=\"{edit}\" type=\"{\\'number\\'}\">', '', '', function(opts) {\nthis.mixin(_mixins_edit__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n});\n\n    \n  \n\n//# sourceURL=webpack://%5Bname%5D/./src/tags/input/number.tag?");

/***/ }),

/***/ "./src/tags/input/pragma-table.tag":
/*!*****************************************!*\
  !*** ./src/tags/input/pragma-table.tag ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ \"./node_modules/lodash/get.js\");\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);\n\n    var riot = __webpack_require__(/*! riot */ \"./node_modules/riot/riot.js\")\n    \nriot.tag2('pragma-table', '<div style=\"overflow: auto;\"> <table name=\"{opts.property.path}\" style=\"width: auto;\"> <thead if=\"{get(opts.property, \\'options.headings\\')}\"> <tr> <th each=\"{heading in get(opts.property, \\'options.headings\\', [])}\"> {heading} </th> </tr> </thead> <tbody> <tr each=\"{row in opts.property.children}\" key=\"path\"> <th if=\"{get(opts.property, \\'options.showLabel\\')}\"> {row.name} </th> <td each=\"{child in row.children}\" key=\"path\"> <tree-child data-is=\"{child.input}\" property=\"{child}\"> <tree if=\"{opts.property.children}\" children=\"{opts.property.children}\"></tree> </tree-child> </td> </tr> </tbody> </table> </div>', '', '', function(opts) {\nthis.get = lodash_get__WEBPACK_IMPORTED_MODULE_0___default.a; // TODO: Can the <tree> duplication be avoided?\n//       Yielding rows would be great, but seems very tricky given HTML's strictness with tables.\n});\n\n    \n  \n\n//# sourceURL=webpack://%5Bname%5D/./src/tags/input/pragma-table.tag?");

/***/ }),

/***/ "./src/tags/input/section.tag":
/*!************************************!*\
  !*** ./src/tags/input/section.tag ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var riot = __webpack_require__(/*! riot */ \"./node_modules/riot/riot.js\")\n    riot.tag2('section', '<fieldset name=\"{opts.property.path}\" title=\"{opts.property.description}\" style=\"min-width: 0;\"> <legend>{opts.property.name}</legend> <yield></yield> </fieldset>', '', '', function(opts) {\n});\n\n    \n  \n\n//# sourceURL=webpack://%5Bname%5D/./src/tags/input/section.tag?");

/***/ }),

/***/ "./src/tags/input/selection.tag":
/*!**************************************!*\
  !*** ./src/tags/input/selection.tag ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ \"./node_modules/lodash/get.js\");\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mixins_edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/edit */ \"./src/mixins/edit.js\");\n\n    var riot = __webpack_require__(/*! riot */ \"./node_modules/riot/riot.js\")\n    \n\nriot.tag2('selection', '<select name=\"{opts.property.path}\" title=\"{opts.property.name}\" disabled=\"{!!opts.property.disabled}\" oninput=\"{edit}\"> <option each=\"{name, value in getSelectionOptions()}\" riot-value=\"{value}\" selected=\"{opts.property.value === value}\">{name}</option> </select>', '', '', function(opts) {\nthis.mixin(_mixins_edit__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\nthis.getSelectionOptions = function () {\n  // TODO: Support arrays *and* objects, convert objects to arrays or\n  //       vice versa (remember arrays are faster in riot)\n  return lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this.opts.property, 'options.options', {});\n};\n});\n\n    \n  \n\n//# sourceURL=webpack://%5Bname%5D/./src/tags/input/selection.tag?");

/***/ }),

/***/ "./src/tags/input/string.tag":
/*!***********************************!*\
  !*** ./src/tags/input/string.tag ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mixins_edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/edit */ \"./src/mixins/edit.js\");\n\n    var riot = __webpack_require__(/*! riot */ \"./node_modules/riot/riot.js\")\n    \nriot.tag2('string', '<input type=\"text\" name=\"{opts.property.path}\" title=\"{opts.property.name}\" riot-value=\"{opts.property.value}\" disabled=\"{opts.property.disabled}\" oninput=\"{edit}\">', '', '', function(opts) {\nthis.mixin(_mixins_edit__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n});\n\n    \n  \n\n//# sourceURL=webpack://%5Bname%5D/./src/tags/input/string.tag?");

/***/ }),

/***/ "./src/tags/pragma.tag":
/*!*****************************!*\
  !*** ./src/tags/pragma.tag ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tree_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree.tag */ \"./src/tags/tree.tag\");\n/* harmony import */ var _tree_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tree_tag__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _input_string_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input/string.tag */ \"./src/tags/input/string.tag\");\n/* harmony import */ var _input_number_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input/number.tag */ \"./src/tags/input/number.tag\");\n/* harmony import */ var _input_boolean_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input/boolean.tag */ \"./src/tags/input/boolean.tag\");\n/* harmony import */ var _input_selection_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input/selection.tag */ \"./src/tags/input/selection.tag\");\n/* harmony import */ var _input_section_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input/section.tag */ \"./src/tags/input/section.tag\");\n/* harmony import */ var _input_section_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_input_section_tag__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _input_group_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input/group.tag */ \"./src/tags/input/group.tag\");\n/* harmony import */ var _input_list_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./input/list.tag */ \"./src/tags/input/list.tag\");\n/* harmony import */ var _input_pragma_table_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./input/pragma-table.tag */ \"./src/tags/input/pragma-table.tag\");\n/* harmony import */ var _mixins_domEvent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../mixins/domEvent */ \"./src/mixins/domEvent.js\");\n/* harmony import */ var _services_FormProcessor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/FormProcessor */ \"./src/services/FormProcessor.js\");\n\n    var riot = __webpack_require__(/*! riot */ \"./node_modules/riot/riot.js\")\n    \n\n\n\n\n\n\n\n\n\n // Globally mixin the DOM event helper\nriot.tag2('pragma', '<tree children=\"{form.tree.children}\" onadd=\"{add}\" onedit=\"{edit}\" onremove=\"{remove}\"></tree> <div if=\"{opts.hasOwnProperty(\\'debug\\')}\" style=\"position: fixed; top: 0; right: 0; height: 100%; width: 300px; background: rgba(255, 255, 255, 0.5); overflow: auto;\"> <pre>{JSON.stringify(state, null, 2)}</pre> </div>', '', '', function(opts) {\n\nriot.mixin(_mixins_domEvent__WEBPACK_IMPORTED_MODULE_9__[\"default\"]); // Define properties\n\nthis.form = new _services_FormProcessor__WEBPACK_IMPORTED_MODULE_10__[\"default\"]([]);\nthis.state = null;\nthis.fields = null;\n\nif (window && this.opts.debug) {\n  window.pragma = this.form;\n} // Define event handlers\n\nthis.add = function (event) {\n  let {\n    name\n  } = event.detail;\n  this.form.addItem(this.state, name);\n};\n\nthis.edit = function (event) {\n  let {\n    name,\n    value\n  } = event.detail;\n  value = this.form.setValue(this.state, name, value);\n  event.detail.value = value;\n};\n\nthis.remove = function (event) {\n  let {\n    name\n  } = event.detail;\n  this.form.removeValue(this.state, name);\n};\n\nthis.sync = function () {\n  let fields = this.opts.fields || this.root.fields || {};\n  let functions = this.opts.functions || this.root.functions || {};\n  let defaults = this.opts.defaults || this.root.defaults || {};\n  let state = this.opts.state || this.root.state || {};\n  this.form.setDefaults(defaults);\n  this.form.addFunctions(functions);\n\n  if (fields !== this.fields) {\n    console.time('setFields');\n    this.fields = fields;\n    this.form.setFields(fields);\n    console.timeEnd('setFields');\n  }\n\n  if (state !== this.state) {\n    console.time('update');\n    this.state = state;\n    this.form.update(this.state);\n    console.timeEnd('update');\n  }\n};\n\nthis.root.sync = () => {\n  this.sync();\n};\n\nthis.root.update = () => {\n  this.update();\n};\n\nthis.on('mount', this.sync);\nthis.on('update', this.sync);\n});\n\n    \n  \n\n//# sourceURL=webpack://%5Bname%5D/./src/tags/pragma.tag?");

/***/ }),

/***/ "./src/tags/tree.tag":
/*!***************************!*\
  !*** ./src/tags/tree.tag ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var riot = __webpack_require__(/*! riot */ \"./node_modules/riot/riot.js\")\n    riot.tag2('tree', '<virtual each=\"{child in opts.children}\" key=\"path\"> <tree-child if=\"{visible(child)}\" data-is=\"{child.input}\" property=\"{child}\"> <tree if=\"{opts.property.children}\" children=\"{opts.property.children}\"></tree> </tree-child> </virtual>', '', '', function(opts) {\n/**\n * Determine whether a field should be displayed.\n *\n * @param {Field} field\n * @returns {boolean}\n */\nthis.visible = function (field) {\n  return field && field.visible;\n}; // TODO: Would be amazing to retain and mount custom element tags without data-is\n});\n\n    \n  \n\n//# sourceURL=webpack://%5Bname%5D/./src/tags/tree.tag?");

/***/ })

/******/ })["default"];
});