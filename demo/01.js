const valueParser = require('postcss-value-parser');
const cssText = `background-image:url('./images/kj.jpeg')`;
const parsedValue = valueParser(cssText);

// console.log('parsedValue >>> ', parsedValue);

parsedValue.walk((node) => {
  if (node.type === 'function') {
    // console.log(node.value);
    // console.log(node.nodes);
    node.nodes[0].value = '新的图片路径';
  }
});

const serializedValue = valueParser.stringify(parsedValue);

console.log('serializedValue >>> ', serializedValue);
