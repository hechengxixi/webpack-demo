/* tslint:disable */
/* eslint-disable */
/**
 * Copyright: Copyright (c) 2016 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 * INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
import {_geo} from './geotoolkit.adv.module.js';
import {geotoolkit3d} from './geotoolkit3d.adv.module.js';
import {g3d_well} from './geotoolkit3d.well.adv.module.js';
import {g3d_geodata} from './geotoolkit3d.geodata.adv.module.js';
import {schematics} from './geotoolkit.schematics.adv.module.js';
import {svg} from './geotoolkit.svg.adv.module.js';

export let g3d_schematics = (function (_geo) {var _geo=_geo||{};_geo.y.ya=_geo.y.ya||{};_geo.y.ya.Jk=_geo.y.ya.Jk||{};_geo.y.scene.ya=_geo.y.scene.ya||{};
_geo.y.scene.ya.B0c=function(){function b(a){_geo.y.scene.Object3D.call(this);a=_geo.geotoolkit.Ca(a,{data:null});this.j8=a.data;this.Nib=a.components;null!=this.j8&&null!=this.j8.getX(0)&&null!=this.j8.getY(0)&&null!=this.j8.getZ(0)&&this.position.set(this.j8.getX(0),this.j8.getY(0),this.j8.getZ(0));var b=this;this.urd=function(a){if(null==a["static"]||!0!==a["static"]){var e=b.getObjectById(a.id);null==e?b.dQb(a):e.parameters!==JSON.stringify(a)&&b.lrd(a,e)}};this.Nib.PB().forEach(function(a){b.dQb(a)});
this.Nib.kb(_geo.geotoolkit.util.Mo.$.HQ,function(a,e,c){b.dQb(c)});this.Nib.kb(_geo.geotoolkit.util.Mo.$.rJ,function(a,e,c){b.fwb(c)})}_geo.geotoolkit.fa(b,_geo.y.scene.Object3D);_geo.geotoolkit.da(b,"geotoolkit3d.scene.schematics.SchematicsNode");b.prototype.fwb=function(a){var b=a;null==a.length&&(b=[a]);var d=this;b.forEach(function(a){if(null!==a.id){var b=d.getObjectById(a.id);d.remove(b);_geo.y.Bb.dispose(b);a.id=null}})};b.prototype.dQb=function(a){this.l8b(a);if(null==a.id)a=_geo.y.ya.Jk.$Ka.createElement(this.j8,
a),null!=a&&this.add(a);else{var b=this.getObjectById(a.id);b.parameters!==JSON.stringify(a)&&(a=_geo.y.ya.Jk.$Ka.createElement(this.j8,a),null!=a&&this.add(a),this.remove(b),_geo.y.Bb.dispose(b))}};b.prototype.lrd=function(a,b){var d=_geo.y.ya.Jk.$Ka.rrd(this.j8,a,b);null!==d&&(null!=d&&this.add(d),this.remove(b),_geo.y.Bb.dispose(b))};b.prototype.l8b=function(a){_geo.y.ya.Jk.$Ka.l8b(this.j8,a);return null};b.prototype.no=function(){this.Nib.PB().forEach(this.urd)};return b}();
_geo.y.ya.Jk.$Ka=function(){function b(){}function a(a,b){var c={},d=a.nf(),e=a.Cf();null!=b.data.geometry&&null!=b.data.geometry.depth&&(null!=b.data.geometry.depth.from&&(d=b.data.geometry.depth.from),null!=b.data.geometry.depth.to&&(e=b.data.geometry.depth.to));c.data=a.zTb(d,e);null!=b.data.value&&(c.data.values=a.zXb(b.data.value,d,e));return c}function g(a,c){c.size=b.mVc;null!=a.data.geometry.diameter.outer?c.size=a.data.geometry.diameter.outer:null!=a.data.geometry.diameter.inner&&(c.size=
a.data.geometry.diameter.inner);c.size*=d;return c}var d=.5;_geo.geotoolkit.da(b,"geotoolkit3d.schematics.factory.Trajectory");b.mVc=50;b.lVc="red";b.F$b="lightblue";var e={},c={};b.l8b=function(a,b){var c=a.nf(),d=a.Cf();null!=b.data.geometry&&null!=b.data.geometry.depth&&(null!=b.data.geometry.depth.from&&(b.data.geometry.depth.from<c&&(b.data.geometry.depth.from=c),b.data.geometry.depth.from>d&&(b.data.geometry.depth.from=d)),null!=b.data.geometry.depth.to&&(b.data.geometry.depth.to>d&&(b.data.geometry.depth.to=
d),b.data.geometry.depth.to<c&&(b.data.geometry.depth.to=c)))};b.l5=function(a,b){null!=a&&null!=b&&(e[a]=b)};b.Qpd=function(a,b){null!=a&&null!=b&&(c[a]=b)};var f=[];b.createElement=function(a,b){if(null==e[b.name])return-1===f.indexOf(b.name)&&(_geo.geotoolkit.warn("Component ("+b.name+") not registered with Factory"),f.push(b.name)),null;var c=e[b.name](a,b);b.id=c.id;c.parameters=JSON.stringify(b);return c};b.rrd=function(a,b,d){if(null==c[b.name])return this.createElement(a,b);c[b.name](a,b,
d);d.parameters=JSON.stringify(b);return null};b.createPath=function(c,d){var e=a(c,d),g={};null!=d.data.colorprovider?(e.colorprovider=d.data.colorprovider,e.colorprovider instanceof _geo.geotoolkit.util.Ie?g.vertexColors=window.THREE.VertexColors:g.color=e.colorprovider):g.color=b.F$b;g=new window.THREE.Line(new _geo.y.scene.sc.hfb(e),new window.THREE.LineBasicMaterial(g));g.position.set(e.data.origin.x,e.data.origin.y,e.data.origin.z);return g};b.T$c=function(c,d){var e=a(c,d);e.colorprovider=
null!=d.data.colorprovider?d.data.colorprovider:b.lVc;g(d,e);return b.jvc(e,d)};b.Gad=function(c,d){var e=a(c,d);e.colorprovider=null!=d.data.colorprovider?d.data.colorprovider:b.F$b;g(d,e);return b.jvc(e,d)};b.jvc=function(a,b){var c=new _geo.y.scene.sc.shb(a);c.position.set(a.data.origin.x,a.data.origin.y,a.data.origin.z);null==b.data.side&&(b.data.side=window.THREE.DoubleSide);c.children[0].material.opacity=null!=b.data.opacity?b.data.opacity:.8;if(1>c.children[0].material.opacity&&b.data.side===
window.THREE.DoubleSide){var d=new _geo.y.scene.sc.shb(a);d.children[0].material.opacity=c.children[0].material.opacity;c.children[0].material.side=window.THREE.FrontSide;d.children[0].material.side=window.THREE.BackSide;c.children[0].material.transparent=d.children[0].material.transparent=!0;d.children[0].renderOrder=-a.size;c.children[0].renderOrder=a.size;c.add(d)}else c.children[0].material.side=b.data.side;return c};b.l5("path",b.createPath);b.l5("casing",b.T$c);b.l5("tubing",b.Gad);return b}();
(function(){var b="geotoolkit",a=_geo.geotoolkit.wr,g=null;a(b+"3d.scene.schematics.SchematicsNode",_geo.y.scene.ya.B0c);a(b+"3d.schematics.factory.Trajectory",_geo.y.ya.Jk.$Ka);a(b+"3d.schematics.factory.Trajectory.setFactory",(g=_geo.y.ya.Jk.$Ka).l5);a(b+"3d.schematics.factory.Trajectory.setUpdateFactory",g.Qpd)})();

    return _geo.geotoolkit3d.schematics;
}(_geo));
/* eslint-enable */
/* tslint:enable */