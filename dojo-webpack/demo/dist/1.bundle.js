(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"dojo/_base/url":"./node_modules/dojo/_base/url.js",
	"dojo/date/stamp":"./node_modules/dojo/date/stamp.js",
	"dojo/parser":"./node_modules/dojo/parser.js",
	"dojo/promise/all":"./node_modules/dojo/promise/all.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/dojo/_base/url.js":
/*!****************************************!*\
  !*** ./node_modules/dojo/_base/url.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./kernel */ "./node_modules/dojo/_base/kernel.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(dojo){
	// module:
	//		dojo/url

	var
		ore = new RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?$"),
		ire = new RegExp("^((([^\\[:]+):)?([^@]+)@)?(\\[([^\\]]+)\\]|([^\\[:]*))(:([0-9]+))?$"),
		_Url = function(){
			var n = null,
				_a = arguments,
				uri = [_a[0]];
			// resolve uri components relative to each other
			for(var i = 1; i<_a.length; i++){
				if(!_a[i]){ continue; }

				// Safari doesn't support this.constructor so we have to be explicit
				// FIXME: Tracked (and fixed) in Webkit bug 3537.
				//		http://bugs.webkit.org/show_bug.cgi?id=3537
				var relobj = new _Url(_a[i]+""),
					uriobj = new _Url(uri[0]+"");

				if(
					relobj.path == "" &&
					!relobj.scheme &&
					!relobj.authority &&
					!relobj.query
				){
					if(relobj.fragment != n){
						uriobj.fragment = relobj.fragment;
					}
					relobj = uriobj;
				}else if(!relobj.scheme){
					relobj.scheme = uriobj.scheme;

					if(!relobj.authority){
						relobj.authority = uriobj.authority;

						if(relobj.path.charAt(0) != "/"){
							var path = uriobj.path.substring(0,
								uriobj.path.lastIndexOf("/") + 1) + relobj.path;

							var segs = path.split("/");
							for(var j = 0; j < segs.length; j++){
								if(segs[j] == "."){
									// flatten "./" references
									if(j == segs.length - 1){
										segs[j] = "";
									}else{
										segs.splice(j, 1);
										j--;
									}
								}else if(j > 0 && !(j == 1 && segs[0] == "") &&
									segs[j] == ".." && segs[j-1] != ".."){
									// flatten "../" references
									if(j == (segs.length - 1)){
										segs.splice(j, 1);
										segs[j - 1] = "";
									}else{
										segs.splice(j - 1, 2);
										j -= 2;
									}
								}
							}
							relobj.path = segs.join("/");
						}
					}
				}

				uri = [];
				if(relobj.scheme){
					uri.push(relobj.scheme, ":");
				}
				if(relobj.authority){
					uri.push("//", relobj.authority);
				}
				uri.push(relobj.path);
				if(relobj.query){
					uri.push("?", relobj.query);
				}
				if(relobj.fragment){
					uri.push("#", relobj.fragment);
				}
			}

			this.uri = uri.join("");

			// break the uri into its main components
			var r = this.uri.match(ore);

			this.scheme = r[2] || (r[1] ? "" : n);
			this.authority = r[4] || (r[3] ? "" : n);
			this.path = r[5]; // can never be undefined
			this.query = r[7] || (r[6] ? "" : n);
			this.fragment	 = r[9] || (r[8] ? "" : n);

			if(this.authority != n){
				// server based naming authority
				r = this.authority.match(ire);

				this.user = r[3] || n;
				this.password = r[4] || n;
				this.host = r[6] || r[7]; // ipv6 || ipv4
				this.port = r[9] || n;
			}
		};
	_Url.prototype.toString = function(){ return this.uri; };

	return dojo._Url = _Url;
}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/dojo/date/stamp.js":
/*!*****************************************!*\
  !*** ./node_modules/dojo/date/stamp.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../_base/lang */ "./node_modules/dojo/_base/lang.js"), __webpack_require__(/*! ../_base/array */ "./node_modules/dojo/_base/array.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(lang, array){

// module:
//		dojo/date/stamp

var stamp = {
	// summary:
	//		TODOC
};
lang.setObject("dojo.date.stamp", stamp);

// Methods to convert dates to or from a wire (string) format using well-known conventions

stamp.fromISOString = function(/*String*/ formattedString, /*Number?*/ defaultTime){
	// summary:
	//		Returns a Date object given a string formatted according to a subset of the ISO-8601 standard.
	//
	// description:
	//		Accepts a string formatted according to a profile of ISO8601 as defined by
	//		[RFC3339](http://www.ietf.org/rfc/rfc3339.txt), except that partial input is allowed.
	//		Can also process dates as specified [by the W3C](http://www.w3.org/TR/NOTE-datetime)
	//		The following combinations are valid:
	//
	//		- dates only
	//			- yyyy
	//			- yyyy-MM
	//			- yyyy-MM-dd
	//		- times only, with an optional time zone appended
	//			- THH:mm
	//			- THH:mm:ss
	//			- THH:mm:ss.SSS
	//		- and "datetimes" which could be any combination of the above
	//
	//		timezones may be specified as Z (for UTC) or +/- followed by a time expression HH:mm
	//		Assumes the local time zone if not specified.  Does not validate.  Improperly formatted
	//		input may return null.  Arguments which are out of bounds will be handled
	//		by the Date constructor (e.g. January 32nd typically gets resolved to February 1st)
	//		Only years between 100 and 9999 are supported.
  	// formattedString:
	//		A string such as 2005-06-30T08:05:00-07:00 or 2005-06-30 or T08:05:00
	// defaultTime:
	//		Used for defaults for fields omitted in the formattedString.
	//		Uses 1970-01-01T00:00:00.0Z by default.

	if(!stamp._isoRegExp){
		stamp._isoRegExp =
//TODO: could be more restrictive and check for 00-59, etc.
			/^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(.\d+)?)?((?:[+-](\d{2}):(\d{2}))|Z)?)?$/;
	}

	var match = stamp._isoRegExp.exec(formattedString),
		result = null;

	if(match){
		match.shift();
		if(match[1]){match[1]--;} // Javascript Date months are 0-based
		if(match[6]){match[6] *= 1000;} // Javascript Date expects fractional seconds as milliseconds

		if(defaultTime){
			// mix in defaultTime.  Relatively expensive, so use || operators for the fast path of defaultTime === 0
			defaultTime = new Date(defaultTime);
			array.forEach(array.map(["FullYear", "Month", "Date", "Hours", "Minutes", "Seconds", "Milliseconds"], function(prop){
				return defaultTime["get" + prop]();
			}), function(value, index){
				match[index] = match[index] || value;
			});
		}
		result = new Date(match[0]||1970, match[1]||0, match[2]||1, match[3]||0, match[4]||0, match[5]||0, match[6]||0); //TODO: UTC defaults
		if(match[0] < 100){
			result.setFullYear(match[0] || 1970);
		}

		var offset = 0,
			zoneSign = match[7] && match[7].charAt(0);
		if(zoneSign != 'Z'){
			offset = ((match[8] || 0) * 60) + (Number(match[9]) || 0);
			if(zoneSign != '-'){ offset *= -1; }
		}
		if(zoneSign){
			offset -= result.getTimezoneOffset();
		}
		if(offset){
			result.setTime(result.getTime() + offset * 60000);
		}
	}

	return result; // Date or null
};

/*=====
var __Options = {
	// selector: String
	//		"date" or "time" for partial formatting of the Date object.
	//		Both date and time will be formatted by default.
	// zulu: Boolean
	//		if true, UTC/GMT is used for a timezone
	// milliseconds: Boolean
	//		if true, output milliseconds
};
=====*/

stamp.toISOString = function(/*Date*/ dateObject, /*__Options?*/ options){
	// summary:
	//		Format a Date object as a string according a subset of the ISO-8601 standard
	//
	// description:
	//		When options.selector is omitted, output follows [RFC3339](http://www.ietf.org/rfc/rfc3339.txt)
	//		The local time zone is included as an offset from GMT, except when selector=='time' (time without a date)
	//		Does not check bounds.  Only years between 100 and 9999 are supported.
	//
	// dateObject:
	//		A Date object

	var _ = function(n){ return (n < 10) ? "0" + n : n; };
	options = options || {};
	var formattedDate = [],
		getter = options.zulu ? "getUTC" : "get",
		date = "";
	if(options.selector != "time"){
		var year = dateObject[getter+"FullYear"]();
		date = ["0000".substr((year+"").length)+year, _(dateObject[getter+"Month"]()+1), _(dateObject[getter+"Date"]())].join('-');
	}
	formattedDate.push(date);
	if(options.selector != "date"){
		var time = [_(dateObject[getter+"Hours"]()), _(dateObject[getter+"Minutes"]()), _(dateObject[getter+"Seconds"]())].join(':');
		var millis = dateObject[getter+"Milliseconds"]();
		if(options.milliseconds){
			time += "."+ (millis < 100 ? "0" : "") + _(millis);
		}
		if(options.zulu){
			time += "Z";
		}else if(options.selector != "time"){
			var timezoneOffset = dateObject.getTimezoneOffset();
			var absOffset = Math.abs(timezoneOffset);
			time += (timezoneOffset > 0 ? "-" : "+") +
				_(Math.floor(absOffset/60)) + ":" + _(absOffset%60);
		}
		formattedDate.push(time);
	}
	return formattedDate.join('T'); // String
};

