/* tslint:disable */
/* eslint-disable */
/**
 * Copyright: Copyright (c) 2016 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 * INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
import {_geo} from './geotoolkit.adv.module.js';

export let intgeo = (function (_geo) {var _geo=_geo||{};_geo.geotoolkit.wua=_geo.geotoolkit.wua||{};
_geo.geotoolkit.wua.igc=function(){function b(a){this.options=_geo.geotoolkit.Ca(a,{server:"",metaservice:"json/faultdata",dataservice:"json/faultquery",file:""})}function a(a,b){return(0,window.encodeURI)(a+"?json=")+(0,window.encodeURIComponent)(JSON.stringify({filePath:b}))}_geo.geotoolkit.da(b,"geotoolkit.intgeo.RemoteFaultPillarDataSource");b.prototype.sva=function(b,d){var e=new _geo.geotoolkit.window.XMLHttpRequest;e.onreadystatechange=function(){if(e.readyState===e.DONE)if(200===e.status&&
null!=e.response){var a=JSON.parse(e.response);b(a)}else _geo.geotoolkit.log("Failed to download:"+e.status+" "+e.statusText),d(e)};e.open("GET",a(this.options.server+this.options.metaservice,this.options.file),!0);e.send();return e};b.prototype.cTa=function(b,d){var e=new _geo.geotoolkit.window.XMLHttpRequest;e.onreadystatechange=function(){e.readyState===e.DONE&&(200===e.status&&null!=e.response?b(JSON.parse(e.response)):(_geo.geotoolkit.log("Failed to download:"+e.status+" "+e.statusText),d(e)))};
e.open("GET",a(this.options.server+this.options.dataservice,this.options.file),!0);e.send();return e};return b}();
_geo.geotoolkit.wua.jgc=function(){function b(a){this.options=_geo.geotoolkit.Ca(a,{server:"",metaservice:"json/gridsurfacestream",dataservice:"json/gridsurfacestreampts",file:""})}function a(a,b){return(0,window.encodeURI)(a+"?json=")+(0,window.encodeURIComponent)(JSON.stringify({filePath:b}))}_geo.geotoolkit.da(b,"geotoolkit.intgeo.RemoteGridSurfaceDataSource");b.prototype.sva=function(b,d){var e=new _geo.geotoolkit.window.XMLHttpRequest;e.onreadystatechange=function(){if(e.readyState===e.DONE)if(200===
e.status&&null!=e.response){var a=JSON.parse(e.response);b(a)}else _geo.geotoolkit.log("Failed to download:"+e.status+" "+e.statusText),d(e)};e.open("GET",a(this.options.server+this.options.metaservice,this.options.file),!0);e.send();return e};b.prototype.DKc=function(b,d){var e=new _geo.geotoolkit.window.XMLHttpRequest;e.onreadystatechange=function(){e.readyState===e.DONE&&(200===e.status&&null!=e.response?b(new window.Float32Array(e.response)):(_geo.geotoolkit.log("Failed to download:"+e.status+
" "+e.statusText),d(e)))};e.open("GET",a(this.options.server+this.options.dataservice,this.options.file),!0);e.responseType="arraybuffer";e.send();return e};return b}();
_geo.geotoolkit.wua.lgc=function(){function b(a){this.options=_geo.geotoolkit.Ca(a,{server:"",metaservice:"json/welldata",dataservice:"json/logcurvedata",file:""})}function a(a,b,e){return null==e?(0,window.encodeURI)(a+"?json=")+(0,window.encodeURIComponent)(JSON.stringify({filePath:b})):(0,window.encodeURI)(a+"?json=")+(0,window.encodeURIComponent)(JSON.stringify({filePath:b,logCurve:e}))}_geo.geotoolkit.da(b,"geotoolkit.intgeo.RemoteWelllogDataSource");b.prototype.sva=function(b,d){var e=new _geo.geotoolkit.window.XMLHttpRequest;
e.onreadystatechange=function(){if(e.readyState===e.DONE)if(200===e.status&&null!=e.response){var a=JSON.parse(e.response);b(a)}else _geo.geotoolkit.log("Failed to download:"+e.status+" "+e.statusText),d(e)};e.open("GET",a(this.options.server+this.options.metaservice,this.options.file),!0);e.send();return e};b.prototype.CKc=function(b,d,e){var c=new _geo.geotoolkit.window.XMLHttpRequest;c.onreadystatechange=function(){if(c.readyState===c.DONE)if(200===c.status&&null!=c.response){var a=JSON.parse(c.response);
d(a)}else _geo.geotoolkit.log("Failed to download:"+c.status+" "+c.statusText),e(c)};c.open("GET",a(this.options.server+this.options.dataservice,this.options.file,b),!0);c.send();return c};return b}();
(function(){var b="geotoolkit",a=_geo.geotoolkit.wr,g=_geo.geotoolkit.$r,d=null,e=null;a(b+".intgeo.RemoteFaultPillarDataSource",(e=_geo.geotoolkit.wua).igc);g(d=_geo.geotoolkit.wua.igc.prototype,"readMetadata",d.sva,{sva:0});g(d,"readData",d.cTa,{cTa:0});a(b+".intgeo.RemoteGridSurfaceDataSource",e.jgc);g(d=_geo.geotoolkit.wua.jgc.prototype,"readMetadata",d.sva,{sva:0});g(d,"readDataArray",d.DKc,{DKc:0});a(b+".intgeo.RemoteWelllogDataSource",e.lgc);g(d=_geo.geotoolkit.wua.lgc.prototype,"readMetadata",
d.sva,{sva:0});g(d,"readCurve",d.CKc,{CKc:0})})();

    return _geo.geotoolkit.intgeo;
}(_geo));
/* eslint-enable */
/* tslint:enable */