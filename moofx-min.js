/*
---
provides: moofx
version: 3.0.4
description: A CSS3-enabled javascript animation library on caffeine
homepage: http://moofx.it
author: Valerio Proietti <@kamicane> (http://mad4milk.net)
license: MIT (http://mootools.net/license.txt)
includes: cubic-bezier by Arian Stolwijk (https://github.com/arian/cubic-bezier)
...
*/

(function(a){var b={},c=function(d){var e;if(e=b[d])return e.exports;e=b[d]={exports:{}};var f=e.exports;return a[d].call(f,c,e,f,window),e.exports};window.moofx=c("0")})({0:function(a,b){var e=a("1"),f=a("2"),g=typeof document!="undefined"?a("3"):{};g.requestFrame=f.request,g.cancelFrame=f.cancel,g.color=e,b.exports=g},1:function(a,b){var e={maroon:"#800000",red:"#ff0000",orange:"#ffA500",yellow:"#ffff00",olive:"#808000",purple:"#800080",fuchsia:"#ff00ff",white:"#ffffff",lime:"#00ff00",green:"#008000",navy:"#000080",blue:"#0000ff",aqua:"#00ffff",teal:"#008080",black:"#000000",silver:"#c0c0c0",gray:"#808080"},f=function(a,b,c,d){return d==null&&(d=1),a=parseInt(a,10),b=parseInt(b,10),c=parseInt(c,10),d=parseFloat(d),a<=255&&a>=0&&b<=255&&b>=0&&c<=255&&c>=0&&d<=1&&d>=0?[Math.round(a),Math.round(b),Math.round(c),d]:null},g=function(a){a.length===3&&(a+="f");if(a.length===4){var b=a.charAt(0),c=a.charAt(1),d=a.charAt(2),e=a.charAt(3);a=b+b+c+c+d+d+e+e}a.length===6&&(a+="ff");var f=[];for(var g=0,h=a.length;g<=h;g+=2)f.push(parseInt(a.substr(g,2),16)/(g===6?255:1));return f},h=function(a,b,c){return c<0&&(c+=1),c>1&&(c-=1),c<1/6?a+(b-a)*6*c:c<.5?b:c<2/3?a+(b-a)*(2/3-c)*6:a},i=function(a,b,c,d){var e,f,g;d==null&&(d=1),a/=360,b/=100,c/=100,d/=1;if(a>1||a<0||b>1||b<0||c>1||c<0||d>1||d<0)return null;if(b===0)e=f=g=c;else{var i=c<.5?c*(1+b):c+b-c*b,j=2*c-i;e=h(j,i,a+1/3),g=h(j,i,a),f=h(j,i,a-1/3)}return[e*255,g*255,f*255,d]};b.exports=function(a,b){var c;if(typeof a!="string")return null;a=e[a=a.replace(/\s+/g,"")]||a;if(a.match(/^#[a-f0-9]{3,8}/))a=g(a.replace("#",""));else{if(!(c=a.match(/([\d.])+/g)))return null;if(a.match(/^rgb/))a=c;else{if(!a.match(/^hsl/))return null;a=i.apply(null,c)}}return!a||!(a=f.apply(null,a))?null:b?a:(a[3]===1&&a.splice(3,1),"rgb"+(a.length>3?"a":"")+"("+a+")")}},2:function(a,b,c,d){var e=[],f=!1,g=function(a){a==null&&(a=+(new Date)),f=!1;var b=e.length;while(b)e.splice(--b,1)[0](a)},h=d.requestAnimationFrame||d.webkitRequestAnimationFrame||d.mozRequestAnimationFrame||d.oRequestAnimationFrame||d.msRequestAnimationFrame||function(a){return setTimeout(a,1e3/60)};c.request=function(a){return e.push(a),f||(f=!0,h(g)),this},c.cancel=function(a){var b,c,d;for(b=0,c=e.length;b<c;b++){d=e[b];d===a&&e.splice(b,1)}return this}},3:function(a,b,c,d){var u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,ba,e=a("4"),f=a("1"),g=a("2"),h=function(a,b){var c=function(){this.constructor=a};return c.prototype=a.prototype,b.prototype=new c,b},i=g.cancel,j=g.request,k=String,l=parseFloat,m=function(a){return a.replace(/-\D/g,function(a){return a.charAt(1).toUpperCase()})},n=function(a){return a.replace(/[A-Z]/g,function(a){return"-"+a.charAt(0).toLowerCase()})},o=function(a){return k(a).replace(/\s+/g," ").replace(/^\s+|\s+$/g,"")},p=Array.map||Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){var d=[];for(var e=0,f=a.length;e<f;e++)d.push(b.call(c,a[e],e,a));return d},q=Array.prototype.forEach?function(a,b,c){return Array.prototype.forEach.call(a,b,c),a}:function(a,b,c){for(var d=0,e=a.length;d<e;d++)b.call(c,a[d],d,a);return a},r=function(a){var b=a.length;return b===1?a.push(a[0],a[0],a[0]):b===2?a.push(a[0],a[1]):b===3&&a.push(a[1]),a},s=d.getComputedStyle?function(a){var b=getComputedStyle(a);return function(a){return b?b.getPropertyValue(n(a)):""}}:function(a){var b=a.currentStyle;return function(a){return b?b[m(a)]:""}},t=function(){};t.prototype.extract=function(){return[this]},t.prototype.toString=function(){return k(this.value)};u=h(t,function(a){a==null&&(a=""),this.value=k(a)}),v=h(t,function(a){a==null&&(a="");var b=l(a);this.value=isFinite(b)?b:a}),w=function(){};w.prototype.extract=function(){return this.parsed},w.prototype.toString=function(a,b){return o(p(this.parsed,function(c){return c.toString(a,b)},this).join(" "))};x=h(t,function(a){var b;a==null&&(a=""),a==="auto"?this.value="auto":(b=o(k(a)).match(/^([-\d.]+)(%|cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vm)?$/))?(this.value=l(b[1]),this.unit=this.value===0||!b[2]?"px":b[2]):this.value=""});x.prototype.toString=function(a,b){return this.value==="auto"?this.value:this.value===""?a?"0px":"":b&&this.unit!=="px"?""+N(b,this.unit)*this.value+"px":this.value+this.unit};y=h(t,function(a){a==="transparent"&&(a="#00000000"),this.value=a?f(a,!0):""});y.prototype.toString=function(a){return this.value?!!a||this.value!=="transparent"&&this.value[3]!==0?a||this.value[3]!==1?"rgba("+this.value+")":"rgb("+this.value[0]+","+this.value[1]+","+this.value[2]+")":"transparent":a?"rgba(0,0,0,1)":""};z=h(w,function(a){a==null&&(a=""),this.parsed=p(r(o(a).split(" ")),function(a){return new x(a)})}),A=h(t,function(a){a==null&&(a="");var b=(a=o(a)).match(/none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|inherit/);this.value=b?a:""});A.prototype.toString=function(a){return a&&!this.value?"none":this.value};B=h(w,function(a){a==null?a="":a==="none"&&(a="0 none #000");var b=a=o(a).match(/((?:[\d.]+)(?:[\w%]+)?)\s(\w+)\s(rgb(?:a)?\([\d,\s]+\)|hsl(?:a)?\([\d,\s]+\)|#[a-f0-9]+|\w+)/)||[],c=b[1],d=b[2],e=b[3];this.parsed=[new x(c!=null?c:""),new A(d!=null?d:""),new y(e!=null?e:"")]}),C=h(w,function(a){a==null&&(a=""),a=r(a.match(/rgb(a)?\([\d,\s]+\)|hsl(a)?\([\d,\s]+\)|#[a-f0-9]+|\w+/g)||[""]),this.parsed=p(a,function(a){return new y(a)})}),D=h(t,function(a){this.value=a==="auto"?a:l(a)}),E={},F={},G={},H={},I=document.documentElement,J=function(a){return F[a]||(F[a]=function(){var b=E[a]||u;return function(){return(new b(s(this)(a))).toString(!0,this)}}())},K=function(a){return G[a]||(G[a]=function(){var b=E[a]||u;return function(c){return this.style[a]=(new b(c)).toString()}}())},L=document.createElement("div"),M="border:none;margin:none;padding:none;visibility:hidden;position:absolute;height:0;",N=function(a,b){var c=a.parentNode,d=1;return c&&(L.style.cssText=M+("width:100"+b+";"),c.appendChild(L),d=L.offsetWidth/100,c.removeChild(L)),d},O=["Top","Right","Bottom","Left"],P=["TopLeft","TopRight","BottomRight","BottomLeft"];E.color=E.backgroundColor=y,E.width=E.height=E.fontSize=E.backgroundSize=x,q(O,function(a){var b="border"+a;q(["margin"+a,"padding"+a,b+"Width",a.toLowerCase()],function(a){E[a]=x}),E[b+"Color"]=y,E[b+"Style"]=A,E[b]=B,F[b]=function(){return[J(b+"Width").call(this),J(b+"Style").call(this),J(b+"Color").call(this)].join(" ")}}),q(P,function(a){E["border"+a+"Radius"]=x}),E.zIndex=D,q(["margin","padding"],function(a){return E[a]=z,F[a]=function(){return p(O,function(b){return J(a+b).call(this)},this).join(" ")}}),E.borderRadius=z,F.borderRadius=function(){return p(O,function(a){return J("border"+a+"Radius").call(this)}).join(" ")},E.borderWidth=z,E.borderColor=C,q(["Width","Style","Color"],function(a){F["border"+a]=function(){return p(O,function(b){return J("border"+b+a).call(this)},this).join(" ")}}),E.border=B,F.border=function(){var a,b,c;for(b=0;b<O.length;b++){c=J("border"+O[b]).call(this);if(a&&c!==a)return null;a=c}return c};Q=I.style.MsFilter!=null?"MsFilter":I.style.filter!=null?"filter":null;E.opacity=v,Q&&I.style.opacity==null&&(matchOp=/alpha\(opacity=([\d.]+)\)/i,G.opacity=function(a){var b;a=(a=l(a)===1)?"":"alpha(opacity="+a*100+")";b=s(this)(Q);return this.style[Q]=matchOp.test(b)?b.replace(matchOp,a):b+a},F.opacity=function(){var a;return k((a=s(this)(Q).match(matchOp))?a[1]/100:1)});q(["WebkitTransition","MozTransition","transition"],function(a){I.style[a]!=null&&(R=a)});S=R==="MozTransition"?"transitionend":R==="WebkitTransition"?"webkitTransitionEnd":"transitionEnd";q(["MozTransform","WebkitTransform","OTransform","msTransform","transform"],function(a){I.style[a]!=null&&(T=a)}),E.transform=R?u:h(t,function(){return"none"}),T?(H.transform=T,G.transform=function(a){return this.style[T]=a},F.transform=function(){return s(this)(T)}):(G.transform=function(){},F.transform=function(){return"none"});U={"default":"cubic-bezier(0.25, 0.1, 0.25, 1.0)",linear:"cubic-bezier(0, 0, 1, 1)","ease-in":"cubic-bezier(0.42, 0, 1.0, 1.0)","ease-out":"cubic-bezier(0, 0, 0.58, 1.0)","ease-in-out":"cubic-bezier(0.42, 0, 0.58, 1.0)"};U.ease=U["default"];V=function(a,b){this.node=a,this.property=b,this.setter=K(b),this.getter=J(b)};V.prototype.setOptions=function(a){var b;a==null&&(a={});b=a.duration;typeof b=="number"&&(b+="ms");if(!(this.duration=this.parseDuration(b||"500ms")))throw new Error(this.duration+" is not a valid duration");if(!(this.equation=this.parseEquation(a.equation||"default")))throw new Error(this.equation+" is not a valid equation");return this.callback=a.callback||function(){},this},V.prototype.parseDuration=function(a){var b,c;if(a=k(a).match(/([\d.]+)(s|ms)/)){b=l(a[1]),c=a[2];if(c==="s")return b*1e3;if(c==="ms")return b}return null},V.prototype.parseEquation=function(a){var b;a=U[a]||a;b=a.replace(/\s+/g,"").match(/^cubic-bezier\(([\d.]+),([\d.]+),([\d.]+),([\d.]+)\)$/);return b?p(b.slice(1),l):null};W=h(V,function(a,b){V.prototype.constructor.call(this,a,b);var c=this;this.bstep=function(a){return c.step(a)}}),X=function(a){var b=[],c=a.replace(/[-\d.]+/g,function(a){return b.push(l(a)),"@"});return[b,c]},Y=function(a,b,c){return(b-a)*c+a};W.prototype.start=function(a,b){if(a!=b&&this.duration!==0){this.time=0,a=X(a),b=X(b);if(a[0].length!==b[0].length)throw new Error("length mismatch");this.from=a[0],this.to=b[0],this.template=b[1],j(this.bstep)}else this.duration==0&&this.setter.call(this.node,b),j(this.callback);return this},W.prototype.stop=function(){return i(this.bstep),this},W.prototype.step=function(a){var b,c,d,e,f,g,h,i,k;this.time||(this.time=a);b=(a-this.time)/this.duration;b>1&&(b=1);c=this.equation(b),d=this.template,e=this.from,f=this.to;for(g=0,h=e.length;g<h;g++){i=e[g],k=f[g];d=d.replace("@",k!==i?Y(i,k,c):k)}this.setter.call(this.node,d),b!==1?j(this.bstep):this.callback(k)},W.prototype.parseEquation=function(a){var a=V.prototype.parseEquation.call(this,a);return a==[0,0,1,1]?function(a){return a}:e(a[0],a[1],a[2],a[3],1e3/60/this.duration/4)};Z=h(V,function(a,b){V.prototype.constructor.call(this,a,b);var c=this;this.hproperty=n(H[this.property]||this.property),this.bdefer=function(a){return c.defer(a)},this.bcomplete=function(a){return c.complete(a)}});Z.prototype.start=function(a,b){return a!=b&&this.duration!=0?(this.to=b,j(this.bdefer)):(this.duration==0&&this.setter.call(this.node,b),j(this.callback)),this},Z.prototype.stop=function(a){return this.running?(this.running=!1,a&&this.setter.call(this.node,this.getter.call(this.node)),this.clean()):i(this.bdefer),this},Z.prototype.defer=function(){return this.running=!0,this.modCSS(!0),this.node.addEventListener(S,this.bcomplete,!1),this.setter.call(this.node,this.to),null},Z.prototype.clean=function(){return this.modCSS(),this.node.removeEventListener(S,this.bcomplete),null},Z.prototype.complete=function(a){return a&&a.propertyName===this.hproperty&&(this.running=!1,this.clean(),j(this.callback)),null};$=function(a,b,c,d){var e;for(var f=0,g=b.length;f<g;f++){if(b[f]!==a)continue;e=f;break}e!=null&&(b.splice(e,1),c.splice(e,1),d.splice(e,1))};Z.prototype.modCSS=function(a){var b=s(this.node),c=b(R+"Property").replace(/\s+/g,"").split(","),d=b(R+"Duration").replace(/\s+/g,"").split(","),e=b(R+"TimingFunction").replace(/\s+/g,"").match(/cubic-bezier\(([\d.,]+)\)/g);$("all",c,d,e),$(this.hproperty,c,d,e),a&&(c.push(this.hproperty),d.push(this.duration),e.push(this.equation)),this.node.style[R+"Property"]=c,this.node.style[R+"Duration"]=d,this.node.style[R+"TimingFunction"]=e},Z.prototype.parseDuration=function(a){return V.prototype.parseDuration.call(this,a)+"ms"},Z.prototype.parseEquation=function(a){return"cubic-bezier("+V.prototype.parseEquation.call(this,a)+")"};_={uid:0,animations:{},retrieve:function(a,b){var c,d,e,f=(e=a["µid"])!=null?e:a["µid"]=(this.uid++).toString(36);return c=(d=this.animations)[f]||(d[f]={}),c[b]||(c[b]=R?new Z(a,b):new W(a,b))},starts:function(a,b,c){c==null&&(c={});var d=typeof c;c=d==="function"?{callback:c}:d==="string"||d==="number"?{duration:c}:c;var e=c.callback||function(){},f=0,g=0;c.callback=function(a){++f===g&&e(a)};for(var h in b){var i=b[h],j=E[h=m(h)];if(!j)throw new Error("no parser for "+h);var k=K(h),l=J(h);for(var n=0,o=a.length;n<o;n++){g++;var p=a[n],q=this.retrieve(p,h),r=new j(l.call(p)),s=new j(i),t=r.extract(),u=s.extract(),v=!1;for(var w=0,x=t.length;w<x;w++){var y=t[w],z=u[w];if("auto"===z.value||"auto"===y.value)throw new Error("cannot animate "+h+" from or to `auto`");z.unit&&y.unit&&(v=!0,z.unit!=="px"&&(y.value=y.value/N(p,z.unit),y.unit=z.unit))}var A=r.toString(!0),B=s.toString(!0);v&&k.call(p,A),q.setOptions(c).start(A,B)}}},start:function(a,b,c,d){var e={};return e[b]=c,this.starts(a,e,d)},sets:function(a,b){for(var c in b){var d=b[c],e=K(c=m(c));for(var f=0,g=a.length;f<g;f++){var h=a[f],i,j;(i=this.animations[h["µid"]])!=null&&(j=i[c])!=null&&j.stop(!0),e.call(h,d)}}return this},set:function(a,b,c){var d={};return d[b]=c,this.sets(a,d)}},ba=function(a){return this.valueOf=function(){return a},this};moofx=function(a){return a?new ba(a.length!=null?a:a.nodeType===1?[a]:[]):null},moofx.prototype=ba.prototype,moofx.prototype.animate=function(a,b,c){return typeof a!="string"?_.starts(this.valueOf(),a,b):_.start(this.valueOf(),a,b,c),this},moofx.prototype.style=function(a,b){return typeof a!="string"?_.sets(this.valueOf(),a):_.set(this.valueOf(),a,b),this},moofx.prototype.compute=function(a){return J(m(a)).call(this.valueOf()[0])},moofx.parse=function(a,b,c,d){return E[a=m(a)]?(new E[a](b)).toString(c,d):null},b.exports=moofx},4:function(a,b){b.exports=function(a,b,c,d,e){var f=function(b){var d=1-b;return 3*d*d*b*a+3*d*b*b*c+b*b*b},g=function(a){var c=1-a;return 3*c*c*a*b+3*c*a*a*d+a*a*a},h=function(b){var d=1-b;return 3*(2*(b-1)*b+d*d)*a+3*(-b*b*b+2*d*b)*c};return function(a){var c,d,i,j,k,l,b=a;for(i=b,l=0;l<8;l++){j=f(i)-b;if(Math.abs(j)<e)return g(i);k=h(i);if(Math.abs(k)<1e-6)break;i-=j/k}c=0,d=1,i=b;if(i<c)return g(c);if(i>d)return g(d);while(c<d){j=f(i);if(Math.abs(j-b)<e)return g(i);b>j?c=i:d=i,i=(d-c)*.5+c}return g(i)}}}})