return stamp;
}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/dojo/parser.js":
/*!*************************************!*\
  !*** ./node_modules/dojo/parser.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__.dj.c(module.i), __webpack_require__(/*! ./_base/kernel */ "./node_modules/dojo/_base/kernel.js"), __webpack_require__(/*! ./_base/lang */ "./node_modules/dojo/_base/lang.js"), __webpack_require__(/*! ./_base/array */ "./node_modules/dojo/_base/array.js"), __webpack_require__(/*! ./_base/config */ "./node_modules/dojo/_base/config.js"), __webpack_require__(/*! ./dom */ "./node_modules/dojo/dom.js"), __webpack_require__(/*! ./_base/window */ "./node_modules/dojo/_base/window.js"),
		__webpack_require__(/*! ./_base/url */ "./node_modules/dojo/_base/url.js"), __webpack_require__(/*! ./aspect */ "./node_modules/dojo/aspect.js"), __webpack_require__(/*! ./promise/all */ "./node_modules/dojo/promise/all.js"), __webpack_require__(/*! ./date/stamp */ "./node_modules/dojo/date/stamp.js"), __webpack_require__(/*! ./Deferred */ "./node_modules/dojo/Deferred.js"), __webpack_require__(/*! ./has */ "./node_modules/dojo/has.js"), __webpack_require__(/*! ./query */ "./node_modules/dojo/query.js"), __webpack_require__(/*! ./on */ "./node_modules/dojo/on.js"), __webpack_require__(/*! ./ready */ "./node_modules/dojo/ready.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(require, dojo, dlang, darray, config, dom, dwindow, _Url, aspect, all, dates, Deferred, has, query, don, ready){

	// module:
	//		dojo/parser

	new Date("X"); // workaround for #11279, new Date("") == NaN

	// data-dojo-props etc. is not restricted to JSON, it can be any javascript
	function myEval(text){
		return eval("(" + text + ")");
	}

	// Widgets like BorderContainer add properties to _Widget via dojo.extend().
	// If BorderContainer is loaded after _Widget's parameter list has been cached,
	// we need to refresh that parameter list (for _Widget and all widgets that extend _Widget).
	var extendCnt = 0;
	aspect.after(dlang, "extend", function(){
		extendCnt++;
	}, true);

	function getNameMap(ctor){
		// summary:
		//		Returns map from lowercase name to attribute name in class, ex: {onclick: "onClick"}
		var map = ctor._nameCaseMap, proto = ctor.prototype;

		// Create the map if it's undefined.
		// Refresh the map if a superclass was possibly extended with new methods since the map was created.
		if(!map || map._extendCnt < extendCnt){
			map = ctor._nameCaseMap = {};
			for(var name in proto){
				if(name.charAt(0) === "_"){
					continue;
				}	// skip internal properties
				map[name.toLowerCase()] = name;
			}
			map._extendCnt = extendCnt;
		}
		return map;
	}

	function getCtor(/*String[]*/ types, /*Function?*/ contextRequire){
		// summary:
		//		Retrieves a constructor.  If the types array contains more than one class/MID then the
		//		subsequent classes will be mixed into the first class and a unique constructor will be
		//		returned for that array.

		if(!contextRequire){
			contextRequire = require;
		}

		// Map from widget name or list of widget names(ex: "dijit/form/Button,acme/MyMixin") to a constructor.
		// Keep separate map for each requireContext to avoid false matches (ex: "./Foo" can mean different things
		// depending on context.)
		var ctorMap = contextRequire._dojoParserCtorMap || (contextRequire._dojoParserCtorMap = {});

		var ts = types.join();
		if(!ctorMap[ts]){
			var mixins = [];
			for(var i = 0, l = types.length; i < l; i++){
				var t = types[i];
				// TODO: Consider swapping getObject and require in the future
				mixins[mixins.length] = (ctorMap[t] = ctorMap[t] || (dlang.getObject(t) || (~t.indexOf('/') &&
					contextRequire(t))));
			}
			var ctor = mixins.shift();
			ctorMap[ts] = mixins.length ? (ctor.createSubclass ? ctor.createSubclass(mixins) : ctor.extend.apply(ctor, mixins)) : ctor;
		}

		return ctorMap[ts];
	}

	var parser = {
		// summary:
		//		The Dom/Widget parsing package

		_clearCache: function(){
			// summary:
			//		Clear cached data.   Used mainly for benchmarking.
			extendCnt++;
			_ctorMap = {};
		},

		_functionFromScript: function(script, attrData){
			// summary:
			//		Convert a `<script type="dojo/method" args="a, b, c"> ... </script>`
			//		into a function
			// script: DOMNode
			//		The `<script>` DOMNode
			// attrData: String
			//		For HTML5 compliance, searches for attrData + "args" (typically
			//		"data-dojo-args") instead of "args"
			var preamble = "",
				suffix = "",
				argsStr = (script.getAttribute(attrData + "args") || script.getAttribute("args")),
				withStr = script.getAttribute("with");

			// Convert any arguments supplied in script tag into an array to be passed to the
			var fnArgs = (argsStr || "").split(/\s*,\s*/);

			if(withStr && withStr.length){
				darray.forEach(withStr.split(/\s*,\s*/), function(part){
					preamble += "with(" + part + "){";
					suffix += "}";
				});
			}

			return new Function(fnArgs, preamble + script.innerHTML + suffix);
		},

		instantiate: function(nodes, mixin, options){
			// summary:
			//		Takes array of nodes, and turns them into class instances and
			//		potentially calls a startup method to allow them to connect with
			//		any children.
			// nodes: Array
			//		Array of DOM nodes
			// mixin: Object?
			//		An object that will be mixed in with each node in the array.
			//		Values in the mixin will override values in the node, if they
			//		exist.
			// options: Object?
			//		An object used to hold kwArgs for instantiation.
			//		See parse.options argument for details.
			// returns:
			//		Array of instances.

			mixin = mixin || {};
			options = options || {};

			var dojoType = (options.scope || dojo._scopeName) + "Type", // typically "dojoType"
				attrData = "data-" + (options.scope || dojo._scopeName) + "-", // typically "data-dojo-"
				dataDojoType = attrData + "type", // typically "data-dojo-type"
				dataDojoMixins = attrData + "mixins";					// typically "data-dojo-mixins"

			var list = [];
			darray.forEach(nodes, function(node){
				var type = dojoType in mixin ? mixin[dojoType] : node.getAttribute(dataDojoType) || node.getAttribute(dojoType);
				if(type){
					var mixinsValue = node.getAttribute(dataDojoMixins),
						types = mixinsValue ? [type].concat(mixinsValue.split(/\s*,\s*/)) : [type];

					list.push({
						node: node,
						types: types
					});
				}
			});

			// Instantiate the nodes and return the list of instances.
			return this._instantiate(list, mixin, options);
		},

		_instantiate: function(nodes, mixin, options, returnPromise){
			// summary:
			//		Takes array of objects representing nodes, and turns them into class instances and
			//		potentially calls a startup method to allow them to connect with
			//		any children.
			// nodes: Array
			//		Array of objects like
			//	|		{
			//	|			ctor: Function (may be null)
			//	|			types: ["dijit/form/Button", "acme/MyMixin"] (used if ctor not specified)
			//	|			node: DOMNode,
			//	|			scripts: [ ... ],	// array of <script type="dojo/..."> children of node
			//	|			inherited: { ... }	// settings inherited from ancestors like dir, theme, etc.
			//	|		}
			// mixin: Object
			//		An object that will be mixed in with each node in the array.
			//		Values in the mixin will override values in the node, if they
			//		exist.
			// options: Object
			//		An options object used to hold kwArgs for instantiation.
			//		See parse.options argument for details.
			// returnPromise: Boolean
			//		Return a Promise rather than the instance; supports asynchronous widget creation.
			// returns:
			//		Array of instances, or if returnPromise is true, a promise for array of instances
			//		that resolves when instances have finished initializing.

			// Call widget constructors.   Some may be asynchronous and return promises.
			var thelist = darray.map(nodes, function(obj){
				var ctor = obj.ctor || getCtor(obj.types, options.contextRequire);
				// If we still haven't resolved a ctor, it is fatal now
				if(!ctor){
					throw new Error("Unable to resolve constructor for: '" + obj.types.join() + "'");
				}
				return this.construct(ctor, obj.node, mixin, options, obj.scripts, obj.inherited);
			}, this);

			// After all widget construction finishes, call startup on each top level instance if it makes sense (as for
			// widgets).  Parent widgets will recursively call startup on their (non-top level) children
			function onConstruct(thelist){
				if(!mixin._started && !options.noStart){
					darray.forEach(thelist, function(instance){
						if(typeof instance.startup === "function" && !instance._started){
							instance.startup();
						}
					});
				}

				return thelist;
			}

			if(returnPromise){
				return all(thelist).then(onConstruct);
			}else{
				// Back-compat path, remove for 2.0
				return onConstruct(thelist);
			}
		},

		construct: function(ctor, node, mixin, options, scripts, inherited){
			// summary:
			//		Calls new ctor(params, node), where params is the hash of parameters specified on the node,
			//		excluding data-dojo-type and data-dojo-mixins.   Does not call startup().
			// ctor: Function
			//		Widget constructor.
			// node: DOMNode
			//		This node will be replaced/attached to by the widget.  It also specifies the arguments to pass to ctor.
			// mixin: Object?
			//		Attributes in this object will be passed as parameters to ctor,
			//		overriding attributes specified on the node.
			// options: Object?
			//		An options object used to hold kwArgs for instantiation.   See parse.options argument for details.
			// scripts: DomNode[]?
			//		Array of `<script type="dojo/*">` DOMNodes.  If not specified, will search for `<script>` tags inside node.
			// inherited: Object?
			//		Settings from dir=rtl or lang=... on a node above this node.   Overrides options.inherited.
			// returns:
			//		Instance or Promise for the instance, if markupFactory() itself returned a promise

			var proto = ctor && ctor.prototype;
			options = options || {};

			// Setup hash to hold parameter settings for this widget.	Start with the parameter
			// settings inherited from ancestors ("dir" and "lang").
			// Inherited setting may later be overridden by explicit settings on node itself.
			var params = {};

			if(options.defaults){
				// settings for the document itself (or whatever subtree is being parsed)
				dlang.mixin(params, options.defaults);
			}
			if(inherited){
				// settings from dir=rtl or lang=... on a node above this node
				dlang.mixin(params, inherited);
			}

			// Get list of attributes explicitly listed in the markup
			var attributes;
			if(has("dom-attributes-explicit")){
				// Standard path to get list of user specified attributes
				attributes = node.attributes;
			}else if(has("dom-attributes-specified-flag")){
				// Special processing needed for IE8, to skip a few faux values in attributes[]
				attributes = darray.filter(node.attributes, function(a){
					return a.specified;
				});
			}else{
				// Special path for IE6-7, avoid (sometimes >100) bogus entries in node.attributes
				var clone = /^input$|^img$/i.test(node.nodeName) ? node : node.cloneNode(false),
					attrs = clone.outerHTML.replace(/=[^\s"']+|="[^"]*"|='[^']*'/g, "").replace(/^\s*<[a-zA-Z0-9]*\s*/, "").replace(/\s*>.*$/, "");

				attributes = darray.map(attrs.split(/\s+/), function(name){
					var lcName = name.toLowerCase();
					return {
						name: name,
						// getAttribute() doesn't work for button.value, returns innerHTML of button.
						// but getAttributeNode().value doesn't work for the form.encType or li.value
						value: (node.nodeName == "LI" && name == "value") || lcName == "enctype" ?
							node.getAttribute(lcName) : node.getAttributeNode(lcName).value
					};
				});
			}

			// Hash to convert scoped attribute name (ex: data-dojo17-params) to something friendly (ex: data-dojo-params)
			// TODO: remove scope for 2.0
			var scope = options.scope || dojo._scopeName,
				attrData = "data-" + scope + "-", // typically "data-dojo-"
				hash = {};
			if(scope !== "dojo"){
				hash[attrData + "props"] = "data-dojo-props";
				hash[attrData + "type"] = "data-dojo-type";
				hash[attrData + "mixins"] = "data-dojo-mixins";
				hash[scope + "type"] = "dojotype";
				hash[attrData + "id"] = "data-dojo-id";
			}

			// Read in attributes and process them, including data-dojo-props, data-dojo-type,
			// dojoAttachPoint, etc., as well as normal foo=bar attributes.
			var i = 0, item, funcAttrs = [], jsname, extra;
			while(item = attributes[i++]){
				var name = item.name,
					lcName = name.toLowerCase(),
					value = item.value;

				switch(hash[lcName] || lcName){
				// Already processed, just ignore
				case "data-dojo-type":
				case "dojotype":
				case "data-dojo-mixins":
					break;

				// Data-dojo-props.   Save for later to make sure it overrides direct foo=bar settings
				case "data-dojo-props":
					extra = value;
					break;

				// data-dojo-id or jsId. TODO: drop jsId in 2.0
				case "data-dojo-id":
				case "jsid":
					jsname = value;
					break;

				// For the benefit of _Templated
				case "data-dojo-attach-point":
				case "dojoattachpoint":
					params.dojoAttachPoint = value;
					break;
				case "data-dojo-attach-event":
				case "dojoattachevent":
					params.dojoAttachEvent = value;
					break;

				// Special parameter handling needed for IE
				case "class":
					params["class"] = node.className;
					break;
				case "style":
					params["style"] = node.style && node.style.cssText;
					break;
				default:
					// Normal attribute, ex: value="123"

					// Find attribute in widget corresponding to specified name.
					// May involve case conversion, ex: onclick --> onClick
					if(!(name in proto)){
						var map = getNameMap(ctor);
						name = map[lcName] || name;
					}

					// Set params[name] to value, doing type conversion
					if(name in proto){
						switch(typeof proto[name]){
						case "string":
							params[name] = value;
							break;
						case "number":
							params[name] = value.length ? Number(value) : NaN;
							break;
						case "boolean":
							// for checked/disabled value might be "" or "checked".	 interpret as true.
							params[name] = value.toLowerCase() != "false";
							break;
						case "function":
							if(value === "" || value.search(/[^\w\.]+/i) != -1){
								// The user has specified some text for a function like "return x+5"
								params[name] = new Function(value);
							}else{
								// The user has specified the name of a global function like "myOnClick"
								// or a single word function "return"
								params[name] = dlang.getObject(value, false) || new Function(value);
							}
							funcAttrs.push(name);	// prevent "double connect", see #15026
							break;
						default:
							var pVal = proto[name];
							params[name] =
								(pVal && "length" in pVal) ? (value ? value.split(/\s*,\s*/) : []) :	// array
									(pVal instanceof Date) ?
										(value == "" ? new Date("") :	// the NaN of dates
										value == "now" ? new Date() :	// current date
										dates.fromISOString(value)) :
								(pVal instanceof _Url) ? (dojo.baseUrl + value) :
								myEval(value);
						}
					}else{
						params[name] = value;
					}
				}
			}

			// Remove function attributes from DOMNode to prevent "double connect" problem, see #15026.
			// Do this as a separate loop since attributes[] is often a live collection (depends on the browser though).
			for(var j = 0; j < funcAttrs.length; j++){
				var lcfname = funcAttrs[j].toLowerCase();
				node.removeAttribute(lcfname);
				node[lcfname] = null;
			}

			// Mix things found in data-dojo-props into the params, overriding any direct settings
			if(extra){
				try{
					extra = myEval.call(options.propsThis, "{" + extra + "}");
					dlang.mixin(params, extra);
				}catch(e){
					// give the user a pointer to their invalid parameters. FIXME: can we kill this in production?
					throw new Error(e.toString() + " in data-dojo-props='" + extra + "'");
				}
			}

			// Any parameters specified in "mixin" override everything else.
			dlang.mixin(params, mixin);

			// Get <script> nodes associated with this widget, if they weren't specified explicitly
			if(!scripts){
				scripts = (ctor && (ctor._noScript || proto._noScript) ? [] : query("> script[type^='dojo/']", node));
			}

			// Process <script type="dojo/*"> script tags
			// <script type="dojo/method" data-dojo-event="foo"> tags are added to params, and passed to
			// the widget on instantiation.
			// <script type="dojo/method"> tags (with no event) are executed after instantiation
			// <script type="dojo/connect" data-dojo-event="foo"> tags are dojo.connected after instantiation,
			// and likewise with <script type="dojo/aspect" data-dojo-method="foo">
			// <script type="dojo/watch" data-dojo-prop="foo"> tags are dojo.watch after instantiation
			// <script type="dojo/on" data-dojo-event="foo"> tags are dojo.on after instantiation
			// note: dojo/* script tags cannot exist in self closing widgets, like <input />
			var aspects = [],	// aspects to connect after instantiation
				calls = [],		// functions to call after instantiation
				watches = [],  // functions to watch after instantiation
				ons = []; // functions to on after instantiation

			if(scripts){
				for(i = 0; i < scripts.length; i++){
					var script = scripts[i];
					node.removeChild(script);
					// FIXME: drop event="" support in 2.0. use data-dojo-event="" instead
					var event = (script.getAttribute(attrData + "event") || script.getAttribute("event")),
						prop = script.getAttribute(attrData + "prop"),
						method = script.getAttribute(attrData + "method"),
						advice = script.getAttribute(attrData + "advice"),
						scriptType = script.getAttribute("type"),
						nf = this._functionFromScript(script, attrData);
					if(event){
						if(scriptType == "dojo/connect"){
							aspects.push({ method: event, func: nf });
						}else if(scriptType == "dojo/on"){
							ons.push({ event: event, func: nf });
						}else{
							// <script type="dojo/method" data-dojo-event="foo">
							// TODO for 2.0: use data-dojo-method="foo" instead (also affects dijit/Declaration)
							params[event] = nf;
						}
					}else if(scriptType == "dojo/aspect"){
						aspects.push({ method: method, advice: advice, func: nf });
					}else if(scriptType == "dojo/watch"){
						watches.push({ prop: prop, func: nf });
					}else{
						calls.push(nf);
					}
				}
			}

			// create the instance
			var markupFactory = ctor.markupFactory || proto.markupFactory;
			var instance = markupFactory ? markupFactory(params, node, ctor) : new ctor(params, node);

			function onInstantiate(instance){
				// map it to the JS namespace if that makes sense
				if(jsname){
					dlang.setObject(jsname, instance);
				}

				// process connections and startup functions
				for(i = 0; i < aspects.length; i++){
					aspect[aspects[i].advice || "after"](instance, aspects[i].method, dlang.hitch(instance, aspects[i].func), true);
				}
				for(i = 0; i < calls.length; i++){
					calls[i].call(instance);
				}
				for(i = 0; i < watches.length; i++){
					instance.watch(watches[i].prop, watches[i].func);
				}
				for(i = 0; i < ons.length; i++){
					don(instance, ons[i].event, ons[i].func);
				}

				return instance;
			}

			if(instance.then){
				return instance.then(onInstantiate);
			}else{
				return onInstantiate(instance);
			}
		},

		scan: function(root, options){
			// summary:
			//		Scan a DOM tree and return an array of objects representing the DOMNodes
			//		that need to be turned into widgets.
			// description:
			//		Search specified node (or document root node) recursively for class instances
			//		and return an array of objects that represent potential widgets to be
			//		instantiated. Searches for either data-dojo-type="MID" or dojoType="MID" where
			//		"MID" is a module ID like "dijit/form/Button" or a fully qualified Class name
			//		like "dijit/form/Button".  If the MID is not currently available, scan will
			//		attempt to require() in the module.
			//
			//		See parser.parse() for details of markup.
			// root: DomNode?
			//		A default starting root node from which to start the parsing. Can be
			//		omitted, defaulting to the entire document. If omitted, the `options`
			//		object can be passed in this place. If the `options` object has a
			//		`rootNode` member, that is used.
			// options: Object
			//		a kwArgs options object, see parse() for details
			//
			// returns: Promise
			//		A promise that is resolved with the nodes that have been parsed.

			var list = [], // Output List
				mids = [], // An array of modules that are not yet loaded
				midsHash = {}; // Used to keep the mids array unique

			var dojoType = (options.scope || dojo._scopeName) + "Type", // typically "dojoType"
				attrData = "data-" + (options.scope || dojo._scopeName) + "-", // typically "data-dojo-"
				dataDojoType = attrData + "type", // typically "data-dojo-type"
				dataDojoTextDir = attrData + "textdir", // typically "data-dojo-textdir"
				dataDojoMixins = attrData + "mixins";					// typically "data-dojo-mixins"

			// Info on DOMNode currently being processed
			var node = root.firstChild;

			// Info on parent of DOMNode currently being processed
			//	- inherited: dir, lang, and textDir setting of parent, or inherited by parent
			//	- parent: pointer to identical structure for my parent (or null if no parent)
			//	- scripts: if specified, collects <script type="dojo/..."> type nodes from children
			var inherited = options.inherited;
			if(!inherited){
				function findAncestorAttr(node, attr){
					return (node.getAttribute && node.getAttribute(attr)) ||
						(node.parentNode && findAncestorAttr(node.parentNode, attr));
				}

				inherited = {
					dir: findAncestorAttr(root, "dir"),
					lang: findAncestorAttr(root, "lang"),
					textDir: findAncestorAttr(root, dataDojoTextDir)
				};
				for(var key in inherited){
					if(!inherited[key]){
						delete inherited[key];
					}
				}
			}

			// Metadata about parent node
			var parent = {
				inherited: inherited
			};

			// For collecting <script type="dojo/..."> type nodes (when null, we don't need to collect)
			var scripts;

			// when true, only look for <script type="dojo/..."> tags, and don't recurse to children
			var scriptsOnly;

			function getEffective(parent){
				// summary:
				//		Get effective dir, lang, textDir settings for specified obj
				//		(matching "parent" object structure above), and do caching.
				//		Take care not to return null entries.
				if(!parent.inherited){
					parent.inherited = {};
					var node = parent.node,
						grandparent = getEffective(parent.parent);
					var inherited = {
						dir: node.getAttribute("dir") || grandparent.dir,
						lang: node.getAttribute("lang") || grandparent.lang,
						textDir: node.getAttribute(dataDojoTextDir) || grandparent.textDir
					};
					for(var key in inherited){
						if(inherited[key]){
							parent.inherited[key] = inherited[key];
						}
					}
				}
				return parent.inherited;
			}

			// DFS on DOM tree, collecting nodes with data-dojo-type specified.
			while(true){
				if(!node){
					// Finished this level, continue to parent's next sibling
					if(!parent || !parent.node){
						break;
					}
					node = parent.node.nextSibling;
					scriptsOnly = false;
					parent = parent.parent;
					scripts = parent.scripts;
					continue;
				}

				if(node.nodeType != 1){
					// Text or comment node, skip to next sibling
					node = node.nextSibling;
					continue;
				}

				if(scripts && node.nodeName.toLowerCase() == "script"){
					// Save <script type="dojo/..."> for parent, then continue to next sibling
					type = node.getAttribute("type");
					if(type && /^dojo\/\w/i.test(type)){
						scripts.push(node);
					}
					node = node.nextSibling;
					continue;
				}
				if(scriptsOnly){
					// scriptsOnly flag is set, we have already collected scripts if the parent wants them, so now we shouldn't
					// continue further analysis of the node and will continue to the next sibling
					node = node.nextSibling;
					continue;
				}

				// Check for data-dojo-type attribute, fallback to backward compatible dojoType
				// TODO: Remove dojoType in 2.0
				var type = node.getAttribute(dataDojoType) || node.getAttribute(dojoType);

				// Short circuit for leaf nodes containing nothing [but text]
				var firstChild = node.firstChild;
				if(!type && (!firstChild || (firstChild.nodeType == 3 && !firstChild.nextSibling))){
					node = node.nextSibling;
					continue;
				}

				// Meta data about current node
				var current;

				var ctor = null;
				if(type){
					// If dojoType/data-dojo-type specified, add to output array of nodes to instantiate.
					var mixinsValue = node.getAttribute(dataDojoMixins),
						types = mixinsValue ? [type].concat(mixinsValue.split(/\s*,\s*/)) : [type];

					// Note: won't find classes declared via dojo/Declaration or any modules that haven't been
					// loaded yet so use try/catch to avoid throw from require()
					try{
						ctor = getCtor(types, options.contextRequire);
					}catch(e){}

					// If the constructor was not found, check to see if it has modules that can be loaded
					if(!ctor){
						darray.forEach(types, function(t){
							if(~t.indexOf('/') && !midsHash[t]){
								// If the type looks like a MID and it currently isn't in the array of MIDs to load, add it.
								midsHash[t] = true;
								mids[mids.length] = t;
							}
						});
					}

					var childScripts = ctor && !ctor.prototype._noScript ? [] : null; // <script> nodes that are parent's children

					// Setup meta data about this widget node, and save it to list of nodes to instantiate
					current = {
						types: types,
						ctor: ctor,
						parent: parent,
						node: node,
						scripts: childScripts
					};
					current.inherited = getEffective(current); // dir & lang settings for current node, explicit or inherited
					list.push(current);
				}else{
					// Meta data about this non-widget node
					current = {
						node: node,
						scripts: scripts,
						parent: parent
					};
				}

				// Recurse, collecting <script type="dojo/..."> children, and also looking for
				// descendant nodes with dojoType specified (unless the widget has the stopParser flag).
				// When finished with children, go to my next sibling.
				scripts = childScripts;
				scriptsOnly = node.stopParser || (ctor && ctor.prototype.stopParser && !(options.template));
				parent = current;
				node = firstChild;
			}

			var d = new Deferred();

			// If there are modules to load then require them in
			if(mids.length){
				// Warn that there are modules being auto-required
				if(has("dojo-debug-messages")){
					console.warn("WARNING: Modules being Auto-Required: " + mids.join(", "));
				}
				var r = options.contextRequire || require;
				r(mids, function(){
					// Go through list of widget nodes, filling in missing constructors, and filtering out nodes that shouldn't
					// be instantiated due to a stopParser flag on an ancestor that we belatedly learned about due to
					// auto-require of a module like ContentPane.   Assumes list is in DFS order.
					d.resolve(darray.filter(list, function(widget){
						if(!widget.ctor){
							// Attempt to find the constructor again.   Still won't find classes defined via
							// dijit/Declaration so need to try/catch.
							try{
								widget.ctor = getCtor(widget.types, options.contextRequire);
							}catch(e){}
						}

						// Get the parent widget
						var parent = widget.parent;
						while(parent && !parent.types){
							parent = parent.parent;
						}

						// Return false if this node should be skipped due to stopParser on an ancestor.
						// Since list[] is in DFS order, this loop will always set parent.instantiateChildren before
						// trying to compute widget.instantiate.
						var proto = widget.ctor && widget.ctor.prototype;
						widget.instantiateChildren = !(proto && proto.stopParser && !(options.template));
						widget.instantiate = !parent || (parent.instantiate && parent.instantiateChildren);
						return widget.instantiate;
					}));
				});
			}else{
				// There were no modules to load, so just resolve with the parsed nodes.   This separate code path is for
				// efficiency, to avoid running the require() and the callback code above.
				d.resolve(list);
			}

			// Return the promise
			return d.promise;
		},

		_require: function(/*DOMNode*/ script, /*Object?*/ options){
			// summary:
			//		Helper for _scanAMD().  Takes a `<script type=dojo/require>bar: "acme/bar", ...</script>` node,
			//		calls require() to load the specified modules and (asynchronously) assign them to the specified global
			//		variables, and returns a Promise for when that operation completes.
			//
			//		In the example above, it is effectively doing a require(["acme/bar", ...], function(a){ bar = a; }).

			var hash = myEval("{" + script.innerHTML + "}"), // can't use dojo/json::parse() because maybe no quotes
				vars = [],
				mids = [],
				d = new Deferred();

			var contextRequire = (options && options.contextRequire) || require;

			for(var name in hash){
				vars.push(name);
				mids.push(hash[name]);
			}

			contextRequire(mids, function(){
				for(var i = 0; i < vars.length; i++){
					dlang.setObject(vars[i], arguments[i]);
				}
				d.resolve(arguments);
			});

			return d.promise;
		},

		_scanAmd: function(root, options){
			// summary:
			//		Scans the DOM for any declarative requires and returns their values.
			// description:
			//		Looks for `<script type=dojo/require>bar: "acme/bar", ...</script>` node, calls require() to load the
			//		specified modules and (asynchronously) assign them to the specified global variables,
			//		and returns a Promise for when those operations complete.
			// root: DomNode
			//		The node to base the scan from.
			// options: Object?
			//		a kwArgs options object, see parse() for details

			// Promise that resolves when all the <script type=dojo/require> nodes have finished loading.
			var deferred = new Deferred(),
				promise = deferred.promise;
			deferred.resolve(true);

			var self = this;
			query("script[type='dojo/require']", root).forEach(function(node){
				// Fire off require() call for specified modules.  Chain this require to fire after
				// any previous requires complete, so that layers can be loaded before individual module require()'s fire.
				promise = promise.then(function(){
					return self._require(node, options);
				});

				// Remove from DOM so it isn't seen again
				node.parentNode.removeChild(node);
			});

			return promise;
		},

		parse: function(rootNode, options){
			// summary:
			//		Scan the DOM for class instances, and instantiate them.
			// description:
			//		Search specified node (or root node) recursively for class instances,
			//		and instantiate them. Searches for either data-dojo-type="Class" or
			//		dojoType="Class" where "Class" is a a fully qualified class name,
			//		like `dijit/form/Button`
			//
			//		Using `data-dojo-type`:
			//		Attributes using can be mixed into the parameters used to instantiate the
			//		Class by using a `data-dojo-props` attribute on the node being converted.
			//		`data-dojo-props` should be a string attribute to be converted from JSON.
			//
			//		Using `dojoType`:
			//		Attributes are read from the original domNode and converted to appropriate
			//		types by looking up the Class prototype values. This is the default behavior
			//		from Dojo 1.0 to Dojo 1.5. `dojoType` support is deprecated, and will
			//		go away in Dojo 2.0.
			// rootNode: DomNode?
			//		A default starting root node from which to start the parsing. Can be
			//		omitted, defaulting to the entire document. If omitted, the `options`
			//		object can be passed in this place. If the `options` object has a
			//		`rootNode` member, that is used.
			// options: Object?
			//		A hash of options.
			//
			//		- noStart: Boolean?:
			//			when set will prevent the parser from calling .startup()
			//			when locating the nodes.
			//		- rootNode: DomNode?:
			//			identical to the function's `rootNode` argument, though
			//			allowed to be passed in via this `options object.
			//		- template: Boolean:
			//			If true, ignores ContentPane's stopParser flag and parses contents inside of
			//			a ContentPane inside of a template.   This allows dojoAttachPoint on widgets/nodes
			//			nested inside the ContentPane to work.
			//		- inherited: Object:
			//			Hash possibly containing dir and lang settings to be applied to
			//			parsed widgets, unless there's another setting on a sub-node that overrides
			//		- scope: String:
			//			Root for attribute names to search for.   If scopeName is dojo,
			//			will search for data-dojo-type (or dojoType).   For backwards compatibility
			//			reasons defaults to dojo._scopeName (which is "dojo" except when
			//			multi-version support is used, when it will be something like dojo16, dojo20, etc.)
			//		- propsThis: Object:
			//			If specified, "this" referenced from data-dojo-props will refer to propsThis.
			//			Intended for use from the widgets-in-template feature of `dijit._WidgetsInTemplateMixin`
			//		- contextRequire: Function:
			//			If specified, this require is utilised for looking resolving modules instead of the
			//			`dojo/parser` context `require()`.  Intended for use from the widgets-in-template feature of
			//			`dijit._WidgetsInTemplateMixin`.
			// returns: Mixed
			//		Returns a blended object that is an array of the instantiated objects, but also can include
			//		a promise that is resolved with the instantiated objects.  This is done for backwards
			//		compatibility.  If the parser auto-requires modules, it will always behave in a promise
			//		fashion and `parser.parse().then(function(instances){...})` should be used.
			// example:
			//		Parse all widgets on a page:
			//	|		parser.parse();
			// example:
			//		Parse all classes within the node with id="foo"
			//	|		parser.parse(dojo.byId('foo'));
			// example:
			//		Parse all classes in a page, but do not call .startup() on any
			//		child
			//	|		parser.parse({ noStart: true })
			// example:
			//		Parse all classes in a node, but do not call .startup()
			//	|		parser.parse(someNode, { noStart:true });
			//	|		// or
			//	|		parser.parse({ noStart:true, rootNode: someNode });

			// determine the root node and options based on the passed arguments.
			if(rootNode && typeof rootNode != "string" && !("nodeType" in rootNode)){
				// If called as parse(options) rather than parse(), parse(rootNode), or parse(rootNode, options)...
				options = rootNode;
				rootNode = options.rootNode;
			}
			var root = rootNode ? dom.byId(rootNode) : dwindow.body();
			options = options || {};

			var mixin = options.template ? { template: true } : {},
				instances = [],
				self = this;

			// First scan for any <script type=dojo/require> nodes, and execute.
			// Then scan for all nodes with data-dojo-type, and load any unloaded modules.
			// Then build the object instances.  Add instances to already existing (but empty) instances[] array,
			// which may already have been returned to caller.  Also, use otherwise to collect and throw any errors
			// that occur during the parse().
			var p =
				this._scanAmd(root, options).then(function(){
					return self.scan(root, options);
				}).then(function(parsedNodes){
					return self._instantiate(parsedNodes, mixin, options, true);
				}).then(function(_instances){
					// Copy the instances into the instances[] array we declared above, and are accessing as
					// our return value.
					return instances = instances.concat(_instances);
				}).otherwise(function(e){
					// TODO Modify to follow better pattern for promise error management when available
					console.error("dojo/parser::parse() error", e);
					throw e;
				});

			// Blend the array with the promise
			dlang.mixin(instances, p);
			return instances;
		}
	};

	if(has("extend-dojo")){
		dojo.parser = parser;
	}

	// Register the parser callback. It should be the first callback
	// after the a11y test.
	if(config.parseOnLoad){
		ready(100, parser, "parse");
	}

	return parser;
}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/dojo/promise/all.js":
/*!******************************************!*\
  !*** ./node_modules/dojo/promise/all.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../_base/array */ "./node_modules/dojo/_base/array.js"),
	__webpack_require__(/*! ../_base/lang */ "./node_modules/dojo/_base/lang.js"),
	__webpack_require__(/*! ../Deferred */ "./node_modules/dojo/Deferred.js"),
	__webpack_require__(/*! ../when */ "./node_modules/dojo/when.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(array, lang, Deferred, when){
	"use strict";

	// module:
	//		dojo/promise/all

	var some = array.some;

	return function all(objectOrArray){
		// summary:
		//		Takes multiple promises and returns a new promise that is fulfilled
		//		when all promises have been resolved or one has been rejected.
		// description:
		//		Takes multiple promises and returns a new promise that is fulfilled
		//		when all promises have been resolved or one has been rejected. If one of
		//		the promises is rejected, the returned promise is also rejected. Canceling
		//		the returned promise will *not* cancel any passed promises.
		// objectOrArray: Object|Array?
		//		The promise will be fulfilled with a list of results if invoked with an
		//		array, or an object of results when passed an object (using the same
		//		keys). If passed neither an object or array it is resolved with an
		//		undefined value.
		// returns: dojo/promise/Promise

		var object, array;
		if(lang.isArray(objectOrArray)){
			array = objectOrArray;
		}else if(objectOrArray && typeof objectOrArray === "object"){
			object = objectOrArray;
		}

		var results;
		var keyLookup = [];
		if(object){
			array = [];
			for(var key in object){
				if(Object.hasOwnProperty.call(object, key)){
					keyLookup.push(key);
					array.push(object[key]);
				}
			}
			results = {};
		}else if(array){
			results = [];
		}

		if(!array || !array.length){
			return new Deferred().resolve(results);
		}

		var deferred = new Deferred();
		deferred.promise.always(function(){
			results = keyLookup = null;
		});
		var waiting = array.length;
		some(array, function(valueOrPromise, index){
			if(!object){
				keyLookup.push(index);
			}
			when(valueOrPromise, function(value){
				if(!deferred.isFulfilled()){
					results[keyLookup[index]] = value;
					if(--waiting === 0){
						deferred.resolve(results);
					}
				}
			}, deferred.reject);
			return deferred.isFulfilled();
		});
		return deferred.promise;	// dojo/promise/Promise
	};
}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9qby9fYmFzZS91cmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Rvam8vZGF0ZS9zdGFtcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9qby9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Rvam8vcHJvbWlzZS9hbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlHQUFPLENBQUMsMEVBQVUsQ0FBQyxtQ0FBRTtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsYUFBYTtBQUM5QixlQUFlLFVBQVU7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGlCQUFpQjs7QUFFdkQ7QUFDQSxDQUFDO0FBQUEsb0dBQUM7Ozs7Ozs7Ozs7OztBQzVHRixpR0FBTyxD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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE1BQU07QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRztBQUNILDBCQUEwQjtBQUMxQjtBQUNBLENBQUM7QUFBQSxvR0FBQyIsImZpbGUiOiIxLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImRlZmluZShbXCIuL2tlcm5lbFwiXSwgZnVuY3Rpb24oZG9qbyl7XG5cdC8vIG1vZHVsZTpcblx0Ly9cdFx0ZG9qby91cmxcblxuXHR2YXJcblx0XHRvcmUgPSBuZXcgUmVnRXhwKFwiXigoW146Lz8jXSspOik/KC8vKFteLz8jXSopKT8oW14/I10qKShcXFxcPyhbXiNdKikpPygjKC4qKSk/JFwiKSxcblx0XHRpcmUgPSBuZXcgUmVnRXhwKFwiXigoKFteXFxcXFs6XSspOik/KFteQF0rKUApPyhcXFxcWyhbXlxcXFxdXSspXFxcXF18KFteXFxcXFs6XSopKSg6KFswLTldKykpPyRcIiksXG5cdFx0X1VybCA9IGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgbiA9IG51bGwsXG5cdFx0XHRcdF9hID0gYXJndW1lbnRzLFxuXHRcdFx0XHR1cmkgPSBbX2FbMF1dO1xuXHRcdFx0Ly8gcmVzb2x2ZSB1cmkgY29tcG9uZW50cyByZWxhdGl2ZSB0byBlYWNoIG90aGVyXG5cdFx0XHRmb3IodmFyIGkgPSAxOyBpPF9hLmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0aWYoIV9hW2ldKXsgY29udGludWU7IH1cblxuXHRcdFx0XHQvLyBTYWZhcmkgZG9lc24ndCBzdXBwb3J0IHRoaXMuY29uc3RydWN0b3Igc28gd2UgaGF2ZSB0byBiZSBleHBsaWNpdFxuXHRcdFx0XHQvLyBGSVhNRTogVHJhY2tlZCAoYW5kIGZpeGVkKSBpbiBXZWJraXQgYnVnIDM1MzcuXG5cdFx0XHRcdC8vXHRcdGh0dHA6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTM1Mzdcblx0XHRcdFx0dmFyIHJlbG9iaiA9IG5ldyBfVXJsKF9hW2ldK1wiXCIpLFxuXHRcdFx0XHRcdHVyaW9iaiA9IG5ldyBfVXJsKHVyaVswXStcIlwiKTtcblxuXHRcdFx0XHRpZihcblx0XHRcdFx0XHRyZWxvYmoucGF0aCA9PSBcIlwiICYmXG5cdFx0XHRcdFx0IXJlbG9iai5zY2hlbWUgJiZcblx0XHRcdFx0XHQhcmVsb2JqLmF1dGhvcml0eSAmJlxuXHRcdFx0XHRcdCFyZWxvYmoucXVlcnlcblx0XHRcdFx0KXtcblx0XHRcdFx0XHRpZihyZWxvYmouZnJhZ21lbnQgIT0gbil7XG5cdFx0XHRcdFx0XHR1cmlvYmouZnJhZ21lbnQgPSByZWxvYmouZnJhZ21lbnQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJlbG9iaiA9IHVyaW9iajtcblx0XHRcdFx0fWVsc2UgaWYoIXJlbG9iai5zY2hlbWUpe1xuXHRcdFx0XHRcdHJlbG9iai5zY2hlbWUgPSB1cmlvYmouc2NoZW1lO1xuXG5cdFx0XHRcdFx0aWYoIXJlbG9iai5hdXRob3JpdHkpe1xuXHRcdFx0XHRcdFx0cmVsb2JqLmF1dGhvcml0eSA9IHVyaW9iai5hdXRob3JpdHk7XG5cblx0XHRcdFx0XHRcdGlmKHJlbG9iai5wYXRoLmNoYXJBdCgwKSAhPSBcIi9cIil7XG5cdFx0XHRcdFx0XHRcdHZhciBwYXRoID0gdXJpb2JqLnBhdGguc3Vic3RyaW5nKDAsXG5cdFx0XHRcdFx0XHRcdFx0dXJpb2JqLnBhdGgubGFzdEluZGV4T2YoXCIvXCIpICsgMSkgKyByZWxvYmoucGF0aDtcblxuXHRcdFx0XHRcdFx0XHR2YXIgc2VncyA9IHBhdGguc3BsaXQoXCIvXCIpO1xuXHRcdFx0XHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgc2Vncy5sZW5ndGg7IGorKyl7XG5cdFx0XHRcdFx0XHRcdFx0aWYoc2Vnc1tqXSA9PSBcIi5cIil7XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBmbGF0dGVuIFwiLi9cIiByZWZlcmVuY2VzXG5cdFx0XHRcdFx0XHRcdFx0XHRpZihqID09IHNlZ3MubGVuZ3RoIC0gMSl7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNlZ3Nbal0gPSBcIlwiO1xuXHRcdFx0XHRcdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNlZ3Muc3BsaWNlKGosIDEpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRqLS07XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fWVsc2UgaWYoaiA+IDAgJiYgIShqID09IDEgJiYgc2Vnc1swXSA9PSBcIlwiKSAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0c2Vnc1tqXSA9PSBcIi4uXCIgJiYgc2Vnc1tqLTFdICE9IFwiLi5cIil7XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBmbGF0dGVuIFwiLi4vXCIgcmVmZXJlbmNlc1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYoaiA9PSAoc2Vncy5sZW5ndGggLSAxKSl7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNlZ3Muc3BsaWNlKGosIDEpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZWdzW2ogLSAxXSA9IFwiXCI7XG5cdFx0XHRcdFx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2Vncy5zcGxpY2UoaiAtIDEsIDIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRqIC09IDI7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHJlbG9iai5wYXRoID0gc2Vncy5qb2luKFwiL1wiKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR1cmkgPSBbXTtcblx0XHRcdFx0aWYocmVsb2JqLnNjaGVtZSl7XG5cdFx0XHRcdFx0dXJpLnB1c2gocmVsb2JqLnNjaGVtZSwgXCI6XCIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKHJlbG9iai5hdXRob3JpdHkpe1xuXHRcdFx0XHRcdHVyaS5wdXNoKFwiLy9cIiwgcmVsb2JqLmF1dGhvcml0eSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dXJpLnB1c2gocmVsb2JqLnBhdGgpO1xuXHRcdFx0XHRpZihyZWxvYmoucXVlcnkpe1xuXHRcdFx0XHRcdHVyaS5wdXNoKFwiP1wiLCByZWxvYmoucXVlcnkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKHJlbG9iai5mcmFnbWVudCl7XG5cdFx0XHRcdFx0dXJpLnB1c2goXCIjXCIsIHJlbG9iai5mcmFnbWVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy51cmkgPSB1cmkuam9pbihcIlwiKTtcblxuXHRcdFx0Ly8gYnJlYWsgdGhlIHVyaSBpbnRvIGl0cyBtYWluIGNvbXBvbmVudHNcblx0XHRcdHZhciByID0gdGhpcy51cmkubWF0Y2gob3JlKTtcblxuXHRcdFx0dGhpcy5zY2hlbWUgPSByWzJdIHx8IChyWzFdID8gXCJcIiA6IG4pO1xuXHRcdFx0dGhpcy5hdXRob3JpdHkgPSByWzRdIHx8IChyWzNdID8gXCJcIiA6IG4pO1xuXHRcdFx0dGhpcy5wYXRoID0gcls1XTsgLy8gY2FuIG5ldmVyIGJlIHVuZGVmaW5lZFxuXHRcdFx0dGhpcy5xdWVyeSA9IHJbN10gfHwgKHJbNl0gPyBcIlwiIDogbik7XG5cdFx0XHR0aGlzLmZyYWdtZW50XHQgPSByWzldIHx8IChyWzhdID8gXCJcIiA6IG4pO1xuXG5cdFx0XHRpZih0aGlzLmF1dGhvcml0eSAhPSBuKXtcblx0XHRcdFx0Ly8gc2VydmVyIGJhc2VkIG5hbWluZyBhdXRob3JpdHlcblx0XHRcdFx0ciA9IHRoaXMuYXV0aG9yaXR5Lm1hdGNoKGlyZSk7XG5cblx0XHRcdFx0dGhpcy51c2VyID0gclszXSB8fCBuO1xuXHRcdFx0XHR0aGlzLnBhc3N3b3JkID0gcls0XSB8fCBuO1xuXHRcdFx0XHR0aGlzLmhvc3QgPSByWzZdIHx8IHJbN107IC8vIGlwdjYgfHwgaXB2NFxuXHRcdFx0XHR0aGlzLnBvcnQgPSByWzldIHx8IG47XG5cdFx0XHR9XG5cdFx0fTtcblx0X1VybC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpcy51cmk7IH07XG5cblx0cmV0dXJuIGRvam8uX1VybCA9IF9Vcmw7XG59KTtcbiIsImRlZmluZShbXCIuLi9fYmFzZS9sYW5nXCIsIFwiLi4vX2Jhc2UvYXJyYXlcIl0sIGZ1bmN0aW9uKGxhbmcsIGFycmF5KXtcblxuLy8gbW9kdWxlOlxuLy9cdFx0ZG9qby9kYXRlL3N0YW1wXG5cbnZhciBzdGFtcCA9IHtcblx0Ly8gc3VtbWFyeTpcblx0Ly9cdFx0VE9ET0Ncbn07XG5sYW5nLnNldE9iamVjdChcImRvam8uZGF0ZS5zdGFtcFwiLCBzdGFtcCk7XG5cbi8vIE1ldGhvZHMgdG8gY29udmVydCBkYXRlcyB0byBvciBmcm9tIGEgd2lyZSAoc3RyaW5nKSBmb3JtYXQgdXNpbmcgd2VsbC1rbm93biBjb252ZW50aW9uc1xuXG5zdGFtcC5mcm9tSVNPU3RyaW5nID0gZnVuY3Rpb24oLypTdHJpbmcqLyBmb3JtYXR0ZWRTdHJpbmcsIC8qTnVtYmVyPyovIGRlZmF1bHRUaW1lKXtcblx0Ly8gc3VtbWFyeTpcblx0Ly9cdFx0UmV0dXJucyBhIERhdGUgb2JqZWN0IGdpdmVuIGEgc3RyaW5nIGZvcm1hdHRlZCBhY2NvcmRpbmcgdG8gYSBzdWJzZXQgb2YgdGhlIElTTy04NjAxIHN0YW5kYXJkLlxuXHQvL1xuXHQvLyBkZXNjcmlwdGlvbjpcblx0Ly9cdFx0QWNjZXB0cyBhIHN0cmluZyBmb3JtYXR0ZWQgYWNjb3JkaW5nIHRvIGEgcHJvZmlsZSBvZiBJU084NjAxIGFzIGRlZmluZWQgYnlcblx0Ly9cdFx0W1JGQzMzMzldKGh0dHA6Ly93d3cuaWV0Zi5vcmcvcmZjL3JmYzMzMzkudHh0KSwgZXhjZXB0IHRoYXQgcGFydGlhbCBpbnB1dCBpcyBhbGxvd2VkLlxuXHQvL1x0XHRDYW4gYWxzbyBwcm9jZXNzIGRhdGVzIGFzIHNwZWNpZmllZCBbYnkgdGhlIFczQ10oaHR0cDovL3d3dy53My5vcmcvVFIvTk9URS1kYXRldGltZSlcblx0Ly9cdFx0VGhlIGZvbGxvd2luZyBjb21iaW5hdGlvbnMgYXJlIHZhbGlkOlxuXHQvL1xuXHQvL1x0XHQtIGRhdGVzIG9ubHlcblx0Ly9cdFx0XHQtIHl5eXlcblx0Ly9cdFx0XHQtIHl5eXktTU1cblx0Ly9cdFx0XHQtIHl5eXktTU0tZGRcblx0Ly9cdFx0LSB0aW1lcyBvbmx5LCB3aXRoIGFuIG9wdGlvbmFsIHRpbWUgem9uZSBhcHBlbmRlZFxuXHQvL1x0XHRcdC0gVEhIOm1tXG5cdC8vXHRcdFx0LSBUSEg6bW06c3Ncblx0Ly9cdFx0XHQtIFRISDptbTpzcy5TU1Ncblx0Ly9cdFx0LSBhbmQgXCJkYXRldGltZXNcIiB3aGljaCBjb3VsZCBiZSBhbnkgY29tYmluYXRpb24gb2YgdGhlIGFib3ZlXG5cdC8vXG5cdC8vXHRcdHRpbWV6b25lcyBtYXkgYmUgc3BlY2lmaWVkIGFzIFogKGZvciBVVEMpIG9yICsvLSBmb2xsb3dlZCBieSBhIHRpbWUgZXhwcmVzc2lvbiBISDptbVxuXHQvL1x0XHRBc3N1bWVzIHRoZSBsb2NhbCB0aW1lIHpvbmUgaWYgbm90IHNwZWNpZmllZC4gIERvZXMgbm90IHZhbGlkYXRlLiAgSW1wcm9wZXJseSBmb3JtYXR0ZWRcblx0Ly9cdFx0aW5wdXQgbWF5IHJldHVybiBudWxsLiAgQXJndW1lbnRzIHdoaWNoIGFyZSBvdXQgb2YgYm91bmRzIHdpbGwgYmUgaGFuZGxlZFxuXHQvL1x0XHRieSB0aGUgRGF0ZSBjb25zdHJ1Y3RvciAoZS5nLiBKYW51YXJ5IDMybmQgdHlwaWNhbGx5IGdldHMgcmVzb2x2ZWQgdG8gRmVicnVhcnkgMXN0KVxuXHQvL1x0XHRPbmx5IHllYXJzIGJldHdlZW4gMTAwIGFuZCA5OTk5IGFyZSBzdXBwb3J0ZWQuXG4gIFx0Ly8gZm9ybWF0dGVkU3RyaW5nOlxuXHQvL1x0XHRBIHN0cmluZyBzdWNoIGFzIDIwMDUtMDYtMzBUMDg6MDU6MDAtMDc6MDAgb3IgMjAwNS0wNi0zMCBvciBUMDg6MDU6MDBcblx0Ly8gZGVmYXVsdFRpbWU6XG5cdC8vXHRcdFVzZWQgZm9yIGRlZmF1bHRzIGZvciBmaWVsZHMgb21pdHRlZCBpbiB0aGUgZm9ybWF0dGVkU3RyaW5nLlxuXHQvL1x0XHRVc2VzIDE5NzAtMDEtMDFUMDA6MDA6MDAuMFogYnkgZGVmYXVsdC5cblxuXHRpZighc3RhbXAuX2lzb1JlZ0V4cCl7XG5cdFx0c3RhbXAuX2lzb1JlZ0V4cCA9XG4vL1RPRE86IGNvdWxkIGJlIG1vcmUgcmVzdHJpY3RpdmUgYW5kIGNoZWNrIGZvciAwMC01OSwgZXRjLlxuXHRcdFx0L14oPzooXFxkezR9KSg/Oi0oXFxkezJ9KSg/Oi0oXFxkezJ9KSk/KT8pPyg/OlQoXFxkezJ9KTooXFxkezJ9KSg/OjooXFxkezJ9KSguXFxkKyk/KT8oKD86WystXShcXGR7Mn0pOihcXGR7Mn0pKXxaKT8pPyQvO1xuXHR9XG5cblx0dmFyIG1hdGNoID0gc3RhbXAuX2lzb1JlZ0V4cC5leGVjKGZvcm1hdHRlZFN0cmluZyksXG5cdFx0cmVzdWx0ID0gbnVsbDtcblxuXHRpZihtYXRjaCl7XG5cdFx0bWF0Y2guc2hpZnQoKTtcblx0XHRpZihtYXRjaFsxXSl7bWF0Y2hbMV0tLTt9IC8vIEphdmFzY3JpcHQgRGF0ZSBtb250aHMgYXJlIDAtYmFzZWRcblx0XHRpZihtYXRjaFs2XSl7bWF0Y2hbNl0gKj0gMTAwMDt9IC8vIEphdmFzY3JpcHQgRGF0ZSBleHBlY3RzIGZyYWN0aW9uYWwgc2Vjb25kcyBhcyBtaWxsaXNlY29uZHNcblxuXHRcdGlmKGRlZmF1bHRUaW1lKXtcblx0XHRcdC8vIG1peCBpbiBkZWZhdWx0VGltZS4gIFJlbGF0aXZlbHkgZXhwZW5zaXZlLCBzbyB1c2UgfHwgb3BlcmF0b3JzIGZvciB0aGUgZmFzdCBwYXRoIG9mIGRlZmF1bHRUaW1lID09PSAwXG5cdFx0XHRkZWZhdWx0VGltZSA9IG5ldyBEYXRlKGRlZmF1bHRUaW1lKTtcblx0XHRcdGFycmF5LmZvckVhY2goYXJyYXkubWFwKFtcIkZ1bGxZZWFyXCIsIFwiTW9udGhcIiwgXCJEYXRlXCIsIFwiSG91cnNcIiwgXCJNaW51dGVzXCIsIFwiU2Vjb25kc1wiLCBcIk1pbGxpc2Vjb25kc1wiXSwgZnVuY3Rpb24ocHJvcCl7XG5cdFx0XHRcdHJldHVybiBkZWZhdWx0VGltZVtcImdldFwiICsgcHJvcF0oKTtcblx0XHRcdH0pLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgpe1xuXHRcdFx0XHRtYXRjaFtpbmRleF0gPSBtYXRjaFtpbmRleF0gfHwgdmFsdWU7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0cmVzdWx0ID0gbmV3IERhdGUobWF0Y2hbMF18fDE5NzAsIG1hdGNoWzFdfHwwLCBtYXRjaFsyXXx8MSwgbWF0Y2hbM118fDAsIG1hdGNoWzRdfHwwLCBtYXRjaFs1XXx8MCwgbWF0Y2hbNl18fDApOyAvL1RPRE86IFVUQyBkZWZhdWx0c1xuXHRcdGlmKG1hdGNoWzBdIDwgMTAwKXtcblx0XHRcdHJlc3VsdC5zZXRGdWxsWWVhcihtYXRjaFswXSB8fCAxOTcwKTtcblx0XHR9XG5cblx0XHR2YXIgb2Zmc2V0ID0gMCxcblx0XHRcdHpvbmVTaWduID0gbWF0Y2hbN10gJiYgbWF0Y2hbN10uY2hhckF0KDApO1xuXHRcdGlmKHpvbmVTaWduICE9ICdaJyl7XG5cdFx0XHRvZmZzZXQgPSAoKG1hdGNoWzhdIHx8IDApICogNjApICsgKE51bWJlcihtYXRjaFs5XSkgfHwgMCk7XG5cdFx0XHRpZih6b25lU2lnbiAhPSAnLScpeyBvZmZzZXQgKj0gLTE7IH1cblx0XHR9XG5cdFx0aWYoem9uZVNpZ24pe1xuXHRcdFx0b2Zmc2V0IC09IHJlc3VsdC5nZXRUaW1lem9uZU9mZnNldCgpO1xuXHRcdH1cblx0XHRpZihvZmZzZXQpe1xuXHRcdFx0cmVzdWx0LnNldFRpbWUocmVzdWx0LmdldFRpbWUoKSArIG9mZnNldCAqIDYwMDAwKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0OyAvLyBEYXRlIG9yIG51bGxcbn07XG5cbi8qPT09PT1cbnZhciBfX09wdGlvbnMgPSB7XG5cdC8vIHNlbGVjdG9yOiBTdHJpbmdcblx0Ly9cdFx0XCJkYXRlXCIgb3IgXCJ0aW1lXCIgZm9yIHBhcnRpYWwgZm9ybWF0dGluZyBvZiB0aGUgRGF0ZSBvYmplY3QuXG5cdC8vXHRcdEJvdGggZGF0ZSBhbmQgdGltZSB3aWxsIGJlIGZvcm1hdHRlZCBieSBkZWZhdWx0LlxuXHQvLyB6dWx1OiBCb29sZWFuXG5cdC8vXHRcdGlmIHRydWUsIFVUQy9HTVQgaXMgdXNlZCBmb3IgYSB0aW1lem9uZVxuXHQvLyBtaWxsaXNlY29uZHM6IEJvb2xlYW5cblx0Ly9cdFx0aWYgdHJ1ZSwgb3V0cHV0IG1pbGxpc2Vjb25kc1xufTtcbj09PT09Ki9cblxuc3RhbXAudG9JU09TdHJpbmcgPSBmdW5jdGlvbigvKkRhdGUqLyBkYXRlT2JqZWN0LCAvKl9fT3B0aW9ucz8qLyBvcHRpb25zKXtcblx0Ly8gc3VtbWFyeTpcblx0Ly9cdFx0Rm9ybWF0IGEgRGF0ZSBvYmplY3QgYXMgYSBzdHJpbmcgYWNjb3JkaW5nIGEgc3Vic2V0IG9mIHRoZSBJU08tODYwMSBzdGFuZGFyZFxuXHQvL1xuXHQvLyBkZXNjcmlwdGlvbjpcblx0Ly9cdFx0V2hlbiBvcHRpb25zLnNlbGVjdG9yIGlzIG9taXR0ZWQsIG91dHB1dCBmb2xsb3dzIFtSRkMzMzM5XShodHRwOi8vd3d3LmlldGYub3JnL3JmYy9yZmMzMzM5LnR4dClcblx0Ly9cdFx0VGhlIGxvY2FsIHRpbWUgem9uZSBpcyBpbmNsdWRlZCBhcyBhbiBvZmZzZXQgZnJvbSBHTVQsIGV4Y2VwdCB3aGVuIHNlbGVjdG9yPT0ndGltZScgKHRpbWUgd2l0aG91dCBhIGRhdGUpXG5cdC8vXHRcdERvZXMgbm90IGNoZWNrIGJvdW5kcy4gIE9ubHkgeWVhcnMgYmV0d2VlbiAxMDAgYW5kIDk5OTkgYXJlIHN1cHBvcnRlZC5cblx0Ly9cblx0Ly8gZGF0ZU9iamVjdDpcblx0Ly9cdFx0QSBEYXRlIG9iamVjdFxuXG5cdHZhciBfID0gZnVuY3Rpb24obil7IHJldHVybiAobiA8IDEwKSA/IFwiMFwiICsgbiA6IG47IH07XG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHR2YXIgZm9ybWF0dGVkRGF0ZSA9IFtdLFxuXHRcdGdldHRlciA9IG9wdGlvbnMuenVsdSA/IFwiZ2V0VVRDXCIgOiBcImdldFwiLFxuXHRcdGRhdGUgPSBcIlwiO1xuXHRpZihvcHRpb25zLnNlbGVjdG9yICE9IFwidGltZVwiKXtcblx0XHR2YXIgeWVhciA9IGRhdGVPYmplY3RbZ2V0dGVyK1wiRnVsbFllYXJcIl0oKTtcblx0XHRkYXRlID0gW1wiMDAwMFwiLnN1YnN0cigoeWVhcitcIlwiKS5sZW5ndGgpK3llYXIsIF8oZGF0ZU9iamVjdFtnZXR0ZXIrXCJNb250aFwiXSgpKzEpLCBfKGRhdGVPYmplY3RbZ2V0dGVyK1wiRGF0ZVwiXSgpKV0uam9pbignLScpO1xuXHR9XG5cdGZvcm1hdHRlZERhdGUucHVzaChkYXRlKTtcblx0aWYob3B0aW9ucy5zZWxlY3RvciAhPSBcImRhdGVcIil7XG5cdFx0dmFyIHRpbWUgPSBbXyhkYXRlT2JqZWN0W2dldHRlcitcIkhvdXJzXCJdKCkpLCBfKGRhdGVPYmplY3RbZ2V0dGVyK1wiTWludXRlc1wiXSgpKSwgXyhkYXRlT2JqZWN0W2dldHRlcitcIlNlY29uZHNcIl0oKSldLmpvaW4oJzonKTtcblx0XHR2YXIgbWlsbGlzID0gZGF0ZU9iamVjdFtnZXR0ZXIrXCJNaWxsaXNlY29uZHNcIl0oKTtcblx0XHRpZihvcHRpb25zLm1pbGxpc2Vjb25kcyl7XG5cdFx0XHR0aW1lICs9IFwiLlwiKyAobWlsbGlzIDwgMTAwID8gXCIwXCIgOiBcIlwiKSArIF8obWlsbGlzKTtcblx0XHR9XG5cdFx0aWYob3B0aW9ucy56dWx1KXtcblx0XHRcdHRpbWUgKz0gXCJaXCI7XG5cdFx0fWVsc2UgaWYob3B0aW9ucy5zZWxlY3RvciAhPSBcInRpbWVcIil7XG5cdFx0XHR2YXIgdGltZXpvbmVPZmZzZXQgPSBkYXRlT2JqZWN0LmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cdFx0XHR2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnModGltZXpvbmVPZmZzZXQpO1xuXHRcdFx0dGltZSArPSAodGltZXpvbmVPZmZzZXQgPiAwID8gXCItXCIgOiBcIitcIikgK1xuXHRcdFx0XHRfKE1hdGguZmxvb3IoYWJzT2Zmc2V0LzYwKSkgKyBcIjpcIiArIF8oYWJzT2Zmc2V0JTYwKTtcblx0XHR9XG5cdFx0Zm9ybWF0dGVkRGF0ZS5wdXNoKHRpbWUpO1xuXHR9XG5cdHJldHVybiBmb3JtYXR0ZWREYXRlLmpvaW4oJ1QnKTsgLy8gU3RyaW5nXG59O1xuXG5yZXR1cm4gc3RhbXA7XG59KTtcbiIsImRlZmluZShbXG5cdFwicmVxdWlyZVwiLCBcIi4vX2Jhc2Uva2VybmVsXCIsIFwiLi9fYmFzZS9sYW5nXCIsIFwiLi9fYmFzZS9hcnJheVwiLCBcIi4vX2Jhc2UvY29uZmlnXCIsIFwiLi9kb21cIiwgXCIuL19iYXNlL3dpbmRvd1wiLFxuXHRcdFwiLi9fYmFzZS91cmxcIiwgXCIuL2FzcGVjdFwiLCBcIi4vcHJvbWlzZS9hbGxcIiwgXCIuL2RhdGUvc3RhbXBcIiwgXCIuL0RlZmVycmVkXCIsIFwiLi9oYXNcIiwgXCIuL3F1ZXJ5XCIsIFwiLi9vblwiLCBcIi4vcmVhZHlcIlxuXSwgZnVuY3Rpb24ocmVxdWlyZSwgZG9qbywgZGxhbmcsIGRhcnJheSwgY29uZmlnLCBkb20sIGR3aW5kb3csIF9VcmwsIGFzcGVjdCwgYWxsLCBkYXRlcywgRGVmZXJyZWQsIGhhcywgcXVlcnksIGRvbiwgcmVhZHkpe1xuXG5cdC8vIG1vZHVsZTpcblx0Ly9cdFx0ZG9qby9wYXJzZXJcblxuXHRuZXcgRGF0ZShcIlhcIik7IC8vIHdvcmthcm91bmQgZm9yICMxMTI3OSwgbmV3IERhdGUoXCJcIikgPT0gTmFOXG5cblx0Ly8gZGF0YS1kb2pvLXByb3BzIGV0Yy4gaXMgbm90IHJlc3RyaWN0ZWQgdG8gSlNPTiwgaXQgY2FuIGJlIGFueSBqYXZhc2NyaXB0XG5cdGZ1bmN0aW9uIG15RXZhbCh0ZXh0KXtcblx0XHRyZXR1cm4gZXZhbChcIihcIiArIHRleHQgKyBcIilcIik7XG5cdH1cblxuXHQvLyBXaWRnZXRzIGxpa2UgQm9yZGVyQ29udGFpbmVyIGFkZCBwcm9wZXJ0aWVzIHRvIF9XaWRnZXQgdmlhIGRvam8uZXh0ZW5kKCkuXG5cdC8vIElmIEJvcmRlckNvbnRhaW5lciBpcyBsb2FkZWQgYWZ0ZXIgX1dpZGdldCdzIHBhcmFtZXRlciBsaXN0IGhhcyBiZWVuIGNhY2hlZCxcblx0Ly8gd2UgbmVlZCB0byByZWZyZXNoIHRoYXQgcGFyYW1ldGVyIGxpc3QgKGZvciBfV2lkZ2V0IGFuZCBhbGwgd2lkZ2V0cyB0aGF0IGV4dGVuZCBfV2lkZ2V0KS5cblx0dmFyIGV4dGVuZENudCA9IDA7XG5cdGFzcGVjdC5hZnRlcihkbGFuZywgXCJleHRlbmRcIiwgZnVuY3Rpb24oKXtcblx0XHRleHRlbmRDbnQrKztcblx0fSwgdHJ1ZSk7XG5cblx0ZnVuY3Rpb24gZ2V0TmFtZU1hcChjdG9yKXtcblx0XHQvLyBzdW1tYXJ5OlxuXHRcdC8vXHRcdFJldHVybnMgbWFwIGZyb20gbG93ZXJjYXNlIG5hbWUgdG8gYXR0cmlidXRlIG5hbWUgaW4gY2xhc3MsIGV4OiB7b25jbGljazogXCJvbkNsaWNrXCJ9XG5cdFx0dmFyIG1hcCA9IGN0b3IuX25hbWVDYXNlTWFwLCBwcm90byA9IGN0b3IucHJvdG90eXBlO1xuXG5cdFx0Ly8gQ3JlYXRlIHRoZSBtYXAgaWYgaXQncyB1bmRlZmluZWQuXG5cdFx0Ly8gUmVmcmVzaCB0aGUgbWFwIGlmIGEgc3VwZXJjbGFzcyB3YXMgcG9zc2libHkgZXh0ZW5kZWQgd2l0aCBuZXcgbWV0aG9kcyBzaW5jZSB0aGUgbWFwIHdhcyBjcmVhdGVkLlxuXHRcdGlmKCFtYXAgfHwgbWFwLl9leHRlbmRDbnQgPCBleHRlbmRDbnQpe1xuXHRcdFx0bWFwID0gY3Rvci5fbmFtZUNhc2VNYXAgPSB7fTtcblx0XHRcdGZvcih2YXIgbmFtZSBpbiBwcm90byl7XG5cdFx0XHRcdGlmKG5hbWUuY2hhckF0KDApID09PSBcIl9cIil7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cdC8vIHNraXAgaW50ZXJuYWwgcHJvcGVydGllc1xuXHRcdFx0XHRtYXBbbmFtZS50b0xvd2VyQ2FzZSgpXSA9IG5hbWU7XG5cdFx0XHR9XG5cdFx0XHRtYXAuX2V4dGVuZENudCA9IGV4dGVuZENudDtcblx0XHR9XG5cdFx0cmV0dXJuIG1hcDtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldEN0b3IoLypTdHJpbmdbXSovIHR5cGVzLCAvKkZ1bmN0aW9uPyovIGNvbnRleHRSZXF1aXJlKXtcblx0XHQvLyBzdW1tYXJ5OlxuXHRcdC8vXHRcdFJldHJpZXZlcyBhIGNvbnN0cnVjdG9yLiAgSWYgdGhlIHR5cGVzIGFycmF5IGNvbnRhaW5zIG1vcmUgdGhhbiBvbmUgY2xhc3MvTUlEIHRoZW4gdGhlXG5cdFx0Ly9cdFx0c3Vic2VxdWVudCBjbGFzc2VzIHdpbGwgYmUgbWl4ZWQgaW50byB0aGUgZmlyc3QgY2xhc3MgYW5kIGEgdW5pcXVlIGNvbnN0cnVjdG9yIHdpbGwgYmVcblx0XHQvL1x0XHRyZXR1cm5lZCBmb3IgdGhhdCBhcnJheS5cblxuXHRcdGlmKCFjb250ZXh0UmVxdWlyZSl7XG5cdFx0XHRjb250ZXh0UmVxdWlyZSA9IHJlcXVpcmU7XG5cdFx0fVxuXG5cdFx0Ly8gTWFwIGZyb20gd2lkZ2V0IG5hbWUgb3IgbGlzdCBvZiB3aWRnZXQgbmFtZXMoZXg6IFwiZGlqaXQvZm9ybS9CdXR0b24sYWNtZS9NeU1peGluXCIpIHRvIGEgY29uc3RydWN0b3IuXG5cdFx0Ly8gS2VlcCBzZXBhcmF0ZSBtYXAgZm9yIGVhY2ggcmVxdWlyZUNvbnRleHQgdG8gYXZvaWQgZmFsc2UgbWF0Y2hlcyAoZXg6IFwiLi9Gb29cIiBjYW4gbWVhbiBkaWZmZXJlbnQgdGhpbmdzXG5cdFx0Ly8gZGVwZW5kaW5nIG9uIGNvbnRleHQuKVxuXHRcdHZhciBjdG9yTWFwID0gY29udGV4dFJlcXVpcmUuX2Rvam9QYXJzZXJDdG9yTWFwIHx8IChjb250ZXh0UmVxdWlyZS5fZG9qb1BhcnNlckN0b3JNYXAgPSB7fSk7XG5cblx0XHR2YXIgdHMgPSB0eXBlcy5qb2luKCk7XG5cdFx0aWYoIWN0b3JNYXBbdHNdKXtcblx0XHRcdHZhciBtaXhpbnMgPSBbXTtcblx0XHRcdGZvcih2YXIgaSA9IDAsIGwgPSB0eXBlcy5sZW5ndGg7IGkgPCBsOyBpKyspe1xuXHRcdFx0XHR2YXIgdCA9IHR5cGVzW2ldO1xuXHRcdFx0XHQvLyBUT0RPOiBDb25zaWRlciBzd2FwcGluZyBnZXRPYmplY3QgYW5kIHJlcXVpcmUgaW4gdGhlIGZ1dHVyZVxuXHRcdFx0XHRtaXhpbnNbbWl4aW5zLmxlbmd0aF0gPSAoY3Rvck1hcFt0XSA9IGN0b3JNYXBbdF0gfHwgKGRsYW5nLmdldE9iamVjdCh0KSB8fCAofnQuaW5kZXhPZignLycpICYmXG5cdFx0XHRcdFx0Y29udGV4dFJlcXVpcmUodCkpKSk7XG5cdFx0XHR9XG5cdFx0XHR2YXIgY3RvciA9IG1peGlucy5zaGlmdCgpO1xuXHRcdFx0Y3Rvck1hcFt0c10gPSBtaXhpbnMubGVuZ3RoID8gKGN0b3IuY3JlYXRlU3ViY2xhc3MgPyBjdG9yLmNyZWF0ZVN1YmNsYXNzKG1peGlucykgOiBjdG9yLmV4dGVuZC5hcHBseShjdG9yLCBtaXhpbnMpKSA6IGN0b3I7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGN0b3JNYXBbdHNdO1xuXHR9XG5cblx0dmFyIHBhcnNlciA9IHtcblx0XHQvLyBzdW1tYXJ5OlxuXHRcdC8vXHRcdFRoZSBEb20vV2lkZ2V0IHBhcnNpbmcgcGFja2FnZVxuXG5cdFx0X2NsZWFyQ2FjaGU6IGZ1bmN0aW9uKCl7XG5cdFx0XHQvLyBzdW1tYXJ5OlxuXHRcdFx0Ly9cdFx0Q2xlYXIgY2FjaGVkIGRhdGEuICAgVXNlZCBtYWlubHkgZm9yIGJlbmNobWFya2luZy5cblx0XHRcdGV4dGVuZENudCsrO1xuXHRcdFx0X2N0b3JNYXAgPSB7fTtcblx0XHR9LFxuXG5cdFx0X2Z1bmN0aW9uRnJvbVNjcmlwdDogZnVuY3Rpb24oc2NyaXB0LCBhdHRyRGF0YSl7XG5cdFx0XHQvLyBzdW1tYXJ5OlxuXHRcdFx0Ly9cdFx0Q29udmVydCBhIGA8c2NyaXB0IHR5cGU9XCJkb2pvL21ldGhvZFwiIGFyZ3M9XCJhLCBiLCBjXCI+IC4uLiA8L3NjcmlwdD5gXG5cdFx0XHQvL1x0XHRpbnRvIGEgZnVuY3Rpb25cblx0XHRcdC8vIHNjcmlwdDogRE9NTm9kZVxuXHRcdFx0Ly9cdFx0VGhlIGA8c2NyaXB0PmAgRE9NTm9kZVxuXHRcdFx0Ly8gYXR0ckRhdGE6IFN0cmluZ1xuXHRcdFx0Ly9cdFx0Rm9yIEhUTUw1IGNvbXBsaWFuY2UsIHNlYXJjaGVzIGZvciBhdHRyRGF0YSArIFwiYXJnc1wiICh0eXBpY2FsbHlcblx0XHRcdC8vXHRcdFwiZGF0YS1kb2pvLWFyZ3NcIikgaW5zdGVhZCBvZiBcImFyZ3NcIlxuXHRcdFx0dmFyIHByZWFtYmxlID0gXCJcIixcblx0XHRcdFx0c3VmZml4ID0gXCJcIixcblx0XHRcdFx0YXJnc1N0ciA9IChzY3JpcHQuZ2V0QXR0cmlidXRlKGF0dHJEYXRhICsgXCJhcmdzXCIpIHx8IHNjcmlwdC5nZXRBdHRyaWJ1dGUoXCJhcmdzXCIpKSxcblx0XHRcdFx0d2l0aFN0ciA9IHNjcmlwdC5nZXRBdHRyaWJ1dGUoXCJ3aXRoXCIpO1xuXG5cdFx0XHQvLyBDb252ZXJ0IGFueSBhcmd1bWVudHMgc3VwcGxpZWQgaW4gc2NyaXB0IHRhZyBpbnRvIGFuIGFycmF5IHRvIGJlIHBhc3NlZCB0byB0aGVcblx0XHRcdHZhciBmbkFyZ3MgPSAoYXJnc1N0ciB8fCBcIlwiKS5zcGxpdCgvXFxzKixcXHMqLyk7XG5cblx0XHRcdGlmKHdpdGhTdHIgJiYgd2l0aFN0ci5sZW5ndGgpe1xuXHRcdFx0XHRkYXJyYXkuZm9yRWFjaCh3aXRoU3RyLnNwbGl0KC9cXHMqLFxccyovKSwgZnVuY3Rpb24ocGFydCl7XG5cdFx0XHRcdFx0cHJlYW1ibGUgKz0gXCJ3aXRoKFwiICsgcGFydCArIFwiKXtcIjtcblx0XHRcdFx0XHRzdWZmaXggKz0gXCJ9XCI7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbmV3IEZ1bmN0aW9uKGZuQXJncywgcHJlYW1ibGUgKyBzY3JpcHQuaW5uZXJIVE1MICsgc3VmZml4KTtcblx0XHR9LFxuXG5cdFx0aW5zdGFudGlhdGU6IGZ1bmN0aW9uKG5vZGVzLCBtaXhpbiwgb3B0aW9ucyl7XG5cdFx0XHQvLyBzdW1tYXJ5OlxuXHRcdFx0Ly9cdFx0VGFrZXMgYXJyYXkgb2Ygbm9kZXMsIGFuZCB0dXJucyB0aGVtIGludG8gY2xhc3MgaW5zdGFuY2VzIGFuZFxuXHRcdFx0Ly9cdFx0cG90ZW50aWFsbHkgY2FsbHMgYSBzdGFydHVwIG1ldGhvZCB0byBhbGxvdyB0aGVtIHRvIGNvbm5lY3Qgd2l0aFxuXHRcdFx0Ly9cdFx0YW55IGNoaWxkcmVuLlxuXHRcdFx0Ly8gbm9kZXM6IEFycmF5XG5cdFx0XHQvL1x0XHRBcnJheSBvZiBET00gbm9kZXNcblx0XHRcdC8vIG1peGluOiBPYmplY3Q/XG5cdFx0XHQvL1x0XHRBbiBvYmplY3QgdGhhdCB3aWxsIGJlIG1peGVkIGluIHdpdGggZWFjaCBub2RlIGluIHRoZSBhcnJheS5cblx0XHRcdC8vXHRcdFZhbHVlcyBpbiB0aGUgbWl4aW4gd2lsbCBvdmVycmlkZSB2YWx1ZXMgaW4gdGhlIG5vZGUsIGlmIHRoZXlcblx0XHRcdC8vXHRcdGV4aXN0LlxuXHRcdFx0Ly8gb3B0aW9uczogT2JqZWN0P1xuXHRcdFx0Ly9cdFx0QW4gb2JqZWN0IHVzZWQgdG8gaG9sZCBrd0FyZ3MgZm9yIGluc3RhbnRpYXRpb24uXG5cdFx0XHQvL1x0XHRTZWUgcGFyc2Uub3B0aW9ucyBhcmd1bWVudCBmb3IgZGV0YWlscy5cblx0XHRcdC8vIHJldHVybnM6XG5cdFx0XHQvL1x0XHRBcnJheSBvZiBpbnN0YW5jZXMuXG5cblx0XHRcdG1peGluID0gbWl4aW4gfHwge307XG5cdFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRcdFx0dmFyIGRvam9UeXBlID0gKG9wdGlvbnMuc2NvcGUgfHwgZG9qby5fc2NvcGVOYW1lKSArIFwiVHlwZVwiLCAvLyB0eXBpY2FsbHkgXCJkb2pvVHlwZVwiXG5cdFx0XHRcdGF0dHJEYXRhID0gXCJkYXRhLVwiICsgKG9wdGlvbnMuc2NvcGUgfHwgZG9qby5fc2NvcGVOYW1lKSArIFwiLVwiLCAvLyB0eXBpY2FsbHkgXCJkYXRhLWRvam8tXCJcblx0XHRcdFx0ZGF0YURvam9UeXBlID0gYXR0ckRhdGEgKyBcInR5cGVcIiwgLy8gdHlwaWNhbGx5IFwiZGF0YS1kb2pvLXR5cGVcIlxuXHRcdFx0XHRkYXRhRG9qb01peGlucyA9IGF0dHJEYXRhICsgXCJtaXhpbnNcIjtcdFx0XHRcdFx0Ly8gdHlwaWNhbGx5IFwiZGF0YS1kb2pvLW1peGluc1wiXG5cblx0XHRcdHZhciBsaXN0ID0gW107XG5cdFx0XHRkYXJyYXkuZm9yRWFjaChub2RlcywgZnVuY3Rpb24obm9kZSl7XG5cdFx0XHRcdHZhciB0eXBlID0gZG9qb1R5cGUgaW4gbWl4aW4gPyBtaXhpbltkb2pvVHlwZV0gOiBub2RlLmdldEF0dHJpYnV0ZShkYXRhRG9qb1R5cGUpIHx8IG5vZGUuZ2V0QXR0cmlidXRlKGRvam9UeXBlKTtcblx0XHRcdFx0aWYodHlwZSl7XG5cdFx0XHRcdFx0dmFyIG1peGluc1ZhbHVlID0gbm9kZS5nZXRBdHRyaWJ1dGUoZGF0YURvam9NaXhpbnMpLFxuXHRcdFx0XHRcdFx0dHlwZXMgPSBtaXhpbnNWYWx1ZSA/IFt0eXBlXS5jb25jYXQobWl4aW5zVmFsdWUuc3BsaXQoL1xccyosXFxzKi8pKSA6IFt0eXBlXTtcblxuXHRcdFx0XHRcdGxpc3QucHVzaCh7XG5cdFx0XHRcdFx0XHRub2RlOiBub2RlLFxuXHRcdFx0XHRcdFx0dHlwZXM6IHR5cGVzXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBJbnN0YW50aWF0ZSB0aGUgbm9kZXMgYW5kIHJldHVybiB0aGUgbGlzdCBvZiBpbnN0YW5jZXMuXG5cdFx0XHRyZXR1cm4gdGhpcy5faW5zdGFudGlhdGUobGlzdCwgbWl4aW4sIG9wdGlvbnMpO1xuXHRcdH0sXG5cblx0XHRfaW5zdGFudGlhdGU6IGZ1bmN0aW9uKG5vZGVzLCBtaXhpbiwgb3B0aW9ucywgcmV0dXJuUHJvbWlzZSl7XG5cdFx0XHQvLyBzdW1tYXJ5OlxuXHRcdFx0Ly9cdFx0VGFrZXMgYXJyYXkgb2Ygb2JqZWN0cyByZXByZXNlbnRpbmcgbm9kZXMsIGFuZCB0dXJucyB0aGVtIGludG8gY2xhc3MgaW5zdGFuY2VzIGFuZFxuXHRcdFx0Ly9cdFx0cG90ZW50aWFsbHkgY2FsbHMgYSBzdGFydHVwIG1ldGhvZCB0byBhbGxvdyB0aGVtIHRvIGNvbm5lY3Qgd2l0aFxuXHRcdFx0Ly9cdFx0YW55IGNoaWxkcmVuLlxuXHRcdFx0Ly8gbm9kZXM6IEFycmF5XG5cdFx0XHQvL1x0XHRBcnJheSBvZiBvYmplY3RzIGxpa2Vcblx0XHRcdC8vXHR8XHRcdHtcblx0XHRcdC8vXHR8XHRcdFx0Y3RvcjogRnVuY3Rpb24gKG1heSBiZSBudWxsKVxuXHRcdFx0Ly9cdHxcdFx0XHR0eXBlczogW1wiZGlqaXQvZm9ybS9CdXR0b25cIiwgXCJhY21lL015TWl4aW5cIl0gKHVzZWQgaWYgY3RvciBub3Qgc3BlY2lmaWVkKVxuXHRcdFx0Ly9cdHxcdFx0XHRub2RlOiBET01Ob2RlLFxuXHRcdFx0Ly9cdHxcdFx0XHRzY3JpcHRzOiBbIC4uLiBdLFx0Ly8gYXJyYXkgb2YgPHNjcmlwdCB0eXBlPVwiZG9qby8uLi5cIj4gY2hpbGRyZW4gb2Ygbm9kZVxuXHRcdFx0Ly9cdHxcdFx0XHRpbmhlcml0ZWQ6IHsgLi4uIH1cdC8vIHNldHRpbmdzIGluaGVyaXRlZCBmcm9tIGFuY2VzdG9ycyBsaWtlIGRpciwgdGhlbWUsIGV0Yy5cblx0XHRcdC8vXHR8XHRcdH1cblx0XHRcdC8vIG1peGluOiBPYmplY3Rcblx0XHRcdC8vXHRcdEFuIG9iamVjdCB0aGF0IHdpbGwgYmUgbWl4ZWQgaW4gd2l0aCBlYWNoIG5vZGUgaW4gdGhlIGFycmF5LlxuXHRcdFx0Ly9cdFx0VmFsdWVzIGluIHRoZSBtaXhpbiB3aWxsIG92ZXJyaWRlIHZhbHVlcyBpbiB0aGUgbm9kZSwgaWYgdGhleVxuXHRcdFx0Ly9cdFx0ZXhpc3QuXG5cdFx0XHQvLyBvcHRpb25zOiBPYmplY3Rcblx0XHRcdC8vXHRcdEFuIG9wdGlvbnMgb2JqZWN0IHVzZWQgdG8gaG9sZCBrd0FyZ3MgZm9yIGluc3RhbnRpYXRpb24uXG5cdFx0XHQvL1x0XHRTZWUgcGFyc2Uub3B0aW9ucyBhcmd1bWVudCBmb3IgZGV0YWlscy5cblx0XHRcdC8vIHJldHVyblByb21pc2U6IEJvb2xlYW5cblx0XHRcdC8vXHRcdFJldHVybiBhIFByb21pc2UgcmF0aGVyIHRoYW4gdGhlIGluc3RhbmNlOyBzdXBwb3J0cyBhc3luY2hyb25vdXMgd2lkZ2V0IGNyZWF0aW9uLlxuXHRcdFx0Ly8gcmV0dXJuczpcblx0XHRcdC8vXHRcdEFycmF5IG9mIGluc3RhbmNlcywgb3IgaWYgcmV0dXJuUHJvbWlzZSBpcyB0cnVlLCBhIHByb21pc2UgZm9yIGFycmF5IG9mIGluc3RhbmNlc1xuXHRcdFx0Ly9cdFx0dGhhdCByZXNvbHZlcyB3aGVuIGluc3RhbmNlcyBoYXZlIGZpbmlzaGVkIGluaXRpYWxpemluZy5cblxuXHRcdFx0Ly8gQ2FsbCB3aWRnZXQgY29uc3RydWN0b3JzLiAgIFNvbWUgbWF5IGJlIGFzeW5jaHJvbm91cyBhbmQgcmV0dXJuIHByb21pc2VzLlxuXHRcdFx0dmFyIHRoZWxpc3QgPSBkYXJyYXkubWFwKG5vZGVzLCBmdW5jdGlvbihvYmope1xuXHRcdFx0XHR2YXIgY3RvciA9IG9iai5jdG9yIHx8IGdldEN0b3Iob2JqLnR5cGVzLCBvcHRpb25zLmNvbnRleHRSZXF1aXJlKTtcblx0XHRcdFx0Ly8gSWYgd2Ugc3RpbGwgaGF2ZW4ndCByZXNvbHZlZCBhIGN0b3IsIGl0IGlzIGZhdGFsIG5vd1xuXHRcdFx0XHRpZighY3Rvcil7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIHJlc29sdmUgY29uc3RydWN0b3IgZm9yOiAnXCIgKyBvYmoudHlwZXMuam9pbigpICsgXCInXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdChjdG9yLCBvYmoubm9kZSwgbWl4aW4sIG9wdGlvbnMsIG9iai5zY3JpcHRzLCBvYmouaW5oZXJpdGVkKTtcblx0XHRcdH0sIHRoaXMpO1xuXG5cdFx0XHQvLyBBZnRlciBhbGwgd2lkZ2V0IGNvbnN0cnVjdGlvbiBmaW5pc2hlcywgY2FsbCBzdGFydHVwIG9uIGVhY2ggdG9wIGxldmVsIGluc3RhbmNlIGlmIGl0IG1ha2VzIHNlbnNlIChhcyBmb3Jcblx0XHRcdC8vIHdpZGdldHMpLiAgUGFyZW50IHdpZGdldHMgd2lsbCByZWN1cnNpdmVseSBjYWxsIHN0YXJ0dXAgb24gdGhlaXIgKG5vbi10b3AgbGV2ZWwpIGNoaWxkcmVuXG5cdFx0XHRmdW5jdGlvbiBvbkNvbnN0cnVjdCh0aGVsaXN0KXtcblx0XHRcdFx0aWYoIW1peGluLl9zdGFydGVkICYmICFvcHRpb25zLm5vU3RhcnQpe1xuXHRcdFx0XHRcdGRhcnJheS5mb3JFYWNoKHRoZWxpc3QsIGZ1bmN0aW9uKGluc3RhbmNlKXtcblx0XHRcdFx0XHRcdGlmKHR5cGVvZiBpbnN0YW5jZS5zdGFydHVwID09PSBcImZ1bmN0aW9uXCIgJiYgIWluc3RhbmNlLl9zdGFydGVkKXtcblx0XHRcdFx0XHRcdFx0aW5zdGFuY2Uuc3RhcnR1cCgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHRoZWxpc3Q7XG5cdFx0XHR9XG5cblx0XHRcdGlmKHJldHVyblByb21pc2Upe1xuXHRcdFx0XHRyZXR1cm4gYWxsKHRoZWxpc3QpLnRoZW4ob25Db25zdHJ1Y3QpO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdC8vIEJhY2stY29tcGF0IHBhdGgsIHJlbW92ZSBmb3IgMi4wXG5cdFx0XHRcdHJldHVybiBvbkNvbnN0cnVjdCh0aGVsaXN0KTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Y29uc3RydWN0OiBmdW5jdGlvbihjdG9yLCBub2RlLCBtaXhpbiwgb3B0aW9ucywgc2NyaXB0cywgaW5oZXJpdGVkKXtcblx0XHRcdC8vIHN1bW1hcnk6XG5cdFx0XHQvL1x0XHRDYWxscyBuZXcgY3RvcihwYXJhbXMsIG5vZGUpLCB3aGVyZSBwYXJhbXMgaXMgdGhlIGhhc2ggb2YgcGFyYW1ldGVycyBzcGVjaWZpZWQgb24gdGhlIG5vZGUsXG5cdFx0XHQvL1x0XHRleGNsdWRpbmcgZGF0YS1kb2pvLXR5cGUgYW5kIGRhdGEtZG9qby1taXhpbnMuICAgRG9lcyBub3QgY2FsbCBzdGFydHVwKCkuXG5cdFx0XHQvLyBjdG9yOiBGdW5jdGlvblxuXHRcdFx0Ly9cdFx0V2lkZ2V0IGNvbnN0cnVjdG9yLlxuXHRcdFx0Ly8gbm9kZTogRE9NTm9kZVxuXHRcdFx0Ly9cdFx0VGhpcyBub2RlIHdpbGwgYmUgcmVwbGFjZWQvYXR0YWNoZWQgdG8gYnkgdGhlIHdpZGdldC4gIEl0IGFsc28gc3BlY2lmaWVzIHRoZSBhcmd1bWVudHMgdG8gcGFzcyB0byBjdG9yLlxuXHRcdFx0Ly8gbWl4aW46IE9iamVjdD9cblx0XHRcdC8vXHRcdEF0dHJpYnV0ZXMgaW4gdGhpcyBvYmplY3Qgd2lsbCBiZSBwYXNzZWQgYXMgcGFyYW1ldGVycyB0byBjdG9yLFxuXHRcdFx0Ly9cdFx0b3ZlcnJpZGluZyBhdHRyaWJ1dGVzIHNwZWNpZmllZCBvbiB0aGUgbm9kZS5cblx0XHRcdC8vIG9wdGlvbnM6IE9iamVjdD9cblx0XHRcdC8vXHRcdEFuIG9wdGlvbnMgb2JqZWN0IHVzZWQgdG8gaG9sZCBrd0FyZ3MgZm9yIGluc3RhbnRpYXRpb24uICAgU2VlIHBhcnNlLm9wdGlvbnMgYXJndW1lbnQgZm9yIGRldGFpbHMuXG5cdFx0XHQvLyBzY3JpcHRzOiBEb21Ob2RlW10/XG5cdFx0XHQvL1x0XHRBcnJheSBvZiBgPHNjcmlwdCB0eXBlPVwiZG9qby8qXCI+YCBET01Ob2Rlcy4gIElmIG5vdCBzcGVjaWZpZWQsIHdpbGwgc2VhcmNoIGZvciBgPHNjcmlwdD5gIHRhZ3MgaW5zaWRlIG5vZGUuXG5cdFx0XHQvLyBpbmhlcml0ZWQ6IE9iamVjdD9cblx0XHRcdC8vXHRcdFNldHRpbmdzIGZyb20gZGlyPXJ0bCBvciBsYW5nPS4uLiBvbiBhIG5vZGUgYWJvdmUgdGhpcyBub2RlLiAgIE92ZXJyaWRlcyBvcHRpb25zLmluaGVyaXRlZC5cblx0XHRcdC8vIHJldHVybnM6XG5cdFx0XHQvL1x0XHRJbnN0YW5jZSBvciBQcm9taXNlIGZvciB0aGUgaW5zdGFuY2UsIGlmIG1hcmt1cEZhY3RvcnkoKSBpdHNlbGYgcmV0dXJuZWQgYSBwcm9taXNlXG5cblx0XHRcdHZhciBwcm90byA9IGN0b3IgJiYgY3Rvci5wcm90b3R5cGU7XG5cdFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRcdFx0Ly8gU2V0dXAgaGFzaCB0byBob2xkIHBhcmFtZXRlciBzZXR0aW5ncyBmb3IgdGhpcyB3aWRnZXQuXHRTdGFydCB3aXRoIHRoZSBwYXJhbWV0ZXJcblx0XHRcdC8vIHNldHRpbmdzIGluaGVyaXRlZCBmcm9tIGFuY2VzdG9ycyAoXCJkaXJcIiBhbmQgXCJsYW5nXCIpLlxuXHRcdFx0Ly8gSW5oZXJpdGVkIHNldHRpbmcgbWF5IGxhdGVyIGJlIG92ZXJyaWRkZW4gYnkgZXhwbGljaXQgc2V0dGluZ3Mgb24gbm9kZSBpdHNlbGYuXG5cdFx0XHR2YXIgcGFyYW1zID0ge307XG5cblx0XHRcdGlmKG9wdGlvbnMuZGVmYXVsdHMpe1xuXHRcdFx0XHQvLyBzZXR0aW5ncyBmb3IgdGhlIGRvY3VtZW50IGl0c2VsZiAob3Igd2hhdGV2ZXIgc3VidHJlZSBpcyBiZWluZyBwYXJzZWQpXG5cdFx0XHRcdGRsYW5nLm1peGluKHBhcmFtcywgb3B0aW9ucy5kZWZhdWx0cyk7XG5cdFx0XHR9XG5cdFx0XHRpZihpbmhlcml0ZWQpe1xuXHRcdFx0XHQvLyBzZXR0aW5ncyBmcm9tIGRpcj1ydGwgb3IgbGFuZz0uLi4gb24gYSBub2RlIGFib3ZlIHRoaXMgbm9kZVxuXHRcdFx0XHRkbGFuZy5taXhpbihwYXJhbXMsIGluaGVyaXRlZCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEdldCBsaXN0IG9mIGF0dHJpYnV0ZXMgZXhwbGljaXRseSBsaXN0ZWQgaW4gdGhlIG1hcmt1cFxuXHRcdFx0dmFyIGF0dHJpYnV0ZXM7XG5cdFx0XHRpZihoYXMoXCJkb20tYXR0cmlidXRlcy1leHBsaWNpdFwiKSl7XG5cdFx0XHRcdC8vIFN0YW5kYXJkIHBhdGggdG8gZ2V0IGxpc3Qgb2YgdXNlciBzcGVjaWZpZWQgYXR0cmlidXRlc1xuXHRcdFx0XHRhdHRyaWJ1dGVzID0gbm9kZS5hdHRyaWJ1dGVzO1xuXHRcdFx0fWVsc2UgaWYoaGFzKFwiZG9tLWF0dHJpYnV0ZXMtc3BlY2lmaWVkLWZsYWdcIikpe1xuXHRcdFx0XHQvLyBTcGVjaWFsIHByb2Nlc3NpbmcgbmVlZGVkIGZvciBJRTgsIHRvIHNraXAgYSBmZXcgZmF1eCB2YWx1ZXMgaW4gYXR0cmlidXRlc1tdXG5cdFx0XHRcdGF0dHJpYnV0ZXMgPSBkYXJyYXkuZmlsdGVyKG5vZGUuYXR0cmlidXRlcywgZnVuY3Rpb24oYSl7XG5cdFx0XHRcdFx0cmV0dXJuIGEuc3BlY2lmaWVkO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHQvLyBTcGVjaWFsIHBhdGggZm9yIElFNi03LCBhdm9pZCAoc29tZXRpbWVzID4xMDApIGJvZ3VzIGVudHJpZXMgaW4gbm9kZS5hdHRyaWJ1dGVzXG5cdFx0XHRcdHZhciBjbG9uZSA9IC9eaW5wdXQkfF5pbWckL2kudGVzdChub2RlLm5vZGVOYW1lKSA/IG5vZGUgOiBub2RlLmNsb25lTm9kZShmYWxzZSksXG5cdFx0XHRcdFx0YXR0cnMgPSBjbG9uZS5vdXRlckhUTUwucmVwbGFjZSgvPVteXFxzXCInXSt8PVwiW15cIl0qXCJ8PSdbXiddKicvZywgXCJcIikucmVwbGFjZSgvXlxccyo8W2EtekEtWjAtOV0qXFxzKi8sIFwiXCIpLnJlcGxhY2UoL1xccyo+LiokLywgXCJcIik7XG5cblx0XHRcdFx0YXR0cmlidXRlcyA9IGRhcnJheS5tYXAoYXR0cnMuc3BsaXQoL1xccysvKSwgZnVuY3Rpb24obmFtZSl7XG5cdFx0XHRcdFx0dmFyIGxjTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0bmFtZTogbmFtZSxcblx0XHRcdFx0XHRcdC8vIGdldEF0dHJpYnV0ZSgpIGRvZXNuJ3Qgd29yayBmb3IgYnV0dG9uLnZhbHVlLCByZXR1cm5zIGlubmVySFRNTCBvZiBidXR0b24uXG5cdFx0XHRcdFx0XHQvLyBidXQgZ2V0QXR0cmlidXRlTm9kZSgpLnZhbHVlIGRvZXNuJ3Qgd29yayBmb3IgdGhlIGZvcm0uZW5jVHlwZSBvciBsaS52YWx1ZVxuXHRcdFx0XHRcdFx0dmFsdWU6IChub2RlLm5vZGVOYW1lID09IFwiTElcIiAmJiBuYW1lID09IFwidmFsdWVcIikgfHwgbGNOYW1lID09IFwiZW5jdHlwZVwiID9cblx0XHRcdFx0XHRcdFx0bm9kZS5nZXRBdHRyaWJ1dGUobGNOYW1lKSA6IG5vZGUuZ2V0QXR0cmlidXRlTm9kZShsY05hbWUpLnZhbHVlXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEhhc2ggdG8gY29udmVydCBzY29wZWQgYXR0cmlidXRlIG5hbWUgKGV4OiBkYXRhLWRvam8xNy1wYXJhbXMpIHRvIHNvbWV0aGluZyBmcmllbmRseSAoZXg6IGRhdGEtZG9qby1wYXJhbXMpXG5cdFx0XHQvLyBUT0RPOiByZW1vdmUgc2NvcGUgZm9yIDIuMFxuXHRcdFx0dmFyIHNjb3BlID0gb3B0aW9ucy5zY29wZSB8fCBkb2pvLl9zY29wZU5hbWUsXG5cdFx0XHRcdGF0dHJEYXRhID0gXCJkYXRhLVwiICsgc2NvcGUgKyBcIi1cIiwgLy8gdHlwaWNhbGx5IFwiZGF0YS1kb2pvLVwiXG5cdFx0XHRcdGhhc2ggPSB7fTtcblx0XHRcdGlmKHNjb3BlICE9PSBcImRvam9cIil7XG5cdFx0XHRcdGhhc2hbYXR0ckRhdGEgKyBcInByb3BzXCJdID0gXCJkYXRhLWRvam8tcHJvcHNcIjtcblx0XHRcdFx0aGFzaFthdHRyRGF0YSArIFwidHlwZVwiXSA9IFwiZGF0YS1kb2pvLXR5cGVcIjtcblx0XHRcdFx0aGFzaFthdHRyRGF0YSArIFwibWl4aW5zXCJdID0gXCJkYXRhLWRvam8tbWl4aW5zXCI7XG5cdFx0XHRcdGhhc2hbc2NvcGUgKyBcInR5cGVcIl0gPSBcImRvam90eXBlXCI7XG5cdFx0XHRcdGhhc2hbYXR0ckRhdGEgKyBcImlkXCJdID0gXCJkYXRhLWRvam8taWRcIjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmVhZCBpbiBhdHRyaWJ1dGVzIGFuZCBwcm9jZXNzIHRoZW0sIGluY2x1ZGluZyBkYXRhLWRvam8tcHJvcHMsIGRhdGEtZG9qby10eXBlLFxuXHRcdFx0Ly8gZG9qb0F0dGFjaFBvaW50LCBldGMuLCBhcyB3ZWxsIGFzIG5vcm1hbCBmb289YmFyIGF0dHJpYnV0ZXMuXG5cdFx0XHR2YXIgaSA9IDAsIGl0ZW0sIGZ1bmNBdHRycyA9IFtdLCBqc25hbWUsIGV4dHJhO1xuXHRcdFx0d2hpbGUoaXRlbSA9IGF0dHJpYnV0ZXNbaSsrXSl7XG5cdFx0XHRcdHZhciBuYW1lID0gaXRlbS5uYW1lLFxuXHRcdFx0XHRcdGxjTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKSxcblx0XHRcdFx0XHR2YWx1ZSA9IGl0ZW0udmFsdWU7XG5cblx0XHRcdFx0c3dpdGNoKGhhc2hbbGNOYW1lXSB8fCBsY05hbWUpe1xuXHRcdFx0XHQvLyBBbHJlYWR5IHByb2Nlc3NlZCwganVzdCBpZ25vcmVcblx0XHRcdFx0Y2FzZSBcImRhdGEtZG9qby10eXBlXCI6XG5cdFx0XHRcdGNhc2UgXCJkb2pvdHlwZVwiOlxuXHRcdFx0XHRjYXNlIFwiZGF0YS1kb2pvLW1peGluc1wiOlxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdC8vIERhdGEtZG9qby1wcm9wcy4gICBTYXZlIGZvciBsYXRlciB0byBtYWtlIHN1cmUgaXQgb3ZlcnJpZGVzIGRpcmVjdCBmb289YmFyIHNldHRpbmdzXG5cdFx0XHRcdGNhc2UgXCJkYXRhLWRvam8tcHJvcHNcIjpcblx0XHRcdFx0XHRleHRyYSA9IHZhbHVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdC8vIGRhdGEtZG9qby1pZCBvciBqc0lkLiBUT0RPOiBkcm9wIGpzSWQgaW4gMi4wXG5cdFx0XHRcdGNhc2UgXCJkYXRhLWRvam8taWRcIjpcblx0XHRcdFx0Y2FzZSBcImpzaWRcIjpcblx0XHRcdFx0XHRqc25hbWUgPSB2YWx1ZTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHQvLyBGb3IgdGhlIGJlbmVmaXQgb2YgX1RlbXBsYXRlZFxuXHRcdFx0XHRjYXNlIFwiZGF0YS1kb2pvLWF0dGFjaC1wb2ludFwiOlxuXHRcdFx0XHRjYXNlIFwiZG9qb2F0dGFjaHBvaW50XCI6XG5cdFx0XHRcdFx0cGFyYW1zLmRvam9BdHRhY2hQb2ludCA9IHZhbHVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGF0YS1kb2pvLWF0dGFjaC1ldmVudFwiOlxuXHRcdFx0XHRjYXNlIFwiZG9qb2F0dGFjaGV2ZW50XCI6XG5cdFx0XHRcdFx0cGFyYW1zLmRvam9BdHRhY2hFdmVudCA9IHZhbHVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdC8vIFNwZWNpYWwgcGFyYW1ldGVyIGhhbmRsaW5nIG5lZWRlZCBmb3IgSUVcblx0XHRcdFx0Y2FzZSBcImNsYXNzXCI6XG5cdFx0XHRcdFx0cGFyYW1zW1wiY2xhc3NcIl0gPSBub2RlLmNsYXNzTmFtZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInN0eWxlXCI6XG5cdFx0XHRcdFx0cGFyYW1zW1wic3R5bGVcIl0gPSBub2RlLnN0eWxlICYmIG5vZGUuc3R5bGUuY3NzVGV4dDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHQvLyBOb3JtYWwgYXR0cmlidXRlLCBleDogdmFsdWU9XCIxMjNcIlxuXG5cdFx0XHRcdFx0Ly8gRmluZCBhdHRyaWJ1dGUgaW4gd2lkZ2V0IGNvcnJlc3BvbmRpbmcgdG8gc3BlY2lmaWVkIG5hbWUuXG5cdFx0XHRcdFx0Ly8gTWF5IGludm9sdmUgY2FzZSBjb252ZXJzaW9uLCBleDogb25jbGljayAtLT4gb25DbGlja1xuXHRcdFx0XHRcdGlmKCEobmFtZSBpbiBwcm90bykpe1xuXHRcdFx0XHRcdFx0dmFyIG1hcCA9IGdldE5hbWVNYXAoY3Rvcik7XG5cdFx0XHRcdFx0XHRuYW1lID0gbWFwW2xjTmFtZV0gfHwgbmFtZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBTZXQgcGFyYW1zW25hbWVdIHRvIHZhbHVlLCBkb2luZyB0eXBlIGNvbnZlcnNpb25cblx0XHRcdFx0XHRpZihuYW1lIGluIHByb3RvKXtcblx0XHRcdFx0XHRcdHN3aXRjaCh0eXBlb2YgcHJvdG9bbmFtZV0pe1xuXHRcdFx0XHRcdFx0Y2FzZSBcInN0cmluZ1wiOlxuXHRcdFx0XHRcdFx0XHRwYXJhbXNbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlIFwibnVtYmVyXCI6XG5cdFx0XHRcdFx0XHRcdHBhcmFtc1tuYW1lXSA9IHZhbHVlLmxlbmd0aCA/IE51bWJlcih2YWx1ZSkgOiBOYU47XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSBcImJvb2xlYW5cIjpcblx0XHRcdFx0XHRcdFx0Ly8gZm9yIGNoZWNrZWQvZGlzYWJsZWQgdmFsdWUgbWlnaHQgYmUgXCJcIiBvciBcImNoZWNrZWRcIi5cdCBpbnRlcnByZXQgYXMgdHJ1ZS5cblx0XHRcdFx0XHRcdFx0cGFyYW1zW25hbWVdID0gdmFsdWUudG9Mb3dlckNhc2UoKSAhPSBcImZhbHNlXCI7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSBcImZ1bmN0aW9uXCI6XG5cdFx0XHRcdFx0XHRcdGlmKHZhbHVlID09PSBcIlwiIHx8IHZhbHVlLnNlYXJjaCgvW15cXHdcXC5dKy9pKSAhPSAtMSl7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gVGhlIHVzZXIgaGFzIHNwZWNpZmllZCBzb21lIHRleHQgZm9yIGEgZnVuY3Rpb24gbGlrZSBcInJldHVybiB4KzVcIlxuXHRcdFx0XHRcdFx0XHRcdHBhcmFtc1tuYW1lXSA9IG5ldyBGdW5jdGlvbih2YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0XHRcdC8vIFRoZSB1c2VyIGhhcyBzcGVjaWZpZWQgdGhlIG5hbWUgb2YgYSBnbG9iYWwgZnVuY3Rpb24gbGlrZSBcIm15T25DbGlja1wiXG5cdFx0XHRcdFx0XHRcdFx0Ly8gb3IgYSBzaW5nbGUgd29yZCBmdW5jdGlvbiBcInJldHVyblwiXG5cdFx0XHRcdFx0XHRcdFx0cGFyYW1zW25hbWVdID0gZGxhbmcuZ2V0T2JqZWN0KHZhbHVlLCBmYWxzZSkgfHwgbmV3IEZ1bmN0aW9uKHZhbHVlKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRmdW5jQXR0cnMucHVzaChuYW1lKTtcdC8vIHByZXZlbnQgXCJkb3VibGUgY29ubmVjdFwiLCBzZWUgIzE1MDI2XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0dmFyIHBWYWwgPSBwcm90b1tuYW1lXTtcblx0XHRcdFx0XHRcdFx0cGFyYW1zW25hbWVdID1cblx0XHRcdFx0XHRcdFx0XHQocFZhbCAmJiBcImxlbmd0aFwiIGluIHBWYWwpID8gKHZhbHVlID8gdmFsdWUuc3BsaXQoL1xccyosXFxzKi8pIDogW10pIDpcdC8vIGFycmF5XG5cdFx0XHRcdFx0XHRcdFx0XHQocFZhbCBpbnN0YW5jZW9mIERhdGUpID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0KHZhbHVlID09IFwiXCIgPyBuZXcgRGF0ZShcIlwiKSA6XHQvLyB0aGUgTmFOIG9mIGRhdGVzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlID09IFwibm93XCIgPyBuZXcgRGF0ZSgpIDpcdC8vIGN1cnJlbnQgZGF0ZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRlcy5mcm9tSVNPU3RyaW5nKHZhbHVlKSkgOlxuXHRcdFx0XHRcdFx0XHRcdChwVmFsIGluc3RhbmNlb2YgX1VybCkgPyAoZG9qby5iYXNlVXJsICsgdmFsdWUpIDpcblx0XHRcdFx0XHRcdFx0XHRteUV2YWwodmFsdWUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0cGFyYW1zW25hbWVdID0gdmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJlbW92ZSBmdW5jdGlvbiBhdHRyaWJ1dGVzIGZyb20gRE9NTm9kZSB0byBwcmV2ZW50IFwiZG91YmxlIGNvbm5lY3RcIiBwcm9ibGVtLCBzZWUgIzE1MDI2LlxuXHRcdFx0Ly8gRG8gdGhpcyBhcyBhIHNlcGFyYXRlIGxvb3Agc2luY2UgYXR0cmlidXRlc1tdIGlzIG9mdGVuIGEgbGl2ZSBjb2xsZWN0aW9uIChkZXBlbmRzIG9uIHRoZSBicm93c2VyIHRob3VnaCkuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZnVuY0F0dHJzLmxlbmd0aDsgaisrKXtcblx0XHRcdFx0dmFyIGxjZm5hbWUgPSBmdW5jQXR0cnNbal0udG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0bm9kZS5yZW1vdmVBdHRyaWJ1dGUobGNmbmFtZSk7XG5cdFx0XHRcdG5vZGVbbGNmbmFtZV0gPSBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBNaXggdGhpbmdzIGZvdW5kIGluIGRhdGEtZG9qby1wcm9wcyBpbnRvIHRoZSBwYXJhbXMsIG92ZXJyaWRpbmcgYW55IGRpcmVjdCBzZXR0aW5nc1xuXHRcdFx0aWYoZXh0cmEpe1xuXHRcdFx0XHR0cnl7XG5cdFx0XHRcdFx0ZXh0cmEgPSBteUV2YWwuY2FsbChvcHRpb25zLnByb3BzVGhpcywgXCJ7XCIgKyBleHRyYSArIFwifVwiKTtcblx0XHRcdFx0XHRkbGFuZy5taXhpbihwYXJhbXMsIGV4dHJhKTtcblx0XHRcdFx0fWNhdGNoKGUpe1xuXHRcdFx0XHRcdC8vIGdpdmUgdGhlIHVzZXIgYSBwb2ludGVyIHRvIHRoZWlyIGludmFsaWQgcGFyYW1ldGVycy4gRklYTUU6IGNhbiB3ZSBraWxsIHRoaXMgaW4gcHJvZHVjdGlvbj9cblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoZS50b1N0cmluZygpICsgXCIgaW4gZGF0YS1kb2pvLXByb3BzPSdcIiArIGV4dHJhICsgXCInXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFueSBwYXJhbWV0ZXJzIHNwZWNpZmllZCBpbiBcIm1peGluXCIgb3ZlcnJpZGUgZXZlcnl0aGluZyBlbHNlLlxuXHRcdFx0ZGxhbmcubWl4aW4ocGFyYW1zLCBtaXhpbik7XG5cblx0XHRcdC8vIEdldCA8c2NyaXB0PiBub2RlcyBhc3NvY2lhdGVkIHdpdGggdGhpcyB3aWRnZXQsIGlmIHRoZXkgd2VyZW4ndCBzcGVjaWZpZWQgZXhwbGljaXRseVxuXHRcdFx0aWYoIXNjcmlwdHMpe1xuXHRcdFx0XHRzY3JpcHRzID0gKGN0b3IgJiYgKGN0b3IuX25vU2NyaXB0IHx8IHByb3RvLl9ub1NjcmlwdCkgPyBbXSA6IHF1ZXJ5KFwiPiBzY3JpcHRbdHlwZV49J2Rvam8vJ11cIiwgbm9kZSkpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBQcm9jZXNzIDxzY3JpcHQgdHlwZT1cImRvam8vKlwiPiBzY3JpcHQgdGFnc1xuXHRcdFx0Ly8gPHNjcmlwdCB0eXBlPVwiZG9qby9tZXRob2RcIiBkYXRhLWRvam8tZXZlbnQ9XCJmb29cIj4gdGFncyBhcmUgYWRkZWQgdG8gcGFyYW1zLCBhbmQgcGFzc2VkIHRvXG5cdFx0XHQvLyB0aGUgd2lkZ2V0IG9uIGluc3RhbnRpYXRpb24uXG5cdFx0XHQvLyA8c2NyaXB0IHR5cGU9XCJkb2pvL21ldGhvZFwiPiB0YWdzICh3aXRoIG5vIGV2ZW50KSBhcmUgZXhlY3V0ZWQgYWZ0ZXIgaW5zdGFudGlhdGlvblxuXHRcdFx0Ly8gPHNjcmlwdCB0eXBlPVwiZG9qby9jb25uZWN0XCIgZGF0YS1kb2pvLWV2ZW50PVwiZm9vXCI+IHRhZ3MgYXJlIGRvam8uY29ubmVjdGVkIGFmdGVyIGluc3RhbnRpYXRpb24sXG5cdFx0XHQvLyBhbmQgbGlrZXdpc2Ugd2l0aCA8c2NyaXB0IHR5cGU9XCJkb2pvL2FzcGVjdFwiIGRhdGEtZG9qby1tZXRob2Q9XCJmb29cIj5cblx0XHRcdC8vIDxzY3JpcHQgdHlwZT1cImRvam8vd2F0Y2hcIiBkYXRhLWRvam8tcHJvcD1cImZvb1wiPiB0YWdzIGFyZSBkb2pvLndhdGNoIGFmdGVyIGluc3RhbnRpYXRpb25cblx0XHRcdC8vIDxzY3JpcHQgdHlwZT1cImRvam8vb25cIiBkYXRhLWRvam8tZXZlbnQ9XCJmb29cIj4gdGFncyBhcmUgZG9qby5vbiBhZnRlciBpbnN0YW50aWF0aW9uXG5cdFx0XHQvLyBub3RlOiBkb2pvLyogc2NyaXB0IHRhZ3MgY2Fubm90IGV4aXN0IGluIHNlbGYgY2xvc2luZyB3aWRnZXRzLCBsaWtlIDxpbnB1dCAvPlxuXHRcdFx0dmFyIGFzcGVjdHMgPSBbXSxcdC8vIGFzcGVjdHMgdG8gY29ubmVjdCBhZnRlciBpbnN0YW50aWF0aW9uXG5cdFx0XHRcdGNhbGxzID0gW10sXHRcdC8vIGZ1bmN0aW9ucyB0byBjYWxsIGFmdGVyIGluc3RhbnRpYXRpb25cblx0XHRcdFx0d2F0Y2hlcyA9IFtdLCAgLy8gZnVuY3Rpb25zIHRvIHdhdGNoIGFmdGVyIGluc3RhbnRpYXRpb25cblx0XHRcdFx0b25zID0gW107IC8vIGZ1bmN0aW9ucyB0byBvbiBhZnRlciBpbnN0YW50aWF0aW9uXG5cblx0XHRcdGlmKHNjcmlwdHMpe1xuXHRcdFx0XHRmb3IoaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0XHR2YXIgc2NyaXB0ID0gc2NyaXB0c1tpXTtcblx0XHRcdFx0XHRub2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0XHRcdFx0Ly8gRklYTUU6IGRyb3AgZXZlbnQ9XCJcIiBzdXBwb3J0IGluIDIuMC4gdXNlIGRhdGEtZG9qby1ldmVudD1cIlwiIGluc3RlYWRcblx0XHRcdFx0XHR2YXIgZXZlbnQgPSAoc2NyaXB0LmdldEF0dHJpYnV0ZShhdHRyRGF0YSArIFwiZXZlbnRcIikgfHwgc2NyaXB0LmdldEF0dHJpYnV0ZShcImV2ZW50XCIpKSxcblx0XHRcdFx0XHRcdHByb3AgPSBzY3JpcHQuZ2V0QXR0cmlidXRlKGF0dHJEYXRhICsgXCJwcm9wXCIpLFxuXHRcdFx0XHRcdFx0bWV0aG9kID0gc2NyaXB0LmdldEF0dHJpYnV0ZShhdHRyRGF0YSArIFwibWV0aG9kXCIpLFxuXHRcdFx0XHRcdFx0YWR2aWNlID0gc2NyaXB0LmdldEF0dHJpYnV0ZShhdHRyRGF0YSArIFwiYWR2aWNlXCIpLFxuXHRcdFx0XHRcdFx0c2NyaXB0VHlwZSA9IHNjcmlwdC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpLFxuXHRcdFx0XHRcdFx0bmYgPSB0aGlzLl9mdW5jdGlvbkZyb21TY3JpcHQoc2NyaXB0LCBhdHRyRGF0YSk7XG5cdFx0XHRcdFx0aWYoZXZlbnQpe1xuXHRcdFx0XHRcdFx0aWYoc2NyaXB0VHlwZSA9PSBcImRvam8vY29ubmVjdFwiKXtcblx0XHRcdFx0XHRcdFx0YXNwZWN0cy5wdXNoKHsgbWV0aG9kOiBldmVudCwgZnVuYzogbmYgfSk7XG5cdFx0XHRcdFx0XHR9ZWxzZSBpZihzY3JpcHRUeXBlID09IFwiZG9qby9vblwiKXtcblx0XHRcdFx0XHRcdFx0b25zLnB1c2goeyBldmVudDogZXZlbnQsIGZ1bmM6IG5mIH0pO1xuXHRcdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRcdC8vIDxzY3JpcHQgdHlwZT1cImRvam8vbWV0aG9kXCIgZGF0YS1kb2pvLWV2ZW50PVwiZm9vXCI+XG5cdFx0XHRcdFx0XHRcdC8vIFRPRE8gZm9yIDIuMDogdXNlIGRhdGEtZG9qby1tZXRob2Q9XCJmb29cIiBpbnN0ZWFkIChhbHNvIGFmZmVjdHMgZGlqaXQvRGVjbGFyYXRpb24pXG5cdFx0XHRcdFx0XHRcdHBhcmFtc1tldmVudF0gPSBuZjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9ZWxzZSBpZihzY3JpcHRUeXBlID09IFwiZG9qby9hc3BlY3RcIil7XG5cdFx0XHRcdFx0XHRhc3BlY3RzLnB1c2goeyBtZXRob2Q6IG1ldGhvZCwgYWR2aWNlOiBhZHZpY2UsIGZ1bmM6IG5mIH0pO1xuXHRcdFx0XHRcdH1lbHNlIGlmKHNjcmlwdFR5cGUgPT0gXCJkb2pvL3dhdGNoXCIpe1xuXHRcdFx0XHRcdFx0d2F0Y2hlcy5wdXNoKHsgcHJvcDogcHJvcCwgZnVuYzogbmYgfSk7XG5cdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRjYWxscy5wdXNoKG5mKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gY3JlYXRlIHRoZSBpbnN0YW5jZVxuXHRcdFx0dmFyIG1hcmt1cEZhY3RvcnkgPSBjdG9yLm1hcmt1cEZhY3RvcnkgfHwgcHJvdG8ubWFya3VwRmFjdG9yeTtcblx0XHRcdHZhciBpbnN0YW5jZSA9IG1hcmt1cEZhY3RvcnkgPyBtYXJrdXBGYWN0b3J5KHBhcmFtcywgbm9kZSwgY3RvcikgOiBuZXcgY3RvcihwYXJhbXMsIG5vZGUpO1xuXG5cdFx0XHRmdW5jdGlvbiBvbkluc3RhbnRpYXRlKGluc3RhbmNlKXtcblx0XHRcdFx0Ly8gbWFwIGl0IHRvIHRoZSBKUyBuYW1lc3BhY2UgaWYgdGhhdCBtYWtlcyBzZW5zZVxuXHRcdFx0XHRpZihqc25hbWUpe1xuXHRcdFx0XHRcdGRsYW5nLnNldE9iamVjdChqc25hbWUsIGluc3RhbmNlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIHByb2Nlc3MgY29ubmVjdGlvbnMgYW5kIHN0YXJ0dXAgZnVuY3Rpb25zXG5cdFx0XHRcdGZvcihpID0gMDsgaSA8IGFzcGVjdHMubGVuZ3RoOyBpKyspe1xuXHRcdFx0XHRcdGFzcGVjdFthc3BlY3RzW2ldLmFkdmljZSB8fCBcImFmdGVyXCJdKGluc3RhbmNlLCBhc3BlY3RzW2ldLm1ldGhvZCwgZGxhbmcuaGl0Y2goaW5zdGFuY2UsIGFzcGVjdHNbaV0uZnVuYyksIHRydWUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvcihpID0gMDsgaSA8IGNhbGxzLmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0XHRjYWxsc1tpXS5jYWxsKGluc3RhbmNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IoaSA9IDA7IGkgPCB3YXRjaGVzLmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0XHRpbnN0YW5jZS53YXRjaCh3YXRjaGVzW2ldLnByb3AsIHdhdGNoZXNbaV0uZnVuYyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yKGkgPSAwOyBpIDwgb25zLmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0XHRkb24oaW5zdGFuY2UsIG9uc1tpXS5ldmVudCwgb25zW2ldLmZ1bmMpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGluc3RhbmNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihpbnN0YW5jZS50aGVuKXtcblx0XHRcdFx0cmV0dXJuIGluc3RhbmNlLnRoZW4ob25JbnN0YW50aWF0ZSk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cmV0dXJuIG9uSW5zdGFudGlhdGUoaW5zdGFuY2UpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRzY2FuOiBmdW5jdGlvbihyb290LCBvcHRpb25zKXtcblx0XHRcdC8vIHN1bW1hcnk6XG5cdFx0XHQvL1x0XHRTY2FuIGEgRE9NIHRyZWUgYW5kIHJldHVybiBhbiBhcnJheSBvZiBvYmplY3RzIHJlcHJlc2VudGluZyB0aGUgRE9NTm9kZXNcblx0XHRcdC8vXHRcdHRoYXQgbmVlZCB0byBiZSB0dXJuZWQgaW50byB3aWRnZXRzLlxuXHRcdFx0Ly8gZGVzY3JpcHRpb246XG5cdFx0XHQvL1x0XHRTZWFyY2ggc3BlY2lmaWVkIG5vZGUgKG9yIGRvY3VtZW50IHJvb3Qgbm9kZSkgcmVjdXJzaXZlbHkgZm9yIGNsYXNzIGluc3RhbmNlc1xuXHRcdFx0Ly9cdFx0YW5kIHJldHVybiBhbiBhcnJheSBvZiBvYmplY3RzIHRoYXQgcmVwcmVzZW50IHBvdGVudGlhbCB3aWRnZXRzIHRvIGJlXG5cdFx0XHQvL1x0XHRpbnN0YW50aWF0ZWQuIFNlYXJjaGVzIGZvciBlaXRoZXIgZGF0YS1kb2pvLXR5cGU9XCJNSURcIiBvciBkb2pvVHlwZT1cIk1JRFwiIHdoZXJlXG5cdFx0XHQvL1x0XHRcIk1JRFwiIGlzIGEgbW9kdWxlIElEIGxpa2UgXCJkaWppdC9mb3JtL0J1dHRvblwiIG9yIGEgZnVsbHkgcXVhbGlmaWVkIENsYXNzIG5hbWVcblx0XHRcdC8vXHRcdGxpa2UgXCJkaWppdC9mb3JtL0J1dHRvblwiLiAgSWYgdGhlIE1JRCBpcyBub3QgY3VycmVudGx5IGF2YWlsYWJsZSwgc2NhbiB3aWxsXG5cdFx0XHQvL1x0XHRhdHRlbXB0IHRvIHJlcXVpcmUoKSBpbiB0aGUgbW9kdWxlLlxuXHRcdFx0Ly9cblx0XHRcdC8vXHRcdFNlZSBwYXJzZXIucGFyc2UoKSBmb3IgZGV0YWlscyBvZiBtYXJrdXAuXG5cdFx0XHQvLyByb290OiBEb21Ob2RlP1xuXHRcdFx0Ly9cdFx0QSBkZWZhdWx0IHN0YXJ0aW5nIHJvb3Qgbm9kZSBmcm9tIHdoaWNoIHRvIHN0YXJ0IHRoZSBwYXJzaW5nLiBDYW4gYmVcblx0XHRcdC8vXHRcdG9taXR0ZWQsIGRlZmF1bHRpbmcgdG8gdGhlIGVudGlyZSBkb2N1bWVudC4gSWYgb21pdHRlZCwgdGhlIGBvcHRpb25zYFxuXHRcdFx0Ly9cdFx0b2JqZWN0IGNhbiBiZSBwYXNzZWQgaW4gdGhpcyBwbGFjZS4gSWYgdGhlIGBvcHRpb25zYCBvYmplY3QgaGFzIGFcblx0XHRcdC8vXHRcdGByb290Tm9kZWAgbWVtYmVyLCB0aGF0IGlzIHVzZWQuXG5cdFx0XHQvLyBvcHRpb25zOiBPYmplY3Rcblx0XHRcdC8vXHRcdGEga3dBcmdzIG9wdGlvbnMgb2JqZWN0LCBzZWUgcGFyc2UoKSBmb3IgZGV0YWlsc1xuXHRcdFx0Ly9cblx0XHRcdC8vIHJldHVybnM6IFByb21pc2Vcblx0XHRcdC8vXHRcdEEgcHJvbWlzZSB0aGF0IGlzIHJlc29sdmVkIHdpdGggdGhlIG5vZGVzIHRoYXQgaGF2ZSBiZWVuIHBhcnNlZC5cblxuXHRcdFx0dmFyIGxpc3QgPSBbXSwgLy8gT3V0cHV0IExpc3Rcblx0XHRcdFx0bWlkcyA9IFtdLCAvLyBBbiBhcnJheSBvZiBtb2R1bGVzIHRoYXQgYXJlIG5vdCB5ZXQgbG9hZGVkXG5cdFx0XHRcdG1pZHNIYXNoID0ge307IC8vIFVzZWQgdG8ga2VlcCB0aGUgbWlkcyBhcnJheSB1bmlxdWVcblxuXHRcdFx0dmFyIGRvam9UeXBlID0gKG9wdGlvbnMuc2NvcGUgfHwgZG9qby5fc2NvcGVOYW1lKSArIFwiVHlwZVwiLCAvLyB0eXBpY2FsbHkgXCJkb2pvVHlwZVwiXG5cdFx0XHRcdGF0dHJEYXRhID0gXCJkYXRhLVwiICsgKG9wdGlvbnMuc2NvcGUgfHwgZG9qby5fc2NvcGVOYW1lKSArIFwiLVwiLCAvLyB0eXBpY2FsbHkgXCJkYXRhLWRvam8tXCJcblx0XHRcdFx0ZGF0YURvam9UeXBlID0gYXR0ckRhdGEgKyBcInR5cGVcIiwgLy8gdHlwaWNhbGx5IFwiZGF0YS1kb2pvLXR5cGVcIlxuXHRcdFx0XHRkYXRhRG9qb1RleHREaXIgPSBhdHRyRGF0YSArIFwidGV4dGRpclwiLCAvLyB0eXBpY2FsbHkgXCJkYXRhLWRvam8tdGV4dGRpclwiXG5cdFx0XHRcdGRhdGFEb2pvTWl4aW5zID0gYXR0ckRhdGEgKyBcIm1peGluc1wiO1x0XHRcdFx0XHQvLyB0eXBpY2FsbHkgXCJkYXRhLWRvam8tbWl4aW5zXCJcblxuXHRcdFx0Ly8gSW5mbyBvbiBET01Ob2RlIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWRcblx0XHRcdHZhciBub2RlID0gcm9vdC5maXJzdENoaWxkO1xuXG5cdFx0XHQvLyBJbmZvIG9uIHBhcmVudCBvZiBET01Ob2RlIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWRcblx0XHRcdC8vXHQtIGluaGVyaXRlZDogZGlyLCBsYW5nLCBhbmQgdGV4dERpciBzZXR0aW5nIG9mIHBhcmVudCwgb3IgaW5oZXJpdGVkIGJ5IHBhcmVudFxuXHRcdFx0Ly9cdC0gcGFyZW50OiBwb2ludGVyIHRvIGlkZW50aWNhbCBzdHJ1Y3R1cmUgZm9yIG15IHBhcmVudCAob3IgbnVsbCBpZiBubyBwYXJlbnQpXG5cdFx0XHQvL1x0LSBzY3JpcHRzOiBpZiBzcGVjaWZpZWQsIGNvbGxlY3RzIDxzY3JpcHQgdHlwZT1cImRvam8vLi4uXCI+IHR5cGUgbm9kZXMgZnJvbSBjaGlsZHJlblxuXHRcdFx0dmFyIGluaGVyaXRlZCA9IG9wdGlvbnMuaW5oZXJpdGVkO1xuXHRcdFx0aWYoIWluaGVyaXRlZCl7XG5cdFx0XHRcdGZ1bmN0aW9uIGZpbmRBbmNlc3RvckF0dHIobm9kZSwgYXR0cil7XG5cdFx0XHRcdFx0cmV0dXJuIChub2RlLmdldEF0dHJpYnV0ZSAmJiBub2RlLmdldEF0dHJpYnV0ZShhdHRyKSkgfHxcblx0XHRcdFx0XHRcdChub2RlLnBhcmVudE5vZGUgJiYgZmluZEFuY2VzdG9yQXR0cihub2RlLnBhcmVudE5vZGUsIGF0dHIpKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGluaGVyaXRlZCA9IHtcblx0XHRcdFx0XHRkaXI6IGZpbmRBbmNlc3RvckF0dHIocm9vdCwgXCJkaXJcIiksXG5cdFx0XHRcdFx0bGFuZzogZmluZEFuY2VzdG9yQXR0cihyb290LCBcImxhbmdcIiksXG5cdFx0XHRcdFx0dGV4dERpcjogZmluZEFuY2VzdG9yQXR0cihyb290LCBkYXRhRG9qb1RleHREaXIpXG5cdFx0XHRcdH07XG5cdFx0XHRcdGZvcih2YXIga2V5IGluIGluaGVyaXRlZCl7XG5cdFx0XHRcdFx0aWYoIWluaGVyaXRlZFtrZXldKXtcblx0XHRcdFx0XHRcdGRlbGV0ZSBpbmhlcml0ZWRba2V5XTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gTWV0YWRhdGEgYWJvdXQgcGFyZW50IG5vZGVcblx0XHRcdHZhciBwYXJlbnQgPSB7XG5cdFx0XHRcdGluaGVyaXRlZDogaW5oZXJpdGVkXG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBGb3IgY29sbGVjdGluZyA8c2NyaXB0IHR5cGU9XCJkb2pvLy4uLlwiPiB0eXBlIG5vZGVzICh3aGVuIG51bGwsIHdlIGRvbid0IG5lZWQgdG8gY29sbGVjdClcblx0XHRcdHZhciBzY3JpcHRzO1xuXG5cdFx0XHQvLyB3aGVuIHRydWUsIG9ubHkgbG9vayBmb3IgPHNjcmlwdCB0eXBlPVwiZG9qby8uLi5cIj4gdGFncywgYW5kIGRvbid0IHJlY3Vyc2UgdG8gY2hpbGRyZW5cblx0XHRcdHZhciBzY3JpcHRzT25seTtcblxuXHRcdFx0ZnVuY3Rpb24gZ2V0RWZmZWN0aXZlKHBhcmVudCl7XG5cdFx0XHRcdC8vIHN1bW1hcnk6XG5cdFx0XHRcdC8vXHRcdEdldCBlZmZlY3RpdmUgZGlyLCBsYW5nLCB0ZXh0RGlyIHNldHRpbmdzIGZvciBzcGVjaWZpZWQgb2JqXG5cdFx0XHRcdC8vXHRcdChtYXRjaGluZyBcInBhcmVudFwiIG9iamVjdCBzdHJ1Y3R1cmUgYWJvdmUpLCBhbmQgZG8gY2FjaGluZy5cblx0XHRcdFx0Ly9cdFx0VGFrZSBjYXJlIG5vdCB0byByZXR1cm4gbnVsbCBlbnRyaWVzLlxuXHRcdFx0XHRpZighcGFyZW50LmluaGVyaXRlZCl7XG5cdFx0XHRcdFx0cGFyZW50LmluaGVyaXRlZCA9IHt9O1xuXHRcdFx0XHRcdHZhciBub2RlID0gcGFyZW50Lm5vZGUsXG5cdFx0XHRcdFx0XHRncmFuZHBhcmVudCA9IGdldEVmZmVjdGl2ZShwYXJlbnQucGFyZW50KTtcblx0XHRcdFx0XHR2YXIgaW5oZXJpdGVkID0ge1xuXHRcdFx0XHRcdFx0ZGlyOiBub2RlLmdldEF0dHJpYnV0ZShcImRpclwiKSB8fCBncmFuZHBhcmVudC5kaXIsXG5cdFx0XHRcdFx0XHRsYW5nOiBub2RlLmdldEF0dHJpYnV0ZShcImxhbmdcIikgfHwgZ3JhbmRwYXJlbnQubGFuZyxcblx0XHRcdFx0XHRcdHRleHREaXI6IG5vZGUuZ2V0QXR0cmlidXRlKGRhdGFEb2pvVGV4dERpcikgfHwgZ3JhbmRwYXJlbnQudGV4dERpclxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0Zm9yKHZhciBrZXkgaW4gaW5oZXJpdGVkKXtcblx0XHRcdFx0XHRcdGlmKGluaGVyaXRlZFtrZXldKXtcblx0XHRcdFx0XHRcdFx0cGFyZW50LmluaGVyaXRlZFtrZXldID0gaW5oZXJpdGVkW2tleV07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBwYXJlbnQuaW5oZXJpdGVkO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBERlMgb24gRE9NIHRyZWUsIGNvbGxlY3Rpbmcgbm9kZXMgd2l0aCBkYXRhLWRvam8tdHlwZSBzcGVjaWZpZWQuXG5cdFx0XHR3aGlsZSh0cnVlKXtcblx0XHRcdFx0aWYoIW5vZGUpe1xuXHRcdFx0XHRcdC8vIEZpbmlzaGVkIHRoaXMgbGV2ZWwsIGNvbnRpbnVlIHRvIHBhcmVudCdzIG5leHQgc2libGluZ1xuXHRcdFx0XHRcdGlmKCFwYXJlbnQgfHwgIXBhcmVudC5ub2RlKXtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRub2RlID0gcGFyZW50Lm5vZGUubmV4dFNpYmxpbmc7XG5cdFx0XHRcdFx0c2NyaXB0c09ubHkgPSBmYWxzZTtcblx0XHRcdFx0XHRwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuXHRcdFx0XHRcdHNjcmlwdHMgPSBwYXJlbnQuc2NyaXB0cztcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKG5vZGUubm9kZVR5cGUgIT0gMSl7XG5cdFx0XHRcdFx0Ly8gVGV4dCBvciBjb21tZW50IG5vZGUsIHNraXAgdG8gbmV4dCBzaWJsaW5nXG5cdFx0XHRcdFx0bm9kZSA9IG5vZGUubmV4dFNpYmxpbmc7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihzY3JpcHRzICYmIG5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PSBcInNjcmlwdFwiKXtcblx0XHRcdFx0XHQvLyBTYXZlIDxzY3JpcHQgdHlwZT1cImRvam8vLi4uXCI+IGZvciBwYXJlbnQsIHRoZW4gY29udGludWUgdG8gbmV4dCBzaWJsaW5nXG5cdFx0XHRcdFx0dHlwZSA9IG5vZGUuZ2V0QXR0cmlidXRlKFwidHlwZVwiKTtcblx0XHRcdFx0XHRpZih0eXBlICYmIC9eZG9qb1xcL1xcdy9pLnRlc3QodHlwZSkpe1xuXHRcdFx0XHRcdFx0c2NyaXB0cy5wdXNoKG5vZGUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRub2RlID0gbm9kZS5uZXh0U2libGluZztcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZihzY3JpcHRzT25seSl7XG5cdFx0XHRcdFx0Ly8gc2NyaXB0c09ubHkgZmxhZyBpcyBzZXQsIHdlIGhhdmUgYWxyZWFkeSBjb2xsZWN0ZWQgc2NyaXB0cyBpZiB0aGUgcGFyZW50IHdhbnRzIHRoZW0sIHNvIG5vdyB3ZSBzaG91bGRuJ3Rcblx0XHRcdFx0XHQvLyBjb250aW51ZSBmdXJ0aGVyIGFuYWx5c2lzIG9mIHRoZSBub2RlIGFuZCB3aWxsIGNvbnRpbnVlIHRvIHRoZSBuZXh0IHNpYmxpbmdcblx0XHRcdFx0XHRub2RlID0gbm9kZS5uZXh0U2libGluZztcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIENoZWNrIGZvciBkYXRhLWRvam8tdHlwZSBhdHRyaWJ1dGUsIGZhbGxiYWNrIHRvIGJhY2t3YXJkIGNvbXBhdGlibGUgZG9qb1R5cGVcblx0XHRcdFx0Ly8gVE9ETzogUmVtb3ZlIGRvam9UeXBlIGluIDIuMFxuXHRcdFx0XHR2YXIgdHlwZSA9IG5vZGUuZ2V0QXR0cmlidXRlKGRhdGFEb2pvVHlwZSkgfHwgbm9kZS5nZXRBdHRyaWJ1dGUoZG9qb1R5cGUpO1xuXG5cdFx0XHRcdC8vIFNob3J0IGNpcmN1aXQgZm9yIGxlYWYgbm9kZXMgY29udGFpbmluZyBub3RoaW5nIFtidXQgdGV4dF1cblx0XHRcdFx0dmFyIGZpcnN0Q2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG5cdFx0XHRcdGlmKCF0eXBlICYmICghZmlyc3RDaGlsZCB8fCAoZmlyc3RDaGlsZC5ub2RlVHlwZSA9PSAzICYmICFmaXJzdENoaWxkLm5leHRTaWJsaW5nKSkpe1xuXHRcdFx0XHRcdG5vZGUgPSBub2RlLm5leHRTaWJsaW5nO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gTWV0YSBkYXRhIGFib3V0IGN1cnJlbnQgbm9kZVxuXHRcdFx0XHR2YXIgY3VycmVudDtcblxuXHRcdFx0XHR2YXIgY3RvciA9IG51bGw7XG5cdFx0XHRcdGlmKHR5cGUpe1xuXHRcdFx0XHRcdC8vIElmIGRvam9UeXBlL2RhdGEtZG9qby10eXBlIHNwZWNpZmllZCwgYWRkIHRvIG91dHB1dCBhcnJheSBvZiBub2RlcyB0byBpbnN0YW50aWF0ZS5cblx0XHRcdFx0XHR2YXIgbWl4aW5zVmFsdWUgPSBub2RlLmdldEF0dHJpYnV0ZShkYXRhRG9qb01peGlucyksXG5cdFx0XHRcdFx0XHR0eXBlcyA9IG1peGluc1ZhbHVlID8gW3R5cGVdLmNvbmNhdChtaXhpbnNWYWx1ZS5zcGxpdCgvXFxzKixcXHMqLykpIDogW3R5cGVdO1xuXG5cdFx0XHRcdFx0Ly8gTm90ZTogd29uJ3QgZmluZCBjbGFzc2VzIGRlY2xhcmVkIHZpYSBkb2pvL0RlY2xhcmF0aW9uIG9yIGFueSBtb2R1bGVzIHRoYXQgaGF2ZW4ndCBiZWVuXG5cdFx0XHRcdFx0Ly8gbG9hZGVkIHlldCBzbyB1c2UgdHJ5L2NhdGNoIHRvIGF2b2lkIHRocm93IGZyb20gcmVxdWlyZSgpXG5cdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0Y3RvciA9IGdldEN0b3IodHlwZXMsIG9wdGlvbnMuY29udGV4dFJlcXVpcmUpO1xuXHRcdFx0XHRcdH1jYXRjaChlKXt9XG5cblx0XHRcdFx0XHQvLyBJZiB0aGUgY29uc3RydWN0b3Igd2FzIG5vdCBmb3VuZCwgY2hlY2sgdG8gc2VlIGlmIGl0IGhhcyBtb2R1bGVzIHRoYXQgY2FuIGJlIGxvYWRlZFxuXHRcdFx0XHRcdGlmKCFjdG9yKXtcblx0XHRcdFx0XHRcdGRhcnJheS5mb3JFYWNoKHR5cGVzLCBmdW5jdGlvbih0KXtcblx0XHRcdFx0XHRcdFx0aWYofnQuaW5kZXhPZignLycpICYmICFtaWRzSGFzaFt0XSl7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gSWYgdGhlIHR5cGUgbG9va3MgbGlrZSBhIE1JRCBhbmQgaXQgY3VycmVudGx5IGlzbid0IGluIHRoZSBhcnJheSBvZiBNSURzIHRvIGxvYWQsIGFkZCBpdC5cblx0XHRcdFx0XHRcdFx0XHRtaWRzSGFzaFt0XSA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0bWlkc1ttaWRzLmxlbmd0aF0gPSB0O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR2YXIgY2hpbGRTY3JpcHRzID0gY3RvciAmJiAhY3Rvci5wcm90b3R5cGUuX25vU2NyaXB0ID8gW10gOiBudWxsOyAvLyA8c2NyaXB0PiBub2RlcyB0aGF0IGFyZSBwYXJlbnQncyBjaGlsZHJlblxuXG5cdFx0XHRcdFx0Ly8gU2V0dXAgbWV0YSBkYXRhIGFib3V0IHRoaXMgd2lkZ2V0IG5vZGUsIGFuZCBzYXZlIGl0IHRvIGxpc3Qgb2Ygbm9kZXMgdG8gaW5zdGFudGlhdGVcblx0XHRcdFx0XHRjdXJyZW50ID0ge1xuXHRcdFx0XHRcdFx0dHlwZXM6IHR5cGVzLFxuXHRcdFx0XHRcdFx0Y3RvcjogY3Rvcixcblx0XHRcdFx0XHRcdHBhcmVudDogcGFyZW50LFxuXHRcdFx0XHRcdFx0bm9kZTogbm9kZSxcblx0XHRcdFx0XHRcdHNjcmlwdHM6IGNoaWxkU2NyaXB0c1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0Y3VycmVudC5pbmhlcml0ZWQgPSBnZXRFZmZlY3RpdmUoY3VycmVudCk7IC8vIGRpciAmIGxhbmcgc2V0dGluZ3MgZm9yIGN1cnJlbnQgbm9kZSwgZXhwbGljaXQgb3IgaW5oZXJpdGVkXG5cdFx0XHRcdFx0bGlzdC5wdXNoKGN1cnJlbnQpO1xuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHQvLyBNZXRhIGRhdGEgYWJvdXQgdGhpcyBub24td2lkZ2V0IG5vZGVcblx0XHRcdFx0XHRjdXJyZW50ID0ge1xuXHRcdFx0XHRcdFx0bm9kZTogbm9kZSxcblx0XHRcdFx0XHRcdHNjcmlwdHM6IHNjcmlwdHMsXG5cdFx0XHRcdFx0XHRwYXJlbnQ6IHBhcmVudFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBSZWN1cnNlLCBjb2xsZWN0aW5nIDxzY3JpcHQgdHlwZT1cImRvam8vLi4uXCI+IGNoaWxkcmVuLCBhbmQgYWxzbyBsb29raW5nIGZvclxuXHRcdFx0XHQvLyBkZXNjZW5kYW50IG5vZGVzIHdpdGggZG9qb1R5cGUgc3BlY2lmaWVkICh1bmxlc3MgdGhlIHdpZGdldCBoYXMgdGhlIHN0b3BQYXJzZXIgZmxhZykuXG5cdFx0XHRcdC8vIFdoZW4gZmluaXNoZWQgd2l0aCBjaGlsZHJlbiwgZ28gdG8gbXkgbmV4dCBzaWJsaW5nLlxuXHRcdFx0XHRzY3JpcHRzID0gY2hpbGRTY3JpcHRzO1xuXHRcdFx0XHRzY3JpcHRzT25seSA9IG5vZGUuc3RvcFBhcnNlciB8fCAoY3RvciAmJiBjdG9yLnByb3RvdHlwZS5zdG9wUGFyc2VyICYmICEob3B0aW9ucy50ZW1wbGF0ZSkpO1xuXHRcdFx0XHRwYXJlbnQgPSBjdXJyZW50O1xuXHRcdFx0XHRub2RlID0gZmlyc3RDaGlsZDtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGQgPSBuZXcgRGVmZXJyZWQoKTtcblxuXHRcdFx0Ly8gSWYgdGhlcmUgYXJlIG1vZHVsZXMgdG8gbG9hZCB0aGVuIHJlcXVpcmUgdGhlbSBpblxuXHRcdFx0aWYobWlkcy5sZW5ndGgpe1xuXHRcdFx0XHQvLyBXYXJuIHRoYXQgdGhlcmUgYXJlIG1vZHVsZXMgYmVpbmcgYXV0by1yZXF1aXJlZFxuXHRcdFx0XHRpZihoYXMoXCJkb2pvLWRlYnVnLW1lc3NhZ2VzXCIpKXtcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oXCJXQVJOSU5HOiBNb2R1bGVzIGJlaW5nIEF1dG8tUmVxdWlyZWQ6IFwiICsgbWlkcy5qb2luKFwiLCBcIikpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciByID0gb3B0aW9ucy5jb250ZXh0UmVxdWlyZSB8fCByZXF1aXJlO1xuXHRcdFx0XHRyKG1pZHMsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0Ly8gR28gdGhyb3VnaCBsaXN0IG9mIHdpZGdldCBub2RlcywgZmlsbGluZyBpbiBtaXNzaW5nIGNvbnN0cnVjdG9ycywgYW5kIGZpbHRlcmluZyBvdXQgbm9kZXMgdGhhdCBzaG91bGRuJ3Rcblx0XHRcdFx0XHQvLyBiZSBpbnN0YW50aWF0ZWQgZHVlIHRvIGEgc3RvcFBhcnNlciBmbGFnIG9uIGFuIGFuY2VzdG9yIHRoYXQgd2UgYmVsYXRlZGx5IGxlYXJuZWQgYWJvdXQgZHVlIHRvXG5cdFx0XHRcdFx0Ly8gYXV0by1yZXF1aXJlIG9mIGEgbW9kdWxlIGxpa2UgQ29udGVudFBhbmUuICAgQXNzdW1lcyBsaXN0IGlzIGluIERGUyBvcmRlci5cblx0XHRcdFx0XHRkLnJlc29sdmUoZGFycmF5LmZpbHRlcihsaXN0LCBmdW5jdGlvbih3aWRnZXQpe1xuXHRcdFx0XHRcdFx0aWYoIXdpZGdldC5jdG9yKXtcblx0XHRcdFx0XHRcdFx0Ly8gQXR0ZW1wdCB0byBmaW5kIHRoZSBjb25zdHJ1Y3RvciBhZ2Fpbi4gICBTdGlsbCB3b24ndCBmaW5kIGNsYXNzZXMgZGVmaW5lZCB2aWFcblx0XHRcdFx0XHRcdFx0Ly8gZGlqaXQvRGVjbGFyYXRpb24gc28gbmVlZCB0byB0cnkvY2F0Y2guXG5cdFx0XHRcdFx0XHRcdHRyeXtcblx0XHRcdFx0XHRcdFx0XHR3aWRnZXQuY3RvciA9IGdldEN0b3Iod2lkZ2V0LnR5cGVzLCBvcHRpb25zLmNvbnRleHRSZXF1aXJlKTtcblx0XHRcdFx0XHRcdFx0fWNhdGNoKGUpe31cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gR2V0IHRoZSBwYXJlbnQgd2lkZ2V0XG5cdFx0XHRcdFx0XHR2YXIgcGFyZW50ID0gd2lkZ2V0LnBhcmVudDtcblx0XHRcdFx0XHRcdHdoaWxlKHBhcmVudCAmJiAhcGFyZW50LnR5cGVzKXtcblx0XHRcdFx0XHRcdFx0cGFyZW50ID0gcGFyZW50LnBhcmVudDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gUmV0dXJuIGZhbHNlIGlmIHRoaXMgbm9kZSBzaG91bGQgYmUgc2tpcHBlZCBkdWUgdG8gc3RvcFBhcnNlciBvbiBhbiBhbmNlc3Rvci5cblx0XHRcdFx0XHRcdC8vIFNpbmNlIGxpc3RbXSBpcyBpbiBERlMgb3JkZXIsIHRoaXMgbG9vcCB3aWxsIGFsd2F5cyBzZXQgcGFyZW50Lmluc3RhbnRpYXRlQ2hpbGRyZW4gYmVmb3JlXG5cdFx0XHRcdFx0XHQvLyB0cnlpbmcgdG8gY29tcHV0ZSB3aWRnZXQuaW5zdGFudGlhdGUuXG5cdFx0XHRcdFx0XHR2YXIgcHJvdG8gPSB3aWRnZXQuY3RvciAmJiB3aWRnZXQuY3Rvci5wcm90b3R5cGU7XG5cdFx0XHRcdFx0XHR3aWRnZXQuaW5zdGFudGlhdGVDaGlsZHJlbiA9ICEocHJvdG8gJiYgcHJvdG8uc3RvcFBhcnNlciAmJiAhKG9wdGlvbnMudGVtcGxhdGUpKTtcblx0XHRcdFx0XHRcdHdpZGdldC5pbnN0YW50aWF0ZSA9ICFwYXJlbnQgfHwgKHBhcmVudC5pbnN0YW50aWF0ZSAmJiBwYXJlbnQuaW5zdGFudGlhdGVDaGlsZHJlbik7XG5cdFx0XHRcdFx0XHRyZXR1cm4gd2lkZ2V0Lmluc3RhbnRpYXRlO1xuXHRcdFx0XHRcdH0pKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0Ly8gVGhlcmUgd2VyZSBubyBtb2R1bGVzIHRvIGxvYWQsIHNvIGp1c3QgcmVzb2x2ZSB3aXRoIHRoZSBwYXJzZWQgbm9kZXMuICAgVGhpcyBzZXBhcmF0ZSBjb2RlIHBhdGggaXMgZm9yXG5cdFx0XHRcdC8vIGVmZmljaWVuY3ksIHRvIGF2b2lkIHJ1bm5pbmcgdGhlIHJlcXVpcmUoKSBhbmQgdGhlIGNhbGxiYWNrIGNvZGUgYWJvdmUuXG5cdFx0XHRcdGQucmVzb2x2ZShsaXN0KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmV0dXJuIHRoZSBwcm9taXNlXG5cdFx0XHRyZXR1cm4gZC5wcm9taXNlO1xuXHRcdH0sXG5cblx0XHRfcmVxdWlyZTogZnVuY3Rpb24oLypET01Ob2RlKi8gc2NyaXB0LCAvKk9iamVjdD8qLyBvcHRpb25zKXtcblx0XHRcdC8vIHN1bW1hcnk6XG5cdFx0XHQvL1x0XHRIZWxwZXIgZm9yIF9zY2FuQU1EKCkuICBUYWtlcyBhIGA8c2NyaXB0IHR5cGU9ZG9qby9yZXF1aXJlPmJhcjogXCJhY21lL2JhclwiLCAuLi48L3NjcmlwdD5gIG5vZGUsXG5cdFx0XHQvL1x0XHRjYWxscyByZXF1aXJlKCkgdG8gbG9hZCB0aGUgc3BlY2lmaWVkIG1vZHVsZXMgYW5kIChhc3luY2hyb25vdXNseSkgYXNzaWduIHRoZW0gdG8gdGhlIHNwZWNpZmllZCBnbG9iYWxcblx0XHRcdC8vXHRcdHZhcmlhYmxlcywgYW5kIHJldHVybnMgYSBQcm9taXNlIGZvciB3aGVuIHRoYXQgb3BlcmF0aW9uIGNvbXBsZXRlcy5cblx0XHRcdC8vXG5cdFx0XHQvL1x0XHRJbiB0aGUgZXhhbXBsZSBhYm92ZSwgaXQgaXMgZWZmZWN0aXZlbHkgZG9pbmcgYSByZXF1aXJlKFtcImFjbWUvYmFyXCIsIC4uLl0sIGZ1bmN0aW9uKGEpeyBiYXIgPSBhOyB9KS5cblxuXHRcdFx0dmFyIGhhc2ggPSBteUV2YWwoXCJ7XCIgKyBzY3JpcHQuaW5uZXJIVE1MICsgXCJ9XCIpLCAvLyBjYW4ndCB1c2UgZG9qby9qc29uOjpwYXJzZSgpIGJlY2F1c2UgbWF5YmUgbm8gcXVvdGVzXG5cdFx0XHRcdHZhcnMgPSBbXSxcblx0XHRcdFx0bWlkcyA9IFtdLFxuXHRcdFx0XHRkID0gbmV3IERlZmVycmVkKCk7XG5cblx0XHRcdHZhciBjb250ZXh0UmVxdWlyZSA9IChvcHRpb25zICYmIG9wdGlvbnMuY29udGV4dFJlcXVpcmUpIHx8IHJlcXVpcmU7XG5cblx0XHRcdGZvcih2YXIgbmFtZSBpbiBoYXNoKXtcblx0XHRcdFx0dmFycy5wdXNoKG5hbWUpO1xuXHRcdFx0XHRtaWRzLnB1c2goaGFzaFtuYW1lXSk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnRleHRSZXF1aXJlKG1pZHMsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCB2YXJzLmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0XHRkbGFuZy5zZXRPYmplY3QodmFyc1tpXSwgYXJndW1lbnRzW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkLnJlc29sdmUoYXJndW1lbnRzKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gZC5wcm9taXNlO1xuXHRcdH0sXG5cblx0XHRfc2NhbkFtZDogZnVuY3Rpb24ocm9vdCwgb3B0aW9ucyl7XG5cdFx0XHQvLyBzdW1tYXJ5OlxuXHRcdFx0Ly9cdFx0U2NhbnMgdGhlIERPTSBmb3IgYW55IGRlY2xhcmF0aXZlIHJlcXVpcmVzIGFuZCByZXR1cm5zIHRoZWlyIHZhbHVlcy5cblx0XHRcdC8vIGRlc2NyaXB0aW9uOlxuXHRcdFx0Ly9cdFx0TG9va3MgZm9yIGA8c2NyaXB0IHR5cGU9ZG9qby9yZXF1aXJlPmJhcjogXCJhY21lL2JhclwiLCAuLi48L3NjcmlwdD5gIG5vZGUsIGNhbGxzIHJlcXVpcmUoKSB0byBsb2FkIHRoZVxuXHRcdFx0Ly9cdFx0c3BlY2lmaWVkIG1vZHVsZXMgYW5kIChhc3luY2hyb25vdXNseSkgYXNzaWduIHRoZW0gdG8gdGhlIHNwZWNpZmllZCBnbG9iYWwgdmFyaWFibGVzLFxuXHRcdFx0Ly9cdFx0YW5kIHJldHVybnMgYSBQcm9taXNlIGZvciB3aGVuIHRob3NlIG9wZXJhdGlvbnMgY29tcGxldGUuXG5cdFx0XHQvLyByb290OiBEb21Ob2RlXG5cdFx0XHQvL1x0XHRUaGUgbm9kZSB0byBiYXNlIHRoZSBzY2FuIGZyb20uXG5cdFx0XHQvLyBvcHRpb25zOiBPYmplY3Q/XG5cdFx0XHQvL1x0XHRhIGt3QXJncyBvcHRpb25zIG9iamVjdCwgc2VlIHBhcnNlKCkgZm9yIGRldGFpbHNcblxuXHRcdFx0Ly8gUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gYWxsIHRoZSA8c2NyaXB0IHR5cGU9ZG9qby9yZXF1aXJlPiBub2RlcyBoYXZlIGZpbmlzaGVkIGxvYWRpbmcuXG5cdFx0XHR2YXIgZGVmZXJyZWQgPSBuZXcgRGVmZXJyZWQoKSxcblx0XHRcdFx0cHJvbWlzZSA9IGRlZmVycmVkLnByb21pc2U7XG5cdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHRydWUpO1xuXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0XHRxdWVyeShcInNjcmlwdFt0eXBlPSdkb2pvL3JlcXVpcmUnXVwiLCByb290KS5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpe1xuXHRcdFx0XHQvLyBGaXJlIG9mZiByZXF1aXJlKCkgY2FsbCBmb3Igc3BlY2lmaWVkIG1vZHVsZXMuICBDaGFpbiB0aGlzIHJlcXVpcmUgdG8gZmlyZSBhZnRlclxuXHRcdFx0XHQvLyBhbnkgcHJldmlvdXMgcmVxdWlyZXMgY29tcGxldGUsIHNvIHRoYXQgbGF5ZXJzIGNhbiBiZSBsb2FkZWQgYmVmb3JlIGluZGl2aWR1YWwgbW9kdWxlIHJlcXVpcmUoKSdzIGZpcmUuXG5cdFx0XHRcdHByb21pc2UgPSBwcm9taXNlLnRoZW4oZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRyZXR1cm4gc2VsZi5fcmVxdWlyZShub2RlLCBvcHRpb25zKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly8gUmVtb3ZlIGZyb20gRE9NIHNvIGl0IGlzbid0IHNlZW4gYWdhaW5cblx0XHRcdFx0bm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHRcdH0sXG5cblx0XHRwYXJzZTogZnVuY3Rpb24ocm9vdE5vZGUsIG9wdGlvbnMpe1xuXHRcdFx0Ly8gc3VtbWFyeTpcblx0XHRcdC8vXHRcdFNjYW4gdGhlIERPTSBmb3IgY2xhc3MgaW5zdGFuY2VzLCBhbmQgaW5zdGFudGlhdGUgdGhlbS5cblx0XHRcdC8vIGRlc2NyaXB0aW9uOlxuXHRcdFx0Ly9cdFx0U2VhcmNoIHNwZWNpZmllZCBub2RlIChvciByb290IG5vZGUpIHJlY3Vyc2l2ZWx5IGZvciBjbGFzcyBpbnN0YW5jZXMsXG5cdFx0XHQvL1x0XHRhbmQgaW5zdGFudGlhdGUgdGhlbS4gU2VhcmNoZXMgZm9yIGVpdGhlciBkYXRhLWRvam8tdHlwZT1cIkNsYXNzXCIgb3Jcblx0XHRcdC8vXHRcdGRvam9UeXBlPVwiQ2xhc3NcIiB3aGVyZSBcIkNsYXNzXCIgaXMgYSBhIGZ1bGx5IHF1YWxpZmllZCBjbGFzcyBuYW1lLFxuXHRcdFx0Ly9cdFx0bGlrZSBgZGlqaXQvZm9ybS9CdXR0b25gXG5cdFx0XHQvL1xuXHRcdFx0Ly9cdFx0VXNpbmcgYGRhdGEtZG9qby10eXBlYDpcblx0XHRcdC8vXHRcdEF0dHJpYnV0ZXMgdXNpbmcgY2FuIGJlIG1peGVkIGludG8gdGhlIHBhcmFtZXRlcnMgdXNlZCB0byBpbnN0YW50aWF0ZSB0aGVcblx0XHRcdC8vXHRcdENsYXNzIGJ5IHVzaW5nIGEgYGRhdGEtZG9qby1wcm9wc2AgYXR0cmlidXRlIG9uIHRoZSBub2RlIGJlaW5nIGNvbnZlcnRlZC5cblx0XHRcdC8vXHRcdGBkYXRhLWRvam8tcHJvcHNgIHNob3VsZCBiZSBhIHN0cmluZyBhdHRyaWJ1dGUgdG8gYmUgY29udmVydGVkIGZyb20gSlNPTi5cblx0XHRcdC8vXG5cdFx0XHQvL1x0XHRVc2luZyBgZG9qb1R5cGVgOlxuXHRcdFx0Ly9cdFx0QXR0cmlidXRlcyBhcmUgcmVhZCBmcm9tIHRoZSBvcmlnaW5hbCBkb21Ob2RlIGFuZCBjb252ZXJ0ZWQgdG8gYXBwcm9wcmlhdGVcblx0XHRcdC8vXHRcdHR5cGVzIGJ5IGxvb2tpbmcgdXAgdGhlIENsYXNzIHByb3RvdHlwZSB2YWx1ZXMuIFRoaXMgaXMgdGhlIGRlZmF1bHQgYmVoYXZpb3Jcblx0XHRcdC8vXHRcdGZyb20gRG9qbyAxLjAgdG8gRG9qbyAxLjUuIGBkb2pvVHlwZWAgc3VwcG9ydCBpcyBkZXByZWNhdGVkLCBhbmQgd2lsbFxuXHRcdFx0Ly9cdFx0Z28gYXdheSBpbiBEb2pvIDIuMC5cblx0XHRcdC8vIHJvb3ROb2RlOiBEb21Ob2RlP1xuXHRcdFx0Ly9cdFx0QSBkZWZhdWx0IHN0YXJ0aW5nIHJvb3Qgbm9kZSBmcm9tIHdoaWNoIHRvIHN0YXJ0IHRoZSBwYXJzaW5nLiBDYW4gYmVcblx0XHRcdC8vXHRcdG9taXR0ZWQsIGRlZmF1bHRpbmcgdG8gdGhlIGVudGlyZSBkb2N1bWVudC4gSWYgb21pdHRlZCwgdGhlIGBvcHRpb25zYFxuXHRcdFx0Ly9cdFx0b2JqZWN0IGNhbiBiZSBwYXNzZWQgaW4gdGhpcyBwbGFjZS4gSWYgdGhlIGBvcHRpb25zYCBvYmplY3QgaGFzIGFcblx0XHRcdC8vXHRcdGByb290Tm9kZWAgbWVtYmVyLCB0aGF0IGlzIHVzZWQuXG5cdFx0XHQvLyBvcHRpb25zOiBPYmplY3Q/XG5cdFx0XHQvL1x0XHRBIGhhc2ggb2Ygb3B0aW9ucy5cblx0XHRcdC8vXG5cdFx0XHQvL1x0XHQtIG5vU3RhcnQ6IEJvb2xlYW4/OlxuXHRcdFx0Ly9cdFx0XHR3aGVuIHNldCB3aWxsIHByZXZlbnQgdGhlIHBhcnNlciBmcm9tIGNhbGxpbmcgLnN0YXJ0dXAoKVxuXHRcdFx0Ly9cdFx0XHR3aGVuIGxvY2F0aW5nIHRoZSBub2Rlcy5cblx0XHRcdC8vXHRcdC0gcm9vdE5vZGU6IERvbU5vZGU/OlxuXHRcdFx0Ly9cdFx0XHRpZGVudGljYWwgdG8gdGhlIGZ1bmN0aW9uJ3MgYHJvb3ROb2RlYCBhcmd1bWVudCwgdGhvdWdoXG5cdFx0XHQvL1x0XHRcdGFsbG93ZWQgdG8gYmUgcGFzc2VkIGluIHZpYSB0aGlzIGBvcHRpb25zIG9iamVjdC5cblx0XHRcdC8vXHRcdC0gdGVtcGxhdGU6IEJvb2xlYW46XG5cdFx0XHQvL1x0XHRcdElmIHRydWUsIGlnbm9yZXMgQ29udGVudFBhbmUncyBzdG9wUGFyc2VyIGZsYWcgYW5kIHBhcnNlcyBjb250ZW50cyBpbnNpZGUgb2Zcblx0XHRcdC8vXHRcdFx0YSBDb250ZW50UGFuZSBpbnNpZGUgb2YgYSB0ZW1wbGF0ZS4gICBUaGlzIGFsbG93cyBkb2pvQXR0YWNoUG9pbnQgb24gd2lkZ2V0cy9ub2Rlc1xuXHRcdFx0Ly9cdFx0XHRuZXN0ZWQgaW5zaWRlIHRoZSBDb250ZW50UGFuZSB0byB3b3JrLlxuXHRcdFx0Ly9cdFx0LSBpbmhlcml0ZWQ6IE9iamVjdDpcblx0XHRcdC8vXHRcdFx0SGFzaCBwb3NzaWJseSBjb250YWluaW5nIGRpciBhbmQgbGFuZyBzZXR0aW5ncyB0byBiZSBhcHBsaWVkIHRvXG5cdFx0XHQvL1x0XHRcdHBhcnNlZCB3aWRnZXRzLCB1bmxlc3MgdGhlcmUncyBhbm90aGVyIHNldHRpbmcgb24gYSBzdWItbm9kZSB0aGF0IG92ZXJyaWRlc1xuXHRcdFx0Ly9cdFx0LSBzY29wZTogU3RyaW5nOlxuXHRcdFx0Ly9cdFx0XHRSb290IGZvciBhdHRyaWJ1dGUgbmFtZXMgdG8gc2VhcmNoIGZvci4gICBJZiBzY29wZU5hbWUgaXMgZG9qbyxcblx0XHRcdC8vXHRcdFx0d2lsbCBzZWFyY2ggZm9yIGRhdGEtZG9qby10eXBlIChvciBkb2pvVHlwZSkuICAgRm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5cdFx0XHQvL1x0XHRcdHJlYXNvbnMgZGVmYXVsdHMgdG8gZG9qby5fc2NvcGVOYW1lICh3aGljaCBpcyBcImRvam9cIiBleGNlcHQgd2hlblxuXHRcdFx0Ly9cdFx0XHRtdWx0aS12ZXJzaW9uIHN1cHBvcnQgaXMgdXNlZCwgd2hlbiBpdCB3aWxsIGJlIHNvbWV0aGluZyBsaWtlIGRvam8xNiwgZG9qbzIwLCBldGMuKVxuXHRcdFx0Ly9cdFx0LSBwcm9wc1RoaXM6IE9iamVjdDpcblx0XHRcdC8vXHRcdFx0SWYgc3BlY2lmaWVkLCBcInRoaXNcIiByZWZlcmVuY2VkIGZyb20gZGF0YS1kb2pvLXByb3BzIHdpbGwgcmVmZXIgdG8gcHJvcHNUaGlzLlxuXHRcdFx0Ly9cdFx0XHRJbnRlbmRlZCBmb3IgdXNlIGZyb20gdGhlIHdpZGdldHMtaW4tdGVtcGxhdGUgZmVhdHVyZSBvZiBgZGlqaXQuX1dpZGdldHNJblRlbXBsYXRlTWl4aW5gXG5cdFx0XHQvL1x0XHQtIGNvbnRleHRSZXF1aXJlOiBGdW5jdGlvbjpcblx0XHRcdC8vXHRcdFx0SWYgc3BlY2lmaWVkLCB0aGlzIHJlcXVpcmUgaXMgdXRpbGlzZWQgZm9yIGxvb2tpbmcgcmVzb2x2aW5nIG1vZHVsZXMgaW5zdGVhZCBvZiB0aGVcblx0XHRcdC8vXHRcdFx0YGRvam8vcGFyc2VyYCBjb250ZXh0IGByZXF1aXJlKClgLiAgSW50ZW5kZWQgZm9yIHVzZSBmcm9tIHRoZSB3aWRnZXRzLWluLXRlbXBsYXRlIGZlYXR1cmUgb2Zcblx0XHRcdC8vXHRcdFx0YGRpaml0Ll9XaWRnZXRzSW5UZW1wbGF0ZU1peGluYC5cblx0XHRcdC8vIHJldHVybnM6IE1peGVkXG5cdFx0XHQvL1x0XHRSZXR1cm5zIGEgYmxlbmRlZCBvYmplY3QgdGhhdCBpcyBhbiBhcnJheSBvZiB0aGUgaW5zdGFudGlhdGVkIG9iamVjdHMsIGJ1dCBhbHNvIGNhbiBpbmNsdWRlXG5cdFx0XHQvL1x0XHRhIHByb21pc2UgdGhhdCBpcyByZXNvbHZlZCB3aXRoIHRoZSBpbnN0YW50aWF0ZWQgb2JqZWN0cy4gIFRoaXMgaXMgZG9uZSBmb3IgYmFja3dhcmRzXG5cdFx0XHQvL1x0XHRjb21wYXRpYmlsaXR5LiAgSWYgdGhlIHBhcnNlciBhdXRvLXJlcXVpcmVzIG1vZHVsZXMsIGl0IHdpbGwgYWx3YXlzIGJlaGF2ZSBpbiBhIHByb21pc2Vcblx0XHRcdC8vXHRcdGZhc2hpb24gYW5kIGBwYXJzZXIucGFyc2UoKS50aGVuKGZ1bmN0aW9uKGluc3RhbmNlcyl7Li4ufSlgIHNob3VsZCBiZSB1c2VkLlxuXHRcdFx0Ly8gZXhhbXBsZTpcblx0XHRcdC8vXHRcdFBhcnNlIGFsbCB3aWRnZXRzIG9uIGEgcGFnZTpcblx0XHRcdC8vXHR8XHRcdHBhcnNlci5wYXJzZSgpO1xuXHRcdFx0Ly8gZXhhbXBsZTpcblx0XHRcdC8vXHRcdFBhcnNlIGFsbCBjbGFzc2VzIHdpdGhpbiB0aGUgbm9kZSB3aXRoIGlkPVwiZm9vXCJcblx0XHRcdC8vXHR8XHRcdHBhcnNlci5wYXJzZShkb2pvLmJ5SWQoJ2ZvbycpKTtcblx0XHRcdC8vIGV4YW1wbGU6XG5cdFx0XHQvL1x0XHRQYXJzZSBhbGwgY2xhc3NlcyBpbiBhIHBhZ2UsIGJ1dCBkbyBub3QgY2FsbCAuc3RhcnR1cCgpIG9uIGFueVxuXHRcdFx0Ly9cdFx0Y2hpbGRcblx0XHRcdC8vXHR8XHRcdHBhcnNlci5wYXJzZSh7IG5vU3RhcnQ6IHRydWUgfSlcblx0XHRcdC8vIGV4YW1wbGU6XG5cdFx0XHQvL1x0XHRQYXJzZSBhbGwgY2xhc3NlcyBpbiBhIG5vZGUsIGJ1dCBkbyBub3QgY2FsbCAuc3RhcnR1cCgpXG5cdFx0XHQvL1x0fFx0XHRwYXJzZXIucGFyc2Uoc29tZU5vZGUsIHsgbm9TdGFydDp0cnVlIH0pO1xuXHRcdFx0Ly9cdHxcdFx0Ly8gb3Jcblx0XHRcdC8vXHR8XHRcdHBhcnNlci5wYXJzZSh7IG5vU3RhcnQ6dHJ1ZSwgcm9vdE5vZGU6IHNvbWVOb2RlIH0pO1xuXG5cdFx0XHQvLyBkZXRlcm1pbmUgdGhlIHJvb3Qgbm9kZSBhbmQgb3B0aW9ucyBiYXNlZCBvbiB0aGUgcGFzc2VkIGFyZ3VtZW50cy5cblx0XHRcdGlmKHJvb3ROb2RlICYmIHR5cGVvZiByb290Tm9kZSAhPSBcInN0cmluZ1wiICYmICEoXCJub2RlVHlwZVwiIGluIHJvb3ROb2RlKSl7XG5cdFx0XHRcdC8vIElmIGNhbGxlZCBhcyBwYXJzZShvcHRpb25zKSByYXRoZXIgdGhhbiBwYXJzZSgpLCBwYXJzZShyb290Tm9kZSksIG9yIHBhcnNlKHJvb3ROb2RlLCBvcHRpb25zKS4uLlxuXHRcdFx0XHRvcHRpb25zID0gcm9vdE5vZGU7XG5cdFx0XHRcdHJvb3ROb2RlID0gb3B0aW9ucy5yb290Tm9kZTtcblx0XHRcdH1cblx0XHRcdHZhciByb290ID0gcm9vdE5vZGUgPyBkb20uYnlJZChyb290Tm9kZSkgOiBkd2luZG93LmJvZHkoKTtcblx0XHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdFx0XHR2YXIgbWl4aW4gPSBvcHRpb25zLnRlbXBsYXRlID8geyB0ZW1wbGF0ZTogdHJ1ZSB9IDoge30sXG5cdFx0XHRcdGluc3RhbmNlcyA9IFtdLFxuXHRcdFx0XHRzZWxmID0gdGhpcztcblxuXHRcdFx0Ly8gRmlyc3Qgc2NhbiBmb3IgYW55IDxzY3JpcHQgdHlwZT1kb2pvL3JlcXVpcmU+IG5vZGVzLCBhbmQgZXhlY3V0ZS5cblx0XHRcdC8vIFRoZW4gc2NhbiBmb3IgYWxsIG5vZGVzIHdpdGggZGF0YS1kb2pvLXR5cGUsIGFuZCBsb2FkIGFueSB1bmxvYWRlZCBtb2R1bGVzLlxuXHRcdFx0Ly8gVGhlbiBidWlsZCB0aGUgb2JqZWN0IGluc3RhbmNlcy4gIEFkZCBpbnN0YW5jZXMgdG8gYWxyZWFkeSBleGlzdGluZyAoYnV0IGVtcHR5KSBpbnN0YW5jZXNbXSBhcnJheSxcblx0XHRcdC8vIHdoaWNoIG1heSBhbHJlYWR5IGhhdmUgYmVlbiByZXR1cm5lZCB0byBjYWxsZXIuICBBbHNvLCB1c2Ugb3RoZXJ3aXNlIHRvIGNvbGxlY3QgYW5kIHRocm93IGFueSBlcnJvcnNcblx0XHRcdC8vIHRoYXQgb2NjdXIgZHVyaW5nIHRoZSBwYXJzZSgpLlxuXHRcdFx0dmFyIHAgPVxuXHRcdFx0XHR0aGlzLl9zY2FuQW1kKHJvb3QsIG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRyZXR1cm4gc2VsZi5zY2FuKHJvb3QsIG9wdGlvbnMpO1xuXHRcdFx0XHR9KS50aGVuKGZ1bmN0aW9uKHBhcnNlZE5vZGVzKXtcblx0XHRcdFx0XHRyZXR1cm4gc2VsZi5faW5zdGFudGlhdGUocGFyc2VkTm9kZXMsIG1peGluLCBvcHRpb25zLCB0cnVlKTtcblx0XHRcdFx0fSkudGhlbihmdW5jdGlvbihfaW5zdGFuY2VzKXtcblx0XHRcdFx0XHQvLyBDb3B5IHRoZSBpbnN0YW5jZXMgaW50byB0aGUgaW5zdGFuY2VzW10gYXJyYXkgd2UgZGVjbGFyZWQgYWJvdmUsIGFuZCBhcmUgYWNjZXNzaW5nIGFzXG5cdFx0XHRcdFx0Ly8gb3VyIHJldHVybiB2YWx1ZS5cblx0XHRcdFx0XHRyZXR1cm4gaW5zdGFuY2VzID0gaW5zdGFuY2VzLmNvbmNhdChfaW5zdGFuY2VzKTtcblx0XHRcdFx0fSkub3RoZXJ3aXNlKGZ1bmN0aW9uKGUpe1xuXHRcdFx0XHRcdC8vIFRPRE8gTW9kaWZ5IHRvIGZvbGxvdyBiZXR0ZXIgcGF0dGVybiBmb3IgcHJvbWlzZSBlcnJvciBtYW5hZ2VtZW50IHdoZW4gYXZhaWxhYmxlXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihcImRvam8vcGFyc2VyOjpwYXJzZSgpIGVycm9yXCIsIGUpO1xuXHRcdFx0XHRcdHRocm93IGU7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHQvLyBCbGVuZCB0aGUgYXJyYXkgd2l0aCB0aGUgcHJvbWlzZVxuXHRcdFx0ZGxhbmcubWl4aW4oaW5zdGFuY2VzLCBwKTtcblx0XHRcdHJldHVybiBpbnN0YW5jZXM7XG5cdFx0fVxuXHR9O1xuXG5cdGlmKGhhcyhcImV4dGVuZC1kb2pvXCIpKXtcblx0XHRkb2pvLnBhcnNlciA9IHBhcnNlcjtcblx0fVxuXG5cdC8vIFJlZ2lzdGVyIHRoZSBwYXJzZXIgY2FsbGJhY2suIEl0IHNob3VsZCBiZSB0aGUgZmlyc3QgY2FsbGJhY2tcblx0Ly8gYWZ0ZXIgdGhlIGExMXkgdGVzdC5cblx0aWYoY29uZmlnLnBhcnNlT25Mb2FkKXtcblx0XHRyZWFkeSgxMDAsIHBhcnNlciwgXCJwYXJzZVwiKTtcblx0fVxuXG5cdHJldHVybiBwYXJzZXI7XG59KTtcbiIsImRlZmluZShbXG5cdFwiLi4vX2Jhc2UvYXJyYXlcIixcblx0XCIuLi9fYmFzZS9sYW5nXCIsXG5cdFwiLi4vRGVmZXJyZWRcIixcblx0XCIuLi93aGVuXCJcbl0sIGZ1bmN0aW9uKGFycmF5LCBsYW5nLCBEZWZlcnJlZCwgd2hlbil7XG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdC8vIG1vZHVsZTpcblx0Ly9cdFx0ZG9qby9wcm9taXNlL2FsbFxuXG5cdHZhciBzb21lID0gYXJyYXkuc29tZTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gYWxsKG9iamVjdE9yQXJyYXkpe1xuXHRcdC8vIHN1bW1hcnk6XG5cdFx0Ly9cdFx0VGFrZXMgbXVsdGlwbGUgcHJvbWlzZXMgYW5kIHJldHVybnMgYSBuZXcgcHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZFxuXHRcdC8vXHRcdHdoZW4gYWxsIHByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBvciBvbmUgaGFzIGJlZW4gcmVqZWN0ZWQuXG5cdFx0Ly8gZGVzY3JpcHRpb246XG5cdFx0Ly9cdFx0VGFrZXMgbXVsdGlwbGUgcHJvbWlzZXMgYW5kIHJldHVybnMgYSBuZXcgcHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZFxuXHRcdC8vXHRcdHdoZW4gYWxsIHByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBvciBvbmUgaGFzIGJlZW4gcmVqZWN0ZWQuIElmIG9uZSBvZlxuXHRcdC8vXHRcdHRoZSBwcm9taXNlcyBpcyByZWplY3RlZCwgdGhlIHJldHVybmVkIHByb21pc2UgaXMgYWxzbyByZWplY3RlZC4gQ2FuY2VsaW5nXG5cdFx0Ly9cdFx0dGhlIHJldHVybmVkIHByb21pc2Ugd2lsbCAqbm90KiBjYW5jZWwgYW55IHBhc3NlZCBwcm9taXNlcy5cblx0XHQvLyBvYmplY3RPckFycmF5OiBPYmplY3R8QXJyYXk/XG5cdFx0Ly9cdFx0VGhlIHByb21pc2Ugd2lsbCBiZSBmdWxmaWxsZWQgd2l0aCBhIGxpc3Qgb2YgcmVzdWx0cyBpZiBpbnZva2VkIHdpdGggYW5cblx0XHQvL1x0XHRhcnJheSwgb3IgYW4gb2JqZWN0IG9mIHJlc3VsdHMgd2hlbiBwYXNzZWQgYW4gb2JqZWN0ICh1c2luZyB0aGUgc2FtZVxuXHRcdC8vXHRcdGtleXMpLiBJZiBwYXNzZWQgbmVpdGhlciBhbiBvYmplY3Qgb3IgYXJyYXkgaXQgaXMgcmVzb2x2ZWQgd2l0aCBhblxuXHRcdC8vXHRcdHVuZGVmaW5lZCB2YWx1ZS5cblx0XHQvLyByZXR1cm5zOiBkb2pvL3Byb21pc2UvUHJvbWlzZVxuXG5cdFx0dmFyIG9iamVjdCwgYXJyYXk7XG5cdFx0aWYobGFuZy5pc0FycmF5KG9iamVjdE9yQXJyYXkpKXtcblx0XHRcdGFycmF5ID0gb2JqZWN0T3JBcnJheTtcblx0XHR9ZWxzZSBpZihvYmplY3RPckFycmF5ICYmIHR5cGVvZiBvYmplY3RPckFycmF5ID09PSBcIm9iamVjdFwiKXtcblx0XHRcdG9iamVjdCA9IG9iamVjdE9yQXJyYXk7XG5cdFx0fVxuXG5cdFx0dmFyIHJlc3VsdHM7XG5cdFx0dmFyIGtleUxvb2t1cCA9IFtdO1xuXHRcdGlmKG9iamVjdCl7XG5cdFx0XHRhcnJheSA9IFtdO1xuXHRcdFx0Zm9yKHZhciBrZXkgaW4gb2JqZWN0KXtcblx0XHRcdFx0aWYoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKXtcblx0XHRcdFx0XHRrZXlMb29rdXAucHVzaChrZXkpO1xuXHRcdFx0XHRcdGFycmF5LnB1c2gob2JqZWN0W2tleV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXN1bHRzID0ge307XG5cdFx0fWVsc2UgaWYoYXJyYXkpe1xuXHRcdFx0cmVzdWx0cyA9IFtdO1xuXHRcdH1cblxuXHRcdGlmKCFhcnJheSB8fCAhYXJyYXkubGVuZ3RoKXtcblx0XHRcdHJldHVybiBuZXcgRGVmZXJyZWQoKS5yZXNvbHZlKHJlc3VsdHMpO1xuXHRcdH1cblxuXHRcdHZhciBkZWZlcnJlZCA9IG5ldyBEZWZlcnJlZCgpO1xuXHRcdGRlZmVycmVkLnByb21pc2UuYWx3YXlzKGZ1bmN0aW9uKCl7XG5cdFx0XHRyZXN1bHRzID0ga2V5TG9va3VwID0gbnVsbDtcblx0XHR9KTtcblx0XHR2YXIgd2FpdGluZyA9IGFycmF5Lmxlbmd0aDtcblx0XHRzb21lKGFycmF5LCBmdW5jdGlvbih2YWx1ZU9yUHJvbWlzZSwgaW5kZXgpe1xuXHRcdFx0aWYoIW9iamVjdCl7XG5cdFx0XHRcdGtleUxvb2t1cC5wdXNoKGluZGV4KTtcblx0XHRcdH1cblx0XHRcdHdoZW4odmFsdWVPclByb21pc2UsIGZ1bmN0aW9uKHZhbHVlKXtcblx0XHRcdFx0aWYoIWRlZmVycmVkLmlzRnVsZmlsbGVkKCkpe1xuXHRcdFx0XHRcdHJlc3VsdHNba2V5TG9va3VwW2luZGV4XV0gPSB2YWx1ZTtcblx0XHRcdFx0XHRpZigtLXdhaXRpbmcgPT09IDApe1xuXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShyZXN1bHRzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sIGRlZmVycmVkLnJlamVjdCk7XG5cdFx0XHRyZXR1cm4gZGVmZXJyZWQuaXNGdWxmaWxsZWQoKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcdC8vIGRvam8vcHJvbWlzZS9Qcm9taXNlXG5cdH07XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=