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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var hashClear = __webpack_require__(/*! ./_hashClear */ \"./node_modules/lodash/_hashClear.js\"),\n    hashDelete = __webpack_require__(/*! ./_hashDelete */ \"./node_modules/lodash/_hashDelete.js\"),\n    hashGet = __webpack_require__(/*! ./_hashGet */ \"./node_modules/lodash/_hashGet.js\"),\n    hashHas = __webpack_require__(/*! ./_hashHas */ \"./node_modules/lodash/_hashHas.js\"),\n    hashSet = __webpack_require__(/*! ./_hashSet */ \"./node_modules/lodash/_hashSet.js\");\n\n/**\n * Creates a hash object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction Hash(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `Hash`.\nHash.prototype.clear = hashClear;\nHash.prototype['delete'] = hashDelete;\nHash.prototype.get = hashGet;\nHash.prototype.has = hashHas;\nHash.prototype.set = hashSet;\n\nmodule.exports = Hash;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_Hash.js?");

/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ \"./node_modules/lodash/_listCacheClear.js\"),\n    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ \"./node_modules/lodash/_listCacheDelete.js\"),\n    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ \"./node_modules/lodash/_listCacheGet.js\"),\n    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ \"./node_modules/lodash/_listCacheHas.js\"),\n    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ \"./node_modules/lodash/_listCacheSet.js\");\n\n/**\n * Creates an list cache object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction ListCache(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `ListCache`.\nListCache.prototype.clear = listCacheClear;\nListCache.prototype['delete'] = listCacheDelete;\nListCache.prototype.get = listCacheGet;\nListCache.prototype.has = listCacheHas;\nListCache.prototype.set = listCacheSet;\n\nmodule.exports = ListCache;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_ListCache.js?");

/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar Map = getNative(root, 'Map');\n\nmodule.exports = Map;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_Map.js?");

/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ \"./node_modules/lodash/_mapCacheClear.js\"),\n    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ \"./node_modules/lodash/_mapCacheDelete.js\"),\n    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ \"./node_modules/lodash/_mapCacheGet.js\"),\n    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ \"./node_modules/lodash/_mapCacheHas.js\"),\n    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ \"./node_modules/lodash/_mapCacheSet.js\");\n\n/**\n * Creates a map cache object to store key-value pairs.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction MapCache(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `MapCache`.\nMapCache.prototype.clear = mapCacheClear;\nMapCache.prototype['delete'] = mapCacheDelete;\nMapCache.prototype.get = mapCacheGet;\nMapCache.prototype.has = mapCacheHas;\nMapCache.prototype.set = mapCacheSet;\n\nmodule.exports = MapCache;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_MapCache.js?");

/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ListCache = __webpack_require__(/*! ./_ListCache */ \"./node_modules/lodash/_ListCache.js\"),\n    stackClear = __webpack_require__(/*! ./_stackClear */ \"./node_modules/lodash/_stackClear.js\"),\n    stackDelete = __webpack_require__(/*! ./_stackDelete */ \"./node_modules/lodash/_stackDelete.js\"),\n    stackGet = __webpack_require__(/*! ./_stackGet */ \"./node_modules/lodash/_stackGet.js\"),\n    stackHas = __webpack_require__(/*! ./_stackHas */ \"./node_modules/lodash/_stackHas.js\"),\n    stackSet = __webpack_require__(/*! ./_stackSet */ \"./node_modules/lodash/_stackSet.js\");\n\n/**\n * Creates a stack cache object to store key-value pairs.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction Stack(entries) {\n  var data = this.__data__ = new ListCache(entries);\n  this.size = data.size;\n}\n\n// Add methods to `Stack`.\nStack.prototype.clear = stackClear;\nStack.prototype['delete'] = stackDelete;\nStack.prototype.get = stackGet;\nStack.prototype.has = stackHas;\nStack.prototype.set = stackSet;\n\nmodule.exports = Stack;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_Stack.js?");

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Symbol = root.Symbol;\n\nmodule.exports = Symbol;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_Symbol.js?");

/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Uint8Array = root.Uint8Array;\n\nmodule.exports = Uint8Array;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_Uint8Array.js?");

/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A faster alternative to `Function#apply`, this function invokes `func`\n * with the `this` binding of `thisArg` and the arguments of `args`.\n *\n * @private\n * @param {Function} func The function to invoke.\n * @param {*} thisArg The `this` binding of `func`.\n * @param {Array} args The arguments to invoke `func` with.\n * @returns {*} Returns the result of `func`.\n */\nfunction apply(func, thisArg, args) {\n  switch (args.length) {\n    case 0: return func.call(thisArg);\n    case 1: return func.call(thisArg, args[0]);\n    case 2: return func.call(thisArg, args[0], args[1]);\n    case 3: return func.call(thisArg, args[0], args[1], args[2]);\n  }\n  return func.apply(thisArg, args);\n}\n\nmodule.exports = apply;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_apply.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayEach.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayEach.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.forEach` for arrays without support for\n * iteratee shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns `array`.\n */\nfunction arrayEach(array, iteratee) {\n  var index = -1,\n      length = array == null ? 0 : array.length;\n\n  while (++index < length) {\n    if (iteratee(array[index], index, array) === false) {\n      break;\n    }\n  }\n  return array;\n}\n\nmodule.exports = arrayEach;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_arrayEach.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseTimes = __webpack_require__(/*! ./_baseTimes */ \"./node_modules/lodash/_baseTimes.js\"),\n    isArguments = __webpack_require__(/*! ./isArguments */ \"./node_modules/lodash/isArguments.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isBuffer = __webpack_require__(/*! ./isBuffer */ \"./node_modules/lodash/isBuffer.js\"),\n    isIndex = __webpack_require__(/*! ./_isIndex */ \"./node_modules/lodash/_isIndex.js\"),\n    isTypedArray = __webpack_require__(/*! ./isTypedArray */ \"./node_modules/lodash/isTypedArray.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Creates an array of the enumerable property names of the array-like `value`.\n *\n * @private\n * @param {*} value The value to query.\n * @param {boolean} inherited Specify returning inherited property names.\n * @returns {Array} Returns the array of property names.\n */\nfunction arrayLikeKeys(value, inherited) {\n  var isArr = isArray(value),\n      isArg = !isArr && isArguments(value),\n      isBuff = !isArr && !isArg && isBuffer(value),\n      isType = !isArr && !isArg && !isBuff && isTypedArray(value),\n      skipIndexes = isArr || isArg || isBuff || isType,\n      result = skipIndexes ? baseTimes(value.length, String) : [],\n      length = result.length;\n\n  for (var key in value) {\n    if ((inherited || hasOwnProperty.call(value, key)) &&\n        !(skipIndexes && (\n           // Safari 9 has enumerable `arguments.length` in strict mode.\n           key == 'length' ||\n           // Node.js 0.10 has enumerable non-index properties on buffers.\n           (isBuff && (key == 'offset' || key == 'parent')) ||\n           // PhantomJS 2 has enumerable non-index properties on typed arrays.\n           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||\n           // Skip index properties.\n           isIndex(key, length)\n        ))) {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\nmodule.exports = arrayLikeKeys;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_arrayLikeKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.map` for arrays without support for iteratee\n * shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the new mapped array.\n */\nfunction arrayMap(array, iteratee) {\n  var index = -1,\n      length = array == null ? 0 : array.length,\n      result = Array(length);\n\n  while (++index < length) {\n    result[index] = iteratee(array[index], index, array);\n  }\n  return result;\n}\n\nmodule.exports = arrayMap;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_arrayMap.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayReduce.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayReduce.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.reduce` for arrays without support for\n * iteratee shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @param {*} [accumulator] The initial value.\n * @param {boolean} [initAccum] Specify using the first element of `array` as\n *  the initial value.\n * @returns {*} Returns the accumulated value.\n */\nfunction arrayReduce(array, iteratee, accumulator, initAccum) {\n  var index = -1,\n      length = array == null ? 0 : array.length;\n\n  if (initAccum && length) {\n    accumulator = array[++index];\n  }\n  while (++index < length) {\n    accumulator = iteratee(accumulator, array[index], index, array);\n  }\n  return accumulator;\n}\n\nmodule.exports = arrayReduce;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_arrayReduce.js?");

/***/ }),

/***/ "./node_modules/lodash/_asciiToArray.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_asciiToArray.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Converts an ASCII `string` to an array.\n *\n * @private\n * @param {string} string The string to convert.\n * @returns {Array} Returns the converted array.\n */\nfunction asciiToArray(string) {\n  return string.split('');\n}\n\nmodule.exports = asciiToArray;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_asciiToArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_asciiWords.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_asciiWords.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used to match words composed of alphanumeric characters. */\nvar reAsciiWord = /[^\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\x7f]+/g;\n\n/**\n * Splits an ASCII `string` into an array of its words.\n *\n * @private\n * @param {string} The string to inspect.\n * @returns {Array} Returns the words of `string`.\n */\nfunction asciiWords(string) {\n  return string.match(reAsciiWord) || [];\n}\n\nmodule.exports = asciiWords;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_asciiWords.js?");

/***/ }),

/***/ "./node_modules/lodash/_assignMergeValue.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_assignMergeValue.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ \"./node_modules/lodash/_baseAssignValue.js\"),\n    eq = __webpack_require__(/*! ./eq */ \"./node_modules/lodash/eq.js\");\n\n/**\n * This function is like `assignValue` except that it doesn't assign\n * `undefined` values.\n *\n * @private\n * @param {Object} object The object to modify.\n * @param {string} key The key of the property to assign.\n * @param {*} value The value to assign.\n */\nfunction assignMergeValue(object, key, value) {\n  if ((value !== undefined && !eq(object[key], value)) ||\n      (value === undefined && !(key in object))) {\n    baseAssignValue(object, key, value);\n  }\n}\n\nmodule.exports = assignMergeValue;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_assignMergeValue.js?");

/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ \"./node_modules/lodash/_baseAssignValue.js\"),\n    eq = __webpack_require__(/*! ./eq */ \"./node_modules/lodash/eq.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Assigns `value` to `key` of `object` if the existing value is not equivalent\n * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * for equality comparisons.\n *\n * @private\n * @param {Object} object The object to modify.\n * @param {string} key The key of the property to assign.\n * @param {*} value The value to assign.\n */\nfunction assignValue(object, key, value) {\n  var objValue = object[key];\n  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||\n      (value === undefined && !(key in object))) {\n    baseAssignValue(object, key, value);\n  }\n}\n\nmodule.exports = assignValue;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_assignValue.js?");

/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var eq = __webpack_require__(/*! ./eq */ \"./node_modules/lodash/eq.js\");\n\n/**\n * Gets the index at which the `key` is found in `array` of key-value pairs.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {*} key The key to search for.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\nfunction assocIndexOf(array, key) {\n  var length = array.length;\n  while (length--) {\n    if (eq(array[length][0], key)) {\n      return length;\n    }\n  }\n  return -1;\n}\n\nmodule.exports = assocIndexOf;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_assocIndexOf.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineProperty = __webpack_require__(/*! ./_defineProperty */ \"./node_modules/lodash/_defineProperty.js\");\n\n/**\n * The base implementation of `assignValue` and `assignMergeValue` without\n * value checks.\n *\n * @private\n * @param {Object} object The object to modify.\n * @param {string} key The key of the property to assign.\n * @param {*} value The value to assign.\n */\nfunction baseAssignValue(object, key, value) {\n  if (key == '__proto__' && defineProperty) {\n    defineProperty(object, key, {\n      'configurable': true,\n      'enumerable': true,\n      'value': value,\n      'writable': true\n    });\n  } else {\n    object[key] = value;\n  }\n}\n\nmodule.exports = baseAssignValue;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_baseAssignValue.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseClamp.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseClamp.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.clamp` which doesn't coerce arguments.\n *\n * @private\n * @param {number} number The number to clamp.\n * @param {number} [lower] The lower bound.\n * @param {number} upper The upper bound.\n * @returns {number} Returns the clamped number.\n */\nfunction baseClamp(number, lower, upper) {\n  if (number === number) {\n    if (upper !== undefined) {\n      number = number <= upper ? number : upper;\n    }\n    if (lower !== undefined) {\n      number = number >= lower ? number : lower;\n    }\n  }\n  return number;\n}\n\nmodule.exports = baseClamp;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_baseClamp.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n\n/** Built-in value references. */\nvar objectCreate = Object.create;\n\n/**\n * The base implementation of `_.create` without support for assigning\n * properties to the created object.\n *\n * @private\n * @param {Object} proto The object to inherit from.\n * @returns {Object} Returns the new object.\n */\nvar baseCreate = (function() {\n  function object() {}\n  return function(proto) {\n    if (!isObject(proto)) {\n      return {};\n    }\n    if (objectCreate) {\n      return objectCreate(proto);\n    }\n    object.prototype = proto;\n    var result = new object;\n    object.prototype = undefined;\n    return result;\n  };\n}());\n\nmodule.exports = baseCreate;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_baseCreate.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseEach.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseEach.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ \"./node_modules/lodash/_baseForOwn.js\"),\n    createBaseEach = __webpack_require__(/*! ./_createBaseEach */ \"./node_modules/lodash/_createBaseEach.js\");\n\n/**\n * The base implementation of `_.forEach` without support for iteratee shorthands.\n *\n * @private\n * @param {Array|Object} collection The collection to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array|Object} Returns `collection`.\n */\nvar baseEach = createBaseEach(baseForOwn);\n\nmodule.exports = baseEach;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_baseEach.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ \"./node_modules/lodash/_createBaseFor.js\");\n\n/**\n * The base implementation of `baseForOwn` which iterates over `object`\n * properties returned by `keysFunc` and invokes `iteratee` for each property.\n * Iteratee functions may exit iteration early by explicitly returning `false`.\n *\n * @private\n * @param {Object} object The object to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @param {Function} keysFunc The function to get the keys of `object`.\n * @returns {Object} Returns `object`.\n */\nvar baseFor = createBaseFor();\n\nmodule.exports = baseFor;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_baseFor.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseFor = __webpack_require__(/*! ./_baseFor */ \"./node_modules/lodash/_baseFor.js\"),\n    keys = __webpack_require__(/*! ./keys */ \"./node_modules/lodash/keys.js\");\n\n/**\n * The base implementation of `_.forOwn` without support for iteratee shorthands.\n *\n * @private\n * @param {Object} object The object to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Object} Returns `object`.\n */\nfunction baseForOwn(object, iteratee) {\n  return object && baseFor(object, iteratee, keys);\n}\n\nmodule.exports = baseForOwn;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_baseForOwn.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var castPath = __webpack_require__(/*! ./_castPath */ \"./node_modules/lodash/_castPath.js\"),\n    toKey = __webpack_require__(/*! ./_toKey */ \"./node_modules/lodash/_toKey.js\");\n\n/**\n * The base implementation of `_.get` without support for default values.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {Array|string} path The path of the property to get.\n * @returns {*} Returns the resolved value.\n */\nfunction baseGet(object, path) {\n  path = castPath(path, object);\n\n  var index = 0,\n      length = path.length;\n\n  while (object != null && index < length) {\n    object = object[toKey(path[index++])];\n  }\n  return (index && index == length) ? object : undefined;\n}\n\nmodule.exports = baseGet;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_baseGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    getRawTag = __webpack_require__(/*! ./_getRawTag */ \"./node_modules/lodash/_getRawTag.js\"),\n    objectToString = __webpack_require__(/*! ./_objectToString */ \"./node_modules/lodash/_objectToString.js\");\n\n/** `Object#toString` result references. */\nvar nullTag = '[object Null]',\n    undefinedTag = '[object Undefined]';\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * The base implementation of `getTag` without fallbacks for buggy environments.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nfunction baseGetTag(value) {\n  if (value == null) {\n    return value === undefined ? undefinedTag : nullTag;\n  }\n  return (symToStringTag && symToStringTag in Object(value))\n    ? getRawTag(value)\n    : objectToString(value);\n}\n\nmodule.exports = baseGetTag;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_baseGetTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]';\n\n/**\n * The base implementation of `_.isArguments`.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an `arguments` object,\n */\nfunction baseIsArguments(value) {\n  return isObjectLike(value) && baseGetTag(value) == argsTag;\n}\n\nmodule.exports = baseIsArguments;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_baseIsArguments.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isFunction = __webpack_require__(/*! ./isFunction */ \"./node_modules/lodash/isFunction.js\"),\n    isMasked = __webpack_require__(/*! ./_isMasked */ \"./node_modules/lodash/_isMasked.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    toSource = __webpack_require__(/*! ./_toSource */ \"./node_modules/lodash/_toSource.js\");\n\n/**\n * Used to match `RegExp`\n * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).\n */\nvar reRegExpChar = /[\\\\^$.*+?()[\\]{}|]/g;\n\n/** Used to detect host constructors (Safari). */\nvar reIsHostCtor = /^\\[object .+?Constructor\\]$/;\n\n/** Used for built-in method references. */\nvar funcProto = Function.prototype,\n    objectProto = Object.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Used to detect if a method is native. */\nvar reIsNative = RegExp('^' +\n  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\\\$&')\n  .replace(/hasOwnProperty|(function).*?(?=\\\\\\()| for .+?(?=\\\\\\])/g, '$1.*?') + '$'\n);\n\n/**\n * The base implementation of `_.isNative` without bad shim checks.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a native function,\n *  else `false`.\n */\nfunction baseIsNative(value) {\n  if (!isObject(value) || isMasked(value)) {\n    return false;\n  }\n  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;\n  return pattern.test(toSource(value));\n}\n\nmodule.exports = baseIsNative;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_baseIsNative.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isLength = __webpack_require__(/*! ./isLength */ \"./node_modules/lodash/isLength.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]',\n    arrayTag = '[object Array]',\n    boolTag = '[object Boolean]',\n    dateTag = '[object Date]',\n    errorTag = '[object Error]',\n    funcTag = '[object Function]',\n    mapTag = '[object Map]',\n    numberTag = '[object Number]',\n    objectTag = '[object Object]',\n    regexpTag = '[object RegExp]',\n    setTag = '[object Set]',\n    stringTag = '[object String]',\n    weakMapTag = '[object WeakMap]';\n\nvar arrayBufferTag = '[object ArrayBuffer]',\n    dataViewTag = '[object DataView]',\n    float32Tag = '[object Float32Array]',\n    float64Tag = '[object Float64Array]',\n    int8Tag = '[object Int8Array]',\n    int16Tag = '[object Int16Array]',\n    int32Tag = '[object Int32Array]',\n    uint8Tag = '[object Uint8Array]',\n    uint8ClampedTag = '[object Uint8ClampedArray]',\n    uint16Tag = '[object Uint16Array]',\n    uint32Tag = '[object Uint32Array]';\n\n/** Used to identify `toStringTag` values of typed arrays. */\nvar typedArrayTags = {};\ntypedArrayTags[float32Tag] = typedArrayTags[float64Tag] =\ntypedArrayTags[int8Tag] = typedArrayTags[int16Tag] =\ntypedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =\ntypedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =\ntypedArrayTags[uint32Tag] = true;\ntypedArrayTags[argsTag] = typedArrayTags[arrayTag] =\ntypedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =\ntypedArrayTags[dataViewTag] = typedArrayTags[dateTag] =\ntypedArrayTags[errorTag] = typedArrayTags[funcTag] =\ntypedArrayTags[mapTag] = typedArrayTags[numberTag] =\ntypedArrayTags[objectTag] = typedArrayTags[regexpTag] =\ntypedArrayTags[setTag] = typedArrayTags[stringTag] =\ntypedArrayTags[weakMapTag] = false;\n\n/**\n * The base implementation of `_.isTypedArray` without Node.js optimizations.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.\n */\nfunction baseIsTypedArray(value) {\n  return isObjectLike(value) &&\n    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];\n}\n\nmodule.exports = baseIsTypedArray;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_baseIsTypedArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isPrototype = __webpack_require__(/*! ./_isPrototype */ \"./node_modules/lodash/_isPrototype.js\"),\n    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ \"./node_modules/lodash/_nativeKeys.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n */\nfunction baseKeys(object) {\n  if (!isPrototype(object)) {\n    return nativeKeys(object);\n  }\n  var result = [];\n  for (var key in Object(object)) {\n    if (hasOwnProperty.call(object, key) && key != 'constructor') {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\nmodule.exports = baseKeys;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_baseKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    isPrototype = __webpack_require__(/*! ./_isPrototype */ \"./node_modules/lodash/_isPrototype.js\"),\n    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ \"./node_modules/lodash/_nativeKeysIn.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n */\nfunction baseKeysIn(object) {\n  if (!isObject(object)) {\n    return nativeKeysIn(object);\n  }\n  var isProto = isPrototype(object),\n      result = [];\n\n  for (var key in object) {\n    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\nmodule.exports = baseKeysIn;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_baseKeysIn.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseMerge.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseMerge.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Stack = __webpack_require__(/*! ./_Stack */ \"./node_modules/lodash/_Stack.js\"),\n    assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ \"./node_modules/lodash/_assignMergeValue.js\"),\n    baseFor = __webpack_require__(/*! ./_baseFor */ \"./node_modules/lodash/_baseFor.js\"),\n    baseMergeDeep = __webpack_require__(/*! ./_baseMergeDeep */ \"./node_modules/lodash/_baseMergeDeep.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    keysIn = __webpack_require__(/*! ./keysIn */ \"./node_modules/lodash/keysIn.js\"),\n    safeGet = __webpack_require__(/*! ./_safeGet */ \"./node_modules/lodash/_safeGet.js\");\n\n/**\n * The base implementation of `_.merge` without support for multiple sources.\n *\n * @private\n * @param {Object} object The destination object.\n * @param {Object} source The source object.\n * @param {number} srcIndex The index of `source`.\n * @param {Function} [customizer] The function to customize merged values.\n * @param {Object} [stack] Tracks traversed source values and their merged\n *  counterparts.\n */\nfunction baseMerge(object, source, srcIndex, customizer, stack) {\n  if (object === source) {\n    return;\n  }\n  baseFor(source, function(srcValue, key) {\n    if (isObject(srcValue)) {\n      stack || (stack = new Stack);\n      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);\n    }\n    else {\n      var newValue = customizer\n        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)\n        : undefined;\n\n      if (newValue === undefined) {\n        newValue = srcValue;\n      }\n      assignMergeValue(object, key, newValue);\n    }\n  }, keysIn);\n}\n\nmodule.exports = baseMerge;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_baseMerge.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseMergeDeep.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseMergeDeep.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ \"./node_modules/lodash/_assignMergeValue.js\"),\n    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ \"./node_modules/lodash/_cloneBuffer.js\"),\n    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ \"./node_modules/lodash/_cloneTypedArray.js\"),\n    copyArray = __webpack_require__(/*! ./_copyArray */ \"./node_modules/lodash/_copyArray.js\"),\n    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ \"./node_modules/lodash/_initCloneObject.js\"),\n    isArguments = __webpack_require__(/*! ./isArguments */ \"./node_modules/lodash/isArguments.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ \"./node_modules/lodash/isArrayLikeObject.js\"),\n    isBuffer = __webpack_require__(/*! ./isBuffer */ \"./node_modules/lodash/isBuffer.js\"),\n    isFunction = __webpack_require__(/*! ./isFunction */ \"./node_modules/lodash/isFunction.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    isPlainObject = __webpack_require__(/*! ./isPlainObject */ \"./node_modules/lodash/isPlainObject.js\"),\n    isTypedArray = __webpack_require__(/*! ./isTypedArray */ \"./node_modules/lodash/isTypedArray.js\"),\n    safeGet = __webpack_require__(/*! ./_safeGet */ \"./node_modules/lodash/_safeGet.js\"),\n    toPlainObject = __webpack_require__(/*! ./toPlainObject */ \"./node_modules/lodash/toPlainObject.js\");\n\n/**\n * A specialized version of `baseMerge` for arrays and objects which performs\n * deep merges and tracks traversed objects enabling objects with circular\n * references to be merged.\n *\n * @private\n * @param {Object} object The destination object.\n * @param {Object} source The source object.\n * @param {string} key The key of the value to merge.\n * @param {number} srcIndex The index of `source`.\n * @param {Function} mergeFunc The function to merge values.\n * @param {Function} [customizer] The function to customize assigned values.\n * @param {Object} [stack] Tracks traversed source values and their merged\n *  counterparts.\n */\nfunction baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {\n  var objValue = safeGet(object, key),\n      srcValue = safeGet(source, key),\n      stacked = stack.get(srcValue);\n\n  if (stacked) {\n    assignMergeValue(object, key, stacked);\n    return;\n  }\n  var newValue = customizer\n    ? customizer(objValue, srcValue, (key + ''), object, source, stack)\n    : undefined;\n\n  var isCommon = newValue === undefined;\n\n  if (isCommon) {\n    var isArr = isArray(srcValue),\n        isBuff = !isArr && isBuffer(srcValue),\n        isTyped = !isArr && !isBuff && isTypedArray(srcValue);\n\n    newValue = srcValue;\n    if (isArr || isBuff || isTyped) {\n      if (isArray(objValue)) {\n        newValue = objValue;\n      }\n      else if (isArrayLikeObject(objValue)) {\n        newValue = copyArray(objValue);\n      }\n      else if (isBuff) {\n        isCommon = false;\n        newValue = cloneBuffer(srcValue, true);\n      }\n      else if (isTyped) {\n        isCommon = false;\n        newValue = cloneTypedArray(srcValue, true);\n      }\n      else {\n        newValue = [];\n      }\n    }\n    else if (isPlainObject(srcValue) || isArguments(srcValue)) {\n      newValue = objValue;\n      if (isArguments(objValue)) {\n        newValue = toPlainObject(objValue);\n      }\n      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {\n        newValue = initCloneObject(srcValue);\n      }\n    }\n    else {\n      isCommon = false;\n    }\n  }\n  if (isCommon) {\n    // Recursively merge objects and arrays (susceptible to call stack limits).\n    stack.set(srcValue, newValue);\n    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);\n    stack['delete'](srcValue);\n  }\n  assignMergeValue(object, key, newValue);\n}\n\nmodule.exports = baseMergeDeep;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_baseMergeDeep.js?");

/***/ }),

