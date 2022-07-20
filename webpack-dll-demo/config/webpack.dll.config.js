/*
 * @Author: 程羽 chengyu@iri.cn
 * @Date: 2022-07-18 15:58:21
 * @LastEditors: 程羽
 * @LastEditTime: 2022-07-19 08:46:32
 * @Description: 
 */
const path = require("path");
const webpack = require("webpack");
module.exports = {
  mode: "production",
  // devtool: false,
  entry: {
    geo: [
      "./src/resources/bin/geotoolkit.react"
    ],
  },
  output: {
    filename: "[name].dll.js",
    path: path.resolve(__dirname, "dll"),
    library: "[name]",
  },
  resolve:{
    fallback: { "child_process": false,"util": false, "url": false,  "buffer": false, "path": false,"http": false, "os": false, "https": false, "assert": false, "fs":false, stream: false,"zlib": false, "net": false, "tls": false }
  },
  plugins: [
    new webpack.DllPlugin({
      name: "[name]",
      path: path.resolve(__dirname, "dll/[name].manifest.json"),
    }),
  ],
};
