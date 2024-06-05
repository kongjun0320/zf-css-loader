/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./loaders/css-loader/index.js??ruleSet[1].rules[0].use[1]!./loaders/logger-loader/index.js!./src/modules.css":
/*!********************************************************************************************************************!*\
  !*** ./loaders/css-loader/index.js??ruleSet[1].rules[0].use[1]!./loaders/logger-loader/index.js!./src/modules.css ***!
  \********************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cssLoaderApiNoSourcemapImport = __webpack_require__(/*! ../loaders/css-loader/runtime/noSourceMaps.js */ "./loaders/css-loader/runtime/noSourceMaps.js");
var cssLoaderApiImport = __webpack_require__(/*! ../loaders/css-loader/runtime/api.js */ "./loaders/css-loader/runtime/api.js");
var cssLoaderExport = cssLoaderApiImport(cssLoaderApiNoSourcemapImport);
 cssLoaderExport.push([module.id, "._7cd8894e811bd5839bc97e3ff6f90bc0__background {\n  width: 100px;\n  height: 100px;\n  background-color: green;\n}\n", '']); cssLoaderExport.locals = {

    	"background":"_7cd8894e811bd5839bc97e3ff6f90bc0__background"
  }; 
module.exports = cssLoaderExport;

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

/***/ "./src/modules.css":
/*!*************************!*\
  !*** ./src/modules.css ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


    let content = __webpack_require__(/*! !!../loaders/css-loader/index.js??ruleSet[1].rules[0].use[1]!../loaders/logger-loader/index.js!./modules.css */ "./loaders/css-loader/index.js??ruleSet[1].rules[0].use[1]!./loaders/logger-loader/index.js!./src/modules.css");
    let element = document.createElement('style');
    element.innerHTML = (content.default || content).toString();
    document.head.appendChild(element);
    module.exports = content;
  

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
const modulesCss = __webpack_require__(/*! ./modules.css */ "./src/modules.css");

const div = document.createElement('div');
div.className = modulesCss.locals.background;

document.body.appendChild(div);

console.log(modulesCss);

})();

/******/ })()
;