const {
  getImportCode,
  stringifyRequest,
  getModuleCode,
  getExportCode,
  getPreRequester,
  combineRequests,
  getModulePlugins,
} = require('./utils');
const postcss = require('postcss');
const urlParser = require('./plugins/postcss-url-parser');
const importerParser = require('./plugins/postcss-importer-parser');
const icssParser = require('./plugins/postcss-icss-parser');
/**
 *
 * @param {*} content 将要转换的 CSS 文件的源代码
 */
function loader(content) {
  // 调用 async 方法可以把同步变成异步执行
  const callback = this.async();
  const options = this.getOptions();
  // 这是我将要使用的 postcss 插件
  const plugins = [];
  // 替换的变量名
  const replacements = [];
  const exports = [];
  // 如果 modules 为 true
  if (options.modules) {
    plugins.push(...getModulePlugins(this));
    plugins.push(
      icssParser({
        loaderContext: this,
        exports,
      })
    );
  }
  // 由于 url 插件导致的新导入的模块
  const urlPluginImports = [];
  // 定义将要通过 import 导入引入的模块
  const importPluginImports = [];
  const importPluginApi = [];
  if (options.import) {
    plugins.push(
      importerParser({
        imports: importPluginImports,
        loaderContext: this,
        api: importPluginApi,
        // 可以把绝对路径，变成相对路径
        urlHandler: (url) =>
          stringifyRequest(
            this,
            // getPreRequester(this, options) 要执行的 loader -> -!css-loader!logger-loader2!
            // url 代表要处理的文件的路径 basic.css
            combineRequests(getPreRequester(this, options), url) // -!css-loader!logger-loader2!basic.css
          ),
      })
    );
  }
  if (options.url) {
    plugins.push(
      urlParser({
        imports: urlPluginImports,
        replacements,
        urlHandler: (url) => stringifyRequest(this, url),
      })
    );
  }
  // 配置好 postcss 插件，并且开始处理 css 源代码
  postcss(plugins)
    .process(content, {
      from: this.resourcePath,
      to: this.resourcePath,
    })
    .then((result) => {
      const imports = [
        {
          importName: 'cssLoaderApiNoSourcemapImport',
          url: stringifyRequest(
            this,
            require.resolve('./runtime/noSourceMaps')
          ),
        },
        {
          importName: 'cssLoaderApiImport',
          url: stringifyRequest(this, require.resolve('./runtime/api')),
        },
      ];
      imports.push(...importPluginImports, ...urlPluginImports);
      const importCode = getImportCode(imports);
      const moduleCode = getModuleCode(result, importPluginApi, replacements);
      const exportCode = getExportCode(exports, options);
      callback(null, `${importCode}${moduleCode}${exportCode}`);
    });
}

module.exports = loader;
