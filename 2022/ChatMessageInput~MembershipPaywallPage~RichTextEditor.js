// https://www.redditstatic.com/desktop2x/ChatMessageInput~MembershipPaywallPage~RichTextEditor.fece9b55a38ab443b32b.js
// Retrieved at 8/30/2022, 12:40:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatMessageInput~MembershipPaywallPage~RichTextEditor"], {
		"./node_modules/draft-js/dist/Draft.css": function(e, t, n) {},
		"./node_modules/lodash/_arrayReduceRight.js": function(e, t) {
			e.exports = function(e, t, n, o) {
				var s = null == e ? 0 : e.length;
				for (o && s && (n = e[--s]); s--;) n = t(n, e[s], s, e);
				return n
			}
		},
		"./node_modules/lodash/_baseEachRight.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseForOwnRight.js"),
				s = n("./node_modules/lodash/_createBaseEach.js")(o, !0);
			e.exports = s
		},
		"./node_modules/lodash/_baseExtremum.js": function(e, t, n) {
			var o = n("./node_modules/lodash/isSymbol.js");
			e.exports = function(e, t, n) {
				for (var s = -1, r = e.length; ++s < r;) {
					var i = e[s],
						c = t(i);
					if (null != c && (void 0 === a ? c == c && !o(c) : n(c, a))) var a = c,
						l = i
				}
				return l
			}
		},
		"./node_modules/lodash/_baseFilter.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var n = [];
				return o(e, (function(e, o, s) {
					t(e, o, s) && n.push(e)
				})), n
			}
		},
		"./node_modules/lodash/_baseForOwnRight.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseForRight.js"),
				s = n("./node_modules/lodash/keys.js");
			e.exports = function(e, t) {
				return e && o(e, t, s)
			}
		},
		"./node_modules/lodash/_baseForRight.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_createBaseFor.js")(!0);
			e.exports = o
		},
		"./node_modules/lodash/_baseGt.js": function(e, t) {
			e.exports = function(e, t) {
				return e > t
			}
		},
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var n = Math.ceil,
				o = Math.max;
			e.exports = function(e, t, s, r) {
				for (var i = -1, c = o(n((t - e) / (s || 1)), 0), a = Array(c); c--;) a[r ? c : ++i] = e, e += s;
				return a
			}
		},
		"./node_modules/lodash/_baseWhile.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseSlice.js");
			e.exports = function(e, t, n, s) {
				for (var r = e.length, i = s ? r : -1;
					(s ? i-- : ++i < r) && t(e[i], i, e););
				return n ? o(e, s ? 0 : i, s ? i + 1 : r) : o(e, s ? i + 1 : 0, s ? r : i)
			}
		},
		"./node_modules/lodash/_charsEndIndex.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseIndexOf.js");
			e.exports = function(e, t) {
				for (var n = e.length; n-- && o(t, e[n], 0) > -1;);
				return n
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseRange.js"),
				s = n("./node_modules/lodash/_isIterateeCall.js"),
				r = n("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, n, i) {
					return i && "number" != typeof i && s(t, n, i) && (n = i = void 0), t = r(t), void 0 === n ? (n = t, t = 0) : n = r(n), i = void 0 === i ? t < n ? 1 : -1 : r(i), o(t, n, i, e)
				}
			}
		},
		"./node_modules/lodash/_escapeHtmlChar.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_basePropertyOf.js")({
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#39;"
			});
			e.exports = o
		},
		"./node_modules/lodash/chunk.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseSlice.js"),
				s = n("./node_modules/lodash/_isIterateeCall.js"),
				r = n("./node_modules/lodash/toInteger.js"),
				i = Math.ceil,
				c = Math.max;
			e.exports = function(e, t, n) {
				t = (n ? s(e, t, n) : void 0 === t) ? 1 : c(r(t), 0);
				var a = null == e ? 0 : e.length;
				if (!a || t < 1) return [];
				for (var l = 0, d = 0, u = Array(i(a / t)); l < a;) u[d++] = o(e, l, l += t);
				return u
			}
		},
		"./node_modules/lodash/dropRightWhile.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseIteratee.js"),
				s = n("./node_modules/lodash/_baseWhile.js");
			e.exports = function(e, t) {
				return e && e.length ? s(e, o(t, 3), !0, !0) : []
			}
		},
		"./node_modules/lodash/escape.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_escapeHtmlChar.js"),
				s = n("./node_modules/lodash/toString.js"),
				r = /[&<>"']/g,
				i = RegExp(r.source);
			e.exports = function(e) {
				return (e = s(e)) && i.test(e) ? e.replace(r, o) : e
			}
		},
		"./node_modules/lodash/filter.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_arrayFilter.js"),
				s = n("./node_modules/lodash/_baseFilter.js"),
				r = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (i(e) ? o : s)(e, r(t, 3))
			}
		},
		"./node_modules/lodash/includes.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseIndexOf.js"),
				s = n("./node_modules/lodash/isArrayLike.js"),
				r = n("./node_modules/lodash/isString.js"),
				i = n("./node_modules/lodash/toInteger.js"),
				c = n("./node_modules/lodash/values.js"),
				a = Math.max;
			e.exports = function(e, t, n, l) {
				e = s(e) ? e : c(e), n = n && !l ? i(n) : 0;
				var d = e.length;
				return n < 0 && (n = a(d + n, 0)), r(e) ? n <= d && e.indexOf(t, n) > -1 : !!d && o(e, t, n) > -1
			}
		},
		"./node_modules/lodash/maxBy.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseExtremum.js"),
				s = n("./node_modules/lodash/_baseGt.js"),
				r = n("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, t) {
				return e && e.length ? o(e, r(t, 2), s) : void 0
			}
		},
		"./node_modules/lodash/range.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_createRange.js")();
			e.exports = o
		},
		"./node_modules/lodash/reduceRight.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_arrayReduceRight.js"),
				s = n("./node_modules/lodash/_baseEachRight.js"),
				r = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_baseReduce.js"),
				c = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var a = c(e) ? o : i,
					l = arguments.length < 3;
				return a(e, r(t, 4), n, l, s)
			}
		},
		"./node_modules/lodash/takeWhile.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseIteratee.js"),
				s = n("./node_modules/lodash/_baseWhile.js");
			e.exports = function(e, t) {
				return e && e.length ? s(e, o(t, 3)) : []
			}
		},
		"./node_modules/lodash/trimEnd.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseToString.js"),
				s = n("./node_modules/lodash/_castSlice.js"),
				r = n("./node_modules/lodash/_charsEndIndex.js"),
				i = n("./node_modules/lodash/_stringToArray.js"),
				c = n("./node_modules/lodash/toString.js"),
				a = n("./node_modules/lodash/_trimmedEndIndex.js");
			e.exports = function(e, t, n) {
				if ((e = c(e)) && (n || void 0 === t)) return e.slice(0, a(e) + 1);
				if (!e || !(t = o(t))) return e;
				var l = i(e),
					d = r(l, i(t)) + 1;
				return s(l, 0, d).join("")
			}
		},
		"./src/lib/forEachGroup/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const o = e => e;

			function s(e, t, n) {
				const [s, r] = Array.isArray(e) ? [e.length, t => e[t]] : [e.size, t => e.get(t)], {
					keyFn: i = o
				} = t || {};
				let {
					start: c = 0,
					end: a = s
				} = t || {};
				if ((c = c < 0 ? 0 : c) >= (a = a > s ? s : a)) return;
				let l = r(c),
					d = i(l, c),
					u = c;
				for (let o = c + 1; o < a; o++) {
					const e = r(o),
						t = i(e, o);
					if (t !== d) {
						if (!1 === n(l, d, u, o)) return;
						d = t, u = o, l = e
					}
				}
				n(l, d, u, a)
			}
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return h
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "j", (function() {
				return f
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "c", (function() {
				return S
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "i", (function() {
				return O
			}));
			var o = n("./node_modules/linkify-it/index.js"),
				s = n.n(o),
				r = n("./node_modules/tlds/index.js"),
				i = n.n(r),
				c = n("./src/lib/linkMatchers/customLinks.ts"),
				a = n("./node_modules/lodash/values.js"),
				l = n.n(a);
			const d = e => l()(c.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				p = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				h = s()().tlds(i.a).set({
					fuzzyIP: !0
				}),
				m = s()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(c.g.mention.prefix, c.g.mention.config),
				g = p(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(c.g.subreddit.prefix, c.g.subreddit.config).add(c.g.subredditFull.prefix, c.g.subreddit.config),
				f = p(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(c.g.profile.prefix, c.g.profile.config).add(c.g.profileFull.prefix, c.g.profile.config),
				b = s()().tlds(i.a).set({
					fuzzyIP: !0
				}).add(c.g.subreddit.prefix, c.g.subreddit.config).add(c.g.subredditFull.prefix, c.g.subreddit.config).add(c.g.profile.prefix, c.g.profile.config).add(c.g.profileFull.prefix, c.g.profile.config).add(c.g.mention.prefix, c.g.mention.config),
				y = s()().tlds(i.a).set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(c.g.subreddit.prefix, c.g.subredditFullUrl.config).add(c.g.subredditFull.prefix, c.g.subredditFullUrl.config),
				E = h.normalize;
			h.normalize = e => {
				E.call(h, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const S = (e, t) => {
					return (b.match(e) || []).filter(e => {
						const n = d(e.text);
						return !n || n && t
					})
				},
				x = e => {
					return [...f.match(e) || [], ...m.match(e) || []].map(e => !d(e.text) && e.text.replace(c.a, "")).filter(e => e)
				},
				C = (e, t) => {
					const n = e.match(t);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === t.length) return n[0]
				},
				O = e => {
					const t = h.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const n = t[0];
						return n.lastIndex === e.length ? n : ((e, t) => {
							const n = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(n)) return t.lastIndex += n.length, t.url += n, t
						})(e, n)
					}
				}
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			})), n.d(t, "g", (function() {
				return k
			})), n.d(t, "b", (function() {
				return T
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "f", (function() {
				return R
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/forOwn.js"),
				s = n.n(o),
				r = n("./src/reddit/actions/governance/errorToast.ts"),
				i = n("./src/reddit/endpoints/economics/emojis.ts"),
				c = n("./src/reddit/endpoints/economics/specialMembership.ts"),
				a = n("./src/reddit/endpoints/economics/subredditPremium.ts"),
				l = n("./src/reddit/endpoints/governance/badges.ts"),
				d = n("./src/config.ts"),
				u = n("./src/reddit/endpoints/governance/requester.ts");

			function p(e, t, n) {
				return Object(u.a)(e, {
					method: "get",
					endpoint: `${d.a.metaUrl}/products/${t}?owners=${n}` + "&types=emotes_pack,giphy"
				})
			}
			var h = n("./src/reddit/models/Badge/index.ts"),
				m = n("./src/reddit/models/Badge/managementPage.ts"),
				g = n("./src/reddit/models/Product/index.ts"),
				f = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				b = n("./src/reddit/selectors/economics.ts"),
				y = n("./src/reddit/selectors/products.ts"),
				E = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				S = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function x(e) {
				return !!e && "removeBadge" === e.type
			}

			function C(e) {
				if (!x(e)) return e
			}
			const O = () => async (e, t, n) => {
				let {
					apiContext: o
				} = n;
				if (!t().user.account) return;
				await e(Object(E.b)({
					includeMemberships: !0
				}));
				const s = t().economics.me.data.specialMemberships || {},
					r = Object.keys(s);
				if (r.length) {
					const t = await Object(c.e)(o(), r);
					t.ok && e(Object(S.g)(t.body))
				}
			}, k = (e, t) => async (n, o, s) => {
				let {
					apiContext: r
				} = s;
				const i = o().user.account,
					c = o().economics.subredditPremium[e],
					l = !c || c.status !== f.a.Fetched || t;
				if (i && l) {
					const t = await Object(a.a)(r(), e, i.id);
					n(Object(S.i)(t))
				}
			}, T = e => async (t, n, o) => {
				let {
					apiContext: s
				} = o;
				const i = n(),
					c = i.user.account,
					a = Object(b.f)(i, e.subredditId),
					d = Object.keys(a).map(e => a[e]).filter(Boolean);
				if (c && e.badge) {
					let n, o;
					n = e.placement === h.a.First ? a[m.a.Loyalty] : e.placement === h.a.Second ? a[m.a.Achievement] : a[m.a.Cosmetic], t(Object(S.a)({
						...e,
						badge: C(e.badge),
						currentAppliedBadges: d,
						userId: c.id
					})), x(e.badge) && n ? o = await Object(l.a)(s(), e.subredditId, n.id, !1) : x(e.badge) || (o = await Object(l.a)(s(), e.subredditId, e.badge.id)), o && !o.ok && (t(Object(S.a)({
						...e,
						badge: n,
						currentAppliedBadges: d,
						userId: c.id
					})), Object(r.a)(t, o.error))
				}
			}, v = (e, t) => async (n, o, s) => {
				let {
					apiContext: r
				} = s;
				await n(k(e, !0));
				const i = o().economics.subredditPremium[e];
				if (i && i.status === f.a.Fetched) {
					const o = i.data.userOwnedBadges.find(e => e.type === t.id);
					o && (n(T({
						badge: o,
						subredditId: e,
						placement: o.placement
					})), n(Object(S.d)(m.c.MyBadges)))
				}
			}, j = e => async (t, n, o) => {
				let {
					apiContext: c
				} = o;
				const a = n().user.account,
					l = !n().economics.emotes[e],
					d = !n().economics.gifs[e];
				if (a && (l || d)) {
					const [n, o] = await Promise.all([Object(i.b)(c(), e), p(c(), e, a.id)]);
					if (!o.ok) return void Object(r.a)(t, o.error);
					const l = {
						emotes: [],
						emoteCollections: n.ok ? n.body : {},
						giphy: []
					};
					s()(o.body, e => {
						e.type === g.a.EmotesPack ? l.emotes.push(e) : e.type === g.a.Giphy && l.giphy.push(e)
					}), t(Object(S.e)({
						subredditId: e,
						products: l
					}))
				}
			}, _ = (e, t, n) => async (o, s, r) => {
				let {
					apiContext: i
				} = r;
				if (await o(k(e, !0)), n && t) {
					const n = s(),
						r = Object(b.f)(n, e),
						i = Object(y.a)(n, t);
					if (!r[Object(m.d)(i.placement)] && i) {
						const t = Object(b.l)(n, {
							subredditId: e,
							badge: i
						});
						t && await o(T({
							badge: t,
							subredditId: e
						}))
					}
					o(Object(S.c)({
						subredditId: e,
						initialView: m.c.MyBadges
					}))
				}
			}, R = e => async (t, n, o) => {
				let {
					apiContext: s
				} = o;
				const {
					wallet: r
				} = await Object(c.c)(s(), e);
				t(Object(S.f)({
					wallet: r
				})), await t(k(e.subredditId, !0))
			}
		},
		"./src/reddit/actions/subredditAutocomplete/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/redditGQL/operations/SubredditTypeaheadSearch.json"),
				i = (e, t) => Object(s.a)(e, {
					...r,
					variables: t
				}),
				c = n("./src/reddit/helpers/graphql/normalizeAllowedPostTypesFromGql/index.ts"),
				a = e => {
					let {
						allowedPostTypes: t,
						id: n,
						isCrosspostDestination: o,
						isNsfw: s,
						name: r,
						styles: i,
						subscribersCount: a
					} = e;
					return {
						allowedPostTypes: Object(c.a)(t),
						communityIcon: i && i.icon || "",
						icon: i && i.legacyIcon && i.legacyIcon.url || "",
						id: n,
						isCrosspostDestination: o,
						isNsfw: s,
						name: r,
						primaryColor: i && i.primaryColor || "",
						subscribers: a
					}
				},
				l = n("./src/reddit/helpers/name/index.ts"),
				d = n("./src/reddit/selectors/subredditAutocomplete.ts"),
				u = n("./src/reddit/actions/subredditAutocomplete/constants.ts");
			const p = Object(o.a)(u.c),
				h = Object(o.a)(u.b),
				m = Object(o.a)(u.a),
				g = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return async (n, o, s) => {
						let {
							gqlContext: r
						} = s;
						const c = Object(l.h)(e);
						if (!c) return;
						const u = o(),
							g = u.subredditAutocomplete;
						if (g.api.pending[c] || g.models[c]) return;
						if (Object(d.b)(u, {
								substring: c
							})) return;
						n(p({
							key: c
						}));
						const f = await i(r(), {
							query: c,
							includeNsfw: t
						});
						if (f.ok) {
							const e = f.body.data.subredditTypeahead.subreddits.edges.map(e => a(e.node));
							n(h({
								key: c,
								subreddits: e
							}))
						} else n(m({
							key: c,
							error: f.error
						}))
					}
				}
		},
		"./src/reddit/components/CollapseIntoOverflow/index.m.less": function(e, t, n) {
			e.exports = {
				hidden: "_2x_bJPl7Q970NCRxOS36QB",
				innerWrapper: "_3oLr47tuKGv2mNpavCZ2X0",
				outerWrapper: "_1wi_3uF8fUynqe5reIop-G",
				overflowMenu: "_2aOuodBenLHlceR3j0AlIM",
				overflowMenuWrapper: "_3nQ7w1VIzZvzFawddOYgBC",
				row: "_2IirhjIkZ7hgWGtpr087xZ",
				postWrap: "WaTxGJXojt1RbZOH3q6eC"
			}
		},
		"./src/reddit/components/CollapseIntoOverflow/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var o = n("./src/lib/fastdom/index.ts"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/OverflowMenu/index.tsx"),
				a = n("./src/reddit/helpers/richTextEditor/index.ts"),
				l = n("./src/reddit/components/CollapseIntoOverflow/index.m.less"),
				d = n.n(l);
			const u = 33,
				p = e => e.preventDefault(),
				h = (e, t) => `${e===a.a.Post?"Post":"Comment"}--Overflow-Dropdown__${t}`;
			class m extends r.a.Component {
				constructor(e) {
					super(e), this.breakpoints = [], this.updateCurrentBreakpoint = () => {
						o.a.read(() => {
							if (!this.container) return;
							const {
								indexOfCurrentBreakpoint: e,
								totalNumCollapsibleItems: t
							} = this.state, n = this.container.clientWidth;
							let s = this.breakpoints.findIndex((e, o) => {
								const s = o + 1 < t - 1,
									r = this.breakpoints[o + 1] + (s ? u : 0);
								return n < r
							});
							s < 0 && (s = t - 1), s !== e && o.a.write(() => {
								this.setState({
									indexOfCurrentBreakpoint: s,
									shouldShowOverflow: s < t - 1
								})
							})
						})
					};
					const t = this.getTotalNumCollapsibleItems();
					this.state = this.calculateOverflowState(t)
				}
				calculateOverflowState(e) {
					return {
						indexOfCurrentBreakpoint: e - 1,
						shouldShowOverflow: !1,
						totalNumCollapsibleItems: e
					}
				}
				componentDidMount() {
					window.addEventListener("resize", this.updateCurrentBreakpoint)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.updateCurrentBreakpoint)
				}
				componentDidUpdate() {
					const e = this.getTotalNumCollapsibleItems();
					e !== this.state.totalNumCollapsibleItems && o.a.write(() => {
						this.breakpoints = [], this.setState(this.calculateOverflowState(e))
					})
				}
				getTotalNumCollapsibleItems() {
					return Array.isArray(this.props.children) ? this.props.children.reduce((e, t) => (Array.isArray(t) ? e += t.length : t && e++, e), 0) : 1
				}
				registerBreakpoint(e, t) {
					this.breakpoints[t] = 0, o.a.read(() => {
						if (e && e.clientWidth) {
							const n = e.clientWidth;
							this.breakpoints[t] = 0 === t ? n : this.breakpoints[t - 1] + n, this.breakpoints[this.state.totalNumCollapsibleItems - 1] && this.updateCurrentBreakpoint()
						}
					})
				}
				render() {
					const {
						children: e,
						className: t,
						oveflowMenuDropdownId: n,
						onOverflowMenuClick: o,
						renderOverflowMenuTooltip: s,
						editorType: l
					} = this.props, {
						indexOfCurrentBreakpoint: u,
						shouldShowOverflow: m
					} = this.state, g = r.a.Children.toArray(e).filter(Boolean);
					return r.a.createElement("div", {
						className: Object(i.a)(d.a.outerWrapper, t),
						ref: e => this.container = e
					}, r.a.createElement("div", {
						className: d.a.innerWrapper
					}, g.map((e, t) => r.a.createElement("span", {
						className: t > u ? d.a.hidden : void 0,
						key: t,
						ref: e => this.registerBreakpoint(e, t)
					}, e)), m && r.a.createElement("div", {
						className: d.a.overflowMenuWrapper,
						key: "overflowMenuWrapper"
					}, s && s(), r.a.createElement(c.b, {
						className: d.a.overflowMenu,
						dropdownId: h(l, n),
						isFixed: !1,
						handleMouseDown: p,
						onClick: o
					}, r.a.createElement("div", {
						className: Object(i.a)(d.a.row, {
							[d.a.postWrap]: l === a.a.Post
						})
					}, g.map((e, t) => r.a.createElement("span", {
						className: t <= u ? d.a.hidden : void 0,
						key: t
					}, e)))))))
				}
			}
		},
		"./src/reddit/components/MakeGifToggle/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1iRy5EPCLqSx8I0k9OT0wW",
				content: "NfjQg3srQXRhyOxLBwXrS",
				toggleSwitch: "_1fUmirx6e9tUDs04TQq6A1",
				mCompactSwitch: "_3Cx_YBpXo1s1iy7oA-4s6R",
				mDisabled: "_1M5N6DrrQQCQJs3JctDSu8",
				hoverTooltip: "_9qS60cx9uxyt1k4eZF_0w",
				tooltipContentClass: "_21DP8j-B-UkVKGJONbrTmX"
			}
		},
		"./src/reddit/components/MakeGifToggle/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				a = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				l = n("./src/reddit/layout/row/Inline/index.tsx"),
				d = n("./src/reddit/components/MakeGifToggle/index.m.less"),
				u = n.n(d);
			t.a = e => r.a.createElement(l.a, {
				className: Object(i.a)(u.a.container, e.disabled ? u.a.mDisabled : null, e.isCompact ? u.a.mCompactSwitch : null),
				onMouseDown: e => e.preventDefault(),
				onClick: t => {
					t.stopPropagation(), !e.disabled && e.onClick()
				}
			}, r.a.createElement(l.a, {
				className: u.a.content
			}, r.a.createElement(a.a, {
				className: u.a.toggleSwitch,
				on: e.on
			}), r.a.createElement("label", null, o.fbt._("Make GIF", null, {
				hk: "2ig2GG"
			}))), e.tooltip ? r.a.createElement(c.a, {
				className: u.a.hoverTooltip,
				tooltipContentClass: u.a.tooltipContentClass,
				text: e.tooltip
			}) : null)
		},
		"./src/reddit/components/ProgressBar/index.m.less": function(e, t, n) {
			e.exports = {
				innerBar: "Db3WJFTcyAR-IM0cIkpDG",
				outerBar: "i8kQtxHYBB8Sb3bPI4M_e"
			}
		},
		"./src/reddit/components/ProgressBar/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/ProgressBar/index.m.less"),
				c = n.n(i);
			t.a = e => {
				let {
					className: t,
					innerBarClassName: n,
					percent: o
				} = e;
				return s.a.createElement("div", {
					className: Object(r.a)(c.a.outerBar, t)
				}, s.a.createElement("div", {
					className: Object(r.a)(c.a.innerBar, n),
					style: {
						width: `${o.toFixed(2)}%`
					}
				}))
			}
		},
		"./src/reddit/components/RichTextEditor/Blockquote/index.m.less": function(e, t, n) {
			e.exports = {
				BlockQuoteWrapper: "_3bqfSxMWo3yWv7j4N8hQy6",
				blockQuoteWrapper: "_3bqfSxMWo3yWv7j4N8hQy6"
			}
		},
		"./src/reddit/components/RichTextEditor/CodeBlock/index.m.less": function(e, t, n) {
			e.exports = {
				CodeBlockWrapper: "_2YrwxhRxsXvszOhYWDUhMh",
				codeBlockWrapper: "_2YrwxhRxsXvszOhYWDUhMh"
			}
		},
		"./src/reddit/components/RichTextEditor/DragController/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return h
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "a", (function() {
				return g
			}));
			var o = n("./node_modules/lodash/includes.js"),
				s = n.n(o);
			var r = n("./src/reddit/helpers/dom/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const c = e => e.className.indexOf("public-DraftEditor-content") >= 0,
				a = e => !!e.parentElement && !!e.parentElement.parentElement && c(e.parentElement.parentElement),
				l = e => !(!e.dataset.block || !e.dataset.offsetKey),
				d = e => {
					const {
						offsetKey: t
					} = e.dataset;
					return t ? (e => e.split("-")[0])(t) : ""
				},
				u = (e, t) => {
					return ((e, t) => {
						const n = function(e, t) {
							let n = 0,
								o = e.length - 1;
							for (; n <= o;) {
								const s = o + n >> 1,
									r = t(e[s]);
								if (r > 0) n = s + 1;
								else {
									if (!(r < 0)) return s;
									o = s - 1
								}
							}
							return n
						}(e, e => {
							const n = e.getBoundingClientRect();
							return t < n.top ? -1 : t > n.bottom ? 1 : 0
						});
						return e[Math.min(n, e.length - 1)]
					})(e.querySelectorAll("[data-block][data-offset-key]"), t)
				},
				p = (e, t) => {
					const n = Object(r.b)(e, l, c);
					return n || u(e, t)
				},
				h = (e, t) => {
					const n = (e => {
						const t = e.target;
						if (!(t instanceof HTMLElement)) return;
						const n = Object(r.b)(t, c);
						if (!n) return;
						const o = p(t, e.clientY);
						if (!o) return;
						const s = Object(r.b)(o, a);
						return s ? {
							editorContentElement: n,
							topLevelElement: s,
							blockElement: o
						} : void 0
					})(t);
					if (!n) return;
					const {
						topLevelElement: o,
						blockElement: s
					} = n, l = d(s), u = e.getCurrentContent(), h = u.getBlockForKey(l);
					if (!h) return;
					const {
						upperElement: m,
						lowerElement: g
					} = ((e, t, n, o) => {
						let s = n,
							r = n;
						if (e.getType() === i.b.UNSTYLED) s = r = t;
						else if (Object(i.o)(e.getType())) {
							s = r = t;
							const c = o.getBlockAfter(e.getKey());
							c && Object(i.u)(c.getType()) && (r = n.nextElementSibling)
						} else Object(i.u)(e.getType()) && (s = n.previousElementSibling, r = t);
						return {
							upperElement: s,
							lowerElement: r
						}
					})(h, s, o, u), {
						clientY: f,
						isBefore: b
					} = ((e, t, n) => {
						const o = e.getBoundingClientRect(),
							s = t.getBoundingClientRect();
						let i, a;
						if (n > (o.top + s.bottom) / 2) {
							i = s.bottom, a = !1;
							const e = Object(r.b)(t, e => !!e.nextElementSibling, c);
							if (e) {
								i = (e.nextElementSibling.getBoundingClientRect().top + s.bottom) / 2
							}
						} else {
							i = o.top, a = !0;
							const t = Object(r.b)(e, e => !!e.previousElementSibling, c);
							if (t) {
								i = (t.previousElementSibling.getBoundingClientRect().bottom + o.top) / 2
							}
						}
						return {
							clientY: i,
							isBefore: a
						}
					})(m, g, t.clientY);
					let y = l;
					if (h.getType() !== i.b.UNSTYLED) {
						const e = p(b ? m : g, f);
						e && (y = d(e))
					}
					return {
						clientY: f,
						isBefore: b,
						blockKey: y
					}
				},
				m = e => e.items ? !!Array.from(e.items).find(e => "file" === e.kind) : !(!e.files || !e.files.length) || s()(e.types, "Files"),
				g = e => e.items ? Array.from(e.items).map(e => "file" === e.kind ? e.getAsFile() : null).filter(Boolean) : e.files ? Array.from(e.files) : []
		},
		"./src/reddit/components/RichTextEditor/DragController/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_13Sj3UMDKkCCJTq88berCB",
				hideCaret: "_2BqK1CuzH2oWi2F9_cuFPQ",
				DropLine: "z5iuD3MVYcfS7tTihbvof",
				dropLine: "z5iuD3MVYcfS7tTihbvof",
				Tooltip: "_1z9S1KmnM79xn-UA0FnbP6",
				tooltip: "_1z9S1KmnM79xn-UA0FnbP6"
			}
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				tooltip: "ki2VbfBhU-qxg1S6VyET6",
				above: "_8fNGSBGvr1Ds8PbrsUGzN",
				below: "_38gWvHp3NJkR5r5ftUfbFG",
				HoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2",
				hoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2"
			}
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less"),
				a = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = i.a.wrapped(e => {
				const {
					children: t,
					className: n,
					renderBelow: o,
					text: i,
					tooltipContentClass: c,
					...d
				} = e;
				return s.a.createElement("div", l({}, d, {
					className: Object(r.a)(a.a.container, n)
				}), i ? s.a.createElement("div", {
					className: Object(r.a)(a.a.tooltip, c, o ? a.a.below : a.a.above)
				}, i) : null, t)
			}, "HoverTooltip", a.a)
		},
		"./src/reddit/components/RichTextEditor/LinksController/LinkDetailsPopup/index.m.less": function(e, t, n) {
			e.exports = {
				LinkDetailsBox: "_2F28OVOVlGo6WCT2l8lHzO",
				linkDetailsBox: "_2F28OVOVlGo6WCT2l8lHzO",
				Link: "_3vJCj_aXdDc-UXA9fDK-z-",
				link: "_3vJCj_aXdDc-UXA9fDK-z-",
				LinkButton: "_1NtBcR7JgjxkWLJrk3ddD3",
				linkButton: "_1NtBcR7JgjxkWLJrk3ddD3"
			}
		},
		"./src/reddit/components/RichTextEditor/LinksController/LinkEditorPopup/index.m.less": function(e, t, n) {
			e.exports = {
				EditForm: "_1iFkUjPC4J8jzWrDthDpcv",
				editForm: "_1iFkUjPC4J8jzWrDthDpcv",
				LinkEditorBox: "_3HMg7pEvqliZhuStFZ241S",
				linkEditorBox: "_3HMg7pEvqliZhuStFZ241S",
				Input: "_2rXi0UvEKRcI3WdI52LAx1",
				input: "_2rXi0UvEKRcI3WdI52LAx1",
				Label: "_2olni9Ucr8-t8W62nTkY_",
				label: "_2olni9Ucr8-t8W62nTkY_",
				HintAndButtonRow: "_2qiAR3ZyDGPSr9zmqhP_5Z",
				hintAndButtonRow: "_2qiAR3ZyDGPSr9zmqhP_5Z",
				InvalidUrlHint: "pKrgYGkHvjHPFkWO-Gnko",
				invalidUrlHint: "pKrgYGkHvjHPFkWO-Gnko",
				SubmitButton: "_8a_rf-Al8VNnUQ42WlvF",
				submitButton: "_8a_rf-Al8VNnUQ42WlvF"
			}
		},
		"./src/reddit/components/RichTextEditor/OrderedList/index.m.less": function(e, t, n) {
			e.exports = {
				OrderedListWrapper: "_1QXegNe8bOemD558m-vc9t",
				orderedListWrapper: "_1QXegNe8bOemD558m-vc9t"
			}
		},
		"./src/reddit/components/RichTextEditor/Paragraph/index.m.less": function(e, t, n) {
			e.exports = {
				ParagraphWrapper: "_3LuG0YVLLHE2azRNVaKz7O",
				paragraphWrapper: "_3LuG0YVLLHE2azRNVaKz7O"
			}
		},
		"./src/reddit/components/RichTextEditor/TextRendering/index.m.less": function(e, t, n) {
			e.exports = {
				H1: "_15ThA3NFuzpQTnPu0I3QKj",
				h1: "_15ThA3NFuzpQTnPu0I3QKj",
				H2: "_3R5icAd6cRzwpq-yhvQUoW",
				h2: "_3R5icAd6cRzwpq-yhvQUoW",
				H3: "_3UxnA7bFPnKoS0rKMO1UYe",
				h3: "_3UxnA7bFPnKoS0rKMO1UYe",
				H4: "_10CFPbxVR0HQhyRBkeExmO",
				h4: "_10CFPbxVR0HQhyRBkeExmO",
				H5: "_3bidJE2WceaRjyBA8LLfp3",
				h5: "_3bidJE2WceaRjyBA8LLfp3",
				H6: "_27N6aQ0-d-ntRM1JkDwGg7",
				h6: "_27N6aQ0-d-ntRM1JkDwGg7"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_2lAJkFZXhr5kbH7YF-sYFf",
				enabled: "_1H0LLEwUP5ys6cgxr9KhMa",
				active: "_32EiQr-Px2GJvCfigwwmuK"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/icons/fonts/index.tsx"),
				l = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				d = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.m.less"),
				u = n.n(d);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const h = e => {
				e.preventDefault(), e.stopPropagation()
			};
			t.a = i.a.wrapped(e => {
				const {
					active: t,
					className: n,
					disabledTooltip: o,
					enabled: i = !0,
					tooltip: d,
					Icon: m,
					iconName: g,
					onClick: f,
					overridingClassName: b,
					tooltipBelow: y,
					children: E
				} = e, S = {
					"aria-label": d,
					"aria-selected": t,
					className: b || Object(r.a)(u.a.button, n, {
						[u.a.active]: !!t,
						[u.a.enabled]: i
					}),
					onMouseDown: h,
					onClick: e => {
						h(e), i && f && f(e)
					},
					role: "button",
					tabIndex: -1
				};
				return s.a.createElement(c.t, p({}, S, {
					size: c.d.S,
					priority: c.c.Plain,
					isSquare: !0,
					Icon: g ? Object(a.b)(g) : m
				}), s.a.createElement(l.a, {
					text: (i ? d : o) || "",
					tooltipContentClass: e.tooltipContentClass,
					renderBelow: y
				}), E)
			}, "FormatterButton", u.a)
		},
		"./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.m.less": function(e, t, n) {
			e.exports = {
				LoadingIcon: "jOFrSZE7wRk_lVAP2pBvY",
				loadingIcon: "jOFrSZE7wRk_lVAP2pBvY",
				markdownIcon: "_2ROqhD3999k4q_d5PMRde-",
				Text: "EVdFfF5K7kZFMaYpSHbLe",
				text: "EVdFfF5K7kZFMaYpSHbLe",
				Button: "_1Mg8ZhclDuQlkzEqVU21qu",
				button: "_1Mg8ZhclDuQlkzEqVU21qu"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = n("./src/reddit/selectors/editorContent.ts"),
				p = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				h = n("./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.m.less"),
				m = n.n(h);
			const g = a.a.wrapped(d.a, "LoadingIcon", m.a),
				f = Object(c.c)({
					isConverting: (e, t) => Object(u.a)(e, t.draftKey)
				}),
				b = Object(i.b)(f);
			t.a = r.a.memo(b(e => r.a.createElement(l.t, {
				priority: l.c.Plain,
				size: l.d.XS,
				text: r.a.createElement(r.a.Fragment, null, e.isConverting && r.a.createElement(g, {
					sizePx: 12
				}), o.fbt._("Markdown Mode", null, {
					hk: "1DXoXV"
				})),
				"aria-label": o.fbt._("Switch to markdown", null, {
					hk: "OxsM0"
				}),
				tabIndex: -1,
				className: e.className,
				onClick: e.onClick
			}, !e.shouldHideTooltip && r.a.createElement(p.a, {
				text: o.fbt._("Switch to markdown", null, {
					hk: "4mWw83"
				})
			}))))
		},
		"./src/reddit/components/RichTextEditor/Toolbar/MediaInputButton/index.m.less": function(e, t, n) {
			e.exports = {
				ImageIcon: "_1jv-IJjyjDSSVuYe6CzeHv",
				imageIcon: "_1jv-IJjyjDSSVuYe6CzeHv",
				VideoIcon: "uo_2BSPFse-IQNQbclyKb",
				videoIcon: "uo_2BSPFse-IQNQbclyKb",
				HiddenInput: "_2keaDnXIlu9Yq2y-cC8zgu",
				hiddenInput: "_2keaDnXIlu9Yq2y-cC8zgu"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/MediaInputButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/constants/icons.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				d = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				u = n("./src/reddit/components/RichTextEditor/Toolbar/MediaInputButton/index.m.less"),
				p = n.n(u);
			const h = a.a.input("HiddenInput", p.a);
			class m extends s.Component {
				constructor() {
					super(...arguments), this.hiddenInputEl = null, this.onFileInputChange = e => {
						e.stopPropagation();
						const t = this.hiddenInputEl,
							n = t.files;
						n && n.length && (this.props.onFilesInput(Array.from(n)), t.value = "")
					}, this.onButtonClick = () => {
						this.hiddenInputEl && this.hiddenInputEl.click(), this.props.onClick()
					}, this.onHiddenInputClick = e => e.stopPropagation()
				}
				render() {
					const {
						accept: e,
						active: t,
						controlsState: n,
						destSubreddit: s,
						disabledTooltip: a,
						enabled: u,
						type: p
					} = this.props, m = "image" === p, g = n.blocks[l.a];
					let f = !0;
					if (s && s.allowedPostTypes) {
						const {
							images: e,
							videos: t
						} = s.allowedPostTypes;
						f = m ? e : t
					}
					let b = g.isActive,
						y = g.isEnabled && f;
					return void 0 !== t && (b = t), void 0 !== u && (y = u), r.a.createElement(d.a, {
						iconName: m ? c.a.image_post : c.a.video_post,
						active: b,
						enabled: y,
						tooltip: m ? o.fbt._("Add an image", null, {
							hk: "4bqU7J"
						}) : o.fbt._("Add a video", null, {
							hk: "2dn6oZ"
						}),
						onClick: this.onButtonClick,
						disabledTooltip: a
					}, r.a.createElement(h, {
						multiple: !0,
						innerRef: e => this.hiddenInputEl = e,
						onChange: this.onFileInputChange,
						onClick: this.onHiddenInputClick,
						type: "file",
						accept: e || Array.from(m ? i.a : i.c).join()
					}))
				}
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.m.less": function(e, t, n) {
			e.exports = {
				Icon: "_3UAl61hrkRAXX5JQ6m_q8R",
				icon: "_3UAl61hrkRAXX5JQ6m_q8R"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return h
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "j", (function() {
				return f
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "i", (function() {
				return y
			})), n.d(t, "k", (function() {
				return E
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "l", (function() {
				return x
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "c", (function() {
				return k
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/constants/icons.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				l = n("./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.m.less"),
				d = n.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const p = e => c.a.wrapped(e, "Icon", d.a),
				h = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
					return n => {
						const o = p(e);
						return r.a.createElement(o, u({}, n, {
							style: {
								padding: t
							}
						}))
					}
				},
				m = {
					type: "style",
					name: "bold",
					iconName: i.a.bold,
					style: a.k.BOLD,
					tooltipTranslation: () => o.fbt._("Bold", null, {
						hk: "16qNLn"
					})
				},
				g = {
					type: "style",
					name: "italics",
					iconName: i.a.italic,
					style: a.k.ITALIC,
					tooltipTranslation: () => o.fbt._("Italics", null, {
						hk: "3hxpiB"
					})
				},
				f = {
					type: "style",
					name: "strikethrough",
					iconName: i.a.strikethrough,
					style: a.k.STRIKETHROUGH,
					tooltipTranslation: () => o.fbt._("Strikethrough", null, {
						hk: "U4hXC"
					})
				},
				b = {
					type: "style",
					name: "inline_code",
					iconName: i.a.code_inline,
					style: a.k.MONOSPACE,
					tooltipTranslation: () => o.fbt._("Inline Code", null, {
						hk: "1eNxEt"
					})
				},
				y = {
					type: "style",
					name: "spoiler",
					iconName: i.a.spoiler,
					style: a.k.SPOILER,
					tooltipTranslation: () => o.fbt._("Spoiler", null, {
						hk: "1tb6Ht"
					})
				},
				E = {
					type: "style",
					name: "superscript",
					iconName: i.a.superscript,
					style: a.k.SUPERSCRIPT,
					tooltipTranslation: () => o.fbt._("Superscript", null, {
						hk: "sqKFn"
					})
				},
				S = {
					type: "block",
					name: "heading",
					iconName: i.a.text_size,
					block: a.b.H1,
					tooltipTranslation: () => o.fbt._("Heading", null, {
						hk: "4jnBPs"
					})
				},
				x = {
					type: "block",
					name: "unordered_list",
					iconName: i.a.list_bulleted,
					block: a.i.UNORDERED,
					tooltipTranslation: () => o.fbt._("Bulleted List", null, {
						hk: "21Yx7R"
					})
				},
				C = {
					type: "block",
					name: "ordered_list",
					iconName: i.a.list_numbered,
					block: a.i.ORDERED,
					tooltipTranslation: () => o.fbt._("Numbered List", null, {
						hk: "4BmF1X"
					})
				},
				O = {
					type: "block",
					name: "block_quote",
					iconName: i.a.quote,
					block: a.e,
					tooltipTranslation: () => o.fbt._("Quote Block", null, {
						hk: "1xUsGm"
					})
				},
				k = {
					type: "block",
					name: "code_block",
					iconName: i.a.code_block,
					block: a.f,
					tooltipTranslation: () => o.fbt._("Code Block", null, {
						hk: "2y19DH"
					})
				}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/index.m.less": function(e, t, n) {
			e.exports = {
				ToolbarWrapper: "_2w8adx4kIBGPEESCyEmToa",
				toolbarWrapper: "_2w8adx4kIBGPEESCyEmToa",
				isSticky: "r7zyyy152ZTdiHhea0cIj",
				tooltip: "dMXy0l6Saub8-fPDkQvGC",
				SectionSpacer: "_2voJAi1L0g2QbtAFDHSOCK",
				sectionSpacer: "_2voJAi1L0g2QbtAFDHSOCK",
				CollapseIntoOverflow: "_2Sw_-OGBZ8HN7tA8CP2qjP",
				collapseIntoOverflow: "_2Sw_-OGBZ8HN7tA8CP2qjP",
				MarkdownButtonWrapper: "-CJZhr1W053faqFXFYgXO",
				markdownButtonWrapper: "-CJZhr1W053faqFXFYgXO",
				MarkdownButton: "_2Z7RdWBmSoubpoKJAgNIAi",
				markdownButton: "_2Z7RdWBmSoubpoKJAgNIAi"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return v
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "f", (function() {
				return R
			})), n.d(t, "h", (function() {
				return w
			})), n.d(t, "e", (function() {
				return B
			})), n.d(t, "a", (function() {
				return I
			})), n.d(t, "d", (function() {
				return A
			})), n.d(t, "b", (function() {
				return K
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/constants/icons.ts"),
				l = n("./src/reddit/components/CollapseIntoOverflow/index.tsx"),
				d = n("./src/reddit/helpers/richTextEditor/index.ts"),
				u = n("./src/reddit/components/RichTextEditor/editorStateTransforms.ts"),
				p = n("./src/reddit/components/RichTextEditor/helpers/controlsState.ts"),
				h = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				m = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				g = n("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				f = n("./src/reddit/components/RichTextEditor/table/helpers.ts");
			var b = (e, t, n) => {
					if (Object(h.v)(o.RichUtils.getCurrentBlockType(e))) return e;
					const s = e.getCurrentContent(),
						r = e.getSelection().getEndKey(),
						i = Object(f.l)(t, n),
						c = Object(g.f)(s, r, i, g.a.after, !0),
						a = o.EditorState.push(e, c, m.e);
					return o.EditorState.forceSelection(a, o.SelectionState.createEmpty(i[0].getKey()))
				},
				y = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				E = n("./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.tsx"),
				S = n("./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.tsx"),
				x = n("./src/reddit/components/RichTextEditor/Toolbar/MediaInputButton/index.tsx"),
				C = n("./src/reddit/components/RichTextEditor/Toolbar/index.m.less"),
				O = n.n(C);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const T = e => i.a.createElement(y.a, k({}, e, {
					tooltipContentClass: O.a.tooltip
				})),
				v = () => i.a.createElement("div", {
					className: O.a.SectionSpacer
				}),
				j = (e, t, n, s, r) => {
					const {
						name: c,
						iconName: a,
						tooltipTranslation: l
					} = e, d = l();
					if ("style" === e.type) {
						const {
							style: o
						} = e;
						return i.a.createElement(T, {
							iconName: a,
							active: t.styles[o].isActive,
							enabled: t.styles[o].isEnabled,
							key: c,
							tooltip: d,
							onClick: () => {
								const e = Object(u.c)(o, n);
								s(e), r(c, ((e, t) => e.getCurrentInlineStyle().contains(t))(e, o))
							}
						})
					} {
						const {
							block: l
						} = e;
						return i.a.createElement(T, {
							iconName: a,
							active: t.blocks[l].isActive,
							enabled: t.blocks[l].isEnabled,
							key: c,
							tooltip: d,
							onClick: () => {
								const e = Object(u.i)(l, n);
								s(e), r(c, ((e, t) => o.RichUtils.getCurrentBlockType(e) === t)(e, l))
							}
						})
					}
				},
				_ = (e, t, n, o, s) => e.map(e => j(e, t, n, o, s)),
				R = [E.b, E.e],
				w = [E.j, E.g, E.k, E.i],
				B = [E.d, E.l, E.h, E.a, E.c],
				I = e => i.a.createElement(T, {
					iconName: a.a.link_post,
					active: e.controlsState.link.isActive,
					enabled: e.controlsState.link.isEnabled,
					tooltip: s.fbt._("Link", null, {
						hk: "e4PGW"
					}),
					onClick: () => {
						e.onLinkButtonClick(), e.trackOnClick("link", !0)
					}
				}),
				A = e => i.a.createElement(T, {
					iconName: a.a.table,
					active: e.controlsState.blocks[h.l].isActive,
					enabled: e.controlsState.blocks[h.l].isEnabled,
					tooltip: s.fbt._("Table", null, {
						hk: "3cHfLT"
					}),
					onClick: () => {
						e.onChange(b(e.editorState, 3, 2)), e.trackOnClick("table", !0)
					}
				}),
				K = e => {
					const {
						className: t,
						allowMediaUploads: n = !1,
						destSubreddit: o,
						editorState: s,
						isOverlay: r,
						onChange: a,
						onFilesSelect: u,
						readOnly: h,
						trackOnClick: m,
						onLinkButtonClick: g,
						onMarkdownButtonClick: f,
						editorKey: b
					} = e, y = Object(p.a)(s);
					return h && Object(p.b)(y), i.a.createElement("div", {
						className: Object(c.a)(O.a.ToolbarWrapper, t, {
							[O.a.isSticky]: !r
						})
					}, i.a.createElement(l.a, {
						oveflowMenuDropdownId: b,
						className: O.a.CollapseIntoOverflow,
						editorType: d.a.Post
					}, _(R, y, s, a, m), i.a.createElement(I, {
						controlsState: y,
						trackOnClick: m,
						onLinkButtonClick: g
					}), _(w, y, s, a, m), i.a.createElement(v, null), _(B, y, s, a, m), i.a.createElement(v, null), i.a.createElement(A, {
						controlsState: y,
						editorState: s,
						trackOnClick: m,
						onChange: a
					}), n && i.a.createElement(x.a, {
						destSubreddit: o,
						controlsState: y,
						onClick: () => m("image_upload"),
						onFilesInput: u,
						type: "image"
					}), n && i.a.createElement(x.a, {
						destSubreddit: o,
						controlsState: y,
						onClick: () => m("video_upload"),
						onFilesInput: u,
						type: "video"
					})), i.a.createElement("div", {
						className: O.a.MarkdownButtonWrapper
					}, i.a.createElement(S.a, {
						className: O.a.MarkdownButton,
						onClick: f
					})))
				}
		},
		"./src/reddit/components/RichTextEditor/Tooltip/getSelectionClientRect.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js");

			function s() {
				const e = window.getSelection();
				if (!e.rangeCount) return null;
				const t = Object(o.getVisibleSelectionRect)(window);
				return t || (!t && e.focusNode && e.focusNode === e.anchorNode ? e.focusNode.getBoundingClientRect() : null)
			}
		},
		"./src/reddit/components/RichTextEditor/Tooltip/index.m.less": function(e, t, n) {
			e.exports = {
				tooltipBox: "tVQ1dB4n0mAWdcQNxFq-K",
				dropdown: "_1akkpO3lymdoWGIc5tjIpm",
				triangle: "_2O2U-Vhc1mg9O7DOwp50Aa",
				triangleBack: "_3IfYYXUMUzn2OvoiMUNcaQ",
				triangleFront: "_3CtwSTtkmKXvzDo3TmCp9C",
				triangleBelow: "_1churYJpAwcb-tf0k1c46F"
			}
		},
		"./src/reddit/components/RichTextEditor/Tooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			})), n.d(t, "b", (function() {
				return g
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/index.tsx"),
				c = n("./src/reddit/helpers/dom/index.ts"),
				a = n("./src/reddit/components/RichTextEditor/Tooltip/index.m.less"),
				l = n.n(a);
			const d = 8,
				u = 16,
				p = 15 + u / 2;
			var h;
			! function(e) {
				e[e.None = 0] = "None", e[e.Above = 1] = "Above", e[e.Below = 2] = "Below"
			}(h || (h = {}));
			const m = e => {
				let {
					isBelow: t = !1,
					style: n
				} = e;
				return s.a.createElement("div", {
					className: Object(r.a)(l.a.triangle, {
						[l.a.triangleBelow]: t
					}),
					style: n
				}, s.a.createElement("div", {
					className: l.a.triangleBack
				}), s.a.createElement("div", {
					className: l.a.triangleFront
				}))
			};
			class g extends o.Component {
				constructor(e) {
					super(e), this.containerRef = null, this.updateContainerRef = e => this.containerRef = e, this.setTargetPosition = e => {
						e ? this.updatePositioning(e) : this.setState({
							positioning: null
						})
					}, this.state = {
						positioning: null
					}
				}
				updatePositioning(e) {
					if (!this.containerRef) return;
					const t = this.containerRef.getBoundingClientRect(),
						n = Math.round(t.width),
						o = Math.round(t.height),
						s = this.state.positioning;
					if (!e) {
						if (!s) return;
						if (s.tooltipWidth === n && s.tooltipHeight === o) return
					}
					const r = e ? e.bottom : s.target.bottom,
						i = e ? e.top : s.target.top,
						a = e ? e.left : s.target.left,
						l = Object(c.e)(this.containerRef);
					let d, u, p;
					if (l) {
						const e = l.getBoundingClientRect();
						d = e.bottom - (r || 0), u = a - e.left + l.scrollLeft, p = i - e.top + l.scrollTop
					} else {
						const e = document.documentElement,
							t = window.pageYOffset || e.scrollTop;
						u = a + (window.pageXOffset || e.scrollLeft), p = i + t
					}
					const h = {
						target: {
							top: i,
							left: a
						},
						tooltipWidth: n,
						tooltipHeight: o,
						tooltip: {
							top: p,
							left: u,
							bottom: d
						}
					};
					this.adjustPositionForTriangle(h, l), this.setState({
						positioning: h
					})
				}
				adjustPositionForTriangle(e, t) {
					const {
						trianglePlacement: n
					} = this.props;
					if (!n) return;
					const o = t ? t.offsetWidth : document.documentElement.offsetWidth,
						s = o ? Math.max(e.tooltip.left + e.tooltipWidth - o, 0) : 0;
					e.tooltip.left -= s + p;
					const r = s + p - u / 2;
					let i;
					n === h.Above ? (e.tooltip.top += d, i = -d) : (e.tooltip.top -= e.tooltipHeight + d, i = e.tooltipHeight), e.triangle = {
						top: i,
						left: r
					}
				}
				componentDidUpdate(e, t) {
					e.targetPosition !== this.props.targetPosition ? this.setTargetPosition(this.props.targetPosition || null) : this.updatePositioning()
				}
				componentDidMount() {
					this.setTargetPosition(this.props.targetPosition || null), this.props.onSetPositionUpdater && this.props.onSetPositionUpdater(this.setTargetPosition)
				}
				componentWillUnmount() {
					this.props.onSetPositionUpdater && this.props.onSetPositionUpdater(null)
				}
				render() {
					const {
						aboveParent: e,
						dropdown: t,
						trianglePlacement: n
					} = this.props, {
						positioning: o
					} = this.state, c = o && void 0 !== o.triangle && s.a.createElement(m, {
						isBelow: n === h.Below,
						style: {
							top: o.triangle.top + "px",
							left: o.triangle.left + "px"
						}
					});
					let a = s.a.createElement("div", {
						className: Object(r.a)(l.a.tooltipBox, this.props.className, {
							[l.a.dropdown]: t
						}),
						style: o ? {
							left: o.tooltip.left,
							...e ? {
								bottom: o.tooltip.bottom
							} : {
								top: o.tooltip.top
							}
						} : {},
						ref: this.updateContainerRef
					}, o && this.props.children && s.a.createElement(s.a.Fragment, null, c, this.props.children));
					return this.props.usePortal && (a = Object(i.d)(a, this.props.portalContainer || document.body)), a
				}
			}
		},
		"./src/reddit/components/RichTextEditor/UnorderedList/index.m.less": function(e, t, n) {
			e.exports = {
				UnorderedListWrapper: "vXDC2CysyRNVq3lFirKDs",
				unorderedListWrapper: "vXDC2CysyRNVq3lFirKDs"
			}
		},
		"./src/reddit/components/RichTextEditor/constants/draftEditorCommands.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "g", (function() {
				return r
			})), n.d(t, "h", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "a", (function() {
				return d
			}));
			const o = "bold",
				s = "italic",
				r = "underline",
				i = "undo",
				c = "backspace",
				a = "delete",
				l = "split-block",
				d = "adjust-depth"
		},
		"./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "f", (function() {
				return a
			}));
			const o = "backspace-character",
				s = "insert-fragment",
				r = "insert-characters",
				i = "change-block-data",
				c = "change-block-type",
				a = "remove-range"
		},
		"./src/reddit/components/RichTextEditor/editorStateTransforms.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return u
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "a", (function() {
				return x
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/immutable/dist/immutable.js"),
				r = n("./src/reddit/components/RichTextEditor/constants/draftEditorCommands.ts"),
				i = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				c = n("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				a = n("./src/reddit/components/RichTextEditor/helpers/modifiers.ts"),
				l = n("./src/reddit/components/RichTextEditor/helpers/styles.ts"),
				d = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const u = (e, t) => {
					return t.getSelection().isCollapsed() ? Object(l.a)(e, t) : Object(l.b)(e, t)
				},
				p = (e, t) => {
					const n = t.getCurrentContent(),
						s = t.getSelection(),
						r = s.getEndKey(),
						a = o.RichUtils.getCurrentBlockType(t) === e ? d.n : e;
					let u = t,
						p = o.Modifier.setBlockType(n, s, a);
					const h = n.getBlockForKey(r).getLength();
					if (Object(d.r)(a) || Object(d.q)(a)) {
						const e = o.SelectionState.createEmpty(s.getStartKey()).merge({
							focusKey: s.getEndKey(),
							focusOffset: h
						});
						u = Object(l.c)(u), p = ((e, t) => {
							const n = Object.keys(d.k).reduce((e, n) => o.Modifier.removeInlineStyle(e, t, d.k[n]), e);
							return Object(c.h)(n, t)
						})(p, e)
					}
					if (Object(d.q)(a) || Object(d.p)(a)) {
						const e = p.getBlockAfter(r);
						if (!e || e.getType() !== a && e.getType() !== d.n) {
							const e = o.SelectionState.createEmpty(r).merge({
								anchorOffset: h,
								focusOffset: h
							});
							p = o.Modifier.splitBlock(p, e), p = o.Modifier.setBlockType(p, p.getSelectionAfter(), d.n)
						}
					}
					return p = p.merge({
						selectionAfter: s
					}), o.EditorState.push(u, p, i.c)
				},
				h = (e, t) => {
					const n = o.Modifier.setBlockType(e, t, d.n);
					return o.Modifier.replaceText(n, t, "", Object(s.OrderedSet)([]))
				},
				m = (e, t) => o.EditorState.forceSelection(e, o.SelectionState.createEmpty(t)),
				g = e => {
					const t = e.getCurrentContent(),
						n = e.getSelection(),
						r = a.d(t, n),
						c = r.getBlockAfter(n.getEndKey()),
						l = o.SelectionState.createEmpty(c.getKey()),
						u = o.Modifier.replaceText(o.Modifier.setBlockType(r, l, d.n), l, "", Object(s.OrderedSet)([])),
						p = o.EditorState.push(e, u, i.d);
					return m(p, c.getKey())
				},
				f = e => {
					const t = e.getCurrentContent(),
						n = e.getSelection(),
						s = t.getBlockForKey(n.getEndKey()),
						i = s.set("depth", Math.max(s.getDepth() - 1, 0)),
						c = t.merge({
							blockMap: t.getBlockMap().merge({
								[s.getKey()]: i
							})
						});
					return o.EditorState.push(e, c, r.a)
				},
				b = e => {
					const t = e.getCurrentContent(),
						n = e.getSelection(),
						s = t.getBlockForKey(n.getEndKey()).getKey(),
						r = o.EditorState.push(e, h(t, n), i.c);
					return m(r, s)
				},
				y = e => {
					const t = e.getCurrentContent(),
						n = e.getSelection(),
						s = t.getBlockForKey(n.getEndKey()),
						r = s.getKey(),
						c = t.getBlockBefore(r).getKey(),
						a = o.SelectionState.createEmpty(r).merge({
							focusOffset: s.getText().length
						}),
						l = o.EditorState.push(e, h(((e, t) => {
							const n = e.getBlockMap().remove(t);
							return e.merge({
								blockMap: n
							})
						})(t, c), a), i.c);
					return m(l, r)
				},
				E = e => {
					const t = a.d(e.getCurrentContent(), e.getSelection());
					return o.EditorState.push(e, t, r.f)
				},
				S = e => {
					const t = a.a(e.getCurrentContent(), e.getSelection(), "\n");
					return o.EditorState.push(e, t, i.d)
				},
				x = e => {
					const t = e.getSelection(),
						n = a.a(e.getCurrentContent(), t, " ");
					return o.EditorState.push(e, n, i.d)
				}
		},
		"./src/reddit/components/RichTextEditor/emotes/Powerups/tooltipAsync.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "PowerupsEmotesTooltip",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("PowerupsEmotesTooltip").then(n.bind(null, "./src/reddit/components/RichTextEditor/emotes/Powerups/Tooltip.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/RichTextEditor/emotes/Powerups/Tooltip.tsx"
				}
			})
		},
		"./src/reddit/components/RichTextEditor/emotes/decorator.m.less": function(e, t, n) {
			e.exports = {
				emote: "Q7hqnjoPSXm7QyvW8qf57",
				sticker: "_1WD0TSe2_gY29FXmFjPCza"
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "d", (function() {
				return S
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/immutable/dist/immutable.js"),
				r = n("./src/lib/memoizeByReference/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				c = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				a = n("./src/reddit/components/RichTextEditor/entity/getAllEntitiesInSelection.ts"),
				l = n("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				d = n("./src/reddit/components/RichTextEditor/helpers/modifiers.ts"),
				u = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const p = "⬛";

			function h(e, t) {
				return e.createEntity(c.a.EMOTE, "IMMUTABLE", t)
			}

			function m(e, t) {
				let n = t.getCurrentContent();
				const s = (n = h(n, e)).getLastCreatedEntityKey();
				n = Object(d.b)(n, t.getSelection(), p, void 0, s);
				const r = o.EditorState.push(t, n, i.d);
				return o.EditorState.forceSelection(r, r.getSelection())
			}

			function g(e, t) {
				if (t.getStartKey() !== t.getEndKey()) return !1;
				const n = e.getBlockForKey(t.getEndKey()).getType();
				return !(Object(u.q)(n) || Object(u.r)(n) || Object(u.t)(n))
			}

			function f(e, t) {
				const n = Object(a.a)(e, t, t => {
					const n = t.getEntity();
					return !!n && e.getEntity(n).getType() === c.a.EMOTE
				});
				let s;
				for (; s = n.pop();) {
					const t = o.SelectionState.createEmpty(s.blockKey).merge({
						anchorOffset: s.start,
						focusOffset: s.end
					});
					e = o.Modifier.removeRange(e, t, "backward")
				}
				return e
			}

			function b(e) {
				const t = e.getSelection();
				if (!t.isCollapsed()) return null;
				const n = e.getCurrentContent().getBlockForKey(t.getFocusKey()),
					o = n.getText(),
					s = n.getCharacterList();
				let r = t.getFocusOffset() - 1;
				const i = [];
				for (; r >= 0;) {
					const e = o[r],
						t = s.get(r),
						n = t && t.getEntity();
					if (!e.trim().length || n) return null;
					if (":" === e && i.length > 0) break;
					i.unshift(e), r--
				}
				return r >= 0 && i.length ? i.join("").toLowerCase() : null
			}

			function y(e, t, n) {
				e.findEntityRanges(e => {
					const t = e.getEntity();
					return !!t && n.getEntity(t).getType() === c.a.EMOTE
				}, t)
			}
			const E = Object(r.a)(e => {
				if (e.getBlockMap().size > 1) return !1;
				const t = e.getFirstBlock();
				let n = 0;
				return y(t, () => n++, e), n <= 3 && n === t.getLength()
			});

			function S(e, t) {
				if (E(e.getCurrentContent()) === E(t.getCurrentContent())) return e;
				const n = e.getCurrentContent(),
					r = n.getFirstBlock();
				return o.EditorState.set(e, {
					currentContent: o.Modifier.mergeBlockData(n, Object(l.b)(r), Object(s.Map)({
						_emote_modified: new Date
					}))
				})
			}
		},
		"./src/reddit/components/RichTextEditor/entity/applyEntityToContentBlock.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js");

			function s(e, t, n, s) {
				let r = e.getCharacterList();
				return r = r.withMutations(e => {
					for (let r = t; r < n; r++) e.set(r, o.CharacterMetadata.applyEntity(e.get(r), s))
				}), e.set("characterList", r)
			}
		},
		"./src/reddit/components/RichTextEditor/entity/cloneEntitiesInFragment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/reddit/components/RichTextEditor/entity/applyEntityToContentBlock.ts");

			function s(e, t, n, s, r) {
				const i = e.createEntity(n.getType(), n.getMutability(), n.getData()),
					c = e.getLastCreatedEntityKey();
				return [i, Object(o.a)(t, s, r, c)]
			}

			function r(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const o = new Map;
				let r = t,
					i = e;
				return t.forEach((e, t) => {
					e && t && e.findEntityRanges(e => !!e.getEntity(), (n, s) => {
						const r = e.getEntityAt(n),
							i = o.get(r) || [];
						i.push({
							start: n,
							end: s,
							blockKey: t
						}), o.set(r, i)
					})
				}), o.forEach((t, o) => {
					const c = e.getEntity(o);
					(n ? t.slice(1) : t).forEach(e => {
						let {
							start: t,
							end: n,
							blockKey: o
						} = e;
						const a = r.get(o),
							[l, d] = s(i, a, c, t, n);
						i = l, r = r.set(o, d)
					})
				}), [i, r]
			}
		},
		"./src/reddit/components/RichTextEditor/entity/entityTypes.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const o = {
					COMMENT_LINK: "COMMENT_LINK",
					EMOTE: "EMOTE",
					LINK: "LINK",
					POST_LINK: "POST_LINK",
					SUBREDDIT_LINK: "SUBREDDIT_LINK",
					USER_LINK: "USER_LINK",
					USER_MENTION: "USER_MENTION"
				},
				s = new Set([o.COMMENT_LINK, o.LINK, o.POST_LINK, o.SUBREDDIT_LINK, o.USER_LINK, o.USER_MENTION]),
				r = (e, t) => {
					const n = e && t.getEntity(e);
					return !!n && (e => s.has(e))(n.getType())
				}
		},
		"./src/reddit/components/RichTextEditor/entity/getAllEntitiesInSelection.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts");

			function s(e, t, n) {
				const s = [];
				return Object(o.a)(e, t, (e, o) => {
					const r = t.getStartKey() === o ? t.getStartOffset() : 0,
						i = t.getEndKey() === o ? t.getEndOffset() : e.getLength();
					e.findEntityRanges(n, (t, n) => {
						r <= n && i >= t && s.push({
							blockKey: o,
							entityKey: e.getEntityAt(t),
							start: t,
							end: n
						})
					})
				}), s
			}
		},
		"./src/reddit/components/RichTextEditor/entity/getSelectionEntityInfo.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js");

			function s(e, t) {
				const n = t.getFocusKey();
				if (n !== t.getAnchorKey()) return;
				const s = e.getBlockForKey(n),
					r = t.getStartOffset(),
					i = t.getEndOffset(),
					c = s.getEntityAt(i) || (i > 0 ? s.getEntityAt(i - 1) : null);
				if (!c) return;
				let a, l;
				if (s.findEntityRanges(e => e.getEntity() === c, (e, t) => {
						e <= r && i <= t && (a = e, l = t)
					}), "number" != typeof a || "number" != typeof l) return;
				const d = s.getText().slice(a, l);
				return {
					entitySelection: o.SelectionState.createEmpty(n).merge({
						anchorOffset: a,
						focusOffset: l
					}),
					entityKey: c,
					entityText: d
				}
			}
		},
		"./src/reddit/components/RichTextEditor/entity/link/decorator.m.less": function(e, t, n) {
			e.exports = {
				RegularLink: "_1FRfMxEAy__7c8vezYv9qP",
				regularLink: "_1FRfMxEAy__7c8vezYv9qP"
			}
		},
		"./src/reddit/components/RichTextEditor/entity/link/helpers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "h", (function() {
				return S
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "e", (function() {
				return C
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./src/lib/linkMatchers/index.ts"),
				r = n("./src/lib/linkMatchers/customLinks.ts"),
				i = n("./src/lib/memoizeByReference/index.ts"),
				c = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				a = n("./src/reddit/components/RichTextEditor/entity/getAllEntitiesInSelection.ts"),
				l = n("./src/reddit/components/RichTextEditor/entity/getSelectionEntityInfo.ts"),
				d = n("./src/reddit/components/RichTextEditor/spoiler/helpers.ts"),
				u = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const p = [c.a.SUBREDDIT_LINK, c.a.USER_LINK, c.a.USER_MENTION],
				h = [...p, c.a.LINK];

			function m(e, t, n) {
				e.findEntityRanges(e => {
					const t = e.getEntity();
					return !!t && h.includes(n.getEntity(t).getType())
				}, t)
			}
			const g = e => {
					const t = s.a.match(e);
					if (t && t.length && t[0]) {
						const {
							schema: e,
							url: n
						} = t[0];
						return {
							linkPrefix: e,
							url: n
						}
					}
					return {
						linkPrefix: "",
						url: ""
					}
				},
				f = Object(i.a)((function(e) {
					const t = e.getCurrentContent(),
						n = e.getSelection();
					if (!n.isCollapsed()) return;
					if (Object(u.q)(t.getBlockForKey(n.getStartKey()).getType())) return;
					const r = n.getFocusKey(),
						i = t.getBlockForKey(r),
						c = n.getFocusOffset(),
						a = i.getText(),
						l = a.lastIndexOf(" ", c - 1) + 1,
						p = a.slice(l, c);
					if (!p) return;
					const h = s.f.match(p);
					if (!h) return;
					const m = h[h.length - 1],
						g = l + m.index,
						f = l + m.lastIndex;
					let b = -1;
					if (i.findEntityRanges(e => !!e.getEntity(), (e, t) => {
							e < c && (b = t)
						}), b >= g) return;
					return i.getCharacterList().slice(g, f).find(d.b) ? void 0 : {
						selection: o.SelectionState.createEmpty(r).merge({
							anchorOffset: g,
							focusOffset: f
						}),
						url: m.url
					}
				}));

			function b(e, t, n) {
				const s = e.getSelection();
				let r = e.getCurrentContent();
				const i = (r = r.createEntity(c.a.LINK, "MUTABLE", {
					url: n
				})).getLastCreatedEntityKey();
				return r = (r = o.Modifier.applyEntity(r, t, i)).merge({
					selectionAfter: s
				}), o.EditorState.push(e, r, "apply-entity")
			}
			const y = Object(i.a)((function(e) {
				const t = e.getCurrentContent(),
					n = Object(l.a)(t, e.getSelection());
				if (!n) return;
				const o = t.getEntity(n.entityKey);
				if (o.getType() !== c.a.LINK) return;
				const {
					url: s
				} = o.getData();
				return {
					url: s,
					...n
				}
			}));
			const E = Object(i.a)((function(e) {
				const t = e.getCurrentContent(),
					n = e.getSelection(),
					o = Object(l.a)(t, n);
				if (!o) return;
				const s = n.getFocusOffset(),
					r = t.getEntity(o.entityKey),
					{
						linkPrefix: i
					} = g(o.entityText);
				return !p.includes(r.getType()) || !o.entityText.startsWith(i) || s - o.entitySelection.getStartOffset() < i.length ? void 0 : {
					internalName: o.entityText.slice(i.length),
					...o
				}
			}));

			function S(e, t, n, s) {
				let r = "apply-entity",
					i = e.getCurrentContent(),
					a = e;
				const d = Object(l.a)(i, t);
				if (n)
					if (d) {
						const e = i.getEntity(d.entityKey),
							{
								url: t
							} = e.getData();
						t !== n && (i = i.mergeEntityData(d.entityKey, {
							url: n
						})), void 0 !== s && d.entityText !== s && (i = o.Modifier.replaceText(i, d.entitySelection, s, void 0, d.entityKey), r = "insert-characters")
					} else {
						if (void 0 === s) throw new Error("New link display text must be provided!");
						const e = (i = i.createEntity(c.a.LINK, "MUTABLE", {
							url: n
						})).getLastCreatedEntityKey();
						i = o.Modifier.replaceText(i, t, s, void 0, e), r = "insert-characters"
					}
				else i = (i = o.Modifier.applyEntity(i, t, "")).merge({
					selectionAfter: e.getSelection()
				});
				return i === e.getCurrentContent() ? e : a = o.EditorState.push(a, i, r)
			}

			function x(e, t) {
				const n = E(e);
				if (!n) return e;
				const {
					linkPrefix: s,
					url: i
				} = g(n.entityText), c = `${s===r.d.mention?r.d.profile:s}${t}`, a = n.entitySelection.getStartOffset() + c.length;
				let l = S(e, n.entitySelection, i, c);
				return l = o.EditorState.forceSelection(l, n.entitySelection.merge({
					anchorOffset: a,
					focusOffset: a
				}))
			}

			function C(e, t) {
				if (t.getStartKey() !== t.getEndKey()) return !1;
				const n = e.getBlockForKey(t.getEndKey()).getType();
				return !Object(u.q)(n) && !Object(u.t)(n) && !Object(a.a)(e, t, t => {
					const n = t.getEntity();
					return !!n && e.getEntity(n).getType() !== c.a.LINK
				}).length
			}
		},
		"./src/reddit/components/RichTextEditor/helpers/common.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "g", (function() {
				return m
			}));
			var o, s = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./node_modules/immutable/dist/immutable.js"),
				i = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			! function(e) {
				e.before = "before", e.after = "after"
			}(o || (o = {}));
			const c = (e, t) => new s.ContentBlock({
					key: e || Object(s.genKey)(),
					...t ? {
						text: t,
						characterList: Object(r.List)(Object(r.Repeat)(s.CharacterMetadata.create(), t.length))
					} : {}
				}),
				a = e => e.props.children,
				l = e => a(e).props.block,
				d = function(e, t, n) {
					let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.after,
						a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
						l = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
					const d = [];
					let p = -1;
					if (e.getBlockMap().forEach((e, s) => {
							r === o.after && d.push(e), s === t && (d.push(...n), p = d.length - 1), r === o.before && d.push(e)
						}), p >= 0) {
						if (a) {
							const e = d[p + 1];
							e && e.getType() === i.n || d.splice(p + 1, 0, c())
						}
						if (l) {
							const e = p - n.length,
								t = d[e];
							t && t.getType() === i.n || d.splice(e + 1, 0, c())
						}
					}
					return e.merge({
						blockMap: s.BlockMapBuilder.createFromArray(d),
						selectionAfter: u(n[n.length - 1], !1, !0)
					})
				},
				u = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
						o = s.SelectionState.createEmpty(e.getKey()).merge({
							hasFocus: n
						});
					return t && (o = o.merge({
						anchorOffset: e.getLength(),
						focusOffset: e.getLength()
					})), o
				},
				p = (e, t) => {
					let n = e.getBlockBefore(t),
						o = e.getBlockMap();
					return o.get(t) ? (o = o.size > 1 ? o.remove(t) : o.set(t, c(t)), n = n || o.first(), e.merge({
						blockMap: o,
						selectionAfter: u(n, !0)
					})) : e
				},
				h = (e, t) => t.querySelector(`[data-block][data-offset-key="${e}-0-0"]`),
				m = e => e.getType() === i.n && !e.getText()
		},
		"./src/reddit/components/RichTextEditor/helpers/controlsState.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return b
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/forEach.js"),
				s = n.n(o),
				r = n("./src/lib/forEachGroup/index.ts"),
				i = n("./src/lib/memoizeByReference/index.ts"),
				c = n("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				a = n("./src/reddit/components/RichTextEditor/entity/link/helpers.tsx"),
				l = n("./src/reddit/components/RichTextEditor/media/helpers.ts"),
				d = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				u = n("./src/reddit/components/RichTextEditor/table/helpers.ts"),
				p = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts"),
				h = n("./src/reddit/components/RichTextEditor/helpers/styles.ts");
			const m = e => {
					const t = e.getCurrentContent(),
						n = e.getSelection(),
						o = (() => {
							const e = {};
							return s()(d.k, t => e[t] = {
								isActive: !1,
								isEnabled: !1
							}), e
						})(),
						i = new Set(Object.keys(o));
					if (i.delete(d.k.HIGHLIGHT), n.isCollapsed()) {
						const s = t.getBlockForKey(n.getEndKey()),
							r = s.getType();
						Object(d.q)(r) || Object(d.r)(r) || Object(d.t)(r) || i.forEach(e => o[e].isEnabled = !0), e.getCurrentInlineStyle().forEach(e => {
							e && o[e] && (o[e].isActive = !0)
						}), Object(u.i)(s) && (o[d.k.BOLD] = {
							isEnabled: !1,
							isActive: !1
						})
					} else {
						Object(h.e)(t, n).forEach(e => {
							i.delete(e), o[e] && (o[e].isActive = !0, o[e].isEnabled = !0)
						}), Object(p.a)(t, n, (e, s) => {
							if (!i.size) return !1;
							const c = n.getStartKey() === s ? n.getStartOffset() : 0,
								a = n.getEndKey() === s ? n.getEndOffset() : e.getLength(),
								l = e.getType(),
								u = e.getCharacterList();
							Object(d.q)(l) || Object(d.r)(l) || Object(d.t)(l) || Object(r.a)(u, {
								start: c,
								end: a
							}, (n, s, r, c) => {
								const a = n.getStyle(),
									l = n.getEntity(),
									d = l ? t.getEntity(l) : null;
								if (i.forEach(t => {
										const n = !o[t].isActive,
											s = Object(h.f)(a, e, d, t, n);
										s && s !== a && (o[t].isEnabled = !0, i.delete(t))
									}), !i.size) return !1
							})
						})
					}
					return o
				},
				g = e => {
					const t = {};
					return s()(d.b, n => t[n] = {
						isActive: !1,
						isEnabled: e
					}), t
				},
				f = Object(i.a)(e => {
					const t = e.getCurrentContent(),
						n = e.getSelection(),
						o = (e => {
							const t = e.getCurrentContent(),
								n = e.getSelection();
							let o = g(!0),
								r = null;
							if (n.isCollapsed()) r = t.getBlockForKey(n.getEndKey()).getType();
							else {
								let e = null;
								Object(p.a)(t, n, (t, n) => {
									const s = t.getType();
									return Object(d.t)(s) ? (o = g(!1), !1) : (null === e && (e = s), e !== s ? (e = null, !1) : void 0)
								}), r = e
							}
							return null !== r && ((Object(d.v)(r) || Object(d.t)(r)) && s()(o, e => {
								e.isEnabled = !1
							}), o[r].isActive = !0), o
						})(e);
					return {
						giphy: {
							isActive: !1,
							isEnabled: o[d.a].isEnabled && !Object(l.j)(t)
						},
						emote: {
							isActive: !1,
							isEnabled: Object(c.b)(t, n)
						},
						link: {
							isActive: !1,
							isEnabled: Object(a.e)(t, n)
						},
						blocks: o,
						styles: m(e)
					}
				}),
				b = e => {
					s()(e.blocks, e => {
						e.isEnabled = !1
					}), s()(e.styles, e => {
						e.isEnabled = !1
					}), e.link.isEnabled = !1
				}
		},
		"./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts": function(e, t, n) {
			"use strict";

			function o(e, t, n) {
				const o = t.getStartKey(),
					s = t.getEndKey();
				if (o === s) return void n(e.getBlockForKey(o), o);
				let r = !1;
				e.getBlockMap().forEach((e, t) => {
					if (t === o && (r = !0), !r || !e || !t) return;
					const i = n(e, t);
					return t !== s && i
				})
			}
			n.d(t, "a", (function() {
				return o
			}))
		},
		"./src/reddit/components/RichTextEditor/helpers/modifiers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return l
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./src/reddit/components/RichTextEditor/entity/cloneEntitiesInFragment.ts");

			function r(e, t) {
				const n = t.getStartKey();
				if (n !== t.getEndKey()) return;
				const o = e.getBlockForKey(n),
					r = t.getStartOffset(),
					i = t.getEndOffset(),
					c = r > 0 ? o.getEntityAt(r - 1) : null,
					a = o.getEntityAt(i);
				if (!c || !a || c !== a) return;
				const l = e.getEntity(a),
					d = o.getCharacterList().toSeq().skip(i).takeWhile(e => !!e && e.getEntity() === a).count(),
					[u, p] = Object(s.a)(e, o, l, i, i + d);
				return u.merge({
					blockMap: u.getBlockMap().set(o.getKey(), p)
				})
			}

			function i(e, t, n) {
				const s = r(e, t) || e;
				return o.Modifier.replaceWithFragment(s, t, n)
			}

			function c(e, t, n, s, i) {
				let c = e;
				return -1 !== n.indexOf("\n") && (c = r(e, t) || c), o.Modifier.replaceText(c, t, n, s, i)
			}

			function a(e, t, n, s, i) {
				let c = e;
				return -1 !== n.indexOf("\n") && (c = r(e, t) || c), o.Modifier.insertText(c, t, n, s, i)
			}

			function l(e, t) {
				const n = r(e, t) || e;
				return o.Modifier.splitBlock(n, t)
			}
		},
		"./src/reddit/components/RichTextEditor/helpers/sliceContiguousBlocks.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/lodash/forEach.js"),
				s = n.n(o);
			t.a = (e, t) => {
				const n = e.getBlocksAsArray(),
					o = t.getKey(),
					r = t.getType();
				let i = null,
					c = null,
					a = !1;
				if (s()(n, (e, t) => {
						if (a || e.getKey() !== o || (a = !0), e.getType() === r) null === i && (i = t), c = t;
						else {
							if (a) return !1;
							i = null, c = null
						}
					}), a) return c = c || 0, {
					start: i = i || 0,
					blocks: n.slice(i, c + 1)
				}
			}
		},
		"./src/reddit/components/RichTextEditor/helpers/styles.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return u
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "d", (function() {
				return f
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/immutable/dist/immutable.js"),
				r = n("./src/lib/forEachGroup/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				c = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				a = n("./src/reddit/components/RichTextEditor/table/helpers.ts"),
				l = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts");
			const d = Object(s.OrderedSet)([]),
				u = function(e, t, n, o) {
					let r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
					const l = t.getType();
					if (Object(c.q)(l) || Object(c.r)(l) || Object(c.t)(l)) return;
					if (o === c.k.BOLD && Object(a.i)(t)) return;
					const u = n ? n.getType() : null,
						p = u === i.a.SUBREDDIT_LINK || u === i.a.USER_LINK;
					return p && o !== c.k.SPOILER && o !== c.k.MONOSPACE || u === i.a.EMOTE ? void 0 : o === c.k.MONOSPACE || o === c.k.SPOILER ? r ? Object(s.OrderedSet)([o]) : d : (e.has(c.k.MONOSPACE) || e.has(c.k.SPOILER)) && r ? Object(s.OrderedSet)([o]) : !r || o !== c.k.SUPERSCRIPT && o !== c.k.SUBSCRIPT ? r ? e.add(o) : e.has(o) ? e.delete(o) : void 0 : e.delete(c.k.SUBSCRIPT).delete(c.k.SUPERSCRIPT).add(o)
				},
				p = (e, t) => {
					let n = null,
						o = !0;
					return Object(l.a)(e, t, (s, l) => {
						const d = s.getType(),
							u = Object(a.i)(s);
						if (u || (o = !1), Object(c.q)(d) || Object(c.r)(d) || Object(c.t)(d)) return !1;
						const p = t.getStartKey() === l ? t.getStartOffset() : 0,
							h = t.getEndKey() === l ? t.getEndOffset() : s.getLength(),
							m = s.getCharacterList();
						Object(r.a)(m, {
							start: p,
							end: h
						}, t => {
							const o = t.getEntity();
							if (o && e.getEntity(o).getType() === i.a.SUBREDDIT_LINK) return;
							let s = t.getStyle();
							return u && (s = s.add(c.k.BOLD)), null === n ? n = s.asMutable() : n.intersect(s), !(n && !n.size) && void 0
						})
					}), null === n ? [] : (o && n.delete(c.k.BOLD), n.toJS())
				},
				h = (e, t) => {
					const n = t.getCurrentContent(),
						s = t.getSelection();
					let i = n.getBlockMap();
					const a = -1 === p(n, s).indexOf(e);
					Object(l.a)(n, s, (t, l) => {
						if (!t || !l) return !1;
						const d = s.getStartKey() === l ? s.getStartOffset() : 0,
							p = s.getEndKey() === l ? s.getEndOffset() : t.getLength(),
							h = t.getCharacterList(),
							m = h.withMutations(s => {
								Object(r.a)(h, {
									start: d,
									end: p
								}, (r, i, l, d) => {
									const p = r.getStyle(),
										h = r.getEntity(),
										m = h ? n.getEntity(h) : null,
										g = u(p, t, m, e, a);
									if (g) {
										const e = ((e, t) => o.CharacterMetadata.create({
											style: t,
											entity: t.has(c.k.SPOILER) ? null : e.getEntity()
										}))(r, g);
										for (let t = l; t < d; t++) s.set(t, e)
									}
								})
							});
						if (m !== h) {
							const e = t.set("characterList", m);
							i = i.set(l, e)
						}
					});
					const d = n.merge({
						blockMap: i,
						selectionAfter: s
					});
					return o.EditorState.push(t, d, "change-inline-style")
				},
				m = (e, t) => {
					const n = t.getCurrentContent(),
						s = t.getSelection(),
						r = n.getBlockForKey(s.getStartKey()),
						i = r.getEntityAt(s.getStartOffset()),
						c = i ? n.getEntity(i) : null,
						a = t.getCurrentInlineStyle(),
						l = u(a, r, c, e, !a.has(e));
					let d = t;
					return l && (d = o.EditorState.setInlineStyleOverride(d, l)), d
				},
				g = e => o.EditorState.setInlineStyleOverride(e, d),
				f = (e, t) => {
					const n = e.getSelection(),
						o = t.getSelection();
					return n.getStartOffset() > 0 || n.getFocusKey() === o.getFocusKey() || e.getCurrentInlineStyle().isEmpty() ? e : g(e)
				}
		},
		"./src/reddit/components/RichTextEditor/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_3YZ-jFfccqhepgq1dDuLEv",
				container: "_3YZ-jFfccqhepgq1dDuLEv",
				FocusableContent: "_3wl1bRnSzxHkKJfvqakrNI",
				focusableContent: "_3wl1bRnSzxHkKJfvqakrNI",
				showSubmitButton: "_3Imp2y02BMA96sEJAe9M3M",
				mRedesign: "_2sl29I15jbNPrKiiB9kfVf",
				editorWrapper: "_2baJGEALPiEMZpWB2iWQs7",
				mExpanded: "_1UhKfcyzvaWRtDdXZmzg6D",
				userIcon: "_1wS6Q6S9RvAbzxaselfK2i",
				CurrentUserIcon: "_1RdaOAYbtM4Zwt3M_YE8kp",
				currentUserIcon: "_1RdaOAYbtM4Zwt3M_YE8kp",
				hasInitialHeight: "_35E-zXyMmfsLI7nv_sBvFL",
				hasInitialMinHeight: "_18GfdTZmF2EPjYSkBDE0WI",
				noBorder: "HXDWn-rmYOwqGcGtz9AKm",
				insetSubmitButton: "_3b2mbY1nb1R-z21ihISt7z",
				emptyContent: "_3cP1eCSI5AeGc6__VQ1axu",
				focusedContent: "_2O6bpyGivXLGxZ0LErKCzW"
			}
		},
		"./src/reddit/components/RichTextEditor/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = (n("./node_modules/draft-js/dist/Draft.css"), n("./node_modules/fbt/lib/FbtPublic.js")),
				r = n("./node_modules/lodash/debounce.js"),
				i = n.n(r),
				c = n("./node_modules/lodash/filter.js"),
				a = n.n(c),
				l = n("./node_modules/lodash/noop.js"),
				d = n.n(l),
				u = n("./node_modules/react/index.js"),
				p = n.n(u),
				h = n("./node_modules/react-redux/es/index.js"),
				m = n("./node_modules/reselect/es/index.js"),
				g = n("./node_modules/shallowequal/index.js"),
				f = n.n(g),
				b = n("./src/lib/classNames/index.ts"),
				y = n("./src/lib/fastdom/index.ts"),
				E = n("./src/lib/lessComponent.tsx"),
				S = n("./src/lib/linkMatchers/customLinks.ts"),
				x = n("./src/lib/logs/console.ts"),
				C = n("./src/telemetry/models/Media.ts"),
				O = n("./src/realtime/GQLSubscription/async.tsx"),
				k = n("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				T = n("./src/reddit/actions/postCreation/mediaUpload.ts"),
				v = n("./src/reddit/featureFlags/index.ts"),
				j = n("./src/reddit/helpers/trackers/postComposer.ts"),
				_ = n("./src/reddit/models/PostCreationForm/index.ts"),
				R = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const w = {
				BREAK_HEADER_ENTITY: "BREAK_HEADER_ENTITY",
				CONVERT_TO_LIST_ON_SPACE: "CONVERT_TO_LIST_ON_SPACE",
				EXEC_TABLE_ON_ENTER_HANDLER: "EXEC_TABLE_ON_ENTER_HANDLER",
				INSERT_LINE_BREAK: "INSERT_LINE_BREAK",
				LINKIFY_ON_ENTER: "LINKIFY_ON_ENTER",
				LINKIFY_ON_SPACE: "LINKIFY_ON_SPACE",
				MAKE_PLAIN_BLOCK: "MAKE_PLAIN_BLOCK",
				OPEN_LINK_TOOLTIP: "OPEN_LINK_TOOLTIP",
				REDUCE_LIST_INDENT: "REDUCE_LIST_INDENT",
				REMOVE_EXTRA_LIST_ITEM: "REMOVE_EXTRA_LIST_ITEM",
				RESET_CURRENT_AND_PREVIOUS_BLOCKS: "RESET_CURRENT_AND_PREVIOUS_BLOCKS",
				SUBMIT: "SUBMIT"
			};
			const B = e => {
					const t = e.getCurrentContent().getBlockMap();
					if (t.size > 2 || (e => !!e.reduce((function() {
							let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
								t = arguments.length > 1 ? arguments[1] : void 0;
							return e + t.getLength()
						}), 0))(t) || (e => !!e.find(e => Object(R.o)(e.getType())))(t)) return null; {
						const n = e.getSelection();
						if (n.isCollapsed() && n.getFocusKey() === t.first().getKey()) return n.getFocusKey()
					}
				},
				I = e => {
					const t = e.getCharacterList().map(e => o.CharacterMetadata.create({
						entity: e.getEntity()
					}));
					return e.set("characterList", t)
				};
			var A = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				K = n("./src/reddit/components/RichTextEditor/constants/draftEditorCommands.ts"),
				M = n("./node_modules/lodash/escape.js"),
				L = n.n(M),
				N = n("./src/reddit/components/RichTextEditor/media/helpers.ts"),
				D = n("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				F = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				P = n("./node_modules/immutable/dist/immutable.js"),
				U = n("./src/reddit/helpers/dom/index.ts"),
				H = n("./node_modules/lodash/chunk.js"),
				W = n.n(H),
				z = n("./node_modules/lodash/flatten.js"),
				q = n.n(z),
				V = n("./node_modules/lodash/takeWhile.js"),
				G = n.n(V),
				Y = n("./src/reddit/components/RichTextEditor/helpers/modifiers.ts"),
				Q = n("./src/reddit/components/RichTextEditor/table/helpers.ts"),
				J = n("./node_modules/lodash/last.js"),
				X = n.n(J),
				Z = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				$ = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts"),
				ee = n("./node_modules/lodash/find.js"),
				te = n.n(ee);
			var ne = (e, t) => {
				const n = e.getSelection(),
					s = e.getCurrentContent(),
					r = s.getBlockForKey(n.getAnchorKey()),
					i = s.getBlockForKey(n.getFocusKey()),
					[c, a] = Object(Q.e)(s, r, i);
				if (!c || c !== a) return e;
				const l = Object(Q.g)(r),
					d = Object(Q.g)(i),
					{
						blocks: u,
						start: p
					} = c,
					{
						colCount: h
					} = d,
					m = u.length / h,
					{
						minCol: g,
						minRow: f,
						maxCol: b,
						maxRow: y
					} = Object(Q.f)(l, d),
					E = u.filter(e => {
						const {
							rowIndex: n,
							colIndex: o
						} = Object(Q.g)(e);
						return "rows" === t ? !(f <= n && n <= y) : !(g <= o && o <= b)
					});
				E.sort(Q.b);
				const S = "rows" === t ? h : E.length / m,
					x = q()(Object(Q.d)(W()(E, S))),
					C = s.getBlocksAsArray(),
					O = [...C.slice(0, p), ...x, ...C.slice(p + u.length)],
					k = s.merge({
						blockMap: o.BlockMapBuilder.createFromArray(O)
					}),
					T = {
						colIndex: g,
						rowIndex: f
					};
				let v = te()(x, e => Object(Q.h)(T, Object(Q.g)(e)));
				v || (v = x.length ? x[x.length - 1] : C[p > 0 ? p - 1 : 0]);
				const j = o.SelectionState.createEmpty(v.getKey()).merge({
					focusOffset: v.getLength(),
					anchorOffset: v.getLength()
				});
				let _ = o.EditorState.push(e, k, Z.e);
				return _ = o.EditorState.forceSelection(_, j)
			};
			var oe = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const n = e.getSelection();
				if (n.isCollapsed()) return;
				if (n.getStartKey() === n.getEndKey() && !t) return;
				const s = e.getCurrentContent(),
					r = s.getBlockForKey(n.getAnchorKey()),
					i = s.getBlockForKey(n.getFocusKey()),
					[c, a] = Object(Q.e)(s, r, i);
				if (!c || c !== a) return;
				const l = {};
				let d = n;
				if (r === i) {
					const e = Object(Q.n)(i, 0, n.getStartOffset()),
						t = Object(Q.n)(i, n.getEndOffset());
					l[i.getKey()] = Object(Q.j)(i, [e, t]), d = n
				} else {
					if (c.blocks[0].getKey() === n.getStartKey() && X()(c.blocks).getKey() === n.getEndKey()) return ne(e, "rows");
					Object($.a)(s, n, (e, t) => {
						l[t] = Object(Q.n)(e, 0, 0)
					}), d = n.merge({
						anchorOffset: 0,
						focusOffset: 0
					})
				}
				const u = s.merge({
					blockMap: s.getBlockMap().merge(l),
					selectionAfter: d
				});
				return o.EditorState.push(e, u, Z.f)
			};
			const se = (e, t, n, o) => {
					const {
						htmlParts: s
					} = t;
					e.forEach((e, r) => {
						s.push(`<${n} ${o[r]} style="margin: 0px; padding: 4px 9px; border: 1px solid rgb(229, 227, 218);">`), xe(e, t), s.push(`</${n}>`)
					})
				},
				re = e => {
					const t = e[0],
						n = e[e.length - 1],
						o = [...e].sort(Q.b),
						{
							minCol: s,
							maxCol: r
						} = Object(Q.f)(Object(Q.g)(t), Object(Q.g)(n)),
						i = r - s + 1;
					return Object(Q.d)(W()(o, i))
				},
				ie = (e, t, n) => {
					n ? xe(e[0], t) : ((e, t) => {
						const {
							editor: n,
							htmlParts: o
						} = t, s = n.getEditorKey(), r = e[0].map(e => {
							const {
								alignment: t
							} = Object(Q.g)(e);
							return t ? `align="${Q.a[t]}"` : ""
						}), [i, ...c] = e;
						o.push(`\n    <table data-editor="${s}">\n      <thead>\n        <tr>`), se(i, t, "th", r), o.push("\n        </tr>\n      </thead>\n      <tbody>"), c.forEach(e => {
							o.push("\n        <tr>"), se(e, t, "td", r), o.push("\n        </tr>")
						}), o.push("\n      </tbody>\n    </table>")
					})(re(e), t)
				},
				ce = (e, t, n) => {
					n ? t.textParts.push(ke(e[0], t)) : ((e, t) => {
						const {
							textParts: n
						} = t;
						e.forEach(e => {
							n.push(e.map(e => ke(e, t)).join(" "))
						})
					})(re(e), t)
				},
				ae = e => {
					const {
						processed: t,
						remaining: n
					} = e, o = [];
					for (; n.length;) {
						const e = n[0];
						if (!Object(R.v)(e.getType())) break;
						o.push(n.shift())
					}
					const s = !n.length && !t.length,
						r = 1 === o.length && s;
					ie(o, e, r), ce(o, e, r), ((e, t, n, o) => {
						if (n)
							if (o) {
								const n = e[0].merge({
									data: Object(P.Map)(),
									type: R.n
								});
								t.blocksParts = [n]
							} else t.blocksParts = q()(re(e))
					})(o, e, s, r), t.push(...o)
				},
				le = e => oe(e, !0),
				de = (e, t, n) => {
					const s = Object(R.v)(n.first().getType()),
						r = Object(R.v)(n.last().getType()),
						i = e.getBlockForKey(t.getAnchorKey()),
						c = e.getBlockForKey(t.getFocusKey()),
						[a, l] = Object(Q.e)(e, i, c);
					return a && a === l ? ((e, t, n, s) => {
						const r = Object(R.v)(s.first().getType()),
							i = e.getBlockForKey(t.getAnchorKey()),
							c = e.getBlockForKey(t.getFocusKey()),
							{
								blocks: a,
								start: l
							} = n;
						a.sort(Q.b);
						const d = Object(Q.g)(a[0]);
						let {
							colCount: u
						} = d;
						const p = W()(a, u);
						let h = p.length;
						const {
							minRow: m,
							minCol: g
						} = Object(Q.f)(Object(Q.g)(i), Object(Q.g)(c)), f = s.toArray();
						if (r) {
							const n = G()(f, e => Object(R.v)(e.getType()));
							n.sort(Q.b);
							const s = Object(Q.g)(n[0]).colCount,
								r = W()(n, s),
								i = r.length,
								c = m + i - 1,
								d = g + s - 1;
							if (n.length !== i * s) throw new Error("Invalid table fragment!");
							if (d >= u && p.forEach(e => {
									e.push(...Object(Q.l)(d - u + 1, 1))
								}), u = p[0].length, c >= h) {
								const e = W()(Object(Q.l)(u, c - h + 1), u);
								p.push(...e)
							}
							h = p.length;
							for (let e = 0; e < i; e++)
								for (let t = 0; t < s; t++) {
									const n = m + e,
										o = g + t,
										s = r[e][t];
									p[n][o] = s.set("key", p[n][o].getKey())
								}
							const b = Object(Q.d)(p),
								y = q()(b),
								E = e.getBlocksAsArray(),
								S = [...E.slice(0, l), ...y, ...E.slice(l + a.length)],
								x = Object(Q.o)(t, p[m][g], p[c][d]);
							return e.merge({
								blockMap: o.BlockMapBuilder.createFromArray(S),
								selectionAfter: x
							})
						} {
							const n = p[m][g],
								s = Object(Q.j)(n, f, " ");
							let r = t;
							return t.getStartKey() !== t.getEndKey() && (r = Object(Q.o)(t, n, n)), Y.c(e, r, o.BlockMapBuilder.createFromArray([s]))
						}
					})(e, t, a, n) : a || l || !s && !r ? void 0 : ((e, t, n) => {
						const s = Object(R.v)(n.first().getType()),
							r = Object(R.v)(n.last().getType()),
							i = n.toArray();
						s && i.unshift(Object(D.h)()), r && i.push(Object(D.h)());
						const c = o.BlockMapBuilder.createFromArray(i);
						return Y.c(e, t, c)
					})(e, t, n)
				};
			var ue = n("./node_modules/draft-js/lib/removeEntitiesAtEdges.js"),
				pe = n.n(ue);
			var he = (e, t) => {
				const n = t.getStartKey(),
					o = t.getStartOffset(),
					s = t.getEndKey(),
					r = t.getEndOffset(),
					i = pe()(e, t).getBlockMap(),
					c = i.keySeq(),
					a = c.indexOf(n),
					l = c.indexOf(s) + 1;
				return i.slice(a, l).map((e, t) => {
					const i = e.getText(),
						c = e.getCharacterList();
					return n === s ? e.merge({
						text: i.slice(o, r),
						characterList: c.slice(o, r)
					}) : t === n ? e.merge({
						text: i.slice(o),
						characterList: c.slice(o)
					}) : t === s ? e.merge({
						text: i.slice(0, r),
						characterList: c.slice(0, r)
					}) : e
				})
			};
			const me = (e, t) => {
					const n = {
							children: [],
							parentItem: t,
							type: e.getType()
						},
						o = {
							block: e,
							parentList: n
						};
					return n.children.push(o), t && (t.childrenLists = t.childrenLists || [], t.childrenLists.push(n)), {
						list: n,
						item: o
					}
				},
				ge = (e, t) => {
					const {
						type: n,
						children: o
					} = e, {
						htmlParts: s
					} = t, r = n === R.b.ORDERED_LIST ? "ol" : "ul";
					s.push(`<${r}>`), o.forEach(e => ((e, t) => {
						const {
							block: n,
							childrenLists: o
						} = e, {
							htmlParts: s
						} = t;
						s.push("<li>"), xe(n, t, !0), o && o.forEach(e => ge(e, t)), s.push("</li>")
					})(e, t)), s.push(`</${r}>`)
				},
				fe = (e, t) => {
					const {
						children: n
					} = e;
					n.forEach((e, n) => be(e, n, t))
				},
				be = (e, t, n) => {
					const {
						block: o,
						childrenLists: s
					} = e, {
						textParts: r
					} = n, i = " ".repeat(o.getDepth()), c = o.getType() === R.b.ORDERED_LIST ? `${t+1}.` : "-", a = ke(o, n);
					r.push(`${i}${c} ${a}`), s && s.forEach(e => fe(e, n))
				},
				ye = e => {
					const {
						remaining: t
					} = e, n = t.shift(), o = n.getType(), s = [n];
					for (; t.length;) {
						const e = t[0],
							n = e.getType();
						if (!Object(R.s)(n)) break;
						if (e.getDepth() > 0 || n === R.b.UNORDERED_LIST) s.push(t.shift());
						else {
							if (n !== o) break;
							if (s.some(e => e.getType() !== R.b.ORDERED_LIST)) break;
							s.push(t.shift())
						}
					}
					const r = (e => {
						const t = e[0],
							n = {
								type: t.getType(),
								children: []
							};
						let o, s = n,
							r = t.getDepth();
						return e.forEach(e => {
							const t = e.getType(),
								n = e.getDepth();
							if (n > r) {
								const t = me(e, o);
								s = t.list, o = t.item, r = n
							} else {
								for (; r !== n;) s = s.parentItem ? s.parentItem.parentList : s, r--;
								if (t === s.type) o = {
									block: e,
									parentList: s
								}, s.children.push(o);
								else {
									const t = me(e, s.parentItem);
									s = t.list, o = t.item
								}
							}
						}), n
					})(s);
					ge(r, e), fe(r, e), e.processed.push(...s)
				};
			var Ee = (e, t) => {
				const n = e.toArray().filter(e => !Object(R.t)(e.getType()));
				if (1 === n.length) {
					n[0].getType() !== R.n && n.push(new o.ContentBlock({
						key: Object(o.genKey)(),
						type: R.n
					}))
				}
				const s = o.ContentState.createFromBlockArray(n),
					r = JSON.stringify(Object(o.convertToRaw)(s));
				return `<div data-reddit-rtjson="${L()(r)}">${t}</div>`
			};
			const Se = () => !!window.clipboardData,
				xe = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const {
						htmlParts: o
					} = t, s = Ce(e, t);
					s && s.forEach(e => o.push(n ? e.innerHTML : e.outerHTML))
				},
				Ce = (e, t) => {
					const {
						selection: n,
						editor: o
					} = t, s = n.getStartKey(), r = n.getEndKey(), i = e.getKey(), c = o.refs.editor, a = Object(D.d)(i, c);
					return a ? i === s || i === r ? Object(U.c)(a) : [a] : null
				};
			var Oe = (e, t, n) => {
				const s = e.getCurrentContent(),
					r = e.getSelection(),
					i = we(e) || he(s, r);
				if (!i || !i.count()) return;
				const c = i.toArray(),
					a = {
						editor: t,
						editorState: e,
						selection: r,
						remaining: c,
						processed: [],
						htmlParts: [],
						textParts: [],
						blocksParts: [...c]
					};
				for (; a.remaining.length;) {
					const e = a.remaining[0].getType();
					switch (!0) {
						case Object(R.t)(e):
							Re(a);
							break;
						case Object(R.s)(e):
							ye(a);
							break;
						case Object(R.v)(e):
							ae(a);
							break;
						default:
							Te(a)
					}
				}
				const l = a.textParts.join("\n"),
					d = (e => Object(P.OrderedMap)(e.map(e => {
						const t = Object(o.genKey)();
						return [t, e.set("key", t)]
					})))(a.blocksParts);
				return ((e, t) => {
					let {
						html: n,
						text: o
					} = t;
					Se() ? window.clipboardData.setData("text", o) : (n && e.clipboardData.setData("text/html", n), e.clipboardData.setData("text/plain", o))
				})(n, {
					html: Ee(d, a.htmlParts.join("")),
					text: l
				}), n.stopPropagation(), n.preventDefault(), t.setClipboard(d), d
			};
			const ke = (e, t) => {
					const n = e.getText(),
						o = t.editorState.getCurrentContent(),
						s = [];
					let r = -1;
					return e.getCharacterList().forEach((e, t) => {
						const i = e && e.getEntity();
						if (i && void 0 !== t) {
							const e = o.getEntity(i);
							e.getType() === F.a.EMOTE && (s.push(n.substring(r + 1, t)), s.push(`:${e.getData().id}:`), r = t)
						}
					}), s.push(n.substring(r + 1, n.length)), s.join("")
				},
				Te = e => {
					const t = e.remaining.shift();
					((e, t) => xe(e, t))(t, e), ((e, t) => {
						t.textParts.push(ke(e, t))
					})(t, e), e.processed.push(t)
				},
				ve = (e, t) => {
					const n = e.first(),
						s = e.last();
					let r = e;
					if (Object(R.u)(n.getType()) ? r = r.set(r.keySeq().first(), n.merge({
							type: R.n
						})) : Object(R.o)(n.getType()) && (r = o.BlockMapBuilder.createFromArray([Object(D.h)(), ...r.toArray()])), Object(R.u)(s.getType()) || !Object(N.q)(t)) {
						const e = Object(D.h)();
						r = r.set(e.getKey(), e)
					} else if (Object(R.o)(s.getType())) {
						const e = Object(D.h)().merge({
							type: R.j
						});
						r = r.set(e.getKey(), e)
					}
					return r
				},
				je = (e, t, n) => {
					const o = e.getBlockForKey(t.getStartKey());
					if (Object(R.u)(o.getType())) {
						const o = n.first(),
							s = n.set(n.keySeq().first(), Object(D.h)(o.getKey(), o.getText()).merge({
								type: R.j
							}));
						return Y.c(e, t, s)
					}
				},
				_e = (e, t, n) => {
					const o = ((e, t, n) => {
						const o = t ? t.getText() : "";
						return `<span data-editor="${n}">${L()(o)}</span>`
					})(0, t, n.editor.getEditorKey());
					n.htmlParts.push(o)
				},
				Re = e => {
					const {
						remaining: t
					} = e, n = t.shift(), o = t[0] && Object(R.u)(t[0].getType()) ? t.shift() : void 0;
					_e(0, o, e), ((e, t) => {
						const n = e ? ke(e, t) : "";
						t.textParts.push(n)
					})(o, e), e.processed.push(n), o && e.processed.push(o)
				},
				we = e => {
					const t = e.getSelection(),
						n = t.getFocusKey();
					if (n !== t.getAnchorKey()) return;
					const s = e.getCurrentContent(),
						r = s.getBlockForKey(n);
					if (Object(R.o)(r.getType())) {
						const e = [r],
							t = s.getBlockAfter(r.getKey());
						return t && Object(R.u)(t.getType()) && e.push(t), o.ContentState.createFromBlockArray(e).getBlockMap()
					}
				},
				Be = e => {
					const t = we(e);
					if (t) return Object(N.d)(e, t.first().getKey())
				},
				Ie = e => {
					const t = e.getSelection();
					let n = e.getCurrentContent();
					const s = n.getBlockForKey(t.getStartKey()),
						r = n.getBlockForKey(t.getEndKey());
					if (Object(R.t)(s.getType()) || Object(R.t)(r.getType())) {
						if (t.isCollapsed())
							if (Object(R.u)(s.getType())) n = Y.d(n, t), n = o.Modifier.setBlockType(n, n.getSelectionAfter(), R.n);
							else if (Object(R.o)(s.getType())) {
							let s = n.getBlockAfter(t.getStartKey());
							return s || (s = (e = Object(N.b)(e, t.getStartKey(), D.a.after)).getCurrentContent().getBlockAfter(t.getStartKey())), o.EditorState.forceSelection(e, Object(D.b)(s, !0))
						}
						return o.EditorState.push(e, n, "split-block")
					}
				},
				Ae = (e, t) => {
					const n = e.getSelection(),
						s = e.getCurrentContent(),
						r = "up" === t ? n.getStartKey() : n.getEndKey(),
						i = s.getBlockForKey(r);
					if (!Object(R.o)(i.getType())) return;
					const c = "up" === t ? s.getBlockBefore(r) : s.getBlockAfter(r);
					return c ? o.EditorState.forceSelection(e, Object(D.b)(c, !0)) : Object(N.b)(e, r, "up" === t ? D.a.before : D.a.after)
				},
				Ke = (e, t) => {
					if (e.shiftKey) return;
					const n = Ae(t, "up");
					return n && e.preventDefault(), n
				},
				Me = (e, t) => {
					if (e.shiftKey) return;
					const n = Ae(t, "down");
					return n && e.preventDefault(), n
				},
				Le = (e, t) => {
					const n = e.getSelection();
					return n.isCollapsed() && 0 === n.getStartOffset() && Object(R.o)(e.getCurrentContent().getBlockForKey(n.getStartKey()).getType())
				};
			var Ne = (e, t) => {
					if (!Object(N.q)(t)) return e;
					const n = e.getSelection(),
						o = e.getCurrentContent(),
						s = o.getBlockForKey(n.getStartKey());
					if (Object(R.o)(s.getType())) {
						const t = o.getBlockAfter(s.getKey());
						if (!t || !Object(R.u)(t.getType())) return Object(N.d)(e, s.getKey(), !1)
					}
					return e
				},
				De = n("./src/reddit/actions/modal.ts"),
				Fe = n("./src/reddit/actions/upload.ts"),
				Pe = n("./src/reddit/components/ThumbnailSelector/index.tsx"),
				Ue = e => null,
				He = n("./src/reddit/helpers/media/index.ts"),
				We = n("./src/reddit/helpers/richTextEditor/index.ts"),
				ze = n("./src/reddit/selectors/activeModalId.ts");
			const qe = "application/x-reddit-rte-block";
			var Ve = n("./src/reddit/models/Upload/index.ts"),
				Ge = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/ImagePreview/index.m.less"),
				Ye = n.n(Ge);
			const Qe = E.a.img("Img", Ye.a);
			var Je = E.a.wrapped(e => {
					const {
						className: t,
						url: n
					} = e;
					return p.a.createElement("div", {
						className: t
					}, p.a.createElement(Qe, {
						draggable: !1,
						src: n
					}))
				}, "Component", Ye.a),
				Xe = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/Placeholder/index.m.less"),
				Ze = n.n(Xe);
			const $e = E.a.div("Message", Ze.a);
			var et = E.a.wrapped(e => {
					const {
						className: t,
						isImage: n
					} = e;
					return p.a.createElement("div", {
						className: t
					}, p.a.createElement($e, null, n ? s.fbt._("Processing video...", null, {
						hk: "3g3QoU"
					}) : s.fbt._("Processing image...", null, {
						hk: "1xoNB3"
					})))
				}, "Component", Ze.a),
				tt = n("./src/lib/formatApiError/index.ts"),
				nt = n("./src/reddit/components/ProgressBar/index.tsx"),
				ot = n("./src/reddit/controls/Button/index.tsx"),
				st = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/StatusBar/index.m.less"),
				rt = n.n(st);
			const it = E.a.div("ControlRow", rt.a),
				ct = E.a.wrapped(ot.t, "Button", rt.a),
				at = E.a.wrapped(ot.t, "ErrButton", rt.a),
				lt = E.a.div("Status", rt.a),
				dt = E.a.wrapped(nt.a, "ProgressBar", rt.a),
				ut = E.a.div("ErrorLine", rt.a),
				pt = e => t => {
					t.stopPropagation(), e(t)
				};
			var ht = E.a.wrapped(e => {
					const {
						upload: t
					} = e, n = pt(e.onCancel), o = pt(e.onRetry), r = pt(e.onRemove), {
						status: i,
						progress: c
					} = t, a = c && c.percent || 0, l = i === Ve.a.FAILED || i === Ve.a.CANCELED, d = (e => {
						const {
							status: t,
							progress: n
						} = e;
						return t === Ve.a.CANCELED ? s.fbt._("Upload was canceled", null, {
							hk: "71azQ"
						}) : t === Ve.a.FAILED ? s.fbt._("Upload failed: {errorText}", [s.fbt._param("errorText", Object(tt.a)(e.error))], {
							hk: "3NGGzE"
						}) : 100 === (n && n.percent || 0) ? s.fbt._("Success!", null, {
							hk: "3622uh"
						}) : s.fbt._("Uploading: {fileName}", [s.fbt._param("fileName", e.file.name)], {
							hk: "H7qzO"
						})
					})(t);
					return p.a.createElement("div", {
						className: e.className
					}, l ? p.a.createElement(ut, null) : p.a.createElement(dt, {
						innerBarClassName: rt.a.ProgressBarInner,
						percent: a
					}), p.a.createElement(it, null, p.a.createElement(lt, {
						className: l ? rt.a.hasError : void 0,
						title: l ? d : void 0
					}, d), p.a.createElement("div", {
						className: rt.a.ButtonsContainer
					}, l ? [p.a.createElement(at, {
						kind: ot.b.Button,
						priority: ot.c.Plain,
						key: "remove",
						onClick: r
					}, s.fbt._("Remove", null, {
						hk: "3tYl0U"
					})), p.a.createElement(at, {
						kind: ot.b.Button,
						priority: ot.c.Plain,
						key: "retry",
						onClick: o
					}, s.fbt._("Retry", null, {
						hk: "3sO2HB"
					}))] : p.a.createElement(ct, {
						kind: ot.b.Button,
						priority: ot.c.Plain,
						disabled: 100 === a,
						onClick: n
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})))))
				}, "Component", rt.a),
				mt = n("./node_modules/react-motion/lib/react-motion.js"),
				gt = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				ft = n("./src/reddit/components/PlayButton/index.tsx"),
				bt = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/VideoPreview/index.m.less"),
				yt = n.n(bt);
			const Et = {
					stiffness: 60,
					damping: 20
				},
				St = [{
					key: "video",
					style: {
						opacity: Object(mt.spring)(1, Et)
					}
				}],
				xt = E.a.wrapped(e => {
					const {
						autoPlay: t = !1,
						className: n,
						showControls: o,
						shouldPause: s,
						style: r,
						dashUrl: i,
						hlsUrl: c,
						otherUrl: a
					} = e;
					return p.a.createElement("div", {
						className: n,
						style: r
					}, p.a.createElement(gt.b, {
						autoPlay: t,
						shouldIgnoreAutoplayPref: !0,
						shouldLoad: !1,
						shouldPause: s,
						isGif: !1,
						hlsSource: c,
						mpegDashSource: i,
						otherSource: a,
						showSettingsIcon: !1,
						showControlBar: o,
						playerClickPlay: !1,
						hideUntilLoaded: !0
					}))
				}, "VideoPlayer", yt.a),
				Ct = E.a.img("PosterImg", yt.a),
				Ot = E.a.wrapped(e => {
					const {
						className: t,
						onPlayButtonClick: n,
						url: o,
						showPlayButton: s
					} = e;
					return p.a.createElement("div", {
						className: t
					}, p.a.createElement(Ct, {
						draggable: !1,
						src: o
					}), s && p.a.createElement(ft.a, {
						className: yt.a.playButton,
						onClick: n
					}))
				}, "Poster", yt.a);
			class kt extends p.a.Component {
				constructor(e) {
					super(e), this.onPlayButtonClick = () => {
						this.setState({
							showVideo: !0
						})
					}, this.willEnter = () => ({
						opacity: 0
					}), this.willLeave = () => ({
						opacity: Object(mt.spring)(0, Et)
					}), this.didLeave = () => {
						this.setState({
							showVideo: !1
						})
					}, this.state = {
						showVideo: !1
					}
				}
				renderVideo() {
					const {
						props: e
					} = this;
					return p.a.createElement("div", {
						className: e.className
					}, p.a.createElement(xt, {
						dashUrl: e.dashUrl,
						hlsUrl: e.hlsUrl,
						showControls: e.isUploaded && e.isSelected,
						shouldPause: !e.isSelected || void 0
					}))
				}
				render() {
					const {
						className: e,
						isSelected: t,
						posterUrl: n,
						dashUrl: o,
						hlsUrl: s,
						otherUrl: r
					} = this.props;
					if (!n) return this.renderVideo();
					const {
						showVideo: i
					} = this.state, c = !!(o || s || r);
					return p.a.createElement(mt.TransitionMotion, {
						defaultStyles: [],
						styles: t && i && c ? St : [],
						willEnter: this.willEnter,
						willLeave: this.willLeave,
						didLeave: this.didLeave
					}, c => p.a.createElement("div", {
						className: e
					}, c.map(e => p.a.createElement(xt, {
						key: e.key,
						autoPlay: !0,
						style: e.style,
						otherUrl: r,
						dashUrl: o,
						hlsUrl: s,
						showControls: !0,
						shouldPause: !t || void 0
					})), p.a.createElement(Ot, {
						url: n,
						showPlayButton: !i || !t,
						onPlayButtonClick: this.onPlayButtonClick
					})))
				}
			}
			var Tt = E.a.wrapped(kt, "Component", yt.a),
				vt = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/index.m.less"),
				jt = n.n(vt);

			function _t() {
				return (_t = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var Rt = e => {
					const {
						alignCenter: t,
						isSelected: n,
						onCancel: o,
						onRetry: s,
						onRemove: r,
						upload: i,
						mediaAsset: c,
						thumbnail: a,
						renderSmallMedia: l,
						...d
					} = e;
					let u = !1;
					if (i) u = "image" === Object(He.g)(i.metadata.mimetype);
					else {
						if (!c) return null;
						u = c.type === N.a.Image || c.type === N.a.AnimatedImage
					}
					const h = i ? i.metadata.height : c.height,
						m = !i || i.status === Ve.a.SUCCESS,
						g = u && !!h && h < 104,
						f = !h;
					return p.a.createElement("div", _t({
						className: Object(b.a)(jt.a.container, {
							[jt.a.alignCenter]: t,
							[jt.a.isCompact]: g,
							[jt.a.isUploaded]: m,
							[jt.a.isSelected]: n
						})
					}, d), f ? p.a.createElement(et, {
						className: jt.a.placeholder,
						isImage: u
					}) : u ? p.a.createElement(Je, {
						className: Object(b.a)(jt.a.imagePreview, {
							[jt.a.renderSmallMedia]: l
						}),
						url: i ? i.metadata.localUrl : c.imageUrl
					}) : p.a.createElement(Tt, {
						className: jt.a.videoPreview,
						dashUrl: c ? c.dashUrl : void 0,
						hlsUrl: c ? c.hlsUrl : void 0,
						isSelected: n,
						isUploaded: m,
						otherUrl: i ? i.metadata.localUrl : void 0,
						posterUrl: a ? a.url : c.posterUrl
					}), i && p.a.createElement(ht, {
						className: jt.a.statusBar,
						onCancel: o,
						onRemove: r,
						onRetry: s,
						upload: i
					}))
				},
				wt = n("./src/reddit/components/RichTextEditor/media/MediaBlock/SelectionHook/index.m.less"),
				Bt = n.n(wt);

			function It() {
				return (It = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const At = E.a.div("HiddenDiv", Bt.a);
			var Kt = e => {
					let {
						elementRef: t,
						...n
					} = e;
					return p.a.createElement(At, It({}, n, {
						innerRef: t
					}), p.a.createElement("br", null))
				},
				Mt = n("./src/reddit/components/MakeGifToggle/index.tsx"),
				Lt = n("./src/reddit/icons/svgs/ThumbnailSelect/index.tsx"),
				Nt = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				Dt = n("./src/reddit/layout/row/Inline/index.tsx"),
				Ft = n("./src/reddit/components/RichTextEditor/Toolbar/index.tsx"),
				Pt = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				Ut = n("./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.tsx"),
				Ht = n("./src/reddit/components/RichTextEditor/media/MediaBlock/Toolbar/index.m.less"),
				Wt = n.n(Ht);
			const zt = E.a.wrapped(Pt.a, "FormatterButton", Wt.a),
				qt = Object(Ut.f)(Nt.b),
				Vt = Object(Ut.f)(Lt.a),
				Gt = E.a.wrapped(Dt.a, "ToolbarContent", Wt.a);
			var Yt = e => {
					const {
						alignCenter: t,
						block: n,
						editorState: o,
						onChange: r,
						showVideoControls: i
					} = e, c = n.getKey(), {
						makeGif: a = !1
					} = Object(N.h)(n) || {};
					return p.a.createElement("div", {
						className: Object(b.a)(Wt.a.container, {
							[Wt.a.alignCenter]: t
						})
					}, p.a.createElement(Gt, {
						className: Object(b.a)(Wt.a.content, {
							[Wt.a.multiButtonToolbarContent]: i
						})
					}, i && p.a.createElement(Mt.a, {
						isCompact: !0,
						key: "make-gif",
						on: a,
						onClick: () => r(Object(N.r)(o, c, {
							makeGif: !a
						}))
					}), i && e.showThumbnailButton && p.a.createElement(zt, {
						Icon: Vt,
						onClick: e.onThumbnailButtonClick,
						tooltip: s.fbt._("Choose thumbnail", null, {
							hk: "2gKwDF"
						}),
						tooltipBelow: !0
					}), i && p.a.createElement(Ft.c, null), p.a.createElement(zt, {
						Icon: qt,
						onClick: () => r(Object(N.d)(o, c)),
						tooltip: s.fbt._("Remove", null, {
							hk: "3tYl0U"
						}),
						tooltipBelow: !0
					})))
				},
				Qt = n("./src/reddit/components/RichTextEditor/media/MediaBlock/index.m.less"),
				Jt = n.n(Qt);
			const Xt = e => `RTE_VIDEO_THUMBNAIL_SELECTOR_${e.getKey()}`,
				Zt = Object(m.a)(e => e.uploads, (e, t) => {
					const n = Object(N.h)(t.block);
					return n && n.uploadInfo && n.uploadInfo.uploadKey
				}, (e, t) => t ? e[t] : void 0),
				$t = Object(h.b)((e, t) => ({
					upload: Zt(e, t),
					isThumbnailSelectorOpen: Object(ze.a)(e) === Xt(t.block),
					isRteVideoPosterEnabled: v.d.rteVideoPoster(e)
				}), (e, t) => ({
					onCancelUpload: t => e(Fe.i(t, !1)),
					toggleVideoThumbnailsSelector: () => e(Object(De.i)(Xt(t.block)))
				})),
				en = E.a.div("MediaContainer", Jt.a),
				tn = E.a.div("Container", Jt.a);
			class nn extends p.a.Component {
				constructor(e) {
					super(e), this.onNativeSelectionChange = () => {
						const e = window.getSelection();
						if (0 === e.rangeCount) return;
						const t = e.getRangeAt(0),
							{
								commonAncestorContainer: n
							} = t;
						this.state.active ? this.rootContainer.contains(n) || this.setState({
							active: !1
						}) : this.rootContainer && this.rootContainer.contains(n) && this.selectBlock(), this.setState({
							isInSelection: Object(U.h)(t, this.rootContainer)
						})
					}, this.selectBlock = () => {
						const e = document.createRange();
						e.selectNodeContents(this.rootContainer);
						const t = window.getSelection();
						t.removeAllRanges(), t.addRange(e), this.setState({
							active: !0
						})
					}, this.isSelected = () => {
						const e = this.props.blockProps.getEditorState().getSelection(),
							t = this.props.block.getKey();
						return this.state.active && Object(N.n)(e, t)
					}, this.onRetryUpload = () => {
						const {
							upload: e
						} = this.props;
						e && this.props.blockProps.onRetryUpload(e.key)
					}, this.onMediaViewClickCapture = e => {
						this.state.active || this.selectBlock()
					}, this.onDragStart = e => {
						e.dataTransfer.effectAllowed = "move", e.dataTransfer.setData(qe, this.props.block.getKey())
					}, this.onRemove = () => {
						const e = this.props.blockProps.getEditorState();
						this.props.blockProps.onChange(Object(N.d)(e, this.props.block.getKey()))
					}, this.onCancelUpload = async () => {
						this.props.upload && (await this.props.onCancelUpload(this.props.upload.key), this.selectBlock())
					}, this.onToolbarStateChange = e => {
						this.props.blockProps.onChange(e)
					}, this.toggleVideoThumbnailsSelector = () => {
						this.props.toggleVideoThumbnailsSelector()
					}, this.onThumbnailSelect = e => {
						const t = this.props.blockProps.getEditorState(),
							n = this.props.block.getKey();
						let o = Object(N.r)(t, this.props.block.getKey(), {
							thumbnail: e
						});
						o = Object(N.p)(o, n), this.props.blockProps.onChange(o), this.toggleVideoThumbnailsSelector()
					}, this.state = {
						active: !1,
						isInSelection: !1
					}
				}
				shouldComponentUpdate(e, t) {
					return t.active !== this.state.active || t.isInSelection !== this.state.isInSelection || e.block !== this.props.block || e.upload !== this.props.upload || Object(N.n)(e.selection, e.block.getKey())
				}
				componentDidMount() {
					document.addEventListener("selectionchange", this.onNativeSelectionChange);
					const {
						selection: e
					} = this.props;
					e.getHasFocus() && Object(N.n)(e, this.props.block.getKey()) && this.selectBlock(), this.overlayContainer = Ue(!0)
				}
				componentWillUnmount() {
					document.removeEventListener("selectionchange", this.onNativeSelectionChange)
				}
				componentWillReceiveProps(e) {
					const t = e.block.getKey(),
						n = this.props.blockProps.getEditorState(),
						o = n;
					n !== o && this.props.blockProps.onChange(o), !this.state.active && e.selection !== this.props.selection && e.selection.getHasFocus() && Object(N.n)(e.selection, t) && this.selectBlock()
				}
				getToolbarOffset() {
					if (!this.props.blockProps.rteFocusableContentRef || !this.rootContainer) return 0;
					const {
						top: e
					} = this.rootContainer.getBoundingClientRect(), {
						top: t
					} = this.props.blockProps.rteFocusableContentRef.getBoundingClientRect();
					return e - t - 30 - 10
				}
				render() {
					const {
						block: e,
						blockProps: t,
						isRteVideoPosterEnabled: n,
						offsetKey: o,
						upload: s
					} = this.props, r = Object(N.h)(e), i = r ? r.thumbnail : void 0, c = !!s && Object(He.n)(s.metadata.mimetype || ""), {
						active: a,
						isInSelection: l
					} = this.state, d = t.editorType === We.a.Comment;
					return p.a.createElement(tn, {
						innerRef: e => this.rootContainer = e
					}, a && p.a.createElement(Yt, {
						block: e,
						editorState: t.getEditorState(),
						onChange: this.onToolbarStateChange,
						onThumbnailButtonClick: this.toggleVideoThumbnailsSelector,
						showThumbnailButton: n,
						showVideoControls: c,
						alignCenter: !d
					}), p.a.createElement(Kt, null), p.a.createElement("div", {
						contentEditable: !1,
						"data-offset-key": o
					}, p.a.createElement(en, {
						draggable: !0,
						onDragStart: this.onDragStart,
						innerRef: e => this.mediaContainer = e
					}, p.a.createElement(Rt, {
						isSelected: l || a,
						thumbnail: i,
						onCancel: this.onCancelUpload,
						onClickCapture: this.onMediaViewClickCapture,
						onRetry: this.onRetryUpload,
						onRemove: this.onRemove,
						upload: s,
						mediaAsset: r.mediaAsset,
						alignCenter: !d,
						renderSmallMedia: d
					})), s && c && p.a.createElement(Pe.a, {
						onSelect: this.onThumbnailSelect,
						onToggleModal: this.toggleVideoThumbnailsSelector,
						videoSource: s.metadata.localUrl,
						videoDuration: s.metadata.videoDuration,
						selected: i,
						isOpen: this.props.isThumbnailSelectorOpen
					})), p.a.createElement(Kt, null))
				}
			}
			var on = $t(nn),
				sn = n("./src/reddit/components/RichTextEditor/media/MediaCaption/index.m.less"),
				rn = n.n(sn);
			class cn extends p.a.PureComponent {
				constructor(e) {
					super(e);
					const {
						contentState: t,
						block: n
					} = Object(D.e)(e.children[0]).props;
					this.mediaBlockKey = t.getBlockBefore(n.getKey()).getKey()
				}
				render() {
					const e = this.props.children[0],
						t = Object(D.e)(e),
						{
							block: n,
							contentState: o
						} = t.props,
						r = o.getBlockForKey(this.mediaBlockKey),
						i = Object(N.h)(r);
					if (!i || !(i.mediaAsset || i.uploadInfo && i.uploadInfo.mediaType)) return null;
					const c = !n.getLength();
					return p.a.createElement("div", {
						className: rn.a.wrapper,
						style: {
							"--media-caption-placeholder-text": c ? `'${s.fbt._("Add caption",null,{hk:"3zI8El"})}'` : ""
						}
					}, e)
				}
			}
			const an = Object(P.Map)({
				[R.j]: {
					element: "div",
					wrapper: p.a.createElement(cn, null)
				}
			});
			var ln = (e, t, n) => {
					const s = e.getSelection(),
						r = e.getCurrentContent(),
						i = r.getBlockForKey(s.getAnchorKey()),
						c = r.getBlockForKey(s.getFocusKey()),
						[a, l] = Object(Q.e)(r, i, c);
					if (!a || a !== l) return e;
					const {
						blocks: d,
						start: u
					} = a, p = Object(Q.g)(i), h = Object(Q.g)(c), {
						colCount: m
					} = h;
					d.sort(Q.b);
					const g = W()(d, m),
						{
							minCol: f,
							minRow: b,
							maxCol: y,
							maxRow: E
						} = Object(Q.f)(p, h),
						S = {
							rowIndex: 0,
							colIndex: 0
						};
					if ("rows" === t) {
						const e = "before" === n ? b : E + 1,
							t = W()(Object(Q.l)(m, E - b + 1), m);
						g.splice(e, 0, ...t), S.rowIndex = e
					} else {
						const e = "before" === n ? f : y + 1;
						g.forEach(t => {
							t.splice(e, 0, ...Object(Q.l)(y - f + 1, 1))
						}), S.colIndex = e
					}
					const x = Object(Q.d)(g),
						C = r.getBlocksAsArray(),
						O = q()(x),
						k = [...C.slice(0, u), ...O, ...C.slice(u + d.length)],
						T = r.merge({
							blockMap: o.BlockMapBuilder.createFromArray(k)
						}),
						v = te()(O, e => Object(Q.h)(S, Object(Q.g)(e))),
						j = Object(Q.o)(s, v, v);
					let _ = o.EditorState.push(e, T, Z.e);
					return _ = o.EditorState.forceSelection(_, j)
				},
				dn = n("./node_modules/lodash/clamp.js"),
				un = n.n(dn),
				pn = n("./src/reddit/components/RichTextEditor/helpers/sliceContiguousBlocks.ts");
			var hn = function(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "preserve";
				const s = e.getSelection(),
					r = e.getCurrentContent(),
					i = "up" === t || "left" === t ? s.getStartKey() : s.getEndKey(),
					c = r.getBlockForKey(i);
				if (!Object(R.v)(c.getType())) return;
				const a = Object(Q.g)(c),
					{
						colCount: l,
						colIndex: d,
						rowIndex: u
					} = a,
					p = r.getBlocksAsArray(),
					h = Object(pn.a)(r, c);
				if (!h) return;
				let m = u,
					g = d;
				switch (t) {
					case "up":
						m--;
						break;
					case "down":
						m++;
						break;
					case "left":
						--g < 0 && (m--, g = l - 1);
						break;
					case "right":
						++g >= l && (m++, g = 0)
				}
				const f = {
					rowIndex: m,
					colIndex: g
				};
				let b = i;
				const y = te()(h.blocks, e => Object(Q.h)(Object(Q.g)(e), f));
				if (y) b = y.getKey();
				else {
					const e = Object(Q.c)(f, a) < 0 ? h.start - 1 : h.start + h.blocks.length;
					0 <= e && e < p.length && (b = p[e].getKey())
				}
				const E = r.getBlockForKey(b);
				let S = 0;
				"preserve" === n ? S = un()(s.getFocusOffset(), 0, E.getLength()) : "end" === n && (S = E.getLength());
				const x = s.merge({
					anchorKey: b,
					focusKey: b,
					focusOffset: S,
					anchorOffset: S
				});
				return s !== x ? o.EditorState.forceSelection(e, x) : void 0
			};
			const mn = (e, t) => {
					const n = t.getCurrentContent(),
						o = t.getSelection(),
						s = n.getBlockForKey(o.getFocusKey()),
						[r] = Object(Q.e)(n, s, s);
					if (!r) return;
					const i = Object(Q.g)(s);
					let c;
					return (c = i.colIndex === i.colCount - 1 && i.rowIndex === r.blocks.length / i.colCount - 1 && !e.shiftKey && o.getFocusKey() === o.getAnchorKey() ? ln(t, "rows", "after") : hn(t, e.shiftKey ? "left" : "right", "end")) ? (e.preventDefault(), c) : void 0
				},
				gn = (e, t) => {
					if (e.shiftKey) return;
					const n = hn(t, "up");
					return n && e.preventDefault(), n
				},
				fn = (e, t) => {
					if (e.shiftKey) return;
					const n = hn(t, "down");
					return n && e.preventDefault(), n
				};
			class bn {
				constructor() {
					this.lastRowInsertionState = null
				}
				undoRowInsertion(e) {
					const t = o.EditorState.undo(e);
					return hn(t, "down", "end") || t
				}
				isSelectionInLastRow(e) {
					const t = e.getCurrentContent(),
						n = e.getSelection(),
						o = t.getBlockForKey(n.getFocusKey()),
						[s] = Object(Q.e)(t, o, o);
					if (!s) return !1;
					const r = Object(Q.g)(s.blocks[0]).colCount,
						i = s.blocks.length / r;
					return Object(Q.g)(o).rowIndex === i - 1
				}
				insertNewRow(e) {
					const t = e.getSelection();
					let n = ln(e, "rows", "after");
					return n = o.EditorState.forceSelection(n, t), n = hn(n, "down") || n, this.lastRowInsertionState = n, n
				}
				handle(e) {
					return e.getSelection().isCollapsed() ? e === this.lastRowInsertionState ? this.undoRowInsertion(e) : this.isSelectionInLastRow(e) ? this.insertNewRow(e) : hn(e, "down") || e : e
				}
			}
			const yn = (e, t) => {
				const n = e.getSelection();
				if (n.isCollapsed() || n.getStartKey() === n.getEndKey()) return;
				const s = e.getCurrentContent(),
					r = s.getBlockForKey(n.getAnchorKey()),
					i = s.getBlockForKey(n.getFocusKey()),
					[c, a] = Object(Q.e)(s, r, i);
				if (c && c === a) {
					const r = Object(Q.o)(n, i, i, !1),
						c = Y.b(s, r, t);
					return o.EditorState.push(e, c, Z.d)
				}
			};
			var En = n("./node_modules/lodash/forEach.js"),
				Sn = n.n(En);
			const xn = (e, t) => t ? e[0] : e[e.length - 1];
			var Cn = (e, t) => {
					return e.getSelection().isCollapsed() ? ((e, t) => {
						const n = e.getSelection(),
							s = t.getSelection();
						if (!n.isCollapsed() || s.isCollapsed() || 0 !== s.getStartOffset() || s.getStartKey() !== n.getStartKey()) return e;
						const r = e.getCurrentContent(),
							i = t.getCurrentContent(),
							c = r.getBlockForKey(n.getAnchorKey());
						if (!Object(R.v)(c.getType())) return e;
						const {
							rowIndex: a,
							colIndex: l
						} = Object(Q.g)(c);
						if (0 !== a || 0 !== l) return e;
						const d = r.getBlockMap(),
							u = i.getBlockMap();
						if (d.size >= u.size) return e;
						const p = r.getBlockAfter(n.getAnchorKey()),
							h = i.getBlockAfter(s.getEndKey());
						if (p && p !== h) return e;
						const m = c.merge({
								type: R.n,
								data: Object(P.Map)({})
							}),
							g = r.merge({
								blockMap: d.set(c.getKey(), m)
							});
						return o.EditorState.set(e, {
							currentContent: g
						})
					})(e, t) : ((e, t) => {
						const n = e.getSelection();
						if (n.isCollapsed()) return e;
						if (t.getSelection() === n) return e;
						if (n.getFocusKey() === n.getAnchorKey()) return e;
						const s = e.getCurrentContent(),
							r = s.getBlockForKey(n.getAnchorKey()),
							i = s.getBlockForKey(n.getFocusKey()),
							[c, a] = Object(Q.e)(s, r, i);
						if (!c && !a) return e;
						let l = e;
						if (c !== a) {
							const t = n.getIsBackward(),
								s = Object(Q.o)(n, c ? xn(c.blocks, !t) : null, a ? xn(a.blocks, t) : null, t);
							n !== s && (l = o.EditorState.forceSelection(e, s))
						} else if (c && a && c === a) {
							const t = Object(Q.g)(r),
								c = Object(Q.g)(i),
								d = s.getBlocksAsArray(),
								{
									start: u,
									blocks: p
								} = a,
								h = p[0],
								m = Object(Q.g)(h);
							if (0 !== m.colIndex || 0 !== m.rowIndex) throw new Error("First table block must always has [0, 0] coordinate!");
							const g = Object(Q.b)(i, r) < 0,
								f = Object(Q.k)(t, c),
								b = [],
								y = [];
							Sn()(p, e => {
								const t = Object(Q.g)(e);
								f(t.rowIndex, t.colIndex) ? b.push(e) : e !== h && y.push(e)
							});
							const E = b[0] === h;
							b.sort(Q.b);
							const S = [...d.slice(0, u), ...E ? [] : [h], ...b, ...y, ...d.slice(u + p.length)],
								x = xn(b, !g),
								C = xn(b, g),
								O = Object(Q.o)(n, x, C, g),
								k = s.merge({
									blockMap: o.BlockMapBuilder.createFromArray(S),
									selectionAfter: O
								});
							l = o.EditorState.set(e, {
								currentContent: k
							}), O !== n && (l = o.EditorState.forceSelection(l, O))
						}
						return l
					})(e, t)
				},
				On = n("./src/reddit/components/RichTextEditor/table/Renderer/index.m.less"),
				kn = n.n(On);
			const Tn = E.a.div("Cell", kn.a),
				vn = E.a.div("Row", kn.a),
				jn = E.a.div("Table", kn.a),
				_n = (e, t) => {
					if (!t || !e.contains(t)) return;
					let n = t;
					for (; n && n !== e;) {
						if (n instanceof HTMLElement && n.hasAttribute("data-row")) return n;
						n.parentElement && (n = n.parentElement)
					}
				},
				Rn = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
						n = e,
						o = t;
					for (; n && o > 0;) {
						if (n instanceof HTMLElement && n.dataset.table) return n;
						n.parentElement && (n = n.parentElement), o--
					}
				},
				wn = e => {
					const {
						dataset: t
					} = e;
					if ("string" == typeof t.row && "string" == typeof t.col) return {
						rowIndex: +t.row,
						colIndex: +t.col
					}
				},
				Bn = e => {
					const t = window.getSelection(),
						{
							focusNode: n,
							anchorNode: o,
							rangeCount: s
						} = t;
					if (n !== o && s && e) {
						const n = t.getRangeAt(0);
						return Object(U.h)(n, e) && !e.contains(n.commonAncestorContainer)
					}
					return !1
				},
				In = e => {
					const t = p.a.Children.toArray(e),
						n = Object(D.e)(t[0]),
						{
							selection: o,
							contentState: s,
							block: r
						} = n.props,
						{
							colCount: i
						} = Object(Q.g)(r);
					t.sort((e, t) => Object(Q.b)(Object(D.c)(e), Object(D.c)(t)));
					const c = W()(t, i);
					let a, l, d = !1;
					if (o.getAnchorKey() !== o.getFocusKey()) {
						const e = s.getBlocksAsArray(),
							n = s.getBlockForKey(o.getStartKey()),
							i = s.getBlockForKey(o.getEndKey()),
							c = e.indexOf(n),
							u = e.indexOf(i),
							p = e.indexOf(r),
							h = p + t.length - 1;
						c < p && p < u || c < h && h < u ? d = !0 : p <= c && u <= h && (l = Object(Q.g)(o.getIsBackward() ? i : n), a = Object(Q.g)(o.getIsBackward() ? n : i))
					}
					return {
						rows: c,
						anchorCell: l,
						focusCell: a,
						isSelectWholeTable: d
					}
				};
			class An extends p.a.Component {
				constructor(e) {
					super(e), this.tableElem = null, this.onMouseDown = e => {
						if (!this.tableElem || e.nativeEvent.detail < 2) return;
						const t = window.getSelection(),
							n = t.rangeCount ? t.getRangeAt(0) : null,
							o = _n(this.tableElem, t.focusNode);
						if (n && o)
							if (2 === e.nativeEvent.detail && t.isCollapsed) {
								const s = n.cloneRange();
								s.setEndAfter(o), s.toString() || (e.preventDefault(), t.selectAllChildren(o))
							} else e.nativeEvent.detail >= 3 && (t.selectAllChildren(o), e.preventDefault())
					}, this.onNativeSelectionChange = () => {
						const e = this.tableElem;
						if (!e) return;
						const t = window.getSelection();
						if (t.anchorNode === t.focusNode) return void this.resetSelection();
						const n = _n(e, t.anchorNode),
							o = _n(e, t.focusNode);
						n && n === o ? this.resetSelection() : n && o ? this.setCellsRange(n, o) : n || o ? this.selectWholeTable() : Bn(e) ? this.selectWholeTable() : this.resetSelection()
					}, this.resetSelection = () => {
						(this.state.anchorCell || this.state.focusCell || this.state.isSelectWholeTable) && this.setState({
							isSelectWholeTable: !1,
							focusCell: void 0,
							anchorCell: void 0
						})
					}, this.setCellsRange = (e, t) => {
						const n = wn(t),
							o = wn(e);
						Object(Q.h)(n, this.state.focusCell) && Object(Q.h)(o, this.state.anchorCell) && !this.state.isSelectWholeTable || this.setState({
							focusCell: n,
							anchorCell: o,
							isSelectWholeTable: !1
						})
					}, this.selectWholeTable = () => {
						!this.state.focusCell && this.state.isSelectWholeTable || this.setState({
							focusCell: void 0,
							isSelectWholeTable: !0
						})
					}, this.state = In(e.children)
				}
				componentDidMount() {
					document.addEventListener("selectionchange", this.onNativeSelectionChange)
				}
				componentWillUnmount() {
					document.removeEventListener("selectionchange", this.onNativeSelectionChange)
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.children !== this.props.children && this.setState(In(e.children))
				}
				render() {
					const {
						rows: e,
						anchorCell: t,
						focusCell: n,
						isSelectWholeTable: o
					} = this.state;
					let s;
					o ? s = (e, t) => !0 : t && n && !Object(Q.h)(t, n) && (s = Object(Q.k)(t, n));
					const r = e[0].map(e => Object(Q.g)(Object(D.e)(e).props.block).alignment),
						i = e.map((e, t) => p.a.createElement(vn, {
							key: t
						}, e.map((e, n) => p.a.createElement(Tn, {
							"data-row": t,
							"data-col": n,
							"data-selected": !!s && s(t, n),
							key: n,
							style: {
								"--cell-text-alignment": r[n] ? Q.a[r[n]] : void 0
							}
						}, e))));
					return p.a.createElement(jn, {
						className: s ? kn.a.isFakeSelectionActive : void 0,
						innerRef: e => this.tableElem = e,
						onMouseDown: this.onMouseDown,
						"data-table": !0
					}, i)
				}
			}
			const Kn = Object(P.Map)({
				[R.l]: {
					element: "div",
					wrapper: p.a.createElement(An, null)
				}
			});
			var Mn = n("./node_modules/lodash/isEqual.js"),
				Ln = n.n(Mn),
				Nn = n("./src/reddit/components/RichTextEditor/Tooltip/index.tsx"),
				Dn = n("./src/reddit/icons/svgs/FormattingAlignCenter/index.tsx"),
				Fn = n("./src/reddit/icons/svgs/FormattingAlignLeft/index.tsx"),
				Pn = n("./src/reddit/icons/svgs/FormattingAlignRight/index.tsx"),
				Un = n("./src/reddit/icons/svgs/FormattingDeleteRow/index.tsx"),
				Hn = n("./src/reddit/icons/svgs/FormattingInsertRow/index.tsx"),
				Wn = n("./src/reddit/models/RichTextJson/index.ts");
			var zn = function(e) {
				arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const t = e.getSelection(),
					n = e.getCurrentContent(),
					s = n.getBlockForKey(t.getAnchorKey()),
					r = n.getBlockForKey(t.getFocusKey()),
					[i, c] = Object(Q.e)(n, s, r);
				if (i && i === c) {
					const {
						blocks: n
					} = i;
					n.sort(Q.b);
					const s = Object(Q.o)(t, n[0], X()(n));
					return ne(o.EditorState.set(e, {
						selection: s
					}), "rows")
				}
			};
			var qn = (e, t) => {
					const n = e.getSelection(),
						s = e.getCurrentContent(),
						r = s.getBlockForKey(n.getAnchorKey()),
						i = s.getBlockForKey(n.getFocusKey()),
						[c, a] = Object(Q.e)(s, r, i);
					if (!c || c !== a) return e;
					const l = Object(Q.g)(r),
						d = Object(Q.g)(i),
						{
							minCol: u,
							maxCol: p
						} = Object(Q.f)(l, d),
						h = c.blocks.map(e => {
							const {
								colIndex: n
							} = Object(Q.g)(e);
							return u <= n && n <= p ? Object(Q.m)(e, {
								alignment: t
							}) : e
						}),
						m = s.getBlockMap(),
						g = s.merge({
							blockMap: m.merge(o.BlockMapBuilder.createFromArray(h)),
							selectionAfter: n,
							selectionBefore: n
						});
					return o.EditorState.push(e, g, Z.b)
				},
				Vn = n("./src/reddit/components/RichTextEditor/table/Toolbar/index.m.less"),
				Gn = n.n(Vn);

			function Yn() {
				return (Yn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Qn = (e, t) => n => p.a.createElement(e, Yn({}, t, n)),
				Jn = Object(Ut.f)(Hn.a),
				Xn = Qn(Jn, {
					orientation: "up"
				}),
				Zn = Qn(Jn, {
					orientation: "right"
				}),
				$n = Qn(Jn, {
					orientation: "left"
				}),
				eo = Object(Ut.f)(Un.a),
				to = Qn(eo, {
					orientation: "vertical"
				}),
				no = Object(Ut.f)(Dn.a),
				oo = Object(Ut.f)(Fn.a),
				so = Object(Ut.f)(Pn.a),
				ro = Object(Ut.f)(Nt.b),
				io = E.a.wrapped(Dt.a, "ToolbarContent", Gn.a),
				co = e => p.a.createElement(Pt.a, Yn({}, e, {
					className: Object(b.a)(Gn.a.formatterButton, e.className),
					tooltipContentClass: Gn.a.tooltip
				}));
			var ao = e => {
					const {
						editorState: t,
						onChange: n
					} = e;
					return p.a.createElement(io, null, p.a.createElement(co, {
						Icon: oo,
						onClick: () => n(qn(t, Wn.e)),
						tooltip: s.fbt._("Left align", null, {
							hk: "45eAc"
						})
					}), p.a.createElement(co, {
						Icon: no,
						onClick: () => n(qn(t, Wn.d)),
						tooltip: s.fbt._("Center align", null, {
							hk: "4aAfyf"
						})
					}), p.a.createElement(co, {
						Icon: so,
						onClick: () => n(qn(t, Wn.f)),
						tooltip: s.fbt._("Right align", null, {
							hk: "3oHuXw"
						})
					}), p.a.createElement(Ft.c, null), p.a.createElement(co, {
						Icon: $n,
						onClick: () => n(ln(t, "columns", "before")),
						tooltip: s.fbt._("Insert column before", null, {
							hk: "11EB6Q"
						})
					}), p.a.createElement(co, {
						Icon: Zn,
						onClick: () => n(ln(t, "columns", "after")),
						tooltip: s.fbt._("Insert column after", null, {
							hk: "Ddlpl"
						})
					}), p.a.createElement(co, {
						Icon: to,
						onClick: () => n(ne(t, "columns")),
						tooltip: s.fbt._("Delete column", null, {
							hk: "3HaQQD"
						})
					}), p.a.createElement(Ft.c, null), p.a.createElement(co, {
						Icon: Xn,
						onClick: () => n(ln(t, "rows", "before")),
						tooltip: s.fbt._("Insert row above", null, {
							hk: "1HIgn"
						})
					}), p.a.createElement(co, {
						Icon: Jn,
						onClick: () => n(ln(t, "rows", "after")),
						tooltip: s.fbt._("Insert row below", null, {
							hk: "3t7ZU"
						})
					}), p.a.createElement(co, {
						Icon: eo,
						onClick: () => n(ne(t, "rows")),
						tooltip: s.fbt._("Delete row", null, {
							hk: "3yJYqS"
						})
					}), p.a.createElement(Ft.c, null), p.a.createElement(co, {
						Icon: ro,
						onClick: () => n(zn(t) || t),
						tooltip: s.fbt._("Delete table", null, {
							hk: "1fK0KA"
						})
					}))
				},
				lo = n("./src/reddit/components/RichTextEditor/table/ToolbarController/index.m.less"),
				uo = n.n(lo);
			const po = 20,
				ho = E.a.div("ActionButton", uo.a),
				mo = E.a.div("ToolbarWrapper", uo.a),
				go = e => {
					const t = {};
					if (!e || !document.documentElement) return t;
					const n = e.left - 185,
						o = e.left + 185 - document.documentElement.clientWidth;
					return n < 0 ? t.left = -n + po + 2 : o > 0 && (t.left = -o + po - 2), t
				},
				fo = e => {
					e.preventDefault(), e.stopPropagation()
				};
			class bo extends u.Component {
				constructor(e) {
					super(e), this.containerElem = null, this.setContainerRef = e => this.containerElem = e, this.onResize = e => {
						this.hideToolbar(), this.state.tooltipPosition && this.updateForCurrentSelection()
					}, this.onDocumentClick = e => {
						this.state.isToolbarActive && this.containerElem && (this.containerElem.contains(e.target) || this.hideToolbar())
					}, this.onNativeSelectionChange = () => {
						this.updateForCurrentSelection()
					}, this.updateForCurrentSelection = () => {
						const e = window.getSelection();
						if (!e.rangeCount) return void this.hideActionButton();
						const t = e.getRangeAt(0).commonAncestorContainer,
							{
								rteDomRef: n
							} = this.props;
						if (!n.contains(t)) return void this.hideActionButton();
						const o = Rn(t);
						if (!o) return void this.hideActionButton();
						const s = _n(o, e.anchorNode);
						if (!s) return void this.hideActionButton();
						const r = _n(o, e.focusNode);
						r ? this.updateActionButtonPosition(s, r) : this.hideActionButton()
					}, this.updateActionButtonPosition = (e, t) => {
						const n = e.getBoundingClientRect(),
							o = t.getBoundingClientRect(),
							s = {
								top: Math.min(n.top, o.top),
								left: Math.max(n.right, o.right) - po
							};
						Ln()(this.state.tooltipPosition, s) || this.setState({
							tooltipPosition: s
						}), this.hideToolbar()
					}, this.hideActionButton = () => {
						this.hideToolbar(), this.state.tooltipPosition && this.setState({
							tooltipPosition: null
						})
					}, this.hideToolbar = () => {
						this.state.isToolbarActive && this.setState({
							isToolbarActive: !1
						})
					}, this.onActionButtonClick = e => {
						this.setState(e => ({
							isToolbarActive: !e.isToolbarActive
						})), fo(e)
					}, this.state = {
						isToolbarActive: !1,
						tooltipPosition: null
					}, this.api = {
						hideActionButton: this.hideActionButton
					}
				}
				componentDidMount() {
					const {
						onSetApi: e
					} = this.props;
					document.addEventListener("selectionchange", this.onNativeSelectionChange), document.addEventListener("click", this.onDocumentClick), window.addEventListener("resize", this.onResize), e && e(this.api)
				}
				componentWillUnmount() {
					const {
						onSetApi: e
					} = this.props;
					document.removeEventListener("selectionchange", this.onNativeSelectionChange), document.removeEventListener("click", this.onDocumentClick), window.removeEventListener("resize", this.onResize), e && e(null)
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = e.editorState.getSelection(),
						n = this.props.editorState.getSelection();
					t.getHasFocus() && Object(R.v)(o.RichUtils.getCurrentBlockType(e.editorState)) ? t !== n && this.hideToolbar() : this.hideActionButton()
				}
				render() {
					const e = !this.props.readOnly && this.state.isToolbarActive,
						{
							tooltipPosition: t
						} = this.state;
					return p.a.createElement("div", {
						ref: this.setContainerRef
					}, p.a.createElement(Nn.b, {
						targetPosition: t
					}, p.a.createElement(ho, {
						className: e ? uo.a.isPressed : void 0,
						onClick: this.onActionButtonClick,
						onMouseDown: fo,
						onMouseMove: fo
					}, e ? p.a.createElement(mo, {
						style: go(t)
					}, p.a.createElement(ao, {
						onChange: this.props.onChange,
						editorState: this.props.editorState
					})) : null)))
				}
			}
			var yo = n("./src/reddit/components/RichTextEditor/editorStateTransforms.ts");
			n("./node_modules/core-js/modules/web.dom.iterable.js");

			function Eo() {
				return (Eo = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}

			function So() {
				return new Map
			}
			const xo = p.a.createContext(So());

			function Co(e) {
				class t extends p.a.Component {
					constructor() {
						super(...arguments), this.elementRef = null, this.updateElementRef = e => {
							const {
								registry: t
							} = this.props;
							this.elementRef = e, e ? t.set(this.props.entityKey, e) : t.delete(this.props.entityKey)
						}
					}
					componentWillReceiveProps(e) {
						const {
							registry: t
						} = this.props;
						this.props.entityKey !== e.entityKey && this.elementRef && (t.get(this.props.entityKey) === this.elementRef && t.delete(this.props.entityKey), t.set(e.entityKey, this.elementRef))
					}
					render() {
						return p.a.createElement("span", {
							ref: this.updateElementRef
						}, p.a.createElement(e, this.props))
					}
				}
				return e => p.a.createElement(xo.Consumer, null, n => p.a.createElement(t, Eo({}, e, {
					registry: n
				})))
			}
			var Oo = n("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				ko = n("./src/reddit/components/RichTextEditor/emotes/decorator.m.less"),
				To = n.n(ko);
			const vo = {
					strategy: Oo.e,
					component: Co(e => {
						const {
							contentState: t
						} = e, n = Object(Oo.i)(t), o = t.getEntity(e.entityKey), {
							id: s,
							emoji: r,
							sticker: i
						} = o.getData(), c = n ? i : r;
						return p.a.createElement("span", {
							className: Object(b.a)(To.a.emote, {
								[To.a.sticker]: n
							}),
							title: `:${s}:`,
							style: {
								backgroundImage: `url(${c.path})`,
								width: c.x
							}
						}, e.children)
					})
				},
				jo = () => vo;
			var _o = n("./src/reddit/selectors/gold/enabledFeatures.ts"),
				Ro = n("./src/reddit/selectors/gold/powerups/index.ts"),
				wo = n("./src/reddit/components/RichTextEditor/emotes/Powerups/tooltipAsync.ts"),
				Bo = n("./src/higherOrderComponents/makeAsync.tsx"),
				Io = Object(Bo.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("SpecialMembershipsEmotesTooltip").then(n.bind(null, "./src/reddit/components/RichTextEditor/emotes/SpecialMemberships/tooltip.tsx")).then(e => e.default)
				});
			var Ao = e => {
				const {
					subreddit: t
				} = e, n = t.id, o = Object(h.e)(e => Object(_o.b)(e, {
					subredditId: n
				}));
				return Object(h.e)(e => Object(Ro.f)(e, {
					subredditId: n
				})) ? p.a.createElement(wo.a, e) : p.a.createElement(p.a.Fragment, null, o && p.a.createElement(Io, e))
			};
			const Ko = new Set([F.a.LINK]);
			var Mo = n("./src/reddit/components/RichTextEditor/entity/link/helpers.tsx"),
				Lo = n("./src/reddit/components/RichTextEditor/entity/link/decorator.m.less"),
				No = n.n(Lo);
			const Do = E.a.a("RegularLink", No.a),
				Fo = {
					strategy: Mo.a,
					component: Co(e => {
						const t = e.contentState.getEntity(e.entityKey),
							{
								url: n
							} = t.getData();
						return p.a.createElement(Do, {
							href: n
						}, e.children)
					})
				},
				Po = () => Fo;
			var Uo = n("./src/lib/linkMatchers/index.ts");
			const Ho = (e, t) => {
					if (t.getType() === R.f) return [];
					return (e.match(t.getText()) || []).filter(e => ((e, t) => {
						let {
							index: n,
							lastIndex: o
						} = t;
						for (let s = n; s < o; s++) {
							if (e.getInlineStyleAt(s).contains(R.k.MONOSPACE)) return !1
						}
						return !0
					})(t, e))
				},
				Wo = (e, t, n, s, r, i) => {
					const c = e.getBlockForKey(t),
						a = o.SelectionState.createEmpty(t),
						l = [],
						d = new Set;
					let u = e;
					const p = n === F.a.USER_MENTION ? F.a.USER_LINK : n,
						h = (e, t, o) => {
							let s = null;
							for (let r = e; r < t; r++) {
								const e = c.getEntityAt(r),
									t = e && u.getEntity(e);
								if (t) {
									if (t.getType() !== n) return;
									s || d.has(e) || (s = e)
								}
							}
							if (s) {
								u.getEntity(s).getData().url !== o && (u = u.mergeEntityData(s, {
									url: o
								}))
							}
							return s || (e => (u = u.createEntity(p, "MUTABLE", {
								url: e
							})).getLastCreatedEntityKey())(o)
						},
						m = (e, t, n) => {
							const s = a.merge({
								anchorOffset: e,
								focusOffset: t
							});
							u = o.Modifier.applyEntity(u, s, n)
						},
						g = (e, t) => m(e, t, null),
						f = u.getBlockForKey(t);
					Ho(s, f).forEach((e, s) => {
						let {
							index: c,
							lastIndex: p,
							url: g
						} = e;
						const f = h(c, p, g);
						f && (n === F.a.USER_MENTION ? (((e, n, s) => {
							const c = u && u.getBlockForKey(t),
								l = c && c.getText().substr(e, n);
							if (l && l.replace(S.d.mention, "") && l.startsWith(S.d.mention) && S.c.test(l.replace(S.d.mention, ""))) {
								const t = a.merge({
										anchorOffset: e,
										focusOffset: e + S.d.mention.length
									}),
									c = a.merge({
										anchorOffset: e,
										focusOffset: n + S.d.mention.length
									}),
									l = a.merge({
										anchorOffset: n + S.d.mention.length,
										focusOffset: n + S.d.mention.length
									});
								u = Object(Y.b)(u, t, S.d.profile), u = o.Modifier.applyEntity(u, c, s), r && i && i(o.EditorState.forceSelection(r, l))
							}
						})(c + s, p + s, f), l.push([c + s, p + s + 1])) : (m(c, p, f), l.push([c, p])), d.add(f))
					});
					let b = 0;
					return f.findEntityRanges(e => {
						const t = e.getEntity();
						return !!t && u.getEntity(t).getType() === n
					}, (e, t) => {
						if (b >= l.length) return void g(e, t);
						const [n, o] = l[b];
						t <= n ? g(e, t) : (e < n && g(e, n - 1), t > o && g(o, t), b++)
					}), u
				},
				zo = (e, t) => {
					const n = e.getCurrentContent(),
						s = t.getCurrentContent();
					if (n === s) return e;
					const r = n.getBlockMap(),
						i = s.getBlockMap();
					let c = n;
					return r.forEach((t, n) => {
						if (n) {
							if (t === i.get(n)) return;
							c = Wo(c, n, F.a.SUBREDDIT_LINK, Uo.g), c = Wo(c, n, F.a.USER_LINK, Uo.j), c = Wo(c, n, F.a.USER_MENTION, Uo.e, e, t => e = t)
						}
					}), e.getCurrentContent() === c ? e : (c = c.merge({
						selectionAfter: e.getCurrentContent().getSelectionAfter(),
						selectionBefore: e.getCurrentContent().getSelectionBefore()
					}), o.EditorState.set(e, {
						currentContent: c
					}))
				};
			var qo = e => {
				const t = e.getCurrentContent();
				return t.getBlockMap().some(e => {
					if ((null == e ? void 0 : e.getType()) === R.a) return !0;
					let n = !1;
					return null == e || e.findEntityRanges(e => {
						const n = e.getEntity();
						return !!n && t.getEntity(n).getType() === F.a.EMOTE
					}, () => n = !0), n
				})
			};
			const Vo = " ".repeat(4),
				Go = new RegExp("^ {1,4}|\\t"),
				Yo = new Set([R.b.CODE_BLOCK]),
				Qo = (e, t) => {
					const n = t.getCurrentContent(),
						s = t.getSelection(),
						r = e.shiftKey;
					let i = n,
						c = s.getAnchorOffset(),
						a = s.getFocusOffset();
					if (Object($.a)(n, s, (e, t) => {
							const n = e.getType();
							if ("paragraph" === n || !Yo.has(n)) return !1;
							let l = null;
							const d = e.getText(),
								u = o.SelectionState.createEmpty(t);
							if (r) {
								const e = d.match(Go);
								if (e) {
									const t = e[0].length;
									i = Y.b(i, u.merge({
										focusOffset: t
									}), ""), l = -t
								}
							} else i = Y.a(i, s.isCollapsed() ? s : u, Vo), l = 4;
							null !== l && (t === s.getAnchorKey() && (c += l), t === s.getFocusKey() && (a += l))
						}), i !== n) return i = i.merge({
						selectionAfter: s.merge({
							anchorOffset: c,
							focusOffset: a
						})
					}), e.preventDefault(), o.EditorState.push(t, i, r ? "remove-range" : "insert-characters")
				},
				Jo = (e, t) => (e => {
					const t = e.getSelection(),
						n = e.getCurrentContent();
					if (!t.isCollapsed()) return oe(e);
					if (0 === t.getStartOffset()) {
						const o = n.getBlockForKey(t.getEndKey());
						if (Object(R.v)(o.getType())) return e; {
							const t = n.getBlockBefore(o.getKey());
							if (t && Object(R.v)(t.getType())) return e
						}
					}
				})(e) || ((e, t) => {
					const n = e.getSelection(),
						s = e.getCurrentContent();
					if (n.isCollapsed() && 0 === n.getStartOffset()) {
						const r = s.getBlockForKey(n.getEndKey());
						if (Object(R.o)(r.getType())) return Object(N.d)(e, r.getKey());
						if (Object(R.u)(r.getType())) {
							const t = s.getBlockBefore(r.getKey());
							return o.EditorState.forceSelection(e, Object(D.b)(t))
						}
						if (!Object(N.q)(t) && Object(D.g)(r)) {
							const t = s.getBlockBefore(r.getKey());
							if (t && Object(R.o)(t.getType())) return e = o.EditorState.push(e, Object(D.i)(s, r.getKey()), Z.f), o.EditorState.forceSelection(e, Object(D.b)(t))
						}
					}
				})(e, t),
				Xo = (e, t) => (e => {
					const t = e.getSelection(),
						n = e.getCurrentContent();
					if (!t.isCollapsed()) return oe(e); {
						const o = n.getBlockForKey(t.getEndKey());
						if (t.getEndOffset() === o.getLength()) {
							if (Object(R.v)(o.getType())) return e; {
								const t = n.getBlockAfter(o.getKey());
								if (t && Object(R.v)(t.getType())) return e
							}
						}
					}
				})(e) || ((e, t) => {
					const n = e.getSelection(),
						s = e.getCurrentContent();
					if (!n.isCollapsed()) return;
					const r = s.getBlockForKey(n.getEndKey());
					if (n.getEndOffset() === r.getLength()) {
						if (Object(R.o)(r.getType())) return Object(N.d)(e, r.getKey()); {
							const i = s.getBlockAfter(n.getEndKey());
							if (i && Object(R.o)(i.getType())) {
								if (Object(N.q)(t)) return Object(N.d)(e, i.getKey());
								if (Object(D.g)(r)) return e = o.EditorState.push(e, Object(D.i)(s, r.getKey()), Z.f), o.EditorState.forceSelection(e, Object(D.b)(i))
							}
						}
					}
				})(e, t),
				Zo = e => {
					const t = e.getSelection();
					if (!t.isCollapsed()) return !1;
					const n = o.RichUtils.getCurrentBlockType(e);
					if (!R.c.includes(n)) return !1;
					if (t.getFocusOffset() > 0) {
						if ("\n" === e.getCurrentContent().getBlockForKey(t.getFocusKey()).getText()[t.getFocusOffset() - 1]) return !1
					}
					return !0
				};
			var $o = n("./src/lib/memoizeByReference/index.ts");
			const es = Object($o.a)(e => {
					const t = e.getSelection();
					if (!t.isCollapsed()) return;
					const n = t.getStartOffset(),
						o = e.getCurrentContent(),
						s = o.getBlockForKey(t.getFocusKey());
					if (s.getType() !== R.n) return;
					const r = s.getText();
					if (r.startsWith("1.") && 2 === n) return R.i.ORDERED;
					if (r.startsWith("*") && 1 === n) {
						const e = o.getBlockBefore(s.getKey());
						if (e && e.getType() === R.n && e.getText().startsWith("* ")) return;
						return R.i.UNORDERED
					}
				}),
				ts = e => {
					const t = es(e);
					if (!t) return e;
					const n = Object(yo.a)(e);
					let s = o.Modifier.replaceText(n.getCurrentContent(), n.getSelection().merge({
						anchorOffset: 0
					}), "");
					return s = o.Modifier.setBlockType(s, s.getSelectionAfter(), t), o.EditorState.push(n, s, Z.c)
				};
			var ns = n("./src/reddit/components/RichTextEditor/helpers/styles.ts");
			const os = Object(Bo.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GifTooltip").then(n.bind(null, "./src/reddit/components/RichTextEditor/media/GifTooltip/index.tsx")).then(e => e.default)
			});

			function ss(e) {
				return p.a.createElement(os, e)
			}
			var rs = n("./src/reddit/components/RichTextEditor/spoiler/helpers.ts"),
				is = n("./src/reddit/components/RichTextEditor/spoiler/decorator.m.less"),
				cs = n.n(is);
			const as = e => p.a.createElement("span", {
					className: cs.a.spoiler
				}, p.a.createElement("span", null), e.children, p.a.createElement("span", null)),
				ls = () => ({
					strategy: rs.a,
					component: as
				});
			var ds = n("./src/reddit/components/FocusableContent/index.tsx"),
				us = n("./src/reddit/components/RichTextEditor/Blockquote/index.m.less"),
				ps = n.n(us);
			const hs = E.a.div("BlockQuoteWrapper", ps.a),
				ms = Object(P.Map)({
					[R.e]: {
						element: "blockquote",
						wrapper: p.a.createElement(hs, null)
					}
				});
			var gs = n("./src/reddit/components/RichTextEditor/CodeBlock/index.m.less"),
				fs = n.n(gs);
			const bs = Object(P.Map)({
				[R.f]: {
					element: "code",
					wrapper: p.a.createElement(e => p.a.createElement("div", {
						className: fs.a.CodeBlockWrapper
					}, e.children), null)
				}
			});
			var ys = n("./node_modules/bowser/src/bowser.js"),
				Es = n.n(ys),
				Ss = n("./node_modules/lodash/includes.js"),
				xs = n.n(Ss),
				Cs = n("./src/reddit/components/RichTextEditor/DragController/helpers.ts"),
				Os = n("./src/reddit/components/RichTextEditor/DragController/index.m.less"),
				ks = n.n(Os);
			const Ts = E.a.div("DropLine", ks.a),
				vs = E.a.wrapped(Nn.b, "Tooltip", ks.a);
			class js extends u.Component {
				constructor(e) {
					super(e), this.dragCount = 0, this.setContainerRef = e => this.containerRef = e, this.preventDocumentDrop = e => {
						!! function e(t) {
							return t.draggable ? t : t.parentElement ? e(t.parentElement) : null
						}(e.target) || (e.preventDefault(), e.stopPropagation())
					}, this.onDragOver = e => {
						const t = xs()(e.dataTransfer.types, qe);
						if (!t) {
							if (!Object(Cs.c)(e.dataTransfer) || !this.props.allowMediaUploads) return
						}
						if (!t && !Object(Cs.c)(e.dataTransfer)) return;
						e.preventDefault();
						try {
							e.dataTransfer.dropEffect = t ? "move" : "copy"
						} catch (r) {}
						const {
							editorState: n
						} = this.props;
						let o = null;
						const s = Object(Cs.b)(n, e);
						if (s) {
							const e = this.containerRef.getBoundingClientRect().left;
							o = {
								top: s.clientY,
								left: e
							}
						}
						Ln()(o, this.state.point) || this.setState({
							point: o
						})
					}, this.onDragEnter = e => {
						this.dragCount++
					}, this.onDragLeave = e => {
						this.dragCount--, 0 === this.dragCount && this.state.point && this.setState({
							point: null
						})
					}, this.onDrop = e => {
						const t = () => {
								this.dragCount = 0, this.setState({
									point: null
								})
							},
							n = Es.a.msie ? null : e.dataTransfer.getData(qe),
							o = Object(Cs.a)(e.dataTransfer);
						if (!(n || o.length && this.props.allowMediaUploads)) return void t();
						const {
							editorState: s
						} = this.props, r = Object(Cs.b)(s, e);
						if (!r) return void t();
						e.preventDefault(), e.stopPropagation();
						const i = r.isBefore ? D.a.before : D.a.after;
						n ? this.props.onBlockMove(n, r.blockKey, i) : setTimeout(() => {
							this.props.onFilesDrop(o, r.blockKey, i)
						}), t()
					}, this.state = {
						point: null
					}
				}
				componentDidMount() {
					document.addEventListener("drop", this.preventDocumentDrop), document.addEventListener("dragover", this.preventDocumentDrop)
				}
				componentWillUnmount() {
					document.removeEventListener("drop", this.preventDocumentDrop), document.removeEventListener("dragover", this.preventDocumentDrop)
				}
				render() {
					const {
						children: e
					} = this.props, {
						point: t
					} = this.state, n = p.a.Children.only(e);
					return p.a.createElement("div", {
						className: Object(b.a)(ks.a.container, {
							[ks.a.hideCaret]: !!t
						}),
						onDragEnter: this.onDragEnter,
						onDragLeave: this.onDragLeave,
						onDragOver: this.onDragOver,
						onDrop: this.onDrop,
						ref: this.setContainerRef
					}, p.a.createElement("div", null, n), p.a.createElement(vs, {
						targetPosition: t
					}, p.a.createElement(Ts, null)))
				}
			}
			var _s = n("./node_modules/draft-js/lib/DraftPasteProcessor.js"),
				Rs = n.n(_s),
				ws = n("./node_modules/draft-js/lib/getEntityKeyForSelection.js"),
				Bs = n.n(ws),
				Is = n("./node_modules/draft-js/lib/splitTextIntoTextBlocks.js"),
				As = n.n(Is),
				Ks = n("./src/reddit/components/RichTextEditor/entity/cloneEntitiesInFragment.ts"),
				Ms = n("./src/reddit/components/RichTextEditor/entity/applyEntityToContentBlock.ts");

			function Ls(e, t, n) {
				const s = Object(o.convertFromHTML)(t, void 0, n);
				if (s) {
					const {
						contentBlocks: t,
						entityMap: n
					} = s;
					if (t) {
						const s = o.BlockMapBuilder.createFromArray(function(e) {
							return e.map(e => Object(R.r)(e.getType()) ? I(e) : e)
						}(t));
						return [e.set("entityMap", n), s]
					}
				}
				return [e, null]
			}

			function Ns(e, t, n) {
				const s = As()(t),
					r = n && 1 === s.length ? n : o.CharacterMetadata.create(),
					i = Rs.a.processText(s, r).map(e => e.merge({
						type: R.n
					}));
				return o.BlockMapBuilder.createFromArray(i)
			}
			const Ds = e => {
					if (!e) return null;
					const t = (new DOMParser).parseFromString(e, "text/html").querySelector("[data-reddit-rtjson]");
					return t && t.getAttribute("data-reddit-rtjson")
				},
				Fs = e => {
					if (Se()) return {
						text: window.clipboardData.getData("text"),
						html: null
					}; {
						const t = e.clipboardData.getData("text/html");
						return {
							text: e.clipboardData.getData("text/plain"),
							html: t
						}
					}
				};

			function Ps(e, t, n, s) {
				const {
					text: r,
					html: i
				} = Fs(n), c = function(e, t, n, o) {
					const s = {
							text: t,
							html: n,
							rtjson: o,
							fragment: null
						},
						r = e.getClipboard();
					return r && n && function(e, t, n, o) {
						return -1 !== t.indexOf(o) || 1 === e.size && e.first().getText() === n
					}(r, n, t, e.getEditorKey()) && (s.fragment = r), s
				}(t, r, i, i && Ds(i));
				t.getClipboard() && !c.fragment && t.setClipboard(null);
				const a = e.getCurrentContent(),
					l = e.getSelection(),
					d = e.getCurrentInlineStyle(),
					u = t.props.blockRenderMap;
				let p = null,
					h = a;
				if (!(p = function(e, t, n) {
						const o = e.getBlockForKey(t.getStartKey()),
							s = e.getBlockForKey(t.getEndKey());
						if (o.getType() === R.f || s.getType() === R.f) return Ns(0, n).map(e => e.merge({
							type: R.f,
							depth: 0
						}))
					}(h, l, c.text)) && c.fragment && (p = c.fragment, [h, p] = Object(Ks.b)(h, p), p = ve(p, s)), !p && c.rtjson && (p = function(e) {
						const t = JSON.parse(e);
						return Object(o.convertFromRaw)(t).getBlockMap()
					}(c.rtjson)), !p && c.html && ([h, p] = Ls(h, c.html, u)), !p && c.text) {
					const e = function(e, t, n) {
						return o.CharacterMetadata.create({
							style: n,
							entity: Bs()(e, t)
						})
					}(h, l, d);
					p = Ns(0, c.text, e), [h, p] = function(e, t) {
						let n = e,
							o = t;
						return t.forEach(e => {
							const t = e.getText(),
								s = Uo.f.match(t);
							if (!s) return;
							let r = e;
							s.forEach(e => {
								let {
									index: t,
									lastIndex: s,
									url: i
								} = e;
								const c = (n = n.createEntity(F.a.LINK, "MUTABLE", {
									url: i
								})).getLastCreatedEntityKey();
								r = Object(Ms.a)(r, t, s, c), o = o.set(r.getKey(), r)
							})
						}), [n, o]
					}(h, p)
				}
				if (p) return h = function(e, t, n) {
					if (n.isEmpty()) return e;
					let o = de(e, t, n) || je(e, t, n);
					return o || (o = Y.c(e, t, n))
				}(h, l, p), o.EditorState.push(e, h, Z.e)
			}
			var Us = n("./src/reddit/components/RichTextEditor/entity/getSelectionEntityInfo.ts"),
				Hs = n("./src/reddit/components/RichTextEditor/Tooltip/getSelectionClientRect.ts"),
				Ws = n("./src/reddit/components/RichTextEditor/LinksController/LinkDetailsPopup/index.m.less"),
				zs = n.n(Ws);
			const qs = E.a.div("LinkDetailsBox", zs.a),
				Vs = E.a.a("Link", zs.a),
				Gs = E.a.a("LinkButton", zs.a);
			var Ys = e => p.a.createElement("div", null, p.a.createElement(qs, {
					onMouseDown: e => e.preventDefault()
				}, p.a.createElement(Vs, {
					href: e.url,
					target: "_blank"
				}, e.url), p.a.createElement("span", null, " – "), p.a.createElement(Gs, {
					onClick: () => e.onStartEdit(),
					role: "button"
				}, s.fbt._("Change", null, {
					hk: "3aOmcP"
				})), p.a.createElement("span", null, " | "), p.a.createElement(Gs, {
					onClick: () => e.onRemove(),
					role: "button"
				}, s.fbt._("Remove", null, {
					hk: "3tYl0U"
				})))),
				Qs = n("./src/reddit/controls/Input/index.tsx"),
				Js = n("./src/reddit/components/RichTextEditor/LinksController/LinkEditorPopup/index.m.less"),
				Xs = n.n(Js);
			const Zs = E.a.form("EditForm", Xs.a),
				$s = E.a.wrapped(e => p.a.createElement("div", e, e.children), "LinkEditorBox", Xs.a),
				er = E.a.wrapped(Qs.a, "Input", Xs.a),
				tr = E.a.label("Label", Xs.a),
				nr = E.a.div("HintAndButtonRow", Xs.a),
				or = E.a.span("InvalidUrlHint", Xs.a),
				sr = E.a.wrapped(ot.l, "SubmitButton", Xs.a),
				rr = e => {
					e && (e.focus(), e.select())
				},
				ir = / /g,
				cr = /\.{3}/g,
				ar = e => e.replace(ir, "%20").replace(cr, "%2E%2E%2E");
			class lr extends u.Component {
				constructor(e) {
					super(e), this.focused = !1, this.focusLostTimer = 0, this.textInputElementRef = null, this.urlInputElementRef = null, this.onEdited = () => {
						const e = this.state.url.trim(),
							t = ar(e),
							n = Object(Uo.i)(t);
						if (!n) return this.setState({
							isInvalidUrl: !0
						}), void(this.urlInputElementRef && this.urlInputElementRef.focus());
						const o = n.url;
						this.props.onEdited(o, this.state.displayText.trim() || e)
					}, this.onFocus = () => {
						this.focused = !0
					}, this.onBlur = () => {
						this.focused = !1, this.focusLostTimer = window.setTimeout(() => {
							this.focused || this.props.onFocusLost()
						}, 0)
					}, this.onClick = e => {
						e.stopPropagation()
					}, this.handleUrlChange = e => {
						const t = e.target.value;
						let {
							isInvalidUrl: n
						} = this.state;
						n && Object(Uo.h)(Uo.f, t) && (n = !1), this.setState({
							url: t,
							isInvalidUrl: n
						})
					}, this.handleDisplayTextChange = e => {
						this.setState({
							displayText: e.target.value
						})
					}, this.handleSubmit = e => {
						this.onEdited(), e.preventDefault()
					}, this.state = {
						url: e.url,
						displayText: e.displayText,
						isInvalidUrl: !1
					}
				}
				componentDidMount() {
					Object(Uo.h)(Uo.f, this.state.displayText) ? rr(this.textInputElementRef) : rr(this.urlInputElementRef)
				}
				componentWillUnmount() {
					this.focusLostTimer && clearTimeout(this.focusLostTimer)
				}
				render() {
					const {
						isInsertMode: e
					} = this.props;
					return p.a.createElement($s, {
						tabIndex: 0,
						onClick: this.onClick,
						onBlur: this.onBlur,
						onFocus: this.onFocus
					}, p.a.createElement(Zs, {
						onSubmit: this.handleSubmit
					}, p.a.createElement(tr, null, s.fbt._("Text:", null, {
						hk: "13SRB5"
					}), p.a.createElement(er, {
						innerRef: e => this.textInputElementRef = e,
						type: "text",
						placeholder: s.fbt._("Title of link (optional)", null, {
							hk: "17GvI"
						}),
						value: this.state.displayText,
						onChange: this.handleDisplayTextChange
					})), p.a.createElement(tr, null, s.fbt._("Link:", null, {
						hk: "3XqufJ"
					}), p.a.createElement(er, {
						innerRef: e => this.urlInputElementRef = e,
						type: "text",
						placeholder: s.fbt._("Paste or type a link", null, {
							hk: "3QWoAf"
						}),
						value: this.state.url,
						onChange: this.handleUrlChange
					})), p.a.createElement(nr, null, p.a.createElement(sr, {
						type: "submit",
						disabled: this.state.isInvalidUrl
					}, e ? s.fbt._("Insert", null, {
						hk: "3H7yaS"
					}) : s.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), this.state.isInvalidUrl ? p.a.createElement(or, null, s.fbt._("Link doesn't look right", null, {
						hk: "1BHfKz"
					})) : null)))
				}
			}

			function dr(e, t, n) {
				const o = e.getCurrentContent(),
					s = {
						text: "",
						url: ""
					};
				if (t.isCollapsed()) return s;
				if (n) s.text = n.entityText, s.url = o.getEntity(n.entityKey).getData().url;
				else {
					s.text = function(e, t) {
						if (e.getStartKey() !== e.getEndKey()) throw new Error("Selection must be in a single block");
						return e.isCollapsed() ? "" : t.getBlockForKey(e.getStartKey()).getText().slice(e.getStartOffset(), e.getEndOffset())
					}(t, e.getCurrentContent());
					const n = Object(Uo.h)(Uo.f, s.text);
					n && (s.url = n.url)
				}
				return s
			}

			function ur(e, t) {
				return o.EditorState.set(e, {
					currentContent: o.Modifier.removeInlineStyle(e.getCurrentContent(), t, R.k.HIGHLIGHT)
				})
			}
			class pr extends u.Component {
				constructor(e) {
					super(e), this.api = null, this.updateTooltipPosition = null, this.lastEditorSelectionClientRect = null, this.editLinkInSelection = e => {
						const {
							editorState: t
						} = this.props;
						let n = e,
							s = t;
						const r = t.getCurrentContent();
						if (!Object(Mo.e)(r, e)) return !1;
						const i = Object(Us.a)(r, e);
						if (i) {
							if (r.getEntity(i.entityKey).getType() !== F.a.LINK) return !1;
							n = i.entitySelection
						} else this.isEditorFocused() && (this.lastEditorSelectionClientRect = Object(Hs.a)());
						return this.state.linkSelection && (s = ur(t, this.state.linkSelection)), s = function(e, t) {
							return o.EditorState.set(e, {
								currentContent: o.Modifier.applyInlineStyle(e.getCurrentContent(), t, R.k.HIGHLIGHT)
							})
						}(t, n), this.props.onChange(s, () => {
							this.setState({
								linkSelection: n,
								linkEntity: i
							})
						}), !0
					}, this.hidePopup = () => {
						this.interruptLinkEditing(), this.hideDetailsPopup()
					}, this.showDetailsPopup = () => {
						this.state.isDetailsPopupActive || this.setState({
							isDetailsPopupActive: !0
						})
					}, this.hideDetailsPopup = () => {
						this.state.isDetailsPopupActive && this.setState({
							isDetailsPopupActive: !1
						})
					}, this.updatePosition = () => {
						if (!this.updateTooltipPosition) return;
						const {
							editorState: e,
							containerRef: t
						} = this.props, n = e.getCurrentContent();
						let o;
						if (this.state.linkSelection) {
							const e = Object(Us.a)(n, this.state.linkSelection);
							if (e) {
								const t = this.props.entityElementRegistry.get(e.entityKey);
								o = t && t.getBoundingClientRect()
							} else this.lastEditorSelectionClientRect && (o = this.lastEditorSelectionClientRect)
						} else {
							const n = Object(Mo.c)(e);
							if (n) {
								const e = this.props.entityElementRegistry.get(n.entityKey);
								o = e && e.getBoundingClientRect()
							} else o = t && t.getBoundingClientRect()
						}
						o && (this.updateTooltipPosition({
							left: o.left,
							top: o.bottom
						}), this.lastEditorSelectionClientRect = null)
					}, this.handleLink = (e, t) => {
						const {
							linkSelection: n
						} = this.state, {
							editorState: s
						} = this.props;
						let r = s;
						n && (n.isCollapsed() || (r = ur(s, n)), void 0 !== e && (r = Object(Mo.h)(r, n, e, t)), this.setState({
							linkSelection: null,
							linkEntity: null
						}), r !== s && (r = o.EditorState.forceSelection(r, r.getSelection()), this.props.onChange(r)))
					}, this.onLinkEdited = (e, t) => {
						this.handleLink(e, t)
					}, this.interruptLinkEditing = () => this.handleLink(), this.isEditorFocused = () => this.props.editorState.getSelection().getHasFocus(), this.onStartEditFocusedLink = () => {
						const {
							editorState: e
						} = this.props, t = Object(Mo.c)(e);
						t && this.editLinkInSelection(t.entitySelection)
					}, this.onRemoveFocusedLink = () => {
						const {
							editorState: e
						} = this.props, t = Object(Mo.c)(e);
						t && this.props.onChange(Object(Mo.h)(e, t.entitySelection, ""))
					}, this.renderEditorPopup = () => {
						const {
							linkSelection: e,
							linkEntity: t
						} = this.state, {
							editorState: n
						} = this.props;
						if (!e) return null;
						const {
							text: o,
							url: s
						} = dr(n, e, t);
						return p.a.createElement(lr, {
							url: s,
							displayText: o,
							isInsertMode: !t,
							onEdited: this.onLinkEdited,
							onFocusLost: this.interruptLinkEditing
						})
					}, this.renderDetailsPopup = () => {
						const e = Object(Mo.c)(this.props.editorState);
						return e && this.isEditorFocused() && this.state.isDetailsPopupActive ? p.a.createElement(Ys, {
							url: e.url,
							onStartEdit: this.onStartEditFocusedLink,
							onRemove: this.onRemoveFocusedLink
						}) : null
					}, this.state = {
						isDetailsPopupActive: !1,
						linkSelection: null,
						linkEntity: null
					}, this.api = {
						editLinkInSelection: this.editLinkInSelection,
						hidePopup: this.hidePopup
					}
				}
				componentDidMount() {
					const {
						onSetApi: e
					} = this.props;
					this.api && e && e(this.api)
				}
				componentWillUnmount() {
					this.props.onSetApi && this.props.onSetApi(null)
				}
				componentDidUpdate(e, t) {
					t.linkSelection === this.state.linkSelection && e.editorState === this.props.editorState || (this.showDetailsPopup(), this.updatePosition())
				}
				render() {
					return p.a.createElement(Nn.b, {
						onSetPositionUpdater: e => this.updateTooltipPosition = e,
						trianglePlacement: Nn.a.Above
					}, this.renderEditorPopup() || this.renderDetailsPopup())
				}
			}
			var hr = n("./src/reddit/components/RichTextEditor/OrderedList/index.m.less"),
				mr = n.n(hr);
			const gr = E.a.ol("OrderedListWrapper", mr.a),
				fr = Object(P.Map)({
					[R.i.ORDERED]: {
						element: "li",
						aliasedElements: ["li"],
						wrapper: p.a.createElement(gr, null)
					}
				});
			var br = n("./src/reddit/components/RichTextEditor/Paragraph/index.m.less"),
				yr = n.n(br);
			const Er = E.a.div("ParagraphWrapper", yr.a),
				Sr = Object(P.Map)({
					[R.n]: {
						element: "div",
						aliasedElements: ["p"],
						wrapper: p.a.createElement(Er, null)
					}
				});
			var xr = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx");
			var Cr = n("./src/reddit/components/RichTextEditor/TextRendering/index.m.less"),
				Or = n.n(Cr);
			const kr = Object($o.a)(() => ({
					[R.k.SUPERSCRIPT]: {
						position: "relative",
						top: "-0.4em",
						fontSize: "0.7em",
						lineHeight: "0.7em"
					},
					[R.k.HIGHLIGHT]: {
						backgroundColor: "#b8e0f9"
					},
					[R.k.UNDERLINE]: {
						textDecoration: "none"
					},
					[R.k.MONOSPACE]: {
						backgroundColor: "var(--newRedditTheme-field)",
						caretColor: "#000",
						color: "var(--newRedditTheme-monospaceColor)",
						fontFamily: "Noto Mono, Menlo, Monaco, Consolas, monospace",
						padding: "0.1em 0.2em",
						fontSize: "0.8em",
						borderRadius: "3px"
					}
				})),
				Tr = E.a.div("H1", Or.a),
				vr = E.a.div("H2", Or.a),
				jr = E.a.div("H3", Or.a),
				_r = E.a.div("H4", Or.a),
				Rr = E.a.div("H5", Or.a),
				wr = E.a.div("H6", Or.a),
				Br = e => ({
					component: t => p.a.createElement(e, null, p.a.createElement(o.EditorBlock, t)),
					editable: !0
				}),
				Ir = {
					[R.g.H1]: Br(Tr),
					[R.g.H2]: Br(vr),
					[R.g.H3]: Br(jr),
					[R.g.H4]: Br(_r),
					[R.g.H5]: Br(Rr),
					[R.g.H6]: Br(wr)
				},
				Ar = ["italic normal 1em 'Noto Sans'", "italic bold 1em 'Noto Sans'", "normal bold 1em 'Noto Sans'"],
				Kr = () => {
					const e = document.fonts;
					e && e.load && Ar.forEach(t => e.load(t))
				};
			var Mr = n("./src/reddit/components/RichTextEditor/UnorderedList/index.m.less"),
				Lr = n.n(Mr);
			const Nr = E.a.ul("UnorderedListWrapper", Lr.a),
				Dr = Object(P.Map)({
					[R.i.UNORDERED]: {
						element: "li",
						aliasedElements: ["li"],
						wrapper: p.a.createElement(Nr, null)
					}
				});
			var Fr = n("./src/reddit/contexts/InsideOverlay.tsx"),
				Pr = n("./src/reddit/actions/subredditAutocomplete/index.ts"),
				Ur = n("./src/reddit/controls/SubredditDropdown/index.m.less"),
				Hr = n.n(Ur);

			function Wr() {
				return (Wr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const zr = e => {
				let {
					isFocused: t,
					...n
				} = e;
				return p.a.createElement("div", Wr({
					className: Object(b.a)(Hr.a.entry, {
						[Hr.a.mIsFocused]: t
					})
				}, n))
			};
			class qr extends u.Component {
				constructor(e) {
					super(e), this.mouseDown = !1, this.onMouseUp = () => {
						this.mouseDown && (this.props.onEntrySelect(this.props.entry), this.mouseDown = !1)
					}, this.onMouseDown = e => {
						this.mouseDown = !0, e.preventDefault()
					}, this.onMouseOver = () => {
						this.props.onEntryFocus(this.props.entry)
					}, this.mouseDown = !1
				}
				componentDidUpdate() {
					this.mouseDown = !1
				}
				render() {
					return p.a.createElement(zr, {
						isFocused: this.props.isFocused,
						onMouseDown: this.onMouseDown,
						onMouseUp: this.onMouseUp,
						onMouseOver: this.onMouseOver
					}, this.props.children)
				}
			}
			var Vr = n("./src/reddit/helpers/name/index.ts"),
				Gr = n("./src/reddit/selectors/subredditAutocomplete.ts");
			const Yr = Object(m.c)({
				subredditSuggestions: (e, t) => {
					const n = Object(Gr.d)(e, t);
					return n ? n.subreddits : []
				}
			});
			class Qr extends u.Component {
				constructor(e) {
					super(e), this.api = null, this.onEntrySelect = e => {
						this.props.onSelect(this.props.subredditSuggestions[e].name)
					}, this.onEntryFocus = e => {
						this.setState({
							selectedSuggestionIndex: e
						})
					}, this.moveUp = () => {
						if (this.props.subredditSuggestions.length > 1) {
							let e = this.state.selectedSuggestionIndex - 1;
							return e = e < 0 ? this.props.subredditSuggestions.length - 1 : e, this.setState({
								selectedSuggestionIndex: e
							}), !0
						}
						return !1
					}, this.moveDown = () => {
						if (this.props.subredditSuggestions.length > 1) {
							const e = (this.state.selectedSuggestionIndex + 1) % this.props.subredditSuggestions.length;
							return this.setState({
								selectedSuggestionIndex: e
							}), !0
						}
						return !1
					}, this.selectCurrent = () => {
						if (this.props.subredditSuggestions.length) {
							const e = this.props.subredditSuggestions[this.state.selectedSuggestionIndex];
							return e && this.props.onSelect(e.name), !0
						}
						return !1
					}, this.state = {
						selectedSuggestionIndex: 0
					}, this.requestSubredditAutocomplete = i()(this.requestSubredditAutocomplete.bind(this), 200, {
						maxWait: 200
					}), this.api = {
						moveUp: this.moveUp,
						moveDown: this.moveDown,
						selectCurrent: this.selectCurrent
					}
				}
				componentDidMount() {
					this.requestSubredditAutocomplete(this.props.substring), this.props.onDropdownApi(this.api)
				}
				componentWillUnmount() {
					this.props.onDropdownApi(null)
				}
				componentWillReceiveProps(e) {
					e.substring !== this.props.substring && (this.requestSubredditAutocomplete(e.substring), this.setState({
						selectedSuggestionIndex: 0
					}))
				}
				requestSubredditAutocomplete(e) {
					this.props.onGetSubredditAutocomplete(e)
				}
				render() {
					return this.props.subredditSuggestions.length ? p.a.createElement("div", {
						className: Object(b.a)(Hr.a.list, this.props.className)
					}, this.props.subredditSuggestions.map((e, t) => p.a.createElement(qr, {
						entry: t,
						isFocused: t === this.state.selectedSuggestionIndex,
						key: e.name,
						onEntrySelect: this.onEntrySelect,
						onEntryFocus: this.onEntryFocus
					}, Object(Vr.c)(e.name)))) : null
				}
			}
			var Jr = Object(h.b)(Yr, (e, t) => ({
					onGetSubredditAutocomplete: t => {
						e(Pr.a(t))
					}
				}))(Qr),
				Xr = n("./src/reddit/selectors/comments.ts");
			const Zr = Object(m.c)({
				commentAuthors: Xr.h
			});
			class $r extends u.Component {
				constructor(e) {
					super(e), this.api = null, this.onEntrySelect = e => {
						this.props.onSelect(this.state.userSuggestions[e])
					}, this.onEntryFocus = e => {
						this.setState({
							selectedSuggestionIndex: e
						})
					}, this.moveUp = () => {
						if (this.state.userSuggestions.length > 1) {
							let e = this.state.selectedSuggestionIndex - 1;
							return e = e < 0 ? this.state.userSuggestions.length - 1 : e, this.setState({
								selectedSuggestionIndex: e
							}), !0
						}
						return !1
					}, this.moveDown = () => {
						if (this.state.userSuggestions.length > 1) {
							const e = (this.state.selectedSuggestionIndex + 1) % this.state.userSuggestions.length;
							return this.setState({
								selectedSuggestionIndex: e
							}), !0
						}
						return !1
					}, this.selectCurrent = () => {
						if (this.state.userSuggestions.length) {
							const e = this.state.userSuggestions[this.state.selectedSuggestionIndex];
							return e && this.props.onSelect(e), !0
						}
						return !1
					}, this.state = {
						userSuggestions: [],
						selectedSuggestionIndex: 0
					}, this.api = {
						moveUp: this.moveUp,
						moveDown: this.moveDown,
						selectCurrent: this.selectCurrent
					}
				}
				componentDidMount() {
					this.props.onDropdownApi(this.api), this.setState({
						userSuggestions: this.filterUsers(this.props.substring)
					})
				}
				componentWillUnmount() {
					this.props.onDropdownApi(null)
				}
				componentWillReceiveProps(e) {
					e.substring !== this.props.substring && this.setState({
						selectedSuggestionIndex: 0,
						userSuggestions: this.filterUsers(e.substring)
					})
				}
				filterUsers(e) {
					const {
						commentAuthors: t
					} = this.props;
					return t.filter(t => t.toLowerCase().startsWith(e.toLowerCase()))
				}
				render() {
					return this.state.userSuggestions.length ? p.a.createElement("div", {
						className: Object(b.a)(Hr.a.list, this.props.className)
					}, this.state.userSuggestions.map((e, t) => p.a.createElement(qr, {
						key: t,
						entry: t,
						onEntryFocus: this.onEntryFocus,
						onEntrySelect: this.onEntrySelect,
						isFocused: t === this.state.selectedSuggestionIndex
					}, Object(Vr.d)(e)))) : null
				}
			}
			var ei = Object(h.b)(Zr)($r),
				ti = n("./node_modules/lodash/dropRightWhile.js"),
				ni = n.n(ti),
				oi = n("./node_modules/lodash/flatMap.js"),
				si = n.n(oi),
				ri = n("./node_modules/lodash/reduceRight.js"),
				ii = n.n(ri),
				ci = n("./node_modules/lodash/trimEnd.js"),
				ai = n.n(ci),
				li = n("./node_modules/lodash/trimStart.js"),
				di = n.n(li),
				ui = n("./src/lib/forEachGroup/index.ts");

			function pi(e, t) {
				const n = [],
					o = e.withMutations(e => {
						for (; e.size && t(e.first());) n.push(e.first()), e.shift()
					});
				return {
					popped: n,
					stack: o
				}
			}
			var hi = n("./src/lib/unicodeUtils/index.ts"),
				mi = n("./src/reddit/helpers/richTextJson/index.ts"),
				gi = n("./src/reddit/models/RichTextJson/nodeMakers.ts");
			const fi = {
				BOLD: Wn.j.bold,
				ITALIC: Wn.j.italic,
				MONOSPACE: Wn.j.monospace,
				STRIKETHROUGH: Wn.j.strikethrough,
				SUBSCRIPT: Wn.j.subscript,
				SUPERSCRIPT: Wn.j.superscript,
				UNDERLINE: Wn.j.underline
			};
			var bi = (e, t) => yi(e.getBlockMap(), e, t);
			const yi = (e, t, n) => {
					const o = [];
					let s = e.toStack();
					for (; s.size;) {
						const e = s.first(),
							r = e.getType();
						switch (s = s.shift(), r) {
							case R.g.H1:
							case R.g.H2:
							case R.g.H3:
							case R.g.H4:
							case R.g.H5:
							case R.g.H6:
								o.push(ki(e, t));
								break;
							case R.e: {
								const {
									popped: n,
									stack: r
								} = pi(s, e => e.getType() === R.e);
								s = r, o.push(Ti([e, ...n], t));
								break
							}
							case R.f: {
								const {
									popped: t,
									stack: n
								} = pi(s, e => e.getType() === R.f);
								s = n, o.push(vi([e, ...t]));
								break
							}
							case R.i.ORDERED:
							case R.i.UNORDERED: {
								const {
									popped: n,
									stack: i
								} = pi(s, e => e.getType() === r);
								s = i, o.push(ji([e, ...n], t));
								break
							}
							case R.l: {
								const {
									popped: n,
									stack: r
								} = pi(s, e => Object(R.v)(e.getType()));
								s = r, o.push(_i([e, ...n], t));
								break
							}
							case R.a: {
								let t = s.first();
								t && Object(R.u)(t.getType()) ? s = s.shift() : t = void 0, o.push(Ri(e, t, n));
								break
							}
							case R.n:
							default:
								o.push(Ci(e, t))
						}
					}
					return o
				},
				Ei = e => e.reduce((e, t) => t === R.k.UNDERLINE || t === R.k.SUBSCRIPT ? e : e | (fi[t] || 0) | 0, 0),
				Si = (e, t) => {
					const n = [],
						o = Object(hi.b)(e);
					return Object(ui.a)(t, {
						keyFn: e => e.getStyle()
					}, (t, s, r, i) => {
						if (s.isEmpty()) return;
						const c = e.slice(r, i),
							a = r + (c.length - di()(c).length),
							l = i - (c.length - ai()(c).length),
							d = l - a,
							u = o[a],
							p = o[l] - u;
						d > 0 && n.push([Ei(s), u, p])
					}), n.length ? n : null
				},
				xi = (e, t) => {
					const n = e.getText(),
						o = e.getCharacterList(),
						s = [],
						r = R.d.includes(e.getType()),
						i = R.c.includes(e.getType());
					let c = 0;
					return Object(ui.a)(o, {
						keyFn: (e, o) => {
							const s = e.getEntity();
							return r && e.getStyle().contains(R.k.SPOILER) ? "spoiler" : Object(F.b)(s, t) ? `link-${e.getEntity()}` : "\n" === n[o] ? i ? "linebreak" : "skip" : s && t.getEntity(s).getType() === F.a.EMOTE ? `emote-${c++}` : "text"
						}
					}, (e, r, i, c) => {
						const a = n.slice(i, c),
							l = o.slice(i, c).toList();
						if ("text" === r) {
							const e = Si(a, l);
							s.push(Object(gi.s)(a, e))
						} else if ("spoiler" === r) s.push(Object(gi.n)(a));
						else if (r.startsWith("link-")) {
							const n = t.getEntity(e.getEntity());
							s.push(((e, t, n) => {
								const o = e.getType(),
									s = [F.a.USER_LINK, F.a.USER_MENTION],
									{
										url: r
									} = e.getData(),
									i = t.startsWith("/");
								if (o === F.a.SUBREDDIT_LINK) {
									const e = t.replace(S.e, "");
									return Object(gi.o)(e, i)
								}
								if (s.includes(o)) {
									const e = t.replace(S.a, "");
									return Object(gi.t)(e, i)
								}
								const c = Si(t, n);
								return Object(gi.i)(t, r, c)
							})(n, a, l))
						} else if ("linebreak" === r) s.push(Object(gi.h)());
						else if (r.startsWith("emote-")) {
							const n = t.getEntity(e.getEntity()).getData();
							s.push(Object(gi.e)(n.fullId, n.imageType))
						}
					}), s
				},
				Ci = (e, t) => Object(gi.l)(xi(e, t)),
				Oi = e => "text" === e.e ? Object(gi.m)(e.t) : "link" === e.e ? Object(gi.i)(e.t, e.u, null) : e.e === Wn.x ? e.c.map(Oi) : e.e === Wn.n ? Object(gi.m)("") : e,
				ki = (e, t) => Object(gi.f)(R.m[e.getType()], ((e, t) => ii()(si()(xi(e, t), Oi), (e, t) => {
					let [n, ...o] = e;
					if (!n) return [t];
					const s = o.length ? o : [];
					return n && "raw" === t.e && "raw" === n.e ? [Object(gi.m)(t.t + n.t), ...s] : [t, n, ...s]
				}, []))(e, t)),
				Ti = (e, t) => Object(gi.c)(ni()(e.map(e => ((e, t) => e.getText().trim().length ? Ci(e, t) : gi.a)(e, t)), e => e === gi.a)),
				vi = e => Object(gi.d)(e.map(e => Object(gi.m)(e.getText()))),
				ji = (e, t) => {
					if (!e.length) return Object(gi.k)([], !1);
					const n = e[0].getDepth();
					let o = null;
					const s = [];
					let r = [];
					const i = () => null !== o || r.length,
						c = () => {
							const e = [];
							null !== o && (e.push(o), o = null), r.length && (e.push(ji(r, t)), r = []), s.push(Object(gi.j)(e))
						};
					return e.forEach(e => {
						e.getDepth() > n ? r.push(e) : (i() && c(), o = Object(gi.l)(xi(e, t)))
					}), i() && c(), Object(gi.k)(s, e[0].getType() === R.i.ORDERED)
				},
				_i = (e, t) => {
					const n = [...e].sort(Q.b),
						o = n[0],
						{
							colCount: s
						} = Object(Q.g)(o),
						r = W()(n, s),
						i = r[0].map(e => {
							const {
								alignment: n
							} = Object(Q.g)(e);
							return Object(gi.q)(xi(e, t), n)
						}),
						c = r.slice(1).map(e => e.map(e => Object(gi.p)(xi(e, t))));
					return Object(gi.r)(i, c)
				},
				Ri = (e, t, n) => {
					const o = Object(N.h)(e);
					if (!o) throw new Error("Invalid atomic block!");
					const {
						uploadInfo: s,
						mediaAsset: r,
						makeGif: i
					} = o, c = t ? t.getText() : "";
					if (s && n) {
						const e = n[s.uploadKey],
							t = e && e.metadata.mimetype || "",
							{
								assetId: r,
								thumbnailAssetId: a
							} = Object(N.f)(o, n);
						return Object(He.l)(t) ? Object(gi.b)(r, c) : Object(He.m)(t) ? Object(gi.g)(r, c) : Object(gi.u)(r, c, a, i)
					} {
						const {
							assetId: e,
							type: t
						} = r;
						let n;
						switch (t) {
							case N.a.AnimatedImage:
								n = Object(gi.b)(e, c);
								break;
							case N.a.Image:
								n = Object(gi.g)(e, c);
								break;
							case N.a.Video:
								n = Object(gi.u)(e, c);
								break;
							default:
								throw new Error("Invalid media type")
						}
						return Object(mi.g)(e) ? Object(gi.l)([n]) : n
					}
				};
			var wi, Bi = n("./src/reddit/constants/componentSizes.ts"),
				Ii = n("./src/reddit/constants/elementIds.ts");
			! function(e) {
				e.Up = "up", e.Down = "down"
			}(wi || (wi = {}));
			var Ai = e => {
					const t = window.getSelection().focusNode;
					if (!t || !t.parentElement) return;
					const n = document.getElementById(Ii.e),
						o = n || document.documentElement;
					if (!o) return;
					const s = window.innerHeight,
						{
							bottom: r,
							top: i
						} = t.parentElement.getBoundingClientRect(),
						c = n ? 0 : Bi.f + Bi.o;
					e === wi.Up && i < c ? o.scrollBy(0, i - c) : e === wi.Down && r > s && o.scrollBy(0, r - s)
				},
				Ki = n("./src/reddit/models/Product/index.ts"),
				Mi = (e, t, n) => {
					const o = {
						url: n
					};
					return e.createEntity(t, "MUTABLE", o)
				},
				Li = n("./node_modules/lodash/maxBy.js"),
				Ni = n.n(Li);
			const Di = (e, t) => {
				if (!t) return (e => {
					const t = e.id;
					switch (e.e) {
						case Wn.m:
							return {
								assetId: t, type: N.a.Image
							};
						case Wn.a:
							return {
								assetId: t, type: N.a.AnimatedImage
							};
						case Wn.D:
							return {
								assetId: t, type: N.a.Video
							}
					}
				})(e);
				const n = t.id;
				switch (t.e) {
					case Wn.s: {
						const {
							s: e
						} = t;
						return {
							assetId: n,
							type: N.a.Image,
							imageUrl: e.u,
							width: e.x,
							height: e.y
						}
					}
					case Wn.r: {
						const {
							s: e
						} = t;
						return {
							assetId: n,
							type: N.a.AnimatedImage,
							imageUrl: e.gif,
							posterUrl: e.p,
							dashUrl: e.mp4,
							width: e.x,
							height: e.y
						}
					}
					case Wn.t: {
						const {
							isGif: e,
							dashUrl: o,
							hlsUrl: s,
							p: r,
							x: i,
							y: c
						} = t;
						let a;
						if (r) {
							a = Ni()(r, e => e.x).u
						}
						return {
							assetId: n,
							type: N.a.Video,
							isGif: e,
							dashUrl: o,
							hlsUrl: s,
							posterUrl: a,
							width: i,
							height: c
						}
					}
				}
			};

			function Fi(e, t, n) {
				const s = e.id,
					r = e.c,
					i = Wn.E(t, s),
					c = Di(e, i),
					a = [new o.ContentBlock({
						key: Object(o.genKey)(),
						type: R.a,
						data: Object(P.Map)({
							mediaAsset: c
						})
					})];
				if (n) {
					const e = Object(D.h)(Object(o.genKey)(), r).merge({
						type: R.j
					});
					a.push(e)
				}
				return a
			}
			const Pi = Object.keys(fi),
				Ui = (e, t, n) => {
					switch (t.e) {
						case Wn.u:
							return Gi(e, t.c, R.b.UNSTYLED, n);
						case Wn.k:
							const o = R.h[t.l];
							return Gi(e, t.c || [], o, n);
						case Wn.p:
							return zi(e, t, n);
						case Wn.b:
							return Hi(e, t, n);
						case Wn.c:
							return void t.c.forEach(t => Gi(e, [t], R.b.CODE_BLOCK, n));
						case Wn.z:
							return Wi(e, t, n);
						case Wn.m:
						case Wn.a:
						case Wn.D:
							return void e.blocks.push(...Fi(t, n.mediaMetadataMap, Object(N.q)(n.editorType)))
					}
				},
				Hi = (e, t, n) => {
					t && t.c && t.c.length && t.c.forEach(t => t.e === Wn.u ? Gi(e, t.c, R.b.BLOCK_QUOTE, n) : Ui(e, t, n))
				},
				Wi = (e, t, n) => {
					const {
						h: o,
						c: s
					} = t, r = o.length;
					[o, ...s].forEach((t, s) => t.forEach((t, i) => {
						const {
							c = []
						} = t, {
							a
						} = o[i], l = {
							alignment: a,
							colCount: r,
							colIndex: i,
							rowIndex: s
						};
						Gi(e, c, R.b.TABLE_CELL, n, l)
					}))
				},
				zi = function(e, t, n) {
					let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
					const s = t.o ? R.b.ORDERED_LIST : R.b.UNORDERED_LIST;
					t.c.forEach(t => {
						const r = t.c;
						if (!r || !r.length) return;
						const [i, c] = r, a = i.e === Wn.u ? i.c : [];
						Gi(e, a, s, n, void 0, o), c && c.e === Wn.p && zi(e, c, n, o + 1)
					})
				},
				qi = {
					[Wn.y]: ["r/", "/r/"],
					[Wn.B]: ["u/", "/user/"],
					[Wn.C]: ["u/", "/user/"],
					[Wn.v]: ["p/", ""],
					[Wn.g]: ["c/", ""]
				},
				Vi = {
					[Wn.y]: F.a.SUBREDDIT_LINK,
					[Wn.B]: F.a.USER_LINK,
					[Wn.C]: F.a.USER_MENTION,
					[Wn.v]: F.a.POST_LINK,
					[Wn.g]: F.a.COMMENT_LINK
				},
				Gi = function(e, t, n, s) {
					let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
						i = arguments.length > 5 ? arguments[5] : void 0,
						c = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
					const a = e.content;
					if (1 === t.length && (t[0].e === Wn.m || t[0].e === Wn.a)) {
						const n = t[0];
						if (Object(mi.g)(n.id)) return void e.blocks.push(...Fi(n, s.mediaMetadataMap, Object(N.q)(s.editorType)))
					}
					const {
						charList: l,
						text: d,
						updatedContent: u
					} = Yi(t, a, s), p = new o.ContentBlock({
						key: Object(o.genKey)(),
						characterList: Object(P.List)(l),
						data: Object(P.fromJS)(r),
						depth: i,
						text: d,
						type: n
					});
					e.content = u || a, c ? e.blocks.unshift(p) : e.blocks.push(p)
				},
				Yi = (e, t, n) => {
					let o = t,
						s = "";
					const r = [];
					if (e.forEach(e => {
							const t = Qi(e, o, n);
							o = t.updatedContent || o, s += t.text, r.push(...t.charList)
						}), s.length !== r.length) throw new Error("Characters length mismatch!");
					return {
						charList: r,
						text: s,
						updatedContent: o !== t ? o : void 0
					}
				},
				Qi = (e, t, n) => {
					switch (e.e) {
						case Wn.A: {
							const {
								t,
								f: n
							} = e;
							return {
								charList: Xi(t, n),
								text: t
							}
						}
						case Wn.x: {
							const {
								c: s
							} = e, r = Yi(s, t, n);
							return r.charList = r.charList.map(e => (e => o.CharacterMetadata.create({
								style: e.getStyle().add(R.k.SPOILER),
								entity: e.getEntity()
							}))(e)), r
						}
						case Wn.v:
						case Wn.g:
						case Wn.w: {
							const {
								t
							} = e;
							return {
								charList: Xi(t),
								text: t
							}
						}
						case Wn.y:
						case Wn.B:
						case Wn.C: {
							const [n, o] = qi[e.e], s = (e.l ? "/" : "") + n + e.t, r = o + e.t, i = Mi(t, Vi[e.e], r), c = i.getLastCreatedEntityKey();
							return {
								charList: Xi(s, void 0, c),
								text: s,
								updatedContent: i
							}
						}
						case Wn.o: {
							const {
								t: n,
								u: o,
								f: s
							} = e, r = Mi(t, F.a.LINK, o), i = r.getLastCreatedEntityKey();
							return {
								charList: Xi(n, s, i),
								text: n,
								updatedContent: r
							}
						}
						case Wn.m:
						case Wn.a:
							const {
								id: s
							} = e;
							if (s.startsWith("emote|")) {
								const e = Object(Ki.b)(s),
									o = n.activeEmotes && n.activeEmotes[e];
								if (o) {
									const e = Object(Oo.c)(t, o),
										n = e.getLastCreatedEntityKey(),
										s = Oo.a;
									return {
										charList: Xi(s, void 0, n),
										text: s,
										updatedContent: e
									}
								}
								const r = `:${e}:`;
								return {
									charList: Xi(r),
									text: r
								}
							}
							return {
								text: "", charList: Xi("")
							};
						default:
							return {
								text: "", charList: Xi("")
							}
					}
				},
				Ji = e => {
					const t = Pi.filter(t => !!(fi[t] & e));
					return Object(P.OrderedSet)(t)
				},
				Xi = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
					const s = o.CharacterMetadata.create({
							entity: n
						}),
						r = Array(e.length).fill(s),
						i = Object(hi.a)(e);
					return t && t.forEach(e => {
						const [t, s, c] = e, a = Ji(t), l = s + c, d = o.CharacterMetadata.create({
							entity: n,
							style: a
						});
						r.fill(d, i[s], i[l])
					}), r
				},
				Zi = (e, t) => {
					e.blocks.length && (e.blocks[0].getType() === R.b.TABLE_CELL && Gi(e, [], R.b.UNSTYLED, t, void 0, void 0, !0), e.blocks[e.blocks.length - 1].getType() === R.b.TABLE_CELL && Gi(e, [], R.b.UNSTYLED, t))
				};
			var $i = (e, t, n, s) => {
					const r = "string" == typeof e ? JSON.parse(e) : e;
					if (!r || !r.document || !r.document.length) return null;
					const i = {
							editorType: t,
							mediaMetadataMap: n,
							activeEmotes: s ? s.reduce((e, t) => ({
								...e,
								...t.emotes
							}), {}) : void 0
						},
						c = {
							blocks: [],
							content: o.ContentState.createFromText("")
						};
					r.document.forEach(e => {
						Ui(c, e, i)
					}), 0 === c.blocks.length && Gi(c, [], R.b.UNSTYLED, i), Zi(c, i);
					const a = o.BlockMapBuilder.createFromArray(c.blocks),
						l = o.SelectionState.createEmpty(a.first().getKey());
					return c.content.merge({
						blockMap: a,
						selectionBefore: l,
						selectionAfter: l
					})
				},
				ec = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				tc = n("./src/reddit/components/UsersCountIndicator/constants.ts"),
				nc = n("./src/reddit/constants/elementClassNames.ts"),
				oc = n("./src/reddit/constants/keycodes.ts"),
				sc = n("./src/reddit/helpers/correlationIdTracker.ts"),
				rc = n("./src/reddit/icons/svgs/Send/index.tsx"),
				ic = n("./src/reddit/selectors/economics.ts"),
				cc = n("./src/reddit/components/RichTextEditor/index.m.less"),
				ac = n.n(cc);

			function lc() {
				return (lc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			Object(xr.b)({
				draftToRTFJson: bi,
				getMediaCount: N.g,
				getPendingThumbnailUploads: N.i,
				isAllMediaUploaded: N.m
			});
			const dc = "handled",
				uc = "not-handled",
				pc = /^\s*$/,
				hc = 20,
				mc = E.a.wrapped(ds.a, "FocusableContent", ac.a),
				gc = E.a.div("Container", ac.a),
				fc = E.a.wrapped(ec.a, "CurrentUserIcon", ac.a),
				bc = e => `${T.b}-${e}`,
				yc = Object(h.b)(() => {
					const e = (() => Object(m.a)(e => e.uploads, (e, t) => t.rteState.editorKey, (e, t) => a()(e, e => e.key.startsWith(bc(t)))))();
					return Object(m.c)({
						editorUploads: e,
						emotesSpecialMembershipEnabled: v.d.spEmotes,
						giphySpecialMembershipEnabled: v.d.spGiphy,
						activeEmotes: (e, t) => {
							var n;
							return Object(ic.b)(e, {
								subredditId: null === (n = t.destSubreddit) || void 0 === n ? void 0 : n.id
							})
						},
						shouldShowCommentGifsTooltip: (e, t) => {
							var n;
							return Object(_o.c)(e, {
								subredditId: null === (n = t.destSubreddit) || void 0 === n ? void 0 : n.id
							})
						}
					})
				}, e => ({
					onFetchEditorProducts: t => e(Object(k.e)(t)),
					onTrackMediaDrop: t => e((e, n) => j.t(n(), t)),
					retryUpload: t => e(T.c(t)),
					startUploads: (t, n, o, s, r) => e(T.e(t, n, bc(o), s, r))
				}));
			class Ec extends u.Component {
				constructor(e) {
					super(e), this.blockRenderMap = o.DefaultDraftBlockRenderMap.merge(ms, bs, Kn, fr, Sr, Dr, an), this.editorHeight = null, this.editorRef = null, this.editorRootStyleMutationObserver = null, this.linksControllerApi = null, this.suggestionDropdownApi = null, this.tableToolbarControllerApi = null, this.emotesTooltipApi = null, this.gifTooltipApi = null, this.updateSuggestionDropdownPosition = null, this.isJustAutocompleteSelected = !1, this.isJustLinkified = !1, this.isMouseDown = !1, this.isJustConvertedToList = !1, this.needSyncScroll = null, this.transforms = {
						[w.BREAK_HEADER_ENTITY]: yo.b,
						[w.INSERT_LINE_BREAK]: yo.e,
						[w.REDUCE_LIST_INDENT]: yo.f,
						[w.RESET_CURRENT_AND_PREVIOUS_BLOCKS]: yo.g,
						[w.REMOVE_EXTRA_LIST_ITEM]: yo.h,
						[K.d]: e => Xo(e, this.props.editorType),
						[K.b]: e => Jo(e, this.props.editorType),
						[K.f]: yo.d,
						[K.c]: e => Object(yo.c)(R.k.BOLD, e),
						[K.e]: e => Object(yo.c)(R.k.ITALIC, e),
						[K.g]: e => Object(yo.c)(R.k.UNDERLINE, e)
					}, this.realtimeGQLVariables = void 0, this.setContainerRef = e => {
						const {
							domRef: t
						} = this.props;
						t && t(e), this.setState({
							containerRef: e
						})
					}, this.setFocusableContentRef = e => this.setState({
						focusableContentRef: e
					}), this.setUserStoppedTyping = i()(() => this.setState({
						isUserTyping: !1
					}), tc.c), this.rteStateChanged = (e, t) => {
						const n = {
							...this.props.rteState,
							isBound: !0,
							editorState: e
						};
						this.props.onChange(n, t), this.props.isTypingIndicatorsWriteTestEnabled && t && (this.state.isUserTyping || this.setState({
							isUserTyping: !0
						}), this.setUserStoppedTyping())
					}, this.hideTooltips = () => {
						this.emotesTooltipApi && this.emotesTooltipApi.closeTooltip(), this.gifTooltipApi && this.gifTooltipApi.closeTooltip(), this.tableToolbarControllerApi && this.tableToolbarControllerApi.hideActionButton(), this.linksControllerApi && this.linksControllerApi.hidePopup(), this.suppressAutocompleteForFocusedLink()
					}, this.onEditorStyleChanged = () => {
						if (!this.editorRef) return;
						const e = this.editorRef.refs.editor,
							t = e.style.height ? Number.parseInt(e.style.height) : null;
						this.editorHeight !== t && (this.hideTooltips(), this.editorHeight = t, t && this.props.onEditorResize && this.props.onEditorResize(t))
					}, this.insertValidatedMedia = () => {
						const {
							editorUploads: e,
							shouldOmitImageCaptionBlock: t
						} = this.props, {
							editorState: n,
							mediaToInsert: o
						} = this.state;
						if (!o) return;
						const {
							files: s,
							blockKey: r,
							insertionMode: i
						} = o, c = s.map(t => e.find(e => e.file === t)).filter(Boolean);
						this.setState({
							mediaToInsert: null
						});
						const a = c.filter(e => !!e.metadata.mimetype);
						a.length && this.onChange(Object(N.l)(n, a, r, i, t))
					}, this.focus = () => this.editorRef && this.editorRef.focus(), this.blur = () => this.editorRef && this.editorRef.blur(), this.isFocused = () => this.state.editorState.getSelection().getHasFocus(), this.isEmpty = () => !this.state.editorState.getCurrentContent().hasText(), this.setEditorRef = e => this.editorRef = e, this.setSuggestionDropdownApi = e => this.suggestionDropdownApi = e, this.setLinksControllerApi = e => this.linksControllerApi = e, this.setTableToolbarControllerApi = e => this.tableToolbarControllerApi = e, this.setEmotesTooltipApi = e => this.emotesTooltipApi = e, this.setGifTooltipApi = e => this.gifTooltipApi = e, this.setSuggestionDropdownPositionUpdater = e => this.updateSuggestionDropdownPosition = e, this.getEditorState = () => this.state.editorState, this.setEditorState = (e, t) => {
						const n = this.state.editorState.getCurrentContent() !== e.getCurrentContent();
						n && this.props.readOnly || (this.setState({
							editorState: e
						}, t), this.rteStateChanged(e, n))
					}, this.toolbarSetState = e => {
						const t = e.getInlineStyleOverride();
						let n = e;
						n.getSelection().getHasFocus() || (n = o.EditorState.forceSelection(n, n.getSelection()), t && (n = o.EditorState.setInlineStyleOverride(n, t))), this.onChange(n)
					}, this.onChange = (e, t) => {
						let n = e;
						n = Cn(n, this.state.editorState), n = Ne(n, this.props.editorType), this.emotesTooltipApi && (n = Object(Oo.d)(n, this.state.editorState)), n = zo(n, this.state.editorState), n = Object(ns.d)(n, this.state.editorState), this.setEditorState(n, t);
						let {
							suppressAutocompleteForLink: o
						} = this.state;
						if (o) {
							const t = Object(Mo.b)(e);
							t && t.entityKey === o || (o = null)
						}
						this.setState({
							suppressAutocompleteForLink: o
						}), this.isJustAutocompleteSelected = !1, this.isJustLinkified = !1, this.isMouseDown = !1, this.isJustConvertedToList = !1
					}, this.onFocus = () => {
						const {
							onFocus: e
						} = this.props;
						this.emotesTooltipApi && this.emotesTooltipApi.closeTooltip(), this.gifTooltipApi && this.gifTooltipApi.closeTooltip(), e && (Object(sc.d)(sc.a.CommentComposer, !1), e())
					}, this.handleBeforeInput = e => {
						const {
							editorState: t
						} = this.state;
						if (this.isMouseDown) return dc;
						if (Le(t, e)) return dc;
						let n = function(e, t) {
							const n = e.getSelection(),
								s = n.getFocusOffset();
							if (!n.isCollapsed() || 0 === s) return;
							const r = n.getFocusKey(),
								i = e.getCurrentContent(),
								c = i.getBlockForKey(r),
								a = c.getEntityAt(s - 1),
								l = c.getEntityAt(s);
							if (!(a && (!l || l !== a))) return;
							const d = i.getEntity(a),
								u = Ko.has(d.getType());
							if ("MUTABLE" === d.getMutability() && u) {
								const s = o.Modifier.insertText(i, n, t, e.getCurrentInlineStyle());
								return o.EditorState.push(e, s, "insert-characters")
							}
						}(t, e) || t;
						return (n = yn(n, e) || n) !== t ? (this.onChange(n), dc) : uc
					}, this.keyBindingFN = e => {
						const {
							editorState: t
						} = this.state, {
							submitOnEnter: n
						} = this.props, s = t.getSelection();
						if (e.metaKey && e.keyCode === oc.a.K) return w.OPEN_LINK_TOOLTIP;
						if (e.keyCode === oc.a.Space) {
							if (es(t)) return w.CONVERT_TO_LIST_ON_SPACE;
							if (Object(Mo.d)(t)) return w.LINKIFY_ON_SPACE
						} else if (e.keyCode === oc.a.Enter) {
							if (e.ctrlKey || e.metaKey || n && !e.shiftKey) return w.SUBMIT;
							if (e.shiftKey && Zo(t)) return w.INSERT_LINE_BREAK; {
								const e = this.enterKeyBinding(t);
								if (e) return e
							}
						} else if (e.keyCode === oc.a.Backspace) {
							if (this.isJustLinkified || this.isJustConvertedToList) return K.h;
							if (s.isCollapsed()) {
								const e = t.getCurrentContent(),
									n = s.getEndKey(),
									o = s.getStartOffset(),
									r = e.getBlockForKey(n),
									i = r.getType();
								if ((Object(R.s)(i) || Object(R.q)(i) || Object(R.p)(i)) && 0 === o && r.getLength() > 0) {
									const t = e.getBlockBefore(n);
									if (!t || t.getType() !== i) return w.MAKE_PLAIN_BLOCK
								}
							}
						}
						return Object(o.getDefaultKeyBinding)(e)
					}, this.handleKeyCommand = e => {
						const {
							editorState: t
						} = this.state;
						let n = e,
							s = null;
						const r = e => {
							let t = e;
							if (s) {
								const {
									selection: e,
									url: n
								} = s;
								t = Object(Mo.f)(t, e, n)
							}
							return this.onChange(t), this.isJustLinkified = !!s, dc
						};
						if (n === w.SUBMIT) this.props.onSubmit();
						else {
							if (n === w.CONVERT_TO_LIST_ON_SPACE) {
								const e = r(ts(t));
								return this.isJustConvertedToList = !0, e
							}
							if (n === w.LINKIFY_ON_SPACE) return s = Object(Mo.d)(t), r(Object(yo.a)(t));
							if (n === w.LINKIFY_ON_ENTER && (s = Object(Mo.d)(t), !(n = this.enterKeyBinding(t, !1)))) return r(Object(yo.d)(t))
						}
						if (n === w.OPEN_LINK_TOOLTIP) return this.onToolbarLinkButtonClick(), dc;
						if (n === w.MAKE_PLAIN_BLOCK) {
							return r(Object(yo.i)(R.n, t))
						}
						if (n === w.EXEC_TABLE_ON_ENTER_HANDLER) return r(this.tableOnEnterHandler.handle(t));
						const i = this.transforms[n];
						if (i) {
							const e = i(t);
							if (e) return r(e)
						}
						const c = o.RichUtils.handleKeyCommand(t, n);
						return c ? r(c) : uc
					}, this.handleOnTab = e => {
						if (this.emotesTooltipApi && this.emotesTooltipApi.handleTabInEditor() || this.suggestionDropdownApi && this.suggestionDropdownApi.selectCurrent()) return void e.preventDefault();
						const {
							editorState: t
						} = this.state;
						let n = mn(e, t);
						if (n = n || Qo(e, t)) return void this.onChange(n);
						const s = o.RichUtils.onTab(e, t, 2);
						this.onChange(s)
					}, this.handleOnUpArrow = e => {
						if (this.emotesTooltipApi && this.emotesTooltipApi.handleUpArrowInEditor() || this.suggestionDropdownApi && this.suggestionDropdownApi.moveUp()) return void e.preventDefault();
						const t = gn(e, this.state.editorState) || Ke(e, this.state.editorState);
						t && this.onChange(t), this.needSyncScroll = wi.Up
					}, this.handleOnDownArrow = e => {
						if (this.suggestionDropdownApi && this.suggestionDropdownApi.moveDown()) return void e.preventDefault();
						const t = fn(e, this.state.editorState) || Me(e, this.state.editorState);
						t && this.onChange(t), this.needSyncScroll = wi.Down
					}, this.handleReturn = e => {
						const t = Ie(this.state.editorState);
						return t ? (this.onChange(t), e.preventDefault(), dc) : this.suggestionDropdownApi && this.suggestionDropdownApi.selectCurrent() ? (e.preventDefault(), dc) : uc
					}, this.suppressAutocompleteForFocusedLink = () => {
						const e = Object(Mo.b)(this.state.editorState);
						e && this.state.suppressAutocompleteForLink !== e.entityKey && this.setState({
							suppressAutocompleteForLink: e.entityKey
						})
					}, this.handleEscape = e => {
						this.emotesTooltipApi && this.emotesTooltipApi.handleEscapeKeyInEditor(), this.suppressAutocompleteForFocusedLink()
					}, this.handleOnCopy = e => {
						this.editorRef && Oe(this.state.editorState, this.editorRef, e)
					}, this.handleOnCut = e => {
						const {
							editorState: t
						} = this.state;
						if (!this.editorRef) return;
						if (!Oe(t, this.editorRef, e)) return;
						const n = le(t) || Be(t) || Object(N.e)(t);
						n && this.onChange(n)
					}, this.handleOnPaste = e => {
						const {
							editorState: t
						} = this.state;
						if (!this.editorRef) return;
						if (this.handleFilesPaste(e, t), e.isPropagationStopped()) return;
						const n = Ps(t, this.editorRef, e, this.props.editorType);
						n && this.onChange(n)
					}, this.handleFilesPaste = (e, t) => {
						if (!this.props.allowMediaUploads) return void e.stopPropagation();
						const n = e.clipboardData.files;
						if (n && n.length) {
							const o = Array.from(n),
								s = t.getSelection().getEndKey();
							this.insertMediaFiles({
								files: o,
								blockKey: s,
								insertionMode: D.a.after,
								filesSource: C.FileSource.Clipboard
							}), e.stopPropagation()
						}
					}, this.handleOnMouseDown = e => {
						this.isMouseDown = !0
					}, this.handleOnMouseUp = e => {
						this.isMouseDown = !1
					}, this.handleDroppedFiles = (e, t) => dc, this.handleDrop = (e, t, n) => dc, this.handleBlur = () => {
						this.props.onBlur && this.props.onBlur()
					}, this.handlePastedText = (e, t) => dc, this.onInternalSuggestionSelected = e => {
						this.onChange(Object(Mo.g)(this.state.editorState, e)), this.isJustAutocompleteSelected = !0
					}, this.onToolbarEmoteButtonClick = e => {
						this.gifTooltipApi && this.gifTooltipApi.closeTooltip(), this.emotesTooltipApi && this.emotesTooltipApi.toggleTooltip(e)
					}, this.onToolbarGifButtonClick = e => {
						this.emotesTooltipApi && this.emotesTooltipApi.closeTooltip(), this.gifTooltipApi && this.gifTooltipApi.toggleTooltip(e)
					}, this.onToolbarLinkButtonClick = () => {
						if (!this.linksControllerApi) return;
						const {
							editorState: e
						} = this.state;
						this.linksControllerApi.editLinkInSelection(e.getSelection()) || Object(x.b)(void 0, "Current selection cannot be edited by link editor!")
					}, this.handleSwitchToMarkdownMode = () => {
						const {
							editorState: e
						} = this.state, {
							onSwitchEditorMode: t
						} = this.props, n = xr.a.toRichTextJSON({
							...this.props.rteState,
							isBound: !0,
							editorState: Object(N.c)(e)
						});
						t && t(_.i.MARKDOWN, n), this.state.confirmModalOpen && this.toggleConfirmModal()
					}, this.onToolbarMarkdownSwitchClick = () => {
						const {
							editorState: e
						} = this.state;
						e && qo(e) ? this.setState({
							confirmModalOpen: !0
						}) : this.handleSwitchToMarkdownMode()
					}, this.toggleConfirmModal = () => {
						this.setState({
							confirmModalOpen: !this.state.confirmModalOpen
						})
					}, this.insertMediaFiles = async e => {
						const {
							onFilesFilter: t,
							rteState: n,
							shouldUseGqlUploadLease: o,
							minImageDimension: s
						} = this.props, {
							files: r,
							filesSource: i
						} = e;
						let c = r;
						t && (c = t(r, this.state.editorState)), this.setState({
							mediaToInsert: {
								...e,
								files: c
							}
						});
						const a = c.slice(0, hc);
						await this.props.startUploads(a, i, n.editorKey, o, s), this.insertValidatedMedia()
					}, this.onRetryUpload = e => {
						this.props.retryUpload(e)
					}, this.onFilesSelect = e => {
						const {
							editorState: t
						} = this.state, n = t.getSelection().getEndKey();
						this.insertMediaFiles({
							files: e,
							blockKey: n,
							insertionMode: D.a.after,
							filesSource: C.FileSource.FileSelector
						})
					}, this.onFilesDrop = (e, t, n) => {
						this.props.onTrackMediaDrop(e), this.insertMediaFiles({
							files: e,
							blockKey: t,
							insertionMode: n,
							filesSource: C.FileSource.DragAndDrop
						})
					}, this.onBlockMove = (e, t, n) => {
						const {
							editorState: o
						} = this.state, s = Object(N.o)(o, e, t, n);
						s && this.onChange(s)
					}, this.getAtomicBlocksRenderConfig = () => ({
						component: on,
						props: {
							getEditorState: this.getEditorState,
							onChange: this.onChange,
							onRetryUpload: this.onRetryUpload,
							rteFocusableContentRef: this.state.focusableContentRef,
							editorType: this.props.editorType
						}
					}), this.blockRendererFn = e => {
						const t = e.getType();
						return t === R.a ? this.getAtomicBlocksRenderConfig() : t in Ir ? Ir[t] : void 0
					}, this.renderToolbar = e => p.a.createElement(Ft.b, e), this.entityElementRegistry = So(), this.tableOnEnterHandler = new bn;
					const {
						postId: t,
						isTypingIndicatorsWriteTestEnabled: n
					} = e;
					n && (this.realtimeGQLVariables = {
						input: {
							channel: {
								teamOwner: "CONTENT_AND_COMMUNITIES",
								category: "USER_IS_TYPING_ON_POST",
								postID: t
							}
						}
					});
					const {
						activeEmotes: s,
						editorType: r,
						noBorder: c,
						initialHeight: a,
						initialMinHeight: l,
						rteState: d
					} = e;
					let u;
					d.isBound ? u = d.editorState : Object(Wn.G)(d.initialRTJSON) ? u = this.createInitialState(d.editorKey) : (u = o.EditorState.createWithContent($i(d.initialRTJSON, r, d.mediaMetadataMap, s), this.editorDecorators()), u = this.moveSelectionToEnd(u)), this.state = {
						noBorder: c,
						containerRef: null,
						confirmModalOpen: !1,
						editorState: u,
						focusableContentRef: null,
						inited: !1,
						initialHeight: a,
						initialMinHeight: l,
						isUserTyping: !1,
						mediaToInsert: null,
						suppressAutocompleteForLink: null
					}
				}
				editorDecorators() {
					return new o.CompositeDecorator([jo(), ls(), Po()])
				}
				moveSelectionToEnd(e) {
					const t = e.getCurrentContent().getBlockMap(),
						n = t.last().getKey(),
						s = t.last().getLength(),
						r = new o.SelectionState({
							anchorKey: n,
							anchorOffset: s,
							focusKey: n,
							focusOffset: s
						});
					return o.EditorState.acceptSelection(e, r)
				}
				createInitialState(e) {
					return o.EditorState.createWithContent(o.ContentState.createFromBlockArray([new o.ContentBlock({
						key: `${e}_initial`
					})]), this.editorDecorators())
				}
				componentDidMount() {
					if (this.props.rteRef && this.props.rteRef(this), y.a.write(Kr), this.rteStateChanged(this.state.editorState, !1), this.editorRef) {
						const e = this.editorRef.refs.editor;
						e.addEventListener("scroll", this.hideTooltips), this.editorRootStyleMutationObserver = new MutationObserver(this.onEditorStyleChanged), this.editorRootStyleMutationObserver.observe(e, {
							attributes: !0,
							attributeFilter: ["style"]
						})
					}
					const {
						destSubreddit: e,
						emotesSpecialMembershipEnabled: t,
						giphySpecialMembershipEnabled: n
					} = this.props;
					e && e.id && (t || n) && this.props.onFetchEditorProducts(e.id)
				}
				componentDidUpdate(e, t) {
					const n = this.getLinkForAutocomplete();
					if (n && this.updateSuggestionDropdownPosition) {
						const e = this.entityElementRegistry.get(n.entityKey);
						if (e) {
							const {
								left: t,
								bottom: n,
								height: o
							} = e.getBoundingClientRect();
							this.updateSuggestionDropdownPosition({
								left: t,
								top: n,
								bottom: n - o
							})
						}
					}
					this.needSyncScroll && (Ai(this.needSyncScroll), this.needSyncScroll = null)
				}
				componentWillUnmount() {
					if (this.props.rteRef && this.props.rteRef(null), this.insertValidatedMedia = () => {}, this.props.isTypingIndicatorsWriteTestEnabled && this.setUserStoppedTyping.cancel(), this.editorRef) {
						this.editorRef.refs.editor.removeEventListener("scroll", this.hideTooltips)
					}
					this.editorRootStyleMutationObserver && (this.editorRootStyleMutationObserver.disconnect(), this.editorRootStyleMutationObserver = null)
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.rteState !== this.props.rteState && e.rteState.isBound && e.rteState.editorState !== this.state.editorState && this.setState({
						editorState: e.rteState.editorState
					})
				}
				shouldComponentUpdate(e, t) {
					if (t !== this.state) return !0;
					if (!(e.rteState.isBound && e.rteState.editorState === this.state.editorState)) return !0;
					return !f()(e, this.props, (e, t, n) => "rteState" === n || void 0)
				}
				enterKeyBinding(e) {
					let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
					const n = e.getCurrentContent(),
						o = e.getSelection(),
						s = o.getStartKey(),
						r = o.getEndKey(),
						i = o.getEndOffset(),
						c = n.getBlockForKey(s).getType(),
						a = n.getBlockForKey(r),
						l = a.getType(),
						d = i === a.getText().length;
					if (c === R.l || l === R.l) return w.EXEC_TABLE_ON_ENTER_HANDLER;
					if (o.isCollapsed()) {
						if (t && Object(Mo.d)(e)) return w.LINKIFY_ON_ENTER;
						if (Object(R.r)(l) && d) return w.BREAK_HEADER_ENTITY;
						if (Object(R.s)(l)) {
							if (pc.test(a.getText())) return a.getDepth() > 0 ? w.REDUCE_LIST_INDENT : w.REMOVE_EXTRA_LIST_ITEM
						} else if (l === R.e) {
							const e = n.getBlockBefore(r);
							if (e && e.getType() === R.e && pc.test(e.getText()) && pc.test(a.getText())) return w.RESET_CURRENT_AND_PREVIOUS_BLOCKS
						} else if (l === R.f) {
							const e = n.getBlockBefore(r),
								t = n.getBlockAfter(r);
							if (!a.getText() && e && e.getType() === R.f && !e.getText() && (!t || t.getType() !== R.f)) return w.RESET_CURRENT_AND_PREVIOUS_BLOCKS
						}
					}
				}
				getLinkForAutocomplete() {
					const {
						editorState: e,
						suppressAutocompleteForLink: t
					} = this.state;
					if (!this.isJustAutocompleteSelected && e.getSelection().getHasFocus()) {
						const n = Object(Mo.b)(e);
						if (n && n.entityKey !== t) return n
					}
				}
				renderInternalLinkSuggestionDropdown() {
					const {
						isChatPost: e
					} = this.props, t = this.getLinkForAutocomplete();
					return t ? p.a.createElement(Nn.b, {
						aboveParent: e,
						dropdown: !0,
						onSetPositionUpdater: this.setSuggestionDropdownPositionUpdater
					}, t.entityText.startsWith(S.f) && p.a.createElement(Jr, {
						onDropdownApi: this.setSuggestionDropdownApi,
						onSelect: this.onInternalSuggestionSelected,
						substring: t.internalName
					}), S.a.test(t.entityText) && p.a.createElement(ei, {
						onDropdownApi: this.setSuggestionDropdownApi,
						onSelect: this.onInternalSuggestionSelected,
						substring: t.internalName
					})) : null
				}
				render() {
					const {
						className: e,
						userCanUseEmojis: t,
						userCanUseGifs: n,
						allowMediaUploads: r = !1,
						dataTestId: i,
						destSubreddit: c,
						editorType: a,
						focusableContentRTEClassName: l,
						hideToolbar: u,
						rteState: h,
						isExpanded: m,
						isOverlay: g,
						isCommentBoxDesignEnabled: f,
						onSubmit: y,
						placeholderText: E,
						shouldShowCommentGifsTooltip: S,
						showSubmitButton: x = !1,
						submitButtonClassName: C,
						toolbarPosition: k = "top",
						renderToolbar: T = this.renderToolbar,
						isTypingIndicatorsWriteTestEnabled: v
					} = this.props, {
						editorKey: j
					} = h, {
						containerRef: _,
						editorState: R,
						mediaToInsert: w,
						confirmModalOpen: I,
						isUserTyping: K
					} = this.state, M = this.props.readOnly || !!w, L = B(R), N = this.isEmpty(), D = T({
						allowMediaUploads: r,
						destSubreddit: c,
						editorKey: j,
						editorState: R,
						isOverlay: !!g,
						onChange: this.toolbarSetState,
						onFilesSelect: this.onFilesSelect,
						trackOnClick: this.props.trackToolbarClick,
						readOnly: M,
						onEmoteButtonClick: this.onToolbarEmoteButtonClick,
						onGifButtonClick: this.onToolbarGifButtonClick,
						onLinkButtonClick: this.onToolbarLinkButtonClick,
						onMarkdownButtonClick: this.onToolbarMarkdownSwitchClick,
						userCanUseEmojis: !!t,
						userCanUseGifs: !!n
					}), F = !u && (!f || m);
					return p.a.createElement(gc, {
						className: e,
						innerRef: this.setContainerRef
					}, v && K && p.a.createElement(O.a, {
						variables: this.realtimeGQLVariables,
						onData: d.a,
						queryKey: "userIsTypingOnPost"
					}), f && p.a.createElement("div", {
						className: ac.a.userIcon
					}, p.a.createElement(fc, null)), p.a.createElement(mc, {
						className: Object(b.a)(l, {
							[ac.a.showSubmitButton]: x,
							[ac.a.mExpanded]: m,
							[ac.a.mRedesign]: f
						}),
						noBorder: this.props.noBorder,
						isFocused: this.isFocused(),
						ref: this.setFocusableContentRef
					}, F && "top" === k && D, _ && p.a.createElement(bo, {
						editorState: R,
						readOnly: M,
						onChange: this.onChange,
						onSetApi: this.setTableToolbarControllerApi,
						rteDomRef: _
					}), p.a.createElement("div", {
						className: Object(b.a)(ac.a.editorWrapper, {
							[ac.a.hasInitialHeight]: !!this.props.initialHeight,
							[ac.a.hasInitialMinHeight]: !!this.props.initialMinHeight,
							[ac.a.noBorder]: !!this.props.noBorder
						}),
						style: {
							"--rte-initial-height": this.props.initialHeight ? `${this.props.initialHeight}px` : void 0,
							"--rte-initial-min-height": this.props.initialMinHeight ? `${this.props.initialMinHeight}px` : void 0
						},
						"data-test-id": i,
						onCopyCapture: this.handleOnCopy,
						onCutCapture: this.handleOnCut,
						onPasteCapture: this.handleOnPaste,
						onMouseDown: this.handleOnMouseDown,
						onMouseUp: this.handleOnMouseUp
					}, p.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n                .${nc.b}[${nc.d}="${L}-0-0"]::after {\n                  bottom: 0;\n                  color: var(--newCommunityTheme-actionIcon);\n                  content: '${E}';\n                  cursor: text;\n                  left: 0;\n                  position: absolute;\n                  top: 0;\n                }\n              `
						}
					}), p.a.createElement(js, {
						allowMediaUploads: r && !M,
						onBlockMove: this.onBlockMove,
						onFilesDrop: this.onFilesDrop,
						editorState: R,
						onChange: this.onChange
					}, p.a.createElement(xo.Provider, {
						value: this.entityElementRegistry
					}, p.a.createElement(o.Editor, {
						readOnly: M,
						ref: this.setEditorRef,
						blockRendererFn: this.blockRendererFn,
						blockRenderMap: this.blockRenderMap,
						editorKey: j,
						editorState: R,
						keyBindingFn: this.keyBindingFN,
						handleBeforeInput: this.handleBeforeInput,
						handleKeyCommand: this.handleKeyCommand,
						handlePastedText: this.handlePastedText,
						handleDroppedFiles: this.handleDroppedFiles,
						handleDrop: this.handleDrop,
						onBlur: this.handleBlur,
						onChange: this.onChange,
						onFocus: this.onFocus,
						onTab: this.handleOnTab,
						onUpArrow: this.handleOnUpArrow,
						onDownArrow: this.handleOnDownArrow,
						onEscape: this.handleEscape,
						spellCheck: !0,
						handleReturn: this.handleReturn,
						customStyleMap: kr()
					})))), F && "bottom" === k && D, p.a.createElement(pr, {
						containerRef: _,
						editorState: R,
						entityElementRegistry: this.entityElementRegistry,
						onSetApi: this.setLinksControllerApi,
						onChange: this.onChange
					}), a === We.a.Comment && c && p.a.createElement(Ao, {
						editorState: R,
						onChange: this.onChange,
						onSetApi: this.setEmotesTooltipApi,
						subreddit: c,
						userCanUseEmojis: !!t
					}), (S || n) && c && p.a.createElement(ss, {
						editorState: R,
						onChange: this.onChange,
						onSetApi: this.setGifTooltipApi,
						subreddit: c,
						userCanUseGifs: !!n
					}), this.renderInternalLinkSuggestionDropdown(), x && p.a.createElement(ot.e, {
						"aria-label": s.fbt._("submit", null, {
							hk: "12XoZ8"
						}),
						className: Object(b.a)(C, ac.a.insetSubmitButton, {
							[ac.a.emptyContent]: N,
							[ac.a.focusedContent]: this.isFocused()
						}),
						disabled: N,
						onClick: y,
						tabIndex: -1,
						type: "submit"
					}, p.a.createElement(rc.a, null))), I && p.a.createElement(A.a, {
						toggleModal: this.toggleConfirmModal,
						onConfirm: this.handleSwitchToMarkdownMode,
						actionText: s.fbt._("Continue", null, {
							hk: "3aoEeD"
						}),
						cancelActionText: s.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}),
						headerText: s.fbt._("Switch to Markdown", null, {
							hk: "3zGkKa"
						}),
						modalText: a === We.a.Comment ? s.fbt._("Switching to markdown will remove any image or GIF from your comment.", null, {
							hk: "3v46Jt"
						}) : s.fbt._("Switching to markdown will remove any images, gifs or videos from your post.", null, {
							hk: "3rlwkB"
						}),
						trackClick: () => {}
					}))
				}
			}
			t.a = yc(Object(Fr.b)(e => p.a.createElement(Ec, lc({
				key: e.rteState.editorKey
			}, e))))
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/ImagePreview/index.m.less": function(e, t, n) {
			e.exports = {
				Img: "_1gJwMe53cjYITkMu0Ve8j-",
				img: "_1gJwMe53cjYITkMu0Ve8j-",
				Component: "_3VYFd7PKhTJ-0i22YsgFPv",
				component: "_3VYFd7PKhTJ-0i22YsgFPv"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/Placeholder/index.m.less": function(e, t, n) {
			e.exports = {
				Message: "_3cyJHYsdZdz4RWdmrzyYx-",
				message: "_3cyJHYsdZdz4RWdmrzyYx-",
				Component: "_3JSUHg1gLhxUj4PB_Pgw8a",
				component: "_3JSUHg1gLhxUj4PB_Pgw8a"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/StatusBar/index.m.less": function(e, t, n) {
			e.exports = {
				buttonBaseStyles: "_3R1ajPuzbs2MdbXedj3YXU",
				ControlRow: "_1rrSEjTxZcLOZTDNZlj5N4",
				controlRow: "_1rrSEjTxZcLOZTDNZlj5N4",
				ButtonsContainer: "dZ3F6qSOhun6ezUwcnbal",
				buttonsContainer: "dZ3F6qSOhun6ezUwcnbal",
				Button: "_2rIEdliEXr7qNb-COL-zuO",
				button: "_2rIEdliEXr7qNb-COL-zuO",
				ErrButton: "_3CUr1530H3uD-ts9tKd9RA",
				errButton: "_3CUr1530H3uD-ts9tKd9RA",
				Status: "jXuqxr-x0kyU3BSfugjwM",
				status: "jXuqxr-x0kyU3BSfugjwM",
				hasError: "_4XwI6tILia1pR9HTda4wv",
				ProgressBar: "_1NvtB5J5UfhiHd0ix7TZgb",
				progressBar: "_1NvtB5J5UfhiHd0ix7TZgb",
				ProgressBarInner: "_29o2WRRYmrLU47NaFzQzxq",
				progressBarInner: "_29o2WRRYmrLU47NaFzQzxq",
				ErrorLine: "_3M-thbkBHHvsWjDt8edbhz",
				errorLine: "_3M-thbkBHHvsWjDt8edbhz",
				Component: "_1CqupI5I-zzAInIdLwphQg",
				component: "_1CqupI5I-zzAInIdLwphQg"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/VideoPreview/index.m.less": function(e, t, n) {
			e.exports = {
				VideoPlayer: "_3gstD1_YUjNWZqjtwdgU9t",
				videoPlayer: "_3gstD1_YUjNWZqjtwdgU9t",
				PosterImg: "_2C2yx7Rf_BKPOyll-aq_hI",
				posterImg: "_2C2yx7Rf_BKPOyll-aq_hI",
				Poster: "_1UCJLqzcYXck8Ahv0PlvVw",
				poster: "_1UCJLqzcYXck8Ahv0PlvVw",
				Component: "wSihDBKVJH6iP2jdDjRQ6",
				component: "wSihDBKVJH6iP2jdDjRQ6",
				playButton: "il4HPAfKcVtq-WQY-if85"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/index.m.less": function(e, t, n) {
			e.exports = {
				statusBar: "_33CSkXq7gXeXCM2zSal9BN",
				container: "_1FMEfWD94pPZ_HdEN_e7Xy",
				isCompact: "_3-T8BPflZuKw_F2VRPDbcX",
				isUploaded: "_3Lj2c902Oeb7yL_jYu9v5L",
				isSelected: "Eaps2a9y_jwhKHth8v14G",
				imagePreview: "_2nlrFrYbO0bIKFeZ3HMbn_",
				placeholder: "_1-LSy7nvfNGWVhRWwwQu6A",
				videoPreview: "_2MumquPHY8gruoy6114twC",
				alignCenter: "_3U9f0TNBM1K2bggm3KMHTk",
				renderSmallMedia: "_3L8V1OmRzcZEzmJFdJV6dS"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/SelectionHook/index.m.less": function(e, t, n) {
			e.exports = {
				HiddenDiv: "_13RYjdyxMuKrkV_EtlOjhg",
				hiddenDiv: "_13RYjdyxMuKrkV_EtlOjhg"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/Toolbar/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3hDtN0e5U4EpahGe25ye-b",
				alignCenter: "Vh7FGvkGyl5SeyJP4J1GG",
				content: "_3wXzBVn-uBvRcixZwQWkNX",
				multiButtonToolbarContent: "_4g7-oW_EplZpFIKv75-Lu",
				FormatterButton: "_6DRydZXlG3Ko7_4xxYUhW",
				formatterButton: "_6DRydZXlG3Ko7_4xxYUhW",
				ToolbarContent: "_3qUkCQkbZvTB6uBQEQQfSZ",
				toolbarContent: "_3qUkCQkbZvTB6uBQEQQfSZ"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/index.m.less": function(e, t, n) {
			e.exports = {
				MediaContainer: "_12ZUhulrgf1BAChnRZHmZt",
				mediaContainer: "_12ZUhulrgf1BAChnRZHmZt",
				Container: "DK9d46mm9FgC8mFWPGlG_",
				container: "DK9d46mm9FgC8mFWPGlG_"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaCaption/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2eZK2IABgFqGZLMYPxwoNY"
			}
		},
		"./src/reddit/components/RichTextEditor/media/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "q", (function() {
				return b
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "r", (function() {
				return E
			})), n.d(t, "l", (function() {
				return S
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "n", (function() {
				return C
			})), n.d(t, "p", (function() {
				return O
			})), n.d(t, "d", (function() {
				return T
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "m", (function() {
				return R
			})), n.d(t, "g", (function() {
				return w
			})), n.d(t, "j", (function() {
				return B
			})), n.d(t, "i", (function() {
				return I
			})), n.d(t, "o", (function() {
				return A
			})), n.d(t, "b", (function() {
				return K
			})), n.d(t, "f", (function() {
				return L
			}));
			var o, s = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./node_modules/immutable/dist/immutable.js"),
				i = n("./node_modules/lodash/flatten.js"),
				c = n.n(i),
				a = n("./node_modules/lodash/last.js"),
				l = n.n(a),
				d = n("./src/reddit/helpers/media/index.ts"),
				u = n("./src/reddit/helpers/richTextEditor/index.ts"),
				p = n("./src/reddit/helpers/richTextJson/index.ts"),
				h = n("./src/reddit/models/Upload/index.ts"),
				m = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				g = n("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				f = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			! function(e) {
				e[e.Image = 0] = "Image", e[e.AnimatedImage = 1] = "AnimatedImage", e[e.Video = 2] = "Video"
			}(o || (o = {}));
			const b = e => e !== u.a.Comment,
				y = e => {
					if (!Object(f.o)(e.getType())) return;
					const t = e.getData(),
						n = t.get("mediaAsset"),
						o = t.get("uploadInfo");
					if (!n && !o) return;
					const s = t.get("thumbnail");
					return {
						makeGif: t.get("makeGif"),
						thumbnail: s,
						uploadInfo: o,
						mediaAsset: n
					}
				},
				E = (e, t, n) => {
					let o = e.getCurrentContent();
					const i = o.getBlockForKey(t),
						c = y(i),
						a = c && c.uploadInfo;
					if (!a) throw new Error("Block must contain `uploadInfo` data");
					if (n.makeGif === c.makeGif && n.thumbnail === c.thumbnail) return e;
					const l = Object(r.Map)(n),
						d = o.getBlockMap().toKeyedSeq().filter(e => {
							const t = y(e);
							return !!t && !!t.uploadInfo && t.uploadInfo.uploadKey === a.uploadKey
						}).map(e => e.mergeIn(["data"], l));
					return o = (o = o.mergeIn(["blockMap"], d)).merge({
						selectionAfter: e.getSelection()
					}), s.EditorState.push(e, o, m.b)
				},
				S = (e, t, n, o, i) => {
					let a = e.getCurrentContent();
					const u = c()(t.map(e => {
						const t = Object(d.g)(e.metadata.mimetype),
							n = (e => {
								if (e && e.metadata.videoFirstFrameUrl) {
									return {
										url: e.metadata.videoFirstFrameUrl,
										time: 0
									}
								}
							})(e),
							o = new s.ContentBlock({
								key: Object(s.genKey)(),
								type: f.a,
								data: Object(r.Map)({
									uploadInfo: {
										mediaType: t,
										uploadKey: e.key
									},
									thumbnail: n
								})
							}),
							c = new s.ContentBlock({
								key: Object(s.genKey)(),
								type: f.j
							});
						return i ? [o] : [o, c]
					}));
					a = Object(g.f)(a, n, u, o);
					const p = s.EditorState.push(e, a, m.e),
						h = l()(u);
					return s.EditorState.forceSelection(p, Object(g.b)(h, !0))
				},
				x = (e, t, n, i, c, a, l, d) => {
					const u = new s.ContentBlock({
							key: Object(s.genKey)(),
							type: f.a,
							data: Object(r.Map)({
								mediaAsset: {
									type: o.AnimatedImage,
									assetId: Object(p.c)(t, i),
									imageUrl: n,
									width: c,
									height: a
								}
							})
						}),
						h = Object(g.f)(e.getCurrentContent(), l, [u], d);
					let b = s.EditorState.push(e, h, m.e);
					b = s.EditorState.forceSelection(b, Object(g.b)(u, !0));
					const y = u.getKey();
					return b.getCurrentContent().getBlockAfter(y) || (b = K(b, y)), b
				};

			function C(e, t) {
				return e.isCollapsed() && e.getStartKey() === t && 0 === e.getStartOffset() && 0 === e.getEndOffset()
			}

			function O(e, t) {
				const n = e.getCurrentContent().getBlockAfter(t);
				return s.EditorState.forceSelection(e, Object(g.b)(n, !0))
			}
			const k = (e, t) => {
					const n = e.getBlockAfter(t);
					return e = Object(g.i)(e, t), n && Object(f.u)(n.getType()) && (e = Object(g.i)(e, n.getKey())), e
				},
				T = function(e, t) {
					let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
						o = e.getCurrentContent();
					o = k(o, t);
					let r = n ? s.EditorState.push(e, o, m.f) : s.EditorState.set(e, {
						currentContent: o
					});
					return r = s.EditorState.forceSelection(r, o.getSelectionAfter())
				},
				v = e => {
					let t = e.getCurrentContent();
					_(t).forEach(e => {
						t = k(t, e.getKey())
					});
					const n = s.EditorState.push(e, t, m.f);
					return s.EditorState.forceSelection(n, t.getSelectionAfter())
				},
				j = e => {
					let t = e.getCurrentContent();
					const n = e.getSelection();
					t = s.Modifier.removeRange(t, n, "forward");
					let o = s.EditorState.push(e, t, m.f);
					return o = s.EditorState.forceSelection(o, t.getSelectionAfter())
				},
				_ = e => e.getBlockMap().toSeq().filter(e => !!e && !!y(e)),
				R = (e, t) => e.getBlockMap().toSeq().filter(e => {
					const n = y(e),
						o = n && n.uploadInfo && n.uploadInfo.uploadKey;
					return !(!o || t[o] && t[o].url)
				}).isEmpty(),
				w = e => {
					const t = _(e),
						n = {
							gifvideo: 0,
							image: 0,
							video: 0,
							total: 0
						};
					return t.forEach(e => {
						const t = y(e);
						let s;
						s = t.makeGif ? "gifvideo" : t.uploadInfo && "video" === t.uploadInfo.mediaType || t.mediaAsset && t.mediaAsset.type === o.Video ? "video" : "image", n[s]++, n.total++
					}), n
				},
				B = e => !_(e).isEmpty(),
				I = (e, t) => {
					const n = _(e).map(e => {
						const n = y(e),
							{
								uploadInfo: o,
								thumbnail: s
							} = n;
						if (!o || !s) return;
						const r = M(n),
							i = t[r];
						return i && i.url ? void 0 : {
							...s,
							uploadKey: r
						}
					}).filter(Boolean).toArray();
					return n.length ? n : void 0
				},
				A = (e, t, n, o) => {
					let r = e.getCurrentContent();
					const i = r.getBlockForKey(t),
						c = r.getBlockAfter(t),
						a = [i];
					if (c && Object(f.u)(c.getType()) && a.push(c), a.find(e => e.getKey() === n)) return;
					const d = a.reduce((e, t) => e.remove(t.getKey()), r.getBlockMap());
					r = r.set("blockMap", d), r = Object(g.f)(r, n, a, o);
					const u = s.EditorState.push(e, r, m.e);
					return s.EditorState.forceSelection(u, Object(g.b)(l()(a), !0))
				},
				K = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g.a.after;
					const o = Object(g.h)(),
						r = Object(g.f)(e.getCurrentContent(), t, [o], n),
						i = s.EditorState.push(e, r, m.e);
					return s.EditorState.forceSelection(i, s.SelectionState.createEmpty(o.getKey()))
				},
				M = e => e.thumbnail && e.uploadInfo ? `${e.uploadInfo.uploadKey}-thumbnail-${e.thumbnail.time}` : "",
				L = (e, t) => {
					let n = "",
						o = "";
					if (e.uploadInfo) {
						const {
							uploadKey: s
						} = e.uploadInfo, r = t[s];
						r && r.url && (n = Object(h.b)(r.url));
						const i = t[M(e)];
						i && i.url && (o = Object(h.b)(i.url))
					}
					return {
						assetId: n,
						thumbnailAssetId: o
					}
				}
		},
		"./src/reddit/components/RichTextEditor/spoiler/decorator.m.less": function(e, t, n) {
			e.exports = {
				spoiler: "_1AlhnBqYYVTQbTr33YViyK"
			}
		},
		"./src/reddit/components/RichTextEditor/spoiler/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			}));
			var o = n("./src/lib/forEachGroup/index.ts"),
				s = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const r = e => e.getStyle().has(s.k.SPOILER);

			function i(e, t, n) {
				const s = e.getCharacterList();
				Object(o.a)(s, {
					keyFn: r
				}, (e, n, o, s) => {
					n && t(o, s)
				})
			}
		},
		"./src/reddit/components/RichTextEditor/table/Renderer/index.m.less": function(e, t, n) {
			e.exports = {
				Cell: "_1J5sneEp0XXo0pFsMN7Kjs",
				cell: "_1J5sneEp0XXo0pFsMN7Kjs",
				Row: "_2Hd-Rc7z9gTKIz6JUGhbcl",
				row: "_2Hd-Rc7z9gTKIz6JUGhbcl",
				Table: "_9QFGu47IyMX1ID1xQid-8",
				table: "_9QFGu47IyMX1ID1xQid-8",
				isFakeSelectionActive: "_1QXaG0_iXh-LFDkah9HqP3"
			}
		},
		"./src/reddit/components/RichTextEditor/table/Toolbar/index.m.less": function(e, t, n) {
			e.exports = {
				formatterButton: "_1dNavKEU0lSO4mo9fYWTPm",
				ToolbarContent: "_1yPmb5QUbyAQX1wIs4FYQI",
				toolbarContent: "_1yPmb5QUbyAQX1wIs4FYQI",
				tooltip: "_3fnB5glctifL-mkYhH6aA1"
			}
		},
		"./src/reddit/components/RichTextEditor/table/ToolbarController/index.m.less": function(e, t, n) {
			e.exports = {
				ActionButton: "_2g2bsszGVtKe_XRKcRrpQi",
				actionButton: "_2g2bsszGVtKe_XRKcRrpQi",
				isPressed: "_2WwwYG59S_TJRq7FSdTVKK",
				ToolbarWrapper: "_3rXrpMuvoGNBbLE7TQQCB9",
				toolbarWrapper: "_3rXrpMuvoGNBbLE7TQQCB9"
			}
		},
		"./src/reddit/components/RichTextEditor/table/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "m", (function() {
				return u
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "i", (function() {
				return S
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "o", (function() {
				return C
			})), n.d(t, "d", (function() {
				return O
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/immutable/dist/immutable.js"),
				r = n("./src/reddit/models/RichTextJson/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/helpers/sliceContiguousBlocks.ts"),
				c = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const a = {
					[r.e]: "left",
					[r.f]: "right",
					[r.d]: "center"
				},
				l = e => {
					const t = e.getData();
					return {
						colIndex: t.get("colIndex"),
						rowIndex: t.get("rowIndex"),
						colCount: t.get("colCount"),
						alignment: t.get("alignment")
					}
				},
				d = ["data"],
				u = (e, t) => e.mergeIn(d, t),
				p = (e, t, n) => e.merge({
					text: e.getText().slice(t, n),
					characterList: e.getCharacterList().slice(t, n)
				}),
				h = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
						s = arguments.length > 3 ? arguments[3] : void 0;
					const r = t.map(e => e.getText()).join(n),
						i = n ? s || o.CharacterMetadata.create() : null,
						c = [];
					return t.forEach(e => {
						c.push(...e.getCharacterList().toArray()), i && t.length > 1 && c.push(i)
					}), e.merge({
						text: r,
						characterList: c
					})
				},
				m = (e, t) => {
					const n = [];
					for (let r = 0; r < t; r++)
						for (let t = 0; t < e; t++) n.push(new o.ContentBlock({
							key: Object(o.genKey)(),
							type: c.l,
							data: Object(s.Map)({
								colCount: e,
								colIndex: t,
								rowIndex: r
							})
						}));
					return n
				},
				g = (e, t) => ({
					minCol: Math.min(e.colIndex, t.colIndex),
					minRow: Math.min(e.rowIndex, t.rowIndex),
					maxCol: Math.max(e.colIndex, t.colIndex),
					maxRow: Math.max(e.rowIndex, t.rowIndex)
				}),
				f = (e, t) => {
					const {
						minCol: n,
						minRow: o,
						maxCol: s,
						maxRow: r
					} = g(e, t);
					return (e, t) => o <= e && e <= r && n <= t && t <= s
				},
				b = (e, t) => e.rowIndex < t.rowIndex ? -1 : e.rowIndex > t.rowIndex ? 1 : e.colIndex - t.colIndex,
				y = (e, t) => e === t || !(!e || !t) && 0 === b(e, t),
				E = (e, t) => b(l(e), l(t)),
				S = e => {
					if (Object(c.v)(e.getType())) {
						return 0 === l(e).rowIndex
					}
					return !1
				},
				x = (e, t, n) => {
					const o = (t, n) => {
						if (t) {
							const o = Object(i.a)(e, t);
							return o && n && -1 !== o.blocks.indexOf(n) ? [o, o] : [o, n ? Object(i.a)(e, n) : null]
						}
						return n ? o(n, null).reverse() : [null, null]
					};
					return o(Object(c.v)(t.getType()) ? t : null, Object(c.v)(n.getType()) ? n : null)
				},
				C = function(e, t, n) {
					let o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					const s = {
						isBackward: o
					};
					return t && (s.anchorKey = t.getKey(), s.anchorOffset = o ? t.getLength() : 0), n && (s.focusKey = n.getKey(), s.focusOffset = o ? 0 : n.getLength()), e.merge(s)
				},
				O = e => {
					if (!e.length) return [];
					const t = e[0].length;
					return e.map((e, n) => e.map((e, o) => u(e, {
						rowIndex: n,
						colIndex: o,
						colCount: t
					})))
				}
		},
		"./src/reddit/components/ThumbnailSelector/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "uqOt5KqJAqw5pe-WNxa0a",
				component: "uqOt5KqJAqw5pe-WNxa0a",
				TitleRow: "HEiFtUR3s93dQ2jUWWnxr",
				titleRow: "HEiFtUR3s93dQ2jUWWnxr",
				Close: "_3RlS_q06rJ_8dy_UNp3Ev7",
				close: "_3RlS_q06rJ_8dy_UNp3Ev7",
				CloseWrapper: "_3lFQIq1yN1kLxjZb5AvHjL",
				closeWrapper: "_3lFQIq1yN1kLxjZb5AvHjL",
				ThumbnailsContainer: "_2sw7c1Sfzp0uz-RIcglCo",
				thumbnailsContainer: "_2sw7c1Sfzp0uz-RIcglCo",
				Image: "_2H32szY9NZ1aKr6j4Ced7u",
				image: "_2H32szY9NZ1aKr6j4Ced7u",
				thumbnail: "_2Ks8P6YD1-8_Ju3IrYpPJf",
				isSelected: "_3oA67AGI49fKcqDP970t4U",
				ButtonRow: "_2Bo7ys2El8ABMVNqYUdrA5",
				buttonRow: "_2Bo7ys2El8ABMVNqYUdrA5",
				CancelButton: "mBq3crGX9-xOOg-b-1V85",
				cancelButton: "mBq3crGX9-xOOg-b-1V85"
			}
		},
		"./src/reddit/components/ThumbnailSelector/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/debounce.js"),
				r = n.n(s),
				i = n("./node_modules/lodash/range.js"),
				c = n.n(i),
				a = n("./node_modules/react/index.js"),
				l = n.n(a),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				p = n("./src/higherOrderComponents/asModal/index.tsx"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/media/index.ts"),
				g = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				f = n("./src/reddit/icons/svgs/Close/index.tsx"),
				b = n("./src/reddit/layout/row/Inline/index.tsx"),
				y = n("./src/reddit/components/ThumbnailSelector/index.m.less"),
				E = n.n(y);
			const S = 10,
				x = Object(p.a)(u.a.div("Component", E.a)),
				C = u.a.wrapped(b.a, "TitleRow", E.a),
				O = u.a.wrapped(f.a, "Close", E.a),
				k = u.a.div("CloseWrapper", E.a),
				T = u.a.div("ThumbnailsContainer", E.a),
				v = u.a.img("Image", E.a),
				j = e => l.a.createElement("div", {
					className: Object(d.a)(E.a.thumbnail, Object(g.a)({
						isLoading: e.isLoading
					}), {
						[E.a.isSelected]: e.isSelected
					}),
					onClick: e.onClick,
					ref: e.elementRef
				}, e.thumbnail.url && l.a.createElement(v, {
					src: e.thumbnail.url
				})),
				_ = u.a.wrapped(b.a, "ButtonRow", E.a),
				R = h.l,
				w = u.a.wrapped(h.o, "CancelButton", E.a),
				B = (e, t) => {
					if (1 === e) return [0];
					const n = c()(0, t, t / (e - 1));
					return n.push(t), n.map(e => +e.toFixed(2))
				};
			class I extends l.a.Component {
				constructor(e) {
					super(e), this.isThumbnailsAreGenerating = !1, this.setSelectedElementRef = e => this.selectedElement = e, this.setThumbnails = r()(e => this.setState({
						thumbnails: e
					}), 100), this.scrollIntoView = () => {
						this.selectedElement && this.selectedElement.scrollIntoView({})
					}, this.setSelected = e => {
						this.setState({
							selectedIndex: e
						})
					}, this.onSelectButton = () => {
						const {
							selectedIndex: e
						} = this.state, t = this.state.thumbnails[e];
						this.props.onSelect({
							time: t.time,
							url: t.url
						})
					};
					const {
						thumbnailsCount: t = S,
						selected: n,
						videoDuration: o
					} = this.props, s = B(t, o).map(e => ({
						time: e,
						url: n && n.time === e ? n.url : void 0
					})), i = n ? s.findIndex(e => n.time === e.time) : -1;
					this.state = {
						thumbnails: s,
						selectedIndex: i
					}
				}
				componentDidMount() {
					this.scrollIntoView(), this.props.isOpen && this.generateVideoThumbnails()
				}
				componentDidUpdate(e) {
					this.props.isOpen && !e.isOpen && (this.scrollIntoView(), this.generateVideoThumbnails())
				}
				async generateVideoThumbnails() {
					const {
						thumbnails: e
					} = this.state;
					if (this.isThumbnailsAreGenerating || !e.find(e => !e.url)) return;
					this.isThumbnailsAreGenerating = !0;
					const t = document.createElement("video"),
						n = document.createElement("canvas");
					await Object(m.q)(t, this.props.videoSource);
					let o = 0;
					t.currentTime = e[o].time, await Object(m.e)(t, n, t => (e[o].url = t.dataUrl, o++, this.setThumbnails(e), o < e.length ? e[o].time : null)), this.setState({
						thumbnails: e
					}), this.isThumbnailsAreGenerating = !1
				}
				render() {
					if (!this.props.isOpen) return null;
					const {
						selectedIndex: e,
						thumbnails: t
					} = this.state;
					return l.a.createElement(x, {
						withOverlay: !0
					}, l.a.createElement(C, null, o.fbt._("Choose thumbnail", null, {
						hk: "XlI0H"
					}), l.a.createElement(k, {
						onClick: this.props.onToggleModal
					}, l.a.createElement(O, null))), l.a.createElement(T, null, t.map((t, n) => l.a.createElement(j, {
						key: n,
						elementRef: n === e ? this.setSelectedElementRef : void 0,
						isLoading: !t.url,
						onClick: () => this.setSelected(n),
						isSelected: n === e,
						thumbnail: t
					}))), l.a.createElement(_, null, l.a.createElement(w, {
						onClick: this.props.onToggleModal
					}, o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), l.a.createElement(R, {
						onClick: this.onSelectButton
					}, o.fbt._("Select", null, {
						hk: "3s53WD"
					}))))
				}
			}
			t.a = I
		},
		"./src/reddit/components/UsersCountIndicator/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "g", (function() {
				return l
			}));
			const o = 5,
				s = 2,
				r = 1e4,
				i = 2e3,
				c = 3e4,
				a = 1e4,
				l = 2
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/controls/Input/index.m.less"),
				r = n.n(s);
			t.a = o.a.input("input", r.a)
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = n.n(i);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: o = 10
				} = e;
				return s.a.createElement("div", {
					className: Object(r.a)(c.a.loadingIcon, n, {
						[c.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${o}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/controls/SubredditDropdown/index.m.less": function(e, t, n) {
			e.exports = {
				entry: "BR2J4z5ndMj6r3-QW2hHI",
				mIsFocused: "_2KXTnIrbZ1Fr5F4nZyXeKS",
				list: "_17g61LC45mhwjs-g79qbZK"
			}
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
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
				i = (e, t) => Object(s.a)(e, {
					method: "get",
					endpoint: `${o.a.metaUrl}/product-collections/${t}?types=emotes_pack`
				})
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "c", (function() {
				return h
			}));
			var o = n("./src/config.ts"),
				s = n("./src/lib/omitHeaders/index.ts"),
				r = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/endpoints/governance/requester.ts"),
				c = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				a = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function l(e, t) {
				return Object(i.a)(e, {
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

			function d(e, t) {
				return Object(i.a)(e, {
					endpoint: `${o.a.metaUrl}/ps/me/braintree-client-tokens`,
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function u(e, t) {
				return Object(i.a)(e, {
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

			function p(e, t) {
				return Object(i.a)(Object(s.a)(e, [r.a]), {
					endpoint: `${e.apiUrl}/api/info?id=${t.join(",")}`,
					method: "get"
				}).then(e => {
					if (e.ok) {
						const t = e.body.data.children.map(e => {
							let {
								data: t
							} = e;
							return Object(a.a)(t)
						}).reduce((e, t) => (e[t.id] = t, e), {});
						return {
							...e,
							body: t
						}
					}
					return e
				})
			}
			async function h(e, t) {
				const n = await Object(i.a)(e, {
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
				return d
			})), n.d(t, "b", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/merge.js"),
				s = n.n(o),
				r = n("./src/config.ts"),
				i = n("./src/reddit/endpoints/governance/badges.ts"),
				c = n("./src/reddit/endpoints/governance/community.ts"),
				a = n("./src/reddit/endpoints/governance/products/badges.ts"),
				l = n("./src/reddit/endpoints/governance/requester.ts");
			async function d(e, t, n) {
				const o = {
						subredditId: t,
						badges: {},
						errors: {},
						collections: {},
						products: {},
						subscription: void 0,
						userOwnedBadges: []
					},
					d = function(e, t) {
						return Object(l.a)(e, {
							method: "get",
							endpoint: `${r.a.metaUrl}/product-collections/${t}?types=badge`
						})
					}(e, t),
					u = Object(c.a)(e, {
						subredditId: t
					}),
					p = Object(a.b)(e, t),
					h = Object(i.c)(e, t, n),
					[m, g, f, b] = await Promise.all([d, u, p, h]);
				if (m.ok ? o.collections = m.body : o.errors.collections = m.error, g.ok) {
					const e = g.body;
					o.subscription = e.specialMemberships, o.communityRaw = e
				}
				return f.ok ? o.products = f.body : o.errors.products = f.error, b.ok ? (s()(o.badges, b.body.badges), o.userOwnedBadges = b.body.userOwnedBadges) : o.errors.userBadges = b.error, o
			}
			const u = (e, t) => Object(l.a)(e, {
				endpoint: `${r.a.metaUrl}/products/${t}?types=badge,membership`,
				method: "delete"
			})
		},
		"./src/reddit/endpoints/governance/community.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("./src/config.ts"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/endpoints/governance/requester.ts");

			function i(e, t) {
				return Object(r.a)(e, {
					endpoint: `${o.a.metaUrl}/communities/${t.subredditId}/me`,
					method: s.mb.GET
				})
			}
		},
		"./src/reddit/helpers/richTextEditor/index.ts": function(e, t, n) {
			"use strict";
			var o;
			n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e[e.Post = 0] = "Post", e[e.Comment = 1] = "Comment"
				}(o || (o = {}))
		},
		"./src/reddit/icons/svgs/FormattingAlignCenter/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1ZVHRoTDdo57082D2GcC80"
			}
		},
		"./src/reddit/icons/svgs/FormattingAlignCenter/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingAlignCenter/index.m.less"),
				c = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero"
			}, s.a.createElement("path", {
				d: "M3.5 11h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1zM7.42 16h5.08c.55 0 1-.45 1-1s-.45-1-1-1H7.42c-.56 0-1 .45-1 1s.44 1 1 1zM3.5 6h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1z"
			})))
		},
		"./src/reddit/icons/svgs/FormattingAlignLeft/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_33vXt91MK_ualpifvvw_3v"
			}
		},
		"./src/reddit/icons/svgs/FormattingAlignLeft/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingAlignLeft/index.m.less"),
				c = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero"
			}, s.a.createElement("path", {
				d: "M3.5 11h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1zM3.5 16h5.4c.54 0 1-.45 1-1s-.46-1-1-1H3.5c-.55 0-1 .45-1 1s.45 1 1 1zM3.5 6h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1z"
			})))
		},
		"./src/reddit/icons/svgs/FormattingAlignRight/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_34rYEsgbWk8eOQx_bs7fTV"
			}
		},
		"./src/reddit/icons/svgs/FormattingAlignRight/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingAlignRight/index.m.less"),
				c = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero"
			}, s.a.createElement("path", {
				d: "M3.5 11h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1zM11.5 16h5c.55 0 1-.45 1-1s-.45-1-1-1h-5c-.55 0-1 .45-1 1s.45 1 1 1zM3.5 6h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1z"
			})))
		},
		"./src/reddit/icons/svgs/FormattingDeleteRow/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_8Y1-XP7A1OOfoU_mUqKcg"
			}
		},
		"./src/reddit/icons/svgs/FormattingDeleteRow/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingDeleteRow/index.m.less"),
				c = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero",
				transform: "vertical" === e.orientation ? "rotate(90, 10, 10)" : ""
			}, s.a.createElement("path", {
				d: "M3 3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V3zM2 3v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2z"
			}), s.a.createElement("path", {
				d: "M2 15h16v1H2M2 4h16v1H2M7.17 11.4l4.24-4.23c.4-.4 1.04-.4 1.43 0 .4.4.4 1.03 0 1.42L8.6 12.82c-.4.4-1.04.4-1.43 0-.4-.4-.4-1.03 0-1.42z"
			}), s.a.createElement("path", {
				d: "M8.6 7.17l4.23 4.24c.4.4.4 1.04 0 1.43-.4.4-1.03.4-1.42 0L7.18 8.6c-.4-.4-.4-1.04 0-1.43.4-.4 1.03-.4 1.42 0z"
			})))
		},
		"./src/reddit/icons/svgs/FormattingInsertRow/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1PNKgIKbpvIWTVU3LO0PJQ"
			}
		},
		"./src/reddit/icons/svgs/FormattingInsertRow/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingInsertRow/index.m.less"),
				c = n.n(i);
			const a = {
				up: "rotate(180 10 10)",
				down: "",
				left: "rotate(90 10 10)",
				right: "rotate(-90 10 10)"
			};
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero",
				transform: a[e.orientation || "down"]
			}, s.a.createElement("path", {
				d: "M17 17c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v14zm1 0V3c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2z"
			}), s.a.createElement("path", {
				d: "M18 6H2V5h16M13 13H7c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1z"
			}), s.a.createElement("path", {
				d: "M9 15V9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1z"
			})))
		},
		"./src/reddit/icons/svgs/Send/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M17.98 8.87c-.012-.093-.03-.182-.062-.27-.017-.043-.034-.085-.055-.126-.013-.026-.02-.057-.034-.082l-.07-.1c-.018-.02-.04-.03-.055-.046-.073-.083-.158-.145-.252-.204-.032-.02-.053-.055-.088-.072L3.88 1.12c-.35-.176-.764-.158-1.096.05-.332.208-.534.576-.534.973V5c0 .507.33.954.81 1.097L9 7.857H3.375c-.175 0-.347.04-.503.12L.622 9.12c-.48.243-.724.8-.582 1.325.135.5.582.84 1.085.84.027 0 .054 0 .08-.003l1.045-.075v4.65c0 .396.202.764.534.972.18.112.386.17.59.17.173 0 .346-.04.505-.12l13.483-6.85c.08-.044.134-.075.184-.113.05-.038.092-.085.136-.13.012-.013.026-.022.037-.036.092-.107.147-.21.19-.32.013-.03.02-.06.03-.09.013-.045.033-.086.042-.132.008-.046.013-.09.017-.138 0-.023-.008-.043-.008-.063 0-.017.008-.03.008-.048 0-.032-.017-.058-.02-.09z"
			})))
		},
		"./src/reddit/icons/svgs/ThumbnailSelect/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_3QNLLzw_kUPhkWkxg22tT9"
			}
		},
		"./src/reddit/icons/svgs/ThumbnailSelect/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/ThumbnailSelect/index.m.less"),
				c = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, s.a.createElement("path", {
				d: "M0 0h20v20H0z"
			}), s.a.createElement("path", {
				fill: "#A5A4A4",
				d: "M6 3h8c1.1046 0 2 .8954 2 2v10c0 1.1046-.8954 2-2 2H6c-1.1046 0-2-.8954-2-2V5c0-1.1046.8954-2 2-2zm11 1c1.1046 0 2 .8954 2 2v8c0 1.1046-.8954 2-2 2V4zM3 4v12h-.6667C1.597 16 1 15.1734 1 14.1538V5.8462C1 4.8266 1.597 4 2.3333 4H3z"
			})))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				c = n.n(i);
			const a = e => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), s.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = a
		},
		"./src/reddit/selectors/editorContent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./src/reddit/actions/postCreation/constants.ts");
			const s = (e, t) => e.creations.api.editor.converting.pending[t || o.k]
		},
		"./src/reddit/selectors/gold/enabledFeatures.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/featureFlags/index.ts"),
				r = n("./src/reddit/selectors/economics.ts"),
				i = n("./src/reddit/selectors/gold/powerups/index.ts"),
				c = n("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const a = Object(o.a)(s.d.spEmotes, r.b, i.f, (e, t, n) => {
					if (n) return !0;
					const o = !(!t || !Object.keys(t).length);
					return e && o
				}),
				l = Object(o.a)(r.b, i.g, i.h, i.f, (e, t, n, o) => {
					if (o) return [...t, ...n].slice(0, 3);
					let s = [];
					for (const r of e || [])
						if ((s = [...s, ...Object.values(r.emotes)]).length > 3) break;
					return s.slice(0, 3)
				}),
				d = Object(o.a)(s.d.spGiphy, i.f, c.b, (e, t, n) => e || t && n)
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
				r = (e, t) => {
					let {
						productId: n
					} = t;
					const o = e.products.models[n];
					if (o) {
						const t = o.subredditId,
							s = Object.keys(e.user.ownedBadges[t] || {}),
							r = e.badges.models,
							i = Date.now();
						let c = !1;
						return s.forEach(e => {
							const t = r[e];
							t && t.type === n && t.endsAt > i && (c = !0)
						}), c
					}
					return !1
				}
		},
		"./src/redditGQL/operations/SubredditTypeaheadSearch.json": function(e) {
			e.exports = JSON.parse('{"id":"20edc5ee12df"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatMessageInput~MembershipPaywallPage~RichTextEditor.fece9b55a38ab443b32b.js.map