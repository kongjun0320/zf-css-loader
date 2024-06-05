const icssUtils = require('icss-utils');

function plugin({ exports }) {
  return {
    postcssPlugin: 'postcss-icss-parser',
    // 当 AST 遍历完以后执行此方法
    async OnceExit(root) {
      // console.log(JSON.stringify(root, null, 2));
      const { icssExports } = icssUtils.extractICSS(root);
      for (const name of Object.keys(icssExports)) {
        const value = icssExports[name];
        exports.push({ name, value });
      }
    },
  };
}

plugin.postcss = true;
module.exports = plugin;

// 提取我们在上一个插件中写入 :export
