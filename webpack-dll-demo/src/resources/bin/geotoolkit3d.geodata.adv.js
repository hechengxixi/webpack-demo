/* tslint:disable */
/* eslint-disable */
/**
 * Copyright: Copyright (c) 2016 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 * INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
(function (root, factory) {
if (root && typeof root['define'] === 'function') {
    root['define']("geotoolkit3d.geodata", ["geotoolkit3d"], function() {
      root._geo = factory(root, root._geo);
      root.geotoolkit3d = root._geo.geotoolkit3d || root.geotoolkit3d;
      return root.geotoolkit3d;
    });
} else if (typeof module !== 'undefined' && typeof module.exports === 'object') {
    var m = factory(root, root && root._geo);
    module.exports._geo = m;
    if (root) { 
        root._geo = module.exports._geo;
        if(!root.geotoolkit3d) {
            root.geotoolkit3d = module.exports._geo.geotoolkit3d;
        }
    }
    if (!module.exports.geotoolkit3d) module.exports.geotoolkit3d=module.exports._geo.geotoolkit3d;
} else {
    root._geo = factory(root, root._geo);
    root.geotoolkit3d = root._geo.geotoolkit3d || root.geotoolkit3d;
    return root.geotoolkit3d;
}

}(typeof window !== "undefined" ? window : undefined, function (window, _geo) {
var _geo=_geo||{};_geo.y.UPa=_geo.y.UPa||{};
_geo.y.UPa.Hic=function(){function b(a,b,d,e,c,f){if(!a||1>a.length||!b||1>b.length||a.length!==b.length)throw Error();this._x=a;this._y=b;this._z=d;this.fm=c;this.Ao=a[0];this.Cs=a[0];this.Bo=b[0];this.Ds=b[0];this.Vqa=d[0];this.Pqa=d[0];var k;if(null==this.fm||this.fm.length<this._x.length)for(this.fm=[0],c=1,k=a.length;c<k;c++){var h=a[c-1]-a[c],l=b[c-1]-b[c],n=d[c-1]-d[c];this.fm.push(this.fm[c-1]+Math.sqrt(h*h+l*l+n*n))}h=!1;null!=e?(this.ija=e.clone(),h=!0):0<a.length?(this.ija=new window.THREE.Vector3(a[0],
b[0],d[0]),this._x[0]-=this.ija.x,this._y[0]-=this.ija.y,this._z[0]-=this.ija.z):this.ija=new window.THREE.Vector3(0,0,0);this.vp=this.fm[0];this.Op=this.fm[0];this.gd=null!=f?f:[];this.vdd(h);c=1;for(k=a.length;c<k;c++)h||(this._x[c]-=this.ija.x,this._y[c]-=this.ija.y,this._z[c]-=this.ija.z);_geo.geotoolkit.util.EventDispatcher.call(this)}_geo.geotoolkit.da(b,"geotoolkit3d.geodata.Trajectory3d");_geo.geotoolkit.fa(b,_geo.geotoolkit.util.EventDispatcher);b.prototype.vdd=function(){for(var a=this._x,
b=this._y,d=this._z,e=1,c=a.length;e<c;e++)a[e]<this.Ao?this.Ao=a[e]:a[e]>this.Cs&&(this.Cs=a[e]),b[e]<this.Bo?this.Bo=b[e]:b[e]>this.Ds&&(this.Ds=b[e]),d[e]<this.Vqa?this.Vqa=d[e]:d[e]>this.Pqa&&(this.Pqa=d[e]),d[e]<this.Vqa?this.Vqa=d[e]:d[e]>this.Pqa&&(this.Pqa=d[e]),this.fm[e]<this.vp?this.vp=this.fm[e]:this.fm[e]>this.Op&&(this.Op=this.fm[e])};b.prototype.getX=function(a){return this._x[a]};b.prototype.getY=function(a){return this._y[a]};b.prototype.getZ=function(a){return this._y[a]};b.prototype.wc=
function(a){return this.fm[a]};b.prototype.count=function(){return this._x?this._x.length:0};b.prototype.$i=function(){return this.vp};b.prototype.Si=function(){return this.Op};b.prototype.KV=function(){return this.Ao};b.prototype.LV=function(){return this.Bo};b.prototype.OZ=function(){return this.Cs};b.prototype.PZ=function(){return this.Ds};b.prototype.wCc=function(){return this.Vqa};b.prototype.nCc=function(){return this.Pqa};b.prototype.nf=function(){return this.vp};b.prototype.Cf=function(){return this.Op};
b.prototype.zTb=function(a,b){var d,e,c=0,f=this._x.length-1;if(a>b){var k=a;a=b;b=k}for(;this.fm[c]<a||this.fm[f]>b;){if(this.fm[c]<a&&(c++,c>=this._x.length))throw Error("Depth outside of range");if(this.fm[f]>b&&(f--,0>f))throw Error("Depth outside of range");}var k={x:this._x.slice(c,f+1),y:this._y.slice(c,f+1),z:this._z.slice(c,f+1)},h,l,n;null!=a&&this.fm[c]!==a&&(d=this.fm[c-1],n=(a-d)/(this.fm[c]-d),h=(this._x[c]-this._x[c-1])*n,l=(this._y[c]-this._y[c-1])*n,n*=this._z[c]-this._z[c-1],d={x:h+
this._x[c-1],y:l+this._y[c-1],z:n+this._z[c-1]});null!=b&&this.fm[f]!==b&&(e=this.fm[f],n=(b-e)/(this.fm[f+1]-e),h=(this._x[f+1]-this._x[f])*n,l=(this._y[f+1]-this._y[f])*n,n*=this._z[f+1]-this._z[f],e={x:h+this._x[f],y:l+this._y[f],z:n+this._z[f]});null!=d&&(k.x.unshift(d.x),k.y.unshift(d.y),k.z.unshift(d.z));null!=e&&(k.x.push(e.x),k.y.push(e.y),k.z.push(e.z));k.origin=this.ija.clone();return k};b.prototype.Dzc=function(a,b){if(null==a)return null;null==b&&(b=!0);for(var d=0;this.fm[d]<a;)if(this.fm[d]<
a&&(d++,d>=this._x.length))throw Error("Depth outside of range");var e=0,c=0;this.fm[d]!==a?(e=d-1,c=d):(e=b?d:d-1,c=b?d+1:d);c>=this.fm.length&&(c=this.fm.length-1,e=c-1);0>e&&(e=0,c=1);var d=this._x[c]-this._x[e],f=this._y[c]-this._y[e],e=this._z[c]-this._z[e];return(new window.THREE.Vector3(d,f,e)).normalize()};b.prototype.Wyc=function(a){for(var b=0;this.fm[b]<a;)if(this.fm[b]<a&&(b++,b>=this._x.length))throw Error("Depth outside of range");var d=new window.THREE.Vector3(this._x[b],this._y[b],
this._z[b]);if(null!=a&&this.fm[b]!==a){var d=this.fm[b-1],e=(a-d)/(this.fm[b]-d);a=(this._x[b]-this._x[b-1])*e;d=(this._y[b]-this._y[b-1])*e;e*=this._z[b]-this._z[b-1];d=new window.THREE.Vector3(a+this._x[b-1],d+this._y[b-1],e+this._z[b-1])}return d};b.prototype.zXb=function(a,b,d){for(var e,c=0;c<this.gd.length;c++)if(this.gd[c].getName()===a){e=this.gd[c];break}if(null==e)return null;var f,k;a=0;c=this._x.length-1;if(b>d){var h=b;b=d;d=h}for(;this.fm[a]<b&&this.fm[c]>d;){if(this.fm[a]<b&&(a++,
a>=this._x.length))throw Error("Depth outside of range");if(this.fm[c]>d&&(c++,0>c))throw Error("Depth outside of range");}null!=b&&this.fm[a]!==b&&this.fm[a]>b&&(f=this.fm[a-1],b=(b-f)/(this.fm[a]-f),b*=e.gd[a]-e.gd[a-1],f=b+e.gd[a]);null!=d&&this.fm[c]!==d&&this.fm[c]<d&&(k=this.fm[c],b=(d-k)/(this.fm[c+1]-k),b*=e.gd[c+1]-e.gd[c],k=b+e.gd[c]);d=e.gd.slice(a,c);null!=f&&d.unshift(f);null!=k&&d.push(k);return d};return b}();
_geo.y.UPa.Jic=function(){function b(a,b){this.nd=a;this.gd=b}_geo.geotoolkit.da(b,"geotoolkit3d.geodata.TrajectoryValue");b.prototype.getName=function(){return this.nd};b.prototype.ce=function(){return this.gd};return b}();
(function(){var b="geotoolkit",a=_geo.geotoolkit.wr,g=_geo.geotoolkit.$r,d=null,e=null;a(b+"3d.geodata.Trajectory3d",(e=_geo.y.UPa).Hic);g(d=_geo.y.UPa.Hic.prototype,"getX",d.getX,{getX:0});g(d,"getY",d.getY,{getY:0});g(d,"getZ",d.getZ,{getZ:0});g(d,"getDepth",d.wc,{wc:0});g(d,"count",d.count,{count:0});g(d,"minDepth",d.$i,{$i:0});g(d,"maxDepth",d.Si,{Si:0});g(d,"getMinX",d.KV,{KV:0});g(d,"getMinY",d.LV,{LV:0});g(d,"getMaxX",d.OZ,{OZ:0});g(d,"getMaxY",d.PZ,{PZ:0});g(d,"getMinZ",d.wCc,{wCc:0});g(d,
"getMaxZ",d.nCc,{nCc:0});g(d,"getMinDepth",d.nf,{nf:0});g(d,"getMaxDepth",d.Cf,{Cf:0});g(d,"getCoordinatesForDepths",d.zTb,{zTb:0});g(d,"getDirectionAtDepth",d.Dzc,{Dzc:0});g(d,"getCoordinateForDepth",d.Wyc,{Wyc:0});g(d,"getValuesForDepths",d.zXb,{zXb:0});a(b+"3d.geodata.TrajectoryValue",e.Jic);g(d=_geo.y.UPa.Jic.prototype,"getName",d.getName,{getName:0});g(d,"getValues",d.ce,{ce:0})})();

    return _geo;
}));
/* eslint-enable */
/* tslint:enable */