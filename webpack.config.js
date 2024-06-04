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
            },
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
