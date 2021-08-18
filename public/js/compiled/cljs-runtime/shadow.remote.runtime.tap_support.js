goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__35204,p__35205){
var map__35206 = p__35204;
var map__35206__$1 = cljs.core.__destructure_map(map__35206);
var svc = map__35206__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35206__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35206__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35206__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35207 = p__35205;
var map__35207__$1 = cljs.core.__destructure_map(map__35207);
var msg = map__35207__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35207__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35207__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35207__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35207__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__35213,p__35214){
var map__35215 = p__35213;
var map__35215__$1 = cljs.core.__destructure_map(map__35215);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35215__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__35216 = p__35214;
var map__35216__$1 = cljs.core.__destructure_map(map__35216);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35216__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__35217,p__35218){
var map__35219 = p__35217;
var map__35219__$1 = cljs.core.__destructure_map(map__35219);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35219__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35219__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35220 = p__35218;
var map__35220__$1 = cljs.core.__destructure_map(map__35220);
var msg = map__35220__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35220__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__35221,tid){
var map__35222 = p__35221;
var map__35222__$1 = cljs.core.__destructure_map(map__35222);
var svc = map__35222__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35222__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__35243 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__35244 = null;
var count__35245 = (0);
var i__35246 = (0);
while(true){
if((i__35246 < count__35245)){
var vec__35254 = chunk__35244.cljs$core$IIndexed$_nth$arity$2(null,i__35246);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35254,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35254,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35264 = seq__35243;
var G__35265 = chunk__35244;
var G__35266 = count__35245;
var G__35267 = (i__35246 + (1));
seq__35243 = G__35264;
chunk__35244 = G__35265;
count__35245 = G__35266;
i__35246 = G__35267;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35243);
if(temp__5735__auto__){
var seq__35243__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35243__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__35243__$1);
var G__35268 = cljs.core.chunk_rest(seq__35243__$1);
var G__35269 = c__4591__auto__;
var G__35270 = cljs.core.count(c__4591__auto__);
var G__35271 = (0);
seq__35243 = G__35268;
chunk__35244 = G__35269;
count__35245 = G__35270;
i__35246 = G__35271;
continue;
} else {
var vec__35257 = cljs.core.first(seq__35243__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35257,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35257,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35272 = cljs.core.next(seq__35243__$1);
var G__35273 = null;
var G__35274 = (0);
var G__35275 = (0);
seq__35243 = G__35272;
chunk__35244 = G__35273;
count__35245 = G__35274;
i__35246 = G__35275;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__35223_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__35223_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__35224_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__35224_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__35225_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__35225_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__35226_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__35226_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__35260){
var map__35261 = p__35260;
var map__35261__$1 = cljs.core.__destructure_map(map__35261);
var svc = map__35261__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35261__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35261__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
