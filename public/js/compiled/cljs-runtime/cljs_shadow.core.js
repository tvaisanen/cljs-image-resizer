goog.provide('cljs_shadow.core');
if((typeof cljs_shadow !== 'undefined') && (typeof cljs_shadow.core !== 'undefined') && (typeof cljs_shadow.core.app_state !== 'undefined')){
} else {
cljs_shadow.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
cljs_shadow.core.img_size = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((600));
if((typeof cljs_shadow !== 'undefined') && (typeof cljs_shadow.core !== 'undefined') && (typeof cljs_shadow.core.img !== 'undefined')){
} else {
cljs_shadow.core.img = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((new Image()));
}
cljs_shadow.core.imgurl = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs_shadow.core.img_to_octet = (function cljs_shadow$core$img_to_octet(img_data_url){
return clojure.string.replace(img_data_url,"data:image/png","data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png");
});
cljs_shadow.core.on_download = (function cljs_shadow$core$on_download(p__31754){
var map__31755 = p__31754;
var map__31755__$1 = cljs.core.__destructure_map(map__31755);
var props = map__31755__$1;
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31755__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
var I = (new Image());
var d = document.querySelector("#download");
var p = document.querySelector("#preview");
var data_url = c.toDataURL();
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([d], 0));

(p.src = data_url);

return (d.href = cljs_shadow.core.img_to_octet(data_url));
});
/**
 * 
 *   Resize image file.
 * 
 *   :img     (js/File)
 *   :width   image size
 *   
 */
cljs_shadow.core.img_file_to_resized = (function cljs_shadow$core$img_file_to_resized(args){
var map__31756 = args;
var map__31756__$1 = cljs.core.__destructure_map(map__31756);
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31756__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31756__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var I = (new Image());
return (new Promise((function (resolve){
return (I.onload = (function (){
var c = document.createElement("canvas");
var ctx = c.getContext("2d");
var factor = (width / I.width);
(c.width = Math.floor((factor * I.width)));

(c.height = Math.floor((factor * I.height)));

ctx.drawImage(I,(0),(0),c.width,c.height);

var G__31757 = c.toDataURL();
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__31757) : resolve.call(null,G__31757));
}));
}),(I.src = URL.createObjectURL(img))));
});
cljs_shadow.core.handler = (function cljs_shadow$core$handler(e){
var fs = e.target.files;
var f = cljs.core.first(fs);
var p = document.querySelector("#preview");
var d = document.querySelector("#download");
return cljs_shadow.core.img_file_to_resized(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"img","img",1442687358),f,new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.deref(cljs_shadow.core.img_size)], null)).then((function (data_url){
(p.src = data_url);

return (d.href = cljs_shadow.core.img_to_octet(data_url));
})).finally((function (){
return console.log("not fucking?");
}));
});
cljs_shadow.core.on_resize = (function cljs_shadow$core$on_resize(e){
var I = cljs.core.deref(cljs_shadow.core.img);
var v = e.target.value;
var c = document.querySelector("#canvas");
var ctx = c.getContext("2d");
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([I], 0));

ctx.clearRect((0),(0),(2000),(2000));

ctx.drawImage(I,(0),(0));

return cljs_shadow.core.on_download(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"c","c",-1763192079),c], null));
});
cljs_shadow.core.clear_img = (function cljs_shadow$core$clear_img(){
var c = document.querySelector("#canvas");
var ctx = c.getContext("2d");
return ctx.clearRect((0),(0),(100),(100));
});
cljs_shadow.core.upload_image_w_size = (function cljs_shadow$core$upload_image_w_size(props){
return null;
});
cljs_shadow.core.app = (function cljs_shadow$core$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.level.level-items","div.level.level-items",-1329395076),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.level-item.level-middle","div.level-item.level-middle",-1474476257),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input","input.input",-850828147),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"step","step",1288888124),(100),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(cljs_shadow.core.img_size),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31758_SHARP_){
return cljs.core.reset_BANG_(cljs_shadow.core.img_size,p1__31758_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.level-item.level-right","div.level-item.level-right",276703917),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#download","a#download",-998823724),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"download","download",-300081668),"resized.jpg",new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Download"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(4),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure.is-4by3","figure.is-4by3",-1094420656),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img#preview","img#preview",625824647),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://bulma.io/images/placeholders/640x480.png"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.is-overlay","div.is-overlay",-1509338785),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.file.is-centered.is-boxed.is-success.is-light","div.file.is-centered.is-boxed.is-success.is-light",-2066234020),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"painted"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.file-label","label.file-label",-520604852),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.file-input","input.file-input",-263595274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs_shadow.core.handler,new cljs.core.Keyword(null,"type","type",1174270348),"file"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file-cta","span.file-cta",1078791818),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file-label","span.file-label",1374272136),"Select Image"], null)], null)], null)], null)], null)], null)], null);
});
cljs_shadow.core.start = (function cljs_shadow$core$start(){
var G__31759 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_shadow.core.app], null);
var G__31760 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__31759,G__31760) : reagent.core.render_component.call(null,G__31759,G__31760));
});
cljs_shadow.core.init = (function cljs_shadow$core$init(){
return cljs_shadow.core.start();
});
goog.exportSymbol('cljs_shadow.core.init', cljs_shadow.core.init);
cljs_shadow.core.stop = (function cljs_shadow$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=cljs_shadow.core.js.map
