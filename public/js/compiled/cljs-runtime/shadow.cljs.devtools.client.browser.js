goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4777__auto__ = [];
var len__4771__auto___35737 = arguments.length;
var i__4772__auto___35738 = (0);
while(true){
if((i__4772__auto___35738 < len__4771__auto___35737)){
args__4777__auto__.push((arguments[i__4772__auto___35738]));

var G__35739 = (i__4772__auto___35738 + (1));
i__4772__auto___35738 = G__35739;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35534){
var G__35535 = cljs.core.first(seq35534);
var seq35534__$1 = cljs.core.next(seq35534);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35535,seq35534__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35538 = cljs.core.seq(sources);
var chunk__35539 = null;
var count__35540 = (0);
var i__35541 = (0);
while(true){
if((i__35541 < count__35540)){
var map__35559 = chunk__35539.cljs$core$IIndexed$_nth$arity$2(null,i__35541);
var map__35559__$1 = cljs.core.__destructure_map(map__35559);
var src = map__35559__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35559__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35559__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35559__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35559__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35560){var e_35740 = e35560;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35740);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35740.message)].join('')));
}

var G__35741 = seq__35538;
var G__35742 = chunk__35539;
var G__35743 = count__35540;
var G__35744 = (i__35541 + (1));
seq__35538 = G__35741;
chunk__35539 = G__35742;
count__35540 = G__35743;
i__35541 = G__35744;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35538);
if(temp__5735__auto__){
var seq__35538__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35538__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__35538__$1);
var G__35745 = cljs.core.chunk_rest(seq__35538__$1);
var G__35746 = c__4591__auto__;
var G__35747 = cljs.core.count(c__4591__auto__);
var G__35748 = (0);
seq__35538 = G__35745;
chunk__35539 = G__35746;
count__35540 = G__35747;
i__35541 = G__35748;
continue;
} else {
var map__35561 = cljs.core.first(seq__35538__$1);
var map__35561__$1 = cljs.core.__destructure_map(map__35561);
var src = map__35561__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35561__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35561__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35561__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35561__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35576){var e_35749 = e35576;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35749);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35749.message)].join('')));
}

var G__35750 = cljs.core.next(seq__35538__$1);
var G__35751 = null;
var G__35752 = (0);
var G__35753 = (0);
seq__35538 = G__35750;
chunk__35539 = G__35751;
count__35540 = G__35752;
i__35541 = G__35753;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35579 = cljs.core.seq(js_requires);
var chunk__35580 = null;
var count__35581 = (0);
var i__35582 = (0);
while(true){
if((i__35582 < count__35581)){
var js_ns = chunk__35580.cljs$core$IIndexed$_nth$arity$2(null,i__35582);
var require_str_35754 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35754);


var G__35755 = seq__35579;
var G__35756 = chunk__35580;
var G__35757 = count__35581;
var G__35758 = (i__35582 + (1));
seq__35579 = G__35755;
chunk__35580 = G__35756;
count__35581 = G__35757;
i__35582 = G__35758;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35579);
if(temp__5735__auto__){
var seq__35579__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35579__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__35579__$1);
var G__35759 = cljs.core.chunk_rest(seq__35579__$1);
var G__35760 = c__4591__auto__;
var G__35761 = cljs.core.count(c__4591__auto__);
var G__35762 = (0);
seq__35579 = G__35759;
chunk__35580 = G__35760;
count__35581 = G__35761;
i__35582 = G__35762;
continue;
} else {
var js_ns = cljs.core.first(seq__35579__$1);
var require_str_35763 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35763);


