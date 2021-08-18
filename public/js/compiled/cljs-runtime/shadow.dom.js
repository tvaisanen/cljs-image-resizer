goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_32728 = (function (this$){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4464__auto__.call(null,this$));
} else {
var m__4461__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4461__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_32728(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_32729 = (function (this$){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4464__auto__.call(null,this$));
} else {
var m__4461__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4461__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_32729(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32159 = coll;
var G__32160 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32159,G__32160) : shadow.dom.lazy_native_coll_seq.call(null,G__32159,G__32160));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4160__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32175 = arguments.length;
switch (G__32175) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32177 = arguments.length;
switch (G__32177) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32180 = arguments.length;
switch (G__32180) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32182 = arguments.length;
switch (G__32182) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32187 = arguments.length;
switch (G__32187) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32193 = arguments.length;
switch (G__32193) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4160__auto__ = (!((typeof document !== 'undefined')));
if(or__4160__auto__){
return or__4160__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32200){if((e32200 instanceof Object)){
var e = e32200;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32200;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4160__auto__ = (!((typeof document !== 'undefined')));
if(or__4160__auto__){
return or__4160__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32205 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32206 = null;
var count__32207 = (0);
var i__32208 = (0);
while(true){
if((i__32208 < count__32207)){
var el = chunk__32206.cljs$core$IIndexed$_nth$arity$2(null,i__32208);
var handler_32741__$1 = ((function (seq__32205,chunk__32206,count__32207,i__32208,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32205,chunk__32206,count__32207,i__32208,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_32741__$1);


var G__32742 = seq__32205;
var G__32743 = chunk__32206;
var G__32744 = count__32207;
var G__32745 = (i__32208 + (1));
seq__32205 = G__32742;
chunk__32206 = G__32743;
count__32207 = G__32744;
i__32208 = G__32745;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32205);
if(temp__5735__auto__){
var seq__32205__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32205__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__32205__$1);
var G__32746 = cljs.core.chunk_rest(seq__32205__$1);
var G__32747 = c__4591__auto__;
var G__32748 = cljs.core.count(c__4591__auto__);
var G__32749 = (0);
seq__32205 = G__32746;
chunk__32206 = G__32747;
count__32207 = G__32748;
i__32208 = G__32749;
continue;
} else {
var el = cljs.core.first(seq__32205__$1);
var handler_32750__$1 = ((function (seq__32205,chunk__32206,count__32207,i__32208,el,seq__32205__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32205,chunk__32206,count__32207,i__32208,el,seq__32205__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_32750__$1);


var G__32751 = cljs.core.next(seq__32205__$1);
var G__32752 = null;
var G__32753 = (0);
var G__32754 = (0);
seq__32205 = G__32751;
chunk__32206 = G__32752;
count__32207 = G__32753;
i__32208 = G__32754;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32218 = arguments.length;
switch (G__32218) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32221 = cljs.core.seq(events);
var chunk__32222 = null;
var count__32223 = (0);
var i__32224 = (0);
while(true){
if((i__32224 < count__32223)){
var vec__32238 = chunk__32222.cljs$core$IIndexed$_nth$arity$2(null,i__32224);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32238,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32238,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__32756 = seq__32221;
var G__32757 = chunk__32222;
var G__32758 = count__32223;
var G__32759 = (i__32224 + (1));
seq__32221 = G__32756;
chunk__32222 = G__32757;
count__32223 = G__32758;
i__32224 = G__32759;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32221);
if(temp__5735__auto__){
var seq__32221__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32221__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__32221__$1);
var G__32760 = cljs.core.chunk_rest(seq__32221__$1);
var G__32761 = c__4591__auto__;
var G__32762 = cljs.core.count(c__4591__auto__);
var G__32763 = (0);
seq__32221 = G__32760;
chunk__32222 = G__32761;
count__32223 = G__32762;
i__32224 = G__32763;
continue;
} else {
var vec__32241 = cljs.core.first(seq__32221__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32241,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32241,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__32764 = cljs.core.next(seq__32221__$1);
var G__32765 = null;
var G__32766 = (0);
var G__32767 = (0);
seq__32221 = G__32764;
chunk__32222 = G__32765;
count__32223 = G__32766;
i__32224 = G__32767;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32244 = cljs.core.seq(styles);
var chunk__32245 = null;
var count__32246 = (0);
var i__32247 = (0);
while(true){
if((i__32247 < count__32246)){
var vec__32254 = chunk__32245.cljs$core$IIndexed$_nth$arity$2(null,i__32247);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32254,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32254,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__32768 = seq__32244;
var G__32769 = chunk__32245;
var G__32770 = count__32246;
var G__32771 = (i__32247 + (1));
seq__32244 = G__32768;
chunk__32245 = G__32769;
count__32246 = G__32770;
i__32247 = G__32771;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32244);
if(temp__5735__auto__){
var seq__32244__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32244__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__32244__$1);
var G__32772 = cljs.core.chunk_rest(seq__32244__$1);
var G__32773 = c__4591__auto__;
var G__32774 = cljs.core.count(c__4591__auto__);
var G__32775 = (0);
seq__32244 = G__32772;
chunk__32245 = G__32773;
count__32246 = G__32774;
i__32247 = G__32775;
continue;
} else {
var vec__32259 = cljs.core.first(seq__32244__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32259,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32259,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__32776 = cljs.core.next(seq__32244__$1);
var G__32777 = null;
var G__32778 = (0);
var G__32779 = (0);
seq__32244 = G__32776;
chunk__32245 = G__32777;
count__32246 = G__32778;
i__32247 = G__32779;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32265_32780 = key;
var G__32265_32781__$1 = (((G__32265_32780 instanceof cljs.core.Keyword))?G__32265_32780.fqn:null);
switch (G__32265_32781__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_32783 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4160__auto__ = goog.string.startsWith(ks_32783,"data-");
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return goog.string.startsWith(ks_32783,"aria-");
}
})())){
el.setAttribute(ks_32783,value);
} else {
(el[ks_32783] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32286){
var map__32288 = p__32286;
var map__32288__$1 = cljs.core.__destructure_map(map__32288);
var props = map__32288__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32288__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32290 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32290,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32290,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32290,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32294 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32294,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32294;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32297 = arguments.length;
switch (G__32297) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32299){
var vec__32301 = p__32299;
var seq__32302 = cljs.core.seq(vec__32301);
var first__32303 = cljs.core.first(seq__32302);
var seq__32302__$1 = cljs.core.next(seq__32302);
var nn = first__32303;
var first__32303__$1 = cljs.core.first(seq__32302__$1);
var seq__32302__$2 = cljs.core.next(seq__32302__$1);
var np = first__32303__$1;
var nc = seq__32302__$2;
var node = vec__32301;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32304 = nn;
var G__32305 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32304,G__32305) : create_fn.call(null,G__32304,G__32305));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32307 = nn;
var G__32308 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32307,G__32308) : create_fn.call(null,G__32307,G__32308));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32311 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32311,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32311,(1),null);
var seq__32314_32791 = cljs.core.seq(node_children);
var chunk__32315_32792 = null;
var count__32316_32793 = (0);
var i__32317_32794 = (0);
while(true){
if((i__32317_32794 < count__32316_32793)){
var child_struct_32795 = chunk__32315_32792.cljs$core$IIndexed$_nth$arity$2(null,i__32317_32794);
var children_32796 = shadow.dom.dom_node(child_struct_32795);
if(cljs.core.seq_QMARK_(children_32796)){
var seq__32346_32798 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_32796));
var chunk__32348_32799 = null;
var count__32349_32800 = (0);
var i__32350_32801 = (0);
while(true){
if((i__32350_32801 < count__32349_32800)){
var child_32803 = chunk__32348_32799.cljs$core$IIndexed$_nth$arity$2(null,i__32350_32801);
if(cljs.core.truth_(child_32803)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32803);


var G__32804 = seq__32346_32798;
var G__32805 = chunk__32348_32799;
var G__32806 = count__32349_32800;
var G__32807 = (i__32350_32801 + (1));
seq__32346_32798 = G__32804;
chunk__32348_32799 = G__32805;
count__32349_32800 = G__32806;
i__32350_32801 = G__32807;
continue;
} else {
var G__32810 = seq__32346_32798;
var G__32811 = chunk__32348_32799;
var G__32812 = count__32349_32800;
var G__32813 = (i__32350_32801 + (1));
seq__32346_32798 = G__32810;
chunk__32348_32799 = G__32811;
count__32349_32800 = G__32812;
i__32350_32801 = G__32813;
continue;
}
} else {
var temp__5735__auto___32814 = cljs.core.seq(seq__32346_32798);
if(temp__5735__auto___32814){
var seq__32346_32815__$1 = temp__5735__auto___32814;
if(cljs.core.chunked_seq_QMARK_(seq__32346_32815__$1)){
var c__4591__auto___32816 = cljs.core.chunk_first(seq__32346_32815__$1);
var G__32817 = cljs.core.chunk_rest(seq__32346_32815__$1);
var G__32818 = c__4591__auto___32816;
var G__32819 = cljs.core.count(c__4591__auto___32816);
var G__32820 = (0);
seq__32346_32798 = G__32817;
chunk__32348_32799 = G__32818;
count__32349_32800 = G__32819;
i__32350_32801 = G__32820;
continue;
} else {
var child_32824 = cljs.core.first(seq__32346_32815__$1);
if(cljs.core.truth_(child_32824)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32824);


var G__32825 = cljs.core.next(seq__32346_32815__$1);
var G__32826 = null;
var G__32827 = (0);
var G__32828 = (0);
seq__32346_32798 = G__32825;
chunk__32348_32799 = G__32826;
count__32349_32800 = G__32827;
i__32350_32801 = G__32828;
continue;
} else {
var G__32830 = cljs.core.next(seq__32346_32815__$1);
var G__32831 = null;
var G__32832 = (0);
var G__32833 = (0);
seq__32346_32798 = G__32830;
chunk__32348_32799 = G__32831;
count__32349_32800 = G__32832;
i__32350_32801 = G__32833;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_32796);
}


var G__32834 = seq__32314_32791;
var G__32835 = chunk__32315_32792;
var G__32836 = count__32316_32793;
var G__32837 = (i__32317_32794 + (1));
seq__32314_32791 = G__32834;
chunk__32315_32792 = G__32835;
count__32316_32793 = G__32836;
i__32317_32794 = G__32837;
continue;
} else {
var temp__5735__auto___32839 = cljs.core.seq(seq__32314_32791);
if(temp__5735__auto___32839){
var seq__32314_32840__$1 = temp__5735__auto___32839;
if(cljs.core.chunked_seq_QMARK_(seq__32314_32840__$1)){
var c__4591__auto___32841 = cljs.core.chunk_first(seq__32314_32840__$1);
var G__32842 = cljs.core.chunk_rest(seq__32314_32840__$1);
var G__32843 = c__4591__auto___32841;
var G__32844 = cljs.core.count(c__4591__auto___32841);
var G__32845 = (0);
seq__32314_32791 = G__32842;
chunk__32315_32792 = G__32843;
count__32316_32793 = G__32844;
i__32317_32794 = G__32845;
continue;
} else {
var child_struct_32847 = cljs.core.first(seq__32314_32840__$1);
var children_32849 = shadow.dom.dom_node(child_struct_32847);
if(cljs.core.seq_QMARK_(children_32849)){
var seq__32361_32850 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_32849));
var chunk__32363_32851 = null;
var count__32364_32852 = (0);
var i__32365_32853 = (0);
while(true){
if((i__32365_32853 < count__32364_32852)){
var child_32855 = chunk__32363_32851.cljs$core$IIndexed$_nth$arity$2(null,i__32365_32853);
if(cljs.core.truth_(child_32855)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32855);


var G__32857 = seq__32361_32850;
var G__32858 = chunk__32363_32851;
var G__32859 = count__32364_32852;
var G__32860 = (i__32365_32853 + (1));
seq__32361_32850 = G__32857;
chunk__32363_32851 = G__32858;
count__32364_32852 = G__32859;
i__32365_32853 = G__32860;
continue;
} else {
var G__32861 = seq__32361_32850;
var G__32862 = chunk__32363_32851;
var G__32863 = count__32364_32852;
var G__32864 = (i__32365_32853 + (1));
seq__32361_32850 = G__32861;
chunk__32363_32851 = G__32862;
count__32364_32852 = G__32863;
i__32365_32853 = G__32864;
continue;
}
} else {
var temp__5735__auto___32866__$1 = cljs.core.seq(seq__32361_32850);
if(temp__5735__auto___32866__$1){
var seq__32361_32867__$1 = temp__5735__auto___32866__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32361_32867__$1)){
var c__4591__auto___32868 = cljs.core.chunk_first(seq__32361_32867__$1);
var G__32869 = cljs.core.chunk_rest(seq__32361_32867__$1);
var G__32870 = c__4591__auto___32868;
var G__32871 = cljs.core.count(c__4591__auto___32868);
var G__32872 = (0);
seq__32361_32850 = G__32869;
chunk__32363_32851 = G__32870;
count__32364_32852 = G__32871;
i__32365_32853 = G__32872;
continue;
} else {
var child_32881 = cljs.core.first(seq__32361_32867__$1);
if(cljs.core.truth_(child_32881)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32881);


var G__32883 = cljs.core.next(seq__32361_32867__$1);
var G__32884 = null;
var G__32885 = (0);
var G__32886 = (0);
seq__32361_32850 = G__32883;
chunk__32363_32851 = G__32884;
count__32364_32852 = G__32885;
i__32365_32853 = G__32886;
continue;
} else {
var G__32887 = cljs.core.next(seq__32361_32867__$1);
var G__32888 = null;
var G__32889 = (0);
var G__32890 = (0);
seq__32361_32850 = G__32887;
chunk__32363_32851 = G__32888;
count__32364_32852 = G__32889;
i__32365_32853 = G__32890;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_32849);
}


var G__32891 = cljs.core.next(seq__32314_32840__$1);
var G__32892 = null;
var G__32893 = (0);
var G__32894 = (0);
seq__32314_32791 = G__32891;
chunk__32315_32792 = G__32892;
count__32316_32793 = G__32893;
i__32317_32794 = G__32894;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32377 = cljs.core.seq(node);
var chunk__32378 = null;
var count__32379 = (0);
var i__32380 = (0);
while(true){
if((i__32380 < count__32379)){
var n = chunk__32378.cljs$core$IIndexed$_nth$arity$2(null,i__32380);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__32899 = seq__32377;
var G__32900 = chunk__32378;
var G__32901 = count__32379;
var G__32902 = (i__32380 + (1));
seq__32377 = G__32899;
chunk__32378 = G__32900;
count__32379 = G__32901;
i__32380 = G__32902;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32377);
if(temp__5735__auto__){
var seq__32377__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32377__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__32377__$1);
var G__32904 = cljs.core.chunk_rest(seq__32377__$1);
var G__32905 = c__4591__auto__;
var G__32906 = cljs.core.count(c__4591__auto__);
var G__32907 = (0);
seq__32377 = G__32904;
chunk__32378 = G__32905;
count__32379 = G__32906;
i__32380 = G__32907;
continue;
} else {
var n = cljs.core.first(seq__32377__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__32908 = cljs.core.next(seq__32377__$1);
var G__32909 = null;
var G__32910 = (0);
var G__32911 = (0);
seq__32377 = G__32908;
chunk__32378 = G__32909;
count__32379 = G__32910;
i__32380 = G__32911;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32391 = arguments.length;
switch (G__32391) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32396 = arguments.length;
switch (G__32396) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32403 = arguments.length;
switch (G__32403) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4160__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4777__auto__ = [];
var len__4771__auto___32953 = arguments.length;
var i__4772__auto___32954 = (0);
while(true){
if((i__4772__auto___32954 < len__4771__auto___32953)){
args__4777__auto__.push((arguments[i__4772__auto___32954]));

var G__32956 = (i__4772__auto___32954 + (1));
i__4772__auto___32954 = G__32956;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32408_32959 = cljs.core.seq(nodes);
var chunk__32409_32960 = null;
var count__32410_32961 = (0);
var i__32411_32962 = (0);
while(true){
if((i__32411_32962 < count__32410_32961)){
var node_32963 = chunk__32409_32960.cljs$core$IIndexed$_nth$arity$2(null,i__32411_32962);
fragment.appendChild(shadow.dom._to_dom(node_32963));


var G__32965 = seq__32408_32959;
var G__32966 = chunk__32409_32960;
var G__32967 = count__32410_32961;
var G__32968 = (i__32411_32962 + (1));
seq__32408_32959 = G__32965;
chunk__32409_32960 = G__32966;
count__32410_32961 = G__32967;
i__32411_32962 = G__32968;
continue;
} else {
var temp__5735__auto___32970 = cljs.core.seq(seq__32408_32959);
if(temp__5735__auto___32970){
var seq__32408_32971__$1 = temp__5735__auto___32970;
if(cljs.core.chunked_seq_QMARK_(seq__32408_32971__$1)){
var c__4591__auto___32972 = cljs.core.chunk_first(seq__32408_32971__$1);
var G__32973 = cljs.core.chunk_rest(seq__32408_32971__$1);
var G__32974 = c__4591__auto___32972;
var G__32975 = cljs.core.count(c__4591__auto___32972);
var G__32976 = (0);
seq__32408_32959 = G__32973;
chunk__32409_32960 = G__32974;
count__32410_32961 = G__32975;
i__32411_32962 = G__32976;
continue;
} else {
var node_32978 = cljs.core.first(seq__32408_32971__$1);
fragment.appendChild(shadow.dom._to_dom(node_32978));


var G__32979 = cljs.core.next(seq__32408_32971__$1);
var G__32980 = null;
var G__32981 = (0);
var G__32982 = (0);
seq__32408_32959 = G__32979;
chunk__32409_32960 = G__32980;
count__32410_32961 = G__32981;
i__32411_32962 = G__32982;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32407){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32407));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32413_32984 = cljs.core.seq(scripts);
var chunk__32414_32985 = null;
var count__32415_32986 = (0);
var i__32416_32987 = (0);
while(true){
if((i__32416_32987 < count__32415_32986)){
var vec__32426_32989 = chunk__32414_32985.cljs$core$IIndexed$_nth$arity$2(null,i__32416_32987);
var script_tag_32990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32426_32989,(0),null);
var script_body_32991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32426_32989,(1),null);
eval(script_body_32991);


var G__32993 = seq__32413_32984;
var G__32994 = chunk__32414_32985;
var G__32995 = count__32415_32986;
var G__32996 = (i__32416_32987 + (1));
seq__32413_32984 = G__32993;
chunk__32414_32985 = G__32994;
count__32415_32986 = G__32995;
i__32416_32987 = G__32996;
continue;
} else {
var temp__5735__auto___32998 = cljs.core.seq(seq__32413_32984);
if(temp__5735__auto___32998){
var seq__32413_32999__$1 = temp__5735__auto___32998;
if(cljs.core.chunked_seq_QMARK_(seq__32413_32999__$1)){
var c__4591__auto___33001 = cljs.core.chunk_first(seq__32413_32999__$1);
var G__33002 = cljs.core.chunk_rest(seq__32413_32999__$1);
var G__33003 = c__4591__auto___33001;
var G__33004 = cljs.core.count(c__4591__auto___33001);
var G__33005 = (0);
seq__32413_32984 = G__33002;
chunk__32414_32985 = G__33003;
count__32415_32986 = G__33004;
i__32416_32987 = G__33005;
continue;
} else {
var vec__32431_33006 = cljs.core.first(seq__32413_32999__$1);
var script_tag_33007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32431_33006,(0),null);
var script_body_33008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32431_33006,(1),null);
eval(script_body_33008);


var G__33011 = cljs.core.next(seq__32413_32999__$1);
var G__33012 = null;
var G__33013 = (0);
var G__33014 = (0);
seq__32413_32984 = G__33011;
chunk__32414_32985 = G__33012;
count__32415_32986 = G__33013;
i__32416_32987 = G__33014;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32435){
var vec__32436 = p__32435;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32436,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32436,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32445 = arguments.length;
switch (G__32445) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__32466 = cljs.core.seq(style_keys);
var chunk__32467 = null;
var count__32468 = (0);
var i__32469 = (0);
while(true){
if((i__32469 < count__32468)){
var it = chunk__32467.cljs$core$IIndexed$_nth$arity$2(null,i__32469);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33029 = seq__32466;
var G__33030 = chunk__32467;
var G__33031 = count__32468;
var G__33032 = (i__32469 + (1));
seq__32466 = G__33029;
chunk__32467 = G__33030;
count__32468 = G__33031;
i__32469 = G__33032;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32466);
if(temp__5735__auto__){
var seq__32466__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32466__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__32466__$1);
var G__33033 = cljs.core.chunk_rest(seq__32466__$1);
var G__33034 = c__4591__auto__;
var G__33035 = cljs.core.count(c__4591__auto__);
var G__33036 = (0);
seq__32466 = G__33033;
chunk__32467 = G__33034;
count__32468 = G__33035;
i__32469 = G__33036;
continue;
} else {
var it = cljs.core.first(seq__32466__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33037 = cljs.core.next(seq__32466__$1);
var G__33038 = null;
var G__33039 = (0);
var G__33040 = (0);
seq__32466 = G__33037;
chunk__32467 = G__33038;
count__32468 = G__33039;
i__32469 = G__33040;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k32484,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__32493 = k32484;
var G__32493__$1 = (((G__32493 instanceof cljs.core.Keyword))?G__32493.fqn:null);
switch (G__32493__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32484,else__4418__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__32504){
var vec__32505 = p__32504;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32505,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32505,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32483){
var self__ = this;
var G__32483__$1 = this;
return (new cljs.core.RecordIter((0),G__32483__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (coll__4412__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
})(this__4411__auto____$1);
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32485,other32486){
var self__ = this;
var this32485__$1 = this;
return (((!((other32486 == null)))) && ((this32485__$1.constructor === other32486.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32485__$1.x,other32486.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32485__$1.y,other32486.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32485__$1.__extmap,other32486.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__32483){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__32518 = cljs.core.keyword_identical_QMARK_;
var expr__32519 = k__4423__auto__;
if(cljs.core.truth_((pred__32518.cljs$core$IFn$_invoke$arity$2 ? pred__32518.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__32519) : pred__32518.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__32519)))){
return (new shadow.dom.Coordinate(G__32483,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32518.cljs$core$IFn$_invoke$arity$2 ? pred__32518.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__32519) : pred__32518.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__32519)))){
return (new shadow.dom.Coordinate(self__.x,G__32483,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__32483),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__32483){
var self__ = this;
var this__4414__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32483,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4421__auto__,(0)),cljs.core._nth(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32488){
var extmap__4454__auto__ = (function (){var G__32521 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32488,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32488)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32521);
} else {
return G__32521;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32488),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32488),null,cljs.core.not_empty(extmap__4454__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k32523,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__32530 = k32523;
var G__32530__$1 = (((G__32530 instanceof cljs.core.Keyword))?G__32530.fqn:null);
switch (G__32530__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32523,else__4418__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__32532){
var vec__32533 = p__32532;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32533,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32533,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#shadow.dom.Size{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32522){
var self__ = this;
var G__32522__$1 = this;
return (new cljs.core.RecordIter((0),G__32522__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (coll__4412__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
})(this__4411__auto____$1);
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32524,other32525){
var self__ = this;
var this32524__$1 = this;
return (((!((other32525 == null)))) && ((this32524__$1.constructor === other32525.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32524__$1.w,other32525.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32524__$1.h,other32525.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32524__$1.__extmap,other32525.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__32522){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__32539 = cljs.core.keyword_identical_QMARK_;
var expr__32540 = k__4423__auto__;
if(cljs.core.truth_((pred__32539.cljs$core$IFn$_invoke$arity$2 ? pred__32539.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__32540) : pred__32539.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__32540)))){
return (new shadow.dom.Size(G__32522,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32539.cljs$core$IFn$_invoke$arity$2 ? pred__32539.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__32540) : pred__32539.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__32540)))){
return (new shadow.dom.Size(self__.w,G__32522,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__32522),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__32522){
var self__ = this;
var this__4414__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__32522,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4421__auto__,(0)),cljs.core._nth(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__32526){
var extmap__4454__auto__ = (function (){var G__32546 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32526,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__32526)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32546);
} else {
return G__32546;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__32526),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__32526),null,cljs.core.not_empty(extmap__4454__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4645__auto__ = opts;
var l__4646__auto__ = a__4645__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4646__auto__)){
var G__33089 = (i + (1));
var G__33090 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33089;
ret = G__33090;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32558){
var vec__32560 = p__32558;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32560,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32560,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__32564 = arguments.length;
switch (G__32564) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33095 = ps;
var G__33096 = (i + (1));
el__$1 = G__33095;
i = G__33096;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__32578 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32578,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32578,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32578,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__32581_33100 = cljs.core.seq(props);
var chunk__32582_33101 = null;
var count__32583_33102 = (0);
var i__32584_33103 = (0);
while(true){
if((i__32584_33103 < count__32583_33102)){
var vec__32604_33104 = chunk__32582_33101.cljs$core$IIndexed$_nth$arity$2(null,i__32584_33103);
var k_33105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32604_33104,(0),null);
var v_33106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32604_33104,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33105);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33105),v_33106);


var G__33107 = seq__32581_33100;
var G__33108 = chunk__32582_33101;
var G__33109 = count__32583_33102;
var G__33110 = (i__32584_33103 + (1));
seq__32581_33100 = G__33107;
chunk__32582_33101 = G__33108;
count__32583_33102 = G__33109;
i__32584_33103 = G__33110;
continue;
} else {
var temp__5735__auto___33111 = cljs.core.seq(seq__32581_33100);
if(temp__5735__auto___33111){
var seq__32581_33112__$1 = temp__5735__auto___33111;
if(cljs.core.chunked_seq_QMARK_(seq__32581_33112__$1)){
var c__4591__auto___33113 = cljs.core.chunk_first(seq__32581_33112__$1);
var G__33114 = cljs.core.chunk_rest(seq__32581_33112__$1);
var G__33115 = c__4591__auto___33113;
var G__33116 = cljs.core.count(c__4591__auto___33113);
var G__33117 = (0);
seq__32581_33100 = G__33114;
chunk__32582_33101 = G__33115;
count__32583_33102 = G__33116;
i__32584_33103 = G__33117;
continue;
} else {
var vec__32613_33118 = cljs.core.first(seq__32581_33112__$1);
var k_33119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32613_33118,(0),null);
var v_33120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32613_33118,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33119);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33119),v_33120);


var G__33124 = cljs.core.next(seq__32581_33112__$1);
var G__33125 = null;
var G__33126 = (0);
var G__33127 = (0);
seq__32581_33100 = G__33124;
chunk__32582_33101 = G__33125;
count__32583_33102 = G__33126;
i__32584_33103 = G__33127;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__32622 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32622,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32622,(1),null);
var seq__32625_33128 = cljs.core.seq(node_children);
var chunk__32627_33129 = null;
var count__32628_33130 = (0);
var i__32629_33131 = (0);
while(true){
if((i__32629_33131 < count__32628_33130)){
var child_struct_33132 = chunk__32627_33129.cljs$core$IIndexed$_nth$arity$2(null,i__32629_33131);
if((!((child_struct_33132 == null)))){
if(typeof child_struct_33132 === 'string'){
var text_33133 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33133),child_struct_33132].join(''));
} else {
var children_33134 = shadow.dom.svg_node(child_struct_33132);
if(cljs.core.seq_QMARK_(children_33134)){
var seq__32654_33135 = cljs.core.seq(children_33134);
var chunk__32656_33136 = null;
var count__32657_33137 = (0);
var i__32658_33138 = (0);
while(true){
if((i__32658_33138 < count__32657_33137)){
var child_33139 = chunk__32656_33136.cljs$core$IIndexed$_nth$arity$2(null,i__32658_33138);
if(cljs.core.truth_(child_33139)){
node.appendChild(child_33139);


var G__33141 = seq__32654_33135;
var G__33142 = chunk__32656_33136;
var G__33143 = count__32657_33137;
var G__33144 = (i__32658_33138 + (1));
seq__32654_33135 = G__33141;
chunk__32656_33136 = G__33142;
count__32657_33137 = G__33143;
i__32658_33138 = G__33144;
continue;
} else {
var G__33148 = seq__32654_33135;
var G__33149 = chunk__32656_33136;
var G__33150 = count__32657_33137;
var G__33151 = (i__32658_33138 + (1));
seq__32654_33135 = G__33148;
chunk__32656_33136 = G__33149;
count__32657_33137 = G__33150;
i__32658_33138 = G__33151;
continue;
}
} else {
var temp__5735__auto___33152 = cljs.core.seq(seq__32654_33135);
if(temp__5735__auto___33152){
var seq__32654_33153__$1 = temp__5735__auto___33152;
if(cljs.core.chunked_seq_QMARK_(seq__32654_33153__$1)){
var c__4591__auto___33154 = cljs.core.chunk_first(seq__32654_33153__$1);
var G__33155 = cljs.core.chunk_rest(seq__32654_33153__$1);
var G__33156 = c__4591__auto___33154;
var G__33157 = cljs.core.count(c__4591__auto___33154);
var G__33158 = (0);
seq__32654_33135 = G__33155;
chunk__32656_33136 = G__33156;
count__32657_33137 = G__33157;
i__32658_33138 = G__33158;
continue;
} else {
var child_33159 = cljs.core.first(seq__32654_33153__$1);
if(cljs.core.truth_(child_33159)){
node.appendChild(child_33159);


var G__33160 = cljs.core.next(seq__32654_33153__$1);
var G__33161 = null;
var G__33162 = (0);
var G__33163 = (0);
seq__32654_33135 = G__33160;
chunk__32656_33136 = G__33161;
count__32657_33137 = G__33162;
i__32658_33138 = G__33163;
continue;
} else {
var G__33164 = cljs.core.next(seq__32654_33153__$1);
var G__33165 = null;
var G__33166 = (0);
var G__33167 = (0);
seq__32654_33135 = G__33164;
chunk__32656_33136 = G__33165;
count__32657_33137 = G__33166;
i__32658_33138 = G__33167;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33134);
}
}


var G__33168 = seq__32625_33128;
var G__33169 = chunk__32627_33129;
var G__33170 = count__32628_33130;
var G__33171 = (i__32629_33131 + (1));
seq__32625_33128 = G__33168;
chunk__32627_33129 = G__33169;
count__32628_33130 = G__33170;
i__32629_33131 = G__33171;
continue;
} else {
var G__33172 = seq__32625_33128;
var G__33173 = chunk__32627_33129;
var G__33174 = count__32628_33130;
var G__33175 = (i__32629_33131 + (1));
seq__32625_33128 = G__33172;
chunk__32627_33129 = G__33173;
count__32628_33130 = G__33174;
i__32629_33131 = G__33175;
continue;
}
} else {
var temp__5735__auto___33176 = cljs.core.seq(seq__32625_33128);
if(temp__5735__auto___33176){
var seq__32625_33177__$1 = temp__5735__auto___33176;
if(cljs.core.chunked_seq_QMARK_(seq__32625_33177__$1)){
var c__4591__auto___33178 = cljs.core.chunk_first(seq__32625_33177__$1);
var G__33179 = cljs.core.chunk_rest(seq__32625_33177__$1);
var G__33180 = c__4591__auto___33178;
var G__33181 = cljs.core.count(c__4591__auto___33178);
var G__33182 = (0);
seq__32625_33128 = G__33179;
chunk__32627_33129 = G__33180;
count__32628_33130 = G__33181;
i__32629_33131 = G__33182;
continue;
} else {
var child_struct_33183 = cljs.core.first(seq__32625_33177__$1);
if((!((child_struct_33183 == null)))){
if(typeof child_struct_33183 === 'string'){
var text_33184 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33184),child_struct_33183].join(''));
} else {
var children_33185 = shadow.dom.svg_node(child_struct_33183);
if(cljs.core.seq_QMARK_(children_33185)){
var seq__32669_33186 = cljs.core.seq(children_33185);
var chunk__32671_33187 = null;
var count__32672_33188 = (0);
var i__32673_33189 = (0);
while(true){
if((i__32673_33189 < count__32672_33188)){
var child_33190 = chunk__32671_33187.cljs$core$IIndexed$_nth$arity$2(null,i__32673_33189);
if(cljs.core.truth_(child_33190)){
node.appendChild(child_33190);


var G__33191 = seq__32669_33186;
var G__33192 = chunk__32671_33187;
var G__33193 = count__32672_33188;
var G__33194 = (i__32673_33189 + (1));
seq__32669_33186 = G__33191;
chunk__32671_33187 = G__33192;
count__32672_33188 = G__33193;
i__32673_33189 = G__33194;
continue;
} else {
var G__33195 = seq__32669_33186;
var G__33196 = chunk__32671_33187;
var G__33197 = count__32672_33188;
var G__33198 = (i__32673_33189 + (1));
seq__32669_33186 = G__33195;
chunk__32671_33187 = G__33196;
count__32672_33188 = G__33197;
i__32673_33189 = G__33198;
continue;
}
} else {
var temp__5735__auto___33199__$1 = cljs.core.seq(seq__32669_33186);
if(temp__5735__auto___33199__$1){
var seq__32669_33200__$1 = temp__5735__auto___33199__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32669_33200__$1)){
var c__4591__auto___33201 = cljs.core.chunk_first(seq__32669_33200__$1);
var G__33202 = cljs.core.chunk_rest(seq__32669_33200__$1);
var G__33203 = c__4591__auto___33201;
var G__33204 = cljs.core.count(c__4591__auto___33201);
var G__33205 = (0);
seq__32669_33186 = G__33202;
chunk__32671_33187 = G__33203;
count__32672_33188 = G__33204;
i__32673_33189 = G__33205;
continue;
} else {
var child_33206 = cljs.core.first(seq__32669_33200__$1);
if(cljs.core.truth_(child_33206)){
node.appendChild(child_33206);


var G__33207 = cljs.core.next(seq__32669_33200__$1);
var G__33208 = null;
var G__33209 = (0);
var G__33210 = (0);
seq__32669_33186 = G__33207;
chunk__32671_33187 = G__33208;
count__32672_33188 = G__33209;
i__32673_33189 = G__33210;
continue;
} else {
var G__33211 = cljs.core.next(seq__32669_33200__$1);
var G__33212 = null;
var G__33213 = (0);
var G__33214 = (0);
seq__32669_33186 = G__33211;
chunk__32671_33187 = G__33212;
count__32672_33188 = G__33213;
i__32673_33189 = G__33214;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33185);
}
}


var G__33215 = cljs.core.next(seq__32625_33177__$1);
var G__33216 = null;
var G__33217 = (0);
var G__33218 = (0);
seq__32625_33128 = G__33215;
chunk__32627_33129 = G__33216;
count__32628_33130 = G__33217;
i__32629_33131 = G__33218;
continue;
} else {
var G__33219 = cljs.core.next(seq__32625_33177__$1);
var G__33220 = null;
var G__33221 = (0);
var G__33222 = (0);
seq__32625_33128 = G__33219;
chunk__32627_33129 = G__33220;
count__32628_33130 = G__33221;
i__32629_33131 = G__33222;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4777__auto__ = [];
var len__4771__auto___33225 = arguments.length;
var i__4772__auto___33226 = (0);
while(true){
if((i__4772__auto___33226 < len__4771__auto___33225)){
args__4777__auto__.push((arguments[i__4772__auto___33226]));

var G__33227 = (i__4772__auto___33226 + (1));
i__4772__auto___33226 = G__33227;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq32686){
var G__32687 = cljs.core.first(seq32686);
var seq32686__$1 = cljs.core.next(seq32686);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32687,seq32686__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__32695 = arguments.length;
switch (G__32695) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4149__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4149__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4149__auto__;
}
})())){
var c__30643__auto___33230 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30644__auto__ = (function (){var switch__30559__auto__ = (function (state_32706){
var state_val_32707 = (state_32706[(1)]);
if((state_val_32707 === (1))){
var state_32706__$1 = state_32706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32706__$1,(2),once_or_cleanup);
} else {
if((state_val_32707 === (2))){
var inst_32703 = (state_32706[(2)]);
var inst_32704 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_32706__$1 = (function (){var statearr_32709 = state_32706;
(statearr_32709[(7)] = inst_32703);

return statearr_32709;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32706__$1,inst_32704);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30560__auto__ = null;
var shadow$dom$state_machine__30560__auto____0 = (function (){
var statearr_32710 = [null,null,null,null,null,null,null,null];
(statearr_32710[(0)] = shadow$dom$state_machine__30560__auto__);

(statearr_32710[(1)] = (1));

return statearr_32710;
});
var shadow$dom$state_machine__30560__auto____1 = (function (state_32706){
while(true){
var ret_value__30561__auto__ = (function (){try{while(true){
var result__30562__auto__ = switch__30559__auto__(state_32706);
if(cljs.core.keyword_identical_QMARK_(result__30562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30562__auto__;
}
break;
}
}catch (e32712){var ex__30563__auto__ = e32712;
var statearr_32713_33231 = state_32706;
(statearr_32713_33231[(2)] = ex__30563__auto__);


if(cljs.core.seq((state_32706[(4)]))){
var statearr_32715_33232 = state_32706;
(statearr_32715_33232[(1)] = cljs.core.first((state_32706[(4)])));

} else {
throw ex__30563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33234 = state_32706;
state_32706 = G__33234;
continue;
} else {
return ret_value__30561__auto__;
}
break;
}
});
shadow$dom$state_machine__30560__auto__ = function(state_32706){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30560__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30560__auto____1.call(this,state_32706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30560__auto____0;
shadow$dom$state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30560__auto____1;
return shadow$dom$state_machine__30560__auto__;
})()
})();
var state__30645__auto__ = (function (){var statearr_32717 = f__30644__auto__();
(statearr_32717[(6)] = c__30643__auto___33230);

return statearr_32717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30645__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
