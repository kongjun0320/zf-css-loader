const valueParser = require('postcss-value-parser');
const cssText = `background-image:url('./images/kj.jpeg')`;
const parsedValue = valueParser(cssText);

console.log('parsedValue >>> ', parsedValue);

parsedValue.walk((node) => {
  if (node.type === 'function') {
    // console.log(node.value);
    // console.log(node.nodes);
    node.nodes[0].value = '新的图片路径';
  }
});

// valueParser 可以把声明的值转成语法树
const serializedValue = valueParser.stringify(parsedValue);

// console.log('serializedValue >>> ', serializedValue);

const nodes = [
  {
    type: 'word', // 单词
    sourceIndex: 0,
    sourceEndIndex: 16,
    value: 'background-image',
  },
  {
    type: 'div', // 分隔符的意思
    sourceIndex: 16,
    sourceEndIndex: 17,
    value: ':',
    before: '',
    after: '',
  },
  {
    type: 'function',
    sourceIndex: 17,
    value: 'url',
    before: '',
    after: '',
    sourceEndIndex: 40,
    nodes: [Array],
  },
];
