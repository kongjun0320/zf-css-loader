const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: false,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: path.resolve('loaders/style-loader'),
            // loader: 'style-loader',
          },
          {
            // loader: 'css-loader',
            loader: path.resolve('loaders/css-loader'),
            options: {
              esModule: false,
              url: true,
              import: true, // 支持 import 导入别的 css 文件
              // 在处理包含的 css 之前要执行几个 前置 loader
              importLoaders: 0,
            },
          },
          {
            loader: path.resolve(__dirname, 'loaders/logger-loader'),
          },
        ],
      },
      {
        test: /.jpeg$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html'),
    }),
  ],
};