var G__35764 = cljs.core.next(seq__35579__$1);
var G__35765 = null;
var G__35766 = (0);
var G__35767 = (0);
seq__35579 = G__35764;
chunk__35580 = G__35765;
count__35581 = G__35766;
i__35582 = G__35767;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35584){
var map__35585 = p__35584;
var map__35585__$1 = cljs.core.__destructure_map(map__35585);
var msg = map__35585__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35585__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35585__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4564__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35586(s__35587){
return (new cljs.core.LazySeq(null,(function (){
var s__35587__$1 = s__35587;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35587__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35613 = cljs.core.first(xs__6292__auto__);
var map__35613__$1 = cljs.core.__destructure_map(map__35613);
var src = map__35613__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35613__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35613__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4560__auto__ = ((function (s__35587__$1,map__35613,map__35613__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35585,map__35585__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35586_$_iter__35588(s__35589){
return (new cljs.core.LazySeq(null,((function (s__35587__$1,map__35613,map__35613__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35585,map__35585__$1,msg,info,reload_info){
return (function (){
var s__35589__$1 = s__35589;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35589__$1);
if(temp__5735__auto____$1){
var s__35589__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35589__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__35589__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__35591 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__35590 = (0);
while(true){
if((i__35590 < size__4563__auto__)){
var warning = cljs.core._nth(c__4562__auto__,i__35590);
cljs.core.chunk_append(b__35591,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35768 = (i__35590 + (1));
i__35590 = G__35768;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35591),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35586_$_iter__35588(cljs.core.chunk_rest(s__35589__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35591),null);
}
} else {
var warning = cljs.core.first(s__35589__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35586_$_iter__35588(cljs.core.rest(s__35589__$2)));
}
} else {
return null;
}
break;
}
});})(s__35587__$1,map__35613,map__35613__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35585,map__35585__$1,msg,info,reload_info))
,null,null));
});})(s__35587__$1,map__35613,map__35613__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35585,map__35585__$1,msg,info,reload_info))
;
var fs__4561__auto__ = cljs.core.seq(iterys__4560__auto__(warnings));
if(fs__4561__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4561__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35586(cljs.core.rest(s__35587__$1)));
} else {
var G__35769 = cljs.core.rest(s__35587__$1);
s__35587__$1 = G__35769;
continue;
}
} else {
var G__35770 = cljs.core.rest(s__35587__$1);
s__35587__$1 = G__35770;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__35624_35771 = cljs.core.seq(warnings);
var chunk__35625_35772 = null;
var count__35626_35773 = (0);
var i__35627_35774 = (0);
while(true){
if((i__35627_35774 < count__35626_35773)){
var map__35634_35775 = chunk__35625_35772.cljs$core$IIndexed$_nth$arity$2(null,i__35627_35774);
var map__35634_35776__$1 = cljs.core.__destructure_map(map__35634_35775);
var w_35777 = map__35634_35776__$1;
var msg_35778__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35634_35776__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35634_35776__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35780 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35634_35776__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35634_35776__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35781)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35779),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35780),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35778__$1)].join(''));


var G__35782 = seq__35624_35771;
var G__35783 = chunk__35625_35772;
var G__35784 = count__35626_35773;
var G__35785 = (i__35627_35774 + (1));
seq__35624_35771 = G__35782;
chunk__35625_35772 = G__35783;
count__35626_35773 = G__35784;
i__35627_35774 = G__35785;
continue;
} else {
var temp__5735__auto___35786 = cljs.core.seq(seq__35624_35771);
if(temp__5735__auto___35786){
var seq__35624_35787__$1 = temp__5735__auto___35786;
if(cljs.core.chunked_seq_QMARK_(seq__35624_35787__$1)){
var c__4591__auto___35788 = cljs.core.chunk_first(seq__35624_35787__$1);
var G__35789 = cljs.core.chunk_rest(seq__35624_35787__$1);
var G__35790 = c__4591__auto___35788;
var G__35791 = cljs.core.count(c__4591__auto___35788);
var G__35792 = (0);
seq__35624_35771 = G__35789;
chunk__35625_35772 = G__35790;
count__35626_35773 = G__35791;
i__35627_35774 = G__35792;
continue;
} else {
var map__35635_35793 = cljs.core.first(seq__35624_35787__$1);
var map__35635_35794__$1 = cljs.core.__destructure_map(map__35635_35793);
var w_35795 = map__35635_35794__$1;
var msg_35796__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35635_35794__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35635_35794__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35635_35794__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35635_35794__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35799)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35797),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35798),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35796__$1)].join(''));


