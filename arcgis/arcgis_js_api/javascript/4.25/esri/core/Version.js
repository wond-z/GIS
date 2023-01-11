// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","./Error"],function(k,h){let l=function(){function d(a,b,c=""){this.major=a;this.minor=b;this._context=c}var e=d.prototype;e.lessThan=function(a,b){return this.major<a||a===this.major&&this.minor<b};e.since=function(a,b){return!this.lessThan(a,b)};e.validate=function(a){if(this.major!==a.major)throw new h((this._context&&this._context+":")+"unsupported-version",`Required major ${this._context&&this._context+" "}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,
{version:a});};e.clone=function(){return new d(this.major,this.minor,this._context)};d.parse=function(a,b=""){const [c,f]=a.split(".");var g=/^\s*\d+\s*$/;if(!c||!c.match||!c.match(g))throw new h((b&&b+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:a});if(!f||!f.match||!f.match(g))throw new h((b&&b+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:a});a=parseInt(c,10);g=parseInt(f,10);return new d(a,g,b)};return d}();
k.Version=l;Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});