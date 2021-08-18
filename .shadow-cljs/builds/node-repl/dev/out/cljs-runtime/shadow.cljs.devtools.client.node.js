goog.provide('shadow.cljs.devtools.client.node');
shadow.cljs.devtools.client.node.node_eval = (function shadow$cljs$devtools$client$node$node_eval(p__33976){
var map__33977 = p__33976;
var map__33977__$1 = cljs.core.__destructure_map(map__33977);
var msg = map__33977__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33977__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var source_map_json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33977__$1,new cljs.core.Keyword(null,"source-map-json","source-map-json",-299460036));
var result = SHADOW_NODE_EVAL(js,source_map_json);
return result;
});
shadow.cljs.devtools.client.node.is_loaded_QMARK_ = (function shadow$cljs$devtools$client$node$is_loaded_QMARK_(src){
return goog.object.get(SHADOW_IMPORTED,src) === true;
});
shadow.cljs.devtools.client.node.closure_import = (function shadow$cljs$devtools$client$node$closure_import(src){
if(typeof src === 'string'){
} else {
throw (new Error("Assert failed: (string? src)"));
}

return SHADOW_IMPORT(src);
});
shadow.cljs.devtools.client.node.handle_build_complete = (function shadow$cljs$devtools$client$node$handle_build_complete(runtime,p__33978){
var map__33984 = p__33978;
var map__33984__$1 = cljs.core.__destructure_map(map__33984);
var msg = map__33984__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33984__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33984__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__33985 = info;
var map__33985__$1 = cljs.core.__destructure_map(map__33985);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33985__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33985__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33985__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var files_to_require = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-name","output-name",-1769107767),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__33986){
var map__33987 = p__33986;
var map__33987__$1 = cljs.core.__destructure_map(map__33987);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33987__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33987__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(compiled,resource_id)) || (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__33988){
var map__33989 = p__33988;
var map__33989__$1 = cljs.core.__destructure_map(map__33989);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33989__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),sources))));
if(cljs.core.seq(files_to_require)){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2(msg,(function (){
var seq__33990 = cljs.core.seq(files_to_require);
var chunk__33991 = null;
var count__33992 = (0);
var i__33993 = (0);
while(true){
if((i__33993 < count__33992)){
var src = chunk__33991.cljs$core$IIndexed$_nth$arity$2(null,i__33993);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__34067 = seq__33990;
var G__34068 = chunk__33991;
var G__34069 = count__33992;
var G__34070 = (i__33993 + (1));
seq__33990 = G__34067;
chunk__33991 = G__34068;
count__33992 = G__34069;
i__33993 = G__34070;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33990);
if(temp__5735__auto__){
var seq__33990__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33990__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__33990__$1);
var G__34072 = cljs.core.chunk_rest(seq__33990__$1);
var G__34073 = c__4591__auto__;
var G__34074 = cljs.core.count(c__4591__auto__);
var G__34075 = (0);
seq__33990 = G__34072;
chunk__33991 = G__34073;
count__33992 = G__34074;
i__33993 = G__34075;
continue;
} else {
var src = cljs.core.first(seq__33990__$1);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__34076 = cljs.core.next(seq__33990__$1);
var G__34077 = null;
var G__34078 = (0);
var G__34079 = (0);
seq__33990 = G__34076;
chunk__33991 = G__34077;
count__33992 = G__34078;
i__33993 = G__34079;
continue;
}
} else {
return null;
}
}
break;
}
}));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.node.client_info = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"desc","desc",2093485764),["Node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(process.version)].join('')], null);
shadow.cljs.devtools.client.node.start = (function shadow$cljs$devtools$client$node$start(runtime){
var ws_url = shadow.cljs.devtools.client.env.get_ws_relay_url();
var socket = (new shadow.js.shim.module$ws(ws_url,({"rejectUnauthorized": false})));
var ws_active_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
socket.on("message",(function (data){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_msg(runtime,data);
} else {
return null;
}
}));

socket.on("open",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_open(runtime,e);
} else {
return null;
}
}));

socket.on("close",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_close(runtime,e,ws_url);
} else {
return null;
}
}));

