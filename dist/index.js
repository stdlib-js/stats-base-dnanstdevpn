"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=i(function(w,u){
var f=require('@stdlib/stats-base-dnanvariancepn/dist').ndarray,x=require('@stdlib/math-base-special-sqrt/dist');function j(e,r,n,a,y){return x(f(e,r,n,a,y))}u.exports=j
});var d=i(function(z,v){
var m=require('@stdlib/strided-base-stride2offset/dist'),l=t();function R(e,r,n,a){return l(e,r,n,a,m(e,a))}v.exports=R
});var p=i(function(A,o){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=d(),E=t();_(q,"ndarray",E);o.exports=q
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=p(),s,c=b(O(__dirname,"./native.js"));g(c)?s=h:s=c;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
