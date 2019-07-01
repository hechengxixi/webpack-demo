/*
 * (C) Copyright IBM Corp. 2012, 2016 All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *	 http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DojoWebpackPlugin = require("dojo-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var UglifyJsPlugin = require("uglifyjs-webpack-plugin");

var path = require("path");
var webpack = require("webpack");

module.exports = env => {
  const devmode = !!(env||{}).dev;
	return {
		context: __dirname,
		entry: "js/bootstrap",
		output: {
			path: path.join(__dirname, "release"),
			publicPath: "release/",
			pathinfo: true,
			filename: "bundle.js"
		},
		module: {
			rules: [{
		    test: /\.(png)|(gif)$/,
		    use: [
		      {
		        loader: 'url-loader',
		        options: {
		          limit: 100000
		        }
		      }
		    ]
		  }]
		},
		plugins: [
			new DojoWebpackPlugin({
				loaderConfig: require("./js/loaderConfig"),
				environment: {dojoRoot: "release"},	// used at run time for non-packed resources (e.g. blank.gif)
				buildEnvironment: {dojoRoot: "node_modules"}, // used at build time
				locales: ["en"],
				noConsole: true
			}),

			// Copy non-packed resources needed by the app to the release directory
			new CopyWebpackPlugin([{
				context: "node_modules",
				from: "dojo",
				to: "dojo",
                toType:"dir"
			},
            {
            	context: "node_modules",
            	from: "dijit",
            	to: "dijit",
                toType:"dir"
            }]),
            
            // 此插件使bundle中的require在window.require不可用
            //new DojoWebpackPlugin.ScopedRequirePlugin(),

			// For plugins registered after the dojo-webpack-plugin, data.request has been normalized and
			// resolved to an absMid and loader-config maps and aliases have been applied
			new webpack.NormalModuleReplacementPlugin(/^dojox\/gfx\/renderer!/, "dojox/gfx/canvas"),
			new webpack.NormalModuleReplacementPlugin(
				/^css!/, function(data) {
					data.request = data.request.replace(/^css!/, "!style-loader!css-loader!less-loader!")
				}
			)
		],
		resolveLoader: {
			modules: ["node_modules"]
		},
		mode: devmode ? 'development' : 'production',
		optimization: {
			namedModules: false,
			splitChunks: false,
			minimizer: devmode ? [] : [
	      // we specify a custom UglifyJsPlugin here to get source maps in production
	      new UglifyJsPlugin({
	        cache: true,
	        parallel: true,
	        uglifyOptions: {
	          compress: true,
	          mangle: true,
						output: {comments:false}
	        },
	        sourceMap: true
	      })
	    ],
	  },
    performance: { hints: false },
		devtool: "#source-map",
		devServer: {
			open: true,
			openPage: "test.html"
		}
	};
};
