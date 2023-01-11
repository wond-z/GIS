// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../Dictionary","../executionError","../../chunks/languageUtils","../../core/maybe"],function(w,P,g,q,X){function D(a){if(!1===q.isString(a))throw new g.ArcadeExecutionError(null,g.ExecutionErrorCodes.InvalidParameter,null);return a}function H(a,d){d=10**d;return Math.round(a*d)/d}function x(a){const d=parseFloat(a.toString().replace(Math.trunc(a).toString(),"0"))*Math.sign(a);return 0>a?{fraction:d,integer:Math.ceil(a)}:{fraction:d,integer:Math.floor(a)}}function y(a,d){switch(a){case l.north:return"SHORT"===
d?"N":"North";case l.east:return"SHORT"===d?"E":"East";case l.south:return"SHORT"===d?"S":"South";case l.west:return"SHORT"===d?"W":"West"}}function I(a,d,b){for(;a.length<b;)a=d+a;return a}function J(a,d){return a-Math.floor(a/d)*d}function K(a){switch(a){case e.truncated_degrees:case e.decimal_degrees:return 360;case e.radians:return Y;case e.gradians:return 400;case e.seconds:return 1296E3;case e.fractional_degree_minutes:return 60;case e.fractional_minute_seconds:return 60;default:throw new g.ArcadeExecutionError(null,
g.ExecutionErrorCodes.LogicError,null,{reason:"unsupported evaluations"});}}function Q(a){switch(a.toUpperCase().trim()){case "NORTH":case "NORTHAZIMUTH":case "NORTH AZIMUTH":return k.north_azimuth;case "POLAR":return k.polar;case "QUADRANT":return k.quadrant;case "SOUTH":case "SOUTHAZIMUTH":case "SOUTH AZIMUTH":return k.south_azimuth}throw new g.ArcadeExecutionError(null,g.ExecutionErrorCodes.LogicError,null,{reason:"unsupported directionType"});}function R(a){switch(a.toUpperCase().trim()){case "D":case "DD":case "DECIMALDEGREE":case "DECIMAL DEGREE":case "DEGREE":case "DECIMALDEGREES":case "DECIMAL DEGREES":case "DEGREES":return e.decimal_degrees;
case "DMS":case "DEGREESMINUTESSECONDS":case "DEGREES MINUTES SECONDS":return e.degrees_minutes_seconds;case "R":case "RAD":case "RADS":case "RADIAN":case "RADIANS":return e.radians;case "G":case "GON":case "GONS":case "GRAD":case "GRADS":case "GRADIAN":case "GRADIANS":return e.gradians}throw new g.ArcadeExecutionError(null,g.ExecutionErrorCodes.LogicError,null,{reason:"unsupported units"});}function S(a,d,b){let c=null;switch(d){case e.decimal_degrees:c=v(a,3600);break;case e.seconds:c=a;break;case e.gradians:c=
v(a,3240);break;case e.radians:c=v(a,T);break;default:throw new g.ArcadeExecutionError(null,g.ExecutionErrorCodes.LogicError,null,{reason:"unexpected evaluation"});}switch(b){case e.decimal_degrees:return E(c,3600);case e.seconds:return c;case e.gradians:return E(c,3240);case e.radians:return c/T;default:throw new g.ArcadeExecutionError(null,g.ExecutionErrorCodes.LogicError,null,{reason:"unexpected evaluation"});}}function F(a){X.assertIsSome(a);switch(a){case e.decimal_degrees:case e.truncated_degrees:case e.degrees_minutes_seconds:return e.decimal_degrees;
case e.gradians:return e.gradians;case e.fractional_degree_minutes:return e.fractional_degree_minutes;case e.radians:return e.radians;case e.seconds:case e.fractional_minute_seconds:return e.seconds}}function Z(a){switch(q.toNumber(a)){case 1:return{first:l.north,second:l.east};case 2:return{first:l.south,second:l.east};case 3:return{first:l.south,second:l.west};case 4:return{first:l.north,second:l.west}}return null}function U(a){switch(a.toUpperCase().trim()){case "N":case "NORTH":return l.north;
case "E":case "EAST":return l.east;case "S":case "SOUTH":return l.south;case "W":case "WEST":return l.west}return null}function z(a){a=parseFloat(a);if(q.isNumber(a)){if(isNaN(a))throw new g.ArcadeExecutionError(null,g.ExecutionErrorCodes.LogicError,null,{reason:"invalid conversion"});return a}throw new g.ArcadeExecutionError(null,g.ExecutionErrorCodes.LogicError,null,{reason:"invalid conversion"});}function L(a,d,b){const c=b===k.quadrant;let f=null;var h=null;let n=0;var m=0;m=0;if(c){if(2>a.length)throw new g.ArcadeExecutionError(null,
g.ExecutionErrorCodes.LogicError,null,{reason:"conversion error"});m=1;(h=Z(q.toString(a[a.length-1])))?(f=h.first,h=h.second):(n=1,f=U(q.toString(a[0])),h=U(q.toString(a[a.length-1])));if(null===f||null===h)throw new g.ArcadeExecutionError(null,g.ExecutionErrorCodes.LogicError,null,{reason:"invalid conversion"});}switch(d){case e.decimal_degrees:case e.radians:case e.gradians:if(0===a.length)break;return c?u.createFromAngleMeridianAndDirection(t.createFromAngleAndUnits(z(a[n]),F(d)),f,h):u.createFromAngleAndDirection(t.createFromAngleAndUnits(z(a[n]),
F(d)),b);case e.degrees_minutes_seconds:m=a.length-m-n;if(3===m)return a=t.createFromDegreesMinutesSeconds(z(a[n]),z(a[n+1]),z(a[n+2])),c?u.createFromAngleMeridianAndDirection(a,f,h):u.createFromAngleAndDirection(a,b);if(1===m)return a=z(a[n]),a=A.numberToDms(a),a=t.createFromDegreesMinutesSeconds(a.m_degrees,a.m_minutes,a.m_seconds),c?u.createFromAngleMeridianAndDirection(a,f,h):u.createFromAngleAndDirection(a,b)}throw new g.ArcadeExecutionError(null,g.ExecutionErrorCodes.LogicError,null,{reason:"invalid conversion"});
}function aa(a){const d=[" ","-","/","'",'"',"\\","^","\u00b0",V,"\t","\r","\n","*"];let b="";for(let c=0;c<a.length;c++){const f=a.charAt(c);b=d.includes(f)?b+"RRSPLITRRSPLITRR":b+f}return b.split("RRSPLITRRSPLITRR").filter(c=>""!==c)}function M(a,d,b){const c={padding:0,rounding:0,newpos:d};let f=!1;for(;d<a.length;){const h=a[d];if(h===b)f?c.rounding++:c.padding++,d++;else if("."===h)f=!0,d++;else break}c.newpos=d-1;return c}const G=a=>(d,b,c)=>{c=c||14;return+a(d,b).toFixed(c)},ba=(a,d)=>a+d,
ca=(a,d)=>a-d,da=(a,d)=>a*d,ea=(a,d)=>a/d,N=(a,d,b)=>G(ba)(a,d,b),v=(a,d,b)=>G(da)(a,d,b),E=(a,d,b)=>G(ea)(a,d,b),Y=2*Math.PI,T=648E3/Math.PI,V=String.fromCharCode(7501);var l;(function(a){a[a.north=0]="north";a[a.east=1]="east";a[a.south=2]="south";a[a.west=3]="west"})(l||(l={}));var e;(function(a){a[a.decimal_degrees=1]="decimal_degrees";a[a.seconds=2]="seconds";a[a.degrees_minutes_seconds=3]="degrees_minutes_seconds";a[a.radians=4]="radians";a[a.gradians=5]="gradians";a[a.truncated_degrees=6]=
"truncated_degrees";a[a.fractional_degree_minutes=7]="fractional_degree_minutes";a[a.fractional_minute_seconds=8]="fractional_minute_seconds"})(e||(e={}));var k;(function(a){a[a.north_azimuth=1]="north_azimuth";a[a.polar=2]="polar";a[a.quadrant=3]="quadrant";a[a.south_azimuth=4]="south_azimuth"})(k||(k={}));var O;(function(a){a[a.meridian=0]="meridian";a[a.direction=1]="direction"})(O||(O={}));let A=function(){function a(b,c,f){this.m_degrees=b;this.m_minutes=c;this.m_seconds=f}var d=a.prototype;
d.getField=function(b){switch(b){case e.decimal_degrees:case e.truncated_degrees:return this.m_degrees;case e.fractional_degree_minutes:return this.m_minutes;case e.seconds:case e.fractional_minute_seconds:return this.m_seconds;default:throw new g.ArcadeExecutionError(null,g.ExecutionErrorCodes.LogicError,null,{reason:"unexpected evaluation"});}};a.secondsToDMS=function(b){const c=x(b).fraction;b=x(b).integer;const f=Math.floor(b/3600);b-=3600*f;const h=Math.floor(b/60);return new a(f,h,b-60*h+c)};
a.numberToDms=function(b){var c=x(b).fraction;b=x(b).integer;const f=v(x(100*c).fraction,100);c=x(100*c).integer;return new a(b,c,f)};d.format=function(b,c){c=H(this.m_seconds,c);let f=this.m_minutes,h=this.m_degrees;if(b===e.seconds||b===e.fractional_minute_seconds)60<=c&&(c-=60,++f),60<=f&&(f=0,++h),360<=h&&(h=0);else if(b===e.fractional_degree_minutes)c=0,f=30<=this.m_seconds?this.m_minutes+1:this.m_minutes,h=this.m_degrees,60<=f&&(f=0,++h),360<=h&&(h=0);else if(b===e.decimal_degrees||b===e.truncated_degrees)b=
E(this.m_seconds,3600),c=E(this.m_minutes,60),h=Math.round(this.m_degrees+c+b),c=f=0;return new a(h,f,c)};a.dmsToSeconds=function(b,c,f){return 3600*b+60*c+f};return a}(),fa=function(){function a(d,b,c){this.meridian=d;this.angle=b;this.direction=c}a.prototype.fetchAzimuth=function(d){return d===O.meridian?this.meridian:this.direction};return a}(),u=function(){function a(b){this._angle=b}a.createFromAngleAndDirection=function(b,c){return new a(new t(a._convertDirectionFormat(b.extractAngularUnits(e.seconds),
c,k.north_azimuth)))};var d=a.prototype;d.getAngle=function(b){const c=this._angle.extractAngularUnits(e.seconds);switch(b){case k.north_azimuth:case k.south_azimuth:case k.polar:return new t(a._convertDirectionFormat(c,k.north_azimuth,b));case k.quadrant:return b=a.secondsNorthAzimuthToQuadrant(c),new t(b.angle)}};d.getMeridian=function(b){const c=this._angle.extractAngularUnits(e.seconds);switch(b){case k.north_azimuth:return l.north;case k.south_azimuth:return l.south;case k.polar:return l.east;
case k.quadrant:return a.secondsNorthAzimuthToQuadrant(c).meridian}};d.getDirection=function(b){const c=this._angle.extractAngularUnits(e.seconds);switch(b){case k.north_azimuth:return l.east;case k.south_azimuth:return l.west;case k.polar:return l.north;case k.quadrant:return a.secondsNorthAzimuthToQuadrant(c).direction}};a.secondsNorthAzimuthToQuadrant=function(b){const c=324E3>=b||972E3<=b?l.north:l.south;return new fa(c,c===l.north?Math.min(1296E3-b,b):Math.abs(b-648E3),648E3<b?l.west:l.east)};
a.createFromAngleMeridianAndDirection=function(b,c,f){return new a(new t(a.secondsQuadrantToNorthAzimuth(b.extractAngularUnits(e.seconds),c,f)))};a.secondsQuadrantToNorthAzimuth=function(b,c,f){return c===l.north?f===l.east?b:1296E3-b:f===l.east?648E3-b:648E3+b};a._convertDirectionFormat=function(b,c,f){let h=0;switch(c){case k.north_azimuth:h=b;break;case k.polar:h=324E3-b;break;case k.quadrant:throw new g.ArcadeExecutionError(null,g.ExecutionErrorCodes.LogicError,null,{reason:"unexpected evaluation"});
case k.south_azimuth:h=b+648E3}b=0;switch(f){case k.north_azimuth:b=h;break;case k.polar:b=324E3-h;break;case k.quadrant:throw new g.ArcadeExecutionError(null,g.ExecutionErrorCodes.LogicError,null,{reason:"unexpected evaluation"});case k.south_azimuth:b=h-648E3}b%=1296E3;return 0>b?1296E3+b:b};return a}(),t=function(){function a(d){this._seconds=d}a.createFromAngleAndUnits=function(d,b){return new a(S(d,b,e.seconds))};a.prototype.extractAngularUnits=function(d){return S(this._seconds,e.seconds,F(d))};
a.createFromDegreesMinutesSeconds=function(d,b,c){return new a(N(N(v(d,3600),v(b,60)),c))};return a}(),ha=function(){function a(b,c,f,h){this.view=b;this.angle=c;this.merdian=f;this.direction=h;this._formattedDms=this._dms=null}a.createFromStringAndBearing=function(b,c,f){return new a(b,c.getAngle(f),c.getMeridian(f),c.getDirection(f))};var d=a.prototype;d.fetchAngle=function(){return this.angle};d.fetchMeridian=function(){return this.merdian};d.fetchDirection=function(){return this.direction};d.fetchView=
function(){return this.view};d.fetchDms=function(){null===this._dms&&this._calculateDms();return this._dms};d.fetchFormattedDms=function(){null===this._formattedDms&&this._calculateDms();return this._formattedDms};d._calculateDms=function(){var b=null;let c=e.truncated_degrees,f=0;for(b=0;b<this.view.length;b++){const h=this.view[b];switch(h){case "m":b=M(this.view,b,h);c=c===e.truncated_degrees?e.fractional_degree_minutes:c;b=b.newpos;continue;case "s":b=M(this.view,b,h),c=e.fractional_minute_seconds,
f=f<b.rounding?b.rounding:f,b=b.newpos}}this._dms=A.secondsToDMS(this.angle.extractAngularUnits(e.seconds));this._formattedDms=A.secondsToDMS(this.angle.extractAngularUnits(e.seconds)).format(c,f)};return a}();w.convertDirection=function(a,d,b){if(!(d instanceof P))throw new g.ArcadeExecutionError(null,g.ExecutionErrorCodes.InvalidParameter,null);if(!1===d.hasField("directionType"))throw new g.ArcadeExecutionError(null,g.ExecutionErrorCodes.LogicError,null,{reason:"missing directionType"});if(!1===
d.hasField("angleType"))throw new g.ArcadeExecutionError(null,g.ExecutionErrorCodes.LogicError,null,{reason:"missing angleType"});var c=Q(D(d.field("directiontype")));d=R(D(d.field("angletype")));if(q.isNumber(a)){a=q.toNumber(a);if(c===k.quadrant)throw new g.ArcadeExecutionError(null,g.ExecutionErrorCodes.LogicError,null,{reason:"conversion error"});d===e.degrees_minutes_seconds?(a=A.numberToDms(a),c=u.createFromAngleAndDirection(t.createFromDegreesMinutesSeconds(a.m_degrees,a.m_minutes,a.m_seconds),
c)):c=u.createFromAngleAndDirection(t.createFromAngleAndUnits(a,F(d)),c)}else if(q.isString(a))c=L(aa(a),d,c);else if(q.isArray(a))c=L(a,d,c);else if(q.isImmutableArray(a))c=L(a.toArray(),d,c);else throw new g.ArcadeExecutionError(null,g.ExecutionErrorCodes.LogicError,null,{reason:"conversion error"});if(!(b instanceof P))throw new g.ArcadeExecutionError(null,g.ExecutionErrorCodes.InvalidParameter,null);if(!1===b.hasField("directionType"))throw new g.ArcadeExecutionError(null,g.ExecutionErrorCodes.LogicError,
null,{reason:"missing directionType"});if(!1===b.hasField("outputType"))throw new g.ArcadeExecutionError(null,g.ExecutionErrorCodes.LogicError,null,{reason:"missing angleType"});a=Q(D(b.field("directiontype")));d=b.hasField("angleType")?R(D(b.field("angletype"))):null;var f=D(b.field("outputType")).toUpperCase().trim();if(!a||!f)throw new g.ArcadeExecutionError(null,g.ExecutionErrorCodes.LogicError,null,{reason:"conversion error"});if(!(d||"TEXT"===f&&b.hasField("format")))throw new g.ArcadeExecutionError(null,
g.ExecutionErrorCodes.LogicError,null,{reason:"invalid unit"});switch(f){case "VALUE":if(a===k.quadrant||d===e.degrees_minutes_seconds)return b=c.getAngle(a),a===k.quadrant&&d===e.degrees_minutes_seconds?(b=A.secondsToDMS(b.extractAngularUnits(e.seconds)),c=[y(c.getMeridian(a),"SHORT"),b.m_degrees,b.m_minutes,b.m_seconds,y(c.getDirection(a),"SHORT")]):d===e.degrees_minutes_seconds?(c=A.secondsToDMS(b.extractAngularUnits(e.seconds)),c=[c.m_degrees,c.m_minutes,c.m_seconds]):c=a===k.quadrant?[y(c.getMeridian(a),
"SHORT"),b.extractAngularUnits(d),y(c.getDirection(a),"SHORT")]:[b.extractAngularUnits(d)],c;if((b=F(d))&&d!==e.degrees_minutes_seconds)c=c.getAngle(a).extractAngularUnits(b);else throw new g.ArcadeExecutionError(null,g.ExecutionErrorCodes.LogicError,null,{reason:"conversion error"});return c;case "TEXT":f="";b.hasField("format")&&(f=q.toString(b.field("format")));if(null===f||""===f){b="";switch(d){case e.decimal_degrees:b=a===k.quadrant?"DD.DD\u00b0":"DDD.DD\u00b0";break;case e.degrees_minutes_seconds:b=
a===k.quadrant?"dd\u00b0 mm' ss\"":"ddd\u00b0 mm' ss.ss\"";break;case e.radians:b="R.RR";break;case e.gradians:b="GGG.GG"+V;break;default:throw new g.ArcadeExecutionError(null,g.ExecutionErrorCodes.LogicError,null,{reason:"conversion error"});}a===k.quadrant&&(b="p "+b+" b");f=b}b=f;var h="",n=null,m=null;d=ha.createFromStringAndBearing(b,c,a);f={D:e.decimal_degrees,d:e.truncated_degrees,m:e.fractional_degree_minutes,s:e.fractional_minute_seconds,R:e.radians,G:e.gradians};for(m=0;m<b.length;m++){var p=
b[m];switch(p){case "[":n=b;p={escaped:"",newpos:m};for(m++;m<n.length;){var B=n[m];m++;if("]"===B)break;p.escaped+=B}p.newpos=m-1;n=p;h+=n.escaped;m=n.newpos;continue;case "D":case "d":case "m":case "s":case "R":case "G":n=M(b,m,p);m=c.getAngle(a);a:{p=f[p];B=n.padding;var r=n.rounding,W=d;let C=null;switch(p){case e.decimal_degrees:case e.radians:case e.gradians:C=J(H(m.extractAngularUnits(p),r),K(p));m=I(C.toFixed(r),"0",B+r+(0<r?1:0));break a;case e.truncated_degrees:case e.fractional_degree_minutes:C=
J(W.fetchFormattedDms().getField(p),K(p));m=I(C.toFixed(r),"0",B+r+(0<r?1:0));break a;case e.fractional_minute_seconds:C=J(H(W.fetchDms().getField(p),r),K(p));m=I(C.toFixed(r),"0",B+r+(0<r?1:0));break a;default:throw new g.ArcadeExecutionError(null,g.ExecutionErrorCodes.LogicError,null,{reason:"unexpected evaluation"});}}h+=m;m=n.newpos;continue;case "P":case "p":h+=y(d.fetchMeridian(),"p"===p?"SHORT":"LONG");continue;case "B":case "b":h+=y(d.fetchDirection(),"b"===p?"SHORT":"LONG");continue;default:h+=
p}}return h;default:throw new g.ArcadeExecutionError(null,g.ExecutionErrorCodes.InvalidParameter,null);}};w.preciseAdd=N;w.preciseDivide=E;w.preciseMinus=(a,d,b)=>G(ca)(a,d,b);w.preciseMultiply=v;Object.defineProperties(w,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});