var G__35800 = cljs.core.next(seq__35624_35787__$1);
var G__35801 = null;
var G__35802 = (0);
var G__35803 = (0);
seq__35624_35771 = G__35800;
chunk__35625_35772 = G__35801;
count__35626_35773 = G__35802;
i__35627_35774 = G__35803;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35583_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35583_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35636){
var map__35637 = p__35636;
var map__35637__$1 = cljs.core.__destructure_map(map__35637);
var msg = map__35637__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35637__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35638 = cljs.core.seq(updates);
var chunk__35640 = null;
var count__35641 = (0);
var i__35642 = (0);
while(true){
if((i__35642 < count__35641)){
var path = chunk__35640.cljs$core$IIndexed$_nth$arity$2(null,i__35642);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35672_35804 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35676_35805 = null;
var count__35677_35806 = (0);
var i__35678_35807 = (0);
while(true){
if((i__35678_35807 < count__35677_35806)){
var node_35808 = chunk__35676_35805.cljs$core$IIndexed$_nth$arity$2(null,i__35678_35807);
if(cljs.core.not(node_35808.shadow$old)){
var path_match_35809 = shadow.cljs.devtools.client.browser.match_paths(node_35808.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35809)){
var new_link_35810 = (function (){var G__35684 = node_35808.cloneNode(true);
G__35684.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35809),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35684;
})();
(node_35808.shadow$old = true);

(new_link_35810.onload = ((function (seq__35672_35804,chunk__35676_35805,count__35677_35806,i__35678_35807,seq__35638,chunk__35640,count__35641,i__35642,new_link_35810,path_match_35809,node_35808,path,map__35637,map__35637__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35808);
});})(seq__35672_35804,chunk__35676_35805,count__35677_35806,i__35678_35807,seq__35638,chunk__35640,count__35641,i__35642,new_link_35810,path_match_35809,node_35808,path,map__35637,map__35637__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35809], 0));

goog.dom.insertSiblingAfter(new_link_35810,node_35808);


var G__35811 = seq__35672_35804;
var G__35812 = chunk__35676_35805;
var G__35813 = count__35677_35806;
var G__35814 = (i__35678_35807 + (1));
seq__35672_35804 = G__35811;
chunk__35676_35805 = G__35812;
count__35677_35806 = G__35813;
i__35678_35807 = G__35814;
continue;
} else {
var G__35815 = seq__35672_35804;
var G__35816 = chunk__35676_35805;
var G__35817 = count__35677_35806;
var G__35818 = (i__35678_35807 + (1));
seq__35672_35804 = G__35815;
chunk__35676_35805 = G__35816;
count__35677_35806 = G__35817;
i__35678_35807 = G__35818;
continue;
}
} else {
var G__35819 = seq__35672_35804;
var G__35820 = chunk__35676_35805;
var G__35821 = count__35677_35806;
var G__35822 = (i__35678_35807 + (1));
seq__35672_35804 = G__35819;
chunk__35676_35805 = G__35820;
count__35677_35806 = G__35821;
i__35678_35807 = G__35822;
continue;
}
} else {
var temp__5735__auto___35823 = cljs.core.seq(seq__35672_35804);
if(temp__5735__auto___35823){
var seq__35672_35824__$1 = temp__5735__auto___35823;
if(cljs.core.chunked_seq_QMARK_(seq__35672_35824__$1)){
var c__4591__auto___35825 = cljs.core.chunk_first(seq__35672_35824__$1);
var G__35826 = cljs.core.chunk_rest(seq__35672_35824__$1);
var G__35827 = c__4591__auto___35825;
var G__35828 = cljs.core.count(c__4591__auto___35825);
var G__35829 = (0);
seq__35672_35804 = G__35826;
chunk__35676_35805 = G__35827;
count__35677_35806 = G__35828;
i__35678_35807 = G__35829;
continue;
} else {
var node_35830 = cljs.core.first(seq__35672_35824__$1);
if(cljs.core.not(node_35830.shadow$old)){
var path_match_35831 = shadow.cljs.devtools.client.browser.match_paths(node_35830.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35831)){
var new_link_35832 = (function (){var G__35691 = node_35830.cloneNode(true);
G__35691.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35831),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35691;
})();
(node_35830.shadow$old = true);

(new_link_35832.onload = ((function (seq__35672_35804,chunk__35676_35805,count__35677_35806,i__35678_35807,seq__35638,chunk__35640,count__35641,i__35642,new_link_35832,path_match_35831,node_35830,seq__35672_35824__$1,temp__5735__auto___35823,path,map__35637,map__35637__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35830);
});})(seq__35672_35804,chunk__35676_35805,count__35677_35806,i__35678_35807,seq__35638,chunk__35640,count__35641,i__35642,new_link_35832,path_match_35831,node_35830,seq__35672_35824__$1,temp__5735__auto___35823,path,map__35637,map__35637__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35831], 0));

goog.dom.insertSiblingAfter(new_link_35832,node_35830);


var G__35833 = cljs.core.next(seq__35672_35824__$1);
var G__35834 = null;
var G__35835 = (0);
var G__35836 = (0);
seq__35672_35804 = G__35833;
chunk__35676_35805 = G__35834;
count__35677_35806 = G__35835;
i__35678_35807 = G__35836;
continue;
} else {
var G__35837 = cljs.core.next(seq__35672_35824__$1);
var G__35838 = null;
var G__35839 = (0);
var G__35840 = (0);
seq__35672_35804 = G__35837;
chunk__35676_35805 = G__35838;
count__35677_35806 = G__35839;
i__35678_35807 = G__35840;
continue;
}
} else {
var G__35841 = cljs.core.next(seq__35672_35824__$1);
var G__35842 = null;
var G__35843 = (0);
var G__35844 = (0);
seq__35672_35804 = G__35841;
chunk__35676_35805 = G__35842;
count__35677_35806 = G__35843;
i__35678_35807 = G__35844;
continue;
}
}
} else {
}
}
break;
}