/***/ "./node_modules/lodash/_basePropertyOf.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_basePropertyOf.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.propertyOf` without support for deep paths.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Function} Returns the new accessor function.\n */\nfunction basePropertyOf(object) {\n  return function(key) {\n    return object == null ? undefined : object[key];\n  };\n}\n\nmodule.exports = basePropertyOf;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_basePropertyOf.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var identity = __webpack_require__(/*! ./identity */ \"./node_modules/lodash/identity.js\"),\n    overRest = __webpack_require__(/*! ./_overRest */ \"./node_modules/lodash/_overRest.js\"),\n    setToString = __webpack_require__(/*! ./_setToString */ \"./node_modules/lodash/_setToString.js\");\n\n/**\n * The base implementation of `_.rest` which doesn't validate or coerce arguments.\n *\n * @private\n * @param {Function} func The function to apply a rest parameter to.\n * @param {number} [start=func.length-1] The start position of the rest parameter.\n * @returns {Function} Returns the new function.\n */\nfunction baseRest(func, start) {\n  return setToString(overRest(func, start, identity), func + '');\n}\n\nmodule.exports = baseRest;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_baseRest.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assignValue = __webpack_require__(/*! ./_assignValue */ \"./node_modules/lodash/_assignValue.js\"),\n    castPath = __webpack_require__(/*! ./_castPath */ \"./node_modules/lodash/_castPath.js\"),\n    isIndex = __webpack_require__(/*! ./_isIndex */ \"./node_modules/lodash/_isIndex.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    toKey = __webpack_require__(/*! ./_toKey */ \"./node_modules/lodash/_toKey.js\");\n\n/**\n * The base implementation of `_.set`.\n *\n * @private\n * @param {Object} object The object to modify.\n * @param {Array|string} path The path of the property to set.\n * @param {*} value The value to set.\n * @param {Function} [customizer] The function to customize path creation.\n * @returns {Object} Returns `object`.\n */\nfunction baseSet(object, path, value, customizer) {\n  if (!isObject(object)) {\n    return object;\n  }\n  path = castPath(path, object);\n\n  var index = -1,\n      length = path.length,\n      lastIndex = length - 1,\n      nested = object;\n\n  while (nested != null && ++index < length) {\n    var key = toKey(path[index]),\n        newValue = value;\n\n    if (index != lastIndex) {\n      var objValue = nested[key];\n      newValue = customizer ? customizer(objValue, key, nested) : undefined;\n      if (newValue === undefined) {\n        newValue = isObject(objValue)\n          ? objValue\n          : (isIndex(path[index + 1]) ? [] : {});\n      }\n    }\n    assignValue(nested, key, newValue);\n    nested = nested[key];\n  }\n  return object;\n}\n\nmodule.exports = baseSet;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_baseSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var constant = __webpack_require__(/*! ./constant */ \"./node_modules/lodash/constant.js\"),\n    defineProperty = __webpack_require__(/*! ./_defineProperty */ \"./node_modules/lodash/_defineProperty.js\"),\n    identity = __webpack_require__(/*! ./identity */ \"./node_modules/lodash/identity.js\");\n\n/**\n * The base implementation of `setToString` without support for hot loop shorting.\n *\n * @private\n * @param {Function} func The function to modify.\n * @param {Function} string The `toString` result.\n * @returns {Function} Returns `func`.\n */\nvar baseSetToString = !defineProperty ? identity : function(func, string) {\n  return defineProperty(func, 'toString', {\n    'configurable': true,\n    'enumerable': false,\n    'value': constant(string),\n    'writable': true\n  });\n};\n\nmodule.exports = baseSetToString;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_baseSetToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.slice` without an iteratee call guard.\n *\n * @private\n * @param {Array} array The array to slice.\n * @param {number} [start=0] The start position.\n * @param {number} [end=array.length] The end position.\n * @returns {Array} Returns the slice of `array`.\n */\nfunction baseSlice(array, start, end) {\n  var index = -1,\n      length = array.length;\n\n  if (start < 0) {\n    start = -start > length ? 0 : (length + start);\n  }\n  end = end > length ? length : end;\n  if (end < 0) {\n    end += length;\n  }\n  length = start > end ? 0 : ((end - start) >>> 0);\n  start >>>= 0;\n\n  var result = Array(length);\n  while (++index < length) {\n    result[index] = array[index + start];\n  }\n  return result;\n}\n\nmodule.exports = baseSlice;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_baseSlice.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.times` without support for iteratee shorthands\n * or max array length checks.\n *\n * @private\n * @param {number} n The number of times to invoke `iteratee`.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the array of results.\n */\nfunction baseTimes(n, iteratee) {\n  var index = -1,\n      result = Array(n);\n\n  while (++index < n) {\n    result[index] = iteratee(index);\n  }\n  return result;\n}\n\nmodule.exports = baseTimes;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_baseTimes.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    arrayMap = __webpack_require__(/*! ./_arrayMap */ \"./node_modules/lodash/_arrayMap.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar INFINITY = 1 / 0;\n\n/** Used to convert symbols to primitives and strings. */\nvar symbolProto = Symbol ? Symbol.prototype : undefined,\n    symbolToString = symbolProto ? symbolProto.toString : undefined;\n\n/**\n * The base implementation of `_.toString` which doesn't convert nullish\n * values to empty strings.\n *\n * @private\n * @param {*} value The value to process.\n * @returns {string} Returns the string.\n */\nfunction baseToString(value) {\n  // Exit early for strings to avoid a performance hit in some environments.\n  if (typeof value == 'string') {\n    return value;\n  }\n  if (isArray(value)) {\n    // Recursively convert values (susceptible to call stack limits).\n    return arrayMap(value, baseToString) + '';\n  }\n  if (isSymbol(value)) {\n    return symbolToString ? symbolToString.call(value) : '';\n  }\n  var result = (value + '');\n  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;\n}\n\nmodule.exports = baseToString;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_baseToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.unary` without support for storing metadata.\n *\n * @private\n * @param {Function} func The function to cap arguments for.\n * @returns {Function} Returns the new capped function.\n */\nfunction baseUnary(func) {\n  return function(value) {\n    return func(value);\n  };\n}\n\nmodule.exports = baseUnary;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_baseUnary.js?");

/***/ }),

/***/ "./node_modules/lodash/_castFunction.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_castFunction.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var identity = __webpack_require__(/*! ./identity */ \"./node_modules/lodash/identity.js\");\n\n/**\n * Casts `value` to `identity` if it's not a function.\n *\n * @private\n * @param {*} value The value to inspect.\n * @returns {Function} Returns cast function.\n */\nfunction castFunction(value) {\n  return typeof value == 'function' ? value : identity;\n}\n\nmodule.exports = castFunction;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_castFunction.js?");

/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isKey = __webpack_require__(/*! ./_isKey */ \"./node_modules/lodash/_isKey.js\"),\n    stringToPath = __webpack_require__(/*! ./_stringToPath */ \"./node_modules/lodash/_stringToPath.js\"),\n    toString = __webpack_require__(/*! ./toString */ \"./node_modules/lodash/toString.js\");\n\n/**\n * Casts `value` to a path array if it's not one.\n *\n * @private\n * @param {*} value The value to inspect.\n * @param {Object} [object] The object to query keys on.\n * @returns {Array} Returns the cast property path array.\n */\nfunction castPath(value, object) {\n  if (isArray(value)) {\n    return value;\n  }\n  return isKey(value, object) ? [value] : stringToPath(toString(value));\n}\n\nmodule.exports = castPath;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_castPath.js?");

/***/ }),

/***/ "./node_modules/lodash/_castSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_castSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseSlice = __webpack_require__(/*! ./_baseSlice */ \"./node_modules/lodash/_baseSlice.js\");\n\n/**\n * Casts `array` to a slice if it's needed.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {number} start The start position.\n * @param {number} [end=array.length] The end position.\n * @returns {Array} Returns the cast slice.\n */\nfunction castSlice(array, start, end) {\n  var length = array.length;\n  end = end === undefined ? length : end;\n  return (!start && end >= length) ? array : baseSlice(array, start, end);\n}\n\nmodule.exports = castSlice;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_castSlice.js?");

/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ \"./node_modules/lodash/_Uint8Array.js\");\n\n/**\n * Creates a clone of `arrayBuffer`.\n *\n * @private\n * @param {ArrayBuffer} arrayBuffer The array buffer to clone.\n * @returns {ArrayBuffer} Returns the cloned array buffer.\n */\nfunction cloneArrayBuffer(arrayBuffer) {\n  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);\n  new Uint8Array(result).set(new Uint8Array(arrayBuffer));\n  return result;\n}\n\nmodule.exports = cloneArrayBuffer;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_cloneArrayBuffer.js?");

/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Detect free variable `exports`. */\nvar freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;\n\n/** Detect free variable `module`. */\nvar freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;\n\n/** Detect the popular CommonJS extension `module.exports`. */\nvar moduleExports = freeModule && freeModule.exports === freeExports;\n\n/** Built-in value references. */\nvar Buffer = moduleExports ? root.Buffer : undefined,\n    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;\n\n/**\n * Creates a clone of  `buffer`.\n *\n * @private\n * @param {Buffer} buffer The buffer to clone.\n * @param {boolean} [isDeep] Specify a deep clone.\n * @returns {Buffer} Returns the cloned buffer.\n */\nfunction cloneBuffer(buffer, isDeep) {\n  if (isDeep) {\n    return buffer.slice();\n  }\n  var length = buffer.length,\n      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);\n\n  buffer.copy(result);\n  return result;\n}\n\nmodule.exports = cloneBuffer;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_cloneBuffer.js?");

/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ \"./node_modules/lodash/_cloneArrayBuffer.js\");\n\n/**\n * Creates a clone of `typedArray`.\n *\n * @private\n * @param {Object} typedArray The typed array to clone.\n * @param {boolean} [isDeep] Specify a deep clone.\n * @returns {Object} Returns the cloned typed array.\n */\nfunction cloneTypedArray(typedArray, isDeep) {\n  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;\n  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);\n}\n\nmodule.exports = cloneTypedArray;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_cloneTypedArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Copies the values of `source` to `array`.\n *\n * @private\n * @param {Array} source The array to copy values from.\n * @param {Array} [array=[]] The array to copy values to.\n * @returns {Array} Returns `array`.\n */\nfunction copyArray(source, array) {\n  var index = -1,\n      length = source.length;\n\n  array || (array = Array(length));\n  while (++index < length) {\n    array[index] = source[index];\n  }\n  return array;\n}\n\nmodule.exports = copyArray;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_copyArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assignValue = __webpack_require__(/*! ./_assignValue */ \"./node_modules/lodash/_assignValue.js\"),\n    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ \"./node_modules/lodash/_baseAssignValue.js\");\n\n/**\n * Copies properties of `source` to `object`.\n *\n * @private\n * @param {Object} source The object to copy properties from.\n * @param {Array} props The property identifiers to copy.\n * @param {Object} [object={}] The object to copy properties to.\n * @param {Function} [customizer] The function to customize copied values.\n * @returns {Object} Returns `object`.\n */\nfunction copyObject(source, props, object, customizer) {\n  var isNew = !object;\n  object || (object = {});\n\n  var index = -1,\n      length = props.length;\n\n  while (++index < length) {\n    var key = props[index];\n\n    var newValue = customizer\n      ? customizer(object[key], source[key], key, object, source)\n      : undefined;\n\n    if (newValue === undefined) {\n      newValue = source[key];\n    }\n    if (isNew) {\n      baseAssignValue(object, key, newValue);\n    } else {\n      assignValue(object, key, newValue);\n    }\n  }\n  return object;\n}\n\nmodule.exports = copyObject;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_copyObject.js?");

/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Used to detect overreaching core-js shims. */\nvar coreJsData = root['__core-js_shared__'];\n\nmodule.exports = coreJsData;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_coreJsData.js?");

/***/ }),

/***/ "./node_modules/lodash/_createAssigner.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createAssigner.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseRest = __webpack_require__(/*! ./_baseRest */ \"./node_modules/lodash/_baseRest.js\"),\n    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ \"./node_modules/lodash/_isIterateeCall.js\");\n\n/**\n * Creates a function like `_.assign`.\n *\n * @private\n * @param {Function} assigner The function to assign values.\n * @returns {Function} Returns the new assigner function.\n */\nfunction createAssigner(assigner) {\n  return baseRest(function(object, sources) {\n    var index = -1,\n        length = sources.length,\n        customizer = length > 1 ? sources[length - 1] : undefined,\n        guard = length > 2 ? sources[2] : undefined;\n\n    customizer = (assigner.length > 3 && typeof customizer == 'function')\n      ? (length--, customizer)\n      : undefined;\n\n    if (guard && isIterateeCall(sources[0], sources[1], guard)) {\n      customizer = length < 3 ? undefined : customizer;\n      length = 1;\n    }\n    object = Object(object);\n    while (++index < length) {\n      var source = sources[index];\n      if (source) {\n        assigner(object, source, index, customizer);\n      }\n    }\n    return object;\n  });\n}\n\nmodule.exports = createAssigner;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_createAssigner.js?");

/***/ }),

/***/ "./node_modules/lodash/_createBaseEach.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createBaseEach.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isArrayLike = __webpack_require__(/*! ./isArrayLike */ \"./node_modules/lodash/isArrayLike.js\");\n\n/**\n * Creates a `baseEach` or `baseEachRight` function.\n *\n * @private\n * @param {Function} eachFunc The function to iterate over a collection.\n * @param {boolean} [fromRight] Specify iterating from right to left.\n * @returns {Function} Returns the new base function.\n */\nfunction createBaseEach(eachFunc, fromRight) {\n  return function(collection, iteratee) {\n    if (collection == null) {\n      return collection;\n    }\n    if (!isArrayLike(collection)) {\n      return eachFunc(collection, iteratee);\n    }\n    var length = collection.length,\n        index = fromRight ? length : -1,\n        iterable = Object(collection);\n\n    while ((fromRight ? index-- : ++index < length)) {\n      if (iteratee(iterable[index], index, iterable) === false) {\n        break;\n      }\n    }\n    return collection;\n  };\n}\n\nmodule.exports = createBaseEach;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_createBaseEach.js?");

/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Creates a base function for methods like `_.forIn` and `_.forOwn`.\n *\n * @private\n * @param {boolean} [fromRight] Specify iterating from right to left.\n * @returns {Function} Returns the new base function.\n */\nfunction createBaseFor(fromRight) {\n  return function(object, iteratee, keysFunc) {\n    var index = -1,\n        iterable = Object(object),\n        props = keysFunc(object),\n        length = props.length;\n\n    while (length--) {\n      var key = props[fromRight ? length : ++index];\n      if (iteratee(iterable[key], key, iterable) === false) {\n        break;\n      }\n    }\n    return object;\n  };\n}\n\nmodule.exports = createBaseFor;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_createBaseFor.js?");

/***/ }),

/***/ "./node_modules/lodash/_createCaseFirst.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_createCaseFirst.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var castSlice = __webpack_require__(/*! ./_castSlice */ \"./node_modules/lodash/_castSlice.js\"),\n    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ \"./node_modules/lodash/_hasUnicode.js\"),\n    stringToArray = __webpack_require__(/*! ./_stringToArray */ \"./node_modules/lodash/_stringToArray.js\"),\n    toString = __webpack_require__(/*! ./toString */ \"./node_modules/lodash/toString.js\");\n\n/**\n * Creates a function like `_.lowerFirst`.\n *\n * @private\n * @param {string} methodName The name of the `String` case method to use.\n * @returns {Function} Returns the new case function.\n */\nfunction createCaseFirst(methodName) {\n  return function(string) {\n    string = toString(string);\n\n    var strSymbols = hasUnicode(string)\n      ? stringToArray(string)\n      : undefined;\n\n    var chr = strSymbols\n      ? strSymbols[0]\n      : string.charAt(0);\n\n    var trailing = strSymbols\n      ? castSlice(strSymbols, 1).join('')\n      : string.slice(1);\n\n    return chr[methodName]() + trailing;\n  };\n}\n\nmodule.exports = createCaseFirst;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_createCaseFirst.js?");

/***/ }),

/***/ "./node_modules/lodash/_createCompounder.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_createCompounder.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayReduce = __webpack_require__(/*! ./_arrayReduce */ \"./node_modules/lodash/_arrayReduce.js\"),\n    deburr = __webpack_require__(/*! ./deburr */ \"./node_modules/lodash/deburr.js\"),\n    words = __webpack_require__(/*! ./words */ \"./node_modules/lodash/words.js\");\n\n/** Used to compose unicode capture groups. */\nvar rsApos = \"['\\u2019]\";\n\n/** Used to match apostrophes. */\nvar reApos = RegExp(rsApos, 'g');\n\n/**\n * Creates a function like `_.camelCase`.\n *\n * @private\n * @param {Function} callback The function to combine each word.\n * @returns {Function} Returns the new compounder function.\n */\nfunction createCompounder(callback) {\n  return function(string) {\n    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');\n  };\n}\n\nmodule.exports = createCompounder;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_createCompounder.js?");

/***/ }),

/***/ "./node_modules/lodash/_deburrLetter.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_deburrLetter.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var basePropertyOf = __webpack_require__(/*! ./_basePropertyOf */ \"./node_modules/lodash/_basePropertyOf.js\");\n\n/** Used to map Latin Unicode letters to basic Latin letters. */\nvar deburredLetters = {\n  // Latin-1 Supplement block.\n  '\\xc0': 'A',  '\\xc1': 'A', '\\xc2': 'A', '\\xc3': 'A', '\\xc4': 'A', '\\xc5': 'A',\n  '\\xe0': 'a',  '\\xe1': 'a', '\\xe2': 'a', '\\xe3': 'a', '\\xe4': 'a', '\\xe5': 'a',\n  '\\xc7': 'C',  '\\xe7': 'c',\n  '\\xd0': 'D',  '\\xf0': 'd',\n  '\\xc8': 'E',  '\\xc9': 'E', '\\xca': 'E', '\\xcb': 'E',\n  '\\xe8': 'e',  '\\xe9': 'e', '\\xea': 'e', '\\xeb': 'e',\n  '\\xcc': 'I',  '\\xcd': 'I', '\\xce': 'I', '\\xcf': 'I',\n  '\\xec': 'i',  '\\xed': 'i', '\\xee': 'i', '\\xef': 'i',\n  '\\xd1': 'N',  '\\xf1': 'n',\n  '\\xd2': 'O',  '\\xd3': 'O', '\\xd4': 'O', '\\xd5': 'O', '\\xd6': 'O', '\\xd8': 'O',\n  '\\xf2': 'o',  '\\xf3': 'o', '\\xf4': 'o', '\\xf5': 'o', '\\xf6': 'o', '\\xf8': 'o',\n  '\\xd9': 'U',  '\\xda': 'U', '\\xdb': 'U', '\\xdc': 'U',\n  '\\xf9': 'u',  '\\xfa': 'u', '\\xfb': 'u', '\\xfc': 'u',\n  '\\xdd': 'Y',  '\\xfd': 'y', '\\xff': 'y',\n  '\\xc6': 'Ae', '\\xe6': 'ae',\n  '\\xde': 'Th', '\\xfe': 'th',\n  '\\xdf': 'ss',\n  // Latin Extended-A block.\n  '\\u0100': 'A',  '\\u0102': 'A', '\\u0104': 'A',\n  '\\u0101': 'a',  '\\u0103': 'a', '\\u0105': 'a',\n  '\\u0106': 'C',  '\\u0108': 'C', '\\u010a': 'C', '\\u010c': 'C',\n  '\\u0107': 'c',  '\\u0109': 'c', '\\u010b': 'c', '\\u010d': 'c',\n  '\\u010e': 'D',  '\\u0110': 'D', '\\u010f': 'd', '\\u0111': 'd',\n  '\\u0112': 'E',  '\\u0114': 'E', '\\u0116': 'E', '\\u0118': 'E', '\\u011a': 'E',\n  '\\u0113': 'e',  '\\u0115': 'e', '\\u0117': 'e', '\\u0119': 'e', '\\u011b': 'e',\n  '\\u011c': 'G',  '\\u011e': 'G', '\\u0120': 'G', '\\u0122': 'G',\n  '\\u011d': 'g',  '\\u011f': 'g', '\\u0121': 'g', '\\u0123': 'g',\n  '\\u0124': 'H',  '\\u0126': 'H', '\\u0125': 'h', '\\u0127': 'h',\n  '\\u0128': 'I',  '\\u012a': 'I', '\\u012c': 'I', '\\u012e': 'I', '\\u0130': 'I',\n  '\\u0129': 'i',  '\\u012b': 'i', '\\u012d': 'i', '\\u012f': 'i', '\\u0131': 'i',\n  '\\u0134': 'J',  '\\u0135': 'j',\n  '\\u0136': 'K',  '\\u0137': 'k', '\\u0138': 'k',\n  '\\u0139': 'L',  '\\u013b': 'L', '\\u013d': 'L', '\\u013f': 'L', '\\u0141': 'L',\n  '\\u013a': 'l',  '\\u013c': 'l', '\\u013e': 'l', '\\u0140': 'l', '\\u0142': 'l',\n  '\\u0143': 'N',  '\\u0145': 'N', '\\u0147': 'N', '\\u014a': 'N',\n  '\\u0144': 'n',  '\\u0146': 'n', '\\u0148': 'n', '\\u014b': 'n',\n  '\\u014c': 'O',  '\\u014e': 'O', '\\u0150': 'O',\n  '\\u014d': 'o',  '\\u014f': 'o', '\\u0151': 'o',\n  '\\u0154': 'R',  '\\u0156': 'R', '\\u0158': 'R',\n  '\\u0155': 'r',  '\\u0157': 'r', '\\u0159': 'r',\n  '\\u015a': 'S',  '\\u015c': 'S', '\\u015e': 'S', '\\u0160': 'S',\n  '\\u015b': 's',  '\\u015d': 's', '\\u015f': 's', '\\u0161': 's',\n  '\\u0162': 'T',  '\\u0164': 'T', '\\u0166': 'T',\n  '\\u0163': 't',  '\\u0165': 't', '\\u0167': 't',\n  '\\u0168': 'U',  '\\u016a': 'U', '\\u016c': 'U', '\\u016e': 'U', '\\u0170': 'U', '\\u0172': 'U',\n  '\\u0169': 'u',  '\\u016b': 'u', '\\u016d': 'u', '\\u016f': 'u', '\\u0171': 'u', '\\u0173': 'u',\n  '\\u0174': 'W',  '\\u0175': 'w',\n  '\\u0176': 'Y',  '\\u0177': 'y', '\\u0178': 'Y',\n  '\\u0179': 'Z',  '\\u017b': 'Z', '\\u017d': 'Z',\n  '\\u017a': 'z',  '\\u017c': 'z', '\\u017e': 'z',\n  '\\u0132': 'IJ', '\\u0133': 'ij',\n  '\\u0152': 'Oe', '\\u0153': 'oe',\n  '\\u0149': \"'n\", '\\u017f': 's'\n};\n\n/**\n * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A\n * letters to basic Latin letters.\n *\n * @private\n * @param {string} letter The matched letter to deburr.\n * @returns {string} Returns the deburred letter.\n */\nvar deburrLetter = basePropertyOf(deburredLetters);\n\nmodule.exports = deburrLetter;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_deburrLetter.js?");

/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\");\n\nvar defineProperty = (function() {\n  try {\n    var func = getNative(Object, 'defineProperty');\n    func({}, '', {});\n    return func;\n  } catch (e) {}\n}());\n\nmodule.exports = defineProperty;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_defineProperty.js?");

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof global == 'object' && global && global.Object === Object && global;\n\nmodule.exports = freeGlobal;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_freeGlobal.js?");

/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isKeyable = __webpack_require__(/*! ./_isKeyable */ \"./node_modules/lodash/_isKeyable.js\");\n\n/**\n * Gets the data for `map`.\n *\n * @private\n * @param {Object} map The map to query.\n * @param {string} key The reference key.\n * @returns {*} Returns the map data.\n */\nfunction getMapData(map, key) {\n  var data = map.__data__;\n  return isKeyable(key)\n    ? data[typeof key == 'string' ? 'string' : 'hash']\n    : data.map;\n}\n\nmodule.exports = getMapData;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_getMapData.js?");

/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ \"./node_modules/lodash/_baseIsNative.js\"),\n    getValue = __webpack_require__(/*! ./_getValue */ \"./node_modules/lodash/_getValue.js\");\n\n/**\n * Gets the native function at `key` of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {string} key The key of the method to get.\n * @returns {*} Returns the function if it's native, else `undefined`.\n */\nfunction getNative(object, key) {\n  var value = getValue(object, key);\n  return baseIsNative(value) ? value : undefined;\n}\n\nmodule.exports = getNative;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_getNative.js?");

/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var overArg = __webpack_require__(/*! ./_overArg */ \"./node_modules/lodash/_overArg.js\");\n\n/** Built-in value references. */\nvar getPrototype = overArg(Object.getPrototypeOf, Object);\n\nmodule.exports = getPrototype;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_getPrototype.js?");

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the raw `toStringTag`.\n */\nfunction getRawTag(value) {\n  var isOwn = hasOwnProperty.call(value, symToStringTag),\n      tag = value[symToStringTag];\n\n  try {\n    value[symToStringTag] = undefined;\n    var unmasked = true;\n  } catch (e) {}\n\n  var result = nativeObjectToString.call(value);\n  if (unmasked) {\n    if (isOwn) {\n      value[symToStringTag] = tag;\n    } else {\n      delete value[symToStringTag];\n    }\n  }\n  return result;\n}\n\nmodule.exports = getRawTag;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_getRawTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Gets the value at `key` of `object`.\n *\n * @private\n * @param {Object} [object] The object to query.\n * @param {string} key The key of the property to get.\n * @returns {*} Returns the property value.\n */\nfunction getValue(object, key) {\n  return object == null ? undefined : object[key];\n}\n\nmodule.exports = getValue;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_getValue.js?");

/***/ }),

/***/ "./node_modules/lodash/_hasUnicode.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hasUnicode.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used to compose unicode character classes. */\nvar rsAstralRange = '\\\\ud800-\\\\udfff',\n    rsComboMarksRange = '\\\\u0300-\\\\u036f',\n    reComboHalfMarksRange = '\\\\ufe20-\\\\ufe2f',\n    rsComboSymbolsRange = '\\\\u20d0-\\\\u20ff',\n    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,\n    rsVarRange = '\\\\ufe0e\\\\ufe0f';\n\n/** Used to compose unicode capture groups. */\nvar rsZWJ = '\\\\u200d';\n\n/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */\nvar reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');\n\n/**\n * Checks if `string` contains Unicode symbols.\n *\n * @private\n * @param {string} string The string to inspect.\n * @returns {boolean} Returns `true` if a symbol is found, else `false`.\n */\nfunction hasUnicode(string) {\n  return reHasUnicode.test(string);\n}\n\nmodule.exports = hasUnicode;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_hasUnicode.js?");

/***/ }),

/***/ "./node_modules/lodash/_hasUnicodeWord.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_hasUnicodeWord.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used to detect strings that need a more robust regexp to match words. */\nvar reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;\n\n/**\n * Checks if `string` contains a word composed of Unicode symbols.\n *\n * @private\n * @param {string} string The string to inspect.\n * @returns {boolean} Returns `true` if a word is found, else `false`.\n */\nfunction hasUnicodeWord(string) {\n  return reHasUnicodeWord.test(string);\n}\n\nmodule.exports = hasUnicodeWord;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_hasUnicodeWord.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/**\n * Removes all key-value entries from the hash.\n *\n * @private\n * @name clear\n * @memberOf Hash\n */\nfunction hashClear() {\n  this.__data__ = nativeCreate ? nativeCreate(null) : {};\n  this.size = 0;\n}\n\nmodule.exports = hashClear;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_hashClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Removes `key` and its value from the hash.\n *\n * @private\n * @name delete\n * @memberOf Hash\n * @param {Object} hash The hash to modify.\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction hashDelete(key) {\n  var result = this.has(key) && delete this.__data__[key];\n  this.size -= result ? 1 : 0;\n  return result;\n}\n\nmodule.exports = hashDelete;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_hashDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/** Used to stand-in for `undefined` hash values. */\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Gets the hash value for `key`.\n *\n * @private\n * @name get\n * @memberOf Hash\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction hashGet(key) {\n  var data = this.__data__;\n  if (nativeCreate) {\n    var result = data[key];\n    return result === HASH_UNDEFINED ? undefined : result;\n  }\n  return hasOwnProperty.call(data, key) ? data[key] : undefined;\n}\n\nmodule.exports = hashGet;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_hashGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Checks if a hash value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf Hash\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction hashHas(key) {\n  var data = this.__data__;\n  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);\n}\n\nmodule.exports = hashHas;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_hashHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/** Used to stand-in for `undefined` hash values. */\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n\n/**\n * Sets the hash `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf Hash\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the hash instance.\n */\nfunction hashSet(key, value) {\n  var data = this.__data__;\n  this.size += this.has(key) ? 0 : 1;\n  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;\n  return this;\n}\n\nmodule.exports = hashSet;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_hashSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseCreate = __webpack_require__(/*! ./_baseCreate */ \"./node_modules/lodash/_baseCreate.js\"),\n    getPrototype = __webpack_require__(/*! ./_getPrototype */ \"./node_modules/lodash/_getPrototype.js\"),\n    isPrototype = __webpack_require__(/*! ./_isPrototype */ \"./node_modules/lodash/_isPrototype.js\");\n\n/**\n * Initializes an object clone.\n *\n * @private\n * @param {Object} object The object to clone.\n * @returns {Object} Returns the initialized clone.\n */\nfunction initCloneObject(object) {\n  return (typeof object.constructor == 'function' && !isPrototype(object))\n    ? baseCreate(getPrototype(object))\n    : {};\n}\n\nmodule.exports = initCloneObject;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_initCloneObject.js?");

/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used as references for various `Number` constants. */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/** Used to detect unsigned integer values. */\nvar reIsUint = /^(?:0|[1-9]\\d*)$/;\n\n/**\n * Checks if `value` is a valid array-like index.\n *\n * @private\n * @param {*} value The value to check.\n * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.\n * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.\n */\nfunction isIndex(value, length) {\n  var type = typeof value;\n  length = length == null ? MAX_SAFE_INTEGER : length;\n\n  return !!length &&\n    (type == 'number' ||\n      (type != 'symbol' && reIsUint.test(value))) &&\n        (value > -1 && value % 1 == 0 && value < length);\n}\n\nmodule.exports = isIndex;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_isIndex.js?");

/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_isIterateeCall.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var eq = __webpack_require__(/*! ./eq */ \"./node_modules/lodash/eq.js\"),\n    isArrayLike = __webpack_require__(/*! ./isArrayLike */ \"./node_modules/lodash/isArrayLike.js\"),\n    isIndex = __webpack_require__(/*! ./_isIndex */ \"./node_modules/lodash/_isIndex.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n\n/**\n * Checks if the given arguments are from an iteratee call.\n *\n * @private\n * @param {*} value The potential iteratee value argument.\n * @param {*} index The potential iteratee index or key argument.\n * @param {*} object The potential iteratee object argument.\n * @returns {boolean} Returns `true` if the arguments are from an iteratee call,\n *  else `false`.\n */\nfunction isIterateeCall(value, index, object) {\n  if (!isObject(object)) {\n    return false;\n  }\n  var type = typeof index;\n  if (type == 'number'\n        ? (isArrayLike(object) && isIndex(index, object.length))\n        : (type == 'string' && index in object)\n      ) {\n    return eq(object[index], value);\n  }\n  return false;\n}\n\nmodule.exports = isIterateeCall;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_isIterateeCall.js?");