socket.on("error",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_error(runtime,e);
} else {
return null;
}
}));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"socket","socket",59137063),socket,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391),ws_active_ref], null);
});
shadow.cljs.devtools.client.node.send = (function shadow$cljs$devtools$client$node$send(p__33996,msg){
var map__33997 = p__33996;
var map__33997__$1 = cljs.core.__destructure_map(map__33997);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33997__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
return socket.send(msg);
});
shadow.cljs.devtools.client.node.stop = (function shadow$cljs$devtools$client$node$stop(p__34007){
var map__34008 = p__34007;
var map__34008__$1 = cljs.core.__destructure_map(map__34008);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34008__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
var ws_active_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34008__$1,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391));
cljs.core.reset_BANG_(ws_active_ref,false);

return socket.close();
});
if((shadow.cljs.devtools.client.env.worker_client_id > (0))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return SHADOW_NODE_EVAL(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,msg){
var this$__$1 = this;
return shadow.cljs.devtools.client.node.node_eval(msg);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__34009,done,error){
var map__34010 = p__34009;
var map__34010__$1 = cljs.core.__destructure_map(map__34010);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34010__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
try{var seq__34012_34093 = cljs.core.seq(repl_sources);
var chunk__34014_34094 = null;
var count__34015_34095 = (0);
var i__34016_34096 = (0);
while(true){
if((i__34016_34096 < count__34015_34095)){
var map__34021_34097 = chunk__34014_34094.cljs$core$IIndexed$_nth$arity$2(null,i__34016_34096);
var map__34021_34098__$1 = cljs.core.__destructure_map(map__34021_34097);
var src_34099 = map__34021_34098__$1;
var output_name_34100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34021_34098__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_34100)))){
shadow.cljs.devtools.client.node.closure_import(output_name_34100);


var G__34122 = seq__34012_34093;
var G__34123 = chunk__34014_34094;
var G__34124 = count__34015_34095;
var G__34125 = (i__34016_34096 + (1));
seq__34012_34093 = G__34122;
chunk__34014_34094 = G__34123;
count__34015_34095 = G__34124;
i__34016_34096 = G__34125;
continue;
} else {
var G__34127 = seq__34012_34093;
var G__34128 = chunk__34014_34094;
var G__34129 = count__34015_34095;
var G__34130 = (i__34016_34096 + (1));
seq__34012_34093 = G__34127;
chunk__34014_34094 = G__34128;
count__34015_34095 = G__34129;
i__34016_34096 = G__34130;
continue;
}
} else {
var temp__5735__auto___34131 = cljs.core.seq(seq__34012_34093);
if(temp__5735__auto___34131){
var seq__34012_34132__$1 = temp__5735__auto___34131;
if(cljs.core.chunked_seq_QMARK_(seq__34012_34132__$1)){
var c__4591__auto___34133 = cljs.core.chunk_first(seq__34012_34132__$1);
var G__34134 = cljs.core.chunk_rest(seq__34012_34132__$1);
var G__34135 = c__4591__auto___34133;
var G__34136 = cljs.core.count(c__4591__auto___34133);
var G__34137 = (0);
seq__34012_34093 = G__34134;
chunk__34014_34094 = G__34135;
count__34015_34095 = G__34136;
i__34016_34096 = G__34137;
continue;
} else {
var map__34022_34138 = cljs.core.first(seq__34012_34132__$1);
var map__34022_34139__$1 = cljs.core.__destructure_map(map__34022_34138);
var src_34140 = map__34022_34139__$1;
var output_name_34141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34022_34139__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_34141)))){
shadow.cljs.devtools.client.node.closure_import(output_name_34141);


var G__34142 = cljs.core.next(seq__34012_34132__$1);
var G__34143 = null;
var G__34144 = (0);
var G__34145 = (0);
seq__34012_34093 = G__34142;
chunk__34014_34094 = G__34143;
count__34015_34095 = G__34144;
i__34016_34096 = G__34145;
continue;
} else {
var G__34146 = cljs.core.next(seq__34012_34132__$1);
var G__34147 = null;
var G__34148 = (0);
var G__34149 = (0);
seq__34012_34093 = G__34146;
chunk__34014_34094 = G__34147;
count__34015_34095 = G__34148;
i__34016_34096 = G__34149;
continue;
}
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}catch (e34011){var e = e34011;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (this$,p__34023,done,error){
var map__34024 = p__34023;
var map__34024__$1 = cljs.core.__destructure_map(map__34024);
var msg = map__34024__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34024__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34024__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var this$__$1 = this;
try{var seq__34026_34150 = cljs.core.seq(sources);
var chunk__34027_34151 = null;
var count__34028_34152 = (0);
var i__34029_34153 = (0);
while(true){
if((i__34029_34153 < count__34028_34152)){
var map__34048_34154 = chunk__34027_34151.cljs$core$IIndexed$_nth$arity$2(null,i__34029_34153);
var map__34048_34155__$1 = cljs.core.__destructure_map(map__34048_34154);
var src_34156 = map__34048_34155__$1;
var provides_34157 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34048_34155__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_34158 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34048_34155__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__4160__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_34158)));
if(or__4160__auto__){
return or__4160__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_34157);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_34158);
} else {
}


