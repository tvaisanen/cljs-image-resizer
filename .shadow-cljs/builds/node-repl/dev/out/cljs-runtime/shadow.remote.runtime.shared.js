goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__31544,res){
var map__31545 = p__31544;
var map__31545__$1 = cljs.core.__destructure_map(map__31545);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31545__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31545__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__31546 = res;
var G__31546__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31546,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__31546);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31546__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__31546__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__31548 = arguments.length;
switch (G__31548) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__31549,msg,handlers,timeout_after_ms){
var map__31550 = p__31549;
var map__31550__$1 = cljs.core.__destructure_map(map__31550);
var runtime = map__31550__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31550__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___31717 = arguments.length;
var i__4772__auto___31718 = (0);
while(true){
if((i__4772__auto___31718 < len__4771__auto___31717)){
args__4777__auto__.push((arguments[i__4772__auto___31718]));

var G__31719 = (i__4772__auto___31718 + (1));
i__4772__auto___31718 = G__31719;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__31572,ev,args){
var map__31574 = p__31572;
var map__31574__$1 = cljs.core.__destructure_map(map__31574);
var runtime = map__31574__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31574__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__31577 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31580 = null;
var count__31581 = (0);
var i__31582 = (0);
while(true){
if((i__31582 < count__31581)){
var ext = chunk__31580.cljs$core$IIndexed$_nth$arity$2(null,i__31582);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31721 = seq__31577;
var G__31722 = chunk__31580;
var G__31723 = count__31581;
var G__31724 = (i__31582 + (1));
seq__31577 = G__31721;
chunk__31580 = G__31722;
count__31581 = G__31723;
i__31582 = G__31724;
continue;
} else {
var G__31737 = seq__31577;
var G__31738 = chunk__31580;
var G__31739 = count__31581;
var G__31740 = (i__31582 + (1));
seq__31577 = G__31737;
chunk__31580 = G__31738;
count__31581 = G__31739;
i__31582 = G__31740;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31577);
if(temp__5735__auto__){
var seq__31577__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31577__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__31577__$1);
var G__31741 = cljs.core.chunk_rest(seq__31577__$1);
var G__31742 = c__4591__auto__;
var G__31743 = cljs.core.count(c__4591__auto__);
var G__31744 = (0);
seq__31577 = G__31741;
chunk__31580 = G__31742;
count__31581 = G__31743;
i__31582 = G__31744;
continue;
} else {
var ext = cljs.core.first(seq__31577__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31745 = cljs.core.next(seq__31577__$1);
var G__31746 = null;
var G__31747 = (0);
var G__31748 = (0);
seq__31577 = G__31745;
chunk__31580 = G__31746;
count__31581 = G__31747;
i__31582 = G__31748;
continue;
} else {
var G__31749 = cljs.core.next(seq__31577__$1);
var G__31750 = null;
var G__31751 = (0);
var G__31752 = (0);
seq__31577 = G__31749;
chunk__31580 = G__31750;
count__31581 = G__31751;
i__31582 = G__31752;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq31564){
var G__31565 = cljs.core.first(seq31564);
var seq31564__$1 = cljs.core.next(seq31564);
var G__31566 = cljs.core.first(seq31564__$1);
var seq31564__$2 = cljs.core.next(seq31564__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31565,G__31566,seq31564__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__31589,p__31590){
var map__31591 = p__31589;
var map__31591__$1 = cljs.core.__destructure_map(map__31591);
var runtime = map__31591__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31591__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31592 = p__31590;
var map__31592__$1 = cljs.core.__destructure_map(map__31592);
var msg = map__31592__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31592__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__31593 = cljs.core.deref(state_ref);
var map__31593__$1 = cljs.core.__destructure_map(map__31593);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31593__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31593__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__31614){
var map__31615 = p__31614;
var map__31615__$1 = cljs.core.__destructure_map(map__31615);
var runtime = map__31615__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31615__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4160__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__31616,msg){
var map__31617 = p__31616;
var map__31617__$1 = cljs.core.__destructure_map(map__31617);
var runtime = map__31617__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31617__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__31620,key,p__31621){
var map__31622 = p__31620;
var map__31622__$1 = cljs.core.__destructure_map(map__31622);
var state = map__31622__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31622__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__31623 = p__31621;
var map__31623__$1 = cljs.core.__destructure_map(map__31623);
var spec = map__31623__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31623__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__31624,key,spec){
var map__31625 = p__31624;
var map__31625__$1 = cljs.core.__destructure_map(map__31625);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31625__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__31626_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__31626_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__31627_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__31627_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__31628_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__31628_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__31629_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__31629_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__31630_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__31630_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__31651,key){
var map__31652 = p__31651;
var map__31652__$1 = cljs.core.__destructure_map(map__31652);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31652__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__31661,msg){
var map__31662 = p__31661;
var map__31662__$1 = cljs.core.__destructure_map(map__31662);
var runtime = map__31662__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31662__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__31665,p__31666){
var map__31667 = p__31665;
var map__31667__$1 = cljs.core.__destructure_map(map__31667);
var runtime = map__31667__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31667__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31668 = p__31666;
var map__31668__$1 = cljs.core.__destructure_map(map__31668);
var msg = map__31668__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31668__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31668__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__31678 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31680 = null;
var count__31681 = (0);
var i__31682 = (0);
while(true){
if((i__31682 < count__31681)){
var map__31692 = chunk__31680.cljs$core$IIndexed$_nth$arity$2(null,i__31682);
var map__31692__$1 = cljs.core.__destructure_map(map__31692);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31692__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31769 = seq__31678;
var G__31770 = chunk__31680;
var G__31771 = count__31681;
var G__31772 = (i__31682 + (1));
seq__31678 = G__31769;
chunk__31680 = G__31770;
count__31681 = G__31771;
i__31682 = G__31772;
continue;
} else {
var G__31773 = seq__31678;
var G__31774 = chunk__31680;
var G__31775 = count__31681;
var G__31776 = (i__31682 + (1));
seq__31678 = G__31773;
chunk__31680 = G__31774;
count__31681 = G__31775;
i__31682 = G__31776;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31678);
if(temp__5735__auto__){
var seq__31678__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31678__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__31678__$1);
var G__31777 = cljs.core.chunk_rest(seq__31678__$1);
var G__31778 = c__4591__auto__;
var G__31779 = cljs.core.count(c__4591__auto__);
var G__31780 = (0);
seq__31678 = G__31777;
chunk__31680 = G__31778;
count__31681 = G__31779;
i__31682 = G__31780;
continue;
} else {
var map__31696 = cljs.core.first(seq__31678__$1);
var map__31696__$1 = cljs.core.__destructure_map(map__31696);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31696__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31781 = cljs.core.next(seq__31678__$1);
var G__31782 = null;
var G__31783 = (0);
var G__31784 = (0);
seq__31678 = G__31781;
chunk__31680 = G__31782;
count__31681 = G__31783;
i__31682 = G__31784;
continue;
} else {
var G__31785 = cljs.core.next(seq__31678__$1);
var G__31786 = null;
var G__31787 = (0);
var G__31788 = (0);
seq__31678 = G__31785;
chunk__31680 = G__31786;
count__31681 = G__31787;
i__31682 = G__31788;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
