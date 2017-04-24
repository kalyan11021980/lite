const { root } = require('./helpers');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

/**
 * This is a common webpack config which is the base for all builds
 */
module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    path: root('dist')
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: '@ngtools/webpack' },
      { test: /\.html$/, loader: 'raw-loader' },
      {
        test: /\.scss$/,
        use: ['to-string-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary 
          use: ['raw-loader', 'sass-loader']
        }))
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
};
