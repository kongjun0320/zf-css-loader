var webpackModules = {
  './src/index.css': (module, exports, require) => {
    // 用来获取数组中的第2个元素
    const noSourceMaps = require('./node_modules/css-loader/dist/runtime/noSourceMaps.js');
    const api = require('./node_modules/css-loader/dist/runtime/api.js');
    const cssLoaderExport = api(noSourceMaps);
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

  './node_modules/css-loader/dist/runtime/noSourceMaps.js': (module) => {
    module.exports = function (i) {
      return i[1];
    };
  },

  './node_modules/css-loader/dist/runtime/api.js': (module) => {
    module.exports = (cssWithMappingToString) => {
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
};

function require(moduleId) {
  var module = {
    id: moduleId,
    exports: {},
  };
  webpackModules[moduleId](module, module.exports, require);
  return module.exports;
}

const indexCss = require('./src/index.css');
console.log(indexCss);