/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used to match property names within property paths. */\nvar reIsDeepProp = /\\.|\\[(?:[^[\\]]*|([\"'])(?:(?!\\1)[^\\\\]|\\\\.)*?\\1)\\]/,\n    reIsPlainProp = /^\\w*$/;\n\n/**\n * Checks if `value` is a property name and not a property path.\n *\n * @private\n * @param {*} value The value to check.\n * @param {Object} [object] The object to query keys on.\n * @returns {boolean} Returns `true` if `value` is a property name, else `false`.\n */\nfunction isKey(value, object) {\n  if (isArray(value)) {\n    return false;\n  }\n  var type = typeof value;\n  if (type == 'number' || type == 'symbol' || type == 'boolean' ||\n      value == null || isSymbol(value)) {\n    return true;\n  }\n  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||\n    (object != null && value in Object(object));\n}\n\nmodule.exports = isKey;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_isKey.js?");

/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is suitable for use as unique object key.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is suitable, else `false`.\n */\nfunction isKeyable(value) {\n  var type = typeof value;\n  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')\n    ? (value !== '__proto__')\n    : (value === null);\n}\n\nmodule.exports = isKeyable;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_isKeyable.js?");

/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var coreJsData = __webpack_require__(/*! ./_coreJsData */ \"./node_modules/lodash/_coreJsData.js\");\n\n/** Used to detect methods masquerading as native. */\nvar maskSrcKey = (function() {\n  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');\n  return uid ? ('Symbol(src)_1.' + uid) : '';\n}());\n\n/**\n * Checks if `func` has its source masked.\n *\n * @private\n * @param {Function} func The function to check.\n * @returns {boolean} Returns `true` if `func` is masked, else `false`.\n */\nfunction isMasked(func) {\n  return !!maskSrcKey && (maskSrcKey in func);\n}\n\nmodule.exports = isMasked;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_isMasked.js?");

/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Checks if `value` is likely a prototype object.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.\n */\nfunction isPrototype(value) {\n  var Ctor = value && value.constructor,\n      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;\n\n  return value === proto;\n}\n\nmodule.exports = isPrototype;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_isPrototype.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Removes all key-value entries from the list cache.\n *\n * @private\n * @name clear\n * @memberOf ListCache\n */\nfunction listCacheClear() {\n  this.__data__ = [];\n  this.size = 0;\n}\n\nmodule.exports = listCacheClear;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_listCacheClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/** Used for built-in method references. */\nvar arrayProto = Array.prototype;\n\n/** Built-in value references. */\nvar splice = arrayProto.splice;\n\n/**\n * Removes `key` and its value from the list cache.\n *\n * @private\n * @name delete\n * @memberOf ListCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction listCacheDelete(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    return false;\n  }\n  var lastIndex = data.length - 1;\n  if (index == lastIndex) {\n    data.pop();\n  } else {\n    splice.call(data, index, 1);\n  }\n  --this.size;\n  return true;\n}\n\nmodule.exports = listCacheDelete;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_listCacheDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Gets the list cache value for `key`.\n *\n * @private\n * @name get\n * @memberOf ListCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction listCacheGet(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  return index < 0 ? undefined : data[index][1];\n}\n\nmodule.exports = listCacheGet;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_listCacheGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Checks if a list cache value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf ListCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction listCacheHas(key) {\n  return assocIndexOf(this.__data__, key) > -1;\n}\n\nmodule.exports = listCacheHas;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_listCacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Sets the list cache `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf ListCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the list cache instance.\n */\nfunction listCacheSet(key, value) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    ++this.size;\n    data.push([key, value]);\n  } else {\n    data[index][1] = value;\n  }\n  return this;\n}\n\nmodule.exports = listCacheSet;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_listCacheSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Hash = __webpack_require__(/*! ./_Hash */ \"./node_modules/lodash/_Hash.js\"),\n    ListCache = __webpack_require__(/*! ./_ListCache */ \"./node_modules/lodash/_ListCache.js\"),\n    Map = __webpack_require__(/*! ./_Map */ \"./node_modules/lodash/_Map.js\");\n\n/**\n * Removes all key-value entries from the map.\n *\n * @private\n * @name clear\n * @memberOf MapCache\n */\nfunction mapCacheClear() {\n  this.size = 0;\n  this.__data__ = {\n    'hash': new Hash,\n    'map': new (Map || ListCache),\n    'string': new Hash\n  };\n}\n\nmodule.exports = mapCacheClear;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_mapCacheClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Removes `key` and its value from the map.\n *\n * @private\n * @name delete\n * @memberOf MapCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction mapCacheDelete(key) {\n  var result = getMapData(this, key)['delete'](key);\n  this.size -= result ? 1 : 0;\n  return result;\n}\n\nmodule.exports = mapCacheDelete;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_mapCacheDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Gets the map value for `key`.\n *\n * @private\n * @name get\n * @memberOf MapCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction mapCacheGet(key) {\n  return getMapData(this, key).get(key);\n}\n\nmodule.exports = mapCacheGet;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_mapCacheGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Checks if a map value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf MapCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction mapCacheHas(key) {\n  return getMapData(this, key).has(key);\n}\n\nmodule.exports = mapCacheHas;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_mapCacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Sets the map `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf MapCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the map cache instance.\n */\nfunction mapCacheSet(key, value) {\n  var data = getMapData(this, key),\n      size = data.size;\n\n  data.set(key, value);\n  this.size += data.size == size ? 0 : 1;\n  return this;\n}\n\nmodule.exports = mapCacheSet;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_mapCacheSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var memoize = __webpack_require__(/*! ./memoize */ \"./node_modules/lodash/memoize.js\");\n\n/** Used as the maximum memoize cache size. */\nvar MAX_MEMOIZE_SIZE = 500;\n\n/**\n * A specialized version of `_.memoize` which clears the memoized function's\n * cache when it exceeds `MAX_MEMOIZE_SIZE`.\n *\n * @private\n * @param {Function} func The function to have its output memoized.\n * @returns {Function} Returns the new memoized function.\n */\nfunction memoizeCapped(func) {\n  var result = memoize(func, function(key) {\n    if (cache.size === MAX_MEMOIZE_SIZE) {\n      cache.clear();\n    }\n    return key;\n  });\n\n  var cache = result.cache;\n  return result;\n}\n\nmodule.exports = memoizeCapped;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_memoizeCapped.js?");

/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\");\n\n/* Built-in method references that are verified to be native. */\nvar nativeCreate = getNative(Object, 'create');\n\nmodule.exports = nativeCreate;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_nativeCreate.js?");

/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var overArg = __webpack_require__(/*! ./_overArg */ \"./node_modules/lodash/_overArg.js\");\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeKeys = overArg(Object.keys, Object);\n\nmodule.exports = nativeKeys;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_nativeKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This function is like\n * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)\n * except that it includes inherited enumerable properties.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n */\nfunction nativeKeysIn(object) {\n  var result = [];\n  if (object != null) {\n    for (var key in Object(object)) {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\nmodule.exports = nativeKeysIn;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_nativeKeysIn.js?");

/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `exports`. */\nvar freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;\n\n/** Detect free variable `module`. */\nvar freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;\n\n/** Detect the popular CommonJS extension `module.exports`. */\nvar moduleExports = freeModule && freeModule.exports === freeExports;\n\n/** Detect free variable `process` from Node.js. */\nvar freeProcess = moduleExports && freeGlobal.process;\n\n/** Used to access faster Node.js helpers. */\nvar nodeUtil = (function() {\n  try {\n    // Use `util.types` for Node.js 10+.\n    var types = freeModule && freeModule.require && freeModule.require('util').types;\n\n    if (types) {\n      return types;\n    }\n\n    // Legacy `process.binding('util')` for Node.js < 10.\n    return freeProcess && freeProcess.binding && freeProcess.binding('util');\n  } catch (e) {}\n}());\n\nmodule.exports = nodeUtil;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_nodeUtil.js?");

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/**\n * Converts `value` to a string using `Object.prototype.toString`.\n *\n * @private\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n */\nfunction objectToString(value) {\n  return nativeObjectToString.call(value);\n}\n\nmodule.exports = objectToString;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_objectToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Creates a unary function that invokes `func` with its argument transformed.\n *\n * @private\n * @param {Function} func The function to wrap.\n * @param {Function} transform The argument transform.\n * @returns {Function} Returns the new function.\n */\nfunction overArg(func, transform) {\n  return function(arg) {\n    return func(transform(arg));\n  };\n}\n\nmodule.exports = overArg;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_overArg.js?");

/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var apply = __webpack_require__(/*! ./_apply */ \"./node_modules/lodash/_apply.js\");\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeMax = Math.max;\n\n/**\n * A specialized version of `baseRest` which transforms the rest array.\n *\n * @private\n * @param {Function} func The function to apply a rest parameter to.\n * @param {number} [start=func.length-1] The start position of the rest parameter.\n * @param {Function} transform The rest array transform.\n * @returns {Function} Returns the new function.\n */\nfunction overRest(func, start, transform) {\n  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);\n  return function() {\n    var args = arguments,\n        index = -1,\n        length = nativeMax(args.length - start, 0),\n        array = Array(length);\n\n    while (++index < length) {\n      array[index] = args[start + index];\n    }\n    index = -1;\n    var otherArgs = Array(start + 1);\n    while (++index < start) {\n      otherArgs[index] = args[index];\n    }\n    otherArgs[start] = transform(array);\n    return apply(func, this, otherArgs);\n  };\n}\n\nmodule.exports = overRest;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_overRest.js?");

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\nmodule.exports = root;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_root.js?");

/***/ }),

/***/ "./node_modules/lodash/_safeGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_safeGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Gets the value at `key`, unless `key` is \"__proto__\".\n *\n * @private\n * @param {Object} object The object to query.\n * @param {string} key The key of the property to get.\n * @returns {*} Returns the property value.\n */\nfunction safeGet(object, key) {\n  return key == '__proto__'\n    ? undefined\n    : object[key];\n}\n\nmodule.exports = safeGet;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_safeGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ \"./node_modules/lodash/_baseSetToString.js\"),\n    shortOut = __webpack_require__(/*! ./_shortOut */ \"./node_modules/lodash/_shortOut.js\");\n\n/**\n * Sets the `toString` method of `func` to return `string`.\n *\n * @private\n * @param {Function} func The function to modify.\n * @param {Function} string The `toString` result.\n * @returns {Function} Returns `func`.\n */\nvar setToString = shortOut(baseSetToString);\n\nmodule.exports = setToString;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_setToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used to detect hot functions by number of calls within a span of milliseconds. */\nvar HOT_COUNT = 800,\n    HOT_SPAN = 16;\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeNow = Date.now;\n\n/**\n * Creates a function that'll short out and invoke `identity` instead\n * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`\n * milliseconds.\n *\n * @private\n * @param {Function} func The function to restrict.\n * @returns {Function} Returns the new shortable function.\n */\nfunction shortOut(func) {\n  var count = 0,\n      lastCalled = 0;\n\n  return function() {\n    var stamp = nativeNow(),\n        remaining = HOT_SPAN - (stamp - lastCalled);\n\n    lastCalled = stamp;\n    if (remaining > 0) {\n      if (++count >= HOT_COUNT) {\n        return arguments[0];\n      }\n    } else {\n      count = 0;\n    }\n    return func.apply(undefined, arguments);\n  };\n}\n\nmodule.exports = shortOut;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_shortOut.js?");

/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ListCache = __webpack_require__(/*! ./_ListCache */ \"./node_modules/lodash/_ListCache.js\");\n\n/**\n * Removes all key-value entries from the stack.\n *\n * @private\n * @name clear\n * @memberOf Stack\n */\nfunction stackClear() {\n  this.__data__ = new ListCache;\n  this.size = 0;\n}\n\nmodule.exports = stackClear;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_stackClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Removes `key` and its value from the stack.\n *\n * @private\n * @name delete\n * @memberOf Stack\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction stackDelete(key) {\n  var data = this.__data__,\n      result = data['delete'](key);\n\n  this.size = data.size;\n  return result;\n}\n\nmodule.exports = stackDelete;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_stackDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Gets the stack value for `key`.\n *\n * @private\n * @name get\n * @memberOf Stack\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction stackGet(key) {\n  return this.__data__.get(key);\n}\n\nmodule.exports = stackGet;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_stackGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if a stack value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf Stack\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction stackHas(key) {\n  return this.__data__.has(key);\n}\n\nmodule.exports = stackHas;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_stackHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ListCache = __webpack_require__(/*! ./_ListCache */ \"./node_modules/lodash/_ListCache.js\"),\n    Map = __webpack_require__(/*! ./_Map */ \"./node_modules/lodash/_Map.js\"),\n    MapCache = __webpack_require__(/*! ./_MapCache */ \"./node_modules/lodash/_MapCache.js\");\n\n/** Used as the size to enable large array optimizations. */\nvar LARGE_ARRAY_SIZE = 200;\n\n/**\n * Sets the stack `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf Stack\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the stack cache instance.\n */\nfunction stackSet(key, value) {\n  var data = this.__data__;\n  if (data instanceof ListCache) {\n    var pairs = data.__data__;\n    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {\n      pairs.push([key, value]);\n      this.size = ++data.size;\n      return this;\n    }\n    data = this.__data__ = new MapCache(pairs);\n  }\n  data.set(key, value);\n  this.size = data.size;\n  return this;\n}\n\nmodule.exports = stackSet;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_stackSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_stringToArray.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_stringToArray.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var asciiToArray = __webpack_require__(/*! ./_asciiToArray */ \"./node_modules/lodash/_asciiToArray.js\"),\n    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ \"./node_modules/lodash/_hasUnicode.js\"),\n    unicodeToArray = __webpack_require__(/*! ./_unicodeToArray */ \"./node_modules/lodash/_unicodeToArray.js\");\n\n/**\n * Converts `string` to an array.\n *\n * @private\n * @param {string} string The string to convert.\n * @returns {Array} Returns the converted array.\n */\nfunction stringToArray(string) {\n  return hasUnicode(string)\n    ? unicodeToArray(string)\n    : asciiToArray(string);\n}\n\nmodule.exports = stringToArray;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_stringToArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ \"./node_modules/lodash/_memoizeCapped.js\");\n\n/** Used to match property names within property paths. */\nvar rePropName = /[^.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))/g;\n\n/** Used to match backslashes in property paths. */\nvar reEscapeChar = /\\\\(\\\\)?/g;\n\n/**\n * Converts `string` to a property path array.\n *\n * @private\n * @param {string} string The string to convert.\n * @returns {Array} Returns the property path array.\n */\nvar stringToPath = memoizeCapped(function(string) {\n  var result = [];\n  if (string.charCodeAt(0) === 46 /* . */) {\n    result.push('');\n  }\n  string.replace(rePropName, function(match, number, quote, subString) {\n    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));\n  });\n  return result;\n});\n\nmodule.exports = stringToPath;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_stringToPath.js?");

/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar INFINITY = 1 / 0;\n\n/**\n * Converts `value` to a string key if it's not a string or symbol.\n *\n * @private\n * @param {*} value The value to inspect.\n * @returns {string|symbol} Returns the key.\n */\nfunction toKey(value) {\n  if (typeof value == 'string' || isSymbol(value)) {\n    return value;\n  }\n  var result = (value + '');\n  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;\n}\n\nmodule.exports = toKey;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_toKey.js?");

/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar funcProto = Function.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/**\n * Converts `func` to its source code.\n *\n * @private\n * @param {Function} func The function to convert.\n * @returns {string} Returns the source code.\n */\nfunction toSource(func) {\n  if (func != null) {\n    try {\n      return funcToString.call(func);\n    } catch (e) {}\n    try {\n      return (func + '');\n    } catch (e) {}\n  }\n  return '';\n}\n\nmodule.exports = toSource;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_toSource.js?");

/***/ }),

/***/ "./node_modules/lodash/_unicodeToArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_unicodeToArray.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used to compose unicode character classes. */\nvar rsAstralRange = '\\\\ud800-\\\\udfff',\n    rsComboMarksRange = '\\\\u0300-\\\\u036f',\n    reComboHalfMarksRange = '\\\\ufe20-\\\\ufe2f',\n    rsComboSymbolsRange = '\\\\u20d0-\\\\u20ff',\n    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,\n    rsVarRange = '\\\\ufe0e\\\\ufe0f';\n\n/** Used to compose unicode capture groups. */\nvar rsAstral = '[' + rsAstralRange + ']',\n    rsCombo = '[' + rsComboRange + ']',\n    rsFitz = '\\\\ud83c[\\\\udffb-\\\\udfff]',\n    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',\n    rsNonAstral = '[^' + rsAstralRange + ']',\n    rsRegional = '(?:\\\\ud83c[\\\\udde6-\\\\uddff]){2}',\n    rsSurrPair = '[\\\\ud800-\\\\udbff][\\\\udc00-\\\\udfff]',\n    rsZWJ = '\\\\u200d';\n\n/** Used to compose unicode regexes. */\nvar reOptMod = rsModifier + '?',\n    rsOptVar = '[' + rsVarRange + ']?',\n    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',\n    rsSeq = rsOptVar + reOptMod + rsOptJoin,\n    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';\n\n/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */\nvar reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');\n\n/**\n * Converts a Unicode `string` to an array.\n *\n * @private\n * @param {string} string The string to convert.\n * @returns {Array} Returns the converted array.\n */\nfunction unicodeToArray(string) {\n  return string.match(reUnicode) || [];\n}\n\nmodule.exports = unicodeToArray;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_unicodeToArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_unicodeWords.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_unicodeWords.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used to compose unicode character classes. */\nvar rsAstralRange = '\\\\ud800-\\\\udfff',\n    rsComboMarksRange = '\\\\u0300-\\\\u036f',\n    reComboHalfMarksRange = '\\\\ufe20-\\\\ufe2f',\n    rsComboSymbolsRange = '\\\\u20d0-\\\\u20ff',\n    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,\n    rsDingbatRange = '\\\\u2700-\\\\u27bf',\n    rsLowerRange = 'a-z\\\\xdf-\\\\xf6\\\\xf8-\\\\xff',\n    rsMathOpRange = '\\\\xac\\\\xb1\\\\xd7\\\\xf7',\n    rsNonCharRange = '\\\\x00-\\\\x2f\\\\x3a-\\\\x40\\\\x5b-\\\\x60\\\\x7b-\\\\xbf',\n    rsPunctuationRange = '\\\\u2000-\\\\u206f',\n    rsSpaceRange = ' \\\\t\\\\x0b\\\\f\\\\xa0\\\\ufeff\\\\n\\\\r\\\\u2028\\\\u2029\\\\u1680\\\\u180e\\\\u2000\\\\u2001\\\\u2002\\\\u2003\\\\u2004\\\\u2005\\\\u2006\\\\u2007\\\\u2008\\\\u2009\\\\u200a\\\\u202f\\\\u205f\\\\u3000',\n    rsUpperRange = 'A-Z\\\\xc0-\\\\xd6\\\\xd8-\\\\xde',\n    rsVarRange = '\\\\ufe0e\\\\ufe0f',\n    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;\n\n/** Used to compose unicode capture groups. */\nvar rsApos = \"['\\u2019]\",\n    rsBreak = '[' + rsBreakRange + ']',\n    rsCombo = '[' + rsComboRange + ']',\n    rsDigits = '\\\\d+',\n    rsDingbat = '[' + rsDingbatRange + ']',\n    rsLower = '[' + rsLowerRange + ']',\n    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',\n    rsFitz = '\\\\ud83c[\\\\udffb-\\\\udfff]',\n    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',\n    rsNonAstral = '[^' + rsAstralRange + ']',\n    rsRegional = '(?:\\\\ud83c[\\\\udde6-\\\\uddff]){2}',\n    rsSurrPair = '[\\\\ud800-\\\\udbff][\\\\udc00-\\\\udfff]',\n    rsUpper = '[' + rsUpperRange + ']',\n    rsZWJ = '\\\\u200d';\n\n/** Used to compose unicode regexes. */\nvar rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',\n    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',\n    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',\n    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',\n    reOptMod = rsModifier + '?',\n    rsOptVar = '[' + rsVarRange + ']?',\n    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',\n    rsOrdLower = '\\\\d*(?:1st|2nd|3rd|(?![123])\\\\dth)(?=\\\\b|[A-Z_])',\n    rsOrdUpper = '\\\\d*(?:1ST|2ND|3RD|(?![123])\\\\dTH)(?=\\\\b|[a-z_])',\n    rsSeq = rsOptVar + reOptMod + rsOptJoin,\n    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;\n\n/** Used to match complex or compound words. */\nvar reUnicodeWord = RegExp([\n  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',\n  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',\n  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,\n  rsUpper + '+' + rsOptContrUpper,\n  rsOrdUpper,\n  rsOrdLower,\n  rsDigits,\n  rsEmoji\n].join('|'), 'g');\n\n/**\n * Splits a Unicode `string` into an array of its words.\n *\n * @private\n * @param {string} The string to inspect.\n * @returns {Array} Returns the words of `string`.\n */\nfunction unicodeWords(string) {\n  return string.match(reUnicodeWord) || [];\n}\n\nmodule.exports = unicodeWords;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/_unicodeWords.js?");

/***/ }),

/***/ "./node_modules/lodash/assign.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/assign.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assignValue = __webpack_require__(/*! ./_assignValue */ \"./node_modules/lodash/_assignValue.js\"),\n    copyObject = __webpack_require__(/*! ./_copyObject */ \"./node_modules/lodash/_copyObject.js\"),\n    createAssigner = __webpack_require__(/*! ./_createAssigner */ \"./node_modules/lodash/_createAssigner.js\"),\n    isArrayLike = __webpack_require__(/*! ./isArrayLike */ \"./node_modules/lodash/isArrayLike.js\"),\n    isPrototype = __webpack_require__(/*! ./_isPrototype */ \"./node_modules/lodash/_isPrototype.js\"),\n    keys = __webpack_require__(/*! ./keys */ \"./node_modules/lodash/keys.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Assigns own enumerable string keyed properties of source objects to the\n * destination object. Source objects are applied from left to right.\n * Subsequent sources overwrite property assignments of previous sources.\n *\n * **Note:** This method mutates `object` and is loosely based on\n * [`Object.assign`](https://mdn.io/Object/assign).\n *\n * @static\n * @memberOf _\n * @since 0.10.0\n * @category Object\n * @param {Object} object The destination object.\n * @param {...Object} [sources] The source objects.\n * @returns {Object} Returns `object`.\n * @see _.assignIn\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n * }\n *\n * function Bar() {\n *   this.c = 3;\n * }\n *\n * Foo.prototype.b = 2;\n * Bar.prototype.d = 4;\n *\n * _.assign({ 'a': 0 }, new Foo, new Bar);\n * // => { 'a': 1, 'c': 3 }\n */\nvar assign = createAssigner(function(object, source) {\n  if (isPrototype(source) || isArrayLike(source)) {\n    copyObject(source, keys(source), object);\n    return;\n  }\n  for (var key in source) {\n    if (hasOwnProperty.call(source, key)) {\n      assignValue(object, key, source[key]);\n    }\n  }\n});\n\nmodule.exports = assign;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/assign.js?");

/***/ }),

/***/ "./node_modules/lodash/clamp.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/clamp.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseClamp = __webpack_require__(/*! ./_baseClamp */ \"./node_modules/lodash/_baseClamp.js\"),\n    toNumber = __webpack_require__(/*! ./toNumber */ \"./node_modules/lodash/toNumber.js\");\n\n/**\n * Clamps `number` within the inclusive `lower` and `upper` bounds.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Number\n * @param {number} number The number to clamp.\n * @param {number} [lower] The lower bound.\n * @param {number} upper The upper bound.\n * @returns {number} Returns the clamped number.\n * @example\n *\n * _.clamp(-10, -5, 5);\n * // => -5\n *\n * _.clamp(10, -5, 5);\n * // => 5\n */\nfunction clamp(number, lower, upper) {\n  if (upper === undefined) {\n    upper = lower;\n    lower = undefined;\n  }\n  if (upper !== undefined) {\n    upper = toNumber(upper);\n    upper = upper === upper ? upper : 0;\n  }\n  if (lower !== undefined) {\n    lower = toNumber(lower);\n    lower = lower === lower ? lower : 0;\n  }\n  return baseClamp(toNumber(number), lower, upper);\n}\n\nmodule.exports = clamp;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/clamp.js?");

/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Creates a function that returns `value`.\n *\n * @static\n * @memberOf _\n * @since 2.4.0\n * @category Util\n * @param {*} value The value to return from the new function.\n * @returns {Function} Returns the new constant function.\n * @example\n *\n * var objects = _.times(2, _.constant({ 'a': 1 }));\n *\n * console.log(objects);\n * // => [{ 'a': 1 }, { 'a': 1 }]\n *\n * console.log(objects[0] === objects[1]);\n * // => true\n */\nfunction constant(value) {\n  return function() {\n    return value;\n  };\n}\n\nmodule.exports = constant;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/constant.js?");

/***/ }),

/***/ "./node_modules/lodash/deburr.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/deburr.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var deburrLetter = __webpack_require__(/*! ./_deburrLetter */ \"./node_modules/lodash/_deburrLetter.js\"),\n    toString = __webpack_require__(/*! ./toString */ \"./node_modules/lodash/toString.js\");\n\n/** Used to match Latin Unicode letters (excluding mathematical operators). */\nvar reLatin = /[\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\xff\\u0100-\\u017f]/g;\n\n/** Used to compose unicode character classes. */\nvar rsComboMarksRange = '\\\\u0300-\\\\u036f',\n    reComboHalfMarksRange = '\\\\ufe20-\\\\ufe2f',\n    rsComboSymbolsRange = '\\\\u20d0-\\\\u20ff',\n    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;\n\n/** Used to compose unicode capture groups. */\nvar rsCombo = '[' + rsComboRange + ']';\n\n/**\n * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and\n * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).\n */\nvar reComboMark = RegExp(rsCombo, 'g');\n\n/**\n * Deburrs `string` by converting\n * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)\n * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)\n * letters to basic Latin letters and removing\n * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category String\n * @param {string} [string=''] The string to deburr.\n * @returns {string} Returns the deburred string.\n * @example\n *\n * _.deburr('déjà vu');\n * // => 'deja vu'\n */\nfunction deburr(string) {\n  string = toString(string);\n  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');\n}\n\nmodule.exports = deburr;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/deburr.js?");

/***/ }),

/***/ "./node_modules/lodash/each.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/each.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./forEach */ \"./node_modules/lodash/forEach.js\");\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/each.js?");

/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Performs a\n * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * comparison between two values to determine if they are equivalent.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to compare.\n * @param {*} other The other value to compare.\n * @returns {boolean} Returns `true` if the values are equivalent, else `false`.\n * @example\n *\n * var object = { 'a': 1 };\n * var other = { 'a': 1 };\n *\n * _.eq(object, object);\n * // => true\n *\n * _.eq(object, other);\n * // => false\n *\n * _.eq('a', 'a');\n * // => true\n *\n * _.eq('a', Object('a'));\n * // => false\n *\n * _.eq(NaN, NaN);\n * // => true\n */\nfunction eq(value, other) {\n  return value === other || (value !== value && other !== other);\n}\n\nmodule.exports = eq;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/eq.js?");

/***/ }),

/***/ "./node_modules/lodash/forEach.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/forEach.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayEach = __webpack_require__(/*! ./_arrayEach */ \"./node_modules/lodash/_arrayEach.js\"),\n    baseEach = __webpack_require__(/*! ./_baseEach */ \"./node_modules/lodash/_baseEach.js\"),\n    castFunction = __webpack_require__(/*! ./_castFunction */ \"./node_modules/lodash/_castFunction.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\");\n\n/**\n * Iterates over elements of `collection` and invokes `iteratee` for each element.\n * The iteratee is invoked with three arguments: (value, index|key, collection).\n * Iteratee functions may exit iteration early by explicitly returning `false`.\n *\n * **Note:** As with other \"Collections\" methods, objects with a \"length\"\n * property are iterated like arrays. To avoid this behavior use `_.forIn`\n * or `_.forOwn` for object iteration.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @alias each\n * @category Collection\n * @param {Array|Object} collection The collection to iterate over.\n * @param {Function} [iteratee=_.identity] The function invoked per iteration.\n * @returns {Array|Object} Returns `collection`.\n * @see _.forEachRight\n * @example\n *\n * _.forEach([1, 2], function(value) {\n *   console.log(value);\n * });\n * // => Logs `1` then `2`.\n *\n * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {\n *   console.log(key);\n * });\n * // => Logs 'a' then 'b' (iteration order is not guaranteed).\n */\nfunction forEach(collection, iteratee) {\n  var func = isArray(collection) ? arrayEach : baseEach;\n  return func(collection, castFunction(iteratee));\n}\n\nmodule.exports = forEach;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/forEach.js?");

/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGet = __webpack_require__(/*! ./_baseGet */ \"./node_modules/lodash/_baseGet.js\");\n\n/**\n * Gets the value at `path` of `object`. If the resolved value is\n * `undefined`, the `defaultValue` is returned in its place.\n *\n * @static\n * @memberOf _\n * @since 3.7.0\n * @category Object\n * @param {Object} object The object to query.\n * @param {Array|string} path The path of the property to get.\n * @param {*} [defaultValue] The value returned for `undefined` resolved values.\n * @returns {*} Returns the resolved value.\n * @example\n *\n * var object = { 'a': [{ 'b': { 'c': 3 } }] };\n *\n * _.get(object, 'a[0].b.c');\n * // => 3\n *\n * _.get(object, ['a', '0', 'b', 'c']);\n * // => 3\n *\n * _.get(object, 'a.b.c', 'default');\n * // => 'default'\n */\nfunction get(object, path, defaultValue) {\n  var result = object == null ? undefined : baseGet(object, path);\n  return result === undefined ? defaultValue : result;\n}\n\nmodule.exports = get;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/get.js?");

