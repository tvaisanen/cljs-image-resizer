goog.provide('devtools.formatters.budgeting');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__8829__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__8829__auto__["add"]).call(o__8829__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__8829__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__8829__auto__["delete"]).call(o__8829__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__8829__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__8829__auto__["has"]).call(o__8829__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
return true;
} else {
return cljs.core.some(devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second(object_reference);
var _ = ((cljs.core.object_QMARK_(data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__11850 = data;
var target__8840__auto__ = G__11850;
if(cljs.core.truth_(target__8840__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11850)].join(''),"\n","target__8840__auto__"].join('')));
}

(target__8840__auto__["config"] = devtools.formatters.state.set_depth_budget(config,depth_budget));

return G__11850;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_(json_ml)){
var new_depth_budget_11873 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_(json_ml,new_depth_budget_11873);
} else {
var seq__11851_11874 = cljs.core.seq(json_ml);
var chunk__11852_11875 = null;
var count__11853_11876 = (0);
var i__11854_11877 = (0);
while(true){
if((i__11854_11877 < count__11853_11876)){
var item_11878 = chunk__11852_11875.cljs$core$IIndexed$_nth$arity$2(null,i__11854_11877);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_11878,new_depth_budget_11873) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_11878,new_depth_budget_11873));


var G__11879 = seq__11851_11874;
var G__11880 = chunk__11852_11875;
var G__11881 = count__11853_11876;
var G__11882 = (i__11854_11877 + (1));
seq__11851_11874 = G__11879;
chunk__11852_11875 = G__11880;
count__11853_11876 = G__11881;
i__11854_11877 = G__11882;
continue;
} else {
var temp__5735__auto___11883 = cljs.core.seq(seq__11851_11874);
if(temp__5735__auto___11883){
var seq__11851_11884__$1 = temp__5735__auto___11883;
if(cljs.core.chunked_seq_QMARK_(seq__11851_11884__$1)){
var c__4591__auto___11885 = cljs.core.chunk_first(seq__11851_11884__$1);
var G__11886 = cljs.core.chunk_rest(seq__11851_11884__$1);
var G__11887 = c__4591__auto___11885;
var G__11888 = cljs.core.count(c__4591__auto___11885);
var G__11889 = (0);
seq__11851_11874 = G__11886;
chunk__11852_11875 = G__11887;
count__11853_11876 = G__11888;
i__11854_11877 = G__11889;
continue;
} else {
var item_11890 = cljs.core.first(seq__11851_11884__$1);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_11890,new_depth_budget_11873) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_11890,new_depth_budget_11873));


var G__11891 = cljs.core.next(seq__11851_11884__$1);
var G__11892 = null;
var G__11893 = (0);
var G__11894 = (0);
seq__11851_11874 = G__11891;
chunk__11852_11875 = G__11892;
count__11853_11876 = G__11893;
i__11854_11877 = G__11894;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_(value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_(value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5733__auto__ = devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5733__auto__)){
var initial_hierarchy_depth_budget = temp__5733__auto__;
var remaining_depth_budget = (function (){var or__4160__auto__ = devtools.formatters.state.get_depth_budget();
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth(json_ml);
var final_QMARK_ = cljs.core.not(devtools.formatters.budgeting.has_any_object_reference_QMARK_(json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_(json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup(devtools.formatters.markup._LT_header_expander_GT_(value));
devtools.formatters.budgeting.add_over_budget_value_BANG_(value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=devtools.formatters.budgeting.js.map
