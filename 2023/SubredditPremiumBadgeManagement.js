// https://www.redditstatic.com/desktop2x/SubredditPremiumBadgeManagement.6bf4de7af2ccb22074b6.js
// Retrieved at 7/31/2023, 11:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditPremiumBadgeManagement"], {
		"./node_modules/lodash/_LazyWrapper.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseCreate.js"),
				a = s("./node_modules/lodash/_baseLodash.js"),
				r = 4294967295;

			function d(e) {
				this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = r, this.__views__ = []
			}
			d.prototype = n(a.prototype), d.prototype.constructor = d, e.exports = d
		},
		"./node_modules/lodash/_LodashWrapper.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseCreate.js"),
				a = s("./node_modules/lodash/_baseLodash.js");

			function r(e, t) {
				this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
			}
			r.prototype = n(a.prototype), r.prototype.constructor = r, e.exports = r
		},
		"./node_modules/lodash/_baseLodash.js": function(e, t) {
			e.exports = function() {}
		},
		"./node_modules/lodash/_baseSetData.js": function(e, t, s) {
			var n = s("./node_modules/lodash/identity.js"),
				a = s("./node_modules/lodash/_metaMap.js"),
				r = a ? function(e, t) {
					return a.set(e, t), e
				} : n;
			e.exports = r
		},
		"./node_modules/lodash/_composeArgs.js": function(e, t) {
			var s = Math.max;
			e.exports = function(e, t, n, a) {
				for (var r = -1, d = e.length, o = n.length, i = -1, c = t.length, l = s(d - o, 0), u = Array(c + l), m = !a; ++i < c;) u[i] = t[i];
				for (; ++r < o;)(m || r < d) && (u[n[r]] = e[r]);
				for (; l--;) u[i++] = e[r++];
				return u
			}
		},
		"./node_modules/lodash/_composeArgsRight.js": function(e, t) {
			var s = Math.max;
			e.exports = function(e, t, n, a) {
				for (var r = -1, d = e.length, o = -1, i = n.length, c = -1, l = t.length, u = s(d - i, 0), m = Array(u + l), p = !a; ++r < u;) m[r] = e[r];
				for (var b = r; ++c < l;) m[b + c] = t[c];
				for (; ++o < i;)(p || r < d) && (m[b + n[o]] = e[r++]);
				return m
			}
		},
		"./node_modules/lodash/_countHolders.js": function(e, t) {
			e.exports = function(e, t) {
				for (var s = e.length, n = 0; s--;) e[s] === t && ++n;
				return n
			}
		},
		"./node_modules/lodash/_createBind.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_createCtor.js"),
				a = s("./node_modules/lodash/_root.js"),
				r = 1;
			e.exports = function(e, t, s) {
				var d = t & r,
					o = n(e);
				return function t() {
					return (this && this !== a && this instanceof t ? o : e).apply(d ? s : this, arguments)
				}
			}
		},
		"./node_modules/lodash/_createCtor.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseCreate.js"),
				a = s("./node_modules/lodash/isObject.js");
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
					var s = n(e.prototype),
						r = e.apply(s, t);
					return a(r) ? r : s
				}
			}
		},
		"./node_modules/lodash/_createCurry.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_apply.js"),
				a = s("./node_modules/lodash/_createCtor.js"),
				r = s("./node_modules/lodash/_createHybrid.js"),
				d = s("./node_modules/lodash/_createRecurry.js"),
				o = s("./node_modules/lodash/_getHolder.js"),
				i = s("./node_modules/lodash/_replaceHolders.js"),
				c = s("./node_modules/lodash/_root.js");
			e.exports = function(e, t, s) {
				var l = a(e);
				return function a() {
					for (var u = arguments.length, m = Array(u), p = u, b = o(a); p--;) m[p] = arguments[p];
					var g = u < 3 && m[0] !== b && m[u - 1] !== b ? [] : i(m, b);
					return (u -= g.length) < s ? d(e, t, r, a.placeholder, void 0, m, g, void 0, void 0, s - u) : n(this && this !== c && this instanceof a ? l : e, this, m)
				}
			}
		},
		"./node_modules/lodash/_createHybrid.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_composeArgs.js"),
				a = s("./node_modules/lodash/_composeArgsRight.js"),
				r = s("./node_modules/lodash/_countHolders.js"),
				d = s("./node_modules/lodash/_createCtor.js"),
				o = s("./node_modules/lodash/_createRecurry.js"),
				i = s("./node_modules/lodash/_getHolder.js"),
				c = s("./node_modules/lodash/_reorder.js"),
				l = s("./node_modules/lodash/_replaceHolders.js"),
				u = s("./node_modules/lodash/_root.js"),
				m = 1,
				p = 2,
				b = 8,
				g = 16,
				h = 128,
				f = 512;
			e.exports = function e(t, s, _, v, y, j, B, x, E, O) {
				var w = s & h,
					S = s & m,
					C = s & p,
					N = s & (b | g),
					P = s & f,
					k = C ? void 0 : d(t);
				return function m() {
					for (var p = arguments.length, b = Array(p), g = p; g--;) b[g] = arguments[g];
					if (N) var h = i(m),
						f = r(b, h);
					if (v && (b = n(b, v, y, N)), j && (b = a(b, j, B, N)), p -= f, N && p < O) {
						var I = l(b, h);
						return o(t, s, e, m.placeholder, _, b, I, x, E, O - p)
					}
					var M = S ? _ : this,
						L = C ? M[t] : t;
					return p = b.length, x ? b = c(b, x) : P && p > 1 && b.reverse(), w && E < p && (b.length = E), this && this !== u && this instanceof m && (L = k || d(L)), L.apply(M, b)
				}
			}
		},
		"./node_modules/lodash/_createPartial.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_apply.js"),
				a = s("./node_modules/lodash/_createCtor.js"),
				r = s("./node_modules/lodash/_root.js"),
				d = 1;
			e.exports = function(e, t, s, o) {
				var i = t & d,
					c = a(e);
				return function t() {
					for (var a = -1, d = arguments.length, l = -1, u = o.length, m = Array(u + d), p = this && this !== r && this instanceof t ? c : e; ++l < u;) m[l] = o[l];
					for (; d--;) m[l++] = arguments[++a];
					return n(p, i ? s : this, m)
				}
			}
		},
		"./node_modules/lodash/_createRecurry.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_isLaziable.js"),
				a = s("./node_modules/lodash/_setData.js"),
				r = s("./node_modules/lodash/_setWrapToString.js"),
				d = 1,
				o = 2,
				i = 4,
				c = 8,
				l = 32,
				u = 64;
			e.exports = function(e, t, s, m, p, b, g, h, f, _) {
				var v = t & c;
				t |= v ? l : u, (t &= ~(v ? u : l)) & i || (t &= ~(d | o));
				var y = [e, t, p, v ? b : void 0, v ? g : void 0, v ? void 0 : b, v ? void 0 : g, h, f, _],
					j = s.apply(void 0, y);
				return n(e) && a(j, y), j.placeholder = m, r(j, e, t)
			}
		},
		"./node_modules/lodash/_createWrap.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseSetData.js"),
				a = s("./node_modules/lodash/_createBind.js"),
				r = s("./node_modules/lodash/_createCurry.js"),
				d = s("./node_modules/lodash/_createHybrid.js"),
				o = s("./node_modules/lodash/_createPartial.js"),
				i = s("./node_modules/lodash/_getData.js"),
				c = s("./node_modules/lodash/_mergeData.js"),
				l = s("./node_modules/lodash/_setData.js"),
				u = s("./node_modules/lodash/_setWrapToString.js"),
				m = s("./node_modules/lodash/toInteger.js"),
				p = "Expected a function",
				b = 1,
				g = 2,
				h = 8,
				f = 16,
				_ = 32,
				v = 64,
				y = Math.max;
			e.exports = function(e, t, s, j, B, x, E, O) {
				var w = t & g;
				if (!w && "function" != typeof e) throw new TypeError(p);
				var S = j ? j.length : 0;
				if (S || (t &= ~(_ | v), j = B = void 0), E = void 0 === E ? E : y(m(E), 0), O = void 0 === O ? O : m(O), S -= B ? B.length : 0, t & v) {
					var C = j,
						N = B;
					j = B = void 0
				}
				var P = w ? void 0 : i(e),
					k = [e, t, s, j, B, C, N, x, E, O];
				if (P && c(k, P), e = k[0], t = k[1], s = k[2], j = k[3], B = k[4], !(O = k[9] = void 0 === k[9] ? w ? 0 : e.length : y(k[9] - S, 0)) && t & (h | f) && (t &= ~(h | f)), t && t != b) I = t == h || t == f ? r(e, t, O) : t != _ && t != (b | _) || B.length ? d.apply(void 0, k) : o(e, t, s, j);
				else var I = a(e, t, s);
				return u((P ? n : l)(I, k), e, t)
			}
		},
		"./node_modules/lodash/_getData.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_metaMap.js"),
				a = s("./node_modules/lodash/noop.js"),
				r = n ? function(e) {
					return n.get(e)
				} : a;
			e.exports = r
		},
		"./node_modules/lodash/_getFuncName.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_realNames.js"),
				a = Object.prototype.hasOwnProperty;
			e.exports = function(e) {
				for (var t = e.name + "", s = n[t], r = a.call(n, t) ? s.length : 0; r--;) {
					var d = s[r],
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
			var s = /\{\n\/\* \[wrapped with (.+)\] \*/,
				n = /,? & /;
			e.exports = function(e) {
				var t = e.match(s);
				return t ? t[1].split(n) : []
			}
		},
		"./node_modules/lodash/_insertWrapDetails.js": function(e, t) {
			var s = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
			e.exports = function(e, t) {
				var n = t.length;
				if (!n) return e;
				var a = n - 1;
				return t[a] = (n > 1 ? "& " : "") + t[a], t = t.join(n > 2 ? ", " : " "), e.replace(s, "{\n/* [wrapped with " + t + "] */\n")
			}
		},
		"./node_modules/lodash/_isLaziable.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_LazyWrapper.js"),
				a = s("./node_modules/lodash/_getData.js"),
				r = s("./node_modules/lodash/_getFuncName.js"),
				d = s("./node_modules/lodash/wrapperLodash.js");
			e.exports = function(e) {
				var t = r(e),
					s = d[t];
				if ("function" != typeof s || !(t in n.prototype)) return !1;
				if (e === s) return !0;
				var o = a(s);
				return !!o && e === o[0]
			}
		},
		"./node_modules/lodash/_mergeData.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_composeArgs.js"),
				a = s("./node_modules/lodash/_composeArgsRight.js"),
				r = s("./node_modules/lodash/_replaceHolders.js"),
				d = "__lodash_placeholder__",
				o = 1,
				i = 2,
				c = 4,
				l = 8,
				u = 128,
				m = 256,
				p = Math.min;
			e.exports = function(e, t) {
				var s = e[1],
					b = t[1],
					g = s | b,
					h = g < (o | i | u),
					f = b == u && s == l || b == u && s == m && e[7].length <= t[8] || b == (u | m) && t[7].length <= t[8] && s == l;
				if (!h && !f) return e;
				b & o && (e[2] = t[2], g |= s & o ? 0 : c);
				var _ = t[3];
				if (_) {
					var v = e[3];
					e[3] = v ? n(v, _, t[4]) : _, e[4] = v ? r(e[3], d) : t[4]
				}
				return (_ = t[5]) && (v = e[5], e[5] = v ? a(v, _, t[6]) : _, e[6] = v ? r(e[5], d) : t[6]), (_ = t[7]) && (e[7] = _), b & u && (e[8] = null == e[8] ? t[8] : p(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = g, e
			}
		},
		"./node_modules/lodash/_metaMap.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_WeakMap.js"),
				a = n && new n;
			e.exports = a
		},
		"./node_modules/lodash/_realNames.js": function(e, t) {
			e.exports = {}
		},
		"./node_modules/lodash/_reorder.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_copyArray.js"),
				a = s("./node_modules/lodash/_isIndex.js"),
				r = Math.min;
			e.exports = function(e, t) {
				for (var s = e.length, d = r(t.length, s), o = n(e); d--;) {
					var i = t[d];
					e[d] = a(i, s) ? o[i] : void 0
				}
				return e
			}
		},
		"./node_modules/lodash/_replaceHolders.js": function(e, t) {
			var s = "__lodash_placeholder__";
			e.exports = function(e, t) {
				for (var n = -1, a = e.length, r = 0, d = []; ++n < a;) {
					var o = e[n];
					o !== t && o !== s || (e[n] = s, d[r++] = n)
				}
				return d
			}
		},
		"./node_modules/lodash/_setData.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseSetData.js"),
				a = s("./node_modules/lodash/_shortOut.js")(n);
			e.exports = a
		},
		"./node_modules/lodash/_setWrapToString.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_getWrapDetails.js"),
				a = s("./node_modules/lodash/_insertWrapDetails.js"),
				r = s("./node_modules/lodash/_setToString.js"),
				d = s("./node_modules/lodash/_updateWrapDetails.js");
			e.exports = function(e, t, s) {
				var o = t + "";
				return r(e, a(o, d(n(o), s)))
			}
		},
		"./node_modules/lodash/_updateWrapDetails.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayEach.js"),
				a = s("./node_modules/lodash/_arrayIncludes.js"),
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
				return n(r, (function(s) {
					var n = "_." + s[0];
					t & s[1] && !a(e, n) && e.push(n)
				})), e.sort()
			}
		},
		"./node_modules/lodash/_wrapperClone.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_LazyWrapper.js"),
				a = s("./node_modules/lodash/_LodashWrapper.js"),
				r = s("./node_modules/lodash/_copyArray.js");
			e.exports = function(e) {
				if (e instanceof n) return e.clone();
				var t = new a(e.__wrapped__, e.__chain__);
				return t.__actions__ = r(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
			}
		},
		"./node_modules/lodash/curry.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_createWrap.js"),
				a = 8;

			function r(e, t, s) {
				var d = n(e, a, void 0, void 0, void 0, void 0, void 0, t = s ? void 0 : t);
				return d.placeholder = r.placeholder, d
			}
			r.placeholder = {}, e.exports = r
		},
		"./node_modules/lodash/flattenDeep.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseFlatten.js"),
				a = 1 / 0;
			e.exports = function(e) {
				return (null == e ? 0 : e.length) ? n(e, a) : []
			}
		},
		"./node_modules/lodash/wrapperLodash.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_LazyWrapper.js"),
				a = s("./node_modules/lodash/_LodashWrapper.js"),
				r = s("./node_modules/lodash/_baseLodash.js"),
				d = s("./node_modules/lodash/isArray.js"),
				o = s("./node_modules/lodash/isObjectLike.js"),
				i = s("./node_modules/lodash/_wrapperClone.js"),
				c = Object.prototype.hasOwnProperty;

			function l(e) {
				if (o(e) && !d(e) && !(e instanceof n)) {
					if (e instanceof a) return e;
					if (c.call(e, "__wrapped__")) return i(e)
				}
				return new a(e)
			}
			l.prototype = r.prototype, l.prototype.constructor = l, e.exports = l
		},
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/lib/currency/cleanNumber/index.ts");

			function a(e, t) {
				const s = Object(n.a)(e),
					a = parseInt(s) / 100;
				return Math.floor(a) !== a || t ? a.toFixed(2) : String(a)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, s) {
			"use strict";

			function n(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
			s.d(t, "a", (function() {
				return n
			}))
		},
		"./src/lib/currency/currencies.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "f", (function() {
				return i
			})), s.d(t, "g", (function() {
				return c
			})), s.d(t, "e", (function() {
				return l
			}));
			var n, a = s("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.Real = "real", e.Crypto = "crypto", e.Reddit = "reddit"
			}(n || (n = {}));
			const r = "USD",
				d = "ETH",
				o = "COINS",
				i = [d, "BTC"],
				c = [o, "SUBREDDIT_POINTS", "GAME_TOKENS"],
				l = {
					COINS: () => a.fbt._("Coins", null, {
						hk: "1T2Y4p"
					}),
					SUBREDDIT_POINTS: () => a.fbt._("Subreddit points", null, {
						hk: "1ytOO3"
					}),
					GAME_TOKENS: () => a.fbt._("Game tokens", null, {
						hk: "16BUrU"
					})
				}
		},
		"./src/lib/localizeCurrency/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			}));
			var n = s("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				a = s("./src/lib/currency/centsToDollars/index.ts"),
				r = s("./src/lib/currency/currencies.ts"),
				d = s("./src/lib/prettyPrintNumber/index.ts"),
				o = s("./src/reddit/helpers/governance/tokens.ts"),
				i = s("./src/reddit/constants/intlSupport.ts");
			const c = function(e) {
					let {
						locale: t = n.DEFAULT_LOCALE,
						pretty: s,
						formatOptions: a
					} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const r = Number(e);
					return Object(i.c)() ? s ? Object(d.b)(r) : new Intl.NumberFormat(t, a).format(r) : u(r, s, t)
				},
				l = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const {
						locale: s = n.DEFAULT_LOCALE,
						pretty: d,
						formatOptions: c,
						displayConversion: l,
						forceDecimals: b,
						currency: g = t.currency || (t.type ? p(t.type) : r.c),
						type: h = t.type || (t.currency ? m(t.currency) : r.b.Real)
					} = t, f = Number(e), _ = String(e);
					switch (h) {
						case r.b.Reddit: {
							const e = r.e[g],
								t = e ? e() : g;
							return Object(i.c)() ? new Intl.NumberFormat(s, {
								currencyDisplay: "symbol",
								...c
							}).format(f) + " " + t : u(f, d, s, t)
						}
						case r.b.Crypto: {
							if (d) {
								return Object(o.d)(_, l) + " " + g
							}
							const e = Number(Object(o.c)(_, l));
							return Object(i.c)() ? new Intl.NumberFormat(s, {
								style: "currency",
								currency: g,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...c
							}).format(e) : u(e, d, s, g)
						}
						case r.b.Real:
						default: {
							const e = Number(Object(a.a)(_, b));
							return Object(i.c)() ? new Intl.NumberFormat(s, {
								style: "currency",
								currency: g,
								currencyDisplay: "symbol",
								notation: d ? "compact" : "standard",
								...c
							}).format(e) : u(e, d, s, g)
						}
					}
				},
				u = (e, t, s, n) => {
					return (t ? Object(d.b)(e) : e.toLocaleString(s)) + (n ? " " + n : "")
				},
				m = e => r.g.includes(e.toUpperCase()) ? r.b.Reddit : r.f.includes(e.toUpperCase()) ? r.b.Crypto : r.b.Real,
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
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "f", (function() {
				return m
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "h", (function() {
				return b
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "j", (function() {
				return h
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/modal.ts"),
				r = s("./src/reddit/constants/modals.ts"),
				d = s("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const o = Object(n.a)(d.a),
				i = Object(n.a)(d.b),
				c = Object(n.a)(d.c),
				l = Object(n.a)(d.d),
				u = Object(n.a)(d.e),
				m = Object(n.a)(d.f),
				p = Object(n.a)(d.g),
				b = Object(n.a)(d.h),
				g = Object(n.a)(d.i),
				h = e => Object(a.h)(r.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "g", (function() {
				return E
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "e", (function() {
				return S
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "f", (function() {
				return N
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/forOwn.js"),
				a = s.n(n),
				r = s("./src/reddit/actions/governance/errorToast.ts"),
				d = s("./src/reddit/endpoints/economics/emojis.ts"),
				o = s("./src/reddit/endpoints/economics/specialMembership.ts"),
				i = s("./src/reddit/endpoints/economics/subredditPremium.ts"),
				c = s("./src/reddit/endpoints/governance/badges.ts"),
				l = s("./src/config.ts"),
				u = s("./src/reddit/endpoints/governance/requester.ts");

			function m(e, t, s) {
				return Object(u.a)(e, {
					method: "get",
					endpoint: `${l.a.metaUrl}/products/${t}?owners=${s}` + "&types=emotes_pack,giphy"
				})
			}
			var p = s("./src/reddit/models/Badge/index.ts"),
				b = s("./src/reddit/models/Badge/managementPage.ts"),
				g = s("./src/reddit/models/Product/index.ts"),
				h = s("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				f = s("./src/reddit/selectors/economics.ts"),
				_ = s("./src/reddit/selectors/products.ts"),
				v = s("./src/reddit/actions/economics/me/thunkedActions.ts"),
				y = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function j(e) {
				return !!e && "removeBadge" === e.type
			}

			function B(e) {
				if (!j(e)) return e
			}
			const x = () => async (e, t, s) => {
				let {
					apiContext: n
				} = s;
				if (!t().user.account) return;
				await e(Object(v.b)({
					includeMemberships: !0
				}));
				const a = t().economics.me.data.specialMemberships || {},
					r = Object.keys(a);
				if (r.length) {
					const t = await Object(o.e)(n(), r);
					t.ok && e(Object(y.g)(t.body))
				}
			}, E = (e, t) => async (s, n, a) => {
				let {
					apiContext: r
				} = a;
				const d = n().user.account,
					o = n().economics.subredditPremium[e],
					c = !o || o.status !== h.a.Fetched || t;
				if (d && c) {
					const t = await Object(i.a)(r(), e, d.id);
					s(Object(y.i)(t))
				}
			}, O = e => async (t, s, n) => {
				let {
					apiContext: a
				} = n;
				const d = s(),
					o = d.user.account,
					i = Object(f.f)(d, e.subredditId),
					l = Object.keys(i).map(e => i[e]).filter(Boolean);
				if (o && e.badge) {
					let s, n;
					s = e.placement === p.a.First ? i[b.a.Loyalty] : e.placement === p.a.Second ? i[b.a.Achievement] : i[b.a.Cosmetic], t(Object(y.a)({
						...e,
						badge: B(e.badge),
						currentAppliedBadges: l,
						userId: o.id
					})), j(e.badge) && s ? n = await Object(c.a)(a(), e.subredditId, s.id, !1) : j(e.badge) || (n = await Object(c.a)(a(), e.subredditId, e.badge.id)), n && !n.ok && (t(Object(y.a)({
						...e,
						badge: s,
						currentAppliedBadges: l,
						userId: o.id
					})), Object(r.a)(t, n.error))
				}
			}, w = (e, t) => async (s, n, a) => {
				let {
					apiContext: r
				} = a;
				await s(E(e, !0));
				const d = n().economics.subredditPremium[e];
				if (d && d.status === h.a.Fetched) {
					const n = d.data.userOwnedBadges.find(e => e.type === t.id);
					n && (s(O({
						badge: n,
						subredditId: e,
						placement: n.placement
					})), s(Object(y.d)(b.c.MyBadges)))
				}
			}, S = e => async (t, s, n) => {
				let {
					apiContext: o
				} = n;
				const i = s().user.account,
					c = !s().economics.emotes[e],
					l = !s().economics.gifs[e];
				if (i && (c || l)) {
					const [s, n] = await Promise.all([Object(d.b)(o(), e), m(o(), e, i.id)]);
					if (!n.ok) return void Object(r.a)(t, n.error);
					const c = {
						emotes: [],
						emoteCollections: s.ok ? s.body : {},
						giphy: []
					};
					a()(n.body, e => {
						e.type === g.a.EmotesPack ? c.emotes.push(e) : e.type === g.a.Giphy && c.giphy.push(e)
					}), t(Object(y.e)({
						subredditId: e,
						products: c
					}))
				}
			}, C = (e, t, s) => async (n, a, r) => {
				let {
					apiContext: d
				} = r;
				if (await n(E(e, !0)), s && t) {
					const s = a(),
						r = Object(f.f)(s, e),
						d = Object(_.a)(s, t);
					if (!r[Object(b.d)(d.placement)] && d) {
						const t = Object(f.l)(s, {
							subredditId: e,
							badge: d
						});
						t && await n(O({
							badge: t,
							subredditId: e
						}))
					}
					n(Object(y.c)({
						subredditId: e,
						initialView: b.c.MyBadges
					}))
				}
			}, N = e => async (t, s, n) => {
				let {
					apiContext: a
				} = n;
				const {
					wallet: r
				} = await Object(o.c)(a(), e);
				t(Object(y.f)({
					wallet: r
				})), await t(E(e.subredditId, !0))
			}
		},
		"./src/reddit/components/Badges/UserDisplay/index.m.less": function(e, t, s) {
			e.exports = {
				addCustom: "LalRrQILNjt65y-p-QlWH",
				addCustomLink: "_3J2-xIxxxP9ISzeLWCOUVc",
				badgeHovercard: "FyLpt0kIWG1bTDWZ8HIL1",
				image: "_2ntJEAiwKXBGvxrJiqxx_2",
				wrapper: "_1SqBC7PQ5dMOdF0MhPIkA8"
			}
		},
		"./src/reddit/components/Badges/UserDisplay/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return w
			})), s.d(t, "c", (function() {
				return I
			})), s.d(t, "a", (function() {
				return M
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				o = s("./src/config.ts"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/higherOrderComponents/makeAsync.tsx");
			var m = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Promise.all([s.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), s.e("SubredditPremiumBadgeHovercardTooltip")]).then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
				}),
				p = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = s("./src/reddit/featureFlags/index.ts"),
				g = s("./src/reddit/helpers/economics/sortBadges.ts"),
				h = s("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				f = s("./src/reddit/models/Badge/index.ts");
			var _ = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("CustomBadgeHovercardTooltip").then(s.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				v = s("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				y = s.n(v);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const B = "add-custom-badge-tooltip",
				x = 100,
				E = 2 * x,
				O = 24;
			class w extends a.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, x)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, E)
					}
				}
				render() {
					const {
						badges: e
					} = this.props;
					if (this.props.usePlaceholder && !e.length) return a.a.createElement("img", {
						className: Object(i.a)(y.a.image, this.props.className),
						src: `${o.a.assetPath}/img/badges/placeholder.png`
					});
					const t = `${B}-${this.props.uniqueIdentifier}`,
						s = this.props.badgeSize || O;
					return a.a.createElement(n.Fragment, null, this.props.showAddCustom && a.a.createElement("div", {
						className: y.a.wrapper,
						id: t,
						onMouseEnter: () => this.handleMouseEnter(t),
						onMouseLeave: () => this.handleMouseLeave()
					}, a.a.createElement("button", {
						className: y.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, a.a.createElement(h.a, {
						className: y.a.addCustom
					})), a.a.createElement(_, {
						className: y.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: t,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(g.a)(e).map(e => {
						const t = Object(f.d)(s, s, e),
							r = `badges-display-${e.id}-${this.props.uniqueIdentifier}`;
						return a.a.createElement(n.Fragment, {
							key: `badges-fragement-${e.id}`
						}, a.a.createElement("div", {
							className: Object(i.a)(y.a.wrapper, this.props.className),
							key: `wrapper-${e.id}`,
							onMouseEnter: () => this.handleMouseEnter(r),
							onMouseLeave: () => this.handleMouseLeave()
						}, a.a.createElement("img", {
							className: y.a.image,
							id: r,
							key: e.id,
							src: t.url2x,
							srcSet: `${t.url}, ${t.url2x} 2x`,
							style: {
								height: `${s}px`
							}
						}), this.props.useHovercard ? a.a.createElement(m, {
							badge: e,
							correlationId: this.props.correlationId,
							className: y.a.badgeHovercard,
							key: `tooltip-${e.id}`,
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: r,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : a.a.createElement(p.c, {
							caretOnTop: !0,
							key: `tooltip-${e.id}`,
							tooltipId: r,
							text: e.title
						})))
					}))
				}
			}
			const S = [],
				C = Object(d.c)({
					badgeIds: (e, t) => {
						let {
							subredditId: s,
							userId: n
						} = t;
						var a;
						return (null === (a = e.users.appliedBadges[n]) || void 0 === a ? void 0 : a[s]) || S
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				N = Object(d.c)({
					badgeIds: (e, t) => {
						let {
							subredditId: s
						} = t;
						var n;
						const a = e.user.account;
						return a && (null === (n = e.users.appliedBadges[a.id]) || void 0 === n ? void 0 : n[s]) || S
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				P = e => ({
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onOpenUploadDialog: () => e(Object(c.j)())
				});

			function k(e) {
				const {
					badgeIds: t,
					allBadges: s,
					...n
				} = e, r = t.map(e => s[e]).filter(Boolean);
				return a.a.createElement(w, j({
					badges: r
				}, n))
			}
			const I = Object(r.b)(C, P)(k),
				M = Object(r.b)(N, P)(k)
		},
		"./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			const {
				fbt: r
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function d(e) {
				let {
					className: t
				} = e;
				return a.a.createElement("a", {
					href: "https://www.redditinc.com/policies/previews-terms",
					target: "_blank",
					rel: "noopener noreferrer",
					className: t
				}, r._("Previews Terms of Use", null, {
					hk: "2eTczn"
				}))
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/AchievementBadge/index.m.less": function(e, t, s) {
			e.exports = {
				badges: "_3mDmosajY6zTATVHnP5KOb",
				badgeGroup: "_19NY2fgfHU7p-zs-alMlLo",
				container: "F12I7lN71uLjLoKb2I-L0",
				header: "TEdYqDC_V6vKy_RaEYbj"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/Badge/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/BadgeGroup/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2nT4-JJZxYKvBlpZRQVIqu",
				description: "_19NLP3Fwro2Nib39QPnvRa",
				grid: "_36-xrwfqhHsRvGCkKbeRTx",
				item: "_3M3pxLy4RvHVKdF8oOOsTx",
				row: "_22jxxtl0tka2x7FPWkg8Hb",
				title: "_2lE-W3uhUjJqXSurdRAzBd"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/BadgeTypeSelector/Tab/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/BadgeTypeSelector/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_38oH-ihrQvnvD3p6J5LwNb",
				img: "_1A-b6EupVC5DI2HNuk4Y0z",
				tab: "ppH3ypMZXaJro43Cy6EN1",
				tabContent: "_2QtUlgSrwCoVhrK8C0L96W",
				tabText: "_1Fo0Rm0t4CFpxVLRwZ8tsq"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/Gallery/index.m.less": function(e, t, s) {
			e.exports = {
				badges: "_2MOQa7enWaO_R-AankQKvB",
				badgeGroup: "_2S6eQSyvhPUFchjGssqiud",
				container: "_22kGe_WYKpmrA9ArSBz2iM"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/HideBadge/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/LoyaltyBadge/index.m.less": function(e, t, s) {
			e.exports = {
				badges: "AFv-ZBaaGj1OcWdH_KdEy",
				badgeGroup: "_36rHAzSbN7bCUeF8THA1OD",
				container: "lsXAdBFPBGW_giUp2ix9p",
				header: "_1BHSXYtPP5_Dfvst5rtoZF"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/MyBadges/NoBadges/index.m.less": function(e, t, s) {
			e.exports = {
				container: "WVkDjoG0zQdAYjfOvdyLl",
				img: "_2I2hiGiPtVasvVKEAOGWCj",
				learnMore: "_1NMgkH5qbvjrMI7pGV2rEY",
				text: "_3fCITxJ-N-GY_5PtFIoOwY",
				title: "Zz8TSO15KMvqXqHyXw7LS"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/MyBadges/index.m.less": function(e, t, s) {
			e.exports = {
				addCustom: "_3X7LDqRPi4Hwh9hfzVr6IC",
				addCustomWrapper: "RddUdxS9STV2KBvIN9kFh",
				badges: "GJ6VHWR0HQLocIhsBRyWB",
				badgeGroup: "_1RA2gLXeKuuFqrA8Ob3Agm",
				container: "_1QpW8EIE51AEM0pAhcpBcB",
				noBadges: "_1vClDBPA-9hVrWoY1FzNd_"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/ScrollableArea/index.m.less": function(e, t, s) {
			e.exports = {
				bottomGradient: "_2W-SUh-dcZ13bZsSSUEng9",
				container: "_37_43cGsJiNCmp-DVE6VoM",
				scrollableContent: "_2FhFvh_BcFw7CLLSeC4nNk",
				topGradient: "_1KqLKwrD0XBp2whcHvwe54"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/SectionHead/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/ViewTypeSelector/Tab/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1wqnOAHeE9xlBrIG_5etYD",
				selected: "xhBHlGkiAnj8kXGPFxXGO"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/ViewTypeSelector/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_31A6PSuZaAm7howVRV3yMy",
				newDot: "_3iyfsnzmYgaYPYp2NKMM2e",
				tab: "_3ZIeCZ2bEh6Cf9nH1NV7aX"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				d = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				c = s("./src/reddit/models/Badge/index.ts"),
				l = s("./src/reddit/models/Badge/managementPage.ts"),
				u = s("./src/reddit/selectors/crypto/wallet.ts"),
				m = s("./src/reddit/selectors/economics.ts"),
				p = s("./node_modules/reselect/es/index.js"),
				b = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.m.less"),
				g = s.n(b);
			const h = Object(p.c)({
				collection: (e, t) => {
					let {
						badge: s,
						subredditId: n
					} = t;
					if (s.collections) {
						const t = Object.keys(s.collections);
						if (t.length) {
							const s = t[0];
							return Object(m.h)(e, {
								collectionId: s,
								subredditId: n
							})
						}
					}
				},
				progress: (e, t) => {
					let {
						badge: s,
						subredditId: n,
						type: a
					} = t;
					if (!Object(c.e)(s) && a === l.a.Achievement && i.b[s.id]) {
						const t = Object(u.a)(e, {
							subredditId: n
						});
						if (t) return {
							complete: parseInt(t.amount),
							total: i.b[s.id]
						}
					}
				}
			});
			t.a = Object(d.b)(h)((function(e) {
				const t = e.type === l.a.Loyalty ? n.fbt._("Loyalty Badge", null, {
						hk: "3C1yVX"
					}) : e.type === l.a.Achievement ? n.fbt._("Achievement Badge", null, {
						hk: "3ZCLHl"
					}) : n.fbt._("Style Badge", null, {
						hk: "1heMgq"
					}),
					s = e.collection ? e.collection.title : t,
					{
						url: a,
						url2x: d
					} = Object(c.d)(60, 60, e.badge),
					i = e.progress;
				return r.a.createElement("article", {
					className: Object(o.a)(e.className, {
						[g.a.fullWidth]: !!e.fullWidth
					})
				}, r.a.createElement("div", {
					className: g.a.wrapper
				}, r.a.createElement("img", {
					className: g.a.image,
					src: d,
					srcSet: `${a}, ${d} 2x`
				}), r.a.createElement("div", {
					className: g.a.info
				}, r.a.createElement("div", {
					className: g.a.collectionTitle,
					style: {
						color: e.collection && e.collection.highlight
					},
					title: s
				}, s), r.a.createElement("header", {
					className: g.a.title
				}, e.badge.title), i && i.complete < i.total && r.a.createElement("div", {
					className: g.a.progressContainer
				}, r.a.createElement("div", {
					className: g.a.progressBar
				}, r.a.createElement("div", {
					className: g.a.progressThumb,
					style: {
						width: `${i.complete/i.total*100}%`
					}
				})), r.a.createElement("div", {
					className: g.a.progressAmount
				}, function(e) {
					return `${`${Math.floor(e.complete/1e3)}k`}/${`${Math.floor(e.total/1e3)}k`}`
				}(i))), r.a.createElement("div", {
					className: g.a.description
				}, e.badge.description))), e.children)
			}))
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/Legal/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2ZTi5QrGM2DoaGzw3CUXpJ",
				link: "_3T7uMShYdunqBNsVsU6Jzf"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.m.less": function(e, t, s) {
			e.exports = {
				button: "_10ESw5cXwHBLWInQHjwYH2",
				container: "_1sfIwxqWpDotVXLjKV_2jO",
				loading: "_18AJBQlrwo3obCZczqf9Is",
				loadingIcon: "_3A8u5o0uPgpbYt-dE4XZiC",
				submitting: "_167697f4GfaciFsGrMXP-w"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/actions/governance/errorToast.ts"),
				i = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/contexts/ApiContext.tsx"),
				l = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = s("./src/reddit/endpoints/governance/products/badges.ts"),
				m = s("./src/reddit/helpers/economics/setupSubredditPremiumButton.ts"),
				p = s("./src/reddit/selectors/telemetry.ts"),
				b = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.m.less"),
				g = s.n(b);
			const h = "subreddit-premium-purchase-braintree";
			class f extends a.a.Component {
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
						Object(m.a)({
							apiContext: e,
							config: {
								type: "purchase"
							},
							elementId: this.getId(),
							price: () => this.props.price,
							purchaseFn: s => Object(u.d)(e, {
								nonce: s,
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
									...p.q(e),
									subreddit: p.nb(e)
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
					return a.a.createElement("div", {
						className: Object(d.a)(this.props.className, g.a.container)
					}, a.a.createElement("div", {
						className: Object(d.a)(g.a.button, {
							[g.a.loading]: this.state.loading,
							[g.a.submitting]: this.state.submitting
						}),
						id: this.getId()
					}), this.state.submitting && a.a.createElement(l.a, {
						className: g.a.loadingIcon,
						sizePx: 16
					}))
				}
			}
			t.a = Object(c.b)(Object(r.b)(void 0, (e, t) => {
				let {
					subreddit: s
				} = t;
				return {
					onError: t => Object(o.a)(e, t)
				}
			})(Object(i.c)(f)))
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/index.m.less": function(e, t, s) {
			e.exports = {
				button: "_1vdKo7uqCTdj1lwD40JJWv",
				description: "_1UVEhdH_kRKJ7YRJvu19j9",
				legal: "gceg0z1f43MmsRWqcrHWR",
				price: "_2vykDDj9CleWt88L-vGzLi",
				purchaseButton: "_1_8fBf5hh_j_kzNtAFItNi",
				wrapper: "AW3E2QVGRQAZ04bSKbSyP"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Hide/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3fdoyw0y7NTskxV1QUObns",
				hide: "_2KLxay4WmF6pjRbh1yUy7u",
				text: "_13oQyEu8B5hL8C9vyDZPl-"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2iFtTzgocWLjtsoE-CPOwo",
				content: "_3-ygUAsCp76q7Lpdp6VPSs",
				dismiss: "_3ILXOydVv0XesbiRWuVOwx",
				footer: "pN64cQ_emSADV0Zu2TZJr",
				hide: "_34f_7CfOVE_rExubx7qzKV"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2cRTFe2J952Y_M77Sns7vc",
				content: "_29rPcFDLuj9RXaeepKmA1G",
				header: "VlYLnpN6MdRIZVtrEYCDM",
				leftRail: "QB_B8uVPl5gOHzOFgZ5jl",
				preview: "gKO5JJ8acW9E8VvzkJGE"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				o = s("./src/higherOrderComponents/asModal/index.tsx"),
				i = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/featureFlags/component.tsx"),
				l = s("./src/reddit/models/Badge/index.ts"),
				u = s("./src/reddit/models/Badge/managementPage.ts"),
				m = s("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				p = s("./src/reddit/selectors/economics.ts"),
				b = s("./src/lib/classNames/index.ts"),
				g = s("./node_modules/fbt/lib/FbtPublic.js"),
				h = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				f = s("./src/reddit/icons/svgs/Lock/index.tsx"),
				_ = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/Badge/index.m.less"),
				v = s.n(_);

			function y(e) {
				const {
					url: t,
					url2x: s
				} = Object(l.d)(40, 40, e.model);
				return a.a.createElement("div", {
					className: Object(b.a)(e.className, v.a.container, {
						[v.a.applied]: !!e.applied,
						[v.a.selected]: !!e.selected,
						[v.a.selectable]: !!e.onSelect
					}),
					onClick: e.onSelect
				}, e.applied && a.a.createElement(h.a, {
					className: v.a.checkmark
				}), e.locked && a.a.createElement(f.a, {
					className: v.a.lock
				}), a.a.createElement("img", {
					className: v.a.image,
					src: s,
					srcSet: `${t}, ${s} 2x`
				}))
			}
			var j = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/BadgeGroup/index.m.less"),
				B = s.n(j);

			function x(e) {
				const {
					children: t,
					className: s,
					description: n,
					highlight: r,
					rowLength: d = 4,
					title: o
				} = e;
				if (!t.length) return null;
				const i = t.reduce((e, t) => {
					let s = e[e.length - 1];
					return s.length >= d && (s = [], e.push(s)), s.push(t), e
				}, [
					[]
				]);
				return a.a.createElement("div", {
					className: Object(b.a)(s, B.a.container)
				}, a.a.createElement("div", {
					className: B.a.centerContent
				}, o && a.a.createElement("header", {
					className: B.a.title,
					style: {
						color: r
					}
				}, o), n && a.a.createElement("div", {
					className: B.a.description
				}, n), a.a.createElement("article", {
					className: B.a.grid
				}, i.map((e, t) => a.a.createElement("div", {
					className: Object(b.a)(B.a.row),
					key: `${o}-${t}`
				}, e.map((e, s) => a.a.createElement("div", {
					className: Object(b.a)(B.a.item, B.a.itemBottom),
					key: `${o}-${t}-${s}`
				}, e)))))))
			}
			var E = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/ScrollableArea/index.m.less"),
				O = s.n(E);

			function w(e) {
				return a.a.createElement("div", {
					className: Object(b.a)(e.className, O.a.container)
				}, a.a.createElement("div", {
					className: O.a.scrollableContent
				}, e.children), a.a.createElement("div", {
					className: O.a.topGradient
				}), a.a.createElement("div", {
					className: O.a.bottomGradient
				}))
			}
			var S = s("./src/reddit/contexts/ApiContext.tsx"),
				C = s("./src/config.ts"),
				N = s("./src/reddit/endpoints/governance/requester.ts");
			async function P(e, t, s, n) {
				return Object(N.a)(e, {
					endpoint: `${C.a.metaUrl}/storage/${t}/me/${s}`,
					method: "patch",
					data: {
						on: n
					}
				}).then(e => !!e.ok)
			}
			async function k(e, t, s, n) {
				return Object(N.a)(e, {
					endpoint: `${C.a.metaUrl}/storage/${t}/me/${s}`,
					method: "get"
				}).then(e => e.ok ? Boolean(e.body && e.body.on) : n)
			}
			var I = s("./src/reddit/icons/svgs/Close/index.tsx"),
				M = s("./src/reddit/icons/svgs/Info/index.tsx"),
				L = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/SectionHead/index.m.less"),
				A = s.n(L),
				T = Object(S.b)(class extends a.a.Component {
					constructor(e) {
						super(e), this.closeDescription = () => {
							this.setState(e => ({
								...e,
								descriptionOpen: !1
							})), ((e, t, s) => P(e, t, s, !0))(this.props.apiContext(), this.props.subredditId, this.props.sectionName)
						}, this.openDescription = () => this.setState(e => ({
							...e,
							descriptionOpen: !0
						})), this.state = {
							descriptionOpen: !1
						}
					}
					componentDidMount() {
						((e, t, s) => k(e, t, s, !1))(this.props.apiContext(), this.props.subredditId, this.props.sectionName).then(e => this.setState({
							descriptionOpen: !e
						}))
					}
					render() {
						return a.a.createElement("div", {
							className: this.props.className
						}, a.a.createElement("header", {
							className: A.a.title
						}, this.props.title, a.a.createElement(M.a, {
							className: A.a.info,
							onClick: this.openDescription
						})), this.state.descriptionOpen && a.a.createElement("div", {
							className: A.a.description
						}, a.a.createElement("div", {
							className: A.a.descriptionHeader
						}, a.a.createElement("div", {
							className: A.a.descriptionTitle
						}, g.fbt._("about", null, {
							hk: "1XpxW5"
						})), a.a.createElement(I.a, {
							className: A.a.close,
							onClick: this.closeDescription
						})), a.a.createElement("div", {
							className: A.a.descriptionText
						}, this.props.info)))
					}
				}),
				D = s("./src/reddit/icons/svgs/EyeCancel/index.tsx"),
				H = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/HideBadge/index.m.less"),
				R = s.n(H);
			const F = {
				id: "removeBadge",
				type: "removeBadge"
			};

			function U(e) {
				const {
					badgeType: t,
					className: s
				} = e, {
					description: n,
					title: r
				} = function(e) {
					switch (e) {
						case u.a.Achievement:
							return {
								description: g.fbt._("Do not display an Achievement Badge", null, {
									hk: "XaQt5"
								}), title: g.fbt._("Hide Achievement Badge", null, {
									hk: "1J1U2J"
								})
							};
						case u.a.Cosmetic:
							return {
								description: g.fbt._("Do not display a Style Badge", null, {
									hk: "2ASTcV"
								}), title: g.fbt._("Hide Style Badge", null, {
									hk: "3fpbDK"
								})
							};
						case u.a.Loyalty:
							return {
								description: g.fbt._("Do not display a Loyalty Badge", null, {
									hk: "1e0IJN"
								}), title: g.fbt._("Hide Loyalty Badge", null, {
									hk: "29NfeM"
								})
							}
					}
				}(t);
				return a.a.createElement("div", {
					className: Object(b.a)(s, R.a.container)
				}, a.a.createElement("div", {
					className: R.a.centerContent
				}, a.a.createElement("header", {
					className: R.a.title
				}, r), a.a.createElement("div", {
					className: R.a.description
				}, n), a.a.createElement("article", {
					className: R.a.grid
				}, a.a.createElement("div", {
					className: R.a.row
				}, a.a.createElement("div", {
					className: R.a.item
				}, a.a.createElement("div", {
					className: Object(b.a)(R.a.hide, {
						[R.a.applied]: !!e.applied,
						[R.a.selected]: !!e.selected
					}),
					onClick: () => e.onSelect({
						badgeType: t,
						...F
					})
				}, e.applied && a.a.createElement(h.a, {
					className: R.a.checkmark
				}), a.a.createElement(D.a, {
					className: R.a.hideIcon
				})))))))
			}
			var G = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/AchievementBadge/index.m.less"),
				W = s.n(G);
			const V = Object(d.c)({
				collections: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(p.n)(e, s, u.a.Achievement)
				}
			});
			var z = Object(r.b)(V)((function(e) {
					return a.a.createElement("div", {
						className: Object(b.a)(W.a.container, e.className)
					}, a.a.createElement(w, null, a.a.createElement(T, {
						className: W.a.header,
						info: g.fbt._("Show off with an Achievement Badge! Unlock badges by completing goals.", null, {
							hk: "h44Q4"
						}),
						sectionName: "achievement_badge",
						subredditId: e.subredditId,
						title: g.fbt._("Achievement Badges", null, {
							hk: "4m7kLd"
						})
					}), a.a.createElement("div", {
						className: W.a.badges
					}, e.collections.map(t => a.a.createElement(x, {
						className: W.a.badgeGroup,
						description: t.description,
						highlight: t.highlight,
						key: t.title,
						title: t.title
					}, t.unlocked.map((t, s) => a.a.createElement("div", {
						className: W.a.badge,
						key: t.id + s
					}, a.a.createElement(y, {
						applied: e.appliedBadge && e.appliedBadge.id === t.id,
						model: t,
						selected: e.selectedBadge && e.selectedBadge.id === t.id,
						onSelect: () => e.onSelectBadge(t)
					}))).concat(t.locked.map(t => a.a.createElement("div", {
						className: W.a.badge,
						key: t.id
					}, a.a.createElement(y, {
						locked: !0,
						model: t,
						selected: e.selectedBadge && e.selectedBadge.id === t.id,
						onSelect: () => e.onSelectBadge(t)
					})))))), a.a.createElement(U, {
						applied: !e.appliedBadge,
						className: W.a.badgeGroup,
						badgeType: u.a.Achievement,
						selected: e.selectedBadge && "removeBadge" === e.selectedBadge.type,
						onSelect: e.onSelectBadge
					}))))
				})),
				q = s("./node_modules/lodash/curry.js"),
				$ = s.n(q),
				K = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				Y = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/BadgeTypeSelector/Tab/index.m.less"),
				Q = s.n(Y);

			function X(e) {
				const t = a.a.Children.only(e.children);
				return a.a.createElement("button", {
					className: Object(b.a)(Q.a.container, e.className, {
						[Q.a.disabled]: !!e.locked,
						[Q.a.containerSelected]: !!e.selected
					}),
					onClick: e.locked ? void 0 : e.onSelect
				}, a.a.cloneElement(t, {
					className: Object(b.a)(t.props.className, Q.a.inner, {
						[Q.a.selected]: !!e.selected,
						[Q.a.unselected]: !e.selected
					})
				}), e.locked && a.a.createElement("div", {
					className: Q.a.lockContainer
				}, a.a.createElement(f.a, {
					className: Q.a.lock
				})))
			}
			var J = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/BadgeTypeSelector/index.m.less"),
				Z = s.n(J);
			const ee = $()((e, t, s) => `${C.a.assetPath}/img/memberships/badges/management/tabs/${e}/${t}-${s?"on":"off"}-v2.png`),
				te = [{
					type: u.a.Loyalty,
					text: () => g.fbt._("Loyalty", null, {
						hk: "wG8nE"
					})
				}, {
					type: u.a.Achievement,
					text: () => g.fbt._("Achievement", null, {
						hk: "2y4Del"
					})
				}, {
					type: u.a.Cosmetic,
					text: () => g.fbt._("Style", null, {
						hk: "25q9XS"
					})
				}];
			const se = Object(d.c)({
				currentBadgeType: e => e.economics.currentBadgeManagementScreen.badgeType,
				hasAchievementBadges: (e, t) => {
					let {
						subredditId: s
					} = t;
					const n = Object(p.n)(e, s, u.a.Achievement);
					for (const a of n)
						if (a.locked.length || a.unlocked.length) return !0;
					return !1
				}
			});
			var ne = Object(r.b)(se, e => ({
					onChangeBadgeType: t => e(Object(K.b)(t))
				}))((function(e) {
					const {
						hasAchievementBadges: t
					} = e, s = ee(e.subredditId), n = te.filter(e => e.type !== u.a.Achievement || t);
					return a.a.createElement("nav", {
						className: Object(b.a)(Z.a.container, e.className)
					}, n.map((t, n) => a.a.createElement(a.a.Fragment, {
						key: `${t.type}`
					}, a.a.createElement(X, {
						className: Z.a.tab,
						selected: e.currentBadgeType === t.type,
						onSelect: () => e.onChangeBadgeType(t.type)
					}, a.a.createElement("div", {
						className: Z.a.tabContent
					}, a.a.createElement("img", {
						className: Z.a.img,
						src: s(t.type, e.currentBadgeType === t.type)
					}), a.a.createElement("div", {
						className: Z.a.tabText
					}, t.text()))))))
				})),
				ae = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/Gallery/index.m.less"),
				re = s.n(ae);
			const de = Object(d.c)({
				collections: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(p.n)(e, s, u.a.Cosmetic, u.c.Gallery)
				}
			});
			var oe = Object(r.b)(de)((function(e) {
					return a.a.createElement("div", {
						className: Object(b.a)(re.a.container, e.className)
					}, a.a.createElement(w, null, a.a.createElement("div", {
						className: re.a.badges
					}, e.collections.map(t => a.a.createElement(x, {
						className: re.a.badgeGroup,
						description: t.description,
						highlight: t.highlight,
						key: t.title,
						title: t.title
					}, t.locked.filter(e => Object(l.f)(e) || !!e.price).map(t => a.a.createElement("div", {
						className: re.a.badge,
						key: t.id
					}, a.a.createElement(y, {
						model: t,
						selected: e.selectedBadge && e.selectedBadge.id === t.id,
						onSelect: () => e.onSelectBadge(t)
					}))))))))
				})),
				ie = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/LoyaltyBadge/index.m.less"),
				ce = s.n(ie);
			const le = Object(d.c)({
				collections: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(p.n)(e, s, u.a.Loyalty)
				},
				meta: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(p.r)(e, s)
				}
			});
			var ue = Object(r.b)(le)((function(e) {
					return a.a.createElement("div", {
						className: Object(b.a)(ce.a.container, e.className)
					}, a.a.createElement(w, null, a.a.createElement(T, {
						className: ce.a.header,
						info: g.fbt._("The Loyalty Badge shows how long you've been a {memberAlt} in the subreddit. The longer you remain a member, the more Loyalty Badges you unlock", [g.fbt._param("memberAlt", e.meta.memberAlt)], {
							hk: "2jAQmP"
						}),
						sectionName: "loyalty_badge",
						subredditId: e.subredditId,
						title: g.fbt._("Loyalty Badges", null, {
							hk: "L1pPB"
						})
					}), a.a.createElement("div", {
						className: ce.a.badges
					}, e.collections.map(t => a.a.createElement(x, {
						className: ce.a.badgeGroup,
						highlight: t.highlight,
						key: t.title
					}, t.unlocked.map((t, s) => a.a.createElement("div", {
						className: ce.a.badge,
						key: t.id + s
					}, a.a.createElement(y, {
						applied: e.appliedBadge && e.appliedBadge.id === t.id,
						model: t,
						selected: e.selectedBadge && e.selectedBadge.id === t.id,
						onSelect: () => e.onSelectBadge(t)
					}))).concat(t.locked.map(t => a.a.createElement("div", {
						className: ce.a.badge,
						key: t.id
					}, a.a.createElement(y, {
						locked: !0,
						model: t,
						selected: e.selectedBadge && e.selectedBadge.id === t.id,
						onSelect: () => e.onSelectBadge(t)
					})))))), a.a.createElement(U, {
						applied: !e.appliedBadge,
						className: ce.a.badgeGroup,
						badgeType: u.a.Loyalty,
						selected: e.selectedBadge && "removeBadge" === e.selectedBadge.type,
						onSelect: e.onSelectBadge
					}))))
				})),
				me = s("./src/lib/constants/specialMembership.ts"),
				pe = s("./src/reddit/featureFlags/index.ts"),
				be = s("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				ge = s("./src/reddit/actions/modal.ts"),
				he = s("./src/reddit/components/TrackingHelper/index.tsx"),
				fe = s("./src/reddit/controls/Button/index.tsx"),
				_e = s("./src/reddit/helpers/economics/membershipPage.ts"),
				ve = s("./src/reddit/selectors/telemetry.ts"),
				ye = s("./node_modules/uuid/dist/esm-browser/v4.js"),
				je = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/MyBadges/NoBadges/index.m.less"),
				Be = s.n(je);
			const xe = Object(d.c)({
				meta: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(p.r)(e, s)
				},
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.subreddits.models[s]
				}
			});
			var Ee = Object(he.c)(Object(r.b)(xe, (e, t) => {
					let {
						badge: s,
						subredditId: n
					} = t;
					return {
						onCloseModal: () => e(Object(ge.f)())
					}
				})((function(e) {
					const t = `${C.a.assetPath}/img/memberships/badges/management/myBadges/${e.subredditId}/noBadges.png`,
						s = Object(ye.a)(),
						n = e.subreddit ? e.subreddit.name : "";
					return a.a.createElement("div", {
						className: Object(b.a)(Be.a.container, e.className)
					}, a.a.createElement("img", {
						className: Be.a.img,
						src: t
					}), a.a.createElement("div", {
						className: Be.a.title
					}, g.fbt._("You Don't Have Any Style Badges Yet", null, {
						hk: "13yxIM"
					})), a.a.createElement("div", {
						className: Be.a.text
					}, g.fbt._("Get a {membershipAlt} and receive new style badges every month. You can also buy badges individually from the Gallery.", [g.fbt._param("membershipAlt", e.meta.membershipAlt)], {
						hk: "1JWnXS"
					})), a.a.createElement(fe.n, {
						className: Be.a.learnMore,
						disabled: !e.subreddit,
						to: Object(_e.a)(n, s),
						onClick: t => {
							t.stopPropagation(), e.sendEvent(e => ({
								correlationId: s,
								source: "meta",
								action: "click",
								noun: "subscription_myBadges_open_learn_more",
								...ve.q(e),
								subreddit: ve.nb(e)
							})), e.onCloseModal()
						}
					}, g.fbt._("Learn More", null, {
						hk: "4ptmhd"
					})))
				}))),
				Oe = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/MyBadges/index.m.less"),
				we = s.n(Oe);
			const Se = Object(d.c)({
				collections: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(p.n)(e, s, u.a.Cosmetic, u.c.MyBadges)
				},
				customBadgesEnabled: pe.d.spCustomBadgesAndEmotes
			});
			var Ce = Object(r.b)(Se, e => ({
					onOpenUploadDialog: () => e(Object(K.j)())
				}))((function(e) {
					return a.a.createElement("div", {
						className: Object(b.a)(we.a.container, e.className)
					}, a.a.createElement(w, null, e.collections.length ? a.a.createElement("div", {
						className: we.a.badges
					}, e.collections.map(t => a.a.createElement(x, {
						className: we.a.badgeGroup,
						description: t.description,
						highlight: t.highlight,
						key: t.title,
						title: t.title
					}, t.unlocked.map((t, s) => a.a.createElement("div", {
						className: we.a.badge,
						key: t.id + s
					}, a.a.createElement(y, {
						applied: e.appliedBadge && e.appliedBadge.id === t.id,
						model: t,
						selected: e.selectedBadge && e.selectedBadge.id === t.id,
						onSelect: () => e.onSelectBadge(t)
					}))).concat(t.id === me.a && e.customBadgesEnabled ? a.a.createElement("button", {
						className: we.a.addCustomWrapper,
						onClick: e.onOpenUploadDialog
					}, a.a.createElement(be.a, {
						className: we.a.addCustom
					})) : []))), a.a.createElement(U, {
						applied: !e.appliedBadge,
						className: we.a.badgeGroup,
						badgeType: u.a.Cosmetic,
						selected: e.selectedBadge && "removeBadge" === e.selectedBadge.type,
						onSelect: e.onSelectBadge
					})) : a.a.createElement(Ee, {
						className: we.a.noBadges,
						subredditId: e.subredditId
					})))
				})),
				Ne = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/ViewTypeSelector/Tab/index.m.less"),
				Pe = s.n(Ne);
			const ke = Object(d.c)({
				isSelected: (e, t) => {
					let {
						viewType: s
					} = t;
					return e.economics.currentBadgeManagementScreen.view === s
				}
			});
			var Ie = Object(r.b)(ke, (e, t) => {
					let {
						viewType: s
					} = t;
					return {
						onSelect: () => e(Object(K.d)(s))
					}
				})((function(e) {
					return a.a.createElement("button", {
						className: Object(b.a)(e.className, Pe.a.container, {
							[Pe.a.selected]: e.isSelected
						}),
						onClick: e.onSelect
					}, e.children)
				})),
				Me = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/ViewTypeSelector/index.m.less"),
				Le = s.n(Me);

			function Ae(e) {
				return a.a.createElement("nav", {
					className: Object(b.a)(e.className, Le.a.container)
				}, a.a.createElement(Ie, {
					className: Le.a.tab,
					viewType: u.c.Gallery
				}, g.fbt._("Gallery", null, {
					hk: "40A6Dd"
				})), a.a.createElement(Ie, {
					className: Le.a.tab,
					viewType: u.c.MyBadges
				}, g.fbt._("My Badges", null, {
					hk: "2OwjDY"
				})))
			}
			var Te = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/index.m.less"),
				De = s.n(Te);
			const He = Object(d.c)({
				badgeType: e => e.economics.currentBadgeManagementScreen.badgeType,
				hasGalleryBadges: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(p.j)(e, s)
				},
				view: e => e.economics.currentBadgeManagementScreen.view
			});
			var Re = Object(r.b)(He)((function(e) {
					const t = Object(b.a)(De.a.contentWrapper, {
						[De.a.withView]: e.badgeType === u.a.Cosmetic,
						[De.a.withoutView]: e.badgeType !== u.a.Cosmetic
					});
					return a.a.createElement("div", {
						className: Object(b.a)(e.className, De.a.container)
					}, a.a.createElement(ne, {
						className: De.a.nav,
						subredditId: e.subredditId
					}), e.badgeType === u.a.Cosmetic && e.hasGalleryBadges && a.a.createElement(Ae, {
						className: De.a.viewSelector
					}), e.badgeType === u.a.Loyalty && a.a.createElement(ue, {
						appliedBadge: e.appliedBadges[u.a.Loyalty],
						className: t,
						selectedBadge: e.selectedBadges[u.a.Loyalty],
						subredditId: e.subredditId,
						onSelectBadge: t => e.onSelectBadge(u.a.Loyalty, t)
					}), e.badgeType === u.a.Achievement && a.a.createElement(z, {
						appliedBadge: e.appliedBadges[u.a.Achievement],
						className: t,
						selectedBadge: e.selectedBadges[u.a.Achievement],
						subredditId: e.subredditId,
						onSelectBadge: t => e.onSelectBadge(u.a.Achievement, t)
					}), e.badgeType === u.a.Cosmetic && e.view === u.c.MyBadges && a.a.createElement(Ce, {
						appliedBadge: e.appliedBadges[u.a.Cosmetic],
						className: t,
						selectedBadge: e.selectedBadges[u.a.Cosmetic],
						subredditId: e.subredditId,
						onSelectBadge: t => e.onSelectBadge(u.a.Cosmetic, t)
					}), e.badgeType === u.a.Cosmetic && e.view === u.c.Gallery && a.a.createElement(oe, {
						appliedBadge: e.appliedBadges[u.a.Cosmetic],
						className: t,
						selectedBadge: e.selectedBadges[u.a.Cosmetic],
						subredditId: e.subredditId,
						onSelectBadge: t => e.onSelectBadge(u.a.Cosmetic, t)
					}))
				})),
				Fe = s("./node_modules/react-motion/lib/react-motion.js"),
				Ue = s("./src/reddit/helpers/economics/sortBadges.ts"),
				Ge = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				We = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				Ve = s("./src/reddit/icons/svgs/Twinkle/index.tsx"),
				ze = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserPreview/index.tsx"),
				qe = s("./node_modules/lodash/last.js"),
				$e = s.n(qe),
				Ke = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				Ye = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.tsx"),
				Qe = s("./src/lib/localizeCurrency/index.ts"),
				Xe = s("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				Je = s("./src/reddit/actions/toaster.ts"),
				Ze = s("./src/reddit/hooks/useLocale.ts"),
				et = s("./src/reddit/models/Toast/index.ts"),
				tt = s("./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx"),
				st = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/Legal/index.m.less"),
				nt = s.n(st);
			const {
				fbt: at
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function rt(e) {
				return a.a.createElement("div", {
					className: Object(b.a)(e.className, nt.a.container)
				}, at._("By purchasing, you agree to the {=Reddit User Agreement} and {previewsUserAgreement}.", [at._param("=Reddit User Agreement", a.a.createElement("a", {
					className: nt.a.link,
					href: "https://www.redditinc.com/policies/user-agreement",
					target: "_blank",
					rel: "noopener noreferrer"
				}, at._("Reddit User Agreement", null, {
					hk: "49nG3E"
				}))), at._param("previewsUserAgreement", a.a.createElement(tt.a, {
					className: nt.a.link
				}))], {
					hk: "e28UM"
				}))
			}
			var dt = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.tsx"),
				ot = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/index.m.less"),
				it = s.n(ot);
			const ct = Object(d.c)({
				meta: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(p.r)(e, s)
				},
				ownedBadge: p.l,
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.subreddits.models[s]
				}
			});
			var lt = Object(he.c)(Object(r.b)(ct, (e, t) => {
					let {
						badge: s,
						subredditId: n
					} = t;
					return {
						onApply: () => e(Object(Xe.b)({
							badge: s,
							subredditId: n,
							placement: s.placement
						})),
						onCloseModal: () => e(Object(ge.f)()),
						onPurchased: () => {
							e(Object(Je.f)({
								kind: et.b.SuccessCommunityGreen,
								text: g.fbt._("Congratulations! You've bought a badge!", null, {
									hk: "3smVrt"
								})
							})), e(Object(Xe.d)(n, s))
						}
					}
				})((function(e) {
					const t = e.subreddit ? e.subreddit.name : "",
						s = Object(Ze.a)(),
						n = Object(ye.a)();
					return a.a.createElement("footer", {
						className: Object(b.a)(e.className, it.a.container)
					}, a.a.createElement("div", {
						className: it.a.wrapper
					}, a.a.createElement("div", {
						className: it.a.description
					}, !Object(l.e)(e.badge) && !e.ownedBadge && e.badge.price && !Object(l.f)(e.badge) && a.a.createElement("div", {
						className: it.a.price
					}, g.fbt._("Buy for {price}", [g.fbt._param("price", Object(Qe.b)(e.badge.price, {
						locale: s,
						forceDecimals: !0
					}))], {
						hk: "hW9B0"
					})), !Object(l.e)(e.badge) && !e.ownedBadge && Object(l.f)(e.badge) && a.a.createElement("div", {
						className: it.a.price
					}, g.fbt._("Get monthly reward badges by purchasing a {membershipAlt}!", [g.fbt._param("membershipAlt", e.meta.membershipAlt)], {
						hk: "19iqHa"
					}))), e.ownedBadge && a.a.createElement(fe.l, {
						className: it.a.button,
						disabled: e.alreadyApplied,
						onClick: e.onApply
					}, e.alreadyApplied ? g.fbt._("Applied", null, {
						hk: "3zELtm"
					}) : g.fbt._("Apply", null, {
						hk: "19U1iU"
					})), !Object(l.e)(e.badge) && !e.ownedBadge && Object(l.f)(e.badge) && a.a.createElement(fe.n, {
						className: it.a.button,
						disabled: !e.subreddit,
						to: Object(_e.a)(t, n),
						onClick: t => {
							t.stopPropagation(), e.sendEvent(e => ({
								correlationId: n,
								source: "meta",
								action: "click",
								noun: "subscription_gallery_open_learn_more",
								...ve.q(e),
								subreddit: ve.nb(e)
							})), e.onCloseModal()
						}
					}, g.fbt._("Learn More", null, {
						hk: "4ptmhd"
					})), !Object(l.e)(e.badge) && !e.ownedBadge && e.badge.price && !Object(l.f)(e.badge) && a.a.createElement(dt.a, {
						className: it.a.purchaseButton,
						correlationId: n,
						price: e.badge.price,
						productId: e.badge.id,
						subreddit: e.subreddit,
						onPaymentSuccessful: e.onPurchased
					})), !Object(l.e)(e.badge) && !e.ownedBadge && e.badge.price && a.a.createElement(rt, {
						className: it.a.legal
					}))
				}))),
				ut = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Hide/index.m.less"),
				mt = s.n(ut);
			var pt = Object(r.b)(void 0, (e, t) => {
					let {
						badge: s,
						subredditId: n
					} = t;
					return {
						onApply: () => e(Object(Xe.b)({
							badge: s,
							subredditId: n,
							placement: u.b[s.badgeType]
						}))
					}
				})((function(e) {
					return a.a.createElement("div", {
						className: Object(b.a)(e.className, mt.a.container)
					}, e.alreadyApplied ? a.a.createElement("div", {
						className: mt.a.text
					}, function(e) {
						switch (e.badgeType) {
							case u.a.Achievement:
								return g.fbt._("You do not currently have an Achievement Badge selected.", null, {
									hk: "2MhvgS"
								});
							case u.a.Cosmetic:
								return g.fbt._("You do not currently have a Style Badge selected.", null, {
									hk: "4uRiIX"
								});
							case u.a.Loyalty:
								return g.fbt._("You do not currently have a Loyalty Badge selected.", null, {
									hk: "34Q4VK"
								})
						}
					}(e.badge)) : a.a.createElement(n.Fragment, null, a.a.createElement("div", {
						className: mt.a.text
					}, function(e) {
						switch (e.badgeType) {
							case u.a.Achievement:
								return g.fbt._("Hide your Achievement Badge?", null, {
									hk: "4cRkIB"
								});
							case u.a.Cosmetic:
								return g.fbt._("Hide your Style Badge?", null, {
									hk: "2Ljc6w"
								});
							case u.a.Loyalty:
								return g.fbt._("Hide your Loyalty Badge?", null, {
									hk: "3H5CTM"
								})
						}
					}(e.badge)), a.a.createElement(fe.l, {
						className: mt.a.hide,
						disabled: e.alreadyApplied,
						onClick: e.onApply
					}, g.fbt._("Hide", null, {
						hk: "2r7mgg"
					}))))
				})),
				bt = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/index.m.less"),
				gt = s.n(bt);

			function ht(e) {
				return "removeBadge" === e.type
			}
			const ft = Object(d.c)({
				alreadyApplied: (e, t) => {
					let {
						badge: s,
						subredditId: n,
						type: a
					} = t;
					const r = Object(p.f)(e, n)[a];
					return r ? r.id === s.id : "removeBadge" === s.type
				},
				lastUnlockedLoyaltyBadge: (e, t) => {
					let {
						subredditId: s
					} = t;
					const n = Object(p.n)(e, s, u.a.Loyalty)[0];
					if (n) return $e()(n.unlocked)
				}
			});
			var _t = Object(r.b)(ft)((function(e) {
					return ht(e.badge) ? a.a.createElement("div", {
						className: Object(b.a)(e.className, gt.a.container)
					}, a.a.createElement(pt, {
						alreadyApplied: e.alreadyApplied,
						className: gt.a.hide,
						badge: e.badge,
						subredditId: e.subredditId
					})) : a.a.createElement("div", {
						className: Object(b.a)(e.className, gt.a.container)
					}, a.a.createElement(Ye.a, {
						badge: e.badge,
						className: gt.a.content,
						subredditId: e.subredditId,
						type: e.type
					}, a.a.createElement(Ke.a, {
						className: gt.a.dismiss,
						onClick: e.onDeselect
					})), function(e) {
						return e.type === u.a.Cosmetic || (!(e.type !== u.a.Achievement || ht(e.badge) || !Object(l.e)(e.badge)) || !(e.type !== u.a.Loyalty || !e.lastUnlockedLoyaltyBadge || e.badge.id !== e.lastUnlockedLoyaltyBadge.id))
					}(e) && a.a.createElement(lt, {
						alreadyApplied: e.alreadyApplied,
						className: gt.a.footer,
						badge: e.badge,
						subredditId: e.subredditId
					}))
				})),
				vt = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/index.m.less"),
				yt = s.n(vt);
			const jt = {
					stiffness: 210,
					damping: 20
				},
				Bt = () => ({
					bottom: -200
				}),
				xt = () => ({
					bottom: Object(Fe.spring)(-200, jt)
				}),
				Et = [40, 68, 96];

			function Ot(e, t) {
				return Et.slice(0, e.length)[e.findIndex(e => e.id === t.id)]
			}

			function wt(e) {
				return "removeBadge" !== e.type
			}
			const St = Object(d.c)({
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.subreddits.models[s]
				}
			});
			var Ct = Object(r.b)(St, e => ({
					onClose: () => e(Object(ge.f)())
				}))((function(e) {
					const t = e.subreddit ? e.subreddit.name : "Community",
						s = Object(Ue.a)(e.badges.filter(wt)),
						n = s.find(t => t.placement === u.b[e.previewedBadge.type]);
					return a.a.createElement("div", {
						className: Object(b.a)(e.className, yt.a.container)
					}, a.a.createElement("article", {
						className: yt.a.content
					}, a.a.createElement("header", {
						className: yt.a.header
					}, g.fbt._("Edit {communityName} Badges", [g.fbt._param("communityName", t)], {
						hk: "3R1TMF"
					}), a.a.createElement(I.a, {
						className: yt.a.close,
						onClick: e.onClose
					})), a.a.createElement("div", {
						className: yt.a.contentBackground
					}), a.a.createElement("div", {
						className: yt.a.commentPreviewLabel
					}, g.fbt._("comment preview", null, {
						hk: "Lhdaw"
					})), a.a.createElement("div", {
						className: Object(b.a)(yt.a.commentPreviewContainer, {
							[yt.a.previewClosed]: !e.previewedBadge.badge,
							[yt.a.previewOpen]: !!e.previewedBadge.badge
						})
					}, a.a.createElement("div", {
						className: yt.a.commentPreview
					}, a.a.createElement("div", {
						className: yt.a.voteContainer
					}, a.a.createElement(We.b, {
						className: yt.a.vote
					}), a.a.createElement(Ge.a, {
						className: yt.a.vote
					})), n && a.a.createElement(a.a.Fragment, null, a.a.createElement(Ve.a, {
						className: yt.a.radialHighlightOuter,
						style: {
							left: Ot(s, n)
						}
					}), a.a.createElement(Ve.a, {
						className: yt.a.radialHighlightInner,
						style: {
							left: Ot(s, n)
						}
					})), a.a.createElement(ze.a, {
						showExplanation: !0,
						badges: s,
						subredditId: e.subredditId
					}))), a.a.createElement(Fe.TransitionMotion, {
						defaultStyles: [],
						styles: e.previewedBadge.badge ? [{
							data: e.previewedBadge.badge,
							key: e.previewedBadge.badge.id,
							style: {
								bottom: Object(Fe.spring)(16, jt)
							}
						}] : [],
						willEnter: Bt,
						willLeave: xt
					}, t => a.a.createElement(a.a.Fragment, null, t.map(t => a.a.createElement("div", {
						className: yt.a.badgePreviewContainer,
						key: t.key,
						style: {
							bottom: t.style.bottom
						}
					}, a.a.createElement(_t, {
						badge: t.data,
						subredditId: e.subredditId,
						type: e.previewedBadge.type,
						onDeselect: e.onDeselect
					})))))))
				})),
				Nt = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.m.less"),
				Pt = s.n(Nt);

			function kt(e) {
				return !!e
			}
			class It extends a.a.Component {
				constructor(e) {
					super(e), this.handleBadgeSelection = (e, t) => {
						this.setState(s => {
							const n = s.selectedBadges[e];
							return {
								selectedBadges: {
									...s.selectedBadges,
									[e]: n && n.id === t.id ? void 0 : t
								}
							}
						})
					};
					const t = {
						...e.appliedBadges
					};
					if (e.initialSelectedBadge) {
						t[Object(u.d)(e.initialSelectedBadge.placement)] = e.initialSelectedBadge
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
					const s = {
						badge: this.state.selectedBadges[this.props.currentBadgeType],
						type: this.props.currentBadgeType
					};
					return a.a.createElement("div", {
						className: Pt.a.container
					}, a.a.createElement("article", {
						className: Pt.a.content
					}, a.a.createElement(Re, {
						appliedBadges: this.props.appliedBadges,
						className: Pt.a.leftRail,
						selectedBadges: this.state.selectedBadges,
						subredditId: t.id,
						userId: e.id,
						onSelectBadge: this.handleBadgeSelection
					}), a.a.createElement(Ct, {
						appliedBadge: this.props.appliedBadges[this.props.currentBadgeType],
						badges: [this.state.selectedBadges[u.a.Loyalty] || this.props.appliedBadges[u.a.Loyalty], this.state.selectedBadges[u.a.Achievement] || this.props.appliedBadges[u.a.Achievement], this.state.selectedBadges[u.a.Cosmetic] || this.props.appliedBadges[u.a.Cosmetic]].filter(kt),
						className: Pt.a.preview,
						previewedBadge: s,
						subredditId: t.id,
						onDeselect: () => {
							s.badge && this.handleBadgeSelection(s.type, s.badge)
						}
					})))
				}
			}
			const Mt = Object(d.c)({
					account: e => e.user.account,
					appliedBadges: (e, t) => {
						const s = Object(i.s)(e, t);
						return s ? Object(p.f)(e, s.id) : {
							[u.a.Loyalty]: void 0,
							[u.a.Achievement]: void 0,
							[u.a.Cosmetic]: void 0
						}
					},
					currentBadgeType: e => e.economics.currentBadgeManagementScreen.badgeType,
					currentView: e => e.economics.currentBadgeManagementScreen.view,
					initialSelectedBadge: (e, t) => {
						const s = e.economics.currentBadgeManagementScreen.view,
							n = Object(i.s)(e, t);
						let a;
						if (n && e.economics.currentModalArgs && e.economics.currentModalArgs.badge) {
							const t = e.economics.currentModalArgs.badge.type,
								s = e.economics.subredditPremium[n.id];
							if (s && s.status === m.a.Fetched) {
								(a = s.data.userOwnedBadges.find(e => e.type === t)) || (a = s.raw.products[t])
							}
						}
						if (n && !a && s === u.c.Gallery) {
							const t = Object(p.n)(e, n.id, u.a.Cosmetic, u.c.Gallery)[0];
							if (t) {
								const e = t.locked[0];
								e && (Object(l.f)(e) || e.price) && (a = t.locked[0])
							}
						}
						return a
					},
					subreddit: i.s
				}),
				Lt = Object(r.b)(Mt),
				At = Object(i.v)();
			t.default = Object(c.a)("spSpecialMemberships", Object(o.a)(At(Lt(It))))
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.m.less": function(e, t, s) {
			e.exports = {
				badge: "ekl2maIRbrCrsYFt1OwaE"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				c = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				u = s("./src/reddit/featureFlags/index.ts"),
				m = s("./src/reddit/hooks/useUserContext.ts"),
				p = s("./src/reddit/selectors/economics.ts"),
				b = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.m.less"),
				g = s.n(b);

			function h(e) {
				var t, s;
				const {
					currentUser: n
				} = Object(m.a)(), r = null !== (t = e.badges) && void 0 !== t ? t : Object(p.i)(e.badgeIds, null !== (s = e.allBadges) && void 0 !== s ? s : {});
				return r.length ? a.a.createElement(l.b, {
					useHovercard: !0,
					badges: r,
					badgeSize: e.badgeSize,
					className: Object(o.a)(e.className, g.a.badge),
					uniqueIdentifier: e.uniqueIdentifier,
					showAddCustom: e.customBadgesEnabled && e.premiumEnabled && e.showAddCustom && r.length < 2 && (null == n ? void 0 : n.id) === e.userId,
					subredditId: e.subredditId,
					userId: e.userId,
					onShowTooltip: e.onShowTooltip,
					onHideTooltip: e.onHideTooltip,
					onOpenUploadDialog: e.onOpenUploadDialog
				}) : null
			}
			const f = [];
			t.b = Object(r.b)(() => Object(d.c)({
				badgeIds: (e, t) => {
					let {
						subredditId: s,
						userId: n
					} = t;
					var a;
					return (null === (a = e.users.appliedBadges[n]) || void 0 === a ? void 0 : a[s]) || f
				},
				allBadges: e => e.badges.models,
				customBadgesEnabled: u.d.spCustomBadgesAndEmotes,
				premiumEnabled: e => u.d.spSpecialMemberships(e)
			}), e => ({
				onShowTooltip: t => e(Object(c.f)({
					tooltipId: t
				})),
				onHideTooltip: () => e(Object(c.i)()),
				onOpenUploadDialog: () => e(Object(i.j)())
			}))(h)
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UserPreview/index.m.less": function(e, t, s) {
			e.exports = {
				clickable: "_2W-yYYgiKN7Nv6X-LYi_9w",
				container: "_2FOpaOYxDZOwfOdaggJpwm",
				description: "_2Q0iZfK75k4af7Yh_QhiFm",
				user: "_3B1S9qGju-2qKwMcvkVFtz",
				userContainer: "_2Y-fftIz65RlW68o233ly9"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UserPreview/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				i = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/helpers/economics/sortBadges.ts"),
				l = s("./src/reddit/hooks/useUserContext.ts"),
				u = s("./src/reddit/models/Badge/managementPage.ts"),
				m = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				p = s("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				b = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserPreview/index.m.less"),
				g = s.n(b);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(r.b)(null, (e, t) => {
				let {
					subredditId: s
				} = t;
				return {
					onShowTooltip: t => e(Object(i.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(i.i)()),
					onOpenModal: () => e(Object(o.c)({
						subredditId: s,
						initialView: u.c.MyBadges
					})),
					onOpenUploadDialog: () => e(Object(o.j)())
				}
			})((function(e) {
				const {
					currentUser: t
				} = Object(l.a)();
				if (!t) return null;
				const s = Object(c.a)(e.badges),
					n = s[s.length - 1],
					r = n && n.extra && n.extra.style && n.extra.style.backgroundColor,
					o = n && n.extra && n.extra.style && n.extra.style.color;
				return a.a.createElement("div", {
					className: Object(d.a)(e.className, g.a.container, {
						[g.a.clickable]: e.clickToOpenModal
					}),
					style: {
						backgroundColor: r || (e.showDefaultBackground ? "var(--newRedditTheme-field)" : void 0)
					},
					onClick: () => e.clickToOpenModal && e.onOpenModal()
				}, a.a.createElement("div", {
					className: g.a.userContainer
				}, a.a.createElement(m.a, {
					badges: s,
					subredditId: e.subredditId,
					uniqueIdentifier: e.uniqueIdentifier || "",
					userId: t.id,
					onShowTooltip: e.uniqueIdentifier ? e.onShowTooltip : () => {},
					onHideTooltip: e.uniqueIdentifier ? e.onHideTooltip : () => {},
					onOpenUploadDialog: e.onOpenUploadDialog
				}), a.a.createElement(p.a, {
					badges: s,
					subredditId: e.subredditId,
					userId: t.id
				}, a.a.createElement("span", {
					className: g.a.user
				}, t.username || t.displayText || "username"))), e.showExplanation && a.a.createElement("div", {
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
		"./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/selectors/economics.ts");

			function i(e) {
				const {
					badges: t
				} = e, s = t[t.length - 1];
				return s && !e.ignore ? a.a.cloneElement(e.children, {
					style: s.extra && s.extra.style && s.extra.style.color ? {
						...e.children.props.style || {},
						color: s.extra.style.color,
						fontWeight: 700
					} : e.children.props.style
				}) : e.children
			}
			t.b = Object(r.b)(() => Object(d.c)({
				badges: (e, t) => {
					let {
						subredditId: s,
						userId: n
					} = t;
					return Object(o.q)(e, s, n)
				}
			}))(i)
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts": function(e, t, s) {
			"use strict";
			var n, a, r, d;

			function o(e) {
				const {
					platform: t,
					playerType: s,
					region: n,
					style: a
				} = e;
				return `https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/lfg/lfg_badges_${a}/${n}_${t}_${s}_${a}.svg`
			}
			s.d(t, "a", (function() {
					return n
				})), s.d(t, "b", (function() {
					return a
				})), s.d(t, "c", (function() {
					return r
				})), s.d(t, "d", (function() {
					return o
				})),
				function(e) {
					e.pc = "PC", e.phone = "Phone", e.ps = "PlayStation", e.switch = "Switch", e.xbox = "XBox"
				}(n || (n = {})),
				function(e) {
					e.bot = "Bot", e.casual = "Casual", e.competitive = "Competitive", e.goat = "G.O.A.T", e.noob = "Noob"
				}(a || (a = {})),
				function(e) {
					e.asia = "Asia", e.brasil = "Brazil", e.europe = "Europe", e.me = "Middle East", e.nae = "North America East", e.naw = "North America West", e.oceania = "Oceania"
				}(r || (r = {})),
				function(e) {
					e.bw = "bw", e.color = "color"
				}(d || (d = {}))
		},
		"./src/reddit/components/Economics/SubredditPremium/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/config.ts"),
				a = s("./node_modules/lodash/flattenDeep.js"),
				r = s.n(a),
				d = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts");
			const o = `${n.a.assetPath}/img/memberships/paywall/crown.gif`,
				i = {
					karma_10k_badge: 1e4,
					karma_20k_badge: 2e4,
					karma_50k_badge: 5e4,
					karma_100k_badge: 1e5,
					karma_150k_badge: 15e4,
					karma_200k_badge: 2e5
				},
				c = new Set(r()(Object.keys(d.a).map(e => Object.keys(d.b).map(t => Object.keys(d.c).map(s => `${s}_${e}_${t}_badge`)))))
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, s) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/controls/LoadingIcon/index.m.less"),
				o = s.n(d);
			t.a = e => {
				let {
					center: t,
					className: s,
					sizePx: n = 10
				} = e;
				return a.a.createElement("div", {
					className: Object(r.a)(o.a.loadingIcon, s, {
						[o.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${n}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return d
			}));
			var n = s("./src/config.ts"),
				a = s("./src/reddit/endpoints/governance/requester.ts");
			const r = (e, t) => Object(a.a)(e, {
					method: "post",
					endpoint: `${n.a.metaUrl}/orders`,
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
				d = (e, t) => Object(a.a)(e, {
					method: "get",
					endpoint: `${n.a.metaUrl}/product-collections/${t}?types=emotes_pack`
				})
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			}));
			var n = s("./src/config.ts"),
				a = s("./src/lib/omitHeaders/index.ts"),
				r = s("./src/reddit/constants/headers.ts"),
				d = s("./src/reddit/endpoints/governance/requester.ts"),
				o = s("./src/reddit/helpers/governanceErrorText/index.ts"),
				i = s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function c(e, t) {
				return Object(d.a)(e, {
					endpoint: `${n.a.metaUrl}/communities/${t.subredditId}/me`,
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
					endpoint: `${n.a.metaUrl}/ps/me/braintree-client-tokens`,
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function u(e, t) {
				return Object(d.a)(e, {
					endpoint: `${n.a.metaUrl}/orders`,
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

			function m(e, t) {
				return Object(d.a)(Object(a.a)(e, [r.a]), {
					endpoint: `${e.apiUrl}/api/info?id=${t.join(",")}`,
					method: "get"
				}).then(e => {
					if (e.ok) {
						const t = e.body.data.children.map(e => {
							let {
								data: t
							} = e;
							return Object(i.a)(t)
						}).reduce((e, t) => (e[t.id] = t, e), {});
						return {
							...e,
							body: t
						}
					}
					return e
				})
			}
			async function p(e, t) {
				const s = await Object(d.a)(e, {
					endpoint: `${n.a.metaUrl}/orders`,
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
				if (!s.ok) throw new Error(`Error fetching provisional membership: ${Object(o.b)(s.error)}`);
				return s.body
			}
		},
		"./src/reddit/endpoints/economics/subredditPremium.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/merge.js"),
				a = s.n(n),
				r = s("./src/config.ts"),
				d = s("./src/reddit/endpoints/governance/badges.ts"),
				o = s("./src/reddit/endpoints/governance/community.ts"),
				i = s("./src/reddit/endpoints/governance/products/badges.ts"),
				c = s("./src/reddit/endpoints/governance/requester.ts");
			async function l(e, t, s) {
				const n = {
						subredditId: t,
						badges: {},
						errors: {},
						collections: {},
						products: {},
						subscription: void 0,
						userOwnedBadges: []
					},
					l = function(e, t) {
						return Object(c.a)(e, {
							method: "get",
							endpoint: `${r.a.metaUrl}/product-collections/${t}?types=badge`
						})
					}(e, t),
					u = Object(o.a)(e, {
						subredditId: t
					}),
					m = Object(i.b)(e, t),
					p = Object(d.c)(e, t, s),
					[b, g, h, f] = await Promise.all([l, u, m, p]);
				if (b.ok ? n.collections = b.body : n.errors.collections = b.error, g.ok) {
					const e = g.body;
					n.subscription = e.specialMemberships, n.communityRaw = e
				}
				return h.ok ? n.products = h.body : n.errors.products = h.error, f.ok ? (a()(n.badges, f.body.badges), n.userOwnedBadges = f.body.userOwnedBadges) : n.errors.userBadges = f.error, n
			}
			const u = (e, t) => Object(c.a)(e, {
				endpoint: `${r.a.metaUrl}/products/${t}?types=badge,membership`,
				method: "delete"
			})
		},
		"./src/reddit/endpoints/governance/community.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/config.ts"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/endpoints/governance/requester.ts");

			function d(e, t) {
				return Object(r.a)(e, {
					endpoint: `${n.a.metaUrl}/communities/${t.subredditId}/me`,
					method: a.ob.GET
				})
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/featureFlags/index.ts");

			function i(e, t, s) {
				const n = Object(d.c)({
					featureEnabled: t => o.d[e](t)
				});
				return Object(r.b)(n)(e => {
					const {
						featureEnabled: n,
						...r
					} = e, d = r;
					return n ? a.a.createElement(t, d) : void 0 !== s ? a.a.createElement(s, d) : null
				})
			}
		},
		"./src/reddit/helpers/economics/membershipPage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/lib/permalinkToOverlayLocation/index.ts");

			function a(e, t) {
				return Object(n.a)(`/web/special-membership/${e}?corr=${t}`)
			}
		},
		"./src/reddit/helpers/economics/setupSubredditPremiumButton.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/currency/centsToDollars/index.ts"),
				a = s("./src/reddit/endpoints/economics/specialMembership.ts"),
				r = s("./src/reddit/helpers/loadThirdPartyScript.ts");
			async function d(e) {
				let {
					apiContext: t,
					config: s,
					elementId: d,
					price: o,
					purchaseFn: i,
					username: c,
					onCancel: l,
					onClientLoad: u,
					onError: m,
					onSubmitting: p,
					onSuccess: b
				} = e;
				const g = (e, t) => {
					if (!m) return;
					let s = e.toString ? e.toString() : "";
					s.toLowerCase().includes("object object") && (s = JSON.stringify(e)), m(e, s, t)
				};
				try {
					const [e] = await Promise.all([Object(a.b)(t, {
						username: c
					}), Object(r.b)()]);
					if (!e.ok) return void g(e.error, "/ps/me/braintree-client-tokens");
					const m = await braintree.client.create({
							authorization: e.body.clientToken
						}),
						h = await new Promise((e, t) => {
							braintree.paypalCheckout.create({
								client: m
							}, (s, n) => s ? t(s) : e(n))
						});
					u && u(), await paypal.Buttons({
						createBillingAgreement: "subscription" === s.type ? () => (p && p(), h.createPayment({
							amount: Object(n.a)(o(), !0),
							billingAgreementDescription: s.billingAgreement,
							currency: "USD",
							flow: "vault"
						})) : void 0,
						createOrder: "purchase" === s.type ? () => (p && p(), h.createPayment({
							amount: Object(n.a)(o(), !0),
							currency: "USD",
							flow: "checkout",
							intent: "capture"
						})) : void 0,
						style: {
							height: 32
						},
						onApprove: async e => {
							h.tokenizePayment(e).then(e => {
								let {
									nonce: t
								} = e;
								return i(t)
							}).then(e => {
								e.ok ? b && b() : g(e.error, "/orders")
							})
						},
						onCancel: () => l && l(),
						onError: e => g(e, "paypalError")
					}).render(`#${d}`)
				} catch (h) {
					g(h, "paypalError")
				}
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./node_modules/bignumber.js/bignumber.js"),
				a = s("./src/lib/prettyPrintNumber/index.ts");

			function r(e, t) {
				const s = new n.BigNumber(e),
					a = new n.BigNumber(t || 1);
				return s.dividedToIntegerBy(a).toString()
			}

			function d(e, t) {
				return Object(a.b)(parseInt(r(e, t), 10))
			}

			function o(e, t) {
				const s = new n.BigNumber(e),
					a = new n.BigNumber(t || 1);
				return s.multipliedBy(a).toFixed(0)
			}

			function i(e) {
				const t = new n.BigNumber(e),
					s = new n.BigNumber("1e18");
				return t.dividedBy(s).toString()
			}
		},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

			function r(e) {
				return a.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("rect", {
					fill: "transparent",
					height: "18",
					rx: "4.5",
					strokeDasharray: "2 2",
					strokeLinejoin: "round",
					strokeWidth: "1",
					width: "18",
					x: "1",
					y: "1"
				}), a.a.createElement("path", {
					clipRule: "evenodd",
					d: "M13 9H11V7C11 6.7235 10.7765 6.5 10.5 6.5H9.5C9.2235 6.5 9 6.7235 9 7V9H7C6.724 9 6.5 9.2235 6.5 9.5V10.5C6.5 10.7765 6.724 11 7 11H9V13C9 13.2765 9.2235 13.5 9.5 13.5H10.5C10.7765 13.5 11 13.2765 11 13V11H13C13.2765 11 13.5 10.7765 13.5 10.5V9.5C13.5 9.2235 13.2765 9 13 9Z",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/EyeCancel/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

			function r(e) {
				return a.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, a.a.createElement("path", {
					d: "M13.6926 12.277L17.7076 16.293C18.0986 16.684 18.0986 17.316 17.7076 17.707C17.5126 17.902 17.2566 18 17.0006 18C16.7446 18 16.4886 17.902 16.2936 17.707L2.29361 3.70701C1.90261 3.31601 1.90261 2.68401 2.29361 2.29301C2.68461 1.90201 3.31661 1.90201 3.70761 2.29301L7.24661 5.83201C9.79961 4.73701 12.8686 5.21001 14.9496 7.29101L17.7076 10.049C18.0976 10.439 18.0976 11.072 17.7076 11.463C17.5116 11.658 17.2556 11.756 16.9996 11.756C16.7446 11.756 16.4886 11.658 16.2926 11.463L13.5356 8.70501C13.4987 8.66806 13.4583 8.63769 13.4178 8.60724C13.3859 8.58329 13.354 8.5593 13.3236 8.53201C13.7496 9.16801 13.9996 9.93301 13.9996 10.756C13.9996 11.296 13.8886 11.809 13.6926 12.277ZM2.29301 10.0488C1.90201 10.4398 1.90201 11.0718 2.29301 11.4628C2.68401 11.8538 3.31601 11.8538 3.70701 11.4628L5.87801 9.29081L4.46401 7.87681L2.29301 10.0488ZM6.00011 10.7559C6.00011 12.9649 7.79111 14.7559 10.0001 14.7559C10.4041 14.7559 10.7861 14.6779 11.1531 14.5669L6.17511 9.58791C6.06211 9.95791 6.00011 10.3499 6.00011 10.7559Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/Twinkle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

			function r(e) {
				return a.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 48 48",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
					d: "M24.75 0L23.25 0L23.25 22.188L7.56083 6.49881L6.50017 7.55947L22.1907 23.25L0 23.25L0 24.75L22.1895 24.75L6.49882 40.4406L7.55948 41.5013L23.25 25.8108L23.25 48H24.75L24.75 25.8093L40.4413 41.5006L41.502 40.4399L25.812 24.75L48 24.75V23.25L25.8108 23.25L41.5006 7.56017L40.4399 6.49951L24.75 22.1895L24.75 0Z"
				}))
			}
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, s) {
			"use strict";
			var n, a, r, d;
			s.d(t, "b", (function() {
					return a
				})), s.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(a || (a = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(r || (r = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(d || (d = {}))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, s) {
			"use strict";
			var n;

			function a(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			s.d(t, "a", (function() {
					return n
				})), s.d(t, "b", (function() {
					return a
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(n || (n = {}))
		},
		"./src/reddit/selectors/crypto/wallet.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "c", (function() {
				return o
			}));
			var n = s("./src/lib/initializeClient/installReducer.ts"),
				a = s("./src/reddit/reducers/features/crypto/index.ts");
			Object(n.a)({
				features: {
					crypto: a.a
				}
			});
			const r = (e, t) => {
					var s;
					return t && (null === (s = e.user.wallets[t.subredditId]) || void 0 === s ? void 0 : s.latest)
				},
				d = (e, t) => {
					var s;
					return null === (s = r(e, t)) || void 0 === s ? void 0 : s.publicAddress
				},
				o = (e, t) => {
					var s, n, a, r;
					return null === (r = null === (a = null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.crypto) || void 0 === n ? void 0 : n.publicWallets) || void 0 === a ? void 0 : a[t.userId]) || void 0 === r ? void 0 : r[t.subredditId]
				}
		},
		"./src/reddit/selectors/economics.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return _
			})), s.d(t, "o", (function() {
				return v
			})), s.d(t, "a", (function() {
				return y
			})), s.d(t, "x", (function() {
				return j
			})), s.d(t, "f", (function() {
				return B
			})), s.d(t, "i", (function() {
				return x
			})), s.d(t, "q", (function() {
				return E
			})), s.d(t, "h", (function() {
				return O
			})), s.d(t, "z", (function() {
				return w
			})), s.d(t, "l", (function() {
				return S
			})), s.d(t, "n", (function() {
				return C
			})), s.d(t, "e", (function() {
				return N
			})), s.d(t, "d", (function() {
				return P
			})), s.d(t, "j", (function() {
				return k
			})), s.d(t, "p", (function() {
				return I
			})), s.d(t, "k", (function() {
				return A
			})), s.d(t, "r", (function() {
				return D
			})), s.d(t, "y", (function() {
				return H
			})), s.d(t, "u", (function() {
				return R
			})), s.d(t, "v", (function() {
				return F
			})), s.d(t, "b", (function() {
				return U
			})), s.d(t, "w", (function() {
				return G
			})), s.d(t, "s", (function() {
				return W
			})), s.d(t, "t", (function() {
				return V
			})), s.d(t, "g", (function() {
				return $
			})), s.d(t, "m", (function() {
				return K
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/featureFlags/index.ts"),
				a = s("./src/reddit/helpers/economics/sortBadges.ts"),
				r = s("./src/reddit/helpers/richTextJson/index.ts"),
				d = s("./src/reddit/models/Badge/index.ts"),
				o = s("./src/reddit/models/Badge/managementPage.ts"),
				i = s("./src/reddit/models/Payments/index.ts"),
				c = s("./src/reddit/models/Product/index.ts"),
				l = s("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				u = s("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				m = s("./src/reddit/selectors/comments.ts"),
				p = s("./src/reddit/selectors/commentSelector.ts"),
				b = s("./src/reddit/selectors/experiments/mediaInComments.ts"),
				g = s("./src/reddit/selectors/gold/powerups/index.ts"),
				h = s("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const f = [],
				_ = (e, t) => {
					const s = e.economics.subredditPremium[t];
					if (s && s.status === u.a.Fetched) {
						const e = s.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
					}
					return null
				},
				v = (e, t) => {
					const s = _(e, t);
					return s && s.endsAt || null
				};
			var y;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(y || (y = {}));
			const j = (e, t) => {
					const s = e.economics.subredditPremium[t];
					if (s && s.status === u.a.Fetched) {
						const s = v(e, t),
							n = Date.now();
						return s && n < s ? y.Subscribed : y.NotSubscribed
					}
					return y.DontKnow
				},
				B = (e, t) => {
					const s = e.user.account,
						n = e.economics.subredditPremium[t];
					if (s && n && n.status === u.a.Fetched) {
						const n = ((e.users.appliedBadges[s.id] || {})[t] || f).map(t => e.badges.models[t]).filter(Boolean);
						if (n) return {
							[o.a.Loyalty]: n.find(e => e.placement === d.a.First),
							[o.a.Achievement]: n.find(e => e.placement === d.a.Second),
							[o.a.Cosmetic]: n.find(e => !e.placement)
						}
					}
					return {
						[o.a.Loyalty]: void 0,
						[o.a.Achievement]: void 0,
						[o.a.Cosmetic]: void 0
					}
				};

			function x(e, t) {
				return (null == e ? void 0 : e.length) ? Object(a.a)(e.map(e => t[e]).filter(Boolean)) : f
			}
			const E = (e, t, s) => {
					var a;
					if (!n.d.spBadges(e)) return f;
					return x(null === (a = e.users.appliedBadges[s]) || void 0 === a ? void 0 : a[t], e.badges.models)
				},
				O = (e, t) => {
					const s = e.economics.subredditPremium[t.subredditId];
					if (s && s.status === u.a.Fetched) {
						const e = s.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function w(e, t) {
				const s = (e.economics.me.data.specialMemberships || {})[t];
				return !!(s && s.settings && s.settings.optOut)
			}

			function S(e, t) {
				const {
					badge: s,
					subredditId: n
				} = t, a = e.user.account ? e.user.account.id : void 0;
				if (Object(d.e)(s) && s.userId === a) return s;
				const r = e.badges.models,
					o = e.user.ownedBadges[n] || {},
					i = Object(d.e)(s) ? s.type : s.id;
				return Object.keys(o).map(e => r[e]).find(e => e && e.type === i)
			}

			function C(e, t, s, n) {
				const a = e.economics.subredditPremium[t];
				if (a && a.status === u.a.Fetched) {
					if (s === o.a.Loyalty || s === o.a.Achievement) return a.data.collections[s];
					if (s === o.a.Cosmetic && n) return a.data.collections[s][n]
				}
				return f
			}

			function N(e, t) {
				const s = C(e, t, o.a.Loyalty).find(e => "membership" === e.id);
				return s ? [].concat(s.locked, s.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : f
			}

			function P(e, t) {
				const s = e.economics.subredditPremium[t];
				if (s && s.status === u.a.Fetched) {
					const e = s.data.collections[o.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(d.f)
				}
				return f
			}

			function k(e, t) {
				return C(e, t, o.a.Cosmetic, o.c.Gallery).some(e => e.locked.some(e => Object(d.f)(e) || !!e.price))
			}
			const I = e => {
				const t = [],
					s = e.economics.paymentSystems;
				if (s.status === l.a.Fetched && s.data.stripe && s.data.stripe.sources) {
					const e = s.data.stripe.sources;
					for (const s in e) {
						const n = e[s];
						t.push({
							display: `${n.brand} •••• ${n.last4}`,
							id: s,
							type: i.a.SavedStripe
						})
					}
				}
				if (s.status === l.a.Fetched && s.data.braintree && s.data.braintree.sources) {
					const e = s.data.braintree.sources;
					for (const s in e) {
						const n = e[s];
						"PayPal" === n.brand && t.push({
							display: "PayPal",
							id: n.id,
							type: i.a.SavedPayPal
						})
					}
				}
				return t
			};
			var M;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(M || (M = {}));
			const L = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Special Membership"
				},
				A = (e, t) => Object.values(e.products.models).filter(e => e.type === c.a.Membership && t && e.subredditId === t),
				T = (e, t) => {
					if (!t) return {};
					const s = L.prices;
					A(e, t).forEach(e => {
						e.price && e.currency && (s[e.currency] = e.price)
					});
					const n = _(e, t);
					return n && n.price && n.currency && (s[n.currency] = n.price), s
				},
				D = (e, t) => {
					var s, n, a, r;
					const d = (null === (r = null === (a = null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.crypto) || void 0 === n ? void 0 : n.points) || void 0 === a ? void 0 : a[t || ""]) || void 0 === r ? void 0 : r.nomenclature) || L;
					return {
						prices: T(e, t),
						member: d.member || L.member,
						memberPlural: d.memberPlural || L.memberPlural,
						memberAlt: d.memberAlt || L.memberAlt,
						memberAltPlural: d.memberAltPlural || L.memberAltPlural,
						membership: d.membership || L.membership,
						membershipAlt: d.membershipAlt || L.membershipAlt
					}
				},
				H = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === l.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				R = (e, t) => {
					const s = e.user.ownedBadges[t] || {};
					return !!Object.keys(s).length
				},
				F = e => {
					const t = e.economics.paymentSystems;
					return t.status === l.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				U = (e, t) => {
					let {
						subredditId: s
					} = t;
					if (!s) return;
					return e.economics.emotes[s]
				},
				G = (e, t) => {
					const s = t && e.economics.gifs[t];
					return !!s && s.hasGifProduct
				},
				W = (e, t) => !!t && !!Object(g.a)(e, {
					subredditId: t
				}),
				V = (e, t, s) => {
					if (Object(b.b)(e)) return !(!t || !Object(m.C)(e, {
						subredditId: t
					})) || (!!q(e, t) || !(!n.d.spGiphy(e) || !z(e, s)));
					if (!Object(h.a)(e, {
							subredditId: t
						})) return !1;
					if (Object(g.f)(e, {
							subredditId: t
						})) return !0;
					if (z(e, s)) return !0;
					const a = n.d.spGiphy(e),
						r = G(e, t);
					return !!q(e, t) || a && r
				},
				z = (e, t) => {
					const s = "replyToPost" !== t && Object(p.c)(e, {
						commentId: t
					});
					if (s && Object(r.a)(s)) return !0
				},
				q = (e, t) => {
					const s = n.d.spGiphy(e),
						a = G(e, t);
					return s && a
				},
				$ = (e, t, s) => {
					if (t) {
						const n = e.economics.banners.dismissedBanners[t];
						if (n && n.data) return !!n.data[s]
					}
				},
				K = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/gold/powerups/benefitSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./src/reddit/models/Gold/Powerups/index.ts"),
				a = s("./src/lib/initializeClient/installReducer.ts"),
				r = s("./src/reddit/actions/gold/constants.ts");
			const d = {};
			var o = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var s, n;
					switch (t.type) {
						case r.mb:
						case r.nb: {
							const {
								benefitStatuses: n,
								subredditId: a
							} = t.payload;
							if (!n) return e;
							const r = null !== (s = e[a]) && void 0 !== s ? s : {},
								d = {};
							return n.forEach(e => {
								let {
									benefit: t,
									isEnabled: s
								} = e;
								d[t] = s
							}), {
								...e,
								[a]: {
									...r,
									...d
								}
							}
						}
						case r.L: {
							const {
								benefitStatuses: s,
								subredditId: a
							} = t.payload, r = null !== (n = e[a]) && void 0 !== n ? n : {}, d = {};
							return s.forEach(e => {
								let {
									benefit: t,
									isEnabled: s
								} = e;
								d[t] = s
							}), {
								...e,
								[a]: {
									...r,
									...d
								}
							}
						}
						default:
							return e
					}
				},
				i = s("./node_modules/reselect/es/index.js");
			Object(a.a)({
				features: {
					powerupsBenefitSettings: o
				}
			});
			const c = (e, t) => {
					let {
						subredditId: s
					} = t;
					return s ? e.features.powerupsBenefitSettings[s] : null
				},
				l = (e => Object(i.a)(c, t => !!(null == t ? void 0 : t[e])))(n.a.CommentsWithGifs)
		},
		"./src/reddit/selectors/products.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return r
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/models/Product/index.ts");
			const a = (e, t) => {
					const s = e.products.models[t];
					if (s && s.type === n.a.Badge) return s
				},
				r = (e, t) => {
					let {
						productId: s
					} = t;
					const n = e.products.models[s];
					if (n) {
						const t = n.subredditId,
							a = Object.keys(e.user.ownedBadges[t] || {}),
							r = e.badges.models,
							d = Date.now();
						let o = !1;
						return a.forEach(e => {
							const t = r[e];
							t && t.type === s && t.endsAt > d && (o = !0)
						}), o
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditPremiumBadgeManagement.6bf4de7af2ccb22074b6.js.map