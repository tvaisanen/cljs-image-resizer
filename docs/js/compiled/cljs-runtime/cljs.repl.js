goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34771){
var map__34772 = p__34771;
var map__34772__$1 = cljs.core.__destructure_map(map__34772);
var m = map__34772__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34772__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34772__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4160__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34776_34974 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34777_34975 = null;
var count__34778_34976 = (0);
var i__34779_34977 = (0);
while(true){
if((i__34779_34977 < count__34778_34976)){
var f_34979 = chunk__34777_34975.cljs$core$IIndexed$_nth$arity$2(null,i__34779_34977);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34979], 0));


var G__34980 = seq__34776_34974;
var G__34981 = chunk__34777_34975;
var G__34982 = count__34778_34976;
var G__34983 = (i__34779_34977 + (1));
seq__34776_34974 = G__34980;
chunk__34777_34975 = G__34981;
count__34778_34976 = G__34982;
i__34779_34977 = G__34983;
continue;
} else {
var temp__5735__auto___34984 = cljs.core.seq(seq__34776_34974);
if(temp__5735__auto___34984){
var seq__34776_34985__$1 = temp__5735__auto___34984;
if(cljs.core.chunked_seq_QMARK_(seq__34776_34985__$1)){
var c__4591__auto___34990 = cljs.core.chunk_first(seq__34776_34985__$1);
var G__34991 = cljs.core.chunk_rest(seq__34776_34985__$1);
var G__34992 = c__4591__auto___34990;
var G__34993 = cljs.core.count(c__4591__auto___34990);
var G__34994 = (0);
seq__34776_34974 = G__34991;
chunk__34777_34975 = G__34992;
count__34778_34976 = G__34993;
i__34779_34977 = G__34994;
continue;
} else {
var f_34995 = cljs.core.first(seq__34776_34985__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34995], 0));


var G__34996 = cljs.core.next(seq__34776_34985__$1);
var G__34997 = null;
var G__34998 = (0);
var G__34999 = (0);
seq__34776_34974 = G__34996;
chunk__34777_34975 = G__34997;
count__34778_34976 = G__34998;
i__34779_34977 = G__34999;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35002 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4160__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35002], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35002)))?cljs.core.second(arglists_35002):arglists_35002)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34784_35003 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34785_35004 = null;
var count__34786_35005 = (0);
var i__34787_35006 = (0);
while(true){
if((i__34787_35006 < count__34786_35005)){
var vec__34796_35007 = chunk__34785_35004.cljs$core$IIndexed$_nth$arity$2(null,i__34787_35006);
var name_35008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34796_35007,(0),null);
var map__34799_35009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34796_35007,(1),null);
var map__34799_35010__$1 = cljs.core.__destructure_map(map__34799_35009);
var doc_35011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34799_35010__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35012 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34799_35010__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35008], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35012], 0));

if(cljs.core.truth_(doc_35011)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35011], 0));
} else {
}


var G__35013 = seq__34784_35003;
var G__35014 = chunk__34785_35004;
var G__35015 = count__34786_35005;
var G__35016 = (i__34787_35006 + (1));
seq__34784_35003 = G__35013;
chunk__34785_35004 = G__35014;
count__34786_35005 = G__35015;
i__34787_35006 = G__35016;
continue;
} else {
var temp__5735__auto___35018 = cljs.core.seq(seq__34784_35003);
if(temp__5735__auto___35018){
var seq__34784_35019__$1 = temp__5735__auto___35018;
if(cljs.core.chunked_seq_QMARK_(seq__34784_35019__$1)){
var c__4591__auto___35020 = cljs.core.chunk_first(seq__34784_35019__$1);
var G__35021 = cljs.core.chunk_rest(seq__34784_35019__$1);
var G__35022 = c__4591__auto___35020;
var G__35023 = cljs.core.count(c__4591__auto___35020);
var G__35024 = (0);
seq__34784_35003 = G__35021;
chunk__34785_35004 = G__35022;
count__34786_35005 = G__35023;
i__34787_35006 = G__35024;
continue;
} else {
var vec__34802_35025 = cljs.core.first(seq__34784_35019__$1);
var name_35026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34802_35025,(0),null);
var map__34805_35027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34802_35025,(1),null);
var map__34805_35028__$1 = cljs.core.__destructure_map(map__34805_35027);
var doc_35029 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34805_35028__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35030 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34805_35028__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35026], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35030], 0));

