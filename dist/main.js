/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./loaders/css-loader/index.js??ruleSet[1].rules[0].use[1]!./src/index.css":
/*!*********************************************************************************!*\
  !*** ./loaders/css-loader/index.js??ruleSet[1].rules[0].use[1]!./src/index.css ***!
  \*********************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (4:38)\nFile was processed with these loaders:\n * ./loaders/css-loader/index.js\nYou may need an additional loader to handle the result of these loaders.\n| var cssLoaderApiImport = require('../loaders/css-loader/runtime/api.js');\n| var cssLoaderGetUrlImport = require('../loaders/css-loader/runtime/getUrl.js');\n> var cssLoaderUrlImport_0 = require(''./images/kj.jpeg'');\n| var cssLoaderExport = cssLoaderApiImport(cssLoaderApiNoSourcemapImport);\n| var cssLoaderUrlReplacement0 = cssLoaderGetUrlImport(cssLoaderUrlImport_0); cssLoaderExport.push([module.id, \"body {\\n  color: red;\\n  background-image: url('undefined');\\n  background-repeat: no-repeat;\\n}\\n\", '']);module.exports = cssLoaderExport;");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    let content = __webpack_require__(/*! !!../loaders/css-loader/index.js??ruleSet[1].rules[0].use[1]!./index.css */ "./loaders/css-loader/index.js??ruleSet[1].rules[0].use[1]!./src/index.css");
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
/******/ 			// no module.id needed
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