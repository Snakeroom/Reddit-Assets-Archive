// https://www.redditstatic.com/desktop2x/vendors~reddit-components-FormBuilder.cf9b3b949c14cd5600ef.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~reddit-components-FormBuilder"], {
		"./node_modules/formik/dist/formik.esm.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return Qn
			})), r.d(t, "b", (function() {
				return Xn
			})), r.d(t, "c", (function() {
				return qn
			}));
			var n = r("./node_modules/react/index.js"),
				o = r("./node_modules/react-fast-compare/index.js"),
				a = r.n(o),
				i = function(e) {
					return function(e) {
						return !!e && "object" == typeof e
					}(e) && ! function(e) {
						var t = Object.prototype.toString.call(e);
						return "[object RegExp]" === t || "[object Date]" === t || function(e) {
							return e.$$typeof === u
						}(e)
					}(e)
				};
			var u = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

			function c(e, t) {
				return !1 !== t.clone && t.isMergeableObject(e) ? s((r = e, Array.isArray(r) ? [] : {}), e, t) : e;
				var r
			}

			function l(e, t, r) {
				return e.concat(t).map((function(e) {
					return c(e, r)
				}))
			}

			function s(e, t, r) {
				(r = r || {}).arrayMerge = r.arrayMerge || l, r.isMergeableObject = r.isMergeableObject || i;
				var n = Array.isArray(t);
				return n === Array.isArray(e) ? n ? r.arrayMerge(e, t, r) : function(e, t, r) {
					var n = {};
					return r.isMergeableObject(e) && Object.keys(e).forEach((function(t) {
						n[t] = c(e[t], r)
					})), Object.keys(t).forEach((function(o) {
						r.isMergeableObject(t[o]) && e[o] ? n[o] = s(e[o], t[o], r) : n[o] = c(t[o], r)
					})), n
				}(e, t, r) : c(t, r)
			}
			s.all = function(e, t) {
				if (!Array.isArray(e)) throw new Error("first argument should be an array");
				return e.reduce((function(e, r) {
					return s(e, r, t)
				}), {})
			};
			var f = s,
				d = r("./node_modules/lodash-es/_root.js"),
				p = d.a.Symbol,
				v = Object.prototype,
				b = v.hasOwnProperty,
				h = v.toString,
				y = p ? p.toStringTag : void 0;
			var m = function(e) {
					var t = b.call(e, y),
						r = e[y];
					try {
						e[y] = void 0;
						var n = !0
					} catch (a) {}
					var o = h.call(e);
					return n && (t ? e[y] = r : delete e[y]), o
				},
				_ = Object.prototype.toString;
			var j = function(e) {
					return _.call(e)
				},
				O = "[object Null]",
				g = "[object Undefined]",
				S = p ? p.toStringTag : void 0;
			var E = function(e) {
				return null == e ? void 0 === e ? g : O : S && S in Object(e) ? m(e) : j(e)
			};
			var w = function(e, t) {
					return function(r) {
						return e(t(r))
					}
				},
				T = w(Object.getPrototypeOf, Object);
			var A = function(e) {
					return null != e && "object" == typeof e
				},
				k = "[object Object]",
				F = Function.prototype,
				I = Object.prototype,
				R = F.toString,
				C = I.hasOwnProperty,
				P = R.call(Object);
			var M = function(e) {
				if (!A(e) || E(e) != k) return !1;
				var t = T(e);
				if (null === t) return !0;
				var r = C.call(t, "constructor") && t.constructor;
				return "function" == typeof r && r instanceof r && R.call(r) == P
			};
			var x = function() {
				this.__data__ = [], this.size = 0
			};
			var D = function(e, t) {
				return e === t || e != e && t != t
			};
			var U = function(e, t) {
					for (var r = e.length; r--;)
						if (D(e[r][0], t)) return r;
					return -1
				},
				L = Array.prototype.splice;
			var B = function(e) {
				var t = this.__data__,
					r = U(t, e);
				return !(r < 0) && (r == t.length - 1 ? t.pop() : L.call(t, r, 1), --this.size, !0)
			};
			var V = function(e) {
				var t = this.__data__,
					r = U(t, e);
				return r < 0 ? void 0 : t[r][1]
			};
			var N = function(e) {
				return U(this.__data__, e) > -1
			};
			var z = function(e, t) {
				var r = this.__data__,
					n = U(r, e);
				return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
			};

			function G(e) {
				var t = -1,
					r = null == e ? 0 : e.length;
				for (this.clear(); ++t < r;) {
					var n = e[t];
					this.set(n[0], n[1])
				}
			}
			G.prototype.clear = x, G.prototype.delete = B, G.prototype.get = V, G.prototype.has = N, G.prototype.set = z;
			var $ = G;
			var W = function() {
				this.__data__ = new $, this.size = 0
			};
			var H = function(e) {
				var t = this.__data__,
					r = t.delete(e);
				return this.size = t.size, r
			};
			var q = function(e) {
				return this.__data__.get(e)
			};
			var K = function(e) {
				return this.__data__.has(e)
			};
			var Y = function(e) {
					var t = typeof e;
					return null != e && ("object" == t || "function" == t)
				},
				J = "[object AsyncFunction]",
				Q = "[object Function]",
				X = "[object GeneratorFunction]",
				Z = "[object Proxy]";
			var ee, te = function(e) {
					if (!Y(e)) return !1;
					var t = E(e);
					return t == Q || t == X || t == J || t == Z
				},
				re = d.a["__core-js_shared__"],
				ne = (ee = /[^.]+$/.exec(re && re.keys && re.keys.IE_PROTO || "")) ? "Symbol(src)_1." + ee : "";
			var oe = function(e) {
					return !!ne && ne in e
				},
				ae = Function.prototype.toString;
			var ie = function(e) {
					if (null != e) {
						try {
							return ae.call(e)
						} catch (t) {}
						try {
							return e + ""
						} catch (t) {}
					}
					return ""
				},
				ue = /^\[object .+?Constructor\]$/,
				ce = Function.prototype,
				le = Object.prototype,
				se = ce.toString,
				fe = le.hasOwnProperty,
				de = RegExp("^" + se.call(fe).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
			var pe = function(e) {
				return !(!Y(e) || oe(e)) && (te(e) ? de : ue).test(ie(e))
			};
			var ve = function(e, t) {
				return null == e ? void 0 : e[t]
			};
			var be = function(e, t) {
					var r = ve(e, t);
					return pe(r) ? r : void 0
				},
				he = be(d.a, "Map"),
				ye = be(Object, "create");
			var me = function() {
				this.__data__ = ye ? ye(null) : {}, this.size = 0
			};
			var _e = function(e) {
					var t = this.has(e) && delete this.__data__[e];
					return this.size -= t ? 1 : 0, t
				},
				je = "__lodash_hash_undefined__",
				Oe = Object.prototype.hasOwnProperty;
			var ge = function(e) {
					var t = this.__data__;
					if (ye) {
						var r = t[e];
						return r === je ? void 0 : r
					}
					return Oe.call(t, e) ? t[e] : void 0
				},
				Se = Object.prototype.hasOwnProperty;
			var Ee = function(e) {
					var t = this.__data__;
					return ye ? void 0 !== t[e] : Se.call(t, e)
				},
				we = "__lodash_hash_undefined__";
			var Te = function(e, t) {
				var r = this.__data__;
				return this.size += this.has(e) ? 0 : 1, r[e] = ye && void 0 === t ? we : t, this
			};

			function Ae(e) {
				var t = -1,
					r = null == e ? 0 : e.length;
				for (this.clear(); ++t < r;) {
					var n = e[t];
					this.set(n[0], n[1])
				}
			}
			Ae.prototype.clear = me, Ae.prototype.delete = _e, Ae.prototype.get = ge, Ae.prototype.has = Ee, Ae.prototype.set = Te;
			var ke = Ae;
			var Fe = function() {
				this.size = 0, this.__data__ = {
					hash: new ke,
					map: new(he || $),
					string: new ke
				}
			};
			var Ie = function(e) {
				var t = typeof e;
				return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
			};
			var Re = function(e, t) {
				var r = e.__data__;
				return Ie(t) ? r["string" == typeof t ? "string" : "hash"] : r.map
			};
			var Ce = function(e) {
				var t = Re(this, e).delete(e);
				return this.size -= t ? 1 : 0, t
			};
			var Pe = function(e) {
				return Re(this, e).get(e)
			};
			var Me = function(e) {
				return Re(this, e).has(e)
			};
			var xe = function(e, t) {
				var r = Re(this, e),
					n = r.size;
				return r.set(e, t), this.size += r.size == n ? 0 : 1, this
			};

			function De(e) {
				var t = -1,
					r = null == e ? 0 : e.length;
				for (this.clear(); ++t < r;) {
					var n = e[t];
					this.set(n[0], n[1])
				}
			}
			De.prototype.clear = Fe, De.prototype.delete = Ce, De.prototype.get = Pe, De.prototype.has = Me, De.prototype.set = xe;
			var Ue = De,
				Le = 200;
			var Be = function(e, t) {
				var r = this.__data__;
				if (r instanceof $) {
					var n = r.__data__;
					if (!he || n.length < Le - 1) return n.push([e, t]), this.size = ++r.size, this;
					r = this.__data__ = new Ue(n)
				}
				return r.set(e, t), this.size = r.size, this
			};

			function Ve(e) {
				var t = this.__data__ = new $(e);
				this.size = t.size
			}
			Ve.prototype.clear = W, Ve.prototype.delete = H, Ve.prototype.get = q, Ve.prototype.has = K, Ve.prototype.set = Be;
			var Ne = Ve;
			var ze = function(e, t) {
					for (var r = -1, n = null == e ? 0 : e.length; ++r < n && !1 !== t(e[r], r, e););
					return e
				},
				Ge = function() {
					try {
						var e = be(Object, "defineProperty");
						return e({}, "", {}), e
					} catch (t) {}
				}();
			var $e = function(e, t, r) {
					"__proto__" == t && Ge ? Ge(e, t, {
						configurable: !0,
						enumerable: !0,
						value: r,
						writable: !0
					}) : e[t] = r
				},
				We = Object.prototype.hasOwnProperty;
			var He = function(e, t, r) {
				var n = e[t];
				We.call(e, t) && D(n, r) && (void 0 !== r || t in e) || $e(e, t, r)
			};
			var qe = function(e, t, r, n) {
				var o = !r;
				r || (r = {});
				for (var a = -1, i = t.length; ++a < i;) {
					var u = t[a],
						c = n ? n(r[u], e[u], u, r, e) : void 0;
					void 0 === c && (c = e[u]), o ? $e(r, u, c) : He(r, u, c)
				}
				return r
			};
			var Ke = function(e, t) {
					for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
					return n
				},
				Ye = "[object Arguments]";
			var Je = function(e) {
					return A(e) && E(e) == Ye
				},
				Qe = Object.prototype,
				Xe = Qe.hasOwnProperty,
				Ze = Qe.propertyIsEnumerable,
				et = Je(function() {
					return arguments
				}()) ? Je : function(e) {
					return A(e) && Xe.call(e, "callee") && !Ze.call(e, "callee")
				},
				tt = Array.isArray,
				rt = r("./node_modules/lodash-es/isBuffer.js"),
				nt = 9007199254740991,
				ot = /^(?:0|[1-9]\d*)$/;
			var at = function(e, t) {
					var r = typeof e;
					return !!(t = null == t ? nt : t) && ("number" == r || "symbol" != r && ot.test(e)) && e > -1 && e % 1 == 0 && e < t
				},
				it = 9007199254740991;
			var ut = function(e) {
					return "number" == typeof e && e > -1 && e % 1 == 0 && e <= it
				},
				ct = {};
			ct["[object Float32Array]"] = ct["[object Float64Array]"] = ct["[object Int8Array]"] = ct["[object Int16Array]"] = ct["[object Int32Array]"] = ct["[object Uint8Array]"] = ct["[object Uint8ClampedArray]"] = ct["[object Uint16Array]"] = ct["[object Uint32Array]"] = !0, ct["[object Arguments]"] = ct["[object Array]"] = ct["[object ArrayBuffer]"] = ct["[object Boolean]"] = ct["[object DataView]"] = ct["[object Date]"] = ct["[object Error]"] = ct["[object Function]"] = ct["[object Map]"] = ct["[object Number]"] = ct["[object Object]"] = ct["[object RegExp]"] = ct["[object Set]"] = ct["[object String]"] = ct["[object WeakMap]"] = !1;
			var lt = function(e) {
				return A(e) && ut(e.length) && !!ct[E(e)]
			};
			var st = function(e) {
					return function(t) {
						return e(t)
					}
				},
				ft = r("./node_modules/lodash-es/_nodeUtil.js"),
				dt = ft.a && ft.a.isTypedArray,
				pt = dt ? st(dt) : lt,
				vt = Object.prototype.hasOwnProperty;
			var bt = function(e, t) {
					var r = tt(e),
						n = !r && et(e),
						o = !r && !n && Object(rt.a)(e),
						a = !r && !n && !o && pt(e),
						i = r || n || o || a,
						u = i ? Ke(e.length, String) : [],
						c = u.length;
					for (var l in e) !t && !vt.call(e, l) || i && ("length" == l || o && ("offset" == l || "parent" == l) || a && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || at(l, c)) || u.push(l);
					return u
				},
				ht = Object.prototype;
			var yt = function(e) {
					var t = e && e.constructor;
					return e === ("function" == typeof t && t.prototype || ht)
				},
				mt = w(Object.keys, Object),
				_t = Object.prototype.hasOwnProperty;
			var jt = function(e) {
				if (!yt(e)) return mt(e);
				var t = [];
				for (var r in Object(e)) _t.call(e, r) && "constructor" != r && t.push(r);
				return t
			};
			var Ot = function(e) {
				return null != e && ut(e.length) && !te(e)
			};
			var gt = function(e) {
				return Ot(e) ? bt(e) : jt(e)
			};
			var St = function(e, t) {
				return e && qe(t, gt(t), e)
			};
			var Et = function(e) {
					var t = [];
					if (null != e)
						for (var r in Object(e)) t.push(r);
					return t
				},
				wt = Object.prototype.hasOwnProperty;
			var Tt = function(e) {
				if (!Y(e)) return Et(e);
				var t = yt(e),
					r = [];
				for (var n in e)("constructor" != n || !t && wt.call(e, n)) && r.push(n);
				return r
			};
			var At = function(e) {
				return Ot(e) ? bt(e, !0) : Tt(e)
			};
			var kt = function(e, t) {
					return e && qe(t, At(t), e)
				},
				Ft = r("./node_modules/lodash-es/_cloneBuffer.js");
			var It = function(e, t) {
				var r = -1,
					n = e.length;
				for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
				return t
			};
			var Rt = function(e, t) {
				for (var r = -1, n = null == e ? 0 : e.length, o = 0, a = []; ++r < n;) {
					var i = e[r];
					t(i, r, e) && (a[o++] = i)
				}
				return a
			};
			var Ct = function() {
					return []
				},
				Pt = Object.prototype.propertyIsEnumerable,
				Mt = Object.getOwnPropertySymbols,
				xt = Mt ? function(e) {
					return null == e ? [] : (e = Object(e), Rt(Mt(e), (function(t) {
						return Pt.call(e, t)
					})))
				} : Ct;
			var Dt = function(e, t) {
				return qe(e, xt(e), t)
			};
			var Ut = function(e, t) {
					for (var r = -1, n = t.length, o = e.length; ++r < n;) e[o + r] = t[r];
					return e
				},
				Lt = Object.getOwnPropertySymbols ? function(e) {
					for (var t = []; e;) Ut(t, xt(e)), e = T(e);
					return t
				} : Ct;
			var Bt = function(e, t) {
				return qe(e, Lt(e), t)
			};
			var Vt = function(e, t, r) {
				var n = t(e);
				return tt(e) ? n : Ut(n, r(e))
			};
			var Nt = function(e) {
				return Vt(e, gt, xt)
			};
			var zt = function(e) {
					return Vt(e, At, Lt)
				},
				Gt = be(d.a, "DataView"),
				$t = be(d.a, "Promise"),
				Wt = be(d.a, "Set"),
				Ht = be(d.a, "WeakMap"),
				qt = ie(Gt),
				Kt = ie(he),
				Yt = ie($t),
				Jt = ie(Wt),
				Qt = ie(Ht),
				Xt = E;
			(Gt && "[object DataView]" != Xt(new Gt(new ArrayBuffer(1))) || he && "[object Map]" != Xt(new he) || $t && "[object Promise]" != Xt($t.resolve()) || Wt && "[object Set]" != Xt(new Wt) || Ht && "[object WeakMap]" != Xt(new Ht)) && (Xt = function(e) {
				var t = E(e),
					r = "[object Object]" == t ? e.constructor : void 0,
					n = r ? ie(r) : "";
				if (n) switch (n) {
					case qt:
						return "[object DataView]";
					case Kt:
						return "[object Map]";
					case Yt:
						return "[object Promise]";
					case Jt:
						return "[object Set]";
					case Qt:
						return "[object WeakMap]"
				}
				return t
			});
			var Zt = Xt,
				er = Object.prototype.hasOwnProperty;
			var tr = function(e) {
					var t = e.length,
						r = new e.constructor(t);
					return t && "string" == typeof e[0] && er.call(e, "index") && (r.index = e.index, r.input = e.input), r
				},
				rr = d.a.Uint8Array;
			var nr = function(e) {
				var t = new e.constructor(e.byteLength);
				return new rr(t).set(new rr(e)), t
			};
			var or = function(e, t) {
					var r = t ? nr(e.buffer) : e.buffer;
					return new e.constructor(r, e.byteOffset, e.byteLength)
				},
				ar = /\w*$/;
			var ir = function(e) {
					var t = new e.constructor(e.source, ar.exec(e));
					return t.lastIndex = e.lastIndex, t
				},
				ur = p ? p.prototype : void 0,
				cr = ur ? ur.valueOf : void 0;
			var lr = function(e) {
				return cr ? Object(cr.call(e)) : {}
			};
			var sr = function(e, t) {
					var r = t ? nr(e.buffer) : e.buffer;
					return new e.constructor(r, e.byteOffset, e.length)
				},
				fr = "[object Boolean]",
				dr = "[object Date]",
				pr = "[object Map]",
				vr = "[object Number]",
				br = "[object RegExp]",
				hr = "[object Set]",
				yr = "[object String]",
				mr = "[object Symbol]",
				_r = "[object ArrayBuffer]",
				jr = "[object DataView]",
				Or = "[object Float32Array]",
				gr = "[object Float64Array]",
				Sr = "[object Int8Array]",
				Er = "[object Int16Array]",
				wr = "[object Int32Array]",
				Tr = "[object Uint8Array]",
				Ar = "[object Uint8ClampedArray]",
				kr = "[object Uint16Array]",
				Fr = "[object Uint32Array]";
			var Ir = function(e, t, r) {
					var n = e.constructor;
					switch (t) {
						case _r:
							return nr(e);
						case fr:
						case dr:
							return new n(+e);
						case jr:
							return or(e, r);
						case Or:
						case gr:
						case Sr:
						case Er:
						case wr:
						case Tr:
						case Ar:
						case kr:
						case Fr:
							return sr(e, r);
						case pr:
							return new n;
						case vr:
						case yr:
							return new n(e);
						case br:
							return ir(e);
						case hr:
							return new n;
						case mr:
							return lr(e)
					}
				},
				Rr = Object.create,
				Cr = function() {
					function e() {}
					return function(t) {
						if (!Y(t)) return {};
						if (Rr) return Rr(t);
						e.prototype = t;
						var r = new e;
						return e.prototype = void 0, r
					}
				}();
			var Pr = function(e) {
					return "function" != typeof e.constructor || yt(e) ? {} : Cr(T(e))
				},
				Mr = "[object Map]";
			var xr = function(e) {
					return A(e) && Zt(e) == Mr
				},
				Dr = ft.a && ft.a.isMap,
				Ur = Dr ? st(Dr) : xr,
				Lr = "[object Set]";
			var Br = function(e) {
					return A(e) && Zt(e) == Lr
				},
				Vr = ft.a && ft.a.isSet,
				Nr = Vr ? st(Vr) : Br,
				zr = 1,
				Gr = 2,
				$r = 4,
				Wr = "[object Arguments]",
				Hr = "[object Function]",
				qr = "[object GeneratorFunction]",
				Kr = "[object Object]",
				Yr = {};
			Yr[Wr] = Yr["[object Array]"] = Yr["[object ArrayBuffer]"] = Yr["[object DataView]"] = Yr["[object Boolean]"] = Yr["[object Date]"] = Yr["[object Float32Array]"] = Yr["[object Float64Array]"] = Yr["[object Int8Array]"] = Yr["[object Int16Array]"] = Yr["[object Int32Array]"] = Yr["[object Map]"] = Yr["[object Number]"] = Yr[Kr] = Yr["[object RegExp]"] = Yr["[object Set]"] = Yr["[object String]"] = Yr["[object Symbol]"] = Yr["[object Uint8Array]"] = Yr["[object Uint8ClampedArray]"] = Yr["[object Uint16Array]"] = Yr["[object Uint32Array]"] = !0, Yr["[object Error]"] = Yr[Hr] = Yr["[object WeakMap]"] = !1;
			var Jr = function e(t, r, n, o, a, i) {
					var u, c = r & zr,
						l = r & Gr,
						s = r & $r;
					if (n && (u = a ? n(t, o, a, i) : n(t)), void 0 !== u) return u;
					if (!Y(t)) return t;
					var f = tt(t);
					if (f) {
						if (u = tr(t), !c) return It(t, u)
					} else {
						var d = Zt(t),
							p = d == Hr || d == qr;
						if (Object(rt.a)(t)) return Object(Ft.a)(t, c);
						if (d == Kr || d == Wr || p && !a) {
							if (u = l || p ? {} : Pr(t), !c) return l ? Bt(t, kt(u, t)) : Dt(t, St(u, t))
						} else {
							if (!Yr[d]) return a ? t : {};
							u = Ir(t, d, c)
						}
					}
					i || (i = new Ne);
					var v = i.get(t);
					if (v) return v;
					i.set(t, u), Nr(t) ? t.forEach((function(o) {
						u.add(e(o, r, n, o, t, i))
					})) : Ur(t) && t.forEach((function(o, a) {
						u.set(a, e(o, r, n, a, t, i))
					}));
					var b = s ? l ? zt : Nt : l ? keysIn : gt,
						h = f ? void 0 : b(t);
					return ze(h || t, (function(o, a) {
						h && (o = t[a = o]), He(u, a, e(o, r, n, a, t, i))
					})), u
				},
				Qr = 4;
			var Xr = function(e) {
				return Jr(e, Qr)
			};
			var Zr = function(e, t) {
					for (var r = -1, n = null == e ? 0 : e.length, o = Array(n); ++r < n;) o[r] = t(e[r], r, e);
					return o
				},
				en = "[object Symbol]";
			var tn = function(e) {
					return "symbol" == typeof e || A(e) && E(e) == en
				},
				rn = "Expected a function";

			function nn(e, t) {
				if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError(rn);
				var r = function() {
					var n = arguments,
						o = t ? t.apply(this, n) : n[0],
						a = r.cache;
					if (a.has(o)) return a.get(o);
					var i = e.apply(this, n);
					return r.cache = a.set(o, i) || a, i
				};
				return r.cache = new(nn.Cache || Ue), r
			}
			nn.Cache = Ue;
			var on = nn,
				an = 500;
			var un = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
				cn = /\\(\\)?/g,
				ln = function(e) {
					var t = on(e, (function(e) {
							return r.size === an && r.clear(), e
						})),
						r = t.cache;
					return t
				}((function(e) {
					var t = [];
					return 46 === e.charCodeAt(0) && t.push(""), e.replace(un, (function(e, r, n, o) {
						t.push(n ? o.replace(cn, "$1") : r || e)
					})), t
				})),
				sn = 1 / 0;
			var fn = function(e) {
					if ("string" == typeof e || tn(e)) return e;
					var t = e + "";
					return "0" == t && 1 / e == -sn ? "-0" : t
				},
				dn = 1 / 0,
				pn = p ? p.prototype : void 0,
				vn = pn ? pn.toString : void 0;
			var bn = function e(t) {
				if ("string" == typeof t) return t;
				if (tt(t)) return Zr(t, e) + "";
				if (tn(t)) return vn ? vn.call(t) : "";
				var r = t + "";
				return "0" == r && 1 / t == -dn ? "-0" : r
			};
			var hn = function(e) {
				return null == e ? "" : bn(e)
			};
			var yn = function(e) {
					return tt(e) ? Zr(e, fn) : tn(e) ? [e] : It(ln(hn(e)))
				},
				mn = r("./node_modules/tiny-warning/dist/tiny-warning.esm.js"),
				_n = r("./node_modules/scheduler/index.js"),
				jn = r("./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),
				On = r.n(jn),
				gn = 1,
				Sn = 4;
			var En = function(e) {
				return Jr(e, gn | Sn)
			};

			function wn() {
				return (wn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}

			function Tn(e, t) {
				e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
			}

			function An(e, t) {
				if (null == e) return {};
				var r, n, o = {},
					a = Object.keys(e);
				for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
				return o
			}

			function kn(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}
			var Fn = function(e) {
					return Array.isArray(e) && 0 === e.length
				},
				In = function(e) {
					return "function" == typeof e
				},
				Rn = function(e) {
					return null !== e && "object" == typeof e
				},
				Cn = function(e) {
					return String(Math.floor(Number(e))) === e
				},
				Pn = function(e) {
					return "[object String]" === Object.prototype.toString.call(e)
				},
				Mn = function(e) {
					return 0 === n.Children.count(e)
				},
				xn = function(e) {
					return Rn(e) && In(e.then)
				};

			function Dn(e, t, r, n) {
				void 0 === n && (n = 0);
				for (var o = yn(t); e && n < o.length;) e = e[o[n++]];
				return void 0 === e ? r : e
			}

			function Un(e, t, r) {
				for (var n = Xr(e), o = n, a = 0, i = yn(t); a < i.length - 1; a++) {
					var u = i[a],
						c = Dn(e, i.slice(0, a + 1));
					if (c && (Rn(c) || Array.isArray(c))) o = o[u] = Xr(c);
					else {
						var l = i[a + 1];
						o = o[u] = Cn(l) && Number(l) >= 0 ? [] : {}
					}
				}
				return (0 === a ? e : o)[i[a]] === r ? e : (void 0 === r ? delete o[i[a]] : o[i[a]] = r, 0 === a && void 0 === r && delete n[i[a]], n)
			}

			function Ln(e, t, r, n) {
				void 0 === r && (r = new WeakMap), void 0 === n && (n = {});
				for (var o = 0, a = Object.keys(e); o < a.length; o++) {
					var i = a[o],
						u = e[i];
					Rn(u) ? r.get(u) || (r.set(u, !0), n[i] = Array.isArray(u) ? [] : {}, Ln(u, t, r, n[i])) : n[i] = t
				}
				return n
			}
			var Bn = Object(n.createContext)(void 0),
				Vn = Bn.Provider,
				Nn = Bn.Consumer;

			function zn() {
				var e = Object(n.useContext)(Bn);
				return e || Object(mn.default)(!1), e
			}

			function Gn(e, t) {
				switch (t.type) {
					case "SET_VALUES":
						return wn({}, e, {
							values: t.payload
						});
					case "SET_TOUCHED":
						return wn({}, e, {
							touched: t.payload
						});
					case "SET_ERRORS":
						return a()(e.errors, t.payload) ? e : wn({}, e, {
							errors: t.payload
						});
					case "SET_STATUS":
						return wn({}, e, {
							status: t.payload
						});
					case "SET_ISSUBMITTING":
						return wn({}, e, {
							isSubmitting: t.payload
						});
					case "SET_ISVALIDATING":
						return wn({}, e, {
							isValidating: t.payload
						});
					case "SET_FIELD_VALUE":
						return wn({}, e, {
							values: Un(e.values, t.payload.field, t.payload.value)
						});
					case "SET_FIELD_TOUCHED":
						return wn({}, e, {
							touched: Un(e.touched, t.payload.field, t.payload.value)
						});
					case "SET_FIELD_ERROR":
						return wn({}, e, {
							errors: Un(e.errors, t.payload.field, t.payload.value)
						});
					case "RESET_FORM":
						return wn({}, e, {}, t.payload);
					case "SET_FORMIK_STATE":
						return t.payload(e);
					case "SUBMIT_ATTEMPT":
						return wn({}, e, {
							touched: Ln(e.values, !0),
							isSubmitting: !0,
							submitCount: e.submitCount + 1
						});
					case "SUBMIT_FAILURE":
					case "SUBMIT_SUCCESS":
						return wn({}, e, {
							isSubmitting: !1
						});
					default:
						return e
				}
			}
			var $n = {},
				Wn = {};

			function Hn(e) {
				var t = e.validateOnChange,
					r = void 0 === t || t,
					o = e.validateOnBlur,
					i = void 0 === o || o,
					u = e.validateOnMount,
					c = void 0 !== u && u,
					l = e.isInitialValid,
					s = e.enableReinitialize,
					d = void 0 !== s && s,
					p = e.onSubmit,
					v = An(e, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]),
					b = wn({
						validateOnChange: r,
						validateOnBlur: i,
						validateOnMount: c,
						onSubmit: p
					}, v),
					h = Object(n.useRef)(b.initialValues),
					y = Object(n.useRef)(b.initialErrors || $n),
					m = Object(n.useRef)(b.initialTouched || Wn),
					_ = Object(n.useRef)(b.initialStatus),
					j = Object(n.useRef)(!1),
					O = Object(n.useRef)({});
				Object(n.useEffect)((function() {
					return j.current = !0,
						function() {
							j.current = !1
						}
				}), []);
				var g = Object(n.useReducer)(Gn, {
						values: b.initialValues,
						errors: b.initialErrors || $n,
						touched: b.initialTouched || Wn,
						status: b.initialStatus,
						isSubmitting: !1,
						isValidating: !1,
						submitCount: 0
					}),
					S = g[0],
					E = g[1],
					w = Object(n.useCallback)((function(e, t) {
						return new Promise((function(r, n) {
							var o = b.validate(e, t);
							null == o ? r($n) : xn(o) ? o.then((function(e) {
								r(e || $n)
							}), (function(e) {
								n(e)
							})) : r(o)
						}))
					}), [b.validate]),
					T = Object(n.useCallback)((function(e, t) {
						var r = b.validationSchema,
							n = In(r) ? r(t) : r,
							o = t && n.validateAt ? n.validateAt(t, e) : function(e, t, r, n) {
								void 0 === r && (r = !1);
								void 0 === n && (n = {});
								var o = function e(t) {
									var r = Array.isArray(t) ? [] : {};
									for (var n in t)
										if (Object.prototype.hasOwnProperty.call(t, n)) {
											var o = String(n);
											!0 === Array.isArray(t[o]) ? r[o] = t[o].map((function(t) {
												return !0 === Array.isArray(t) || M(t) ? e(t) : "" !== t ? t : void 0
											})) : M(t[o]) ? r[o] = e(t[o]) : r[o] = "" !== t[o] ? t[o] : void 0
										} return r
								}(e);
								return t[r ? "validateSync" : "validate"](o, {
									abortEarly: !1,
									context: n
								})
							}(e, n);
						return new Promise((function(e, t) {
							o.then((function() {
								e($n)
							}), (function(r) {
								"ValidationError" === r.name ? e(function(e) {
									var t = {};
									if (e.inner) {
										if (0 === e.inner.length) return Un(t, e.path, e.message);
										var r = e.inner,
											n = Array.isArray(r),
											o = 0;
										for (r = n ? r : r[Symbol.iterator]();;) {
											var a;
											if (n) {
												if (o >= r.length) break;
												a = r[o++]
											} else {
												if ((o = r.next()).done) break;
												a = o.value
											}
											var i = a;
											Dn(t, i.path) || (t = Un(t, i.path, i.message))
										}
									}
									return t
								}(r)) : t(r)
							}))
						}))
					}), [b.validationSchema]),
					A = Object(n.useCallback)((function(e, t) {
						return new Promise((function(r) {
							return r(O.current[e].validate(t))
						}))
					}), []),
					k = Object(n.useCallback)((function(e) {
						var t = Object.keys(O.current).filter((function(e) {
								return In(O.current[e].validate)
							})),
							r = t.length > 0 ? t.map((function(t) {
								return A(t, Dn(e, t))
							})) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
						return Promise.all(r).then((function(e) {
							return e.reduce((function(e, r, n) {
								return "DO_NOT_DELETE_YOU_WILL_BE_FIRED" === r ? e : (r && (e = Un(e, t[n], r)), e)
							}), {})
						}))
					}), [A]),
					F = Object(n.useCallback)((function(e) {
						return Promise.all([k(e), b.validationSchema ? T(e) : {}, b.validate ? w(e) : {}]).then((function(e) {
							var t = e[0],
								r = e[1],
								n = e[2];
							return f.all([t, r, n], {
								arrayMerge: Kn
							})
						}))
					}), [b.validate, b.validationSchema, k, w, T]),
					I = Jn((function(e) {
						return void 0 === e && (e = S.values), Object(_n.unstable_runWithPriority)(_n.unstable_LowPriority, (function() {
							return F(e).then((function(e) {
								return j.current && E({
									type: "SET_ERRORS",
									payload: e
								}), e
							})).catch((function(e) {
								0
							}))
						}))
					})),
					R = Jn((function(e) {
						return void 0 === e && (e = S.values), E({
							type: "SET_ISVALIDATING",
							payload: !0
						}), F(e).then((function(e) {
							return j.current && (E({
								type: "SET_ISVALIDATING",
								payload: !1
							}), a()(S.errors, e) || E({
								type: "SET_ERRORS",
								payload: e
							})), e
						}))
					})),
					C = Object(n.useCallback)((function(e) {
						var t = e && e.values ? e.values : h.current,
							r = e && e.errors ? e.errors : y.current ? y.current : b.initialErrors || {},
							n = e && e.touched ? e.touched : m.current ? m.current : b.initialTouched || {},
							o = e && e.status ? e.status : _.current ? _.current : b.initialStatus;
						h.current = t, y.current = r, m.current = n, _.current = o;
						var a = function() {
							E({
								type: "RESET_FORM",
								payload: {
									isSubmitting: !!e && !!e.isSubmitting,
									errors: r,
									touched: n,
									status: o,
									values: t,
									isValidating: !!e && !!e.isValidating,
									submitCount: e && e.submitCount && "number" == typeof e.submitCount ? e.submitCount : 0
								}
							})
						};
						if (b.onReset) {
							var i = b.onReset(S.values, X);
							xn(i) ? i.then(a) : a()
						} else a()
					}), [b.initialErrors, b.initialStatus, b.initialTouched]);
				Object(n.useEffect)((function() {
					!0 !== j.current || a()(h.current, b.initialValues) || (h.current = b.initialValues, d && C(), c && I(h.current))
				}), [d, b.initialValues, C, c, I]), Object(n.useEffect)((function() {
					d && !0 === j.current && !a()(y.current, b.initialErrors) && (y.current = b.initialErrors || $n, E({
						type: "SET_ERRORS",
						payload: b.initialErrors || $n
					}))
				}), [d, b.initialErrors]), Object(n.useEffect)((function() {
					d && !0 === j.current && !a()(m.current, b.initialTouched) && (m.current = b.initialTouched || Wn, E({
						type: "SET_TOUCHED",
						payload: b.initialTouched || Wn
					}))
				}), [d, b.initialTouched]), Object(n.useEffect)((function() {
					d && !0 === j.current && !a()(_.current, b.initialStatus) && (_.current = b.initialStatus, E({
						type: "SET_STATUS",
						payload: b.initialStatus
					}))
				}), [d, b.initialStatus, b.initialTouched]);
				var P = Jn((function(e) {
						if (In(O.current[e].validate)) {
							var t = Dn(S.values, e),
								r = O.current[e].validate(t);
							return xn(r) ? (E({
								type: "SET_ISVALIDATING",
								payload: !0
							}), r.then((function(e) {
								return e
							})).then((function(t) {
								E({
									type: "SET_FIELD_ERROR",
									payload: {
										field: e,
										value: t
									}
								}), E({
									type: "SET_ISVALIDATING",
									payload: !1
								})
							}))) : (E({
								type: "SET_FIELD_ERROR",
								payload: {
									field: e,
									value: r
								}
							}), Promise.resolve(r))
						}
						return b.validationSchema ? (E({
							type: "SET_ISVALIDATING",
							payload: !0
						}), T(S.values, e).then((function(e) {
							return e
						})).then((function(t) {
							E({
								type: "SET_FIELD_ERROR",
								payload: {
									field: e,
									value: t[e]
								}
							}), E({
								type: "SET_ISVALIDATING",
								payload: !1
							})
						}))) : Promise.resolve()
					})),
					x = Object(n.useCallback)((function(e, t) {
						var r = t.validate;
						O.current[e] = {
							validate: r
						}
					}), []),
					D = Object(n.useCallback)((function(e) {
						delete O.current[e]
					}), []),
					U = Jn((function(e, t) {
						return E({
							type: "SET_TOUCHED",
							payload: e
						}), (void 0 === t ? i : t) ? I(S.values) : Promise.resolve()
					})),
					L = Object(n.useCallback)((function(e) {
						E({
							type: "SET_ERRORS",
							payload: e
						})
					}), []),
					B = Jn((function(e, t) {
						return E({
							type: "SET_VALUES",
							payload: e
						}), (void 0 === t ? r : t) ? I(e) : Promise.resolve()
					})),
					V = Object(n.useCallback)((function(e, t) {
						E({
							type: "SET_FIELD_ERROR",
							payload: {
								field: e,
								value: t
							}
						})
					}), []),
					N = Jn((function(e, t, n) {
						return E({
							type: "SET_FIELD_VALUE",
							payload: {
								field: e,
								value: t
							}
						}), (void 0 === n ? r : n) ? I(Un(S.values, e, t)) : Promise.resolve()
					})),
					z = Object(n.useCallback)((function(e, t) {
						var r, n = t,
							o = e;
						if (!Pn(e)) {
							e.persist && e.persist();
							var a = e.target ? e.target : e.currentTarget,
								i = a.type,
								u = a.name,
								c = a.id,
								l = a.value,
								s = a.checked,
								f = (a.outerHTML, a.options),
								d = a.multiple;
							n = t || (u || c), o = /number|range/.test(i) ? (r = parseFloat(l), isNaN(r) ? "" : r) : /checkbox/.test(i) ? function(e, t, r) {
								if ("boolean" == typeof e) return Boolean(t);
								var n = [],
									o = !1,
									a = -1;
								if (Array.isArray(e)) n = e, a = e.indexOf(r), o = a >= 0;
								else if (!r || "true" == r || "false" == r) return Boolean(t);
								if (t && r && !o) return n.concat(r);
								if (!o) return n;
								return n.slice(0, a).concat(n.slice(a + 1))
							}(Dn(S.values, n), s, l) : d ? function(e) {
								return Array.from(e).filter((function(e) {
									return e.selected
								})).map((function(e) {
									return e.value
								}))
							}(f) : l
						}
						n && N(n, o)
					}), [N, S.values]),
					G = Jn((function(e) {
						if (Pn(e)) return function(t) {
							return z(t, e)
						};
						z(e)
					})),
					$ = Jn((function(e, t, r) {
						return void 0 === t && (t = !0), E({
							type: "SET_FIELD_TOUCHED",
							payload: {
								field: e,
								value: t
							}
						}), (void 0 === r ? i : r) ? I(S.values) : Promise.resolve()
					})),
					W = Object(n.useCallback)((function(e, t) {
						e.persist && e.persist();
						var r = e.target,
							n = r.name,
							o = r.id,
							a = (r.outerHTML, t || (n || o));
						$(a, !0)
					}), [$]),
					H = Jn((function(e) {
						if (Pn(e)) return function(t) {
							return W(t, e)
						};
						W(e)
					})),
					q = Object(n.useCallback)((function(e) {
						In(e) ? E({
							type: "SET_FORMIK_STATE",
							payload: e
						}) : E({
							type: "SET_FORMIK_STATE",
							payload: function() {
								return e
							}
						})
					}), []),
					K = Object(n.useCallback)((function(e) {
						E({
							type: "SET_STATUS",
							payload: e
						})
					}), []),
					Y = Object(n.useCallback)((function(e) {
						E({
							type: "SET_ISSUBMITTING",
							payload: e
						})
					}), []),
					J = Jn((function() {
						return E({
							type: "SUBMIT_ATTEMPT"
						}), R().then((function(e) {
							var t = e instanceof Error;
							if (!t && 0 === Object.keys(e).length) {
								var r;
								try {
									if (void 0 === (r = Z())) return
								} catch (n) {
									throw n
								}
								return Promise.resolve(r).then((function(e) {
									return j.current && E({
										type: "SUBMIT_SUCCESS"
									}), e
								})).catch((function(e) {
									if (j.current) throw E({
										type: "SUBMIT_FAILURE"
									}), e
								}))
							}
							if (j.current && (E({
									type: "SUBMIT_FAILURE"
								}), t)) throw e
						}))
					})),
					Q = Jn((function(e) {
						e && e.preventDefault && In(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && In(e.stopPropagation) && e.stopPropagation(), J().catch((function(e) {
							console.warn("Warning: An unhandled error was caught from submitForm()", e)
						}))
					})),
					X = {
						resetForm: C,
						validateForm: R,
						validateField: P,
						setErrors: L,
						setFieldError: V,
						setFieldTouched: $,
						setFieldValue: N,
						setStatus: K,
						setSubmitting: Y,
						setTouched: U,
						setValues: B,
						setFormikState: q,
						submitForm: J
					},
					Z = Jn((function() {
						return p(S.values, X)
					})),
					ee = Jn((function(e) {
						e && e.preventDefault && In(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && In(e.stopPropagation) && e.stopPropagation(), C()
					})),
					te = Object(n.useCallback)((function(e) {
						return {
							value: Dn(S.values, e),
							error: Dn(S.errors, e),
							touched: !!Dn(S.touched, e),
							initialValue: Dn(h.current, e),
							initialTouched: !!Dn(m.current, e),
							initialError: Dn(y.current, e)
						}
					}), [S.errors, S.touched, S.values]),
					re = Object(n.useCallback)((function(e) {
						return {
							setValue: function(t, r) {
								return N(e, t, r)
							},
							setTouched: function(t, r) {
								return $(e, t, r)
							},
							setError: function(t) {
								return V(e, t)
							}
						}
					}), [N, $, V]),
					ne = Object(n.useCallback)((function(e) {
						var t = Rn(e),
							r = t ? e.name : e,
							n = Dn(S.values, r),
							o = {
								name: r,
								value: n,
								onChange: G,
								onBlur: H
							};
						if (t) {
							var a = e.type,
								i = e.value,
								u = e.as,
								c = e.multiple;
							"checkbox" === a ? void 0 === i ? o.checked = !!n : (o.checked = !(!Array.isArray(n) || !~n.indexOf(i)), o.value = i) : "radio" === a ? (o.checked = n === i, o.value = i) : "select" === u && c && (o.value = o.value || [], o.multiple = !0)
						}
						return o
					}), [H, G, S.values]),
					oe = Object(n.useMemo)((function() {
						return !a()(h.current, S.values)
					}), [h.current, S.values]),
					ae = Object(n.useMemo)((function() {
						return void 0 !== l ? oe ? S.errors && 0 === Object.keys(S.errors).length : !1 !== l && In(l) ? l(b) : l : S.errors && 0 === Object.keys(S.errors).length
					}), [l, oe, S.errors, b]);
				return wn({}, S, {
					initialValues: h.current,
					initialErrors: y.current,
					initialTouched: m.current,
					initialStatus: _.current,
					handleBlur: H,
					handleChange: G,
					handleReset: ee,
					handleSubmit: Q,
					resetForm: C,
					setErrors: L,
					setFormikState: q,
					setFieldTouched: $,
					setFieldValue: N,
					setFieldError: V,
					setStatus: K,
					setSubmitting: Y,
					setTouched: U,
					setValues: B,
					submitForm: J,
					validateForm: R,
					validateField: P,
					isValid: ae,
					dirty: oe,
					unregisterField: D,
					registerField: x,
					getFieldProps: ne,
					getFieldMeta: te,
					getFieldHelpers: re,
					validateOnBlur: i,
					validateOnChange: r,
					validateOnMount: c
				})
			}

			function qn(e) {
				var t = Hn(e),
					r = e.component,
					o = e.children,
					a = e.render,
					i = e.innerRef;
				return Object(n.useImperativeHandle)(i, (function() {
					return t
				})), Object(n.createElement)(Vn, {
					value: t
				}, r ? Object(n.createElement)(r, t) : a ? a(t) : o ? In(o) ? o(t) : Mn(o) ? null : n.Children.only(o) : null)
			}

			function Kn(e, t, r) {
				var n = e.slice();
				return t.forEach((function(t, o) {
					if (void 0 === n[o]) {
						var a = !1 !== r.clone && r.isMergeableObject(t);
						n[o] = a ? f(Array.isArray(t) ? [] : {}, t, r) : t
					} else r.isMergeableObject(t) ? n[o] = f(e[o], t, r) : -1 === e.indexOf(t) && n.push(t)
				})), n
			}
			var Yn = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? n.useLayoutEffect : n.useEffect;

			function Jn(e) {
				var t = Object(n.useRef)(e);
				return Yn((function() {
					t.current = e
				})), Object(n.useCallback)((function() {
					for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
					return t.current.apply(void 0, r)
				}), [])
			}

			function Qn(e) {
				var t = e.validate,
					r = e.name,
					o = e.render,
					a = e.children,
					i = e.as,
					u = e.component,
					c = An(e, ["validate", "name", "render", "children", "as", "component"]),
					l = An(zn(), ["validate", "validationSchema"]);
				var s = l.registerField,
					f = l.unregisterField;
				Object(n.useEffect)((function() {
					return s(r, {
							validate: t
						}),
						function() {
							f(r)
						}
				}), [s, f, r, t]);
				var d = l.getFieldProps(wn({
						name: r
					}, c)),
					p = l.getFieldMeta(r),
					v = {
						field: d,
						form: l
					};
				if (o) return o(wn({}, v, {
					meta: p
				}));
				if (In(a)) return a(wn({}, v, {
					meta: p
				}));
				if (u) {
					if ("string" == typeof u) {
						var b = c.innerRef,
							h = An(c, ["innerRef"]);
						return Object(n.createElement)(u, wn({
							ref: b
						}, d, {}, h), a)
					}
					return Object(n.createElement)(u, wn({
						field: d,
						form: l
					}, c), a)
				}
				var y = i || "input";
				if ("string" == typeof y) {
					var m = c.innerRef,
						_ = An(c, ["innerRef"]);
					return Object(n.createElement)(y, wn({
						ref: m
					}, d, {}, _), a)
				}
				return Object(n.createElement)(y, wn({}, d, {}, c), a)
			}
			var Xn = Object(n.forwardRef)((function(e, t) {
				var r = e.action,
					o = An(e, ["action"]),
					a = r || "#",
					i = zn(),
					u = i.handleReset,
					c = i.handleSubmit;
				return Object(n.createElement)("form", Object.assign({
					onSubmit: c,
					ref: t,
					onReset: u,
					action: a
				}, o))
			}));

			function Zn(e) {
				var t = function(t) {
						return Object(n.createElement)(Nn, null, (function(r) {
							return r || Object(mn.default)(!1), Object(n.createElement)(e, Object.assign({}, t, {
								formik: r
							}))
						}))
					},
					r = e.displayName || e.name || e.constructor && e.constructor.name || "Component";
				return t.WrappedComponent = e, t.displayName = "FormikConnect(" + r + ")", On()(t, e)
			}
			Xn.displayName = "Form";
			var eo = function(e, t, r) {
					var n = oo(e),
						o = n[t];
					return n.splice(t, 1), n.splice(r, 0, o), n
				},
				to = function(e, t, r) {
					var n = oo(e),
						o = n[t];
					return n[t] = n[r], n[r] = o, n
				},
				ro = function(e, t, r) {
					var n = oo(e);
					return n.splice(t, 0, r), n
				},
				no = function(e, t, r) {
					var n = oo(e);
					return n[t] = r, n
				},
				oo = function(e) {
					if (e) {
						if (Array.isArray(e)) return [].concat(e);
						var t = Object.keys(e).map((function(e) {
							return parseInt(e)
						})).reduce((function(e, t) {
							return t > e ? t : e
						}), 0);
						return Array.from(wn({}, e, {
							length: t + 1
						}))
					}
					return []
				},
				ao = function(e) {
					function t(t) {
						var r;
						return (r = e.call(this, t) || this).updateArrayField = function(e, t, n) {
							var o = r.props,
								a = o.name;
							(0, o.formik.setFormikState)((function(r) {
								var o = "function" == typeof n ? n : e,
									i = "function" == typeof t ? t : e,
									u = Un(r.values, a, e(Dn(r.values, a))),
									c = n ? o(Dn(r.errors, a)) : void 0,
									l = t ? i(Dn(r.touched, a)) : void 0;
								return Fn(c) && (c = void 0), Fn(l) && (l = void 0), wn({}, r, {
									values: u,
									errors: n ? Un(r.errors, a, c) : r.errors,
									touched: t ? Un(r.touched, a, l) : r.touched
								})
							}))
						}, r.push = function(e) {
							return r.updateArrayField((function(t) {
								return [].concat(oo(t), [En(e)])
							}), !1, !1)
						}, r.handlePush = function(e) {
							return function() {
								return r.push(e)
							}
						}, r.swap = function(e, t) {
							return r.updateArrayField((function(r) {
								return to(r, e, t)
							}), !0, !0)
						}, r.handleSwap = function(e, t) {
							return function() {
								return r.swap(e, t)
							}
						}, r.move = function(e, t) {
							return r.updateArrayField((function(r) {
								return eo(r, e, t)
							}), !0, !0)
						}, r.handleMove = function(e, t) {
							return function() {
								return r.move(e, t)
							}
						}, r.insert = function(e, t) {
							return r.updateArrayField((function(r) {
								return ro(r, e, t)
							}), (function(t) {
								return ro(t, e, null)
							}), (function(t) {
								return ro(t, e, null)
							}))
						}, r.handleInsert = function(e, t) {
							return function() {
								return r.insert(e, t)
							}
						}, r.replace = function(e, t) {
							return r.updateArrayField((function(r) {
								return no(r, e, t)
							}), !1, !1)
						}, r.handleReplace = function(e, t) {
							return function() {
								return r.replace(e, t)
							}
						}, r.unshift = function(e) {
							var t = -1;
							return r.updateArrayField((function(r) {
								var n = r ? [e].concat(r) : [e];
								return t < 0 && (t = n.length), n
							}), (function(e) {
								var r = e ? [null].concat(e) : [null];
								return t < 0 && (t = r.length), r
							}), (function(e) {
								var r = e ? [null].concat(e) : [null];
								return t < 0 && (t = r.length), r
							})), t
						}, r.handleUnshift = function(e) {
							return function() {
								return r.unshift(e)
							}
						}, r.handleRemove = function(e) {
							return function() {
								return r.remove(e)
							}
						}, r.handlePop = function() {
							return function() {
								return r.pop()
							}
						}, r.remove = r.remove.bind(kn(r)), r.pop = r.pop.bind(kn(r)), r
					}
					Tn(t, e);
					var r = t.prototype;
					return r.componentDidUpdate = function(e) {
						!a()(Dn(e.formik.values, e.name), Dn(this.props.formik.values, this.props.name)) && this.props.formik.validateOnChange && this.props.formik.validateForm(this.props.formik.values)
					}, r.remove = function(e) {
						var t;
						return this.updateArrayField((function(r) {
							var n = r ? oo(r) : [];
							return t || (t = n[e]), In(n.splice) && n.splice(e, 1), n
						}), !0, !0), t
					}, r.pop = function() {
						var e;
						return this.updateArrayField((function(t) {
							var r = t;
							return e || (e = r && r.pop && r.pop()), r
						}), !0, !0), e
					}, r.render = function() {
						var e = {
								push: this.push,
								pop: this.pop,
								swap: this.swap,
								move: this.move,
								insert: this.insert,
								replace: this.replace,
								unshift: this.unshift,
								remove: this.remove,
								handlePush: this.handlePush,
								handlePop: this.handlePop,
								handleSwap: this.handleSwap,
								handleMove: this.handleMove,
								handleInsert: this.handleInsert,
								handleReplace: this.handleReplace,
								handleUnshift: this.handleUnshift,
								handleRemove: this.handleRemove
							},
							t = this.props,
							r = t.component,
							o = t.render,
							a = t.children,
							i = t.name,
							u = wn({}, e, {
								form: An(t.formik, ["validate", "validationSchema"]),
								name: i
							});
						return r ? Object(n.createElement)(r, u) : o ? o(u) : a ? "function" == typeof a ? a(u) : Mn(a) ? null : n.Children.only(a) : null
					}, t
				}(n.Component);
			ao.defaultProps = {
				validateOnChange: !0
			};
			n.Component, n.Component
		},
		"./node_modules/lodash-es/_cloneBuffer.js": function(e, t, r) {
			"use strict";
			(function(e) {
				var n = r("./node_modules/lodash-es/_root.js"),
					o = "object" == typeof exports && exports && !exports.nodeType && exports,
					a = o && "object" == typeof e && e && !e.nodeType && e,
					i = a && a.exports === o ? n.a.Buffer : void 0,
					u = i ? i.allocUnsafe : void 0;
				t.a = function(e, t) {
					if (t) return e.slice();
					var r = e.length,
						n = u ? u(r) : new e.constructor(r);
					return e.copy(n), n
				}
			}).call(this, r("./node_modules/webpack/buildin/harmony-module.js")(e))
		},
		"./node_modules/lodash-es/_freeGlobal.js": function(e, t, r) {
			"use strict";
			(function(e) {
				var r = "object" == typeof e && e && e.Object === Object && e;
				t.a = r
			}).call(this, r("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/lodash-es/_nodeUtil.js": function(e, t, r) {
			"use strict";
			(function(e) {
				var n = r("./node_modules/lodash-es/_freeGlobal.js"),
					o = "object" == typeof exports && exports && !exports.nodeType && exports,
					a = o && "object" == typeof e && e && !e.nodeType && e,
					i = a && a.exports === o && n.a.process,
					u = function() {
						try {
							var e = a && a.require && a.require("util").types;
							return e || i && i.binding && i.binding("util")
						} catch (t) {}
					}();
				t.a = u
			}).call(this, r("./node_modules/webpack/buildin/harmony-module.js")(e))
		},
		"./node_modules/lodash-es/_root.js": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/lodash-es/_freeGlobal.js"),
				o = "object" == typeof self && self && self.Object === Object && self,
				a = n.a || o || Function("return this")();
			t.a = a
		},
		"./node_modules/lodash-es/isBuffer.js": function(e, t, r) {
			"use strict";
			(function(e) {
				var n = r("./node_modules/lodash-es/_root.js"),
					o = r("./node_modules/lodash-es/stubFalse.js"),
					a = "object" == typeof exports && exports && !exports.nodeType && exports,
					i = a && "object" == typeof e && e && !e.nodeType && e,
					u = i && i.exports === a ? n.a.Buffer : void 0,
					c = (u ? u.isBuffer : void 0) || o.a;
				t.a = c
			}).call(this, r("./node_modules/webpack/buildin/harmony-module.js")(e))
		},
		"./node_modules/lodash-es/stubFalse.js": function(e, t, r) {
			"use strict";
			t.a = function() {
				return !1
			}
		},
		"./node_modules/react-fast-compare/index.js": function(e, t, r) {
			"use strict";
			var n = Array.isArray,
				o = Object.keys,
				a = Object.prototype.hasOwnProperty,
				i = "undefined" != typeof Element;
			e.exports = function(e, t) {
				try {
					return function e(t, r) {
						if (t === r) return !0;
						if (t && r && "object" == typeof t && "object" == typeof r) {
							var u, c, l, s = n(t),
								f = n(r);
							if (s && f) {
								if ((c = t.length) != r.length) return !1;
								for (u = c; 0 != u--;)
									if (!e(t[u], r[u])) return !1;
								return !0
							}
							if (s != f) return !1;
							var d = t instanceof Date,
								p = r instanceof Date;
							if (d != p) return !1;
							if (d && p) return t.getTime() == r.getTime();
							var v = t instanceof RegExp,
								b = r instanceof RegExp;
							if (v != b) return !1;
							if (v && b) return t.toString() == r.toString();
							var h = o(t);
							if ((c = h.length) !== o(r).length) return !1;
							for (u = c; 0 != u--;)
								if (!a.call(r, h[u])) return !1;
							if (i && t instanceof Element && r instanceof Element) return t === r;
							for (u = c; 0 != u--;)
								if (!("_owner" === (l = h[u]) && t.$$typeof || e(t[l], r[l]))) return !1;
							return !0
						}
						return t != t && r != r
					}(e, t)
				} catch (r) {
					if (r.message && r.message.match(/stack|recursion/i) || -2146828260 === r.number) return console.warn("Warning: react-fast-compare does not handle circular references.", r.name, r.message), !1;
					throw r
				}
			}
		},
		"./node_modules/scheduler/cjs/scheduler.production.min.js": function(e, t, r) {
			"use strict";
			var n, o, a, i, u;
			if (Object.defineProperty(t, "__esModule", {
					value: !0
				}), "undefined" == typeof window || "function" != typeof MessageChannel) {
				var c = null,
					l = null,
					s = function() {
						if (null !== c) try {
							var e = t.unstable_now();
							c(!0, e), c = null
						} catch (r) {
							throw setTimeout(s, 0), r
						}
					},
					f = Date.now();
				t.unstable_now = function() {
					return Date.now() - f
				}, n = function(e) {
					null !== c ? setTimeout(n, 0, e) : (c = e, setTimeout(s, 0))
				}, o = function(e, t) {
					l = setTimeout(e, t)
				}, a = function() {
					clearTimeout(l)
				}, i = function() {
					return !1
				}, u = t.unstable_forceFrameRate = function() {}
			} else {
				var d = window.performance,
					p = window.Date,
					v = window.setTimeout,
					b = window.clearTimeout;
				if ("undefined" != typeof console) {
					var h = window.cancelAnimationFrame;
					"function" != typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" != typeof h && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")
				}
				if ("object" == typeof d && "function" == typeof d.now) t.unstable_now = function() {
					return d.now()
				};
				else {
					var y = p.now();
					t.unstable_now = function() {
						return p.now() - y
					}
				}
				var m = !1,
					_ = null,
					j = -1,
					O = 5,
					g = 0;
				i = function() {
					return t.unstable_now() >= g
				}, u = function() {}, t.unstable_forceFrameRate = function(e) {
					0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : O = 0 < e ? Math.floor(1e3 / e) : 5
				};
				var S = new MessageChannel,
					E = S.port2;
				S.port1.onmessage = function() {
					if (null !== _) {
						var e = t.unstable_now();
						g = e + O;
						try {
							_(!0, e) ? E.postMessage(null) : (m = !1, _ = null)
						} catch (r) {
							throw E.postMessage(null), r
						}
					} else m = !1
				}, n = function(e) {
					_ = e, m || (m = !0, E.postMessage(null))
				}, o = function(e, r) {
					j = v((function() {
						e(t.unstable_now())
					}), r)
				}, a = function() {
					b(j), j = -1
				}
			}

			function w(e, t) {
				var r = e.length;
				e.push(t);
				e: for (;;) {
					var n = Math.floor((r - 1) / 2),
						o = e[n];
					if (!(void 0 !== o && 0 < k(o, t))) break e;
					e[n] = t, e[r] = o, r = n
				}
			}

			function T(e) {
				return void 0 === (e = e[0]) ? null : e
			}

			function A(e) {
				var t = e[0];
				if (void 0 !== t) {
					var r = e.pop();
					if (r !== t) {
						e[0] = r;
						e: for (var n = 0, o = e.length; n < o;) {
							var a = 2 * (n + 1) - 1,
								i = e[a],
								u = a + 1,
								c = e[u];
							if (void 0 !== i && 0 > k(i, r)) void 0 !== c && 0 > k(c, i) ? (e[n] = c, e[u] = r, n = u) : (e[n] = i, e[a] = r, n = a);
							else {
								if (!(void 0 !== c && 0 > k(c, r))) break e;
								e[n] = c, e[u] = r, n = u
							}
						}
					}
					return t
				}
				return null
			}

			function k(e, t) {
				var r = e.sortIndex - t.sortIndex;
				return 0 !== r ? r : e.id - t.id
			}
			var F = [],
				I = [],
				R = 1,
				C = null,
				P = 3,
				M = !1,
				x = !1,
				D = !1;

			function U(e) {
				for (var t = T(I); null !== t;) {
					if (null === t.callback) A(I);
					else {
						if (!(t.startTime <= e)) break;
						A(I), t.sortIndex = t.expirationTime, w(F, t)
					}
					t = T(I)
				}
			}

			function L(e) {
				if (D = !1, U(e), !x)
					if (null !== T(F)) x = !0, n(B);
					else {
						var t = T(I);
						null !== t && o(L, t.startTime - e)
					}
			}

			function B(e, r) {
				x = !1, D && (D = !1, a()), M = !0;
				var n = P;
				try {
					for (U(r), C = T(F); null !== C && (!(C.expirationTime > r) || e && !i());) {
						var u = C.callback;
						if (null !== u) {
							C.callback = null, P = C.priorityLevel;
							var c = u(C.expirationTime <= r);
							r = t.unstable_now(), "function" == typeof c ? C.callback = c : C === T(F) && A(F), U(r)
						} else A(F);
						C = T(F)
					}
					if (null !== C) var l = !0;
					else {
						var s = T(I);
						null !== s && o(L, s.startTime - r), l = !1
					}
					return l
				} finally {
					C = null, P = n, M = !1
				}
			}

			function V(e) {
				switch (e) {
					case 1:
						return -1;
					case 2:
						return 250;
					case 5:
						return 1073741823;
					case 4:
						return 1e4;
					default:
						return 5e3
				}
			}
			var N = u;
			t.unstable_ImmediatePriority = 1, t.unstable_UserBlockingPriority = 2, t.unstable_NormalPriority = 3, t.unstable_IdlePriority = 5, t.unstable_LowPriority = 4, t.unstable_runWithPriority = function(e, t) {
				switch (e) {
					case 1:
					case 2:
					case 3:
					case 4:
					case 5:
						break;
					default:
						e = 3
				}
				var r = P;
				P = e;
				try {
					return t()
				} finally {
					P = r
				}
			}, t.unstable_next = function(e) {
				switch (P) {
					case 1:
					case 2:
					case 3:
						var t = 3;
						break;
					default:
						t = P
				}
				var r = P;
				P = t;
				try {
					return e()
				} finally {
					P = r
				}
			}, t.unstable_scheduleCallback = function(e, r, i) {
				var u = t.unstable_now();
				if ("object" == typeof i && null !== i) {
					var c = i.delay;
					c = "number" == typeof c && 0 < c ? u + c : u, i = "number" == typeof i.timeout ? i.timeout : V(e)
				} else i = V(e), c = u;
				return e = {
					id: R++,
					callback: r,
					priorityLevel: e,
					startTime: c,
					expirationTime: i = c + i,
					sortIndex: -1
				}, c > u ? (e.sortIndex = c, w(I, e), null === T(F) && e === T(I) && (D ? a() : D = !0, o(L, c - u))) : (e.sortIndex = i, w(F, e), x || M || (x = !0, n(B))), e
			}, t.unstable_cancelCallback = function(e) {
				e.callback = null
			}, t.unstable_wrapCallback = function(e) {
				var t = P;
				return function() {
					var r = P;
					P = t;
					try {
						return e.apply(this, arguments)
					} finally {
						P = r
					}
				}
			}, t.unstable_getCurrentPriorityLevel = function() {
				return P
			}, t.unstable_shouldYield = function() {
				var e = t.unstable_now();
				U(e);
				var r = T(F);
				return r !== C && null !== C && null !== r && null !== r.callback && r.startTime <= e && r.expirationTime < C.expirationTime || i()
			}, t.unstable_requestPaint = N, t.unstable_continueExecution = function() {
				x || M || (x = !0, n(B))
			}, t.unstable_pauseExecution = function() {}, t.unstable_getFirstCallbackNode = function() {
				return T(F)
			}, t.unstable_Profiling = null
		},
		"./node_modules/scheduler/index.js": function(e, t, r) {
			"use strict";
			e.exports = r("./node_modules/scheduler/cjs/scheduler.production.min.js")
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~reddit-components-FormBuilder.cf9b3b949c14cd5600ef.js.map