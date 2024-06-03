function getImportCode(imports) {
  let code = '';
  for (const item of imports) {
    const { importName, url } = item;
    code += `var ${importName} = require('${url}');\n`;
  }
  return code;
}

function getModuleCode(result) {
  // 获取 css 的文本内容
  let code = JSON.stringify(result.css);
  let beforeCode = `var cssLoaderExport = cssLoaderApiImport(cssLoaderApiNoSourcemapImport);\n`;
  return `${beforeCode} cssLoaderExport.push([module.id, ${code}, '']);`;
}

function getExportCode(options) {
  return options.esModule
    ? `export default cssLoaderExport;`
    : `module.exports = cssLoaderExport;`;
}

/**
 * 用于把请求字符串，一般是绝对路径变成相对于当前的正在转换模块的相对路径
 * @param {*} loaderContext
 * @param {*} request
 * @returns
 */
function stringifyRequest(loaderContext, request) {
  return loaderContext.utils.contextify(loaderContext.context, request);
}

exports.getImportCode = getImportCode;
exports.stringifyRequest = stringifyRequest;
exports.getModuleCode = getModuleCode;
exports.getExportCode = getExportCode;
