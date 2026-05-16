const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/browserAll-BLcAAgKn.js","assets/webworkerAll-B4yhiB-L.js","assets/Filter-CGEM4xAm.js","assets/WebGPURenderer-siJYyGD0.js","assets/BufferResource-Clt0sNd8.js","assets/RenderTargetSystem-Cp1zEQWX.js","assets/WebGLRenderer-BWm_8SPS.js","assets/CanvasRenderer-C-eKQgFJ.js"])))=>i.map(i=>d[i]);
var ix=Object.defineProperty;var sx=(t,e,r)=>e in t?ix(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var B=(t,e,r)=>sx(t,typeof e!="symbol"?e+"":e,r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();const nx="modulepreload",ax=function(t){return"/abstractblade/"+t},Gd={},Oi=function(e,r,i){let s=Promise.resolve();if(r&&r.length>0){let a=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(c=>({status:"fulfilled",value:c}),c=>({status:"rejected",reason:c}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=a(r.map(u=>{if(u=ax(u),u in Gd)return;Gd[u]=!0;const d=u.endsWith(".css"),c=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${c}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":nx,d||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),d)return new Promise((f,m)=>{p.addEventListener("load",f),p.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${u}`)))})}))}function n(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&n(o.reason);return e().catch(n)})};var _e=(t=>(t.Application="application",t.WebGLPipes="webgl-pipes",t.WebGLPipesAdaptor="webgl-pipes-adaptor",t.WebGLSystem="webgl-system",t.WebGPUPipes="webgpu-pipes",t.WebGPUPipesAdaptor="webgpu-pipes-adaptor",t.WebGPUSystem="webgpu-system",t.CanvasSystem="canvas-system",t.CanvasPipesAdaptor="canvas-pipes-adaptor",t.CanvasPipes="canvas-pipes",t.Asset="asset",t.LoadParser="load-parser",t.ResolveParser="resolve-parser",t.CacheParser="cache-parser",t.DetectionParser="detection-parser",t.MaskEffect="mask-effect",t.BlendMode="blend-mode",t.TextureSource="texture-source",t.Environment="environment",t.ShapeBuilder="shape-builder",t.Batcher="batcher",t))(_e||{});const yo=t=>{if(typeof t=="function"||typeof t=="object"&&t.extension){if(!t.extension)throw new Error("Extension class must have an extension object");t={...typeof t.extension!="object"?{type:t.extension}:t.extension,ref:t}}if(typeof t=="object")t={...t};else throw new Error("Invalid extension type");return typeof t.type=="string"&&(t.type=[t.type]),t},ps=(t,e)=>yo(t).priority??e,Ze={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...t){return t.map(yo).forEach(e=>{e.type.forEach(r=>{var i,s;return(s=(i=this._removeHandlers)[r])==null?void 0:s.call(i,e)})}),this},add(...t){return t.map(yo).forEach(e=>{e.type.forEach(r=>{var n,a;const i=this._addHandlers,s=this._queue;i[r]?(a=i[r])==null||a.call(i,e):(s[r]=s[r]||[],(n=s[r])==null||n.push(e))})}),this},handle(t,e,r){var a;const i=this._addHandlers,s=this._removeHandlers;if(i[t]||s[t])throw new Error(`Extension type ${t} already has a handler`);i[t]=e,s[t]=r;const n=this._queue;return n[t]&&((a=n[t])==null||a.forEach(o=>e(o)),delete n[t]),this},handleByMap(t,e){return this.handle(t,r=>{r.name&&(e[r.name]=r.ref)},r=>{r.name&&delete e[r.name]})},handleByNamedList(t,e,r=-1){return this.handle(t,i=>{e.findIndex(n=>n.name===i.name)>=0||(e.push({name:i.name,value:i.ref}),e.sort((n,a)=>ps(a.value,r)-ps(n.value,r)))},i=>{const s=e.findIndex(n=>n.name===i.name);s!==-1&&e.splice(s,1)})},handleByList(t,e,r=-1){return this.handle(t,i=>{e.includes(i.ref)||(e.push(i.ref),e.sort((s,n)=>ps(n,r)-ps(s,r)))},i=>{const s=e.indexOf(i.ref);s!==-1&&e.splice(s,1)})},mixin(t,...e){for(const r of e)Object.defineProperties(t.prototype,Object.getOwnPropertyDescriptors(r))}},ox={extension:{type:_e.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await Oi(()=>import("./browserAll-BLcAAgKn.js"),__vite__mapDeps([0,1,2]))}},lx={extension:{type:_e.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await Oi(()=>import("./webworkerAll-B4yhiB-L.js"),__vite__mapDeps([1,2]))}};class rt{constructor(e,r,i){this._x=r||0,this._y=i||0,this._observer=e}clone(e){return new rt(e??this._observer,this._x,this._y)}set(e=0,r=e){return(this._x!==e||this._y!==r)&&(this._x=e,this._y=r,this._observer._onUpdate(this)),this}copyFrom(e){return(this._x!==e.x||this._y!==e.y)&&(this._x=e.x,this._y=e.y,this._observer._onUpdate(this)),this}copyTo(e){return e.set(this._x,this._y),e}equals(e){return e.x===this._x&&e.y===this._y}toString(){return`[pixi.js/math:ObservablePoint x=${this._x} y=${this._y} scope=${this._observer}]`}get x(){return this._x}set x(e){this._x!==e&&(this._x=e,this._observer._onUpdate(this))}get y(){return this._y}set y(e){this._y!==e&&(this._y=e,this._observer._onUpdate(this))}}function Jo(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Bn={exports:{}},Ud;function ux(){return Ud||(Ud=1,(function(t){var e=Object.prototype.hasOwnProperty,r="~";function i(){}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(r=!1));function s(l,u,d){this.fn=l,this.context=u,this.once=d||!1}function n(l,u,d,c,p){if(typeof d!="function")throw new TypeError("The listener must be a function");var f=new s(d,c||l,p),m=r?r+u:u;return l._events[m]?l._events[m].fn?l._events[m]=[l._events[m],f]:l._events[m].push(f):(l._events[m]=f,l._eventsCount++),l}function a(l,u){--l._eventsCount===0?l._events=new i:delete l._events[u]}function o(){this._events=new i,this._eventsCount=0}o.prototype.eventNames=function(){var u=[],d,c;if(this._eventsCount===0)return u;for(c in d=this._events)e.call(d,c)&&u.push(r?c.slice(1):c);return Object.getOwnPropertySymbols?u.concat(Object.getOwnPropertySymbols(d)):u},o.prototype.listeners=function(u){var d=r?r+u:u,c=this._events[d];if(!c)return[];if(c.fn)return[c.fn];for(var p=0,f=c.length,m=new Array(f);p<f;p++)m[p]=c[p].fn;return m},o.prototype.listenerCount=function(u){var d=r?r+u:u,c=this._events[d];return c?c.fn?1:c.length:0},o.prototype.emit=function(u,d,c,p,f,m){var y=r?r+u:u;if(!this._events[y])return!1;var b=this._events[y],_=arguments.length,x,$;if(b.fn){switch(b.once&&this.removeListener(u,b.fn,void 0,!0),_){case 1:return b.fn.call(b.context),!0;case 2:return b.fn.call(b.context,d),!0;case 3:return b.fn.call(b.context,d,c),!0;case 4:return b.fn.call(b.context,d,c,p),!0;case 5:return b.fn.call(b.context,d,c,p,f),!0;case 6:return b.fn.call(b.context,d,c,p,f,m),!0}for($=1,x=new Array(_-1);$<_;$++)x[$-1]=arguments[$];b.fn.apply(b.context,x)}else{var S=b.length,E;for($=0;$<S;$++)switch(b[$].once&&this.removeListener(u,b[$].fn,void 0,!0),_){case 1:b[$].fn.call(b[$].context);break;case 2:b[$].fn.call(b[$].context,d);break;case 3:b[$].fn.call(b[$].context,d,c);break;case 4:b[$].fn.call(b[$].context,d,c,p);break;default:if(!x)for(E=1,x=new Array(_-1);E<_;E++)x[E-1]=arguments[E];b[$].fn.apply(b[$].context,x)}}return!0},o.prototype.on=function(u,d,c){return n(this,u,d,c,!1)},o.prototype.once=function(u,d,c){return n(this,u,d,c,!0)},o.prototype.removeListener=function(u,d,c,p){var f=r?r+u:u;if(!this._events[f])return this;if(!d)return a(this,f),this;var m=this._events[f];if(m.fn)m.fn===d&&(!p||m.once)&&(!c||m.context===c)&&a(this,f);else{for(var y=0,b=[],_=m.length;y<_;y++)(m[y].fn!==d||p&&!m[y].once||c&&m[y].context!==c)&&b.push(m[y]);b.length?this._events[f]=b.length===1?b[0]:b:a(this,f)}return this},o.prototype.removeAllListeners=function(u){var d;return u?(d=r?r+u:u,this._events[d]&&a(this,d)):(this._events=new i,this._eventsCount=0),this},o.prototype.off=o.prototype.removeListener,o.prototype.addListener=o.prototype.on,o.prefixed=r,o.EventEmitter=o,t.exports=o})(Bn)),Bn.exports}var dx=ux();const Qt=Jo(dx),cx=Math.PI*2,hx=180/Math.PI,px=Math.PI/180;class it{constructor(e=0,r=0){this.x=0,this.y=0,this.x=e,this.y=r}clone(){return new it(this.x,this.y)}copyFrom(e){return this.set(e.x,e.y),this}copyTo(e){return e.set(this.x,this.y),e}equals(e){return e.x===this.x&&e.y===this.y}set(e=0,r=e){return this.x=e,this.y=r,this}toString(){return`[pixi.js/math:Point x=${this.x} y=${this.y}]`}static get shared(){return On.x=0,On.y=0,On}}const On=new it;class ye{constructor(e=1,r=0,i=0,s=1,n=0,a=0){this.array=null,this.a=e,this.b=r,this.c=i,this.d=s,this.tx=n,this.ty=a}fromArray(e){this.a=e[0],this.b=e[1],this.c=e[3],this.d=e[4],this.tx=e[2],this.ty=e[5]}set(e,r,i,s,n,a){return this.a=e,this.b=r,this.c=i,this.d=s,this.tx=n,this.ty=a,this}toArray(e,r){this.array||(this.array=new Float32Array(9));const i=r||this.array;return e?(i[0]=this.a,i[1]=this.b,i[2]=0,i[3]=this.c,i[4]=this.d,i[5]=0,i[6]=this.tx,i[7]=this.ty,i[8]=1):(i[0]=this.a,i[1]=this.c,i[2]=this.tx,i[3]=this.b,i[4]=this.d,i[5]=this.ty,i[6]=0,i[7]=0,i[8]=1),i}apply(e,r){r=r||new it;const i=e.x,s=e.y;return r.x=this.a*i+this.c*s+this.tx,r.y=this.b*i+this.d*s+this.ty,r}applyInverse(e,r){r=r||new it;const i=this.a,s=this.b,n=this.c,a=this.d,o=this.tx,l=this.ty,u=1/(i*a+n*-s),d=e.x,c=e.y;return r.x=a*u*d+-n*u*c+(l*n-o*a)*u,r.y=i*u*c+-s*u*d+(-l*i+o*s)*u,r}translate(e,r){return this.tx+=e,this.ty+=r,this}scale(e,r){return this.a*=e,this.d*=r,this.c*=e,this.b*=r,this.tx*=e,this.ty*=r,this}rotate(e){const r=Math.cos(e),i=Math.sin(e),s=this.a,n=this.c,a=this.tx;return this.a=s*r-this.b*i,this.b=s*i+this.b*r,this.c=n*r-this.d*i,this.d=n*i+this.d*r,this.tx=a*r-this.ty*i,this.ty=a*i+this.ty*r,this}append(e){const r=this.a,i=this.b,s=this.c,n=this.d;return this.a=e.a*r+e.b*s,this.b=e.a*i+e.b*n,this.c=e.c*r+e.d*s,this.d=e.c*i+e.d*n,this.tx=e.tx*r+e.ty*s+this.tx,this.ty=e.tx*i+e.ty*n+this.ty,this}appendFrom(e,r){const i=e.a,s=e.b,n=e.c,a=e.d,o=e.tx,l=e.ty,u=r.a,d=r.b,c=r.c,p=r.d;return this.a=i*u+s*c,this.b=i*d+s*p,this.c=n*u+a*c,this.d=n*d+a*p,this.tx=o*u+l*c+r.tx,this.ty=o*d+l*p+r.ty,this}setTransform(e,r,i,s,n,a,o,l,u){return this.a=Math.cos(o+u)*n,this.b=Math.sin(o+u)*n,this.c=-Math.sin(o-l)*a,this.d=Math.cos(o-l)*a,this.tx=e-(i*this.a+s*this.c),this.ty=r-(i*this.b+s*this.d),this}prepend(e){const r=this.tx;if(e.a!==1||e.b!==0||e.c!==0||e.d!==1){const i=this.a,s=this.c;this.a=i*e.a+this.b*e.c,this.b=i*e.b+this.b*e.d,this.c=s*e.a+this.d*e.c,this.d=s*e.b+this.d*e.d}return this.tx=r*e.a+this.ty*e.c+e.tx,this.ty=r*e.b+this.ty*e.d+e.ty,this}decompose(e){const r=this.a,i=this.b,s=this.c,n=this.d,a=e.pivot,o=-Math.atan2(-s,n),l=Math.atan2(i,r),u=Math.abs(o+l);return u<1e-5||Math.abs(cx-u)<1e-5?(e.rotation=l,e.skew.x=e.skew.y=0):(e.rotation=0,e.skew.x=o,e.skew.y=l),e.scale.x=Math.sqrt(r*r+i*i),e.scale.y=Math.sqrt(s*s+n*n),e.position.x=this.tx+(a.x*r+a.y*s),e.position.y=this.ty+(a.x*i+a.y*n),e}invert(){const e=this.a,r=this.b,i=this.c,s=this.d,n=this.tx,a=e*s-r*i;return this.a=s/a,this.b=-r/a,this.c=-i/a,this.d=e/a,this.tx=(i*this.ty-s*n)/a,this.ty=-(e*this.ty-r*n)/a,this}isIdentity(){return this.a===1&&this.b===0&&this.c===0&&this.d===1&&this.tx===0&&this.ty===0}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const e=new ye;return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e}copyTo(e){return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e}copyFrom(e){return this.a=e.a,this.b=e.b,this.c=e.c,this.d=e.d,this.tx=e.tx,this.ty=e.ty,this}equals(e){return e.a===this.a&&e.b===this.b&&e.c===this.c&&e.d===this.d&&e.tx===this.tx&&e.ty===this.ty}toString(){return`[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`}static get IDENTITY(){return mx.identity()}static get shared(){return fx.identity()}}const fx=new ye,mx=new ye,vr=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],$r=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],kr=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],Sr=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],_o=[],Vm=[],fs=Math.sign;function gx(){for(let t=0;t<16;t++){const e=[];_o.push(e);for(let r=0;r<16;r++){const i=fs(vr[t]*vr[r]+kr[t]*$r[r]),s=fs($r[t]*vr[r]+Sr[t]*$r[r]),n=fs(vr[t]*kr[r]+kr[t]*Sr[r]),a=fs($r[t]*kr[r]+Sr[t]*Sr[r]);for(let o=0;o<16;o++)if(vr[o]===i&&$r[o]===s&&kr[o]===n&&Sr[o]===a){e.push(o);break}}}for(let t=0;t<16;t++){const e=new ye;e.set(vr[t],$r[t],kr[t],Sr[t],0,0),Vm.push(e)}}gx();const Se={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:t=>vr[t],uY:t=>$r[t],vX:t=>kr[t],vY:t=>Sr[t],inv:t=>t&8?t&15:-t&7,add:(t,e)=>_o[t][e],sub:(t,e)=>_o[t][Se.inv(e)],rotate180:t=>t^4,isVertical:t=>(t&3)===2,byDirection:(t,e)=>Math.abs(t)*2<=Math.abs(e)?e>=0?Se.S:Se.N:Math.abs(e)*2<=Math.abs(t)?t>0?Se.E:Se.W:e>0?t>0?Se.SE:Se.SW:t>0?Se.NE:Se.NW,matrixAppendRotationInv:(t,e,r=0,i=0,s=0,n=0)=>{const a=Vm[Se.inv(e)],o=a.a,l=a.b,u=a.c,d=a.d,c=r-Math.min(0,o*s,u*n,o*s+u*n),p=i-Math.min(0,l*s,d*n,l*s+d*n),f=t.a,m=t.b,y=t.c,b=t.d;t.a=o*f+l*y,t.b=o*m+l*b,t.c=u*f+d*y,t.d=u*m+d*b,t.tx=c*f+p*y+t.tx,t.ty=c*m+p*b+t.ty},transformRectCoords:(t,e,r,i)=>{const{x:s,y:n,width:a,height:o}=t,{x:l,y:u,width:d,height:c}=e;return r===Se.E?(i.set(s+l,n+u,a,o),i):r===Se.S?i.set(d-n-o+l,s+u,o,a):r===Se.W?i.set(d-s-a+l,c-n-o+u,a,o):r===Se.N?i.set(n+l,c-s-a+u,o,a):i.set(s+l,n+u,a,o)}},ms=[new it,new it,new it,new it];class Xe{constructor(e=0,r=0,i=0,s=0){this.type="rectangle",this.x=Number(e),this.y=Number(r),this.width=Number(i),this.height=Number(s)}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}isEmpty(){return this.left===this.right||this.top===this.bottom}static get EMPTY(){return new Xe(0,0,0,0)}clone(){return new Xe(this.x,this.y,this.width,this.height)}copyFromBounds(e){return this.x=e.minX,this.y=e.minY,this.width=e.maxX-e.minX,this.height=e.maxY-e.minY,this}copyFrom(e){return this.x=e.x,this.y=e.y,this.width=e.width,this.height=e.height,this}copyTo(e){return e.copyFrom(this),e}contains(e,r){return this.width<=0||this.height<=0?!1:e>=this.x&&e<this.x+this.width&&r>=this.y&&r<this.y+this.height}strokeContains(e,r,i,s=.5){const{width:n,height:a}=this;if(n<=0||a<=0)return!1;const o=this.x,l=this.y,u=i*(1-s),d=i-u,c=o-u,p=o+n+u,f=l-u,m=l+a+u,y=o+d,b=o+n-d,_=l+d,x=l+a-d;return e>=c&&e<=p&&r>=f&&r<=m&&!(e>y&&e<b&&r>_&&r<x)}intersects(e,r){if(!r){const k=this.x<e.x?e.x:this.x;if((this.right>e.right?e.right:this.right)<=k)return!1;const M=this.y<e.y?e.y:this.y;return(this.bottom>e.bottom?e.bottom:this.bottom)>M}const i=this.left,s=this.right,n=this.top,a=this.bottom;if(s<=i||a<=n)return!1;const o=ms[0].set(e.left,e.top),l=ms[1].set(e.left,e.bottom),u=ms[2].set(e.right,e.top),d=ms[3].set(e.right,e.bottom);if(u.x<=o.x||l.y<=o.y)return!1;const c=Math.sign(r.a*r.d-r.b*r.c);if(c===0||(r.apply(o,o),r.apply(l,l),r.apply(u,u),r.apply(d,d),Math.max(o.x,l.x,u.x,d.x)<=i||Math.min(o.x,l.x,u.x,d.x)>=s||Math.max(o.y,l.y,u.y,d.y)<=n||Math.min(o.y,l.y,u.y,d.y)>=a))return!1;const p=c*(l.y-o.y),f=c*(o.x-l.x),m=p*i+f*n,y=p*s+f*n,b=p*i+f*a,_=p*s+f*a;if(Math.max(m,y,b,_)<=p*o.x+f*o.y||Math.min(m,y,b,_)>=p*d.x+f*d.y)return!1;const x=c*(o.y-u.y),$=c*(u.x-o.x),S=x*i+$*n,E=x*s+$*n,T=x*i+$*a,A=x*s+$*a;return!(Math.max(S,E,T,A)<=x*o.x+$*o.y||Math.min(S,E,T,A)>=x*d.x+$*d.y)}pad(e=0,r=e){return this.x-=e,this.y-=r,this.width+=e*2,this.height+=r*2,this}fit(e){const r=Math.max(this.x,e.x),i=Math.min(this.x+this.width,e.x+e.width),s=Math.max(this.y,e.y),n=Math.min(this.y+this.height,e.y+e.height);return this.x=r,this.width=Math.max(i-r,0),this.y=s,this.height=Math.max(n-s,0),this}ceil(e=1,r=.001){const i=Math.ceil((this.x+this.width-r)*e)/e,s=Math.ceil((this.y+this.height-r)*e)/e;return this.x=Math.floor((this.x+r)*e)/e,this.y=Math.floor((this.y+r)*e)/e,this.width=i-this.x,this.height=s-this.y,this}scale(e,r=e){return this.x*=e,this.y*=r,this.width*=e,this.height*=r,this}enlarge(e){const r=Math.min(this.x,e.x),i=Math.max(this.x+this.width,e.x+e.width),s=Math.min(this.y,e.y),n=Math.max(this.y+this.height,e.y+e.height);return this.x=r,this.width=i-r,this.y=s,this.height=n-s,this}getBounds(e){return e||(e=new Xe),e.copyFrom(this),e}containsRect(e){if(this.width<=0||this.height<=0)return!1;const r=e.x,i=e.y,s=e.x+e.width,n=e.y+e.height;return r>=this.x&&r<this.x+this.width&&i>=this.y&&i<this.y+this.height&&s>=this.x&&s<this.x+this.width&&n>=this.y&&n<this.y+this.height}set(e,r,i,s){return this.x=e,this.y=r,this.width=i,this.height=s,this}toString(){return`[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}const Dn={default:-1};function Ne(t="default"){return Dn[t]===void 0&&(Dn[t]=-1),++Dn[t]}const Vd=new Set,Ge="8.0.0",yx="8.3.4",Kr={quiet:!1,noColor:!1},$e=((t,e,r=3)=>{if(Kr.quiet||Vd.has(e))return;let i=new Error().stack;const s=`${e}
Deprecated since v${t}`,n=typeof console.groupCollapsed=="function"&&!Kr.noColor;typeof i>"u"?console.warn("PixiJS Deprecation Warning: ",s):(i=i.split(`
`).splice(r).join(`
`),n?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",s),console.warn(i),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",s),console.warn(i))),Vd.add(e)});Object.defineProperties($e,{quiet:{get:()=>Kr.quiet,set:t=>{Kr.quiet=t},enumerable:!0,configurable:!1},noColor:{get:()=>Kr.noColor,set:t=>{Kr.noColor=t},enumerable:!0,configurable:!1}});const Fm=()=>{};function Fd(t){return t+=t===0?1:0,--t,t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,t|=t>>>16,t+1}function Wd(t){return!(t&t-1)&&!!t}function Wm(t){const e={};for(const r in t)t[r]!==void 0&&(e[r]=t[r]);return e}const qd=Object.create(null);function _x(t){const e=qd[t];return e===void 0&&(qd[t]=Ne("resource")),e}const qm=class Hm extends Qt{constructor(e={}){super(),this._resourceType="textureSampler",this._touched=0,this._maxAnisotropy=1,this.destroyed=!1,e={...Hm.defaultOptions,...e},this.addressMode=e.addressMode,this.addressModeU=e.addressModeU??this.addressModeU,this.addressModeV=e.addressModeV??this.addressModeV,this.addressModeW=e.addressModeW??this.addressModeW,this.scaleMode=e.scaleMode,this.magFilter=e.magFilter??this.magFilter,this.minFilter=e.minFilter??this.minFilter,this.mipmapFilter=e.mipmapFilter??this.mipmapFilter,this.lodMinClamp=e.lodMinClamp,this.lodMaxClamp=e.lodMaxClamp,this.compare=e.compare,this.maxAnisotropy=e.maxAnisotropy??1}set addressMode(e){this.addressModeU=e,this.addressModeV=e,this.addressModeW=e}get addressMode(){return this.addressModeU}set wrapMode(e){$e(Ge,"TextureStyle.wrapMode is now TextureStyle.addressMode"),this.addressMode=e}get wrapMode(){return this.addressMode}set scaleMode(e){this.magFilter=e,this.minFilter=e,this.mipmapFilter=e}get scaleMode(){return this.magFilter}set maxAnisotropy(e){this._maxAnisotropy=Math.min(e,16),this._maxAnisotropy>1&&(this.scaleMode="linear")}get maxAnisotropy(){return this._maxAnisotropy}get _resourceId(){return this._sharedResourceId||this._generateResourceId()}update(){this._sharedResourceId=null,this.emit("change",this)}_generateResourceId(){const e=`${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;return this._sharedResourceId=_x(e),this._resourceId}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this.removeAllListeners()}};qm.defaultOptions={addressMode:"clamp-to-edge",scaleMode:"linear"};let jm=qm;const Ym=class Xm extends Qt{constructor(e={}){super(),this.options=e,this._gpuData=Object.create(null),this._gcLastUsed=-1,this.uid=Ne("textureSource"),this._resourceType="textureSource",this._resourceId=Ne("resource"),this.uploadMethodId="unknown",this._resolution=1,this.pixelWidth=1,this.pixelHeight=1,this.width=1,this.height=1,this.sampleCount=1,this.mipLevelCount=1,this.autoGenerateMipmaps=!1,this.format="rgba8unorm",this.dimension="2d",this.viewDimension="2d",this.arrayLayerCount=1,this.antialias=!1,this._touched=0,this._batchTick=-1,this._textureBindLocation=-1,e={...Xm.defaultOptions,...e},this.label=e.label??"",this.resource=e.resource,this.autoGarbageCollect=e.autoGarbageCollect,this._resolution=e.resolution,e.width?this.pixelWidth=e.width*this._resolution:this.pixelWidth=this.resource?this.resourceWidth??1:1,e.height?this.pixelHeight=e.height*this._resolution:this.pixelHeight=this.resource?this.resourceHeight??1:1,this.width=this.pixelWidth/this._resolution,this.height=this.pixelHeight/this._resolution,this.format=e.format,this.dimension=e.dimensions,this.viewDimension=e.viewDimension??e.dimensions,this.arrayLayerCount=e.arrayLayerCount,this.mipLevelCount=e.mipLevelCount,this.autoGenerateMipmaps=e.autoGenerateMipmaps,this.sampleCount=e.sampleCount,this.antialias=e.antialias,this.alphaMode=e.alphaMode,this.style=new jm(Wm(e)),this.destroyed=!1,this._refreshPOT()}get source(){return this}get style(){return this._style}set style(e){var r,i;this.style!==e&&((r=this._style)==null||r.off("change",this._onStyleChange,this),this._style=e,(i=this._style)==null||i.on("change",this._onStyleChange,this),this._onStyleChange())}set maxAnisotropy(e){this._style.maxAnisotropy=e}get maxAnisotropy(){return this._style.maxAnisotropy}get addressMode(){return this._style.addressMode}set addressMode(e){this._style.addressMode=e}get repeatMode(){return this._style.addressMode}set repeatMode(e){this._style.addressMode=e}get magFilter(){return this._style.magFilter}set magFilter(e){this._style.magFilter=e}get minFilter(){return this._style.minFilter}set minFilter(e){this._style.minFilter=e}get mipmapFilter(){return this._style.mipmapFilter}set mipmapFilter(e){this._style.mipmapFilter=e}get lodMinClamp(){return this._style.lodMinClamp}set lodMinClamp(e){this._style.lodMinClamp=e}get lodMaxClamp(){return this._style.lodMaxClamp}set lodMaxClamp(e){this._style.lodMaxClamp=e}_onStyleChange(){this.emit("styleChange",this)}update(){if(this.resource){const e=this._resolution;if(this.resize(this.resourceWidth/e,this.resourceHeight/e))return}this.emit("update",this)}destroy(){this.destroyed=!0,this.unload(),this.emit("destroy",this),this._style&&(this._style.destroy(),this._style=null),this.uploadMethodId=null,this.resource=null,this.removeAllListeners()}unload(){var e,r;this._resourceId=Ne("resource"),this.emit("change",this),this.emit("unload",this);for(const i in this._gpuData)(r=(e=this._gpuData[i])==null?void 0:e.destroy)==null||r.call(e);this._gpuData=Object.create(null)}get resourceWidth(){const{resource:e}=this;return e.naturalWidth||e.videoWidth||e.displayWidth||e.width}get resourceHeight(){const{resource:e}=this;return e.naturalHeight||e.videoHeight||e.displayHeight||e.height}get resolution(){return this._resolution}set resolution(e){this._resolution!==e&&(this._resolution=e,this.width=this.pixelWidth/e,this.height=this.pixelHeight/e)}resize(e,r,i){i||(i=this._resolution),e||(e=this.width),r||(r=this.height);const s=Math.round(e*i),n=Math.round(r*i);return this.width=s/i,this.height=n/i,this._resolution=i,this.pixelWidth===s&&this.pixelHeight===n?!1:(this._refreshPOT(),this.pixelWidth=s,this.pixelHeight=n,this.emit("resize",this),this._resourceId=Ne("resource"),this.emit("change",this),!0)}updateMipmaps(){this.autoGenerateMipmaps&&this.mipLevelCount>1&&this.emit("updateMipmaps",this)}set wrapMode(e){this._style.wrapMode=e}get wrapMode(){return this._style.wrapMode}set scaleMode(e){this._style.scaleMode=e}get scaleMode(){return this._style.scaleMode}_refreshPOT(){this.isPowerOfTwo=Wd(this.pixelWidth)&&Wd(this.pixelHeight)}static test(e){throw new Error("Unimplemented")}};Ym.defaultOptions={resolution:1,format:"bgra8unorm",alphaMode:"premultiply-alpha-on-upload",dimensions:"2d",viewDimension:"2d",arrayLayerCount:1,mipLevelCount:1,autoGenerateMipmaps:!1,sampleCount:1,antialias:!1,autoGarbageCollect:!1};let zt=Ym;class el extends zt{constructor(e){const r=e.resource||new Float32Array(e.width*e.height*4);let i=e.format;i||(r instanceof Float32Array?i="rgba32float":r instanceof Int32Array||r instanceof Uint32Array?i="rgba32uint":r instanceof Int16Array||r instanceof Uint16Array?i="rgba16uint":(r instanceof Int8Array,i="bgra8unorm")),super({...e,resource:r,format:i}),this.uploadMethodId="buffer"}static test(e){return e instanceof Int8Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Float32Array}}el.extension=_e.TextureSource;const Hd=new ye;class bx{constructor(e,r){this.mapCoord=new ye,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,typeof r>"u"?this.clampMargin=e.width<10?0:.5:this.clampMargin=r,this.isSimple=!1,this.texture=e}get texture(){return this._texture}set texture(e){var r;this.texture!==e&&((r=this._texture)==null||r.removeListener("update",this.update,this),this._texture=e,this._texture.addListener("update",this.update,this),this.update())}multiplyUvs(e,r){r===void 0&&(r=e);const i=this.mapCoord;for(let s=0;s<e.length;s+=2){const n=e[s],a=e[s+1];r[s]=n*i.a+a*i.c+i.tx,r[s+1]=n*i.b+a*i.d+i.ty}return r}update(){const e=this._texture;this._updateID++;const r=e.uvs;this.mapCoord.set(r.x1-r.x0,r.y1-r.y0,r.x3-r.x0,r.y3-r.y0,r.x0,r.y0);const i=e.orig,s=e.trim;s&&(Hd.set(i.width/s.width,0,0,i.height/s.height,-s.x/s.width,-s.y/s.height),this.mapCoord.append(Hd));const n=e.source,a=this.uClampFrame,o=this.clampMargin/n._resolution,l=this.clampOffset/n._resolution;return a[0]=(e.frame.x+o+l)/n.width,a[1]=(e.frame.y+o+l)/n.height,a[2]=(e.frame.x+e.frame.width-o+l)/n.width,a[3]=(e.frame.y+e.frame.height-o+l)/n.height,this.uClampOffset[0]=this.clampOffset/n.pixelWidth,this.uClampOffset[1]=this.clampOffset/n.pixelHeight,this.isSimple=e.frame.width===n.width&&e.frame.height===n.height&&e.rotate===0,!0}}class Te extends Qt{constructor({source:e,label:r,frame:i,orig:s,trim:n,defaultAnchor:a,defaultBorders:o,rotate:l,dynamic:u}={}){if(super(),this.uid=Ne("texture"),this.uvs={x0:0,y0:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0},this.frame=new Xe,this.noFrame=!1,this.dynamic=!1,this.isTexture=!0,this.label=r,this.source=(e==null?void 0:e.source)??new zt,this.noFrame=!i,i)this.frame.copyFrom(i);else{const{width:d,height:c}=this._source;this.frame.width=d,this.frame.height=c}this.orig=s||this.frame,this.trim=n,this.rotate=l??0,this.defaultAnchor=a,this.defaultBorders=o,this.destroyed=!1,this.dynamic=u||!1,this.updateUvs()}set source(e){this._source&&this._source.off("resize",this.update,this),this._source=e,e.on("resize",this.update,this),this.emit("update",this)}get source(){return this._source}get textureMatrix(){return this._textureMatrix||(this._textureMatrix=new bx(this)),this._textureMatrix}get width(){return this.orig.width}get height(){return this.orig.height}updateUvs(){const{uvs:e,frame:r}=this,{width:i,height:s}=this._source,n=r.x/i,a=r.y/s,o=r.width/i,l=r.height/s;let u=this.rotate;if(u){const d=o/2,c=l/2,p=n+d,f=a+c;u=Se.add(u,Se.NW),e.x0=p+d*Se.uX(u),e.y0=f+c*Se.uY(u),u=Se.add(u,2),e.x1=p+d*Se.uX(u),e.y1=f+c*Se.uY(u),u=Se.add(u,2),e.x2=p+d*Se.uX(u),e.y2=f+c*Se.uY(u),u=Se.add(u,2),e.x3=p+d*Se.uX(u),e.y3=f+c*Se.uY(u)}else e.x0=n,e.y0=a,e.x1=n+o,e.y1=a,e.x2=n+o,e.y2=a+l,e.x3=n,e.y3=a+l}destroy(e=!1){this._source&&(this._source.off("resize",this.update,this),e&&(this._source.destroy(),this._source=null)),this._textureMatrix=null,this.destroyed=!0,this.emit("destroy",this),this.removeAllListeners()}update(){this.noFrame&&(this.frame.width=this._source.width,this.frame.height=this._source.height),this.updateUvs(),this.emit("update",this)}get baseTexture(){return $e(Ge,"Texture.baseTexture is now Texture.source"),this._source}}Te.EMPTY=new Te({label:"EMPTY",source:new zt({label:"EMPTY"})});Te.EMPTY.destroy=Fm;Te.WHITE=new Te({source:new el({resource:new Uint8Array([255,255,255,255]),width:1,height:1,alphaMode:"premultiply-alpha-on-upload",label:"WHITE"}),label:"WHITE"});Te.WHITE.destroy=Fm;function wx(t,e,r){const{width:i,height:s}=r.orig,n=r.trim;if(n){const a=n.width,o=n.height;t.minX=n.x-e._x*i,t.maxX=t.minX+a,t.minY=n.y-e._y*s,t.maxY=t.minY+o}else t.minX=-e._x*i,t.maxX=t.minX+i,t.minY=-e._y*s,t.maxY=t.minY+s}const jd=new ye;class Mt{constructor(e=1/0,r=1/0,i=-1/0,s=-1/0){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=jd,this.minX=e,this.minY=r,this.maxX=i,this.maxY=s}isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}get rectangle(){this._rectangle||(this._rectangle=new Xe);const e=this._rectangle;return this.minX>this.maxX||this.minY>this.maxY?(e.x=0,e.y=0,e.width=0,e.height=0):e.copyFromBounds(this),e}clear(){return this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=jd,this}set(e,r,i,s){this.minX=e,this.minY=r,this.maxX=i,this.maxY=s}addFrame(e,r,i,s,n){n||(n=this.matrix);const a=n.a,o=n.b,l=n.c,u=n.d,d=n.tx,c=n.ty;let p=this.minX,f=this.minY,m=this.maxX,y=this.maxY,b=a*e+l*r+d,_=o*e+u*r+c;b<p&&(p=b),_<f&&(f=_),b>m&&(m=b),_>y&&(y=_),b=a*i+l*r+d,_=o*i+u*r+c,b<p&&(p=b),_<f&&(f=_),b>m&&(m=b),_>y&&(y=_),b=a*e+l*s+d,_=o*e+u*s+c,b<p&&(p=b),_<f&&(f=_),b>m&&(m=b),_>y&&(y=_),b=a*i+l*s+d,_=o*i+u*s+c,b<p&&(p=b),_<f&&(f=_),b>m&&(m=b),_>y&&(y=_),this.minX=p,this.minY=f,this.maxX=m,this.maxY=y}addRect(e,r){this.addFrame(e.x,e.y,e.x+e.width,e.y+e.height,r)}addBounds(e,r){this.addFrame(e.minX,e.minY,e.maxX,e.maxY,r)}addBoundsMask(e){this.minX=this.minX>e.minX?this.minX:e.minX,this.minY=this.minY>e.minY?this.minY:e.minY,this.maxX=this.maxX<e.maxX?this.maxX:e.maxX,this.maxY=this.maxY<e.maxY?this.maxY:e.maxY}applyMatrix(e){const r=this.minX,i=this.minY,s=this.maxX,n=this.maxY,{a,b:o,c:l,d:u,tx:d,ty:c}=e;let p=a*r+l*i+d,f=o*r+u*i+c;this.minX=p,this.minY=f,this.maxX=p,this.maxY=f,p=a*s+l*i+d,f=o*s+u*i+c,this.minX=p<this.minX?p:this.minX,this.minY=f<this.minY?f:this.minY,this.maxX=p>this.maxX?p:this.maxX,this.maxY=f>this.maxY?f:this.maxY,p=a*r+l*n+d,f=o*r+u*n+c,this.minX=p<this.minX?p:this.minX,this.minY=f<this.minY?f:this.minY,this.maxX=p>this.maxX?p:this.maxX,this.maxY=f>this.maxY?f:this.maxY,p=a*s+l*n+d,f=o*s+u*n+c,this.minX=p<this.minX?p:this.minX,this.minY=f<this.minY?f:this.minY,this.maxX=p>this.maxX?p:this.maxX,this.maxY=f>this.maxY?f:this.maxY}fit(e){return this.minX<e.left&&(this.minX=e.left),this.maxX>e.right&&(this.maxX=e.right),this.minY<e.top&&(this.minY=e.top),this.maxY>e.bottom&&(this.maxY=e.bottom),this}fitBounds(e,r,i,s){return this.minX<e&&(this.minX=e),this.maxX>r&&(this.maxX=r),this.minY<i&&(this.minY=i),this.maxY>s&&(this.maxY=s),this}pad(e,r=e){return this.minX-=e,this.maxX+=e,this.minY-=r,this.maxY+=r,this}ceil(){return this.minX=Math.floor(this.minX),this.minY=Math.floor(this.minY),this.maxX=Math.ceil(this.maxX),this.maxY=Math.ceil(this.maxY),this}clone(){return new Mt(this.minX,this.minY,this.maxX,this.maxY)}scale(e,r=e){return this.minX*=e,this.minY*=r,this.maxX*=e,this.maxY*=r,this}get x(){return this.minX}set x(e){const r=this.maxX-this.minX;this.minX=e,this.maxX=e+r}get y(){return this.minY}set y(e){const r=this.maxY-this.minY;this.minY=e,this.maxY=e+r}get width(){return this.maxX-this.minX}set width(e){this.maxX=this.minX+e}get height(){return this.maxY-this.minY}set height(e){this.maxY=this.minY+e}get left(){return this.minX}get right(){return this.maxX}get top(){return this.minY}get bottom(){return this.maxY}get isPositive(){return this.maxX-this.minX>0&&this.maxY-this.minY>0}get isValid(){return this.minX+this.minY!==1/0}addVertexData(e,r,i,s){let n=this.minX,a=this.minY,o=this.maxX,l=this.maxY;s||(s=this.matrix);const u=s.a,d=s.b,c=s.c,p=s.d,f=s.tx,m=s.ty;for(let y=r;y<i;y+=2){const b=e[y],_=e[y+1],x=u*b+c*_+f,$=d*b+p*_+m;n=x<n?x:n,a=$<a?$:a,o=x>o?x:o,l=$>l?$:l}this.minX=n,this.minY=a,this.maxX=o,this.maxY=l}containsPoint(e,r){return this.minX<=e&&this.minY<=r&&this.maxX>=e&&this.maxY>=r}toString(){return`[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`}copyFrom(e){return this.minX=e.minX,this.minY=e.minY,this.maxX=e.maxX,this.maxY=e.maxY,this}}var xx={grad:.9,turn:360,rad:360/(2*Math.PI)},Ht=function(t){return typeof t=="string"?t.length>0:typeof t=="number"},Ye=function(t,e,r){return e===void 0&&(e=0),r===void 0&&(r=Math.pow(10,e)),Math.round(r*t)/r+0},_t=function(t,e,r){return e===void 0&&(e=0),r===void 0&&(r=1),t>r?r:t>e?t:e},Km=function(t){return(t=isFinite(t)?t%360:0)>0?t:t+360},Yd=function(t){return{r:_t(t.r,0,255),g:_t(t.g,0,255),b:_t(t.b,0,255),a:_t(t.a)}},Nn=function(t){return{r:Ye(t.r),g:Ye(t.g),b:Ye(t.b),a:Ye(t.a,3)}},vx=/^#([0-9a-f]{3,8})$/i,gs=function(t){var e=t.toString(16);return e.length<2?"0"+e:e},Zm=function(t){var e=t.r,r=t.g,i=t.b,s=t.a,n=Math.max(e,r,i),a=n-Math.min(e,r,i),o=a?n===e?(r-i)/a:n===r?2+(i-e)/a:4+(e-r)/a:0;return{h:60*(o<0?o+6:o),s:n?a/n*100:0,v:n/255*100,a:s}},Qm=function(t){var e=t.h,r=t.s,i=t.v,s=t.a;e=e/360*6,r/=100,i/=100;var n=Math.floor(e),a=i*(1-r),o=i*(1-(e-n)*r),l=i*(1-(1-e+n)*r),u=n%6;return{r:255*[i,o,a,a,l,i][u],g:255*[l,i,i,o,a,a][u],b:255*[a,a,l,i,i,o][u],a:s}},Xd=function(t){return{h:Km(t.h),s:_t(t.s,0,100),l:_t(t.l,0,100),a:_t(t.a)}},Kd=function(t){return{h:Ye(t.h),s:Ye(t.s),l:Ye(t.l),a:Ye(t.a,3)}},Zd=function(t){return Qm((r=(e=t).s,{h:e.h,s:(r*=((i=e.l)<50?i:100-i)/100)>0?2*r/(i+r)*100:0,v:i+r,a:e.a}));var e,r,i},Di=function(t){return{h:(e=Zm(t)).h,s:(s=(200-(r=e.s))*(i=e.v)/100)>0&&s<200?r*i/100/(s<=100?s:200-s)*100:0,l:s/2,a:e.a};var e,r,i,s},$x=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,kx=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Sx=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Cx=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,bo={string:[[function(t){var e=vx.exec(t);return e?(t=e[1]).length<=4?{r:parseInt(t[0]+t[0],16),g:parseInt(t[1]+t[1],16),b:parseInt(t[2]+t[2],16),a:t.length===4?Ye(parseInt(t[3]+t[3],16)/255,2):1}:t.length===6||t.length===8?{r:parseInt(t.substr(0,2),16),g:parseInt(t.substr(2,2),16),b:parseInt(t.substr(4,2),16),a:t.length===8?Ye(parseInt(t.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(t){var e=Sx.exec(t)||Cx.exec(t);return e?e[2]!==e[4]||e[4]!==e[6]?null:Yd({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:e[7]===void 0?1:Number(e[7])/(e[8]?100:1)}):null},"rgb"],[function(t){var e=$x.exec(t)||kx.exec(t);if(!e)return null;var r,i,s=Xd({h:(r=e[1],i=e[2],i===void 0&&(i="deg"),Number(r)*(xx[i]||1)),s:Number(e[3]),l:Number(e[4]),a:e[5]===void 0?1:Number(e[5])/(e[6]?100:1)});return Zd(s)},"hsl"]],object:[[function(t){var e=t.r,r=t.g,i=t.b,s=t.a,n=s===void 0?1:s;return Ht(e)&&Ht(r)&&Ht(i)?Yd({r:Number(e),g:Number(r),b:Number(i),a:Number(n)}):null},"rgb"],[function(t){var e=t.h,r=t.s,i=t.l,s=t.a,n=s===void 0?1:s;if(!Ht(e)||!Ht(r)||!Ht(i))return null;var a=Xd({h:Number(e),s:Number(r),l:Number(i),a:Number(n)});return Zd(a)},"hsl"],[function(t){var e=t.h,r=t.s,i=t.v,s=t.a,n=s===void 0?1:s;if(!Ht(e)||!Ht(r)||!Ht(i))return null;var a=(function(o){return{h:Km(o.h),s:_t(o.s,0,100),v:_t(o.v,0,100),a:_t(o.a)}})({h:Number(e),s:Number(r),v:Number(i),a:Number(n)});return Qm(a)},"hsv"]]},Qd=function(t,e){for(var r=0;r<e.length;r++){var i=e[r][0](t);if(i)return[i,e[r][1]]}return[null,void 0]},Tx=function(t){return typeof t=="string"?Qd(t.trim(),bo.string):typeof t=="object"&&t!==null?Qd(t,bo.object):[null,void 0]},Ln=function(t,e){var r=Di(t);return{h:r.h,s:_t(r.s+100*e,0,100),l:r.l,a:r.a}},Gn=function(t){return(299*t.r+587*t.g+114*t.b)/1e3/255},Jd=function(t,e){var r=Di(t);return{h:r.h,s:r.s,l:_t(r.l+100*e,0,100),a:r.a}},wo=(function(){function t(e){this.parsed=Tx(e)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return t.prototype.isValid=function(){return this.parsed!==null},t.prototype.brightness=function(){return Ye(Gn(this.rgba),2)},t.prototype.isDark=function(){return Gn(this.rgba)<.5},t.prototype.isLight=function(){return Gn(this.rgba)>=.5},t.prototype.toHex=function(){return e=Nn(this.rgba),r=e.r,i=e.g,s=e.b,a=(n=e.a)<1?gs(Ye(255*n)):"","#"+gs(r)+gs(i)+gs(s)+a;var e,r,i,s,n,a},t.prototype.toRgb=function(){return Nn(this.rgba)},t.prototype.toRgbString=function(){return e=Nn(this.rgba),r=e.r,i=e.g,s=e.b,(n=e.a)<1?"rgba("+r+", "+i+", "+s+", "+n+")":"rgb("+r+", "+i+", "+s+")";var e,r,i,s,n},t.prototype.toHsl=function(){return Kd(Di(this.rgba))},t.prototype.toHslString=function(){return e=Kd(Di(this.rgba)),r=e.h,i=e.s,s=e.l,(n=e.a)<1?"hsla("+r+", "+i+"%, "+s+"%, "+n+")":"hsl("+r+", "+i+"%, "+s+"%)";var e,r,i,s,n},t.prototype.toHsv=function(){return e=Zm(this.rgba),{h:Ye(e.h),s:Ye(e.s),v:Ye(e.v),a:Ye(e.a,3)};var e},t.prototype.invert=function(){return Lt({r:255-(e=this.rgba).r,g:255-e.g,b:255-e.b,a:e.a});var e},t.prototype.saturate=function(e){return e===void 0&&(e=.1),Lt(Ln(this.rgba,e))},t.prototype.desaturate=function(e){return e===void 0&&(e=.1),Lt(Ln(this.rgba,-e))},t.prototype.grayscale=function(){return Lt(Ln(this.rgba,-1))},t.prototype.lighten=function(e){return e===void 0&&(e=.1),Lt(Jd(this.rgba,e))},t.prototype.darken=function(e){return e===void 0&&(e=.1),Lt(Jd(this.rgba,-e))},t.prototype.rotate=function(e){return e===void 0&&(e=15),this.hue(this.hue()+e)},t.prototype.alpha=function(e){return typeof e=="number"?Lt({r:(r=this.rgba).r,g:r.g,b:r.b,a:e}):Ye(this.rgba.a,3);var r},t.prototype.hue=function(e){var r=Di(this.rgba);return typeof e=="number"?Lt({h:e,s:r.s,l:r.l,a:r.a}):Ye(r.h)},t.prototype.isEqual=function(e){return this.toHex()===Lt(e).toHex()},t})(),Lt=function(t){return t instanceof wo?t:new wo(t)},ec=[],Ex=function(t){t.forEach(function(e){ec.indexOf(e)<0&&(e(wo,bo),ec.push(e))})};function Ax(t,e){var r={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},i={};for(var s in r)i[r[s]]=s;var n={};t.prototype.toName=function(a){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var o,l,u=i[this.toHex()];if(u)return u;if(a!=null&&a.closest){var d=this.toRgb(),c=1/0,p="black";if(!n.length)for(var f in r)n[f]=new t(r[f]).toRgb();for(var m in r){var y=(o=d,l=n[m],Math.pow(o.r-l.r,2)+Math.pow(o.g-l.g,2)+Math.pow(o.b-l.b,2));y<c&&(c=y,p=m)}return p}},e.string.push([function(a){var o=a.toLowerCase(),l=o==="transparent"?"#0000":r[o];return l?new t(l).toRgb():null},"name"])}Ex([Ax]);const ti=class Ei{constructor(e=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=e}get red(){return this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get alpha(){return this._components[3]}setValue(e){return this.value=e,this}set value(e){if(e instanceof Ei)this._value=this._cloneSource(e._value),this._int=e._int,this._components.set(e._components);else{if(e===null)throw new Error("Cannot set Color#value to null");(this._value===null||!this._isSourceEqual(this._value,e))&&(this._value=this._cloneSource(e),this._normalize(this._value))}}get value(){return this._value}_cloneSource(e){return typeof e=="string"||typeof e=="number"||e instanceof Number||e===null?e:Array.isArray(e)||ArrayBuffer.isView(e)?e.slice(0):typeof e=="object"&&e!==null?{...e}:e}_isSourceEqual(e,r){const i=typeof e;if(i!==typeof r)return!1;if(i==="number"||i==="string"||e instanceof Number)return e===r;if(Array.isArray(e)&&Array.isArray(r)||ArrayBuffer.isView(e)&&ArrayBuffer.isView(r))return e.length!==r.length?!1:e.every((n,a)=>n===r[a]);if(e!==null&&r!==null){const n=Object.keys(e),a=Object.keys(r);return n.length!==a.length?!1:n.every(o=>e[o]===r[o])}return e===r}toRgba(){const[e,r,i,s]=this._components;return{r:e,g:r,b:i,a:s}}toRgb(){const[e,r,i]=this._components;return{r:e,g:r,b:i}}toRgbaString(){const[e,r,i]=this.toUint8RgbArray();return`rgba(${e},${r},${i},${this.alpha})`}toUint8RgbArray(e){const[r,i,s]=this._components;return this._arrayRgb||(this._arrayRgb=[]),e||(e=this._arrayRgb),e[0]=Math.round(r*255),e[1]=Math.round(i*255),e[2]=Math.round(s*255),e}toArray(e){this._arrayRgba||(this._arrayRgba=[]),e||(e=this._arrayRgba);const[r,i,s,n]=this._components;return e[0]=r,e[1]=i,e[2]=s,e[3]=n,e}toRgbArray(e){this._arrayRgb||(this._arrayRgb=[]),e||(e=this._arrayRgb);const[r,i,s]=this._components;return e[0]=r,e[1]=i,e[2]=s,e}toNumber(){return this._int}toBgrNumber(){const[e,r,i]=this.toUint8RgbArray();return(i<<16)+(r<<8)+e}toLittleEndianNumber(){const e=this._int;return(e>>16)+(e&65280)+((e&255)<<16)}multiply(e){const[r,i,s,n]=Ei._temp.setValue(e)._components;return this._components[0]*=r,this._components[1]*=i,this._components[2]*=s,this._components[3]*=n,this._refreshInt(),this._value=null,this}premultiply(e,r=!0){return r&&(this._components[0]*=e,this._components[1]*=e,this._components[2]*=e),this._components[3]=e,this._refreshInt(),this._value=null,this}toPremultiplied(e,r=!0){if(e===1)return(255<<24)+this._int;if(e===0)return r?0:this._int;let i=this._int>>16&255,s=this._int>>8&255,n=this._int&255;return r&&(i=i*e+.5|0,s=s*e+.5|0,n=n*e+.5|0),(e*255<<24)+(i<<16)+(s<<8)+n}toHex(){const e=this._int.toString(16);return`#${"000000".substring(0,6-e.length)+e}`}toHexa(){const r=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-r.length)+r}setAlpha(e){return this._components[3]=this._clamp(e),this}_normalize(e){let r,i,s,n;if((typeof e=="number"||e instanceof Number)&&e>=0&&e<=16777215){const a=e;r=(a>>16&255)/255,i=(a>>8&255)/255,s=(a&255)/255,n=1}else if((Array.isArray(e)||e instanceof Float32Array)&&e.length>=3&&e.length<=4)e=this._clamp(e),[r,i,s,n=1]=e;else if((e instanceof Uint8Array||e instanceof Uint8ClampedArray)&&e.length>=3&&e.length<=4)e=this._clamp(e,0,255),[r,i,s,n=255]=e,r/=255,i/=255,s/=255,n/=255;else if(typeof e=="string"||typeof e=="object"){if(typeof e=="string"){const o=Ei.HEX_PATTERN.exec(e);o&&(e=`#${o[2]}`)}const a=Lt(e);a.isValid()&&({r,g:i,b:s,a:n}=a.rgba,r/=255,i/=255,s/=255)}if(r!==void 0)this._components[0]=r,this._components[1]=i,this._components[2]=s,this._components[3]=n,this._refreshInt();else throw new Error(`Unable to convert color ${e}`)}_refreshInt(){this._clamp(this._components);const[e,r,i]=this._components;this._int=(e*255<<16)+(r*255<<8)+(i*255|0)}_clamp(e,r=0,i=1){return typeof e=="number"?Math.min(Math.max(e,r),i):(e.forEach((s,n)=>{e[n]=Math.min(Math.max(s,r),i)}),e)}static isColorLike(e){return typeof e=="number"||typeof e=="string"||e instanceof Number||e instanceof Ei||Array.isArray(e)||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Float32Array||e.r!==void 0&&e.g!==void 0&&e.b!==void 0||e.r!==void 0&&e.g!==void 0&&e.b!==void 0&&e.a!==void 0||e.h!==void 0&&e.s!==void 0&&e.l!==void 0||e.h!==void 0&&e.s!==void 0&&e.l!==void 0&&e.a!==void 0||e.h!==void 0&&e.s!==void 0&&e.v!==void 0||e.h!==void 0&&e.s!==void 0&&e.v!==void 0&&e.a!==void 0}};ti.shared=new ti;ti._temp=new ti;ti.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;let De=ti;const Ix={cullArea:null,cullable:!1,cullableChildren:!0};let Un=0;const tc=500;function ht(...t){Un!==tc&&(Un++,Un===tc?console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS."):console.warn("PixiJS Warning: ",...t))}const nn={_registeredResources:new Set,register(t){this._registeredResources.add(t)},unregister(t){this._registeredResources.delete(t)},release(){this._registeredResources.forEach(t=>t.clear())},get registeredCount(){return this._registeredResources.size},isRegistered(t){return this._registeredResources.has(t)},reset(){this._registeredResources.clear()}};class Mx{constructor(e,r){this._pool=[],this._count=0,this._index=0,this._classType=e,r&&this.prepopulate(r)}prepopulate(e){for(let r=0;r<e;r++)this._pool[this._index++]=new this._classType;this._count+=e}get(e){var i;let r;return this._index>0?r=this._pool[--this._index]:(r=new this._classType,this._count++),(i=r.init)==null||i.call(r,e),r}return(e){var r;(r=e.reset)==null||r.call(e),this._pool[this._index++]=e}get totalSize(){return this._count}get totalFree(){return this._index}get totalUsed(){return this._count-this._index}clear(){if(this._pool.length>0&&this._pool[0].destroy)for(let e=0;e<this._index;e++)this._pool[e].destroy();this._pool.length=0,this._count=0,this._index=0}}class zx{constructor(){this._poolsByClass=new Map}prepopulate(e,r){this.getPool(e).prepopulate(r)}get(e,r){return this.getPool(e).get(r)}return(e){this.getPool(e.constructor).return(e)}getPool(e){return this._poolsByClass.has(e)||this._poolsByClass.set(e,new Mx(e)),this._poolsByClass.get(e)}stats(){const e={};return this._poolsByClass.forEach(r=>{const i=e[r._classType.name]?r._classType.name+r._classType.ID:r._classType.name;e[i]={free:r.totalFree,used:r.totalUsed,size:r.totalSize}}),e}clear(){this._poolsByClass.forEach(e=>e.clear()),this._poolsByClass.clear()}}const lt=new zx;nn.register(lt);const Px={get isCachedAsTexture(){var t;return!!((t=this.renderGroup)!=null&&t.isCachedAsTexture)},cacheAsTexture(t){typeof t=="boolean"&&t===!1?this.disableRenderGroup():(this.enableRenderGroup(),this.renderGroup.enableCacheAsTexture(t===!0?{}:t))},updateCacheTexture(){var t;(t=this.renderGroup)==null||t.updateCacheTexture()},get cacheAsBitmap(){return this.isCachedAsTexture},set cacheAsBitmap(t){$e("v8.6.0","cacheAsBitmap is deprecated, use cacheAsTexture instead."),this.cacheAsTexture(t)}};function Rx(t,e,r){const i=t.length;let s;if(e>=i||r===0)return;r=e+r>i?i-e:r;const n=i-r;for(s=e;s<n;++s)t[s]=t[s+r];t.length=n}const Bx={allowChildren:!0,removeChildren(t=0,e){var n;const r=e??this.children.length,i=r-t,s=[];if(i>0&&i<=r){for(let o=r-1;o>=t;o--){const l=this.children[o];l&&(s.push(l),l.parent=null)}Rx(this.children,t,r);const a=this.renderGroup||this.parentRenderGroup;a&&a.removeChildren(s);for(let o=0;o<s.length;++o){const l=s[o];(n=l.parentRenderLayer)==null||n.detach(l),this.emit("childRemoved",l,this,o),s[o].emit("removed",this)}return s.length>0&&this._didViewChangeTick++,s}else if(i===0&&this.children.length===0)return s;throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},removeChildAt(t){const e=this.getChildAt(t);return this.removeChild(e)},getChildAt(t){if(t<0||t>=this.children.length)throw new Error(`getChildAt: Index (${t}) does not exist.`);return this.children[t]},setChildIndex(t,e){if(e<0||e>=this.children.length)throw new Error(`The index ${e} supplied is out of bounds ${this.children.length}`);this.getChildIndex(t),this.addChildAt(t,e)},getChildIndex(t){const e=this.children.indexOf(t);if(e===-1)throw new Error("The supplied Container must be a child of the caller");return e},addChildAt(t,e){this.allowChildren||$e(Ge,"addChildAt: Only Containers will be allowed to add children in v8.0.0");const{children:r}=this;if(e<0||e>r.length)throw new Error(`${t}addChildAt: The index ${e} supplied is out of bounds ${r.length}`);if(t.parent){const s=t.parent.children.indexOf(t);if(t.parent===this&&s===e)return t;s!==-1&&t.parent.children.splice(s,1)}e===r.length?r.push(t):r.splice(e,0,t),t.parent=this,t.didChange=!0,t._updateFlags=15;const i=this.renderGroup||this.parentRenderGroup;return i&&i.addChild(t),this.sortableChildren&&(this.sortDirty=!0),this.emit("childAdded",t,this,e),t.emit("added",this),t},swapChildren(t,e){if(t===e)return;const r=this.getChildIndex(t),i=this.getChildIndex(e);this.children[r]=e,this.children[i]=t;const s=this.renderGroup||this.parentRenderGroup;s&&(s.structureDidChange=!0),this._didContainerChangeTick++},removeFromParent(){var t;(t=this.parent)==null||t.removeChild(this)},reparentChild(...t){return t.length===1?this.reparentChildAt(t[0],this.children.length):(t.forEach(e=>this.reparentChildAt(e,this.children.length)),t[0])},reparentChildAt(t,e){if(t.parent===this)return this.setChildIndex(t,e),t;const r=t.worldTransform.clone();t.removeFromParent(),this.addChildAt(t,e);const i=this.worldTransform.clone();return i.invert(),r.prepend(i),t.setFromMatrix(r),t},replaceChild(t,e){t.updateLocalTransform(),this.addChildAt(e,this.getChildIndex(t)),e.setFromMatrix(t.localTransform),e.updateLocalTransform(),this.removeChild(t)}},Ox={collectRenderables(t,e,r){this.parentRenderLayer&&this.parentRenderLayer!==r||this.globalDisplayStatus<7||!this.includeInBuild||(this.sortableChildren&&this.sortChildren(),this.isSimple?this.collectRenderablesSimple(t,e,r):this.renderGroup?e.renderPipes.renderGroup.addRenderGroup(this.renderGroup,t):this.collectRenderablesWithEffects(t,e,r))},collectRenderablesSimple(t,e,r){const i=this.children,s=i.length;for(let n=0;n<s;n++)i[n].collectRenderables(t,e,r)},collectRenderablesWithEffects(t,e,r){const{renderPipes:i}=e;for(let s=0;s<this.effects.length;s++){const n=this.effects[s];i[n.pipe].push(n,this,t)}this.collectRenderablesSimple(t,e,r);for(let s=this.effects.length-1;s>=0;s--){const n=this.effects[s];i[n.pipe].pop(n,this,t)}}};class rc{constructor(){this.pipe="filter",this.priority=1}destroy(){for(let e=0;e<this.filters.length;e++)this.filters[e].destroy();this.filters=null,this.filterArea=null}}class Dx{constructor(){this._effectClasses=[],this._tests=[],this._initialized=!1}init(){this._initialized||(this._initialized=!0,this._effectClasses.forEach(e=>{this.add({test:e.test,maskClass:e})}))}add(e){this._tests.push(e)}getMaskEffect(e){this._initialized||this.init();for(let r=0;r<this._tests.length;r++){const i=this._tests[r];if(i.test(e))return lt.get(i.maskClass,e)}return e}returnMaskEffect(e){lt.return(e)}}const xo=new Dx;Ze.handleByList(_e.MaskEffect,xo._effectClasses);const Nx={_maskEffect:null,_maskOptions:{inverse:!1},_filterEffect:null,effects:[],_markStructureAsChanged(){const t=this.renderGroup||this.parentRenderGroup;t&&(t.structureDidChange=!0)},addEffect(t){this.effects.indexOf(t)===-1&&(this.effects.push(t),this.effects.sort((r,i)=>r.priority-i.priority),this._markStructureAsChanged(),this._updateIsSimple())},removeEffect(t){const e=this.effects.indexOf(t);e!==-1&&(this.effects.splice(e,1),this._markStructureAsChanged(),this._updateIsSimple())},set mask(t){const e=this._maskEffect;(e==null?void 0:e.mask)!==t&&(e&&(this.removeEffect(e),xo.returnMaskEffect(e),this._maskEffect=null),t!=null&&(this._maskEffect=xo.getMaskEffect(t),this.addEffect(this._maskEffect)))},get mask(){var t;return(t=this._maskEffect)==null?void 0:t.mask},setMask(t){this._maskOptions={...this._maskOptions,...t},t.mask&&(this.mask=t.mask),this._markStructureAsChanged()},set filters(t){var n;!Array.isArray(t)&&t&&(t=[t]);const e=this._filterEffect||(this._filterEffect=new rc);t=t;const r=(t==null?void 0:t.length)>0,i=((n=e.filters)==null?void 0:n.length)>0,s=r!==i;t=Array.isArray(t)?t.slice(0):t,e.filters=Object.freeze(t),s&&(r?this.addEffect(e):(this.removeEffect(e),e.filters=t??null))},get filters(){var t;return(t=this._filterEffect)==null?void 0:t.filters},set filterArea(t){this._filterEffect||(this._filterEffect=new rc),this._filterEffect.filterArea=t},get filterArea(){var t;return(t=this._filterEffect)==null?void 0:t.filterArea}},Lx={label:null,get name(){return $e(Ge,"Container.name property has been removed, use Container.label instead"),this.label},set name(t){$e(Ge,"Container.name property has been removed, use Container.label instead"),this.label=t},getChildByName(t,e=!1){return this.getChildByLabel(t,e)},getChildByLabel(t,e=!1){const r=this.children;for(let i=0;i<r.length;i++){const s=r[i];if(s.label===t||t instanceof RegExp&&t.test(s.label))return s}if(e)for(let i=0;i<r.length;i++){const n=r[i].getChildByLabel(t,!0);if(n)return n}return null},getChildrenByLabel(t,e=!1,r=[]){const i=this.children;for(let s=0;s<i.length;s++){const n=i[s];(n.label===t||t instanceof RegExp&&t.test(n.label))&&r.push(n)}if(e)for(let s=0;s<i.length;s++)i[s].getChildrenByLabel(t,!0,r);return r}},nt=lt.getPool(ye),Xt=lt.getPool(Mt),Gx=new ye,Ux={getFastGlobalBounds(t,e){e||(e=new Mt),e.clear(),this._getGlobalBoundsRecursive(!!t,e,this.parentRenderLayer),e.isValid||e.set(0,0,0,0);const r=this.renderGroup||this.parentRenderGroup;return e.applyMatrix(r.worldTransform),e},_getGlobalBoundsRecursive(t,e,r){let i=e;if(t&&this.parentRenderLayer&&this.parentRenderLayer!==r||this.localDisplayStatus!==7||!this.measurable)return;const s=!!this.effects.length;if((this.renderGroup||s)&&(i=Xt.get().clear()),this.boundsArea)e.addRect(this.boundsArea,this.worldTransform);else{if(this.renderPipeId){const a=this.bounds;i.addFrame(a.minX,a.minY,a.maxX,a.maxY,this.groupTransform)}const n=this.children;for(let a=0;a<n.length;a++)n[a]._getGlobalBoundsRecursive(t,i,r)}if(s){let n=!1;const a=this.renderGroup||this.parentRenderGroup;for(let o=0;o<this.effects.length;o++)this.effects[o].addBounds&&(n||(n=!0,i.applyMatrix(a.worldTransform)),this.effects[o].addBounds(i,!0));n&&i.applyMatrix(a.worldTransform.copyTo(Gx).invert()),e.addBounds(i),Xt.return(i)}else this.renderGroup&&(e.addBounds(i,this.relativeGroupTransform),Xt.return(i))}};function Jm(t,e,r){r.clear();let i,s;return t.parent?e?i=t.parent.worldTransform:(s=nt.get().identity(),i=tl(t,s)):i=ye.IDENTITY,eg(t,r,i,e),s&&nt.return(s),r.isValid||r.set(0,0,0,0),r}function eg(t,e,r,i){var o,l;if(!t.visible||!t.measurable)return;let s;i?s=t.worldTransform:(t.updateLocalTransform(),s=nt.get(),s.appendFrom(t.localTransform,r));const n=e,a=!!t.effects.length;if(a&&(e=Xt.get().clear()),t.boundsArea)e.addRect(t.boundsArea,s);else{const u=t.bounds;u&&!u.isEmpty()&&(e.matrix=s,e.addBounds(u));for(let d=0;d<t.children.length;d++)eg(t.children[d],e,s,i)}if(a){for(let u=0;u<t.effects.length;u++)(l=(o=t.effects[u]).addBounds)==null||l.call(o,e);n.addBounds(e,ye.IDENTITY),Xt.return(e)}i||nt.return(s)}function tl(t,e){const r=t.parent;return r&&(tl(r,e),r.updateLocalTransform(),e.append(r.localTransform)),e}function tg(t,e){if(t===16777215||!e)return e;if(e===16777215||!t)return t;const r=t>>16&255,i=t>>8&255,s=t&255,n=e>>16&255,a=e>>8&255,o=e&255,l=r*n/255|0,u=i*a/255|0,d=s*o/255|0;return(l<<16)+(u<<8)+d}const ic=16777215;function sc(t,e){return t===ic?e:e===ic?t:tg(t,e)}function Us(t){return((t&255)<<16)+(t&65280)+(t>>16&255)}const Vx={getGlobalAlpha(t){if(t)return this.renderGroup?this.renderGroup.worldAlpha:this.parentRenderGroup?this.parentRenderGroup.worldAlpha*this.alpha:this.alpha;let e=this.alpha,r=this.parent;for(;r;)e*=r.alpha,r=r.parent;return e},getGlobalTransform(t=new ye,e){if(e)return t.copyFrom(this.worldTransform);this.updateLocalTransform();const r=tl(this,nt.get().identity());return t.appendFrom(this.localTransform,r),nt.return(r),t},getGlobalTint(t){if(t)return this.renderGroup?Us(this.renderGroup.worldColor):this.parentRenderGroup?Us(sc(this.localColor,this.parentRenderGroup.worldColor)):this.tint;let e=this.localColor,r=this.parent;for(;r;)e=sc(e,r.localColor),r=r.parent;return Us(e)}};function rg(t,e,r){return e.clear(),r||(r=ye.IDENTITY),ig(t,e,r,t,!0),e.isValid||e.set(0,0,0,0),e}function ig(t,e,r,i,s){var l,u;let n;if(s)n=nt.get(),n=r.copyTo(n);else{if(!t.visible||!t.measurable)return;t.updateLocalTransform();const d=t.localTransform;n=nt.get(),n.appendFrom(d,r)}const a=e,o=!!t.effects.length;if(o&&(e=Xt.get().clear()),t.boundsArea)e.addRect(t.boundsArea,n);else{t.renderPipeId&&(e.matrix=n,e.addBounds(t.bounds));const d=t.children;for(let c=0;c<d.length;c++)ig(d[c],e,n,i,!1)}if(o){for(let d=0;d<t.effects.length;d++)(u=(l=t.effects[d]).addLocalBounds)==null||u.call(l,e,i);a.addBounds(e,ye.IDENTITY),Xt.return(e)}nt.return(n)}function sg(t,e){const r=t.children;for(let i=0;i<r.length;i++){const s=r[i],n=s.uid,a=(s._didViewChangeTick&65535)<<16|s._didContainerChangeTick&65535,o=e.index;(e.data[o]!==n||e.data[o+1]!==a)&&(e.data[e.index]=n,e.data[e.index+1]=a,e.didChange=!0),e.index=o+2,s.children.length&&sg(s,e)}return e.didChange}const Fx=new ye,Wx={_localBoundsCacheId:-1,_localBoundsCacheData:null,_setWidth(t,e){const r=Math.sign(this.scale.x)||1;e!==0?this.scale.x=t/e*r:this.scale.x=r},_setHeight(t,e){const r=Math.sign(this.scale.y)||1;e!==0?this.scale.y=t/e*r:this.scale.y=r},getLocalBounds(){this._localBoundsCacheData||(this._localBoundsCacheData={data:[],index:1,didChange:!1,localBounds:new Mt});const t=this._localBoundsCacheData;return t.index=1,t.didChange=!1,t.data[0]!==this._didViewChangeTick&&(t.didChange=!0,t.data[0]=this._didViewChangeTick),sg(this,t),t.didChange&&rg(this,t.localBounds,Fx),t.localBounds},getBounds(t,e){return Jm(this,t,e||new Mt)}},qx={_onRender:null,set onRender(t){const e=this.renderGroup||this.parentRenderGroup;if(!t){this._onRender&&(e==null||e.removeOnRender(this)),this._onRender=null;return}this._onRender||e==null||e.addOnRender(this),this._onRender=t},get onRender(){return this._onRender}},Hx={_zIndex:0,sortDirty:!1,sortableChildren:!1,get zIndex(){return this._zIndex},set zIndex(t){this._zIndex!==t&&(this._zIndex=t,this.depthOfChildModified())},depthOfChildModified(){this.parent&&(this.parent.sortableChildren=!0,this.parent.sortDirty=!0),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0)},sortChildren(){this.sortDirty&&(this.sortDirty=!1,this.children.sort(jx))}};function jx(t,e){return t._zIndex-e._zIndex}const Yx={getGlobalPosition(t=new it,e=!1){return this.parent?this.parent.toGlobal(this._position,t,e):(t.x=this._position.x,t.y=this._position.y),t},toGlobal(t,e,r=!1){const i=this.getGlobalTransform(nt.get(),r);return e=i.apply(t,e),nt.return(i),e},toLocal(t,e,r,i){e&&(t=e.toGlobal(t,r,i));const s=this.getGlobalTransform(nt.get(),i);return r=s.applyInverse(t,r),nt.return(s),r}};class rl{constructor(){this.uid=Ne("instructionSet"),this.instructions=[],this.instructionSize=0,this.renderables=[],this.gcTick=0}reset(){this.instructionSize=0}destroy(){this.instructions.length=0,this.renderables.length=0,this.renderPipes=null,this.gcTick=0}add(e){this.instructions[this.instructionSize++]=e}log(){this.instructions.length=this.instructionSize,console.table(this.instructions,["type","action"])}}let Xx=0;class Kx{constructor(e){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=e||{},this.enableFullScreen=!1,this.textureStyle=new jm(this.textureOptions)}createTexture(e,r,i){const s=new zt({...this.textureOptions,width:e,height:r,resolution:1,antialias:i,autoGarbageCollect:!1});return new Te({source:s,label:`texturePool_${Xx++}`})}getOptimalTexture(e,r,i=1,s){let n=Math.ceil(e*i-1e-6),a=Math.ceil(r*i-1e-6);n=Fd(n),a=Fd(a);const o=(n<<17)+(a<<1)+(s?1:0);this._texturePool[o]||(this._texturePool[o]=[]);let l=this._texturePool[o].pop();return l||(l=this.createTexture(n,a,s)),l.source._resolution=i,l.source.width=n/i,l.source.height=a/i,l.source.pixelWidth=n,l.source.pixelHeight=a,l.frame.x=0,l.frame.y=0,l.frame.width=e,l.frame.height=r,l.updateUvs(),this._poolKeyHash[l.uid]=o,l}getSameSizeTexture(e,r=!1){const i=e.source;return this.getOptimalTexture(e.width,e.height,i._resolution,r)}returnTexture(e,r=!1){const i=this._poolKeyHash[e.uid];r&&(e.source.style=this.textureStyle),this._texturePool[i].push(e)}clear(e){if(e=e!==!1,e)for(const r in this._texturePool){const i=this._texturePool[r];if(i)for(let s=0;s<i.length;s++)i[s].destroy(!0)}this._texturePool={}}}const ng=new Kx;nn.register(ng);class Zx{constructor(){this.renderPipeId="renderGroup",this.root=null,this.canBundle=!1,this.renderGroupParent=null,this.renderGroupChildren=[],this.worldTransform=new ye,this.worldColorAlpha=4294967295,this.worldColor=16777215,this.worldAlpha=1,this.childrenToUpdate=Object.create(null),this.updateTick=0,this.gcTick=0,this.childrenRenderablesToUpdate={list:[],index:0},this.structureDidChange=!0,this.instructionSet=new rl,this._onRenderContainers=[],this.textureNeedsUpdate=!0,this.isCachedAsTexture=!1,this._matrixDirty=7}init(e){this.root=e,e._onRender&&this.addOnRender(e),e.didChange=!0;const r=e.children;for(let i=0;i<r.length;i++){const s=r[i];s._updateFlags=15,this.addChild(s)}}enableCacheAsTexture(e={}){this.textureOptions=e,this.isCachedAsTexture=!0,this.textureNeedsUpdate=!0}disableCacheAsTexture(){this.isCachedAsTexture=!1,this.texture&&(ng.returnTexture(this.texture,!0),this.texture=null)}updateCacheTexture(){this.textureNeedsUpdate=!0;const e=this._parentCacheAsTextureRenderGroup;e&&!e.textureNeedsUpdate&&e.updateCacheTexture()}reset(){this.renderGroupChildren.length=0;for(const e in this.childrenToUpdate){const r=this.childrenToUpdate[e];r.list.fill(null),r.index=0}this.childrenRenderablesToUpdate.index=0,this.childrenRenderablesToUpdate.list.fill(null),this.root=null,this.updateTick=0,this.structureDidChange=!0,this._onRenderContainers.length=0,this.renderGroupParent=null,this.disableCacheAsTexture()}get localTransform(){return this.root.localTransform}addRenderGroupChild(e){e.renderGroupParent&&e.renderGroupParent._removeRenderGroupChild(e),e.renderGroupParent=this,this.renderGroupChildren.push(e)}_removeRenderGroupChild(e){const r=this.renderGroupChildren.indexOf(e);r>-1&&this.renderGroupChildren.splice(r,1),e.renderGroupParent=null}addChild(e){if(this.structureDidChange=!0,e.parentRenderGroup=this,e.updateTick=-1,e.parent===this.root?e.relativeRenderGroupDepth=1:e.relativeRenderGroupDepth=e.parent.relativeRenderGroupDepth+1,e.didChange=!0,this.onChildUpdate(e),e.renderGroup){this.addRenderGroupChild(e.renderGroup);return}e._onRender&&this.addOnRender(e);const r=e.children;for(let i=0;i<r.length;i++)this.addChild(r[i])}removeChild(e){if(this.structureDidChange=!0,e._onRender&&(e.renderGroup||this.removeOnRender(e)),e.parentRenderGroup=null,e.renderGroup){this._removeRenderGroupChild(e.renderGroup);return}const r=e.children;for(let i=0;i<r.length;i++)this.removeChild(r[i])}removeChildren(e){for(let r=0;r<e.length;r++)this.removeChild(e[r])}onChildUpdate(e){let r=this.childrenToUpdate[e.relativeRenderGroupDepth];r||(r=this.childrenToUpdate[e.relativeRenderGroupDepth]={index:0,list:[]}),r.list[r.index++]=e}updateRenderable(e){e.globalDisplayStatus<7||(this.instructionSet.renderPipes[e.renderPipeId].updateRenderable(e),e.didViewUpdate=!1)}onChildViewUpdate(e){this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++]=e}get isRenderable(){return this.root.localDisplayStatus===7&&this.worldAlpha>0}addOnRender(e){this._onRenderContainers.push(e)}removeOnRender(e){this._onRenderContainers.splice(this._onRenderContainers.indexOf(e),1)}runOnRender(e){for(let r=0;r<this._onRenderContainers.length;r++)this._onRenderContainers[r]._onRender(e)}destroy(){this.disableCacheAsTexture(),this.renderGroupParent=null,this.root=null,this.childrenRenderablesToUpdate=null,this.childrenToUpdate=null,this.renderGroupChildren=null,this._onRenderContainers=null,this.instructionSet=null}getChildren(e=[]){const r=this.root.children;for(let i=0;i<r.length;i++)this._getChildren(r[i],e);return e}_getChildren(e,r=[]){if(r.push(e),e.renderGroup)return r;const i=e.children;for(let s=0;s<i.length;s++)this._getChildren(i[s],r);return r}invalidateMatrices(){this._matrixDirty=7}get inverseWorldTransform(){return(this._matrixDirty&1)===0?this._inverseWorldTransform:(this._matrixDirty&=-2,this._inverseWorldTransform||(this._inverseWorldTransform=new ye),this._inverseWorldTransform.copyFrom(this.worldTransform).invert())}get textureOffsetInverseTransform(){return(this._matrixDirty&2)===0?this._textureOffsetInverseTransform:(this._matrixDirty&=-3,this._textureOffsetInverseTransform||(this._textureOffsetInverseTransform=new ye),this._textureOffsetInverseTransform.copyFrom(this.inverseWorldTransform).translate(-this._textureBounds.x,-this._textureBounds.y))}get inverseParentTextureTransform(){if((this._matrixDirty&4)===0)return this._inverseParentTextureTransform;this._matrixDirty&=-5;const e=this._parentCacheAsTextureRenderGroup;return e?(this._inverseParentTextureTransform||(this._inverseParentTextureTransform=new ye),this._inverseParentTextureTransform.copyFrom(this.worldTransform).prepend(e.inverseWorldTransform).translate(-e._textureBounds.x,-e._textureBounds.y)):this.worldTransform}get cacheToLocalTransform(){return this.isCachedAsTexture?this.textureOffsetInverseTransform:this._parentCacheAsTextureRenderGroup?this._parentCacheAsTextureRenderGroup.textureOffsetInverseTransform:null}}function Qx(t,e,r={}){for(const i in e)!r[i]&&e[i]!==void 0&&(t[i]=e[i])}const Vn=new rt(null),ys=new rt(null),Fn=new rt(null,1,1),_s=new rt(null),nc=1,Jx=2,Wn=4;class Ke extends Qt{constructor(e={}){var r,i;super(),this.uid=Ne("renderable"),this._updateFlags=15,this.renderGroup=null,this.parentRenderGroup=null,this.parentRenderGroupIndex=0,this.didChange=!1,this.didViewUpdate=!1,this.relativeRenderGroupDepth=0,this.children=[],this.parent=null,this.includeInBuild=!0,this.measurable=!0,this.isSimple=!0,this.parentRenderLayer=null,this.updateTick=-1,this.localTransform=new ye,this.relativeGroupTransform=new ye,this.groupTransform=this.relativeGroupTransform,this.destroyed=!1,this._position=new rt(this,0,0),this._scale=Fn,this._pivot=ys,this._origin=_s,this._skew=Vn,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._rotation=0,this.localColor=16777215,this.localAlpha=1,this.groupAlpha=1,this.groupColor=16777215,this.groupColorAlpha=4294967295,this.localBlendMode="inherit",this.groupBlendMode="normal",this.localDisplayStatus=7,this.globalDisplayStatus=7,this._didContainerChangeTick=0,this._didViewChangeTick=0,this._didLocalTransformChangeId=-1,this.effects=[],Qx(this,e,{children:!0,parent:!0,effects:!0}),(r=e.children)==null||r.forEach(s=>this.addChild(s)),(i=e.parent)==null||i.addChild(this)}static mixin(e){$e("8.8.0","Container.mixin is deprecated, please use extensions.mixin instead."),Ze.mixin(Ke,e)}set _didChangeId(e){this._didViewChangeTick=e>>12&4095,this._didContainerChangeTick=e&4095}get _didChangeId(){return this._didContainerChangeTick&4095|(this._didViewChangeTick&4095)<<12}addChild(...e){if(this.allowChildren||$e(Ge,"addChild: Only Containers will be allowed to add children in v8.0.0"),e.length>1){for(let s=0;s<e.length;s++)this.addChild(e[s]);return e[0]}const r=e[0],i=this.renderGroup||this.parentRenderGroup;return r.parent===this?(this.children.splice(this.children.indexOf(r),1),this.children.push(r),i&&(i.structureDidChange=!0),r):(r.parent&&r.parent.removeChild(r),this.children.push(r),this.sortableChildren&&(this.sortDirty=!0),r.parent=this,r.didChange=!0,r._updateFlags=15,i&&i.addChild(r),this.emit("childAdded",r,this,this.children.length-1),r.emit("added",this),this._didViewChangeTick++,r._zIndex!==0&&r.depthOfChildModified(),r)}removeChild(...e){if(e.length>1){for(let s=0;s<e.length;s++)this.removeChild(e[s]);return e[0]}const r=e[0],i=this.children.indexOf(r);return i>-1&&(this._didViewChangeTick++,this.children.splice(i,1),this.renderGroup?this.renderGroup.removeChild(r):this.parentRenderGroup&&this.parentRenderGroup.removeChild(r),r.parentRenderLayer&&r.parentRenderLayer.detach(r),r.parent=null,this.emit("childRemoved",r,this,i),r.emit("removed",this)),r}_onUpdate(e){e&&e===this._skew&&this._updateSkew(),this._didContainerChangeTick++,!this.didChange&&(this.didChange=!0,this.parentRenderGroup&&this.parentRenderGroup.onChildUpdate(this))}set isRenderGroup(e){!!this.renderGroup!==e&&(e?this.enableRenderGroup():this.disableRenderGroup())}get isRenderGroup(){return!!this.renderGroup}enableRenderGroup(){if(this.renderGroup)return;const e=this.parentRenderGroup;e==null||e.removeChild(this),this.renderGroup=lt.get(Zx,this),this.groupTransform=ye.IDENTITY,e==null||e.addChild(this),this._updateIsSimple()}disableRenderGroup(){if(!this.renderGroup)return;const e=this.parentRenderGroup;e==null||e.removeChild(this),lt.return(this.renderGroup),this.renderGroup=null,this.groupTransform=this.relativeGroupTransform,e==null||e.addChild(this),this._updateIsSimple()}_updateIsSimple(){this.isSimple=!this.renderGroup&&this.effects.length===0}get worldTransform(){return this._worldTransform||(this._worldTransform=new ye),this.renderGroup?this._worldTransform.copyFrom(this.renderGroup.worldTransform):this.parentRenderGroup&&this._worldTransform.appendFrom(this.relativeGroupTransform,this.parentRenderGroup.worldTransform),this._worldTransform}get x(){return this._position.x}set x(e){this._position.x=e}get y(){return this._position.y}set y(e){this._position.y=e}get position(){return this._position}set position(e){this._position.copyFrom(e)}get rotation(){return this._rotation}set rotation(e){this._rotation!==e&&(this._rotation=e,this._onUpdate(this._skew))}get angle(){return this.rotation*hx}set angle(e){this.rotation=e*px}get pivot(){return this._pivot===ys&&(this._pivot=new rt(this,0,0)),this._pivot}set pivot(e){this._pivot===ys&&(this._pivot=new rt(this,0,0),this._origin!==_s&&ht("Setting both a pivot and origin on a Container is not recommended. This can lead to unexpected behavior if not handled carefully.")),typeof e=="number"?this._pivot.set(e):this._pivot.copyFrom(e)}get skew(){return this._skew===Vn&&(this._skew=new rt(this,0,0)),this._skew}set skew(e){this._skew===Vn&&(this._skew=new rt(this,0,0)),this._skew.copyFrom(e)}get scale(){return this._scale===Fn&&(this._scale=new rt(this,1,1)),this._scale}set scale(e){this._scale===Fn&&(this._scale=new rt(this,0,0)),typeof e=="string"&&(e=parseFloat(e)),typeof e=="number"?this._scale.set(e):this._scale.copyFrom(e)}get origin(){return this._origin===_s&&(this._origin=new rt(this,0,0)),this._origin}set origin(e){this._origin===_s&&(this._origin=new rt(this,0,0),this._pivot!==ys&&ht("Setting both a pivot and origin on a Container is not recommended. This can lead to unexpected behavior if not handled carefully.")),typeof e=="number"?this._origin.set(e):this._origin.copyFrom(e)}get width(){return Math.abs(this.scale.x*this.getLocalBounds().width)}set width(e){const r=this.getLocalBounds().width;this._setWidth(e,r)}get height(){return Math.abs(this.scale.y*this.getLocalBounds().height)}set height(e){const r=this.getLocalBounds().height;this._setHeight(e,r)}getSize(e){e||(e={});const r=this.getLocalBounds();return e.width=Math.abs(this.scale.x*r.width),e.height=Math.abs(this.scale.y*r.height),e}setSize(e,r){const i=this.getLocalBounds();typeof e=="object"?(r=e.height??e.width,e=e.width):r??(r=e),e!==void 0&&this._setWidth(e,i.width),r!==void 0&&this._setHeight(r,i.height)}_updateSkew(){const e=this._rotation,r=this._skew;this._cx=Math.cos(e+r._y),this._sx=Math.sin(e+r._y),this._cy=-Math.sin(e-r._x),this._sy=Math.cos(e-r._x)}updateTransform(e){return this.position.set(typeof e.x=="number"?e.x:this.position.x,typeof e.y=="number"?e.y:this.position.y),this.scale.set(typeof e.scaleX=="number"?e.scaleX||1:this.scale.x,typeof e.scaleY=="number"?e.scaleY||1:this.scale.y),this.rotation=typeof e.rotation=="number"?e.rotation:this.rotation,this.skew.set(typeof e.skewX=="number"?e.skewX:this.skew.x,typeof e.skewY=="number"?e.skewY:this.skew.y),this.pivot.set(typeof e.pivotX=="number"?e.pivotX:this.pivot.x,typeof e.pivotY=="number"?e.pivotY:this.pivot.y),this.origin.set(typeof e.originX=="number"?e.originX:this.origin.x,typeof e.originY=="number"?e.originY:this.origin.y),this}setFromMatrix(e){e.decompose(this)}updateLocalTransform(){const e=this._didContainerChangeTick;if(this._didLocalTransformChangeId===e)return;this._didLocalTransformChangeId=e;const r=this.localTransform,i=this._scale,s=this._pivot,n=this._origin,a=this._position,o=i._x,l=i._y,u=s._x,d=s._y,c=-n._x,p=-n._y;r.a=this._cx*o,r.b=this._sx*o,r.c=this._cy*l,r.d=this._sy*l,r.tx=a._x-(u*r.a+d*r.c)+(c*r.a+p*r.c)-c,r.ty=a._y-(u*r.b+d*r.d)+(c*r.b+p*r.d)-p}set alpha(e){e!==this.localAlpha&&(this.localAlpha=e,this._updateFlags|=nc,this._onUpdate())}get alpha(){return this.localAlpha}set tint(e){const i=De.shared.setValue(e??16777215).toBgrNumber();i!==this.localColor&&(this.localColor=i,this._updateFlags|=nc,this._onUpdate())}get tint(){return Us(this.localColor)}set blendMode(e){this.localBlendMode!==e&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Jx,this.localBlendMode=e,this._onUpdate())}get blendMode(){return this.localBlendMode}get visible(){return!!(this.localDisplayStatus&2)}set visible(e){const r=e?2:0;(this.localDisplayStatus&2)!==r&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Wn,this.localDisplayStatus^=2,this._onUpdate())}get culled(){return!(this.localDisplayStatus&4)}set culled(e){const r=e?0:4;(this.localDisplayStatus&4)!==r&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Wn,this.localDisplayStatus^=4,this._onUpdate())}get renderable(){return!!(this.localDisplayStatus&1)}set renderable(e){const r=e?1:0;(this.localDisplayStatus&1)!==r&&(this._updateFlags|=Wn,this.localDisplayStatus^=1,this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._onUpdate())}get isRenderable(){return this.localDisplayStatus===7&&this.groupAlpha>0}destroy(e=!1){var s;if(this.destroyed)return;this.destroyed=!0;let r;if(this.children.length&&(r=this.removeChildren(0,this.children.length)),this.removeFromParent(),this.parent=null,this._maskEffect=null,this._filterEffect=null,this.effects=null,this._position=null,this._scale=null,this._pivot=null,this._origin=null,this._skew=null,this.emit("destroyed",this),this.removeAllListeners(),(typeof e=="boolean"?e:e==null?void 0:e.children)&&r)for(let n=0;n<r.length;++n)r[n].destroy(e);(s=this.renderGroup)==null||s.destroy(),this.renderGroup=null}}Ze.mixin(Ke,Bx,Ux,Yx,qx,Wx,Nx,Lx,Hx,Ix,Px,Vx,Ox);class ag extends Ke{constructor(e){super(e),this.canBundle=!0,this.allowChildren=!1,this._roundPixels=0,this._lastUsed=-1,this._gpuData=Object.create(null),this.autoGarbageCollect=!0,this._gcLastUsed=-1,this._bounds=new Mt(0,1,0,0),this._boundsDirty=!0,this.autoGarbageCollect=e.autoGarbageCollect??!0}get bounds(){return this._boundsDirty?(this.updateBounds(),this._boundsDirty=!1,this._bounds):this._bounds}get roundPixels(){return!!this._roundPixels}set roundPixels(e){this._roundPixels=e?1:0}containsPoint(e){const r=this.bounds,{x:i,y:s}=e;return i>=r.minX&&i<=r.maxX&&s>=r.minY&&s<=r.maxY}onViewUpdate(){if(this._didViewChangeTick++,this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const e=this.renderGroup||this.parentRenderGroup;e&&e.onChildViewUpdate(this)}unload(){var e;this.emit("unload",this);for(const r in this._gpuData)(e=this._gpuData[r])==null||e.destroy();this._gpuData=Object.create(null),this.onViewUpdate()}destroy(e){this.unload(),super.destroy(e),this._bounds=null}collectRenderablesSimple(e,r,i){const{renderPipes:s}=r;s.blendMode.pushBlendMode(this,this.groupBlendMode,e);const a=s[this.renderPipeId];a!=null&&a.addRenderable&&a.addRenderable(this,e),this.didViewUpdate=!1;const o=this.children,l=o.length;for(let u=0;u<l;u++)o[u].collectRenderables(e,r,i);s.blendMode.popBlendMode(e)}}class Vi extends ag{constructor(e=Te.EMPTY){e instanceof Te&&(e={texture:e});const{texture:r=Te.EMPTY,anchor:i,roundPixels:s,width:n,height:a,...o}=e;super({label:"Sprite",...o}),this.renderPipeId="sprite",this.batched=!0,this._visualBounds={minX:0,maxX:1,minY:0,maxY:0},this._anchor=new rt({_onUpdate:()=>{this.onViewUpdate()}}),i?this.anchor=i:r.defaultAnchor&&(this.anchor=r.defaultAnchor),this.texture=r,this.allowChildren=!1,this.roundPixels=s??!1,n!==void 0&&(this.width=n),a!==void 0&&(this.height=a)}static from(e,r=!1){return e instanceof Te?new Vi(e):new Vi(Te.from(e,r))}set texture(e){e||(e=Te.EMPTY);const r=this._texture;r!==e&&(r&&r.dynamic&&r.off("update",this.onViewUpdate,this),e.dynamic&&e.on("update",this.onViewUpdate,this),this._texture=e,this._width&&this._setWidth(this._width,this._texture.orig.width),this._height&&this._setHeight(this._height,this._texture.orig.height),this.onViewUpdate())}get texture(){return this._texture}get visualBounds(){return wx(this._visualBounds,this._anchor,this._texture),this._visualBounds}get sourceBounds(){return $e("8.6.1","Sprite.sourceBounds is deprecated, use visualBounds instead."),this.visualBounds}updateBounds(){const e=this._anchor,r=this._texture,i=this._bounds,{width:s,height:n}=r.orig;i.minX=-e._x*s,i.maxX=i.minX+s,i.minY=-e._y*n,i.maxY=i.minY+n}destroy(e=!1){if(super.destroy(e),typeof e=="boolean"?e:e==null?void 0:e.texture){const i=typeof e=="boolean"?e:e==null?void 0:e.textureSource;this._texture.destroy(i)}this._texture=null,this._visualBounds=null,this._bounds=null,this._anchor=null}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(e){this._setWidth(e,this._texture.orig.width),this._width=e}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(e){this._setHeight(e,this._texture.orig.height),this._height=e}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this._texture.orig.width,e.height=Math.abs(this.scale.y)*this._texture.orig.height,e}setSize(e,r){typeof e=="object"?(r=e.height??e.width,e=e.width):r??(r=e),e!==void 0&&this._setWidth(e,this._texture.orig.width),r!==void 0&&this._setHeight(r,this._texture.orig.height)}}const e2=new Mt;function og(t,e,r){const i=e2;t.measurable=!0,Jm(t,r,i),e.addBoundsMask(i),t.measurable=!1}function lg(t,e,r){const i=Xt.get();t.measurable=!0;const s=nt.get().identity(),n=ug(t,r,s);rg(t,i,n),t.measurable=!1,e.addBoundsMask(i),nt.return(s),Xt.return(i)}function ug(t,e,r){return t?(t!==e&&(ug(t.parent,e,r),t.updateLocalTransform(),r.append(t.localTransform)),r):(ht("Mask bounds, renderable is not inside the root container"),r)}class dg{constructor(e){this.priority=0,this.inverse=!1,this.pipe="alphaMask",e!=null&&e.mask&&this.init(e.mask)}init(e){this.mask=e,this.renderMaskToTexture=!(e instanceof Vi),this.mask.renderable=this.renderMaskToTexture,this.mask.includeInBuild=!this.renderMaskToTexture,this.mask.measurable=!1}reset(){this.mask!==null&&(this.mask.measurable=!0,this.mask=null)}addBounds(e,r){this.inverse||og(this.mask,e,r)}addLocalBounds(e,r){lg(this.mask,e,r)}containsPoint(e,r){const i=this.mask;return r(i,e)}destroy(){this.reset()}static test(e){return e instanceof Vi}}dg.extension=_e.MaskEffect;class cg{constructor(e){this.priority=0,this.pipe="colorMask",e!=null&&e.mask&&this.init(e.mask)}init(e){this.mask=e}destroy(){}static test(e){return typeof e=="number"}}cg.extension=_e.MaskEffect;class hg{constructor(e){this.priority=0,this.pipe="stencilMask",e!=null&&e.mask&&this.init(e.mask)}init(e){this.mask=e,this.mask.includeInBuild=!1,this.mask.measurable=!1}reset(){this.mask!==null&&(this.mask.measurable=!0,this.mask.includeInBuild=!0,this.mask=null)}addBounds(e,r){og(this.mask,e,r)}addLocalBounds(e,r){lg(this.mask,e,r)}containsPoint(e,r){const i=this.mask;return r(i,e)}destroy(){this.reset()}static test(e){return e instanceof Ke}}hg.extension=_e.MaskEffect;const t2={createCanvas:(t,e)=>{const r=document.createElement("canvas");return r.width=t,r.height=e,r},createImage:()=>new Image,getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>document.baseURI??window.location.href,getFontFaceSet:()=>document.fonts,fetch:(t,e)=>fetch(t,e),parseXML:t=>new DOMParser().parseFromString(t,"text/xml")};let ac=t2;const dr={get(){return ac},set(t){ac=t}};class pg extends zt{constructor(e){e.resource||(e.resource=dr.get().createCanvas()),e.width||(e.width=e.resource.width,e.autoDensity||(e.width/=e.resolution)),e.height||(e.height=e.resource.height,e.autoDensity||(e.height/=e.resolution)),super(e),this.uploadMethodId="image",this.autoDensity=e.autoDensity,this.resizeCanvas(),this.transparent=!!e.transparent}resizeCanvas(){this.autoDensity&&"style"in this.resource&&(this.resource.style.width=`${this.width}px`,this.resource.style.height=`${this.height}px`),(this.resource.width!==this.pixelWidth||this.resource.height!==this.pixelHeight)&&(this.resource.width=this.pixelWidth,this.resource.height=this.pixelHeight)}resize(e=this.width,r=this.height,i=this._resolution){const s=super.resize(e,r,i);return s&&this.resizeCanvas(),s}static test(e){return globalThis.HTMLCanvasElement&&e instanceof HTMLCanvasElement||globalThis.OffscreenCanvas&&e instanceof OffscreenCanvas}get context2D(){return this._context2D||(this._context2D=this.resource.getContext("2d"))}}pg.extension=_e.TextureSource;class Hs extends zt{constructor(e){super(e),this.uploadMethodId="image",this.autoGarbageCollect=!0}static test(e){return globalThis.HTMLImageElement&&e instanceof HTMLImageElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||globalThis.VideoFrame&&e instanceof VideoFrame}}Hs.extension=_e.TextureSource;var js=(t=>(t[t.INTERACTION=50]="INTERACTION",t[t.HIGH=25]="HIGH",t[t.NORMAL=0]="NORMAL",t[t.LOW=-25]="LOW",t[t.UTILITY=-50]="UTILITY",t))(js||{});class qn{constructor(e,r=null,i=0,s=!1){this.next=null,this.previous=null,this._destroyed=!1,this._fn=e,this._context=r,this.priority=i,this._once=s}match(e,r=null){return this._fn===e&&this._context===r}emit(e){this._fn&&(this._context?this._fn.call(this._context,e):this._fn(e));const r=this.next;return this._once&&this.destroy(!0),this._destroyed&&(this.next=null),r}connect(e){this.previous=e,e.next&&(e.next.previous=this),this.next=e.next,e.next=this}destroy(e=!1){this._destroyed=!0,this._fn=null,this._context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const r=this.next;return this.next=e?null:r,this.previous=null,r}}const fg=class ut{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new qn(null,null,1/0),this.deltaMS=1/ut.targetFPMS,this.elapsedMS=1/ut.targetFPMS,this._tick=e=>{this._requestId=null,this.started&&(this.update(e),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}add(e,r,i=js.NORMAL){return this._addListener(new qn(e,r,i))}addOnce(e,r,i=js.NORMAL){return this._addListener(new qn(e,r,i,!0))}_addListener(e){let r=this._head.next,i=this._head;if(!r)e.connect(i);else{for(;r;){if(e.priority>r.priority){e.connect(i);break}i=r,r=r.next}e.previous||e.connect(i)}return this._startIfPossible(),this}remove(e,r){let i=this._head.next;for(;i;)i.match(e,r)?i=i.destroy():i=i.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let e=0,r=this._head;for(;r=r.next;)e++;return e}start(){this.started||(this.started=!0,this._requestIfNeeded())}stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}destroy(){if(!this._protected){this.stop();let e=this._head.next;for(;e;)e=e.destroy(!0);this._head.destroy(),this._head=null}}update(e=performance.now()){let r;if(e>this.lastTime){if(r=this.elapsedMS=e-this.lastTime,r>this._maxElapsedMS&&(r=this._maxElapsedMS),r*=this.speed,this._minElapsedMS){const n=e-this._lastFrame|0;if(n<this._minElapsedMS)return;this._lastFrame=e-n%this._minElapsedMS}this.deltaMS=r,this.deltaTime=this.deltaMS*ut.targetFPMS;const i=this._head;let s=i.next;for(;s;)s=s.emit(this);i.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=e}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(e){const r=Math.min(this.maxFPS,e),i=Math.min(Math.max(0,r)/1e3,ut.targetFPMS);this._maxElapsedMS=1/i}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(e){if(e===0)this._minElapsedMS=0;else{const r=Math.max(this.minFPS,e);this._minElapsedMS=1/(r/1e3)}}static get shared(){if(!ut._shared){const e=ut._shared=new ut;e.autoStart=!0,e._protected=!0}return ut._shared}static get system(){if(!ut._system){const e=ut._system=new ut;e.autoStart=!0,e._protected=!0}return ut._system}};fg.targetFPMS=.06;let Zr=fg,Hn;async function r2(){return Hn??(Hn=(async()=>{var a;const e=dr.get().createCanvas(1,1).getContext("webgl");if(!e)return"premultiply-alpha-on-upload";const r=await new Promise(o=>{const l=document.createElement("video");l.onloadeddata=()=>o(l),l.onerror=()=>o(null),l.autoplay=!1,l.crossOrigin="anonymous",l.preload="auto",l.src="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",l.load()});if(!r)return"premultiply-alpha-on-upload";const i=e.createTexture();e.bindTexture(e.TEXTURE_2D,i);const s=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,s),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.NONE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,r);const n=new Uint8Array(4);return e.readPixels(0,0,1,1,e.RGBA,e.UNSIGNED_BYTE,n),e.deleteFramebuffer(s),e.deleteTexture(i),(a=e.getExtension("WEBGL_lose_context"))==null||a.loseContext(),n[0]<=n[3]?"premultiplied-alpha":"premultiply-alpha-on-upload"})()),Hn}const an=class mg extends zt{constructor(e){super(e),this.isReady=!1,this.uploadMethodId="video",e={...mg.defaultOptions,...e},this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=e.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=e.autoPlay!==!1,this.alphaMode=e.alphaMode??"premultiply-alpha-on-upload",this._videoFrameRequestCallback=this._videoFrameRequestCallback.bind(this),this._videoFrameRequestCallbackHandle=null,this._load=null,this._resolve=null,this._reject=null,this._onCanPlay=this._onCanPlay.bind(this),this._onCanPlayThrough=this._onCanPlayThrough.bind(this),this._onError=this._onError.bind(this),this._onPlayStart=this._onPlayStart.bind(this),this._onPlayStop=this._onPlayStop.bind(this),this._onSeeked=this._onSeeked.bind(this),e.autoLoad!==!1&&this.load()}updateFrame(){if(!this.destroyed){if(this._updateFPS){const e=Zr.shared.elapsedMS*this.resource.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-e)}(!this._updateFPS||this._msToNextUpdate<=0)&&(this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0),this.isValid&&this.update()}}_videoFrameRequestCallback(){this.updateFrame(),this.destroyed?this._videoFrameRequestCallbackHandle=null:this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback)}get isValid(){return!!this.resource.videoWidth&&!!this.resource.videoHeight}async load(){if(this._load)return this._load;const e=this.resource,r=this.options;return(e.readyState===e.HAVE_ENOUGH_DATA||e.readyState===e.HAVE_FUTURE_DATA)&&e.width&&e.height&&(e.complete=!0),e.addEventListener("play",this._onPlayStart),e.addEventListener("pause",this._onPlayStop),e.addEventListener("seeked",this._onSeeked),this._isSourceReady()?this._mediaReady():(r.preload||e.addEventListener("canplay",this._onCanPlay),e.addEventListener("canplaythrough",this._onCanPlayThrough),e.addEventListener("error",this._onError,!0)),this.alphaMode=await r2(),this._load=new Promise((i,s)=>{this.isValid?i(this):(this._resolve=i,this._reject=s,r.preloadTimeoutMs!==void 0&&(this._preloadTimeout=setTimeout(()=>{this._onError(new ErrorEvent(`Preload exceeded timeout of ${r.preloadTimeoutMs}ms`))})),e.load())}),this._load}_onError(e){this.resource.removeEventListener("error",this._onError,!0),this.emit("error",e),this._reject&&(this._reject(e),this._reject=null,this._resolve=null)}_isSourcePlaying(){const e=this.resource;return!e.paused&&!e.ended}_isSourceReady(){return this.resource.readyState>2}_onPlayStart(){this.isValid||this._mediaReady(),this._configureAutoUpdate()}_onPlayStop(){this._configureAutoUpdate()}_onSeeked(){this._autoUpdate&&!this._isSourcePlaying()&&(this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0)}_onCanPlay(){this.resource.removeEventListener("canplay",this._onCanPlay),this._mediaReady()}_onCanPlayThrough(){this.resource.removeEventListener("canplaythrough",this._onCanPlay),this._preloadTimeout&&(clearTimeout(this._preloadTimeout),this._preloadTimeout=void 0),this._mediaReady()}_mediaReady(){const e=this.resource;this.isValid&&(this.isReady=!0,this.resize(e.videoWidth,e.videoHeight)),this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0,this._resolve&&(this._resolve(this),this._resolve=null,this._reject=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&this.resource.play()}destroy(){this._configureAutoUpdate();const e=this.resource;e&&(e.removeEventListener("play",this._onPlayStart),e.removeEventListener("pause",this._onPlayStop),e.removeEventListener("seeked",this._onSeeked),e.removeEventListener("canplay",this._onCanPlay),e.removeEventListener("canplaythrough",this._onCanPlayThrough),e.removeEventListener("error",this._onError,!0),e.pause(),e.src="",e.load()),super.destroy()}get autoUpdate(){return this._autoUpdate}set autoUpdate(e){e!==this._autoUpdate&&(this._autoUpdate=e,this._configureAutoUpdate())}get updateFPS(){return this._updateFPS}set updateFPS(e){e!==this._updateFPS&&(this._updateFPS=e,this._configureAutoUpdate())}_configureAutoUpdate(){this._autoUpdate&&this._isSourcePlaying()?!this._updateFPS&&this.resource.requestVideoFrameCallback?(this._isConnectedToTicker&&(Zr.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0),this._videoFrameRequestCallbackHandle===null&&(this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker||(Zr.shared.add(this.updateFrame,this),this._isConnectedToTicker=!0,this._msToNextUpdate=0)):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker&&(Zr.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0))}static test(e){return globalThis.HTMLVideoElement&&e instanceof HTMLVideoElement}};an.extension=_e.TextureSource;an.defaultOptions={...zt.defaultOptions,autoLoad:!0,autoPlay:!0,updateFPS:0,crossorigin:!0,loop:!1,muted:!0,playsinline:!0,preload:!1};an.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};let i2=an;const Yr=(t,e,r=!1)=>(Array.isArray(t)||(t=[t]),e?t.map(i=>typeof i=="string"||r?e(i):i):t);class s2{constructor(){this._parsers=[],this._cache=new Map,this._cacheMap=new Map}reset(){this._cacheMap.clear(),this._cache.clear()}has(e){return this._cache.has(e)}get(e){const r=this._cache.get(e);return r||ht(`[Assets] Asset id ${e} was not found in the Cache`),r}set(e,r){const i=Yr(e);let s;for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];if(u.test(r)){s=u.getCacheableAssets(i,r);break}}const n=new Map(Object.entries(s||{}));s||i.forEach(l=>{n.set(l,r)});const a=[...n.keys()],o={cacheKeys:a,keys:i};i.forEach(l=>{this._cacheMap.set(l,o)}),a.forEach(l=>{const u=s?s[l]:r;this._cache.has(l)&&this._cache.get(l)!==u&&ht("[Cache] already has key:",l),this._cache.set(l,n.get(l))})}remove(e){if(!this._cacheMap.has(e)){ht(`[Assets] Asset id ${e} was not found in the Cache`);return}const r=this._cacheMap.get(e);r.cacheKeys.forEach(s=>{this._cache.delete(s)}),r.keys.forEach(s=>{this._cacheMap.delete(s)})}get parsers(){return this._parsers}}const Xr=new s2,vo=[];Ze.handleByList(_e.TextureSource,vo);function gg(t={}){const e=t&&t.resource,r=e?t.resource:t,i=e?t:{resource:t};for(let s=0;s<vo.length;s++){const n=vo[s];if(n.test(r))return new n(i)}throw new Error(`Could not find a source type for resource: ${i.resource}`)}function n2(t={},e=!1){const r=t&&t.resource,i=r?t.resource:t,s=r?t:{resource:t};if(!e&&Xr.has(i))return Xr.get(i);const n=new Te({source:gg(s)});return n.on("destroy",()=>{Xr.has(i)&&Xr.remove(i)}),e||Xr.set(i,n),n}function a2(t,e=!1){return typeof t=="string"?Xr.get(t):t instanceof zt?new Te({source:t}):n2(t,e)}Te.from=a2;zt.from=gg;Ze.add(dg,cg,hg,i2,Hs,pg,el);var yg=(t=>(t[t.Low=0]="Low",t[t.Normal=1]="Normal",t[t.High=2]="High",t))(yg||{});function vt(t){if(typeof t!="string")throw new TypeError(`Path must be a string. Received ${JSON.stringify(t)}`)}function di(t){return t.split("?")[0].split("#")[0]}function o2(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function l2(t,e,r){return t.replace(new RegExp(o2(e),"g"),r)}function u2(t,e){let r="",i=0,s=-1,n=0,a=-1;for(let o=0;o<=t.length;++o){if(o<t.length)a=t.charCodeAt(o);else{if(a===47)break;a=47}if(a===47){if(!(s===o-1||n===1))if(s!==o-1&&n===2){if(r.length<2||i!==2||r.charCodeAt(r.length-1)!==46||r.charCodeAt(r.length-2)!==46){if(r.length>2){const l=r.lastIndexOf("/");if(l!==r.length-1){l===-1?(r="",i=0):(r=r.slice(0,l),i=r.length-1-r.lastIndexOf("/")),s=o,n=0;continue}}else if(r.length===2||r.length===1){r="",i=0,s=o,n=0;continue}}}else r.length>0?r+=`/${t.slice(s+1,o)}`:r=t.slice(s+1,o),i=o-s-1;s=o,n=0}else a===46&&n!==-1?++n:n=-1}return r}const Fi={toPosix(t){return l2(t,"\\","/")},isUrl(t){return/^https?:/.test(this.toPosix(t))},isDataUrl(t){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(t)},isBlobUrl(t){return t.startsWith("blob:")},hasProtocol(t){return/^[^/:]+:/.test(this.toPosix(t))},getProtocol(t){vt(t),t=this.toPosix(t);const e=/^file:\/\/\//.exec(t);if(e)return e[0];const r=/^[^/:]+:\/{0,2}/.exec(t);return r?r[0]:""},toAbsolute(t,e,r){if(vt(t),this.isDataUrl(t)||this.isBlobUrl(t))return t;const i=di(this.toPosix(e??dr.get().getBaseUrl())),s=di(this.toPosix(r??this.rootname(i)));return t=this.toPosix(t),t.startsWith("/")?Fi.join(s,t.slice(1)):this.isAbsolute(t)?t:this.join(i,t)},normalize(t){if(vt(t),t.length===0)return".";if(this.isDataUrl(t)||this.isBlobUrl(t))return t;t=this.toPosix(t);let e="";const r=t.startsWith("/");this.hasProtocol(t)&&(e=this.rootname(t),t=t.slice(e.length));const i=t.endsWith("/");return t=u2(t),t.length>0&&i&&(t+="/"),r?`/${t}`:e+t},isAbsolute(t){return vt(t),t=this.toPosix(t),this.hasProtocol(t)?!0:t.startsWith("/")},join(...t){if(t.length===0)return".";let e;for(let r=0;r<t.length;++r){const i=t[r];if(vt(i),i.length>0)if(e===void 0)e=i;else{const s=t[r-1]??"";this.joinExtensions.includes(this.extname(s).toLowerCase())?e+=`/../${i}`:e+=`/${i}`}}return e===void 0?".":this.normalize(e)},dirname(t){if(vt(t),t.length===0)return".";t=this.toPosix(t);let e=t.charCodeAt(0);const r=e===47;let i=-1,s=!0;const n=this.getProtocol(t),a=t;t=t.slice(n.length);for(let o=t.length-1;o>=1;--o)if(e=t.charCodeAt(o),e===47){if(!s){i=o;break}}else s=!1;return i===-1?r?"/":this.isUrl(a)?n+t:n:r&&i===1?"//":n+t.slice(0,i)},rootname(t){vt(t),t=this.toPosix(t);let e="";if(t.startsWith("/")?e="/":e=this.getProtocol(t),this.isUrl(t)){const r=t.indexOf("/",e.length);r!==-1?e=t.slice(0,r):e=t,e.endsWith("/")||(e+="/")}return e},basename(t,e){vt(t),e&&vt(e),t=di(this.toPosix(t));let r=0,i=-1,s=!0,n;if(e!==void 0&&e.length>0&&e.length<=t.length){if(e.length===t.length&&e===t)return"";let a=e.length-1,o=-1;for(n=t.length-1;n>=0;--n){const l=t.charCodeAt(n);if(l===47){if(!s){r=n+1;break}}else o===-1&&(s=!1,o=n+1),a>=0&&(l===e.charCodeAt(a)?--a===-1&&(i=n):(a=-1,i=o))}return r===i?i=o:i===-1&&(i=t.length),t.slice(r,i)}for(n=t.length-1;n>=0;--n)if(t.charCodeAt(n)===47){if(!s){r=n+1;break}}else i===-1&&(s=!1,i=n+1);return i===-1?"":t.slice(r,i)},extname(t){vt(t),t=di(this.toPosix(t));let e=-1,r=0,i=-1,s=!0,n=0;for(let a=t.length-1;a>=0;--a){const o=t.charCodeAt(a);if(o===47){if(!s){r=a+1;break}continue}i===-1&&(s=!1,i=a+1),o===46?e===-1?e=a:n!==1&&(n=1):e!==-1&&(n=-1)}return e===-1||i===-1||n===0||n===1&&e===i-1&&e===r+1?"":t.slice(e,i)},parse(t){vt(t);const e={root:"",dir:"",base:"",ext:"",name:""};if(t.length===0)return e;t=di(this.toPosix(t));let r=t.charCodeAt(0);const i=this.isAbsolute(t);let s;e.root=this.rootname(t),i||this.hasProtocol(t)?s=1:s=0;let n=-1,a=0,o=-1,l=!0,u=t.length-1,d=0;for(;u>=s;--u){if(r=t.charCodeAt(u),r===47){if(!l){a=u+1;break}continue}o===-1&&(l=!1,o=u+1),r===46?n===-1?n=u:d!==1&&(d=1):n!==-1&&(d=-1)}return n===-1||o===-1||d===0||d===1&&n===o-1&&n===a+1?o!==-1&&(a===0&&i?e.base=e.name=t.slice(1,o):e.base=e.name=t.slice(a,o)):(a===0&&i?(e.name=t.slice(1,n),e.base=t.slice(1,o)):(e.name=t.slice(a,n),e.base=t.slice(a,o)),e.ext=t.slice(n,o)),e.dir=this.dirname(t),e},sep:"/",delimiter:":",joinExtensions:[".html"]};function _g(t,e,r,i,s){const n=e[r];for(let a=0;a<n.length;a++){const o=n[a];r<e.length-1?_g(t.replace(i[r],o),e,r+1,i,s):s.push(t.replace(i[r],o))}}function d2(t){const e=/\{(.*?)\}/g,r=t.match(e),i=[];if(r){const s=[];r.forEach(n=>{const a=n.substring(1,n.length-1).split(",");s.push(a)}),_g(t,s,0,r,i)}else i.push(t);return i}const oc=t=>!Array.isArray(t);class bg{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(e,r)=>`${e}${this._bundleIdConnector}${r}`,extractAssetIdFromBundle:(e,r)=>r.replace(`${e}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles={}}setBundleIdentifier(e){if(this._bundleIdConnector=e.connector??this._bundleIdConnector,this._createBundleAssetId=e.createBundleAssetId??this._createBundleAssetId,this._extractAssetIdFromBundle=e.extractAssetIdFromBundle??this._extractAssetIdFromBundle,this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar"))!=="bar")throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")}prefer(...e){e.forEach(r=>{this._preferredOrder.push(r),r.priority||(r.priority=Object.keys(r.params))}),this._resolverHash={}}set basePath(e){this._basePath=e}get basePath(){return this._basePath}set rootPath(e){this._rootPath=e}get rootPath(){return this._rootPath}get parsers(){return this._parsers}reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap={},this._preferredOrder=[],this._resolverHash={},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles={},this._defaultSearchParams=null}setDefaultSearchParams(e){if(typeof e=="string")this._defaultSearchParams=e;else{const r=e;this._defaultSearchParams=Object.keys(r).map(i=>`${encodeURIComponent(i)}=${encodeURIComponent(r[i])}`).join("&")}}getAlias(e){const{alias:r,src:i}=e;return Yr(r||i,n=>typeof n=="string"?n:Array.isArray(n)?n.map(a=>(a==null?void 0:a.src)??a):n!=null&&n.src?n.src:n,!0)}addManifest(e){this._manifest&&ht("[Resolver] Manifest already exists, this will be overwritten"),this._manifest=e,e.bundles.forEach(r=>{this.addBundle(r.name,r.assets)})}addBundle(e,r){const i=[];let s=r;Array.isArray(r)||(s=Object.entries(r).map(([n,a])=>typeof a=="string"||Array.isArray(a)?{alias:n,src:a}:{alias:n,...a})),s.forEach(n=>{const a=n.src,o=n.alias;let l;if(typeof o=="string"){const u=this._createBundleAssetId(e,o);i.push(u),l=[o,u]}else{const u=o.map(d=>this._createBundleAssetId(e,d));i.push(...u),l=[...o,...u]}this.add({...n,alias:l,src:a})}),this._bundles[e]=i}add(e){const r=[];Array.isArray(e)?r.push(...e):r.push(e);let i;i=n=>{this.hasKey(n)&&ht(`[Resolver] already has key: ${n} overwriting`)},Yr(r).forEach(n=>{const{src:a}=n;let{data:o,format:l,loadParser:u,parser:d}=n;const c=Yr(a).map(y=>typeof y=="string"?d2(y):Array.isArray(y)?y:[y]),p=this.getAlias(n);Array.isArray(p)?p.forEach(i):i(p);const f=[],m=y=>{const b=this._parsers.find(_=>_.test(y));return{src:y,...b==null?void 0:b.parse(y)}};c.forEach(y=>{y.forEach(b=>{let _={};if(typeof b!="object"?_=m(b):(o=b.data??o,l=b.format??l,(b.loadParser||b.parser)&&(u=b.loadParser??u,d=b.parser??d),_={...m(b.src),...b}),!p)throw new Error(`[Resolver] alias is undefined for this asset: ${_.src}`);_=this._buildResolvedAsset(_,{aliases:p,data:o,format:l,loadParser:u,parser:d,progressSize:n.progressSize}),f.push(_)})}),p.forEach(y=>{this._assetMap[y]=f})})}resolveBundle(e){const r=oc(e);e=Yr(e);const i={};return e.forEach(s=>{const n=this._bundles[s];if(n){const a=this.resolve(n),o={};for(const l in a){const u=a[l];o[this._extractAssetIdFromBundle(s,l)]=u}i[s]=o}}),r?i[e[0]]:i}resolveUrl(e){const r=this.resolve(e);if(typeof e!="string"){const i={};for(const s in r)i[s]=r[s].src;return i}return r.src}resolve(e){const r=oc(e);e=Yr(e);const i={};return e.forEach(s=>{if(!this._resolverHash[s])if(this._assetMap[s]){let n=this._assetMap[s];const a=this._getPreferredOrder(n);a==null||a.priority.forEach(o=>{a.params[o].forEach(l=>{const u=n.filter(d=>d[o]?d[o]===l:!1);u.length&&(n=u)})}),this._resolverHash[s]=n[0]}else this._resolverHash[s]=this._buildResolvedAsset({alias:[s],src:s},{});i[s]=this._resolverHash[s]}),r?i[e[0]]:i}hasKey(e){return!!this._assetMap[e]}hasBundle(e){return!!this._bundles[e]}_getPreferredOrder(e){for(let r=0;r<e.length;r++){const i=e[r],s=this._preferredOrder.find(n=>n.params.format.includes(i.format));if(s)return s}return this._preferredOrder[0]}_appendDefaultSearchParams(e){if(!this._defaultSearchParams)return e;const r=/\?/.test(e)?"&":"?";return`${e}${r}${this._defaultSearchParams}`}_buildResolvedAsset(e,r){const{aliases:i,data:s,loadParser:n,parser:a,format:o,progressSize:l}=r;return(this._basePath||this._rootPath)&&(e.src=Fi.toAbsolute(e.src,this._basePath,this._rootPath)),e.alias=i??e.alias??[e.src],e.src=this._appendDefaultSearchParams(e.src),e.data={...s||{},...e.data},e.loadParser=n??e.loadParser,e.parser=a??e.parser,e.format=o??e.format??c2(e.src),l!==void 0&&(e.progressSize=l),e}}bg.RETINA_PREFIX=/@([0-9\.]+)x/;function c2(t){return t.split(".").pop().split("?").shift().split("#").shift()}const lc=(t,e)=>{const r=e.split("?")[1];return r&&(t+=`?${r}`),t},wg=class Ai{constructor(e,r){this.linkedSheets=[];let i=e;(e==null?void 0:e.source)instanceof zt&&(i={texture:e,data:r});const{texture:s,data:n,cachePrefix:a=""}=i;this.cachePrefix=a,this._texture=s instanceof Te?s:null,this.textureSource=s.source,this.textures={},this.animations={},this.data=n;const o=parseFloat(n.meta.scale);o?(this.resolution=o,s.source.resolution=this.resolution):this.resolution=s.source._resolution,this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}parse(){return new Promise(e=>{this._callback=e,this._batchIndex=0,this._frameKeys.length<=Ai.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()})}parseSync(){return this._processFrames(0,!0),this._processAnimations(),this.textures}_processFrames(e,r=!1){let i=e;const s=r?1/0:Ai.BATCH_SIZE;for(;i-e<s&&i<this._frameKeys.length;){const n=this._frameKeys[i],a=this._frames[n],o=a.frame;if(o){let l=null,u=null;const d=a.trimmed!==!1&&a.sourceSize?a.sourceSize:a.frame,c=new Xe(0,0,Math.floor(d.w)/this.resolution,Math.floor(d.h)/this.resolution);a.rotated?l=new Xe(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.h)/this.resolution,Math.floor(o.w)/this.resolution):l=new Xe(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution),a.trimmed!==!1&&a.spriteSourceSize&&(u=new Xe(Math.floor(a.spriteSourceSize.x)/this.resolution,Math.floor(a.spriteSourceSize.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution)),this.textures[n]=new Te({source:this.textureSource,frame:l,orig:c,trim:u,rotate:a.rotated?2:0,defaultAnchor:a.anchor,defaultBorders:a.borders,label:n.toString()})}i++}}_processAnimations(){const e=this.data.animations||{};for(const r in e){this.animations[r]=[];for(let i=0;i<e[r].length;i++){const s=e[r][i];this.animations[r].push(this.textures[s])}}}_parseComplete(){const e=this._callback;this._callback=null,this._batchIndex=0,e.call(this,this.textures)}_nextBatch(){this._processFrames(this._batchIndex*Ai.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*Ai.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete())},0)}destroy(e=!1){var r;for(const i in this.textures)this.textures[i].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,e&&((r=this._texture)==null||r.destroy(),this.textureSource.destroy()),this._texture=null,this.textureSource=null,this.linkedSheets=[]}};wg.BATCH_SIZE=1e3;let uc=wg;const h2=["jpg","png","jpeg","avif","webp","basis","etc2","bc7","bc6h","bc5","bc4","bc3","bc2","bc1","eac","astc"];function xg(t,e,r){const i={};if(t.forEach(s=>{i[s]=e}),Object.keys(e.textures).forEach(s=>{i[`${e.cachePrefix}${s}`]=e.textures[s]}),!r){const s=Fi.dirname(t[0]);e.linkedSheets.forEach((n,a)=>{const o=xg([`${s}/${e.data.meta.related_multi_packs[a]}`],n,!0);Object.assign(i,o)})}return i}const p2={extension:_e.Asset,cache:{test:t=>t instanceof uc,getCacheableAssets:(t,e)=>xg(t,e,!1)},resolver:{extension:{type:_e.ResolveParser,name:"resolveSpritesheet"},test:t=>{const r=t.split("?")[0].split("."),i=r.pop(),s=r.pop();return i==="json"&&h2.includes(s)},parse:t=>{var r;const e=t.split(".");return{resolution:parseFloat(((r=bg.RETINA_PREFIX.exec(t))==null?void 0:r[1])??"1"),format:e[e.length-2],src:t}}},loader:{name:"spritesheetLoader",id:"spritesheet",extension:{type:_e.LoadParser,priority:yg.Normal,name:"spritesheetLoader"},async testParse(t,e){return Fi.extname(e.src).toLowerCase()===".json"&&!!t.frames},async parse(t,e,r){var c,p;const{texture:i,imageFilename:s,textureOptions:n,cachePrefix:a}=(e==null?void 0:e.data)??{};let o=Fi.dirname(e.src);o&&o.lastIndexOf("/")!==o.length-1&&(o+="/");let l;if(i instanceof Te)l=i;else{const f=lc(o+(s??t.meta.image),e.src);l=(await r.load([{src:f,data:n}]))[f]}const u=new uc({texture:l.source,data:t,cachePrefix:a});await u.parse();const d=(c=t==null?void 0:t.meta)==null?void 0:c.related_multi_packs;if(Array.isArray(d)){const f=[];for(const y of d){if(typeof y!="string")continue;let b=o+y;(p=e.data)!=null&&p.ignoreMultiPack||(b=lc(b,e.src),f.push(r.load({src:b,data:{textureOptions:n,ignoreMultiPack:!0}})))}const m=await Promise.all(f);u.linkedSheets=m,m.forEach(y=>{y.linkedSheets=[u].concat(u.linkedSheets.filter(b=>b!==y))})}return u},async unload(t,e,r){await r.unload(t.textureSource._sourceOrigin),t.destroy(!1)}}};Ze.add(p2);const jn=Object.create(null),dc=Object.create(null);function il(t,e){let r=dc[t];return r===void 0&&(jn[e]===void 0&&(jn[e]=1),dc[t]=r=jn[e]++),r}let Wr;function vg(){return(!Wr||Wr!=null&&Wr.isContextLost())&&(Wr=dr.get().createCanvas().getContext("webgl",{})),Wr}let bs;function f2(){if(!bs){bs="mediump";const t=vg();t&&t.getShaderPrecisionFormat&&(bs=t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision?"highp":"mediump")}return bs}function m2(t,e,r){return e?t:r?(t=t.replace("out vec4 finalColor;",""),`

        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${t}
        `):`

        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${t}
        `}function g2(t,e,r){const i=r?e.maxSupportedFragmentPrecision:e.maxSupportedVertexPrecision;if(t.substring(0,9)!=="precision"){let s=r?e.requestedFragmentPrecision:e.requestedVertexPrecision;return s==="highp"&&i!=="highp"&&(s="mediump"),`precision ${s} float;
${t}`}else if(i!=="highp"&&t.substring(0,15)==="precision highp")return t.replace("precision highp","precision mediump");return t}function y2(t,e){return e?`#version 300 es
${t}`:t}const _2={},b2={};function w2(t,{name:e="pixi-program"},r=!0){e=e.replace(/\s+/g,"-"),e+=r?"-fragment":"-vertex";const i=r?_2:b2;return i[e]?(i[e]++,e+=`-${i[e]}`):i[e]=1,t.indexOf("#define SHADER_NAME")!==-1?t:`${`#define SHADER_NAME ${e}`}
${t}`}function x2(t,e){return e?t.replace("#version 300 es",""):t}const Yn={stripVersion:x2,ensurePrecision:g2,addProgramDefines:m2,setProgramName:w2,insertVersion:y2},ci=Object.create(null),$g=class $o{constructor(e){e={...$o.defaultOptions,...e};const r=e.fragment.indexOf("#version 300 es")!==-1,i={stripVersion:r,ensurePrecision:{requestedFragmentPrecision:e.preferredFragmentPrecision,requestedVertexPrecision:e.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:f2()},setProgramName:{name:e.name},addProgramDefines:r,insertVersion:r};let s=e.fragment,n=e.vertex;Object.keys(Yn).forEach(a=>{const o=i[a];s=Yn[a](s,o,!0),n=Yn[a](n,o,!1)}),this.fragment=s,this.vertex=n,this.transformFeedbackVaryings=e.transformFeedbackVaryings,this._key=il(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null,ci[this._cacheKey]=null}static from(e){const r=`${e.vertex}:${e.fragment}`;return ci[r]||(ci[r]=new $o(e),ci[r]._cacheKey=r),ci[r]}};$g.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let kg=$g;const cc={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function v2(t){return cc[t]??cc.float32}const $2={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",vec2i:"sint32x2",vec3i:"sint32x3",vec4i:"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",vec2u:"uint32x2",vec3u:"uint32x3",vec4u:"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"},hc=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|\)|$)/g;function pc(t,e){let r;for(;(r=hc.exec(t))!==null;){const i=$2[r[3]]??"float32";e[r[2]]={location:parseInt(r[1],10),format:i,stride:v2(i).stride,offset:0,instance:!1,start:0}}hc.lastIndex=0}function k2(t){return t.replace(/\/\/.*$/gm,"").replace(/\/\*[\s\S]*?\*\//g,"")}function S2({source:t,entryPoint:e}){const r={},i=k2(t),s=i.indexOf(`fn ${e}(`);if(s===-1)return r;const n=i.indexOf("->",s);if(n===-1)return r;const a=i.substring(s,n);if(pc(a,r),Object.keys(r).length===0){const o=a.match(/\(\s*\w+\s*:\s*(\w+)/);if(o){const l=o[1],u=new RegExp(`struct\\s+${l}\\s*\\{([^}]+)\\}`,"s"),d=i.match(u);d&&pc(d[1],r)}}return r}function Xn(t){var c,p;const e=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,r=/@group\((\d+)\)/,i=/@binding\((\d+)\)/,s=/var(<[^>]+>)? (\w+)/,n=/:\s*([\w<>]+)/,a=/struct\s+(\w+)\s*{([^}]+)}/g,o=/(\w+)\s*:\s*([\w\<\>]+)/g,l=/struct\s+(\w+)/,u=(c=t.match(e))==null?void 0:c.map(f=>({group:parseInt(f.match(r)[1],10),binding:parseInt(f.match(i)[1],10),name:f.match(s)[2],isUniform:f.match(s)[1]==="<uniform>",type:f.match(n)[1]}));if(!u)return{groups:[],structs:[]};const d=((p=t.match(a))==null?void 0:p.map(f=>{const m=f.match(l)[1],y=f.match(o).reduce((b,_)=>{const[x,$]=_.split(":");return b[x.trim()]=$.trim(),b},{});return y?{name:m,members:y}:null}).filter(({name:f})=>u.some(m=>m.type===f||m.type.includes(`<${f}>`))))??[];return{groups:u,structs:d}}var Cr=(t=>(t[t.VERTEX=1]="VERTEX",t[t.FRAGMENT=2]="FRAGMENT",t[t.COMPUTE=4]="COMPUTE",t))(Cr||{});function C2({groups:t}){const e=[];for(let r=0;r<t.length;r++){const i=t[r];e[i.group]||(e[i.group]=[]),i.isUniform?e[i.group].push({binding:i.binding,visibility:Cr.VERTEX|Cr.FRAGMENT,buffer:{type:"uniform"}}):i.type==="sampler"?e[i.group].push({binding:i.binding,visibility:Cr.FRAGMENT,sampler:{type:"filtering"}}):i.type==="texture_2d"||i.type.startsWith("texture_2d<")?e[i.group].push({binding:i.binding,visibility:Cr.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}}):i.type==="texture_2d_array"||i.type.startsWith("texture_2d_array<")?e[i.group].push({binding:i.binding,visibility:Cr.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}}):(i.type==="texture_cube"||i.type.startsWith("texture_cube<"))&&e[i.group].push({binding:i.binding,visibility:Cr.FRAGMENT,texture:{sampleType:"float",viewDimension:"cube",multisampled:!1}})}for(let r=0;r<e.length;r++)e[r]||(e[r]=[]);return e}function T2({groups:t}){const e=[];for(let r=0;r<t.length;r++){const i=t[r];e[i.group]||(e[i.group]={}),e[i.group][i.name]=i.binding}return e}function E2(t,e){const r=new Set,i=new Set,s=[...t.structs,...e.structs].filter(a=>r.has(a.name)?!1:(r.add(a.name),!0)),n=[...t.groups,...e.groups].filter(a=>{const o=`${a.name}-${a.binding}`;return i.has(o)?!1:(i.add(o),!0)});return{structs:s,groups:n}}const hi=Object.create(null);class on{constructor(e){var o,l;this._layoutKey=0,this._attributeLocationsKey=0;const{fragment:r,vertex:i,layout:s,gpuLayout:n,name:a}=e;if(this.name=a,this.fragment=r,this.vertex=i,r.source===i.source){const u=Xn(r.source);this.structsAndGroups=u}else{const u=Xn(i.source),d=Xn(r.source);this.structsAndGroups=E2(u,d)}this.layout=s??T2(this.structsAndGroups),this.gpuLayout=n??C2(this.structsAndGroups),this.autoAssignGlobalUniforms=((o=this.layout[0])==null?void 0:o.globalUniforms)!==void 0,this.autoAssignLocalUniforms=((l=this.layout[1])==null?void 0:l.localUniforms)!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:e,fragment:r}=this,i=e.source+r.source+e.entryPoint+r.entryPoint;this._layoutKey=il(i,"program")}get attributeData(){return this._attributeData??(this._attributeData=S2(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null,hi[this._cacheKey]=null}static from(e){const r=`${e.vertex.source}:${e.fragment.source}:${e.fragment.entryPoint}:${e.vertex.entryPoint}`;return hi[r]||(hi[r]=new on(e),hi[r]._cacheKey=r),hi[r]}}const Sg=["f32","i32","vec2<f32>","vec3<f32>","vec4<f32>","mat2x2<f32>","mat3x3<f32>","mat4x4<f32>","mat3x2<f32>","mat4x2<f32>","mat2x3<f32>","mat4x3<f32>","mat2x4<f32>","mat3x4<f32>","vec2<i32>","vec3<i32>","vec4<i32>"],A2=Sg.reduce((t,e)=>(t[e]=!0,t),{});function I2(t,e){switch(t){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*e);case"vec3<f32>":return new Float32Array(3*e);case"vec4<f32>":return new Float32Array(4*e);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const Cg=class Tg{constructor(e,r){this._touched=0,this.uid=Ne("uniform"),this._resourceType="uniformGroup",this._resourceId=Ne("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,r={...Tg.defaultOptions,...r},this.uniformStructures=e;const i={};for(const s in e){const n=e[s];if(n.name=s,n.size=n.size??1,!A2[n.type]){const a=n.type.match(/^array<(\w+(?:<\w+>)?),\s*(\d+)>$/);if(a){const[,o,l]=a;throw new Error(`Uniform type ${n.type} is not supported. Use type: '${o}', size: ${l} instead.`)}throw new Error(`Uniform type ${n.type} is not supported. Supported uniform types are: ${Sg.join(", ")}`)}n.value??(n.value=I2(n.type,n.size)),i[s]=n.value}this.uniforms=i,this._dirtyId=1,this.ubo=r.ubo,this.isStatic=r.isStatic,this._signature=il(Object.keys(i).map(s=>`${s}-${e[s].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};Cg.defaultOptions={ubo:!1,isStatic:!1};let Eg=Cg;class Vs{constructor(e){this.resources=Object.create(null),this._dirty=!0;let r=0;for(const i in e){const s=e[i];this.setResource(s,r++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;const e=[];let r=0;for(const i in this.resources)e[r++]=this.resources[i]._resourceId;this._key=e.join("|")}setResource(e,r){var s,n;const i=this.resources[r];e!==i&&(i&&((s=e.off)==null||s.call(e,"change",this.onResourceChange,this)),(n=e.on)==null||n.call(e,"change",this.onResourceChange,this),this.resources[r]=e,this._dirty=!0)}getResource(e){return this.resources[e]}_touch(e,r){const i=this.resources;for(const s in i)i[s]._gcLastUsed=e,i[s]._touched=r}destroy(){var r;const e=this.resources;for(const i in e){const s=e[i];(r=s==null?void 0:s.off)==null||r.call(s,"change",this.onResourceChange,this)}this.resources=null}onResourceChange(e){if(this._dirty=!0,e.destroyed){const r=this.resources;for(const i in r)r[i]===e&&(r[i]=null)}else this._updateKey()}}var ko=(t=>(t[t.WEBGL=1]="WEBGL",t[t.WEBGPU=2]="WEBGPU",t[t.CANVAS=4]="CANVAS",t[t.BOTH=3]="BOTH",t))(ko||{});class sl extends Qt{constructor(e){super(),this.uid=Ne("shader"),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[],this._destroyed=!1;let{gpuProgram:r,glProgram:i,groups:s,resources:n,compatibleRenderers:a,groupMap:o}=e;this.gpuProgram=r,this.glProgram=i,a===void 0&&(a=0,r&&(a|=ko.WEBGPU),i&&(a|=ko.WEBGL)),this.compatibleRenderers=a;const l={};if(!n&&!s&&(n={}),n&&s)throw new Error("[Shader] Cannot have both resources and groups");if(!r&&s&&!o)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!r&&s&&o)for(const u in o)for(const d in o[u]){const c=o[u][d];l[c]={group:u,binding:d,name:c}}else if(r&&s&&!o){const u=r.structsAndGroups.groups;o={},u.forEach(d=>{o[d.group]=o[d.group]||{},o[d.group][d.binding]=d.name,l[d.name]=d})}else if(n){s={},o={},r&&r.structsAndGroups.groups.forEach(c=>{o[c.group]=o[c.group]||{},o[c.group][c.binding]=c.name,l[c.name]=c});let u=0;for(const d in n)l[d]||(s[99]||(s[99]=new Vs,this._ownedBindGroups.push(s[99])),l[d]={group:99,binding:u,name:d},o[99]=o[99]||{},o[99][u]=d,u++);for(const d in n){const c=d;let p=n[d];!p.source&&!p._resourceType&&(p=new Eg(p));const f=l[c];f&&(s[f.group]||(s[f.group]=new Vs,this._ownedBindGroups.push(s[f.group])),s[f.group].setResource(p,f.binding))}}this.groups=s,this._uniformBindMap=o,this.resources=this._buildResourceAccessor(s,l)}addResource(e,r,i){var s,n;(s=this._uniformBindMap)[r]||(s[r]={}),(n=this._uniformBindMap[r])[i]||(n[i]=e),this.groups[r]||(this.groups[r]=new Vs,this._ownedBindGroups.push(this.groups[r]))}_buildResourceAccessor(e,r){const i={};for(const s in r){const n=r[s];Object.defineProperty(i,n.name,{get(){return e[n.group].getResource(n.binding)},set(a){e[n.group].setResource(a,n.binding)}})}return i}destroy(e=!1){var r,i;this._destroyed||(this._destroyed=!0,this.emit("destroy",this),e&&((r=this.gpuProgram)==null||r.destroy(),(i=this.glProgram)==null||i.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(s=>{s.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null)}static from(e){const{gpu:r,gl:i,...s}=e;let n,a;return r&&(n=on.from(r)),i&&(a=kg.from(i)),new sl({gpuProgram:n,glProgram:a,...s})}}const M2={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8,min:9,max:10},Kn=0,Zn=1,Qn=2,Jn=3,ea=4,ta=5,So=class Ag{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<Kn)}set blend(e){!!(this.data&1<<Kn)!==e&&(this.data^=1<<Kn)}get offsets(){return!!(this.data&1<<Zn)}set offsets(e){!!(this.data&1<<Zn)!==e&&(this.data^=1<<Zn)}set cullMode(e){if(e==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=e==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<Qn)}set culling(e){!!(this.data&1<<Qn)!==e&&(this.data^=1<<Qn)}get depthTest(){return!!(this.data&1<<Jn)}set depthTest(e){!!(this.data&1<<Jn)!==e&&(this.data^=1<<Jn)}get depthMask(){return!!(this.data&1<<ta)}set depthMask(e){!!(this.data&1<<ta)!==e&&(this.data^=1<<ta)}get clockwiseFrontFace(){return!!(this.data&1<<ea)}set clockwiseFrontFace(e){!!(this.data&1<<ea)!==e&&(this.data^=1<<ea)}get blendMode(){return this._blendMode}set blendMode(e){this.blend=e!=="none",this._blendMode=e,this._blendModeId=M2[e]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(e){this.offsets=!!e,this._polygonOffset=e}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const e=new Ag;return e.depthTest=!1,e.blend=!0,e}};So.default2d=So.for2d();let Ig=So;const Co=[];Ze.handleByNamedList(_e.Environment,Co);async function z2(t){if(!t)for(let e=0;e<Co.length;e++){const r=Co[e];if(r.value.test()){await r.value.load();return}}}let pi;function P2(){if(typeof pi=="boolean")return pi;try{pi=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{pi=!1}return pi}function fc(t,e,r=2){const i=e&&e.length,s=i?e[0]*r:t.length;let n=Mg(t,0,s,r,!0);const a=[];if(!n||n.next===n.prev)return a;let o,l,u;if(i&&(n=N2(t,e,n,r)),t.length>80*r){o=t[0],l=t[1];let d=o,c=l;for(let p=r;p<s;p+=r){const f=t[p],m=t[p+1];f<o&&(o=f),m<l&&(l=m),f>d&&(d=f),m>c&&(c=m)}u=Math.max(d-o,c-l),u=u!==0?32767/u:0}return Wi(n,a,r,o,l,u,0),a}function Mg(t,e,r,i,s){let n;if(s===X2(t,e,r,i)>0)for(let a=e;a<r;a+=i)n=mc(a/i|0,t[a],t[a+1],n);else for(let a=r-i;a>=e;a-=i)n=mc(a/i|0,t[a],t[a+1],n);return n&&ri(n,n.next)&&(Hi(n),n=n.next),n}function Pr(t,e){if(!t)return t;e||(e=t);let r=t,i;do if(i=!1,!r.steiner&&(ri(r,r.next)||Me(r.prev,r,r.next)===0)){if(Hi(r),r=e=r.prev,r===r.next)break;i=!0}else r=r.next;while(i||r!==e);return e}function Wi(t,e,r,i,s,n,a){if(!t)return;!a&&n&&F2(t,i,s,n);let o=t;for(;t.prev!==t.next;){const l=t.prev,u=t.next;if(n?B2(t,i,s,n):R2(t)){e.push(l.i,t.i,u.i),Hi(t),t=u.next,o=u.next;continue}if(t=u,t===o){a?a===1?(t=O2(Pr(t),e),Wi(t,e,r,i,s,n,2)):a===2&&D2(t,e,r,i,s,n):Wi(Pr(t),e,r,i,s,n,1);break}}}function R2(t){const e=t.prev,r=t,i=t.next;if(Me(e,r,i)>=0)return!1;const s=e.x,n=r.x,a=i.x,o=e.y,l=r.y,u=i.y,d=Math.min(s,n,a),c=Math.min(o,l,u),p=Math.max(s,n,a),f=Math.max(o,l,u);let m=i.next;for(;m!==e;){if(m.x>=d&&m.x<=p&&m.y>=c&&m.y<=f&&Ii(s,o,n,l,a,u,m.x,m.y)&&Me(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function B2(t,e,r,i){const s=t.prev,n=t,a=t.next;if(Me(s,n,a)>=0)return!1;const o=s.x,l=n.x,u=a.x,d=s.y,c=n.y,p=a.y,f=Math.min(o,l,u),m=Math.min(d,c,p),y=Math.max(o,l,u),b=Math.max(d,c,p),_=To(f,m,e,r,i),x=To(y,b,e,r,i);let $=t.prevZ,S=t.nextZ;for(;$&&$.z>=_&&S&&S.z<=x;){if($.x>=f&&$.x<=y&&$.y>=m&&$.y<=b&&$!==s&&$!==a&&Ii(o,d,l,c,u,p,$.x,$.y)&&Me($.prev,$,$.next)>=0||($=$.prevZ,S.x>=f&&S.x<=y&&S.y>=m&&S.y<=b&&S!==s&&S!==a&&Ii(o,d,l,c,u,p,S.x,S.y)&&Me(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;$&&$.z>=_;){if($.x>=f&&$.x<=y&&$.y>=m&&$.y<=b&&$!==s&&$!==a&&Ii(o,d,l,c,u,p,$.x,$.y)&&Me($.prev,$,$.next)>=0)return!1;$=$.prevZ}for(;S&&S.z<=x;){if(S.x>=f&&S.x<=y&&S.y>=m&&S.y<=b&&S!==s&&S!==a&&Ii(o,d,l,c,u,p,S.x,S.y)&&Me(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function O2(t,e){let r=t;do{const i=r.prev,s=r.next.next;!ri(i,s)&&Pg(i,r,r.next,s)&&qi(i,s)&&qi(s,i)&&(e.push(i.i,r.i,s.i),Hi(r),Hi(r.next),r=t=s),r=r.next}while(r!==t);return Pr(r)}function D2(t,e,r,i,s,n){let a=t;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&H2(a,o)){let l=Rg(a,o);a=Pr(a,a.next),l=Pr(l,l.next),Wi(a,e,r,i,s,n,0),Wi(l,e,r,i,s,n,0);return}o=o.next}a=a.next}while(a!==t)}function N2(t,e,r,i){const s=[];for(let n=0,a=e.length;n<a;n++){const o=e[n]*i,l=n<a-1?e[n+1]*i:t.length,u=Mg(t,o,l,i,!1);u===u.next&&(u.steiner=!0),s.push(q2(u))}s.sort(L2);for(let n=0;n<s.length;n++)r=G2(s[n],r);return r}function L2(t,e){let r=t.x-e.x;if(r===0&&(r=t.y-e.y,r===0)){const i=(t.next.y-t.y)/(t.next.x-t.x),s=(e.next.y-e.y)/(e.next.x-e.x);r=i-s}return r}function G2(t,e){const r=U2(t,e);if(!r)return e;const i=Rg(r,t);return Pr(i,i.next),Pr(r,r.next)}function U2(t,e){let r=e;const i=t.x,s=t.y;let n=-1/0,a;if(ri(t,r))return r;do{if(ri(t,r.next))return r.next;if(s<=r.y&&s>=r.next.y&&r.next.y!==r.y){const c=r.x+(s-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(c<=i&&c>n&&(n=c,a=r.x<r.next.x?r:r.next,c===i))return a}r=r.next}while(r!==e);if(!a)return null;const o=a,l=a.x,u=a.y;let d=1/0;r=a;do{if(i>=r.x&&r.x>=l&&i!==r.x&&zg(s<u?i:n,s,l,u,s<u?n:i,s,r.x,r.y)){const c=Math.abs(s-r.y)/(i-r.x);qi(r,t)&&(c<d||c===d&&(r.x>a.x||r.x===a.x&&V2(a,r)))&&(a=r,d=c)}r=r.next}while(r!==o);return a}function V2(t,e){return Me(t.prev,t,e.prev)<0&&Me(e.next,t,t.next)<0}function F2(t,e,r,i){let s=t;do s.z===0&&(s.z=To(s.x,s.y,e,r,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,W2(s)}function W2(t){let e,r=1;do{let i=t,s;t=null;let n=null;for(e=0;i;){e++;let a=i,o=0;for(let u=0;u<r&&(o++,a=a.nextZ,!!a);u++);let l=r;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),n?n.nextZ=s:t=s,s.prevZ=n,n=s;i=a}n.nextZ=null,r*=2}while(e>1);return t}function To(t,e,r,i,s){return t=(t-r)*s|0,e=(e-i)*s|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function q2(t){let e=t,r=t;do(e.x<r.x||e.x===r.x&&e.y<r.y)&&(r=e),e=e.next;while(e!==t);return r}function zg(t,e,r,i,s,n,a,o){return(s-a)*(e-o)>=(t-a)*(n-o)&&(t-a)*(i-o)>=(r-a)*(e-o)&&(r-a)*(n-o)>=(s-a)*(i-o)}function Ii(t,e,r,i,s,n,a,o){return!(t===a&&e===o)&&zg(t,e,r,i,s,n,a,o)}function H2(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!j2(t,e)&&(qi(t,e)&&qi(e,t)&&Y2(t,e)&&(Me(t.prev,t,e.prev)||Me(t,e.prev,e))||ri(t,e)&&Me(t.prev,t,t.next)>0&&Me(e.prev,e,e.next)>0)}function Me(t,e,r){return(e.y-t.y)*(r.x-e.x)-(e.x-t.x)*(r.y-e.y)}function ri(t,e){return t.x===e.x&&t.y===e.y}function Pg(t,e,r,i){const s=xs(Me(t,e,r)),n=xs(Me(t,e,i)),a=xs(Me(r,i,t)),o=xs(Me(r,i,e));return!!(s!==n&&a!==o||s===0&&ws(t,r,e)||n===0&&ws(t,i,e)||a===0&&ws(r,t,i)||o===0&&ws(r,e,i))}function ws(t,e,r){return e.x<=Math.max(t.x,r.x)&&e.x>=Math.min(t.x,r.x)&&e.y<=Math.max(t.y,r.y)&&e.y>=Math.min(t.y,r.y)}function xs(t){return t>0?1:t<0?-1:0}function j2(t,e){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==e.i&&r.next.i!==e.i&&Pg(r,r.next,t,e))return!0;r=r.next}while(r!==t);return!1}function qi(t,e){return Me(t.prev,t,t.next)<0?Me(t,e,t.next)>=0&&Me(t,t.prev,e)>=0:Me(t,e,t.prev)<0||Me(t,t.next,e)<0}function Y2(t,e){let r=t,i=!1;const s=(t.x+e.x)/2,n=(t.y+e.y)/2;do r.y>n!=r.next.y>n&&r.next.y!==r.y&&s<(r.next.x-r.x)*(n-r.y)/(r.next.y-r.y)+r.x&&(i=!i),r=r.next;while(r!==t);return i}function Rg(t,e){const r=Eo(t.i,t.x,t.y),i=Eo(e.i,e.x,e.y),s=t.next,n=e.prev;return t.next=e,e.prev=t,r.next=s,s.prev=r,i.next=r,r.prev=i,n.next=i,i.prev=n,i}function mc(t,e,r,i){const s=Eo(t,e,r);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Hi(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Eo(t,e,r){return{i:t,x:e,y:r,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function X2(t,e,r,i){let s=0;for(let n=e,a=r-i;n<r;n+=i)s+=(t[a]-t[n])*(t[n+1]+t[a+1]),a=n;return s}const K2=fc.default||fc;var Bg=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(Bg||{});class Z2{constructor(e){this.items=[],this._name=e}emit(e,r,i,s,n,a,o,l){const{name:u,items:d}=this;for(let c=0,p=d.length;c<p;c++)d[c][u](e,r,i,s,n,a,o,l);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const r=this.items.indexOf(e);return r!==-1&&this.items.splice(r,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Q2=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],Og=class Dg extends Qt{constructor(e){super(),this.tick=0,this.uid=Ne("renderer"),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const r=[...Q2,...this.config.runners??[]];this._addRunners(...r),this._unsafeEvalCheck()}async init(e={}){const r=e.skipExtensionImports===!0?!0:e.manageImports===!1;await z2(r),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const i in this._systemsHash)e={...this._systemsHash[i].constructor.defaultOptions,...e};e={...Dg.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let i=0;i<this.runners.init.items.length;i++)await this.runners.init.items[i].init(e);this._initOptions=e}render(e,r){this.tick++;let i=e;if(i instanceof Ke&&(i={container:i},r&&($e(Ge,"passing a second argument is deprecated, please use render options instead"),i.target=r.renderTexture)),i.target||(i.target=this.view.renderTarget),i.target===this.view.renderTarget&&(this._lastObjectRendered=i.container,i.clearColor??(i.clearColor=this.background.colorRgba),i.clear??(i.clear=this.background.clearBeforeRender)),i.clearColor){const s=Array.isArray(i.clearColor)&&i.clearColor.length===4;i.clearColor=s?i.clearColor:De.shared.setValue(i.clearColor).toArray()}i.transform||(i.container.updateLocalTransform(),i.transform=i.container.localTransform),i.container.visible&&(i.container.enableRenderGroup(),this.runners.prerender.emit(i),this.runners.renderStart.emit(i),this.runners.render.emit(i),this.runners.renderEnd.emit(i),this.runners.postrender.emit(i))}resize(e,r,i){const s=this.view.resolution;this.view.resize(e,r,i),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),i!==void 0&&i!==s&&this.runners.resolutionChange.emit(i)}clear(e={}){const r=this;e.target||(e.target=r.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=Bg.ALL);const{clear:i,clearColor:s,target:n,mipLevel:a,layer:o}=e;De.shared.setValue(s??this.background.colorRgba),r.renderTarget.clear(n,i,De.shared.toArray(),a??0,o??0)}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(r=>{this.runners[r]=new Z2(r)})}_addSystems(e){let r;for(r in e){const i=e[r];this._addSystem(i.value,i.name)}}_addSystem(e,r){const i=new e(this);if(this[r])throw new Error(`Whoops! The name "${r}" is already in use`);this[r]=i,this._systemsHash[r]=i;for(const s in this.runners)this.runners[s].add(i);return this}_addPipes(e,r){const i=r.reduce((s,n)=>(s[n.name]=n.value,s),{});e.forEach(s=>{const n=s.value,a=s.name,o=i[a];this.renderPipes[a]=new n(this,o?new o:null),this.runners.destroy.add(this.renderPipes[a])})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),(e===!0||typeof e=="object"&&e.releaseGlobalResources)&&nn.release(),Object.values(this.runners).forEach(r=>{r.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!P2())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};Og.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Ng=Og,vs;function J2(t){return vs!==void 0||(vs=(()=>{var r;const e={stencil:!0,failIfMajorPerformanceCaveat:t??Ng.defaultOptions.failIfMajorPerformanceCaveat};try{if(!dr.get().getWebGLRenderingContext())return!1;let s=dr.get().createCanvas().getContext("webgl",e);const n=!!((r=s==null?void 0:s.getContextAttributes())!=null&&r.stencil);if(s){const a=s.getExtension("WEBGL_lose_context");a&&a.loseContext()}return s=null,n}catch{return!1}})()),vs}let $s;async function ev(t={}){return $s!==void 0||($s=await(async()=>{const e=dr.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),$s}const gc=["webgl","webgpu","canvas"];async function tv(t){let e=[];t.preference?(e.push(t.preference),gc.forEach(n=>{n!==t.preference&&e.push(n)})):e=gc.slice();let r,i={};for(let n=0;n<e.length;n++){const a=e[n];if(a==="webgpu"&&await ev()){const{WebGPURenderer:o}=await Oi(async()=>{const{WebGPURenderer:l}=await import("./WebGPURenderer-siJYyGD0.js");return{WebGPURenderer:l}},__vite__mapDeps([3,4,5,2]));r=o,i={...t,...t.webgpu};break}else if(a==="webgl"&&J2(t.failIfMajorPerformanceCaveat??Ng.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:o}=await Oi(async()=>{const{WebGLRenderer:l}=await import("./WebGLRenderer-BWm_8SPS.js");return{WebGLRenderer:l}},__vite__mapDeps([6,4,5,2]));r=o,i={...t,...t.webgl};break}else if(a==="canvas"){const{CanvasRenderer:o}=await Oi(async()=>{const{CanvasRenderer:l}=await import("./CanvasRenderer-C-eKQgFJ.js");return{CanvasRenderer:l}},__vite__mapDeps([7,5,2]));r=o,i={...t,...t.canvasOptions};break}}if(delete i.webgpu,delete i.webgl,delete i.canvasOptions,!r)throw new Error("No available renderer for the current environment");const s=new r;return await s.init(i),s}const Lg="8.16.0";class Gg{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,Lg)}static destroy(){}}Gg.extension=_e.Application;class rv{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,Lg)}destroy(){this._renderer=null}}rv.extension={type:[_e.WebGLSystem,_e.WebGPUSystem],name:"initHook",priority:-10};class Ug{static init(e){Object.defineProperty(this,"resizeTo",{configurable:!0,set(r){globalThis.removeEventListener("resize",this.queueResize),this._resizeTo=r,r&&(globalThis.addEventListener("resize",this.queueResize),this.resize())},get(){return this._resizeTo}}),this.queueResize=()=>{this._resizeTo&&(this._cancelResize(),this._resizeId=requestAnimationFrame(()=>this.resize()))},this._cancelResize=()=>{this._resizeId&&(cancelAnimationFrame(this._resizeId),this._resizeId=null)},this.resize=()=>{if(!this._resizeTo)return;this._cancelResize();let r,i;if(this._resizeTo===globalThis.window)r=globalThis.innerWidth,i=globalThis.innerHeight;else{const{clientWidth:s,clientHeight:n}=this._resizeTo;r=s,i=n}this.renderer.resize(r,i),this.render()},this._resizeId=null,this._resizeTo=null,this.resizeTo=e.resizeTo||null}static destroy(){globalThis.removeEventListener("resize",this.queueResize),this._cancelResize(),this._cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null}}Ug.extension=_e.Application;class Vg{static init(e){e=Object.assign({autoStart:!0,sharedTicker:!1},e),Object.defineProperty(this,"ticker",{configurable:!0,set(r){this._ticker&&this._ticker.remove(this.render,this),this._ticker=r,r&&r.add(this.render,this,js.LOW)},get(){return this._ticker}}),this.stop=()=>{this._ticker.stop()},this.start=()=>{this._ticker.start()},this._ticker=null,this.ticker=e.sharedTicker?Zr.shared:new Zr,e.autoStart&&this.start()}static destroy(){if(this._ticker){const e=this._ticker;this.ticker=null,e.destroy()}}}Vg.extension=_e.Application;Ze.add(Ug);Ze.add(Vg);const Fg=class Ao{constructor(...e){this.stage=new Ke,e[0]!==void 0&&$e(Ge,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.stage||(this.stage=new Ke),this.renderer=await tv(e),Ao._plugins.forEach(r=>{r.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return $e(Ge,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,r=!1){const i=Ao._plugins.slice(0);i.reverse(),i.forEach(s=>{s.destroy.call(this)}),this.stage.destroy(r),this.stage=null,this.renderer.destroy(e),this.renderer=null}};Fg._plugins=[];let Wg=Fg;Ze.handleByList(_e.Application,Wg._plugins);Ze.add(Gg);var ra,yc;function iv(){if(yc)return ra;yc=1,ra=r;var t={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},e=/([astvzqmhlc])([^astvzqmhlc]*)/ig;function r(n){var a=[];return n.replace(e,function(o,l,u){var d=l.toLowerCase();for(u=s(u),d=="m"&&u.length>2&&(a.push([l].concat(u.splice(0,2))),d="l",l=l=="m"?"l":"L");;){if(u.length==t[d])return u.unshift(l),a.push(u);if(u.length<t[d])throw new Error("malformed path data");a.push([l].concat(u.splice(0,t[d])))}}),a}var i=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;function s(n){var a=n.match(i);return a?a.map(Number):[]}return ra}var sv=iv();const nv=Jo(sv);function av(t,e){const r=nv(t),i=[];let s=null,n=0,a=0;for(let o=0;o<r.length;o++){const l=r[o],u=l[0],d=l;switch(u){case"M":n=d[1],a=d[2],e.moveTo(n,a);break;case"m":n+=d[1],a+=d[2],e.moveTo(n,a);break;case"H":n=d[1],e.lineTo(n,a);break;case"h":n+=d[1],e.lineTo(n,a);break;case"V":a=d[1],e.lineTo(n,a);break;case"v":a+=d[1],e.lineTo(n,a);break;case"L":n=d[1],a=d[2],e.lineTo(n,a);break;case"l":n+=d[1],a+=d[2],e.lineTo(n,a);break;case"C":n=d[5],a=d[6],e.bezierCurveTo(d[1],d[2],d[3],d[4],n,a);break;case"c":e.bezierCurveTo(n+d[1],a+d[2],n+d[3],a+d[4],n+d[5],a+d[6]),n+=d[5],a+=d[6];break;case"S":n=d[3],a=d[4],e.bezierCurveToShort(d[1],d[2],n,a);break;case"s":e.bezierCurveToShort(n+d[1],a+d[2],n+d[3],a+d[4]),n+=d[3],a+=d[4];break;case"Q":n=d[3],a=d[4],e.quadraticCurveTo(d[1],d[2],n,a);break;case"q":e.quadraticCurveTo(n+d[1],a+d[2],n+d[3],a+d[4]),n+=d[3],a+=d[4];break;case"T":n=d[1],a=d[2],e.quadraticCurveToShort(n,a);break;case"t":n+=d[1],a+=d[2],e.quadraticCurveToShort(n,a);break;case"A":n=d[6],a=d[7],e.arcToSvg(d[1],d[2],d[3],d[4],d[5],n,a);break;case"a":n+=d[6],a+=d[7],e.arcToSvg(d[1],d[2],d[3],d[4],d[5],n,a);break;case"Z":case"z":e.closePath(),i.length>0&&(s=i.pop(),s?(n=s.startX,a=s.startY):(n=0,a=0)),s=null;break;default:ht(`Unknown SVG path command: ${u}`)}u!=="Z"&&u!=="z"&&s===null&&(s={startX:n,startY:a},i.push(s))}return e}class nl{constructor(e=0,r=0,i=0){this.type="circle",this.x=e,this.y=r,this.radius=i}clone(){return new nl(this.x,this.y,this.radius)}contains(e,r){if(this.radius<=0)return!1;const i=this.radius*this.radius;let s=this.x-e,n=this.y-r;return s*=s,n*=n,s+n<=i}strokeContains(e,r,i,s=.5){if(this.radius===0)return!1;const n=this.x-e,a=this.y-r,o=this.radius,l=(1-s)*i,u=Math.sqrt(n*n+a*a);return u<=o+l&&u>o-(i-l)}getBounds(e){return e||(e=new Xe),e.x=this.x-this.radius,e.y=this.y-this.radius,e.width=this.radius*2,e.height=this.radius*2,e}copyFrom(e){return this.x=e.x,this.y=e.y,this.radius=e.radius,this}copyTo(e){return e.copyFrom(this),e}toString(){return`[pixi.js/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`}}class al{constructor(e=0,r=0,i=0,s=0){this.type="ellipse",this.x=e,this.y=r,this.halfWidth=i,this.halfHeight=s}clone(){return new al(this.x,this.y,this.halfWidth,this.halfHeight)}contains(e,r){if(this.halfWidth<=0||this.halfHeight<=0)return!1;let i=(e-this.x)/this.halfWidth,s=(r-this.y)/this.halfHeight;return i*=i,s*=s,i+s<=1}strokeContains(e,r,i,s=.5){const{halfWidth:n,halfHeight:a}=this;if(n<=0||a<=0)return!1;const o=i*(1-s),l=i-o,u=n-l,d=a-l,c=n+o,p=a+o,f=e-this.x,m=r-this.y,y=f*f/(u*u)+m*m/(d*d),b=f*f/(c*c)+m*m/(p*p);return y>1&&b<=1}getBounds(e){return e||(e=new Xe),e.x=this.x-this.halfWidth,e.y=this.y-this.halfHeight,e.width=this.halfWidth*2,e.height=this.halfHeight*2,e}copyFrom(e){return this.x=e.x,this.y=e.y,this.halfWidth=e.halfWidth,this.halfHeight=e.halfHeight,this}copyTo(e){return e.copyFrom(this),e}toString(){return`[pixi.js/math:Ellipse x=${this.x} y=${this.y} halfWidth=${this.halfWidth} halfHeight=${this.halfHeight}]`}}function ov(t,e,r,i,s,n){const a=t-r,o=e-i,l=s-r,u=n-i,d=a*l+o*u,c=l*l+u*u;let p=-1;c!==0&&(p=d/c);let f,m;p<0?(f=r,m=i):p>1?(f=s,m=n):(f=r+p*l,m=i+p*u);const y=t-f,b=e-m;return y*y+b*b}let lv,uv;class Ni{constructor(...e){this.type="polygon";let r=Array.isArray(e[0])?e[0]:e;if(typeof r[0]!="number"){const i=[];for(let s=0,n=r.length;s<n;s++)i.push(r[s].x,r[s].y);r=i}this.points=r,this.closePath=!0}isClockwise(){let e=0;const r=this.points,i=r.length;for(let s=0;s<i;s+=2){const n=r[s],a=r[s+1],o=r[(s+2)%i],l=r[(s+3)%i];e+=(o-n)*(l+a)}return e<0}containsPolygon(e){const r=this.getBounds(lv),i=e.getBounds(uv);if(!r.containsRect(i))return!1;const s=e.points;for(let n=0;n<s.length;n+=2){const a=s[n],o=s[n+1];if(!this.contains(a,o))return!1}return!0}clone(){const e=this.points.slice(),r=new Ni(e);return r.closePath=this.closePath,r}contains(e,r){let i=!1;const s=this.points.length/2;for(let n=0,a=s-1;n<s;a=n++){const o=this.points[n*2],l=this.points[n*2+1],u=this.points[a*2],d=this.points[a*2+1];l>r!=d>r&&e<(u-o)*((r-l)/(d-l))+o&&(i=!i)}return i}strokeContains(e,r,i,s=.5){const n=i*i,a=n*(1-s),o=n-a,{points:l}=this,u=l.length-(this.closePath?0:2);for(let d=0;d<u;d+=2){const c=l[d],p=l[d+1],f=l[(d+2)%l.length],m=l[(d+3)%l.length],y=ov(e,r,c,p,f,m),b=Math.sign((f-c)*(r-p)-(m-p)*(e-c));if(y<=(b<0?o:a))return!0}return!1}getBounds(e){e||(e=new Xe);const r=this.points;let i=1/0,s=-1/0,n=1/0,a=-1/0;for(let o=0,l=r.length;o<l;o+=2){const u=r[o],d=r[o+1];i=u<i?u:i,s=u>s?u:s,n=d<n?d:n,a=d>a?d:a}return e.x=i,e.width=s-i,e.y=n,e.height=a-n,e}copyFrom(e){return this.points=e.points.slice(),this.closePath=e.closePath,this}copyTo(e){return e.copyFrom(this),e}toString(){return`[pixi.js/math:PolygoncloseStroke=${this.closePath}points=${this.points.reduce((e,r)=>`${e}, ${r}`,"")}]`}get lastX(){return this.points[this.points.length-2]}get lastY(){return this.points[this.points.length-1]}get x(){return $e("8.11.0","Polygon.lastX is deprecated, please use Polygon.lastX instead."),this.points[this.points.length-2]}get y(){return $e("8.11.0","Polygon.y is deprecated, please use Polygon.lastY instead."),this.points[this.points.length-1]}get startX(){return this.points[0]}get startY(){return this.points[1]}}const ks=(t,e,r,i,s,n,a)=>{const o=t-r,l=e-i,u=Math.sqrt(o*o+l*l);return u>=s-n&&u<=s+a};class ol{constructor(e=0,r=0,i=0,s=0,n=20){this.type="roundedRectangle",this.x=e,this.y=r,this.width=i,this.height=s,this.radius=n}getBounds(e){return e||(e=new Xe),e.x=this.x,e.y=this.y,e.width=this.width,e.height=this.height,e}clone(){return new ol(this.x,this.y,this.width,this.height,this.radius)}copyFrom(e){return this.x=e.x,this.y=e.y,this.width=e.width,this.height=e.height,this}copyTo(e){return e.copyFrom(this),e}contains(e,r){if(this.width<=0||this.height<=0)return!1;if(e>=this.x&&e<=this.x+this.width&&r>=this.y&&r<=this.y+this.height){const i=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(r>=this.y+i&&r<=this.y+this.height-i||e>=this.x+i&&e<=this.x+this.width-i)return!0;let s=e-(this.x+i),n=r-(this.y+i);const a=i*i;if(s*s+n*n<=a||(s=e-(this.x+this.width-i),s*s+n*n<=a)||(n=r-(this.y+this.height-i),s*s+n*n<=a)||(s=e-(this.x+i),s*s+n*n<=a))return!0}return!1}strokeContains(e,r,i,s=.5){const{x:n,y:a,width:o,height:l,radius:u}=this,d=i*(1-s),c=i-d,p=n+u,f=a+u,m=o-u*2,y=l-u*2,b=n+o,_=a+l;return(e>=n-d&&e<=n+c||e>=b-c&&e<=b+d)&&r>=f&&r<=f+y||(r>=a-d&&r<=a+c||r>=_-c&&r<=_+d)&&e>=p&&e<=p+m?!0:e<p&&r<f&&ks(e,r,p,f,u,c,d)||e>b-u&&r<f&&ks(e,r,b-u,f,u,c,d)||e>b-u&&r>_-u&&ks(e,r,b-u,_-u,u,c,d)||e<p&&r>_-u&&ks(e,r,p,_-u,u,c,d)}toString(){return`[pixi.js/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`}}const qg={};function dv(t,e,r){let i=2166136261;for(let s=0;s<e;s++)i^=t[s].uid,i=Math.imul(i,16777619),i>>>=0;return qg[i]||cv(t,e,i,r)}function cv(t,e,r,i){const s={};let n=0;for(let o=0;o<i;o++){const l=o<e?t[o]:Te.EMPTY.source;s[n++]=l.source,s[n++]=l.style}const a=new Vs(s);return qg[r]=a,a}class _c{constructor(e){typeof e=="number"?this.rawBinaryData=new ArrayBuffer(e):e instanceof Uint8Array?this.rawBinaryData=e.buffer:this.rawBinaryData=e,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}get float64View(){return this._float64Array||(this._float64Array=new Float64Array(this.rawBinaryData)),this._float64Array}get bigUint64View(){return this._bigUint64Array||(this._bigUint64Array=new BigUint64Array(this.rawBinaryData)),this._bigUint64Array}view(e){return this[`${e}View`]}destroy(){this.rawBinaryData=null,this.uint32View=null,this.float32View=null,this.uint16View=null,this._int8View=null,this._uint8View=null,this._int16View=null,this._int32View=null,this._float64Array=null,this._bigUint64Array=null}static sizeOf(e){switch(e){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${e} isn't a valid view type`)}}}function bc(t,e,r,i){if(r??(r=0),i??(i=Math.min(t.byteLength-r,e.byteLength)),!(r&7)&&!(i&7)){const s=i/8;new Float64Array(e,0,s).set(new Float64Array(t,r,s))}else if(!(r&3)&&!(i&3)){const s=i/4;new Float32Array(e,0,s).set(new Float32Array(t,r,s))}else new Uint8Array(e).set(new Uint8Array(t,r,i))}const hv={normal:"normal-npm",add:"add-npm",screen:"screen-npm"};var pv=(t=>(t[t.DISABLED=0]="DISABLED",t[t.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",t[t.MASK_ACTIVE=2]="MASK_ACTIVE",t[t.INVERSE_MASK_ACTIVE=3]="INVERSE_MASK_ACTIVE",t[t.RENDERING_MASK_REMOVE=4]="RENDERING_MASK_REMOVE",t[t.NONE=5]="NONE",t))(pv||{});function wc(t,e){return e.alphaMode==="no-premultiply-alpha"&&hv[t]||t}const fv=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function mv(t){let e="";for(let r=0;r<t;++r)r>0&&(e+=`
else `),r<t-1&&(e+=`if(test == ${r}.0){}`);return e}function gv(t,e){if(t===0)throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");const r=e.createShader(e.FRAGMENT_SHADER);try{for(;;){const i=fv.replace(/%forloop%/gi,mv(t));if(e.shaderSource(r,i),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS))t=t/2|0;else break}}finally{e.deleteShader(r)}return t}let qr=null;function yv(){var e;if(qr)return qr;const t=vg();return qr=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),qr=gv(qr,t),(e=t.getExtension("WEBGL_lose_context"))==null||e.loseContext(),qr}class _v{constructor(){this.ids=Object.create(null),this.textures=[],this.count=0}clear(){for(let e=0;e<this.count;e++){const r=this.textures[e];this.textures[e]=null,this.ids[r.uid]=null}this.count=0}}class bv{constructor(){this.renderPipeId="batch",this.action="startBatch",this.start=0,this.size=0,this.textures=new _v,this.blendMode="normal",this.topology="triangle-strip",this.canBundle=!0}destroy(){this.textures=null,this.gpuBindGroup=null,this.bindGroup=null,this.batcher=null,this.elements=null}}const Li=[];let Ys=0;nn.register({clear:()=>{if(Li.length>0)for(const t of Li)t&&t.destroy();Li.length=0,Ys=0}});function xc(){return Ys>0?Li[--Ys]:new bv}function vc(t){t.elements=null,Li[Ys++]=t}let fi=0;const Hg=class jg{constructor(e){this.uid=Ne("batcher"),this.dirty=!0,this.batchIndex=0,this.batches=[],this._elements=[],e={...jg.defaultOptions,...e},e.maxTextures||($e("v8.8.0","maxTextures is a required option for Batcher now, please pass it in the options"),e.maxTextures=yv());const{maxTextures:r,attributesInitialSize:i,indicesInitialSize:s}=e;this.attributeBuffer=new _c(i*4),this.indexBuffer=new Uint16Array(s),this.maxTextures=r}begin(){this.elementSize=0,this.elementStart=0,this.indexSize=0,this.attributeSize=0;for(let e=0;e<this.batchIndex;e++)vc(this.batches[e]);this.batchIndex=0,this._batchIndexStart=0,this._batchIndexSize=0,this.dirty=!0}add(e){this._elements[this.elementSize++]=e,e._indexStart=this.indexSize,e._attributeStart=this.attributeSize,e._batcher=this,this.indexSize+=e.indexSize,this.attributeSize+=e.attributeSize*this.vertexSize}checkAndUpdateTexture(e,r){const i=e._batch.textures.ids[r._source.uid];return!i&&i!==0?!1:(e._textureId=i,e.texture=r,!0)}updateElement(e){this.dirty=!0;const r=this.attributeBuffer;e.packAsQuad?this.packQuadAttributes(e,r.float32View,r.uint32View,e._attributeStart,e._textureId):this.packAttributes(e,r.float32View,r.uint32View,e._attributeStart,e._textureId)}break(e){const r=this._elements;if(!r[this.elementStart])return;let i=xc(),s=i.textures;s.clear();const n=r[this.elementStart];let a=wc(n.blendMode,n.texture._source),o=n.topology;this.attributeSize*4>this.attributeBuffer.size&&this._resizeAttributeBuffer(this.attributeSize*4),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);const l=this.attributeBuffer.float32View,u=this.attributeBuffer.uint32View,d=this.indexBuffer;let c=this._batchIndexSize,p=this._batchIndexStart,f="startBatch",m=[];const y=this.maxTextures;for(let b=this.elementStart;b<this.elementSize;++b){const _=r[b];r[b]=null;const $=_.texture._source,S=wc(_.blendMode,$),E=a!==S||o!==_.topology;if($._batchTick===fi&&!E){_._textureId=$._textureBindLocation,c+=_.indexSize,_.packAsQuad?(this.packQuadAttributes(_,l,u,_._attributeStart,_._textureId),this.packQuadIndex(d,_._indexStart,_._attributeStart/this.vertexSize)):(this.packAttributes(_,l,u,_._attributeStart,_._textureId),this.packIndex(_,d,_._indexStart,_._attributeStart/this.vertexSize)),_._batch=i,m.push(_);continue}$._batchTick=fi,(s.count>=y||E)&&(this._finishBatch(i,p,c-p,s,a,o,e,f,m),f="renderBatch",p=c,a=S,o=_.topology,i=xc(),s=i.textures,s.clear(),m=[],++fi),_._textureId=$._textureBindLocation=s.count,s.ids[$.uid]=s.count,s.textures[s.count++]=$,_._batch=i,m.push(_),c+=_.indexSize,_.packAsQuad?(this.packQuadAttributes(_,l,u,_._attributeStart,_._textureId),this.packQuadIndex(d,_._indexStart,_._attributeStart/this.vertexSize)):(this.packAttributes(_,l,u,_._attributeStart,_._textureId),this.packIndex(_,d,_._indexStart,_._attributeStart/this.vertexSize))}s.count>0&&(this._finishBatch(i,p,c-p,s,a,o,e,f,m),p=c,++fi),this.elementStart=this.elementSize,this._batchIndexStart=p,this._batchIndexSize=c}_finishBatch(e,r,i,s,n,a,o,l,u){e.gpuBindGroup=null,e.bindGroup=null,e.action=l,e.batcher=this,e.textures=s,e.blendMode=n,e.topology=a,e.start=r,e.size=i,e.elements=u,++fi,this.batches[this.batchIndex++]=e,o.add(e)}finish(e){this.break(e)}ensureAttributeBuffer(e){e*4<=this.attributeBuffer.size||this._resizeAttributeBuffer(e*4)}ensureIndexBuffer(e){e<=this.indexBuffer.length||this._resizeIndexBuffer(e)}_resizeAttributeBuffer(e){const r=Math.max(e,this.attributeBuffer.size*2),i=new _c(r);bc(this.attributeBuffer.rawBinaryData,i.rawBinaryData),this.attributeBuffer=i}_resizeIndexBuffer(e){const r=this.indexBuffer;let i=Math.max(e,r.length*1.5);i+=i%2;const s=i>65535?new Uint32Array(i):new Uint16Array(i);if(s.BYTES_PER_ELEMENT!==r.BYTES_PER_ELEMENT)for(let n=0;n<r.length;n++)s[n]=r[n];else bc(r.buffer,s.buffer);this.indexBuffer=s}packQuadIndex(e,r,i){e[r]=i+0,e[r+1]=i+1,e[r+2]=i+2,e[r+3]=i+0,e[r+4]=i+2,e[r+5]=i+3}packIndex(e,r,i,s){const n=e.indices,a=e.indexSize,o=e.indexOffset,l=e.attributeOffset;for(let u=0;u<a;u++)r[i++]=s+n[u+o]-l}destroy(e={}){var r;if(this.batches!==null){for(let i=0;i<this.batchIndex;i++)vc(this.batches[i]);this.batches=null,this.geometry.destroy(!0),this.geometry=null,e.shader&&((r=this.shader)==null||r.destroy(),this.shader=null);for(let i=0;i<this._elements.length;i++)this._elements[i]&&(this._elements[i]._batch=null);this._elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null}}};Hg.defaultOptions={maxTextures:null,attributesInitialSize:4,indicesInitialSize:6};let wv=Hg;var ot=(t=>(t[t.MAP_READ=1]="MAP_READ",t[t.MAP_WRITE=2]="MAP_WRITE",t[t.COPY_SRC=4]="COPY_SRC",t[t.COPY_DST=8]="COPY_DST",t[t.INDEX=16]="INDEX",t[t.VERTEX=32]="VERTEX",t[t.UNIFORM=64]="UNIFORM",t[t.STORAGE=128]="STORAGE",t[t.INDIRECT=256]="INDIRECT",t[t.QUERY_RESOLVE=512]="QUERY_RESOLVE",t[t.STATIC=1024]="STATIC",t))(ot||{});class ji extends Qt{constructor(e){let{data:r,size:i}=e;const{usage:s,label:n,shrinkToFit:a}=e;super(),this._gpuData=Object.create(null),this._gcLastUsed=-1,this.autoGarbageCollect=!0,this.uid=Ne("buffer"),this._resourceType="buffer",this._resourceId=Ne("resource"),this._touched=0,this._updateID=1,this._dataInt32=null,this.shrinkToFit=!0,this.destroyed=!1,r instanceof Array&&(r=new Float32Array(r)),this._data=r,i??(i=r==null?void 0:r.byteLength);const o=!!r;this.descriptor={size:i,usage:s,mappedAtCreation:o,label:n},this.shrinkToFit=a??!0}get data(){return this._data}set data(e){this.setDataWithSize(e,e.length,!0)}get dataInt32(){return this._dataInt32||(this._dataInt32=new Int32Array(this.data.buffer)),this._dataInt32}get static(){return!!(this.descriptor.usage&ot.STATIC)}set static(e){e?this.descriptor.usage|=ot.STATIC:this.descriptor.usage&=~ot.STATIC}setDataWithSize(e,r,i){if(this._updateID++,this._updateSize=r*e.BYTES_PER_ELEMENT,this._data===e){i&&this.emit("update",this);return}const s=this._data;if(this._data=e,this._dataInt32=null,!s||s.length!==e.length){!this.shrinkToFit&&s&&e.byteLength<s.byteLength?i&&this.emit("update",this):(this.descriptor.size=e.byteLength,this._resourceId=Ne("resource"),this.emit("change",this));return}i&&this.emit("update",this)}update(e){this._updateSize=e??this._updateSize,this._updateID++,this.emit("update",this)}unload(){var e;this.emit("unload",this);for(const r in this._gpuData)(e=this._gpuData[r])==null||e.destroy();this._gpuData=Object.create(null)}destroy(){this.destroyed=!0,this.unload(),this.emit("destroy",this),this.emit("change",this),this._data=null,this.descriptor=null,this.removeAllListeners()}}function Yg(t,e){if(!(t instanceof ji)){let r=e?ot.INDEX:ot.VERTEX;t instanceof Array&&(e?(t=new Uint32Array(t),r=ot.INDEX|ot.COPY_DST):(t=new Float32Array(t),r=ot.VERTEX|ot.COPY_DST)),t=new ji({data:t,label:e?"index-mesh-buffer":"vertex-mesh-buffer",usage:r})}return t}function xv(t,e,r){const i=t.getAttribute(e);if(!i)return r.minX=0,r.minY=0,r.maxX=0,r.maxY=0,r;const s=i.buffer.data;let n=1/0,a=1/0,o=-1/0,l=-1/0;const u=s.BYTES_PER_ELEMENT,d=(i.offset||0)/u,c=(i.stride||8)/u;for(let p=d;p<s.length;p+=c){const f=s[p],m=s[p+1];f>o&&(o=f),m>l&&(l=m),f<n&&(n=f),m<a&&(a=m)}return r.minX=n,r.minY=a,r.maxX=o,r.maxY=l,r}function vv(t){return(t instanceof ji||Array.isArray(t)||t.BYTES_PER_ELEMENT)&&(t={buffer:t}),t.buffer=Yg(t.buffer,!1),t}class $v extends Qt{constructor(e={}){super(),this._gpuData=Object.create(null),this.autoGarbageCollect=!0,this._gcLastUsed=-1,this.uid=Ne("geometry"),this._layoutKey=0,this.instanceCount=1,this._bounds=new Mt,this._boundsDirty=!0;const{attributes:r,indexBuffer:i,topology:s}=e;if(this.buffers=[],this.attributes={},r)for(const n in r)this.addAttribute(n,r[n]);this.instanceCount=e.instanceCount??1,i&&this.addIndex(i),this.topology=s||"triangle-list"}onBufferUpdate(){this._boundsDirty=!0,this.emit("update",this)}getAttribute(e){return this.attributes[e]}getIndex(){return this.indexBuffer}getBuffer(e){return this.getAttribute(e).buffer}getSize(){for(const e in this.attributes){const r=this.attributes[e];return r.buffer.data.length/(r.stride/4||r.size)}return 0}addAttribute(e,r){const i=vv(r);this.buffers.indexOf(i.buffer)===-1&&(this.buffers.push(i.buffer),i.buffer.on("update",this.onBufferUpdate,this),i.buffer.on("change",this.onBufferUpdate,this)),this.attributes[e]=i}addIndex(e){this.indexBuffer=Yg(e,!0),this.buffers.push(this.indexBuffer)}get bounds(){return this._boundsDirty?(this._boundsDirty=!1,xv(this,"aPosition",this._bounds)):this._bounds}unload(){var e;this.emit("unload",this);for(const r in this._gpuData)(e=this._gpuData[r])==null||e.destroy();this._gpuData=Object.create(null)}destroy(e=!1){var r;this.emit("destroy",this),this.removeAllListeners(),e&&this.buffers.forEach(i=>i.destroy()),this.unload(),(r=this.indexBuffer)==null||r.destroy(),this.attributes=null,this.buffers=null,this.indexBuffer=null,this._bounds=null}}const kv=new Float32Array(1),Sv=new Uint32Array(1);class Cv extends $v{constructor(){const r=new ji({data:kv,label:"attribute-batch-buffer",usage:ot.VERTEX|ot.COPY_DST,shrinkToFit:!1}),i=new ji({data:Sv,label:"index-batch-buffer",usage:ot.INDEX|ot.COPY_DST,shrinkToFit:!1}),s=24;super({attributes:{aPosition:{buffer:r,format:"float32x2",stride:s,offset:0},aUV:{buffer:r,format:"float32x2",stride:s,offset:8},aColor:{buffer:r,format:"unorm8x4",stride:s,offset:16},aTextureIdAndRound:{buffer:r,format:"uint16x2",stride:s,offset:20}},indexBuffer:i})}}function $c(t,e,r){if(t)for(const i in t){const s=i.toLocaleLowerCase(),n=e[s];if(n){let a=t[i];i==="header"&&(a=a.replace(/@in\s+[^;]+;\s*/g,"").replace(/@out\s+[^;]+;\s*/g,"")),r&&n.push(`//----${r}----//`),n.push(a)}else ht(`${i} placement hook does not exist in shader`)}}const Tv=/\{\{(.*?)\}\}/g;function kc(t){var i;const e={};return(((i=t.match(Tv))==null?void 0:i.map(s=>s.replace(/[{()}]/g,"")))??[]).forEach(s=>{e[s]=[]}),e}function Sc(t,e){let r;const i=/@in\s+([^;]+);/g;for(;(r=i.exec(t))!==null;)e.push(r[1])}function Cc(t,e,r=!1){const i=[];Sc(e,i),t.forEach(o=>{o.header&&Sc(o.header,i)});const s=i;r&&s.sort();const n=s.map((o,l)=>`       @location(${l}) ${o},`).join(`
`);let a=e.replace(/@in\s+[^;]+;\s*/g,"");return a=a.replace("{{in}}",`
${n}
`),a}function Tc(t,e){let r;const i=/@out\s+([^;]+);/g;for(;(r=i.exec(t))!==null;)e.push(r[1])}function Ev(t){const r=/\b(\w+)\s*:/g.exec(t);return r?r[1]:""}function Av(t){const e=/@.*?\s+/g;return t.replace(e,"")}function Iv(t,e){const r=[];Tc(e,r),t.forEach(l=>{l.header&&Tc(l.header,r)});let i=0;const s=r.sort().map(l=>l.indexOf("builtin")>-1?l:`@location(${i++}) ${l}`).join(`,
`),n=r.sort().map(l=>`       var ${Av(l)};`).join(`
`),a=`return VSOutput(
            ${r.sort().map(l=>` ${Ev(l)}`).join(`,
`)});`;let o=e.replace(/@out\s+[^;]+;\s*/g,"");return o=o.replace("{{struct}}",`
${s}
`),o=o.replace("{{start}}",`
${n}
`),o=o.replace("{{return}}",`
${a}
`),o}function Ec(t,e){let r=t;for(const i in e){const s=e[i];s.join(`
`).length?r=r.replace(`{{${i}}}`,`//-----${i} START-----//
${s.join(`
`)}
//----${i} FINISH----//`):r=r.replace(`{{${i}}}`,"")}return r}const lr=Object.create(null),ia=new Map;let Mv=0;function zv({template:t,bits:e}){const r=Xg(t,e);if(lr[r])return lr[r];const{vertex:i,fragment:s}=Rv(t,e);return lr[r]=Kg(i,s,e),lr[r]}function Pv({template:t,bits:e}){const r=Xg(t,e);return lr[r]||(lr[r]=Kg(t.vertex,t.fragment,e)),lr[r]}function Rv(t,e){const r=e.map(a=>a.vertex).filter(a=>!!a),i=e.map(a=>a.fragment).filter(a=>!!a);let s=Cc(r,t.vertex,!0);s=Iv(r,s);const n=Cc(i,t.fragment,!0);return{vertex:s,fragment:n}}function Xg(t,e){return e.map(r=>(ia.has(r)||ia.set(r,Mv++),ia.get(r))).sort((r,i)=>r-i).join("-")+t.vertex+t.fragment}function Kg(t,e,r){const i=kc(t),s=kc(e);return r.forEach(n=>{$c(n.vertex,i,n.name),$c(n.fragment,s,n.name)}),{vertex:Ec(t,i),fragment:Ec(e,s)}}const Bv=`
    @in aPosition: vec2<f32>;
    @in aUV: vec2<f32>;

    @out @builtin(position) vPosition: vec4<f32>;
    @out vUV : vec2<f32>;
    @out vColor : vec4<f32>;

    {{header}}

    struct VSOutput {
        {{struct}}
    };

    @vertex
    fn main( {{in}} ) -> VSOutput {

        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;
        var modelMatrix = mat3x3<f32>(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        var position = aPosition;
        var uv = aUV;

        {{start}}

        vColor = vec4<f32>(1., 1., 1., 1.);

        {{main}}

        vUV = uv;

        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;

        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);

        vColor *= globalUniforms.uWorldColorAlpha;

        {{end}}

        {{return}}
    };
`,Ov=`
    @in vUV : vec2<f32>;
    @in vColor : vec4<f32>;

    {{header}}

    @fragment
    fn main(
        {{in}}
      ) -> @location(0) vec4<f32> {

        {{start}}

        var outColor:vec4<f32>;

        {{main}}

        var finalColor:vec4<f32> = outColor * vColor;

        {{end}}

        return finalColor;
      };
`,Dv=`
    in vec2 aPosition;
    in vec2 aUV;

    out vec4 vColor;
    out vec2 vUV;

    {{header}}

    void main(void){

        mat3 worldTransformMatrix = uWorldTransformMatrix;
        mat3 modelMatrix = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        vec2 position = aPosition;
        vec2 uv = aUV;

        {{start}}

        vColor = vec4(1.);

        {{main}}

        vUV = uv;

        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;

        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

        vColor *= uWorldColorAlpha;

        {{end}}
    }
`,Nv=`

    in vec4 vColor;
    in vec2 vUV;

    out vec4 finalColor;

    {{header}}

    void main(void) {

        {{start}}

        vec4 outColor;

        {{main}}

        finalColor = outColor * vColor;

        {{end}}
    }
`,Lv={name:"global-uniforms-bit",vertex:{header:`
        struct GlobalUniforms {
            uProjectionMatrix:mat3x3<f32>,
            uWorldTransformMatrix:mat3x3<f32>,
            uWorldColorAlpha: vec4<f32>,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `}},Gv={name:"global-uniforms-bit",vertex:{header:`
          uniform mat3 uProjectionMatrix;
          uniform mat3 uWorldTransformMatrix;
          uniform vec4 uWorldColorAlpha;
          uniform vec2 uResolution;
        `}};function Uv({bits:t,name:e}){const r=zv({template:{fragment:Ov,vertex:Bv},bits:[Lv,...t]});return on.from({name:e,vertex:{source:r.vertex,entryPoint:"main"},fragment:{source:r.fragment,entryPoint:"main"}})}function Vv({bits:t,name:e}){return new kg({name:e,...Pv({template:{vertex:Dv,fragment:Nv},bits:[Gv,...t]})})}const Fv={name:"color-bit",vertex:{header:`
            @in aColor: vec4<f32>;
        `,main:`
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `}},Wv={name:"color-bit",vertex:{header:`
            in vec4 aColor;
        `,main:`
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `}},sa={};function qv(t){const e=[];if(t===1)e.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"),e.push("@group(1) @binding(1) var textureSampler1: sampler;");else{let r=0;for(let i=0;i<t;i++)e.push(`@group(1) @binding(${r++}) var textureSource${i+1}: texture_2d<f32>;`),e.push(`@group(1) @binding(${r++}) var textureSampler${i+1}: sampler;`)}return e.join(`
`)}function Hv(t){const e=[];if(t===1)e.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");else{e.push("switch vTextureId {");for(let r=0;r<t;r++)r===t-1?e.push("  default:{"):e.push(`  case ${r}:{`),e.push(`      outColor = textureSampleGrad(textureSource${r+1}, textureSampler${r+1}, vUV, uvDx, uvDy);`),e.push("      break;}");e.push("}")}return e.join(`
`)}function jv(t){return sa[t]||(sa[t]={name:"texture-batch-bit",vertex:{header:`
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            `},fragment:{header:`
                @in @interpolate(flat) vTextureId: u32;

                ${qv(t)}
            `,main:`
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);

                ${Hv(t)}
            `}}),sa[t]}const na={};function Yv(t){const e=[];for(let r=0;r<t;r++)r>0&&e.push("else"),r<t-1&&e.push(`if(vTextureId < ${r}.5)`),e.push("{"),e.push(`	outColor = texture(uTextures[${r}], vUV);`),e.push("}");return e.join(`
`)}function Xv(t){return na[t]||(na[t]={name:"texture-batch-bit",vertex:{header:`
                in vec2 aTextureIdAndRound;
                out float vTextureId;

            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            `},fragment:{header:`
                in float vTextureId;

                uniform sampler2D uTextures[${t}];

            `,main:`

                ${Yv(t)}
            `}}),na[t]}const Kv={name:"round-pixels-bit",vertex:{header:`
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32>
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},Zv={name:"round-pixels-bit",vertex:{header:`
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},Ac={};function Qv(t){let e=Ac[t];if(e)return e;const r=new Int32Array(t);for(let i=0;i<t;i++)r[i]=i;return e=Ac[t]=new Eg({uTextures:{value:r,type:"i32",size:t}},{isStatic:!0}),e}class Ic extends sl{constructor(e){const r=Vv({name:"batch",bits:[Wv,Xv(e),Zv]}),i=Uv({name:"batch",bits:[Fv,jv(e),Kv]});super({glProgram:r,gpuProgram:i,resources:{batchSamplers:Qv(e)}}),this.maxTextures=e}}let mi=null;const Zg=class Qg extends wv{constructor(e){super(e),this.geometry=new Cv,this.name=Qg.extension.name,this.vertexSize=6,mi??(mi=new Ic(e.maxTextures)),this.shader=mi}packAttributes(e,r,i,s,n){const a=n<<16|e.roundPixels&65535,o=e.transform,l=o.a,u=o.b,d=o.c,c=o.d,p=o.tx,f=o.ty,{positions:m,uvs:y}=e,b=e.color,_=e.attributeOffset,x=_+e.attributeSize;for(let $=_;$<x;$++){const S=$*2,E=m[S],T=m[S+1];r[s++]=l*E+d*T+p,r[s++]=c*T+u*E+f,r[s++]=y[S],r[s++]=y[S+1],i[s++]=b,i[s++]=a}}packQuadAttributes(e,r,i,s,n){const a=e.texture,o=e.transform,l=o.a,u=o.b,d=o.c,c=o.d,p=o.tx,f=o.ty,m=e.bounds,y=m.maxX,b=m.minX,_=m.maxY,x=m.minY,$=a.uvs,S=e.color,E=n<<16|e.roundPixels&65535;r[s+0]=l*b+d*x+p,r[s+1]=c*x+u*b+f,r[s+2]=$.x0,r[s+3]=$.y0,i[s+4]=S,i[s+5]=E,r[s+6]=l*y+d*x+p,r[s+7]=c*x+u*y+f,r[s+8]=$.x1,r[s+9]=$.y1,i[s+10]=S,i[s+11]=E,r[s+12]=l*y+d*_+p,r[s+13]=c*_+u*y+f,r[s+14]=$.x2,r[s+15]=$.y2,i[s+16]=S,i[s+17]=E,r[s+18]=l*b+d*_+p,r[s+19]=c*_+u*b+f,r[s+20]=$.x3,r[s+21]=$.y3,i[s+22]=S,i[s+23]=E}_updateMaxTextures(e){this.shader.maxTextures!==e&&(mi=new Ic(e),this.shader=mi)}destroy(){this.shader=null,super.destroy()}};Zg.extension={type:[_e.Batcher],name:"default"};let Jv=Zg;class ln{constructor(e){this.items=Object.create(null);const{renderer:r,type:i,onUnload:s,priority:n,name:a}=e;this._renderer=r,r.gc.addResourceHash(this,"items",i,n??0),this._onUnload=s,this.name=a}add(e){return this.items[e.uid]?!1:(this.items[e.uid]=e,e.once("unload",this.remove,this),e._gcLastUsed=this._renderer.gc.now,!0)}remove(e,...r){var s;if(!this.items[e.uid])return;const i=e._gpuData[this._renderer.uid];i&&((s=this._onUnload)==null||s.call(this,e,...r),i.destroy(),e._gpuData[this._renderer.uid]=null,this.items[e.uid]=null)}removeAll(...e){Object.values(this.items).forEach(r=>r&&this.remove(r,...e))}destroy(...e){this.removeAll(...e),this.items=Object.create(null),this._renderer=null,this._onUnload=null}}function e$(t,e,r,i,s,n,a,o=null){let l=0;r*=e,s*=n;const u=o.a,d=o.b,c=o.c,p=o.d,f=o.tx,m=o.ty;for(;l<a;){const y=t[r],b=t[r+1];i[s]=u*y+c*b+f,i[s+1]=d*y+p*b+m,s+=n,r+=e,l++}}function t$(t,e,r,i){let s=0;for(e*=r;s<i;)t[e]=0,t[e+1]=0,e+=r,s++}function Jg(t,e,r,i,s){const n=e.a,a=e.b,o=e.c,l=e.d,u=e.tx,d=e.ty;r||(r=0),i||(i=2),s||(s=t.length/i-r);let c=r*i;for(let p=0;p<s;p++){const f=t[c],m=t[c+1];t[c]=n*f+o*m+u,t[c+1]=a*f+l*m+d,c+=i}}const r$=new ye;class ll{constructor(){this.packAsQuad=!1,this.batcherName="default",this.topology="triangle-list",this.applyTransform=!0,this.roundPixels=0,this._batcher=null,this._batch=null}get uvs(){return this.geometryData.uvs}get positions(){return this.geometryData.vertices}get indices(){return this.geometryData.indices}get blendMode(){return this.renderable&&this.applyTransform?this.renderable.groupBlendMode:"normal"}get color(){const e=this.baseColor,r=e>>16|e&65280|(e&255)<<16,i=this.renderable;return i?tg(r,i.groupColor)+(this.alpha*i.groupAlpha*255<<24):r+(this.alpha*255<<24)}get transform(){var e;return((e=this.renderable)==null?void 0:e.groupTransform)||r$}copyTo(e){e.indexOffset=this.indexOffset,e.indexSize=this.indexSize,e.attributeOffset=this.attributeOffset,e.attributeSize=this.attributeSize,e.baseColor=this.baseColor,e.alpha=this.alpha,e.texture=this.texture,e.geometryData=this.geometryData,e.topology=this.topology}reset(){this.applyTransform=!0,this.renderable=null,this.topology="triangle-list"}destroy(){this.renderable=null,this.texture=null,this.geometryData=null,this._batcher=null,this._batch=null}}const Yi={extension:{type:_e.ShapeBuilder,name:"circle"},build(t,e){let r,i,s,n,a,o;if(t.type==="circle"){const S=t;if(a=o=S.radius,a<=0)return!1;r=S.x,i=S.y,s=n=0}else if(t.type==="ellipse"){const S=t;if(a=S.halfWidth,o=S.halfHeight,a<=0||o<=0)return!1;r=S.x,i=S.y,s=n=0}else{const S=t,E=S.width/2,T=S.height/2;r=S.x+E,i=S.y+T,a=o=Math.max(0,Math.min(S.radius,Math.min(E,T))),s=E-a,n=T-o}if(s<0||n<0)return!1;const l=Math.ceil(2.3*Math.sqrt(a+o)),u=l*8+(s?4:0)+(n?4:0);if(u===0)return!1;if(l===0)return e[0]=e[6]=r+s,e[1]=e[3]=i+n,e[2]=e[4]=r-s,e[5]=e[7]=i-n,!0;let d=0,c=l*4+(s?2:0)+2,p=c,f=u,m=s+a,y=n,b=r+m,_=r-m,x=i+y;if(e[d++]=b,e[d++]=x,e[--c]=x,e[--c]=_,n){const S=i-y;e[p++]=_,e[p++]=S,e[--f]=S,e[--f]=b}for(let S=1;S<l;S++){const E=Math.PI/2*(S/l),T=s+Math.cos(E)*a,A=n+Math.sin(E)*o,k=r+T,P=r-T,M=i+A,N=i-A;e[d++]=k,e[d++]=M,e[--c]=M,e[--c]=P,e[p++]=P,e[p++]=N,e[--f]=N,e[--f]=k}m=s,y=n+o,b=r+m,_=r-m,x=i+y;const $=i-y;return e[d++]=b,e[d++]=x,e[--f]=$,e[--f]=b,s&&(e[d++]=_,e[d++]=x,e[--f]=$,e[--f]=_),!0},triangulate(t,e,r,i,s,n){if(t.length===0)return;let a=0,o=0;for(let d=0;d<t.length;d+=2)a+=t[d],o+=t[d+1];a/=t.length/2,o/=t.length/2;let l=i;e[l*r]=a,e[l*r+1]=o;const u=l++;for(let d=0;d<t.length;d+=2)e[l*r]=t[d],e[l*r+1]=t[d+1],d>0&&(s[n++]=l,s[n++]=u,s[n++]=l-1),l++;s[n++]=u+1,s[n++]=u,s[n++]=l-1}},i$={...Yi,extension:{...Yi.extension,name:"ellipse"}},s$={...Yi,extension:{...Yi.extension,name:"roundedRectangle"}},e0=1e-4,Mc=1e-4;function n$(t){const e=t.length;if(e<6)return 1;let r=0;for(let i=0,s=t[e-2],n=t[e-1];i<e;i+=2){const a=t[i],o=t[i+1];r+=(a-s)*(o+n),s=a,n=o}return r<0?-1:1}function zc(t,e,r,i,s,n,a,o){const l=t-r*s,u=e-i*s,d=t+r*n,c=e+i*n;let p,f;a?(p=i,f=-r):(p=-i,f=r);const m=l+p,y=u+f,b=d+p,_=c+f;return o.push(m,y),o.push(b,_),2}function gr(t,e,r,i,s,n,a,o){const l=r-t,u=i-e;let d=Math.atan2(l,u),c=Math.atan2(s-t,n-e);o&&d<c?d+=Math.PI*2:!o&&d>c&&(c+=Math.PI*2);let p=d;const f=c-d,m=Math.abs(f),y=Math.sqrt(l*l+u*u),b=(15*m*Math.sqrt(y)/Math.PI>>0)+1,_=f/b;if(p+=_,o){a.push(t,e),a.push(r,i);for(let x=1,$=p;x<b;x++,$+=_)a.push(t,e),a.push(t+Math.sin($)*y,e+Math.cos($)*y);a.push(t,e),a.push(s,n)}else{a.push(r,i),a.push(t,e);for(let x=1,$=p;x<b;x++,$+=_)a.push(t+Math.sin($)*y,e+Math.cos($)*y),a.push(t,e);a.push(s,n),a.push(t,e)}return b*2}function a$(t,e,r,i,s,n){const a=e0;if(t.length===0)return;const o=e;let l=o.alignment;if(e.alignment!==.5){let F=n$(t);l=(l-.5)*F+.5}const u=new it(t[0],t[1]),d=new it(t[t.length-2],t[t.length-1]),c=i,p=Math.abs(u.x-d.x)<a&&Math.abs(u.y-d.y)<a;if(c){t=t.slice(),p&&(t.pop(),t.pop(),d.set(t[t.length-2],t[t.length-1]));const F=(u.x+d.x)*.5,se=(d.y+u.y)*.5;t.unshift(F,se),t.push(F,se)}const f=s,m=t.length/2;let y=t.length;const b=f.length/2,_=o.width/2,x=_*_,$=o.miterLimit*o.miterLimit;let S=t[0],E=t[1],T=t[2],A=t[3],k=0,P=0,M=-(E-A),N=S-T,W=0,L=0,R=Math.sqrt(M*M+N*N);M/=R,N/=R,M*=_,N*=_;const q=l,O=(1-q)*2,V=q*2;c||(o.cap==="round"?y+=gr(S-M*(O-V)*.5,E-N*(O-V)*.5,S-M*O,E-N*O,S+M*V,E+N*V,f,!0)+2:o.cap==="square"&&(y+=zc(S,E,M,N,O,V,!0,f))),f.push(S-M*O,E-N*O),f.push(S+M*V,E+N*V);for(let F=1;F<m-1;++F){S=t[(F-1)*2],E=t[(F-1)*2+1],T=t[F*2],A=t[F*2+1],k=t[(F+1)*2],P=t[(F+1)*2+1],M=-(E-A),N=S-T,R=Math.sqrt(M*M+N*N),M/=R,N/=R,M*=_,N*=_,W=-(A-P),L=T-k,R=Math.sqrt(W*W+L*L),W/=R,L/=R,W*=_,L*=_;const se=T-S,H=E-A,K=T-k,Z=P-A,Y=se*K+H*Z,he=H*K-Z*se,Fe=he<0;if(Math.abs(he)<.001*Math.abs(Y)){f.push(T-M*O,A-N*O),f.push(T+M*V,A+N*V),Y>=0&&(o.join==="round"?y+=gr(T,A,T-M*O,A-N*O,T-W*O,A-L*O,f,!1)+4:y+=2,f.push(T-W*V,A-L*V),f.push(T+W*O,A+L*O));continue}const Ee=(-M+S)*(-N+A)-(-M+T)*(-N+E),Qe=(-W+k)*(-L+A)-(-W+T)*(-L+P),Le=(se*Qe-K*Ee)/he,We=(Z*Ee-H*Qe)/he,qe=(Le-T)*(Le-T)+(We-A)*(We-A),et=T+(Le-T)*O,fe=A+(We-A)*O,re=T-(Le-T)*V,Be=A-(We-A)*V,Gr=Math.min(se*se+H*H,K*K+Z*Z),er=Fe?O:V,Pt=Gr+er*er*x;qe<=Pt?o.join==="bevel"||qe/x>$?(Fe?(f.push(et,fe),f.push(T+M*V,A+N*V),f.push(et,fe),f.push(T+W*V,A+L*V)):(f.push(T-M*O,A-N*O),f.push(re,Be),f.push(T-W*O,A-L*O),f.push(re,Be)),y+=2):o.join==="round"?Fe?(f.push(et,fe),f.push(T+M*V,A+N*V),y+=gr(T,A,T+M*V,A+N*V,T+W*V,A+L*V,f,!0)+4,f.push(et,fe),f.push(T+W*V,A+L*V)):(f.push(T-M*O,A-N*O),f.push(re,Be),y+=gr(T,A,T-M*O,A-N*O,T-W*O,A-L*O,f,!1)+4,f.push(T-W*O,A-L*O),f.push(re,Be)):(f.push(et,fe),f.push(re,Be)):(f.push(T-M*O,A-N*O),f.push(T+M*V,A+N*V),o.join==="round"?Fe?y+=gr(T,A,T+M*V,A+N*V,T+W*V,A+L*V,f,!0)+2:y+=gr(T,A,T-M*O,A-N*O,T-W*O,A-L*O,f,!1)+2:o.join==="miter"&&qe/x<=$&&(Fe?(f.push(re,Be),f.push(re,Be)):(f.push(et,fe),f.push(et,fe)),y+=2),f.push(T-W*O,A-L*O),f.push(T+W*V,A+L*V),y+=2)}S=t[(m-2)*2],E=t[(m-2)*2+1],T=t[(m-1)*2],A=t[(m-1)*2+1],M=-(E-A),N=S-T,R=Math.sqrt(M*M+N*N),M/=R,N/=R,M*=_,N*=_,f.push(T-M*O,A-N*O),f.push(T+M*V,A+N*V),c||(o.cap==="round"?y+=gr(T-M*(O-V)*.5,A-N*(O-V)*.5,T-M*O,A-N*O,T+M*V,A+N*V,f,!1)+2:o.cap==="square"&&(y+=zc(T,A,M,N,O,V,!1,f)));const ae=Mc*Mc;for(let F=b;F<y+b-2;++F)S=f[F*2],E=f[F*2+1],T=f[(F+1)*2],A=f[(F+1)*2+1],k=f[(F+2)*2],P=f[(F+2)*2+1],!(Math.abs(S*(A-P)+T*(P-E)+k*(E-A))<ae)&&n.push(F,F+1,F+2)}function o$(t,e,r,i){const s=e0;if(t.length===0)return;const n=t[0],a=t[1],o=t[t.length-2],l=t[t.length-1],u=e||Math.abs(n-o)<s&&Math.abs(a-l)<s,d=r,c=t.length/2,p=d.length/2;for(let f=0;f<c;f++)d.push(t[f*2]),d.push(t[f*2+1]);for(let f=0;f<c-1;f++)i.push(p+f,p+f+1);u&&i.push(p+c-1,p)}function t0(t,e,r,i,s,n,a){const o=K2(t,e,2);if(!o)return;for(let u=0;u<o.length;u+=3)n[a++]=o[u]+s,n[a++]=o[u+1]+s,n[a++]=o[u+2]+s;let l=s*i;for(let u=0;u<t.length;u+=2)r[l]=t[u],r[l+1]=t[u+1],l+=i}const l$=[],u$={extension:{type:_e.ShapeBuilder,name:"polygon"},build(t,e){for(let r=0;r<t.points.length;r++)e[r]=t.points[r];return!0},triangulate(t,e,r,i,s,n){t0(t,l$,e,r,i,s,n)}},d$={extension:{type:_e.ShapeBuilder,name:"rectangle"},build(t,e){const r=t,i=r.x,s=r.y,n=r.width,a=r.height;return n>0&&a>0?(e[0]=i,e[1]=s,e[2]=i+n,e[3]=s,e[4]=i+n,e[5]=s+a,e[6]=i,e[7]=s+a,!0):!1},triangulate(t,e,r,i,s,n){let a=0;i*=r,e[i+a]=t[0],e[i+a+1]=t[1],a+=r,e[i+a]=t[2],e[i+a+1]=t[3],a+=r,e[i+a]=t[6],e[i+a+1]=t[7],a+=r,e[i+a]=t[4],e[i+a+1]=t[5],a+=r;const o=i/r;s[n++]=o,s[n++]=o+1,s[n++]=o+2,s[n++]=o+1,s[n++]=o+3,s[n++]=o+2}},c$={extension:{type:_e.ShapeBuilder,name:"triangle"},build(t,e){return e[0]=t.x,e[1]=t.y,e[2]=t.x2,e[3]=t.y2,e[4]=t.x3,e[5]=t.y3,!0},triangulate(t,e,r,i,s,n){let a=0;i*=r,e[i+a]=t[0],e[i+a+1]=t[1],a+=r,e[i+a]=t[2],e[i+a+1]=t[3],a+=r,e[i+a]=t[4],e[i+a+1]=t[5];const o=i/r;s[n++]=o,s[n++]=o+1,s[n++]=o+2}},Pc=[{offset:0,color:"white"},{offset:1,color:"black"}],ul=class Io{constructor(...e){this.uid=Ne("fillGradient"),this._tick=0,this.type="linear",this.colorStops=[];let r=h$(e);r={...r.type==="radial"?Io.defaultRadialOptions:Io.defaultLinearOptions,...Wm(r)},this._textureSize=r.textureSize,this._wrapMode=r.wrapMode,r.type==="radial"?(this.center=r.center,this.outerCenter=r.outerCenter??this.center,this.innerRadius=r.innerRadius,this.outerRadius=r.outerRadius,this.scale=r.scale,this.rotation=r.rotation):(this.start=r.start,this.end=r.end),this.textureSpace=r.textureSpace,this.type=r.type,r.colorStops.forEach(s=>{this.addColorStop(s.offset,s.color)})}addColorStop(e,r){return this.colorStops.push({offset:e,color:De.shared.setValue(r).toHexa()}),this}buildLinearGradient(){if(this.texture)return;let{x:e,y:r}=this.start,{x:i,y:s}=this.end,n=i-e,a=s-r;const o=n<0||a<0;if(this._wrapMode==="clamp-to-edge"){if(n<0){const b=e;e=i,i=b,n*=-1}if(a<0){const b=r;r=s,s=b,a*=-1}}const l=this.colorStops.length?this.colorStops:Pc,u=this._textureSize,{canvas:d,context:c}=Bc(u,1),p=o?c.createLinearGradient(this._textureSize,0,0,0):c.createLinearGradient(0,0,this._textureSize,0);Rc(p,l),c.fillStyle=p,c.fillRect(0,0,u,1),this.texture=new Te({source:new Hs({resource:d,addressMode:this._wrapMode})});const f=Math.sqrt(n*n+a*a),m=Math.atan2(a,n),y=new ye;y.scale(f/u,1),y.rotate(m),y.translate(e,r),this.textureSpace==="local"&&y.scale(u,u),this.transform=y}buildGradient(){this.texture||this._tick++,this.type==="linear"?this.buildLinearGradient():this.buildRadialGradient()}buildRadialGradient(){if(this.texture)return;const e=this.colorStops.length?this.colorStops:Pc,r=this._textureSize,{canvas:i,context:s}=Bc(r,r),{x:n,y:a}=this.center,{x:o,y:l}=this.outerCenter,u=this.innerRadius,d=this.outerRadius,c=o-d,p=l-d,f=r/(d*2),m=(n-c)*f,y=(a-p)*f,b=s.createRadialGradient(m,y,u*f,(o-c)*f,(l-p)*f,d*f);Rc(b,e),s.fillStyle=e[e.length-1].color,s.fillRect(0,0,r,r),s.fillStyle=b,s.translate(m,y),s.rotate(this.rotation),s.scale(1,this.scale),s.translate(-m,-y),s.fillRect(0,0,r,r),this.texture=new Te({source:new Hs({resource:i,addressMode:this._wrapMode})});const _=new ye;_.scale(1/f,1/f),_.translate(c,p),this.textureSpace==="local"&&_.scale(r,r),this.transform=_}destroy(){var e;(e=this.texture)==null||e.destroy(!0),this.texture=null,this.transform=null,this.colorStops=[],this.start=null,this.end=null,this.center=null,this.outerCenter=null}get styleKey(){return`fill-gradient-${this.uid}-${this._tick}`}};ul.defaultLinearOptions={start:{x:0,y:0},end:{x:0,y:1},colorStops:[],textureSpace:"local",type:"linear",textureSize:256,wrapMode:"clamp-to-edge"};ul.defaultRadialOptions={center:{x:.5,y:.5},innerRadius:0,outerRadius:.5,colorStops:[],scale:1,textureSpace:"local",type:"radial",textureSize:256,wrapMode:"clamp-to-edge"};let Ji=ul;function Rc(t,e){for(let r=0;r<e.length;r++){const i=e[r];t.addColorStop(i.offset,i.color)}}function Bc(t,e){const r=dr.get().createCanvas(t,e),i=r.getContext("2d");return{canvas:r,context:i}}function h$(t){let e=t[0]??{};return(typeof e=="number"||t[1])&&($e("8.5.2","use options object instead"),e={type:"linear",start:{x:t[0],y:t[1]},end:{x:t[2],y:t[3]},textureSpace:t[4],textureSize:t[5]??Ji.defaultLinearOptions.textureSize}),e}const p$=new ye,f$=new Xe;function m$(t,e,r,i){const s=e.matrix?t.copyFrom(e.matrix).invert():t.identity();if(e.textureSpace==="local"){const a=r.getBounds(f$);e.width&&a.pad(e.width);const{x:o,y:l}=a,u=1/a.width,d=1/a.height,c=-o*u,p=-l*d,f=s.a,m=s.b,y=s.c,b=s.d;s.a*=u,s.b*=u,s.c*=d,s.d*=d,s.tx=c*f+p*y+s.tx,s.ty=c*m+p*b+s.ty}else s.translate(e.texture.frame.x,e.texture.frame.y),s.scale(1/e.texture.source.width,1/e.texture.source.height);const n=e.texture.source.style;return!(e.fill instanceof Ji)&&n.addressMode==="clamp-to-edge"&&(n.addressMode="repeat",n.update()),i&&s.append(p$.copyFrom(i).invert()),s}const un={};Ze.handleByMap(_e.ShapeBuilder,un);Ze.add(d$,u$,c$,Yi,i$,s$);const g$=new Xe,y$=new ye;function _$(t,e){const{geometryData:r,batches:i}=e;i.length=0,r.indices.length=0,r.vertices.length=0,r.uvs.length=0;for(let s=0;s<t.instructions.length;s++){const n=t.instructions[s];if(n.action==="texture")b$(n.data,i,r);else if(n.action==="fill"||n.action==="stroke"){const a=n.action==="stroke",o=n.data.path.shapePath,l=n.data.style,u=n.data.hole;a&&u&&Oc(u.shapePath,l,!0,i,r),u&&(o.shapePrimitives[o.shapePrimitives.length-1].holes=u.shapePath.shapePrimitives),Oc(o,l,a,i,r)}}}function b$(t,e,r){const i=[],s=un.rectangle,n=g$;n.x=t.dx,n.y=t.dy,n.width=t.dw,n.height=t.dh;const a=t.transform;if(!s.build(n,i))return;const{vertices:o,uvs:l,indices:u}=r,d=u.length,c=o.length/2;a&&Jg(i,a),s.triangulate(i,o,2,c,u,d);const p=t.image,f=p.uvs;l.push(f.x0,f.y0,f.x1,f.y1,f.x3,f.y3,f.x2,f.y2);const m=lt.get(ll);m.indexOffset=d,m.indexSize=u.length-d,m.attributeOffset=c,m.attributeSize=o.length/2-c,m.baseColor=t.style,m.alpha=t.alpha,m.texture=p,m.geometryData=r,e.push(m)}function Oc(t,e,r,i,s){const{vertices:n,uvs:a,indices:o}=s;t.shapePrimitives.forEach(({shape:l,transform:u,holes:d})=>{const c=[],p=un[l.type];if(!p.build(l,c))return;const f=o.length,m=n.length/2;let y="triangle-list";if(u&&Jg(c,u),r){const $=l.closePath??!0,S=e;S.pixelLine?(o$(c,$,n,o),y="line-list"):a$(c,S,!1,$,n,o)}else if(d){const $=[],S=c.slice();w$(d).forEach(T=>{$.push(S.length/2),S.push(...T)}),t0(S,$,n,2,m,o,f)}else p.triangulate(c,n,2,m,o,f);const b=a.length/2,_=e.texture;if(_!==Te.WHITE){const $=m$(y$,e,l,u);e$(n,2,m,a,b,2,n.length/2-m,$)}else t$(a,b,2,n.length/2-m);const x=lt.get(ll);x.indexOffset=f,x.indexSize=o.length-f,x.attributeOffset=m,x.attributeSize=n.length/2-m,x.baseColor=e.color,x.alpha=e.alpha,x.texture=_,x.geometryData=s,x.topology=y,i.push(x)})}function w$(t){const e=[];for(let r=0;r<t.length;r++){const i=t[r].shape,s=[];un[i.type].build(i,s)&&e.push(s)}return e}class x${constructor(){this.batches=[],this.geometryData={vertices:[],uvs:[],indices:[]}}reset(){this.batches&&this.batches.forEach(e=>{lt.return(e)}),this.graphicsData&&lt.return(this.graphicsData),this.isBatchable=!1,this.context=null,this.batches.length=0,this.geometryData.indices.length=0,this.geometryData.vertices.length=0,this.geometryData.uvs.length=0,this.graphicsData=null}destroy(){this.reset(),this.batches=null,this.geometryData=null}}class v${constructor(){this.instructions=new rl}init(e){const r=e.maxTextures;this.batcher?this.batcher._updateMaxTextures(r):this.batcher=new Jv({maxTextures:r}),this.instructions.reset()}get geometry(){return $e(yx,"GraphicsContextRenderData#geometry is deprecated, please use batcher.geometry instead."),this.batcher.geometry}destroy(){this.batcher.destroy(),this.instructions.destroy(),this.batcher=null,this.instructions=null}}const dl=class Mo{constructor(e){this._renderer=e,this._managedContexts=new ln({renderer:e,type:"resource",name:"graphicsContext"})}init(e){Mo.defaultOptions.bezierSmoothness=(e==null?void 0:e.bezierSmoothness)??Mo.defaultOptions.bezierSmoothness}getContextRenderData(e){return e._gpuData[this._renderer.uid].graphicsData||this._initContextRenderData(e)}updateGpuContext(e){const r=!!e._gpuData[this._renderer.uid],i=e._gpuData[this._renderer.uid]||this._initContext(e);if(e.dirty||!r){r&&i.reset(),_$(e,i);const s=e.batchMode;e.customShader||s==="no-batch"?i.isBatchable=!1:s==="auto"?i.isBatchable=i.geometryData.vertices.length<400:i.isBatchable=!0,e.dirty=!1}return i}getGpuContext(e){return e._gpuData[this._renderer.uid]||this._initContext(e)}_initContextRenderData(e){const r=lt.get(v$,{maxTextures:this._renderer.limits.maxBatchableTextures}),i=e._gpuData[this._renderer.uid],{batches:s,geometryData:n}=i;i.graphicsData=r;const a=n.vertices.length,o=n.indices.length;for(let c=0;c<s.length;c++)s[c].applyTransform=!1;const l=r.batcher;l.ensureAttributeBuffer(a),l.ensureIndexBuffer(o),l.begin();for(let c=0;c<s.length;c++){const p=s[c];l.add(p)}l.finish(r.instructions);const u=l.geometry;u.indexBuffer.setDataWithSize(l.indexBuffer,l.indexSize,!0),u.buffers[0].setDataWithSize(l.attributeBuffer.float32View,l.attributeSize,!0);const d=l.batches;for(let c=0;c<d.length;c++){const p=d[c];p.bindGroup=dv(p.textures.textures,p.textures.count,this._renderer.limits.maxBatchableTextures)}return r}_initContext(e){const r=new x$;return r.context=e,e._gpuData[this._renderer.uid]=r,this._managedContexts.add(e),r}destroy(){this._managedContexts.destroy(),this._renderer=null}};dl.extension={type:[_e.WebGLSystem,_e.WebGPUSystem],name:"graphicsContext"};dl.defaultOptions={bezierSmoothness:.5};let cl=dl;const $$=8,Ss=11920929e-14,k$=1;function r0(t,e,r,i,s,n,a,o,l,u){const c=Math.min(.99,Math.max(0,u??cl.defaultOptions.bezierSmoothness));let p=(k$-c)/1;return p*=p,S$(e,r,i,s,n,a,o,l,t,p),t}function S$(t,e,r,i,s,n,a,o,l,u){zo(t,e,r,i,s,n,a,o,l,u,0),l.push(a,o)}function zo(t,e,r,i,s,n,a,o,l,u,d){if(d>$$)return;const c=(t+r)/2,p=(e+i)/2,f=(r+s)/2,m=(i+n)/2,y=(s+a)/2,b=(n+o)/2,_=(c+f)/2,x=(p+m)/2,$=(f+y)/2,S=(m+b)/2,E=(_+$)/2,T=(x+S)/2;if(d>0){let A=a-t,k=o-e;const P=Math.abs((r-a)*k-(i-o)*A),M=Math.abs((s-a)*k-(n-o)*A);if(P>Ss&&M>Ss){if((P+M)*(P+M)<=u*(A*A+k*k)){l.push(E,T);return}}else if(P>Ss){if(P*P<=u*(A*A+k*k)){l.push(E,T);return}}else if(M>Ss){if(M*M<=u*(A*A+k*k)){l.push(E,T);return}}else if(A=E-(t+a)/2,k=T-(e+o)/2,A*A+k*k<=u){l.push(E,T);return}}zo(t,e,c,p,_,x,E,T,l,u,d+1),zo(E,T,$,S,y,b,a,o,l,u,d+1)}const C$=8,T$=11920929e-14,E$=1;function A$(t,e,r,i,s,n,a,o){const u=Math.min(.99,Math.max(0,o??cl.defaultOptions.bezierSmoothness));let d=(E$-u)/1;return d*=d,I$(e,r,i,s,n,a,t,d),t}function I$(t,e,r,i,s,n,a,o){Po(a,t,e,r,i,s,n,o,0),a.push(s,n)}function Po(t,e,r,i,s,n,a,o,l){if(l>C$)return;const u=(e+i)/2,d=(r+s)/2,c=(i+n)/2,p=(s+a)/2,f=(u+c)/2,m=(d+p)/2;let y=n-e,b=a-r;const _=Math.abs((i-n)*b-(s-a)*y);if(_>T$){if(_*_<=o*(y*y+b*b)){t.push(f,m);return}}else if(y=f-(e+n)/2,b=m-(r+a)/2,y*y+b*b<=o){t.push(f,m);return}Po(t,e,r,u,d,f,m,o,l+1),Po(t,f,m,c,p,n,a,o,l+1)}function i0(t,e,r,i,s,n,a,o){let l=Math.abs(s-n);(!a&&s>n||a&&n>s)&&(l=2*Math.PI-l),o||(o=Math.max(6,Math.floor(6*Math.pow(i,1/3)*(l/Math.PI)))),o=Math.max(o,3);let u=l/o,d=s;u*=a?-1:1;for(let c=0;c<o+1;c++){const p=Math.cos(d),f=Math.sin(d),m=e+p*i,y=r+f*i;t.push(m,y),d+=u}}function M$(t,e,r,i,s,n){const a=t[t.length-2],l=t[t.length-1]-r,u=a-e,d=s-r,c=i-e,p=Math.abs(l*c-u*d);if(p<1e-8||n===0){(t[t.length-2]!==e||t[t.length-1]!==r)&&t.push(e,r);return}const f=l*l+u*u,m=d*d+c*c,y=l*d+u*c,b=n*Math.sqrt(f)/p,_=n*Math.sqrt(m)/p,x=b*y/f,$=_*y/m,S=b*c+_*u,E=b*d+_*l,T=u*(_+x),A=l*(_+x),k=c*(b+$),P=d*(b+$),M=Math.atan2(A-E,T-S),N=Math.atan2(P-E,k-S);i0(t,S+e,E+r,n,M,N,u*d>c*l)}const Gi=Math.PI*2,aa={centerX:0,centerY:0,ang1:0,ang2:0},oa=({x:t,y:e},r,i,s,n,a,o,l)=>{t*=r,e*=i;const u=s*t-n*e,d=n*t+s*e;return l.x=u+a,l.y=d+o,l};function z$(t,e){const r=e===-1.5707963267948966?-.551915024494:1.3333333333333333*Math.tan(e/4),i=e===1.5707963267948966?.551915024494:r,s=Math.cos(t),n=Math.sin(t),a=Math.cos(t+e),o=Math.sin(t+e);return[{x:s-n*i,y:n+s*i},{x:a+o*i,y:o-a*i},{x:a,y:o}]}const Dc=(t,e,r,i)=>{const s=t*i-e*r<0?-1:1;let n=t*r+e*i;return n>1&&(n=1),n<-1&&(n=-1),s*Math.acos(n)},P$=(t,e,r,i,s,n,a,o,l,u,d,c,p)=>{const f=Math.pow(s,2),m=Math.pow(n,2),y=Math.pow(d,2),b=Math.pow(c,2);let _=f*m-f*b-m*y;_<0&&(_=0),_/=f*b+m*y,_=Math.sqrt(_)*(a===o?-1:1);const x=_*s/n*c,$=_*-n/s*d,S=u*x-l*$+(t+r)/2,E=l*x+u*$+(e+i)/2,T=(d-x)/s,A=(c-$)/n,k=(-d-x)/s,P=(-c-$)/n,M=Dc(1,0,T,A);let N=Dc(T,A,k,P);o===0&&N>0&&(N-=Gi),o===1&&N<0&&(N+=Gi),p.centerX=S,p.centerY=E,p.ang1=M,p.ang2=N};function R$(t,e,r,i,s,n,a,o=0,l=0,u=0){if(n===0||a===0)return;const d=Math.sin(o*Gi/360),c=Math.cos(o*Gi/360),p=c*(e-i)/2+d*(r-s)/2,f=-d*(e-i)/2+c*(r-s)/2;if(p===0&&f===0)return;n=Math.abs(n),a=Math.abs(a);const m=Math.pow(p,2)/Math.pow(n,2)+Math.pow(f,2)/Math.pow(a,2);m>1&&(n*=Math.sqrt(m),a*=Math.sqrt(m)),P$(e,r,i,s,n,a,l,u,d,c,p,f,aa);let{ang1:y,ang2:b}=aa;const{centerX:_,centerY:x}=aa;let $=Math.abs(b)/(Gi/4);Math.abs(1-$)<1e-7&&($=1);const S=Math.max(Math.ceil($),1);b/=S;let E=t[t.length-2],T=t[t.length-1];const A={x:0,y:0};for(let k=0;k<S;k++){const P=z$(y,b),{x:M,y:N}=oa(P[0],n,a,c,d,_,x,A),{x:W,y:L}=oa(P[1],n,a,c,d,_,x,A),{x:R,y:q}=oa(P[2],n,a,c,d,_,x,A);r0(t,E,T,M,N,W,L,R,q),E=R,T=q,y+=b}}function B$(t,e,r){const i=(a,o)=>{const l=o.x-a.x,u=o.y-a.y,d=Math.sqrt(l*l+u*u),c=l/d,p=u/d;return{len:d,nx:c,ny:p}},s=(a,o)=>{a===0?t.moveTo(o.x,o.y):t.lineTo(o.x,o.y)};let n=e[e.length-1];for(let a=0;a<e.length;a++){const o=e[a%e.length],l=o.radius??r;if(l<=0){s(a,o),n=o;continue}const u=e[(a+1)%e.length],d=i(o,n),c=i(o,u);if(d.len<1e-4||c.len<1e-4){s(a,o),n=o;continue}let p=Math.asin(d.nx*c.ny-d.ny*c.nx),f=1,m=!1;d.nx*c.nx-d.ny*-c.ny<0?p<0?p=Math.PI+p:(p=Math.PI-p,f=-1,m=!0):p>0&&(f=-1,m=!0);const y=p/2;let b,_=Math.abs(Math.cos(y)*l/Math.sin(y));_>Math.min(d.len/2,c.len/2)?(_=Math.min(d.len/2,c.len/2),b=Math.abs(_*Math.sin(y)/Math.cos(y))):b=l;const x=o.x+c.nx*_+-c.ny*b*f,$=o.y+c.ny*_+c.nx*b*f,S=Math.atan2(d.ny,d.nx)+Math.PI/2*f,E=Math.atan2(c.ny,c.nx)-Math.PI/2*f;a===0&&t.moveTo(x+Math.cos(S)*b,$+Math.sin(S)*b),t.arc(x,$,b,S,E,m),n=o}}function O$(t,e,r,i){const s=(o,l)=>Math.sqrt((o.x-l.x)**2+(o.y-l.y)**2),n=(o,l,u)=>({x:o.x+(l.x-o.x)*u,y:o.y+(l.y-o.y)*u}),a=e.length;for(let o=0;o<a;o++){const l=e[(o+1)%a],u=l.radius??r;if(u<=0){o===0?t.moveTo(l.x,l.y):t.lineTo(l.x,l.y);continue}const d=e[o],c=e[(o+2)%a],p=s(d,l);let f;if(p<1e-4)f=l;else{const b=Math.min(p/2,u);f=n(l,d,b/p)}const m=s(c,l);let y;if(m<1e-4)y=l;else{const b=Math.min(m/2,u);y=n(l,c,b/m)}o===0?t.moveTo(f.x,f.y):t.lineTo(f.x,f.y),t.quadraticCurveTo(l.x,l.y,y.x,y.y,i)}}const D$=new Xe;class N${constructor(e){this.shapePrimitives=[],this._currentPoly=null,this._bounds=new Mt,this._graphicsPath2D=e,this.signed=e.checkForHoles}moveTo(e,r){return this.startPoly(e,r),this}lineTo(e,r){this._ensurePoly();const i=this._currentPoly.points,s=i[i.length-2],n=i[i.length-1];return(s!==e||n!==r)&&i.push(e,r),this}arc(e,r,i,s,n,a){this._ensurePoly(!1);const o=this._currentPoly.points;return i0(o,e,r,i,s,n,a),this}arcTo(e,r,i,s,n){this._ensurePoly();const a=this._currentPoly.points;return M$(a,e,r,i,s,n),this}arcToSvg(e,r,i,s,n,a,o){const l=this._currentPoly.points;return R$(l,this._currentPoly.lastX,this._currentPoly.lastY,a,o,e,r,i,s,n),this}bezierCurveTo(e,r,i,s,n,a,o){this._ensurePoly();const l=this._currentPoly;return r0(this._currentPoly.points,l.lastX,l.lastY,e,r,i,s,n,a,o),this}quadraticCurveTo(e,r,i,s,n){this._ensurePoly();const a=this._currentPoly;return A$(this._currentPoly.points,a.lastX,a.lastY,e,r,i,s,n),this}closePath(){return this.endPoly(!0),this}addPath(e,r){this.endPoly(),r&&!r.isIdentity()&&(e=e.clone(!0),e.transform(r));const i=this.shapePrimitives,s=i.length;for(let n=0;n<e.instructions.length;n++){const a=e.instructions[n];this[a.action](...a.data)}if(e.checkForHoles&&i.length-s>1){let n=null;for(let a=s;a<i.length;a++){const o=i[a];if(o.shape.type==="polygon"){const l=o.shape,u=n==null?void 0:n.shape;u&&u.containsPolygon(l)?(n.holes||(n.holes=[]),n.holes.push(o),i.copyWithin(a,a+1),i.length--,a--):n=o}}}return this}finish(e=!1){this.endPoly(e)}rect(e,r,i,s,n){return this.drawShape(new Xe(e,r,i,s),n),this}circle(e,r,i,s){return this.drawShape(new nl(e,r,i),s),this}poly(e,r,i){const s=new Ni(e);return s.closePath=r,this.drawShape(s,i),this}regularPoly(e,r,i,s,n=0,a){s=Math.max(s|0,3);const o=-1*Math.PI/2+n,l=Math.PI*2/s,u=[];for(let d=0;d<s;d++){const c=o-d*l;u.push(e+i*Math.cos(c),r+i*Math.sin(c))}return this.poly(u,!0,a),this}roundPoly(e,r,i,s,n,a=0,o){if(s=Math.max(s|0,3),n<=0)return this.regularPoly(e,r,i,s,a);const l=i*Math.sin(Math.PI/s)-.001;n=Math.min(n,l);const u=-1*Math.PI/2+a,d=Math.PI*2/s,c=(s-2)*Math.PI/s/2;for(let p=0;p<s;p++){const f=p*d+u,m=e+i*Math.cos(f),y=r+i*Math.sin(f),b=f+Math.PI+c,_=f-Math.PI-c,x=m+n*Math.cos(b),$=y+n*Math.sin(b),S=m+n*Math.cos(_),E=y+n*Math.sin(_);p===0?this.moveTo(x,$):this.lineTo(x,$),this.quadraticCurveTo(m,y,S,E,o)}return this.closePath()}roundShape(e,r,i=!1,s){return e.length<3?this:(i?O$(this,e,r,s):B$(this,e,r),this.closePath())}filletRect(e,r,i,s,n){if(n===0)return this.rect(e,r,i,s);const a=Math.min(i,s)/2,o=Math.min(a,Math.max(-a,n)),l=e+i,u=r+s,d=o<0?-o:0,c=Math.abs(o);return this.moveTo(e,r+c).arcTo(e+d,r+d,e+c,r,c).lineTo(l-c,r).arcTo(l-d,r+d,l,r+c,c).lineTo(l,u-c).arcTo(l-d,u-d,e+i-c,u,c).lineTo(e+c,u).arcTo(e+d,u-d,e,u-c,c).closePath()}chamferRect(e,r,i,s,n,a){if(n<=0)return this.rect(e,r,i,s);const o=Math.min(n,Math.min(i,s)/2),l=e+i,u=r+s,d=[e+o,r,l-o,r,l,r+o,l,u-o,l-o,u,e+o,u,e,u-o,e,r+o];for(let c=d.length-1;c>=2;c-=2)d[c]===d[c-2]&&d[c-1]===d[c-3]&&d.splice(c-1,2);return this.poly(d,!0,a)}ellipse(e,r,i,s,n){return this.drawShape(new al(e,r,i,s),n),this}roundRect(e,r,i,s,n,a){return this.drawShape(new ol(e,r,i,s,n),a),this}drawShape(e,r){return this.endPoly(),this.shapePrimitives.push({shape:e,transform:r}),this}startPoly(e,r){let i=this._currentPoly;return i&&this.endPoly(),i=new Ni,i.points.push(e,r),this._currentPoly=i,this}endPoly(e=!1){const r=this._currentPoly;return r&&r.points.length>2&&(r.closePath=e,this.shapePrimitives.push({shape:r})),this._currentPoly=null,this}_ensurePoly(e=!0){if(!this._currentPoly&&(this._currentPoly=new Ni,e)){const r=this.shapePrimitives[this.shapePrimitives.length-1];if(r){let i=r.shape.x,s=r.shape.y;if(r.transform&&!r.transform.isIdentity()){const n=r.transform,a=i;i=n.a*i+n.c*s+n.tx,s=n.b*a+n.d*s+n.ty}this._currentPoly.points.push(i,s)}else this._currentPoly.points.push(0,0)}}buildPath(){const e=this._graphicsPath2D;this.shapePrimitives.length=0,this._currentPoly=null;for(let r=0;r<e.instructions.length;r++){const i=e.instructions[r];this[i.action](...i.data)}this.finish()}get bounds(){const e=this._bounds;e.clear();const r=this.shapePrimitives;for(let i=0;i<r.length;i++){const s=r[i],n=s.shape.getBounds(D$);s.transform?e.addRect(n,s.transform):e.addRect(n)}return e}}class Kt{constructor(e,r=!1){this.instructions=[],this.uid=Ne("graphicsPath"),this._dirty=!0,this.checkForHoles=r,typeof e=="string"?av(e,this):this.instructions=(e==null?void 0:e.slice())??[]}get shapePath(){return this._shapePath||(this._shapePath=new N$(this)),this._dirty&&(this._dirty=!1,this._shapePath.buildPath()),this._shapePath}addPath(e,r){return e=e.clone(),this.instructions.push({action:"addPath",data:[e,r]}),this._dirty=!0,this}arc(...e){return this.instructions.push({action:"arc",data:e}),this._dirty=!0,this}arcTo(...e){return this.instructions.push({action:"arcTo",data:e}),this._dirty=!0,this}arcToSvg(...e){return this.instructions.push({action:"arcToSvg",data:e}),this._dirty=!0,this}bezierCurveTo(...e){return this.instructions.push({action:"bezierCurveTo",data:e}),this._dirty=!0,this}bezierCurveToShort(e,r,i,s,n){const a=this.instructions[this.instructions.length-1],o=this.getLastPoint(it.shared);let l=0,u=0;if(!a||a.action!=="bezierCurveTo")l=o.x,u=o.y;else{l=a.data[2],u=a.data[3];const d=o.x,c=o.y;l=d+(d-l),u=c+(c-u)}return this.instructions.push({action:"bezierCurveTo",data:[l,u,e,r,i,s,n]}),this._dirty=!0,this}closePath(){return this.instructions.push({action:"closePath",data:[]}),this._dirty=!0,this}ellipse(...e){return this.instructions.push({action:"ellipse",data:e}),this._dirty=!0,this}lineTo(...e){return this.instructions.push({action:"lineTo",data:e}),this._dirty=!0,this}moveTo(...e){return this.instructions.push({action:"moveTo",data:e}),this}quadraticCurveTo(...e){return this.instructions.push({action:"quadraticCurveTo",data:e}),this._dirty=!0,this}quadraticCurveToShort(e,r,i){const s=this.instructions[this.instructions.length-1],n=this.getLastPoint(it.shared);let a=0,o=0;if(!s||s.action!=="quadraticCurveTo")a=n.x,o=n.y;else{a=s.data[0],o=s.data[1];const l=n.x,u=n.y;a=l+(l-a),o=u+(u-o)}return this.instructions.push({action:"quadraticCurveTo",data:[a,o,e,r,i]}),this._dirty=!0,this}rect(e,r,i,s,n){return this.instructions.push({action:"rect",data:[e,r,i,s,n]}),this._dirty=!0,this}circle(e,r,i,s){return this.instructions.push({action:"circle",data:[e,r,i,s]}),this._dirty=!0,this}roundRect(...e){return this.instructions.push({action:"roundRect",data:e}),this._dirty=!0,this}poly(...e){return this.instructions.push({action:"poly",data:e}),this._dirty=!0,this}regularPoly(...e){return this.instructions.push({action:"regularPoly",data:e}),this._dirty=!0,this}roundPoly(...e){return this.instructions.push({action:"roundPoly",data:e}),this._dirty=!0,this}roundShape(...e){return this.instructions.push({action:"roundShape",data:e}),this._dirty=!0,this}filletRect(...e){return this.instructions.push({action:"filletRect",data:e}),this._dirty=!0,this}chamferRect(...e){return this.instructions.push({action:"chamferRect",data:e}),this._dirty=!0,this}star(e,r,i,s,n,a,o){n||(n=s/2);const l=-1*Math.PI/2+a,u=i*2,d=Math.PI*2/u,c=[];for(let p=0;p<u;p++){const f=p%2?n:s,m=p*d+l;c.push(e+f*Math.cos(m),r+f*Math.sin(m))}return this.poly(c,!0,o),this}clone(e=!1){const r=new Kt;if(r.checkForHoles=this.checkForHoles,!e)r.instructions=this.instructions.slice();else for(let i=0;i<this.instructions.length;i++){const s=this.instructions[i];r.instructions.push({action:s.action,data:s.data.slice()})}return r}clear(){return this.instructions.length=0,this._dirty=!0,this}transform(e){if(e.isIdentity())return this;const r=e.a,i=e.b,s=e.c,n=e.d,a=e.tx,o=e.ty;let l=0,u=0,d=0,c=0,p=0,f=0,m=0,y=0;for(let b=0;b<this.instructions.length;b++){const _=this.instructions[b],x=_.data;switch(_.action){case"moveTo":case"lineTo":l=x[0],u=x[1],x[0]=r*l+s*u+a,x[1]=i*l+n*u+o;break;case"bezierCurveTo":d=x[0],c=x[1],p=x[2],f=x[3],l=x[4],u=x[5],x[0]=r*d+s*c+a,x[1]=i*d+n*c+o,x[2]=r*p+s*f+a,x[3]=i*p+n*f+o,x[4]=r*l+s*u+a,x[5]=i*l+n*u+o;break;case"quadraticCurveTo":d=x[0],c=x[1],l=x[2],u=x[3],x[0]=r*d+s*c+a,x[1]=i*d+n*c+o,x[2]=r*l+s*u+a,x[3]=i*l+n*u+o;break;case"arcToSvg":l=x[5],u=x[6],m=x[0],y=x[1],x[0]=r*m+s*y,x[1]=i*m+n*y,x[5]=r*l+s*u+a,x[6]=i*l+n*u+o;break;case"circle":x[4]=gi(x[3],e);break;case"rect":x[4]=gi(x[4],e);break;case"ellipse":x[8]=gi(x[8],e);break;case"roundRect":x[5]=gi(x[5],e);break;case"addPath":x[0].transform(e);break;case"poly":x[2]=gi(x[2],e);break;default:ht("unknown transform action",_.action);break}}return this._dirty=!0,this}get bounds(){return this.shapePath.bounds}getLastPoint(e){let r=this.instructions.length-1,i=this.instructions[r];if(!i)return e.x=0,e.y=0,e;for(;i.action==="closePath";){if(r--,r<0)return e.x=0,e.y=0,e;i=this.instructions[r]}switch(i.action){case"moveTo":case"lineTo":e.x=i.data[0],e.y=i.data[1];break;case"quadraticCurveTo":e.x=i.data[2],e.y=i.data[3];break;case"bezierCurveTo":e.x=i.data[4],e.y=i.data[5];break;case"arc":case"arcToSvg":e.x=i.data[5],e.y=i.data[6];break;case"addPath":i.data[0].getLastPoint(e);break}return e}}function gi(t,e){return t?t.prepend(e):e.clone()}function Pe(t,e,r){const i=t.getAttribute(e);return i?Number(i):r}function L$(t,e){const r=t.querySelectorAll("defs");for(let i=0;i<r.length;i++){const s=r[i];for(let n=0;n<s.children.length;n++){const a=s.children[n];switch(a.nodeName.toLowerCase()){case"lineargradient":e.defs[a.id]=G$(a);break;case"radialgradient":e.defs[a.id]=U$();break}}}}function G$(t){const e=Pe(t,"x1",0),r=Pe(t,"y1",0),i=Pe(t,"x2",1),s=Pe(t,"y2",0),n=t.getAttribute("gradientUnits")||"objectBoundingBox",a=new Ji(e,r,i,s,n==="objectBoundingBox"?"local":"global");for(let o=0;o<t.children.length;o++){const l=t.children[o],u=Pe(l,"offset",0),d=De.shared.setValue(l.getAttribute("stop-color")).toNumber();a.addColorStop(u,d)}return a}function U$(t){return ht("[SVG Parser] Radial gradients are not yet supported"),new Ji(0,0,1,0)}function Nc(t){const e=t.match(/url\s*\(\s*['"]?\s*#([^'"\s)]+)\s*['"]?\s*\)/i);return e?e[1]:""}const Lc={fill:{type:"paint",default:0},"fill-opacity":{type:"number",default:1},stroke:{type:"paint",default:0},"stroke-width":{type:"number",default:1},"stroke-opacity":{type:"number",default:1},"stroke-linecap":{type:"string",default:"butt"},"stroke-linejoin":{type:"string",default:"miter"},"stroke-miterlimit":{type:"number",default:10},"stroke-dasharray":{type:"string",default:"none"},"stroke-dashoffset":{type:"number",default:0},opacity:{type:"number",default:1}};function s0(t,e){const r=t.getAttribute("style"),i={},s={},n={strokeStyle:i,fillStyle:s,useFill:!1,useStroke:!1};for(const a in Lc){const o=t.getAttribute(a);o&&Gc(e,n,a,o.trim())}if(r){const a=r.split(";");for(let o=0;o<a.length;o++){const l=a[o].trim(),[u,d]=l.split(":");Lc[u]&&Gc(e,n,u,d.trim())}}return{strokeStyle:n.useStroke?i:null,fillStyle:n.useFill?s:null,useFill:n.useFill,useStroke:n.useStroke}}function Gc(t,e,r,i){switch(r){case"stroke":if(i!=="none"){if(i.startsWith("url(")){const s=Nc(i);e.strokeStyle.fill=t.defs[s]}else e.strokeStyle.color=De.shared.setValue(i).toNumber();e.useStroke=!0}break;case"stroke-width":e.strokeStyle.width=Number(i);break;case"fill":if(i!=="none"){if(i.startsWith("url(")){const s=Nc(i);e.fillStyle.fill=t.defs[s]}else e.fillStyle.color=De.shared.setValue(i).toNumber();e.useFill=!0}break;case"fill-opacity":e.fillStyle.alpha=Number(i);break;case"stroke-opacity":e.strokeStyle.alpha=Number(i);break;case"opacity":e.fillStyle.alpha=Number(i),e.strokeStyle.alpha=Number(i);break}}function V$(t){if(t.length<=2)return!0;const e=t.map(o=>o.area).sort((o,l)=>l-o),[r,i]=e,s=e[e.length-1],n=r/i,a=i/s;return!(n>3&&a<2)}function F$(t){return t.split(/(?=[Mm])/).filter(i=>i.trim().length>0)}function W$(t){const e=t.match(/[-+]?[0-9]*\.?[0-9]+/g);if(!e||e.length<4)return 0;const r=e.map(Number),i=[],s=[];for(let d=0;d<r.length;d+=2)d+1<r.length&&(i.push(r[d]),s.push(r[d+1]));if(i.length===0||s.length===0)return 0;const n=Math.min(...i),a=Math.max(...i),o=Math.min(...s),l=Math.max(...s);return(a-n)*(l-o)}function Uc(t,e){const r=new Kt(t,!1);for(const i of r.instructions)e.instructions.push(i)}function q$(t,e){if(typeof t=="string"){const a=document.createElement("div");a.innerHTML=t.trim(),t=a.querySelector("svg")}const r={context:e,defs:{},path:new Kt};L$(t,r);const i=t.children,{fillStyle:s,strokeStyle:n}=s0(t,r);for(let a=0;a<i.length;a++){const o=i[a];o.nodeName.toLowerCase()!=="defs"&&n0(o,r,s,n)}return e}function n0(t,e,r,i){const s=t.children,{fillStyle:n,strokeStyle:a}=s0(t,e);n&&r?r={...r,...n}:n&&(r=n),a&&i?i={...i,...a}:a&&(i=a);const o=!r&&!i;o&&(r={color:0});let l,u,d,c,p,f,m,y,b,_,x,$,S,E,T,A,k;switch(t.nodeName.toLowerCase()){case"path":{E=t.getAttribute("d");const P=t.getAttribute("fill-rule"),M=F$(E),N=P==="evenodd",W=M.length>1;if(N&&W){const R=M.map(O=>({path:O,area:W$(O)}));if(R.sort((O,V)=>V.area-O.area),M.length>3||!V$(R))for(let O=0;O<R.length;O++){const V=R[O],ae=O===0;e.context.beginPath();const F=new Kt(void 0,!0);Uc(V.path,F),e.context.path(F),ae?(r&&e.context.fill(r),i&&e.context.stroke(i)):e.context.cut()}else for(let O=0;O<R.length;O++){const V=R[O],ae=O%2===1;e.context.beginPath();const F=new Kt(void 0,!0);Uc(V.path,F),e.context.path(F),ae?e.context.cut():(r&&e.context.fill(r),i&&e.context.stroke(i))}}else{const R=P?P==="evenodd":!0;T=new Kt(E,R),e.context.path(T),r&&e.context.fill(r),i&&e.context.stroke(i)}break}case"circle":m=Pe(t,"cx",0),y=Pe(t,"cy",0),b=Pe(t,"r",0),e.context.ellipse(m,y,b,b),r&&e.context.fill(r),i&&e.context.stroke(i);break;case"rect":l=Pe(t,"x",0),u=Pe(t,"y",0),A=Pe(t,"width",0),k=Pe(t,"height",0),_=Pe(t,"rx",0),x=Pe(t,"ry",0),_||x?e.context.roundRect(l,u,A,k,_||x):e.context.rect(l,u,A,k),r&&e.context.fill(r),i&&e.context.stroke(i);break;case"ellipse":m=Pe(t,"cx",0),y=Pe(t,"cy",0),_=Pe(t,"rx",0),x=Pe(t,"ry",0),e.context.beginPath(),e.context.ellipse(m,y,_,x),r&&e.context.fill(r),i&&e.context.stroke(i);break;case"line":d=Pe(t,"x1",0),c=Pe(t,"y1",0),p=Pe(t,"x2",0),f=Pe(t,"y2",0),e.context.beginPath(),e.context.moveTo(d,c),e.context.lineTo(p,f),i&&e.context.stroke(i);break;case"polygon":S=t.getAttribute("points"),$=S.match(/-?\d+/g).map(P=>parseInt(P,10)),e.context.poly($,!0),r&&e.context.fill(r),i&&e.context.stroke(i);break;case"polyline":S=t.getAttribute("points"),$=S.match(/-?\d+/g).map(P=>parseInt(P,10)),e.context.poly($,!1),i&&e.context.stroke(i);break;case"g":case"svg":break;default:{ht(`[SVG parser] <${t.nodeName}> elements unsupported`);break}}o&&(r=null);for(let P=0;P<s.length;P++)n0(s[P],e,r,i)}const Vc={repeat:{addressModeU:"repeat",addressModeV:"repeat"},"repeat-x":{addressModeU:"repeat",addressModeV:"clamp-to-edge"},"repeat-y":{addressModeU:"clamp-to-edge",addressModeV:"repeat"},"no-repeat":{addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}};class H${constructor(e,r){this.uid=Ne("fillPattern"),this._tick=0,this.transform=new ye,this.texture=e,this.transform.scale(1/e.frame.width,1/e.frame.height),r&&(e.source.style.addressModeU=Vc[r].addressModeU,e.source.style.addressModeV=Vc[r].addressModeV)}setTransform(e){const r=this.texture;this.transform.copyFrom(e),this.transform.invert(),this.transform.scale(1/r.frame.width,1/r.frame.height),this._tick++}get texture(){return this._texture}set texture(e){this._texture!==e&&(this._texture=e,this._tick++)}get styleKey(){return`fill-pattern-${this.uid}-${this._tick}`}destroy(){this.texture.destroy(!0),this.texture=null}}function j$(t){return De.isColorLike(t)}function Fc(t){return t instanceof H$}function Wc(t){return t instanceof Ji}function Y$(t){return t instanceof Te}function X$(t,e,r){const i=De.shared.setValue(e??0);return t.color=i.toNumber(),t.alpha=i.alpha===1?r.alpha:i.alpha,t.texture=Te.WHITE,{...r,...t}}function K$(t,e,r){return t.texture=e,{...r,...t}}function qc(t,e,r){return t.fill=e,t.color=16777215,t.texture=e.texture,t.matrix=e.transform,{...r,...t}}function Hc(t,e,r){return e.buildGradient(),t.fill=e,t.color=16777215,t.texture=e.texture,t.matrix=e.transform,t.textureSpace=e.textureSpace,{...r,...t}}function Z$(t,e){const r={...e,...t},i=De.shared.setValue(r.color);return r.alpha*=i.alpha,r.color=i.toNumber(),r}function Mi(t,e){if(t==null)return null;const r={},i=t;return j$(t)?X$(r,t,e):Y$(t)?K$(r,t,e):Fc(t)?qc(r,t,e):Wc(t)?Hc(r,t,e):i.fill&&Fc(i.fill)?qc(i,i.fill,e):i.fill&&Wc(i.fill)?Hc(i,i.fill,e):Z$(i,e)}function jc(t,e){const{width:r,alignment:i,miterLimit:s,cap:n,join:a,pixelLine:o,...l}=e,u=Mi(t,l);return u?{width:r,alignment:i,miterLimit:s,cap:n,join:a,pixelLine:o,...u}:null}const Q$=new it,Yc=new ye,hl=class Gt extends Qt{constructor(){super(...arguments),this._gpuData=Object.create(null),this.autoGarbageCollect=!0,this._gcLastUsed=-1,this.uid=Ne("graphicsContext"),this.dirty=!0,this.batchMode="auto",this.instructions=[],this.destroyed=!1,this._activePath=new Kt,this._transform=new ye,this._fillStyle={...Gt.defaultFillStyle},this._strokeStyle={...Gt.defaultStrokeStyle},this._stateStack=[],this._tick=0,this._bounds=new Mt,this._boundsDirty=!0}clone(){const e=new Gt;return e.batchMode=this.batchMode,e.instructions=this.instructions.slice(),e._activePath=this._activePath.clone(),e._transform=this._transform.clone(),e._fillStyle={...this._fillStyle},e._strokeStyle={...this._strokeStyle},e._stateStack=this._stateStack.slice(),e._bounds=this._bounds.clone(),e._boundsDirty=!0,e}get fillStyle(){return this._fillStyle}set fillStyle(e){this._fillStyle=Mi(e,Gt.defaultFillStyle)}get strokeStyle(){return this._strokeStyle}set strokeStyle(e){this._strokeStyle=jc(e,Gt.defaultStrokeStyle)}setFillStyle(e){return this._fillStyle=Mi(e,Gt.defaultFillStyle),this}setStrokeStyle(e){return this._strokeStyle=Mi(e,Gt.defaultStrokeStyle),this}texture(e,r,i,s,n,a){return this.instructions.push({action:"texture",data:{image:e,dx:i||0,dy:s||0,dw:n||e.frame.width,dh:a||e.frame.height,transform:this._transform.clone(),alpha:this._fillStyle.alpha,style:r||r===0?De.shared.setValue(r).toNumber():16777215}}),this.onUpdate(),this}beginPath(){return this._activePath=new Kt,this}fill(e,r){let i;const s=this.instructions[this.instructions.length-1];return this._tick===0&&(s==null?void 0:s.action)==="stroke"?i=s.data.path:i=this._activePath.clone(),i?(e!=null&&(r!==void 0&&typeof e=="number"&&($e(Ge,"GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead"),e={color:e,alpha:r}),this._fillStyle=Mi(e,Gt.defaultFillStyle)),this.instructions.push({action:"fill",data:{style:this.fillStyle,path:i}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}_initNextPathLocation(){const{x:e,y:r}=this._activePath.getLastPoint(it.shared);this._activePath.clear(),this._activePath.moveTo(e,r)}stroke(e){let r;const i=this.instructions[this.instructions.length-1];return this._tick===0&&(i==null?void 0:i.action)==="fill"?r=i.data.path:r=this._activePath.clone(),r?(e!=null&&(this._strokeStyle=jc(e,Gt.defaultStrokeStyle)),this.instructions.push({action:"stroke",data:{style:this.strokeStyle,path:r}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}cut(){for(let e=0;e<2;e++){const r=this.instructions[this.instructions.length-1-e],i=this._activePath.clone();if(r&&(r.action==="stroke"||r.action==="fill"))if(r.data.hole)r.data.hole.addPath(i);else{r.data.hole=i;break}}return this._initNextPathLocation(),this}arc(e,r,i,s,n,a){this._tick++;const o=this._transform;return this._activePath.arc(o.a*e+o.c*r+o.tx,o.b*e+o.d*r+o.ty,i,s,n,a),this}arcTo(e,r,i,s,n){this._tick++;const a=this._transform;return this._activePath.arcTo(a.a*e+a.c*r+a.tx,a.b*e+a.d*r+a.ty,a.a*i+a.c*s+a.tx,a.b*i+a.d*s+a.ty,n),this}arcToSvg(e,r,i,s,n,a,o){this._tick++;const l=this._transform;return this._activePath.arcToSvg(e,r,i,s,n,l.a*a+l.c*o+l.tx,l.b*a+l.d*o+l.ty),this}bezierCurveTo(e,r,i,s,n,a,o){this._tick++;const l=this._transform;return this._activePath.bezierCurveTo(l.a*e+l.c*r+l.tx,l.b*e+l.d*r+l.ty,l.a*i+l.c*s+l.tx,l.b*i+l.d*s+l.ty,l.a*n+l.c*a+l.tx,l.b*n+l.d*a+l.ty,o),this}closePath(){var e;return this._tick++,(e=this._activePath)==null||e.closePath(),this}ellipse(e,r,i,s){return this._tick++,this._activePath.ellipse(e,r,i,s,this._transform.clone()),this}circle(e,r,i){return this._tick++,this._activePath.circle(e,r,i,this._transform.clone()),this}path(e){return this._tick++,this._activePath.addPath(e,this._transform.clone()),this}lineTo(e,r){this._tick++;const i=this._transform;return this._activePath.lineTo(i.a*e+i.c*r+i.tx,i.b*e+i.d*r+i.ty),this}moveTo(e,r){this._tick++;const i=this._transform,s=this._activePath.instructions,n=i.a*e+i.c*r+i.tx,a=i.b*e+i.d*r+i.ty;return s.length===1&&s[0].action==="moveTo"?(s[0].data[0]=n,s[0].data[1]=a,this):(this._activePath.moveTo(n,a),this)}quadraticCurveTo(e,r,i,s,n){this._tick++;const a=this._transform;return this._activePath.quadraticCurveTo(a.a*e+a.c*r+a.tx,a.b*e+a.d*r+a.ty,a.a*i+a.c*s+a.tx,a.b*i+a.d*s+a.ty,n),this}rect(e,r,i,s){return this._tick++,this._activePath.rect(e,r,i,s,this._transform.clone()),this}roundRect(e,r,i,s,n){return this._tick++,this._activePath.roundRect(e,r,i,s,n,this._transform.clone()),this}poly(e,r){return this._tick++,this._activePath.poly(e,r,this._transform.clone()),this}regularPoly(e,r,i,s,n=0,a){return this._tick++,this._activePath.regularPoly(e,r,i,s,n,a),this}roundPoly(e,r,i,s,n,a){return this._tick++,this._activePath.roundPoly(e,r,i,s,n,a),this}roundShape(e,r,i,s){return this._tick++,this._activePath.roundShape(e,r,i,s),this}filletRect(e,r,i,s,n){return this._tick++,this._activePath.filletRect(e,r,i,s,n),this}chamferRect(e,r,i,s,n,a){return this._tick++,this._activePath.chamferRect(e,r,i,s,n,a),this}star(e,r,i,s,n=0,a=0){return this._tick++,this._activePath.star(e,r,i,s,n,a,this._transform.clone()),this}svg(e){return this._tick++,q$(e,this),this}restore(){const e=this._stateStack.pop();return e&&(this._transform=e.transform,this._fillStyle=e.fillStyle,this._strokeStyle=e.strokeStyle),this}save(){return this._stateStack.push({transform:this._transform.clone(),fillStyle:{...this._fillStyle},strokeStyle:{...this._strokeStyle}}),this}getTransform(){return this._transform}resetTransform(){return this._transform.identity(),this}rotate(e){return this._transform.rotate(e),this}scale(e,r=e){return this._transform.scale(e,r),this}setTransform(e,r,i,s,n,a){return e instanceof ye?(this._transform.set(e.a,e.b,e.c,e.d,e.tx,e.ty),this):(this._transform.set(e,r,i,s,n,a),this)}transform(e,r,i,s,n,a){return e instanceof ye?(this._transform.append(e),this):(Yc.set(e,r,i,s,n,a),this._transform.append(Yc),this)}translate(e,r=e){return this._transform.translate(e,r),this}clear(){return this._activePath.clear(),this.instructions.length=0,this.resetTransform(),this.onUpdate(),this}onUpdate(){this._boundsDirty=!0,!this.dirty&&(this.emit("update",this,16),this.dirty=!0)}get bounds(){if(!this._boundsDirty)return this._bounds;this._boundsDirty=!1;const e=this._bounds;e.clear();for(let r=0;r<this.instructions.length;r++){const i=this.instructions[r],s=i.action;if(s==="fill"){const n=i.data;e.addBounds(n.path.bounds)}else if(s==="texture"){const n=i.data;e.addFrame(n.dx,n.dy,n.dx+n.dw,n.dy+n.dh,n.transform)}if(s==="stroke"){const n=i.data,a=n.style.alignment,o=n.style.width*(1-a),l=n.path.bounds;e.addFrame(l.minX-o,l.minY-o,l.maxX+o,l.maxY+o)}}return e}containsPoint(e){var s;if(!this.bounds.containsPoint(e.x,e.y))return!1;const r=this.instructions;let i=!1;for(let n=0;n<r.length;n++){const a=r[n],o=a.data,l=o.path;if(!a.action||!l)continue;const u=o.style,d=l.shapePath.shapePrimitives;for(let c=0;c<d.length;c++){const p=d[c].shape;if(!u||!p)continue;const f=d[c].transform,m=f?f.applyInverse(e,Q$):e;if(a.action==="fill")i=p.contains(m.x,m.y);else{const b=u;i=p.strokeContains(m.x,m.y,b.width,b.alignment)}const y=o.hole;if(y){const b=(s=y.shapePath)==null?void 0:s.shapePrimitives;if(b)for(let _=0;_<b.length;_++)b[_].shape.contains(m.x,m.y)&&(i=!1)}if(i)return!0}}return i}unload(){var e;this.emit("unload",this);for(const r in this._gpuData)(e=this._gpuData[r])==null||e.destroy();this._gpuData=Object.create(null)}destroy(e=!1){if(this.destroyed)return;if(this.destroyed=!0,this._stateStack.length=0,this._transform=null,this.unload(),this.emit("destroy",this),this.removeAllListeners(),typeof e=="boolean"?e:e==null?void 0:e.texture){const i=typeof e=="boolean"?e:e==null?void 0:e.textureSource;this._fillStyle.texture&&(this._fillStyle.fill&&"uid"in this._fillStyle.fill?this._fillStyle.fill.destroy():this._fillStyle.texture.destroy(i)),this._strokeStyle.texture&&(this._strokeStyle.fill&&"uid"in this._strokeStyle.fill?this._strokeStyle.fill.destroy():this._strokeStyle.texture.destroy(i))}this._fillStyle=null,this._strokeStyle=null,this.instructions=null,this._activePath=null,this._bounds=null,this._stateStack=null,this.customShader=null,this._transform=null}};hl.defaultFillStyle={color:16777215,alpha:1,texture:Te.WHITE,matrix:null,fill:null,textureSpace:"local"};hl.defaultStrokeStyle={width:1,color:16777215,alpha:1,alignment:.5,miterLimit:10,cap:"butt",join:"miter",texture:Te.WHITE,matrix:null,fill:null,textureSpace:"local",pixelLine:!1};let Ut=hl;class J${constructor(){this.isBatchable=!1}reset(){this.isBatchable=!1,this.context=null,this.graphicsData&&(this.graphicsData.destroy(),this.graphicsData=null)}destroy(){this.reset()}}class e3{constructor(){this.instructions=new rl}init(){this.instructions.reset()}destroy(){this.instructions.destroy(),this.instructions=null}}const pl=class Ro{constructor(e){this._renderer=e,this._managedContexts=new ln({renderer:e,type:"resource",name:"graphicsContext"})}init(e){Ro.defaultOptions.bezierSmoothness=(e==null?void 0:e.bezierSmoothness)??Ro.defaultOptions.bezierSmoothness}getContextRenderData(e){return this.getGpuContext(e).graphicsData||this._initContextRenderData(e)}updateGpuContext(e){const r=e._gpuData,i=!!r[this._renderer.uid],s=r[this._renderer.uid]||this._initContext(e);return(e.dirty||!i)&&(i&&s.reset(),s.isBatchable=!1,e.dirty=!1),s}getGpuContext(e){return e._gpuData[this._renderer.uid]||this._initContext(e)}_initContextRenderData(e){const r=new e3,i=this.getGpuContext(e);return i.graphicsData=r,r.init(),r}_initContext(e){const r=new J$;return r.context=e,e._gpuData[this._renderer.uid]=r,this._managedContexts.add(e),r}destroy(){this._managedContexts.destroy(),this._renderer=null}};pl.extension={type:[_e.CanvasSystem],name:"graphicsContext"};pl.defaultOptions={bezierSmoothness:.5};let t3=pl;class a0{constructor(e,r){this.state=Ig.for2d(),this.renderer=e,this._adaptor=r,this.renderer.runners.contextChange.add(this),this._managedGraphics=new ln({renderer:e,type:"renderable",priority:-1,name:"graphics"})}contextChange(){this._adaptor.contextChange(this.renderer)}validateRenderable(e){return!1}addRenderable(e,r){this._managedGraphics.add(e),this.renderer.renderPipes.batch.break(r),r.add(e)}updateRenderable(e){}execute(e){e.isRenderable&&this._adaptor.execute(this,e)}destroy(){this._managedGraphics.destroy(),this.renderer=null,this._adaptor.destroy(),this._adaptor=null}}a0.extension={type:[_e.CanvasPipes],name:"graphics"};function r3(t,e,r){const i=(t>>24&255)/255;e[r++]=(t&255)/255*i,e[r++]=(t>>8&255)/255*i,e[r++]=(t>>16&255)/255*i,e[r++]=i}class i3{constructor(){this.batches=[],this.batched=!1}destroy(){this.batches.forEach(e=>{lt.return(e)}),this.batches.length=0}}class o0{constructor(e,r){this.state=Ig.for2d(),this.renderer=e,this._adaptor=r,this.renderer.runners.contextChange.add(this),this._managedGraphics=new ln({renderer:e,type:"renderable",priority:-1,name:"graphics"})}contextChange(){this._adaptor.contextChange(this.renderer)}validateRenderable(e){const r=e.context,i=!!e._gpuData,n=this.renderer.graphicsContext.updateGpuContext(r);return!!(n.isBatchable||i!==n.isBatchable)}addRenderable(e,r){const s=this.renderer.graphicsContext.updateGpuContext(e.context);e.didViewUpdate&&this._rebuild(e),s.isBatchable?this._addToBatcher(e,r):(this.renderer.renderPipes.batch.break(r),r.add(e))}updateRenderable(e){const i=this._getGpuDataForRenderable(e).batches;for(let s=0;s<i.length;s++){const n=i[s];n._batcher.updateElement(n)}}execute(e){if(!e.isRenderable)return;const r=this.renderer,i=e.context;if(!r.graphicsContext.getGpuContext(i).batches.length)return;const n=i.customShader||this._adaptor.shader;this.state.blendMode=e.groupBlendMode;const a=n.resources.localUniforms.uniforms;a.uTransformMatrix=e.groupTransform,a.uRound=r._roundPixels|e._roundPixels,r3(e.groupColorAlpha,a.uColor,0),this._adaptor.execute(this,e)}_rebuild(e){const r=this._getGpuDataForRenderable(e),s=this.renderer.graphicsContext.updateGpuContext(e.context);r.destroy(),s.isBatchable&&this._updateBatchesForRenderable(e,r)}_addToBatcher(e,r){const i=this.renderer.renderPipes.batch,s=this._getGpuDataForRenderable(e).batches;for(let n=0;n<s.length;n++){const a=s[n];i.addToBatch(a,r)}}_getGpuDataForRenderable(e){return e._gpuData[this.renderer.uid]||this._initGpuDataForRenderable(e)}_initGpuDataForRenderable(e){const r=new i3;return e._gpuData[this.renderer.uid]=r,this._managedGraphics.add(e),r}_updateBatchesForRenderable(e,r){const i=e.context,n=this.renderer.graphicsContext.getGpuContext(i),a=this.renderer._roundPixels|e._roundPixels;r.batches=n.batches.map(o=>{const l=lt.get(ll);return o.copyTo(l),l.renderable=e,l.roundPixels=a,l})}destroy(){this._managedGraphics.destroy(),this.renderer=null,this._adaptor.destroy(),this._adaptor=null,this.state=null}}o0.extension={type:[_e.WebGLPipes,_e.WebGPUPipes],name:"graphics"};Ze.add(a0);Ze.add(o0);Ze.add(t3);Ze.add(cl);class Je extends ag{constructor(e){e instanceof Ut&&(e={context:e});const{context:r,roundPixels:i,...s}=e||{};super({label:"Graphics",...s}),this.renderPipeId="graphics",r?this.context=r:(this.context=this._ownedContext=new Ut,this.context.autoGarbageCollect=this.autoGarbageCollect),this.didViewUpdate=!0,this.allowChildren=!1,this.roundPixels=i??!1}set context(e){e!==this._context&&(this._context&&(this._context.off("update",this.onViewUpdate,this),this._context.off("unload",this.unload,this)),this._context=e,this._context.on("update",this.onViewUpdate,this),this._context.on("unload",this.unload,this),this.onViewUpdate())}get context(){return this._context}get bounds(){return this._context.bounds}updateBounds(){}containsPoint(e){return this._context.containsPoint(e)}destroy(e){this._ownedContext&&!e?this._ownedContext.destroy(e):(e===!0||(e==null?void 0:e.context)===!0)&&this._context.destroy(e),this._ownedContext=null,this._context=null,super.destroy(e)}_onTouch(e){this._gcLastUsed=e,this._context._gcLastUsed=e}_callContextMethod(e,r){return this.context[e](...r),this}setFillStyle(...e){return this._callContextMethod("setFillStyle",e)}setStrokeStyle(...e){return this._callContextMethod("setStrokeStyle",e)}fill(...e){return this._callContextMethod("fill",e)}stroke(...e){return this._callContextMethod("stroke",e)}texture(...e){return this._callContextMethod("texture",e)}beginPath(){return this._callContextMethod("beginPath",[])}cut(){return this._callContextMethod("cut",[])}arc(...e){return this._callContextMethod("arc",e)}arcTo(...e){return this._callContextMethod("arcTo",e)}arcToSvg(...e){return this._callContextMethod("arcToSvg",e)}bezierCurveTo(...e){return this._callContextMethod("bezierCurveTo",e)}closePath(){return this._callContextMethod("closePath",[])}ellipse(...e){return this._callContextMethod("ellipse",e)}circle(...e){return this._callContextMethod("circle",e)}path(...e){return this._callContextMethod("path",e)}lineTo(...e){return this._callContextMethod("lineTo",e)}moveTo(...e){return this._callContextMethod("moveTo",e)}quadraticCurveTo(...e){return this._callContextMethod("quadraticCurveTo",e)}rect(...e){return this._callContextMethod("rect",e)}roundRect(...e){return this._callContextMethod("roundRect",e)}poly(...e){return this._callContextMethod("poly",e)}regularPoly(...e){return this._callContextMethod("regularPoly",e)}roundPoly(...e){return this._callContextMethod("roundPoly",e)}roundShape(...e){return this._callContextMethod("roundShape",e)}filletRect(...e){return this._callContextMethod("filletRect",e)}chamferRect(...e){return this._callContextMethod("chamferRect",e)}star(...e){return this._callContextMethod("star",e)}svg(...e){return this._callContextMethod("svg",e)}restore(...e){return this._callContextMethod("restore",e)}save(){return this._callContextMethod("save",[])}getTransform(){return this.context.getTransform()}resetTransform(){return this._callContextMethod("resetTransform",[])}rotateTransform(...e){return this._callContextMethod("rotate",e)}scaleTransform(...e){return this._callContextMethod("scale",e)}setTransform(...e){return this._callContextMethod("setTransform",e)}transform(...e){return this._callContextMethod("transform",e)}translateTransform(...e){return this._callContextMethod("translate",e)}clear(){return this._callContextMethod("clear",[])}get fillStyle(){return this._context.fillStyle}set fillStyle(e){this._context.fillStyle=e}get strokeStyle(){return this._context.strokeStyle}set strokeStyle(e){this._context.strokeStyle=e}clone(e=!1){return e?new Je(this._context.clone()):(this._ownedContext=null,new Je(this._context))}lineStyle(e,r,i){$e(Ge,"Graphics#lineStyle is no longer needed. Use Graphics#setStrokeStyle to set the stroke style.");const s={};return e&&(s.width=e),r&&(s.color=r),i&&(s.alpha=i),this.context.strokeStyle=s,this}beginFill(e,r){$e(Ge,"Graphics#beginFill is no longer needed. Use Graphics#fill to fill the shape with the desired style.");const i={};return e!==void 0&&(i.color=e),r!==void 0&&(i.alpha=r),this.context.fillStyle=i,this}endFill(){$e(Ge,"Graphics#endFill is no longer needed. Use Graphics#fill to fill the shape with the desired style."),this.context.fill();const e=this.context.strokeStyle;return(e.width!==Ut.defaultStrokeStyle.width||e.color!==Ut.defaultStrokeStyle.color||e.alpha!==Ut.defaultStrokeStyle.alpha)&&this.context.stroke(),this}drawCircle(...e){return $e(Ge,"Graphics#drawCircle has been renamed to Graphics#circle"),this._callContextMethod("circle",e)}drawEllipse(...e){return $e(Ge,"Graphics#drawEllipse has been renamed to Graphics#ellipse"),this._callContextMethod("ellipse",e)}drawPolygon(...e){return $e(Ge,"Graphics#drawPolygon has been renamed to Graphics#poly"),this._callContextMethod("poly",e)}drawRect(...e){return $e(Ge,"Graphics#drawRect has been renamed to Graphics#rect"),this._callContextMethod("rect",e)}drawRoundedRect(...e){return $e(Ge,"Graphics#drawRoundedRect has been renamed to Graphics#roundRect"),this._callContextMethod("roundRect",e)}drawStar(...e){return $e(Ge,"Graphics#drawStar has been renamed to Graphics#star"),this._callContextMethod("star",e)}}Ze.add(ox,lx);function pt(t,e){return[...Array(t).keys()]}function ni(t){let e=0;return t.forEach(r=>{e=e+r}),e}function bt(t){return t.length===0?0:ni(t)/t.length}function Vt(t,e){if(t.length!==e.length)throw new Error("x and y must have the same length");const r=t.map((i,s)=>t[s]*e[s]);return ni(r)}function fl(t,e,r){return Math.max(t,Math.min(r,e))}function ml(t){return[Math.cos(t),Math.sin(t)]}function ur(){const t=Math.random()*2*Math.PI;return ml(t)}function Ue(t,e){return pt(t.length).map(r=>t[r]-e[r])}function Xi(t,e){return pt(t.length).map(r=>t[r]+e[r])}function Ie(t,e,r,i){return Xi(Re(t,e),Re(r,i))}function Re(t,e){return e.map(r=>t*r)}function dn(t){const e=t.map(r=>r**2);return Math.sqrt(ni(e))}function At(t,e){return dn(Ue(t,e))}function Zt(t){const e=dn(t);return e===0?[0,0]:Re(1/e,t)}function gt(t,e){return Zt(Ue(e,t))}function s3(t){let e=0,r=t[0];return t.forEach((i,s)=>{i>r&&(e=s,r=i)}),e}function n3(t,e){if(dn(t)<e)return t;const i=Zt(t);return Re(e,i)}function ei(t,e){return t[0]*e[1]-t[1]*e[0]}function a3(){return ml(2*Math.PI*Math.random())}function la(t,e){const r=t.find(e);if(r==null)throw new Error("item not found");return r}function Xc(t){let e=1;return t.forEach(r=>{e=e*r}),e}function o3(t,e){if(t.length!==Xc(e))throw new Error(`Total elements (${t.length}) does not match dimensions (${e.join("x")})`);if(e.length!=2)throw new Error(`Dimensions (${e.join("x")}) must have length 2.`);const[r,...i]=e,s=Xc(i),n=[];for(let a=0;a<r;a++){const o=a*s,l=o+s,u=t.slice(o,l);n.push(u)}return n}class Dr{constructor(e){B(this,"simulation");B(this,"index");B(this,"id","entityId");this.simulation=e,this.index=this.simulation.entities.length,this.simulation.entities.push(this)}preStep(e){}getState(){return{}}loadState(e){}}class gl extends Dr{constructor(r,i,s){super(r);B(this,"radius");B(this,"position");B(this,"collisions",[]);B(this,"mass");B(this,"star",!1);B(this,"action",[0,0]);B(this,"velocity",[0,0]);B(this,"force",[0,0]);B(this,"impulse",[0,0]);B(this,"shift",[0,0]);B(this,"drag",.7);B(this,"static",!1);B(this,"destroyed",!1);B(this,"trail");this.position=structuredClone(i),this.radius=s,this.mass=.01*Math.PI*this.radius**2,this.simulation.circleBodies.push(this),this.trail=pt(50).map(n=>structuredClone(this.position))}preStep(r){this.trail.push(this.position),this.trail.shift()}destroy(){this.destroyed=!0}doesCollide(r){return!0}onCollide(r){}invincible(){return!1}getState(){const r=super.getState();return r.x=this.position[0],r.y=this.position[1],r.vx=this.velocity[0],r.vy=this.velocity[1],r.star=Number(this.star),r.dead=Number(this.destroyed),r}loadState(r){r.x!=null&&(this.position[0]=r.x),r.y!=null&&(this.position[1]=r.y),r.vx!=null&&(this.velocity[0]=r.vx),r.vy!=null&&(this.velocity[1]=r.vy),r.star!=null&&(this.star=!!r.star),r.dead!=null&&(this.destroyed=!!r.dead),this.trail=pt(50).map(i=>structuredClone(this.position))}}class Ki extends gl{constructor(r,i,s){super(r,i,s);B(this,"movePower",20);B(this,"align",1);B(this,"action",[0,0]);B(this,"targetVelocity",[0,0]);B(this,"targetPoint",[0,0]);B(this,"blade");B(this,"agentIndex");B(this,"actionTimer",0);this.mass=1,this.agentIndex=this.simulation.agents.length,this.simulation.agents.push(this)}preStep(r){super.preStep(r),this.destroyed&&this.blade!=null&&this.blade.detach();const i=ni(this.action.map(s=>s**2))>0;this.actionTimer=i?0:this.actionTimer+r}}class l0 extends Ki{constructor(r,i){super(r,i,5);B(this,"drag",.7);B(this,"align",0);B(this,"spawnPoint");B(this,"history");B(this,"historyTimer",1);B(this,"id","player");this.spawnPoint=structuredClone(i),this.history=pt(20).map(s=>structuredClone(this.position)),this.simulation.player=this}invincible(){return At(this.position,this.spawnPoint)<15}preStep(r){super.preStep(r),this.historyTimer-=r,!(this.historyTimer>0)&&(this.historyTimer=1,this.history.unshift(structuredClone(this.position)),this.history.pop())}handleInput(r){let i=0,s=0;(r.isKeyDown("KeyW")||r.isKeyDown("ArrowUp"))&&(s-=1),(r.isKeyDown("KeyS")||r.isKeyDown("ArrowDown"))&&(s+=1),(r.isKeyDown("KeyA")||r.isKeyDown("ArrowLeft"))&&(i-=1),(r.isKeyDown("KeyD")||r.isKeyDown("ArrowRight"))&&(i+=1),this.action=Zt([i,s]),r.isMouseButtonDown(0)&&(this.action=Zt(r.mousePosition))}loadState(r){super.loadState(r),this.history=pt(50).map(i=>structuredClone(this.position)),this.destroyed=!1}}class u0 extends Ke{constructor(r,i,s){super();B(this,"levelView");B(this,"body");B(this,"torsoGraphicsContext");B(this,"torsoGraphics");B(this,"starGraphics");this.torsoGraphicsContext=new Ut().circle(0,0,i.radius).fill(s),this.torsoGraphics=new Je(this.torsoGraphicsContext),this.addChild(this.torsoGraphics),this.levelView=r,this.body=i,this.cullable=!0,this.levelView.addChild(this),this.starGraphics=new Je().star(0,0,5,4,1.8).fill(r.colors.starColor),this.starGraphics.visible=!1,this.addChild(this.starGraphics)}update(){this.x=this.body.position[0],this.y=this.body.position[1],this.starGraphics.visible=this.body.star,this.visible=!this.body.destroyed||this.body instanceof l0}}class Cs extends u0{constructor(r,i,s){super(r,i,s);B(this,"trail");B(this,"trailCircles");this.trail=new Ke,this.levelView.trailContainer.addChild(this.trail);const n=this.body.trail.length;this.trailCircles=this.body.trail.map((a,o)=>{const l=new Je(this.torsoGraphicsContext);return l.alpha=.05*(o/n),l.x=a[0],l.x=a[1],l.cullable=!0,this.trail.addChild(l),l}),this.cullable=!0}update(){super.update(),this.trailCircles.forEach((r,i)=>{const s=this.body.trail[i];r.x=s[0],r.y=s[1],r.visible=this.visible})}}class l3 extends Ke{constructor(r,i){super();B(this,"levelView");B(this,"simulation");B(this,"boundary");B(this,"floor");this.levelView=r,this.simulation=this.levelView.level,this.boundary=i,this.floor=this.buildFloor(),this.addChild(this.floor),this.levelView.addChild(this)}buildFloor(){const r=new Ke,i=new Je;return this.boundary.polygon.forEach((s,n)=>{n===0?i.moveTo(s[0],s[1]):i.lineTo(s[0],s[1])}),i.closePath(),i.fill("hsl(0,0%,0%)"),r.addChild(i),r}}class u3 extends Je{constructor(r,i){const s=new Ut().star(0,0,5,4,1.8).fill(r.colors.starColor);super(s);B(this,"levelView");B(this,"starEntity");this.levelView=r,this.starEntity=i,this.cullable=!0,this.x=i.position[0],this.y=i.position[1],this.levelView.addChild(this)}update(){this.visible=this.starEntity.available}}class d3 extends Ke{constructor(r,i){super();B(this,"levelView");B(this,"door");B(this,"background");B(this,"outline");B(this,"starGraphics");B(this,"holeGraphics");this.levelView=r,this.door=i,this.cullable=!0,this.x=i.position[0],this.y=i.position[1],this.levelView.addChild(this),this.background=this.buildBackground(),this.outline=this.buildContainer(),this.addChild(this.background),this.addChild(this.outline),this.background.mask=this.outline,this.holeGraphics=new Je().star(0,0,5,4,1.8).fill("black").stroke({color:"black",width:1,join:"round"}),this.starGraphics=new Je().star(0,0,5,4,1.8).fill(r.colors.starColor),this.starGraphics.visible=!1,this.addChild(this.holeGraphics),this.addChild(this.starGraphics)}update(){this.x=this.door.position[0],this.y=this.door.position[1],this.starGraphics.visible!==this.door.star&&(this.starGraphics.visible=this.door.star,this.cacheAsTexture({resolution:10}))}buildBackground(){const r=this.door.localPoints,i=r.map(p=>p[0]),s=r.map(p=>p[1]),n=Math.min(...i),a=Math.min(...s),o=Math.max(...i),l=Math.max(...s),u=o-n,d=l-a,c=new Je;return c.rect(n,a,u,d),c.fill("hsl(36,100%,10%)"),c}buildContainer(){const r=new Ke,i=new Je;return this.door.localPoints.forEach((s,n)=>{n===0?i.moveTo(s[0],s[1]):i.lineTo(s[0],s[1])}),i.closePath(),i.fill("hsl(0,0%,0%)"),i.cullable=!0,r.addChild(i),r}}class c3 extends Ke{constructor(r,i){super();B(this,"levelView");B(this,"transporter");B(this,"baseRing");B(this,"chargeRing");B(this,"interval");B(this,"charge");B(this,"color");this.color=i.exit?r.colors.starColor:r.colors.transporterColor,this.levelView=r,this.transporter=i,this.interval=i.interval,this.charge=i.charge,this.cullable=!0,this.x=i.position[0],this.y=i.position[1],this.levelView.addChild(this);const s=new Ut().circle(0,0,13).stroke({color:this.color,width:1});this.baseRing=new Je(s),this.addChild(this.baseRing),this.chargeRing=new Je,this.addChild(this.chargeRing),this.drawChargeRing()}update(){this.charge!==this.transporter.charge&&(this.charge=this.transporter.charge,this.drawChargeRing())}drawChargeRing(){this.chargeRing.clear(),this.chargeRing.arc(0,0,17,1.5*Math.PI,1.5*Math.PI+this.charge/this.interval*2*Math.PI).stroke({color:this.color,join:"round",cap:"round",width:1})}}const h3=new Ut().circle(0,0,8).stroke({color:"hsla(220, 100%, 50%, 0.3)",width:2});class p3 extends Ke{constructor(r,i){super();B(this,"levelView");B(this,"player");B(this,"simulation");B(this,"ring");this.levelView=r,this.simulation=r.level,this.player=i,this.cullable=!0,this.x=this.player.spawnPoint[0],this.y=this.player.spawnPoint[1],this.levelView.addChild(this),this.ring=new Je(h3),this.addChild(this.ring)}update(){this.x=this.player.spawnPoint[0],this.y=this.player.spawnPoint[1]}}class f3 extends Je{constructor(r,i,s){super();B(this,"levelView");B(this,"blade");B(this,"color");this.levelView=r,this.blade=i,this.color=s,this.cullable=!0,this.levelView.addChild(this)}update(){if(this.blade.agent==null){this.visible=!1;return}this.visible=!0;const r=this.blade.position,i=this.blade.agent.position;this.clear(),this.strokeStyle={color:this.color,width:.7},this.moveTo(r[0],r[1]),this.lineTo(i[0],i[1]),this.stroke()}}class m3 extends Je{constructor(r,i){const s=new Ut;i.polygon.forEach((n,a)=>{a===0?s.moveTo(n[0],n[1]):s.lineTo(n[0],n[1])}),s.closePath(),s.fill(r.colors.wallColor);super(s);B(this,"levelView");B(this,"wall");this.levelView=r,this.wall=i,this.cullable=!0,this.levelView.addChild(this)}}class Kc extends Ke{constructor(r){super();B(this,"level");B(this,"world");B(this,"colors");B(this,"trailContainer");B(this,"circleViews",[]);B(this,"springViews",[]);B(this,"starViews",[]);B(this,"transporterViews",[]);B(this,"doorViews",[]);B(this,"wallViews",[]);B(this,"spawnViews",[]);this.world=r,this.level=r.level,this.world.game.app.stage.addChild(this),this.trailContainer=new Ke,this.colors=this.world.game.colors,this.build()}build(){this.level.boundaries.forEach(r=>{new l3(this,r)}),this.level.walls.forEach(r=>{this.wallViews.push(new m3(this,r))}),this.level.transporters.forEach(r=>{this.transporterViews.push(new c3(this,r))}),this.spawnViews.push(new p3(this,this.level.player)),this.level.stars.forEach(r=>{this.starViews.push(new u3(this,r))}),this.level.doors.forEach(r=>{this.doorViews.push(new d3(this,r))}),this.addChild(this.trailContainer),this.level.rocks.forEach(r=>{this.circleViews.push(new u0(this,r,this.colors.rockColor))}),this.level.blades.forEach(r=>{const i=r.align===0?this.colors.playerBladeColor:this.colors.roverBladeColor;this.springViews.push(new f3(this,r,i)),this.circleViews.push(new Cs(this,r,i))}),this.level.monsters.forEach(r=>{this.circleViews.push(new Cs(this,r,this.colors.monsterColor))}),this.circleViews.push(new Cs(this,this.level.player,this.colors.playerColor)),this.level.rovers.forEach(r=>{this.circleViews.push(new Cs(this,r,this.colors.roverColor))})}update(){this.updateCamera(),this.circleViews.forEach(r=>r.update()),this.springViews.forEach(r=>r.update()),this.starViews.forEach(r=>r.update()),this.doorViews.forEach(r=>r.update()),this.transporterViews.forEach(r=>r.update()),this.spawnViews.forEach(r=>r.update())}updateCamera(){const r=this.level.player,i=r!=null?r.position:[0,0],s=Math.min(window.innerWidth,window.innerHeight);this.scale=.004*s*Math.exp(.1*this.world.input.zoom),this.x=.5*window.innerWidth-this.scale.x*i[0],this.y=.5*window.innerHeight-this.scale.y*i[1]}}class g3 extends Dr{constructor(r,i){super(r);B(this,"polygon");this.simulation.boundaries.push(this),this.polygon=structuredClone(i)}}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var ua,Zc;function y3(){if(Zc)return ua;Zc=1,ua=function(r){return r!=null&&(t(r)||e(r)||!!r._isBuffer)};function t(r){return!!r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}function e(r){return typeof r.readFloatLE=="function"&&typeof r.slice=="function"&&t(r.slice(0,0))}return ua}var da,Qc;function _3(){if(Qc)return da;Qc=1;var t=y3(),e=Object.prototype.toString;return da=function(i){if(typeof i>"u")return"undefined";if(i===null)return"null";if(i===!0||i===!1||i instanceof Boolean)return"boolean";if(typeof i=="string"||i instanceof String)return"string";if(typeof i=="number"||i instanceof Number)return"number";if(typeof i=="function"||i instanceof Function)return"function";if(typeof Array.isArray<"u"&&Array.isArray(i))return"array";if(i instanceof RegExp)return"regexp";if(i instanceof Date)return"date";var s=e.call(i);return s==="[object RegExp]"?"regexp":s==="[object Date]"?"date":s==="[object Arguments]"?"arguments":s==="[object Error]"?"error":t(i)?"buffer":s==="[object Set]"?"set":s==="[object WeakSet]"?"weakset":s==="[object Map]"?"map":s==="[object WeakMap]"?"weakmap":s==="[object Symbol]"?"symbol":s==="[object Int8Array]"?"int8array":s==="[object Uint8Array]"?"uint8array":s==="[object Uint8ClampedArray]"?"uint8clampedarray":s==="[object Int16Array]"?"int16array":s==="[object Uint16Array]"?"uint16array":s==="[object Int32Array]"?"int32array":s==="[object Uint32Array]"?"uint32array":s==="[object Float32Array]"?"float32array":s==="[object Float64Array]"?"float64array":"object"},da}var ca={exports:{}},Jc;function b3(){return Jc||(Jc=1,(function(t){(function(){function e(r,i){if(typeof i!="function")return r;var s={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(s[i(n,r[n])||n]=r[n]);return s}t.exports?t.exports=e:window.rename=e})()})(ca)),ca.exports}/*!
 * deep-rename-keys <https://github.com/jonschlinkert/deep-rename-keys>
 *
 * Copyright (c) 2015 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */var ha,eh;function w3(){if(eh)return ha;eh=1;var t=_3(),e=b3();return ha=function r(i,s){var n=t(i);if(n!=="object"&&n!=="array")throw new Error("expected an object");var a=[];n==="object"&&(i=e(i,s),a={});for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];t(l)==="object"||t(l)==="array"?a[o]=r(l,s):a[o]=l}return a},ha}var x3=w3();const v3=Jo(x3);var pa={exports:{}},th;function $3(){return th||(th=1,(function(t){var e=Object.prototype.hasOwnProperty,r="~";function i(){}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(r=!1));function s(a,o,l){this.fn=a,this.context=o,this.once=l||!1}function n(){this._events=new i,this._eventsCount=0}n.prototype.eventNames=function(){var o=[],l,u;if(this._eventsCount===0)return o;for(u in l=this._events)e.call(l,u)&&o.push(r?u.slice(1):u);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(l)):o},n.prototype.listeners=function(o,l){var u=r?r+o:o,d=this._events[u];if(l)return!!d;if(!d)return[];if(d.fn)return[d.fn];for(var c=0,p=d.length,f=new Array(p);c<p;c++)f[c]=d[c].fn;return f},n.prototype.emit=function(o,l,u,d,c,p){var f=r?r+o:o;if(!this._events[f])return!1;var m=this._events[f],y=arguments.length,b,_;if(m.fn){switch(m.once&&this.removeListener(o,m.fn,void 0,!0),y){case 1:return m.fn.call(m.context),!0;case 2:return m.fn.call(m.context,l),!0;case 3:return m.fn.call(m.context,l,u),!0;case 4:return m.fn.call(m.context,l,u,d),!0;case 5:return m.fn.call(m.context,l,u,d,c),!0;case 6:return m.fn.call(m.context,l,u,d,c,p),!0}for(_=1,b=new Array(y-1);_<y;_++)b[_-1]=arguments[_];m.fn.apply(m.context,b)}else{var x=m.length,$;for(_=0;_<x;_++)switch(m[_].once&&this.removeListener(o,m[_].fn,void 0,!0),y){case 1:m[_].fn.call(m[_].context);break;case 2:m[_].fn.call(m[_].context,l);break;case 3:m[_].fn.call(m[_].context,l,u);break;case 4:m[_].fn.call(m[_].context,l,u,d);break;default:if(!b)for($=1,b=new Array(y-1);$<y;$++)b[$-1]=arguments[$];m[_].fn.apply(m[_].context,b)}}return!0},n.prototype.on=function(o,l,u){var d=new s(l,u||this),c=r?r+o:o;return this._events[c]?this._events[c].fn?this._events[c]=[this._events[c],d]:this._events[c].push(d):(this._events[c]=d,this._eventsCount++),this},n.prototype.once=function(o,l,u){var d=new s(l,u||this,!0),c=r?r+o:o;return this._events[c]?this._events[c].fn?this._events[c]=[this._events[c],d]:this._events[c].push(d):(this._events[c]=d,this._eventsCount++),this},n.prototype.removeListener=function(o,l,u,d){var c=r?r+o:o;if(!this._events[c])return this;if(!l)return--this._eventsCount===0?this._events=new i:delete this._events[c],this;var p=this._events[c];if(p.fn)p.fn===l&&(!d||p.once)&&(!u||p.context===u)&&(--this._eventsCount===0?this._events=new i:delete this._events[c]);else{for(var f=0,m=[],y=p.length;f<y;f++)(p[f].fn!==l||d&&!p[f].once||u&&p[f].context!==u)&&m.push(p[f]);m.length?this._events[c]=m.length===1?m[0]:m:--this._eventsCount===0?this._events=new i:delete this._events[c]}return this},n.prototype.removeAllListeners=function(o){var l;return o?(l=r?r+o:o,this._events[l]&&(--this._eventsCount===0?this._events=new i:delete this._events[l])):(this._events=new i,this._eventsCount=0),this},n.prototype.off=n.prototype.removeListener,n.prototype.addListener=n.prototype.on,n.prototype.setMaxListeners=function(){return this},n.prefixed=r,n.EventEmitter=n,t.exports=n})(pa)),pa.exports}var fa={exports:{}},rh;function k3(){return rh||(rh=1,(function(t){var e=Object.prototype.hasOwnProperty,r="~";function i(){}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(r=!1));function s(a,o,l){this.fn=a,this.context=o,this.once=l||!1}function n(){this._events=new i,this._eventsCount=0}n.prototype.eventNames=function(){var o=[],l,u;if(this._eventsCount===0)return o;for(u in l=this._events)e.call(l,u)&&o.push(r?u.slice(1):u);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(l)):o},n.prototype.listeners=function(o,l){var u=r?r+o:o,d=this._events[u];if(l)return!!d;if(!d)return[];if(d.fn)return[d.fn];for(var c=0,p=d.length,f=new Array(p);c<p;c++)f[c]=d[c].fn;return f},n.prototype.emit=function(o,l,u,d,c,p){var f=r?r+o:o;if(!this._events[f])return!1;var m=this._events[f],y=arguments.length,b,_;if(m.fn){switch(m.once&&this.removeListener(o,m.fn,void 0,!0),y){case 1:return m.fn.call(m.context),!0;case 2:return m.fn.call(m.context,l),!0;case 3:return m.fn.call(m.context,l,u),!0;case 4:return m.fn.call(m.context,l,u,d),!0;case 5:return m.fn.call(m.context,l,u,d,c),!0;case 6:return m.fn.call(m.context,l,u,d,c,p),!0}for(_=1,b=new Array(y-1);_<y;_++)b[_-1]=arguments[_];m.fn.apply(m.context,b)}else{var x=m.length,$;for(_=0;_<x;_++)switch(m[_].once&&this.removeListener(o,m[_].fn,void 0,!0),y){case 1:m[_].fn.call(m[_].context);break;case 2:m[_].fn.call(m[_].context,l);break;case 3:m[_].fn.call(m[_].context,l,u);break;case 4:m[_].fn.call(m[_].context,l,u,d);break;default:if(!b)for($=1,b=new Array(y-1);$<y;$++)b[$-1]=arguments[$];m[_].fn.apply(m[_].context,b)}}return!0},n.prototype.on=function(o,l,u){var d=new s(l,u||this),c=r?r+o:o;return this._events[c]?this._events[c].fn?this._events[c]=[this._events[c],d]:this._events[c].push(d):(this._events[c]=d,this._eventsCount++),this},n.prototype.once=function(o,l,u){var d=new s(l,u||this,!0),c=r?r+o:o;return this._events[c]?this._events[c].fn?this._events[c]=[this._events[c],d]:this._events[c].push(d):(this._events[c]=d,this._eventsCount++),this},n.prototype.removeListener=function(o,l,u,d){var c=r?r+o:o;if(!this._events[c])return this;if(!l)return--this._eventsCount===0?this._events=new i:delete this._events[c],this;var p=this._events[c];if(p.fn)p.fn===l&&(!d||p.once)&&(!u||p.context===u)&&(--this._eventsCount===0?this._events=new i:delete this._events[c]);else{for(var f=0,m=[],y=p.length;f<y;f++)(p[f].fn!==l||d&&!p[f].once||u&&p[f].context!==u)&&m.push(p[f]);m.length?this._events[c]=m.length===1?m[0]:m:--this._eventsCount===0?this._events=new i:delete this._events[c]}return this},n.prototype.removeAllListeners=function(o){var l;return o?(l=r?r+o:o,this._events[l]&&(--this._eventsCount===0?this._events=new i:delete this._events[l])):(this._events=new i,this._eventsCount=0),this},n.prototype.off=n.prototype.removeListener,n.prototype.addListener=n.prototype.on,n.prototype.setMaxListeners=function(){return this},n.prefixed=r,n.EventEmitter=n,t.exports=n})(fa)),fa.exports}var ma,ih;function S3(){if(ih)return ma;ih=1;function t(u,d,c){return d in u?Object.defineProperty(u,d,{value:c,enumerable:!0,configurable:!0,writable:!0}):u[d]=c,u}var e=k3(),r=function(){},i={data:"state-data",cdata:"state-cdata",tagBegin:"state-tag-begin",tagName:"state-tag-name",tagEnd:"state-tag-end",attributeNameStart:"state-attribute-name-start",attributeName:"state-attribute-name",attributeNameEnd:"state-attribute-name-end",attributeValueBegin:"state-attribute-value-begin",attributeValue:"state-attribute-value"},s={lt:"action-lt",gt:"action-gt",space:"action-space",equal:"action-equal",quote:"action-quote",slash:"action-slash",char:"action-char",error:"action-error"},n={text:"text",openTag:"open-tag",closeTag:"close-tag",attributeName:"attribute-name",attributeValue:"attribute-value"},a={" ":s.space,"	":s.space,"\n":s.space,"\r":s.space,"<":s.lt,">":s.gt,'"':s.quote,"'":s.quote,"=":s.equal,"/":s.slash},o=function(d){return a[d]||s.char},l=function(d){var c,p,f,m,y,b,_,x,$,S;d=Object.assign({debug:!1},d);var E=new e,T=i.data,A="",k="",P="",M="",N="",W="",L=function(O,V){if(!(k[0]==="?"||k[0]==="!")){var ae={type:O,value:V};d.debug&&console.log("emit:",ae),E.emit("data",ae)}};E.stateMachine=(S={},t(S,i.data,(c={},t(c,s.lt,function(){A.trim()&&L(n.text,A),k="",N=!1,T=i.tagBegin}),t(c,s.char,function(q){A+=q}),c)),t(S,i.cdata,t({},s.char,function(q){A+=q,A.substr(-3)==="]]>"&&(L(n.text,A.slice(0,-3)),A="",T=i.data)})),t(S,i.tagBegin,(p={},t(p,s.space,r),t(p,s.char,function(q){k=q,T=i.tagName}),t(p,s.slash,function(){k="",N=!0}),p)),t(S,i.tagName,(f={},t(f,s.space,function(){N?T=i.tagEnd:(T=i.attributeNameStart,L(n.openTag,k))}),t(f,s.gt,function(){L(N?n.closeTag:n.openTag,k),A="",T=i.data}),t(f,s.slash,function(){T=i.tagEnd,L(n.openTag,k)}),t(f,s.char,function(q){k+=q,k==="![CDATA["&&(T=i.cdata,A="",k="")}),f)),t(S,i.tagEnd,(m={},t(m,s.gt,function(){L(n.closeTag,k),A="",T=i.data}),t(m,s.char,r),m)),t(S,i.attributeNameStart,(y={},t(y,s.char,function(q){P=q,T=i.attributeName}),t(y,s.gt,function(){A="",T=i.data}),t(y,s.space,r),t(y,s.slash,function(){N=!0,T=i.tagEnd}),y)),t(S,i.attributeName,(b={},t(b,s.space,function(){T=i.attributeNameEnd}),t(b,s.equal,function(){L(n.attributeName,P),T=i.attributeValueBegin}),t(b,s.gt,function(){M="",L(n.attributeName,P),L(n.attributeValue,M),A="",T=i.data}),t(b,s.slash,function(){N=!0,M="",L(n.attributeName,P),L(n.attributeValue,M),T=i.tagEnd}),t(b,s.char,function(q){P+=q}),b)),t(S,i.attributeNameEnd,(_={},t(_,s.space,r),t(_,s.equal,function(){L(n.attributeName,P),T=i.attributeValueBegin}),t(_,s.gt,function(){M="",L(n.attributeName,P),L(n.attributeValue,M),A="",T=i.data}),t(_,s.char,function(q){M="",L(n.attributeName,P),L(n.attributeValue,M),P=q,T=i.attributeName}),_)),t(S,i.attributeValueBegin,(x={},t(x,s.space,r),t(x,s.quote,function(q){W=q,M="",T=i.attributeValue}),t(x,s.gt,function(){M="",L(n.attributeValue,M),A="",T=i.data}),t(x,s.char,function(q){W="",M=q,T=i.attributeValue}),x)),t(S,i.attributeValue,($={},t($,s.space,function(q){W?M+=q:(L(n.attributeValue,M),T=i.attributeNameStart)}),t($,s.quote,function(q){W===q?(L(n.attributeValue,M),T=i.attributeNameStart):M+=q}),t($,s.gt,function(q){W?M+=q:(L(n.attributeValue,M),A="",T=i.data)}),t($,s.slash,function(q){W?M+=q:(L(n.attributeValue,M),N=!0,T=i.tagEnd)}),t($,s.char,function(q){M+=q}),$)),S);var R=function(O){d.debug&&console.log(T,O);var V=E.stateMachine[T],ae=V[o(O)]||V[s.error]||V[s.char];ae(O)};return E.write=function(q){for(var O=q.length,V=0;V<O;V++)R(q[V])},E};return ma={State:i,Action:s,Type:n,create:l},ma}var ga,sh;function C3(){if(sh)return ga;sh=1;var t=$3(),e=S3(),r=e.Type,i={element:"element",text:"text"},s=function(l){return Object.assign({name:"",type:i.element,value:"",parent:null,attributes:{},children:[]},l)},n=function(l){l=Object.assign({stream:!1,parentNodes:!0,doneEvent:"done",tagPrefix:"tag:",emitTopLevelOnly:!1,debug:!1},l);var u=void 0,d=void 0,c=void 0,p=void 0,f=new t,m=function(b){switch(b.type){case r.openTag:if(c===null)c=d,c.name=b.value;else{var _=s({name:b.value,parent:c});c.children.push(_),c=_}break;case r.closeTag:var x=c.parent;if(l.parentNodes||(c.parent=null),c.name!==b.value)break;l.stream&&x===d&&(d.children=[],c.parent=null),(!l.emitTopLevelOnly||x===d)&&(f.emit(l.tagPrefix+c.name,c),f.emit("tag",c.name,c)),c===d&&(u.removeAllListeners("data"),f.emit(l.doneEvent,c),d=null),c=x;break;case r.text:c&&c.children.push(s({type:i.text,value:b.value,parent:l.parentNodes?c:null}));break;case r.attributeName:p=b.value,c.attributes[p]="";break;case r.attributeValue:c.attributes[p]=b.value;break}};return f.reset=function(){u=e.create({debug:l.debug}),u.on("data",m),d=s(),c=null,p="",f.parse=u.write},f.reset(),f},a=function(l,u){u=Object.assign({},u,{stream:!1,tagPrefix:":"});var d=n(u),c=void 0;return d.on("done",function(p){c=p}),d.parse(l),c};return ga={parseSync:a,create:n,NodeType:i},ga}var T3=C3(),E3=function(e){var r=T3.parseSync("<root>".concat(e,"</root>"),{parentNodes:!1}),i=r.children&&r.children.length>0&&r.children.every(function(s){return s.name==="svg"});if(i)return r.children.length===1?r.children[0]:r.children;throw Error("nothing to parse")},A3=function(e){return v3(e,function(r){return M3(r)?r:I3(r)})},I3=function(e){return e.replace(/[-|:]([a-z])/gi,function(r,i){return i.toUpperCase()})},M3=function(e){return/^(data|aria)(-\w+)/.test(e)},z3=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transformNode,s=i===void 0?function(l){return l}:i,n=r.camelcase,a=n===void 0?!1:n,o=function(u){var d;return d=s(u),a&&(d=A3(d)),d};return o(E3(e))};function P3(t,e){return Math.sqrt(R3(t,e))}function R3(t,e){return Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2)}function Hr(t,e,r){return[t[0]+(e[0]-t[0])*r,t[1]+(e[1]-t[1])*r]}function B3(t,e){const r=t[e+0],i=t[e+1],s=t[e+2],n=t[e+3];let a=3*i[0]-2*r[0]-n[0];a*=a;let o=3*i[1]-2*r[1]-n[1];o*=o;let l=3*s[0]-2*n[0]-r[0];l*=l;let u=3*s[1]-2*n[1]-r[1];return u*=u,a<l&&(a=l),o<u&&(o=u),a+o}function Bo(t,e,r,i){const s=i||[];if(B3(t,e)<r){const n=t[e+0];s.length?P3(s[s.length-1],n)>1&&s.push(n):s.push(n),s.push(t[e+3])}else{const a=t[e+0],o=t[e+1],l=t[e+2],u=t[e+3],d=Hr(a,o,.5),c=Hr(o,l,.5),p=Hr(l,u,.5),f=Hr(d,c,.5),m=Hr(c,p,.5),y=Hr(f,m,.5);Bo([a,d,f,y],0,r,s),Bo([y,m,p,u],0,r,s)}return s}function O3(t,e=.15,r){const i=[],s=(t.length-1)/3;for(let n=0;n<s;n++){const a=n*3;Bo(t,a,e,i)}return i}const D3=0,Oo=1,d0=2,Ts={A:7,a:7,C:6,c:6,H:1,h:1,L:2,l:2,M:2,m:2,Q:4,q:4,S:4,s:4,T:2,t:2,V:1,v:1,Z:0,z:0};function N3(t){const e=new Array;for(;t!=="";)if(t.match(/^([ \t\r\n,]+)/))t=t.substr(RegExp.$1.length);else if(t.match(/^([aAcChHlLmMqQsStTvVzZ])/))e[e.length]={type:D3,text:RegExp.$1},t=t.substr(RegExp.$1.length);else if(t.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/))e[e.length]={type:Oo,text:`${parseFloat(RegExp.$1)}`},t=t.substr(RegExp.$1.length);else return[];return e[e.length]={type:d0,text:""},e}function ya(t,e){return t.type===e}function c0(t){const e=[],r=N3(t);let i="BOD",s=0,n=r[s];for(;!ya(n,d0);){let a=0;const o=[];if(i==="BOD")if(n.text==="M"||n.text==="m")s++,a=Ts[n.text],i=n.text;else return c0("M0,0"+t);else ya(n,Oo)?a=Ts[i]:(s++,a=Ts[n.text],i=n.text);if(s+a<r.length){for(let l=s;l<s+a;l++){const u=r[l];if(ya(u,Oo))o[o.length]=+u.text;else throw new Error("Param not a number: "+i+","+u.text)}if(typeof Ts[i]=="number"){const l={key:i,data:o};e.push(l),s+=a,n=r[s],i==="M"&&(i="L"),i==="m"&&(i="l")}else throw new Error("Bad segment: "+i)}else throw new Error("Path data ended short")}return e}function L3(t){let e=0,r=0,i=0,s=0;const n=[];for(const{key:a,data:o}of t)switch(a){case"M":n.push({key:"M",data:[...o]}),[e,r]=o,[i,s]=o;break;case"m":e+=o[0],r+=o[1],n.push({key:"M",data:[e,r]}),i=e,s=r;break;case"L":n.push({key:"L",data:[...o]}),[e,r]=o;break;case"l":e+=o[0],r+=o[1],n.push({key:"L",data:[e,r]});break;case"C":n.push({key:"C",data:[...o]}),e=o[4],r=o[5];break;case"c":{const l=o.map((u,d)=>d%2?u+r:u+e);n.push({key:"C",data:l}),e=l[4],r=l[5];break}case"Q":n.push({key:"Q",data:[...o]}),e=o[2],r=o[3];break;case"q":{const l=o.map((u,d)=>d%2?u+r:u+e);n.push({key:"Q",data:l}),e=l[2],r=l[3];break}case"A":n.push({key:"A",data:[...o]}),e=o[5],r=o[6];break;case"a":e+=o[5],r+=o[6],n.push({key:"A",data:[o[0],o[1],o[2],o[3],o[4],e,r]});break;case"H":n.push({key:"H",data:[...o]}),e=o[0];break;case"h":e+=o[0],n.push({key:"H",data:[e]});break;case"V":n.push({key:"V",data:[...o]}),r=o[0];break;case"v":r+=o[0],n.push({key:"V",data:[r]});break;case"S":n.push({key:"S",data:[...o]}),e=o[2],r=o[3];break;case"s":{const l=o.map((u,d)=>d%2?u+r:u+e);n.push({key:"S",data:l}),e=l[2],r=l[3];break}case"T":n.push({key:"T",data:[...o]}),e=o[0],r=o[1];break;case"t":e+=o[0],r+=o[1],n.push({key:"T",data:[e,r]});break;case"Z":case"z":n.push({key:"Z",data:[]}),e=i,r=s;break}return n}function G3(t){const e=[];let r="",i=0,s=0,n=0,a=0,o=0,l=0;for(const{key:u,data:d}of t){switch(u){case"M":e.push({key:"M",data:[...d]}),[i,s]=d,[n,a]=d;break;case"C":e.push({key:"C",data:[...d]}),i=d[4],s=d[5],o=d[2],l=d[3];break;case"L":e.push({key:"L",data:[...d]}),[i,s]=d;break;case"H":i=d[0],e.push({key:"L",data:[i,s]});break;case"V":s=d[0],e.push({key:"L",data:[i,s]});break;case"S":{let c=0,p=0;r==="C"||r==="S"?(c=i+(i-o),p=s+(s-l)):(c=i,p=s),e.push({key:"C",data:[c,p,...d]}),o=d[0],l=d[1],i=d[2],s=d[3];break}case"T":{const[c,p]=d;let f=0,m=0;r==="Q"||r==="T"?(f=i+(i-o),m=s+(s-l)):(f=i,m=s);const y=i+2*(f-i)/3,b=s+2*(m-s)/3,_=c+2*(f-c)/3,x=p+2*(m-p)/3;e.push({key:"C",data:[y,b,_,x,c,p]}),o=f,l=m,i=c,s=p;break}case"Q":{const[c,p,f,m]=d,y=i+2*(c-i)/3,b=s+2*(p-s)/3,_=f+2*(c-f)/3,x=m+2*(p-m)/3;e.push({key:"C",data:[y,b,_,x,f,m]}),o=c,l=p,i=f,s=m;break}case"A":{const c=Math.abs(d[0]),p=Math.abs(d[1]),f=d[2],m=d[3],y=d[4],b=d[5],_=d[6];c===0||p===0?(e.push({key:"C",data:[i,s,b,_,b,_]}),i=b,s=_):(i!==b||s!==_)&&(h0(i,s,b,_,c,p,f,m,y).forEach(function($){e.push({key:"C",data:$})}),i=b,s=_);break}case"Z":e.push({key:"Z",data:[]}),i=n,s=a;break}r=u}return e}function U3(t){return Math.PI*t/180}function yi(t,e,r){const i=t*Math.cos(r)-e*Math.sin(r),s=t*Math.sin(r)+e*Math.cos(r);return[i,s]}function h0(t,e,r,i,s,n,a,o,l,u){const d=U3(a);let c=[],p=0,f=0,m=0,y=0;if(u)[p,f,m,y]=u;else{[t,e]=yi(t,e,-d),[r,i]=yi(r,i,-d);const W=(t-r)/2,L=(e-i)/2;let R=W*W/(s*s)+L*L/(n*n);R>1&&(R=Math.sqrt(R),s=R*s,n=R*n);const q=o===l?-1:1,O=s*s,V=n*n,ae=O*V-O*L*L-V*W*W,F=O*L*L+V*W*W,se=q*Math.sqrt(Math.abs(ae/F));m=se*s*L/n+(t+r)/2,y=se*-n*W/s+(e+i)/2,p=Math.asin(parseFloat(((e-y)/n).toFixed(9))),f=Math.asin(parseFloat(((i-y)/n).toFixed(9))),t<m&&(p=Math.PI-p),r<m&&(f=Math.PI-f),p<0&&(p=Math.PI*2+p),f<0&&(f=Math.PI*2+f),l&&p>f&&(p=p-Math.PI*2),!l&&f>p&&(f=f-Math.PI*2)}let b=f-p;if(Math.abs(b)>Math.PI*120/180){const W=f,L=r,R=i;l&&f>p?f=p+Math.PI*120/180*1:f=p+Math.PI*120/180*-1,r=m+s*Math.cos(f),i=y+n*Math.sin(f),c=h0(r,i,L,R,s,n,a,0,l,[f,W,m,y])}b=f-p;const _=Math.cos(p),x=Math.sin(p),$=Math.cos(f),S=Math.sin(f),E=Math.tan(b/4),T=4/3*s*E,A=4/3*n*E,k=[t,e],P=[t+T*x,e-A*_],M=[r+T*S,i-A*$],N=[r,i];if(P[0]=2*k[0]-P[0],P[1]=2*k[1]-P[1],u)return[P,M,N].concat(c);{c=[P,M,N].concat(c);const W=[];for(let L=0;L<c.length;L+=3){const R=yi(c[L][0],c[L][1],d),q=yi(c[L+1][0],c[L+1][1],d),O=yi(c[L+2][0],c[L+2][1],d);W.push([R[0],R[1],q[0],q[1],O[0],O[1]])}return W}}function V3(t,e,r){const i=c0(t),s=G3(L3(i)),n=[];let a=[],o=[0,0],l=[];const u=()=>{l.length>=4&&a.push(...O3(l,e)),l=[]},d=()=>{u(),a.length&&(n.push(a),a=[])};for(const{key:c,data:p}of s)switch(c){case"M":d(),o=[p[0],p[1]],a.push(o);break;case"L":u(),a.push([p[0],p[1]]);break;case"C":if(!l.length){const f=a.length?a[a.length-1]:o;l.push([f[0],f[1]])}l.push([p[0],p[1]]),l.push([p[2],p[3]]),l.push([p[4],p[5]]);break;case"Z":u(),a.push([o[0],o[1]]);break}return d(),n}function Dt(t,e){const r=t.children.filter(i=>i.attributes.id===e);if(r.length===0){const i=t.children.map(s=>s.attributes.id);throw console.log("child ids",i),new Error(`Child "${e}" not found.`)}return r[0]}function Fs(t,e,r){const i=[];return pt(r.length).forEach(s=>{const n=s>0?s-1:r.length-1,a=[r[s],r[n]],o=F3(t,e,a);i.push(...o)}),i}function _a(t,e){const r=[];return pt(e.length).forEach(i=>{const s=i>0?i-1:e.length-1,n=[e[i],e[s]],a=q3(t,n);r.push(...a)}),r}function F3(t,e,r){const i=r[0],s=r[1],n=Ue(s,i),a=Ue(i,t),o=ei(e,n);if(o===0)return[];const l=ei(a,n)/o;if(l<0)return[];const u=ei(a,e)/o;return u<0?[]:u>1?[]:[l]}function W3(t,e){return Fs(t,[1,0],e).length%2===1}function q3(t,e){const r=t.map(k=>k[0]),i=e.map(k=>k[0]),s=Math.max(...r),n=Math.min(...i);if(s<n)return[];const a=Math.min(...r);if(Math.max(...i)<a)return[];const l=t.map(k=>k[1]),u=e.map(k=>k[1]),d=Math.max(...l),c=Math.min(...u);if(d<c)return[];const p=Math.min(...l);if(Math.max(...u)<p)return[];const m=t[0],y=t[1],b=e[0],_=e[1],x=Ue(y,m),$=Ue(_,b),S=Ue(m,b),E=ei($,x);if(E===0)return[];const T=ei(S,$)/E;if(T<0)return[];if(T>1)return[];const A=ei(S,x)/E;return A<0?[]:A>1?[]:[T]}function H3(t,e){const r=z3(e),i=Dt(r,"boundaryLayer"),s=Dt(r,"starLayer"),n=Dt(r,"transportLayer"),a=Dt(r,"wallLayer"),o=Dt(r,"doorLayer"),l=Dt(r,"rockLayer"),u=Dt(r,"bladeLayer"),d=Dt(r,"agentLayer"),c=Dt(r,"entranceLayer"),p=Dt(r,"arrowLayer"),f=nk(p);j3(t,i),J3(t,s),rk(t,n,f),ik(t,n),tk(t,a),ek(t,o,f),Q3(t,l),Z3(t,u),Y3(t,d),X3(t,d),K3(t,d),sk(t,c)}function j3(t,e){e.children.filter(i=>i.attributes.role==="boundary").forEach(i=>{const s=es(i),n=t.addBoundary(s);n.id=i.attributes.id})}function Y3(t,e){const r=e.children.filter(o=>o.attributes.role==="player")[0],i=Number(r.attributes.cx),s=Number(r.attributes.cy),n=[i,s],a=t.addPlayer(n);a.id="player"}function X3(t,e){e.children.filter(i=>i.attributes.role==="rover").forEach(i=>{const s=Number(i.attributes.cx),n=Number(i.attributes.cy),a=t.addRover([s,n]);a.id=i.attributes.id})}function K3(t,e){e.children.filter(i=>i.attributes.role==="monster").forEach(i=>{const s=Number(i.attributes.cx),n=Number(i.attributes.cy),a=t.addMonster([s,n]);a.id=i.attributes.id})}function Z3(t,e){e.children.filter(i=>i.attributes.role==="blade").forEach(i=>{const s=Number(i.attributes.cx),n=Number(i.attributes.cy),a=[s,n],o=Number(i.attributes.align),l=t.addBlade(a,o);l.id=i.attributes.id})}function Q3(t,e){e.children.filter(i=>i.attributes.role==="rock").forEach(i=>{const s=Number(i.attributes.cx),n=Number(i.attributes.cy),a=[s,n],o=Number(i.attributes.r),l=t.addRock(a,o);l.id=i.attributes.id})}function J3(t,e){e.children.filter(i=>i.attributes.role==="star").forEach(i=>{const s=es(i),n=s.map(c=>c[0]),a=s.map(c=>c[1]),o=bt(n),l=bt(a),u=[o,l],d=t.addStar(u);d.id=i.attributes.id})}function ek(t,e,r){e.children.filter(s=>s.attributes.role==="door").forEach(s=>{const n=es(s),a=r.filter(u=>W3(u[0],n))[0],o=Ue(a[1],a[0]),l=t.addDoor(n,o);l.id=s.attributes.id})}function tk(t,e){e.children.filter(i=>i.attributes.role==="wall").forEach(i=>{const s=es(i),n=t.addWall(s);n.id=i.attributes.id})}function rk(t,e,r){e.children.filter(s=>s.attributes.role==="transporter").forEach(s=>{const n=Number(s.attributes.cx),a=Number(s.attributes.cy),o=Number(s.attributes.r),l=[n,a],u=r.filter(p=>At(p[0],l)<o),d=u.length>0?u[0][1]:l,c=t.addTransporter(l,d);c.id=s.attributes.id})}function ik(t,e){e.children.filter(i=>i.attributes.role==="exit").forEach(i=>{const s=Number(i.attributes.cx),n=Number(i.attributes.cy),a=[s,n],o=Number(i.attributes.targetLevel),l=Number(i.attributes.targetEntrance),u=t.addExit(a,o,l);u.id=i.attributes.id})}function sk(t,e){e.children.filter(i=>i.attributes.role==="entrance").forEach(i=>{const s=Number(i.attributes.cx),n=Number(i.attributes.cy),a=[s,n],o=t.addEntrance(a);o.id=i.attributes.id})}function es(t){const e=t.attributes.d,r=V3(e).flat();return At(r[0],r[r.length-1])===0&&r.pop(),r}function nk(t){return t.children.filter(i=>i.attributes.role==="arrow").map(i=>es(i))}class ak{constructor(e,r){B(this,"normal");B(this,"overlap");this.normal=e,this.overlap=r}}function ok(t,e){if(t.destroyed||e.destroyed)return!1;const r=t.radius+e.radius,i=Ue(e.position,t.position);if(Math.abs(i[0])>r||Math.abs(i[1])>r)return!1;const s=ni(i.map(y=>y*y));if(s>=r*r)return!1;const n=Math.sqrt(s),a=r-n,o=t.doesCollide(e),l=e.doesCollide(t);if(!o||!l)return!1;const u=Re(1/n,i),d=Ue(t.velocity,e.velocity),c=Vt(d,u),p=1/(1/t.mass+1/e.mass),f=Re(c*p,u),m=Re(.5*a,u);return t.impulse=Ie(1,t.impulse,-1,f),e.impulse=Ie(1,e.impulse,1,f),t.shift=Ie(1,t.shift,-1,m),e.shift=Ie(1,e.shift,1,m),t.onCollide(e),e.onCollide(t),!0}function ba(t,e){const r=e.polygon;let i=!1;for(const s of pt(r.length)){const n=s>0?s-1:r.length-1,a=[r[s],r[n]];lk(t,a)&&(t.onCollide(e),i=!0)}for(const s of r)uk(t,s)&&(t.onCollide(e),i=!0);return i}function lk(t,e){const r=e.map(m=>m[0]);if(Math.max(...r)<t.position[0]-t.radius||Math.min(...r)>t.position[0]+t.radius)return!1;const i=e.map(m=>m[1]);if(Math.max(...i)<t.position[1]-t.radius||Math.min(...i)>t.position[1]+t.radius)return!1;const s=e[0],n=e[1],a=Ue(n,s),o=Ue(t.position,s),l=fl(0,1,Vt(o,a)/(Vt(a,a)+1e-9)),u=Ie(1,s,l,a),d=Ue(t.position,u),c=dn(d),p=t.radius-c;if(p<0)return!1;const f=Zt(d);return t.collisions.push(new ak(f,p)),!0}function uk(t,e){const r=Ue(e,t.position);if(Math.abs(r[0])>t.radius||Math.abs(r[1])>t.radius)return!1;const i=ni(r.map(d=>d*d));if(i>=t.radius*t.radius)return!1;const s=Math.sqrt(i),n=t.radius-s;if(n<=0)return!1;const a=gt(e,t.position),o=-Vt(t.velocity,a),l=Re(1.2*o*t.mass,a);t.impulse=Xi(t.impulse,l);const u=Re(n,a);return t.shift=Xi(t.shift,u),!0}function dk(t){if(t.busy){console.log("simulation busy");return}if(t.player.destroyed)return;const e=t.timeStep*t.timeScale;t.time+=e,t.entities.forEach(r=>r.preStep(e)),nh(t),t.agents.forEach(r=>{r.destroyed||(r.force=Ie(1,r.force,r.movePower/r.mass,r.action))}),t.blades.forEach(r=>{r.destroyed||(r.force=Xi(r.force,r.action))}),ah(t,e),nh(t),t.circleBodies.forEach(r=>{r.destroyed||(t.boundaries.forEach(i=>{ba(r,i)}),t.walls.forEach(i=>{ba(r,i)}),t.doors.forEach(i=>{ba(r,i)&&i.knock(r)}),t.circleBodies.forEach(i=>{i.destroyed||r.index<=i.index||ok(r,i)}))}),ah(t,e)}function nh(t){t.circleBodies.forEach(e=>{e.force=[0,0],e.impulse=[0,0],e.shift=[0,0],e.collisions=[]})}function ah(t,e){t.circleBodies.forEach(r=>{if(r.destroyed||r.static)return;const i=r.collisions.map(p=>p.normal),s=bt(i.map(p=>p[0])),n=bt(i.map(p=>p[1])),a=Zt([s,n]),o=-Math.max(0,Vt(r.velocity,a));r.impulse=Ie(1,r.impulse,o,a);const l=r.collisions.map(p=>p.overlap);if(l.length===0)return;const u=Math.max(...l),d=(r.collisions.length>1,1),c=Re(u,a);r.shift=Ie(1,r.shift,d,c)}),t.circleBodies.forEach(r=>{r.destroyed||r.static||(r.velocity=Re(1-r.drag*e,r.velocity),r.velocity=Ie(1,r.velocity,e/r.mass,r.force),r.velocity=Ie(1,r.velocity,1/r.mass,r.impulse),r.position=Ie(1,r.position,e,r.velocity),r.position=Ie(1,r.position,1,r.shift))})}class ck extends Ki{constructor(r,i){super(r,i,5);B(this,"movePower",20);B(this,"drag",.7);B(this,"align",1);this.simulation.rovers.push(this)}getState(){const r=super.getState();return r.targetVelocityX=this.targetVelocity[0],r.targetVelocityY=this.targetVelocity[1],r}loadState(r){super.loadState(r),this.targetVelocity=[r.targetVelocityX,r.targetVelocityY]}}class hk extends gl{constructor(r,i,s){super(r,i,s);B(this,"drag",1);this.mass=.005*Math.PI*this.radius**2,this.simulation.rocks.push(this)}}class pk extends Ki{constructor(r,i){super(r,i,5);B(this,"movePower",20);B(this,"drag",.7);B(this,"align",3);B(this,"targetVelocity",[0,0]);this.simulation.monsters.push(this)}preStep(r){super.preStep(r)}doesCollide(r){return r instanceof Ki&&r.align!==this.align?(r.invincible()||r.destroy(),!1):!0}getState(){const r=super.getState();return r.targetVelocityX=this.targetVelocity[0],r.targetVelocityY=this.targetVelocity[1],r}loadState(r){super.loadState(r),this.targetVelocity=[r.targetVelocityX,r.targetVelocityY]}}class fk extends Dr{constructor(r,i){super(r);B(this,"simulation");B(this,"position");B(this,"available",!0);this.simulation=r,this.position=structuredClone(i),this.simulation.stars.push(this)}preStep(){if(!this.available)return;const r=this.simulation.player;r.star||At(this.position,r.position)>9||(r.star=!0,this.available=!1)}getState(){const r=super.getState();return r.x=this.position[0],r.y=this.position[1],r.available=Number(this.available),r}loadState(r){r.x!=null&&(this.position[0]=r.x),r.y!=null&&(this.position[1]=r.y),r.available!=null&&(this.available=!!r.available)}}class mk extends Dr{constructor(r,i,s){super(r);B(this,"localPoints");B(this,"polygon");B(this,"position");B(this,"startPosition");B(this,"openPosition");B(this,"speed",10);B(this,"star",!1);this.polygon=structuredClone(i);const n=i.map(u=>u[0]),a=i.map(u=>u[1]),o=bt(n),l=bt(a);this.position=[o,l],this.startPosition=structuredClone(this.position),this.openPosition=Xi(this.startPosition,s),this.localPoints=i.map(u=>[u[0]-o,u[1]-l]),this.simulation.doors.push(this)}knock(r){r.star&&(this.star||(this.star=!0,r.star=!1))}preStep(r){const i=structuredClone(this.star?this.openPosition:this.startPosition),s=At(this.position,i),n=r*this.speed;if(s!==0){if(s<n&&(this.position=i),s>=n){const a=gt(this.position,i);this.position=Ie(1,this.position,n,a)}this.updatePolygon()}}updatePolygon(){this.polygon=this.localPoints.map(r=>[r[0]+this.position[0],r[1]+this.position[1]])}getState(){const r=super.getState();return r.x=this.position[0],r.y=this.position[1],r.star=Number(this.star),r}loadState(r){r.x!=null&&(this.position[0]=r.x),r.y!=null&&(this.position[1]=r.y),r.star!=null&&(this.star=!!r.star),this.updatePolygon()}}class oh extends Dr{constructor(r,i,s){super(r);B(this,"position");B(this,"target");B(this,"radius",13);B(this,"charge",0);B(this,"interval",2);B(this,"exit",!1);B(this,"targetLevel",1);B(this,"targetEntrance",0);this.position=structuredClone(i),this.target=structuredClone(s),this.simulation.transporters.push(this)}preStep(r){const i=this.simulation.player,n=At(this.position,i.position)<this.radius?1:-1;this.charge=fl(0,this.interval,this.charge+n*r),!(this.charge<this.interval)&&this.transport(i)}transport(r){this.charge=0,this.exit?(r.blade!=null&&r.blade.detach(),this.simulation.leaving=!0,this.simulation.targetLevel=this.targetLevel,this.simulation.targetEntrance=this.targetEntrance):(r.position=structuredClone(this.target),r.spawnPoint=structuredClone(this.target),r.history=r.history.map(i=>structuredClone(this.target)),r.blade!=null&&r.blade.detach(),this.simulation.saveBackup())}loadState(r){super.loadState(r),this.charge=0}}class gk extends gl{constructor(r,i,s){super(r,i,10);B(this,"drag",.3);B(this,"movePower",2);B(this,"align");B(this,"agent");this.align=s,this.simulation.blades.push(this)}preStep(r){if(super.preStep(r),this.agent==null)return;const i=Ue(this.agent.position,this.position);this.action=n3(i,50)}attach(r){r.blade==null&&this.agent==null&&(r.blade=this,this.agent=r)}detach(){this.action=[0,0],this.agent!=null&&(this.agent.blade=void 0,this.agent=void 0)}destroy(){super.destroy(),this.detach()}doesCollide(r){return r instanceof Ki?(r.align===this.align&&r.blade==null&&this.agent==null&&this.attach(r),r.align!==this.align&&(r.invincible()||r.destroy()),!1):!0}getState(){const r=super.getState();return this.agent!=null&&(r.agent=this.agent.agentIndex),r}loadState(r){if(super.loadState(r),r.agent==null){this.detach();return}const i=this.simulation.agents[r.agent];this.attach(i)}}class yk extends Dr{constructor(r,i){super(r);B(this,"simulation");B(this,"position");B(this,"entranceIndex");this.simulation=r,this.position=structuredClone(i),this.entranceIndex=this.simulation.entrances.length,this.simulation.entrances.push(this)}}class _k extends Dr{constructor(r,i){super(r);B(this,"polygon");this.polygon=structuredClone(i),this.simulation.walls.push(this)}}class bk{constructor(e){B(this,"boundaries",[]);B(this,"entities",[]);B(this,"circleBodies",[]);B(this,"agents",[]);B(this,"player");B(this,"rovers",[]);B(this,"monsters",[]);B(this,"rocks",[]);B(this,"blades",[]);B(this,"stars",[]);B(this,"walls",[]);B(this,"doors",[]);B(this,"transporters",[]);B(this,"entrances",[]);B(this,"timeStep",1/60);B(this,"timeScale",1.5);B(this,"time",0);B(this,"accumulator",0);B(this,"leaving",!1);B(this,"targetLevel",1);B(this,"targetEntrance",0);B(this,"busy",!1);B(this,"backup");H3(this,e),this.backup=this.getState()}update(e){for(this.accumulator+=.001*e.deltaMS;this.accumulator>this.timeStep;)this.accumulator-=this.timeStep,dk(this)}getState(){return this.entities.map(e=>e.getState())}saveBackup(){this.backup=this.getState()}loadBackup(){this.entities.map((e,r)=>{e.loadState(this.backup[r])})}addPlayer(e){return new l0(this,e)}addRover(e){return new ck(this,e)}addMonster(e){return new pk(this,e)}addRock(e,r){return new hk(this,e,r)}addBlade(e,r){return new gk(this,e,r)}addStar(e){return new fk(this,e)}addDoor(e,r){return new mk(this,e,r)}addWall(e){return new _k(this,e)}addTransporter(e,r){return new oh(this,e,r)}addExit(e,r,i){const s=new oh(this,e,e);return s.exit=!0,s.targetLevel=r,s.targetEntrance=i,s}addBoundary(e){return new g3(this,e)}addEntrance(e){return new yk(this,e)}segmentCast(e){const r=[];return this.boundaries.forEach(i=>{r.push(..._a(e,i.polygon))}),this.doors.forEach(i=>{r.push(..._a(e,i.polygon))}),this.walls.forEach(i=>{r.push(..._a(e,i.polygon))}),r}segmentCastPoint(e){const r=this.segmentCast(e);if(r.length===0)return e[1];const i=Math.min(...r),s=Ue(e[1],e[0]);return Ie(1,e[0],i,s)}rayCast(e,r){const i=[];return this.boundaries.forEach(s=>{i.push(...Fs(e,r,s.polygon))}),this.doors.forEach(s=>{i.push(...Fs(e,r,s.polygon))}),this.walls.forEach(s=>{i.push(...Fs(e,r,s.polygon))}),i}}class yl extends bk{constructor(r,i,s){super(s);B(this,"world");B(this,"index");this.index=i,this.world=r,this.world.levels[this.index]=this}}const wk=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   width="10"
   height="10"
   viewBox="0 0 10 10"
   version="1.1"
   id="svg1"
   inkscape:version="1.4 (86a8ad7, 2024-10-11)"
   sodipodi:docname="level0.svg"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview1"
     pagecolor="#3a3a3a"
     bordercolor="#999999"
     borderopacity="1"
     inkscape:showpageshadow="false"
     inkscape:pageopacity="0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#3a3a3a"
     inkscape:document-units="px"
     inkscape:zoom="2"
     inkscape:cx="-2.75"
     inkscape:cy="142.75"
     inkscape:window-width="1920"
     inkscape:window-height="1009"
     inkscape:window-x="1912"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:current-layer="doorLayer"
     showborder="false"
     showgrid="true"
     showguides="true">
    <inkscape:grid
       id="grid1"
       units="px"
       originx="0"
       originy="0"
       spacingx="5"
       spacingy="5"
       empcolor="#0099e5"
       empopacity="0.10196078"
       color="#0099e5"
       opacity="0.10196078"
       empspacing="1"
       enabled="true"
       visible="true" />
  </sodipodi:namedview>
  <defs
     id="defs1">
    <marker
       style="overflow:visible"
       id="ArrowWide-3"
       refX="0"
       refY="0"
       orient="auto-start-reverse"
       inkscape:stockid="Wide arrow"
       markerWidth="1"
       markerHeight="1"
       viewBox="0 0 1 1"
       inkscape:isstock="true"
       inkscape:collect="always"
       preserveAspectRatio="xMidYMid">
      <path
         style="fill:none;stroke:context-stroke;stroke-width:1;stroke-linecap:butt"
         d="M 3,-3 0,0 3,3"
         transform="rotate(180,0.125,0)"
         sodipodi:nodetypes="ccc"
         id="path1-6" />
    </marker>
    <marker
       style="overflow:visible"
       id="ArrowWide-4-1-3"
       refX="0"
       refY="0"
       orient="auto-start-reverse"
       inkscape:stockid="Wide arrow"
       markerWidth="1"
       markerHeight="1"
       viewBox="0 0 1 1"
       inkscape:isstock="true"
       inkscape:collect="always"
       preserveAspectRatio="xMidYMid">
      <path
         style="fill:none;stroke:context-stroke;stroke-width:1;stroke-linecap:butt"
         d="M 3,-3 0,0 3,3"
         transform="rotate(180,0.125,0)"
         sodipodi:nodetypes="ccc"
         id="path1-8-5-1" />
    </marker>
    <marker
       style="overflow:visible"
       id="ArrowWide-3-76-7-6"
       refX="0"
       refY="0"
       orient="auto-start-reverse"
       inkscape:stockid="Wide arrow"
       markerWidth="1"
       markerHeight="1"
       viewBox="0 0 1 1"
       inkscape:isstock="true"
       inkscape:collect="always"
       preserveAspectRatio="xMidYMid">
      <path
         style="fill:none;stroke:context-stroke;stroke-width:1;stroke-linecap:butt"
         d="M 3,-3 0,0 3,3"
         transform="rotate(180,0.125,0)"
         sodipodi:nodetypes="ccc"
         id="path1-6-36-2-1" />
    </marker>
  </defs>
  <g
     inkscape:groupmode="layer"
     id="boundaryLayer"
     inkscape:highlight-color="#3e67e3">
    <path
       id="boundary-1"
       style="fill:#000000;fill-opacity:1;stroke-width:5.969;stroke-linejoin:round"
       d="m 110.23483,37.532868 -17.824785,86.828272 -75.912609,2.73099 -33.82552,-58.579502 29.3533,-83.57111 66.664404,-0.531041 z"
       sodipodi:nodetypes="ccccccc"
       role="boundary" />
    <path
       id="boundary-2"
       style="fill:#000000;fill-opacity:1;stroke-width:5.969;stroke-linejoin:round"
       d="m 13.373426,136.85207 81.682218,-2.48418 -9.374404,55.31656 -50.37681,11.73169 -68.460663,-52.90062 -71.011037,26.02812 -45.53309,47.47044 -83.86259,-26.29189 44.42178,-106.73744 68.66075,19.71353 45.61654,-16.71048 -5.60416,-58.53215 67.0118,-7.01748 -14.489182,45.908306 z"
       sodipodi:nodetypes="ccccccccccccccc"
       role="boundary" />
    <path
       id="boundary-3"
       style="fill:#000000;fill-opacity:1;stroke-width:5.969;stroke-linejoin:round"
       d="m -11.592688,16.719537 -76.537987,8.316285 0.949869,59.306893 -46.711774,9.513439 -47.8202,-23.644689 30.3783,-103.45251 88.415439,-25.905102 50.019259,5.319095 18.44691,32.732643 z"
       sodipodi:nodetypes="cccccccccc"
       role="boundary" />
    <path
       id="boundary-4"
       style="fill:#000000;fill-opacity:1;stroke-width:5.969;stroke-linejoin:round"
       d="m -238.35766,208.73922 92.45221,28.95327 48.618669,-47.87187 61.38424,-26.30723 73.386064,56.95677 -85.652162,15.57026 -75.305871,46.80708 -122.04631,-22.61057 z"
       sodipodi:nodetypes="ccccccccc"
       role="boundary" />
  </g>
  <g
     inkscape:groupmode="layer"
     id="wallLayer"
     inkscape:highlight-color="#8580a1" />
  <g
     inkscape:groupmode="layer"
     id="starLayer"
     inkscape:highlight-color="#ffff00">
    <path
       id="star-1"
       style="fill:#ffff00;stroke-width:0.908675;stroke-linejoin:round"
       d="m 38.00125,190.06412 -3.113,-2.05032 -3.06735,2.12446 0.89946,-3.73502 -2.8766,-2.39948 3.66888,-0.25809 1.28952,-3.60741 1.36803,3.57553 3.67357,0.17001 -2.82339,2.46787 z"
       role="star"
       sodipodi:nodetypes="ccccccccccc" />
  </g>
  <g
     inkscape:groupmode="layer"
     id="transportLayer"
     inkscape:highlight-color="#ffff00">
    <circle
       style="fill:#b2b2b2;fill-opacity:0.04212461;stroke:#ffffff;stroke-width:1;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
       id="transporter-1"
       cx="14.524902"
       cy="64.976395"
       role="transporter"
       r="20" />
    <circle
       style="fill:#b2b2b2;fill-opacity:0.04212461;stroke:#ffffff;stroke-width:1;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
       id="transporter-2"
       cx="60.077621"
       cy="162.64287"
       role="transporter"
       r="20" />
    <circle
       style="fill:#ffea12;fill-opacity:0.07106599;stroke:#d1df00;stroke-width:1;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
       id="exit-1"
       cx="-174.5"
       cy="158.5"
       role="exit"
       r="20"
       targetLevel="1"
       targetEntrance="0" />
  </g>
  <g
     inkscape:groupmode="layer"
     id="doorLayer"
     inkscape:highlight-color="#aa6d00">
    <path
       id="door-1"
       style="fill:#322000;fill-opacity:1;stroke-width:0.1;stroke-linejoin:round"
       d="m -117.90201,105.50297 42.175272,-13.2502 24.5512,64.12756 -37.590132,15.86203 z"
       sodipodi:nodetypes="ccccc"
       role="door" />
  </g>
  <g
     inkscape:groupmode="layer"
     id="rockLayer"
     inkscape:highlight-color="#8a8a8a">
    <circle
       style="fill:#808080;fill-opacity:1;stroke-width:3.77953;stroke-linejoin:round;stroke-dasharray:7.55906, 7.55906"
       id="rock-1"
       cx="-49.063942"
       cy="72.058876"
       role="rock"
       r="2" />
    <circle
       style="fill:#808080;fill-opacity:1;stroke-width:4.53255;stroke-linejoin:round;stroke-dasharray:9.06513, 9.06513"
       id="rock-2"
       cx="52.028427"
       cy="39.039574"
       role="rock"
       r="3.5977182" />
    <circle
       style="fill:#808080;fill-opacity:1;stroke-width:4.53255;stroke-linejoin:round;stroke-dasharray:9.06513, 9.06513"
       id="rock-3"
       cx="-108.55118"
       cy="3.0140381"
       role="rock"
       r="3.5977182" />
    <circle
       style="fill:#808080;fill-opacity:1;stroke-width:3.77953;stroke-linejoin:round;stroke-dasharray:7.55906, 7.55906"
       id="rock1-6-11-0-6"
       cx="-59.631744"
       cy="184.08669"
       role="rock"
       r="3" />
  </g>
  <g
     inkscape:groupmode="layer"
     id="bladeLayer"
     inkscape:highlight-color="#29ffff">
    <circle
       style="fill:#00d4ff;fill-opacity:1;stroke-width:3.77953;stroke-linejoin:round;stroke-dasharray:7.55906, 7.55906"
       id="playerBlade-1"
       cx="-191.54993"
       cy="243.72867"
       role="blade"
       r="10"
       align="0" />
    <circle
       style="fill:#00ffaa;fill-opacity:1;stroke-width:3.77953;stroke-linejoin:round;stroke-dasharray:7.55906, 7.55906"
       id="agentBlade-1"
       cx="-13"
       cy="209"
       role="blade"
       r="10"
       align="1" />
  </g>
  <g
     inkscape:groupmode="layer"
     id="agentLayer">
    <circle
       style="fill:#cc0000;fill-opacity:1;stroke-width:3.77953;stroke-linejoin:round;stroke-dasharray:7.55906, 7.55906"
       id="monster-1"
       cx="-72.966705"
       cy="-17.939697"
       role="monster"
       r="10" />
    <circle
       style="fill:#0053ff;fill-opacity:1;stroke-width:3.77953;stroke-linejoin:round;stroke-dasharray:7.55906, 7.55906"
       id="player"
       cx="59.315224"
       cy="64.649269"
       role="player"
       r="5" />
    <circle
       style="fill:#009900;fill-opacity:1;stroke-width:3.77953;stroke-linejoin:round;stroke-dasharray:7.55906, 7.55906"
       id="rover-1"
       cx="-27.584564"
       cy="127.91275"
       role="rover"
       r="5" />
  </g>
  <g
     inkscape:groupmode="layer"
     id="arrowLayer"
     inkscape:highlight-color="#ffffff">
    <path
       style="fill:none;fill-opacity:0.119048;stroke:#ffffff;stroke-width:1;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#ArrowWide-3)"
       d="M 15.70213,65.29245 -32.866624,97.846276"
       id="arrow-1"
       sodipodi:nodetypes="cc"
       role="arrow" />
    <path
       style="fill:none;fill-opacity:0.119048;stroke:#ffffff;stroke-width:1;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#ArrowWide-4-1-3)"
       d="m -95.42263,106.2761 26.151832,52.49717"
       id="arrow-2"
       sodipodi:nodetypes="cc"
       role="arrow" />
    <path
       style="fill:none;fill-opacity:0.119048;stroke:#ffffff;stroke-width:1;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#ArrowWide-3-76-7-6)"
       d="m 60.44545,163.88177 0.466143,-55.19186"
       id="arrow-3"
       sodipodi:nodetypes="cc"
       role="arrow" />
  </g>
  <g
     inkscape:groupmode="layer"
     id="entranceLayer"
     inkscape:highlight-color="#227eff"
     style="fill:none">
    <circle
       style="fill:none;fill-opacity:0.0421246;stroke:#003b7a;stroke-width:3;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
       id="entrance-0"
       cx="59.016823"
       cy="64.097"
       r="8.9375"
       role="entrance" />
  </g>
</svg>
`,Xs=[];Xs.push([0,0]);pt(8).forEach(t=>{const e=2*Math.PI*t/8,r=ml(e);Xs.push(r)});function cn(t){const e=Xs.map(r=>Vt(t,r));return Xs[s3(e)]}class xk extends yl{constructor(r){super(r,0,wk);B(this,"activeAgents");this.activeAgents=[...this.rovers,...this.monsters],this.activeAgents.forEach(i=>{i.targetVelocity=Re(30,ur())})}update(r){super.update(r),this.activeAgents.forEach(i=>{this.think(i,r),this.move(i)})}think(r,i){if(r.destroyed)return;this.avoidWalls(r),2e3*Math.random()<i.deltaMS&&this.updateTargetPoint(r),At(r.position,r.targetPoint)<2*r.radius&&this.updateTargetPoint(r),r.targetVelocity=Re(20,gt(r.position,r.targetPoint))}updateTargetPoint(r){const i=ur(),s=this.rayCast(r.position,i),n=Math.min(1e3,...s)*(1-Math.random()**3);r.targetPoint=Ie(1,r.position,n,i)}avoidWalls(r){if(r.collisions.length>0){const i=r.collisions.map(c=>c.normal),s=bt(i.map(c=>c[0])),n=bt(i.map(c=>c[1])),a=Zt([s,n]),o=ur(),l=Vt(o,a)>0?o:Re(-1,o),u=this.rayCast(r.position,l),d=Math.random()*Math.min(1e3,...u);r.targetPoint=Ie(1,r.position,d,l)}}move(r){const i=gt(r.velocity,r.targetVelocity);r.action=cn(i)}}class vk{constructor(){B(this,"keyboard",new Map);B(this,"mousePosition",[0,0]);B(this,"mouseButtons",new Map);B(this,"maxZoom",20);B(this,"minZoom",-40);B(this,"zoom",0);window.addEventListener("keydown",e=>this.onkeydown(e)),window.addEventListener("keyup",e=>this.onkeyup(e)),window.addEventListener("wheel",e=>this.onwheel(e)),window.addEventListener("mousemove",e=>this.onmousemove(e)),window.addEventListener("mousedown",e=>this.onmousedown(e)),window.addEventListener("mouseup",e=>this.onmouseup(e)),window.addEventListener("touchmove",e=>this.ontouchmove(e)),window.addEventListener("touchstart",e=>this.ontouchstart(e)),window.addEventListener("touchend",e=>this.ontouchend(e)),window.oncontextmenu=()=>{}}onkeydown(e){this.keyboard.set(e.code,!0)}onkeyup(e){this.keyboard.set(e.code,!1)}isKeyDown(e){return this.keyboard.get(e)??!1}onwheel(e){const r=-.005*e.deltaY;this.zoom=fl(this.minZoom,this.maxZoom,this.zoom+r)}onmousemove(e){this.mousePosition[0]=e.clientX-.5*window.innerWidth,this.mousePosition[1]=e.clientY-.5*window.innerHeight}onmousedown(e){this.mouseButtons.set(e.button,!0),this.mousePosition[0]=e.clientX-.5*window.innerWidth,this.mousePosition[1]=e.clientY-.5*window.innerHeight}onmouseup(e){this.mouseButtons.set(e.button,!1)}ontouchmove(e){this.mousePosition[0]=e.touches[0].clientX-.5*window.innerWidth,this.mousePosition[1]=e.touches[0].clientY-.5*window.innerHeight}ontouchstart(e){this.mouseButtons.set(0,!0),this.mousePosition[0]=e.touches[0].clientX-.5*window.innerWidth,this.mousePosition[1]=e.touches[0].clientY-.5*window.innerHeight}ontouchend(e){this.mouseButtons.set(0,!1)}isMouseButtonDown(e){return this.mouseButtons.get(e)??!1}}const $k=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   width="10"
   height="10"
   viewBox="0 0 10 10"
   version="1.1"
   id="svg1"
   inkscape:version="1.4 (86a8ad7, 2024-10-11)"
   sodipodi:docname="level1.svg"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview1"
     pagecolor="#3a3a3a"
     bordercolor="#999999"
     borderopacity="1"
     inkscape:showpageshadow="false"
     inkscape:pageopacity="0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#3a3a3a"
     inkscape:document-units="px"
     inkscape:zoom="2.0000001"
     inkscape:cx="-31.749999"
     inkscape:cy="5.2499999"
     inkscape:window-width="1920"
     inkscape:window-height="1009"
     inkscape:window-x="1912"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:current-layer="arrowLayer"
     showborder="false"
     showgrid="true"
     showguides="true">
    <inkscape:grid
       id="grid1"
       units="px"
       originx="0"
       originy="0"
       spacingx="5"
       spacingy="5"
       empcolor="#0099e5"
       empopacity="0.10196078"
       color="#0099e5"
       opacity="0.10196078"
       empspacing="1"
       enabled="true"
       visible="true" />
  </sodipodi:namedview>
  <defs
     id="defs1">
    <marker
       style="overflow:visible"
       id="ArrowWide-3"
       refX="0"
       refY="0"
       orient="auto-start-reverse"
       inkscape:stockid="Wide arrow"
       markerWidth="1"
       markerHeight="1"
       viewBox="0 0 1 1"
       inkscape:isstock="true"
       inkscape:collect="always"
       preserveAspectRatio="xMidYMid">
      <path
         style="fill:none;stroke:context-stroke;stroke-width:1;stroke-linecap:butt"
         d="M 3,-3 0,0 3,3"
         transform="rotate(180,0.125,0)"
         sodipodi:nodetypes="ccc"
         id="path1-6" />
    </marker>
    <marker
       style="overflow:visible"
       id="ArrowWide-4-1-3"
       refX="0"
       refY="0"
       orient="auto-start-reverse"
       inkscape:stockid="Wide arrow"
       markerWidth="1"
       markerHeight="1"
       viewBox="0 0 1 1"
       inkscape:isstock="true"
       inkscape:collect="always"
       preserveAspectRatio="xMidYMid">
      <path
         style="fill:none;stroke:context-stroke;stroke-width:1;stroke-linecap:butt"
         d="M 3,-3 0,0 3,3"
         transform="rotate(180,0.125,0)"
         sodipodi:nodetypes="ccc"
         id="path1-8-5-1" />
    </marker>
    <marker
       style="overflow:visible"
       id="ArrowWide-3-76-7-6"
       refX="0"
       refY="0"
       orient="auto-start-reverse"
       inkscape:stockid="Wide arrow"
       markerWidth="1"
       markerHeight="1"
       viewBox="0 0 1 1"
       inkscape:isstock="true"
       inkscape:collect="always"
       preserveAspectRatio="xMidYMid">
      <path
         style="fill:none;stroke:context-stroke;stroke-width:1;stroke-linecap:butt"
         d="M 3,-3 0,0 3,3"
         transform="rotate(180,0.125,0)"
         sodipodi:nodetypes="ccc"
         id="path1-6-36-2-1" />
    </marker>
    <marker
       style="overflow:visible"
       id="ArrowWide-3-76-7-6-4"
       refX="0"
       refY="0"
       orient="auto-start-reverse"
       inkscape:stockid="Wide arrow"
       markerWidth="1"
       markerHeight="1"
       viewBox="0 0 1 1"
       inkscape:isstock="true"
       inkscape:collect="always"
       preserveAspectRatio="xMidYMid">
      <path
         style="fill:none;stroke:context-stroke;stroke-width:1;stroke-linecap:butt"
         d="M 3,-3 0,0 3,3"
         transform="rotate(180,0.125,0)"
         sodipodi:nodetypes="ccc"
         id="path1-6-36-2-1-8" />
    </marker>
    <marker
       style="overflow:visible"
       id="ArrowWide-3-76-7-6-4-5"
       refX="0"
       refY="0"
       orient="auto-start-reverse"
       inkscape:stockid="Wide arrow"
       markerWidth="1"
       markerHeight="1"
       viewBox="0 0 1 1"
       inkscape:isstock="true"
       inkscape:collect="always"
       preserveAspectRatio="xMidYMid">
      <path
         style="fill:none;stroke:context-stroke;stroke-width:1;stroke-linecap:butt"
         d="M 3,-3 0,0 3,3"
         transform="rotate(180,0.125,0)"
         sodipodi:nodetypes="ccc"
         id="path1-6-36-2-1-8-2" />
    </marker>
    <marker
       style="overflow:visible"
       id="ArrowWide-3-76-7-6-4-5-1"
       refX="0"
       refY="0"
       orient="auto-start-reverse"
       inkscape:stockid="Wide arrow"
       markerWidth="1"
       markerHeight="1"
       viewBox="0 0 1 1"
       inkscape:isstock="true"
       inkscape:collect="always"
       preserveAspectRatio="xMidYMid">
      <path
         style="fill:none;stroke:context-stroke;stroke-width:1;stroke-linecap:butt"
         d="M 3,-3 0,0 3,3"
         transform="rotate(180,0.125,0)"
         sodipodi:nodetypes="ccc"
         id="path1-6-36-2-1-8-2-6" />
    </marker>
    <marker
       style="overflow:visible"
       id="ArrowWide-3-76-7-6-4-5-1-7"
       refX="0"
       refY="0"
       orient="auto-start-reverse"
       inkscape:stockid="Wide arrow"
       markerWidth="1"
       markerHeight="1"
       viewBox="0 0 1 1"
       inkscape:isstock="true"
       inkscape:collect="always"
       preserveAspectRatio="xMidYMid">
      <path
         style="fill:none;stroke:context-stroke;stroke-width:1;stroke-linecap:butt"
         d="M 3,-3 0,0 3,3"
         transform="rotate(180,0.125,0)"
         sodipodi:nodetypes="ccc"
         id="path1-6-36-2-1-8-2-6-9" />
    </marker>
  </defs>
  <g
     inkscape:groupmode="layer"
     id="boundaryLayer"
     inkscape:highlight-color="#3e67e3">
    <path
       id="boundary-1"
       style="fill:#000000;fill-opacity:1;stroke-width:5.969;stroke-linejoin:round"
       d="m 28.73483,211.03287 -38.824785,60.32827 -83.412609,20.23099 -48.325516,-64.0795 42.060407,-44.93507 65.199934,-5.08129 z"
       sodipodi:nodetypes="ccccccc"
       role="boundary" />
    <path
       id="boundary-2"
       style="fill:#000000;fill-opacity:1;stroke-width:5.969;stroke-linejoin:round"
       d="m 27.373426,27.35207 67.682218,107.01582 -9.374404,55.31656 -50.37681,11.73169 -73.960663,-34.40062 -65.511037,7.52812 -45.53309,47.47044 -35.77933,-103.36653 16.84462,-90.473983 12.84704,-127.476333 10.45968,-70.943454 64.123766,2.59884 16.748344,33.08555 4.510818,75.408306 z"
       sodipodi:nodetypes="ccccccccccccccc"
       role="boundary" />
    <path
       id="boundary-3"
       style="fill:#000000;fill-opacity:1;stroke-width:5.969;stroke-linejoin:round"
       d="m -179.47137,43.024623 -19.96944,75.491437 29.23414,82.6414 -109.64428,56.8896 -78.9329,-109.91171 -2.14861,-200.326142 108.21443,-120.657418 86.78881,12.39017 0.76925,90.008292 z"
       sodipodi:nodetypes="cccccccccc"
       role="boundary" />
    <path
       id="boundary-4"
       style="fill:#000000;fill-opacity:1;stroke-width:5.969;stroke-linejoin:round"
       d="m -53.11859,-58.775499 -4.421419,-74.991431 4.070947,-60.59979 L 2.2583188,-239.76583 74.230165,-186.3446 169.59734,14.487642 146.32377,76.005171 78.028016,83.215032 35.884772,21.71359 Z"
       sodipodi:nodetypes="cccccccccc"
       role="boundary" />
  </g>
  <g
     inkscape:groupmode="layer"
     id="wallLayer"
     inkscape:highlight-color="#868a9b" />
  <g
     inkscape:groupmode="layer"
     id="starLayer"
     inkscape:highlight-color="#ffff00">
    <path
       id="star-1"
       style="fill:#ffff00;stroke-width:0.908675;stroke-linejoin:round"
       d="m 58.507347,-65.201428 -3.113,-2.05032 -3.06735,2.12446 0.89946,-3.73502 -2.8766,-2.39948 3.66888,-0.25809 1.28952,-3.60741 1.36803,3.57553 3.67357,0.17001 -2.82339,2.46787 z"
       role="star"
       sodipodi:nodetypes="ccccccccccc" />
  </g>
  <g
     inkscape:groupmode="layer"
     id="transportLayer"
     inkscape:highlight-color="#ffff00">
    <circle
       style="fill:#b2b2b2;fill-opacity:0.0421246;stroke:#ffffff;stroke-width:1;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
       id="transporter-1"
       cx="-85.475098"
       cy="207.97639"
       role="transporter"
       r="20" />
    <circle
       style="fill:#b2b2b2;fill-opacity:0.0421246;stroke:#ffffff;stroke-width:1;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
       id="transporter-2"
       cx="20.479641"
       cy="149.91495"
       role="transporter"
       r="20" />
    <circle
       style="fill:#b2b2b2;fill-opacity:0.0421246;stroke:#ffffff;stroke-width:1;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
       id="transporter-2-2"
       cx="87.792076"
       cy="39.161903"
       role="transporter"
       r="20" />
    <circle
       style="fill:#b2b2b2;fill-opacity:0.0421246;stroke:#ffffff;stroke-width:1;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
       id="transporter-2-2-7"
       cx="-46.69239"
       cy="3.8933983"
       role="transporter"
       r="20" />
    <circle
       style="fill:#b2b2b2;fill-opacity:0.0421246;stroke:#ffffff;stroke-width:1;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
       id="transporter-2-2-7-3"
       cx="-150.59544"
       cy="104.98023"
       role="transporter"
       r="20" />
    <circle
       style="fill:#b2b2b2;fill-opacity:0.0421246;stroke:#ffffff;stroke-width:1;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
       id="transporter-2-2-7-3-8"
       cx="-201.9386"
       cy="0.31623"
       role="transporter"
       r="20" />
    <circle
       style="fill:#ffea12;fill-opacity:0.071066;stroke:#d1df00;stroke-width:1;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
       id="exit-1"
       cx="-105.91064"
       cy="-130.70668"
       role="exit"
       r="20"
       targetLevel="2"
       targetEntrance="0" />
  </g>
  <g
     inkscape:groupmode="layer"
     id="doorLayer"
     inkscape:highlight-color="#aa6d00">
    <path
       id="door-1"
       style="fill:#322000;fill-opacity:1;stroke-width:0.1;stroke-linejoin:round"
       d="m -162.24602,-79.866353 99.620732,2.632722 2.468315,23.880613 -103.736117,24.767844 z"
       sodipodi:nodetypes="ccccc"
       role="door" />
  </g>
  <g
     inkscape:groupmode="layer"
     id="rockLayer"
     inkscape:highlight-color="#8a8a8a">
    <circle
       style="fill:#808080;fill-opacity:1;stroke-width:3.77953;stroke-linejoin:round;stroke-dasharray:7.55906, 7.55906"
       id="rock-1"
       cx="-49.063942"
       cy="72.058876"
       role="rock"
       r="2" />
    <circle
       style="fill:#808080;fill-opacity:1;stroke-width:4.53255;stroke-linejoin:round;stroke-dasharray:9.06513, 9.06513"
       id="rock-2"
       cx="-254.85593"
       cy="57.424351"
       role="rock"
       r="3.5977182" />
    <circle
       style="fill:#808080;fill-opacity:1;stroke-width:4.53255;stroke-linejoin:round;stroke-dasharray:9.06513, 9.06513"
       id="rock-3"
       cx="-117.05118"
       cy="84.014038"
       role="rock"
       r="3.5977182" />
    <circle
       style="fill:#808080;fill-opacity:1;stroke-width:3.77953;stroke-linejoin:round;stroke-dasharray:7.55906, 7.55906"
       id="rock1-6-11-0-6"
       cx="-63.131744"
       cy="45.586685"
       role="rock"
       r="3" />
  </g>
  <g
     inkscape:groupmode="layer"
     id="bladeLayer"
     inkscape:highlight-color="#29ffff">
    <circle
       style="fill:#00d4ff;fill-opacity:1;stroke-width:3.77953;stroke-linejoin:round;stroke-dasharray:7.55906, 7.55906"
       id="playerBlade-1"
       cx="-266.36826"
       cy="-12.707407"
       role="blade"
       r="10"
       align="0" />
    <circle
       style="fill:#00ffaa;fill-opacity:1;stroke-width:3.77953;stroke-linejoin:round;stroke-dasharray:7.55906, 7.55906"
       id="agentBlade-1"
       cx="-77.82991"
       cy="72.72287"
       role="blade"
       r="10"
       align="1" />
  </g>
  <g
     inkscape:groupmode="layer"
     id="agentLayer">
    <circle
       style="fill:#cc0000;fill-opacity:1;stroke-width:3.77953;stroke-linejoin:round;stroke-dasharray:7.55906, 7.55906"
       id="monster-1"
       cx="-25.283979"
       cy="-167.32552"
       role="monster"
       r="10" />
    <circle
       style="fill:#0053ff;fill-opacity:1;stroke-width:3.77953;stroke-linejoin:round;stroke-dasharray:7.55906, 7.55906"
       id="player"
       cx="-38.265511"
       cy="249.91124"
       role="player"
       r="5" />
    <circle
       style="fill:#009900;fill-opacity:1;stroke-width:3.77953;stroke-linejoin:round;stroke-dasharray:7.55906, 7.55906"
       id="rover-1"
       cx="-82.738892"
       cy="65.687355"
       role="rover"
       r="5" />
  </g>
  <g
     inkscape:groupmode="layer"
     id="arrowLayer"
     inkscape:highlight-color="#ffffff">
    <path
       style="fill:none;fill-opacity:0.119048;stroke:#ffffff;stroke-width:1;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#ArrowWide-3)"
       d="M -83.292819,210.95644 -130.44736,143.80821"
       id="arrow-1"
       sodipodi:nodetypes="cc"
       role="arrow" />
    <path
       style="fill:none;fill-opacity:0.119048;stroke:#ffffff;stroke-width:1;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#ArrowWide-4-1-3)"
       d="m -80.720145,-56.970112 -72.136005,-6.192693"
       id="arrow-2"
       sodipodi:nodetypes="cc"
       role="arrow" />
    <path
       style="fill:none;fill-opacity:0.119048;stroke:#ffffff;stroke-width:1;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#ArrowWide-3-76-7-6)"
       d="m 17.311936,154.68938 -36.303409,54.40969"
       id="arrow-3"
       sodipodi:nodetypes="cc"
       role="arrow" />
    <path
       style="fill:none;fill-opacity:0.119048;stroke:#ffffff;stroke-width:1;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#ArrowWide-3-76-7-6-4)"
       d="M 84.624376,43.229228 48.320967,97.638918"
       id="arrow-3-4"
       sodipodi:nodetypes="cc"
       role="arrow" />
    <path
       style="fill:none;fill-opacity:0.119048;stroke:#ffffff;stroke-width:1;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#ArrowWide-3-76-7-6-4-5)"
       d="M -42.994423,5.3069475 -5.7587266,-44.22806"
       id="arrow-3-4-6"
       sodipodi:nodetypes="cc"
       role="arrow" />
    <path
       style="fill:none;fill-opacity:0.119048;stroke:#ffffff;stroke-width:1;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#ArrowWide-3-76-7-6-4-5-1)"
       d="M -159.3232,103.93105 -209.06163,83.387425"
       id="arrow-3-4-6-5"
       sodipodi:nodetypes="cc"
       role="arrow" />
    <path
       style="fill:none;fill-opacity:0.119048;stroke:#ffffff;stroke-width:1;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#ArrowWide-3-76-7-6-4-5-1-7)"
       d="m -202.21757,4.3191867 54.20626,2.0837905"
       id="arrow-3-4-6-5-4"
       sodipodi:nodetypes="cc"
       role="arrow" />
  </g>
  <g
     inkscape:groupmode="layer"
     id="entranceLayer"
     inkscape:highlight-color="#227eff"
     style="fill:none">
    <circle
       style="fill:none;fill-opacity:0.0421246;stroke:#003b7a;stroke-width:3;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
       id="entrance-0"
       cx="-37.856808"
       cy="249.35898"
       r="8.9375"
       role="entrance" />
  </g>
</svg>
`;class kk extends yl{constructor(r){super(r,1,$k);B(this,"activeAgents");this.activeAgents=[...this.rovers,...this.monsters],this.activeAgents.forEach(i=>{i.targetVelocity=Re(30,ur())}),this.transporters.forEach(i=>{i.interval*=1.1})}update(r){super.update(r),this.activeAgents.forEach(i=>{this.think(i,r),this.move(i)})}think(r,i){if(r.destroyed)return;this.avoidWalls(r),2e3*Math.random()<i.deltaMS&&this.updateTargetPoint(r),At(r.position,r.targetPoint)<2*r.radius&&this.updateTargetPoint(r),r.targetVelocity=Re(20,gt(r.position,r.targetPoint))}updateTargetPoint(r){const i=ur(),s=this.rayCast(r.position,i),n=Math.min(1e3,...s)*(1-Math.random()**3);r.targetPoint=Ie(1,r.position,n,i)}avoidWalls(r){if(r.collisions.length>0){const i=r.collisions.map(c=>c.normal),s=bt(i.map(c=>c[0])),n=bt(i.map(c=>c[1])),a=Zt([s,n]),o=ur(),l=Vt(o,a)>0?o:Re(-1,o),u=this.rayCast(r.position,l),d=Math.random()*Math.min(1e3,...u);r.targetPoint=Ie(1,r.position,d,l)}}move(r){const i=gt(r.velocity,r.targetVelocity);r.action=cn(i)}}const Sk=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   width="10"
   height="10"
   viewBox="0 0 10 10"
   version="1.1"
   id="svg1"
   inkscape:version="1.4 (86a8ad7, 2024-10-11)"
   sodipodi:docname="level2.svg"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview1"
     pagecolor="#3a3a3a"
     bordercolor="#999999"
     borderopacity="1"
     inkscape:showpageshadow="false"
     inkscape:pageopacity="0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#3a3a3a"
     inkscape:document-units="px"
     inkscape:zoom="1.4142136"
     inkscape:cx="244.65894"
     inkscape:cy="-619.77908"
     inkscape:window-width="1920"
     inkscape:window-height="1009"
     inkscape:window-x="1912"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:current-layer="boundaryLayer"
     showborder="false"
     showgrid="true"
     showguides="true">
    <inkscape:grid
       id="grid1"
       units="px"
       originx="0"
       originy="0"
       spacingx="5"
       spacingy="5"
       empcolor="#0099e5"
       empopacity="0.10196078"
       color="#0099e5"
       opacity="0.10196078"
       empspacing="1"
       enabled="true"
       visible="true" />
  </sodipodi:namedview>
  <defs
     id="defs1">
    <marker
       style="overflow:visible"
       id="ArrowWide-3-76-7-6-4"
       refX="0"
       refY="0"
       orient="auto-start-reverse"
       inkscape:stockid="Wide arrow"
       markerWidth="1"
       markerHeight="1"
       viewBox="0 0 1 1"
       inkscape:isstock="true"
       inkscape:collect="always"
       preserveAspectRatio="xMidYMid">
      <path
         style="fill:none;stroke:context-stroke;stroke-width:1;stroke-linecap:butt"
         d="M 3,-3 0,0 3,3"
         transform="rotate(180,0.125,0)"
         sodipodi:nodetypes="ccc"
         id="path1-6-36-2-1-8" />
    </marker>
    <marker
       style="overflow:visible"
       id="ArrowWide-3-76-7-6-4-5"
       refX="0"
       refY="0"
       orient="auto-start-reverse"
       inkscape:stockid="Wide arrow"
       markerWidth="1"
       markerHeight="1"
       viewBox="0 0 1 1"
       inkscape:isstock="true"
       inkscape:collect="always"
       preserveAspectRatio="xMidYMid">
      <path
         style="fill:none;stroke:context-stroke;stroke-width:1;stroke-linecap:butt"
         d="M 3,-3 0,0 3,3"
         transform="rotate(180,0.125,0)"
         sodipodi:nodetypes="ccc"
         id="path1-6-36-2-1-8-2" />
    </marker>
    <marker
       style="overflow:visible"
       id="ArrowWide-4-1-3-4"
       refX="0"
       refY="0"
       orient="auto-start-reverse"
       inkscape:stockid="Wide arrow"
       markerWidth="1"
       markerHeight="1"
       viewBox="0 0 1 1"
       inkscape:isstock="true"
       inkscape:collect="always"
       preserveAspectRatio="xMidYMid">
      <path
         style="fill:none;stroke:context-stroke;stroke-width:1;stroke-linecap:butt"
         d="M 3,-3 0,0 3,3"
         transform="rotate(180,0.125,0)"
         sodipodi:nodetypes="ccc"
         id="path1-8-5-1-2" />
    </marker>
    <marker
       style="overflow:visible"
       id="ArrowWide-3-76-7-6-2"
       refX="0"
       refY="0"
       orient="auto-start-reverse"
       inkscape:stockid="Wide arrow"
       markerWidth="1"
       markerHeight="1"
       viewBox="0 0 1 1"
       inkscape:isstock="true"
       inkscape:collect="always"
       preserveAspectRatio="xMidYMid">
      <path
         style="fill:none;stroke:context-stroke;stroke-width:1;stroke-linecap:butt"
         d="M 3,-3 0,0 3,3"
         transform="rotate(180,0.125,0)"
         sodipodi:nodetypes="ccc"
         id="path1-6-36-2-1-7" />
    </marker>
    <marker
       style="overflow:visible"
       id="ArrowWide-3-76-7-6-4-5-1-7-1"
       refX="0"
       refY="0"
       orient="auto-start-reverse"
       inkscape:stockid="Wide arrow"
       markerWidth="1"
       markerHeight="1"
       viewBox="0 0 1 1"
       inkscape:isstock="true"
       inkscape:collect="always"
       preserveAspectRatio="xMidYMid">
      <path
         style="fill:none;stroke:context-stroke;stroke-width:1;stroke-linecap:butt"
         d="M 3,-3 0,0 3,3"
         transform="rotate(180,0.125,0)"
         sodipodi:nodetypes="ccc"
         id="path1-6-36-2-1-8-2-6-9-1" />
    </marker>
    <marker
       style="overflow:visible"
       id="ArrowWide-3-76-7-6-2-7-2"
       refX="0"
       refY="0"
       orient="auto-start-reverse"
       inkscape:stockid="Wide arrow"
       markerWidth="1"
       markerHeight="1"
       viewBox="0 0 1 1"
       inkscape:isstock="true"
       inkscape:collect="always"
       preserveAspectRatio="xMidYMid">
      <path
         style="fill:none;stroke:context-stroke;stroke-width:1;stroke-linecap:butt"
         d="M 3,-3 0,0 3,3"
         transform="rotate(180,0.125,0)"
         sodipodi:nodetypes="ccc"
         id="path1-6-36-2-1-7-7-3" />
    </marker>
    <marker
       style="overflow:visible"
       id="ArrowWide-3-76-7-6-4-5-1-7-1-7"
       refX="0"
       refY="0"
       orient="auto-start-reverse"
       inkscape:stockid="Wide arrow"
       markerWidth="1"
       markerHeight="1"
       viewBox="0 0 1 1"
       inkscape:isstock="true"
       inkscape:collect="always"
       preserveAspectRatio="xMidYMid">
      <path
         style="fill:none;stroke:context-stroke;stroke-width:1;stroke-linecap:butt"
         d="M 3,-3 0,0 3,3"
         transform="rotate(180,0.125,0)"
         sodipodi:nodetypes="ccc"
         id="path1-6-36-2-1-8-2-6-9-1-9" />
    </marker>
    <marker
       style="overflow:visible"
       id="ArrowWide-3-76-7-6-4-5-9"
       refX="0"
       refY="0"
       orient="auto-start-reverse"
       inkscape:stockid="Wide arrow"
       markerWidth="1"
       markerHeight="1"
       viewBox="0 0 1 1"
       inkscape:isstock="true"
       inkscape:collect="always"
       preserveAspectRatio="xMidYMid">
      <path
         style="fill:none;stroke:context-stroke;stroke-width:1;stroke-linecap:butt"
         d="M 3,-3 0,0 3,3"
         transform="rotate(180,0.125,0)"
         sodipodi:nodetypes="ccc"
         id="path1-6-36-2-1-8-2-8" />
    </marker>
    <marker
       style="overflow:visible"
       id="ArrowWide-3-76-7-6-4-5-8"
       refX="0"
       refY="0"
       orient="auto-start-reverse"
       inkscape:stockid="Wide arrow"
       markerWidth="1"
       markerHeight="1"
       viewBox="0 0 1 1"
       inkscape:isstock="true"
       inkscape:collect="always"
       preserveAspectRatio="xMidYMid">
      <path
         style="fill:none;stroke:context-stroke;stroke-width:1;stroke-linecap:butt"
         d="M 3,-3 0,0 3,3"
         transform="rotate(180,0.125,0)"
         sodipodi:nodetypes="ccc"
         id="path1-6-36-2-1-8-2-6" />
    </marker>
  </defs>
  <g
     inkscape:groupmode="layer"
     id="boundaryLayer"
     inkscape:highlight-color="#3e67e3">
    <path
       id="boundary-1"
       style="fill:#000000;fill-opacity:1;stroke-width:5.969;stroke-linejoin:round"
       d="m 267.13387,-258.87079 -109.99832,68.85216 -52.89049,-35.72418 -23.700514,-132.6163 38.351564,-87.17102 49.66579,-1.48406 -4.93265,85.29993 z"
       sodipodi:nodetypes="cccccccc"
       role="boundary" />
    <path
       id="boundary-2"
       style="fill:#000000;fill-opacity:1;stroke-width:5.969;stroke-linejoin:round"
       d="m 123.26726,-453.71341 -47.433655,-31.62756 -7.337934,-81.53692 7.816083,-55.25722 107.420976,-94.18736 -22.43118,-17.5717 -162.24488379,152.32046 -61.60068821,0.26137 7.97083,71.58433 20.67003,162.68655 -57.66197,-8.08714 -69.637928,-46.53391 -70.11828,-46.85489 -83.26872,-54.59731 32.62324,-67.5528 89.74286,26.71216 80.64109,29.26357 0.86277,-66.20316 -5.01744,-33.72545 104.916318,-78.31065 215.205842,-118.30792 43.83263,59.15587 -4.54294,56.00241 -85.17744,95.67055 287.76848,-4.79199 115.9728,167.50026 -16.736,163.34694 0.63135,52.39416 -93.92154,29.65805 -174.55977,-70.88079 -103.96159,-98.49486 7.85742,-80.68079 -17.51992,-16.09607 z"
       sodipodi:nodetypes="cccccccccccccccccccccccccccccccccc"
       role="boundary" />
    <path
       id="boundary-4"
       style="fill:#000000;fill-opacity:1;stroke-width:5.969;stroke-linejoin:round"
       d="M 56.843716,-113.50778 14.5863,-192.93741 0.31163608,-324.17107 76.563838,-353.39213 l 20.032573,134.42529 53.009909,45.20803 135.40806,-78.46779 163.35628,71.89822 -33.97017,40.40284 -79.71381,9.88037 -90.82005,33.641548 -124.26115,24.997339 -33.66941,-38.926807 z"
       sodipodi:nodetypes="cccccccccccccc"
       role="boundary" />
    <path
       id="boundary-1-3"
       style="fill:#000000;fill-opacity:1;stroke-width:5.969;stroke-linejoin:round"
       d="m 162.60657,-864.14043 38.28089,47.02373 -206.9686898,111.75353 -113.8376002,82.60404 -24.16672,-73.937 128.539409,-108.83079 z"
       sodipodi:nodetypes="ccccccc"
       role="boundary" />
    <circle
       style="fill:#808080;fill-opacity:1;stroke-width:4.53255;stroke-linejoin:round;stroke-dasharray:9.06513, 9.06513"
       id="rock-2-1-9-3-5-6"
       cx="24"
       cy="-749"
       role="rock"
       r="8" />
    <circle
       style="fill:#808080;fill-opacity:1;stroke-width:4.53255;stroke-linejoin:round;stroke-dasharray:9.06513, 9.06513"
       id="rock-2-1-9-3-5-9"
       cx="59"
       cy="-797"
       role="rock"
       r="8" />
    <circle
       style="fill:#808080;fill-opacity:1;stroke-width:4.53255;stroke-linejoin:round;stroke-dasharray:9.06513, 9.06513"
       id="rock-2-1-9-3-5-8"
       cx="-53.313717"
       cy="-728.70709"
       role="rock"
       r="8" />
  </g>
  <g
     inkscape:groupmode="layer"
     id="wallLayer">
    <path
       id="wall-1"
       style="fill:#3a3a3a;fill-opacity:1;stroke-width:5.969;stroke-linejoin:round"
       d="m 451.33879,-348.05173 -34.17315,-46.4219 -38.9586,-3.88825 2.34335,31.11589 40.71466,59.76751 38.8974,32.54755 37.62843,8.40586 45.52593,-8.59912 -29.85434,25.96812 -67.65012,3.47811 -99.50179,-37.84438 -45.36506,-24.95023 -6.72315,-20.89041 25.501,-24.79929 -11.46082,-22.54017 -40.31551,-13.23584 -35.55336,-31.1594 13.12683,-65.04929 36.85609,-23.16229 39.04447,-4.86814 46.00866,-2.44876 68.90513,31.26845 44.85595,30.88418 28.52288,34.70045 4.07048,42.9043 -7.25258,32.19155 -27.10359,9.72601 z"
       role="wall"
       sodipodi:nodetypes="cccccccccccccccccccccccccccc" />
  </g>
  <g
     inkscape:groupmode="layer"
     id="starLayer"
     inkscape:highlight-color="#ffff00">
    <path
       id="star-1-5"
       style="fill:#ffff00;stroke-width:0.908675;stroke-linejoin:round"
       d="m -60.842512,-375.07413 -3.113,-2.05032 -3.06735,2.12446 0.89946,-3.73502 -2.8766,-2.39948 3.66888,-0.25809 1.28952,-3.60741 1.36802,3.57553 3.67358,0.17001 -2.8234,2.46787 z"
       role="star"
       sodipodi:nodetypes="ccccccccccc" />
    <path
       id="star-1-8"
       style="fill:#ffff00;stroke-width:0.908675;stroke-linejoin:round"
       d="m 134.37425,-392.41401 -3.113,-2.05032 -3.06735,2.12446 0.89946,-3.73502 -2.8766,-2.39948 3.66888,-0.25809 1.28952,-3.60741 1.36803,3.57553 3.67357,0.17001 -2.82339,2.46787 z"
       role="star"
       sodipodi:nodetypes="ccccccccccc" />
    <path
       id="star-1-88"
       style="fill:#ffff00;stroke-width:0.908675;stroke-linejoin:round"
       d="m 535.79276,-281.74824 -3.11299,-2.05032 -3.06734,2.12446 0.89945,-3.73502 -2.87659,-2.39948 3.66888,-0.25809 1.28951,-3.60741 1.36802,3.57553 3.67358,0.17001 -2.82339,2.46787 z"
       role="star"
       sodipodi:nodetypes="ccccccccccc" />
    <path
       id="star-1-5-1"
       style="fill:#ffff00;stroke-width:0.908675;stroke-linejoin:round"
       d="m 106.15749,-808.07414 -3.113,-2.05032 -3.067348,2.12446 0.899458,-3.73502 -2.876598,-2.39948 3.668878,-0.25809 1.28952,-3.60741 1.36802,3.57553 3.67358,0.17001 -2.8234,2.46787 z"
       role="star"
       sodipodi:nodetypes="ccccccccccc" />
  </g>
  <g
     inkscape:groupmode="layer"
     id="transportLayer"
     inkscape:highlight-color="#ffff00">
    <circle
       style="fill:#b2b2b2;fill-opacity:0.0421246;stroke:#ffffff;stroke-width:1;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
       id="transporter-2-2"
       cx="124.74791"
       cy="-259.87595"
       role="transporter"
       r="20" />
    <circle
       style="fill:#b2b2b2;fill-opacity:0.0421246;stroke:#ffffff;stroke-width:1;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
       id="transporter-2-2-7"
       cx="352.26959"
       cy="-187.52565"
       role="transporter"
       r="20" />
    <circle
       style="fill:#b2b2b2;fill-opacity:0.0421246;stroke:#ffffff;stroke-width:1;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
       id="transporter-2-2-7-4"
       cx="177.5"
       cy="-766.5"
       role="transporter"
       r="20" />
    <circle
       style="fill:#b2b2b2;fill-opacity:0.0421246;stroke:#ffffff;stroke-width:1;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
       id="transporter-2-2-7-9"
       cx="-101.5"
       cy="-664.5"
       role="transporter"
       r="20" />
    <circle
       style="fill:#b2b2b2;fill-opacity:0.0421246;stroke:#ffffff;stroke-width:1;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
       id="transporter-2-5"
       cx="52.891537"
       cy="-307.85721"
       role="transporter"
       r="20" />
    <circle
       style="fill:#ffea12;fill-opacity:0.071066;stroke:#d1df00;stroke-width:1;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
       id="exit-1"
       cx="-271.14612"
       cy="-527.13672"
       role="exit"
       r="20"
       targetLevel="2"
       targetEntrance="0" />
  </g>
  <g
     inkscape:groupmode="layer"
     id="doorLayer"
     inkscape:highlight-color="#aa6d00">
    <path
       id="door-1"
       style="fill:#322000;fill-opacity:1;stroke-width:0.1;stroke-linejoin:round"
       d="m 142.29443,-188.177 33.76536,25.36948 -23.08052,14.07768 -0.90179,30.00365 -26.36267,16.70446 -44.328972,-7.54844 42.950072,-34.21758 z"
       sodipodi:nodetypes="cccccccc"
       role="door" />
    <path
       id="door-1-8-5"
       style="fill:#322000;fill-opacity:1;stroke-width:0.1;stroke-linejoin:round"
       d="m 159.36765,-617 9.09714,27.97933 -101.967799,49.00639 -1.41091,-30.30032 z"
       sodipodi:nodetypes="ccccc"
       role="door" />
    <path
       id="door-1-8-5-6"
       style="fill:#322000;fill-opacity:1;stroke-width:0.1;stroke-linejoin:round"
       d="m -220.1557,-557.09158 38.163,10.71157 -57.26069,100.16235 -32.83553,-22.71795 z"
       sodipodi:nodetypes="ccccc"
       role="door" />
    <path
       id="door-1-8-5-8"
       style="fill:#322000;fill-opacity:1;stroke-width:0.1;stroke-linejoin:round"
       d="m -53.718428,-566 3.097141,39.47933 -66.967803,-2.99361 L -122,-568.3146 Z"
       sodipodi:nodetypes="ccccc"
       role="door" />
  </g>
  <g
     inkscape:groupmode="layer"
     id="rockLayer"
     inkscape:highlight-color="#8a8a8a">
    <circle
       style="fill:#808080;fill-opacity:1;stroke-width:4.53255;stroke-linejoin:round;stroke-dasharray:9.06513, 9.06513"
       id="rock-2-1-7"
       cx="23.497213"
       cy="-614.60181"
       role="rock"
       r="3.5977182" />
    <circle
       style="fill:#808080;fill-opacity:1;stroke-width:4.53255;stroke-linejoin:round;stroke-dasharray:9.06513, 9.06513"
       id="rock-2"
       cx="204.47379"
       cy="-484.16934"
       role="rock"
       r="3.5977182" />
    <circle
       style="fill:#808080;fill-opacity:1;stroke-width:4.53255;stroke-linejoin:round;stroke-dasharray:9.06513, 9.06513"
       id="rock-2-1-9-59"
       cx="14.0492"
       cy="-647.44116"
       role="rock"
       r="7" />
    <circle
       style="fill:#808080;fill-opacity:1;stroke-width:4.53255;stroke-linejoin:round;stroke-dasharray:9.06513, 9.06513"
       id="rock-2-1-9-59-9"
       cx="5.8852067"
       cy="-613.36646"
       role="rock"
       r="7" />
    <circle
       style="fill:#808080;fill-opacity:1;stroke-width:3.77953;stroke-linejoin:round;stroke-dasharray:7.55906, 7.55906"
       id="rock1-6-11-0-6"
       cx="50.889832"
       cy="-214.40099"
       role="rock"
       r="3" />
    <circle
       style="fill:#808080;fill-opacity:1;stroke-width:4.53255;stroke-linejoin:round;stroke-dasharray:9.06513, 9.06513"
       id="rock-3-9"
       cx="115.71548"
       cy="-501.13409"
       role="rock"
       r="3.5977182" />
    <circle
       style="fill:#808080;fill-opacity:1;stroke-width:4.53255;stroke-linejoin:round;stroke-dasharray:9.06513, 9.06513"
       id="rock-2-1-9-3"
       cx="-12.43861"
       cy="-656.27209"
       role="rock"
       r="8" />
    <circle
       style="fill:#808080;fill-opacity:1;stroke-width:4.53255;stroke-linejoin:round;stroke-dasharray:9.06513, 9.06513"
       id="rock-2-1-9-3-5"
       cx="1.9999995"
       cy="-685"
       role="rock"
       r="8" />
    <circle
       style="fill:#808080;fill-opacity:1;stroke-width:4.53255;stroke-linejoin:round;stroke-dasharray:9.06513, 9.06513"
       id="rock-2-1-9-3-5-4"
       cx="7"
       cy="-788"
       role="rock"
       r="8" />
    <circle
       style="fill:#808080;fill-opacity:1;stroke-width:4.53255;stroke-linejoin:round;stroke-dasharray:9.06513, 9.06513"
       id="rock-2-1-9-3-0"
       cx="-11.5"
       cy="-633"
       role="rock"
       r="8" />
  </g>
  <g
     inkscape:groupmode="layer"
     id="bladeLayer"
     inkscape:highlight-color="#29ffff">
    <circle
       style="fill:#00d4ff;fill-opacity:1;stroke-width:3.77953;stroke-linejoin:round;stroke-dasharray:7.55906, 7.55906"
       id="playerBlade-1"
       cx="86.028152"
       cy="-126.48979"
       role="blade"
       r="10"
       align="0" />
    <circle
       style="fill:#00d4ff;fill-opacity:1;stroke-width:3.77953;stroke-linejoin:round;stroke-dasharray:7.55906, 7.55906"
       id="playerBlade-2"
       cx="414.95105"
       cy="-361.78931"
       role="blade"
       r="10"
       align="0" />
    <circle
       style="fill:#00ffaa;fill-opacity:1;stroke-width:3.77953;stroke-linejoin:round;stroke-dasharray:7.55906, 7.55906"
       id="roverBlade-1"
       cx="281.45224"
       cy="-194.69052"
       role="blade"
       r="10"
       align="1" />
  </g>
  <g
     inkscape:groupmode="layer"
     id="agentLayer">
    <circle
       style="fill:#0053ff;fill-opacity:1;stroke-width:3.77953;stroke-linejoin:round;stroke-dasharray:7.55906, 7.55906"
       id="player"
       cx="215.02589"
       cy="-271.36752"
       role="player"
       r="5" />
    <circle
       style="fill:#cc0000;fill-opacity:1;stroke-width:3.77953;stroke-linejoin:round;stroke-dasharray:7.55906, 7.55906"
       id="monster-1"
       cx="299.96436"
       cy="-358.26367"
       role="monster"
       r="5" />
    <circle
       style="fill:#cc0000;fill-opacity:1;stroke-width:3.77953;stroke-linejoin:round;stroke-dasharray:7.55906, 7.55906"
       id="monster-2"
       cx="-177.67261"
       cy="-519.22974"
       role="monster"
       r="5" />
    <circle
       style="fill:#009900;fill-opacity:1;stroke-width:3.77953;stroke-linejoin:round;stroke-dasharray:7.55906, 7.55906"
       id="rover-1"
       cx="276.54327"
       cy="-201.726"
       role="rover"
       r="5" />
  </g>
  <g
     inkscape:groupmode="layer"
     id="arrowLayer"
     inkscape:highlight-color="#ffffff">
    <path
       style="fill:none;fill-opacity:0.119048;stroke:#ffffff;stroke-width:1;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#ArrowWide-4-1-3-4)"
       d="m 116.71496,-123.41731 24.22922,-19.96908"
       id="arrow-2-2"
       sodipodi:nodetypes="cc"
       role="arrow" />
    <path
       style="fill:none;fill-opacity:0.119048;stroke:#ffffff;stroke-width:1;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#ArrowWide-3-76-7-6-2)"
       d="m 59.721677,-309.46979 49.416403,-8.55744"
       id="arrow-3-43"
       sodipodi:nodetypes="cc"
       role="arrow" />
    <path
       style="fill:none;fill-opacity:0.119048;stroke:#ffffff;stroke-width:1;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#ArrowWide-3-76-7-6-2-7-2)"
       d="m -247.06986,-473.83844 33.53921,-57.032"
       id="arrow-3-43-3-2"
       sodipodi:nodetypes="cc"
       role="arrow" />
    <path
       style="fill:none;fill-opacity:0.119048;stroke:#ffffff;stroke-width:1;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#ArrowWide-3-76-7-6-4)"
       d="M 123.83021,-259.52308 69.9692,-245.84866"
       id="arrow-3-4"
       sodipodi:nodetypes="cc"
       role="arrow" />
    <path
       style="fill:none;fill-opacity:0.119048;stroke:#ffffff;stroke-width:1;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#ArrowWide-3-76-7-6-4-5)"
       d="m 356.39957,-195.29407 23.87909,-47.13857"
       id="arrow-3-4-6"
       sodipodi:nodetypes="cc"
       role="arrow" />
    <path
       style="fill:none;fill-opacity:0.119048;stroke:#ffffff;stroke-width:1;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#ArrowWide-3-76-7-6-4-5-9)"
       d="M 177.45074,-769.51335 148.65826,-832.1372"
       id="arrow-3-4-6-5"
       sodipodi:nodetypes="cc"
       role="arrow" />
    <path
       style="fill:none;fill-opacity:0.119048;stroke:#ffffff;stroke-width:1;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#ArrowWide-3-76-7-6-4-5-8)"
       d="m -100.13505,-665.48213 12.586203,64.06244"
       id="arrow-3-4-6-2"
       sodipodi:nodetypes="cc"
       role="arrow" />
    <path
       style="fill:none;fill-opacity:0.119048;stroke:#ffffff;stroke-width:1;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#ArrowWide-3-76-7-6-4-5-1-7-1)"
       d="m 126.31902,-583.15579 -36.536379,16.10208"
       id="arrow-3-4-6-5-4-2"
       sodipodi:nodetypes="cc"
       role="arrow" />
    <path
       style="fill:none;fill-opacity:0.119048;stroke:#ffffff;stroke-width:1;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#ArrowWide-3-76-7-6-4-5-1-7-1-7)"
       d="m -112.83561,-545.83336 54.156002,1.19828"
       id="arrow-3-4-6-5-4-2-4"
       sodipodi:nodetypes="cc"
       role="arrow" />
  </g>
  <g
     inkscape:groupmode="layer"
     id="entranceLayer"
     inkscape:highlight-color="#227eff"
     style="fill:none">
    <circle
       style="fill:none;fill-opacity:0.0421246;stroke:#003b7a;stroke-width:3;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
       id="entrance-0"
       cx="215.4346"
       cy="-271.9198"
       r="8.9375"
       role="entrance" />
  </g>
</svg>
`;class Ck extends yl{constructor(r){super(r,2,Sk);B(this,"chasers",[]);B(this,"wanderers",[]);this.chasers.push(la(this.monsters,i=>i.id=="monster-1")),this.chasers.push(la(this.monsters,i=>i.id=="monster-2")),this.wanderers.push(la(this.rovers,i=>i.id=="rover-1")),this.transporters.forEach(i=>{i.interval*=1.2})}update(r){super.update(r),this.chasers.forEach(s=>this.chase(s,this.player,r));const i=[];this.wanderers.forEach(s=>{At(s.position,this.player.position)>100||this.player.blade==null?this.wander(s,r):i.push(s)}),this.world.evadeBladeBrain.act(i,this.player)}chase(r,i,s,n){if(!r.destroyed){if(r.targetVelocity=[0,0],n&&this.wander(r,s),this.segmentCast([r.position,i.position]).length===0)r.id==="monster-1"?r.targetVelocity=Re(50,gt(r.position,i.position)):r.targetVelocity=Ie(1,i.velocity,10,gt(r.position,i.position));else for(const a of i.history)if(this.segmentCast([r.position,a]).length===0){r.targetVelocity=Re(50,gt(r.position,a));break}this.move(r)}}avoidBlades(r){this.blades.forEach(i=>{if(i.align===r.align||At(r.position,i.position)>100||this.segmentCast([r.position,i.position]).length>0)return;const a=a3(),o=gt(i.position,r.position),l=Vt(a,o)>0?a:Re(-1,a),u=Ie(1,r.position,100,l);r.targetPoint=this.segmentCastPoint([r.position,u])})}wander(r,i){if(r.destroyed)return;this.avoidWalls(r),this.avoidBlades(r),5e3*Math.random()<i.deltaMS&&this.updateTargetPoint(r),At(r.position,r.targetPoint)<2*r.radius&&this.updateTargetPoint(r),r.targetVelocity=Re(30,gt(r.position,r.targetPoint)),this.move(r)}updateTargetPoint(r){const i=ur(),s=this.rayCast(r.position,i),n=Math.min(1e3,...s)*(1-Math.random()**1);r.targetPoint=Ie(1,r.position,n,i)}avoidWalls(r){if(r.collisions.length>0){const i=r.collisions.map(c=>c.normal),s=bt(i.map(c=>c[0])),n=bt(i.map(c=>c[1])),a=Zt([s,n]),o=ur(),l=Vt(o,a)>0?o:Re(-1,o),u=this.rayCast(r.position,l),d=Math.random()*Math.min(1e3,...u);r.targetPoint=Ie(1,r.position,d,l)}}move(r){const i=gt(r.velocity,r.targetVelocity);r.action=cn(i)}}/*!
 * ONNX Runtime Web v1.26.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var _l=Object.defineProperty,Tk=Object.getOwnPropertyDescriptor,Ek=Object.getOwnPropertyNames,Ak=Object.prototype.hasOwnProperty,Ik=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,r)=>(typeof require<"u"?require:e)[r]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')}),j=(t,e)=>()=>(t&&(e=t(t=0)),e),ai=(t,e)=>{for(var r in e)_l(t,r,{get:e[r],enumerable:!0})},Mk=(t,e,r,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Ek(e))!Ak.call(t,s)&&s!==r&&_l(t,s,{get:()=>e[s],enumerable:!(i=Tk(e,s))||i.enumerable});return t},Zi=t=>Mk(_l({},"__esModule",{value:!0}),t),_i,nr,Qr,lh,p0,f0=j(()=>{_i=new Map,nr=[],Qr=(t,e,r)=>{if(e&&typeof e.init=="function"&&typeof e.createInferenceSessionHandler=="function"){let i=_i.get(t);if(i===void 0)_i.set(t,{backend:e,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==e)throw new Error(`cannot register backend "${t}" using priority ${r}`)}if(r>=0){let s=nr.indexOf(t);s!==-1&&nr.splice(s,1);for(let n=0;n<nr.length;n++)if(_i.get(nr[n]).priority<=r){nr.splice(n,0,t);return}nr.push(t)}return}throw new TypeError("not a valid backend")},lh=async t=>{let e=_i.get(t);if(!e)return"backend not found.";if(e.initialized)return e.backend;if(e.aborted)return e.error;{let r=!!e.initPromise;try{return r||(e.initPromise=e.backend.init(t)),await e.initPromise,e.initialized=!0,e.backend}catch(i){return r||(e.error=`${i}`,e.aborted=!0),e.error}finally{delete e.initPromise}}},p0=async t=>{let e=t.executionProviders||[],r=e.map(l=>typeof l=="string"?l:l.name),i=r.length===0?nr:r,s,n=[],a=new Set;for(let l of i){let u=await lh(l);typeof u=="string"?n.push({name:l,err:u}):(s||(s=u),s===u&&a.add(l))}if(!s)throw new Error(`no available backend found. ERR: ${n.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:u}of n)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${u}`);let o=e.filter(l=>a.has(typeof l=="string"?l:l.name));return[s,new Proxy(t,{get:(l,u)=>u==="executionProviders"?o:Reflect.get(l,u)})]}}),zk=j(()=>{f0()}),m0,Pk=j(()=>{m0="1.26.0"}),wa,He,g0=j(()=>{Pk(),wa="warning",He={wasm:{},webgl:{},webgpu:{},versions:{common:m0},set logLevel(t){if(t!==void 0){if(typeof t!="string"||["verbose","info","warning","error","fatal"].indexOf(t)===-1)throw new Error(`Unsupported logging level: ${t}`);wa=t}},get logLevel(){return wa}},Object.defineProperty(He,"logLevel",{enumerable:!0})}),Ce,Rk=j(()=>{g0(),Ce=He}),y0,_0,Bk=j(()=>{y0=(t,e)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=t.dims[3],r.height=t.dims[2];let i=r.getContext("2d");if(i!=null){let s,n;(e==null?void 0:e.tensorLayout)!==void 0&&e.tensorLayout==="NHWC"?(s=t.dims[2],n=t.dims[3]):(s=t.dims[3],n=t.dims[2]);let a=(e==null?void 0:e.format)!==void 0?e.format:"RGB",o=e==null?void 0:e.norm,l,u;o===void 0||o.mean===void 0?l=[255,255,255,255]:typeof o.mean=="number"?l=[o.mean,o.mean,o.mean,o.mean]:(l=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(l[3]=o.mean[3])),o===void 0||o.bias===void 0?u=[0,0,0,0]:typeof o.bias=="number"?u=[o.bias,o.bias,o.bias,o.bias]:(u=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(u[3]=o.bias[3]));let d=n*s,c=0,p=d,f=d*2,m=-1;a==="RGBA"?(c=0,p=d,f=d*2,m=d*3):a==="RGB"?(c=0,p=d,f=d*2):a==="RBG"&&(c=0,f=d,p=d*2);for(let y=0;y<n;y++)for(let b=0;b<s;b++){let _=(t.data[c++]-u[0])*l[0],x=(t.data[p++]-u[1])*l[1],$=(t.data[f++]-u[2])*l[2],S=m===-1?255:(t.data[m++]-u[3])*l[3];i.fillStyle="rgba("+_+","+x+","+$+","+S+")",i.fillRect(b,y,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},_0=(t,e)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let s,n,a;(e==null?void 0:e.tensorLayout)!==void 0&&e.tensorLayout==="NHWC"?(s=t.dims[2],n=t.dims[1],a=t.dims[3]):(s=t.dims[3],n=t.dims[2],a=t.dims[1]);let o=e!==void 0&&e.format!==void 0?e.format:"RGB",l=e==null?void 0:e.norm,u,d;l===void 0||l.mean===void 0?u=[255,255,255,255]:typeof l.mean=="number"?u=[l.mean,l.mean,l.mean,l.mean]:(u=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(u[3]=l.mean[3])),l===void 0||l.bias===void 0?d=[0,0,0,0]:typeof l.bias=="number"?d=[l.bias,l.bias,l.bias,l.bias]:(d=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(d[3]=l.bias[3]));let c=n*s;if(e!==void 0&&(e.format!==void 0&&a===4&&e.format!=="RGBA"||a===3&&e.format!=="RGB"&&e.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let p=4,f=0,m=1,y=2,b=3,_=0,x=c,$=c*2,S=-1;o==="RGBA"?(_=0,x=c,$=c*2,S=c*3):o==="RGB"?(_=0,x=c,$=c*2):o==="RBG"&&(_=0,$=c,x=c*2),i=r.createImageData(s,n);for(let E=0;E<n*s;f+=p,m+=p,y+=p,b+=p,E++)i.data[f]=(t.data[_++]-d[0])*u[0],i.data[m]=(t.data[x++]-d[1])*u[1],i.data[y]=(t.data[$++]-d[2])*u[2],i.data[b]=S===-1?255:(t.data[S++]-d[3])*u[3]}else throw new Error("Can not access image data");return i}}),Es,b0,w0,x0,v0,$0,Ok=j(()=>{bl(),Es=(t,e)=>{if(t===void 0)throw new Error("Image buffer must be defined");if(e.height===void 0||e.width===void 0)throw new Error("Image height and width must be defined");if(e.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=e,s=e.norm??{mean:255,bias:0},n,a;typeof s.mean=="number"?n=[s.mean,s.mean,s.mean,s.mean]:n=[s.mean[0],s.mean[1],s.mean[2],s.mean[3]??255],typeof s.bias=="number"?a=[s.bias,s.bias,s.bias,s.bias]:a=[s.bias[0],s.bias[1],s.bias[2],s.bias[3]??0];let o=e.format!==void 0?e.format:"RGBA",l=e.tensorFormat!==void 0&&e.tensorFormat!==void 0?e.tensorFormat:"RGB",u=r*i,d=l==="RGBA"?new Float32Array(u*4):new Float32Array(u*3),c=4,p=0,f=1,m=2,y=3,b=0,_=u,x=u*2,$=-1;o==="RGB"&&(c=3,p=0,f=1,m=2,y=-1),l==="RGBA"?$=u*3:l==="RBG"?(b=0,x=u,_=u*2):l==="BGR"&&(x=0,_=u,b=u*2);for(let S=0;S<u;S++,p+=c,m+=c,f+=c,y+=c)d[b++]=(t[p]+a[0])/n[0],d[_++]=(t[f]+a[1])/n[1],d[x++]=(t[m]+a[2])/n[2],$!==-1&&y!==-1&&(d[$++]=(t[y]+a[3])/n[3]);return l==="RGBA"?new ct("float32",d,[1,4,r,i]):new ct("float32",d,[1,3,r,i])},b0=async(t,e)=>{let r=typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement,i=typeof ImageData<"u"&&t instanceof ImageData,s=typeof ImageBitmap<"u"&&t instanceof ImageBitmap,n=typeof t=="string",a,o=e??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},u=d=>typeof HTMLCanvasElement<"u"&&d instanceof HTMLCanvasElement||d instanceof OffscreenCanvas?d.getContext("2d"):null;if(r){let d=l();d.width=t.width,d.height=t.height;let c=u(d);if(c!=null){let p=t.height,f=t.width;if(e!==void 0&&e.resizedHeight!==void 0&&e.resizedWidth!==void 0&&(p=e.resizedHeight,f=e.resizedWidth),e!==void 0){if(o=e,e.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=p,o.width=f}else o.tensorFormat="RGBA",o.height=p,o.width=f;c.drawImage(t,0,0),a=c.getImageData(0,0,f,p).data}else throw new Error("Can not access image data")}else if(i){let d,c;if(e!==void 0&&e.resizedWidth!==void 0&&e.resizedHeight!==void 0?(d=e.resizedHeight,c=e.resizedWidth):(d=t.height,c=t.width),e!==void 0&&(o=e),o.format="RGBA",o.height=d,o.width=c,e!==void 0){let p=l();p.width=c,p.height=d;let f=u(p);if(f!=null)f.putImageData(t,0,0),a=f.getImageData(0,0,c,d).data;else throw new Error("Can not access image data")}else a=t.data}else if(s){if(e===void 0)throw new Error("Please provide image config with format for Imagebitmap");let d=l();d.width=t.width,d.height=t.height;let c=u(d);if(c!=null){let p=t.height,f=t.width;return c.drawImage(t,0,0,f,p),a=c.getImageData(0,0,f,p).data,o.height=p,o.width=f,Es(a,o)}else throw new Error("Can not access image data")}else{if(n)return new Promise((d,c)=>{let p=l(),f=u(p);if(!t||!f)return c();let m=new Image;m.crossOrigin="Anonymous",m.src=t,m.onload=()=>{p.width=m.width,p.height=m.height,f.drawImage(m,0,0,p.width,p.height);let y=f.getImageData(0,0,p.width,p.height);o.height=p.height,o.width=p.width,d(Es(y.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return Es(a,o);throw new Error("Input data provided is not supported - aborted tensor creation")},w0=(t,e)=>{let{width:r,height:i,download:s,dispose:n}=e,a=[1,i,r,4];return new ct({location:"texture",type:"float32",texture:t,dims:a,download:s,dispose:n})},x0=(t,e)=>{let{dataType:r,dims:i,download:s,dispose:n}=e;return new ct({location:"gpu-buffer",type:r??"float32",gpuBuffer:t,dims:i,download:s,dispose:n})},v0=(t,e)=>{let{dataType:r,dims:i,download:s,dispose:n}=e;return new ct({location:"ml-tensor",type:r??"float32",mlTensor:t,dims:i,download:s,dispose:n})},$0=(t,e,r)=>new ct({location:"cpu-pinned",type:t,data:e,dims:r??[e.length]})}),Er,zi,xa,k0,Dk=j(()=>{Er=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),zi=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),xa=!1,k0=()=>{if(!xa){xa=!0;let t=typeof BigInt64Array<"u"&&BigInt64Array.from,e=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;t&&(Er.set("int64",BigInt64Array),zi.set(BigInt64Array,"int64")),e&&(Er.set("uint64",BigUint64Array),zi.set(BigUint64Array,"uint64")),i?(Er.set("float16",r),zi.set(r,"float16")):Er.set("float16",Uint16Array)}}}),S0,C0,Nk=j(()=>{bl(),S0=t=>{let e=1;for(let r=0;r<t.length;r++){let i=t[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);e*=i}return e},C0=(t,e)=>{switch(t.location){case"cpu":return new ct(t.type,t.data,e);case"cpu-pinned":return new ct({location:"cpu-pinned",data:t.data,type:t.type,dims:e});case"texture":return new ct({location:"texture",texture:t.texture,type:t.type,dims:e});case"gpu-buffer":return new ct({location:"gpu-buffer",gpuBuffer:t.gpuBuffer,type:t.type,dims:e});case"ml-tensor":return new ct({location:"ml-tensor",mlTensor:t.mlTensor,type:t.type,dims:e});default:throw new Error(`tensorReshape: tensor location ${t.location} is not supported`)}}}),ct,bl=j(()=>{Bk(),Ok(),Dk(),Nk(),ct=class{constructor(t,e,r){k0();let i,s;if(typeof t=="object"&&"location"in t)switch(this.dataLocation=t.location,i=t.type,s=t.dims,t.location){case"cpu-pinned":{let a=Er.get(i);if(!a)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(t.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=t.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=t.texture,this.downloader=t.download,this.disposer=t.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=t.gpuBuffer,this.downloader=t.download,this.disposer=t.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=t.mlTensor,this.downloader=t.download,this.disposer=t.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof t=="string")if(i=t,o=r,t==="string"){if(!Array.isArray(e))throw new TypeError("A string tensor's data must be a string array.");a=e}else{let l=Er.get(t);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${t}.`);if(Array.isArray(e)){if(t==="float16"&&l===Uint16Array||t==="uint4"||t==="int4")throw new TypeError(`Creating a ${t} tensor from number array is not supported. Please use ${l.name} as data.`);t==="uint64"||t==="int64"?a=l.from(e,BigInt):a=l.from(e)}else if(e instanceof l)a=e;else if(e instanceof Uint8ClampedArray)if(t==="uint8")a=Uint8Array.from(e);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(t==="float16"&&e instanceof Uint16Array&&l!==Uint16Array)a=new globalThis.Float16Array(e.buffer,e.byteOffset,e.length);else throw new TypeError(`A ${i} tensor's data must be type of ${l}`)}else if(o=e,Array.isArray(t)){if(t.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof t[0];if(l==="string")i="string",a=t;else if(l==="boolean")i="bool",a=Uint8Array.from(t);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(t instanceof Uint8ClampedArray)i="uint8",a=Uint8Array.from(t);else{let l=zi.get(t.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${t.constructor}.`);i=l,a=t}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");s=o,this.cpuData=a,this.dataLocation="cpu"}let n=S0(s);if(this.cpuData&&n!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(n/2)===this.cpuData.length))throw new Error(`Tensor's size(${n}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=s,this.size=n}static async fromImage(t,e){return b0(t,e)}static fromTexture(t,e){return w0(t,e)}static fromGpuBuffer(t,e){return x0(t,e)}static fromMLTensor(t,e){return v0(t,e)}static fromPinnedBuffer(t,e,r){return $0(t,e,r)}toDataURL(t){return y0(this,t)}toImageData(t){return _0(this,t)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(t){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let e=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=e,t&&this.disposer&&(this.disposer(),this.disposer=void 0),e}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(t){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return C0(this,t)}}}),yt,T0=j(()=>{bl(),yt=ct}),Ks,va,Ft,It,Mr,zr,E0=j(()=>{g0(),Ks=(t,e)=>{(typeof He.trace>"u"?!He.wasm.trace:!He.trace)||console.timeStamp(`${t}::ORT::${e}`)},va=(t,e)=>{var s;let r=((s=new Error().stack)==null?void 0:s.split(/\r\n|\r|\n/g))||[],i=!1;for(let n=0;n<r.length;n++){if(i&&!r[n].includes("TRACE_FUNC")){let a=`FUNC_${t}::${r[n].trim().split(" ")[1]}`;e&&(a+=`::${e}`),Ks("CPU",a);return}r[n].includes("TRACE_FUNC")&&(i=!0)}},Ft=t=>{(typeof He.trace>"u"?!He.wasm.trace:!He.trace)||va("BEGIN",t)},It=t=>{(typeof He.trace>"u"?!He.wasm.trace:!He.trace)||va("END",t)},Mr=t=>{(typeof He.trace>"u"?!He.wasm.trace:!He.trace)||console.time(`ORT::${t}`)},zr=t=>{(typeof He.trace>"u"?!He.wasm.trace:!He.trace)||console.timeEnd(`ORT::${t}`)}}),A0,Lk=j(()=>{f0(),T0(),E0(),A0=class I0{constructor(e){this.handler=e}async run(e,r,i){Ft(),Mr("InferenceSession.run");let s={},n={};if(typeof e!="object"||e===null||e instanceof yt||Array.isArray(e))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof yt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let u of r){if(typeof u!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(u)===-1)throw new RangeError(`'fetches' contains invalid output name: ${u}.`);s[u]=null}if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let u=!1,d=Object.getOwnPropertyNames(r);for(let c of this.outputNames)if(d.indexOf(c)!==-1){let p=r[c];(p===null||p instanceof yt)&&(u=!0,a=!1,s[c]=p)}if(u){if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else n=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let u of this.inputNames)if(typeof e[u]>"u")throw new Error(`input '${u}' is missing in 'feeds'.`);if(a)for(let u of this.outputNames)s[u]=null;let o=await this.handler.run(e,s,n),l={};for(let u in o)if(Object.hasOwnProperty.call(o,u)){let d=o[u];d instanceof yt?l[u]=d:l[u]=new yt(d.type,d.data,d.dims)}return zr("InferenceSession.run"),It(),l}async release(){return this.handler.dispose()}static async create(e,r,i,s){Ft(),Mr("InferenceSession.create");let n,a={};if(typeof e=="string"){if(n=e,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(e instanceof Uint8Array){if(n=e,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(e instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer){let d=e,c=0,p=e.byteLength;if(typeof r=="object"&&r!==null)a=r;else if(typeof r=="number"){if(c=r,!Number.isSafeInteger(c))throw new RangeError("'byteOffset' must be an integer.");if(c<0||c>=d.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${d.byteLength}).`);if(p=e.byteLength-c,typeof i=="number"){if(p=i,!Number.isSafeInteger(p))throw new RangeError("'byteLength' must be an integer.");if(p<=0||c+p>d.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${d.byteLength-c}].`);if(typeof s=="object"&&s!==null)a=s;else if(typeof s<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");n=new Uint8Array(d,c,p)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,l]=await p0(a),u=await o.createInferenceSessionHandler(n,l);return zr("InferenceSession.create"),It(),new I0(u)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),wl,Gk=j(()=>{Lk(),wl=A0}),Uk=j(()=>{}),Vk=j(()=>{}),Fk=j(()=>{}),Wk=j(()=>{}),qk={};ai(qk,{InferenceSession:()=>wl,TRACE:()=>Ks,TRACE_EVENT_BEGIN:()=>Mr,TRACE_EVENT_END:()=>zr,TRACE_FUNC_BEGIN:()=>Ft,TRACE_FUNC_END:()=>It,Tensor:()=>yt,env:()=>Ce,registerBackend:()=>Qr});var wt=j(()=>{zk(),Rk(),Gk(),T0(),Uk(),Vk(),E0(),Fk(),Wk()}),xl=j(()=>{}),M0={};ai(M0,{default:()=>z0});var $a,ka,z0,Hk=j(()=>{var t;Db(),Nr(),vl(),$a="ort-wasm-proxy-worker",ka=((t=globalThis.self)==null?void 0:t.name)===$a,ka&&(self.onmessage=e=>{let{type:r,in:i}=e.data;try{switch(r){case"init-wasm":$l(i.wasm).then(()=>{Gl(i).then(()=>{postMessage({type:r})},s=>{postMessage({type:r,err:s})})},s=>{postMessage({type:r,err:s})});break;case"init-ep":{let{epName:s,env:n}=i;Ul(n,s).then(()=>{postMessage({type:r})},a=>{postMessage({type:r,err:a})});break}case"copy-from":{let{buffer:s}=i,n=sn(s);postMessage({type:r,out:n});break}case"create":{let{model:s,options:n}=i;Vl(s,n).then(a=>{postMessage({type:r,out:a})},a=>{postMessage({type:r,err:a})});break}case"release":Fl(i),postMessage({type:r});break;case"run":{let{sessionId:s,inputIndices:n,inputs:a,outputIndices:o,options:l}=i;Wl(s,n,a,o,new Array(o.length).fill(null),l).then(u=>{u.some(d=>d[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:u},Hl([...a,...u]))},u=>{postMessage({type:r,err:u})});break}case"end-profiling":ql(i),postMessage({type:r});break;default:}}catch(s){postMessage({type:r,err:s})}}),z0=ka?null:e=>new Worker(e??dt,{type:"module",name:$a})}),P0={};ai(P0,{default:()=>R0});async function uh(t={}){var Nd,Ld;var e=t,r=!!globalThis.window,i=!!globalThis.WorkerGlobalScope,s=i&&((Nd=self.name)==null?void 0:Nd.startsWith("em-pthread"));e.mountExternalData=(h,g)=>{h.startsWith("./")&&(h=h.substring(2)),(e.Xc||(e.Xc=new Map)).set(h,g)},e.unmountExternalData=()=>{delete e.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let n=h=>async(...g)=>{var v;try{if(e.Yc)throw Error("Session already started");let w=e.Yc={Kd:g[0],errors:[]},C=await h(...g);if(e.Yc!==w)throw Error("Session mismatch");(v=e.dd)==null||v.flush();let I=w.errors;if(0<I.length){let z=await Promise.all(I);if(z=z.filter(G=>G),0<z.length)throw Error(z.join(`
`))}return C}finally{e.Yc=null}};e.jsepInit=(h,g)=>{if(h==="webgpu"){[e.dd,e.Ad,e.Ed,e.ed,e.Dd,e.$b,e.Fd,e.Hd,e.Bd,e.Cd,e.Gd]=g;let v=e.dd;e.jsepRegisterBuffer=(w,C,I,z)=>v.registerBuffer(w,C,I,z),e.jsepGetBuffer=w=>v.getBuffer(w),e.jsepCreateDownloader=(w,C,I)=>v.createDownloader(w,C,I),e.jsepOnCreateSession=w=>{v.onCreateSession(w)},e.jsepOnReleaseSession=w=>{v.onReleaseSession(w)},e.jsepOnRunStart=w=>v.onRunStart(w),e.Id=(w,C)=>{v.upload(w,C)}}else if(h==="webnn"){let v=g[0];[e.Wd,e.sd,e.webnnEnsureTensor,e.td,e.webnnDownloadTensor,e.Rd,e.webnnEnableTraceEvent]=g.slice(1),e.webnnReleaseTensorId=e.sd,e.webnnUploadTensor=e.td,e.webnnRegisterMLContext=e.Rd,e.webnnOnRunStart=w=>v.onRunStart(w),e.webnnOnRunEnd=v.onRunEnd.bind(v),e.webnnOnReleaseSession=w=>{v.onReleaseSession(w)},e.webnnCreateMLTensorDownloader=(w,C)=>v.createMLTensorDownloader(w,C),e.webnnRegisterMLTensor=(w,C,I,z)=>v.registerMLTensor(w,C,I,z),e.webnnCreateMLContext=w=>v.createMLContext(w),e.webnnRegisterMLConstant=(w,C,I,z,G,X)=>v.registerMLConstant(w,C,I,z,G,e.Xc,X),e.webnnRegisterGraphInput=v.registerGraphInput.bind(v),e.webnnIsGraphInput=v.isGraphInput.bind(v),e.webnnRegisterGraphOutput=v.registerGraphOutput.bind(v),e.webnnIsGraphOutput=v.isGraphOutput.bind(v),e.webnnCreateTemporaryTensor=v.createTemporaryTensor.bind(v),e.webnnIsGraphInputOutputTypeSupported=v.isGraphInputOutputTypeSupported.bind(v)}};let a=()=>{let h=g=>(...v)=>{let w=Bt;return v=g(...v),Bt!=w?new Promise((C,I)=>{vn={resolve:C,reject:I}}):v};(()=>{for(let g of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])e[g]=h(e[g])})(),n!==void 0&&(e._OrtRun=n(e._OrtRun),e._OrtRunWithBinding=n(e._OrtRunWithBinding)),a=void 0};e.asyncInit=()=>{a==null||a()};var o,l,u=(h,g)=>{throw g},d=import.meta.url,c="";if(r||i){try{c=new URL(".",d).href}catch{}i&&(l=h=>{var g=new XMLHttpRequest;return g.open("GET",h,!1),g.responseType="arraybuffer",g.send(null),new Uint8Array(g.response)}),o=async h=>{if(A(h))return new Promise((v,w)=>{var C=new XMLHttpRequest;C.open("GET",h,!0),C.responseType="arraybuffer",C.onload=()=>{C.status==200||C.status==0&&C.response?v(C.response):w(C.status)},C.onerror=w,C.send(null)});var g=await fetch(h,{credentials:"same-origin"});if(g.ok)return g.arrayBuffer();throw Error(g.status+" : "+g.url)}}var p,f,m,y,b,_,x=console.log.bind(console),$=console.error.bind(console),S=x,E=$,T=!1,A=h=>h.startsWith("file://");function k(){tr.buffer!=M.buffer&&K()}if(s){let h=function(g){try{var v=g.data,w=v.Sc;if(w==="load"){let C=[];self.onmessage=I=>C.push(I),_=()=>{postMessage({Sc:"loaded"});for(let I of C)h(I);self.onmessage=h};for(let I of v.xd)e[I]&&!e[I].proxy||(e[I]=(...z)=>{postMessage({Sc:"callHandler",wd:I,args:z})},I=="print"&&(S=e[I]),I=="printErr"&&(E=e[I]));tr=v.Od,K(),f=v.Pd,Fe(),hs()}else if(w==="run"){(function(C){var I=(k(),q)[C+52>>>2>>>0];C=(k(),q)[C+56>>>2>>>0],Yu(I,I-C),ue(I)})(v.Rc),Tn(v.Rc,0,0,1,0,0),Xl(),bn(v.Rc),P||(Vu(),P=!0);try{Xb(v.Md,v.bd)}catch(C){if(C!="unwind")throw C}}else v.target!=="setimmediate"&&(w==="checkMailbox"?P&&ns():w&&(E(`worker: received unknown command ${w}`),E(v)))}catch(C){throw Fu(),C}};var P=!1;self.onunhandledrejection=g=>{throw g.reason||g},self.onmessage=h}var M,N,W,L,R,q,O,V,ae,F,se,H=!1;function K(){var h=tr.buffer;e.HEAP8=M=new Int8Array(h),W=new Int16Array(h),e.HEAPU8=N=new Uint8Array(h),L=new Uint16Array(h),e.HEAP32=R=new Int32Array(h),e.HEAPU32=q=new Uint32Array(h),O=new Float32Array(h),V=new Float64Array(h),ae=new BigInt64Array(h),F=new BigUint64Array(h)}function Z(){H=!0,s?_():qt.sb()}function Y(h){throw E(h="Aborted("+h+")"),T=!0,h=new WebAssembly.RuntimeError(h+". Build with -sASSERTIONS for more info."),b==null||b(h),h}function he(){return{a:{ma:_w,gb:yw,g:Kb,J:Zb,f:Qb,o:Jb,h:e1,ha:t1,b:r1,T:i1,Ha:tu,n:s1,$:nu,Xa:au,Da:ou,Fa:lu,Ya:uu,Va:du,Oa:cu,Ua:hu,ka:pu,Ea:fu,Ba:mu,Wa:gu,Ca:yu,bb:n1,ea:a1,wa:o1,ua:u1,da:c1,O:h1,H:p1,va:f1,_:x1,xa:v1,Ra:$1,za:S1,Ia:C1,sa:T1,fa:E1,Qa:bn,_a:A1,R:P1,r:N1,c:yn,hb:L1,y:G1,M:U1,D:V1,l:F1,s:Su,ib:W1,I:q1,S:H1,j:j1,u:Y1,q:X1,k:K1,La:Z1,Ma:Q1,Na:J1,Ja:Au,Ka:Iu,ta:Mu,db:tw,ab:iw,v:sw,aa:nw,ga:aw,$a:rw,W:ow,Za:lw,Aa:uw,F:ew,U:dw,la:ds,ya:hw,fb:cw,eb:pw,Sa:Bu,Ta:Ou,Ga:er,V:Du,ja:Nu,Pa:Lu,ia:Gu,kb:ex,na:Xw,lb:Jw,oa:Yw,G:Lw,d:vw,t:ww,w:bw,A:zw,mb:qw,K:Ow,x:Sw,pa:Hw,Y:Kw,ba:Ww,nb:Fw,ob:Vw,P:Pw,qa:Uw,pb:Gw,N:Dw,Z:jw,e:xw,B:kw,m:$w,jb:tx,p:Tw,z:Ew,C:Cw,E:Aw,L:Rw,qb:Nw,Q:Zw,ca:Bw,X:Qw,rb:Mw,ra:Iw,i:mw,a:tr,cb:Be}}}async function Fe(){function h(w,C){var I=qt=w.exports;w={};for(let[z,G]of Object.entries(I))typeof G=="function"?(I=I1(G),w[z]=I):w[z]=G;return qt=w,qt=(function(){var z=qt,G=Q=>le=>Q(le)>>>0,X=Q=>()=>Q()>>>0;return(z=Object.assign({},z)).tb=G(z.tb),z.Xb=X(z.Xb),z.Zb=G(z.Zb),z.lc=G(z.lc),z.mc=X(z.mc),z.qc=G(z.qc),z})(),jl.push(qt._b),Uu=(w=qt).tb,Vu=w.ub,e._OrtInit=w.vb,e._OrtGetLastError=w.wb,e._OrtCreateSessionOptions=w.xb,e._OrtAppendExecutionProvider=w.yb,e._OrtAddFreeDimensionOverride=w.zb,e._OrtAddSessionConfigEntry=w.Ab,e._OrtReleaseSessionOptions=w.Bb,e._OrtCreateSession=w.Cb,e._OrtReleaseSession=w.Db,e._OrtGetInputOutputCount=w.Eb,e._OrtGetInputOutputMetadata=w.Fb,e._OrtFree=w.Gb,e._OrtCreateTensor=w.Hb,e._OrtGetTensorData=w.Ib,e._OrtReleaseTensor=w.Jb,e._OrtCreateRunOptions=w.Kb,e._OrtAddRunConfigEntry=w.Lb,e._OrtReleaseRunOptions=w.Mb,e._OrtCreateBinding=w.Nb,e._OrtBindInput=w.Ob,e._OrtBindOutput=w.Pb,e._OrtClearBoundOutputs=w.Qb,e._OrtReleaseBinding=w.Rb,e._OrtRunWithBinding=w.Sb,e._OrtRun=w.Tb,e._OrtEndProfiling=w.Ub,e._JsepOutput=w.Vb,e._JsepGetNodeName=w.Wb,cs=w.Xb,Ot=e._free=w.Yb,li=e._malloc=w.Zb,Tn=w.ac,Fu=w.bc,Wu=w.cc,qu=w.dc,En=w.ec,Hu=w.fc,ju=w.gc,ce=w.hc,ui=w.ic,Yu=w.jc,ue=w.kc,An=w.lc,de=w.mc,Xu=w.nc,In=w.oc,Ku=w.pc,Zu=w.qc,Qu=w.rc,Mn=w.sc,Ju=w.tc,ed=w.uc,td=w.vc,rd=w.wc,id=w.xc,sd=w.yc,nd=w.zc,ad=w.Ac,od=w.Bc,ld=w.Cc,ud=w.Dc,dd=w.Ec,cd=w.Fc,hd=w.Gc,pd=w.Hc,fd=w.Ic,md=w.Jc,gd=w.Kc,yd=w.Lc,_d=w.Mc,bd=w.Nc,wd=w.Pc,xd=w.Qc,vd=w.$c,$d=w.ad,kd=w.fd,Sd=w.jd,Cd=w.kd,Td=w.ld,Ed=w.md,Ad=w.nd,Id=w.od,Md=w.pd,zd=w.qd,Pd=w.vd,Rd=w.Sd,Bd=w.Td,Od=w.Ud,Dd=w.Vd,f=C,qt}var g,v=he();return e.instantiateWasm?new Promise(w=>{e.instantiateWasm(v,(C,I)=>{w(h(C,I))})}):s?h(new WebAssembly.Instance(f,he()),f):(se??(se=e.locateFile?e.locateFile?e.locateFile("ort-wasm-simd-threaded.jsep.wasm",c):c+"ort-wasm-simd-threaded.jsep.wasm":new URL("/abstractblade/assets/ort-wasm-simd-threaded.jsep-CyqnNavA.wasm",import.meta.url).href),g=await(async function(w){var C=se;if(!p&&!A(C))try{var I=fetch(C,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(I,w)}catch(z){E(`wasm streaming compile failed: ${z}`),E("falling back to ArrayBuffer instantiation")}return(async function(z,G){try{var X=await(async function(Q){if(!p)try{var le=await o(Q);return new Uint8Array(le)}catch{}if(Q==se&&p)Q=new Uint8Array(p);else{if(!l)throw"both async and sync fetching of the wasm failed";Q=l(Q)}return Q})(z);return await WebAssembly.instantiate(X,G)}catch(Q){E(`failed to asynchronously prepare wasm: ${Q}`),Y(Q)}})(C,w)})(v),h(g.instance,g.module))}class Ee{constructor(g){B(this,"name","ExitStatus");this.message=`Program terminated with exit(${g})`,this.status=g}}var Qe=h=>{h.terminate(),h.onmessage=()=>{}},Le=[],We=0,qe=null,et=h=>{Pt.length==0&&(Zl(),Kl(Pt[0]));var g=Pt.pop();if(!g)return 6;Ur.push(g),pr[h.Rc]=g,g.Rc=h.Rc;var v={Sc:"run",Md:h.Ld,bd:h.bd,Rc:h.Rc};return g.postMessage(v,h.rd),0},fe=0,re=(h,g,...v)=>{var w,C=16*v.length,I=de(),z=An(C),G=z>>>3;for(w of v)typeof w=="bigint"?((k(),ae)[G++>>>0]=1n,(k(),ae)[G++>>>0]=w):((k(),ae)[G++>>>0]=0n,(k(),V)[G++>>>0]=w);return h=Wu(h,0,C,z,g),ue(I),h};function Be(h){if(s)return re(0,1,h);if(m=h,!(0<fe)){for(var g of Ur)Qe(g);for(g of Pt)Qe(g);Pt=[],Ur=[],pr={},T=!0}u(0,new Ee(h))}function Gr(h){if(s)return re(1,0,h);er(h)}var er=h=>{if(m=h,s)throw Gr(h),"unwind";Be(h)},Pt=[],Ur=[],jl=[],pr={},Yl=h=>{var g=h.Rc;delete pr[g],Pt.push(h),Ur.splice(Ur.indexOf(h),1),h.Rc=0,qu(g)};function Xl(){jl.forEach(h=>h())}var Kl=h=>new Promise(g=>{h.onmessage=C=>{var I=C.data;if(C=I.Sc,I.Zc&&I.Zc!=cs()){var z=pr[I.Zc];z?z.postMessage(I,I.rd):E(`Internal error! Worker sent a message "${C}" to target pthread ${I.Zc}, but that thread no longer exists!`)}else C==="checkMailbox"?ns():C==="spawnThread"?et(I):C==="cleanupThread"?ss(()=>{Yl(pr[I.Nd])}):C==="loaded"?(h.loaded=!0,g(h)):I.target==="setimmediate"?h.postMessage(I):C==="uncaughtException"?h.onerror(I.error):C==="callHandler"?e[I.wd](...I.args):C&&E(`worker sent an unknown command ${C}`)},h.onerror=C=>{throw E(`worker sent an error! ${C.filename}:${C.lineno}: ${C.message}`),C};var v,w=[];for(v of[])e.propertyIsEnumerable(v)&&w.push(v);h.postMessage({Sc:"load",xd:w,Od:tr,Pd:f})});function Zl(){var h=new Worker((()=>{let g=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new g("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});Pt.push(h)}var tr,Xb=(h,g)=>{fe=0,h=Mn(h,g),0<fe?m=h:En(h)},ts=[],rs=0;function Kb(h){var g=new pn(h>>>=0);return(k(),M)[g.Tc+12>>>0]==0&&(Ql(g,!0),rs--),Jl(g,!1),ts.push(g),Zu(h)}var Vr=0,Zb=()=>{ce(0,0);var h=ts.pop();Xu(h.cd),Vr=0};function Ql(h,g){g=g?1:0,(k(),M)[h.Tc+12>>>0]=g}function Jl(h,g){g=g?1:0,(k(),M)[h.Tc+13>>>0]=g}class pn{constructor(g){this.cd=g,this.Tc=g-24}}var fn=h=>{var g=Vr;if(!g)return ui(0),0;var v=new pn(g);(k(),q)[v.Tc+16>>>2>>>0]=g;var w=(k(),q)[v.Tc+4>>>2>>>0];if(!w)return ui(0),g;for(var C of h){if(C===0||C===w)break;if(Ku(C,w,v.Tc+16))return ui(C),g}return ui(w),g};function Qb(){return fn([])}function Jb(h){return fn([h>>>0])}function e1(h,g,v,w){return fn([h>>>0,g>>>0,v>>>0,w>>>0])}var t1=()=>{var h=ts.pop();h||Y("no exception to throw");var g=h.cd;throw(k(),M)[h.Tc+13>>>0]==0&&(ts.push(h),Jl(h,!0),Ql(h,!1),rs++),In(g),Vr=g};function r1(h,g,v){var w=new pn(h>>>=0);throw g>>>=0,v>>>=0,(k(),q)[w.Tc+16>>>2>>>0]=0,(k(),q)[w.Tc+4>>>2>>>0]=g,(k(),q)[w.Tc+8>>>2>>>0]=v,In(h),rs++,Vr=h}var i1=()=>rs;function eu(h,g,v,w){return s?re(2,1,h,g,v,w):tu(h,g,v,w)}function tu(h,g,v,w){if(h>>>=0,g>>>=0,v>>>=0,w>>>=0,!globalThis.SharedArrayBuffer)return 6;var C=[];return s&&C.length===0?eu(h,g,v,w):(h={Ld:v,Rc:h,bd:w,rd:C},s?(h.Sc="spawnThread",postMessage(h,C),0):et(h))}function s1(h){throw Vr||(Vr=h>>>0),Vr}var ru=globalThis.TextDecoder&&new TextDecoder,iu=(h,g,v,w)=>{if(v=g+v,w)return v;for(;h[g]&&!(g>=v);)++g;return g},su=(h,g=0,v,w)=>{if(16<(v=iu(h,g>>>=0,v,w))-g&&h.buffer&&ru)return ru.decode(h.buffer instanceof ArrayBuffer?h.subarray(g,v):h.slice(g,v));for(w="";g<v;){var C=h[g++];if(128&C){var I=63&h[g++];if((224&C)==192)w+=String.fromCharCode((31&C)<<6|I);else{var z=63&h[g++];65536>(C=(240&C)==224?(15&C)<<12|I<<6|z:(7&C)<<18|I<<12|z<<6|63&h[g++])?w+=String.fromCharCode(C):(C-=65536,w+=String.fromCharCode(55296|C>>10,56320|1023&C))}}else w+=String.fromCharCode(C)}return w},Oe=(h,g,v)=>(h>>>=0)?su((k(),N),h,g,v):"";function nu(h,g,v){return s?re(3,1,h,g,v):0}function au(h,g){if(s)return re(4,1,h,g)}function ou(h,g){if(s)return re(5,1,h,g)}function lu(h,g,v){if(s)return re(6,1,h,g,v)}function uu(h,g,v){return s?re(7,1,h,g,v):0}function du(h,g){if(s)return re(8,1,h,g)}function cu(h,g,v){if(s)return re(9,1,h,g,v)}function hu(h,g,v,w){if(s)return re(10,1,h,g,v,w)}function pu(h,g,v,w){if(s)return re(11,1,h,g,v,w)}function fu(h,g,v,w){if(s)return re(12,1,h,g,v,w)}function mu(h){if(s)return re(13,1,h)}function gu(h,g){if(s)return re(14,1,h,g)}function yu(h,g,v){if(s)return re(15,1,h,g,v)}var n1=()=>Y(""),Rt=h=>{h>>>=0;for(var g="";;){var v=(k(),N)[h++>>>0];if(!v)return g;g+=String.fromCharCode(v)}},mn={},gn={},Fr=class extends Error{constructor(h){super(h),this.name="BindingError"}};function Wt(h,g,v={}){return(function(w,C,I={}){var z=C.name;if(!w)throw new Fr(`type "${z}" must have a positive integer typeid pointer`);if(gn.hasOwnProperty(w)){if(I.yd)return;throw new Fr(`Cannot register type '${z}' twice`)}gn[w]=C,mn.hasOwnProperty(w)&&(C=mn[w],delete mn[w],C.forEach(G=>G()))})(h,g,v)}var _u=(h,g,v)=>{switch(g){case 1:return v?w=>(k(),M)[w>>>0]:w=>(k(),N)[w>>>0];case 2:return v?w=>(k(),W)[w>>>1>>>0]:w=>(k(),L)[w>>>1>>>0];case 4:return v?w=>(k(),R)[w>>>2>>>0]:w=>(k(),q)[w>>>2>>>0];case 8:return v?w=>(k(),ae)[w>>>3>>>0]:w=>(k(),F)[w>>>3>>>0];default:throw new TypeError(`invalid integer width (${g}): ${h}`)}};function a1(h,g,v,w,C){h>>>=0,v>>>=0,g=Rt(g>>>0);let I=z=>z;if(w=w===0n){let z=8*v;I=G=>BigInt.asUintN(z,G),C=I(C)}Wt(h,{name:g,Oc:I,Vc:(z,G)=>(typeof G=="number"&&(G=BigInt(G)),G),Uc:_u(g,v,!w),Wc:null})}function o1(h,g,v,w){Wt(h>>>=0,{name:g=Rt(g>>>0),Oc:function(C){return!!C},Vc:function(C,I){return I?v:w},Uc:function(C){return this.Oc((k(),N)[C>>>0])},Wc:null})}var bu=[],fr=[0,1,,1,null,1,!0,1,!1,1];function yn(h){9<(h>>>=0)&&--fr[h+1]==0&&(fr[h]=void 0,bu.push(h))}var mt=h=>{if(!h)throw new Fr(`Cannot use deleted val. handle = ${h}`);return fr[h]},xt=h=>{switch(h){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let g=bu.pop()||fr.length;return fr[g]=h,fr[g+1]=1,g}};function _n(h){return this.Oc((k(),q)[h>>>2>>>0])}var l1={name:"emscripten::val",Oc:h=>{var g=mt(h);return yn(h),g},Vc:(h,g)=>xt(g),Uc:_n,Wc:null};function u1(h){return Wt(h>>>0,l1)}var d1=(h,g)=>{switch(g){case 4:return function(v){return this.Oc((k(),O)[v>>>2>>>0])};case 8:return function(v){return this.Oc((k(),V)[v>>>3>>>0])};default:throw new TypeError(`invalid float width (${g}): ${h}`)}};function c1(h,g,v){v>>>=0,Wt(h>>>=0,{name:g=Rt(g>>>0),Oc:w=>w,Vc:(w,C)=>C,Uc:d1(g,v),Wc:null})}function h1(h,g,v,w,C){h>>>=0,v>>>=0,g=Rt(g>>>0);let I=G=>G;if(w===0){var z=32-8*v;I=G=>G<<z>>>z,C=I(C)}Wt(h,{name:g,Oc:I,Vc:(G,X)=>X,Uc:_u(g,v,w!==0),Wc:null})}function p1(h,g,v){function w(I){var z=(k(),q)[I>>>2>>>0];return I=(k(),q)[I+4>>>2>>>0],new C((k(),M).buffer,I,z)}var C=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][g];Wt(h>>>=0,{name:v=Rt(v>>>0),Oc:w,Uc:w},{yd:!0})}var rr=(h,g,v)=>{var w=(k(),N);if(g>>>=0,0<v){var C=g;v=g+v-1;for(var I=0;I<h.length;++I){var z=h.codePointAt(I);if(127>=z){if(g>=v)break;w[g++>>>0]=z}else if(2047>=z){if(g+1>=v)break;w[g++>>>0]=192|z>>6,w[g++>>>0]=128|63&z}else if(65535>=z){if(g+2>=v)break;w[g++>>>0]=224|z>>12,w[g++>>>0]=128|z>>6&63,w[g++>>>0]=128|63&z}else{if(g+3>=v)break;w[g++>>>0]=240|z>>18,w[g++>>>0]=128|z>>12&63,w[g++>>>0]=128|z>>6&63,w[g++>>>0]=128|63&z,I++}}w[g>>>0]=0,h=g-C}else h=0;return h},is=h=>{for(var g=0,v=0;v<h.length;++v){var w=h.charCodeAt(v);127>=w?g++:2047>=w?g+=2:55296<=w&&57343>=w?(g+=4,++v):g+=3}return g};function f1(h,g){Wt(h>>>=0,{name:g=Rt(g>>>0),Oc(v){var w=(k(),q)[v>>>2>>>0];return w=Oe(v+4,w,!0),Ot(v),w},Vc(v,w){w instanceof ArrayBuffer&&(w=new Uint8Array(w));var C=typeof w=="string";if(!(C||ArrayBuffer.isView(w)&&w.BYTES_PER_ELEMENT==1))throw new Fr("Cannot pass non-string to std::string");var I=C?is(w):w.length,z=li(4+I+1),G=z+4;return(k(),q)[z>>>2>>>0]=I,C?rr(w,G,I+1):(k(),N).set(w,G>>>0),v!==null&&v.push(Ot,z),z},Uc:_n,Wc(v){Ot(v)}})}var wu=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,m1=(h,g,v)=>{if(h>>>=1,16<(g=iu((k(),L),h,g/2,v))-h&&wu)return wu.decode((k(),L).slice(h,g));for(v="";h<g;++h){var w=(k(),L)[h>>>0];v+=String.fromCharCode(w)}return v},g1=(h,g,v)=>{if(v??(v=2147483647),2>v)return 0;var w=g;v=(v-=2)<2*h.length?v/2:h.length;for(var C=0;C<v;++C){var I=h.charCodeAt(C);(k(),W)[g>>>1>>>0]=I,g+=2}return(k(),W)[g>>>1>>>0]=0,g-w},y1=h=>2*h.length,_1=(h,g,v)=>{var w="";h>>>=2;for(var C=0;!(C>=g/4);C++){var I=(k(),q)[h+C>>>0];if(!I&&!v)break;w+=String.fromCodePoint(I)}return w},b1=(h,g,v)=>{if(g>>>=0,v??(v=2147483647),4>v)return 0;var w=g;v=w+v-4;for(var C=0;C<h.length;++C){var I=h.codePointAt(C);if(65535<I&&C++,(k(),R)[g>>>2>>>0]=I,(g+=4)+4>v)break}return(k(),R)[g>>>2>>>0]=0,g-w},w1=h=>{for(var g=0,v=0;v<h.length;++v)65535<h.codePointAt(v)&&v++,g+=4;return g};function x1(h,g,v){if(h>>>=0,g>>>=0,v=Rt(v>>>=0),g===2)var w=m1,C=g1,I=y1;else w=_1,C=b1,I=w1;Wt(h,{name:v,Oc:z=>{var G=(k(),q)[z>>>2>>>0];return G=w(z+4,G*g,!0),Ot(z),G},Vc:(z,G)=>{if(typeof G!="string")throw new Fr(`Cannot pass non-string to C++ string type ${v}`);var X=I(G),Q=li(4+X+g);return(k(),q)[Q>>>2>>>0]=X/g,C(G,Q+4,X+g),z!==null&&z.push(Ot,Q),Q},Uc:_n,Wc(z){Ot(z)}})}function v1(h,g){Wt(h>>>=0,{zd:!0,name:g=Rt(g>>>0),Oc:()=>{},Vc:()=>{}})}function $1(h){Tn(h>>>0,!i,1,!r,131072,!1),Xl()}var ss=h=>{if(!T)try{if(h(),!(0<fe))try{s?cs()&&En(m):er(m)}catch(g){g instanceof Ee||g=="unwind"||u(0,g)}}catch(g){g instanceof Ee||g=="unwind"||u(0,g)}},k1=!Atomics.waitAsync||((Ld=globalThis.navigator)==null?void 0:Ld.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function bn(h){h>>>=0,k1||(Atomics.waitAsync((k(),R),h>>>2,h).value.then(ns),h+=128,Atomics.store((k(),R),h>>>2,1))}var ns=()=>ss(()=>{var h=cs();h&&(bn(h),ju())});function S1(h,g){(h>>>=0)==g>>>0?setTimeout(ns):s?postMessage({Zc:h,Sc:"checkMailbox"}):(h=pr[h])&&h.postMessage({Sc:"checkMailbox"})}var wn=[];function C1(h,g,v,w,C){for(g>>>=0,C>>>=0,wn.length=0,v=C>>>3,w=C+w>>>3;v<w;){var I;I=(k(),ae)[v++>>>0]?(k(),ae)[v++>>>0]:(k(),V)[v++>>>0],wn.push(I)}return(g?zn[g]:gw[h])(...wn)}var T1=()=>{fe=0};function E1(h){h>>>=0,s?postMessage({Sc:"cleanupThread",Nd:h}):Yl(pr[h])}function A1(h){}var as=h=>{try{h()}catch(g){Y(g)}};function I1(h){var g=(...v)=>{os.push(h);try{return h(...v)}finally{T||(os.pop(),Bt&&ir===1&&os.length===0&&(ir=0,fe+=1,as(Bd),typeof Fibers<"u"&&Fibers.Zd()))}};return $u.set(h,g),g}var ir=0,Bt=null,xu=0,os=[],xn=new Map,vu=new Map,$u=new Map,M1=0,vn=null,z1=[],ku=h=>(function(g){if(!T){if(ir===0){var v=!1,w=!1;g((C=0)=>{if(!T&&(xu=C,v=!0,w)){ir=2,as(()=>Od(Bt)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),C=!1;try{var I=(function(){var X=(k(),R)[Bt+8>>>2>>>0];return X=vu.get(X),X=$u.get(X),--fe,X()})()}catch(X){I=X,C=!0}var z=!1;if(!Bt){var G=vn;G&&(vn=null,(C?G.reject:G.resolve)(I),z=!0)}if(C&&!z)throw I}}),w=!0,v||(ir=1,Bt=(function(){var C=li(65548),I=C+12;if((k(),q)[C>>>2>>>0]=I,(k(),q)[C+4>>>2>>>0]=I+65536,I=os[0],!xn.has(I)){var z=M1++;xn.set(I,z),vu.set(z,I)}return I=xn.get(I),(k(),R)[C+8>>>2>>>0]=I,C})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),as(()=>Rd(Bt)))}else ir===2?(ir=0,as(Dd),Ot(Bt),Bt=null,z1.forEach(ss)):Y(`invalid state: ${ir}`);return xu}})(g=>{h().then(g)});function P1(h){return h>>>=0,ku(async()=>{var g=await mt(h);return xt(g)})}var $n=[],R1=h=>{var g=$n.length;return $n.push(h),g},B1=(h,g)=>{for(var v=Array(h),w=0;w<h;++w){var C=w,I=(k(),q)[g+4*w>>>2>>>0],z=gn[I];if(z===void 0)throw h=`parameter ${w}`,I=Uu(I),g=Rt(I),Ot(I),new Fr(`${h} has unknown type ${g}`);v[C]=z}return v},O1=(h,g,v)=>{var w=[];return h=h(w,v),w.length&&((k(),q)[g>>>2>>>0]=xt(w)),h},D1={},ls=h=>{var g=D1[h];return g===void 0?Rt(h):g};function N1(h,g,v){var[w,...C]=B1(h,g>>>0);g=w.Vc.bind(w);var I=C.map(X=>X.Uc.bind(X));h--;var z={toValue:mt};switch(h=I.map((X,Q)=>{var le=`argFromPtr${Q}`;return z[le]=X,`${le}(args${Q?"+"+8*Q:""})`}),v){case 0:var G="toValue(handle)";break;case 2:G="new (toValue(handle))";break;case 3:G="";break;case 1:z.getStringOrSymbol=ls,G="toValue(handle)[getStringOrSymbol(methodName)]"}return G+=`(${h})`,w.zd||(z.toReturnWire=g,z.emval_returnValue=O1,G=`return emval_returnValue(toReturnWire, destructorsRef, ${G})`),G=`return function (handle, methodName, destructorsRef, args) {
  ${G}
  }`,v=new Function(Object.keys(z),G)(...Object.values(z)),G=`methodCaller<(${C.map(X=>X.name)}) => ${w.name}>`,R1(Object.defineProperty(v,"name",{value:G}))}function L1(h,g){return g>>>=0,(h=mt(h>>>0))==mt(g)}function G1(h){return(h>>>=0)?(h=ls(h),xt(globalThis[h])):xt(globalThis)}function U1(h){return h=ls(h>>>0),xt(e[h])}function V1(h,g){return g>>>=0,h=mt(h>>>0),g=mt(g),xt(h[g])}function F1(h){9<(h>>>=0)&&(fr[h+1]+=1)}function Su(h,g,v,w,C){return $n[h>>>0](g>>>0,v>>>0,w>>>0,C>>>0)}function W1(h,g,v,w,C){return Su(h>>>0,g>>>0,v>>>0,w>>>0,C>>>0)}function q1(){return xt([])}function H1(h){h=mt(h>>>0);for(var g=Array(h.length),v=0;v<h.length;v++)g[v]=h[v];return xt(g)}function j1(h){return xt(ls(h>>>0))}function Y1(){return xt({})}function X1(h){for(var g=mt(h>>>=0);g.length;){var v=g.pop();g.pop()(v)}yn(h)}function K1(h,g,v){g>>>=0,v>>>=0,h=mt(h>>>0),g=mt(g),v=mt(v),h[g]=v}function Z1(h,g){h=-9007199254740992>h||9007199254740992<h?NaN:Number(h),g>>>=0,h=new Date(1e3*h),(k(),R)[g>>>2>>>0]=h.getUTCSeconds(),(k(),R)[g+4>>>2>>>0]=h.getUTCMinutes(),(k(),R)[g+8>>>2>>>0]=h.getUTCHours(),(k(),R)[g+12>>>2>>>0]=h.getUTCDate(),(k(),R)[g+16>>>2>>>0]=h.getUTCMonth(),(k(),R)[g+20>>>2>>>0]=h.getUTCFullYear()-1900,(k(),R)[g+24>>>2>>>0]=h.getUTCDay(),h=(h.getTime()-Date.UTC(h.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(k(),R)[g+28>>>2>>>0]=h}var Cu=h=>h%4==0&&(h%100!=0||h%400==0),Tu=[0,31,60,91,121,152,182,213,244,274,305,335],Eu=[0,31,59,90,120,151,181,212,243,273,304,334];function Q1(h,g){h=-9007199254740992>h||9007199254740992<h?NaN:Number(h),g>>>=0,h=new Date(1e3*h),(k(),R)[g>>>2>>>0]=h.getSeconds(),(k(),R)[g+4>>>2>>>0]=h.getMinutes(),(k(),R)[g+8>>>2>>>0]=h.getHours(),(k(),R)[g+12>>>2>>>0]=h.getDate(),(k(),R)[g+16>>>2>>>0]=h.getMonth(),(k(),R)[g+20>>>2>>>0]=h.getFullYear()-1900,(k(),R)[g+24>>>2>>>0]=h.getDay();var v=(Cu(h.getFullYear())?Tu:Eu)[h.getMonth()]+h.getDate()-1|0;(k(),R)[g+28>>>2>>>0]=v,(k(),R)[g+36>>>2>>>0]=-60*h.getTimezoneOffset(),v=new Date(h.getFullYear(),6,1).getTimezoneOffset();var w=new Date(h.getFullYear(),0,1).getTimezoneOffset();h=0|(v!=w&&h.getTimezoneOffset()==Math.min(w,v)),(k(),R)[g+32>>>2>>>0]=h}function J1(h){h>>>=0;var g=new Date((k(),R)[h+20>>>2>>>0]+1900,(k(),R)[h+16>>>2>>>0],(k(),R)[h+12>>>2>>>0],(k(),R)[h+8>>>2>>>0],(k(),R)[h+4>>>2>>>0],(k(),R)[h>>>2>>>0],0),v=(k(),R)[h+32>>>2>>>0],w=g.getTimezoneOffset(),C=new Date(g.getFullYear(),6,1).getTimezoneOffset(),I=new Date(g.getFullYear(),0,1).getTimezoneOffset(),z=Math.min(I,C);return 0>v?(k(),R)[h+32>>>2>>>0]=+(C!=I&&z==w):0<v!=(z==w)&&(C=Math.max(I,C),g.setTime(g.getTime()+6e4*((0<v?z:C)-w))),(k(),R)[h+24>>>2>>>0]=g.getDay(),v=(Cu(g.getFullYear())?Tu:Eu)[g.getMonth()]+g.getDate()-1|0,(k(),R)[h+28>>>2>>>0]=v,(k(),R)[h>>>2>>>0]=g.getSeconds(),(k(),R)[h+4>>>2>>>0]=g.getMinutes(),(k(),R)[h+8>>>2>>>0]=g.getHours(),(k(),R)[h+12>>>2>>>0]=g.getDate(),(k(),R)[h+16>>>2>>>0]=g.getMonth(),(k(),R)[h+20>>>2>>>0]=g.getYear(),h=g.getTime(),BigInt(isNaN(h)?-1:h/1e3)}function Au(h,g,v,w,C,I,z){return s?re(16,1,h,g,v,w,C,I,z):-52}function Iu(h,g,v,w,C,I){if(s)return re(17,1,h,g,v,w,C,I)}var oi={},ew=()=>performance.timeOrigin+performance.now();function Mu(h,g){if(s)return re(18,1,h,g);if(oi[h]&&(clearTimeout(oi[h].id),delete oi[h]),!g)return 0;var v=setTimeout(()=>{delete oi[h],ss(()=>Hu(h,performance.timeOrigin+performance.now()))},g);return oi[h]={id:v,Yd:g},0}function tw(h,g,v,w){h>>>=0,g>>>=0,v>>>=0,w>>>=0;var C=new Date().getFullYear(),I=new Date(C,0,1).getTimezoneOffset();C=new Date(C,6,1).getTimezoneOffset();var z=Math.max(I,C);(k(),q)[h>>>2>>>0]=60*z,(k(),R)[g>>>2>>>0]=+(I!=C),h=(g=G=>{var X=Math.abs(G);return`UTC${0<=G?"-":"+"}${String(Math.floor(X/60)).padStart(2,"0")}${String(X%60).padStart(2,"0")}`})(I),g=g(C),C<I?(rr(h,v,17),rr(g,w,17)):(rr(h,w,17),rr(g,v,17))}var rw=()=>Date.now();function iw(h,g,v){return v>>>=0,0<=h&&3>=h?(h===0?h=Date.now():h=performance.timeOrigin+performance.now(),h=Math.round(1e6*h),(k(),ae)[v>>>3>>>0]=BigInt(h),0):28}var kn=[],zu=(h,g)=>{kn.length=0;for(var v;v=(k(),N)[h++>>>0];){var w=v!=105;g+=(w&=v!=112)&&g%8?4:0,kn.push(v==112?(k(),q)[g>>>2>>>0]:v==106?(k(),ae)[g>>>3>>>0]:v==105?(k(),R)[g>>>2>>>0]:(k(),V)[g>>>3>>>0]),g+=w?8:4}return kn};function sw(h,g,v){return h>>>=0,g=zu(g>>>0,v>>>0),zn[h](...g)}function nw(h,g,v){return h>>>=0,g=zu(g>>>0,v>>>0),zn[h](...g)}var aw=()=>{};function ow(h,g){return E(Oe(h>>>0,g>>>0))}var lw=()=>{throw fe+=1,"unwind"};function uw(){return 4294901760}var dw=()=>navigator.hardwareConcurrency,mr={},us=h=>{var g;return(g=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(h))?+g[1]:(g=/:(\d+):\d+(?:\)|$)/.exec(h))?2147483648|+g[1]:0},Pu=h=>{for(var g of h)(h=us(g))&&(mr[h]=g)};function cw(){var h=Error().stack.toString().split(`
`);return h[0]=="Error"&&h.shift(),Pu(h),mr.gd=us(h[3]),mr.Jd=h,mr.gd}function ds(h){if(!(h=mr[h>>>0]))return 0;var g;if(g=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(h))h=g[1];else if(g=/^\s+at (.*) \(.*\)$/.exec(h))h=g[1];else{if(!(g=/^(.+?)@/.exec(h)))return 0;h=g[1]}Ot(ds.hd??0),g=is(h)+1;var v=li(g);return v&&rr(h,v,g),ds.hd=v,ds.hd}function hw(h){h>>>=0;var g=(k(),N).length;if(h<=g||4294901760<h)return!1;for(var v=1;4>=v;v*=2){var w=g*(1+.2/v);w=Math.min(w,h+100663296);e:{w=(Math.min(4294901760,65536*Math.ceil(Math.max(h,w)/65536))-tr.buffer.byteLength+65535)/65536|0;try{tr.grow(w),K();var C=1;break e}catch{}C=void 0}if(C)return!0}return!1}function pw(h,g,v){if(h>>>=0,g>>>=0,mr.gd==h)var w=mr.Jd;else(w=Error().stack.toString().split(`
`))[0]=="Error"&&w.shift(),Pu(w);for(var C=3;w[C]&&us(w[C])!=h;)++C;for(h=0;h<v&&w[h+C];++h)(k(),R)[g+4*h>>>2>>>0]=us(w[h+C]);return h}var Sn,Cn={},Ru=()=>{var w;if(!Sn){var h,g={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((w=globalThis.navigator)==null?void 0:w.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(h in Cn)Cn[h]===void 0?delete g[h]:g[h]=Cn[h];var v=[];for(h in g)v.push(`${h}=${g[h]}`);Sn=v}return Sn};function Bu(h,g){if(s)return re(19,1,h,g);h>>>=0,g>>>=0;var v,w=0,C=0;for(v of Ru()){var I=g+w;(k(),q)[h+C>>>2>>>0]=I,w+=rr(v,I,1/0)+1,C+=4}return 0}function Ou(h,g){if(s)return re(20,1,h,g);h>>>=0,g>>>=0;var v=Ru();for(var w of((k(),q)[h>>>2>>>0]=v.length,h=0,v))h+=is(w)+1;return(k(),q)[g>>>2>>>0]=h,0}function Du(h){return s?re(21,1,h):52}function Nu(h,g,v,w){return s?re(22,1,h,g,v,w):52}function Lu(h,g,v,w){return s?re(23,1,h,g,v,w):70}var fw=[null,[],[]];function Gu(h,g,v,w){if(s)return re(24,1,h,g,v,w);g>>>=0,v>>>=0,w>>>=0;for(var C=0,I=0;I<v;I++){var z=(k(),q)[g>>>2>>>0],G=(k(),q)[g+4>>>2>>>0];g+=8;for(var X=0;X<G;X++){var Q=h,le=(k(),N)[z+X>>>0],me=fw[Q];le===0||le===10?((Q===1?S:E)(su(me)),me.length=0):me.push(le)}C+=G}return(k(),q)[w>>>2>>>0]=C,0}function mw(h){return h>>>0}s||(function(){for(var h=e.numThreads-1;h--;)Zl();Le.push(async()=>{var g=(async function(){if(!s)return Promise.all(Pt.map(Kl))})();We++,await g,--We==0&&qe&&(g=qe,qe=null,g())})})(),s||(tr=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),K()),e.wasmBinary&&(p=e.wasmBinary),e.stackSave=()=>de(),e.stackRestore=h=>ue(h),e.stackAlloc=h=>An(h),e.setValue=function(h,g,v="i8"){switch(v.endsWith("*")&&(v="*"),v){case"i1":case"i8":(k(),M)[h>>>0]=g;break;case"i16":(k(),W)[h>>>1>>>0]=g;break;case"i32":(k(),R)[h>>>2>>>0]=g;break;case"i64":(k(),ae)[h>>>3>>>0]=BigInt(g);break;case"float":(k(),O)[h>>>2>>>0]=g;break;case"double":(k(),V)[h>>>3>>>0]=g;break;case"*":(k(),q)[h>>>2>>>0]=g;break;default:Y(`invalid type for setValue: ${v}`)}},e.getValue=function(h,g="i8"){switch(g.endsWith("*")&&(g="*"),g){case"i1":case"i8":return(k(),M)[h>>>0];case"i16":return(k(),W)[h>>>1>>>0];case"i32":return(k(),R)[h>>>2>>>0];case"i64":return(k(),ae)[h>>>3>>>0];case"float":return(k(),O)[h>>>2>>>0];case"double":return(k(),V)[h>>>3>>>0];case"*":return(k(),q)[h>>>2>>>0];default:Y(`invalid type for getValue: ${g}`)}},e.UTF8ToString=Oe,e.stringToUTF8=rr,e.lengthBytesUTF8=is;var Uu,Vu,cs,Ot,li,Tn,Fu,Wu,qu,En,Hu,ju,ce,ui,Yu,ue,An,de,Xu,In,Ku,Zu,Qu,Mn,Ju,ed,td,rd,id,sd,nd,ad,od,ld,ud,dd,cd,hd,pd,fd,md,gd,yd,_d,bd,wd,xd,vd,$d,kd,Sd,Cd,Td,Ed,Ad,Id,Md,zd,Pd,Rd,Bd,Od,Dd,qt,gw=[Be,Gr,eu,nu,au,ou,lu,uu,du,cu,hu,pu,fu,mu,gu,yu,Au,Iu,Mu,Bu,Ou,Du,Nu,Lu,Gu],zn={973212:(h,g,v,w,C)=>{if(e===void 0||!e.Xc)return 1;if((h=Oe(Number(h>>>0))).startsWith("./")&&(h=h.substring(2)),!(h=e.Xc.get(h)))return 2;if(g=Number(g>>>0),v=Number(v>>>0),w=Number(w>>>0),g+v>h.byteLength)return 3;try{let I=h.subarray(g,g+v);switch(C){case 0:(k(),N).set(I,w>>>0);break;case 1:e.Qd?e.Qd(w,I):e.Id(w,I);break;default:return 4}return 0}catch{return 4}},974036:(h,g,v)=>{e.td(h,(k(),N).subarray(g>>>0,g+v>>>0))},974100:()=>e.Wd(),974142:h=>{e.sd(h)},974179:()=>{e.Bd()},974210:()=>{e.Cd()},974239:()=>{e.Gd()},974264:h=>e.Ad(h),974297:h=>e.Ed(h),974329:(h,g,v)=>{e.ed(Number(h),Number(g),Number(v),!0)},974392:(h,g,v)=>{e.ed(Number(h),Number(g),Number(v))},974449:()=>typeof wasmOffsetConverter<"u",974506:h=>{e.$b("Abs",h,void 0)},974557:h=>{e.$b("Neg",h,void 0)},974608:h=>{e.$b("Floor",h,void 0)},974661:h=>{e.$b("Ceil",h,void 0)},974713:h=>{e.$b("Reciprocal",h,void 0)},974771:h=>{e.$b("Sqrt",h,void 0)},974823:h=>{e.$b("Exp",h,void 0)},974874:h=>{e.$b("Erf",h,void 0)},974925:h=>{e.$b("Sigmoid",h,void 0)},974980:(h,g,v)=>{e.$b("HardSigmoid",h,{alpha:g,beta:v})},975059:h=>{e.$b("Log",h,void 0)},975110:h=>{e.$b("Sin",h,void 0)},975161:h=>{e.$b("Cos",h,void 0)},975212:h=>{e.$b("Tan",h,void 0)},975263:h=>{e.$b("Asin",h,void 0)},975315:h=>{e.$b("Acos",h,void 0)},975367:h=>{e.$b("Atan",h,void 0)},975419:h=>{e.$b("Sinh",h,void 0)},975471:h=>{e.$b("Cosh",h,void 0)},975523:h=>{e.$b("Asinh",h,void 0)},975576:h=>{e.$b("Acosh",h,void 0)},975629:h=>{e.$b("Atanh",h,void 0)},975682:h=>{e.$b("Tanh",h,void 0)},975734:h=>{e.$b("Not",h,void 0)},975785:(h,g,v)=>{e.$b("Clip",h,{min:g,max:v})},975854:h=>{e.$b("Clip",h,void 0)},975906:(h,g)=>{e.$b("Elu",h,{alpha:g})},975964:h=>{e.$b("Gelu",h,void 0)},976016:h=>{e.$b("Relu",h,void 0)},976068:(h,g)=>{e.$b("LeakyRelu",h,{alpha:g})},976132:(h,g)=>{e.$b("ThresholdedRelu",h,{alpha:g})},976202:(h,g)=>{e.$b("Cast",h,{to:g})},976260:h=>{e.$b("Add",h,void 0)},976311:h=>{e.$b("Sub",h,void 0)},976362:h=>{e.$b("Mul",h,void 0)},976413:h=>{e.$b("Div",h,void 0)},976464:h=>{e.$b("Pow",h,void 0)},976515:h=>{e.$b("Equal",h,void 0)},976568:h=>{e.$b("Greater",h,void 0)},976623:h=>{e.$b("GreaterOrEqual",h,void 0)},976685:h=>{e.$b("Less",h,void 0)},976737:h=>{e.$b("LessOrEqual",h,void 0)},976796:(h,g,v,w,C)=>{e.$b("ReduceMean",h,{keepDims:!!g,noopWithEmptyAxes:!!v,axes:w?Array.from((k(),R).subarray(Number(w)>>>0,Number(C)>>>0)):[]})},976971:(h,g,v,w,C)=>{e.$b("ReduceMax",h,{keepDims:!!g,noopWithEmptyAxes:!!v,axes:w?Array.from((k(),R).subarray(Number(w)>>>0,Number(C)>>>0)):[]})},977145:(h,g,v,w,C)=>{e.$b("ReduceMin",h,{keepDims:!!g,noopWithEmptyAxes:!!v,axes:w?Array.from((k(),R).subarray(Number(w)>>>0,Number(C)>>>0)):[]})},977319:(h,g,v,w,C)=>{e.$b("ReduceProd",h,{keepDims:!!g,noopWithEmptyAxes:!!v,axes:w?Array.from((k(),R).subarray(Number(w)>>>0,Number(C)>>>0)):[]})},977494:(h,g,v,w,C)=>{e.$b("ReduceSum",h,{keepDims:!!g,noopWithEmptyAxes:!!v,axes:w?Array.from((k(),R).subarray(Number(w)>>>0,Number(C)>>>0)):[]})},977668:(h,g,v,w,C)=>{e.$b("ReduceL1",h,{keepDims:!!g,noopWithEmptyAxes:!!v,axes:w?Array.from((k(),R).subarray(Number(w)>>>0,Number(C)>>>0)):[]})},977841:(h,g,v,w,C)=>{e.$b("ReduceL2",h,{keepDims:!!g,noopWithEmptyAxes:!!v,axes:w?Array.from((k(),R).subarray(Number(w)>>>0,Number(C)>>>0)):[]})},978014:(h,g,v,w,C)=>{e.$b("ReduceLogSum",h,{keepDims:!!g,noopWithEmptyAxes:!!v,axes:w?Array.from((k(),R).subarray(Number(w)>>>0,Number(C)>>>0)):[]})},978191:(h,g,v,w,C)=>{e.$b("ReduceSumSquare",h,{keepDims:!!g,noopWithEmptyAxes:!!v,axes:w?Array.from((k(),R).subarray(Number(w)>>>0,Number(C)>>>0)):[]})},978371:(h,g,v,w,C)=>{e.$b("ReduceLogSumExp",h,{keepDims:!!g,noopWithEmptyAxes:!!v,axes:w?Array.from((k(),R).subarray(Number(w)>>>0,Number(C)>>>0)):[]})},978551:h=>{e.$b("Where",h,void 0)},978604:(h,g,v)=>{e.$b("Transpose",h,{perm:g?Array.from((k(),R).subarray(Number(g)>>>0,Number(v)>>>0)):[]})},978728:(h,g,v,w)=>{e.$b("DepthToSpace",h,{blocksize:g,mode:Oe(v),format:w?"NHWC":"NCHW"})},978861:(h,g,v,w)=>{e.$b("DepthToSpace",h,{blocksize:g,mode:Oe(v),format:w?"NHWC":"NCHW"})},978994:(h,g,v,w,C,I,z,G,X,Q,le,me,xe,ke,sr)=>{e.$b("ConvTranspose",h,{format:X?"NHWC":"NCHW",autoPad:g,dilations:[v],group:w,kernelShape:[C],pads:[I,z],strides:[G],wIsConst:()=>!!(k(),M)[Q>>>0],outputPadding:le?Array.from((k(),R).subarray(Number(le)>>>0,Number(me)>>>0)):[],outputShape:xe?Array.from((k(),R).subarray(Number(xe)>>>0,Number(ke)>>>0)):[],activation:Oe(sr)})},979427:(h,g,v,w,C,I,z,G,X,Q,le,me,xe,ke)=>{e.$b("ConvTranspose",h,{format:G?"NHWC":"NCHW",autoPad:g,dilations:Array.from((k(),R).subarray(Number(v)>>>0,2+(Number(v)>>>0)>>>0)),group:w,kernelShape:Array.from((k(),R).subarray(Number(C)>>>0,2+(Number(C)>>>0)>>>0)),pads:Array.from((k(),R).subarray(Number(I)>>>0,4+(Number(I)>>>0)>>>0)),strides:Array.from((k(),R).subarray(Number(z)>>>0,2+(Number(z)>>>0)>>>0)),wIsConst:()=>!!(k(),M)[X>>>0],outputPadding:Q?Array.from((k(),R).subarray(Number(Q)>>>0,Number(le)>>>0)):[],outputShape:me?Array.from((k(),R).subarray(Number(me)>>>0,Number(xe)>>>0)):[],activation:Oe(ke)})},980088:(h,g,v,w,C,I,z,G,X,Q,le,me,xe,ke,sr)=>{e.$b("ConvTranspose",h,{format:X?"NHWC":"NCHW",autoPad:g,dilations:[v],group:w,kernelShape:[C],pads:[I,z],strides:[G],wIsConst:()=>!!(k(),M)[Q>>>0],outputPadding:le?Array.from((k(),R).subarray(Number(le)>>>0,Number(me)>>>0)):[],outputShape:xe?Array.from((k(),R).subarray(Number(xe)>>>0,Number(ke)>>>0)):[],activation:Oe(sr)})},980521:(h,g,v,w,C,I,z,G,X,Q,le,me,xe,ke)=>{e.$b("ConvTranspose",h,{format:G?"NHWC":"NCHW",autoPad:g,dilations:Array.from((k(),R).subarray(Number(v)>>>0,2+(Number(v)>>>0)>>>0)),group:w,kernelShape:Array.from((k(),R).subarray(Number(C)>>>0,2+(Number(C)>>>0)>>>0)),pads:Array.from((k(),R).subarray(Number(I)>>>0,4+(Number(I)>>>0)>>>0)),strides:Array.from((k(),R).subarray(Number(z)>>>0,2+(Number(z)>>>0)>>>0)),wIsConst:()=>!!(k(),M)[X>>>0],outputPadding:Q?Array.from((k(),R).subarray(Number(Q)>>>0,Number(le)>>>0)):[],outputShape:me?Array.from((k(),R).subarray(Number(me)>>>0,Number(xe)>>>0)):[],activation:Oe(ke)})},981182:(h,g)=>{e.$b("GlobalAveragePool",h,{format:g?"NHWC":"NCHW"})},981273:(h,g,v,w,C,I,z,G,X,Q,le,me,xe,ke)=>{e.$b("AveragePool",h,{format:ke?"NHWC":"NCHW",auto_pad:g,ceil_mode:v,count_include_pad:w,storage_order:C,dilations:I?Array.from((k(),R).subarray(Number(I)>>>0,Number(z)>>>0)):[],kernel_shape:G?Array.from((k(),R).subarray(Number(G)>>>0,Number(X)>>>0)):[],pads:Q?Array.from((k(),R).subarray(Number(Q)>>>0,Number(le)>>>0)):[],strides:me?Array.from((k(),R).subarray(Number(me)>>>0,Number(xe)>>>0)):[]})},981752:(h,g)=>{e.$b("GlobalAveragePool",h,{format:g?"NHWC":"NCHW"})},981843:(h,g,v,w,C,I,z,G,X,Q,le,me,xe,ke)=>{e.$b("AveragePool",h,{format:ke?"NHWC":"NCHW",auto_pad:g,ceil_mode:v,count_include_pad:w,storage_order:C,dilations:I?Array.from((k(),R).subarray(Number(I)>>>0,Number(z)>>>0)):[],kernel_shape:G?Array.from((k(),R).subarray(Number(G)>>>0,Number(X)>>>0)):[],pads:Q?Array.from((k(),R).subarray(Number(Q)>>>0,Number(le)>>>0)):[],strides:me?Array.from((k(),R).subarray(Number(me)>>>0,Number(xe)>>>0)):[]})},982322:(h,g)=>{e.$b("GlobalMaxPool",h,{format:g?"NHWC":"NCHW"})},982409:(h,g,v,w,C,I,z,G,X,Q,le,me,xe,ke)=>{e.$b("MaxPool",h,{format:ke?"NHWC":"NCHW",auto_pad:g,ceil_mode:v,count_include_pad:w,storage_order:C,dilations:I?Array.from((k(),R).subarray(Number(I)>>>0,Number(z)>>>0)):[],kernel_shape:G?Array.from((k(),R).subarray(Number(G)>>>0,Number(X)>>>0)):[],pads:Q?Array.from((k(),R).subarray(Number(Q)>>>0,Number(le)>>>0)):[],strides:me?Array.from((k(),R).subarray(Number(me)>>>0,Number(xe)>>>0)):[]})},982884:(h,g)=>{e.$b("GlobalMaxPool",h,{format:g?"NHWC":"NCHW"})},982971:(h,g,v,w,C,I,z,G,X,Q,le,me,xe,ke)=>{e.$b("MaxPool",h,{format:ke?"NHWC":"NCHW",auto_pad:g,ceil_mode:v,count_include_pad:w,storage_order:C,dilations:I?Array.from((k(),R).subarray(Number(I)>>>0,Number(z)>>>0)):[],kernel_shape:G?Array.from((k(),R).subarray(Number(G)>>>0,Number(X)>>>0)):[],pads:Q?Array.from((k(),R).subarray(Number(Q)>>>0,Number(le)>>>0)):[],strides:me?Array.from((k(),R).subarray(Number(me)>>>0,Number(xe)>>>0)):[]})},983446:(h,g,v,w,C)=>{e.$b("Gemm",h,{alpha:g,beta:v,transA:w,transB:C})},983550:h=>{e.$b("MatMul",h,void 0)},983604:(h,g,v,w)=>{e.$b("ArgMax",h,{keepDims:!!g,selectLastIndex:!!v,axis:w})},983712:(h,g,v,w)=>{e.$b("ArgMin",h,{keepDims:!!g,selectLastIndex:!!v,axis:w})},983820:(h,g)=>{e.$b("Softmax",h,{axis:g})},983883:(h,g)=>{e.$b("Concat",h,{axis:g})},983943:(h,g,v,w,C)=>{e.$b("Split",h,{axis:g,numOutputs:v,splitSizes:w?Array.from((k(),R).subarray(Number(w)>>>0,Number(C)>>>0)):[]})},984099:h=>{e.$b("Expand",h,void 0)},984153:(h,g)=>{e.$b("Gather",h,{axis:Number(g)})},984224:(h,g)=>{e.$b("GatherElements",h,{axis:Number(g)})},984303:(h,g)=>{e.$b("GatherND",h,{batch_dims:Number(g)})},984382:(h,g,v,w,C,I,z,G,X,Q,le)=>{e.$b("Resize",h,{antialias:g,axes:v?Array.from((k(),R).subarray(Number(v)>>>0,Number(w)>>>0)):[],coordinateTransformMode:Oe(C),cubicCoeffA:I,excludeOutside:z,extrapolationValue:G,keepAspectRatioPolicy:Oe(X),mode:Oe(Q),nearestMode:Oe(le)})},984744:(h,g,v,w,C,I,z)=>{e.$b("Slice",h,{starts:g?Array.from((k(),R).subarray(Number(g)>>>0,Number(v)>>>0)):[],ends:w?Array.from((k(),R).subarray(Number(w)>>>0,Number(C)>>>0)):[],axes:I?Array.from((k(),R).subarray(Number(I)>>>0,Number(z)>>>0)):[]})},985008:h=>{e.$b("Tile",h,void 0)},985060:(h,g,v)=>{e.$b("InstanceNormalization",h,{epsilon:g,format:v?"NHWC":"NCHW"})},985174:(h,g,v)=>{e.$b("InstanceNormalization",h,{epsilon:g,format:v?"NHWC":"NCHW"})},985288:h=>{e.$b("Range",h,void 0)},985341:(h,g)=>{e.$b("Einsum",h,{equation:Oe(g)})},985422:(h,g,v,w,C)=>{e.$b("Pad",h,{mode:g,value:v,pads:w?Array.from((k(),R).subarray(Number(w)>>>0,Number(C)>>>0)):[]})},985565:(h,g,v,w,C,I)=>{e.$b("BatchNormalization",h,{epsilon:g,momentum:v,spatial:!!C,trainingMode:!!w,format:I?"NHWC":"NCHW"})},985734:(h,g,v,w,C,I)=>{e.$b("BatchNormalization",h,{epsilon:g,momentum:v,spatial:!!C,trainingMode:!!w,format:I?"NHWC":"NCHW"})},985903:(h,g,v)=>{e.$b("CumSum",h,{exclusive:Number(g),reverse:Number(v)})},986e3:(h,g,v)=>{e.$b("DequantizeLinear",h,{axis:g,blockSize:v})},986090:(h,g,v,w,C)=>{e.$b("GridSample",h,{align_corners:g,mode:Oe(v),padding_mode:Oe(w),format:C?"NHWC":"NCHW"})},986260:(h,g,v,w,C)=>{e.$b("GridSample",h,{align_corners:g,mode:Oe(v),padding_mode:Oe(w),format:C?"NHWC":"NCHW"})},986430:(h,g)=>{e.$b("ScatterND",h,{reduction:Oe(g)})},986515:(h,g,v,w,C,I,z,G,X)=>{e.$b("Attention",h,{numHeads:g,isUnidirectional:v,maskFilterValue:w,scale:C,doRotary:I,qkvHiddenSizes:z?Array.from((k(),R).subarray(Number(G)>>>0,Number(G)+z>>>0)):[],pastPresentShareBuffer:!!X})},986787:h=>{e.$b("BiasAdd",h,void 0)},986842:h=>{e.$b("BiasSplitGelu",h,void 0)},986903:h=>{e.$b("FastGelu",h,void 0)},986959:(h,g,v,w,C,I,z,G,X,Q,le,me,xe,ke,sr,Pn)=>{e.$b("Conv",h,{format:me?"NHWC":"NCHW",auto_pad:g,dilations:v?Array.from((k(),R).subarray(Number(v)>>>0,Number(w)>>>0)):[],group:C,kernel_shape:I?Array.from((k(),R).subarray(Number(I)>>>0,Number(z)>>>0)):[],pads:G?Array.from((k(),R).subarray(Number(G)>>>0,Number(X)>>>0)):[],strides:Q?Array.from((k(),R).subarray(Number(Q)>>>0,Number(le)>>>0)):[],w_is_const:()=>!!(k(),M)[Number(xe)>>>0],activation:Oe(ke),activation_params:sr?Array.from((k(),O).subarray(Number(sr)>>>0,Number(Pn)>>>0)):[]})},987543:h=>{e.$b("Gelu",h,void 0)},987595:(h,g,v,w,C,I,z,G,X)=>{e.$b("GroupQueryAttention",h,{numHeads:g,kvNumHeads:v,scale:w,softcap:C,doRotary:I,rotaryInterleaved:z,smoothSoftmax:G,localWindowSize:X})},987812:(h,g,v,w)=>{e.$b("LayerNormalization",h,{axis:g,epsilon:v,simplified:!!w})},987923:(h,g,v,w)=>{e.$b("LayerNormalization",h,{axis:g,epsilon:v,simplified:!!w})},988034:(h,g,v,w,C,I)=>{e.$b("MatMulNBits",h,{k:g,n:v,accuracyLevel:w,bits:C,blockSize:I})},988161:(h,g,v,w,C,I)=>{e.$b("MultiHeadAttention",h,{numHeads:g,isUnidirectional:v,maskFilterValue:w,scale:C,doRotary:I})},988320:(h,g)=>{e.$b("QuickGelu",h,{alpha:g})},988384:(h,g,v,w,C)=>{e.$b("RotaryEmbedding",h,{interleaved:!!g,numHeads:v,rotaryEmbeddingDim:w,scale:C})},988523:(h,g,v)=>{e.$b("SkipLayerNormalization",h,{epsilon:g,simplified:!!v})},988625:(h,g,v)=>{e.$b("SkipLayerNormalization",h,{epsilon:g,simplified:!!v})},988727:(h,g,v,w)=>{e.$b("GatherBlockQuantized",h,{gatherAxis:g,quantizeAxis:v,blockSize:w})},988848:h=>{e.Fd(h)},988882:(h,g)=>e.Hd(Number(h),Number(g),e.Yc.Kd,e.Yc.errors)};function yw(h,g,v){return ku(async()=>{await e.Dd(Number(h),Number(g),Number(v))})}function _w(){return typeof wasmOffsetConverter<"u"}function bw(h,g,v,w){var C=de();try{return ad(h,g,v,w)}catch(I){if(ue(C),I!==I+0)throw I;ce(1,0)}}function ww(h,g,v){var w=de();try{return rd(h,g,v)}catch(C){if(ue(w),C!==C+0)throw C;ce(1,0)}}function xw(h){var g=de();try{Ju(h)}catch(v){if(ue(g),v!==v+0)throw v;ce(1,0)}}function vw(h,g){var v=de();try{return Mn(h,g)}catch(w){if(ue(v),w!==w+0)throw w;ce(1,0)}}function $w(h,g,v){var w=de();try{Qu(h,g,v)}catch(C){if(ue(w),C!==C+0)throw C;ce(1,0)}}function kw(h,g){var v=de();try{od(h,g)}catch(w){if(ue(v),w!==w+0)throw w;ce(1,0)}}function Sw(h,g,v,w,C,I,z){var G=de();try{return sd(h,g,v,w,C,I,z)}catch(X){if(ue(G),X!==X+0)throw X;ce(1,0)}}function Cw(h,g,v,w,C,I){var z=de();try{ed(h,g,v,w,C,I)}catch(G){if(ue(z),G!==G+0)throw G;ce(1,0)}}function Tw(h,g,v,w){var C=de();try{nd(h,g,v,w)}catch(I){if(ue(C),I!==I+0)throw I;ce(1,0)}}function Ew(h,g,v,w,C){var I=de();try{td(h,g,v,w,C)}catch(z){if(ue(I),z!==z+0)throw z;ce(1,0)}}function Aw(h,g,v,w,C,I,z){var G=de();try{ud(h,g,v,w,C,I,z)}catch(X){if(ue(G),X!==X+0)throw X;ce(1,0)}}function Iw(h,g,v,w,C,I,z){var G=de();try{dd(h,g,v,w,C,I,z)}catch(X){if(ue(G),X!==X+0)throw X;ce(1,0)}}function Mw(h,g,v,w,C,I,z,G){var X=de();try{fd(h,g,v,w,C,I,z,G)}catch(Q){if(ue(X),Q!==Q+0)throw Q;ce(1,0)}}function zw(h,g,v,w,C){var I=de();try{return ld(h,g,v,w,C)}catch(z){if(ue(I),z!==z+0)throw z;ce(1,0)}}function Pw(h,g,v){var w=de();try{return md(h,g,v)}catch(C){if(ue(w),C!==C+0)throw C;ce(1,0)}}function Rw(h,g,v,w,C,I,z,G){var X=de();try{gd(h,g,v,w,C,I,z,G)}catch(Q){if(ue(X),Q!==Q+0)throw Q;ce(1,0)}}function Bw(h,g,v,w,C,I,z,G,X,Q,le,me){var xe=de();try{cd(h,g,v,w,C,I,z,G,X,Q,le,me)}catch(ke){if(ue(xe),ke!==ke+0)throw ke;ce(1,0)}}function Ow(h,g,v,w,C,I){var z=de();try{return hd(h,g,v,w,C,I)}catch(G){if(ue(z),G!==G+0)throw G;ce(1,0)}}function Dw(h,g,v){var w=de();try{return yd(h,g,v)}catch(C){if(ue(w),C!==C+0)throw C;return ce(1,0),0n}}function Nw(h,g,v,w,C,I,z,G,X){var Q=de();try{id(h,g,v,w,C,I,z,G,X)}catch(le){if(ue(Q),le!==le+0)throw le;ce(1,0)}}function Lw(h){var g=de();try{return _d(h)}catch(v){if(ue(g),v!==v+0)throw v;ce(1,0)}}function Gw(h,g){var v=de();try{return Pd(h,g)}catch(w){if(ue(v),w!==w+0)throw w;return ce(1,0),0n}}function Uw(h){var g=de();try{return bd(h)}catch(v){if(ue(g),v!==v+0)throw v;return ce(1,0),0n}}function Vw(h,g,v,w){var C=de();try{return Sd(h,g,v,w)}catch(I){if(ue(C),I!==I+0)throw I;ce(1,0)}}function Fw(h,g,v,w,C){var I=de();try{return Cd(h,g,v,w,C)}catch(z){if(ue(I),z!==z+0)throw z;ce(1,0)}}function Ww(h,g,v,w,C,I){var z=de();try{return Td(h,g,v,w,C,I)}catch(G){if(ue(z),G!==G+0)throw G;ce(1,0)}}function qw(h,g,v,w,C,I){var z=de();try{return Ed(h,g,v,w,C,I)}catch(G){if(ue(z),G!==G+0)throw G;ce(1,0)}}function Hw(h,g,v,w,C,I,z,G){var X=de();try{return pd(h,g,v,w,C,I,z,G)}catch(Q){if(ue(X),Q!==Q+0)throw Q;ce(1,0)}}function jw(h,g,v,w,C){var I=de();try{return Ad(h,g,v,w,C)}catch(z){if(ue(I),z!==z+0)throw z;return ce(1,0),0n}}function Yw(h,g,v,w){var C=de();try{return Id(h,g,v,w)}catch(I){if(ue(C),I!==I+0)throw I;ce(1,0)}}function Xw(h,g,v,w){var C=de();try{return Md(h,g,v,w)}catch(I){if(ue(C),I!==I+0)throw I;ce(1,0)}}function Kw(h,g,v,w,C,I,z,G,X,Q,le,me){var xe=de();try{return zd(h,g,v,w,C,I,z,G,X,Q,le,me)}catch(ke){if(ue(xe),ke!==ke+0)throw ke;ce(1,0)}}function Zw(h,g,v,w,C,I,z,G,X,Q,le){var me=de();try{$d(h,g,v,w,C,I,z,G,X,Q,le)}catch(xe){if(ue(me),xe!==xe+0)throw xe;ce(1,0)}}function Qw(h,g,v,w,C,I,z,G,X,Q,le,me,xe,ke,sr,Pn){var rx=de();try{kd(h,g,v,w,C,I,z,G,X,Q,le,me,xe,ke,sr,Pn)}catch(Rn){if(ue(rx),Rn!==Rn+0)throw Rn;ce(1,0)}}function Jw(h,g,v){var w=de();try{return wd(h,g,v)}catch(C){if(ue(w),C!==C+0)throw C;ce(1,0)}}function ex(h,g,v){var w=de();try{return xd(h,g,v)}catch(C){if(ue(w),C!==C+0)throw C;ce(1,0)}}function tx(h,g,v,w){var C=de();try{vd(h,g,v,w)}catch(I){if(ue(C),I!==I+0)throw I;ce(1,0)}}function hs(){if(0<We)qe=hs;else if(s)y==null||y(e),Z();else{for(var h=Le;0<h.length;)h.shift()(e);0<We?qe=hs:(e.calledRun=!0,T||(Z(),y==null||y(e)))}}return s||(qt=await Fe(),hs()),e.PTR_SIZE=4,H?e:new Promise((h,g)=>{y=h,b=g})}var R0,dh,jk=j(()=>{var t,e;R0=uh,dh=(e=(t=globalThis.self)==null?void 0:t.name)==null?void 0:e.startsWith("em-pthread"),dh&&uh()}),Sa,Do,ch,dt,B0,As,hh,ph,Ca,fh,Ta,O0,Ea,D0,vl=j(()=>{xl(),Sa=typeof location>"u"?void 0:location.origin,Do=import.meta.url>"file:"&&import.meta.url<"file;",ch=()=>{{if(Do){let t=URL;return new URL(new t("ort.bundle.min.mjs",import.meta.url).href,Sa).href}return import.meta.url}},dt=ch(),B0=()=>{if(dt&&!dt.startsWith("blob:"))return dt.substring(0,dt.lastIndexOf("/")+1)},As=(t,e)=>{try{let r=e??dt;return(r?new URL(t,r):new URL(t)).origin===Sa}catch{return!1}},hh=(t,e)=>{let r=e??dt;try{return(r?new URL(t,r):new URL(t)).href}catch{return}},ph=(t,e)=>`${e??"./"}${t}`,Ca=async t=>{let e=await(await fetch(t,{credentials:"same-origin"})).blob();return URL.createObjectURL(e)},fh=async t=>(await import(t)).default,Ta=(Hk(),Zi(M0)).default,O0=async()=>{if(!dt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(As(dt))return[void 0,Ta()];let t=await Ca(dt);return[t,Ta(t)]},Ea=(jk(),Zi(P0)).default,D0=async(t,e,r,i)=>{let s=Ea&&!(t||e);if(s)if(dt)s=As(dt)||i&&!r;else if(i&&!r)s=!0;else throw new Error("cannot determine the script source URL.");if(s)return[void 0,Ea];{let n="ort-wasm-simd-threaded.jsep.mjs",a=t??hh(n,e),o=r&&a&&!As(a,e),l=o?await Ca(a):a??ph(n,e);return[o?l:void 0,await fh(l)]}}}),Aa,Is,bi,Ia,mh,gh,yh,$l,ve,Nr=j(()=>{vl(),Is=!1,bi=!1,Ia=!1,mh=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},gh=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},yh=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},$l=async t=>{if(Is)return Promise.resolve();if(bi)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Ia)throw new Error("previous call to 'initializeWebAssembly()' failed.");bi=!0;let e=t.initTimeout,r=t.numThreads;if(t.simd!==!1){if(t.simd==="relaxed"){if(!yh())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!gh())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=mh();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),t.numThreads=r=1);let s=t.wasmPaths,n=typeof s=="string"?s:void 0,a=s==null?void 0:s.mjs,o=(a==null?void 0:a.href)??a,l=s==null?void 0:s.wasm,u=(l==null?void 0:l.href)??l,d=t.wasmBinary,[c,p]=await D0(o,n,r>1,!!d||!!u),f=!1,m=[];if(e>0&&m.push(new Promise(y=>{setTimeout(()=>{f=!0,y()},e)})),m.push(new Promise((y,b)=>{let _={numThreads:r};if(d)_.wasmBinary=d,_.locateFile=x=>x;else if(u||n)_.locateFile=x=>u??n+x;else if(o&&o.indexOf("blob:")!==0)_.locateFile=x=>new URL(x,o).href;else if(c){let x=B0();x&&(_.locateFile=$=>x+$)}p(_).then(x=>{bi=!1,Is=!0,Aa=x,y(),c&&URL.revokeObjectURL(c)},x=>{bi=!1,Ia=!0,b(x)})})),await Promise.race(m),f)throw new Error(`WebAssembly backend initializing failed due to timeout: ${e}ms`)},ve=()=>{if(Is&&Aa)return Aa;throw new Error("WebAssembly is not initialized yet.")}}),Et,Zs,we,kl=j(()=>{Nr(),Et=(t,e)=>{let r=ve(),i=r.lengthBytesUTF8(t)+1,s=r._malloc(i);return r.stringToUTF8(t,s,i),e.push(s),s},Zs=(t,e,r,i)=>{if(typeof t=="object"&&t!==null){if(r.has(t))throw new Error("Circular reference in options");r.add(t)}Object.entries(t).forEach(([s,n])=>{let a=e?e+s:s;if(typeof n=="object")Zs(n,a+".",r,i);else if(typeof n=="string"||typeof n=="number")i(a,n.toString());else if(typeof n=="boolean")i(a,n?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof n}`)})},we=t=>{let e=ve(),r=e.stackSave();try{let i=e.PTR_SIZE,s=e.stackAlloc(2*i);e._OrtGetLastError(s,s+i);let n=Number(e.getValue(s,i===4?"i32":"i64")),a=e.getValue(s+i,"*"),o=a?e.UTF8ToString(a):"";throw new Error(`${t} ERROR_CODE: ${n}, ERROR_MESSAGE: ${o}`)}finally{e.stackRestore(r)}}}),N0,Yk=j(()=>{Nr(),kl(),N0=t=>{let e=ve(),r=0,i=[],s=t||{};try{if((t==null?void 0:t.logSeverityLevel)===void 0)s.logSeverityLevel=2;else if(typeof t.logSeverityLevel!="number"||!Number.isInteger(t.logSeverityLevel)||t.logSeverityLevel<0||t.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${t.logSeverityLevel}`);if((t==null?void 0:t.logVerbosityLevel)===void 0)s.logVerbosityLevel=0;else if(typeof t.logVerbosityLevel!="number"||!Number.isInteger(t.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${t.logVerbosityLevel}`);(t==null?void 0:t.terminate)===void 0&&(s.terminate=!1);let n=0;return(t==null?void 0:t.tag)!==void 0&&(n=Et(t.tag,i)),r=e._OrtCreateRunOptions(s.logSeverityLevel,s.logVerbosityLevel,!!s.terminate,n),r===0&&we("Can't create run options."),(t==null?void 0:t.extra)!==void 0&&Zs(t.extra,"",new WeakSet,(a,o)=>{let l=Et(a,i),u=Et(o,i);e._OrtAddRunConfigEntry(r,l,u)!==0&&we(`Can't set a run config entry: ${a} - ${o}.`)}),[r,i]}catch(n){throw r!==0&&e._OrtReleaseRunOptions(r),i.forEach(a=>e._free(a)),n}}}),_h,bh,wh,yr,xh,L0,Xk=j(()=>{Nr(),kl(),_h=t=>{switch(t){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${t}`)}},bh=t=>{switch(t){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${t}`)}},wh=t=>{t.extra||(t.extra={}),t.extra.session||(t.extra.session={});let e=t.extra.session;e.use_ort_model_bytes_directly||(e.use_ort_model_bytes_directly="1"),t.executionProviders&&t.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(t.enableMemPattern=!1)},yr=(t,e,r,i)=>{let s=Et(e,i),n=Et(r,i);ve()._OrtAddSessionConfigEntry(t,s,n)!==0&&we(`Can't set a session config entry: ${e} - ${r}.`)},xh=async(t,e,r)=>{let i=e.executionProviders;for(let s of i){let n=typeof s=="string"?s:s.name,a=[];switch(n){case"webnn":if(n="WEBNN",yr(t,"session.disable_quant_qdq","1",r),yr(t,"session.disable_qdq_constant_folding","1",r),typeof s!="string"){let c=s==null?void 0:s.deviceType;c&&yr(t,"deviceType",c,r)}break;case"webgpu":if(n="JS",typeof s!="string"){let c=s;if(c!=null&&c.preferredLayout){if(c.preferredLayout!=="NCHW"&&c.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${c.preferredLayout}`);yr(t,"preferredLayout",c.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${n}`)}let o=Et(n,r),l=a.length,u=0,d=0;if(l>0){u=ve()._malloc(l*ve().PTR_SIZE),r.push(u),d=ve()._malloc(l*ve().PTR_SIZE),r.push(d);for(let c=0;c<l;c++)ve().setValue(u+c*ve().PTR_SIZE,a[c][0],"*"),ve().setValue(d+c*ve().PTR_SIZE,a[c][1],"*")}await ve()._OrtAppendExecutionProvider(t,o,u,d,l)!==0&&we(`Can't append execution provider: ${n}.`)}},L0=async t=>{let e=ve(),r=0,i=[],s=t||{};wh(s);try{let n=_h(s.graphOptimizationLevel??"all"),a=bh(s.executionMode??"sequential"),o=typeof s.logId=="string"?Et(s.logId,i):0,l=s.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log severity level is not valid: ${l}`);let u=s.logVerbosityLevel??0;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log verbosity level is not valid: ${u}`);let d=typeof s.optimizedModelFilePath=="string"?Et(s.optimizedModelFilePath,i):0;if(r=e._OrtCreateSessionOptions(n,!!s.enableCpuMemArena,!!s.enableMemPattern,a,!!s.enableProfiling,0,o,l,u,d),r===0&&we("Can't create session options."),s.executionProviders&&await xh(r,s,i),s.enableGraphCapture!==void 0){if(typeof s.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${s.enableGraphCapture}`);yr(r,"enableGraphCapture",s.enableGraphCapture.toString(),i)}if(s.freeDimensionOverrides)for(let[c,p]of Object.entries(s.freeDimensionOverrides)){if(typeof c!="string")throw new Error(`free dimension override name must be a string: ${c}`);if(typeof p!="number"||!Number.isInteger(p)||p<0)throw new Error(`free dimension override value must be a non-negative integer: ${p}`);let f=Et(c,i);e._OrtAddFreeDimensionOverride(r,f,p)!==0&&we(`Can't set a free dimension override: ${c} - ${p}.`)}return s.extra!==void 0&&Zs(s.extra,"",new WeakSet,(c,p)=>{yr(r,c,p,i)}),[r,i]}catch(n){throw r!==0&&e._OrtReleaseSessionOptions(r)!==0&&we("Can't release session options."),i.forEach(a=>e._free(a)),n}}}),Ar,Yt,Ir,hn,Qs,Sl,Cl,No,ie=j(()=>{Ar=t=>{switch(t){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${t}`)}},Yt=t=>{switch(t){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${t}`)}},Ir=(t,e)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][t],i=typeof e=="number"?e:e.reduce((s,n)=>s*n,1);return r>0?Math.ceil(i*r):void 0},hn=t=>{switch(t){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${t}`)}},Qs=t=>{switch(t){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${t}`)}},Sl=t=>t==="float32"||t==="float16"||t==="int32"||t==="int64"||t==="uint32"||t==="uint8"||t==="bool"||t==="uint4"||t==="int4",Cl=t=>t==="float32"||t==="float16"||t==="int32"||t==="int64"||t==="uint32"||t==="uint64"||t==="int8"||t==="uint8"||t==="bool"||t==="uint4"||t==="int4",No=t=>{switch(t){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${t}`)}}}),Tl,G0=j(()=>{xl(),Tl=async t=>{if(typeof t=="string"){let e=await fetch(t);if(!e.ok)throw new Error(`failed to load external data file: ${t}`);let r=e.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await e.arrayBuffer());{if(!e.body)throw new Error(`failed to load external data file: ${t}, no response body.`);let s=e.body.getReader(),n;try{n=new ArrayBuffer(i)}catch(o){if(o instanceof RangeError){let l=Math.ceil(i/65536);n=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw o}let a=0;for(;;){let{done:o,value:l}=await s.read();if(o)break;let u=l.byteLength;new Uint8Array(n,a,u).set(l),a+=u}return new Uint8Array(n,0,i)}}else return t instanceof Blob?new Uint8Array(await t.arrayBuffer()):t instanceof Uint8Array?t:new Uint8Array(t)}}),vh,$h,kh,Sh,El,Ch,pe,Jt=j(()=>{ie(),vh=["V","I","W","E","F"],$h=(t,e)=>{console.log(`[${vh[t]},${new Date().toISOString()}]${e}`)},El=(t,e)=>{kh=t,Sh=e},Ch=(t,e)=>{let r=Qs(t),i=Qs(kh);r>=i&&$h(r,typeof e=="function"?e():e)},pe=(...t)=>{Sh&&Ch(...t)}}),Th,ii,D,Js,U0,V0,F0,ne=j(()=>{Th=class{static calcMatMulShape(t,e){return t[1]!==e[0]?void 0:[t[0],e[1]]}},ii=class{static calcShape(t,e,r=!1){let i=t.length,s=e.length;if(i===0)return e;if(s===0)return t;let n=Math.max(t.length,e.length),a=new Array(n);if(r){if(i<2||s<2)return;let o=Th.calcMatMulShape([t[i-2],t[i-1]],[e[s-2],e[s-1]]);if(o===void 0)return;[a[n-2],a[n-1]]=o}for(let o=r?3:1;o<=n;o++){let l=i-o<0?1:t[i-o],u=s-o<0?1:e[s-o];if(l!==u&&l>1&&u>1)return;let d=Math.max(l,u);if(l&&u)a[n-o]=Math.max(l,u);else{if(d>1)return;a[n-o]=0}}return a}static isValidBroadcast(t,e){let r=t.length,i=e.length;if(r>i)return!1;for(let s=1;s<=r;s++)if(t[r-s]!==1&&t[r-s]!==e[i-s])return!1;return!0}},D=class Ws{static size(e){return Ws.getSizeFromDimensionRange(e,0,e.length)}static convertShape(e,r=4){let i=e.length;if(i===0)return[];let s=new Array(i),n=i-1;for(;n>=0;){if(e[n]%r===0){s[n]=e[n]/r;break}if(r%e[n]!==0)throw new Error("cannot convert shape");s[n]=1,r/=e[n],n--}for(n--;n>=0;n--)s[n]=e[n];return s}static sizeFromDimension(e,r){if(r<0||r>e.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${e.length} dimensions.`);return Ws.getSizeFromDimensionRange(e,r,e.length)}static sizeToDimension(e,r){if(r<0||r>e.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${e.length} dimensions.`);return Ws.getSizeFromDimensionRange(e,0,r)}static getSizeFromDimensionRange(e,r,i){let s=1;for(let n=r;n<i;n++){if(e[n]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");s*=Number(e[n])}return s}static computeStrides(e){let r=e.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=e[r-1];for(let s=r-3;s>=0;--s)i[s]=i[s+1]*e[s+1];return i}static normalizeAxis(e,r){if(e<-r&&e>=r)throw new Error("unsupported axis for this operation.");return e<0?e+r:e}static normalizeAxes(e,r){return e.map(i=>this.normalizeAxis(i,r??e.length))}static sortBasedOnPerm(e,r){return r?r.map(i=>e[i]):e.slice().reverse()}static padShape(e,r){let i=e.length;return e.map((s,n)=>s+r[n]+r[n+i])}static areEqual(e,r){return e.length!==r.length?!1:e.every((i,s)=>i===r[s])}},Js=class Pi{static adjustPoolAttributes(e,r,i,s,n,a){if(!e&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(e)for(let o=0;o<r.length-2;o++)o>=i.length?i.push(r[o+2]):i[o]=r[o+2];for(let o=0;o<i.length;o++)if(o<s.length){if(s[o]<0)throw new Error("strides should be greater than or equal to 1")}else s.push(1);for(let o=0;o<i.length;o++)if(o<n.length){if(n[o]<0)throw new Error("dilations should be greater than or equal to 1")}else n.push(1);for(let o=0;o<i.length*2;o++)if(o<a.length){if(a[o]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let o=0;o<i.length;o++){if(i[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[o]>=i[o]||a[o+i.length]>=i[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(e,r,i,s,n,a,o){if(o){if(n.length!==2*(e.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==e.length-2)throw new Error("length of strides should be the length of data dimensions");if(s.length!==e.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<e.length-2;l++)Pi.adjustPadAndReturnShape(e[l+(a?1:2)],r[l],i[l],s[l],n,l,l+e.length-2,o)}}static computePoolOutputShape(e,r,i,s,n,a,o){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return Pi.computeShapeHelper(e,r,l,i,s,n,a,o),l}static computeConvOutputShape(e,r,i,s,n,a,o){if(e.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[e[0],r[0]];return Pi.computeShapeHelper(!1,e,l,i,s,n,a,o),l}static computeShapeHelper(e,r,i,s,n,a,o,l){if(e)for(let u=0;u<r.length-2;u++)i.push(1);else for(let u=0;u<r.length-2;u++)i.push(Pi.adjustPadAndReturnShape(r[u+2],s[u],n[u],a[u],o,u,u+r.length-2,l))}static adjustPadAndReturnShape(e,r,i,s,n,a,o,l){let u=i*(s-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return n[a]=0,n[o]=0,Math.floor((e-u)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let d=((e+r-1)/r-1)*r+s-e;return n[a]=Math.floor(l==="SAME_LOWER"?(d+1)/2:d/2),n[o]=d-n[a],Math.floor((e+d-s)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((e+n[a]+n[o]-u)/r+1)}},U0=class{static getShapeOfGemmResult(t,e,r,i,s){if(t.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let n,a,o;e?(n=t[1],a=t[0]):(n=t[0],a=t[1]);let l=-1;if(i?(o=r[0],l=1):(o=r[1],l=0),r[l]!==a)throw new Error("dimension mismatch");if(n<=0||o<=0||a<=0)throw new Error("invalid shape specified");if(s&&!ii.isValidBroadcast(s,[n,o]))throw new Error("gemm: invalid bias shape for broadcast");return[n,o,a]}},V0=-34028234663852886e22,F0=34028234663852886e22}),Al,W0=j(()=>{ie(),Al=(t,e)=>new(hn(e))(t)}),Ma,Lo,za,Eh,Pa,Ah,Ra,Ba,Oa,Ih,q0,Kk=j(()=>{ie(),Jt(),Ma=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Lo=(t,e)=>{if(e==="int32")return t;let r=Ma.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);let i=r/8;if(t.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let s=t.byteLength/i,n=new(hn(e))(t.buffer,t.byteOffset,s);switch(e){case"int64":case"uint64":{let a=new Int32Array(s);for(let o=0;o<s;o++){let l=n[o];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");a[o]=Number(l)}return new Uint8Array(a.buffer)}case"int8":case"uint8":case"uint32":{if(e==="uint32"&&n.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let a=Int32Array.from(n,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from ${e} to 'int32'`)}},za=(t,e)=>{if(e==="int32")return t;if(t.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=t.byteLength/4,i=new Int32Array(t.buffer,t.byteOffset,r);switch(e){case"int64":{let s=BigInt64Array.from(i,BigInt);return new Uint8Array(s.buffer)}case"uint64":{if(i.some(n=>n<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let s=BigUint64Array.from(i,BigInt);return new Uint8Array(s.buffer)}case"int8":{if(i.some(n=>n<-128||n>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let s=Int8Array.from(i,Number);return new Uint8Array(s.buffer)}case"uint8":{if(i.some(s=>s<0||s>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(n=>n<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let s=Uint32Array.from(i,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${e}`)}},Eh=1,Pa=()=>Eh++,Ah=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Ra=(t,e)=>{let r=Ma.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);return e.length>0?Math.ceil(e.reduce((i,s)=>i*s)*r/8):0},Ba=class{constructor(t){this.isDataConverted=!1;let{sessionId:e,context:r,tensor:i,dataType:s,shape:n,fallbackDataType:a}=t;this.sessionId=e,this.mlContext=r,this.mlTensor=i,this.dataType=s,this.tensorShape=n,this.fallbackDataType=a}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Ra(this.dataType,this.tensorShape)}destroy(){pe("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(t){this.mlContext.writeTensor(this.mlTensor,t)}async read(t){if(this.fallbackDataType){let e=await this.mlContext.readTensor(this.mlTensor),r=za(new Uint8Array(e),this.dataType);if(t){(t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)).set(r);return}else return r.buffer}else return t?this.mlContext.readTensor(this.mlTensor,t):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(t,e,r){return this.mlContext===t&&this.dataType===e&&this.tensorShape.length===r.length&&this.tensorShape.every((i,s)=>i===r[s])}setIsDataConverted(t){this.isDataConverted=t}},Oa=class{constructor(t,e){this.tensorManager=t,this.wrapper=e}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(t,e,r,i){let s=this.tensorManager.getMLContext(t),n=this.tensorManager.getMLOpSupportLimits(t),a;if(!(n!=null&&n.input.dataTypes.includes(e))){if(a=Ah.get(e),!a||(n==null?void 0:n.input.dataTypes.includes(a)))throw new Error(`WebNN backend does not support data type: ${e}`);pe("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${e} to ${a}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(s,e,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==Ra(e,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(t,e,r,o,!0,!0,a),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(t){let e=t;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")e=Lo(t,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(t.byteLength===this.wrapper.byteLength){this.wrapper.write(e);return}else pe("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(e):this.activeUpload=new Uint8Array(e)}async download(t){var e,r;if(this.activeUpload){let i=(e=this.wrapper)!=null&&e.isDataConverted?za(this.activeUpload,(r=this.wrapper)==null?void 0:r.type):this.activeUpload;if(t){t instanceof ArrayBuffer?new Uint8Array(t).set(i):new Uint8Array(t.buffer,t.byteOffset,t.byteLength).set(i);return}else return i.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return t?this.wrapper.read(t):this.wrapper.read()}},Ih=class{constructor(t){this.backend=t,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(t){let e=this.backend.getMLContext(t);if(!e)throw new Error("MLContext not found for session.");return e}getMLOpSupportLimits(t){return this.backend.getMLOpSupportLimits(t)}reserveTensorId(){let t=Pa();return this.tensorTrackersById.set(t,new Oa(this)),t}releaseTensorId(t){let e=this.tensorTrackersById.get(t);e&&(this.tensorTrackersById.delete(t),e.tensorWrapper&&this.releaseTensor(e.tensorWrapper))}async ensureTensor(t,e,r,i,s){pe("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${e}, dataType: ${r}, shape: ${i}, copyOld: ${s}}`);let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");return n.ensureTensor(t,r,i,s)}upload(t,e){let r=this.tensorTrackersById.get(t);if(!r)throw new Error("Tensor not found.");r.upload(e)}async download(t,e){pe("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${t}, dstBuffer: ${e==null?void 0:e.byteLength}}`);let r=this.tensorTrackersById.get(t);if(!r)throw new Error("Tensor not found.");return r.download(e)}releaseTensorsForSession(t){for(let e of this.freeTensors)e.sessionId===t&&e.destroy();this.freeTensors=this.freeTensors.filter(e=>e.sessionId!==t)}registerTensor(t,e,r,i){let s=this.getMLContext(t),n=Pa(),a=new Ba({sessionId:t,context:s,tensor:e,dataType:r,shape:i});return this.tensorTrackersById.set(n,new Oa(this,a)),this.externalTensors.add(a),n}async getCachedTensor(t,e,r,i,s,n,a){let o=this.getMLContext(t);for(let[u,d]of this.freeTensors.entries())if(d.canReuseTensor(o,e,r)){pe("verbose",()=>`[WebNN] Reusing tensor {dataType: ${e}, ${a?`fallbackDataType: ${a},`:""} shape: ${r}`);let c=this.freeTensors.splice(u,1)[0];return c.sessionId=t,c}pe("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${e}, ${a?`fallbackDataType: ${a},`:""} shape: ${r}}`);let l=await o.createTensor({dataType:a??e,shape:r,dimensions:r,usage:i,writable:s,readable:n});return new Ba({sessionId:t,context:o,tensor:l,dataType:e,shape:r,fallbackDataType:a})}releaseTensor(t){this.externalTensors.has(t)&&this.externalTensors.delete(t),this.freeTensors.push(t)}},q0=(...t)=>new Ih(...t)}),wi,Mh,H0,Zk=j(()=>{ie(),Nr(),W0(),Kk(),Jt(),wi=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Mh=(t,e)=>{if(t===e)return!0;if(t===void 0||e===void 0)return!1;let r=Object.keys(t).sort(),i=Object.keys(e).sort();return r.length===i.length&&r.every((s,n)=>s===i[n]&&t[s]===e[s])},H0=class{constructor(t){this.tensorManager=q0(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,El(t.logLevel,!!t.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(t){pe("verbose",()=>`[WebNN] onRunStart {sessionId: ${t}}`),this.activeSessionId=t}onRunEnd(t){pe("verbose",()=>`[WebNN] onRunEnd {sessionId: ${t}}`);let e=this.temporarySessionTensorIds.get(t);if(e){for(let r of e)pe("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(t),this.activeSessionId=void 0}}async createMLContext(t){if(t instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===t);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(t);return this.mlContextCache.push({gpuDevice:t,mlContext:i}),i}}else if(t===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let e=this.mlContextCache.findIndex(r=>Mh(r.options,t));if(e!==-1)return this.mlContextCache[e].mlContext;{let r=await navigator.ml.createContext(t);return this.mlContextCache.push({options:t,mlContext:r}),r}}registerMLContext(t,e){this.mlContextBySessionId.set(t,e);let r=this.sessionIdsByMLContext.get(e);r||(r=new Set,this.sessionIdsByMLContext.set(e,r)),r.add(t),this.mlOpSupportLimitsBySessionId.has(t)||this.mlOpSupportLimitsBySessionId.set(t,e.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(t,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(t,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(t){this.sessionGraphInputs.delete(t),this.sessionGraphOutputs.delete(t);let e=this.mlContextBySessionId.get(t);if(!e)return;this.tensorManager.releaseTensorsForSession(t),this.mlContextBySessionId.delete(t),this.mlOpSupportLimitsBySessionId.delete(t);let r=this.sessionIdsByMLContext.get(e);if(r.delete(t),r.size===0){this.sessionIdsByMLContext.delete(e);let i=this.mlContextCache.findIndex(s=>s.mlContext===e);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(t){return this.mlContextBySessionId.get(t)}getMLOpSupportLimits(t){return this.mlOpSupportLimitsBySessionId.get(t)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(t){pe("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${t}}`),this.tensorManager.releaseTensorId(t)}async ensureTensor(t,e,r,i,s){let n=wi.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(t??this.currentSessionId,e,n,i,s)}async createTemporaryTensor(t,e,r){pe("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${e}, shape: ${r}}`);let i=wi.get(e);if(!i)throw new Error(`Unsupported ONNX data type: ${e}`);let s=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(t,s,i,r,!1);let n=this.temporarySessionTensorIds.get(t);return n?n.push(s):this.temporarySessionTensorIds.set(t,[s]),s}uploadTensor(t,e){if(!ve().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");pe("verbose",()=>`[WebNN] uploadTensor {tensorId: ${t}, data: ${e.byteLength}}`),this.tensorManager.upload(t,e)}async downloadTensor(t,e){return this.tensorManager.download(t,e)}createMLTensorDownloader(t,e){return async()=>{let r=await this.tensorManager.download(t);return Al(r,e)}}registerMLTensor(t,e,r,i){let s=wi.get(r);if(!s)throw new Error(`Unsupported ONNX data type: ${r}`);let n=this.tensorManager.registerTensor(t,e,s,i);return pe("verbose",()=>`[WebNN] registerMLTensor {tensor: ${e}, dataType: ${s}, dimensions: ${i}} -> {tensorId: ${n}}`),n}registerMLConstant(t,e,r,i,s,n,a=!1){if(!n)throw new Error("External mounted files are not available.");let o=t;t.startsWith("./")&&(o=t.substring(2));let l=n.get(o);if(!l)throw new Error(`File with name ${o} not found in preloaded files.`);if(e+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let u=l.slice(e,e+r).buffer,d;switch(s.dataType){case"float32":d=new Float32Array(u);break;case"float16":d=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(u):new Uint16Array(u);break;case"int32":d=new Int32Array(u);break;case"uint32":d=new Uint32Array(u);break;case"int64":if(a){let c=Lo(new Uint8Array(u),"int64");d=new Int32Array(c.buffer),s.dataType="int32"}else d=new BigInt64Array(u);break;case"uint64":d=new BigUint64Array(u);break;case"int8":d=new Int8Array(u);break;case"int4":case"uint4":case"uint8":d=new Uint8Array(u);break;default:throw new Error(`Unsupported data type: ${s.dataType} in creating WebNN Constant from external data.`)}return pe("verbose",()=>`[WebNN] registerMLConstant {dataType: ${s.dataType}, shape: ${s.shape}}} ${a?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),i.constant(s,d)}registerGraphInput(t){this.temporaryGraphInputs.push(t)}registerGraphOutput(t){this.temporaryGraphOutputs.push(t)}isGraphInput(t,e){let r=this.sessionGraphInputs.get(t);return r?r.includes(e):!1}isGraphOutput(t,e){let r=this.sessionGraphOutputs.get(t);return r?r.includes(e):!1}isGraphInputOutputTypeSupported(t,e,r=!0){let i=wi.get(Ar(e)),s=this.mlOpSupportLimitsBySessionId.get(t);return typeof i>"u"?!1:r?!!(s!=null&&s.input.dataTypes.includes(i)):!!(s!=null&&s.output.dataTypes.includes(i))}flush(){}}}),Il=j(()=>{}),Da,Ms,zs,zh,Ph,Na,Go,Rh,j0,Qk=j(()=>{Jt(),Il(),Da=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Ms=[],zs=t=>Math.ceil(Number(t)/16)*16,zh=t=>{for(let e=0;e<Ms.length;e++){let r=Ms[e];if(t<=r)return r}return Math.ceil(t/16)*16},Ph=1,Na=()=>Ph++,Go=async(t,e,r,i)=>{let s=zs(r),n=t.device.createBuffer({size:s,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let a=t.getCommandEncoder();t.endComputePass(),a.copyBufferToBuffer(e,0,n,0,s),t.flush(),await n.mapAsync(GPUMapMode.READ);let o=n.getMappedRange();if(i){let l=i();return l.set(new Uint8Array(o,0,r)),l}else return new Uint8Array(o.slice(0,r))}finally{n.destroy()}},Rh=class{constructor(t){this.backend=t,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[e]of Da)Ms.push(e),this.freeBuffers.set(e,[]),this.freeUniformBuffers.set(e,[]);this.sessionCount=0}upload(t,e){let r=e.buffer,i=e.byteOffset,s=e.byteLength,n=zs(s),a=this.storageCache.get(t);if(!a)throw new Error("gpu data for uploading does not exist");if(Number(a.originalSize)!==s)throw new Error(`inconsistent data size. gpu data size=${a.originalSize}, data size=${s}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:n,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=o.getMappedRange();new Uint8Array(l).set(new Uint8Array(r,i,s)),o.unmap();let u=this.backend.device.createCommandEncoder();u.copyBufferToBuffer(o,0,a.gpuData.buffer,0,n),this.backend.device.queue.submit([u.finish()]),o.destroy(),pe("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${t})`)}memcpy(t,e){let r=this.storageCache.get(t);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(e);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let s=zs(r.originalSize),n=this.backend.getCommandEncoder();this.backend.endComputePass(),n.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,s)}registerExternalBuffer(t,e,r){let i;if(r){if(i=r[0],t===r[1])return pe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${e}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=Na();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:t},originalSize:e}),pe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${e}) => id=${i}, registered.`),i}unregisterExternalBuffer(t){t!==void 0&&(this.storageCache.delete(t),pe("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${t}`))}create(t,e=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=zh(t),i,s=(e&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,n=(e&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(s||n){let o=(s?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?i=o.pop():i=this.backend.device.createBuffer({size:r,usage:e}):i=this.backend.device.createBuffer({size:r,usage:e})}else i=this.backend.device.createBuffer({size:r,usage:e});let a={id:Na(),type:0,buffer:i};return this.storageCache.set(a.id,{gpuData:a,originalSize:Number(t)}),pe("verbose",()=>`[WebGPU] GpuDataManager.create(size=${t}) => id=${a.id}`),a}get(t){var e;return(e=this.storageCache.get(t))==null?void 0:e.gpuData}release(t){let e=typeof t=="bigint"?Number(t):t,r=this.storageCache.get(e);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return pe("verbose",()=>`[WebGPU] GpuDataManager.release(id=${e}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(e),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(t,e){let r=this.storageCache.get(Number(t));if(!r)throw new Error("data does not exist");await Go(this.backend,r.gpuData.buffer,r.originalSize,e)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let t of this.buffersPending){let e=Da.get(t.size);if((t.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(t.size)||[];e===void 0||r.length>=e?t.destroy():r.push(t)}else if((t.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(t.size)||[];e===void 0||r.length>=e?t.destroy():r.push(t)}else t.destroy()}this.buffersPending=[]}else{let t=this.capturedPendingBuffers.get(this.backend.currentSessionId);t||(t=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,t));for(let e of this.buffersPending)t.push(e);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(t=>{t.forEach(e=>{e.destroy()})}),this.freeUniformBuffers.forEach(t=>{t.forEach(e=>{e.destroy()})}),this.storageCache.forEach(t=>{t.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(t=>{t.forEach(e=>{e.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(t){let e=this.capturedPendingBuffers.get(t);e&&(e.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(t)),this.sessionCount-=1,this.sessionCount===0&&(pe("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},j0=(...t)=>new Rh(...t)}),Bh,be,ze=j(()=>{Bh=class{constructor(t){Object.assign(this,t)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(t=>`${this[t]}`).join(";")),this.key}},be=t=>new Bh(t)}),si,Ps,Ve,tt,te,Ae,Uo,Jr,cr,ee,xi,U,J,Y0,Ml,Oh,X0,oe=j(()=>{ie(),ne(),si=64,Ps=(t,e)=>{if(e===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(t)){case 10:return e>1?`vec${e}<f16>`:"f16";case 1:return e>1?`vec${e}<f32>`:"f32";case 6:return e>1?`vec${e}<i32>`:"i32";case 12:return e>1?`vec${e}<u32>`:"u32";case 7:if(e>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(e>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(e!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${t}`)}},Ve=(t,e=1)=>{let r=Ps(t,e);return typeof r=="string"?r:r[0]},tt=(t,e=1)=>{let r=Ps(t,e);return typeof r=="string"?r:r[1]},te=(...t)=>{let e=[];return t.forEach(r=>{r.length!==0&&e.push({type:12,data:r},{type:12,data:D.computeStrides(r)})}),e},Ae=t=>t%4===0?4:t%2===0?2:1,Uo=(t="f32",e,r="0")=>!e||e===1?`${t}(${r})`:`vec${e}<${t}>(${r})`,Jr=(t,e,r)=>t==="f32"?r:e===1?`f32(${r})`:`vec${e}<f32>(${r})`,cr=(t,e)=>e===4?`(${t}.x + ${t}.y + ${t}.z + ${t}.w)`:e===2?`(${t}.x + ${t}.y)`:e===3?`(${t}.x + ${t}.y + ${t}.z)`:t,ee=(t,e,r,i)=>t.startsWith("uniforms.")&&r>4?typeof e=="string"?i==="f16"?`${t}[(${e}) / 8][(${e}) % 8 / 4][(${e}) % 8 % 4]`:`${t}[(${e}) / 4][(${e}) % 4]`:i==="f16"?`${t}[${Math.floor(e/8)}][${Math.floor(e%8/4)}][${e%8%4}]`:`${t}[${Math.floor(e/4)}][${e%4}]`:r>1?`${t}[${e}]`:t,xi=(t,e,r,i,s)=>{let n=typeof r=="number",a=n?r:r.length,o=[...new Array(a).keys()],l=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,u=Ps(e,s),d=typeof u=="string"?u:u[1],c=typeof u=="string"?u:u[0],p={indices:l,value:d,storage:c,tensor:e},f=H=>typeof H=="string"?H:`${H}u`,m={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=n?"uniforms.":"",b=`${y}${t}_shape`,_=`${y}${t}_strides`,x="";for(let H=0;H<a-1;H++)x+=`
    let dim${H} = current / ${ee(_,H,a)};
    let rest${H} = current % ${ee(_,H,a)};
    indices[${H}] = dim${H};
    current = rest${H};
    `;x+=`indices[${a-1}] = current;`;let $=a<2?"":`
  fn o2i_${t}(offset: u32) -> ${p.indices} {
    var indices: ${p.indices};
    var current = offset;
    ${x}
    return indices;
  }`,S=H=>(m.offsetToIndices=!0,a<2?H:`o2i_${t}(${H})`),E=[];if(a>=2)for(let H=a-1;H>=0;H--)E.push(`${ee(_,H,a)} * (indices[${H}])`);let T=a<2?"":`
  fn i2o_${t}(indices: ${p.indices}) -> u32 {
    return ${E.join("+")};
  }`,A=H=>(m.indicesToOffset=!0,a<2?H:`i2o_${t}(${H})`),k=(...H)=>a===0?"0u":`${p.indices}(${H.map(f).join(",")})`,P=(H,K)=>a<2?`${H}`:`${ee(H,K,a)}`,M=(H,K,Z)=>a<2?`${H}=${Z};`:`${ee(H,K,a)}=${Z};`,N={},W=(H,K)=>{m.broadcastedIndicesToOffset=!0;let Z=`${K.name}broadcastedIndicesTo${t}Offset`;if(Z in N)return`${Z}(${H})`;let Y=[];for(let he=a-1;he>=0;he--){let Fe=K.indicesGet("outputIndices",he+K.rank-a);Y.push(`${P(_,he)} * (${Fe} % ${P(b,he)})`)}return N[Z]=`fn ${Z}(outputIndices: ${K.type.indices}) -> u32 {
             return ${Y.length>0?Y.join("+"):"0u"};
           }`,`${Z}(${H})`},L=(H,K)=>(()=>{if(p.storage===p.value)return`${t}[${H}]=${K};`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`${t}[${H}]=vec2<u32>(u32(${K}), select(0u, 0xFFFFFFFFu, ${K} < 0));`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`${t}[${H}]=vec2<u32>(u32(${K}), 0u);`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`${t}[${H}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${K}));`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),R=H=>(()=>{if(p.storage===p.value)return`${t}[${H}]`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`i32(${t}[${H}].x)`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`u32(${t}[${H}].x)`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`vec4<bool>(bool(${t}[${H}] & 0xFFu), bool(${t}[${H}] & 0xFF00u), bool(${t}[${H}] & 0xFF0000u), bool(${t}[${H}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),q=a<2?"":`
  fn get_${t}ByIndices(indices: ${p.indices}) -> ${d} {
    return ${R(`i2o_${t}(indices)`)};
  }`,O=a<2?"":(()=>{let H=o.map(Z=>`d${Z}: u32`).join(", "),K=o.map(Z=>`d${Z}`).join(", ");return`
  fn get_${t}(${H}) -> ${d} {
    return get_${t}ByIndices(${k(K)});
  }`})(),V=(...H)=>{if(H.length!==a)throw new Error(`indices length must be ${a}`);let K=H.map(f).join(",");return a===0?R("0u"):a===1?R(K[0]):(m.get=!0,m.getByIndices=!0,m.indicesToOffset=!0,`get_${t}(${K})`)},ae=H=>a<2?R(H):(m.getByIndices=!0,m.indicesToOffset=!0,`get_${t}ByIndices(${H})`),F=a<2?"":`
  fn set_${t}ByIndices(indices: ${p.indices}, value: ${d}) {
    ${L(`i2o_${t}(indices)`,"value")}
  }`,se=a<2?"":(()=>{let H=o.map(Z=>`d${Z}: u32`).join(", "),K=o.map(Z=>`d${Z}`).join(", ");return`
  fn set_${t}(${H}, value: ${d}) {
    set_${t}ByIndices(${k(K)}, value);
  }`})();return{impl:()=>{let H=[],K=!1;return m.offsetToIndices&&(H.push($),K=!0),m.indicesToOffset&&(H.push(T),K=!0),m.broadcastedIndicesToOffset&&(Object.values(N).forEach(Z=>H.push(Z)),K=!0),m.set&&(H.push(se),K=!0),m.setByIndices&&(H.push(F),K=!0),m.get&&(H.push(O),K=!0),m.getByIndices&&(H.push(q),K=!0),!n&&K&&H.unshift(`const ${b} = ${p.indices}(${r.join(",")});`,`const ${_} = ${p.indices}(${D.computeStrides(r).join(",")});`),H.join(`
`)},type:p,offsetToIndices:S,indicesToOffset:A,broadcastedIndicesToOffset:W,indices:k,indicesGet:P,indicesSet:M,set:(...H)=>{if(H.length!==a+1)throw new Error(`indices length must be ${a}`);let K=H[a];if(typeof K!="string")throw new Error("value must be string");let Z=H.slice(0,a).map(f).join(",");return a===0?L("0u",K):a===1?L(Z[0],K):(m.set=!0,m.setByIndices=!0,m.indicesToOffset=!0,`set_${t}(${Z}, ${K})`)},setByOffset:L,setByIndices:(H,K)=>a<2?L(H,K):(m.setByIndices=!0,m.indicesToOffset=!0,`set_${t}ByIndices(${H}, ${K});`),get:V,getByOffset:R,getByIndices:ae,usage:i,name:t,strides:_,shape:b,rank:a}},U=(t,e,r,i=1)=>xi(t,e,r,"input",i),J=(t,e,r,i=1)=>xi(t,e,r,"output",i),Y0=(t,e,r)=>xi(t,e,r,"atomicOutput",1),Ml=(t,e,r,i=1)=>xi(t,e,r,"internal",i),Oh=class{constructor(t,e){this.normalizedDispatchGroup=t,this.limits=e,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(t){return`if (global_idx >= ${typeof t=="number"?`${t}u`:t}) { return; }`}mainStart(t=si){let e=typeof t=="number"?t:t[0],r=typeof t=="number"?1:t[1],i=typeof t=="number"?1:t[2];if(e>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${e}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(e*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${e}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let s=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,n=s?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,a=s?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${e*r*i}u + local_idx;`;return`@compute @workgroup_size(${e}, ${r}, ${i})
  fn main(${n}) {
    ${a}
  `}appendVariableUniforms(t){t.rank!==0&&(t.shape.startsWith("uniforms.")&&this.uniforms.push({name:t.shape.replace("uniforms.",""),type:"u32",length:t.rank}),t.strides.startsWith("uniforms.")&&this.uniforms.push({name:t.strides.replace("uniforms.",""),type:"u32",length:t.rank}))}declareVariable(t,e){if(t.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(t),this.appendVariableUniforms(t);let r=t.usage==="input"?"read":"read_write",i=t.usage==="atomicOutput"?"atomic<i32>":t.type.storage;return`@group(0) @binding(${e}) var<storage, ${r}> ${t.name}: array<${i}>;`}declareVariables(...t){return t.map(e=>this.declareVariable(e,this.variableIndex++)).join(`
`)}registerInternalVariable(t){if(t.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(t),this.appendVariableUniforms(t)}registerInternalVariables(...t){return t.forEach(e=>this.registerInternalVariable(e)),this}registerUniform(t,e,r=1){return this.uniforms.push({name:t,type:e,length:r}),this}registerUniforms(t){return this.uniforms=this.uniforms.concat(t),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let t=[];for(let{name:e,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?t.push(`@align(16) ${e}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):t.push(`${e}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let s=i==null||i===1?r:`vec${i}<${r}>`;t.push(`${e}:${s}`)}return`
      struct Uniforms { ${t.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(t=>t.impl()).join(`
`)+this.internalVariables.map(t=>t.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let t=e=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(e)];return this.uniforms.map(e=>[t(e.type),e.length??1])}},X0=(t,e)=>new Oh(t,e)}),Dh,La,Nh,Lh,Gh,Uh,ft,K0,Z0,hr=j(()=>{ie(),ne(),ze(),oe(),Dh=(t,e)=>{if(!t||t.length!==1)throw new Error("Transpose requires 1 input.");if(e.length!==0&&e.length!==t[0].dims.length)throw new Error(`perm size ${e.length} does not match input rank ${t[0].dims.length}`)},La=(t,e)=>e.length!==0?e:[...new Array(t).keys()].reverse(),Nh=(t,e)=>D.sortBasedOnPerm(t,La(t.length,e)),Lh=(t,e,r,i)=>{let s=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let n=0;n<e;++n)s+=`a[${t[n]}]=i[${n}];`;return s+="return a;}"},Gh=(t,e)=>{let r=[],i=[];for(let s=0;s<t.length;++s)t[s]!==1&&r.push(t[s]),t[e[s]]!==1&&i.push(e[s]);return{newShape:r,newPerm:i}},Uh=(t,e)=>{let r=0;for(let i=0;i<t.length;++i)if(e[t[i]]!==1){if(t[i]<r)return!1;r=t[i]}return!0},ft=(t,e)=>{let r=t.dataType,i=t.dims.length,s=La(i,e),n=Nh(t.dims,s),a=t.dims,o=n,l=i<2||Uh(s,t.dims),u;if(l)return u=m=>{let y=U("input",r,a,4),b=J("output",r,o,4);return`
  ${m.registerUniform("output_size","u32").declareVariables(y,b)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let m=D.size(n);return{outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(m/64/4)},programUniforms:[{type:12,data:Math.ceil(m/4)}]}},getShaderSource:u};let{newShape:d,newPerm:c}=Gh(t.dims,s),p=D.areEqual(c,[2,3,1]),f=D.areEqual(c,[3,1,2]);if(d.length===2||p||f){a=p?[d[0],d[1]*d[2]]:f?[d[0]*d[1],d[2]]:d,o=[a[1],a[0]];let m=16;return u=y=>{let b=U("a",r,a.length),_=J("output",r,o.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(b,_)}
  var<workgroup> tile : array<array<${_.type.value}, ${m+1}>, ${m}>;
  ${y.mainStart([m,m,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${m} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${m}u + local_id.x;
    let input_row = workgroup_id_x * ${m}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${b.getByIndices(`${b.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${m}u + local_id.x;
    let output_row = workgroup_id_y * ${m}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${_.setByIndices(`${_.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=D.size(n);return{outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(o[1]/m),y:Math.ceil(o[0]/m)},programUniforms:[{type:12,data:y},...te(a,o)]}},getShaderSource:u}}return u=m=>{let y=U("a",r,a.length),b=J("output",r,o.length);return`
  ${m.registerUniform("output_size","u32").declareVariables(y,b)}

  ${Lh(s,i,y,b)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${e}`,inputDependencies:["rank"]},getRunData:()=>{let m=D.size(n);return{outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...te(a,o)]}},getShaderSource:u}},K0=(t,e)=>{Dh(t.inputs,e.perm),t.compute(ft(t.inputs[0],e.perm))},Z0=t=>be({perm:t.perm})}),Vh,Fh,Wh,qh,Hh,jh,Yh,Xh,Kh,Zh,$t,Q0,J0,ey,ty,ry,iy,sy,ny,ay,oy,Jk=j(()=>{ie(),ne(),oe(),zl(),hr(),Vh={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Fh={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Wh={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},qh={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Hh=(t,e)=>{let r=[];for(let i=e-t;i<e;++i)r.push(i);return r},jh=(t,e)=>{let r=[],i=t.length;for(let n=0;n<i;n++)e.indexOf(n)===-1&&r.push(t[n]);let s=e.map(n=>t[n]);return[r,s]},Yh=(t,e)=>{let r=t.length+e.length,i=[],s=0;for(let n=0;n<r;n++)e.indexOf(n)===-1?i.push(t[s++]):i.push(1);return i},Xh=(t,e)=>{for(let r=0;r<t.length;++r)if(t[t.length-r-1]!==e-1-r)return!1;return!0},Kh=(t,e)=>{let r=[];if(!Xh(t,e)){for(let i=0;i<e;++i)t.indexOf(i)===-1&&r.push(i);t.forEach(i=>r.push(i))}return r},Zh=(t,e,r,i,s,n,a)=>{let o=r[0].dims,l=D.size(n),u=D.size(a),d=U("_A",r[0].dataType,o),c=J("output",s,n),p=64;l===1&&(p=256);let f=`
          var<workgroup> aBestValues : array<f32, ${p}>;
       `,m=y=>`
        ${y.registerUniform("reduceSize","u32").declareVariables(d,c)}
        ${f}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${y.mainStart(p)}

          let outputIndex = global_idx / ${p};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Wh[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${p}) {
           let candidate = f32(${d.getByOffset("offset + k")});
           bestValue = ${Vh[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${p}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Fh[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${c.setByOffset("outputIndex",`${i==="mean"?`${c.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${c.type.storage}(${qh[i]})`}`)};
         }
        }`;return{name:t,shaderCache:{hint:`${e};${p}`,inputDependencies:["type"]},getShaderSource:m,getRunData:()=>({outputs:[{dims:n,dataType:s}],dispatchGroup:{x:l},programUniforms:[{type:12,data:u}]})}},$t=(t,e,r,i)=>{let s=t.inputs.length===1?r:Vo(t.inputs,r),n=s.axes;n.length===0&&!s.noopWithEmptyAxes&&(n=t.inputs[0].dims.map((f,m)=>m));let a=D.normalizeAxes(n,t.inputs[0].dims.length),o=a,l=t.inputs[0],u=Kh(o,t.inputs[0].dims.length);u.length>0&&(l=t.compute(ft(t.inputs[0],u),{inputs:[0],outputs:[-1]})[0],o=Hh(o.length,l.dims.length));let[d,c]=jh(l.dims,o),p=d;s.keepDims&&(p=Yh(d,a)),t.compute(Zh(e,s.cacheKey,[l],i,t.inputs[0].dataType,p,c),{inputs:[l]})},Q0=(t,e)=>{$t(t,"ReduceMeanShared",e,"mean")},J0=(t,e)=>{$t(t,"ReduceL1Shared",e,"l1")},ey=(t,e)=>{$t(t,"ReduceL2Shared",e,"l2")},ty=(t,e)=>{$t(t,"ReduceLogSumExpShared",e,"logSumExp")},ry=(t,e)=>{$t(t,"ReduceMaxShared",e,"max")},iy=(t,e)=>{$t(t,"ReduceMinShared",e,"min")},sy=(t,e)=>{$t(t,"ReduceProdShared",e,"prod")},ny=(t,e)=>{$t(t,"ReduceSumShared",e,"sum")},ay=(t,e)=>{$t(t,"ReduceSumSquareShared",e,"sumSquare")},oy=(t,e)=>{$t(t,"ReduceLogSumShared",e,"logSum")}}),kt,Qh,en,Vo,St,Jh,ep,tp,rp,ip,sp,np,ap,op,lp,Ct,ly,uy,dy,cy,hy,py,fy,my,gy,yy,zl=j(()=>{ie(),ne(),ze(),oe(),Jk(),kt=t=>{if(!t||t.length===0||t.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(t.length===2&&t[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Qh=t=>["","",`var value = ${t.getByIndices("input_indices")};`,""],en=(t,e,r,i,s,n,a=!1,o=!1)=>{let l=[],u=r[0].dims,d=u.length,c=D.normalizeAxes(s,d),p=!o&&c.length===0;u.forEach((y,b)=>{p||c.indexOf(b)>=0?a&&l.push(1):l.push(y)});let f=l.length,m=D.size(l);return{name:t,shaderCache:e,getShaderSource:y=>{let b=[],_=U("_A",r[0].dataType,d),x=J("output",n,f),$=i(_,x,c),S=$[2];for(let E=0,T=0;E<d;E++)p||c.indexOf(E)>=0?(a&&T++,S=`for(var j${E}: u32 = 0; j${E} < ${u[E]}; j${E}++) {
                  ${$[2].includes("last_index")?`let last_index = j${E};`:""}
                  ${_.indicesSet("input_indices",E,`j${E}`)}
                  ${S}
                }`):(b.push(`${_.indicesSet("input_indices",E,x.indicesGet("output_indices",T))};`),T++);return`

        ${y.registerUniform("output_size","u32").declareVariables(_,x)}

        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${_.type.indices};
          let output_indices = ${x.offsetToIndices("global_idx")};

          ${b.join(`
`)}
          ${$[0]}       // init ops for reduce max/min
          ${$[1]}
          ${S}
          ${$[3]}
          ${$.length===4?x.setByOffset("global_idx","value"):$.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:n}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...te(u,l)]})}},Vo=(t,e)=>{let r=[];return t[1].dims[0]>0&&t[1].getBigInt64Array().forEach(i=>r.push(Number(i))),be({axes:r,keepDims:e.keepDims,noopWithEmptyAxes:e.noopWithEmptyAxes})},St=(t,e,r,i)=>{let s=t.inputs,n=s.length===1?r:Vo(s,r);t.compute(en(e,{hint:n.cacheKey,inputDependencies:["rank"]},[s[0]],n.noopWithEmptyAxes&&n.axes.length===0?Qh:i,n.axes,s[0].dataType,n.keepDims,n.noopWithEmptyAxes),{inputs:[0]})},Jh=(t,e)=>{kt(t.inputs),St(t,"ReduceLogSum",e,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},ep=(t,e)=>{kt(t.inputs),St(t,"ReduceL1",e,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},tp=(t,e)=>{kt(t.inputs),St(t,"ReduceL2",e,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},rp=(t,e)=>{kt(t.inputs),St(t,"ReduceLogSumExp",e,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},ip=(t,e)=>{kt(t.inputs),St(t,"ReduceMax",e,(r,i,s)=>{let n=[];for(let a=0;a<r.rank;a++)(s.indexOf(a)>=0||s.length===0)&&n.push(r.indicesSet("input_indices",a,0));return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},sp=(t,e)=>{kt(t.inputs),St(t,"ReduceMean",e,(r,i,s)=>{let n=1;for(let a=0;a<r.rank;a++)(s.indexOf(a)>=0||s.length===0)&&(n*=t.inputs[0].dims[a]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${n});`]})},np=(t,e)=>{kt(t.inputs),St(t,"ReduceMin",e,(r,i,s)=>{let n=[];for(let a=0;a<r.rank;a++)(s.indexOf(a)>=0||s.length===0)&&n.push(`input_indices[${a}] = 0;`);return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},ap=(t,e)=>{kt(t.inputs),St(t,"ReduceProd",e,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},op=(t,e)=>{kt(t.inputs),St(t,"ReduceSum",e,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},lp=(t,e)=>{kt(t.inputs),St(t,"ReduceSumSquare",e,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Ct=(t,e,r)=>{if(e.length===0)return r;let i=1,s=1;for(let n=0;n<e.length;n++)e.indexOf(n)===-1?i*=t[n]:s*=t[n];return s<32&&i>1024},ly=(t,e)=>{Ct(t.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?sp(t,e):Q0(t,e)},uy=(t,e)=>{Ct(t.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?ep(t,e):J0(t,e)},dy=(t,e)=>{Ct(t.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?tp(t,e):ey(t,e)},cy=(t,e)=>{Ct(t.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?rp(t,e):ty(t,e)},hy=(t,e)=>{Ct(t.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?ip(t,e):ry(t,e)},py=(t,e)=>{Ct(t.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?np(t,e):iy(t,e)},fy=(t,e)=>{Ct(t.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?ap(t,e):sy(t,e)},my=(t,e)=>{Ct(t.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?op(t,e):ny(t,e)},gy=(t,e)=>{Ct(t.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?lp(t,e):ay(t,e)},yy=(t,e)=>{Ct(t.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?Jh(t,e):oy(t,e)}}),Ga,_y,by,Fo,eS=j(()=>{ie(),ze(),zl(),Ga=t=>{if(!t||t.length===0||t.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(t[0].dataType!==1)throw new Error("Invalid input type.")},_y=(t,e)=>{Ga(t.inputs);let r=(i,s,n)=>{let a=[];for(let o=0;o<i.rank;o++)(n.indexOf(o)>=0||n.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${e.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",s.setByOffset("global_idx","best_index")]};t.compute(en("ArgMin",{hint:e.cacheKey,inputDependencies:["rank"]},[t.inputs[0]],r,[e.axis],7,e.keepDims),{inputs:[0]})},by=(t,e)=>{Ga(t.inputs);let r=(i,s,n)=>{let a=[];for(let o=0;o<i.rank;o++)(n.indexOf(o)>=0||n.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${e.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",s.setByOffset("global_idx","best_index")]};t.compute(en("argMax",{hint:e.cacheKey,inputDependencies:["rank"]},[t.inputs[0]],r,[e.axis],7,e.keepDims),{inputs:[0]})},Fo=t=>be(t)}),up,Rs,dp,cp,hp,Qi,pp,wy,Pl=j(()=>{ie(),ne(),Il(),oe(),up=(t,e)=>{let r=t[0],i=t[1],s=t[2],n=t[3],a=t[4],o=t[5];if(a&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],u=r.dims[1],d=r.dims[2];if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==d)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(s.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let c=s.dims[0]/3,p=c,f=p;if(e.qkvHiddenSizes.length>0){if(e.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let $ of e.qkvHiddenSizes)if($%e.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");c=e.qkvHiddenSizes[0],p=e.qkvHiddenSizes[1],f=e.qkvHiddenSizes[2]}let m=u;if(c!==p)throw new Error("qkv_hidden_sizes first element should be same as the second");if(s.dims[0]!==c+p+f)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(a){if(p!==f)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==e.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==p/e.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');e.pastPresentShareBuffer||(y=a.dims[3])}let b=m+y,_=-1,x=0;if(n)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==l||o.dims[1]!==e.numHeads||o.dims[2]!==u||o.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:u,pastSequenceLength:y,kvSequenceLength:m,totalSequenceLength:b,maxSequenceLength:_,inputHiddenSize:d,hiddenSize:c,vHiddenSize:f,headSize:Math.floor(c/e.numHeads),vHeadSize:Math.floor(f/e.numHeads),numHeads:e.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:e.maskFilterValue,maskType:x,scale:e.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Rs=(t,e,r)=>e&&t?`
      let total_sequence_length_input = u32(${e.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${t==null?void 0:t.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,dp=(t,e,r,i,s,n,a,o)=>{let l=Ae(a?1:n),u=64,d=n/l;d<u&&(u=32);let c=Math.ceil(n/l/u),p=[{type:12,data:e},{type:12,data:r},{type:12,data:i},{type:12,data:s},{type:12,data:d},{type:12,data:c}],f=Ve(t.dataType,l),m=tt(1,l),y=["type"];a&&y.push("type"),o&&y.push("type");let b=_=>{let x=J("x",t.dataType,t.dims,l),$=[x],S=a?U("seq_lens",a.dataType,a.dims):void 0;S&&$.push(S);let E=o?U("total_sequence_length_input",o.dataType,o.dims):void 0;E&&$.push(E);let T=tt(t.dataType),A=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${u}>;
  var<workgroup> thread_sum: array<f32, ${u}>;
  ${_.registerUniforms(A).declareVariables(...$)}
  ${_.mainStart([u,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Rs(S,E,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${u}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${a?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${m}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${m}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${u}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${m}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${m}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${u}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${x.type.value}(${T}(1.0) / ${T}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${m}(x[offset + i]);
        x[offset + i] = ${x.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${a?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${x.type.value}(${T}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${u};${f};${l}`,inputDependencies:y},getShaderSource:b,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:s,z:e*r},programUniforms:p})}},cp=(t,e,r,i,s,n,a,o,l)=>{let u=a+n.kvSequenceLength,d=[n.batchSize,n.numHeads,n.sequenceLength,u],c=t>1&&i,p=n.kvNumHeads?n.kvNumHeads:n.numHeads,f=c?[n.batchSize,p,u,n.headSize]:void 0,m=n.nReps?n.nReps:1,y=n.scale===0?1/Math.sqrt(n.headSize):n.scale,b=Ae(n.headSize),_=n.headSize/b,x=12,$={x:Math.ceil(u/x),y:Math.ceil(n.sequenceLength/x),z:n.batchSize*n.numHeads},S=[{type:12,data:n.sequenceLength},{type:12,data:_},{type:12,data:u},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:1,data:y},{type:12,data:a},{type:12,data:n.kvSequenceLength},{type:12,data:m}],E=c&&i&&D.size(i.dims)>0,T=["type","type"];E&&T.push("type"),s&&T.push("type"),o&&T.push("type"),l&&T.push("type");let A=[{dims:d,dataType:e.dataType,gpuDataType:0}];c&&A.push({dims:f,dataType:e.dataType,gpuDataType:0});let k=P=>{let M=U("q",e.dataType,e.dims,b),N=U("key",r.dataType,r.dims,b),W=[M,N];if(E){let F=U("past_key",i.dataType,i.dims,b);W.push(F)}s&&W.push(U("attention_bias",s.dataType,s.dims));let L=o?U("seq_lens",o.dataType,o.dims):void 0;L&&W.push(L);let R=l?U("total_sequence_length_input",l.dataType,l.dims):void 0;R&&W.push(R);let q=J("output",e.dataType,d),O=[q];c&&O.push(J("present_key",e.dataType,f,b));let V=tt(1,b),ae=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${x}u;

  var<workgroup> tileQ: array<${M.type.storage}, ${x*x}>;
  var<workgroup> tileK: array<${M.type.storage}, ${x*x}>;
  ${P.registerUniforms(ae).declareVariables(...W,...O)}
  ${P.mainStart([x,x,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${m===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${m===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Rs(L,R,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${E&&c?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${c?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${V}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${E&&c?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${c?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${V}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(b){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${b}`)}})()};
        output[outputIdx] = ${q.type.value} (sum * uniforms.alpha) + ${s?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${b};${s!==void 0};${i!==void 0};${t}`,inputDependencies:T},getRunData:()=>({outputs:A,dispatchGroup:$,programUniforms:S}),getShaderSource:k}},hp=(t,e,r,i,s,n,a=void 0,o=void 0)=>{let l=n+s.kvSequenceLength,u=s.nReps?s.nReps:1,d=s.vHiddenSize*u,c=t>1&&i,p=s.kvNumHeads?s.kvNumHeads:s.numHeads,f=c?[s.batchSize,p,l,s.headSize]:void 0,m=[s.batchSize,s.sequenceLength,d],y=12,b={x:Math.ceil(s.vHeadSize/y),y:Math.ceil(s.sequenceLength/y),z:s.batchSize*s.numHeads},_=[{type:12,data:s.sequenceLength},{type:12,data:l},{type:12,data:s.vHeadSize},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:12,data:d},{type:12,data:n},{type:12,data:s.kvSequenceLength},{type:12,data:u}],x=c&&i&&D.size(i.dims)>0,$=["type","type"];x&&$.push("type"),a&&$.push("type"),o&&$.push("type");let S=[{dims:m,dataType:e.dataType,gpuDataType:0}];c&&S.push({dims:f,dataType:e.dataType,gpuDataType:0});let E=T=>{let A=U("probs",e.dataType,e.dims),k=U("v",r.dataType,r.dims),P=[A,k];x&&P.push(U("past_value",i.dataType,i.dims));let M=a?U("seq_lens",a.dataType,a.dims):void 0;a&&P.push(M);let N=o?U("total_sequence_length_input",o.dataType,o.dims):void 0;o&&P.push(N);let W=[J("output",e.dataType,m)];c&&W.push(J("present_value",e.dataType,f));let L=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${A.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${A.type.value}, ${y*y}>;
  ${T.registerUniforms(L).declareVariables(...P,...W)}
  ${T.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${u===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${u===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Rs(M,N,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${x&&c?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${c?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${A.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${x&&c?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${c?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${t}`,inputDependencies:$},getRunData:()=>({outputs:S,dispatchGroup:b,programUniforms:_}),getShaderSource:E}},Qi=(t,e,r,i,s,n,a,o,l,u,d=void 0,c=void 0)=>{let p=Math.min(t.outputCount,1+(a?1:0)+(o?1:0)),f=p>1?a:void 0,m=p>1?o:void 0,y=p>1?u.pastSequenceLength:0,b=y+u.kvSequenceLength,_=l&&D.size(l.dims)>0?l:void 0,x=[e,r];f&&D.size(f.dims)>0&&x.push(f),_&&x.push(_),d&&x.push(d),c&&x.push(c);let $=t.compute(cp(p,e,r,f,_,u,y,d,c),{inputs:x,outputs:p>1?[-1,1]:[-1]})[0];t.compute(dp($,u.batchSize,u.numHeads,y,u.sequenceLength,b,d,c),{inputs:d&&c?[$,d,c]:[$],outputs:[]});let S=[$,i];m&&D.size(m.dims)>0&&S.push(m),d&&S.push(d),c&&S.push(c),t.compute(hp(p,$,i,m,u,y,d,c),{inputs:S,outputs:p>1?[0,2]:[0]})},pp=(t,e)=>{let r=[e.batchSize,e.numHeads,e.sequenceLength,e.headSize],i=e.sequenceLength,s=e.inputHiddenSize,n=e.headSize,a=12,o={x:Math.ceil(e.headSize/a),y:Math.ceil(e.sequenceLength/a),z:e.batchSize*e.numHeads},l=[t.inputs[0],t.inputs[1],t.inputs[2]],u=[{type:12,data:i},{type:12,data:s},{type:12,data:n},{type:12,data:e.numHeads},{type:12,data:e.headSize},{type:12,data:e.hiddenSize},{type:12,data:e.hiddenSize+e.hiddenSize+e.vHiddenSize}],d=c=>{let p=J("output_q",l[0].dataType,r),f=J("output_k",l[0].dataType,r),m=J("output_v",l[0].dataType,r),y=U("input",l[0].dataType,l[0].dims),b=U("weight",l[1].dataType,l[1].dims),_=U("bias",l[2].dataType,l[2].dims),x=y.type.storage,$=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${a}u;
  var<workgroup> tileInput: array<${x}, ${a*a}>;
  var<workgroup> tileWeightQ: array<${x}, ${a*a}>;
  var<workgroup> tileWeightK: array<${x}, ${a*a}>;
  var<workgroup> tileWeightV: array<${x}, ${a*a}>;
  ${c.registerUniforms($).declareVariables(y,b,_,p,f,m)}
  ${c.mainStart([a,a,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${x}(0);
    var valueK = ${x}(0);
    var valueV = ${x}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return t.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:t.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:t.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:t.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:u}),getShaderSource:d},{inputs:l,outputs:[-1,-1,-1]})},wy=(t,e)=>{let r=up(t.inputs,e),[i,s,n]=pp(t,r);return Qi(t,i,s,n,t.inputs[4],void 0,void 0,void 0,t.inputs[5],r)}}),fp,mp,gp,xy,tS=j(()=>{wt(),ie(),ne(),ze(),oe(),fp=(t,e)=>{if(!t||t.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,s,n)=>{let a=s.length;if(a!==i.length)throw new Error(`${n}: num dimensions != ${a}`);s.forEach((o,l)=>{if(o!==i[l])throw new Error(`${n}: dim[${l}] do not match`)})};if(t[0].dims.length>1){let i=e.format==="NHWC"?e.spatial?t[0].dims.slice(-1):t[0].dims.slice(-1).concat(t[0].dims.slice(1,t[0].dims.length-1)):t[0].dims.slice(1,e.spatial?2:void 0);r(t[1].dims,i,"Invalid input scale"),r(t[2].dims,i,"Invalid input B"),r(t[3].dims,i,"Invalid input mean"),r(t[4].dims,i,"Invalid input var")}else r(t[1].dims,[1],"Invalid input scale"),r(t[2].dims,[1],"Invalid input B"),r(t[3].dims,[1],"Invalid input mean"),r(t[4].dims,[1],"Invalid input var")},mp=(t,e)=>{let{epsilon:r,spatial:i,format:s}=e,n=t[0].dims,a=i?Ae(n[n.length-1]):1,o=s==="NHWC"&&n.length>1?a:1,l=D.size(n)/a,u=i,d=u?n.length:n,c=U("x",t[0].dataType,t[0].dims,a),p=U("scale",t[1].dataType,t[1].dims,o),f=U("bias",t[2].dataType,t[2].dims,o),m=U("inputMean",t[3].dataType,t[3].dims,o),y=U("inputVar",t[4].dataType,t[4].dims,o),b=J("y",t[0].dataType,d,a),_=()=>{let $="";if(i)$=`let cOffset = ${n.length===1?"0u":s==="NHWC"?`outputIndices[${n.length-1}] / ${a}`:"outputIndices[1]"};`;else if(s==="NCHW")$=`
            ${b.indicesSet("outputIndices","0","0")}
            let cOffset = ${b.indicesToOffset("outputIndices")};`;else{$=`var cIndices = ${p.type.indices}(0);
                       cIndices[0] = outputIndices[${n.length-1}];`;for(let S=1;S<p.rank;S++)$+=`cIndices[${S}] = outputIndices[${S}];`;$+=`let cOffset = ${p.indicesToOffset("cIndices")};`}return $},x=$=>`
  const epsilon = ${r};
  ${$.registerUniform("outputSize","u32").declareVariables(c,p,f,m,y,b)}
  ${$.mainStart()}
  ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${b.offsetToIndices(`global_idx * ${a}`)};
    ${_()}
    let scale = ${p.getByOffset("cOffset")};
    let bias = ${f.getByOffset("cOffset")};
    let inputMean = ${m.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${c.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${b.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${e.epsilon}_${e.format}_${i}_${a}`,inputDependencies:u?["rank","type","type","type","type"]:void 0},getShaderSource:x,getRunData:()=>({outputs:[{dims:t[0].dims,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u?[{type:12,data:l},...te(n)]:[{type:12,data:l}]})}},gp=t=>be(t),xy=(t,e)=>{let{inputs:r,outputCount:i}=t,s=gp({...e,outputCount:i});if(Ce.webgpu.validateInputContent&&fp(r,s),e.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");t.compute(mp(r,s))}}),yp,_p,vy,rS=j(()=>{ne(),oe(),yp=t=>{if(t[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(t[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(t[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(t[0].dims[2]!==t[1].dims[0])throw new Error("last dimension of input and bias are not the same")},_p=t=>{let e=t[0].dims,r=t[0].dims[2],i=D.size(e)/4,s=t[0].dataType,n=U("input",s,e,4),a=U("bias",s,[r],4),o=U("residual",s,e,4),l=J("output",s,e,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:e,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:u=>`
  const channels = ${r}u / 4;
  ${u.declareVariables(n,a,o,l)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${n.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},vy=t=>{yp(t.inputs),t.compute(_p(t.inputs))}}),bp,ge,$y,ky,Sy,Cy,Ty,Ey,Ay,Iy,My,wp,zy,Py,Ry,By,Ri,Oy,qs,Dy,Ny,Ly,Gy,Uy,Vy,Fy,Wy,qy,Hy,jy,Yy,Xy,Ky,Zy,Qy,Ua,Jy,Wo,qo,e_,t_,r_,xp,vp,i_,Rl=j(()=>{ie(),ne(),ze(),oe(),bp=(t,e,r,i,s,n,a)=>{let o=Math.ceil(e/4),l="";typeof s=="string"?l=`${s}(a)`:l=s("a");let u=U("inputData",r,[o],4),d=J("outputData",i,[o],4),c=[{name:"vec_size",type:"u32"}];return a&&c.push(...a),`
      ${t.registerUniforms(c).declareVariables(u,d)}

  ${n??""}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${u.getByOffset("global_idx")};
    ${d.setByOffset("global_idx",l)}
  }`},ge=(t,e,r,i,s,n=t.dataType,a,o)=>{let l=[{type:12,data:Math.ceil(D.size(t.dims)/4)}];return a&&l.push(...a),{name:e,shaderCache:{hint:s,inputDependencies:["type"]},getShaderSource:u=>bp(u,D.size(t.dims),t.dataType,n,r,i,o),getRunData:u=>({outputs:[{dims:t.dims,dataType:n}],dispatchGroup:{x:Math.ceil(D.size(u[0].dims)/64/4)},programUniforms:l})}},$y=t=>{t.compute(ge(t.inputs[0],"Abs","abs"))},ky=t=>{t.compute(ge(t.inputs[0],"Acos","acos"))},Sy=t=>{t.compute(ge(t.inputs[0],"Acosh","acosh"))},Cy=t=>{t.compute(ge(t.inputs[0],"Asin","asin"))},Ty=t=>{t.compute(ge(t.inputs[0],"Asinh","asinh"))},Ey=t=>{t.compute(ge(t.inputs[0],"Atan","atan"))},Ay=t=>{t.compute(ge(t.inputs[0],"Atanh","atanh"))},Iy=t=>be(t),My=(t,e)=>{let r;switch(e.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${e.to}`)}t.compute(ge(t.inputs[0],"Cast",r,void 0,e.cacheKey,e.to))},wp=t=>{let e,r,i=t.length>=2&&t[1].data!==0,s=t.length>=3&&t[2].data!==0;switch(t[0].dataType){case 1:e=i?t[1].getFloat32Array()[0]:-34028234663852886e22,r=s?t[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:e=i?t[1].getUint16Array()[0]:64511,r=s?t[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return be({min:e,max:r})},zy=(t,e)=>{let r=e||wp(t.inputs),i=tt(t.inputs[0].dataType);t.compute(ge(t.inputs[0],"Clip",s=>`clamp(${s}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:t.inputs[0].dataType,data:r.min},{type:t.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},Py=t=>{t.compute(ge(t.inputs[0],"Ceil","ceil"))},Ry=t=>{t.compute(ge(t.inputs[0],"Cos","cos"))},By=t=>{t.compute(ge(t.inputs[0],"Cosh","cosh"))},Ri=t=>be(t),Oy=(t,e)=>{let r=tt(t.inputs[0].dataType);t.compute(ge(t.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${e.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,e.cacheKey))},qs=(t="f32")=>`
const r0: ${t} = 0.3275911;
const r1: ${t} = 0.254829592;
const r2: ${t} = -0.284496736;
const r3: ${t} = 1.421413741;
const r4: ${t} = -1.453152027;
const r5: ${t} = 1.061405429;

fn erf_vf32(v: vec4<${t}>) -> vec4<${t}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Dy=t=>{let e=tt(t.inputs[0].dataType);t.compute(ge(t.inputs[0],"Erf",r=>`erf_vf32(${r})`,qs(e)))},Ny=t=>{t.compute(ge(t.inputs[0],"Exp","exp"))},Ly=t=>{t.compute(ge(t.inputs[0],"Floor","floor"))},Gy=t=>{let e=tt(t.inputs[0].dataType);t.compute(ge(t.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,qs(e)))},Uy=(t,e)=>{let r=tt(t.inputs[0].dataType);t.compute(ge(t.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${e.alpha});`,e.cacheKey))},Vy=t=>{t.compute(ge(t.inputs[0],"Not",e=>`!${e}`))},Fy=t=>{t.compute(ge(t.inputs[0],"Neg",e=>`-${e}`))},Wy=t=>{t.compute(ge(t.inputs[0],"Reciprocal",e=>`1.0/${e}`))},qy=t=>{let e=tt(t.inputs[0].dataType);t.compute(ge(t.inputs[0],"Relu",r=>`select(vec4<${e}>(0.0), ${r}, ${r} > vec4<${e}>(0.0))`))},Hy=t=>{t.compute(ge(t.inputs[0],"Sigmoid",e=>`(1.0 / (1.0 + exp(-${e})))`))},jy=t=>be(t),Yy=(t,e)=>{let r=tt(t.inputs[0].dataType);t.compute(ge(t.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${e.alpha} * ${i} + vec4<${r}>(${e.beta})))`,void 0,e.cacheKey))},Xy=t=>{t.compute(ge(t.inputs[0],"Sin","sin"))},Ky=t=>{t.compute(ge(t.inputs[0],"Sinh","sinh"))},Zy=t=>{t.compute(ge(t.inputs[0],"Sqrt","sqrt"))},Qy=t=>{t.compute(ge(t.inputs[0],"Tan","tan"))},Ua=t=>`sign(${t}) * (1 - exp(-2 * abs(${t}))) / (1 + exp(-2 * abs(${t})))`,Jy=t=>{t.compute(ge(t.inputs[0],"Tanh",Ua))},Wo=(t="f32")=>`
const fast_gelu_a: ${t} = 0.5;
const fast_gelu_b: ${t} = 0.7978845608028654;
const fast_gelu_c: ${t} = 0.035677408136300125;

fn tanh_v(v: vec4<${t}>) -> vec4<${t}> {
  return ${Ua("v")};
}
`,qo=t=>`(fast_gelu_a + fast_gelu_a * tanh_v(${t} * (fast_gelu_c * ${t} * ${t} + fast_gelu_b))) * ${t}`,e_=t=>{let e=tt(t.inputs[0].dataType);t.compute(ge(t.inputs[0],"FastGelu",qo,Wo(e),void 0,t.inputs[0].dataType))},t_=(t,e)=>{let r=tt(t.inputs[0].dataType);return t.compute(ge(t.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${e.alpha});`,e.cacheKey)),0},r_=t=>{t.compute(ge(t.inputs[0],"Log","log"))},xp=(t,e)=>`
const alpha = vec4<${t}>(${e});
const one = ${t}(1.0);
const zero = ${t}(0.0);

fn quick_gelu_impl(x: vec4<${t}>) -> vec4<${t}> {
  let v = x *alpha;
  var x1 : vec4<${t}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,vp=t=>`quick_gelu_impl(${t})`,i_=(t,e)=>{let r=tt(t.inputs[0].dataType);t.compute(ge(t.inputs[0],"QuickGelu",vp,xp(r,e.alpha),e.cacheKey,t.inputs[0].dataType))}}),$p,kp,s_,iS=j(()=>{ne(),oe(),Rl(),$p=t=>{if(t[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(t[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(t[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(t[0].dims[2]!==t[1].dims[0])throw new Error("last dimension of input and bias are not the same")},kp=t=>{let e=t[0].dims.slice();e[2]=e[2]/2;let r=U("input",t[0].dataType,t[0].dims,4),i=U("bias",t[0].dataType,[t[0].dims[2]],4),s=J("output",t[0].dataType,e,4),n=D.size(e)/4,a=Ve(t[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:e,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${t[0].dims[2]/4/2}u;

  ${o.declareVariables(r,i,s)}

  ${qs(a)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${s.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},s_=t=>{$p(t.inputs),t.compute(kp(t.inputs))}}),Sp,Cp,Tt,n_,a_,o_,l_,u_,d_,c_,h_,p_,f_,sS=j(()=>{ie(),ne(),oe(),Sp=(t,e,r,i,s,n,a,o,l,u,d,c)=>{let p,f;typeof o=="string"?p=f=(x,$)=>`${o}((${x}),(${$}))`:typeof o=="function"?p=f=o:(p=o.scalar,f=o.vector);let m=J("outputData",d,i.length,4),y=U("aData",l,e.length,4),b=U("bData",u,r.length,4),_;if(s)if(n){let x=D.size(e)===1,$=D.size(r)===1,S=e.length>0&&e[e.length-1]%4===0,E=r.length>0&&r[r.length-1]%4===0;x||$?_=m.setByOffset("global_idx",f(x?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),$?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"))):_=`
            let outputIndices = ${m.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",m)};
            let offsetB = ${b.broadcastedIndicesToOffset("outputIndices",m)};
            ${m.setByOffset("global_idx",f(a||S?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,a||E?b.getByOffset("offsetB / 4u"):`${b.type.value}(${b.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else _=m.setByOffset("global_idx",f(y.getByOffset("global_idx"),b.getByOffset("global_idx")));else{if(!n)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let x=($,S,E="")=>{let T=`aData[indexA${S}][componentA${S}]`,A=`bData[indexB${S}][componentB${S}]`;return`
            let outputIndices${S} = ${m.offsetToIndices(`global_idx * 4u + ${S}u`)};
            let offsetA${S} = ${y.broadcastedIndicesToOffset(`outputIndices${S}`,m)};
            let offsetB${S} = ${b.broadcastedIndicesToOffset(`outputIndices${S}`,m)};
            let indexA${S} = offsetA${S} / 4u;
            let indexB${S} = offsetB${S} / 4u;
            let componentA${S} = offsetA${S} % 4u;
            let componentB${S} = offsetB${S} % 4u;
            ${$}[${S}] = ${E}(${p(T,A)});
          `};d===9?_=`
            var data = vec4<u32>(0);
            ${x("data",0,"u32")}
            ${x("data",1,"u32")}
            ${x("data",2,"u32")}
            ${x("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:_=`
            ${x("outputData[global_idx]",0)}
            ${x("outputData[global_idx]",1)}
            ${x("outputData[global_idx]",2)}
            ${x("outputData[global_idx]",3)}
          `}return`
        ${t.registerUniform("vec_size","u32").declareVariables(y,b,m)}

        ${c??""}

        ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${_}
      }`},Cp=(t,e,r,i,s,n,a=r.dataType)=>{let o=r.dims.map(Number),l=i.dims.map(Number),u=!D.areEqual(o,l),d=o,c=D.size(o),p=!1,f=!1,m=[u];if(u){let y=ii.calcShape(o,l,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");d=y.slice(),c=D.size(d);let b=D.size(o)===1,_=D.size(l)===1,x=o.length>0&&o[o.length-1]%4===0,$=l.length>0&&l[l.length-1]%4===0;m.push(b),m.push(_),m.push(x),m.push($);let S=1;for(let E=1;E<d.length;E++){let T=o[o.length-E],A=l[l.length-E];if(T===A)S*=T;else break}S%4===0?(f=!0,p=!0):(b||_||x||$)&&(p=!0)}else p=!0;return m.push(p),{name:t,shaderCache:{hint:e+m.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>Sp(y,o,l,d,p,u,f,s,r.dataType,i.dataType,a,n),getRunData:()=>({outputs:[{dims:d,dataType:a}],dispatchGroup:{x:Math.ceil(c/64/4)},programUniforms:[{type:12,data:Math.ceil(D.size(d)/4)},...te(o,l,d)]})}},Tt=(t,e,r,i,s,n)=>{t.compute(Cp(e,s??"",t.inputs[0],t.inputs[1],r,i,n))},n_=t=>{Tt(t,"Add",(e,r)=>`${e}+${r}`)},a_=t=>{Tt(t,"Div",(e,r)=>`${e}/${r}`)},o_=t=>{Tt(t,"Equal",{scalar:(e,r)=>`u32(${e}==${r})`,vector:(e,r)=>`vec4<u32>(${e}==${r})`},void 0,void 0,9)},l_=t=>{Tt(t,"Mul",(e,r)=>`${e}*${r}`)},u_=t=>{let e=U("input",t.inputs[0].dataType,t.inputs[0].dims).type.value;Tt(t,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
    fn pow_custom(a : ${e}, b : ${e}) -> ${e} {
      if (b == ${e}(0.0)) {
        return ${e}(1.0);
      } else if (a < ${e}(0.0) && f32(b) != floor(f32(b))) {
        return ${e}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${e}(1.0), round(f32(abs(b) % ${e}(2.0))) != 1.0) * ${e}(${e==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${e}>, b : vec4<${e}>) -> vec4<${e}> {
      // TODO: implement vectorized pow
      return vec4<${e}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},d_=t=>{Tt(t,"Sub",(e,r)=>`${e}-${r}`)},c_=t=>{Tt(t,"Greater",{scalar:(e,r)=>`u32(${e}>${r})`,vector:(e,r)=>`vec4<u32>(${e}>${r})`},void 0,void 0,9)},h_=t=>{Tt(t,"Less",{scalar:(e,r)=>`u32(${e}<${r})`,vector:(e,r)=>`vec4<u32>(${e}<${r})`},void 0,void 0,9)},p_=t=>{Tt(t,"GreaterOrEqual",{scalar:(e,r)=>`u32(${e}>=${r})`,vector:(e,r)=>`vec4<u32>(${e}>=${r})`},void 0,void 0,9)},f_=t=>{Tt(t,"LessOrEqual",{scalar:(e,r)=>`u32(${e}<=${r})`,vector:(e,r)=>`vec4<u32>(${e}<=${r})`},void 0,void 0,9)}}),Tp,Ep,Ap,Ip,m_,g_,nS=j(()=>{ie(),ne(),ze(),oe(),Tp=(t,e)=>{if(!t||t.length<1)throw new Error("too few inputs");let r=0,i=t[r],s=i.dataType,n=i.dims.length;t.forEach((a,o)=>{if(o!==r){if(a.dataType!==s)throw new Error("input tensors should be one type");if(a.dims.length!==n)throw new Error("input tensors should have the same shape");a.dims.forEach((l,u)=>{if(u!==e&&l!==i.dims[u])throw new Error("non concat dimensions must match")})}})},Ep=(t,e)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${t}u>(${e});
    for (var i: u32 = 0u; i < ${t}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${t}u;
  }`,Ap=(t,e)=>{let r=t.length,i=[];for(let s=0;s<r;++s){let n=e.setByOffset("global_idx",t[s].getByIndices("indices"));r===1?i.push(n):s===0?i.push(`if (inputIndex == ${s}u) { ${n} }`):s===r-1?i.push(`else { ${n} }`):i.push(`else if (inputIndex == ${s}) { ${n} }`)}return i.join(`
`)},Ip=(t,e,r,i)=>{let s=D.size(r),n=new Array(t.length),a=new Array(t.length),o=0,l=[],u=[],d=[{type:12,data:s}];for(let y=0;y<t.length;++y)o+=t[y].dims[e],n[y]=o,u.push(t[y].dims.length),a[y]=U(`input${y}`,i,u[y]),l.push("rank"),d.push({type:12,data:n[y]});for(let y=0;y<t.length;++y)d.push(...te(t[y].dims));d.push(...te(r));let c=J("output",i,r.length),p=c.indicesGet("indices",e),f=Array.from(Array(n.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),m=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let b=0;b<t.length;b++)y.registerUniform(`sizeInConcatAxis${b}`,"u32");return y.declareVariables(...a,c)})()}

  ${Ep(n.length,f)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${c.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${p});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${n.length}u>(${f});
      ${p} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Ap(a,c)}
  }`;return{name:"Concat",shaderCache:{hint:`${e}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:m}},m_=(t,e)=>{let r=t.inputs,i=r[0].dims,s=D.normalizeAxis(e.axis,i.length);Tp(r,s);let n=i.slice();n[s]=r.reduce((o,l)=>o+(l.dims.length>s?l.dims[s]:0),0);let a=r.filter(o=>D.size(o.dims)>0);t.compute(Ip(a,s,n,r[0].dataType),{inputs:a})},g_=t=>be({axis:t.axis})}),Rr,Br,Or,Bl,Lr=j(()=>{ie(),ne(),Rr=(t,e,r="f32")=>{switch(t.activation){case"Relu":return`value = max(value, ${e}(0.0));`;case"Sigmoid":return`value = (${e}(1.0) / (${e}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${e}(${r}(uniforms.clip_min)), ${e}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${e}(0.0), min(${e}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${e}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${t.activation}`)}},Br=(t,e)=>{t.activation==="Clip"?e.push({type:1,data:t.clipMax},{type:1,data:t.clipMin}):t.activation==="HardSigmoid"?e.push({type:1,data:t.alpha},{type:1,data:t.beta}):t.activation==="LeakyRelu"&&e.push({type:1,data:t.alpha})},Or=(t,e)=>{t.activation==="Clip"?e.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):t.activation==="HardSigmoid"?e.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):t.activation==="LeakyRelu"&&e.push({name:"alpha",type:"f32"})},Bl=t=>{let e=(t==null?void 0:t.activation)||"";if(e==="HardSigmoid"){let[r,i]=(t==null?void 0:t.activation_params)||[.2,.5];return{activation:e,alpha:r,beta:i}}else if(e==="Clip"){let[r,i]=(t==null?void 0:t.activation_params)||[V0,F0];return{activation:e,clipMax:i,clipMin:r}}else if(e==="LeakyRelu"){let[r]=(t==null?void 0:t.activation_params)||[.01];return{activation:e,alpha:r}}return{activation:e}}}),je,y_,Ol=j(()=>{je=(t,e)=>{switch(t){case 1:return e;case 2:return`vec2<${e}>`;case 3:return`vec3<${e}>`;case 4:return`vec4<${e}>`;default:throw new Error(`${t}-component is not supported.`)}},y_=t=>`
      ${t?"value = value + getBiasByOutputCoords(coords);":""}
      `}),__,aS=j(()=>{__=t=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${t}.x), i32(${t}.y), i32(${t}.z), 1));
}
`}),Ui,Dl,Nl=j(()=>{ie(),ne(),oe(),Lr(),Ui=(t,e,r,i,s)=>{let n=i-r;return`
      ${Array.from({length:r}).map((a,o)=>`
      if (${ee(e.shape,o,e.rank)} != 1) {
        ${e.indicesSet(t,o,ee(s,o+n,i))}
      } else {
        ${e.indicesSet(t,o,0)}
      }`).join("")}
`},Dl=(t,e,r,i,s=!1,n)=>{let a=t[0].dims,o=t[1].dims,l=a[a.length-2],u=o[o.length-1],d=a[a.length-1],c=Ae(u),p=Ae(d),f=Ae(l),m=D.size(r)/c/f,y=t.length>2,b=i?i.slice(0,-2):r.slice(0,-2),_=[D.size(b),l,u],x=[{type:12,data:m},{type:12,data:l},{type:12,data:u},{type:12,data:d}];Br(e,x),x.push(...te(b,a,o)),y&&x.push(...te(t[2].dims)),x.push(...te(_));let $=S=>{let E=Ml("batch_dims",t[0].dataType,b.length),T=U("a",t[0].dataType,a.length,p),A=U("b",t[1].dataType,o.length,c),k=J("output",t[0].dataType,_.length,c),P=Ve(k.type.tensor),M=Rr(e,k.type.value,P),N=[T,A],W="";if(y){let q=s?c:1;N.push(U("bias",t[2].dataType,t[2].dims.length,q)),W=`${s?`value += bias[col / ${q}];`:`value += ${k.type.value}(bias[row + i]);`}`}let L=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Or(e,L);let R=()=>{let q=`var a_data: ${T.type.value};`;for(let O=0;O<p;O++)q+=`
              let b_data${O} = b[(b_offset + (k + ${O}) * uniforms.N + col) / ${c}];`;for(let O=0;O<f;O++){q+=`a_data = a[(a_offset + (row + ${O}) * uniforms.K + k) / ${p}];`;for(let V=0;V<p;V++)q+=`
            values[${O}] = fma(${A.type.value}(a_data${p===1?"":`[${V}]`}), b_data${V}, values[${O}]);
`}return q};return`
  ${S.registerUniforms(L).registerInternalVariables(E).declareVariables(...N,k)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${c})) * ${c};
    var index1 = global_idx / (uniforms.N / ${c});
    let stride1 = uniforms.M / ${f};
    let row = (index1 % stride1) * ${f};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${E.offsetToIndices("batch")};`}

    var a_indices: ${T.type.indices};
    ${Ui("a_indices",T,T.rank-2,E.rank,"batch_indices")}
    ${T.indicesSet("a_indices",T.rank-2,0)}
    ${T.indicesSet("a_indices",T.rank-1,0)}
    let a_offset = ${T.indicesToOffset("a_indices")};

    var b_indices: ${A.type.indices};
    ${Ui("b_indices",A,A.rank-2,E.rank,"batch_indices")}
    ${A.indicesSet("b_indices",A.rank-2,0)}
    ${A.indicesSet("b_indices",A.rank-1,0)}
    let b_offset = ${A.indicesToOffset("b_indices")};
    var values: array<${k.type.value}, ${f}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${p}) {
      ${R()}
    }
    for (var i = 0u; i < ${f}u; i++) {
      var value = values[i];
      ${W}
      ${M}
      let cur_indices = ${k.type.indices}(batch, row + i, col);
      let offset = ${k.indicesToOffset("cur_indices")};
      ${k.setByOffset(`offset / ${c}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${e.activation};${c};${p};${f};${s}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:x}),getShaderSource:$}}}),Mp,zp,Ho,Va,Pp,jo,Rp,tn,Ll=j(()=>{ie(),ne(),oe(),Lr(),Nl(),Ol(),Mp=(t,e)=>t?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${e?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${e?", batchIndices":""});
        `,zp=(t,e)=>t?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${e===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${e===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${e===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Ho=(t,e,r="f32",i,s=!1,n=32,a=!1,o=32)=>{let l=e[1]*t[1],u=e[0]*t[0],d=s?l:n,c=s?n:l,p=d/e[0],f=n/e[1];if(!((s&&p===4&&t[1]===4||!s&&(p===3||p===4))&&d%e[0]===0&&n%e[1]===0&&t[0]===4))throw new Error(`If transposeA ${s} is true, innerElementSize ${p} and workPerThread[1] ${t[1]} must be 4.
      Otherwise, innerElementSize ${p} must be 3 or 4.
  tileAWidth ${d} must be divisible by workgroupSize[0]${e[0]}. tileInner ${n} must be divisible by workgroupSize[1] ${e[1]}. colPerThread ${t[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${p}<${r}>, ${d/p}>, ${c}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${u/t[0]}>, ${n}>;

const rowPerThread = ${t[1]};
const colPerThread = ${t[0]};
const innerElementSize = ${p};
const tileInner = ${n};

@compute @workgroup_size(${e[0]}, ${e[1]}, ${e[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${a?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${a?`${Math.ceil(o/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${a?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${f};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Mp(s,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${f}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${p===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${zp(s,p)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Va=(t,e)=>t?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${e?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${e?", batchIndices":""});
            `,Pp=t=>t?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",jo=(t,e,r="f32",i,s=!1,n=32,a=!1,o=32,l=!1)=>{let u=t[1]*e[1],d=t[0]*e[0],c=s?u:n,p=s?n:u;if(!(p%e[1]===0&&c%e[0]===0&&n%e[1]===0))throw new Error(`tileAHight ${p} must be divisible by workgroupSize[1]${e[1]}, tileAWidth ${c} must be divisible by workgroupSize[0]${e[0]}, tileInner ${n} must be divisible by workgroupSize[1]${e[1]}`);let f=p/e[1],m=c/e[0],y=n/e[1],b=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${u};
    let globalColStart = i32(workgroupId.x) * ${d};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${p}; inputRow = inputRow + ${e[1]}) {
        for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${e[0]}) {
          ${Va(s,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${n}; inputRow = inputRow + ${e[1]}) {
            for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${e[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${e[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${s?`mm_Asub[k][localRow + innerRow * ${e[1]}];`:`mm_Asub[localRow + innerRow * ${e[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${e[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${e[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${u};

let tileRowA = i32(localId.y) * ${f};
let tileColA = i32(localId.x) * ${m};
let tileRowB = i32(localId.y) * ${y};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${f}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${m}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Va(s,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Pp(s)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${c}>, ${p}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${d}>, ${n}>;
  const rowPerThread = ${t[1]};
  const colPerThread = ${t[0]};
  const tileInner = ${n};

@compute @workgroup_size(${e[0]}, ${e[1]}, ${e[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${a?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${a?`${Math.ceil(o/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${a?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${b}
  }
`},Rp=(t,e,r,i,s=!1)=>{let[n,a,o,l]=i,u=Ve(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${je(t,u)} {
      var value = ${je(t,u)}(0.0);
      let col = colIn * ${t};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${a.type.indices};
        ${Ui("aIndices",a,a.rank-2,n.rank,"batchIndices")}
        ${a.indicesSet("aIndices",a.rank-2,"u32(row)")}
        ${a.indicesSet("aIndices",a.rank-1,"u32(colIn)")}
        value = ${a.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${je(t,u)} {
      var value = ${je(t,u)}(0.0);
      let col = colIn * ${t};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${Ui("bIndices",o,o.rank-2,n.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${je(t,u)}) {
      let col = colIn * ${t};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${e?`value = value + ${s?"bias[colIn]":`${je(t,u)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},tn=(t,e,r,i,s=!1,n)=>{let a=t[0].dims,o=t[1].dims,l=a.slice(0,-2),u=o.slice(0,-2),d=i?i.slice(0,-2):r.slice(0,-2),c=D.size(d),p=a[a.length-2],f=a[a.length-1],m=o[o.length-1],y=f%4===0&&m%4===0,b=p<=8?[4,1,1]:[4,4,1],_=[8,8,1],x=[Math.ceil(m/_[0]/b[0]),Math.ceil(p/_[1]/b[1]),Math.ceil(c/_[2]/b[2])],$=y?4:1,S=[...l,p,f/$],E=S.length,T=[...u,f,m/$],A=T.length,k=[c,p,m/$],P=[{type:6,data:p},{type:6,data:m},{type:6,data:f}];Br(e,P),P.push(...te(d,S,T));let M=["rank","rank"],N=t.length>2;N&&(P.push(...te(t[2].dims)),M.push("rank")),P.push(...te(k));let W=L=>{let R=d.length,q=Ml("batchDims",t[0].dataType,R,1),O=Ve(t[0].dataType),V=U("a",t[0].dataType,E,$),ae=U("b",t[1].dataType,A,$),F=J("result",t[0].dataType,k.length,$),se=[V,ae];if(N){let he=s?$:1;se.push(U("bias",t[2].dataType,t[2].dims.length,he))}let H=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Or(e,H);let K=Ve(F.type.tensor),Z=Rr(e,F.type.value,K),Y=Rp($,N,Z,[q,V,ae,F],s);return`
  ${L.registerUniforms(H).registerInternalVariables(q).declareVariables(...se,F)}
  ${Y}
  ${y?Ho(b,_,O,q):jo(b,_,O,q)}
                   `};return{name:"MatMul",shaderCache:{hint:`${b};${e.activation};${y};${s}`,inputDependencies:M},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:t[0].dataType}],dispatchGroup:{x:x[0],y:x[1],z:x[2]},programUniforms:P}),getShaderSource:W}}}),Bp,b_,oS=j(()=>{ie(),Jt(),oe(),Lr(),Ol(),aS(),Ll(),Bp=(t,e,r,i,s=!1,n,a=4,o=4,l=4,u="f32")=>{let d=P=>{switch(P){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${u}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${P} is not supported.`)}},c=P=>{switch(P){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${P} is not supported.`)}},p=t?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,f=t?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,m=t?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",y=t?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",b=t?"row":"col",_=t?"col":"row",x=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${t?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${b} / outWidth;
    let outCol = ${b} % outWidth;

    let WRow = ${_} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${_} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${_} % inChannels;
    var resData = ${je(a,u)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${m} && xCol >= 0 && xCol < ${y}) {
      ${p}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${d(a)}
    }
    return resData;`,$=t?e&&i?`
    let col = colIn * ${a};
    ${x}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${x}
    }
    return ${je(a,u)}(0.0);`:i&&r?`
    let col = colIn * ${a};
    ${x}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${x}
    }
    return ${je(a,u)}(0.0);`,S=t?i&&r?c(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${c(o)}
    }
    return ${je(o,u)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${c(o)}
    }
    return ${je(o,u)}(0.0);`,E=je(l,u),T=je(t?a:o,u),A=je(t?o:a,u),k=Rr(n,E,u);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${T} {
      ${t?$:S}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${A} {
      ${t?S:$}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${E}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${t?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${f}
      ${y_(s)}
      ${k}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},b_=(t,e,r,i,s,n,a,o,l)=>{let u=e.format==="NHWC",d=u?t[0].dims[3]:t[0].dims[1],c=r[0],p=u?r[2]:r[3],f=u?r[1]:r[2],m=u?r[3]:r[1],y=u&&(d%4===0||d%3===0)&&m%4===0,b=u?m:p*f,_=u?p*f:m,x=[8,8,1],$=i<=8?[4,1,1]:[4,4,1],S=[Math.ceil(b/x[0]/$[0]),Math.ceil(_/x[1]/$[1]),Math.ceil(c/x[2]/$[2])];pe("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${S}`);let E=y?u&&d%4!==0?3:4:1,T=x[1]*$[1],A=x[0]*$[0],k=Math.max(x[0]*E,x[1]),P=i%T===0,M=s%A===0,N=n%k===0,W=y?[E,4,4]:[1,1,1],L=[{type:6,data:i},{type:6,data:s},{type:6,data:n},{type:6,data:[e.pads[0],e.pads[1]]},{type:6,data:e.strides},{type:6,data:e.dilations}];Br(e,L),L.push(...te(t[0].dims,t[1].dims));let R=["rank","rank"];a&&(L.push(...te(t[2].dims)),R.push("rank")),L.push(...te(r));let q=O=>{let V=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Or(e,V);let ae=y?4:1,F=Ve(t[0].dataType),se=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${F}>`:F}) {
        result[flatIndex] = ${y?`vec4<${F}>`:F}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${F}>`:F}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,H=U("x",t[0].dataType,t[0].dims.length,E===3?1:E),K=U("w",t[1].dataType,t[1].dims.length,ae),Z=[H,K],Y=J("result",t[0].dataType,r.length,ae);if(a){let he=U("bias",t[2].dataType,t[2].dims.length,ae);Z.push(he),se+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${F}>`:F} {
          return bias[coords.${u?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${__("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${O.registerUniforms(V).declareVariables(...Z,Y)}
        ${se}
        ${Bp(u,P,M,N,a,e,W[0],W[1],W[2],F)}
        ${y?Ho($,x,F,void 0,!u,k):jo($,x,F,void 0,!u,k,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${e.cacheKey};${E};${y};${P};${M};${N};${T};${A};${k}`,inputDependencies:R},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:t[0].dataType}],dispatchGroup:{x:S[0],y:S[1],z:S[2]},programUniforms:L}),getShaderSource:q}}}),Op,Fa,vi,Dp,Wa,Np,w_,x_,lS=j(()=>{ie(),Jt(),ne(),oe(),Lr(),Ol(),Op=t=>{let e=1;for(let r=0;r<t.length;r++)e*=t[r];return e},Fa=t=>typeof t=="number"?[t,t,t]:t,vi=(t,e)=>e<=1?t:t+(t-1)*(e-1),Dp=(t,e,r,i=1)=>{let s=vi(e,i);return Math.floor((t[0]*(r-1)-r+s)/2)},Wa=(t,e,r,i,s)=>{s==null&&(s=Dp(t,e[0],i[0]));let n=[0,0,0,r];for(let a=0;a<3;a++)t[a]+2*s>=e[a]&&(n[a]=Math.trunc((t[a]-e[a]+2*s)/i[a]+1));return n},Np=(t,e,r,i,s,n,a,o,l,u)=>{let d,c,p,f;if(t==="VALID"&&(t=0),typeof t=="number"){d={top:t,bottom:t,left:t,right:t,front:t,back:t};let m=Wa([e,r,i,1],[o,l,u],1,[s,n,a],t);c=m[0],p=m[1],f=m[2]}else if(Array.isArray(t)){if(!t.every((y,b,_)=>y===_[0]))throw Error(`Unsupported padding parameter: ${t}`);d={top:t[0],bottom:t[1],left:t[2],right:t[3],front:t[4],back:t[5]};let m=Wa([e,r,i,1],[o,l,u],1,[s,n,a],t[0]);c=m[0],p=m[1],f=m[2]}else if(t==="SAME_UPPER"){c=Math.ceil(e/s),p=Math.ceil(r/n),f=Math.ceil(i/a);let m=(c-1)*s+o-e,y=(p-1)*n+l-r,b=(f-1)*a+u-i,_=Math.floor(m/2),x=m-_,$=Math.floor(y/2),S=y-$,E=Math.floor(b/2),T=b-E;d={top:$,bottom:S,left:E,right:T,front:_,back:x}}else throw Error(`Unknown padding parameter: ${t}`);return{padInfo:d,outDepth:c,outHeight:p,outWidth:f}},w_=(t,e,r,i,s,n=!1,a="channelsLast")=>{let o,l,u,d,c;if(a==="channelsLast")[o,l,u,d,c]=t;else if(a==="channelsFirst")[o,c,l,u,d]=t;else throw new Error(`Unknown dataFormat ${a}`);let[p,,f,m,y]=e,[b,_,x]=Fa(r),[$,S,E]=Fa(i),T=vi(f,$),A=vi(m,S),k=vi(y,E),{padInfo:P,outDepth:M,outHeight:N,outWidth:W}=Np(s,l,u,d,b,_,x,T,A,k),L=n?p*c:p,R=[0,0,0,0,0];return a==="channelsFirst"?R=[o,L,M,N,W]:a==="channelsLast"&&(R=[o,M,N,W,L]),{batchSize:o,dataFormat:a,inDepth:l,inHeight:u,inWidth:d,inChannels:c,outDepth:M,outHeight:N,outWidth:W,outChannels:L,padInfo:P,strideDepth:b,strideHeight:_,strideWidth:x,filterDepth:f,filterHeight:m,filterWidth:y,effectiveFilterDepth:T,effectiveFilterHeight:A,effectiveFilterWidth:k,dilationDepth:$,dilationHeight:S,dilationWidth:E,inShape:t,outShape:R,filterShape:e}},x_=(t,e,r,i,s,n)=>{let a=n==="channelsLast";a?t[0].dims[3]:t[0].dims[1];let o=[64,1,1],l={x:r.map((b,_)=>_)},u=[Math.ceil(Op(l.x.map(b=>r[b]))/o[0]),1,1];pe("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${u}`);let d=1,c=D.size(r),p=[{type:12,data:c},{type:12,data:i},{type:12,data:s},{type:12,data:e.strides},{type:12,data:e.dilations}];Br(e,p),p.push(...te(t[0].dims,t[1].dims));let f=["rank","rank"],m=t.length===3;m&&(p.push(...te(t[2].dims)),f.push("rank")),p.push(...te(r));let y=b=>{let _=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:s.length},{name:"strides",type:"u32",length:e.strides.length},{name:"dilations",type:"u32",length:e.dilations.length}];Or(e,_);let x=1,$=Ve(t[0].dataType),S=U("x",t[0].dataType,t[0].dims.length,d),E=U("W",t[1].dataType,t[1].dims.length,x),T=[S,E],A=J("result",t[0].dataType,r.length,x),k="";if(m){let N=U("bias",t[2].dataType,t[2].dims.length,x);T.push(N),k+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${$} {
          return bias[${a?ee("coords",4,5):ee("coords",1,5)}];
        }`}let P=je(d,$),M=Rr(e,P,$);return`
            ${k}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${S.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${E.getByIndices("aIndices")};
            }
          ${b.registerUniforms(_).declareVariables(...T,A)}
          ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${A.offsetToIndices("global_idx")};
              let batch = ${ee("coords",0,S.rank)};
              let d2 = ${a?ee("coords",S.rank-1,S.rank):ee("coords",1,S.rank)};
              let xFRCCorner = vec3<u32>(${a?ee("coords",1,S.rank):ee("coords",2,S.rank)},
              ${a?ee("coords",2,S.rank):ee("coords",3,S.rank)},
              ${a?ee("coords",3,S.rank):ee("coords",4,S.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?ee("uniforms.x_shape",1,S.rank):ee("uniforms.x_shape",2,S.rank)};
              let xShapeZ = ${a?ee("uniforms.x_shape",2,S.rank):ee("uniforms.x_shape",3,S.rank)};
              let xShapeW = ${a?ee("uniforms.x_shape",3,S.rank):ee("uniforms.x_shape",4,S.rank)};
              let xShapeU = ${a?ee("uniforms.x_shape",4,S.rank):ee("uniforms.x_shape",1,S.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${a?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${a?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${a?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${a?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${m?"value = value + getBiasByOutputCoords(coords)":""};
              ${M}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${e.cacheKey};${a};${d};${m}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:r,dataType:t[0].dataType}],dispatchGroup:{x:u[0],y:u[1],z:u[2]},programUniforms:p}),getShaderSource:y}}}),v_,$_,uS=j(()=>{ie(),ne(),oe(),Lr(),v_=(t,e,r,i)=>{let s=t.length>2,n=s?"value += b[output_channel];":"",a=t[0].dims,o=t[1].dims,l=e.format==="NHWC",u=l?r[3]:r[1],d=u/e.group,c=l&&d>=4?Ae(u):1,p=D.size(r)/c,f=[{type:12,data:p},{type:12,data:e.dilations},{type:12,data:[e.strides[0],e.strides[1]]},{type:12,data:[e.pads[0],e.pads[1]]},{type:12,data:d}];Br(e,f),f.push(...te(a,[o[0],o[1],o[2],o[3]/c]));let m=s?["rank","rank","rank"]:["rank","rank"];f.push(...te([r[0],r[1],r[2],r[3]/c]));let y=b=>{let _=J("output",t[0].dataType,r.length,c),x=Ve(_.type.tensor),$=Rr(e,_.type.value,x),S=U("x",t[0].dataType,a.length),E=U("w",t[1].dataType,o.length,c),T=[S,E];s&&T.push(U("b",t[2].dataType,t[2].dims,c));let A=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:e.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Or(e,A);let k=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${S.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${E.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${S.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${E.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${b.registerUniforms(A).declareVariables(...T,_)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${_.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${c} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${_.type.value} = ${_.type.value}(0);
    ${k}
    ${n}
    ${$}
    ${_.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${e.cacheKey}_${c}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:y}},$_=(t,e,r,i)=>{let s=t.length>2,n=Ae(r[3]),a=Ae(r[2]),o=D.size(r)/n/a,l=[t[0].dims[0],t[0].dims[1],t[0].dims[2],t[0].dims[3]/n],u=[t[1].dims[0],t[1].dims[1],t[1].dims[2],t[1].dims[3]/n],d=[r[0],r[1],r[2],r[3]/n],c=[{type:12,data:o},{type:6,data:[e.strides[0],e.strides[1]]},{type:6,data:[e.pads[0],e.pads[1]]}];Br(e,c),c.push(...te(l,u,d));let p=(a-1)*e.strides[1]+u[1],f=m=>{let y=J("output",t[0].dataType,d.length,n),b=Ve(y.type.tensor),_=Rr(e,y.type.value,b),x=U("x",t[0].dataType,l.length,n),$=U("w",t[1].dataType,u.length,n),S=[x,$];s&&S.push(U("b",t[2].dataType,t[2].dims,n));let E=s?"value += b[output_channel];":"",T=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Or(e,T),`
  ${m.registerUniforms(T).declareVariables(...S,y)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${a}u;
    let col = (index1 % width1) * ${a}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${x.type.value}, ${p}>;
    var values: array<${y.type.value}, ${a}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${u[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${p}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${x.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${x.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${u[1]}; w_width++) {
          let w_val = ${$.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${a}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${a}u; i++) {
      var value = values[i];
      ${E}
      ${_}
      ${y.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${e.cacheKey};${n};${a};${p};${u[0]};${u[1]}`,inputDependencies:s?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:c}),getShaderSource:f}}}),Lp,Bs,Gp,Os,Yo,qa,Up,Vp,Xo,dS=j(()=>{ne(),oS(),lS(),Ll(),uS(),Lr(),Nl(),hr(),Lp=(t,e,r,i,s,n)=>{let a=t[0],o=t.slice(n?1:2,n?3:4),l=o.length,u=e[0],d=e.slice(2).map((p,f)=>p+(p-1)*(r[f]-1)),c=o.map((p,f)=>p+i[f]+i[f+l]).map((p,f)=>Math.floor((p-d[f]+s[f])/s[f]));return c.splice(0,0,a),c.splice(n?3:1,0,u),c},Bs=[2,3,1,0],Gp=(t,e)=>{if(!t||t.length!==2&&t.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(t[0].dims.length>5)throw new Error("greater than 5D is not supported");if(t[0].dims.length!==t[1].dims.length)throw new Error("filter does not have same dimension as input");let r=t[0].dims[e.format==="NHWC"?t[0].dims.length-1:1],i=t[1].dims[1]*e.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(t.length===3&&(t[2].dims.length!==1||t[1].dims[0]!==t[2].dims[0]))throw new Error("invalid bias");let s=t[0].dims.length-2;if(e.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(e.strides.length!==s)throw new Error(`strides should be ${s}D`);if(e.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(e.kernelShape.length!==0&&e.kernelShape.length!==t[1].dims.length-2)throw new Error("invalid kernel shape")},Os=(t,e)=>{let r=t.kernelShape.slice();r.length<e[1].dims.length-2&&r.push(...Array(e[1].dims.length-2-r.length).fill(0));for(let n=2;n<e[1].dims.length;++n)r[n-2]===0&&(r[n-2]=e[1].dims[n]);let i=t.pads.slice();Js.adjustPadsBasedOnAutoPad(e[0].dims,t.strides,t.dilations,r,i,t.format==="NHWC",t.autoPad);let s=Object.assign({},t);return Object.assign(s,{kernelShape:r,pads:i}),s},Yo=t=>{let e=Bl(t),r=t.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][t.auto_pad],s=t.dilations,n=t.group,a=t.kernel_shape,o=t.pads,l=t.strides,u=t.w_is_const();return{autoPad:i,format:r,dilations:s,group:n,kernelShape:a,pads:o,strides:l,wIsConst:u,...e,cacheKey:`${t.format};${e.activation};`}},qa=(t,e,r,i)=>{let s=r.format==="NHWC",n=Lp(e[0].dims,e[1].dims,r.dilations,r.pads,r.strides,s);if(r.group!==1){let T=[e[0]];if(s){let A=t.kernelCustomData.wT??t.compute(ft(e[1],Bs),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!t.kernelCustomData.wT&&(t.kernelCustomData.wT=A),T.push(A)}else T.push(e[1]);e.length===3&&T.push(e[2]),!t.adapterInfo.isArchitecture("ampere")&&s&&e[1].dims[0]===r.group&&e[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?t.compute($_(T,r,n,i),{inputs:T}):t.compute(v_(T,r,n,i),{inputs:T});return}let a=e.length===3,o=e[0].dims[s?1:2],l=e[0].dims[s?2:3],u=e[0].dims[s?3:1],d=e[1].dims[2],c=e[1].dims[3],p=n[s?1:2],f=n[s?2:3],m=n[s?3:1],y=s&&d===o&&c===l&&r.pads[0]===0&&r.pads[1]===0;if(y||d===1&&c===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let T=n[0],A,k,P,M=[];if(s){let L=t.kernelCustomData.wT??t.compute(ft(e[1],Bs),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!t.kernelCustomData.wT&&(t.kernelCustomData.wT=L),y){let R=o*l*u;A=e[0].reshape([1,T,R]),k=L.reshape([1,R,m]),P=[1,T,m]}else A=e[0].reshape([T,o*l,u]),k=L.reshape([1,u,m]),P=[T,p*f,m];M.push(A),M.push(k)}else A=e[0].reshape([T,u,o*l]),k=e[1].reshape([1,m,u]),P=[T,m,p*f],M.push(k),M.push(A);a&&M.push(e[2]);let N=P[2],W=M[0].dims[M[0].dims.length-1];N<8&&W<8?t.compute(Dl(M,r,n,P,s,i),{inputs:M}):t.compute(tn(M,r,n,P,s,i),{inputs:M});return}let b=!0,_=t.kernelCustomData.wT??t.compute(ft(e[1],Bs),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!t.kernelCustomData.wT&&(t.kernelCustomData.wT=_);let x=[e[0],_];a&&x.push(e[2]);let $=s?p*f:m,S=s?m:p*f,E=d*c*u;t.compute(b_(x,r,n,$,S,E,a,b,i),{inputs:x})},Up=(t,e)=>{let r=e.format==="NHWC",i=[t.inputs[0].reshape(r?[t.inputs[0].dims[0],1,t.inputs[0].dims[1],t.inputs[0].dims[2]]:[t.inputs[0].dims[0],t.inputs[0].dims[1],1,t.inputs[0].dims[2]]),t.inputs[1].reshape([t.inputs[1].dims[0],t.inputs[1].dims[1],1,t.inputs[1].dims[2]])];t.inputs.length===3&&i.push(t.inputs[2]);let s=[0,e.pads[0],0,e.pads[1]],n=[1].concat(e.strides),a=[1].concat(e.dilations),o=[1].concat(e.kernelShape),l=Os({...e,pads:s,strides:n,dilations:a,kernelShape:o},i);qa(t,i,l,u=>r?[u[0],u[2],u[3]]:[u[0],u[1],u[3]])},Vp=(t,e,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",s=Os(r,e),n=r.autoPad==="NOTSET"?r.pads:r.autoPad,a=w_(e[0].dims,e[1].dims,r.strides,r.dilations,n,!1,i);t.compute(x_(e,s,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],i))},Xo=(t,e)=>{if(Gp(t.inputs,e),t.inputs[0].dims.length===3)Up(t,e);else if(t.inputs[0].dims.length===5)Vp(t,t.inputs,e);else{let r=Os(e,t.inputs);qa(t,t.inputs,r)}}}),k_,cS=j(()=>{ie(),Jt(),ne(),oe(),k_=(t,e,r)=>{let i=t.length>2,s=e.outputShape,n=e.format==="NHWC",a=e.group,o=t[1].dims,l=o[2]/a,u=o[3],d=n?Ae(l):1,c=n&&u===1&&l>=4,p=c?Math.floor(l/4)*4:Math.floor(l/d)*d,f=l-p,m=n?Ae(u):1,y=n?u===1?d:m:1,b=D.size(s)/m,_=[Math.ceil(b/64),1,1];pe("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${_}`);let x=["rank","rank"],$=[e.strides[0],e.strides[1]],S=[e.kernelShape[n?1:2],e.kernelShape[n?2:3]],E=[e.dilations[0],e.dilations[1]],T=[S[0]+(e.dilations[0]<=1?0:(e.kernelShape[n?1:2]-1)*(e.dilations[0]-1)),S[1]+(e.dilations[1]<=1?0:(e.kernelShape[n?2:3]-1)*(e.dilations[1]-1))],A=[T[0]-1-Math.floor((e.pads[0]+e.pads[2])/2),T[1]-1-Math.floor((e.pads[1]+e.pads[3])/2)],k=[{type:12,data:b},{type:12,data:$},{type:12,data:S},{type:12,data:E},{type:12,data:T},{type:6,data:A},{type:12,data:p},{type:12,data:l},{type:12,data:u},...te(t[0].dims,t[1].dims)];i&&(k.push(...te(t[2].dims)),x.push("rank")),k.push(...te(s));let P=M=>{let N=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:$.length},{name:"filter_dims",type:"u32",length:S.length},{name:"dilations",type:"u32",length:S.length},{name:"effective_filter_dims",type:"u32",length:T.length},{name:"pads",type:"i32",length:A.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],W=Ve(t[0].dataType),L=n?1:2,R=n?2:3,q=n?3:1,O=U("W",t[1].dataType,t[1].dims.length,y),V=U("Dy",t[0].dataType,t[0].dims.length,d),ae=[V,O];i&&ae.push(U("bias",t[2].dataType,[s[q]].length,m));let F=J("result",t[0].dataType,s.length,m),se=()=>{let Z="";if(c)d===4?Z+=`
        let xValue = ${V.getByOffset("x_offset")};
        let wValue = ${O.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:d===2?Z+=`
          dotProd = dotProd + dot(vec4<${W}>(${V.getByOffset("x_offset")}, ${V.getByOffset("x_offset + 1u")}), vec4<${W}>(${O.getByOffset("w_offset")}, ${O.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:d===1&&(Z+=`
          dotProd = dotProd + dot(vec4<${W}>(${V.getByOffset("x_offset")}, ${V.getByOffset("x_offset + 1u")}, ${V.getByOffset("x_offset + 2u")}, ${V.getByOffset("x_offset + 3u")}), vec4<${W}>(${O.getByOffset("w_offset")}, ${O.getByOffset("w_offset + 1u")}, ${O.getByOffset("w_offset + 2u")}, ${O.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(Z+=`
                  let xValue = ${n?V.getByOffset(`${V.indicesToOffset(`${V.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${d}`):V.get("batch","inputChannel","idyR","idyC")};
        `,d===1)Z+=`
          let w_offset = ${O.indicesToOffset(`${O.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${O.getByOffset(`w_offset / ${y}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let Y=0;Y<d;Y++)Z+=`
            let wValue${Y} = ${O.getByOffset(`${O.indicesToOffset(`${O.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${Y}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${Y}] * wValue${Y};`;return Z},H=()=>{if(f===0)return"";if(!c)throw new Error(`packInputAs4 ${c} is not true.`);let Z="";if(d===1){Z+="dotProd = dotProd";for(let Y=0;Y<f;Y++)Z+=`
            + ${V.getByOffset(`x_offset + ${Y}`)} * ${O.getByOffset(`w_offset + ${Y}`)}`;Z+=";"}else if(d===2){if(f!==2)throw new Error(`Invalid inputChannelsRemainder ${f}.`);Z+=`
          let xValue = ${V.getByOffset("x_offset")};
          let wValue = ${O.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return Z},K=`
            let outputIndices = ${F.offsetToIndices(`global_idx * ${m}`)};
            let batch = ${F.indicesGet("outputIndices",0)};
            let d1 = ${F.indicesGet("outputIndices",q)};
            let r = ${F.indicesGet("outputIndices",L)};
            let c = ${F.indicesGet("outputIndices",R)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${F.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${W}(dyRCorner) + ${W}(wR)) / ${W}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${W}(uniforms.Dy_shape[${L}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${W}(dyCCorner) + ${W}(wC)) / ${W}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${W}(uniforms.Dy_shape[${R}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${c?`
                var x_offset = ${V.indicesToOffset(`${V.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${d};
                var w_offset = ${O.indicesToOffset(`${O.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${y};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${c?4:d}) {
                  ${se()}
                  inputChannel = inputChannel + ${c?4:d};
                }
                ${H()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${m}]`:""};
            ${F.setByOffset("global_idx","value")};
          `;return`
    ${M.registerUniforms(N).declareVariables(...ae,F)}
      ${M.mainStart()}
      ${M.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${K}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${e.cacheKey};${d}${y}${m}${c}${f}`,inputDependencies:x},getRunData:()=>({dispatchGroup:{x:_[0],y:_[1],z:_[2]},outputs:[{dims:r?r(s):s,dataType:t[0].dataType}],programUniforms:k}),getShaderSource:P}}}),Fp,Wp,qp,Ha,S_,Hp,ja,jp,C_,hS=j(()=>{cS(),Lr(),hr(),Fp=(t,e,r,i,s,n)=>(t-1)*e+r+(i-1)*s+1-n,Wp=(t,e,r,i,s)=>{let n=Math.floor(t/2);e==="SAME_UPPER"?(r[i]=n,r[s]=t-n):e==="SAME_LOWER"&&(r[i]=t-n,r[s]=n)},qp=(t,e,r,i,s,n,a,o,l,u)=>{let d=t.length-2,c=u.length===0;l.length<d&&l.push(...Array(d-l.length).fill(0));let p=t[0],f=e[o?3:1]*s;for(let m=0,y=t.length-d-(o?1:0);m<d;++m,++y){let b=t[y],_=c?b*a[m]:u[m],x=Fp(b,a[m],n[m],e[y],r[m],_);Wp(x,i,n,m,m+d),c&&u.push(a[m]*(b-1)+l[m]+(e[y]-1)*r[m]+1-n[m]-n[m+d])}u.splice(0,0,p),u.splice(o?3:1,0,f)},Ha=(t,e)=>{let r=t.kernelShape.slice();if(t.kernelShape.length===0||t.kernelShape.reduce((c,p)=>c*p,1)===0){r.length=0;for(let c=2;c<e[1].dims.length;++c)r.push(e[1].dims[c])}let i=t.format==="NHWC";r.splice(0,0,e[1].dims[0]),r.splice(i?3:1,0,e[1].dims[1]);let s=t.pads.slice(),n=t.outputShape.slice(),a=t.outputPadding.slice(),o=e[0].dims,l=t.dilations.slice();if(l.reduce((c,p)=>c+p,0)===0){let c=e[0].dims.length-2;l=new Array(c).fill(1)}let u=t.strides.slice();if(u.reduce((c,p)=>c+p,0)===0){let c=e[0].dims.length-2;u=new Array(c).fill(1)}qp(o,r,l,t.autoPad,t.group,s,u,i,a,n);let d=Object.assign({},t);return Object.assign(d,{kernelShape:r,pads:s,outputPadding:a,outputShape:n,dilations:l,strides:u}),d},S_=t=>{let e=Bl(t),r=t.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof t.autoPad>"u"?0:t.autoPad],s=t.dilations,n=t.group??1,a=t.kernelShape,o=t.pads,l=t.strides,u=t.wIsConst(),d=t.outputPadding,c=t.outputShape;return{autoPad:i,format:r,dilations:s,group:n,kernelShape:a,outputPadding:d,outputShape:c,pads:o,strides:l,wIsConst:u,...e,cacheKey:`${t.format};${e.activation};`}},Hp=(t,e)=>{if(!t||t.length!==2&&t.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(t[0].dims.length!==4&&t[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(t[0].dims.length!==t[1].dims.length)throw new Error("filter does not have same dimension as input");let r=t[0].dims[e.format==="NHWC"?t[0].dims.length-1:1],i=t[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let s=t[1].dims[1]*e.group;if(t.length===3&&(t[2].dims.length!==1||t[2].dims[0]!==s))throw new Error("invalid bias");let n=t[0].dims.length-2;if(e.dilations.reduce((a,o)=>a+o,0)>0&&e.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(e.strides.reduce((a,o)=>a+o,0)>0&&e.strides.length!==n)throw new Error(`strides should be ${n}D`);if(e.pads.reduce((a,o)=>a+o,0)>0&&e.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(e.outputPadding.length!==n&&e.outputPadding.length!==0)throw new Error(`output_padding should be ${n}D`);if(e.kernelShape.reduce((a,o)=>a+o,0)>0&&e.kernelShape.length!==0&&e.kernelShape.length!==t[1].dims.length-2)throw new Error("invalid kernel shape");if(e.outputShape.length!==0&&e.outputShape.length!==t[0].dims.length-2)throw new Error("invalid output shape")},ja=(t,e,r,i)=>{let s=t.kernelCustomData.wT??t.compute(ft(e[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!t.kernelCustomData.wT&&(t.kernelCustomData.wT=s);let n=[e[0],s];e.length===3&&n.push(e[2]),t.compute(k_(n,r,i),{inputs:n})},jp=(t,e)=>{let r=e.format==="NHWC",i=[t.inputs[0].reshape(r?[t.inputs[0].dims[0],1,t.inputs[0].dims[1],t.inputs[0].dims[2]]:[t.inputs[0].dims[0],t.inputs[0].dims[1],1,t.inputs[0].dims[2]]),t.inputs[1].reshape([t.inputs[1].dims[0],t.inputs[1].dims[1],1,t.inputs[1].dims[2]])];t.inputs.length===3&&i.push(t.inputs[2]);let s=e.kernelShape;(s.length===0||s[0]===0)&&(s=[t.inputs[1].dims[2]]);let n=e.dilations;(n.length===0||n[0]===0)&&(n=[1]);let a=e.strides;(a.length===0||a[0]===0)&&(a=[1]);let o=e.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],a=[1].concat(a),n=[1].concat(n),s=[1].concat(s);let l=e.outputPadding;l=[0].concat(l);let u=Ha({...e,pads:o,strides:a,dilations:n,kernelShape:s,outputPadding:l},i);ja(t,i,u,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},C_=(t,e)=>{if(Hp(t.inputs,e),t.inputs[0].dims.length===3)jp(t,e);else{let r=Ha(e,t.inputs);ja(t,t.inputs,r)}}}),Yp,T_,E_,pS=j(()=>{ie(),ne(),ze(),oe(),Yp=(t,e,r,i)=>{let s=D.size(e),n=e.length,a=U("input",t,n),o=J("output",t,n),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),u=D.normalizeAxis(l,n),d=c=>{let p=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,f=ee("uniforms.input_shape","uniforms.axis",n),m=i.reverse?p+(i.exclusive?" + 1":""):"0",y=i.reverse?f:p+(i.exclusive?"":" + 1");return`
                ${c.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(a,o)}
                ${c.mainStart()}
                  ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${m};
                  let last : i32 = ${y};
                  for (var i : i32 = first; i < last; i++) {
                    ${a.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${a.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:e,dataType:t}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},{type:12,data:u},...te(e,e)]}),getShaderSource:d}},T_=(t,e)=>{let r=t.inputs[0].dims,i=t.inputs[0].dataType,s=t.inputs[1];t.compute(Yp(i,r,s,e),{inputs:[0]})},E_=t=>{let e=t.exclusive===1,r=t.reverse===1;return be({exclusive:e,reverse:r})}}),Xp,Kp,Zp,A_,I_,fS=j(()=>{ie(),ne(),ze(),oe(),Xp=t=>{if(!t||t.length!==1)throw new Error("DepthToSpace requires 1 input.");if(t[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Kp=(t,e,r,i)=>{let s=[];s.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let n=0;n<e;++n)s.push(r.indicesSet("a",t[n],`i[${n}]`));return s.push("return a;}"),s.join(`
`)},Zp=(t,e)=>{let r,i,s,n,a,o,l=e.format==="NHWC",u=e.blocksize,d=e.mode==="DCR";l?([r,i,s,n]=t.dims,a=d?[r,i,s,u,u,n/u**2]:[r,i,s,n/u**2,u,u],o=d?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,s,n]=[t.dims[0],t.dims[2],t.dims[3],t.dims[1]],a=d?[r,u,u,n/u**2,i,s]:[r,n/u**2,u,u,i,s],o=d?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let c=t.reshape(a),p=c.dims.length,f=t.dataType,m=U("a",f,p),y=J("output",f,p),b=_=>`
  ${_.registerUniform("output_size","u32").declareVariables(m,y)}

  ${Kp(o,p,m,y)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",m.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${t.dims};${e.blocksize};${e.mode}`,inputDependencies:["rank"]},getRunData:_=>{let x=l?[r,i*u,s*u,n/u**2]:[r,n/u**2,i*u,s*u],$=D.size(x),S=c.dims,E=D.sortBasedOnPerm(S,o);return{outputs:[{dims:x,dataType:_[0].dataType}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:[{type:12,data:$},...te(S,E)]}},getShaderSource:b}},A_=(t,e)=>{Xp(t.inputs),t.compute(Zp(t.inputs[0],e))},I_=t=>be({blocksize:t.blocksize,mode:t.mode,format:t.format})}),Ds,$i,Ya,Qp,Jp,ef,tf,Xa,rf,M_,z_,mS=j(()=>{ie(),ne(),ze(),oe(),Ds="[a-zA-Z]|\\.\\.\\.",$i="("+Ds+")+",Ya="^"+$i+"$",Qp="("+$i+",)*"+$i,Jp="^"+Qp+"$",ef=class{constructor(t=-1){this.symbolToIndices=new Map,this.inputIndex=t}addSymbol(t,e){let r=this.symbolToIndices.get(t);r===void 0?r=[e]:r.push(e),this.symbolToIndices.set(t,r)}},tf=class{constructor(t,e){var s;this.equation=e,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=e.includes("->")?e.split("->",2):[e,""];if(!r.match(RegExp(Jp)))throw new Error("Invalid LHS term");if(r.split(",").forEach((n,a)=>{let o=t[a].dims.slice();if(!n.match(RegExp(Ya)))throw new Error("Invalid LHS term");let l=this.processTerm(n,!0,o,a);this.lhs.push(l)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([n,a])=>a.count===1||n==="...").map(([n])=>n).join("");else if(!i.match(RegExp($i)))throw new Error("Invalid RHS");(s=i.match(RegExp(Ds,"g")))==null||s.forEach(n=>{if(n==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let a=this.symbolToInfo.get(n);if(a===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(a.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(t,e,r){let i=this.symbolToInfo.get(t);if(i!==void 0){if(i.dimValue!==e&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:e,inputIndices:[r]};this.symbolToInfo.set(t,i)}processTerm(t,e,r,i=-1){let s=r.length,n=!1,a=[],o=0;if(!t.match(RegExp(Ya))&&!e&&t!=="")throw new Error("Invalid LHS term");let l=t.match(RegExp(Ds,"g")),u=new ef(i);return l==null||l.forEach((d,c)=>{if(d==="..."){if(n)throw new Error("Only one ellipsis is allowed per input term");n=!0;let p=s-l.length+1;if(p<0)throw new Error("Ellipsis out of bounds");if(a=r.slice(o,o+p),this.hasEllipsis){if(this.ellipsisDims.length!==a.length||this.ellipsisDims.toString()!==a.toString())throw new Error("Ellipsis dimensions mismatch")}else if(e)this.hasEllipsis=!0,this.ellipsisDims=a;else throw new Error("Ellipsis must be specified in the LHS");for(let f=0;f<a.length;f++){let m=String.fromCharCode(48+f);u.addSymbol(m,c+f),this.addSymbol(m,r[o++],i)}}else u.addSymbol(d,c+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(d,r[o++],i)}),u}},Xa=t=>t+"_max",rf=(t,e,r,i)=>{let s=t.map(u=>u.length).map((u,d)=>U(`input${d}`,e,u)),n=D.size(i),a=J("output",e,i.length),o=[...r.symbolToInfo.keys()].filter(u=>!r.rhs.symbolToIndices.has(u)),l=u=>{let d=[],c="var prod = 1.0;",p="var sum = 0.0;",f="sum += prod;",m=[],y=[],b=[],_=[],x=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((S,E)=>{var T;if(r.rhs.symbolToIndices.has(E)){let A=(T=r.rhs.symbolToIndices.get(E))==null?void 0:T[0];A!==void 0&&r.lhs.forEach((k,P)=>{if(S.inputIndices.includes(P)){let M=k.symbolToIndices.get(E);if(M===void 0)throw new Error("Invalid symbol error");M.forEach(N=>{d.push(`${s[P].indicesSet(`input${P}Indices`,N,a.indicesGet("outputIndices",A))}`)})}})}else r.lhs.forEach((A,k)=>{if(S.inputIndices.includes(k)){let P=A.symbolToIndices.get(E);if(P===void 0)throw new Error("Invalid symbol error");P.forEach(M=>{m.push(`${s[k].indicesSet(`input${k}Indices`,M,`${E}`)}`)}),_.push(`prod *= ${s[k].getByIndices(`input${k}Indices`)};`)}}),y.push(`for(var ${E}: u32 = 0; ${E} < uniforms.${Xa(E)}; ${E}++) {`),b.push("}")});let $=x?[...d,`let sum = ${s.map((S,E)=>S.getByIndices(`input${E}Indices`)).join(" * ")};`]:[...d,p,...y,...m,c,..._,f,...b];return`
            ${u.registerUniforms(o.map(S=>({name:`${Xa(S)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...s,a)}

            ${u.mainStart()}
            ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${a.offsetToIndices("global_idx")};
            ${s.map((S,E)=>`var input${E}Indices: ${s[E].type.indices};`).join(`
`)}
            ${$.join(`
`)};
            ${a.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:t.map(()=>"rank")},getRunData:()=>{let u=o.filter(c=>r.symbolToInfo.has(c)).map(c=>{var p;return{type:12,data:((p=r.symbolToInfo.get(c))==null?void 0:p.dimValue)||0}});u.push({type:12,data:n});let d=t.map((c,p)=>[...te(c)]).reduce((c,p)=>c.concat(p),u);return d.push(...te(i)),{outputs:[{dims:i,dataType:e}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:d}},getShaderSource:l}},M_=(t,e)=>{let r=new tf(t.inputs,e.equation),i=r.outputDims,s=t.inputs.map((n,a)=>n.dims);t.compute(rf(s,t.inputs[0].dataType,r,i))},z_=t=>{let e=t.equation.replace(/\s+/g,"");return be({equation:e})}}),sf,Ka,nf,af,P_,gS=j(()=>{ie(),ne(),oe(),sf=t=>{if(!t||t.length!==2)throw new Error("Expand requires 2 input.");let e=t[0].dims,r=Array.from(t[1].getBigInt64Array(),Number),i=r.length<e.length?0:r.length-e.length,s=e.length<r.length?0:e.length-r.length;for(;i<r.length&&s<e.length;++i,++s)if(r[i]!==e[s]&&r[i]!==1&&e[s]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Ka=(t,e)=>{let r=t.length-e.length,i=[];for(let s=0;s<r;++s)i.push(t[s]);for(let s=0;s<e.length;++s)i.push(e[s]===1?t[s+r]:e[s]);return i},nf=(t,e)=>t.length>e.length?Ka(t,e):Ka(e,t),af=t=>{let e=t[0].dims,r=Array.from(t[1].getBigInt64Array(),Number),i=nf(e,r),s=t[0].dataType,n=s===9||D.size(e)===1,a=s===9||e.length>0&&e[e.length-1]%4===0?4:1,o=n||i.length>0&&i[i.length-1]%4===0?4:1,l=Math.ceil(D.size(i)/o),u=c=>{let p=U("input",s,e.length,a),f=J("output",s,i.length,o),m;if(s===9){let y=(b,_,x="")=>`
          let outputIndices${_} = ${f.offsetToIndices(`outputOffset + ${_}u`)};
          let offset${_} = ${p.broadcastedIndicesToOffset(`outputIndices${_}`,f)};
          let index${_} = offset${_} / 4u;
          let component${_} = offset${_} % 4u;
          ${b}[${_}] = ${x}(${p.getByOffset(`index${_}`)}[component${_}]);
        `;m=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${y("data",0,"u32")}
        ${y("data",1,"u32")}
        ${y("data",2,"u32")}
        ${y("data",3,"u32")}
        ${f.setByOffset("global_idx","data")}
      }`}else m=`
        let outputIndices = ${f.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${p.broadcastedIndicesToOffset("outputIndices",f)};
        let data = ${f.type.value}(${p.getByOffset(`inputOffset / ${a}`)});
        ${f.setByOffset("global_idx","data")}
      }`;return`
    ${c.registerUniform("vec_size","u32").declareVariables(p,f)}
    ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${m}`},d=[{type:12,data:l},...te(e,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${a}${o}`,inputDependencies:["rank"]},getShaderSource:u,getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d})}},P_=t=>{sf(t.inputs),t.compute(af(t.inputs),{inputs:[0]})}}),of,R_,yS=j(()=>{ie(),ne(),oe(),Rl(),of=t=>{let e=t[0].dataType,r=D.size(t[0].dims),i=D.size(t[1].dims),s=i%4===0,n=a=>{let o=U("x",e,[1],4),l=U("bias",e,[1],4),u=J("y",e,[1],4),d=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],c=f=>`
      let bias${f}_offset: u32 = (global_idx * 4 + ${f}) % uniforms.bias_size;
      let bias${f} = ${l.getByOffset(`bias${f}_offset / 4`)}[bias${f}_offset % 4];`,p=s?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${c(0)}${c(1)}${c(2)}${c(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(d).declareVariables(o,l,u)}

    ${Wo(tt(e))}

    ${a.mainStart(si)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${p}
      let x_in = x + bias;
      ${u.setByOffset("global_idx",qo("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${s}`,inputDependencies:["type","type"]},getShaderSource:n,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/si/4)}})}},R_=t=>{t.inputs.length<2||D.size(t.inputs[1].dims)===0?e_(t):t.compute(of(t.inputs))}}),lf,uf,B_,O_,_S=j(()=>{ie(),ne(),ze(),oe(),lf=t=>{if(!t||t.length!==2)throw new Error("Gather requires 2 inputs.")},uf=(t,e)=>{let r=t[0].dims,i=t[1].dims,s=r.length,n=D.normalizeAxis(e.axis,s),a=r.slice(0);a.splice(n,1,...i);let o=r[n],l=t[0].dataType===9?4:1,u=Math.ceil(D.size(a)/l),d=[{type:12,data:u},{type:6,data:o},{type:12,data:n},...te(t[0].dims,t[1].dims,a)],c=p=>{let f=U("data",t[0].dataType,t[0].dims.length,l),m=U("inputIndices",t[1].dataType,t[1].dims.length),y=J("output",t[0].dataType,a.length,l),b=x=>{let $=i.length,S=`var indicesIndices${x}  = ${m.type.indices}(0);`;for(let E=0;E<$;E++)S+=`${$>1?`indicesIndices${x}[${E}]`:`indicesIndices${x}`} = ${a.length>1?`outputIndices${x}[uniforms.axis + ${E}]`:`outputIndices${x}`};`;S+=`
          var idx${x} = ${m.getByIndices(`indicesIndices${x}`)};
          if (idx${x} < 0) {
            idx${x} = idx${x} + uniforms.axisDimLimit;
          }
          var dataIndices${x} : ${f.type.indices};
        `;for(let E=0,T=0;E<s;E++)E===n?(S+=`${s>1?`dataIndices${x}[${E}]`:`dataIndices${x}`} = u32(idx${x});`,T+=$):(S+=`${s>1?`dataIndices${x}[${E}]`:`dataIndices${x}`} = ${a.length>1?`outputIndices${x}[${T}]`:`outputIndices${x}`};`,T++);return S},_;if(t[0].dataType===9){let x=($,S,E="")=>`
          let outputIndices${S} = ${y.offsetToIndices(`outputOffset + ${S}u`)};
          ${b(S)};
          let offset${S} = ${f.indicesToOffset(`dataIndices${S}`)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${$}[${S}] = ${E}(${f.getByOffset(`index${S}`)}[component${S}]);
        `;_=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${x("value",0,"u32")}
        ${x("value",1,"u32")}
        ${x("value",2,"u32")}
        ${x("value",3,"u32")}
        ${y.setByOffset("global_idx","value")}
      `}else _=`
      let outputIndices = ${y.offsetToIndices("global_idx")};
      ${b("")};
      let value = ${f.getByIndices("dataIndices")};
      ${y.setByOffset("global_idx","value")};
      `;return`
      ${p.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,m,y)}
      ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${_}
      }`};return{name:"Gather",shaderCache:{hint:e.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d}),getShaderSource:c}},B_=t=>be({axis:t.axis}),O_=(t,e)=>{let r=t.inputs;lf(r),t.compute(uf(t.inputs,e))}}),df,D_,N_,bS=j(()=>{ie(),ne(),oe(),df=(t,e,r,i,s,n,a,o,l)=>{let u=[{type:12,data:n},{type:12,data:i},{type:12,data:s},{type:12,data:r},{type:12,data:a},{type:12,data:o},{type:12,data:l}],d=[n];u.push(...te(e.dims,d));let c=p=>{let f=U("indices_data",e.dataType,e.dims.length),m=J("input_slice_offsets_data",12,1,1),y=[f,m],b=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:s.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${p.registerUniforms(b).declareVariables(...y)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${s.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return t.compute({name:"computeSliceOffsets",shaderCache:{hint:`${s.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:d,dataType:t.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:u}),getShaderSource:c},{inputs:[e],outputs:[-1]})[0]},D_=(t,e)=>{let r=t.inputs,i=r[0].dims,s=r[0].dataType,n=r[1].dims,a=n[n.length-1],o=D.sizeToDimension(n,n.length-1),l=D.sizeFromDimension(i,e.batchDims+a),u=D.sizeToDimension(i,e.batchDims),d=D.sizeFromDimension(i,e.batchDims),c=o/u,p=new Array(a),f=l;for(let S=0;S<a;++S)p[a-1-S]=f,f*=i[e.batchDims+a-1-S];let m=df(t,r[1],p,e.batchDims,i,o,c,d,a),y=e.batchDims+a;if(y>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let b=n.slice(0,-1).concat(i.slice(y)),_=D.size(b),x=[{type:12,data:_},{type:12,data:l},...te(r[0].dims,m.dims,b)],$=S=>{let E=U("data",r[0].dataType,r[0].dims.length),T=U("slice_offsets",12,m.dims.length),A=J("output",r[0].dataType,b.length);return`
          ${S.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(E,T,A)}
            ${S.mainStart()}
            ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};t.compute({name:"GatherND",shaderCache:{hint:e.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:b,dataType:s}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:x}),getShaderSource:$},{inputs:[r[0],m]})},N_=t=>({batchDims:t.batch_dims,cacheKey:""})}),cf,hf,L_,G_,wS=j(()=>{ie(),ne(),ze(),oe(),cf=(t,e)=>{if(t.length<3||t.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=D.normalizeAxis(e.quantizeAxis,t[0].dims.length),i=e.blockSize,s=t[0],n=t[2],a=t.length===4?t[3]:void 0;if(n.dims.length!==s.dims.length||!s.dims.map((o,l)=>l===r?Math.ceil(o/i)===n.dims[l]:o===n.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(a){if(a.dataType!==s.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(a.dims.length!==n.dims.length||!a.dims.map((o,l)=>o===n.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},hf=(t,e)=>{let r=t[0].dims,i=t[1].dims,s=r.length,n=D.normalizeAxis(e.gatherAxis,s),a=D.normalizeAxis(e.quantizeAxis,s),o=r.slice(0);o.splice(n,1,...i);let l=D.size(o),u=t[2].dataType,d=t[0].dataType===22,c=[{type:12,data:l},{type:12,data:a},{type:12,data:n},{type:12,data:e.blockSize},...te(...t.map((f,m)=>f.dims),o)],p=f=>{let m=U("data",t[0].dataType,t[0].dims.length),y=U("inputIndices",t[1].dataType,t[1].dims.length),b=U("scales",t[2].dataType,t[2].dims.length),_=t.length>3?U("zeroPoint",t[3].dataType,t[3].dims.length):void 0,x=J("output",u,o.length),$=[m,y,b];_&&$.push(_);let S=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${f.registerUniforms(S).declareVariables(...$,x)}
        ${f.mainStart()}
        let output_indices = ${x.offsetToIndices("global_idx")};
        var indices_indices = ${y.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${x.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${y.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${x.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${m.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${x.indicesGet("output_indices","i")};
          ${m.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${y.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[n]};
        }
        ${m.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${x.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${m.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${m.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${m.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${d?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${b.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${b.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${b.getByIndices("scale_indices")};
        ${_?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${_.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${_.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${d?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${tt(u)}(quantized_data - zero_point) * scale;
        ${x.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${e.cacheKey};${t.filter((f,m)=>m!==1).map(f=>f.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:t.length},(f,m)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:u}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c}),getShaderSource:p}},L_=(t,e)=>{let r=t.inputs;cf(r,e),t.compute(hf(t.inputs,e))},G_=t=>be({blockSize:t.blockSize,gatherAxis:t.gatherAxis,quantizeAxis:t.quantizeAxis})}),pf,ff,U_,V_,xS=j(()=>{ie(),ne(),ze(),oe(),pf=t=>{if(!t||t.length!==2)throw new Error("GatherElements requires 2 inputs.");if(t[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(t[0].dims.length!==t[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},ff=(t,e)=>{let r=t[0].dims,i=t[0].dataType,s=r.length,n=t[1].dims,a=t[1].dataType,o=D.normalizeAxis(e.axis,s),l=r[o],u=n.slice(0),d=D.size(u),c=U("input",i,s),p=U("indicesInput",a,n.length),f=J("output",i,u.length),m=[{type:12,data:d},{type:6,data:l},{type:12,data:o}];return m.push(...te(r,n,u)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:u,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:m}),getShaderSource:y=>`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(c,p,f)}
      ${y.mainStart()}
      ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${f.offsetToIndices("global_idx")};

      var idx = ${p.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${c.type.indices}(outputIndices);
      ${c.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${c.getByIndices("inputIndices")};

      ${f.setByOffset("global_idx","value")};
  }`}},U_=t=>be({axis:t.axis}),V_=(t,e)=>{let r=t.inputs;pf(r),t.compute(ff(t.inputs,e))}}),mf,gf,F_,W_,vS=j(()=>{ie(),ne(),oe(),mf=t=>{if(!t)throw new Error("Input is missing");if(t.length<2||t.length>3)throw new Error("Invaid input number.");if(t.length===3&&t[2].dims.length>2)throw new Error("Invalid input shape of C");if(t[0].dataType!==t[1].dataType||t.length===3&&t[0].dataType!==t[2].dataType)throw new Error("Input types are mismatched")},gf=(t,e)=>{let r=t[0].dims.slice(),i=t[1].dims.slice(),[s,n,a]=U0.getShapeOfGemmResult(r,e.transA,i,e.transB,t.length===3?t[2].dims:void 0),o=[s,n];if(!o)throw new Error("Can't use gemm on the given tensors");let l=16,u=Math.ceil(n/l),d=Math.ceil(s/l),c=!0,p=D.size(o),f=[{type:12,data:c?u:p},{type:12,data:s},{type:12,data:n},{type:12,data:a},{type:1,data:e.alpha},{type:1,data:e.beta}],m=["type","type"];t.length===3&&(f.push(...te(t[2].dims)),m.push("rank")),f.push(...te(o));let y=_=>{let x="";e.transA&&e.transB?x="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":e.transA&&!e.transB?x="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!e.transA&&e.transB?x="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!e.transA&&!e.transB&&(x="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let $=e.alpha===1?"":"value *= uniforms.alpha;",S=U("a",t[0].dataType,t[0].dims),E=U("b",t[1].dataType,t[1].dims),T=S.type.value,A=null,k=[S,E];t.length===3&&(A=U("c",t[2].dataType,t[2].dims.length),k.push(A));let P=J("output",t[0].dataType,o.length);k.push(P);let M=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${_.registerUniforms(M).declareVariables(...k)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${T}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${x}
    }

    ${$}
    ${A!=null?`let cOffset = ${A.broadcastedIndicesToOffset("vec2(m, n)",P)}; value += ${T}(uniforms.beta) * ${A.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},b=_=>{let x=U("a",t[0].dataType,t[0].dims),$=U("b",t[1].dataType,t[1].dims),S=null,E=[x,$];t.length===3&&(S=U("c",t[2].dataType,t[2].dims.length),E.push(S));let T=J("output",t[0].dataType,o.length);E.push(T);let A=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],k="",P="";e.transA&&e.transB?(P=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${x.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${$.type.value}(0);
      }
      `,k="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):e.transA&&!e.transB?(P=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${x.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${$.type.value}(0);
      }
      `,k="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!e.transA&&e.transB?(P=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${x.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${$.type.value}(0);
      }
      `,k="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!e.transA&&!e.transB&&(P=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${x.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${$.type.value}(0);
      }
      `,k="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let M=e.alpha===1?"":"value *= uniforms.alpha;";return`
  ${_.registerUniforms(A).declareVariables(...E)}
  var<workgroup> tile_a: array<array<${x.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${$.type.storage}, ${l}>, ${l}>;
  ${_.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${T.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${P}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${k}
      }
      workgroupBarrier();
    }

    ${M}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${S!=null?`let cOffset = ${S.broadcastedIndicesToOffset("vec2(m, n)",T)}; value += ${T.type.value}(uniforms.beta) * ${S.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return c?{name:"GemmShared",shaderCache:{hint:`${e.cacheKey}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:o,dataType:t[0].dataType}],dispatchGroup:{x:u*d},programUniforms:f}),getShaderSource:b}:{name:"Gemm",shaderCache:{hint:`${e.cacheKey}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:o,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:y}},F_=t=>{let e=t.transA,r=t.transB,i=t.alpha,s=t.beta;return{transA:e,transB:r,alpha:i,beta:s,cacheKey:`${t.transA};${t.transB};${t.alpha===1}`}},W_=(t,e)=>{mf(t.inputs),t.compute(gf(t.inputs,e))}}),Nt,jt,_r,br,yf,_f,bf,wf,xf,vf,$f,kf,q_,H_,$S=j(()=>{ie(),ne(),ze(),oe(),[Nt,jt,_r,br]=[0,1,2,3],yf=t=>{if(t[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(t[0].dims.length!==t[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(t[0].dims.length-2!==t[1].dims[t[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${t[0].dims.length-2}`);if(t[0].dims[0]!==t[1].dims[0])throw new Error("grid batch size must match input batch size")},_f=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,bf=t=>`
  fn gs_bicubic_interpolate(p: mat4x4<${t}>, x: f32, y: f32) -> ${t} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${t}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,wf=t=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${t.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,xf=t=>`
  ${t.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,vf=(t,e,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${e} {
     var pixel = ${e}(0);
     var indices = vec4<u32>(0);
     indices[${Nt}] = batch;
     indices[${jt}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${_r}] = u32(r);
            indices[${br}] = u32(c);
          } else {
            return ${e}(0);
          }
        `;case"border":return`
          indices[${_r}] = u32(clamp(r, 0, H - 1));
          indices[${br}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${_r}] = gs_reflect(r, border[1], border[3]);
          indices[${br}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${t.getByIndices("indices")};
  }
`,$f=(t,e,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Nt}], indices[${jt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Nt}], indices[${jt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Nt}], indices[${jt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Nt}], indices[${jt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Nt}], indices[${jt}], border);

          let dx2 = ${e}(f32(x2) - x);
          let dx1 = ${e}(x - f32(x1));
          let dy2 = ${e}(f32(y2) - y);
          let dy1 = ${e}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${e}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Nt}], indices[${jt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${t.setByOffset("global_idx","result")}`,kf=(t,e)=>{let r=U("x",t[0].dataType,t[0].dims.length),i=[t[1].dims[0],t[1].dims[1],t[1].dims[2]],s=U("grid",t[1].dataType,i.length,2),n=[t[0].dims[0],t[0].dims[1],t[1].dims[1],t[1].dims[2]];e.format==="NHWC"&&(n=[t[0].dims[0],t[1].dims[1],t[1].dims[2],t[0].dims[3]],[Nt,jt,_r,br]=[0,3,1,2]);let a=J("output",t[0].dataType,n.length),o=r.type.value,l=D.size(n),u=[{type:12,data:l},...te(t[0].dims,i,n)],d=c=>`
  ${c.registerUniform("output_size","u32").declareVariables(r,s,a)}
  ${_f}
  ${bf(o)}
  ${wf(e)}
  ${xf(e)}
  ${vf(r,o,e)}

  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${_r}]);
      let W_in = i32(uniforms.x_shape[${br}]);

      ${e.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${a.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Nt}], indices[${_r}], indices[${br}]);
      let nxy = ${s.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${$f(a,o,e)}
  }`;return{name:"GridSample",shaderCache:{hint:`${e.cacheKey}`,inputDependencies:["type","type"]},getRunData:c=>{let p=D.size(n);return{outputs:[{dims:n,dataType:c[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:u}},getShaderSource:d}},q_=(t,e)=>{yf(t.inputs),t.compute(kf(t.inputs,e))},H_=t=>be({alignCorners:t.align_corners,mode:t.mode,paddingMode:t.padding_mode,format:t.format})}),st,Sf,j_,Za,Cf,Bi,Y_,X_=j(()=>{ie(),ne(),ze(),Il(),Pl(),oe(),hr(),st=(t,e)=>t.length>e&&t[e].dims.length>0?t[e]:void 0,Sf=(t,e)=>{let r=t[0],i=st(t,1),s=st(t,2),n=st(t,3),a=st(t,4),o=st(t,5),l=st(t,6),u=st(t,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let d=r.dims[0],c=r.dims[1],p=r.dims.length===3?r.dims[2]:e.numHeads*r.dims[4],f=c,m=0,y=0,b=Math.floor(p/e.numHeads);if(l&&u&&D.size(l.dims)&&D.size(u.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==d||l.dims[1]!==e.numHeads||l.dims[3]!==b)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[0]!==d||u.dims[1]!==e.numHeads||u.dims[3]!==b)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==u.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(u.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');m=l.dims[2],y=l.dims[2]}else if(l&&D.size(l.dims)||u&&D.size(u.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let _;if(i&&D.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');_=2,f=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==e.numHeads||i.dims[3]!==2||i.dims[4]!==b)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(s)throw new Error('Expect "value" be none when "key" has packed kv format.');_=5,f=i.dims[1]}else{if(i.dims[1]!==e.numHeads||i.dims[3]!==b)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');_=0,f=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==e.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');_=3}if(n&&D.size(n.dims)>0){if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let x=m+f,$=0;if(a&&D.size(a.dims)>0){$=8;let A=a.dims;throw A.length===1?A[0]===d?$=1:A[0]===3*d+2&&($=3):A.length===2&&A[0]===d&&A[1]===x&&($=5),$===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let S=!1,E=p;if(s&&D.size(s.dims)>0){if(s.dims.length!==3&&s.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==s.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(s.dims.length===3){if(f!==s.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=s.dims[2]}else{if(f!==s.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');E=s.dims[1]*s.dims[3],S=!0}}let T=!1;if(a&&D.size(a.dims)>0)throw new Error("Key padding mask is not supported");if(o&&D.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==d||o.dims[1]!==e.numHeads||o.dims[2]!==c||o.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:d,sequenceLength:c,pastSequenceLength:m,kvSequenceLength:f,totalSequenceLength:x,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:p,vHiddenSize:E,headSize:b,vHeadSize:Math.floor(E/e.numHeads),numHeads:e.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:e.maskFilterValue,maskType:$,scale:e.scale,broadcastResPosBias:T,passPastInKv:S,qkvFormat:_}},j_=t=>be({...t}),Za=be({perm:[0,2,1,3]}),Cf=(t,e,r,i,s,n,a)=>{let o=[i,s,n],l=D.size(o),u=[{type:12,data:l},{type:12,data:a},{type:12,data:n}],d=c=>{let p=J("qkv_with_bias",e.dataType,o),f=U("qkv",e.dataType,o),m=U("bias",r.dataType,o),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${c.registerUniforms(y).declareVariables(f,m,p)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return t.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:e.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:d},{inputs:[e,r],outputs:[-1]})[0]},Bi=(t,e,r,i,s,n,a,o)=>{let l=n;if(a&&D.size(a.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=Cf(t,n,a,e,i,r*s,o),l=l.reshape([e,i,r,s]),r===1||i===1?l:t.compute(ft(l,Za.perm),{inputs:[l],outputs:[-1]})[0]}else return n.dims.length===3&&(l=n.reshape([e,i,r,s])),r===1||i===1?l:t.compute(ft(l,Za.perm),{inputs:[l],outputs:[-1]})[0]},Y_=(t,e)=>{let r=Sf(t.inputs,e),i=t.inputs[0],s=st(t.inputs,1),n=st(t.inputs,2),a=st(t.inputs,3),o=st(t.inputs,4),l=st(t.inputs,5),u=st(t.inputs,6),d=st(t.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if((s==null?void 0:s.dims.length)===5)throw new Error("Packed KV is not implemented");let c=s&&n&&s.dims.length===4&&n.dims.length===4,p=Bi(t,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,a,0);if(c)return Qi(t,p,s,n,o,void 0,u,d,l,r);if(!s||!n)throw new Error("key and value must be provided");let f=Bi(t,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,s,a,r.hiddenSize),m=Bi(t,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,n,a,2*r.hiddenSize);Qi(t,p,f,m,o,void 0,u,d,l,r)}}),Tf,Ef,Af,If,Ko,K_,Z_,Q_=j(()=>{ie(),ne(),ze(),oe(),Tf=t=>{if(!t||t.length<1)throw new Error("too few inputs")},Ef=(t,e)=>{let r=[],i=e.numOutputs;return t[1].dims[0]>0&&(t[1].getBigInt64Array().forEach(s=>r.push(Number(s))),i=r.length),be({numOutputs:i,axis:e.axis,splitSizes:r})},Af=t=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${t}u; i += 1u ) {
    if (index < ${ee("uniforms.size_in_split_axis","i",t)}) {
        return i;
    }
    }
    return ${t}u;
}`,If=t=>{let e=t.length,r=[];for(let i=0;i<e;++i){let s=t[i].setByIndices("indices","input[global_idx]");e===1?r.push(s):i===0?r.push(`if (output_number == ${i}u) { ${s} }`):i===e-1?r.push(`else { ${s} }`):r.push(`else if (output_number == ${i}) { ${s} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${t[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Ko=(t,e)=>{let r=t[0].dims,i=D.size(r),s=t[0].dataType,n=D.normalizeAxis(e.axis,r.length),a=new Array(e.numOutputs),o=U("input",s,r.length),l=new Array(e.numOutputs),u=[],d=[],c=0,p=[{type:12,data:i}];for(let m=0;m<e.numOutputs;m++){c+=e.splitSizes[m],l[m]=c;let y=r.slice();y[n]=e.splitSizes[m],d.push(y),a[m]=J(`output${m}`,s,y.length),u.push({dims:d[m],dataType:t[0].dataType})}p.push({type:12,data:l},...te(r,...d));let f=m=>`
  ${m.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(o,...a)}
  ${Af(l.length)}
  ${If(a)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",n)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${ee("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${o.indicesSet("indices",n,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:e.cacheKey,inputDependencies:["rank"]},getShaderSource:f,getRunData:()=>({outputs:u,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:p})}},K_=(t,e)=>{Tf(t.inputs);let r=t.inputs.length===1?e:Ef(t.inputs,e);t.compute(Ko(t.inputs,r),{inputs:[0]})},Z_=t=>{let e=t.axis,r=t.splitSizes,i=t.numOutputs<0?r.length:t.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return be({axis:e,numOutputs:i,splitSizes:r})}}),Mf,rn,J_,eb=j(()=>{ie(),ne(),ze(),oe(),Mf=(t,e)=>{let[r,i,s,n]=t,{numHeads:a,rotaryEmbeddingDim:o}=e;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!D.areEqual(i.dims,[])&&!D.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(!D.areEqual(s.dims,n.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],u=r.dims[r.dims.length-2],d=s.dims[0],c=D.sizeFromDimension(r.dims,1)/u,p=o===0?s.dims[1]*2:c/a;if(o>p)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(l!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(u!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(u>d)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(p/2!==s.dims[1]&&o/2!==s.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${s.dims[1]}`)},rn=(t,e)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:s,scale:n}=e,a=t[0].dims[0],o=D.sizeFromDimension(t[0].dims,1),l=t[0].dims[t[0].dims.length-2],u=o/l,d=t[2].dims[1],c=s===0?d*2:u/i,p=new Array(a,l,u/c,c-d),f=D.computeStrides(p),m=[{type:1,data:n},{type:12,data:p},{type:12,data:f},...t[0].dims.length===3?new Array({type:12,data:[o,u,c,1]}):[],...t[0].dims.length===4?new Array({type:12,data:[o,c,l*c,1]}):[],...te(t[0].dims,t[1].dims,t[2].dims,t[3].dims,t[0].dims)],y=b=>{let _=U("input",t[0].dataType,t[0].dims.length),x=U("position_ids",t[1].dataType,t[1].dims.length),$=U("cos_cache",t[2].dataType,t[2].dims.length),S=U("sin_cache",t[3].dataType,t[3].dims.length),E=J("output",t[0].dataType,t[0].dims.length);return b.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:p.length},{name:"global_strides",type:"u32",length:f.length},{name:"input_output_strides",type:"u32",length:f.length}]),`
        ${b.declareVariables(_,x,$,S,E)}

        ${b.mainStart(si)}
          let half_rotary_emb_dim = uniforms.${$.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${x.broadcastedIndicesToOffset("bsnh.xy",J("",x.type.tensor,2))};
            let position_id =
                u32(${x.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${_.getByOffset("i")} * ${$.get("position_id","bsnh[3]")} -
                ${_.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${E.setByOffset("i","re")}
            let im = ${_.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} +
                ${_.getByOffset("j")} * ${$.get("position_id","bsnh[3]")};
            ${E.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${E.setByOffset("k",_.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:be({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:t[0].dims,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(D.size(p)/si)},programUniforms:m})}},J_=(t,e)=>{Mf(t.inputs,e),t.compute(rn(t.inputs,e))}}),zf,Pf,Qa,Rf,tb,kS=j(()=>{ze(),ie(),Pl(),X_(),Q_(),hr(),eb(),oe(),zf=(t,e)=>{if(e.doRotary&&t.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=t[0],i=t[1],s=t[2],n=t[3],a=t[4];if(e.doRotary!==0&&t.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(e.localWindowSize!==-1)throw new Error("Local attention is not supported");if(e.softcap!==0)throw new Error("Softcap is not supported");if(e.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(e.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,l=r.dims[0],u=r.dims[1],d=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:e.numHeads*r.dims[4],c=u,p=0,f=!i||i.dims.length===0,m=Math.floor(f?d/(e.numHeads+2*e.kvNumHeads):d/e.numHeads);f&&(d=m*e.numHeads);let y=n&&n.dims.length!==0,b=a&&a.dims.length!==0;if(y&&n.dims.length===4&&n.dims[0]===l&&n.dims[1]!==e.kvNumHeads&&n.dims[2]===e.kvNumHeads&&n.dims[3]===m)throw new Error("BSNH pastKey/pastValue is not supported");if(y&&b){if(n.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');p=n.dims[2]}else if(y||b)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let _=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');c=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==e.numHeads||i.dims[3]!==2||i.dims[4]!==m)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(s)throw new Error('Expect "value" be none when "key" has packed kv format.');c=i.dims[1]}else{if(i.dims[1]!==e.numHeads||i.dims[3]!==m)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');c=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==e.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');_=3}let x=0,$=!1,S=e.kvNumHeads?m*e.kvNumHeads:d;if(s&&s.dims.length>0){if(s.dims.length!==3&&s.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==s.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(s.dims.length===3){if(c!==s.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');S=s.dims[2]}else{if(c!==s.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');S=s.dims[1]*s.dims[3],$=!0}}let E=t.length>4?t[5]:void 0;if(E){if(E.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let T=E.dims.reduce((A,k)=>A*k,1);if(T!==l)throw new Error(`seqlens_k must have batch_size (${l}) elements, got ${T}.`);for(let A=0;A<E.dims.length;A++)if(E.dims[A]!==1&&E.dims[A]!==l)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${l}), got dims[${A}] = ${E.dims[A]}.`)}return{batchSize:l,sequenceLength:u,pastSequenceLength:p,kvSequenceLength:c,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:d,vHiddenSize:S,headSize:m,vHeadSize:Math.floor(S/e.kvNumHeads),numHeads:e.numHeads,kvNumHeads:e.kvNumHeads,nReps:e.numHeads/e.kvNumHeads,pastPresentShareBuffer:!1,maskType:x,scale:e.scale,broadcastResPosBias:!1,passPastInKv:$,qkvFormat:_}},Pf=be({perm:[0,2,1,3]}),Qa=(t,e,r)=>{let i=e,s=r.kvNumHeads;return e.dims.length===3&&r.kvSequenceLength!==0&&(i=e.reshape([r.batchSize,r.kvSequenceLength,s,r.headSize]),i=t.compute(ft(i,Pf.perm),{inputs:[i],outputs:[-1]})[0]),i},Rf=(t,e,r,i)=>{let s=7,n=["type","type"],a=[t*e],o=t*e,l=[{type:12,data:o},{type:12,data:e},{type:12,data:t}],u=d=>{let c=U("seq_lens",r.dataType,r.dims),p=U("total_seq_lens",i.dataType,i.dims),f=J("pos_ids",s,a),m=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${d.registerUniforms(m).declareVariables(c,p,f)}
  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${p.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${c.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${f.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${f.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${f.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${t};${e}`,inputDependencies:n},getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:u}},tb=(t,e)=>{var S;let r=zf(t.inputs,e);if(t.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((S=t.inputs[1])==null?void 0:S.dims.length)===5)throw new Error("Packed KV is not implemented");let i=t.inputs[0],s=t.inputs[1]&&t.inputs[1].dims.length>0?t.inputs[1]:void 0,n=t.inputs[2]&&t.inputs[2].dims.length>0?t.inputs[2]:void 0,a=t.inputs[3]&&t.inputs[3].dims.length!==0?t.inputs[3]:void 0,o=t.inputs[4]&&t.inputs[4].dims.length!==0?t.inputs[4]:void 0,l=t.inputs.length>4?t.inputs[5]:void 0,u=t.inputs.length>5?t.inputs[6]:void 0,d=r.kvNumHeads?r.kvNumHeads:r.numHeads,c=be({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,d*r.headSize,d*r.headSize]}),[p,f,m]=!s&&!n?t.compute(Ko([i],c),{inputs:[i],outputs:[-1,-1,-1]}):[i,s,n],y,b;if(e.doRotary){let E=t.compute(Rf(r.batchSize,r.sequenceLength,l,u),{inputs:[l,u],outputs:[-1]})[0],T=t.inputs[7],A=t.inputs[8],k=be({interleaved:e.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:e.scale}),P=[p,E,T,A],M=[-1];y=t.compute(rn(P,k),{inputs:P,outputs:M})[0],P.splice(0,1,f);let N=be({interleaved:e.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:e.scale});b=t.compute(rn(P,N),{inputs:P,outputs:M})[0]}let _=Bi(t,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,e.doRotary?y:p,void 0,0),x=Qa(t,e.doRotary?b:f,r),$=Qa(t,m,r);Qi(t,_,x,$,void 0,void 0,a,o,void 0,r,l,u)}}),Ja,Bf,Of,rb,SS=j(()=>{ie(),ne(),hr(),oe(),Ja=(t,e,r,i,s,n,a,o)=>{let l=Ae(n),u=l===1?"f32":`vec${l}f`,d=l===1?"vec2f":`mat2x${l}f`,c=s*a,p=64;c===1&&(p=256);let f=[s,a,n/l],m=[s,a,2],y=["rank","type","type"],b=[];b.push(...te(f,m));let _=x=>{let $=U("x",e.dataType,3,l),S=U("scale",r.dataType,r.dims),E=U("bias",i.dataType,i.dims),T=J("output",1,3,2),A=[$,S,E,T];return`
  var<workgroup> workgroup_shared : array<${d}, ${p}>;
  const workgroup_size = ${p}u;
  ${x.declareVariables(...A)}
  ${x.mainStart(p)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${u}(0);
    var squared_sum = ${u}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${u}(${$.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${d}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${cr("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${cr("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return t.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${o};${p}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:m,dataType:1}],dispatchGroup:{x:c},programUniforms:b}),getShaderSource:_},{inputs:[e,r,i],outputs:[-1]})[0]},Bf=(t,e,r)=>{let i=e[0].dims,s=i,n=2,a=i[0],o=i[1],l=D.sizeFromDimension(i,n),u=Ae(l),d=D.size(s)/u,c=Ja(t,e[0],e[1],e[2],a,l,o,r.epsilon),p=[a,o,l/u],f=[a,o],m=["type","none"],y=b=>{let _=U("x",e[0].dataType,p.length,u),x=U("scale_shift",1,f.length,2),$=J("output",e[0].dataType,p.length,u),S=[_,x,$];return`
  ${b.registerUniform("output_size","u32").declareVariables(...S)}
  ${b.mainStart()}
  ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${$.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${x.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${_.getByOffset("global_idx")} * ${$.type.value}(scale_shift.x) + ${$.type.value}(scale_shift.y);
      ${$.setByOffset("global_idx","value")};
  }`};t.compute({name:"InstanceNormalization",shaderCache:{hint:`${u}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:[{type:12,data:d},...te(p,f,p)]}),getShaderSource:y},{inputs:[e[0],c]})},Of=(t,e,r)=>{let i=e[0].dims,s=i,n=i[0],a=i[i.length-1],o=D.sizeFromDimension(i,1)/a,l=Ae(a),u=D.size(s)/l,d=[{type:12,data:o},{type:12,data:Math.floor(a/l)}],c=["type","type"],p=!1,f=[0,i.length-1];for(let _=0;_<i.length-2;_++)p=p||i[_+1]!==1,f.push(_+1);p=p&&i[i.length-1]!==1;let m=p?t.compute(ft(t.inputs[0],f),{inputs:[t.inputs[0]],outputs:[-1]})[0]:t.inputs[0].reshape(Array.from({length:i.length},(_,x)=>i[f[x]])),y=Ja(t,m,e[1],e[2],n,o,a,r.epsilon),b=_=>{let x=Ve(e[0].dataType),$=l===1?"vec2f":`mat${l}x2f`,S=A=>{let k=A===0?"x":"y",P=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${x}(${P}(scale.${k}))`;case 2:return`vec2<${x}>(${P}(scale[0].${k}, scale[1].${k}))`;case 4:return`vec4<${x}>(${P}(scale[0].${k}, scale[1].${k}, scale[2].${k}, scale[3].${k}))`;default:throw new Error(`Not supported compoents ${l}`)}},E=U("input",e[0].dataType,e[0].dims,l),T=J("output",e[0].dataType,s,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${E.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${$}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${T.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${_.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${S(0)}, ${S(1)});
  }`};t.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d}),getShaderSource:b},{inputs:[e[0],y]})},rb=(t,e)=>{e.format==="NHWC"?Of(t,t.inputs,e):Bf(t,t.inputs,e)}}),Df,Nf,ib,CS=j(()=>{ie(),ne(),oe(),Df=t=>{if(!t||t.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Nf=(t,e,r)=>{let i=e.simplified,s=t[0].dims,n=t[1],a=!i&&t[2],o=s,l=D.normalizeAxis(e.axis,s.length),u=D.sizeToDimension(s,l),d=D.sizeFromDimension(s,l),c=D.size(n.dims),p=a?D.size(a.dims):0;if(c!==d||a&&p!==d)throw new Error(`Size of X.shape()[axis:] == ${d}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${c} and bias size of ${p}`);let f=[];for(let E=0;E<s.length;++E)E<l?f.push(s[E]):f.push(1);let m=Ae(d),y=["type","type"],b=[{type:12,data:u},{type:1,data:d},{type:12,data:Math.floor(d/m)},{type:1,data:e.epsilon}];a&&y.push("type");let _=r>1,x=r>2,$=E=>{let T=Ve(t[0].dataType),A=[U("x",t[0].dataType,t[0].dims,m),U("scale",n.dataType,n.dims,m)];a&&A.push(U("bias",a.dataType,a.dims,m)),A.push(J("output",t[0].dataType,o,m)),_&&A.push(J("mean_data_output",1,f)),x&&A.push(J("inv_std_output",1,f));let k=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${E.registerUniforms(k).declareVariables(...A)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Uo("f32",m)};
    var mean_square_vector = ${Uo("f32",m)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Jr(T,m,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${cr("mean_vector",m)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${cr("mean_square_vector",m)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Jr(T,m,"x[j + offset]")};
      let f32scale = ${Jr(T,m,"scale[j]")};
      output[j + offset] = ${A[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${Jr(T,m,"bias[j]")}`:""}
      );
    }

    ${_?"mean_data_output[global_idx] = mean":""};
    ${x?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},S=[{dims:o,dataType:t[0].dataType}];return _&&S.push({dims:f,dataType:1}),x&&S.push({dims:f,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${m};${r};${i}`,inputDependencies:y},getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(u/64)},programUniforms:b}),getShaderSource:$}},ib=(t,e)=>{Df(t.inputs),t.compute(Nf(t.inputs,e,t.outputCount))}}),Lf,sb,TS=j(()=>{ne(),Nl(),Ll(),Lf=t=>{if(!t||t.length!==2)throw new Error("MatMul requires 2 inputs.");if(t[0].dims[t[0].dims.length-1]!==t[1].dims[t[1].dims.length-2])throw new Error("shared dimension does not match.")},sb=t=>{Lf(t.inputs);let e=ii.calcShape(t.inputs[0].dims,t.inputs[1].dims,!0);if(!e)throw new Error("Can't use matmul on the given tensors");let r=e[e.length-1],i=t.inputs[0].dims[t.inputs[0].dims.length-1];if(r<8&&i<8)t.compute(Dl(t.inputs,{activation:""},e));else{let s=e[e.length-2],n=D.size(t.inputs[0].dims.slice(0,-2)),a=D.size(t.inputs[1].dims.slice(0,-2));if(n!==1&&s===1&&a===1){let o=t.inputs[0].reshape([1,n,i]),l=t.inputs[1].reshape([1,i,r]),u=[1,n,r],d=[o,l];t.compute(tn(d,{activation:""},e,u),{inputs:d})}else t.compute(tn(t.inputs,{activation:""},e))}}}),Gf,Uf,Vf,nb,ab,ES=j(()=>{ie(),ne(),ze(),oe(),Gf=(t,e)=>{if(t.length<3||t.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=t[0],i=r.dims.length;if(r.dims[i-1]!==e.k)throw new Error("The last dim of input shape does not match the k value");let s=Math.floor((e.k+e.blockSize-1)/e.blockSize),n=e.blockSize/8*e.bits,a=t[1];if(!D.areEqual(a.dims,[e.n,s,n]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=t[2].dims;if(D.size(o)!==e.n*s)throw new Error("scales input size error.");if(t.length===4){let l=t[3].dims,u=e.n*(e.bits===8?s:Math.floor((s*e.bits+7)/8));if(D.size(l)!==u)throw new Error("zeroPoints input size error.")}},Uf=(t,e)=>{let r=t[0].dims,i=r.length,s=r[i-2],n=e.k,a=e.n,o=r.slice(0,i-2),l=D.size(o),u=t[1].dims[2]/4,d=t[0].dataType,c=Ae(e.k),p=Ae(u),f=Ae(a),m=o.concat([s,a]),y=s>1&&a/f%2===0?2:1,b=D.size(m)/f/y,_=64,x=[],$=[l,s,n/c],S=D.convertShape(t[1].dims).slice();S.splice(-1,1,u/p),x.push(...te($)),x.push(...te(S)),x.push(...te(t[2].dims)),t.length===4&&x.push(...te(D.convertShape(t[3].dims)));let E=[l,s,a/f];x.push(...te(E));let T=A=>{let k=$.length,P=U("a",t[0].dataType,k,c),M=U("b",12,S.length,p),N=U("scales",t[2].dataType,t[2].dims.length),W=[P,M,N],L=t.length===4?U("zero_points",12,t[3].dims.length):void 0;L&&W.push(L);let R=E.length,q=J("output",t[0].dataType,R,f),O=Ve(t[0].dataType),V=(()=>{switch(c){case 1:return`array<${O}, 8>`;case 2:return`mat4x2<${O}>`;case 4:return`mat2x4<${O}>`;default:throw new Error(`${c}-component is not supported.`)}})(),ae=Math.floor(32/e.bits),F=Math.floor(ae/8),se=()=>{let Z="";for(let Y=0;Y<F;Y++){let he=Y*e.bits*4,Fe=he+e.bits;Z+=`
          // reuse a data (pass ${Y})
            var input_offset${Y>0?Y:""} = ${Y===0?P.indicesToOffset(`${P.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${Y>0?Y:""}: ${V};
            for (var j${Y>0?Y:""}: u32 = 0; j${Y>0?Y:""} < ${8/c}; j${Y>0?Y:""}++) {
              a_data${Y>0?Y:""}[j${Y>0?Y:""}] = ${P.getByOffset(`input_offset${Y>0?Y:""}`)};
              input_offset${Y>0?Y:""}++;
            }
          `;for(let Ee=0;Ee<f*y;Ee++)Z+=`
            b_value = ${p===1?`b${Ee}_data`:`b${Ee}_data[i]`};
            ${e.bits===2?`{
              let half_word = b_value >> ${Y*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${he}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${Fe}u) & b_mask);`}
            b_quantized_values = ${V}(${Array.from({length:4},(Qe,Le)=>`${O}(b_value_lower[${Le}]), ${O}(b_value_upper[${Le}])`).join(", ")});
            b_dequantized_values = ${c===1?`${V}(${Array.from({length:8},(Qe,Le)=>`(b_quantized_values[${Le}] - ${L?`zero_point${Ee}`:"zero_point"}) * scale${Ee}`).join(", ")});`:`(b_quantized_values - ${V}(${Array(8).fill(`${L?`zero_point${Ee}`:"zero_point"}`).join(",")})) * scale${Ee};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(Ee/f)}]${f>1?`[${Ee%f}]`:""} += ${Array.from({length:8/c},(Qe,Le)=>`${c===1?`a_data${Y>0?Y:""}[${Le}] * b_dequantized_values[${Le}]`:`dot(a_data${Y>0?Y:""}[${Le}], b_dequantized_values[${Le}])`}`).join(" + ")};
          `}return Z},H=()=>{let Z=`
            var col_index = col * ${f};
            ${L?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/e.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,e.bits-1)} for unsigned ${e.bits}-bit quantization.
            let zero_point = ${O}(${Math.pow(2,e.bits-1).toFixed(1)});`}
            `;for(let Y=0;Y<f*y;Y++)Z+=`
            let scale${Y} = ${N.getByOffset("col_index * nBlocksPerCol + block")};
            ${L?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${e.bits}u);
            zero_point_word = ${L.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${Y} = ${O}((zero_point_word) & ${e.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return Z},K=()=>{let Z=`col_index = col * ${f};`;for(let Y=0;Y<f*y;Y++)Z+=`
            let b${Y}_data = ${M.getByIndices(`${M.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return Z+=`
            var b_value: u32;
            let b_mask: u32 = ${e.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${V};
            var b_dequantized_values: ${V};`,Z};return`
        var<workgroup> workgroup_shared: array<${q.type.value}, ${y*_}>;
        ${A.declareVariables(...W,q)}
        ${A.mainStart([_,1,1])}
          let output_indices = ${q.offsetToIndices(`(global_idx / ${_}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${_}) {
            //process one block
            var word_offset: u32 = block * ${e.blockSize/c};
            ${H()}
            for (var word: u32 = 0; word < ${u}; word += ${p}) {
              ${K()}
              for (var i: u32 = 0; i < ${p}; i++) {
                ${se()}
                word_offset += ${ae/c};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${y}) {
            var output_value: ${q.type.value} = ${q.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${_}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${y};
            }
            ${q.setByIndices(`${q.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${e.blockSize};${e.bits};${c};${p};${f};${y};${_}`,inputDependencies:Array(t.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:d}],dispatchGroup:{x:b},programUniforms:x}),getShaderSource:T}},Vf=(t,e)=>{let r=t[0].dims,i=r.length,s=r[i-2],n=e.k,a=e.n,o=r.slice(0,i-2),l=D.size(o),u=t[1].dims[2]/4,d=t[0].dataType,c=Ae(e.k),p=Ae(u),f=o.concat([s,a]),m=128,y=a%8===0?8:a%4===0?4:1,b=m/y,_=Math.floor(32/e.bits),x=b*p*_,$=x/c,S=x/e.blockSize,E=D.size(f)/y,T=[],A=[l,s,n/c],k=D.convertShape(t[1].dims).slice();k.splice(-1,1,u/p),T.push(...te(A)),T.push(...te(k)),T.push(...te(t[2].dims)),t.length===4&&T.push(...te(D.convertShape(t[3].dims)));let P=[l,s,a];T.push(...te(P));let M=N=>{let W=A.length,L=U("a",t[0].dataType,W,c),R=U("b",12,k.length,p),q=U("scales",t[2].dataType,t[2].dims.length),O=[L,R,q],V=t.length===4?U("zero_points",12,t[3].dims.length):void 0;V&&O.push(V);let ae=P.length,F=J("output",t[0].dataType,ae),se=Ve(t[0].dataType),H=()=>{switch(c){case 1:return`
          let a_data0 = vec4<${se}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${se}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${se}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${se}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${c}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${L.type.value}, ${$}>;
        var<workgroup> inter_results: array<array<${F.type.value}, ${b}>, ${y}>;
        ${N.declareVariables(...O,F)}
        ${N.mainStart([b,y,1])}
          let output_indices = ${F.offsetToIndices(`workgroup_index * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${S} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${$};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${$}; a_offset += ${m})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${L.getByIndices(`${L.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${L.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${S} + local_id.x;
            ${V?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/e.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${e.bits}u);
            let zero_point_word = ${V.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${se}((zero_point_word) & ${e.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,e.bits-1)} for unsigned ${e.bits}-bit quantization.
            let zero_point = ${se}(${Math.pow(2,e.bits-1).toFixed(1)});`}
            let scale = ${q.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${R.getByIndices(`${R.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${e.blockSize/c};
            for (var i: u32 = 0; i < ${p}; i++) {
              let b_value = ${p===1?"b_data":"b_data[i]"};
              ${(()=>{let K=Math.floor(_/8),Z="";for(let Y=0;Y<K;Y++){let he=Y*e.bits*4,Fe=he+e.bits;Z+=`
              ${H()}
              {${e.bits===2?`
                let half_word = b_value >> ${Y*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${he}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${Fe}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${se}>(${Array.from({length:4},(Ee,Qe)=>`${se}(b_value_lower[${Qe}]), ${se}(b_value_upper[${Qe}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${se}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(Ee,Qe)=>`${`dot(a_data${Qe}, b_dequantized_values[${Qe}])`}`).join(" + ")};
              }
              word_offset += ${8/c};`}return Z})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${y}) {
            var output_value: ${F.type.value} = ${F.type.value}(0);
            for (var b = 0u; b < ${b}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${F.setByIndices(`${F.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${e.blockSize};${c};${p};${b};${y}`,inputDependencies:Array(t.length).fill("rank")},getRunData:()=>({outputs:[{dims:f,dataType:d}],dispatchGroup:{x:E},programUniforms:T}),getShaderSource:M}},nb=(t,e)=>{Gf(t.inputs,e),e.blockSize===32&&t.adapterInfo.isVendor("intel")&&t.adapterInfo.isArchitecture("gen-12lp")?t.compute(Vf(t.inputs,e)):t.compute(Uf(t.inputs,e))},ab=t=>be(t)}),Ff,Wf,qf,Hf,jf,Yf,Xf,Kf,ob,AS=j(()=>{ie(),ne(),oe(),Ff=t=>{if(!t||t.length<1)throw new Error("Too few inputs");if(t[0].dataType!==1&&t[0].dataType!==10)throw new Error("Input type must be float or float16.");if(t.length>=2){let e=t[0].dims.length*2===t[1].dims[0];if(t.length===4&&(e=t[3].dims[0]*2===t[1].dims[0]),!e)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Wf=(t,e,r)=>{let i="";for(let s=e-1;s>=0;--s)i+=`
            k = i32(${t.indicesGet("indices",s)}) - ${ee("uniforms.pads",s,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${ee("uniforms.x_shape",s,e)})) {
              break;
            }
            offset += k * i32(${ee("uniforms.x_strides",s,e)});
        `;return`
          value = ${t.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},qf=(t,e,r)=>{let i="";for(let s=e-1;s>=0;--s)i+=`
                k = i32(${t.indicesGet("indices",s)}) - ${ee("uniforms.pads",s,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${ee("uniforms.x_shape",s,e)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${ee("uniforms.x_shape",s,e)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${ee("uniforms.x_strides",s,e)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Hf=(t,e,r)=>{let i="";for(let s=e-1;s>=0;--s)i+=`
                k = i32(${t.indicesGet("indices",s)}) - ${ee("uniforms.pads",s,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${ee("uniforms.x_shape",s,e)})) {
                  k = i32(${ee("uniforms.x_shape",s,e)}) - 1;
                }
                offset += k * i32(${ee("uniforms.x_strides",s,e)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},jf=(t,e,r)=>{let i="";for(let s=e-1;s>=0;--s)i+=`
                k = i32(${t.indicesGet("indices",s)}) - ${ee("uniforms.pads",s,r)};
                if (k < 0)  {
                  k += i32(${ee("uniforms.x_shape",s,e)}]);
                }
                if (k >= i32(${ee("uniforms.x_shape",s,e)})) {
                  k -= i32(${ee("uniforms.x_shape",s,e)});
                }
                offset += k * i32(${ee("uniforms.x_strides",s,e)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Yf=(t,e,r)=>{switch(r.mode){case 0:return Wf(t,e,r.pads.length);case 1:return qf(t,e,r.pads.length);case 2:return Hf(t,e,r.pads.length);case 3:return jf(t,e,r.pads.length);default:throw new Error("Invalid mode")}},Xf=(t,e)=>{let r=D.padShape(t[0].dims.slice(),e.pads),i=t[0].dims,s=D.size(r),n=[{type:12,data:s},{type:6,data:e.pads}],a=t.length>=3&&t[2].data;e.mode===0&&n.push({type:a?t[2].dataType:1,data:e.value}),n.push(...te(t[0].dims,r));let o=["rank"],l=u=>{let d=J("output",t[0].dataType,r.length),c=U("x",t[0].dataType,i.length),p=c.type.value,f=Yf(d,i.length,e),m=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:e.pads.length}];return e.mode===0&&m.push({name:"constant_value",type:a?p:"f32"}),`
            ${u.registerUniforms(m).declareVariables(c,d)}
            ${u.mainStart()}
            ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${d.offsetToIndices("global_idx")};

            var value = ${p}(0);
            ${f}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${e.mode}${a}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(D.size(r)/64)},programUniforms:n}),getShaderSource:l}},Kf=(t,e)=>{if(t.length>1){let r=t[1].getBigInt64Array(),i=t.length>=3&&t[2].data?t[2].dataType===10?t[2].getUint16Array()[0]:t[2].getFloat32Array()[0]:0,s=t[0].dims.length,n=new Int32Array(2*s).fill(0);if(t.length>=4){let o=t[3].getBigInt64Array();for(let l=0;l<o.length;l++)n[Number(o[l])]=Number(r[l]),n[Number(o[l])+s]=Number(r[l+o.length])}else r.forEach((o,l)=>n[Number(l)]=Number(o));let a=[];return n.forEach(o=>a.push(o)),{mode:e.mode,value:i,pads:a}}else return e},ob=(t,e)=>{Ff(t.inputs);let r=Kf(t.inputs,e);t.compute(Xf(t.inputs,r),{inputs:[0]})}}),ki,eo,to,ro,io,Zf,Qf,so,no,lb,ub,ao,db,cb,oo,hb,pb,fb,mb,IS=j(()=>{wt(),ie(),ne(),oe(),ki=t=>{if(Ce.webgpu.validateInputContent&&(!t||t.length!==1))throw new Error("Pool ops requires 1 input.")},eo=(t,e,r)=>{let i=e.format==="NHWC",s=t.dims.slice();i&&s.splice(1,0,s.pop());let n=Object.hasOwnProperty.call(e,"dilations"),a=e.kernelShape.slice(),o=e.strides.slice(),l=n?e.dilations.slice():[],u=e.pads.slice();Js.adjustPoolAttributes(r,s,a,o,l,u);let d=Js.computePoolOutputShape(r,s,o,l,a,u,e.autoPad),c=Object.assign({},e);n?Object.assign(c,{kernelShape:a,strides:o,pads:u,dilations:l,cacheKey:e.cacheKey}):Object.assign(c,{kernelShape:a,strides:o,pads:u,cacheKey:e.cacheKey});let p=d.slice();return p.push(p.splice(1,1)[0]),[c,i?p:d]},to=(t,e)=>{let r=e.format==="NHWC",i=D.size(t),s=D.size(e.kernelShape),n=[{type:12,data:i},{type:12,data:s}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(e.kernelShape.length<=2){let o=e.kernelShape[e.kernelShape.length-1],l=e.strides[e.strides.length-1],u=e.pads[e.pads.length/2-1],d=e.pads[e.pads.length-1],c=!!(u+d);n.push({type:12,data:o},{type:12,data:l},{type:12,data:u},{type:12,data:d}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let p=!1;if(e.kernelShape.length===2){let f=e.kernelShape[e.kernelShape.length-2],m=e.strides[e.strides.length-2],y=e.pads[e.pads.length/2-2],b=e.pads[e.pads.length-2];p=!!(y+b),n.push({type:12,data:f},{type:12,data:m},{type:12,data:y},{type:12,data:b}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[n,a,!0,c,p]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=D.computeStrides(e.kernelShape);n.push({type:12,data:o},{type:12,data:e.pads},{type:12,data:e.strides}),a.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:e.pads.length},{name:"strides",type:"u32",length:e.strides.length});let l=e.pads.reduce((u,d)=>u+d);return[n,a,!!l,!1,!1]}},ro=(t,e,r,i,s,n,a,o,l,u,d,c)=>{let p=s.format==="NHWC",f=e.type.value,m=J("output",e.type.tensor,i);if(s.kernelShape.length<=2){let y="",b="",_="",x=r-(p?2:1);if(d?y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${x}] = indices[${x}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${x}] < 0 || xIndices[${x}]
                      >= uniforms.x_shape[${x}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${e.indicesToOffset("xIndices")}];
                  ${n}
                }`:y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${x}] = indices[${x}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${e.indicesToOffset("xIndices")}];
                  ${n}
                }`,s.kernelShape.length===2){let $=r-(p?3:2);c?b=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${$}] < 0 || xIndices[${$}] >= uniforms.x_shape[${$}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:b=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sh - uniforms.phStart + j;
                `,_=`
              }
            `}return`
            ${t.registerUniforms(l).declareVariables(e,m)}

            ${t.mainStart()}
              ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${m.offsetToIndices("global_idx")};
              var xIndices = ${m.offsetToIndices("global_idx")};

              var value = ${f}(${o});
              var pad = 0;
              ${b}
              ${y}
              ${_}
              ${a}

              output[global_idx] = value;
            }`}else{if(p)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let y=s.kernelShape.length,b=s.pads.length,_="";return u?_=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${e.indicesToOffset("xIndices")}];
                ${n}
              }`:_=`
              }
              let x_val = x[${e.indicesToOffset("xIndices")}];
              ${n}
            `,`
            ${t.registerUniforms(l).declareVariables(e,m)}

            ${t.mainStart()}
              ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${m.offsetToIndices("global_idx")};
              var xIndices = ${m.offsetToIndices("global_idx")};

              var offsets: array<u32, ${y}>;

              var value = ${f}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${y-1}u; j++) {
                  offsets[j] = offset / ${ee("uniforms.kernelStrides","j",y)};
                  offset -= offsets[j] * ${ee("uniforms.kernelStrides","j",y)};
                }
                offsets[${y-1}] = offset;

                isPad = false;
                for (var j = ${r-y}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${ee("uniforms.strides",`j - ${r-y}u`,y)}
                    + offsets[j - ${r-y}u] - ${ee("uniforms.pads","j - 2u",b)};
                  ${_}
              }
              ${a}

              output[global_idx] = value;
            }`}},io=t=>`${t.format};${t.ceilMode};${t.autoPad};${t.kernelShape.length}`,Zf=t=>`${io(t)};${t.countIncludePad}`,Qf=t=>`${io(t)};${t.storageOrder};${t.dilations}`,so=t=>({format:t.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][t.auto_pad],ceilMode:t.ceil_mode,kernelShape:t.kernel_shape,strides:t.strides,pads:t.pads}),no=(t,e,r,i)=>{let[s,n]=eo(e,i,r),a=U("x",e.dataType,e.dims.length),o=a.type.value,l="value += x_val;",u="";s.countIncludePad?u+=`value /= ${o}(uniforms.kernelSize);`:u+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[d,c,p,f,m]=to(n,s);d.push(...te(e.dims,n));let y=["rank"];return{name:t,shaderCache:{hint:`${i.cacheKey};${p};${f};${m}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(D.size(n)/64)},programUniforms:d}),getShaderSource:b=>ro(b,a,e.dims.length,n.length,s,l,u,0,c,p,f,m)}},lb=t=>{let e=t.count_include_pad!==0,r=so(t);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:e,...r,cacheKey:""};return{...i,cacheKey:Zf(i)}},ub=(t,e)=>{ki(t.inputs),t.compute(no("AveragePool",t.inputs[0],!1,e))},ao={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},db=t=>{let e=t.format;return{format:e,...ao,cacheKey:e}},cb=(t,e)=>{ki(t.inputs),t.compute(no("GlobalAveragePool",t.inputs[0],!0,e))},oo=(t,e,r,i)=>{let[s,n]=eo(e,i,r),a=`
      value = max(x_val, value);
    `,o="",l=U("x",e.dataType,e.dims.length),u=["rank"],[d,c,p,f,m]=to(n,s);return d.push(...te(e.dims,n)),{name:t,shaderCache:{hint:`${i.cacheKey};${p};${f};${m}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(D.size(n)/64)},programUniforms:d}),getShaderSource:y=>ro(y,l,e.dims.length,n.length,s,a,o,e.dataType===10?-65504:-1e5,c,p,f,m)}},hb=(t,e)=>{ki(t.inputs),t.compute(oo("MaxPool",t.inputs[0],!1,e))},pb=t=>{let e=t.storage_order,r=t.dilations,i=so(t);if(e!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let s={storageOrder:e,dilations:r,...i,cacheKey:""};return{...s,cacheKey:Qf(s)}},fb=t=>{let e=t.format;return{format:e,...ao,cacheKey:e}},mb=(t,e)=>{ki(t.inputs),t.compute(oo("GlobalMaxPool",t.inputs[0],!0,e))}}),Jf,em,gb,yb,MS=j(()=>{ie(),ne(),ze(),oe(),Jf=(t,e)=>{if(t.length<2||t.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(t.length===3&&t[1].dims===t[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(t.length===3&&t[0].dataType!==t[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(t[1].dims.length!==0&&t[1].dims.length!==1&&t[1].dims.length!==t[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(t.length>2){if(t[0].dataType!==t[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(t[1].dims.length!==t[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!t[1].dims.map((r,i)=>r===t[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(e.blockSize>0){if(t[1].dims.length===0||t[1].dims.length===1&&t[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!t[1].dims.map((s,n)=>n===e.axis||s===t[0].dims[n]).reduce((s,n)=>s&&n,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(t[1].dims.length!==t[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=t[0].dims[e.axis],i=t[1].dims[e.axis];if(e.blockSize<Math.ceil(r/i)||e.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},em=(t,e)=>{let r=D.normalizeAxis(e.axis,t[0].dims.length),i=t[0].dataType,s=i===3,n=t[0].dims,a=t[1].dataType,o=D.size(n),l=i===3||i===2,u=l?[Math.ceil(D.size(t[0].dims)/4)]:t[0].dims,d=t[1].dims,c=t.length>2?t[2]:void 0,p=c?l?[Math.ceil(D.size(c.dims)/4)]:c.dims:void 0,f=d.length===0||d.length===1&&d[0]===1,m=f===!1&&d.length===1,y=Ae(o),b=f&&(!l||y===4),_=b?y:1,x=b&&!l?y:1,$=U("input",l?12:i,u.length,x),S=U("scale",a,d.length),E=c?U("zero_point",l?12:i,p.length):void 0,T=J("output",a,n.length,_),A=[$,S];E&&A.push(E);let k=[u,d];c&&k.push(p);let P=[{type:12,data:o/_},{type:12,data:r},{type:12,data:e.blockSize},...te(...k,n)],M=N=>{let W=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${N.registerUniforms(W).declareVariables(...A,T)}
      ${N.mainStart()}
          ${N.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${T.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${$.getByOffset("global_idx / 4")};
            let x_vec = ${s?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${_===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${$.getByOffset("global_idx")};`};

          // Set scale input
          ${f?`let scale_value= ${S.getByOffset("0")}`:m?`
            let scale_index = ${T.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${S.getByOffset("scale_index")};`:`
            var scale_indices: ${S.type.indices} = output_indices;
            let index = ${S.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${S.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${S.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${E?f?l?`
                let zero_point_input = ${E.getByOffset("0")};
                let zero_point_vec =  ${s?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${E.getByOffset("0")}`:m?l?`
                let zero_point_index = ${T.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${E.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${s?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${T.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${E.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${S.indicesToOffset("scale_indices")};
                let zero_point_input = ${E.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${s?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${E.getByIndices("scale_indices")};`:`let zero_point_value = ${l?s?"i32":"u32":$.type.value}(0);`};
      // Compute and write output
      ${T.setByOffset("global_idx",`${T.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:e.cacheKey,inputDependencies:E?["rank","rank","rank"]:["rank","rank"]},getShaderSource:M,getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:Math.ceil(o/_/64),y:1,z:1},programUniforms:P})}},gb=(t,e)=>{Jf(t.inputs,e),t.compute(em(t.inputs,e))},yb=t=>be({axis:t.axis,blockSize:t.blockSize})}),tm,rm,_b,zS=j(()=>{wt(),ie(),oe(),tm=(t,e,r)=>{let i=t===e,s=t<e&&r<0,n=t>e&&r>0;if(i||s||n)throw new Error("Range these inputs' contents are invalid.")},rm=(t,e,r,i)=>{let s=Math.abs(Math.ceil((e-t)/r)),n=[s],a=s,o=[{type:12,data:a},{type:i,data:t},{type:i,data:r},...te(n)],l=u=>{let d=J("output",i,n.length),c=d.type.value,p=[{name:"outputSize",type:"u32"},{name:"start",type:c},{name:"delta",type:c}];return`
        ${u.registerUniforms(p).declareVariables(d)}
        ${u.mainStart()}
        ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${c}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:n,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:o})}},_b=t=>{let e=0,r=0,i=0;t.inputs[0].dataType===6?(e=t.inputs[0].getInt32Array()[0],r=t.inputs[1].getInt32Array()[0],i=t.inputs[2].getInt32Array()[0]):t.inputs[0].dataType===1&&(e=t.inputs[0].getFloat32Array()[0],r=t.inputs[1].getFloat32Array()[0],i=t.inputs[2].getFloat32Array()[0]),Ce.webgpu.validateInputContent&&tm(e,r,i),t.compute(rm(e,r,i,t.inputs[0].dataType),{inputs:[]})}}),im,sm,bb,wb,PS=j(()=>{ie(),ne(),ze(),oe(),im=(t,e,r,i)=>{if(t!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${t}.`);let s=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,n=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${e}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(t){case"none":return`${e}=${r};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${e}, bitcast<${i}>(${r}));`:`
              ${s}bitcast<${i}>(oldValue) + (${r})${n}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${e}, bitcast<${i}>(${r}));`:`
                ${s}max(bitcast<f32>(oldValue), (${r}))${n}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${e}, bitcast<${i}>(${r}));`:`${s}min(bitcast<${i}>(oldValue), (${r}))${n}`;case"mul":return`${s}(bitcast<${i}>(oldValue) * (${r}))${n}`;default:throw new Error(`Reduction ${t} is not supported.`)}},sm=(t,e)=>{let r=t[0].dims,i=t[1].dims,s=r,n=1,a=Math.ceil(D.sizeToDimension(i,i.length-1)/n),o=i[i.length-1],l=D.sizeFromDimension(r,o),u=[{type:12,data:a},{type:12,data:o},{type:12,data:l},...te(t[1].dims,t[2].dims,s)],d=c=>{let p=U("indices",t[1].dataType,t[1].dims.length),f=U("updates",t[2].dataType,t[2].dims.length,n),m=e.reduction!=="none"&&e.reduction!==""?Y0("output",t[0].dataType,s.length):J("output",t[0].dataType,s.length,n);return`
      ${c.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(p,f,m)}
      ${c.mainStart()}
        ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${t[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${im(e.reduction,"output[data_offset + i]","value",m.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${e.cacheKey}_${e.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:u}),getShaderSource:d}},bb=t=>be({reduction:t.reduction}),wb=(t,e)=>{t.compute(sm(t.inputs,e),{inputs:[t.inputs[1],t.inputs[2]],outputs:[]})}}),nm,am,om,lo,lm,um,dm,cm,hm,pm,fm,mm,uo,gm,ym,_m,bm,wm,xb,vb,RS=j(()=>{ie(),ne(),ze(),oe(),nm=(t,e)=>{if(t.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),t.length>0){if(e.mode==="linear"){if(!(t.length===2||t.length===3||t.length===4&&t[0]===1&&t[1]===1||t.length===4&&t[0]===1&&t[3]===1||t.length===5&&t[0]===1&&t[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(e.mode==="cubic"&&!(t.length===2||t.length===4&&t[0]===1&&t[1]===1||t.length===4&&t[0]===1&&t[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},am=(t,e,r)=>{e.every(s=>s>=0&&s<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return e.forEach((s,n)=>i[s]=t[n]),i},om=(t,e,r,i,s,n)=>{let[a,o,l]=r>10?[1,2,3]:[-1,t.length>1?1:-1,-1],u=t[0].dims.length;if(a>0&&t.length>a&&t[a].dims.length>0)t[a].getFloat32Array().forEach(d=>n.push(d));else if(e.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&t.length>o&&t[o].dims.length===1&&t[o].dims[0]>0){if(t[o].getFloat32Array().forEach(d=>i.push(d)),i.length!==0&&i.length!==u&&r>=18&&i.length!==e.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");nm(i,e),e.axes.length>0&&am(i,e.axes,u).forEach((d,c)=>i[c]=d)}if(l>0&&t.length>l&&t[l].dims.length===1&&t[l].dims[0]>0&&(t[l].getBigInt64Array().forEach(d=>s.push(Number(d))),s.length!==0&&s.length!==u&&r>=18&&s.length!==e.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(e.axes.length>0){if(i.length!==0&&i.length!==e.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(s.length!==0&&s.length!==e.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof s<"u"&&i.length>0&&s.length>u)throw new Error("Resize requires only of scales or sizes to be specified")},lo=(t,e,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${t}) * (${e});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,lm=(t,e)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${e} { `+(()=>{switch(t){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${e}(xResized) / ${e}(xScale);
          } else {
            ${lo("xResized","lengthOriginal","lengthResized",e)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${e}(xResized) + 0.5) / ${e}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${e}(xResized) + 0.5) / ${e}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${lo("xResized","lengthOriginal - 1","lengthResized - 1",e)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${e}(roiStart) * ${e}(lengthOriginal - 1) +
                        (${e}(xResized) * ${e}(roiEnd - roiStart) * ${e}(lengthOriginal - 1)) /
                        ${e}(lengthResized - 1);
                  } else {
                    return 0.5 * ${e}(roiStart + roiEnd) * ${e}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${e}xScale * ${e}(lengthResized);
                  const adjustment = ${e}(lengthResized) / outputWidth;
                  const center = ${e}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${e}(xResized) + 0.5) / ${e}(xScale)) - 0.5;`;case"half_pixel":return`return ((${e}(xResized) + 0.5) / ${e}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${t} is not supported`)}})()+"}",um=(t,e,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(t){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(e<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${t} is not supported`)}})()+"}",dm=(t,e,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),s=t.length===0?i:t.slice();return e.length>0?(e.forEach((n,a)=>{i[n]=s[a],i[a+r]=s[e.length+a]}),i):s},cm=(t,e,r,i)=>{let s=[];if(r.length>0)if(i.length>0){if(t.forEach(n=>s.push(n)),Math.max(...i)>t.length)throw new Error("axes is out of bound");i.forEach((n,a)=>s[n]=r[a])}else r.forEach(n=>s.push(n));else{if(e.length===0)throw new Error("Resize requires either scales or sizes.");s=t.map((n,a)=>Math.round(n*e[a]))}return s},hm=(t,e,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(n=>e[n]),Number.MAX_VALUE):Math.min(...e,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(n=>e[n]),Number.MIN_VALUE):Math.max(...e,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();e.fill(1,0,e.length);let s=t.slice();return r.axes.length>0?(r.axes.forEach(n=>e[n]=i),r.axes.forEach(n=>s[n]=Math.round(t[n]*e[n]))):(e.fill(i,0,e.length),s.forEach((n,a)=>s[a]=Math.round(n*e[a]))),s},pm=(t,e,r,i,s)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> array<${t.type.value}, ${r.length}> {
      var original_indices: array<${t.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var scale = ${ee("uniforms.scales","i",i)};
        var roi_low = ${ee("uniforms.roi","i",s)};
        var roi_hi = ${ee("uniforms.roi",`i + ${e.length}`,s)};
        if (scale == 1.0) {
          original_indices[i] = ${t.type.value}(output_index);
        } else {
          var input_shape_i = ${ee("uniforms.input_shape","i",e.length)};
          var output_shape_i = ${ee("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,fm=(t,e,r,i,s,n,a)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> ${t.type.indices} {
      var input_indices: ${t.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${ee("uniforms.scales","i",s)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${ee("uniforms.roi","i",n)};
          var roi_hi = ${ee("uniforms.roi",`i + ${r.length}`,n)};
          var input_shape_i = ${ee("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${ee("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${a} || (original_idx >= 0 && original_idx < ${e.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${e.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${t.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,mm=(t,e)=>`
    fn checkInputIndices(input_indices: ${t.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${e.length}; i++) {
        var input_index = ${t.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${ee("uniforms.input_shape","i",e.length)}) {
          return false;
        }
      }
      return true;
    }`,uo=(t,e,r,i)=>t.rank>i?`
    ${t.indicesSet("input_indices",e,"channel")};
    ${t.indicesSet("input_indices",r,"batch")};
`:"",gm=(t,e,r,i,s)=>{let[n,a,o,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],u=t.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${u} {
      var input_indices: ${t.type.indices};
      ${t.indicesSet("input_indices",a,`max(0, min(row, ${r[a]} - 1))`)};
      ${t.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${uo(t,l,n,2)}
      return ${t.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${e.type.indices}) -> ${u} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${u} = originalIndices[${a}];
      var col:${u} = originalIndices[${o}];
      ${i?`if (row < 0 || row > (${r[a]} - 1) || col < 0 || col > (${r[o]} - 1)) {
        return ${s};
      }`:""};
      row = max(0, min(row, ${r[a]} - 1));
      col = max(0, min(col, ${r[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${n}])`:"0"};
      var x11: ${u} = getInputValue(batch, channel, row1, col1);
      var x12: ${u} = getInputValue(batch, channel, row1, col2);
      var x21: ${u} = getInputValue(batch, channel, row2, col1);
      var x22: ${u} = getInputValue(batch, channel, row2, col2);
      var dx1: ${u} = abs(row - ${u}(row1));
      var dx2: ${u} = abs(${u}(row2) - row);
      var dy1: ${u} = abs(col - ${u}(col1));
      var dy2: ${u} = abs(${u}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},ym=(t,e,r,i,s,n,a,o,l,u)=>{let d=r.length===2,[c,p]=d?[0,1]:[2,3],f=t.type.value,m=y=>{let b=y===c?"row":"col";return`
      fn ${b}CubicInterpolation(input_indices: ${t.type.indices}, output_indices: ${e.type.indices}) -> ${f} {
        var output_index = ${e.indicesGet("output_indices",y)};
        var originalIdx: ${f} = getOriginalCoordinateFromResizedCoordinate(output_index, ${s[y]},
        ${i[y]}, ${r[y]}, ${n[y]}, ${n[y]} + ${r.length});
        var fractOriginalIdx: ${f} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${r[y]} - 1))) {
          return ${l};
        }
        var data: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${b}: ${f} = originalIdx + ${f}(i);
          if (${b} < 0 || ${b} >= ${r[y]}) {
            ${u?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${l};`:`${b} = max(0, min(${b}, ${r[y]} - 1));`};
          }
        var input_indices_copy: ${t.type.indices} = input_indices;
          ${t.indicesSet("input_indices_copy",y,`u32(${b})`)};
          data[i + 1] = ${y===c?t.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${m(c)};
    ${m(p)};
  fn getCubicInterpolationCoefs(s: ${f}) -> array<${f}, 4> {
    var absS = abs(s);
    var coeffs: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${f} = 1.0 - absS;
    var twoMinusAbsS: ${f} = 2.0 - absS;
    var onePlusAbsS: ${f} = 1.0 + absS;
    coeffs[0] = ((${a} * onePlusAbsS - 5 * ${a}) * onePlusAbsS + 8 * ${a}) * onePlusAbsS - 4 * ${a};
    coeffs[1] = ((${a} + 2) * absS - (${a} + 3)) * absS * absS + 1;
    coeffs[2] = ((${a} + 2) * oneMinusAbsS - (${a} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${a} * twoMinusAbsS - 5 * ${a}) * twoMinusAbsS + 8 * ${a}) * twoMinusAbsS - 4 * ${a};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${f}, 4>, coefs: array<${f}, 4>) -> ${f} {
    var coefsSum: ${f} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${e.type.indices}) -> ${f} {
    var input_indices: ${t.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},_m=(t,e,r,i,s)=>{let[n,a,o,l,u]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],d=t.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${d} {
      var input_indices: ${t.type.indices};
      ${t.indicesSet("input_indices",a,`max(0, min(depth, ${r[a]} - 1))`)};
      ${t.indicesSet("input_indices",o,`max(0, min(height, ${r[o]} - 1))`)};
      ${t.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${uo(t,u,n,3)}
      return ${t.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${e.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${d} = originalIndices[${a}];
      var height:${d} = originalIndices[${o}];
      var width:${d} = originalIndices[${l}];
      ${i?`if (depth < 0 || depth > (${r[a]} - 1) || height < 0 || height > (${r[o]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${s};
        }`:""};

    depth = max(0, min(depth, ${r[a]} - 1));
      height = max(0, min(height, ${r[o]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${u}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${n}])`:"0"};

      var x111: ${d} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${d} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${d} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${d} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${d} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${d} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${d} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${d} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${d} = abs(depth - ${d}(depth1));
      var dx2: ${d} = abs(${d}(depth2) - depth);
      var dy1: ${d} = abs(height - ${d}(height1));
      var dy2: ${d} = abs(${d}(height2) - height);
      var dz1: ${d} = abs(width - ${d}(width1));
      var dz2: ${d} = abs(${d}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},bm=(t,e,r,i,s,n)=>{let a=t.dims,o=dm(n,e.axes,a.length),l=cm(a,i,s,e.axes),u=i.slice();i.length===0&&(u=a.map((x,$)=>x===0?1:l[$]/x),e.keepAspectRatioPolicy!=="stretch"&&(l=hm(a,u,e)));let d=J("output",t.dataType,l.length),c=U("input",t.dataType,a.length),p=D.size(l),f=a.length===l.length&&a.every((x,$)=>x===l[$]),m=e.coordinateTransformMode==="tf_crop_and_resize",y=e.extrapolationValue,b=c.type.value,_=x=>`
      ${f?"":`
      ${lm(e.coordinateTransformMode,b)};
      ${(()=>{switch(e.mode){case"nearest":return`
              ${mm(c,a)};
              ${um(e.nearestMode,r,b)};
              ${fm(c,d,a,l,u.length,o.length,m)};
              `;case"linear":return`
              ${pm(d,a,l,u.length,o.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${gm(c,d,a,m,y)}`;if(a.length===3||a.length===5)return`${_m(c,d,a,m,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${ym(c,d,a,l,u,o,e.cubicCoeffA,m,e.extrapolationValue,e.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${x.registerUniform("output_size","u32").registerUniform("scales","f32",u.length).registerUniform("roi","f32",o.length).declareVariables(c,d)}
      ${x.mainStart()}
        ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${f?"output[global_idx] = input[global_idx];":`
        let output_indices = ${d.offsetToIndices("global_idx")};
        var input_indices: ${c.type.indices};
        ${(()=>{switch(e.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${c.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${e.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${a.length===2||a.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${e.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${e.cacheKey}|${r}|${u.length>0?e.mode==="cubic"?u:u.length:""}|${s.length>0?s:""}|${o.length>0?o:""}|${f}|${e.mode==="nearest"?a.length:a}`,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:l,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},{type:1,data:u},{type:1,data:o},...te(a,l)]})}},wm=t=>{let e=t.customDataBuffer;return new Uint32Array(e,e.byteOffset,1)[0]},xb=(t,e)=>{let r=[],i=[],s=[],n=wm(t);if(e.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");om(t.inputs,e,n,r,i,s),t.compute(bm(t.inputs[0],e,n,r,i,s),{inputs:[0]})},vb=t=>{let e=t.antialias,r=t.axes,i=t.coordinateTransformMode,s=t.cubicCoeffA,n=t.excludeOutside!==0,a=t.extrapolationValue,o=t.keepAspectRatioPolicy,l=t.mode,u=t.nearestMode===""?"simple":t.nearestMode;return be({antialias:e,axes:r,coordinateTransformMode:i,cubicCoeffA:s,excludeOutside:n,extrapolationValue:a,keepAspectRatioPolicy:o,mode:l,nearestMode:u})}}),xm,vm,$b,BS=j(()=>{ie(),ne(),oe(),xm=t=>{if(!t||t.length<3)throw new Error("layerNorm requires at least 3 inputs.");let e=t[0],r=t[1],i=t[2];if(e.dataType!==r.dataType||e.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(e.dims.length!==3&&e.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let s=e.dims[e.dims.length-1],n=e.dims[e.dims.length-2];if(r.dims[r.dims.length-1]!==s)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==n)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==s)throw new Error("Gamma must have the same hidden size as input");if(t.length>3){let a=t[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==s)throw new Error("Beta must have the same hidden size as input")}if(t.length>4){let a=t[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==s)throw new Error("Bias must have the same hidden size as input")}},vm=(t,e,r,i)=>{let s=e.simplified,n=t[0].dims,a=D.size(n),o=n,l=a,u=n.slice(-1)[0],d=i?n.slice(0,-1).concat(1):[],c=!s&&t.length>3,p=t.length>4,f=i&&r>1,m=i&&r>2,y=r>3,b=64,_=Ae(u),x=[{type:12,data:l},{type:12,data:_},{type:12,data:u},{type:1,data:e.epsilon}],$=E=>{let T=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],A=[U("x",t[0].dataType,t[0].dims,_),U("skip",t[1].dataType,t[1].dims,_),U("gamma",t[2].dataType,t[2].dims,_)];c&&A.push(U("beta",t[3].dataType,t[3].dims,_)),p&&A.push(U("bias",t[4].dataType,t[4].dims,_)),A.push(J("output",t[0].dataType,o,_)),f&&A.push(J("mean_output",1,d)),m&&A.push(J("inv_std_output",1,d)),y&&A.push(J("input_skip_bias_sum",t[0].dataType,o,_));let k=Ve(t[0].dataType),P=Ve(1,_);return`

      ${E.registerUniforms(T).declareVariables(...A)}
      var<workgroup> sum_shared : array<${P}, ${b}>;
      var<workgroup> sum_squared_shared : array<${P}, ${b}>;

      ${E.mainStart([b,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${b};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${b};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${b-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${p?"bias[offset1d + i]":k+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${y?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Jr(k,_,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${b};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${cr("sum",_)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${cr("square_sum",_)} / f32(uniforms.hidden_size) ${s?"":"- mean * mean"} + uniforms.epsilon);
        ${f?"mean_output[global_idx] = mean;":""}
        ${m?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${s?"":`- ${k}(mean)`}) *
            ${k}(inv_std_dev) * gamma[offset1d + i]
            ${c?"+ beta[offset1d + i]":""};
        }
      }`},S=[{dims:o,dataType:t[0].dataType}];return r>1&&S.push({dims:d,dataType:1}),r>2&&S.push({dims:d,dataType:1}),r>3&&S.push({dims:n,dataType:t[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${_};${f};${m};${y}`,inputDependencies:t.map((E,T)=>"type")},getShaderSource:$,getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(l/u)},programUniforms:x})}},$b=(t,e)=>{xm(t.inputs);let r=[0];t.outputCount>1&&r.push(-3),t.outputCount>2&&r.push(-3),t.outputCount>3&&r.push(3),t.compute(vm(t.inputs,e,t.outputCount,!1),{outputs:r})}}),$m,Si,km,co,Sm,Cm,kb,Sb,OS=j(()=>{ie(),ne(),ze(),oe(),$m=(t,e)=>{if(!t||t.length<1)throw new Error("too few inputs");if(e.axes.length!==0){if(e.axes.length!==e.starts.length||e.axes.length!==e.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(e.starts.length!==e.ends.length)throw new Error("starts and ends must have the same length");t.slice(1).forEach((r,i)=>{if(t[i+1].dataType!==6&&t[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},Si=(t,e)=>{let r=[];if(t.length>e)if(t[e].dataType===7)t[e].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(t[e].dataType===6)t[e].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${e} must be an array of int32 or int64`);return r},km=(t,e)=>{if(t.length>1){let r=Si(t,1),i=Si(t,2),s=Si(t,3);return s.length===0&&(s=[...Array(t[0].dims.length).keys()]),be({starts:r,ends:i,axes:s})}else return e},co=(t,e,r,i,s)=>{let n=t;return t<0&&(n+=r[i[e]]),s[e]<0?Math.max(0,Math.min(n,r[i[e]]-1)):Math.max(0,Math.min(n,r[i[e]]))},Sm=(t,e,r)=>`fn calculateInputIndices(output_indices: ${e.type.indices}) -> ${t.type.indices} {
          var input_indices: ${t.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${ee("uniforms.input_shape","i",r.length)};
            let steps_i = ${ee("uniforms.steps","i",r.length)};
            let signs_i = ${ee("uniforms.signs","i",r.length)};
            let starts_i = ${ee("uniforms.starts","i",r.length)};
            var output_index = ${e.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${t.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,Cm=(t,e)=>{let r=t[0].dims,i=D.size(r),s=e.axes.length>0?D.normalizeAxes(e.axes,r.length):[...Array(r.length).keys()],n=Si(t,4);n.forEach(_=>_!==0||(()=>{throw new Error("step cannot be 0")})),n.length===0&&(n=Array(s.length).fill(1));let a=e.starts.map((_,x)=>co(_,x,r,s,n)),o=e.ends.map((_,x)=>co(_,x,r,s,n));if(s.length!==a.length||s.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(s.length!==r.length)for(let _=0;_<r.length;++_)s.includes(_)||(a.splice(_,0,0),o.splice(_,0,r[_]),n.splice(_,0,1));let l=n.map(_=>Math.sign(_));n.forEach((_,x,$)=>{if(_<0){let S=(o[x]-a[x])/_,E=a[x],T=E+S*n[x];a[x]=T,o[x]=E,$[x]=-_}});let u=r.slice(0);s.forEach((_,x)=>{u[_]=Math.ceil((o[_]-a[_])/n[_])});let d={dims:u,dataType:t[0].dataType},c=J("output",t[0].dataType,u.length),p=U("input",t[0].dataType,t[0].dims.length),f=D.size(u),m=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:n.length}],y=[{type:12,data:f},{type:12,data:a},{type:6,data:l},{type:12,data:n},...te(t[0].dims,u)],b=_=>`
      ${_.registerUniforms(m).declareVariables(p,c)}
        ${Sm(p,c,r)}
        ${_.mainStart()}
          ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${c.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${c.setByOffset("global_idx",p.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${a.length}_${n.length}`,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:[d],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:y})}},kb=(t,e)=>{$m(t.inputs,e);let r=km(t.inputs,e);t.compute(Cm(t.inputs,r),{inputs:[0]})},Sb=t=>{let e=t.starts,r=t.ends,i=t.axes;return be({starts:e,ends:r,axes:i})}}),Tm,Em,Cb,Tb,DS=j(()=>{ie(),ne(),ze(),hr(),oe(),Tm=t=>{if(!t||t.length!==1)throw new Error("Softmax op requires 1 input.")},Em=(t,e)=>{let r=t.inputs[0],i=r.dims,s=D.size(i),n=i.length,a=D.normalizeAxis(e.axis,n),o=a<i.length-1,l,u=[];o?(u=Array.from({length:n},(A,k)=>k),u[a]=n-1,u[n-1]=a,l=t.compute(ft(r,u),{inputs:[r],outputs:[-1]})[0]):l=r;let d=l.dims,c=d[n-1],p=s/c,f=Ae(c),m=c/f,y=64;p===1&&(y=256);let b=(A,k)=>k===4?`max(max(${A}.x, ${A}.y), max(${A}.z, ${A}.w))`:k===2?`max(${A}.x, ${A}.y)`:k===3?`max(max(${A}.x, ${A}.y), ${A}.z)`:A,_=U("x",l.dataType,l.dims,f),x=J("result",l.dataType,l.dims,f),$=_.type.value,S=Ve(l.dataType)==="f32"?`var threadMax = ${$}(-3.4028234663852886e+38f);`:`var threadMax = ${$}(-65504.0h);`,E=A=>`
      var<workgroup> rowMaxShared : ${$};
      var<workgroup> rowSumShared : ${$};
      var<workgroup> threadShared : array<${$}, ${y}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${$} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${$}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${A.registerUniform("packedCols","i32").declareVariables(_,x)}
      ${A.mainStart(y)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${y};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${S}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${$}(${b("threadShared[0]",f)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${$}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${$}(${cr("threadShared[0]",f)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${$}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,T=t.compute({name:"Softmax",shaderCache:{hint:`${f};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:d,dataType:l.dataType}],dispatchGroup:{x:p},programUniforms:[{type:6,data:m}]}),getShaderSource:E},{inputs:[l],outputs:[o?-1:0]})[0];o&&t.compute(ft(T,u),{inputs:[T]})},Cb=(t,e)=>{Tm(t.inputs),Em(t,e)},Tb=t=>be({axis:t.axis})}),ho,Am,Im,Mm,Eb,NS=j(()=>{ie(),ne(),oe(),ho=t=>Array.from(t.getBigInt64Array(),Number),Am=t=>{if(!t||t.length!==2)throw new Error("Tile requires 2 inputs.");if(t[0].dataType!==1&&t[0].dataType!==10&&t[0].dataType!==6&&t[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(t[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(t[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(ho(t[1]).length!==t[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Im=(t,e)=>{let r=[];for(let i=0;i<t.length;++i)r.push(t[i]*e[i]);return r},Mm=(t,e)=>{let r=t[0].dims,i=e??ho(t[1]),s=Im(r,i),n=D.size(s),a=t[0].dataType,o=U("input",a,r.length),l=J("output",a,s.length),u=d=>`
      const inputShape = ${o.indices(...r)};
      ${d.registerUniform("output_size","u32").declareVariables(o,l)}
      ${d.mainStart()}
      ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:s,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},...te(t[0].dims,s)]}),getShaderSource:u}},Eb=t=>{Am(t.inputs),t.compute(Mm(t.inputs),{inputs:[0]})}}),zm,Pm,Ab,LS=j(()=>{ie(),ne(),oe(),zm=(t,e,r,i,s)=>{let n=J("output_data",s,r.length,4),a=U("a_data",e[1].dataType,e[1].dims.length,4),o=U("b_data",e[2].dataType,e[2].dims.length,4),l=U("c_data",e[0].dataType,e[0].dims.length,4),u,d=(c,p,f)=>`select(${p}, ${c}, ${f})`;if(!i)u=n.setByOffset("global_idx",d(a.getByOffset("global_idx"),o.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let c=(p,f,m="")=>{let y=`a_data[index_a${f}][component_a${f}]`,b=`b_data[index_b${f}][component_b${f}]`,_=`bool(c_data[index_c${f}] & (0xffu << (component_c${f} * 8)))`;return`
            let output_indices${f} = ${n.offsetToIndices(`global_idx * 4u + ${f}u`)};
            let offset_a${f} = ${a.broadcastedIndicesToOffset(`output_indices${f}`,n)};
            let offset_b${f} = ${o.broadcastedIndicesToOffset(`output_indices${f}`,n)};
            let offset_c${f} = ${l.broadcastedIndicesToOffset(`output_indices${f}`,n)};
            let index_a${f} = offset_a${f} / 4u;
            let index_b${f} = offset_b${f} / 4u;
            let index_c${f} = offset_c${f} / 4u;
            let component_a${f} = offset_a${f} % 4u;
            let component_b${f} = offset_b${f} % 4u;
            let component_c${f} = offset_c${f} % 4u;
            ${p}[${f}] = ${m}(${d(y,b,_)});
          `};s===9?u=`
            var data = vec4<u32>(0);
            ${c("data",0,"u32")}
            ${c("data",1,"u32")}
            ${c("data",2,"u32")}
            ${c("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:u=`
            ${c("output_data[global_idx]",0)}
            ${c("output_data[global_idx]",1)}
            ${c("output_data[global_idx]",2)}
            ${c("output_data[global_idx]",3)}
          `}return`
        ${t.registerUniform("vec_size","u32").declareVariables(l,a,o,n)}
        ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${u}
      }`},Pm=t=>{let e=t[1].dims,r=t[2].dims,i=t[0].dims,s=t[1].dataType,n=!(D.areEqual(e,r)&&D.areEqual(r,i)),a=e,o=D.size(e);if(n){let u=ii.calcShape(ii.calcShape(e,r,!1),i,!1);if(!u)throw new Error("Can't perform where op on the given tensors");a=u,o=D.size(a)}let l=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:u=>zm(u,t,a,n,s),getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:l},...te(i,e,r,a)]})}},Ab=t=>{t.compute(Pm(t.inputs))}}),Ib,GS=j(()=>{eS(),Pl(),tS(),rS(),iS(),sS(),nS(),dS(),hS(),pS(),fS(),mS(),gS(),yS(),_S(),bS(),wS(),xS(),vS(),$S(),kS(),SS(),CS(),TS(),ES(),X_(),AS(),IS(),MS(),zS(),PS(),zl(),RS(),eb(),BS(),OS(),DS(),Q_(),NS(),hr(),Rl(),LS(),Ib=new Map([["Abs",[$y]],["Acos",[ky]],["Acosh",[Sy]],["Add",[n_]],["ArgMax",[by,Fo]],["ArgMin",[_y,Fo]],["Asin",[Cy]],["Asinh",[Ty]],["Atan",[Ey]],["Atanh",[Ay]],["Attention",[wy]],["AveragePool",[ub,lb]],["BatchNormalization",[xy]],["BiasAdd",[vy]],["BiasSplitGelu",[s_]],["Cast",[My,Iy]],["Ceil",[Py]],["Clip",[zy]],["Concat",[m_,g_]],["Conv",[Xo,Yo]],["ConvTranspose",[C_,S_]],["Cos",[Ry]],["Cosh",[By]],["CumSum",[T_,E_]],["DepthToSpace",[A_,I_]],["DequantizeLinear",[gb,yb]],["Div",[a_]],["Einsum",[M_,z_]],["Elu",[Oy,Ri]],["Equal",[o_]],["Erf",[Dy]],["Exp",[Ny]],["Expand",[P_]],["FastGelu",[R_]],["Floor",[Ly]],["FusedConv",[Xo,Yo]],["Gather",[O_,B_]],["GatherElements",[V_,U_]],["GatherBlockQuantized",[L_,G_]],["GatherND",[D_,N_]],["Gelu",[Gy]],["Gemm",[W_,F_]],["GlobalAveragePool",[cb,db]],["GlobalMaxPool",[mb,fb]],["Greater",[c_]],["GreaterOrEqual",[p_]],["GridSample",[q_,H_]],["GroupQueryAttention",[tb]],["HardSigmoid",[Yy,jy]],["InstanceNormalization",[rb]],["LayerNormalization",[ib]],["LeakyRelu",[Uy,Ri]],["Less",[h_]],["LessOrEqual",[f_]],["Log",[r_]],["MatMul",[sb]],["MatMulNBits",[nb,ab]],["MaxPool",[hb,pb]],["Mul",[l_]],["MultiHeadAttention",[Y_,j_]],["Neg",[Fy]],["Not",[Vy]],["Pad",[ob]],["Pow",[u_]],["QuickGelu",[i_,Ri]],["Range",[_b]],["Reciprocal",[Wy]],["ReduceMin",[py]],["ReduceMean",[ly]],["ReduceMax",[hy]],["ReduceSum",[my]],["ReduceProd",[fy]],["ReduceL1",[uy]],["ReduceL2",[dy]],["ReduceLogSum",[yy]],["ReduceLogSumExp",[cy]],["ReduceSumSquare",[gy]],["Relu",[qy]],["Resize",[xb,vb]],["RotaryEmbedding",[J_]],["ScatterND",[wb,bb]],["Sigmoid",[Hy]],["Sin",[Xy]],["Sinh",[Ky]],["Slice",[kb,Sb]],["SkipLayerNormalization",[$b]],["Split",[K_,Z_]],["Sqrt",[Zy]],["Softmax",[Cb,Tb]],["Sub",[d_]],["Tan",[Qy]],["Tanh",[Jy]],["ThresholdedRelu",[t_,Ri]],["Tile",[Eb]],["Transpose",[K0,Z0]],["Where",[Ab]]])}),Mb,US=j(()=>{wt(),Jt(),oe(),Mb=class{constructor(t){this.backend=t,this.repo=new Map,this.attributesBound=!1}getArtifact(t){return this.repo.get(t)}setArtifact(t,e){this.repo.set(t,e)}run(t,e,r,i,s){Ft(t.programInfo.name);let n=this.backend.device,a=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let u of e)o.push({binding:o.length,resource:{buffer:u.buffer}});for(let u of r)o.push({binding:o.length,resource:{buffer:u.buffer}});s&&o.push({binding:o.length,resource:s});let l=n.createBindGroup({layout:t.computePipeline.getBindGroupLayout(0),entries:o,label:t.programInfo.name});if(this.backend.sessionStatus==="capturing"){let u={kernelId:this.backend.currentKernelId,computePipeline:t.computePipeline,bindGroup:l,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(u)}a.setPipeline(t.computePipeline),a.setBindGroup(0,l),a.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),It(t.programInfo.name)}dispose(){}build(t,e){Ft(t.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(u=>{r.features.has(u.feature)&&i.push(`enable ${u.extension};`)});let s=X0(e,this.backend.device.limits),n=t.getShaderSource(s),a=`${i.join(`
`)}
${s.additionalImplementations}
${n}`,o=r.createShaderModule({code:a,label:t.name});pe("verbose",()=>`[WebGPU] ${t.name} shader code: ${a}`);let l=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:t.name});return It(t.name),{programInfo:t,computePipeline:l,uniformVariablesInfo:s.variablesInfo}}normalizeDispatchGroupSize(t){let e=typeof t=="number"?t:t.x,r=typeof t=="number"?1:t.y||1,i=typeof t=="number"?1:t.z||1,s=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(e<=s&&r<=s&&i<=s)return[e,r,i];let n=e*r*i,a=Math.ceil(Math.sqrt(n));if(a>s){if(a=Math.ceil(Math.cbrt(n)),a>s)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[a,a,a]}else return[a,a,1]}}}),zb={};ai(zb,{WebGpuBackend:()=>Pb});var Rm,Bm,Om,Pb,VS=j(()=>{wt(),ie(),Jt(),W0(),Qk(),GS(),US(),Rm=(t,e)=>{if(e.length!==t.length)throw new Error(`inputDependencies length ${e.length} is not equal to inputTensors length ${t.length}.`);let r=[];for(let i=0;i<t.length;++i){let s=t[i].dataType;switch(e[i]){case"none":{r.push("");break}case"type":{r.push(`${s}`);break}case"rank":{let n=t[i].dims.length;r.push(`${s};${n}`);break}case"dims":{let n=t[i].dims.join(",");r.push(`${s};${n}`);break}default:throw new Error(`unsupported input dependency: ${e[i]}`)}}return r.join("|")},Bm=(t,e,r)=>{var s,n;let i=t.name;return(s=t.shaderCache)!=null&&s.hint&&(i+="["+t.shaderCache.hint+"]"),i+=":"+r+`:${Rm(e,((n=t.shaderCache)==null?void 0:n.inputDependencies)??new Array(e.length).fill("dims"))}`,i},Om=class{constructor(t){t&&(this.architecture=t.architecture,this.vendor=t.vendor)}isArchitecture(t){return this.architecture===t}isVendor(t){return this.vendor===t}},Pb=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let t=this.kernelCustomData.get(this.currentKernelId);return t||(t={},this.kernelCustomData.set(this.currentKernelId,t)),t}async initialize(t,e){this.env=t;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:e.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:e.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:e.limits.maxStorageBufferBindingSize,maxBufferSize:e.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:e.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:e.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:e.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:e.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},s=n=>e.features.has(n)&&r.push(n)&&!0;s("chromium-experimental-timestamp-query-inside-passes")||s("timestamp-query"),s("shader-f16"),s("subgroups"),this.device=await e.requestDevice(i),this.adapterInfo=new Om(e.info||await e.requestAdapterInfo()),this.gpuDataManager=j0(this),this.programManager=new Mb(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,El(t.logLevel,!!t.debug),this.device.onuncapturederror=n=>{n.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${n.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:e,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var t;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((t=this.env)!=null&&t.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let t=this.getCommandEncoder(),e={};this.queryType==="at-passes"&&(e.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=t.beginComputePass(e)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Ft(),this.endComputePass();let t;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),t=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(t,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,t,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&t.mapAsync(GPUMapMode.READ).then(()=>{var i;let e=new BigUint64Array(t.getMappedRange()),r=this.pendingQueries.get(t);for(let s=0;s<e.length/2;s++){let n=r[s],a=n.kernelId,o=this.kernels.get(a),l=o.kernelType,u=o.kernelName,d=n.programName,c=n.inputTensorViews,p=n.outputTensorViews,f=e[s*2],m=e[s*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=f);let y=Number(f-this.queryTimeBase),b=Number(m-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger(b))throw new RangeError("incorrect timestamp range");if((i=this.env.webgpu.profiling)!=null&&i.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:c.map(_=>({dims:_.dims,dataType:Yt(_.dataType)})),outputsMetadata:p.map(_=>({dims:_.dims,dataType:Yt(_.dataType)})),kernelId:a,kernelType:l,kernelName:u,programName:d,startTime:y,endTime:b});else{let _="";c.forEach(($,S)=>{_+=`input[${S}]: [${$.dims}] | ${Yt($.dataType)}, `});let x="";p.forEach(($,S)=>{x+=`output[${S}]: [${$.dims}] | ${Yt($.dataType)}, `}),console.log(`[profiling] kernel "${a}|${l}|${u}|${d}" ${_}${x}start time: ${y} ns, execution time: ${b-y} ns`)}Ks("GPU",`${d}::${f}::${m}`)}t.unmap(),this.pendingQueries.delete(t)}),It()}run(t,e,r,i,s,n){Ft(t.name);let a=[];for(let x=0;x<e.length;++x){let $=e[x].data;if($===0)continue;let S=this.gpuDataManager.get($);if(!S)throw new Error(`no GPU data for input: ${$}`);a.push(S)}let{outputs:o,dispatchGroup:l,programUniforms:u}=t.getRunData(e),d=r.length===0?o.map((x,$)=>$):r;if(d.length!==o.length)throw new Error(`Output size ${d.length} must be equal to ${o.length}.`);let c=[],p=[];for(let x=0;x<o.length;++x){if(!Number.isInteger(d[x])||d[x]<-3||d[x]>=n)throw new Error(`Invalid output index: ${d[x]}`);if(d[x]===-3)continue;let $=d[x]===-1,S=d[x]===-2,E=$||S?s(o[x].dataType,o[x].dims):i(d[x],o[x].dataType,o[x].dims);if(c.push(E),E.data===0)continue;let T=this.gpuDataManager.get(E.data);if(!T)throw new Error(`no GPU data for output: ${E.data}`);if($&&this.temporaryData.push(T),S){let A=this.kernelPersistentData.get(this.currentKernelId);A||(A=[],this.kernelPersistentData.set(this.currentKernelId,A)),A.push(T)}p.push(T)}if(a.length!==e.length||p.length!==c.length){if(p.length===0)return It(t.name),c;throw new Error(`Program ${t.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let f;if(u){let x=0,$=[];u.forEach(A=>{let k=typeof A.data=="number"?[A.data]:A.data;if(k.length===0)return;let P=A.type===10?2:4,M,N;A.type===10?(N=k.length>4?16:k.length>2?8:k.length*P,M=k.length>4?16:P*k.length):(N=k.length<=2?k.length*P:16,M=16),x=Math.ceil(x/N)*N,$.push(x);let W=A.type===10?8:4;x+=k.length>4?Math.ceil(k.length/W)*M:k.length*P});let S=16;x=Math.ceil(x/S)*S;let E=new ArrayBuffer(x);u.forEach((A,k)=>{let P=$[k],M=typeof A.data=="number"?[A.data]:A.data;if(A.type===6)new Int32Array(E,P,M.length).set(M);else if(A.type===12)new Uint32Array(E,P,M.length).set(M);else if(A.type===10)new Uint16Array(E,P,M.length).set(M);else if(A.type===1)new Float32Array(E,P,M.length).set(M);else throw new Error(`Unsupported uniform type: ${Yt(A.type)}`)});let T=this.gpuDataManager.create(x,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(T.buffer,0,E,0,x),this.gpuDataManager.release(T.id),f={offset:0,size:x,buffer:T.buffer}}let m=this.programManager.normalizeDispatchGroupSize(l),y=m[1]===1&&m[2]===1,b=Bm(t,e,y),_=this.programManager.getArtifact(b);if(_||(_=this.programManager.build(t,m),this.programManager.setArtifact(b,_),pe("info",()=>`[artifact] key: ${b}, programName: ${t.name}`)),u&&_.uniformVariablesInfo){if(u.length!==_.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${_.uniformVariablesInfo.length}, got ${u.length} in program "${_.programInfo.name}".`);for(let x=0;x<u.length;x++){let $=u[x],S=$.type,E=typeof $.data=="number"?1:$.data.length,[T,A]=_.uniformVariablesInfo[x];if(S!==T||E!==A)throw new Error(`Uniform variable ${x} mismatch: expect type ${T} with size ${A}, got type ${S} with size ${E} in program "${_.programInfo.name}".`)}}if(pe("info",()=>`[ProgramManager] run "${t.name}" (key=${b}) with ${m[0]}x${m[1]}x${m[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let x={kernelId:this.currentKernelId,programName:_.programInfo.name,inputTensorViews:e,outputTensorViews:c};this.pendingKernels.push(x),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(x)}return this.programManager.run(_,a,p,m,f),It(t.name),c}upload(t,e){this.gpuDataManager.upload(t,e)}memcpy(t,e){this.gpuDataManager.memcpy(t,e)}async download(t,e){await this.gpuDataManager.download(t,e)}alloc(t){return this.gpuDataManager.create(t).id}free(t){return this.gpuDataManager.release(t)}createKernel(t,e,r,i){let s=Ib.get(t);if(!s)throw new Error(`kernel not implemented: ${t}`);let n={kernelType:t,kernelName:i,kernelEntry:s[0],attributes:[s[1],r]};this.kernels.set(e,n)}releaseKernel(t){let e=this.kernelPersistentData.get(t);if(e){for(let r of e)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(t)}this.kernelCustomData.delete(t),this.kernels.delete(t)}computeKernel(t,e,r){let i=this.kernels.get(t);if(!i)throw new Error(`kernel not created: ${t}`);let s=i.kernelType,n=i.kernelName,a=i.kernelEntry,o=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${s}] ${n}" is not allowed to be called recursively`);this.currentKernelId=t,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),pe("info",()=>`[WebGPU] Start to run kernel "[${s}] ${n}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),a(e,o[1]),0}catch(u){return r.push(Promise.resolve(`[WebGPU] Kernel "[${s}] ${n}" failed. ${u}`)),1}finally{l&&r.push(this.device.popErrorScope().then(u=>u?`GPU validation error for kernel "[${s}] ${n}": ${u.message}`:null));for(let u of this.temporaryData)this.gpuDataManager.release(u.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(t,e,r,i){let s=this.sessionExternalDataMapping.get(t);s||(s=new Map,this.sessionExternalDataMapping.set(t,s));let n=s.get(e),a=this.gpuDataManager.registerExternalBuffer(r,i,n);return s.set(e,[a,r]),a}unregisterBuffers(t){let e=this.sessionExternalDataMapping.get(t);e&&(e.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(t))}getBuffer(t){let e=this.gpuDataManager.get(t);if(!e)throw new Error(`no GPU data for buffer: ${t}`);return e.buffer}createDownloader(t,e,r){return async()=>{let i=await Go(this,t,e);return Al(i.buffer,r)}}writeTimestamp(t){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,t)}setQueryType(){var t;this.queryType="none",(((t=this.env.webgpu.profiling)==null?void 0:t.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){pe("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){pe("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){pe("info","replay"),this.sessionStatus="replaying";let t=this.capturedCommandList.get(this.currentSessionId),e=this.capturedPendingKernels.get(this.currentSessionId),r=t.length;this.pendingKernels=[];for(let i=0;i<r;i++){let s=this.getComputePassEncoder(),n=t[i];this.writeTimestamp(this.pendingDispatchNumber*2),s.setPipeline(n.computePipeline),s.setBindGroup(0,n.bindGroup),s.dispatchWorkgroups(...n.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(e[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(t){this.unregisterBuffers(t),this.capturedCommandList.has(t)&&this.capturedCommandList.delete(t),this.capturedPendingKernels.has(t)&&this.capturedPendingKernels.delete(t),this.gpuDataManager.onReleaseSession(t)}onRunStart(t){this.currentSessionId=t,this.setQueryType()}}}),Rb={};ai(Rb,{init:()=>Bb});var Ns,Dm,Bb,FS=j(()=>{ie(),Jt(),ne(),Zk(),Ns=class Ob{constructor(e,r,i,s){this.module=e,this.dataType=r,this.data=i,this.dims=s}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let e=D.size(this.dims);return e===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,e)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let e=D.size(this.dims);return e===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,e)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let e=D.size(this.dims);return e===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,e)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let e=D.size(this.dims);return e===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,e)}reshape(e){if(D.size(e)!==D.size(this.dims))throw new Error("Invalid new shape");return new Ob(this.module,this.dataType,this.data,e)}},Dm=class{constructor(t,e,r){this.module=t,this.backend=e,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=e.adapterInfo;let i=t.PTR_SIZE,s=r/t.PTR_SIZE,n=i===4?"i32":"i64";this.opKernelContext=Number(t.getValue(i*s++,n));let a=Number(t.getValue(i*s++,n));this.outputCount=Number(t.getValue(i*s++,n)),this.customDataOffset=Number(t.getValue(i*s++,"*")),this.customDataSize=Number(t.getValue(i*s++,n));let o=[];for(let l=0;l<a;l++){let u=Number(t.getValue(i*s++,n)),d=Number(t.getValue(i*s++,"*")),c=Number(t.getValue(i*s++,n)),p=[];for(let f=0;f<c;f++)p.push(Number(t.getValue(i*s++,n)));o.push(new Ns(t,u,d,p))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(t,e){var a;let r=((a=e==null?void 0:e.inputs)==null?void 0:a.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,i=(e==null?void 0:e.outputs)??[],s=(o,l,u)=>new Ns(this.module,l,this.output(o,u),u),n=(o,l)=>{let u=Ir(o,l);if(!u)throw new Error(`Unsupported data type: ${o}`);let d=u>0?this.backend.gpuDataManager.create(u).id:0;return new Ns(this.module,o,d,l)};return this.backend.run(t,r,i,s,n,this.outputCount)}output(t,e){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,s=i===4?"i32":"i64",n=this.module.stackAlloc((1+e.length)*i);this.module.setValue(n,e.length,s);for(let a=0;a<e.length;a++)this.module.setValue(n+i*(a+1),e[a],s);return this.module._JsepOutput(this.opKernelContext,t,n)}catch(i){throw new Error(`Failed to generate kernel's output[${t}] with dims [${e}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},Bb=async(t,e,r,i)=>{let s=e.jsepInit;if(!s)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(t==="webgpu"){let n=(VS(),Zi(zb)).WebGpuBackend,a=new n;await a.initialize(r,i),s("webgpu",[a,o=>a.alloc(Number(o)),o=>a.free(o),(o,l,u,d=!1)=>{if(d)pe("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(l)}, size=${Number(u)}`),a.memcpy(Number(o),Number(l));else{pe("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(l)}, size=${Number(u)}`);let c=e.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(u));a.upload(Number(l),c)}},async(o,l,u)=>{pe("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${l}, size=${u}`),await a.download(Number(o),()=>e.HEAPU8.subarray(Number(l)>>>0,Number(l+u)>>>0))},(o,l,u)=>a.createKernel(o,Number(l),u,e.UTF8ToString(e._JsepGetNodeName(Number(l)))),o=>a.releaseKernel(o),(o,l,u,d)=>{pe("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${u}, kernel=${o}, contextDataOffset=${l}`);let c=new Dm(e,a,Number(l));return a.computeKernel(Number(o),c,d)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let n=new H0(r);s("webnn",[n,()=>n.reserveTensorId(),a=>n.releaseTensorId(a),async(a,o,l,u,d)=>n.ensureTensor(a,o,l,u,d),(a,o)=>{n.uploadTensor(a,o)},async(a,o)=>n.downloadTensor(a,o),(a,o)=>n.registerMLContext(a,o),!!r.trace])}}}),Nm,Gl,Ul,ar,Lm,po,sn,Vl,Fl,fo,Wl,ql,Hl,Db=j(()=>{wt(),Yk(),Xk(),ie(),Nr(),kl(),G0(),Nm=(t,e)=>{ve()._OrtInit(t,e)!==0&&we("Can't initialize onnxruntime.")},Gl=async t=>{Nm(t.wasm.numThreads,Qs(t.logLevel))},Ul=async(t,e)=>{var i,s;(s=(i=ve()).asyncInit)==null||s.call(i);let r=t.webgpu.adapter;if(e==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let n=t.webgpu.powerPreference;if(n!==void 0&&n!=="low-power"&&n!=="high-performance")throw new Error(`Invalid powerPreference setting: "${n}"`);let a=t.webgpu.forceFallbackAdapter;if(a!==void 0&&typeof a!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${a}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:n,forceFallbackAdapter:a}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(e==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let n=(FS(),Zi(Rb)).init;e==="webgpu"&&await n("webgpu",ve(),t,r),e==="webnn"&&await n("webnn",ve(),t)}},ar=new Map,Lm=t=>{let e=ve(),r=e.stackSave();try{let i=e.PTR_SIZE,s=e.stackAlloc(2*i);e._OrtGetInputOutputCount(t,s,s+i)!==0&&we("Can't get session input/output count.");let n=i===4?"i32":"i64";return[Number(e.getValue(s,n)),Number(e.getValue(s+i,n))]}finally{e.stackRestore(r)}},po=(t,e)=>{let r=ve(),i=r.stackSave(),s=0;try{let n=r.PTR_SIZE,a=r.stackAlloc(2*n);r._OrtGetInputOutputMetadata(t,e,a,a+n)!==0&&we("Can't get session input/output metadata.");let o=Number(r.getValue(a,"*"));s=Number(r.getValue(a+n,"*"));let l=r.HEAP32[s/4];if(l===0)return[o,0];let u=r.HEAPU32[s/4+1],d=[];for(let c=0;c<u;c++){let p=Number(r.getValue(s+8+c*n,"*"));d.push(p!==0?r.UTF8ToString(p):Number(r.getValue(s+8+(c+u)*n,"*")))}return[o,l,d]}finally{r.stackRestore(i),s!==0&&r._OrtFree(s)}},sn=t=>{let e=ve(),r=e._malloc(t.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${t.byteLength}.`);return e.HEAPU8.set(t,r),[r,t.byteLength]},Vl=async(t,e)=>{var c,p,f,m;let r,i,s=ve();Array.isArray(t)?[r,i]=t:t.buffer===s.HEAPU8.buffer?[r,i]=[t.byteOffset,t.byteLength]:[r,i]=sn(t);let n=0,a=0,o=0,l=[],u=[],d=[];try{if([a,l]=await L0(e),(e==null?void 0:e.externalData)&&s.mountExternalData){let k=[];for(let P of e.externalData){let M=typeof P=="string"?P:P.path;k.push(Tl(typeof P=="string"?P:P.data).then(N=>{s.mountExternalData(M,N)}))}await Promise.all(k)}for(let k of(e==null?void 0:e.executionProviders)??[])if((typeof k=="string"?k:k.name)==="webnn"){if(s.shouldTransferToMLTensor=!1,typeof k!="string"){let P=k,M=P==null?void 0:P.context,N=P==null?void 0:P.gpuDevice,W=P==null?void 0:P.deviceType,L=P==null?void 0:P.powerPreference;M?s.currentContext=M:N?s.currentContext=await s.webnnCreateMLContext(N):s.currentContext=await s.webnnCreateMLContext({deviceType:W,powerPreference:L})}else s.currentContext=await s.webnnCreateMLContext();break}n=await s._OrtCreateSession(r,i,a),(c=s.webgpuOnCreateSession)==null||c.call(s,n),n===0&&we("Can't create a session."),(p=s.jsepOnCreateSession)==null||p.call(s),s.currentContext&&(s.webnnRegisterMLContext(n,s.currentContext),s.currentContext=void 0,s.shouldTransferToMLTensor=!0);let[y,b]=Lm(n),_=!!(e!=null&&e.enableGraphCapture),x=[],$=[],S=[],E=[],T=[];for(let k=0;k<y;k++){let[P,M,N]=po(n,k);P===0&&we("Can't get an input name."),u.push(P);let W=s.UTF8ToString(P);x.push(W),S.push(M===0?{name:W,isTensor:!1}:{name:W,isTensor:!0,type:Yt(M),shape:N})}for(let k=0;k<b;k++){let[P,M,N]=po(n,k+y);P===0&&we("Can't get an output name."),d.push(P);let W=s.UTF8ToString(P);$.push(W),E.push(M===0?{name:W,isTensor:!1}:{name:W,isTensor:!0,type:Yt(M),shape:N});{if(_&&(e==null?void 0:e.preferredOutputLocation)===void 0){T.push("gpu-buffer");continue}let L=typeof(e==null?void 0:e.preferredOutputLocation)=="string"?e.preferredOutputLocation:((f=e==null?void 0:e.preferredOutputLocation)==null?void 0:f[W])??"cpu",R=s.webnnIsGraphOutput;if(L==="cpu"&&R&&R(n,W)){T.push("ml-tensor-cpu-output");continue}if(L!=="cpu"&&L!=="cpu-pinned"&&L!=="gpu-buffer"&&L!=="ml-tensor")throw new Error(`Not supported preferred output location: ${L}.`);if(_&&L!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${L}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);T.push(L)}}let A=null;return T.some(k=>k==="gpu-buffer"||k==="ml-tensor"||k==="ml-tensor-cpu-output")&&(o=s._OrtCreateBinding(n),o===0&&we("Can't create IO binding."),A={handle:o,outputPreferredLocations:T,outputPreferredLocationsEncoded:T.map(k=>k==="ml-tensor-cpu-output"?"ml-tensor":k).map(k=>No(k))}),ar.set(n,[n,u,d,A,_,!1]),[n,x,$,S,E]}catch(y){throw u.forEach(b=>s._OrtFree(b)),d.forEach(b=>s._OrtFree(b)),o!==0&&s._OrtReleaseBinding(o)!==0&&we("Can't release IO binding."),n!==0&&s._OrtReleaseSession(n)!==0&&we("Can't release session."),y}finally{s._free(r),a!==0&&s._OrtReleaseSessionOptions(a)!==0&&we("Can't release session options."),l.forEach(y=>s._free(y)),(m=s.unmountExternalData)==null||m.call(s)}},Fl=t=>{var l,u,d;let e=ve(),r=ar.get(t);if(!r)throw new Error(`cannot release session. invalid session id: ${t}`);let[i,s,n,a,o]=r;a&&(o&&e._OrtClearBoundOutputs(a.handle)!==0&&we("Can't clear bound outputs."),e._OrtReleaseBinding(a.handle)!==0&&we("Can't release IO binding.")),(l=e.jsepOnReleaseSession)==null||l.call(e,t),(u=e.webnnOnReleaseSession)==null||u.call(e,t),(d=e.webgpuOnReleaseSession)==null||d.call(e,t),s.forEach(c=>e._OrtFree(c)),n.forEach(c=>e._OrtFree(c)),e._OrtReleaseSession(i)!==0&&we("Can't release session."),ar.delete(t)},fo=async(t,e,r,i,s,n,a=!1)=>{if(!t){e.push(0);return}let o=ve(),l=o.PTR_SIZE,u=t[0],d=t[1],c=t[3],p=c,f,m;if(u==="string"&&(c==="gpu-buffer"||c==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(a&&c!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${n} when enableGraphCapture is true.`);if(c==="gpu-buffer"){let _=t[2].gpuBuffer;m=Ir(Ar(u),d);{let x=o.jsepRegisterBuffer;if(!x)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');f=x(i,n,_,m)}}else if(c==="ml-tensor"){let _=t[2].mlTensor;m=Ir(Ar(u),d);let x=o.webnnRegisterMLTensor;if(!x)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');f=x(i,_,Ar(u),d)}else{let _=t[2];if(Array.isArray(_)){m=l*_.length,f=o._malloc(m),r.push(f);for(let x=0;x<_.length;x++){if(typeof _[x]!="string")throw new TypeError(`tensor data at index ${x} is not a string`);o.setValue(f+x*l,Et(_[x],r),"*")}}else{let x=o.webnnIsGraphInput,$=o.webnnIsGraphOutput;if(u!=="string"&&x&&$){let S=o.UTF8ToString(s);if(x(i,S)||$(i,S)){let E=Ar(u);m=Ir(E,d),p="ml-tensor";let T=o.webnnCreateTemporaryTensor,A=o.webnnUploadTensor;if(!T||!A)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let k=await T(i,E,d);A(k,new Uint8Array(_.buffer,_.byteOffset,_.byteLength)),f=k}else m=_.byteLength,f=o._malloc(m),r.push(f),o.HEAPU8.set(new Uint8Array(_.buffer,_.byteOffset,m),f)}else m=_.byteLength,f=o._malloc(m),r.push(f),o.HEAPU8.set(new Uint8Array(_.buffer,_.byteOffset,m),f)}}let y=o.stackSave(),b=o.stackAlloc(4*d.length);try{d.forEach((x,$)=>o.setValue(b+$*l,x,l===4?"i32":"i64"));let _=o._OrtCreateTensor(Ar(u),f,m,b,d.length,No(p));_===0&&we(`Can't create tensor for input/output. session=${i}, index=${n}.`),e.push(_)}finally{o.stackRestore(y)}},Wl=async(t,e,r,i,s,n)=>{var W,L,R,q;let a=ve(),o=a.PTR_SIZE,l=ar.get(t);if(!l)throw new Error(`cannot run inference. invalid session id: ${t}`);let u=l[0],d=l[1],c=l[2],p=l[3],f=l[4],m=l[5],y=e.length,b=i.length,_=0,x=[],$=[],S=[],E=[],T=[],A=a.stackSave(),k=a.stackAlloc(y*o),P=a.stackAlloc(y*o),M=a.stackAlloc(b*o),N=a.stackAlloc(b*o);try{[_,x]=N0(n),Mr("wasm prepareInputOutputTensor");for(let F=0;F<y;F++)await fo(r[F],$,E,t,d[e[F]],e[F],f);for(let F=0;F<b;F++)await fo(s[F],S,E,t,c[i[F]],y+i[F],f);zr("wasm prepareInputOutputTensor");for(let F=0;F<y;F++)a.setValue(k+F*o,$[F],"*"),a.setValue(P+F*o,d[e[F]],"*");for(let F=0;F<b;F++)a.setValue(M+F*o,S[F],"*"),a.setValue(N+F*o,c[i[F]],"*");if(p&&!m){let{handle:F,outputPreferredLocations:se,outputPreferredLocationsEncoded:H}=p;if(d.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${d.length}).`);Mr("wasm bindInputsOutputs");for(let K=0;K<y;K++){let Z=e[K];await a._OrtBindInput(F,d[Z],$[K])!==0&&we(`Can't bind input[${K}] for session=${t}.`)}for(let K=0;K<b;K++){let Z=i[K];(W=s[K])!=null&&W[3]?(T.push(S[K]),a._OrtBindOutput(F,c[Z],S[K],0)!==0&&we(`Can't bind pre-allocated output[${K}] for session=${t}.`)):a._OrtBindOutput(F,c[Z],0,H[Z])!==0&&we(`Can't bind output[${K}] to ${se[K]} for session=${t}.`)}zr("wasm bindInputsOutputs"),ar.set(t,[u,d,c,p,f,!0])}(L=a.jsepOnRunStart)==null||L.call(a,u),(R=a.webnnOnRunStart)==null||R.call(a,u);let O;p?O=await a._OrtRunWithBinding(u,p.handle,b,M,_):O=await a._OrtRun(u,P,k,y,N,b,M,_),O!==0&&we("failed to call OrtRun().");let V=[],ae=[];Mr("wasm ProcessOutputTensor");for(let F=0;F<b;F++){let se=Number(a.getValue(M+F*o,"*"));if(se===S[F]||T.includes(S[F])){V.push(s[F]),se!==S[F]&&a._OrtReleaseTensor(se)!==0&&we("Can't release tensor.");continue}let H=a.stackSave(),K=a.stackAlloc(4*o),Z=!1,Y,he=0;try{a._OrtGetTensorData(se,K,K+o,K+2*o,K+3*o)!==0&&we(`Can't access output tensor data on index ${F}.`);let Fe=o===4?"i32":"i64",Ee=Number(a.getValue(K,Fe));he=a.getValue(K+o,"*");let Qe=a.getValue(K+o*2,"*"),Le=Number(a.getValue(K+o*3,Fe)),We=[];for(let fe=0;fe<Le;fe++)We.push(Number(a.getValue(Qe+fe*o,Fe)));a._OrtFree(Qe)!==0&&we("Can't free memory for tensor dims.");let qe=We.reduce((fe,re)=>fe*re,1);Y=Yt(Ee);let et=p==null?void 0:p.outputPreferredLocations[i[F]];if(Y==="string"){if(et==="gpu-buffer"||et==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let fe=[];for(let re=0;re<qe;re++){let Be=a.getValue(he+re*o,"*"),Gr=a.getValue(he+(re+1)*o,"*"),er=re===qe-1?void 0:Gr-Be;fe.push(a.UTF8ToString(Be,er))}V.push([Y,We,fe,"cpu"])}else if(et==="gpu-buffer"&&qe>0){let fe=a.jsepGetBuffer;if(!fe)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let re=fe(he),Be=Ir(Ee,qe);if(Be===void 0||!Sl(Y))throw new Error(`Unsupported data type: ${Y}`);Z=!0,V.push([Y,We,{gpuBuffer:re,download:a.jsepCreateDownloader(re,Be,Y),dispose:()=>{a._OrtReleaseTensor(se)!==0&&we("Can't release tensor.")}},"gpu-buffer"])}else if(et==="ml-tensor"&&qe>0){let fe=a.webnnEnsureTensor,re=a.webnnIsGraphInputOutputTypeSupported;if(!fe||!re)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Ir(Ee,qe)===void 0||!Cl(Y))throw new Error(`Unsupported data type: ${Y}`);if(!re(t,Y,!1))throw new Error(`preferredLocation "ml-tensor" for ${Y} output is not supported by current WebNN Context.`);let Be=await fe(t,he,Ee,We,!1);Z=!0,V.push([Y,We,{mlTensor:Be,download:a.webnnCreateMLTensorDownloader(he,Y),dispose:()=>{a.webnnReleaseTensorId(he),a._OrtReleaseTensor(se)}},"ml-tensor"])}else if(et==="ml-tensor-cpu-output"&&qe>0){let fe=a.webnnCreateMLTensorDownloader(he,Y)(),re=V.length;Z=!0,ae.push((async()=>{let Be=[re,await fe];return a.webnnReleaseTensorId(he),a._OrtReleaseTensor(se),Be})()),V.push([Y,We,[],"cpu"])}else{let fe=hn(Y),re=new fe(qe);new Uint8Array(re.buffer,re.byteOffset,re.byteLength).set(a.HEAPU8.subarray(he,he+re.byteLength)),V.push([Y,We,re,"cpu"])}}finally{a.stackRestore(H),Y==="string"&&he&&a._free(he),Z||a._OrtReleaseTensor(se)}}p&&!f&&(a._OrtClearBoundOutputs(p.handle)!==0&&we("Can't clear bound outputs."),ar.set(t,[u,d,c,p,f,!1]));for(let[F,se]of await Promise.all(ae))V[F][2]=se;return zr("wasm ProcessOutputTensor"),V}finally{(q=a.webnnOnRunEnd)==null||q.call(a,u),a.stackRestore(A),$.forEach(O=>a._OrtReleaseTensor(O)),S.forEach(O=>a._OrtReleaseTensor(O)),E.forEach(O=>a._free(O)),_!==0&&a._OrtReleaseRunOptions(_),x.forEach(O=>a._free(O))}},ql=t=>{let e=ve(),r=ar.get(t);if(!r)throw new Error("invalid session id");let i=r[0],s=e._OrtEndProfiling(i);s===0&&we("Can't get an profile file name."),e._OrtFree(s)},Hl=t=>{let e=[];for(let r of t){let i=r[2];!Array.isArray(i)&&"buffer"in i&&e.push(i.buffer)}return e}}),or,at,jr,Ci,Ti,Ls,mo,Gs,wr,xr,Gm,Nb,Lb,Gb,Ub,Vb,Fb,Wb,qb=j(()=>{wt(),Db(),Nr(),vl(),or=()=>!!Ce.wasm.proxy&&typeof document<"u",jr=!1,Ci=!1,Ti=!1,Gs=new Map,wr=(t,e)=>{let r=Gs.get(t);r?r.push(e):Gs.set(t,[e])},xr=()=>{if(jr||!Ci||Ti||!at)throw new Error("worker not ready")},Gm=t=>{switch(t.data.type){case"init-wasm":jr=!1,t.data.err?(Ti=!0,mo[1](t.data.err)):(Ci=!0,mo[0]()),Ls&&(URL.revokeObjectURL(Ls),Ls=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let e=Gs.get(t.data.type);t.data.err?e.shift()[1](t.data.err):e.shift()[0](t.data.out);break}}},Nb=async()=>{if(!Ci){if(jr)throw new Error("multiple calls to 'initWasm()' detected.");if(Ti)throw new Error("previous call to 'initWasm()' failed.");if(jr=!0,or())return new Promise((t,e)=>{at==null||at.terminate(),O0().then(([r,i])=>{try{at=i,at.onerror=n=>e(n),at.onmessage=Gm,mo=[t,e];let s={type:"init-wasm",in:Ce};!s.in.wasm.wasmPaths&&(r||Do)&&(s.in.wasm.wasmPaths={wasm:new URL("/abstractblade/assets/ort-wasm-simd-threaded.jsep-CyqnNavA.wasm",import.meta.url).href}),at.postMessage(s),Ls=r}catch(s){e(s)}},e)});try{await $l(Ce.wasm),await Gl(Ce),Ci=!0}catch(t){throw Ti=!0,t}finally{jr=!1}}},Lb=async t=>{if(or())return xr(),new Promise((e,r)=>{wr("init-ep",[e,r]);let i={type:"init-ep",in:{epName:t,env:Ce}};at.postMessage(i)});await Ul(Ce,t)},Gb=async t=>or()?(xr(),new Promise((e,r)=>{wr("copy-from",[e,r]);let i={type:"copy-from",in:{buffer:t}};at.postMessage(i,[t.buffer])})):sn(t),Ub=async(t,e)=>{if(or()){if(e!=null&&e.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return xr(),new Promise((r,i)=>{wr("create",[r,i]);let s={type:"create",in:{model:t,options:{...e}}},n=[];t instanceof Uint8Array&&n.push(t.buffer),at.postMessage(s,n)})}else return Vl(t,e)},Vb=async t=>{if(or())return xr(),new Promise((e,r)=>{wr("release",[e,r]);let i={type:"release",in:t};at.postMessage(i)});Fl(t)},Fb=async(t,e,r,i,s,n)=>{if(or()){if(r.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(s.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return xr(),new Promise((a,o)=>{wr("run",[a,o]);let l=r,u={type:"run",in:{sessionId:t,inputIndices:e,inputs:l,outputIndices:i,options:n}};at.postMessage(u,Hl(l))})}else return Wl(t,e,r,i,s,n)},Wb=async t=>{if(or())return xr(),new Promise((e,r)=>{wr("end-profiling",[e,r]);let i={type:"end-profiling",in:t};at.postMessage(i)});ql(t)}}),go,Um,Hb,WS=j(()=>{wt(),qb(),ie(),xl(),G0(),go=(t,e)=>{switch(t.location){case"cpu":return[t.type,t.dims,t.data,"cpu"];case"gpu-buffer":return[t.type,t.dims,{gpuBuffer:t.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[t.type,t.dims,{mlTensor:t.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${t.location} for ${e()}`)}},Um=t=>{switch(t[3]){case"cpu":return new yt(t[0],t[2],t[1]);case"gpu-buffer":{let e=t[0];if(!Sl(e))throw new Error(`not supported data type: ${e} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:s}=t[2];return yt.fromGpuBuffer(r,{dataType:e,dims:t[1],download:i,dispose:s})}case"ml-tensor":{let e=t[0];if(!Cl(e))throw new Error(`not supported data type: ${e} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:s}=t[2];return yt.fromMLTensor(r,{dataType:e,dims:t[1],download:i,dispose:s})}default:throw new Error(`invalid data location: ${t[3]}`)}},Hb=class{async fetchModelAndCopyToWasmMemory(t){return Gb(await Tl(t))}async loadModel(t,e){Ft();let r;typeof t=="string"?r=await this.fetchModelAndCopyToWasmMemory(t):r=t,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Ub(r,e),It()}async dispose(){return Vb(this.sessionId)}async run(t,e,r){Ft();let i=[],s=[];Object.entries(t).forEach(c=>{let p=c[0],f=c[1],m=this.inputNames.indexOf(p);if(m===-1)throw new Error(`invalid input '${p}'`);i.push(f),s.push(m)});let n=[],a=[];Object.entries(e).forEach(c=>{let p=c[0],f=c[1],m=this.outputNames.indexOf(p);if(m===-1)throw new Error(`invalid output '${p}'`);n.push(f),a.push(m)});let o=i.map((c,p)=>go(c,()=>`input "${this.inputNames[s[p]]}"`)),l=n.map((c,p)=>c?go(c,()=>`output "${this.outputNames[a[p]]}"`):null),u=await Fb(this.sessionId,s,o,a,l,r),d={};for(let c=0;c<u.length;c++)d[this.outputNames[a[c]]]=n[c]??Um(u[c]);return It(),d}startProfiling(){}endProfiling(){Wb(this.sessionId)}}}),jb={};ai(jb,{OnnxruntimeWebAssemblyBackend:()=>Qo,initializeFlags:()=>Zo,wasmBackend:()=>Yb});var Zo,Qo,Yb,qS=j(()=>{wt(),qb(),WS(),Zo=()=>{(typeof Ce.wasm.initTimeout!="number"||Ce.wasm.initTimeout<0)&&(Ce.wasm.initTimeout=0);let t=Ce.wasm.simd;if(typeof t!="boolean"&&t!==void 0&&t!=="fixed"&&t!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${t}". Reset it to \`false\` and ignore SIMD feature checking.`),Ce.wasm.simd=!1),typeof Ce.wasm.proxy!="boolean"&&(Ce.wasm.proxy=!1),typeof Ce.wasm.trace!="boolean"&&(Ce.wasm.trace=!1),typeof Ce.wasm.numThreads!="number"||!Number.isInteger(Ce.wasm.numThreads)||Ce.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Ce.wasm.numThreads=1;else{let e=typeof navigator>"u"?Ik("node:os").cpus().length:navigator.hardwareConcurrency;Ce.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},Qo=class{async init(t){Zo(),await Nb(),await Lb(t)}async createInferenceSessionHandler(t,e){let r=new Hb;return await r.loadModel(t,e),r}},Yb=new Qo});wt();wt();wt();var HS="1.26.0";{let t=(qS(),Zi(jb)).wasmBackend;Qr("webgpu",t,5),Qr("webnn",t,5),Qr("cpu",t,10),Qr("wasm",t,10)}Object.defineProperty(Ce.versions,"web",{value:HS,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class jS{constructor(){B(this,"session");B(this,"busy",!1);B(this,"visionReach",100);B(this,"visionDirs",[]);this.setup(),pt(8).forEach(e=>{const r=2*Math.PI*e/8,i=[Math.cos(r),Math.sin(r)];this.visionDirs.push(i)})}async setup(){Ce.wasm.wasmPaths="https://cdn.jsdelivr.net/npm/onnxruntime-web@latest/dist/";const e=await wl.create("onnx/evadeBlade.onnx");this.session=e;const r=new Float32Array(pt(26)),i=[1,26],n={state:new yt("float32",r,i)};this.session.run(n)}getVision(e){return this.visionDirs.map(i=>{const s=Ie(1,e.position,this.visionReach,i),n=[e.position,s],a=e.simulation.segmentCastPoint(n);return Ue(a,e.position)}).flat()}async act(e,r){if(this.session==null)return;if(this.busy){console.log("busy");return}this.busy=!0;const i=r.blade==null?r.position:r.blade.position,s=r.blade==null?r.velocity:r.blade.velocity,n=[];e.forEach(f=>{n.push(...Ue(r.position,f.position)),n.push(...r.velocity),n.push(...Ue(i,f.position)),n.push(...s),n.push(...f.velocity),n.push(...this.getVision(f))});const a=new Float32Array(n),o=[e.length,26],u={state:new yt("float32",a,o)},d=await this.session.run(u),c=Array.from(d.grad.data),p=o3(c,[e.length,2]);pt(e.length).forEach(f=>{e[f].action=cn(p[f])}),this.busy=!1}}class YS{constructor(e){B(this,"input",new vk);B(this,"evadeBladeBrain",new jS);B(this,"levels",[]);B(this,"game");B(this,"level");B(this,"levelView");this.game=e,this.buildLevels(),this.level=this.levels[0],this.levelView=new Kc(this),window.addEventListener("keydown",r=>{r.repeat||this.proceed()}),window.addEventListener("mousedown",()=>this.proceed())}update(e){this.level.leaving&&(this.level.leaving=!1,this.changeLevel(this.level.targetLevel,this.level.targetEntrance)),this.level.player.handleInput(this.input),this.level.update(e),this.levelView.update()}changeLevel(e,r){const i=this.level.player.blade;i!=null&&i.detach();const s=this.levelView;s.visible=!1,this.level=this.levels[e];const n=this.level.entrances[r];this.level.player.position=structuredClone(n.position),this.level.player.spawnPoint=structuredClone(n.position),this.level.player.trail=this.level.player.trail.map(a=>structuredClone(n.position)),this.level.player.history=this.level.player.history.map(a=>structuredClone(n.position)),this.level.saveBackup(),this.levelView=new Kc(this),s.destroy({children:!0,texture:!0,textureSource:!0})}buildLevels(){new xk(this),new kk(this),new Ck(this)}proceed(){this.level.player.destroyed&&this.level.loadBackup()}}class XS{constructor(){B(this,"playerColor",new De("hsl(220, 100%, 40%)"));B(this,"roverColor",new De("hsl(120, 100%, 30%)"));B(this,"monsterColor",new De("hsl(0, 100%, 30%)"));B(this,"rockColor",new De("hsl(120, 0%, 50%)"));B(this,"playerBladeColor",new De("hsl(190, 100%, 45%)"));B(this,"roverBladeColor",new De("hsl(160, 100%, 45%)"));B(this,"starColor",new De("hsl(60,100%,45%)"));B(this,"transporterColor",new De("hsl(120, 0%, 70%)"));B(this,"wallColor",new De("hsl(0, 0%, 15%)"))}}class KS{constructor(e){B(this,"app");B(this,"world");B(this,"colors",new XS);this.app=e,this.world=new YS(this),this.app.renderer.background.color=this.colors.wallColor,e.ticker.add(r=>{this.world.update(r)})}}const Tr=document.getElementById("app");async function ZS(){const t=new Wg;await t.init({resizeTo:window,antialias:!0}),Tr.appendChild(t.canvas),new KS(t)}console.log("start");navigator.maxTouchPoints>0&&(Tr.addEventListener("mousedown",()=>{Tr.requestFullscreen()}),Tr.addEventListener("touchstart",()=>{Tr.requestFullscreen()}),Tr.addEventListener("touchmove",()=>{Tr.requestFullscreen()}));ZS();export{Mt as $,Ng as A,ji as B,De as C,dr as D,Qt as E,Ji as F,on as G,bc as H,Vs as I,il as J,Bg as K,zt as L,ye as M,Eg as N,Uv as O,it as P,Fv as Q,ko as R,sl as S,Te as T,js as U,Kv as V,jv as W,bx as X,Jv as Y,lt as Z,Jm as _,Ig as a,ng as a0,rc as a1,Vi as a2,Zx as a3,sc as a4,Wn as a5,nc as a6,Jx as a7,jm as a8,Xe as a9,rg as aa,r3 as ab,Lg as ac,$e as ad,Ge as ae,rv as af,Z2 as ag,$v as ah,gv as ai,Vv as aj,Wv as ak,Zv as al,Xv as am,Qv as an,kg as b,pv as c,ot as d,Ne as e,Se as f,v2 as g,Us as h,_e as i,Je as j,m$ as k,a$ as l,tg as m,H$ as n,pg as o,Ze as p,Zr as q,Rx as r,un as s,Ke as t,P2 as u,Fd as v,ht as w,nn as x,dv as y,ln as z};
