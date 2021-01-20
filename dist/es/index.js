import{defineComponent,ref,provide,onBeforeUnmount,toRef,watch,openBlock,createBlock,createVNode,mergeProps,renderSlot,inject}from'vue';/*
 *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
*****************************************************************************/
var q=function n(a,b){if(a===b)return!0;if(a&&b&&"object"==typeof a&&"object"==typeof b){if(a.constructor!==b.constructor)return!1;var d;if(Array.isArray(a)){var c=a.length;if(c!=b.length)return!1;for(d=c;0!==d--;)if(!n(a[d],b[d]))return!1;return!0}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===b.toString();var f=Object.keys(a);
c=f.length;if(c!==Object.keys(b).length)return!1;for(d=c;0!==d--;)if(!Object.prototype.hasOwnProperty.call(b,f[d]))return!1;for(d=c;0!==d--;)if(c=f[d],!n(a[c],b[c]))return!1;return!0}return a!==a&&b!==b};
class u{constructor({apiKey:a,channel:b,client:e,id:d="__googleMapsScriptId",libraries:c=[],language:f,region:g,version:h,mapIds:t,nonce:p,retries:v=3,url:l="https://maps.googleapis.com/maps/api/js"}){this.CALLBACK="__googleMapsCallback";this.callbacks=[];this.loading=this.done=!1;this.errors=[];this.version=h;this.apiKey=a;this.channel=b;this.client=e;this.id=d||"__googleMapsScriptId";this.libraries=c;this.language=f;this.region=g;this.mapIds=t;this.nonce=p;this.retries=v;this.url=l;if(u.instance){if(!q(this.options,
u.instance.options))throw Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(u.instance.options)}`);return u.instance}u.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url}}createUrl(){let a=this.url;a+=`?callback=${this.CALLBACK}`;this.apiKey&&(a+=
`&key=${this.apiKey}`);this.channel&&(a+=`&channel=${this.channel}`);this.client&&(a+=`&client=${this.client}`);0<this.libraries.length&&(a+=`&libraries=${this.libraries.join(",")}`);this.language&&(a+=`&language=${this.language}`);this.region&&(a+=`&region=${this.region}`);this.version&&(a+=`&v=${this.version}`);this.mapIds&&(a+=`&map_ids=${this.mapIds.join(",")}`);return a}load(){return this.loadPromise()}loadPromise(){return new Promise((a,b)=>{this.loadCallback(e=>{e?b(e):a()})})}loadCallback(a){this.callbacks.push(a);
this.execute()}setScript(){if(document.getElementById(this.id))this.callback();else{var a=this.createUrl(),b=document.createElement("script");b.id=this.id;b.type="text/javascript";b.src=a;b.onerror=this.loadErrorCallback.bind(this);b.defer=!0;b.async=!0;this.nonce&&(b.nonce=this.nonce);document.head.appendChild(b)}}deleteScript(){let a=document.getElementById(this.id);a&&a.remove()}resetIfRetryingFailed(){let a=this.retries+1;this.done&&!this.loading&&this.errors.length>=a&&(this.deleteScript(),this.loading=
this.done=!1,this.errors=[])}loadErrorCallback(a){this.errors.push(a);this.errors.length<=this.retries?(a=this.errors.length*Math.pow(2,this.errors.length),console.log(`Failed to load Google Maps script, retrying in ${a} ms.`),setTimeout(()=>{this.deleteScript();this.setScript()},a)):(this.onerrorEvent=a,this.callback())}setCallback(){window.__googleMapsCallback=this.callback.bind(this)}callback(){this.done=!0;this.loading=!1;this.callbacks.forEach(a=>{a(this.onerrorEvent)});this.callbacks=[]}execute(){window.google&&
window.google.maps&&window.google.maps.version&&(console.warn("Aborted attempt to load Google Maps JS with @googlemaps/js-api-loader.This may result in undesirable behavior as script parameters may not match."),this.callback());this.resetIfRetryingFailed();this.done?this.callback():this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}
let w=Symbol("api"),x=Symbol("map"),y="bounds_changed center_changed click dblclick drag dragend dragstart heading_changed idle maptypeid_changed mousemove mouseout mouseover projection_changed resize rightclick tilesloaded tilt_changed zoom_changed".split(" "),z="animation_changed click contextmenu dblclick rightclick dragstart dragend drag mousedown mouseout mouseover mouseup draggable_changed clickable_changed cursor_changed flat_changed zindex_changed icon_changed position_changed shape_changed title_changed visible_changed".split(" "),
A="click dblclick drag dragend dragstart mousedown mousemove mouseout mouseover mouseup rightclick".split(" "),B=A.concat(["bounds_changed"]),C=A.concat(["center_changed","radius_changed"]);
var D=defineComponent({props:{apiKey:{type:String,default:""},region:String,language:String,backgroundColor:String,center:Object,clickableIcons:{type:Boolean,default:void 0},controlSize:Number,disableDefaultUi:{type:Boolean,default:void 0},disableDoubleClickZoom:{type:Boolean,default:void 0},draggable:{type:Boolean,default:void 0},draggableCursor:String,draggingCursor:String,fullscreenControl:{type:Boolean,default:void 0},fullscreenControlPosition:String,gestureHandling:String,heading:Number,keyboardShortcuts:{type:Boolean,
default:void 0},mapTypeControl:{type:Boolean,default:void 0},mapTypeControlOptions:Object,mapTypeId:{type:[Number,String]},maxZoom:Number,minZoom:Number,noClear:{type:Boolean,default:void 0},panControl:{type:Boolean,default:void 0},panControlPosition:String,restriction:Object,rotateControl:{type:Boolean,default:void 0},rotateControlPosition:String,scaleControl:{type:Boolean,default:void 0},scaleControlStyle:Number,scrollwheel:{type:Boolean,default:void 0},streetView:Object,streetViewControl:{type:Boolean,
default:void 0},streetViewControlPosition:String,styles:Array,tilt:Number,zoom:Number,zoomControl:{type:Boolean,default:void 0},zoomControlPosition:String},emits:y,setup(a,{emit:b}){let e=ref(null),d=ref(!1),c=ref(null),f=ref(null);provide(x,c);provide(w,f);let g=()=>{var b,c,d,e,l;const g={backgroundColor:a.backgroundColor,center:a.center,clickableIcons:a.clickableIcons,controlSize:a.controlSize,disableDefaultUI:a.disableDefaultUi,disableDoubleClickZoom:a.disableDoubleClickZoom,draggable:a.draggable,
draggableCursor:a.draggableCursor,draggingCursor:a.draggingCursor,fullscreenControl:a.fullscreenControl,fullscreenControlOptions:a.fullscreenControlPosition?{position:null===(b=f.value)||void 0===b?void 0:b.ControlPosition[a.fullscreenControlPosition]}:{},gestureHandling:a.gestureHandling,heading:a.heading,keyboardShortcuts:a.keyboardShortcuts,mapTypeControl:a.mapTypeControl,mapTypeControlOptions:a.mapTypeControlOptions,mapTypeId:a.mapTypeId,maxZoom:a.maxZoom,minZoom:a.minZoom,noClear:a.noClear,panControl:a.panControl,
panControlOptions:a.panControlPosition?{position:null===(c=f.value)||void 0===c?void 0:c.ControlPosition[a.panControlPosition]}:{},restriction:a.restriction,rotateControl:a.rotateControl,rotateControlOptions:a.rotateControlPosition?{position:null===(d=f.value)||void 0===d?void 0:d.ControlPosition[a.rotateControlPosition]}:{},scaleControl:a.scaleControl,scaleControlOptions:a.scaleControlStyle?{style:a.scaleControlStyle}:{},scrollwheel:a.scrollwheel,streetView:a.streetView,streetViewControl:a.streetViewControl,
streetViewControlOptions:a.streetViewControlPosition?{position:null===(e=f.value)||void 0===e?void 0:e.ControlPosition[a.streetViewControlPosition]}:{},styles:a.styles,tilt:a.tilt,zoom:a.zoom,zoomControl:a.zoomControl,zoomControlOptions:a.zoomControlPosition?{position:null===(l=f.value)||void 0===l?void 0:l.ControlPosition[a.zoomControlPosition]}:{}};Object.keys(g).forEach(a=>void 0===g[a]&&delete g[a]);return g};onBeforeUnmount(()=>{var a;c.value&&(null===(a=f.value)||void 0===a?void 0:a.event.clearInstanceListeners(c.value))});
"undefined"!==typeof window&&(new u({apiKey:a.apiKey,version:"weekly",libraries:["places"],language:a.language,region:a.region})).load().then(()=>{var {Map:h}=f.value=google.maps;c.value=new h(e.value,g());y.forEach(a=>{var d;null===(d=c.value)||void 0===d?void 0:d.addListener(a,c=>b(a,c))});d.value=!0;h=Object.keys(a).filter(a=>!["center","zoom"].includes(a)).map(b=>toRef(a,b));watch([()=>a.center,()=>a.zoom,...h],([a,b],[d,f])=>{var e,h,l,m=g(),t=["center","zoom"],p={},k;for(k in m)Object.prototype.hasOwnProperty.call(m,
k)&&0>t.indexOf(k)&&(p[k]=m[k]);if(null!=m&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(k=Object.getOwnPropertySymbols(m);r<k.length;r++)0>t.indexOf(k[r])&&Object.prototype.propertyIsEnumerable.call(m,k[r])&&(p[k[r]]=m[k[r]])}null===(e=c.value)||void 0===e?void 0:e.setOptions(p);void 0!==b&&b!==f&&(null===(h=c.value)||void 0===h?void 0:h.setZoom(b));!a||d&&a.lng===d.lng&&a.lat===d.lat||(null===(l=c.value)||void 0===l?void 0:l.panTo(a))})});return{mapRef:e,ready:d,map:c,api:f}}});
D.render=function(a){return openBlock(),createBlock("div",null,[createVNode("div",mergeProps(a.$attrs,{ref:"mapRef"}),null,16),renderSlot(a.$slots,"default")])};D.__file="src/components/GoogleMap.vue";
let E=(a,b,e,d)=>{let c=null;const f=ref(null),g=inject(x,ref(null)),h=inject(w,ref(null));watch([g,e],(t,p,v)=>{g.value&&h.value&&(f.value=c=new h.value[a](Object.assign(Object.assign({},e.value),{map:g.value})),b.forEach(a=>{null===c||void 0===c?void 0:c.addListener(a,b=>d(a,b))}));v(()=>{var a;c&&(null===(a=h.value)||void 0===a?void 0:a.event.clearInstanceListeners(c),c.setMap(null))})},{immediate:!0});return{component:f}};
var F=defineComponent({props:{options:{type:Object,required:!0}},emits:z,setup(a,{emit:b}){a=toRef(a,"options");return{marker:E("Marker",z,a,b)}},render:()=>null}),G=defineComponent({props:{options:{type:Object,required:!0}},emits:A,setup(a,{emit:b}){a=toRef(a,"options");return{polyline:E("Polyline",A,a,b)}},render:()=>null}),H=defineComponent({props:{options:{type:Object,required:!0}},emits:A,setup(a,{emit:b}){a=toRef(a,"options");return{polygon:E("Polygon",A,a,b)}},render:()=>null}),I=defineComponent({props:{options:{type:Object,
required:!0}},emits:B,setup(a,{emit:b}){a=toRef(a,"options");return{rectangle:E("Rectangle",B,a,b)}},render:()=>null}),J=defineComponent({props:{options:{type:Object,required:!0}},emits:C,setup(a,{emit:b}){a=toRef(a,"options");return{circle:E("Circle",C,a,b)}},render:()=>null}),K=defineComponent({props:{position:{type:String,required:!0},index:Number},setup(a){let b=ref(null),e=inject(x,ref(null)),d=inject(w,ref(null));watch([e,()=>a.position,()=>a.index],(c,[,f],g)=>{e.value&&d.value&&(a.index&&
(b.value.index=a.index),b.value&&e.value.controls[d.value.ControlPosition[a.position]].push(b.value));g(()=>{if(e.value&&d.value&&f){let a=void 0;e.value.controls[d.value.ControlPosition[f]].forEach((c,d)=>{c===b.value&&(a=d)});a&&e.value.controls[d.value.ControlPosition[f]].removeAt(a)}})},{immediate:!0});return{controlRef:b}}});let L={ref:"controlRef"};K.render=function(a){return openBlock(),createBlock("div",L,[renderSlot(a.$slots,"default")],512)};K.__file="src/components/CustomControl.vue";
export{J as Circle,K as CustomControl,D as GoogleMap,F as Marker,H as Polygon,G as Polyline,I as Rectangle}
