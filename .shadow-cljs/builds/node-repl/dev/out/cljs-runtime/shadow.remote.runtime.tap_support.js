goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__33810,p__33811){
var map__33812 = p__33810;
var map__33812__$1 = cljs.core.__destructure_map(map__33812);
var svc = map__33812__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33812__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33812__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33812__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__33813 = p__33811;
var map__33813__$1 = cljs.core.__destructure_map(map__33813);
var msg = map__33813__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33813__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33813__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33813__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33813__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__33814,p__33815){
var map__33816 = p__33814;
var map__33816__$1 = cljs.core.__destructure_map(map__33816);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33816__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__33817 = p__33815;
var map__33817__$1 = cljs.core.__destructure_map(map__33817);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33817__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__33818,p__33819){
var map__33820 = p__33818;
var map__33820__$1 = cljs.core.__destructure_map(map__33820);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33820__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33820__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__33821 = p__33819;
var map__33821__$1 = cljs.core.__destructure_map(map__33821);
var msg = map__33821__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33821__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__33823,tid){
var map__33824 = p__33823;
var map__33824__$1 = cljs.core.__destructure_map(map__33824);
var svc = map__33824__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33824__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__33829 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__33830 = null;
var count__33831 = (0);
var i__33832 = (0);
while(true){
if((i__33832 < count__33831)){
var vec__33842 = chunk__33830.cljs$core$IIndexed$_nth$arity$2(null,i__33832);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33842,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33842,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__33850 = seq__33829;
var G__33851 = chunk__33830;
var G__33852 = count__33831;
var G__33853 = (i__33832 + (1));
seq__33829 = G__33850;
chunk__33830 = G__33851;
count__33831 = G__33852;
i__33832 = G__33853;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33829);
if(temp__5735__auto__){
var seq__33829__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33829__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__33829__$1);
var G__33854 = cljs.core.chunk_rest(seq__33829__$1);
var G__33855 = c__4591__auto__;
var G__33856 = cljs.core.count(c__4591__auto__);
var G__33857 = (0);
seq__33829 = G__33854;
chunk__33830 = G__33855;
count__33831 = G__33856;
i__33832 = G__33857;
continue;
} else {
var vec__33845 = cljs.core.first(seq__33829__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33845,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33845,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__33861 = cljs.core.next(seq__33829__$1);
var G__33862 = null;
var G__33863 = (0);
var G__33864 = (0);
seq__33829 = G__33861;
chunk__33830 = G__33862;
count__33831 = G__33863;
i__33832 = G__33864;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__33825_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__33825_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__33826_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__33826_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__33827_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__33827_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__33828_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__33828_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__33848){
var map__33849 = p__33848;
var map__33849__$1 = cljs.core.__destructure_map(map__33849);
var svc = map__33849__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33849__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33849__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
