const { getImportCode, stringifyRequest } = require('./utils');

/**
 *
 * @param {*} content 将要转换的 CSS 文件的源代码
 */
function loader(content) {
  // 调用 async 方法可以把同步变成异步执行
  const callback = this.async();
  const imports = [
    {
      importName: 'cssLoaderApiNoSourcemapImport',
      url: stringifyRequest(this, require.resolve('./runtime/noSourceMaps')),
    },
    {
      importName: 'cssLoaderApiImport',
      url: stringifyRequest(this, require.resolve('./runtime/api')),
    },
  ];
  const importCode = getImportCode(imports);
  const moduleCode = '';
  const exportCode = '';
  callback(null, `${importCode}${moduleCode}${exportCode}`);
}

module.exports = loader;