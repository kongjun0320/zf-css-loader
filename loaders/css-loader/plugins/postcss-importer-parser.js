const valueParser = require('postcss-value-parser');

function parseNode(atRule) {
  const params = atRule.params; // "basic.css"
  const valueNode = valueParser(params);
  const url = valueNode.nodes[0].value;

  return {
    atRule,
    url, // basic.css
  };
}

const plugin = ({ imports, loaderContext, urlHandler, api }) => {
  return {
    postcssPlugin: 'postcss-import-parser',
    prepare() {
      // 存储解析到的 @import 规则
      const parsedAtRules = [];
      return {
        AtRule: {
          import(atRule) {
            // 捕获 @import
            let parsedAtRule = parseNode(atRule);
            parsedAtRules.push(parsedAtRule);
          },
        },
        async OnceExit() {
          if (parsedAtRules.length === 0) {
            return;
          }
          // 通过此方法可以得到一个可以用来解析路径的解析器
          const resolver = loaderContext.getResolve();

          for (let index = 0; index < parsedAtRules.length; index++) {
            const { atRule, url } = parsedAtRules[index];
            // 语法转换后其实这个 @import 语法就消失了，删除原始的 @import 规则
            atRule.remove();
            // loaderContext.context 指的是模块所有的目录，resolvedUrl 是绝对路径
            const resolvedUrl = await resolver(
              loaderContext.context,
              './' + url
            );

            const importName = `cssLoaderAtRuleImport${index}`;
            imports.push({
              type: 'url_import',
              importName,
              url: urlHandler(resolvedUrl),
            });

            api.push({
              importName,
            });
          }
        },
      };
    },
  };
};

// 表示这是一个 postcss 插件
plugin.postcss = true;
module.exports = plugin;
