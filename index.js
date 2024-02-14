// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("path")):"function"==typeof define&&define.amd?define(["path"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).dnanstdevpn=e(r.require$$0)}(this,(function(r){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function a(r,e,t){var n=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(a):i(a)+r,n&&(r="-"+r)),r}var o=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function s(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=a(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=a(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===c.call(r.specifier)?c.call(t):o.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function u(r){return"string"==typeof r}var l=Math.abs,f=String.prototype.toLowerCase,p=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,b=/^(\d+)$/,y=/^(\d+)e/,w=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function E(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,v,"e"),t=g.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,h,"e-0$1"),r.alternate&&(t=g.call(t,b,"$1."),t=g.call(t,y,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===p.call(r.specifier)?p.call(t):f.call(t)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function x(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var k=String.fromCharCode,S=isNaN,_=Array.isArray;function T(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function V(r){var e,t,n,i,o,c,l,f,p;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,f=0;f<r.length;f++)if(u(n=r[f]))c+=n;else{if(e=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,S(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=s(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!S(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(o)?String(n.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=E(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=a(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=x(n.arg,n.width,n.padRight)),c+=n.arg||"",l+=1}return c}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function A(r){var e,t,n,i;for(t=[],i=0,n=$.exec(r);n;)(e=r.slice(i,$.lastIndex-n[0].length)).length&&t.push(e),t.push(O(n)),i=$.lastIndex,n=$.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){return"string"==typeof r}function N(r){var e,t;if(!F(r))throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[A(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return V.apply(null,e)}var I,C=Object.prototype,R=C.toString,P=C.__defineGetter__,Z=C.__defineSetter__,L=C.__lookupGetter__,W=C.__lookupSetter__;I=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(r,e)||W.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(r,e,t.get),o&&Z&&Z.call(r,e,t.set),r};var q=I;function B(r,e,t){q(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var G=Object,M=/./;function U(r){return"boolean"==typeof r}function X(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var z=X();var D=X();var J=Object.prototype.toString;var H=Object.prototype.hasOwnProperty;var K,Q="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof Q?Q.toStringTag:"";K=D&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return J.call(r);t=r[Y],a=Y,e=null!=(i=r)&&H.call(i,a);try{r[Y]=void 0}catch(e){return J.call(r)}return n=J.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return J.call(r)};var rr=K,er=Boolean,tr=Boolean.prototype.toString;var nr=z&&"symbol"==typeof Symbol.toStringTag;function ir(r){return"object"==typeof r&&(r instanceof er||(nr?function(r){try{return tr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===rr(r)))}function ar(r){return U(r)||ir(r)}function or(r){return"number"==typeof r}function cr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function sr(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+cr(i):cr(i)+r,n&&(r="-"+r)),r}B(ar,"isPrimitive",U),B(ar,"isObject",ir);var ur=String.prototype.toLowerCase,lr=String.prototype.toUpperCase;function fr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!or(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=sr(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=sr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===lr.call(r.specifier)?lr.call(t):ur.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function pr(r){return"string"==typeof r}var gr=Math.abs,dr=String.prototype.toLowerCase,hr=String.prototype.toUpperCase,br=String.prototype.replace,yr=/e\+(\d)$/,wr=/e-(\d)$/,vr=/^(\d+)$/,mr=/^(\d+)e/,Er=/\.0$/,jr=/\.0*e/,xr=/(\..*[^0])0*e/;function kr(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!or(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":gr(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=br.call(t,xr,"$1e"),t=br.call(t,jr,"e"),t=br.call(t,Er,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=br.call(t,yr,"e+0$1"),t=br.call(t,wr,"e-0$1"),r.alternate&&(t=br.call(t,vr,"$1."),t=br.call(t,mr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===hr.call(r.specifier)?hr.call(t):dr.call(t)}function Sr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _r(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Sr(n):Sr(n)+r}var Tr=String.fromCharCode,Vr=isNaN,$r=Array.isArray;function Or(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Ar(r){var e,t,n,i,a,o,c,s,u;if(!$r(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(pr(n=r[s]))o+=n;else{if(e=void 0!==n.precision,!(n=Or(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Vr(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Vr(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=fr(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Vr(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Vr(a)?String(n.arg):Tr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=kr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=sr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_r(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var Fr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Nr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Ir(r){var e,t,n,i;for(t=[],i=0,n=Fr.exec(r);n;)(e=r.slice(i,Fr.lastIndex-n[0].length)).length&&t.push(e),t.push(Nr(n)),i=Fr.lastIndex,n=Fr.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Cr(r){return"string"==typeof r}function Rr(r){var e,t;if(!Cr(r))throw new TypeError(Rr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Ir(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Ar.apply(null,e)}function Pr(){return new Function("return this;")()}var Zr="object"==typeof self?self:null,Lr="object"==typeof window?window:null,Wr="object"==typeof global?global:null,qr="object"==typeof globalThis?globalThis:null;var Br=function(r){if(arguments.length){if(!U(r))throw new TypeError(Rr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Pr()}if(qr)return qr;if(Zr)return Zr;if(Lr)return Lr;if(Wr)return Wr;throw new Error("unexpected error. Unable to resolve global object.")}(),Gr=Br.document&&Br.document.childNodes,Mr=Int8Array;function Ur(){return/^\s*function\s*([^(]*)/i}var Xr,zr=/^\s*function\s*([^(]*)/i;B(Ur,"REGEXP",zr),Xr=Array.isArray?Array.isArray:function(r){return"[object Array]"===rr(r)};var Dr=Xr;function Jr(r){return null!==r&&"object"==typeof r}var Hr=function(r){if("function"!=typeof r)throw new TypeError(Rr("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Dr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Jr);function Kr(r){var e,t,n,i;if(("Object"===(t=rr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=zr.exec(n.toString()))return e[1]}return Jr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}B(Jr,"isObjectLikeArray",Hr);var Qr="function"==typeof M||"object"==typeof Mr||"function"==typeof Gr?function(r){return Kr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Kr(r).toLowerCase():e};var Yr,re,ee=Object.getPrototypeOf;re=Object.getPrototypeOf,Yr="function"===Qr(re)?ee:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===rr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var te=Yr;function ne(r){return null==r?null:(r=G(r),te(r))}function ie(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===rr(r))return!0;r=ne(r)}return!1}var ae=Math.floor;function oe(r,e,t,n,i){var a,o,c,s,u,l,f,p,g,d,h,b,y,w;if(a=i,r<8){for(h=0,b=0,w=0;w<r;w++)(y=t[a])==y&&(h+=y,b+=1),a+=n;return e[0]+=h,e[1]+=b,e}if(r<=128){for(o=0,c=0,s=0,u=0,l=0,f=0,p=0,g=0,b=0,d=r%8,w=0;w<r-d;w+=8)(y=t[a])==y&&(o+=y,b+=1),(y=t[a+=n])==y&&(c+=y,b+=1),(y=t[a+=n])==y&&(s+=y,b+=1),(y=t[a+=n])==y&&(u+=y,b+=1),(y=t[a+=n])==y&&(l+=y,b+=1),(y=t[a+=n])==y&&(f+=y,b+=1),(y=t[a+=n])==y&&(p+=y,b+=1),(y=t[a+=n])==y&&(g+=y,b+=1),a+=n;for(h=o+c+(s+u)+(l+f+(p+g));w<r;w++)(y=t[a])==y&&(h+=y,b+=1),a+=n;return e[0]+=h,e[1]+=b,e}return b=ae(r/2),oe(b-=b%8,e,t,n,a)+oe(r-b,e,t,n,a+b*n)}var ce=[0,0];function se(r,e,t,n){var i,a,o,c,s,u,l,f,p;if(r<=0)return NaN;if(1===r||0===n)return(l=t[0])==l&&r-e>0?0:NaN;if(a=n<0?(1-r)*n:0,ce[0]=0,ce[1]=0,oe(r,ce,t,n,a),(c=(f=ce[1])-e)<=0)return NaN;for(i=ce[0]/f,o=0,s=0,p=0;p<r;p++)(l=t[a])==l&&(o+=(u=l-i)*u,s+=u),a+=n;return o/c-s/f*(s/c)}var ue=[0,0];B(se,"ndarray",(function(r,e,t,n,i){var a,o,c,s,u,l,f,p,g;if(r<=0)return NaN;if(1===r||0===n)return(f=t[i])==f&&r-e>0?0:NaN;if(ue[0]=0,ue[1]=0,oe(r,ue,t,n,i),(s=(p=ue[1])-e)<=0)return NaN;for(a=ue[0]/p,o=i,c=0,u=0,g=0;g<r;g++)(f=t[o])==f&&(c+=(l=f-a)*l,u+=l),o+=n;return c/s-u/p*(u/s)}));var le,fe=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return ie(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,r.join)(__dirname,"./native.js")),pe=le=ie(fe)?se:fe;const{ndarray:ge}=le;var de=Math.sqrt;function he(r,e,t,n){return de(pe(r,e,t,n))}return B(he,"ndarray",(function(r,e,t,n,i){return de(ge(r,e,t,n,i))})),he}));
//# sourceMappingURL=index.js.map
