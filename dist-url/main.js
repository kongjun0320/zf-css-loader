(() => {
  var webpackModules = {
    './src/index.css': (
      __unused_webpack_module,
      __unused_webpack_exports,
      webpackRequire
    ) => {
      let content = webpackRequire(
        './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./src/index.css'
      );
      let element = document.createElement('style');
      element.innerHTML = content.toString();
      document.head.appendChild(element);
    },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./src/index.css':
      (module, __unused_webpack_exports, webpackRequire) => {
        var cssLoaderApiNoSourcemapImport = webpackRequire(
          './node_modules/css-loader/dist/runtime/noSourceMaps.js'
        );
        var cssLoaderApiImport = webpackRequire(
          './node_modules/css-loader/dist/runtime/api.js'
        );
        // 1、
        var cssLoaderGetUrlImport = webpackRequire(
          './node_modules/css-loader/dist/runtime/getUrl.js'
        );
        // 2、加载图片，获取图片的路径
        var cssLoaderUrlImport0 = webpackRequire('./src/images/kj.jpeg');
        var cssLoaderExport = cssLoaderApiImport(cssLoaderApiNoSourcemapImport);
        // 3、把图片的路径交给
        var cssLoaderUrlReplacement0 =
          cssLoaderGetUrlImport(cssLoaderUrlImport0);
        // 4、把 css 内容进行替换
        cssLoaderExport.push([
          module.id,
          `body {
  color: red;
  background-image: url(${cssLoaderUrlReplacement0});
  background-repeat: no-repeat;
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
            if (dedupe && alreadyImportedModules[item[0]]) {
              continue;
            }
            if (typeof layer !== 'undefined') {
              if (typeof item[5] === 'undefined') {
                item[5] = layer;
              } else {
                item[1] = '@layer'
                  .concat(item[5].length > 0 ? ' '.concat(item[5]) : '', ' {')
                  .concat(item[1], '}');
                item[5] = layer;
              }
            }
            if (media) {
              if (!item[2]) {
                item[2] = media;
              } else {
                item[1] = '@media '.concat(item[2], ' {').concat(item[1], '}');
                item[2] = media;
              }
            }
            if (supports) {
              if (!item[4]) {
                item[4] = ''.concat(supports);
              } else {
                item[1] = '@supports ('
                  .concat(item[4], ') {')
                  .concat(item[1], '}');
                item[4] = supports;
              }
            }
            list.push(item);
          }
        };
        return list;
      };
    },
    './node_modules/css-loader/dist/runtime/getUrl.js': (module) => {
      'use strict';
      module.exports = function (url, options) {
        // if (!options) {
        //   options = {};
        // }
        // if (!url) {
        //   return url;
        // }
        // url = String(url.__esModule ? url.default : url);
        // if (/^['"].*['"]$/.test(url)) {
        //   url = url.slice(1, -1);
        // }
        // if (options.hash) {
        //   url += options.hash;
        // }
        // if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
        //   return '"'.concat(
        //     url.replace(/"/g, '\\"').replace(/\n/g, '\\n'),
        //     '"'
        //   );
        // }
        return url;
      };
    },
    './node_modules/css-loader/dist/runtime/noSourceMaps.js': (module) => {
      'use strict';
      module.exports = function (i) {
        return i[1];
      };
    },
    './src/images/kj.jpeg': (
      module,
      __unused_webpack_exports,
      webpackRequire
    ) => {
      'use strict';
      module.exports = webpackRequire.p + 'c62e96e7bf8e4accbb58.jpeg';
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
  (() => {
    webpackRequire.g = (function () {
      if (typeof globalThis === 'object') return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if (typeof window === 'object') return window;
      }
    })();
  })();
  (() => {
    var scriptUrl;
    if (webpackRequire.g.importScripts)
      scriptUrl = webpackRequire.g.location + '';
    var document = webpackRequire.g.document;
    if (!scriptUrl && document) {
      if (document.currentScript) scriptUrl = document.currentScript.src;
      if (!scriptUrl) {
        var scripts = document.getElementsByTagName('script');
        if (scripts.length) {
          var i = scripts.length - 1;
          while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl)))
            scriptUrl = scripts[i--].src;
        }
      }
    }
    if (!scriptUrl)
      throw new Error('Automatic publicPath is not supported in this browser');
    scriptUrl = scriptUrl
      .replace(/#.*$/, '')
      .replace(/\?.*$/, '')
      .replace(/\/[^\/]+$/, '/');
    webpackRequire.p = scriptUrl;
  })();
  var webpackExports = {};
  (() => {
    const indexCss = webpackRequire('./src/index.css');
    console.log(indexCss);
  })();
})();
