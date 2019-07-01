/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"validateBox": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".bundle.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	(function() { /* Start undefined extensions */
/******/ 			function mix(dest, src) { // eslint-disable-line no-unused-vars
/******/ 				for(var n in src) dest[n] = src[n];
/******/ 				return dest;
/******/ 			}
/******/
/******/ 			function toUrl(name, referenceModule) {
/******/ 				return loaderScope.require.toUrl(name, referenceModule);
/******/ 			}
/******/
/******/ 			function toAbsMid(name, referenceModule) {
/******/ 				return loaderScope.require.toAbsMid(name, referenceModule);
/******/ 			}
/******/
/******/ 			// dojo require function.
/******/ 			function req(config, dependencies, callback) {
/******/ 				return contextRequire(config, dependencies, callback, 0, req);
/******/ 			};
/******/
/******/ 			function createContextRequire(moduleId) { // eslint-disable-line no-unused-vars
/******/ 				if (req.absMidsById[moduleId]) {
/******/ 					moduleId = req.absMidsById[moduleId];
/******/ 				}
/******/ 				if (!moduleId) return req;
/******/ 				var result = function(a1, a2, a3) {
/******/ 					return contextRequire(a1, a2, a3, moduleId, req);
/******/ 				};
/******/ 				for (var p in req) {
/******/ 					if (req.hasOwnProperty(p)) {
/******/ 						result[p] = req[p];
/******/ 					}
/******/ 				}
/******/ 				result.toUrl = function(name) {
/******/ 					return toUrl(name, moduleId ? {mid: moduleId} : null);
/******/ 				};
/******/ 				result.toAbsMid = function(name) {
/******/ 					return toAbsMid(name, moduleId ? {mid: moduleId} : null);
/******/ 				};
/******/
/******/ 				if (req.undef) {
/******/ 					result.undef = function(mid) {
/******/ 						req.undef(mid, moduleId);
/******/ 					};
/******/ 				}
/******/ 				return result;
/******/ 			}
/******/
/******/ 			function registerAbsMids(absMids) { // eslint-disable-line no-unused-vars
/******/ 				for (var s in absMids) {
/******/ 					req.absMids[s] = absMids[s];
/******/ 					if (!req.absMidsById[absMids[s]]) {
/******/ 						req.absMidsById[absMids[s]] = s;
/******/ 					}
/******/ 				}
/******/ 			}
/******/
/******/ 			function resolveTernaryHasExpression(expr) { // eslint-disable-line no-unused-vars
/******/ 				// Expects an expression of the form supported by dojo/has.js loader, except that module identifiers are
/******/ 				// integers corresponding to webpack module ids.  Returns a module reference if evaluation of the expression
/******/ 				// using the currently defined features returns a module id, or else undefined.
/******/
/******/ 				var has = findModule("dojo/has", null, false);
/******/ 				var id = has.normalize(expr, function(arg){return arg;});
/******/ 				return id && __webpack_require__(id) || undefined;
/******/ 			}
/******/
/******/ 			function findModule(mid, referenceModule, noInstall, asModuleObj) {
/******/ 				mid = mid.split("!").map(function(segment) {
/******/ 					var isRelative = segment.charAt(0) === '.';
/******/ 					if(isRelative && !referenceModule){
/******/ 						return segment;
/******/ 					}
/******/ 					return toAbsMid(segment, referenceModule ? {mid: referenceModule} : null);
/******/ 				}).join("!");
/******/ 				var result;
/******/ 				if (mid in req.absMids && __webpack_require__.m[req.absMids[mid]]) {
/******/ 					if (noInstall) {
/******/ 						var module = installedModules[req.absMids[mid]];
/******/ 						result = module && module.l && (asModuleObj ? module : module.exports);
/******/ 					} else {
/******/ 						result = __webpack_require__(req.absMids[mid]);
/******/ 					}
/******/ 				}
/******/ 				if (!result) {
/******/ 					throw new Error('Module not found: ' + mid);
/******/ 				}
/******/ 				return result;
/******/ 			}
/******/
/******/ 			function dojoModuleFromWebpackModule(webpackModule) { // eslint-disable-line no-unused-vars
/******/ 				var result = {i:webpackModule.i};
/******/ 				var id = req.absMidsById[webpackModule.i];
/******/ 				if (id) {
/******/ 					result.id = id;
/******/ 				}
/******/ 				Object.defineProperty(result, "exports", {
/******/ 					get: function() { return webpackModule.exports;},
/******/ 					set: function(value) {webpackModule.exports = value;},
/******/ 					enumerable: true,
/******/ 					configurable: true
/******/ 				});
/******/ 				return result;
/******/ 			}
/******/
/******/ 			function contextRequire(a1, a2, a3, referenceModule, req) { // eslint-disable-line no-shadow
/******/ 				var type = ({}.toString).call(a1);
/******/ 				if (type === '[object String]') {
/******/ 					// a3 is passed by require calls injected into dependency arrays for dependencies specified
/******/ 					// as identifiers (vs. string literals).
/******/ 					var noInstall = !(a3 === false);
/******/ 					var m = findModule(a1, referenceModule, noInstall);
/******/ 					if (typeof m === 'object' && m.__DOJO_WEBPACK_DEFINE_PROMISE__) {
/******/ 						throw new Error('Module not found: ' + a1);
/******/ 					}
/******/ 					return m;
/******/ 				} else if (type === '[object Object]') {
/******/ 					throw new Error('Require config is not supported by WebPack');
/******/ 				}
/******/ 				if (type === '[object Array]') {
/******/ 					var modules = [], callback = a2, errors = [];
/******/ 					a1.forEach(function (mid) {
/******/ 						try {
/******/ 							modules.push(findModule(mid, referenceModule));
/******/ 						} catch (e) {
/******/ 							errors.push({mid: mid, error: e});
/******/ 						}
/******/ 					});
/******/ 					if (errors.length === 0) {
/******/ 						if (callback) {
/******/ 							if (false && isDefinePromise(modules)) { // eslint-disable-line no-undef
/******/ 								Promise.all(wrapPromises(modules)).then(function(deps) { // eslint-disable-line no-undef
/******/ 									callback.apply(this, unwrapPromises(deps)); // eslint-disable-line no-undef
/******/ 								}.bind(this)).catch(function(err){console.error(err);});
/******/ 							} else {
/******/ 								callback.apply(this, modules);
/******/ 							}
/******/ 						}
/******/ 					} else {
/******/ 						var error = new Error("findModules");
/******/ 						error.src = "dojo-webpack-plugin";
/******/ 						error.info = errors;
/******/ 						req.signal("error", error);
/******/ 					}
/******/ 					return req;
/******/ 				} else {
/******/ 					throw new Error('Unsupported require call');
/******/ 				}
/******/ 			}
/******/ 			req.toUrl = toUrl;
/******/ 			req.toAbsMid = toAbsMid;
/******/ 			req.absMids = {};
/******/ 			req.absMidsById = [];
/******/ 			req.async = 1;
/******/ 		var globalObj = this||window;
/******/ 		registerAbsMids({
/******/ 			// "demo/src/validate.js" = "./demo/src/validate.js"
/******/ 			// "C:\\Users\\86177\\AppData\\Local\\Temp\\tmp-7200JyNBD37Q8JeY\\dojo\\dojo.js" = "C:\\Users\\86177\\AppData\\Local\\Temp\\tmp-7200JyNBD37Q8JeY\\dojo\\dojo.js"
/******/ 		});
/******/
/******/ 		globalObj.require = req;
/******/ 			(this||window)["webpackJsonp"].registerAbsMids = registerAbsMids;
/******/
/******/ 		// expose the Dojo compatibility functions as a properties of __webpack_require__
/******/ 		if (__webpack_require__.dj) throw new Error("__webpack_require__.dj name collision.")
/******/ 		__webpack_require__.dj = {
/******/ 			r: req,
/******/ 			c: createContextRequire,
/******/ 			m: dojoModuleFromWebpackModule,
/******/ 			h: resolveTernaryHasExpression,
/******/ 		};
/******/ 		var loaderScope = {document:globalObj.document};
/******/ 		loaderScope.global = loaderScope.window = loaderScope;
/******/ 		globalObj.dojoConfig = globalObj.dojoConfig || {}
/******/ 		var userConfig = mix(globalObj.dojoConfig, ({'baseUrl':'.','deps':['js/bootstrap'],'async':true,'has':({'dojo-config-api':0}),'fixupUrl':(function(url) {
/******/ 					// Load the uncompressed versions of dojo/dijit/dojox javascript files when using the dojo loader.
/******/ 					// When using a webpack build, the dojo loader is not used for loading javascript files so this
/******/ 					// property has no effect.  This is only needed because we're loading Dojo from a CDN for this
/******/ 					// demo.  In a normal development envorinment, Dojo would be installed locally and this wouldn't
/******/ 					// be needed.
/******/ 					if (/\/(dojo|dijit|dojox)\/.*\.js$/.test(url)) {
/******/ 					  url += ".uncompressed.js";
/******/ 				  }
/******/ 					return url;
/******/ 				})}));
/******/ 		var defaultConfig = ({'hasCache':({'webpack':1,'host-browser':1,'dom':1,'dojo-loader':1,'dojo-has-api':1,'dojo-dom-ready-api':1,'dojo-sniff':1,'dojo-test-sniff':1,'config-deferredInstrumentation':1,'config-tlmSiblingOfDojo':1}),'paths':({'js':'js','theme':'theme','css':'//chuckdumont.github.io/dojo-css-plugin/1.0.0/css','lesspp':'//cdnjs.cloudflare.com/ajax/libs/less.js/1.7.3/less.min'}),'pathsMapProg':[['lesspp','//cdnjs.cloudflare.com/ajax/libs/less.js/1.7.3/less.min',/^lesspp(\/|$)/,6],['theme','theme',/^theme(\/|$)/,5],['css','//chuckdumont.github.io/dojo-css-plugin/1.0.0/css',/^css(\/|$)/,3],['js','js',/^js(\/|$)/,2]],'packs':({'dojo':({'main':'main','name':'dojo','location':'release/dojo','lib':'.'}),'dijit':({'main':'main','name':'dijit','location':'release/dijit','lib':'.'}),'dojox':({'main':'main','name':'dojox','location':'release/dojox','lib':'.'})}),'aliases':[],'mapProgs':[],'cacheBust':undefined,'modules':({}),'cache':({})});
/******/ 		var dojoLoader = __webpack_require__("C:\\Users\\86177\\AppData\\Local\\Temp\\tmp-7200JyNBD37Q8JeY\\dojo\\dojo.js");
/******/ 		dojoLoader.call(loaderScope, userConfig, defaultConfig, loaderScope, loaderScope);
/******/ 		loaderScope.require.baseUrl = "./";
/******/ 		['baseUrl','has','rawConfig','on','signal'].forEach(function(name) {req[name] = loaderScope.require[name]})
/******/ 	})(); /* End undefined extensions */
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./demo/src/validate.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./demo/src/validate.js":
/*!******************************!*\
  !*** ./demo/src/validate.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.e(/*! AMD require */ 0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! dijit/form/Form */ "./node_modules/dijit/form/Form.js"),__webpack_require__(/*! dijit/form/ValidationTextBox */ "./node_modules/dijit/form/ValidationTextBox.js")]; (function (Form,ValidationTextBox ) {
    var form = new Form({
        
    },"page");
    var w = new ValidationTextBox({
       required:true
    });
     w.startup();
     w.placeAt(form.domNode);
     
     w.defer(function(){
         w.validate();
     },2000)
     
      form.defer(function(){
         form.validate();
     },4000)
    
//                 var w = new dSwitch({},"page");
//                 w.startup();
    
 }).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}).catch(__webpack_require__.oe);

/***/ }),

