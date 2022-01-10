// https://www.redditstatic.com/desktop2x/SubredditPremiumBadgeManagement.b229bcd7b9e3798ada98.js
// Retrieved at 1/10/2022, 3:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditPremiumBadgeManagement"], {
		"./node_modules/lodash/_LazyWrapper.js": function(e, t, a) {
			var s = a("./node_modules/lodash/_baseCreate.js"),
				n = a("./node_modules/lodash/_baseLodash.js"),
				r = 4294967295;

			function d(e) {
				this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = r, this.__views__ = []
			}
			d.prototype = s(n.prototype), d.prototype.constructor = d, e.exports = d
		},
		"./node_modules/lodash/_LodashWrapper.js": function(e, t, a) {
			var s = a("./node_modules/lodash/_baseCreate.js"),
				n = a("./node_modules/lodash/_baseLodash.js");

			function r(e, t) {
				this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
			}
			r.prototype = s(n.prototype), r.prototype.constructor = r, e.exports = r
		},
		"./node_modules/lodash/_baseLodash.js": function(e, t) {
			e.exports = function() {}
		},
		"./node_modules/lodash/_baseSetData.js": function(e, t, a) {
			var s = a("./node_modules/lodash/identity.js"),
				n = a("./node_modules/lodash/_metaMap.js"),
				r = n ? function(e, t) {
					return n.set(e, t), e
				} : s;
			e.exports = r
		},
		"./node_modules/lodash/_composeArgs.js": function(e, t) {
			var a = Math.max;
			e.exports = function(e, t, s, n) {
				for (var r = -1, d = e.length, o = s.length, c = -1, i = t.length, l = a(d - o, 0), m = Array(i + l), u = !n; ++c < i;) m[c] = t[c];
				for (; ++r < o;)(u || r < d) && (m[s[r]] = e[r]);
				for (; l--;) m[c++] = e[r++];
				return m
			}
		},
		"./node_modules/lodash/_composeArgsRight.js": function(e, t) {
			var a = Math.max;
			e.exports = function(e, t, s, n) {
				for (var r = -1, d = e.length, o = -1, c = s.length, i = -1, l = t.length, m = a(d - c, 0), u = Array(m + l), p = !n; ++r < m;) u[r] = e[r];
				for (var b = r; ++i < l;) u[b + i] = t[i];
				for (; ++o < c;)(p || r < d) && (u[b + s[o]] = e[r++]);
				return u
			}
		},
		"./node_modules/lodash/_countHolders.js": function(e, t) {
			e.exports = function(e, t) {
				for (var a = e.length, s = 0; a--;) e[a] === t && ++s;
				return s
			}
		},
		"./node_modules/lodash/_createBind.js": function(e, t, a) {
			var s = a("./node_modules/lodash/_createCtor.js"),
				n = a("./node_modules/lodash/_root.js"),
				r = 1;
			e.exports = function(e, t, a) {
				var d = t & r,
					o = s(e);
				return function t() {
					return (this && this !== n && this instanceof t ? o : e).apply(d ? a : this, arguments)
				}
			}
		},
		"./node_modules/lodash/_createCtor.js": function(e, t, a) {
			var s = a("./node_modules/lodash/_baseCreate.js"),
				n = a("./node_modules/lodash/isObject.js");
			e.exports = function(e) {
				return function() {
					var t = arguments;
					switch (t.length) {
						case 0:
							return new e;
						case 1:
							return new e(t[0]);
						case 2:
							return new e(t[0], t[1]);
						case 3:
							return new e(t[0], t[1], t[2]);
						case 4:
							return new e(t[0], t[1], t[2], t[3]);
						case 5:
							return new e(t[0], t[1], t[2], t[3], t[4]);
						case 6:
							return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
						case 7:
							return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
					}
					var a = s(e.prototype),
						r = e.apply(a, t);
					return n(r) ? r : a
				}
			}
		},
		"./node_modules/lodash/_createCurry.js": function(e, t, a) {
			var s = a("./node_modules/lodash/_apply.js"),
				n = a("./node_modules/lodash/_createCtor.js"),
				r = a("./node_modules/lodash/_createHybrid.js"),
				d = a("./node_modules/lodash/_createRecurry.js"),
				o = a("./node_modules/lodash/_getHolder.js"),
				c = a("./node_modules/lodash/_replaceHolders.js"),
				i = a("./node_modules/lodash/_root.js");
			e.exports = function(e, t, a) {
				var l = n(e);
				return function n() {
					for (var m = arguments.length, u = Array(m), p = m, b = o(n); p--;) u[p] = arguments[p];
					var g = m < 3 && u[0] !== b && u[m - 1] !== b ? [] : c(u, b);
					return (m -= g.length) < a ? d(e, t, r, n.placeholder, void 0, u, g, void 0, void 0, a - m) : s(this && this !== i && this instanceof n ? l : e, this, u)
				}
			}
		},
		"./node_modules/lodash/_createHybrid.js": function(e, t, a) {
			var s = a("./node_modules/lodash/_composeArgs.js"),
				n = a("./node_modules/lodash/_composeArgsRight.js"),
				r = a("./node_modules/lodash/_countHolders.js"),
				d = a("./node_modules/lodash/_createCtor.js"),
				o = a("./node_modules/lodash/_createRecurry.js"),
				c = a("./node_modules/lodash/_getHolder.js"),
				i = a("./node_modules/lodash/_reorder.js"),
				l = a("./node_modules/lodash/_replaceHolders.js"),
				m = a("./node_modules/lodash/_root.js"),
				u = 1,
				p = 2,
				b = 8,
				g = 16,
				h = 128,
				_ = 512;
			e.exports = function e(t, a, f, y, v, j, B, x, E, w) {
				var O = a & h,
					C = a & u,
					N = a & p,
					S = a & (b | g),
					k = a & _,
					M = N ? void 0 : d(t);
				return function u() {
					for (var p = arguments.length, b = Array(p), g = p; g--;) b[g] = arguments[g];
					if (S) var h = c(u),
						_ = r(b, h);
					if (y && (b = s(b, y, v, S)), j && (b = n(b, j, B, S)), p -= _, S && p < w) {
						var P = l(b, h);
						return o(t, a, e, u.placeholder, f, b, P, x, E, w - p)
					}
					var L = C ? f : this,
						I = N ? L[t] : t;
					return p = b.length, x ? b = i(b, x) : k && p > 1 && b.reverse(), O && E < p && (b.length = E), this && this !== m && this instanceof u && (I = M || d(I)), I.apply(L, b)
				}
			}
		},
		"./node_modules/lodash/_createPartial.js": function(e, t, a) {
			var s = a("./node_modules/lodash/_apply.js"),
				n = a("./node_modules/lodash/_createCtor.js"),
				r = a("./node_modules/lodash/_root.js"),
				d = 1;
			e.exports = function(e, t, a, o) {
				var c = t & d,
					i = n(e);
				return function t() {
					for (var n = -1, d = arguments.length, l = -1, m = o.length, u = Array(m + d), p = this && this !== r && this instanceof t ? i : e; ++l < m;) u[l] = o[l];
					for (; d--;) u[l++] = arguments[++n];
					return s(p, c ? a : this, u)
				}
			}
		},
		"./node_modules/lodash/_createRecurry.js": function(e, t, a) {
			var s = a("./node_modules/lodash/_isLaziable.js"),
				n = a("./node_modules/lodash/_setData.js"),
				r = a("./node_modules/lodash/_setWrapToString.js"),
				d = 1,
				o = 2,
				c = 4,
				i = 8,
				l = 32,
				m = 64;
			e.exports = function(e, t, a, u, p, b, g, h, _, f) {
				var y = t & i;
				t |= y ? l : m, (t &= ~(y ? m : l)) & c || (t &= ~(d | o));
				var v = [e, t, p, y ? b : void 0, y ? g : void 0, y ? void 0 : b, y ? void 0 : g, h, _, f],
					j = a.apply(void 0, v);
				return s(e) && n(j, v), j.placeholder = u, r(j, e, t)
			}
		},
		"./node_modules/lodash/_createWrap.js": function(e, t, a) {
			var s = a("./node_modules/lodash/_baseSetData.js"),
				n = a("./node_modules/lodash/_createBind.js"),
				r = a("./node_modules/lodash/_createCurry.js"),
				d = a("./node_modules/lodash/_createHybrid.js"),
				o = a("./node_modules/lodash/_createPartial.js"),
				c = a("./node_modules/lodash/_getData.js"),
				i = a("./node_modules/lodash/_mergeData.js"),
				l = a("./node_modules/lodash/_setData.js"),
				m = a("./node_modules/lodash/_setWrapToString.js"),
				u = a("./node_modules/lodash/toInteger.js"),
				p = "Expected a function",
				b = 1,
				g = 2,
				h = 8,
				_ = 16,
				f = 32,
				y = 64,
				v = Math.max;
			e.exports = function(e, t, a, j, B, x, E, w) {
				var O = t & g;
				if (!O && "function" != typeof e) throw new TypeError(p);
				var C = j ? j.length : 0;
				if (C || (t &= ~(f | y), j = B = void 0), E = void 0 === E ? E : v(u(E), 0), w = void 0 === w ? w : u(w), C -= B ? B.length : 0, t & y) {
					var N = j,
						S = B;
					j = B = void 0
				}
				var k = O ? void 0 : c(e),
					M = [e, t, a, j, B, N, S, x, E, w];
				if (k && i(M, k), e = M[0], t = M[1], a = M[2], j = M[3], B = M[4], !(w = M[9] = void 0 === M[9] ? O ? 0 : e.length : v(M[9] - C, 0)) && t & (h | _) && (t &= ~(h | _)), t && t != b) P = t == h || t == _ ? r(e, t, w) : t != f && t != (b | f) || B.length ? d.apply(void 0, M) : o(e, t, a, j);
				else var P = n(e, t, a);
				return m((k ? s : l)(P, M), e, t)
			}
		},
		"./node_modules/lodash/_getData.js": function(e, t, a) {
			var s = a("./node_modules/lodash/_metaMap.js"),
				n = a("./node_modules/lodash/noop.js"),
				r = s ? function(e) {
					return s.get(e)
				} : n;
			e.exports = r
		},
		"./node_modules/lodash/_getFuncName.js": function(e, t, a) {
			var s = a("./node_modules/lodash/_realNames.js"),
				n = Object.prototype.hasOwnProperty;
			e.exports = function(e) {
				for (var t = e.name + "", a = s[t], r = n.call(s, t) ? a.length : 0; r--;) {
					var d = a[r],
						o = d.func;
					if (null == o || o == e) return d.name
				}
				return t
			}
		},
		"./node_modules/lodash/_getHolder.js": function(e, t) {
			e.exports = function(e) {
				return e.placeholder
			}
		},
		"./node_modules/lodash/_getWrapDetails.js": function(e, t) {
			var a = /\{\n\/\* \[wrapped with (.+)\] \*/,
				s = /,? & /;
			e.exports = function(e) {
				var t = e.match(a);
				return t ? t[1].split(s) : []
			}
		},
		"./node_modules/lodash/_insertWrapDetails.js": function(e, t) {
			var a = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
			e.exports = function(e, t) {
				var s = t.length;
				if (!s) return e;
				var n = s - 1;
				return t[n] = (s > 1 ? "& " : "") + t[n], t = t.join(s > 2 ? ", " : " "), e.replace(a, "{\n/* [wrapped with " + t + "] */\n")
			}
		},
		"./node_modules/lodash/_isLaziable.js": function(e, t, a) {
			var s = a("./node_modules/lodash/_LazyWrapper.js"),
				n = a("./node_modules/lodash/_getData.js"),
				r = a("./node_modules/lodash/_getFuncName.js"),
				d = a("./node_modules/lodash/wrapperLodash.js");
			e.exports = function(e) {
				var t = r(e),
					a = d[t];
				if ("function" != typeof a || !(t in s.prototype)) return !1;
				if (e === a) return !0;
				var o = n(a);
				return !!o && e === o[0]
			}
		},
		"./node_modules/lodash/_mergeData.js": function(e, t, a) {
			var s = a("./node_modules/lodash/_composeArgs.js"),
				n = a("./node_modules/lodash/_composeArgsRight.js"),
				r = a("./node_modules/lodash/_replaceHolders.js"),
				d = "__lodash_placeholder__",
				o = 1,
				c = 2,
				i = 4,
				l = 8,
				m = 128,
				u = 256,
				p = Math.min;
			e.exports = function(e, t) {
				var a = e[1],
					b = t[1],
					g = a | b,
					h = g < (o | c | m),
					_ = b == m && a == l || b == m && a == u && e[7].length <= t[8] || b == (m | u) && t[7].length <= t[8] && a == l;
				if (!h && !_) return e;
				b & o && (e[2] = t[2], g |= a & o ? 0 : i);
				var f = t[3];
				if (f) {
					var y = e[3];
					e[3] = y ? s(y, f, t[4]) : f, e[4] = y ? r(e[3], d) : t[4]
				}
				return (f = t[5]) && (y = e[5], e[5] = y ? n(y, f, t[6]) : f, e[6] = y ? r(e[5], d) : t[6]), (f = t[7]) && (e[7] = f), b & m && (e[8] = null == e[8] ? t[8] : p(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = g, e
			}
		},
		"./node_modules/lodash/_metaMap.js": function(e, t, a) {
			var s = a("./node_modules/lodash/_WeakMap.js"),
				n = s && new s;
			e.exports = n
		},
		"./node_modules/lodash/_realNames.js": function(e, t) {
			e.exports = {}
		},
		"./node_modules/lodash/_reorder.js": function(e, t, a) {
			var s = a("./node_modules/lodash/_copyArray.js"),
				n = a("./node_modules/lodash/_isIndex.js"),
				r = Math.min;
			e.exports = function(e, t) {
				for (var a = e.length, d = r(t.length, a), o = s(e); d--;) {
					var c = t[d];
					e[d] = n(c, a) ? o[c] : void 0
				}
				return e
			}
		},
		"./node_modules/lodash/_replaceHolders.js": function(e, t) {
			var a = "__lodash_placeholder__";
			e.exports = function(e, t) {
				for (var s = -1, n = e.length, r = 0, d = []; ++s < n;) {
					var o = e[s];
					o !== t && o !== a || (e[s] = a, d[r++] = s)
				}
				return d
			}
		},
		"./node_modules/lodash/_setData.js": function(e, t, a) {
			var s = a("./node_modules/lodash/_baseSetData.js"),
				n = a("./node_modules/lodash/_shortOut.js")(s);
			e.exports = n
		},
		"./node_modules/lodash/_setWrapToString.js": function(e, t, a) {
			var s = a("./node_modules/lodash/_getWrapDetails.js"),
				n = a("./node_modules/lodash/_insertWrapDetails.js"),
				r = a("./node_modules/lodash/_setToString.js"),
				d = a("./node_modules/lodash/_updateWrapDetails.js");
			e.exports = function(e, t, a) {
				var o = t + "";
				return r(e, n(o, d(s(o), a)))
			}
		},
		"./node_modules/lodash/_updateWrapDetails.js": function(e, t, a) {
			var s = a("./node_modules/lodash/_arrayEach.js"),
				n = a("./node_modules/lodash/_arrayIncludes.js"),
				r = [
					["ary", 128],
					["bind", 1],
					["bindKey", 2],
					["curry", 8],
					["curryRight", 16],
					["flip", 512],
					["partial", 32],
					["partialRight", 64],
					["rearg", 256]
				];
			e.exports = function(e, t) {
				return s(r, (function(a) {
					var s = "_." + a[0];
					t & a[1] && !n(e, s) && e.push(s)
				})), e.sort()
			}
		},
		"./node_modules/lodash/_wrapperClone.js": function(e, t, a) {
			var s = a("./node_modules/lodash/_LazyWrapper.js"),
				n = a("./node_modules/lodash/_LodashWrapper.js"),
				r = a("./node_modules/lodash/_copyArray.js");
			e.exports = function(e) {
				if (e instanceof s) return e.clone();
				var t = new n(e.__wrapped__, e.__chain__);
				return t.__actions__ = r(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
			}
		},
		"./node_modules/lodash/curry.js": function(e, t, a) {
			var s = a("./node_modules/lodash/_createWrap.js"),
				n = 8;

			function r(e, t, a) {
				var d = s(e, n, void 0, void 0, void 0, void 0, void 0, t = a ? void 0 : t);
				return d.placeholder = r.placeholder, d
			}
			r.placeholder = {}, e.exports = r
		},
		"./node_modules/lodash/flattenDeep.js": function(e, t, a) {
			var s = a("./node_modules/lodash/_baseFlatten.js"),
				n = 1 / 0;
			e.exports = function(e) {
				return (null == e ? 0 : e.length) ? s(e, n) : []
			}
		},
		"./node_modules/lodash/wrapperLodash.js": function(e, t, a) {
			var s = a("./node_modules/lodash/_LazyWrapper.js"),
				n = a("./node_modules/lodash/_LodashWrapper.js"),
				r = a("./node_modules/lodash/_baseLodash.js"),
				d = a("./node_modules/lodash/isArray.js"),
				o = a("./node_modules/lodash/isObjectLike.js"),
				c = a("./node_modules/lodash/_wrapperClone.js"),
				i = Object.prototype.hasOwnProperty;

			function l(e) {
				if (o(e) && !d(e) && !(e instanceof s)) {
					if (e instanceof n) return e;
					if (i.call(e, "__wrapped__")) return c(e)
				}
				return new n(e)
			}
			l.prototype = r.prototype, l.prototype.constructor = l, e.exports = l
		},
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			}));
			var s = a("./src/lib/currency/cleanNumber/index.ts");

			function n(e, t) {
				const a = Object(s.a)(e),
					n = parseInt(a) / 100;
				return Math.floor(n) !== n || t ? n.toFixed(2) : String(n)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, a) {
			"use strict";

			function s(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
			a.d(t, "a", (function() {
				return s
			}))
		},
		"./src/lib/currency/currencies.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return s
			})), a.d(t, "c", (function() {
				return r
			})), a.d(t, "d", (function() {
				return d
			})), a.d(t, "a", (function() {
				return o
			})), a.d(t, "f", (function() {
				return c
			})), a.d(t, "g", (function() {
				return i
			})), a.d(t, "e", (function() {
				return l
			}));
			var s, n = a("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.Real = "real", e.Crypto = "crypto", e.Reddit = "reddit"
			}(s || (s = {}));
			const r = "USD",
				d = "ETH",
				o = "COINS",
				c = [d, "BTC"],
				i = [o, "SUBREDDIT_POINTS", "GAME_TOKENS"],
				l = {
					COINS: () => n.fbt._("Coins", null, {
						hk: "1T2Y4p"
					}),
					SUBREDDIT_POINTS: () => n.fbt._("Subreddit points", null, {
						hk: "1ytOO3"
					}),
					GAME_TOKENS: () => n.fbt._("Game tokens", null, {
						hk: "16BUrU"
					})
				}
		},
		"./src/lib/localizeCurrency/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return i
			})), a.d(t, "b", (function() {
				return l
			}));
			var s = a("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				n = a("./src/lib/currency/centsToDollars/index.ts"),
				r = a("./src/lib/currency/currencies.ts"),
				d = a("./src/lib/prettyPrintNumber/index.ts"),
				o = a("./src/reddit/helpers/governance/tokens.ts"),
				c = a("./src/reddit/constants/intlSupport.ts");
			const i = (e, {
					locale: t = s.DEFAULT_LOCALE,
					pretty: a,
					formatOptions: n
				} = {}) => {
					const r = Number(e);
					return Object(c.c)() ? a ? Object(d.b)(r) : new Intl.NumberFormat(t, n).format(r) : m(r, a, t)
				},
				l = (e, t = {}) => {
					const {
						locale: a = s.DEFAULT_LOCALE,
						pretty: d,
						formatOptions: i,
						displayConversion: l,
						forceDecimals: b,
						currency: g = t.currency || (t.type ? p(t.type) : r.c),
						type: h = t.type || (t.currency ? u(t.currency) : r.b.Real)
					} = t, _ = Number(e), f = String(e);
					switch (h) {
						case r.b.Reddit: {
							const e = r.e[g],
								t = e ? e() : g;
							return Object(c.c)() ? new Intl.NumberFormat(a, {
								currencyDisplay: "symbol",
								...i
							}).format(_) + " " + t : m(_, d, a, t)
						}
						case r.b.Crypto: {
							if (d) {
								return Object(o.c)(f, l) + " " + g
							}
							const e = Number(Object(o.b)(f, l));
							return Object(c.c)() ? new Intl.NumberFormat(a, {
								style: "currency",
								currency: g,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...i
							}).format(e) : m(e, d, a, g)
						}
						case r.b.Real:
						default: {
							const e = Number(Object(n.a)(f, b));
							return Object(c.c)() ? new Intl.NumberFormat(a, {
								style: "currency",
								currency: g,
								currencyDisplay: "symbol",
								notation: d ? "compact" : "standard",
								...i
							}).format(e) : m(e, d, a, g)
						}
					}
				},
				m = (e, t, a, s) => {
					return (t ? Object(d.b)(e) : e.toLocaleString(a)) + (s ? " " + s : "")
				},
				u = e => r.g.includes(e.toUpperCase()) ? r.b.Reddit : r.f.includes(e.toUpperCase()) ? r.b.Crypto : r.b.Real,
				p = e => {
					switch (e) {
						case r.b.Crypto:
							return r.d;
						case r.b.Reddit:
							return r.a;
						case r.b.Real:
						default:
							return r.c
					}
				}
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return x
			})), a.d(t, "g", (function() {
				return E
			})), a.d(t, "b", (function() {
				return w
			})), a.d(t, "d", (function() {
				return O
			})), a.d(t, "e", (function() {
				return C
			})), a.d(t, "c", (function() {
				return N
			})), a.d(t, "f", (function() {
				return S
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = a("./node_modules/lodash/forOwn.js"),
				n = a.n(s),
				r = a("./src/reddit/actions/governance/errorToast.ts"),
				d = a("./src/reddit/endpoints/economics/emojis.ts"),
				o = a("./src/reddit/endpoints/economics/specialMembership.ts"),
				c = a("./src/reddit/endpoints/economics/subredditPremium.ts"),
				i = a("./src/reddit/endpoints/governance/badges.ts"),
				l = a("./src/config.ts"),
				m = a("./src/reddit/endpoints/governance/requester.ts");

			function u(e, t, a) {
				return Object(m.a)(e, {
					method: "get",
					endpoint: `${l.a.metaUrl}/products/${t}?owners=${a}` + "&types=emotes_pack,giphy"
				})
			}
			var p = a("./src/reddit/models/Badge/index.ts"),
				b = a("./src/reddit/models/Badge/managementPage.ts"),
				g = a("./src/reddit/models/Product/index.ts"),
				h = a("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				_ = a("./src/reddit/selectors/economics.ts"),
				f = a("./src/reddit/selectors/products.ts"),
				y = a("./src/reddit/actions/economics/me/thunkedActions.ts"),
				v = a("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function j(e) {
				return !!e && "removeBadge" === e.type
			}

			function B(e) {
				if (!j(e)) return e
			}
			const x = () => async (e, t, {
				apiContext: a
			}) => {
				if (!t().user.account) return;
				await e(Object(y.b)({
					includeMemberships: !0
				}));
				const s = t().economics.me.data.specialMemberships || {},
					n = Object.keys(s);
				if (n.length) {
					const t = await Object(o.e)(a(), n);
					t.ok && e(Object(v.g)(t.body))
				}
			}, E = (e, t) => async (a, s, {
				apiContext: n
			}) => {
				const r = s().user.account,
					d = s().economics.subredditPremium[e],
					o = !d || d.status !== h.a.Fetched || t;
				if (r && o) {
					const t = await Object(c.a)(n(), e, r.id);
					a(Object(v.i)(t))
				}
			}, w = e => async (t, a, {
				apiContext: s
			}) => {
				const n = a(),
					d = n.user.account,
					o = Object(_.f)(n, e.subredditId),
					c = Object.keys(o).map(e => o[e]).filter(Boolean);
				if (d && e.badge) {
					let a, n;
					a = e.placement === p.a.First ? o[b.a.Loyalty] : e.placement === p.a.Second ? o[b.a.Achievement] : o[b.a.Cosmetic], t(Object(v.a)({
						...e,
						badge: B(e.badge),
						currentAppliedBadges: c,
						userId: d.id
					})), j(e.badge) && a ? n = await Object(i.a)(s(), e.subredditId, a.id, !1) : j(e.badge) || (n = await Object(i.a)(s(), e.subredditId, e.badge.id)), n && !n.ok && (t(Object(v.a)({
						...e,
						badge: a,
						currentAppliedBadges: c,
						userId: d.id
					})), Object(r.a)(t, n.error))
				}
			}, O = (e, t) => async (a, s, {
				apiContext: n
			}) => {
				await a(E(e, !0));
				const r = s().economics.subredditPremium[e];
				if (r && r.status === h.a.Fetched) {
					const s = r.data.userOwnedBadges.find(e => e.type === t.id);
					s && (a(w({
						badge: s,
						subredditId: e,
						placement: s.placement
					})), a(Object(v.d)(b.c.MyBadges)))
				}
			}, C = e => async (t, a, {
				apiContext: s
			}) => {
				const o = a().user.account,
					c = !a().economics.emotes[e],
					i = !a().economics.gifs[e];
				if (o && (c || i)) {
					const [a, c] = await Promise.all([Object(d.b)(s(), e), u(s(), e, o.id)]);
					if (!c.ok) return void Object(r.a)(t, c.error);
					const i = {
						emotes: [],
						emoteCollections: a.ok ? a.body : {},
						giphy: []
					};
					n()(c.body, e => {
						e.type === g.a.EmotesPack ? i.emotes.push(e) : e.type === g.a.Giphy && i.giphy.push(e)
					}), t(Object(v.e)({
						subredditId: e,
						products: i
					}))
				}
			}, N = (e, t, a) => async (s, n, {
				apiContext: r
			}) => {
				if (await s(E(e, !0)), a && t) {
					const a = n(),
						r = Object(_.f)(a, e),
						d = Object(f.a)(a, t);
					if (!r[Object(b.d)(d.placement)] && d) {
						const t = Object(_.l)(a, {
							subredditId: e,
							badge: d
						});
						t && await s(w({
							badge: t,
							subredditId: e
						}))
					}
					s(Object(v.c)({
						subredditId: e,
						initialView: b.c.MyBadges
					}))
				}
			}, S = e => async (t, a, {
				apiContext: s
			}) => {
				const {
					wallet: n
				} = await Object(o.c)(s(), e);
				t(Object(v.f)({
					wallet: n
				})), await t(E(e.subredditId, !0))
			}
		},
		"./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return d
			}));
			var s = a("./node_modules/react/index.js"),
				n = a.n(s);
			const {
				fbt: r
			} = a("./node_modules/fbt/lib/FbtPublic.js");

			function d({
				className: e
			}) {
				return n.a.createElement("a", {
					href: "https://www.redditinc.com/policies/previews-terms",
					target: "_blank",
					rel: "noopener noreferrer",
					className: e
				}, r._("Previews Terms of Use", null, {
					hk: "2eTczn"
				}))
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/AchievementBadge/index.m.less": function(e, t, a) {
			e.exports = {
				badges: "_3mDmosajY6zTATVHnP5KOb",
				badgeGroup: "_19NY2fgfHU7p-zs-alMlLo",
				container: "F12I7lN71uLjLoKb2I-L0",
				header: "TEdYqDC_V6vKy_RaEYbj"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/Badge/index.m.less": function(e, t, a) {
			e.exports = {
				applied: "_1YFFZKAm7eQBPEXKlOo2KT",
				checkmark: "gIO1GZ8DEKJjAWvOqsOTl",
				container: "_3NRBkAhpSeNQB_tmPG3Xms",
				image: "_2SBs9i3xOB9xMjm5XTukSB",
				lock: "_3hAd8_XzUtm045CB39Hq0P",
				selectable: "_2W6Je91QKlHApv9Hv3FrIy",
				selected: "_2ZM5Qsuo9411wvbgRQ1kzm"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/BadgeGroup/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_2nT4-JJZxYKvBlpZRQVIqu",
				description: "_19NLP3Fwro2Nib39QPnvRa",
				grid: "_36-xrwfqhHsRvGCkKbeRTx",
				item: "_3M3pxLy4RvHVKdF8oOOsTx",
				row: "_22jxxtl0tka2x7FPWkg8Hb",
				title: "_2lE-W3uhUjJqXSurdRAzBd"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/BadgeTypeSelector/Tab/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_36m8BDbadDq0-gYUSXUmoH",
				containerSelected: "_1-8agS2yUb16I0PexeSx0p",
				disabled: "_1zzGgCSXdecCJWsOsduhuB",
				inner: "_31Do6W0Z4_eYcS0869uxiP",
				lock: "_7W2z2wOsfyOHa_AvGjbPS",
				lockContainer: "_28p3jF6E233fYTSXPCDZnB",
				selected: "_3YW1CzavsA9qsKnYCL13-m",
				unselected: "_4cTYYTne76NRKaBCHACxx"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/BadgeTypeSelector/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_38oH-ihrQvnvD3p6J5LwNb",
				img: "_1A-b6EupVC5DI2HNuk4Y0z",
				tab: "ppH3ypMZXaJro43Cy6EN1",
				tabContent: "_2QtUlgSrwCoVhrK8C0L96W",
				tabText: "_1Fo0Rm0t4CFpxVLRwZ8tsq"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/Gallery/index.m.less": function(e, t, a) {
			e.exports = {
				badges: "_2MOQa7enWaO_R-AankQKvB",
				badgeGroup: "_2S6eQSyvhPUFchjGssqiud",
				container: "_22kGe_WYKpmrA9ArSBz2iM"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/HideBadge/index.m.less": function(e, t, a) {
			e.exports = {
				applied: "_14aprcoM44T1vbm03Vc8Kw",
				checkmark: "_2606MYNAjsvlkcczh0Laa5",
				container: "EUQOGOe-rj230itR5Ea5c",
				description: "_2o7gKpy7CmN1u-Q2dz3KSk",
				grid: "_1ro7lFHM8OTcDj2RZehEDf",
				hide: "ARqtFTx-bt29Jw8Wj9xHk",
				hideIcon: "_1ITLYbiAO8tERgy87rW8OR",
				item: "_28zwxmNnzRDaV1utSQ5UX2",
				row: "_16zQIqCyD-yibl_WRU1Y77",
				selected: "_2f84UgU0v18en7WlqR4XJT",
				title: "_3uDdJx7h1Mup11Q1SCLK_A"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/LoyaltyBadge/index.m.less": function(e, t, a) {
			e.exports = {
				badges: "AFv-ZBaaGj1OcWdH_KdEy",
				badgeGroup: "_36rHAzSbN7bCUeF8THA1OD",
				container: "lsXAdBFPBGW_giUp2ix9p",
				header: "_1BHSXYtPP5_Dfvst5rtoZF"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/MyBadges/NoBadges/index.m.less": function(e, t, a) {
			e.exports = {
				container: "WVkDjoG0zQdAYjfOvdyLl",
				img: "_2I2hiGiPtVasvVKEAOGWCj",
				learnMore: "_1NMgkH5qbvjrMI7pGV2rEY",
				text: "_3fCITxJ-N-GY_5PtFIoOwY",
				title: "Zz8TSO15KMvqXqHyXw7LS"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/MyBadges/index.m.less": function(e, t, a) {
			e.exports = {
				addCustom: "_3X7LDqRPi4Hwh9hfzVr6IC",
				addCustomWrapper: "RddUdxS9STV2KBvIN9kFh",
				badges: "GJ6VHWR0HQLocIhsBRyWB",
				badgeGroup: "_1RA2gLXeKuuFqrA8Ob3Agm",
				container: "_1QpW8EIE51AEM0pAhcpBcB",
				noBadges: "_1vClDBPA-9hVrWoY1FzNd_"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/ScrollableArea/index.m.less": function(e, t, a) {
			e.exports = {
				bottomGradient: "_2W-SUh-dcZ13bZsSSUEng9",
				container: "_37_43cGsJiNCmp-DVE6VoM",
				scrollableContent: "_2FhFvh_BcFw7CLLSeC4nNk",
				topGradient: "_1KqLKwrD0XBp2whcHvwe54"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/SectionHead/index.m.less": function(e, t, a) {
			e.exports = {
				close: "_2Hdtb_eimurDStdnS0Zq1x",
				description: "XZ5K0Mf5I8pXcahU5t7h_",
				descriptionHeader: "_2JFzDzyxvZhcFkGR_jCfu0",
				descriptionText: "_33xBZlcjYK6hNKJREQKSaT",
				descriptionTitle: "_26Lx7cp6M9b7HlQgPGp0Hn",
				info: "hDmjue5-JPlHEXPvlkEvc",
				title: "_2BkxUJlRiw_z67z48K8j68"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/ViewTypeSelector/Tab/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_1wqnOAHeE9xlBrIG_5etYD",
				selected: "xhBHlGkiAnj8kXGPFxXGO"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/ViewTypeSelector/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_31A6PSuZaAm7howVRV3yMy",
				newDot: "_3iyfsnzmYgaYPYp2NKMM2e",
				tab: "_3ZIeCZ2bEh6Cf9nH1NV7aX"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_34eglC-9H0W4faVex0RHsi",
				content: "_3gsEkt9rBh-pT-TbkUmokG",
				contentWrapper: "_34WPc3uK4Xjxo5MYR413d",
				nav: "GIAuzWUkWaWPC2YS-AJem",
				viewSelector: "_3LV19SQKXQEJWp8DfkG3WY",
				withView: "_2O-9B_ZPoC84Tni3bEnlMa",
				withoutView: "_14Fzq6h0B1jkgQ8tL_M6Md"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.m.less": function(e, t, a) {
			e.exports = {
				collectionTitle: "BKuPdCEiKWhUuAAZSV8Hu",
				singleLineText: "_3vV5Hg-hZiDuQVXYnhgzdZ",
				description: "_3K0DQ21Q-wH4kETiMxiaNo",
				fullWidth: "_1HsWtVhofw3GuWXgyObfz4",
				info: "_30GDKdvss889YcOkeQXbVz",
				image: "_3vLr4Xzqw3Fx7cHwT9nDP7",
				progressAmount: "_2zNarMBPc02JsQXIFrSaFR",
				progressBar: "_3hmtSMaZH5Wkj8Ftna8Wy1",
				progressContainer: "_2F36VBMAcVYDe4GdSPiMdk",
				progressThumb: "_3i-h-gzh3Oskm1I04nHRT3",
				title: "_2ZnmMFDAIE41ruoyRhfq3L",
				wrapper: "_2se6JR27PiBUl4k4nrgmAS"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.tsx": function(e, t, a) {
			"use strict";
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/react/index.js"),
				r = a.n(n),
				d = a("./node_modules/react-redux/es/index.js"),
				o = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				i = a("./src/reddit/models/Badge/index.ts"),
				l = a("./src/reddit/models/Badge/managementPage.ts"),
				m = a("./src/reddit/selectors/crypto/wallet.ts"),
				u = a("./src/reddit/selectors/economics.ts"),
				p = a("./node_modules/reselect/es/index.js"),
				b = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.m.less"),
				g = a.n(b);
			const h = Object(p.c)({
				collection: (e, {
					badge: t,
					subredditId: a
				}) => {
					if (t.collections) {
						const s = Object.keys(t.collections);
						if (s.length) {
							const t = s[0];
							return Object(u.h)(e, {
								collectionId: t,
								subredditId: a
							})
						}
					}
				},
				progress: (e, {
					badge: t,
					subredditId: a,
					type: s
				}) => {
					if (!Object(i.e)(t) && s === l.a.Achievement && c.b[t.id]) {
						const s = Object(m.a)(e, {
							subredditId: a
						});
						if (s) return {
							complete: parseInt(s.amount),
							total: c.b[t.id]
						}
					}
				}
			});
			t.a = Object(d.b)(h)((function(e) {
				const t = e.type === l.a.Loyalty ? s.fbt._("Loyalty Badge", null, {
						hk: "3C1yVX"
					}) : e.type === l.a.Achievement ? s.fbt._("Achievement Badge", null, {
						hk: "3ZCLHl"
					}) : s.fbt._("Style Badge", null, {
						hk: "1heMgq"
					}),
					a = e.collection ? e.collection.title : t,
					{
						url: n,
						url2x: d
					} = Object(i.d)(60, 60, e.badge),
					c = e.progress;
				return r.a.createElement("article", {
					className: Object(o.a)(e.className, {
						[g.a.fullWidth]: !!e.fullWidth
					})
				}, r.a.createElement("div", {
					className: g.a.wrapper
				}, r.a.createElement("img", {
					className: g.a.image,
					src: d,
					srcSet: `${n}, ${d} 2x`
				}), r.a.createElement("div", {
					className: g.a.info
				}, r.a.createElement("div", {
					className: g.a.collectionTitle,
					style: {
						color: e.collection && e.collection.highlight
					},
					title: a
				}, a), r.a.createElement("header", {
					className: g.a.title
				}, e.badge.title), c && c.complete < c.total && r.a.createElement("div", {
					className: g.a.progressContainer
				}, r.a.createElement("div", {
					className: g.a.progressBar
				}, r.a.createElement("div", {
					className: g.a.progressThumb,
					style: {
						width: `${c.complete/c.total*100}%`
					}
				})), r.a.createElement("div", {
					className: g.a.progressAmount
				}, function(e) {
					return `${`${Math.floor(e.complete/1e3)}k`}/${`${Math.floor(e.total/1e3)}k`}`
				}(c))), r.a.createElement("div", {
					className: g.a.description
				}, e.badge.description))), e.children)
			}))
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/Legal/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_2ZTi5QrGM2DoaGzw3CUXpJ",
				link: "_3T7uMShYdunqBNsVsU6Jzf"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.m.less": function(e, t, a) {
			e.exports = {
				button: "_10ESw5cXwHBLWInQHjwYH2",
				container: "_1sfIwxqWpDotVXLjKV_2jO",
				loading: "_18AJBQlrwo3obCZczqf9Is",
				loadingIcon: "_3A8u5o0uPgpbYt-dE4XZiC",
				submitting: "_167697f4GfaciFsGrMXP-w"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				r = a("./node_modules/react-redux/es/index.js"),
				d = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/actions/governance/errorToast.ts"),
				c = a("./src/reddit/components/TrackingHelper/index.tsx"),
				i = a("./src/reddit/contexts/ApiContext.tsx"),
				l = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				m = a("./src/reddit/endpoints/governance/products/badges.ts"),
				u = a("./src/reddit/helpers/economics/setupSubredditPremiumButton.ts"),
				p = a("./src/reddit/selectors/telemetry.ts"),
				b = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.m.less"),
				g = a.n(b);
			const h = "subreddit-premium-purchase-braintree";
			class _ extends n.a.Component {
				constructor() {
					super(...arguments), this.mounted = !1, this.state = {
						loading: !0,
						submitting: !1
					}, this.getId = () => h + this.props.productId
				}
				componentDidMount() {
					if (this.mounted = !0, this.props.subreddit) {
						const e = this.props.apiContext(),
							t = this.props.subreddit.id;
						Object(u.a)({
							apiContext: e,
							config: {
								type: "purchase"
							},
							elementId: this.getId(),
							price: () => this.props.price,
							purchaseFn: a => Object(m.d)(e, {
								nonce: a,
								subredditId: t,
								price: this.props.price,
								products: [{
									productId: this.props.productId,
									quantity: "1"
								}]
							}),
							onCancel: () => this.mounted && this.setState({
								submitting: !1
							}),
							onClientLoad: () => this.mounted && this.setState({
								loading: !1
							}),
							onError: e => {
								this.mounted && (this.setState({
									submitting: !1
								}), this.props.onError(e), console.error(e))
							},
							onSubmitting: () => {
								this.mounted && this.setState({
									submitting: !0
								}), this.props.sendEvent(e => ({
									source: "meta",
									action: "click",
									noun: "badge_gallery_paypal_purchase",
									correlationId: this.props.correlationId,
									...p.o(e),
									subreddit: p.jb(e)
								}))
							},
							onSuccess: () => this.props.onPaymentSuccessful()
						})
					}
				}
				componentWillUnmount() {
					this.mounted = !1
				}
				render() {
					return n.a.createElement("div", {
						className: Object(d.a)(this.props.className, g.a.container)
					}, n.a.createElement("div", {
						className: Object(d.a)(g.a.button, {
							[g.a.loading]: this.state.loading,
							[g.a.submitting]: this.state.submitting
						}),
						id: this.getId()
					}), this.state.submitting && n.a.createElement(l.a, {
						className: g.a.loadingIcon,
						sizePx: 16
					}))
				}
			}
			t.a = Object(i.b)(Object(r.b)(void 0, (e, {
				subreddit: t
			}) => ({
				onError: t => Object(o.a)(e, t)
			}))(Object(c.c)(_)))
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/index.m.less": function(e, t, a) {
			e.exports = {
				button: "_1vdKo7uqCTdj1lwD40JJWv",
				description: "_1UVEhdH_kRKJ7YRJvu19j9",
				legal: "gceg0z1f43MmsRWqcrHWR",
				price: "_2vykDDj9CleWt88L-vGzLi",
				purchaseButton: "_1_8fBf5hh_j_kzNtAFItNi",
				wrapper: "AW3E2QVGRQAZ04bSKbSyP"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Hide/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_3fdoyw0y7NTskxV1QUObns",
				hide: "_2KLxay4WmF6pjRbh1yUy7u",
				text: "_13oQyEu8B5hL8C9vyDZPl-"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_2iFtTzgocWLjtsoE-CPOwo",
				content: "_3-ygUAsCp76q7Lpdp6VPSs",
				dismiss: "_3ILXOydVv0XesbiRWuVOwx",
				footer: "pN64cQ_emSADV0Zu2TZJr",
				hide: "_34f_7CfOVE_rExubx7qzKV"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/index.m.less": function(e, t, a) {
			e.exports = {
				badgePreviewContainer: "_1nhidGazTjQ0L8ec4qFAyF",
				close: "_6cwFK0NJEv886PAerxOwR",
				commentPreviewContainer: "_1vUlYsMH62HjzarirkQK9w",
				commentPreview: "_38aTvlwDXi83rF9j5qefcu",
				commentPreviewLabel: "qQSdG-2Bes9LJ52s9RFz6",
				container: "_3wEzB-LSd46T3bLB2dqr8c",
				content: "_1nofqfhYAUpLDH39dEuA5f",
				contentBackground: "_18SJ2fC3k7c0GnXmbl_9Kx",
				header: "_3J0qoyrIGQCaXE0DDe7pvJ",
				previewClosed: "_3kjltEdl8rud4emZ2RCuko",
				previewOpen: "_36Z7r98kQLEcIojvDoEhi2",
				radialHighlight: "_2F7J_PYf95G92D1kPXnGys",
				radialHighlightOuter: "_1sNYmVjYmQbOy9R9fI7PkE",
				rotatesun: "_2movtq4X6N4-EjdwhozPk7",
				radialHighlightInner: "wypvHwARLm7TV9NN08kQO",
				voteContainer: "-y23V9UmABV9ctDXHN2Xl",
				vote: "_22qOVd0mdjumRe2P-VrS7p"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_2cRTFe2J952Y_M77Sns7vc",
				content: "_29rPcFDLuj9RXaeepKmA1G",
				header: "VlYLnpN6MdRIZVtrEYCDM",
				leftRail: "QB_B8uVPl5gOHzOFgZ5jl",
				preview: "gKO5JJ8acW9E8VvzkJGE"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				r = a("./node_modules/react-redux/es/index.js"),
				d = a("./node_modules/reselect/es/index.js"),
				o = a("./src/higherOrderComponents/asModal/index.tsx"),
				c = a("./src/reddit/contexts/PageLayer/index.tsx"),
				i = a("./src/reddit/featureFlags/component.tsx"),
				l = a("./src/reddit/models/Badge/index.ts"),
				m = a("./src/reddit/models/Badge/managementPage.ts"),
				u = a("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				p = a("./src/reddit/selectors/economics.ts"),
				b = a("./src/lib/classNames/index.ts"),
				g = a("./node_modules/fbt/lib/FbtPublic.js"),
				h = a("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				_ = a("./src/reddit/icons/svgs/Lock/index.tsx"),
				f = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/Badge/index.m.less"),
				y = a.n(f);

			function v(e) {
				const {
					url: t,
					url2x: a
				} = Object(l.d)(40, 40, e.model);
				return n.a.createElement("div", {
					className: Object(b.a)(e.className, y.a.container, {
						[y.a.applied]: !!e.applied,
						[y.a.selected]: !!e.selected,
						[y.a.selectable]: !!e.onSelect
					}),
					onClick: e.onSelect
				}, e.applied && n.a.createElement(h.a, {
					className: y.a.checkmark
				}), e.locked && n.a.createElement(_.a, {
					className: y.a.lock
				}), n.a.createElement("img", {
					className: y.a.image,
					src: a,
					srcSet: `${t}, ${a} 2x`
				}))
			}
			var j = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/BadgeGroup/index.m.less"),
				B = a.n(j);

			function x(e) {
				const {
					children: t,
					className: a,
					description: s,
					highlight: r,
					rowLength: d = 4,
					title: o
				} = e;
				if (!t.length) return null;
				const c = t.reduce((e, t) => {
					let a = e[e.length - 1];
					return a.length >= d && (a = [], e.push(a)), a.push(t), e
				}, [
					[]
				]);
				return n.a.createElement("div", {
					className: Object(b.a)(a, B.a.container)
				}, n.a.createElement("div", {
					className: B.a.centerContent
				}, o && n.a.createElement("header", {
					className: B.a.title,
					style: {
						color: r
					}
				}, o), s && n.a.createElement("div", {
					className: B.a.description
				}, s), n.a.createElement("article", {
					className: B.a.grid
				}, c.map((e, t) => n.a.createElement("div", {
					className: Object(b.a)(B.a.row),
					key: `${o}-${t}`
				}, e.map((e, a) => n.a.createElement("div", {
					className: Object(b.a)(B.a.item, B.a.itemBottom),
					key: `${o}-${t}-${a}`
				}, e)))))))
			}
			var E = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/ScrollableArea/index.m.less"),
				w = a.n(E);

			function O(e) {
				return n.a.createElement("div", {
					className: Object(b.a)(e.className, w.a.container)
				}, n.a.createElement("div", {
					className: w.a.scrollableContent
				}, e.children), n.a.createElement("div", {
					className: w.a.topGradient
				}), n.a.createElement("div", {
					className: w.a.bottomGradient
				}))
			}
			var C = a("./src/reddit/contexts/ApiContext.tsx"),
				N = a("./src/config.ts"),
				S = a("./src/reddit/endpoints/governance/requester.ts");
			async function k(e, t, a, s) {
				return Object(S.a)(e, {
					endpoint: `${N.a.metaUrl}/storage/${t}/me/${a}`,
					method: "patch",
					data: {
						on: s
					}
				}).then(e => !!e.ok)
			}
			async function M(e, t, a, s) {
				return Object(S.a)(e, {
					endpoint: `${N.a.metaUrl}/storage/${t}/me/${a}`,
					method: "get"
				}).then(e => e.ok ? Boolean(e.body && e.body.on) : s)
			}
			var P = a("./src/reddit/icons/svgs/Close/index.tsx"),
				L = a("./src/reddit/icons/svgs/Info/index.tsx"),
				I = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/SectionHead/index.m.less"),
				A = a.n(I),
				T = Object(C.b)(class extends n.a.Component {
					constructor(e) {
						super(e), this.closeDescription = () => {
							this.setState(e => ({
								...e,
								descriptionOpen: !1
							})), ((e, t, a) => k(e, t, a, !0))(this.props.apiContext(), this.props.subredditId, this.props.sectionName)
						}, this.openDescription = () => this.setState(e => ({
							...e,
							descriptionOpen: !0
						})), this.state = {
							descriptionOpen: !1
						}
					}
					componentDidMount() {
						((e, t, a) => M(e, t, a, !1))(this.props.apiContext(), this.props.subredditId, this.props.sectionName).then(e => this.setState({
							descriptionOpen: !e
						}))
					}
					render() {
						return n.a.createElement("div", {
							className: this.props.className
						}, n.a.createElement("header", {
							className: A.a.title
						}, this.props.title, n.a.createElement(L.a, {
							className: A.a.info,
							onClick: this.openDescription
						})), this.state.descriptionOpen && n.a.createElement("div", {
							className: A.a.description
						}, n.a.createElement("div", {
							className: A.a.descriptionHeader
						}, n.a.createElement("div", {
							className: A.a.descriptionTitle
						}, g.fbt._("about", null, {
							hk: "1XpxW5"
						})), n.a.createElement(P.a, {
							className: A.a.close,
							onClick: this.closeDescription
						})), n.a.createElement("div", {
							className: A.a.descriptionText
						}, this.props.info)))
					}
				}),
				D = a("./src/reddit/icons/svgs/EyeCancel/index.tsx"),
				R = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/HideBadge/index.m.less"),
				H = a.n(R);
			const F = {
				id: "removeBadge",
				type: "removeBadge"
			};

			function U(e) {
				const {
					badgeType: t,
					className: a
				} = e, {
					description: s,
					title: r
				} = function(e) {
					switch (e) {
						case m.a.Achievement:
							return {
								description: g.fbt._("Do not display an Achievement Badge", null, {
									hk: "XaQt5"
								}), title: g.fbt._("Hide Achievement Badge", null, {
									hk: "1J1U2J"
								})
							};
						case m.a.Cosmetic:
							return {
								description: g.fbt._("Do not display a Style Badge", null, {
									hk: "2ASTcV"
								}), title: g.fbt._("Hide Style Badge", null, {
									hk: "3fpbDK"
								})
							};
						case m.a.Loyalty:
							return {
								description: g.fbt._("Do not display a Loyalty Badge", null, {
									hk: "1e0IJN"
								}), title: g.fbt._("Hide Loyalty Badge", null, {
									hk: "29NfeM"
								})
							}
					}
				}(t);
				return n.a.createElement("div", {
					className: Object(b.a)(a, H.a.container)
				}, n.a.createElement("div", {
					className: H.a.centerContent
				}, n.a.createElement("header", {
					className: H.a.title
				}, r), n.a.createElement("div", {
					className: H.a.description
				}, s), n.a.createElement("article", {
					className: H.a.grid
				}, n.a.createElement("div", {
					className: H.a.row
				}, n.a.createElement("div", {
					className: H.a.item
				}, n.a.createElement("div", {
					className: Object(b.a)(H.a.hide, {
						[H.a.applied]: !!e.applied,
						[H.a.selected]: !!e.selected
					}),
					onClick: () => e.onSelect({
						badgeType: t,
						...F
					})
				}, e.applied && n.a.createElement(h.a, {
					className: H.a.checkmark
				}), n.a.createElement(D.a, {
					className: H.a.hideIcon
				})))))))
			}
			var G = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/AchievementBadge/index.m.less"),
				W = a.n(G);
			const V = Object(d.c)({
				collections: (e, {
					subredditId: t
				}) => Object(p.n)(e, t, m.a.Achievement)
			});
			var z = Object(r.b)(V)((function(e) {
					return n.a.createElement("div", {
						className: Object(b.a)(W.a.container, e.className)
					}, n.a.createElement(O, null, n.a.createElement(T, {
						className: W.a.header,
						info: g.fbt._("Show off with an Achievement Badge! Unlock badges by completing goals.", null, {
							hk: "h44Q4"
						}),
						sectionName: "achievement_badge",
						subredditId: e.subredditId,
						title: g.fbt._("Achievement Badges", null, {
							hk: "4m7kLd"
						})
					}), n.a.createElement("div", {
						className: W.a.badges
					}, e.collections.map(t => n.a.createElement(x, {
						className: W.a.badgeGroup,
						description: t.description,
						highlight: t.highlight,
						key: t.title,
						title: t.title
					}, t.unlocked.map((t, a) => n.a.createElement("div", {
						className: W.a.badge,
						key: t.id + a
					}, n.a.createElement(v, {
						applied: e.appliedBadge && e.appliedBadge.id === t.id,
						model: t,
						selected: e.selectedBadge && e.selectedBadge.id === t.id,
						onSelect: () => e.onSelectBadge(t)
					}))).concat(t.locked.map(t => n.a.createElement("div", {
						className: W.a.badge,
						key: t.id
					}, n.a.createElement(v, {
						locked: !0,
						model: t,
						selected: e.selectedBadge && e.selectedBadge.id === t.id,
						onSelect: () => e.onSelectBadge(t)
					})))))), n.a.createElement(U, {
						applied: !e.appliedBadge,
						className: W.a.badgeGroup,
						badgeType: m.a.Achievement,
						selected: e.selectedBadge && "removeBadge" === e.selectedBadge.type,
						onSelect: e.onSelectBadge
					}))))
				})),
				q = a("./node_modules/lodash/curry.js"),
				K = a.n(q),
				Y = a("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				$ = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/BadgeTypeSelector/Tab/index.m.less"),
				X = a.n($);

			function Q(e) {
				const t = n.a.Children.only(e.children);
				return n.a.createElement("button", {
					className: Object(b.a)(X.a.container, e.className, {
						[X.a.disabled]: !!e.locked,
						[X.a.containerSelected]: !!e.selected
					}),
					onClick: e.locked ? void 0 : e.onSelect
				}, n.a.cloneElement(t, {
					className: Object(b.a)(t.props.className, X.a.inner, {
						[X.a.selected]: !!e.selected,
						[X.a.unselected]: !e.selected
					})
				}), e.locked && n.a.createElement("div", {
					className: X.a.lockContainer
				}, n.a.createElement(_.a, {
					className: X.a.lock
				})))
			}
			var Z = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/BadgeTypeSelector/index.m.less"),
				J = a.n(Z);
			const ee = K()((e, t, a) => `${N.a.assetPath}/img/memberships/badges/management/tabs/${e}/${t}-${a?"on":"off"}-v2.png`),
				te = [{
					type: m.a.Loyalty,
					text: () => g.fbt._("Loyalty", null, {
						hk: "wG8nE"
					})
				}, {
					type: m.a.Achievement,
					text: () => g.fbt._("Achievement", null, {
						hk: "2y4Del"
					})
				}, {
					type: m.a.Cosmetic,
					text: () => g.fbt._("Style", null, {
						hk: "25q9XS"
					})
				}];
			const ae = Object(d.c)({
				currentBadgeType: e => e.economics.currentBadgeManagementScreen.badgeType,
				hasAchievementBadges: (e, {
					subredditId: t
				}) => {
					const a = Object(p.n)(e, t, m.a.Achievement);
					for (const s of a)
						if (s.locked.length || s.unlocked.length) return !0;
					return !1
				}
			});
			var se = Object(r.b)(ae, e => ({
					onChangeBadgeType: t => e(Object(Y.b)(t))
				}))((function(e) {
					const {
						hasAchievementBadges: t
					} = e, a = ee(e.subredditId), s = te.filter(e => e.type !== m.a.Achievement || t);
					return n.a.createElement("nav", {
						className: Object(b.a)(J.a.container, e.className)
					}, s.map((t, s) => n.a.createElement(n.a.Fragment, {
						key: `${t.type}`
					}, n.a.createElement(Q, {
						className: J.a.tab,
						selected: e.currentBadgeType === t.type,
						onSelect: () => e.onChangeBadgeType(t.type)
					}, n.a.createElement("div", {
						className: J.a.tabContent
					}, n.a.createElement("img", {
						className: J.a.img,
						src: a(t.type, e.currentBadgeType === t.type)
					}), n.a.createElement("div", {
						className: J.a.tabText
					}, t.text()))))))
				})),
				ne = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/Gallery/index.m.less"),
				re = a.n(ne);
			const de = Object(d.c)({
				collections: (e, {
					subredditId: t
				}) => Object(p.n)(e, t, m.a.Cosmetic, m.c.Gallery)
			});
			var oe = Object(r.b)(de)((function(e) {
					return n.a.createElement("div", {
						className: Object(b.a)(re.a.container, e.className)
					}, n.a.createElement(O, null, n.a.createElement("div", {
						className: re.a.badges
					}, e.collections.map(t => n.a.createElement(x, {
						className: re.a.badgeGroup,
						description: t.description,
						highlight: t.highlight,
						key: t.title,
						title: t.title
					}, t.locked.filter(e => Object(l.f)(e) || !!e.price).map(t => n.a.createElement("div", {
						className: re.a.badge,
						key: t.id
					}, n.a.createElement(v, {
						model: t,
						selected: e.selectedBadge && e.selectedBadge.id === t.id,
						onSelect: () => e.onSelectBadge(t)
					}))))))))
				})),
				ce = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/LoyaltyBadge/index.m.less"),
				ie = a.n(ce);
			const le = Object(d.c)({
				collections: (e, {
					subredditId: t
				}) => Object(p.n)(e, t, m.a.Loyalty),
				meta: (e, {
					subredditId: t
				}) => Object(p.r)(e, t)
			});
			var me = Object(r.b)(le)((function(e) {
					return n.a.createElement("div", {
						className: Object(b.a)(ie.a.container, e.className)
					}, n.a.createElement(O, null, n.a.createElement(T, {
						className: ie.a.header,
						info: g.fbt._("The Loyalty Badge shows how long you've been a {memberAlt} in the subreddit. The longer you remain a member, the more Loyalty Badges you unlock", [g.fbt._param("memberAlt", e.meta.memberAlt)], {
							hk: "2jAQmP"
						}),
						sectionName: "loyalty_badge",
						subredditId: e.subredditId,
						title: g.fbt._("Loyalty Badges", null, {
							hk: "L1pPB"
						})
					}), n.a.createElement("div", {
						className: ie.a.badges
					}, e.collections.map(t => n.a.createElement(x, {
						className: ie.a.badgeGroup,
						highlight: t.highlight,
						key: t.title
					}, t.unlocked.map((t, a) => n.a.createElement("div", {
						className: ie.a.badge,
						key: t.id + a
					}, n.a.createElement(v, {
						applied: e.appliedBadge && e.appliedBadge.id === t.id,
						model: t,
						selected: e.selectedBadge && e.selectedBadge.id === t.id,
						onSelect: () => e.onSelectBadge(t)
					}))).concat(t.locked.map(t => n.a.createElement("div", {
						className: ie.a.badge,
						key: t.id
					}, n.a.createElement(v, {
						locked: !0,
						model: t,
						selected: e.selectedBadge && e.selectedBadge.id === t.id,
						onSelect: () => e.onSelectBadge(t)
					})))))), n.a.createElement(U, {
						applied: !e.appliedBadge,
						className: ie.a.badgeGroup,
						badgeType: m.a.Loyalty,
						selected: e.selectedBadge && "removeBadge" === e.selectedBadge.type,
						onSelect: e.onSelectBadge
					}))))
				})),
				ue = a("./src/lib/constants/specialMembership.ts"),
				pe = a("./src/reddit/featureFlags/index.ts"),
				be = a("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				ge = a("./src/reddit/actions/modal.ts"),
				he = a("./src/reddit/components/TrackingHelper/index.tsx"),
				_e = a("./src/reddit/controls/Button/index.tsx"),
				fe = a("./src/reddit/helpers/economics/membershipPage.ts"),
				ye = a("./src/reddit/selectors/telemetry.ts"),
				ve = a("./node_modules/uuid/v4.js"),
				je = a.n(ve),
				Be = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/MyBadges/NoBadges/index.m.less"),
				xe = a.n(Be);
			const Ee = Object(d.c)({
				meta: (e, {
					subredditId: t
				}) => Object(p.r)(e, t),
				subreddit: (e, {
					subredditId: t
				}) => e.subreddits.models[t]
			});
			var we = Object(he.c)(Object(r.b)(Ee, (e, {
					badge: t,
					subredditId: a
				}) => ({
					onCloseModal: () => e(Object(ge.f)())
				}))((function(e) {
					const t = `${N.a.assetPath}/img/memberships/badges/management/myBadges/${e.subredditId}/noBadges.png`,
						a = je()(),
						s = e.subreddit ? e.subreddit.name : "";
					return n.a.createElement("div", {
						className: Object(b.a)(xe.a.container, e.className)
					}, n.a.createElement("img", {
						className: xe.a.img,
						src: t
					}), n.a.createElement("div", {
						className: xe.a.title
					}, g.fbt._("You Don't Have Any Style Badges Yet", null, {
						hk: "13yxIM"
					})), n.a.createElement("div", {
						className: xe.a.text
					}, g.fbt._("Get a {membershipAlt} and receive new style badges every month. You can also buy badges individually from the Gallery.", [g.fbt._param("membershipAlt", e.meta.membershipAlt)], {
						hk: "1JWnXS"
					})), n.a.createElement(_e.n, {
						className: xe.a.learnMore,
						disabled: !e.subreddit,
						to: Object(fe.a)(s, a),
						onClick: t => {
							t.stopPropagation(), e.sendEvent(e => ({
								correlationId: a,
								source: "meta",
								action: "click",
								noun: "subscription_myBadges_open_learn_more",
								...ye.o(e),
								subreddit: ye.jb(e)
							})), e.onCloseModal()
						}
					}, g.fbt._("Learn More", null, {
						hk: "4ptmhd"
					})))
				}))),
				Oe = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/MyBadges/index.m.less"),
				Ce = a.n(Oe);
			const Ne = Object(d.c)({
				collections: (e, {
					subredditId: t
				}) => Object(p.n)(e, t, m.a.Cosmetic, m.c.MyBadges),
				customBadgesEnabled: pe.d.spCustomBadgesAndEmotes
			});
			var Se = Object(r.b)(Ne, e => ({
					onOpenUploadDialog: () => e(Object(Y.j)())
				}))((function(e) {
					return n.a.createElement("div", {
						className: Object(b.a)(Ce.a.container, e.className)
					}, n.a.createElement(O, null, e.collections.length ? n.a.createElement("div", {
						className: Ce.a.badges
					}, e.collections.map(t => n.a.createElement(x, {
						className: Ce.a.badgeGroup,
						description: t.description,
						highlight: t.highlight,
						key: t.title,
						title: t.title
					}, t.unlocked.map((t, a) => n.a.createElement("div", {
						className: Ce.a.badge,
						key: t.id + a
					}, n.a.createElement(v, {
						applied: e.appliedBadge && e.appliedBadge.id === t.id,
						model: t,
						selected: e.selectedBadge && e.selectedBadge.id === t.id,
						onSelect: () => e.onSelectBadge(t)
					}))).concat(t.id === ue.a && e.customBadgesEnabled ? n.a.createElement("button", {
						className: Ce.a.addCustomWrapper,
						onClick: e.onOpenUploadDialog
					}, n.a.createElement(be.a, {
						className: Ce.a.addCustom
					})) : []))), n.a.createElement(U, {
						applied: !e.appliedBadge,
						className: Ce.a.badgeGroup,
						badgeType: m.a.Cosmetic,
						selected: e.selectedBadge && "removeBadge" === e.selectedBadge.type,
						onSelect: e.onSelectBadge
					})) : n.a.createElement(we, {
						className: Ce.a.noBadges,
						subredditId: e.subredditId
					})))
				})),
				ke = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/ViewTypeSelector/Tab/index.m.less"),
				Me = a.n(ke);
			const Pe = Object(d.c)({
				isSelected: (e, {
					viewType: t
				}) => e.economics.currentBadgeManagementScreen.view === t
			});
			var Le = Object(r.b)(Pe, (e, {
					viewType: t
				}) => ({
					onSelect: () => e(Object(Y.d)(t))
				}))((function(e) {
					return n.a.createElement("button", {
						className: Object(b.a)(e.className, Me.a.container, {
							[Me.a.selected]: e.isSelected
						}),
						onClick: e.onSelect
					}, e.children)
				})),
				Ie = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/ViewTypeSelector/index.m.less"),
				Ae = a.n(Ie);

			function Te(e) {
				return n.a.createElement("nav", {
					className: Object(b.a)(e.className, Ae.a.container)
				}, n.a.createElement(Le, {
					className: Ae.a.tab,
					viewType: m.c.Gallery
				}, g.fbt._("Gallery", null, {
					hk: "40A6Dd"
				})), n.a.createElement(Le, {
					className: Ae.a.tab,
					viewType: m.c.MyBadges
				}, g.fbt._("My Badges", null, {
					hk: "2OwjDY"
				})))
			}
			var De = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/index.m.less"),
				Re = a.n(De);
			const He = Object(d.c)({
				badgeType: e => e.economics.currentBadgeManagementScreen.badgeType,
				hasGalleryBadges: (e, {
					subredditId: t
				}) => Object(p.j)(e, t),
				view: e => e.economics.currentBadgeManagementScreen.view
			});
			var Fe = Object(r.b)(He)((function(e) {
					const t = Object(b.a)(Re.a.contentWrapper, {
						[Re.a.withView]: e.badgeType === m.a.Cosmetic,
						[Re.a.withoutView]: e.badgeType !== m.a.Cosmetic
					});
					return n.a.createElement("div", {
						className: Object(b.a)(e.className, Re.a.container)
					}, n.a.createElement(se, {
						className: Re.a.nav,
						subredditId: e.subredditId
					}), e.badgeType === m.a.Cosmetic && e.hasGalleryBadges && n.a.createElement(Te, {
						className: Re.a.viewSelector
					}), e.badgeType === m.a.Loyalty && n.a.createElement(me, {
						appliedBadge: e.appliedBadges[m.a.Loyalty],
						className: t,
						selectedBadge: e.selectedBadges[m.a.Loyalty],
						subredditId: e.subredditId,
						onSelectBadge: t => e.onSelectBadge(m.a.Loyalty, t)
					}), e.badgeType === m.a.Achievement && n.a.createElement(z, {
						appliedBadge: e.appliedBadges[m.a.Achievement],
						className: t,
						selectedBadge: e.selectedBadges[m.a.Achievement],
						subredditId: e.subredditId,
						onSelectBadge: t => e.onSelectBadge(m.a.Achievement, t)
					}), e.badgeType === m.a.Cosmetic && e.view === m.c.MyBadges && n.a.createElement(Se, {
						appliedBadge: e.appliedBadges[m.a.Cosmetic],
						className: t,
						selectedBadge: e.selectedBadges[m.a.Cosmetic],
						subredditId: e.subredditId,
						onSelectBadge: t => e.onSelectBadge(m.a.Cosmetic, t)
					}), e.badgeType === m.a.Cosmetic && e.view === m.c.Gallery && n.a.createElement(oe, {
						appliedBadge: e.appliedBadges[m.a.Cosmetic],
						className: t,
						selectedBadge: e.selectedBadges[m.a.Cosmetic],
						subredditId: e.subredditId,
						onSelectBadge: t => e.onSelectBadge(m.a.Cosmetic, t)
					}))
				})),
				Ue = a("./node_modules/react-motion/lib/react-motion.js"),
				Ge = a("./src/reddit/helpers/economics/sortBadges.ts"),
				We = a("./src/reddit/icons/fonts/Downvote/index.tsx"),
				Ve = a("./src/reddit/icons/fonts/Upvote/index.tsx"),
				ze = a("./src/reddit/icons/svgs/Twinkle/index.tsx"),
				qe = a("./src/reddit/components/Economics/SubredditPremium/Badges/UserPreview/index.tsx"),
				Ke = a("./node_modules/lodash/last.js"),
				Ye = a.n(Ke),
				$e = a("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				Xe = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.tsx"),
				Qe = a("./src/lib/localizeCurrency/index.ts"),
				Ze = a("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				Je = a("./src/reddit/actions/toaster.ts"),
				et = a("./src/reddit/hooks/useLocale.ts"),
				tt = a("./src/reddit/models/Toast/index.ts"),
				at = a("./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx"),
				st = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/Legal/index.m.less"),
				nt = a.n(st);
			const {
				fbt: rt
			} = a("./node_modules/fbt/lib/FbtPublic.js");

			function dt(e) {
				return n.a.createElement("div", {
					className: Object(b.a)(e.className, nt.a.container)
				}, rt._("By purchasing, you agree to the {=Reddit User Agreement} and {previewsUserAgreement}.", [rt._param("=Reddit User Agreement", n.a.createElement("a", {
					className: nt.a.link,
					href: "https://www.redditinc.com/policies/user-agreement",
					target: "_blank",
					rel: "noopener noreferrer"
				}, rt._("Reddit User Agreement", null, {
					hk: "49nG3E"
				}))), rt._param("previewsUserAgreement", n.a.createElement(at.a, {
					className: nt.a.link
				}))], {
					hk: "e28UM"
				}))
			}
			var ot = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.tsx"),
				ct = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/index.m.less"),
				it = a.n(ct);
			const lt = Object(d.c)({
				meta: (e, {
					subredditId: t
				}) => Object(p.r)(e, t),
				ownedBadge: p.l,
				subreddit: (e, {
					subredditId: t
				}) => e.subreddits.models[t]
			});
			var mt = Object(he.c)(Object(r.b)(lt, (e, {
					badge: t,
					subredditId: a
				}) => ({
					onApply: () => e(Object(Ze.b)({
						badge: t,
						subredditId: a,
						placement: t.placement
					})),
					onCloseModal: () => e(Object(ge.f)()),
					onPurchased: () => {
						e(Object(Je.f)({
							kind: tt.b.SuccessCommunityGreen,
							text: g.fbt._("Congratulations! You've bought a badge!", null, {
								hk: "3smVrt"
							})
						})), e(Object(Ze.d)(a, t))
					}
				}))((function(e) {
					const t = e.subreddit ? e.subreddit.name : "",
						a = Object(et.a)(),
						s = je()();
					return n.a.createElement("footer", {
						className: Object(b.a)(e.className, it.a.container)
					}, n.a.createElement("div", {
						className: it.a.wrapper
					}, n.a.createElement("div", {
						className: it.a.description
					}, !Object(l.e)(e.badge) && !e.ownedBadge && e.badge.price && !Object(l.f)(e.badge) && n.a.createElement("div", {
						className: it.a.price
					}, g.fbt._("Buy for {price}", [g.fbt._param("price", Object(Qe.b)(e.badge.price, {
						locale: a,
						forceDecimals: !0
					}))], {
						hk: "hW9B0"
					})), !Object(l.e)(e.badge) && !e.ownedBadge && Object(l.f)(e.badge) && n.a.createElement("div", {
						className: it.a.price
					}, g.fbt._("Get monthly reward badges by purchasing a {membershipAlt}!", [g.fbt._param("membershipAlt", e.meta.membershipAlt)], {
						hk: "19iqHa"
					}))), e.ownedBadge && n.a.createElement(_e.l, {
						className: it.a.button,
						disabled: e.alreadyApplied,
						onClick: e.onApply
					}, e.alreadyApplied ? g.fbt._("Applied", null, {
						hk: "3zELtm"
					}) : g.fbt._("Apply", null, {
						hk: "19U1iU"
					})), !Object(l.e)(e.badge) && !e.ownedBadge && Object(l.f)(e.badge) && n.a.createElement(_e.n, {
						className: it.a.button,
						disabled: !e.subreddit,
						to: Object(fe.a)(t, s),
						onClick: t => {
							t.stopPropagation(), e.sendEvent(e => ({
								correlationId: s,
								source: "meta",
								action: "click",
								noun: "subscription_gallery_open_learn_more",
								...ye.o(e),
								subreddit: ye.jb(e)
							})), e.onCloseModal()
						}
					}, g.fbt._("Learn More", null, {
						hk: "4ptmhd"
					})), !Object(l.e)(e.badge) && !e.ownedBadge && e.badge.price && !Object(l.f)(e.badge) && n.a.createElement(ot.a, {
						className: it.a.purchaseButton,
						correlationId: s,
						price: e.badge.price,
						productId: e.badge.id,
						subreddit: e.subreddit,
						onPaymentSuccessful: e.onPurchased
					})), !Object(l.e)(e.badge) && !e.ownedBadge && e.badge.price && n.a.createElement(dt, {
						className: it.a.legal
					}))
				}))),
				ut = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Hide/index.m.less"),
				pt = a.n(ut);
			var bt = Object(r.b)(void 0, (e, {
					badge: t,
					subredditId: a
				}) => ({
					onApply: () => e(Object(Ze.b)({
						badge: t,
						subredditId: a,
						placement: m.b[t.badgeType]
					}))
				}))((function(e) {
					return n.a.createElement("div", {
						className: Object(b.a)(e.className, pt.a.container)
					}, e.alreadyApplied ? n.a.createElement("div", {
						className: pt.a.text
					}, function(e) {
						switch (e.badgeType) {
							case m.a.Achievement:
								return g.fbt._("You do not currently have an Achievement Badge selected.", null, {
									hk: "2MhvgS"
								});
							case m.a.Cosmetic:
								return g.fbt._("You do not currently have a Style Badge selected.", null, {
									hk: "4uRiIX"
								});
							case m.a.Loyalty:
								return g.fbt._("You do not currently have a Loyalty Badge selected.", null, {
									hk: "34Q4VK"
								})
						}
					}(e.badge)) : n.a.createElement(s.Fragment, null, n.a.createElement("div", {
						className: pt.a.text
					}, function(e) {
						switch (e.badgeType) {
							case m.a.Achievement:
								return g.fbt._("Hide your Achievement Badge?", null, {
									hk: "4cRkIB"
								});
							case m.a.Cosmetic:
								return g.fbt._("Hide your Style Badge?", null, {
									hk: "2Ljc6w"
								});
							case m.a.Loyalty:
								return g.fbt._("Hide your Loyalty Badge?", null, {
									hk: "3H5CTM"
								})
						}
					}(e.badge)), n.a.createElement(_e.l, {
						className: pt.a.hide,
						disabled: e.alreadyApplied,
						onClick: e.onApply
					}, g.fbt._("Hide", null, {
						hk: "2r7mgg"
					}))))
				})),
				gt = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/index.m.less"),
				ht = a.n(gt);

			function _t(e) {
				return "removeBadge" === e.type
			}
			const ft = Object(d.c)({
				alreadyApplied: (e, {
					badge: t,
					subredditId: a,
					type: s
				}) => {
					const n = Object(p.f)(e, a)[s];
					return n ? n.id === t.id : "removeBadge" === t.type
				},
				lastUnlockedLoyaltyBadge: (e, {
					subredditId: t
				}) => {
					const a = Object(p.n)(e, t, m.a.Loyalty)[0];
					if (a) return Ye()(a.unlocked)
				}
			});
			var yt = Object(r.b)(ft)((function(e) {
					return _t(e.badge) ? n.a.createElement("div", {
						className: Object(b.a)(e.className, ht.a.container)
					}, n.a.createElement(bt, {
						alreadyApplied: e.alreadyApplied,
						className: ht.a.hide,
						badge: e.badge,
						subredditId: e.subredditId
					})) : n.a.createElement("div", {
						className: Object(b.a)(e.className, ht.a.container)
					}, n.a.createElement(Xe.a, {
						badge: e.badge,
						className: ht.a.content,
						subredditId: e.subredditId,
						type: e.type
					}, n.a.createElement($e.a, {
						className: ht.a.dismiss,
						onClick: e.onDeselect
					})), function(e) {
						return e.type === m.a.Cosmetic || (!(e.type !== m.a.Achievement || _t(e.badge) || !Object(l.e)(e.badge)) || !(e.type !== m.a.Loyalty || !e.lastUnlockedLoyaltyBadge || e.badge.id !== e.lastUnlockedLoyaltyBadge.id))
					}(e) && n.a.createElement(mt, {
						alreadyApplied: e.alreadyApplied,
						className: ht.a.footer,
						badge: e.badge,
						subredditId: e.subredditId
					}))
				})),
				vt = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/index.m.less"),
				jt = a.n(vt);
			const Bt = {
					stiffness: 210,
					damping: 20
				},
				xt = () => ({
					bottom: -200
				}),
				Et = () => ({
					bottom: Object(Ue.spring)(-200, Bt)
				}),
				wt = [40, 68, 96];

			function Ot(e, t) {
				return wt.slice(0, e.length)[e.findIndex(e => e.id === t.id)]
			}

			function Ct(e) {
				return "removeBadge" !== e.type
			}
			const Nt = Object(d.c)({
				subreddit: (e, {
					subredditId: t
				}) => e.subreddits.models[t]
			});
			var St = Object(r.b)(Nt, e => ({
					onClose: () => e(Object(ge.f)())
				}))((function(e) {
					const t = e.subreddit ? e.subreddit.name : "Community",
						a = Object(Ge.a)(e.badges.filter(Ct)),
						s = a.find(t => t.placement === m.b[e.previewedBadge.type]);
					return n.a.createElement("div", {
						className: Object(b.a)(e.className, jt.a.container)
					}, n.a.createElement("article", {
						className: jt.a.content
					}, n.a.createElement("header", {
						className: jt.a.header
					}, g.fbt._("Edit {communityName} Badges", [g.fbt._param("communityName", t)], {
						hk: "3R1TMF"
					}), n.a.createElement(P.a, {
						className: jt.a.close,
						onClick: e.onClose
					})), n.a.createElement("div", {
						className: jt.a.contentBackground
					}), n.a.createElement("div", {
						className: jt.a.commentPreviewLabel
					}, g.fbt._("comment preview", null, {
						hk: "Lhdaw"
					})), n.a.createElement("div", {
						className: Object(b.a)(jt.a.commentPreviewContainer, {
							[jt.a.previewClosed]: !e.previewedBadge.badge,
							[jt.a.previewOpen]: !!e.previewedBadge.badge
						})
					}, n.a.createElement("div", {
						className: jt.a.commentPreview
					}, n.a.createElement("div", {
						className: jt.a.voteContainer
					}, n.a.createElement(Ve.a, {
						className: jt.a.vote
					}), n.a.createElement(We.a, {
						className: jt.a.vote
					})), s && n.a.createElement(n.a.Fragment, null, n.a.createElement(ze.a, {
						className: jt.a.radialHighlightOuter,
						style: {
							left: Ot(a, s)
						}
					}), n.a.createElement(ze.a, {
						className: jt.a.radialHighlightInner,
						style: {
							left: Ot(a, s)
						}
					})), n.a.createElement(qe.a, {
						showExplanation: !0,
						badges: a,
						subredditId: e.subredditId
					}))), n.a.createElement(Ue.TransitionMotion, {
						defaultStyles: [],
						styles: e.previewedBadge.badge ? [{
							data: e.previewedBadge.badge,
							key: e.previewedBadge.badge.id,
							style: {
								bottom: Object(Ue.spring)(16, Bt)
							}
						}] : [],
						willEnter: xt,
						willLeave: Et
					}, t => n.a.createElement(n.a.Fragment, null, t.map(t => n.a.createElement("div", {
						className: jt.a.badgePreviewContainer,
						key: t.key,
						style: {
							bottom: t.style.bottom
						}
					}, n.a.createElement(yt, {
						badge: t.data,
						subredditId: e.subredditId,
						type: e.previewedBadge.type,
						onDeselect: e.onDeselect
					})))))))
				})),
				kt = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.m.less"),
				Mt = a.n(kt);

			function Pt(e) {
				return !!e
			}
			class Lt extends n.a.Component {
				constructor(e) {
					super(e), this.handleBadgeSelection = (e, t) => {
						this.setState(a => {
							const s = a.selectedBadges[e];
							return {
								selectedBadges: {
									...a.selectedBadges,
									[e]: s && s.id === t.id ? void 0 : t
								}
							}
						})
					};
					const t = {
						...e.appliedBadges
					};
					if (e.initialSelectedBadge) {
						t[Object(m.d)(e.initialSelectedBadge.placement)] = e.initialSelectedBadge
					}
					this.state = {
						selectedBadges: t,
						prevBadgeType: e.currentBadgeType,
						prevView: e.currentView
					}
				}
				static getDerivedStateFromProps(e, t) {
					return {
						prevBadgeType: e.currentBadgeType,
						prevView: e.currentView,
						selectedBadges: e.currentBadgeType !== t.prevBadgeType || e.currentView !== t.prevView ? e.appliedBadges : t.selectedBadges
					}
				}
				render() {
					const {
						account: e,
						subreddit: t
					} = this.props;
					if (!t || !e) return null;
					const a = {
						badge: this.state.selectedBadges[this.props.currentBadgeType],
						type: this.props.currentBadgeType
					};
					return n.a.createElement("div", {
						className: Mt.a.container
					}, n.a.createElement("article", {
						className: Mt.a.content
					}, n.a.createElement(Fe, {
						appliedBadges: this.props.appliedBadges,
						className: Mt.a.leftRail,
						selectedBadges: this.state.selectedBadges,
						subredditId: t.id,
						userId: e.id,
						onSelectBadge: this.handleBadgeSelection
					}), n.a.createElement(St, {
						appliedBadge: this.props.appliedBadges[this.props.currentBadgeType],
						badges: [this.state.selectedBadges[m.a.Loyalty] || this.props.appliedBadges[m.a.Loyalty], this.state.selectedBadges[m.a.Achievement] || this.props.appliedBadges[m.a.Achievement], this.state.selectedBadges[m.a.Cosmetic] || this.props.appliedBadges[m.a.Cosmetic]].filter(Pt),
						className: Mt.a.preview,
						previewedBadge: a,
						subredditId: t.id,
						onDeselect: () => {
							a.badge && this.handleBadgeSelection(a.type, a.badge)
						}
					})))
				}
			}
			const It = Object(d.c)({
					account: e => e.user.account,
					appliedBadges: (e, t) => {
						const a = Object(c.r)(e, t);
						return a ? Object(p.f)(e, a.id) : {
							[m.a.Loyalty]: void 0,
							[m.a.Achievement]: void 0,
							[m.a.Cosmetic]: void 0
						}
					},
					currentBadgeType: e => e.economics.currentBadgeManagementScreen.badgeType,
					currentView: e => e.economics.currentBadgeManagementScreen.view,
					initialSelectedBadge: (e, t) => {
						const a = e.economics.currentBadgeManagementScreen.view,
							s = Object(c.r)(e, t);
						let n;
						if (s && e.economics.currentModalArgs && e.economics.currentModalArgs.badge) {
							const t = e.economics.currentModalArgs.badge.type,
								a = e.economics.subredditPremium[s.id];
							if (a && a.status === u.a.Fetched) {
								(n = a.data.userOwnedBadges.find(e => e.type === t)) || (n = a.raw.products[t])
							}
						}
						if (s && !n && a === m.c.Gallery) {
							const t = Object(p.n)(e, s.id, m.a.Cosmetic, m.c.Gallery)[0];
							if (t) {
								const e = t.locked[0];
								e && (Object(l.f)(e) || e.price) && (n = t.locked[0])
							}
						}
						return n
					},
					subreddit: c.r
				}),
				At = Object(r.b)(It),
				Tt = Object(c.u)();
			t.default = Object(i.a)("spSpecialMemberships", Object(o.a)(Tt(At(Lt))))
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UserPreview/index.m.less": function(e, t, a) {
			e.exports = {
				clickable: "_2W-yYYgiKN7Nv6X-LYi_9w",
				container: "_2FOpaOYxDZOwfOdaggJpwm",
				description: "_2Q0iZfK75k4af7Yh_QhiFm",
				user: "_3B1S9qGju-2qKwMcvkVFtz",
				userContainer: "_2Y-fftIz65RlW68o233ly9"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UserPreview/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				r = a("./node_modules/react-redux/es/index.js"),
				d = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				c = a("./src/reddit/actions/tooltip.ts"),
				i = a("./src/reddit/helpers/economics/sortBadges.ts"),
				l = a("./src/reddit/hooks/useUserContext.ts"),
				m = a("./src/reddit/models/Badge/managementPage.ts"),
				u = a("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				p = a("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				b = a("./src/reddit/components/Economics/SubredditPremium/Badges/UserPreview/index.m.less"),
				g = a.n(b);
			const {
				fbt: h
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(r.b)(null, (e, {
				subredditId: t
			}) => ({
				onShowTooltip: t => e(Object(c.f)({
					tooltipId: t
				})),
				onHideTooltip: () => e(Object(c.i)()),
				onOpenModal: () => e(Object(o.c)({
					subredditId: t,
					initialView: m.c.MyBadges
				})),
				onOpenUploadDialog: () => e(Object(o.j)())
			}))((function(e) {
				const {
					currentUser: t
				} = Object(l.a)();
				if (!t) return null;
				const a = Object(i.a)(e.badges),
					s = a[a.length - 1],
					r = s && s.extra && s.extra.style && s.extra.style.backgroundColor,
					o = s && s.extra && s.extra.style && s.extra.style.color;
				return n.a.createElement("div", {
					className: Object(d.a)(e.className, g.a.container, {
						[g.a.clickable]: e.clickToOpenModal
					}),
					style: {
						backgroundColor: r || (e.showDefaultBackground ? "var(--newRedditTheme-field)" : void 0)
					},
					onClick: () => e.clickToOpenModal && e.onOpenModal()
				}, n.a.createElement("div", {
					className: g.a.userContainer
				}, n.a.createElement(u.a, {
					badges: a,
					subredditId: e.subredditId,
					uniqueIdentifier: e.uniqueIdentifier || "",
					userId: t.id,
					onShowTooltip: e.uniqueIdentifier ? e.onShowTooltip : () => {},
					onHideTooltip: e.uniqueIdentifier ? e.onHideTooltip : () => {},
					onOpenUploadDialog: e.onOpenUploadDialog
				}), n.a.createElement(p.a, {
					badges: a,
					subredditId: e.subredditId,
					userId: t.id
				}, n.a.createElement("span", {
					className: g.a.user
				}, t.username || t.displayText || "username"))), e.showExplanation && n.a.createElement("div", {
					className: g.a.description
				}, r || o ? r ? h._("Username and content is distinguished with a color matching the last badge.", null, {
					hk: "M24zz"
				}) : h._("Username is distinguished with a color matching the last badge.", null, {
					hk: "2fnnbI"
				}) : h._("This is how your username will appear.", null, {
					hk: "meyGf"
				})))
			}))
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts": function(e, t, a) {
			"use strict";
			var s, n, r, d;

			function o(e) {
				const {
					platform: t,
					playerType: a,
					region: s,
					style: n
				} = e;
				return `https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/lfg/lfg_badges_${n}/${s}_${t}_${a}_${n}.svg`
			}
			a.d(t, "a", (function() {
					return s
				})), a.d(t, "b", (function() {
					return n
				})), a.d(t, "c", (function() {
					return r
				})), a.d(t, "d", (function() {
					return o
				})),
				function(e) {
					e.pc = "PC", e.phone = "Phone", e.ps = "PlayStation", e.switch = "Switch", e.xbox = "XBox"
				}(s || (s = {})),
				function(e) {
					e.bot = "Bot", e.casual = "Casual", e.competitive = "Competitive", e.goat = "G.O.A.T", e.noob = "Noob"
				}(n || (n = {})),
				function(e) {
					e.asia = "Asia", e.brasil = "Brazil", e.europe = "Europe", e.me = "Middle East", e.nae = "North America East", e.naw = "North America West", e.oceania = "Oceania"
				}(r || (r = {})),
				function(e) {
					e.bw = "bw", e.color = "color"
				}(d || (d = {}))
		},
		"./src/reddit/components/Economics/SubredditPremium/constants.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return o
			})), a.d(t, "b", (function() {
				return c
			})), a.d(t, "c", (function() {
				return i
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = a("./src/config.ts"),
				n = a("./node_modules/lodash/flattenDeep.js"),
				r = a.n(n),
				d = a("./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts");
			const o = `${s.a.assetPath}/img/memberships/paywall/crown.gif`,
				c = {
					karma_10k_badge: 1e4,
					karma_20k_badge: 2e4,
					karma_50k_badge: 5e4,
					karma_100k_badge: 1e5,
					karma_150k_badge: 15e4,
					karma_200k_badge: 2e5
				},
				i = new Set(r()(Object.keys(d.a).map(e => Object.keys(d.b).map(t => Object.keys(d.c).map(a => `${a}_${e}_${t}_badge`)))))
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, a) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				r = a("./src/lib/classNames/index.ts"),
				d = a("./src/reddit/controls/LoadingIcon/index.m.less"),
				o = a.n(d);
			t.a = ({
				center: e,
				className: t,
				sizePx: a = 10
			}) => n.a.createElement("div", {
				className: Object(r.a)(o.a.loadingIcon, t, {
					[o.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${a}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			})), a.d(t, "b", (function() {
				return d
			}));
			var s = a("./src/config.ts"),
				n = a("./src/reddit/endpoints/governance/requester.ts");
			const r = (e, t) => Object(n.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/orders`,
					data: {
						price: "0",
						currency: "usd",
						products: [{
							productId: t.productId,
							quantity: "1"
						}],
						subredditId: t.subredditId
					}
				}),
				d = (e, t) => Object(n.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/product-collections/${t}?types=emotes_pack`
				})
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return i
			})), a.d(t, "b", (function() {
				return l
			})), a.d(t, "d", (function() {
				return m
			})), a.d(t, "e", (function() {
				return u
			})), a.d(t, "c", (function() {
				return p
			}));
			var s = a("./src/config.ts"),
				n = a("./src/lib/omitHeaders/index.ts"),
				r = a("./src/reddit/constants/headers.ts"),
				d = a("./src/reddit/endpoints/governance/requester.ts"),
				o = a("./src/reddit/helpers/governanceErrorText/index.ts"),
				c = a("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function i(e, t) {
				return Object(d.a)(e, {
					endpoint: `${s.a.metaUrl}/communities/${t.subredditId}/me`,
					method: "patch",
					data: {
						specialMemberships: {
							settings: {
								renew: !1
							}
						}
					}
				})
			}

			function l(e, t) {
				return Object(d.a)(e, {
					endpoint: `${s.a.metaUrl}/ps/me/braintree-client-tokens`,
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function m(e, t) {
				return Object(d.a)(e, {
					endpoint: `${s.a.metaUrl}/orders`,
					method: "post",
					data: {
						currency: "usd",
						orderTarget: "special_membership",
						price: t.trial ? "0" : t.price,
						products: [{
							productId: t.productId,
							quantity: "1"
						}],
						providerArgs: {
							paymentNonce: t.nonce,
							savePaymentMethod: !0
						},
						providerName: "braintree",
						subredditId: t.subredditId,
						targetArgs: {
							renew: !0,
							receiverName: t.username
						}
					}
				})
			}

			function u(e, t) {
				return Object(d.a)(Object(n.a)(e, [r.a]), {
					endpoint: `${e.apiUrl}/api/info?id=${t.join(",")}`,
					method: "get"
				}).then(e => {
					if (e.ok) {
						const t = e.body.data.children.map(({
							data: e
						}) => Object(c.a)(e)).reduce((e, t) => (e[t.id] = t, e), {});
						return {
							...e,
							body: t
						}
					}
					return e
				})
			}
			async function p(e, t) {
				const a = await Object(d.a)(e, {
					endpoint: `${s.a.metaUrl}/orders`,
					method: "post",
					data: {
						...t,
						currency: "points",
						orderTarget: "special_membership",
						products: [{
							productId: "provisional_membership",
							quantity: "1"
						}],
						targetArgs: {
							renew: !1
						}
					}
				});
				if (!a.ok) throw new Error(`Error fetching provisional membership: ${Object(o.b)(a.error)}`);
				return a.body
			}
		},
		"./src/reddit/endpoints/economics/subredditPremium.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return l
			})), a.d(t, "b", (function() {
				return m
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = a("./node_modules/lodash/merge.js"),
				n = a.n(s),
				r = a("./src/config.ts"),
				d = a("./src/reddit/endpoints/governance/badges.ts"),
				o = a("./src/reddit/endpoints/governance/community.ts"),
				c = a("./src/reddit/endpoints/governance/products/badges.ts"),
				i = a("./src/reddit/endpoints/governance/requester.ts");
			async function l(e, t, a) {
				const s = {
						subredditId: t,
						badges: {},
						errors: {},
						collections: {},
						products: {},
						subscription: void 0,
						userOwnedBadges: []
					},
					l = function(e, t) {
						return Object(i.a)(e, {
							method: "get",
							endpoint: `${r.a.metaUrl}/product-collections/${t}?types=badge`
						})
					}(e, t),
					m = Object(o.a)(e, {
						subredditId: t
					}),
					u = Object(c.b)(e, t),
					p = Object(d.c)(e, t, a),
					[b, g, h, _] = await Promise.all([l, m, u, p]);
				if (b.ok ? s.collections = b.body : s.errors.collections = b.error, g.ok) {
					const e = g.body;
					s.subscription = e.specialMemberships, s.communityRaw = e
				}
				return h.ok ? s.products = h.body : s.errors.products = h.error, _.ok ? (n()(s.badges, _.body.badges), s.userOwnedBadges = _.body.userOwnedBadges) : s.errors.userBadges = _.error, s
			}
			const m = (e, t) => Object(i.a)(e, {
				endpoint: `${r.a.metaUrl}/products/${t}?types=badge,membership`,
				method: "delete"
			})
		},
		"./src/reddit/endpoints/governance/community.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return d
			}));
			var s = a("./src/config.ts"),
				n = a("./src/lib/constants/index.ts"),
				r = a("./src/reddit/endpoints/governance/requester.ts");

			function d(e, t) {
				return Object(r.a)(e, {
					endpoint: `${s.a.metaUrl}/communities/${t.subredditId}/me`,
					method: n.jb.GET
				})
			}
		},
		"./src/reddit/helpers/economics/membershipPage.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			}));
			var s = a("./src/lib/permalinkToOverlayLocation/index.ts");

			function n(e, t) {
				return Object(s.a)(`/web/special-membership/${e}?corr=${t}`)
			}
		},
		"./src/reddit/helpers/economics/setupSubredditPremiumButton.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return d
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = a("./src/lib/currency/centsToDollars/index.ts"),
				n = a("./src/reddit/endpoints/economics/specialMembership.ts"),
				r = a("./src/reddit/helpers/loadThirdPartyScript.ts");
			async function d({
				apiContext: e,
				config: t,
				elementId: a,
				price: d,
				purchaseFn: o,
				username: c,
				onCancel: i,
				onClientLoad: l,
				onError: m,
				onSubmitting: u,
				onSuccess: p
			}) {
				const b = (e, t) => {
					if (!m) return;
					let a = e.toString ? e.toString() : "";
					a.toLowerCase().includes("object object") && (a = JSON.stringify(e)), m(e, a, t)
				};
				try {
					const [m] = await Promise.all([Object(n.b)(e, {
						username: c
					}), Object(r.b)()]);
					if (!m.ok) return void b(m.error, "/ps/me/braintree-client-tokens");
					const g = await braintree.client.create({
							authorization: m.body.clientToken
						}),
						h = await new Promise((e, t) => {
							braintree.paypalCheckout.create({
								client: g
							}, (a, s) => a ? t(a) : e(s))
						});
					l && l(), await paypal.Buttons({
						createBillingAgreement: "subscription" === t.type ? () => (u && u(), h.createPayment({
							amount: Object(s.a)(d(), !0),
							billingAgreementDescription: t.billingAgreement,
							currency: "USD",
							flow: "vault"
						})) : void 0,
						createOrder: "purchase" === t.type ? () => (u && u(), h.createPayment({
							amount: Object(s.a)(d(), !0),
							currency: "USD",
							flow: "checkout",
							intent: "capture"
						})) : void 0,
						style: {
							height: 32
						},
						onApprove: async e => {
							h.tokenizePayment(e).then(({
								nonce: e
							}) => o(e)).then(e => {
								e.ok ? p && p() : b(e.error, "/orders")
							})
						},
						onCancel: () => i && i(),
						onError: e => b(e, "paypalError")
					}).render(`#${a}`)
				} catch (g) {
					b(g, "paypalError")
				}
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return r
			})), a.d(t, "c", (function() {
				return d
			})), a.d(t, "a", (function() {
				return o
			}));
			var s = a("./node_modules/bignumber.js/bignumber.js"),
				n = a("./src/lib/prettyPrintNumber/index.ts");

			function r(e, t) {
				const a = new s.BigNumber(e),
					n = new s.BigNumber(t || 1);
				return a.dividedToIntegerBy(n).toString()
			}

			function d(e, t) {
				return Object(n.b)(parseInt(r(e, t), 10))
			}

			function o(e, t) {
				const a = new s.BigNumber(e),
					n = new s.BigNumber(t || 1);
				return a.multipliedBy(n).toFixed(0)
			}
		},
		"./src/reddit/icons/svgs/EyeCancel/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			var s = a("./node_modules/react/index.js"),
				n = a.n(s);

			function r(e) {
				return n.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("path", {
					d: "M13.6926 12.277L17.7076 16.293C18.0986 16.684 18.0986 17.316 17.7076 17.707C17.5126 17.902 17.2566 18 17.0006 18C16.7446 18 16.4886 17.902 16.2936 17.707L2.29361 3.70701C1.90261 3.31601 1.90261 2.68401 2.29361 2.29301C2.68461 1.90201 3.31661 1.90201 3.70761 2.29301L7.24661 5.83201C9.79961 4.73701 12.8686 5.21001 14.9496 7.29101L17.7076 10.049C18.0976 10.439 18.0976 11.072 17.7076 11.463C17.5116 11.658 17.2556 11.756 16.9996 11.756C16.7446 11.756 16.4886 11.658 16.2926 11.463L13.5356 8.70501C13.4987 8.66806 13.4583 8.63769 13.4178 8.60724C13.3859 8.58329 13.354 8.5593 13.3236 8.53201C13.7496 9.16801 13.9996 9.93301 13.9996 10.756C13.9996 11.296 13.8886 11.809 13.6926 12.277ZM2.29301 10.0488C1.90201 10.4398 1.90201 11.0718 2.29301 11.4628C2.68401 11.8538 3.31601 11.8538 3.70701 11.4628L5.87801 9.29081L4.46401 7.87681L2.29301 10.0488ZM6.00011 10.7559C6.00011 12.9649 7.79111 14.7559 10.0001 14.7559C10.4041 14.7559 10.7861 14.6779 11.1531 14.5669L6.17511 9.58791C6.06211 9.95791 6.00011 10.3499 6.00011 10.7559Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Twinkle/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			var s = a("./node_modules/react/index.js"),
				n = a.n(s);

			function r(e) {
				return n.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 48 48",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					d: "M24.75 0L23.25 0L23.25 22.188L7.56083 6.49881L6.50017 7.55947L22.1907 23.25L0 23.25L0 24.75L22.1895 24.75L6.49882 40.4406L7.55948 41.5013L23.25 25.8108L23.25 48H24.75L24.75 25.8093L40.4413 41.5006L41.502 40.4399L25.812 24.75L48 24.75V23.25L25.8108 23.25L41.5006 7.56017L40.4399 6.49951L24.75 22.1895L24.75 0Z"
				}))
			}
		},
		"./src/reddit/selectors/crypto/wallet.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			})), a.d(t, "b", (function() {
				return d
			})), a.d(t, "c", (function() {
				return o
			}));
			var s = a("./src/lib/initializeClient/installReducer.ts"),
				n = a("./src/reddit/reducers/features/crypto/index.ts");
			Object(s.a)({
				features: {
					crypto: n.a
				}
			});
			const r = (e, t) => {
					var a;
					return t && (null === (a = e.user.wallets[t.subredditId]) || void 0 === a ? void 0 : a.latest)
				},
				d = (e, t) => {
					var a;
					return null === (a = r(e, t)) || void 0 === a ? void 0 : a.publicAddress
				},
				o = (e, t) => {
					var a, s, n, r;
					return null === (r = null === (n = null === (s = null === (a = e.features) || void 0 === a ? void 0 : a.crypto) || void 0 === s ? void 0 : s.publicWallets) || void 0 === n ? void 0 : n[t.userId]) || void 0 === r ? void 0 : r[t.subredditId]
				}
		},
		"./src/reddit/selectors/products.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			})), a.d(t, "b", (function() {
				return r
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = a("./src/reddit/models/Product/index.ts");
			const n = (e, t) => {
					const a = e.products.models[t];
					if (a && a.type === s.a.Badge) return a
				},
				r = (e, {
					productId: t
				}) => {
					const a = e.products.models[t];
					if (a) {
						const s = a.subredditId,
							n = Object.keys(e.user.ownedBadges[s] || {}),
							r = e.badges.models,
							d = Date.now();
						let o = !1;
						return n.forEach(e => {
							const a = r[e];
							a && a.type === t && a.endsAt > d && (o = !0)
						}), o
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditPremiumBadgeManagement.b229bcd7b9e3798ada98.js.map