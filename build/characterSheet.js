(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["characterSheet"] = factory();
	else
		root["characterSheet"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/characterSheet.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/case/dist/Case.js":
/*!****************************************!*\
  !*** ./node_modules/case/dist/Case.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*! Case - v1.6.0 - 2018-11-15\n* Copyright (c) 2018 Nathan Bubna; Licensed MIT, GPL */\n(function() {\n    \"use strict\";\n    var unicodes = function(s, prefix) {\n        prefix = prefix || '';\n        return s.replace(/(^|-)/g, '$1\\\\u'+prefix).replace(/,/g, '\\\\u'+prefix);\n    },\n    basicSymbols = unicodes('20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7', '00'),\n    baseLowerCase = 'a-z'+unicodes('DF-F6,F8-FF', '00'),\n    baseUpperCase = 'A-Z'+unicodes('C0-D6,D8-DE', '00'),\n    improperInTitle = 'A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\\\.?|Via',\n    regexps = function(symbols, lowers, uppers, impropers) {\n        symbols = symbols || basicSymbols;\n        lowers = lowers || baseLowerCase;\n        uppers = uppers || baseUpperCase;\n        impropers = impropers || improperInTitle;\n        return {\n            capitalize: new RegExp('(^|['+symbols+'])(['+lowers+'])', 'g'),\n            pascal: new RegExp('(^|['+symbols+'])+(['+lowers+uppers+'])', 'g'),\n            fill: new RegExp('['+symbols+']+(.|$)','g'),\n            sentence: new RegExp('(^\\\\s*|[\\\\?\\\\!\\\\.]+\"?\\\\s+\"?|,\\\\s+\")(['+lowers+'])', 'g'),\n            improper: new RegExp('\\\\b('+impropers+')\\\\b', 'g'),\n            relax: new RegExp('([^'+uppers+'])(['+uppers+']*)(['+uppers+'])(?=[^'+uppers+']|$)', 'g'),\n            upper: new RegExp('^[^'+lowers+']+$'),\n            hole: /[^\\s]\\s[^\\s]/,\n            apostrophe: /'/g,\n            room: new RegExp('['+symbols+']')\n        };\n    },\n    re = regexps(),\n    _ = {\n        re: re,\n        unicodes: unicodes,\n        regexps: regexps,\n        types: [],\n        up: String.prototype.toUpperCase,\n        low: String.prototype.toLowerCase,\n        cap: function(s) {\n            return _.up.call(s.charAt(0))+s.slice(1);\n        },\n        decap: function(s) {\n            return _.low.call(s.charAt(0))+s.slice(1);\n        },\n        deapostrophe: function(s) {\n            return s.replace(re.apostrophe, '');\n        },\n        fill: function(s, fill, deapostrophe) {\n            if (fill != null) {\n                s = s.replace(re.fill, function(m, next) {\n                    return next ? fill + next : '';\n                });\n            }\n            if (deapostrophe) {\n                s = _.deapostrophe(s);\n            }\n            return s;\n        },\n        prep: function(s, fill, pascal, upper) {\n            s = s == null ? '' : s + '';// force to string\n            if (!upper && re.upper.test(s)) {\n                s = _.low.call(s);\n            }\n            if (!fill && !re.hole.test(s)) {\n                var holey = _.fill(s, ' ');\n                if (re.hole.test(holey)) {\n                    s = holey;\n                }\n            }\n            if (!pascal && !re.room.test(s)) {\n                s = s.replace(re.relax, _.relax);\n            }\n            return s;\n        },\n        relax: function(m, before, acronym, caps) {\n            return before + ' ' + (acronym ? acronym+' ' : '') + caps;\n        }\n    },\n    Case = {\n        _: _,\n        of: function(s) {\n            for (var i=0,m=_.types.length; i<m; i++) {\n                if (Case[_.types[i]].apply(Case, arguments) === s){ return _.types[i]; }\n            }\n        },\n        flip: function(s) {\n            return s.replace(/\\w/g, function(l) {\n                return (l == _.up.call(l) ? _.low : _.up).call(l);\n            });\n        },\n        random: function(s) {\n            return s.replace(/\\w/g, function(l) {\n                return (Math.round(Math.random()) ? _.up : _.low).call(l);\n            });\n        },\n        type: function(type, fn) {\n            Case[type] = fn;\n            _.types.push(type);\n        }\n    },\n    types = {\n        lower: function(s, fill, deapostrophe) {\n            return _.fill(_.low.call(_.prep(s, fill)), fill, deapostrophe);\n        },\n        snake: function(s) {\n            return Case.lower(s, '_', true);\n        },\n        constant: function(s) {\n            return Case.upper(s, '_', true);\n        },\n        camel: function(s) {\n            return _.decap(Case.pascal(s));\n        },\n        kebab: function(s) {\n            return Case.lower(s, '-', true);\n        },\n        upper: function(s, fill, deapostrophe) {\n            return _.fill(_.up.call(_.prep(s, fill, false, true)), fill, deapostrophe);\n        },\n        capital: function(s, fill, deapostrophe) {\n            return _.fill(_.prep(s).replace(re.capitalize, function(m, border, letter) {\n                return border+_.up.call(letter);\n            }), fill, deapostrophe);\n        },\n        header: function(s) {\n            return Case.capital(s, '-', true);\n        },\n        pascal: function(s) {\n            return _.fill(_.prep(s, false, true).replace(re.pascal, function(m, border, letter) {\n                return _.up.call(letter);\n            }), '', true);\n        },\n        title: function(s) {\n            return Case.capital(s).replace(re.improper, function(small, p, i, s) {\n                return i > 0 && i < s.lastIndexOf(' ') ? _.low.call(small) : small;\n            });\n        },\n        sentence: function(s, names, abbreviations) {\n            s = Case.lower(s).replace(re.sentence, function(m, prelude, letter) {\n                return prelude + _.up.call(letter);\n            });\n            if (names) {\n                names.forEach(function(name) {\n                    s = s.replace(new RegExp('\\\\b'+Case.lower(name)+'\\\\b', \"g\"), _.cap);\n                });\n            }\n            if (abbreviations) {\n                abbreviations.forEach(function(abbr) {\n                    s = s.replace(new RegExp('(\\\\b'+Case.lower(abbr)+'\\\\. +)(\\\\w)'), function(m, abbrAndSpace, letter) {\n                        return abbrAndSpace + _.low.call(letter);\n                    });\n                });\n            }\n            return s;\n        }\n    };\n\n    // TODO: Remove \"squish\" in a future breaking release.\n    types.squish = types.pascal;\n\n    for (var type in types) {\n        Case.type(type, types[type]);\n    }\n    // export Case (AMD, commonjs, or global)\n    var define = typeof define === \"function\" ? define : function(){};\n    define( true && module.exports ? module.exports = Case : this.Case = Case);\n\n}).call(this);\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/case/dist/Case.js?");

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Symbol = root.Symbol;\n\nmodule.exports = Symbol;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_Symbol.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.map` for arrays without support for iteratee\n * shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the new mapped array.\n */\nfunction arrayMap(array, iteratee) {\n  var index = -1,\n      length = array == null ? 0 : array.length,\n      result = Array(length);\n\n  while (++index < length) {\n    result[index] = iteratee(array[index], index, array);\n  }\n  return result;\n}\n\nmodule.exports = arrayMap;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_arrayMap.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseClamp.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseClamp.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.clamp` which doesn't coerce arguments.\n *\n * @private\n * @param {number} number The number to clamp.\n * @param {number} [lower] The lower bound.\n * @param {number} upper The upper bound.\n * @returns {number} Returns the clamped number.\n */\nfunction baseClamp(number, lower, upper) {\n  if (number === number) {\n    if (upper !== undefined) {\n      number = number <= upper ? number : upper;\n    }\n    if (lower !== undefined) {\n      number = number >= lower ? number : lower;\n    }\n  }\n  return number;\n}\n\nmodule.exports = baseClamp;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseClamp.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    getRawTag = __webpack_require__(/*! ./_getRawTag */ \"./node_modules/lodash/_getRawTag.js\"),\n    objectToString = __webpack_require__(/*! ./_objectToString */ \"./node_modules/lodash/_objectToString.js\");\n\n/** `Object#toString` result references. */\nvar nullTag = '[object Null]',\n    undefinedTag = '[object Undefined]';\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * The base implementation of `getTag` without fallbacks for buggy environments.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nfunction baseGetTag(value) {\n  if (value == null) {\n    return value === undefined ? undefinedTag : nullTag;\n  }\n  return (symToStringTag && symToStringTag in Object(value))\n    ? getRawTag(value)\n    : objectToString(value);\n}\n\nmodule.exports = baseGetTag;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseGetTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    arrayMap = __webpack_require__(/*! ./_arrayMap */ \"./node_modules/lodash/_arrayMap.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar INFINITY = 1 / 0;\n\n/** Used to convert symbols to primitives and strings. */\nvar symbolProto = Symbol ? Symbol.prototype : undefined,\n    symbolToString = symbolProto ? symbolProto.toString : undefined;\n\n/**\n * The base implementation of `_.toString` which doesn't convert nullish\n * values to empty strings.\n *\n * @private\n * @param {*} value The value to process.\n * @returns {string} Returns the string.\n */\nfunction baseToString(value) {\n  // Exit early for strings to avoid a performance hit in some environments.\n  if (typeof value == 'string') {\n    return value;\n  }\n  if (isArray(value)) {\n    // Recursively convert values (susceptible to call stack limits).\n    return arrayMap(value, baseToString) + '';\n  }\n  if (isSymbol(value)) {\n    return symbolToString ? symbolToString.call(value) : '';\n  }\n  var result = (value + '');\n  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;\n}\n\nmodule.exports = baseToString;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_baseToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof global == 'object' && global && global.Object === Object && global;\n\nmodule.exports = freeGlobal;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_freeGlobal.js?");

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the raw `toStringTag`.\n */\nfunction getRawTag(value) {\n  var isOwn = hasOwnProperty.call(value, symToStringTag),\n      tag = value[symToStringTag];\n\n  try {\n    value[symToStringTag] = undefined;\n    var unmasked = true;\n  } catch (e) {}\n\n  var result = nativeObjectToString.call(value);\n  if (unmasked) {\n    if (isOwn) {\n      value[symToStringTag] = tag;\n    } else {\n      delete value[symToStringTag];\n    }\n  }\n  return result;\n}\n\nmodule.exports = getRawTag;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_getRawTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/**\n * Converts `value` to a string using `Object.prototype.toString`.\n *\n * @private\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n */\nfunction objectToString(value) {\n  return nativeObjectToString.call(value);\n}\n\nmodule.exports = objectToString;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_objectToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\nmodule.exports = root;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/_root.js?");

/***/ }),

/***/ "./node_modules/lodash/clamp.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/clamp.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseClamp = __webpack_require__(/*! ./_baseClamp */ \"./node_modules/lodash/_baseClamp.js\"),\n    toNumber = __webpack_require__(/*! ./toNumber */ \"./node_modules/lodash/toNumber.js\");\n\n/**\n * Clamps `number` within the inclusive `lower` and `upper` bounds.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Number\n * @param {number} number The number to clamp.\n * @param {number} [lower] The lower bound.\n * @param {number} upper The upper bound.\n * @returns {number} Returns the clamped number.\n * @example\n *\n * _.clamp(-10, -5, 5);\n * // => -5\n *\n * _.clamp(10, -5, 5);\n * // => 5\n */\nfunction clamp(number, lower, upper) {\n  if (upper === undefined) {\n    upper = lower;\n    lower = undefined;\n  }\n  if (upper !== undefined) {\n    upper = toNumber(upper);\n    upper = upper === upper ? upper : 0;\n  }\n  if (lower !== undefined) {\n    lower = toNumber(lower);\n    lower = lower === lower ? lower : 0;\n  }\n  return baseClamp(toNumber(number), lower, upper);\n}\n\nmodule.exports = clamp;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/clamp.js?");

/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is classified as an `Array` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array, else `false`.\n * @example\n *\n * _.isArray([1, 2, 3]);\n * // => true\n *\n * _.isArray(document.body.children);\n * // => false\n *\n * _.isArray('abc');\n * // => false\n *\n * _.isArray(_.noop);\n * // => false\n */\nvar isArray = Array.isArray;\n\nmodule.exports = isArray;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/isArray.js?");

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

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar symbolTag = '[object Symbol]';\n\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\nfunction isSymbol(value) {\n  return typeof value == 'symbol' ||\n    (isObjectLike(value) && baseGetTag(value) == symbolTag);\n}\n\nmodule.exports = isSymbol;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/isSymbol.js?");

/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar NAN = 0 / 0;\n\n/** Used to match leading and trailing whitespace. */\nvar reTrim = /^\\s+|\\s+$/g;\n\n/** Used to detect bad signed hexadecimal string values. */\nvar reIsBadHex = /^[-+]0x[0-9a-f]+$/i;\n\n/** Used to detect binary string values. */\nvar reIsBinary = /^0b[01]+$/i;\n\n/** Used to detect octal string values. */\nvar reIsOctal = /^0o[0-7]+$/i;\n\n/** Built-in method references without a dependency on `root`. */\nvar freeParseInt = parseInt;\n\n/**\n * Converts `value` to a number.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to process.\n * @returns {number} Returns the number.\n * @example\n *\n * _.toNumber(3.2);\n * // => 3.2\n *\n * _.toNumber(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toNumber(Infinity);\n * // => Infinity\n *\n * _.toNumber('3.2');\n * // => 3.2\n */\nfunction toNumber(value) {\n  if (typeof value == 'number') {\n    return value;\n  }\n  if (isSymbol(value)) {\n    return NAN;\n  }\n  if (isObject(value)) {\n    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;\n    value = isObject(other) ? (other + '') : other;\n  }\n  if (typeof value != 'string') {\n    return value === 0 ? value : +value;\n  }\n  value = value.replace(reTrim, '');\n  var isBinary = reIsBinary.test(value);\n  return (isBinary || reIsOctal.test(value))\n    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)\n    : (reIsBadHex.test(value) ? NAN : +value);\n}\n\nmodule.exports = toNumber;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/lodash/toNumber.js?");

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

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://%5Bname%5D/(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/characterSheet.js":
/*!*******************************!*\
  !*** ./src/characterSheet.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_fields_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/fields.js */ \"./src/data/fields.js\");\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.js */ \"./src/store.js\");\n/* harmony import */ var _model_functions_abilityModifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/functions/abilityModifier */ \"./src/model/functions/abilityModifier.js\");\n\n\n\nvar pragma = document.getElementById('pragma');\npragma.fields = _data_fields_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\npragma.state = _store_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].characters[1];\npragma.functions = {\n  abilityModifier: _model_functions_abilityModifier__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n};\n\npragma._tag.update();\n\n//# sourceURL=webpack://%5Bname%5D/./src/characterSheet.js?");

