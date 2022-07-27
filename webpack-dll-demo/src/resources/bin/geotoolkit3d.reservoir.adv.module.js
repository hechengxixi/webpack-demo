/* tslint:disable */
/* eslint-disable */
/**
 * Copyright: Copyright (c) 2016 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 * INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
import {_geo} from './geotoolkit.adv.module.js';
import {geotoolkit3d} from './geotoolkit3d.adv.module.js';

export let g3d_reservoir = (function (_geo) {var _geo=_geo||{};_geo.y.scene.mi=_geo.y.scene.mi||{};_geo.y.data.mi=_geo.y.data.mi||{};_geo.y.data.mi.Fv=_geo.y.data.mi.Fv||{};_geo.y.scene.mi.Fv=_geo.y.scene.mi.Fv||{};_geo.y.scene.mi.K9c=_geo.y.scene.mi.Fv;_geo.y.data.mi.K9c=_geo.y.data.mi.Fv;_geo.y.data.mi.cxa=function(){function b(a){}_geo.geotoolkit.da(b,"geotoolkit3d.data.reservoir.AbstractReservoirData");b.prototype.getAttributes=_geo.geotoolkit.Ia;b.prototype.tsc=function(a,b,d,e,c){a[3*b]=d;a[3*b+1]=e;a[3*b+2]=c};return b}();
_geo.y.scene.mi.Vzb=function(){function b(a){window.THREE.BufferGeometry.call(this);this.type="ReservoirGeometry"}_geo.geotoolkit.fa(b,window.THREE.BufferGeometry);_geo.geotoolkit.da(b,"geotoolkit3d.scene.reservoir.AbstractReservoirGeometry");return b}();
_geo.y.scene.mi.GVa=function(){function b(a){window.THREE.BufferGeometry.call(this);this.type="AbstractSkeletonGeometry";var b=a.data.getAttributes();this.addAttribute("position",b.position);null!=b.values&&this.addAttribute(_geo.y.util.ck.yo,b.values);this.V5a(a)}_geo.geotoolkit.fa(b,window.THREE.BufferGeometry);_geo.geotoolkit.da(b,"geotoolkit3d.scene.reservoir.AbstractSkeletonGeometry");b.prototype.V5a=_geo.geotoolkit.Ia;return b}();
_geo.y.scene.mi.Uzb=function(){function b(a){this.level=a.horizonk;_geo.y.scene.mi.GVa.call(this,a);this.type="HorizonGeometry"}_geo.geotoolkit.fa(b,_geo.y.scene.mi.GVa);_geo.geotoolkit.da(b,"geotoolkit3d.scene.reservoir.AbstractHorizonGeometry");return b}();
_geo.y.scene.mi.Lbc=function(){function b(a,b){_geo.y.scene.Object3D.call(this);this.type="HorizonCluster";this.renderDepth=0;if(null!=a)for(var d=0;d<a.length;++d){var e=a[d],c=new window.THREE.Color("black");null!=e.color&&(c=_geo.geotoolkit.util.oi.Ph(e.color),c=new window.THREE.Color(c.Bl()/255,c.zl()/255,c.xl()/255));e=null!=e.width?e.width:1;e=new window.THREE.LineSegments(b[d],new _geo.y.scene.mi.Fv.Ngb({color:c,width:e}));e.material.polygonOffset=!0;e.material.polygonOffsetUnits=0;e.material.polygonOffsetFactor=
0;this.add(e)}}_geo.geotoolkit.da(b,"geotoolkit3d.scene.reservoir.HorizonCluster");_geo.geotoolkit.fa(b,_geo.y.scene.Object3D);return b}();
_geo.y.scene.mi.sXa=function(){function b(a,b,d){this.nu=this.Jy=this.Fi=Number.NaN;this.setOptions(a)}_geo.geotoolkit.da(b,"geotoolkit3d.scene.reservoir.IJKIndex");b.prototype.fromArray=function(a){this.Fi=a[0];this.Jy=a[1];this.nu=a[2];return this};b.prototype.HSb=function(a){a=_geo.geotoolkit.Ca(a,{I:this.Fi,J:this.Jy,K:this.nu},!0);this.Fi=a.i;this.Jy=a.j;this.nu=a.k;return this};b.prototype.toJSON=function(){return{I:this.Fi,J:this.Jy,K:this.nu}};b.prototype.set=function(a,b,d){this.Fi=a;this.Jy=
b;this.nu=d;return this};b.prototype.setOptions=function(a,b,d){a instanceof Array?this.fromArray(a):"object"===typeof a?this.HSb(a):"number"===typeof a&&this.set(a,b,d);return this};return b}();_geo.y.scene.mi.b0c=function(){function b(){}_geo.geotoolkit.da(b,"geotoolkit3d.scene.reservoir.ReservoirUtil");return b}();_geo.y.scene.mi.PBb={lbc:[!0,!0,!0],ZXc:[!0,!0,!1],$Xc:[!0,!1,!0],aYc:[!1,!0,!0],A_c:[!0,!1,!1],Mesh:[!1,!0,!1],LXc:[!1,!1,!0],HZc:[!1,!1,!1]};
_geo.y.scene.mi.Fv.Mbc=function(){function b(a){_geo.y.scene.mi.Uzb.call(this,a);this.type="HorizonGeometry"}_geo.geotoolkit.fa(b,_geo.y.scene.mi.Uzb);_geo.geotoolkit.da(b,"geotoolkit3d.scene.reservoir.hexahedral.HorizonGeometry");b.prototype.V5a=function(a){for(var b=a.data.getAttributes(),d=[],e=this.level===b.maxk+1?this.level-1:this.level,c=this.level===b.maxk+1,f=b.mini;f<=b.maxi;++f)for(var k=b.minj;k<=b.maxj;++k){var h=a.data.$6a(f,k,e);null!=h&&(h*=8,c&&(h+=4),Array.prototype.push.apply(d,
[h+0,h+1,h+1,h+3,h+3,h+2,h+2,h+0]))}a=new window.Uint32Array(d);this.setIndex(new window.THREE.BufferAttribute(a,1))};return b}();
_geo.y.data.mi.Fv.wKa=function(){function b(a){_geo.y.data.mi.cxa.call(this,a);this.RS=new _geo.y.scene.mi.sXa(-1,-1,-1);this.ova=0;this.values=this.normals=this.n4=this.kl=null;this.minValue=Number.POSITIVE_INFINITY;this.maxValue=Number.NEGATIVE_INFINITY;this.wD=Number.POSITIVE_INFINITY;this.cC=Number.NEGATIVE_INFINITY;this.RE=Number.POSITIVE_INFINITY;this.PE=Number.NEGATIVE_INFINITY;this.u9a=Number.POSITIVE_INFINITY;this.m9a=Number.NEGATIVE_INFINITY;this.kS={};this.F9a=0;this.d2b(a.cells)}_geo.geotoolkit.fa(b,
_geo.y.data.mi.cxa);_geo.geotoolkit.da(b,"geotoolkit3d.data.reservoir.hexahedral.ReservoirData");b.prototype.getAttributes=function(){return{position:this.kl,values:this.values,ijk:this.n4,normals:this.normals,minvalue:this.minValue,maxvalue:this.maxValue,mini:this.wD,maxi:this.cC,minj:this.RE,maxj:this.PE,mink:this.u9a,maxk:this.m9a}};b.prototype.$6a=function(a,b,d){return null!=this.kS[a]&&null!=this.kS[a][b]&&null!=this.kS[a][b][d]?this.kS[a][b][d]:null};b.prototype.c4c=function(a,b,d){if(null!=
this.kS[a]){if(null!=this.kS[a][b])return null!=this.kS[a][b][d]?this.kS[a][b][d]:this.kS[a][b][d]=this.F9a++;this.kS[a][b]={};return this.kS[a][b][d]=this.F9a++}this.kS[a]={};this.kS[a][b]={};return this.kS[a][b][d]=this.F9a++};b.prototype.reset=function(){this.ova=0;this.values=this.normals=this.n4=this.kl=null;this.minValue=Number.POSITIVE_INFINITY;this.maxValue=Number.NEGATIVE_INFINITY;this.wD=Number.POSITIVE_INFINITY;this.cC=Number.NEGATIVE_INFINITY;this.RE=Number.POSITIVE_INFINITY;this.PE=Number.NEGATIVE_INFINITY;
this.u9a=Number.POSITIVE_INFINITY;this.m9a=Number.NEGATIVE_INFINITY;this.kS={};this.F9a=0;return this};b.prototype.d2b=function(a){if(0===this.ova&&Array.isArray(a)){this.ova=a.length;var b=8*this.ova,b=new window.THREE.InterleavedBuffer(new window.Float32Array(3*b+3*b+3*b+b),10);this.ova=a.length;this.kl=new window.THREE.InterleavedBufferAttribute(b,3,0);this.n4=new window.THREE.InterleavedBufferAttribute(b,3,3);this.normals=new window.THREE.InterleavedBufferAttribute(b,3,6);this.values=new window.THREE.InterleavedBufferAttribute(b,
1,9)}for(b=0;b<a.length;b++)this.c2b(a[b]);return this};b.prototype.c2b=function(){var a=new _geo.y.scene.mi.sXa([-1,-1,-1]);return function(b){if(null!=b){var d=!1,e=b.ijk;if(null!=e){e instanceof _geo.y.scene.mi.sXa||(e=a.setOptions(e));var c;c=this.F9a<this.ova?this.c4c(e.Fi,e.Jy,e.nu):this.$6a(e.Fi,e.Jy,e.nu);var f=8*c,k=8*c,h=b.x,l=b.y,n=b.z,p=[],r=[],t=[],q=[],m=[],u=[];null!=h&&null!=l&&null!=n&&(this.kl.setXYZ(f+0,h[0],l[0],n[0]),this.kl.setXYZ(f+1,h[1],l[1],n[1]),this.kl.setXYZ(f+2,h[2],
l[2],n[2]),this.kl.setXYZ(f+3,h[3],l[3],n[3]),this.kl.setXYZ(f+4,h[4],l[4],n[4]),this.kl.setXYZ(f+5,h[5],l[5],n[5]),this.kl.setXYZ(f+6,h[6],l[6],n[6]),this.kl.setXYZ(f+7,h[7],l[7],n[7]),this.n4.setXYZ(k+0,e.Fi,e.Jy,e.nu),this.n4.setXYZ(k+1,e.Fi,e.Jy,e.nu),this.n4.setXYZ(k+2,e.Fi,e.Jy,e.nu),this.n4.setXYZ(k+3,e.Fi,e.Jy,e.nu),this.n4.setXYZ(k+4,e.Fi,e.Jy,e.nu),this.n4.setXYZ(k+5,e.Fi,e.Jy,e.nu),this.n4.setXYZ(k+6,e.Fi,e.Jy,e.nu),this.n4.setXYZ(k+7,e.Fi,e.Jy,e.nu),this.wD=Math.min(e.Fi,this.wD),this.cC=
Math.max(e.Fi,this.cC),this.RE=Math.min(e.Jy,this.RE),this.PE=Math.max(e.Jy,this.PE),this.u9a=Math.min(e.nu,this.u9a),this.m9a=Math.max(e.nu,this.m9a),d=8*c,_geo.y.util.Math.zfa(this.kl,d+1,d+0,d+3,p),_geo.y.util.Math.zfa(this.kl,d+4,d+5,d+6,r),_geo.y.util.Math.zfa(this.kl,d+3,d+2,d+6,t),_geo.y.util.Math.zfa(this.kl,d+0,d+5,d+4,q),_geo.y.util.Math.zfa(this.kl,d+2,d+6,d+0,m),_geo.y.util.Math.zfa(this.kl,d+7,d+3,d+5,u),this.Awa(d,p,m,q),this.Awa(d+1,p,u,q),this.Awa(d+2,p,m,t),this.Awa(d+3,p,u,t),this.Awa(d+
4,r,m,q),this.Awa(d+5,r,u,q),this.Awa(d+6,r,m,t),this.Awa(d+7,r,u,t),this.RS.set(this.cC-this.wD+1,this.PE-this.RE+1,this.m9a-this.u9a+1),d=!0,this.kl.needsUpdate=!0,this.n4.needsUpdate=!0);b=b.value;null!=b&&(f=8*c,this.minValue=Math.min(b,this.minValue),this.maxValue=Math.max(b,this.maxValue),null==this.values&&(this.values=new window.THREE.BufferAttribute(new window.Float32Array(24*this.ova),1)),this.values.setX(f+0,b),this.values.setX(f+1,b),this.values.setX(f+2,b),this.values.setX(f+3,b),this.values.setX(f+
4,b),this.values.setX(f+5,b),this.values.setX(f+6,b),this.values.setX(f+7,b),d=this.values.needsUpdate=!0);this.kl.data.needsUpdate=d}}}}();b.prototype.Awa=function(a,b,d,e){this.normals.setX(a,(b[0]+d[0]+e[0])/3);this.normals.setY(a,(b[1]+d[1]+e[1])/3);this.normals.setZ(a,(b[2]+d[2]+e[2])/3)};b.prototype.Fsb=function(){return this.ova};b.prototype.xyc=function(a){var b=this.$6a(a.Fi,a.Jy,a.nu);if(null==b)return null;for(var d=[],e=[],c=[],f=0;8>f;++f)d[f]=this.kl[24*(b+f)],e[f]=this.kl[24*(b+f)+
1],c[f]=this.kl[24*(b+f)+2];return{index:a,x:d,y:e,z:c,value:null!=this.values?this.values.getX(8*b):null}};b.prototype.yQa=function(){return this.RS};return b}();
_geo.y.scene.mi.Fv.qgc=function(){function b(a){_geo.y.scene.mi.Vzb.call(this,a);this.IQb=a.data;this.RS=this.IQb.yQa();a=this.RS.Fi;var b=this.RS.Jy,d=this.RS.nu,e=this.IQb.Fsb(),c=this.IQb.getAttributes();this.addAttribute("position",c.position);this.addAttribute("ijk",c.ijk);this.addAttribute("normal",c.normals);null!=c.values&&this.addAttribute(_geo.y.util.ck.yo,c.values);e=new window.Uint32Array(16*e);this.setIndex(new window.THREE.BufferAttribute(e,1));for(c=0;c<a;++c)for(var f=0;f<b;++f)for(var k=
0;k<d;++k){var h=c*b*d+f*d+k;this.M7c(h,e)}}_geo.geotoolkit.fa(b,_geo.y.scene.mi.Vzb);_geo.geotoolkit.da(b,"geotoolkit3d.scene.reservoir.hexahedral.ReservoirGeometry");b.prototype.computeBoundingBox=function(){for(var a=this.getAttribute("position"),b=new window.THREE.Vector3(Math.min(a.getX(0),a.getX(a.count-1)),Math.min(a.getY(0),a.getY(a.count-1)),Number.POSITIVE_INFINITY),d=new window.THREE.Vector3(Math.max(a.getX(0),a.getX(a.count-1)),Math.max(a.getY(0),a.getY(a.count-1)),Number.NEGATIVE_INFINITY),
e=0;e<this.RS.Fi;e++)for(var c=0;c<this.RS.Jy;c++)for(var f=e*this.RS.Jy*this.RS.nu+c*this.RS.nu+0,k=e*this.RS.Jy*this.RS.nu+c*this.RS.nu+0,h=0;8>h;h++){var l=f+h,n=a.count-1-(k+h);a.getZ(l)!==_geo.y.util.ck.OT&&(b.z=Math.min(a.getZ(l),b.z),d.z=Math.max(a.getZ(l),d.z));a.getZ(n)!==_geo.y.util.ck.OT&&(b.z=Math.min(a.getZ(n),b.z),d.z=Math.max(a.getZ(n),d.z))}this.boundingBox=new window.THREE.Box3(b,d)};b.prototype.computeBoundingSphere=function(){null==this.boundingBox&&this.computeBoundingBox();this.boundingSphere=
new window.THREE.Sphere;this.boundingBox.getBoundingSphere(this.boundingSphere)};b.prototype.setOptions=function(a){null!=a.data&&(a=a.data.getAttributes().values,null!=a&&null==this.getAttribute(_geo.y.util.ck.yo)&&this.fhd(a))};b.prototype.fhd=function(a){var b=this.getAttribute("position").count;a.length!==b&&_geo.geotoolkit.log("Given values array does not match vertices count: expected="+b+", actual="+a.length)};b.prototype.yQa=function(){return this.RS};b.prototype.M7c=function(a,b){var d=16*
a,e=8*a;b[d+0]=e+1;b[d+1]=e+1;b[d+2]=e+0;b[d+3]=e+3;b[d+4]=e+2;b[d+5]=e+6;b[d+6]=e+0;b[d+7]=e+4;b[d+8]=e+5;b[d+9]=e+6;b[d+10]=e+7;b[d+11]=e+3;b[d+12]=e+5;b[d+13]=e+1;b[d+14]=e+0;b[d+15]=e+0};return b}();
_geo.y.scene.mi.Fv.rgc=function(){function b(a){_geo.y.scene.Object3D.call(this);this.type="ReservoirGrid";var b=_geo.geotoolkit.Ca(a,{colorprovider:new window.THREE.Color("beige"),mode:_geo.y.scene.mi.PBb.lbc,skeleton:{},unlit:1});"string"===typeof b.colorprovider?(b.color=new window.THREE.Color(b.colorprovider),b.colorprovider=null,b.vertexcolors=null==b.vertexcolors?window.THREE.NoColors:b.vertexcolors):b.colorprovider instanceof window.THREE.Color&&(b.color=b.colorprovider,b.colorprovider=null,
b.vertexcolors=null==b.vertexcolors?window.THREE.NoColors:b.vertexcolors);b.side=window.THREE.DoubleSide;var d=this.iQb(b);d.property.computeBoundingSphere();var e=d.property.boundingBox,c=d.property.boundingSphere;d.skeleton.boundingBox=e.clone();d.skeleton.boundingSphere=c.clone();d.horizons.forEach(function(a){a.boundingBox=e.clone();a.boundingSphere=c.clone()});var f=new window.THREE.Color("black");null!=b.skeleton.color&&(f=_geo.geotoolkit.util.oi.Ph(b.skeleton.color),f=new window.THREE.Color(f.Bl()/
255,f.zl()/255,f.xl()/255));this.nna=new window.THREE.LineSegments(d.skeleton,new _geo.y.scene.mi.Fv.Ngb({color:f,values:a.data.values}));this.nna.xFa=function(){return!1};this.add(this.nna);this.nna.visible=b.mode[1];this.nna.material.polygonOffset=!0;this.nna.material.polygonOffsetUnits=0;this.nna.material.polygonOffsetFactor=0;this.oGc=new _geo.y.scene.mi.Lbc(b.skeleton.horizons,d.horizons);this.add(this.oGc);this.oGc.visible=b.mode[2];this.Cma=new window.THREE.Mesh(d.property,new _geo.y.scene.mi.Fv.sgc(b));
this.Cma.drawMode=window.THREE.TriangleStripDrawMode;this.add(this.Cma);this.Cma.visible=b.mode[0];this.Cma.material.polygonOffset=!0;this.Cma.material.polygonOffsetUnits=1;this.Cma.material.polygonOffsetFactor=1}_geo.geotoolkit.da(b,"geotoolkit3d.scene.reservoir.hexahedral.ReservoirGrid");_geo.geotoolkit.fa(b,_geo.y.scene.Object3D);b.prototype.setOptions=function(a){"string"===typeof a.colorprovider?(a.color=new window.THREE.Color(a.colorprovider),a.colorprovider=null,a.vertexcolors=null==a.vertexcolors?
window.THREE.NoColors:a.vertexcolors):a.colorprovider instanceof window.THREE.Color&&(a.color=a.colorprovider,a.colorprovider=null,a.vertexcolors=null==a.vertexcolors?window.THREE.NoColors:a.vertexcolors);this.Cma.material.setOptions(a);this.Cma.geometry.setOptions(a);this.nna.material.setOptions(a);this.nna.geometry.setOptions(a);null!=a.mode&&(this.Cma.visible=a.mode[0],this.nna.visible=a.mode[1]);this.tj();return this};b.prototype.iQb=function(a){var b=[],d=a.skeleton.horizons;if(null!=d)for(var e=
0;e<d.length;++e)a.horizonk=d[e].horizonk,b[e]=new _geo.y.scene.mi.Fv.Mbc(a);return{property:new _geo.y.scene.mi.Fv.qgc(a),skeleton:new _geo.y.scene.mi.Fv.lhc(a),horizons:b}};return b}();
_geo.y.scene.mi.Fv.lhc=function(){function b(a){_geo.y.scene.mi.GVa.call(this,a);a=a.data.getAttributes();this.addAttribute("ijk",a.ijk);this.type="SkeletonGeometry"}_geo.geotoolkit.fa(b,_geo.y.scene.mi.GVa);_geo.geotoolkit.da(b,"geotoolkit3d.scene.reservoir.hexahedral.SkeletonGeometry");b.prototype.setOptions=function(a){};b.prototype.V5a=function(a){a=a.data.Fsb();var b=new window.Uint32Array(24*a);this.setIndex(new window.THREE.BufferAttribute(b,1));for(var d=0;d<a;++d){var e=24*d,c=8*d;b[e+0]=
c+0;b[e+1]=c+1;b[e+2]=c+1;b[e+3]=c+3;b[e+4]=c+3;b[e+5]=c+2;b[e+6]=c+2;b[e+7]=c+0;b[e+8]=c+4;b[e+9]=c+5;b[e+10]=c+5;b[e+11]=c+7;b[e+12]=c+7;b[e+13]=c+6;b[e+14]=c+6;b[e+15]=c+4;b[e+16]=c+0;b[e+17]=c+4;b[e+18]=c+1;b[e+19]=c+5;b[e+20]=c+3;b[e+21]=c+7;b[e+22]=c+2;b[e+23]=c+6}};return b}();
_geo.y.Ge.li.X$b=function(){function b(b){var d=b.material;this.object=b.object;var e=this.object.geometry.getAttribute("position").count,c;null!=this.object.geometry.getAttribute("cgcellindex")?c=this.object.geometry.getAttribute("cgcellindex"):(c=new window.Float32Array(1*e),c=new window.THREE.BufferAttribute(c,1),this.object.geometry.addAttribute("cgcellindex",c));for(var f=0;f<e;f++)c.setX(f,this.QRb(f));b=_geo.geotoolkit.Ca(b,{uniforms:d.uniforms,vertexshader:a.W8c(d),fragmentshader:a.V8c(d),
defines:d.defines},!0);this.type="DefaultReservoirPickingMaterial";_geo.y.Ge.li.aB.call(this,b);this.transparent=!1;this.lights=d.lights;this.side=d.side;this.blending=window.THREE.NoBlending}var a=_geo.y.util.ck;_geo.geotoolkit.fa(b,_geo.y.Ge.li.aB);_geo.geotoolkit.da(b,"geotoolkit3d.picking.pickingrenderer.DefaultReservoirPickingMaterial");b.prototype.QRb=function(a){return a/this.object.geometry.getAttribute("position").count};b.prototype.OQb=function(a){return Math.round(a*this.object.geometry.getAttribute("position").count)};
b.prototype.jUb=function(){var b=this;return null==b.object.geometry.yQa?[]:[{pickingmode:a.YCb,callback:function(a,e){var c=b.OQb(_geo.y.util.ck.vzb(a)),f=Math.floor(c/8),k=b.object.geometry.yQa(),h=Math.floor(f/(k.Jy*k.nu)),l=Math.floor(f%(k.Jy*k.nu)/k.nu),f=f%(k.Jy*k.nu)%k.nu,k=b.object.geometry.getAttribute(_geo.y.util.ck.yo);null!=k&&(e.value=k.getX(c));e.ijk={i:h,j:l,k:f}}}]};return b}();
_geo.y.scene.mi.Fv.sgc=function(){function b(b){_geo.y.scene.ZD.call(this,b);this.type="ReservoirMaterial";b=_geo.geotoolkit.Ca(b,{nullvalue:g,minvalue:Number.NaN,maxvalue:Number.NaN,mini:Number.NaN,maxi:Number.NaN,minj:Number.NaN,maxj:Number.NaN,mink:Number.NaN,maxk:Number.NaN},!0);a.csc(this);this.vertexShader=a.PEb;this.fragmentShader=a.OEb;this.setOptions(b)}var a=_geo.y.util.ck,g=a.OT;_geo.geotoolkit.fa(b,_geo.y.scene.ZD);_geo.geotoolkit.da(b,"geotoolkit3d.scene.reservoir.hexahedral.ReservoirMaterial");
_geo.y.Ge.Tz.oC(b.getClassName(),_geo.y.Ge.li.X$b);b.prototype.setOptions=function(b){_geo.y.scene.ZD.prototype.setOptions.call(this,b);a.GPc(this,b)};return b}();
_geo.y.scene.mi.Fv.Ngb=function(){function b(b){b=_geo.geotoolkit.Ca(b,{color:new window.THREE.Color(16777215),opacity:1,transparent:!1,side:window.THREE.DoubleSide,emissive:new window.THREE.Color(0),vertexcolors:window.THREE.NoColors,nullvalue:a.OT,minvalue:Number.NaN,maxvalue:Number.NaN,mini:Number.NaN,maxi:Number.NaN,minj:Number.NaN,maxj:Number.NaN,mink:Number.NaN,maxk:Number.NaN},!0);window.THREE.ShaderMaterial.call(this,{vertexShader:a.o0c,fragmentShader:a.n0c});a.csc(this);a.W7c(this);this.type=
"SkeletonMaterial";this.setOptions(b)}var a=_geo.y.util.ck;_geo.geotoolkit.fa(b,window.THREE.ShaderMaterial);_geo.geotoolkit.da(b,"geotoolkit3d.scene.reservoir.hexahedral.SkeletonMaterial");b.prototype.setOptions=function(b){a.GPc(this,b);a.opd(this,b);return this};b.prototype.dispose=function(){window.THREE.ShaderMaterial.prototype.dispose.call(this)};return b}();_geo.y.scene.mi.cxa=_geo.y.data.mi.cxa;
_geo.y.scene.mi.Fv.wKa=function(){function b(a){_geo.geotoolkit.warn("geotoolkit3d.scene.reservoir.hexahedral.ReservoirData deprecated since 2.5");_geo.y.data.mi.Fv.wKa.call(this,a)}_geo.geotoolkit.fa(b,_geo.y.data.mi.Fv.wKa);_geo.geotoolkit.da(b,"geotoolkit3d.scene.reservoir.hexahedral.ReservoirData")}();
(function(){var b="geotoolkit",a="scene",g="renderer",d=_geo.geotoolkit.wr,e=_geo.geotoolkit.$r,c=null,f=null;d(b+"3d.data.reservoir.AbstractReservoirData",_geo.y.data.mi.cxa);e(c=_geo.y.data.mi.cxa.prototype,"getAttributes",c.getAttributes,{getAttributes:0});e(c,"appendPoint",c.tsc,{tsc:0});d(b+"3d."+a+".reservoir.AbstractReservoirGeometry",(f=_geo.y.scene.mi).Vzb);d(b+"3d."+a+".reservoir.AbstractSkeletonGeometry",f.GVa);d(b+"3d."+a+".reservoir.AbstractHorizonGeometry",f.Uzb);d(b+"3d."+a+".reservoir.HorizonCluster",
f.Lbc);d(b+"3d."+a+".reservoir.IJKIndex",f.sXa);e(c=_geo.y.scene.mi.sXa.prototype,"fromArray",c.fromArray,{fromArray:0});e(c,"fromJson",c.HSb,{HSb:0});e(c,"toJSON",c.toJSON,{toJSON:0});e(c,"set",c.set,{set:0});e(c,"setOptions",c.setOptions,{setOptions:0});d(b+"3d."+a+".reservoir.ReservoirUtil",f.b0c);d(b+"3d."+a+".reservoir.DisplayMode",f.PBb);d(b+"3d."+a+".reservoir.DisplayMode.Full",(f=_geo.y.scene.mi.PBb).lbc);d(b+"3d."+a+".reservoir.DisplayMode.IgnoreHorizons",f.ZXc);d(b+"3d."+a+".reservoir.DisplayMode.IgnoreMesh",
f.$Xc);d(b+"3d."+a+".reservoir.DisplayMode.IgnoreProperty",f.aYc);d(b+"3d."+a+".reservoir.DisplayMode.Property",f.A_c);d(b+"3d."+a+".reservoir.DisplayMode.Mesh",f.Mesh);d(b+"3d."+a+".reservoir.DisplayMode.Horizons",f.LXc);d(b+"3d."+a+".reservoir.DisplayMode.Nothing",f.HZc);d(b+"3d."+a+".reservoir.hexahedral.HorizonGeometry",_geo.y.scene.mi.Fv.Mbc);d(b+"3d.data.reservoir.hexahedral.ReservoirData",_geo.y.data.mi.Fv.wKa);e(c=_geo.y.data.mi.Fv.wKa.prototype,"getAttributes",c.getAttributes,{getAttributes:0});
e(c,"getIndexForCell",c.$6a,{$6a:0});e(c,"reset",c.reset,{reset:0});e(c,"setCellsOptions",c.d2b,{d2b:0});e(c,"setCellOptions",c.c2b,{c2b:0});e(c,"getNumberOfCells",c.Fsb,{Fsb:0});e(c,"getCellData",c.xyc,{xyc:0});e(c,"getIJKCount",c.yQa,{yQa:0});d(b+"3d."+a+".reservoir.hexahedral.ReservoirGeometry",(f=_geo.y.scene.mi.Fv).qgc);d(b+"3d."+a+".reservoir.hexahedral.ReservoirGrid",f.rgc);e(c=_geo.y.scene.mi.Fv.rgc.prototype,"setOptions",c.setOptions,{setOptions:0});e(c,"createGeometries",c.iQb,{iQb:0});
d(b+"3d."+a+".reservoir.hexahedral.SkeletonGeometry",f.lhc);d(b+"3d.picking.picking"+g+".DefaultReservoirPickingMaterial",_geo.y.Ge.li.X$b);d(b+"3d."+a+".reservoir.hexahedral.ReservoirMaterial",(f=_geo.y.scene.mi.Fv).sgc);d(b+"3d."+a+".reservoir.hexahedral.SkeletonMaterial",f.Ngb);e(c=_geo.y.scene.mi.Fv.Ngb.prototype,"setOptions",c.setOptions,{setOptions:0});d(b+"3d."+a+".reservoir.AbstractReservoirData",_geo.y.scene.mi.cxa);d(b+"3d."+a+".reservoir.hexahedral.ReservoirData",_geo.y.scene.mi.Fv.wKa)})();

    return _geo.geotoolkit3d.reservoir;
}(_geo));
/* eslint-enable */
/* tslint:enable */