/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./loaders/css-loader/index.js??ruleSet[1].rules[0].use[1]!./src/index.css":
/*!*********************************************************************************!*\
  !*** ./loaders/css-loader/index.js??ruleSet[1].rules[0].use[1]!./src/index.css ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cssLoaderApiNoSourcemapImport = __webpack_require__(/*! ../loaders/css-loader/runtime/noSourceMaps.js */ "./loaders/css-loader/runtime/noSourceMaps.js");
var cssLoaderApiImport = __webpack_require__(/*! ../loaders/css-loader/runtime/api.js */ "./loaders/css-loader/runtime/api.js");
var cssLoaderGetUrlImport = __webpack_require__(/*! ../loaders/css-loader/runtime/getUrl.js */ "./loaders/css-loader/runtime/getUrl.js");
var cssLoaderUrlImport_0 = __webpack_require__(/*! ./images/kj.jpeg */ "./src/images/kj.jpeg");
var cssLoaderExport = cssLoaderApiImport(cssLoaderApiNoSourcemapImport);
var cssLoaderUrlReplacement0 = cssLoaderGetUrlImport(cssLoaderUrlImport_0); cssLoaderExport.push([module.id, "body {\n  color: red;\n  background-image: url("+cssLoaderUrlReplacement0+");\n  background-repeat: no-repeat;\n}\n", '']);module.exports = cssLoaderExport;

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
  return list;
};


/***/ }),

/***/ "./loaders/css-loader/runtime/getUrl.js":
/*!**********************************************!*\
  !*** ./loaders/css-loader/runtime/getUrl.js ***!
  \**********************************************/
/***/ ((module) => {

module.exports = (url) => url;


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


    let content = __webpack_require__(/*! !!../loaders/css-loader/index.js??ruleSet[1].rules[0].use[1]!./index.css */ "./loaders/css-loader/index.js??ruleSet[1].rules[0].use[1]!./src/index.css");
    let element = document.createElement('style');
    element.innerHTML = content.toString();
    document.head.appendChild(element);
  

/***/ }),

/***/ "./src/images/kj.jpeg":
/*!****************************!*\
  !*** ./src/images/kj.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c62e96e7bf8e4accbb58.jpeg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
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