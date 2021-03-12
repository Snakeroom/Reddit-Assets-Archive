// https://www.redditstatic.com/desktop2x/SubredditPremiumBadgeManagement.57d88809f8e0cb774b25.js
// Retrieved at 3/11/2021, 7:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditPremiumBadgeManagement"], {
		"./node_modules/lodash/_LazyWrapper.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_baseCreate.js"),
				n = s("./node_modules/lodash/_baseLodash.js"),
				r = 4294967295;

			function d(e) {
				this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = r, this.__views__ = []
			}
			d.prototype = a(n.prototype), d.prototype.constructor = d, e.exports = d
		},
		"./node_modules/lodash/_LodashWrapper.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_baseCreate.js"),
				n = s("./node_modules/lodash/_baseLodash.js");

			function r(e, t) {
				this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
			}
			r.prototype = a(n.prototype), r.prototype.constructor = r, e.exports = r
		},
		"./node_modules/lodash/_baseLodash.js": function(e, t) {
			e.exports = function() {}
		},
		"./node_modules/lodash/_baseSetData.js": function(e, t, s) {
			var a = s("./node_modules/lodash/identity.js"),
				n = s("./node_modules/lodash/_metaMap.js"),
				r = n ? function(e, t) {
					return n.set(e, t), e
				} : a;
			e.exports = r
		},
		"./node_modules/lodash/_composeArgs.js": function(e, t) {
			var s = Math.max;
			e.exports = function(e, t, a, n) {
				for (var r = -1, d = e.length, o = a.length, i = -1, c = t.length, l = s(d - o, 0), m = Array(c + l), u = !n; ++i < c;) m[i] = t[i];
				for (; ++r < o;)(u || r < d) && (m[a[r]] = e[r]);
				for (; l--;) m[i++] = e[r++];
				return m
			}
		},
		"./node_modules/lodash/_composeArgsRight.js": function(e, t) {
			var s = Math.max;
			e.exports = function(e, t, a, n) {
				for (var r = -1, d = e.length, o = -1, i = a.length, c = -1, l = t.length, m = s(d - i, 0), u = Array(m + l), p = !n; ++r < m;) u[r] = e[r];
				for (var b = r; ++c < l;) u[b + c] = t[c];
				for (; ++o < i;)(p || r < d) && (u[b + a[o]] = e[r++]);
				return u
			}
		},
		"./node_modules/lodash/_countHolders.js": function(e, t) {
			e.exports = function(e, t) {
				for (var s = e.length, a = 0; s--;) e[s] === t && ++a;
				return a
			}
		},
		"./node_modules/lodash/_createBind.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_createCtor.js"),
				n = s("./node_modules/lodash/_root.js"),
				r = 1;
			e.exports = function(e, t, s) {
				var d = t & r,
					o = a(e);
				return function t() {
					return (this && this !== n && this instanceof t ? o : e).apply(d ? s : this, arguments)
				}
			}
		},
		"./node_modules/lodash/_createCtor.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_baseCreate.js"),
				n = s("./node_modules/lodash/isObject.js");
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
					var s = a(e.prototype),
						r = e.apply(s, t);
					return n(r) ? r : s
				}
			}
		},
		"./node_modules/lodash/_createCurry.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_apply.js"),
				n = s("./node_modules/lodash/_createCtor.js"),
				r = s("./node_modules/lodash/_createHybrid.js"),
				d = s("./node_modules/lodash/_createRecurry.js"),
				o = s("./node_modules/lodash/_getHolder.js"),
				i = s("./node_modules/lodash/_replaceHolders.js"),
				c = s("./node_modules/lodash/_root.js");
			e.exports = function(e, t, s) {
				var l = n(e);
				return function n() {
					for (var m = arguments.length, u = Array(m), p = m, b = o(n); p--;) u[p] = arguments[p];
					var g = m < 3 && u[0] !== b && u[m - 1] !== b ? [] : i(u, b);
					return (m -= g.length) < s ? d(e, t, r, n.placeholder, void 0, u, g, void 0, void 0, s - m) : a(this && this !== c && this instanceof n ? l : e, this, u)
				}
			}
		},
		"./node_modules/lodash/_createHybrid.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_composeArgs.js"),
				n = s("./node_modules/lodash/_composeArgsRight.js"),
				r = s("./node_modules/lodash/_countHolders.js"),
				d = s("./node_modules/lodash/_createCtor.js"),
				o = s("./node_modules/lodash/_createRecurry.js"),
				i = s("./node_modules/lodash/_getHolder.js"),
				c = s("./node_modules/lodash/_reorder.js"),
				l = s("./node_modules/lodash/_replaceHolders.js"),
				m = s("./node_modules/lodash/_root.js"),
				u = 1,
				p = 2,
				b = 8,
				g = 16,
				h = 128,
				f = 512;
			e.exports = function e(t, s, _, v, y, j, x, B, E, O) {
				var w = s & h,
					C = s & u,
					S = s & p,
					k = s & (b | g),
					N = s & f,
					P = S ? void 0 : d(t);
				return function u() {
					for (var p = arguments.length, b = Array(p), g = p; g--;) b[g] = arguments[g];
					if (k) var h = i(u),
						f = r(b, h);
					if (v && (b = a(b, v, y, k)), j && (b = n(b, j, x, k)), p -= f, k && p < O) {
						var M = l(b, h);
						return o(t, s, e, u.placeholder, _, b, M, B, E, O - p)
					}
					var I = C ? _ : this,
						L = S ? I[t] : t;
					return p = b.length, B ? b = c(b, B) : N && p > 1 && b.reverse(), w && E < p && (b.length = E), this && this !== m && this instanceof u && (L = P || d(L)), L.apply(I, b)
				}
			}
		},
		"./node_modules/lodash/_createPartial.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_apply.js"),
				n = s("./node_modules/lodash/_createCtor.js"),
				r = s("./node_modules/lodash/_root.js"),
				d = 1;
			e.exports = function(e, t, s, o) {
				var i = t & d,
					c = n(e);
				return function t() {
					for (var n = -1, d = arguments.length, l = -1, m = o.length, u = Array(m + d), p = this && this !== r && this instanceof t ? c : e; ++l < m;) u[l] = o[l];
					for (; d--;) u[l++] = arguments[++n];
					return a(p, i ? s : this, u)
				}
			}
		},
		"./node_modules/lodash/_createRecurry.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_isLaziable.js"),
				n = s("./node_modules/lodash/_setData.js"),
				r = s("./node_modules/lodash/_setWrapToString.js"),
				d = 1,
				o = 2,
				i = 4,
				c = 8,
				l = 32,
				m = 64;
			e.exports = function(e, t, s, u, p, b, g, h, f, _) {
				var v = t & c;
				t |= v ? l : m, (t &= ~(v ? m : l)) & i || (t &= ~(d | o));
				var y = [e, t, p, v ? b : void 0, v ? g : void 0, v ? void 0 : b, v ? void 0 : g, h, f, _],
					j = s.apply(void 0, y);
				return a(e) && n(j, y), j.placeholder = u, r(j, e, t)
			}
		},
		"./node_modules/lodash/_createWrap.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_baseSetData.js"),
				n = s("./node_modules/lodash/_createBind.js"),
				r = s("./node_modules/lodash/_createCurry.js"),
				d = s("./node_modules/lodash/_createHybrid.js"),
				o = s("./node_modules/lodash/_createPartial.js"),
				i = s("./node_modules/lodash/_getData.js"),
				c = s("./node_modules/lodash/_mergeData.js"),
				l = s("./node_modules/lodash/_setData.js"),
				m = s("./node_modules/lodash/_setWrapToString.js"),
				u = s("./node_modules/lodash/toInteger.js"),
				p = "Expected a function",
				b = 1,
				g = 2,
				h = 8,
				f = 16,
				_ = 32,
				v = 64,
				y = Math.max;
			e.exports = function(e, t, s, j, x, B, E, O) {
				var w = t & g;
				if (!w && "function" != typeof e) throw new TypeError(p);
				var C = j ? j.length : 0;
				if (C || (t &= ~(_ | v), j = x = void 0), E = void 0 === E ? E : y(u(E), 0), O = void 0 === O ? O : u(O), C -= x ? x.length : 0, t & v) {
					var S = j,
						k = x;
					j = x = void 0
				}
				var N = w ? void 0 : i(e),
					P = [e, t, s, j, x, S, k, B, E, O];
				if (N && c(P, N), e = P[0], t = P[1], s = P[2], j = P[3], x = P[4], !(O = P[9] = void 0 === P[9] ? w ? 0 : e.length : y(P[9] - C, 0)) && t & (h | f) && (t &= ~(h | f)), t && t != b) M = t == h || t == f ? r(e, t, O) : t != _ && t != (b | _) || x.length ? d.apply(void 0, P) : o(e, t, s, j);
				else var M = n(e, t, s);
				return m((N ? a : l)(M, P), e, t)
			}
		},
		"./node_modules/lodash/_getData.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_metaMap.js"),
				n = s("./node_modules/lodash/noop.js"),
				r = a ? function(e) {
					return a.get(e)
				} : n;
			e.exports = r
		},
		"./node_modules/lodash/_getFuncName.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_realNames.js"),
				n = Object.prototype.hasOwnProperty;
			e.exports = function(e) {
				for (var t = e.name + "", s = a[t], r = n.call(a, t) ? s.length : 0; r--;) {
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
				a = /,? & /;
			e.exports = function(e) {
				var t = e.match(s);
				return t ? t[1].split(a) : []
			}
		},
		"./node_modules/lodash/_insertWrapDetails.js": function(e, t) {
			var s = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
			e.exports = function(e, t) {
				var a = t.length;
				if (!a) return e;
				var n = a - 1;
				return t[n] = (a > 1 ? "& " : "") + t[n], t = t.join(a > 2 ? ", " : " "), e.replace(s, "{\n/* [wrapped with " + t + "] */\n")
			}
		},
		"./node_modules/lodash/_isLaziable.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_LazyWrapper.js"),
				n = s("./node_modules/lodash/_getData.js"),
				r = s("./node_modules/lodash/_getFuncName.js"),
				d = s("./node_modules/lodash/wrapperLodash.js");
			e.exports = function(e) {
				var t = r(e),
					s = d[t];
				if ("function" != typeof s || !(t in a.prototype)) return !1;
				if (e === s) return !0;
				var o = n(s);
				return !!o && e === o[0]
			}
		},
		"./node_modules/lodash/_mergeData.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_composeArgs.js"),
				n = s("./node_modules/lodash/_composeArgsRight.js"),
				r = s("./node_modules/lodash/_replaceHolders.js"),
				d = "__lodash_placeholder__",
				o = 1,
				i = 2,
				c = 4,
				l = 8,
				m = 128,
				u = 256,
				p = Math.min;
			e.exports = function(e, t) {
				var s = e[1],
					b = t[1],
					g = s | b,
					h = g < (o | i | m),
					f = b == m && s == l || b == m && s == u && e[7].length <= t[8] || b == (m | u) && t[7].length <= t[8] && s == l;
				if (!h && !f) return e;
				b & o && (e[2] = t[2], g |= s & o ? 0 : c);
				var _ = t[3];
				if (_) {
					var v = e[3];
					e[3] = v ? a(v, _, t[4]) : _, e[4] = v ? r(e[3], d) : t[4]
				}
				return (_ = t[5]) && (v = e[5], e[5] = v ? n(v, _, t[6]) : _, e[6] = v ? r(e[5], d) : t[6]), (_ = t[7]) && (e[7] = _), b & m && (e[8] = null == e[8] ? t[8] : p(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = g, e
			}
		},
		"./node_modules/lodash/_metaMap.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_WeakMap.js"),
				n = a && new a;
			e.exports = n
		},
		"./node_modules/lodash/_realNames.js": function(e, t) {
			e.exports = {}
		},
		"./node_modules/lodash/_reorder.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_copyArray.js"),
				n = s("./node_modules/lodash/_isIndex.js"),
				r = Math.min;
			e.exports = function(e, t) {
				for (var s = e.length, d = r(t.length, s), o = a(e); d--;) {
					var i = t[d];
					e[d] = n(i, s) ? o[i] : void 0
				}
				return e
			}
		},
		"./node_modules/lodash/_replaceHolders.js": function(e, t) {
			var s = "__lodash_placeholder__";
			e.exports = function(e, t) {
				for (var a = -1, n = e.length, r = 0, d = []; ++a < n;) {
					var o = e[a];
					o !== t && o !== s || (e[a] = s, d[r++] = a)
				}
				return d
			}
		},
		"./node_modules/lodash/_setData.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_baseSetData.js"),
				n = s("./node_modules/lodash/_shortOut.js")(a);
			e.exports = n
		},
		"./node_modules/lodash/_setWrapToString.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_getWrapDetails.js"),
				n = s("./node_modules/lodash/_insertWrapDetails.js"),
				r = s("./node_modules/lodash/_setToString.js"),
				d = s("./node_modules/lodash/_updateWrapDetails.js");
			e.exports = function(e, t, s) {
				var o = t + "";
				return r(e, n(o, d(a(o), s)))
			}
		},
		"./node_modules/lodash/_updateWrapDetails.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_arrayEach.js"),
				n = s("./node_modules/lodash/_arrayIncludes.js"),
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
				return a(r, (function(s) {
					var a = "_." + s[0];
					t & s[1] && !n(e, a) && e.push(a)
				})), e.sort()
			}
		},
		"./node_modules/lodash/_wrapperClone.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_LazyWrapper.js"),
				n = s("./node_modules/lodash/_LodashWrapper.js"),
				r = s("./node_modules/lodash/_copyArray.js");
			e.exports = function(e) {
				if (e instanceof a) return e.clone();
				var t = new n(e.__wrapped__, e.__chain__);
				return t.__actions__ = r(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
			}
		},
		"./node_modules/lodash/curry.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_createWrap.js"),
				n = 8;

			function r(e, t, s) {
				var d = a(e, n, void 0, void 0, void 0, void 0, void 0, t = s ? void 0 : t);
				return d.placeholder = r.placeholder, d
			}
			r.placeholder = {}, e.exports = r
		},
		"./node_modules/lodash/flattenDeep.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_baseFlatten.js"),
				n = 1 / 0;
			e.exports = function(e) {
				return (null == e ? 0 : e.length) ? a(e, n) : []
			}
		},
		"./node_modules/lodash/wrapperLodash.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_LazyWrapper.js"),
				n = s("./node_modules/lodash/_LodashWrapper.js"),
				r = s("./node_modules/lodash/_baseLodash.js"),
				d = s("./node_modules/lodash/isArray.js"),
				o = s("./node_modules/lodash/isObjectLike.js"),
				i = s("./node_modules/lodash/_wrapperClone.js"),
				c = Object.prototype.hasOwnProperty;

			function l(e) {
				if (o(e) && !d(e) && !(e instanceof a)) {
					if (e instanceof n) return e;
					if (c.call(e, "__wrapped__")) return i(e)
				}
				return new n(e)
			}
			l.prototype = r.prototype, l.prototype.constructor = l, e.exports = l
		},
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var a = s("./src/lib/currency/cleanNumber/index.ts");

			function n(e, t) {
				const s = Object(a.a)(e),
					n = parseInt(s) / 100;
				return Math.floor(n) !== n || t ? n.toFixed(2) : String(n)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, s) {
			"use strict";

			function a(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
			s.d(t, "a", (function() {
				return a
			}))
		},
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return n
			}));
			const a = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				n = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
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
				return m
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "h", (function() {
				return b
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "j", (function() {
				return h
			}));
			var a = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/modal.ts"),
				r = s("./src/reddit/constants/modals.ts"),
				d = s("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const o = Object(a.a)(d.a),
				i = Object(a.a)(d.b),
				c = Object(a.a)(d.c),
				l = Object(a.a)(d.d),
				m = Object(a.a)(d.e),
				u = Object(a.a)(d.f),
				p = Object(a.a)(d.g),
				b = Object(a.a)(d.h),
				g = Object(a.a)(d.i),
				h = e => Object(n.h)(r.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return B
			})), s.d(t, "g", (function() {
				return E
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "c", (function() {
				return S
			})), s.d(t, "f", (function() {
				return k
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./node_modules/lodash/forOwn.js"),
				n = s.n(a),
				r = s("./src/reddit/actions/governance/errorToast.ts"),
				d = s("./src/reddit/endpoints/economics/emojis.ts"),
				o = s("./src/reddit/endpoints/economics/specialMembership.ts"),
				i = s("./src/reddit/endpoints/economics/subredditPremium.ts"),
				c = s("./src/reddit/endpoints/governance/badges.ts"),
				l = s("./src/config.ts"),
				m = s("./src/reddit/endpoints/governance/requester.ts");

			function u(e, t, s) {
				return Object(m.a)(e, {
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

			function x(e) {
				if (!j(e)) return e
			}
			const B = () => async (e, t, {
				apiContext: s
			}) => {
				if (!t().user.account) return;
				await e(Object(v.b)({
					includeMemberships: !0
				}));
				const a = t().economics.me.data.specialMemberships || {},
					n = Object.keys(a);
				if (n.length) {
					const t = await Object(o.e)(s(), n);
					t.ok && e(Object(y.g)(t.body))
				}
			}, E = (e, t) => async (s, a, {
				apiContext: n
			}) => {
				const r = a().user.account,
					d = a().economics.subredditPremium[e],
					o = !d || d.status !== h.a.Fetched || t;
				if (r && o) {
					const t = await Object(i.a)(n(), e, r.id);
					s(Object(y.i)(t))
				}
			}, O = e => async (t, s, {
				apiContext: a
			}) => {
				const n = s(),
					d = n.user.account,
					o = Object(f.f)(n, e.subredditId),
					i = Object.keys(o).map(e => o[e]).filter(Boolean);
				if (d && e.badge) {
					let s, n;
					s = e.placement === p.a.First ? o[b.a.Loyalty] : e.placement === p.a.Second ? o[b.a.Achievement] : o[b.a.Cosmetic], t(Object(y.a)({
						...e,
						badge: x(e.badge),
						currentAppliedBadges: i,
						userId: d.id
					})), j(e.badge) && s ? n = await Object(c.a)(a(), e.subredditId, s.id, !1) : j(e.badge) || (n = await Object(c.a)(a(), e.subredditId, e.badge.id)), n && !n.ok && (t(Object(y.a)({
						...e,
						badge: s,
						currentAppliedBadges: i,
						userId: d.id
					})), Object(r.a)(t, n.error))
				}
			}, w = (e, t) => async (s, a, {
				apiContext: n
			}) => {
				await s(E(e, !0));
				const r = a().economics.subredditPremium[e];
				if (r && r.status === h.a.Fetched) {
					const a = r.data.userOwnedBadges.find(e => e.type === t.id);
					a && (s(O({
						badge: a,
						subredditId: e,
						placement: a.placement
					})), s(Object(y.d)(b.c.MyBadges)))
				}
			}, C = e => async (t, s, {
				apiContext: a
			}) => {
				const o = s().user.account,
					i = !s().economics.emotes[e],
					c = !s().economics.gifs[e];
				if (o && (i || c)) {
					const [s, i] = await Promise.all([Object(d.b)(a(), e), u(a(), e, o.id)]);
					if (!i.ok) return void Object(r.a)(t, i.error);
					const c = {
						emotes: [],
						emoteCollections: s.ok ? s.body : {},
						giphy: []
					};
					n()(i.body, e => {
						e.type === g.a.EmotesPack ? c.emotes.push(e) : e.type === g.a.Giphy && c.giphy.push(e)
					}), t(Object(y.e)({
						subredditId: e,
						products: c
					}))
				}
			}, S = (e, t, s) => async (a, n, {
				apiContext: r
			}) => {
				if (await a(E(e, !0)), s && t) {
					const s = n(),
						r = Object(f.f)(s, e),
						d = Object(_.a)(s, t);
					if (!r[Object(b.d)(d.placement)] && d) {
						const t = Object(f.l)(s, {
							subredditId: e,
							badge: d
						});
						t && await a(O({
							badge: t,
							subredditId: e
						}))
					}
					a(Object(y.c)({
						subredditId: e,
						initialView: b.c.MyBadges
					}))
				}
			}, k = e => async (t, s, {
				apiContext: a
			}) => {
				const {
					wallet: n
				} = await Object(o.c)(a(), e);
				t(Object(y.f)({
					wallet: n
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
				return O
			})), s.d(t, "c", (function() {
				return P
			})), s.d(t, "a", (function() {
				return M
			}));
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				o = s("./src/config.ts"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/higherOrderComponents/makeAsync.tsx");
			var u = Object(m.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("SubredditPremiumBadgeHovercardTooltip").then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
				}),
				p = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = s("./src/reddit/featureFlags/index.ts"),
				g = s("./src/reddit/helpers/economics/sortBadges.ts"),
				h = s("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				f = s("./src/reddit/models/Badge/index.ts");
			var _ = Object(m.a)({
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
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			const x = "add-custom-badge-tooltip",
				B = 100,
				E = 2 * B;
			class O extends n.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, B)), this.mouseOverTooltip = e
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
					if (this.props.usePlaceholder && !e.length) return n.a.createElement("img", {
						className: Object(i.a)(y.a.image, this.props.className),
						src: `${o.a.assetPath}/img/badges/placeholder.png`
					});
					const t = `${x}-${this.props.uniqueIdentifier}`;
					return n.a.createElement(a.Fragment, null, this.props.showAddCustom && n.a.createElement("div", {
						className: y.a.wrapper,
						id: t,
						onMouseEnter: () => this.handleMouseEnter(t),
						onMouseLeave: () => this.handleMouseLeave()
					}, n.a.createElement("button", {
						className: y.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, n.a.createElement(h.a, {
						className: y.a.addCustom
					})), n.a.createElement(_, {
						className: y.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: t,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(g.a)(e).map(e => {
						const t = Object(f.d)(24, 24, e),
							s = `badges-display-${e.id}-${this.props.uniqueIdentifier}`;
						return n.a.createElement(a.Fragment, {
							key: `badges-fragement-${e.id}`
						}, n.a.createElement("div", {
							className: Object(i.a)(y.a.wrapper, this.props.className),
							key: `wrapper-${e.id}`,
							onMouseEnter: () => this.handleMouseEnter(s),
							onMouseLeave: () => this.handleMouseLeave()
						}, n.a.createElement("img", {
							className: y.a.image,
							id: s,
							key: e.id,
							src: t.url2x,
							srcSet: `${t.url}, ${t.url2x} 2x`
						}), this.props.useHovercard ? n.a.createElement(u, {
							badge: e,
							correlationId: this.props.correlationId,
							className: y.a.badgeHovercard,
							key: `tooltip-${e.id}`,
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: s,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : n.a.createElement(p.c, {
							caretOnTop: !0,
							key: `tooltip-${e.id}`,
							tooltipId: s,
							text: e.title
						})))
					}))
				}
			}
			const w = [],
				C = Object(d.c)({
					badgeIds: (e, {
						subredditId: t,
						userId: s
					}) => {
						var a;
						return (null === (a = e.users.appliedBadges[s]) || void 0 === a ? void 0 : a[t]) || w
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				S = Object(d.c)({
					badgeIds: (e, {
						subredditId: t
					}) => {
						var s;
						const a = e.user.account;
						return a && (null === (s = e.users.appliedBadges[a.id]) || void 0 === s ? void 0 : s[t]) || w
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				k = e => ({
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onOpenUploadDialog: () => e(Object(c.j)())
				});

			function N(e) {
				const {
					badgeIds: t,
					allBadges: s,
					...a
				} = e, r = t.map(e => s[e]).filter(Boolean);
				return n.a.createElement(O, j({
					badges: r
				}, a))
			}
			const P = Object(r.b)(C, k)(N),
				M = Object(r.b)(S, k)(N)
		},
		"./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			const {
				fbt: r
			} = s("./node_modules/fbt/lib/FbtPublic.js");

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
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				d = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				c = s("./src/reddit/models/Badge/index.ts"),
				l = s("./src/reddit/models/Badge/managementPage.ts"),
				m = s("./src/reddit/selectors/crypto/wallet.ts"),
				u = s("./src/reddit/selectors/economics.ts"),
				p = s("./node_modules/reselect/es/index.js"),
				b = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.m.less"),
				g = s.n(b);
			const h = Object(p.c)({
				collection: (e, {
					badge: t,
					subredditId: s
				}) => {
					if (t.collections) {
						const a = Object.keys(t.collections);
						if (a.length) {
							const t = a[0];
							return Object(u.h)(e, {
								collectionId: t,
								subredditId: s
							})
						}
					}
				},
				progress: (e, {
					badge: t,
					subredditId: s,
					type: a
				}) => {
					if (!Object(c.e)(t) && a === l.a.Achievement && i.a[t.id]) {
						const a = Object(m.a)(e, {
							subredditId: s
						});
						if (a) return {
							complete: parseInt(a.amount),
							total: i.a[t.id]
						}
					}
				}
			});
			t.a = Object(d.b)(h)((function(e) {
				const t = e.type === l.a.Loyalty ? a.fbt._("Loyalty Badge", null, {
						hk: "3C1yVX"
					}) : e.type === l.a.Achievement ? a.fbt._("Achievement Badge", null, {
						hk: "3ZCLHl"
					}) : a.fbt._("Style Badge", null, {
						hk: "1heMgq"
					}),
					s = e.collection ? e.collection.title : t,
					{
						url: n,
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
					srcSet: `${n}, ${d} 2x`
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
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/actions/governance/errorToast.ts"),
				i = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/contexts/ApiContext.tsx"),
				l = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				m = s("./src/reddit/endpoints/governance/products/badges.ts"),
				u = s("./src/reddit/helpers/economics/setupSubredditPremiumButton.ts"),
				p = s("./src/reddit/selectors/telemetry.ts"),
				b = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.m.less"),
				g = s.n(b);
			const h = "subreddit-premium-purchase-braintree";
			class f extends n.a.Component {
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
							purchaseFn: s => Object(m.d)(e, {
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
									...p.defaults(e),
									subreddit: p.subreddit(e)
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
			t.a = Object(c.b)(Object(r.b)(void 0, (e, {
				subreddit: t
			}) => ({
				onError: t => Object(o.a)(e, t)
			}))(Object(i.c)(f)))
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
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				o = s("./src/higherOrderComponents/asModal/index.tsx"),
				i = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/featureFlags/component.tsx"),
				l = s("./src/reddit/models/Badge/index.ts"),
				m = s("./src/reddit/models/Badge/managementPage.ts"),
				u = s("./src/reddit/reducers/economics/subredditPremium/index.ts"),
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
				return n.a.createElement("div", {
					className: Object(b.a)(e.className, v.a.container, {
						[v.a.applied]: !!e.applied,
						[v.a.selected]: !!e.selected,
						[v.a.selectable]: !!e.onSelect
					}),
					onClick: e.onSelect
				}, e.applied && n.a.createElement(h.a, {
					className: v.a.checkmark
				}), e.locked && n.a.createElement(f.a, {
					className: v.a.lock
				}), n.a.createElement("img", {
					className: v.a.image,
					src: s,
					srcSet: `${t}, ${s} 2x`
				}))
			}
			var j = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/BadgeGroup/index.m.less"),
				x = s.n(j);

			function B(e) {
				const {
					children: t,
					className: s,
					description: a,
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
				return n.a.createElement("div", {
					className: Object(b.a)(s, x.a.container)
				}, n.a.createElement("div", {
					className: x.a.centerContent
				}, o && n.a.createElement("header", {
					className: x.a.title,
					style: {
						color: r
					}
				}, o), a && n.a.createElement("div", {
					className: x.a.description
				}, a), n.a.createElement("article", {
					className: x.a.grid
				}, i.map((e, t) => n.a.createElement("div", {
					className: Object(b.a)(x.a.row),
					key: `${o}-${t}`
				}, e.map((e, s) => n.a.createElement("div", {
					className: Object(b.a)(x.a.item, x.a.itemBottom),
					key: `${o}-${t}-${s}`
				}, e)))))))
			}
			var E = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/ScrollableArea/index.m.less"),
				O = s.n(E);

			function w(e) {
				return n.a.createElement("div", {
					className: Object(b.a)(e.className, O.a.container)
				}, n.a.createElement("div", {
					className: O.a.scrollableContent
				}, e.children), n.a.createElement("div", {
					className: O.a.topGradient
				}), n.a.createElement("div", {
					className: O.a.bottomGradient
				}))
			}
			var C = s("./src/reddit/contexts/ApiContext.tsx"),
				S = s("./src/config.ts"),
				k = s("./src/reddit/endpoints/governance/requester.ts");
			async function N(e, t, s, a) {
				return Object(k.a)(e, {
					endpoint: `${S.a.metaUrl}/storage/${t}/me/${s}`,
					method: "patch",
					data: {
						on: a
					}
				}).then(e => !!e.ok)
			}
			async function P(e, t, s, a) {
				return Object(k.a)(e, {
					endpoint: `${S.a.metaUrl}/storage/${t}/me/${s}`,
					method: "get"
				}).then(e => e.ok ? Boolean(e.body && e.body.on) : a)
			}
			var M = s("./src/reddit/icons/svgs/Close/index.tsx"),
				I = s("./src/reddit/icons/svgs/Info/index.tsx"),
				L = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/SectionHead/index.m.less"),
				A = s.n(L),
				T = Object(C.b)(class extends n.a.Component {
					constructor(e) {
						super(e), this.closeDescription = () => {
							this.setState(e => ({
								...e,
								descriptionOpen: !1
							})), ((e, t, s) => N(e, t, s, !0))(this.props.apiContext(), this.props.subredditId, this.props.sectionName)
						}, this.openDescription = () => this.setState(e => ({
							...e,
							descriptionOpen: !0
						})), this.state = {
							descriptionOpen: !1
						}
					}
					componentDidMount() {
						((e, t, s) => P(e, t, s, !1))(this.props.apiContext(), this.props.subredditId, this.props.sectionName).then(e => this.setState({
							descriptionOpen: !e
						}))
					}
					render() {
						return n.a.createElement("div", {
							className: this.props.className
						}, n.a.createElement("header", {
							className: A.a.title
						}, this.props.title, n.a.createElement(I.a, {
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
						})), n.a.createElement(M.a, {
							className: A.a.close,
							onClick: this.closeDescription
						})), n.a.createElement("div", {
							className: A.a.descriptionText
						}, this.props.info)))
					}
				}),
				D = s("./src/reddit/icons/svgs/EyeCancel/index.tsx"),
				H = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/HideBadge/index.m.less"),
				F = s.n(H);
			const R = {
				id: "removeBadge",
				type: "removeBadge"
			};

			function U(e) {
				const {
					badgeType: t,
					className: s
				} = e, {
					description: a,
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
					className: Object(b.a)(s, F.a.container)
				}, n.a.createElement("div", {
					className: F.a.centerContent
				}, n.a.createElement("header", {
					className: F.a.title
				}, r), n.a.createElement("div", {
					className: F.a.description
				}, a), n.a.createElement("article", {
					className: F.a.grid
				}, n.a.createElement("div", {
					className: F.a.row
				}, n.a.createElement("div", {
					className: F.a.item
				}, n.a.createElement("div", {
					className: Object(b.a)(F.a.hide, {
						[F.a.applied]: !!e.applied,
						[F.a.selected]: !!e.selected
					}),
					onClick: () => e.onSelect({
						badgeType: t,
						...R
					})
				}, e.applied && n.a.createElement(h.a, {
					className: F.a.checkmark
				}), n.a.createElement(D.a, {
					className: F.a.hideIcon
				})))))))
			}
			var G = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/AchievementBadge/index.m.less"),
				W = s.n(G);
			const V = Object(d.c)({
				collections: (e, {
					subredditId: t
				}) => Object(p.n)(e, t, m.a.Achievement)
			});
			var q = Object(r.b)(V)((function(e) {
					return n.a.createElement("div", {
						className: Object(b.a)(W.a.container, e.className)
					}, n.a.createElement(w, null, n.a.createElement(T, {
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
					}, e.collections.map(t => n.a.createElement(B, {
						className: W.a.badgeGroup,
						description: t.description,
						highlight: t.highlight,
						key: t.title,
						title: t.title
					}, t.unlocked.map((t, s) => n.a.createElement("div", {
						className: W.a.badge,
						key: t.id + s
					}, n.a.createElement(y, {
						applied: e.appliedBadge && e.appliedBadge.id === t.id,
						model: t,
						selected: e.selectedBadge && e.selectedBadge.id === t.id,
						onSelect: () => e.onSelectBadge(t)
					}))).concat(t.locked.map(t => n.a.createElement("div", {
						className: W.a.badge,
						key: t.id
					}, n.a.createElement(y, {
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
				$ = s("./node_modules/lodash/curry.js"),
				z = s.n($),
				K = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				Y = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/BadgeTypeSelector/Tab/index.m.less"),
				Q = s.n(Y);

			function X(e) {
				const t = n.a.Children.only(e.children);
				return n.a.createElement("button", {
					className: Object(b.a)(Q.a.container, e.className, {
						[Q.a.disabled]: !!e.locked,
						[Q.a.containerSelected]: !!e.selected
					}),
					onClick: e.locked ? void 0 : e.onSelect
				}, n.a.cloneElement(t, {
					className: Object(b.a)(t.props.className, Q.a.inner, {
						[Q.a.selected]: !!e.selected,
						[Q.a.unselected]: !e.selected
					})
				}), e.locked && n.a.createElement("div", {
					className: Q.a.lockContainer
				}, n.a.createElement(f.a, {
					className: Q.a.lock
				})))
			}
			var J = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/BadgeTypeSelector/index.m.less"),
				Z = s.n(J);
			const ee = z()((e, t, s) => `${S.a.assetPath}/img/memberships/badges/management/tabs/${e}/${t}-${s?"on":"off"}-v2.png`),
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
			const se = Object(d.c)({
				currentBadgeType: e => e.economics.currentBadgeManagementScreen.badgeType,
				hasAchievementBadges: (e, {
					subredditId: t
				}) => {
					const s = Object(p.n)(e, t, m.a.Achievement);
					for (const a of s)
						if (a.locked.length || a.unlocked.length) return !0;
					return !1
				}
			});
			var ae = Object(r.b)(se, e => ({
					onChangeBadgeType: t => e(Object(K.b)(t))
				}))((function(e) {
					const {
						hasAchievementBadges: t
					} = e, s = ee(e.subredditId), a = te.filter(e => e.type !== m.a.Achievement || t);
					return n.a.createElement("nav", {
						className: Object(b.a)(Z.a.container, e.className)
					}, a.map((t, a) => n.a.createElement(n.a.Fragment, {
						key: `${t.type}`
					}, n.a.createElement(X, {
						className: Z.a.tab,
						selected: e.currentBadgeType === t.type,
						onSelect: () => e.onChangeBadgeType(t.type)
					}, n.a.createElement("div", {
						className: Z.a.tabContent
					}, n.a.createElement("img", {
						className: Z.a.img,
						src: s(t.type, e.currentBadgeType === t.type)
					}), n.a.createElement("div", {
						className: Z.a.tabText
					}, t.text()))))))
				})),
				ne = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/Gallery/index.m.less"),
				re = s.n(ne);
			const de = Object(d.c)({
				collections: (e, {
					subredditId: t
				}) => Object(p.n)(e, t, m.a.Cosmetic, m.c.Gallery)
			});
			var oe = Object(r.b)(de)((function(e) {
					return n.a.createElement("div", {
						className: Object(b.a)(re.a.container, e.className)
					}, n.a.createElement(w, null, n.a.createElement("div", {
						className: re.a.badges
					}, e.collections.map(t => n.a.createElement(B, {
						className: re.a.badgeGroup,
						description: t.description,
						highlight: t.highlight,
						key: t.title,
						title: t.title
					}, t.locked.filter(e => Object(l.f)(e) || !!e.price).map(t => n.a.createElement("div", {
						className: re.a.badge,
						key: t.id
					}, n.a.createElement(y, {
						model: t,
						selected: e.selectedBadge && e.selectedBadge.id === t.id,
						onSelect: () => e.onSelectBadge(t)
					}))))))))
				})),
				ie = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/LoyaltyBadge/index.m.less"),
				ce = s.n(ie);
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
						className: Object(b.a)(ce.a.container, e.className)
					}, n.a.createElement(w, null, n.a.createElement(T, {
						className: ce.a.header,
						info: g.fbt._("The Loyalty Badge shows how long you've been a {memberAlt} in the subreddit. The longer you remain a member, the more Loyalty Badges you unlock", [g.fbt._param("memberAlt", e.meta.memberAlt)], {
							hk: "2jAQmP"
						}),
						sectionName: "loyalty_badge",
						subredditId: e.subredditId,
						title: g.fbt._("Loyalty Badges", null, {
							hk: "L1pPB"
						})
					}), n.a.createElement("div", {
						className: ce.a.badges
					}, e.collections.map(t => n.a.createElement(B, {
						className: ce.a.badgeGroup,
						highlight: t.highlight,
						key: t.title
					}, t.unlocked.map((t, s) => n.a.createElement("div", {
						className: ce.a.badge,
						key: t.id + s
					}, n.a.createElement(y, {
						applied: e.appliedBadge && e.appliedBadge.id === t.id,
						model: t,
						selected: e.selectedBadge && e.selectedBadge.id === t.id,
						onSelect: () => e.onSelectBadge(t)
					}))).concat(t.locked.map(t => n.a.createElement("div", {
						className: ce.a.badge,
						key: t.id
					}, n.a.createElement(y, {
						locked: !0,
						model: t,
						selected: e.selectedBadge && e.selectedBadge.id === t.id,
						onSelect: () => e.onSelectBadge(t)
					})))))), n.a.createElement(U, {
						applied: !e.appliedBadge,
						className: ce.a.badgeGroup,
						badgeType: m.a.Loyalty,
						selected: e.selectedBadge && "removeBadge" === e.selectedBadge.type,
						onSelect: e.onSelectBadge
					}))))
				})),
				ue = s("./src/lib/constants/specialMembership.ts"),
				pe = s("./src/reddit/featureFlags/index.ts"),
				be = s("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				ge = s("./src/reddit/actions/modal.ts"),
				he = s("./src/reddit/components/TrackingHelper/index.tsx"),
				fe = s("./src/reddit/controls/Button/index.tsx"),
				_e = s("./src/reddit/helpers/economics/membershipPage.ts"),
				ve = s("./src/reddit/selectors/telemetry.ts"),
				ye = s("./node_modules/uuid/v4.js"),
				je = s.n(ye),
				xe = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/MyBadges/NoBadges/index.m.less"),
				Be = s.n(xe);
			const Ee = Object(d.c)({
				meta: (e, {
					subredditId: t
				}) => Object(p.r)(e, t),
				subreddit: (e, {
					subredditId: t
				}) => e.subreddits.models[t]
			});
			var Oe = Object(he.c)(Object(r.b)(Ee, (e, {
					badge: t,
					subredditId: s
				}) => ({
					onCloseModal: () => e(Object(ge.f)())
				}))((function(e) {
					const t = `${S.a.assetPath}/img/memberships/badges/management/myBadges/${e.subredditId}/noBadges.png`,
						s = je()(),
						a = e.subreddit ? e.subreddit.name : "";
					return n.a.createElement("div", {
						className: Object(b.a)(Be.a.container, e.className)
					}, n.a.createElement("img", {
						className: Be.a.img,
						src: t
					}), n.a.createElement("div", {
						className: Be.a.title
					}, g.fbt._("You Don't Have Any Style Badges Yet", null, {
						hk: "13yxIM"
					})), n.a.createElement("div", {
						className: Be.a.text
					}, g.fbt._("Get a {membershipAlt} and receive new style badges every month. You can also buy badges individually from the Gallery.", [g.fbt._param("membershipAlt", e.meta.membershipAlt)], {
						hk: "1JWnXS"
					})), n.a.createElement(fe.k, {
						className: Be.a.learnMore,
						disabled: !e.subreddit,
						to: Object(_e.a)(a, s),
						onClick: t => {
							t.stopPropagation(), e.sendEvent(e => ({
								correlationId: s,
								source: "meta",
								action: "click",
								noun: "subscription_myBadges_open_learn_more",
								...ve.defaults(e),
								subreddit: ve.subreddit(e)
							})), e.onCloseModal()
						}
					}, g.fbt._("Learn More", null, {
						hk: "4ptmhd"
					})))
				}))),
				we = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/MyBadges/index.m.less"),
				Ce = s.n(we);
			const Se = Object(d.c)({
				collections: (e, {
					subredditId: t
				}) => Object(p.n)(e, t, m.a.Cosmetic, m.c.MyBadges),
				customBadgesEnabled: pe.d.spCustomBadgesAndEmotes
			});
			var ke = Object(r.b)(Se, e => ({
					onOpenUploadDialog: () => e(Object(K.j)())
				}))((function(e) {
					return n.a.createElement("div", {
						className: Object(b.a)(Ce.a.container, e.className)
					}, n.a.createElement(w, null, e.collections.length ? n.a.createElement("div", {
						className: Ce.a.badges
					}, e.collections.map(t => n.a.createElement(B, {
						className: Ce.a.badgeGroup,
						description: t.description,
						highlight: t.highlight,
						key: t.title,
						title: t.title
					}, t.unlocked.map((t, s) => n.a.createElement("div", {
						className: Ce.a.badge,
						key: t.id + s
					}, n.a.createElement(y, {
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
					})) : n.a.createElement(Oe, {
						className: Ce.a.noBadges,
						subredditId: e.subredditId
					})))
				})),
				Ne = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/ViewTypeSelector/Tab/index.m.less"),
				Pe = s.n(Ne);
			const Me = Object(d.c)({
				isSelected: (e, {
					viewType: t
				}) => e.economics.currentBadgeManagementScreen.view === t
			});
			var Ie = Object(r.b)(Me, (e, {
					viewType: t
				}) => ({
					onSelect: () => e(Object(K.d)(t))
				}))((function(e) {
					return n.a.createElement("button", {
						className: Object(b.a)(e.className, Pe.a.container, {
							[Pe.a.selected]: e.isSelected
						}),
						onClick: e.onSelect
					}, e.children)
				})),
				Le = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/ViewTypeSelector/index.m.less"),
				Ae = s.n(Le);

			function Te(e) {
				return n.a.createElement("nav", {
					className: Object(b.a)(e.className, Ae.a.container)
				}, n.a.createElement(Ie, {
					className: Ae.a.tab,
					viewType: m.c.Gallery
				}, g.fbt._("Gallery", null, {
					hk: "40A6Dd"
				})), n.a.createElement(Ie, {
					className: Ae.a.tab,
					viewType: m.c.MyBadges
				}, g.fbt._("My Badges", null, {
					hk: "2OwjDY"
				})))
			}
			var De = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/LeftRail/index.m.less"),
				He = s.n(De);
			const Fe = Object(d.c)({
				badgeType: e => e.economics.currentBadgeManagementScreen.badgeType,
				hasGalleryBadges: (e, {
					subredditId: t
				}) => Object(p.j)(e, t),
				view: e => e.economics.currentBadgeManagementScreen.view
			});
			var Re = Object(r.b)(Fe)((function(e) {
					const t = Object(b.a)(He.a.contentWrapper, {
						[He.a.withView]: e.badgeType === m.a.Cosmetic,
						[He.a.withoutView]: e.badgeType !== m.a.Cosmetic
					});
					return n.a.createElement("div", {
						className: Object(b.a)(e.className, He.a.container)
					}, n.a.createElement(ae, {
						className: He.a.nav,
						subredditId: e.subredditId
					}), e.badgeType === m.a.Cosmetic && e.hasGalleryBadges && n.a.createElement(Te, {
						className: He.a.viewSelector
					}), e.badgeType === m.a.Loyalty && n.a.createElement(me, {
						appliedBadge: e.appliedBadges[m.a.Loyalty],
						className: t,
						selectedBadge: e.selectedBadges[m.a.Loyalty],
						subredditId: e.subredditId,
						onSelectBadge: t => e.onSelectBadge(m.a.Loyalty, t)
					}), e.badgeType === m.a.Achievement && n.a.createElement(q, {
						appliedBadge: e.appliedBadges[m.a.Achievement],
						className: t,
						selectedBadge: e.selectedBadges[m.a.Achievement],
						subredditId: e.subredditId,
						onSelectBadge: t => e.onSelectBadge(m.a.Achievement, t)
					}), e.badgeType === m.a.Cosmetic && e.view === m.c.MyBadges && n.a.createElement(ke, {
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
				Ue = s("./node_modules/react-motion/lib/react-motion.js"),
				Ge = s("./src/reddit/helpers/economics/sortBadges.ts"),
				We = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				Ve = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				qe = s("./src/reddit/icons/svgs/Twinkle/index.tsx"),
				$e = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserPreview/index.tsx"),
				ze = s("./node_modules/lodash/last.js"),
				Ke = s.n(ze),
				Ye = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				Qe = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.tsx"),
				Xe = s("./src/lib/currency/centsToDollars/index.ts"),
				Je = s("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				Ze = s("./src/reddit/actions/toaster.ts"),
				et = s("./src/reddit/models/Toast/index.ts"),
				tt = s("./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx"),
				st = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/Legal/index.m.less"),
				at = s.n(st);
			const {
				fbt: nt
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function rt(e) {
				return n.a.createElement("div", {
					className: Object(b.a)(e.className, at.a.container)
				}, nt._("By purchasing, you agree to the {=Reddit User Agreement} and {previewsUserAgreement}.", [nt._param("=Reddit User Agreement", n.a.createElement("a", {
					className: at.a.link,
					href: "https://www.redditinc.com/policies/user-agreement",
					target: "_blank",
					rel: "noopener noreferrer"
				}, nt._("Reddit User Agreement", null, {
					hk: "49nG3E"
				}))), nt._param("previewsUserAgreement", n.a.createElement(tt.a, {
					className: at.a.link
				}))], {
					hk: "e28UM"
				}))
			}
			var dt = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.tsx"),
				ot = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/index.m.less"),
				it = s.n(ot);
			const ct = Object(d.c)({
				meta: (e, {
					subredditId: t
				}) => Object(p.r)(e, t),
				ownedBadge: p.l,
				subreddit: (e, {
					subredditId: t
				}) => e.subreddits.models[t]
			});
			var lt = Object(he.c)(Object(r.b)(ct, (e, {
					badge: t,
					subredditId: s
				}) => ({
					onApply: () => e(Object(Je.b)({
						badge: t,
						subredditId: s,
						placement: t.placement
					})),
					onCloseModal: () => e(Object(ge.f)()),
					onPurchased: () => {
						e(Object(Ze.f)({
							kind: et.b.SuccessCommunityGreen,
							text: g.fbt._("Congratulations! You've bought a badge!", null, {
								hk: "3smVrt"
							})
						})), e(Object(Je.d)(s, t))
					}
				}))((function(e) {
					const t = e.subreddit ? e.subreddit.name : "",
						s = je()();
					return n.a.createElement("footer", {
						className: Object(b.a)(e.className, it.a.container)
					}, n.a.createElement("div", {
						className: it.a.wrapper
					}, n.a.createElement("div", {
						className: it.a.description
					}, !Object(l.e)(e.badge) && !e.ownedBadge && e.badge.price && !Object(l.f)(e.badge) && n.a.createElement("div", {
						className: it.a.price
					}, g.fbt._("Buy for ${price}", [g.fbt._param("price", Object(Xe.a)(e.badge.price, !0))], {
						hk: "JLs1D"
					})), !Object(l.e)(e.badge) && !e.ownedBadge && Object(l.f)(e.badge) && n.a.createElement("div", {
						className: it.a.price
					}, g.fbt._("Get monthly reward badges by purchasing a {membershipAlt}!", [g.fbt._param("membershipAlt", e.meta.membershipAlt)], {
						hk: "19iqHa"
					}))), e.ownedBadge && n.a.createElement(fe.i, {
						className: it.a.button,
						disabled: e.alreadyApplied,
						onClick: e.onApply
					}, e.alreadyApplied ? g.fbt._("Applied", null, {
						hk: "3zELtm"
					}) : g.fbt._("Apply", null, {
						hk: "19U1iU"
					})), !Object(l.e)(e.badge) && !e.ownedBadge && Object(l.f)(e.badge) && n.a.createElement(fe.k, {
						className: it.a.button,
						disabled: !e.subreddit,
						to: Object(_e.a)(t, s),
						onClick: t => {
							t.stopPropagation(), e.sendEvent(e => ({
								correlationId: s,
								source: "meta",
								action: "click",
								noun: "subscription_gallery_open_learn_more",
								...ve.defaults(e),
								subreddit: ve.subreddit(e)
							})), e.onCloseModal()
						}
					}, g.fbt._("Learn More", null, {
						hk: "4ptmhd"
					})), !Object(l.e)(e.badge) && !e.ownedBadge && e.badge.price && !Object(l.f)(e.badge) && n.a.createElement(dt.a, {
						className: it.a.purchaseButton,
						correlationId: s,
						price: e.badge.price,
						productId: e.badge.id,
						subreddit: e.subreddit,
						onPaymentSuccessful: e.onPurchased
					})), !Object(l.e)(e.badge) && !e.ownedBadge && e.badge.price && n.a.createElement(rt, {
						className: it.a.legal
					}))
				}))),
				mt = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Hide/index.m.less"),
				ut = s.n(mt);
			var pt = Object(r.b)(void 0, (e, {
					badge: t,
					subredditId: s
				}) => ({
					onApply: () => e(Object(Je.b)({
						badge: t,
						subredditId: s,
						placement: m.b[t.badgeType]
					}))
				}))((function(e) {
					return n.a.createElement("div", {
						className: Object(b.a)(e.className, ut.a.container)
					}, e.alreadyApplied ? n.a.createElement("div", {
						className: ut.a.text
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
					}(e.badge)) : n.a.createElement(a.Fragment, null, n.a.createElement("div", {
						className: ut.a.text
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
					}(e.badge)), n.a.createElement(fe.i, {
						className: ut.a.hide,
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
				alreadyApplied: (e, {
					badge: t,
					subredditId: s,
					type: a
				}) => {
					const n = Object(p.f)(e, s)[a];
					return n ? n.id === t.id : "removeBadge" === t.type
				},
				lastUnlockedLoyaltyBadge: (e, {
					subredditId: t
				}) => {
					const s = Object(p.n)(e, t, m.a.Loyalty)[0];
					if (s) return Ke()(s.unlocked)
				}
			});
			var _t = Object(r.b)(ft)((function(e) {
					return ht(e.badge) ? n.a.createElement("div", {
						className: Object(b.a)(e.className, gt.a.container)
					}, n.a.createElement(pt, {
						alreadyApplied: e.alreadyApplied,
						className: gt.a.hide,
						badge: e.badge,
						subredditId: e.subredditId
					})) : n.a.createElement("div", {
						className: Object(b.a)(e.className, gt.a.container)
					}, n.a.createElement(Qe.a, {
						badge: e.badge,
						className: gt.a.content,
						subredditId: e.subredditId,
						type: e.type
					}, n.a.createElement(Ye.a, {
						className: gt.a.dismiss,
						onClick: e.onDeselect
					})), function(e) {
						return e.type === m.a.Cosmetic || (!(e.type !== m.a.Achievement || ht(e.badge) || !Object(l.e)(e.badge)) || !(e.type !== m.a.Loyalty || !e.lastUnlockedLoyaltyBadge || e.badge.id !== e.lastUnlockedLoyaltyBadge.id))
					}(e) && n.a.createElement(lt, {
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
				xt = () => ({
					bottom: -200
				}),
				Bt = () => ({
					bottom: Object(Ue.spring)(-200, jt)
				}),
				Et = [40, 68, 96];

			function Ot(e, t) {
				return Et.slice(0, e.length)[e.findIndex(e => e.id === t.id)]
			}

			function wt(e) {
				return "removeBadge" !== e.type
			}
			const Ct = Object(d.c)({
				subreddit: (e, {
					subredditId: t
				}) => e.subreddits.models[t]
			});
			var St = Object(r.b)(Ct, e => ({
					onClose: () => e(Object(ge.f)())
				}))((function(e) {
					const t = e.subreddit ? e.subreddit.name : "Community",
						s = Object(Ge.a)(e.badges.filter(wt)),
						a = s.find(t => t.placement === m.b[e.previewedBadge.type]);
					return n.a.createElement("div", {
						className: Object(b.a)(e.className, yt.a.container)
					}, n.a.createElement("article", {
						className: yt.a.content
					}, n.a.createElement("header", {
						className: yt.a.header
					}, g.fbt._("Edit {communityName} Badges", [g.fbt._param("communityName", t)], {
						hk: "3R1TMF"
					}), n.a.createElement(M.a, {
						className: yt.a.close,
						onClick: e.onClose
					})), n.a.createElement("div", {
						className: yt.a.contentBackground
					}), n.a.createElement("div", {
						className: yt.a.commentPreviewLabel
					}, g.fbt._("comment preview", null, {
						hk: "Lhdaw"
					})), n.a.createElement("div", {
						className: Object(b.a)(yt.a.commentPreviewContainer, {
							[yt.a.previewClosed]: !e.previewedBadge.badge,
							[yt.a.previewOpen]: !!e.previewedBadge.badge
						})
					}, n.a.createElement("div", {
						className: yt.a.commentPreview
					}, n.a.createElement("div", {
						className: yt.a.voteContainer
					}, n.a.createElement(Ve.b, {
						className: yt.a.vote
					}), n.a.createElement(We.b, {
						className: yt.a.vote
					})), a && n.a.createElement(n.a.Fragment, null, n.a.createElement(qe.a, {
						className: yt.a.radialHighlightOuter,
						style: {
							left: Ot(s, a)
						}
					}), n.a.createElement(qe.a, {
						className: yt.a.radialHighlightInner,
						style: {
							left: Ot(s, a)
						}
					})), n.a.createElement($e.a, {
						showExplanation: !0,
						badges: s,
						subredditId: e.subredditId
					}))), n.a.createElement(Ue.TransitionMotion, {
						defaultStyles: [],
						styles: e.previewedBadge.badge ? [{
							data: e.previewedBadge.badge,
							key: e.previewedBadge.badge.id,
							style: {
								bottom: Object(Ue.spring)(16, jt)
							}
						}] : [],
						willEnter: xt,
						willLeave: Bt
					}, t => n.a.createElement(n.a.Fragment, null, t.map(t => n.a.createElement("div", {
						className: yt.a.badgePreviewContainer,
						key: t.key,
						style: {
							bottom: t.style.bottom
						}
					}, n.a.createElement(_t, {
						badge: t.data,
						subredditId: e.subredditId,
						type: e.previewedBadge.type,
						onDeselect: e.onDeselect
					})))))))
				})),
				kt = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.m.less"),
				Nt = s.n(kt);

			function Pt(e) {
				return !!e
			}
			class Mt extends n.a.Component {
				constructor(e) {
					super(e), this.handleBadgeSelection = (e, t) => {
						this.setState(s => {
							const a = s.selectedBadges[e];
							return {
								selectedBadges: {
									...s.selectedBadges,
									[e]: a && a.id === t.id ? void 0 : t
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
					const s = {
						badge: this.state.selectedBadges[this.props.currentBadgeType],
						type: this.props.currentBadgeType
					};
					return n.a.createElement("div", {
						className: Nt.a.container
					}, n.a.createElement("article", {
						className: Nt.a.content
					}, n.a.createElement(Re, {
						appliedBadges: this.props.appliedBadges,
						className: Nt.a.leftRail,
						selectedBadges: this.state.selectedBadges,
						subredditId: t.id,
						userId: e.id,
						onSelectBadge: this.handleBadgeSelection
					}), n.a.createElement(St, {
						appliedBadge: this.props.appliedBadges[this.props.currentBadgeType],
						badges: [this.state.selectedBadges[m.a.Loyalty] || this.props.appliedBadges[m.a.Loyalty], this.state.selectedBadges[m.a.Achievement] || this.props.appliedBadges[m.a.Achievement], this.state.selectedBadges[m.a.Cosmetic] || this.props.appliedBadges[m.a.Cosmetic]].filter(Pt),
						className: Nt.a.preview,
						previewedBadge: s,
						subredditId: t.id,
						onDeselect: () => {
							s.badge && this.handleBadgeSelection(s.type, s.badge)
						}
					})))
				}
			}
			const It = Object(d.c)({
					account: e => e.user.account,
					appliedBadges: (e, t) => {
						const s = Object(i.q)(e, t);
						return s ? Object(p.f)(e, s.id) : {
							[m.a.Loyalty]: void 0,
							[m.a.Achievement]: void 0,
							[m.a.Cosmetic]: void 0
						}
					},
					currentBadgeType: e => e.economics.currentBadgeManagementScreen.badgeType,
					currentView: e => e.economics.currentBadgeManagementScreen.view,
					initialSelectedBadge: (e, t) => {
						const s = e.economics.currentBadgeManagementScreen.view,
							a = Object(i.q)(e, t);
						let n;
						if (a && e.economics.currentModalArgs && e.economics.currentModalArgs.badge) {
							const t = e.economics.currentModalArgs.badge.type,
								s = e.economics.subredditPremium[a.id];
							if (s && s.status === u.a.Fetched) {
								(n = s.data.userOwnedBadges.find(e => e.type === t)) || (n = s.raw.products[t])
							}
						}
						if (a && !n && s === m.c.Gallery) {
							const t = Object(p.n)(e, a.id, m.a.Cosmetic, m.c.Gallery)[0];
							if (t) {
								const e = t.locked[0];
								e && (Object(l.f)(e) || e.price) && (n = t.locked[0])
							}
						}
						return n
					},
					subreddit: i.q
				}),
				Lt = Object(r.b)(It),
				At = Object(i.t)();
			t.default = Object(c.a)("spSpecialMemberships", Object(o.a)(At(Lt(Mt))))
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
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				c = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				m = s("./src/reddit/featureFlags/index.ts"),
				u = s("./src/reddit/hooks/useUserContext.ts"),
				p = s("./src/reddit/selectors/economics.ts"),
				b = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.m.less"),
				g = s.n(b);

			function h(e) {
				var t, s;
				const {
					currentUser: a
				} = Object(u.a)(), r = null !== (t = e.badges) && void 0 !== t ? t : Object(p.i)(e.badgeIds, null !== (s = e.allBadges) && void 0 !== s ? s : {});
				return r.length ? n.a.createElement(l.b, {
					useHovercard: !0,
					badges: r,
					className: Object(o.a)(e.className, g.a.badge),
					uniqueIdentifier: e.uniqueIdentifier,
					showAddCustom: e.customBadgesEnabled && e.premiumEnabled && e.showAddCustom && r.length < 2 && (null == a ? void 0 : a.id) === e.userId,
					subredditId: e.subredditId,
					userId: e.userId,
					onShowTooltip: e.onShowTooltip,
					onHideTooltip: e.onHideTooltip,
					onOpenUploadDialog: e.onOpenUploadDialog
				}) : null
			}
			const f = [];
			t.b = Object(r.b)(() => Object(d.c)({
				badgeIds: (e, {
					subredditId: t,
					userId: s
				}) => {
					var a;
					return (null === (a = e.users.appliedBadges[s]) || void 0 === a ? void 0 : a[t]) || f
				},
				allBadges: e => e.badges.models,
				customBadgesEnabled: m.d.spCustomBadgesAndEmotes,
				premiumEnabled: e => m.d.spSpecialMemberships(e)
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
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				i = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/helpers/economics/sortBadges.ts"),
				l = s("./src/reddit/hooks/useUserContext.ts"),
				m = s("./src/reddit/models/Badge/managementPage.ts"),
				u = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				p = s("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				b = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserPreview/index.m.less"),
				g = s.n(b);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(r.b)(null, (e, {
				subredditId: t
			}) => ({
				onShowTooltip: t => e(Object(i.f)({
					tooltipId: t
				})),
				onHideTooltip: () => e(Object(i.i)()),
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
				const s = Object(c.a)(e.badges),
					a = s[s.length - 1],
					r = a && a.extra && a.extra.style && a.extra.style.backgroundColor,
					o = a && a.extra && a.extra.style && a.extra.style.color;
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
					badges: s,
					subredditId: e.subredditId,
					uniqueIdentifier: e.uniqueIdentifier || "",
					userId: t.id,
					onShowTooltip: e.uniqueIdentifier ? e.onShowTooltip : () => {},
					onHideTooltip: e.uniqueIdentifier ? e.onHideTooltip : () => {},
					onOpenUploadDialog: e.onOpenUploadDialog
				}), n.a.createElement(p.a, {
					badges: s,
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
		"./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/selectors/economics.ts");

			function i(e) {
				const {
					badges: t
				} = e, s = t[t.length - 1];
				return s && !e.ignore ? n.a.cloneElement(e.children, {
					style: s.extra && s.extra.style && s.extra.style.color ? {
						...e.children.props.style || {},
						color: s.extra.style.color,
						fontWeight: 700
					} : e.children.props.style
				}) : e.children
			}
			t.b = Object(r.b)(() => Object(d.c)({
				badges: (e, {
					subredditId: t,
					userId: s
				}) => Object(o.q)(e, t, s)
			}))(i)
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts": function(e, t, s) {
			"use strict";
			var a, n, r, d;

			function o(e) {
				const {
					platform: t,
					playerType: s,
					region: a,
					style: n
				} = e;
				return `https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/lfg/lfg_badges_${n}/${a}_${t}_${s}_${n}.svg`
			}
			s.d(t, "a", (function() {
					return a
				})), s.d(t, "b", (function() {
					return n
				})), s.d(t, "c", (function() {
					return r
				})), s.d(t, "d", (function() {
					return o
				})),
				function(e) {
					e.pc = "PC", e.phone = "Phone", e.ps = "PlayStation", e.switch = "Switch", e.xbox = "XBox"
				}(a || (a = {})),
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
		"./src/reddit/components/Economics/SubredditPremium/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return o
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./node_modules/lodash/flattenDeep.js"),
				n = s.n(a),
				r = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts");
			const d = {
					karma_10k_badge: 1e4,
					karma_20k_badge: 2e4,
					karma_50k_badge: 5e4,
					karma_100k_badge: 1e5,
					karma_150k_badge: 15e4,
					karma_200k_badge: 2e5
				},
				o = new Set(n()(Object.keys(r.a).map(e => Object.keys(r.b).map(t => Object.keys(r.c).map(s => `${s}_${e}_${t}_badge`)))))
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
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/controls/LoadingIcon/index.m.less"),
				o = s.n(d);
			t.a = ({
				center: e,
				className: t,
				sizePx: s = 10
			}) => n.a.createElement("div", {
				className: Object(r.a)(o.a.loadingIcon, t, {
					[o.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${s}px`
				}
			})
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return d
			}));
			var a = s("./src/config.ts"),
				n = s("./src/reddit/endpoints/governance/requester.ts");
			const r = (e, t) => Object(n.a)(e, {
					method: "post",
					endpoint: `${a.a.metaUrl}/orders`,
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
					endpoint: `${a.a.metaUrl}/product-collections/${t}?types=emotes_pack`
				})
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			}));
			var a = s("./src/config.ts"),
				n = s("./src/lib/omitHeaders/index.ts"),
				r = s("./src/reddit/constants/headers.ts"),
				d = s("./src/reddit/endpoints/governance/requester.ts"),
				o = s("./src/reddit/helpers/governanceErrorText/index.ts"),
				i = s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function c(e, t) {
				return Object(d.a)(e, {
					endpoint: `${a.a.metaUrl}/communities/${t.subredditId}/me`,
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
					endpoint: `${a.a.metaUrl}/ps/me/braintree-client-tokens`,
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function m(e, t) {
				return Object(d.a)(e, {
					endpoint: `${a.a.metaUrl}/orders`,
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
						}) => Object(i.a)(e)).reduce((e, t) => (e[t.id] = t, e), {});
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
					endpoint: `${a.a.metaUrl}/orders`,
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
				return m
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./node_modules/lodash/merge.js"),
				n = s.n(a),
				r = s("./src/config.ts"),
				d = s("./src/reddit/endpoints/governance/badges.ts"),
				o = s("./src/reddit/endpoints/governance/community.ts"),
				i = s("./src/reddit/endpoints/governance/products/badges.ts"),
				c = s("./src/reddit/endpoints/governance/requester.ts");
			async function l(e, t, s) {
				const a = {
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
					m = Object(o.a)(e, {
						subredditId: t
					}),
					u = Object(i.b)(e, t),
					p = Object(d.c)(e, t, s),
					[b, g, h, f] = await Promise.all([l, m, u, p]);
				if (b.ok ? a.collections = b.body : a.errors.collections = b.error, g.ok) {
					const e = g.body;
					a.subscription = e.specialMemberships, a.communityRaw = e
				}
				return h.ok ? a.products = h.body : a.errors.products = h.error, f.ok ? (n()(a.badges, f.body.badges), a.userOwnedBadges = f.body.userOwnedBadges) : a.errors.userBadges = f.error, a
			}
			const m = (e, t) => Object(c.a)(e, {
				endpoint: `${r.a.metaUrl}/products/${t}?types=badge,membership`,
				method: "delete"
			})
		},
		"./src/reddit/endpoints/governance/community.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var a = s("./src/config.ts"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/endpoints/governance/requester.ts");

			function d(e, t) {
				return Object(r.a)(e, {
					endpoint: `${a.a.metaUrl}/communities/${t.subredditId}/me`,
					method: n.cb.GET
				})
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/featureFlags/index.ts");

			function i(e, t, s) {
				const a = Object(d.c)({
					featureEnabled: t => o.d[e](t)
				});
				return Object(r.b)(a)(e => {
					const {
						featureEnabled: a,
						...r
					} = e, d = r;
					return a ? n.a.createElement(t, d) : void 0 !== s ? n.a.createElement(s, d) : null
				})
			}
		},
		"./src/reddit/helpers/economics/membershipPage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var a = s("./src/lib/permalinkToOverlayLocation/index.ts");

			function n(e, t) {
				return Object(a.a)(`/web/special-membership/${e}?corr=${t}`)
			}
		},
		"./src/reddit/helpers/economics/setupSubredditPremiumButton.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./src/lib/currency/centsToDollars/index.ts"),
				n = s("./src/reddit/endpoints/economics/specialMembership.ts"),
				r = s("./src/reddit/helpers/loadThirdPartyScript.ts");
			async function d({
				apiContext: e,
				config: t,
				elementId: s,
				price: d,
				purchaseFn: o,
				username: i,
				onCancel: c,
				onClientLoad: l,
				onError: m,
				onSubmitting: u,
				onSuccess: p
			}) {
				const b = (e, t) => {
					if (!m) return;
					let s = e.toString ? e.toString() : "";
					s.toLowerCase().includes("object object") && (s = JSON.stringify(e)), m(e, s, t)
				};
				try {
					const [m] = await Promise.all([Object(n.b)(e, {
						username: i
					}), Object(r.b)()]);
					if (!m.ok) return void b(m.error, "/ps/me/braintree-client-tokens");
					const g = await braintree.client.create({
							authorization: m.body.clientToken
						}),
						h = await new Promise((e, t) => {
							braintree.paypalCheckout.create({
								client: g
							}, (s, a) => s ? t(s) : e(a))
						});
					l && l(), await paypal.Buttons({
						createBillingAgreement: "subscription" === t.type ? () => (u && u(), h.createPayment({
							amount: Object(a.a)(d(), !0),
							billingAgreementDescription: t.billingAgreement,
							currency: "USD",
							flow: "vault"
						})) : void 0,
						createOrder: "purchase" === t.type ? () => (u && u(), h.createPayment({
							amount: Object(a.a)(d(), !0),
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
						onCancel: () => c && c(),
						onError: e => b(e, "paypalError")
					}).render(`#${s}`)
				} catch (g) {
					b(g, "paypalError")
				}
			}
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "f", (function() {
				return o
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "d", (function() {
				return u
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./src/reddit/models/RichTextJson/index.ts");
			const n = "giphy|",
				r = "|downsized";

			function d(e, t) {
				return n + e + (t ? r : "")
			}

			function o(e) {
				return e && 0 === e.indexOf(n)
			}

			function i(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(o)
			}

			function c(e) {
				let t = e.substring(n.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function l(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, s) => [...e, ...l(s, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function m(e) {
				return l(e, a.F).map(e => e.id)
			}

			function u(e) {
				return l(e, e => e.e === a.o).map(e => e.u)
			}
		},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);

			function r(e) {
				return n.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("rect", {
					fill: "transparent",
					height: "18",
					rx: "4.5",
					strokeDasharray: "2 2",
					strokeLinejoin: "round",
					strokeWidth: "1",
					width: "18",
					x: "1",
					y: "1"
				}), n.a.createElement("path", {
					clipRule: "evenodd",
					d: "M13 9H11V7C11 6.7235 10.7765 6.5 10.5 6.5H9.5C9.2235 6.5 9 6.7235 9 7V9H7C6.724 9 6.5 9.2235 6.5 9.5V10.5C6.5 10.7765 6.724 11 7 11H9V13C9 13.2765 9.2235 13.5 9.5 13.5H10.5C10.7765 13.5 11 13.2765 11 13V11H13C13.2765 11 13.5 10.7765 13.5 10.5V9.5C13.5 9.2235 13.2765 9 13 9Z",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/EyeCancel/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);

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
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
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
		"./src/reddit/icons/svgs/Twinkle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);

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
		"./src/reddit/models/Payments/index.ts": function(e, t, s) {
			"use strict";
			var a, n, r;
			s.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(a || (a = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(n || (n = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(r || (r = {}))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, s) {
			"use strict";
			var a;

			function n(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			s.d(t, "a", (function() {
					return a
				})), s.d(t, "b", (function() {
					return n
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(a || (a = {}))
		},
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/redux/es/redux.js"),
				n = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/actions/economics/claims/constants.ts")),
				r = s("./src/reddit/actions/economics/me/constants.ts");
			const d = {};
			var o = (e = d, t) => {
					switch (t.type) {
						case r.a: {
							const s = t.payload.claimPoints || {},
								a = Object.keys(s).reduce((t, a) => (t[a] = {
									...e[a],
									availableClaims: s[a]
								}, t), {});
							return Object.keys(e).forEach(t => {
								var s;
								(null === (s = e[t]) || void 0 === s ? void 0 : s.isClaiming) && (a[t] = a[t] || {
									availableClaims: []
								}, a[t].isClaiming = !0)
							}), a
						}
						case n.b:
						case n.a:
							const {
								subredditId: s
							} = t.payload;
							return {
								...e, [s]: {
									...e[s],
									isClaiming: t.type === n.b
								}
							};
						default:
							return e
					}
				},
				i = s("./src/reddit/actions/governance/constants.ts");
			const c = {};
			var l = (e = c, t) => {
				switch (t.type) {
					case i.n: {
						const {
							subredditId: s,
							wallets: a
						} = t.payload, n = Object.keys(a).reduce((t, n) => {
							return {
								...t,
								[n]: {
									...e[n] || {},
									[s]: a[n]
								}
							}
						}, {});
						return {
							...e,
							...n
						}
					}
					default:
						return e
				}
			};
			t.a = Object(a.c)({
				claims: o,
				publicWallets: l
			})
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
			var a = s("./src/lib/initializeClient/installReducer.ts"),
				n = s("./src/reddit/reducers/features/crypto/index.ts");
			Object(a.a)({
				features: {
					crypto: n.a
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
					var s, a, n, r;
					return null === (r = null === (n = null === (a = null === (s = e.features) || void 0 === s ? void 0 : s.crypto) || void 0 === a ? void 0 : a.publicWallets) || void 0 === n ? void 0 : n[t.userId]) || void 0 === r ? void 0 : r[t.subredditId]
				}
		},
		"./src/reddit/selectors/economics.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return h
			})), s.d(t, "o", (function() {
				return f
			})), s.d(t, "a", (function() {
				return _
			})), s.d(t, "w", (function() {
				return v
			})), s.d(t, "f", (function() {
				return y
			})), s.d(t, "i", (function() {
				return j
			})), s.d(t, "q", (function() {
				return x
			})), s.d(t, "h", (function() {
				return B
			})), s.d(t, "y", (function() {
				return E
			})), s.d(t, "l", (function() {
				return O
			})), s.d(t, "n", (function() {
				return w
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "d", (function() {
				return S
			})), s.d(t, "j", (function() {
				return k
			})), s.d(t, "p", (function() {
				return N
			})), s.d(t, "k", (function() {
				return I
			})), s.d(t, "r", (function() {
				return A
			})), s.d(t, "x", (function() {
				return T
			})), s.d(t, "t", (function() {
				return D
			})), s.d(t, "u", (function() {
				return H
			})), s.d(t, "b", (function() {
				return F
			})), s.d(t, "v", (function() {
				return R
			})), s.d(t, "s", (function() {
				return U
			})), s.d(t, "g", (function() {
				return G
			})), s.d(t, "m", (function() {
				return W
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./src/reddit/featureFlags/index.ts"),
				n = s("./src/reddit/helpers/economics/sortBadges.ts"),
				r = s("./src/reddit/helpers/richTextJson/index.ts"),
				d = s("./src/reddit/models/Badge/index.ts"),
				o = s("./src/reddit/models/Badge/managementPage.ts"),
				i = s("./src/reddit/models/Gold/Powerups/index.ts"),
				c = s("./src/reddit/models/Payments/index.ts"),
				l = s("./src/reddit/models/Product/index.ts"),
				m = s("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				u = s("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				p = s("./src/reddit/selectors/commentSelector.ts"),
				b = s("./src/reddit/selectors/gold/powerups.ts");
			const g = [],
				h = (e, t) => {
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
				f = (e, t) => {
					const s = h(e, t);
					return s && s.endsAt || null
				};
			var _;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(_ || (_ = {}));
			const v = (e, t) => {
					const s = e.economics.subredditPremium[t];
					if (s && s.status === u.a.Fetched) {
						const s = f(e, t),
							a = Date.now();
						return s && a < s ? _.Subscribed : _.NotSubscribed
					}
					return _.DontKnow
				},
				y = (e, t) => {
					const s = e.user.account,
						a = e.economics.subredditPremium[t];
					if (s && a && a.status === u.a.Fetched) {
						const a = ((e.users.appliedBadges[s.id] || {})[t] || g).map(t => e.badges.models[t]).filter(Boolean);
						if (a) return {
							[o.a.Loyalty]: a.find(e => e.placement === d.a.First),
							[o.a.Achievement]: a.find(e => e.placement === d.a.Second),
							[o.a.Cosmetic]: a.find(e => !e.placement)
						}
					}
					return {
						[o.a.Loyalty]: void 0,
						[o.a.Achievement]: void 0,
						[o.a.Cosmetic]: void 0
					}
				};

			function j(e, t) {
				return (null == e ? void 0 : e.length) ? Object(n.a)(e.map(e => t[e]).filter(Boolean)) : g
			}
			const x = (e, t, s) => {
					var n;
					if (!a.d.spBadges(e)) return g;
					return j(null === (n = e.users.appliedBadges[s]) || void 0 === n ? void 0 : n[t], e.badges.models)
				},
				B = (e, t) => {
					const s = e.economics.subredditPremium[t.subredditId];
					if (s && s.status === u.a.Fetched) {
						const e = s.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function E(e, t) {
				const s = (e.economics.me.data.specialMemberships || {})[t];
				return !!(s && s.settings && s.settings.optOut)
			}

			function O(e, t) {
				const {
					badge: s,
					subredditId: a
				} = t, n = e.user.account ? e.user.account.id : void 0;
				if (Object(d.e)(s) && s.userId === n) return s;
				const r = e.badges.models,
					o = e.user.ownedBadges[a] || {},
					i = Object(d.e)(s) ? s.type : s.id;
				return Object.keys(o).map(e => r[e]).find(e => e && e.type === i)
			}

			function w(e, t, s, a) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === u.a.Fetched) {
					if (s === o.a.Loyalty || s === o.a.Achievement) return n.data.collections[s];
					if (s === o.a.Cosmetic && a) return n.data.collections[s][a]
				}
				return g
			}

			function C(e, t) {
				const s = w(e, t, o.a.Loyalty).find(e => "membership" === e.id);
				return s ? [].concat(s.locked, s.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : g
			}

			function S(e, t) {
				const s = e.economics.subredditPremium[t];
				if (s && s.status === u.a.Fetched) {
					const e = s.data.collections[o.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(d.f)
				}
				return g
			}

			function k(e, t) {
				return w(e, t, o.a.Cosmetic, o.c.Gallery).some(e => e.locked.some(e => Object(d.f)(e) || !!e.price))
			}
			const N = e => {
				const t = [],
					s = e.economics.paymentSystems;
				if (s.status === m.a.Fetched && s.data.stripe && s.data.stripe.sources) {
					const e = s.data.stripe.sources;
					for (const s in e) {
						const a = e[s];
						t.push({
							display: `${a.brand} •••• ${a.last4}`,
							id: s,
							type: c.a.SavedStripe
						})
					}
				}
				if (s.status === m.a.Fetched && s.data.braintree && s.data.braintree.sources) {
					const e = s.data.braintree.sources;
					for (const s in e) {
						const a = e[s];
						"PayPal" === a.brand && t.push({
							display: "PayPal",
							id: a.id,
							type: c.a.SavedPayPal
						})
					}
				}
				return t
			};
			var P;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(P || (P = {}));
			const M = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				I = (e, t) => Object.values(e.products.models).filter(e => e.type === l.a.Membership && t && e.subredditId === t),
				L = (e, t) => {
					if (!t) return {};
					const s = M.prices;
					I(e, t).forEach(e => {
						e.price && e.currency && (s[e.currency] = e.price)
					});
					const a = h(e, t);
					return a && a.price && a.currency && (s[a.currency] = a.price), s
				},
				A = (e, t) => {
					const s = e.subreddits.gov.meta[t || ""],
						a = s && s.extra && s.extra.nomenclature || M;
					return {
						prices: L(e, t),
						member: a.member || M.member,
						memberPlural: a.memberPlural || M.memberPlural,
						memberAlt: a.memberAlt || M.memberAlt,
						memberAltPlural: a.memberAltPlural || M.memberAltPlural,
						membership: a.membership || M.membership,
						membershipAlt: a.membershipAlt || M.membershipAlt
					}
				},
				T = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === m.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				D = (e, t) => {
					const s = e.user.ownedBadges[t] || {};
					return !!Object.keys(s).length
				},
				H = e => {
					const t = e.economics.paymentSystems;
					return t.status === m.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				F = (e, {
					subredditId: t
				}) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				R = (e, t) => {
					const s = t && e.economics.gifs[t];
					return !!s && s.hasGifProduct
				},
				U = (e, t, s) => {
					const n = "replyToPost" !== s && Object(p.a)(e, {
						commentId: s
					});
					if (!!n && Object(r.a)(n)) return !0;
					if (t && Object(b.m)(e, {
							subredditId: t,
							benefit: i.a.CommentsWithGifs
						})) return !0;
					const d = a.d.spGiphy(e),
						o = R(e, t);
					return d && o
				},
				G = (e, t, s) => {
					if (t) {
						const a = e.economics.banners.dismissedBanners[t];
						if (a && a.data) return !!a.data[s]
					}
				},
				W = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/products.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./src/reddit/models/Product/index.ts");
			const n = (e, t) => {
					const s = e.products.models[t];
					if (s && s.type === a.a.Badge) return s
				},
				r = (e, {
					productId: t
				}) => {
					const s = e.products.models[t];
					if (s) {
						const a = s.subredditId,
							n = Object.keys(e.user.ownedBadges[a] || {}),
							r = e.badges.models,
							d = Date.now();
						let o = !1;
						return n.forEach(e => {
							const s = r[e];
							s && s.type === t && s.endsAt > d && (o = !0)
						}), o
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditPremiumBadgeManagement.57d88809f8e0cb774b25.js.map