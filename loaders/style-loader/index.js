const { stringifyRequest } = require('../css-loader/utils');

function loader(sourceCode) {}

/**
 *
 * @param {*} remainingRequest 剩下的请求 css-loader!index.css
 * @param {*} precedingRequest
 * @param {*} data
 */
loader.pitch = function (remainingRequest) {
  // !! 只要行内
  let contentCode = `
    let content = require('${stringifyRequest(this, `!!${remainingRequest}`)}');
    let element = document.createElement('style');
    element.innerHTML = content.toString();
    document.head.appendChild(element);
  `;
  return contentCode;
};

module.exports = loader;
