/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./loaders/css-loader/index.js??ruleSet[1].rules[0].use[1]!./loaders/logger-loader/index.js!./src/index.css":
/*!******************************************************************************************************************!*\
  !*** ./loaders/css-loader/index.js??ruleSet[1].rules[0].use[1]!./loaders/logger-loader/index.js!./src/index.css ***!
  \******************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cssLoaderApiNoSourcemapImport = __webpack_require__(/*! ../loaders/css-loader/runtime/noSourceMaps.js */ "./loaders/css-loader/runtime/noSourceMaps.js");
var cssLoaderApiImport = __webpack_require__(/*! ../loaders/css-loader/runtime/api.js */ "./loaders/css-loader/runtime/api.js");
var cssLoaderAtRuleImport0 = __webpack_require__(/*! -!../loaders/css-loader/index.js??ruleSet[1].rules[0].use[1]!./basic.css */ "./loaders/css-loader/index.js??ruleSet[1].rules[0].use[1]!./src/basic.css");
var cssLoaderExport = cssLoaderApiImport(cssLoaderApiNoSourcemapImport);
cssLoaderExport.i(cssLoaderAtRuleImport0); cssLoaderExport.push([module.id, "body {\n  color: red;\n}\n", '']);module.exports = cssLoaderExport;

/***/ }),

/***/ "./loaders/css-loader/index.js??ruleSet[1].rules[0].use[1]!./src/basic.css":
/*!*********************************************************************************!*\
  !*** ./loaders/css-loader/index.js??ruleSet[1].rules[0].use[1]!./src/basic.css ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cssLoaderApiNoSourcemapImport = __webpack_require__(/*! ../loaders/css-loader/runtime/noSourceMaps.js */ "./loaders/css-loader/runtime/noSourceMaps.js");
var cssLoaderApiImport = __webpack_require__(/*! ../loaders/css-loader/runtime/api.js */ "./loaders/css-loader/runtime/api.js");
var cssLoaderExport = cssLoaderApiImport(cssLoaderApiNoSourcemapImport);
 cssLoaderExport.push([module.id, "body {\n  background-color: green;\n}\n", '']);module.exports = cssLoaderExport;

/***/ }),

/***/ "./loaders/css-loader/runtime/api.js":
/*!*******************************************!*\
  !*** ./loaders/css-loader/runtime/api.js ***!
  \*******************************************/
/***/ ((module) => {

module.exports = function (cssWithMappingToString) {
  var list = [];

  list.toString = function toString() {
    return this.map(function (item) {
      var content = '';
      content += cssWithMappingToString(item);
      return content;
    }).join('');
  };

  list.i = function i(modules) {
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      list.push(item);
    }
  };

  return list;
};


/***/ }),

/***/ "./loaders/css-loader/runtime/noSourceMaps.js":
/*!****************************************************!*\
  !*** ./loaders/css-loader/runtime/noSourceMaps.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = function (i) {
  return i[1];
};


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    let content = __webpack_require__(/*! !!../loaders/css-loader/index.js??ruleSet[1].rules[0].use[1]!../loaders/logger-loader/index.js!./index.css */ "./loaders/css-loader/index.js??ruleSet[1].rules[0].use[1]!./loaders/logger-loader/index.js!./src/index.css");
    let element = document.createElement('style');
    element.innerHTML = content.toString();
    document.head.appendChild(element);
  

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const indexCss = __webpack_require__(/*! ./index.css */ "./src/index.css")

console.log(indexCss);
})();

/******/ })()
;