module.exports = function (cssWithMappingToString) {
  var list = [];
  list.toString = function toString() {
    return this.map(function (item) {
      var content = '';
      content += cssWithMappingToString(item);
      return content;
    }).join('');
  };
  return list;
};