if(cljs.core.truth_(doc_35029)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35029], 0));
} else {
}


var G__35031 = cljs.core.next(seq__34784_35019__$1);
var G__35032 = null;
var G__35033 = (0);
var G__35034 = (0);
seq__34784_35003 = G__35031;
chunk__34785_35004 = G__35032;
count__34786_35005 = G__35033;
i__34787_35006 = G__35034;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34807 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34808 = null;
var count__34809 = (0);
var i__34810 = (0);
while(true){
if((i__34810 < count__34809)){
var role = chunk__34808.cljs$core$IIndexed$_nth$arity$2(null,i__34810);
var temp__5735__auto___35036__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35036__$1)){
var spec_35037 = temp__5735__auto___35036__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35037)], 0));
} else {
}


var G__35038 = seq__34807;
var G__35039 = chunk__34808;
var G__35040 = count__34809;
var G__35041 = (i__34810 + (1));
seq__34807 = G__35038;
chunk__34808 = G__35039;
count__34809 = G__35040;
i__34810 = G__35041;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__34807);
if(temp__5735__auto____$1){
var seq__34807__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34807__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__34807__$1);
var G__35042 = cljs.core.chunk_rest(seq__34807__$1);
var G__35043 = c__4591__auto__;
var G__35044 = cljs.core.count(c__4591__auto__);
var G__35045 = (0);
seq__34807 = G__35042;
chunk__34808 = G__35043;
count__34809 = G__35044;
i__34810 = G__35045;
continue;
} else {
var role = cljs.core.first(seq__34807__$1);
var temp__5735__auto___35046__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35046__$2)){
var spec_35047 = temp__5735__auto___35046__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35047)], 0));
} else {
}


