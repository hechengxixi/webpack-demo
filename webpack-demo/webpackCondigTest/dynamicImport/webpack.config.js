const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist'
    },
    plugins: [
        new ManifestPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: path.resolve(__dirname, 'src/index.ejs')
        })
    ],
    output: {
        filename: '[name].bundle.[chunkhash].js',
        chunkFilename: '[name].bundle.[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
   // mode:'production', // bundle压缩 ,default
    mode:'development' // bundle未压缩
};