/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This method returns the first argument it receives.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Util\n * @param {*} value Any value.\n * @returns {*} Returns `value`.\n * @example\n *\n * var object = { 'a': 1 };\n *\n * console.log(_.identity(object) === object);\n * // => true\n */\nfunction identity(value) {\n  return value;\n}\n\nmodule.exports = identity;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/identity.js?");

/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ \"./node_modules/lodash/_baseIsArguments.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Built-in value references. */\nvar propertyIsEnumerable = objectProto.propertyIsEnumerable;\n\n/**\n * Checks if `value` is likely an `arguments` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an `arguments` object,\n *  else `false`.\n * @example\n *\n * _.isArguments(function() { return arguments; }());\n * // => true\n *\n * _.isArguments([1, 2, 3]);\n * // => false\n */\nvar isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {\n  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&\n    !propertyIsEnumerable.call(value, 'callee');\n};\n\nmodule.exports = isArguments;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/isArguments.js?");

/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is classified as an `Array` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array, else `false`.\n * @example\n *\n * _.isArray([1, 2, 3]);\n * // => true\n *\n * _.isArray(document.body.children);\n * // => false\n *\n * _.isArray('abc');\n * // => false\n *\n * _.isArray(_.noop);\n * // => false\n */\nvar isArray = Array.isArray;\n\nmodule.exports = isArray;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/isArray.js?");

/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isFunction = __webpack_require__(/*! ./isFunction */ \"./node_modules/lodash/isFunction.js\"),\n    isLength = __webpack_require__(/*! ./isLength */ \"./node_modules/lodash/isLength.js\");\n\n/**\n * Checks if `value` is array-like. A value is considered array-like if it's\n * not a function and has a `value.length` that's an integer greater than or\n * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is array-like, else `false`.\n * @example\n *\n * _.isArrayLike([1, 2, 3]);\n * // => true\n *\n * _.isArrayLike(document.body.children);\n * // => true\n *\n * _.isArrayLike('abc');\n * // => true\n *\n * _.isArrayLike(_.noop);\n * // => false\n */\nfunction isArrayLike(value) {\n  return value != null && isLength(value.length) && !isFunction(value);\n}\n\nmodule.exports = isArrayLike;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/isArrayLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isArrayLikeObject.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/isArrayLikeObject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isArrayLike = __webpack_require__(/*! ./isArrayLike */ \"./node_modules/lodash/isArrayLike.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/**\n * This method is like `_.isArrayLike` except that it also checks if `value`\n * is an object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array-like object,\n *  else `false`.\n * @example\n *\n * _.isArrayLikeObject([1, 2, 3]);\n * // => true\n *\n * _.isArrayLikeObject(document.body.children);\n * // => true\n *\n * _.isArrayLikeObject('abc');\n * // => false\n *\n * _.isArrayLikeObject(_.noop);\n * // => false\n */\nfunction isArrayLikeObject(value) {\n  return isObjectLike(value) && isArrayLike(value);\n}\n\nmodule.exports = isArrayLikeObject;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/isArrayLikeObject.js?");

/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\"),\n    stubFalse = __webpack_require__(/*! ./stubFalse */ \"./node_modules/lodash/stubFalse.js\");\n\n/** Detect free variable `exports`. */\nvar freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;\n\n/** Detect free variable `module`. */\nvar freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;\n\n/** Detect the popular CommonJS extension `module.exports`. */\nvar moduleExports = freeModule && freeModule.exports === freeExports;\n\n/** Built-in value references. */\nvar Buffer = moduleExports ? root.Buffer : undefined;\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;\n\n/**\n * Checks if `value` is a buffer.\n *\n * @static\n * @memberOf _\n * @since 4.3.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.\n * @example\n *\n * _.isBuffer(new Buffer(2));\n * // => true\n *\n * _.isBuffer(new Uint8Array(2));\n * // => false\n */\nvar isBuffer = nativeIsBuffer || stubFalse;\n\nmodule.exports = isBuffer;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/isBuffer.js?");

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n\n/** `Object#toString` result references. */\nvar asyncTag = '[object AsyncFunction]',\n    funcTag = '[object Function]',\n    genTag = '[object GeneratorFunction]',\n    proxyTag = '[object Proxy]';\n\n/**\n * Checks if `value` is classified as a `Function` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a function, else `false`.\n * @example\n *\n * _.isFunction(_);\n * // => true\n *\n * _.isFunction(/abc/);\n * // => false\n */\nfunction isFunction(value) {\n  if (!isObject(value)) {\n    return false;\n  }\n  // The use of `Object#toString` avoids issues with the `typeof` operator\n  // in Safari 9 which returns 'object' for typed arrays and other constructors.\n  var tag = baseGetTag(value);\n  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;\n}\n\nmodule.exports = isFunction;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/isFunction.js?");

/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used as references for various `Number` constants. */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/**\n * Checks if `value` is a valid array-like length.\n *\n * **Note:** This method is loosely based on\n * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.\n * @example\n *\n * _.isLength(3);\n * // => true\n *\n * _.isLength(Number.MIN_VALUE);\n * // => false\n *\n * _.isLength(Infinity);\n * // => false\n *\n * _.isLength('3');\n * // => false\n */\nfunction isLength(value) {\n  return typeof value == 'number' &&\n    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;\n}\n\nmodule.exports = isLength;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/isLength.js?");

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return value != null && (type == 'object' || type == 'function');\n}\n\nmodule.exports = isObject;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/isObject.js?");

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return value != null && typeof value == 'object';\n}\n\nmodule.exports = isObjectLike;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/isObjectLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/isPlainObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    getPrototype = __webpack_require__(/*! ./_getPrototype */ \"./node_modules/lodash/_getPrototype.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar objectTag = '[object Object]';\n\n/** Used for built-in method references. */\nvar funcProto = Function.prototype,\n    objectProto = Object.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Used to infer the `Object` constructor. */\nvar objectCtorString = funcToString.call(Object);\n\n/**\n * Checks if `value` is a plain object, that is, an object created by the\n * `Object` constructor or one with a `[[Prototype]]` of `null`.\n *\n * @static\n * @memberOf _\n * @since 0.8.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n * }\n *\n * _.isPlainObject(new Foo);\n * // => false\n *\n * _.isPlainObject([1, 2, 3]);\n * // => false\n *\n * _.isPlainObject({ 'x': 0, 'y': 0 });\n * // => true\n *\n * _.isPlainObject(Object.create(null));\n * // => true\n */\nfunction isPlainObject(value) {\n  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {\n    return false;\n  }\n  var proto = getPrototype(value);\n  if (proto === null) {\n    return true;\n  }\n  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;\n  return typeof Ctor == 'function' && Ctor instanceof Ctor &&\n    funcToString.call(Ctor) == objectCtorString;\n}\n\nmodule.exports = isPlainObject;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/isPlainObject.js?");

/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar symbolTag = '[object Symbol]';\n\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\nfunction isSymbol(value) {\n  return typeof value == 'symbol' ||\n    (isObjectLike(value) && baseGetTag(value) == symbolTag);\n}\n\nmodule.exports = isSymbol;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/isSymbol.js?");

/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ \"./node_modules/lodash/_baseIsTypedArray.js\"),\n    baseUnary = __webpack_require__(/*! ./_baseUnary */ \"./node_modules/lodash/_baseUnary.js\"),\n    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ \"./node_modules/lodash/_nodeUtil.js\");\n\n/* Node.js helper references. */\nvar nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;\n\n/**\n * Checks if `value` is classified as a typed array.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.\n * @example\n *\n * _.isTypedArray(new Uint8Array);\n * // => true\n *\n * _.isTypedArray([]);\n * // => false\n */\nvar isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;\n\nmodule.exports = isTypedArray;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/isTypedArray.js?");

/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ \"./node_modules/lodash/_arrayLikeKeys.js\"),\n    baseKeys = __webpack_require__(/*! ./_baseKeys */ \"./node_modules/lodash/_baseKeys.js\"),\n    isArrayLike = __webpack_require__(/*! ./isArrayLike */ \"./node_modules/lodash/isArrayLike.js\");\n\n/**\n * Creates an array of the own enumerable property names of `object`.\n *\n * **Note:** Non-object values are coerced to objects. See the\n * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)\n * for more details.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Object\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n *   this.b = 2;\n * }\n *\n * Foo.prototype.c = 3;\n *\n * _.keys(new Foo);\n * // => ['a', 'b'] (iteration order is not guaranteed)\n *\n * _.keys('hi');\n * // => ['0', '1']\n */\nfunction keys(object) {\n  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);\n}\n\nmodule.exports = keys;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/keys.js?");

/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ \"./node_modules/lodash/_arrayLikeKeys.js\"),\n    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ \"./node_modules/lodash/_baseKeysIn.js\"),\n    isArrayLike = __webpack_require__(/*! ./isArrayLike */ \"./node_modules/lodash/isArrayLike.js\");\n\n/**\n * Creates an array of the own and inherited enumerable property names of `object`.\n *\n * **Note:** Non-object values are coerced to objects.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category Object\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n *   this.b = 2;\n * }\n *\n * Foo.prototype.c = 3;\n *\n * _.keysIn(new Foo);\n * // => ['a', 'b', 'c'] (iteration order is not guaranteed)\n */\nfunction keysIn(object) {\n  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);\n}\n\nmodule.exports = keysIn;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/keysIn.js?");

/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var MapCache = __webpack_require__(/*! ./_MapCache */ \"./node_modules/lodash/_MapCache.js\");\n\n/** Error message constants. */\nvar FUNC_ERROR_TEXT = 'Expected a function';\n\n/**\n * Creates a function that memoizes the result of `func`. If `resolver` is\n * provided, it determines the cache key for storing the result based on the\n * arguments provided to the memoized function. By default, the first argument\n * provided to the memoized function is used as the map cache key. The `func`\n * is invoked with the `this` binding of the memoized function.\n *\n * **Note:** The cache is exposed as the `cache` property on the memoized\n * function. Its creation may be customized by replacing the `_.memoize.Cache`\n * constructor with one whose instances implement the\n * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)\n * method interface of `clear`, `delete`, `get`, `has`, and `set`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Function\n * @param {Function} func The function to have its output memoized.\n * @param {Function} [resolver] The function to resolve the cache key.\n * @returns {Function} Returns the new memoized function.\n * @example\n *\n * var object = { 'a': 1, 'b': 2 };\n * var other = { 'c': 3, 'd': 4 };\n *\n * var values = _.memoize(_.values);\n * values(object);\n * // => [1, 2]\n *\n * values(other);\n * // => [3, 4]\n *\n * object.a = 2;\n * values(object);\n * // => [1, 2]\n *\n * // Modify the result cache.\n * values.cache.set(object, ['a', 'b']);\n * values(object);\n * // => ['a', 'b']\n *\n * // Replace `_.memoize.Cache`.\n * _.memoize.Cache = WeakMap;\n */\nfunction memoize(func, resolver) {\n  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {\n    throw new TypeError(FUNC_ERROR_TEXT);\n  }\n  var memoized = function() {\n    var args = arguments,\n        key = resolver ? resolver.apply(this, args) : args[0],\n        cache = memoized.cache;\n\n    if (cache.has(key)) {\n      return cache.get(key);\n    }\n    var result = func.apply(this, args);\n    memoized.cache = cache.set(key, result) || cache;\n    return result;\n  };\n  memoized.cache = new (memoize.Cache || MapCache);\n  return memoized;\n}\n\n// Expose `MapCache`.\nmemoize.Cache = MapCache;\n\nmodule.exports = memoize;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/memoize.js?");

/***/ }),

/***/ "./node_modules/lodash/merge.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/merge.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseMerge = __webpack_require__(/*! ./_baseMerge */ \"./node_modules/lodash/_baseMerge.js\"),\n    createAssigner = __webpack_require__(/*! ./_createAssigner */ \"./node_modules/lodash/_createAssigner.js\");\n\n/**\n * This method is like `_.assign` except that it recursively merges own and\n * inherited enumerable string keyed properties of source objects into the\n * destination object. Source properties that resolve to `undefined` are\n * skipped if a destination value exists. Array and plain object properties\n * are merged recursively. Other objects and value types are overridden by\n * assignment. Source objects are applied from left to right. Subsequent\n * sources overwrite property assignments of previous sources.\n *\n * **Note:** This method mutates `object`.\n *\n * @static\n * @memberOf _\n * @since 0.5.0\n * @category Object\n * @param {Object} object The destination object.\n * @param {...Object} [sources] The source objects.\n * @returns {Object} Returns `object`.\n * @example\n *\n * var object = {\n *   'a': [{ 'b': 2 }, { 'd': 4 }]\n * };\n *\n * var other = {\n *   'a': [{ 'c': 3 }, { 'e': 5 }]\n * };\n *\n * _.merge(object, other);\n * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }\n */\nvar merge = createAssigner(function(object, source, srcIndex) {\n  baseMerge(object, source, srcIndex);\n});\n\nmodule.exports = merge;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/merge.js?");

/***/ }),

/***/ "./node_modules/lodash/set.js":
/*!************************************!*\
  !*** ./node_modules/lodash/set.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseSet = __webpack_require__(/*! ./_baseSet */ \"./node_modules/lodash/_baseSet.js\");\n\n/**\n * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,\n * it's created. Arrays are created for missing index properties while objects\n * are created for all other missing properties. Use `_.setWith` to customize\n * `path` creation.\n *\n * **Note:** This method mutates `object`.\n *\n * @static\n * @memberOf _\n * @since 3.7.0\n * @category Object\n * @param {Object} object The object to modify.\n * @param {Array|string} path The path of the property to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns `object`.\n * @example\n *\n * var object = { 'a': [{ 'b': { 'c': 3 } }] };\n *\n * _.set(object, 'a[0].b.c', 4);\n * console.log(object.a[0].b.c);\n * // => 4\n *\n * _.set(object, ['x', '0', 'y', 'z'], 5);\n * console.log(object.x[0].y.z);\n * // => 5\n */\nfunction set(object, path, value) {\n  return object == null ? object : baseSet(object, path, value);\n}\n\nmodule.exports = set;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/set.js?");

/***/ }),

/***/ "./node_modules/lodash/startCase.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/startCase.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var createCompounder = __webpack_require__(/*! ./_createCompounder */ \"./node_modules/lodash/_createCompounder.js\"),\n    upperFirst = __webpack_require__(/*! ./upperFirst */ \"./node_modules/lodash/upperFirst.js\");\n\n/**\n * Converts `string` to\n * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).\n *\n * @static\n * @memberOf _\n * @since 3.1.0\n * @category String\n * @param {string} [string=''] The string to convert.\n * @returns {string} Returns the start cased string.\n * @example\n *\n * _.startCase('--foo-bar--');\n * // => 'Foo Bar'\n *\n * _.startCase('fooBar');\n * // => 'Foo Bar'\n *\n * _.startCase('__FOO_BAR__');\n * // => 'FOO BAR'\n */\nvar startCase = createCompounder(function(result, word, index) {\n  return result + (index ? ' ' : '') + upperFirst(word);\n});\n\nmodule.exports = startCase;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/startCase.js?");

/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This method returns `false`.\n *\n * @static\n * @memberOf _\n * @since 4.13.0\n * @category Util\n * @returns {boolean} Returns `false`.\n * @example\n *\n * _.times(2, _.stubFalse);\n * // => [false, false]\n */\nfunction stubFalse() {\n  return false;\n}\n\nmodule.exports = stubFalse;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/stubFalse.js?");

/***/ }),

/***/ "./node_modules/lodash/toLower.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/toLower.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toString = __webpack_require__(/*! ./toString */ \"./node_modules/lodash/toString.js\");\n\n/**\n * Converts `string`, as a whole, to lower case just like\n * [String#toLowerCase](https://mdn.io/toLowerCase).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category String\n * @param {string} [string=''] The string to convert.\n * @returns {string} Returns the lower cased string.\n * @example\n *\n * _.toLower('--Foo-Bar--');\n * // => '--foo-bar--'\n *\n * _.toLower('fooBar');\n * // => 'foobar'\n *\n * _.toLower('__FOO_BAR__');\n * // => '__foo_bar__'\n */\nfunction toLower(value) {\n  return toString(value).toLowerCase();\n}\n\nmodule.exports = toLower;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/toLower.js?");

/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar NAN = 0 / 0;\n\n/** Used to match leading and trailing whitespace. */\nvar reTrim = /^\\s+|\\s+$/g;\n\n/** Used to detect bad signed hexadecimal string values. */\nvar reIsBadHex = /^[-+]0x[0-9a-f]+$/i;\n\n/** Used to detect binary string values. */\nvar reIsBinary = /^0b[01]+$/i;\n\n/** Used to detect octal string values. */\nvar reIsOctal = /^0o[0-7]+$/i;\n\n/** Built-in method references without a dependency on `root`. */\nvar freeParseInt = parseInt;\n\n/**\n * Converts `value` to a number.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to process.\n * @returns {number} Returns the number.\n * @example\n *\n * _.toNumber(3.2);\n * // => 3.2\n *\n * _.toNumber(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toNumber(Infinity);\n * // => Infinity\n *\n * _.toNumber('3.2');\n * // => 3.2\n */\nfunction toNumber(value) {\n  if (typeof value == 'number') {\n    return value;\n  }\n  if (isSymbol(value)) {\n    return NAN;\n  }\n  if (isObject(value)) {\n    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;\n    value = isObject(other) ? (other + '') : other;\n  }\n  if (typeof value != 'string') {\n    return value === 0 ? value : +value;\n  }\n  value = value.replace(reTrim, '');\n  var isBinary = reIsBinary.test(value);\n  return (isBinary || reIsOctal.test(value))\n    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)\n    : (reIsBadHex.test(value) ? NAN : +value);\n}\n\nmodule.exports = toNumber;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/toNumber.js?");

/***/ }),

/***/ "./node_modules/lodash/toPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/toPlainObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var copyObject = __webpack_require__(/*! ./_copyObject */ \"./node_modules/lodash/_copyObject.js\"),\n    keysIn = __webpack_require__(/*! ./keysIn */ \"./node_modules/lodash/keysIn.js\");\n\n/**\n * Converts `value` to a plain object flattening inherited enumerable string\n * keyed properties of `value` to own properties of the plain object.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {Object} Returns the converted plain object.\n * @example\n *\n * function Foo() {\n *   this.b = 2;\n * }\n *\n * Foo.prototype.c = 3;\n *\n * _.assign({ 'a': 1 }, new Foo);\n * // => { 'a': 1, 'b': 2 }\n *\n * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));\n * // => { 'a': 1, 'b': 2, 'c': 3 }\n */\nfunction toPlainObject(value) {\n  return copyObject(value, keysIn(value));\n}\n\nmodule.exports = toPlainObject;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/toPlainObject.js?");

/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseToString = __webpack_require__(/*! ./_baseToString */ \"./node_modules/lodash/_baseToString.js\");\n\n/**\n * Converts `value` to a string. An empty string is returned for `null`\n * and `undefined` values. The sign of `-0` is preserved.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n * @example\n *\n * _.toString(null);\n * // => ''\n *\n * _.toString(-0);\n * // => '-0'\n *\n * _.toString([1, 2, 3]);\n * // => '1,2,3'\n */\nfunction toString(value) {\n  return value == null ? '' : baseToString(value);\n}\n\nmodule.exports = toString;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/toString.js?");

/***/ }),

/***/ "./node_modules/lodash/toUpper.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/toUpper.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toString = __webpack_require__(/*! ./toString */ \"./node_modules/lodash/toString.js\");\n\n/**\n * Converts `string`, as a whole, to upper case just like\n * [String#toUpperCase](https://mdn.io/toUpperCase).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category String\n * @param {string} [string=''] The string to convert.\n * @returns {string} Returns the upper cased string.\n * @example\n *\n * _.toUpper('--foo-bar--');\n * // => '--FOO-BAR--'\n *\n * _.toUpper('fooBar');\n * // => 'FOOBAR'\n *\n * _.toUpper('__foo_bar__');\n * // => '__FOO_BAR__'\n */\nfunction toUpper(value) {\n  return toString(value).toUpperCase();\n}\n\nmodule.exports = toUpper;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/toUpper.js?");

/***/ }),

/***/ "./node_modules/lodash/upperFirst.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/upperFirst.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var createCaseFirst = __webpack_require__(/*! ./_createCaseFirst */ \"./node_modules/lodash/_createCaseFirst.js\");\n\n/**\n * Converts the first character of `string` to upper case.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category String\n * @param {string} [string=''] The string to convert.\n * @returns {string} Returns the converted string.\n * @example\n *\n * _.upperFirst('fred');\n * // => 'Fred'\n *\n * _.upperFirst('FRED');\n * // => 'FRED'\n */\nvar upperFirst = createCaseFirst('toUpperCase');\n\nmodule.exports = upperFirst;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/upperFirst.js?");

/***/ }),

/***/ "./node_modules/lodash/words.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/words.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var asciiWords = __webpack_require__(/*! ./_asciiWords */ \"./node_modules/lodash/_asciiWords.js\"),\n    hasUnicodeWord = __webpack_require__(/*! ./_hasUnicodeWord */ \"./node_modules/lodash/_hasUnicodeWord.js\"),\n    toString = __webpack_require__(/*! ./toString */ \"./node_modules/lodash/toString.js\"),\n    unicodeWords = __webpack_require__(/*! ./_unicodeWords */ \"./node_modules/lodash/_unicodeWords.js\");\n\n/**\n * Splits `string` into an array of its words.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category String\n * @param {string} [string=''] The string to inspect.\n * @param {RegExp|string} [pattern] The pattern to match words.\n * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.\n * @returns {Array} Returns the words of `string`.\n * @example\n *\n * _.words('fred, barney, & pebbles');\n * // => ['fred', 'barney', 'pebbles']\n *\n * _.words('fred, barney, & pebbles', /[^, ]+/g);\n * // => ['fred', 'barney', '&', 'pebbles']\n */\nfunction words(string, pattern, guard) {\n  string = toString(string);\n  pattern = guard ? undefined : pattern;\n\n  if (pattern === undefined) {\n    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);\n  }\n  return string.match(pattern) || [];\n}\n\nmodule.exports = words;\n\n\n//# sourceURL=webpack://pragma/./node_modules/lodash/words.js?");

/***/ }),

