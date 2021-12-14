// https://www.redditstatic.com/desktop2x/index~reddit-components-Econ-Prediction.927d7ede1271d9f9c940.js
// Retrieved at 12/14/2021, 1:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["index~reddit-components-Econ-Prediction"], {
		"./node_modules/lodash/_LazyWrapper.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseCreate.js"),
				s = n("./node_modules/lodash/_baseLodash.js"),
				r = 4294967295;

			function a(e) {
				this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = r, this.__views__ = []
			}
			a.prototype = o(s.prototype), a.prototype.constructor = a, e.exports = a
		},
		"./node_modules/lodash/_LodashWrapper.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseCreate.js"),
				s = n("./node_modules/lodash/_baseLodash.js");

			function r(e, t) {
				this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
			}
			r.prototype = o(s.prototype), r.prototype.constructor = r, e.exports = r
		},
		"./node_modules/lodash/_baseLodash.js": function(e, t) {
			e.exports = function() {}
		},
		"./node_modules/lodash/_baseSetData.js": function(e, t, n) {
			var o = n("./node_modules/lodash/identity.js"),
				s = n("./node_modules/lodash/_metaMap.js"),
				r = s ? function(e, t) {
					return s.set(e, t), e
				} : o;
			e.exports = r
		},
		"./node_modules/lodash/_composeArgs.js": function(e, t) {
			var n = Math.max;
			e.exports = function(e, t, o, s) {
				for (var r = -1, a = e.length, c = o.length, d = -1, i = t.length, l = n(a - c, 0), u = Array(i + l), m = !s; ++d < i;) u[d] = t[d];
				for (; ++r < c;)(m || r < a) && (u[o[r]] = e[r]);
				for (; l--;) u[d++] = e[r++];
				return u
			}
		},
		"./node_modules/lodash/_composeArgsRight.js": function(e, t) {
			var n = Math.max;
			e.exports = function(e, t, o, s) {
				for (var r = -1, a = e.length, c = -1, d = o.length, i = -1, l = t.length, u = n(a - d, 0), m = Array(u + l), p = !s; ++r < u;) m[r] = e[r];
				for (var _ = r; ++i < l;) m[_ + i] = t[i];
				for (; ++c < d;)(p || r < a) && (m[_ + o[c]] = e[r++]);
				return m
			}
		},
		"./node_modules/lodash/_countHolders.js": function(e, t) {
			e.exports = function(e, t) {
				for (var n = e.length, o = 0; n--;) e[n] === t && ++o;
				return o
			}
		},
		"./node_modules/lodash/_createBind.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_createCtor.js"),
				s = n("./node_modules/lodash/_root.js"),
				r = 1;
			e.exports = function(e, t, n) {
				var a = t & r,
					c = o(e);
				return function t() {
					return (this && this !== s && this instanceof t ? c : e).apply(a ? n : this, arguments)
				}
			}
		},
		"./node_modules/lodash/_createCtor.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseCreate.js"),
				s = n("./node_modules/lodash/isObject.js");
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
					var n = o(e.prototype),
						r = e.apply(n, t);
					return s(r) ? r : n
				}
			}
		},
		"./node_modules/lodash/_createCurry.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_apply.js"),
				s = n("./node_modules/lodash/_createCtor.js"),
				r = n("./node_modules/lodash/_createHybrid.js"),
				a = n("./node_modules/lodash/_createRecurry.js"),
				c = n("./node_modules/lodash/_getHolder.js"),
				d = n("./node_modules/lodash/_replaceHolders.js"),
				i = n("./node_modules/lodash/_root.js");
			e.exports = function(e, t, n) {
				var l = s(e);
				return function s() {
					for (var u = arguments.length, m = Array(u), p = u, _ = c(s); p--;) m[p] = arguments[p];
					var b = u < 3 && m[0] !== _ && m[u - 1] !== _ ? [] : d(m, _);
					return (u -= b.length) < n ? a(e, t, r, s.placeholder, void 0, m, b, void 0, void 0, n - u) : o(this && this !== i && this instanceof s ? l : e, this, m)
				}
			}
		},
		"./node_modules/lodash/_createHybrid.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_composeArgs.js"),
				s = n("./node_modules/lodash/_composeArgsRight.js"),
				r = n("./node_modules/lodash/_countHolders.js"),
				a = n("./node_modules/lodash/_createCtor.js"),
				c = n("./node_modules/lodash/_createRecurry.js"),
				d = n("./node_modules/lodash/_getHolder.js"),
				i = n("./node_modules/lodash/_reorder.js"),
				l = n("./node_modules/lodash/_replaceHolders.js"),
				u = n("./node_modules/lodash/_root.js"),
				m = 1,
				p = 2,
				_ = 8,
				b = 16,
				h = 128,
				f = 512;
			e.exports = function e(t, n, E, g, O, j, v, I, N, x) {
				var C = n & h,
					k = n & m,
					y = n & p,
					P = n & (_ | b),
					S = n & f,
					w = y ? void 0 : a(t);
				return function m() {
					for (var p = arguments.length, _ = Array(p), b = p; b--;) _[b] = arguments[b];
					if (P) var h = d(m),
						f = r(_, h);
					if (g && (_ = o(_, g, O, P)), j && (_ = s(_, j, v, P)), p -= f, P && p < x) {
						var A = l(_, h);
						return c(t, n, e, m.placeholder, E, _, A, I, N, x - p)
					}
					var T = k ? E : this,
						B = y ? T[t] : t;
					return p = _.length, I ? _ = i(_, I) : S && p > 1 && _.reverse(), C && N < p && (_.length = N), this && this !== u && this instanceof m && (B = w || a(B)), B.apply(T, _)
				}
			}
		},
		"./node_modules/lodash/_createPartial.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_apply.js"),
				s = n("./node_modules/lodash/_createCtor.js"),
				r = n("./node_modules/lodash/_root.js"),
				a = 1;
			e.exports = function(e, t, n, c) {
				var d = t & a,
					i = s(e);
				return function t() {
					for (var s = -1, a = arguments.length, l = -1, u = c.length, m = Array(u + a), p = this && this !== r && this instanceof t ? i : e; ++l < u;) m[l] = c[l];
					for (; a--;) m[l++] = arguments[++s];
					return o(p, d ? n : this, m)
				}
			}
		},
		"./node_modules/lodash/_createRecurry.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_isLaziable.js"),
				s = n("./node_modules/lodash/_setData.js"),
				r = n("./node_modules/lodash/_setWrapToString.js"),
				a = 1,
				c = 2,
				d = 4,
				i = 8,
				l = 32,
				u = 64;
			e.exports = function(e, t, n, m, p, _, b, h, f, E) {
				var g = t & i;
				t |= g ? l : u, (t &= ~(g ? u : l)) & d || (t &= ~(a | c));
				var O = [e, t, p, g ? _ : void 0, g ? b : void 0, g ? void 0 : _, g ? void 0 : b, h, f, E],
					j = n.apply(void 0, O);
				return o(e) && s(j, O), j.placeholder = m, r(j, e, t)
			}
		},
		"./node_modules/lodash/_createWrap.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseSetData.js"),
				s = n("./node_modules/lodash/_createBind.js"),
				r = n("./node_modules/lodash/_createCurry.js"),
				a = n("./node_modules/lodash/_createHybrid.js"),
				c = n("./node_modules/lodash/_createPartial.js"),
				d = n("./node_modules/lodash/_getData.js"),
				i = n("./node_modules/lodash/_mergeData.js"),
				l = n("./node_modules/lodash/_setData.js"),
				u = n("./node_modules/lodash/_setWrapToString.js"),
				m = n("./node_modules/lodash/toInteger.js"),
				p = "Expected a function",
				_ = 1,
				b = 2,
				h = 8,
				f = 16,
				E = 32,
				g = 64,
				O = Math.max;
			e.exports = function(e, t, n, j, v, I, N, x) {
				var C = t & b;
				if (!C && "function" != typeof e) throw new TypeError(p);
				var k = j ? j.length : 0;
				if (k || (t &= ~(E | g), j = v = void 0), N = void 0 === N ? N : O(m(N), 0), x = void 0 === x ? x : m(x), k -= v ? v.length : 0, t & g) {
					var y = j,
						P = v;
					j = v = void 0
				}
				var S = C ? void 0 : d(e),
					w = [e, t, n, j, v, y, P, I, N, x];
				if (S && i(w, S), e = w[0], t = w[1], n = w[2], j = w[3], v = w[4], !(x = w[9] = void 0 === w[9] ? C ? 0 : e.length : O(w[9] - k, 0)) && t & (h | f) && (t &= ~(h | f)), t && t != _) A = t == h || t == f ? r(e, t, x) : t != E && t != (_ | E) || v.length ? a.apply(void 0, w) : c(e, t, n, j);
				else var A = s(e, t, n);
				return u((S ? o : l)(A, w), e, t)
			}
		},
		"./node_modules/lodash/_getData.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_metaMap.js"),
				s = n("./node_modules/lodash/noop.js"),
				r = o ? function(e) {
					return o.get(e)
				} : s;
			e.exports = r
		},
		"./node_modules/lodash/_getFuncName.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_realNames.js"),
				s = Object.prototype.hasOwnProperty;
			e.exports = function(e) {
				for (var t = e.name + "", n = o[t], r = s.call(o, t) ? n.length : 0; r--;) {
					var a = n[r],
						c = a.func;
					if (null == c || c == e) return a.name
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
			var n = /\{\n\/\* \[wrapped with (.+)\] \*/,
				o = /,? & /;
			e.exports = function(e) {
				var t = e.match(n);
				return t ? t[1].split(o) : []
			}
		},
		"./node_modules/lodash/_insertWrapDetails.js": function(e, t) {
			var n = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
			e.exports = function(e, t) {
				var o = t.length;
				if (!o) return e;
				var s = o - 1;
				return t[s] = (o > 1 ? "& " : "") + t[s], t = t.join(o > 2 ? ", " : " "), e.replace(n, "{\n/* [wrapped with " + t + "] */\n")
			}
		},
		"./node_modules/lodash/_isLaziable.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_LazyWrapper.js"),
				s = n("./node_modules/lodash/_getData.js"),
				r = n("./node_modules/lodash/_getFuncName.js"),
				a = n("./node_modules/lodash/wrapperLodash.js");
			e.exports = function(e) {
				var t = r(e),
					n = a[t];
				if ("function" != typeof n || !(t in o.prototype)) return !1;
				if (e === n) return !0;
				var c = s(n);
				return !!c && e === c[0]
			}
		},
		"./node_modules/lodash/_mergeData.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_composeArgs.js"),
				s = n("./node_modules/lodash/_composeArgsRight.js"),
				r = n("./node_modules/lodash/_replaceHolders.js"),
				a = "__lodash_placeholder__",
				c = 1,
				d = 2,
				i = 4,
				l = 8,
				u = 128,
				m = 256,
				p = Math.min;
			e.exports = function(e, t) {
				var n = e[1],
					_ = t[1],
					b = n | _,
					h = b < (c | d | u),
					f = _ == u && n == l || _ == u && n == m && e[7].length <= t[8] || _ == (u | m) && t[7].length <= t[8] && n == l;
				if (!h && !f) return e;
				_ & c && (e[2] = t[2], b |= n & c ? 0 : i);
				var E = t[3];
				if (E) {
					var g = e[3];
					e[3] = g ? o(g, E, t[4]) : E, e[4] = g ? r(e[3], a) : t[4]
				}
				return (E = t[5]) && (g = e[5], e[5] = g ? s(g, E, t[6]) : E, e[6] = g ? r(e[5], a) : t[6]), (E = t[7]) && (e[7] = E), _ & u && (e[8] = null == e[8] ? t[8] : p(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = b, e
			}
		},
		"./node_modules/lodash/_metaMap.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_WeakMap.js"),
				s = o && new o;
			e.exports = s
		},
		"./node_modules/lodash/_realNames.js": function(e, t) {
			e.exports = {}
		},
		"./node_modules/lodash/_reorder.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_copyArray.js"),
				s = n("./node_modules/lodash/_isIndex.js"),
				r = Math.min;
			e.exports = function(e, t) {
				for (var n = e.length, a = r(t.length, n), c = o(e); a--;) {
					var d = t[a];
					e[a] = s(d, n) ? c[d] : void 0
				}
				return e
			}
		},
		"./node_modules/lodash/_replaceHolders.js": function(e, t) {
			var n = "__lodash_placeholder__";
			e.exports = function(e, t) {
				for (var o = -1, s = e.length, r = 0, a = []; ++o < s;) {
					var c = e[o];
					c !== t && c !== n || (e[o] = n, a[r++] = o)
				}
				return a
			}
		},
		"./node_modules/lodash/_setData.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseSetData.js"),
				s = n("./node_modules/lodash/_shortOut.js")(o);
			e.exports = s
		},
		"./node_modules/lodash/_setWrapToString.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_getWrapDetails.js"),
				s = n("./node_modules/lodash/_insertWrapDetails.js"),
				r = n("./node_modules/lodash/_setToString.js"),
				a = n("./node_modules/lodash/_updateWrapDetails.js");
			e.exports = function(e, t, n) {
				var c = t + "";
				return r(e, s(c, a(o(c), n)))
			}
		},
		"./node_modules/lodash/_updateWrapDetails.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_arrayEach.js"),
				s = n("./node_modules/lodash/_arrayIncludes.js"),
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
				return o(r, (function(n) {
					var o = "_." + n[0];
					t & n[1] && !s(e, o) && e.push(o)
				})), e.sort()
			}
		},
		"./node_modules/lodash/_wrapperClone.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_LazyWrapper.js"),
				s = n("./node_modules/lodash/_LodashWrapper.js"),
				r = n("./node_modules/lodash/_copyArray.js");
			e.exports = function(e) {
				if (e instanceof o) return e.clone();
				var t = new s(e.__wrapped__, e.__chain__);
				return t.__actions__ = r(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
			}
		},
		"./node_modules/lodash/curry.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_createWrap.js"),
				s = 8;

			function r(e, t, n) {
				var a = o(e, s, void 0, void 0, void 0, void 0, void 0, t = n ? void 0 : t);
				return a.placeholder = r.placeholder, a
			}
			r.placeholder = {}, e.exports = r
		},
		"./node_modules/lodash/wrapperLodash.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_LazyWrapper.js"),
				s = n("./node_modules/lodash/_LodashWrapper.js"),
				r = n("./node_modules/lodash/_baseLodash.js"),
				a = n("./node_modules/lodash/isArray.js"),
				c = n("./node_modules/lodash/isObjectLike.js"),
				d = n("./node_modules/lodash/_wrapperClone.js"),
				i = Object.prototype.hasOwnProperty;

			function l(e) {
				if (c(e) && !a(e) && !(e instanceof o)) {
					if (e instanceof s) return e;
					if (i.call(e, "__wrapped__")) return d(e)
				}
				return new s(e)
			}
			l.prototype = r.prototype, l.prototype.constructor = l, e.exports = l
		},
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./node_modules/bignumber.js/bignumber.js");

			function s(e, t) {
				const n = new o.BigNumber(e),
					s = new o.BigNumber(t),
					r = new o.BigNumber(n.dividedBy(s)),
					a = new o.BigNumber("100").multipliedBy(r);
				return new o.BigNumber(a).toNumber()
			}
		},
		"./src/reddit/actions/badge.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "j", (function() {
				return O
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/governance/errorToast.ts"),
				r = n("./src/reddit/endpoints/governance/badges.ts");
			const a = "BADGE__BADGE_APPLICATION_SUCCESS",
				c = "BADGE__BADGE_APPLICATION_FAILURE",
				d = "BADGE__SUBREDDIT_BADGES_FETCH_SUCCESS",
				i = "BADGE__SUBREDDIT_BADGES_FETCH_FAILURE",
				l = "BADGE__SUBREDDIT_BADGES_FETCH_PENDING",
				u = "BADGE__USER_BADGES_FETCH_SUCCESS",
				m = "BADGE__USER_BADGES_FETCH_FAILURE",
				p = "BADGE__USER_BADGES_FETCH_PENDING",
				_ = Object(o.a)(a),
				b = Object(o.a)(c),
				h = (Object(o.a)("BADGE__BADGE_APPLICATION_PENDING"), Object(o.a)(d)),
				f = Object(o.a)(i),
				E = Object(o.a)(l),
				g = (Object(o.a)(u), Object(o.a)(m), Object(o.a)(p), ({
					badgeIds: e,
					subredditId: t
				}) => async (n, o, {
					apiContext: a
				}) => {
					const c = o(),
						d = c.user.account;
					if (d) {
						const o = (c.users.appliedBadges[d.id] || {})[t] || [],
							i = e.length ? e[0] : o[0],
							l = !!e.length;
						n(_({
							badgeIds: e,
							subredditId: t,
							userId: d.id
						}));
						const u = await Object(r.a)(a(), t, i, l);
						u.ok || (n(b({
							badgeIds: e,
							subredditId: t,
							error: u.error,
							previousBadgeIds: o,
							userId: d.id
						})), Object(s.a)(n, u.error))
					}
				}),
				O = ({
					subredditId: e,
					userIds: t
				}) => async (n, o, {
					apiContext: s
				}) => {
					n(E({
						subredditId: e
					}));
					const a = await Object(r.b)(s(), e, t);
					a.ok ? n(h({
						...a.body,
						subredditId: e
					})) : n(f({
						subredditId: e,
						error: a.error
					}))
				}
		},
		"./src/reddit/actions/economics/helpers/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "fetchAll", (function() {
				return _
			})), n.d(t, "promptUserToBuyMoreCoins", (function() {
				return b
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/curry.js"),
				s = n.n(o),
				r = n("./src/reddit/actions/badge.ts"),
				a = n("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				c = n("./src/reddit/actions/governance/communityDetails.ts"),
				d = n("./src/reddit/actions/governance/publicWalletsFetched.ts"),
				i = n("./src/reddit/featureFlags/index.ts"),
				l = n("./src/lib/initializeClient/installReducer.ts"),
				u = n("./src/reddit/reducers/features/comments/index.ts");
			Object(l.a)({
				features: {
					comments: u.a
				}
			});
			const m = {
					badgesroyaletest: "t5_socj8",
					ethtrader: "t5_37jgj",
					fortnitebr: "t5_3oeyf",
					funkygoose: "t5_kzsl3"
				},
				p = s()((e, t) => t.some(t => i.d[t](e))),
				_ = e => async (t, n, {
					apiContext: o
				}) => {
					const {
						commentIds: s = [],
						postIds: i = [],
						skip: l = []
					} = e;
					let u = e.subredditId;
					if (!u) {
						e.subredditName && (u = m[e.subredditName.toLowerCase()])
					}
					if (!u) return;
					const _ = [],
						b = n(),
						h = p(b),
						f = b.features.comments.models,
						E = b.posts.models,
						g = new Set(b.user.account ? [b.user.account.id] : []);
					i.forEach(e => {
						const t = E[e];
						t && g.add(t.authorId)
					}), s.forEach(e => {
						const t = f[e];
						t && g.add(t.authorId)
					});
					const O = Array.from(g);
					!l.includes("badges") && O.length && h(["spBadges"]) && _.push(t(Object(r.j)({
						subredditId: u,
						userIds: O
					}))), !l.includes("communityDetails") && h(["spPoints", "spSpecialMemberships"]) && _.push(t(Object(c.a)({
						subredditId: u
					}))), !l.includes("subscription") && h(["spSpecialMemberships"]) && _.push(t(Object(a.g)(u))), !l.includes("wallets") && O.length && h(["spPoints"]) && _.push(t(Object(d.a)({
						subredditId: u,
						userIds: O
					}))), await Promise.all(_)
				};

			function b() {
				window.open("/coins", "_blank")
			}
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			}));
			const o = "ECONOMICS__ME__ME_DATA_SUCCESS",
				s = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				r = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			}));
			var o = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeRequest/index.ts"),
				r = n("./src/config.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts");
			var c = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/actions/economics/me/constants.ts");
			const i = Object(c.a)(d.a),
				l = Object(c.a)(d.b),
				u = Object(c.a)(d.c),
				m = e => async (t, n, {
					apiContext: o
				}) => {
					const s = e && e.includeMemberships || !1,
						c = e && e.forceFetch || !1,
						d = n();
					if (!d.economics.me.fetched || s && !d.economics.me.data.specialMemberships || c) {
						const e = await
						function(e, t) {
							return Object(a.a)(e, {
								method: "get",
								endpoint: `${r.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(o(), s);
						if (e.ok) {
							const n = e.body;
							s && !n.specialMemberships && (n.specialMemberships = {}), t(i(n))
						}
					}
				}, p = () => async (e, t) => {
					const n = t(),
						r = n.economics.me.data;
					if (!r) throw new Error("me data required for copy to be fetched");
					if (!n.economics.pointsCopy.fetched) {
						e(l());
						const t = `https://${r.pointsDocsBaseUrl}v1.json?web`,
							n = await Object(s.b)({
								endpoint: t,
								method: o.jb.GET
							});
						n.ok && n.body && e(u(n.body))
					}
				}
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return I
			})), n.d(t, "g", (function() {
				return N
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "e", (function() {
				return k
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "f", (function() {
				return P
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/forOwn.js"),
				s = n.n(o),
				r = n("./src/reddit/actions/governance/errorToast.ts"),
				a = n("./src/reddit/endpoints/economics/emojis.ts"),
				c = n("./src/reddit/endpoints/economics/specialMembership.ts"),
				d = n("./src/reddit/endpoints/economics/subredditPremium.ts"),
				i = n("./src/reddit/endpoints/governance/badges.ts"),
				l = n("./src/config.ts"),
				u = n("./src/reddit/endpoints/governance/requester.ts");

			function m(e, t, n) {
				return Object(u.a)(e, {
					method: "get",
					endpoint: `${l.a.metaUrl}/products/${t}?owners=${n}` + "&types=emotes_pack,giphy"
				})
			}
			var p = n("./src/reddit/models/Badge/index.ts"),
				_ = n("./src/reddit/models/Badge/managementPage.ts"),
				b = n("./src/reddit/models/Product/index.ts"),
				h = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				f = n("./src/reddit/selectors/economics.ts"),
				E = n("./src/reddit/selectors/products.ts"),
				g = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				O = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function j(e) {
				return !!e && "removeBadge" === e.type
			}

			function v(e) {
				if (!j(e)) return e
			}
			const I = () => async (e, t, {
				apiContext: n
			}) => {
				if (!t().user.account) return;
				await e(Object(g.b)({
					includeMemberships: !0
				}));
				const o = t().economics.me.data.specialMemberships || {},
					s = Object.keys(o);
				if (s.length) {
					const t = await Object(c.e)(n(), s);
					t.ok && e(Object(O.g)(t.body))
				}
			}, N = (e, t) => async (n, o, {
				apiContext: s
			}) => {
				const r = o().user.account,
					a = o().economics.subredditPremium[e],
					c = !a || a.status !== h.a.Fetched || t;
				if (r && c) {
					const t = await Object(d.a)(s(), e, r.id);
					n(Object(O.i)(t))
				}
			}, x = e => async (t, n, {
				apiContext: o
			}) => {
				const s = n(),
					a = s.user.account,
					c = Object(f.f)(s, e.subredditId),
					d = Object.keys(c).map(e => c[e]).filter(Boolean);
				if (a && e.badge) {
					let n, s;
					n = e.placement === p.a.First ? c[_.a.Loyalty] : e.placement === p.a.Second ? c[_.a.Achievement] : c[_.a.Cosmetic], t(Object(O.a)({
						...e,
						badge: v(e.badge),
						currentAppliedBadges: d,
						userId: a.id
					})), j(e.badge) && n ? s = await Object(i.a)(o(), e.subredditId, n.id, !1) : j(e.badge) || (s = await Object(i.a)(o(), e.subredditId, e.badge.id)), s && !s.ok && (t(Object(O.a)({
						...e,
						badge: n,
						currentAppliedBadges: d,
						userId: a.id
					})), Object(r.a)(t, s.error))
				}
			}, C = (e, t) => async (n, o, {
				apiContext: s
			}) => {
				await n(N(e, !0));
				const r = o().economics.subredditPremium[e];
				if (r && r.status === h.a.Fetched) {
					const o = r.data.userOwnedBadges.find(e => e.type === t.id);
					o && (n(x({
						badge: o,
						subredditId: e,
						placement: o.placement
					})), n(Object(O.d)(_.c.MyBadges)))
				}
			}, k = e => async (t, n, {
				apiContext: o
			}) => {
				const c = n().user.account,
					d = !n().economics.emotes[e],
					i = !n().economics.gifs[e];
				if (c && (d || i)) {
					const [n, d] = await Promise.all([Object(a.b)(o(), e), m(o(), e, c.id)]);
					if (!d.ok) return void Object(r.a)(t, d.error);
					const i = {
						emotes: [],
						emoteCollections: n.ok ? n.body : {},
						giphy: []
					};
					s()(d.body, e => {
						e.type === b.a.EmotesPack ? i.emotes.push(e) : e.type === b.a.Giphy && i.giphy.push(e)
					}), t(Object(O.e)({
						subredditId: e,
						products: i
					}))
				}
			}, y = (e, t, n) => async (o, s, {
				apiContext: r
			}) => {
				if (await o(N(e, !0)), n && t) {
					const n = s(),
						r = Object(f.f)(n, e),
						a = Object(E.a)(n, t);
					if (!r[Object(_.d)(a.placement)] && a) {
						const t = Object(f.l)(n, {
							subredditId: e,
							badge: a
						});
						t && await o(x({
							badge: t,
							subredditId: e
						}))
					}
					o(Object(O.c)({
						subredditId: e,
						initialView: _.c.MyBadges
					}))
				}
			}, P = e => async (t, n, {
				apiContext: o
			}) => {
				const {
					wallet: s
				} = await Object(c.c)(o(), e);
				t(Object(O.f)({
					wallet: s
				})), await t(N(e.subredditId, !0))
			}
		},
		"./src/reddit/actions/governance/communityDetails.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/governance/community.ts"),
				r = n("./src/reddit/actions/governance/constants.ts");
			const a = Object(o.a)(r.a),
				c = ({
					subredditId: e
				}) => async (t, n, {
					apiContext: o
				}) => {
					const r = await Object(s.a)(o(), {
						subredditId: e
					});
					r.ok && t(a({
						subredditId: e,
						...r.body
					}))
				}
		},
		"./src/reddit/actions/governance/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "l", (function() {
				return _
			})), n.d(t, "m", (function() {
				return b
			})), n.d(t, "n", (function() {
				return h
			})), n.d(t, "o", (function() {
				return f
			})), n.d(t, "p", (function() {
				return E
			})), n.d(t, "q", (function() {
				return g
			})), n.d(t, "r", (function() {
				return O
			})), n.d(t, "s", (function() {
				return j
			})), n.d(t, "t", (function() {
				return v
			})), n.d(t, "u", (function() {
				return I
			})), n.d(t, "v", (function() {
				return N
			})), n.d(t, "w", (function() {
				return x
			})), n.d(t, "x", (function() {
				return C
			}));
			const o = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				s = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				r = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				a = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
				c = "POLL_VOTE_SUCCESS",
				d = "GOVERNANCE__PROPOSAL_CREATION_FAILURE",
				i = "GOVERNANCE__PROPOSAL_CREATION_PENDING",
				l = "GOVERNANCE__PROPOSAL_CREATION_SUCCESS",
				u = "GOVERNANCE__PROPOSAL_OPTION_VOTE_FAILURE",
				m = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				p = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				_ = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				b = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				h = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				f = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				E = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				g = "GOVERNANCE__TRANSFER_FAILURE",
				O = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				j = "GOVERNANCE__TRANSFER_PENDING",
				v = "GOVERNANCE__TRANSFER_SUCCESS",
				I = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				N = "GOVERNANCE__WALLETS_FETCH_PENDING",
				x = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				C = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./src/reddit/actions/toaster.ts"),
				s = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				r = n("./src/reddit/models/Toast/index.ts");

			function a(e, t) {
				e(Object(o.f)({
					duration: 5e3,
					kind: r.b.Error,
					text: Object(s.a)(t)
				}))
			}
		},
		"./src/reddit/actions/governance/publicWalletsFetched.ts": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/governance/wallet.ts"),
				r = n("./src/reddit/actions/governance/constants.ts");
			const a = Object(o.a)(r.m),
				c = Object(o.a)(r.n),
				d = Object(o.a)(r.l);
			t.a = e => async (t, n, {
				apiContext: o
			}) => {
				t(a({
					subredditId: e.subredditId
				}));
				const r = await Object(s.b)(o(), e);
				r.ok ? t(c({
					subredditId: e.subredditId,
					...r.body
				})) : t(d({
					error: r.error
				}))
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionCard/PredictionBody/PredictionQuestion/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2XkexQO5WSnaH2KamuN59o",
				badge: "_3HH01AolBtueJhnmBWcq7i",
				question: "_2zyWv-NhNpIYGWqumULrxq",
				long: "_2BJ-OOmBB_MAs1WZQQQS_5"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionCard/PredictionBody/index.m.less": function(e, t, n) {
			e.exports = {
				poll: "_3yLx1E79lHypYxkwmN9urH",
				isNightMode: "-tCaF7I66aW5D5iZMHhg_",
				predictionOptions: "_2N3e-L5zd4J-6b2Qof3_2k",
				loggedOutTooltip: "_11QuxYf3g-rnw6QjNypXgl",
				loggedOutIcon: "_1O48f5HxGU9l8wK-9Di9u4"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionCard/PredictionBody/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _e
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/Econ/Prediction/themes.ts"),
				d = n("./src/reddit/components/Econ/Prediction/PredictionCard/PredictionBody/PredictionQuestion/index.m.less"),
				i = n.n(d);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js"), u = ({
				theme: e = "theme_4",
				children: t
			}) => {
				const n = t ? t.toString() : "";
				return s.a.createElement("div", {
					className: i.a.container,
					style: {
						backgroundImage: c.a[e] || c.a.theme_4
					}
				}, s.a.createElement("div", {
					className: i.a.badge
				}, l._("Prediction", null, {
					hk: "1MyVWT"
				})), s.a.createElement("div", {
					className: Object(a.a)(i.a.question, {
						[i.a.long]: Boolean(n.length > 100)
					}),
					title: n.length > 140 ? n : void 0
				}, t))
			};
			var m = n("./src/reddit/components/Econ/Prediction/TournamentTokenIcon/index.tsx"),
				p = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				_ = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				b = n("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				h = n("./src/reddit/selectors/user.ts"),
				f = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.m.less"),
				E = n.n(f);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: O
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var j = Object(o.forwardRef)(({
					className: e,
					disabled: t,
					isCancelled: n,
					isEnded: o,
					isSelected: c,
					needsResolution: d,
					option: i,
					resolvedOptionId: l,
					tournamentId: u,
					userIsLoggedOut: f,
					userSelection: O,
					votePercentage: j,
					isShowingHint: v,
					...I
				}, N) => {
					const x = Object(r.e)(h.X),
						C = l === i.id,
						k = o || !!O || !!l || n;
					return s.a.createElement("div", {
						className: E.a.optionButtonWrapper
					}, s.a.createElement("button", g({
						"aria-label": i.text,
						className: Object(a.a)(E.a.optionButton, e, {
							[E.a.canVote]: !O && !o && !n,
							[E.a.isVote]: !n && O === i.id,
							[E.a.isCorrect]: C,
							[E.a.isSelected]: c,
							[E.a.isShowingHint]: v && !O,
							[E.a.isNightMode]: x
						}),
						disabled: t || n || !d && (k || f),
						ref: N
					}, I), s.a.createElement("div", {
						className: E.a.optionBody
					}, s.a.createElement("div", {
						className: Object(a.a)(E.a.optionText, {
							[E.a.hasUserAmount]: Boolean(i.userStakeAmount)
						})
					}, C && s.a.createElement(_.a, {
						className: E.a.checkmarkIcon
					}), s.a.createElement("span", {
						className: E.a.optionLabel,
						title: i.text.length > 25 ? i.text : void 0
					}, i.text)), Boolean(i.userStakeAmount && !n) && s.a.createElement("div", {
						className: E.a.optionStake
					}, u ? s.a.createElement(m.a, {
						tournamentId: u,
						className: E.a.icon
					}) : s.a.createElement(b.a, {
						className: E.a.icon
					}), " ", i.userStakeAmount, s.a.createElement(p.a, {
						className: E.a.userIcon
					})), Boolean(!i.userStakeAmount && j && !v && !n) && s.a.createElement("div", {
						className: E.a.optionStake
					}, j, "%")), Boolean(j && !n) && s.a.createElement("div", {
						className: E.a.optionPercentage,
						style: {
							width: `${j}%`,
							maxWidth: `${j}%`
						}
					}, " ")))
				}),
				v = n("./src/reddit/actions/economics/predictions/index.ts"),
				I = n("./node_modules/fbt/lib/FbtPublic.js"),
				N = n("./src/higherOrderComponents/asModal/index.tsx"),
				x = n("./src/lib/initializeClient/installReducer.ts"),
				C = n("./src/reddit/reducers/features/predictions/index.ts"),
				k = n("./src/reddit/actions/toaster.ts"),
				y = n("./src/reddit/endpoints/economics/predictions.ts"),
				P = n("./src/reddit/models/Toast/index.ts");
			const {
				fbt: S
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			Object(x.a)({
				features: {
					predictions: C.a
				}
			});
			const w = e => e(Object(k.f)({
				duration: k.a,
				kind: P.b.Error,
				text: S._("Error: Failed to change prediction selection, please try again later", null, {
					hk: "WLVPy"
				})
			}));
			var A = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				T = n("./src/reddit/controls/TextButton/index.tsx"),
				B = n("./src/reddit/selectors/telemetry.ts");
			const L = "prediction_sneak_peek",
				U = (e, t) => ({
					...B.o(e),
					post: B.I(e, t),
					subreddit: B.hb(e),
					predictions: B.O(e, t)
				});
			var M = n("./src/reddit/hooks/useTracking.ts"),
				D = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				R = n("./src/reddit/components/Econ/Prediction/PredictionChangeModal/index.m.less"),
				H = n.n(R);

			function F() {
				return (F = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const W = Object(N.a)(({
					postId: e,
					options: t,
					selectedOptionId: n,
					onClose: c
				}) => {
					const d = Object(r.d)(),
						i = Object(M.a)(),
						[l, u] = Object(o.useState)(null);
					return s.a.createElement(A.e, null, s.a.createElement(A.i, null, s.a.createElement(D.a, null, s.a.createElement(A.q, null, I.fbt._("Change your prediction", null, {
						hk: "34AjlU"
					})), s.a.createElement(T.a, {
						onClick: c
					}, s.a.createElement(A.b, null)))), s.a.createElement(A.l, null, t.map(e => s.a.createElement("button", {
						key: e.id,
						type: "button",
						className: Object(a.a)(H.a.predictionOption, {
							[H.a.selected]: e.id === (null == l ? void 0 : l.id)
						}),
						disabled: e.id === n,
						onClick: () => u(e)
					}, s.a.createElement("span", {
						className: H.a.predictionOptionLabel
					}, e.text), e.id === n && s.a.createElement(p.a, {
						className: H.a.userIcon
					})))), s.a.createElement(A.g, null, s.a.createElement(A.a, {
						onClick: c,
						"data-redditstyle": !0
					}, I.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), s.a.createElement(A.c, {
						disabled: !l,
						onClick: () => {
							l && (d((({
								postId: e,
								optionId: t
							}) => async (n, o, {
								gqlContext: s
							}) => {
								if (e && t) try {
									const o = await Object(y.d)(s(), {
										postId: e,
										optionId: t
									});
									n(Object(v.e)({
										postId: e,
										prediction: o
									})), n(Object(k.f)({
										duration: k.a,
										kind: P.b.SuccessCommunity,
										text: S._("Your prediction has been updated", null, {
											hk: "4wwhZ6"
										})
									}))
								} catch {
									w(n)
								} else w(n)
							})({
								postId: e,
								optionId: l.id
							})), i((e => t => ({
								...U(t, e),
								source: "predictions_option_change",
								action: "click",
								noun: "confirm"
							}))(e)), c())
						}
					}, I.fbt._("Confirm", null, {
						hk: "2Fmv8L"
					}))))
				}),
				G = e => s.a.createElement(W, F({
					withOverlay: !0,
					onOverlayClick: e.onClose
				}, e));
			var z = n("./src/reddit/controls/Button/index.tsx"),
				V = n("./src/reddit/icons/svgs/Undo/index.tsx");
			const {
				fbt: q
			} = n("./node_modules/fbt/lib/FbtPublic.js"), $ = ({
				postId: e,
				options: t,
				selectedOptionId: n,
				isLimitReached: a
			}) => {
				const c = Object(r.d)(),
					d = Object(M.a)(),
					i = Object(r.e)(h.t),
					[l, u] = Object(o.useState)(!1),
					m = q._("Change your prediction", null, {
						hk: "hleE5"
					});
				return s.a.createElement(s.a.Fragment, null, s.a.createElement(z.k, {
					"aria-label": m,
					className: E.a.additionalOptionButton,
					disabled: a,
					isFullWidth: !0,
					onClick: () => {
						i && (u(!0), d((e => t => ({
							...U(t, e),
							source: "predictions",
							action: "click",
							noun: "predictions_option_change"
						}))(e))), i || (c(Object(v.s)("CHANGE_PREDICTION")), d((e => t => ({
							...U(t, e),
							source: "predictions",
							action: "click",
							noun: "premium",
							actionInfo: {
								reason: "predictions_option_change"
							}
						}))(e)))
					}
				}, s.a.createElement(V.a, {
					className: E.a.icon
				}), m), l && s.a.createElement(G, {
					postId: e,
					options: t,
					selectedOptionId: n,
					onClose: () => u(!1)
				}))
			};
			var K = n("./src/reddit/hooks/useLocalStorage.ts"),
				Y = n("./src/reddit/icons/svgs/EyeDouble/index.tsx"),
				Q = n("./src/reddit/icons/svgs/Star6/index.m.less"),
				Z = n.n(Q);
			var J = ({
					className: e
				}) => s.a.createElement("svg", {
					className: Object(a.a)(Z.a.sparkle, e),
					viewBox: "0 0 12 12",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("path", {
					d: "M6.24217.834593C6.17191.634169 5.98271.5 5.77032.5c-.21238 0-.40158.134169-.47184.334593L4.09315 4.27297.820306 5.53341C.627317 5.60773.5 5.79319.5 6s.127317.39227.320306.46659L4.09315 7.72703l1.20533 3.43837c.07026.2004.25946.3346.47184.3346.21239 0 .40159-.1342.47185-.3346L7.4475 7.72703l3.2728-1.26044c.193-.07432.3203-.25978.3203-.46659s-.1273-.39227-.3203-.46659L7.4475 4.27297 6.24217.834593z",
					fill: "url(#paint0_linear)",
					stroke: "inherit",
					strokeLinejoin: "round"
				}), s.a.createElement("defs", null, s.a.createElement("linearGradient", {
					id: "paint0_linear",
					x1: "1",
					y1: "11",
					x2: "10.5506",
					y2: "10.9905",
					gradientUnits: "userSpaceOnUse"
				}, s.a.createElement("stop", {
					stopColor: "#EC0623"
				}), s.a.createElement("stop", {
					offset: "1",
					stopColor: "#FF8717"
				})))),
				X = n("./src/config.ts"),
				ee = n("./src/reddit/icons/fonts/index.tsx"),
				te = n("./src/reddit/components/Econ/Prediction/SneakPeekEducationModal/index.m.less"),
				ne = n.n(te);
			const {
				fbt: oe
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var se = Object(N.a)(({
				postId: e,
				hasSeenSneakPeek: t,
				onReveal: n,
				onClose: r
			}) => {
				const a = Object(M.a)();
				Object(o.useEffect)(() => {
					a((({
						postId: e
					}) => t => ({
						...U(t, e),
						source: L,
						action: "view",
						noun: "continue"
					}))({
						postId: e
					}))
				}, [a, e]);
				return s.a.createElement("div", {
					className: ne.a.modal
				}, s.a.createElement(z.t, {
					"aria-label": oe._("Close", null, {
						hk: "10CQyx"
					}),
					className: ne.a.closeButton,
					Icon: Object(ee.b)("close"),
					onClick: r,
					priority: z.c.Plain
				}), s.a.createElement("header", {
					className: ne.a.header
				}, s.a.createElement("div", {
					className: ne.a.imageWrapper
				}, s.a.createElement("img", {
					className: ne.a.image,
					src: `${X.a.assetPath}/img/econ/predictions/sneak_peek.png`,
					alt: oe._("Snoo peeking behind the curtain", null, {
						hk: "271pCZ"
					})
				}), !t && s.a.createElement(s.a.Fragment, null, s.a.createElement(J, {
					className: ne.a.star1
				}), s.a.createElement(J, {
					className: ne.a.star2
				}), s.a.createElement(J, {
					className: ne.a.star3
				}), s.a.createElement(J, {
					className: ne.a.star4
				}), s.a.createElement(J, {
					className: ne.a.star5
				}))), s.a.createElement("div", {
					className: ne.a.spacer
				}), s.a.createElement("p", {
					className: ne.a.premium
				}, oe._("Premium Feature", null, {
					hk: "32ZWoW"
				})), s.a.createElement("div", {
					className: ne.a.smallSpacer
				}), s.a.createElement("h2", {
					className: ne.a.title
				}, oe._("Sneak Peek", null, {
					hk: "2FAIvU"
				})), s.a.createElement("h3", {
					className: ne.a.subtitle
				}, oe._("Reddit Premium members can see what others have picked before making a prediction.", null, {
					hk: "R7Vkp"
				}))), s.a.createElement(z.t, {
					priority: z.c.Primary,
					className: ne.a.button,
					onClick: () => {
						a((({
							postId: e
						}) => t => ({
							...U(t, e),
							source: L,
							action: "click",
							noun: "continue"
						}))({
							postId: e
						})), n(), r()
					},
					isFullWidth: !0
				}, oe._("Continue", null, {
					hk: "3T00JU"
				})), s.a.createElement("div", {
					className: ne.a.spacer
				}), s.a.createElement("p", {
					className: ne.a.disclaimer
				}, oe._("Limited time feature available for paid Reddit Premium members only.", null, {
					hk: "2F8m1c"
				})))
			});
			const {
				fbt: re
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ae = ({
				disabled: e,
				isEnded: t,
				userSelection: n,
				isShowingHint: a,
				tournamentId: c,
				postId: d,
				onReveal: i
			}) => {
				const l = Object(r.d)(),
					u = Object(M.a)(),
					[m, p] = Object(o.useState)(!1),
					[_, b] = Object(K.a)("hasSeenPredictionSneakPeek", !1),
					f = !!c,
					g = n && !a,
					O = Object(r.e)(h.t),
					j = () => {
						_ || b(!0), p(!1)
					};
				return !t && !g && f ? s.a.createElement("div", {
					className: E.a.optionButtonWrapper
				}, !_ && !e && s.a.createElement(s.a.Fragment, null, s.a.createElement(J, {
					className: E.a.star1
				}), s.a.createElement(J, {
					className: E.a.star2
				}), s.a.createElement(J, {
					className: E.a.star3
				}), s.a.createElement(J, {
					className: E.a.star4
				}), s.a.createElement(J, {
					className: E.a.star5
				})), s.a.createElement(z.k, {
					"aria-label": re._("Sneak a peek", null, {
						hk: "1VQ7WW"
					}),
					className: E.a.additionalOptionButton,
					disabled: e,
					isFullWidth: !0,
					onClick: () => {
						if (!O) return u((({
							postId: e
						}) => t => ({
							...U(t, e),
							source: L,
							action: "click",
							noun: "premium"
						}))({
							postId: d
						})), void l(Object(v.s)("SNEAK_PEEK"));
						u((e => t => ({
							...U(t, e),
							source: "predictions",
							action: "click",
							noun: L
						}))(d)), _ ? i() : p(!0)
					}
				}, s.a.createElement(Y.a, {
					className: E.a.icon
				}), re._("See what others predicted", null, {
					hk: "s0o8s"
				})), m && s.a.createElement(se, {
					postId: d,
					hasSeenSneakPeek: _,
					onReveal: i,
					onClose: j,
					withOverlay: !0,
					onOverlayClick: j
				})) : null
			};
			var ce = n("./src/reddit/icons/svgs/MinusCircle/index.tsx"),
				de = n("./src/reddit/models/Prediction/index.ts"),
				ie = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				le = n("./src/reddit/components/Econ/Prediction/PredictionCard/PredictionBody/index.m.less"),
				ue = n.n(le);

			function me() {
				return (me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: pe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _e = ({
				prediction: e,
				selectedOptionId: t,
				onSelectOption: n,
				className: c,
				...d
			}) => {
				const {
					creatorId: i,
					endsAt: l,
					options: m,
					resolvedOptionId: p,
					totalVoters: _,
					tournamentId: b,
					userSelection: f,
					predictionStatus: E,
					voteUpdatesRemained: g
				} = e, O = Boolean((null == e ? void 0 : e.userSelection) && !(null == e ? void 0 : e.resolvedOptionId) && e.predictionStatus === de.b.Open && e.endsAt > Date.now()), v = Object(r.e)(t => (null == e ? void 0 : e.tournamentId) ? Object(ie.a)(t, e.tournamentId) : null), I = Object(r.e)(h.X), N = Object(r.e)(h.pb), x = Object(r.e)(h.K), [C, k] = Object(o.useState)(!1), y = i === N, P = l < Date.now(), S = P && y && !p, w = E === de.b.Cancelled || E === de.b.CancelInProgress, A = P || !!f || !!p || w;
				return Object(o.useEffect)(() => {
					k(!1)
				}, [f, e]), s.a.createElement("div", me({
					className: Object(a.a)(c, ue.a.poll, {
						[ue.a.isNightMode]: I
					})
				}, d), s.a.createElement(u, {
					theme: null == v ? void 0 : v.theme
				}, e.title), s.a.createElement("div", {
					className: ue.a.predictionOptions
				}, !x && !A && s.a.createElement("div", {
					className: ue.a.loggedOutTooltip
				}, s.a.createElement(ce.a, {
					className: ue.a.loggedOutIcon
				}), pe._("You must be logged in", null, {
					hk: "18KrL7"
				})), m.map(e => s.a.createElement(j, {
					key: e.id,
					isCancelled: w,
					isEnded: P,
					isSelected: t === e.id,
					needsResolution: S,
					option: e,
					onClick: () => n(e),
					resolvedOptionId: p,
					tournamentId: b,
					userSelection: f,
					userIsLoggedOut: !x,
					votePercentage: (f || P || C) && e.voteCount ? Math.floor(e.voteCount / _ * 100) : null,
					isShowingHint: C
				})), !w && s.a.createElement(ae, {
					disabled: C || !!f,
					isEnded: P,
					userSelection: f,
					isShowingHint: C,
					tournamentId: b,
					postId: e.postId,
					onReveal: () => k(!0)
				}), !w && O && s.a.createElement($, {
					isLimitReached: 0 === g,
					postId: e.postId,
					options: m,
					selectedOptionId: f
				})))
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionChangeModal/index.m.less": function(e, t, n) {
			e.exports = {
				predictionOption: "_3wvUT6tjOcXB4BiKlEXrxY",
				selected: "_1gT-9Fji_KmUujExIMuFfd",
				userIcon: "k-ZpKUSo0rrrjE-paWfxJ",
				predictionOptionLabel: "_1Vz7v_uQsxv72ujqMsoKZQ"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionModal/Header/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_1GnHYLn0aCObcLqTA1xtwR",
				closeButton: "_2iZ-IXZZylrwavp6aeTzFX",
				colorCommentary: "_20HQ1aGzvIpnUMKQggpUrI",
				hasAddedCoins: "_26TE7PvrR6D7io5LwqJShQ",
				highlight: "MhHemiuT8jEMOEZV2ky8T",
				isHighlighting: "Lh1EKHOdpzj9KClHFZO35",
				leftStar: "_2elK6PfkbfOBu-Zo47yqQg",
				rightStar: "itoX1IG77IjNRjLMJw4vg"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionModal/Selection/index.m.less": function(e, t, n) {
			e.exports = {
				selection: "_3mXeWtWrQMUrcX5gN64pJZ",
				grow: "_2sH8TgObwzRLtZtrzpMDFv"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionModal/TokensBalance/index.m.less": function(e, t, n) {
			e.exports = {
				tokenBalance: "_3FN0WWt8zU4273aLhsg5Mf",
				tokenBalanceAmount: "_1mH1VcHrBLLHVuWEyMjmPc",
				tokenIcon: "meUq1Ym4T72uvWc0573zE"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionModal/TournamentModal/index.m.less": function(e, t, n) {
			e.exports = {
				tournamentModal: "_1ZwbNEB_CkXgsPHvd_yGom",
				header: "_21O9QZ9odUc-EjEI0_IVBx",
				closeButton: "_2cwSMahOpk3tN8Knx3Id0p",
				icon: "_2La5u-MiWtOiPltRSpN8wd",
				title: "_31S3wyN_Y_wpk0B1_hhfU4",
				description: "_2JJpYQS-Sk6uoTiiFXo79I",
				body: "_2zF5MW_C2QBAu0mAika8Gs",
				startingBalance: "_2_LXvPdFD3G3FQHyFdYWjv",
				startingBalanceAmount: "_2ihisW4YYWgHbg--E5ziZV",
				tokenIcon: "dx_v5TREuc0HpN650m0cu",
				submitButton: "lskXtzEUGGLAsiYV4HeII",
				loadingIcon: "FsNp70qAgPxCvw8FjMM8w"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionModal/index.m.less": function(e, t, n) {
			e.exports = {
				modalWrapper: "_1WJUwbe3sPKSU0YD7O6AM1",
				modalContent: "PCljWh8QzWYMvMGLfqHrV",
				wagerSelectorContainer: "Ohg8M4OViq6F3ULEi2saM",
				wagerSelector: "_2os23XvAUtqZ5v2x_vZB4q",
				wagerSelectorButton: "_2fD6RvMV1dH5U6TJHO81PQ",
				wagerSelectorButtonIcon: "_3igSbIyijCUbD3M6-qz2f_",
				wagerSelectorAmount: "_3yy0IyOr4j2OT-I1JKUGDN",
				loadingIcon: "_241eeIb3aLNVitpodV4RX2",
				amountMessage: "_10mtryO-SQvuYq4vTqNH52",
				coinIcon: "_2do4bEk5jSnsiJimU-j6Zg",
				smallCoinIcon: "hnhKerEQMs79r3yG5XMJD",
				tokenIcon: "_1QUcsp5Zu0IbSla7qCxyuV",
				predictButton: "_2VLnd_5JRilEY5bl7h_Ntn",
				isDisabled: "_3L3LyIElyyDCH99LLw9W4c",
				isCreatingVote: "GpWe_Aro2EMEP-Dd8HoN5",
				disclaimer: "_2dot3s8nobkqMUncV3HgJr",
				upsell: "_3qz04nxqANixa5AWLWjvyr"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionModal/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return X
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/Econ/Prediction/TournamentTokenIcon/index.tsx"),
				l = n("./src/reddit/components/Econ/Prediction/UnicornIcon/index.tsx"),
				u = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				m = n("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				p = n("./src/reddit/icons/svgs/Minus/index.tsx"),
				_ = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				b = n("./src/reddit/helpers/trackers/predictions.ts"),
				h = n("./src/reddit/hooks/useTracking.ts"),
				f = n("./src/reddit/models/Prediction/index.ts"),
				E = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/controls/Button/index.tsx"),
				O = n("./src/reddit/icons/fonts/index.tsx");

			function j({
				className: e
			}) {
				return s.a.createElement("svg", {
					className: e,
					width: "24",
					height: "24",
					viewBox: "0 0 24 24",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("path", {
					opacity: "0.4",
					d: "M12 0L13.6971 10.3029L24 12L13.6971 13.6971L12 24L10.3029 13.6971L0 12L10.3029 10.3029L12 0Z",
					fill: "#DDBD37"
				}))
			}
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js"), I = {
				0: [v._("IT’S LIKE YOU HAVE ESPN OR SOMETHING", null, {
					hk: "4uUPl5"
				}), v._("SOMEONE’S WEARING THEIR SMARTYPANTS", null, {
					hk: "qN0k"
				}), v._("CARE TO MAKE THIS INTERESTING?", null, {
					hk: "47Xsve"
				}), v._("NOT MUCH OF A RISK TAKER ARE YOU?", null, {
					hk: "2L977G"
				}), v._("YOU HAVE CHOSEN… WISELY", null, {
					hk: "2TtWN7"
				}), v._("EVEN A BROKEN CLOCK…", null, {
					hk: "4hICJf"
				}), v._("THE ONLY DANGEROUS AMOUNT IS NONE", null, {
					hk: "gXUSY"
				}), v._("KNOWING IS NOT ENOUGH, WE MUST APPLY", null, {
					hk: "2TKCxt"
				}), v._("FEEL A SENSE OF PRIDE AND ACCOMPLISHMENT", null, {
					hk: "Fyuw6"
				})],
				10: [v._("YOU’RE GONNA NEED A BIGGER BOAT", null, {
					hk: "10rVXp"
				}), v._("MORE COWBELL!!!", null, {
					hk: "2QxBVm"
				}), v._("THIS X 100", null, {
					hk: "22KiG6"
				}), v._("PUT THEM IN COACH, THEY’RE READY TO PLAY", null, {
					hk: "HSHpa"
				}), v._("LOOK WHO FINALLY DECIDED TO SHOW UP", null, {
					hk: "xiCan"
				})],
				30: [v._("PLAYER 1 HAS ENTERED THE GAME", null, {
					hk: "3ar3RF"
				}), v._("9/10 WOULD ADD MORE AGAIN", null, {
					hk: "4vHoFB"
				}), v._("HAVING NO LIMITATION AS LIMITATION", null, {
					hk: "XCKKV"
				}), v._("LIVE, LAUGH, LOVE, ADD MORE", null, {
					hk: "108oZP"
				})],
				100: [v._("LIKE A BOSS!", null, {
					hk: "1L9c48"
				}), v._("MAKE IT SO", null, {
					hk: "4l4SGb"
				}), v._("SOMEBODY’S GOTTA WIN", null, {
					hk: "AYUg5"
				}), v._("IN IT TO WIN IT", null, {
					hk: "i1Fve"
				}), v._("WELCOME TO THE CENTURY CLUB", null, {
					hk: "2crGlm"
				})]
			}, N = (e = 0) => {
				const t = I[e];
				return t[Math.floor(Math.random() * t.length)]
			};
			var x = n("./src/reddit/components/Econ/Prediction/PredictionModal/Header/index.m.less"),
				C = n.n(x);
			const {
				fbt: k
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function y({
				onCancel: e,
				selectedChipPack: t
			}) {
				const [n, r] = Object(o.useState)(null), [a, c] = Object(o.useState)(!1), i = (null == t ? void 0 : t.amount) || 0;
				return Object(o.useEffect)(() => {
					r(N(i)), c(!0), setTimeout(() => c(!1), 400)
				}, [i]), s.a.createElement("div", {
					className: C.a.header
				}, s.a.createElement(g.t, {
					"aria-label": k._("Close", null, {
						hk: "40q8CL"
					}),
					className: C.a.closeButton,
					Icon: Object(O.b)("close"),
					onClick: e,
					priority: g.c.Plain
				}), s.a.createElement("h3", {
					className: Object(d.a)(C.a.colorCommentary, {
						[C.a.hasAddedCoins]: !!i
					}),
					"data-testid": "color-commentary"
				}, n || s.a.createElement(s.a.Fragment, null, " "), s.a.createElement("div", {
					className: Object(d.a)(C.a.highlight, {
						[C.a.isHighlighting]: a
					})
				}, s.a.createElement(j, {
					className: C.a.leftStar
				}), s.a.createElement(j, {
					className: C.a.rightStar
				}))))
			}
			var P = n("./src/reddit/components/Econ/Prediction/PredictionModal/Selection/index.m.less"),
				S = n.n(P);
			const {
				fbt: w
			} = n("./node_modules/fbt/lib/FbtPublic.js"), A = ({
				option: e
			}) => s.a.createElement("h1", {
				className: S.a.selection
			}, w._("You picked {lineBreak}{optionText}!", [w._param("lineBreak", s.a.createElement("br", null)), w._param("optionText", `‘${e.text}’`)], {
				hk: "4FrNCA"
			}));
			var T = n("./src/reddit/components/Econ/Prediction/PredictionModal/TokensBalance/index.m.less"),
				B = n.n(T);
			const {
				fbt: L
			} = n("./node_modules/fbt/lib/FbtPublic.js"), U = ({
				tournamentId: e,
				balance: t
			}) => s.a.createElement("div", {
				className: B.a.tokenBalance
			}, L._({
				"*": "You have {=[tokenImage][tokenBalance]} tournament tokens",
				_1: "You have {=[tokenImage][tokenBalance]} tournament token"
			}, [L._param("=[tokenImage][tokenBalance]", s.a.createElement("span", {
				className: B.a.tokenBalanceAmount
			}, L._("{tokenImage}{tokenBalance}", [L._param("tokenImage", s.a.createElement(i.a, {
				tournamentId: e,
				className: B.a.tokenIcon
			})), L._param("tokenBalance", t)], {
				hk: "45pdHg"
			}))), L._plural(t)], {
				hk: "4Gtem2"
			}));
			var M = n("./src/reddit/actions/economics/predictions/index.ts"),
				D = n("./src/reddit/hooks/useToast.tsx"),
				R = n("./src/reddit/selectors/features/predictions/tournaments/index.ts");
			const {
				fbt: H
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const {
				fbt: F
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var W = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.m.less"),
				G = n.n(W),
				z = n("./src/reddit/components/SubredditIcon/index.tsx"),
				V = n("./src/reddit/components/TrackingHelper/index.tsx"),
				q = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				$ = n("./src/reddit/selectors/subreddit.ts"),
				K = n("./src/reddit/components/Econ/Prediction/PredictionModal/TournamentModal/index.m.less"),
				Y = n.n(K);
			const {
				fbt: Q
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Z({
				onCancel: e,
				onSubmit: t,
				pollId: n,
				subredditId: a
			}) {
				const c = Object(V.b)(),
					d = Object(r.d)(),
					l = Object(r.e)(e => Object(R.f)(e, {
						subredditId: a
					})),
					m = Object(r.e)(e => Object($.R)(e, {
						subredditId: a
					})),
					p = Object(q.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: m
					}),
					[_, h] = Object(o.useState)(!1);
				if (Object(o.useEffect)(() => {
						c(Object(b.u)({
							numberPredictionTokens: X,
							pollId: n
						}))
					}, [n, c]), Object(o.useEffect)(() => {
						!l && m ? d(Object(M.l)(m.name)) : l || e()
					}, [d, l, m, e]), !l) return null;
				return s.a.createElement("div", {
					className: Y.a.tournamentModal
				}, s.a.createElement("div", {
					className: Y.a.header
				}, s.a.createElement(z.b, {
					className: Y.a.icon,
					iconUrl: p.url,
					altText: Q._("Subreddit icon", null, {
						hk: "gEWhf"
					}),
					subredditOrProfile: m
				}), s.a.createElement("h1", {
					className: Y.a.title
				}, l.name), s.a.createElement("p", {
					className: Y.a.description
				}, Q._("Welcome to tournament play! Claim your tokens, make predictions, and climb up the leaderboard.", null, {
					hk: "1tajkZ"
				})), s.a.createElement(g.t, {
					"aria-label": Q._("Close", null, {
						hk: "40q8CL"
					}),
					className: Y.a.closeButton,
					Icon: Object(O.b)("close"),
					onClick: e,
					priority: g.c.Plain
				})), s.a.createElement("div", {
					className: Y.a.body
				}, s.a.createElement("div", {
					className: Y.a.startingBalance
				}, Q._({
					"*": "Claim your {tokens amount}tokens to get started",
					_1: "Claim your {tokens amount} token to get started"
				}, [Q._param("tokens amount", s.a.createElement("span", {
					className: Y.a.startingBalanceAmount
				}, s.a.createElement(i.a, {
					className: Y.a.tokenIcon,
					tournamentId: l.tournamentId
				}), X)), Q._plural(X)], {
					hk: "1qVlUJ"
				})), s.a.createElement("button", {
					className: Y.a.submitButton,
					onClick: async () => {
						h(!0), await t(), h(!1)
					}
				}, _ ? s.a.createElement(u.a, {
					className: Y.a.loadingIcon,
					sizePx: 6
				}) : Q._("Join the Tournament!", null, {
					hk: "SIzo7"
				}))))
			}
			const {
				fbt: J
			} = n("./node_modules/fbt/lib/FbtPublic.js"), X = 1e3, ee = Object(a.c)({
				userCoins: E.e
			});
			t.b = Object(r.b)(ee)(Object(c.a)(({
				isCreatingVote: e,
				onCancel: t,
				onPredict: n,
				option: a,
				pollId: c,
				subredditId: E,
				tournamentId: g,
				userCoins: O
			}) => {
				const j = function(e, t, n) {
						const [o, a] = s.a.useState([]), c = Object(D.a)(), d = Object(r.d)(), i = Object(r.e)(t => e ? Object(R.a)(t, e) : null), l = s.a.useCallback(async () => {
							try {
								const e = await d(Object(M.i)(t));
								a(e)
							} catch (e) {
								c(H._("Error: Failed to get chip packs for post", null, {
									hk: "1wR7Zy"
								})), n()
							}
						}, [t, d, c, n]);
						return s.a.useEffect(() => {
							(null == i ? void 0 : i.predictionChipPackages) ? a(i.predictionChipPackages): l()
						}, [i, l]), o
					}(g, c, t),
					{
						tokensBalance: v,
						setTokensBalance: I,
						fetched: N
					} = function(e, t) {
						const [n, o] = s.a.useState(null), [a, c] = s.a.useState(!1), d = Object(r.d)(), i = Object(D.a)(), l = s.a.useCallback(async () => {
							if (e) try {
								const t = await d(Object(M.j)(e));
								c(!0), o(t)
							} catch (n) {
								i(F._("Error: Failed to fetch user balance", null, {
									hk: "TF2D5"
								})), t()
							}
						}, [e, d, i, t]);
						return s.a.useEffect(() => {
							e && (o(null), c(!1), l())
						}, [e, l]), {
							tokensBalance: n,
							setTokensBalance: o,
							fetched: a
						}
					}(g, t),
					[x, C] = Object(o.useState)(0),
					[k, P] = Object(o.useState)(!1),
					S = Object(h.a)(),
					w = j.length > 0,
					T = j[x],
					B = w && x === j.length - 1,
					L = (null == T ? void 0 : T.currency) === f.a.Coins,
					W = L && O < ((null == T ? void 0 : T.amount) || 0),
					z = !!T && null !== v && v < T.amount,
					V = W || z,
					q = V || B;
				Object(o.useEffect)(() => {
					k || (S(b.s), P(!0))
				}, [k, S]);
				const $ = Object(o.useCallback)(async () => {
						if (!g) return null;
						I(X)
					}, [g, I]),
					K = Object(o.useCallback)(() => {
						S(Object(b.m)({
							pollId: c,
							currency: null == T ? void 0 : T.currency,
							amount: null == T ? void 0 : T.amount
						})), t()
					}, [t, c, T, S]);
				return g && !N ? null : g && null === v && N ? s.a.createElement(Z, {
					onCancel: K,
					onSubmit: $,
					pollId: c,
					subredditId: E
				}) : s.a.createElement("div", {
					className: G.a.modalWrapper
				}, s.a.createElement(y, {
					onCancel: K,
					selectedChipPack: T
				}), s.a.createElement("div", {
					className: G.a.modalContent
				}, s.a.createElement(A, {
					option: a
				}), null !== v && g && s.a.createElement(U, {
					tournamentId: g,
					balance: v
				}), L && s.a.createElement("p", {
					className: G.a.upsell
				}, J._("Prove you’re right, taunt your fellow redditors, and earn bragging rights.", null, {
					hk: "2fEaS6"
				})), s.a.createElement("div", {
					className: G.a.wagerSelectorContainer
				}, s.a.createElement("div", {
					className: G.a.wagerSelector
				}, s.a.createElement("button", {
					"aria-label": J._("Decrease amount", null, {
						hk: "3CJknV"
					}),
					type: "button",
					disabled: 0 === x,
					className: G.a.wagerSelectorButton,
					onClick: () => {
						w && 0 !== x && C(x - 1)
					}
				}, s.a.createElement(p.a, {
					className: G.a.wagerSelectorButtonIcon
				})), (null == T ? void 0 : T.currency) === f.a.Coins && s.a.createElement("div", {
					className: G.a.wagerSelectorAmount
				}, s.a.createElement(m.a, {
					className: G.a.coinIcon
				}), " ", T.amount ? T.amount : J._("Free", null, {
					hk: "2EqRoV"
				})), (null == T ? void 0 : T.currency) === f.a.Tokens && s.a.createElement("div", {
					className: G.a.wagerSelectorAmount
				}, T.amount > 0 ? s.a.createElement(s.a.Fragment, null, g ? s.a.createElement(i.a, {
					tournamentId: g,
					className: G.a.tokenIcon
				}) : s.a.createElement(l.a, {
					className: G.a.tokenIcon
				}), " ", T.amount) : J._("Free", null, {
					hk: "1fDvBk"
				})), !T && s.a.createElement(u.a, {
					className: G.a.loadingIcon,
					sizePx: 24
				}), s.a.createElement("button", {
					"aria-label": J._("Increase", null, {
						hk: "3OfAwL"
					}),
					type: "button",
					disabled: Boolean(w && B),
					className: G.a.wagerSelectorButton,
					onClick: () => {
						w && (B || C(x + 1))
					}
				}, s.a.createElement(_.a, {
					className: G.a.wagerSelectorButtonIcon
				}))), q && s.a.createElement("div", {
					className: G.a.amountMessage
				}, W && J._("Insufficient coins", null, {
					hk: "2Mo83P"
				}), z && J._("Insufficient tokens", null, {
					hk: "2XAKK7"
				}), B && !V && J._("Max amount", null, {
					hk: "1BpnPd"
				}))), s.a.createElement("button", {
					className: Object(d.a)(G.a.predictButton, {
						[G.a.isDisabled]: !w || W,
						[G.a.isCreatingVote]: e
					}),
					disabled: !w || e || z,
					onClick: e => {
						e.preventDefault(), T && n(T)
					}
				}, e ? s.a.createElement(u.a, {
					sizePx: 16
				}) : W ? J._("Get Coins", null, {
					hk: "11KD6n"
				}) : J._("Let's do this!", null, {
					hk: "342MNr"
				})), s.a.createElement("div", {
					className: G.a.disclaimer
				}, L && s.a.createElement(s.a.Fragment, null, J._("You must be over 18 to use Predictions. {=Predictions don’t offer an opportunity to win real money or prizes.}", [J._param("=Predictions don’t offer an opportunity to win real money or prizes.", s.a.createElement("a", {
					href: "https://www.redditinc.com/policies/previews-terms",
					target: "_blank",
					rel: "noopener noreferrer"
				}, J._("Predictions don’t offer an opportunity to win real money or prizes.", null, {
					hk: "1BMKCi"
				})))], {
					hk: "7yPT5"
				}), " "), J._("Other redditors will see your username and prediction.", null, {
					hk: "TPwVV"
				}))))
			}))
		},
		"./src/reddit/components/Econ/Prediction/PredictionOption/index.m.less": function(e, t, n) {
			e.exports = {
				optionButtonWrapper: "_34jfwxE2y_snkXA3q3aaQf",
				optionButton: "_2ntp-JcW8WtkgytaV4Ulhf",
				isNightMode: "_17-ocDeIf2QgrKTHF5n7di",
				canVote: "_1fbJ_nQTE-D4anabkE96oz",
				isVote: "_4SUCBqznJCIiyL9k_52hC",
				isCorrect: "_3jmmoq1otA_Twif-J89nrp",
				optionBody: "X-1krr1vt__mfLM_N6-fc",
				optionText: "_2EtRvWvspf1e95m4nOww3i",
				optionLabel: "JNA6AzK0pVROVOqIFFB3G",
				optionStake: "_13IxX5Ek1VDFfqrZVhO_Xz",
				checkmarkIcon: "_2gAEl8yg8wfIPLrKbwHden",
				icon: "mm7Q2UimK8B5N7a2U94Uh",
				optionPercentage: "_3cTLrBysxImecWhQKcy3u_",
				isShowingHint: "_23J3bI5jf022JCgL4vM3Zp",
				showPercentage: "dtXtw-ToVB3DAPXazCaaq",
				userIcon: "_5L5Z5CqK308hQypmxKdC",
				additionalOptionButton: "mi-WqucYD1Uh7MYPt--9p",
				star1: "OvDvpN-0fsFe2vyihFSWI",
				star2: "_1b-Rcn8TB4dTLb7t_11a0",
				star3: "_3DiunxbT_MWQsv1uJCrEvS",
				star4: "_2ASeRoLCrsveZYTJBWi1y3",
				star5: "_19HQMXjQGx095f06-3MUZJ"
			}
		},
		"./src/reddit/components/Econ/Prediction/SneakPeekEducationModal/index.m.less": function(e, t, n) {
			e.exports = {
				spacer: "_2lOF589sck8KQ4FnVEWW0U",
				smallSpacer: "q25tTYLfD3AaNWgMClUW9",
				modal: "_1T1cPQ8A8THV3QMwDEQWxa",
				closeButton: "_2asP7ByDb9TqPgTG5Yipf",
				image: "_2uQkREvcO_IZ8xinUClYPD",
				imageWrapper: "_2f-aBCRtO2okiI_HwHpzFL",
				star1: "_32eOw4JBGw9kCgQbumS9CS",
				star2: "_1_y2fP4exqsKI3QjWyZz3G",
				star3: "_2s1-6DoM2sP6LWqhnZHCtd",
				star4: "_3q1HNUcRHlWHf-dLMVLnq7",
				star5: "z0Yf7Le4jhc_ysKdAezR8",
				header: "_2MI6f2Bk7JWrVszKp6pplV",
				premium: "_3Ok8bf8kgA586EgmlPYEdw",
				title: "_2NTtJ62nZhgKIZsIZwd0x0",
				subtitle: "_26Goo93ZC_1jjnUEGhzPJ0",
				button: "ivi4pKH2EWGJmAzSzhK_c",
				link: "_1cmrgMg2Y5G_7pVsl1FrOj",
				disclaimer: "_1LCzgVcKu-bOGV1_rVsZVG"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentTokenIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/reddit/components/Econ/Prediction/UnicornIcon/index.tsx"),
				d = n("./src/reddit/selectors/features/predictions/tournaments/index.ts");
			const i = ({
				tournamentId: e,
				className: t
			}) => {
				const n = Object(a.e)(t => Object(d.a)(t, e));
				return n && n.tokenIconUrl ? r.a.createElement("img", {
					className: t,
					alt: o.fbt._("Tournament token", null, {
						hk: "3cgDZy"
					}),
					src: n.tokenIconUrl
				}) : r.a.createElement(c.a, {
					className: t
				})
			}
		},
		"./src/reddit/components/Econ/Prediction/UnicornIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function r({
				className: e
			}) {
				return s.a.createElement("svg", {
					className: e,
					fill: "none",
					height: "20",
					viewBox: "0 0 20 20",
					width: "20",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("path", {
					d: "m11.8373 7.17254c-.0381-2.14805-1.2066-4.26563-3.12608-5.6611-.7001 1.14224-1.0571 2.46166-1.02847 3.80108.02863 1.33941.44168 2.64237 1.18995 3.75365",
					fill: "#ffc2dd"
				}), s.a.createElement("path", {
					d: "m8.87285 9.06578c-.03047.01981-.17672-.13254-.39609-.43722-.29757-.44864-.53424-.93481-.70383-1.44575-.25319-.76597-.37124-1.57014-.34887-2.37656.0185-.47751.08381-.95205.195-1.4168.12075-.49951.29704-.98393.52559-1.44421.04547-.10166.09632-.20083.15234-.29708l.16453-.28792c.0182-.03202.04253-.06014.07159-.08276.02907-.02261.06231-.03928.09782-.04904s.0726-.01243.10914-.00785c.03655.00458.07183.01631.10384.03453l.02742.01828c.38016.28079.73681.5921 1.0664.93082.30177.31806.57737.65991.82417 1.02223.4117.60733.7253 1.27566.9293 1.98046.1388.46809.2126.95301.2194 1.44118 0 .34277-.0396.52863-.0731.52863-.0336 0-.0762-.18281-.1402-.50731-.0876-.45579-.214-.90328-.3778-1.33757-.2445-.64356-.5745-1.25128-.9811-1.8068-.2427-.32728-.50846-.63681-.79524-.92625-.31294-.30838-.64797-.59352-1.00242-.85313l.41742-.08226-.15234.2666c-.05268.08874-.10048.18028-.1432.27422-.20887.42313-.37327.8668-.49055 1.32387-.10969.42749-.18107.8639-.21328 1.30406-.04198.75145.02993 1.50493.21328 2.23488.31535 1.25684.78762 1.94696.70078 1.99875z",
					fill: "#000"
				}), s.a.createElement("path", {
					d: "m15.6001 5.87727c-.8963-.80295-1.9238-1.44605-3.0378-1.90125-.8516-.34734-1.7854-.585-2.69037-.41742-1.00242.18586-1.84945.84246-2.58984 1.55086-.89883.86988-1.70321 1.87383-2.14196 3.04687-.34277.91407-.45703 1.93177-1.02984 2.72697-.44789.6292-1.12582 1.0481-1.73672 1.5234s-1.19894 1.0664-1.32691 1.8281c-.134064.7983.2666 1.5905.76172 2.2349.43629.6039.99546 1.1085 1.64074 1.4808.65104.3698 1.41006.5028 2.14805.3763 1.28273-.2544 2.18918-1.3711 3.33937-2.0018.91406-.4966 1.98046-.6657 2.93876-1.0664 1.7105-.7343 3.0622-2.1139 3.7613-3.8391.6813-1.72672.7474-3.63533.1874-5.40512",
					fill: "#ffc2dd"
				}), s.a.createElement("path", {
					d: "m11.9928 5.88635c-.9902.47227-2.10078.77238-3.13214.36105-.44942-.17824-.91407-.48597-.99633-.96281-.08836-.53777.35648-1.01156.81047-1.31472 1.4823-.98567 3.3333-1.06641 5.0669-.66422 1.7337.40218 3.2663 2.19375 3.4842 3.95941 1.1699.23309 1.6178 1.90582 1.4396 3.08494-.0975.649-.4647 1.2416-.5027 1.8967-.0595 1.042.7175 1.9591.8302 2.9966.0424.4433-.0361.8899-.2271 1.2922-.1909.4024-.4873.7455-.8576.993-.7449.4829-2.1998.8653-2.9661.4174-.5408.5408-1.0664.8531-1.953.5621-.4365-.1597-.8123-.4516-1.075-.835s-.3992-.8392-.3906-1.3039c.0251-.4645.1826-.9122.4539-1.2901.2713-.378.645-.6704 1.0772-.8427-.118-.6928-.0689-1.4038.143-2.0739.212-.6701.5808-1.2799 1.0757-1.7789.4357-.4311.6475-1.2568.8623-1.82809.3184-.84551.0792-1.3589-.7115-1.79461-.7906-.4357-.6322-.91406-1.5356-.93234",
					fill: "#7e53c1"
				}), s.a.createElement("path", {
					d: "m2.93455 11.5232c-.76172.5652-1.73063 2.1861-1.73063 2.1861-.335154.9887-.09293 2.174.67184 2.8839.30469.2803.66879.4814.97347.7617.24375.2209.4479.489.72973.6581.29688.1598.6324.2336.96891.2133 1.02679-.0183 1.96523-.5515 2.83207-1.1014.52711-.3337.74496-.3748 1.08469-.8973.33972-.5226.44179-1.2508.08074-1.7596-.10551-.1489-.24341-.2718-.40332-.3597s-.33766-.1383-.51989-.1476c.14706-.1759.25646-.3801.32145-.5999.06499-.2199.08417-.4507.05637-.6783-.03221-.2274-.1238-.4424-.26556-.6232-.14175-.1808-.32865-.321-.54187-.4066-.21517-.0769-.44922-.0833-.66831-.0184s-.41185.1978-.55044.3795c-.12035-.4571-.26812-.9415-.66117-1.1929-.39304-.2514-.95672-.1706-1.36043.0899s-.73429.2133-1.01156.6094",
					fill: "#ff85c6"
				}), s.a.createElement("g", {
					fill: "#000"
				}, s.a.createElement("path", {
					d: "m12.0369 5.96144c.0076.01828-.0975.08074-.3047.18129-.1051.04875-.2422.09598-.4022.15234-.1874.06167-.3781.11253-.5713.15235l-.1691.03351-.1813.01524-.1904.02133-.2011.00761c-.29982.01193-.59992-.01521-.89273-.08074-.34868-.0711-.67773-.21717-.96434-.42809-.33198-.24583-.57949-.58862-.7084-.98109-.00992-.03112-.01206-.0642-.00622-.09634.00585-.03215.01949-.06236.03974-.088l.18129-.22699.09293-.11578c.03351-.03656.06855-.0716.10359-.10816l.21176-.21633.23613-.20109c.33521-.27221.70445-.49959 1.0984-.67641.86515-.37673 1.79855-.5717 2.74215-.57281.2458 0 .4946.00761.7465.02285.1249.01066.2514.02437.3778.03656l.3885.06703c.5231.11861 1.0247.31749 1.4869.58957.4807.27702.916.62643 1.2903 1.03594.3946.42526.6993.9258.8958 1.47164.1606.44653.2128.92481.1524 1.39547l-.2225-.32449c.3024.07237.582.21897.8136.42656.2182.19639.3962.43337.524.69773.2368.4925.3602 1.03182.3611 1.57828.0036.26324-.0198.52618-.0701.78458-.0515.2498-.1265.4941-.224.7297-.1751.4479-.3458.8471-.3351 1.231.0236.4021.1338.7945.323 1.1502.1736.3762.3762.748.5149 1.1486.0732.1995.1243.4064.1523.617.025.2054.025.4131 0 .6185-.049.3813-.1783.7479-.3793 1.0756-.1803.2992-.4198.5584-.7038.7617-.2515.1695-.5267.3009-.8166.39-.4515.1462-.9263.2072-1.4.1798-.2998-.0157-.5927-.0952-.8593-.2331-.0441-.0259-.0837-.0472-.1142-.0701l-.0747-.064c-.0381-.035-.0548-.0564-.0487-.064s.0335 0 .0792.0168l.0838.0366c.0335.0137.0746.0259.1203.0426.265.0859.5427.1261.8212.1188.4422-.0126.879-.1002 1.2919-.2589.253-.0934.4915-.2222.7083-.3824.2336-.1832.4283-.4111.5729-.6703.1596-.2843.2582-.5987.2894-.9232.0316-.3501-.0206-.7025-.1523-1.0284-.131-.3519-.3321-.7038-.5256-1.0953-.2303-.4174-.366-.8802-.3976-1.3559-.0049-.2555.0316-.5102.1081-.7541.0701-.2376.1524-.457.2407-.6779.083-.2069.1462-.4211.1889-.6399.0401-.2216.0575-.44666.0518-.67179-.0025-.45984-.1065-.91345-.3046-1.32843-.089-.19841-.2208-.37466-.386-.5161-.1651-.14144-.3595-.24457-.5692-.30199-.0707-.01706-.1324-.05965-.1735-.11957s-.0585-.13291-.049-.20492c.0449-.37936.0001-.76396-.131-1.12278-.1711-.47191-.4347-.90491-.7754-1.27359-.3334-.36724-.7207-.68161-1.1487-.93234-.4116-.24365-.858-.42295-1.3238-.53168l-.3504-.06704-.352-.0396c-.2346-.0193-.4671-.02946-.6977-.03047-.8711-.0115-1.7356.15167-2.5426.47988-.69944.29292-1.31358.75772-1.78547 1.35129l.03199-.18738c.09268.31809.28096.59997.5393.80742.23935.19093.5167.32857.81351.40371.26464.07357.53739.114.81197.12035h.1874l.1798-.00762.1721-.00761.163-.01981c.2118-.01828.3976-.06246.5607-.08988.163-.02742.3046-.06856.4082-.0975.2194-.05942.3398-.08379.3474-.06551z"
				}), s.a.createElement("path", {
					d: "m15.1617 6.80064c.032-.01066.16.18738.2529.60938.0533.25693.0661.52062.0381.78152-.0428.34276-.1325.678-.2666.99633-.159.38683-.3724.749-.6338 1.07553-.2727.3504-.5713.684-.8318 1.0664-.1345.1968-.2591.4001-.3732.6094-.1109.2057-.1964.4241-.2544.6505-.126.4741-.116.9741.0289 1.4427l.0549.1523.0655.1524v.0107c.0153.035.0235.0728.0241.1111s-.0063.0763-.0205.1118c-.0142.0356-.0352.068-.062.0954-.0268.0273-.0587.0491-.094.064l-.0228.0092c-.4112.1591-.7588.4486-.9897.8242s-.3322.8166-.2885 1.2553c.0443.3877.1928.7562.4296 1.0664.21.2635.5015.4499.8288.5301.0736.0194.1484.0342.2239.0442.0792.0102.1564.0183.2316.0244.1384.0097.2774.0097.4159 0 .2139-.0066.4231-.0652.6093-.1706.3047-.1874.4007-.3977.4434-.3702.0167.0076.0091.0655-.029.166-.0649.1473-.1623.2781-.2849.3824-.2014.1636-.4437.2689-.7007.3047-.1541.0256-.31.0389-.4662.0396-.0823 0-.1656 0-.2499 0-.0935-.0045-.1866-.0152-.2787-.032-.4244-.0768-.8101-.2954-1.0939-.62-.3157-.3695-.521-.8204-.5926-1.3011-.0783-.5443.0291-1.0992.3047-1.5752.2866-.522.7517-.9233 1.3101-1.1304l-.1645.4022-.0838-.1858c-.0228-.064-.0487-.1265-.0701-.192-.1795-.573-.1895-1.1856-.0289-1.7641.0739-.272.1819-.5336.3215-.7785.1288-.2228.2697-.4385.4219-.646.2956-.4067.6231-.7464.8943-1.06636.2517-.28403.4648-.60009.6337-.93996.1414-.27918.2488-.57429.32-.87903.0485-.23077.0679-.4667.0579-.7023-.0198-.38695-.0732-.6109-.0305-.62461z"
				}), s.a.createElement("path", {
					d: "m11.7475 15.5359c.0397.0198-.0121.1751-.0487.457-.0497.3816-.0079.7696.1219 1.1319.0832.2572.2266.4908.4181.6816.1916.1907.4258.3331.6833.4153.2964.1041.6157.1251.9232.0609.3275-.0754.6263-.2436.8608-.4844.0439-.0439.1008-.0725.1623-.0816.0614-.009.1242.0019.1789.0313l.0229.0122.131.0716c.3301.1294.6855.1815 1.039.1523.3483-.0224.6927-.0874 1.0252-.1935.2948-.0892.572-.2283.8196-.4113.2096-.1663.3885-.3678.5287-.5957.2115-.3484.3397-.741.3747-1.1471.0275-.2879.0153-.457.0595-.4677.0441-.0107.1233.1523.1675.457.0501.4566-.033.918-.2392 1.3285-.1429.2883-.3393.5468-.5789.7617-.2813.2401-.6046.426-.9536.5484-.3748.137-.7663.2231-1.1639.256-.4489.0469-.9024-.017-1.3209-.1859-.07-.0335-.1371-.0746-.2056-.1112l.3626-.0381c-.3113.3274-.7135.554-1.1548.6505-.409.0775-.8316.0374-1.2188-.1158-.1777-.0673-.3469-.1553-.5042-.262-.1473-.1097-.279-.2388-.3915-.3839-.2342-.2994-.39-.6525-.4534-1.0273-.0633-.3748-.0321-.7595.0908-1.1192.1112-.291.2346-.4083.2635-.3915z"
				}), s.a.createElement("path", {
					d: "m12.5288 4.12384c.0335.12188-.6551.38696-1.2964.98567-.6414.59871-.9766 1.24922-1.0939 1.20504-.0533-.01981-.0411-.2209.0792-.51797.1677-.38261.4134-.72603.7214-1.00828.3079-.28226.6714-.49715 1.0672-.63094.3062-.09902.5073-.08836.5225-.03352z"
				}), s.a.createElement("path", {
					d: "m11.1488 3.92917c.0243.12492-.6734.33058-1.32543.89273s-.98262 1.20199-1.10145 1.15781c-.05332-.0198-.04265-.21937.07922-.51187.171-.37717.42374-.71159.73992-.97903.31619-.26744.68794-.4612 1.08824-.56726.3107-.0716.5088-.04723.5195.00762z"
				}), s.a.createElement("path", {
					d: "m16.3803 10.1901c-.1097-.067.3915-.97041.5347-2.19678s-.1005-2.22269.0229-2.26078c.0533-.01676.1935.2148.3047.63223.0647.24543.1066.49635.1249.74953.0464.62313-.0318 1.24927-.23 1.84183-.0799.24049-.1819.47305-.3047.69469-.2118.37938-.4053.56978-.4525.53928z"
				}), s.a.createElement("path", {
					d: "m18.9885 16.1546c-.064-.0137-.0412-.2773-.1036-.6749-.0645-.5111-.2722-.9936-.5992-1.3918-.327-.3981-.7599-.6957-1.2488-.8583-.3793-.1356-.6413-.163-.6429-.23-.0015-.0671.2697-.1402.7191-.0686.5932.102 1.1302.4135 1.5132.8779.383.4643.5866 1.0507.5739 1.6525-.0167.4555-.1538.7069-.2117.6932z"
				}), s.a.createElement("path", {
					d: "m14.8916 15.5424c0 .0549-.2575.0945-.6475-.0213-.5113-.1635-.9518-.4959-1.2494-.9426-.2976-.4468-.4345-.9814-.3882-1.5162.0426-.4038.1767-.6216.2285-.6094s.0411.2513.0792.6094c.0371.4555.1895.8941.443 1.2745.2535.3803.5996.6898 1.0058.8994.3138.1721.5377.2483.5286.3062z"
				}), s.a.createElement("path", {
					d: "m17.5289 17.9844c.0198.0518-.1813.1919-.5546.3047-.2195.0627-.4453.1005-.6733.1127-.2821.0127-.5646-.0104-.841-.0685-.5039-.1057-.972-.3398-1.3589-.6795-.2879-.2651-.4021-.4799-.3625-.5164.0396-.0366.2376.0883.5454.2681.3936.2324.8213.4016 1.2675.5012.2454.051.4945.082.7449.0929.2078.0059.4158.0008.6231-.0152.358-.029.5896-.0625.6094 0z"
				}), s.a.createElement("path", {
					d: "m2.90817 17.6644c.02743-.0336.16758.0441.422.1447.35517.1372.73285.207 1.11363.2056.2607-.0006.52062-.0286.77543-.0837.29447-.0691.58245-.1634.86074-.2819.6451-.2903 1.25785-.6478 1.82813-1.0664.3184-.2194.63527-.4357.95215-.6337.16005-.1033.32643-.1964.49816-.2788.16632-.0783.33786-.145.5134-.1996.33819-.1066.66119-.1691.94909-.2316.2657-.0562.5281-.1269.7861-.2117.9461-.291 1.3894-.7419 1.4503-.6856.0274.0229-.0411.1783-.2529.39-.3054.2895-.6618.5198-1.0511.6795-.2631.1148-.5339.2111-.8105.2879-.2925.0838-.5957.1615-.8943.2712-.1517.0544-.29977.1185-.44329.1919-.15014.0784-.29562.1654-.43571.2605-.30468.1966-.60937.4114-.92929.6323-.60607.446-1.26645.8131-1.96524 1.0923-.31459.118-.64019.2042-.97195.2574-.29262.0427-.58936.0493-.8836.0198-.42771-.0359-.83949-.1789-1.19742-.4159-.24527-.1751-.33668-.3168-.31383-.3442z"
				}), s.a.createElement("path", {
					d: "m6.225 5.96731c.03504.03047-.11882.24832-.27269.70688-.15387.45855-.32906 1.14257-.64289 1.98046-.35795 1.00905-.94757 1.92005-1.72149 2.65995-.44789.4128-.98261.7419-1.41984 1.1365-.22006.1952-.41046.4216-.5652.6718-.15641.2581-.27396.5379-.34886.8303-.1496.5767-.109 1.1864.11578 1.7382.2033.5106.57035.9393 1.04355 1.2188.43841.246.94.3563 1.44117.3168.4522-.035.89467-.1495 1.30711-.3382.62316-.2632 1.19822-.6282 1.70168-1.0801.36106-.3214.55149-.521.585-.4921.03352.029-.09902.2682-.42351.6521-.46912.5411-1.04342.9812-1.68797 1.2934-.4486.2367-.93728.3881-1.44117.4463-.60087.0697-1.20871-.0451-1.74282-.329-.59015-.3284-1.05149-.8472-1.308628-1.4717-.279975-.664-.334037-1.4015-.153867-2.0993.089401-.3498.231157-.6842.420465-.9917.18513-.296.41307-.563.67641-.7922.24386-.2077.49809-.403.76172-.585.24527-.1767.47683-.3473.68707-.5286.39554-.3476.74199-.7474 1.02984-1.18832.25632-.38967.48001-.79986.66879-1.22636.34278-.78153.57586-1.46707.81199-1.91344.23614-.44637.45551-.63984.47836-.61547z"
				}), s.a.createElement("path", {
					d: "m7.61001 17.0368c-.01371-.0229.07312-.096.22852-.227.21967-.1779.4162-.3826.585-.6094.11178-.1553.19769-.3276.25441-.5103.06503-.2047.08222-.4215.05027-.6338-.0336-.226-.14711-.4325-.31992-.5819-.08594-.0808-.18875-.1414-.30099-.1775-.11225-.0361-.23111-.0467-.34799-.0312-.04085.0077-.08309.0029-.12121-.0136-.03812-.0166-.07037-.0443-.09255-.0795-.02219-.0351-.03328-.0762-.03183-.1177.00144-.0416.01535-.0817.03992-.1153.15099-.206.25783-.4409.31383-.6901.0588-.2522.04721-.5157-.03352-.7617-.06006-.1925-.16964-.3659-.31775-.5028s-.32957-.2325-.52623-.2772c-.18409-.0295-.37273-.0078-.54539.0625-.16009.0641-.29709.1751-.39305.3184v.0076c-.02289.0359-.05711.0632-.09724.0776-.04014.0144-.08391.0149-.12442.0017-.0405-.0133-.07544-.0397-.0993-.075s-.03529-.0776-.03247-.1201c.00897-.1905-.02689-.3804-.10468-.5545s-.19534-.3275-.34321-.4479c-.2408-.1906-.54594-.2806-.85161-.2514-.20637.0174-.40675.0781-.58804.1783-.12797.07-.195.1203-.21176.1035-.01676-.0167.02437-.0914.14168-.2026.17711-.1566.39359-.2619.62613-.3047.16814-.034.3411-.0371.51035-.0091.2035.0334.39676.1126.5652.2316.2034.1439.36838.3356.48046.5582.11209.2226.16786.4693.16243.7184l-.35801-.1097c.1399-.2193.34103-.3927.5785-.4989.23747-.1061.50086-.1403.75756-.0983.27463.053.52991.1791.73901.3648.2091.1858.36429.4245.44927.691.10765.3236.12191.671.04113 1.0024-.07296.3061-.21004.5932-.40219.8425l-.20109-.3306c.17731-.0238.3577-.0071.52763.0488s.32497.1497.45346.2741c.2323.2134.37995.5033.4159.8166.02715.2664-.00994.5354-.10816.7846-.08209.2088-.20017.4017-.34887.5697-.20103.2307-.44204.4232-.71145.5683-.18586.099-.29707.131-.30773.1112z"
				}), s.a.createElement("path", {
					d: "m1.63036 14.9239c-.05028-.0671.02742-.2026.10054-.4037.0973-.242.14496-.501.14016-.7618-.00623-.1382-.03082-.275-.07313-.4067-.02438-.0824-.06591-.1587-.12187-.224-.04305-.0401-.0954-.0689-.15235-.0837-.05179-.0153-.10207-.0122-.13253-.0381-.03047-.0259-.03657-.0899.03503-.1646.05278-.0478.11654-.0819.18564-.0991.06909-.0173.14139-.0173.21046.0001.09781.0283.18881.0762.26741.1409s.14313.1448.18962.2354c.14254.2601.1987.5588.16036.8529-.03833.2941-.16918.5684-.37364.7833-.20414.2026-.39305.23-.4357.1691z"
				}), s.a.createElement("path", {
					d: "m3.30922 14.9463c.00761-.0838.2148-.1218.47836-.2529.15103-.0716.29108-.1645.41589-.2757.14195-.126.25387-.2821.32754-.457.02539-.0616.03666-.1281.033-.1946-.00367-.0666-.02218-.1314-.05417-.1899-.03199-.0584-.07666-.1089-.13073-.1479-.05407-.0389-.11616-.0652-.18173-.077-.24375-.0457-.42504.0685-.48598.0152-.02894-.0243-.02742-.0959.04266-.1889.10853-.1306.26266-.215.43113-.2361.1238-.0188.25029-.0073.36868.0335.13848.0489.26222.1322.35953.2422.10996.1238.18329.2757.21175.4388.02862.1723.0102.3491-.05332.5119-.09984.2397-.25932.45-.4633.6108-.20397.1607-.44567.2667-.70213.3078-.15219.0271-.30857.0187-.45703-.0244-.09445-.035-.1432-.0777-.14015-.1158z"
				})), s.a.createElement("path", {
					d: "m3.53778 4.27334c.35264.00703.70225-.06643 1.02223-.2148.5652-.30469.58653-1.05879.69317-1.70473l-.68707-.57586-.29098-.29097c-.40265-.06883-.81671-.01302-1.18676.15996-.11314.03509-.21026.109-.27422.20871-.04419.13436-.03491.28058.0259.40828.20871.67336.43723 1.34824.69773 2.00941z",
					fill: "#fcff78"
				}), s.a.createElement("path", {
					d: "m6.92588 3.76312-1.45336-1.21875c-.08836.62309-.10817 1.28121-.66879 1.66207-.31535.21481-.73582.28793-1.16848.30469.28754.71505.63298 1.40543 1.03289 2.06426.56368.13254 1.12582.15234 1.6636-.21176.81047-.54691.7084-1.71844.59414-2.60051z",
					fill: "#34e2ac"
				}), s.a.createElement("path", {
					d: "m8.74027 5.59247c-.30468-.5591-.8059-.98262-1.2934-1.39242l-.24832-.20719c.0975.87293.10665 1.89668-.59871 2.47558-.54843.45704-1.14867.49665-1.75804.39.19381.29675.40386.58258.62918.85618.30468.35953.64593.70839 1.0923.8455.39305.12036.81809.06246 1.21875 0 .23991-.04098.4642-.14628.64899-.30468.23423-.14822.41471-.36769.51492-.62614.19905-.67984.12528-1.4105-.20567-2.03683z",
					fill: "#4ab6ff"
				}), s.a.createElement("path", {
					d: "m3.63372 1.50807c-.00915.02133-.07922 0-.20262.01066-.17338.01719-.33517.09486-.45703.21938-.08963.10119-.15545.22118-.19262.35115s-.04475.26662-.02219.3999c.03199.32297.21176.66727.45703 1.05117.47989.78 1.04203 1.71387 1.65903 2.75438l.47226.79828c.14562.26333.3215.50874.52407.73125.09393.10008.20166.18626.31992.25594.12269.06894.2545.12023.39152.15234.29024.05902.59075.04276.87293-.04723.14265-.04381.27929-.10522.40676-.18281.12585-.08503.24364-.18141.35191-.28793.21371-.19425.37641-.43804.47379-.70992.18434-.52102 0-1.09231-.33515-1.52344-.33516-.43113-.79067-.79371-1.1959-1.13648l-1.15782-.94149c-1.42593-1.13953-2.32629-1.82812-2.28515-1.89668.04113-.06855 1.02832.50578 2.52586 1.56914.37324.26661.78.56368 1.20961.89121.42961.32754.91406.67336 1.32082 1.18981.21796.26961.37913.58054.47379.91406.0477.17942.07177.36431.0716.54996-.00338.19142-.03469.38131-.09293.56368-.12117.36293-.33056.6901-.60938.95214-.1406.13226-.29366.25062-.45703.35344-.16878.10363-.34998.18553-.53929.24375-.37848.12012-.78173.13955-1.17001.05637-.19307-.04362-.37883-.11494-.55148-.21176-.16901-.097-.32297-.21811-.45703-.35953-.23145-.25682-.43095-.54072-.59414-.84551l-.45703-.81047c-.5911-1.05574-1.11668-2.01093-1.55086-2.81683-.2209-.40067-.41438-.82266-.42047-1.23551-.0138-.17693.01449-.35461.08254-.51851.06804-.16391.17393-.30937.30898-.4245.08602-.06939.18569-.1199.29251-.14825.10683-.02835.21842-.03389.32753-.01628.15844.03047.21328.09141.20567.10512z",
					fill: "#000"
				}), s.a.createElement("path", {
					d: "m4.46393 6.19913c-.07008.03961-.40371-.44332-.88664-1.25836-.24223-.40675-.52102-.8973-.82266-1.44574-.07617-.13558-.15234-.27879-.22395-.43722-.07862-.16703-.13841-.34229-.17824-.52254-.04674-.20918-.04674-.4261 0-.63528.05176-.237.17898-.45082.36258-.60937.19251-.15305.43201-.23486.67793-.23156.21542.00414.42722.05618.62004.15234.16671.07743.32497.17188.47226.28184.13711.10359.25747.20261.38086.30468.4875.38848.91407.74496 1.27969 1.05117.71906.60938 1.13801 1.02223 1.09078 1.08622-.04722.06398-.55605-.23157-1.3391-.76172-.39152-.26356-.85008-.58653-1.35586-.95215-.23758-.19065-.49262-.35846-.76172-.50121-.24527-.11426-.53929-.11578-.69164.01676-.08628.07832-.14594.18165-.17062.29554-.02806.12849-.02806.26152 0 .39.07188.29274.18147.5749.32601.83942.2727.55757.51188 1.0664.70535 1.49144.38086.85617.585 1.40766.51493 1.44574z",
					fill: "#000"
				}), s.a.createElement("path", {
					d: "m3.32259 4.185c.04265-.05027.22089.06856.50425.05637.17023-.01048.33705-.05232.49207-.1234.09475-.04162.18639-.08999.27422-.14473.08767-.05455.16761-.12065.23766-.19652.24239-.29049.364-.66295.33973-1.04051-.00975-.12051-.03484-.23928-.07465-.35343-.02743-.08836-.03809-.15235-.01371-.16454.02437-.01218.07921 0 .15234.07161.11052.10274.19152.23319.23461.37781.06054.21354.072.43801.03351.6566-.04331.27667-.16671.53459-.35496.74191-.09867.10747-.21387.1985-.34125.26965-.11202.0622-.22989.11323-.35191.15235-.21234.07339-.43982.09174-.66117.05332-.1515-.02712-.29151-.09872-.40219-.20567-.07008-.07008-.09445-.12492-.06855-.15082z",
					fill: "#000"
				}), s.a.createElement("path", {
					d: "m4.604 6.28436c.03047-.00914.0716.05637.13864.15234.03548.05467.08035.10264.13253.14168.06723.04371.1441.07037.22395.0777.05049.00737.10135.01195.15234.01371.05353.00107.10705-.00249.15996-.01067.12363-.02073.24399-.05761.35801-.10968.26973-.11881.50848-.29813.69774-.52407.18908-.22808.32585-.49485.40066-.78152.06123-.2426.09295-.49171.09445-.74191 0-.42047-.15234-.67184-.09445-.7084.02285-.01523.09141.02437.1752.13406.11597.16041.19315.34554.22546.54082.04641.28689.0428.57965-.01066.86531-.06644.35874-.2238.69444-.45703.975-.23468.28133-.54026.49486-.88512.61852-.15255.05626-.31288.08863-.47531.09598-.077.00278-.15408-.00232-.23004-.01524-.06368-.0138-.1263-.03213-.18738-.05484-.12349-.03615-.23401-.10701-.3184-.20414-.05878-.07254-.09904-.15829-.11731-.24985-.02742-.13254-.01066-.20718.01676-.2148z",
					fill: "#000"
				}), s.a.createElement("path", {
					d: "m14.8962 8.86965c.8394-1.7809.3564-5.85914-2.2502-7.58672-.6194.71264-1.0159 1.59151-1.1402 2.5275s.029 1.88788.441 2.7375",
					fill: "#ffc2dd"
				}), s.a.createElement("path", {
					d: "m11.9471 6.54651c-.0289.01371-.1264-.10816-.2575-.35953-.178-.36602-.3017-.75607-.3671-1.15781-.1063-.61415-.0898-1.24329.0487-1.85098.1786-.77188.5449-1.48774 1.0664-2.08406v-.00762c.0445-.05081.1065-.08307.1736-.090408.0672-.007334.1346.010798.189.050798l.2956.21937c.1024.07061.1991.14905.2894.23461.1902.16824.367.3511.5287.54692.0807.09902.1675.19347.2391.29707l.2103.30469c.0335.05179.07.10207.102.15234l.0884.16148.1691.32602c.099.21633.195.43113.2773.64441l.1081.32145c.0376.10373.0691.20953.0945.31687.2039.74383.2933 1.5144.2651 2.28516-.0097.52011-.106 1.03497-.2849 1.52344-.0465.13373-.1094.26116-.1874.37933-.0518.08227-.0884.11883-.1066.11121-.0183-.00761-.0183-.06246 0-.15234.0182-.08988.0563-.2209.0777-.39609.0863-.48239.117-.97311.0914-1.4625-.0309-.72382-.1548-1.44065-.3687-2.13282-.0269-.09929-.0594-.19695-.0975-.2925l-.1097-.29554c-.0807-.19653-.1737-.39153-.2681-.58957l-.163-.28946-.0823-.15234c-.0289-.04723-.0625-.09293-.0945-.14016l-.1843-.28031c-.0655-.09293-.1523-.17672-.2163-.2666-.1443-.1766-.3017-.34211-.4708-.49512-.0811-.07598-.1682-.14527-.2605-.20718l-.2589-.19957.3762-.05028c-.4697.52458-.8126 1.15003-1.0024 1.82813-.1534.54814-.2101 1.11883-.1676 1.68644.0747.97196.3382 1.52953.2575 1.56305z",
					fill: "#000"
				}), s.a.createElement("path", {
					d: "m12.4756 10.9713c.6932-.9314.556-2.20692-.3066-2.84893-.8626-.642-2.1238-.40739-2.81708.52403-.69325.93142-.55598 2.2069.30659 2.8489.86259.6421 2.12379.4074 2.81709-.524z",
					fill: "#b8e7ff"
				}), s.a.createElement("path", {
					d: "m12.6477 11.0997c-.3495.475-.8556.8112-1.429.9491-.2925.0698-.596.0806-.8927.032-.3037-.0513-.59239-.1689-.84553-.3443-.256-.1803-.47062-.4131-.62955-.6829s-.25852-.5704-.29213-.8817c-.0368-.31289-.01301-.62995.07008-.93385.16819-.60576.55597-1.12715 1.08773-1.4625.26428-.1668.558-.28159.8653-.33821.308-.05723.6247-.04811.9289.02676s.589.21377.8353.40742c.2408.1922.4364.43511.5728.71145.1316.27014.2083.56376.2254.86379.036.59244-.1401 1.17834-.4966 1.65294zm-.3458-.2575c.1408-.1938.2465-.4109.3123-.6413.0626-.22856.0807-.46699.0533-.70234-.0262-.22746-.1011-.4466-.2197-.64247-.1185-.19586-.278-.36385-.4674-.4925-.1832-.12067-.39-.20124-.6066-.23642s-.4382-.02418-.6502.03228c-.4264.11149-.80187.3653-1.06425.71939s-.39591.7872-.37845 1.22756c.00711.2192.06045.4345.15654.6316.09609.1972.23275.3718.40104.5125.17772.143.38412.2461.60512.3023.2211.0562.4516.0643.6761.0237.2336-.0413.457-.1271.6581-.2529.2016-.1291.379-.2925.5241-.4829z",
					fill: "#000"
				}), s.a.createElement("path", {
					d: "m11.734 10.3357c.3564-.72954.0761-1.59909-.6262-1.94222-.7023-.34314-1.56058-.02993-1.91701.69958-.35643.7295-.07606 1.59904.62623 1.94214.70228.3432 1.56058.03 1.91698-.6995z",
					fill: "#000"
				}), s.a.createElement("path", {
					d: "m10.6281 9.66417c.0662-.43647-.2192-.84166-.63736-.90502-.41814-.06335-.81073.23912-.87686.67559s.21923.84166.63738.90506c.41814.0633.81074-.2392.87684-.67563z",
					fill: "#fff"
				}), s.a.createElement("path", {
					d: "m11.5831 11.1074c.3374 0 .6109-.2851.6109-.6368s-.2735-.6368-.6109-.6368-.6109.2851-.6109.6368.2735.6368.6109.6368z",
					fill: "#fff"
				}), s.a.createElement("path", {
					d: "m12.8948 6.65901c-.0594-.02894.0366-.31687.1158-.78304l.0305-.18282.0228-.20109c.0214-.13711.0244-.28793.0366-.44332.0143-.33972.0097-.67997-.0137-1.01918-.0458-.61737-.1478-1.22927-.3047-1.82812-.1204-.45704-.2224-.74801-.1661-.78.0564-.032.2529.2148.4571.67793.2577.60474.4122 1.24843.457 1.90429.0235.35959.0148.72055-.0259 1.0786-.0259.16605-.0427.32449-.0807.46922l-.0503.21023-.061.19043c-.1706.48293-.3732.73277-.4174.70687z",
					fill: "#000"
				}), s.a.createElement("path", {
					d: "m1.41844 16.2901c.07617-.0472.30469.2834.83789.5652.30658.1598.63944.263.98262.3047.42089.046.8467.0098 1.25379-.1066.88359-.2438 1.57828-.7617 2.06425-1.1639.48598-.4022.7861-.6734.85008-.6201.06399.0534-.12797.4129-.56519.9141-.26033.2951-.55316.5598-.87293.7891-.40061.2889-.84865.5054-1.32387.6399-.48542.1386-.99614.1641-1.49297.0746-.40609-.0764-.78949-.2442-1.12125-.4905-.222-.1628-.40729-.3704-.54387-.6094-.08836-.1676-.10054-.2773-.06855-.2971z",
					fill: "#000"
				}), s.a.createElement("path", {
					d: "m1.2085 15.8394c.70843.486 1.55388.7323 2.4125.703s1.68528-.3328 2.3589-.8661c.23004-.2064.4744-.3963.73125-.5682.12943-.0849.27578-.1405.42889-.1632.15311-.0226.30931-.0116.45775.0322.15254.0661.2835.1737.37801.3105s.14881.2973.15672.4634c.00895.3331-.1037.658-.31688.9141-.21295.2544-.46491.4734-.74648.6489-.83941.5637-1.8525.9933-2.84426.7998-.54082-.1051-1.02984-.3884-1.50515-.6657-.21368-.1179-.41747-.2529-.60938-.4037-.3144-.2606-.5528-.6011-.69012-.9857",
					fill: "#ff85c6"
				}), s.a.createElement("path", {
					d: "m13.3224 5.51322c-.0032.29968-.0637.59597-.1782.87293-.0542.13337-.1411.25098-.2526.34202-.1116.09103-.2442.15259-.3857.179-.3321.03351-.6445-.22242-.7983-.54082-.134-.3332-.1968-.69074-.1844-1.04965-.0259-.98719.061-2.0216.4571-2.92348.1523-.35496.457-1.05422.7845-.45703.2514.45703.3596 1.10754.4479 1.62856.1099.64328.1467 1.29692.1097 1.94847z",
					fill: "#ffc2dd"
				}), s.a.createElement("path", {
					d: "m2.43311 1.8313c.4357-.66727 5.62605 6.34054 5.62605 6.34054l-.4677.41742-1.76566-.26507z",
					fill: "#fff"
				}), s.a.createElement("path", {
					d: "m15.2968 5.96724c1.0832.9293 1.5783 2.68734 1.1944 4.06296 1.4335-1.13034 1.0999 1.88 0 2.9631.2803-.1081.844.2057 1.0222.4479.163.2547.2526.5493.259.8516.0566.6477-.0536 1.2991-.3199 1.8921-.6414 1.4062-2.9829 1.4808-3.6776.972-.1356.5332-.5698.9658-1.3071 1.106.9262.5225 1.7184.4951 2.4253-.3047.8805.2544 2.3628 0 3.1337-.4875s1.2584-1.4579 1.0664-2.3522c-.1341-.6093-.55-1.1197-.7389-1.7154-.227-.7145-.1112-1.4899.0336-2.2257.1447-.7358.3168-1.4884.195-2.22879-.1219-.74039-.6201-1.47622-1.3559-1.62094.0186-.79515-.2157-1.57567-.6691-2.22917-.4533-.6535-1.1024-1.14624-1.8537-1.40728l.5515 2.145",
					fill: "#7e53c1",
					opacity: ".67"
				}), s.a.createElement("path", {
					d: "m14.8307 4.86442c.113 1.0501.0543 2.11159-.1737 3.14285-.2483 1.02375-.7724 1.69559-1.5889 2.96003-1.3666 2.1145-4.16206 4.2123-4.16206 4.2123l-.21024 1.106s3.0012-.914 3.9229-1.5539c.1995-.361.2909-1.2187.3382-1.6316.0895-.7608.3635-1.4883.7982-2.1191.3443-.4997.7298-.8927 1.0375-1.41678.4246-.75116.6314-1.60579.5972-2.46797-.0544-.8398-.2078-1.67024-.457-2.47406",
					fill: "#ffc2dd"
				}), s.a.createElement("path", {
					d: "m13.8086 14.0707c-.0274 0-.0761-.0807-.1173-.2514-.0508-.2446-.058-.4963-.0213-.7434.0512-.3631.1538-.717.3047-1.0512.1823-.399.3931-.7844.6307-1.1532.2422-.387.4677-.7511.6444-1.09233.1603-.2979.29-.61131.387-.93539.1523-.55148.1173-.9232.1858-.93387.0274 0 .0731.08227.1097.25442.0428.24545.0428.49646 0 .74191-.0594.36166-.1686.71336-.3245 1.04508-.1865.39658-.3992.78038-.6368 1.14868-.2422.3854-.457.751-.6368 1.0938-.156.299-.2801.6135-.3702.9385-.1417.5545-.0883.9262-.1554.9384z",
					fill: "#c676ff"
				}), s.a.createElement("path", {
					d: "m14.9072 14.0231c-.0564 0-.1326-.1752-.1524-.4829-.0454-.8133.2322-1.6116.7724-2.2212.2102-.2255.3824-.3199.4235-.2803.0914.0868-.3458.652-.6185 1.4579s-.3047 1.5143-.425 1.5265z",
					fill: "#c676ff"
				}), s.a.createElement("path", {
					d: "m6.19165 7.1707c-.01219-.06246.12949-.13559.32297-.2666.24618-.1607.45882-.36765.62613-.60938.15866-.24732.26783-.52308.32144-.81199.04723-.22852.05942-.38848.12036-.40067.06093-.01218.15234.13407.18738.41133.03174.3671-.06183.73413-.26546 1.04123-.20362.30709-.50528.53614-.85579.64979-.27117.07312-.44637.04266-.45703-.01371z",
					fill: "#fff"
				}), s.a.createElement("path", {
					d: "m4.43023 4.76671c0-.12035.43114-.18434.76172-.50273.33059-.3184.43571-.72821.55758-.72668.05789 0 .11731.1234.10207.33058-.03163.27398-.1599.52771-.36178.71562-.20187.18791-.46413.2977-.73966.30966-.20567 0-.32297-.07313-.31993-.12645z",
					fill: "#fff"
				}), s.a.createElement("path", {
					d: "m3.40812 2.70883c.30037 0 .54387-.2435.54387-.54387s-.2435-.54387-.54387-.54387c-.30036 0-.54386.2435-.54386.54387s.2435.54387.54386.54387z",
					fill: "#fff"
				}), s.a.createElement("path", {
					d: "m16.4716 14.2914c.0168-.0213.0915-.0076.192.0808.1373.1344.2244.3119.2468.5027.0418.2872-.0268.5795-.192.8181-.202.2785-.4875.4856-.815.5911-.5639.1875-1.1772.1593-1.7215-.0792-.4067-.1844-.585-.4037-.5515-.4464.0336-.0427.2682.0625.6521.1523.2215.0538.4484.082.6764.0838.2721.0041.543-.0376.8013-.1234.2476-.0783.4686-.2238.6383-.4204.1276-.1591.2003-.3553.2072-.5591.0152-.3641-.1782-.5515-.1341-.6003z",
					fill: "#c676ff"
				}), s.a.createElement("path", {
					d: "m12.6798 17.3567c-.0442.0365-.1813-.0305-.3199-.2255-.1735-.264-.2528-.5787-.2251-.8933.0276-.3146.1606-.6107.3774-.8404.1691-.1691.3169-.2117.3535-.1691.0365.0427-.0229.1676-.1021.3458-.2153.4435-.2582.9512-.1204 1.4245.0412.1904.0854.3138.0366.358z",
					fill: "#c676ff"
				}), s.a.createElement("path", {
					d: "m12.6432.993331c.0549.001261.1081.019339.1524.051799l.2955.21937c.1024.0706.1992.14904.2895.23461.1902.16823.3669.3511.5286.54692.0807.09902.1676.19347.2392.29707l.2102.30468c.0335.0518.0701.10207.1021.15235l.0883.16148.1311.24223c.1523.0716.3123.15234.457.23613.4808.277.916.62641 1.2903 1.03594.3946.42526.6993.9258.8958 1.47164.1365.37028.2007.76334.1889 1.15781.2065.0822.3969.20031.5622.34887.2183.19639.3963.43337.524.69773.2368.4925.3602 1.03182.3611 1.57829.0037.26323-.0198.52615-.0701.78455-.0515.2498-.1264.4941-.2239.7297-.1752.4479-.3459.8471-.3352 1.231.0236.4022.1338.7945.323 1.1502.1737.3763.3763.748.5149 1.1486.0732.1995.1243.4064.1523.617.0251.2055.0251.4131 0 .6186-.049.3813-.1782.7478-.3793 1.0755-.1265.2034-.2802.3884-.457.55-.032.032-.0625.0655-.096.0959-.2813.2401-.6047.4261-.9537.5485-.3748.1369-.7662.223-1.1639.2559-.096 0-.1935.0107-.2925.0107-.3527.0071-.703-.0598-1.0283-.1965-.2835.2425-.6235.4096-.9887.4859-.1309.0263-.2641.0396-.3976.0396-.1308 0-.2613-.0118-.39-.035-.0691-.0034-.1379-.0121-.2057-.0259-.4243-.0768-.81-.2954-1.0938-.62-.3157-.3695-.5211-.8204-.5926-1.3011-.0692-.4618-.0031-.9338.1904-1.3589-.1661.0625-.3413.1219-.5256.1737-.2925.0838-.5957.1615-.8942.2712-.15177.0544-.29985.1185-.44337.1919-.15013.0784-.29561.1654-.4357.2605-.30469.1966-.60938.4114-.9293.6323-.60606.446-1.26645.8131-1.96523 1.0923-.31459.118-.6402.2042-.97196.2574-.1751.0251-.35174.0378-.52863.0381-.11856.0001-.23704-.006-.35496-.0183-.42771-.0359-.8395-.1789-1.19742-.4159-.24527-.1736-.3382-.3168-.31535-.3427.0035-.0009.00716-.0009.01066 0-.26616-.056-.52276-.1504-.76172-.2803-.59015-.3284-1.05149-.8472-1.308629-1.4717-.285418-.6678-.341666-1.4113-.159961-2.1145.089401-.3499.231157-.6843.42047-.9918.18512-.296.41306-.5629.6764-.7922.24386-.2077.49809-.403.76172-.585.24528-.1767.47684-.3473.68707-.5286.39554-.3476.742-.7473 1.02985-1.18827.25631-.38968.48-.79987.66879-1.22637.09293-.21023.17672-.41133.25593-.60937-.11902-.16844-.22936-.34285-.33058-.52254l-.45703-.81047c-.5911-1.05574-1.11668-2.01094-1.55086-2.81684-.12458-.21556-.23059-.44134-.31688-.67488-.08052-.16829-.14184-.3451-.18281-.52711-.04675-.20918-.04675-.4261 0-.63527.05176-.237.17898-.45082.36258-.60938.19129-.15206.429-.2338.67336-.23156h.00914c.2118.00575.41978.05775.60937.15234.16882.07706.32914.17152.47836.28184.13711.10359.25746.20262.38086.30469.4875.38847.91406.74496 1.27969 1.05117.40066.34125.7084.62004.89273.81047l.41743.30773.04418.03352c.02807-.2051.06723-.40852.1173-.60938.12074-.49951.29704-.98394.52559-1.44422.04547-.10165.09632-.20082.15234-.29707l.16453-.28793c.0182-.03202.04252-.06014.07159-.08275.02907-.02262.06231-.03928.09782-.04904s.0726-.01243.10914-.00785c.03654.00457.07183.01631.10383.03453l.02743.01828c.38016.28079.7368.59209 1.0664.93082.21773.22749.42123.46813.60933.72058.3091-.0716.6226-.12249.9385-.15234.2026-.61813.5268-1.18947.9537-1.68035v-.00762c.0251-.02912.0562-.05248.0911-.06852.035-.01603.073-.024358.1115-.024409zm-7.59736 2.437499c.06405-.15644.10312-.32197.11578-.49055-.02525.16638-.06397.33044-.11578.49055zm-.73125 7.08097.03351-.0076c.02133-.0397.04114-.0808.06094-.1204l-.09293.128zm-.28793.3565c.04937-.0282.10023-.0536.15234-.0762l.02285-.0351c-.03808.0092-.07312.0183-.10664.029l-.07008.0807zm-1.00395 6.8143h-.00761zm9.62049-16.910168c-.0696-.000201-.1385.014672-.2019.043598s-.1197.07122-.1652.123981v.007617c-.4115.478212-.7312 1.028242-.943 1.622462-.2316.02742-.4571.06551-.6902.11426-.1682-.21931-.3483-.42934-.5392-.62918-.33831-.34598-.70412-.6639-1.09388-.95063l-.05027-.03199c-.05671-.03237-.11923-.05323-.18401-.06141-.06478-.00817-.13053-.00349-.1935.01377-.06296.01726-.12191.04677-.17346.08684-.05155.04006-.09469.0899-.12696.14666l-.1691.28336c-.06001.09869-.11492.20038-.16453.30469-.2348.4748-.4152.97461-.53778 1.48992-.02285.08988-.04418.18129-.06246.27726l-.16301-.12187c-.19195-.195-.49359-.4677-.8973-.80438-.36715-.30468-.79981-.66726-1.28578-1.05574l-.09598-.07617c-.08531-.08684-.18586-.15539-.28945-.23918-.15921-.11881-.33023-.22091-.51035-.30469-.22066-.10615-.46202-.162328-.70688-.164529l-.00914.216329v-.223946c-.29523-.003494-.58241.096186-.81199.281836-.21874.18764-.37103.44092-.43418.72211-.0536.24029-.0536.48944 0 .72973.04217.19688.10603.38848.19043.57128.08802.24388.19657.47984.32449.70536.44027.81808.96281 1.76414 1.55238 2.81683l.45704.81199c.0716.12493.16453.28184.27421.44333-.07464.18281-.14168.33972-.20871.48902-.18354.41537-.40112.81486-.65051 1.19437-.2769.42478-.61058.80968-.99175 1.14408-.21328.1844-.44942.358-.67184.518l-.0716.0518c-.24432.1701-.47974.3527-.70535.5469-.27965.2431-.52148.5265-.717541.8409-.201003.3259-.351499.6803-.446367 1.0512-.191573.7431-.132671 1.5287.167578 2.2349.277385.6687.77228 1.2242 1.40461 1.5768.21839.1184.45074.2089.69164.2696.09693.1355.21773.2521.35648.3443.38841.2581.83506.4151 1.2995.457.1255.0132.25161.0198.37781.0198.18655-.0002.37287-.0134.55758-.0396.34488-.0565.68324-.1473 1.01004-.2711.7161-.2867 1.39326-.6624 2.0155-1.1182l.18586-.128c.25594-.1767.49817-.3443.73887-.5012.13372-.0908.27259-.1737.4159-.2483.1356-.0694.27554-.13.41896-.1813.227-.0823.457-.1524.6871-.2118l.1934-.0548.1173-.0351c-.0901.3419-.1088.6987-.0548 1.0481.0765.5219.3 1.0113.6444 1.4107.3166.3609.7463.6037 1.2188.6886.0723.015.1456.0246.2193.029.1379.0242.2775.0364.4175.0366.1478.0002.2952-.0141.4402-.0427.3588-.0709.6965-.2231.9872-.4448.3197.1159.6578.1727.9979.1675.0959 0 .1965 0 .3047-.0106.4164-.0353.8263-.126 1.2187-.2697.375-.1317.7222-.3322 1.0238-.5911.0289-.0259.0533-.0518.0776-.0777l.0244-.0259c.1885-.174.3525-.3729.4875-.5911.2169-.3543.3565-.7504.4098-1.1623.0271-.2227.0271-.4477 0-.6704-.0266-.2257-.0777-.4479-.1523-.6627-.107-.2909-.2312-.5753-.3717-.8516-.0518-.1066-.1036-.2117-.1524-.3184-.176-.3298-.2798-.6933-.3047-1.0664-.0091-.3184.125-.6596.2819-1.0542l.0396-.099c.1028-.2484.1819-.506.2361-.7693.0531-.2709.0776-.54668.0731-.8227-.0008-.5803-.132-1.153-.3839-1.67578-.1406-.28852-.3356-.54716-.5743-.76172-.1482-.13199-.3144-.24227-.4936-.32753-.0056-.36454-.0704-.72574-.192-1.06946-.2059-.57305-.5256-1.09851-.9399-1.54476-.3892-.42647-.8419-.79028-1.3422-1.0786-.1249-.0716-.2589-.14168-.4159-.2148l-.0304-.05789-.0655-.12035-.0884-.16149c-.0228-.03808-.0472-.07465-.0716-.11121l-.0396-.06246-.2118-.31383c-.0548-.07922-.1127-.15234-.1706-.2148l-.0807-.09598c-.139-.17453-.2919-.33755-.4571-.4875l-.0807-.0777c-.0754-.07432-.1569-.14211-.2438-.20261l-.067-.05028-.2437-.176714-.0579-.042657c-.0834-.06156-.1843-.094675-.288-.094453z",
					fill: "#fff"
				}))
			}
		},
		"./src/reddit/components/Econ/Prediction/hooks/useDelayedUpvoteAnimation.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/actions/post.ts");
			const r = 3e3;

			function a(e) {
				const t = Object(o.d)();
				return {
					startDelayedUpvoteAnimation: () => setTimeout(() => t(Object(s.q)(e)), r)
				}
			}
		},
		"./src/reddit/components/Econ/Prediction/themes.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./src/config.ts");
			const s = {
				theme_1: `url(${o.a.assetPath}/img/econ/predictions/theme1.png)`,
				theme_2: `url(${o.a.assetPath}/img/econ/predictions/theme2.png)`,
				theme_3: "linear-gradient(104.49deg, #279A63 7.96%, #B6C048 119.75%)",
				theme_4: "linear-gradient(91.64deg, #F5AC1F -10.49%, #FC7519 52.61%)",
				theme_5: `url(${o.a.assetPath}/img/econ/predictions/theme5.png)`,
				theme_6: `url(${o.a.assetPath}/img/econ/predictions/theme6.png)`,
				theme_7: `url(${o.a.assetPath}/img/econ/predictions/theme7.png)`,
				theme_8: `url(${o.a.assetPath}/img/econ/predictions/theme8.png)`
			}
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				i = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				u = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				m = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				p = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				_ = n.n(p);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const h = Object(c.c)({
					currentUser: i.k,
					isNightMode: i.X,
					isPresenceUserPrefEnabled: i.P,
					shouldHideNSFW: i.C
				}),
				f = Object(a.b)(h);
			t.a = f(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: s,
					wrapperClassName: a,
					...c
				} = e, i = Object(d.a)(null == t ? void 0 : t.accountIcon);
				return r.a.createElement("div", {
					className: Object(o.a)(_.a.currentUserIconWrapper, a)
				}, i ? r.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : r.a.createElement(m.b, b({}, c, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), n && r.a.createElement(l.default, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			}));
			var o = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");
			const r = (e, t) => Object(s.a)(e, {
					method: "post",
					endpoint: `${o.a.metaUrl}/orders`,
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
				a = (e, t) => Object(s.a)(e, {
					method: "get",
					endpoint: `${o.a.metaUrl}/product-collections/${t}?types=emotes_pack`
				})
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			}));
			var o = n("./src/config.ts"),
				s = n("./src/lib/omitHeaders/index.ts"),
				r = n("./src/reddit/constants/headers.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts"),
				c = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				d = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function i(e, t) {
				return Object(a.a)(e, {
					endpoint: `${o.a.metaUrl}/communities/${t.subredditId}/me`,
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
				return Object(a.a)(e, {
					endpoint: `${o.a.metaUrl}/ps/me/braintree-client-tokens`,
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function u(e, t) {
				return Object(a.a)(e, {
					endpoint: `${o.a.metaUrl}/orders`,
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
				return Object(a.a)(Object(s.a)(e, [r.a]), {
					endpoint: `${e.apiUrl}/api/info?id=${t.join(",")}`,
					method: "get"
				}).then(e => {
					if (e.ok) {
						const t = e.body.data.children.map(({
							data: e
						}) => Object(d.a)(e)).reduce((e, t) => (e[t.id] = t, e), {});
						return {
							...e,
							body: t
						}
					}
					return e
				})
			}
			async function p(e, t) {
				const n = await Object(a.a)(e, {
					endpoint: `${o.a.metaUrl}/orders`,
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
				if (!n.ok) throw new Error(`Error fetching provisional membership: ${Object(c.b)(n.error)}`);
				return n.body
			}
		},
		"./src/reddit/endpoints/economics/subredditPremium.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/merge.js"),
				s = n.n(o),
				r = n("./src/config.ts"),
				a = n("./src/reddit/endpoints/governance/badges.ts"),
				c = n("./src/reddit/endpoints/governance/community.ts"),
				d = n("./src/reddit/endpoints/governance/products/badges.ts"),
				i = n("./src/reddit/endpoints/governance/requester.ts");
			async function l(e, t, n) {
				const o = {
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
					u = Object(c.a)(e, {
						subredditId: t
					}),
					m = Object(d.b)(e, t),
					p = Object(a.c)(e, t, n),
					[_, b, h, f] = await Promise.all([l, u, m, p]);
				if (_.ok ? o.collections = _.body : o.errors.collections = _.error, b.ok) {
					const e = b.body;
					o.subscription = e.specialMemberships, o.communityRaw = e
				}
				return h.ok ? o.products = h.body : o.errors.products = h.error, f.ok ? (s()(o.badges, f.body.badges), o.userOwnedBadges = f.body.userOwnedBadges) : o.errors.userBadges = f.error, o
			}
			const u = (e, t) => Object(i.a)(e, {
				endpoint: `${r.a.metaUrl}/products/${t}?types=badge,membership`,
				method: "delete"
			})
		},
		"./src/reddit/endpoints/governance/badges.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");
			async function r(e, t, n) {
				const r = Object(s.a)(e, {
						headers: {
							"X-HTTP-Method-Override": "GET"
						},
						method: "post",
						endpoint: `${o.a.metaUrl}/badges/${t}`,
						data: {
							selected: !0,
							users: n
						}
					}),
					a = await r;
				if (a.ok) {
					const e = {},
						t = {},
						n = a.body;
					return Object.keys(n).forEach(o => {
						const s = n[o];
						t[o] = s, e[s.userId] || (e[s.userId] = []), e[s.userId].push(s.id)
					}), {
						...a,
						body: {
							badges: t,
							usersAppliedBadges: e
						}
					}
				}
				return a
			}
			async function a(e, t, n) {
				const r = await Object(s.a)(e, {
					method: "get",
					endpoint: `${o.a.metaUrl}/badges/${t}?users=${n}`
				});
				if (r.ok) {
					const e = {},
						t = [],
						n = r.body;
					return Object.keys(n).forEach(o => {
						const s = n[o];
						e[o] = s, t.push(s.id)
					}), {
						...r,
						body: {
							badges: e,
							userOwnedBadges: t
						}
					}
				}
				return r
			}

			function c(e, t, n, r = !0) {
				return Object(s.a)(e, {
					method: "patch",
					endpoint: `${o.a.metaUrl}/badges/${t}/${n}`,
					data: {
						selected: r
					}
				})
			}
		},
		"./src/reddit/endpoints/governance/community.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./src/config.ts"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/endpoints/governance/requester.ts");

			function a(e, t) {
				return Object(r.a)(e, {
					endpoint: `${o.a.metaUrl}/communities/${t.subredditId}/me`,
					method: s.jb.GET
				})
			}
		},
		"./src/reddit/endpoints/governance/products/badges.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			}));
			var o = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");

			function r(e, t) {
				return Object(s.a)(e, {
					method: "get",
					endpoint: `${o.a.metaUrl}/products/${t}?types=badge`
				})
			}

			function a(e, t) {
				return Object(s.a)(e, {
					method: "get",
					endpoint: `${o.a.metaUrl}/products/${t}?types=badge,membership`
				})
			}

			function c(e, t) {
				return Object(s.a)(e, {
					method: "post",
					endpoint: `${o.a.metaUrl}/orders`,
					data: t
				})
			}

			function d(e, t) {
				return Object(s.a)(e, {
					method: "post",
					endpoint: `${o.a.metaUrl}/orders`,
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
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var o = n("./src/config.ts"),
				s = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				r = n("./src/reddit/endpoints/governance/requester.ts");

			function a(e, t) {
				return Object(r.a)(e, {
					endpoint: `${o.a.metaUrl}/wallets/${t.subredditId}/me`,
					method: s.jb.GET
				}).then(e => {
					if (e.ok) {
						const n = e.body,
							o = {
								[t.subredditId]: n
							};
						return {
							...e,
							body: o
						}
					}
					return e
				})
			}

			function c(e, t) {
				return Object(r.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: `${o.a.metaUrl}/wallets/${t.subredditId}`,
					method: s.jb.POST,
					data: t.userIds
				}).then(e => e.ok ? {
					...e,
					body: {
						wallets: e.body
					}
				} : e)
			}
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js");

			function s(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function r(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(s).join(" ") : o.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function a(e) {
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
			}
		},
		"./src/reddit/helpers/trackers/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "p", (function() {
				return c
			})), n.d(t, "q", (function() {
				return d
			})), n.d(t, "s", (function() {
				return i
			})), n.d(t, "n", (function() {
				return l
			})), n.d(t, "o", (function() {
				return u
			})), n.d(t, "m", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "u", (function() {
				return b
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "t", (function() {
				return f
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "h", (function() {
				return j
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "k", (function() {
				return I
			})), n.d(t, "i", (function() {
				return N
			})), n.d(t, "r", (function() {
				return x
			})), n.d(t, "f", (function() {
				return C
			}));
			var o = n("./src/reddit/models/Prediction/index.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const r = "poll",
				a = "predictions",
				c = e => ({
					...Object(s.o)(e),
					source: r,
					action: "select",
					noun: "poll_option"
				}),
				d = e => ({
					...Object(s.o)(e),
					source: r,
					action: "select",
					noun: "prediction_option"
				}),
				i = e => ({
					...Object(s.o)(e),
					source: r,
					action: "view",
					noun: "predict_option_modal"
				}),
				l = ({
					pollId: e,
					selectedNumberCoins: t,
					totalStakeAmount: n
				}) => o => ({
					...Object(s.o)(o),
					source: r,
					action: "confirm",
					noun: "predict",
					poll: Object(s.H)(o, e, !1, void 0, t),
					goldPurchase: {
						numberCoins: n
					}
				}),
				u = ({
					pollId: e,
					selectedNumberTokens: t
				}) => n => ({
					...Object(s.o)(n),
					source: r,
					action: "confirm",
					noun: "predict",
					poll: Object(s.H)(n, e, !1, void 0, void 0, t)
				}),
				m = ({
					pollId: e,
					currency: t,
					amount: n
				}) => a => {
					const c = t === o.a.Coins ? n : void 0,
						d = t === o.a.Tokens ? n : void 0;
					return {
						...Object(s.o)(a),
						source: r,
						action: "close",
						noun: "prediction_modal",
						poll: Object(s.H)(a, e, !1, c, d)
					}
				},
				p = e => ({
					...Object(s.o)(e),
					source: r,
					action: "click",
					noun: "add_coins"
				}),
				_ = ({
					targetUserId: e
				}) => t => ({
					...Object(s.o)(t),
					source: a,
					action: "click",
					noun: "leaderboard_profile",
					targetUser: {
						id: e
					}
				}),
				b = ({
					numberPredictionTokens: e,
					pollId: t
				}) => n => ({
					...Object(s.o)(n),
					source: r,
					action: "view",
					noun: "token_claim_modal",
					poll: Object(s.H)(n, t, !1, void 0, void 0, e)
				}),
				h = ({
					pageType: e
				}) => t => ({
					...Object(s.o)(t),
					source: a,
					action: "click",
					noun: "tournament",
					actionInfo: {
						pageType: e
					}
				}),
				f = () => e => ({
					...Object(s.o)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "mod_tool_predict"
					}
				}),
				E = () => e => ({
					...Object(s.o)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "end_tournament"
				}),
				g = () => e => ({
					...Object(s.o)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "rename_tournament"
				}),
				O = e => t => ({
					...Object(s.o)(t),
					source: "mod_tool_predict",
					action: "click",
					noun: "enable_predictions",
					actionInfo: {
						pageType: "predictions_picker"
					},
					setting: {
						value: e ? "1" : "0",
						oldValue: e ? "0" : "1"
					},
					subreddit: Object(s.hb)(t)
				}),
				j = () => e => ({
					...Object(s.o)(e),
					source: a,
					action: "click",
					noun: "next"
				}),
				v = () => e => ({
					...Object(s.o)(e),
					source: a,
					action: "click",
					noun: "add_more"
				}),
				I = () => e => ({
					...Object(s.o)(e),
					source: a,
					action: "click",
					noun: "start_tournament"
				}),
				N = () => e => ({
					...Object(s.o)(e),
					source: "menu_links_bar",
					action: "click",
					noun: "predictions_tab"
				}),
				x = () => e => ({
					...Object(s.o)(e),
					source: "predictions_tab",
					action: "view",
					noun: "predictions_how_it_works",
					subreddit: Object(s.hb)(e)
				}),
				C = () => e => ({
					...Object(s.o)(e),
					source: "predictions_how_it_works",
					action: "click",
					noun: "learn_more",
					subreddit: Object(s.hb)(e)
				})
		},
		"./src/reddit/hooks/useLocalStorage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var o = n("./node_modules/react/index.js"),
				s = n("./src/reddit/helpers/localStorage/index.ts");
			const r = {},
				a = (e, t, n) => (r[e] || (r[e] = {
					callbacks: [],
					value: n
				}), r[e].callbacks.push(t), {
					deregister: () => {
						const {
							callbacks: n
						} = r[e], o = n.indexOf(t);
						o > -1 && n.splice(o, 1)
					},
					emit: n => {
						r[e].value !== n && (r[e].value = n, r[e].callbacks.forEach(e => {
							e !== t && e(n)
						}))
					}
				});

			function c(e, t) {
				const n = Object(o.useRef)(null);
				let r;
				r = Object(s.B)(e);
				const [c, d] = Object(o.useState)(null != r ? r : t);
				return Object(o.useEffect)(() => (n.current = a(e, d, t), () => {
					var e;
					return null === (e = n.current) || void 0 === e ? void 0 : e.deregister()
				}), [e, t]), Object(o.useEffect)(() => {
					var e;
					null === (e = n.current) || void 0 === e || e.emit(c)
				}, [c]), [c, function(t) {
					Object(s.Db)(e, t), d(t)
				}]
			}
		},
		"./src/reddit/hooks/useToast.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var o = n("./node_modules/react/index.js"),
				s = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/reddit/models/Toast/index.ts");

			function c() {
				const e = function() {
					const e = Object(s.d)();
					return Object(o.useCallback)(t => e(Object(r.f)(t)), [e])
				}();
				return Object(o.useCallback)((t, n) => e({
					duration: 5e3,
					kind: a.b.Error,
					...n,
					text: t
				}), [e])
			}
		},
		"./src/reddit/icons/svgs/CoinV2/index.m.less": function(e, t, n) {
			e.exports = {
				shadow: "_1FZLzx9zXc2B6sAENx2Fl2",
				standardColor: "_1nJ18ao-riTqosaH0xAHuA"
			}
		},
		"./src/reddit/icons/svgs/CoinV2/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/CoinV2/index.m.less"),
				c = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				className: Object(r.a)(c.a.shadow, e.shadowClassName),
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z"
			}), s.a.createElement("path", {
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z",
				fill: "url(#shine)",
				fillOpacity: ".3"
			}), s.a.createElement("path", {
				className: Object(r.a)(c.a.standardColor, e.standardColorClassName),
				d: "M6.991 2.166C3.334 3.324 1.155 7.78 2.135 12.1c.98 4.32 4.754 6.891 8.411 5.734 3.658-1.157 5.837-5.613 4.857-9.932-.98-4.32-4.754-6.892-8.412-5.735z"
			}), s.a.createElement("path", {
				className: Object(r.a)(c.a.shadow, e.shadowClassName),
				d: "M7.54 12.335c1.122.765 2.664.277 3.311-1.047.224-.457.718-.613 1.104-.35.387.264.52.847.296 1.304-.54 1.103-1.41 1.892-2.453 2.222-1.043.33-2.13.16-3.065-.476-1.929-1.316-2.592-4.24-1.479-6.517.54-1.104 1.41-1.893 2.453-2.223 1.042-.33 2.13-.16 3.065.477.387.263.52.847.296 1.303-.223.456-.717.612-1.104.35-1.121-.765-2.663-.277-3.31 1.047-.669 1.367-.271 3.121.887 3.91z"
			}), s.a.createElement("defs", null, s.a.createElement("linearGradient", {
				id: "shine",
				x1: "11.107",
				y1: "1.889",
				x2: "11.107",
				y2: "18.111",
				gradientUnits: "userSpaceOnUse"
			}, s.a.createElement("stop", {
				offset: ".063",
				stopColor: "#fff",
				stopOpacity: "0"
			}), s.a.createElement("stop", {
				offset: ".302",
				stopColor: "#fff"
			}), s.a.createElement("stop", {
				offset: "0.432",
				stopColor: "#fff"
			}), s.a.createElement("stop", {
				offset: "0.474",
				stopColor: "#fff",
				stopOpacity: "0"
			}))))
		},
		"./src/reddit/icons/svgs/EyeDouble/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 16",
				fill: "inherit",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M10.5 3.38a4.62 4.62 0 100 9.24 4.62 4.62 0 000-9.24zm0 8A3.38 3.38 0 1113.88 8a3.39 3.39 0 01-3.38 3.38z"
			}), s.a.createElement("path", {
				d: "M20.36 7.57a10.61 10.61 0 00-19.72 0 1.16 1.16 0 000 .86 10.73 10.73 0 002.42 3.65 10.62 10.62 0 0014.44.39 10.72 10.72 0 002.84-4 1.16 1.16 0 00.02-.9zm-3.67 4a9.34 9.34 0 01-12.75-.34A9.79 9.79 0 011.8 8a9.37 9.37 0 0117.4 0 9.4 9.4 0 01-2.51 3.53v.04z"
			}))
		},
		"./src/reddit/icons/svgs/Minus/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, s.a.createElement("g", {
				transform: "translate(4, 8), scale(0.75)"
			}, s.a.createElement("path", {
				d: "M10.3785 4.86328H14.9734C15.6086 4.86328 16.1221 4.3498 16.1221 3.71456V1.41713C16.1221 0.781889 15.6086 0.268413 14.9734 0.268413H10.3785H5.78363H1.18876C0.554665 0.268413 0.0400391 0.781889 0.0400391 1.41713V3.71456C0.0400391 4.3498 0.554665 4.86328 1.18876 4.86328H5.78363H10.3785Z"
			})))
		},
		"./src/reddit/icons/svgs/MinusCircle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			const r = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16"
			}, s.a.createElement("path", {
				d: "M7.99981 15.6998C6.47689 15.6998 4.98818 15.2482 3.72192 14.4021C2.45566 13.556 1.46873 12.3535 0.885936 10.9465C0.303141 9.53948 0.150655 7.99127 0.447761 6.49761C0.744868 5.00396 1.47822 3.63195 2.55509 2.55509C3.63195 1.47822 5.00396 0.744868 6.49761 0.447761C7.99127 0.150655 9.53948 0.303141 10.9465 0.885936C12.3535 1.46873 13.556 2.45566 14.4021 3.72192C15.2482 4.98818 15.6998 6.47689 15.6998 7.99981C15.6975 10.0413 14.8855 11.9984 13.442 13.442C11.9984 14.8855 10.0413 15.6975 7.99981 15.6998ZM7.99981 1.29981C6.67467 1.29981 5.3793 1.69276 4.27749 2.42896C3.17568 3.16517 2.31692 4.21156 1.80982 5.43583C1.30271 6.66009 1.17003 8.00724 1.42855 9.30691C1.68707 10.6066 2.32518 11.8004 3.26219 12.7374C4.1992 13.6744 5.39303 14.3125 6.6927 14.5711C7.99238 14.8296 9.33952 14.6969 10.5638 14.1898C11.7881 13.6827 12.8344 12.8239 13.5707 11.7221C14.3069 10.6203 14.6998 9.32494 14.6998 7.99981C14.6979 6.22344 13.9914 4.52038 12.7353 3.2643C11.4792 2.00822 9.77617 1.30171 7.99981 1.29981Z"
			}), s.a.createElement("path", {
				d: "M11.3934 7.49981H4.60621V8.49981H11.3934V7.49981Z"
			}))
		},
		"./src/reddit/icons/svgs/Star6/index.m.less": function(e, t, n) {
			e.exports = {
				sparkle: "_39SsnAyWvt-R7vd5x-DV2p",
				fadeIn: "_2Rb9zPIVWO8_F_3QxHbRSh"
			}
		},
		"./src/reddit/icons/svgs/Undo/index.m.less": function(e, t, n) {
			e.exports = {
				undo: "_2sBykNOXv7XBQtHHHAB1JB"
			}
		},
		"./src/reddit/icons/svgs/Undo/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Undo/index.m.less"),
				c = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(c.a.undo, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M10,2.375H6.726L8.4.98,7.6.02l-3,2.5a.625.625,0,0,0,0,.96l3,2.5.8-.96L6.726,3.625H10A6.375,6.375,0,1,1,3.625,10H2.375A7.625,7.625,0,1,0,10,2.375ZM5.976,3,6,2.98v.04Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/selectors/products.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/reddit/models/Product/index.ts");
			const s = (e, t) => {
					const n = e.products.models[t];
					if (n && n.type === o.a.Badge) return n
				},
				r = (e, {
					productId: t
				}) => {
					const n = e.products.models[t];
					if (n) {
						const o = n.subredditId,
							s = Object.keys(e.user.ownedBadges[o] || {}),
							r = e.badges.models,
							a = Date.now();
						let c = !1;
						return s.forEach(e => {
							const n = r[e];
							n && n.type === t && n.endsAt > a && (c = !0)
						}), c
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/index~reddit-components-Econ-Prediction.927d7ede1271d9f9c940.js.map