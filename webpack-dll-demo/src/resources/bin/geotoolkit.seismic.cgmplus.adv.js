/* tslint:disable */
/* eslint-disable */
/**
 * Copyright: Copyright (c) 2016 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 * INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
(function (root, factory) {
if (root && typeof root['define'] === 'function') {
    root['define']("geotoolkit.seismic.cgmplus", ["geotoolkit.seismic","geotoolkit.cgm"], function() {
      root._geo = factory(root, root._geo);
      root.geotoolkit = root._geo.geotoolkit || root.geotoolkit;
      return root.geotoolkit;
    });
} else if (typeof module !== 'undefined' && typeof module.exports === 'object') {
    var m = factory(root, root && root._geo);
    module.exports._geo = m;
    if (root) { 
        root._geo = module.exports._geo;
        if(!root.geotoolkit) {
            root.geotoolkit = module.exports._geo.geotoolkit;
        }
    }
    if (!module.exports.geotoolkit) module.exports.geotoolkit=module.exports._geo.geotoolkit;
} else {
    root._geo = factory(root, root._geo);
    root.geotoolkit = root._geo.geotoolkit || root.geotoolkit;
    return root.geotoolkit;
}

}(typeof window !== "undefined" ? window : undefined, function (window, _geo) {
var _geo=_geo||{};_geo.geotoolkit.pa.ksa=_geo.geotoolkit.pa.ksa||{};
_geo.geotoolkit.pa.ksa.N9b=function(){function b(){this.BO=null;_geo.geotoolkit.cp.udb.call(this)}_geo.geotoolkit.fa(b,_geo.geotoolkit.cp.udb);_geo.geotoolkit.da(b,"geotoolkit.seismic.cgmplus.CgmPlusExport");b.prototype.Owc=function(a,b,d,e,c,f){function k(){l.BO.close();l.BO.zM();null!=h&&h.Go();l.eKc(a);f&&f()}var h=null;_geo.geotoolkit.Pk(a,_geo.geotoolkit.scene.exports.uoa)&&(h=a,h.ap(),a=a.RB(e));e=this.gKc(a)||d;d=d||e;b={stream:b,sq:e,vmd:c};this.BO=new _geo.geotoolkit.pa.ksa.WAb(b);this.BO.qM();
this.BO.open(d);d=new _geo.geotoolkit.util.na;var l=this;a instanceof _geo.geotoolkit.scene.exports.m0?a.Aw(this.BO,d,k):a.Aw(this.BO,k)};b.prototype.cancel=function(){this.BO.J9c()};return b}();
_geo.geotoolkit.pa.ksa.WAb=function(){function b(a){_geo.geotoolkit.cp.nWa.call(this,a);this.tib=0;this.Lza=[];this.tib=0;this.Yz.iPa=1;this.Yz.nZb=4096;this.Goc=a.progress||function(){};this.f_a=a.cancelled||!1}_geo.geotoolkit.fa(b,_geo.geotoolkit.cp.nWa);_geo.geotoolkit.sg(b,_geo.geotoolkit.pa.image.qXa);_geo.geotoolkit.da(b,"geotoolkit.seismic.cgmplus.CgmPlusRenderingContext");b.prototype.Hxc=function(){return'"ProfileId: CGM+","ColorClass: Colour","Source: (c) '+(new Date).getFullYear()+' Interactive Network Technologies Inc."'};
b.prototype.J9c=function(){this.f_a=!0;this.Blc.dispose();this.NMb.dispose();this.uc.RP().dispose()};b.prototype.rDa=function(a,g,d){function e(a){t.push(function(b){k.select(a,function(c){if(!r.f_a){if(!0===c.re())for(var d=a.from;d<=a.to;d++){var e=c.ji(d);p=e.wg();null!=p&&r.ncd(p)}r.Goc(a.to/n);r.uc.RP().compile()}b()})})}function c(a,b){function c(){var b=a[e++];b.call(null,d)}function d(g){if(g||e===a.length||r.f_a)return b();c()}var e=0;r.f_a?b():c()}this.kv=a;var f=this.uc.rTb();this.uc.R4a(0);
var k=a.fp(),h=k.FE();null!=h&&(this.uc.NPb(h.An(),this.Yz.iPa),this.uc.Gka());this.yLb=k.xS();this.E4c=b.zHc(this.yLb);d=k.getReader();var l=new _geo.geotoolkit.util.Range(0,d.Yt());a=0;var n=d.eh()-1,p=[];this.dhd(k,a,l);this.c9c();var r=this,t=[];for(d=5E3;a<n;a+=d+1)e({from:a,to:a+d<n?a+d:n});c(t,function(){r.uc.R4a(f);r.Yz.iPa+=h.rH;g()})};b.prototype.qc=function(a){return new _geo.geotoolkit.pa.ksa.WAb({parent:this,Ld:this.uc,sq:this.Inb,te:_geo.geotoolkit.util.Ga.multiply(this.Ra(),a),aC:a,
fillStyle:this.Ke,KPa:this.wU,pf:this.To,Be:this.Md,APa:this.CH,clip:this._clip,hPb:this.Yz,xSb:this.zU,fonts:this.qR,vmd:this.Goc,svd:this.f_a})};b.prototype.c9c=function(){var a=this.kv.fp(),b=1,d=-1,e=a.l9().limits,c=e.gb(),e=e.nb(),b=(b-d)/(e-c),d=d-c*b,c=a.ftb();this.UHb=b*c;this.WHb=d*c;a=a.FE().getSize()/2;this.VHb=this.UHb*a;this.XHb=(this.WHb+1)*a};b.prototype.dhd=function(a,b,d){this.wbb(a,b);this.fmd(a,b,d);this.uc.Zd(this.uc.Ld(4,10),4*this.uc.fw()+9*this.uc.Pw()+8*this.uc.nO());this.uc.Fi(-4);
this.uc.mn(this.vl.iSc);this.uc.mn(this.vl.Kob);this.uc.mn(this.vl.Aob);this.uc.mn(this.vl.mzb);this.uc.Fi(0);this.uc.f(this.vl.Osc);this.uc.f(this.vl.kOb);this.uc.f(this.vl.v7b);this.uc.f(this.vl.nTc);this.uc.f(this.vl.dKc);this.uc.f(this.vl.KIc);this.uc.Fi(this.vl.iVa);this.uc.Fi(this.vl.q1b);this.uc.Fi(this.vl.wj);this.uc.f(this.vl.cKc);this.uc.f(this.vl.JIc);this.uc.Fi(0);this.uc.Fi(this.vl.ATc);this.uc.Fi(this.vl.XIc);this.uc.Fi(this.vl.kSc)};b.prototype.YUb=function(){return _geo.geotoolkit.util.Ga.hf(this.kv.xa()||
new _geo.geotoolkit.util.Rect,this._clip.ga())};b.prototype.fmd=function(a,g,d){this.vl={iSc:new _geo.geotoolkit.util.na,Kob:new _geo.geotoolkit.util.na,Aob:new _geo.geotoolkit.util.na,mzb:new _geo.geotoolkit.util.na,Osc:0,kOb:0,v7b:0,nTc:0,dKc:0,KIc:0,cKc:0,JIc:0,iVa:0,q1b:0,wj:0,ATc:0,XIc:0,kSc:0};var e=a.xa();g=e.getX();e=e.qa()+d.gb()*a.getReader().Ho().Nk();g=this.YUb().cb(new _geo.geotoolkit.util.na(g,e));g=this.zU.cb(g);this.vl.iSc=g;g=1;var e=0,c=1,f=0;this.vl.Kob=new _geo.geotoolkit.util.na(0,
-1);this.vl.mzb=new _geo.geotoolkit.util.na(g,e);this.vl.Aob=new _geo.geotoolkit.util.na(c,f);this.vl.Osc=this._clip.ga().ba()/d.getSize();this.vl.v7b=Math.abs(this.YUb().Ab());this.vl.kOb=32767;this.vl.nTc=0;g=a.jb().plot.clippingFactor*this.vl.v7b/this.vl.kOb;this.vl.dKc=g;this.vl.KIc=-g;this.vl.iVa=this.qgd(a.xS());g=_geo.geotoolkit.util.Ga.fG(this.Ra());0!==g&&(g=_geo.geotoolkit.util.Ga.dn(g,0,0),g.Ue(this.vl.Kob,this.vl.Kob),g.Ue(this.vl.mzb,this.vl.mzb),g.Ue(this.vl.Aob,this.vl.Aob),this.Aid(a.xS()));
a=b.zHc(a.xS());this.vl.q1b=a?4:0;this.vl.wj=d.getSize();this.vl.cKc=1;this.vl.JIc=-1;this.vl.ATc=1;this.vl.XIc=0;this.vl.kSc=1};b.prototype.Aid=function(a){a.SimpleDensity||(this.vl.iVa+=8);a.InterpolatedDensity&&(this.vl.iVa-=16)};b.prototype.wbb=function(a,b){var d=a.FE(),d=d.r2+1;this.uc.Jub(this.Yz.iPa+d);this.uc.fillColor(this.Yz.iPa+d);return this};b.zHc=function(a){return!!(a.PositiveColorFill||a.NegativeColorFill||a.LobeColorFill||a.SimpleDensity||a.InterpolatedDensity)};b.prototype.ncd=
function(a){var b=Math.abs(this.YUb().Ab()),d=0===this.vl.q1b?2:4,d=(null!=a?a.length:0)*d,e=d+this.uc.Pw();if(null==this.Lza||this.Lza.length!==d)this.Lza=[];this.tib=0;this.uc.Zd(this.uc.Ld(4,10),e);this.uc.Fi(-5);this.E4c?this.fcd(a,b,this.yLb):this.vcd(a,b,this.yLb);this.uc.RP().Ci(this.Lza,0,d);return this};b.prototype.vcd=function(a,b,d){for(var e=0;e<a.length;e++)d=(this.UHb*a[e]+this.WHb)*b,0<d?d+=.5:0>d&&(d-=.5),this.u1b(d,this.Lza)};b.prototype.fcd=function(a,b,d){var e,c,f=this.kv.fp().FE().getSize(),
k=0;for(c=0;c<a.length;c++){e=d.Wiggle||d.NegativeColorFill||d.PositiveColorFill?(this.UHb*a[c]+this.WHb)*b:this.VHb*a[c]+this.XHb;0<e?e+=.5:0>e&&(e-=.5);this.u1b(e,this.Lza);e=a[c]*this.VHb+this.XHb;if(d.LobeColorFill){if(0>e&&0<=k||0<e&&0>=k)k=this.ajd(a,c)*this.VHb+this.XHb;e=~~(k+1)}else e=~~(e+1);0>e?e=0:e>=f&&(e=f-1);this.u1b(this.Yz.iPa+e,this.Lza)}};b.prototype.qgd=function(a){if(null==a)return-1;var b=0;a.Wiggle&&(b+=1);a.PositiveFill&&(b+=2);a.NegativeFill&&(b+=4);a.SimpleDensity&&(b+=8);
a.InterpolatedDensity&&(b+=16);a.PositiveColorFill&&(b+=32);a.NegativeColorFill&&(b+=64);a.LobeColorFill&&(b+=96);return b};b.prototype.ajd=function(a,b){var d=0,e=0<a[b],c=b;if(e)for(;c<a.length&&0<=a[c];)a[c]>d&&(d=a[c]),c++;else for(;c<a.length&&0>=a[c];)a[c]<d&&(d=a[c]),c++;return d};b.prototype.u1b=function(a,b){b[this.tib++]=a>>8&255;b[this.tib++]=a&255};b.prototype.AAd=function(a,b){return b?new _geo.geotoolkit.util.Rect(a.y,a.x,a.y+a.height,a.x+a.width):new _geo.geotoolkit.util.Rect(a)};return b}();
(function(){var b=_geo.geotoolkit.wr,a=_geo.geotoolkit.$r,g=null;b("geotoolkit.seismic.cgmplus.CgmPlusExport",_geo.geotoolkit.pa.ksa.N9b);a(g=_geo.geotoolkit.pa.ksa.N9b.prototype,"exportToCgmStreamAsync",g.Owc,{Owc:0});a(g,"cancel",g.cancel,{cancel:0});a(g=_geo.geotoolkit.pa.ksa.WAb.prototype,"drawSeismicImage",g.rDa,{rDa:0});a(g,"pushTransformation",g.qc,{qc:0})})();

    return _geo;
}));
/* eslint-enable */
/* tslint:enable */