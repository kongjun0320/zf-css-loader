const valueParser = require('postcss-value-parser');

/**
 * 此插件的功能是要找到 css 源代码中的 url 地址
 * @param {*} param0
 * @returns
 */
const plugin = ({ imports, urlHandler, replacements }) => {
  return {
    // 给插件起一个名字，用来解析 url 路径
    postcssPlugin: 'postcss-url-parser',
    // prepare 的逻辑会在开始解析 css 语法树之前触发
    prepare() {
      // 定义一个数组，用于存储解析好的声明
      const parsedDeclarations = [];

      return {
        // 在 postcss 内部会进行语法树的遍历，当遍历到 Declaration 节点的时候，就会进入此函数
        Declaration(declaration) {
          // 通过 parsedDeclaration 解析声明，获取解析后的值
          const parsedURLs = parsedDeclaration(declaration);
          parsedDeclarations.push(...parsedURLs);
        },
        // 用于处理结束时的逻辑
        OnceExit() {
          // 如果 css 中没有引入任何的 url 地址，直接返回
          if (parsedDeclarations.length === 0) {
            return;
          }
          imports.push({
            type: 'get_url_import',
            importName: 'cssLoaderGetUrlImport',
            url: urlHandler(require.resolve('../runtime/getUrl')),
          });
          for (let index = 0; index < parsedDeclarations.length; index++) {
            const item = parsedDeclarations[index];
            const { url, node } = item;
            const importName = `cssLoaderUrlImport_${index}`;
            // 将 url 导入信息添加到 imports 数组中
            imports.push({
              type: 'url', // 只是用来标识一下，是什么原因导致引入的此模块
              importName,
              url,
            });
            // 为当前的 url 地址生成一个新的替换名称
            // 这个变量有点像占位符
            const replacementName = `cssLoaderUrlReplacement${index}`;
            replacements.push({
              replacementName, // 替换后的名称
              importName, // 这是要替换的名称
            });
            // 把节点的值改为替换后的变量名
            node.value = replacementName;
            // 修改语法树
            item.declaration.value = item.parsed.toString();
          }
        },
      };
    },
  };
};

const needParseDeclaration = /(?:url)\(/i; // url()
const isUrlFunc = /url/i;

function parsedDeclaration(declaration) {
  // 如果声明的值里不包含需要解析的 url 函数，则跳过解析
  if (!needParseDeclaration.test(declaration.value)) {
    return [];
  }
  // 用 valueParser 来解析声明的值，得到一个节点数
  const parsed = valueParser(declaration.value);
  const parsedURLs = [];
  //   使用 walk 方法遍历语法树的各个节点
  parsed.walk((valueNode) => {
    if (valueNode.type !== 'function') {
      return;
    }
    // 判断 url 的名字叫 url
    if (isUrlFunc.test(valueNode.value)) {
      // 从当前的函数节点中提取子节点数组
      const { nodes } = valueNode;
      // 把子节点数组转换成字符串
      const url = valueParser.stringify(nodes);
      parsedURLs.push({
        declaration, // 声明本身  background-image: url('./images/kj.jpeg');
        node: nodes[0], // {value: './images/kj.jpeg'}
        url, //  './images/kj.jpeg'
        parsed, // 当前声明的节点语法树
      });
    }
  });

  return parsedURLs;
}

// 表示这是一个 postcss 插件
plugin.postcss = true;
module.exports = plugin;
