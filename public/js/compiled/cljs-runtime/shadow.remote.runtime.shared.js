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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__33752,res){
var map__33753 = p__33752;
var map__33753__$1 = cljs.core.__destructure_map(map__33753);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33753__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33753__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__33754 = res;
var G__33754__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33754,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__33754);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33754__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__33754__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__33770 = arguments.length;
switch (G__33770) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__33771,msg,handlers,timeout_after_ms){
var map__33772 = p__33771;
var map__33772__$1 = cljs.core.__destructure_map(map__33772);
var runtime = map__33772__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33772__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___33915 = arguments.length;
var i__4772__auto___33916 = (0);
while(true){
if((i__4772__auto___33916 < len__4771__auto___33915)){
args__4777__auto__.push((arguments[i__4772__auto___33916]));

var G__33917 = (i__4772__auto___33916 + (1));
i__4772__auto___33916 = G__33917;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__33781,ev,args){
var map__33782 = p__33781;
var map__33782__$1 = cljs.core.__destructure_map(map__33782);
var runtime = map__33782__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33782__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__33783 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33786 = null;
var count__33787 = (0);
var i__33788 = (0);
while(true){
if((i__33788 < count__33787)){
var ext = chunk__33786.cljs$core$IIndexed$_nth$arity$2(null,i__33788);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33918 = seq__33783;
var G__33919 = chunk__33786;
var G__33920 = count__33787;
var G__33921 = (i__33788 + (1));
seq__33783 = G__33918;
chunk__33786 = G__33919;
count__33787 = G__33920;
i__33788 = G__33921;
continue;
} else {
var G__33922 = seq__33783;
var G__33923 = chunk__33786;
var G__33924 = count__33787;
var G__33925 = (i__33788 + (1));
seq__33783 = G__33922;
chunk__33786 = G__33923;
count__33787 = G__33924;
i__33788 = G__33925;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33783);
if(temp__5735__auto__){
var seq__33783__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33783__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__33783__$1);
var G__33926 = cljs.core.chunk_rest(seq__33783__$1);
var G__33927 = c__4591__auto__;
var G__33928 = cljs.core.count(c__4591__auto__);
var G__33929 = (0);
seq__33783 = G__33926;
chunk__33786 = G__33927;
count__33787 = G__33928;
i__33788 = G__33929;
continue;
} else {
var ext = cljs.core.first(seq__33783__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33932 = cljs.core.next(seq__33783__$1);
var G__33933 = null;
var G__33934 = (0);
var G__33935 = (0);
seq__33783 = G__33932;
chunk__33786 = G__33933;
count__33787 = G__33934;
i__33788 = G__33935;
continue;
} else {
var G__33937 = cljs.core.next(seq__33783__$1);
var G__33938 = null;
var G__33939 = (0);
var G__33940 = (0);
seq__33783 = G__33937;
chunk__33786 = G__33938;
count__33787 = G__33939;
i__33788 = G__33940;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq33774){
var G__33775 = cljs.core.first(seq33774);
var seq33774__$1 = cljs.core.next(seq33774);
var G__33776 = cljs.core.first(seq33774__$1);
var seq33774__$2 = cljs.core.next(seq33774__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33775,G__33776,seq33774__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__33809,p__33810){
var map__33815 = p__33809;
var map__33815__$1 = cljs.core.__destructure_map(map__33815);
var runtime = map__33815__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33815__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33816 = p__33810;
var map__33816__$1 = cljs.core.__destructure_map(map__33816);
var msg = map__33816__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33816__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__33823 = cljs.core.deref(state_ref);
var map__33823__$1 = cljs.core.__destructure_map(map__33823);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33823__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33823__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__33825){
var map__33826 = p__33825;
var map__33826__$1 = cljs.core.__destructure_map(map__33826);
var runtime = map__33826__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33826__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4160__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__33827,msg){
var map__33828 = p__33827;
var map__33828__$1 = cljs.core.__destructure_map(map__33828);
var runtime = map__33828__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33828__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__33829,key,p__33830){
var map__33831 = p__33829;
var map__33831__$1 = cljs.core.__destructure_map(map__33831);
var state = map__33831__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33831__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__33832 = p__33830;
var map__33832__$1 = cljs.core.__destructure_map(map__33832);
var spec = map__33832__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33832__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__33834,key,spec){
var map__33835 = p__33834;
var map__33835__$1 = cljs.core.__destructure_map(map__33835);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33835__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__33836_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__33836_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__33837_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__33837_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__33838_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__33838_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__33839_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__33839_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__33840_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__33840_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__33852,key){
var map__33858 = p__33852;
var map__33858__$1 = cljs.core.__destructure_map(map__33858);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33858__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__33864,msg){
var map__33865 = p__33864;
var map__33865__$1 = cljs.core.__destructure_map(map__33865);
var runtime = map__33865__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33865__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__33875,p__33876){
var map__33877 = p__33875;
var map__33877__$1 = cljs.core.__destructure_map(map__33877);
var runtime = map__33877__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33877__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33878 = p__33876;
var map__33878__$1 = cljs.core.__destructure_map(map__33878);
var msg = map__33878__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33878__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33878__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__33880 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33882 = null;
var count__33883 = (0);
var i__33884 = (0);
while(true){
if((i__33884 < count__33883)){
var map__33890 = chunk__33882.cljs$core$IIndexed$_nth$arity$2(null,i__33884);
var map__33890__$1 = cljs.core.__destructure_map(map__33890);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33890__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33983 = seq__33880;
var G__33984 = chunk__33882;
var G__33985 = count__33883;
var G__33986 = (i__33884 + (1));
seq__33880 = G__33983;
chunk__33882 = G__33984;
count__33883 = G__33985;
i__33884 = G__33986;
continue;
} else {
var G__33987 = seq__33880;
var G__33988 = chunk__33882;
var G__33989 = count__33883;
var G__33990 = (i__33884 + (1));
seq__33880 = G__33987;
chunk__33882 = G__33988;
count__33883 = G__33989;
i__33884 = G__33990;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33880);
if(temp__5735__auto__){
var seq__33880__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33880__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__33880__$1);
var G__33996 = cljs.core.chunk_rest(seq__33880__$1);
var G__33997 = c__4591__auto__;
var G__33998 = cljs.core.count(c__4591__auto__);
var G__33999 = (0);
seq__33880 = G__33996;
chunk__33882 = G__33997;
count__33883 = G__33998;
i__33884 = G__33999;
continue;
} else {
var map__33908 = cljs.core.first(seq__33880__$1);
var map__33908__$1 = cljs.core.__destructure_map(map__33908);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33908__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__34000 = cljs.core.next(seq__33880__$1);
var G__34001 = null;
var G__34002 = (0);
var G__34003 = (0);
seq__33880 = G__34000;
chunk__33882 = G__34001;
count__33883 = G__34002;
i__33884 = G__34003;
continue;
} else {
var G__34004 = cljs.core.next(seq__33880__$1);
var G__34005 = null;
var G__34006 = (0);
var G__34007 = (0);
seq__33880 = G__34004;
chunk__33882 = G__34005;
count__33883 = G__34006;
i__33884 = G__34007;
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
