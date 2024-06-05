(() => {
  var webpackModules = {
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./loaders/logger-loader/index.js!./src/modules.css':
      (module, __unused_webpack_exports, webpackRequire) => {
        var cssLoaderApiNoSourcemapImport = webpackRequire(
          './node_modules/css-loader/dist/runtime/noSourceMaps.js'
        );
        var cssLoaderApiImport = webpackRequire(
          './node_modules/css-loader/dist/runtime/api.js'
        );
        var cssLoaderExport = cssLoaderApiImport(cssLoaderApiNoSourcemapImport);
        // 1.
        cssLoaderExport.push([
          module.id,
          `.tTVAWtb51GjW37uc5IbF {
  width: 100px;
  height: 100px;
  background-color: green;
}
`,
          '',
        ]);
        // 2.
        cssLoaderExport.locals = {
          background: `tTVAWtb51GjW37uc5IbF`,
        };
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
    './node_modules/css-loader/dist/runtime/noSourceMaps.js': (module) => {
      'use strict';
      module.exports = function (i) {
        return i[1];
      };
    },
    './src/modules.css': (
      __unused_webpack_module,
      webpackExports,
      webpackRequire
    ) => {
      'use strict';
      webpackRequire.r(webpackExports);
      webpackRequire.d(webpackExports, {
        default: () => webpackDefaultExport,
      });
      var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_jswebpackImportedModule0 =
        webpackRequire(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        );
      var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_jswebpackImportedModule0default =
        webpackRequire.n(
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_jswebpackImportedModule0
        );
      var _node_modules_style_loader_dist_runtime_styleDomAPI_jswebpackImportedModule1 =
        webpackRequire(
          './node_modules/style-loader/dist/runtime/styleDomAPI.js'
        );
      var _node_modules_style_loader_dist_runtime_styleDomAPI_jswebpackImportedModule1default =
        webpackRequire.n(
          _node_modules_style_loader_dist_runtime_styleDomAPI_jswebpackImportedModule1
        );
      var _node_modules_style_loader_dist_runtime_insertBySelector_jswebpackImportedModule2 =
        webpackRequire(
          './node_modules/style-loader/dist/runtime/insertBySelector.js'
        );
      var _node_modules_style_loader_dist_runtime_insertBySelector_jswebpackImportedModule2default =
        webpackRequire.n(
          _node_modules_style_loader_dist_runtime_insertBySelector_jswebpackImportedModule2
        );
      var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_jswebpackImportedModule3 =
        webpackRequire(
          './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js'
        );
      var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_jswebpackImportedModule3default =
        webpackRequire.n(
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_jswebpackImportedModule3
        );
      var _node_modules_style_loader_dist_runtime_insertStyleElement_jswebpackImportedModule4 =
        webpackRequire(
          './node_modules/style-loader/dist/runtime/insertStyleElement.js'
        );
      var _node_modules_style_loader_dist_runtime_insertStyleElement_jswebpackImportedModule4default =
        webpackRequire.n(
          _node_modules_style_loader_dist_runtime_insertStyleElement_jswebpackImportedModule4
        );
      var _node_modules_style_loader_dist_runtime_styleTagTransform_jswebpackImportedModule5 =
        webpackRequire(
          './node_modules/style-loader/dist/runtime/styleTagTransform.js'
        );
      var _node_modules_style_loader_dist_runtime_styleTagTransform_jswebpackImportedModule5default =
        webpackRequire.n(
          _node_modules_style_loader_dist_runtime_styleTagTransform_jswebpackImportedModule5
        );
      var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_loaders_logger_loader_index_js_modules_csswebpackImportedModule6 =
        webpackRequire(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./loaders/logger-loader/index.js!./src/modules.css'
        );
      var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_loaders_logger_loader_index_js_modules_csswebpackImportedModule6default =
        webpackRequire.n(
          _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_loaders_logger_loader_index_js_modules_csswebpackImportedModule6
        );
      var webpackReexportObject = {};
      for (const webpackImportKey in _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_loaders_logger_loader_index_js_modules_csswebpackImportedModule6)
        if (webpackImportKey !== 'default')
          webpackReexportObject[webpackImportKey] = () =>
            _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_loaders_logger_loader_index_js_modules_csswebpackImportedModule6[
              webpackImportKey
            ];
      webpackRequire.d(webpackExports, webpackReexportObject);
      var options = {};
      options.styleTagTransform =
        _node_modules_style_loader_dist_runtime_styleTagTransform_jswebpackImportedModule5default();
      options.setAttributes =
        _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_jswebpackImportedModule3default();
      options.insert =
        _node_modules_style_loader_dist_runtime_insertBySelector_jswebpackImportedModule2default().bind(
          null,
          'head'
        );
      options.domAPI =
        _node_modules_style_loader_dist_runtime_styleDomAPI_jswebpackImportedModule1default();
      options.insertStyleElement =
        _node_modules_style_loader_dist_runtime_insertStyleElement_jswebpackImportedModule4default();
      var update =
        _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_jswebpackImportedModule0default()(
          _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_loaders_logger_loader_index_js_modules_csswebpackImportedModule6default(),
          options
        );
      const webpackDefaultExport =
        _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_loaders_logger_loader_index_js_modules_csswebpackImportedModule6default() &&
        _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_loaders_logger_loader_index_js_modules_csswebpackImportedModule6default()
          .locals
          ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_loaders_logger_loader_index_js_modules_csswebpackImportedModule6default()
              .locals
          : undefined;
    },
    './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js': (
      module
    ) => {
      'use strict';
      var stylesInDOM = [];
      function getIndexByIdentifier(identifier) {
        var result = -1;
        for (var i = 0; i < stylesInDOM.length; i++) {
          if (stylesInDOM[i].identifier === identifier) {
            result = i;
            break;
          }
        }
        return result;
      }
      function modulesToDom(list, options) {
        var idCountMap = {};
        var identifiers = [];
        for (var i = 0; i < list.length; i++) {
          var item = list[i];
          var id = options.base ? item[0] + options.base : item[0];
          var count = idCountMap[id] || 0;
          var identifier = ''.concat(id, ' ').concat(count);
          idCountMap[id] = count + 1;
          var indexByIdentifier = getIndexByIdentifier(identifier);
          var obj = {
            css: item[1],
            media: item[2],
            sourceMap: item[3],
            supports: item[4],
            layer: item[5],
          };
          if (indexByIdentifier !== -1) {
            stylesInDOM[indexByIdentifier].references++;
            stylesInDOM[indexByIdentifier].updater(obj);
          } else {
            var updater = addElementStyle(obj, options);
            options.byIndex = i;
            stylesInDOM.splice(i, 0, {
              identifier: identifier,
              updater: updater,
              references: 1,
            });
          }
          identifiers.push(identifier);
        }
        return identifiers;
      }
      function addElementStyle(obj, options) {
        var api = options.domAPI(options);
        api.update(obj);
        var updater = function updater(newObj) {
          if (newObj) {
            if (
              newObj.css === obj.css &&
              newObj.media === obj.media &&
              newObj.sourceMap === obj.sourceMap &&
              newObj.supports === obj.supports &&
              newObj.layer === obj.layer
            ) {
              return;
            }
            api.update((obj = newObj));
          } else {
            api.remove();
          }
        };
        return updater;
      }
      module.exports = function (list, options) {
        options = options || {};
        list = list || [];
        var lastIdentifiers = modulesToDom(list, options);
        return function update(newList) {
          newList = newList || [];
          for (var i = 0; i < lastIdentifiers.length; i++) {
            var identifier = lastIdentifiers[i];
            var index = getIndexByIdentifier(identifier);
            stylesInDOM[index].references--;
          }
          var newLastIdentifiers = modulesToDom(newList, options);
          for (var _i = 0; _i < lastIdentifiers.length; _i++) {
            var _identifier = lastIdentifiers[_i];
            var _index = getIndexByIdentifier(_identifier);
            if (stylesInDOM[_index].references === 0) {
              stylesInDOM[_index].updater();
              stylesInDOM.splice(_index, 1);
            }
          }
          lastIdentifiers = newLastIdentifiers;
        };
      };
    },
    './node_modules/style-loader/dist/runtime/insertBySelector.js': (
      module
    ) => {
      'use strict';
      var memo = {};
      function getTarget(target) {
        if (typeof memo[target] === 'undefined') {
          var styleTarget = document.querySelector(target);
          if (
            window.HTMLIFrameElement &&
            styleTarget instanceof window.HTMLIFrameElement
          ) {
            try {
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              styleTarget = null;
            }
          }
          memo[target] = styleTarget;
        }
        return memo[target];
      }
      function insertBySelector(insert, style) {
        var target = getTarget(insert);
        if (!target) {
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        }
        target.appendChild(style);
      }
      module.exports = insertBySelector;
    },
    './node_modules/style-loader/dist/runtime/insertStyleElement.js': (
      module
    ) => {
      'use strict';
      function insertStyleElement(options) {
        var element = document.createElement('style');
        options.setAttributes(element, options.attributes);
        options.insert(element, options.options);
        return element;
      }
      module.exports = insertStyleElement;
    },
    './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js':
      (module, __unused_webpack_exports, webpackRequire) => {
        'use strict';
        function setAttributesWithoutAttributes(styleElement) {
          var nonce = true ? webpackRequire.nc : 0;
          if (nonce) {
            styleElement.setAttribute('nonce', nonce);
          }
        }
        module.exports = setAttributesWithoutAttributes;
      },
    './node_modules/style-loader/dist/runtime/styleDomAPI.js': (module) => {
      'use strict';
      function apply(styleElement, options, obj) {
        var css = '';
        if (obj.supports) {
          css += '@supports ('.concat(obj.supports, ') {');
        }
        if (obj.media) {
          css += '@media '.concat(obj.media, ' {');
        }
        var needLayer = typeof obj.layer !== 'undefined';
        if (needLayer) {
          css += '@layer'.concat(
            obj.layer.length > 0 ? ' '.concat(obj.layer) : '',
            ' {'
          );
        }
        css += obj.css;
        if (needLayer) {
          css += '}';
        }
        if (obj.media) {
          css += '}';
        }
        if (obj.supports) {
          css += '}';
        }
        var sourceMap = obj.sourceMap;
        if (sourceMap && typeof btoa !== 'undefined') {
          css += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
            ' */'
          );
        }
        options.styleTagTransform(css, styleElement, options.options);
      }
      function removeStyleElement(styleElement) {
        if (styleElement.parentNode === null) {
          return false;
        }
        styleElement.parentNode.removeChild(styleElement);
      }
      function domAPI(options) {
        if (typeof document === 'undefined') {
          return {
            update: function update() {},
            remove: function remove() {},
          };
        }
        var styleElement = options.insertStyleElement(options);
        return {
          update: function update(obj) {
            apply(styleElement, options, obj);
          },
          remove: function remove() {
            removeStyleElement(styleElement);
          },
        };
      }
      module.exports = domAPI;
    },
    './node_modules/style-loader/dist/runtime/styleTagTransform.js': (
      module
    ) => {
      'use strict';
      function styleTagTransform(css, styleElement) {
        if (styleElement.styleSheet) {
          styleElement.styleSheet.cssText = css;
        } else {
          while (styleElement.firstChild) {
            styleElement.removeChild(styleElement.firstChild);
          }
          styleElement.appendChild(document.createTextNode(css));
        }
      }
      module.exports = styleTagTransform;
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
    webpackRequire.n = (module) => {
      var getter =
        module && module.__esModule ? () => module['default'] : () => module;
      webpackRequire.d(getter, {
        a: getter,
      });
      return getter;
    };
  })();
  (() => {
    webpackRequire.d = (exports, definition) => {
      for (var key in definition) {
        if (
          webpackRequire.o(definition, key) &&
          !webpackRequire.o(exports, key)
        ) {
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
        }
      }
    };
  })();
  (() => {
    webpackRequire.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
  })();
  (() => {
    webpackRequire.r = (exports) => {
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
      }
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
    };
  })();
  (() => {
    webpackRequire.nc = undefined;
  })();
  var webpackExports = {};
  (() => {
    const modulesCss = webpackRequire('./src/modules.css');
    const div = document.createElement('div');
    div.className = modulesCss.locals.background;
    document.body.appendChild(div);
    console.log(modulesCss);
  })();
})();
