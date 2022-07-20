/* tslint:disable */
/* eslint-disable */
/**
 * Copyright: Copyright (c) 2016 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 * INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
import {_geo} from './geotoolkit.adv.module.js';
import {seismic} from './geotoolkit.seismic.adv.module.js';
import {welllog} from './geotoolkit.welllog.adv.module.js';

export let seislog = (function (_geo) {var _geo=_geo||{};_geo.geotoolkit.e5=_geo.geotoolkit.e5||{};_geo.geotoolkit.e5.headers=_geo.geotoolkit.e5.headers||{};
_geo.geotoolkit.e5.iGb=function(){function b(a,b,d,e,c){_geo.geotoolkit.pa.image.gba.call(this,a,b,d,e,c);a=d;this.translate(0,-a).scale(1,1/(c-a)).rotate(Math.PI/2,.5,.5).scale(1,c-a).translate(0,a)}_geo.geotoolkit.fa(b,_geo.geotoolkit.pa.image.gba);_geo.geotoolkit.da(b,"geotoolkit.seislog.WaveSeismicImage");b.prototype.Ea=function(a,b,d,e){_geo.geotoolkit.pa.image.gba.prototype.Ea.call(this,a,b,d,e);a=this.ga().qa();b=this.ga().wa();this.Td(null).translate(0,-a).scale(1,1/(b-a)).rotate(Math.PI/
2,.5,.5).scale(1,b-a).translate(0,a);return this};return b}();
_geo.geotoolkit.e5.headers.Gcb=function(){function b(b){_geo.geotoolkit.ca.fb.tC.call(this,b);this.Vo=new _geo.geotoolkit.util.NumberFormat;this.Vo.Pv(2);this.Uo=new _geo.geotoolkit.util.NumberFormat;this.Uo.Pv(2);var d={visible:!0,text:"",verticalpos:"top",horizontalpos:"center"};b={gap:5,priority:["Name","ScaleFrom","ScaleTo"],order:["Name","ScaleFrom","ScaleTo"]};var e=_geo.geotoolkit.Ca(d,{});_geo.geotoolkit.Ca({updatemethod:a.Ezb,cut:"left-to-right",textstyle:this.Ib().clone()},e);var c=_geo.geotoolkit.Ca(d,
{});_geo.geotoolkit.Ca({updatemethod:function(a){a=a.we();if(!a)return"";a=a.fp().l9();a=a.limits.gb()*a.scale;return this.Vo.format(a)}.bind(this),textstyle:this.Ib().clone(),horizontalpos:"left"},c);d=_geo.geotoolkit.Ca(d,{});_geo.geotoolkit.Ca({updatemethod:function(a){a=a.we();if(!a)return"";a=a.fp().l9();a=a.limits.nb()*a.scale;return this.Uo.format(a)}.bind(this),textstyle:this.Ib().clone(),horizontalpos:"right"},d);this.wo("ScaleFrom",c);this.wo("Name",e);this.wo("ScaleTo",d);this.Rs(b);this.Sa(new _geo.geotoolkit.util.Rect(0,
0,100,40));this.Ea(new _geo.geotoolkit.util.Rect(0,0,100,40))}var a=_geo.geotoolkit.ca.fb.Bb;_geo.geotoolkit.fa(b,_geo.geotoolkit.ca.fb.tC);_geo.geotoolkit.da(b,"geotoolkit.seislog.headers.AdaptiveSeismicImageHeader");b.prototype.render=function(a){var b=null!=this.mb()?a.qc(this.mb()):a,e=this.we();if(null!=e)if(b.Gd())this.wv(b,_geo.geotoolkit.attributes.Fa.Ui);else if(this.wo("Name",{text:this.we().getName()}),_geo.geotoolkit.ca.fb.tC.prototype.render.call(this,a),null!=e.fp().FE()){var c=e.fp().FE().getSize();
if(0!==c&&(e=_geo.geotoolkit.pa.util.Tya.lq().h5a(e.fp().jb().colors.colorMap,c),null!==e)){a=this.xa().clone();var f=e.Tc(),k=e.ad(),h=a.aa()/c,l=a.ba()/2,n=a.sa(),c=(k-f)/c,f=f+c/2;for(b.ua(null);n<a.za();)b.ta(new _geo.geotoolkit.attributes.Fa(e.ac(f).ps())),b.zc(n,a.wa()-l,h,l),f+=c,n+=h}}};b.prototype.$a=function(a){this.Vo=a.Vo;this.Uo=a.Uo;this.Sa(a.xa());this.Ea(a.ga())};b.prototype.DA=function(){return this.Vo};b.prototype.BA=function(){return this.Uo};b.prototype.O_=function(a){this.Vo=
a;return this};b.prototype.L$=function(a){this.Uo=a;return this};return b}();_geo.geotoolkit.ca.fb.Yaa.qy().jQ(_geo.geotoolkit.pa.image.gba.getClassName(),new _geo.geotoolkit.e5.headers.Gcb);_geo.geotoolkit.ca.fb.Yaa.qy().jQ(_geo.geotoolkit.e5.iGb.getClassName(),new _geo.geotoolkit.e5.headers.Gcb);
(function(){var b="geotoolkit",a=_geo.geotoolkit.wr,g=_geo.geotoolkit.$r,d=null;a(b+".seislog.WaveSeismicImage",_geo.geotoolkit.e5.iGb);g(d=_geo.geotoolkit.e5.iGb.prototype,"setBounds",d.Ea,{Ea:0});a(b+".seislog.headers.AdaptiveSeismicImageHeader",_geo.geotoolkit.e5.headers.Gcb);g(d=_geo.geotoolkit.e5.headers.Gcb.prototype,"render",d.render,{render:0});g(d,"copyConstructor",d.$a,{$a:0});g(d,"getMinValueFormat",d.DA,{DA:0});g(d,"getMaxValueFormat",d.BA,{BA:0});g(d,"setMinValueFormat",d.O_,{O_:0});
g(d,"setMaxValueFormat",d.L$,{L$:0})})();

    return _geo.geotoolkit.seislog;
}(_geo));
/* eslint-enable */
/* tslint:enable */