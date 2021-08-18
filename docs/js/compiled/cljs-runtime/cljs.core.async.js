goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30715 = arguments.length;
switch (G__30715) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30718 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30718 = (function (f,blockable,meta30719){
this.f = f;
this.blockable = blockable;
this.meta30719 = meta30719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30720,meta30719__$1){
var self__ = this;
var _30720__$1 = this;
return (new cljs.core.async.t_cljs$core$async30718(self__.f,self__.blockable,meta30719__$1));
}));

(cljs.core.async.t_cljs$core$async30718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30720){
var self__ = this;
var _30720__$1 = this;
return self__.meta30719;
}));

(cljs.core.async.t_cljs$core$async30718.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30718.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30718.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30718.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30718.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30719","meta30719",-1553502052,null)], null);
}));

(cljs.core.async.t_cljs$core$async30718.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30718.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30718");

(cljs.core.async.t_cljs$core$async30718.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async30718");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30718.
 */
cljs.core.async.__GT_t_cljs$core$async30718 = (function cljs$core$async$__GT_t_cljs$core$async30718(f__$1,blockable__$1,meta30719){
return (new cljs.core.async.t_cljs$core$async30718(f__$1,blockable__$1,meta30719));
});

}

return (new cljs.core.async.t_cljs$core$async30718(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30727 = arguments.length;
switch (G__30727) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30729 = arguments.length;
switch (G__30729) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30731 = arguments.length;
switch (G__30731) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32134 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32134) : fn1.call(null,val_32134));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32134) : fn1.call(null,val_32134));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30733 = arguments.length;
switch (G__30733) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4648__auto___32145 = n;
var x_32146 = (0);
while(true){
if((x_32146 < n__4648__auto___32145)){
(a[x_32146] = x_32146);

var G__32147 = (x_32146 + (1));
x_32146 = G__32147;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30734 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30734 = (function (flag,meta30735){
this.flag = flag;
this.meta30735 = meta30735;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30736,meta30735__$1){
var self__ = this;
var _30736__$1 = this;
return (new cljs.core.async.t_cljs$core$async30734(self__.flag,meta30735__$1));
}));

(cljs.core.async.t_cljs$core$async30734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30736){
var self__ = this;
var _30736__$1 = this;
return self__.meta30735;
}));

(cljs.core.async.t_cljs$core$async30734.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30734.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30734.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30734.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30734.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30735","meta30735",-168283368,null)], null);
}));

(cljs.core.async.t_cljs$core$async30734.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30734.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30734");

(cljs.core.async.t_cljs$core$async30734.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async30734");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30734.
 */
cljs.core.async.__GT_t_cljs$core$async30734 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30734(flag__$1,meta30735){
return (new cljs.core.async.t_cljs$core$async30734(flag__$1,meta30735));
});

}

return (new cljs.core.async.t_cljs$core$async30734(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30737 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30737 = (function (flag,cb,meta30738){
this.flag = flag;
this.cb = cb;
this.meta30738 = meta30738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30739,meta30738__$1){
var self__ = this;
var _30739__$1 = this;
return (new cljs.core.async.t_cljs$core$async30737(self__.flag,self__.cb,meta30738__$1));
}));

(cljs.core.async.t_cljs$core$async30737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30739){
var self__ = this;
var _30739__$1 = this;
return self__.meta30738;
}));

(cljs.core.async.t_cljs$core$async30737.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30737.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30737.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30737.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30737.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30738","meta30738",17285749,null)], null);
}));

(cljs.core.async.t_cljs$core$async30737.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30737.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30737");

(cljs.core.async.t_cljs$core$async30737.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async30737");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30737.
 */
cljs.core.async.__GT_t_cljs$core$async30737 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30737(flag__$1,cb__$1,meta30738){
return (new cljs.core.async.t_cljs$core$async30737(flag__$1,cb__$1,meta30738));
});

}

