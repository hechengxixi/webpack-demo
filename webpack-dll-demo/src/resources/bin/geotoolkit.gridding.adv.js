/* tslint:disable */
/* eslint-disable */
/**
 * Copyright: Copyright (c) 2016 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 * INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
(function (root, factory) {
if (root && typeof root['define'] === 'function') {
    root['define']("geotoolkit.gridding", ["geotoolkit"], function() {
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
var _geo=_geo||{};_geo.geotoolkit.FS.pIa=function(){function b(a){this.sB=_geo.geotoolkit.Ca(a,{filter:!0},!0)}_geo.geotoolkit.da(b,"geotoolkit.gridding.AbstractInterpolator");b.prototype.pva=function(a,b,d){this.sB&&this.Xcd(a,b,d);return this.aaa(a,b,d)};b.prototype.aaa=_geo.geotoolkit.Ia;b.prototype.ce=_geo.geotoolkit.Ia;b.prototype.Xcd=function(a,b,d){for(var e={},c=a.length,c=c-1;0<=c;c--){if(e.hasOwnProperty(a[c])){if(e[a[c]].hasOwnProperty(b[c])){a.splice(c,1);b.splice(c,1);d.splice(c,1);continue}}else e[a[c]]=
{};e[a[c]][b[c]]=d[c]}};return b}();
_geo.geotoolkit.FS.Xeb=function(){function b(a){_geo.geotoolkit.FS.pIa.call(this,a);a=_geo.geotoolkit.Ca(a,{model:b.xya.mJa,sigma2:0,alfa:10},!0);this.ANb=null;this.cd=a.model;this.r6c=a.sigma2;this.w2c=a.alfa}function a(a,b,c,d,e){return a>c?b+(d-b)/c:b+(d-b)/c*(a/c*1.5-.5*Math.pow(a/c,3))}function g(a,b,c,d,e){return b+(d-b)/c*(1-Math.exp(a/c*-(1/e)))}function d(a,b,c,d,e){return b+(d-b)/c*(1-Math.exp(-(1/e)*Math.pow(a/c,2)))}function e(a,b){var c=b,d=Array(b*b),e=Array(b),g=Array(b),f=Array(b),
k,h=0,l=0,n,m,p;for(k=0;k<b;k++)for(n=0;n<b;n++)d[k*b+n]=k===n?1:0;for(n=0;n<b;n++)f[n]=0;for(k=0;k<b;k++){for(n=p=0;n<b;n++)if(1!==f[n])for(m=0;m<b;m++)0===f[m]&&Math.abs(a[n*b+m])>=p&&(p=Math.abs(a[n*b+m]),l=n,h=m);++f[h];if(l!==h){for(n=0;n<b;n++)p=a[l*b+n],a[l*b+n]=a[h*b+n],a[h*b+n]=p;for(n=0;n<c;n++)p=d[l*b+n],d[l*b+n]=d[h*b+n],d[h*b+n]=p}g[k]=l;e[k]=h;if(0===a[h*b+h])return!1;m=1/a[h*b+h];a[h*b+h]=1;for(n=0;n<b;n++)a[h*b+n]*=m;for(n=0;n<c;n++)d[h*b+n]*=m;for(m=0;m<b;m++)if(m!==h){p=a[m*b+h];
for(n=a[m*b+h]=0;n<b;n++)a[m*b+n]-=a[h*b+n]*p;for(n=0;n<c;n++)d[m*b+n]-=d[h*b+n]*p}}for(n=b-1;0<=n;n--)if(g[n]!==e[n])for(m=0;m<b;m++)p=a[m*b+g[n]],a[m*b+g[n]]=a[m*b+e[n]],a[m*b+e[n]]=p;return!0}function c(a,b){var c,d,e,g;for(c=0;c<b;c++)for(a[c*b+c]=1/a[c*b+c],d=c+1;d<b;d++){g=0;for(e=c;e<d;e++)g-=a[d*b+e]*a[e*b+c];a[d*b+c]=g/a[d*b+d]}for(c=0;c<b;c++)for(d=c+1;d<b;d++)a[c*b+d]=0;for(c=0;c<b;c++){a[c*b+c]*=a[c*b+c];for(e=c+1;e<b;e++)a[c*b+c]+=a[e*b+c]*a[e*b+c];for(d=c+1;d<b;d++)for(e=d;e<b;e++)a[c*
b+d]+=a[e*b+c]*a[e*b+d]}for(c=0;c<b;c++)for(d=0;d<c;d++)a[c*b+d]=a[d*b+c]}function f(a,b){var c,d,e,g=Array(b);for(c=0;c<b;c++)g[c]=a[c*b+c];for(c=0;c<b;c++){for(d=0;d<c;d++)g[c]-=a[c*b+d]*a[c*b+d];if(0>=g[c])return!1;g[c]=Math.sqrt(g[c]);for(d=c+1;d<b;d++){for(e=0;e<c;e++)a[d*b+c]-=a[d*b+e]*a[c*b+e];a[d*b+c]/=g[c]}}for(c=0;c<b;c++)a[c*b+c]=g[c];return!0}function k(a,b,c,d,e){var g,f,k,h=Array(c*e);for(g=0;g<c;g++)for(f=0;f<e;f++)for(k=h[g*e+f]=0;k<d;k++)h[g*e+f]+=a[g*d+k]*b[k*e+f];return h}function h(a,
b,c,d){var e,g,f=Array(c*d);for(e=0;e<c;e++)for(g=0;g<d;g++)f[e*d+g]=a[e*d+g]+b[e*d+g];return f}function l(a,b,c){var d,e,g=Array(c*b);for(d=0;d<b;d++)for(e=0;e<c;e++)g[e*b+d]=a[d*c+e];return g}function n(a,b){var c,d=r(0,b*b);for(c=0;c<b;c++)d[c*b+c]=a;return d}function p(a,b,c){var d,e,g=!1;d=0;for(e=a.length-1;d<a.length;e=d++)a[d][1]>c!==a[e][1]>c&&b<(a[e][0]-a[d][0])*(c-a[d][1])/(a[e][1]-a[d][1])+a[d][0]&&(g=!g);return g}function r(a,b){if(b<m)return Array.apply(null,Array(b)).map(Number.prototype.valueOf,
a);for(var c=b/m<<0,d=Array.apply(null,Array(b%m)).map(Number.prototype.valueOf,a),e=0;e<c;e++)d=d.concat(Array.apply(null,Array(m)).map(Number.prototype.valueOf,a));return d}function t(a){return Math.min.apply(null,a)}function q(a){return Math.max.apply(null,a)}var m=65534,u={aaa:function(b,m,p,q,t,u){var D={t:b,x:m,y:p,fGa:0,ak:0,TUa:0,v:1/3,n:0};switch(q){case "gaussian":D.Su=d;break;case "exponential":D.Su=g;break;case "spherical":D.Su=a;break}var E,F,K,H,G=b.length,J=Array((G*G-G)/2);for(K=E=
0;E<G;E++)for(F=0;F<E;F++,K++)J[K]=Array(2),J[K][0]=Math.pow(Math.pow(m[E]-m[F],2)+Math.pow(p[E]-p[F],2),.5),J[K][1]=Math.abs(b[E]-b[F]);J.sort(function(a,b){return a[0]-b[0]});D.ak=J[(G*G-G)/2-1][0];var I=30<(G*G-G)/2?30:(G*G-G)/2,O=D.ak/I,M=r(0,I),L=r(0,I);if(30>I)for(H=0;H<I;H++)M[H]=J[H][0],L[H]=J[H][1];else{for(H=K=F=E=0;E<I&&F<(G*G-G)/2;E++,K=0){for(;J[F][0]<=(E+1)*O&&!(M[H]+=J[F][0],L[H]+=J[F][1],F++,K++,F>=(G*G-G)/2););0<K&&(M[H]/=K,L[H]/=K,H++)}if(2>H)return D}G=H;D.ak=M[G-1]-M[0];K=r(1,
2*G);F=Array(G);H=D.v;for(E=0;E<G;E++){switch(q){case "gaussian":K[2*E+1]=1-Math.exp(-(1/H)*Math.pow(M[E]/D.ak,2));break;case "exponential":K[2*E+1]=1-Math.exp(-(1/H)*M[E]/D.ak);break;case "spherical":K[2*E+1]=M[E]/D.ak*1.5-.5*Math.pow(M[E]/D.ak,3);break}F[E]=L[E]}E=l(K,G,2);q=k(E,K,2,G,2);q=h(q,n(1/u,2),2,2);u=q.slice(0);f(q,2)?c(q,2):(e(u,2),q=u);G=k(k(q,E,2,2,G),F,2,G,1);D.fGa=G[0];D.TUa=G[1]*D.ak+D.fGa;G=D.n=m.length;u=Array(G*G);for(E=0;E<G;E++){for(F=0;F<E;F++)u[E*G+F]=D.Su(Math.pow(Math.pow(m[E]-
m[F],2)+Math.pow(p[E]-p[F],2),.5),D.fGa,D.ak,D.TUa,D.v),u[F*G+E]=u[E*G+F];u[E*G+E]=D.Su(0,D.fGa,D.ak,D.TUa,D.v)}m=h(u,n(t,G),G,G);p=m.slice(0);f(m,G)?c(m,G):(e(p,G),m=p);u=m.slice(0);b=k(m,b,G,G,1);D.nu=u;D.WYc=b;return D},ZS:function(a,b,c){var d,e=Array(c.n);for(d=0;d<c.n;d++)e[d]=c.Su(Math.pow(Math.pow(a-c.x[d],2)+Math.pow(b-c.y[d],2),.5),c.fGa,c.ak,c.TUa,c.v);return k(e,c.WYc,1,c.n,1)[0]},LAd:function(a,b,c){var d,e=Array(c.n);for(d=0;d<c.n;d++)e[d]=c.Su(Math.pow(Math.pow(a-c.x[d],2)+Math.pow(b-
c.y[d],2),.5),c.fGa,c.ak,c.TUa,c.v);return c.Su(0,c.fGa,c.ak,c.TUa,c.v)+k(k(e,c.nu,1,c.n,c.n),e,1,c.n,1)[0]},ze:function(a,b,c){var d,e,g,f=a.length;if(0===f)return null;var k=[a[0][0][0],a[0][0][0]],h=[a[0][0][1],a[0][0][1]];for(d=0;d<f;d++)for(e=0;e<a[d].length;e++)a[d][e][0]<k[0]&&(k[0]=a[d][e][0]),a[d][e][0]>k[1]&&(k[1]=a[d][e][0]),a[d][e][1]<h[0]&&(h[0]=a[d][e][1]),a[d][e][1]>h[1]&&(h[1]=a[d][e][1]);var l,n,m=Array(2),r=Array(2),I=Array(2),O=Array(2);e=Math.ceil((k[1]-k[0])/c);g=Math.ceil((h[1]-
h[0])/c);var M=Array(e+1);for(d=0;d<=e;d++)M[d]=Array(g+1);for(d=0;d<f;d++){I[0]=a[d][0][0];I[1]=I[0];O[0]=a[d][0][1];O[1]=O[0];for(e=1;e<a[d].length;e++)a[d][e][0]<I[0]&&(I[0]=a[d][e][0]),a[d][e][0]>I[1]&&(I[1]=a[d][e][0]),a[d][e][1]<O[0]&&(O[0]=a[d][e][1]),a[d][e][1]>O[1]&&(O[1]=a[d][e][1]);m[0]=Math.floor((I[0]-(I[0]-k[0])%c-k[0])/c);m[1]=Math.ceil((I[1]-(I[1]-k[1])%c-k[0])/c);r[0]=Math.floor((O[0]-(O[0]-h[0])%c-h[0])/c);r[1]=Math.ceil((O[1]-(O[1]-h[1])%c-h[0])/c);for(e=m[0];e<=m[1];e++)for(g=
r[0];g<=r[1];g++)l=k[0]+e*c,n=h[0]+g*c,p(a[d],l,n)&&(M[e][g]=u.ZS(l,n,b))}M.XAd=k;M.iBd=h;M.jBd=[t(b.t),q(b.t)];M.width=c;return M}};_geo.geotoolkit.da(b,"geotoolkit.gridding.KrigingInterpolator");_geo.geotoolkit.fa(b,_geo.geotoolkit.FS.pIa);b.xya={xXc:"gaussian",mJa:"exponential",Spherical:"spherical"};b.prototype.aaa=function(a,b,c){if(!(a instanceof Array&&b instanceof Array&&c instanceof Array)||a.length!==b.length||a.length!==c.length||0===a.length)return _geo.geotoolkit.util.Promise.reject("train needs arrays with same not null length");
var d=this;return new _geo.geotoolkit.util.Promise(function(e){d.ANb=u.aaa(c,a,b,d.cd,d.r6c,d.w2c);e()})};b.prototype.ce=function(a,b){if(!(a instanceof Array&&b instanceof Array)||a.length!==b.length||0===a.length)return _geo.geotoolkit.util.Promise.reject("train needs arrays with same length");if(null==this.ANb)return _geo.geotoolkit.util.Promise.reject("interpolator should be trained firstly");var c=this;return new _geo.geotoolkit.util.Promise(function(d){for(var e=a.length,g=Array(e),f=0;f<e;f++)g[f]=
u.ZS(a[f],b[f],c.ANb);d(g)})};return b}();
_geo.geotoolkit.FS.nic=function(){function b(b,e){var c=a(b,e);return 0===c?0:Math.pow(c,2)*Math.log(c)}function a(a,b){var c=0;if(!a.length)return Math.sqrt(Math.pow(a-b,2));for(var g=0;g<a.length;g++)c+=Math.pow(a[g]-b[g],2);return Math.sqrt(c)}function g(a){_geo.geotoolkit.FS.pIa.call(this,a);this.k7=null;this.HOa=[]}_geo.geotoolkit.da(g,"geotoolkit.gridding.ThinPlateInterpolator");_geo.geotoolkit.fa(g,_geo.geotoolkit.FS.pIa);g.prototype.aaa=function(a,e,c){this.k7=a.map(function(a,b){return[a,
e[b]]});a=this.k7.length;c=c.slice();var g=[],k,h=[],l,n,p;for(n=0;n<a;n++){l=new window.Float32Array(this.k7[n].length+1);l[0]=1;for(k=0;k<this.k7[n].length;k++)l[k+1]=this.k7[n][k];k=new window.Float32Array(a+l.length);for(p=0;p<a;p++)k[p]=b(this.k7[n],this.k7[p]);for(p=a;p<a+l.length;p++)k[p]=l[p-a];h.push(l);g.push(k)}a=(new _geo.geotoolkit.util.LDb(h)).transpose();a=a.elements.map(function(a){var b=new window.Float32Array(g[0].length);b.set(a);for(a=a.length;a<g[0].length;a++)b[a]=0;return b});
for(n=0;n<a.length;n++)g.push(a[n]),c.push(0);return(this.HOa=this.fqd(c,g))?_geo.geotoolkit.util.Promise.resolve(this.HOa):_geo.geotoolkit.util.Promise.reject(Error("Failed to compile with given centers. Centers must be unique"))};g.prototype.fqd=function(a,b){var c=new _geo.geotoolkit.util.LDb(b),g=new _geo.geotoolkit.util.LDb(a);return(c=c.inverse())?c.multiply(g):null};g.prototype.getValue=function(a){var e=0,c;for(c=0;c<this.k7.length;c++)e+=Number(this.HOa.elements[c][0])*b(a,this.k7[c]);e+=
Number(this.HOa.elements[this.k7.length][0]);for(c=0;c<a.length;c++)e+=a[c]*Number(this.HOa.elements[this.k7.length+(c+1)][0]);return e};g.prototype.ce=function(a,b){var c=a.map(function(a,c){return this.getValue([a,b[c]])},this);return _geo.geotoolkit.util.Promise.resolve(c)};return g}();
(function(){var b="geotoolkit",a=_geo.geotoolkit.wr,g=_geo.geotoolkit.$r,d=null,e=null;a(b+".gridding.AbstractInterpolator",(e=_geo.geotoolkit.FS).pIa);g(d=_geo.geotoolkit.FS.pIa.prototype,"prepare",d.pva,{pva:0});g(d,"train",d.aaa,{aaa:0});g(d,"getValues",d.ce,{ce:0});a(b+".gridding.KrigingInterpolator",e.Xeb);a(b+".gridding.KrigingInterpolator.Model",_geo.geotoolkit.FS.Xeb.xya);a(b+".gridding.KrigingInterpolator.Model.Gaussian",(e=_geo.geotoolkit.FS.Xeb.xya).xXc);a(b+".gridding.KrigingInterpolator.Model.Exponential",
e.mJa);a(b+".gridding.KrigingInterpolator.Model.Spherical",e.Spherical);g(d=_geo.geotoolkit.FS.Xeb.prototype,"train",d.aaa,{aaa:0});g(d,"getValues",d.ce,{ce:0});a(b+".gridding.ThinPlateInterpolator",_geo.geotoolkit.FS.nic);g(d=_geo.geotoolkit.FS.nic.prototype,"train",d.aaa,{aaa:0});g(d,"getValues",d.ce,{ce:0})})();

    return _geo;
}));
/* eslint-enable */
/* tslint:enable */