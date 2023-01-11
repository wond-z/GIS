// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/mathUtils ../../../../core/maybe ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/support/ray ./common ./ConstraintTypes ./InteractionType ../../support/intersectionUtils".split(" "),function(n,v,w,r,h,x,g,y,k,z){function p(a,c,e=g.defaultConstraintOptions){var b=a.state.constraints.altitude;b=a.state.isGlobal&&b?e.interactionType===k.InteractionType.TUMBLE&&g.hasConstraintType(e.selection,y.ConstraintTypes.TILT)?!1:!0:!1;if(!b)return 0;var d=
a.state.constraints.altitude;b=A;b.min=d.min;b.max=d.max;d=e.interactionType;if(d!==k.InteractionType.NONE){var {min:l,max:f}=b,{interactionStartCamera:t,interactionFactor:B}=e;e=d===k.InteractionType.TUMBLE||d===k.InteractionType.ZOOM;d=p(a,t);var u=0===d?0:a.renderCoordsHelper.getAltitude(t.eye);b.min=l;b.max=f;g.adjustRangeForInteraction(d,u,e,B,.05*u,b)}a=a.renderCoordsHelper.getAltitude(c.eye);a=v.clamp(a,b.min,b.max)-a;return 1E-6>=Math.abs(a)?0:a}const A={min:0,max:0},C=h.create(),m=h.create(),
D=h.create(),q=h.create();n.applyAltitudeConstraint=function(a,c,e=g.defaultConstraintOptions){var b=p(a,c,e);if(0===b)return!1;const d=a.renderCoordsHelper,l=d.getAltitude(c.eye)+b;var f=g.interactionDirectionTowardsConstraintMinimization;e=e.interactionDirection;b=Math.sign(b);a.renderCoordsHelper.worldUpAtPosition(c.eye,m);r.scale(m,m,b);f=f.call(g,c,e,m,C);a=r.copy(D,c.viewForward);f=d.intersectInfiniteManifold(x.wrap(c.eye,f),l,q);c.eye=w.isSome(f)?f:d.setAltitude(q,l,c.eye);c.center=z.closestPointOnRay(q,
c.eye,a,c.center);return!0};n.getAltitudeConstraintError=p;Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});