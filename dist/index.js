"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=i(function(w,s){
var x=require('@stdlib/stats-base-dnanvariancepn/dist'),f=require('@stdlib/math-base-special-sqrt/dist');function j(e,r,n,a){return f(x(e,r,n,a))}s.exports=j
});var d=i(function(z,v){
var m=require('@stdlib/stats-base-dnanvariancepn/dist').ndarray,l=require('@stdlib/math-base-special-sqrt/dist');function R(e,r,n,a,y){return l(m(e,r,n,a,y))}v.exports=R
});var o=i(function(A,p){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=u(),E=d();_(q,"ndarray",E);p.exports=q
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=o(),t,c=b(O(__dirname,"./native.js"));g(c)?t=h:t=c;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
