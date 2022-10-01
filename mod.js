// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,s,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),s="get"in n,p="set"in n,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(r,t,n.get),p&&i&&i.call(r,t,n.set),r};var c=t;function l(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function s(r){var t=function(r){return"/"===r.charAt(0)}(r),n="/"===y(r,-1);return(r=function(r,t){for(var n=0,e=r.length-1;e>=0;e--){var o=r[e];"."===o?r.splice(e,1):".."===o?(r.splice(e,1),n++):n&&(r.splice(e,1),n--)}if(t)for(;n--;n)r.unshift("..");return r}(p(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&n&&(r+="/"),(t?"/":"")+r}function p(r,t){if(r.filter)return r.filter(t);for(var n=[],e=0;e<r.length;e++)t(r[e],e,r)&&n.push(r[e]);return n}var y="b"==="ab".substr(-1)?function(r,t,n){return r.substr(t,n)}:function(r,t,n){return t<0&&(t=r.length+t),r.substr(t,n)},b=/./;function v(r){return"boolean"==typeof r}var d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function j(){return d&&"symbol"==typeof Symbol.toStringTag}var _=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;var w,h="function"==typeof Symbol?Symbol.toStringTag:"";w=j()?function(r){var t,n,e,o,u;if(null==r)return _.call(r);n=r[h],u=h,t=null!=(o=r)&&g.call(o,u);try{r[h]=void 0}catch(t){return _.call(r)}return e=_.call(r),t?r[h]=n:delete r[h],e}:function(r){return _.call(r)};var m=w,O=Boolean.prototype.toString;var E=j();function S(r){return"object"==typeof r&&(r instanceof Boolean||(E?function(r){try{return O.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===m(r)))}function N(r){return v(r)||S(r)}function A(){return new Function("return this;")()}l(N,"isPrimitive",v),l(N,"isObject",S);var P="object"==typeof self?self:null,B="object"==typeof window?window:null,T="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},k="object"==typeof T?T:null;var x=function(r){if(arguments.length){if(!v(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return A()}if(P)return P;if(B)return B;if(k)return k;throw new Error("unexpected error. Unable to resolve global object.")}(),M=x.document&&x.document.childNodes,V=Int8Array;function C(){return/^\s*function\s*([^(]*)/i}var F,G=/^\s*function\s*([^(]*)/i;l(C,"REGEXP",G),F=Array.isArray?Array.isArray:function(r){return"[object Array]"===m(r)};var L=F;function q(r){return null!==r&&"object"==typeof r}var I=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!L(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(q);function J(r){var t,n,e,o;if(("Object"===(n=m(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=G.exec(e.toString()))return t[1]}return q(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(q,"isObjectLikeArray",I);var R="function"==typeof b||"object"==typeof V||"function"==typeof M?function(r){return J(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?J(r).toLowerCase():t};var U,X,z=Object.getPrototypeOf;X=Object.getPrototypeOf,U="function"===R(X)?z:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===m(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var D=U;function H(r){return null==r?null:(r=Object(r),D(r))}var K=Math.floor;function Q(r,t,n,e,o){var u,i,f,a,c,l,s,p,y,b,v,d,j,_;if(u=o,r<8){for(v=0,d=0,_=0;_<r;_++)(j=n[u])==j&&(v+=j,d+=1),u+=e;return t[0]+=v,t[1]+=d,t}if(r<=128){for(i=0,f=0,a=0,c=0,l=0,s=0,p=0,y=0,d=0,b=r%8,_=0;_<r-b;_+=8)(j=n[u])==j&&(i+=j,d+=1),(j=n[u+=e])==j&&(f+=j,d+=1),(j=n[u+=e])==j&&(a+=j,d+=1),(j=n[u+=e])==j&&(c+=j,d+=1),(j=n[u+=e])==j&&(l+=j,d+=1),(j=n[u+=e])==j&&(s+=j,d+=1),(j=n[u+=e])==j&&(p+=j,d+=1),(j=n[u+=e])==j&&(y+=j,d+=1),u+=e;for(v=i+f+(a+c)+(l+s+(p+y));_<r;_++)(j=n[u])==j&&(v+=j,d+=1),u+=e;return t[0]+=v,t[1]+=d,t}return d=K(r/2),Q(d-=d%8,t,n,e,u)+Q(r-d,t,n,e,u+d*e)}var W=[0,0];function Y(r,t,n,e){var o,u,i,f,a,c,l,s,p;if(r<=0)return NaN;if(1===r||0===e)return(l=n[0])==l&&r-t>0?0:NaN;if(u=e<0?(1-r)*e:0,W[0]=0,W[1]=0,Q(r,W,n,e,u),(f=(s=W[1])-t)<=0)return NaN;for(o=W[0]/s,i=0,a=0,p=0;p<r;p++)(l=n[u])==l&&(i+=(c=l-o)*c,a+=c),u+=e;return i/f-a/s*(a/f)}var Z,$=[0,0];l(Y,"ndarray",(function(r,t,n,e,o){var u,i,f,a,c,l,s,p,y;if(r<=0)return NaN;if(1===r||0===e)return(s=n[o])==s&&r-t>0?0:NaN;if($[0]=0,$[1]=0,Q(r,$,n,e,o),(a=(p=$[1])-t)<=0)return NaN;for(u=$[0]/p,i=o,f=0,c=0,y=0;y<r;y++)(s=n[i])==s&&(f+=(l=s-u)*l,c+=l),i+=e;return f/a-c/p*(c/a)}));var rr=function(r){try{return require(r)}catch(r){return function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===m(r))return!0;r=H(r)}return!1}(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}(function(){var r=Array.prototype.slice.call(arguments,0);return s(p(r,(function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}("/home/runner/work/stats-base-dnanstdevpn/stats-base-dnanstdevpn/node_modules/@stdlib/stats-base-dnanvariancepn/lib","./native.js")),tr=Z=rr instanceof Error?Y:rr;const{ndarray:nr}=Z;var er=Math.sqrt;function or(r,t,n,e){return er(tr(r,t,n,e))}function ur(r,t,n,e,o){return er(nr(r,t,n,e,o))}l(or,"ndarray",ur);export{or as default,ur as ndarray};
//# sourceMappingURL=mod.js.map