/***/ "C:\\Users\\86177\\AppData\\Local\\Temp\\tmp-7200JyNBD37Q8JeY\\dojo\\dojo.js":
/*!***************************************************************************!*\
  !*** C:/Users/86177/AppData/Local/Temp/tmp-7200JyNBD37Q8JeY/dojo/dojo.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(userConfig, defaultConfig, global, window) { this.loaderVersion = "1.15.0"; (function(
	userConfig,
	defaultConfig
){
	// summary:
	//		This is the "source loader" and is the entry point for Dojo during development. You may also load Dojo with
	//		any AMD-compliant loader via the package main module dojo/main.
	// description:
	//		This is the "source loader" for Dojo. It provides an AMD-compliant loader that can be configured
	//		to operate in either synchronous or asynchronous modes. After the loader is defined, dojo is loaded
	//		IAW the package main module dojo/main. In the event you wish to use a foreign loader, you may load dojo as a package
	//		via the package main module dojo/main and this loader is not required; see dojo/package.json for details.
	//
	//		In order to keep compatibility with the v1.x line, this loader includes additional machinery that enables
	//		the dojo.provide, dojo.require et al API. This machinery is loaded by default, but may be dynamically removed
	//		via the has.js API and statically removed via the build system.
	//
	//		This loader includes sniffing machinery to determine the environment; the following environments are supported:
	//
	//		- browser
	//		- node.js
	//		- rhino
	//
	//		This is the so-called "source loader". As such, it includes many optional features that may be discarded by
	//		building a customized version with the build system.

	// Design and Implementation Notes
	//
	// This is a dojo-specific adaption of bdLoad, donated to the dojo foundation by Altoviso LLC.
	//
	// This function defines an AMD-compliant (http://wiki.commonjs.org/wiki/Modules/AsynchronousDefinition)
	// loader that can be configured to operate in either synchronous or asynchronous modes.
	//
	// Since this machinery implements a loader, it does not have the luxury of using a load system and/or
	// leveraging a utility library. This results in an unpleasantly long file; here is a road map of the contents:
	//
	//	 1. Small library for use implementing the loader.
	//	 2. Define the has.js API; this is used throughout the loader to bracket features.
	//	 3. Define the node.js and rhino sniffs and sniff.
	//	 4. Define the loader's data.
	//	 5. Define the configuration machinery.
	//	 6. Define the script element sniffing machinery and sniff for configuration data.
	//	 7. Configure the loader IAW the provided user, default, and sniffing data.
	//	 8. Define the global require function.
	//	 9. Define the module resolution machinery.
	//	10. Define the module and plugin module definition machinery
	//	11. Define the script injection machinery.
	//	12. Define the window load detection.
	//	13. Define the logging API.
	//	14. Define the tracing API.
	//	16. Define the AMD define function.
	//	17. Define the dojo v1.x provide/require machinery--so called "legacy" modes.
	//	18. Publish global variables.
	//
	// Language and Acronyms and Idioms
	//
	// moduleId: a CJS module identifier, (used for public APIs)
	// mid: moduleId (used internally)
	// packageId: a package identifier (used for public APIs)
	// pid: packageId (used internally); the implied system or default package has pid===""
	// pack: package is used internally to reference a package object (since javascript has reserved words including "package")
	// prid: plugin resource identifier
	// The integer constant 1 is used in place of true and 0 in place of false.
	//
	// The "foreign-loader" has condition is defined if another loader is being used (e.g. webpack) and this code is only
	// needed for resolving module identifiers based on the config.  In this case, only the functions require.toUrl and 
	// require.toAbsMid are supported.  The require and define functions are not supported.

	// define global
	var globalObject = (function(){
		if (typeof global !== 'undefined' && typeof global !== 'function') {
			// global spec defines a reference to the global object called 'global'
			// https://github.com/tc39/proposal-global
			// `global` is also defined in NodeJS
			return global;
		}
		else if (typeof window !== 'undefined') {
			// window is defined in browsers
			return window;
		}
		else if (typeof self !== 'undefined') {
			// self is defined in WebWorkers
			return self;
		}
		return this;
	})();

	// define a minimal library to help build the loader
	var noop = function(){
		},

		isEmpty = function(it){
			for(var p in it){
				return 0;
			}
			return 1;
		},

		toString = {}.toString,

		isFunction = function(it){
			return toString.call(it) == "[object Function]";
		},

		isString = function(it){
			return toString.call(it) == "[object String]";
		},

		isArray = function(it){
			return toString.call(it) == "[object Array]";
		},

		forEach = function(vector, callback){
			if(vector){
				for(var i = 0; i < vector.length;){
					callback(vector[i++]);
				}
			}
		},

		mix = function(dest, src){
			for(var p in src){
				dest[p] = src[p];
			}
			return dest;
		},

		makeError = function(error, info){
			return mix(new Error(error), {src:"dojoLoader", info:info});
		},

		uidSeed = 1,

		uid = function(){
			// Returns a unique identifier (within the lifetime of the document) of the form /_d+/.
			return "_" + uidSeed++;
		},

		// FIXME: how to doc window.require() api

		// this will be the global require function; define it immediately so we can start hanging things off of it
		req = function(
			config,		  //(object, optional) hash of configuration properties
			dependencies, //(array of commonjs.moduleId, optional) list of modules to be loaded before applying callback
			callback	  //(function, optional) lambda expression to apply to module values implied by dependencies
		){
			return contextRequire(config, dependencies, callback, 0, req);
		},

		// the loader uses the has.js API to control feature inclusion/exclusion; define then use throughout
		global = globalObject,

		doc = global.document,

		element = doc && doc.createElement("DiV"),

		has = req.has = function(name){
			return isFunction(hasCache[name]) ? (hasCache[name] = hasCache[name](global, doc, element)) : hasCache[name];
		},

		hasCache = has.cache = defaultConfig.hasCache;

	if (isFunction(userConfig)) {
		userConfig = userConfig(globalObject);
	}

	has.add = function(name, test, now, force){
		(hasCache[name]===undefined || force) && (hasCache[name] = test);
		return now && has(name);
	};

	 0 && false;
	if( 0 ){}

	 0 && false;
	if( 0 ){ var baseUrl, arg, rhinoArgs, i; }

	 0 && false;
	if( 0 ){}

	// userConfig has tests override defaultConfig has tests; do this after the environment detection because
	// the environment detection usually sets some has feature values in the hasCache.
	for(var p in userConfig.has){
		has.add(p, userConfig.has[p], 0, 1);
	}

	//
	// define the loader data
	//

	// the loader will use these like symbols if the loader has the traceApi; otherwise
	// define magic numbers so that modules can be provided as part of defaultConfig
	var requested = 1,
		arrived = 2,
		nonmodule = 3,
		executing = 4,
		executed = 5;

	if( 0 ){}

	var legacyMode = 0,
		sync = "sync",
		xd = "xd",
		syncExecStack = [],
		dojoRequirePlugin = 0,
		checkDojoRequirePlugin = noop,
		transformToAmd = noop,
		getXhr;
	if( 0 ){ var XMLHTTP_PROGIDS, progid, i, locationProtocol, locationHost; }else{
		req.async = 1;
	}

	//
	// loader eval
	//
	var eval_ =   1  ?
		// noop eval if there are csp restrictions
		function(){} :
		// use the function constructor so our eval is scoped close to (but not in) in the global space with minimal pollution
		undefined;

	req.eval =
		function(text, hint){
			return eval_(text + "\r\n//# sourceURL=" + hint);
		};

	//
	// loader micro events API
	//
	var listenerQueues = {},
		error = "error",
		signal = req.signal = function(type, args){
			var queue = listenerQueues[type];
			// notice we run a copy of the queue; this allows listeners to add/remove
			// other listeners without affecting this particular signal
			forEach(queue && queue.slice(0), function(listener){
				listener.apply(null, isArray(args) ? args : [args]);
			});
		},
		on = req.on = function(type, listener){
			// notice a queue is not created until a client actually connects
			var queue = listenerQueues[type] || (listenerQueues[type] = []);
			queue.push(listener);
			return {
				remove:function(){
					for(var i = 0; i<queue.length; i++){
						if(queue[i]===listener){
							queue.splice(i, 1);
							return;
						}
					}
				}
			};
		};

	// configuration machinery; with an optimized/built defaultConfig, all configuration machinery can be discarded
	// lexical variables hold key loader data structures to help with minification; these may be completely,
	// one-time initialized by defaultConfig for optimized/built versions
	var
		aliases
			// a vector of pairs of [regexs or string, replacement] => (alias, actual)
			= [],

		paths
			// CommonJS paths
			= {},

		pathsMapProg
			// list of (from-path, to-path, regex, length) derived from paths;
			// a "program" to apply paths; see computeMapProg
			= [],

		packs
			// a map from packageId to package configuration object; see fixupPackageInfo
			= {},

		map = req.map
			// AMD map config variable; dojo/_base/kernel needs req.map to figure out the scope map
			= {},

		mapProgs
			// vector of quads as described by computeMapProg; map-key is AMD map key, map-value is AMD map value
			= [],

		modules
			// A hash:(mid) --> (module-object) the module namespace
			//
			// pid: the package identifier to which the module belongs (e.g., "dojo"); "" indicates the system or default package
			// mid: the fully-resolved (i.e., mappings have been applied) module identifier without the package identifier (e.g., "dojo/io/script")
			// url: the URL from which the module was retrieved
			// pack: the package object of the package to which the module belongs
			// executed: 0 => not executed; executing => in the process of traversing deps and running factory; executed => factory has been executed
			// deps: the dependency vector for this module (vector of modules objects)
			// def: the factory for this module
			// result: the result of the running the factory for this module
			// injected: (0 | requested | arrived) the status of the module; nonmodule means the resource did not call define
			// load: plugin load function; applicable only for plugins
			//
			// Modules go through several phases in creation:
			//
			// 1. Requested: some other module's definition or a require application contained the requested module in
			//	  its dependency vector or executing code explicitly demands a module via req.require.
			//
			// 2. Injected: a script element has been appended to the insert-point element demanding the resource implied by the URL
			//
			// 3. Loaded: the resource injected in [2] has been evaluated.
			//
			// 4. Defined: the resource contained a define statement that advised the loader about the module. Notice that some
			//	  resources may just contain a bundle of code and never formally define a module via define
			//
			// 5. Evaluated: the module was defined via define and the loader has evaluated the factory and computed a result.
			= {},

		cacheBust
			// query string to append to module URLs to bust browser cache
			= "",

		cache
			// hash:(mid | url)-->(function | string)
			//
			// A cache of resources. The resources arrive via a config.cache object, which is a hash from either mid --> function or
			// url --> string. The url key is distinguished from the mid key by always containing the prefix "url:". url keys as provided
			// by config.cache always have a string value that represents the contents of the resource at the given url. mid keys as provided
			// by configl.cache always have a function value that causes the same code to execute as if the module was script injected.
			//
			// Both kinds of key-value pairs are entered into cache via the function consumePendingCache, which may relocate keys as given
			// by any mappings *iff* the config.cache was received as part of a module resource request.
			//
			// Further, for mid keys, the implied url is computed and the value is entered into that key as well. This allows mapped modules
			// to retrieve cached items that may have arrived consequent to another namespace.
			//
			 = {},

		urlKeyPrefix
			// the prefix to prepend to a URL key in the cache.
			= "url:",

		pendingCacheInsert
			// hash:(mid)-->(function)
			//
			// Gives a set of cache modules pending entry into cache. When cached modules are published to the loader, they are
			// entered into pendingCacheInsert; modules are then pressed into cache upon (1) AMD define or (2) upon receiving another
			// independent set of cached modules. (1) is the usual case, and this case allows normalizing mids given in the pending
			// cache for the local configuration, possibly relocating modules.
			 = {},

		dojoSniffConfig
			// map of configuration variables
			// give the data-dojo-config as sniffed from the document (if any)
			= {},

		insertPointSibling
			// the nodes used to locate where scripts are injected into the document
			= 0;

	if( 0 ){ var doh, scripts, i, script, dojoDir, src, match, escapeString, computeMapProg, computeAliases, fixupPackageInfo, delayedModuleConfig, config, consumePendingCacheInsert; }else{
		// no config API, assume defaultConfig has everything the loader needs...for the entire lifetime of the application
		paths = defaultConfig.paths;
		pathsMapProg = defaultConfig.pathsMapProg;
		packs = defaultConfig.packs;
		aliases = defaultConfig.aliases;
		mapProgs = defaultConfig.mapProgs;
		modules = defaultConfig.modules;
		cache = defaultConfig.cache;
		cacheBust = defaultConfig.cacheBust;

		// remember the default config for other processes (e.g., dojo/config)
		req.rawConfig = defaultConfig;
	}


	if (false ) { var injectDependencies, contextRequire, createRequire, execQ, defQ, waiting, setRequested, setArrived, execComplete, comboPending, combosPending, comboPendingTimer; }

	var runMapProg = function(targetMid, map){
			// search for targetMid in map; return the map item if found; falsy otherwise
			if(map){
			for(var i = 0; i < map.length; i++){
				if(map[i][2].test(targetMid)){
					return map[i];
				}
			}
			}
			return 0;
		},

		compactPath = function(path){
			var result = [],
				segment, lastSegment;
			path = path.replace(/\\/g, '/').split('/');
			while(path.length){
				segment = path.shift();
				if(segment==".." && result.length && lastSegment!=".."){
					result.pop();
					lastSegment = result[result.length - 1];
				}else if(segment!="."){
					result.push(lastSegment= segment);
				} // else ignore "."
			}
			return result.join("/");
		},

		makeModuleInfo = function(pid, mid, pack, url){
			if( 0 ){ var xd; }else{
				return {pid:pid, mid:mid, pack:pack, url:url, executed:0, def:0};
			}
		},

		getModuleInfo_ = function(mid, referenceModule, packs, modules, baseUrl, mapProgs, pathsMapProg, aliases, alwaysCreate, fromPendingCache){
			// arguments are passed instead of using lexical variables so that this function my be used independent of the loader (e.g., the builder)
			// alwaysCreate is useful in this case so that getModuleInfo never returns references to real modules owned by the loader
			var pid, pack, midInPackage, mapItem, url, result, isRelative, requestedMid;
			requestedMid = mid;
			isRelative = /^\./.test(mid);
			if(/(^\/)|(\:)|(\.js$)/.test(mid) || (isRelative && !referenceModule)){
				// absolute path or protocol of .js filetype, or relative path but no reference module and therefore relative to page
				// whatever it is, it's not a module but just a URL of some sort
				// note: pid===0 indicates the routine is returning an unmodified mid

				return makeModuleInfo(0, mid, 0, mid);
			}else{
				// relative module ids are relative to the referenceModule; get rid of any dots
				mid = compactPath(isRelative ? (referenceModule.mid + "/../" + mid) : mid);
				if(/^\./.test(mid)){
					throw makeError("irrationalPath", mid);
				}
				// at this point, mid is an absolute mid

				// map the mid
				if(!fromPendingCache && !isRelative && mapProgs.star){
					mapItem = runMapProg(mid, mapProgs.star[1]);
				}
				if(!mapItem && referenceModule){
					mapItem = runMapProg(referenceModule.mid, mapProgs);
					mapItem = mapItem && runMapProg(mid, mapItem[1]);
				}

				if(mapItem){
					mid = mapItem[1] + mid.substring(mapItem[3]);
					}

				match = mid.match(/^([^\/]+)(\/(.+))?$/);
				pid = match ? match[1] : "";
				if((pack = packs[pid])){
					mid = pid + "/" + (midInPackage = (match[3] || pack.main));
				}else{
					pid = "";
				}

				// search aliases
				var candidateLength = 0,
					candidate = 0;
				forEach(aliases, function(pair){
					var match = mid.match(pair[0]);
					if(match && match.length>candidateLength){
						candidate = isFunction(pair[1]) ? mid.replace(pair[0], pair[1]) : pair[1];
					}
				});
				if(candidate){
					return getModuleInfo_(candidate, 0, packs, modules, baseUrl, mapProgs, pathsMapProg, aliases, alwaysCreate);
				}

				result = modules[mid];
				if(result){
					return alwaysCreate ? makeModuleInfo(result.pid, result.mid, result.pack, result.url) : modules[mid];
				}
			}
			// get here iff the sought-after module does not yet exist; therefore, we need to compute the URL given the
			// fully resolved (i.e., all relative indicators and package mapping resolved) module id

			// note: pid!==0 indicates the routine is returning a url that has .js appended unmodified mid
			mapItem = runMapProg(mid, pathsMapProg);
			if(mapItem){
				url = mapItem[1] + mid.substring(mapItem[3]);
			}else if(pid){
				url = (pack.location.slice(-1) === '/' ? pack.location.slice(0, -1) : pack.location) + "/" + midInPackage;
			}else if( 0 ){}else{
				url = mid;
			}
			// if result is not absolute, add baseUrl
			if(!(/(^\/)|(\:)/.test(url))){
				url = baseUrl + url;
			}
			url += ".js";
			return makeModuleInfo(pid, mid, pack, compactPath(url));
		},

		getModuleInfo = function(mid, referenceModule, fromPendingCache){
			return getModuleInfo_(mid, referenceModule, packs, modules, req.baseUrl, mapProgs, pathsMapProg, aliases, undefined, fromPendingCache);
		};

	if (false ) { var resolvePluginResourceId, dynamicPluginUidGenerator, getModule; }

	var toAbsMid = req.toAbsMid = function(mid, referenceModule){
			return getModuleInfo(mid, referenceModule).mid;
		},

		toUrl = req.toUrl = function(name, referenceModule){
			var moduleInfo = getModuleInfo(name+"/x", referenceModule),
				url= moduleInfo.url;
			return fixupUrl(moduleInfo.pid===0 ?
				// if pid===0, then name had a protocol or absolute path; either way, toUrl is the identify function in such cases
				name :
				// "/x.js" since getModuleInfo automatically appends ".js" and we appended "/x" to make name look like a module id
				url.substring(0, url.length-5)
			);
		};

	if (false ) { var nonModuleProps, makeCjs, cjsRequireModule, cjsExportsModule, cjsModuleModule, runFactory, abortExec, defOrder, promoteModuleToPlugin, resolvePluginLoadQ, finishExec, circleTrace, execModule, checkCompleteGuard, guardCheckComplete, checkComplete; }

	var fixupUrl= typeof userConfig.fixupUrl == "function" ? userConfig.fixupUrl : function(url){
			url += ""; // make sure url is a Javascript string (some paths may be a Java string)
			return url + (cacheBust ? ((/\?/.test(url) ? "&" : "?") + cacheBust) : "");
		};



	if( 0 ){}

	if( false ){ var injectPlugin, cached, injectingModule, injectingCachedModule, evalModuleText, injectModule, defineModule, runDefQ; }

	var timerId = 0,
		clearTimer = noop,
		startTimer = noop;
	if( 0 ){}

	if ( 0 ) {}

	if( false){ var scripts, i, script, domOn, windowOnLoadListener; }

	if( 0 ){}else{
		req.log = noop;
	}

	if( 0 ){ var trace; }else{
		req.trace = noop;
	}
	if (false ) { var def; } else {
		var def = noop;
	}
	// allow config to override default implementation of named functions; this is useful for
	// non-browser environments, e.g., overriding injectUrl, getText, log, etc. in node.js, Rhino, etc.
	// also useful for testing and monkey patching loader
	mix(mix(req, defaultConfig.loaderPatch), userConfig.loaderPatch);

	// now that req is fully initialized and won't change, we can hook it up to the error signal
	on(error, function(arg){
		try{
			console.error(arg);
			if(arg instanceof Error){
				for(var p in arg){
					console.log(p + ":", arg[p]);
				}
				console.log(".");
			}
		}catch(e){}
	});

	// always publish these
	mix(req, {
		uid:uid,
		cache:cache,
		packs:packs
	});


	if( 0 ){}

	// the loader can be defined exactly once; look for global define which is the symbol AMD loaders are
	// *required* to define (as opposed to require, which is optional)
	if(global.define){
		if( 0 ){}
		return;
	}else{
		global.define = def;
		global.require = req;
		if( 0 ){}
	}

	if( false){ var plugins, pluginName; }

	if( false ){ var bootDeps, bootCallback; }
	if(false ){}
})
.call(this, userConfig, defaultConfig);};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGVtby9zcmMvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzg2MTc3L0FwcERhdGEvTG9jYWwvVGVtcC90bXAtNzIwMEp5TkJEMzdROEplWS9kb2pvL2Rvam8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0Esa0RBQTBDO0FBQzFDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQSx5Q0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQXdCLGtDQUFrQztBQUMxRCxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0Esa0RBQTBDLG9CQUFvQixXQUFXOztBQUV6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUFnQix1QkFBdUI7QUFDdkM7OztBQUdBLHVCQUFlO0FBQ2YscUNBQTZCO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFEQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUFxQyxjQUFjO0FBQ25EO0FBQ0E7QUFDQSxnREFBd0MsY0FBYztBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQ0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdEQUFnRCxZQUFZO0FBQzVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQWtELHFCQUFxQjtBQUN2RSxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUF5RDtBQUN6RCwyQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUF1QiwrQkFBK0I7QUFDdEQsb0NBQTRCLCtCQUErQjtBQUMzRDtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7O0FBRUEsdUVBQStEO0FBQy9ELDJCQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUTtBQUNSLDZCQUFxQixtQkFBbUI7QUFDeEM7QUFDQSxlQUFPO0FBQ1A7QUFDQTtBQUNBLHdEQUFnRDtBQUNoRCx5RUFBaUU7QUFDakUsNkRBQXFEO0FBQ3JELGtCQUFVLGlDQUFpQyxvQkFBb0I7QUFDL0QsaUJBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxlQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQXNCO0FBQ3RCO0FBQ0E7QUFDQSx3REFBZ0QsMkRBQTJELG9CQUFvQjtBQUMvSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNLEVBQUU7QUFDUixpQ0FBeUIsYUFBYSwrTEFBK0wsWUFBWSx1SkFBdUosNFBBQTRQLFNBQVMsZ0VBQWdFLFlBQVksa0VBQWtFLFlBQVksa0VBQWtFLEVBQUUsZ0VBQWdFLGFBQWEsRUFBRTtBQUMxN0I7QUFDQTtBQUNBO0FBQ0EsK0VBQXVFLHNDQUFzQztBQUM3RyxXQUFHLElBQUk7O0FBRVA7QUFDQTs7Ozs7Ozs7Ozs7O0FDbllBLDhEQUFRLHFDQUFDLCtFQUFpQixDQUFDLHlHQUE4QixDQUFDLEdBQUU7QUFDNUQ7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0EsTUFBTTs7QUFFTix5Q0FBeUM7QUFDekM7O0FBRUEsRUFBRSw2RUFBQyxDOzs7Ozs7Ozs7OztBQ3JCSCxzRUFBc0UsK0JBQStCO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RTtBQUM1RTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxlQUFlOztBQUVmO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxrQkFBa0IsbUJBQW1CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxpQ0FBaUMsNEJBQTRCO0FBQzdELEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCwyRUFBMkU7QUFDM0U7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8sS0FFNEY7QUFDbkcsUUFBUSxFQUtOOztBQUVGLE9BQU8sS0FFeUY7QUFDaEcsUUFBUSxtQ0FXTjs7QUFFRixPQUFPLEtBQThHO0FBQ3JILFFBQVEsRUE0Qk47O0FBRUYsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwRUFBMEU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsRUFPTjs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtRUFvR047QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxFQUFFLFNBQTBDOztBQUU1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdCQUFnQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0QjtBQUM1QixnRkFBZ0Y7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDOztBQUVBO0FBQ0EsMkRBQTJEO0FBQzNELE9BQU87O0FBRVA7QUFDQSw4QkFBOEI7QUFDOUIsT0FBTzs7QUFFUDtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkU7QUFDN0U7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG9FQUFvRTtBQUN0RztBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkUsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUEsUUFBUSw2S0E2UE47QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQSxLQUFLLEtBQUcsR0FBRyx3S0ErS1Q7O0FBRUY7QUFDQSxrQ0FBa0MsOEJBQThCO0FBQ2hFO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLFVBQVUsV0FHTjtBQUNKLFlBQVk7QUFDWjtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0osK0RBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSSxZQUFZLEVBRVo7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUEsS0FBSyxLQUFHLEdBQUcsc0VBbURUOztBQUVGO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSyxLQUFHLEdBQUcsNlBBK01UOztBQUVGO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7Ozs7QUFJQSxRQUFRLEVBUU47O0FBRUYsWUFBWSwwSEF5U1Y7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsUUFBUSxFQWdCTjs7QUFFRixVQUFVLEVBU1I7O0FBRUYsS0FBSyxLQUFzQixDQUFDLHdEQXNFMUI7O0FBRUYsUUFBUSxFQVFOO0FBQ0Y7QUFDQTs7QUFFQSxRQUFRLGNBd0NOO0FBQ0Y7QUFDQTtBQUNBLEtBQUssS0FBRyxHQUFHLFlBeUZUO0FBQ0Y7QUFDQTtBQUNBLHVFQUF1RTtBQUN2RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7O0FBR0YsUUFBUSxFQXlCTjs7QUFFRiwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBLFNBQVMsRUFFTjtBQUNIO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxTQUFTLEVBRU47QUFDSDs7QUFFQSxLQUFLLEtBQW9DLENBQUMsNEJBTXhDOztBQUVGLEtBQUssS0FBUyxFQUFFLCtCQUtkO0FBQ0YsSUFBSSxLQUFHLEVBQUUsRUFHUDtBQUNGLENBQUM7QUFDRCx5QyIsImZpbGUiOiJ2YWxpZGF0ZUJveC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblxuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHR9O1xuXG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInZhbGlkYXRlQm94XCI6IDBcbiBcdH07XG5cblxuXG4gXHQvLyBzY3JpcHQgcGF0aCBmdW5jdGlvblxuIFx0ZnVuY3Rpb24ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCkge1xuIFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5idW5kbGUuanNcIlxuIFx0fVxuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuIFx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG4gXHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdFx0XHR2YXIgb25TY3JpcHRDb21wbGV0ZTtcblxuIFx0XHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG4gXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzY3JpcHQuc3JjID0ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCk7XG5cbiBcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcbiBcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuIFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuIFx0XHRcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiBcdFx0XHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0XHRcdGlmKGNodW5rKSB7XG4gXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuIFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuIFx0XHRcdFx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KTtcbiBcdFx0XHRcdH0sIDEyMDAwMCk7XG4gXHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdChmdW5jdGlvbigpIHsgLyogU3RhcnQgdW5kZWZpbmVkIGV4dGVuc2lvbnMgKi9cbiBcdFx0XHRmdW5jdGlvbiBtaXgoZGVzdCwgc3JjKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdFx0XHRcdGZvcih2YXIgbiBpbiBzcmMpIGRlc3Rbbl0gPSBzcmNbbl07XG4gXHRcdFx0XHRyZXR1cm4gZGVzdDtcbiBcdFx0XHR9XG5cbiBcdFx0XHRmdW5jdGlvbiB0b1VybChuYW1lLCByZWZlcmVuY2VNb2R1bGUpIHtcbiBcdFx0XHRcdHJldHVybiBsb2FkZXJTY29wZS5yZXF1aXJlLnRvVXJsKG5hbWUsIHJlZmVyZW5jZU1vZHVsZSk7XG4gXHRcdFx0fVxuXG4gXHRcdFx0ZnVuY3Rpb24gdG9BYnNNaWQobmFtZSwgcmVmZXJlbmNlTW9kdWxlKSB7XG4gXHRcdFx0XHRyZXR1cm4gbG9hZGVyU2NvcGUucmVxdWlyZS50b0Fic01pZChuYW1lLCByZWZlcmVuY2VNb2R1bGUpO1xuIFx0XHRcdH1cblxuIFx0XHRcdC8vIGRvam8gcmVxdWlyZSBmdW5jdGlvbi5cbiBcdFx0XHRmdW5jdGlvbiByZXEoY29uZmlnLCBkZXBlbmRlbmNpZXMsIGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRyZXR1cm4gY29udGV4dFJlcXVpcmUoY29uZmlnLCBkZXBlbmRlbmNpZXMsIGNhbGxiYWNrLCAwLCByZXEpO1xuIFx0XHRcdH07XG5cbiBcdFx0XHRmdW5jdGlvbiBjcmVhdGVDb250ZXh0UmVxdWlyZShtb2R1bGVJZCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRcdFx0XHRpZiAocmVxLmFic01pZHNCeUlkW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRtb2R1bGVJZCA9IHJlcS5hYnNNaWRzQnlJZFttb2R1bGVJZF07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoIW1vZHVsZUlkKSByZXR1cm4gcmVxO1xuIFx0XHRcdFx0dmFyIHJlc3VsdCA9IGZ1bmN0aW9uKGExLCBhMiwgYTMpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIGNvbnRleHRSZXF1aXJlKGExLCBhMiwgYTMsIG1vZHVsZUlkLCByZXEpO1xuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdGZvciAodmFyIHAgaW4gcmVxKSB7XG4gXHRcdFx0XHRcdGlmIChyZXEuaGFzT3duUHJvcGVydHkocCkpIHtcbiBcdFx0XHRcdFx0XHRyZXN1bHRbcF0gPSByZXFbcF07XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHJlc3VsdC50b1VybCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHRvVXJsKG5hbWUsIG1vZHVsZUlkID8ge21pZDogbW9kdWxlSWR9IDogbnVsbCk7XG4gXHRcdFx0XHR9O1xuIFx0XHRcdFx0cmVzdWx0LnRvQWJzTWlkID0gZnVuY3Rpb24obmFtZSkge1xuIFx0XHRcdFx0XHRyZXR1cm4gdG9BYnNNaWQobmFtZSwgbW9kdWxlSWQgPyB7bWlkOiBtb2R1bGVJZH0gOiBudWxsKTtcbiBcdFx0XHRcdH07XG5cbiBcdFx0XHRcdGlmIChyZXEudW5kZWYpIHtcbiBcdFx0XHRcdFx0cmVzdWx0LnVuZGVmID0gZnVuY3Rpb24obWlkKSB7XG4gXHRcdFx0XHRcdFx0cmVxLnVuZGVmKG1pZCwgbW9kdWxlSWQpO1xuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdFx0XHR9XG5cbiBcdFx0XHRmdW5jdGlvbiByZWdpc3RlckFic01pZHMoYWJzTWlkcykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRcdFx0XHRmb3IgKHZhciBzIGluIGFic01pZHMpIHtcbiBcdFx0XHRcdFx0cmVxLmFic01pZHNbc10gPSBhYnNNaWRzW3NdO1xuIFx0XHRcdFx0XHRpZiAoIXJlcS5hYnNNaWRzQnlJZFthYnNNaWRzW3NdXSkge1xuIFx0XHRcdFx0XHRcdHJlcS5hYnNNaWRzQnlJZFthYnNNaWRzW3NdXSA9IHM7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG5cbiBcdFx0XHRmdW5jdGlvbiByZXNvbHZlVGVybmFyeUhhc0V4cHJlc3Npb24oZXhwcikgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRcdFx0XHQvLyBFeHBlY3RzIGFuIGV4cHJlc3Npb24gb2YgdGhlIGZvcm0gc3VwcG9ydGVkIGJ5IGRvam8vaGFzLmpzIGxvYWRlciwgZXhjZXB0IHRoYXQgbW9kdWxlIGlkZW50aWZpZXJzIGFyZVxuIFx0XHRcdFx0Ly8gaW50ZWdlcnMgY29ycmVzcG9uZGluZyB0byB3ZWJwYWNrIG1vZHVsZSBpZHMuICBSZXR1cm5zIGEgbW9kdWxlIHJlZmVyZW5jZSBpZiBldmFsdWF0aW9uIG9mIHRoZSBleHByZXNzaW9uXG4gXHRcdFx0XHQvLyB1c2luZyB0aGUgY3VycmVudGx5IGRlZmluZWQgZmVhdHVyZXMgcmV0dXJucyBhIG1vZHVsZSBpZCwgb3IgZWxzZSB1bmRlZmluZWQuXG5cbiBcdFx0XHRcdHZhciBoYXMgPSBmaW5kTW9kdWxlKFwiZG9qby9oYXNcIiwgbnVsbCwgZmFsc2UpO1xuIFx0XHRcdFx0dmFyIGlkID0gaGFzLm5vcm1hbGl6ZShleHByLCBmdW5jdGlvbihhcmcpe3JldHVybiBhcmc7fSk7XG4gXHRcdFx0XHRyZXR1cm4gaWQgJiYgX193ZWJwYWNrX3JlcXVpcmVfXyhpZCkgfHwgdW5kZWZpbmVkO1xuIFx0XHRcdH1cblxuIFx0XHRcdGZ1bmN0aW9uIGZpbmRNb2R1bGUobWlkLCByZWZlcmVuY2VNb2R1bGUsIG5vSW5zdGFsbCwgYXNNb2R1bGVPYmopIHtcbiBcdFx0XHRcdG1pZCA9IG1pZC5zcGxpdChcIiFcIikubWFwKGZ1bmN0aW9uKHNlZ21lbnQpIHtcbiBcdFx0XHRcdFx0dmFyIGlzUmVsYXRpdmUgPSBzZWdtZW50LmNoYXJBdCgwKSA9PT0gJy4nO1xuIFx0XHRcdFx0XHRpZihpc1JlbGF0aXZlICYmICFyZWZlcmVuY2VNb2R1bGUpe1xuIFx0XHRcdFx0XHRcdHJldHVybiBzZWdtZW50O1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdHJldHVybiB0b0Fic01pZChzZWdtZW50LCByZWZlcmVuY2VNb2R1bGUgPyB7bWlkOiByZWZlcmVuY2VNb2R1bGV9IDogbnVsbCk7XG4gXHRcdFx0XHR9KS5qb2luKFwiIVwiKTtcbiBcdFx0XHRcdHZhciByZXN1bHQ7XG4gXHRcdFx0XHRpZiAobWlkIGluIHJlcS5hYnNNaWRzICYmIF9fd2VicGFja19yZXF1aXJlX18ubVtyZXEuYWJzTWlkc1ttaWRdXSkge1xuIFx0XHRcdFx0XHRpZiAobm9JbnN0YWxsKSB7XG4gXHRcdFx0XHRcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbcmVxLmFic01pZHNbbWlkXV07XG4gXHRcdFx0XHRcdFx0cmVzdWx0ID0gbW9kdWxlICYmIG1vZHVsZS5sICYmIChhc01vZHVsZU9iaiA/IG1vZHVsZSA6IG1vZHVsZS5leHBvcnRzKTtcbiBcdFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHJlcS5hYnNNaWRzW21pZF0pO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoIXJlc3VsdCkge1xuIFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ01vZHVsZSBub3QgZm91bmQ6ICcgKyBtaWQpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdFx0XHR9XG5cbiBcdFx0XHRmdW5jdGlvbiBkb2pvTW9kdWxlRnJvbVdlYnBhY2tNb2R1bGUod2VicGFja01vZHVsZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRcdFx0XHR2YXIgcmVzdWx0ID0ge2k6d2VicGFja01vZHVsZS5pfTtcbiBcdFx0XHRcdHZhciBpZCA9IHJlcS5hYnNNaWRzQnlJZFt3ZWJwYWNrTW9kdWxlLmldO1xuIFx0XHRcdFx0aWYgKGlkKSB7XG4gXHRcdFx0XHRcdHJlc3VsdC5pZCA9IGlkO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHJlc3VsdCwgXCJleHBvcnRzXCIsIHtcbiBcdFx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHdlYnBhY2tNb2R1bGUuZXhwb3J0czt9LFxuIFx0XHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7d2VicGFja01vZHVsZS5leHBvcnRzID0gdmFsdWU7fSxcbiBcdFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlXG4gXHRcdFx0XHR9KTtcbiBcdFx0XHRcdHJldHVybiByZXN1bHQ7XG4gXHRcdFx0fVxuXG4gXHRcdFx0ZnVuY3Rpb24gY29udGV4dFJlcXVpcmUoYTEsIGEyLCBhMywgcmVmZXJlbmNlTW9kdWxlLCByZXEpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zaGFkb3dcbiBcdFx0XHRcdHZhciB0eXBlID0gKHt9LnRvU3RyaW5nKS5jYWxsKGExKTtcbiBcdFx0XHRcdGlmICh0eXBlID09PSAnW29iamVjdCBTdHJpbmddJykge1xuIFx0XHRcdFx0XHQvLyBhMyBpcyBwYXNzZWQgYnkgcmVxdWlyZSBjYWxscyBpbmplY3RlZCBpbnRvIGRlcGVuZGVuY3kgYXJyYXlzIGZvciBkZXBlbmRlbmNpZXMgc3BlY2lmaWVkXG4gXHRcdFx0XHRcdC8vIGFzIGlkZW50aWZpZXJzICh2cy4gc3RyaW5nIGxpdGVyYWxzKS5cbiBcdFx0XHRcdFx0dmFyIG5vSW5zdGFsbCA9ICEoYTMgPT09IGZhbHNlKTtcbiBcdFx0XHRcdFx0dmFyIG0gPSBmaW5kTW9kdWxlKGExLCByZWZlcmVuY2VNb2R1bGUsIG5vSW5zdGFsbCk7XG4gXHRcdFx0XHRcdGlmICh0eXBlb2YgbSA9PT0gJ29iamVjdCcgJiYgbS5fX0RPSk9fV0VCUEFDS19ERUZJTkVfUFJPTUlTRV9fKSB7XG4gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdNb2R1bGUgbm90IGZvdW5kOiAnICsgYTEpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdHJldHVybiBtO1xuIFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlID09PSAnW29iamVjdCBPYmplY3RdJykge1xuIFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmUgY29uZmlnIGlzIG5vdCBzdXBwb3J0ZWQgYnkgV2ViUGFjaycpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKHR5cGUgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiBcdFx0XHRcdFx0dmFyIG1vZHVsZXMgPSBbXSwgY2FsbGJhY2sgPSBhMiwgZXJyb3JzID0gW107XG4gXHRcdFx0XHRcdGExLmZvckVhY2goZnVuY3Rpb24gKG1pZCkge1xuIFx0XHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVzLnB1c2goZmluZE1vZHVsZShtaWQsIHJlZmVyZW5jZU1vZHVsZSkpO1xuIFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcbiBcdFx0XHRcdFx0XHRcdGVycm9ycy5wdXNoKHttaWQ6IG1pZCwgZXJyb3I6IGV9KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRpZiAoZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuIFx0XHRcdFx0XHRcdGlmIChjYWxsYmFjaykge1xuIFx0XHRcdFx0XHRcdFx0aWYgKGZhbHNlICYmIGlzRGVmaW5lUHJvbWlzZShtb2R1bGVzKSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gXHRcdFx0XHRcdFx0XHRcdFByb21pc2UuYWxsKHdyYXBQcm9taXNlcyhtb2R1bGVzKSkudGhlbihmdW5jdGlvbihkZXBzKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiBcdFx0XHRcdFx0XHRcdFx0XHRjYWxsYmFjay5hcHBseSh0aGlzLCB1bndyYXBQcm9taXNlcyhkZXBzKSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiBcdFx0XHRcdFx0XHRcdFx0fS5iaW5kKHRoaXMpKS5jYXRjaChmdW5jdGlvbihlcnIpe2NvbnNvbGUuZXJyb3IoZXJyKTt9KTtcbiBcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrLmFwcGx5KHRoaXMsIG1vZHVsZXMpO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoXCJmaW5kTW9kdWxlc1wiKTtcbiBcdFx0XHRcdFx0XHRlcnJvci5zcmMgPSBcImRvam8td2VicGFjay1wbHVnaW5cIjtcbiBcdFx0XHRcdFx0XHRlcnJvci5pbmZvID0gZXJyb3JzO1xuIFx0XHRcdFx0XHRcdHJlcS5zaWduYWwoXCJlcnJvclwiLCBlcnJvcik7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0cmV0dXJuIHJlcTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgcmVxdWlyZSBjYWxsJyk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHRcdHJlcS50b1VybCA9IHRvVXJsO1xuIFx0XHRcdHJlcS50b0Fic01pZCA9IHRvQWJzTWlkO1xuIFx0XHRcdHJlcS5hYnNNaWRzID0ge307XG4gXHRcdFx0cmVxLmFic01pZHNCeUlkID0gW107XG4gXHRcdFx0cmVxLmFzeW5jID0gMTtcbiBcdFx0dmFyIGdsb2JhbE9iaiA9IHRoaXN8fHdpbmRvdztcbiBcdFx0cmVnaXN0ZXJBYnNNaWRzKHtcbiBcdFx0XHQvLyBcImRlbW8vc3JjL3ZhbGlkYXRlLmpzXCIgPSBcIi4vZGVtby9zcmMvdmFsaWRhdGUuanNcIlxuIFx0XHRcdC8vIFwiQzpcXFxcVXNlcnNcXFxcODYxNzdcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxUZW1wXFxcXHRtcC03MjAwSnlOQkQzN1E4SmVZXFxcXGRvam9cXFxcZG9qby5qc1wiID0gXCJDOlxcXFxVc2Vyc1xcXFw4NjE3N1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFRlbXBcXFxcdG1wLTcyMDBKeU5CRDM3UThKZVlcXFxcZG9qb1xcXFxkb2pvLmpzXCJcbiBcdFx0fSk7XG5cbiBcdFx0Z2xvYmFsT2JqLnJlcXVpcmUgPSByZXE7XG4gXHRcdFx0KHRoaXN8fHdpbmRvdylbXCJ3ZWJwYWNrSnNvbnBcIl0ucmVnaXN0ZXJBYnNNaWRzID0gcmVnaXN0ZXJBYnNNaWRzO1xuXG4gXHRcdC8vIGV4cG9zZSB0aGUgRG9qbyBjb21wYXRpYmlsaXR5IGZ1bmN0aW9ucyBhcyBhIHByb3BlcnRpZXMgb2YgX193ZWJwYWNrX3JlcXVpcmVfX1xuIFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5kaikgdGhyb3cgbmV3IEVycm9yKFwiX193ZWJwYWNrX3JlcXVpcmVfXy5kaiBuYW1lIGNvbGxpc2lvbi5cIilcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kaiA9IHtcbiBcdFx0XHRyOiByZXEsXG4gXHRcdFx0YzogY3JlYXRlQ29udGV4dFJlcXVpcmUsXG4gXHRcdFx0bTogZG9qb01vZHVsZUZyb21XZWJwYWNrTW9kdWxlLFxuIFx0XHRcdGg6IHJlc29sdmVUZXJuYXJ5SGFzRXhwcmVzc2lvbixcbiBcdFx0fTtcbiBcdFx0dmFyIGxvYWRlclNjb3BlID0ge2RvY3VtZW50Omdsb2JhbE9iai5kb2N1bWVudH07XG4gXHRcdGxvYWRlclNjb3BlLmdsb2JhbCA9IGxvYWRlclNjb3BlLndpbmRvdyA9IGxvYWRlclNjb3BlO1xuIFx0XHRnbG9iYWxPYmouZG9qb0NvbmZpZyA9IGdsb2JhbE9iai5kb2pvQ29uZmlnIHx8IHt9XG4gXHRcdHZhciB1c2VyQ29uZmlnID0gbWl4KGdsb2JhbE9iai5kb2pvQ29uZmlnLCAoeydiYXNlVXJsJzonLicsJ2RlcHMnOlsnanMvYm9vdHN0cmFwJ10sJ2FzeW5jJzp0cnVlLCdoYXMnOih7J2Rvam8tY29uZmlnLWFwaSc6MH0pLCdmaXh1cFVybCc6KGZ1bmN0aW9uKHVybCkge1xyXG4gXHRcdFx0XHRcdC8vIExvYWQgdGhlIHVuY29tcHJlc3NlZCB2ZXJzaW9ucyBvZiBkb2pvL2Rpaml0L2Rvam94IGphdmFzY3JpcHQgZmlsZXMgd2hlbiB1c2luZyB0aGUgZG9qbyBsb2FkZXIuXHJcbiBcdFx0XHRcdFx0Ly8gV2hlbiB1c2luZyBhIHdlYnBhY2sgYnVpbGQsIHRoZSBkb2pvIGxvYWRlciBpcyBub3QgdXNlZCBmb3IgbG9hZGluZyBqYXZhc2NyaXB0IGZpbGVzIHNvIHRoaXNcclxuIFx0XHRcdFx0XHQvLyBwcm9wZXJ0eSBoYXMgbm8gZWZmZWN0LiAgVGhpcyBpcyBvbmx5IG5lZWRlZCBiZWNhdXNlIHdlJ3JlIGxvYWRpbmcgRG9qbyBmcm9tIGEgQ0ROIGZvciB0aGlzXHJcbiBcdFx0XHRcdFx0Ly8gZGVtby4gIEluIGEgbm9ybWFsIGRldmVsb3BtZW50IGVudm9yaW5tZW50LCBEb2pvIHdvdWxkIGJlIGluc3RhbGxlZCBsb2NhbGx5IGFuZCB0aGlzIHdvdWxkbid0XHJcbiBcdFx0XHRcdFx0Ly8gYmUgbmVlZGVkLlxyXG4gXHRcdFx0XHRcdGlmICgvXFwvKGRvam98ZGlqaXR8ZG9qb3gpXFwvLipcXC5qcyQvLnRlc3QodXJsKSkge1xyXG4gXHRcdFx0XHRcdCAgdXJsICs9IFwiLnVuY29tcHJlc3NlZC5qc1wiO1xyXG4gXHRcdFx0XHQgIH1cclxuIFx0XHRcdFx0XHRyZXR1cm4gdXJsO1xyXG4gXHRcdFx0XHR9KX0pKTtcbiBcdFx0dmFyIGRlZmF1bHRDb25maWcgPSAoeydoYXNDYWNoZSc6KHsnd2VicGFjayc6MSwnaG9zdC1icm93c2VyJzoxLCdkb20nOjEsJ2Rvam8tbG9hZGVyJzoxLCdkb2pvLWhhcy1hcGknOjEsJ2Rvam8tZG9tLXJlYWR5LWFwaSc6MSwnZG9qby1zbmlmZic6MSwnZG9qby10ZXN0LXNuaWZmJzoxLCdjb25maWctZGVmZXJyZWRJbnN0cnVtZW50YXRpb24nOjEsJ2NvbmZpZy10bG1TaWJsaW5nT2ZEb2pvJzoxfSksJ3BhdGhzJzooeydqcyc6J2pzJywndGhlbWUnOid0aGVtZScsJ2Nzcyc6Jy8vY2h1Y2tkdW1vbnQuZ2l0aHViLmlvL2Rvam8tY3NzLXBsdWdpbi8xLjAuMC9jc3MnLCdsZXNzcHAnOicvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9sZXNzLmpzLzEuNy4zL2xlc3MubWluJ30pLCdwYXRoc01hcFByb2cnOltbJ2xlc3NwcCcsJy8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2xlc3MuanMvMS43LjMvbGVzcy5taW4nLC9ebGVzc3BwKFxcL3wkKS8sNl0sWyd0aGVtZScsJ3RoZW1lJywvXnRoZW1lKFxcL3wkKS8sNV0sWydjc3MnLCcvL2NodWNrZHVtb250LmdpdGh1Yi5pby9kb2pvLWNzcy1wbHVnaW4vMS4wLjAvY3NzJywvXmNzcyhcXC98JCkvLDNdLFsnanMnLCdqcycsL15qcyhcXC98JCkvLDJdXSwncGFja3MnOih7J2Rvam8nOih7J21haW4nOidtYWluJywnbmFtZSc6J2Rvam8nLCdsb2NhdGlvbic6J3JlbGVhc2UvZG9qbycsJ2xpYic6Jy4nfSksJ2Rpaml0JzooeydtYWluJzonbWFpbicsJ25hbWUnOidkaWppdCcsJ2xvY2F0aW9uJzoncmVsZWFzZS9kaWppdCcsJ2xpYic6Jy4nfSksJ2Rvam94JzooeydtYWluJzonbWFpbicsJ25hbWUnOidkb2pveCcsJ2xvY2F0aW9uJzoncmVsZWFzZS9kb2pveCcsJ2xpYic6Jy4nfSl9KSwnYWxpYXNlcyc6W10sJ21hcFByb2dzJzpbXSwnY2FjaGVCdXN0Jzp1bmRlZmluZWQsJ21vZHVsZXMnOih7fSksJ2NhY2hlJzooe30pfSk7XG4gXHRcdHZhciBkb2pvTG9hZGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIkM6XFxcXFVzZXJzXFxcXDg2MTc3XFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcVGVtcFxcXFx0bXAtNzIwMEp5TkJEMzdROEplWVxcXFxkb2pvXFxcXGRvam8uanNcIik7XG4gXHRcdGRvam9Mb2FkZXIuY2FsbChsb2FkZXJTY29wZSwgdXNlckNvbmZpZywgZGVmYXVsdENvbmZpZywgbG9hZGVyU2NvcGUsIGxvYWRlclNjb3BlKTtcbiBcdFx0bG9hZGVyU2NvcGUucmVxdWlyZS5iYXNlVXJsID0gXCIuL1wiO1xuIFx0XHRbJ2Jhc2VVcmwnLCdoYXMnLCdyYXdDb25maWcnLCdvbicsJ3NpZ25hbCddLmZvckVhY2goZnVuY3Rpb24obmFtZSkge3JlcVtuYW1lXSA9IGxvYWRlclNjb3BlLnJlcXVpcmVbbmFtZV19KVxuIFx0fSkoKTsgLyogRW5kIHVuZGVmaW5lZCBleHRlbnNpb25zICovXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2RlbW8vc3JjL3ZhbGlkYXRlLmpzXCIpO1xuIiwicmVxdWlyZShbXCJkaWppdC9mb3JtL0Zvcm1cIixcImRpaml0L2Zvcm0vVmFsaWRhdGlvblRleHRCb3hcIl0sIGZ1bmN0aW9uIChGb3JtLFZhbGlkYXRpb25UZXh0Qm94ICkge1xyXG4gICAgdmFyIGZvcm0gPSBuZXcgRm9ybSh7XHJcbiAgICAgICAgXHJcbiAgICB9LFwicGFnZVwiKTtcclxuICAgIHZhciB3ID0gbmV3IFZhbGlkYXRpb25UZXh0Qm94KHtcclxuICAgICAgIHJlcXVpcmVkOnRydWVcclxuICAgIH0pO1xyXG4gICAgIHcuc3RhcnR1cCgpO1xyXG4gICAgIHcucGxhY2VBdChmb3JtLmRvbU5vZGUpO1xyXG4gICAgIFxyXG4gICAgIHcuZGVmZXIoZnVuY3Rpb24oKXtcclxuICAgICAgICAgdy52YWxpZGF0ZSgpO1xyXG4gICAgIH0sMjAwMClcclxuICAgICBcclxuICAgICAgZm9ybS5kZWZlcihmdW5jdGlvbigpe1xyXG4gICAgICAgICBmb3JtLnZhbGlkYXRlKCk7XHJcbiAgICAgfSw0MDAwKVxyXG4gICAgXHJcbi8vICAgICAgICAgICAgICAgICB2YXIgdyA9IG5ldyBkU3dpdGNoKHt9LFwicGFnZVwiKTtcclxuLy8gICAgICAgICAgICAgICAgIHcuc3RhcnR1cCgpO1xyXG4gICAgXHJcbiB9KTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZXJDb25maWcsIGRlZmF1bHRDb25maWcsIGdsb2JhbCwgd2luZG93KSB7IHRoaXMubG9hZGVyVmVyc2lvbiA9IFwiMS4xNS4wXCI7IChmdW5jdGlvbihcblx0dXNlckNvbmZpZyxcblx0ZGVmYXVsdENvbmZpZ1xuKXtcblx0Ly8gc3VtbWFyeTpcblx0Ly9cdFx0VGhpcyBpcyB0aGUgXCJzb3VyY2UgbG9hZGVyXCIgYW5kIGlzIHRoZSBlbnRyeSBwb2ludCBmb3IgRG9qbyBkdXJpbmcgZGV2ZWxvcG1lbnQuIFlvdSBtYXkgYWxzbyBsb2FkIERvam8gd2l0aFxuXHQvL1x0XHRhbnkgQU1ELWNvbXBsaWFudCBsb2FkZXIgdmlhIHRoZSBwYWNrYWdlIG1haW4gbW9kdWxlIGRvam8vbWFpbi5cblx0Ly8gZGVzY3JpcHRpb246XG5cdC8vXHRcdFRoaXMgaXMgdGhlIFwic291cmNlIGxvYWRlclwiIGZvciBEb2pvLiBJdCBwcm92aWRlcyBhbiBBTUQtY29tcGxpYW50IGxvYWRlciB0aGF0IGNhbiBiZSBjb25maWd1cmVkXG5cdC8vXHRcdHRvIG9wZXJhdGUgaW4gZWl0aGVyIHN5bmNocm9ub3VzIG9yIGFzeW5jaHJvbm91cyBtb2Rlcy4gQWZ0ZXIgdGhlIGxvYWRlciBpcyBkZWZpbmVkLCBkb2pvIGlzIGxvYWRlZFxuXHQvL1x0XHRJQVcgdGhlIHBhY2thZ2UgbWFpbiBtb2R1bGUgZG9qby9tYWluLiBJbiB0aGUgZXZlbnQgeW91IHdpc2ggdG8gdXNlIGEgZm9yZWlnbiBsb2FkZXIsIHlvdSBtYXkgbG9hZCBkb2pvIGFzIGEgcGFja2FnZVxuXHQvL1x0XHR2aWEgdGhlIHBhY2thZ2UgbWFpbiBtb2R1bGUgZG9qby9tYWluIGFuZCB0aGlzIGxvYWRlciBpcyBub3QgcmVxdWlyZWQ7IHNlZSBkb2pvL3BhY2thZ2UuanNvbiBmb3IgZGV0YWlscy5cblx0Ly9cblx0Ly9cdFx0SW4gb3JkZXIgdG8ga2VlcCBjb21wYXRpYmlsaXR5IHdpdGggdGhlIHYxLnggbGluZSwgdGhpcyBsb2FkZXIgaW5jbHVkZXMgYWRkaXRpb25hbCBtYWNoaW5lcnkgdGhhdCBlbmFibGVzXG5cdC8vXHRcdHRoZSBkb2pvLnByb3ZpZGUsIGRvam8ucmVxdWlyZSBldCBhbCBBUEkuIFRoaXMgbWFjaGluZXJ5IGlzIGxvYWRlZCBieSBkZWZhdWx0LCBidXQgbWF5IGJlIGR5bmFtaWNhbGx5IHJlbW92ZWRcblx0Ly9cdFx0dmlhIHRoZSBoYXMuanMgQVBJIGFuZCBzdGF0aWNhbGx5IHJlbW92ZWQgdmlhIHRoZSBidWlsZCBzeXN0ZW0uXG5cdC8vXG5cdC8vXHRcdFRoaXMgbG9hZGVyIGluY2x1ZGVzIHNuaWZmaW5nIG1hY2hpbmVyeSB0byBkZXRlcm1pbmUgdGhlIGVudmlyb25tZW50OyB0aGUgZm9sbG93aW5nIGVudmlyb25tZW50cyBhcmUgc3VwcG9ydGVkOlxuXHQvL1xuXHQvL1x0XHQtIGJyb3dzZXJcblx0Ly9cdFx0LSBub2RlLmpzXG5cdC8vXHRcdC0gcmhpbm9cblx0Ly9cblx0Ly9cdFx0VGhpcyBpcyB0aGUgc28tY2FsbGVkIFwic291cmNlIGxvYWRlclwiLiBBcyBzdWNoLCBpdCBpbmNsdWRlcyBtYW55IG9wdGlvbmFsIGZlYXR1cmVzIHRoYXQgbWF5IGJlIGRpc2NhcmRlZCBieVxuXHQvL1x0XHRidWlsZGluZyBhIGN1c3RvbWl6ZWQgdmVyc2lvbiB3aXRoIHRoZSBidWlsZCBzeXN0ZW0uXG5cblx0Ly8gRGVzaWduIGFuZCBJbXBsZW1lbnRhdGlvbiBOb3Rlc1xuXHQvL1xuXHQvLyBUaGlzIGlzIGEgZG9qby1zcGVjaWZpYyBhZGFwdGlvbiBvZiBiZExvYWQsIGRvbmF0ZWQgdG8gdGhlIGRvam8gZm91bmRhdGlvbiBieSBBbHRvdmlzbyBMTEMuXG5cdC8vXG5cdC8vIFRoaXMgZnVuY3Rpb24gZGVmaW5lcyBhbiBBTUQtY29tcGxpYW50IChodHRwOi8vd2lraS5jb21tb25qcy5vcmcvd2lraS9Nb2R1bGVzL0FzeW5jaHJvbm91c0RlZmluaXRpb24pXG5cdC8vIGxvYWRlciB0aGF0IGNhbiBiZSBjb25maWd1cmVkIHRvIG9wZXJhdGUgaW4gZWl0aGVyIHN5bmNocm9ub3VzIG9yIGFzeW5jaHJvbm91cyBtb2Rlcy5cblx0Ly9cblx0Ly8gU2luY2UgdGhpcyBtYWNoaW5lcnkgaW1wbGVtZW50cyBhIGxvYWRlciwgaXQgZG9lcyBub3QgaGF2ZSB0aGUgbHV4dXJ5IG9mIHVzaW5nIGEgbG9hZCBzeXN0ZW0gYW5kL29yXG5cdC8vIGxldmVyYWdpbmcgYSB1dGlsaXR5IGxpYnJhcnkuIFRoaXMgcmVzdWx0cyBpbiBhbiB1bnBsZWFzYW50bHkgbG9uZyBmaWxlOyBoZXJlIGlzIGEgcm9hZCBtYXAgb2YgdGhlIGNvbnRlbnRzOlxuXHQvL1xuXHQvL1x0IDEuIFNtYWxsIGxpYnJhcnkgZm9yIHVzZSBpbXBsZW1lbnRpbmcgdGhlIGxvYWRlci5cblx0Ly9cdCAyLiBEZWZpbmUgdGhlIGhhcy5qcyBBUEk7IHRoaXMgaXMgdXNlZCB0aHJvdWdob3V0IHRoZSBsb2FkZXIgdG8gYnJhY2tldCBmZWF0dXJlcy5cblx0Ly9cdCAzLiBEZWZpbmUgdGhlIG5vZGUuanMgYW5kIHJoaW5vIHNuaWZmcyBhbmQgc25pZmYuXG5cdC8vXHQgNC4gRGVmaW5lIHRoZSBsb2FkZXIncyBkYXRhLlxuXHQvL1x0IDUuIERlZmluZSB0aGUgY29uZmlndXJhdGlvbiBtYWNoaW5lcnkuXG5cdC8vXHQgNi4gRGVmaW5lIHRoZSBzY3JpcHQgZWxlbWVudCBzbmlmZmluZyBtYWNoaW5lcnkgYW5kIHNuaWZmIGZvciBjb25maWd1cmF0aW9uIGRhdGEuXG5cdC8vXHQgNy4gQ29uZmlndXJlIHRoZSBsb2FkZXIgSUFXIHRoZSBwcm92aWRlZCB1c2VyLCBkZWZhdWx0LCBhbmQgc25pZmZpbmcgZGF0YS5cblx0Ly9cdCA4LiBEZWZpbmUgdGhlIGdsb2JhbCByZXF1aXJlIGZ1bmN0aW9uLlxuXHQvL1x0IDkuIERlZmluZSB0aGUgbW9kdWxlIHJlc29sdXRpb24gbWFjaGluZXJ5LlxuXHQvL1x0MTAuIERlZmluZSB0aGUgbW9kdWxlIGFuZCBwbHVnaW4gbW9kdWxlIGRlZmluaXRpb24gbWFjaGluZXJ5XG5cdC8vXHQxMS4gRGVmaW5lIHRoZSBzY3JpcHQgaW5qZWN0aW9uIG1hY2hpbmVyeS5cblx0Ly9cdDEyLiBEZWZpbmUgdGhlIHdpbmRvdyBsb2FkIGRldGVjdGlvbi5cblx0Ly9cdDEzLiBEZWZpbmUgdGhlIGxvZ2dpbmcgQVBJLlxuXHQvL1x0MTQuIERlZmluZSB0aGUgdHJhY2luZyBBUEkuXG5cdC8vXHQxNi4gRGVmaW5lIHRoZSBBTUQgZGVmaW5lIGZ1bmN0aW9uLlxuXHQvL1x0MTcuIERlZmluZSB0aGUgZG9qbyB2MS54IHByb3ZpZGUvcmVxdWlyZSBtYWNoaW5lcnktLXNvIGNhbGxlZCBcImxlZ2FjeVwiIG1vZGVzLlxuXHQvL1x0MTguIFB1Ymxpc2ggZ2xvYmFsIHZhcmlhYmxlcy5cblx0Ly9cblx0Ly8gTGFuZ3VhZ2UgYW5kIEFjcm9ueW1zIGFuZCBJZGlvbXNcblx0Ly9cblx0Ly8gbW9kdWxlSWQ6IGEgQ0pTIG1vZHVsZSBpZGVudGlmaWVyLCAodXNlZCBmb3IgcHVibGljIEFQSXMpXG5cdC8vIG1pZDogbW9kdWxlSWQgKHVzZWQgaW50ZXJuYWxseSlcblx0Ly8gcGFja2FnZUlkOiBhIHBhY2thZ2UgaWRlbnRpZmllciAodXNlZCBmb3IgcHVibGljIEFQSXMpXG5cdC8vIHBpZDogcGFja2FnZUlkICh1c2VkIGludGVybmFsbHkpOyB0aGUgaW1wbGllZCBzeXN0ZW0gb3IgZGVmYXVsdCBwYWNrYWdlIGhhcyBwaWQ9PT1cIlwiXG5cdC8vIHBhY2s6IHBhY2thZ2UgaXMgdXNlZCBpbnRlcm5hbGx5IHRvIHJlZmVyZW5jZSBhIHBhY2thZ2Ugb2JqZWN0IChzaW5jZSBqYXZhc2NyaXB0IGhhcyByZXNlcnZlZCB3b3JkcyBpbmNsdWRpbmcgXCJwYWNrYWdlXCIpXG5cdC8vIHByaWQ6IHBsdWdpbiByZXNvdXJjZSBpZGVudGlmaWVyXG5cdC8vIFRoZSBpbnRlZ2VyIGNvbnN0YW50IDEgaXMgdXNlZCBpbiBwbGFjZSBvZiB0cnVlIGFuZCAwIGluIHBsYWNlIG9mIGZhbHNlLlxuXHQvL1xuXHQvLyBUaGUgXCJmb3JlaWduLWxvYWRlclwiIGhhcyBjb25kaXRpb24gaXMgZGVmaW5lZCBpZiBhbm90aGVyIGxvYWRlciBpcyBiZWluZyB1c2VkIChlLmcuIHdlYnBhY2spIGFuZCB0aGlzIGNvZGUgaXMgb25seVxuXHQvLyBuZWVkZWQgZm9yIHJlc29sdmluZyBtb2R1bGUgaWRlbnRpZmllcnMgYmFzZWQgb24gdGhlIGNvbmZpZy4gIEluIHRoaXMgY2FzZSwgb25seSB0aGUgZnVuY3Rpb25zIHJlcXVpcmUudG9VcmwgYW5kIFxuXHQvLyByZXF1aXJlLnRvQWJzTWlkIGFyZSBzdXBwb3J0ZWQuICBUaGUgcmVxdWlyZSBhbmQgZGVmaW5lIGZ1bmN0aW9ucyBhcmUgbm90IHN1cHBvcnRlZC5cblxuXHQvLyBkZWZpbmUgZ2xvYmFsXG5cdHZhciBnbG9iYWxPYmplY3QgPSAoZnVuY3Rpb24oKXtcblx0XHRpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGdsb2JhbCAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Ly8gZ2xvYmFsIHNwZWMgZGVmaW5lcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBjYWxsZWQgJ2dsb2JhbCdcblx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWdsb2JhbFxuXHRcdFx0Ly8gYGdsb2JhbGAgaXMgYWxzbyBkZWZpbmVkIGluIE5vZGVKU1xuXHRcdFx0cmV0dXJuIGdsb2JhbDtcblx0XHR9XG5cdFx0ZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdC8vIHdpbmRvdyBpcyBkZWZpbmVkIGluIGJyb3dzZXJzXG5cdFx0XHRyZXR1cm4gd2luZG93O1xuXHRcdH1cblx0XHRlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdC8vIHNlbGYgaXMgZGVmaW5lZCBpbiBXZWJXb3JrZXJzXG5cdFx0XHRyZXR1cm4gc2VsZjtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0pKCk7XG5cblx0Ly8gZGVmaW5lIGEgbWluaW1hbCBsaWJyYXJ5IHRvIGhlbHAgYnVpbGQgdGhlIGxvYWRlclxuXHR2YXIgbm9vcCA9IGZ1bmN0aW9uKCl7XG5cdFx0fSxcblxuXHRcdGlzRW1wdHkgPSBmdW5jdGlvbihpdCl7XG5cdFx0XHRmb3IodmFyIHAgaW4gaXQpe1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1cblx0XHRcdHJldHVybiAxO1xuXHRcdH0sXG5cblx0XHR0b1N0cmluZyA9IHt9LnRvU3RyaW5nLFxuXG5cdFx0aXNGdW5jdGlvbiA9IGZ1bmN0aW9uKGl0KXtcblx0XHRcdHJldHVybiB0b1N0cmluZy5jYWxsKGl0KSA9PSBcIltvYmplY3QgRnVuY3Rpb25dXCI7XG5cdFx0fSxcblxuXHRcdGlzU3RyaW5nID0gZnVuY3Rpb24oaXQpe1xuXHRcdFx0cmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpID09IFwiW29iamVjdCBTdHJpbmddXCI7XG5cdFx0fSxcblxuXHRcdGlzQXJyYXkgPSBmdW5jdGlvbihpdCl7XG5cdFx0XHRyZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkgPT0gXCJbb2JqZWN0IEFycmF5XVwiO1xuXHRcdH0sXG5cblx0XHRmb3JFYWNoID0gZnVuY3Rpb24odmVjdG9yLCBjYWxsYmFjayl7XG5cdFx0XHRpZih2ZWN0b3Ipe1xuXHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdmVjdG9yLmxlbmd0aDspe1xuXHRcdFx0XHRcdGNhbGxiYWNrKHZlY3RvcltpKytdKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRtaXggPSBmdW5jdGlvbihkZXN0LCBzcmMpe1xuXHRcdFx0Zm9yKHZhciBwIGluIHNyYyl7XG5cdFx0XHRcdGRlc3RbcF0gPSBzcmNbcF07XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZGVzdDtcblx0XHR9LFxuXG5cdFx0bWFrZUVycm9yID0gZnVuY3Rpb24oZXJyb3IsIGluZm8pe1xuXHRcdFx0cmV0dXJuIG1peChuZXcgRXJyb3IoZXJyb3IpLCB7c3JjOlwiZG9qb0xvYWRlclwiLCBpbmZvOmluZm99KTtcblx0XHR9LFxuXG5cdFx0dWlkU2VlZCA9IDEsXG5cblx0XHR1aWQgPSBmdW5jdGlvbigpe1xuXHRcdFx0Ly8gUmV0dXJucyBhIHVuaXF1ZSBpZGVudGlmaWVyICh3aXRoaW4gdGhlIGxpZmV0aW1lIG9mIHRoZSBkb2N1bWVudCkgb2YgdGhlIGZvcm0gL19kKy8uXG5cdFx0XHRyZXR1cm4gXCJfXCIgKyB1aWRTZWVkKys7XG5cdFx0fSxcblxuXHRcdC8vIEZJWE1FOiBob3cgdG8gZG9jIHdpbmRvdy5yZXF1aXJlKCkgYXBpXG5cblx0XHQvLyB0aGlzIHdpbGwgYmUgdGhlIGdsb2JhbCByZXF1aXJlIGZ1bmN0aW9uOyBkZWZpbmUgaXQgaW1tZWRpYXRlbHkgc28gd2UgY2FuIHN0YXJ0IGhhbmdpbmcgdGhpbmdzIG9mZiBvZiBpdFxuXHRcdHJlcSA9IGZ1bmN0aW9uKFxuXHRcdFx0Y29uZmlnLFx0XHQgIC8vKG9iamVjdCwgb3B0aW9uYWwpIGhhc2ggb2YgY29uZmlndXJhdGlvbiBwcm9wZXJ0aWVzXG5cdFx0XHRkZXBlbmRlbmNpZXMsIC8vKGFycmF5IG9mIGNvbW1vbmpzLm1vZHVsZUlkLCBvcHRpb25hbCkgbGlzdCBvZiBtb2R1bGVzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXBwbHlpbmcgY2FsbGJhY2tcblx0XHRcdGNhbGxiYWNrXHQgIC8vKGZ1bmN0aW9uLCBvcHRpb25hbCkgbGFtYmRhIGV4cHJlc3Npb24gdG8gYXBwbHkgdG8gbW9kdWxlIHZhbHVlcyBpbXBsaWVkIGJ5IGRlcGVuZGVuY2llc1xuXHRcdCl7XG5cdFx0XHRyZXR1cm4gY29udGV4dFJlcXVpcmUoY29uZmlnLCBkZXBlbmRlbmNpZXMsIGNhbGxiYWNrLCAwLCByZXEpO1xuXHRcdH0sXG5cblx0XHQvLyB0aGUgbG9hZGVyIHVzZXMgdGhlIGhhcy5qcyBBUEkgdG8gY29udHJvbCBmZWF0dXJlIGluY2x1c2lvbi9leGNsdXNpb247IGRlZmluZSB0aGVuIHVzZSB0aHJvdWdob3V0XG5cdFx0Z2xvYmFsID0gZ2xvYmFsT2JqZWN0LFxuXG5cdFx0ZG9jID0gZ2xvYmFsLmRvY3VtZW50LFxuXG5cdFx0ZWxlbWVudCA9IGRvYyAmJiBkb2MuY3JlYXRlRWxlbWVudChcIkRpVlwiKSxcblxuXHRcdGhhcyA9IHJlcS5oYXMgPSBmdW5jdGlvbihuYW1lKXtcblx0XHRcdHJldHVybiBpc0Z1bmN0aW9uKGhhc0NhY2hlW25hbWVdKSA/IChoYXNDYWNoZVtuYW1lXSA9IGhhc0NhY2hlW25hbWVdKGdsb2JhbCwgZG9jLCBlbGVtZW50KSkgOiBoYXNDYWNoZVtuYW1lXTtcblx0XHR9LFxuXG5cdFx0aGFzQ2FjaGUgPSBoYXMuY2FjaGUgPSBkZWZhdWx0Q29uZmlnLmhhc0NhY2hlO1xuXG5cdGlmIChpc0Z1bmN0aW9uKHVzZXJDb25maWcpKSB7XG5cdFx0dXNlckNvbmZpZyA9IHVzZXJDb25maWcoZ2xvYmFsT2JqZWN0KTtcblx0fVxuXG5cdGhhcy5hZGQgPSBmdW5jdGlvbihuYW1lLCB0ZXN0LCBub3csIGZvcmNlKXtcblx0XHQoaGFzQ2FjaGVbbmFtZV09PT11bmRlZmluZWQgfHwgZm9yY2UpICYmIChoYXNDYWNoZVtuYW1lXSA9IHRlc3QpO1xuXHRcdHJldHVybiBub3cgJiYgaGFzKG5hbWUpO1xuXHR9O1xuXG5cdCAwICYmIGhhcy5hZGQoXCJob3N0LW5vZGVcIiwgdXNlckNvbmZpZy5oYXMgJiYgXCJob3N0LW5vZGVcIiBpbiB1c2VyQ29uZmlnLmhhcyA/XG5cdFx0dXNlckNvbmZpZy5oYXNbXCJob3N0LW5vZGVcIl0gOlxuXHRcdCh0eXBlb2YgcHJvY2VzcyA9PSBcIm9iamVjdFwiICYmIHByb2Nlc3MudmVyc2lvbnMgJiYgcHJvY2Vzcy52ZXJzaW9ucy5ub2RlICYmIHByb2Nlc3MudmVyc2lvbnMudjgpKTtcblx0aWYoIDAgKXtcblx0XHQvLyBmaXh1cCB0aGUgZGVmYXVsdCBjb25maWcgZm9yIG5vZGUuanMgZW52aXJvbm1lbnRcblx0XHRyZXF1aXJlKFwiLi9fYmFzZS9jb25maWdOb2RlLmpzXCIpLmNvbmZpZyhkZWZhdWx0Q29uZmlnKTtcblx0XHQvLyByZW1lbWJlciBub2RlJ3MgcmVxdWlyZSAod2l0aCByZXNwZWN0IHRvIGJhc2VVcmw9PWRvam8ncyByb290KVxuXHRcdGRlZmF1bHRDb25maWcubG9hZGVyUGF0Y2gubm9kZVJlcXVpcmUgPSByZXF1aXJlO1xuXHR9XG5cblx0IDAgJiYgaGFzLmFkZChcImhvc3Qtcmhpbm9cIiwgdXNlckNvbmZpZy5oYXMgJiYgXCJob3N0LXJoaW5vXCIgaW4gdXNlckNvbmZpZy5oYXMgP1xuXHRcdHVzZXJDb25maWcuaGFzW1wiaG9zdC1yaGlub1wiXSA6XG5cdFx0KHR5cGVvZiBsb2FkID09IFwiZnVuY3Rpb25cIiAmJiAodHlwZW9mIFBhY2thZ2VzID09IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgUGFja2FnZXMgPT0gXCJvYmplY3RcIikpKTtcblx0aWYoIDAgKXtcblx0XHQvLyBvd2luZyB0byByaGlubydzIGxhbWUgZmVhdHVyZSB0aGF0IGhpZGVzIHRoZSBzb3VyY2Ugb2YgdGhlIHNjcmlwdCwgZ2l2ZSB0aGUgdXNlciBhIHdheSB0byBzcGVjaWZ5IHRoZSBiYXNlVXJsLi4uXG5cdFx0Zm9yKHZhciBiYXNlVXJsID0gdXNlckNvbmZpZy5iYXNlVXJsIHx8IFwiLlwiLCBhcmcsIHJoaW5vQXJncyA9IHRoaXMuYXJndW1lbnRzLCBpID0gMDsgaSA8IHJoaW5vQXJncy5sZW5ndGg7KXtcblx0XHRcdGFyZyA9IChyaGlub0FyZ3NbaSsrXSArIFwiXCIpLnNwbGl0KFwiPVwiKTtcblx0XHRcdGlmKGFyZ1swXSA9PSBcImJhc2VVcmxcIil7XG5cdFx0XHRcdGJhc2VVcmwgPSBhcmdbMV07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRsb2FkKGJhc2VVcmwgKyBcIi9fYmFzZS9jb25maWdSaGluby5qc1wiKTtcblx0XHRyaGlub0Rvam9Db25maWcoZGVmYXVsdENvbmZpZywgYmFzZVVybCwgcmhpbm9BcmdzKTtcblx0fVxuXG5cdCAwICYmIGhhcy5hZGQoXCJob3N0LXdlYndvcmtlclwiLCAoKHR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcpICYmIChzZWxmIGluc3RhbmNlb2YgV29ya2VyR2xvYmFsU2NvcGUpKSk7XG5cdGlmKCAwICl7XG5cdFx0bWl4KGRlZmF1bHRDb25maWcuaGFzQ2FjaGUsIHtcblx0XHRcdFwiaG9zdC1icm93c2VyXCI6IDAsXG5cdFx0XHRcImRvbVwiOiAwLFxuXHRcdFx0XCJkb2pvLWRvbS1yZWFkeS1hcGlcIjogMCxcblx0XHRcdFwiZG9qby1zbmlmZlwiOiAwLFxuXHRcdFx0XCJkb2pvLWluamVjdC1hcGlcIjogMSxcblx0XHRcdFwiaG9zdC13ZWJ3b3JrZXJcIjogMSxcblx0XHRcdFwiZG9qby1ndWFyYW50ZWUtY29uc29sZVwiOiAwIC8vIGNvbnNvbGUgaXMgaW1tdXRhYmxlIGluIEZGMzArLCBzZWUgaHR0cHM6Ly9idWdzLmRvam90b29sa2l0Lm9yZy90aWNrZXQvMTgxMDBcblx0XHR9KTtcblxuXHRcdGRlZmF1bHRDb25maWcubG9hZGVyUGF0Y2ggPSB7XG5cdFx0XHRpbmplY3RVcmw6IGZ1bmN0aW9uKHVybCwgY2FsbGJhY2spe1xuXHRcdFx0XHQvLyBUT0RPOlxuXHRcdFx0XHQvL1x0XHRUaGlzIGlzIG5vdCBhc3luYywgbm9yIGNhbiBpdCBiZSBpbiBXZWJ3b3JrZXJzLiAgSXQgY291bGQgYmUgbWFkZSBiZXR0ZXIgYnkgcGFzc2luZ1xuXHRcdFx0XHQvL1x0XHR0aGUgZW50aXJlIHJlcXVpcmUgYXJyYXkgaW50byBpbXBvcnRTY3JpcHRzIGF0LiAgVGhpcyB3YXkgdGhlIHNjcmlwdHMgYXJlIGxvYWRlZCBpblxuXHRcdFx0XHQvL1x0XHRhc3luYyBtb2RlOyBldmVuIGlmIHRoZSBjYWxsYmFja3MgYXJlIHJhbiBpbiBzeW5jLiAgSXQgaXMgbm90IGEgbWFqb3IgaXNzdWUgYXMgd2Vid29ya2Vyc1xuXHRcdFx0XHQvL1x0XHR0ZW5kIHRvIGJlIGxvbmcgcnVubmluZyB3aGVyZSBpbml0aWFsIHN0YXJ0dXAgaXMgbm90IGEgbWFqb3IgZmFjdG9yLlxuXG5cdFx0XHRcdHRyeXtcblx0XHRcdFx0XHRpbXBvcnRTY3JpcHRzKHVybCk7XG5cdFx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdFx0fWNhdGNoKGUpe1xuXHRcdFx0XHRcdGNvbnNvbGUuaW5mbyhcImZhaWxlZCB0byBsb2FkIHJlc291cmNlIChcIiArIHVybCArIFwiKVwiKTtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXG5cdC8vIHVzZXJDb25maWcgaGFzIHRlc3RzIG92ZXJyaWRlIGRlZmF1bHRDb25maWcgaGFzIHRlc3RzOyBkbyB0aGlzIGFmdGVyIHRoZSBlbnZpcm9ubWVudCBkZXRlY3Rpb24gYmVjYXVzZVxuXHQvLyB0aGUgZW52aXJvbm1lbnQgZGV0ZWN0aW9uIHVzdWFsbHkgc2V0cyBzb21lIGhhcyBmZWF0dXJlIHZhbHVlcyBpbiB0aGUgaGFzQ2FjaGUuXG5cdGZvcih2YXIgcCBpbiB1c2VyQ29uZmlnLmhhcyl7XG5cdFx0aGFzLmFkZChwLCB1c2VyQ29uZmlnLmhhc1twXSwgMCwgMSk7XG5cdH1cblxuXHQvL1xuXHQvLyBkZWZpbmUgdGhlIGxvYWRlciBkYXRhXG5cdC8vXG5cblx0Ly8gdGhlIGxvYWRlciB3aWxsIHVzZSB0aGVzZSBsaWtlIHN5bWJvbHMgaWYgdGhlIGxvYWRlciBoYXMgdGhlIHRyYWNlQXBpOyBvdGhlcndpc2Vcblx0Ly8gZGVmaW5lIG1hZ2ljIG51bWJlcnMgc28gdGhhdCBtb2R1bGVzIGNhbiBiZSBwcm92aWRlZCBhcyBwYXJ0IG9mIGRlZmF1bHRDb25maWdcblx0dmFyIHJlcXVlc3RlZCA9IDEsXG5cdFx0YXJyaXZlZCA9IDIsXG5cdFx0bm9ubW9kdWxlID0gMyxcblx0XHRleGVjdXRpbmcgPSA0LFxuXHRcdGV4ZWN1dGVkID0gNTtcblxuXHRpZiggMCApe1xuXHRcdC8vIHRoZXNlIG1ha2UgZGVidWdnaW5nIG5pY2U7IGJ1dCB1c2luZyBzdHJpbmdzIGZvciBzeW1ib2xzIGlzIGEgZ3Jvc3Mgcm9va2llIGVycm9yOyBkb24ndCBkbyBpdCBmb3IgcHJvZHVjdGlvbiBjb2RlXG5cdFx0cmVxdWVzdGVkID0gXCJyZXF1ZXN0ZWRcIjtcblx0XHRhcnJpdmVkID0gXCJhcnJpdmVkXCI7XG5cdFx0bm9ubW9kdWxlID0gXCJub3QtYS1tb2R1bGVcIjtcblx0XHRleGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuXHRcdGV4ZWN1dGVkID0gXCJleGVjdXRlZFwiO1xuXHR9XG5cblx0dmFyIGxlZ2FjeU1vZGUgPSAwLFxuXHRcdHN5bmMgPSBcInN5bmNcIixcblx0XHR4ZCA9IFwieGRcIixcblx0XHRzeW5jRXhlY1N0YWNrID0gW10sXG5cdFx0ZG9qb1JlcXVpcmVQbHVnaW4gPSAwLFxuXHRcdGNoZWNrRG9qb1JlcXVpcmVQbHVnaW4gPSBub29wLFxuXHRcdHRyYW5zZm9ybVRvQW1kID0gbm9vcCxcblx0XHRnZXRYaHI7XG5cdGlmKCAwICl7XG5cdFx0cmVxLmlzWGRVcmwgPSBub29wO1xuXG5cdFx0cmVxLmluaXRTeW5jTG9hZGVyID0gZnVuY3Rpb24oZG9qb1JlcXVpcmVQbHVnaW5fLCBjaGVja0Rvam9SZXF1aXJlUGx1Z2luXywgdHJhbnNmb3JtVG9BbWRfKXtcblx0XHRcdC8vIHRoZSBmaXJzdCBkb2pvL19iYXNlL2xvYWRlciBsb2FkZWQgZ2V0cyB0byBkZWZpbmUgdGhlc2UgdmFyaWFibGVzOyB0aGV5IGFyZSBkZXNpZ25lZCB0byB3b3JrXG5cdFx0XHQvLyBpbiB0aGUgcHJlc2VuY2Ugb2YgemVybyB0byBtYW55IG1hcHBlZCBkb2pvL19iYXNlL2xvYWRlcnNcblx0XHRcdGlmKCFkb2pvUmVxdWlyZVBsdWdpbil7XG5cdFx0XHRcdGRvam9SZXF1aXJlUGx1Z2luID0gZG9qb1JlcXVpcmVQbHVnaW5fO1xuXHRcdFx0XHRjaGVja0Rvam9SZXF1aXJlUGx1Z2luID0gY2hlY2tEb2pvUmVxdWlyZVBsdWdpbl87XG5cdFx0XHRcdHRyYW5zZm9ybVRvQW1kID0gdHJhbnNmb3JtVG9BbWRfO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRzeW5jOnN5bmMsXG5cdFx0XHRcdHJlcXVlc3RlZDpyZXF1ZXN0ZWQsXG5cdFx0XHRcdGFycml2ZWQ6YXJyaXZlZCxcblx0XHRcdFx0bm9ubW9kdWxlOm5vbm1vZHVsZSxcblx0XHRcdFx0ZXhlY3V0aW5nOmV4ZWN1dGluZyxcblx0XHRcdFx0ZXhlY3V0ZWQ6ZXhlY3V0ZWQsXG5cdFx0XHRcdHN5bmNFeGVjU3RhY2s6c3luY0V4ZWNTdGFjayxcblx0XHRcdFx0bW9kdWxlczptb2R1bGVzLFxuXHRcdFx0XHRleGVjUTpleGVjUSxcblx0XHRcdFx0Z2V0TW9kdWxlOmdldE1vZHVsZSxcblx0XHRcdFx0aW5qZWN0TW9kdWxlOmluamVjdE1vZHVsZSxcblx0XHRcdFx0c2V0QXJyaXZlZDpzZXRBcnJpdmVkLFxuXHRcdFx0XHRzaWduYWw6c2lnbmFsLFxuXHRcdFx0XHRmaW5pc2hFeGVjOmZpbmlzaEV4ZWMsXG5cdFx0XHRcdGV4ZWNNb2R1bGU6ZXhlY01vZHVsZSxcblx0XHRcdFx0ZG9qb1JlcXVpcmVQbHVnaW46ZG9qb1JlcXVpcmVQbHVnaW4sXG5cdFx0XHRcdGdldExlZ2FjeU1vZGU6ZnVuY3Rpb24oKXtyZXR1cm4gbGVnYWN5TW9kZTt9LFxuXHRcdFx0XHRndWFyZENoZWNrQ29tcGxldGU6Z3VhcmRDaGVja0NvbXBsZXRlXG5cdFx0XHR9O1xuXHRcdH07XG5cblx0XHRpZiggMCAgfHwgIDAgKXtcblx0XHRcdC8vIGluIGxlZ2FjeSBzeW5jIG1vZGUsIHRoZSBsb2FkZXIgbmVlZHMgYSBtaW5pbWFsIFhIUiBsaWJyYXJ5XG5cblx0XHRcdHZhciBsb2NhdGlvblByb3RvY29sID0gbG9jYXRpb24ucHJvdG9jb2wsXG5cdFx0XHRcdGxvY2F0aW9uSG9zdCA9IGxvY2F0aW9uLmhvc3Q7XG5cdFx0XHRyZXEuaXNYZFVybCA9IGZ1bmN0aW9uKHVybCl7XG5cdFx0XHRcdGlmKC9eXFwuLy50ZXN0KHVybCkpe1xuXHRcdFx0XHRcdC8vIGJlZ2lucyB3aXRoIGEgZG90IGlzIGFsd2F5cyByZWxhdGl2ZSB0byBwYWdlIFVSTDsgdGhlcmVmb3JlIG5vdCB4ZG9tYWluXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKC9eXFwvXFwvLy50ZXN0KHVybCkpe1xuXHRcdFx0XHRcdC8vIGZvciB2MS42LSBiYWNrY29tcGF0LCB1cmwgc3RhcnRpbmcgd2l0aCAvLyBpbmRpY2F0ZXMgeGRvbWFpblxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGdldCBwcm90b2NvbCBhbmQgaG9zdFxuXHRcdFx0XHQvLyBcXC8rIHRha2VzIGNhcmUgb2YgdGhlIHR5cGljYWwgZmlsZSBwcm90b2NvbCB0aGF0IGxvb2tzIGxpa2UgZmlsZTovLy9kcml2ZS9wYXRoL3RvL2ZpbGVcblx0XHRcdFx0Ly8gbG9jYXRpb25Ib3N0IGlzIGZhbHN5IGlmIGZpbGUgcHJvdG9jb2wgPT4gaWYgbG9jYXRpb25Qcm90b2NvbCBtYXRjaGVzIGFuZCBpcyBcImZpbGU6XCIsIHx8IHdpbGwgcmV0dXJuIGZhbHNlXG5cdFx0XHRcdHZhciBtYXRjaCA9IHVybC5tYXRjaCgvXihbXlxcL1xcOl0rXFw6KVxcLysoW15cXC9dKykvKTtcblx0XHRcdFx0cmV0dXJuIG1hdGNoICYmIChtYXRjaFsxXSAhPSBsb2NhdGlvblByb3RvY29sIHx8IChsb2NhdGlvbkhvc3QgJiYgbWF0Y2hbMl0gIT0gbG9jYXRpb25Ib3N0KSk7XG5cdFx0XHR9O1xuXG5cblx0XHRcdC8vIG5vdGU6IHRvIGdldCB0aGUgZmlsZTovLyBwcm90b2NvbCB0byB3b3JrIGluIEZGLCB5b3UgbXVzdCBzZXQgc2VjdXJpdHkuZmlsZXVyaS5zdHJpY3Rfb3JpZ2luX3BvbGljeSB0byBmYWxzZSBpbiBhYm91dDpjb25maWdcblx0XHRcdCAxIHx8IGhhcy5hZGQoXCJkb2pvLXhoci1mYWN0b3J5XCIsIDEpO1xuXHRcdFx0IDAgJiYgaGFzLmFkZChcImRvam8tZm9yY2UtYWN0aXZleC14aHJcIiwgIDEgICYmICFkb2MuYWRkRXZlbnRMaXN0ZW5lciAmJiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT0gXCJmaWxlOlwiKTtcblx0XHRcdGhhcy5hZGQoXCJuYXRpdmUteGhyXCIsIHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPSBcInVuZGVmaW5lZFwiKTtcblx0XHRcdGlmKGhhcyhcIm5hdGl2ZS14aHJcIikgJiYgISAwICl7XG5cdFx0XHRcdGdldFhociA9IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHRcdFx0XHR9O1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdC8vIGlmIGluIHRoZSBicm93c2VyIGFuIG9sZCBJRTsgZmluZCBhbiB4aHJcblx0XHRcdFx0Zm9yKHZhciBYTUxIVFRQX1BST0dJRFMgPSBbJ01zeG1sMi5YTUxIVFRQJywgJ01pY3Jvc29mdC5YTUxIVFRQJywgJ01zeG1sMi5YTUxIVFRQLjQuMCddLCBwcm9naWQsIGkgPSAwOyBpIDwgMzspe1xuXHRcdFx0XHRcdHRyeXtcblx0XHRcdFx0XHRcdHByb2dpZCA9IFhNTEhUVFBfUFJPR0lEU1tpKytdO1xuXHRcdFx0XHRcdFx0aWYobmV3IEFjdGl2ZVhPYmplY3QocHJvZ2lkKSl7XG5cdFx0XHRcdFx0XHRcdC8vIHRoaXMgcHJvZ2lkIHdvcmtzOyB0aGVyZWZvcmUsIHVzZSBpdCBmcm9tIG5vdyBvblxuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9Y2F0Y2goZSl7XG5cdFx0XHRcdFx0XHQvLyBzcXVlbGNoOyB3ZSdyZSBqdXN0IHRyeWluZyB0byBmaW5kIGEgZ29vZCBBY3RpdmVYIHByb2dpZFxuXHRcdFx0XHRcdFx0Ly8gaWYgdGhleSBhbGwgZmFpbCwgdGhlbiBwcm9naWQgZW5kcyB1cCBhcyB0aGUgbGFzdCBhdHRlbXB0IGFuZCB0aGF0IHdpbGwgc2lnbmFsIHRoZSBlcnJvclxuXHRcdFx0XHRcdFx0Ly8gdGhlIGZpcnN0IHRpbWUgdGhlIGNsaWVudCBhY3R1YWxseSB0cmllcyB0byBleGVjIGFuIHhoclxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRnZXRYaHIgPSBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdHJldHVybiBuZXcgQWN0aXZlWE9iamVjdChwcm9naWQpO1xuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0cmVxLmdldFhociA9IGdldFhocjtcblxuXHRcdFx0aGFzLmFkZChcImRvam8tZ2V0dGV4dC1hcGlcIiwgMSk7XG5cdFx0XHRyZXEuZ2V0VGV4dCA9IGZ1bmN0aW9uKHVybCwgYXN5bmMsIG9uTG9hZCl7XG5cdFx0XHRcdHZhciB4aHIgPSBnZXRYaHIoKTtcblx0XHRcdFx0eGhyLm9wZW4oJ0dFVCcsIGZpeHVwVXJsKHVybCksIGZhbHNlKTtcblx0XHRcdFx0eGhyLnNlbmQobnVsbCk7XG5cdFx0XHRcdGlmKHhoci5zdGF0dXMgPT0gMjAwIHx8ICghbG9jYXRpb24uaG9zdCAmJiAheGhyLnN0YXR1cykpe1xuXHRcdFx0XHRcdGlmKG9uTG9hZCl7XG5cdFx0XHRcdFx0XHRvbkxvYWQoeGhyLnJlc3BvbnNlVGV4dCwgYXN5bmMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0dGhyb3cgbWFrZUVycm9yKFwieGhyRmFpbGVkXCIsIHhoci5zdGF0dXMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB4aHIucmVzcG9uc2VUZXh0O1xuXHRcdFx0fTtcblx0XHR9XG5cdH1lbHNle1xuXHRcdHJlcS5hc3luYyA9IDE7XG5cdH1cblxuXHQvL1xuXHQvLyBsb2FkZXIgZXZhbFxuXHQvL1xuXHR2YXIgZXZhbF8gPSAgIDEgID9cblx0XHQvLyBub29wIGV2YWwgaWYgdGhlcmUgYXJlIGNzcCByZXN0cmljdGlvbnNcblx0XHRmdW5jdGlvbigpe30gOlxuXHRcdC8vIHVzZSB0aGUgZnVuY3Rpb24gY29uc3RydWN0b3Igc28gb3VyIGV2YWwgaXMgc2NvcGVkIGNsb3NlIHRvIChidXQgbm90IGluKSBpbiB0aGUgZ2xvYmFsIHNwYWNlIHdpdGggbWluaW1hbCBwb2xsdXRpb25cblx0XHRuZXcgRnVuY3Rpb24oJ3JldHVybiBldmFsKGFyZ3VtZW50c1swXSk7Jyk7XG5cblx0cmVxLmV2YWwgPVxuXHRcdGZ1bmN0aW9uKHRleHQsIGhpbnQpe1xuXHRcdFx0cmV0dXJuIGV2YWxfKHRleHQgKyBcIlxcclxcbi8vIyBzb3VyY2VVUkw9XCIgKyBoaW50KTtcblx0XHR9O1xuXG5cdC8vXG5cdC8vIGxvYWRlciBtaWNybyBldmVudHMgQVBJXG5cdC8vXG5cdHZhciBsaXN0ZW5lclF1ZXVlcyA9IHt9LFxuXHRcdGVycm9yID0gXCJlcnJvclwiLFxuXHRcdHNpZ25hbCA9IHJlcS5zaWduYWwgPSBmdW5jdGlvbih0eXBlLCBhcmdzKXtcblx0XHRcdHZhciBxdWV1ZSA9IGxpc3RlbmVyUXVldWVzW3R5cGVdO1xuXHRcdFx0Ly8gbm90aWNlIHdlIHJ1biBhIGNvcHkgb2YgdGhlIHF1ZXVlOyB0aGlzIGFsbG93cyBsaXN0ZW5lcnMgdG8gYWRkL3JlbW92ZVxuXHRcdFx0Ly8gb3RoZXIgbGlzdGVuZXJzIHdpdGhvdXQgYWZmZWN0aW5nIHRoaXMgcGFydGljdWxhciBzaWduYWxcblx0XHRcdGZvckVhY2gocXVldWUgJiYgcXVldWUuc2xpY2UoMCksIGZ1bmN0aW9uKGxpc3RlbmVyKXtcblx0XHRcdFx0bGlzdGVuZXIuYXBwbHkobnVsbCwgaXNBcnJheShhcmdzKSA/IGFyZ3MgOiBbYXJnc10pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHRvbiA9IHJlcS5vbiA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKXtcblx0XHRcdC8vIG5vdGljZSBhIHF1ZXVlIGlzIG5vdCBjcmVhdGVkIHVudGlsIGEgY2xpZW50IGFjdHVhbGx5IGNvbm5lY3RzXG5cdFx0XHR2YXIgcXVldWUgPSBsaXN0ZW5lclF1ZXVlc1t0eXBlXSB8fCAobGlzdGVuZXJRdWV1ZXNbdHlwZV0gPSBbXSk7XG5cdFx0XHRxdWV1ZS5wdXNoKGxpc3RlbmVyKTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHJlbW92ZTpmdW5jdGlvbigpe1xuXHRcdFx0XHRcdGZvcih2YXIgaSA9IDA7IGk8cXVldWUubGVuZ3RoOyBpKyspe1xuXHRcdFx0XHRcdFx0aWYocXVldWVbaV09PT1saXN0ZW5lcil7XG5cdFx0XHRcdFx0XHRcdHF1ZXVlLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9O1xuXG5cdC8vIGNvbmZpZ3VyYXRpb24gbWFjaGluZXJ5OyB3aXRoIGFuIG9wdGltaXplZC9idWlsdCBkZWZhdWx0Q29uZmlnLCBhbGwgY29uZmlndXJhdGlvbiBtYWNoaW5lcnkgY2FuIGJlIGRpc2NhcmRlZFxuXHQvLyBsZXhpY2FsIHZhcmlhYmxlcyBob2xkIGtleSBsb2FkZXIgZGF0YSBzdHJ1Y3R1cmVzIHRvIGhlbHAgd2l0aCBtaW5pZmljYXRpb247IHRoZXNlIG1heSBiZSBjb21wbGV0ZWx5LFxuXHQvLyBvbmUtdGltZSBpbml0aWFsaXplZCBieSBkZWZhdWx0Q29uZmlnIGZvciBvcHRpbWl6ZWQvYnVpbHQgdmVyc2lvbnNcblx0dmFyXG5cdFx0YWxpYXNlc1xuXHRcdFx0Ly8gYSB2ZWN0b3Igb2YgcGFpcnMgb2YgW3JlZ2V4cyBvciBzdHJpbmcsIHJlcGxhY2VtZW50XSA9PiAoYWxpYXMsIGFjdHVhbClcblx0XHRcdD0gW10sXG5cblx0XHRwYXRoc1xuXHRcdFx0Ly8gQ29tbW9uSlMgcGF0aHNcblx0XHRcdD0ge30sXG5cblx0XHRwYXRoc01hcFByb2dcblx0XHRcdC8vIGxpc3Qgb2YgKGZyb20tcGF0aCwgdG8tcGF0aCwgcmVnZXgsIGxlbmd0aCkgZGVyaXZlZCBmcm9tIHBhdGhzO1xuXHRcdFx0Ly8gYSBcInByb2dyYW1cIiB0byBhcHBseSBwYXRoczsgc2VlIGNvbXB1dGVNYXBQcm9nXG5cdFx0XHQ9IFtdLFxuXG5cdFx0cGFja3Ncblx0XHRcdC8vIGEgbWFwIGZyb20gcGFja2FnZUlkIHRvIHBhY2thZ2UgY29uZmlndXJhdGlvbiBvYmplY3Q7IHNlZSBmaXh1cFBhY2thZ2VJbmZvXG5cdFx0XHQ9IHt9LFxuXG5cdFx0bWFwID0gcmVxLm1hcFxuXHRcdFx0Ly8gQU1EIG1hcCBjb25maWcgdmFyaWFibGU7IGRvam8vX2Jhc2Uva2VybmVsIG5lZWRzIHJlcS5tYXAgdG8gZmlndXJlIG91dCB0aGUgc2NvcGUgbWFwXG5cdFx0XHQ9IHt9LFxuXG5cdFx0bWFwUHJvZ3Ncblx0XHRcdC8vIHZlY3RvciBvZiBxdWFkcyBhcyBkZXNjcmliZWQgYnkgY29tcHV0ZU1hcFByb2c7IG1hcC1rZXkgaXMgQU1EIG1hcCBrZXksIG1hcC12YWx1ZSBpcyBBTUQgbWFwIHZhbHVlXG5cdFx0XHQ9IFtdLFxuXG5cdFx0bW9kdWxlc1xuXHRcdFx0Ly8gQSBoYXNoOihtaWQpIC0tPiAobW9kdWxlLW9iamVjdCkgdGhlIG1vZHVsZSBuYW1lc3BhY2Vcblx0XHRcdC8vXG5cdFx0XHQvLyBwaWQ6IHRoZSBwYWNrYWdlIGlkZW50aWZpZXIgdG8gd2hpY2ggdGhlIG1vZHVsZSBiZWxvbmdzIChlLmcuLCBcImRvam9cIik7IFwiXCIgaW5kaWNhdGVzIHRoZSBzeXN0ZW0gb3IgZGVmYXVsdCBwYWNrYWdlXG5cdFx0XHQvLyBtaWQ6IHRoZSBmdWxseS1yZXNvbHZlZCAoaS5lLiwgbWFwcGluZ3MgaGF2ZSBiZWVuIGFwcGxpZWQpIG1vZHVsZSBpZGVudGlmaWVyIHdpdGhvdXQgdGhlIHBhY2thZ2UgaWRlbnRpZmllciAoZS5nLiwgXCJkb2pvL2lvL3NjcmlwdFwiKVxuXHRcdFx0Ly8gdXJsOiB0aGUgVVJMIGZyb20gd2hpY2ggdGhlIG1vZHVsZSB3YXMgcmV0cmlldmVkXG5cdFx0XHQvLyBwYWNrOiB0aGUgcGFja2FnZSBvYmplY3Qgb2YgdGhlIHBhY2thZ2UgdG8gd2hpY2ggdGhlIG1vZHVsZSBiZWxvbmdzXG5cdFx0XHQvLyBleGVjdXRlZDogMCA9PiBub3QgZXhlY3V0ZWQ7IGV4ZWN1dGluZyA9PiBpbiB0aGUgcHJvY2VzcyBvZiB0cmF2ZXJzaW5nIGRlcHMgYW5kIHJ1bm5pbmcgZmFjdG9yeTsgZXhlY3V0ZWQgPT4gZmFjdG9yeSBoYXMgYmVlbiBleGVjdXRlZFxuXHRcdFx0Ly8gZGVwczogdGhlIGRlcGVuZGVuY3kgdmVjdG9yIGZvciB0aGlzIG1vZHVsZSAodmVjdG9yIG9mIG1vZHVsZXMgb2JqZWN0cylcblx0XHRcdC8vIGRlZjogdGhlIGZhY3RvcnkgZm9yIHRoaXMgbW9kdWxlXG5cdFx0XHQvLyByZXN1bHQ6IHRoZSByZXN1bHQgb2YgdGhlIHJ1bm5pbmcgdGhlIGZhY3RvcnkgZm9yIHRoaXMgbW9kdWxlXG5cdFx0XHQvLyBpbmplY3RlZDogKDAgfCByZXF1ZXN0ZWQgfCBhcnJpdmVkKSB0aGUgc3RhdHVzIG9mIHRoZSBtb2R1bGU7IG5vbm1vZHVsZSBtZWFucyB0aGUgcmVzb3VyY2UgZGlkIG5vdCBjYWxsIGRlZmluZVxuXHRcdFx0Ly8gbG9hZDogcGx1Z2luIGxvYWQgZnVuY3Rpb247IGFwcGxpY2FibGUgb25seSBmb3IgcGx1Z2luc1xuXHRcdFx0Ly9cblx0XHRcdC8vIE1vZHVsZXMgZ28gdGhyb3VnaCBzZXZlcmFsIHBoYXNlcyBpbiBjcmVhdGlvbjpcblx0XHRcdC8vXG5cdFx0XHQvLyAxLiBSZXF1ZXN0ZWQ6IHNvbWUgb3RoZXIgbW9kdWxlJ3MgZGVmaW5pdGlvbiBvciBhIHJlcXVpcmUgYXBwbGljYXRpb24gY29udGFpbmVkIHRoZSByZXF1ZXN0ZWQgbW9kdWxlIGluXG5cdFx0XHQvL1x0ICBpdHMgZGVwZW5kZW5jeSB2ZWN0b3Igb3IgZXhlY3V0aW5nIGNvZGUgZXhwbGljaXRseSBkZW1hbmRzIGEgbW9kdWxlIHZpYSByZXEucmVxdWlyZS5cblx0XHRcdC8vXG5cdFx0XHQvLyAyLiBJbmplY3RlZDogYSBzY3JpcHQgZWxlbWVudCBoYXMgYmVlbiBhcHBlbmRlZCB0byB0aGUgaW5zZXJ0LXBvaW50IGVsZW1lbnQgZGVtYW5kaW5nIHRoZSByZXNvdXJjZSBpbXBsaWVkIGJ5IHRoZSBVUkxcblx0XHRcdC8vXG5cdFx0XHQvLyAzLiBMb2FkZWQ6IHRoZSByZXNvdXJjZSBpbmplY3RlZCBpbiBbMl0gaGFzIGJlZW4gZXZhbHVhdGVkLlxuXHRcdFx0Ly9cblx0XHRcdC8vIDQuIERlZmluZWQ6IHRoZSByZXNvdXJjZSBjb250YWluZWQgYSBkZWZpbmUgc3RhdGVtZW50IHRoYXQgYWR2aXNlZCB0aGUgbG9hZGVyIGFib3V0IHRoZSBtb2R1bGUuIE5vdGljZSB0aGF0IHNvbWVcblx0XHRcdC8vXHQgIHJlc291cmNlcyBtYXkganVzdCBjb250YWluIGEgYnVuZGxlIG9mIGNvZGUgYW5kIG5ldmVyIGZvcm1hbGx5IGRlZmluZSBhIG1vZHVsZSB2aWEgZGVmaW5lXG5cdFx0XHQvL1xuXHRcdFx0Ly8gNS4gRXZhbHVhdGVkOiB0aGUgbW9kdWxlIHdhcyBkZWZpbmVkIHZpYSBkZWZpbmUgYW5kIHRoZSBsb2FkZXIgaGFzIGV2YWx1YXRlZCB0aGUgZmFjdG9yeSBhbmQgY29tcHV0ZWQgYSByZXN1bHQuXG5cdFx0XHQ9IHt9LFxuXG5cdFx0Y2FjaGVCdXN0XG5cdFx0XHQvLyBxdWVyeSBzdHJpbmcgdG8gYXBwZW5kIHRvIG1vZHVsZSBVUkxzIHRvIGJ1c3QgYnJvd3NlciBjYWNoZVxuXHRcdFx0PSBcIlwiLFxuXG5cdFx0Y2FjaGVcblx0XHRcdC8vIGhhc2g6KG1pZCB8IHVybCktLT4oZnVuY3Rpb24gfCBzdHJpbmcpXG5cdFx0XHQvL1xuXHRcdFx0Ly8gQSBjYWNoZSBvZiByZXNvdXJjZXMuIFRoZSByZXNvdXJjZXMgYXJyaXZlIHZpYSBhIGNvbmZpZy5jYWNoZSBvYmplY3QsIHdoaWNoIGlzIGEgaGFzaCBmcm9tIGVpdGhlciBtaWQgLS0+IGZ1bmN0aW9uIG9yXG5cdFx0XHQvLyB1cmwgLS0+IHN0cmluZy4gVGhlIHVybCBrZXkgaXMgZGlzdGluZ3Vpc2hlZCBmcm9tIHRoZSBtaWQga2V5IGJ5IGFsd2F5cyBjb250YWluaW5nIHRoZSBwcmVmaXggXCJ1cmw6XCIuIHVybCBrZXlzIGFzIHByb3ZpZGVkXG5cdFx0XHQvLyBieSBjb25maWcuY2FjaGUgYWx3YXlzIGhhdmUgYSBzdHJpbmcgdmFsdWUgdGhhdCByZXByZXNlbnRzIHRoZSBjb250ZW50cyBvZiB0aGUgcmVzb3VyY2UgYXQgdGhlIGdpdmVuIHVybC4gbWlkIGtleXMgYXMgcHJvdmlkZWRcblx0XHRcdC8vIGJ5IGNvbmZpZ2wuY2FjaGUgYWx3YXlzIGhhdmUgYSBmdW5jdGlvbiB2YWx1ZSB0aGF0IGNhdXNlcyB0aGUgc2FtZSBjb2RlIHRvIGV4ZWN1dGUgYXMgaWYgdGhlIG1vZHVsZSB3YXMgc2NyaXB0IGluamVjdGVkLlxuXHRcdFx0Ly9cblx0XHRcdC8vIEJvdGgga2luZHMgb2Yga2V5LXZhbHVlIHBhaXJzIGFyZSBlbnRlcmVkIGludG8gY2FjaGUgdmlhIHRoZSBmdW5jdGlvbiBjb25zdW1lUGVuZGluZ0NhY2hlLCB3aGljaCBtYXkgcmVsb2NhdGUga2V5cyBhcyBnaXZlblxuXHRcdFx0Ly8gYnkgYW55IG1hcHBpbmdzICppZmYqIHRoZSBjb25maWcuY2FjaGUgd2FzIHJlY2VpdmVkIGFzIHBhcnQgb2YgYSBtb2R1bGUgcmVzb3VyY2UgcmVxdWVzdC5cblx0XHRcdC8vXG5cdFx0XHQvLyBGdXJ0aGVyLCBmb3IgbWlkIGtleXMsIHRoZSBpbXBsaWVkIHVybCBpcyBjb21wdXRlZCBhbmQgdGhlIHZhbHVlIGlzIGVudGVyZWQgaW50byB0aGF0IGtleSBhcyB3ZWxsLiBUaGlzIGFsbG93cyBtYXBwZWQgbW9kdWxlc1xuXHRcdFx0Ly8gdG8gcmV0cmlldmUgY2FjaGVkIGl0ZW1zIHRoYXQgbWF5IGhhdmUgYXJyaXZlZCBjb25zZXF1ZW50IHRvIGFub3RoZXIgbmFtZXNwYWNlLlxuXHRcdFx0Ly9cblx0XHRcdCA9IHt9LFxuXG5cdFx0dXJsS2V5UHJlZml4XG5cdFx0XHQvLyB0aGUgcHJlZml4IHRvIHByZXBlbmQgdG8gYSBVUkwga2V5IGluIHRoZSBjYWNoZS5cblx0XHRcdD0gXCJ1cmw6XCIsXG5cblx0XHRwZW5kaW5nQ2FjaGVJbnNlcnRcblx0XHRcdC8vIGhhc2g6KG1pZCktLT4oZnVuY3Rpb24pXG5cdFx0XHQvL1xuXHRcdFx0Ly8gR2l2ZXMgYSBzZXQgb2YgY2FjaGUgbW9kdWxlcyBwZW5kaW5nIGVudHJ5IGludG8gY2FjaGUuIFdoZW4gY2FjaGVkIG1vZHVsZXMgYXJlIHB1Ymxpc2hlZCB0byB0aGUgbG9hZGVyLCB0aGV5IGFyZVxuXHRcdFx0Ly8gZW50ZXJlZCBpbnRvIHBlbmRpbmdDYWNoZUluc2VydDsgbW9kdWxlcyBhcmUgdGhlbiBwcmVzc2VkIGludG8gY2FjaGUgdXBvbiAoMSkgQU1EIGRlZmluZSBvciAoMikgdXBvbiByZWNlaXZpbmcgYW5vdGhlclxuXHRcdFx0Ly8gaW5kZXBlbmRlbnQgc2V0IG9mIGNhY2hlZCBtb2R1bGVzLiAoMSkgaXMgdGhlIHVzdWFsIGNhc2UsIGFuZCB0aGlzIGNhc2UgYWxsb3dzIG5vcm1hbGl6aW5nIG1pZHMgZ2l2ZW4gaW4gdGhlIHBlbmRpbmdcblx0XHRcdC8vIGNhY2hlIGZvciB0aGUgbG9jYWwgY29uZmlndXJhdGlvbiwgcG9zc2libHkgcmVsb2NhdGluZyBtb2R1bGVzLlxuXHRcdFx0ID0ge30sXG5cblx0XHRkb2pvU25pZmZDb25maWdcblx0XHRcdC8vIG1hcCBvZiBjb25maWd1cmF0aW9uIHZhcmlhYmxlc1xuXHRcdFx0Ly8gZ2l2ZSB0aGUgZGF0YS1kb2pvLWNvbmZpZyBhcyBzbmlmZmVkIGZyb20gdGhlIGRvY3VtZW50IChpZiBhbnkpXG5cdFx0XHQ9IHt9LFxuXG5cdFx0aW5zZXJ0UG9pbnRTaWJsaW5nXG5cdFx0XHQvLyB0aGUgbm9kZXMgdXNlZCB0byBsb2NhdGUgd2hlcmUgc2NyaXB0cyBhcmUgaW5qZWN0ZWQgaW50byB0aGUgZG9jdW1lbnRcblx0XHRcdD0gMDtcblxuXHRpZiggMCApe1xuXHRcdGlmICghIDEgKSB7XG5cdFx0XHR2YXIgY29uc3VtZVBlbmRpbmdDYWNoZUluc2VydCA9IGZ1bmN0aW9uKHJlZmVyZW5jZU1vZHVsZSwgY2xlYXIpe1xuXHRcdFx0XHRcdGNsZWFyID0gY2xlYXIgIT09IGZhbHNlO1xuXHRcdFx0XHRcdHZhciBwLCBpdGVtLCBtYXRjaCwgbm93LCBtO1xuXHRcdFx0XHRcdGZvcihwIGluIHBlbmRpbmdDYWNoZUluc2VydCl7XG5cdFx0XHRcdFx0XHRpdGVtID0gcGVuZGluZ0NhY2hlSW5zZXJ0W3BdO1xuXHRcdFx0XHRcdFx0bWF0Y2ggPSBwLm1hdGNoKC9edXJsXFw6KC4rKS8pO1xuXHRcdFx0XHRcdFx0aWYobWF0Y2gpe1xuXHRcdFx0XHRcdFx0XHRjYWNoZVt1cmxLZXlQcmVmaXggKyB0b1VybChtYXRjaFsxXSwgcmVmZXJlbmNlTW9kdWxlKV0gPSAgaXRlbTtcblx0XHRcdFx0XHRcdH1lbHNlIGlmKHA9PVwiKm5vd1wiKXtcblx0XHRcdFx0XHRcdFx0bm93ID0gaXRlbTtcblx0XHRcdFx0XHRcdH1lbHNlIGlmKHAhPVwiKm5vcmVmXCIpe1xuXHRcdFx0XHRcdFx0XHRtID0gZ2V0TW9kdWxlSW5mbyhwLCByZWZlcmVuY2VNb2R1bGUsIHRydWUpO1xuXHRcdFx0XHRcdFx0XHRjYWNoZVttLm1pZF0gPSBjYWNoZVt1cmxLZXlQcmVmaXggKyBtLnVybF0gPSBpdGVtO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihub3cpe1xuXHRcdFx0XHRcdFx0bm93KGNyZWF0ZVJlcXVpcmUocmVmZXJlbmNlTW9kdWxlKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKGNsZWFyKXtcblx0XHRcdFx0XHRcdHBlbmRpbmdDYWNoZUluc2VydCA9IHt9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHR9XG5cdFx0dmFyIGVzY2FwZVN0cmluZyA9IGZ1bmN0aW9uKHMpe1xuXHRcdFx0XHRyZXR1cm4gcy5yZXBsYWNlKC8oW1xcLiQ/Knx7fVxcKFxcKVxcW1xcXVxcXFxcXC9cXCteXSkvZywgZnVuY3Rpb24oYyl7IHJldHVybiBcIlxcXFxcIiArIGM7IH0pO1xuXHRcdFx0fSxcblxuXHRcdFx0Y29tcHV0ZU1hcFByb2cgPSBmdW5jdGlvbihtYXAsIGRlc3Qpe1xuXHRcdFx0XHQvLyBUaGlzIHJvdXRpbmUgdGFrZXMgYSBtYXAgYXMgcmVwcmVzZW50ZWQgYnkgYSBKYXZhU2NyaXB0IG9iamVjdCBhbmQgaW5pdGlhbGl6ZXMgZGVzdCwgYSB2ZWN0b3Igb2Zcblx0XHRcdFx0Ly8gcXVhZHMgb2YgKG1hcC1rZXksIG1hcC12YWx1ZSwgcmVmZXgtZm9yLW1hcC1rZXksIGxlbmd0aC1vZi1tYXAta2V5KSwgc29ydGVkIGRlY3JlYXNpbmcgYnkgbGVuZ3RoLVxuXHRcdFx0XHQvLyBvZi1tYXAta2V5LiBUaGUgcmVnZXggbG9va3MgZm9yIHRoZSBtYXAta2V5IGZvbGxvd2VkIGJ5IGVpdGhlciBcIi9cIiBvciBlbmQtb2Ytc3RyaW5nIGF0IHRoZSBiZWdpbm5pbmdcblx0XHRcdFx0Ly8gb2YgYSB0aGUgc2VhcmNoIHNvdXJjZS4gTm90aWNlIHRoZSBtYXAtdmFsdWUgaXMgaXJyZWxldmFudCB0byB0aGUgYWxnb3JpdGhtXG5cdFx0XHRcdGRlc3Quc3BsaWNlKDAsIGRlc3QubGVuZ3RoKTtcblx0XHRcdFx0Zm9yKHZhciBwIGluIG1hcCl7XG5cdFx0XHRcdFx0ZGVzdC5wdXNoKFtcblx0XHRcdFx0XHRcdHAsXG5cdFx0XHRcdFx0XHRtYXBbcF0sXG5cdFx0XHRcdFx0XHRuZXcgUmVnRXhwKFwiXlwiICsgZXNjYXBlU3RyaW5nKHApICsgXCIoXFwvfCQpXCIpLFxuXHRcdFx0XHRcdFx0cC5sZW5ndGhdKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkZXN0LnNvcnQoZnVuY3Rpb24obGhzLCByaHMpeyByZXR1cm4gcmhzWzNdIC0gbGhzWzNdOyB9KTtcblx0XHRcdFx0cmV0dXJuIGRlc3Q7XG5cdFx0XHR9LFxuXG5cdFx0XHRjb21wdXRlQWxpYXNlcyA9IGZ1bmN0aW9uKGNvbmZpZywgZGVzdCl7XG5cdFx0XHRcdGZvckVhY2goY29uZmlnLCBmdW5jdGlvbihwYWlyKXtcblx0XHRcdFx0XHQvLyB0YWtlIGEgZml4ZWQtdXAgY29weS4uLlxuXHRcdFx0XHRcdGRlc3QucHVzaChbaXNTdHJpbmcocGFpclswXSkgPyBuZXcgUmVnRXhwKFwiXlwiICsgZXNjYXBlU3RyaW5nKHBhaXJbMF0pICsgXCIkXCIpIDogcGFpclswXSwgcGFpclsxXV0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cblxuXHRcdFx0Zml4dXBQYWNrYWdlSW5mbyA9IGZ1bmN0aW9uKHBhY2thZ2VJbmZvKXtcblx0XHRcdFx0Ly8gY2FsY3VsYXRlIHRoZSBwcmVjaXNlIChuYW1lLCBsb2NhdGlvbiwgbWFpbiwgbWFwcGluZ3MpIGZvciBhIHBhY2thZ2Vcblx0XHRcdFx0dmFyIG5hbWUgPSBwYWNrYWdlSW5mby5uYW1lO1xuXHRcdFx0XHRpZighbmFtZSl7XG5cdFx0XHRcdFx0Ly8gcGFja2FnZUluZm8gbXVzdCBiZSBhIHN0cmluZyB0aGF0IGdpdmVzIHRoZSBuYW1lXG5cdFx0XHRcdFx0bmFtZSA9IHBhY2thZ2VJbmZvO1xuXHRcdFx0XHRcdHBhY2thZ2VJbmZvID0ge25hbWU6bmFtZX07XG5cdFx0XHRcdH1cblx0XHRcdFx0cGFja2FnZUluZm8gPSBtaXgoe21haW46XCJtYWluXCJ9LCBwYWNrYWdlSW5mbyk7XG5cdFx0XHRcdHBhY2thZ2VJbmZvLmxvY2F0aW9uID0gcGFja2FnZUluZm8ubG9jYXRpb24gPyBwYWNrYWdlSW5mby5sb2NhdGlvbiA6IG5hbWU7XG5cblx0XHRcdFx0Ly8gcGFja2FnZU1hcCBpcyBkZXByZWNhdGVkIGluIGZhdm9yIG9mIEFNRCBtYXBcblx0XHRcdFx0aWYocGFja2FnZUluZm8ucGFja2FnZU1hcCl7XG5cdFx0XHRcdFx0bWFwW25hbWVdID0gcGFja2FnZUluZm8ucGFja2FnZU1hcDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKCFwYWNrYWdlSW5mby5tYWluLmluZGV4T2YoXCIuL1wiKSl7XG5cdFx0XHRcdFx0cGFja2FnZUluZm8ubWFpbiA9IHBhY2thZ2VJbmZvLm1haW4uc3Vic3RyaW5nKDIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gbm93IHRoYXQgd2UndmUgZ290IGEgZnVsbHktcmVzb2x2ZWQgcGFja2FnZSBvYmplY3QsIHB1c2ggaXQgaW50byB0aGUgY29uZmlndXJhdGlvblxuXHRcdFx0XHRwYWNrc1tuYW1lXSA9IHBhY2thZ2VJbmZvO1xuXHRcdFx0fSxcblxuXHRcdFx0ZGVsYXllZE1vZHVsZUNvbmZpZ1xuXHRcdFx0XHQvLyBtb2R1bGUgY29uZmlnIGNhbm5vdCBiZSBjb25zdW1lZCB1bnRpbCB0aGUgbG9hZGVyIGlzIGNvbXBsZXRlbHkgaW5pdGlhbGl6ZWQ7IHRoZXJlZm9yZSwgYWxsXG5cdFx0XHRcdC8vIG1vZHVsZSBjb25maWcgZGV0ZWN0ZWQgZHVyaW5nIGJvb3RpbmcgaXMgbWVtb3JpemVkIGFuZCBhcHBsaWVkIGF0IHRoZSBlbmQgb2YgbG9hZGVyIGluaXRpYWxpemF0aW9uXG5cdFx0XHRcdC8vIFRPRE86IHRoaXMgaXMgYSBiaXQgb2YgYSBrbHVkZ2U7IGFsbCBjb25maWcgc2hvdWxkIGJlIG1vdmVkIHRvIGVuZCBvZiBsb2FkZXIgaW5pdGlhbGl6YXRpb24sIGJ1dFxuXHRcdFx0XHQvLyB3ZSdsbCBkZWxheSB0aGlzIGNob3JlIGFuZCBkbyBpdCB3aXRoIGEgZmluYWwgbG9hZGVyIDEueCBjbGVhbnVwIGFmdGVyIHRoZSAyLnggbG9hZGVyIHByb3RvdHlwaW5nIGlzIGNvbXBsZXRlXG5cdFx0XHRcdD0gW10sXG5cblxuXHRcdFx0Y29uZmlnID0gZnVuY3Rpb24oY29uZmlnLCBib290aW5nLCByZWZlcmVuY2VNb2R1bGUpe1xuXHRcdFx0XHRmb3IodmFyIHAgaW4gY29uZmlnKXtcblx0XHRcdFx0XHRpZihwPT1cIndhaXRTZWNvbmRzXCIpe1xuXHRcdFx0XHRcdFx0cmVxLndhaXRtcyA9IChjb25maWdbcF0gfHwgMCkgKiAxMDAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihwPT1cImNhY2hlQnVzdFwiKXtcblx0XHRcdFx0XHRcdGNhY2hlQnVzdCA9IGNvbmZpZ1twXSA/IChpc1N0cmluZyhjb25maWdbcF0pID8gY29uZmlnW3BdIDogKG5ldyBEYXRlKCkpLmdldFRpbWUoKSArIFwiXCIpIDogXCJcIjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYocD09XCJiYXNlVXJsXCIgfHwgcD09XCJjb21ib1wiKXtcblx0XHRcdFx0XHRcdHJlcVtwXSA9IGNvbmZpZ1twXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYoIDAgICYmIHA9PVwiYXN5bmNcIil7XG5cdFx0XHRcdFx0XHQvLyBmYWxzeSBvciBcInN5bmNcIiA9PiBsZWdhY3kgc3luYyBsb2FkZXJcblx0XHRcdFx0XHRcdC8vIFwieGRcIiA9PiBzeW5jIGJ1dCBsb2FkaW5nIHhkb21haW4gdHJlZSBhbmQgdGhlcmVmb3JlIGxvYWRpbmcgYXN5bmNocm9ub3VzbHkgKG5vdCBjb25maWd1cmFibGUsIHNldCBhdXRvbWF0aWNhbGx5IGJ5IHRoZSBsb2FkZXIpXG5cdFx0XHRcdFx0XHQvLyBcImxlZ2FjeUFzeW5jXCIgPT4gcGVybWFuZW50bHkgaW4gXCJ4ZFwiIGJ5IGNob2ljZVxuXHRcdFx0XHRcdFx0Ly8gXCJkZWJ1Z0F0QWxsQ29zdHNcIiA9PiB0cnlpbmcgdG8gbG9hZCBldmVyeXRoaW5nIHZpYSBzY3JpcHQgaW5qZWN0aW9uIChub3QgaW1wbGVtZW50ZWQpXG5cdFx0XHRcdFx0XHQvLyBvdGhlcndpc2UsIG11c3QgYmUgdHJ1dGh5ID0+IEFNRFxuXHRcdFx0XHRcdFx0Ly8gbGVnYWN5TW9kZTogc3luYyB8IGxlZ2FjeUFzeW5jIHwgeGQgfCBmYWxzZVxuXHRcdFx0XHRcdFx0dmFyIG1vZGUgPSBjb25maWdbcF07XG5cdFx0XHRcdFx0XHRyZXEubGVnYWN5TW9kZSA9IGxlZ2FjeU1vZGUgPSAoaXNTdHJpbmcobW9kZSkgJiYgL3N5bmN8bGVnYWN5QXN5bmMvLnRlc3QobW9kZSkgPyBtb2RlIDogKCFtb2RlID8gc3luYyA6IGZhbHNlKSk7XG5cdFx0XHRcdFx0XHRyZXEuYXN5bmMgPSAhbGVnYWN5TW9kZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYoY29uZmlnW3BdIT09aGFzQ2FjaGUpe1xuXHRcdFx0XHRcdFx0Ly8gYWNjdW11bGF0ZSByYXcgY29uZmlnIGluZm8gZm9yIGNsaWVudCBhcHBzIHdoaWNoIGNhbiB1c2UgdGhpcyB0byBwYXNzIHRoZWlyIG93biBjb25maWdcblx0XHRcdFx0XHRcdHJlcS5yYXdDb25maWdbcF0gPSBjb25maWdbcF07XG5cdFx0XHRcdFx0XHRwIT1cImhhc1wiICYmIGhhcy5hZGQoXCJjb25maWctXCIrcCwgY29uZmlnW3BdLCAwLCBib290aW5nKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBtYWtlIHN1cmUgYmFzZVVybCBleGlzdHNcblx0XHRcdFx0aWYoIXJlcS5iYXNlVXJsKXtcblx0XHRcdFx0XHRyZXEuYmFzZVVybCA9IFwiLi9cIjtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBtYWtlIHN1cmUgYmFzZVVybCBlbmRzIHdpdGggYSBzbGFzaFxuXHRcdFx0XHRpZighL1xcLyQvLnRlc3QocmVxLmJhc2VVcmwpKXtcblx0XHRcdFx0XHRyZXEuYmFzZVVybCArPSBcIi9cIjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIG5vdyBkbyB0aGUgc3BlY2lhbCB3b3JrIGZvciBoYXMsIHBhY2thZ2VzLCBwYWNrYWdlUGF0aHMsIHBhdGhzLCBhbGlhc2VzLCBhbmQgY2FjaGVcblxuXHRcdFx0XHRmb3IocCBpbiBjb25maWcuaGFzKXtcblx0XHRcdFx0XHRoYXMuYWRkKHAsIGNvbmZpZy5oYXNbcF0sIDAsIGJvb3RpbmcpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gZm9yIGVhY2ggcGFja2FnZSBmb3VuZCBpbiBhbnkgcGFja2FnZXMgY29uZmlnIGl0ZW0sIGF1Z21lbnQgdGhlIHBhY2tzIG1hcCBvd25lZCBieSB0aGUgbG9hZGVyXG5cdFx0XHRcdGZvckVhY2goY29uZmlnLnBhY2thZ2VzLCBmaXh1cFBhY2thZ2VJbmZvKTtcblxuXHRcdFx0XHQvLyBmb3IgZWFjaCBwYWNrYWdlUGF0aCBmb3VuZCBpbiBhbnkgcGFja2FnZVBhdGhzIGNvbmZpZyBpdGVtLCBhdWdtZW50IHRoZSBwYWNrYWdlQ29uZmlnXG5cdFx0XHRcdC8vIHBhY2thZ2VQYXRocyBpcyBkZXByZWNhdGVkOyByZW1vdmUgaW4gMi4wXG5cdFx0XHRcdGZvcih2YXIgYmFzZVVybCBpbiBjb25maWcucGFja2FnZVBhdGhzKXtcblx0XHRcdFx0XHRmb3JFYWNoKGNvbmZpZy5wYWNrYWdlUGF0aHNbYmFzZVVybF0sIGZ1bmN0aW9uKHBhY2thZ2VJbmZvKXtcblx0XHRcdFx0XHRcdHZhciBsb2NhdGlvbiA9IGJhc2VVcmwgKyBcIi9cIiArIHBhY2thZ2VJbmZvO1xuXHRcdFx0XHRcdFx0aWYoaXNTdHJpbmcocGFja2FnZUluZm8pKXtcblx0XHRcdFx0XHRcdFx0cGFja2FnZUluZm8gPSB7bmFtZTpwYWNrYWdlSW5mb307XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRwYWNrYWdlSW5mby5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXHRcdFx0XHRcdFx0Zml4dXBQYWNrYWdlSW5mbyhwYWNrYWdlSW5mbyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBub3RpY2UgdGhhdCBjb21wdXRlTWFwUHJvZyB0cmVhdHMgdGhlIGRlc3QgYXMgYSByZWZlcmVuY2U7IHRoZXJlZm9yZSwgaWYvd2hlbiB0aGF0IHZhcmlhYmxlXG5cdFx0XHRcdC8vIGlzIHB1Ymxpc2hlZCAoc2VlIGRvam8tcHVibGlzaC1wcml2YXRlcyksIHRoZSBwdWJsaXNoZWQgdmFyaWFibGUgd2lsbCBhbHdheXMgaG9sZCBhIHZhbGlkIHZhbHVlLlxuXG5cdFx0XHRcdC8vIHRoaXMgbXVzdCBjb21lIGFmdGVyIGFsbCBwYWNrYWdlIHByb2Nlc3Npbmcgc2luY2UgcGFja2FnZSBwcm9jZXNzaW5nIG1heSBtdXRhdGUgbWFwXG5cdFx0XHRcdGNvbXB1dGVNYXBQcm9nKG1peChtYXAsIGNvbmZpZy5tYXApLCBtYXBQcm9ncyk7XG5cdFx0XHRcdGZvckVhY2gobWFwUHJvZ3MsIGZ1bmN0aW9uKGl0ZW0pe1xuXHRcdFx0XHRcdGl0ZW1bMV0gPSBjb21wdXRlTWFwUHJvZyhpdGVtWzFdLCBbXSk7XG5cdFx0XHRcdFx0aWYoaXRlbVswXT09XCIqXCIpe1xuXHRcdFx0XHRcdFx0bWFwUHJvZ3Muc3RhciA9IGl0ZW07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvLyBwdXNoIGluIGFueSBwYXRocyBhbmQgcmVjb21wdXRlIHRoZSBpbnRlcm5hbCBwYXRobWFwXG5cdFx0XHRcdGNvbXB1dGVNYXBQcm9nKG1peChwYXRocywgY29uZmlnLnBhdGhzKSwgcGF0aHNNYXBQcm9nKTtcblxuXHRcdFx0XHQvLyBhbGlhc2VzXG5cdFx0XHRcdGNvbXB1dGVBbGlhc2VzKGNvbmZpZy5hbGlhc2VzLCBhbGlhc2VzKTtcblxuXHRcdFx0XHRpZiAoISAxICkge1xuXHRcdFx0XHRcdGlmKGJvb3Rpbmcpe1xuXHRcdFx0XHRcdFx0ZGVsYXllZE1vZHVsZUNvbmZpZy5wdXNoKHtjb25maWc6Y29uZmlnLmNvbmZpZ30pO1xuXHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0Zm9yKHAgaW4gY29uZmlnLmNvbmZpZyl7XG5cdFx0XHRcdFx0XHRcdHZhciBtb2R1bGUgPSBnZXRNb2R1bGUocCwgcmVmZXJlbmNlTW9kdWxlKTtcblx0XHRcdFx0XHRcdFx0bW9kdWxlLmNvbmZpZyA9IG1peChtb2R1bGUuY29uZmlnIHx8IHt9LCBjb25maWcuY29uZmlnW3BdKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBwdXNoIGluIGFueSBuZXcgY2FjaGUgdmFsdWVzXG5cdFx0XHRcdFx0aWYoY29uZmlnLmNhY2hlKXtcblx0XHRcdFx0XHRcdGNvbnN1bWVQZW5kaW5nQ2FjaGVJbnNlcnQoKTtcblx0XHRcdFx0XHRcdHBlbmRpbmdDYWNoZUluc2VydCA9IGNvbmZpZy5jYWNoZTtcblx0XHRcdFx0XHRcdC8vaW5qZWN0IG5vdyBhbGwgZGVwZW5jaWVzIHNvIGNhY2hlIGlzIGF2YWlsYWJsZSBmb3IgbWFwcGVkIG1vZHVsZVxuXHRcdFx0XHRcdFx0Y29uc3VtZVBlbmRpbmdDYWNoZUluc2VydCgwLCAhIWNvbmZpZy5jYWNoZVtcIipub3JlZlwiXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHNpZ25hbChcImNvbmZpZ1wiLCBbY29uZmlnLCByZXEucmF3Q29uZmlnXSk7XG5cdFx0XHR9O1xuXG5cdFx0Ly9cblx0XHQvLyBleGVjdXRlIHRoZSB2YXJpb3VzIHNuaWZmczsgdXNlckNvbmZpZyBjYW4gb3ZlcnJpZGUgYW5kIHZhbHVlXG5cdFx0Ly9cblxuXHRcdGlmKCAwICB8fCAgMCApe1xuXHRcdFx0Ly8gdGhlIHNuaWZmIHJlZ2V4IGxvb2tzIGZvciBhIHNyYyBhdHRyaWJ1dGUgZW5kaW5nIGluIGRvam8uanMsIG9wdGlvbmFsbHkgcHJlY2VkZWQgd2l0aCBhIHBhdGguXG5cdFx0XHQvLyBtYXRjaFszXSByZXR1cm5zIHRoZSBwYXRoIHRvIGRvam8uanMgKGlmIGFueSkgd2l0aG91dCB0aGUgdHJhaWxpbmcgc2xhc2guIFRoaXMgaXMgdXNlZCBmb3IgdGhlXG5cdFx0XHQvLyBkb2pvIGxvY2F0aW9uIG9uIENETiBkZXBsb3ltZW50cyBhbmQgYmFzZVVybCB3aGVuIGVpdGhlci9ib3RoIG9mIHRoZXNlIGFyZSBub3QgcHJvdmlkZWRcblx0XHRcdC8vIGV4cGxpY2l0bHkgaW4gdGhlIGNvbmZpZyBkYXRhOyB0aGlzIGlzIHRoZSAxLjYtIGJlaGF2aW9yLlxuXG5cdFx0XHR2YXIgc2NyaXB0cyA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKSxcblx0XHRcdFx0aSA9IDAsXG5cdFx0XHRcdHNjcmlwdCwgZG9qb0Rpciwgc3JjLCBtYXRjaDtcblx0XHRcdHdoaWxlKGkgPCBzY3JpcHRzLmxlbmd0aCl7XG5cdFx0XHRcdHNjcmlwdCA9IHNjcmlwdHNbaSsrXTtcblx0XHRcdFx0aWYoKHNyYyA9IHNjcmlwdC5nZXRBdHRyaWJ1dGUoXCJzcmNcIikpICYmIChtYXRjaCA9IHNyYy5tYXRjaCgvKCgoLiopXFwvKXxeKWRvam9cXC5qcyhcXFd8JCkvaSkpKXtcblx0XHRcdFx0XHQvLyBzbmlmZiBkb2pvRGlyIGFuZCBiYXNlVXJsXG5cdFx0XHRcdFx0ZG9qb0RpciA9IG1hdGNoWzNdIHx8IFwiXCI7XG5cdFx0XHRcdFx0ZGVmYXVsdENvbmZpZy5iYXNlVXJsID0gZGVmYXVsdENvbmZpZy5iYXNlVXJsIHx8IGRvam9EaXI7XG5cblx0XHRcdFx0XHQvLyByZW1lbWJlciBhbiBpbnNlcnRQb2ludFNpYmxpbmdcblx0XHRcdFx0XHRpbnNlcnRQb2ludFNpYmxpbmcgPSBzY3JpcHQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBzbmlmZiBjb25maWd1cmF0aW9uIG9uIGF0dHJpYnV0ZSBpbiBzY3JpcHQgZWxlbWVudFxuXHRcdFx0XHRpZigoc3JjID0gKHNjcmlwdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRvam8tY29uZmlnXCIpIHx8IHNjcmlwdC5nZXRBdHRyaWJ1dGUoXCJkakNvbmZpZ1wiKSkpKXtcblx0XHRcdFx0XHRkb2pvU25pZmZDb25maWcgPSByZXEuZXZhbChcIih7IFwiICsgc3JjICsgXCIgfSlcIiwgXCJkYXRhLWRvam8tY29uZmlnXCIpO1xuXG5cdFx0XHRcdFx0Ly8gcmVtZW1iZXIgYW4gaW5zZXJ0UG9pbnRTaWJsaW5nXG5cdFx0XHRcdFx0aW5zZXJ0UG9pbnRTaWJsaW5nID0gc2NyaXB0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gc25pZmYgcmVxdWlyZWpzIGF0dHJpYnV0ZVxuXHRcdFx0XHRpZiggMCApe1xuXHRcdFx0XHRcdGlmKChzcmMgPSBzY3JpcHQuZ2V0QXR0cmlidXRlKFwiZGF0YS1tYWluXCIpKSl7XG5cdFx0XHRcdFx0XHRkb2pvU25pZmZDb25maWcuZGVwcyA9IGRvam9TbmlmZkNvbmZpZy5kZXBzIHx8IFtzcmNdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKCAwICl7XG5cdFx0XHQvLyBwYXNzIGRvd24gZG9oLnRlc3RDb25maWcgZnJvbSBwYXJlbnQgYXMgaWYgaXQgd2VyZSBhIGRhdGEtZG9qby1jb25maWdcblx0XHRcdHRyeXtcblx0XHRcdFx0aWYod2luZG93LnBhcmVudCAhPSB3aW5kb3cgJiYgd2luZG93LnBhcmVudC5yZXF1aXJlKXtcblx0XHRcdFx0XHR2YXIgZG9oID0gd2luZG93LnBhcmVudC5yZXF1aXJlKFwiZG9oXCIpO1xuXHRcdFx0XHRcdGRvaCAmJiBtaXgoZG9qb1NuaWZmQ29uZmlnLCBkb2gudGVzdENvbmZpZyk7XG5cdFx0XHRcdH1cblx0XHRcdH1jYXRjaChlKXt9XG5cdFx0fVxuXG5cdFx0Ly8gY29uZmlndXJlIHRoZSBsb2FkZXI7IGxldCB0aGUgdXNlciBvdmVycmlkZSBkZWZhdWx0c1xuXHRcdHJlcS5yYXdDb25maWcgPSB7fTtcblx0XHRjb25maWcoZGVmYXVsdENvbmZpZywgMSk7XG5cblx0XHQvLyBkbyB0aGlzIGJlZm9yZSBzZXR0aW5nIHVzZXJDb25maWcvc25pZmZDb25maWcgdG8gYWxsb3cgdXNlckNvbmZpZy9zbmlmZiBvdmVycmlkZXNcblx0XHRpZiggMCApe1xuXHRcdFx0cGFja3MuZG9qby5sb2NhdGlvbiA9IGRvam9EaXI7XG5cdFx0XHRpZihkb2pvRGlyKXtcblx0XHRcdFx0ZG9qb0RpciArPSBcIi9cIjtcblx0XHRcdH1cblx0XHRcdHBhY2tzLmRpaml0LmxvY2F0aW9uID0gZG9qb0RpciArIFwiLi4vZGlqaXQvXCI7XG5cdFx0XHRwYWNrcy5kb2pveC5sb2NhdGlvbiA9IGRvam9EaXIgKyBcIi4uL2Rvam94L1wiO1xuXHRcdH1cblxuXHRcdGNvbmZpZyh1c2VyQ29uZmlnLCAxKTtcblx0XHRjb25maWcoZG9qb1NuaWZmQ29uZmlnLCAxKTtcblxuXHR9ZWxzZXtcblx0XHQvLyBubyBjb25maWcgQVBJLCBhc3N1bWUgZGVmYXVsdENvbmZpZyBoYXMgZXZlcnl0aGluZyB0aGUgbG9hZGVyIG5lZWRzLi4uZm9yIHRoZSBlbnRpcmUgbGlmZXRpbWUgb2YgdGhlIGFwcGxpY2F0aW9uXG5cdFx0cGF0aHMgPSBkZWZhdWx0Q29uZmlnLnBhdGhzO1xuXHRcdHBhdGhzTWFwUHJvZyA9IGRlZmF1bHRDb25maWcucGF0aHNNYXBQcm9nO1xuXHRcdHBhY2tzID0gZGVmYXVsdENvbmZpZy5wYWNrcztcblx0XHRhbGlhc2VzID0gZGVmYXVsdENvbmZpZy5hbGlhc2VzO1xuXHRcdG1hcFByb2dzID0gZGVmYXVsdENvbmZpZy5tYXBQcm9ncztcblx0XHRtb2R1bGVzID0gZGVmYXVsdENvbmZpZy5tb2R1bGVzO1xuXHRcdGNhY2hlID0gZGVmYXVsdENvbmZpZy5jYWNoZTtcblx0XHRjYWNoZUJ1c3QgPSBkZWZhdWx0Q29uZmlnLmNhY2hlQnVzdDtcblxuXHRcdC8vIHJlbWVtYmVyIHRoZSBkZWZhdWx0IGNvbmZpZyBmb3Igb3RoZXIgcHJvY2Vzc2VzIChlLmcuLCBkb2pvL2NvbmZpZylcblx0XHRyZXEucmF3Q29uZmlnID0gZGVmYXVsdENvbmZpZztcblx0fVxuXG5cblx0aWYgKCEgMSApIHtcblx0XHRpZiggMCApe1xuXHRcdFx0cmVxLmNvbWJvID0gcmVxLmNvbWJvIHx8IHthZGQ6bm9vcH07XG5cdFx0XHR2YXIgY29tYm9QZW5kaW5nID0gMCxcblx0XHRcdFx0Y29tYm9zUGVuZGluZyA9IFtdLFxuXHRcdFx0XHRjb21ib1BlbmRpbmdUaW1lciA9IG51bGw7XG5cdFx0fVxuXHRcdFxuXG5cdFx0Ly8gYnVpbGQgdGhlIGxvYWRlciBtYWNoaW5lcnkgaWF3IGNvbmZpZ3VyYXRpb24sIGluY2x1ZGluZyBoYXMgZmVhdHVyZSB0ZXN0c1xuXHRcdHZhciBpbmplY3REZXBlbmRlbmNpZXMgPSBmdW5jdGlvbihtb2R1bGUpe1xuXHRcdFx0XHQvLyBjaGVja0NvbXBsZXRlIT0wIGhvbGRzIHRoZSBpZGxlIHNpZ25hbDsgd2UncmUgbm90IGlkbGUgaWYgd2UncmUgaW5qZWN0aW5nIGRlcGVuZGVuY2llc1xuXHRcdFx0XHRndWFyZENoZWNrQ29tcGxldGUoZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRmb3JFYWNoKG1vZHVsZS5kZXBzLCBpbmplY3RNb2R1bGUpO1xuXHRcdFx0XHRcdGlmKCAwICAmJiBjb21ib1BlbmRpbmcgJiYgIWNvbWJvUGVuZGluZ1RpbWVyKXtcblx0XHRcdFx0XHRcdGNvbWJvUGVuZGluZ1RpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0Y29tYm9QZW5kaW5nID0gMDtcblx0XHRcdFx0XHRcdFx0Y29tYm9QZW5kaW5nVGltZXIgPSBudWxsO1xuXHRcdFx0XHRcdFx0XHRyZXEuY29tYm8uZG9uZShmdW5jdGlvbihtaWRzLCB1cmwpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgb25Mb2FkQ2FsbGJhY2s9IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBkZWZRIGlzIGEgdmVjdG9yIG9mIG1vZHVsZSBkZWZpbml0aW9ucyAxLXRvLTEsIG9udG8gbWlkc1xuXHRcdFx0XHRcdFx0XHRcdFx0cnVuRGVmUSgwLCBtaWRzKTtcblx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrQ29tcGxldGUoKTtcblx0XHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRcdGNvbWJvc1BlbmRpbmcucHVzaChtaWRzKTtcblx0XHRcdFx0XHRcdFx0XHRpbmplY3RpbmdNb2R1bGUgPSBtaWRzO1xuXHRcdFx0XHRcdFx0XHRcdHJlcS5pbmplY3RVcmwodXJsLCBvbkxvYWRDYWxsYmFjaywgbWlkcyk7XG5cdFx0XHRcdFx0XHRcdFx0aW5qZWN0aW5nTW9kdWxlID0gMDtcblx0XHRcdFx0XHRcdFx0fSwgcmVxKTtcblx0XHRcdFx0XHRcdH0sIDApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXG5cdFx0XHRjb250ZXh0UmVxdWlyZSA9IGZ1bmN0aW9uKGExLCBhMiwgYTMsIHJlZmVyZW5jZU1vZHVsZSwgY29udGV4dFJlcXVpcmUpe1xuXHRcdFx0XHR2YXIgbW9kdWxlLCBzeW50aGV0aWNNaWQ7XG5cdFx0XHRcdGlmKGlzU3RyaW5nKGExKSl7XG5cdFx0XHRcdFx0Ly8gc2lnbmF0dXJlIGlzIChtb2R1bGVJZClcblx0XHRcdFx0XHRtb2R1bGUgPSBnZXRNb2R1bGUoYTEsIHJlZmVyZW5jZU1vZHVsZSwgdHJ1ZSk7XG5cdFx0XHRcdFx0aWYobW9kdWxlICYmIG1vZHVsZS5leGVjdXRlZCl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbW9kdWxlLnJlc3VsdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhyb3cgbWFrZUVycm9yKFwidW5kZWZpbmVkTW9kdWxlXCIsIGExKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZighaXNBcnJheShhMSkpe1xuXHRcdFx0XHRcdC8vIGExIGlzIGEgY29uZmlndXJhdGlvblxuXHRcdFx0XHRcdGNvbmZpZyhhMSwgMCwgcmVmZXJlbmNlTW9kdWxlKTtcblxuXHRcdFx0XHRcdC8vIGp1Z2dsZSBhcmdzOyAoYTIsIGEzKSBtYXkgYmUgKGRlcGVuZGVuY2llcywgY2FsbGJhY2spXG5cdFx0XHRcdFx0YTEgPSBhMjtcblx0XHRcdFx0XHRhMiA9IGEzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKGlzQXJyYXkoYTEpKXtcblx0XHRcdFx0XHQvLyBzaWduYXR1cmUgaXMgKHJlcXVlc3RMaXN0IFssY2FsbGJhY2tdKVxuXHRcdFx0XHRcdGlmKCFhMS5sZW5ndGgpe1xuXHRcdFx0XHRcdFx0YTIgJiYgYTIoKTtcblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdHN5bnRoZXRpY01pZCA9IFwicmVxdWlyZSpcIiArIHVpZCgpO1xuXG5cdFx0XHRcdFx0XHQvLyByZXNvbHZlIHRoZSByZXF1ZXN0IGxpc3Qgd2l0aCByZXNwZWN0IHRvIHRoZSByZWZlcmVuY2UgbW9kdWxlXG5cdFx0XHRcdFx0XHRmb3IodmFyIG1pZCwgZGVwcyA9IFtdLCBpID0gMDsgaSA8IGExLmxlbmd0aDspe1xuXHRcdFx0XHRcdFx0XHRtaWQgPSBhMVtpKytdO1xuXHRcdFx0XHRcdFx0XHRkZXBzLnB1c2goZ2V0TW9kdWxlKG1pZCwgcmVmZXJlbmNlTW9kdWxlKSk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIGNvbnN0cnVjdCBhIHN5bnRoZXRpYyBtb2R1bGUgdG8gY29udHJvbCBleGVjdXRpb24gb2YgdGhlIHJlcXVlc3RMaXN0LCBhbmQsIG9wdGlvbmFsbHksIGNhbGxiYWNrXG5cdFx0XHRcdFx0XHRtb2R1bGUgPSBtaXgobWFrZU1vZHVsZUluZm8oXCJcIiwgc3ludGhldGljTWlkLCAwLCBcIlwiKSwge1xuXHRcdFx0XHRcdFx0XHRpbmplY3RlZDogYXJyaXZlZCxcblx0XHRcdFx0XHRcdFx0ZGVwczogZGVwcyxcblx0XHRcdFx0XHRcdFx0ZGVmOiBhMiB8fCBub29wLFxuXHRcdFx0XHRcdFx0XHRyZXF1aXJlOiByZWZlcmVuY2VNb2R1bGUgPyByZWZlcmVuY2VNb2R1bGUucmVxdWlyZSA6IHJlcSxcblx0XHRcdFx0XHRcdFx0Z2M6IDEgLy9nYXJiYWdlIGNvbGxlY3Rcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0bW9kdWxlc1ttb2R1bGUubWlkXSA9IG1vZHVsZTtcblxuXHRcdFx0XHRcdFx0Ly8gY2hlY2tDb21wbGV0ZSE9MCBob2xkcyB0aGUgaWRsZSBzaWduYWw7IHdlJ3JlIG5vdCBpZGxlIGlmIHdlJ3JlIGluamVjdGluZyBkZXBlbmRlbmNpZXNcblx0XHRcdFx0XHRcdGluamVjdERlcGVuZGVuY2llcyhtb2R1bGUpO1xuXG5cdFx0XHRcdFx0XHQvLyB0cnkgdG8gaW1tZWRpYXRlbHkgZXhlY3V0ZVxuXHRcdFx0XHRcdFx0Ly8gaWYgYWxyZWFkeSB0cmF2ZXJzaW5nIGEgZmFjdG9yeSB0cmVlLCB0aGVuIHN0cmljdCBjYXVzZXMgY2lyY3VsYXIgZGVwZW5kZW5jeSB0byBhYm9ydCB0aGUgZXhlY3V0aW9uOyBtYXliZVxuXHRcdFx0XHRcdFx0Ly8gaXQncyBwb3NzaWJsZSB0byBleGVjdXRlIHRoaXMgcmVxdWlyZSBsYXRlciBhZnRlciB0aGUgY3VycmVudCB0cmF2ZXJzYWwgY29tcGxldGVzIGFuZCBhdm9pZCB0aGUgY2lyY3VsYXIgZGVwZW5kZW5jeS5cblx0XHRcdFx0XHRcdC8vIC4uLmJ1dCAqYWx3YXlzKiBpbnNpc3Qgb24gaW1tZWRpYXRlIGluIHN5bmNoIG1vZGVcblx0XHRcdFx0XHRcdHZhciBzdHJpY3QgPSBjaGVja0NvbXBsZXRlR3VhcmQgJiYgbGVnYWN5TW9kZSE9c3luYztcblx0XHRcdFx0XHRcdGd1YXJkQ2hlY2tDb21wbGV0ZShmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0XHRleGVjTW9kdWxlKG1vZHVsZSwgc3RyaWN0KTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0aWYoIW1vZHVsZS5leGVjdXRlZCl7XG5cdFx0XHRcdFx0XHRcdC8vIHNvbWUgZGVwcyB3ZXJlbid0IG9uIGJvYXJkIG9yIGNpcmN1bGFyIGRlcGVuZGVuY3kgZGV0ZWN0ZWQgYW5kIHN0cmljdDsgdGhlcmVmb3JlLCBwdXNoIGludG8gdGhlIGV4ZWNRXG5cdFx0XHRcdFx0XHRcdGV4ZWNRLnB1c2gobW9kdWxlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNoZWNrQ29tcGxldGUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGNvbnRleHRSZXF1aXJlO1xuXHRcdFx0fSxcblxuXHRcdFx0Y3JlYXRlUmVxdWlyZSA9IGZ1bmN0aW9uKG1vZHVsZSl7XG5cdFx0XHRcdGlmKCFtb2R1bGUpe1xuXHRcdFx0XHRcdHJldHVybiByZXE7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIHJlc3VsdCA9IG1vZHVsZS5yZXF1aXJlO1xuXHRcdFx0XHRpZighcmVzdWx0KXtcblx0XHRcdFx0XHRyZXN1bHQgPSBmdW5jdGlvbihhMSwgYTIsIGEzKXtcblx0XHRcdFx0XHRcdHJldHVybiBjb250ZXh0UmVxdWlyZShhMSwgYTIsIGEzLCBtb2R1bGUsIHJlc3VsdCk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRtb2R1bGUucmVxdWlyZSA9IG1peChyZXN1bHQsIHJlcSk7XG5cdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZSA9IG1vZHVsZTtcblx0XHRcdFx0XHRyZXN1bHQudG9VcmwgPSBmdW5jdGlvbihuYW1lKXtcblx0XHRcdFx0XHRcdHJldHVybiB0b1VybChuYW1lLCBtb2R1bGUpO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0cmVzdWx0LnRvQWJzTWlkID0gZnVuY3Rpb24obWlkKXtcblx0XHRcdFx0XHRcdHJldHVybiB0b0Fic01pZChtaWQsIG1vZHVsZSk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRpZiggMCApe1xuXHRcdFx0XHRcdFx0cmVzdWx0LnVuZGVmID0gZnVuY3Rpb24obWlkKXtcblx0XHRcdFx0XHRcdFx0cmVxLnVuZGVmKG1pZCwgbW9kdWxlKTtcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKCAwICl7XG5cdFx0XHRcdFx0XHRyZXN1bHQuc3luY0xvYWRObHMgPSBmdW5jdGlvbihtaWQpe1xuXHRcdFx0XHRcdFx0XHR2YXIgbmxzTW9kdWxlSW5mbyA9IGdldE1vZHVsZUluZm8obWlkLCBtb2R1bGUpLFxuXHRcdFx0XHRcdFx0XHRcdG5sc01vZHVsZSA9IG1vZHVsZXNbbmxzTW9kdWxlSW5mby5taWRdO1xuXHRcdFx0XHRcdFx0XHRpZighbmxzTW9kdWxlIHx8ICFubHNNb2R1bGUuZXhlY3V0ZWQpe1xuXHRcdFx0XHRcdFx0XHRcdGNhY2hlZCA9IGNhY2hlW25sc01vZHVsZUluZm8ubWlkXSB8fCBjYWNoZVt1cmxLZXlQcmVmaXggKyBubHNNb2R1bGVJbmZvLnVybF07XG5cdFx0XHRcdFx0XHRcdFx0aWYoY2FjaGVkKXtcblx0XHRcdFx0XHRcdFx0XHRcdGV2YWxNb2R1bGVUZXh0KGNhY2hlZCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRubHNNb2R1bGUgPSBtb2R1bGVzW25sc01vZHVsZUluZm8ubWlkXTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0cmV0dXJuIG5sc01vZHVsZSAmJiBubHNNb2R1bGUuZXhlY3V0ZWQgJiYgbmxzTW9kdWxlLnJlc3VsdDtcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH0sXG5cblx0XHQgIGV4ZWNRID1cblx0XHRcdFx0Ly8gVGhlIGxpc3Qgb2YgbW9kdWxlcyB0aGF0IG5lZWQgdG8gYmUgZXZhbHVhdGVkLlxuXHRcdFx0XHRbXSxcblxuXHRcdFx0ZGVmUSA9XG5cdFx0XHRcdC8vIFRoZSBxdWV1ZSBvZiBkZWZpbmUgYXJndW1lbnRzIHNlbnQgdG8gbG9hZGVyLlxuXHRcdFx0XHRbXSxcblxuXHRcdFx0d2FpdGluZyA9XG5cdFx0XHRcdC8vIFRoZSBzZXQgb2YgbW9kdWxlcyB1cG9uIHdoaWNoIHRoZSBsb2FkZXIgaXMgd2FpdGluZyBmb3IgZGVmaW5pdGlvbiB0byBhcnJpdmVcblx0XHRcdFx0e30sXG5cblx0XHRcdHNldFJlcXVlc3RlZCA9IGZ1bmN0aW9uKG1vZHVsZSl7XG5cdFx0XHRcdG1vZHVsZS5pbmplY3RlZCA9IHJlcXVlc3RlZDtcblx0XHRcdFx0d2FpdGluZ1ttb2R1bGUubWlkXSA9IDE7XG5cdFx0XHRcdGlmKG1vZHVsZS51cmwpe1xuXHRcdFx0XHRcdHdhaXRpbmdbbW9kdWxlLnVybF0gPSBtb2R1bGUucGFjayB8fCAxO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN0YXJ0VGltZXIoKTtcblx0XHRcdH0sXG5cblx0XHRcdHNldEFycml2ZWQgPSBmdW5jdGlvbihtb2R1bGUpe1xuXHRcdFx0XHRtb2R1bGUuaW5qZWN0ZWQgPSBhcnJpdmVkO1xuXHRcdFx0XHRkZWxldGUgd2FpdGluZ1ttb2R1bGUubWlkXTtcblx0XHRcdFx0aWYobW9kdWxlLnVybCl7XG5cdFx0XHRcdFx0ZGVsZXRlIHdhaXRpbmdbbW9kdWxlLnVybF07XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYoaXNFbXB0eSh3YWl0aW5nKSl7XG5cdFx0XHRcdFx0Y2xlYXJUaW1lcigpO1xuXHRcdFx0XHRcdCAwICAmJiBsZWdhY3lNb2RlPT14ZCAmJiAobGVnYWN5TW9kZSA9IHN5bmMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRleGVjQ29tcGxldGUgPSByZXEuaWRsZSA9XG5cdFx0XHRcdC8vIHNheXMgdGhlIGxvYWRlciBoYXMgY29tcGxldGVkIChvciBub3QpIGl0cyB3b3JrXG5cdFx0XHRcdGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0cmV0dXJuICFkZWZRLmxlbmd0aCAmJiBpc0VtcHR5KHdhaXRpbmcpICYmICFleGVjUS5sZW5ndGggJiYgIWNoZWNrQ29tcGxldGVHdWFyZDtcblx0XHRcdFx0fTtcblx0fVxuXG5cdHZhciBydW5NYXBQcm9nID0gZnVuY3Rpb24odGFyZ2V0TWlkLCBtYXApe1xuXHRcdFx0Ly8gc2VhcmNoIGZvciB0YXJnZXRNaWQgaW4gbWFwOyByZXR1cm4gdGhlIG1hcCBpdGVtIGlmIGZvdW5kOyBmYWxzeSBvdGhlcndpc2Vcblx0XHRcdGlmKG1hcCl7XG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWFwLmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0aWYobWFwW2ldWzJdLnRlc3QodGFyZ2V0TWlkKSl7XG5cdFx0XHRcdFx0cmV0dXJuIG1hcFtpXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fSxcblxuXHRcdGNvbXBhY3RQYXRoID0gZnVuY3Rpb24ocGF0aCl7XG5cdFx0XHR2YXIgcmVzdWx0ID0gW10sXG5cdFx0XHRcdHNlZ21lbnQsIGxhc3RTZWdtZW50O1xuXHRcdFx0cGF0aCA9IHBhdGgucmVwbGFjZSgvXFxcXC9nLCAnLycpLnNwbGl0KCcvJyk7XG5cdFx0XHR3aGlsZShwYXRoLmxlbmd0aCl7XG5cdFx0XHRcdHNlZ21lbnQgPSBwYXRoLnNoaWZ0KCk7XG5cdFx0XHRcdGlmKHNlZ21lbnQ9PVwiLi5cIiAmJiByZXN1bHQubGVuZ3RoICYmIGxhc3RTZWdtZW50IT1cIi4uXCIpe1xuXHRcdFx0XHRcdHJlc3VsdC5wb3AoKTtcblx0XHRcdFx0XHRsYXN0U2VnbWVudCA9IHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV07XG5cdFx0XHRcdH1lbHNlIGlmKHNlZ21lbnQhPVwiLlwiKXtcblx0XHRcdFx0XHRyZXN1bHQucHVzaChsYXN0U2VnbWVudD0gc2VnbWVudCk7XG5cdFx0XHRcdH0gLy8gZWxzZSBpZ25vcmUgXCIuXCJcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXN1bHQuam9pbihcIi9cIik7XG5cdFx0fSxcblxuXHRcdG1ha2VNb2R1bGVJbmZvID0gZnVuY3Rpb24ocGlkLCBtaWQsIHBhY2ssIHVybCl7XG5cdFx0XHRpZiggMCApe1xuXHRcdFx0XHR2YXIgeGQ9IHJlcS5pc1hkVXJsKHVybCk7XG5cdFx0XHRcdHJldHVybiB7cGlkOnBpZCwgbWlkOm1pZCwgcGFjazpwYWNrLCB1cmw6dXJsLCBleGVjdXRlZDowLCBkZWY6MCwgaXNYZDp4ZCwgaXNBbWQ6ISEoeGQgfHwgKHBhY2tzW3BpZF0gJiYgcGFja3NbcGlkXS5pc0FtZCkpfTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRyZXR1cm4ge3BpZDpwaWQsIG1pZDptaWQsIHBhY2s6cGFjaywgdXJsOnVybCwgZXhlY3V0ZWQ6MCwgZGVmOjB9O1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRnZXRNb2R1bGVJbmZvXyA9IGZ1bmN0aW9uKG1pZCwgcmVmZXJlbmNlTW9kdWxlLCBwYWNrcywgbW9kdWxlcywgYmFzZVVybCwgbWFwUHJvZ3MsIHBhdGhzTWFwUHJvZywgYWxpYXNlcywgYWx3YXlzQ3JlYXRlLCBmcm9tUGVuZGluZ0NhY2hlKXtcblx0XHRcdC8vIGFyZ3VtZW50cyBhcmUgcGFzc2VkIGluc3RlYWQgb2YgdXNpbmcgbGV4aWNhbCB2YXJpYWJsZXMgc28gdGhhdCB0aGlzIGZ1bmN0aW9uIG15IGJlIHVzZWQgaW5kZXBlbmRlbnQgb2YgdGhlIGxvYWRlciAoZS5nLiwgdGhlIGJ1aWxkZXIpXG5cdFx0XHQvLyBhbHdheXNDcmVhdGUgaXMgdXNlZnVsIGluIHRoaXMgY2FzZSBzbyB0aGF0IGdldE1vZHVsZUluZm8gbmV2ZXIgcmV0dXJucyByZWZlcmVuY2VzIHRvIHJlYWwgbW9kdWxlcyBvd25lZCBieSB0aGUgbG9hZGVyXG5cdFx0XHR2YXIgcGlkLCBwYWNrLCBtaWRJblBhY2thZ2UsIG1hcEl0ZW0sIHVybCwgcmVzdWx0LCBpc1JlbGF0aXZlLCByZXF1ZXN0ZWRNaWQ7XG5cdFx0XHRyZXF1ZXN0ZWRNaWQgPSBtaWQ7XG5cdFx0XHRpc1JlbGF0aXZlID0gL15cXC4vLnRlc3QobWlkKTtcblx0XHRcdGlmKC8oXlxcLyl8KFxcOil8KFxcLmpzJCkvLnRlc3QobWlkKSB8fCAoaXNSZWxhdGl2ZSAmJiAhcmVmZXJlbmNlTW9kdWxlKSl7XG5cdFx0XHRcdC8vIGFic29sdXRlIHBhdGggb3IgcHJvdG9jb2wgb2YgLmpzIGZpbGV0eXBlLCBvciByZWxhdGl2ZSBwYXRoIGJ1dCBubyByZWZlcmVuY2UgbW9kdWxlIGFuZCB0aGVyZWZvcmUgcmVsYXRpdmUgdG8gcGFnZVxuXHRcdFx0XHQvLyB3aGF0ZXZlciBpdCBpcywgaXQncyBub3QgYSBtb2R1bGUgYnV0IGp1c3QgYSBVUkwgb2Ygc29tZSBzb3J0XG5cdFx0XHRcdC8vIG5vdGU6IHBpZD09PTAgaW5kaWNhdGVzIHRoZSByb3V0aW5lIGlzIHJldHVybmluZyBhbiB1bm1vZGlmaWVkIG1pZFxuXG5cdFx0XHRcdHJldHVybiBtYWtlTW9kdWxlSW5mbygwLCBtaWQsIDAsIG1pZCk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0Ly8gcmVsYXRpdmUgbW9kdWxlIGlkcyBhcmUgcmVsYXRpdmUgdG8gdGhlIHJlZmVyZW5jZU1vZHVsZTsgZ2V0IHJpZCBvZiBhbnkgZG90c1xuXHRcdFx0XHRtaWQgPSBjb21wYWN0UGF0aChpc1JlbGF0aXZlID8gKHJlZmVyZW5jZU1vZHVsZS5taWQgKyBcIi8uLi9cIiArIG1pZCkgOiBtaWQpO1xuXHRcdFx0XHRpZigvXlxcLi8udGVzdChtaWQpKXtcblx0XHRcdFx0XHR0aHJvdyBtYWtlRXJyb3IoXCJpcnJhdGlvbmFsUGF0aFwiLCBtaWQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGF0IHRoaXMgcG9pbnQsIG1pZCBpcyBhbiBhYnNvbHV0ZSBtaWRcblxuXHRcdFx0XHQvLyBtYXAgdGhlIG1pZFxuXHRcdFx0XHRpZighZnJvbVBlbmRpbmdDYWNoZSAmJiAhaXNSZWxhdGl2ZSAmJiBtYXBQcm9ncy5zdGFyKXtcblx0XHRcdFx0XHRtYXBJdGVtID0gcnVuTWFwUHJvZyhtaWQsIG1hcFByb2dzLnN0YXJbMV0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKCFtYXBJdGVtICYmIHJlZmVyZW5jZU1vZHVsZSl7XG5cdFx0XHRcdFx0bWFwSXRlbSA9IHJ1bk1hcFByb2cocmVmZXJlbmNlTW9kdWxlLm1pZCwgbWFwUHJvZ3MpO1xuXHRcdFx0XHRcdG1hcEl0ZW0gPSBtYXBJdGVtICYmIHJ1bk1hcFByb2cobWlkLCBtYXBJdGVtWzFdKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKG1hcEl0ZW0pe1xuXHRcdFx0XHRcdG1pZCA9IG1hcEl0ZW1bMV0gKyBtaWQuc3Vic3RyaW5nKG1hcEl0ZW1bM10pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRtYXRjaCA9IG1pZC5tYXRjaCgvXihbXlxcL10rKShcXC8oLispKT8kLyk7XG5cdFx0XHRcdHBpZCA9IG1hdGNoID8gbWF0Y2hbMV0gOiBcIlwiO1xuXHRcdFx0XHRpZigocGFjayA9IHBhY2tzW3BpZF0pKXtcblx0XHRcdFx0XHRtaWQgPSBwaWQgKyBcIi9cIiArIChtaWRJblBhY2thZ2UgPSAobWF0Y2hbM10gfHwgcGFjay5tYWluKSk7XG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdHBpZCA9IFwiXCI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBzZWFyY2ggYWxpYXNlc1xuXHRcdFx0XHR2YXIgY2FuZGlkYXRlTGVuZ3RoID0gMCxcblx0XHRcdFx0XHRjYW5kaWRhdGUgPSAwO1xuXHRcdFx0XHRmb3JFYWNoKGFsaWFzZXMsIGZ1bmN0aW9uKHBhaXIpe1xuXHRcdFx0XHRcdHZhciBtYXRjaCA9IG1pZC5tYXRjaChwYWlyWzBdKTtcblx0XHRcdFx0XHRpZihtYXRjaCAmJiBtYXRjaC5sZW5ndGg+Y2FuZGlkYXRlTGVuZ3RoKXtcblx0XHRcdFx0XHRcdGNhbmRpZGF0ZSA9IGlzRnVuY3Rpb24ocGFpclsxXSkgPyBtaWQucmVwbGFjZShwYWlyWzBdLCBwYWlyWzFdKSA6IHBhaXJbMV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYoY2FuZGlkYXRlKXtcblx0XHRcdFx0XHRyZXR1cm4gZ2V0TW9kdWxlSW5mb18oY2FuZGlkYXRlLCAwLCBwYWNrcywgbW9kdWxlcywgYmFzZVVybCwgbWFwUHJvZ3MsIHBhdGhzTWFwUHJvZywgYWxpYXNlcywgYWx3YXlzQ3JlYXRlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJlc3VsdCA9IG1vZHVsZXNbbWlkXTtcblx0XHRcdFx0aWYocmVzdWx0KXtcblx0XHRcdFx0XHRyZXR1cm4gYWx3YXlzQ3JlYXRlID8gbWFrZU1vZHVsZUluZm8ocmVzdWx0LnBpZCwgcmVzdWx0Lm1pZCwgcmVzdWx0LnBhY2ssIHJlc3VsdC51cmwpIDogbW9kdWxlc1ttaWRdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBnZXQgaGVyZSBpZmYgdGhlIHNvdWdodC1hZnRlciBtb2R1bGUgZG9lcyBub3QgeWV0IGV4aXN0OyB0aGVyZWZvcmUsIHdlIG5lZWQgdG8gY29tcHV0ZSB0aGUgVVJMIGdpdmVuIHRoZVxuXHRcdFx0Ly8gZnVsbHkgcmVzb2x2ZWQgKGkuZS4sIGFsbCByZWxhdGl2ZSBpbmRpY2F0b3JzIGFuZCBwYWNrYWdlIG1hcHBpbmcgcmVzb2x2ZWQpIG1vZHVsZSBpZFxuXG5cdFx0XHQvLyBub3RlOiBwaWQhPT0wIGluZGljYXRlcyB0aGUgcm91dGluZSBpcyByZXR1cm5pbmcgYSB1cmwgdGhhdCBoYXMgLmpzIGFwcGVuZGVkIHVubW9kaWZpZWQgbWlkXG5cdFx0XHRtYXBJdGVtID0gcnVuTWFwUHJvZyhtaWQsIHBhdGhzTWFwUHJvZyk7XG5cdFx0XHRpZihtYXBJdGVtKXtcblx0XHRcdFx0dXJsID0gbWFwSXRlbVsxXSArIG1pZC5zdWJzdHJpbmcobWFwSXRlbVszXSk7XG5cdFx0XHR9ZWxzZSBpZihwaWQpe1xuXHRcdFx0XHR1cmwgPSAocGFjay5sb2NhdGlvbi5zbGljZSgtMSkgPT09ICcvJyA/IHBhY2subG9jYXRpb24uc2xpY2UoMCwgLTEpIDogcGFjay5sb2NhdGlvbikgKyBcIi9cIiArIG1pZEluUGFja2FnZTtcblx0XHRcdH1lbHNlIGlmKCAwICl7XG5cdFx0XHRcdHVybCA9IFwiLi4vXCIgKyBtaWQ7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dXJsID0gbWlkO1xuXHRcdFx0fVxuXHRcdFx0Ly8gaWYgcmVzdWx0IGlzIG5vdCBhYnNvbHV0ZSwgYWRkIGJhc2VVcmxcblx0XHRcdGlmKCEoLyheXFwvKXwoXFw6KS8udGVzdCh1cmwpKSl7XG5cdFx0XHRcdHVybCA9IGJhc2VVcmwgKyB1cmw7XG5cdFx0XHR9XG5cdFx0XHR1cmwgKz0gXCIuanNcIjtcblx0XHRcdHJldHVybiBtYWtlTW9kdWxlSW5mbyhwaWQsIG1pZCwgcGFjaywgY29tcGFjdFBhdGgodXJsKSk7XG5cdFx0fSxcblxuXHRcdGdldE1vZHVsZUluZm8gPSBmdW5jdGlvbihtaWQsIHJlZmVyZW5jZU1vZHVsZSwgZnJvbVBlbmRpbmdDYWNoZSl7XG5cdFx0XHRyZXR1cm4gZ2V0TW9kdWxlSW5mb18obWlkLCByZWZlcmVuY2VNb2R1bGUsIHBhY2tzLCBtb2R1bGVzLCByZXEuYmFzZVVybCwgbWFwUHJvZ3MsIHBhdGhzTWFwUHJvZywgYWxpYXNlcywgdW5kZWZpbmVkLCBmcm9tUGVuZGluZ0NhY2hlKTtcblx0XHR9O1xuXG5cdGlmICghIDEgKSB7XG5cdFx0dmFyIHJlc29sdmVQbHVnaW5SZXNvdXJjZUlkID0gZnVuY3Rpb24ocGx1Z2luLCBwcmlkLCByZWZlcmVuY2VNb2R1bGUpe1xuXHRcdFx0XHRyZXR1cm4gcGx1Z2luLm5vcm1hbGl6ZSA/IHBsdWdpbi5ub3JtYWxpemUocHJpZCwgZnVuY3Rpb24obWlkKXtyZXR1cm4gdG9BYnNNaWQobWlkLCByZWZlcmVuY2VNb2R1bGUpO30pIDogdG9BYnNNaWQocHJpZCwgcmVmZXJlbmNlTW9kdWxlKTtcblx0XHRcdH0sXG5cblx0XHRcdGR5bmFtaWNQbHVnaW5VaWRHZW5lcmF0b3IgPSAwLFxuXG5cdFx0XHRnZXRNb2R1bGUgPSBmdW5jdGlvbihtaWQsIHJlZmVyZW5jZU1vZHVsZSwgaW1tZWRpYXRlKXtcblx0XHRcdFx0Ly8gY29tcHV0ZSBhbmQgb3B0aW9uYWxseSBjb25zdHJ1Y3QgKGlmIG5lY2Vzc2FyeSkgdGhlIG1vZHVsZSBpbXBsaWVkIGJ5IHRoZSBtaWQgd2l0aCByZXNwZWN0IHRvIHJlZmVyZW5jZU1vZHVsZVxuXHRcdFx0XHR2YXIgbWF0Y2gsIHBsdWdpbiwgcHJpZCwgcmVzdWx0O1xuXHRcdFx0XHRtYXRjaCA9IG1pZC5tYXRjaCgvXiguKz8pXFwhKC4qKSQvKTtcblx0XHRcdFx0aWYobWF0Y2gpe1xuXHRcdFx0XHRcdC8vIG5hbWUgd2FzIDxwbHVnaW4tbW9kdWxlPiE8cGx1Z2luLXJlc291cmNlLWlkPlxuXHRcdFx0XHRcdHBsdWdpbiA9IGdldE1vZHVsZShtYXRjaFsxXSwgcmVmZXJlbmNlTW9kdWxlLCBpbW1lZGlhdGUpO1xuXG5cdFx0XHRcdFx0aWYoIDAgICYmIGxlZ2FjeU1vZGUgPT0gc3luYyAmJiAhcGx1Z2luLmV4ZWN1dGVkKXtcblx0XHRcdFx0XHRcdGluamVjdE1vZHVsZShwbHVnaW4pO1xuXHRcdFx0XHRcdFx0aWYocGx1Z2luLmluamVjdGVkPT09YXJyaXZlZCAmJiAhcGx1Z2luLmV4ZWN1dGVkKXtcblx0XHRcdFx0XHRcdFx0Z3VhcmRDaGVja0NvbXBsZXRlKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHRcdFx0ZXhlY01vZHVsZShwbHVnaW4pO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmKHBsdWdpbi5leGVjdXRlZCl7XG5cdFx0XHRcdFx0XHRcdHByb21vdGVNb2R1bGVUb1BsdWdpbihwbHVnaW4pO1xuXHRcdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRcdC8vIHdlIGFyZSBpbiB4ZG9tYWluIG1vZGUgZm9yIHNvbWUgcmVhc29uXG5cdFx0XHRcdFx0XHRcdGV4ZWNRLnVuc2hpZnQocGx1Z2luKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblxuXG5cdFx0XHRcdFx0aWYocGx1Z2luLmV4ZWN1dGVkID09PSBleGVjdXRlZCAmJiAhcGx1Z2luLmxvYWQpe1xuXHRcdFx0XHRcdFx0Ly8gZXhlY3V0ZWQgdGhlIG1vZHVsZSBub3Qga25vd2luZyBpdCB3YXMgYSBwbHVnaW5cblx0XHRcdFx0XHRcdHByb21vdGVNb2R1bGVUb1BsdWdpbihwbHVnaW4pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIGlmIHRoZSBwbHVnaW4gaGFzIG5vdCBiZWVuIGxvYWRlZCwgdGhlbiBjYW4ndCByZXNvbHZlIHRoZSBwcmlkIGFuZCAgbXVzdCBhc3N1bWUgdGhpcyBwbHVnaW4gaXMgZHluYW1pYyB1bnRpbCB3ZSBmaW5kIG91dCBvdGhlcndpc2Vcblx0XHRcdFx0XHRpZihwbHVnaW4ubG9hZCl7XG5cdFx0XHRcdFx0XHRwcmlkID0gcmVzb2x2ZVBsdWdpblJlc291cmNlSWQocGx1Z2luLCBtYXRjaFsyXSwgcmVmZXJlbmNlTW9kdWxlKTtcblx0XHRcdFx0XHRcdG1pZCA9IChwbHVnaW4ubWlkICsgXCIhXCIgKyAocGx1Z2luLmR5bmFtaWMgPyArK2R5bmFtaWNQbHVnaW5VaWRHZW5lcmF0b3IgKyBcIiFcIiA6IFwiXCIpICsgcHJpZCk7XG5cdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRwcmlkID0gbWF0Y2hbMl07XG5cdFx0XHRcdFx0XHRtaWQgPSBwbHVnaW4ubWlkICsgXCIhXCIgKyAoKytkeW5hbWljUGx1Z2luVWlkR2VuZXJhdG9yKSArIFwiIXdhaXRpbmdGb3JQbHVnaW5cIjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmVzdWx0ID0ge3BsdWdpbjpwbHVnaW4sIG1pZDptaWQsIHJlcTpjcmVhdGVSZXF1aXJlKHJlZmVyZW5jZU1vZHVsZSksIHByaWQ6cHJpZH07XG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdHJlc3VsdCA9IGdldE1vZHVsZUluZm8obWlkLCByZWZlcmVuY2VNb2R1bGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBtb2R1bGVzW3Jlc3VsdC5taWRdIHx8ICghaW1tZWRpYXRlICYmIChtb2R1bGVzW3Jlc3VsdC5taWRdID0gcmVzdWx0KSk7XG5cdFx0XHR9O1xuXHR9XG5cblx0dmFyIHRvQWJzTWlkID0gcmVxLnRvQWJzTWlkID0gZnVuY3Rpb24obWlkLCByZWZlcmVuY2VNb2R1bGUpe1xuXHRcdFx0cmV0dXJuIGdldE1vZHVsZUluZm8obWlkLCByZWZlcmVuY2VNb2R1bGUpLm1pZDtcblx0XHR9LFxuXG5cdFx0dG9VcmwgPSByZXEudG9VcmwgPSBmdW5jdGlvbihuYW1lLCByZWZlcmVuY2VNb2R1bGUpe1xuXHRcdFx0dmFyIG1vZHVsZUluZm8gPSBnZXRNb2R1bGVJbmZvKG5hbWUrXCIveFwiLCByZWZlcmVuY2VNb2R1bGUpLFxuXHRcdFx0XHR1cmw9IG1vZHVsZUluZm8udXJsO1xuXHRcdFx0cmV0dXJuIGZpeHVwVXJsKG1vZHVsZUluZm8ucGlkPT09MCA/XG5cdFx0XHRcdC8vIGlmIHBpZD09PTAsIHRoZW4gbmFtZSBoYWQgYSBwcm90b2NvbCBvciBhYnNvbHV0ZSBwYXRoOyBlaXRoZXIgd2F5LCB0b1VybCBpcyB0aGUgaWRlbnRpZnkgZnVuY3Rpb24gaW4gc3VjaCBjYXNlc1xuXHRcdFx0XHRuYW1lIDpcblx0XHRcdFx0Ly8gXCIveC5qc1wiIHNpbmNlIGdldE1vZHVsZUluZm8gYXV0b21hdGljYWxseSBhcHBlbmRzIFwiLmpzXCIgYW5kIHdlIGFwcGVuZGVkIFwiL3hcIiB0byBtYWtlIG5hbWUgbG9vayBsaWtlIGEgbW9kdWxlIGlkXG5cdFx0XHRcdHVybC5zdWJzdHJpbmcoMCwgdXJsLmxlbmd0aC01KVxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdGlmICghIDEgKSB7XG5cdFx0dmFyIG5vbk1vZHVsZVByb3BzID0ge1xuXHRcdFx0XHRpbmplY3RlZDogYXJyaXZlZCxcblx0XHRcdFx0ZXhlY3V0ZWQ6IGV4ZWN1dGVkLFxuXHRcdFx0XHRkZWY6IG5vbm1vZHVsZSxcblx0XHRcdFx0cmVzdWx0OiBub25tb2R1bGVcblx0XHRcdH0sXG5cblx0XHRcdG1ha2VDanMgPSBmdW5jdGlvbihtaWQpe1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlc1ttaWRdID0gbWl4KHttaWQ6bWlkfSwgbm9uTW9kdWxlUHJvcHMpO1xuXHRcdFx0fSxcblxuXHRcdFx0Y2pzUmVxdWlyZU1vZHVsZSA9IG1ha2VDanMoXCJyZXF1aXJlXCIpLFxuXHRcdFx0Y2pzRXhwb3J0c01vZHVsZSA9IG1ha2VDanMoXCJleHBvcnRzXCIpLFxuXHRcdFx0Y2pzTW9kdWxlTW9kdWxlID0gbWFrZUNqcyhcIm1vZHVsZVwiKSxcblxuXHRcdFx0cnVuRmFjdG9yeSA9IGZ1bmN0aW9uKG1vZHVsZSwgYXJncyl7XG5cdFx0XHRcdHJlcS50cmFjZShcImxvYWRlci1ydW4tZmFjdG9yeVwiLCBbbW9kdWxlLm1pZF0pO1xuXHRcdFx0XHR2YXIgZmFjdG9yeSA9IG1vZHVsZS5kZWYsXG5cdFx0XHRcdFx0cmVzdWx0O1xuXHRcdFx0XHQgMCAgJiYgc3luY0V4ZWNTdGFjay51bnNoaWZ0KG1vZHVsZSk7XG5cdFx0XHRcdGlmKCAwICl7XG5cdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0cmVzdWx0PSBpc0Z1bmN0aW9uKGZhY3RvcnkpID8gZmFjdG9yeS5hcHBseShudWxsLCBhcmdzKSA6IGZhY3Rvcnk7XG5cdFx0XHRcdFx0fWNhdGNoKGUpe1xuXHRcdFx0XHRcdFx0c2lnbmFsKGVycm9yLCBtb2R1bGUucmVzdWx0ID0gbWFrZUVycm9yKFwiZmFjdG9yeVRocmV3XCIsIFttb2R1bGUsIGVdKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRyZXN1bHQ9IGlzRnVuY3Rpb24oZmFjdG9yeSkgPyBmYWN0b3J5LmFwcGx5KG51bGwsIGFyZ3MpIDogZmFjdG9yeTtcblx0XHRcdFx0fVxuXHRcdFx0XHRtb2R1bGUucmVzdWx0ID0gcmVzdWx0PT09dW5kZWZpbmVkICYmIG1vZHVsZS5janMgPyBtb2R1bGUuY2pzLmV4cG9ydHMgOiByZXN1bHQ7XG5cdFx0XHRcdCAwICAmJiBzeW5jRXhlY1N0YWNrLnNoaWZ0KG1vZHVsZSk7XG5cdFx0XHR9LFxuXG5cdFx0XHRhYm9ydEV4ZWMgPSB7fSxcblxuXHRcdFx0ZGVmT3JkZXIgPSAwLFxuXG5cdFx0XHRwcm9tb3RlTW9kdWxlVG9QbHVnaW4gPSBmdW5jdGlvbihwbHVnaW5Nb2R1bGUpe1xuXHRcdFx0XHR2YXIgcGx1Z2luID0gcGx1Z2luTW9kdWxlLnJlc3VsdDtcblx0XHRcdFx0cGx1Z2luTW9kdWxlLmR5bmFtaWMgPSBwbHVnaW4uZHluYW1pYztcblx0XHRcdFx0cGx1Z2luTW9kdWxlLm5vcm1hbGl6ZSA9IHBsdWdpbi5ub3JtYWxpemU7XG5cdFx0XHRcdHBsdWdpbk1vZHVsZS5sb2FkID0gcGx1Z2luLmxvYWQ7XG5cdFx0XHRcdHJldHVybiBwbHVnaW5Nb2R1bGU7XG5cdFx0XHR9LFxuXG5cdFx0XHRyZXNvbHZlUGx1Z2luTG9hZFEgPSBmdW5jdGlvbihwbHVnaW4pe1xuXHRcdFx0XHQvLyBwbHVnaW5zIGlzIGEgbmV3bHkgZXhlY3V0ZWQgbW9kdWxlIHRoYXQgaGFzIGEgbG9hZFEgd2FpdGluZyB0byBydW5cblxuXHRcdFx0XHQvLyBzdGVwIDE6IHRyYXZlcnNlIHRoZSBsb2FkUSBhbmQgZml4dXAgdGhlIG1pZCBhbmQgcHJpZDsgcmVtZW1iZXIgdGhlIG1hcCBmcm9tIG9yaWdpbmFsIG1pZCB0byBuZXcgbWlkXG5cdFx0XHRcdC8vIHJlY2FsbCB0aGUgb3JpZ2luYWwgbWlkIHdhcyBjcmVhdGVkIGJlZm9yZSB0aGUgcGx1Z2luIHdhcyBvbiBib2FyZCBhbmQgdGhlcmVmb3JlIGl0IHdhcyBpbXBvc3NpYmxlIHRvXG5cdFx0XHRcdC8vIGNvbXB1dGUgdGhlIGZpbmFsIG1pZDsgYWNjb3JkaW5nbHksIHByaWQgbWF5IG9yIG1heSBub3QgY2hhbmdlLCBidXQgdGhlIG1pZCB3aWxsIGRlZmluaXRlbHkgY2hhbmdlXG5cdFx0XHRcdHZhciBtYXAgPSB7fTtcblx0XHRcdFx0Zm9yRWFjaChwbHVnaW4ubG9hZFEsIGZ1bmN0aW9uKHBzZXVkb1BsdWdpblJlc291cmNlKXtcblx0XHRcdFx0XHQvLyBtYW51ZmFjdHVyZSBhbmQgaW5zZXJ0IHRoZSByZWFsIG1vZHVsZSBpbiBtb2R1bGVzXG5cdFx0XHRcdFx0dmFyIHByaWQgPSByZXNvbHZlUGx1Z2luUmVzb3VyY2VJZChwbHVnaW4sIHBzZXVkb1BsdWdpblJlc291cmNlLnByaWQsIHBzZXVkb1BsdWdpblJlc291cmNlLnJlcS5tb2R1bGUpLFxuXHRcdFx0XHRcdFx0bWlkID0gcGx1Z2luLmR5bmFtaWMgPyBwc2V1ZG9QbHVnaW5SZXNvdXJjZS5taWQucmVwbGFjZSgvd2FpdGluZ0ZvclBsdWdpbiQvLCBwcmlkKSA6IChwbHVnaW4ubWlkICsgXCIhXCIgKyBwcmlkKSxcblx0XHRcdFx0XHRcdHBsdWdpblJlc291cmNlID0gbWl4KG1peCh7fSwgcHNldWRvUGx1Z2luUmVzb3VyY2UpLCB7bWlkOm1pZCwgcHJpZDpwcmlkLCBpbmplY3RlZDowfSk7XG5cdFx0XHRcdFx0aWYoIW1vZHVsZXNbbWlkXSB8fCAhbW9kdWxlc1ttaWRdLmluamVjdGVkIC8qZm9yIHJlcXVpcmUudW5kZWYqLyl7XG5cdFx0XHRcdFx0XHQvLyBjcmVhdGUgYSBuZXcgKHRoZSByZWFsKSBwbHVnaW4gcmVzb3VyY2UgYW5kIGluamVjdCBpdCBub3JtYWxseSBub3cgdGhhdCB0aGUgcGx1Z2luIGlzIG9uIGJvYXJkXG5cdFx0XHRcdFx0XHRpbmplY3RQbHVnaW4obW9kdWxlc1ttaWRdID0gcGx1Z2luUmVzb3VyY2UpO1xuXHRcdFx0XHRcdH0gLy8gZWxzZSB0aGlzIHdhcyBhIGR1cGxpY2F0ZSByZXF1ZXN0IGZvciB0aGUgc2FtZSAocGx1Z2luLCByaWQpIGZvciBhIG5vbmR5bmFtaWMgcGx1Z2luXG5cblx0XHRcdFx0XHQvLyBwbHVnaW5SZXNvdXJjZSBpcyByZWFsbHkganVzdCBhIHBsYWNlaG9sZGVyIHdpdGggdGhlIHdyb25nIG1pZCAoYmVjYXVzZSB3ZSBjb3VsZG4ndCBjYWxjdWxhdGUgaXQgdW50aWwgdGhlIHBsdWdpbiB3YXMgb24gYm9hcmQpXG5cdFx0XHRcdFx0Ly8gbWFyayBpcyBhcyBhcnJpdmVkIGFuZCBkZWxldGUgaXQgZnJvbSBtb2R1bGVzOyB0aGUgcmVhbCBtb2R1bGUgd2FzIHJlcXVlc3RlZCBhYm92ZVxuXHRcdFx0XHRcdG1hcFtwc2V1ZG9QbHVnaW5SZXNvdXJjZS5taWRdID0gbW9kdWxlc1ttaWRdO1xuXHRcdFx0XHRcdHNldEFycml2ZWQocHNldWRvUGx1Z2luUmVzb3VyY2UpO1xuXHRcdFx0XHRcdGRlbGV0ZSBtb2R1bGVzW3BzZXVkb1BsdWdpblJlc291cmNlLm1pZF07XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRwbHVnaW4ubG9hZFEgPSAwO1xuXG5cdFx0XHRcdC8vIHN0ZXAyOiByZXBsYWNlIGFsbCByZWZlcmVuY2VzIHRvIGFueSBwbGFjZWhvbGRlciBtb2R1bGVzIHdpdGggcmVhbCBtb2R1bGVzXG5cdFx0XHRcdHZhciBzdWJzdGl0dXRlTW9kdWxlcyA9IGZ1bmN0aW9uKG1vZHVsZSl7XG5cdFx0XHRcdFx0Zm9yKHZhciByZXBsYWNlbWVudCwgZGVwcyA9IG1vZHVsZS5kZXBzIHx8IFtdLCBpID0gMDsgaTxkZXBzLmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0XHRcdHJlcGxhY2VtZW50ID0gbWFwW2RlcHNbaV0ubWlkXTtcblx0XHRcdFx0XHRcdGlmKHJlcGxhY2VtZW50KXtcblx0XHRcdFx0XHRcdFx0ZGVwc1tpXSA9IHJlcGxhY2VtZW50O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdFx0Zm9yKHZhciBwIGluIG1vZHVsZXMpe1xuXHRcdFx0XHRcdHN1YnN0aXR1dGVNb2R1bGVzKG1vZHVsZXNbcF0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvckVhY2goZXhlY1EsIHN1YnN0aXR1dGVNb2R1bGVzKTtcblx0XHRcdH0sXG5cblx0XHRcdGZpbmlzaEV4ZWMgPSBmdW5jdGlvbihtb2R1bGUpe1xuXHRcdFx0XHRyZXEudHJhY2UoXCJsb2FkZXItZmluaXNoLWV4ZWNcIiwgW21vZHVsZS5taWRdKTtcblx0XHRcdFx0bW9kdWxlLmV4ZWN1dGVkID0gZXhlY3V0ZWQ7XG5cdFx0XHRcdG1vZHVsZS5kZWZPcmRlciA9IGRlZk9yZGVyKys7XG5cdFx0XHRcdCAwICAmJiBmb3JFYWNoKG1vZHVsZS5wcm92aWRlcywgZnVuY3Rpb24oY2IpeyBjYigpOyB9KTtcblx0XHRcdFx0aWYobW9kdWxlLmxvYWRRKXtcblx0XHRcdFx0XHQvLyB0aGUgbW9kdWxlIHdhcyBhIHBsdWdpblxuXHRcdFx0XHRcdHByb21vdGVNb2R1bGVUb1BsdWdpbihtb2R1bGUpO1xuXHRcdFx0XHRcdHJlc29sdmVQbHVnaW5Mb2FkUShtb2R1bGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIHJlbW92ZSBhbGwgb2NjdXJyZW5jZXMgb2YgdGhpcyBtb2R1bGUgZnJvbSB0aGUgZXhlY1Fcblx0XHRcdFx0Zm9yKGkgPSAwOyBpIDwgZXhlY1EubGVuZ3RoOyl7XG5cdFx0XHRcdFx0aWYoZXhlY1FbaV0gPT09IG1vZHVsZSl7XG5cdFx0XHRcdFx0XHRleGVjUS5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRpKys7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGRlbGV0ZSByZWZlcmVuY2VzIHRvIHN5bnRoZXRpYyBtb2R1bGVzXG5cdFx0XHRcdGlmICgvXnJlcXVpcmVcXCovLnRlc3QobW9kdWxlLm1pZCkpIHtcblx0XHRcdFx0XHRkZWxldGUgbW9kdWxlc1ttb2R1bGUubWlkXTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0Y2lyY2xlVHJhY2UgPSBbXSxcblxuXHRcdFx0ZXhlY01vZHVsZSA9IGZ1bmN0aW9uKG1vZHVsZSwgc3RyaWN0KXtcblx0XHRcdFx0Ly8gcnVuIHRoZSBkZXBlbmRlbmN5IHZlY3RvciwgdGhlbiBydW4gdGhlIGZhY3RvcnkgZm9yIG1vZHVsZVxuXHRcdFx0XHRpZihtb2R1bGUuZXhlY3V0ZWQgPT09IGV4ZWN1dGluZyl7XG5cdFx0XHRcdFx0cmVxLnRyYWNlKFwibG9hZGVyLWNpcmN1bGFyLWRlcGVuZGVuY3lcIiwgW2NpcmNsZVRyYWNlLmNvbmNhdChtb2R1bGUubWlkKS5qb2luKFwiLT5cIildKTtcblx0XHRcdFx0XHRyZXR1cm4gKCFtb2R1bGUuZGVmIHx8IHN0cmljdCkgPyBhYm9ydEV4ZWMgOiAgKG1vZHVsZS5janMgJiYgbW9kdWxlLmNqcy5leHBvcnRzKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBhdCB0aGlzIHBvaW50IHRoZSBtb2R1bGUgaXMgZWl0aGVyIG5vdCBleGVjdXRlZCBvciBmdWxseSBleGVjdXRlZFxuXG5cblx0XHRcdFx0aWYoIW1vZHVsZS5leGVjdXRlZCl7XG5cdFx0XHRcdFx0aWYoIW1vZHVsZS5kZWYpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIGFib3J0RXhlYztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmFyIG1pZCA9IG1vZHVsZS5taWQsXG5cdFx0XHRcdFx0XHRkZXBzID0gbW9kdWxlLmRlcHMgfHwgW10sXG5cdFx0XHRcdFx0XHRhcmcsIGFyZ1Jlc3VsdCxcblx0XHRcdFx0XHRcdGFyZ3MgPSBbXSxcblx0XHRcdFx0XHRcdGkgPSAwO1xuXG5cdFx0XHRcdFx0aWYoIDAgKXtcblx0XHRcdFx0XHRcdGNpcmNsZVRyYWNlLnB1c2gobWlkKTtcblx0XHRcdFx0XHRcdHJlcS50cmFjZShcImxvYWRlci1leGVjLW1vZHVsZVwiLCBbXCJleGVjXCIsIGNpcmNsZVRyYWNlLmxlbmd0aCwgbWlkXSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gZm9yIGNpcmN1bGFyIGRlcGVuZGVuY2llcywgYXNzdW1lIHRoZSBmaXJzdCBtb2R1bGUgZW5jb3VudGVyZWQgd2FzIGV4ZWN1dGVkIE9LXG5cdFx0XHRcdFx0Ly8gbW9kdWxlcyB0aGF0IGNpcmN1bGFybHkgZGVwZW5kIG9uIGEgbW9kdWxlIHRoYXQgaGFzIG5vdCBydW4gaXRzIGZhY3Rvcnkgd2lsbCBnZXRcblx0XHRcdFx0XHQvLyB0aGUgcHJlLW1hZGUgY2pzLmV4cG9ydHM9PT1tb2R1bGUucmVzdWx0LiBUaGV5IGNhbiB0YWtlIGEgcmVmZXJlbmNlIHRvIHRoaXMgb2JqZWN0IGFuZC9vclxuXHRcdFx0XHRcdC8vIGFkZCBwcm9wZXJ0aWVzIHRvIGl0LiBXaGVuIHRoZSBtb2R1bGUgZmluYWxseSBydW5zIGl0cyBmYWN0b3J5LCB0aGUgZmFjdG9yeSBjYW5cblx0XHRcdFx0XHQvLyByZWFkL3dyaXRlL3JlcGxhY2UgdGhpcyBvYmplY3QuIE5vdGljZSB0aGF0IHNvIGxvbmcgYXMgdGhlIG9iamVjdCBpc24ndCByZXBsYWNlZCwgYW55XG5cdFx0XHRcdFx0Ly8gcmVmZXJlbmNlIHRha2VuIGVhcmxpZXIgd2hpbGUgd2Fsa2luZyB0aGUgZGVwcyBsaXN0IGlzIHN0aWxsIHZhbGlkLlxuXHRcdFx0XHRcdG1vZHVsZS5leGVjdXRlZCA9IGV4ZWN1dGluZztcblx0XHRcdFx0XHR3aGlsZSgoYXJnID0gZGVwc1tpKytdKSl7XG5cdFx0XHRcdFx0XHRhcmdSZXN1bHQgPSAoKGFyZyA9PT0gY2pzUmVxdWlyZU1vZHVsZSkgPyBjcmVhdGVSZXF1aXJlKG1vZHVsZSkgOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQoKGFyZyA9PT0gY2pzRXhwb3J0c01vZHVsZSkgPyBtb2R1bGUuY2pzLmV4cG9ydHMgOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCgoYXJnID09PSBjanNNb2R1bGVNb2R1bGUpID8gbW9kdWxlLmNqcyA6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRleGVjTW9kdWxlKGFyZywgc3RyaWN0KSkpKTtcblx0XHRcdFx0XHRcdGlmKGFyZ1Jlc3VsdCA9PT0gYWJvcnRFeGVjKXtcblx0XHRcdFx0XHRcdFx0bW9kdWxlLmV4ZWN1dGVkID0gMDtcblx0XHRcdFx0XHRcdFx0cmVxLnRyYWNlKFwibG9hZGVyLWV4ZWMtbW9kdWxlXCIsIFtcImFib3J0XCIsIG1pZF0pO1xuXHRcdFx0XHRcdFx0XHQgMCAgJiYgY2lyY2xlVHJhY2UucG9wKCk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBhYm9ydEV4ZWM7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRhcmdzLnB1c2goYXJnUmVzdWx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cnVuRmFjdG9yeShtb2R1bGUsIGFyZ3MpO1xuXHRcdFx0XHRcdGZpbmlzaEV4ZWMobW9kdWxlKTtcblx0XHRcdFx0XHQgMCAgJiYgY2lyY2xlVHJhY2UucG9wKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gYXQgdGhpcyBwb2ludCB0aGUgbW9kdWxlIGlzIGd1YXJhbnRlZWQgZnVsbHkgZXhlY3V0ZWRcblxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLnJlc3VsdDtcblx0XHRcdH0sXG5cblxuXHRcdFx0Y2hlY2tDb21wbGV0ZUd1YXJkID0gMCxcblxuXHRcdFx0Z3VhcmRDaGVja0NvbXBsZXRlID0gZnVuY3Rpb24ocHJvYyl7XG5cdFx0XHRcdHRyeXtcblx0XHRcdFx0XHRjaGVja0NvbXBsZXRlR3VhcmQrKztcblx0XHRcdFx0XHRwcm9jKCk7XG5cdFx0XHRcdH1jYXRjaChlKXtcblx0XHRcdFx0XHQvLyBodHRwczovL2J1Z3MuZG9qb3Rvb2xraXQub3JnL3RpY2tldC8xNjYxN1xuXHRcdFx0XHRcdHRocm93IGU7XG5cdFx0XHRcdH1maW5hbGx5e1xuXHRcdFx0XHRcdGNoZWNrQ29tcGxldGVHdWFyZC0tO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKGV4ZWNDb21wbGV0ZSgpKXtcblx0XHRcdFx0XHRzaWduYWwoXCJpZGxlXCIsIFtdKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0Y2hlY2tDb21wbGV0ZSA9IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdC8vIGtlZXAgZ29pbmcgdGhyb3VnaCB0aGUgZXhlY1EgYXMgbG9uZyBhcyBhdCBsZWFzdCBvbmUgZmFjdG9yeSBpcyBleGVjdXRlZFxuXHRcdFx0XHQvLyBwbHVnaW5zLCByZWN1cnNpb24sIGNhY2hlZCBtb2R1bGVzIGFsbCBtYWtlIGZvciBtYW55IGV4ZWN1dGlvbiBwYXRoIHBvc3NpYmlsaXRpZXNcblx0XHRcdFx0aWYoY2hlY2tDb21wbGV0ZUd1YXJkKXtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Z3VhcmRDaGVja0NvbXBsZXRlKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0Y2hlY2tEb2pvUmVxdWlyZVBsdWdpbigpO1xuXHRcdFx0XHRcdGZvcih2YXIgY3VycmVudERlZk9yZGVyLCBtb2R1bGUsIGkgPSAwOyBpIDwgZXhlY1EubGVuZ3RoOyl7XG5cdFx0XHRcdFx0XHRjdXJyZW50RGVmT3JkZXIgPSBkZWZPcmRlcjtcblx0XHRcdFx0XHRcdG1vZHVsZSA9IGV4ZWNRW2ldO1xuXHRcdFx0XHRcdFx0ZXhlY01vZHVsZShtb2R1bGUpO1xuXHRcdFx0XHRcdFx0aWYoY3VycmVudERlZk9yZGVyIT1kZWZPcmRlcil7XG5cdFx0XHRcdFx0XHRcdC8vIGRlZk9yZGVyIHdhcyBidW1wZWQgb25lIG9yIG1vcmUgdGltZXMgaW5kaWNhdGluZyBzb21ldGhpbmcgd2FzIGV4ZWN1dGVkIChub3RlLCB0aGlzIGluZGljYXRlc1xuXHRcdFx0XHRcdFx0XHQvLyB0aGUgZXhlY1Egd2FzIG1vZGlmaWVkLCBtYXliZSBhIGxvdCAoZm9yIGV4YW1wbGUgYSBsYXRlciBtb2R1bGUgY2F1c2VzIGFuIGVhcmxpZXIgbW9kdWxlIHRvIGV4ZWN1dGUpXG5cdFx0XHRcdFx0XHRcdGNoZWNrRG9qb1JlcXVpcmVQbHVnaW4oKTtcblx0XHRcdFx0XHRcdFx0aSA9IDA7XG5cdFx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdFx0Ly8gbm90aGluZyBoYXBwZW5lZDsgY2hlY2sgdGhlIG5leHQgbW9kdWxlIGluIHRoZSBleGVjIHF1ZXVlXG5cdFx0XHRcdFx0XHRcdGkrKztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fTtcblx0fVxuXG5cdHZhciBmaXh1cFVybD0gdHlwZW9mIHVzZXJDb25maWcuZml4dXBVcmwgPT0gXCJmdW5jdGlvblwiID8gdXNlckNvbmZpZy5maXh1cFVybCA6IGZ1bmN0aW9uKHVybCl7XG5cdFx0XHR1cmwgKz0gXCJcIjsgLy8gbWFrZSBzdXJlIHVybCBpcyBhIEphdmFzY3JpcHQgc3RyaW5nIChzb21lIHBhdGhzIG1heSBiZSBhIEphdmEgc3RyaW5nKVxuXHRcdFx0cmV0dXJuIHVybCArIChjYWNoZUJ1c3QgPyAoKC9cXD8vLnRlc3QodXJsKSA/IFwiJlwiIDogXCI/XCIpICsgY2FjaGVCdXN0KSA6IFwiXCIpO1xuXHRcdH07XG5cblxuXG5cdGlmKCAwICl7XG5cdFx0cmVxLnVuZGVmID0gZnVuY3Rpb24obW9kdWxlSWQsIHJlZmVyZW5jZU1vZHVsZSl7XG5cdFx0XHQvLyBJbiBvcmRlciB0byByZWxvYWQgYSBtb2R1bGUsIGl0IG11c3QgYmUgdW5kZWZpbmVkICh0aGlzIHJvdXRpbmUpIGFuZCB0aGVuIHJlLXJlcXVlc3RlZC5cblx0XHRcdC8vIFRoaXMgaXMgdXNlZnVsIGZvciB0ZXN0aW5nIGZyYW1ld29ya3MgKGF0IGxlYXN0KS5cblx0XHRcdHZhciBtb2R1bGUgPSBnZXRNb2R1bGUobW9kdWxlSWQsIHJlZmVyZW5jZU1vZHVsZSk7XG5cdFx0XHRzZXRBcnJpdmVkKG1vZHVsZSk7XG5cdFx0XHRtaXgobW9kdWxlLCB7ZGVmOjAsIGV4ZWN1dGVkOjAsIGluamVjdGVkOjAsIG5vZGU6MCwgbG9hZDowfSk7XG5cdFx0fTtcblx0fVxuXG5cdGlmKCBmYWxzZSApe1xuXHRcdGlmKCAwID09PXVuZGVmaW5lZCl7XG5cdFx0XHQgMCAmJiBoYXMuYWRkKFwiZG9qby1sb2FkZXItZXZhbC1oaW50LXVybFwiLCAxKTtcblx0XHR9XG5cblx0XHR2YXIgaW5qZWN0UGx1Z2luID0gZnVuY3Rpb24oXG5cdFx0XHRcdG1vZHVsZVxuXHRcdFx0KXtcblx0XHRcdFx0Ly8gaW5qZWN0cyB0aGUgcGx1Z2luIG1vZHVsZSBnaXZlbiBieSBtb2R1bGU7IG1heSBoYXZlIHRvIGluamVjdCB0aGUgcGx1Z2luIGl0c2VsZlxuXHRcdFx0XHR2YXIgcGx1Z2luID0gbW9kdWxlLnBsdWdpbjtcblxuXHRcdFx0XHRpZihwbHVnaW4uZXhlY3V0ZWQgPT09IGV4ZWN1dGVkICYmICFwbHVnaW4ubG9hZCl7XG5cdFx0XHRcdFx0Ly8gZXhlY3V0ZWQgdGhlIG1vZHVsZSBub3Qga25vd2luZyBpdCB3YXMgYSBwbHVnaW5cblx0XHRcdFx0XHRwcm9tb3RlTW9kdWxlVG9QbHVnaW4ocGx1Z2luKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBvbkxvYWQgPSBmdW5jdGlvbihkZWYpe1xuXHRcdFx0XHRcdFx0bW9kdWxlLnJlc3VsdCA9IGRlZjtcblx0XHRcdFx0XHRcdHNldEFycml2ZWQobW9kdWxlKTtcblx0XHRcdFx0XHRcdGZpbmlzaEV4ZWMobW9kdWxlKTtcblx0XHRcdFx0XHRcdGNoZWNrQ29tcGxldGUoKTtcblx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdGlmKHBsdWdpbi5sb2FkKXtcblx0XHRcdFx0XHRwbHVnaW4ubG9hZChtb2R1bGUucHJpZCwgbW9kdWxlLnJlcSwgb25Mb2FkKTtcblx0XHRcdFx0fWVsc2UgaWYocGx1Z2luLmxvYWRRKXtcblx0XHRcdFx0XHRwbHVnaW4ubG9hZFEucHVzaChtb2R1bGUpO1xuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHQvLyB0aGUgdW5zaGlmdCBpbnN0ZWFkIG9mIHB1c2ggaXMgaW1wb3J0YW50OiB3ZSBkb24ndCB3YW50IHBsdWdpbnMgdG8gZXhlY3V0ZSBhc1xuXHRcdFx0XHRcdC8vIGRlcGVuZGVuY2llcyBvZiBzb21lIG90aGVyIG1vZHVsZSBiZWNhdXNlIHRoaXMgbWF5IGNhdXNlIGNpcmNsZXMgd2hlbiB0aGUgcGx1Z2luXG5cdFx0XHRcdFx0Ly8gbG9hZFEgaXMgcnVuOyBhbHNvLCBnZW5lcmFsbHksIHdlIHdhbnQgcGx1Z2lucyB0byBydW4gZWFybHkgc2luY2UgdGhleSBtYXkgbG9hZFxuXHRcdFx0XHRcdC8vIHNldmVyYWwgb3RoZXIgbW9kdWxlcyBhbmQgdGhlcmVmb3JlIGNhbiBwb3RlbnRpYWxseSB1bmJsb2NrIG1hbnkgbW9kdWxlc1xuXHRcdFx0XHRcdHBsdWdpbi5sb2FkUSA9IFttb2R1bGVdO1xuXHRcdFx0XHRcdGV4ZWNRLnVuc2hpZnQocGx1Z2luKTtcblx0XHRcdFx0XHRpbmplY3RNb2R1bGUocGx1Z2luKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0Ly8gZm9yIElFLCBpbmplY3RpbmcgYSBtb2R1bGUgbWF5IHJlc3VsdCBpbiBhIHJlY3Vyc2l2ZSBleGVjdXRpb24gaWYgdGhlIG1vZHVsZSBpcyBpbiB0aGUgY2FjaGVcblxuXHRcdFx0Y2FjaGVkID0gMCxcblxuXHRcdFx0aW5qZWN0aW5nTW9kdWxlID0gMCxcblxuXHRcdFx0aW5qZWN0aW5nQ2FjaGVkTW9kdWxlID0gMCxcblxuXHRcdFx0ZXZhbE1vZHVsZVRleHQgPSBmdW5jdGlvbih0ZXh0LCBtb2R1bGUpe1xuXHRcdFx0XHQvLyBzZWUgZGVmKCkgZm9yIHRoZSBpbmplY3RpbmdDYWNoZWRNb2R1bGUgYnJhY2tldDsgaXQgc2ltcGx5IGNhdXNlcyBhIHNob3J0LCBzYWZlIGNpcmN1aXRcblx0XHRcdFx0aWYoIDAgKXtcblx0XHRcdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oW1wiJ10pdXNlIHN0cmljdFxcMS9nLCAnJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aW5qZWN0aW5nQ2FjaGVkTW9kdWxlID0gMTtcblx0XHRcdFx0aWYoIDAgKXtcblx0XHRcdFx0XHR0cnl7XG5cdFx0XHRcdFx0XHRpZih0ZXh0PT09Y2FjaGVkKXtcblx0XHRcdFx0XHRcdFx0Y2FjaGVkLmNhbGwobnVsbCk7XG5cdFx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdFx0cmVxLmV2YWwodGV4dCwgIDAgID8gbW9kdWxlLnVybCA6IG1vZHVsZS5taWQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1jYXRjaChlKXtcblx0XHRcdFx0XHRcdHNpZ25hbChlcnJvciwgbWFrZUVycm9yKFwiZXZhbE1vZHVsZVRocmV3XCIsIG1vZHVsZSkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0aWYodGV4dD09PWNhY2hlZCl7XG5cdFx0XHRcdFx0XHRjYWNoZWQuY2FsbChudWxsKTtcblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdHJlcS5ldmFsKHRleHQsICAwICA/IG1vZHVsZS51cmwgOiBtb2R1bGUubWlkKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aW5qZWN0aW5nQ2FjaGVkTW9kdWxlID0gMDtcblx0XHRcdH0sXG5cblx0XHRcdGluamVjdE1vZHVsZSA9IGZ1bmN0aW9uKG1vZHVsZSl7XG5cdFx0XHRcdC8vIEluamVjdCB0aGUgbW9kdWxlLiBJbiB0aGUgYnJvd3NlciBlbnZpcm9ubWVudCwgdGhpcyBtZWFucyBhcHBlbmRpbmcgYSBzY3JpcHQgZWxlbWVudCBpbnRvXG5cdFx0XHRcdC8vIHRoZSBkb2N1bWVudDsgaW4gb3RoZXIgZW52aXJvbm1lbnRzLCBpdCBtZWFucyBsb2FkaW5nIGEgZmlsZS5cblx0XHRcdFx0Ly9cblx0XHRcdFx0Ly8gSWYgaW4gc3luY2hyb25vdXMgbW9kZSwgdGhlbiBnZXQgdGhlIG1vZHVsZSBzeW5jaHJvbm91c2x5IGlmIGl0J3Mgbm90IHhkb21haW5Mb2FkaW5nLlxuXG5cdFx0XHRcdHZhciBtaWQgPSBtb2R1bGUubWlkLFxuXHRcdFx0XHRcdHVybCA9IG1vZHVsZS51cmw7XG5cdFx0XHRcdGlmKG1vZHVsZS5leGVjdXRlZCB8fCBtb2R1bGUuaW5qZWN0ZWQgfHwgd2FpdGluZ1ttaWRdIHx8IChtb2R1bGUudXJsICYmICgobW9kdWxlLnBhY2sgJiYgd2FpdGluZ1ttb2R1bGUudXJsXT09PW1vZHVsZS5wYWNrKSB8fCB3YWl0aW5nW21vZHVsZS51cmxdPT0xKSkpe1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRzZXRSZXF1ZXN0ZWQobW9kdWxlKTtcblxuXHRcdFx0XHRpZiggMCApe1xuXHRcdFx0XHRcdHZhciB2aWFDb21ibyA9IDA7XG5cdFx0XHRcdFx0aWYobW9kdWxlLnBsdWdpbiAmJiBtb2R1bGUucGx1Z2luLmlzQ29tYm8pe1xuXHRcdFx0XHRcdFx0Ly8gYSBjb21ibyBwbHVnaW47IHRoZXJlZm9yZSwgbXVzdCBiZSBoYW5kbGVkIGJ5IGNvbWJvIHNlcnZpY2Vcblx0XHRcdFx0XHRcdC8vIHRoZSBwcmlkIHNob3VsZCBoYXZlIGFscmVhZHkgYmVlbiBjb252ZXJ0ZWQgdG8gYSBVUkwgKGlmIHJlcXVpcmVkIGJ5IHRoZSBwbHVnaW4pIGR1cmluZ1xuXHRcdFx0XHRcdFx0Ly8gdGhlIG5vcm1hbGl6ZSBwcm9jZXNzOyBpbiBhbnkgZXZlbnQsIHRoZXJlIGlzIG5vIHdheSBmb3IgdGhlIGxvYWRlciB0byBrbm93IGhvdyB0b1xuXHRcdFx0XHRcdFx0Ly8gdG8gdGhlIGNvbnZlcnNpb247IHRoZXJlZm9yZSB0aGUgdGhpcmQgYXJndW1lbnQgaXMgemVyb1xuXHRcdFx0XHRcdFx0cmVxLmNvbWJvLmFkZChtb2R1bGUucGx1Z2luLm1pZCwgbW9kdWxlLnByaWQsIDAsIHJlcSk7XG5cdFx0XHRcdFx0XHR2aWFDb21ibyA9IDE7XG5cdFx0XHRcdFx0fWVsc2UgaWYoIW1vZHVsZS5wbHVnaW4pe1xuXHRcdFx0XHRcdFx0dmlhQ29tYm8gPSByZXEuY29tYm8uYWRkKDAsIG1vZHVsZS5taWQsIG1vZHVsZS51cmwsIHJlcSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKHZpYUNvbWJvKXtcblx0XHRcdFx0XHRcdGNvbWJvUGVuZGluZz0gMTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihtb2R1bGUucGx1Z2luKXtcblx0XHRcdFx0XHRpbmplY3RQbHVnaW4obW9kdWxlKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH0gLy8gZWxzZSBhIG5vcm1hbCBtb2R1bGUgKG5vdCBhIHBsdWdpbilcblxuXG5cdFx0XHRcdHZhciBvbkxvYWRDYWxsYmFjayA9IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0cnVuRGVmUShtb2R1bGUpO1xuXHRcdFx0XHRcdGlmKG1vZHVsZS5pbmplY3RlZCAhPT0gYXJyaXZlZCl7XG5cdFx0XHRcdFx0XHQvLyB0aGUgc2NyaXB0IHRoYXQgY29udGFpbmVkIHRoZSBtb2R1bGUgYXJyaXZlZCBhbmQgaGFzIGJlZW4gZXhlY3V0ZWQgeWV0XG5cdFx0XHRcdFx0XHQvLyBub3RoaW5nIHdhcyBhZGRlZCB0byB0aGUgZGVmUSAoc28gaXQgd2Fzbid0IGFuIEFNRCBtb2R1bGUpIGFuZCB0aGUgbW9kdWxlXG5cdFx0XHRcdFx0XHQvLyB3YXNuJ3QgbWFya2VkIGFzIGFycml2ZWQgYnkgZG9qby5wcm92aWRlIChzbyBpdCB3YXNuJ3QgYSB2MS42LSBtb2R1bGUpO1xuXHRcdFx0XHRcdFx0Ly8gdGhlcmVmb3JlLCBpdCBtdXN0IG5vdCBoYXZlIGJlZW4gYSBtb2R1bGU7IGFkanVzdCBzdGF0ZSBhY2NvcmRpbmdseVxuXHRcdFx0XHRcdFx0aWYoIDAgKXtcblx0XHRcdFx0XHRcdFx0c2lnbmFsKGVycm9yLCBtYWtlRXJyb3IoXCJub0RlZmluZVwiLCBtb2R1bGUpKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c2V0QXJyaXZlZChtb2R1bGUpO1xuXHRcdFx0XHRcdFx0bWl4KG1vZHVsZSwgbm9uTW9kdWxlUHJvcHMpO1xuXHRcdFx0XHRcdFx0cmVxLnRyYWNlKFwibG9hZGVyLWRlZmluZS1ub25tb2R1bGVcIiwgW21vZHVsZS51cmxdKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiggMCAgJiYgbGVnYWN5TW9kZSl7XG5cdFx0XHRcdFx0XHQvLyBtdXN0IGNhbGwgY2hlY2tDb21wbGV0ZSBldmVuIGluIGZvciBzeW5jIGxvYWRlciBiZWNhdXNlIHdlIG1heSBiZSBpbiB4ZG9tYWluTG9hZGluZyBtb2RlO1xuXHRcdFx0XHRcdFx0Ly8gYnV0LCBpZiB4ZCBsb2FkaW5nLCB0aGVuIGRvbid0IGNhbGwgY2hlY2tDb21wbGV0ZSB1bnRpbCBvdXQgb2YgdGhlIGN1cnJlbnQgc3luYyB0cmF2ZXJzYWxcblx0XHRcdFx0XHRcdC8vIGluIG9yZGVyIHRvIHByZXNlcnZlIG9yZGVyIG9mIGV4ZWN1dGlvbiBvZiB0aGUgZG9qby5yZXF1aXJlZCBtb2R1bGVzXG5cdFx0XHRcdFx0XHQhc3luY0V4ZWNTdGFjay5sZW5ndGggJiYgY2hlY2tDb21wbGV0ZSgpO1xuXHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0Y2hlY2tDb21wbGV0ZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdFx0Y2FjaGVkID0gY2FjaGVbbWlkXSB8fCBjYWNoZVt1cmxLZXlQcmVmaXggKyBtb2R1bGUudXJsXTtcblx0XHRcdFx0aWYoY2FjaGVkKXtcblx0XHRcdFx0XHRyZXEudHJhY2UoXCJsb2FkZXItaW5qZWN0XCIsIFtcImNhY2hlXCIsIG1vZHVsZS5taWQsIHVybF0pO1xuXHRcdFx0XHRcdGV2YWxNb2R1bGVUZXh0KGNhY2hlZCwgbW9kdWxlKTtcblx0XHRcdFx0XHRvbkxvYWRDYWxsYmFjaygpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiggMCAgJiYgbGVnYWN5TW9kZSl7XG5cdFx0XHRcdFx0aWYobW9kdWxlLmlzWGQpe1xuXHRcdFx0XHRcdFx0Ly8gc3dpdGNoIHRvIGFzeW5jIG1vZGUgdGVtcG9yYXJpbHk7IGlmIGN1cnJlbnQgbGVnYWN5TW9kZSE9c3luYywgdGhlbiBpcyBtdXN0IGJlIG9uZSBvZiB7bGVnYWN5QXN5bmMsIHhkLCBmYWxzZX1cblx0XHRcdFx0XHRcdGxlZ2FjeU1vZGU9PXN5bmMgJiYgKGxlZ2FjeU1vZGUgPSB4ZCk7XG5cdFx0XHRcdFx0XHQvLyBmYWxsIHRocm91Z2ggYW5kIGxvYWQgdmlhIHNjcmlwdCBpbmplY3Rpb25cblx0XHRcdFx0XHR9ZWxzZSBpZihtb2R1bGUuaXNBbWQgJiYgbGVnYWN5TW9kZSE9c3luYyl7XG5cdFx0XHRcdFx0XHQvLyBmYWxsIHRocm91Z2ggYW5kIGxvYWQgdmlhIHNjcmlwdCBpbmplY3Rpb25cblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdC8vIG1vZGUgbWF5IGJlIHN5bmMsIHhkL2xlZ2FjeUFzeW5jLCBvciBhc3luYzsgbW9kdWxlIG1heSBiZSBBTUQgb3IgbGVnYWN5OyBidXQgbW9kdWxlIGlzIGFsd2F5cyBsb2NhdGVkIG9uIHRoZSBzYW1lIGRvbWFpblxuXHRcdFx0XHRcdFx0dmFyIHhockNhbGxiYWNrID0gZnVuY3Rpb24odGV4dCl7XG5cdFx0XHRcdFx0XHRcdGlmKGxlZ2FjeU1vZGU9PXN5bmMpe1xuXHRcdFx0XHRcdFx0XHRcdC8vIHRoZSB0b3Agb2Ygc3luY0V4ZWNTdGFjayBnaXZlcyB0aGUgY3VycmVudCBzeW5jaHJvbm91c2x5IGV4ZWN1dGluZyBtb2R1bGU7IHRoZSBsb2FkZXIgbmVlZHNcblx0XHRcdFx0XHRcdFx0XHQvLyB0byBrbm93IHRoaXMgaWYgaXQgaGFzIHRvIHN3aXRjaCB0byBhc3luYyBsb2FkaW5nIGluIHRoZSBtaWRkbGUgb2YgZXZhbHVhdGluZyBhIGxlZ2FjeSBtb2R1bGVcblx0XHRcdFx0XHRcdFx0XHQvLyB0aGlzIGhhcHBlbnMgd2hlbiBhIG1vZHVsZXMgZG9qby5yZXF1aXJlJ3MgYSBtb2R1bGUgdGhhdCBtdXN0IGJlIGxvYWRlZCBhc3luYyBiZWNhdXNlIGl0J3MgeGRvbWFpblxuXHRcdFx0XHRcdFx0XHRcdC8vICh1c2luZyB1bnNoaWZ0L3NoaWZ0IGJlY2F1c2UgdGhlcmUgaXMgbm8gYmFjaygpIG1ldGhvZHMgZm9yIEphdmFzY3JpcHQgYXJyYXlzKVxuXHRcdFx0XHRcdFx0XHRcdHN5bmNFeGVjU3RhY2sudW5zaGlmdChtb2R1bGUpO1xuXHRcdFx0XHRcdFx0XHRcdGV2YWxNb2R1bGVUZXh0KHRleHQsIG1vZHVsZSk7XG5cdFx0XHRcdFx0XHRcdFx0c3luY0V4ZWNTdGFjay5zaGlmdCgpO1xuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gbWF5YmUgdGhlIG1vZHVsZSB3YXMgYW4gQU1EIG1vZHVsZVxuXHRcdFx0XHRcdFx0XHRcdHJ1bkRlZlEobW9kdWxlKTtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIGxlZ2FjeSBtb2R1bGVzIG5ldmVyIGdldCB0byBkZWZpbmVNb2R1bGUoKSA9PiBjanMgYW5kIGluamVjdGVkIG5ldmVyIHNldDsgYWxzbyBldmFsdWF0aW9uIGltcGxpZXMgZXhlY3V0aW5nXG5cdFx0XHRcdFx0XHRcdFx0aWYoIW1vZHVsZS5janMpe1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QXJyaXZlZChtb2R1bGUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0ZmluaXNoRXhlYyhtb2R1bGUpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGlmKG1vZHVsZS5maW5pc2gpe1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gd2hpbGUgc3luY2hyb25vdXNseSBldmFsdWF0aW5nIHRoaXMgbW9kdWxlLCBkb2pvLnJlcXVpcmUgd2FzIGFwcGxpZWQgcmVmZXJlbmNpbmcgYSBtb2R1bGVcblx0XHRcdFx0XHRcdFx0XHRcdC8vIHRoYXQgaGFkIHRvIGJlIGxvYWRlZCBhc3luYzsgdGhlcmVmb3JlLCB0aGUgbG9hZGVyIHN0b3BwZWQgYW5zd2VyaW5nIGFsbCBkb2pvLnJlcXVpcmVcblx0XHRcdFx0XHRcdFx0XHRcdC8vIHJlcXVlc3RzIHNvIHRoZXkgY291bGQgYmUgYW5zd2VyZWQgY29tcGxldGVseSBpbiB0aGUgY29ycmVjdCBzZXF1ZW5jZTsgbW9kdWxlLmZpbmlzaCBnaXZlc1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gdGhlIGxpc3Qgb2YgZG9qby5yZXF1aXJlcyB0aGF0IG11c3QgYmUgcmUtYXBwbGllZCBvbmNlIGFsbCB0YXJnZXQgbW9kdWxlcyBhcmUgYXZhaWxhYmxlO1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gbWFrZSBhIHN5bnRoZXRpYyBtb2R1bGUgdG8gZXhlY3V0ZSB0aGUgZG9qby5yZXF1aXJlJ3MgaW4gdGhlIGNvcnJlY3Qgb3JkZXJcblxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gY29tcHV0ZSBhIGd1YXJhbnRlZWQtdW5pcXVlIG1pZCBmb3IgdGhlIHN5bnRoZXRpYyBmaW5pc2ggbW9kdWxlOyByZW1lbWJlciB0aGUgZmluaXNoIHZlY3RvcjsgcmVtb3ZlIGl0IGZyb20gdGhlIHJlZmVyZW5jZSBtb2R1bGVcblx0XHRcdFx0XHRcdFx0XHRcdC8vIFRPRE86IGNhbiB3ZSBqdXN0IGxlYXZlIHRoZSBtb2R1bGUuZmluaXNoLi4ud2hhdCdzIGl0IGh1cnRpbmc/XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgZmluaXNoTWlkID0gbWlkICsgXCIqZmluaXNoXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZpbmlzaCA9IG1vZHVsZS5maW5pc2g7XG5cdFx0XHRcdFx0XHRcdFx0XHRkZWxldGUgbW9kdWxlLmZpbmlzaDtcblxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVmKGZpbmlzaE1pZCwgW1wiZG9qb1wiLCAoXCJkb2pvL3JlcXVpcmUhXCIgKyBmaW5pc2guam9pbihcIixcIikpLnJlcGxhY2UoL1xcLi9nLCBcIi9cIildLCBmdW5jdGlvbihkb2pvKXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9yRWFjaChmaW5pc2gsIGZ1bmN0aW9uKG1pZCl7IGRvam8ucmVxdWlyZShtaWQpOyB9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gdW5zaGlmdCwgbm90IHB1c2gsIHdoaWNoIGNhdXNlcyB0aGUgY3VycmVudCB0cmF2ZXJzYWwgdG8gYmUgcmVhdHRlbXB0ZWQgZnJvbSB0aGUgdG9wXG5cdFx0XHRcdFx0XHRcdFx0XHRleGVjUS51bnNoaWZ0KGdldE1vZHVsZShmaW5pc2hNaWQpKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0b25Mb2FkQ2FsbGJhY2soKTtcblx0XHRcdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dCA9IHRyYW5zZm9ybVRvQW1kKG1vZHVsZSwgdGV4dCk7XG5cdFx0XHRcdFx0XHRcdFx0aWYodGV4dCl7XG5cdFx0XHRcdFx0XHRcdFx0XHRldmFsTW9kdWxlVGV4dCh0ZXh0LCBtb2R1bGUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0b25Mb2FkQ2FsbGJhY2soKTtcblx0XHRcdFx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIGlmIHRyYW5zZm9ybVRvQW1kIHJldHVybmVkIGZhbHN5LCB0aGVuIHRoZSBtb2R1bGUgd2FzIGFscmVhZHkgQU1EIGFuZCBpdCBjYW4gYmUgc2NyaXB0LWluamVjdGVkXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBkbyBzbyB0byBpbXByb3ZlIGRlYnVnYWJpbGl0eShldmVuIHRob3VnaCBpdCBtZWFucyBhbm90aGVyIGRvd25sb2FkLi4ud2hpY2ggcHJvYmFibHkgd29uJ3QgaGFwcGVuIHdpdGggYSBnb29kIGJyb3dzZXIgY2FjaGUpXG5cdFx0XHRcdFx0XHRcdFx0XHRpbmplY3RpbmdNb2R1bGUgPSBtb2R1bGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXEuaW5qZWN0VXJsKGZpeHVwVXJsKHVybCksIG9uTG9hZENhbGxiYWNrLCBtb2R1bGUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0aW5qZWN0aW5nTW9kdWxlID0gMDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRcdHJlcS50cmFjZShcImxvYWRlci1pbmplY3RcIiwgW1wieGhyXCIsIG1vZHVsZS5taWQsIHVybCwgbGVnYWN5TW9kZSE9c3luY10pO1xuXHRcdFx0XHRcdFx0aWYoIDAgKXtcblx0XHRcdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0XHRcdHJlcS5nZXRUZXh0KHVybCwgbGVnYWN5TW9kZSE9c3luYywgeGhyQ2FsbGJhY2spO1xuXHRcdFx0XHRcdFx0XHR9Y2F0Y2goZSl7XG5cdFx0XHRcdFx0XHRcdFx0c2lnbmFsKGVycm9yLCBtYWtlRXJyb3IoXCJ4aHJJbmplY3RGYWlsZWRcIiwgW21vZHVsZSwgZV0pKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRcdHJlcS5nZXRUZXh0KHVybCwgbGVnYWN5TW9kZSE9c3luYywgeGhyQ2FsbGJhY2spO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSAvLyBlbHNlIGFzeW5jIG1vZGUgb3IgZmVsbCB0aHJvdWdoIGluIHhkb21haW4gbG9hZGluZyBtb2RlOyBlaXRoZXIgd2F5LCBsb2FkIGJ5IHNjcmlwdCBpbmplY3Rpb25cblx0XHRcdFx0cmVxLnRyYWNlKFwibG9hZGVyLWluamVjdFwiLCBbXCJzY3JpcHRcIiwgbW9kdWxlLm1pZCwgdXJsXSk7XG5cdFx0XHRcdGluamVjdGluZ01vZHVsZSA9IG1vZHVsZTtcblx0XHRcdFx0cmVxLmluamVjdFVybChmaXh1cFVybCh1cmwpLCBvbkxvYWRDYWxsYmFjaywgbW9kdWxlKTtcblx0XHRcdFx0aW5qZWN0aW5nTW9kdWxlID0gMDtcblx0XHRcdH0sXG5cblx0XHRcdGRlZmluZU1vZHVsZSA9IGZ1bmN0aW9uKG1vZHVsZSwgZGVwcywgZGVmKXtcblx0XHRcdFx0cmVxLnRyYWNlKFwibG9hZGVyLWRlZmluZS1tb2R1bGVcIiwgW21vZHVsZS5taWQsIGRlcHNdKTtcblxuXHRcdFx0XHRpZiggMCAgJiYgbW9kdWxlLnBsdWdpbiAmJiBtb2R1bGUucGx1Z2luLmlzQ29tYm8pe1xuXHRcdFx0XHRcdC8vIHRoZSBtb2R1bGUgaXMgYSBwbHVnaW4gcmVzb3VyY2UgbG9hZGVkIGJ5IHRoZSBjb21ibyBzZXJ2aWNlXG5cdFx0XHRcdFx0Ly8gbm90ZTogY2hlY2sgZm9yIG1vZHVsZS5wbHVnaW4gc2hvdWxkIGJlIGVub3VnaCBzaW5jZSBub3JtYWwgcGx1Z2luIHJlc291cmNlcyBzaG91bGRcblx0XHRcdFx0XHQvLyBub3QgZm9sbG93IHRoaXMgcGF0aDsgbW9kdWxlLnBsdWdpbi5pc0NvbWJvIGlzIGZ1dHVyZS1wcm9vZmluZyBiZWx0IGFuZCBzdXNwZW5kZXJzXG5cdFx0XHRcdFx0bW9kdWxlLnJlc3VsdCA9IGlzRnVuY3Rpb24oZGVmKSA/IGRlZigpIDogZGVmO1xuXHRcdFx0XHRcdHNldEFycml2ZWQobW9kdWxlKTtcblx0XHRcdFx0XHRmaW5pc2hFeGVjKG1vZHVsZSk7XG5cdFx0XHRcdFx0cmV0dXJuIG1vZHVsZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBtaWQgPSBtb2R1bGUubWlkO1xuXHRcdFx0XHRpZihtb2R1bGUuaW5qZWN0ZWQgPT09IGFycml2ZWQpe1xuXHRcdFx0XHRcdHNpZ25hbChlcnJvciwgbWFrZUVycm9yKFwibXVsdGlwbGVEZWZpbmVcIiwgbW9kdWxlKSk7XG5cdFx0XHRcdFx0cmV0dXJuIG1vZHVsZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRtaXgobW9kdWxlLCB7XG5cdFx0XHRcdFx0ZGVwczogZGVwcyxcblx0XHRcdFx0XHRkZWY6IGRlZixcblx0XHRcdFx0XHRjanM6IHtcblx0XHRcdFx0XHRcdGlkOiBtb2R1bGUubWlkLFxuXHRcdFx0XHRcdFx0dXJpOiBtb2R1bGUudXJsLFxuXHRcdFx0XHRcdFx0ZXhwb3J0czogKG1vZHVsZS5yZXN1bHQgPSB7fSksXG5cdFx0XHRcdFx0XHRzZXRFeHBvcnRzOiBmdW5jdGlvbihleHBvcnRzKXtcblx0XHRcdFx0XHRcdFx0bW9kdWxlLmNqcy5leHBvcnRzID0gZXhwb3J0cztcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRjb25maWc6ZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIG1vZHVsZS5jb25maWc7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvLyByZXNvbHZlIGRlcHMgd2l0aCByZXNwZWN0IHRvIHRoaXMgbW9kdWxlXG5cdFx0XHRcdGZvcih2YXIgaSA9IDA7IGRlcHNbaV07IGkrKyl7XG5cdFx0XHRcdFx0ZGVwc1tpXSA9IGdldE1vZHVsZShkZXBzW2ldLCBtb2R1bGUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoIDAgICYmIGxlZ2FjeU1vZGUgJiYgIXdhaXRpbmdbbWlkXSl7XG5cdFx0XHRcdFx0Ly8gdGhlIG1vZHVsZSBzaG93ZWQgdXAgd2l0aG91dCBiZWluZyBhc2tlZCBmb3I7IGl0IHdhcyBwcm9iYWJseSBpbiBhIDxzY3JpcHQ+IGVsZW1lbnRcblx0XHRcdFx0XHRpbmplY3REZXBlbmRlbmNpZXMobW9kdWxlKTtcblx0XHRcdFx0XHRleGVjUS5wdXNoKG1vZHVsZSk7XG5cdFx0XHRcdFx0Y2hlY2tDb21wbGV0ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNldEFycml2ZWQobW9kdWxlKTtcblxuXHRcdFx0XHRpZighaXNGdW5jdGlvbihkZWYpICYmICFkZXBzLmxlbmd0aCl7XG5cdFx0XHRcdFx0bW9kdWxlLnJlc3VsdCA9IGRlZjtcblx0XHRcdFx0XHRmaW5pc2hFeGVjKG1vZHVsZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlO1xuXHRcdFx0fSxcblxuXHRcdFx0cnVuRGVmUSA9IGZ1bmN0aW9uKHJlZmVyZW5jZU1vZHVsZSwgbWlkcyl7XG5cdFx0XHRcdC8vIGRlZlEgaXMgYW4gYXJyYXkgb2YgW2lkLCBkZXBlbmRlbmNpZXMsIGZhY3RvcnldXG5cdFx0XHRcdC8vIG1pZHMgKGlmIGFueSkgaXMgYSB2ZWN0b3Igb2YgbWlkcyBnaXZlbiBieSBhIGNvbWJvIHNlcnZpY2Vcblx0XHRcdFx0dmFyIGRlZmluZWRNb2R1bGVzID0gW10sXG5cdFx0XHRcdFx0bW9kdWxlLCBhcmdzO1xuXHRcdFx0XHR3aGlsZShkZWZRLmxlbmd0aCl7XG5cdFx0XHRcdFx0YXJncyA9IGRlZlEuc2hpZnQoKTtcblx0XHRcdFx0XHRtaWRzICYmIChhcmdzWzBdPSBtaWRzLnNoaWZ0KCkpO1xuXHRcdFx0XHRcdC8vIGV4cGxpY2l0IGRlZmluZSBpbmRpY2F0ZXMgcG9zc2libGUgbXVsdGlwbGUgbW9kdWxlcyBpbiBhIHNpbmdsZSBmaWxlOyBkZWxheSBpbmplY3RpbmcgZGVwZW5kZW5jaWVzIHVudGlsIGRlZlEgZnVsbHlcblx0XHRcdFx0XHQvLyBwcm9jZXNzZWQgc2luY2UgbW9kdWxlcyBlYXJsaWVyIGluIHRoZSBxdWV1ZSBkZXBlbmQgb24gYWxyZWFkeS1hcnJpdmVkIG1vZHVsZXMgdGhhdCBhcmUgbGF0ZXIgaW4gdGhlIHF1ZXVlXG5cdFx0XHRcdFx0Ly8gVE9ETzogd2hhdCBpZiBubyBhcmdzWzBdIGFuZCBubyByZWZlcmVuY2VNb2R1bGVcblx0XHRcdFx0XHRtb2R1bGUgPSAoYXJnc1swXSAmJiBnZXRNb2R1bGUoYXJnc1swXSkpIHx8IHJlZmVyZW5jZU1vZHVsZTtcblx0XHRcdFx0XHRkZWZpbmVkTW9kdWxlcy5wdXNoKFttb2R1bGUsIGFyZ3NbMV0sIGFyZ3NbMl1dKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdW1lUGVuZGluZ0NhY2hlSW5zZXJ0KHJlZmVyZW5jZU1vZHVsZSk7XG5cdFx0XHRcdGZvckVhY2goZGVmaW5lZE1vZHVsZXMsIGZ1bmN0aW9uKGFyZ3Mpe1xuXHRcdFx0XHRcdGluamVjdERlcGVuZGVuY2llcyhkZWZpbmVNb2R1bGUuYXBwbHkobnVsbCwgYXJncykpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH07XG5cdH1cblxuXHR2YXIgdGltZXJJZCA9IDAsXG5cdFx0Y2xlYXJUaW1lciA9IG5vb3AsXG5cdFx0c3RhcnRUaW1lciA9IG5vb3A7XG5cdGlmKCAwICl7XG5cdFx0Ly8gVGltZXIgbWFjaGluZXJ5IHRoYXQgbW9uaXRvcnMgaG93IGxvbmcgdGhlIGxvYWRlciBpcyB3YWl0aW5nIGFuZCBzaWduYWxzIGFuIGVycm9yIHdoZW4gdGhlIHRpbWVyIHJ1bnMgb3V0LlxuXHRcdGNsZWFyVGltZXIgPSBmdW5jdGlvbigpe1xuXHRcdFx0dGltZXJJZCAmJiBjbGVhclRpbWVvdXQodGltZXJJZCk7XG5cdFx0XHR0aW1lcklkID0gMDtcblx0XHR9O1xuXG5cdFx0c3RhcnRUaW1lciA9IGZ1bmN0aW9uKCl7XG5cdFx0XHRjbGVhclRpbWVyKCk7XG5cdFx0XHRpZihyZXEud2FpdG1zKXtcblx0XHRcdFx0dGltZXJJZCA9IGdsb2JhbC5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0Y2xlYXJUaW1lcigpO1xuXHRcdFx0XHRcdHNpZ25hbChlcnJvciwgbWFrZUVycm9yKFwidGltZW91dFwiLCB3YWl0aW5nKSk7XG5cdFx0XHRcdH0sIHJlcS53YWl0bXMpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHRpZiAoIDAgKSB7XG5cdFx0Ly8gVGVzdCBmb3IgSUUncyBkaWZmZXJlbnQgd2F5IG9mIHNpZ25hbGluZyB3aGVuIHNjcmlwdHMgZmluaXNoIGxvYWRpbmcuICBOb3RlIHRoYXQgYWNjb3JkaW5nIHRvXG5cdFx0Ly8gaHR0cDovL2J1Z3MuZG9qb3Rvb2xraXQub3JnL3RpY2tldC8xNTA5NiNjb21tZW50OjE0LCBJRTkgYWxzbyBuZWVkcyB0byBmb2xsb3cgdGhlXG5cdFx0Ly8gSUUgc3BlY2lmaWMgY29kZSBwYXRoIGV2ZW4gdGhvdWdoIGl0IGhhcyBhbiBhZGRFdmVudExpc3RlbmVyKCkgbWV0aG9kLlxuXHRcdC8vIFVua25vd24gaWYgc3BlY2lhbCBwYXRoIG5lZWRlZCBvbiBJRTEwKywgd2hpY2ggYWxzbyBoYXMgYSBkb2N1bWVudC5hdHRhY2hFdmVudCgpIG1ldGhvZC5cblx0XHQvLyBTaG91bGQgZXZhbHVhdGUgdG8gZmFsc2UgZm9yIE9wZXJhIGFuZCBXaW5kb3dzIDggYXBwcywgZXZlbiB0aG91Z2ggdGhleSBkb2N1bWVudC5hdHRhY2hFdmVudCgpXG5cdFx0Ly8gIGlzIGRlZmluZWQgaW4gYm90aCB0aG9zZSBlbnZpcm9ubWVudHMuXG5cdFx0IDAgJiYgaGFzLmFkZChcImllLWV2ZW50LWJlaGF2aW9yXCIsIGRvYy5hdHRhY2hFdmVudCAmJiB0eXBlb2YgV2luZG93cyA9PT0gXCJ1bmRlZmluZWRcIiAmJlxuXHRcdFx0KHR5cGVvZiBvcGVyYSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBvcGVyYS50b1N0cmluZygpICE9IFwiW29iamVjdCBPcGVyYV1cIikpO1xuXHR9XG5cblx0aWYoIDAgICYmICggZmFsc2UgIHx8ICAxICkpe1xuXHRcdHZhciBkb21PbiA9IGZ1bmN0aW9uKG5vZGUsIGV2ZW50TmFtZSwgaWVFdmVudE5hbWUsIGhhbmRsZXIpe1xuXHRcdFx0XHQvLyBBZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gYSBET00gbm9kZSB1c2luZyB0aGUgQVBJIGFwcHJvcHJpYXRlIGZvciB0aGUgY3VycmVudCBicm93c2VyO1xuXHRcdFx0XHQvLyByZXR1cm4gYSBmdW5jdGlvbiB0aGF0IHdpbGwgZGlzY29ubmVjdCB0aGUgbGlzdGVuZXIuXG5cdFx0XHRcdGlmKCEgMCApe1xuXHRcdFx0XHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIGZhbHNlKTtcblx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIGZhbHNlKTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRub2RlLmF0dGFjaEV2ZW50KGllRXZlbnROYW1lLCBoYW5kbGVyKTtcblx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdG5vZGUuZGV0YWNoRXZlbnQoaWVFdmVudE5hbWUsIGhhbmRsZXIpO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR3aW5kb3dPbkxvYWRMaXN0ZW5lciA9IGRvbU9uKHdpbmRvdywgXCJsb2FkXCIsIFwib25sb2FkXCIsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHJlcS5wYWdlTG9hZGVkID0gMTtcblx0XHRcdFx0Ly8gaHR0cHM6Ly9idWdzLmRvam90b29sa2l0Lm9yZy90aWNrZXQvMTYyNDhcblx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdGRvYy5yZWFkeVN0YXRlIT1cImNvbXBsZXRlXCIgJiYgKGRvYy5yZWFkeVN0YXRlID0gXCJjb21wbGV0ZVwiKTtcblx0XHRcdFx0fWNhdGNoKGUpe1xuXHRcdFx0XHR9XG5cdFx0XHRcdHdpbmRvd09uTG9hZExpc3RlbmVyKCk7XG5cdFx0XHR9KTtcblxuXHRcdGlmKCBmYWxzZSApe1xuXHRcdFx0Ly8gaWYgdGhlIGxvYWRlciBpcyBvbiB0aGUgcGFnZSwgdGhlcmUgbXVzdCBiZSBhdCBsZWFzdCBvbmUgc2NyaXB0IGVsZW1lbnRcblx0XHRcdC8vIGdldHRpbmcgaXRzIHBhcmVudCBhbmQgdGhlbiBkb2luZyBpbnNlcnRCZWZvcmUgc29sdmVzIHRoZSBcIk9wZXJhdGlvbiBBYm9ydGVkXCJcblx0XHRcdC8vIGVycm9yIGluIElFIGZyb20gYXBwZW5kaW5nIHRvIGEgbm9kZSB0aGF0IGlzbid0IHByb3Blcmx5IGNsb3NlZDsgc2VlXG5cdFx0XHQvLyBkb2pvL3Rlc3RzL19iYXNlL2xvYWRlci9yZXF1aXJlanMvc2ltcGxlLWJhZGJhc2UuaHRtbCBmb3IgYW4gZXhhbXBsZVxuXHRcdFx0Ly8gZG9uJ3QgdXNlIHNjcmlwdHMgd2l0aCB0eXBlIGRvam8vLi4uIHNpbmNlIHRoZXNlIG1heSBiZSByZW1vdmVkOyBzZWUgIzE1ODA5XG5cdFx0XHQvLyBwcmVmZXIgdG8gdXNlIHRoZSBpbnNlcnRQb2ludCBjb21wdXRlZCBkdXJpbmcgdGhlIGNvbmZpZyBzbmlmZiBpbiBjYXNlIGEgc2NyaXB0IGlzIHJlbW92ZWQ7IHNlZSAjMTY5NThcblx0XHRcdHZhciBzY3JpcHRzID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpLFxuXHRcdFx0XHRpID0gMCxcblx0XHRcdFx0c2NyaXB0O1xuXHRcdFx0d2hpbGUoIWluc2VydFBvaW50U2libGluZyl7XG5cdFx0XHRcdGlmKCEvXmRvam8vLnRlc3QoKHNjcmlwdCA9IHNjcmlwdHNbaSsrXSkgJiYgc2NyaXB0LnR5cGUpKXtcblx0XHRcdFx0XHRpbnNlcnRQb2ludFNpYmxpbmc9IHNjcmlwdDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXEuaW5qZWN0VXJsID0gZnVuY3Rpb24odXJsLCBjYWxsYmFjaywgb3duZXIpe1xuXHRcdFx0XHQvLyBpbnNlcnQgYSBzY3JpcHQgZWxlbWVudCB0byB0aGUgaW5zZXJ0LXBvaW50IGVsZW1lbnQgd2l0aCBzcmM9dXJsO1xuXHRcdFx0XHQvLyBhcHBseSBjYWxsYmFjayB1cG9uIGRldGVjdGluZyB0aGUgc2NyaXB0IGhhcyBsb2FkZWQuXG5cblx0XHRcdFx0dmFyIG5vZGUgPSBvd25lci5ub2RlID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiksXG5cdFx0XHRcdFx0b25Mb2FkID0gZnVuY3Rpb24oZSl7XG5cdFx0XHRcdFx0XHRlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG5cdFx0XHRcdFx0XHR2YXIgbm9kZSA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcblx0XHRcdFx0XHRcdGlmKGUudHlwZSA9PT0gXCJsb2FkXCIgfHwgL2NvbXBsZXRlfGxvYWRlZC8udGVzdChub2RlLnJlYWR5U3RhdGUpKXtcblx0XHRcdFx0XHRcdFx0bG9hZERpc2Nvbm5lY3RvcigpO1xuXHRcdFx0XHRcdFx0XHRlcnJvckRpc2Nvbm5lY3RvcigpO1xuXHRcdFx0XHRcdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0bG9hZERpc2Nvbm5lY3RvciA9IGRvbU9uKG5vZGUsIFwibG9hZFwiLCBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiLCBvbkxvYWQpLFxuXHRcdFx0XHRcdGVycm9yRGlzY29ubmVjdG9yID0gZG9tT24obm9kZSwgXCJlcnJvclwiLCBcIm9uZXJyb3JcIiwgZnVuY3Rpb24oZSl7XG5cdFx0XHRcdFx0XHRsb2FkRGlzY29ubmVjdG9yKCk7XG5cdFx0XHRcdFx0XHRlcnJvckRpc2Nvbm5lY3RvcigpO1xuXHRcdFx0XHRcdFx0c2lnbmFsKGVycm9yLCBtYWtlRXJyb3IoXCJzY3JpcHRFcnJvcjogXCIgKyB1cmwsIFt1cmwsIGVdKSk7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0bm9kZS50eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIjtcblx0XHRcdFx0bm9kZS5jaGFyc2V0ID0gXCJ1dGYtOFwiO1xuXHRcdFx0XHRub2RlLnNyYyA9IHVybDtcblx0XHRcdFx0aW5zZXJ0UG9pbnRTaWJsaW5nLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIGluc2VydFBvaW50U2libGluZyk7XG5cdFx0XHRcdHJldHVybiBub2RlO1xuXHRcdFx0fTtcblx0XHR9XG5cdH1cblxuXHRpZiggMCApe1xuXHRcdHJlcS5sb2cgPSBmdW5jdGlvbigpe1xuXHRcdFx0dHJ5e1xuXHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhhcmd1bWVudHNbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9Y2F0Y2goZSl7fVxuXHRcdH07XG5cdH1lbHNle1xuXHRcdHJlcS5sb2cgPSBub29wO1xuXHR9XG5cblx0aWYoIDAgKXtcblx0XHR2YXIgdHJhY2UgPSByZXEudHJhY2UgPSBmdW5jdGlvbihcblx0XHRcdGdyb3VwLFx0Ly8gdGhlIHRyYWNlIGdyb3VwIHRvIHdoaWNoIHRoaXMgYXBwbGljYXRpb24gYmVsb25nc1xuXHRcdFx0YXJnc1x0Ly8gdGhlIGNvbnRlbnRzIG9mIHRoZSB0cmFjZVxuXHRcdCl7XG5cdFx0XHQvLy9cblx0XHRcdC8vIFRyYWNpbmcgaW50ZXJmYWNlIGJ5IGdyb3VwLlxuXHRcdFx0Ly9cblx0XHRcdC8vIFNlbmRzIHRoZSBjb250ZW50cyBvZiBhcmdzIHRvIHRoZSBjb25zb2xlIGlmZiAocmVxLnRyYWNlLm9uICYmIHJlcS50cmFjZVtncm91cF0pXG5cblx0XHRcdGlmKHRyYWNlLm9uICYmIHRyYWNlLmdyb3VwW2dyb3VwXSl7XG5cdFx0XHRcdHNpZ25hbChcInRyYWNlXCIsIFtncm91cCwgYXJnc10pO1xuXHRcdFx0XHRmb3IodmFyIGFyZywgZHVtcCA9IFtdLCB0ZXh0PSBcInRyYWNlOlwiICsgZ3JvdXAgKyAoYXJncy5sZW5ndGggPyAoXCI6XCIgKyBhcmdzWzBdKSA6IFwiXCIpLCBpPSAxOyBpPGFyZ3MubGVuZ3RoOyl7XG5cdFx0XHRcdFx0YXJnID0gYXJnc1tpKytdO1xuXHRcdFx0XHRcdGlmKGlzU3RyaW5nKGFyZykpe1xuXHRcdFx0XHRcdFx0dGV4dCArPSBcIiwgXCIgKyBhcmc7XG5cdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRkdW1wLnB1c2goYXJnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmVxLmxvZyh0ZXh0KTtcblx0XHRcdFx0ZHVtcC5sZW5ndGggJiYgZHVtcC5wdXNoKFwiLlwiKTtcblx0XHRcdFx0cmVxLmxvZy5hcHBseShyZXEsIGR1bXApO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0bWl4KHRyYWNlLCB7XG5cdFx0XHRvbjoxLFxuXHRcdFx0Z3JvdXA6e30sXG5cdFx0XHRzZXQ6ZnVuY3Rpb24oZ3JvdXAsIHZhbHVlKXtcblx0XHRcdFx0aWYoaXNTdHJpbmcoZ3JvdXApKXtcblx0XHRcdFx0XHR0cmFjZS5ncm91cFtncm91cF09IHZhbHVlO1xuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRtaXgodHJhY2UuZ3JvdXAsIGdyb3VwKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRyYWNlLnNldChtaXgobWl4KG1peCh7fSwgZGVmYXVsdENvbmZpZy50cmFjZSksIHVzZXJDb25maWcudHJhY2UpLCBkb2pvU25pZmZDb25maWcudHJhY2UpKTtcblx0XHRvbihcImNvbmZpZ1wiLCBmdW5jdGlvbihjb25maWcpe1xuXHRcdFx0Y29uZmlnLnRyYWNlICYmIHRyYWNlLnNldChjb25maWcudHJhY2UpO1xuXHRcdH0pO1xuXHR9ZWxzZXtcblx0XHRyZXEudHJhY2UgPSBub29wO1xuXHR9XG5cdGlmICghIDEgKSB7XG5cdFx0dmFyIGRlZiA9IGZ1bmN0aW9uKFxuXHRcdFx0bWlkLFx0XHQgIC8vKGNvbW1vbmpzLm1vZHVsZUlkLCBvcHRpb25hbClcblx0XHRcdGRlcGVuZGVuY2llcywgLy8oYXJyYXkgb2YgY29tbW9uanMubW9kdWxlSWQsIG9wdGlvbmFsKSBsaXN0IG9mIG1vZHVsZXMgdG8gYmUgbG9hZGVkIGJlZm9yZSBydW5uaW5nIGZhY3Rvcnlcblx0XHRcdGZhY3RvcnlcdFx0ICAvLyhhbnkpXG5cdFx0KXtcblx0XHRcdC8vL1xuXHRcdFx0Ly8gQWR2aXNlcyB0aGUgbG9hZGVyIG9mIGEgbW9kdWxlIGZhY3RvcnkuIC8vSW1wbGVtZW50cyBodHRwOi8vd2lraS5jb21tb25qcy5vcmcvd2lraS9Nb2R1bGVzL0FzeW5jaHJvbm91c0RlZmluaXRpb24uXG5cdFx0XHQvLy9cblx0XHRcdC8vbm90ZVxuXHRcdFx0Ly8gQ29tbW9uSlMgZmFjdG9yeSBzY2FuIGNvdXJ0ZXN5IG9mIGh0dHA6Ly9yZXF1aXJlanMub3JnXG5cblx0XHRcdHZhciBhcml0eSA9IGFyZ3VtZW50cy5sZW5ndGgsXG5cdFx0XHRcdGRlZmF1bHREZXBzID0gW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCJtb2R1bGVcIl0sXG5cdFx0XHRcdC8vIHRoZSBwcmVkb21pbmF0ZSBzaWduYXR1cmUuLi5cblx0XHRcdFx0YXJncyA9IFswLCBtaWQsIGRlcGVuZGVuY2llc107XG5cdFx0XHRpZihhcml0eT09MSl7XG5cdFx0XHRcdGFyZ3MgPSBbMCwgKGlzRnVuY3Rpb24obWlkKSA/IGRlZmF1bHREZXBzIDogW10pLCBtaWRdO1xuXHRcdFx0fWVsc2UgaWYoYXJpdHk9PTIgJiYgaXNTdHJpbmcobWlkKSl7XG5cdFx0XHRcdGFyZ3MgPSBbbWlkLCAoaXNGdW5jdGlvbihkZXBlbmRlbmNpZXMpID8gZGVmYXVsdERlcHMgOiBbXSksIGRlcGVuZGVuY2llc107XG5cdFx0XHR9ZWxzZSBpZihhcml0eT09Myl7XG5cdFx0XHRcdGFyZ3MgPSBbbWlkLCBkZXBlbmRlbmNpZXMsIGZhY3RvcnldO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggMCAgJiYgYXJnc1sxXT09PWRlZmF1bHREZXBzKXtcblx0XHRcdFx0YXJnc1syXS50b1N0cmluZygpXG5cdFx0XHRcdFx0LnJlcGxhY2UoLyhcXC9cXCooW1xcc1xcU10qPylcXCpcXC98XFwvXFwvKC4qKSQpL21nLCBcIlwiKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9yZXF1aXJlXFwoW1wiJ10oW1xcd1xcIVxcLV9cXC5cXC9dKylbXCInXVxcKS9nLCBmdW5jdGlvbihtYXRjaCwgZGVwKXtcblx0XHRcdFx0XHRhcmdzWzFdLnB1c2goZGVwKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdHJlcS50cmFjZShcImxvYWRlci1kZWZpbmVcIiwgYXJncy5zbGljZSgwLCAyKSk7XG5cdFx0XHR2YXIgdGFyZ2V0TW9kdWxlID0gYXJnc1swXSAmJiBnZXRNb2R1bGUoYXJnc1swXSksXG5cdFx0XHRcdG1vZHVsZTtcblx0XHRcdGlmKHRhcmdldE1vZHVsZSAmJiAhd2FpdGluZ1t0YXJnZXRNb2R1bGUubWlkXSl7XG5cdFx0XHRcdC8vIGdpdmVuIGEgbWlkIHRoYXQgaGFzbid0IGJlZW4gcmVxdWVzdGVkOyB0aGVyZWZvcmUsIGRlZmluZWQgdGhyb3VnaCBtZWFucyBvdGhlciB0aGFuIGluamVjdGluZ1xuXHRcdFx0XHQvLyBjb25zZXF1ZW50IHRvIGEgcmVxdWlyZSgpIG9yIGRlZmluZSgpIGFwcGxpY2F0aW9uOyBleGFtcGxlcyBpbmNsdWRlIGRlZmluaW5nIG1vZHVsZXMgb24tdGhlLWZseVxuXHRcdFx0XHQvLyBkdWUgdG8gc29tZSBjb2RlIHBhdGggb3IgaW5jbHVkaW5nIGEgbW9kdWxlIGluIGEgc2NyaXB0IGVsZW1lbnQuIEluIGFueSBjYXNlLFxuXHRcdFx0XHQvLyB0aGVyZSBpcyBubyBjYWxsYmFjayB3YWl0aW5nIHRvIGZpbmlzaCBwcm9jZXNzaW5nIGFuZCBub3RoaW5nIHRvIHRyaWdnZXIgdGhlIGRlZlEgYW5kIHRoZVxuXHRcdFx0XHQvLyBkZXBlbmRlbmNpZXMgYXJlIG5ldmVyIHJlcXVlc3RlZDsgdGhlcmVmb3JlLCBkbyBpdCBoZXJlLlxuXHRcdFx0XHRpbmplY3REZXBlbmRlbmNpZXMoZGVmaW5lTW9kdWxlKHRhcmdldE1vZHVsZSwgYXJnc1sxXSwgYXJnc1syXSkpO1xuXHRcdFx0fWVsc2UgaWYoISAwICB8fCAhIDEgIHx8IGluamVjdGluZ0NhY2hlZE1vZHVsZSl7XG5cdFx0XHRcdC8vIG5vdCBJRSBwYXRoOiBhbm9ueW1vdXMgbW9kdWxlIGFuZCB0aGVyZWZvcmUgbXVzdCBoYXZlIGJlZW4gaW5qZWN0ZWQ7IHRoZXJlZm9yZSwgb25Mb2FkIHdpbGwgZmlyZSBpbW1lZGlhdGVseVxuXHRcdFx0XHQvLyBhZnRlciBzY3JpcHQgZmluaXNoZXMgYmVpbmcgZXZhbHVhdGVkIGFuZCB0aGUgZGVmUSBjYW4gYmUgcnVuIGZyb20gdGhhdCBjYWxsYmFjayB0byBkZXRlY3QgdGhlIG1vZHVsZSBpZFxuXHRcdFx0XHRkZWZRLnB1c2goYXJncyk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0Ly8gSUUgcGF0aDogcG9zc2libHkgYW5vbnltb3VzIG1vZHVsZSBhbmQgdGhlcmVmb3JlIGluamVjdGVkOyB0aGVyZWZvcmUsIGNhbm5vdCBkZXBlbmQgb24gMS10by0xLFxuXHRcdFx0XHQvLyBpbi1vcmRlciBleGVjIG9mIG9uTG9hZCB3aXRoIHNjcmlwdCBldmFsIChzaW5jZSBpdCdzIElFKSBhbmQgbXVzdCBtYW51YWxseSBkZXRlY3QgaGVyZVxuXHRcdFx0XHR0YXJnZXRNb2R1bGUgPSB0YXJnZXRNb2R1bGUgfHwgaW5qZWN0aW5nTW9kdWxlO1xuXHRcdFx0XHRpZighdGFyZ2V0TW9kdWxlKXtcblx0XHRcdFx0XHRmb3IobWlkIGluIHdhaXRpbmcpe1xuXHRcdFx0XHRcdFx0bW9kdWxlID0gbW9kdWxlc1ttaWRdO1xuXHRcdFx0XHRcdFx0aWYobW9kdWxlICYmIG1vZHVsZS5ub2RlICYmIG1vZHVsZS5ub2RlLnJlYWR5U3RhdGUgPT09ICdpbnRlcmFjdGl2ZScpe1xuXHRcdFx0XHRcdFx0XHR0YXJnZXRNb2R1bGUgPSBtb2R1bGU7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiggMCAgJiYgIXRhcmdldE1vZHVsZSl7XG5cdFx0XHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpPGNvbWJvc1BlbmRpbmcubGVuZ3RoOyBpKyspe1xuXHRcdFx0XHRcdFx0XHR0YXJnZXRNb2R1bGUgPSBjb21ib3NQZW5kaW5nW2ldO1xuXHRcdFx0XHRcdFx0XHRpZih0YXJnZXRNb2R1bGUubm9kZSAmJiB0YXJnZXRNb2R1bGUubm9kZS5yZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnKXtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR0YXJnZXRNb2R1bGU9IDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKCAwICAmJiBpc0FycmF5KHRhcmdldE1vZHVsZSkpe1xuXHRcdFx0XHRcdGluamVjdERlcGVuZGVuY2llcyhkZWZpbmVNb2R1bGUoZ2V0TW9kdWxlKHRhcmdldE1vZHVsZS5zaGlmdCgpKSwgYXJnc1sxXSwgYXJnc1syXSkpO1xuXHRcdFx0XHRcdGlmKCF0YXJnZXRNb2R1bGUubGVuZ3RoKXtcblx0XHRcdFx0XHRcdGNvbWJvc1BlbmRpbmcuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fWVsc2UgaWYodGFyZ2V0TW9kdWxlKXtcblx0XHRcdFx0XHRjb25zdW1lUGVuZGluZ0NhY2hlSW5zZXJ0KHRhcmdldE1vZHVsZSk7XG5cdFx0XHRcdFx0aW5qZWN0RGVwZW5kZW5jaWVzKGRlZmluZU1vZHVsZSh0YXJnZXRNb2R1bGUsIGFyZ3NbMV0sIGFyZ3NbMl0pKTtcblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0c2lnbmFsKGVycm9yLCBtYWtlRXJyb3IoXCJpZURlZmluZUZhaWxlZFwiLCBhcmdzWzBdKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2hlY2tDb21wbGV0ZSgpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0ZGVmLmFtZCA9IHtcblx0XHRcdHZlbmRvcjpcImRvam90b29sa2l0Lm9yZ1wiXG5cdFx0fTtcblxuXHRcdGlmKCAwICl7XG5cdFx0XHRyZXEuZGVmID0gZGVmO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHR2YXIgZGVmID0gbm9vcDtcblx0fVxuXHQvLyBhbGxvdyBjb25maWcgdG8gb3ZlcnJpZGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiBuYW1lZCBmdW5jdGlvbnM7IHRoaXMgaXMgdXNlZnVsIGZvclxuXHQvLyBub24tYnJvd3NlciBlbnZpcm9ubWVudHMsIGUuZy4sIG92ZXJyaWRpbmcgaW5qZWN0VXJsLCBnZXRUZXh0LCBsb2csIGV0Yy4gaW4gbm9kZS5qcywgUmhpbm8sIGV0Yy5cblx0Ly8gYWxzbyB1c2VmdWwgZm9yIHRlc3RpbmcgYW5kIG1vbmtleSBwYXRjaGluZyBsb2FkZXJcblx0bWl4KG1peChyZXEsIGRlZmF1bHRDb25maWcubG9hZGVyUGF0Y2gpLCB1c2VyQ29uZmlnLmxvYWRlclBhdGNoKTtcblxuXHQvLyBub3cgdGhhdCByZXEgaXMgZnVsbHkgaW5pdGlhbGl6ZWQgYW5kIHdvbid0IGNoYW5nZSwgd2UgY2FuIGhvb2sgaXQgdXAgdG8gdGhlIGVycm9yIHNpZ25hbFxuXHRvbihlcnJvciwgZnVuY3Rpb24oYXJnKXtcblx0XHR0cnl7XG5cdFx0XHRjb25zb2xlLmVycm9yKGFyZyk7XG5cdFx0XHRpZihhcmcgaW5zdGFuY2VvZiBFcnJvcil7XG5cdFx0XHRcdGZvcih2YXIgcCBpbiBhcmcpe1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHAgKyBcIjpcIiwgYXJnW3BdKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIi5cIik7XG5cdFx0XHR9XG5cdFx0fWNhdGNoKGUpe31cblx0fSk7XG5cblx0Ly8gYWx3YXlzIHB1Ymxpc2ggdGhlc2Vcblx0bWl4KHJlcSwge1xuXHRcdHVpZDp1aWQsXG5cdFx0Y2FjaGU6Y2FjaGUsXG5cdFx0cGFja3M6cGFja3Ncblx0fSk7XG5cblxuXHRpZiggMCApe1xuXHRcdG1peChyZXEsIHtcblx0XHRcdC8vIHRoZXNlIG1heSBiZSBpbnRlcmVzdGluZyB0byBsb29rIGF0IHdoZW4gZGVidWdnaW5nXG5cdFx0XHRwYXRoczpwYXRocyxcblx0XHRcdGFsaWFzZXM6YWxpYXNlcyxcblx0XHRcdG1vZHVsZXM6bW9kdWxlcyxcblx0XHRcdGxlZ2FjeU1vZGU6bGVnYWN5TW9kZSxcblx0XHRcdGV4ZWNROmV4ZWNRLFxuXHRcdFx0ZGVmUTpkZWZRLFxuXHRcdFx0d2FpdGluZzp3YWl0aW5nLFxuXG5cdFx0XHQvLyB0aGVzZSBhcmUgdXNlZCBmb3IgdGVzdGluZ1xuXHRcdFx0Ly8gVE9ETzogbW92ZSB0ZXN0aW5nIGluZnJhc3RydWN0dXJlIHRvIGEgZGlmZmVyZW50IGhhcyBmZWF0dXJlXG5cdFx0XHRwYWNrczpwYWNrcyxcblx0XHRcdG1hcFByb2dzOm1hcFByb2dzLFxuXHRcdFx0cGF0aHNNYXBQcm9nOnBhdGhzTWFwUHJvZyxcblx0XHRcdGxpc3RlbmVyUXVldWVzOmxpc3RlbmVyUXVldWVzLFxuXG5cdFx0XHQvLyB0aGVzZSBhcmUgdXNlZCBieSB0aGUgYnVpbGRlciAoYXQgbGVhc3QpXG5cdFx0XHRjb21wdXRlTWFwUHJvZzpjb21wdXRlTWFwUHJvZyxcblx0XHRcdGNvbXB1dGVBbGlhc2VzOmNvbXB1dGVBbGlhc2VzLFxuXHRcdFx0cnVuTWFwUHJvZzpydW5NYXBQcm9nLFxuXHRcdFx0Y29tcGFjdFBhdGg6Y29tcGFjdFBhdGgsXG5cdFx0XHRnZXRNb2R1bGVJbmZvOmdldE1vZHVsZUluZm9fXG5cdFx0fSk7XG5cdH1cblxuXHQvLyB0aGUgbG9hZGVyIGNhbiBiZSBkZWZpbmVkIGV4YWN0bHkgb25jZTsgbG9vayBmb3IgZ2xvYmFsIGRlZmluZSB3aGljaCBpcyB0aGUgc3ltYm9sIEFNRCBsb2FkZXJzIGFyZVxuXHQvLyAqcmVxdWlyZWQqIHRvIGRlZmluZSAoYXMgb3Bwb3NlZCB0byByZXF1aXJlLCB3aGljaCBpcyBvcHRpb25hbClcblx0aWYoZ2xvYmFsLmRlZmluZSl7XG5cdFx0aWYoIDAgKXtcblx0XHRcdHNpZ25hbChlcnJvciwgbWFrZUVycm9yKFwiZGVmaW5lQWxyZWFkeURlZmluZWRcIiwgMCkpO1xuXHRcdH1cblx0XHRyZXR1cm47XG5cdH1lbHNle1xuXHRcdGdsb2JhbC5kZWZpbmUgPSBkZWY7XG5cdFx0Z2xvYmFsLnJlcXVpcmUgPSByZXE7XG5cdFx0aWYoIDAgKXtcblx0XHRcdHJlcXVpcmUgPSByZXE7XG5cdFx0fVxuXHR9XG5cblx0aWYoIDAgICYmIHJlcS5jb21ibyAmJiByZXEuY29tYm8ucGx1Z2lucyl7XG5cdFx0dmFyIHBsdWdpbnMgPSByZXEuY29tYm8ucGx1Z2lucyxcblx0XHRcdHBsdWdpbk5hbWU7XG5cdFx0Zm9yKHBsdWdpbk5hbWUgaW4gcGx1Z2lucyl7XG5cdFx0XHRtaXgobWl4KGdldE1vZHVsZShwbHVnaW5OYW1lKSwgcGx1Z2luc1twbHVnaW5OYW1lXSksIHtpc0NvbWJvOjEsIGV4ZWN1dGVkOlwiZXhlY3V0ZWRcIiwgbG9hZDoxfSk7XG5cdFx0fVxuXHR9XG5cblx0aWYoIDAgICYmICEgMSApe1xuXHRcdGZvckVhY2goZGVsYXllZE1vZHVsZUNvbmZpZywgZnVuY3Rpb24oYyl7IGNvbmZpZyhjKTsgfSk7XG5cdFx0dmFyIGJvb3REZXBzID0gZG9qb1NuaWZmQ29uZmlnLmRlcHMgfHxcdHVzZXJDb25maWcuZGVwcyB8fCBkZWZhdWx0Q29uZmlnLmRlcHMsXG5cdFx0XHRib290Q2FsbGJhY2sgPSBkb2pvU25pZmZDb25maWcuY2FsbGJhY2sgfHwgdXNlckNvbmZpZy5jYWxsYmFjayB8fCBkZWZhdWx0Q29uZmlnLmNhbGxiYWNrO1xuXHRcdHJlcS5ib290ID0gKGJvb3REZXBzIHx8IGJvb3RDYWxsYmFjaykgPyBbYm9vdERlcHMgfHwgW10sIGJvb3RDYWxsYmFja10gOiAwO1xuXHR9XG5cdGlmKCEgMSApe1xuXHRcdCFyZXEuYXN5bmMgJiYgcmVxKFtcImRvam9cIl0pO1xuXHRcdHJlcS5ib290ICYmIHJlcS5hcHBseShudWxsLCByZXEuYm9vdCk7XG5cdH1cbn0pXG4uY2FsbCh0aGlzLCB1c2VyQ29uZmlnLCBkZWZhdWx0Q29uZmlnKTt9OyJdLCJzb3VyY2VSb290IjoiIn0=