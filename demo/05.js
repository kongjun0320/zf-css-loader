const icssUtils = require('icss-utils');
const postcss = require('postcss');

function plugin() {
  return {
    postcssPlugin: 'postcss-icss-parser',
    // 当 AST 遍历完以后执行此方法
    OnceExit(root) {
      // console.log(JSON.stringify(root, null, 2));
      const { icssExports } = icssUtils.extractICSS(root);
      console.log('icssExports >>> ', icssExports);
    },
  };
}

plugin.postcss = true;

const inputCSS = `
.bak{}
:export{
  oldClassName: newClassName;
}
`;

const result = postcss([plugin()]).process(inputCSS);

console.log('result.css >>> ', result.css);
