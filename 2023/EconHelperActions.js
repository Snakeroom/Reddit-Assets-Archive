// https://www.redditstatic.com/desktop2x/EconHelperActions.1aa2b6604fe41c9e5e6f.js
// Retrieved at 6/6/2023, 10:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconHelperActions"], {
		"./node_modules/lodash/_LazyWrapper.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseCreate.js"),
				s = r("./node_modules/lodash/_baseLodash.js"),
				o = 4294967295;

			function d(e) {
				this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = o, this.__views__ = []
			}
			d.prototype = n(s.prototype), d.prototype.constructor = d, e.exports = d
		},
		"./node_modules/lodash/_LodashWrapper.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseCreate.js"),
				s = r("./node_modules/lodash/_baseLodash.js");

			function o(e, t) {
				this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
			}
			o.prototype = n(s.prototype), o.prototype.constructor = o, e.exports = o
		},
		"./node_modules/lodash/_baseLodash.js": function(e, t) {
			e.exports = function() {}
		},
		"./node_modules/lodash/_baseSetData.js": function(e, t, r) {
			var n = r("./node_modules/lodash/identity.js"),
				s = r("./node_modules/lodash/_metaMap.js"),
				o = s ? function(e, t) {
					return s.set(e, t), e
				} : n;
			e.exports = o
		},
		"./node_modules/lodash/_composeArgs.js": function(e, t) {
			var r = Math.max;
			e.exports = function(e, t, n, s) {
				for (var o = -1, d = e.length, c = n.length, i = -1, a = t.length, u = r(d - c, 0), l = Array(a + u), m = !s; ++i < a;) l[i] = t[i];
				for (; ++o < c;)(m || o < d) && (l[n[o]] = e[o]);
				for (; u--;) l[i++] = e[o++];
				return l
			}
		},
		"./node_modules/lodash/_composeArgsRight.js": function(e, t) {
			var r = Math.max;
			e.exports = function(e, t, n, s) {
				for (var o = -1, d = e.length, c = -1, i = n.length, a = -1, u = t.length, l = r(d - i, 0), m = Array(l + u), _ = !s; ++o < l;) m[o] = e[o];
				for (var p = o; ++a < u;) m[p + a] = t[a];
				for (; ++c < i;)(_ || o < d) && (m[p + n[c]] = e[o++]);
				return m
			}
		},
		"./node_modules/lodash/_countHolders.js": function(e, t) {
			e.exports = function(e, t) {
				for (var r = e.length, n = 0; r--;) e[r] === t && ++n;
				return n
			}
		},
		"./node_modules/lodash/_createBind.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_createCtor.js"),
				s = r("./node_modules/lodash/_root.js"),
				o = 1;
			e.exports = function(e, t, r) {
				var d = t & o,
					c = n(e);
				return function t() {
					return (this && this !== s && this instanceof t ? c : e).apply(d ? r : this, arguments)
				}
			}
		},
		"./node_modules/lodash/_createCtor.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseCreate.js"),
				s = r("./node_modules/lodash/isObject.js");
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
					var r = n(e.prototype),
						o = e.apply(r, t);
					return s(o) ? o : r
				}
			}
		},
		"./node_modules/lodash/_createCurry.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_apply.js"),
				s = r("./node_modules/lodash/_createCtor.js"),
				o = r("./node_modules/lodash/_createHybrid.js"),
				d = r("./node_modules/lodash/_createRecurry.js"),
				c = r("./node_modules/lodash/_getHolder.js"),
				i = r("./node_modules/lodash/_replaceHolders.js"),
				a = r("./node_modules/lodash/_root.js");
			e.exports = function(e, t, r) {
				var u = s(e);
				return function s() {
					for (var l = arguments.length, m = Array(l), _ = l, p = c(s); _--;) m[_] = arguments[_];
					var f = l < 3 && m[0] !== p && m[l - 1] !== p ? [] : i(m, p);
					return (l -= f.length) < r ? d(e, t, o, s.placeholder, void 0, m, f, void 0, void 0, r - l) : n(this && this !== a && this instanceof s ? u : e, this, m)
				}
			}
		},
		"./node_modules/lodash/_createHybrid.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_composeArgs.js"),
				s = r("./node_modules/lodash/_composeArgsRight.js"),
				o = r("./node_modules/lodash/_countHolders.js"),
				d = r("./node_modules/lodash/_createCtor.js"),
				c = r("./node_modules/lodash/_createRecurry.js"),
				i = r("./node_modules/lodash/_getHolder.js"),
				a = r("./node_modules/lodash/_reorder.js"),
				u = r("./node_modules/lodash/_replaceHolders.js"),
				l = r("./node_modules/lodash/_root.js"),
				m = 1,
				_ = 2,
				p = 8,
				f = 16,
				b = 128,
				h = 512;
			e.exports = function e(t, r, g, E, j, y, O, v, S, C) {
				var I = r & b,
					A = r & m,
					N = r & _,
					P = r & (p | f),
					w = r & h,
					D = N ? void 0 : d(t);
				return function m() {
					for (var _ = arguments.length, p = Array(_), f = _; f--;) p[f] = arguments[f];
					if (P) var b = i(m),
						h = o(p, b);
					if (E && (p = n(p, E, j, P)), y && (p = s(p, y, O, P)), _ -= h, P && _ < C) {
						var T = u(p, b);
						return c(t, r, e, m.placeholder, g, p, T, v, S, C - _)
					}
					var x = A ? g : this,
						M = N ? x[t] : t;
					return _ = p.length, v ? p = a(p, v) : w && _ > 1 && p.reverse(), I && S < _ && (p.length = S), this && this !== l && this instanceof m && (M = D || d(M)), M.apply(x, p)
				}
			}
		},
		"./node_modules/lodash/_createPartial.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_apply.js"),
				s = r("./node_modules/lodash/_createCtor.js"),
				o = r("./node_modules/lodash/_root.js"),
				d = 1;
			e.exports = function(e, t, r, c) {
				var i = t & d,
					a = s(e);
				return function t() {
					for (var s = -1, d = arguments.length, u = -1, l = c.length, m = Array(l + d), _ = this && this !== o && this instanceof t ? a : e; ++u < l;) m[u] = c[u];
					for (; d--;) m[u++] = arguments[++s];
					return n(_, i ? r : this, m)
				}
			}
		},
		"./node_modules/lodash/_createRecurry.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_isLaziable.js"),
				s = r("./node_modules/lodash/_setData.js"),
				o = r("./node_modules/lodash/_setWrapToString.js"),
				d = 1,
				c = 2,
				i = 4,
				a = 8,
				u = 32,
				l = 64;
			e.exports = function(e, t, r, m, _, p, f, b, h, g) {
				var E = t & a;
				t |= E ? u : l, (t &= ~(E ? l : u)) & i || (t &= ~(d | c));
				var j = [e, t, _, E ? p : void 0, E ? f : void 0, E ? void 0 : p, E ? void 0 : f, b, h, g],
					y = r.apply(void 0, j);
				return n(e) && s(y, j), y.placeholder = m, o(y, e, t)
			}
		},
		"./node_modules/lodash/_createWrap.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseSetData.js"),
				s = r("./node_modules/lodash/_createBind.js"),
				o = r("./node_modules/lodash/_createCurry.js"),
				d = r("./node_modules/lodash/_createHybrid.js"),
				c = r("./node_modules/lodash/_createPartial.js"),
				i = r("./node_modules/lodash/_getData.js"),
				a = r("./node_modules/lodash/_mergeData.js"),
				u = r("./node_modules/lodash/_setData.js"),
				l = r("./node_modules/lodash/_setWrapToString.js"),
				m = r("./node_modules/lodash/toInteger.js"),
				_ = "Expected a function",
				p = 1,
				f = 2,
				b = 8,
				h = 16,
				g = 32,
				E = 64,
				j = Math.max;
			e.exports = function(e, t, r, y, O, v, S, C) {
				var I = t & f;
				if (!I && "function" != typeof e) throw new TypeError(_);
				var A = y ? y.length : 0;
				if (A || (t &= ~(g | E), y = O = void 0), S = void 0 === S ? S : j(m(S), 0), C = void 0 === C ? C : m(C), A -= O ? O.length : 0, t & E) {
					var N = y,
						P = O;
					y = O = void 0
				}
				var w = I ? void 0 : i(e),
					D = [e, t, r, y, O, N, P, v, S, C];
				if (w && a(D, w), e = D[0], t = D[1], r = D[2], y = D[3], O = D[4], !(C = D[9] = void 0 === D[9] ? I ? 0 : e.length : j(D[9] - A, 0)) && t & (b | h) && (t &= ~(b | h)), t && t != p) T = t == b || t == h ? o(e, t, C) : t != g && t != (p | g) || O.length ? d.apply(void 0, D) : c(e, t, r, y);
				else var T = s(e, t, r);
				return l((w ? n : u)(T, D), e, t)
			}
		},
		"./node_modules/lodash/_getData.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_metaMap.js"),
				s = r("./node_modules/lodash/noop.js"),
				o = n ? function(e) {
					return n.get(e)
				} : s;
			e.exports = o
		},
		"./node_modules/lodash/_getFuncName.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_realNames.js"),
				s = Object.prototype.hasOwnProperty;
			e.exports = function(e) {
				for (var t = e.name + "", r = n[t], o = s.call(n, t) ? r.length : 0; o--;) {
					var d = r[o],
						c = d.func;
					if (null == c || c == e) return d.name
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
			var r = /\{\n\/\* \[wrapped with (.+)\] \*/,
				n = /,? & /;
			e.exports = function(e) {
				var t = e.match(r);
				return t ? t[1].split(n) : []
			}
		},
		"./node_modules/lodash/_insertWrapDetails.js": function(e, t) {
			var r = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
			e.exports = function(e, t) {
				var n = t.length;
				if (!n) return e;
				var s = n - 1;
				return t[s] = (n > 1 ? "& " : "") + t[s], t = t.join(n > 2 ? ", " : " "), e.replace(r, "{\n/* [wrapped with " + t + "] */\n")
			}
		},
		"./node_modules/lodash/_isLaziable.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_LazyWrapper.js"),
				s = r("./node_modules/lodash/_getData.js"),
				o = r("./node_modules/lodash/_getFuncName.js"),
				d = r("./node_modules/lodash/wrapperLodash.js");
			e.exports = function(e) {
				var t = o(e),
					r = d[t];
				if ("function" != typeof r || !(t in n.prototype)) return !1;
				if (e === r) return !0;
				var c = s(r);
				return !!c && e === c[0]
			}
		},
		"./node_modules/lodash/_mergeData.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_composeArgs.js"),
				s = r("./node_modules/lodash/_composeArgsRight.js"),
				o = r("./node_modules/lodash/_replaceHolders.js"),
				d = "__lodash_placeholder__",
				c = 1,
				i = 2,
				a = 4,
				u = 8,
				l = 128,
				m = 256,
				_ = Math.min;
			e.exports = function(e, t) {
				var r = e[1],
					p = t[1],
					f = r | p,
					b = f < (c | i | l),
					h = p == l && r == u || p == l && r == m && e[7].length <= t[8] || p == (l | m) && t[7].length <= t[8] && r == u;
				if (!b && !h) return e;
				p & c && (e[2] = t[2], f |= r & c ? 0 : a);
				var g = t[3];
				if (g) {
					var E = e[3];
					e[3] = E ? n(E, g, t[4]) : g, e[4] = E ? o(e[3], d) : t[4]
				}
				return (g = t[5]) && (E = e[5], e[5] = E ? s(E, g, t[6]) : g, e[6] = E ? o(e[5], d) : t[6]), (g = t[7]) && (e[7] = g), p & l && (e[8] = null == e[8] ? t[8] : _(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = f, e
			}
		},
		"./node_modules/lodash/_metaMap.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_WeakMap.js"),
				s = n && new n;
			e.exports = s
		},
		"./node_modules/lodash/_realNames.js": function(e, t) {
			e.exports = {}
		},
		"./node_modules/lodash/_reorder.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_copyArray.js"),
				s = r("./node_modules/lodash/_isIndex.js"),
				o = Math.min;
			e.exports = function(e, t) {
				for (var r = e.length, d = o(t.length, r), c = n(e); d--;) {
					var i = t[d];
					e[d] = s(i, r) ? c[i] : void 0
				}
				return e
			}
		},
		"./node_modules/lodash/_replaceHolders.js": function(e, t) {
			var r = "__lodash_placeholder__";
			e.exports = function(e, t) {
				for (var n = -1, s = e.length, o = 0, d = []; ++n < s;) {
					var c = e[n];
					c !== t && c !== r || (e[n] = r, d[o++] = n)
				}
				return d
			}
		},
		"./node_modules/lodash/_setData.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseSetData.js"),
				s = r("./node_modules/lodash/_shortOut.js")(n);
			e.exports = s
		},
		"./node_modules/lodash/_setWrapToString.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_getWrapDetails.js"),
				s = r("./node_modules/lodash/_insertWrapDetails.js"),
				o = r("./node_modules/lodash/_setToString.js"),
				d = r("./node_modules/lodash/_updateWrapDetails.js");
			e.exports = function(e, t, r) {
				var c = t + "";
				return o(e, s(c, d(n(c), r)))
			}
		},
		"./node_modules/lodash/_updateWrapDetails.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_arrayEach.js"),
				s = r("./node_modules/lodash/_arrayIncludes.js"),
				o = [
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
				return n(o, (function(r) {
					var n = "_." + r[0];
					t & r[1] && !s(e, n) && e.push(n)
				})), e.sort()
			}
		},
		"./node_modules/lodash/_wrapperClone.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_LazyWrapper.js"),
				s = r("./node_modules/lodash/_LodashWrapper.js"),
				o = r("./node_modules/lodash/_copyArray.js");
			e.exports = function(e) {
				if (e instanceof n) return e.clone();
				var t = new s(e.__wrapped__, e.__chain__);
				return t.__actions__ = o(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
			}
		},
		"./node_modules/lodash/curry.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_createWrap.js"),
				s = 8;

			function o(e, t, r) {
				var d = n(e, s, void 0, void 0, void 0, void 0, void 0, t = r ? void 0 : t);
				return d.placeholder = o.placeholder, d
			}
			o.placeholder = {}, e.exports = o
		},
		"./node_modules/lodash/forOwn.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseForOwn.js"),
				s = r("./node_modules/lodash/_castFunction.js");
			e.exports = function(e, t) {
				return e && n(e, s(t))
			}
		},
		"./node_modules/lodash/wrapperLodash.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_LazyWrapper.js"),
				s = r("./node_modules/lodash/_LodashWrapper.js"),
				o = r("./node_modules/lodash/_baseLodash.js"),
				d = r("./node_modules/lodash/isArray.js"),
				c = r("./node_modules/lodash/isObjectLike.js"),
				i = r("./node_modules/lodash/_wrapperClone.js"),
				a = Object.prototype.hasOwnProperty;

			function u(e) {
				if (c(e) && !d(e) && !(e instanceof n)) {
					if (e instanceof s) return e;
					if (a.call(e, "__wrapped__")) return i(e)
				}
				return new s(e)
			}
			u.prototype = o.prototype, u.prototype.constructor = u, e.exports = u
		},
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js");

			function s(e, t) {
				const r = new n.BigNumber(e),
					s = new n.BigNumber(t),
					o = new n.BigNumber(r.dividedBy(s)),
					d = new n.BigNumber("100").multipliedBy(o);
				return new n.BigNumber(d).toNumber()
			}
		},
		"./src/lib/constants/specialMembership.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const n = "custom"
		},
		"./src/reddit/actions/badge.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "h", (function() {
				return l
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "g", (function() {
				return _
			})), r.d(t, "i", (function() {
				return E
			})), r.d(t, "j", (function() {
				return j
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/actions/governance/errorToast.ts"),
				o = r("./src/reddit/endpoints/governance/badges.ts");
			const d = "BADGE__BADGE_APPLICATION_SUCCESS",
				c = "BADGE__BADGE_APPLICATION_FAILURE",
				i = "BADGE__SUBREDDIT_BADGES_FETCH_SUCCESS",
				a = "BADGE__SUBREDDIT_BADGES_FETCH_FAILURE",
				u = "BADGE__SUBREDDIT_BADGES_FETCH_PENDING",
				l = "BADGE__USER_BADGES_FETCH_SUCCESS",
				m = "BADGE__USER_BADGES_FETCH_FAILURE",
				_ = "BADGE__USER_BADGES_FETCH_PENDING",
				p = Object(n.a)(d),
				f = Object(n.a)(c),
				b = (Object(n.a)("BADGE__BADGE_APPLICATION_PENDING"), Object(n.a)(i)),
				h = Object(n.a)(a),
				g = Object(n.a)(u),
				E = (Object(n.a)(l), Object(n.a)(m), Object(n.a)(_), e => {
					let {
						badgeIds: t,
						subredditId: r
					} = e;
					return async (e, n, d) => {
						let {
							apiContext: c
						} = d;
						const i = n(),
							a = i.user.account;
						if (a) {
							const n = (i.users.appliedBadges[a.id] || {})[r] || [],
								d = t.length ? t[0] : n[0],
								u = !!t.length;
							e(p({
								badgeIds: t,
								subredditId: r,
								userId: a.id
							}));
							const l = await Object(o.a)(c(), r, d, u);
							l.ok || (e(f({
								badgeIds: t,
								subredditId: r,
								error: l.error,
								previousBadgeIds: n,
								userId: a.id
							})), Object(s.a)(e, l.error))
						}
					}
				}),
				j = e => {
					let {
						subredditId: t,
						userIds: r
					} = e;
					return async (e, n, s) => {
						let {
							apiContext: d
						} = s;
						e(g({
							subredditId: t
						}));
						const c = await Object(o.b)(d(), t, r);
						c.ok ? e(b({
							...c.body,
							subredditId: t
						})) : e(h({
							subredditId: t,
							error: c.error
						}))
					}
				}
		},
		"./src/reddit/actions/economics/helpers/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "fetchAll", (function() {
				return p
			})), r.d(t, "promptUserToBuyMoreCoins", (function() {
				return f
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/curry.js"),
				s = r.n(n),
				o = r("./src/reddit/actions/badge.ts"),
				d = r("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				c = r("./src/reddit/actions/governance/communityDetails.ts"),
				i = r("./src/reddit/actions/governance/publicWalletsFetched.ts"),
				a = r("./src/reddit/featureFlags/index.ts"),
				u = r("./src/lib/initializeClient/installReducer.ts"),
				l = r("./src/reddit/reducers/features/comments/index.ts");
			Object(u.a)({
				features: {
					comments: l.a
				}
			});
			const m = {
					badgesroyaletest: "t5_socj8",
					ethtrader: "t5_37jgj",
					fortnitebr: "t5_3oeyf",
					funkygoose: "t5_kzsl3"
				},
				_ = s()((e, t) => t.some(t => a.d[t](e))),
				p = e => async (t, r, n) => {
					let {
						apiContext: s
					} = n;
					const {
						commentIds: a = [],
						postIds: u = [],
						skip: l = []
					} = e;
					let p = e.subredditId;
					if (!p) {
						e.subredditName && (p = m[e.subredditName.toLowerCase()])
					}
					if (!p) return;
					const f = [],
						b = r(),
						h = _(b),
						g = b.features.comments.models,
						E = b.posts.models,
						j = new Set(b.user.account ? [b.user.account.id] : []);
					u.forEach(e => {
						const t = E[e];
						t && j.add(t.authorId)
					}), a.forEach(e => {
						const t = g[e];
						t && j.add(t.authorId)
					});
					const y = Array.from(j);
					!l.includes("badges") && y.length && h(["spBadges"]) && f.push(t(Object(o.j)({
						subredditId: p,
						userIds: y
					}))), !l.includes("communityDetails") && h(["spPoints", "spSpecialMemberships"]) && f.push(t(Object(c.a)({
						subredditId: p
					}))), !l.includes("subscription") && h(["spSpecialMemberships"]) && f.push(t(Object(d.g)(p))), !l.includes("wallets") && y.length && h(["spPoints"]) && f.push(t(Object(i.a)({
						subredditId: p,
						userIds: y
					}))), await Promise.all(f)
				};

			function f() {
				window.open("/coins", "_blank")
			}
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			}));
			const n = "ECONOMICS__ME__ME_DATA_SUCCESS",
				s = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				o = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return m
			})), r.d(t, "a", (function() {
				return _
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/lib/makeRequest/index.ts"),
				o = r("./src/config.ts"),
				d = r("./src/reddit/endpoints/governance/requester.ts");
			var c = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/economics/me/constants.ts");
			const a = Object(c.a)(i.a),
				u = Object(c.a)(i.b),
				l = Object(c.a)(i.c),
				m = e => async (t, r, n) => {
					let {
						apiContext: s
					} = n;
					const c = e && e.includeMemberships || !1,
						i = e && e.forceFetch || !1,
						u = r();
					if (!u.economics.me.fetched || c && !u.economics.me.data.specialMemberships || i) {
						const e = await
						function(e, t) {
							return Object(d.a)(e, {
								method: "get",
								endpoint: `${o.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(s(), c);
						if (e.ok) {
							const r = e.body;
							c && !r.specialMemberships && (r.specialMemberships = {}), t(a(r))
						}
					}
				}, _ = () => async (e, t) => {
					const r = t(),
						o = r.economics.me.data;
					if (!o) throw new Error("me data required for copy to be fetched");
					if (!r.economics.pointsCopy.fetched) {
						e(u());
						const t = `https://${o.pointsDocsBaseUrl}v1.json?web`,
							r = await Object(s.b)({
								endpoint: t,
								method: n.pb.GET
							});
						r.ok && r.body && e(l(r.body))
					}
				}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "e", (function() {
				return s
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "d", (function() {
				return c
			}));
			const n = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				s = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				d = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				c = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "g", (function() {
				return _
			})), r.d(t, "h", (function() {
				return p
			})), r.d(t, "i", (function() {
				return f
			})), r.d(t, "j", (function() {
				return b
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/actions/modal.ts"),
				o = r("./src/reddit/constants/modals.ts"),
				d = r("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const c = Object(n.a)(d.a),
				i = Object(n.a)(d.b),
				a = Object(n.a)(d.c),
				u = Object(n.a)(d.d),
				l = Object(n.a)(d.e),
				m = Object(n.a)(d.f),
				_ = Object(n.a)(d.g),
				p = Object(n.a)(d.h),
				f = Object(n.a)(d.i),
				b = e => Object(s.h)(o.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "f", (function() {
				return i
			})), r.d(t, "g", (function() {
				return a
			})), r.d(t, "h", (function() {
				return u
			})), r.d(t, "i", (function() {
				return l
			}));
			const n = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return v
			})), r.d(t, "g", (function() {
				return S
			})), r.d(t, "b", (function() {
				return C
			})), r.d(t, "d", (function() {
				return I
			})), r.d(t, "e", (function() {
				return A
			})), r.d(t, "c", (function() {
				return N
			})), r.d(t, "f", (function() {
				return P
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/forOwn.js"),
				s = r.n(n),
				o = r("./src/reddit/actions/governance/errorToast.ts"),
				d = r("./src/reddit/endpoints/economics/emojis.ts"),
				c = r("./src/reddit/endpoints/economics/specialMembership.ts"),
				i = r("./src/reddit/endpoints/economics/subredditPremium.ts"),
				a = r("./src/reddit/endpoints/governance/badges.ts"),
				u = r("./src/config.ts"),
				l = r("./src/reddit/endpoints/governance/requester.ts");

			function m(e, t, r) {
				return Object(l.a)(e, {
					method: "get",
					endpoint: `${u.a.metaUrl}/products/${t}?owners=${r}` + "&types=emotes_pack,giphy"
				})
			}
			var _ = r("./src/reddit/models/Badge/index.ts"),
				p = r("./src/reddit/models/Badge/managementPage.ts"),
				f = r("./src/reddit/models/Product/index.ts"),
				b = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				h = r("./src/reddit/selectors/economics.ts"),
				g = r("./src/reddit/selectors/products.ts"),
				E = r("./src/reddit/actions/economics/me/thunkedActions.ts"),
				j = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function y(e) {
				return !!e && "removeBadge" === e.type
			}

			function O(e) {
				if (!y(e)) return e
			}
			const v = () => async (e, t, r) => {
				let {
					apiContext: n
				} = r;
				if (!t().user.account) return;
				await e(Object(E.b)({
					includeMemberships: !0
				}));
				const s = t().economics.me.data.specialMemberships || {},
					o = Object.keys(s);
				if (o.length) {
					const t = await Object(c.e)(n(), o);
					t.ok && e(Object(j.g)(t.body))
				}
			}, S = (e, t) => async (r, n, s) => {
				let {
					apiContext: o
				} = s;
				const d = n().user.account,
					c = n().economics.subredditPremium[e],
					a = !c || c.status !== b.a.Fetched || t;
				if (d && a) {
					const t = await Object(i.a)(o(), e, d.id);
					r(Object(j.i)(t))
				}
			}, C = e => async (t, r, n) => {
				let {
					apiContext: s
				} = n;
				const d = r(),
					c = d.user.account,
					i = Object(h.f)(d, e.subredditId),
					u = Object.keys(i).map(e => i[e]).filter(Boolean);
				if (c && e.badge) {
					let r, n;
					r = e.placement === _.a.First ? i[p.a.Loyalty] : e.placement === _.a.Second ? i[p.a.Achievement] : i[p.a.Cosmetic], t(Object(j.a)({
						...e,
						badge: O(e.badge),
						currentAppliedBadges: u,
						userId: c.id
					})), y(e.badge) && r ? n = await Object(a.a)(s(), e.subredditId, r.id, !1) : y(e.badge) || (n = await Object(a.a)(s(), e.subredditId, e.badge.id)), n && !n.ok && (t(Object(j.a)({
						...e,
						badge: r,
						currentAppliedBadges: u,
						userId: c.id
					})), Object(o.a)(t, n.error))
				}
			}, I = (e, t) => async (r, n, s) => {
				let {
					apiContext: o
				} = s;
				await r(S(e, !0));
				const d = n().economics.subredditPremium[e];
				if (d && d.status === b.a.Fetched) {
					const n = d.data.userOwnedBadges.find(e => e.type === t.id);
					n && (r(C({
						badge: n,
						subredditId: e,
						placement: n.placement
					})), r(Object(j.d)(p.c.MyBadges)))
				}
			}, A = e => async (t, r, n) => {
				let {
					apiContext: c
				} = n;
				const i = r().user.account,
					a = !r().economics.emotes[e],
					u = !r().economics.gifs[e];
				if (i && (a || u)) {
					const [r, n] = await Promise.all([Object(d.b)(c(), e), m(c(), e, i.id)]);
					if (!n.ok) return void Object(o.a)(t, n.error);
					const a = {
						emotes: [],
						emoteCollections: r.ok ? r.body : {},
						giphy: []
					};
					s()(n.body, e => {
						e.type === f.a.EmotesPack ? a.emotes.push(e) : e.type === f.a.Giphy && a.giphy.push(e)
					}), t(Object(j.e)({
						subredditId: e,
						products: a
					}))
				}
			}, N = (e, t, r) => async (n, s, o) => {
				let {
					apiContext: d
				} = o;
				if (await n(S(e, !0)), r && t) {
					const r = s(),
						o = Object(h.f)(r, e),
						d = Object(g.a)(r, t);
					if (!o[Object(p.d)(d.placement)] && d) {
						const t = Object(h.l)(r, {
							subredditId: e,
							badge: d
						});
						t && await n(C({
							badge: t,
							subredditId: e
						}))
					}
					n(Object(j.c)({
						subredditId: e,
						initialView: p.c.MyBadges
					}))
				}
			}, P = e => async (t, r, n) => {
				let {
					apiContext: s
				} = n;
				const {
					wallet: o
				} = await Object(c.c)(s(), e);
				t(Object(j.f)({
					wallet: o
				})), await t(S(e.subredditId, !0))
			}
		},
		"./src/reddit/actions/governance/communityDetails.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/endpoints/governance/community.ts"),
				o = r("./src/reddit/actions/governance/constants.ts");
			const d = Object(n.a)(o.a),
				c = e => {
					let {
						subredditId: t
					} = e;
					return async (e, r, n) => {
						let {
							apiContext: o
						} = n;
						const c = await Object(s.a)(o(), {
							subredditId: t
						});
						c.ok && e(d({
							subredditId: t,
							...c.body
						}))
					}
				}
		},
		"./src/reddit/actions/governance/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "f", (function() {
				return i
			})), r.d(t, "g", (function() {
				return a
			})), r.d(t, "h", (function() {
				return u
			})), r.d(t, "i", (function() {
				return l
			})), r.d(t, "j", (function() {
				return m
			})), r.d(t, "k", (function() {
				return _
			})), r.d(t, "l", (function() {
				return p
			})), r.d(t, "m", (function() {
				return f
			})), r.d(t, "n", (function() {
				return b
			})), r.d(t, "o", (function() {
				return h
			})), r.d(t, "p", (function() {
				return g
			})), r.d(t, "q", (function() {
				return E
			})), r.d(t, "r", (function() {
				return j
			})), r.d(t, "s", (function() {
				return y
			})), r.d(t, "t", (function() {
				return O
			})), r.d(t, "u", (function() {
				return v
			})), r.d(t, "v", (function() {
				return S
			})), r.d(t, "w", (function() {
				return C
			})), r.d(t, "x", (function() {
				return I
			}));
			const n = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				s = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				o = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				d = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
				c = "POLL_VOTE_SUCCESS",
				i = "GOVERNANCE__PROPOSAL_CREATION_FAILURE",
				a = "GOVERNANCE__PROPOSAL_CREATION_PENDING",
				u = "GOVERNANCE__PROPOSAL_CREATION_SUCCESS",
				l = "GOVERNANCE__PROPOSAL_OPTION_VOTE_FAILURE",
				m = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				_ = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				p = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				f = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				b = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				h = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				g = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				E = "GOVERNANCE__TRANSFER_FAILURE",
				j = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				y = "GOVERNANCE__TRANSFER_PENDING",
				O = "GOVERNANCE__TRANSFER_SUCCESS",
				v = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				S = "GOVERNANCE__WALLETS_FETCH_PENDING",
				C = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				I = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/reddit/actions/toaster.ts"),
				s = r("./src/reddit/helpers/governanceErrorText/index.ts"),
				o = r("./src/reddit/models/Toast/index.ts");

			function d(e, t) {
				e(Object(n.f)({
					duration: 5e3,
					kind: o.b.Error,
					text: Object(s.a)(t)
				}))
			}
		},
		"./src/reddit/actions/governance/publicWalletsFetched.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/endpoints/governance/wallet.ts"),
				o = r("./src/reddit/actions/governance/constants.ts");
			const d = Object(n.a)(o.m),
				c = Object(n.a)(o.n),
				i = Object(n.a)(o.l);
			t.a = e => async (t, r, n) => {
				let {
					apiContext: o
				} = n;
				t(d({
					subredditId: e.subredditId
				}));
				const a = await Object(s.b)(o(), e);
				a.ok ? t(c({
					subredditId: e.subredditId,
					...a.body
				})) : t(i({
					error: a.error
				}))
			}
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return d
			}));
			var n = r("./src/config.ts"),
				s = r("./src/reddit/endpoints/governance/requester.ts");
			const o = (e, t) => Object(s.a)(e, {
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
				d = (e, t) => Object(s.a)(e, {
					method: "get",
					endpoint: `${n.a.metaUrl}/product-collections/${t}?types=emotes_pack`
				})
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "e", (function() {
				return m
			})), r.d(t, "c", (function() {
				return _
			}));
			var n = r("./src/config.ts"),
				s = r("./src/lib/omitHeaders/index.ts"),
				o = r("./src/reddit/constants/headers.ts"),
				d = r("./src/reddit/endpoints/governance/requester.ts"),
				c = r("./src/reddit/helpers/governanceErrorText/index.ts"),
				i = r("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function a(e, t) {
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

			function u(e, t) {
				return Object(d.a)(e, {
					endpoint: `${n.a.metaUrl}/ps/me/braintree-client-tokens`,
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function l(e, t) {
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
				return Object(d.a)(Object(s.a)(e, [o.a]), {
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
			async function _(e, t) {
				const r = await Object(d.a)(e, {
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
				if (!r.ok) throw new Error(`Error fetching provisional membership: ${Object(c.b)(r.error)}`);
				return r.body
			}
		},
		"./src/reddit/endpoints/economics/subredditPremium.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/merge.js"),
				s = r.n(n),
				o = r("./src/config.ts"),
				d = r("./src/reddit/endpoints/governance/badges.ts"),
				c = r("./src/reddit/endpoints/governance/community.ts"),
				i = r("./src/reddit/endpoints/governance/products/badges.ts"),
				a = r("./src/reddit/endpoints/governance/requester.ts");
			async function u(e, t, r) {
				const n = {
						subredditId: t,
						badges: {},
						errors: {},
						collections: {},
						products: {},
						subscription: void 0,
						userOwnedBadges: []
					},
					u = function(e, t) {
						return Object(a.a)(e, {
							method: "get",
							endpoint: `${o.a.metaUrl}/product-collections/${t}?types=badge`
						})
					}(e, t),
					l = Object(c.a)(e, {
						subredditId: t
					}),
					m = Object(i.b)(e, t),
					_ = Object(d.c)(e, t, r),
					[p, f, b, h] = await Promise.all([u, l, m, _]);
				if (p.ok ? n.collections = p.body : n.errors.collections = p.error, f.ok) {
					const e = f.body;
					n.subscription = e.specialMemberships, n.communityRaw = e
				}
				return b.ok ? n.products = b.body : n.errors.products = b.error, h.ok ? (s()(n.badges, h.body.badges), n.userOwnedBadges = h.body.userOwnedBadges) : n.errors.userBadges = h.error, n
			}
			const l = (e, t) => Object(a.a)(e, {
				endpoint: `${o.a.metaUrl}/products/${t}?types=badge,membership`,
				method: "delete"
			})
		},
		"./src/reddit/endpoints/governance/badges.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "a", (function() {
				return c
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/config.ts"),
				s = r("./src/reddit/endpoints/governance/requester.ts");
			async function o(e, t, r) {
				const o = Object(s.a)(e, {
						headers: {
							"X-HTTP-Method-Override": "GET"
						},
						method: "post",
						endpoint: `${n.a.metaUrl}/badges/${t}`,
						data: {
							selected: !0,
							users: r
						}
					}),
					d = await o;
				if (d.ok) {
					const e = {},
						t = {},
						r = d.body;
					return Object.keys(r).forEach(n => {
						const s = r[n];
						t[n] = s, e[s.userId] || (e[s.userId] = []), e[s.userId].push(s.id)
					}), {
						...d,
						body: {
							badges: t,
							usersAppliedBadges: e
						}
					}
				}
				return d
			}
			async function d(e, t, r) {
				const o = await Object(s.a)(e, {
					method: "get",
					endpoint: `${n.a.metaUrl}/badges/${t}?users=${r}`
				});
				if (o.ok) {
					const e = {},
						t = [],
						r = o.body;
					return Object.keys(r).forEach(n => {
						const s = r[n];
						e[n] = s, t.push(s.id)
					}), {
						...o,
						body: {
							badges: e,
							userOwnedBadges: t
						}
					}
				}
				return o
			}

			function c(e, t, r) {
				let o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
				return Object(s.a)(e, {
					method: "patch",
					endpoint: `${n.a.metaUrl}/badges/${t}/${r}`,
					data: {
						selected: o
					}
				})
			}
		},
		"./src/reddit/endpoints/governance/community.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/config.ts"),
				s = r("./src/lib/constants/index.ts"),
				o = r("./src/reddit/endpoints/governance/requester.ts");

			function d(e, t) {
				return Object(o.a)(e, {
					endpoint: `${n.a.metaUrl}/communities/${t.subredditId}/me`,
					method: s.pb.GET
				})
			}
		},
		"./src/reddit/endpoints/governance/products/badges.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "d", (function() {
				return i
			}));
			var n = r("./src/config.ts"),
				s = r("./src/reddit/endpoints/governance/requester.ts");

			function o(e, t) {
				return Object(s.a)(e, {
					method: "get",
					endpoint: `${n.a.metaUrl}/products/${t}?types=badge`
				})
			}

			function d(e, t) {
				return Object(s.a)(e, {
					method: "get",
					endpoint: `${n.a.metaUrl}/products/${t}?types=badge,membership`
				})
			}

			function c(e, t) {
				return Object(s.a)(e, {
					method: "post",
					endpoint: `${n.a.metaUrl}/orders`,
					data: t
				})
			}

			function i(e, t) {
				return Object(s.a)(e, {
					method: "post",
					endpoint: `${n.a.metaUrl}/orders`,
					data: {
						currency: "usd",
						price: t.price,
						products: t.products,
						providerArgs: {
							paymentNonce: t.nonce
						},
						providerName: "braintree",
						subredditId: t.subredditId
					}
				})
			}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return c
			}));
			var n = r("./src/config.ts"),
				s = (r("./src/lib/bigNumberUtils/percent.ts"), r("./src/lib/constants/index.ts")),
				o = r("./src/reddit/endpoints/governance/requester.ts");

			function d(e, t) {
				return Object(o.a)(e, {
					endpoint: `${n.a.metaUrl}/wallets/${t.subredditId}/me`,
					method: s.pb.GET
				}).then(e => {
					if (e.ok) {
						const r = e.body,
							n = {
								[t.subredditId]: r
							};
						return {
							...e,
							body: n
						}
					}
					return e
				})
			}

			function c(e, t) {
				return Object(o.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: `${n.a.metaUrl}/wallets/${t.subredditId}`,
					method: s.pb.POST,
					data: t.userIds
				}).then(e => e.ok ? {
					...e,
					body: {
						wallets: e.body
					}
				} : e)
			}
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, r) {
			"use strict";

			function n(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let r = 0;
				return e.placement && t.placement && (r = e.placement.localeCompare(t.placement)), 0 === r && e.position && t.position && (r = e.position - t.position), 0 === r && (r = e.title.localeCompare(t.title)), r
			}

			function s(e) {
				return [...e].sort(n)
			}
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			}))
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return d
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js");

			function s(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function o(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(s).join(" ") : n.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function d(e) {
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
			}
		},
		"./src/reddit/models/Badge/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "f", (function() {
				return i
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return o
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, s, o, d = r("./src/config.ts");

			function c(e) {
				return "userId" in e
			}

			function i(e) {
				return !(!e.extra || !e.extra.membership) && !!e.extra.membership.included
			}

			function a(e, t, r) {
				const n = r.media[0],
					s = Object.keys(n);
				if (n["0x0"]) return n["0x0"];
				let o = {
					width: 1 / 0,
					height: 1 / 0,
					url: ""
				};
				if (s.forEach(r => {
						const s = n[r],
							[d, c] = r.split("x").map(e => parseInt(e));
						(d < o.width && d >= e || c < o.height && c >= t) && (o = {
							height: c,
							width: d,
							url: s
						})
					}), !o.url && s.length) {
					const e = Object.keys(n)[0],
						t = n[e],
						[r, s] = e.split("x").map(e => parseInt(e));
					o = {
						height: s,
						width: r,
						url: t
					}
				}
				return o.url
			}

			function u(e) {
				return e.startsWith("https") ? e : `${d.a.assetPath}/${e}`
			}

			function l(e, t, r) {
				const n = a(e, t, r),
					s = a(2 * e, 2 * t, r);
				return {
					url: u(n),
					url2x: u(s)
				}
			}! function(e) {
				e.First = "p1", e.Second = "p2"
			}(n || (n = {})),
			function(e) {
				e.ActivityTab = "activityTab", e.ChatTab = "chatTab", e.MessageTab = "messageTab", e.ChatHasNewMessages = "chatHasNewMessages", e.ChatUnreadMessages = "chatUnreadMessages", e.ChatV2UnreadMessages = "chatV2UnreadMessages"
			}(s || (s = {})),
			function(e) {
				e.Numbered = "NUMBERED", e.Filled = "FILLED"
			}(o || (o = {}))
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "d", (function() {
				return c
			}));
			var n, s, o = r("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(n || (n = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(s || (s = {}));
			const d = {
					[n.Loyalty]: o.a.First,
					[n.Achievement]: o.a.Second,
					[n.Cosmetic]: void 0
				},
				c = e => e === o.a.First ? n.Loyalty : e === o.a.Second ? n.Achievement : n.Cosmetic
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var n, s, o, d;
			r.d(t, "b", (function() {
					return s
				})), r.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(s || (s = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(o || (o = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(d || (d = {}))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, r) {
			"use strict";
			var n;

			function s(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			r.d(t, "a", (function() {
					return n
				})), r.d(t, "b", (function() {
					return s
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(n || (n = {}))
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var n, s = r("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(n || (n = {}));
			const o = {
				status: n.NotFetched
			};
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.a:
						if (e.status === n.Fetched && e.data.stripe && e.data.stripe.sources) {
							const r = t.payload.cardId,
								{
									[r]: n,
									...s
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: s
									}
								}
							}
						}
						return e;
					case s.e:
						if (e.status === n.Fetched && e.data.braintree && e.data.braintree.sources) {
							const r = t.payload.sourceId,
								{
									[r]: n,
									...s
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: s
									}
								}
							}
						}
						return e;
					case s.b:
						return {
							error: t.payload.error, status: n.Failure
						};
					case s.c:
						return {
							data: t.payload, status: n.Fetched
						};
					case s.d:
						return {
							status: n.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, s = r("./src/lib/constants/specialMembership.ts"),
				o = r("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				d = r("./src/reddit/helpers/economics/sortBadges.ts"),
				c = r("./src/reddit/models/Badge/index.ts"),
				i = r("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(n || (n = {}));
			const a = {};

			function u(e) {
				return "userId" in e
			}

			function l(e, t, r, n) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(s => {
						let o;
						(o = e.placement ? e.placement === c.a.First ? n[i.a.Loyalty][s] : n[i.a.Achievement][s] : u(e) ? n[i.a.Cosmetic][i.c.MyBadges][s] : n[i.a.Cosmetic][i.c.Gallery][s]) && (u(e) ? r.has(e.id) && o.unlocked.push(e) : t.has(e.id) || o.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const r = parseInt(e.price || "0"),
						n = parseInt(t.price || "0");
					return r === n ? Object(d.b)(e, t) : r - n
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function _(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === s.a).map(m).sort((e, r) => {
					const n = t[e.id],
						s = t[r.id];
					return Object(d.b)(n, s)
				})
			}

			function p(e) {
				const t = {
					[i.a.Loyalty]: {},
					[i.a.Achievement]: {},
					[i.a.Cosmetic]: {
						[i.c.Gallery]: {},
						[i.c.MyBadges]: {}
					}
				};
				Object.keys(e.collections).forEach(r => {
					const n = e.collections[r],
						s = {
							description: n.description,
							highlight: n.extra && n.extra.style && n.extra.style.color,
							id: n.id,
							locked: [],
							title: n.title,
							unlocked: []
						};
					t[i.a.Loyalty][r] = {
						...s,
						locked: [],
						unlocked: []
					}, t[i.a.Achievement][r] = {
						...s,
						locked: [],
						unlocked: []
					}, t[i.a.Cosmetic][i.c.Gallery][r] = {
						...s,
						locked: [],
						unlocked: []
					}, t[i.a.Cosmetic][i.c.MyBadges][r] = {
						...s,
						locked: [],
						unlocked: []
					}
				});
				const r = new Set;
				e.userOwnedBadges.forEach(t => {
					const n = e.badges[t];
					n && r.add(n.type)
				});
				const n = new Set(e.userOwnedBadges);
				return l(Object.keys(e.badges).map(t => e.badges[t]), r, n, t), l(Object.keys(e.products).map(t => e.products[t]), r, n, t), {
					collections: {
						[i.a.Loyalty]: _(t[i.a.Loyalty], e.collections),
						[i.a.Achievement]: _(t[i.a.Achievement], e.collections),
						[i.a.Cosmetic]: {
							[i.c.Gallery]: _(t[i.a.Cosmetic][i.c.Gallery], e.collections),
							[i.c.MyBadges]: _(t[i.a.Cosmetic][i.c.MyBadges], e.collections)
						}
					},
					subscription: e.subscription,
					userOwnedBadges: e.userOwnedBadges.map(t => e.badges[t]).filter(Boolean)
				}
			}
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.a: {
						const {
							subredditId: r
						} = t.payload, s = e[r];
						return s && s.status === n.Fetched ? {
							...e,
							[r]: {
								...s,
								data: {
									...s.data
								},
								raw: {
									...s.raw
								}
							}
						} : e
					}
					case o.h: {
						const {
							subredditId: r
						} = t.payload, s = e[r];
						return s && s.status === n.Fetched ? {
							...e,
							[r]: {
								...s,
								data: {
									...s.data,
									subscription: {
										...s.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...s.raw,
									subscription: {
										...s.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case o.i: {
						const r = t.payload;
						return {
							...e,
							[r.subredditId]: {
								raw: r,
								data: p(r),
								status: n.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/economics.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return g
			})), r.d(t, "o", (function() {
				return E
			})), r.d(t, "a", (function() {
				return j
			})), r.d(t, "x", (function() {
				return y
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "i", (function() {
				return v
			})), r.d(t, "q", (function() {
				return S
			})), r.d(t, "h", (function() {
				return C
			})), r.d(t, "z", (function() {
				return I
			})), r.d(t, "l", (function() {
				return A
			})), r.d(t, "n", (function() {
				return N
			})), r.d(t, "e", (function() {
				return P
			})), r.d(t, "d", (function() {
				return w
			})), r.d(t, "j", (function() {
				return D
			})), r.d(t, "p", (function() {
				return T
			})), r.d(t, "k", (function() {
				return B
			})), r.d(t, "r", (function() {
				return U
			})), r.d(t, "y", (function() {
				return L
			})), r.d(t, "u", (function() {
				return F
			})), r.d(t, "v", (function() {
				return k
			})), r.d(t, "b", (function() {
				return G
			})), r.d(t, "w", (function() {
				return $
			})), r.d(t, "s", (function() {
				return H
			})), r.d(t, "t", (function() {
				return W
			})), r.d(t, "g", (function() {
				return q
			})), r.d(t, "m", (function() {
				return z
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/reddit/featureFlags/index.ts"),
				s = r("./src/reddit/helpers/economics/sortBadges.ts"),
				o = r("./src/reddit/helpers/richTextJson/index.ts"),
				d = r("./src/reddit/models/Badge/index.ts"),
				c = r("./src/reddit/models/Badge/managementPage.ts"),
				i = r("./src/reddit/models/Payments/index.ts"),
				a = r("./src/reddit/models/Product/index.ts"),
				u = r("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				l = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				m = r("./src/reddit/selectors/comments.ts"),
				_ = r("./src/reddit/selectors/commentSelector.ts"),
				p = r("./src/reddit/selectors/experiments/mediaInComments.ts"),
				f = r("./src/reddit/selectors/gold/powerups/index.ts"),
				b = r("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const h = [],
				g = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === l.a.Fetched) {
						const e = r.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
					}
					return null
				},
				E = (e, t) => {
					const r = g(e, t);
					return r && r.endsAt || null
				};
			var j;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(j || (j = {}));
			const y = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === l.a.Fetched) {
						const r = E(e, t),
							n = Date.now();
						return r && n < r ? j.Subscribed : j.NotSubscribed
					}
					return j.DontKnow
				},
				O = (e, t) => {
					const r = e.user.account,
						n = e.economics.subredditPremium[t];
					if (r && n && n.status === l.a.Fetched) {
						const n = ((e.users.appliedBadges[r.id] || {})[t] || h).map(t => e.badges.models[t]).filter(Boolean);
						if (n) return {
							[c.a.Loyalty]: n.find(e => e.placement === d.a.First),
							[c.a.Achievement]: n.find(e => e.placement === d.a.Second),
							[c.a.Cosmetic]: n.find(e => !e.placement)
						}
					}
					return {
						[c.a.Loyalty]: void 0,
						[c.a.Achievement]: void 0,
						[c.a.Cosmetic]: void 0
					}
				};

			function v(e, t) {
				return (null == e ? void 0 : e.length) ? Object(s.a)(e.map(e => t[e]).filter(Boolean)) : h
			}
			const S = (e, t, r) => {
					var s;
					if (!n.d.spBadges(e)) return h;
					return v(null === (s = e.users.appliedBadges[r]) || void 0 === s ? void 0 : s[t], e.badges.models)
				},
				C = (e, t) => {
					const r = e.economics.subredditPremium[t.subredditId];
					if (r && r.status === l.a.Fetched) {
						const e = r.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function I(e, t) {
				const r = (e.economics.me.data.specialMemberships || {})[t];
				return !!(r && r.settings && r.settings.optOut)
			}

			function A(e, t) {
				const {
					badge: r,
					subredditId: n
				} = t, s = e.user.account ? e.user.account.id : void 0;
				if (Object(d.e)(r) && r.userId === s) return r;
				const o = e.badges.models,
					c = e.user.ownedBadges[n] || {},
					i = Object(d.e)(r) ? r.type : r.id;
				return Object.keys(c).map(e => o[e]).find(e => e && e.type === i)
			}

			function N(e, t, r, n) {
				const s = e.economics.subredditPremium[t];
				if (s && s.status === l.a.Fetched) {
					if (r === c.a.Loyalty || r === c.a.Achievement) return s.data.collections[r];
					if (r === c.a.Cosmetic && n) return s.data.collections[r][n]
				}
				return h
			}

			function P(e, t) {
				const r = N(e, t, c.a.Loyalty).find(e => "membership" === e.id);
				return r ? [].concat(r.locked, r.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : h
			}

			function w(e, t) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === l.a.Fetched) {
					const e = r.data.collections[c.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(d.f)
				}
				return h
			}

			function D(e, t) {
				return N(e, t, c.a.Cosmetic, c.c.Gallery).some(e => e.locked.some(e => Object(d.f)(e) || !!e.price))
			}
			const T = e => {
				const t = [],
					r = e.economics.paymentSystems;
				if (r.status === u.a.Fetched && r.data.stripe && r.data.stripe.sources) {
					const e = r.data.stripe.sources;
					for (const r in e) {
						const n = e[r];
						t.push({
							display: `${n.brand} •••• ${n.last4}`,
							id: r,
							type: i.a.SavedStripe
						})
					}
				}
				if (r.status === u.a.Fetched && r.data.braintree && r.data.braintree.sources) {
					const e = r.data.braintree.sources;
					for (const r in e) {
						const n = e[r];
						"PayPal" === n.brand && t.push({
							display: "PayPal",
							id: n.id,
							type: i.a.SavedPayPal
						})
					}
				}
				return t
			};
			var x;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(x || (x = {}));
			const M = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Special Membership"
				},
				B = (e, t) => Object.values(e.products.models).filter(e => e.type === a.a.Membership && t && e.subredditId === t),
				R = (e, t) => {
					if (!t) return {};
					const r = M.prices;
					B(e, t).forEach(e => {
						e.price && e.currency && (r[e.currency] = e.price)
					});
					const n = g(e, t);
					return n && n.price && n.currency && (r[n.currency] = n.price), r
				},
				U = (e, t) => {
					var r, n, s, o;
					const d = (null === (o = null === (s = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === n ? void 0 : n.points) || void 0 === s ? void 0 : s[t || ""]) || void 0 === o ? void 0 : o.nomenclature) || M;
					return {
						prices: R(e, t),
						member: d.member || M.member,
						memberPlural: d.memberPlural || M.memberPlural,
						memberAlt: d.memberAlt || M.memberAlt,
						memberAltPlural: d.memberAltPlural || M.memberAltPlural,
						membership: d.membership || M.membership,
						membershipAlt: d.membershipAlt || M.membershipAlt
					}
				},
				L = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === u.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				F = (e, t) => {
					const r = e.user.ownedBadges[t] || {};
					return !!Object.keys(r).length
				},
				k = e => {
					const t = e.economics.paymentSystems;
					return t.status === u.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				G = (e, t) => {
					let {
						subredditId: r
					} = t;
					if (!r) return;
					return e.economics.emotes[r]
				},
				$ = (e, t) => {
					const r = t && e.economics.gifs[t];
					return !!r && r.hasGifProduct
				},
				H = (e, t) => !!t && !!Object(f.a)(e, {
					subredditId: t
				}),
				W = (e, t, r) => {
					if (Object(p.b)(e)) return !(!t || !Object(m.C)(e, {
						subredditId: t
					})) || (!!Y(e, t) || !(!n.d.spGiphy(e) || !V(e, r)));
					if (!Object(b.a)(e, {
							subredditId: t
						})) return !1;
					if (Object(f.f)(e, {
							subredditId: t
						})) return !0;
					if (V(e, r)) return !0;
					const s = n.d.spGiphy(e),
						o = $(e, t);
					return !!Y(e, t) || s && o
				},
				V = (e, t) => {
					const r = "replyToPost" !== t && Object(_.c)(e, {
						commentId: t
					});
					if (r && Object(o.a)(r)) return !0
				},
				Y = (e, t) => {
					const r = n.d.spGiphy(e),
						s = $(e, t);
					return r && s
				},
				q = (e, t, r) => {
					if (t) {
						const n = e.economics.banners.dismissedBanners[t];
						if (n && n.data) return !!n.data[r]
					}
				},
				z = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/gold/powerups/benefitSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			}));
			var n = r("./src/reddit/models/Gold/Powerups/index.ts"),
				s = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/actions/gold/constants.ts");
			const d = {};
			var c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var r, n;
					switch (t.type) {
						case o.mb:
						case o.nb: {
							const {
								benefitStatuses: n,
								subredditId: s
							} = t.payload;
							if (!n) return e;
							const o = null !== (r = e[s]) && void 0 !== r ? r : {},
								d = {};
							return n.forEach(e => {
								let {
									benefit: t,
									isEnabled: r
								} = e;
								d[t] = r
							}), {
								...e,
								[s]: {
									...o,
									...d
								}
							}
						}
						case o.L: {
							const {
								benefitStatuses: r,
								subredditId: s
							} = t.payload, o = null !== (n = e[s]) && void 0 !== n ? n : {}, d = {};
							return r.forEach(e => {
								let {
									benefit: t,
									isEnabled: r
								} = e;
								d[t] = r
							}), {
								...e,
								[s]: {
									...o,
									...d
								}
							}
						}
						default:
							return e
					}
				},
				i = r("./node_modules/reselect/es/index.js");
			Object(s.a)({
				features: {
					powerupsBenefitSettings: c
				}
			});
			const a = (e, t) => {
					let {
						subredditId: r
					} = t;
					return r ? e.features.powerupsBenefitSettings[r] : null
				},
				u = (e => Object(i.a)(a, t => !!(null == t ? void 0 : t[e])))(n.a.CommentsWithGifs)
		},
		"./src/reddit/selectors/products.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return o
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/reddit/models/Product/index.ts");
			const s = (e, t) => {
					const r = e.products.models[t];
					if (r && r.type === n.a.Badge) return r
				},
				o = (e, t) => {
					let {
						productId: r
					} = t;
					const n = e.products.models[r];
					if (n) {
						const t = n.subredditId,
							s = Object.keys(e.user.ownedBadges[t] || {}),
							o = e.badges.models,
							d = Date.now();
						let c = !1;
						return s.forEach(e => {
							const t = o[e];
							t && t.type === r && t.endsAt > d && (c = !0)
						}), c
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconHelperActions.1aa2b6604fe41c9e5e6f.js.map