return (new cljs.core.async.t_cljs$core$async30737(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30740_SHARP_){
var G__30742 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30740_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30742) : fret.call(null,G__30742));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30741_SHARP_){
var G__30743 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30741_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30743) : fret.call(null,G__30743));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4160__auto__ = wport;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32148 = (i + (1));
i = G__32148;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4160__auto__ = ret;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4149__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4149__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4149__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___32149 = arguments.length;
var i__4772__auto___32150 = (0);
while(true){
if((i__4772__auto___32150 < len__4771__auto___32149)){
args__4777__auto__.push((arguments[i__4772__auto___32150]));

var G__32151 = (i__4772__auto___32150 + (1));
i__4772__auto___32150 = G__32151;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30746){
var map__30747 = p__30746;
var map__30747__$1 = cljs.core.__destructure_map(map__30747);
var opts = map__30747__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30744){
var G__30745 = cljs.core.first(seq30744);
var seq30744__$1 = cljs.core.next(seq30744);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30745,seq30744__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30749 = arguments.length;
switch (G__30749) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30643__auto___32153 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30644__auto__ = (function (){var switch__30559__auto__ = (function (state_30773){
var state_val_30774 = (state_30773[(1)]);
if((state_val_30774 === (7))){
var inst_30769 = (state_30773[(2)]);
var state_30773__$1 = state_30773;
var statearr_30775_32154 = state_30773__$1;
(statearr_30775_32154[(2)] = inst_30769);

(statearr_30775_32154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30774 === (1))){
var state_30773__$1 = state_30773;
var statearr_30776_32155 = state_30773__$1;
(statearr_30776_32155[(2)] = null);

(statearr_30776_32155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30774 === (4))){
var inst_30752 = (state_30773[(7)]);
var inst_30752__$1 = (state_30773[(2)]);
var inst_30753 = (inst_30752__$1 == null);
var state_30773__$1 = (function (){var statearr_30777 = state_30773;
(statearr_30777[(7)] = inst_30752__$1);

return statearr_30777;
})();
if(cljs.core.truth_(inst_30753)){
var statearr_30778_32156 = state_30773__$1;
(statearr_30778_32156[(1)] = (5));

} else {
var statearr_30779_32157 = state_30773__$1;
(statearr_30779_32157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30774 === (13))){
var state_30773__$1 = state_30773;
var statearr_30780_32158 = state_30773__$1;
(statearr_30780_32158[(2)] = null);

(statearr_30780_32158[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30774 === (6))){
var inst_30752 = (state_30773[(7)]);
var state_30773__$1 = state_30773;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30773__$1,(11),to,inst_30752);
} else {
if((state_val_30774 === (3))){
var inst_30771 = (state_30773[(2)]);
var state_30773__$1 = state_30773;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30773__$1,inst_30771);
} else {
if((state_val_30774 === (12))){
var state_30773__$1 = state_30773;
var statearr_30781_32161 = state_30773__$1;
(statearr_30781_32161[(2)] = null);

(statearr_30781_32161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30774 === (2))){
var state_30773__$1 = state_30773;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30773__$1,(4),from);
} else {
if((state_val_30774 === (11))){
var inst_30762 = (state_30773[(2)]);
var state_30773__$1 = state_30773;
if(cljs.core.truth_(inst_30762)){
var statearr_30782_32162 = state_30773__$1;
(statearr_30782_32162[(1)] = (12));

} else {
var statearr_30783_32163 = state_30773__$1;
(statearr_30783_32163[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30774 === (9))){
var state_30773__$1 = state_30773;
var statearr_30784_32164 = state_30773__$1;
(statearr_30784_32164[(2)] = null);

(statearr_30784_32164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30774 === (5))){
var state_30773__$1 = state_30773;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30785_32165 = state_30773__$1;
(statearr_30785_32165[(1)] = (8));

} else {
var statearr_30786_32166 = state_30773__$1;
(statearr_30786_32166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30774 === (14))){
var inst_30767 = (state_30773[(2)]);
var state_30773__$1 = state_30773;
var statearr_30787_32167 = state_30773__$1;
(statearr_30787_32167[(2)] = inst_30767);

(statearr_30787_32167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30774 === (10))){
var inst_30759 = (state_30773[(2)]);
var state_30773__$1 = state_30773;
var statearr_30788_32168 = state_30773__$1;
(statearr_30788_32168[(2)] = inst_30759);

(statearr_30788_32168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30774 === (8))){
var inst_30756 = cljs.core.async.close_BANG_(to);
var state_30773__$1 = state_30773;
var statearr_30789_32169 = state_30773__$1;
(statearr_30789_32169[(2)] = inst_30756);

(statearr_30789_32169[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30560__auto__ = null;
var cljs$core$async$state_machine__30560__auto____0 = (function (){
var statearr_30790 = [null,null,null,null,null,null,null,null];
(statearr_30790[(0)] = cljs$core$async$state_machine__30560__auto__);

(statearr_30790[(1)] = (1));

return statearr_30790;
});
var cljs$core$async$state_machine__30560__auto____1 = (function (state_30773){
while(true){
var ret_value__30561__auto__ = (function (){try{while(true){
var result__30562__auto__ = switch__30559__auto__(state_30773);
if(cljs.core.keyword_identical_QMARK_(result__30562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30562__auto__;
}
break;
}
}catch (e30791){var ex__30563__auto__ = e30791;
var statearr_30792_32170 = state_30773;
(statearr_30792_32170[(2)] = ex__30563__auto__);


if(cljs.core.seq((state_30773[(4)]))){
var statearr_30793_32171 = state_30773;
(statearr_30793_32171[(1)] = cljs.core.first((state_30773[(4)])));

} else {
throw ex__30563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32172 = state_30773;
state_30773 = G__32172;
continue;
} else {
return ret_value__30561__auto__;
}
break;
}
});
cljs$core$async$state_machine__30560__auto__ = function(state_30773){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30560__auto____1.call(this,state_30773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30560__auto____0;
cljs$core$async$state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30560__auto____1;
return cljs$core$async$state_machine__30560__auto__;
})()
})();
var state__30645__auto__ = (function (){var statearr_30794 = f__30644__auto__();
(statearr_30794[(6)] = c__30643__auto___32153);

return statearr_30794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30645__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30795){
var vec__30796 = p__30795;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30796,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30796,(1),null);
var job = vec__30796;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30643__auto___32178 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30644__auto__ = (function (){var switch__30559__auto__ = (function (state_30803){
var state_val_30804 = (state_30803[(1)]);
if((state_val_30804 === (1))){
var state_30803__$1 = state_30803;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30803__$1,(2),res,v);
} else {
if((state_val_30804 === (2))){
var inst_30800 = (state_30803[(2)]);
var inst_30801 = cljs.core.async.close_BANG_(res);
var state_30803__$1 = (function (){var statearr_30805 = state_30803;
(statearr_30805[(7)] = inst_30800);

return statearr_30805;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30803__$1,inst_30801);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30560__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30560__auto____0 = (function (){
var statearr_30806 = [null,null,null,null,null,null,null,null];
(statearr_30806[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30560__auto__);

(statearr_30806[(1)] = (1));

return statearr_30806;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30560__auto____1 = (function (state_30803){
while(true){
var ret_value__30561__auto__ = (function (){try{while(true){
var result__30562__auto__ = switch__30559__auto__(state_30803);
if(cljs.core.keyword_identical_QMARK_(result__30562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30562__auto__;
}
break;
}
}catch (e30807){var ex__30563__auto__ = e30807;
var statearr_30808_32183 = state_30803;
(statearr_30808_32183[(2)] = ex__30563__auto__);


if(cljs.core.seq((state_30803[(4)]))){
var statearr_30809_32184 = state_30803;
(statearr_30809_32184[(1)] = cljs.core.first((state_30803[(4)])));

} else {
throw ex__30563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32185 = state_30803;
state_30803 = G__32185;
continue;
} else {
return ret_value__30561__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30560__auto__ = function(state_30803){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30560__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30560__auto____1.call(this,state_30803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30560__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30560__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30560__auto__;
})()
})();
var state__30645__auto__ = (function (){var statearr_30810 = f__30644__auto__();
(statearr_30810[(6)] = c__30643__auto___32178);

return statearr_30810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30645__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30811){
var vec__30812 = p__30811;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30812,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30812,(1),null);
var job = vec__30812;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4648__auto___32188 = n;
var __32189 = (0);
while(true){
if((__32189 < n__4648__auto___32188)){
var G__30815_32191 = type;
var G__30815_32192__$1 = (((G__30815_32191 instanceof cljs.core.Keyword))?G__30815_32191.fqn:null);
switch (G__30815_32192__$1) {
case "compute":
var c__30643__auto___32195 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32189,c__30643__auto___32195,G__30815_32191,G__30815_32192__$1,n__4648__auto___32188,jobs,results,process,async){
return (function (){
var f__30644__auto__ = (function (){var switch__30559__auto__ = ((function (__32189,c__30643__auto___32195,G__30815_32191,G__30815_32192__$1,n__4648__auto___32188,jobs,results,process,async){
return (function (state_30828){
var state_val_30829 = (state_30828[(1)]);
if((state_val_30829 === (1))){
var state_30828__$1 = state_30828;
var statearr_30830_32196 = state_30828__$1;
(statearr_30830_32196[(2)] = null);

(statearr_30830_32196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30829 === (2))){
var state_30828__$1 = state_30828;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30828__$1,(4),jobs);
} else {
if((state_val_30829 === (3))){
var inst_30826 = (state_30828[(2)]);
var state_30828__$1 = state_30828;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30828__$1,inst_30826);
} else {
if((state_val_30829 === (4))){
var inst_30818 = (state_30828[(2)]);
var inst_30819 = process(inst_30818);
var state_30828__$1 = state_30828;
if(cljs.core.truth_(inst_30819)){
var statearr_30831_32197 = state_30828__$1;
(statearr_30831_32197[(1)] = (5));

} else {
var statearr_30832_32198 = state_30828__$1;
(statearr_30832_32198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30829 === (5))){
var state_30828__$1 = state_30828;
var statearr_30833_32199 = state_30828__$1;
(statearr_30833_32199[(2)] = null);

(statearr_30833_32199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30829 === (6))){
var state_30828__$1 = state_30828;
var statearr_30834_32201 = state_30828__$1;
(statearr_30834_32201[(2)] = null);

(statearr_30834_32201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30829 === (7))){
var inst_30824 = (state_30828[(2)]);
var state_30828__$1 = state_30828;
var statearr_30835_32202 = state_30828__$1;
(statearr_30835_32202[(2)] = inst_30824);

(statearr_30835_32202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32189,c__30643__auto___32195,G__30815_32191,G__30815_32192__$1,n__4648__auto___32188,jobs,results,process,async))
;
return ((function (__32189,switch__30559__auto__,c__30643__auto___32195,G__30815_32191,G__30815_32192__$1,n__4648__auto___32188,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30560__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30560__auto____0 = (function (){
var statearr_30836 = [null,null,null,null,null,null,null];
(statearr_30836[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30560__auto__);

(statearr_30836[(1)] = (1));

return statearr_30836;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30560__auto____1 = (function (state_30828){
while(true){
var ret_value__30561__auto__ = (function (){try{while(true){
var result__30562__auto__ = switch__30559__auto__(state_30828);
if(cljs.core.keyword_identical_QMARK_(result__30562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30562__auto__;
}
break;
}
}catch (e30837){var ex__30563__auto__ = e30837;
var statearr_30838_32203 = state_30828;
(statearr_30838_32203[(2)] = ex__30563__auto__);


if(cljs.core.seq((state_30828[(4)]))){
var statearr_30839_32204 = state_30828;
(statearr_30839_32204[(1)] = cljs.core.first((state_30828[(4)])));

} else {
throw ex__30563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32209 = state_30828;
state_30828 = G__32209;
continue;
} else {
return ret_value__30561__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30560__auto__ = function(state_30828){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30560__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30560__auto____1.call(this,state_30828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30560__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30560__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30560__auto__;
})()
;})(__32189,switch__30559__auto__,c__30643__auto___32195,G__30815_32191,G__30815_32192__$1,n__4648__auto___32188,jobs,results,process,async))
})();
var state__30645__auto__ = (function (){var statearr_30840 = f__30644__auto__();
(statearr_30840[(6)] = c__30643__auto___32195);

return statearr_30840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30645__auto__);
});})(__32189,c__30643__auto___32195,G__30815_32191,G__30815_32192__$1,n__4648__auto___32188,jobs,results,process,async))
);


break;
case "async":
var c__30643__auto___32210 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32189,c__30643__auto___32210,G__30815_32191,G__30815_32192__$1,n__4648__auto___32188,jobs,results,process,async){
return (function (){
var f__30644__auto__ = (function (){var switch__30559__auto__ = ((function (__32189,c__30643__auto___32210,G__30815_32191,G__30815_32192__$1,n__4648__auto___32188,jobs,results,process,async){
return (function (state_30853){
var state_val_30854 = (state_30853[(1)]);
if((state_val_30854 === (1))){
var state_30853__$1 = state_30853;
var statearr_30855_32211 = state_30853__$1;
(statearr_30855_32211[(2)] = null);

(statearr_30855_32211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30854 === (2))){
var state_30853__$1 = state_30853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30853__$1,(4),jobs);
} else {
if((state_val_30854 === (3))){
var inst_30851 = (state_30853[(2)]);
var state_30853__$1 = state_30853;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30853__$1,inst_30851);
} else {
if((state_val_30854 === (4))){
var inst_30843 = (state_30853[(2)]);
var inst_30844 = async(inst_30843);
var state_30853__$1 = state_30853;
if(cljs.core.truth_(inst_30844)){
var statearr_30856_32212 = state_30853__$1;
(statearr_30856_32212[(1)] = (5));

} else {
var statearr_30857_32213 = state_30853__$1;
(statearr_30857_32213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30854 === (5))){
var state_30853__$1 = state_30853;
var statearr_30858_32214 = state_30853__$1;
(statearr_30858_32214[(2)] = null);

(statearr_30858_32214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30854 === (6))){
var state_30853__$1 = state_30853;
var statearr_30859_32215 = state_30853__$1;
(statearr_30859_32215[(2)] = null);

(statearr_30859_32215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30854 === (7))){
var inst_30849 = (state_30853[(2)]);
var state_30853__$1 = state_30853;
var statearr_30860_32216 = state_30853__$1;
(statearr_30860_32216[(2)] = inst_30849);

(statearr_30860_32216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32189,c__30643__auto___32210,G__30815_32191,G__30815_32192__$1,n__4648__auto___32188,jobs,results,process,async))
;
return ((function (__32189,switch__30559__auto__,c__30643__auto___32210,G__30815_32191,G__30815_32192__$1,n__4648__auto___32188,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30560__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30560__auto____0 = (function (){
var statearr_30861 = [null,null,null,null,null,null,null];
(statearr_30861[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30560__auto__);

(statearr_30861[(1)] = (1));

return statearr_30861;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30560__auto____1 = (function (state_30853){
while(true){
var ret_value__30561__auto__ = (function (){try{while(true){
var result__30562__auto__ = switch__30559__auto__(state_30853);
if(cljs.core.keyword_identical_QMARK_(result__30562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30562__auto__;
}
break;
}
}catch (e30862){var ex__30563__auto__ = e30862;
var statearr_30863_32219 = state_30853;
(statearr_30863_32219[(2)] = ex__30563__auto__);


if(cljs.core.seq((state_30853[(4)]))){
var statearr_30864_32220 = state_30853;
(statearr_30864_32220[(1)] = cljs.core.first((state_30853[(4)])));

} else {
throw ex__30563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32225 = state_30853;
state_30853 = G__32225;
continue;
} else {
return ret_value__30561__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30560__auto__ = function(state_30853){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30560__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30560__auto____1.call(this,state_30853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30560__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30560__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30560__auto__;
})()
;})(__32189,switch__30559__auto__,c__30643__auto___32210,G__30815_32191,G__30815_32192__$1,n__4648__auto___32188,jobs,results,process,async))
})();
var state__30645__auto__ = (function (){var statearr_30865 = f__30644__auto__();
(statearr_30865[(6)] = c__30643__auto___32210);

return statearr_30865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30645__auto__);
});})(__32189,c__30643__auto___32210,G__30815_32191,G__30815_32192__$1,n__4648__auto___32188,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30815_32192__$1)].join('')));

}

var G__32229 = (__32189 + (1));
__32189 = G__32229;
continue;
} else {
}
break;
}

var c__30643__auto___32230 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30644__auto__ = (function (){var switch__30559__auto__ = (function (state_30887){
var state_val_30888 = (state_30887[(1)]);
if((state_val_30888 === (7))){
var inst_30883 = (state_30887[(2)]);
var state_30887__$1 = state_30887;
var statearr_30889_32234 = state_30887__$1;
(statearr_30889_32234[(2)] = inst_30883);

(statearr_30889_32234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (1))){
var state_30887__$1 = state_30887;
var statearr_30890_32235 = state_30887__$1;
(statearr_30890_32235[(2)] = null);

(statearr_30890_32235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (4))){
var inst_30868 = (state_30887[(7)]);
var inst_30868__$1 = (state_30887[(2)]);
var inst_30869 = (inst_30868__$1 == null);
var state_30887__$1 = (function (){var statearr_30891 = state_30887;
(statearr_30891[(7)] = inst_30868__$1);

return statearr_30891;
})();
if(cljs.core.truth_(inst_30869)){
var statearr_30892_32236 = state_30887__$1;
(statearr_30892_32236[(1)] = (5));

} else {
var statearr_30893_32237 = state_30887__$1;
(statearr_30893_32237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (6))){
var inst_30873 = (state_30887[(8)]);
var inst_30868 = (state_30887[(7)]);
var inst_30873__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30874 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30875 = [inst_30868,inst_30873__$1];
var inst_30876 = (new cljs.core.PersistentVector(null,2,(5),inst_30874,inst_30875,null));
var state_30887__$1 = (function (){var statearr_30894 = state_30887;
(statearr_30894[(8)] = inst_30873__$1);

return statearr_30894;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30887__$1,(8),jobs,inst_30876);
} else {
if((state_val_30888 === (3))){
var inst_30885 = (state_30887[(2)]);
var state_30887__$1 = state_30887;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30887__$1,inst_30885);
} else {
if((state_val_30888 === (2))){
var state_30887__$1 = state_30887;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30887__$1,(4),from);
} else {
if((state_val_30888 === (9))){
var inst_30880 = (state_30887[(2)]);
var state_30887__$1 = (function (){var statearr_30895 = state_30887;
(statearr_30895[(9)] = inst_30880);

return statearr_30895;
})();
var statearr_30896_32257 = state_30887__$1;
(statearr_30896_32257[(2)] = null);

(statearr_30896_32257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (5))){
var inst_30871 = cljs.core.async.close_BANG_(jobs);
var state_30887__$1 = state_30887;
var statearr_30897_32258 = state_30887__$1;
(statearr_30897_32258[(2)] = inst_30871);

(statearr_30897_32258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (8))){
var inst_30873 = (state_30887[(8)]);
var inst_30878 = (state_30887[(2)]);
var state_30887__$1 = (function (){var statearr_30898 = state_30887;
(statearr_30898[(10)] = inst_30878);

return statearr_30898;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30887__$1,(9),results,inst_30873);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30560__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30560__auto____0 = (function (){
var statearr_30899 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30899[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30560__auto__);

(statearr_30899[(1)] = (1));

return statearr_30899;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30560__auto____1 = (function (state_30887){
while(true){
var ret_value__30561__auto__ = (function (){try{while(true){
var result__30562__auto__ = switch__30559__auto__(state_30887);
if(cljs.core.keyword_identical_QMARK_(result__30562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30562__auto__;
}
break;
}
}catch (e30900){var ex__30563__auto__ = e30900;
var statearr_30901_32262 = state_30887;
(statearr_30901_32262[(2)] = ex__30563__auto__);


if(cljs.core.seq((state_30887[(4)]))){
var statearr_30902_32263 = state_30887;
(statearr_30902_32263[(1)] = cljs.core.first((state_30887[(4)])));

} else {
throw ex__30563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32264 = state_30887;
state_30887 = G__32264;
continue;
} else {
return ret_value__30561__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30560__auto__ = function(state_30887){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30560__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30560__auto____1.call(this,state_30887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30560__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30560__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30560__auto__;
})()
})();
var state__30645__auto__ = (function (){var statearr_30903 = f__30644__auto__();
(statearr_30903[(6)] = c__30643__auto___32230);

return statearr_30903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30645__auto__);
}));


var c__30643__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30644__auto__ = (function (){var switch__30559__auto__ = (function (state_30941){
var state_val_30942 = (state_30941[(1)]);
if((state_val_30942 === (7))){
var inst_30937 = (state_30941[(2)]);
var state_30941__$1 = state_30941;
var statearr_30943_32266 = state_30941__$1;
(statearr_30943_32266[(2)] = inst_30937);

(statearr_30943_32266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30942 === (20))){
var state_30941__$1 = state_30941;
var statearr_30944_32267 = state_30941__$1;
(statearr_30944_32267[(2)] = null);

(statearr_30944_32267[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30942 === (1))){
var state_30941__$1 = state_30941;
var statearr_30945_32268 = state_30941__$1;
(statearr_30945_32268[(2)] = null);

(statearr_30945_32268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30942 === (4))){
var inst_30906 = (state_30941[(7)]);
var inst_30906__$1 = (state_30941[(2)]);
var inst_30907 = (inst_30906__$1 == null);
var state_30941__$1 = (function (){var statearr_30946 = state_30941;
(statearr_30946[(7)] = inst_30906__$1);

return statearr_30946;
})();
if(cljs.core.truth_(inst_30907)){
var statearr_30947_32269 = state_30941__$1;
(statearr_30947_32269[(1)] = (5));

} else {
var statearr_30948_32270 = state_30941__$1;
(statearr_30948_32270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30942 === (15))){
var inst_30919 = (state_30941[(8)]);
var state_30941__$1 = state_30941;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30941__$1,(18),to,inst_30919);
} else {
if((state_val_30942 === (21))){
var inst_30932 = (state_30941[(2)]);
var state_30941__$1 = state_30941;
var statearr_30949_32271 = state_30941__$1;
(statearr_30949_32271[(2)] = inst_30932);

(statearr_30949_32271[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30942 === (13))){
var inst_30934 = (state_30941[(2)]);
var state_30941__$1 = (function (){var statearr_30950 = state_30941;
(statearr_30950[(9)] = inst_30934);

return statearr_30950;
})();
var statearr_30951_32272 = state_30941__$1;
(statearr_30951_32272[(2)] = null);

(statearr_30951_32272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30942 === (6))){
var inst_30906 = (state_30941[(7)]);
var state_30941__$1 = state_30941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30941__$1,(11),inst_30906);
} else {
if((state_val_30942 === (17))){
var inst_30927 = (state_30941[(2)]);
var state_30941__$1 = state_30941;
if(cljs.core.truth_(inst_30927)){
var statearr_30952_32273 = state_30941__$1;
(statearr_30952_32273[(1)] = (19));

} else {
var statearr_30953_32274 = state_30941__$1;
(statearr_30953_32274[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30942 === (3))){
var inst_30939 = (state_30941[(2)]);
var state_30941__$1 = state_30941;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30941__$1,inst_30939);
} else {
if((state_val_30942 === (12))){
var inst_30916 = (state_30941[(10)]);
var state_30941__$1 = state_30941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30941__$1,(14),inst_30916);
} else {
if((state_val_30942 === (2))){
var state_30941__$1 = state_30941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30941__$1,(4),results);
} else {
if((state_val_30942 === (19))){
var state_30941__$1 = state_30941;
var statearr_30954_32275 = state_30941__$1;
(statearr_30954_32275[(2)] = null);

(statearr_30954_32275[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30942 === (11))){
var inst_30916 = (state_30941[(2)]);
var state_30941__$1 = (function (){var statearr_30955 = state_30941;
(statearr_30955[(10)] = inst_30916);

return statearr_30955;
})();
var statearr_30956_32276 = state_30941__$1;
(statearr_30956_32276[(2)] = null);

(statearr_30956_32276[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30942 === (9))){
var state_30941__$1 = state_30941;
var statearr_30957_32277 = state_30941__$1;
(statearr_30957_32277[(2)] = null);

(statearr_30957_32277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30942 === (5))){
var state_30941__$1 = state_30941;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30958_32278 = state_30941__$1;
(statearr_30958_32278[(1)] = (8));

} else {
var statearr_30959_32279 = state_30941__$1;
(statearr_30959_32279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30942 === (14))){
var inst_30919 = (state_30941[(8)]);
var inst_30919__$1 = (state_30941[(2)]);
var inst_30920 = (inst_30919__$1 == null);
var inst_30921 = cljs.core.not(inst_30920);
var state_30941__$1 = (function (){var statearr_30960 = state_30941;
(statearr_30960[(8)] = inst_30919__$1);

return statearr_30960;
})();
if(inst_30921){
var statearr_30961_32280 = state_30941__$1;
(statearr_30961_32280[(1)] = (15));

} else {
var statearr_30962_32281 = state_30941__$1;
(statearr_30962_32281[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30942 === (16))){
var state_30941__$1 = state_30941;
var statearr_30963_32282 = state_30941__$1;
(statearr_30963_32282[(2)] = false);

(statearr_30963_32282[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30942 === (10))){
var inst_30913 = (state_30941[(2)]);
var state_30941__$1 = state_30941;
var statearr_30964_32283 = state_30941__$1;
(statearr_30964_32283[(2)] = inst_30913);

(statearr_30964_32283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30942 === (18))){
var inst_30924 = (state_30941[(2)]);
var state_30941__$1 = state_30941;
var statearr_30965_32284 = state_30941__$1;
(statearr_30965_32284[(2)] = inst_30924);

(statearr_30965_32284[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30942 === (8))){
var inst_30910 = cljs.core.async.close_BANG_(to);
var state_30941__$1 = state_30941;
var statearr_30966_32285 = state_30941__$1;
(statearr_30966_32285[(2)] = inst_30910);

(statearr_30966_32285[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30560__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30560__auto____0 = (function (){
var statearr_30967 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30967[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30560__auto__);

(statearr_30967[(1)] = (1));

return statearr_30967;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30560__auto____1 = (function (state_30941){
while(true){
var ret_value__30561__auto__ = (function (){try{while(true){
var result__30562__auto__ = switch__30559__auto__(state_30941);
if(cljs.core.keyword_identical_QMARK_(result__30562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30562__auto__;
}
break;
}
}catch (e30968){var ex__30563__auto__ = e30968;
var statearr_30969_32287 = state_30941;
(statearr_30969_32287[(2)] = ex__30563__auto__);


if(cljs.core.seq((state_30941[(4)]))){
var statearr_30970_32289 = state_30941;
(statearr_30970_32289[(1)] = cljs.core.first((state_30941[(4)])));

} else {
throw ex__30563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32293 = state_30941;
state_30941 = G__32293;
continue;
} else {
return ret_value__30561__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30560__auto__ = function(state_30941){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30560__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30560__auto____1.call(this,state_30941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30560__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30560__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30560__auto__;
})()
})();
var state__30645__auto__ = (function (){var statearr_30971 = f__30644__auto__();
(statearr_30971[(6)] = c__30643__auto__);

return statearr_30971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30645__auto__);
}));

return c__30643__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30973 = arguments.length;
switch (G__30973) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30975 = arguments.length;
switch (G__30975) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30977 = arguments.length;
switch (G__30977) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30643__auto___32306 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30644__auto__ = (function (){var switch__30559__auto__ = (function (state_31003){
var state_val_31004 = (state_31003[(1)]);
if((state_val_31004 === (7))){
var inst_30999 = (state_31003[(2)]);
var state_31003__$1 = state_31003;
var statearr_31005_32309 = state_31003__$1;
(statearr_31005_32309[(2)] = inst_30999);

(statearr_31005_32309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31004 === (1))){
var state_31003__$1 = state_31003;
var statearr_31006_32310 = state_31003__$1;
(statearr_31006_32310[(2)] = null);

(statearr_31006_32310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31004 === (4))){
var inst_30980 = (state_31003[(7)]);
var inst_30980__$1 = (state_31003[(2)]);
var inst_30981 = (inst_30980__$1 == null);
var state_31003__$1 = (function (){var statearr_31007 = state_31003;
(statearr_31007[(7)] = inst_30980__$1);

return statearr_31007;
})();
if(cljs.core.truth_(inst_30981)){
var statearr_31008_32318 = state_31003__$1;
(statearr_31008_32318[(1)] = (5));

} else {
var statearr_31009_32325 = state_31003__$1;
(statearr_31009_32325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31004 === (13))){
var state_31003__$1 = state_31003;
var statearr_31010_32326 = state_31003__$1;
(statearr_31010_32326[(2)] = null);

(statearr_31010_32326[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31004 === (6))){
var inst_30980 = (state_31003[(7)]);
var inst_30986 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30980) : p.call(null,inst_30980));
var state_31003__$1 = state_31003;
if(cljs.core.truth_(inst_30986)){
var statearr_31011_32327 = state_31003__$1;
(statearr_31011_32327[(1)] = (9));

} else {
var statearr_31012_32328 = state_31003__$1;
(statearr_31012_32328[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31004 === (3))){
var inst_31001 = (state_31003[(2)]);
var state_31003__$1 = state_31003;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31003__$1,inst_31001);
} else {
if((state_val_31004 === (12))){
var state_31003__$1 = state_31003;
var statearr_31013_32329 = state_31003__$1;
(statearr_31013_32329[(2)] = null);

(statearr_31013_32329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31004 === (2))){
var state_31003__$1 = state_31003;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31003__$1,(4),ch);
} else {
if((state_val_31004 === (11))){
var inst_30980 = (state_31003[(7)]);
var inst_30990 = (state_31003[(2)]);
var state_31003__$1 = state_31003;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31003__$1,(8),inst_30990,inst_30980);
} else {
if((state_val_31004 === (9))){
var state_31003__$1 = state_31003;
var statearr_31014_32330 = state_31003__$1;
(statearr_31014_32330[(2)] = tc);

(statearr_31014_32330[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31004 === (5))){
var inst_30983 = cljs.core.async.close_BANG_(tc);
var inst_30984 = cljs.core.async.close_BANG_(fc);
var state_31003__$1 = (function (){var statearr_31015 = state_31003;
(statearr_31015[(8)] = inst_30983);

return statearr_31015;
})();
var statearr_31016_32331 = state_31003__$1;
(statearr_31016_32331[(2)] = inst_30984);

(statearr_31016_32331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31004 === (14))){
var inst_30997 = (state_31003[(2)]);
var state_31003__$1 = state_31003;
var statearr_31017_32332 = state_31003__$1;
(statearr_31017_32332[(2)] = inst_30997);

(statearr_31017_32332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31004 === (10))){
var state_31003__$1 = state_31003;
var statearr_31018_32339 = state_31003__$1;
(statearr_31018_32339[(2)] = fc);

(statearr_31018_32339[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31004 === (8))){
var inst_30992 = (state_31003[(2)]);
var state_31003__$1 = state_31003;
if(cljs.core.truth_(inst_30992)){
var statearr_31019_32340 = state_31003__$1;
(statearr_31019_32340[(1)] = (12));

} else {
var statearr_31020_32341 = state_31003__$1;
(statearr_31020_32341[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30560__auto__ = null;
var cljs$core$async$state_machine__30560__auto____0 = (function (){
var statearr_31021 = [null,null,null,null,null,null,null,null,null];
(statearr_31021[(0)] = cljs$core$async$state_machine__30560__auto__);

(statearr_31021[(1)] = (1));

return statearr_31021;
});
var cljs$core$async$state_machine__30560__auto____1 = (function (state_31003){
while(true){
var ret_value__30561__auto__ = (function (){try{while(true){
var result__30562__auto__ = switch__30559__auto__(state_31003);
if(cljs.core.keyword_identical_QMARK_(result__30562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30562__auto__;
}
break;
}
}catch (e31022){var ex__30563__auto__ = e31022;
var statearr_31023_32342 = state_31003;
(statearr_31023_32342[(2)] = ex__30563__auto__);


if(cljs.core.seq((state_31003[(4)]))){
var statearr_31024_32343 = state_31003;
(statearr_31024_32343[(1)] = cljs.core.first((state_31003[(4)])));

} else {
throw ex__30563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32344 = state_31003;
state_31003 = G__32344;
continue;
} else {
return ret_value__30561__auto__;
}
break;
}
});
cljs$core$async$state_machine__30560__auto__ = function(state_31003){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30560__auto____1.call(this,state_31003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30560__auto____0;
cljs$core$async$state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30560__auto____1;
return cljs$core$async$state_machine__30560__auto__;
})()
})();
var state__30645__auto__ = (function (){var statearr_31025 = f__30644__auto__();
(statearr_31025[(6)] = c__30643__auto___32306);

return statearr_31025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30645__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30643__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30644__auto__ = (function (){var switch__30559__auto__ = (function (state_31047){
var state_val_31048 = (state_31047[(1)]);
if((state_val_31048 === (7))){
var inst_31043 = (state_31047[(2)]);
var state_31047__$1 = state_31047;
var statearr_31049_32345 = state_31047__$1;
(statearr_31049_32345[(2)] = inst_31043);

(statearr_31049_32345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31048 === (1))){
var inst_31026 = init;
var inst_31027 = inst_31026;
var state_31047__$1 = (function (){var statearr_31050 = state_31047;
(statearr_31050[(7)] = inst_31027);

return statearr_31050;
})();
var statearr_31051_32352 = state_31047__$1;
(statearr_31051_32352[(2)] = null);

(statearr_31051_32352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31048 === (4))){
var inst_31030 = (state_31047[(8)]);
var inst_31030__$1 = (state_31047[(2)]);
var inst_31031 = (inst_31030__$1 == null);
var state_31047__$1 = (function (){var statearr_31052 = state_31047;
(statearr_31052[(8)] = inst_31030__$1);

return statearr_31052;
})();
if(cljs.core.truth_(inst_31031)){
var statearr_31053_32353 = state_31047__$1;
(statearr_31053_32353[(1)] = (5));

} else {
var statearr_31054_32354 = state_31047__$1;
(statearr_31054_32354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31048 === (6))){
var inst_31034 = (state_31047[(9)]);
var inst_31030 = (state_31047[(8)]);
var inst_31027 = (state_31047[(7)]);
var inst_31034__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31027,inst_31030) : f.call(null,inst_31027,inst_31030));
var inst_31035 = cljs.core.reduced_QMARK_(inst_31034__$1);
var state_31047__$1 = (function (){var statearr_31055 = state_31047;
(statearr_31055[(9)] = inst_31034__$1);

return statearr_31055;
})();
if(inst_31035){
var statearr_31056_32355 = state_31047__$1;
(statearr_31056_32355[(1)] = (8));

} else {
var statearr_31057_32356 = state_31047__$1;
(statearr_31057_32356[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31048 === (3))){
var inst_31045 = (state_31047[(2)]);
var state_31047__$1 = state_31047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31047__$1,inst_31045);
} else {
if((state_val_31048 === (2))){
var state_31047__$1 = state_31047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31047__$1,(4),ch);
} else {
if((state_val_31048 === (9))){
var inst_31034 = (state_31047[(9)]);
var inst_31027 = inst_31034;
var state_31047__$1 = (function (){var statearr_31058 = state_31047;
(statearr_31058[(7)] = inst_31027);

return statearr_31058;
})();
var statearr_31059_32357 = state_31047__$1;
(statearr_31059_32357[(2)] = null);

(statearr_31059_32357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31048 === (5))){
var inst_31027 = (state_31047[(7)]);
var state_31047__$1 = state_31047;
var statearr_31060_32358 = state_31047__$1;
(statearr_31060_32358[(2)] = inst_31027);

(statearr_31060_32358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31048 === (10))){
var inst_31041 = (state_31047[(2)]);
var state_31047__$1 = state_31047;
var statearr_31061_32359 = state_31047__$1;
(statearr_31061_32359[(2)] = inst_31041);

(statearr_31061_32359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31048 === (8))){
var inst_31034 = (state_31047[(9)]);
var inst_31037 = cljs.core.deref(inst_31034);
var state_31047__$1 = state_31047;
var statearr_31062_32360 = state_31047__$1;
(statearr_31062_32360[(2)] = inst_31037);

(statearr_31062_32360[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__30560__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30560__auto____0 = (function (){
var statearr_31063 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31063[(0)] = cljs$core$async$reduce_$_state_machine__30560__auto__);

(statearr_31063[(1)] = (1));

return statearr_31063;
});
var cljs$core$async$reduce_$_state_machine__30560__auto____1 = (function (state_31047){
while(true){
var ret_value__30561__auto__ = (function (){try{while(true){
var result__30562__auto__ = switch__30559__auto__(state_31047);
if(cljs.core.keyword_identical_QMARK_(result__30562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30562__auto__;
}
break;
}
}catch (e31064){var ex__30563__auto__ = e31064;
var statearr_31065_32367 = state_31047;
(statearr_31065_32367[(2)] = ex__30563__auto__);


if(cljs.core.seq((state_31047[(4)]))){
var statearr_31066_32368 = state_31047;
(statearr_31066_32368[(1)] = cljs.core.first((state_31047[(4)])));

} else {
throw ex__30563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32369 = state_31047;
state_31047 = G__32369;
continue;
} else {
return ret_value__30561__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30560__auto__ = function(state_31047){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30560__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30560__auto____1.call(this,state_31047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30560__auto____0;
cljs$core$async$reduce_$_state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30560__auto____1;
return cljs$core$async$reduce_$_state_machine__30560__auto__;
})()
})();
var state__30645__auto__ = (function (){var statearr_31067 = f__30644__auto__();
(statearr_31067[(6)] = c__30643__auto__);

return statearr_31067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30645__auto__);
}));

return c__30643__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30643__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30644__auto__ = (function (){var switch__30559__auto__ = (function (state_31073){
var state_val_31074 = (state_31073[(1)]);
if((state_val_31074 === (1))){
var inst_31068 = cljs.core.async.reduce(f__$1,init,ch);
var state_31073__$1 = state_31073;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31073__$1,(2),inst_31068);
} else {
if((state_val_31074 === (2))){
var inst_31070 = (state_31073[(2)]);
var inst_31071 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31070) : f__$1.call(null,inst_31070));
var state_31073__$1 = state_31073;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31073__$1,inst_31071);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30560__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30560__auto____0 = (function (){
var statearr_31075 = [null,null,null,null,null,null,null];
(statearr_31075[(0)] = cljs$core$async$transduce_$_state_machine__30560__auto__);

(statearr_31075[(1)] = (1));

return statearr_31075;
});
var cljs$core$async$transduce_$_state_machine__30560__auto____1 = (function (state_31073){
while(true){
var ret_value__30561__auto__ = (function (){try{while(true){
var result__30562__auto__ = switch__30559__auto__(state_31073);
if(cljs.core.keyword_identical_QMARK_(result__30562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30562__auto__;
}
break;
}
}catch (e31076){var ex__30563__auto__ = e31076;
var statearr_31077_32370 = state_31073;
(statearr_31077_32370[(2)] = ex__30563__auto__);


if(cljs.core.seq((state_31073[(4)]))){
var statearr_31078_32371 = state_31073;
(statearr_31078_32371[(1)] = cljs.core.first((state_31073[(4)])));

} else {
throw ex__30563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32372 = state_31073;
state_31073 = G__32372;
continue;
} else {
return ret_value__30561__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30560__auto__ = function(state_31073){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30560__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30560__auto____1.call(this,state_31073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30560__auto____0;
cljs$core$async$transduce_$_state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30560__auto____1;
return cljs$core$async$transduce_$_state_machine__30560__auto__;
})()
})();
var state__30645__auto__ = (function (){var statearr_31079 = f__30644__auto__();
(statearr_31079[(6)] = c__30643__auto__);

return statearr_31079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30645__auto__);
}));

return c__30643__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__31081 = arguments.length;
switch (G__31081) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30643__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30644__auto__ = (function (){var switch__30559__auto__ = (function (state_31106){
var state_val_31107 = (state_31106[(1)]);
if((state_val_31107 === (7))){
var inst_31088 = (state_31106[(2)]);
var state_31106__$1 = state_31106;
var statearr_31108_32374 = state_31106__$1;
(statearr_31108_32374[(2)] = inst_31088);

(statearr_31108_32374[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31107 === (1))){
var inst_31082 = cljs.core.seq(coll);
var inst_31083 = inst_31082;
var state_31106__$1 = (function (){var statearr_31109 = state_31106;
(statearr_31109[(7)] = inst_31083);

return statearr_31109;
})();
var statearr_31110_32376 = state_31106__$1;
(statearr_31110_32376[(2)] = null);

(statearr_31110_32376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31107 === (4))){
var inst_31083 = (state_31106[(7)]);
var inst_31086 = cljs.core.first(inst_31083);
var state_31106__$1 = state_31106;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31106__$1,(7),ch,inst_31086);
} else {
if((state_val_31107 === (13))){
var inst_31100 = (state_31106[(2)]);
var state_31106__$1 = state_31106;
var statearr_31111_32381 = state_31106__$1;
(statearr_31111_32381[(2)] = inst_31100);

(statearr_31111_32381[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31107 === (6))){
var inst_31091 = (state_31106[(2)]);
var state_31106__$1 = state_31106;
if(cljs.core.truth_(inst_31091)){
var statearr_31112_32382 = state_31106__$1;
(statearr_31112_32382[(1)] = (8));

} else {
var statearr_31113_32383 = state_31106__$1;
(statearr_31113_32383[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31107 === (3))){
var inst_31104 = (state_31106[(2)]);
var state_31106__$1 = state_31106;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31106__$1,inst_31104);
} else {
if((state_val_31107 === (12))){
var state_31106__$1 = state_31106;
var statearr_31114_32384 = state_31106__$1;
(statearr_31114_32384[(2)] = null);

(statearr_31114_32384[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31107 === (2))){
var inst_31083 = (state_31106[(7)]);
var state_31106__$1 = state_31106;
if(cljs.core.truth_(inst_31083)){
var statearr_31115_32385 = state_31106__$1;
(statearr_31115_32385[(1)] = (4));

} else {
var statearr_31116_32386 = state_31106__$1;
(statearr_31116_32386[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31107 === (11))){
var inst_31097 = cljs.core.async.close_BANG_(ch);
var state_31106__$1 = state_31106;
var statearr_31117_32387 = state_31106__$1;
(statearr_31117_32387[(2)] = inst_31097);

(statearr_31117_32387[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31107 === (9))){
var state_31106__$1 = state_31106;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31118_32388 = state_31106__$1;
(statearr_31118_32388[(1)] = (11));

} else {
var statearr_31119_32389 = state_31106__$1;
(statearr_31119_32389[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31107 === (5))){
var inst_31083 = (state_31106[(7)]);
var state_31106__$1 = state_31106;
var statearr_31120_32392 = state_31106__$1;
(statearr_31120_32392[(2)] = inst_31083);

(statearr_31120_32392[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31107 === (10))){
var inst_31102 = (state_31106[(2)]);
var state_31106__$1 = state_31106;
var statearr_31121_32393 = state_31106__$1;
(statearr_31121_32393[(2)] = inst_31102);

(statearr_31121_32393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31107 === (8))){
var inst_31083 = (state_31106[(7)]);
var inst_31093 = cljs.core.next(inst_31083);
var inst_31083__$1 = inst_31093;
var state_31106__$1 = (function (){var statearr_31122 = state_31106;
(statearr_31122[(7)] = inst_31083__$1);

return statearr_31122;
})();
var statearr_31123_32394 = state_31106__$1;
(statearr_31123_32394[(2)] = null);

(statearr_31123_32394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30560__auto__ = null;
var cljs$core$async$state_machine__30560__auto____0 = (function (){
var statearr_31124 = [null,null,null,null,null,null,null,null];
(statearr_31124[(0)] = cljs$core$async$state_machine__30560__auto__);

(statearr_31124[(1)] = (1));

return statearr_31124;
});
var cljs$core$async$state_machine__30560__auto____1 = (function (state_31106){
while(true){
var ret_value__30561__auto__ = (function (){try{while(true){
var result__30562__auto__ = switch__30559__auto__(state_31106);
if(cljs.core.keyword_identical_QMARK_(result__30562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30562__auto__;
}
break;
}
}catch (e31125){var ex__30563__auto__ = e31125;
var statearr_31126_32397 = state_31106;
(statearr_31126_32397[(2)] = ex__30563__auto__);


if(cljs.core.seq((state_31106[(4)]))){
var statearr_31127_32398 = state_31106;
(statearr_31127_32398[(1)] = cljs.core.first((state_31106[(4)])));

} else {
throw ex__30563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32399 = state_31106;
state_31106 = G__32399;
continue;
} else {
return ret_value__30561__auto__;
}
break;
}
});
cljs$core$async$state_machine__30560__auto__ = function(state_31106){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30560__auto____1.call(this,state_31106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30560__auto____0;
cljs$core$async$state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30560__auto____1;
return cljs$core$async$state_machine__30560__auto__;
})()
})();
var state__30645__auto__ = (function (){var statearr_31128 = f__30644__auto__();
(statearr_31128[(6)] = c__30643__auto__);

return statearr_31128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30645__auto__);
}));

return c__30643__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31130 = arguments.length;
switch (G__31130) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_32402 = (function (_){
var x__4463__auto__ = (((_ == null))?null:_);
var m__4464__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4464__auto__.call(null,_));
} else {
var m__4461__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4461__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32402(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32404 = (function (m,ch,close_QMARK_){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4464__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4461__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4461__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32404(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32405 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4464__auto__.call(null,m,ch));
} else {
var m__4461__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4461__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32405(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32406 = (function (m){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4464__auto__.call(null,m));
} else {
var m__4461__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4461__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_32406(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31131 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31131 = (function (ch,cs,meta31132){
this.ch = ch;
this.cs = cs;
this.meta31132 = meta31132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31133,meta31132__$1){
var self__ = this;
var _31133__$1 = this;
return (new cljs.core.async.t_cljs$core$async31131(self__.ch,self__.cs,meta31132__$1));
}));

(cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31133){
var self__ = this;
var _31133__$1 = this;
return self__.meta31132;
}));

(cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31131.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31132","meta31132",1398646460,null)], null);
}));

(cljs.core.async.t_cljs$core$async31131.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31131.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31131");

(cljs.core.async.t_cljs$core$async31131.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async31131");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31131.
 */
cljs.core.async.__GT_t_cljs$core$async31131 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31131(ch__$1,cs__$1,meta31132){
return (new cljs.core.async.t_cljs$core$async31131(ch__$1,cs__$1,meta31132));
});

}

return (new cljs.core.async.t_cljs$core$async31131(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30643__auto___32412 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30644__auto__ = (function (){var switch__30559__auto__ = (function (state_31266){
var state_val_31267 = (state_31266[(1)]);
if((state_val_31267 === (7))){
var inst_31262 = (state_31266[(2)]);
var state_31266__$1 = state_31266;
var statearr_31268_32417 = state_31266__$1;
(statearr_31268_32417[(2)] = inst_31262);

(statearr_31268_32417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (20))){
var inst_31167 = (state_31266[(7)]);
var inst_31179 = cljs.core.first(inst_31167);
var inst_31180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31179,(0),null);
var inst_31181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31179,(1),null);
var state_31266__$1 = (function (){var statearr_31269 = state_31266;
(statearr_31269[(8)] = inst_31180);

return statearr_31269;
})();
if(cljs.core.truth_(inst_31181)){
var statearr_31270_32421 = state_31266__$1;
(statearr_31270_32421[(1)] = (22));

} else {
var statearr_31271_32425 = state_31266__$1;
(statearr_31271_32425[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (27))){
var inst_31211 = (state_31266[(9)]);
var inst_31136 = (state_31266[(10)]);
var inst_31216 = (state_31266[(11)]);
var inst_31209 = (state_31266[(12)]);
var inst_31216__$1 = cljs.core._nth(inst_31209,inst_31211);
var inst_31217 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31216__$1,inst_31136,done);
var state_31266__$1 = (function (){var statearr_31272 = state_31266;
(statearr_31272[(11)] = inst_31216__$1);

return statearr_31272;
})();
if(cljs.core.truth_(inst_31217)){
var statearr_31273_32429 = state_31266__$1;
(statearr_31273_32429[(1)] = (30));

} else {
var statearr_31274_32430 = state_31266__$1;
(statearr_31274_32430[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (1))){
var state_31266__$1 = state_31266;
var statearr_31275_32434 = state_31266__$1;
(statearr_31275_32434[(2)] = null);

(statearr_31275_32434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (24))){
var inst_31167 = (state_31266[(7)]);
var inst_31186 = (state_31266[(2)]);
var inst_31187 = cljs.core.next(inst_31167);
var inst_31145 = inst_31187;
var inst_31146 = null;
var inst_31147 = (0);
var inst_31148 = (0);
var state_31266__$1 = (function (){var statearr_31276 = state_31266;
(statearr_31276[(13)] = inst_31147);

(statearr_31276[(14)] = inst_31186);

(statearr_31276[(15)] = inst_31146);

(statearr_31276[(16)] = inst_31145);

(statearr_31276[(17)] = inst_31148);

return statearr_31276;
})();
var statearr_31277_32439 = state_31266__$1;
(statearr_31277_32439[(2)] = null);

(statearr_31277_32439[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (39))){
var state_31266__$1 = state_31266;
var statearr_31281_32440 = state_31266__$1;
(statearr_31281_32440[(2)] = null);

(statearr_31281_32440[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (4))){
var inst_31136 = (state_31266[(10)]);
var inst_31136__$1 = (state_31266[(2)]);
var inst_31137 = (inst_31136__$1 == null);
var state_31266__$1 = (function (){var statearr_31282 = state_31266;
(statearr_31282[(10)] = inst_31136__$1);

return statearr_31282;
})();
if(cljs.core.truth_(inst_31137)){
var statearr_31283_32441 = state_31266__$1;
(statearr_31283_32441[(1)] = (5));

} else {
var statearr_31284_32442 = state_31266__$1;
(statearr_31284_32442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (15))){
var inst_31147 = (state_31266[(13)]);
var inst_31146 = (state_31266[(15)]);
var inst_31145 = (state_31266[(16)]);
var inst_31148 = (state_31266[(17)]);
var inst_31163 = (state_31266[(2)]);
var inst_31164 = (inst_31148 + (1));
var tmp31278 = inst_31147;
var tmp31279 = inst_31146;
var tmp31280 = inst_31145;
var inst_31145__$1 = tmp31280;
var inst_31146__$1 = tmp31279;
var inst_31147__$1 = tmp31278;
var inst_31148__$1 = inst_31164;
var state_31266__$1 = (function (){var statearr_31285 = state_31266;
(statearr_31285[(13)] = inst_31147__$1);

(statearr_31285[(15)] = inst_31146__$1);

(statearr_31285[(18)] = inst_31163);

(statearr_31285[(16)] = inst_31145__$1);

(statearr_31285[(17)] = inst_31148__$1);

return statearr_31285;
})();
var statearr_31286_32443 = state_31266__$1;
(statearr_31286_32443[(2)] = null);

(statearr_31286_32443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (21))){
var inst_31190 = (state_31266[(2)]);
var state_31266__$1 = state_31266;
var statearr_31290_32446 = state_31266__$1;
(statearr_31290_32446[(2)] = inst_31190);

(statearr_31290_32446[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (31))){
var inst_31216 = (state_31266[(11)]);
var inst_31220 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31216);
var state_31266__$1 = state_31266;
var statearr_31291_32447 = state_31266__$1;
(statearr_31291_32447[(2)] = inst_31220);

(statearr_31291_32447[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (32))){
var inst_31208 = (state_31266[(19)]);
var inst_31211 = (state_31266[(9)]);
var inst_31210 = (state_31266[(20)]);
var inst_31209 = (state_31266[(12)]);
var inst_31222 = (state_31266[(2)]);
var inst_31223 = (inst_31211 + (1));
var tmp31287 = inst_31208;
var tmp31288 = inst_31210;
var tmp31289 = inst_31209;
var inst_31208__$1 = tmp31287;
var inst_31209__$1 = tmp31289;
var inst_31210__$1 = tmp31288;
var inst_31211__$1 = inst_31223;
var state_31266__$1 = (function (){var statearr_31292 = state_31266;
(statearr_31292[(19)] = inst_31208__$1);

(statearr_31292[(9)] = inst_31211__$1);

(statearr_31292[(20)] = inst_31210__$1);

(statearr_31292[(12)] = inst_31209__$1);

(statearr_31292[(21)] = inst_31222);

return statearr_31292;
})();
var statearr_31293_32448 = state_31266__$1;
(statearr_31293_32448[(2)] = null);

(statearr_31293_32448[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (40))){
var inst_31235 = (state_31266[(22)]);
var inst_31239 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31235);
var state_31266__$1 = state_31266;
var statearr_31294_32449 = state_31266__$1;
(statearr_31294_32449[(2)] = inst_31239);

(statearr_31294_32449[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (33))){
var inst_31226 = (state_31266[(23)]);
var inst_31228 = cljs.core.chunked_seq_QMARK_(inst_31226);
var state_31266__$1 = state_31266;
if(inst_31228){
var statearr_31295_32450 = state_31266__$1;
(statearr_31295_32450[(1)] = (36));

} else {
var statearr_31296_32451 = state_31266__$1;
(statearr_31296_32451[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (13))){
var inst_31157 = (state_31266[(24)]);
var inst_31160 = cljs.core.async.close_BANG_(inst_31157);
var state_31266__$1 = state_31266;
var statearr_31297_32452 = state_31266__$1;
(statearr_31297_32452[(2)] = inst_31160);

(statearr_31297_32452[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (22))){
var inst_31180 = (state_31266[(8)]);
var inst_31183 = cljs.core.async.close_BANG_(inst_31180);
var state_31266__$1 = state_31266;
var statearr_31298_32453 = state_31266__$1;
(statearr_31298_32453[(2)] = inst_31183);

(statearr_31298_32453[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (36))){
var inst_31226 = (state_31266[(23)]);
var inst_31230 = cljs.core.chunk_first(inst_31226);
var inst_31231 = cljs.core.chunk_rest(inst_31226);
var inst_31232 = cljs.core.count(inst_31230);
var inst_31208 = inst_31231;
var inst_31209 = inst_31230;
var inst_31210 = inst_31232;
var inst_31211 = (0);
var state_31266__$1 = (function (){var statearr_31299 = state_31266;
(statearr_31299[(19)] = inst_31208);

(statearr_31299[(9)] = inst_31211);

(statearr_31299[(20)] = inst_31210);

(statearr_31299[(12)] = inst_31209);

return statearr_31299;
})();
var statearr_31300_32454 = state_31266__$1;
(statearr_31300_32454[(2)] = null);

(statearr_31300_32454[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (41))){
var inst_31226 = (state_31266[(23)]);
var inst_31241 = (state_31266[(2)]);
var inst_31242 = cljs.core.next(inst_31226);
var inst_31208 = inst_31242;
var inst_31209 = null;
var inst_31210 = (0);
var inst_31211 = (0);
var state_31266__$1 = (function (){var statearr_31301 = state_31266;
(statearr_31301[(19)] = inst_31208);

(statearr_31301[(25)] = inst_31241);

(statearr_31301[(9)] = inst_31211);

(statearr_31301[(20)] = inst_31210);

(statearr_31301[(12)] = inst_31209);

return statearr_31301;
})();
var statearr_31302_32455 = state_31266__$1;
(statearr_31302_32455[(2)] = null);

(statearr_31302_32455[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (43))){
var state_31266__$1 = state_31266;
var statearr_31303_32456 = state_31266__$1;
(statearr_31303_32456[(2)] = null);

(statearr_31303_32456[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (29))){
var inst_31250 = (state_31266[(2)]);
var state_31266__$1 = state_31266;
var statearr_31304_32457 = state_31266__$1;
(statearr_31304_32457[(2)] = inst_31250);

(statearr_31304_32457[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (44))){
var inst_31259 = (state_31266[(2)]);
var state_31266__$1 = (function (){var statearr_31305 = state_31266;
(statearr_31305[(26)] = inst_31259);

return statearr_31305;
})();
var statearr_31306_32458 = state_31266__$1;
(statearr_31306_32458[(2)] = null);

(statearr_31306_32458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (6))){
var inst_31200 = (state_31266[(27)]);
var inst_31199 = cljs.core.deref(cs);
var inst_31200__$1 = cljs.core.keys(inst_31199);
var inst_31201 = cljs.core.count(inst_31200__$1);
var inst_31202 = cljs.core.reset_BANG_(dctr,inst_31201);
var inst_31207 = cljs.core.seq(inst_31200__$1);
var inst_31208 = inst_31207;
var inst_31209 = null;
var inst_31210 = (0);
var inst_31211 = (0);
var state_31266__$1 = (function (){var statearr_31307 = state_31266;
(statearr_31307[(27)] = inst_31200__$1);

(statearr_31307[(19)] = inst_31208);

(statearr_31307[(9)] = inst_31211);

(statearr_31307[(20)] = inst_31210);

(statearr_31307[(12)] = inst_31209);

(statearr_31307[(28)] = inst_31202);

return statearr_31307;
})();
var statearr_31308_32459 = state_31266__$1;
(statearr_31308_32459[(2)] = null);

(statearr_31308_32459[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (28))){
var inst_31208 = (state_31266[(19)]);
var inst_31226 = (state_31266[(23)]);
var inst_31226__$1 = cljs.core.seq(inst_31208);
var state_31266__$1 = (function (){var statearr_31309 = state_31266;
(statearr_31309[(23)] = inst_31226__$1);

return statearr_31309;
})();
if(inst_31226__$1){
var statearr_31310_32460 = state_31266__$1;
(statearr_31310_32460[(1)] = (33));

} else {
var statearr_31311_32461 = state_31266__$1;
(statearr_31311_32461[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (25))){
var inst_31211 = (state_31266[(9)]);
var inst_31210 = (state_31266[(20)]);
var inst_31213 = (inst_31211 < inst_31210);
var inst_31214 = inst_31213;
var state_31266__$1 = state_31266;
if(cljs.core.truth_(inst_31214)){
var statearr_31312_32462 = state_31266__$1;
(statearr_31312_32462[(1)] = (27));

} else {
var statearr_31313_32463 = state_31266__$1;
(statearr_31313_32463[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (34))){
var state_31266__$1 = state_31266;
var statearr_31314_32464 = state_31266__$1;
(statearr_31314_32464[(2)] = null);

(statearr_31314_32464[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (17))){
var state_31266__$1 = state_31266;
var statearr_31315_32465 = state_31266__$1;
(statearr_31315_32465[(2)] = null);

(statearr_31315_32465[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (3))){
var inst_31264 = (state_31266[(2)]);
var state_31266__$1 = state_31266;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31266__$1,inst_31264);
} else {
if((state_val_31267 === (12))){
var inst_31195 = (state_31266[(2)]);
var state_31266__$1 = state_31266;
var statearr_31316_32470 = state_31266__$1;
(statearr_31316_32470[(2)] = inst_31195);

(statearr_31316_32470[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (2))){
var state_31266__$1 = state_31266;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31266__$1,(4),ch);
} else {
if((state_val_31267 === (23))){
var state_31266__$1 = state_31266;
var statearr_31317_32471 = state_31266__$1;
(statearr_31317_32471[(2)] = null);

(statearr_31317_32471[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (35))){
var inst_31248 = (state_31266[(2)]);
var state_31266__$1 = state_31266;
var statearr_31318_32472 = state_31266__$1;
(statearr_31318_32472[(2)] = inst_31248);

(statearr_31318_32472[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (19))){
var inst_31167 = (state_31266[(7)]);
var inst_31171 = cljs.core.chunk_first(inst_31167);
var inst_31172 = cljs.core.chunk_rest(inst_31167);
var inst_31173 = cljs.core.count(inst_31171);
var inst_31145 = inst_31172;
var inst_31146 = inst_31171;
var inst_31147 = inst_31173;
var inst_31148 = (0);
var state_31266__$1 = (function (){var statearr_31319 = state_31266;
(statearr_31319[(13)] = inst_31147);

(statearr_31319[(15)] = inst_31146);

(statearr_31319[(16)] = inst_31145);

(statearr_31319[(17)] = inst_31148);

return statearr_31319;
})();
var statearr_31320_32473 = state_31266__$1;
(statearr_31320_32473[(2)] = null);

(statearr_31320_32473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (11))){
var inst_31167 = (state_31266[(7)]);
var inst_31145 = (state_31266[(16)]);
var inst_31167__$1 = cljs.core.seq(inst_31145);
var state_31266__$1 = (function (){var statearr_31321 = state_31266;
(statearr_31321[(7)] = inst_31167__$1);

return statearr_31321;
})();
if(inst_31167__$1){
var statearr_31322_32474 = state_31266__$1;
(statearr_31322_32474[(1)] = (16));

} else {
var statearr_31323_32475 = state_31266__$1;
(statearr_31323_32475[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (9))){
var inst_31197 = (state_31266[(2)]);
var state_31266__$1 = state_31266;
var statearr_31324_32476 = state_31266__$1;
(statearr_31324_32476[(2)] = inst_31197);

(statearr_31324_32476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (5))){
var inst_31143 = cljs.core.deref(cs);
var inst_31144 = cljs.core.seq(inst_31143);
var inst_31145 = inst_31144;
var inst_31146 = null;
var inst_31147 = (0);
var inst_31148 = (0);
var state_31266__$1 = (function (){var statearr_31325 = state_31266;
(statearr_31325[(13)] = inst_31147);

(statearr_31325[(15)] = inst_31146);

(statearr_31325[(16)] = inst_31145);

(statearr_31325[(17)] = inst_31148);

return statearr_31325;
})();
var statearr_31326_32477 = state_31266__$1;
(statearr_31326_32477[(2)] = null);

(statearr_31326_32477[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (14))){
var state_31266__$1 = state_31266;
var statearr_31327_32478 = state_31266__$1;
(statearr_31327_32478[(2)] = null);

(statearr_31327_32478[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (45))){
var inst_31256 = (state_31266[(2)]);
var state_31266__$1 = state_31266;
var statearr_31328_32479 = state_31266__$1;
(statearr_31328_32479[(2)] = inst_31256);

(statearr_31328_32479[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (26))){
var inst_31200 = (state_31266[(27)]);
var inst_31252 = (state_31266[(2)]);
var inst_31253 = cljs.core.seq(inst_31200);
var state_31266__$1 = (function (){var statearr_31329 = state_31266;
(statearr_31329[(29)] = inst_31252);

return statearr_31329;
})();
if(inst_31253){
var statearr_31330_32480 = state_31266__$1;
(statearr_31330_32480[(1)] = (42));

} else {
var statearr_31331_32481 = state_31266__$1;
(statearr_31331_32481[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (16))){
var inst_31167 = (state_31266[(7)]);
var inst_31169 = cljs.core.chunked_seq_QMARK_(inst_31167);
var state_31266__$1 = state_31266;
if(inst_31169){
var statearr_31332_32482 = state_31266__$1;
(statearr_31332_32482[(1)] = (19));

} else {
var statearr_31333_32487 = state_31266__$1;
(statearr_31333_32487[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (38))){
var inst_31245 = (state_31266[(2)]);
var state_31266__$1 = state_31266;
var statearr_31334_32489 = state_31266__$1;
(statearr_31334_32489[(2)] = inst_31245);

(statearr_31334_32489[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (30))){
var state_31266__$1 = state_31266;
var statearr_31335_32490 = state_31266__$1;
(statearr_31335_32490[(2)] = null);

(statearr_31335_32490[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (10))){
var inst_31146 = (state_31266[(15)]);
var inst_31148 = (state_31266[(17)]);
var inst_31156 = cljs.core._nth(inst_31146,inst_31148);
var inst_31157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31156,(0),null);
var inst_31158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31156,(1),null);
var state_31266__$1 = (function (){var statearr_31336 = state_31266;
(statearr_31336[(24)] = inst_31157);

return statearr_31336;
})();
if(cljs.core.truth_(inst_31158)){
var statearr_31337_32491 = state_31266__$1;
(statearr_31337_32491[(1)] = (13));

} else {
var statearr_31338_32492 = state_31266__$1;
(statearr_31338_32492[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (18))){
var inst_31193 = (state_31266[(2)]);
var state_31266__$1 = state_31266;
var statearr_31339_32494 = state_31266__$1;
(statearr_31339_32494[(2)] = inst_31193);

(statearr_31339_32494[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (42))){
var state_31266__$1 = state_31266;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31266__$1,(45),dchan);
} else {
if((state_val_31267 === (37))){
var inst_31136 = (state_31266[(10)]);
var inst_31235 = (state_31266[(22)]);
var inst_31226 = (state_31266[(23)]);
var inst_31235__$1 = cljs.core.first(inst_31226);
var inst_31236 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31235__$1,inst_31136,done);
var state_31266__$1 = (function (){var statearr_31340 = state_31266;
(statearr_31340[(22)] = inst_31235__$1);

return statearr_31340;
})();
if(cljs.core.truth_(inst_31236)){
var statearr_31341_32495 = state_31266__$1;
(statearr_31341_32495[(1)] = (39));

} else {
var statearr_31342_32496 = state_31266__$1;
(statearr_31342_32496[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (8))){
var inst_31147 = (state_31266[(13)]);
var inst_31148 = (state_31266[(17)]);
var inst_31150 = (inst_31148 < inst_31147);
var inst_31151 = inst_31150;
var state_31266__$1 = state_31266;
if(cljs.core.truth_(inst_31151)){
var statearr_31343_32497 = state_31266__$1;
(statearr_31343_32497[(1)] = (10));

} else {
var statearr_31344_32498 = state_31266__$1;
(statearr_31344_32498[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__30560__auto__ = null;
var cljs$core$async$mult_$_state_machine__30560__auto____0 = (function (){
var statearr_31345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31345[(0)] = cljs$core$async$mult_$_state_machine__30560__auto__);

(statearr_31345[(1)] = (1));

return statearr_31345;
});
var cljs$core$async$mult_$_state_machine__30560__auto____1 = (function (state_31266){
while(true){
var ret_value__30561__auto__ = (function (){try{while(true){
var result__30562__auto__ = switch__30559__auto__(state_31266);
if(cljs.core.keyword_identical_QMARK_(result__30562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30562__auto__;
}
break;
}
}catch (e31346){var ex__30563__auto__ = e31346;
var statearr_31347_32499 = state_31266;
(statearr_31347_32499[(2)] = ex__30563__auto__);


if(cljs.core.seq((state_31266[(4)]))){
var statearr_31348_32500 = state_31266;
(statearr_31348_32500[(1)] = cljs.core.first((state_31266[(4)])));

} else {
throw ex__30563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32501 = state_31266;
state_31266 = G__32501;
continue;
} else {
return ret_value__30561__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30560__auto__ = function(state_31266){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30560__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30560__auto____1.call(this,state_31266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30560__auto____0;
cljs$core$async$mult_$_state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30560__auto____1;
return cljs$core$async$mult_$_state_machine__30560__auto__;
})()
})();
var state__30645__auto__ = (function (){var statearr_31349 = f__30644__auto__();
(statearr_31349[(6)] = c__30643__auto___32412);

return statearr_31349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30645__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31351 = arguments.length;
switch (G__31351) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_32503 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4464__auto__.call(null,m,ch));
} else {
var m__4461__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4461__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_32503(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_32508 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4464__auto__.call(null,m,ch));
} else {
var m__4461__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4461__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_32508(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_32509 = (function (m){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4464__auto__.call(null,m));
} else {
var m__4461__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4461__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_32509(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_32510 = (function (m,state_map){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4464__auto__.call(null,m,state_map));
} else {
var m__4461__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4461__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_32510(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_32511 = (function (m,mode){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4464__auto__.call(null,m,mode));
} else {
var m__4461__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4461__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_32511(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___32512 = arguments.length;
var i__4772__auto___32513 = (0);
while(true){
if((i__4772__auto___32513 < len__4771__auto___32512)){
args__4777__auto__.push((arguments[i__4772__auto___32513]));

var G__32514 = (i__4772__auto___32513 + (1));
i__4772__auto___32513 = G__32514;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31356){
var map__31357 = p__31356;
var map__31357__$1 = cljs.core.__destructure_map(map__31357);
var opts = map__31357__$1;
var statearr_31358_32515 = state;
(statearr_31358_32515[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31359_32516 = state;
(statearr_31359_32516[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31360_32517 = state;
(statearr_31360_32517[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31352){
var G__31353 = cljs.core.first(seq31352);
var seq31352__$1 = cljs.core.next(seq31352);
var G__31354 = cljs.core.first(seq31352__$1);
var seq31352__$2 = cljs.core.next(seq31352__$1);
var G__31355 = cljs.core.first(seq31352__$2);
var seq31352__$3 = cljs.core.next(seq31352__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31353,G__31354,G__31355,seq31352__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31361 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31361 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31362){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31362 = meta31362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31363,meta31362__$1){
var self__ = this;
var _31363__$1 = this;
return (new cljs.core.async.t_cljs$core$async31361(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31362__$1));
}));

(cljs.core.async.t_cljs$core$async31361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31363){
var self__ = this;
var _31363__$1 = this;
return self__.meta31362;
}));

(cljs.core.async.t_cljs$core$async31361.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31361.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31361.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31361.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31361.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31361.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31361.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31361.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31361.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31362","meta31362",-1250317436,null)], null);
}));

(cljs.core.async.t_cljs$core$async31361.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31361.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31361");

(cljs.core.async.t_cljs$core$async31361.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async31361");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31361.
 */
cljs.core.async.__GT_t_cljs$core$async31361 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31361(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31362){
return (new cljs.core.async.t_cljs$core$async31361(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31362));
});

}

return (new cljs.core.async.t_cljs$core$async31361(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30643__auto___32527 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30644__auto__ = (function (){var switch__30559__auto__ = (function (state_31425){
var state_val_31426 = (state_31425[(1)]);
if((state_val_31426 === (7))){
var inst_31421 = (state_31425[(2)]);
var state_31425__$1 = state_31425;
var statearr_31427_32528 = state_31425__$1;
(statearr_31427_32528[(2)] = inst_31421);

(statearr_31427_32528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (20))){
var inst_31415 = (state_31425[(2)]);
var state_31425__$1 = state_31425;
var statearr_31428_32529 = state_31425__$1;
(statearr_31428_32529[(2)] = inst_31415);

(statearr_31428_32529[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (1))){
var inst_31367 = calc_state();
var inst_31368 = cljs.core.__destructure_map(inst_31367);
var inst_31369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31368,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31370 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31368,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31368,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31372 = inst_31367;
var state_31425__$1 = (function (){var statearr_31429 = state_31425;
(statearr_31429[(7)] = inst_31370);

(statearr_31429[(8)] = inst_31371);

(statearr_31429[(9)] = inst_31369);

(statearr_31429[(10)] = inst_31372);

return statearr_31429;
})();
var statearr_31430_32531 = state_31425__$1;
(statearr_31430_32531[(2)] = null);

(statearr_31430_32531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (4))){
var inst_31384 = (state_31425[(11)]);
var inst_31385 = (state_31425[(12)]);
var inst_31383 = (state_31425[(2)]);
var inst_31384__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31383,(0),null);
var inst_31385__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31383,(1),null);
var inst_31386 = (inst_31384__$1 == null);
var inst_31387 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31385__$1,change);
var inst_31388 = ((inst_31386) || (inst_31387));
var state_31425__$1 = (function (){var statearr_31431 = state_31425;
(statearr_31431[(11)] = inst_31384__$1);

(statearr_31431[(12)] = inst_31385__$1);

return statearr_31431;
})();
if(cljs.core.truth_(inst_31388)){
var statearr_31432_32536 = state_31425__$1;
(statearr_31432_32536[(1)] = (5));

} else {
var statearr_31433_32537 = state_31425__$1;
(statearr_31433_32537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (15))){
var inst_31375 = (state_31425[(13)]);
var inst_31372 = inst_31375;
var state_31425__$1 = (function (){var statearr_31434 = state_31425;
(statearr_31434[(10)] = inst_31372);

return statearr_31434;
})();
var statearr_31435_32538 = state_31425__$1;
(statearr_31435_32538[(2)] = null);

(statearr_31435_32538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (13))){
var inst_31407 = (state_31425[(2)]);
var state_31425__$1 = state_31425;
if(cljs.core.truth_(inst_31407)){
var statearr_31436_32542 = state_31425__$1;
(statearr_31436_32542[(1)] = (14));

} else {
var statearr_31437_32543 = state_31425__$1;
(statearr_31437_32543[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (6))){
var inst_31399 = (state_31425[(14)]);
var inst_31376 = (state_31425[(15)]);
var inst_31385 = (state_31425[(12)]);
var inst_31399__$1 = (inst_31376.cljs$core$IFn$_invoke$arity$1 ? inst_31376.cljs$core$IFn$_invoke$arity$1(inst_31385) : inst_31376.call(null,inst_31385));
var state_31425__$1 = (function (){var statearr_31438 = state_31425;
(statearr_31438[(14)] = inst_31399__$1);

return statearr_31438;
})();
if(cljs.core.truth_(inst_31399__$1)){
var statearr_31439_32544 = state_31425__$1;
(statearr_31439_32544[(1)] = (11));

} else {
var statearr_31440_32545 = state_31425__$1;
(statearr_31440_32545[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (17))){
var inst_31410 = (state_31425[(2)]);
var state_31425__$1 = state_31425;
if(cljs.core.truth_(inst_31410)){
var statearr_31441_32547 = state_31425__$1;
(statearr_31441_32547[(1)] = (18));

} else {
var statearr_31442_32548 = state_31425__$1;
(statearr_31442_32548[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (3))){
var inst_31423 = (state_31425[(2)]);
var state_31425__$1 = state_31425;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31425__$1,inst_31423);
} else {
if((state_val_31426 === (12))){
var inst_31376 = (state_31425[(15)]);
var inst_31377 = (state_31425[(16)]);
var inst_31385 = (state_31425[(12)]);
var inst_31402 = cljs.core.empty_QMARK_(inst_31376);
var inst_31403 = (inst_31377.cljs$core$IFn$_invoke$arity$1 ? inst_31377.cljs$core$IFn$_invoke$arity$1(inst_31385) : inst_31377.call(null,inst_31385));
var inst_31404 = cljs.core.not(inst_31403);
var inst_31405 = ((inst_31402) && (inst_31404));
var state_31425__$1 = state_31425;
var statearr_31443_32549 = state_31425__$1;
(statearr_31443_32549[(2)] = inst_31405);

(statearr_31443_32549[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (2))){
var inst_31375 = (state_31425[(13)]);
var inst_31372 = (state_31425[(10)]);
var inst_31375__$1 = cljs.core.__destructure_map(inst_31372);
var inst_31376 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31375__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31375__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31375__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31425__$1 = (function (){var statearr_31444 = state_31425;
(statearr_31444[(13)] = inst_31375__$1);

(statearr_31444[(15)] = inst_31376);

(statearr_31444[(16)] = inst_31377);

return statearr_31444;
})();
return cljs.core.async.ioc_alts_BANG_(state_31425__$1,(4),inst_31378);
} else {
if((state_val_31426 === (19))){
var state_31425__$1 = state_31425;
var statearr_31445_32550 = state_31425__$1;
(statearr_31445_32550[(2)] = null);

(statearr_31445_32550[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (11))){
var inst_31399 = (state_31425[(14)]);
var state_31425__$1 = state_31425;
var statearr_31446_32555 = state_31425__$1;
(statearr_31446_32555[(2)] = inst_31399);

(statearr_31446_32555[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (9))){
var state_31425__$1 = state_31425;
var statearr_31447_32556 = state_31425__$1;
(statearr_31447_32556[(2)] = null);

(statearr_31447_32556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (5))){
var inst_31384 = (state_31425[(11)]);
var inst_31390 = (inst_31384 == null);
var state_31425__$1 = state_31425;
if(cljs.core.truth_(inst_31390)){
var statearr_31448_32557 = state_31425__$1;
(statearr_31448_32557[(1)] = (8));

} else {
var statearr_31449_32559 = state_31425__$1;
(statearr_31449_32559[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (14))){
var inst_31384 = (state_31425[(11)]);
var state_31425__$1 = state_31425;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31425__$1,(17),out,inst_31384);
} else {
if((state_val_31426 === (16))){
var inst_31419 = (state_31425[(2)]);
var state_31425__$1 = state_31425;
var statearr_31450_32565 = state_31425__$1;
(statearr_31450_32565[(2)] = inst_31419);

(statearr_31450_32565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (10))){
var inst_31395 = (state_31425[(2)]);
var inst_31396 = calc_state();
var inst_31372 = inst_31396;
var state_31425__$1 = (function (){var statearr_31451 = state_31425;
(statearr_31451[(10)] = inst_31372);

(statearr_31451[(17)] = inst_31395);

return statearr_31451;
})();
var statearr_31452_32566 = state_31425__$1;
(statearr_31452_32566[(2)] = null);

(statearr_31452_32566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (18))){
var inst_31375 = (state_31425[(13)]);
var inst_31372 = inst_31375;
var state_31425__$1 = (function (){var statearr_31453 = state_31425;
(statearr_31453[(10)] = inst_31372);

return statearr_31453;
})();
var statearr_31454_32567 = state_31425__$1;
(statearr_31454_32567[(2)] = null);

(statearr_31454_32567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (8))){
var inst_31385 = (state_31425[(12)]);
var inst_31392 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31385);
var state_31425__$1 = state_31425;
var statearr_31455_32568 = state_31425__$1;
(statearr_31455_32568[(2)] = inst_31392);

(statearr_31455_32568[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__30560__auto__ = null;
var cljs$core$async$mix_$_state_machine__30560__auto____0 = (function (){
var statearr_31456 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31456[(0)] = cljs$core$async$mix_$_state_machine__30560__auto__);

(statearr_31456[(1)] = (1));

return statearr_31456;
});
var cljs$core$async$mix_$_state_machine__30560__auto____1 = (function (state_31425){
while(true){
var ret_value__30561__auto__ = (function (){try{while(true){
var result__30562__auto__ = switch__30559__auto__(state_31425);
if(cljs.core.keyword_identical_QMARK_(result__30562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30562__auto__;
}
break;
}
}catch (e31457){var ex__30563__auto__ = e31457;
var statearr_31458_32569 = state_31425;
(statearr_31458_32569[(2)] = ex__30563__auto__);


if(cljs.core.seq((state_31425[(4)]))){
var statearr_31459_32570 = state_31425;
(statearr_31459_32570[(1)] = cljs.core.first((state_31425[(4)])));

} else {
throw ex__30563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32571 = state_31425;
state_31425 = G__32571;
continue;
} else {
return ret_value__30561__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30560__auto__ = function(state_31425){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30560__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30560__auto____1.call(this,state_31425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30560__auto____0;
cljs$core$async$mix_$_state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30560__auto____1;
return cljs$core$async$mix_$_state_machine__30560__auto__;
})()
})();
var state__30645__auto__ = (function (){var statearr_31460 = f__30644__auto__();
(statearr_31460[(6)] = c__30643__auto___32527);

return statearr_31460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30645__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_32572 = (function (p,v,ch,close_QMARK_){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4464__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4461__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4461__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_32572(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_32573 = (function (p,v,ch){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4464__auto__.call(null,p,v,ch));
} else {
var m__4461__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4461__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_32573(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_32574 = (function() {
var G__32575 = null;
var G__32575__1 = (function (p){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4464__auto__.call(null,p));
} else {
var m__4461__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4461__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__32575__2 = (function (p,v){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4464__auto__.call(null,p,v));
} else {
var m__4461__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4461__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__32575 = function(p,v){
switch(arguments.length){
case 1:
return G__32575__1.call(this,p);
case 2:
return G__32575__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32575.cljs$core$IFn$_invoke$arity$1 = G__32575__1;
G__32575.cljs$core$IFn$_invoke$arity$2 = G__32575__2;
return G__32575;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31462 = arguments.length;
switch (G__31462) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32574(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32574(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31465 = arguments.length;
switch (G__31465) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4160__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31463_SHARP_){
if(cljs.core.truth_((p1__31463_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31463_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31463_SHARP_.call(null,topic)))){
return p1__31463_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31463_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31466 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31466 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31467){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31467 = meta31467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31468,meta31467__$1){
var self__ = this;
var _31468__$1 = this;
return (new cljs.core.async.t_cljs$core$async31466(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31467__$1));
}));

(cljs.core.async.t_cljs$core$async31466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31468){
var self__ = this;
var _31468__$1 = this;
return self__.meta31467;
}));

(cljs.core.async.t_cljs$core$async31466.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31466.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31466.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31466.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31466.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31466.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31466.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31466.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31467","meta31467",1700957569,null)], null);
}));

(cljs.core.async.t_cljs$core$async31466.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31466");

(cljs.core.async.t_cljs$core$async31466.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async31466");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31466.
 */
cljs.core.async.__GT_t_cljs$core$async31466 = (function cljs$core$async$__GT_t_cljs$core$async31466(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31467){
return (new cljs.core.async.t_cljs$core$async31466(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31467));
});

}

return (new cljs.core.async.t_cljs$core$async31466(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30643__auto___32588 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30644__auto__ = (function (){var switch__30559__auto__ = (function (state_31540){
var state_val_31541 = (state_31540[(1)]);
if((state_val_31541 === (7))){
var inst_31536 = (state_31540[(2)]);
var state_31540__$1 = state_31540;
var statearr_31542_32589 = state_31540__$1;
(statearr_31542_32589[(2)] = inst_31536);

(statearr_31542_32589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (20))){
var state_31540__$1 = state_31540;
var statearr_31543_32590 = state_31540__$1;
(statearr_31543_32590[(2)] = null);

(statearr_31543_32590[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (1))){
var state_31540__$1 = state_31540;
var statearr_31544_32591 = state_31540__$1;
(statearr_31544_32591[(2)] = null);

(statearr_31544_32591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (24))){
var inst_31519 = (state_31540[(7)]);
var inst_31528 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31519);
var state_31540__$1 = state_31540;
var statearr_31545_32595 = state_31540__$1;
(statearr_31545_32595[(2)] = inst_31528);

(statearr_31545_32595[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (4))){
var inst_31471 = (state_31540[(8)]);
var inst_31471__$1 = (state_31540[(2)]);
var inst_31472 = (inst_31471__$1 == null);
var state_31540__$1 = (function (){var statearr_31546 = state_31540;
(statearr_31546[(8)] = inst_31471__$1);

return statearr_31546;
})();
if(cljs.core.truth_(inst_31472)){
var statearr_31547_32596 = state_31540__$1;
(statearr_31547_32596[(1)] = (5));

} else {
var statearr_31548_32597 = state_31540__$1;
(statearr_31548_32597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (15))){
var inst_31513 = (state_31540[(2)]);
var state_31540__$1 = state_31540;
var statearr_31549_32598 = state_31540__$1;
(statearr_31549_32598[(2)] = inst_31513);

(statearr_31549_32598[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (21))){
var inst_31533 = (state_31540[(2)]);
var state_31540__$1 = (function (){var statearr_31550 = state_31540;
(statearr_31550[(9)] = inst_31533);

return statearr_31550;
})();
var statearr_31551_32599 = state_31540__$1;
(statearr_31551_32599[(2)] = null);

(statearr_31551_32599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (13))){
var inst_31495 = (state_31540[(10)]);
var inst_31497 = cljs.core.chunked_seq_QMARK_(inst_31495);
var state_31540__$1 = state_31540;
if(inst_31497){
var statearr_31552_32600 = state_31540__$1;
(statearr_31552_32600[(1)] = (16));

} else {
var statearr_31553_32601 = state_31540__$1;
(statearr_31553_32601[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (22))){
var inst_31525 = (state_31540[(2)]);
var state_31540__$1 = state_31540;
if(cljs.core.truth_(inst_31525)){
var statearr_31554_32602 = state_31540__$1;
(statearr_31554_32602[(1)] = (23));

} else {
var statearr_31555_32603 = state_31540__$1;
(statearr_31555_32603[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (6))){
var inst_31521 = (state_31540[(11)]);
var inst_31519 = (state_31540[(7)]);
var inst_31471 = (state_31540[(8)]);
var inst_31519__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31471) : topic_fn.call(null,inst_31471));
var inst_31520 = cljs.core.deref(mults);
var inst_31521__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31520,inst_31519__$1);
var state_31540__$1 = (function (){var statearr_31556 = state_31540;
(statearr_31556[(11)] = inst_31521__$1);

(statearr_31556[(7)] = inst_31519__$1);

return statearr_31556;
})();
if(cljs.core.truth_(inst_31521__$1)){
var statearr_31557_32607 = state_31540__$1;
(statearr_31557_32607[(1)] = (19));

} else {
var statearr_31558_32608 = state_31540__$1;
(statearr_31558_32608[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (25))){
var inst_31530 = (state_31540[(2)]);
var state_31540__$1 = state_31540;
var statearr_31559_32609 = state_31540__$1;
(statearr_31559_32609[(2)] = inst_31530);

(statearr_31559_32609[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (17))){
var inst_31495 = (state_31540[(10)]);
var inst_31504 = cljs.core.first(inst_31495);
var inst_31505 = cljs.core.async.muxch_STAR_(inst_31504);
var inst_31506 = cljs.core.async.close_BANG_(inst_31505);
var inst_31507 = cljs.core.next(inst_31495);
var inst_31481 = inst_31507;
var inst_31482 = null;
var inst_31483 = (0);
var inst_31484 = (0);
var state_31540__$1 = (function (){var statearr_31560 = state_31540;
(statearr_31560[(12)] = inst_31484);

(statearr_31560[(13)] = inst_31483);

(statearr_31560[(14)] = inst_31506);

(statearr_31560[(15)] = inst_31481);

(statearr_31560[(16)] = inst_31482);

return statearr_31560;
})();
var statearr_31561_32610 = state_31540__$1;
(statearr_31561_32610[(2)] = null);

(statearr_31561_32610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (3))){
var inst_31538 = (state_31540[(2)]);
var state_31540__$1 = state_31540;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31540__$1,inst_31538);
} else {
if((state_val_31541 === (12))){
var inst_31515 = (state_31540[(2)]);
var state_31540__$1 = state_31540;
var statearr_31562_32611 = state_31540__$1;
(statearr_31562_32611[(2)] = inst_31515);

(statearr_31562_32611[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (2))){
var state_31540__$1 = state_31540;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31540__$1,(4),ch);
} else {
if((state_val_31541 === (23))){
var state_31540__$1 = state_31540;
var statearr_31563_32612 = state_31540__$1;
(statearr_31563_32612[(2)] = null);

(statearr_31563_32612[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (19))){
var inst_31521 = (state_31540[(11)]);
var inst_31471 = (state_31540[(8)]);
var inst_31523 = cljs.core.async.muxch_STAR_(inst_31521);
var state_31540__$1 = state_31540;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31540__$1,(22),inst_31523,inst_31471);
} else {
if((state_val_31541 === (11))){
var inst_31495 = (state_31540[(10)]);
var inst_31481 = (state_31540[(15)]);
var inst_31495__$1 = cljs.core.seq(inst_31481);
var state_31540__$1 = (function (){var statearr_31564 = state_31540;
(statearr_31564[(10)] = inst_31495__$1);

return statearr_31564;
})();
if(inst_31495__$1){
var statearr_31565_32616 = state_31540__$1;
(statearr_31565_32616[(1)] = (13));

} else {
var statearr_31566_32617 = state_31540__$1;
(statearr_31566_32617[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (9))){
var inst_31517 = (state_31540[(2)]);
var state_31540__$1 = state_31540;
var statearr_31567_32618 = state_31540__$1;
(statearr_31567_32618[(2)] = inst_31517);

(statearr_31567_32618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (5))){
var inst_31478 = cljs.core.deref(mults);
var inst_31479 = cljs.core.vals(inst_31478);
var inst_31480 = cljs.core.seq(inst_31479);
var inst_31481 = inst_31480;
var inst_31482 = null;
var inst_31483 = (0);
var inst_31484 = (0);
var state_31540__$1 = (function (){var statearr_31568 = state_31540;
(statearr_31568[(12)] = inst_31484);

(statearr_31568[(13)] = inst_31483);

(statearr_31568[(15)] = inst_31481);

(statearr_31568[(16)] = inst_31482);

return statearr_31568;
})();
var statearr_31569_32620 = state_31540__$1;
(statearr_31569_32620[(2)] = null);

(statearr_31569_32620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (14))){
var state_31540__$1 = state_31540;
var statearr_31573_32621 = state_31540__$1;
(statearr_31573_32621[(2)] = null);

(statearr_31573_32621[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (16))){
var inst_31495 = (state_31540[(10)]);
var inst_31499 = cljs.core.chunk_first(inst_31495);
var inst_31500 = cljs.core.chunk_rest(inst_31495);
var inst_31501 = cljs.core.count(inst_31499);
var inst_31481 = inst_31500;
var inst_31482 = inst_31499;
var inst_31483 = inst_31501;
var inst_31484 = (0);
var state_31540__$1 = (function (){var statearr_31574 = state_31540;
(statearr_31574[(12)] = inst_31484);

(statearr_31574[(13)] = inst_31483);

(statearr_31574[(15)] = inst_31481);

(statearr_31574[(16)] = inst_31482);

return statearr_31574;
})();
var statearr_31575_32631 = state_31540__$1;
(statearr_31575_32631[(2)] = null);

(statearr_31575_32631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (10))){
var inst_31484 = (state_31540[(12)]);
var inst_31483 = (state_31540[(13)]);
var inst_31481 = (state_31540[(15)]);
var inst_31482 = (state_31540[(16)]);
var inst_31489 = cljs.core._nth(inst_31482,inst_31484);
var inst_31490 = cljs.core.async.muxch_STAR_(inst_31489);
var inst_31491 = cljs.core.async.close_BANG_(inst_31490);
var inst_31492 = (inst_31484 + (1));
var tmp31570 = inst_31483;
var tmp31571 = inst_31481;
var tmp31572 = inst_31482;
var inst_31481__$1 = tmp31571;
var inst_31482__$1 = tmp31572;
var inst_31483__$1 = tmp31570;
var inst_31484__$1 = inst_31492;
var state_31540__$1 = (function (){var statearr_31576 = state_31540;
(statearr_31576[(12)] = inst_31484__$1);

(statearr_31576[(17)] = inst_31491);

(statearr_31576[(13)] = inst_31483__$1);

(statearr_31576[(15)] = inst_31481__$1);

(statearr_31576[(16)] = inst_31482__$1);

return statearr_31576;
})();
var statearr_31577_32638 = state_31540__$1;
(statearr_31577_32638[(2)] = null);

(statearr_31577_32638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (18))){
var inst_31510 = (state_31540[(2)]);
var state_31540__$1 = state_31540;
var statearr_31578_32639 = state_31540__$1;
(statearr_31578_32639[(2)] = inst_31510);

(statearr_31578_32639[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (8))){
var inst_31484 = (state_31540[(12)]);
var inst_31483 = (state_31540[(13)]);
var inst_31486 = (inst_31484 < inst_31483);
var inst_31487 = inst_31486;
var state_31540__$1 = state_31540;
if(cljs.core.truth_(inst_31487)){
var statearr_31579_32640 = state_31540__$1;
(statearr_31579_32640[(1)] = (10));

} else {
var statearr_31580_32641 = state_31540__$1;
(statearr_31580_32641[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30560__auto__ = null;
var cljs$core$async$state_machine__30560__auto____0 = (function (){
var statearr_31581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31581[(0)] = cljs$core$async$state_machine__30560__auto__);

(statearr_31581[(1)] = (1));

return statearr_31581;
});
var cljs$core$async$state_machine__30560__auto____1 = (function (state_31540){
while(true){
var ret_value__30561__auto__ = (function (){try{while(true){
var result__30562__auto__ = switch__30559__auto__(state_31540);
if(cljs.core.keyword_identical_QMARK_(result__30562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30562__auto__;
}
break;
}
}catch (e31582){var ex__30563__auto__ = e31582;
var statearr_31583_32642 = state_31540;
(statearr_31583_32642[(2)] = ex__30563__auto__);


if(cljs.core.seq((state_31540[(4)]))){
var statearr_31584_32643 = state_31540;
(statearr_31584_32643[(1)] = cljs.core.first((state_31540[(4)])));

} else {
throw ex__30563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32644 = state_31540;
state_31540 = G__32644;
continue;
} else {
return ret_value__30561__auto__;
}
break;
}
});
cljs$core$async$state_machine__30560__auto__ = function(state_31540){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30560__auto____1.call(this,state_31540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30560__auto____0;
cljs$core$async$state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30560__auto____1;
return cljs$core$async$state_machine__30560__auto__;
})()
})();
var state__30645__auto__ = (function (){var statearr_31585 = f__30644__auto__();
(statearr_31585[(6)] = c__30643__auto___32588);

return statearr_31585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30645__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31587 = arguments.length;
switch (G__31587) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31589 = arguments.length;
switch (G__31589) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31591 = arguments.length;
switch (G__31591) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30643__auto___32660 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30644__auto__ = (function (){var switch__30559__auto__ = (function (state_31634){
var state_val_31635 = (state_31634[(1)]);
if((state_val_31635 === (7))){
var state_31634__$1 = state_31634;
var statearr_31636_32661 = state_31634__$1;
(statearr_31636_32661[(2)] = null);

(statearr_31636_32661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (1))){
var state_31634__$1 = state_31634;
var statearr_31637_32662 = state_31634__$1;
(statearr_31637_32662[(2)] = null);

(statearr_31637_32662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (4))){
var inst_31595 = (state_31634[(7)]);
var inst_31594 = (state_31634[(8)]);
var inst_31597 = (inst_31595 < inst_31594);
var state_31634__$1 = state_31634;
if(cljs.core.truth_(inst_31597)){
var statearr_31638_32663 = state_31634__$1;
(statearr_31638_32663[(1)] = (6));

} else {
var statearr_31639_32664 = state_31634__$1;
(statearr_31639_32664[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (15))){
var inst_31620 = (state_31634[(9)]);
var inst_31625 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31620);
var state_31634__$1 = state_31634;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31634__$1,(17),out,inst_31625);
} else {
if((state_val_31635 === (13))){
var inst_31620 = (state_31634[(9)]);
var inst_31620__$1 = (state_31634[(2)]);
var inst_31621 = cljs.core.some(cljs.core.nil_QMARK_,inst_31620__$1);
var state_31634__$1 = (function (){var statearr_31640 = state_31634;
(statearr_31640[(9)] = inst_31620__$1);

return statearr_31640;
})();
if(cljs.core.truth_(inst_31621)){
var statearr_31641_32665 = state_31634__$1;
(statearr_31641_32665[(1)] = (14));

} else {
var statearr_31642_32666 = state_31634__$1;
(statearr_31642_32666[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (6))){
var state_31634__$1 = state_31634;
var statearr_31643_32667 = state_31634__$1;
(statearr_31643_32667[(2)] = null);

(statearr_31643_32667[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (17))){
var inst_31627 = (state_31634[(2)]);
var state_31634__$1 = (function (){var statearr_31645 = state_31634;
(statearr_31645[(10)] = inst_31627);

return statearr_31645;
})();
var statearr_31646_32668 = state_31634__$1;
(statearr_31646_32668[(2)] = null);

(statearr_31646_32668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (3))){
var inst_31632 = (state_31634[(2)]);
var state_31634__$1 = state_31634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31634__$1,inst_31632);
} else {
if((state_val_31635 === (12))){
var _ = (function (){var statearr_31647 = state_31634;
(statearr_31647[(4)] = cljs.core.rest((state_31634[(4)])));

return statearr_31647;
})();
var state_31634__$1 = state_31634;
var ex31644 = (state_31634__$1[(2)]);
var statearr_31648_32675 = state_31634__$1;
(statearr_31648_32675[(5)] = ex31644);


if((ex31644 instanceof Object)){
var statearr_31649_32676 = state_31634__$1;
(statearr_31649_32676[(1)] = (11));

(statearr_31649_32676[(5)] = null);

} else {
throw ex31644;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (2))){
var inst_31593 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31594 = cnt;
var inst_31595 = (0);
var state_31634__$1 = (function (){var statearr_31650 = state_31634;
(statearr_31650[(7)] = inst_31595);

(statearr_31650[(8)] = inst_31594);

(statearr_31650[(11)] = inst_31593);

return statearr_31650;
})();
var statearr_31651_32677 = state_31634__$1;
(statearr_31651_32677[(2)] = null);

(statearr_31651_32677[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (11))){
var inst_31599 = (state_31634[(2)]);
var inst_31600 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31634__$1 = (function (){var statearr_31652 = state_31634;
(statearr_31652[(12)] = inst_31599);

return statearr_31652;
})();
var statearr_31653_32678 = state_31634__$1;
(statearr_31653_32678[(2)] = inst_31600);

(statearr_31653_32678[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (9))){
var inst_31595 = (state_31634[(7)]);
var _ = (function (){var statearr_31654 = state_31634;
(statearr_31654[(4)] = cljs.core.cons((12),(state_31634[(4)])));

return statearr_31654;
})();
var inst_31606 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31595) : chs__$1.call(null,inst_31595));
var inst_31607 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31595) : done.call(null,inst_31595));
var inst_31608 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31606,inst_31607);
var ___$1 = (function (){var statearr_31655 = state_31634;
(statearr_31655[(4)] = cljs.core.rest((state_31634[(4)])));

return statearr_31655;
})();
var state_31634__$1 = state_31634;
var statearr_31656_32679 = state_31634__$1;
(statearr_31656_32679[(2)] = inst_31608);

(statearr_31656_32679[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (5))){
var inst_31618 = (state_31634[(2)]);
var state_31634__$1 = (function (){var statearr_31657 = state_31634;
(statearr_31657[(13)] = inst_31618);

return statearr_31657;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31634__$1,(13),dchan);
} else {
if((state_val_31635 === (14))){
var inst_31623 = cljs.core.async.close_BANG_(out);
var state_31634__$1 = state_31634;
var statearr_31658_32680 = state_31634__$1;
(statearr_31658_32680[(2)] = inst_31623);

(statearr_31658_32680[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (16))){
var inst_31630 = (state_31634[(2)]);
var state_31634__$1 = state_31634;
var statearr_31659_32681 = state_31634__$1;
(statearr_31659_32681[(2)] = inst_31630);

(statearr_31659_32681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (10))){
var inst_31595 = (state_31634[(7)]);
var inst_31611 = (state_31634[(2)]);
var inst_31612 = (inst_31595 + (1));
var inst_31595__$1 = inst_31612;
var state_31634__$1 = (function (){var statearr_31660 = state_31634;
(statearr_31660[(7)] = inst_31595__$1);

(statearr_31660[(14)] = inst_31611);

return statearr_31660;
})();
var statearr_31661_32682 = state_31634__$1;
(statearr_31661_32682[(2)] = null);

(statearr_31661_32682[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (8))){
var inst_31616 = (state_31634[(2)]);
var state_31634__$1 = state_31634;
var statearr_31662_32683 = state_31634__$1;
(statearr_31662_32683[(2)] = inst_31616);

(statearr_31662_32683[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30560__auto__ = null;
var cljs$core$async$state_machine__30560__auto____0 = (function (){
var statearr_31663 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31663[(0)] = cljs$core$async$state_machine__30560__auto__);

(statearr_31663[(1)] = (1));

return statearr_31663;
});
var cljs$core$async$state_machine__30560__auto____1 = (function (state_31634){
while(true){
var ret_value__30561__auto__ = (function (){try{while(true){
var result__30562__auto__ = switch__30559__auto__(state_31634);
if(cljs.core.keyword_identical_QMARK_(result__30562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30562__auto__;
}
break;
}
}catch (e31664){var ex__30563__auto__ = e31664;
var statearr_31665_32684 = state_31634;
(statearr_31665_32684[(2)] = ex__30563__auto__);


if(cljs.core.seq((state_31634[(4)]))){
var statearr_31666_32685 = state_31634;
(statearr_31666_32685[(1)] = cljs.core.first((state_31634[(4)])));

} else {
throw ex__30563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32688 = state_31634;
state_31634 = G__32688;
continue;
} else {
return ret_value__30561__auto__;
}
break;
}
});
cljs$core$async$state_machine__30560__auto__ = function(state_31634){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30560__auto____1.call(this,state_31634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30560__auto____0;
cljs$core$async$state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30560__auto____1;
return cljs$core$async$state_machine__30560__auto__;
})()
})();
var state__30645__auto__ = (function (){var statearr_31667 = f__30644__auto__();
(statearr_31667[(6)] = c__30643__auto___32660);

return statearr_31667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30645__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31670 = arguments.length;
switch (G__31670) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30643__auto___32690 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30644__auto__ = (function (){var switch__30559__auto__ = (function (state_31702){
var state_val_31703 = (state_31702[(1)]);
if((state_val_31703 === (7))){
var inst_31682 = (state_31702[(7)]);
var inst_31681 = (state_31702[(8)]);
var inst_31681__$1 = (state_31702[(2)]);
var inst_31682__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31681__$1,(0),null);
var inst_31683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31681__$1,(1),null);
var inst_31684 = (inst_31682__$1 == null);
var state_31702__$1 = (function (){var statearr_31704 = state_31702;
(statearr_31704[(7)] = inst_31682__$1);

(statearr_31704[(8)] = inst_31681__$1);

(statearr_31704[(9)] = inst_31683);

return statearr_31704;
})();
if(cljs.core.truth_(inst_31684)){
var statearr_31705_32691 = state_31702__$1;
(statearr_31705_32691[(1)] = (8));

} else {
var statearr_31706_32692 = state_31702__$1;
(statearr_31706_32692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31703 === (1))){
var inst_31671 = cljs.core.vec(chs);
var inst_31672 = inst_31671;
var state_31702__$1 = (function (){var statearr_31707 = state_31702;
(statearr_31707[(10)] = inst_31672);

return statearr_31707;
})();
var statearr_31708_32694 = state_31702__$1;
(statearr_31708_32694[(2)] = null);

(statearr_31708_32694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31703 === (4))){
var inst_31672 = (state_31702[(10)]);
var state_31702__$1 = state_31702;
return cljs.core.async.ioc_alts_BANG_(state_31702__$1,(7),inst_31672);
} else {
if((state_val_31703 === (6))){
var inst_31698 = (state_31702[(2)]);
var state_31702__$1 = state_31702;
var statearr_31709_32696 = state_31702__$1;
(statearr_31709_32696[(2)] = inst_31698);

(statearr_31709_32696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31703 === (3))){
var inst_31700 = (state_31702[(2)]);
var state_31702__$1 = state_31702;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31702__$1,inst_31700);
} else {
if((state_val_31703 === (2))){
var inst_31672 = (state_31702[(10)]);
var inst_31674 = cljs.core.count(inst_31672);
var inst_31675 = (inst_31674 > (0));
var state_31702__$1 = state_31702;
if(cljs.core.truth_(inst_31675)){
var statearr_31711_32697 = state_31702__$1;
(statearr_31711_32697[(1)] = (4));

} else {
var statearr_31712_32698 = state_31702__$1;
(statearr_31712_32698[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31703 === (11))){
var inst_31672 = (state_31702[(10)]);
var inst_31691 = (state_31702[(2)]);
var tmp31710 = inst_31672;
var inst_31672__$1 = tmp31710;
var state_31702__$1 = (function (){var statearr_31713 = state_31702;
(statearr_31713[(11)] = inst_31691);

(statearr_31713[(10)] = inst_31672__$1);

return statearr_31713;
})();
var statearr_31714_32699 = state_31702__$1;
(statearr_31714_32699[(2)] = null);

(statearr_31714_32699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31703 === (9))){
var inst_31682 = (state_31702[(7)]);
var state_31702__$1 = state_31702;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31702__$1,(11),out,inst_31682);
} else {
if((state_val_31703 === (5))){
var inst_31696 = cljs.core.async.close_BANG_(out);
var state_31702__$1 = state_31702;
var statearr_31715_32700 = state_31702__$1;
(statearr_31715_32700[(2)] = inst_31696);

(statearr_31715_32700[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31703 === (10))){
var inst_31694 = (state_31702[(2)]);
var state_31702__$1 = state_31702;
var statearr_31716_32702 = state_31702__$1;
(statearr_31716_32702[(2)] = inst_31694);

(statearr_31716_32702[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31703 === (8))){
var inst_31682 = (state_31702[(7)]);
var inst_31672 = (state_31702[(10)]);
var inst_31681 = (state_31702[(8)]);
var inst_31683 = (state_31702[(9)]);
var inst_31686 = (function (){var cs = inst_31672;
var vec__31677 = inst_31681;
var v = inst_31682;
var c = inst_31683;
return (function (p1__31668_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31668_SHARP_);
});
})();
var inst_31687 = cljs.core.filterv(inst_31686,inst_31672);
var inst_31672__$1 = inst_31687;
var state_31702__$1 = (function (){var statearr_31717 = state_31702;
(statearr_31717[(10)] = inst_31672__$1);

return statearr_31717;
})();
var statearr_31718_32708 = state_31702__$1;
(statearr_31718_32708[(2)] = null);

(statearr_31718_32708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30560__auto__ = null;
var cljs$core$async$state_machine__30560__auto____0 = (function (){
var statearr_31719 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31719[(0)] = cljs$core$async$state_machine__30560__auto__);

(statearr_31719[(1)] = (1));

return statearr_31719;
});
var cljs$core$async$state_machine__30560__auto____1 = (function (state_31702){
while(true){
var ret_value__30561__auto__ = (function (){try{while(true){
var result__30562__auto__ = switch__30559__auto__(state_31702);
if(cljs.core.keyword_identical_QMARK_(result__30562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30562__auto__;
}
break;
}
}catch (e31720){var ex__30563__auto__ = e31720;
var statearr_31721_32711 = state_31702;
(statearr_31721_32711[(2)] = ex__30563__auto__);


if(cljs.core.seq((state_31702[(4)]))){
var statearr_31722_32714 = state_31702;
(statearr_31722_32714[(1)] = cljs.core.first((state_31702[(4)])));

} else {
throw ex__30563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32716 = state_31702;
state_31702 = G__32716;
continue;
} else {
return ret_value__30561__auto__;
}
break;
}
});
cljs$core$async$state_machine__30560__auto__ = function(state_31702){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30560__auto____1.call(this,state_31702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30560__auto____0;
cljs$core$async$state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30560__auto____1;
return cljs$core$async$state_machine__30560__auto__;
})()
})();
var state__30645__auto__ = (function (){var statearr_31723 = f__30644__auto__();
(statearr_31723[(6)] = c__30643__auto___32690);

return statearr_31723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30645__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31725 = arguments.length;
switch (G__31725) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30643__auto___32719 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30644__auto__ = (function (){var switch__30559__auto__ = (function (state_31749){
var state_val_31750 = (state_31749[(1)]);
if((state_val_31750 === (7))){
var inst_31731 = (state_31749[(7)]);
var inst_31731__$1 = (state_31749[(2)]);
var inst_31732 = (inst_31731__$1 == null);
var inst_31733 = cljs.core.not(inst_31732);
var state_31749__$1 = (function (){var statearr_31751 = state_31749;
(statearr_31751[(7)] = inst_31731__$1);

return statearr_31751;
})();
if(inst_31733){
var statearr_31752_32720 = state_31749__$1;
(statearr_31752_32720[(1)] = (8));

} else {
var statearr_31753_32721 = state_31749__$1;
(statearr_31753_32721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31750 === (1))){
var inst_31726 = (0);
var state_31749__$1 = (function (){var statearr_31754 = state_31749;
(statearr_31754[(8)] = inst_31726);

return statearr_31754;
})();
var statearr_31755_32722 = state_31749__$1;
(statearr_31755_32722[(2)] = null);

(statearr_31755_32722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31750 === (4))){
var state_31749__$1 = state_31749;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31749__$1,(7),ch);
} else {
if((state_val_31750 === (6))){
var inst_31744 = (state_31749[(2)]);
var state_31749__$1 = state_31749;
var statearr_31756_32723 = state_31749__$1;
(statearr_31756_32723[(2)] = inst_31744);

(statearr_31756_32723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31750 === (3))){
var inst_31746 = (state_31749[(2)]);
var inst_31747 = cljs.core.async.close_BANG_(out);
var state_31749__$1 = (function (){var statearr_31757 = state_31749;
(statearr_31757[(9)] = inst_31746);

return statearr_31757;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31749__$1,inst_31747);
} else {
if((state_val_31750 === (2))){
var inst_31726 = (state_31749[(8)]);
var inst_31728 = (inst_31726 < n);
var state_31749__$1 = state_31749;
if(cljs.core.truth_(inst_31728)){
var statearr_31758_32724 = state_31749__$1;
(statearr_31758_32724[(1)] = (4));

} else {
var statearr_31759_32725 = state_31749__$1;
(statearr_31759_32725[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31750 === (11))){
var inst_31726 = (state_31749[(8)]);
var inst_31736 = (state_31749[(2)]);
var inst_31737 = (inst_31726 + (1));
var inst_31726__$1 = inst_31737;
var state_31749__$1 = (function (){var statearr_31760 = state_31749;
(statearr_31760[(10)] = inst_31736);

(statearr_31760[(8)] = inst_31726__$1);

return statearr_31760;
})();
var statearr_31761_32726 = state_31749__$1;
(statearr_31761_32726[(2)] = null);

(statearr_31761_32726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31750 === (9))){
var state_31749__$1 = state_31749;
var statearr_31762_32727 = state_31749__$1;
(statearr_31762_32727[(2)] = null);

(statearr_31762_32727[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31750 === (5))){
var state_31749__$1 = state_31749;
var statearr_31763_32730 = state_31749__$1;
(statearr_31763_32730[(2)] = null);

(statearr_31763_32730[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31750 === (10))){
var inst_31741 = (state_31749[(2)]);
var state_31749__$1 = state_31749;
var statearr_31764_32731 = state_31749__$1;
(statearr_31764_32731[(2)] = inst_31741);

(statearr_31764_32731[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31750 === (8))){
var inst_31731 = (state_31749[(7)]);
var state_31749__$1 = state_31749;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31749__$1,(11),out,inst_31731);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30560__auto__ = null;
var cljs$core$async$state_machine__30560__auto____0 = (function (){
var statearr_31765 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31765[(0)] = cljs$core$async$state_machine__30560__auto__);

(statearr_31765[(1)] = (1));

return statearr_31765;
});
var cljs$core$async$state_machine__30560__auto____1 = (function (state_31749){
while(true){
var ret_value__30561__auto__ = (function (){try{while(true){
var result__30562__auto__ = switch__30559__auto__(state_31749);
if(cljs.core.keyword_identical_QMARK_(result__30562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30562__auto__;
}
break;
}
}catch (e31766){var ex__30563__auto__ = e31766;
var statearr_31767_32733 = state_31749;
(statearr_31767_32733[(2)] = ex__30563__auto__);


if(cljs.core.seq((state_31749[(4)]))){
var statearr_31768_32734 = state_31749;
(statearr_31768_32734[(1)] = cljs.core.first((state_31749[(4)])));

} else {
throw ex__30563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32738 = state_31749;
state_31749 = G__32738;
continue;
} else {
return ret_value__30561__auto__;
}
break;
}
});
cljs$core$async$state_machine__30560__auto__ = function(state_31749){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30560__auto____1.call(this,state_31749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30560__auto____0;
cljs$core$async$state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30560__auto____1;
return cljs$core$async$state_machine__30560__auto__;
})()
})();
var state__30645__auto__ = (function (){var statearr_31769 = f__30644__auto__();
(statearr_31769[(6)] = c__30643__auto___32719);

return statearr_31769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30645__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31771 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31771 = (function (f,ch,meta31772){
this.f = f;
this.ch = ch;
this.meta31772 = meta31772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31773,meta31772__$1){
var self__ = this;
var _31773__$1 = this;
return (new cljs.core.async.t_cljs$core$async31771(self__.f,self__.ch,meta31772__$1));
}));

(cljs.core.async.t_cljs$core$async31771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31773){
var self__ = this;
var _31773__$1 = this;
return self__.meta31772;
}));

(cljs.core.async.t_cljs$core$async31771.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31771.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31771.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31771.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31771.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31774 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31774 = (function (f,ch,meta31772,_,fn1,meta31775){
this.f = f;
this.ch = ch;
this.meta31772 = meta31772;
this._ = _;
this.fn1 = fn1;
this.meta31775 = meta31775;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31776,meta31775__$1){
var self__ = this;
var _31776__$1 = this;
return (new cljs.core.async.t_cljs$core$async31774(self__.f,self__.ch,self__.meta31772,self__._,self__.fn1,meta31775__$1));
}));

(cljs.core.async.t_cljs$core$async31774.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31776){
var self__ = this;
var _31776__$1 = this;
return self__.meta31775;
}));

(cljs.core.async.t_cljs$core$async31774.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31774.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31774.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31774.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31770_SHARP_){
var G__31777 = (((p1__31770_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31770_SHARP_) : self__.f.call(null,p1__31770_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31777) : f1.call(null,G__31777));
});
}));

(cljs.core.async.t_cljs$core$async31774.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31772","meta31772",-297788572,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31771","cljs.core.async/t_cljs$core$async31771",-922691605,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31775","meta31775",739762635,null)], null);
}));

(cljs.core.async.t_cljs$core$async31774.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31774.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31774");

(cljs.core.async.t_cljs$core$async31774.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async31774");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31774.
 */
cljs.core.async.__GT_t_cljs$core$async31774 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31774(f__$1,ch__$1,meta31772__$1,___$2,fn1__$1,meta31775){
return (new cljs.core.async.t_cljs$core$async31774(f__$1,ch__$1,meta31772__$1,___$2,fn1__$1,meta31775));
});

}

return (new cljs.core.async.t_cljs$core$async31774(self__.f,self__.ch,self__.meta31772,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4149__auto__ = ret;
if(cljs.core.truth_(and__4149__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4149__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31778 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31778) : self__.f.call(null,G__31778));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31771.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31771.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31771.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31772","meta31772",-297788572,null)], null);
}));

(cljs.core.async.t_cljs$core$async31771.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31771.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31771");

(cljs.core.async.t_cljs$core$async31771.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async31771");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31771.
 */
cljs.core.async.__GT_t_cljs$core$async31771 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31771(f__$1,ch__$1,meta31772){
return (new cljs.core.async.t_cljs$core$async31771(f__$1,ch__$1,meta31772));
});

}

return (new cljs.core.async.t_cljs$core$async31771(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31779 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31779 = (function (f,ch,meta31780){
this.f = f;
this.ch = ch;
this.meta31780 = meta31780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31781,meta31780__$1){
var self__ = this;
var _31781__$1 = this;
return (new cljs.core.async.t_cljs$core$async31779(self__.f,self__.ch,meta31780__$1));
}));

(cljs.core.async.t_cljs$core$async31779.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31781){
var self__ = this;
var _31781__$1 = this;
return self__.meta31780;
}));

(cljs.core.async.t_cljs$core$async31779.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31779.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31779.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31779.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31779.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31779.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31779.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31780","meta31780",-1457105196,null)], null);
}));

(cljs.core.async.t_cljs$core$async31779.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31779.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31779");

(cljs.core.async.t_cljs$core$async31779.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async31779");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31779.
 */
cljs.core.async.__GT_t_cljs$core$async31779 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31779(f__$1,ch__$1,meta31780){
return (new cljs.core.async.t_cljs$core$async31779(f__$1,ch__$1,meta31780));
});

}

return (new cljs.core.async.t_cljs$core$async31779(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31782 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31782 = (function (p,ch,meta31783){
this.p = p;
this.ch = ch;
this.meta31783 = meta31783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31784,meta31783__$1){
var self__ = this;
var _31784__$1 = this;
return (new cljs.core.async.t_cljs$core$async31782(self__.p,self__.ch,meta31783__$1));
}));

(cljs.core.async.t_cljs$core$async31782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31784){
var self__ = this;
var _31784__$1 = this;
return self__.meta31783;
}));

(cljs.core.async.t_cljs$core$async31782.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31782.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31782.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31782.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31782.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31782.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31782.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31782.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31783","meta31783",1081019883,null)], null);
}));

(cljs.core.async.t_cljs$core$async31782.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31782.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31782");

(cljs.core.async.t_cljs$core$async31782.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async31782");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31782.
 */
cljs.core.async.__GT_t_cljs$core$async31782 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31782(p__$1,ch__$1,meta31783){
return (new cljs.core.async.t_cljs$core$async31782(p__$1,ch__$1,meta31783));
});

}

return (new cljs.core.async.t_cljs$core$async31782(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31786 = arguments.length;
switch (G__31786) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30643__auto___32788 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30644__auto__ = (function (){var switch__30559__auto__ = (function (state_31807){
var state_val_31808 = (state_31807[(1)]);
if((state_val_31808 === (7))){
var inst_31803 = (state_31807[(2)]);
var state_31807__$1 = state_31807;
var statearr_31809_32789 = state_31807__$1;
(statearr_31809_32789[(2)] = inst_31803);

(statearr_31809_32789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31808 === (1))){
var state_31807__$1 = state_31807;
var statearr_31810_32790 = state_31807__$1;
(statearr_31810_32790[(2)] = null);

(statearr_31810_32790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31808 === (4))){
var inst_31789 = (state_31807[(7)]);
var inst_31789__$1 = (state_31807[(2)]);
var inst_31790 = (inst_31789__$1 == null);
var state_31807__$1 = (function (){var statearr_31811 = state_31807;
(statearr_31811[(7)] = inst_31789__$1);

return statearr_31811;
})();
if(cljs.core.truth_(inst_31790)){
var statearr_31812_32797 = state_31807__$1;
(statearr_31812_32797[(1)] = (5));

} else {
var statearr_31813_32802 = state_31807__$1;
(statearr_31813_32802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31808 === (6))){
var inst_31789 = (state_31807[(7)]);
var inst_31794 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31789) : p.call(null,inst_31789));
var state_31807__$1 = state_31807;
if(cljs.core.truth_(inst_31794)){
var statearr_31814_32808 = state_31807__$1;
(statearr_31814_32808[(1)] = (8));

} else {
var statearr_31815_32809 = state_31807__$1;
(statearr_31815_32809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31808 === (3))){
var inst_31805 = (state_31807[(2)]);
var state_31807__$1 = state_31807;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31807__$1,inst_31805);
} else {
if((state_val_31808 === (2))){
var state_31807__$1 = state_31807;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31807__$1,(4),ch);
} else {
if((state_val_31808 === (11))){
var inst_31797 = (state_31807[(2)]);
var state_31807__$1 = state_31807;
var statearr_31816_32821 = state_31807__$1;
(statearr_31816_32821[(2)] = inst_31797);

(statearr_31816_32821[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31808 === (9))){
var state_31807__$1 = state_31807;
var statearr_31817_32822 = state_31807__$1;
(statearr_31817_32822[(2)] = null);

(statearr_31817_32822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31808 === (5))){
var inst_31792 = cljs.core.async.close_BANG_(out);
var state_31807__$1 = state_31807;
var statearr_31818_32823 = state_31807__$1;
(statearr_31818_32823[(2)] = inst_31792);

(statearr_31818_32823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31808 === (10))){
var inst_31800 = (state_31807[(2)]);
var state_31807__$1 = (function (){var statearr_31819 = state_31807;
(statearr_31819[(8)] = inst_31800);

return statearr_31819;
})();
var statearr_31820_32829 = state_31807__$1;
(statearr_31820_32829[(2)] = null);

(statearr_31820_32829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31808 === (8))){
var inst_31789 = (state_31807[(7)]);
var state_31807__$1 = state_31807;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31807__$1,(11),out,inst_31789);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30560__auto__ = null;
var cljs$core$async$state_machine__30560__auto____0 = (function (){
var statearr_31821 = [null,null,null,null,null,null,null,null,null];
(statearr_31821[(0)] = cljs$core$async$state_machine__30560__auto__);

(statearr_31821[(1)] = (1));

return statearr_31821;
});
var cljs$core$async$state_machine__30560__auto____1 = (function (state_31807){
while(true){
var ret_value__30561__auto__ = (function (){try{while(true){
var result__30562__auto__ = switch__30559__auto__(state_31807);
if(cljs.core.keyword_identical_QMARK_(result__30562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30562__auto__;
}
break;
}
}catch (e31822){var ex__30563__auto__ = e31822;
var statearr_31823_32848 = state_31807;
(statearr_31823_32848[(2)] = ex__30563__auto__);


if(cljs.core.seq((state_31807[(4)]))){
var statearr_31824_32854 = state_31807;
(statearr_31824_32854[(1)] = cljs.core.first((state_31807[(4)])));

} else {
throw ex__30563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32856 = state_31807;
state_31807 = G__32856;
continue;
} else {
return ret_value__30561__auto__;
}
break;
}
});
cljs$core$async$state_machine__30560__auto__ = function(state_31807){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30560__auto____1.call(this,state_31807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30560__auto____0;
cljs$core$async$state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30560__auto____1;
return cljs$core$async$state_machine__30560__auto__;
})()
})();
var state__30645__auto__ = (function (){var statearr_31825 = f__30644__auto__();
(statearr_31825[(6)] = c__30643__auto___32788);

return statearr_31825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30645__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31827 = arguments.length;
switch (G__31827) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30643__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30644__auto__ = (function (){var switch__30559__auto__ = (function (state_31889){
var state_val_31890 = (state_31889[(1)]);
if((state_val_31890 === (7))){
var inst_31885 = (state_31889[(2)]);
var state_31889__$1 = state_31889;
var statearr_31891_32874 = state_31889__$1;
(statearr_31891_32874[(2)] = inst_31885);

(statearr_31891_32874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (20))){
var inst_31855 = (state_31889[(7)]);
var inst_31866 = (state_31889[(2)]);
var inst_31867 = cljs.core.next(inst_31855);
var inst_31841 = inst_31867;
var inst_31842 = null;
var inst_31843 = (0);
var inst_31844 = (0);
var state_31889__$1 = (function (){var statearr_31892 = state_31889;
(statearr_31892[(8)] = inst_31842);

(statearr_31892[(9)] = inst_31866);

(statearr_31892[(10)] = inst_31844);

(statearr_31892[(11)] = inst_31843);

(statearr_31892[(12)] = inst_31841);

return statearr_31892;
})();
var statearr_31893_32876 = state_31889__$1;
(statearr_31893_32876[(2)] = null);

(statearr_31893_32876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (1))){
var state_31889__$1 = state_31889;
var statearr_31894_32877 = state_31889__$1;
(statearr_31894_32877[(2)] = null);

(statearr_31894_32877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (4))){
var inst_31830 = (state_31889[(13)]);
var inst_31830__$1 = (state_31889[(2)]);
var inst_31831 = (inst_31830__$1 == null);
var state_31889__$1 = (function (){var statearr_31895 = state_31889;
(statearr_31895[(13)] = inst_31830__$1);

return statearr_31895;
})();
if(cljs.core.truth_(inst_31831)){
var statearr_31896_32878 = state_31889__$1;
(statearr_31896_32878[(1)] = (5));

} else {
var statearr_31897_32879 = state_31889__$1;
(statearr_31897_32879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (15))){
var state_31889__$1 = state_31889;
var statearr_31901_32880 = state_31889__$1;
(statearr_31901_32880[(2)] = null);

(statearr_31901_32880[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (21))){
var state_31889__$1 = state_31889;
var statearr_31902_32882 = state_31889__$1;
(statearr_31902_32882[(2)] = null);

(statearr_31902_32882[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (13))){
var inst_31842 = (state_31889[(8)]);
var inst_31844 = (state_31889[(10)]);
var inst_31843 = (state_31889[(11)]);
var inst_31841 = (state_31889[(12)]);
var inst_31851 = (state_31889[(2)]);
var inst_31852 = (inst_31844 + (1));
var tmp31898 = inst_31842;
var tmp31899 = inst_31843;
var tmp31900 = inst_31841;
var inst_31841__$1 = tmp31900;
var inst_31842__$1 = tmp31898;
var inst_31843__$1 = tmp31899;
var inst_31844__$1 = inst_31852;
var state_31889__$1 = (function (){var statearr_31903 = state_31889;
(statearr_31903[(14)] = inst_31851);

(statearr_31903[(8)] = inst_31842__$1);

(statearr_31903[(10)] = inst_31844__$1);

(statearr_31903[(11)] = inst_31843__$1);

(statearr_31903[(12)] = inst_31841__$1);

return statearr_31903;
})();
var statearr_31904_32895 = state_31889__$1;
(statearr_31904_32895[(2)] = null);

(statearr_31904_32895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (22))){
var state_31889__$1 = state_31889;
var statearr_31905_32896 = state_31889__$1;
(statearr_31905_32896[(2)] = null);

(statearr_31905_32896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (6))){
var inst_31830 = (state_31889[(13)]);
var inst_31839 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31830) : f.call(null,inst_31830));
var inst_31840 = cljs.core.seq(inst_31839);
var inst_31841 = inst_31840;
var inst_31842 = null;
var inst_31843 = (0);
var inst_31844 = (0);
var state_31889__$1 = (function (){var statearr_31906 = state_31889;
(statearr_31906[(8)] = inst_31842);

(statearr_31906[(10)] = inst_31844);

(statearr_31906[(11)] = inst_31843);

(statearr_31906[(12)] = inst_31841);

return statearr_31906;
})();
var statearr_31907_32897 = state_31889__$1;
(statearr_31907_32897[(2)] = null);

(statearr_31907_32897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (17))){
var inst_31855 = (state_31889[(7)]);
var inst_31859 = cljs.core.chunk_first(inst_31855);
var inst_31860 = cljs.core.chunk_rest(inst_31855);
var inst_31861 = cljs.core.count(inst_31859);
var inst_31841 = inst_31860;
var inst_31842 = inst_31859;
var inst_31843 = inst_31861;
var inst_31844 = (0);
var state_31889__$1 = (function (){var statearr_31908 = state_31889;
(statearr_31908[(8)] = inst_31842);

(statearr_31908[(10)] = inst_31844);

(statearr_31908[(11)] = inst_31843);

(statearr_31908[(12)] = inst_31841);

return statearr_31908;
})();
var statearr_31909_32898 = state_31889__$1;
(statearr_31909_32898[(2)] = null);

(statearr_31909_32898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (3))){
var inst_31887 = (state_31889[(2)]);
var state_31889__$1 = state_31889;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31889__$1,inst_31887);
} else {
if((state_val_31890 === (12))){
var inst_31875 = (state_31889[(2)]);
var state_31889__$1 = state_31889;
var statearr_31910_32903 = state_31889__$1;
(statearr_31910_32903[(2)] = inst_31875);

(statearr_31910_32903[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (2))){
var state_31889__$1 = state_31889;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31889__$1,(4),in$);
} else {
if((state_val_31890 === (23))){
var inst_31883 = (state_31889[(2)]);
var state_31889__$1 = state_31889;
var statearr_31911_32912 = state_31889__$1;
(statearr_31911_32912[(2)] = inst_31883);

(statearr_31911_32912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (19))){
var inst_31870 = (state_31889[(2)]);
var state_31889__$1 = state_31889;
var statearr_31912_32913 = state_31889__$1;
(statearr_31912_32913[(2)] = inst_31870);

(statearr_31912_32913[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (11))){
var inst_31855 = (state_31889[(7)]);
var inst_31841 = (state_31889[(12)]);
var inst_31855__$1 = cljs.core.seq(inst_31841);
var state_31889__$1 = (function (){var statearr_31913 = state_31889;
(statearr_31913[(7)] = inst_31855__$1);

return statearr_31913;
})();
if(inst_31855__$1){
var statearr_31914_32914 = state_31889__$1;
(statearr_31914_32914[(1)] = (14));

} else {
var statearr_31915_32915 = state_31889__$1;
(statearr_31915_32915[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (9))){
var inst_31877 = (state_31889[(2)]);
var inst_31878 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31889__$1 = (function (){var statearr_31916 = state_31889;
(statearr_31916[(15)] = inst_31877);

return statearr_31916;
})();
if(cljs.core.truth_(inst_31878)){
var statearr_31917_32917 = state_31889__$1;
(statearr_31917_32917[(1)] = (21));

} else {
var statearr_31918_32918 = state_31889__$1;
(statearr_31918_32918[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (5))){
var inst_31833 = cljs.core.async.close_BANG_(out);
var state_31889__$1 = state_31889;
var statearr_31919_32919 = state_31889__$1;
(statearr_31919_32919[(2)] = inst_31833);

(statearr_31919_32919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (14))){
var inst_31855 = (state_31889[(7)]);
var inst_31857 = cljs.core.chunked_seq_QMARK_(inst_31855);
var state_31889__$1 = state_31889;
if(inst_31857){
var statearr_31920_32920 = state_31889__$1;
(statearr_31920_32920[(1)] = (17));

} else {
var statearr_31921_32922 = state_31889__$1;
(statearr_31921_32922[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (16))){
var inst_31873 = (state_31889[(2)]);
var state_31889__$1 = state_31889;
var statearr_31922_32924 = state_31889__$1;
(statearr_31922_32924[(2)] = inst_31873);

(statearr_31922_32924[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (10))){
var inst_31842 = (state_31889[(8)]);
var inst_31844 = (state_31889[(10)]);
var inst_31849 = cljs.core._nth(inst_31842,inst_31844);
var state_31889__$1 = state_31889;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31889__$1,(13),out,inst_31849);
} else {
if((state_val_31890 === (18))){
var inst_31855 = (state_31889[(7)]);
var inst_31864 = cljs.core.first(inst_31855);
var state_31889__$1 = state_31889;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31889__$1,(20),out,inst_31864);
} else {
if((state_val_31890 === (8))){
var inst_31844 = (state_31889[(10)]);
var inst_31843 = (state_31889[(11)]);
var inst_31846 = (inst_31844 < inst_31843);
var inst_31847 = inst_31846;
var state_31889__$1 = state_31889;
if(cljs.core.truth_(inst_31847)){
var statearr_31923_32925 = state_31889__$1;
(statearr_31923_32925[(1)] = (10));

} else {
var statearr_31924_32926 = state_31889__$1;
(statearr_31924_32926[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30560__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30560__auto____0 = (function (){
var statearr_31925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31925[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30560__auto__);

(statearr_31925[(1)] = (1));

return statearr_31925;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30560__auto____1 = (function (state_31889){
while(true){
var ret_value__30561__auto__ = (function (){try{while(true){
var result__30562__auto__ = switch__30559__auto__(state_31889);
if(cljs.core.keyword_identical_QMARK_(result__30562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30562__auto__;
}
break;
}
}catch (e31926){var ex__30563__auto__ = e31926;
var statearr_31927_32929 = state_31889;
(statearr_31927_32929[(2)] = ex__30563__auto__);


if(cljs.core.seq((state_31889[(4)]))){
var statearr_31928_32930 = state_31889;
(statearr_31928_32930[(1)] = cljs.core.first((state_31889[(4)])));

} else {
throw ex__30563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32931 = state_31889;
state_31889 = G__32931;
continue;
} else {
return ret_value__30561__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30560__auto__ = function(state_31889){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30560__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30560__auto____1.call(this,state_31889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30560__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30560__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30560__auto__;
})()
})();
var state__30645__auto__ = (function (){var statearr_31929 = f__30644__auto__();
(statearr_31929[(6)] = c__30643__auto__);

return statearr_31929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30645__auto__);
}));

return c__30643__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31931 = arguments.length;
switch (G__31931) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__31933 = arguments.length;
switch (G__31933) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__31935 = arguments.length;
switch (G__31935) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30643__auto___32937 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30644__auto__ = (function (){var switch__30559__auto__ = (function (state_31959){
var state_val_31960 = (state_31959[(1)]);
if((state_val_31960 === (7))){
var inst_31954 = (state_31959[(2)]);
var state_31959__$1 = state_31959;
var statearr_31961_32940 = state_31959__$1;
(statearr_31961_32940[(2)] = inst_31954);

(statearr_31961_32940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (1))){
var inst_31936 = null;
var state_31959__$1 = (function (){var statearr_31962 = state_31959;
(statearr_31962[(7)] = inst_31936);

return statearr_31962;
})();
var statearr_31963_32942 = state_31959__$1;
(statearr_31963_32942[(2)] = null);

(statearr_31963_32942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (4))){
var inst_31939 = (state_31959[(8)]);
var inst_31939__$1 = (state_31959[(2)]);
var inst_31940 = (inst_31939__$1 == null);
var inst_31941 = cljs.core.not(inst_31940);
var state_31959__$1 = (function (){var statearr_31964 = state_31959;
(statearr_31964[(8)] = inst_31939__$1);

return statearr_31964;
})();
if(inst_31941){
var statearr_31965_32945 = state_31959__$1;
(statearr_31965_32945[(1)] = (5));

} else {
var statearr_31966_32946 = state_31959__$1;
(statearr_31966_32946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (6))){
var state_31959__$1 = state_31959;
var statearr_31967_32947 = state_31959__$1;
(statearr_31967_32947[(2)] = null);

(statearr_31967_32947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (3))){
var inst_31956 = (state_31959[(2)]);
var inst_31957 = cljs.core.async.close_BANG_(out);
var state_31959__$1 = (function (){var statearr_31968 = state_31959;
(statearr_31968[(9)] = inst_31956);

return statearr_31968;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31959__$1,inst_31957);
} else {
if((state_val_31960 === (2))){
var state_31959__$1 = state_31959;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31959__$1,(4),ch);
} else {
if((state_val_31960 === (11))){
var inst_31939 = (state_31959[(8)]);
var inst_31948 = (state_31959[(2)]);
var inst_31936 = inst_31939;
var state_31959__$1 = (function (){var statearr_31969 = state_31959;
(statearr_31969[(7)] = inst_31936);

(statearr_31969[(10)] = inst_31948);

return statearr_31969;
})();
var statearr_31970_32948 = state_31959__$1;
(statearr_31970_32948[(2)] = null);

(statearr_31970_32948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (9))){
var inst_31939 = (state_31959[(8)]);
var state_31959__$1 = state_31959;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31959__$1,(11),out,inst_31939);
} else {
if((state_val_31960 === (5))){
var inst_31936 = (state_31959[(7)]);
var inst_31939 = (state_31959[(8)]);
var inst_31943 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31939,inst_31936);
var state_31959__$1 = state_31959;
if(inst_31943){
var statearr_31972_32949 = state_31959__$1;
(statearr_31972_32949[(1)] = (8));

} else {
var statearr_31973_32950 = state_31959__$1;
(statearr_31973_32950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (10))){
var inst_31951 = (state_31959[(2)]);
var state_31959__$1 = state_31959;
var statearr_31974_32951 = state_31959__$1;
(statearr_31974_32951[(2)] = inst_31951);

(statearr_31974_32951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (8))){
var inst_31936 = (state_31959[(7)]);
var tmp31971 = inst_31936;
var inst_31936__$1 = tmp31971;
var state_31959__$1 = (function (){var statearr_31975 = state_31959;
(statearr_31975[(7)] = inst_31936__$1);

return statearr_31975;
})();
var statearr_31976_32952 = state_31959__$1;
(statearr_31976_32952[(2)] = null);

(statearr_31976_32952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30560__auto__ = null;
var cljs$core$async$state_machine__30560__auto____0 = (function (){
var statearr_31977 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31977[(0)] = cljs$core$async$state_machine__30560__auto__);

(statearr_31977[(1)] = (1));

return statearr_31977;
});
var cljs$core$async$state_machine__30560__auto____1 = (function (state_31959){
while(true){
var ret_value__30561__auto__ = (function (){try{while(true){
var result__30562__auto__ = switch__30559__auto__(state_31959);
if(cljs.core.keyword_identical_QMARK_(result__30562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30562__auto__;
}
break;
}
}catch (e31978){var ex__30563__auto__ = e31978;
var statearr_31979_32955 = state_31959;
(statearr_31979_32955[(2)] = ex__30563__auto__);


if(cljs.core.seq((state_31959[(4)]))){
var statearr_31980_32957 = state_31959;
(statearr_31980_32957[(1)] = cljs.core.first((state_31959[(4)])));

} else {
throw ex__30563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32958 = state_31959;
state_31959 = G__32958;
continue;
} else {
return ret_value__30561__auto__;
}
break;
}
});
cljs$core$async$state_machine__30560__auto__ = function(state_31959){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30560__auto____1.call(this,state_31959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30560__auto____0;
cljs$core$async$state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30560__auto____1;
return cljs$core$async$state_machine__30560__auto__;
})()
})();
var state__30645__auto__ = (function (){var statearr_31981 = f__30644__auto__();
(statearr_31981[(6)] = c__30643__auto___32937);

return statearr_31981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30645__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31983 = arguments.length;
switch (G__31983) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30643__auto___32969 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30644__auto__ = (function (){var switch__30559__auto__ = (function (state_32021){
var state_val_32022 = (state_32021[(1)]);
if((state_val_32022 === (7))){
var inst_32017 = (state_32021[(2)]);
var state_32021__$1 = state_32021;
var statearr_32023_32977 = state_32021__$1;
(statearr_32023_32977[(2)] = inst_32017);

(statearr_32023_32977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32022 === (1))){
var inst_31984 = (new Array(n));
var inst_31985 = inst_31984;
var inst_31986 = (0);
var state_32021__$1 = (function (){var statearr_32024 = state_32021;
(statearr_32024[(7)] = inst_31986);

(statearr_32024[(8)] = inst_31985);

return statearr_32024;
})();
var statearr_32025_32983 = state_32021__$1;
(statearr_32025_32983[(2)] = null);

(statearr_32025_32983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32022 === (4))){
var inst_31989 = (state_32021[(9)]);
var inst_31989__$1 = (state_32021[(2)]);
var inst_31990 = (inst_31989__$1 == null);
var inst_31991 = cljs.core.not(inst_31990);
var state_32021__$1 = (function (){var statearr_32026 = state_32021;
(statearr_32026[(9)] = inst_31989__$1);

return statearr_32026;
})();
if(inst_31991){
var statearr_32027_32988 = state_32021__$1;
(statearr_32027_32988[(1)] = (5));

} else {
var statearr_32028_32992 = state_32021__$1;
(statearr_32028_32992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32022 === (15))){
var inst_32011 = (state_32021[(2)]);
var state_32021__$1 = state_32021;
var statearr_32029_32997 = state_32021__$1;
(statearr_32029_32997[(2)] = inst_32011);

(statearr_32029_32997[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32022 === (13))){
var state_32021__$1 = state_32021;
var statearr_32030_33000 = state_32021__$1;
(statearr_32030_33000[(2)] = null);

(statearr_32030_33000[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32022 === (6))){
var inst_31986 = (state_32021[(7)]);
var inst_32007 = (inst_31986 > (0));
var state_32021__$1 = state_32021;
if(cljs.core.truth_(inst_32007)){
var statearr_32031_33009 = state_32021__$1;
(statearr_32031_33009[(1)] = (12));

} else {
var statearr_32032_33010 = state_32021__$1;
(statearr_32032_33010[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32022 === (3))){
var inst_32019 = (state_32021[(2)]);
var state_32021__$1 = state_32021;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32021__$1,inst_32019);
} else {
if((state_val_32022 === (12))){
var inst_31985 = (state_32021[(8)]);
var inst_32009 = cljs.core.vec(inst_31985);
var state_32021__$1 = state_32021;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32021__$1,(15),out,inst_32009);
} else {
if((state_val_32022 === (2))){
var state_32021__$1 = state_32021;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32021__$1,(4),ch);
} else {
if((state_val_32022 === (11))){
var inst_32001 = (state_32021[(2)]);
var inst_32002 = (new Array(n));
var inst_31985 = inst_32002;
var inst_31986 = (0);
var state_32021__$1 = (function (){var statearr_32033 = state_32021;
(statearr_32033[(7)] = inst_31986);

(statearr_32033[(10)] = inst_32001);

(statearr_32033[(8)] = inst_31985);

return statearr_32033;
})();
var statearr_32034_33018 = state_32021__$1;
(statearr_32034_33018[(2)] = null);

(statearr_32034_33018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32022 === (9))){
var inst_31985 = (state_32021[(8)]);
var inst_31999 = cljs.core.vec(inst_31985);
var state_32021__$1 = state_32021;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32021__$1,(11),out,inst_31999);
} else {
if((state_val_32022 === (5))){
var inst_31986 = (state_32021[(7)]);
var inst_31985 = (state_32021[(8)]);
var inst_31989 = (state_32021[(9)]);
var inst_31994 = (state_32021[(11)]);
var inst_31993 = (inst_31985[inst_31986] = inst_31989);
var inst_31994__$1 = (inst_31986 + (1));
var inst_31995 = (inst_31994__$1 < n);
var state_32021__$1 = (function (){var statearr_32035 = state_32021;
(statearr_32035[(12)] = inst_31993);

(statearr_32035[(11)] = inst_31994__$1);

return statearr_32035;
})();
if(cljs.core.truth_(inst_31995)){
var statearr_32036_33024 = state_32021__$1;
(statearr_32036_33024[(1)] = (8));

} else {
var statearr_32037_33025 = state_32021__$1;
(statearr_32037_33025[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32022 === (14))){
var inst_32014 = (state_32021[(2)]);
var inst_32015 = cljs.core.async.close_BANG_(out);
var state_32021__$1 = (function (){var statearr_32039 = state_32021;
(statearr_32039[(13)] = inst_32014);

return statearr_32039;
})();
var statearr_32040_33026 = state_32021__$1;
(statearr_32040_33026[(2)] = inst_32015);

(statearr_32040_33026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32022 === (10))){
var inst_32005 = (state_32021[(2)]);
var state_32021__$1 = state_32021;
var statearr_32041_33027 = state_32021__$1;
(statearr_32041_33027[(2)] = inst_32005);

(statearr_32041_33027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32022 === (8))){
var inst_31985 = (state_32021[(8)]);
var inst_31994 = (state_32021[(11)]);
var tmp32038 = inst_31985;
var inst_31985__$1 = tmp32038;
var inst_31986 = inst_31994;
var state_32021__$1 = (function (){var statearr_32042 = state_32021;
(statearr_32042[(7)] = inst_31986);

(statearr_32042[(8)] = inst_31985__$1);

return statearr_32042;
})();
var statearr_32043_33028 = state_32021__$1;
(statearr_32043_33028[(2)] = null);

(statearr_32043_33028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30560__auto__ = null;
var cljs$core$async$state_machine__30560__auto____0 = (function (){
var statearr_32044 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32044[(0)] = cljs$core$async$state_machine__30560__auto__);

(statearr_32044[(1)] = (1));

return statearr_32044;
});
var cljs$core$async$state_machine__30560__auto____1 = (function (state_32021){
while(true){
var ret_value__30561__auto__ = (function (){try{while(true){
var result__30562__auto__ = switch__30559__auto__(state_32021);
if(cljs.core.keyword_identical_QMARK_(result__30562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30562__auto__;
}
break;
}
}catch (e32045){var ex__30563__auto__ = e32045;
var statearr_32046_33041 = state_32021;
(statearr_32046_33041[(2)] = ex__30563__auto__);


if(cljs.core.seq((state_32021[(4)]))){
var statearr_32047_33042 = state_32021;
(statearr_32047_33042[(1)] = cljs.core.first((state_32021[(4)])));

} else {
throw ex__30563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33043 = state_32021;
state_32021 = G__33043;
continue;
} else {
return ret_value__30561__auto__;
}
break;
}
});
cljs$core$async$state_machine__30560__auto__ = function(state_32021){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30560__auto____1.call(this,state_32021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30560__auto____0;
cljs$core$async$state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30560__auto____1;
return cljs$core$async$state_machine__30560__auto__;
})()
})();
var state__30645__auto__ = (function (){var statearr_32048 = f__30644__auto__();
(statearr_32048[(6)] = c__30643__auto___32969);

return statearr_32048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30645__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32050 = arguments.length;
switch (G__32050) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30643__auto___33045 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30644__auto__ = (function (){var switch__30559__auto__ = (function (state_32092){
var state_val_32093 = (state_32092[(1)]);
if((state_val_32093 === (7))){
var inst_32088 = (state_32092[(2)]);
var state_32092__$1 = state_32092;
var statearr_32094_33047 = state_32092__$1;
(statearr_32094_33047[(2)] = inst_32088);

(statearr_32094_33047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (1))){
var inst_32051 = [];
var inst_32052 = inst_32051;
var inst_32053 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32092__$1 = (function (){var statearr_32095 = state_32092;
(statearr_32095[(7)] = inst_32052);

(statearr_32095[(8)] = inst_32053);

return statearr_32095;
})();
var statearr_32096_33048 = state_32092__$1;
(statearr_32096_33048[(2)] = null);

(statearr_32096_33048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (4))){
var inst_32056 = (state_32092[(9)]);
var inst_32056__$1 = (state_32092[(2)]);
var inst_32057 = (inst_32056__$1 == null);
var inst_32058 = cljs.core.not(inst_32057);
var state_32092__$1 = (function (){var statearr_32097 = state_32092;
(statearr_32097[(9)] = inst_32056__$1);

return statearr_32097;
})();
if(inst_32058){
var statearr_32098_33049 = state_32092__$1;
(statearr_32098_33049[(1)] = (5));

} else {
var statearr_32099_33050 = state_32092__$1;
(statearr_32099_33050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (15))){
var inst_32082 = (state_32092[(2)]);
var state_32092__$1 = state_32092;
var statearr_32100_33051 = state_32092__$1;
(statearr_32100_33051[(2)] = inst_32082);

(statearr_32100_33051[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (13))){
var state_32092__$1 = state_32092;
var statearr_32101_33056 = state_32092__$1;
(statearr_32101_33056[(2)] = null);

(statearr_32101_33056[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (6))){
var inst_32052 = (state_32092[(7)]);
var inst_32077 = inst_32052.length;
var inst_32078 = (inst_32077 > (0));
var state_32092__$1 = state_32092;
if(cljs.core.truth_(inst_32078)){
var statearr_32102_33057 = state_32092__$1;
(statearr_32102_33057[(1)] = (12));

} else {
var statearr_32103_33058 = state_32092__$1;
(statearr_32103_33058[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (3))){
var inst_32090 = (state_32092[(2)]);
var state_32092__$1 = state_32092;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32092__$1,inst_32090);
} else {
if((state_val_32093 === (12))){
var inst_32052 = (state_32092[(7)]);
var inst_32080 = cljs.core.vec(inst_32052);
var state_32092__$1 = state_32092;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32092__$1,(15),out,inst_32080);
} else {
if((state_val_32093 === (2))){
var state_32092__$1 = state_32092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32092__$1,(4),ch);
} else {
if((state_val_32093 === (11))){
var inst_32056 = (state_32092[(9)]);
var inst_32060 = (state_32092[(10)]);
var inst_32070 = (state_32092[(2)]);
var inst_32071 = [];
var inst_32072 = inst_32071.push(inst_32056);
var inst_32052 = inst_32071;
var inst_32053 = inst_32060;
var state_32092__$1 = (function (){var statearr_32104 = state_32092;
(statearr_32104[(11)] = inst_32070);

(statearr_32104[(7)] = inst_32052);

(statearr_32104[(12)] = inst_32072);

(statearr_32104[(8)] = inst_32053);

return statearr_32104;
})();
var statearr_32105_33065 = state_32092__$1;
(statearr_32105_33065[(2)] = null);

(statearr_32105_33065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (9))){
var inst_32052 = (state_32092[(7)]);
var inst_32068 = cljs.core.vec(inst_32052);
var state_32092__$1 = state_32092;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32092__$1,(11),out,inst_32068);
} else {
if((state_val_32093 === (5))){
var inst_32056 = (state_32092[(9)]);
var inst_32060 = (state_32092[(10)]);
var inst_32053 = (state_32092[(8)]);
var inst_32060__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32056) : f.call(null,inst_32056));
var inst_32061 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32060__$1,inst_32053);
var inst_32062 = cljs.core.keyword_identical_QMARK_(inst_32053,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32063 = ((inst_32061) || (inst_32062));
var state_32092__$1 = (function (){var statearr_32106 = state_32092;
(statearr_32106[(10)] = inst_32060__$1);

return statearr_32106;
})();
if(cljs.core.truth_(inst_32063)){
var statearr_32107_33069 = state_32092__$1;
(statearr_32107_33069[(1)] = (8));

} else {
var statearr_32108_33070 = state_32092__$1;
(statearr_32108_33070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (14))){
var inst_32085 = (state_32092[(2)]);
var inst_32086 = cljs.core.async.close_BANG_(out);
var state_32092__$1 = (function (){var statearr_32110 = state_32092;
(statearr_32110[(13)] = inst_32085);

return statearr_32110;
})();
var statearr_32111_33071 = state_32092__$1;
(statearr_32111_33071[(2)] = inst_32086);

(statearr_32111_33071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (10))){
var inst_32075 = (state_32092[(2)]);
var state_32092__$1 = state_32092;
var statearr_32112_33072 = state_32092__$1;
(statearr_32112_33072[(2)] = inst_32075);

(statearr_32112_33072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (8))){
var inst_32052 = (state_32092[(7)]);
var inst_32056 = (state_32092[(9)]);
var inst_32060 = (state_32092[(10)]);
var inst_32065 = inst_32052.push(inst_32056);
var tmp32109 = inst_32052;
var inst_32052__$1 = tmp32109;
var inst_32053 = inst_32060;
var state_32092__$1 = (function (){var statearr_32113 = state_32092;
(statearr_32113[(7)] = inst_32052__$1);

(statearr_32113[(14)] = inst_32065);

(statearr_32113[(8)] = inst_32053);

return statearr_32113;
})();
var statearr_32114_33073 = state_32092__$1;
(statearr_32114_33073[(2)] = null);

(statearr_32114_33073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30560__auto__ = null;
var cljs$core$async$state_machine__30560__auto____0 = (function (){
var statearr_32115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32115[(0)] = cljs$core$async$state_machine__30560__auto__);

(statearr_32115[(1)] = (1));

return statearr_32115;
});
var cljs$core$async$state_machine__30560__auto____1 = (function (state_32092){
while(true){
var ret_value__30561__auto__ = (function (){try{while(true){
var result__30562__auto__ = switch__30559__auto__(state_32092);
if(cljs.core.keyword_identical_QMARK_(result__30562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30562__auto__;
}
break;
}
}catch (e32116){var ex__30563__auto__ = e32116;
var statearr_32117_33074 = state_32092;
(statearr_32117_33074[(2)] = ex__30563__auto__);


if(cljs.core.seq((state_32092[(4)]))){
var statearr_32118_33075 = state_32092;
(statearr_32118_33075[(1)] = cljs.core.first((state_32092[(4)])));

} else {
throw ex__30563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33076 = state_32092;
state_32092 = G__33076;
continue;
} else {
return ret_value__30561__auto__;
}
break;
}
});
cljs$core$async$state_machine__30560__auto__ = function(state_32092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30560__auto____1.call(this,state_32092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30560__auto____0;
cljs$core$async$state_machine__30560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30560__auto____1;
return cljs$core$async$state_machine__30560__auto__;
})()
})();
var state__30645__auto__ = (function (){var statearr_32119 = f__30644__auto__();
(statearr_32119[(6)] = c__30643__auto___33045);

return statearr_32119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30645__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
