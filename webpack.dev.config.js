const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const { merge } = require('webpack-merge');
const path = require('path');
const config = require('./webpack.config');

module.exports = merge(config, {
  mode: 'development',
  plugins: [
    new ESLintWebpackPlugin({
      extensions: ['js', 'jsx'],
      fix: true,
    }),
  ],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
    open: true,
    hot: true,
  },
});
