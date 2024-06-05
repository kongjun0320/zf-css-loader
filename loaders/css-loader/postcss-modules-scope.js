const crypto = require('crypto');
const selectorParser = require('postcss-selector-parser');

function generateScopeName(className, loaderContext) {
  const hash = crypto
    .createHash('md5')
    .update(loaderContext.resourcePath)
    .digest('hex');
  return `_${hash}__${className}`;
}

const plugin = ({ loaderContext }) => {
  // 返回 postcss 的插件对象
  return {
    postcssPlugin: 'postcss-modules-scope',
    // 表示在处理 postcss 语法树根节点的时候走一次
    Once(root, { rule }) {
      // 创建一个新的空对象
      const exports = Object.create(null);

      function exportScopeName(name) {
        const scopedName = generateScopeName(name, loaderContext);
        exports[name] = scopedName;
        return scopedName;
      }

      function localizeNode(node) {
        switch (node.type) {
          case 'selector':
            node.nodes = node.map(localizeNode);
            return node;

          case 'class':
            // 生成一个新的类名选择器
            return selectorParser.className({
              value: exportScopeName(node.value),
            });
        }
      }

      function traverseNode(node) {
        if (node.type === 'root' || node.type === 'selector') {
          // 遍历它的所有子节点
          node.each(traverseNode);
          // 说明找到我们想要的伪类节点
        } else if (node.type === 'pseudo' && node.value === ':local') {
          const selector = localizeNode(node.first);
          node.replaceWith(selector);
        }

        return node;
      }

      // 遍历语法树中所有的规则
      root.walkRules((rule) => {
        // 把此规则的选择器变成一个对象 :local('background')
        const parsedSelector = selectorParser().astSync(rule);
        rule.selector = traverseNode(parsedSelector.clone()).toString();
      });

      const exportedNames = Object.keys(exports);
      if (exportedNames.length > 0) {
        // rule 这个工厂函数生成一个新的规则 :export {}
        const exportRule = rule({
          selector: ':export',
        });
        // 遍历所有的老类名
        exportedNames.forEach((exportedName) => {
          // 向导出规则中，添加新的属性和值，也就是声明
          exportRule.append({
            prop: exportedName,
            value: exports[exportedName],
            raw: {
              before: '\n',
            },
          });
        });
        root.append(exportRule);
      }
    },
  };
};

plugin.postcss = true;
module.exports = plugin;