var G__35845 = seq__35638;
var G__35846 = chunk__35640;
var G__35847 = count__35641;
var G__35848 = (i__35642 + (1));
seq__35638 = G__35845;
chunk__35640 = G__35846;
count__35641 = G__35847;
i__35642 = G__35848;
continue;
} else {
var G__35849 = seq__35638;
var G__35850 = chunk__35640;
var G__35851 = count__35641;
var G__35852 = (i__35642 + (1));
seq__35638 = G__35849;
chunk__35640 = G__35850;
count__35641 = G__35851;
i__35642 = G__35852;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35638);
if(temp__5735__auto__){
var seq__35638__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35638__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__35638__$1);
var G__35853 = cljs.core.chunk_rest(seq__35638__$1);
var G__35854 = c__4591__auto__;
var G__35855 = cljs.core.count(c__4591__auto__);
var G__35856 = (0);
seq__35638 = G__35853;
chunk__35640 = G__35854;
count__35641 = G__35855;
i__35642 = G__35856;
continue;
} else {
var path = cljs.core.first(seq__35638__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35694_35857 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35698_35858 = null;
var count__35699_35859 = (0);
var i__35700_35860 = (0);
while(true){
if((i__35700_35860 < count__35699_35859)){
var node_35861 = chunk__35698_35858.cljs$core$IIndexed$_nth$arity$2(null,i__35700_35860);
if(cljs.core.not(node_35861.shadow$old)){
var path_match_35862 = shadow.cljs.devtools.client.browser.match_paths(node_35861.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35862)){
var new_link_35863 = (function (){var G__35713 = node_35861.cloneNode(true);
G__35713.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35862),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35713;
})();
(node_35861.shadow$old = true);

(new_link_35863.onload = ((function (seq__35694_35857,chunk__35698_35858,count__35699_35859,i__35700_35860,seq__35638,chunk__35640,count__35641,i__35642,new_link_35863,path_match_35862,node_35861,path,seq__35638__$1,temp__5735__auto__,map__35637,map__35637__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35861);
});})(seq__35694_35857,chunk__35698_35858,count__35699_35859,i__35700_35860,seq__35638,chunk__35640,count__35641,i__35642,new_link_35863,path_match_35862,node_35861,path,seq__35638__$1,temp__5735__auto__,map__35637,map__35637__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35862], 0));

goog.dom.insertSiblingAfter(new_link_35863,node_35861);


var G__35864 = seq__35694_35857;
var G__35865 = chunk__35698_35858;
var G__35866 = count__35699_35859;
var G__35867 = (i__35700_35860 + (1));
seq__35694_35857 = G__35864;
chunk__35698_35858 = G__35865;
count__35699_35859 = G__35866;
i__35700_35860 = G__35867;
continue;
} else {
var G__35868 = seq__35694_35857;
var G__35869 = chunk__35698_35858;
var G__35870 = count__35699_35859;
var G__35871 = (i__35700_35860 + (1));
seq__35694_35857 = G__35868;
chunk__35698_35858 = G__35869;
count__35699_35859 = G__35870;
i__35700_35860 = G__35871;
continue;
}
} else {
var G__35872 = seq__35694_35857;
var G__35873 = chunk__35698_35858;
var G__35874 = count__35699_35859;
var G__35875 = (i__35700_35860 + (1));
seq__35694_35857 = G__35872;
chunk__35698_35858 = G__35873;
count__35699_35859 = G__35874;
i__35700_35860 = G__35875;
continue;
}
} else {
var temp__5735__auto___35876__$1 = cljs.core.seq(seq__35694_35857);
if(temp__5735__auto___35876__$1){
var seq__35694_35877__$1 = temp__5735__auto___35876__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35694_35877__$1)){
var c__4591__auto___35878 = cljs.core.chunk_first(seq__35694_35877__$1);
var G__35879 = cljs.core.chunk_rest(seq__35694_35877__$1);
var G__35880 = c__4591__auto___35878;
var G__35881 = cljs.core.count(c__4591__auto___35878);
var G__35882 = (0);
seq__35694_35857 = G__35879;
chunk__35698_35858 = G__35880;
count__35699_35859 = G__35881;
i__35700_35860 = G__35882;
continue;
} else {
var node_35883 = cljs.core.first(seq__35694_35877__$1);
if(cljs.core.not(node_35883.shadow$old)){
var path_match_35884 = shadow.cljs.devtools.client.browser.match_paths(node_35883.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35884)){
var new_link_35885 = (function (){var G__35714 = node_35883.cloneNode(true);
G__35714.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35884),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35714;
})();
(node_35883.shadow$old = true);

(new_link_35885.onload = ((function (seq__35694_35857,chunk__35698_35858,count__35699_35859,i__35700_35860,seq__35638,chunk__35640,count__35641,i__35642,new_link_35885,path_match_35884,node_35883,seq__35694_35877__$1,temp__5735__auto___35876__$1,path,seq__35638__$1,temp__5735__auto__,map__35637,map__35637__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35883);
});})(seq__35694_35857,chunk__35698_35858,count__35699_35859,i__35700_35860,seq__35638,chunk__35640,count__35641,i__35642,new_link_35885,path_match_35884,node_35883,seq__35694_35877__$1,temp__5735__auto___35876__$1,path,seq__35638__$1,temp__5735__auto__,map__35637,map__35637__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35884], 0));