var G__35048 = cljs.core.next(seq__34807__$1);
var G__35049 = null;
var G__35050 = (0);
var G__35051 = (0);
seq__34807 = G__35048;
chunk__34808 = G__35049;
count__34809 = G__35050;
i__34810 = G__35051;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35052 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35053 = cljs.core.ex_cause(t);
via = G__35052;
t = G__35053;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34832 = datafied_throwable;
var map__34832__$1 = cljs.core.__destructure_map(map__34832);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34832__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34832__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34832__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34833 = cljs.core.last(via);
var map__34833__$1 = cljs.core.__destructure_map(map__34833);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34833__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34833__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34833__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34834 = data;
var map__34834__$1 = cljs.core.__destructure_map(map__34834);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34834__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34834__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34834__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34835 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34835__$1 = cljs.core.__destructure_map(map__34835);
var top_data = map__34835__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34835__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34843 = phase;
var G__34843__$1 = (((G__34843 instanceof cljs.core.Keyword))?G__34843.fqn:null);
switch (G__34843__$1) {
case "read-source":
var map__34844 = data;
var map__34844__$1 = cljs.core.__destructure_map(map__34844);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34844__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34844__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34845 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34845__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34845,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34845);
var G__34845__$2 = (cljs.core.truth_((function (){var fexpr__34850 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34850.cljs$core$IFn$_invoke$arity$1 ? fexpr__34850.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34850.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34845__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34845__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34845__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34845__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34858 = top_data;
var G__34858__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34858,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34858);
var G__34858__$2 = (cljs.core.truth_((function (){var fexpr__34862 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34862.cljs$core$IFn$_invoke$arity$1 ? fexpr__34862.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34862.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34858__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34858__$1);
var G__34858__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34858__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34858__$2);
var G__34858__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34858__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34858__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34858__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34858__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34867 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34867,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34867,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34867,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34867,(3),null);
var G__34875 = top_data;
var G__34875__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34875,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34875);
var G__34875__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34875__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34875__$1);
var G__34875__$3 = (cljs.core.truth_((function (){var and__4149__auto__ = source__$1;
if(cljs.core.truth_(and__4149__auto__)){
return method;
} else {
return and__4149__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34875__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34875__$2);
var G__34875__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34875__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34875__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34875__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34875__$4;
}

break;
case "execution":
var vec__34891 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34891,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34891,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34891,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34891,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34822_SHARP_){
var or__4160__auto__ = (p1__34822_SHARP_ == null);
if(or__4160__auto__){
return or__4160__auto__;
} else {
var fexpr__34902 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34902.cljs$core$IFn$_invoke$arity$1 ? fexpr__34902.cljs$core$IFn$_invoke$arity$1(p1__34822_SHARP_) : fexpr__34902.call(null,p1__34822_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return line;
}
})();
var G__34903 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34903__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34903,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34903);
var G__34903__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34903__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34903__$1);
var G__34903__$3 = (cljs.core.truth_((function (){var or__4160__auto__ = fn;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var and__4149__auto__ = source__$1;
if(cljs.core.truth_(and__4149__auto__)){
return method;
} else {
return and__4149__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34903__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4160__auto__ = fn;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34903__$2);
var G__34903__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34903__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34903__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34903__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34903__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34843__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34928){
var map__34929 = p__34928;
var map__34929__$1 = cljs.core.__destructure_map(map__34929);
var triage_data = map__34929__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34929__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34929__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34929__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34929__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34929__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34929__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34929__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34929__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4160__auto__ = source;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4160__auto__ = line;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4160__auto__ = class$;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34934 = phase;
var G__34934__$1 = (((G__34934 instanceof cljs.core.Keyword))?G__34934.fqn:null);
switch (G__34934__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34935 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34936 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34937 = loc;
var G__34938 = (cljs.core.truth_(spec)?(function (){var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34939_35072 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34940_35073 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34941_35074 = true;
var _STAR_print_fn_STAR__temp_val__34942_35075 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34941_35074);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34942_35075);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34926_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34926_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34940_35073);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34939_35072);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34935,G__34936,G__34937,G__34938) : format.call(null,G__34935,G__34936,G__34937,G__34938));

break;
case "macroexpansion":
var G__34944 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34945 = cause_type;
var G__34946 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34947 = loc;
var G__34948 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34944,G__34945,G__34946,G__34947,G__34948) : format.call(null,G__34944,G__34945,G__34946,G__34947,G__34948));

break;
case "compile-syntax-check":
var G__34949 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34950 = cause_type;
var G__34951 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34952 = loc;
var G__34953 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34949,G__34950,G__34951,G__34952,G__34953) : format.call(null,G__34949,G__34950,G__34951,G__34952,G__34953));

break;
case "compilation":
var G__34954 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34955 = cause_type;
var G__34956 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34957 = loc;
var G__34958 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34954,G__34955,G__34956,G__34957,G__34958) : format.call(null,G__34954,G__34955,G__34956,G__34957,G__34958));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34960 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34961 = symbol;
var G__34962 = loc;
var G__34963 = (function (){var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34964_35077 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34965_35078 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34966_35079 = true;
var _STAR_print_fn_STAR__temp_val__34967_35080 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34966_35079);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34967_35080);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34927_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34927_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34965_35078);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34964_35077);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34960,G__34961,G__34962,G__34963) : format.call(null,G__34960,G__34961,G__34962,G__34963));
} else {
var G__34968 = "Execution error%s at %s(%s).\n%s\n";
var G__34969 = cause_type;
var G__34970 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34971 = loc;
var G__34972 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34968,G__34969,G__34970,G__34971,G__34972) : format.call(null,G__34968,G__34969,G__34970,G__34971,G__34972));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34934__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
