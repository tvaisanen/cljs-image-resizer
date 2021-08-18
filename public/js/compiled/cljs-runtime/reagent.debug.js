goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__12110__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12110 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12111__i = 0, G__12111__a = new Array(arguments.length -  0);
while (G__12111__i < G__12111__a.length) {G__12111__a[G__12111__i] = arguments[G__12111__i + 0]; ++G__12111__i;}
  args = new cljs.core.IndexedSeq(G__12111__a,0,null);
} 
return G__12110__delegate.call(this,args);};
G__12110.cljs$lang$maxFixedArity = 0;
G__12110.cljs$lang$applyTo = (function (arglist__12112){
var args = cljs.core.seq(arglist__12112);
return G__12110__delegate(args);
});
G__12110.cljs$core$IFn$_invoke$arity$variadic = G__12110__delegate;
return G__12110;
})()
);

(o.error = (function() { 
var G__12113__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12113 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12114__i = 0, G__12114__a = new Array(arguments.length -  0);
while (G__12114__i < G__12114__a.length) {G__12114__a[G__12114__i] = arguments[G__12114__i + 0]; ++G__12114__i;}
  args = new cljs.core.IndexedSeq(G__12114__a,0,null);
} 
return G__12113__delegate.call(this,args);};
G__12113.cljs$lang$maxFixedArity = 0;
G__12113.cljs$lang$applyTo = (function (arglist__12115){
var args = cljs.core.seq(arglist__12115);
return G__12113__delegate(args);
});
G__12113.cljs$core$IFn$_invoke$arity$variadic = G__12113__delegate;
return G__12113;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
