 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 
 console.log(process);

  module.exports = {
    entry: './src/index.ts',
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
         title: 'Progressive Web Application'
      })
    ],
    devtool: 'inline-source-map',
     module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };