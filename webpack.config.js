const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const pathList = require('./pathList');
const loaders = require('./webpack.loaders');
const constants = require('./webpack.constants');
const eslintPlugin = require('./webpack.eslint');
const HappyPack = require('happypack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(constants.BUILD_ENV),
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.js',
    minChunks: Infinity,
  }),
  new HtmlWebpackPlugin({
    template: './static/index.html',
  }),
  new HappyPack({
    // 3) re-add the loaders you replaced above in #1:
    loaders: [ 'babel-loader' ]
  }),
  new ExtractTextPlugin('styles.css', {allChunks: true}),
];

if (eslintPlugin) {
  plugins.push(eslintPlugin);
}

module.exports = {
  plugins,
  entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      `${pathList.src}/index.jsx`,
    ],
    vendor: [
      'babel-polyfill',
      'react',
      'react-redux',
      'react-router',
      'react-dom',
      'redux',
      'redux-thunk',
      'seamless-immutable',
      'react-router-redux',
      'history',
      'lodash',
      'styled-components',
      'mappersmith',
      'prop-types',
    ],
  },
  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: path.resolve(__dirname, '/dist'),
    sourceMapFilename: '[name].js,map',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      pathList.src,
      'node_modules',
    ],
    alias: {
      components: path.resolve(__dirname, `${pathList.src}/components/`),
      containers: path.resolve(__dirname, `${pathList.src}/containers/`),
    },
  },
  devtool: process.env.WEBPACK_DEVTOOL || 'cheap-module-source-map',
  devServer: {
    contentBase: pathList.src,
    hot: true,
    port: constants.port,
    historyApiFallback: true,
  },
  module: {
    loaders,
  },
};
