/* tslint:disable */
/* eslint-disable */
/**
 * Copyright: Copyright (c) 2016 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 * INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
(function (root, factory) {
if (root && typeof root['define'] === 'function') {
    root['define']("geotoolkit3d.map", ["geotoolkit3d"], function() {
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
var _geo=_geo||{};_geo.y.scene.map=_geo.y.scene.map||{};
_geo.y.scene.map.$Yc=function(){function b(a){this.n3c=new window.THREE.PlaneGeometry(1,1,1,1);_geo.y.scene.Object3D.call(this);this.Op=a.maxlod;this.vp=a.minlod;this.pKb=0;this.Qjb=a.server.formatterfunction;this.tlc=new window.THREE.Frustum;this.dud=new window.THREE.Matrix4;this.rG=new window.THREE.TextureLoader;this.rG.crossOrigin="Anonymous";this.W_a=a.extent;this.LBa=a.server.url;this.P6c=g.clone();this.Lnb=[];this.KR=1;this.dKb=new window.THREE.MeshBasicMaterial({side:window.THREE.DoubleSide,color:11184810});
this.gTa()}function a(a,b){var d=new window.THREE.Vector2;a.getSize(d);var c=(b.min.x-a.min.x)/d.x,e=(b.min.y-a.min.y)/d.y,g=(b.max.x-a.min.x)/d.x,d=(b.max.y-a.min.y)/d.y;return[[[new window.THREE.Vector2(c,d),new window.THREE.Vector2(c,e),new window.THREE.Vector2(g,d)],[new window.THREE.Vector2(c,e),new window.THREE.Vector2(g,e),new window.THREE.Vector2(g,d)]]]}var g=new window.THREE.Box2(new window.THREE.Vector2(-2.00375083428E7,-2.00375083428E7),new window.THREE.Vector2(2.00375083428E7,2.00375083428E7));
_geo.geotoolkit.fa(b,_geo.y.scene.Object3D);_geo.geotoolkit.da(b,"geotoolkit3d.scene.map.MapTile");b.prototype.efd=function(){if(!1===Array.isArray(this.LBa))return this.LBa;this.pKb=(this.pKb+1)%this.LBa.length;return this.LBa[this.pKb]};b.prototype.gbb=function(a){if(this.KR!==a){var b=1>a,d=function(c){null!=c.material&&(c.material.opacity=a,c.material.transparent=b);null!=c.kka&&c.kka.forEach(d)};this.KR=a;d(this._root);this.dKb.opacity=a;this.dKb.transparent=b}};b.prototype.ska=function(b){var d,
c=b.Ekc,e=b.Qba,g=b.Rba,f=this.Qjb(c,e,g),h=new window.THREE.Vector3;if(_geo.y.util.Math.containsBox(this.W_a,b.TJ))d=new window.THREE.Mesh(this.n3c),b.TJ.getCenter(d.position),d.position.z=0,b.TJ.getSize(h),d.scale.set(h.x,h.y,1),d.Ymd=!0;else{d=new window.THREE.Mesh(new window.THREE.PlaneGeometry(1,1,1,1));var k=_geo.y.util.Math.Vuc(this.W_a,b.TJ);k.getCenter(d.position);d.position.z=0;k.getSize(h);d.scale.set(h.x,h.y,1);d.geometry.faceVertexUvs=a(b.TJ,k);d.geometry.uvsNeedUpdate=!0}d.material=
this.dKb;d.parent=this;var l=this.KR;c>=this.vp&&this.rG.load(this.efd()+f,function(a){null!=d&&null!=d.parent?(this.material=new window.THREE.MeshBasicMaterial({map:a,side:window.THREE.DoubleSide,opacity:l,transparent:1>l}),d.X2(a),-1!==this.parent.children.indexOf(this)&&this.tj()):a.dispose()}.bind(d),{});d.TJ=b.TJ;d.Ek=c;d._x=e;d._y=g;return d};b.prototype.bwc=function(a){if(null!=a){if(null!=a.kka)for(var b=0;b<a.kka.length;b++)this.bwc(a.kka[b]);null!=a.parent&&a.parent.remove(a);a instanceof
_geo.y.scene.Object3D&&a.CPa();a instanceof window.THREE.Object3D&&_geo.y.Bb.dispose(a.children);null!=a.dispose&&a.dispose();null!=a.geometry&&!0!==a.Ymd&&(a.geometry.dispose(),a.geometry=null);_geo.y.Bb.u5a(a.material);a.material=null}};b.prototype.vad=function(a){var b=[],d=a.TJ.clone(),c=new window.THREE.Vector3;d.getCenter(c);for(var e=[Math.round(d.min.x),Math.round(c.x),Math.round(d.max.x)],d=[Math.round(d.max.y),Math.round(c.y),Math.round(d.min.y)],c=0;2>c;c++)for(var g=0;2>g;g++){var f={TJ:new window.THREE.Box2(new window.THREE.Vector2(e[c],
d[g+1]),new window.THREE.Vector2(e[c+1],d[g])),Qba:2*a._x+g,Rba:2*a._y+c,Ekc:a.Ek+1};_geo.y.util.Math.intersectBox(this.W_a,f.TJ)&&(f=this.ska(f),b.push(f),f.Aud=a)}return b};b.prototype.gTa=function(){if(null!=this.LBa&&null!=this.Qjb){this.bwc(this._root);var a={TJ:this.P6c.clone(),Qba:0,Rba:0,Ekc:0};this._root=this.ska(a);this.add(this._root);this.tj()}};b.prototype.Mod=function(a){a.equals(this.W_a)||(this.W_a=a,this.gTa());return this};b.prototype.apd=function(a){a!==this.Op&&(this.Op=a,this.gTa());
return this};b.prototype.cpd=function(a){a!==this.vp&&(this.vp=a,this.gTa());return this};b.prototype.Hpd=function(a){a!==this.LBa&&(this.LBa=a,this.gTa());return this};b.prototype.Qod=function(a){a!==this.Qjb&&(this.Qjb=a,this.gTa());return this};b.prototype.Krd=function(a){null==a.kka&&a.Ek<this.Op&&(a.kka=this.vad(a))};b.prototype.add=function(a){a instanceof window.THREE.Object3D&&(void 0!==a.parent&&a.parent.remove(a),a.parent=this,this.children.push(a));return this};b.prototype.remove=function(a){var b=
this.children.indexOf(a);-1!==b&&(a.parent=void 0,this.children.splice(b,1))};var d=new _geo.geotoolkit.util.xc,e=new window.THREE.Vector2,c=new window.THREE.Vector2,f=new window.THREE.Vector2,k=new window.THREE.Vector2,h=new window.THREE.Vector3(-.5,-.5,0),l=new window.THREE.Vector3(-.5,.5,0),n=new window.THREE.Vector3(.5,.5,0),p=new window.THREE.Vector3(.5,-.5,0),r=new window.THREE.Matrix4;b.prototype.no=function(a,b,g){function u(){x.Krd(w,!0);if(null!=w.kka)for(var a=0;a<w.kka.length;a++)v.push(w.kka[a]);
else x.Lnb.push(w)}var v=[];null!=this._root&&v.push(this._root);var w;this.Lnb=[];b.matrixWorldInverse.getInverse(b.matrixWorld);r.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);this.tlc.setFromMatrix(r);var x=this;for(g.getSize(d);0<v.length;)if(w=v.shift(),w.Ek<this.vp)u();else if(w.updateMatrixWorld(),this.tlc.intersectsObject(w)){h.set(w.TJ.min.x,w.TJ.min.y,0);l.set(w.TJ.min.x,w.TJ.max.y,0);n.set(w.TJ.max.x,w.TJ.max.y,0);p.set(w.TJ.max.x,w.TJ.min.y,0);h=this.localToWorld(h);l=this.localToWorld(l);
n=this.localToWorld(n);p=this.localToWorld(p);_geo.y.Bb.vcb(h,b,d,e);_geo.y.Bb.vcb(l,b,d,c);_geo.y.Bb.vcb(n,b,d,f);_geo.y.Bb.vcb(p,b,d,k);a=c.distanceTo(f);g=e.distanceTo(k);a=(a+g)/2;g=e.distanceTo(c);var A=f.distanceTo(k);g=(g+A)/2;341<a||341<g?u():this.Lnb.push(w)}this.children=this.Lnb.slice()};return b}();
_geo.y.scene.map.tic=function(){function b(a){_geo.y.scene.Object3D.call(this);a=_geo.geotoolkit.Ca(a,{maxlod:10,minlod:0,extent:new window.THREE.Box2(new window.THREE.Vector2(-2.00375083428E7,-2.00375083428E7),new window.THREE.Vector2(2.00375083428E7,2.00375083428E7)),opacity:1});null==a.maplimits&&(a.maplimits=a.extent.clone());this.OAa=new _geo.y.scene.map.$Yc(a);this.add(this.OAa);this.setOptions(a)}_geo.geotoolkit.fa(b,_geo.y.scene.Object3D);_geo.geotoolkit.da(b,"geotoolkit3d.scene.map.TiledMap");
b.prototype.setOptions=function(a){if(null!=a.maplimits&&null!=a.extent){this.wJ=a.maplimits;var b=new window.THREE.Vector3;this.wJ.getCenter(b);var d=new window.THREE.Vector3,b=b.sub(a.extent.getCenter(d)),d=new window.THREE.Vector3,e=new window.THREE.Vector3;this.wJ.getSize(d);a.extent.getSize(e);this.scale.set(d.x/e.x,d.y/e.y,1);this.position.set(b.x*this.scale.x,b.y*this.scale.y,0)}null!=a.extent&&this.OAa.Mod(a.extent);null!=a.maxlod&&this.OAa.apd(a.maxlod);null!=a.minlod&&this.OAa.cpd(a.minlod);
null!=a.server&&this.OAa.Hpd(a.server);null!=a.formatterfunction&&this.OAa.Qod(a.formatterfunction);null!=a.opacity&&this.OAa.gbb(a.opacity);this.tj();return this};b.prototype.Rtb=function(){return new window.THREE.Box3(new window.THREE.Vector3(this.wJ.min.x,this.wJ.min.y,-.5),new window.THREE.Vector3(this.wJ.max.x,this.wJ.max.y,.5))};return b}();
(function(){var b=_geo.geotoolkit.wr,a=_geo.geotoolkit.$r,g=null;b("geotoolkit3d.scene.map.TiledMap",_geo.y.scene.map.tic);a(g=_geo.y.scene.map.tic.prototype,"setOptions",g.setOptions,{setOptions:0})})();

    return _geo;
}));
/* eslint-enable */
/* tslint:enable */