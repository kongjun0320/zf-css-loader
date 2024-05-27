(() => {
  var webpackModules = {
    './loaders/css-loader/index.js??ruleSet[1].rules[0].use[1]!./src/index.css':
      (__unused_webpack_module, __unused_webpack_exports, webpackRequire) => {
        var cssLoaderApiNoSourcemapImport = webpackRequire(
          './loaders/css-loader/runtime/noSourceMaps.js'
        );
        var cssLoaderApiImport = webpackRequire(
          './loaders/css-loader/runtime/api.js'
        );

        __unused_webpack_module.exports = `body {
          color: red;
        }
        `;
      },
    './loaders/css-loader/runtime/api.js': (module) => {
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
    './loaders/css-loader/runtime/noSourceMaps.js': (module) => {
      module.exports = function (i) {
        return i[1];
      };
    },
    './src/index.css': (
      __unused_webpack_module,
      __unused_webpack_exports,
      webpackRequire
    ) => {
      let content = webpackRequire(
        './loaders/css-loader/index.js??ruleSet[1].rules[0].use[1]!./src/index.css'
      );
      let element = document.createElement('style');
      element.innerHTML = content.toString();
      document.head.appendChild(element);
    },
  };
  var webpackModuleCache = {};
  function webpackRequire(moduleId) {
    var cachedModule = webpackModuleCache[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = (webpackModuleCache[moduleId] = {
      exports: {},
    });
    webpackModules[moduleId](module, module.exports, webpackRequire);
    return module.exports;
  }
  var webpackExports = {};
  (() => {
    const indexCss = webpackRequire('./src/index.css');
    console.log(indexCss);
  })();
})();
