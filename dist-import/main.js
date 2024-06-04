(() => {
  var webpackModules = {
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[0]!./src/basic.css':
      (module, __unused_webpack_exports, webpackRequire) => {
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
  background-color: green;
}
`,
          '',
        ]);
        module.exports = cssLoaderExport;
      },
    './src/index.css': (module, __unused_webpack_exports, webpackRequire) => {
      var cssLoaderApiNoSourcemapImport = webpackRequire(
        './node_modules/css-loader/dist/runtime/noSourceMaps.js'
      );
      var cssLoaderApiImport = webpackRequire(
        './node_modules/css-loader/dist/runtime/api.js'
      );
      // 1. 第一步
      var cssLoaderAtRuleImport0 = webpackRequire(
        './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[0]!./src/basic.css'
      );
      var cssLoaderExport = cssLoaderApiImport(cssLoaderApiNoSourcemapImport);
      // 2. 第二步
      cssLoaderExport.i(cssLoaderAtRuleImport0);
      cssLoaderExport.push([
        module.id,
        `
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
            var needLayer = typeof item[5] !== 'undefined';
            if (item[4]) {
              content += '@supports ('.concat(item[4], ') {');
            }
            if (item[2]) {
              content += '@media '.concat(item[2], ' {');
            }
            if (needLayer) {
              content += '@layer'.concat(
                item[5].length > 0 ? ' '.concat(item[5]) : '',
                ' {'
              );
            }
            content += cssWithMappingToString(item);
            if (needLayer) {
              content += '}';
            }
            if (item[2]) {
              content += '}';
            }
            if (item[4]) {
              content += '}';
            }
            return content;
          }).join('');
        };
        list.i = function i(modules, media, dedupe, supports, layer) {
          if (typeof modules === 'string') {
            modules = [[null, modules, undefined]];
          }
          var alreadyImportedModules = {};
          if (dedupe) {
            for (var k = 0; k < this.length; k++) {
              var id = this[k][0];
              if (id != null) {
                alreadyImportedModules[id] = true;
              }
            }
          }
          for (var _k = 0; _k < modules.length; _k++) {
            var item = [].concat(modules[_k]);
            list.push(item);
          }
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
    const indexCss = webpackRequire('./src/index.css');
    console.log(indexCss);
  })();
})();