/***/ }),

/***/ "./src/data/fields.js":
/*!****************************!*\
  !*** ./src/data/fields.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * A set of fields that describe a Pathfinder Character Sheet.\n *\n * TODO: Worth splitting these out to separate files and composing them here.\n * TODO: Consider defining UI layout somewhere else... maybe.\n *\n * @see {FormProcessor} for the {Field} schema\n * @see {CharacterSheet} for the data schema\n * @type {Field[]}\n */\nvar fields = [// Placeholder fields\n{\n  // Sections placeholder parent\n  path: 'sections',\n  type: 'virtual',\n  omit: true\n}, {\n  // Templates placeholder parent\n  path: 'templates',\n  type: 'virtual',\n  omit: true\n}, // Profile\n{\n  path: 'profile',\n  type: 'section',\n  name: 'Profile',\n  description: 'Character profile'\n}, {\n  path: 'profile.name',\n  type: 'string',\n  name: 'Name',\n  description: \"The character's given or chosen name\"\n}, {\n  path: 'profile.alignment',\n  type: 'selection',\n  name: 'Alignment',\n  description: \"The character's general and moral attitude\",\n  options: {\n    options: {\n      'lawfulGood': 'Lawful Good',\n      'neutralGood': 'Neutral Good',\n      'chaoticGood': 'Chaotic Good',\n      'lawfulNeutral': 'Lawful Neutral',\n      'trueNeutral': 'True Neutral',\n      'chaoticNeutral': 'Chaotic Neutral',\n      'lawfulEvil': 'Lawful Evil',\n      'neutralEvil': 'Neutral Evil',\n      'chaoticEvil': 'Chaotic Evil'\n    }\n  }\n}, {\n  path: 'profile.age',\n  type: 'string',\n  name: 'Age',\n  description: \"The character's age\"\n}, {\n  path: 'profile.gender',\n  type: 'string',\n  name: 'Gender',\n  description: \"The character's gender\"\n}, {\n  path: 'profile.height',\n  type: 'string',\n  name: 'Height',\n  description: \"The character's height\"\n}, {\n  path: 'profile.weight',\n  type: 'string',\n  name: 'Weight',\n  description: \"The character's weight\"\n}, {\n  path: 'profile.hair',\n  type: 'string',\n  name: 'Hair',\n  description: \"The character's eye color\"\n}, {\n  path: 'profile.eyes',\n  type: 'string',\n  name: 'Eyes',\n  description: \"The character's eye color\"\n}, {\n  path: 'race',\n  type: 'section',\n  name: 'Race',\n  description: \"The character's race\"\n}, {\n  path: 'race.name',\n  type: 'string',\n  description: \"The name of the race\"\n}, // Classes\n{\n  path: 'templates.class.name',\n  type: 'string',\n  name: 'Class name'\n}, {\n  path: 'templates.class',\n  name: 'Class',\n  type: 'group',\n  options: {\n    hideLabel: true\n  }\n}, {\n  path: 'templates.class.levels',\n  type: 'number',\n  name: 'Levels',\n  options: {\n    min: 1\n  },\n  default: 1\n}, {\n  path: 'classes',\n  type: 'section',\n  name: 'Classes',\n  description: \"The character's classes\"\n}, {\n  path: 'classes.list',\n  type: 'list',\n  options: {\n    editable: true // TODO: Rename to mutable.. or something else more appropriate\n\n  },\n  template: 'templates.class',\n  fixed: {\n    0: true // Always keep the first class\n\n  }\n}, {\n  path: 'classes.level',\n  expression: 'sumBy($parent.list, \"levels\")'\n}, // Abilities\n{\n  path: 'templates.ability',\n  type: 'group',\n  name: 'Ability'\n}, {\n  path: 'templates.ability.score',\n  expression: '$parent.base +' + '$parent.racialBonus +' + '$parent.miscBonus +' + '$parent.tempBonus'\n}, {\n  path: 'templates.ability.modifier',\n  expression: 'abilityModifier($parent.score)'\n}, {\n  path: 'templates.ability.base'\n}, {\n  path: 'templates.ability.racialBonus'\n}, {\n  path: 'templates.ability.miscBonus'\n}, {\n  path: 'templates.ability.tempBonus'\n}, {\n  path: 'sections.abilities',\n  parent: '',\n  type: 'section',\n  name: 'Abilities',\n  virtual: true\n}, {\n  path: 'abilities',\n  parent: 'sections.abilities',\n  type: 'table',\n  template: 'templates.ability',\n  fixed: ['str', 'dex', 'con', 'int', 'wis', 'cha'],\n  options: {\n    showLabel: true,\n    headings: ['Ability', 'Score', 'Modifier', 'Base', 'Racial', 'Misc', 'Temp']\n  }\n}, {\n  path: 'abilities.str',\n  type: 'group',\n  name: 'Strength'\n}, {\n  path: 'abilities.dex',\n  type: 'group',\n  name: 'Dexterity'\n}, {\n  path: 'abilities.con',\n  type: 'group',\n  name: 'Constitution'\n}, {\n  path: 'abilities.int',\n  type: 'group',\n  name: 'Intelligence'\n}, {\n  path: 'abilities.wis',\n  type: 'group',\n  name: 'Wisdom'\n}, {\n  path: 'abilities.cha',\n  type: 'group',\n  name: 'Charisma'\n}, {\n  path: 'defense',\n  type: 'section',\n  name: 'Defense',\n  description: 'Defense statistics'\n}, {\n  path: 'defense.hitPoints',\n  type: 'group',\n  name: 'Hit points'\n}, {\n  path: 'defense.hitPoints.current',\n  expression: 'min($value, $parent.total)',\n  disabled: false\n}, {\n  path: 'defense.hitPoints.total',\n  expression: '$parent.base + $parent.tempModifier'\n}, {\n  path: 'defense.hitPoints.base'\n}, {\n  path: 'defense.hitPoints.tempModifier'\n}, {\n  path: 'defense.hitPoints.nonLethalDamage'\n}, {\n  path: 'defense.armorClass',\n  type: 'group',\n  name: 'AC'\n}, {\n  path: 'defense.armorClass.total',\n  name: 'Armor Class',\n  expression: '10 + $parent.armorBonus + $parent.shieldBonus + $parent.abilityModifier + ' + '$parent.sizeModifier + $parent.naturalArmor + $parent.deflectionModifier + ' + '$parent.miscModifier + $parent.tempModifier'\n}, {\n  path: 'defense.armorClass.touch',\n  expression: '$parent.total - $parent.armorBonus - $parent.shieldBonus - $parent.naturalArmor'\n}, {\n  path: 'defense.armorClass.flatFooted',\n  name: 'Flat-footed Armor Class',\n  expression: '$parent.total - $parent.abilityModifier'\n}, {\n  path: 'defense.armorClass.armorBonus'\n}, {\n  path: 'defense.armorClass.shieldBonus'\n}, {\n  path: 'defense.armorClass.abilityModifier',\n  expression: 'abilities.dex.modifier'\n}, {\n  path: 'defense.armorClass.sizeModifier',\n  expression: 'size.modifier'\n}, {\n  path: 'defense.armorClass.naturalArmor'\n}, {\n  path: 'defense.armorClass.deflectionModifier'\n}, {\n  path: 'defense.armorClass.miscModifier'\n}, {\n  path: 'defense.armorClass.tempModifier'\n}, {\n  path: 'defense.damageReduction'\n}, {\n  path: 'defense.spellResistance'\n}, // {\n// \tpath: 'templates.save'\n// },\n{\n  path: 'sections.saves',\n  parent: 'defense',\n  name: 'Saving throws',\n  type: 'section',\n  virtual: true\n}, {\n  path: 'defense.saves',\n  parent: 'sections.saves',\n  type: 'table',\n  options: {\n    showLabel: true,\n    headings: ['Save', 'Total', 'Base', 'Ability', 'Magic', 'Misc', 'Temp']\n  }\n}, {\n  path: 'defense.saves.fortitude',\n  type: 'group'\n}, {\n  path: 'defense.saves.fortitude.total',\n  expression: '$parent.base + $parent.abilityModifier + ' + '$parent.magicModifier + $parent.miscModifier + ' + '$parent.tempModifier'\n}, {\n  path: 'defense.saves.fortitude.base'\n}, {\n  path: 'defense.saves.fortitude.abilityModifier',\n  expression: 'abilities.con.modifier'\n}, {\n  path: 'defense.saves.fortitude.magicModifier'\n}, {\n  path: 'defense.saves.fortitude.miscModifier'\n}, {\n  path: 'defense.saves.fortitude.tempModifier'\n}, {\n  path: 'defense.saves.reflex',\n  type: 'group'\n}, {\n  path: 'defense.saves.reflex.total',\n  expression: '$parent.base + $parent.abilityModifier + ' + '$parent.magicModifier + $parent.miscModifier + ' + '$parent.tempModifier'\n}, {\n  path: 'defense.saves.reflex.base'\n}, {\n  path: 'defense.saves.reflex.abilityModifier',\n  expression: 'abilities.dex.modifier'\n}, {\n  path: 'defense.saves.reflex.magicModifier'\n}, {\n  path: 'defense.saves.reflex.miscModifier'\n}, {\n  path: 'defense.saves.reflex.tempModifier'\n}, {\n  path: 'defense.saves.will',\n  type: 'group'\n}, {\n  path: 'defense.saves.will.total',\n  expression: '$parent.base + $parent.abilityModifier + ' + '$parent.magicModifier + $parent.miscModifier + ' + '$parent.tempModifier'\n}, {\n  path: 'defense.saves.will.base'\n}, {\n  path: 'defense.saves.will.abilityModifier',\n  expression: 'abilities.wis.modifier'\n}, {\n  path: 'defense.saves.will.magicModifier'\n}, {\n  path: 'defense.saves.will.miscModifier'\n}, {\n  path: 'defense.saves.will.tempModifier'\n}, {\n  path: 'defense.combatManeuverDefense',\n  type: 'group'\n}, {\n  path: 'defense.combatManeuverDefense.total',\n  expression: '10 + $parent.baseAttackBonus + $parent.strModifier + ' + '$parent.dexModifier + $parent.sizeModifier + ' + '$parent.miscModifier + $parent.tempModifier'\n}, {\n  path: 'defense.combatManeuverDefense.baseAttackBonus',\n  expression: 'offense.baseAttackBonus'\n}, {\n  path: 'defense.combatManeuverDefense.strModifier',\n  expression: 'abilities.str.modifier'\n}, {\n  path: 'defense.combatManeuverDefense.dexModifier',\n  expression: 'abilities.dex.modifier'\n}, {\n  path: 'defense.combatManeuverDefense.sizeModifier',\n  expression: 'size.modifier'\n}, {\n  path: 'defense.combatManeuverDefense.miscModifier'\n}, {\n  path: 'defense.combatManeuverDefense.tempModifier'\n}, {\n  path: 'offense',\n  type: 'section',\n  description: 'Offense statistics'\n}, {\n  path: 'offense.initiative',\n  type: 'group'\n}, {\n  path: 'offense.initiative.total',\n  expression: '$parent.abilityModifier + $parent.miscModifier + ' + '$parent.tempModifier'\n}, {\n  path: 'offense.initiative.abilityModifier',\n  expression: 'abilities.dex.modifier'\n}, {\n  path: 'offense.initiative.miscModifier'\n}, {\n  path: 'offense.initiative.tempModifier'\n}, {\n  path: 'offense.baseAttackBonus'\n}, {\n  path: 'offense.speed',\n  type: 'group'\n}, {\n  path: 'offense.speed.land',\n  type: 'string'\n}, {\n  path: 'offense.speed.withArmor',\n  type: 'string'\n}, {\n  path: 'offense.speed.fly',\n  type: 'string'\n}, {\n  path: 'offense.speed.swim',\n  type: 'string'\n}, {\n  path: 'offense.speed.climb',\n  type: 'string'\n}, {\n  path: 'offense.speed.burrow',\n  type: 'string'\n}, {\n  path: 'offense.combatManeuverBonus',\n  type: 'group'\n}, {\n  path: 'offense.combatManeuverBonus.total',\n  expression: '10 + $parent.baseAttackBonus + $parent.abilityModifier + ' + '$parent.sizeModifier + $parent.miscModifier + ' + '$parent.tempModifier'\n}, {\n  path: 'offense.combatManeuverBonus.baseAttackBonus',\n  expression: 'offense.baseAttackBonus'\n}, {\n  path: 'offense.combatManeuverBonus.abilityModifier',\n  expression: 'abilities.str.modifier'\n}, {\n  path: 'offense.combatManeuverBonus.sizeModifier',\n  expression: 'size.modifier'\n}, {\n  path: 'offense.combatManeuverBonus.miscModifier'\n}, {\n  path: 'offense.combatManeuverBonus.tempModifier'\n}, {\n  path: 'templates.skill',\n  name: null,\n  type: 'group'\n}, {\n  path: 'templates.skill.trained',\n  disabled: true\n}, {\n  path: 'templates.skill.total',\n  expression: '$parent.abilityModifier + $parent.classBonus + ' + '$parent.ranks + $parent.racialBonus + ' + '$parent.traitBonus + $parent.miscModifier + ' + '$parent.tempModifier'\n}, {\n  path: 'templates.skill.ability',\n  type: 'selection',\n  options: {\n    options: {\n      'str': 'Strength',\n      'dex': 'Dexterity',\n      'con': 'Constitution',\n      'int': 'Intelligence',\n      'wis': 'Wisdom',\n      'cha': 'Charisma'\n    }\n  },\n  default: 'str',\n  disabled: true\n}, {\n  path: 'templates.skill.abilityModifier',\n  expression: 'value(concat(\"abilities.\", $parent.ability, \".modifier\"))'\n}, {\n  path: 'templates.skill.trained',\n  type: 'boolean',\n  disabled: true\n}, {\n  path: 'templates.skill.classSkill',\n  type: 'boolean'\n}, {\n  path: 'templates.skill.classBonus',\n  expression: '$parent.classSkill and (not $parent.trained or $parent.ranks > 0) ? 3 : 0'\n}, {\n  path: 'templates.skill.ranks',\n  options: {\n    min: 0\n  }\n}, {\n  path: 'templates.skill.racialBonus'\n}, {\n  path: 'templates.skill.miscModifier'\n}, {\n  path: 'templates.skill.tempModifier'\n}, {\n  path: 'skills',\n  type: 'section'\n}, {\n  path: 'skills.list',\n  type: 'list',\n  input: 'pragma-table',\n  options: {\n    showLabel: true,\n    headings: ['Skill', 'Trained', 'Total', 'Ability', 'Modifier', 'Class', // Class skill\n    '', // Class bonus\n    'Ranks', 'Racial', 'Misc', 'Temp']\n  },\n  template: 'templates.skill',\n  merge: true,\n  fixed: ['acrobatics', 'appraise', 'bluff', 'climb', 'craft', 'diplomacy', 'disableDevice', 'disguise', 'escapeArtist', 'fly', 'handleAnimal', 'heal', 'intimidate', 'knowledgeArcana', 'knowledgeDungeoneering', 'knowledgeEngineering', 'knowledgeGeography', 'knowledgeHistory', 'knowledgeLocal', 'knowledgeNature', 'knowledgeNobility', 'knowledgePlanes', 'knowledgeReligion', 'linguistics', 'perception', 'perform', 'profession', 'ride', 'senseMotive', 'sleightOfHand', 'spellcraft', 'stealth', 'survival', 'swim', 'useMagicDevice', 'test', 'test2'],\n  default: {\n    acrobatics: {\n      ability: 'dex'\n    },\n    appraise: {\n      ability: 'int'\n    },\n    bluff: {\n      ability: 'cha'\n    },\n    climb: {\n      ability: 'str'\n    },\n    craft: {\n      ability: 'int',\n      variant: true\n    },\n    diplomacy: {\n      ability: 'cha'\n    },\n    disableDevice: {\n      ability: 'dex',\n      trained: true\n    },\n    disguise: {\n      ability: 'cha'\n    },\n    escapeArtist: {\n      ability: 'dex'\n    },\n    fly: {\n      ability: 'dex'\n    },\n    handleAnimal: {\n      ability: 'cha',\n      trained: true\n    },\n    heal: {\n      ability: 'wis'\n    },\n    intimidate: {\n      ability: 'cha'\n    },\n    knowledgeArcana: {\n      ability: 'int',\n      trained: true\n    },\n    knowledgeDungeoneering: {\n      ability: 'int',\n      trained: true\n    },\n    knowledgeEngineering: {\n      ability: 'int',\n      trained: true\n    },\n    knowledgeGeography: {\n      ability: 'int',\n      trained: true\n    },\n    knowledgeHistory: {\n      ability: 'int',\n      trained: true\n    },\n    knowledgeLocal: {\n      ability: 'int',\n      trained: true\n    },\n    knowledgeNature: {\n      ability: 'int',\n      trained: true\n    },\n    knowledgeNobility: {\n      ability: 'int',\n      trained: true\n    },\n    knowledgePlanes: {\n      ability: 'int',\n      trained: true\n    },\n    knowledgeReligion: {\n      ability: 'int',\n      trained: true\n    },\n    linguistics: {\n      ability: 'int',\n      trained: true\n    },\n    perception: {\n      ability: 'wis'\n    },\n    perform: {\n      ability: 'cha',\n      variant: true\n    },\n    profession: {\n      ability: 'wis',\n      trained: true,\n      variant: true\n    },\n    ride: {\n      ability: 'dex'\n    },\n    senseMotive: {\n      ability: 'wis'\n    },\n    sleightOfHand: {\n      ability: 'dex'\n    },\n    spellcraft: {\n      ability: 'int',\n      trained: true\n    },\n    stealth: {\n      ability: 'dex'\n    },\n    survival: {\n      ability: 'wis'\n    },\n    swim: {\n      ability: 'str'\n    },\n    useMagicDevice: {\n      ability: 'cha',\n      trained: true\n    }\n  }\n}, {\n  path: 'skills.list.test',\n  name: 'Test skill',\n  default: {\n    ability: 'dex'\n  }\n}, {\n  path: 'skills.list.test2',\n  name: 'Test skill 2',\n  default: {\n    ability: 'cha'\n  }\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (fields);\n\n//# sourceURL=webpack://%5Bname%5D/./src/data/fields.js?");

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

/***/ "./src/model/functions/abilityModifier.js":
/*!************************************************!*\
  !*** ./src/model/functions/abilityModifier.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mixins_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/util.js */ \"./src/mixins/util.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (score) {\n  if (!_mixins_util_js__WEBPACK_IMPORTED_MODULE_0__[\"util\"].isNumeric(score)) return null;\n  var modifier = Math.floor(score / 2 - 5);\n  if (!_mixins_util_js__WEBPACK_IMPORTED_MODULE_0__[\"util\"].isNumeric(modifier)) return null;\n  return modifier;\n});\n\n//# sourceURL=webpack://%5Bname%5D/./src/model/functions/abilityModifier.js?");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  characters: {\n    1: {\n      profile: {\n        name: 'Shade',\n        alignment: 'chaoticNeutral',\n        age: 27,\n        gender: 'Male',\n        height: \"5'9\\\"\",\n        weight: '10st',\n        hair: 'Black',\n        eyes: 'Black',\n        home: 'Enaevia'\n      },\n      race: {\n        name: 'Tiefling'\n      },\n      buffs: [],\n      classes: {\n        list: [{\n          name: 'Sorcerer',\n          levels: 11\n        }, {\n          name: 'Test second class',\n          levels: 1\n        }, {\n          name: 'Two',\n          levels: 2\n        }, {\n          name: 'Three',\n          levels: 3\n        }, {\n          name: 'Four',\n          levels: 4\n        }, {\n          name: 'Five',\n          levels: 5\n        }],\n        level: 11\n      },\n      abilities: {\n        str: {\n          base: 8,\n          miscBonus: 0,\n          tempBonus: 0\n        },\n        dex: {\n          base: 12,\n          miscBonus: 0,\n          tempBonus: 0\n        },\n        con: {\n          base: 12\n        },\n        int: {\n          base: 12\n        },\n        wis: {\n          base: 14\n        },\n        cha: {\n          base: 17,\n          miscBonus: +4,\n          tempBonus: +0 // +2 for spell-casting...\n\n        }\n      },\n      defense: {\n        hitPoints: {\n          total: 52,\n          base: 52,\n          tempModifier: 0,\n          current: 52,\n          nonLethalDamage: 0\n        },\n        armorClass: {\n          total: 20,\n          touch: 11,\n          flatFooted: 15,\n          // TODO: Move everything below into defense.bonuses?\n          armorBonus: 3,\n          shieldBonus: 2,\n          abilityModifier: +1,\n          // Dex\n          sizeModifier: 0,\n          naturalArmor: 0,\n          deflectionModifier: 0,\n          miscModifier: 0,\n          tempModifier: 4\n        },\n        damageReduction: 0,\n        spellResistance: 0,\n        saves: {\n          fortitude: {\n            total: 4,\n            base: 3,\n            abilityModifier: +1,\n            // Con\n            magicModifier: 0,\n            miscModifier: 0,\n            tempModifier: 0\n          },\n          reflex: {\n            total: 6,\n            base: 3,\n            abilityModifier: +1,\n            // Dex\n            magicModifier: 0,\n            miscModifier: +2,\n            tempModifier: 0\n          },\n          will: {\n            total: 7,\n            base: 5,\n            abilityModifier: +2,\n            // Wis\n            magicModifier: 0,\n            miscModifier: 0,\n            tempModifier: 0\n          }\n        },\n        resistances: {\n          cold: {\n            total: 5,\n            base: 5,\n            miscModifier: 0,\n            tempModifier: 0\n          },\n          fire: {\n            total: 5,\n            base: 5,\n            miscModifier: 5,\n            tempModifier: 5\n          },\n          electricity: {\n            total: 25,\n            base: 5,\n            miscModifier: 20,\n            tempModifier: 0\n          },\n          acid: {\n            total: 0,\n            base: 0,\n            miscModifier: 0,\n            tempModifier: 0\n          }\n        },\n        combatManeuverDefense: {\n          total: 14,\n          baseAttackBonus: 4,\n          strModifier: -1,\n          dexModifier: +1,\n          sizeModifier: 0,\n          miscModifier: 0,\n          tempModifier: 0\n        }\n      },\n      offense: {\n        initiative: {\n          total: 5,\n          abilityModifier: +1,\n          // Dex\n          miscModifier: +4\n        },\n        baseAttackBonus: 4,\n        speed: {\n          land: '5ft',\n          withArmor: 'N/A',\n          fly: '',\n          swim: '',\n          climb: '',\n          burrow: ''\n        },\n        combatManeuverBonus: {\n          total: 3,\n          baseAttackBonus: 4,\n          abilityModifier: -1,\n          // Str\n          sizeModifier: 0,\n          miscModifier: 0,\n          tempModifier: 0\n        }\n      },\n      skills: {\n        list: {\n          bluff: {\n            classSkill: true,\n            ranks: 3,\n            racialBonus: 2\n          }\n        }\n      }\n    },\n    2: {\n      profile: {\n        name: 'Zyra',\n        alignment: 'neutralGood',\n        age: 22,\n        gender: 'Female',\n        height: \"5'6\\\"\",\n        weight: \"9st7lb\",\n        hair: 'Black',\n        eyes: 'Black',\n        home: 'Ilun'\n      },\n      race: 'Catfolk',\n      class: 'Mindblade',\n      abilities: {\n        str: {\n          base: 14\n        },\n        dex: {\n          base: 12\n        },\n        con: {\n          base: 13\n        },\n        int: {\n          base: 16\n        },\n        wis: {\n          base: 10\n        },\n        cha: {\n          base: 10\n        }\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack://%5Bname%5D/./src/store.js?");

/***/ })

/******/ })["default"];
});