/***/ "./node_modules/riot/riot.js":
/*!***********************************!*\
  !*** ./node_modules/riot/riot.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* Riot v3.12.0, @license MIT */\n(function (global, factory) {\n   true ? factory(exports) :\n  undefined;\n}(this, (function (exports) { 'use strict';\n\n  /**\n   * Shorter and fast way to select a single node in the DOM\n   * @param   { String } selector - unique dom selector\n   * @param   { Object } ctx - DOM node where the target of our search will is located\n   * @returns { Object } dom node found\n   */\n  function $(selector, ctx) {\n    return (ctx || document).querySelector(selector)\n  }\n\n  var\n    // be aware, internal usage\n    // ATTENTION: prefix the global dynamic variables with `__`\n    // tags instances cache\n    __TAGS_CACHE = [],\n    // tags implementation cache\n    __TAG_IMPL = {},\n    YIELD_TAG = 'yield',\n\n    /**\n     * Const\n     */\n    GLOBAL_MIXIN = '__global_mixin',\n\n    // riot specific prefixes or attributes\n    ATTRS_PREFIX = 'riot-',\n\n    // Riot Directives\n    REF_DIRECTIVES = ['ref', 'data-ref'],\n    IS_DIRECTIVE = 'data-is',\n    CONDITIONAL_DIRECTIVE = 'if',\n    LOOP_DIRECTIVE = 'each',\n    LOOP_NO_REORDER_DIRECTIVE = 'no-reorder',\n    SHOW_DIRECTIVE = 'show',\n    HIDE_DIRECTIVE = 'hide',\n    KEY_DIRECTIVE = 'key',\n    RIOT_EVENTS_KEY = '__riot-events__',\n\n    // for typeof == '' comparisons\n    T_STRING = 'string',\n    T_OBJECT = 'object',\n    T_UNDEF  = 'undefined',\n    T_FUNCTION = 'function',\n\n    XLINK_NS = 'http://www.w3.org/1999/xlink',\n    SVG_NS = 'http://www.w3.org/2000/svg',\n    XLINK_REGEX = /^xlink:(\\w+)/,\n\n    WIN = typeof window === T_UNDEF ? /* istanbul ignore next */ undefined : window,\n\n    // special native tags that cannot be treated like the others\n    RE_SPECIAL_TAGS = /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/,\n    RE_SPECIAL_TAGS_NO_OPTION = /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/,\n    RE_EVENTS_PREFIX = /^on/,\n    RE_HTML_ATTRS = /([-\\w]+) ?= ?(?:\"([^\"]*)|'([^']*)|({[^}]*}))/g,\n    // some DOM attributes must be normalized\n    CASE_SENSITIVE_ATTRIBUTES = {\n      'viewbox': 'viewBox',\n      'preserveaspectratio': 'preserveAspectRatio'\n    },\n    /**\n     * Matches boolean HTML attributes in the riot tag definition.\n     * With a long list like this, a regex is faster than `[].indexOf` in most browsers.\n     * @const {RegExp}\n     * @see [attributes.md](https://github.com/riot/compiler/blob/dev/doc/attributes.md)\n     */\n    RE_BOOL_ATTRS = /^(?:disabled|checked|readonly|required|allowfullscreen|auto(?:focus|play)|compact|controls|default|formnovalidate|hidden|ismap|itemscope|loop|multiple|muted|no(?:resize|shade|validate|wrap)?|open|reversed|seamless|selected|sortable|truespeed|typemustmatch)$/,\n    // version# for IE 8-11, 0 for others\n    IE_VERSION = (WIN && WIN.document || /* istanbul ignore next */ {}).documentMode | 0;\n\n  /**\n   * Create a generic DOM node\n   * @param   { String } name - name of the DOM node we want to create\n   * @returns { Object } DOM node just created\n   */\n  function makeElement(name) {\n    return name === 'svg' ? document.createElementNS(SVG_NS, name) : document.createElement(name)\n  }\n\n  /**\n   * Set any DOM attribute\n   * @param { Object } dom - DOM node we want to update\n   * @param { String } name - name of the property we want to set\n   * @param { String } val - value of the property we want to set\n   */\n  function setAttribute(dom, name, val) {\n    var xlink = XLINK_REGEX.exec(name);\n    if (xlink && xlink[1])\n      { dom.setAttributeNS(XLINK_NS, xlink[1], val); }\n    else\n      { dom.setAttribute(name, val); }\n  }\n\n  var styleNode;\n  // Create cache and shortcut to the correct property\n  var cssTextProp;\n  var byName = {};\n  var needsInject = false;\n\n  // skip the following code on the server\n  if (WIN) {\n    styleNode = ((function () {\n      // create a new style element with the correct type\n      var newNode = makeElement('style');\n      // replace any user node or insert the new one into the head\n      var userNode = $('style[type=riot]');\n\n      setAttribute(newNode, 'type', 'text/css');\n      /* istanbul ignore next */\n      if (userNode) {\n        if (userNode.id) { newNode.id = userNode.id; }\n        userNode.parentNode.replaceChild(newNode, userNode);\n      } else { document.head.appendChild(newNode); }\n\n      return newNode\n    }))();\n    cssTextProp = styleNode.styleSheet;\n  }\n\n  /**\n   * Object that will be used to inject and manage the css of every tag instance\n   */\n  var styleManager = {\n    styleNode: styleNode,\n    /**\n     * Save a tag style to be later injected into DOM\n     * @param { String } css - css string\n     * @param { String } name - if it's passed we will map the css to a tagname\n     */\n    add: function add(css, name) {\n      byName[name] = css;\n      needsInject = true;\n    },\n    /**\n     * Inject all previously saved tag styles into DOM\n     * innerHTML seems slow: http://jsperf.com/riot-insert-style\n     */\n    inject: function inject() {\n      if (!WIN || !needsInject) { return }\n      needsInject = false;\n      var style = Object.keys(byName)\n        .map(function (k) { return byName[k]; })\n        .join('\\n');\n      /* istanbul ignore next */\n      if (cssTextProp) { cssTextProp.cssText = style; }\n      else { styleNode.innerHTML = style; }\n    },\n\n    /**\n     * Remove a tag style of injected DOM later.\n     * @param {String} name a registered tagname\n     */\n    remove: function remove(name) {\n      delete byName[name];\n      needsInject = true;\n    }\n  }\n\n  /**\n   * The riot template engine\n   * @version v3.0.8\n   */\n\n  /* istanbul ignore next */\n  var skipRegex = (function () { //eslint-disable-line no-unused-vars\n\n    var beforeReChars = '[{(,;:?=|&!^~>%*/';\n\n    var beforeReWords = [\n      'case',\n      'default',\n      'do',\n      'else',\n      'in',\n      'instanceof',\n      'prefix',\n      'return',\n      'typeof',\n      'void',\n      'yield'\n    ];\n\n    var wordsLastChar = beforeReWords.reduce(function (s, w) {\n      return s + w.slice(-1)\n    }, '');\n\n    var RE_REGEX = /^\\/(?=[^*>/])[^[/\\\\]*(?:(?:\\\\.|\\[(?:\\\\.|[^\\]\\\\]*)*\\])[^[\\\\/]*)*?\\/[gimuy]*/;\n    var RE_VN_CHAR = /[$\\w]/;\n\n    function prev (code, pos) {\n      while (--pos >= 0 && /\\s/.test(code[pos])){ }\n      return pos\n    }\n\n    function _skipRegex (code, start) {\n\n      var re = /.*/g;\n      var pos = re.lastIndex = start++;\n      var match = re.exec(code)[0].match(RE_REGEX);\n\n      if (match) {\n        var next = pos + match[0].length;\n\n        pos = prev(code, pos);\n        var c = code[pos];\n\n        if (pos < 0 || ~beforeReChars.indexOf(c)) {\n          return next\n        }\n\n        if (c === '.') {\n\n          if (code[pos - 1] === '.') {\n            start = next;\n          }\n\n        } else if (c === '+' || c === '-') {\n\n          if (code[--pos] !== c ||\n              (pos = prev(code, pos)) < 0 ||\n              !RE_VN_CHAR.test(code[pos])) {\n            start = next;\n          }\n\n        } else if (~wordsLastChar.indexOf(c)) {\n\n          var end = pos + 1;\n\n          while (--pos >= 0 && RE_VN_CHAR.test(code[pos])){ }\n          if (~beforeReWords.indexOf(code.slice(pos + 1, end))) {\n            start = next;\n          }\n        }\n      }\n\n      return start\n    }\n\n    return _skipRegex\n\n  })();\n\n  /**\n   * riot.util.brackets\n   *\n   * - `brackets    ` - Returns a string or regex based on its parameter\n   * - `brackets.set` - Change the current riot brackets\n   *\n   * @module\n   */\n\n  /* global riot */\n\n  /* istanbul ignore next */\n  var brackets = (function (UNDEF) {\n\n    var\n      REGLOB = 'g',\n\n      R_MLCOMMS = /\\/\\*[^*]*\\*+(?:[^*\\/][^*]*\\*+)*\\//g,\n\n      R_STRINGS = /\"[^\"\\\\]*(?:\\\\[\\S\\s][^\"\\\\]*)*\"|'[^'\\\\]*(?:\\\\[\\S\\s][^'\\\\]*)*'|`[^`\\\\]*(?:\\\\[\\S\\s][^`\\\\]*)*`/g,\n\n      S_QBLOCKS = R_STRINGS.source + '|' +\n        /(?:\\breturn\\s+|(?:[$\\w\\)\\]]|\\+\\+|--)\\s*(\\/)(?![*\\/]))/.source + '|' +\n        /\\/(?=[^*\\/])[^[\\/\\\\]*(?:(?:\\[(?:\\\\.|[^\\]\\\\]*)*\\]|\\\\.)[^[\\/\\\\]*)*?([^<]\\/)[gim]*/.source,\n\n      UNSUPPORTED = RegExp('[\\\\' + 'x00-\\\\x1F<>a-zA-Z0-9\\'\",;\\\\\\\\]'),\n\n      NEED_ESCAPE = /(?=[[\\]()*+?.^$|])/g,\n\n      S_QBLOCK2 = R_STRINGS.source + '|' + /(\\/)(?![*\\/])/.source,\n\n      FINDBRACES = {\n        '(': RegExp('([()])|'   + S_QBLOCK2, REGLOB),\n        '[': RegExp('([[\\\\]])|' + S_QBLOCK2, REGLOB),\n        '{': RegExp('([{}])|'   + S_QBLOCK2, REGLOB)\n      },\n\n      DEFAULT = '{ }';\n\n    var _pairs = [\n      '{', '}',\n      '{', '}',\n      /{[^}]*}/,\n      /\\\\([{}])/g,\n      /\\\\({)|{/g,\n      RegExp('\\\\\\\\(})|([[({])|(})|' + S_QBLOCK2, REGLOB),\n      DEFAULT,\n      /^\\s*{\\^?\\s*([$\\w]+)(?:\\s*,\\s*(\\S+))?\\s+in\\s+(\\S.*)\\s*}/,\n      /(^|[^\\\\]){=[\\S\\s]*?}/\n    ];\n\n    var\n      cachedBrackets = UNDEF,\n      _regex,\n      _cache = [],\n      _settings;\n\n    function _loopback (re) { return re }\n\n    function _rewrite (re, bp) {\n      if (!bp) { bp = _cache; }\n      return new RegExp(\n        re.source.replace(/{/g, bp[2]).replace(/}/g, bp[3]), re.global ? REGLOB : ''\n      )\n    }\n\n    function _create (pair) {\n      if (pair === DEFAULT) { return _pairs }\n\n      var arr = pair.split(' ');\n\n      if (arr.length !== 2 || UNSUPPORTED.test(pair)) {\n        throw new Error('Unsupported brackets \"' + pair + '\"')\n      }\n      arr = arr.concat(pair.replace(NEED_ESCAPE, '\\\\').split(' '));\n\n      arr[4] = _rewrite(arr[1].length > 1 ? /{[\\S\\s]*?}/ : _pairs[4], arr);\n      arr[5] = _rewrite(pair.length > 3 ? /\\\\({|})/g : _pairs[5], arr);\n      arr[6] = _rewrite(_pairs[6], arr);\n      arr[7] = RegExp('\\\\\\\\(' + arr[3] + ')|([[({])|(' + arr[3] + ')|' + S_QBLOCK2, REGLOB);\n      arr[8] = pair;\n      return arr\n    }\n\n    function _brackets (reOrIdx) {\n      return reOrIdx instanceof RegExp ? _regex(reOrIdx) : _cache[reOrIdx]\n    }\n\n    _brackets.split = function split (str, tmpl, _bp) {\n      // istanbul ignore next: _bp is for the compiler\n      if (!_bp) { _bp = _cache; }\n\n      var\n        parts = [],\n        match,\n        isexpr,\n        start,\n        pos,\n        re = _bp[6];\n\n      var qblocks = [];\n      var prevStr = '';\n      var mark, lastIndex;\n\n      isexpr = start = re.lastIndex = 0;\n\n      while ((match = re.exec(str))) {\n\n        lastIndex = re.lastIndex;\n        pos = match.index;\n\n        if (isexpr) {\n\n          if (match[2]) {\n\n            var ch = match[2];\n            var rech = FINDBRACES[ch];\n            var ix = 1;\n\n            rech.lastIndex = lastIndex;\n            while ((match = rech.exec(str))) {\n              if (match[1]) {\n                if (match[1] === ch) { ++ix; }\n                else if (!--ix) { break }\n              } else {\n                rech.lastIndex = pushQBlock(match.index, rech.lastIndex, match[2]);\n              }\n            }\n            re.lastIndex = ix ? str.length : rech.lastIndex;\n            continue\n          }\n\n          if (!match[3]) {\n            re.lastIndex = pushQBlock(pos, lastIndex, match[4]);\n            continue\n          }\n        }\n\n        if (!match[1]) {\n          unescapeStr(str.slice(start, pos));\n          start = re.lastIndex;\n          re = _bp[6 + (isexpr ^= 1)];\n          re.lastIndex = start;\n        }\n      }\n\n      if (str && start < str.length) {\n        unescapeStr(str.slice(start));\n      }\n\n      parts.qblocks = qblocks;\n\n      return parts\n\n      function unescapeStr (s) {\n        if (prevStr) {\n          s = prevStr + s;\n          prevStr = '';\n        }\n        if (tmpl || isexpr) {\n          parts.push(s && s.replace(_bp[5], '$1'));\n        } else {\n          parts.push(s);\n        }\n      }\n\n      function pushQBlock(_pos, _lastIndex, slash) { //eslint-disable-line\n        if (slash) {\n          _lastIndex = skipRegex(str, _pos);\n        }\n\n        if (tmpl && _lastIndex > _pos + 2) {\n          mark = '\\u2057' + qblocks.length + '~';\n          qblocks.push(str.slice(_pos, _lastIndex));\n          prevStr += str.slice(start, _pos) + mark;\n          start = _lastIndex;\n        }\n        return _lastIndex\n      }\n    };\n\n    _brackets.hasExpr = function hasExpr (str) {\n      return _cache[4].test(str)\n    };\n\n    _brackets.loopKeys = function loopKeys (expr) {\n      var m = expr.match(_cache[9]);\n\n      return m\n        ? { key: m[1], pos: m[2], val: _cache[0] + m[3].trim() + _cache[1] }\n        : { val: expr.trim() }\n    };\n\n    _brackets.array = function array (pair) {\n      return pair ? _create(pair) : _cache\n    };\n\n    function _reset (pair) {\n      if ((pair || (pair = DEFAULT)) !== _cache[8]) {\n        _cache = _create(pair);\n        _regex = pair === DEFAULT ? _loopback : _rewrite;\n        _cache[9] = _regex(_pairs[9]);\n      }\n      cachedBrackets = pair;\n    }\n\n    function _setSettings (o) {\n      var b;\n\n      o = o || {};\n      b = o.brackets;\n      Object.defineProperty(o, 'brackets', {\n        set: _reset,\n        get: function () { return cachedBrackets },\n        enumerable: true\n      });\n      _settings = o;\n      _reset(b);\n    }\n\n    Object.defineProperty(_brackets, 'settings', {\n      set: _setSettings,\n      get: function () { return _settings }\n    });\n\n    /* istanbul ignore next: in the browser riot is always in the scope */\n    _brackets.settings = typeof riot !== 'undefined' && riot.settings || {};\n    _brackets.set = _reset;\n    _brackets.skipRegex = skipRegex;\n\n    _brackets.R_STRINGS = R_STRINGS;\n    _brackets.R_MLCOMMS = R_MLCOMMS;\n    _brackets.S_QBLOCKS = S_QBLOCKS;\n    _brackets.S_QBLOCK2 = S_QBLOCK2;\n\n    return _brackets\n\n  })();\n\n  /**\n   * @module tmpl\n   *\n   * tmpl          - Root function, returns the template value, render with data\n   * tmpl.hasExpr  - Test the existence of a expression inside a string\n   * tmpl.loopKeys - Get the keys for an 'each' loop (used by `_each`)\n   */\n\n  /* istanbul ignore next */\n  var tmpl = (function () {\n\n    var _cache = {};\n\n    function _tmpl (str, data) {\n      if (!str) { return str }\n\n      return (_cache[str] || (_cache[str] = _create(str))).call(\n        data, _logErr.bind({\n          data: data,\n          tmpl: str\n        })\n      )\n    }\n\n    _tmpl.hasExpr = brackets.hasExpr;\n\n    _tmpl.loopKeys = brackets.loopKeys;\n\n    // istanbul ignore next\n    _tmpl.clearCache = function () { _cache = {}; };\n\n    _tmpl.errorHandler = null;\n\n    function _logErr (err, ctx) {\n\n      err.riotData = {\n        tagName: ctx && ctx.__ && ctx.__.tagName,\n        _riot_id: ctx && ctx._riot_id  //eslint-disable-line camelcase\n      };\n\n      if (_tmpl.errorHandler) { _tmpl.errorHandler(err); }\n      else if (\n        typeof console !== 'undefined' &&\n        typeof console.error === 'function'\n      ) {\n        console.error(err.message);\n        console.log('<%s> %s', err.riotData.tagName || 'Unknown tag', this.tmpl); // eslint-disable-line\n        console.log(this.data); // eslint-disable-line\n      }\n    }\n\n    function _create (str) {\n      var expr = _getTmpl(str);\n\n      if (expr.slice(0, 11) !== 'try{return ') { expr = 'return ' + expr; }\n\n      return new Function('E', expr + ';')    // eslint-disable-line no-new-func\n    }\n\n    var RE_DQUOTE = /\\u2057/g;\n    var RE_QBMARK = /\\u2057(\\d+)~/g;\n\n    function _getTmpl (str) {\n      var parts = brackets.split(str.replace(RE_DQUOTE, '\"'), 1);\n      var qstr = parts.qblocks;\n      var expr;\n\n      if (parts.length > 2 || parts[0]) {\n        var i, j, list = [];\n\n        for (i = j = 0; i < parts.length; ++i) {\n\n          expr = parts[i];\n\n          if (expr && (expr = i & 1\n\n              ? _parseExpr(expr, 1, qstr)\n\n              : '\"' + expr\n                  .replace(/\\\\/g, '\\\\\\\\')\n                  .replace(/\\r\\n?|\\n/g, '\\\\n')\n                  .replace(/\"/g, '\\\\\"') +\n                '\"'\n\n            )) { list[j++] = expr; }\n\n        }\n\n        expr = j < 2 ? list[0]\n             : '[' + list.join(',') + '].join(\"\")';\n\n      } else {\n\n        expr = _parseExpr(parts[1], 0, qstr);\n      }\n\n      if (qstr.length) {\n        expr = expr.replace(RE_QBMARK, function (_, pos) {\n          return qstr[pos]\n            .replace(/\\r/g, '\\\\r')\n            .replace(/\\n/g, '\\\\n')\n        });\n      }\n      return expr\n    }\n\n    var RE_CSNAME = /^(?:(-?[_A-Za-z\\xA0-\\xFF][-\\w\\xA0-\\xFF]*)|\\u2057(\\d+)~):/;\n    var\n      RE_BREND = {\n        '(': /[()]/g,\n        '[': /[[\\]]/g,\n        '{': /[{}]/g\n      };\n\n    function _parseExpr (expr, asText, qstr) {\n\n      expr = expr\n        .replace(/\\s+/g, ' ').trim()\n        .replace(/\\ ?([[\\({},?\\.:])\\ ?/g, '$1');\n\n      if (expr) {\n        var\n          list = [],\n          cnt = 0,\n          match;\n\n        while (expr &&\n              (match = expr.match(RE_CSNAME)) &&\n              !match.index\n          ) {\n          var\n            key,\n            jsb,\n            re = /,|([[{(])|$/g;\n\n          expr = RegExp.rightContext;\n          key  = match[2] ? qstr[match[2]].slice(1, -1).trim().replace(/\\s+/g, ' ') : match[1];\n\n          while (jsb = (match = re.exec(expr))[1]) { skipBraces(jsb, re); }\n\n          jsb  = expr.slice(0, match.index);\n          expr = RegExp.rightContext;\n\n          list[cnt++] = _wrapExpr(jsb, 1, key);\n        }\n\n        expr = !cnt ? _wrapExpr(expr, asText)\n             : cnt > 1 ? '[' + list.join(',') + '].join(\" \").trim()' : list[0];\n      }\n      return expr\n\n      function skipBraces (ch, re) {\n        var\n          mm,\n          lv = 1,\n          ir = RE_BREND[ch];\n\n        ir.lastIndex = re.lastIndex;\n        while (mm = ir.exec(expr)) {\n          if (mm[0] === ch) { ++lv; }\n          else if (!--lv) { break }\n        }\n        re.lastIndex = lv ? expr.length : ir.lastIndex;\n      }\n    }\n\n    // istanbul ignore next: not both\n    var // eslint-disable-next-line max-len\n      JS_CONTEXT = '\"in this?this:' + (typeof window !== 'object' ? 'global' : 'window') + ').',\n      JS_VARNAME = /[,{][\\$\\w]+(?=:)|(^ *|[^$\\w\\.{])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\\w]))([$_A-Za-z][$\\w]*)/g,\n      JS_NOPROPS = /^(?=(\\.[$\\w]+))\\1(?:[^.[(]|$)/;\n\n    function _wrapExpr (expr, asText, key) {\n      var tb;\n\n      expr = expr.replace(JS_VARNAME, function (match, p, mvar, pos, s) {\n        if (mvar) {\n          pos = tb ? 0 : pos + match.length;\n\n          if (mvar !== 'this' && mvar !== 'global' && mvar !== 'window') {\n            match = p + '(\"' + mvar + JS_CONTEXT + mvar;\n            if (pos) { tb = (s = s[pos]) === '.' || s === '(' || s === '['; }\n          } else if (pos) {\n            tb = !JS_NOPROPS.test(s.slice(pos));\n          }\n        }\n        return match\n      });\n\n      if (tb) {\n        expr = 'try{return ' + expr + '}catch(e){E(e,this)}';\n      }\n\n      if (key) {\n\n        expr = (tb\n            ? 'function(){' + expr + '}.call(this)' : '(' + expr + ')'\n          ) + '?\"' + key + '\":\"\"';\n\n      } else if (asText) {\n\n        expr = 'function(v){' + (tb\n            ? expr.replace('return ', 'v=') : 'v=(' + expr + ')'\n          ) + ';return v||v===0?v:\"\"}.call(this)';\n      }\n\n      return expr\n    }\n\n    _tmpl.version = brackets.version = 'v3.0.8';\n\n    return _tmpl\n\n  })();\n\n  /* istanbul ignore next */\n  var observable = function(el) {\n\n    /**\n     * Extend the original object or create a new empty one\n     * @type { Object }\n     */\n\n    el = el || {};\n\n    /**\n     * Private variables\n     */\n    var callbacks = {},\n      slice = Array.prototype.slice;\n\n    /**\n     * Public Api\n     */\n\n    // extend the el object adding the observable methods\n    Object.defineProperties(el, {\n      /**\n       * Listen to the given `event` ands\n       * execute the `callback` each time an event is triggered.\n       * @param  { String } event - event id\n       * @param  { Function } fn - callback function\n       * @returns { Object } el\n       */\n      on: {\n        value: function(event, fn) {\n          if (typeof fn == 'function')\n            { (callbacks[event] = callbacks[event] || []).push(fn); }\n          return el\n        },\n        enumerable: false,\n        writable: false,\n        configurable: false\n      },\n\n      /**\n       * Removes the given `event` listeners\n       * @param   { String } event - event id\n       * @param   { Function } fn - callback function\n       * @returns { Object } el\n       */\n      off: {\n        value: function(event, fn) {\n          if (event == '*' && !fn) { callbacks = {}; }\n          else {\n            if (fn) {\n              var arr = callbacks[event];\n              for (var i = 0, cb; cb = arr && arr[i]; ++i) {\n                if (cb == fn) { arr.splice(i--, 1); }\n              }\n            } else { delete callbacks[event]; }\n          }\n          return el\n        },\n        enumerable: false,\n        writable: false,\n        configurable: false\n      },\n\n      /**\n       * Listen to the given `event` and\n       * execute the `callback` at most once\n       * @param   { String } event - event id\n       * @param   { Function } fn - callback function\n       * @returns { Object } el\n       */\n      one: {\n        value: function(event, fn) {\n          function on() {\n            el.off(event, on);\n            fn.apply(el, arguments);\n          }\n          return el.on(event, on)\n        },\n        enumerable: false,\n        writable: false,\n        configurable: false\n      },\n\n      /**\n       * Execute all callback functions that listen to\n       * the given `event`\n       * @param   { String } event - event id\n       * @returns { Object } el\n       */\n      trigger: {\n        value: function(event) {\n          var arguments$1 = arguments;\n\n\n          // getting the arguments\n          var arglen = arguments.length - 1,\n            args = new Array(arglen),\n            fns,\n            fn,\n            i;\n\n          for (i = 0; i < arglen; i++) {\n            args[i] = arguments$1[i + 1]; // skip first argument\n          }\n\n          fns = slice.call(callbacks[event] || [], 0);\n\n          for (i = 0; fn = fns[i]; ++i) {\n            fn.apply(el, args);\n          }\n\n          if (callbacks['*'] && event != '*')\n            { el.trigger.apply(el, ['*', event].concat(args)); }\n\n          return el\n        },\n        enumerable: false,\n        writable: false,\n        configurable: false\n      }\n    });\n\n    return el\n\n  };\n\n  /**\n   * Short alias for Object.getOwnPropertyDescriptor\n   */\n  function getPropDescriptor (o, k) {\n    return Object.getOwnPropertyDescriptor(o, k)\n  }\n\n  /**\n   * Check if passed argument is undefined\n   * @param   { * } value -\n   * @returns { Boolean } -\n   */\n  function isUndefined(value) {\n    return typeof value === T_UNDEF\n  }\n\n  /**\n   * Check whether object's property could be overridden\n   * @param   { Object }  obj - source object\n   * @param   { String }  key - object property\n   * @returns { Boolean } true if writable\n   */\n  function isWritable(obj, key) {\n    var descriptor = getPropDescriptor(obj, key);\n    return isUndefined(obj[key]) || descriptor && descriptor.writable\n  }\n\n  /**\n   * Extend any object with other properties\n   * @param   { Object } src - source object\n   * @returns { Object } the resulting extended object\n   *\n   * var obj = { foo: 'baz' }\n   * extend(obj, {bar: 'bar', foo: 'bar'})\n   * console.log(obj) => {bar: 'bar', foo: 'bar'}\n   *\n   */\n  function extend(src) {\n    var obj;\n    var i = 1;\n    var args = arguments;\n    var l = args.length;\n\n    for (; i < l; i++) {\n      if (obj = args[i]) {\n        for (var key in obj) {\n          // check if this property of the source object could be overridden\n          if (isWritable(src, key))\n            { src[key] = obj[key]; }\n        }\n      }\n    }\n    return src\n  }\n\n  /**\n   * Alias for Object.create\n   */\n  function create(src) {\n    return Object.create(src)\n  }\n\n  var settings = extend(create(brackets.settings), {\n    skipAnonymousTags: true,\n    // handle the auto updates on any DOM event\n    autoUpdate: true\n  })\n\n  /**\n   * Shorter and fast way to select multiple nodes in the DOM\n   * @param   { String } selector - DOM selector\n   * @param   { Object } ctx - DOM node where the targets of our search will is located\n   * @returns { Object } dom nodes found\n   */\n  function $$(selector, ctx) {\n    return [].slice.call((ctx || document).querySelectorAll(selector))\n  }\n\n  /**\n   * Create a document text node\n   * @returns { Object } create a text node to use as placeholder\n   */\n  function createDOMPlaceholder() {\n    return document.createTextNode('')\n  }\n\n  /**\n   * Toggle the visibility of any DOM node\n   * @param   { Object }  dom - DOM node we want to hide\n   * @param   { Boolean } show - do we want to show it?\n   */\n\n  function toggleVisibility(dom, show) {\n    dom.style.display = show ? '' : 'none';\n    dom.hidden = show ? false : true;\n  }\n\n  /**\n   * Get the value of any DOM attribute on a node\n   * @param   { Object } dom - DOM node we want to parse\n   * @param   { String } name - name of the attribute we want to get\n   * @returns { String | undefined } name of the node attribute whether it exists\n   */\n  function getAttribute(dom, name) {\n    return dom.getAttribute(name)\n  }\n\n  /**\n   * Remove any DOM attribute from a node\n   * @param   { Object } dom - DOM node we want to update\n   * @param   { String } name - name of the property we want to remove\n   */\n  function removeAttribute(dom, name) {\n    dom.removeAttribute(name);\n  }\n\n  /**\n   * Set the inner html of any DOM node SVGs included\n   * @param { Object } container - DOM node where we'll inject new html\n   * @param { String } html - html to inject\n   * @param { Boolean } isSvg - svg tags should be treated a bit differently\n   */\n  /* istanbul ignore next */\n  function setInnerHTML(container, html, isSvg) {\n    // innerHTML is not supported on svg tags so we neet to treat them differently\n    if (isSvg) {\n      var node = container.ownerDocument.importNode(\n        new DOMParser()\n          .parseFromString((\"<svg xmlns=\\\"\" + SVG_NS + \"\\\">\" + html + \"</svg>\"), 'application/xml')\n          .documentElement,\n        true\n      );\n\n      container.appendChild(node);\n    } else {\n      container.innerHTML = html;\n    }\n  }\n\n  /**\n   * Minimize risk: only zero or one _space_ between attr & value\n   * @param   { String }   html - html string we want to parse\n   * @param   { Function } fn - callback function to apply on any attribute found\n   */\n  function walkAttributes(html, fn) {\n    if (!html) { return }\n    var m;\n    while (m = RE_HTML_ATTRS.exec(html))\n      { fn(m[1].toLowerCase(), m[2] || m[3] || m[4]); }\n  }\n\n  /**\n   * Create a document fragment\n   * @returns { Object } document fragment\n   */\n  function createFragment() {\n    return document.createDocumentFragment()\n  }\n\n  /**\n   * Insert safely a tag to fix #1962 #1649\n   * @param   { HTMLElement } root - children container\n   * @param   { HTMLElement } curr - node to insert\n   * @param   { HTMLElement } next - node that should preceed the current node inserted\n   */\n  function safeInsert(root, curr, next) {\n    root.insertBefore(curr, next.parentNode && next);\n  }\n\n  /**\n   * Convert a style object to a string\n   * @param   { Object } style - style object we need to parse\n   * @returns { String } resulting css string\n   * @example\n   * styleObjectToString({ color: 'red', height: '10px'}) // => 'color: red; height: 10px'\n   */\n  function styleObjectToString(style) {\n    return Object.keys(style).reduce(function (acc, prop) {\n      return (acc + \" \" + prop + \": \" + (style[prop]) + \";\")\n    }, '')\n  }\n\n  /**\n   * Walk down recursively all the children tags starting dom node\n   * @param   { Object }   dom - starting node where we will start the recursion\n   * @param   { Function } fn - callback to transform the child node just found\n   * @param   { Object }   context - fn can optionally return an object, which is passed to children\n   */\n  function walkNodes(dom, fn, context) {\n    if (dom) {\n      var res = fn(dom, context);\n      var next;\n      // stop the recursion\n      if (res === false) { return }\n\n      dom = dom.firstChild;\n\n      while (dom) {\n        next = dom.nextSibling;\n        walkNodes(dom, fn, res);\n        dom = next;\n      }\n    }\n  }\n\n\n\n  var dom = /*#__PURE__*/Object.freeze({\n    $$: $$,\n    $: $,\n    createDOMPlaceholder: createDOMPlaceholder,\n    mkEl: makeElement,\n    setAttr: setAttribute,\n    toggleVisibility: toggleVisibility,\n    getAttr: getAttribute,\n    remAttr: removeAttribute,\n    setInnerHTML: setInnerHTML,\n    walkAttrs: walkAttributes,\n    createFrag: createFragment,\n    safeInsert: safeInsert,\n    styleObjectToString: styleObjectToString,\n    walkNodes: walkNodes\n  });\n\n  /**\n   * Check against the null and undefined values\n   * @param   { * }  value -\n   * @returns {Boolean} -\n   */\n  function isNil(value) {\n    return isUndefined(value) || value === null\n  }\n\n  /**\n   * Check if passed argument is empty. Different from falsy, because we dont consider 0 or false to be blank\n   * @param { * } value -\n   * @returns { Boolean } -\n   */\n  function isBlank(value) {\n    return isNil(value) || value === ''\n  }\n\n  /**\n   * Check if passed argument is a function\n   * @param   { * } value -\n   * @returns { Boolean } -\n   */\n  function isFunction(value) {\n    return typeof value === T_FUNCTION\n  }\n\n  /**\n   * Check if passed argument is an object, exclude null\n   * NOTE: use isObject(x) && !isArray(x) to excludes arrays.\n   * @param   { * } value -\n   * @returns { Boolean } -\n   */\n  function isObject(value) {\n    return value && typeof value === T_OBJECT // typeof null is 'object'\n  }\n\n  /**\n   * Check if a DOM node is an svg tag or part of an svg\n   * @param   { HTMLElement }  el - node we want to test\n   * @returns {Boolean} true if it's an svg node\n   */\n  function isSvg(el) {\n    var owner = el.ownerSVGElement;\n    return !!owner || owner === null\n  }\n\n  /**\n   * Check if passed argument is a kind of array\n   * @param   { * } value -\n   * @returns { Boolean } -\n   */\n  function isArray(value) {\n    return Array.isArray(value) || value instanceof Array\n  }\n\n  /**\n   * Check if the passed argument is a boolean attribute\n   * @param   { String } value -\n   * @returns { Boolean } -\n   */\n  function isBoolAttr(value) {\n    return RE_BOOL_ATTRS.test(value)\n  }\n\n  /**\n   * Check if passed argument is a string\n   * @param   { * } value -\n   * @returns { Boolean } -\n   */\n  function isString(value) {\n    return typeof value === T_STRING\n  }\n\n\n\n  var check = /*#__PURE__*/Object.freeze({\n    isBlank: isBlank,\n    isFunction: isFunction,\n    isObject: isObject,\n    isSvg: isSvg,\n    isWritable: isWritable,\n    isArray: isArray,\n    isBoolAttr: isBoolAttr,\n    isNil: isNil,\n    isString: isString,\n    isUndefined: isUndefined\n  });\n\n  /**\n   * Check whether an array contains an item\n   * @param   { Array } array - target array\n   * @param   { * } item - item to test\n   * @returns { Boolean } -\n   */\n  function contains(array, item) {\n    return array.indexOf(item) !== -1\n  }\n\n  /**\n   * Specialized function for looping an array-like collection with `each={}`\n   * @param   { Array } list - collection of items\n   * @param   {Function} fn - callback function\n   * @returns { Array } the array looped\n   */\n  function each(list, fn) {\n    var len = list ? list.length : 0;\n    var i = 0;\n    for (; i < len; i++) { fn(list[i], i); }\n    return list\n  }\n\n  /**\n   * Faster String startsWith alternative\n   * @param   { String } str - source string\n   * @param   { String } value - test string\n   * @returns { Boolean } -\n   */\n  function startsWith(str, value) {\n    return str.slice(0, value.length) === value\n  }\n\n  /**\n   * Function returning always a unique identifier\n   * @returns { Number } - number from 0...n\n   */\n  var uid = (function uid() {\n    var i = -1;\n    return function () { return ++i; }\n  })()\n\n  /**\n   * Helper function to set an immutable property\n   * @param   { Object } el - object where the new property will be set\n   * @param   { String } key - object key where the new property will be stored\n   * @param   { * } value - value of the new property\n   * @param   { Object } options - set the propery overriding the default options\n   * @returns { Object } - the initial object\n   */\n  function define(el, key, value, options) {\n    Object.defineProperty(el, key, extend({\n      value: value,\n      enumerable: false,\n      writable: false,\n      configurable: true\n    }, options));\n    return el\n  }\n\n  /**\n   * Convert a string containing dashes to camel case\n   * @param   { String } str - input string\n   * @returns { String } my-string -> myString\n   */\n  function toCamel(str) {\n    return str.replace(/-(\\w)/g, function (_, c) { return c.toUpperCase(); })\n  }\n\n  /**\n   * Warn a message via console\n   * @param   {String} message - warning message\n   */\n  function warn(message) {\n    if (console && console.warn) { console.warn(message); }\n  }\n\n\n\n  var misc = /*#__PURE__*/Object.freeze({\n    contains: contains,\n    each: each,\n    getPropDescriptor: getPropDescriptor,\n    startsWith: startsWith,\n    uid: uid,\n    defineProperty: define,\n    objectCreate: create,\n    extend: extend,\n    toCamel: toCamel,\n    warn: warn\n  });\n\n  /**\n   * Set the property of an object for a given key. If something already\n   * exists there, then it becomes an array containing both the old and new value.\n   * @param { Object } obj - object on which to set the property\n   * @param { String } key - property name\n   * @param { Object } value - the value of the property to be set\n   * @param { Boolean } ensureArray - ensure that the property remains an array\n   * @param { Number } index - add the new item in a certain array position\n   */\n  function arrayishAdd(obj, key, value, ensureArray, index) {\n    var dest = obj[key];\n    var isArr = isArray(dest);\n    var hasIndex = !isUndefined(index);\n\n    if (dest && dest === value) { return }\n\n    // if the key was never set, set it once\n    if (!dest && ensureArray) { obj[key] = [value]; }\n    else if (!dest) { obj[key] = value; }\n    // if it was an array and not yet set\n    else {\n      if (isArr) {\n        var oldIndex = dest.indexOf(value);\n        // this item never changed its position\n        if (oldIndex === index) { return }\n        // remove the item from its old position\n        if (oldIndex !== -1) { dest.splice(oldIndex, 1); }\n        // move or add the item\n        if (hasIndex) {\n          dest.splice(index, 0, value);\n        } else {\n          dest.push(value);\n        }\n      } else { obj[key] = [dest, value]; }\n    }\n  }\n\n  /**\n   * Detect the tag implementation by a DOM node\n   * @param   { Object } dom - DOM node we need to parse to get its tag implementation\n   * @returns { Object } it returns an object containing the implementation of a custom tag (template and boot function)\n   */\n  function get(dom) {\n    return dom.tagName && __TAG_IMPL[getAttribute(dom, IS_DIRECTIVE) ||\n      getAttribute(dom, IS_DIRECTIVE) || dom.tagName.toLowerCase()]\n  }\n\n  /**\n   * Get the tag name of any DOM node\n   * @param   { Object } dom - DOM node we want to parse\n   * @param   { Boolean } skipDataIs - hack to ignore the data-is attribute when attaching to parent\n   * @returns { String } name to identify this dom node in riot\n   */\n  function getName(dom, skipDataIs) {\n    var child = get(dom);\n    var namedTag = !skipDataIs && getAttribute(dom, IS_DIRECTIVE);\n    return namedTag && !tmpl.hasExpr(namedTag) ?\n      namedTag : child ? child.name : dom.tagName.toLowerCase()\n  }\n\n  /**\n   * Return a temporary context containing also the parent properties\n   * @this Tag\n   * @param { Tag } - temporary tag context containing all the parent properties\n   */\n  function inheritParentProps() {\n    if (this.parent) { return extend(create(this), this.parent) }\n    return this\n  }\n\n  /*\n    Includes hacks needed for the Internet Explorer version 9 and below\n    See: http://kangax.github.io/compat-table/es5/#ie8\n         http://codeplanet.io/dropping-ie8/\n  */\n\n  var\n    reHasYield  = /<yield\\b/i,\n    reYieldAll  = /<yield\\s*(?:\\/>|>([\\S\\s]*?)<\\/yield\\s*>|>)/ig,\n    reYieldSrc  = /<yield\\s+to=['\"]([^'\">]*)['\"]\\s*>([\\S\\s]*?)<\\/yield\\s*>/ig,\n    reYieldDest = /<yield\\s+from=['\"]?([-\\w]+)['\"]?\\s*(?:\\/>|>([\\S\\s]*?)<\\/yield\\s*>)/ig,\n    rootEls = { tr: 'tbody', th: 'tr', td: 'tr', col: 'colgroup' },\n    tblTags = IE_VERSION && IE_VERSION < 10 ? RE_SPECIAL_TAGS : RE_SPECIAL_TAGS_NO_OPTION,\n    GENERIC = 'div',\n    SVG = 'svg';\n\n\n  /*\n    Creates the root element for table or select child elements:\n    tr/th/td/thead/tfoot/tbody/caption/col/colgroup/option/optgroup\n  */\n  function specialTags(el, tmpl, tagName) {\n\n    var\n      select = tagName[0] === 'o',\n      parent = select ? 'select>' : 'table>';\n\n    // trim() is important here, this ensures we don't have artifacts,\n    // so we can check if we have only one element inside the parent\n    el.innerHTML = '<' + parent + tmpl.trim() + '</' + parent;\n    parent = el.firstChild;\n\n    // returns the immediate parent if tr/th/td/col is the only element, if not\n    // returns the whole tree, as this can include additional elements\n    /* istanbul ignore next */\n    if (select) {\n      parent.selectedIndex = -1;  // for IE9, compatible w/current riot behavior\n    } else {\n      // avoids insertion of cointainer inside container (ex: tbody inside tbody)\n      var tname = rootEls[tagName];\n      if (tname && parent.childElementCount === 1) { parent = $(tname, parent); }\n    }\n    return parent\n  }\n\n  /*\n    Replace the yield tag from any tag template with the innerHTML of the\n    original tag in the page\n  */\n  function replaceYield(tmpl, html) {\n    // do nothing if no yield\n    if (!reHasYield.test(tmpl)) { return tmpl }\n\n    // be careful with #1343 - string on the source having `$1`\n    var src = {};\n\n    html = html && html.replace(reYieldSrc, function (_, ref, text) {\n      src[ref] = src[ref] || text;   // preserve first definition\n      return ''\n    }).trim();\n\n    return tmpl\n      .replace(reYieldDest, function (_, ref, def) {  // yield with from - to attrs\n        return src[ref] || def || ''\n      })\n      .replace(reYieldAll, function (_, def) {        // yield without any \"from\"\n        return html || def || ''\n      })\n  }\n\n  /**\n   * Creates a DOM element to wrap the given content. Normally an `DIV`, but can be\n   * also a `TABLE`, `SELECT`, `TBODY`, `TR`, or `COLGROUP` element.\n   *\n   * @param   { String } tmpl  - The template coming from the custom tag definition\n   * @param   { String } html - HTML content that comes from the DOM element where you\n   *           will mount the tag, mostly the original tag in the page\n   * @param   { Boolean } isSvg - true if the root node is an svg\n   * @returns { HTMLElement } DOM element with _tmpl_ merged through `YIELD` with the _html_.\n   */\n  function mkdom(tmpl, html, isSvg) {\n    var match   = tmpl && tmpl.match(/^\\s*<([-\\w]+)/);\n    var  tagName = match && match[1].toLowerCase();\n    var el = makeElement(isSvg ? SVG : GENERIC);\n\n    // replace all the yield tags with the tag inner html\n    tmpl = replaceYield(tmpl, html);\n\n    /* istanbul ignore next */\n    if (tblTags.test(tagName))\n      { el = specialTags(el, tmpl, tagName); }\n    else\n      { setInnerHTML(el, tmpl, isSvg); }\n\n    return el\n  }\n\n  var EVENT_ATTR_RE = /^on/;\n\n  /**\n   * True if the event attribute starts with 'on'\n   * @param   { String } attribute - event attribute\n   * @returns { Boolean }\n   */\n  function isEventAttribute(attribute) {\n    return EVENT_ATTR_RE.test(attribute)\n  }\n\n  /**\n   * Loop backward all the parents tree to detect the first custom parent tag\n   * @param   { Object } tag - a Tag instance\n   * @returns { Object } the instance of the first custom parent tag found\n   */\n  function getImmediateCustomParent(tag) {\n    var ptag = tag;\n    while (ptag.__.isAnonymous) {\n      if (!ptag.parent) { break }\n      ptag = ptag.parent;\n    }\n    return ptag\n  }\n\n  /**\n   * Trigger DOM events\n   * @param   { HTMLElement } dom - dom element target of the event\n   * @param   { Function } handler - user function\n   * @param   { Object } e - event object\n   */\n  function handleEvent(dom, handler, e) {\n    var ptag = this.__.parent;\n    var item = this.__.item;\n\n    if (!item)\n      { while (ptag && !item) {\n        item = ptag.__.item;\n        ptag = ptag.__.parent;\n      } }\n\n    // override the event properties\n    /* istanbul ignore next */\n    if (isWritable(e, 'currentTarget')) { e.currentTarget = dom; }\n    /* istanbul ignore next */\n    if (isWritable(e, 'target')) { e.target = e.srcElement; }\n    /* istanbul ignore next */\n    if (isWritable(e, 'which')) { e.which = e.charCode || e.keyCode; }\n\n    e.item = item;\n\n    handler.call(this, e);\n\n    // avoid auto updates\n    if (!settings.autoUpdate) { return }\n\n    if (!e.preventUpdate) {\n      var p = getImmediateCustomParent(this);\n      // fixes #2083\n      if (p.isMounted) { p.update(); }\n    }\n  }\n\n  /**\n   * Attach an event to a DOM node\n   * @param { String } name - event name\n   * @param { Function } handler - event callback\n   * @param { Object } dom - dom node\n   * @param { Tag } tag - tag instance\n   */\n  function setEventHandler(name, handler, dom, tag) {\n    var eventName;\n    var cb = handleEvent.bind(tag, dom, handler);\n\n    // avoid to bind twice the same event\n    // possible fix for #2332\n    dom[name] = null;\n\n    // normalize event name\n    eventName = name.replace(RE_EVENTS_PREFIX, '');\n\n    // cache the listener into the listeners array\n    if (!contains(tag.__.listeners, dom)) { tag.__.listeners.push(dom); }\n    if (!dom[RIOT_EVENTS_KEY]) { dom[RIOT_EVENTS_KEY] = {}; }\n    if (dom[RIOT_EVENTS_KEY][name]) { dom.removeEventListener(eventName, dom[RIOT_EVENTS_KEY][name]); }\n\n    dom[RIOT_EVENTS_KEY][name] = cb;\n    dom.addEventListener(eventName, cb, false);\n  }\n\n  /**\n   * Create a new child tag including it correctly into its parent\n   * @param   { Object } child - child tag implementation\n   * @param   { Object } opts - tag options containing the DOM node where the tag will be mounted\n   * @param   { String } innerHTML - inner html of the child node\n   * @param   { Object } parent - instance of the parent tag including the child custom tag\n   * @returns { Object } instance of the new child tag just created\n   */\n  function initChild(child, opts, innerHTML, parent) {\n    var tag = createTag(child, opts, innerHTML);\n    var tagName = opts.tagName || getName(opts.root, true);\n    var ptag = getImmediateCustomParent(parent);\n    // fix for the parent attribute in the looped elements\n    define(tag, 'parent', ptag);\n    // store the real parent tag\n    // in some cases this could be different from the custom parent tag\n    // for example in nested loops\n    tag.__.parent = parent;\n\n    // add this tag to the custom parent tag\n    arrayishAdd(ptag.tags, tagName, tag);\n\n    // and also to the real parent tag\n    if (ptag !== parent)\n      { arrayishAdd(parent.tags, tagName, tag); }\n\n    return tag\n  }\n\n  /**\n   * Removes an item from an object at a given key. If the key points to an array,\n   * then the item is just removed from the array.\n   * @param { Object } obj - object on which to remove the property\n   * @param { String } key - property name\n   * @param { Object } value - the value of the property to be removed\n   * @param { Boolean } ensureArray - ensure that the property remains an array\n  */\n  function arrayishRemove(obj, key, value, ensureArray) {\n    if (isArray(obj[key])) {\n      var index = obj[key].indexOf(value);\n      if (index !== -1) { obj[key].splice(index, 1); }\n      if (!obj[key].length) { delete obj[key]; }\n      else if (obj[key].length === 1 && !ensureArray) { obj[key] = obj[key][0]; }\n    } else if (obj[key] === value)\n      { delete obj[key]; } // otherwise just delete the key\n  }\n\n  /**\n   * Adds the elements for a virtual tag\n   * @this Tag\n   * @param { Node } src - the node that will do the inserting or appending\n   * @param { Tag } target - only if inserting, insert before this tag's first child\n   */\n  function makeVirtual(src, target) {\n    var this$1 = this;\n\n    var head = createDOMPlaceholder();\n    var tail = createDOMPlaceholder();\n    var frag = createFragment();\n    var sib;\n    var el;\n\n    this.root.insertBefore(head, this.root.firstChild);\n    this.root.appendChild(tail);\n\n    this.__.head = el = head;\n    this.__.tail = tail;\n\n    while (el) {\n      sib = el.nextSibling;\n      frag.appendChild(el);\n      this$1.__.virts.push(el); // hold for unmounting\n      el = sib;\n    }\n\n    if (target)\n      { src.insertBefore(frag, target.__.head); }\n    else\n      { src.appendChild(frag); }\n  }\n\n  /**\n   * makes a tag virtual and replaces a reference in the dom\n   * @this Tag\n   * @param { tag } the tag to make virtual\n   * @param { ref } the dom reference location\n   */\n  function makeReplaceVirtual(tag, ref) {\n    if (!ref.parentNode) { return }\n    var frag = createFragment();\n    makeVirtual.call(tag, frag);\n    ref.parentNode.replaceChild(frag, ref);\n  }\n\n  /**\n   * Update dynamically created data-is tags with changing expressions\n   * @param { Object } expr - expression tag and expression info\n   * @param { Tag }    parent - parent for tag creation\n   * @param { String } tagName - tag implementation we want to use\n   */\n  function updateDataIs(expr, parent, tagName) {\n    var tag = expr.tag || expr.dom._tag;\n    var ref;\n\n    var ref$1 = tag ? tag.__ : {};\n    var head = ref$1.head;\n    var isVirtual = expr.dom.tagName === 'VIRTUAL';\n\n    if (tag && expr.tagName === tagName) {\n      tag.update();\n      return\n    }\n\n    // sync _parent to accommodate changing tagnames\n    if (tag) {\n      // need placeholder before unmount\n      if(isVirtual) {\n        ref = createDOMPlaceholder();\n        head.parentNode.insertBefore(ref, head);\n      }\n\n      tag.unmount(true);\n    }\n\n    // unable to get the tag name\n    if (!isString(tagName)) { return }\n\n    expr.impl = __TAG_IMPL[tagName];\n\n    // unknown implementation\n    if (!expr.impl) { return }\n\n    expr.tag = tag = initChild(\n      expr.impl, {\n        root: expr.dom,\n        parent: parent,\n        tagName: tagName\n      },\n      expr.dom.innerHTML,\n      parent\n    );\n\n    each(expr.attrs, function (a) { return setAttribute(tag.root, a.name, a.value); });\n    expr.tagName = tagName;\n    tag.mount();\n\n    // root exist first time, after use placeholder\n    if (isVirtual) { makeReplaceVirtual(tag, ref || tag.root); }\n\n    // parent is the placeholder tag, not the dynamic tag so clean up\n    parent.__.onUnmount = function () {\n      var delName = tag.opts.dataIs;\n      arrayishRemove(tag.parent.tags, delName, tag);\n      arrayishRemove(tag.__.parent.tags, delName, tag);\n      tag.unmount();\n    };\n  }\n\n  /**\n   * Nomalize any attribute removing the \"riot-\" prefix\n   * @param   { String } attrName - original attribute name\n   * @returns { String } valid html attribute name\n   */\n  function normalizeAttrName(attrName) {\n    if (!attrName) { return null }\n    attrName = attrName.replace(ATTRS_PREFIX, '');\n    if (CASE_SENSITIVE_ATTRIBUTES[attrName]) { attrName = CASE_SENSITIVE_ATTRIBUTES[attrName]; }\n    return attrName\n  }\n\n  /**\n   * Update on single tag expression\n   * @this Tag\n   * @param { Object } expr - expression logic\n   * @returns { undefined }\n   */\n  function updateExpression(expr) {\n    if (this.root && getAttribute(this.root,'virtualized')) { return }\n\n    var dom = expr.dom;\n    // remove the riot- prefix\n    var attrName = normalizeAttrName(expr.attr);\n    var isToggle = contains([SHOW_DIRECTIVE, HIDE_DIRECTIVE], attrName);\n    var isVirtual = expr.root && expr.root.tagName === 'VIRTUAL';\n    var ref = this.__;\n    var isAnonymous = ref.isAnonymous;\n    var parent = dom && (expr.parent || dom.parentNode);\n    // detect the style attributes\n    var isStyleAttr = attrName === 'style';\n    var isClassAttr = attrName === 'class';\n\n    var value;\n\n    // if it's a tag we could totally skip the rest\n    if (expr._riot_id) {\n      if (expr.__.wasCreated) {\n        expr.update();\n      // if it hasn't been mounted yet, do that now.\n      } else {\n        expr.mount();\n        if (isVirtual) {\n          makeReplaceVirtual(expr, expr.root);\n        }\n      }\n      return\n    }\n\n    // if this expression has the update method it means it can handle the DOM changes by itself\n    if (expr.update) { return expr.update() }\n\n    var context = isToggle && !isAnonymous ? inheritParentProps.call(this) : this;\n\n    // ...it seems to be a simple expression so we try to calculate its value\n    value = tmpl(expr.expr, context);\n\n    var hasValue = !isBlank(value);\n    var isObj = isObject(value);\n\n    // convert the style/class objects to strings\n    if (isObj) {\n      if (isClassAttr) {\n        value = tmpl(JSON.stringify(value), this);\n      } else if (isStyleAttr) {\n        value = styleObjectToString(value);\n      }\n    }\n\n    // remove original attribute\n    if (expr.attr && (!expr.wasParsedOnce || !hasValue || value === false)) {\n      // remove either riot-* attributes or just the attribute name\n      removeAttribute(dom, getAttribute(dom, expr.attr) ? expr.attr : attrName);\n    }\n\n    // for the boolean attributes we don't need the value\n    // we can convert it to checked=true to checked=checked\n    if (expr.bool) { value = value ? attrName : false; }\n    if (expr.isRtag) { return updateDataIs(expr, this, value) }\n    if (expr.wasParsedOnce && expr.value === value) { return }\n\n    // update the expression value\n    expr.value = value;\n    expr.wasParsedOnce = true;\n\n    // if the value is an object (and it's not a style or class attribute) we can not do much more with it\n    if (isObj && !isClassAttr && !isStyleAttr && !isToggle) { return }\n    // avoid to render undefined/null values\n    if (!hasValue) { value = ''; }\n\n    // textarea and text nodes have no attribute name\n    if (!attrName) {\n      // about #815 w/o replace: the browser converts the value to a string,\n      // the comparison by \"==\" does too, but not in the server\n      value += '';\n      // test for parent avoids error with invalid assignment to nodeValue\n      if (parent) {\n        // cache the parent node because somehow it will become null on IE\n        // on the next iteration\n        expr.parent = parent;\n        if (parent.tagName === 'TEXTAREA') {\n          parent.value = value;                    // #1113\n          if (!IE_VERSION) { dom.nodeValue = value; }  // #1625 IE throws here, nodeValue\n        }                                         // will be available on 'updated'\n        else { dom.nodeValue = value; }\n      }\n      return\n    }\n\n    switch (true) {\n    // handle events binding\n    case isFunction(value):\n      if (isEventAttribute(attrName)) {\n        setEventHandler(attrName, value, dom, this);\n      }\n      break\n    // show / hide\n    case isToggle:\n      toggleVisibility(dom, attrName === HIDE_DIRECTIVE ? !value : value);\n      break\n    // handle attributes\n    default:\n      if (expr.bool) {\n        dom[attrName] = value;\n      }\n\n      if (attrName === 'value' && dom.value !== value) {\n        dom.value = value;\n      } else if (hasValue && value !== false) {\n        setAttribute(dom, attrName, value);\n      }\n\n      // make sure that in case of style changes\n      // the element stays hidden\n      if (isStyleAttr && dom.hidden) { toggleVisibility(dom, false); }\n    }\n  }\n\n  /**\n   * Update all the expressions in a Tag instance\n   * @this Tag\n   * @param { Array } expressions - expression that must be re evaluated\n   */\n  function update(expressions) {\n    each(expressions, updateExpression.bind(this));\n  }\n\n  /**\n   * We need to update opts for this tag. That requires updating the expressions\n   * in any attributes on the tag, and then copying the result onto opts.\n   * @this Tag\n   * @param   {Boolean} isLoop - is it a loop tag?\n   * @param   { Tag }  parent - parent tag node\n   * @param   { Boolean }  isAnonymous - is it a tag without any impl? (a tag not registered)\n   * @param   { Object }  opts - tag options\n   * @param   { Array }  instAttrs - tag attributes array\n   */\n  function updateOpts(isLoop, parent, isAnonymous, opts, instAttrs) {\n    // isAnonymous `each` tags treat `dom` and `root` differently. In this case\n    // (and only this case) we don't need to do updateOpts, because the regular parse\n    // will update those attrs. Plus, isAnonymous tags don't need opts anyway\n    if (isLoop && isAnonymous) { return }\n    var ctx = isLoop ? inheritParentProps.call(this) : parent || this;\n\n    each(instAttrs, function (attr) {\n      if (attr.expr) { updateExpression.call(ctx, attr.expr); }\n      // normalize the attribute names\n      opts[toCamel(attr.name).replace(ATTRS_PREFIX, '')] = attr.expr ? attr.expr.value : attr.value;\n    });\n  }\n\n  /**\n   * Update the tag expressions and options\n   * @param { Tag } tag - tag object\n   * @param { * } data - data we want to use to extend the tag properties\n   * @param { Array } expressions - component expressions array\n   * @returns { Tag } the current tag instance\n   */\n  function componentUpdate(tag, data, expressions) {\n    var __ = tag.__;\n    var nextOpts = {};\n    var canTrigger = tag.isMounted && !__.skipAnonymous;\n\n    // inherit properties from the parent tag\n    if (__.isAnonymous && __.parent) { extend(tag, __.parent); }\n    extend(tag, data);\n\n    updateOpts.apply(tag, [__.isLoop, __.parent, __.isAnonymous, nextOpts, __.instAttrs]);\n\n    if (\n      canTrigger &&\n      tag.isMounted &&\n      isFunction(tag.shouldUpdate) && !tag.shouldUpdate(data, nextOpts)\n    ) {\n      return tag\n    }\n\n    extend(tag.opts, nextOpts);\n\n    if (canTrigger) { tag.trigger('update', data); }\n    update.call(tag, expressions);\n    if (canTrigger) { tag.trigger('updated'); }\n\n    return tag\n  }\n\n  /**\n   * Get selectors for tags\n   * @param   { Array } tags - tag names to select\n   * @returns { String } selector\n   */\n  function query(tags) {\n    // select all tags\n    if (!tags) {\n      var keys = Object.keys(__TAG_IMPL);\n      return keys + query(keys)\n    }\n\n    return tags\n      .filter(function (t) { return !/[^-\\w]/.test(t); })\n      .reduce(function (list, t) {\n        var name = t.trim().toLowerCase();\n        return list + \",[\" + IS_DIRECTIVE + \"=\\\"\" + name + \"\\\"]\"\n      }, '')\n  }\n\n  /**\n   * Another way to create a riot tag a bit more es6 friendly\n   * @param { HTMLElement } el - tag DOM selector or DOM node/s\n   * @param { Object } opts - tag logic\n   * @returns { Tag } new riot tag instance\n   */\n  function Tag(el, opts) {\n    // get the tag properties from the class constructor\n    var ref = this;\n    var name = ref.name;\n    var tmpl = ref.tmpl;\n    var css = ref.css;\n    var attrs = ref.attrs;\n    var onCreate = ref.onCreate;\n    // register a new tag and cache the class prototype\n    if (!__TAG_IMPL[name]) {\n      tag(name, tmpl, css, attrs, onCreate);\n      // cache the class constructor\n      __TAG_IMPL[name].class = this.constructor;\n    }\n\n    // mount the tag using the class instance\n    mount$1(el, name, opts, this);\n    // inject the component css\n    if (css) { styleManager.inject(); }\n\n    return this\n  }\n\n  /**\n   * Create a new riot tag implementation\n   * @param   { String }   name - name/id of the new riot tag\n   * @param   { String }   tmpl - tag template\n   * @param   { String }   css - custom tag css\n   * @param   { String }   attrs - root tag attributes\n   * @param   { Function } fn - user function\n   * @returns { String } name/id of the tag just created\n   */\n  function tag(name, tmpl, css, attrs, fn) {\n    if (isFunction(attrs)) {\n      fn = attrs;\n\n      if (/^[\\w-]+\\s?=/.test(css)) {\n        attrs = css;\n        css = '';\n      } else\n        { attrs = ''; }\n    }\n\n    if (css) {\n      if (isFunction(css))\n        { fn = css; }\n      else\n        { styleManager.add(css, name); }\n    }\n\n    name = name.toLowerCase();\n    __TAG_IMPL[name] = { name: name, tmpl: tmpl, attrs: attrs, fn: fn };\n\n    return name\n  }\n\n  /**\n   * Create a new riot tag implementation (for use by the compiler)\n   * @param   { String }   name - name/id of the new riot tag\n   * @param   { String }   tmpl - tag template\n   * @param   { String }   css - custom tag css\n   * @param   { String }   attrs - root tag attributes\n   * @param   { Function } fn - user function\n   * @returns { String } name/id of the tag just created\n   */\n  function tag2(name, tmpl, css, attrs, fn) {\n    if (css) { styleManager.add(css, name); }\n\n    __TAG_IMPL[name] = { name: name, tmpl: tmpl, attrs: attrs, fn: fn };\n\n    return name\n  }\n\n  /**\n   * Mount a tag using a specific tag implementation\n   * @param   { * } selector - tag DOM selector or DOM node/s\n   * @param   { String } tagName - tag implementation name\n   * @param   { Object } opts - tag logic\n   * @returns { Array } new tags instances\n   */\n  function mount(selector, tagName, opts) {\n    var tags = [];\n    var elem, allTags;\n\n    function pushTagsTo(root) {\n      if (root.tagName) {\n        var riotTag = getAttribute(root, IS_DIRECTIVE), tag;\n\n        // have tagName? force riot-tag to be the same\n        if (tagName && riotTag !== tagName) {\n          riotTag = tagName;\n          setAttribute(root, IS_DIRECTIVE, tagName);\n        }\n\n        tag = mount$1(\n          root,\n          riotTag || root.tagName.toLowerCase(),\n          isFunction(opts) ? opts() : opts\n        );\n\n        if (tag)\n          { tags.push(tag); }\n      } else if (root.length)\n        { each(root, pushTagsTo); } // assume nodeList\n    }\n\n    // inject styles into DOM\n    styleManager.inject();\n\n    if (isObject(tagName) || isFunction(tagName)) {\n      opts = tagName;\n      tagName = 0;\n    }\n\n    // crawl the DOM to find the tag\n    if (isString(selector)) {\n      selector = selector === '*' ?\n        // select all registered tags\n        // & tags found with the riot-tag attribute set\n        allTags = query() :\n        // or just the ones named like the selector\n        selector + query(selector.split(/, */));\n\n      // make sure to pass always a selector\n      // to the querySelectorAll function\n      elem = selector ? $$(selector) : [];\n    }\n    else\n      // probably you have passed already a tag or a NodeList\n      { elem = selector; }\n\n    // select all the registered and mount them inside their root elements\n    if (tagName === '*') {\n      // get all custom tags\n      tagName = allTags || query();\n      // if the root els it's just a single tag\n      if (elem.tagName)\n        { elem = $$(tagName, elem); }\n      else {\n        // select all the children for all the different root elements\n        var nodeList = [];\n\n        each(elem, function (_el) { return nodeList.push($$(tagName, _el)); });\n\n        elem = nodeList;\n      }\n      // get rid of the tagName\n      tagName = 0;\n    }\n\n    pushTagsTo(elem);\n\n    return tags\n  }\n\n  // Create a mixin that could be globally shared across all the tags\n  var mixins = {};\n  var globals = mixins[GLOBAL_MIXIN] = {};\n  var mixins_id = 0;\n\n  /**\n   * Create/Return a mixin by its name\n   * @param   { String }  name - mixin name (global mixin if object)\n   * @param   { Object }  mix - mixin logic\n   * @param   { Boolean } g - is global?\n   * @returns { Object }  the mixin logic\n   */\n  function mixin(name, mix, g) {\n    // Unnamed global\n    if (isObject(name)) {\n      mixin((\"__\" + (mixins_id++) + \"__\"), name, true);\n      return\n    }\n\n    var store = g ? globals : mixins;\n\n    // Getter\n    if (!mix) {\n      if (isUndefined(store[name]))\n        { throw new Error((\"Unregistered mixin: \" + name)) }\n\n      return store[name]\n    }\n\n    // Setter\n    store[name] = isFunction(mix) ?\n      extend(mix.prototype, store[name] || {}) && mix :\n      extend(store[name] || {}, mix);\n  }\n\n  /**\n   * Update all the tags instances created\n   * @returns { Array } all the tags instances\n   */\n  function update$1() {\n    return each(__TAGS_CACHE, function (tag) { return tag.update(); })\n  }\n\n  function unregister(name) {\n    styleManager.remove(name);\n    return delete __TAG_IMPL[name]\n  }\n\n  var version = 'v3.12.0';\n\n  var core = /*#__PURE__*/Object.freeze({\n    Tag: Tag,\n    tag: tag,\n    tag2: tag2,\n    mount: mount,\n    mixin: mixin,\n    update: update$1,\n    unregister: unregister,\n    version: version\n  });\n\n  /**\n   * Add a mixin to this tag\n   * @returns { Tag } the current tag instance\n   */\n  function componentMixin(tag$$1) {\n    var mixins = [], len = arguments.length - 1;\n    while ( len-- > 0 ) mixins[ len ] = arguments[ len + 1 ];\n\n    each(mixins, function (mix) {\n      var instance;\n      var obj;\n      var props = [];\n\n      // properties blacklisted and will not be bound to the tag instance\n      var propsBlacklist = ['init', '__proto__'];\n\n      mix = isString(mix) ? mixin(mix) : mix;\n\n      // check if the mixin is a function\n      if (isFunction(mix)) {\n        // create the new mixin instance\n        instance = new mix();\n      } else { instance = mix; }\n\n      var proto = Object.getPrototypeOf(instance);\n\n      // build multilevel prototype inheritance chain property list\n      do { props = props.concat(Object.getOwnPropertyNames(obj || instance)); }\n      while (obj = Object.getPrototypeOf(obj || instance))\n\n      // loop the keys in the function prototype or the all object keys\n      each(props, function (key) {\n        // bind methods to tag\n        // allow mixins to override other properties/parent mixins\n        if (!contains(propsBlacklist, key)) {\n          // check for getters/setters\n          var descriptor = getPropDescriptor(instance, key) || getPropDescriptor(proto, key);\n          var hasGetterSetter = descriptor && (descriptor.get || descriptor.set);\n\n          // apply method only if it does not already exist on the instance\n          if (!tag$$1.hasOwnProperty(key) && hasGetterSetter) {\n            Object.defineProperty(tag$$1, key, descriptor);\n          } else {\n            tag$$1[key] = isFunction(instance[key]) ?\n              instance[key].bind(tag$$1) :\n              instance[key];\n          }\n        }\n      });\n\n      // init method will be called automatically\n      if (instance.init)\n        { instance.init.bind(tag$$1)(tag$$1.opts); }\n    });\n\n    return tag$$1\n  }\n\n  /**\n   * Move the position of a custom tag in its parent tag\n   * @this Tag\n   * @param   { String } tagName - key where the tag was stored\n   * @param   { Number } newPos - index where the new tag will be stored\n   */\n  function moveChild(tagName, newPos) {\n    var parent = this.parent;\n    var tags;\n    // no parent no move\n    if (!parent) { return }\n\n    tags = parent.tags[tagName];\n\n    if (isArray(tags))\n      { tags.splice(newPos, 0, tags.splice(tags.indexOf(this), 1)[0]); }\n    else { arrayishAdd(parent.tags, tagName, this); }\n  }\n\n  /**\n   * Move virtual tag and all child nodes\n   * @this Tag\n   * @param { Node } src  - the node that will do the inserting\n   * @param { Tag } target - insert before this tag's first child\n   */\n  function moveVirtual(src, target) {\n    var this$1 = this;\n\n    var el = this.__.head;\n    var sib;\n    var frag = createFragment();\n\n    while (el) {\n      sib = el.nextSibling;\n      frag.appendChild(el);\n      el = sib;\n      if (el === this$1.__.tail) {\n        frag.appendChild(el);\n        src.insertBefore(frag, target.__.head);\n        break\n      }\n    }\n  }\n\n  /**\n   * Convert the item looped into an object used to extend the child tag properties\n   * @param   { Object } expr - object containing the keys used to extend the children tags\n   * @param   { * } key - value to assign to the new object returned\n   * @param   { * } val - value containing the position of the item in the array\n   * @returns { Object } - new object containing the values of the original item\n   *\n   * The variables 'key' and 'val' are arbitrary.\n   * They depend on the collection type looped (Array, Object)\n   * and on the expression used on the each tag\n   *\n   */\n  function mkitem(expr, key, val) {\n    var item = {};\n    item[expr.key] = key;\n    if (expr.pos) { item[expr.pos] = val; }\n    return item\n  }\n\n  /**\n   * Unmount the redundant tags\n   * @param   { Array } items - array containing the current items to loop\n   * @param   { Array } tags - array containing all the children tags\n   */\n  function unmountRedundant(items, tags, filteredItemsCount) {\n    var i = tags.length;\n    var j = items.length - filteredItemsCount;\n\n    while (i > j) {\n      i--;\n      remove.apply(tags[i], [tags, i]);\n    }\n  }\n\n\n  /**\n   * Remove a child tag\n   * @this Tag\n   * @param   { Array } tags - tags collection\n   * @param   { Number } i - index of the tag to remove\n   */\n  function remove(tags, i) {\n    tags.splice(i, 1);\n    this.unmount();\n    arrayishRemove(this.parent, this, this.__.tagName, true);\n  }\n\n  /**\n   * Move the nested custom tags in non custom loop tags\n   * @this Tag\n   * @param   { Number } i - current position of the loop tag\n   */\n  function moveNestedTags(i) {\n    var this$1 = this;\n\n    each(Object.keys(this.tags), function (tagName) {\n      moveChild.apply(this$1.tags[tagName], [tagName, i]);\n    });\n  }\n\n  /**\n   * Move a child tag\n   * @this Tag\n   * @param   { HTMLElement } root - dom node containing all the loop children\n   * @param   { Tag } nextTag - instance of the next tag preceding the one we want to move\n   * @param   { Boolean } isVirtual - is it a virtual tag?\n   */\n  function move(root, nextTag, isVirtual) {\n    if (isVirtual)\n      { moveVirtual.apply(this, [root, nextTag]); }\n    else\n      { safeInsert(root, this.root, nextTag.root); }\n  }\n\n  /**\n   * Insert and mount a child tag\n   * @this Tag\n   * @param   { HTMLElement } root - dom node containing all the loop children\n   * @param   { Tag } nextTag - instance of the next tag preceding the one we want to insert\n   * @param   { Boolean } isVirtual - is it a virtual tag?\n   */\n  function insert(root, nextTag, isVirtual) {\n    if (isVirtual)\n      { makeVirtual.apply(this, [root, nextTag]); }\n    else\n      { safeInsert(root, this.root, nextTag.root); }\n  }\n\n  /**\n   * Append a new tag into the DOM\n   * @this Tag\n   * @param   { HTMLElement } root - dom node containing all the loop children\n   * @param   { Boolean } isVirtual - is it a virtual tag?\n   */\n  function append(root, isVirtual) {\n    if (isVirtual)\n      { makeVirtual.call(this, root); }\n    else\n      { root.appendChild(this.root); }\n  }\n\n  /**\n   * Return the value we want to use to lookup the postion of our items in the collection\n   * @param   { String }  keyAttr         - lookup string or expression\n   * @param   { * }       originalItem    - original item from the collection\n   * @param   { Object }  keyedItem       - object created by riot via { item, i in collection }\n   * @param   { Boolean } hasKeyAttrExpr  - flag to check whether the key is an expression\n   * @returns { * } value that we will use to figure out the item position via collection.indexOf\n   */\n  function getItemId(keyAttr, originalItem, keyedItem, hasKeyAttrExpr) {\n    if (keyAttr) {\n      return hasKeyAttrExpr ?  tmpl(keyAttr, keyedItem) :  originalItem[keyAttr]\n    }\n\n    return originalItem\n  }\n\n  /**\n   * Manage tags having the 'each'\n   * @param   { HTMLElement } dom - DOM node we need to loop\n   * @param   { Tag } parent - parent tag instance where the dom node is contained\n   * @param   { String } expr - string contained in the 'each' attribute\n   * @returns { Object } expression object for this each loop\n   */\n  function _each(dom, parent, expr) {\n    var mustReorder = typeof getAttribute(dom, LOOP_NO_REORDER_DIRECTIVE) !== T_STRING || removeAttribute(dom, LOOP_NO_REORDER_DIRECTIVE);\n    var keyAttr = getAttribute(dom, KEY_DIRECTIVE);\n    var hasKeyAttrExpr = keyAttr ? tmpl.hasExpr(keyAttr) : false;\n    var tagName = getName(dom);\n    var impl = __TAG_IMPL[tagName];\n    var parentNode = dom.parentNode;\n    var placeholder = createDOMPlaceholder();\n    var child = get(dom);\n    var ifExpr = getAttribute(dom, CONDITIONAL_DIRECTIVE);\n    var tags = [];\n    var isLoop = true;\n    var innerHTML = dom.innerHTML;\n    var isAnonymous = !__TAG_IMPL[tagName];\n    var isVirtual = dom.tagName === 'VIRTUAL';\n    var oldItems = [];\n\n    // remove the each property from the original tag\n    removeAttribute(dom, LOOP_DIRECTIVE);\n    removeAttribute(dom, KEY_DIRECTIVE);\n\n    // parse the each expression\n    expr = tmpl.loopKeys(expr);\n    expr.isLoop = true;\n\n    if (ifExpr) { removeAttribute(dom, CONDITIONAL_DIRECTIVE); }\n\n    // insert a marked where the loop tags will be injected\n    parentNode.insertBefore(placeholder, dom);\n    parentNode.removeChild(dom);\n\n    expr.update = function updateEach() {\n      // get the new items collection\n      expr.value = tmpl(expr.val, parent);\n\n      var items = expr.value;\n      var frag = createFragment();\n      var isObject = !isArray(items) && !isString(items);\n      var root = placeholder.parentNode;\n      var tmpItems = [];\n      var hasKeys = isObject && !!items;\n\n      // if this DOM was removed the update here is useless\n      // this condition fixes also a weird async issue on IE in our unit test\n      if (!root) { return }\n\n      // object loop. any changes cause full redraw\n      if (isObject) {\n        items = items ? Object.keys(items).map(function (key) { return mkitem(expr, items[key], key); }) : [];\n      }\n\n      // store the amount of filtered items\n      var filteredItemsCount = 0;\n\n      // loop all the new items\n      each(items, function (_item, index) {\n        var i = index - filteredItemsCount;\n        var item = !hasKeys && expr.key ? mkitem(expr, _item, index) : _item;\n\n        // skip this item because it must be filtered\n        if (ifExpr && !tmpl(ifExpr, extend(create(parent), item))) {\n          filteredItemsCount ++;\n          return\n        }\n\n        var itemId = getItemId(keyAttr, _item, item, hasKeyAttrExpr);\n        // reorder only if the items are not objects\n        // or a key attribute has been provided\n        var doReorder = !isObject && mustReorder && typeof _item === T_OBJECT || keyAttr;\n        var oldPos = oldItems.indexOf(itemId);\n        var isNew = oldPos === -1;\n        var pos = !isNew && doReorder ? oldPos : i;\n        // does a tag exist in this position?\n        var tag = tags[pos];\n        var mustAppend = i >= oldItems.length;\n        var mustCreate = doReorder && isNew || !doReorder && !tag || !tags[i];\n\n        // new tag\n        if (mustCreate) {\n          tag = createTag(impl, {\n            parent: parent,\n            isLoop: isLoop,\n            isAnonymous: isAnonymous,\n            tagName: tagName,\n            root: dom.cloneNode(isAnonymous),\n            item: item,\n            index: i,\n          }, innerHTML);\n\n          // mount the tag\n          tag.mount();\n\n          if (mustAppend)\n            { append.apply(tag, [frag || root, isVirtual]); }\n          else\n            { insert.apply(tag, [root, tags[i], isVirtual]); }\n\n          if (!mustAppend) { oldItems.splice(i, 0, item); }\n          tags.splice(i, 0, tag);\n          if (child) { arrayishAdd(parent.tags, tagName, tag, true); }\n        } else if (pos !== i && doReorder) {\n          // move\n          if (keyAttr || contains(items, oldItems[pos])) {\n            move.apply(tag, [root, tags[i], isVirtual]);\n            // move the old tag instance\n            tags.splice(i, 0, tags.splice(pos, 1)[0]);\n            // move the old item\n            oldItems.splice(i, 0, oldItems.splice(pos, 1)[0]);\n          }\n\n          // update the position attribute if it exists\n          if (expr.pos) { tag[expr.pos] = i; }\n\n          // if the loop tags are not custom\n          // we need to move all their custom tags into the right position\n          if (!child && tag.tags) { moveNestedTags.call(tag, i); }\n        }\n\n        // cache the original item to use it in the events bound to this node\n        // and its children\n        extend(tag.__, {\n          item: item,\n          index: i,\n          parent: parent\n        });\n\n        tmpItems[i] = itemId;\n\n        if (!mustCreate) { tag.update(item); }\n      });\n\n      // remove the redundant tags\n      unmountRedundant(items, tags, filteredItemsCount);\n\n      // clone the items array\n      oldItems = tmpItems.slice();\n\n      root.insertBefore(frag, placeholder);\n    };\n\n    expr.unmount = function () {\n      each(tags, function (t) { t.unmount(); });\n    };\n\n    return expr\n  }\n\n  var RefExpr = {\n    init: function init(dom, parent, attrName, attrValue) {\n      this.dom = dom;\n      this.attr = attrName;\n      this.rawValue = attrValue;\n      this.parent = parent;\n      this.hasExp = tmpl.hasExpr(attrValue);\n      return this\n    },\n    update: function update() {\n      var old = this.value;\n      var customParent = this.parent && getImmediateCustomParent(this.parent);\n      // if the referenced element is a custom tag, then we set the tag itself, rather than DOM\n      var tagOrDom = this.dom.__ref || this.tag || this.dom;\n\n      this.value = this.hasExp ? tmpl(this.rawValue, this.parent) : this.rawValue;\n\n      // the name changed, so we need to remove it from the old key (if present)\n      if (!isBlank(old) && customParent) { arrayishRemove(customParent.refs, old, tagOrDom); }\n      if (!isBlank(this.value) && isString(this.value)) {\n        // add it to the refs of parent tag (this behavior was changed >=3.0)\n        if (customParent) { arrayishAdd(\n          customParent.refs,\n          this.value,\n          tagOrDom,\n          // use an array if it's a looped node and the ref is not an expression\n          null,\n          this.parent.__.index\n        ); }\n\n        if (this.value !== old) {\n          setAttribute(this.dom, this.attr, this.value);\n        }\n      } else {\n        removeAttribute(this.dom, this.attr);\n      }\n\n      // cache the ref bound to this dom node\n      // to reuse it in future (see also #2329)\n      if (!this.dom.__ref) { this.dom.__ref = tagOrDom; }\n    },\n    unmount: function unmount() {\n      var tagOrDom = this.tag || this.dom;\n      var customParent = this.parent && getImmediateCustomParent(this.parent);\n      if (!isBlank(this.value) && customParent)\n        { arrayishRemove(customParent.refs, this.value, tagOrDom); }\n    }\n  }\n\n  /**\n   * Create a new ref directive\n   * @param   { HTMLElement } dom - dom node having the ref attribute\n   * @param   { Tag } context - tag instance where the DOM node is located\n   * @param   { String } attrName - either 'ref' or 'data-ref'\n   * @param   { String } attrValue - value of the ref attribute\n   * @returns { RefExpr } a new RefExpr object\n   */\n  function createRefDirective(dom, tag, attrName, attrValue) {\n    return create(RefExpr).init(dom, tag, attrName, attrValue)\n  }\n\n  /**\n   * Trigger the unmount method on all the expressions\n   * @param   { Array } expressions - DOM expressions\n   */\n  function unmountAll(expressions) {\n    each(expressions, function (expr) {\n      if (expr.unmount) { expr.unmount(true); }\n      else if (expr.tagName) { expr.tag.unmount(true); }\n      else if (expr.unmount) { expr.unmount(); }\n    });\n  }\n\n  var IfExpr = {\n    init: function init(dom, tag, expr) {\n      removeAttribute(dom, CONDITIONAL_DIRECTIVE);\n      extend(this, { tag: tag, expr: expr, stub: createDOMPlaceholder(), pristine: dom });\n      var p = dom.parentNode;\n      p.insertBefore(this.stub, dom);\n      p.removeChild(dom);\n\n      return this\n    },\n    update: function update$$1() {\n      this.value = tmpl(this.expr, this.tag);\n\n      if (!this.stub.parentNode) { return }\n\n      if (this.value && !this.current) { // insert\n        this.current = this.pristine.cloneNode(true);\n        this.stub.parentNode.insertBefore(this.current, this.stub);\n        this.expressions = parseExpressions.apply(this.tag, [this.current, true]);\n      } else if (!this.value && this.current) { // remove\n        this.unmount();\n        this.current = null;\n        this.expressions = [];\n      }\n\n      if (this.value) { update.call(this.tag, this.expressions); }\n    },\n    unmount: function unmount() {\n      if (this.current) {\n        if (this.current._tag) {\n          this.current._tag.unmount();\n        } else if (this.current.parentNode) {\n          this.current.parentNode.removeChild(this.current);\n        }\n      }\n\n      unmountAll(this.expressions || []);\n    }\n  }\n\n  /**\n   * Create a new if directive\n   * @param   { HTMLElement } dom - if root dom node\n   * @param   { Tag } context - tag instance where the DOM node is located\n   * @param   { String } attr - if expression\n   * @returns { IFExpr } a new IfExpr object\n   */\n  function createIfDirective(dom, tag, attr) {\n    return create(IfExpr).init(dom, tag, attr)\n  }\n\n  /**\n   * Walk the tag DOM to detect the expressions to evaluate\n   * @this Tag\n   * @param   { HTMLElement } root - root tag where we will start digging the expressions\n   * @param   { Boolean } mustIncludeRoot - flag to decide whether the root must be parsed as well\n   * @returns { Array } all the expressions found\n   */\n  function parseExpressions(root, mustIncludeRoot) {\n    var this$1 = this;\n\n    var expressions = [];\n\n    walkNodes(root, function (dom) {\n      var type = dom.nodeType;\n      var attr;\n      var tagImpl;\n\n      if (!mustIncludeRoot && dom === root) { return }\n\n      // text node\n      if (type === 3 && dom.parentNode.tagName !== 'STYLE' && tmpl.hasExpr(dom.nodeValue))\n        { expressions.push({dom: dom, expr: dom.nodeValue}); }\n\n      if (type !== 1) { return }\n\n      var isVirtual = dom.tagName === 'VIRTUAL';\n\n      // loop. each does it's own thing (for now)\n      if (attr = getAttribute(dom, LOOP_DIRECTIVE)) {\n        if(isVirtual) { setAttribute(dom, 'loopVirtual', true); } // ignore here, handled in _each\n        expressions.push(_each(dom, this$1, attr));\n        return false\n      }\n\n      // if-attrs become the new parent. Any following expressions (either on the current\n      // element, or below it) become children of this expression.\n      if (attr = getAttribute(dom, CONDITIONAL_DIRECTIVE)) {\n        expressions.push(createIfDirective(dom, this$1, attr));\n        return false\n      }\n\n      if (attr = getAttribute(dom, IS_DIRECTIVE)) {\n        if (tmpl.hasExpr(attr)) {\n          expressions.push({\n            isRtag: true,\n            expr: attr,\n            dom: dom,\n            attrs: [].slice.call(dom.attributes)\n          });\n\n          return false\n        }\n      }\n\n      // if this is a tag, stop traversing here.\n      // we ignore the root, since parseExpressions is called while we're mounting that root\n      tagImpl = get(dom);\n\n      if(isVirtual) {\n        if(getAttribute(dom, 'virtualized')) {dom.parentElement.removeChild(dom); } // tag created, remove from dom\n        if(!tagImpl && !getAttribute(dom, 'virtualized') && !getAttribute(dom, 'loopVirtual'))  // ok to create virtual tag\n          { tagImpl = { tmpl: dom.outerHTML }; }\n      }\n\n      if (tagImpl && (dom !== root || mustIncludeRoot)) {\n        var hasIsDirective = getAttribute(dom, IS_DIRECTIVE);\n        if(isVirtual && !hasIsDirective) { // handled in update\n          // can not remove attribute like directives\n          // so flag for removal after creation to prevent maximum stack error\n          setAttribute(dom, 'virtualized', true);\n          var tag = createTag(\n            {tmpl: dom.outerHTML},\n            {root: dom, parent: this$1},\n            dom.innerHTML\n          );\n\n          expressions.push(tag); // no return, anonymous tag, keep parsing\n        } else {\n          if (hasIsDirective && isVirtual)\n            { warn((\"Virtual tags shouldn't be used together with the \\\"\" + IS_DIRECTIVE + \"\\\" attribute - https://github.com/riot/riot/issues/2511\")); }\n\n          expressions.push(\n            initChild(\n              tagImpl,\n              {\n                root: dom,\n                parent: this$1\n              },\n              dom.innerHTML,\n              this$1\n            )\n          );\n          return false\n        }\n      }\n\n      // attribute expressions\n      parseAttributes.apply(this$1, [dom, dom.attributes, function (attr, expr) {\n        if (!expr) { return }\n        expressions.push(expr);\n      }]);\n    });\n\n    return expressions\n  }\n\n  /**\n   * Calls `fn` for every attribute on an element. If that attr has an expression,\n   * it is also passed to fn.\n   * @this Tag\n   * @param   { HTMLElement } dom - dom node to parse\n   * @param   { Array } attrs - array of attributes\n   * @param   { Function } fn - callback to exec on any iteration\n   */\n  function parseAttributes(dom, attrs, fn) {\n    var this$1 = this;\n\n    each(attrs, function (attr) {\n      if (!attr) { return false }\n\n      var name = attr.name;\n      var bool = isBoolAttr(name);\n      var expr;\n\n      if (contains(REF_DIRECTIVES, name) && dom.tagName.toLowerCase() !== YIELD_TAG) {\n        expr =  createRefDirective(dom, this$1, name, attr.value);\n      } else if (tmpl.hasExpr(attr.value)) {\n        expr = {dom: dom, expr: attr.value, attr: name, bool: bool};\n      }\n\n      fn(attr, expr);\n    });\n  }\n\n  /**\n   * Manage the mount state of a tag triggering also the observable events\n   * @this Tag\n   * @param { Boolean } value - ..of the isMounted flag\n   */\n  function setMountState(value) {\n    var ref = this.__;\n    var isAnonymous = ref.isAnonymous;\n\n    define(this, 'isMounted', value);\n\n    if (!isAnonymous) {\n      if (value) { this.trigger('mount'); }\n      else {\n        this.trigger('unmount');\n        this.off('*');\n        this.__.wasCreated = false;\n      }\n    }\n  }\n\n  /**\n   * Mount the current tag instance\n   * @returns { Tag } the current tag instance\n   */\n  function componentMount(tag$$1, dom, expressions, opts) {\n    var __ = tag$$1.__;\n    var root = __.root;\n    root._tag = tag$$1; // keep a reference to the tag just created\n\n    // Read all the attrs on this instance. This give us the info we need for updateOpts\n    parseAttributes.apply(__.parent, [root, root.attributes, function (attr, expr) {\n      if (!__.isAnonymous && RefExpr.isPrototypeOf(expr)) { expr.tag = tag$$1; }\n      attr.expr = expr;\n      __.instAttrs.push(attr);\n    }]);\n\n    // update the root adding custom attributes coming from the compiler\n    walkAttributes(__.impl.attrs, function (k, v) { __.implAttrs.push({name: k, value: v}); });\n    parseAttributes.apply(tag$$1, [root, __.implAttrs, function (attr, expr) {\n      if (expr) { expressions.push(expr); }\n      else { setAttribute(root, attr.name, attr.value); }\n    }]);\n\n    // initialiation\n    updateOpts.apply(tag$$1, [__.isLoop, __.parent, __.isAnonymous, opts, __.instAttrs]);\n\n    // add global mixins\n    var globalMixin = mixin(GLOBAL_MIXIN);\n\n    if (globalMixin && !__.skipAnonymous) {\n      for (var i in globalMixin) {\n        if (globalMixin.hasOwnProperty(i)) {\n          tag$$1.mixin(globalMixin[i]);\n        }\n      }\n    }\n\n    if (__.impl.fn) { __.impl.fn.call(tag$$1, opts); }\n\n    if (!__.skipAnonymous) { tag$$1.trigger('before-mount'); }\n\n    // parse layout after init. fn may calculate args for nested custom tags\n    each(parseExpressions.apply(tag$$1, [dom, __.isAnonymous]), function (e) { return expressions.push(e); });\n\n    tag$$1.update(__.item);\n\n    if (!__.isAnonymous && !__.isInline) {\n      while (dom.firstChild) { root.appendChild(dom.firstChild); }\n    }\n\n    define(tag$$1, 'root', root);\n\n    // if we need to wait that the parent \"mount\" or \"updated\" event gets triggered\n    if (!__.skipAnonymous && tag$$1.parent) {\n      var p = getImmediateCustomParent(tag$$1.parent);\n      p.one(!p.isMounted ? 'mount' : 'updated', function () {\n        setMountState.call(tag$$1, true);\n      });\n    } else {\n      // otherwise it's not a child tag we can trigger its mount event\n      setMountState.call(tag$$1, true);\n    }\n\n    tag$$1.__.wasCreated = true;\n\n    return tag$$1\n  }\n\n  /**\n   * Unmount the tag instance\n   * @param { Boolean } mustKeepRoot - if it's true the root node will not be removed\n   * @returns { Tag } the current tag instance\n   */\n  function tagUnmount(tag, mustKeepRoot, expressions) {\n    var __ = tag.__;\n    var root = __.root;\n    var tagIndex = __TAGS_CACHE.indexOf(tag);\n    var p = root.parentNode;\n\n    if (!__.skipAnonymous) { tag.trigger('before-unmount'); }\n\n    // clear all attributes coming from the mounted tag\n    walkAttributes(__.impl.attrs, function (name) {\n      if (startsWith(name, ATTRS_PREFIX))\n        { name = name.slice(ATTRS_PREFIX.length); }\n\n      removeAttribute(root, name);\n    });\n\n    // remove all the event listeners\n    tag.__.listeners.forEach(function (dom) {\n      Object.keys(dom[RIOT_EVENTS_KEY]).forEach(function (eventName) {\n        dom.removeEventListener(eventName, dom[RIOT_EVENTS_KEY][eventName]);\n      });\n    });\n\n    // remove tag instance from the global tags cache collection\n    if (tagIndex !== -1) { __TAGS_CACHE.splice(tagIndex, 1); }\n\n    // clean up the parent tags object\n    if (__.parent && !__.isAnonymous) {\n      var ptag = getImmediateCustomParent(__.parent);\n\n      if (__.isVirtual) {\n        Object\n          .keys(tag.tags)\n          .forEach(function (tagName) { return arrayishRemove(ptag.tags, tagName, tag.tags[tagName]); });\n      } else {\n        arrayishRemove(ptag.tags, __.tagName, tag);\n      }\n    }\n\n    // unmount all the virtual directives\n    if (tag.__.virts) {\n      each(tag.__.virts, function (v) {\n        if (v.parentNode) { v.parentNode.removeChild(v); }\n      });\n    }\n\n    // allow expressions to unmount themselves\n    unmountAll(expressions);\n    each(__.instAttrs, function (a) { return a.expr && a.expr.unmount && a.expr.unmount(); });\n\n    // clear the tag html if it's necessary\n    if (mustKeepRoot) { setInnerHTML(root, ''); }\n    // otherwise detach the root tag from the DOM\n    else if (p) { p.removeChild(root); }\n\n    // custom internal unmount function to avoid relying on the observable\n    if (__.onUnmount) { __.onUnmount(); }\n\n    // weird fix for a weird edge case #2409 and #2436\n    // some users might use your software not as you've expected\n    // so I need to add these dirty hacks to mitigate unexpected issues\n    if (!tag.isMounted) { setMountState.call(tag, true); }\n\n    setMountState.call(tag, false);\n\n    delete root._tag;\n\n    return tag\n  }\n\n  /**\n   * Tag creation factory function\n   * @constructor\n   * @param { Object } impl - it contains the tag template, and logic\n   * @param { Object } conf - tag options\n   * @param { String } innerHTML - html that eventually we need to inject in the tag\n   */\n  function createTag(impl, conf, innerHTML) {\n    if ( impl === void 0 ) impl = {};\n    if ( conf === void 0 ) conf = {};\n\n    var tag = conf.context || {};\n    var opts = conf.opts || {};\n    var parent = conf.parent;\n    var isLoop = conf.isLoop;\n    var isAnonymous = !!conf.isAnonymous;\n    var skipAnonymous = settings.skipAnonymousTags && isAnonymous;\n    var item = conf.item;\n    // available only for the looped nodes\n    var index = conf.index;\n    // All attributes on the Tag when it's first parsed\n    var instAttrs = [];\n    // expressions on this type of Tag\n    var implAttrs = [];\n    var tmpl = impl.tmpl;\n    var expressions = [];\n    var root = conf.root;\n    var tagName = conf.tagName || getName(root);\n    var isVirtual = tagName === 'virtual';\n    var isInline = !isVirtual && !tmpl;\n    var dom;\n\n    if (isInline || isLoop && isAnonymous) {\n      dom = root;\n    } else {\n      if (!isVirtual) { root.innerHTML = ''; }\n      dom = mkdom(tmpl, innerHTML, isSvg(root));\n    }\n\n    // make this tag observable\n    if (!skipAnonymous) { observable(tag); }\n\n    // only call unmount if we have a valid __TAG_IMPL (has name property)\n    if (impl.name && root._tag) { root._tag.unmount(true); }\n\n    define(tag, '__', {\n      impl: impl,\n      root: root,\n      skipAnonymous: skipAnonymous,\n      implAttrs: implAttrs,\n      isAnonymous: isAnonymous,\n      instAttrs: instAttrs,\n      innerHTML: innerHTML,\n      tagName: tagName,\n      index: index,\n      isLoop: isLoop,\n      isInline: isInline,\n      item: item,\n      parent: parent,\n      // tags having event listeners\n      // it would be better to use weak maps here but we can not introduce breaking changes now\n      listeners: [],\n      // these vars will be needed only for the virtual tags\n      virts: [],\n      wasCreated: false,\n      tail: null,\n      head: null\n    });\n\n    // tag protected properties\n    return [\n      ['isMounted', false],\n      // create a unique id to this tag\n      // it could be handy to use it also to improve the virtual dom rendering speed\n      ['_riot_id', uid()],\n      ['root', root],\n      ['opts', opts, { writable: true, enumerable: true }],\n      ['parent', parent || null],\n      // protect the \"tags\" and \"refs\" property from being overridden\n      ['tags', {}],\n      ['refs', {}],\n      ['update', function (data) { return componentUpdate(tag, data, expressions); }],\n      ['mixin', function () {\n        var mixins = [], len = arguments.length;\n        while ( len-- ) mixins[ len ] = arguments[ len ];\n\n        return componentMixin.apply(void 0, [ tag ].concat( mixins ));\n    }],\n      ['mount', function () { return componentMount(tag, dom, expressions, opts); }],\n      ['unmount', function (mustKeepRoot) { return tagUnmount(tag, mustKeepRoot, expressions); }]\n    ].reduce(function (acc, ref) {\n      var key = ref[0];\n      var value = ref[1];\n      var opts = ref[2];\n\n      define(tag, key, value, opts);\n      return acc\n    }, extend(tag, item))\n  }\n\n  /**\n   * Mount a tag creating new Tag instance\n   * @param   { Object } root - dom node where the tag will be mounted\n   * @param   { String } tagName - name of the riot tag we want to mount\n   * @param   { Object } opts - options to pass to the Tag instance\n   * @param   { Object } ctx - optional context that will be used to extend an existing class ( used in riot.Tag )\n   * @returns { Tag } a new Tag instance\n   */\n  function mount$1(root, tagName, opts, ctx) {\n    var impl = __TAG_IMPL[tagName];\n    var implClass = __TAG_IMPL[tagName].class;\n    var context = ctx || (implClass ? create(implClass.prototype) : {});\n    // cache the inner HTML to fix #855\n    var innerHTML = root._innerHTML = root._innerHTML || root.innerHTML;\n    var conf = extend({ root: root, opts: opts, context: context }, { parent: opts ? opts.parent : null });\n    var tag;\n\n    if (impl && root) { tag = createTag(impl, conf, innerHTML); }\n\n    if (tag && tag.mount) {\n      tag.mount(true);\n      // add this tag to the virtualDom variable\n      if (!contains(__TAGS_CACHE, tag)) { __TAGS_CACHE.push(tag); }\n    }\n\n    return tag\n  }\n\n\n\n  var tags = /*#__PURE__*/Object.freeze({\n    arrayishAdd: arrayishAdd,\n    getTagName: getName,\n    inheritParentProps: inheritParentProps,\n    mountTo: mount$1,\n    selectTags: query,\n    arrayishRemove: arrayishRemove,\n    getTag: get,\n    initChildTag: initChild,\n    moveChildTag: moveChild,\n    makeReplaceVirtual: makeReplaceVirtual,\n    getImmediateCustomParentTag: getImmediateCustomParent,\n    makeVirtual: makeVirtual,\n    moveVirtual: moveVirtual,\n    unmountAll: unmountAll,\n    createIfDirective: createIfDirective,\n    createRefDirective: createRefDirective\n  });\n\n  /**\n   * Riot public api\n   */\n  var settings$1 = settings;\n  var util = {\n    tmpl: tmpl,\n    brackets: brackets,\n    styleManager: styleManager,\n    vdom: __TAGS_CACHE,\n    styleNode: styleManager.styleNode,\n    // export the riot internal utils as well\n    dom: dom,\n    check: check,\n    misc: misc,\n    tags: tags\n  };\n\n  // export the core props/methods\n  var Tag$1 = Tag;\n  var tag$1 = tag;\n  var tag2$1 = tag2;\n  var mount$2 = mount;\n  var mixin$1 = mixin;\n  var update$2 = update$1;\n  var unregister$1 = unregister;\n  var version$1 = version;\n  var observable$1 = observable;\n\n  var riot$1 = extend({}, core, {\n    observable: observable,\n    settings: settings$1,\n    util: util,\n  })\n\n  exports.settings = settings$1;\n  exports.util = util;\n  exports.Tag = Tag$1;\n  exports.tag = tag$1;\n  exports.tag2 = tag2$1;\n  exports.mount = mount$2;\n  exports.mixin = mixin$1;\n  exports.update = update$2;\n  exports.unregister = unregister$1;\n  exports.version = version$1;\n  exports.observable = observable$1;\n  exports.default = riot$1;\n\n  Object.defineProperty(exports, '__esModule', { value: true });\n\n})));\n\n\n//# sourceURL=webpack://pragma/./node_modules/riot/riot.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://pragma/(webpack)/buildin/global.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack://pragma/(webpack)/buildin/module.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//import Class from './domain/Class';\nvar data = {\n  classes: {},\n  skills: {},\n  spells: {}\n};\nvar _default = data;\nexports.default = _default;\n\n//# sourceURL=webpack://pragma/./src/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _riot = _interopRequireDefault(__webpack_require__(/*! riot */ \"./node_modules/riot/riot.js\"));\n\nvar _domEvent = _interopRequireDefault(__webpack_require__(/*! mixins/domEvent */ \"./src/mixins/domEvent.js\"));\n\n__webpack_require__(/*! ./tags/pragma.tag */ \"./src/tags/pragma.tag\");\n\nvar _CharacterFactory = _interopRequireDefault(__webpack_require__(/*! ./services/CharacterFactory */ \"./src/services/CharacterFactory.js\"));\n\nvar _CharacterSheetProcessor = _interopRequireDefault(__webpack_require__(/*! ./services/CharacterSheetProcessor */ \"./src/services/CharacterSheetProcessor.js\"));\n\nvar _data = _interopRequireDefault(__webpack_require__(/*! ./data */ \"./src/data.js\"));\n\nvar _store = _interopRequireDefault(__webpack_require__(/*! ./store */ \"./src/store.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar state = {\n  character: null,\n  sheet: null\n};\nvar app = {\n  events: _riot.default.observable(),\n  data: _data.default,\n  state: state,\n  store: _store.default,\n  services: {\n    factory: new _CharacterFactory.default(),\n    processor: new _CharacterSheetProcessor.default()\n  }\n};\napp.state.sheet = app.store.characters[1];\n\n_riot.default.mixin(_domEvent.default);\n\napp.tags = _riot.default.mount('pragma', {\n  app: app\n});\nvar _default = app;\nexports.default = _default;\n\n//# sourceURL=webpack://pragma/./src/index.js?");

/***/ }),

/***/ "./src/mixins/domEvent.js":
/*!********************************!*\
  !*** ./src/mixins/domEvent.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n// @see {@link https://github.com/cognitom/riot-mixin-pack}\nvar _default = {\n  /**\n   * Trigger Event on DOM (root element of the tag).\n   *\n   * @param { string } eventName - the name of the event. ex: 'change'\n   */\n  triggerDom: function triggerDom(eventName) {\n    var event;\n\n    if (typeof Event === 'function') {\n      // Standard browsers\n      event = new Event(eventName);\n    } else {\n      // IE 9 ~ 11\n      event = document.createEvent('Event');\n      event.initEvent(eventName, true, true);\n    }\n\n    this.root.dispatchEvent(event);\n  }\n};\nexports.default = _default;\n\n//# sourceURL=webpack://pragma/./src/mixins/domEvent.js?");

/***/ }),

/***/ "./src/model/Abilities.js":
/*!********************************!*\
  !*** ./src/model/Abilities.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _Ability = _interopRequireDefault(__webpack_require__(/*! ./Ability */ \"./src/model/Ability.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n * Character abilities.\n */\nvar Abilities =\n/**\n * @param {int} str - Strength score\n * @param {int} dex - Dexterity score\n * @param {int} con - Constitution score\n * @param {int} int - Intelligence score\n * @param {int} wis - Wisdom score\n * @param {int} cha - Charisma score\n */\nfunction Abilities(str, dex, con, int, wis, cha) {\n  _classCallCheck(this, Abilities);\n\n  this.str = new _Ability.default('Strength', str);\n  this.dex = new _Ability.default('Dexterity', dex);\n  this.con = new _Ability.default('Constitution', con);\n  this.int = new _Ability.default('Intelligence', int);\n  this.wis = new _Ability.default('Wisdom', wis);\n  this.cha = new _Ability.default('Charisma', cha);\n};\n\nexports.default = Abilities;\n\n//# sourceURL=webpack://pragma/./src/model/Abilities.js?");

/***/ }),

