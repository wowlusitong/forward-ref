const path = require('path');

const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: ['./src/scripts/index.js']
  },
  output: {
    filename: 'bundle-[hash].js',
    path: path.resolve(__dirname, 'dist/assets'),
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              root: '../../'
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    quiet: true,
    hot: true,
    open: true
  }
};
