const postcssModuleScope = require('./postcss-modules-scope');

function getImportCode(imports) {
  let code = '';
  for (const item of imports) {
    const { importName, url } = item;
    code += `var ${importName} = require('${url}');\n`;
  }
  return code;
}

function getModuleCode(result, api, replacements) {
  // 获取 css 的文本内容
  let code = JSON.stringify(result.css);
  let beforeCode = `var cssLoaderExport = cssLoaderApiImport(cssLoaderApiNoSourcemapImport);\n`;

  for (const item of api) {
    beforeCode += `cssLoaderExport.i(${item.importName});`;
  }

  for (const item of replacements) {
    const { importName, replacementName } = item;
    beforeCode += `var ${replacementName} = cssLoaderGetUrlImport(${importName});`;

    code = code.replace(
      new RegExp(replacementName, 'g'),
      () => `"+${replacementName}+"`
    );
  }

  return `${beforeCode} cssLoaderExport.push([module.id, ${code}, '']);`;
}

function getExportCode(exports, options) {
  let code = '';
  let localsCode = '';

  function addExportToLocalsCode(name, value) {
    if (localsCode) {
      localsCode += `,\n`;
    }
    localsCode += `\t${JSON.stringify(name)}:${JSON.stringify(value)}`;
  }

  for (const { name, value } of exports) {
    addExportToLocalsCode(name, value);
  }

  if (options.modules.exportOnlyLocals) {
    return (
      (options.esModule ? `export default` : `module.exports `) +
      `\n ${localsCode}}; \n}`
    );
  }

  code += ` cssLoaderExport.locals = {\n
    ${localsCode}
  }; \n`;

  code += options.esModule
    ? `export default cssLoaderExport`
    : `module.exports = cssLoaderExport;`;

  console.log('code >>> ', code);

  return code;
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
// 合并请求
function combineRequests(preRequest, request) {
  return preRequest + request;
}
// 获取要执行几个 loader
// loaders 所有的 loader，loaderIndex 当前正在执行的 loader 的索引 importName 是用户配置的要执行的 loader
function getPreRequester({ loaders, loaderIndex }, { importLoaders = 0 }) {
  const loaderRequest = loaders
    .slice(loaderIndex, loaderIndex + importLoaders + 1)
    .map((x) => x.request)
    .join('!');

  return `-!${loaderRequest}!`;
}

function getModulePlugins(loaderContext) {
  return [postcssModuleScope({ loaderContext })];
}

exports.getImportCode = getImportCode;
exports.stringifyRequest = stringifyRequest;
exports.getModuleCode = getModuleCode;
exports.getExportCode = getExportCode;
exports.combineRequests = combineRequests;
exports.getPreRequester = getPreRequester;
exports.getModulePlugins = getModulePlugins;