var G__34159 = seq__34026_34150;
var G__34160 = chunk__34027_34151;
var G__34161 = count__34028_34152;
var G__34162 = (i__34029_34153 + (1));
seq__34026_34150 = G__34159;
chunk__34027_34151 = G__34160;
count__34028_34152 = G__34161;
i__34029_34153 = G__34162;
continue;
} else {
var temp__5735__auto___34163 = cljs.core.seq(seq__34026_34150);
if(temp__5735__auto___34163){
var seq__34026_34164__$1 = temp__5735__auto___34163;
if(cljs.core.chunked_seq_QMARK_(seq__34026_34164__$1)){
var c__4591__auto___34165 = cljs.core.chunk_first(seq__34026_34164__$1);
var G__34166 = cljs.core.chunk_rest(seq__34026_34164__$1);
var G__34167 = c__4591__auto___34165;
var G__34168 = cljs.core.count(c__4591__auto___34165);
var G__34169 = (0);
seq__34026_34150 = G__34166;
chunk__34027_34151 = G__34167;
count__34028_34152 = G__34168;
i__34029_34153 = G__34169;
continue;
} else {
var map__34049_34170 = cljs.core.first(seq__34026_34164__$1);
var map__34049_34171__$1 = cljs.core.__destructure_map(map__34049_34170);
var src_34172 = map__34049_34171__$1;
var provides_34173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34049_34171__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_34174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34049_34171__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__4160__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_34174)));
if(or__4160__auto__){
return or__4160__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_34173);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_34174);
} else {
}


var G__34176 = cljs.core.next(seq__34026_34164__$1);
var G__34177 = null;
var G__34178 = (0);
var G__34179 = (0);
seq__34026_34150 = G__34176;
chunk__34027_34151 = G__34177;
count__34028_34152 = G__34178;
i__34029_34153 = G__34179;
continue;
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}catch (e34025){var e = e34025;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null,e));
}}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),cljs.core.PersistentHashSet.EMPTY,(function (p__34054){
var map__34055 = p__34054;
var map__34055__$1 = cljs.core.__destructure_map(map__34055);
var env = map__34055__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34055__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
shadow.cljs.devtools.client.env.patch_goog_BANG_();

if(shadow.cljs.devtools.client.env.log){
return console.log(["shadow-cljs - #",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (){
return console.warn("The shadow-cljs Websocket was disconnected.");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
return console.error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.node.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__34058){
var map__34059 = p__34058;
var map__34059__$1 = cljs.core.__destructure_map(map__34059);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34059__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34059__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
return console.warn("shadow-cljs - The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
return console.warn("shadow-cljs - A new watch for this build was started, restart of this process required!");
} else {
return null;

}
}
})], null)], null));

return svc;
}),(function (p__34065){
var map__34066 = p__34065;
var map__34066__$1 = cljs.core.__destructure_map(map__34066);
var svc = map__34066__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34066__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.node.client_info,shadow.cljs.devtools.client.node.start,shadow.cljs.devtools.client.node.send,shadow.cljs.devtools.client.node.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.node.js.map