goog.dom.insertSiblingAfter(new_link_35885,node_35883);


var G__35886 = cljs.core.next(seq__35694_35877__$1);
var G__35887 = null;
var G__35888 = (0);
var G__35889 = (0);
seq__35694_35857 = G__35886;
chunk__35698_35858 = G__35887;
count__35699_35859 = G__35888;
i__35700_35860 = G__35889;
continue;
} else {
var G__35890 = cljs.core.next(seq__35694_35877__$1);
var G__35891 = null;
var G__35892 = (0);
var G__35893 = (0);
seq__35694_35857 = G__35890;
chunk__35698_35858 = G__35891;
count__35699_35859 = G__35892;
i__35700_35860 = G__35893;
continue;
}
} else {
var G__35894 = cljs.core.next(seq__35694_35877__$1);
var G__35895 = null;
var G__35896 = (0);
var G__35897 = (0);
seq__35694_35857 = G__35894;
chunk__35698_35858 = G__35895;
count__35699_35859 = G__35896;
i__35700_35860 = G__35897;
continue;
}
}
} else {
}
}
break;
}


var G__35898 = cljs.core.next(seq__35638__$1);
var G__35899 = null;
var G__35900 = (0);
var G__35901 = (0);
seq__35638 = G__35898;
chunk__35640 = G__35899;
count__35641 = G__35900;
i__35642 = G__35901;
continue;
} else {
var G__35902 = cljs.core.next(seq__35638__$1);
var G__35903 = null;
var G__35904 = (0);
var G__35905 = (0);
seq__35638 = G__35902;
chunk__35640 = G__35903;
count__35641 = G__35904;
i__35642 = G__35905;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__35715){
var map__35716 = p__35715;
var map__35716__$1 = cljs.core.__destructure_map(map__35716);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35716__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__35717){
var map__35718 = p__35717;
var map__35718__$1 = cljs.core.__destructure_map(map__35718);
var _ = map__35718__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35718__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__35719,done,error){
var map__35720 = p__35719;
var map__35720__$1 = cljs.core.__destructure_map(map__35720);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35720__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__35721,done,error){
var map__35722 = p__35721;
var map__35722__$1 = cljs.core.__destructure_map(map__35722);
var msg = map__35722__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35722__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35722__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35722__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35723){
var map__35724 = p__35723;
var map__35724__$1 = cljs.core.__destructure_map(map__35724);
var src = map__35724__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35724__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4149__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4149__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__35725 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__35725) : done.call(null,G__35725));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__35726){
var map__35727 = p__35726;
var map__35727__$1 = cljs.core.__destructure_map(map__35727);
var msg__$1 = map__35727__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35727__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e35728){var ex = e35728;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__35729){
var map__35730 = p__35729;
var map__35730__$1 = cljs.core.__destructure_map(map__35730);
var env = map__35730__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35730__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__35731){
var map__35732 = p__35731;
var map__35732__$1 = cljs.core.__destructure_map(map__35732);
var msg = map__35732__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35732__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__35733){
var map__35734 = p__35733;
var map__35734__$1 = cljs.core.__destructure_map(map__35734);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35734__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35734__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__35735){
var map__35736 = p__35735;
var map__35736__$1 = cljs.core.__destructure_map(map__35736);
var svc = map__35736__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35736__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