/***/ "./src/model/Ability.js":
/*!******************************!*\
  !*** ./src/model/Ability.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _AbilityScore = _interopRequireDefault(__webpack_require__(/*! ./AbilityScore */ \"./src/model/AbilityScore.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * A character ability.\n */\nvar Ability =\n/*#__PURE__*/\nfunction () {\n  /**\n   * @param {string} name  - Ability name\n   * @param {int}    score - Base ability score\n   * @param {int}    temp  - Temporary score\n   */\n  function Ability(name, score, temp) {\n    _classCallCheck(this, Ability);\n\n    temp = temp || 0;\n    this.name = name;\n    this.shortName = name.substr(0, 3); // new AbilityScore(base, bonus)\n\n    this.abilityScore = new _AbilityScore.default(score);\n    this.tempScore = new _AbilityScore.default(temp);\n  }\n  /**\n   * @returns {int}\n   */\n\n\n  _createClass(Ability, [{\n    key: \"score\",\n    get: function get() {\n      return this.abilityScore.score;\n    }\n    /**\n     * @param {int} score\n     */\n    ,\n    set: function set(score) {\n      this.abilityScore.score = score;\n    }\n    /**\n     * @returns {int}\n     */\n\n  }, {\n    key: \"modifier\",\n    get: function get() {\n      return this.abilityScore.modifier;\n    }\n    /**\n     * @returns {int}\n     */\n\n  }, {\n    key: \"temp\",\n    get: function get() {\n      return this.tempScore.score;\n    },\n    set: function set(score) {\n      this.tempScore.score = score;\n    }\n    /**\n     * @returns {int}\n     */\n\n  }, {\n    key: \"tempModifier\",\n    get: function get() {\n      return this.tempScore.modifier;\n    }\n    /**\n     * @returns {int}\n     */\n\n  }, {\n    key: \"bonus\",\n    get: function get() {\n      return this.temp - this.score;\n    }\n  }]);\n\n  return Ability;\n}();\n\nexports.default = Ability;\n\n//# sourceURL=webpack://pragma/./src/model/Ability.js?");

