(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~ccbc3fde"],{b8ca:function(t,e,n){"use strict";function o(t){return t.split("-")[0]}function i(t){return t.split("-")[1]}function r(t){return["top","bottom"].includes(o(t))?"x":"y"}function l(t){return"y"===t?"height":"width"}function c(t,e,n){let{reference:c,floating:s}=t;const f=c.x+c.width/2-s.width/2,a=c.y+c.height/2-s.height/2,u=r(e),d=l(u),h=c[d]/2-s[d]/2,g=o(e),m="x"===u;let p;switch(g){case"top":p={x:f,y:c.y-s.height};break;case"bottom":p={x:f,y:c.y+c.height};break;case"right":p={x:c.x+c.width,y:a};break;case"left":p={x:c.x-s.width,y:a};break;default:p={x:c.x,y:c.y}}switch(i(e)){case"start":p[u]-=h*(n&&m?-1:1);break;case"end":p[u]+=h*(n&&m?-1:1);break}return p}n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return T})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return d})),n.d(e,"e",(function(){return O})),n.d(e,"f",(function(){return H})),n.d(e,"g",(function(){return z})),n.d(e,"h",(function(){return V})),n.d(e,"i",(function(){return k})),n.d(e,"j",(function(){return u})),n.d(e,"k",(function(){return S})),n.d(e,"l",(function(){return j}));const s=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:l}=n,s=await(null==l.isRTL?void 0:l.isRTL(e));let f=await l.getElementRects({reference:t,floating:e,strategy:i}),{x:a,y:u}=c(f,o,s),d=o,h={};for(let g=0;g<r.length;g++){0;const{name:n,fn:m}=r[g],{x:p,y:y,data:w,reset:v}=await m({x:a,y:u,initialPlacement:o,placement:d,strategy:i,middlewareData:h,rects:f,platform:l,elements:{reference:t,floating:e}});a=null!=p?p:a,u=null!=y?y:u,h={...h,[n]:{...h[n],...w}},v&&("object"===typeof v&&(v.placement&&(d=v.placement),v.rects&&(f=!0===v.rects?await l.getElementRects({reference:t,floating:e,strategy:i}):v.rects),({x:a,y:u}=c(f,d,s))),g=-1)}return{x:a,y:u,placement:d,strategy:i,middlewareData:h}};function f(t){return{top:0,right:0,bottom:0,left:0,...t}}function a(t){return"number"!==typeof t?f(t):{top:t,right:t,bottom:t,left:t}}function u(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function d(t,e){var n;void 0===e&&(e={});const{x:o,y:i,platform:r,rects:l,elements:c,strategy:s}=t,{boundary:f="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:g=!1,padding:m=0}=e,p=a(m),y="floating"===h?"reference":"floating",w=c[g?y:h],v=u(await r.getClippingRect({element:null==(n=await(null==r.isElement?void 0:r.isElement(w)))||n?w:w.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(c.floating)),boundary:f,rootBoundary:d,strategy:s})),x=u(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:"floating"===h?{...l.floating,x:o,y:i}:l.reference,offsetParent:await(null==r.getOffsetParent?void 0:r.getOffsetParent(c.floating)),strategy:s}):l[h]);return{top:v.top-x.top+p.top,bottom:x.bottom-v.bottom+p.bottom,left:v.left-x.left+p.left,right:x.right-v.right+p.right}}const h=Math.min,g=Math.max;function m(t,e,n){return g(t,h(e,n))}const p=t=>({name:"arrow",options:t,async fn(e){const{element:n,padding:o=0}=null!=t?t:{},{x:c,y:s,placement:f,rects:u,platform:d}=e;if(null==n)return{};const h=a(o),g={x:c,y:s},p=r(f),y=i(f),w=l(p),v=await d.getDimensions(n),x="y"===p?"top":"left",b="y"===p?"bottom":"right",R=u.reference[w]+u.reference[p]-g[p]-u.floating[w],A=g[p]-u.reference[p],L=await(null==d.getOffsetParent?void 0:d.getOffsetParent(n));let T=L?"y"===p?L.clientHeight||0:L.clientWidth||0:0;0===T&&(T=u.floating[w]);const P=R/2-A/2,O=h[x],E=T-v[w]-h[b],D=T/2-v[w]/2+P,H=m(O,D,E),C="start"===y?h[x]:h[b],k=C>0&&D!==H&&u.reference[w]<=u.floating[w],W=k?D<O?O-D:E-D:0;return{[p]:g[p]-W,data:{[p]:H,centerOffset:D-H}}}}),y={left:"right",right:"left",bottom:"top",top:"bottom"};function w(t){return t.replace(/left|right|bottom|top/g,t=>y[t])}function v(t,e,n){void 0===n&&(n=!1);const o=i(t),c=r(t),s=l(c);let f="x"===c?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[s]>e.floating[s]&&(f=w(f)),{main:f,cross:w(f)}}const x={start:"end",end:"start"};function b(t){return t.replace(/start|end/g,t=>x[t])}const R=["top","right","bottom","left"],A=R.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]);function L(t,e,n){const r=t?[...n.filter(e=>i(e)===t),...n.filter(e=>i(e)!==t)]:n.filter(t=>o(t)===t);return r.filter(n=>!t||(i(n)===t||!!e&&b(n)!==n))}const T=function(t){return void 0===t&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,i,r,l,c;const{x:s,y:f,rects:a,middlewareData:u,placement:h,platform:g,elements:m}=e,{alignment:p=null,allowedPlacements:y=A,autoAlignment:w=!0,...x}=t,b=L(p,w,y),R=await d(e,x),T=null!=(n=null==(i=u.autoPlacement)?void 0:i.index)?n:0,P=b[T];if(null==P)return{};const{main:O,cross:E}=v(P,a,await(null==g.isRTL?void 0:g.isRTL(m.floating)));if(h!==P)return{x:s,y:f,reset:{placement:b[0]}};const D=[R[o(P)],R[O],R[E]],H=[...null!=(r=null==(l=u.autoPlacement)?void 0:l.overflows)?r:[],{placement:P,overflows:D}],C=b[T+1];if(C)return{data:{index:T+1,overflows:H},reset:{placement:C}};const k=H.slice().sort((t,e)=>t.overflows[0]-e.overflows[0]),W=null==(c=k.find(t=>{let{overflows:e}=t;return e.every(t=>t<=0)}))?void 0:c.placement,S=null!=W?W:k[0].placement;return S!==h?{data:{index:T+1,overflows:H},reset:{placement:S}}:{}}}};function P(t){const e=w(t);return[b(t),e,b(e)]}const O=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n;const{placement:i,middlewareData:r,rects:l,initialPlacement:c,platform:s,elements:f}=e,{mainAxis:a=!0,crossAxis:u=!0,fallbackPlacements:h,fallbackStrategy:g="bestFit",flipAlignment:m=!0,...p}=t,y=o(i),x=y===c,b=h||(x||!m?[w(c)]:P(c)),R=[c,...b],A=await d(e,p),L=[];let T=(null==(n=r.flip)?void 0:n.overflows)||[];if(a&&L.push(A[y]),u){const{main:t,cross:e}=v(i,l,await(null==s.isRTL?void 0:s.isRTL(f.floating)));L.push(A[t],A[e])}if(T=[...T,{placement:i,overflows:L}],!L.every(t=>t<=0)){var O,E;const t=(null!=(O=null==(E=r.flip)?void 0:E.index)?O:0)+1,e=R[t];if(e)return{data:{index:t,overflows:T},reset:{placement:e}};let n="bottom";switch(g){case"bestFit":{var D;const t=null==(D=T.map(t=>[t,t.overflows.filter(t=>t>0).reduce((t,e)=>t+e,0)]).sort((t,e)=>t[1]-e[1])[0])?void 0:D[0].placement;t&&(n=t);break}case"initialPlacement":n=c;break}if(i!==n)return{reset:{placement:n}}}return{}}}};function E(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function D(t){return R.some(e=>t[e]>=0)}const H=function(t){let{strategy:e="referenceHidden",...n}=void 0===t?{}:t;return{name:"hide",async fn(t){const{rects:o}=t;switch(e){case"referenceHidden":{const e=await d(t,{...n,elementContext:"reference"}),i=E(e,o.reference);return{data:{referenceHiddenOffsets:i,referenceHidden:D(i)}}}case"escaped":{const e=await d(t,{...n,altBoundary:!0}),i=E(e,o.floating);return{data:{escapedOffsets:i,escaped:D(i)}}}default:return{}}}}};async function C(t,e){const{placement:n,platform:l,elements:c}=t,s=await(null==l.isRTL?void 0:l.isRTL(c.floating)),f=o(n),a=i(n),u="x"===r(n),d=["left","top"].includes(f)?-1:1,h=s&&u?-1:1,g="function"===typeof e?e(t):e;let{mainAxis:m,crossAxis:p,alignmentAxis:y}="number"===typeof g?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...g};return a&&"number"===typeof y&&(p="end"===a?-1*y:y),u?{x:p*h,y:m*d}:{x:m*d,y:p*h}}const k=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:o}=e,i=await C(e,t);return{x:n+i.x,y:o+i.y,data:i}}}};function W(t){return"x"===t?"y":"x"}const S=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:i,placement:l}=e,{mainAxis:c=!0,crossAxis:s=!1,limiter:f={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...a}=t,u={x:n,y:i},h=await d(e,a),g=r(o(l)),p=W(g);let y=u[g],w=u[p];if(c){const t="y"===g?"top":"left",e="y"===g?"bottom":"right",n=y+h[t],o=y-h[e];y=m(n,y,o)}if(s){const t="y"===p?"top":"left",e="y"===p?"bottom":"right",n=w+h[t],o=w-h[e];w=m(n,w,o)}const v=f.fn({...e,[g]:y,[p]:w});return{...v,data:{x:v.x-n,y:v.y-i}}}}},V=function(t){return void 0===t&&(t={}),{options:t,fn(e){const{x:n,y:i,placement:l,rects:c,middlewareData:s}=e,{offset:f=0,mainAxis:a=!0,crossAxis:u=!0}=t,d={x:n,y:i},h=r(l),g=W(h);let m=d[h],p=d[g];const y="function"===typeof f?f({...c,placement:l}):f,w="number"===typeof y?{mainAxis:y,crossAxis:0}:{mainAxis:0,crossAxis:0,...y};if(a){const t="y"===h?"height":"width",e=c.reference[h]-c.floating[t]+w.mainAxis,n=c.reference[h]+c.reference[t]-w.mainAxis;m<e?m=e:m>n&&(m=n)}if(u){var v,x,b,R;const t="y"===h?"width":"height",e=["top","left"].includes(o(l)),n=c.reference[g]-c.floating[t]+(e&&null!=(v=null==(x=s.offset)?void 0:x[g])?v:0)+(e?0:w.crossAxis),i=c.reference[g]+c.reference[t]+(e?0:null!=(b=null==(R=s.offset)?void 0:R[g])?b:0)-(e?w.crossAxis:0);p<n?p=n:p>i&&(p=i)}return{[h]:m,[g]:p}}}},j=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:r,platform:l,elements:c}=e,{apply:s,...f}=t,a=await d(e,f),u=o(n),h=i(n);let m,p;"top"===u||"bottom"===u?(m=u,p=h===(await(null==l.isRTL?void 0:l.isRTL(c.floating))?"start":"end")?"left":"right"):(p=u,m="end"===h?"top":"bottom");const y=g(a.left,0),w=g(a.right,0),v=g(a.top,0),x=g(a.bottom,0),b={availableHeight:r.floating.height-(["left","right"].includes(n)?2*(0!==v||0!==x?v+x:g(a.top,a.bottom)):a[m]),availableWidth:r.floating.width-(["top","bottom"].includes(n)?2*(0!==y||0!==w?y+w:g(a.left,a.right)):a[p])},R=await l.getDimensions(c.floating);null==s||s({...e,...b});const A=await l.getDimensions(c.floating);return R.width!==A.width||R.height!==A.height?{reset:{rects:!0}}:{}}}},z=function(t){return void 0===t&&(t={}),{name:"inline",options:t,async fn(e){var n;const{placement:i,elements:l,rects:c,platform:s,strategy:f}=e,{padding:d=2,x:m,y:p}=t,y=u(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:c.reference,offsetParent:await(null==s.getOffsetParent?void 0:s.getOffsetParent(l.floating)),strategy:f}):c.reference),w=null!=(n=await(null==s.getClientRects?void 0:s.getClientRects(l.reference)))?n:[],v=a(d);function x(){var t;if(2===w.length&&w[0].left>w[1].right&&null!=m&&null!=p)return null!=(t=w.find(t=>m>t.left-v.left&&m<t.right+v.right&&p>t.top-v.top&&p<t.bottom+v.bottom))?t:y;if(w.length>=2){if("x"===r(i)){const t=w[0],e=w[w.length-1],n="top"===o(i),r=t.top,l=e.bottom,c=n?t.left:e.left,s=n?t.right:e.right,f=s-c,a=l-r;return{top:r,bottom:l,left:c,right:s,width:f,height:a,x:c,y:r}}const t="left"===o(i),e=g(...w.map(t=>t.right)),n=h(...w.map(t=>t.left)),l=w.filter(o=>t?o.left===n:o.right===e),c=l[0].top,s=l[l.length-1].bottom,f=n,a=e,u=a-f,d=s-c;return{top:c,bottom:s,left:f,right:a,width:u,height:d,x:f,y:c}}return y}const b=await s.getElementRects({reference:{getBoundingClientRect:x},floating:l.floating,strategy:f});return c.reference.x!==b.reference.x||c.reference.y!==b.reference.y||c.reference.width!==b.reference.width||c.reference.height!==b.reference.height?{reset:{rects:b}}:{}}}}},e20a:function(t,e,n){"use strict";n.r(e),n.d(e,"autoUpdate",(function(){return J})),n.d(e,"computePosition",(function(){return X})),n.d(e,"getOverflowAncestors",(function(){return V}));var o=n("b8ca");function i(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function r(t){if(null==t)return window;if(!i(t)){const e=t.ownerDocument;return e&&e.defaultView||window}return t}function l(t){return r(t).getComputedStyle(t)}function c(t){return i(t)?"":t?(t.nodeName||"").toLowerCase():""}function s(){const t=navigator.userAgentData;return null!=t&&t.brands?t.brands.map(t=>t.brand+"/"+t.version).join(" "):navigator.userAgent}function f(t){return t instanceof r(t).HTMLElement}function a(t){return t instanceof r(t).Element}function u(t){return t instanceof r(t).Node}function d(t){if("undefined"===typeof ShadowRoot)return!1;const e=r(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function h(t){const{overflow:e,overflowX:n,overflowY:o}=l(t);return/auto|scroll|overlay|hidden/.test(e+o+n)}function g(t){return["table","td","th"].includes(c(t))}function m(t){const e=/firefox/i.test(s()),n=l(t);return"none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||["transform","perspective"].includes(n.willChange)||e&&"filter"===n.willChange||e&&!!n.filter&&"none"!==n.filter}function p(){return!/^((?!chrome|android).)*safari/i.test(s())}n.d(e,"arrow",(function(){return o["a"]})),n.d(e,"autoPlacement",(function(){return o["b"]})),n.d(e,"detectOverflow",(function(){return o["d"]})),n.d(e,"flip",(function(){return o["e"]})),n.d(e,"hide",(function(){return o["f"]})),n.d(e,"inline",(function(){return o["g"]})),n.d(e,"limitShift",(function(){return o["h"]})),n.d(e,"offset",(function(){return o["i"]})),n.d(e,"shift",(function(){return o["k"]})),n.d(e,"size",(function(){return o["l"]}));const y=Math.min,w=Math.max,v=Math.round;function x(t,e,n){var o,i,l,c;void 0===e&&(e=!1),void 0===n&&(n=!1);const s=t.getBoundingClientRect();let u=1,d=1;e&&f(t)&&(u=t.offsetWidth>0&&v(s.width)/t.offsetWidth||1,d=t.offsetHeight>0&&v(s.height)/t.offsetHeight||1);const h=a(t)?r(t):window,g=!p()&&n,m=(s.left+(g&&null!=(o=null==(i=h.visualViewport)?void 0:i.offsetLeft)?o:0))/u,y=(s.top+(g&&null!=(l=null==(c=h.visualViewport)?void 0:c.offsetTop)?l:0))/d,w=s.width/u,x=s.height/d;return{width:w,height:x,top:y,right:m+w,bottom:y+x,left:m,x:m,y:y}}function b(t){return((u(t)?t.ownerDocument:t.document)||window.document).documentElement}function R(t){return a(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function A(t){return x(b(t)).left+R(t).scrollLeft}function L(t){const e=x(t);return v(e.width)!==t.offsetWidth||v(e.height)!==t.offsetHeight}function T(t,e,n){const o=f(e),i=b(e),r=x(t,o&&L(e),"fixed"===n);let l={scrollLeft:0,scrollTop:0};const s={x:0,y:0};if(o||!o&&"fixed"!==n)if(("body"!==c(e)||h(i))&&(l=R(e)),f(e)){const t=x(e,!0);s.x=t.x+e.clientLeft,s.y=t.y+e.clientTop}else i&&(s.x=A(i));return{x:r.left+l.scrollLeft-s.x,y:r.top+l.scrollTop-s.y,width:r.width,height:r.height}}function P(t){return"html"===c(t)?t:t.assignedSlot||t.parentNode||(d(t)?t.host:null)||b(t)}function O(t){return f(t)&&"fixed"!==getComputedStyle(t).position?t.offsetParent:null}function E(t){let e=P(t);d(e)&&(e=e.host);while(f(e)&&!["html","body"].includes(c(e))){if(m(e))return e;e=e.parentNode}return null}function D(t){const e=r(t);let n=O(t);while(n&&g(n)&&"static"===getComputedStyle(n).position)n=O(n);return n&&("html"===c(n)||"body"===c(n)&&"static"===getComputedStyle(n).position&&!m(n))?e:n||E(t)||e}function H(t){if(f(t))return{width:t.offsetWidth,height:t.offsetHeight};const e=x(t);return{width:e.width,height:e.height}}function C(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=f(n),r=b(n);if(n===r)return e;let l={scrollLeft:0,scrollTop:0};const s={x:0,y:0};if((i||!i&&"fixed"!==o)&&(("body"!==c(n)||h(r))&&(l=R(n)),f(n))){const t=x(n,!0);s.x=t.x+n.clientLeft,s.y=t.y+n.clientTop}return{...e,x:e.x-l.scrollLeft+s.x,y:e.y-l.scrollTop+s.y}}function k(t,e){const n=r(t),o=b(t),i=n.visualViewport;let l=o.clientWidth,c=o.clientHeight,s=0,f=0;if(i){l=i.width,c=i.height;const t=p();(t||!t&&"fixed"===e)&&(s=i.offsetLeft,f=i.offsetTop)}return{width:l,height:c,x:s,y:f}}function W(t){var e;const n=b(t),o=R(t),i=null==(e=t.ownerDocument)?void 0:e.body,r=w(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),c=w(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0);let s=-o.scrollLeft+A(t);const f=-o.scrollTop;return"rtl"===l(i||n).direction&&(s+=w(n.clientWidth,i?i.clientWidth:0)-r),{width:r,height:c,x:s,y:f}}function S(t){const e=P(t);return["html","body","#document"].includes(c(e))?t.ownerDocument.body:f(e)&&h(e)?e:S(e)}function V(t,e){var n;void 0===e&&(e=[]);const o=S(t),i=o===(null==(n=t.ownerDocument)?void 0:n.body),l=r(o),c=i?[l].concat(l.visualViewport||[],h(o)?o:[]):o,s=e.concat(c);return i?s:s.concat(V(c))}function j(t,e){const n=null==e||null==e.getRootNode?void 0:e.getRootNode();if(null!=t&&t.contains(e))return!0;if(n&&d(n)){let n=e;do{if(n&&t===n)return!0;n=n.parentNode||n.host}while(n)}return!1}function z(t,e){const n=x(t,!1,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft;return{top:o,left:i,x:i,y:o,right:i+t.clientWidth,bottom:o+t.clientHeight,width:t.clientWidth,height:t.clientHeight}}function B(t,e,n){return"viewport"===e?Object(o["j"])(k(t,n)):a(e)?z(e,n):Object(o["j"])(W(b(t)))}function N(t){const e=V(t),n=["absolute","fixed"].includes(l(t).position),o=n&&f(t)?D(t):t;return a(o)?e.filter(t=>a(t)&&j(t,o)&&"body"!==c(t)):[]}function M(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r="clippingAncestors"===n?N(e):[].concat(n),l=[...r,o],c=l[0],s=l.reduce((t,n)=>{const o=B(e,n,i);return t.top=w(o.top,t.top),t.right=y(o.right,t.right),t.bottom=y(o.bottom,t.bottom),t.left=w(o.left,t.left),t},B(e,c,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}}const F={getClippingRect:M,convertOffsetParentRelativeRectToViewportRelativeRect:C,isElement:a,getDimensions:H,getOffsetParent:D,getDocumentElement:b,getElementRects:t=>{let{reference:e,floating:n,strategy:o}=t;return{reference:T(e,D(n),o),floating:{...H(n),x:0,y:0}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===l(t).direction};function J(t,e,n,o){void 0===o&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:l=!0,animationFrame:c=!1}=o,s=i&&!c,f=r&&!c,u=s||f?[...a(t)?V(t):[],...V(e)]:[];u.forEach(t=>{s&&t.addEventListener("scroll",n,{passive:!0}),f&&t.addEventListener("resize",n)});let d,h=null;l&&(h=new ResizeObserver(n),a(t)&&!c&&h.observe(t),h.observe(e));let g=c?x(t):null;function m(){const e=x(t);!g||e.x===g.x&&e.y===g.y&&e.width===g.width&&e.height===g.height||n(),g=e,d=requestAnimationFrame(m)}return c&&m(),l||n(),()=>{var t;u.forEach(t=>{s&&t.removeEventListener("scroll",n),f&&t.removeEventListener("resize",n)}),null==(t=h)||t.disconnect(),h=null,c&&cancelAnimationFrame(d)}}const X=(t,e,n)=>Object(o["c"])(t,e,{platform:F,...n})}}]);
//# sourceMappingURL=chunk-vendors~ccbc3fde.a1a2495b.js.map