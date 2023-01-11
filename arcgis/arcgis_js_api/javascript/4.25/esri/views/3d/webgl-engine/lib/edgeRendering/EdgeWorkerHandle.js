// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/typedArrayUtil ../../../../../core/workers/WorkerHandle ../../../support/buffer/workerHelper ./edgeProcessing".split(" "),function(k,e,p,l,f,q){l=function(c){function m(b){return c.call(this,"EdgeProcessingWorker","extract",{extract:a=>[a.dataBuffer],extractComponentsEdgeLocations:a=>[a.dataBuffer],extractEdgeLocations:a=>[a.dataBuffer]},b)||this}e._inheritsLoose(m,c);var g=m.prototype;g.process=function(){var b=e._asyncToGenerator(function*(a,
d,n){if(n)return q.extract(a);a=yield this.invoke(new h(a),d);return this._unpackOutput(a)});return function(a,d,n){return b.apply(this,arguments)}}();g.extractEdgeLocations=function(){var b=e._asyncToGenerator(function*(a,d){a=yield this.invokeMethod("extractEdgeLocations",new h(a),d);return f.unpackInterleavedBuffer(a)});return function(a,d){return b.apply(this,arguments)}}();g.extractComponentsEdgeLocations=function(){var b=e._asyncToGenerator(function*(a,d){a=yield this.invokeMethod("extractComponentsEdgeLocations",
new h(a),d);return f.unpackInterleavedBuffer(a)});return function(a,d){return b.apply(this,arguments)}}();g._unpackOutput=function(b){return{regular:{instancesData:f.unpackInterleavedBuffer(b.regular.instancesData),lodInfo:{lengths:new Float32Array(b.regular.lodInfo.lengths)}},silhouette:{instancesData:f.unpackInterleavedBuffer(b.silhouette.instancesData),lodInfo:{lengths:new Float32Array(b.silhouette.lodInfo.lengths)}},averageEdgeLength:b.averageEdgeLength}};return m}(l.WorkerHandle);let h=function(c){this.dataBuffer=
c.data.buffer;this.writerSettings=c.writerSettings;this.skipDeduplicate=c.skipDeduplicate;this.indices=Array.isArray(c.indices)?c.indices:c.indices.buffer;this.indicesType=Array.isArray(c.indices)?"Array":p.isUint32Array(c.indices)?"Uint32Array":"Uint16Array";this.indicesLength=c.indicesLength};k.EdgeWorkerHandle=l;k.PackedInput=h;Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});