/***/ }),

/***/ "./src/model/AbilityScore.js":
/*!***********************************!*\
  !*** ./src/model/AbilityScore.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _clamp = _interopRequireDefault(__webpack_require__(/*! lodash/clamp */ \"./node_modules/lodash/clamp.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * A character ability score.\n */\nvar AbilityScore =\n/*#__PURE__*/\nfunction () {\n  /**\n   * Create a new ability score.\n   *\n   * @param {int=10} score - An ability score between 1 and 45.\n   */\n  function AbilityScore(score) {\n    _classCallCheck(this, AbilityScore);\n\n    /**\n     * @type {int}\n     */\n    this.score = (0, _clamp.default)(score, 1, 60);\n  }\n  /**\n   * @returns {int}\n   */\n\n\n  _createClass(AbilityScore, [{\n    key: \"modifier\",\n    get: function get() {\n      return Math.floor(this.score / 2 - 5);\n    }\n  }]);\n\n  return AbilityScore;\n}();\n\nexports.default = AbilityScore;\n\n//# sourceURL=webpack://pragma/./src/model/AbilityScore.js?");

/***/ }),

/***/ "./src/model/Character.js":
/*!********************************!*\
  !*** ./src/model/Character.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * A character.\n */\nvar Character =\n/*#__PURE__*/\nfunction () {\n  /**\n   * @param {General} general\n   * @param {Abilities} abilities\n   */\n  function Character(general, abilities) {\n    _classCallCheck(this, Character);\n\n    this.general = general;\n    this.abilities = abilities;\n  }\n\n  _createClass(Character, [{\n    key: \"name\",\n    get: function get() {\n      return this.general.name;\n    }\n  }, {\n    key: \"str\",\n    get: function get() {\n      return this.abilities.str;\n    }\n  }, {\n    key: \"dex\",\n    get: function get() {\n      return this.abilities.dex;\n    }\n  }, {\n    key: \"con\",\n    get: function get() {\n      return this.abilities.con;\n    }\n  }, {\n    key: \"int\",\n    get: function get() {\n      return this.abilities.int;\n    }\n  }, {\n    key: \"wis\",\n    get: function get() {\n      return this.abilities.wis;\n    }\n  }, {\n    key: \"cha\",\n    get: function get() {\n      return this.abilities.cha;\n    }\n  }]);\n\n  return Character;\n}();\n\nexports.default = Character;\n\n//# sourceURL=webpack://pragma/./src/model/Character.js?");

/***/ }),

/***/ "./src/model/General.js":
/*!******************************!*\
  !*** ./src/model/General.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n * General character information.\n */\nvar General =\n/**\n * @param {string} name\n * @param {string} gender\n * @param {string} age\n * @param {string} height\n * @param {string} hair\n * @param {string} eyes\n * @param {string} home\n * @param {string} deity\n * @param {string[]} extra\n */\nfunction General(name, gender, age, height, hair, eyes, home, deity, extra) {\n  _classCallCheck(this, General);\n\n  this.name = name;\n  this.gender = gender;\n  this.age = age;\n  this.height = height;\n  this.hair = hair;\n  this.eyes = eyes;\n  this.home = home;\n  this.deity = deity;\n  this.extra = [];\n};\n\nexports.default = General;\n\n//# sourceURL=webpack://pragma/./src/model/General.js?");

/***/ }),

