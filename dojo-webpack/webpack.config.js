 const path = require('path');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const DojoWebpackPlugin = require('dojo-webpack-plugin');
  module.exports = {
    entry: {
      validateBox: 'demo/src/validate.js'
    },
    plugins: [
      new CleanWebpackPlugin(),
       new HtmlWebpackPlugin({
          title: 'Validate',
          template: path.resolve(__dirname, 'demo/src/index.ejs')
      }),
      new DojoWebpackPlugin({
        loaderConfig: require("./loaderConfig"),
				environment: {dojoRoot: "release"},	// used at run time for non-packed resources (e.g. blank.gif)
				buildEnvironment: {dojoRoot: "node_modules"}, // used at build time
        locales: ["en", "es", "fr"]
      })
    ],
    devtool: 'inline-source-map',
    
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'demo/dist')
    }
  };