(() => {
  var webpackModules = {
    './src/index.css': (module, __unused_webpack_exports, webpackRequire) => {
      var cssLoaderApiNoSourcemapImport = webpackRequire(
        './node_modules/css-loader/dist/runtime/noSourceMaps.js'
      );
      var cssLoaderApiImport = webpackRequire(
        './node_modules/css-loader/dist/runtime/api.js'
      );
      var cssLoaderExport = cssLoaderApiImport(cssLoaderApiNoSourcemapImport);
      cssLoaderExport.push([
        module.id,
        `body {
  color: red;
}
`,
        '',
      ]);
      module.exports = cssLoaderExport;
    },
    './node_modules/css-loader/dist/runtime/api.js': (module) => {
      'use strict';
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
    },
    './node_modules/css-loader/dist/runtime/noSourceMaps.js': (module) => {
      'use strict';
      module.exports = function (i) {
        return i[1];
      };
    },
  };
  var webpackModuleCache = {};
  function webpackRequire(moduleId) {
    var cachedModule = webpackModuleCache[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = (webpackModuleCache[moduleId] = {
      id: moduleId,
      exports: {},
    });
    webpackModules[moduleId](module, module.exports, webpackRequire);
    return module.exports;
  }
  var webpackExports = {};
  (() => {
    debugger;
    const indexCss = webpackRequire('./src/index.css');
    console.log(indexCss);
  })();
})();