/***/ "./src/services/CharacterFactory.js":
/*!******************************************!*\
  !*** ./src/services/CharacterFactory.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _Character = _interopRequireDefault(__webpack_require__(/*! ../model/Character */ \"./src/model/Character.js\"));\n\nvar _General = _interopRequireDefault(__webpack_require__(/*! ../model/General */ \"./src/model/General.js\"));\n\nvar _Abilities = _interopRequireDefault(__webpack_require__(/*! ../model/Abilities */ \"./src/model/Abilities.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * A Character factory.\n */\nvar CharacterFactory =\n/*#__PURE__*/\nfunction () {\n  function CharacterFactory() {\n    _classCallCheck(this, CharacterFactory);\n  }\n\n  _createClass(CharacterFactory, [{\n    key: \"create\",\n\n    /**\n     * Create a new Character.\n     *\n     * @returns {Character}\n     */\n    value: function create() {\n      return new _Character.default(new _General.default(), new _Abilities.default());\n    }\n  }]);\n\n  return CharacterFactory;\n}();\n\nexports.default = CharacterFactory;\n\n//# sourceURL=webpack://pragma/./src/services/CharacterFactory.js?");

/***/ }),

/***/ "./src/services/CharacterSheetProcessor.js":
/*!*************************************************!*\
  !*** ./src/services/CharacterSheetProcessor.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _assign = _interopRequireDefault(__webpack_require__(/*! lodash/assign */ \"./node_modules/lodash/assign.js\"));\n\nvar _get = _interopRequireDefault(__webpack_require__(/*! lodash/get */ \"./node_modules/lodash/get.js\"));\n\nvar _each = _interopRequireDefault(__webpack_require__(/*! lodash/each */ \"./node_modules/lodash/each.js\"));\n\nvar _merge = _interopRequireDefault(__webpack_require__(/*! lodash/merge */ \"./node_modules/lodash/merge.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * A character sheet processor.\n *\n * Processes sheets through a character model.\n */\nvar CharacterSheetProcessor =\n/*#__PURE__*/\nfunction () {\n  /**\n   * Create a new character sheet processor.\n   */\n  function CharacterSheetProcessor() {\n    _classCallCheck(this, CharacterSheetProcessor);\n\n    this.abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'];\n  }\n  /**\n   * Process the given sheet data through a character model.\n   *\n   * TODO: Typedef for sheet.\n   *\n   * @param {Character} character - The character model\n   * @param {Object}    sheet     - The sheet data\n   */\n\n\n  _createClass(CharacterSheetProcessor, [{\n    key: \"process\",\n    value: function process(character, sheet) {\n      // Update the character\n      this.update(character, sheet); // Apply new sheet data\n\n      (0, _merge.default)(sheet, this.extract(character));\n    }\n    /**\n     * Update a character model from the given sheet data.\n     *\n     * @param {Character} character - The character model\n     * @param {Object}    sheet     - The sheet data\n     */\n\n  }, {\n    key: \"update\",\n    value: function update(character, sheet) {\n      // General\n      (0, _assign.default)(character.general, sheet.general); // Abilities\n\n      (0, _each.default)(character.abilities, function (ability, name) {\n        ability.score = (0, _get.default)(sheet, \"abilities.\".concat(name, \".score\"));\n        ability.temp = (0, _get.default)(sheet, \"abilities.\".concat(name, \".temp\"));\n      });\n    }\n    /**\n     * Extract sheet data from a character model.\n     *\n     * @param {Character} character\n     */\n\n  }, {\n    key: \"extract\",\n    value: function extract(character) {\n      var sheet = {\n        abilities: {}\n      }; // Abilities\n\n      (0, _each.default)(character.abilities, function (ability, name) {\n        sheet.abilities[name] = {};\n        sheet.abilities[name].score = ability.score;\n        sheet.abilities[name].modifier = ability.modifier;\n        sheet.abilities[name].temp = ability.temp;\n        sheet.abilities[name].tempModifier = ability.tempModifier;\n      });\n      return sheet;\n    }\n  }]);\n\n  return CharacterSheetProcessor;\n}();\n\nexports.default = CharacterSheetProcessor;\n\n//# sourceURL=webpack://pragma/./src/services/CharacterSheetProcessor.js?");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  characters: {\n    1: {\n      general: {\n        name: 'Shade',\n        age: 27,\n        gender: 'Male',\n        height: \"5'9\\\"\",\n        weight: '10st',\n        hair: 'Black',\n        eyes: 'Black',\n        home: 'Enaevia'\n      },\n      race: 'Tiefling',\n      class: 'Sorcerer',\n      abilities: {\n        str: {\n          score: 8,\n          modifier: -1\n        },\n        dex: {\n          score: 12,\n          modifier: 1\n        },\n        con: {\n          score: 12,\n          modifier: 1\n        },\n        int: {\n          score: 12,\n          modifier: 1\n        },\n        wis: {\n          score: 14,\n          modifier: 2\n        },\n        cha: {\n          score: 17,\n          modifier: 3,\n          temp: 21,\n          tempModifier: 5\n        }\n      },\n      bonuses: {\n        abilities: []\n      }\n    },\n    2: {\n      general: {\n        name: 'Zyra',\n        age: 22,\n        gender: 'Female',\n        height: \"5'6\\\"\",\n        weight: \"9st7lb\",\n        hair: 'Black',\n        eyes: 'Black',\n        home: 'Ilun'\n      },\n      race: 'Catfolk',\n      class: 'Mindblade',\n      abilities: {\n        str: 14,\n        dex: 12,\n        con: 13,\n        int: 16,\n        wis: 10,\n        cha: 10\n      }\n    }\n  }\n};\nexports.default = _default;\n\n//# sourceURL=webpack://pragma/./src/store.js?");

/***/ }),

/***/ "./src/tags/character.tag":
/*!********************************!*\
  !*** ./src/tags/character.tag ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _character_general_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character/general.tag */ \"./src/tags/character/general.tag\");\n/* harmony import */ var _character_abilities_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character/abilities.tag */ \"./src/tags/character/abilities.tag\");\n\n    var riot = __webpack_require__(/*! riot */ \"./node_modules/riot/riot.js\")\n    \n\nriot.tag2('character', '<general general=\"{character.general}\"></general> <abilities abilities=\"{character.abilities}\" strict=\"{opts.strict}\" onchange=\"{change}\"></abilities>', '', '', function(opts) {\nthis.character = this.opts.character;\n\nthis.change = function () {\n  this.triggerDom('change');\n};\n\nthis.on('update', function () {\n  this.character = this.opts.character;\n});\n});\n\n    \n  \n\n//# sourceURL=webpack://pragma/./src/tags/character.tag?");

/***/ }),

/***/ "./src/tags/character/abilities.tag":
/*!******************************************!*\
  !*** ./src/tags/character/abilities.tag ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash_toUpper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/toUpper */ \"./node_modules/lodash/toUpper.js\");\n/* harmony import */ var lodash_toUpper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_toUpper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/set */ \"./node_modules/lodash/set.js\");\n/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_clamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/clamp */ \"./node_modules/lodash/clamp.js\");\n/* harmony import */ var lodash_clamp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_clamp__WEBPACK_IMPORTED_MODULE_2__);\n\n    var riot = __webpack_require__(/*! riot */ \"./node_modules/riot/riot.js\")\n    \n\n\nriot.tag2('abilities', '<fieldset> <legend>Abilities</legend> <p each=\"{ability, name in abilities}\"> <label> <span>{upperCase(name)}</span> <input name=\"{name + \\'.score\\'}\" min=\"1\" max=\"60\" step=\"1\" riot-value=\"{ability.score}\" onkeyup=\"{edit}\" onchange=\"{edit}\" type=\"{\\'number\\'}\"> </label> <input name=\"{name + \\'.modifier\\'}\" min=\"-5\" max=\"25\" step=\"1\" riot-value=\"{ability.modifier}\" onkeyup=\"{edit}\" onchange=\"{edit}\" disabled=\"{opts.strict}\" type=\"{\\'number\\'}\"> <input name=\"{name + \\'.temp\\'}\" min=\"1\" max=\"60\" step=\"1\" riot-value=\"{ability.temp}\" onkeyup=\"{edit}\" onchange=\"{edit}\" type=\"{\\'number\\'}\"> <input name=\"{name + \\'.tempModifier\\'}\" min=\"-5\" max=\"25\" step=\"1\" riot-value=\"{ability.tempModifier}\" onkeyup=\"{edit}\" onchange=\"{edit}\" disabled=\"{opts.strict}\" type=\"{\\'number\\'}\"> </p> {abilities.cha.score} {abilities.cha.modifier} {abilities.cha.temp} {abilities.cha.tempModifier} </fieldset>', '', '', function(opts) {\n// input type=number fails to compile in a webpack production bundle;\n// can't use one with an expression value\n//this.inputType = 'number';\nthis.upperCase = lodash_toUpper__WEBPACK_IMPORTED_MODULE_0___default.a;\nthis.abilities = this.opts.abilities;\n\nthis.edit = function (event) {\n  let input = event.target;\n  input.value = lodash_clamp__WEBPACK_IMPORTED_MODULE_2___default()(input.value, input.min, input.max);\n  lodash_set__WEBPACK_IMPORTED_MODULE_1___default()(this.abilities, input.name, input.value);\n  this.triggerDom('change');\n};\n\nthis.on('update', function () {\n  this.abilities = this.opts.abilities;\n});\n});\n\n    \n  \n\n//# sourceURL=webpack://pragma/./src/tags/character/abilities.tag?");

/***/ }),

/***/ "./src/tags/character/general.tag":
/*!****************************************!*\
  !*** ./src/tags/character/general.tag ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash_startCase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/startCase */ \"./node_modules/lodash/startCase.js\");\n/* harmony import */ var lodash_startCase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_startCase__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_toLower__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/toLower */ \"./node_modules/lodash/toLower.js\");\n/* harmony import */ var lodash_toLower__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_toLower__WEBPACK_IMPORTED_MODULE_1__);\n\n    var riot = __webpack_require__(/*! riot */ \"./node_modules/riot/riot.js\")\n    \n\nriot.tag2('general', '<fieldset> <legend>General</legend> <p each=\"{value, name in general}\"> <label> {titleCase(name)} <input type=\"text\" name=\"{name}\" riot-value=\"{value}\" onkeyup=\"{edit}\"> </label> </p> </fieldset>', '', '', function(opts) {\nthis.general = this.opts.general;\n\nthis.titleCase = function (string) {\n  return lodash_startCase__WEBPACK_IMPORTED_MODULE_0___default()(lodash_toLower__WEBPACK_IMPORTED_MODULE_1___default()(string));\n};\n\nthis.edit = function (event) {\n  // Update the value\n  this.general[event.target.name] = event.target.value;\n};\n});\n\n    \n  \n\n//# sourceURL=webpack://pragma/./src/tags/character/general.tag?");

/***/ }),

/***/ "./src/tags/pragma.tag":
/*!*****************************!*\
  !*** ./src/tags/pragma.tag ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _character_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character.tag */ \"./src/tags/character.tag\");\n\n    var riot = __webpack_require__(/*! riot */ \"./node_modules/riot/riot.js\")\n     // Variables and properties\nriot.tag2('pragma', '<h1>Pragma</h1> <input type=\"button\" value=\"Force Update\" onmouseup=\"{() => {}}\"> <virtual if=\"{!sheet}\"> </virtual> <virtual if=\"{sheet}\"> <h2>Character Sheet</h2> <label> <input type=\"checkbox\" name=\"strict\" onchange=\"{onStrictChange}\"> Strict </label> <character character=\"{sheet}\" strict=\"{strict}\" onchange=\"{() => {}}\"></character> </virtual>', '', '', function(opts) {\n\nlet app = this.opts.app;\nlet state = app.state;\nlet store = app.store;\nlet factory = app.services.factory;\nlet processor = app.services.processor;\nlet character = state.character || factory.create();\nthis.sheet = state.sheet;\nthis.strict = false; // Methods\n\nthis.process = function () {\n  if (this.strict) {\n    processor.process(character, this.sheet);\n  }\n}; // DOM handlers\n\nthis.onStrictChange = function (event) {\n  this.strict = event.currentTarget.checked;\n  this.process();\n}; // Event handlers\n\nthis.on('update', function () {\n  this.process();\n});\nthis.on('mount', function () {\n  this.process();\n});\nthis.on('unmount', function () {\n  this.state = null;\n  this.store = null;\n  this.character = null;\n  this.sheet = null;\n  this.strict = null;\n  this.change = null;\n});\n});\n\n    \n  \n\n//# sourceURL=webpack://pragma/./src/tags/pragma.tag?");

/***/ })

/******/ })["default"];
});