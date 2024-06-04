const {
  getImportCode,
  stringifyRequest,
  getModuleCode,
  getExportCode,
} = require('./utils');
const postcss = require('postcss');
const urlParser = require('./plugins/postcss-url-parser');
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
  // 由于 url 插件导致的新导入的模块
  const urlPluginImports = [];
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
      imports.push(...urlPluginImports);
      const importCode = getImportCode(imports);
      const moduleCode = getModuleCode(result, replacements);
      const exportCode = getExportCode(options);
      callback(null, `${importCode}${moduleCode}${exportCode}`);
    });
}

module.exports = loader;
