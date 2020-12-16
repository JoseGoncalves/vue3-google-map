/*
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
'use strict';Object.defineProperty(exports,"__esModule",{value:!0});var vue=require("vue");function __rest(a,b){var f={},c;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&0>b.indexOf(c)&&(f[c]=a[c]);if(null!=a&&"function"===typeof Object.getOwnPropertySymbols){var d=0;for(c=Object.getOwnPropertySymbols(a);d<c.length;d++)0>b.indexOf(c[d])&&Object.prototype.propertyIsEnumerable.call(a,c[d])&&(f[c[d]]=a[c[d]])}return f}async function wait(a){return new Promise(b=>setTimeout(b,a))}var HttpStatusCodes;
(function(a){a[a.Continue=100]="Continue";a[a.Success=200]="Success";a[a.Created=201]="Created";a[a.Accepted=202]="Accepted";a[a.NoContent=204]="NoContent";a[a.MovedPermenantly=301]="MovedPermenantly";a[a.TemporaryRedirect=307]="TemporaryRedirect";a[a.NotModified=304]="NotModified";a[a.BadRequest=400]="BadRequest";a[a.Unauthorized=401]="Unauthorized";a[a.PaymentRequired=402]="PaymentRequired";a[a.Forbidden=403]="Forbidden";a[a.NotFound=404]="NotFound";a[a.MethodNotAllowed=405]="MethodNotAllowed";
a[a.RequestTimeout=408]="RequestTimeout";a[a.Conflict=409]="Conflict";a[a.Gone=410]="Gone";a[a.IAmATeapot=418]="IAmATeapot";a[a.UnprocessableEntity=422]="UnprocessableEntity";a[a.TooManyRequests=429]="TooManyRequests";a[a.InternalServerError=500]="InternalServerError";a[a.NotImplemented=501]="NotImplemented";a[a.BadGateway=502]="BadGateway";a[a.ServiceUnavailable=503]="ServiceUnavailable";a[a.GatewayTimeout=504]="GatewayTimeout";a[a.AuthenticationRequired=511]="AuthenticationRequired"})(HttpStatusCodes||
(HttpStatusCodes={}));Array.isArray||(Array.isArray=function(a){return"[object Array]"===Object.prototype.toString.call(a)});let BASE_URL="https://maps.googleapis.com/maps/api/js";async function loadNow(a,b,f,c){if(checkIfScriptTagExists(a))return window.google;await addScriptTagToBrowser(a,b,f,c);return window.google}function unload(a){a=document.getElementById(`#google-maps-${a}-js`);null!==a&&null!==a.parentNode&&(a.parentNode.removeChild(a),delete window.google.maps)}
async function addScriptTagToBrowser(a,b,f,c,d={}){if(checkIfScriptTagExists(a))console.info(`Attempt to add script tag for the "${a}" library in Google Maps ignored as this tag already exists in the DOM${b?" [ "+b+"]":""}`);else{var e=async(b=2E3)=>{await wait(b);throw Error(`Timed out waiting for Google API to load [ ${a} / ${b} ]`);},g=()=>{var d=document.createElement("script");d.id=`google-maps-${a}-js`;d.src=getUrl(a,b,!0,f,c);document.querySelector("head").appendChild(d);return new Promise(b=>
{window[`${a}LoaderCallback`]=()=>{b()}})};return Promise.race(d.timeout?[e(d.timeout),g()]:[g()])}}function getUrl(a,b,f=!0,c,d){let e=`${BASE_URL}?libraries=${a}&sensors=false`;b&&(e=`${e}&key=${b}`);c&&(e=`${e}&region=${c}`);d&&(e=`${e}&language=${d}`);f&&(e=`${e}&callback=${a}LoaderCallback`);return e}function checkIfScriptTagExists(a,b){return!!document.querySelector(`#google-maps-${a}-js`)}
let map=vue.ref(null),api=vue.ref(null),useMap=()=>({map,api}),useSetupMapComponent=(a,b,f,c)=>{let d=null;const e=vue.ref(null),{map:g,api:h}=useMap();vue.watch([g,f],(p,q,n)=>{g.value&&h.value&&(e.value=d=new h.value[a](Object.assign(Object.assign({},f.value),{map:g.value})),b.forEach(a=>{null===d||void 0===d?void 0:d.addListener(a,b=>c(a,b))}));n(()=>{var a;d&&(null===(a=h.value)||void 0===a?void 0:a.event.clearInstanceListeners(d),d.setMap(null))})});return{component:e}},mapEvents="bounds_changed center_changed click dblclick drag dragend dragstart heading_changed idle maptypeid_changed mousemove mouseout mouseover projection_changed resize rightclick tilesloaded tilt_changed zoom_changed".split(" "),
markerEvents="animation_changed click dblclick rightclick dragstart dragend drag mouseover mousedown mouseup draggable_changed clickable_changed cursor_changed flat_changed rightclick zindex_changed icon_changed position_changed shape_changed title_changed visible_changed".split(" "),polylineEvents="click dblclick drag dragend dragstart mousedown mousemove mouseout mouseover mouseup rightclick".split(" "),polygonEvents=polylineEvents,rectangleEvents=polylineEvents.concat(["bounds_changed"]),circleEvents=
polylineEvents.concat(["center_changed","radius_changed"]);
var script=vue.defineComponent({props:{apiKey:String,region:String,language:String,backgroundColor:String,center:Object,clickableIcons:{type:Boolean,default:void 0},controlSize:Number,disableDefaultUi:{type:Boolean,default:void 0},disableDoubleClickZoom:{type:Boolean,default:void 0},draggable:{type:Boolean,default:void 0},draggableCursor:String,draggingCursor:String,fullscreenControl:{type:Boolean,default:void 0},fullscreenControlPosition:String,gestureHandling:String,heading:Number,keyboardShortcuts:{type:Boolean,
default:void 0},mapTypeControl:{type:Boolean,default:void 0},mapTypeControlOptions:Object,mapTypeId:{type:[Number,String]},maxZoom:Number,minZoom:Number,noClear:{type:Boolean,default:void 0},panControl:{type:Boolean,default:void 0},panControlPosition:String,restriction:Object,rotateControl:{type:Boolean,default:void 0},rotateControlPosition:String,scaleControl:{type:Boolean,default:void 0},scaleControlStyle:Number,scrollwheel:{type:Boolean,default:void 0},streetView:Object,streetViewControl:{type:Boolean,
default:void 0},streetViewControlPosition:String,styles:Array,tilt:Number,zoom:Number,zoomControl:{type:Boolean,default:void 0},zoomControlPosition:String},emits:mapEvents,setup(a,{emit:b}){let f=vue.ref(null),c=vue.ref(!1),{map:d,api:e}=useMap(),g=()=>{var b,d,c,f,g;const k={backgroundColor:a.backgroundColor,center:a.center,clickableIcons:a.clickableIcons,controlSize:a.controlSize,disableDefaultUI:a.disableDefaultUi,disableDoubleClickZoom:a.disableDoubleClickZoom,draggable:a.draggable,draggableCursor:a.draggableCursor,
draggingCursor:a.draggingCursor,fullscreenControl:a.fullscreenControl,fullscreenControlOptions:a.fullscreenControlPosition?{position:null===(b=e.value)||void 0===b?void 0:b.ControlPosition[a.fullscreenControlPosition]}:{},gestureHandling:a.gestureHandling,heading:a.heading,keyboardShortcuts:a.keyboardShortcuts,mapTypeControl:a.mapTypeControl,mapTypeControlOptions:a.mapTypeControlOptions,mapTypeId:a.mapTypeId,maxZoom:a.maxZoom,minZoom:a.minZoom,noClear:a.noClear,panControl:a.panControl,panControlOptions:a.panControlPosition?
{position:null===(d=e.value)||void 0===d?void 0:d.ControlPosition[a.panControlPosition]}:{},restriction:a.restriction,rotateControl:a.rotateControl,rotateControlOptions:a.rotateControlPosition?{position:null===(c=e.value)||void 0===c?void 0:c.ControlPosition[a.rotateControlPosition]}:{},scaleControl:a.scaleControl,scaleControlOptions:a.scaleControlStyle?{style:a.scaleControlStyle}:{},scrollwheel:a.scrollwheel,streetView:a.streetView,streetViewControl:a.streetViewControl,streetViewControlOptions:a.streetViewControlPosition?
{position:null===(f=e.value)||void 0===f?void 0:f.ControlPosition[a.streetViewControlPosition]}:{},styles:a.styles,tilt:a.tilt,zoom:a.zoom,zoomControl:a.zoomControl,zoomControlOptions:a.zoomControlPosition?{position:null===(g=e.value)||void 0===g?void 0:g.ControlPosition[a.zoomControlPosition]}:{}};Object.keys(k).forEach(a=>void 0===k[a]&&delete k[a]);return k};vue.onBeforeUnmount(()=>{var a;d.value&&(null===(a=e.value)||void 0===a?void 0:a.event.clearInstanceListeners(d.value),unload("places"))});
"undefined"!==typeof window&&loadNow("places",a.apiKey,a.region,a.language).then(({maps:h})=>{({Map:h}=e.value=h);d.value=new h(f.value,g());mapEvents.forEach(a=>{var c;null===(c=d.value)||void 0===c?void 0:c.addListener(a,d=>b(a,d))});c.value=!0;h=Object.keys(a).filter(a=>!["center","zoom"].includes(a)).map(b=>vue.toRef(a,b));vue.watch([()=>a.center,()=>a.zoom,...h],([a,b],[c,f])=>{var e,h,l,m=g();m=__rest(m,["center","zoom"]);null===(e=d.value)||void 0===e?void 0:e.setOptions(m);void 0!==b&&b!==
f&&(null===(h=d.value)||void 0===h?void 0:h.setZoom(b));!a||c&&a.lng===c.lng&&a.lat===c.lat||(null===(l=d.value)||void 0===l?void 0:l.panTo(a))})});return{mapRef:f,ready:c,map:d,api:e}}});let _hoisted_1={ref:"mapRef"};function render(a,b,f,c,d,e){return vue.openBlock(),vue.createBlock("div",_hoisted_1,[vue.renderSlot(a.$slots,"default")],512)}script.render=render;script.__file="src/components/GoogleMap.vue";
var Marker=vue.defineComponent({props:{options:{type:Object,required:!0}},emits:markerEvents,setup(a,{emit:b}){a=vue.toRef(a,"options");return{marker:useSetupMapComponent("Marker",markerEvents,a,b)}},render:()=>null}),Polyline=vue.defineComponent({props:{options:{type:Object,required:!0}},emits:polylineEvents,setup(a,{emit:b}){a=vue.toRef(a,"options");return{polyline:useSetupMapComponent("Polyline",polylineEvents,a,b)}},render:()=>null}),Polygon=vue.defineComponent({props:{options:{type:Object,required:!0}},
emits:polygonEvents,setup(a,{emit:b}){a=vue.toRef(a,"options");return{polygon:useSetupMapComponent("Polygon",polygonEvents,a,b)}},render:()=>null}),Rectangle=vue.defineComponent({props:{options:{type:Object,required:!0}},emits:rectangleEvents,setup(a,{emit:b}){a=vue.toRef(a,"options");return{rectangle:useSetupMapComponent("Rectangle",rectangleEvents,a,b)}},render:()=>null}),Circle=vue.defineComponent({props:{options:{type:Object,required:!0}},emits:circleEvents,setup(a,{emit:b}){a=vue.toRef(a,"options");
return{circle:useSetupMapComponent("Circle",circleEvents,a,b)}},render:()=>null}),script$1=vue.defineComponent({props:{position:{type:String,required:!0},index:Number},setup(a){let b=vue.ref(null),{map:f,api:c}=useMap();vue.watch([f,()=>a.position,()=>a.index],(d,e,g)=>{f.value&&c.value&&(a.index&&(b.value.index=a.index),b.value&&f.value.controls[c.value.ControlPosition[a.position]].push(b.value));g(()=>{if(f.value&&c.value&&b.value){let a=void 0;f.value.controls[c.value.ControlPosition[e[1]]].forEach((c,
d)=>{c===b.value&&(a=d)});a&&f.value.controls[c.value.ControlPosition[e[1]]].removeAt(a)}})});return{controlRef:b}}});let _hoisted_1$1={ref:"controlRef"};function render$1(a,b,f,c,d,e){return vue.openBlock(),vue.createBlock("div",_hoisted_1$1,[vue.renderSlot(a.$slots,"default")],512)}script$1.render=render$1;script$1.__file="src/components/CustomControl.vue";exports.Circle=Circle;exports.CustomControl=script$1;exports.GoogleMap=script;exports.Marker=Marker;exports.Polygon=Polygon;
exports.Polyline=Polyline;exports.Rectangle=Rectangle
