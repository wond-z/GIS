// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers"],function(b,d){b.ProfileGenerationErrorCause=void 0;(function(a){a.TooComplex="too-complex";a.InvalidGeometry="invalid-geometry";a.InvalidElevationInfo="invalid-elevation-info";a.ElevationQueryError="elevation-query-error"})(b.ProfileGenerationErrorCause||(b.ProfileGenerationErrorCause={}));let g=function(a){function e(f){var c=a.call(this,"profile could not be generated")||this;c.cause=f;c.type="ProfileGenerationError";return c}d._inheritsLoose(e,
a);return e}(d._wrapNativeSuper(Error));b.ProfileGenerationError=g;b.isProfileGenerationError=function(a){return"ProfileGenerationError"===a.type};Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});