// https://www.redditstatic.com/desktop2x/ChatMessageInput~MembershipPaywallPage~RichTextEditor.b60fb17086f26e45f2d5.js
// Retrieved at 12/6/2021, 6:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatMessageInput~MembershipPaywallPage~RichTextEditor"], {
		"./node_modules/draft-js/dist/Draft.css": function(t, e, n) {},
		"./node_modules/lodash/_arrayReduceRight.js": function(t, e) {
			t.exports = function(t, e, n, o) {
				var r = null == t ? 0 : t.length;
				for (o && r && (n = t[--r]); r--;) n = e(n, t[r], r, t);
				return n
			}
		},
		"./node_modules/lodash/_baseEachRight.js": function(t, e, n) {
			var o = n("./node_modules/lodash/_baseForOwnRight.js"),
				r = n("./node_modules/lodash/_createBaseEach.js")(o, !0);
			t.exports = r
		},
		"./node_modules/lodash/_baseExtremum.js": function(t, e, n) {
			var o = n("./node_modules/lodash/isSymbol.js");
			t.exports = function(t, e, n) {
				for (var r = -1, s = t.length; ++r < s;) {
					var i = t[r],
						c = e(i);
					if (null != c && (void 0 === a ? c == c && !o(c) : n(c, a))) var a = c,
						l = i
				}
				return l
			}
		},
		"./node_modules/lodash/_baseFilter.js": function(t, e, n) {
			var o = n("./node_modules/lodash/_baseEach.js");
			t.exports = function(t, e) {
				var n = [];
				return o(t, (function(t, o, r) {
					e(t, o, r) && n.push(t)
				})), n
			}
		},
		"./node_modules/lodash/_baseForOwnRight.js": function(t, e, n) {
			var o = n("./node_modules/lodash/_baseForRight.js"),
				r = n("./node_modules/lodash/keys.js");
			t.exports = function(t, e) {
				return t && o(t, e, r)
			}
		},
		"./node_modules/lodash/_baseForRight.js": function(t, e, n) {
			var o = n("./node_modules/lodash/_createBaseFor.js")(!0);
			t.exports = o
		},
		"./node_modules/lodash/_baseGt.js": function(t, e) {
			t.exports = function(t, e) {
				return t > e
			}
		},
		"./node_modules/lodash/_baseRange.js": function(t, e) {
			var n = Math.ceil,
				o = Math.max;
			t.exports = function(t, e, r, s) {
				for (var i = -1, c = o(n((e - t) / (r || 1)), 0), a = Array(c); c--;) a[s ? c : ++i] = t, t += r;
				return a
			}
		},
		"./node_modules/lodash/_baseWhile.js": function(t, e, n) {
			var o = n("./node_modules/lodash/_baseSlice.js");
			t.exports = function(t, e, n, r) {
				for (var s = t.length, i = r ? s : -1;
					(r ? i-- : ++i < s) && e(t[i], i, t););
				return n ? o(t, r ? 0 : i, r ? i + 1 : s) : o(t, r ? i + 1 : 0, r ? s : i)
			}
		},
		"./node_modules/lodash/_charsEndIndex.js": function(t, e, n) {
			var o = n("./node_modules/lodash/_baseIndexOf.js");
			t.exports = function(t, e) {
				for (var n = t.length; n-- && o(e, t[n], 0) > -1;);
				return n
			}
		},
		"./node_modules/lodash/_createRange.js": function(t, e, n) {
			var o = n("./node_modules/lodash/_baseRange.js"),
				r = n("./node_modules/lodash/_isIterateeCall.js"),
				s = n("./node_modules/lodash/toFinite.js");
			t.exports = function(t) {
				return function(e, n, i) {
					return i && "number" != typeof i && r(e, n, i) && (n = i = void 0), e = s(e), void 0 === n ? (n = e, e = 0) : n = s(n), i = void 0 === i ? e < n ? 1 : -1 : s(i), o(e, n, i, t)
				}
			}
		},
		"./node_modules/lodash/_escapeHtmlChar.js": function(t, e, n) {
			var o = n("./node_modules/lodash/_basePropertyOf.js")({
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#39;"
			});
			t.exports = o
		},
		"./node_modules/lodash/chunk.js": function(t, e, n) {
			var o = n("./node_modules/lodash/_baseSlice.js"),
				r = n("./node_modules/lodash/_isIterateeCall.js"),
				s = n("./node_modules/lodash/toInteger.js"),
				i = Math.ceil,
				c = Math.max;
			t.exports = function(t, e, n) {
				e = (n ? r(t, e, n) : void 0 === e) ? 1 : c(s(e), 0);
				var a = null == t ? 0 : t.length;
				if (!a || e < 1) return [];
				for (var l = 0, d = 0, u = Array(i(a / e)); l < a;) u[d++] = o(t, l, l += e);
				return u
			}
		},
		"./node_modules/lodash/dropRightWhile.js": function(t, e, n) {
			var o = n("./node_modules/lodash/_baseIteratee.js"),
				r = n("./node_modules/lodash/_baseWhile.js");
			t.exports = function(t, e) {
				return t && t.length ? r(t, o(e, 3), !0, !0) : []
			}
		},
		"./node_modules/lodash/escape.js": function(t, e, n) {
			var o = n("./node_modules/lodash/_escapeHtmlChar.js"),
				r = n("./node_modules/lodash/toString.js"),
				s = /[&<>"']/g,
				i = RegExp(s.source);
			t.exports = function(t) {
				return (t = r(t)) && i.test(t) ? t.replace(s, o) : t
			}
		},
		"./node_modules/lodash/filter.js": function(t, e, n) {
			var o = n("./node_modules/lodash/_arrayFilter.js"),
				r = n("./node_modules/lodash/_baseFilter.js"),
				s = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/isArray.js");
			t.exports = function(t, e) {
				return (i(t) ? o : r)(t, s(e, 3))
			}
		},
		"./node_modules/lodash/includes.js": function(t, e, n) {
			var o = n("./node_modules/lodash/_baseIndexOf.js"),
				r = n("./node_modules/lodash/isArrayLike.js"),
				s = n("./node_modules/lodash/isString.js"),
				i = n("./node_modules/lodash/toInteger.js"),
				c = n("./node_modules/lodash/values.js"),
				a = Math.max;
			t.exports = function(t, e, n, l) {
				t = r(t) ? t : c(t), n = n && !l ? i(n) : 0;
				var d = t.length;
				return n < 0 && (n = a(d + n, 0)), s(t) ? n <= d && t.indexOf(e, n) > -1 : !!d && o(t, e, n) > -1
			}
		},
		"./node_modules/lodash/maxBy.js": function(t, e, n) {
			var o = n("./node_modules/lodash/_baseExtremum.js"),
				r = n("./node_modules/lodash/_baseGt.js"),
				s = n("./node_modules/lodash/_baseIteratee.js");
			t.exports = function(t, e) {
				return t && t.length ? o(t, s(e, 2), r) : void 0
			}
		},
		"./node_modules/lodash/range.js": function(t, e, n) {
			var o = n("./node_modules/lodash/_createRange.js")();
			t.exports = o
		},
		"./node_modules/lodash/reduceRight.js": function(t, e, n) {
			var o = n("./node_modules/lodash/_arrayReduceRight.js"),
				r = n("./node_modules/lodash/_baseEachRight.js"),
				s = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_baseReduce.js"),
				c = n("./node_modules/lodash/isArray.js");
			t.exports = function(t, e, n) {
				var a = c(t) ? o : i,
					l = arguments.length < 3;
				return a(t, s(e, 4), n, l, r)
			}
		},
		"./node_modules/lodash/takeWhile.js": function(t, e, n) {
			var o = n("./node_modules/lodash/_baseIteratee.js"),
				r = n("./node_modules/lodash/_baseWhile.js");
			t.exports = function(t, e) {
				return t && t.length ? r(t, o(e, 3)) : []
			}
		},
		"./node_modules/lodash/trimEnd.js": function(t, e, n) {
			var o = n("./node_modules/lodash/_baseToString.js"),
				r = n("./node_modules/lodash/_castSlice.js"),
				s = n("./node_modules/lodash/_charsEndIndex.js"),
				i = n("./node_modules/lodash/_stringToArray.js"),
				c = n("./node_modules/lodash/toString.js"),
				a = n("./node_modules/lodash/_trimmedEndIndex.js");
			t.exports = function(t, e, n) {
				if ((t = c(t)) && (n || void 0 === e)) return t.slice(0, a(t) + 1);
				if (!t || !(e = o(e))) return t;
				var l = i(t),
					d = s(l, i(e)) + 1;
				return r(l, 0, d).join("")
			}
		},
		"./src/lib/forEachGroup/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			}));
			const o = t => t;

			function r(t, e, n) {
				const [r, s] = Array.isArray(t) ? [t.length, e => t[e]] : [t.size, e => t.get(e)], {
					keyFn: i = o
				} = e || {};
				let {
					start: c = 0,
					end: a = r
				} = e || {};
				if ((c = c < 0 ? 0 : c) >= (a = a > r ? r : a)) return;
				let l = s(c),
					d = i(l, c),
					u = c;
				for (let o = c + 1; o < a; o++) {
					const t = s(o),
						e = i(t, o);
					if (e !== d) {
						if (!1 === n(l, d, u, o)) return;
						d = e, u = o, l = t
					}
				}
				n(l, d, u, a)
			}
		},
		"./src/lib/linkMatchers/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "f", (function() {
				return h
			})), n.d(e, "e", (function() {
				return m
			})), n.d(e, "g", (function() {
				return g
			})), n.d(e, "j", (function() {
				return f
			})), n.d(e, "a", (function() {
				return b
			})), n.d(e, "b", (function() {
				return y
			})), n.d(e, "c", (function() {
				return S
			})), n.d(e, "d", (function() {
				return C
			})), n.d(e, "h", (function() {
				return k
			})), n.d(e, "i", (function() {
				return O
			}));
			var o = n("./node_modules/linkify-it/index.js"),
				r = n.n(o),
				s = n("./node_modules/tlds/index.js"),
				i = n.n(s),
				c = n("./src/lib/linkMatchers/customLinks.ts"),
				a = n("./node_modules/lodash/values.js"),
				l = n.n(a);
			const d = t => l()(c.b).includes(t.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				p = t => ((t, e) => (e.forEach(e => t.add(e, null)), t))(t, u),
				h = r()().tlds(i.a).set({
					fuzzyIP: !0
				}),
				m = r()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(c.g.mention.prefix, c.g.mention.config),
				g = p(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(c.g.subreddit.prefix, c.g.subreddit.config).add(c.g.subredditFull.prefix, c.g.subreddit.config),
				f = p(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(c.g.profile.prefix, c.g.profile.config).add(c.g.profileFull.prefix, c.g.profile.config),
				b = r()().tlds(i.a).set({
					fuzzyIP: !0
				}).add(c.g.subreddit.prefix, c.g.subreddit.config).add(c.g.subredditFull.prefix, c.g.subreddit.config).add(c.g.profile.prefix, c.g.profile.config).add(c.g.profileFull.prefix, c.g.profile.config).add(c.g.mention.prefix, c.g.mention.config),
				y = r()().tlds(i.a).set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(c.g.subreddit.prefix, c.g.subredditFullUrl.config).add(c.g.subredditFull.prefix, c.g.subredditFullUrl.config),
				E = h.normalize;
			h.normalize = t => {
				E.call(h, t), !t.schema && t.url.startsWith("http:") && (t.url = `https:${t.url.slice(5)}`)
			};
			const S = (t, e) => {
					return (b.match(t) || []).filter(t => {
						const n = d(t.text);
						return !n || n && e
					})
				},
				C = t => {
					return [...f.match(t) || [], ...m.match(t) || []].map(t => !d(t.text) && t.text.replace(c.a, "")).filter(t => t)
				},
				k = (t, e) => {
					const n = t.match(e);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === e.length) return n[0]
				},
				O = t => {
					const e = h.match(t);
					if (e && 1 === e.length && 0 === e[0].index) {
						const n = e[0];
						return n.lastIndex === t.length ? n : ((t, e) => {
							const n = t.substring(e.lastIndex);
							if (/.*\/\/.*\/.*/.test(e.url) && /^(\?|\!)+$/.test(n)) return e.lastIndex += n.length, e.url += n, e
						})(t, n)
					}
				}
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return O
			})), n.d(e, "g", (function() {
				return T
			})), n.d(e, "b", (function() {
				return x
			})), n.d(e, "d", (function() {
				return j
			})), n.d(e, "e", (function() {
				return v
			})), n.d(e, "c", (function() {
				return _
			})), n.d(e, "f", (function() {
				return R
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/forOwn.js"),
				r = n.n(o),
				s = n("./src/reddit/actions/governance/errorToast.ts"),
				i = n("./src/reddit/endpoints/economics/emojis.ts"),
				c = n("./src/reddit/endpoints/economics/specialMembership.ts"),
				a = n("./src/reddit/endpoints/economics/subredditPremium.ts"),
				l = n("./src/reddit/endpoints/governance/badges.ts"),
				d = n("./src/config.ts"),
				u = n("./src/reddit/endpoints/governance/requester.ts");

			function p(t, e, n) {
				return Object(u.a)(t, {
					method: "get",
					endpoint: `${d.a.metaUrl}/products/${e}?owners=${n}` + "&types=emotes_pack,giphy"
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

			function C(t) {
				return !!t && "removeBadge" === t.type
			}

			function k(t) {
				if (!C(t)) return t
			}
			const O = () => async (t, e, {
				apiContext: n
			}) => {
				if (!e().user.account) return;
				await t(Object(E.b)({
					includeMemberships: !0
				}));
				const o = e().economics.me.data.specialMemberships || {},
					r = Object.keys(o);
				if (r.length) {
					const e = await Object(c.e)(n(), r);
					e.ok && t(Object(S.g)(e.body))
				}
			}, T = (t, e) => async (n, o, {
				apiContext: r
			}) => {
				const s = o().user.account,
					i = o().economics.subredditPremium[t],
					c = !i || i.status !== f.a.Fetched || e;
				if (s && c) {
					const e = await Object(a.a)(r(), t, s.id);
					n(Object(S.i)(e))
				}
			}, x = t => async (e, n, {
				apiContext: o
			}) => {
				const r = n(),
					i = r.user.account,
					c = Object(b.f)(r, t.subredditId),
					a = Object.keys(c).map(t => c[t]).filter(Boolean);
				if (i && t.badge) {
					let n, r;
					n = t.placement === h.a.First ? c[m.a.Loyalty] : t.placement === h.a.Second ? c[m.a.Achievement] : c[m.a.Cosmetic], e(Object(S.a)({
						...t,
						badge: k(t.badge),
						currentAppliedBadges: a,
						userId: i.id
					})), C(t.badge) && n ? r = await Object(l.a)(o(), t.subredditId, n.id, !1) : C(t.badge) || (r = await Object(l.a)(o(), t.subredditId, t.badge.id)), r && !r.ok && (e(Object(S.a)({
						...t,
						badge: n,
						currentAppliedBadges: a,
						userId: i.id
					})), Object(s.a)(e, r.error))
				}
			}, j = (t, e) => async (n, o, {
				apiContext: r
			}) => {
				await n(T(t, !0));
				const s = o().economics.subredditPremium[t];
				if (s && s.status === f.a.Fetched) {
					const o = s.data.userOwnedBadges.find(t => t.type === e.id);
					o && (n(x({
						badge: o,
						subredditId: t,
						placement: o.placement
					})), n(Object(S.d)(m.c.MyBadges)))
				}
			}, v = t => async (e, n, {
				apiContext: o
			}) => {
				const c = n().user.account,
					a = !n().economics.emotes[t],
					l = !n().economics.gifs[t];
				if (c && (a || l)) {
					const [n, a] = await Promise.all([Object(i.b)(o(), t), p(o(), t, c.id)]);
					if (!a.ok) return void Object(s.a)(e, a.error);
					const l = {
						emotes: [],
						emoteCollections: n.ok ? n.body : {},
						giphy: []
					};
					r()(a.body, t => {
						t.type === g.a.EmotesPack ? l.emotes.push(t) : t.type === g.a.Giphy && l.giphy.push(t)
					}), e(Object(S.e)({
						subredditId: t,
						products: l
					}))
				}
			}, _ = (t, e, n) => async (o, r, {
				apiContext: s
			}) => {
				if (await o(T(t, !0)), n && e) {
					const n = r(),
						s = Object(b.f)(n, t),
						i = Object(y.a)(n, e);
					if (!s[Object(m.d)(i.placement)] && i) {
						const e = Object(b.l)(n, {
							subredditId: t,
							badge: i
						});
						e && await o(x({
							badge: e,
							subredditId: t
						}))
					}
					o(Object(S.c)({
						subredditId: t,
						initialView: m.c.MyBadges
					}))
				}
			}, R = t => async (e, n, {
				apiContext: o
			}) => {
				const {
					wallet: r
				} = await Object(c.c)(o(), t);
				e(Object(S.f)({
					wallet: r
				})), await e(T(t.subredditId, !0))
			}
		},
		"./src/reddit/actions/subredditAutocomplete/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return h
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/redditGQL/operations/SubredditTypeaheadSearch.json"),
				i = n("./src/reddit/helpers/graphql/normalizeAllowedPostTypesFromGql/index.ts"),
				c = n("./src/reddit/helpers/name/index.ts"),
				a = n("./src/reddit/selectors/subredditAutocomplete.ts"),
				l = n("./src/reddit/actions/subredditAutocomplete/constants.ts");
			const d = Object(o.a)(l.c),
				u = Object(o.a)(l.b),
				p = Object(o.a)(l.a),
				h = (t, e = !1) => async (n, o, {
					gqlContext: l
				}) => {
					const h = Object(c.g)(t);
					if (!h) return;
					const m = o(),
						g = m.subredditAutocomplete;
					if (g.api.pending[h] || g.models[h]) return;
					if (Object(a.b)(m, {
							substring: h
						})) return;
					n(d({
						key: h
					}));
					const f = await ((t, e) => Object(r.a)(t, {
						...s,
						variables: e
					}))(l(), {
						query: h,
						includeNsfw: e
					});
					if (f.ok) {
						const t = f.body.data.subredditTypeahead.subreddits.edges.map(t => (({
							allowedPostTypes: t,
							id: e,
							isCrosspostDestination: n,
							isNsfw: o,
							name: r,
							styles: s,
							subscribersCount: c
						}) => ({
							allowedPostTypes: Object(i.a)(t),
							communityIcon: s && s.icon || "",
							icon: s && s.legacyIcon && s.legacyIcon.url || "",
							id: e,
							isCrosspostDestination: n,
							isNsfw: o,
							name: r,
							primaryColor: s && s.primaryColor || "",
							subscribers: c
						}))(t.node));
						n(u({
							key: h,
							subreddits: t
						}))
					} else n(p({
						key: h,
						error: f.error
					}))
				}
		},
		"./src/reddit/components/CollapseIntoOverflow/index.m.less": function(t, e, n) {
			t.exports = {
				hidden: "_2x_bJPl7Q970NCRxOS36QB",
				innerWrapper: "_3oLr47tuKGv2mNpavCZ2X0",
				outerWrapper: "_1wi_3uF8fUynqe5reIop-G",
				overflowMenu: "_2aOuodBenLHlceR3j0AlIM",
				overflowMenuWrapper: "_3nQ7w1VIzZvzFawddOYgBC",
				row: "_2IirhjIkZ7hgWGtpr087xZ",
				postWrap: "WaTxGJXojt1RbZOH3q6eC"
			}
		},
		"./src/reddit/components/CollapseIntoOverflow/index.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return m
			}));
			var o = n("./src/lib/fastdom/index.ts"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/OverflowMenu/index.tsx"),
				a = n("./src/reddit/helpers/richTextEditor/index.ts"),
				l = n("./src/reddit/components/CollapseIntoOverflow/index.m.less"),
				d = n.n(l);
			const u = 33,
				p = t => t.preventDefault(),
				h = (t, e) => `${t===a.a.Post?"Post":"Comment"}--Overflow-Dropdown__${e}`;
			class m extends s.a.Component {
				constructor(t) {
					super(t), this.breakpoints = [], this.updateCurrentBreakpoint = () => {
						o.a.read(() => {
							if (!this.container) return;
							const {
								indexOfCurrentBreakpoint: t,
								totalNumCollapsibleItems: e
							} = this.state, n = this.container.clientWidth;
							let r = this.breakpoints.findIndex((t, o) => {
								const r = o + 1 < e - 1,
									s = this.breakpoints[o + 1] + (r ? u : 0);
								return n < s
							});
							r < 0 && (r = e - 1), r !== t && o.a.write(() => {
								this.setState({
									indexOfCurrentBreakpoint: r,
									shouldShowOverflow: r < e - 1
								})
							})
						})
					};
					const e = this.getTotalNumCollapsibleItems();
					this.state = this.calculateOverflowState(e)
				}
				calculateOverflowState(t) {
					const e = this.props.indexOfBreakpoint;
					return {
						indexOfCurrentBreakpoint: e || t - 1,
						shouldShowOverflow: !!e,
						totalNumCollapsibleItems: t
					}
				}
				componentDidMount() {
					this.props.indexOfBreakpoint || window.addEventListener("resize", this.updateCurrentBreakpoint)
				}
				componentWillUnmount() {
					this.props.indexOfBreakpoint || window.removeEventListener("resize", this.updateCurrentBreakpoint)
				}
				componentDidUpdate() {
					const t = this.getTotalNumCollapsibleItems();
					t !== this.state.totalNumCollapsibleItems && o.a.write(() => {
						this.breakpoints = [], this.setState(this.calculateOverflowState(t))
					})
				}
				getTotalNumCollapsibleItems() {
					return Array.isArray(this.props.children) ? this.props.children.reduce((t, e) => (Array.isArray(e) ? t += e.length : e && t++, t), 0) : 1
				}
				registerBreakpoint(t, e) {
					this.breakpoints[e] = 0, o.a.read(() => {
						if (t && t.clientWidth) {
							const n = t.clientWidth;
							this.breakpoints[e] = 0 === e ? n : this.breakpoints[e - 1] + n, this.breakpoints[this.state.totalNumCollapsibleItems - 1] && this.updateCurrentBreakpoint()
						}
					})
				}
				render() {
					const {
						children: t,
						className: e,
						oveflowMenuDropdownId: n,
						onOverflowMenuClick: o,
						renderOverflowMenuTooltip: r,
						editorType: l,
						overflowMenuDropdownClassName: u,
						overflowMenuTargetPosition: m,
						overflowMenuTooltipPosition: g,
						preventFocusScroll: f
					} = this.props, {
						indexOfCurrentBreakpoint: b,
						shouldShowOverflow: y
					} = this.state, E = s.a.Children.toArray(t).filter(Boolean);
					return s.a.createElement("div", {
						className: Object(i.a)(d.a.outerWrapper, e),
						ref: t => this.container = t
					}, s.a.createElement("div", {
						className: d.a.innerWrapper
					}, E.map((t, e) => s.a.createElement("span", {
						className: e > b ? d.a.hidden : void 0,
						key: e,
						ref: t => this.registerBreakpoint(t, e)
					}, t)), y && s.a.createElement("div", {
						className: d.a.overflowMenuWrapper,
						key: "overflowMenuWrapper"
					}, r && r(), s.a.createElement(c.b, {
						className: d.a.overflowMenu,
						dropdownClassName: u,
						dropdownId: h(l, n),
						isFixed: !1,
						handleMouseDown: p,
						onClick: o,
						preventFocusScroll: f,
						targetPosition: m,
						tooltipPosition: g
					}, s.a.createElement("div", {
						className: Object(i.a)(d.a.row, {
							[d.a.postWrap]: l === a.a.Post
						})
					}, E.map((t, e) => s.a.createElement("span", {
						className: e <= b ? d.a.hidden : void 0,
						key: e
					}, t)))))))
				}
			}
		},
		"./src/reddit/components/MakeGifToggle/index.m.less": function(t, e, n) {
			t.exports = {
				container: "_1iRy5EPCLqSx8I0k9OT0wW",
				content: "NfjQg3srQXRhyOxLBwXrS",
				toggleSwitch: "_1fUmirx6e9tUDs04TQq6A1",
				mCompactSwitch: "_3Cx_YBpXo1s1iy7oA-4s6R",
				mDisabled: "_1M5N6DrrQQCQJs3JctDSu8",
				hoverTooltip: "_9qS60cx9uxyt1k4eZF_0w",
				tooltipContentClass: "_21DP8j-B-UkVKGJONbrTmX"
			}
		},
		"./src/reddit/components/MakeGifToggle/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				a = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				l = n("./src/reddit/layout/row/Inline/index.tsx"),
				d = n("./src/reddit/components/MakeGifToggle/index.m.less"),
				u = n.n(d);
			e.a = t => s.a.createElement(l.a, {
				className: Object(i.a)(u.a.container, t.disabled ? u.a.mDisabled : null, t.isCompact ? u.a.mCompactSwitch : null),
				onMouseDown: t => t.preventDefault(),
				onClick: e => {
					e.stopPropagation(), !t.disabled && t.onClick()
				}
			}, s.a.createElement(l.a, {
				className: u.a.content
			}, s.a.createElement(a.a, {
				className: u.a.toggleSwitch,
				on: t.on
			}), s.a.createElement("label", null, o.fbt._("Make GIF", null, {
				hk: "2ig2GG"
			}))), t.tooltip ? s.a.createElement(c.a, {
				className: u.a.hoverTooltip,
				tooltipContentClass: u.a.tooltipContentClass,
				text: t.tooltip
			}) : null)
		},
		"./src/reddit/components/ProgressBar/index.m.less": function(t, e, n) {
			t.exports = {
				innerBar: "Db3WJFTcyAR-IM0cIkpDG",
				outerBar: "i8kQtxHYBB8Sb3bPI4M_e"
			}
		},
		"./src/reddit/components/ProgressBar/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/ProgressBar/index.m.less"),
				c = n.n(i);
			e.a = ({
				className: t,
				innerBarClassName: e,
				percent: n
			}) => r.a.createElement("div", {
				className: Object(s.a)(c.a.outerBar, t)
			}, r.a.createElement("div", {
				className: Object(s.a)(c.a.innerBar, e),
				style: {
					width: `${n.toFixed(2)}%`
				}
			}))
		},
		"./src/reddit/components/RichTextEditor/Blockquote/index.m.less": function(t, e, n) {
			t.exports = {
				BlockQuoteWrapper: "_3bqfSxMWo3yWv7j4N8hQy6",
				blockQuoteWrapper: "_3bqfSxMWo3yWv7j4N8hQy6"
			}
		},
		"./src/reddit/components/RichTextEditor/CodeBlock/index.m.less": function(t, e, n) {
			t.exports = {
				CodeBlockWrapper: "_2YrwxhRxsXvszOhYWDUhMh",
				codeBlockWrapper: "_2YrwxhRxsXvszOhYWDUhMh"
			}
		},
		"./src/reddit/components/RichTextEditor/DragController/helpers.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return h
			})), n.d(e, "c", (function() {
				return m
			})), n.d(e, "a", (function() {
				return g
			}));
			var o = n("./node_modules/lodash/includes.js"),
				r = n.n(o);
			var s = n("./src/reddit/helpers/dom/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const c = t => t.className.indexOf("public-DraftEditor-content") >= 0,
				a = t => !!t.parentElement && !!t.parentElement.parentElement && c(t.parentElement.parentElement),
				l = t => !(!t.dataset.block || !t.dataset.offsetKey),
				d = t => {
					const {
						offsetKey: e
					} = t.dataset;
					return e ? (t => t.split("-")[0])(e) : ""
				},
				u = (t, e) => {
					return ((t, e) => {
						const n = function(t, e) {
							let n = 0,
								o = t.length - 1;
							for (; n <= o;) {
								const r = o + n >> 1,
									s = e(t[r]);
								if (s > 0) n = r + 1;
								else {
									if (!(s < 0)) return r;
									o = r - 1
								}
							}
							return n
						}(t, t => {
							const n = t.getBoundingClientRect();
							return e < n.top ? -1 : e > n.bottom ? 1 : 0
						});
						return t[Math.min(n, t.length - 1)]
					})(t.querySelectorAll("[data-block][data-offset-key]"), e)
				},
				p = (t, e) => {
					const n = Object(s.b)(t, l, c);
					return n || u(t, e)
				},
				h = (t, e) => {
					const n = (t => {
						const e = t.target;
						if (!(e instanceof HTMLElement)) return;
						const n = Object(s.b)(e, c);
						if (!n) return;
						const o = p(e, t.clientY);
						if (!o) return;
						const r = Object(s.b)(o, a);
						return r ? {
							editorContentElement: n,
							topLevelElement: r,
							blockElement: o
						} : void 0
					})(e);
					if (!n) return;
					const {
						topLevelElement: o,
						blockElement: r
					} = n, l = d(r), u = t.getCurrentContent(), h = u.getBlockForKey(l);
					if (!h) return;
					const {
						upperElement: m,
						lowerElement: g
					} = ((t, e, n, o) => {
						let r = n,
							s = n;
						if (t.getType() === i.b.UNSTYLED) r = s = e;
						else if (Object(i.o)(t.getType())) {
							r = s = e;
							const c = o.getBlockAfter(t.getKey());
							c && Object(i.u)(c.getType()) && (s = n.nextElementSibling)
						} else Object(i.u)(t.getType()) && (r = n.previousElementSibling, s = e);
						return {
							upperElement: r,
							lowerElement: s
						}
					})(h, r, o, u), {
						clientY: f,
						isBefore: b
					} = ((t, e, n) => {
						const o = t.getBoundingClientRect(),
							r = e.getBoundingClientRect();
						let i, a;
						if (n > (o.top + r.bottom) / 2) {
							i = r.bottom, a = !1;
							const t = Object(s.b)(e, t => !!t.nextElementSibling, c);
							if (t) {
								i = (t.nextElementSibling.getBoundingClientRect().top + r.bottom) / 2
							}
						} else {
							i = o.top, a = !0;
							const e = Object(s.b)(t, t => !!t.previousElementSibling, c);
							if (e) {
								i = (e.previousElementSibling.getBoundingClientRect().bottom + o.top) / 2
							}
						}
						return {
							clientY: i,
							isBefore: a
						}
					})(m, g, e.clientY);
					let y = l;
					if (h.getType() !== i.b.UNSTYLED) {
						const t = p(b ? m : g, f);
						t && (y = d(t))
					}
					return {
						clientY: f,
						isBefore: b,
						blockKey: y
					}
				},
				m = t => t.items ? !!Array.from(t.items).find(t => "file" === t.kind) : !(!t.files || !t.files.length) || r()(t.types, "Files"),
				g = t => t.items ? Array.from(t.items).map(t => "file" === t.kind ? t.getAsFile() : null).filter(Boolean) : t.files ? Array.from(t.files) : []
		},
		"./src/reddit/components/RichTextEditor/DragController/index.m.less": function(t, e, n) {
			t.exports = {
				container: "_13Sj3UMDKkCCJTq88berCB",
				hideCaret: "_2BqK1CuzH2oWi2F9_cuFPQ",
				DropLine: "z5iuD3MVYcfS7tTihbvof",
				dropLine: "z5iuD3MVYcfS7tTihbvof",
				Tooltip: "_1z9S1KmnM79xn-UA0FnbP6",
				tooltip: "_1z9S1KmnM79xn-UA0FnbP6"
			}
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less": function(t, e, n) {
			t.exports = {
				tooltip: "ki2VbfBhU-qxg1S6VyET6",
				above: "_8fNGSBGvr1Ds8PbrsUGzN",
				below: "_38gWvHp3NJkR5r5ftUfbFG",
				HoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2",
				hoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2"
			}
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less"),
				a = n.n(c);

			function l() {
				return (l = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			e.a = i.a.wrapped(t => {
				const {
					children: e,
					className: n,
					renderBelow: o,
					text: i,
					tooltipContentClass: c,
					...d
				} = t;
				return r.a.createElement("div", l({}, d, {
					className: Object(s.a)(a.a.container, n)
				}), i ? r.a.createElement("div", {
					className: Object(s.a)(a.a.tooltip, c, o ? a.a.below : a.a.above)
				}, i) : null, e)
			}, "HoverTooltip", a.a)
		},
		"./src/reddit/components/RichTextEditor/LinksController/LinkDetailsPopup/index.m.less": function(t, e, n) {
			t.exports = {
				LinkDetailsBox: "_2F28OVOVlGo6WCT2l8lHzO",
				linkDetailsBox: "_2F28OVOVlGo6WCT2l8lHzO",
				Link: "_3vJCj_aXdDc-UXA9fDK-z-",
				link: "_3vJCj_aXdDc-UXA9fDK-z-",
				LinkButton: "_1NtBcR7JgjxkWLJrk3ddD3",
				linkButton: "_1NtBcR7JgjxkWLJrk3ddD3"
			}
		},
		"./src/reddit/components/RichTextEditor/LinksController/LinkEditorPopup/index.m.less": function(t, e, n) {
			t.exports = {
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
		"./src/reddit/components/RichTextEditor/OrderedList/index.m.less": function(t, e, n) {
			t.exports = {
				OrderedListWrapper: "_1QXegNe8bOemD558m-vc9t",
				orderedListWrapper: "_1QXegNe8bOemD558m-vc9t"
			}
		},
		"./src/reddit/components/RichTextEditor/Paragraph/index.m.less": function(t, e, n) {
			t.exports = {
				ParagraphWrapper: "_3LuG0YVLLHE2azRNVaKz7O",
				paragraphWrapper: "_3LuG0YVLLHE2azRNVaKz7O"
			}
		},
		"./src/reddit/components/RichTextEditor/TextRendering/index.m.less": function(t, e, n) {
			t.exports = {
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
		"./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.m.less": function(t, e, n) {
			t.exports = {
				button: "_2lAJkFZXhr5kbH7YF-sYFf",
				enabled: "_1H0LLEwUP5ys6cgxr9KhMa",
				active: "_32EiQr-Px2GJvCfigwwmuK"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/icons/fonts/index.tsx"),
				l = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				d = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.m.less"),
				u = n.n(d);

			function p() {
				return (p = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			const h = t => {
				t.preventDefault(), t.stopPropagation()
			};
			e.a = i.a.wrapped(t => {
				const {
					active: e,
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
				} = t, S = {
					"aria-label": d,
					"aria-selected": e,
					className: b || Object(s.a)(u.a.button, n, {
						[u.a.active]: !!e,
						[u.a.enabled]: i
					}),
					onMouseDown: h,
					onClick: t => {
						h(t), i && f && f(t)
					},
					role: "button",
					tabIndex: -1
				};
				return r.a.createElement(c.t, p({}, S, {
					size: c.d.S,
					priority: c.c.Plain,
					isSquare: !0,
					Icon: g ? Object(a.b)(g) : m
				}), r.a.createElement(l.a, {
					text: (i ? d : o) || "",
					tooltipContentClass: t.tooltipContentClass,
					renderBelow: y
				}), E)
			}, "FormatterButton", u.a)
		},
		"./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.m.less": function(t, e, n) {
			t.exports = {
				LoadingIcon: "jOFrSZE7wRk_lVAP2pBvY",
				loadingIcon: "jOFrSZE7wRk_lVAP2pBvY",
				Text: "EVdFfF5K7kZFMaYpSHbLe",
				text: "EVdFfF5K7kZFMaYpSHbLe",
				Button: "_1Mg8ZhclDuQlkzEqVU21qu",
				button: "_1Mg8ZhclDuQlkzEqVU21qu"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
					isConverting: (t, e) => Object(u.a)(t, e.draftKey)
				}),
				b = Object(i.b)(f);
			e.a = s.a.memo(b(t => s.a.createElement(l.t, {
				priority: l.c.Plain,
				size: l.d.XS,
				text: s.a.createElement(s.a.Fragment, null, t.isConverting && s.a.createElement(g, {
					sizePx: 12
				}), o.fbt._("Markdown Mode", null, {
					hk: "1DXoXV"
				})),
				"aria-label": o.fbt._("Switch to markdown", null, {
					hk: "OxsM0"
				}),
				tabIndex: -1,
				className: t.className,
				onClick: t.onClick
			}, !t.shouldHideTooltip && s.a.createElement(p.a, {
				text: o.fbt._("Switch to markdown", null, {
					hk: "4mWw83"
				})
			}))))
		},
		"./src/reddit/components/RichTextEditor/Toolbar/MediaInputButton/index.m.less": function(t, e, n) {
			t.exports = {
				ImageIcon: "_1jv-IJjyjDSSVuYe6CzeHv",
				imageIcon: "_1jv-IJjyjDSSVuYe6CzeHv",
				VideoIcon: "uo_2BSPFse-IQNQbclyKb",
				videoIcon: "uo_2BSPFse-IQNQbclyKb",
				HiddenInput: "_2keaDnXIlu9Yq2y-cC8zgu",
				hiddenInput: "_2keaDnXIlu9Yq2y-cC8zgu"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.m.less": function(t, e, n) {
			t.exports = {
				Icon: "_3UAl61hrkRAXX5JQ6m_q8R",
				icon: "_3UAl61hrkRAXX5JQ6m_q8R"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "f", (function() {
				return p
			})), n.d(e, "b", (function() {
				return h
			})), n.d(e, "e", (function() {
				return m
			})), n.d(e, "j", (function() {
				return g
			})), n.d(e, "g", (function() {
				return f
			})), n.d(e, "i", (function() {
				return b
			})), n.d(e, "k", (function() {
				return y
			})), n.d(e, "d", (function() {
				return E
			})), n.d(e, "l", (function() {
				return S
			})), n.d(e, "h", (function() {
				return C
			})), n.d(e, "a", (function() {
				return k
			})), n.d(e, "c", (function() {
				return O
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/constants/icons.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				l = n("./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.m.less"),
				d = n.n(l);

			function u() {
				return (u = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			const p = (t, e = 0) => n => {
					const o = (t => c.a.wrapped(t, "Icon", d.a))(t);
					return s.a.createElement(o, u({}, n, {
						style: {
							padding: e
						}
					}))
				},
				h = {
					type: "style",
					name: "bold",
					iconName: i.a.bold,
					style: a.k.BOLD,
					tooltipTranslation: () => o.fbt._("Bold", null, {
						hk: "16qNLn"
					})
				},
				m = {
					type: "style",
					name: "italics",
					iconName: i.a.italic,
					style: a.k.ITALIC,
					tooltipTranslation: () => o.fbt._("Italics", null, {
						hk: "3hxpiB"
					})
				},
				g = {
					type: "style",
					name: "strikethrough",
					iconName: i.a.strikethrough,
					style: a.k.STRIKETHROUGH,
					tooltipTranslation: () => o.fbt._("Strikethrough", null, {
						hk: "U4hXC"
					})
				},
				f = {
					type: "style",
					name: "inline_code",
					iconName: i.a.code_inline,
					style: a.k.MONOSPACE,
					tooltipTranslation: () => o.fbt._("Inline Code", null, {
						hk: "1eNxEt"
					})
				},
				b = {
					type: "style",
					name: "spoiler",
					iconName: i.a.spoiler,
					style: a.k.SPOILER,
					tooltipTranslation: () => o.fbt._("Spoiler", null, {
						hk: "1tb6Ht"
					})
				},
				y = {
					type: "style",
					name: "superscript",
					iconName: i.a.superscript,
					style: a.k.SUPERSCRIPT,
					tooltipTranslation: () => o.fbt._("Superscript", null, {
						hk: "sqKFn"
					})
				},
				E = {
					type: "block",
					name: "heading",
					iconName: i.a.text_size,
					block: a.b.H1,
					tooltipTranslation: () => o.fbt._("Heading", null, {
						hk: "4jnBPs"
					})
				},
				S = {
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
				k = {
					type: "block",
					name: "block_quote",
					iconName: i.a.quote,
					block: a.e,
					tooltipTranslation: () => o.fbt._("Quote Block", null, {
						hk: "1xUsGm"
					})
				},
				O = {
					type: "block",
					name: "code_block",
					iconName: i.a.code_block,
					block: a.f,
					tooltipTranslation: () => o.fbt._("Code Block", null, {
						hk: "2y19DH"
					})
				}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/index.m.less": function(t, e, n) {
			t.exports = {
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
		"./src/reddit/components/RichTextEditor/Toolbar/index.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return I
			})), n.d(e, "i", (function() {
				return A
			})), n.d(e, "g", (function() {
				return K
			})), n.d(e, "j", (function() {
				return M
			})), n.d(e, "e", (function() {
				return L
			})), n.d(e, "h", (function() {
				return D
			})), n.d(e, "k", (function() {
				return N
			})), n.d(e, "f", (function() {
				return F
			})), n.d(e, "a", (function() {
				return P
			})), n.d(e, "d", (function() {
				return U
			})), n.d(e, "b", (function() {
				return H
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
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
			var b = (t, e, n) => {
					if (Object(h.v)(o.RichUtils.getCurrentBlockType(t))) return t;
					const r = t.getCurrentContent(),
						s = t.getSelection().getEndKey(),
						i = Object(f.l)(e, n),
						c = Object(g.f)(r, s, i, g.a.after, !0),
						a = o.EditorState.push(t, c, m.e);
					return o.EditorState.forceSelection(a, o.SelectionState.createEmpty(i[0].getKey()))
				},
				y = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				E = n("./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.tsx"),
				S = n("./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.tsx"),
				C = n("./src/lib/constants/index.ts"),
				k = n("./src/lib/lessComponent.tsx"),
				O = n("./src/reddit/components/RichTextEditor/Toolbar/MediaInputButton/index.m.less"),
				T = n.n(O);
			const x = k.a.input("HiddenInput", T.a);
			class j extends s.Component {
				constructor() {
					super(...arguments), this.hiddenInputEl = null, this.onFileInputChange = t => {
						t.stopPropagation();
						const e = this.hiddenInputEl;
						e.files && e.files.length && (this.props.onFilesInput(Array.from(e.files)), e.value = "")
					}, this.onButtonClick = () => {
						this.hiddenInputEl && this.hiddenInputEl.click(), this.props.onClick()
					}, this.onHiddenInputClick = t => t.stopPropagation()
				}
				render() {
					const {
						controlsState: t,
						destSubreddit: e,
						type: n
					} = this.props, o = "image" === n, s = t.blocks[h.a];
					let c = !0;
					if (e && e.allowedPostTypes) {
						const {
							images: t,
							videos: n
						} = e.allowedPostTypes;
						c = o ? t : n
					}
					return i.a.createElement(y.a, {
						iconName: o ? a.a.image_post : a.a.video_post,
						active: s.isActive,
						enabled: s.isEnabled && c,
						tooltip: o ? r.fbt._("Add an image", null, {
							hk: "4bqU7J"
						}) : r.fbt._("Add a video", null, {
							hk: "2dn6oZ"
						}),
						onClick: this.onButtonClick
					}, i.a.createElement(x, {
						multiple: !0,
						innerRef: t => this.hiddenInputEl = t,
						onChange: this.onFileInputChange,
						onClick: this.onHiddenInputClick,
						type: "file",
						accept: Array.from(o ? C.a : C.b).join()
					}))
				}
			}
			var v = n("./src/reddit/components/RichTextEditor/Toolbar/index.m.less"),
				_ = n.n(v);

			function R() {
				return (R = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			const B = t => i.a.createElement(y.a, R({}, t, {
					tooltipContentClass: _.a.tooltip
				})),
				I = () => i.a.createElement("div", {
					className: _.a.SectionSpacer
				}),
				w = (t, e, n, r, s) => {
					const {
						name: c,
						iconName: a,
						tooltipTranslation: l
					} = t, d = l();
					if ("style" === t.type) {
						const {
							style: o
						} = t;
						return i.a.createElement(B, {
							iconName: a,
							active: e.styles[o].isActive,
							enabled: e.styles[o].isEnabled,
							key: c,
							tooltip: d,
							onClick: () => {
								const t = Object(u.c)(o, n);
								r(t), s(c, ((t, e) => t.getCurrentInlineStyle().contains(e))(t, o))
							}
						})
					} {
						const {
							block: l
						} = t;
						return i.a.createElement(B, {
							iconName: a,
							active: e.blocks[l].isActive,
							enabled: e.blocks[l].isEnabled,
							key: c,
							tooltip: d,
							onClick: () => {
								const t = Object(u.i)(l, n);
								r(t), s(c, ((t, e) => o.RichUtils.getCurrentBlockType(t) === e)(t, l))
							}
						})
					}
				},
				A = (t, e, n, o, r) => t.map(t => w(t, e, n, o, r)),
				K = [E.b, E.e],
				M = [E.j, E.g, E.k, E.i],
				L = [E.d, E.l, E.h, E.a, E.c],
				D = [E.b, E.e, E.l],
				N = [E.j, E.a],
				F = [E.g, E.k, E.i, E.d, E.h, E.c],
				P = t => i.a.createElement(B, {
					iconName: a.a.link_post,
					active: t.controlsState.link.isActive,
					enabled: t.controlsState.link.isEnabled,
					tooltip: r.fbt._("Link", null, {
						hk: "e4PGW"
					}),
					onClick: () => {
						t.onLinkButtonClick(), t.trackOnClick("link", !0)
					}
				}),
				U = t => i.a.createElement(B, {
					iconName: a.a.table,
					active: t.controlsState.blocks[h.l].isActive,
					enabled: t.controlsState.blocks[h.l].isEnabled,
					tooltip: r.fbt._("Table", null, {
						hk: "3cHfLT"
					}),
					onClick: () => {
						t.onChange(b(t.editorState, 3, 2)), t.trackOnClick("table", !0)
					}
				}),
				H = t => {
					const {
						className: e,
						allowMediaUploads: n = !1,
						destSubreddit: o,
						editorState: r,
						isOverlay: s,
						onChange: a,
						onFilesSelect: u,
						readOnly: h,
						trackOnClick: m,
						onLinkButtonClick: g,
						onMarkdownButtonClick: f,
						editorKey: b
					} = t, y = Object(p.a)(r);
					return h && Object(p.b)(y), i.a.createElement("div", {
						className: Object(c.a)(_.a.ToolbarWrapper, e, {
							[_.a.isSticky]: !s
						})
					}, i.a.createElement(l.a, {
						oveflowMenuDropdownId: b,
						className: _.a.CollapseIntoOverflow,
						editorType: d.a.Post
					}, A(K, y, r, a, m), i.a.createElement(P, {
						controlsState: y,
						trackOnClick: m,
						onLinkButtonClick: g
					}), A(M, y, r, a, m), i.a.createElement(I, null), A(L, y, r, a, m), i.a.createElement(I, null), i.a.createElement(U, {
						controlsState: y,
						editorState: r,
						trackOnClick: m,
						onChange: a
					}), n && i.a.createElement(j, {
						destSubreddit: o,
						controlsState: y,
						onClick: () => m("image_upload"),
						onFilesInput: u,
						type: "image"
					}), n && i.a.createElement(j, {
						destSubreddit: o,
						controlsState: y,
						onClick: () => m("video_upload"),
						onFilesInput: u,
						type: "video"
					})), i.a.createElement("div", {
						className: _.a.MarkdownButtonWrapper
					}, i.a.createElement(S.a, {
						className: _.a.MarkdownButton,
						onClick: f
					})))
				}
		},
		"./src/reddit/components/RichTextEditor/Tooltip/getSelectionClientRect.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js");

			function r() {
				const t = window.getSelection();
				if (!t.rangeCount) return null;
				const e = Object(o.getVisibleSelectionRect)(window);
				return e || (!e && t.focusNode && t.focusNode === t.anchorNode ? t.focusNode.getBoundingClientRect() : null)
			}
		},
		"./src/reddit/components/RichTextEditor/Tooltip/index.m.less": function(t, e, n) {
			t.exports = {
				tooltipBox: "tVQ1dB4n0mAWdcQNxFq-K",
				dropdown: "_1akkpO3lymdoWGIc5tjIpm",
				triangle: "_2O2U-Vhc1mg9O7DOwp50Aa",
				triangleBack: "_3IfYYXUMUzn2OvoiMUNcaQ",
				triangleFront: "_3CtwSTtkmKXvzDo3TmCp9C",
				triangleBelow: "_1churYJpAwcb-tf0k1c46F"
			}
		},
		"./src/reddit/components/RichTextEditor/Tooltip/index.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return h
			})), n.d(e, "b", (function() {
				return g
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/index.tsx"),
				c = n("./src/reddit/helpers/dom/index.ts"),
				a = n("./src/reddit/components/RichTextEditor/Tooltip/index.m.less"),
				l = n.n(a);
			const d = 8,
				u = 16,
				p = 15 + u / 2;
			var h;
			! function(t) {
				t[t.None = 0] = "None", t[t.Above = 1] = "Above", t[t.Below = 2] = "Below"
			}(h || (h = {}));
			const m = ({
				isBelow: t = !1,
				style: e
			}) => r.a.createElement("div", {
				className: Object(s.a)(l.a.triangle, {
					[l.a.triangleBelow]: t
				}),
				style: e
			}, r.a.createElement("div", {
				className: l.a.triangleBack
			}), r.a.createElement("div", {
				className: l.a.triangleFront
			}));
			class g extends o.Component {
				constructor(t) {
					super(t), this.containerRef = null, this.updateContainerRef = t => this.containerRef = t, this.setTargetPosition = t => {
						t ? this.updatePositioning(t) : this.setState({
							positioning: null
						})
					}, this.state = {
						positioning: null
					}
				}
				updatePositioning(t) {
					if (!this.containerRef) return;
					const e = this.containerRef.getBoundingClientRect(),
						n = Math.round(e.width),
						o = Math.round(e.height),
						r = this.state.positioning;
					if (!t) {
						if (!r) return;
						if (r.tooltipWidth === n && r.tooltipHeight === o) return
					}
					const s = t ? t.bottom : r.target.bottom,
						i = t ? t.top : r.target.top,
						a = t ? t.left : r.target.left,
						l = Object(c.e)(this.containerRef);
					let d, u, p;
					if (l) {
						const t = l.getBoundingClientRect();
						d = t.bottom - (s || 0), u = a - t.left + l.scrollLeft, p = i - t.top + l.scrollTop
					} else {
						const t = document.documentElement,
							e = window.pageYOffset || t.scrollTop;
						u = a + (window.pageXOffset || t.scrollLeft), p = i + e
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
				adjustPositionForTriangle(t, e) {
					const {
						trianglePlacement: n
					} = this.props;
					if (!n) return;
					const o = e ? e.offsetWidth : document.documentElement.offsetWidth,
						r = o ? Math.max(t.tooltip.left + t.tooltipWidth - o, 0) : 0;
					t.tooltip.left -= r + p;
					const s = r + p - u / 2;
					let i;
					n === h.Above ? (t.tooltip.top += d, i = -d) : (t.tooltip.top -= t.tooltipHeight + d, i = t.tooltipHeight), t.triangle = {
						top: i,
						left: s
					}
				}
				componentDidUpdate(t, e) {
					t.targetPosition !== this.props.targetPosition ? this.setTargetPosition(this.props.targetPosition || null) : this.updatePositioning()
				}
				componentDidMount() {
					this.setTargetPosition(this.props.targetPosition || null), this.props.onSetPositionUpdater && this.props.onSetPositionUpdater(this.setTargetPosition)
				}
				componentWillUnmount() {
					this.props.onSetPositionUpdater && this.props.onSetPositionUpdater(null)
				}
				render() {
					const {
						aboveParent: t,
						dropdown: e,
						trianglePlacement: n
					} = this.props, {
						positioning: o
					} = this.state, c = o && void 0 !== o.triangle && r.a.createElement(m, {
						isBelow: n === h.Below,
						style: {
							top: o.triangle.top + "px",
							left: o.triangle.left + "px"
						}
					});
					let a = r.a.createElement("div", {
						className: Object(s.a)(l.a.tooltipBox, this.props.className, {
							[l.a.dropdown]: e
						}),
						style: o ? {
							left: o.tooltip.left,
							...t ? {
								bottom: o.tooltip.bottom
							} : {
								top: o.tooltip.top
							}
						} : {},
						ref: this.updateContainerRef
					}, o && this.props.children && r.a.createElement(r.a.Fragment, null, c, this.props.children));
					return this.props.usePortal && (a = Object(i.d)(a, this.props.portalContainer || document.body)), a
				}
			}
		},
		"./src/reddit/components/RichTextEditor/UnorderedList/index.m.less": function(t, e, n) {
			t.exports = {
				UnorderedListWrapper: "vXDC2CysyRNVq3lFirKDs",
				unorderedListWrapper: "vXDC2CysyRNVq3lFirKDs"
			}
		},
		"./src/reddit/components/RichTextEditor/constants/draftEditorCommands.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return o
			})), n.d(e, "e", (function() {
				return r
			})), n.d(e, "g", (function() {
				return s
			})), n.d(e, "h", (function() {
				return i
			})), n.d(e, "b", (function() {
				return c
			})), n.d(e, "d", (function() {
				return a
			})), n.d(e, "f", (function() {
				return l
			})), n.d(e, "a", (function() {
				return d
			}));
			const o = "bold",
				r = "italic",
				s = "underline",
				i = "undo",
				c = "backspace",
				a = "delete",
				l = "split-block",
				d = "adjust-depth"
		},
		"./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return o
			})), n.d(e, "e", (function() {
				return r
			})), n.d(e, "d", (function() {
				return s
			})), n.d(e, "b", (function() {
				return i
			})), n.d(e, "c", (function() {
				return c
			})), n.d(e, "f", (function() {
				return a
			}));
			const o = "backspace-character",
				r = "insert-fragment",
				s = "insert-characters",
				i = "change-block-data",
				c = "change-block-type",
				a = "remove-range"
		},
		"./src/reddit/components/RichTextEditor/editorStateTransforms.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return u
			})), n.d(e, "i", (function() {
				return p
			})), n.d(e, "b", (function() {
				return g
			})), n.d(e, "f", (function() {
				return f
			})), n.d(e, "h", (function() {
				return b
			})), n.d(e, "g", (function() {
				return y
			})), n.d(e, "d", (function() {
				return E
			})), n.d(e, "e", (function() {
				return S
			})), n.d(e, "a", (function() {
				return C
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./node_modules/immutable/dist/immutable.js"),
				s = n("./src/reddit/components/RichTextEditor/constants/draftEditorCommands.ts"),
				i = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				c = n("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				a = n("./src/reddit/components/RichTextEditor/helpers/modifiers.ts"),
				l = n("./src/reddit/components/RichTextEditor/helpers/styles.ts"),
				d = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const u = (t, e) => {
					return e.getSelection().isCollapsed() ? Object(l.a)(t, e) : Object(l.b)(t, e)
				},
				p = (t, e) => {
					const n = e.getCurrentContent(),
						r = e.getSelection(),
						s = r.getEndKey(),
						a = o.RichUtils.getCurrentBlockType(e) === t ? d.n : t;
					let u = e,
						p = o.Modifier.setBlockType(n, r, a);
					const h = n.getBlockForKey(s).getLength();
					if (Object(d.r)(a) || Object(d.q)(a)) {
						const t = o.SelectionState.createEmpty(r.getStartKey()).merge({
							focusKey: r.getEndKey(),
							focusOffset: h
						});
						u = Object(l.c)(u), p = ((t, e) => {
							const n = Object.keys(d.k).reduce((t, n) => o.Modifier.removeInlineStyle(t, e, d.k[n]), t);
							return Object(c.h)(n, e)
						})(p, t)
					}
					if (Object(d.q)(a) || Object(d.p)(a)) {
						const t = p.getBlockAfter(s);
						if (!t || t.getType() !== a && t.getType() !== d.n) {
							const t = o.SelectionState.createEmpty(s).merge({
								anchorOffset: h,
								focusOffset: h
							});
							p = o.Modifier.splitBlock(p, t), p = o.Modifier.setBlockType(p, p.getSelectionAfter(), d.n)
						}
					}
					return p = p.merge({
						selectionAfter: r
					}), o.EditorState.push(u, p, i.c)
				},
				h = (t, e) => {
					const n = o.Modifier.setBlockType(t, e, d.n);
					return o.Modifier.replaceText(n, e, "", Object(r.OrderedSet)([]))
				},
				m = (t, e) => o.EditorState.forceSelection(t, o.SelectionState.createEmpty(e)),
				g = t => {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						s = a.d(e, n),
						c = s.getBlockAfter(n.getEndKey()),
						l = o.SelectionState.createEmpty(c.getKey()),
						u = o.Modifier.replaceText(o.Modifier.setBlockType(s, l, d.n), l, "", Object(r.OrderedSet)([])),
						p = o.EditorState.push(t, u, i.d);
					return m(p, c.getKey())
				},
				f = t => {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						r = e.getBlockForKey(n.getEndKey()),
						i = r.set("depth", Math.max(r.getDepth() - 1, 0)),
						c = e.merge({
							blockMap: e.getBlockMap().merge({
								[r.getKey()]: i
							})
						});
					return o.EditorState.push(t, c, s.a)
				},
				b = t => {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						r = e.getBlockForKey(n.getEndKey()).getKey(),
						s = o.EditorState.push(t, h(e, n), i.c);
					return m(s, r)
				},
				y = t => {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						r = e.getBlockForKey(n.getEndKey()),
						s = r.getKey(),
						c = e.getBlockBefore(s).getKey(),
						a = o.SelectionState.createEmpty(s).merge({
							focusOffset: r.getText().length
						}),
						l = o.EditorState.push(t, h(((t, e) => {
							const n = t.getBlockMap().remove(e);
							return t.merge({
								blockMap: n
							})
						})(e, c), a), i.c);
					return m(l, s)
				},
				E = t => {
					const e = a.d(t.getCurrentContent(), t.getSelection());
					return o.EditorState.push(t, e, s.f)
				},
				S = t => {
					const e = a.a(t.getCurrentContent(), t.getSelection(), "\n");
					return o.EditorState.push(t, e, i.d)
				},
				C = t => {
					const e = t.getSelection(),
						n = a.a(t.getCurrentContent(), e, " ");
					return o.EditorState.push(t, n, i.d)
				}
		},
		"./src/reddit/components/RichTextEditor/emotes/Powerups/tooltipAsync.ts": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			e.a = Object(o.a)({
				resolved: {},
				chunkName: () => "PowerupsEmotesTooltip",
				isReady(t) {
					const e = this.resolve(t);
					return !1 !== this.resolved[e] && !!n.m[e]
				},
				importAsync: () => n.e("PowerupsEmotesTooltip").then(n.bind(null, "./src/reddit/components/RichTextEditor/emotes/Powerups/Tooltip.tsx")),
				requireAsync(t) {
					const e = this.resolve(t);
					return this.resolved[e] = !1, this.importAsync(t).then(t => (this.resolved[e] = !0, t))
				},
				requireSync(t) {
					const e = this.resolve(t);
					return n(e)
				},
				resolve() {
					return "./src/reddit/components/RichTextEditor/emotes/Powerups/Tooltip.tsx"
				}
			})
		},
		"./src/reddit/components/RichTextEditor/emotes/decorator.m.less": function(t, e, n) {
			t.exports = {
				emote: "Q7hqnjoPSXm7QyvW8qf57",
				sticker: "_1WD0TSe2_gY29FXmFjPCza"
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/helpers.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return p
			})), n.d(e, "c", (function() {
				return h
			})), n.d(e, "g", (function() {
				return m
			})), n.d(e, "b", (function() {
				return g
			})), n.d(e, "h", (function() {
				return f
			})), n.d(e, "f", (function() {
				return b
			})), n.d(e, "e", (function() {
				return y
			})), n.d(e, "i", (function() {
				return E
			})), n.d(e, "d", (function() {
				return S
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./node_modules/immutable/dist/immutable.js"),
				s = n("./src/lib/memoizeByReference/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				c = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				a = n("./src/reddit/components/RichTextEditor/entity/getAllEntitiesInSelection.ts"),
				l = n("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				d = n("./src/reddit/components/RichTextEditor/helpers/modifiers.ts"),
				u = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const p = "⬛";

			function h(t, e) {
				return t.createEntity(c.a.EMOTE, "IMMUTABLE", e)
			}

			function m(t, e) {
				let n = e.getCurrentContent();
				const r = (n = h(n, t)).getLastCreatedEntityKey();
				n = Object(d.b)(n, e.getSelection(), p, void 0, r);
				const s = o.EditorState.push(e, n, i.d);
				return o.EditorState.forceSelection(s, s.getSelection())
			}

			function g(t, e) {
				if (e.getStartKey() !== e.getEndKey()) return !1;
				const n = t.getBlockForKey(e.getEndKey()).getType();
				return !(Object(u.q)(n) || Object(u.r)(n) || Object(u.t)(n))
			}

			function f(t, e) {
				const n = Object(a.a)(t, e, e => {
					const n = e.getEntity();
					return !!n && t.getEntity(n).getType() === c.a.EMOTE
				});
				let r;
				for (; r = n.pop();) {
					const e = o.SelectionState.createEmpty(r.blockKey).merge({
						anchorOffset: r.start,
						focusOffset: r.end
					});
					t = o.Modifier.removeRange(t, e, "backward")
				}
				return t
			}

			function b(t) {
				const e = t.getSelection();
				if (!e.isCollapsed()) return null;
				const n = t.getCurrentContent().getBlockForKey(e.getFocusKey()),
					o = n.getText(),
					r = n.getCharacterList();
				let s = e.getFocusOffset() - 1;
				const i = [];
				for (; s >= 0;) {
					const t = o[s],
						e = r.get(s),
						n = e && e.getEntity();
					if (!t.trim().length || n) return null;
					if (":" === t && i.length > 0) break;
					i.unshift(t), s--
				}
				return s >= 0 && i.length ? i.join("").toLowerCase() : null
			}

			function y(t, e, n) {
				t.findEntityRanges(t => {
					const e = t.getEntity();
					return !!e && n.getEntity(e).getType() === c.a.EMOTE
				}, e)
			}
			const E = Object(s.a)(t => {
				if (t.getBlockMap().size > 1) return !1;
				const e = t.getFirstBlock();
				let n = 0;
				return y(e, () => n++, t), n <= 3 && n === e.getLength()
			});

			function S(t, e) {
				if (E(t.getCurrentContent()) === E(e.getCurrentContent())) return t;
				const n = t.getCurrentContent(),
					s = n.getFirstBlock();
				return o.EditorState.set(t, {
					currentContent: o.Modifier.mergeBlockData(n, Object(l.b)(s), Object(r.Map)({
						_emote_modified: new Date
					}))
				})
			}
		},
		"./src/reddit/components/RichTextEditor/entity/applyEntityToContentBlock.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js");

			function r(t, e, n, r) {
				let s = t.getCharacterList();
				return s = s.withMutations(t => {
					for (let s = e; s < n; s++) t.set(s, o.CharacterMetadata.applyEntity(t.get(s), r))
				}), t.set("characterList", s)
			}
		},
		"./src/reddit/components/RichTextEditor/entity/cloneEntitiesInFragment.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			})), n.d(e, "b", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/reddit/components/RichTextEditor/entity/applyEntityToContentBlock.ts");

			function r(t, e, n, r, s) {
				const i = t.createEntity(n.getType(), n.getMutability(), n.getData()),
					c = t.getLastCreatedEntityKey();
				return [i, Object(o.a)(e, r, s, c)]
			}

			function s(t, e, n = !1) {
				const o = new Map;
				let s = e,
					i = t;
				return e.forEach((t, e) => {
					t && e && t.findEntityRanges(t => !!t.getEntity(), (n, r) => {
						const s = t.getEntityAt(n),
							i = o.get(s) || [];
						i.push({
							start: n,
							end: r,
							blockKey: e
						}), o.set(s, i)
					})
				}), o.forEach((e, o) => {
					const c = t.getEntity(o);
					(n ? e.slice(1) : e).forEach(({
						start: t,
						end: e,
						blockKey: n
					}) => {
						const o = s.get(n),
							[a, l] = r(i, o, c, t, e);
						i = a, s = s.set(n, l)
					})
				}), [i, s]
			}
		},
		"./src/reddit/components/RichTextEditor/entity/entityTypes.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return o
			})), n.d(e, "b", (function() {
				return s
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
				r = new Set([o.COMMENT_LINK, o.LINK, o.POST_LINK, o.SUBREDDIT_LINK, o.USER_LINK, o.USER_MENTION]),
				s = (t, e) => {
					const n = t && e.getEntity(t);
					return !!n && (t => r.has(t))(n.getType())
				}
		},
		"./src/reddit/components/RichTextEditor/entity/getAllEntitiesInSelection.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			}));
			var o = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts");

			function r(t, e, n) {
				const r = [];
				return Object(o.a)(t, e, (t, o) => {
					const s = e.getStartKey() === o ? e.getStartOffset() : 0,
						i = e.getEndKey() === o ? e.getEndOffset() : t.getLength();
					t.findEntityRanges(n, (e, n) => {
						s <= n && i >= e && r.push({
							blockKey: o,
							entityKey: t.getEntityAt(e),
							start: e,
							end: n
						})
					})
				}), r
			}
		},
		"./src/reddit/components/RichTextEditor/entity/getSelectionEntityInfo.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js");

			function r(t, e) {
				const n = e.getFocusKey();
				if (n !== e.getAnchorKey()) return;
				const r = t.getBlockForKey(n),
					s = e.getStartOffset(),
					i = e.getEndOffset(),
					c = r.getEntityAt(i) || (i > 0 ? r.getEntityAt(i - 1) : null);
				if (!c) return;
				let a, l;
				if (r.findEntityRanges(t => t.getEntity() === c, (t, e) => {
						t <= s && i <= e && (a = t, l = e)
					}), "number" != typeof a || "number" != typeof l) return;
				const d = r.getText().slice(a, l);
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
		"./src/reddit/components/RichTextEditor/entity/link/decorator.m.less": function(t, e, n) {
			t.exports = {
				RegularLink: "_1FRfMxEAy__7c8vezYv9qP",
				regularLink: "_1FRfMxEAy__7c8vezYv9qP"
			}
		},
		"./src/reddit/components/RichTextEditor/entity/link/helpers.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return m
			})), n.d(e, "d", (function() {
				return f
			})), n.d(e, "f", (function() {
				return b
			})), n.d(e, "c", (function() {
				return y
			})), n.d(e, "b", (function() {
				return E
			})), n.d(e, "h", (function() {
				return S
			})), n.d(e, "g", (function() {
				return C
			})), n.d(e, "e", (function() {
				return k
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./src/lib/linkMatchers/index.ts"),
				s = n("./src/lib/linkMatchers/customLinks.ts"),
				i = n("./src/lib/memoizeByReference/index.ts"),
				c = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				a = n("./src/reddit/components/RichTextEditor/entity/getAllEntitiesInSelection.ts"),
				l = n("./src/reddit/components/RichTextEditor/entity/getSelectionEntityInfo.ts"),
				d = n("./src/reddit/components/RichTextEditor/spoiler/helpers.ts"),
				u = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const p = [c.a.SUBREDDIT_LINK, c.a.USER_LINK, c.a.USER_MENTION],
				h = [...p, c.a.LINK];

			function m(t, e, n) {
				t.findEntityRanges(t => {
					const e = t.getEntity();
					return !!e && h.includes(n.getEntity(e).getType())
				}, e)
			}
			const g = t => {
					const e = r.a.match(t);
					if (e && e.length && e[0]) {
						const {
							schema: t,
							url: n
						} = e[0];
						return {
							linkPrefix: t,
							url: n
						}
					}
					return {
						linkPrefix: "",
						url: ""
					}
				},
				f = Object(i.a)((function(t) {
					const e = t.getCurrentContent(),
						n = t.getSelection();
					if (!n.isCollapsed()) return;
					if (Object(u.q)(e.getBlockForKey(n.getStartKey()).getType())) return;
					const s = n.getFocusKey(),
						i = e.getBlockForKey(s),
						c = n.getFocusOffset(),
						a = i.getText(),
						l = a.lastIndexOf(" ", c - 1) + 1,
						p = a.slice(l, c);
					if (!p) return;
					const h = r.f.match(p);
					if (!h) return;
					const m = h[h.length - 1],
						g = l + m.index,
						f = l + m.lastIndex;
					let b = -1;
					if (i.findEntityRanges(t => !!t.getEntity(), (t, e) => {
							t < c && (b = e)
						}), b >= g) return;
					return i.getCharacterList().slice(g, f).find(d.b) ? void 0 : {
						selection: o.SelectionState.createEmpty(s).merge({
							anchorOffset: g,
							focusOffset: f
						}),
						url: m.url
					}
				}));

			function b(t, e, n) {
				const r = t.getSelection();
				let s = t.getCurrentContent();
				const i = (s = s.createEntity(c.a.LINK, "MUTABLE", {
					url: n
				})).getLastCreatedEntityKey();
				return s = (s = o.Modifier.applyEntity(s, e, i)).merge({
					selectionAfter: r
				}), o.EditorState.push(t, s, "apply-entity")
			}
			const y = Object(i.a)((function(t) {
				const e = t.getCurrentContent(),
					n = Object(l.a)(e, t.getSelection());
				if (!n) return;
				const o = e.getEntity(n.entityKey);
				if (o.getType() !== c.a.LINK) return;
				const {
					url: r
				} = o.getData();
				return {
					url: r,
					...n
				}
			}));
			const E = Object(i.a)((function(t) {
				const e = t.getCurrentContent(),
					n = t.getSelection(),
					o = Object(l.a)(e, n);
				if (!o) return;
				const r = n.getFocusOffset(),
					s = e.getEntity(o.entityKey),
					{
						linkPrefix: i
					} = g(o.entityText);
				return !p.includes(s.getType()) || !o.entityText.startsWith(i) || r - o.entitySelection.getStartOffset() < i.length ? void 0 : {
					internalName: o.entityText.slice(i.length),
					...o
				}
			}));

			function S(t, e, n, r) {
				let s = "apply-entity",
					i = t.getCurrentContent(),
					a = t;
				const d = Object(l.a)(i, e);
				if (n)
					if (d) {
						const t = i.getEntity(d.entityKey),
							{
								url: e
							} = t.getData();
						e !== n && (i = i.mergeEntityData(d.entityKey, {
							url: n
						})), void 0 !== r && d.entityText !== r && (i = o.Modifier.replaceText(i, d.entitySelection, r, void 0, d.entityKey), s = "insert-characters")
					} else {
						if (void 0 === r) throw new Error("New link display text must be provided!");
						const t = (i = i.createEntity(c.a.LINK, "MUTABLE", {
							url: n
						})).getLastCreatedEntityKey();
						i = o.Modifier.replaceText(i, e, r, void 0, t), s = "insert-characters"
					}
				else i = (i = o.Modifier.applyEntity(i, e, "")).merge({
					selectionAfter: t.getSelection()
				});
				return i === t.getCurrentContent() ? t : a = o.EditorState.push(a, i, s)
			}

			function C(t, e) {
				const n = E(t);
				if (!n) return t;
				const {
					linkPrefix: r,
					url: i
				} = g(n.entityText), c = `${r===s.d.mention?s.d.profile:r}${e}`, a = n.entitySelection.getStartOffset() + c.length;
				let l = S(t, n.entitySelection, i, c);
				return l = o.EditorState.forceSelection(l, n.entitySelection.merge({
					anchorOffset: a,
					focusOffset: a
				}))
			}

			function k(t, e) {
				if (e.getStartKey() !== e.getEndKey()) return !1;
				const n = t.getBlockForKey(e.getEndKey()).getType();
				return !Object(u.q)(n) && !Object(u.t)(n) && !Object(a.a)(t, e, e => {
					const n = e.getEntity();
					return !!n && t.getEntity(n).getType() !== c.a.LINK
				}).length
			}
		},
		"./src/reddit/components/RichTextEditor/helpers/common.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return o
			})), n.d(e, "h", (function() {
				return c
			})), n.d(e, "e", (function() {
				return a
			})), n.d(e, "c", (function() {
				return l
			})), n.d(e, "f", (function() {
				return d
			})), n.d(e, "b", (function() {
				return u
			})), n.d(e, "i", (function() {
				return p
			})), n.d(e, "d", (function() {
				return h
			})), n.d(e, "g", (function() {
				return m
			}));
			var o, r = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/immutable/dist/immutable.js"),
				i = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			! function(t) {
				t.before = "before", t.after = "after"
			}(o || (o = {}));
			const c = (t, e) => new r.ContentBlock({
					key: t || Object(r.genKey)(),
					...e ? {
						text: e,
						characterList: Object(s.List)(Object(s.Repeat)(r.CharacterMetadata.create(), e.length))
					} : {}
				}),
				a = t => t.props.children,
				l = t => a(t).props.block,
				d = (t, e, n, s = o.after, a = !1, l = !1) => {
					const d = [];
					let p = -1;
					if (t.getBlockMap().forEach((t, r) => {
							s === o.after && d.push(t), r === e && (d.push(...n), p = d.length - 1), s === o.before && d.push(t)
						}), p >= 0) {
						if (a) {
							const t = d[p + 1];
							t && t.getType() === i.n || d.splice(p + 1, 0, c())
						}
						if (l) {
							const t = p - n.length,
								e = d[t];
							e && e.getType() === i.n || d.splice(t + 1, 0, c())
						}
					}
					return t.merge({
						blockMap: r.BlockMapBuilder.createFromArray(d),
						selectionAfter: u(n[n.length - 1], !1, !0)
					})
				},
				u = (t, e = !1, n = !1) => {
					let o = r.SelectionState.createEmpty(t.getKey()).merge({
						hasFocus: n
					});
					return e && (o = o.merge({
						anchorOffset: t.getLength(),
						focusOffset: t.getLength()
					})), o
				},
				p = (t, e) => {
					let n = t.getBlockBefore(e),
						o = t.getBlockMap();
					return o.get(e) ? (o = o.size > 1 ? o.remove(e) : o.set(e, c(e)), n = n || o.first(), t.merge({
						blockMap: o,
						selectionAfter: u(n, !0)
					})) : t
				},
				h = (t, e) => e.querySelector(`[data-block][data-offset-key="${t}-0-0"]`),
				m = t => t.getType() === i.n && !t.getText()
		},
		"./src/reddit/components/RichTextEditor/helpers/controlsState.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return f
			})), n.d(e, "b", (function() {
				return b
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/forEach.js"),
				r = n.n(o),
				s = n("./src/lib/forEachGroup/index.ts"),
				i = n("./src/lib/memoizeByReference/index.ts"),
				c = n("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				a = n("./src/reddit/components/RichTextEditor/entity/link/helpers.tsx"),
				l = n("./src/reddit/components/RichTextEditor/media/helpers.ts"),
				d = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				u = n("./src/reddit/components/RichTextEditor/table/helpers.ts"),
				p = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts"),
				h = n("./src/reddit/components/RichTextEditor/helpers/styles.ts");
			const m = t => {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						o = (() => {
							const t = {};
							return r()(d.k, e => t[e] = {
								isActive: !1,
								isEnabled: !1
							}), t
						})(),
						i = new Set(Object.keys(o));
					if (i.delete(d.k.HIGHLIGHT), n.isCollapsed()) {
						const r = e.getBlockForKey(n.getEndKey()),
							s = r.getType();
						Object(d.q)(s) || Object(d.r)(s) || Object(d.t)(s) || i.forEach(t => o[t].isEnabled = !0), t.getCurrentInlineStyle().forEach(t => {
							t && o[t] && (o[t].isActive = !0)
						}), Object(u.i)(r) && (o[d.k.BOLD] = {
							isEnabled: !1,
							isActive: !1
						})
					} else {
						Object(h.e)(e, n).forEach(t => {
							i.delete(t), o[t] && (o[t].isActive = !0, o[t].isEnabled = !0)
						}), Object(p.a)(e, n, (t, r) => {
							if (!i.size) return !1;
							const c = n.getStartKey() === r ? n.getStartOffset() : 0,
								a = n.getEndKey() === r ? n.getEndOffset() : t.getLength(),
								l = t.getType(),
								u = t.getCharacterList();
							Object(d.q)(l) || Object(d.r)(l) || Object(d.t)(l) || Object(s.a)(u, {
								start: c,
								end: a
							}, (n, r, s, c) => {
								const a = n.getStyle(),
									l = n.getEntity(),
									d = l ? e.getEntity(l) : null;
								if (i.forEach(e => {
										const n = !o[e].isActive,
											r = Object(h.f)(a, t, d, e, n);
										r && r !== a && (o[e].isEnabled = !0, i.delete(e))
									}), !i.size) return !1
							})
						})
					}
					return o
				},
				g = t => {
					const e = {};
					return r()(d.b, n => e[n] = {
						isActive: !1,
						isEnabled: t
					}), e
				},
				f = Object(i.a)(t => {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						o = (t => {
							const e = t.getCurrentContent(),
								n = t.getSelection();
							let o = g(!0),
								s = null;
							if (n.isCollapsed()) s = e.getBlockForKey(n.getEndKey()).getType();
							else {
								let t = null;
								Object(p.a)(e, n, (e, n) => {
									const r = e.getType();
									return Object(d.t)(r) ? (o = g(!1), !1) : (null === t && (t = r), t !== r ? (t = null, !1) : void 0)
								}), s = t
							}
							return null !== s && ((Object(d.v)(s) || Object(d.t)(s)) && r()(o, t => {
								t.isEnabled = !1
							}), o[s].isActive = !0), o
						})(t);
					return {
						giphy: {
							isActive: !1,
							isEnabled: o[d.a].isEnabled && !Object(l.j)(e)
						},
						emote: {
							isActive: !1,
							isEnabled: Object(c.b)(e, n)
						},
						link: {
							isActive: !1,
							isEnabled: Object(a.e)(e, n)
						},
						blocks: o,
						styles: m(t)
					}
				}),
				b = t => {
					r()(t.blocks, t => {
						t.isEnabled = !1
					}), r()(t.styles, t => {
						t.isEnabled = !1
					}), t.link.isEnabled = !1
				}
		},
		"./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts": function(t, e, n) {
			"use strict";

			function o(t, e, n) {
				const o = e.getStartKey(),
					r = e.getEndKey();
				if (o === r) return void n(t.getBlockForKey(o), o);
				let s = !1;
				t.getBlockMap().forEach((t, e) => {
					if (e === o && (s = !0), !s || !t || !e) return;
					const i = n(t, e);
					return e !== r && i
				})
			}
			n.d(e, "a", (function() {
				return o
			}))
		},
		"./src/reddit/components/RichTextEditor/helpers/modifiers.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return i
			})), n.d(e, "b", (function() {
				return c
			})), n.d(e, "a", (function() {
				return a
			})), n.d(e, "d", (function() {
				return l
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./src/reddit/components/RichTextEditor/entity/cloneEntitiesInFragment.ts");

			function s(t, e) {
				const n = e.getStartKey();
				if (n !== e.getEndKey()) return;
				const o = t.getBlockForKey(n),
					s = e.getStartOffset(),
					i = e.getEndOffset(),
					c = s > 0 ? o.getEntityAt(s - 1) : null,
					a = o.getEntityAt(i);
				if (!c || !a || c !== a) return;
				const l = t.getEntity(a),
					d = o.getCharacterList().toSeq().skip(i).takeWhile(t => !!t && t.getEntity() === a).count(),
					[u, p] = Object(r.a)(t, o, l, i, i + d);
				return u.merge({
					blockMap: u.getBlockMap().set(o.getKey(), p)
				})
			}

			function i(t, e, n) {
				const r = s(t, e) || t;
				return o.Modifier.replaceWithFragment(r, e, n)
			}

			function c(t, e, n, r, i) {
				let c = t;
				return -1 !== n.indexOf("\n") && (c = s(t, e) || c), o.Modifier.replaceText(c, e, n, r, i)
			}

			function a(t, e, n, r, i) {
				let c = t;
				return -1 !== n.indexOf("\n") && (c = s(t, e) || c), o.Modifier.insertText(c, e, n, r, i)
			}

			function l(t, e) {
				const n = s(t, e) || t;
				return o.Modifier.splitBlock(n, e)
			}
		},
		"./src/reddit/components/RichTextEditor/helpers/sliceContiguousBlocks.ts": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/lodash/forEach.js"),
				r = n.n(o);
			e.a = (t, e) => {
				const n = t.getBlocksAsArray(),
					o = e.getKey(),
					s = e.getType();
				let i = null,
					c = null,
					a = !1;
				if (r()(n, (t, e) => {
						if (a || t.getKey() !== o || (a = !0), t.getType() === s) null === i && (i = e), c = e;
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
		"./src/reddit/components/RichTextEditor/helpers/styles.ts": function(t, e, n) {
			"use strict";
			n.d(e, "f", (function() {
				return u
			})), n.d(e, "e", (function() {
				return p
			})), n.d(e, "b", (function() {
				return h
			})), n.d(e, "a", (function() {
				return m
			})), n.d(e, "c", (function() {
				return g
			})), n.d(e, "d", (function() {
				return f
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./node_modules/immutable/dist/immutable.js"),
				s = n("./src/lib/forEachGroup/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				c = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				a = n("./src/reddit/components/RichTextEditor/table/helpers.ts"),
				l = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts");
			const d = Object(r.OrderedSet)([]),
				u = (t, e, n, o, s = !0) => {
					const l = e.getType();
					if (Object(c.q)(l) || Object(c.r)(l) || Object(c.t)(l)) return;
					if (o === c.k.BOLD && Object(a.i)(e)) return;
					const u = n ? n.getType() : null;
					return (u === i.a.SUBREDDIT_LINK || u === i.a.USER_LINK) && o !== c.k.SPOILER && o !== c.k.MONOSPACE || u === i.a.EMOTE ? void 0 : o === c.k.MONOSPACE || o === c.k.SPOILER ? s ? Object(r.OrderedSet)([o]) : d : (t.has(c.k.MONOSPACE) || t.has(c.k.SPOILER)) && s ? Object(r.OrderedSet)([o]) : !s || o !== c.k.SUPERSCRIPT && o !== c.k.SUBSCRIPT ? s ? t.add(o) : t.has(o) ? t.delete(o) : void 0 : t.delete(c.k.SUBSCRIPT).delete(c.k.SUPERSCRIPT).add(o)
				},
				p = (t, e) => {
					let n = null,
						o = !0;
					return Object(l.a)(t, e, (r, l) => {
						const d = r.getType(),
							u = Object(a.i)(r);
						if (u || (o = !1), Object(c.q)(d) || Object(c.r)(d) || Object(c.t)(d)) return !1;
						const p = e.getStartKey() === l ? e.getStartOffset() : 0,
							h = e.getEndKey() === l ? e.getEndOffset() : r.getLength(),
							m = r.getCharacterList();
						Object(s.a)(m, {
							start: p,
							end: h
						}, e => {
							const o = e.getEntity();
							if (o && t.getEntity(o).getType() === i.a.SUBREDDIT_LINK) return;
							let r = e.getStyle();
							return u && (r = r.add(c.k.BOLD)), null === n ? n = r.asMutable() : n.intersect(r), !(n && !n.size) && void 0
						})
					}), null === n ? [] : (o && n.delete(c.k.BOLD), n.toJS())
				},
				h = (t, e) => {
					const n = e.getCurrentContent(),
						r = e.getSelection();
					let i = n.getBlockMap();
					const a = -1 === p(n, r).indexOf(t);
					Object(l.a)(n, r, (e, l) => {
						if (!e || !l) return !1;
						const d = r.getStartKey() === l ? r.getStartOffset() : 0,
							p = r.getEndKey() === l ? r.getEndOffset() : e.getLength(),
							h = e.getCharacterList(),
							m = h.withMutations(r => {
								Object(s.a)(h, {
									start: d,
									end: p
								}, (s, i, l, d) => {
									const p = s.getStyle(),
										h = s.getEntity(),
										m = h ? n.getEntity(h) : null,
										g = u(p, e, m, t, a);
									if (g) {
										const t = ((t, e) => o.CharacterMetadata.create({
											style: e,
											entity: e.has(c.k.SPOILER) ? null : t.getEntity()
										}))(s, g);
										for (let e = l; e < d; e++) r.set(e, t)
									}
								})
							});
						if (m !== h) {
							const t = e.set("characterList", m);
							i = i.set(l, t)
						}
					});
					const d = n.merge({
						blockMap: i,
						selectionAfter: r
					});
					return o.EditorState.push(e, d, "change-inline-style")
				},
				m = (t, e) => {
					const n = e.getCurrentContent(),
						r = e.getSelection(),
						s = n.getBlockForKey(r.getStartKey()),
						i = s.getEntityAt(r.getStartOffset()),
						c = i ? n.getEntity(i) : null,
						a = e.getCurrentInlineStyle(),
						l = u(a, s, c, t, !a.has(t));
					let d = e;
					return l && (d = o.EditorState.setInlineStyleOverride(d, l)), d
				},
				g = t => o.EditorState.setInlineStyleOverride(t, d),
				f = (t, e) => {
					const n = t.getSelection(),
						o = e.getSelection();
					return n.getStartOffset() > 0 || n.getFocusKey() === o.getFocusKey() || t.getCurrentInlineStyle().isEmpty() ? t : g(t)
				}
		},
		"./src/reddit/components/RichTextEditor/index.m.less": function(t, e, n) {
			t.exports = {
				Container: "_3YZ-jFfccqhepgq1dDuLEv",
				container: "_3YZ-jFfccqhepgq1dDuLEv",
				FocusableContent: "_3wl1bRnSzxHkKJfvqakrNI",
				focusableContent: "_3wl1bRnSzxHkKJfvqakrNI",
				showSubmitButton: "_3Imp2y02BMA96sEJAe9M3M",
				mRedesign: "_2sl29I15jbNPrKiiB9kfVf",
				editorWrapper: "_2baJGEALPiEMZpWB2iWQs7",
				mExpanded: "_1UhKfcyzvaWRtDdXZmzg6D",
				isTypingIndicatorsFocusableContent: "_1g9zQJkGk7g1IBiYXYr4zn",
				userIcon: "_1wS6Q6S9RvAbzxaselfK2i",
				CurrentUserIcon: "_1RdaOAYbtM4Zwt3M_YE8kp",
				currentUserIcon: "_1RdaOAYbtM4Zwt3M_YE8kp",
				hasInitialHeight: "_35E-zXyMmfsLI7nv_sBvFL",
				hasInitialMinHeight: "_18GfdTZmF2EPjYSkBDE0WI",
				noBorder: "HXDWn-rmYOwqGcGtz9AKm",
				isTypingIndicatorsEditor: "_1lPo51r4M2zEEi3ytGDjnd",
				insetSubmitButton: "_3b2mbY1nb1R-z21ihISt7z",
				emptyContent: "_3cP1eCSI5AeGc6__VQ1axu",
				focusedContent: "_2O6bpyGivXLGxZ0LErKCzW"
			}
		},
		"./src/reddit/components/RichTextEditor/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				r = (n("./node_modules/draft-js/dist/Draft.css"), n("./node_modules/fbt/lib/FbtPublic.js")),
				s = n("./node_modules/lodash/debounce.js"),
				i = n.n(s),
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
				C = n("./src/lib/logs/console.ts"),
				k = n("./src/telemetry/models/Media.ts"),
				O = n("./src/realtime/GQLSubscription/async.tsx"),
				T = n("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				x = n("./src/reddit/actions/postCreation/mediaUpload.ts"),
				j = n("./src/reddit/featureFlags/index.ts"),
				v = n("./src/reddit/helpers/trackers/postComposer.ts"),
				_ = n("./src/reddit/models/PostCreationForm/index.ts"),
				R = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const B = {
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
			const I = t => {
					const e = t.getCurrentContent().getBlockMap();
					if (e.size > 2 || (t => !!t.reduce((t = 0, e) => t + e.getLength(), 0))(e) || (t => !!t.find(t => Object(R.o)(t.getType())))(e)) return null; {
						const n = t.getSelection();
						if (n.isCollapsed() && n.getFocusKey() === e.first().getKey()) return n.getFocusKey()
					}
				},
				w = t => {
					const e = t.getCharacterList().map(t => o.CharacterMetadata.create({
						entity: t.getEntity()
					}));
					return t.set("characterList", e)
				};
			var A = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				K = n("./src/reddit/components/RichTextEditor/constants/draftEditorCommands.ts"),
				M = n("./node_modules/lodash/escape.js"),
				L = n.n(M),
				D = n("./src/reddit/components/RichTextEditor/media/helpers.ts"),
				N = n("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				F = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				P = n("./node_modules/immutable/dist/immutable.js"),
				U = n("./src/reddit/helpers/dom/index.ts"),
				H = n("./node_modules/lodash/chunk.js"),
				W = n.n(H),
				z = n("./node_modules/lodash/flatten.js"),
				q = n.n(z),
				G = n("./node_modules/lodash/takeWhile.js"),
				V = n.n(G),
				Y = n("./src/reddit/components/RichTextEditor/helpers/modifiers.ts"),
				Q = n("./src/reddit/components/RichTextEditor/table/helpers.ts"),
				J = n("./node_modules/lodash/last.js"),
				X = n.n(J),
				Z = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				$ = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts"),
				tt = n("./node_modules/lodash/find.js"),
				et = n.n(tt);
			var nt = (t, e) => {
				const n = t.getSelection(),
					r = t.getCurrentContent(),
					s = r.getBlockForKey(n.getAnchorKey()),
					i = r.getBlockForKey(n.getFocusKey()),
					[c, a] = Object(Q.e)(r, s, i);
				if (!c || c !== a) return t;
				const l = Object(Q.g)(s),
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
					E = u.filter(t => {
						const {
							rowIndex: n,
							colIndex: o
						} = Object(Q.g)(t);
						return "rows" === e ? !(f <= n && n <= y) : !(g <= o && o <= b)
					});
				E.sort(Q.b);
				const S = "rows" === e ? h : E.length / m,
					C = q()(Object(Q.d)(W()(E, S))),
					k = r.getBlocksAsArray(),
					O = [...k.slice(0, p), ...C, ...k.slice(p + u.length)],
					T = r.merge({
						blockMap: o.BlockMapBuilder.createFromArray(O)
					}),
					x = {
						colIndex: g,
						rowIndex: f
					};
				let j = et()(C, t => Object(Q.h)(x, Object(Q.g)(t)));
				j || (j = C.length ? C[C.length - 1] : k[p > 0 ? p - 1 : 0]);
				const v = o.SelectionState.createEmpty(j.getKey()).merge({
					focusOffset: j.getLength(),
					anchorOffset: j.getLength()
				});
				let _ = o.EditorState.push(t, T, Z.e);
				return _ = o.EditorState.forceSelection(_, v)
			};
			var ot = (t, e = !1) => {
				const n = t.getSelection();
				if (n.isCollapsed()) return;
				if (n.getStartKey() === n.getEndKey() && !e) return;
				const r = t.getCurrentContent(),
					s = r.getBlockForKey(n.getAnchorKey()),
					i = r.getBlockForKey(n.getFocusKey()),
					[c, a] = Object(Q.e)(r, s, i);
				if (!c || c !== a) return;
				const l = {};
				let d = n;
				if (s === i) {
					const t = Object(Q.n)(i, 0, n.getStartOffset()),
						e = Object(Q.n)(i, n.getEndOffset());
					l[i.getKey()] = Object(Q.j)(i, [t, e]), d = n
				} else {
					if (c.blocks[0].getKey() === n.getStartKey() && X()(c.blocks).getKey() === n.getEndKey()) return nt(t, "rows");
					Object($.a)(r, n, (t, e) => {
						l[e] = Object(Q.n)(t, 0, 0)
					}), d = n.merge({
						anchorOffset: 0,
						focusOffset: 0
					})
				}
				const u = r.merge({
					blockMap: r.getBlockMap().merge(l),
					selectionAfter: d
				});
				return o.EditorState.push(t, u, Z.f)
			};
			const rt = (t, e, n, o) => {
					const {
						htmlParts: r
					} = e;
					t.forEach((t, s) => {
						r.push(`<${n} ${o[s]} style="margin: 0px; padding: 4px 9px; border: 1px solid rgb(229, 227, 218);">`), Ct(t, e), r.push(`</${n}>`)
					})
				},
				st = t => {
					const e = t[0],
						n = t[t.length - 1],
						o = [...t].sort(Q.b),
						{
							minCol: r,
							maxCol: s
						} = Object(Q.f)(Object(Q.g)(e), Object(Q.g)(n)),
						i = s - r + 1;
					return Object(Q.d)(W()(o, i))
				},
				it = (t, e, n) => {
					n ? Ct(t[0], e) : ((t, e) => {
						const {
							editor: n,
							htmlParts: o
						} = e, r = n.getEditorKey(), s = t[0].map(t => {
							const {
								alignment: e
							} = Object(Q.g)(t);
							return e ? `align="${Q.a[e]}"` : ""
						}), [i, ...c] = t;
						o.push(`\n    <table data-editor="${r}">\n      <thead>\n        <tr>`), rt(i, e, "th", s), o.push("\n        </tr>\n      </thead>\n      <tbody>"), c.forEach(t => {
							o.push("\n        <tr>"), rt(t, e, "td", s), o.push("\n        </tr>")
						}), o.push("\n      </tbody>\n    </table>")
					})(st(t), e)
				},
				ct = (t, e, n) => {
					n ? e.textParts.push(Tt(t[0], e)) : ((t, e) => {
						const {
							textParts: n
						} = e;
						t.forEach(t => {
							n.push(t.map(t => Tt(t, e)).join(" "))
						})
					})(st(t), e)
				},
				at = t => {
					const {
						processed: e,
						remaining: n
					} = t, o = [];
					for (; n.length;) {
						const t = n[0];
						if (!Object(R.v)(t.getType())) break;
						o.push(n.shift())
					}
					const r = !n.length && !e.length,
						s = 1 === o.length && r;
					it(o, t, s), ct(o, t, s), ((t, e, n, o) => {
						if (n)
							if (o) {
								const n = t[0].merge({
									data: Object(P.Map)(),
									type: R.n
								});
								e.blocksParts = [n]
							} else e.blocksParts = q()(st(t))
					})(o, t, r, s), e.push(...o)
				},
				lt = t => ot(t, !0),
				dt = (t, e, n) => {
					const r = Object(R.v)(n.first().getType()),
						s = Object(R.v)(n.last().getType()),
						i = t.getBlockForKey(e.getAnchorKey()),
						c = t.getBlockForKey(e.getFocusKey()),
						[a, l] = Object(Q.e)(t, i, c);
					return a && a === l ? ((t, e, n, r) => {
						const s = Object(R.v)(r.first().getType()),
							i = t.getBlockForKey(e.getAnchorKey()),
							c = t.getBlockForKey(e.getFocusKey()),
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
						} = Object(Q.f)(Object(Q.g)(i), Object(Q.g)(c)), f = r.toArray();
						if (s) {
							const n = V()(f, t => Object(R.v)(t.getType()));
							n.sort(Q.b);
							const r = Object(Q.g)(n[0]).colCount,
								s = W()(n, r),
								i = s.length,
								c = m + i - 1,
								d = g + r - 1;
							if (n.length !== i * r) throw new Error("Invalid table fragment!");
							if (d >= u && p.forEach(t => {
									t.push(...Object(Q.l)(d - u + 1, 1))
								}), u = p[0].length, c >= h) {
								const t = W()(Object(Q.l)(u, c - h + 1), u);
								p.push(...t)
							}
							h = p.length;
							for (let t = 0; t < i; t++)
								for (let e = 0; e < r; e++) {
									const n = m + t,
										o = g + e,
										r = s[t][e];
									p[n][o] = r.set("key", p[n][o].getKey())
								}
							const b = Object(Q.d)(p),
								y = q()(b),
								E = t.getBlocksAsArray(),
								S = [...E.slice(0, l), ...y, ...E.slice(l + a.length)],
								C = Object(Q.o)(e, p[m][g], p[c][d]);
							return t.merge({
								blockMap: o.BlockMapBuilder.createFromArray(S),
								selectionAfter: C
							})
						} {
							const n = p[m][g],
								r = Object(Q.j)(n, f, " ");
							let s = e;
							return e.getStartKey() !== e.getEndKey() && (s = Object(Q.o)(e, n, n)), Y.c(t, s, o.BlockMapBuilder.createFromArray([r]))
						}
					})(t, e, a, n) : a || l || !r && !s ? void 0 : ((t, e, n) => {
						const r = Object(R.v)(n.first().getType()),
							s = Object(R.v)(n.last().getType()),
							i = n.toArray();
						r && i.unshift(Object(N.h)()), s && i.push(Object(N.h)());
						const c = o.BlockMapBuilder.createFromArray(i);
						return Y.c(t, e, c)
					})(t, e, n)
				};
			var ut = n("./node_modules/draft-js/lib/removeEntitiesAtEdges.js"),
				pt = n.n(ut);
			var ht = (t, e) => {
				const n = e.getStartKey(),
					o = e.getStartOffset(),
					r = e.getEndKey(),
					s = e.getEndOffset(),
					i = pt()(t, e).getBlockMap(),
					c = i.keySeq(),
					a = c.indexOf(n),
					l = c.indexOf(r) + 1;
				return i.slice(a, l).map((t, e) => {
					const i = t.getText(),
						c = t.getCharacterList();
					return n === r ? t.merge({
						text: i.slice(o, s),
						characterList: c.slice(o, s)
					}) : e === n ? t.merge({
						text: i.slice(o),
						characterList: c.slice(o)
					}) : e === r ? t.merge({
						text: i.slice(0, s),
						characterList: c.slice(0, s)
					}) : t
				})
			};
			const mt = (t, e) => {
					const n = {
							children: [],
							parentItem: e,
							type: t.getType()
						},
						o = {
							block: t,
							parentList: n
						};
					return n.children.push(o), e && (e.childrenLists = e.childrenLists || [], e.childrenLists.push(n)), {
						list: n,
						item: o
					}
				},
				gt = (t, e) => {
					const {
						type: n,
						children: o
					} = t, {
						htmlParts: r
					} = e, s = n === R.b.ORDERED_LIST ? "ol" : "ul";
					r.push(`<${s}>`), o.forEach(t => ((t, e) => {
						const {
							block: n,
							childrenLists: o
						} = t, {
							htmlParts: r
						} = e;
						r.push("<li>"), Ct(n, e, !0), o && o.forEach(t => gt(t, e)), r.push("</li>")
					})(t, e)), r.push(`</${s}>`)
				},
				ft = (t, e) => {
					const {
						children: n
					} = t;
					n.forEach((t, n) => bt(t, n, e))
				},
				bt = (t, e, n) => {
					const {
						block: o,
						childrenLists: r
					} = t, {
						textParts: s
					} = n, i = " ".repeat(o.getDepth()), c = o.getType() === R.b.ORDERED_LIST ? `${e+1}.` : "-", a = Tt(o, n);
					s.push(`${i}${c} ${a}`), r && r.forEach(t => ft(t, n))
				},
				yt = t => {
					const {
						remaining: e
					} = t, n = e.shift(), o = n.getType(), r = [n];
					for (; e.length;) {
						const t = e[0],
							n = t.getType();
						if (!Object(R.s)(n)) break;
						if (t.getDepth() > 0 || n === R.b.UNORDERED_LIST) r.push(e.shift());
						else {
							if (n !== o) break;
							if (r.some(t => t.getType() !== R.b.ORDERED_LIST)) break;
							r.push(e.shift())
						}
					}
					const s = (t => {
						const e = t[0],
							n = {
								type: e.getType(),
								children: []
							};
						let o, r = n,
							s = e.getDepth();
						return t.forEach(t => {
							const e = t.getType(),
								n = t.getDepth();
							if (n > s) {
								const e = mt(t, o);
								r = e.list, o = e.item, s = n
							} else {
								for (; s !== n;) r = r.parentItem ? r.parentItem.parentList : r, s--;
								if (e === r.type) o = {
									block: t,
									parentList: r
								}, r.children.push(o);
								else {
									const e = mt(t, r.parentItem);
									r = e.list, o = e.item
								}
							}
						}), n
					})(r);
					gt(s, t), ft(s, t), t.processed.push(...r)
				};
			var Et = (t, e) => {
				const n = t.toArray().filter(t => !Object(R.t)(t.getType()));
				if (1 === n.length) {
					n[0].getType() !== R.n && n.push(new o.ContentBlock({
						key: Object(o.genKey)(),
						type: R.n
					}))
				}
				const r = o.ContentState.createFromBlockArray(n),
					s = JSON.stringify(Object(o.convertToRaw)(r));
				return `<div data-reddit-rtjson="${L()(s)}">${e}</div>`
			};
			const St = () => !!window.clipboardData,
				Ct = (t, e, n = !1) => {
					const {
						htmlParts: o
					} = e, r = kt(t, e);
					r && r.forEach(t => o.push(n ? t.innerHTML : t.outerHTML))
				},
				kt = (t, e) => {
					const {
						selection: n,
						editor: o
					} = e, r = n.getStartKey(), s = n.getEndKey(), i = t.getKey(), c = o.refs.editor, a = Object(N.d)(i, c);
					return a ? i === r || i === s ? Object(U.c)(a) : [a] : null
				};
			var Ot = (t, e, n) => {
				const r = t.getCurrentContent(),
					s = t.getSelection(),
					i = Bt(t) || ht(r, s);
				if (!i || !i.count()) return;
				const c = i.toArray(),
					a = {
						editor: e,
						editorState: t,
						selection: s,
						remaining: c,
						processed: [],
						htmlParts: [],
						textParts: [],
						blocksParts: [...c]
					};
				for (; a.remaining.length;) {
					const t = a.remaining[0].getType();
					switch (!0) {
						case Object(R.t)(t):
							Rt(a);
							break;
						case Object(R.s)(t):
							yt(a);
							break;
						case Object(R.v)(t):
							at(a);
							break;
						default:
							xt(a)
					}
				}
				const l = a.textParts.join("\n"),
					d = (t => Object(P.OrderedMap)(t.map(t => {
						const e = Object(o.genKey)();
						return [e, t.set("key", e)]
					})))(a.blocksParts);
				return ((t, {
					html: e,
					text: n
				}) => {
					St() ? window.clipboardData.setData("text", n) : (e && t.clipboardData.setData("text/html", e), t.clipboardData.setData("text/plain", n))
				})(n, {
					html: Et(d, a.htmlParts.join("")),
					text: l
				}), n.stopPropagation(), n.preventDefault(), e.setClipboard(d), d
			};
			const Tt = (t, e) => {
					const n = t.getText(),
						o = e.editorState.getCurrentContent(),
						r = [];
					let s = -1;
					return t.getCharacterList().forEach((t, e) => {
						const i = t && t.getEntity();
						if (i && void 0 !== e) {
							const t = o.getEntity(i);
							t.getType() === F.a.EMOTE && (r.push(n.substring(s + 1, e)), r.push(`:${t.getData().id}:`), s = e)
						}
					}), r.push(n.substring(s + 1, n.length)), r.join("")
				},
				xt = t => {
					const e = t.remaining.shift();
					((t, e) => Ct(t, e))(e, t), ((t, e) => {
						e.textParts.push(Tt(t, e))
					})(e, t), t.processed.push(e)
				},
				jt = (t, e) => {
					const n = t.first(),
						r = t.last();
					let s = t;
					if (Object(R.u)(n.getType()) ? s = s.set(s.keySeq().first(), n.merge({
							type: R.n
						})) : Object(R.o)(n.getType()) && (s = o.BlockMapBuilder.createFromArray([Object(N.h)(), ...s.toArray()])), Object(R.u)(r.getType()) || !Object(D.q)(e)) {
						const t = Object(N.h)();
						s = s.set(t.getKey(), t)
					} else if (Object(R.o)(r.getType())) {
						const t = Object(N.h)().merge({
							type: R.j
						});
						s = s.set(t.getKey(), t)
					}
					return s
				},
				vt = (t, e, n) => {
					const o = t.getBlockForKey(e.getStartKey());
					if (Object(R.u)(o.getType())) {
						const o = n.first(),
							r = n.set(n.keySeq().first(), Object(N.h)(o.getKey(), o.getText()).merge({
								type: R.j
							}));
						return Y.c(t, e, r)
					}
				},
				_t = (t, e, n) => {
					const o = ((t, e, n) => {
						const o = e ? e.getText() : "";
						return `<span data-editor="${n}">${L()(o)}</span>`
					})(0, e, n.editor.getEditorKey());
					n.htmlParts.push(o)
				},
				Rt = t => {
					const {
						remaining: e
					} = t, n = e.shift(), o = e[0] && Object(R.u)(e[0].getType()) ? e.shift() : void 0;
					_t(0, o, t), ((t, e) => {
						const n = t ? Tt(t, e) : "";
						e.textParts.push(n)
					})(o, t), t.processed.push(n), o && t.processed.push(o)
				},
				Bt = t => {
					const e = t.getSelection(),
						n = e.getFocusKey();
					if (n !== e.getAnchorKey()) return;
					const r = t.getCurrentContent(),
						s = r.getBlockForKey(n);
					if (Object(R.o)(s.getType())) {
						const t = [s],
							e = r.getBlockAfter(s.getKey());
						return e && Object(R.u)(e.getType()) && t.push(e), o.ContentState.createFromBlockArray(t).getBlockMap()
					}
				},
				It = t => {
					const e = Bt(t);
					if (e) return Object(D.d)(t, e.first().getKey())
				},
				wt = t => {
					const e = t.getSelection();
					let n = t.getCurrentContent();
					const r = n.getBlockForKey(e.getStartKey()),
						s = n.getBlockForKey(e.getEndKey());
					if (Object(R.t)(r.getType()) || Object(R.t)(s.getType())) {
						if (e.isCollapsed())
							if (Object(R.u)(r.getType())) n = Y.d(n, e), n = o.Modifier.setBlockType(n, n.getSelectionAfter(), R.n);
							else if (Object(R.o)(r.getType())) {
							let r = n.getBlockAfter(e.getStartKey());
							return r || (r = (t = Object(D.b)(t, e.getStartKey(), N.a.after)).getCurrentContent().getBlockAfter(e.getStartKey())), o.EditorState.forceSelection(t, Object(N.b)(r, !0))
						}
						return o.EditorState.push(t, n, "split-block")
					}
				},
				At = (t, e) => {
					const n = t.getSelection(),
						r = t.getCurrentContent(),
						s = "up" === e ? n.getStartKey() : n.getEndKey(),
						i = r.getBlockForKey(s);
					if (!Object(R.o)(i.getType())) return;
					const c = "up" === e ? r.getBlockBefore(s) : r.getBlockAfter(s);
					return c ? o.EditorState.forceSelection(t, Object(N.b)(c, !0)) : Object(D.b)(t, s, "up" === e ? N.a.before : N.a.after)
				},
				Kt = (t, e) => {
					if (t.shiftKey) return;
					const n = At(e, "up");
					return n && t.preventDefault(), n
				},
				Mt = (t, e) => {
					if (t.shiftKey) return;
					const n = At(e, "down");
					return n && t.preventDefault(), n
				},
				Lt = (t, e) => {
					const n = t.getSelection();
					return n.isCollapsed() && 0 === n.getStartOffset() && Object(R.o)(t.getCurrentContent().getBlockForKey(n.getStartKey()).getType())
				};
			var Dt = (t, e) => {
					if (!Object(D.q)(e)) return t;
					const n = t.getSelection(),
						o = t.getCurrentContent(),
						r = o.getBlockForKey(n.getStartKey());
					if (Object(R.o)(r.getType())) {
						const e = o.getBlockAfter(r.getKey());
						if (!e || !Object(R.u)(e.getType())) return Object(D.d)(t, r.getKey(), !1)
					}
					return t
				},
				Nt = n("./src/reddit/actions/modal.ts"),
				Ft = n("./src/reddit/actions/upload.ts"),
				Pt = n("./src/reddit/components/ThumbnailSelector/index.tsx"),
				Ut = t => null,
				Ht = n("./src/reddit/helpers/media/index.ts"),
				Wt = n("./src/reddit/helpers/richTextEditor/index.ts"),
				zt = n("./src/reddit/selectors/activeModalId.ts");
			const qt = "application/x-reddit-rte-block";
			var Gt = n("./src/reddit/models/Upload/index.ts"),
				Vt = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/ImagePreview/index.m.less"),
				Yt = n.n(Vt);
			const Qt = E.a.img("Img", Yt.a);
			var Jt = E.a.wrapped(t => {
					const {
						className: e,
						url: n
					} = t;
					return p.a.createElement("div", {
						className: e
					}, p.a.createElement(Qt, {
						draggable: !1,
						src: n
					}))
				}, "Component", Yt.a),
				Xt = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/Placeholder/index.m.less"),
				Zt = n.n(Xt);
			const $t = E.a.div("Message", Zt.a);
			var te = E.a.wrapped(t => {
					const {
						className: e,
						isImage: n
					} = t;
					return p.a.createElement("div", {
						className: e
					}, p.a.createElement($t, null, n ? r.fbt._("Processing video...", null, {
						hk: "3g3QoU"
					}) : r.fbt._("Processing image...", null, {
						hk: "1xoNB3"
					})))
				}, "Component", Zt.a),
				ee = n("./src/lib/formatApiError/index.ts"),
				ne = n("./src/reddit/components/ProgressBar/index.tsx"),
				oe = n("./src/reddit/controls/Button/index.tsx"),
				re = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/StatusBar/index.m.less"),
				se = n.n(re);
			const ie = E.a.div("ControlRow", se.a),
				ce = E.a.wrapped(oe.t, "Button", se.a),
				ae = E.a.wrapped(oe.t, "ErrButton", se.a),
				le = E.a.div("Status", se.a),
				de = E.a.wrapped(ne.a, "ProgressBar", se.a),
				ue = E.a.div("ErrorLine", se.a),
				pe = t => e => {
					e.stopPropagation(), t(e)
				};
			var he = E.a.wrapped(t => {
					const {
						upload: e
					} = t, n = pe(t.onCancel), o = pe(t.onRetry), s = pe(t.onRemove), {
						status: i,
						progress: c
					} = e, a = c && c.percent || 0, l = i === Gt.a.FAILED || i === Gt.a.CANCELED, d = (t => {
						const {
							status: e,
							progress: n
						} = t;
						return e === Gt.a.CANCELED ? r.fbt._("Upload was canceled", null, {
							hk: "71azQ"
						}) : e === Gt.a.FAILED ? r.fbt._("Upload failed: {errorText}", [r.fbt._param("errorText", Object(ee.a)(t.error))], {
							hk: "3NGGzE"
						}) : 100 === (n && n.percent || 0) ? r.fbt._("Success!", null, {
							hk: "3622uh"
						}) : r.fbt._("Uploading: {fileName}", [r.fbt._param("fileName", t.file.name)], {
							hk: "H7qzO"
						})
					})(e);
					return p.a.createElement("div", {
						className: t.className
					}, l ? p.a.createElement(ue, null) : p.a.createElement(de, {
						innerBarClassName: se.a.ProgressBarInner,
						percent: a
					}), p.a.createElement(ie, null, p.a.createElement(le, {
						className: l ? se.a.hasError : void 0,
						title: l ? d : void 0
					}, d), p.a.createElement("div", {
						className: se.a.ButtonsContainer
					}, l ? [p.a.createElement(ae, {
						kind: oe.b.Button,
						priority: oe.c.Plain,
						key: "remove",
						onClick: s
					}, r.fbt._("Remove", null, {
						hk: "3tYl0U"
					})), p.a.createElement(ae, {
						kind: oe.b.Button,
						priority: oe.c.Plain,
						key: "retry",
						onClick: o
					}, r.fbt._("Retry", null, {
						hk: "3sO2HB"
					}))] : p.a.createElement(ce, {
						kind: oe.b.Button,
						priority: oe.c.Plain,
						disabled: 100 === a,
						onClick: n
					}, r.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})))))
				}, "Component", se.a),
				me = n("./node_modules/react-motion/lib/react-motion.js"),
				ge = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				fe = n("./src/reddit/components/PlayButton/index.tsx"),
				be = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/VideoPreview/index.m.less"),
				ye = n.n(be);
			const Ee = {
					stiffness: 60,
					damping: 20
				},
				Se = [{
					key: "video",
					style: {
						opacity: Object(me.spring)(1, Ee)
					}
				}],
				Ce = E.a.wrapped(t => {
					const {
						autoPlay: e = !1,
						className: n,
						showControls: o,
						shouldPause: r,
						style: s,
						dashUrl: i,
						hlsUrl: c,
						otherUrl: a
					} = t;
					return p.a.createElement("div", {
						className: n,
						style: s
					}, p.a.createElement(ge.b, {
						autoPlay: e,
						shouldIgnoreAutoplayPref: !0,
						shouldLoad: !1,
						shouldPause: r,
						isGif: !1,
						hlsSource: c,
						mpegDashSource: i,
						otherSource: a,
						showSettingsIcon: !1,
						showControlBar: o,
						playerClickPlay: !1,
						hideUntilLoaded: !0
					}))
				}, "VideoPlayer", ye.a),
				ke = E.a.img("PosterImg", ye.a),
				Oe = E.a.wrapped(t => {
					const {
						className: e,
						onPlayButtonClick: n,
						url: o,
						showPlayButton: r
					} = t;
					return p.a.createElement("div", {
						className: e
					}, p.a.createElement(ke, {
						draggable: !1,
						src: o
					}), r && p.a.createElement(fe.a, {
						className: ye.a.playButton,
						onClick: n
					}))
				}, "Poster", ye.a);
			class Te extends p.a.Component {
				constructor(t) {
					super(t), this.onPlayButtonClick = () => {
						this.setState({
							showVideo: !0
						})
					}, this.willEnter = () => ({
						opacity: 0
					}), this.willLeave = () => ({
						opacity: Object(me.spring)(0, Ee)
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
						props: t
					} = this;
					return p.a.createElement("div", {
						className: t.className
					}, p.a.createElement(Ce, {
						dashUrl: t.dashUrl,
						hlsUrl: t.hlsUrl,
						showControls: t.isUploaded && t.isSelected,
						shouldPause: !t.isSelected || void 0
					}))
				}
				render() {
					const {
						className: t,
						isSelected: e,
						posterUrl: n,
						dashUrl: o,
						hlsUrl: r,
						otherUrl: s
					} = this.props;
					if (!n) return this.renderVideo();
					const {
						showVideo: i
					} = this.state, c = !!(o || r || s);
					return p.a.createElement(me.TransitionMotion, {
						defaultStyles: [],
						styles: e && i && c ? Se : [],
						willEnter: this.willEnter,
						willLeave: this.willLeave,
						didLeave: this.didLeave
					}, c => p.a.createElement("div", {
						className: t
					}, c.map(t => p.a.createElement(Ce, {
						key: t.key,
						autoPlay: !0,
						style: t.style,
						otherUrl: s,
						dashUrl: o,
						hlsUrl: r,
						showControls: !0,
						shouldPause: !e || void 0
					})), p.a.createElement(Oe, {
						url: n,
						showPlayButton: !i || !e,
						onPlayButtonClick: this.onPlayButtonClick
					})))
				}
			}
			var xe = E.a.wrapped(Te, "Component", ye.a),
				je = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/index.m.less"),
				ve = n.n(je);

			function _e() {
				return (_e = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			var Re = t => {
					const {
						alignCenter: e,
						isSelected: n,
						onCancel: o,
						onRetry: r,
						onRemove: s,
						upload: i,
						mediaAsset: c,
						thumbnail: a,
						...l
					} = t;
					let d = !1;
					if (i) d = "image" === Object(Ht.f)(i.metadata.mimetype);
					else {
						if (!c) return null;
						d = c.type === D.a.Image || c.type === D.a.AnimatedImage
					}
					const u = i ? i.metadata.height : c.height,
						h = !i || i.status === Gt.a.SUCCESS,
						m = d && !!u && u < 104,
						g = !u;
					return p.a.createElement("div", _e({
						className: Object(b.a)(ve.a.container, {
							[ve.a.alignCenter]: e,
							[ve.a.isCompact]: m,
							[ve.a.isUploaded]: h,
							[ve.a.isSelected]: n
						})
					}, l), g ? p.a.createElement(te, {
						className: ve.a.placeholder,
						isImage: d
					}) : d ? p.a.createElement(Jt, {
						className: ve.a.imagePreview,
						url: i ? i.metadata.localUrl : c.imageUrl
					}) : p.a.createElement(xe, {
						className: ve.a.videoPreview,
						dashUrl: c ? c.dashUrl : void 0,
						hlsUrl: c ? c.hlsUrl : void 0,
						isSelected: n,
						isUploaded: h,
						otherUrl: i ? i.metadata.localUrl : void 0,
						posterUrl: a ? a.url : c.posterUrl
					}), i && p.a.createElement(he, {
						className: ve.a.statusBar,
						onCancel: o,
						onRemove: s,
						onRetry: r,
						upload: i
					}))
				},
				Be = n("./src/reddit/components/RichTextEditor/media/MediaBlock/SelectionHook/index.m.less"),
				Ie = n.n(Be);

			function we() {
				return (we = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			const Ae = E.a.div("HiddenDiv", Ie.a);
			var Ke = ({
					elementRef: t,
					...e
				}) => p.a.createElement(Ae, we({}, e, {
					innerRef: t
				}), p.a.createElement("br", null)),
				Me = n("./src/reddit/components/MakeGifToggle/index.tsx"),
				Le = n("./src/reddit/icons/svgs/ThumbnailSelect/index.tsx"),
				De = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				Ne = n("./src/reddit/layout/row/Inline/index.tsx"),
				Fe = n("./src/reddit/components/RichTextEditor/Toolbar/index.tsx"),
				Pe = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				Ue = n("./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.tsx"),
				He = n("./src/reddit/components/RichTextEditor/media/MediaBlock/Toolbar/index.m.less"),
				We = n.n(He);
			const ze = E.a.wrapped(Pe.a, "FormatterButton", We.a),
				qe = Object(Ue.f)(De.b),
				Ge = Object(Ue.f)(Le.a),
				Ve = E.a.wrapped(Ne.a, "ToolbarContent", We.a);
			var Ye = t => {
					const {
						alignCenter: e,
						block: n,
						editorState: o,
						onChange: s,
						showVideoControls: i
					} = t, c = n.getKey(), {
						makeGif: a = !1
					} = Object(D.h)(n) || {};
					return p.a.createElement("div", {
						className: Object(b.a)(We.a.container, {
							[We.a.alignCenter]: e
						})
					}, p.a.createElement(Ve, {
						className: We.a.content
					}, i && p.a.createElement(Me.a, {
						isCompact: !0,
						key: "make-gif",
						on: a,
						onClick: () => s(Object(D.r)(o, c, {
							makeGif: !a
						}))
					}), i && t.showThumbnailButton && p.a.createElement(ze, {
						Icon: Ge,
						onClick: t.onThumbnailButtonClick,
						tooltip: r.fbt._("Choose thumbnail", null, {
							hk: "2gKwDF"
						}),
						tooltipBelow: !0
					}), i && p.a.createElement(Fe.c, null), p.a.createElement(ze, {
						Icon: qe,
						onClick: () => s(Object(D.d)(o, c)),
						tooltip: r.fbt._("Remove", null, {
							hk: "3tYl0U"
						}),
						tooltipBelow: !0
					})))
				},
				Qe = n("./src/reddit/components/RichTextEditor/media/MediaBlock/index.m.less"),
				Je = n.n(Qe);
			const Xe = t => `RTE_VIDEO_THUMBNAIL_SELECTOR_${t.getKey()}`,
				Ze = Object(m.a)(t => t.uploads, (t, e) => {
					const n = Object(D.h)(e.block);
					return n && n.uploadInfo && n.uploadInfo.uploadKey
				}, (t, e) => e ? t[e] : void 0),
				$e = Object(h.b)((t, e) => ({
					upload: Ze(t, e),
					isThumbnailSelectorOpen: Object(zt.a)(t) === Xe(e.block),
					isRteVideoPosterEnabled: j.d.rteVideoPoster(t)
				}), (t, e) => ({
					onCancelUpload: e => t(Ft.i(e, !1)),
					toggleVideoThumbnailsSelector: () => t(Object(Nt.i)(Xe(e.block)))
				})),
				tn = E.a.div("MediaContainer", Je.a),
				en = E.a.div("Container", Je.a);
			class nn extends p.a.Component {
				constructor(t) {
					super(t), this.onNativeSelectionChange = () => {
						const t = window.getSelection();
						if (0 === t.rangeCount) return;
						const e = t.getRangeAt(0),
							{
								commonAncestorContainer: n
							} = e;
						this.state.active ? this.rootContainer.contains(n) || this.setState({
							active: !1
						}) : this.rootContainer && this.rootContainer.contains(n) && this.selectBlock(), this.setState({
							isInSelection: Object(U.i)(e, this.rootContainer)
						})
					}, this.selectBlock = () => {
						const t = document.createRange();
						t.selectNodeContents(this.rootContainer);
						const e = window.getSelection();
						e.removeAllRanges(), e.addRange(t), this.setState({
							active: !0
						})
					}, this.isSelected = () => {
						const t = this.props.blockProps.getEditorState().getSelection(),
							e = this.props.block.getKey();
						return this.state.active && Object(D.n)(t, e)
					}, this.onRetryUpload = () => {
						const {
							upload: t
						} = this.props;
						t && this.props.blockProps.onRetryUpload(t.key)
					}, this.onMediaViewClickCapture = t => {
						this.state.active || this.selectBlock()
					}, this.onDragStart = t => {
						t.dataTransfer.effectAllowed = "move", t.dataTransfer.setData(qt, this.props.block.getKey())
					}, this.onRemove = () => {
						const t = this.props.blockProps.getEditorState();
						this.props.blockProps.onChange(Object(D.d)(t, this.props.block.getKey()))
					}, this.onCancelUpload = async () => {
						this.props.upload && (await this.props.onCancelUpload(this.props.upload.key), this.selectBlock())
					}, this.onToolbarStateChange = t => {
						this.props.blockProps.onChange(t)
					}, this.toggleVideoThumbnailsSelector = () => {
						this.props.toggleVideoThumbnailsSelector()
					}, this.onThumbnailSelect = t => {
						const e = this.props.blockProps.getEditorState(),
							n = this.props.block.getKey();
						let o = Object(D.r)(e, this.props.block.getKey(), {
							thumbnail: t
						});
						o = Object(D.p)(o, n), this.props.blockProps.onChange(o), this.toggleVideoThumbnailsSelector()
					}, this.state = {
						active: !1,
						isInSelection: !1
					}
				}
				shouldComponentUpdate(t, e) {
					return e.active !== this.state.active || e.isInSelection !== this.state.isInSelection || t.block !== this.props.block || t.upload !== this.props.upload || Object(D.n)(t.selection, t.block.getKey())
				}
				componentDidMount() {
					document.addEventListener("selectionchange", this.onNativeSelectionChange);
					const {
						selection: t
					} = this.props;
					t.getHasFocus() && Object(D.n)(t, this.props.block.getKey()) && this.selectBlock(), this.overlayContainer = Ut(!0)
				}
				componentWillUnmount() {
					document.removeEventListener("selectionchange", this.onNativeSelectionChange)
				}
				componentWillReceiveProps(t) {
					const e = t.block.getKey(),
						n = this.props.blockProps.getEditorState(),
						o = n;
					n !== o && this.props.blockProps.onChange(o), !this.state.active && t.selection !== this.props.selection && t.selection.getHasFocus() && Object(D.n)(t.selection, e) && this.selectBlock()
				}
				getToolbarOffset() {
					if (!this.props.blockProps.rteFocusableContentRef || !this.rootContainer) return 0;
					const {
						top: t
					} = this.rootContainer.getBoundingClientRect(), {
						top: e
					} = this.props.blockProps.rteFocusableContentRef.getBoundingClientRect();
					return t - e - 30 - 10
				}
				render() {
					const {
						block: t,
						blockProps: e,
						isRteVideoPosterEnabled: n,
						offsetKey: o,
						upload: r
					} = this.props, s = Object(D.h)(t), i = s ? s.thumbnail : void 0, c = !!r && Object(Ht.l)(r.metadata.mimetype || ""), {
						active: a,
						isInSelection: l
					} = this.state, d = e.editorType === Wt.a.Comment;
					return p.a.createElement(en, {
						innerRef: t => this.rootContainer = t
					}, a && p.a.createElement(Ye, {
						block: t,
						editorState: e.getEditorState(),
						onChange: this.onToolbarStateChange,
						onThumbnailButtonClick: this.toggleVideoThumbnailsSelector,
						showThumbnailButton: n,
						showVideoControls: c,
						alignCenter: !d
					}), p.a.createElement(Ke, null), p.a.createElement("div", {
						contentEditable: !1,
						"data-offset-key": o
					}, p.a.createElement(tn, {
						draggable: !0,
						onDragStart: this.onDragStart,
						innerRef: t => this.mediaContainer = t
					}, p.a.createElement(Re, {
						isSelected: l || a,
						thumbnail: i,
						onCancel: this.onCancelUpload,
						onClickCapture: this.onMediaViewClickCapture,
						onRetry: this.onRetryUpload,
						onRemove: this.onRemove,
						upload: r,
						mediaAsset: s.mediaAsset,
						alignCenter: !d
					})), r && c && p.a.createElement(Pt.a, {
						onSelect: this.onThumbnailSelect,
						onToggleModal: this.toggleVideoThumbnailsSelector,
						videoSource: r.metadata.localUrl,
						videoDuration: r.metadata.videoDuration,
						selected: i,
						isOpen: this.props.isThumbnailSelectorOpen
					})), p.a.createElement(Ke, null))
				}
			}
			var on = $e(nn),
				rn = n("./src/reddit/components/RichTextEditor/media/MediaCaption/index.m.less"),
				sn = n.n(rn);
			class cn extends p.a.PureComponent {
				constructor(t) {
					super(t);
					const {
						contentState: e,
						block: n
					} = Object(N.e)(t.children[0]).props;
					this.mediaBlockKey = e.getBlockBefore(n.getKey()).getKey()
				}
				render() {
					const t = this.props.children[0],
						e = Object(N.e)(t),
						{
							block: n,
							contentState: o
						} = e.props,
						s = o.getBlockForKey(this.mediaBlockKey),
						i = Object(D.h)(s);
					if (!i || !(i.mediaAsset || i.uploadInfo && i.uploadInfo.mediaType)) return null;
					const c = !n.getLength();
					return p.a.createElement("div", {
						className: sn.a.wrapper,
						style: {
							"--media-caption-placeholder-text": c ? `'${r.fbt._("Add caption",null,{hk:"3zI8El"})}'` : ""
						}
					}, t)
				}
			}
			const an = Object(P.Map)({
				[R.j]: {
					element: "div",
					wrapper: p.a.createElement(cn, null)
				}
			});
			var ln = (t, e, n) => {
					const r = t.getSelection(),
						s = t.getCurrentContent(),
						i = s.getBlockForKey(r.getAnchorKey()),
						c = s.getBlockForKey(r.getFocusKey()),
						[a, l] = Object(Q.e)(s, i, c);
					if (!a || a !== l) return t;
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
					if ("rows" === e) {
						const t = "before" === n ? b : E + 1,
							e = W()(Object(Q.l)(m, E - b + 1), m);
						g.splice(t, 0, ...e), S.rowIndex = t
					} else {
						const t = "before" === n ? f : y + 1;
						g.forEach(e => {
							e.splice(t, 0, ...Object(Q.l)(y - f + 1, 1))
						}), S.colIndex = t
					}
					const C = Object(Q.d)(g),
						k = s.getBlocksAsArray(),
						O = q()(C),
						T = [...k.slice(0, u), ...O, ...k.slice(u + d.length)],
						x = s.merge({
							blockMap: o.BlockMapBuilder.createFromArray(T)
						}),
						j = et()(O, t => Object(Q.h)(S, Object(Q.g)(t))),
						v = Object(Q.o)(r, j, j);
					let _ = o.EditorState.push(t, x, Z.e);
					return _ = o.EditorState.forceSelection(_, v)
				},
				dn = n("./node_modules/lodash/clamp.js"),
				un = n.n(dn),
				pn = n("./src/reddit/components/RichTextEditor/helpers/sliceContiguousBlocks.ts");
			var hn = (t, e, n = "preserve") => {
				const r = t.getSelection(),
					s = t.getCurrentContent(),
					i = "up" === e || "left" === e ? r.getStartKey() : r.getEndKey(),
					c = s.getBlockForKey(i);
				if (!Object(R.v)(c.getType())) return;
				const a = Object(Q.g)(c),
					{
						colCount: l,
						colIndex: d,
						rowIndex: u
					} = a,
					p = s.getBlocksAsArray(),
					h = Object(pn.a)(s, c);
				if (!h) return;
				let m = u,
					g = d;
				switch (e) {
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
				const y = et()(h.blocks, t => Object(Q.h)(Object(Q.g)(t), f));
				if (y) b = y.getKey();
				else {
					const t = Object(Q.c)(f, a) < 0 ? h.start - 1 : h.start + h.blocks.length;
					0 <= t && t < p.length && (b = p[t].getKey())
				}
				const E = s.getBlockForKey(b);
				let S = 0;
				"preserve" === n ? S = un()(r.getFocusOffset(), 0, E.getLength()) : "end" === n && (S = E.getLength());
				const C = r.merge({
					anchorKey: b,
					focusKey: b,
					focusOffset: S,
					anchorOffset: S
				});
				return r !== C ? o.EditorState.forceSelection(t, C) : void 0
			};
			const mn = (t, e) => {
					const n = e.getCurrentContent(),
						o = e.getSelection(),
						r = n.getBlockForKey(o.getFocusKey()),
						[s] = Object(Q.e)(n, r, r);
					if (!s) return;
					const i = Object(Q.g)(r);
					let c;
					return (c = i.colIndex === i.colCount - 1 && i.rowIndex === s.blocks.length / i.colCount - 1 && !t.shiftKey && o.getFocusKey() === o.getAnchorKey() ? ln(e, "rows", "after") : hn(e, t.shiftKey ? "left" : "right", "end")) ? (t.preventDefault(), c) : void 0
				},
				gn = (t, e) => {
					if (t.shiftKey) return;
					const n = hn(e, "up");
					return n && t.preventDefault(), n
				},
				fn = (t, e) => {
					if (t.shiftKey) return;
					const n = hn(e, "down");
					return n && t.preventDefault(), n
				};
			class bn {
				constructor() {
					this.lastRowInsertionState = null
				}
				undoRowInsertion(t) {
					const e = o.EditorState.undo(t);
					return hn(e, "down", "end") || e
				}
				isSelectionInLastRow(t) {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						o = e.getBlockForKey(n.getFocusKey()),
						[r] = Object(Q.e)(e, o, o);
					if (!r) return !1;
					const s = Object(Q.g)(r.blocks[0]).colCount,
						i = r.blocks.length / s;
					return Object(Q.g)(o).rowIndex === i - 1
				}
				insertNewRow(t) {
					const e = t.getSelection();
					let n = ln(t, "rows", "after");
					return n = o.EditorState.forceSelection(n, e), n = hn(n, "down") || n, this.lastRowInsertionState = n, n
				}
				handle(t) {
					return t.getSelection().isCollapsed() ? t === this.lastRowInsertionState ? this.undoRowInsertion(t) : this.isSelectionInLastRow(t) ? this.insertNewRow(t) : hn(t, "down") || t : t
				}
			}
			const yn = (t, e) => {
				const n = t.getSelection();
				if (n.isCollapsed() || n.getStartKey() === n.getEndKey()) return;
				const r = t.getCurrentContent(),
					s = r.getBlockForKey(n.getAnchorKey()),
					i = r.getBlockForKey(n.getFocusKey()),
					[c, a] = Object(Q.e)(r, s, i);
				if (c && c === a) {
					const s = Object(Q.o)(n, i, i, !1),
						c = Y.b(r, s, e);
					return o.EditorState.push(t, c, Z.d)
				}
			};
			var En = n("./node_modules/lodash/forEach.js"),
				Sn = n.n(En);
			const Cn = (t, e) => e ? t[0] : t[t.length - 1];
			var kn = (t, e) => {
					return t.getSelection().isCollapsed() ? ((t, e) => {
						const n = t.getSelection(),
							r = e.getSelection();
						if (!n.isCollapsed() || r.isCollapsed() || 0 !== r.getStartOffset() || r.getStartKey() !== n.getStartKey()) return t;
						const s = t.getCurrentContent(),
							i = e.getCurrentContent(),
							c = s.getBlockForKey(n.getAnchorKey());
						if (!Object(R.v)(c.getType())) return t;
						const {
							rowIndex: a,
							colIndex: l
						} = Object(Q.g)(c);
						if (0 !== a || 0 !== l) return t;
						const d = s.getBlockMap(),
							u = i.getBlockMap();
						if (d.size >= u.size) return t;
						const p = s.getBlockAfter(n.getAnchorKey()),
							h = i.getBlockAfter(r.getEndKey());
						if (p && p !== h) return t;
						const m = c.merge({
								type: R.n,
								data: Object(P.Map)({})
							}),
							g = s.merge({
								blockMap: d.set(c.getKey(), m)
							});
						return o.EditorState.set(t, {
							currentContent: g
						})
					})(t, e) : ((t, e) => {
						const n = t.getSelection();
						if (n.isCollapsed()) return t;
						if (e.getSelection() === n) return t;
						if (n.getFocusKey() === n.getAnchorKey()) return t;
						const r = t.getCurrentContent(),
							s = r.getBlockForKey(n.getAnchorKey()),
							i = r.getBlockForKey(n.getFocusKey()),
							[c, a] = Object(Q.e)(r, s, i);
						if (!c && !a) return t;
						let l = t;
						if (c !== a) {
							const e = n.getIsBackward(),
								r = Object(Q.o)(n, c ? Cn(c.blocks, !e) : null, a ? Cn(a.blocks, e) : null, e);
							n !== r && (l = o.EditorState.forceSelection(t, r))
						} else if (c && a && c === a) {
							const e = Object(Q.g)(s),
								c = Object(Q.g)(i),
								d = r.getBlocksAsArray(),
								{
									start: u,
									blocks: p
								} = a,
								h = p[0],
								m = Object(Q.g)(h);
							if (0 !== m.colIndex || 0 !== m.rowIndex) throw new Error("First table block must always has [0, 0] coordinate!");
							const g = Object(Q.b)(i, s) < 0,
								f = Object(Q.k)(e, c),
								b = [],
								y = [];
							Sn()(p, t => {
								const e = Object(Q.g)(t);
								f(e.rowIndex, e.colIndex) ? b.push(t) : t !== h && y.push(t)
							});
							const E = b[0] === h;
							b.sort(Q.b);
							const S = [...d.slice(0, u), ...E ? [] : [h], ...b, ...y, ...d.slice(u + p.length)],
								C = Cn(b, !g),
								k = Cn(b, g),
								O = Object(Q.o)(n, C, k, g),
								T = r.merge({
									blockMap: o.BlockMapBuilder.createFromArray(S),
									selectionAfter: O
								});
							l = o.EditorState.set(t, {
								currentContent: T
							}), O !== n && (l = o.EditorState.forceSelection(l, O))
						}
						return l
					})(t, e)
				},
				On = n("./src/reddit/components/RichTextEditor/table/Renderer/index.m.less"),
				Tn = n.n(On);
			const xn = E.a.div("Cell", Tn.a),
				jn = E.a.div("Row", Tn.a),
				vn = E.a.div("Table", Tn.a),
				_n = (t, e) => {
					if (!e || !t.contains(e)) return;
					let n = e;
					for (; n && n !== t;) {
						if (n instanceof HTMLElement && n.hasAttribute("data-row")) return n;
						n.parentElement && (n = n.parentElement)
					}
				},
				Rn = (t, e = 10) => {
					let n = t,
						o = e;
					for (; n && o > 0;) {
						if (n instanceof HTMLElement && n.dataset.table) return n;
						n.parentElement && (n = n.parentElement), o--
					}
				},
				Bn = t => {
					const {
						dataset: e
					} = t;
					if ("string" == typeof e.row && "string" == typeof e.col) return {
						rowIndex: +e.row,
						colIndex: +e.col
					}
				},
				In = t => {
					const e = window.getSelection(),
						{
							focusNode: n,
							anchorNode: o,
							rangeCount: r
						} = e;
					if (n !== o && r && t) {
						const n = e.getRangeAt(0);
						return Object(U.i)(n, t) && !t.contains(n.commonAncestorContainer)
					}
					return !1
				},
				wn = t => {
					const e = p.a.Children.toArray(t),
						n = Object(N.e)(e[0]),
						{
							selection: o,
							contentState: r,
							block: s
						} = n.props,
						{
							colCount: i
						} = Object(Q.g)(s);
					e.sort((t, e) => Object(Q.b)(Object(N.c)(t), Object(N.c)(e)));
					const c = W()(e, i);
					let a, l, d = !1;
					if (o.getAnchorKey() !== o.getFocusKey()) {
						const t = r.getBlocksAsArray(),
							n = r.getBlockForKey(o.getStartKey()),
							i = r.getBlockForKey(o.getEndKey()),
							c = t.indexOf(n),
							u = t.indexOf(i),
							p = t.indexOf(s),
							h = p + e.length - 1;
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
				constructor(t) {
					super(t), this.tableElem = null, this.onMouseDown = t => {
						if (!this.tableElem || t.nativeEvent.detail < 2) return;
						const e = window.getSelection(),
							n = e.rangeCount ? e.getRangeAt(0) : null,
							o = _n(this.tableElem, e.focusNode);
						if (n && o)
							if (2 === t.nativeEvent.detail && e.isCollapsed) {
								const r = n.cloneRange();
								r.setEndAfter(o), r.toString() || (t.preventDefault(), e.selectAllChildren(o))
							} else t.nativeEvent.detail >= 3 && (e.selectAllChildren(o), t.preventDefault())
					}, this.onNativeSelectionChange = () => {
						const t = this.tableElem;
						if (!t) return;
						const e = window.getSelection();
						if (e.anchorNode === e.focusNode) return void this.resetSelection();
						const n = _n(t, e.anchorNode),
							o = _n(t, e.focusNode);
						n && n === o ? this.resetSelection() : n && o ? this.setCellsRange(n, o) : n || o ? this.selectWholeTable() : In(t) ? this.selectWholeTable() : this.resetSelection()
					}, this.resetSelection = () => {
						(this.state.anchorCell || this.state.focusCell || this.state.isSelectWholeTable) && this.setState({
							isSelectWholeTable: !1,
							focusCell: void 0,
							anchorCell: void 0
						})
					}, this.setCellsRange = (t, e) => {
						const n = Bn(e),
							o = Bn(t);
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
					}, this.state = wn(t.children)
				}
				componentDidMount() {
					document.addEventListener("selectionchange", this.onNativeSelectionChange)
				}
				componentWillUnmount() {
					document.removeEventListener("selectionchange", this.onNativeSelectionChange)
				}
				UNSAFE_componentWillReceiveProps(t) {
					t.children !== this.props.children && this.setState(wn(t.children))
				}
				render() {
					const {
						rows: t,
						anchorCell: e,
						focusCell: n,
						isSelectWholeTable: o
					} = this.state;
					let r;
					o ? r = (t, e) => !0 : e && n && !Object(Q.h)(e, n) && (r = Object(Q.k)(e, n));
					const s = t[0].map(t => Object(Q.g)(Object(N.e)(t).props.block).alignment),
						i = t.map((t, e) => p.a.createElement(jn, {
							key: e
						}, t.map((t, n) => p.a.createElement(xn, {
							"data-row": e,
							"data-col": n,
							"data-selected": !!r && r(e, n),
							key: n,
							style: {
								"--cell-text-alignment": s[n] ? Q.a[s[n]] : void 0
							}
						}, t))));
					return p.a.createElement(vn, {
						className: r ? Tn.a.isFakeSelectionActive : void 0,
						innerRef: t => this.tableElem = t,
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
				Dn = n("./src/reddit/components/RichTextEditor/Tooltip/index.tsx"),
				Nn = n("./src/reddit/icons/svgs/FormattingAlignCenter/index.tsx"),
				Fn = n("./src/reddit/icons/svgs/FormattingAlignLeft/index.tsx"),
				Pn = n("./src/reddit/icons/svgs/FormattingAlignRight/index.tsx"),
				Un = n("./src/reddit/icons/svgs/FormattingDeleteRow/index.tsx"),
				Hn = n("./src/reddit/icons/svgs/FormattingInsertRow/index.tsx"),
				Wn = n("./src/reddit/models/RichTextJson/index.ts");
			var zn = (t, e = !1) => {
				const n = t.getSelection(),
					r = t.getCurrentContent(),
					s = r.getBlockForKey(n.getAnchorKey()),
					i = r.getBlockForKey(n.getFocusKey()),
					[c, a] = Object(Q.e)(r, s, i);
				if (c && c === a) {
					const {
						blocks: e
					} = c;
					e.sort(Q.b);
					const r = Object(Q.o)(n, e[0], X()(e));
					return nt(o.EditorState.set(t, {
						selection: r
					}), "rows")
				}
			};
			var qn = (t, e) => {
					const n = t.getSelection(),
						r = t.getCurrentContent(),
						s = r.getBlockForKey(n.getAnchorKey()),
						i = r.getBlockForKey(n.getFocusKey()),
						[c, a] = Object(Q.e)(r, s, i);
					if (!c || c !== a) return t;
					const l = Object(Q.g)(s),
						d = Object(Q.g)(i),
						{
							minCol: u,
							maxCol: p
						} = Object(Q.f)(l, d),
						h = c.blocks.map(t => {
							const {
								colIndex: n
							} = Object(Q.g)(t);
							return u <= n && n <= p ? Object(Q.m)(t, {
								alignment: e
							}) : t
						}),
						m = r.getBlockMap(),
						g = r.merge({
							blockMap: m.merge(o.BlockMapBuilder.createFromArray(h)),
							selectionAfter: n,
							selectionBefore: n
						});
					return o.EditorState.push(t, g, Z.b)
				},
				Gn = n("./src/reddit/components/RichTextEditor/table/Toolbar/index.m.less"),
				Vn = n.n(Gn);

			function Yn() {
				return (Yn = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			const Qn = (t, e) => n => p.a.createElement(t, Yn({}, e, n)),
				Jn = Object(Ue.f)(Hn.a),
				Xn = Qn(Jn, {
					orientation: "up"
				}),
				Zn = Qn(Jn, {
					orientation: "right"
				}),
				$n = Qn(Jn, {
					orientation: "left"
				}),
				to = Object(Ue.f)(Un.a),
				eo = Qn(to, {
					orientation: "vertical"
				}),
				no = Object(Ue.f)(Nn.a),
				oo = Object(Ue.f)(Fn.a),
				ro = Object(Ue.f)(Pn.a),
				so = Object(Ue.f)(De.b),
				io = E.a.wrapped(Ne.a, "ToolbarContent", Vn.a),
				co = t => p.a.createElement(Pe.a, Yn({}, t, {
					className: Object(b.a)(Vn.a.formatterButton, t.className),
					tooltipContentClass: Vn.a.tooltip
				}));
			var ao = t => {
					const {
						editorState: e,
						onChange: n
					} = t;
					return p.a.createElement(io, null, p.a.createElement(co, {
						Icon: oo,
						onClick: () => n(qn(e, Wn.e)),
						tooltip: r.fbt._("Left align", null, {
							hk: "45eAc"
						})
					}), p.a.createElement(co, {
						Icon: no,
						onClick: () => n(qn(e, Wn.d)),
						tooltip: r.fbt._("Center align", null, {
							hk: "4aAfyf"
						})
					}), p.a.createElement(co, {
						Icon: ro,
						onClick: () => n(qn(e, Wn.f)),
						tooltip: r.fbt._("Right align", null, {
							hk: "3oHuXw"
						})
					}), p.a.createElement(Fe.c, null), p.a.createElement(co, {
						Icon: $n,
						onClick: () => n(ln(e, "columns", "before")),
						tooltip: r.fbt._("Insert column before", null, {
							hk: "11EB6Q"
						})
					}), p.a.createElement(co, {
						Icon: Zn,
						onClick: () => n(ln(e, "columns", "after")),
						tooltip: r.fbt._("Insert column after", null, {
							hk: "Ddlpl"
						})
					}), p.a.createElement(co, {
						Icon: eo,
						onClick: () => n(nt(e, "columns")),
						tooltip: r.fbt._("Delete column", null, {
							hk: "3HaQQD"
						})
					}), p.a.createElement(Fe.c, null), p.a.createElement(co, {
						Icon: Xn,
						onClick: () => n(ln(e, "rows", "before")),
						tooltip: r.fbt._("Insert row above", null, {
							hk: "1HIgn"
						})
					}), p.a.createElement(co, {
						Icon: Jn,
						onClick: () => n(ln(e, "rows", "after")),
						tooltip: r.fbt._("Insert row below", null, {
							hk: "3t7ZU"
						})
					}), p.a.createElement(co, {
						Icon: to,
						onClick: () => n(nt(e, "rows")),
						tooltip: r.fbt._("Delete row", null, {
							hk: "3yJYqS"
						})
					}), p.a.createElement(Fe.c, null), p.a.createElement(co, {
						Icon: so,
						onClick: () => n(zn(e) || e),
						tooltip: r.fbt._("Delete table", null, {
							hk: "1fK0KA"
						})
					}))
				},
				lo = n("./src/reddit/components/RichTextEditor/table/ToolbarController/index.m.less"),
				uo = n.n(lo);
			const po = 20,
				ho = E.a.div("ActionButton", uo.a),
				mo = E.a.div("ToolbarWrapper", uo.a),
				go = t => {
					const e = {};
					if (!t || !document.documentElement) return e;
					const n = t.left - 154.5,
						o = t.left + 154.5 - document.documentElement.clientWidth;
					return n < 0 ? e.left = -n + po + 2 : o > 0 && (e.left = -o + po - 2), e
				},
				fo = t => {
					t.preventDefault(), t.stopPropagation()
				};
			class bo extends u.Component {
				constructor(t) {
					super(t), this.containerElem = null, this.setContainerRef = t => this.containerElem = t, this.onResize = t => {
						this.hideToolbar(), this.state.tooltipPosition && this.updateForCurrentSelection()
					}, this.onDocumentClick = t => {
						this.state.isToolbarActive && this.containerElem && (this.containerElem.contains(t.target) || this.hideToolbar())
					}, this.onNativeSelectionChange = () => {
						this.updateForCurrentSelection()
					}, this.updateForCurrentSelection = () => {
						const t = window.getSelection();
						if (!t.rangeCount) return void this.hideActionButton();
						const e = t.getRangeAt(0).commonAncestorContainer,
							{
								rteDomRef: n
							} = this.props;
						if (!n.contains(e)) return void this.hideActionButton();
						const o = Rn(e);
						if (!o) return void this.hideActionButton();
						const r = _n(o, t.anchorNode);
						if (!r) return void this.hideActionButton();
						const s = _n(o, t.focusNode);
						s ? this.updateActionButtonPosition(r, s) : this.hideActionButton()
					}, this.updateActionButtonPosition = (t, e) => {
						const n = t.getBoundingClientRect(),
							o = e.getBoundingClientRect(),
							r = {
								top: Math.min(n.top, o.top),
								left: Math.max(n.right, o.right) - po
							};
						Ln()(this.state.tooltipPosition, r) || this.setState({
							tooltipPosition: r
						}), this.hideToolbar()
					}, this.hideActionButton = () => {
						this.hideToolbar(), this.state.tooltipPosition && this.setState({
							tooltipPosition: null
						})
					}, this.hideToolbar = () => {
						this.state.isToolbarActive && this.setState({
							isToolbarActive: !1
						})
					}, this.onActionButtonClick = t => {
						this.setState(t => ({
							isToolbarActive: !t.isToolbarActive
						})), fo(t)
					}, this.state = {
						isToolbarActive: !1,
						tooltipPosition: null
					}, this.api = {
						hideActionButton: this.hideActionButton
					}
				}
				componentDidMount() {
					const {
						onSetApi: t
					} = this.props;
					document.addEventListener("selectionchange", this.onNativeSelectionChange), document.addEventListener("click", this.onDocumentClick), window.addEventListener("resize", this.onResize), t && t(this.api)
				}
				componentWillUnmount() {
					const {
						onSetApi: t
					} = this.props;
					document.removeEventListener("selectionchange", this.onNativeSelectionChange), document.removeEventListener("click", this.onDocumentClick), window.removeEventListener("resize", this.onResize), t && t(null)
				}
				UNSAFE_componentWillReceiveProps(t) {
					const e = t.editorState.getSelection(),
						n = this.props.editorState.getSelection();
					e.getHasFocus() && Object(R.v)(o.RichUtils.getCurrentBlockType(t.editorState)) ? e !== n && this.hideToolbar() : this.hideActionButton()
				}
				render() {
					const t = !this.props.readOnly && this.state.isToolbarActive,
						{
							tooltipPosition: e
						} = this.state;
					return p.a.createElement("div", {
						ref: this.setContainerRef
					}, p.a.createElement(Dn.b, {
						targetPosition: e
					}, p.a.createElement(ho, {
						className: t ? uo.a.isPressed : void 0,
						onClick: this.onActionButtonClick,
						onMouseDown: fo,
						onMouseMove: fo
					}, t ? p.a.createElement(mo, {
						style: go(e)
					}, p.a.createElement(ao, {
						onChange: this.props.onChange,
						editorState: this.props.editorState
					})) : null)))
				}
			}
			var yo = n("./src/reddit/components/RichTextEditor/editorStateTransforms.ts");
			n("./node_modules/core-js/modules/web.dom.iterable.js");

			function Eo() {
				return (Eo = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}

			function So() {
				return new Map
			}
			const Co = p.a.createContext(So());

			function ko(t) {
				class e extends p.a.Component {
					constructor() {
						super(...arguments), this.elementRef = null, this.updateElementRef = t => {
							const {
								registry: e
							} = this.props;
							this.elementRef = t, t ? e.set(this.props.entityKey, t) : e.delete(this.props.entityKey)
						}
					}
					componentWillReceiveProps(t) {
						const {
							registry: e
						} = this.props;
						this.props.entityKey !== t.entityKey && this.elementRef && (e.get(this.props.entityKey) === this.elementRef && e.delete(this.props.entityKey), e.set(t.entityKey, this.elementRef))
					}
					render() {
						return p.a.createElement("span", {
							ref: this.updateElementRef
						}, p.a.createElement(t, this.props))
					}
				}
				return t => p.a.createElement(Co.Consumer, null, n => p.a.createElement(e, Eo({}, t, {
					registry: n
				})))
			}
			var Oo = n("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				To = n("./src/reddit/components/RichTextEditor/emotes/decorator.m.less"),
				xo = n.n(To);
			const jo = {
					strategy: Oo.e,
					component: ko(t => {
						const {
							contentState: e
						} = t, n = Object(Oo.i)(e), o = e.getEntity(t.entityKey), {
							id: r,
							emoji: s,
							sticker: i
						} = o.getData(), c = n ? i : s;
						return p.a.createElement("span", {
							className: Object(b.a)(xo.a.emote, {
								[xo.a.sticker]: n
							}),
							title: `:${r}:`,
							style: {
								backgroundImage: `url(${c.path})`,
								width: c.x
							}
						}, t.children)
					})
				},
				vo = () => jo;
			var _o = n("./src/reddit/selectors/gold/enabledFeatures.ts"),
				Ro = n("./src/reddit/selectors/gold/powerups/index.ts"),
				Bo = n("./src/reddit/components/RichTextEditor/emotes/Powerups/tooltipAsync.ts"),
				Io = n("./src/higherOrderComponents/makeAsync.tsx"),
				wo = Object(Io.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("SpecialMembershipsEmotesTooltip").then(n.bind(null, "./src/reddit/components/RichTextEditor/emotes/SpecialMemberships/tooltip.tsx")).then(t => t.default)
				});
			var Ao = t => {
				const {
					subreddit: e
				} = t, n = e.id, o = Object(h.e)(t => Object(_o.b)(t, {
					subredditId: n
				}));
				return Object(h.e)(t => Object(Ro.h)(t, {
					subredditId: n
				})) ? p.a.createElement(Bo.a, t) : p.a.createElement(p.a.Fragment, null, o && p.a.createElement(wo, t))
			};
			const Ko = new Set([F.a.LINK]);
			var Mo = n("./src/reddit/components/RichTextEditor/entity/link/helpers.tsx"),
				Lo = n("./src/reddit/components/RichTextEditor/entity/link/decorator.m.less"),
				Do = n.n(Lo);
			const No = E.a.a("RegularLink", Do.a),
				Fo = {
					strategy: Mo.a,
					component: ko(t => {
						const e = t.contentState.getEntity(t.entityKey),
							{
								url: n
							} = e.getData();
						return p.a.createElement(No, {
							href: n
						}, t.children)
					})
				},
				Po = () => Fo;
			var Uo = n("./src/lib/linkMatchers/index.ts");
			const Ho = (t, e) => {
					if (e.getType() === R.f) return [];
					return (t.match(e.getText()) || []).filter(t => ((t, {
						index: e,
						lastIndex: n
					}) => {
						for (let o = e; o < n; o++) {
							if (t.getInlineStyleAt(o).contains(R.k.MONOSPACE)) return !1
						}
						return !0
					})(e, t))
				},
				Wo = (t, e, n, r, s, i) => {
					const c = t.getBlockForKey(e),
						a = o.SelectionState.createEmpty(e),
						l = [],
						d = new Set;
					let u = t;
					const p = n === F.a.USER_MENTION ? F.a.USER_LINK : n,
						h = (t, e, o) => {
							let r = null;
							for (let s = t; s < e; s++) {
								const t = c.getEntityAt(s),
									e = t && u.getEntity(t);
								if (e) {
									if (e.getType() !== n) return;
									r || d.has(t) || (r = t)
								}
							}
							if (r) {
								u.getEntity(r).getData().url !== o && (u = u.mergeEntityData(r, {
									url: o
								}))
							}
							return r || (t => (u = u.createEntity(p, "MUTABLE", {
								url: t
							})).getLastCreatedEntityKey())(o)
						},
						m = (t, e, n) => {
							const r = a.merge({
								anchorOffset: t,
								focusOffset: e
							});
							u = o.Modifier.applyEntity(u, r, n)
						},
						g = (t, e) => m(t, e, null),
						f = u.getBlockForKey(e);
					Ho(r, f).forEach(({
						index: t,
						lastIndex: r,
						url: c
					}, p) => {
						const g = h(t, r, c);
						g && (n === F.a.USER_MENTION ? (((t, n, r) => {
							const c = u && u.getBlockForKey(e),
								l = c && c.getText().substr(t, n);
							if (l && l.replace(S.d.mention, "") && l.startsWith(S.d.mention) && S.c.test(l.replace(S.d.mention, ""))) {
								const e = a.merge({
										anchorOffset: t,
										focusOffset: t + S.d.mention.length
									}),
									c = a.merge({
										anchorOffset: t,
										focusOffset: n + S.d.mention.length
									}),
									l = a.merge({
										anchorOffset: n + S.d.mention.length,
										focusOffset: n + S.d.mention.length
									});
								u = Object(Y.b)(u, e, S.d.profile), u = o.Modifier.applyEntity(u, c, r), s && i && i(o.EditorState.forceSelection(s, l))
							}
						})(t + p, r + p, g), l.push([t + p, r + p + 1])) : (m(t, r, g), l.push([t, r])), d.add(g))
					});
					let b = 0;
					return f.findEntityRanges(t => {
						const e = t.getEntity();
						return !!e && u.getEntity(e).getType() === n
					}, (t, e) => {
						if (b >= l.length) return void g(t, e);
						const [n, o] = l[b];
						e <= n ? g(t, e) : (t < n && g(t, n - 1), e > o && g(o, e), b++)
					}), u
				},
				zo = (t, e) => {
					const n = t.getCurrentContent(),
						r = e.getCurrentContent();
					if (n === r) return t;
					const s = n.getBlockMap(),
						i = r.getBlockMap();
					let c = n;
					return s.forEach((e, n) => {
						if (n) {
							if (e === i.get(n)) return;
							c = Wo(c, n, F.a.SUBREDDIT_LINK, Uo.g), c = Wo(c, n, F.a.USER_LINK, Uo.j), c = Wo(c, n, F.a.USER_MENTION, Uo.e, t, e => t = e)
						}
					}), t.getCurrentContent() === c ? t : (c = c.merge({
						selectionAfter: t.getCurrentContent().getSelectionAfter(),
						selectionBefore: t.getCurrentContent().getSelectionBefore()
					}), o.EditorState.set(t, {
						currentContent: c
					}))
				};
			var qo = t => {
				const e = t.getCurrentContent();
				return e.getBlockMap().some(t => {
					if ((null == t ? void 0 : t.getType()) === R.a) return !0;
					let n = !1;
					return null == t || t.findEntityRanges(t => {
						const n = t.getEntity();
						return !!n && e.getEntity(n).getType() === F.a.EMOTE
					}, () => n = !0), n
				})
			};
			const Go = " ".repeat(4),
				Vo = new RegExp("^ {1,4}|\\t"),
				Yo = new Set([R.b.CODE_BLOCK]),
				Qo = (t, e) => {
					const n = e.getCurrentContent(),
						r = e.getSelection(),
						s = t.shiftKey;
					let i = n,
						c = r.getAnchorOffset(),
						a = r.getFocusOffset();
					if (Object($.a)(n, r, (t, e) => {
							const n = t.getType();
							if ("paragraph" === n || !Yo.has(n)) return !1;
							let l = null;
							const d = t.getText(),
								u = o.SelectionState.createEmpty(e);
							if (s) {
								const t = d.match(Vo);
								if (t) {
									const e = t[0].length;
									i = Y.b(i, u.merge({
										focusOffset: e
									}), ""), l = -e
								}
							} else i = Y.a(i, r.isCollapsed() ? r : u, Go), l = 4;
							null !== l && (e === r.getAnchorKey() && (c += l), e === r.getFocusKey() && (a += l))
						}), i !== n) return i = i.merge({
						selectionAfter: r.merge({
							anchorOffset: c,
							focusOffset: a
						})
					}), t.preventDefault(), o.EditorState.push(e, i, s ? "remove-range" : "insert-characters")
				},
				Jo = (t, e) => (t => {
					const e = t.getSelection(),
						n = t.getCurrentContent();
					if (!e.isCollapsed()) return ot(t);
					if (0 === e.getStartOffset()) {
						const o = n.getBlockForKey(e.getEndKey());
						if (Object(R.v)(o.getType())) return t; {
							const e = n.getBlockBefore(o.getKey());
							if (e && Object(R.v)(e.getType())) return t
						}
					}
				})(t) || ((t, e) => {
					const n = t.getSelection(),
						r = t.getCurrentContent();
					if (n.isCollapsed() && 0 === n.getStartOffset()) {
						const s = r.getBlockForKey(n.getEndKey());
						if (Object(R.o)(s.getType())) return Object(D.d)(t, s.getKey());
						if (Object(R.u)(s.getType())) {
							const e = r.getBlockBefore(s.getKey());
							return o.EditorState.forceSelection(t, Object(N.b)(e))
						}
						if (!Object(D.q)(e) && Object(N.g)(s)) {
							const e = r.getBlockBefore(s.getKey());
							if (e && Object(R.o)(e.getType())) return t = o.EditorState.push(t, Object(N.i)(r, s.getKey()), Z.f), o.EditorState.forceSelection(t, Object(N.b)(e))
						}
					}
				})(t, e),
				Xo = (t, e) => (t => {
					const e = t.getSelection(),
						n = t.getCurrentContent();
					if (!e.isCollapsed()) return ot(t); {
						const o = n.getBlockForKey(e.getEndKey());
						if (e.getEndOffset() === o.getLength()) {
							if (Object(R.v)(o.getType())) return t; {
								const e = n.getBlockAfter(o.getKey());
								if (e && Object(R.v)(e.getType())) return t
							}
						}
					}
				})(t) || ((t, e) => {
					const n = t.getSelection(),
						r = t.getCurrentContent();
					if (!n.isCollapsed()) return;
					const s = r.getBlockForKey(n.getEndKey());
					if (n.getEndOffset() === s.getLength()) {
						if (Object(R.o)(s.getType())) return Object(D.d)(t, s.getKey()); {
							const i = r.getBlockAfter(n.getEndKey());
							if (i && Object(R.o)(i.getType())) {
								if (Object(D.q)(e)) return Object(D.d)(t, i.getKey());
								if (Object(N.g)(s)) return t = o.EditorState.push(t, Object(N.i)(r, s.getKey()), Z.f), o.EditorState.forceSelection(t, Object(N.b)(i))
							}
						}
					}
				})(t, e),
				Zo = t => {
					const e = t.getSelection();
					if (!e.isCollapsed()) return !1;
					const n = o.RichUtils.getCurrentBlockType(t);
					if (!R.c.includes(n)) return !1;
					if (e.getFocusOffset() > 0) {
						if ("\n" === t.getCurrentContent().getBlockForKey(e.getFocusKey()).getText()[e.getFocusOffset() - 1]) return !1
					}
					return !0
				};
			var $o = n("./src/lib/memoizeByReference/index.ts");
			const tr = Object($o.a)(t => {
					const e = t.getSelection();
					if (!e.isCollapsed()) return;
					const n = e.getStartOffset(),
						o = t.getCurrentContent(),
						r = o.getBlockForKey(e.getFocusKey());
					if (r.getType() !== R.n) return;
					const s = r.getText();
					if (s.startsWith("1.") && 2 === n) return R.i.ORDERED;
					if (s.startsWith("*") && 1 === n) {
						const t = o.getBlockBefore(r.getKey());
						if (t && t.getType() === R.n && t.getText().startsWith("* ")) return;
						return R.i.UNORDERED
					}
				}),
				er = t => {
					const e = tr(t);
					if (!e) return t;
					const n = Object(yo.a)(t);
					let r = o.Modifier.replaceText(n.getCurrentContent(), n.getSelection().merge({
						anchorOffset: 0
					}), "");
					return r = o.Modifier.setBlockType(r, r.getSelectionAfter(), e), o.EditorState.push(n, r, Z.c)
				};
			var nr = n("./src/reddit/components/RichTextEditor/helpers/styles.ts");
			const or = Object(Io.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GifTooltip").then(n.bind(null, "./src/reddit/components/RichTextEditor/media/GifTooltip/index.tsx")).then(t => t.default)
			});

			function rr(t) {
				return p.a.createElement(or, t)
			}
			var sr = n("./src/reddit/components/RichTextEditor/spoiler/helpers.ts"),
				ir = n("./src/reddit/components/RichTextEditor/spoiler/decorator.m.less"),
				cr = n.n(ir);
			const ar = t => p.a.createElement("span", {
					className: cr.a.spoiler
				}, p.a.createElement("span", null), t.children, p.a.createElement("span", null)),
				lr = () => ({
					strategy: sr.a,
					component: ar
				});
			var dr = n("./src/reddit/components/FocusableContent/index.tsx"),
				ur = n("./src/reddit/components/RichTextEditor/Blockquote/index.m.less"),
				pr = n.n(ur);
			const hr = E.a.div("BlockQuoteWrapper", pr.a),
				mr = Object(P.Map)({
					[R.e]: {
						element: "blockquote",
						wrapper: p.a.createElement(hr, null)
					}
				});
			var gr = n("./src/reddit/components/RichTextEditor/CodeBlock/index.m.less"),
				fr = n.n(gr);
			const br = E.a.div("CodeBlockWrapper", fr.a),
				yr = Object(P.Map)({
					[R.f]: {
						element: "code",
						wrapper: p.a.createElement(br, null)
					}
				});
			var Er = n("./node_modules/bowser/src/bowser.js"),
				Sr = n.n(Er),
				Cr = n("./node_modules/lodash/includes.js"),
				kr = n.n(Cr),
				Or = n("./src/reddit/components/RichTextEditor/DragController/helpers.ts"),
				Tr = n("./src/reddit/components/RichTextEditor/DragController/index.m.less"),
				xr = n.n(Tr);
			const jr = E.a.div("DropLine", xr.a),
				vr = E.a.wrapped(Dn.b, "Tooltip", xr.a);
			class _r extends u.Component {
				constructor(t) {
					super(t), this.dragCount = 0, this.setContainerRef = t => this.containerRef = t, this.preventDocumentDrop = t => {
						!! function t(e) {
							return e.draggable ? e : e.parentElement ? t(e.parentElement) : null
						}(t.target) || (t.preventDefault(), t.stopPropagation())
					}, this.onDragOver = t => {
						const e = kr()(t.dataTransfer.types, qt);
						if (!e) {
							if (!Object(Or.c)(t.dataTransfer) || !this.props.allowMediaUploads) return
						}
						if (!e && !Object(Or.c)(t.dataTransfer)) return;
						t.preventDefault();
						try {
							t.dataTransfer.dropEffect = e ? "move" : "copy"
						} catch (s) {}
						const {
							editorState: n
						} = this.props;
						let o = null;
						const r = Object(Or.b)(n, t);
						if (r) {
							const t = this.containerRef.getBoundingClientRect().left;
							o = {
								top: r.clientY,
								left: t
							}
						}
						Ln()(o, this.state.point) || this.setState({
							point: o
						})
					}, this.onDragEnter = t => {
						this.dragCount++
					}, this.onDragLeave = t => {
						this.dragCount--, 0 === this.dragCount && this.state.point && this.setState({
							point: null
						})
					}, this.onDrop = t => {
						const e = () => {
								this.dragCount = 0, this.setState({
									point: null
								})
							},
							n = Sr.a.msie ? null : t.dataTransfer.getData(qt),
							o = Object(Or.a)(t.dataTransfer);
						if (!(n || o.length && this.props.allowMediaUploads)) return void e();
						const {
							editorState: r
						} = this.props, s = Object(Or.b)(r, t);
						if (!s) return void e();
						t.preventDefault(), t.stopPropagation();
						const i = s.isBefore ? N.a.before : N.a.after;
						n ? this.props.onBlockMove(n, s.blockKey, i) : setTimeout(() => {
							this.props.onFilesDrop(o, s.blockKey, i)
						}), e()
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
						children: t
					} = this.props, {
						point: e
					} = this.state, n = p.a.Children.only(t);
					return p.a.createElement("div", {
						className: Object(b.a)(xr.a.container, {
							[xr.a.hideCaret]: !!e
						}),
						onDragEnter: this.onDragEnter,
						onDragLeave: this.onDragLeave,
						onDragOver: this.onDragOver,
						onDrop: this.onDrop,
						ref: this.setContainerRef
					}, p.a.createElement("div", null, n), p.a.createElement(vr, {
						targetPosition: e
					}, p.a.createElement(jr, null)))
				}
			}
			var Rr = n("./node_modules/draft-js/lib/DraftPasteProcessor.js"),
				Br = n.n(Rr),
				Ir = n("./node_modules/draft-js/lib/getEntityKeyForSelection.js"),
				wr = n.n(Ir),
				Ar = n("./node_modules/draft-js/lib/splitTextIntoTextBlocks.js"),
				Kr = n.n(Ar),
				Mr = n("./src/reddit/components/RichTextEditor/entity/cloneEntitiesInFragment.ts"),
				Lr = n("./src/reddit/components/RichTextEditor/entity/applyEntityToContentBlock.ts");

			function Dr(t, e, n) {
				const r = Object(o.convertFromHTML)(e, void 0, n);
				if (r) {
					const {
						contentBlocks: e,
						entityMap: n
					} = r;
					if (e) {
						const r = o.BlockMapBuilder.createFromArray(function(t) {
							return t.map(t => Object(R.r)(t.getType()) ? w(t) : t)
						}(e));
						return [t.set("entityMap", n), r]
					}
				}
				return [t, null]
			}

			function Nr(t, e, n) {
				const r = Kr()(e),
					s = n && 1 === r.length ? n : o.CharacterMetadata.create(),
					i = Br.a.processText(r, s).map(t => t.merge({
						type: R.n
					}));
				return o.BlockMapBuilder.createFromArray(i)
			}
			const Fr = t => {
					if (!t) return null;
					const e = (new DOMParser).parseFromString(t, "text/html").querySelector("[data-reddit-rtjson]");
					return e && e.getAttribute("data-reddit-rtjson")
				},
				Pr = t => {
					if (St()) return {
						text: window.clipboardData.getData("text"),
						html: null
					}; {
						const e = t.clipboardData.getData("text/html");
						return {
							text: t.clipboardData.getData("text/plain"),
							html: e
						}
					}
				};

			function Ur(t, e, n, r) {
				const {
					text: s,
					html: i
				} = Pr(n), c = function(t, e, n, o) {
					const r = {
							text: e,
							html: n,
							rtjson: o,
							fragment: null
						},
						s = t.getClipboard();
					return s && n && function(t, e, n, o) {
						return -1 !== e.indexOf(o) || 1 === t.size && t.first().getText() === n
					}(s, n, e, t.getEditorKey()) && (r.fragment = s), r
				}(e, s, i, i && Fr(i));
				e.getClipboard() && !c.fragment && e.setClipboard(null);
				const a = t.getCurrentContent(),
					l = t.getSelection(),
					d = t.getCurrentInlineStyle(),
					u = e.props.blockRenderMap;
				let p = null,
					h = a;
				if (!(p = function(t, e, n) {
						const o = t.getBlockForKey(e.getStartKey()),
							r = t.getBlockForKey(e.getEndKey());
						if (o.getType() === R.f || r.getType() === R.f) return Nr(0, n).map(t => t.merge({
							type: R.f,
							depth: 0
						}))
					}(h, l, c.text)) && c.fragment && (p = c.fragment, [h, p] = Object(Mr.b)(h, p), p = jt(p, r)), !p && c.rtjson && (p = function(t) {
						const e = JSON.parse(t);
						return Object(o.convertFromRaw)(e).getBlockMap()
					}(c.rtjson)), !p && c.html && ([h, p] = Dr(h, c.html, u)), !p && c.text) {
					const t = function(t, e, n) {
						return o.CharacterMetadata.create({
							style: n,
							entity: wr()(t, e)
						})
					}(h, l, d);
					p = Nr(0, c.text, t), [h, p] = function(t, e) {
						let n = t,
							o = e;
						return e.forEach(t => {
							const e = t.getText(),
								r = Uo.f.match(e);
							if (!r) return;
							let s = t;
							r.forEach(({
								index: t,
								lastIndex: e,
								url: r
							}) => {
								const i = (n = n.createEntity(F.a.LINK, "MUTABLE", {
									url: r
								})).getLastCreatedEntityKey();
								s = Object(Lr.a)(s, t, e, i), o = o.set(s.getKey(), s)
							})
						}), [n, o]
					}(h, p)
				}
				if (p) return h = function(t, e, n) {
					if (n.isEmpty()) return t;
					let o = dt(t, e, n) || vt(t, e, n);
					return o || (o = Y.c(t, e, n))
				}(h, l, p), o.EditorState.push(t, h, Z.e)
			}
			var Hr = n("./src/reddit/components/RichTextEditor/entity/getSelectionEntityInfo.ts"),
				Wr = n("./src/reddit/components/RichTextEditor/Tooltip/getSelectionClientRect.ts"),
				zr = n("./src/reddit/components/RichTextEditor/LinksController/LinkDetailsPopup/index.m.less"),
				qr = n.n(zr);
			const Gr = E.a.div("LinkDetailsBox", qr.a),
				Vr = E.a.a("Link", qr.a),
				Yr = E.a.a("LinkButton", qr.a);
			var Qr = t => p.a.createElement("div", null, p.a.createElement(Gr, {
					onMouseDown: t => t.preventDefault()
				}, p.a.createElement(Vr, {
					href: t.url,
					target: "_blank"
				}, t.url), p.a.createElement("span", null, " – "), p.a.createElement(Yr, {
					onClick: () => t.onStartEdit(),
					role: "button"
				}, r.fbt._("Change", null, {
					hk: "3aOmcP"
				})), p.a.createElement("span", null, " | "), p.a.createElement(Yr, {
					onClick: () => t.onRemove(),
					role: "button"
				}, r.fbt._("Remove", null, {
					hk: "3tYl0U"
				})))),
				Jr = n("./src/reddit/controls/Input/index.tsx"),
				Xr = n("./src/reddit/components/RichTextEditor/LinksController/LinkEditorPopup/index.m.less"),
				Zr = n.n(Xr);
			const $r = E.a.form("EditForm", Zr.a),
				ts = E.a.wrapped(t => p.a.createElement("div", t, t.children), "LinkEditorBox", Zr.a),
				es = E.a.wrapped(Jr.a, "Input", Zr.a),
				ns = E.a.label("Label", Zr.a),
				os = E.a.div("HintAndButtonRow", Zr.a),
				rs = E.a.span("InvalidUrlHint", Zr.a),
				ss = E.a.wrapped(oe.l, "SubmitButton", Zr.a),
				is = (t, e) => {
					t && (t.focus({
						preventScroll: !!e
					}), t.select())
				},
				cs = / /g,
				as = /\.{3}/g,
				ls = t => t.replace(cs, "%20").replace(as, "%2E%2E%2E");
			class ds extends u.Component {
				constructor(t) {
					super(t), this.focused = !1, this.focusLostTimer = 0, this.textInputElementRef = null, this.urlInputElementRef = null, this.onEdited = () => {
						const t = this.state.url.trim(),
							e = ls(t),
							n = Object(Uo.i)(e);
						if (!n) return this.setState({
							isInvalidUrl: !0
						}), void(this.urlInputElementRef && this.urlInputElementRef.focus({
							preventScroll: !!this.props.preventFocusScroll
						}));
						const o = n.url;
						this.props.onEdited(o, this.state.displayText.trim() || t)
					}, this.onFocus = () => {
						this.focused = !0
					}, this.onBlur = () => {
						this.focused = !1, this.focusLostTimer = window.setTimeout(() => {
							this.focused || this.props.onFocusLost()
						}, 0)
					}, this.onClick = t => {
						t.stopPropagation()
					}, this.handleUrlChange = t => {
						const e = t.target.value;
						let {
							isInvalidUrl: n
						} = this.state;
						n && Object(Uo.h)(Uo.f, e) && (n = !1), this.setState({
							url: e,
							isInvalidUrl: n
						})
					}, this.handleDisplayTextChange = t => {
						this.setState({
							displayText: t.target.value
						})
					}, this.handleSubmit = t => {
						this.onEdited(), t.preventDefault()
					}, this.state = {
						url: t.url,
						displayText: t.displayText,
						isInvalidUrl: !1
					}
				}
				componentDidMount() {
					Object(Uo.h)(Uo.f, this.state.displayText) ? is(this.textInputElementRef, this.props.preventFocusScroll) : is(this.urlInputElementRef, this.props.preventFocusScroll)
				}
				componentWillUnmount() {
					this.focusLostTimer && clearTimeout(this.focusLostTimer)
				}
				render() {
					const {
						isInsertMode: t
					} = this.props;
					return p.a.createElement(ts, {
						tabIndex: 0,
						onClick: this.onClick,
						onBlur: this.onBlur,
						onFocus: this.onFocus
					}, p.a.createElement($r, {
						onSubmit: this.handleSubmit
					}, p.a.createElement(ns, null, r.fbt._("Text", null, {
						hk: "1oock0"
					}), ":", p.a.createElement(es, {
						innerRef: t => this.textInputElementRef = t,
						type: "text",
						placeholder: r.fbt._("Title of link (optional)", null, {
							hk: "17GvI"
						}),
						value: this.state.displayText,
						onChange: this.handleDisplayTextChange
					})), p.a.createElement(ns, null, r.fbt._("Link", null, {
						hk: "1Cfzw7"
					}), p.a.createElement(es, {
						innerRef: t => this.urlInputElementRef = t,
						type: "text",
						placeholder: r.fbt._("Paste or type a link", null, {
							hk: "3QWoAf"
						}),
						value: this.state.url,
						onChange: this.handleUrlChange
					})), p.a.createElement(os, null, p.a.createElement(ss, {
						type: "submit",
						disabled: this.state.isInvalidUrl
					}, t ? r.fbt._("Insert", null, {
						hk: "3H7yaS"
					}) : r.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), this.state.isInvalidUrl ? p.a.createElement(rs, null, r.fbt._("Link doesn't look right", null, {
						hk: "1BHfKz"
					})) : null)))
				}
			}

			function us(t, e, n) {
				const o = t.getCurrentContent(),
					r = {
						text: "",
						url: ""
					};
				if (e.isCollapsed()) return r;
				if (n) r.text = n.entityText, r.url = o.getEntity(n.entityKey).getData().url;
				else {
					r.text = function(t, e) {
						if (t.getStartKey() !== t.getEndKey()) throw new Error("Selection must be in a single block");
						return t.isCollapsed() ? "" : e.getBlockForKey(t.getStartKey()).getText().slice(t.getStartOffset(), t.getEndOffset())
					}(e, t.getCurrentContent());
					const n = Object(Uo.h)(Uo.f, r.text);
					n && (r.url = n.url)
				}
				return r
			}

			function ps(t, e) {
				return o.EditorState.set(t, {
					currentContent: o.Modifier.removeInlineStyle(t.getCurrentContent(), e, R.k.HIGHLIGHT)
				})
			}
			class hs extends u.Component {
				constructor(t) {
					super(t), this.api = null, this.updateTooltipPosition = null, this.lastEditorSelectionClientRect = null, this.editLinkInSelection = t => {
						const {
							editorState: e
						} = this.props;
						let n = t,
							r = e;
						const s = e.getCurrentContent();
						if (!Object(Mo.e)(s, t)) return !1;
						const i = Object(Hr.a)(s, t);
						if (i) {
							if (s.getEntity(i.entityKey).getType() !== F.a.LINK) return !1;
							n = i.entitySelection
						} else this.isEditorFocused() && (this.lastEditorSelectionClientRect = Object(Wr.a)());
						return this.state.linkSelection && (r = ps(e, this.state.linkSelection)), r = function(t, e) {
							return o.EditorState.set(t, {
								currentContent: o.Modifier.applyInlineStyle(t.getCurrentContent(), e, R.k.HIGHLIGHT)
							})
						}(e, n), this.props.onChange(r, () => {
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
							editorState: t,
							isTooltipAbove: e,
							containerRef: n
						} = this.props, o = t.getCurrentContent();
						let r;
						if (this.state.linkSelection) {
							const t = Object(Hr.a)(o, this.state.linkSelection);
							if (t) {
								const e = this.props.entityElementRegistry.get(t.entityKey);
								r = e && e.getBoundingClientRect()
							} else this.lastEditorSelectionClientRect && (r = this.lastEditorSelectionClientRect)
						} else {
							const e = Object(Mo.c)(t);
							if (e) {
								const t = this.props.entityElementRegistry.get(e.entityKey);
								r = t && t.getBoundingClientRect()
							} else r = n && n.getBoundingClientRect()
						}
						r && (this.updateTooltipPosition({
							left: r.left,
							top: e ? r.top : r.bottom
						}), this.lastEditorSelectionClientRect = null)
					}, this.handleLink = (t, e) => {
						const {
							linkSelection: n
						} = this.state, {
							editorState: r
						} = this.props;
						let s = r;
						n && (n.isCollapsed() || (s = ps(r, n)), void 0 !== t && (s = Object(Mo.h)(s, n, t, e)), this.setState({
							linkSelection: null,
							linkEntity: null
						}), s !== r && (s = o.EditorState.forceSelection(s, s.getSelection()), this.props.onChange(s)))
					}, this.onLinkEdited = (t, e) => {
						this.handleLink(t, e)
					}, this.interruptLinkEditing = () => this.handleLink(), this.isEditorFocused = () => this.props.editorState.getSelection().getHasFocus(), this.onStartEditFocusedLink = () => {
						const {
							editorState: t
						} = this.props, e = Object(Mo.c)(t);
						e && this.editLinkInSelection(e.entitySelection)
					}, this.onRemoveFocusedLink = () => {
						const {
							editorState: t
						} = this.props, e = Object(Mo.c)(t);
						e && this.props.onChange(Object(Mo.h)(t, e.entitySelection, ""))
					}, this.renderEditorPopup = () => {
						const {
							linkSelection: t,
							linkEntity: e
						} = this.state, {
							editorState: n
						} = this.props;
						if (!t) return null;
						const {
							text: o,
							url: r
						} = us(n, t, e);
						return p.a.createElement(ds, {
							url: r,
							displayText: o,
							isInsertMode: !e,
							onEdited: this.onLinkEdited,
							onFocusLost: this.interruptLinkEditing,
							preventFocusScroll: this.props.preventFocusScroll
						})
					}, this.renderDetailsPopup = () => {
						const t = Object(Mo.c)(this.props.editorState);
						return t && this.isEditorFocused() && this.state.isDetailsPopupActive ? p.a.createElement(Qr, {
							url: t.url,
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
						onSetApi: t
					} = this.props;
					this.api && t && t(this.api)
				}
				componentWillUnmount() {
					this.props.onSetApi && this.props.onSetApi(null)
				}
				componentDidUpdate(t, e) {
					e.linkSelection === this.state.linkSelection && t.editorState === this.props.editorState || (this.showDetailsPopup(), this.updatePosition())
				}
				render() {
					const {
						isTooltipAbove: t
					} = this.props;
					return p.a.createElement(Dn.b, {
						onSetPositionUpdater: t => this.updateTooltipPosition = t,
						trianglePlacement: t ? Dn.a.Below : Dn.a.Above
					}, this.renderEditorPopup() || this.renderDetailsPopup())
				}
			}
			var ms = n("./src/reddit/components/RichTextEditor/OrderedList/index.m.less"),
				gs = n.n(ms);
			const fs = E.a.ol("OrderedListWrapper", gs.a),
				bs = Object(P.Map)({
					[R.i.ORDERED]: {
						element: "li",
						aliasedElements: ["li"],
						wrapper: p.a.createElement(fs, null)
					}
				});
			var ys = n("./src/reddit/components/RichTextEditor/Paragraph/index.m.less"),
				Es = n.n(ys);
			const Ss = E.a.div("ParagraphWrapper", Es.a),
				Cs = Object(P.Map)({
					[R.n]: {
						element: "div",
						aliasedElements: ["p"],
						wrapper: p.a.createElement(Ss, null)
					}
				});
			var ks = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx");
			var Os = n("./src/reddit/components/RichTextEditor/TextRendering/index.m.less"),
				Ts = n.n(Os);
			const xs = Object($o.a)(() => ({
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
				js = E.a.div("H1", Ts.a),
				vs = E.a.div("H2", Ts.a),
				_s = E.a.div("H3", Ts.a),
				Rs = E.a.div("H4", Ts.a),
				Bs = E.a.div("H5", Ts.a),
				Is = E.a.div("H6", Ts.a),
				ws = t => ({
					component: e => p.a.createElement(t, null, p.a.createElement(o.EditorBlock, e)),
					editable: !0
				}),
				As = {
					[R.g.H1]: ws(js),
					[R.g.H2]: ws(vs),
					[R.g.H3]: ws(_s),
					[R.g.H4]: ws(Rs),
					[R.g.H5]: ws(Bs),
					[R.g.H6]: ws(Is)
				},
				Ks = ["italic normal 1em 'Noto Sans'", "italic bold 1em 'Noto Sans'", "normal bold 1em 'Noto Sans'"],
				Ms = () => {
					const t = document.fonts;
					t && t.load && Ks.forEach(e => t.load(e))
				};
			var Ls = n("./src/reddit/components/RichTextEditor/UnorderedList/index.m.less"),
				Ds = n.n(Ls);
			const Ns = E.a.ul("UnorderedListWrapper", Ds.a),
				Fs = Object(P.Map)({
					[R.i.UNORDERED]: {
						element: "li",
						aliasedElements: ["li"],
						wrapper: p.a.createElement(Ns, null)
					}
				});
			var Ps = n("./src/reddit/contexts/InsideOverlay.tsx"),
				Us = n("./src/reddit/actions/subredditAutocomplete/index.ts"),
				Hs = n("./src/reddit/controls/SubredditDropdown/index.m.less"),
				Ws = n.n(Hs);

			function zs() {
				return (zs = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			const qs = ({
				isFocused: t,
				...e
			}) => p.a.createElement("div", zs({
				className: Object(b.a)(Ws.a.entry, {
					[Ws.a.mIsFocused]: t
				})
			}, e));
			class Gs extends u.Component {
				constructor(t) {
					super(t), this.mouseDown = !1, this.onMouseUp = () => {
						this.mouseDown && (this.props.onEntrySelect(this.props.entry), this.mouseDown = !1)
					}, this.onMouseDown = t => {
						this.mouseDown = !0, t.preventDefault()
					}, this.onMouseOver = () => {
						this.props.onEntryFocus(this.props.entry)
					}, this.mouseDown = !1
				}
				componentDidUpdate() {
					this.mouseDown = !1
				}
				render() {
					return p.a.createElement(qs, {
						isFocused: this.props.isFocused,
						onMouseDown: this.onMouseDown,
						onMouseUp: this.onMouseUp,
						onMouseOver: this.onMouseOver
					}, this.props.children)
				}
			}
			var Vs = n("./src/reddit/helpers/name/index.ts"),
				Ys = n("./src/reddit/selectors/subredditAutocomplete.ts");
			const Qs = Object(m.c)({
				subredditSuggestions: (t, e) => {
					const n = Object(Ys.d)(t, e);
					return n ? n.subreddits : []
				}
			});
			class Js extends u.Component {
				constructor(t) {
					super(t), this.api = null, this.onEntrySelect = t => {
						this.props.onSelect(this.props.subredditSuggestions[t].name)
					}, this.onEntryFocus = t => {
						this.setState({
							selectedSuggestionIndex: t
						})
					}, this.moveUp = () => {
						if (this.props.subredditSuggestions.length > 1) {
							let t = this.state.selectedSuggestionIndex - 1;
							return t = t < 0 ? this.props.subredditSuggestions.length - 1 : t, this.setState({
								selectedSuggestionIndex: t
							}), !0
						}
						return !1
					}, this.moveDown = () => {
						if (this.props.subredditSuggestions.length > 1) {
							const t = (this.state.selectedSuggestionIndex + 1) % this.props.subredditSuggestions.length;
							return this.setState({
								selectedSuggestionIndex: t
							}), !0
						}
						return !1
					}, this.selectCurrent = () => {
						if (this.props.subredditSuggestions.length) {
							const t = this.props.subredditSuggestions[this.state.selectedSuggestionIndex];
							return t && this.props.onSelect(t.name), !0
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
				componentWillReceiveProps(t) {
					t.substring !== this.props.substring && (this.requestSubredditAutocomplete(t.substring), this.setState({
						selectedSuggestionIndex: 0
					}))
				}
				requestSubredditAutocomplete(t) {
					this.props.onGetSubredditAutocomplete(t)
				}
				render() {
					return this.props.subredditSuggestions.length ? p.a.createElement("div", {
						className: Object(b.a)(Ws.a.list, this.props.className)
					}, this.props.subredditSuggestions.map((t, e) => p.a.createElement(Gs, {
						entry: e,
						isFocused: e === this.state.selectedSuggestionIndex,
						key: t.name,
						onEntrySelect: this.onEntrySelect,
						onEntryFocus: this.onEntryFocus
					}, Object(Vs.c)(t.name)))) : null
				}
			}
			var Xs = Object(h.b)(Qs, (t, e) => ({
					onGetSubredditAutocomplete: e => {
						t(Us.a(e))
					}
				}))(Js),
				Zs = n("./src/reddit/selectors/comments.ts");
			const $s = Object(m.c)({
				commentAuthors: Zs.h
			});
			class ti extends u.Component {
				constructor(t) {
					super(t), this.api = null, this.onEntrySelect = t => {
						this.props.onSelect(this.state.userSuggestions[t])
					}, this.onEntryFocus = t => {
						this.setState({
							selectedSuggestionIndex: t
						})
					}, this.moveUp = () => {
						if (this.state.userSuggestions.length > 1) {
							let t = this.state.selectedSuggestionIndex - 1;
							return t = t < 0 ? this.state.userSuggestions.length - 1 : t, this.setState({
								selectedSuggestionIndex: t
							}), !0
						}
						return !1
					}, this.moveDown = () => {
						if (this.state.userSuggestions.length > 1) {
							const t = (this.state.selectedSuggestionIndex + 1) % this.state.userSuggestions.length;
							return this.setState({
								selectedSuggestionIndex: t
							}), !0
						}
						return !1
					}, this.selectCurrent = () => {
						if (this.state.userSuggestions.length) {
							const t = this.state.userSuggestions[this.state.selectedSuggestionIndex];
							return t && this.props.onSelect(t), !0
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
				componentWillReceiveProps(t) {
					t.substring !== this.props.substring && this.setState({
						selectedSuggestionIndex: 0,
						userSuggestions: this.filterUsers(t.substring)
					})
				}
				filterUsers(t) {
					const {
						commentAuthors: e
					} = this.props;
					return e.filter(e => e.toLowerCase().startsWith(t.toLowerCase()))
				}
				render() {
					return this.state.userSuggestions.length ? p.a.createElement("div", {
						className: Object(b.a)(Ws.a.list, this.props.className)
					}, this.state.userSuggestions.map((t, e) => p.a.createElement(Gs, {
						key: e,
						entry: e,
						onEntryFocus: this.onEntryFocus,
						onEntrySelect: this.onEntrySelect,
						isFocused: e === this.state.selectedSuggestionIndex
					}, Object(Vs.d)(t)))) : null
				}
			}
			var ei = Object(h.b)($s)(ti),
				ni = n("./node_modules/lodash/dropRightWhile.js"),
				oi = n.n(ni),
				ri = n("./node_modules/lodash/flatMap.js"),
				si = n.n(ri),
				ii = n("./node_modules/lodash/reduceRight.js"),
				ci = n.n(ii),
				ai = n("./node_modules/lodash/trimEnd.js"),
				li = n.n(ai),
				di = n("./node_modules/lodash/trimStart.js"),
				ui = n.n(di),
				pi = n("./src/lib/forEachGroup/index.ts");

			function hi(t, e) {
				const n = [],
					o = t.withMutations(t => {
						for (; t.size && e(t.first());) n.push(t.first()), t.shift()
					});
				return {
					popped: n,
					stack: o
				}
			}
			var mi = n("./src/lib/unicodeUtils/index.ts"),
				gi = n("./src/reddit/helpers/richTextJson/index.ts"),
				fi = n("./src/reddit/models/RichTextJson/nodeMakers.ts");
			const bi = {
				BOLD: Wn.j.bold,
				ITALIC: Wn.j.italic,
				MONOSPACE: Wn.j.monospace,
				STRIKETHROUGH: Wn.j.strikethrough,
				SUBSCRIPT: Wn.j.subscript,
				SUPERSCRIPT: Wn.j.superscript,
				UNDERLINE: Wn.j.underline
			};
			var yi = (t, e) => Ei(t.getBlockMap(), t, e);
			const Ei = (t, e, n) => {
					const o = [];
					let r = t.toStack();
					for (; r.size;) {
						const t = r.first(),
							s = t.getType();
						switch (r = r.shift(), s) {
							case R.g.H1:
							case R.g.H2:
							case R.g.H3:
							case R.g.H4:
							case R.g.H5:
							case R.g.H6:
								o.push(xi(t, e));
								break;
							case R.e: {
								const {
									popped: n,
									stack: s
								} = hi(r, t => t.getType() === R.e);
								r = s, o.push(ji([t, ...n], e));
								break
							}
							case R.f: {
								const {
									popped: e,
									stack: n
								} = hi(r, t => t.getType() === R.f);
								r = n, o.push(vi([t, ...e]));
								break
							}
							case R.i.ORDERED:
							case R.i.UNORDERED: {
								const {
									popped: n,
									stack: i
								} = hi(r, t => t.getType() === s);
								r = i, o.push(_i([t, ...n], e));
								break
							}
							case R.l: {
								const {
									popped: n,
									stack: s
								} = hi(r, t => Object(R.v)(t.getType()));
								r = s, o.push(Ri([t, ...n], e));
								break
							}
							case R.a: {
								let e = r.first();
								e && Object(R.u)(e.getType()) ? r = r.shift() : e = void 0, o.push(Bi(t, e, n));
								break
							}
							case R.n:
							default:
								o.push(Oi(t, e))
						}
					}
					return o
				},
				Si = t => t.reduce((t, e) => e === R.k.UNDERLINE || e === R.k.SUBSCRIPT ? t : t | (bi[e] || 0) | 0, 0),
				Ci = (t, e) => {
					const n = [],
						o = Object(mi.b)(t);
					return Object(pi.a)(e, {
						keyFn: t => t.getStyle()
					}, (e, r, s, i) => {
						if (r.isEmpty()) return;
						const c = t.slice(s, i),
							a = s + (c.length - ui()(c).length),
							l = i - (c.length - li()(c).length),
							d = l - a,
							u = o[a],
							p = o[l] - u;
						d > 0 && n.push([Si(r), u, p])
					}), n.length ? n : null
				},
				ki = (t, e) => {
					const n = t.getText(),
						o = t.getCharacterList(),
						r = [],
						s = R.d.includes(t.getType()),
						i = R.c.includes(t.getType());
					let c = 0;
					return Object(pi.a)(o, {
						keyFn: (t, o) => {
							const r = t.getEntity();
							return s && t.getStyle().contains(R.k.SPOILER) ? "spoiler" : Object(F.b)(r, e) ? `link-${t.getEntity()}` : "\n" === n[o] ? i ? "linebreak" : "skip" : r && e.getEntity(r).getType() === F.a.EMOTE ? `emote-${c++}` : "text"
						}
					}, (t, s, i, c) => {
						const a = n.slice(i, c),
							l = o.slice(i, c).toList();
						if ("text" === s) {
							const t = Ci(a, l);
							r.push(Object(fi.s)(a, t))
						} else if ("spoiler" === s) r.push(Object(fi.n)(a));
						else if (s.startsWith("link-")) {
							const n = e.getEntity(t.getEntity());
							r.push(((t, e, n) => {
								const o = t.getType(),
									r = [F.a.USER_LINK, F.a.USER_MENTION],
									{
										url: s
									} = t.getData(),
									i = e.startsWith("/");
								if (o === F.a.SUBREDDIT_LINK) {
									const t = e.replace(S.e, "");
									return Object(fi.o)(t, i)
								}
								if (r.includes(o)) {
									const t = e.replace(S.a, "");
									return Object(fi.t)(t, i)
								}
								const c = Ci(e, n);
								return Object(fi.i)(e, s, c)
							})(n, a, l))
						} else if ("linebreak" === s) r.push(Object(fi.h)());
						else if (s.startsWith("emote-")) {
							const n = e.getEntity(t.getEntity()).getData();
							r.push(Object(fi.e)(n.fullId, n.imageType))
						}
					}), r
				},
				Oi = (t, e) => Object(fi.l)(ki(t, e)),
				Ti = t => "text" === t.e ? Object(fi.m)(t.t) : "link" === t.e ? Object(fi.i)(t.t, t.u, null) : t.e === Wn.x ? t.c.map(Ti) : t.e === Wn.n ? Object(fi.m)("") : t,
				xi = (t, e) => Object(fi.f)(R.m[t.getType()], ((t, e) => ci()(si()(ki(t, e), Ti), ([t, ...e], n) => {
					if (!t) return [n];
					const o = e.length ? e : [];
					return t && "raw" === n.e && "raw" === t.e ? [Object(fi.m)(n.t + t.t), ...o] : [n, t, ...o]
				}, []))(t, e)),
				ji = (t, e) => Object(fi.c)(oi()(t.map(t => ((t, e) => t.getText().trim().length ? Oi(t, e) : fi.a)(t, e)), t => t === fi.a)),
				vi = t => Object(fi.d)(t.map(t => Object(fi.m)(t.getText()))),
				_i = (t, e) => {
					if (!t.length) return Object(fi.k)([], !1);
					const n = t[0].getDepth();
					let o = null;
					const r = [];
					let s = [];
					const i = () => null !== o || s.length,
						c = () => {
							const t = [];
							null !== o && (t.push(o), o = null), s.length && (t.push(_i(s, e)), s = []), r.push(Object(fi.j)(t))
						};
					return t.forEach(t => {
						t.getDepth() > n ? s.push(t) : (i() && c(), o = Object(fi.l)(ki(t, e)))
					}), i() && c(), Object(fi.k)(r, t[0].getType() === R.i.ORDERED)
				},
				Ri = (t, e) => {
					const n = [...t].sort(Q.b),
						o = n[0],
						{
							colCount: r
						} = Object(Q.g)(o),
						s = W()(n, r),
						i = s[0].map(t => {
							const {
								alignment: n
							} = Object(Q.g)(t);
							return Object(fi.q)(ki(t, e), n)
						}),
						c = s.slice(1).map(t => t.map(t => Object(fi.p)(ki(t, e))));
					return Object(fi.r)(i, c)
				},
				Bi = (t, e, n) => {
					const o = Object(D.h)(t);
					if (!o) throw new Error("Invalid atomic block!");
					const {
						uploadInfo: r,
						mediaAsset: s,
						makeGif: i
					} = o, c = e ? e.getText() : "";
					if (r && n) {
						const t = n[r.uploadKey],
							e = t && t.metadata.mimetype || "",
							{
								assetId: s,
								thumbnailAssetId: a
							} = Object(D.f)(o, n);
						return Object(Ht.j)(e) ? Object(fi.b)(s, c) : Object(Ht.k)(e) ? Object(fi.g)(s, c) : Object(fi.u)(s, c, a, i)
					} {
						const {
							assetId: t,
							type: e
						} = s;
						let n;
						switch (e) {
							case D.a.AnimatedImage:
								n = Object(fi.b)(t, c);
								break;
							case D.a.Image:
								n = Object(fi.g)(t, c);
								break;
							case D.a.Video:
								n = Object(fi.u)(t, c);
								break;
							default:
								throw new Error("Invalid media type")
						}
						return Object(gi.g)(t) ? Object(fi.l)([n]) : n
					}
				};
			var Ii, wi = n("./src/reddit/constants/componentSizes.ts"),
				Ai = n("./src/reddit/constants/elementIds.ts");
			! function(t) {
				t.Up = "up", t.Down = "down"
			}(Ii || (Ii = {}));
			var Ki = t => {
					const e = window.getSelection().focusNode;
					if (!e || !e.parentElement) return;
					const n = document.getElementById(Ai.d),
						o = n || document.documentElement;
					if (!o) return;
					const r = window.innerHeight,
						{
							bottom: s,
							top: i
						} = e.parentElement.getBoundingClientRect(),
						c = n ? 0 : wi.f + wi.p;
					t === Ii.Up && i < c ? o.scrollBy(0, i - c) : t === Ii.Down && s > r && o.scrollBy(0, s - r)
				},
				Mi = n("./src/reddit/models/Product/index.ts"),
				Li = (t, e, n) => {
					const o = {
						url: n
					};
					return t.createEntity(e, "MUTABLE", o)
				},
				Di = n("./node_modules/lodash/maxBy.js"),
				Ni = n.n(Di);
			const Fi = (t, e) => {
				if (!e) return (t => {
					const e = t.id;
					switch (t.e) {
						case Wn.m:
							return {
								assetId: e, type: D.a.Image
							};
						case Wn.a:
							return {
								assetId: e, type: D.a.AnimatedImage
							};
						case Wn.D:
							return {
								assetId: e, type: D.a.Video
							}
					}
				})(t);
				const n = e.id;
				switch (e.e) {
					case Wn.s: {
						const {
							s: t
						} = e;
						return {
							assetId: n,
							type: D.a.Image,
							imageUrl: t.u,
							width: t.x,
							height: t.y
						}
					}
					case Wn.r: {
						const {
							s: t
						} = e;
						return {
							assetId: n,
							type: D.a.AnimatedImage,
							imageUrl: t.gif,
							posterUrl: t.p,
							dashUrl: t.mp4,
							width: t.x,
							height: t.y
						}
					}
					case Wn.t: {
						const {
							isGif: t,
							dashUrl: o,
							hlsUrl: r,
							p: s,
							x: i,
							y: c
						} = e;
						let a;
						if (s) {
							a = Ni()(s, t => t.x).u
						}
						return {
							assetId: n,
							type: D.a.Video,
							isGif: t,
							dashUrl: o,
							hlsUrl: r,
							posterUrl: a,
							width: i,
							height: c
						}
					}
				}
			};

			function Pi(t, e, n) {
				const r = t.id,
					s = t.c,
					i = Wn.E(e, r),
					c = Fi(t, i),
					a = [new o.ContentBlock({
						key: Object(o.genKey)(),
						type: R.a,
						data: Object(P.Map)({
							mediaAsset: c
						})
					})];
				if (n) {
					const t = Object(N.h)(Object(o.genKey)(), s).merge({
						type: R.j
					});
					a.push(t)
				}
				return a
			}
			const Ui = Object.keys(bi),
				Hi = (t, e, n) => {
					switch (e.e) {
						case Wn.u:
							return Yi(t, e.c, R.b.UNSTYLED, n);
						case Wn.k:
							const o = R.h[e.l];
							return Yi(t, e.c || [], o, n);
						case Wn.p:
							return qi(t, e, n);
						case Wn.b:
							return Wi(t, e, n);
						case Wn.c:
							return void e.c.forEach(e => Yi(t, [e], R.b.CODE_BLOCK, n));
						case Wn.z:
							return zi(t, e, n);
						case Wn.m:
						case Wn.a:
						case Wn.D:
							return void t.blocks.push(...Pi(e, n.mediaMetadataMap, Object(D.q)(n.editorType)))
					}
				},
				Wi = (t, e, n) => {
					e && e.c && e.c.length && e.c.forEach(e => e.e === Wn.u ? Yi(t, e.c, R.b.BLOCK_QUOTE, n) : Hi(t, e, n))
				},
				zi = (t, e, n) => {
					const {
						h: o,
						c: r
					} = e, s = o.length;
					[o, ...r].forEach((e, r) => e.forEach((e, i) => {
						const {
							c = []
						} = e, {
							a
						} = o[i], l = {
							alignment: a,
							colCount: s,
							colIndex: i,
							rowIndex: r
						};
						Yi(t, c, R.b.TABLE_CELL, n, l)
					}))
				},
				qi = (t, e, n, o = 0) => {
					const r = e.o ? R.b.ORDERED_LIST : R.b.UNORDERED_LIST;
					e.c.forEach(e => {
						const s = e.c;
						if (!s || !s.length) return;
						const [i, c] = s, a = i.e === Wn.u ? i.c : [];
						Yi(t, a, r, n, void 0, o), c && c.e === Wn.p && qi(t, c, n, o + 1)
					})
				},
				Gi = {
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
				Yi = (t, e, n, r, s = {}, i, c = !1) => {
					const a = t.content;
					if (1 === e.length && (e[0].e === Wn.m || e[0].e === Wn.a)) {
						const n = e[0];
						if (Object(gi.g)(n.id)) return void t.blocks.push(...Pi(n, r.mediaMetadataMap, Object(D.q)(r.editorType)))
					}
					const {
						charList: l,
						text: d,
						updatedContent: u
					} = Qi(e, a, r), p = new o.ContentBlock({
						key: Object(o.genKey)(),
						characterList: Object(P.List)(l),
						data: Object(P.fromJS)(s),
						depth: i,
						text: d,
						type: n
					});
					t.content = u || a, c ? t.blocks.unshift(p) : t.blocks.push(p)
				},
				Qi = (t, e, n) => {
					let o = e,
						r = "";
					const s = [];
					if (t.forEach(t => {
							const e = Ji(t, o, n);
							o = e.updatedContent || o, r += e.text, s.push(...e.charList)
						}), r.length !== s.length) throw new Error("Characters length mismatch!");
					return {
						charList: s,
						text: r,
						updatedContent: o !== e ? o : void 0
					}
				},
				Ji = (t, e, n) => {
					switch (t.e) {
						case Wn.A: {
							const {
								t: e,
								f: n
							} = t;
							return {
								charList: Xi(e, n),
								text: e
							}
						}
						case Wn.x: {
							const {
								c: r
							} = t, s = Qi(r, e, n);
							return s.charList = s.charList.map(t => (t => o.CharacterMetadata.create({
								style: t.getStyle().add(R.k.SPOILER),
								entity: t.getEntity()
							}))(t)), s
						}
						case Wn.v:
						case Wn.g:
						case Wn.w: {
							const {
								t: e
							} = t;
							return {
								charList: Xi(e),
								text: e
							}
						}
						case Wn.y:
						case Wn.B:
						case Wn.C: {
							const [n, o] = Gi[t.e], r = (t.l ? "/" : "") + n + t.t, s = o + t.t, i = Li(e, Vi[t.e], s), c = i.getLastCreatedEntityKey();
							return {
								charList: Xi(r, void 0, c),
								text: r,
								updatedContent: i
							}
						}
						case Wn.o: {
							const {
								t: n,
								u: o,
								f: r
							} = t, s = Li(e, F.a.LINK, o), i = s.getLastCreatedEntityKey();
							return {
								charList: Xi(n, r, i),
								text: n,
								updatedContent: s
							}
						}
						case Wn.m:
						case Wn.a:
							const {
								id: r
							} = t;
							if (r.startsWith("emote|")) {
								const t = Object(Mi.b)(r),
									o = n.activeEmotes && n.activeEmotes[t];
								if (o) {
									const t = Object(Oo.c)(e, o),
										n = t.getLastCreatedEntityKey(),
										r = Oo.a;
									return {
										charList: Xi(r, void 0, n),
										text: r,
										updatedContent: t
									}
								}
								const s = `:${t}:`;
								return {
									charList: Xi(s),
									text: s
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
				Xi = (t, e, n = null) => {
					const r = o.CharacterMetadata.create({
							entity: n
						}),
						s = Array(t.length).fill(r),
						i = Object(mi.a)(t);
					return e && e.forEach(t => {
						const [e, r, c] = t, a = (t => {
							const e = Ui.filter(e => !!(bi[e] & t));
							return Object(P.OrderedSet)(e)
						})(e), l = r + c, d = o.CharacterMetadata.create({
							entity: n,
							style: a
						});
						s.fill(d, i[r], i[l])
					}), s
				},
				Zi = (t, e) => {
					t.blocks.length && (t.blocks[0].getType() === R.b.TABLE_CELL && Yi(t, [], R.b.UNSTYLED, e, void 0, void 0, !0), t.blocks[t.blocks.length - 1].getType() === R.b.TABLE_CELL && Yi(t, [], R.b.UNSTYLED, e))
				};
			var $i = (t, e, n, r) => {
					const s = "string" == typeof t ? JSON.parse(t) : t;
					if (!s || !s.document || !s.document.length) return null;
					const i = {
							editorType: e,
							mediaMetadataMap: n,
							activeEmotes: r ? r.reduce((t, e) => ({
								...t,
								...e.emotes
							}), {}) : void 0
						},
						c = {
							blocks: [],
							content: o.ContentState.createFromText("")
						};
					s.document.forEach(t => {
						Hi(c, t, i)
					}), 0 === c.blocks.length && Yi(c, [], R.b.UNSTYLED, i), Zi(c, i);
					const a = o.BlockMapBuilder.createFromArray(c.blocks),
						l = o.SelectionState.createEmpty(a.first().getKey());
					return c.content.merge({
						blockMap: a,
						selectionBefore: l,
						selectionAfter: l
					})
				},
				tc = n("./src/reddit/components/TypingIndicators/constants.ts"),
				ec = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				nc = n("./src/reddit/constants/elementClassNames.ts"),
				oc = n("./src/reddit/constants/keycodes.ts"),
				rc = n("./src/reddit/helpers/correlationIdTracker.ts"),
				sc = n("./src/reddit/icons/svgs/Send/index.tsx"),
				ic = n("./src/reddit/selectors/economics.ts"),
				cc = n("./src/reddit/components/RichTextEditor/index.m.less"),
				ac = n.n(cc);

			function lc() {
				return (lc = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			Object(ks.b)({
				draftToRTFJson: yi,
				getMediaCount: D.g,
				getPendingThumbnailUploads: D.i,
				isAllMediaUploaded: D.m
			});
			const dc = "handled",
				uc = "not-handled",
				pc = /^\s*$/,
				hc = 20,
				mc = E.a.wrapped(dr.a, "FocusableContent", ac.a),
				gc = E.a.div("Container", ac.a),
				fc = E.a.wrapped(ec.a, "CurrentUserIcon", ac.a),
				bc = t => `${x.b}-${t}`,
				yc = Object(h.b)(() => {
					const t = (() => Object(m.a)(t => t.uploads, (t, e) => e.rteState.editorKey, (t, e) => a()(t, t => t.key.startsWith(bc(e)))))();
					return Object(m.c)({
						editorUploads: t,
						emotesSpecialMembershipEnabled: j.d.spEmotes,
						giphySpecialMembershipEnabled: j.d.spGiphy,
						activeEmotes: (t, e) => {
							var n;
							return Object(ic.b)(t, {
								subredditId: null === (n = e.destSubreddit) || void 0 === n ? void 0 : n.id
							})
						},
						shouldShowCommentGifsTooltip: (t, e) => {
							var n;
							return Object(_o.c)(t, {
								subredditId: null === (n = e.destSubreddit) || void 0 === n ? void 0 : n.id
							})
						}
					})
				}, t => ({
					onFetchEditorProducts: e => t(Object(T.e)(e)),
					onTrackMediaDrop: e => t((t, n) => v.p(n(), e)),
					retryUpload: e => t(x.c(e)),
					startUploads: (e, n, o) => t(x.e(e, n, bc(o)))
				}));
			class Ec extends u.Component {
				constructor(t) {
					super(t), this.blockRenderMap = o.DefaultDraftBlockRenderMap.merge(mr, yr, Kn, bs, Cs, Fs, an), this.editorHeight = null, this.editorRef = null, this.editorRootStyleMutationObserver = null, this.linksControllerApi = null, this.suggestionDropdownApi = null, this.tableToolbarControllerApi = null, this.emotesTooltipApi = null, this.gifTooltipApi = null, this.updateSuggestionDropdownPosition = null, this.isJustAutocompleteSelected = !1, this.isJustLinkified = !1, this.isMouseDown = !1, this.isJustConvertedToList = !1, this.needSyncScroll = null, this.transforms = {
						[B.BREAK_HEADER_ENTITY]: yo.b,
						[B.INSERT_LINE_BREAK]: yo.e,
						[B.REDUCE_LIST_INDENT]: yo.f,
						[B.RESET_CURRENT_AND_PREVIOUS_BLOCKS]: yo.g,
						[B.REMOVE_EXTRA_LIST_ITEM]: yo.h,
						[K.d]: t => Xo(t, this.props.editorType),
						[K.b]: t => Jo(t, this.props.editorType),
						[K.f]: yo.d,
						[K.c]: t => Object(yo.c)(R.k.BOLD, t),
						[K.e]: t => Object(yo.c)(R.k.ITALIC, t),
						[K.g]: t => Object(yo.c)(R.k.UNDERLINE, t)
					}, this.realtimeGQLVariables = void 0, this.setContainerRef = t => {
						const {
							domRef: e
						} = this.props;
						e && e(t), this.setState({
							containerRef: t
						})
					}, this.setFocusableContentRef = t => this.setState({
						focusableContentRef: t
					}), this.setUserStoppedTyping = i()(() => this.setState({
						isUserTyping: !1
					}), tc.g), this.rteStateChanged = (t, e) => {
						const n = {
							...this.props.rteState,
							isBound: !0,
							editorState: t
						};
						this.props.onChange(n, e), this.props.isTypingIndicatorsWriteTestEnabled && e && (this.state.isUserTyping || this.setState({
							isUserTyping: !0
						}), this.setUserStoppedTyping())
					}, this.hideTooltips = () => {
						this.emotesTooltipApi && this.emotesTooltipApi.closeTooltip(), this.gifTooltipApi && this.gifTooltipApi.closeTooltip(), this.tableToolbarControllerApi && this.tableToolbarControllerApi.hideActionButton(), this.linksControllerApi && this.linksControllerApi.hidePopup(), this.suppressAutocompleteForFocusedLink()
					}, this.onEditorStyleChanged = () => {
						if (!this.editorRef) return;
						const t = this.editorRef.refs.editor,
							e = t.style.height ? Number.parseInt(t.style.height) : null;
						this.editorHeight !== e && (this.hideTooltips(), this.editorHeight = e, e && this.props.onEditorResize && this.props.onEditorResize(e))
					}, this.insertValidatedMedia = () => {
						const {
							editorUploads: t
						} = this.props, {
							editorState: e,
							mediaToInsert: n
						} = this.state;
						if (!n) return;
						const {
							files: o,
							blockKey: r,
							insertionMode: s
						} = n, i = o.map(e => t.find(t => t.file === e)).filter(Boolean);
						this.setState({
							mediaToInsert: null
						});
						const c = i.filter(t => !!t.metadata.mimetype);
						c.length && this.onChange(Object(D.l)(e, c, r, s))
					}, this.focus = () => this.editorRef && this.editorRef.focus(), this.blur = () => this.editorRef && this.editorRef.blur(), this.isFocused = () => this.state.editorState.getSelection().getHasFocus(), this.isEmpty = () => !this.state.editorState.getCurrentContent().hasText(), this.setEditorRef = t => this.editorRef = t, this.setSuggestionDropdownApi = t => this.suggestionDropdownApi = t, this.setLinksControllerApi = t => this.linksControllerApi = t, this.setTableToolbarControllerApi = t => this.tableToolbarControllerApi = t, this.setEmotesTooltipApi = t => this.emotesTooltipApi = t, this.setGifTooltipApi = t => this.gifTooltipApi = t, this.setSuggestionDropdownPositionUpdater = t => this.updateSuggestionDropdownPosition = t, this.getEditorState = () => this.state.editorState, this.setEditorState = (t, e) => {
						const n = this.state.editorState.getCurrentContent() !== t.getCurrentContent();
						n && this.props.readOnly || (this.setState({
							editorState: t
						}, e), this.rteStateChanged(t, n))
					}, this.toolbarSetState = t => {
						const e = t.getInlineStyleOverride();
						let n = t;
						n.getSelection().getHasFocus() || (n = o.EditorState.forceSelection(n, n.getSelection()), e && (n = o.EditorState.setInlineStyleOverride(n, e))), this.onChange(n)
					}, this.onChange = (t, e) => {
						let n = t;
						n = kn(n, this.state.editorState), n = Dt(n, this.props.editorType), this.emotesTooltipApi && (n = Object(Oo.d)(n, this.state.editorState)), n = zo(n, this.state.editorState), n = Object(nr.d)(n, this.state.editorState), this.setEditorState(n, e);
						let {
							suppressAutocompleteForLink: o
						} = this.state;
						if (o) {
							const e = Object(Mo.b)(t);
							e && e.entityKey === o || (o = null)
						}
						this.setState({
							suppressAutocompleteForLink: o
						}), this.isJustAutocompleteSelected = !1, this.isJustLinkified = !1, this.isMouseDown = !1, this.isJustConvertedToList = !1
					}, this.onFocus = () => {
						const {
							onFocus: t
						} = this.props;
						this.emotesTooltipApi && this.emotesTooltipApi.closeTooltip(), this.gifTooltipApi && this.gifTooltipApi.closeTooltip(), t && (Object(rc.e)(rc.a.CommentComposer, !1), t())
					}, this.handleBeforeInput = t => {
						const {
							editorState: e
						} = this.state;
						if (this.isMouseDown) return dc;
						if (Lt(e, t)) return dc;
						let n = function(t, e) {
							const n = t.getSelection(),
								r = n.getFocusOffset();
							if (!n.isCollapsed() || 0 === r) return;
							const s = n.getFocusKey(),
								i = t.getCurrentContent(),
								c = i.getBlockForKey(s),
								a = c.getEntityAt(r - 1),
								l = c.getEntityAt(r);
							if (!(a && (!l || l !== a))) return;
							const d = i.getEntity(a),
								u = Ko.has(d.getType());
							if ("MUTABLE" === d.getMutability() && u) {
								const r = o.Modifier.insertText(i, n, e, t.getCurrentInlineStyle());
								return o.EditorState.push(t, r, "insert-characters")
							}
						}(e, t) || e;
						return (n = yn(n, t) || n) !== e ? (this.onChange(n), dc) : uc
					}, this.keyBindingFN = t => {
						const {
							editorState: e
						} = this.state, {
							submitOnEnter: n
						} = this.props, r = e.getSelection();
						if (t.metaKey && t.keyCode === oc.a.K) return B.OPEN_LINK_TOOLTIP;
						if (t.keyCode === oc.a.Space) {
							if (tr(e)) return B.CONVERT_TO_LIST_ON_SPACE;
							if (Object(Mo.d)(e)) return B.LINKIFY_ON_SPACE
						} else if (t.keyCode === oc.a.Enter) {
							if (t.ctrlKey || t.metaKey || n && !t.shiftKey) return B.SUBMIT;
							if (t.shiftKey && Zo(e)) return B.INSERT_LINE_BREAK; {
								const t = this.enterKeyBinding(e);
								if (t) return t
							}
						} else if (t.keyCode === oc.a.Backspace) {
							if (this.isJustLinkified || this.isJustConvertedToList) return K.h;
							if (r.isCollapsed()) {
								const t = e.getCurrentContent(),
									n = r.getEndKey(),
									o = r.getStartOffset(),
									s = t.getBlockForKey(n),
									i = s.getType();
								if ((Object(R.s)(i) || Object(R.q)(i) || Object(R.p)(i)) && 0 === o && s.getLength() > 0) {
									const e = t.getBlockBefore(n);
									if (!e || e.getType() !== i) return B.MAKE_PLAIN_BLOCK
								}
							}
						}
						return Object(o.getDefaultKeyBinding)(t)
					}, this.handleKeyCommand = t => {
						const {
							editorState: e
						} = this.state;
						let n = t,
							r = null;
						const s = t => {
							let e = t;
							if (r) {
								const {
									selection: t,
									url: n
								} = r;
								e = Object(Mo.f)(e, t, n)
							}
							return this.onChange(e), this.isJustLinkified = !!r, dc
						};
						if (n === B.SUBMIT) this.props.onSubmit();
						else {
							if (n === B.CONVERT_TO_LIST_ON_SPACE) {
								const t = s(er(e));
								return this.isJustConvertedToList = !0, t
							}
							if (n === B.LINKIFY_ON_SPACE) return r = Object(Mo.d)(e), s(Object(yo.a)(e));
							if (n === B.LINKIFY_ON_ENTER && (r = Object(Mo.d)(e), !(n = this.enterKeyBinding(e, !1)))) return s(Object(yo.d)(e))
						}
						if (n === B.OPEN_LINK_TOOLTIP) return this.onToolbarLinkButtonClick(), dc;
						if (n === B.MAKE_PLAIN_BLOCK) {
							return s(Object(yo.i)(R.n, e))
						}
						if (n === B.EXEC_TABLE_ON_ENTER_HANDLER) return s(this.tableOnEnterHandler.handle(e));
						const i = this.transforms[n];
						if (i) {
							const t = i(e);
							if (t) return s(t)
						}
						const c = o.RichUtils.handleKeyCommand(e, n);
						return c ? s(c) : uc
					}, this.handleOnTab = t => {
						if (this.emotesTooltipApi && this.emotesTooltipApi.handleTabInEditor() || this.suggestionDropdownApi && this.suggestionDropdownApi.selectCurrent()) return void t.preventDefault();
						const {
							editorState: e
						} = this.state;
						let n = mn(t, e);
						if (n = n || Qo(t, e)) return void this.onChange(n);
						const r = o.RichUtils.onTab(t, e, 2);
						this.onChange(r)
					}, this.handleOnUpArrow = t => {
						if (this.emotesTooltipApi && this.emotesTooltipApi.handleUpArrowInEditor() || this.suggestionDropdownApi && this.suggestionDropdownApi.moveUp()) return void t.preventDefault();
						const e = gn(t, this.state.editorState) || Kt(t, this.state.editorState);
						e && this.onChange(e), this.needSyncScroll = Ii.Up
					}, this.handleOnDownArrow = t => {
						if (this.suggestionDropdownApi && this.suggestionDropdownApi.moveDown()) return void t.preventDefault();
						const e = fn(t, this.state.editorState) || Mt(t, this.state.editorState);
						e && this.onChange(e), this.needSyncScroll = Ii.Down
					}, this.handleReturn = t => {
						const e = wt(this.state.editorState);
						return e ? (this.onChange(e), t.preventDefault(), dc) : this.suggestionDropdownApi && this.suggestionDropdownApi.selectCurrent() ? (t.preventDefault(), dc) : uc
					}, this.suppressAutocompleteForFocusedLink = () => {
						const t = Object(Mo.b)(this.state.editorState);
						t && this.state.suppressAutocompleteForLink !== t.entityKey && this.setState({
							suppressAutocompleteForLink: t.entityKey
						})
					}, this.handleEscape = t => {
						this.emotesTooltipApi && this.emotesTooltipApi.handleEscapeKeyInEditor(), this.suppressAutocompleteForFocusedLink()
					}, this.handleOnCopy = t => {
						this.editorRef && Ot(this.state.editorState, this.editorRef, t)
					}, this.handleOnCut = t => {
						const {
							editorState: e
						} = this.state;
						if (!this.editorRef) return;
						if (!Ot(e, this.editorRef, t)) return;
						const n = lt(e) || It(e) || Object(D.e)(e);
						n && this.onChange(n)
					}, this.handleOnPaste = t => {
						const {
							editorState: e
						} = this.state;
						if (!this.editorRef) return;
						if (this.handleFilesPaste(t, e), t.isPropagationStopped()) return;
						const n = Ur(e, this.editorRef, t, this.props.editorType);
						n && this.onChange(n)
					}, this.handleFilesPaste = (t, e) => {
						if (!this.props.allowMediaUploads) return void t.stopPropagation();
						const n = t.clipboardData.files;
						if (n && n.length) {
							const o = Array.from(n),
								r = e.getSelection().getEndKey();
							this.insertMediaFiles({
								files: o,
								blockKey: r,
								insertionMode: N.a.after,
								filesSource: k.FileSource.Clipboard
							}), t.stopPropagation()
						}
					}, this.handleOnMouseDown = t => {
						this.isMouseDown = !0
					}, this.handleOnMouseUp = t => {
						this.isMouseDown = !1
					}, this.handleDroppedFiles = (t, e) => dc, this.handleDrop = (t, e, n) => dc, this.handleBlur = () => {
						this.props.onBlur && this.props.onBlur()
					}, this.handlePastedText = (t, e) => dc, this.onInternalSuggestionSelected = t => {
						this.onChange(Object(Mo.g)(this.state.editorState, t)), this.isJustAutocompleteSelected = !0
					}, this.onToolbarEmoteButtonClick = t => {
						this.gifTooltipApi && this.gifTooltipApi.closeTooltip(), this.emotesTooltipApi && this.emotesTooltipApi.toggleTooltip(t)
					}, this.onToolbarGifButtonClick = t => {
						this.emotesTooltipApi && this.emotesTooltipApi.closeTooltip(), this.gifTooltipApi && this.gifTooltipApi.toggleTooltip(t)
					}, this.onToolbarLinkButtonClick = () => {
						if (!this.linksControllerApi) return;
						const {
							editorState: t
						} = this.state;
						this.linksControllerApi.editLinkInSelection(t.getSelection()) || Object(C.b)(void 0, "Current selection cannot be edited by link editor!")
					}, this.handleSwitchToMarkdownMode = () => {
						const {
							editorState: t
						} = this.state, {
							onSwitchEditorMode: e
						} = this.props, n = ks.a.toRichTextJSON({
							...this.props.rteState,
							isBound: !0,
							editorState: Object(D.c)(t)
						});
						e && e(_.i.MARKDOWN, n), this.state.confirmModalOpen && this.toggleConfirmModal()
					}, this.onToolbarMarkdownSwitchClick = () => {
						const {
							editorState: t
						} = this.state;
						t && qo(t) ? this.setState({
							confirmModalOpen: !0
						}) : this.handleSwitchToMarkdownMode()
					}, this.toggleConfirmModal = () => {
						this.setState({
							confirmModalOpen: !this.state.confirmModalOpen
						})
					}, this.insertMediaFiles = async t => {
						this.setState({
							mediaToInsert: t
						});
						const {
							files: e,
							filesSource: n
						} = t, o = e.slice(0, hc);
						await this.props.startUploads(o, n, this.props.rteState.editorKey), this.insertValidatedMedia()
					}, this.onRetryUpload = t => {
						this.props.retryUpload(t)
					}, this.onFilesSelect = t => {
						const {
							editorState: e
						} = this.state, n = e.getSelection().getEndKey();
						this.insertMediaFiles({
							files: t,
							blockKey: n,
							insertionMode: N.a.after,
							filesSource: k.FileSource.FileSelector
						})
					}, this.onFilesDrop = (t, e, n) => {
						this.props.onTrackMediaDrop(t), this.insertMediaFiles({
							files: t,
							blockKey: e,
							insertionMode: n,
							filesSource: k.FileSource.DragAndDrop
						})
					}, this.onBlockMove = (t, e, n) => {
						const {
							editorState: o
						} = this.state, r = Object(D.o)(o, t, e, n);
						r && this.onChange(r)
					}, this.getAtomicBlocksRenderConfig = () => ({
						component: on,
						props: {
							getEditorState: this.getEditorState,
							onChange: this.onChange,
							onRetryUpload: this.onRetryUpload,
							rteFocusableContentRef: this.state.focusableContentRef,
							editorType: this.props.editorType
						}
					}), this.blockRendererFn = t => {
						const e = t.getType();
						return e === R.a ? this.getAtomicBlocksRenderConfig() : e in As ? As[e] : void 0
					}, this.renderToolbar = t => p.a.createElement(Fe.b, t), this.entityElementRegistry = So(), this.tableOnEnterHandler = new bn;
					const {
						postId: e,
						isTypingIndicatorsWriteTestEnabled: n
					} = t;
					n && (this.realtimeGQLVariables = {
						input: {
							channel: {
								teamOwner: "CONTENT_AND_COMMUNITIES",
								category: "USER_IS_TYPING_ON_POST",
								postID: e
							}
						}
					});
					const {
						activeEmotes: r,
						editorType: s,
						noBorder: c,
						initialHeight: a,
						initialMinHeight: l,
						rteState: d
					} = t;
					let u;
					d.isBound ? u = d.editorState : Object(Wn.G)(d.initialRTJSON) ? u = this.createInitialState(d.editorKey) : (u = o.EditorState.createWithContent($i(d.initialRTJSON, s, d.mediaMetadataMap, r), this.editorDecorators()), u = this.moveSelectionToEnd(u)), this.state = {
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
					return new o.CompositeDecorator([vo(), lr(), Po()])
				}
				moveSelectionToEnd(t) {
					const e = t.getCurrentContent().getBlockMap(),
						n = e.last().getKey(),
						r = e.last().getLength(),
						s = new o.SelectionState({
							anchorKey: n,
							anchorOffset: r,
							focusKey: n,
							focusOffset: r
						});
					return o.EditorState.acceptSelection(t, s)
				}
				createInitialState(t) {
					return o.EditorState.createWithContent(o.ContentState.createFromBlockArray([new o.ContentBlock({
						key: `${t}_initial`
					})]), this.editorDecorators())
				}
				componentDidMount() {
					if (this.props.rteRef && this.props.rteRef(this), y.a.write(Ms), this.rteStateChanged(this.state.editorState, !1), this.editorRef) {
						const t = this.editorRef.refs.editor;
						t.addEventListener("scroll", this.hideTooltips), this.editorRootStyleMutationObserver = new MutationObserver(this.onEditorStyleChanged), this.editorRootStyleMutationObserver.observe(t, {
							attributes: !0,
							attributeFilter: ["style"]
						})
					}
					const {
						destSubreddit: t,
						emotesSpecialMembershipEnabled: e,
						giphySpecialMembershipEnabled: n
					} = this.props;
					t && t.id && (e || n) && this.props.onFetchEditorProducts(t.id)
				}
				componentDidUpdate(t, e) {
					const n = this.getLinkForAutocomplete();
					if (n && this.updateSuggestionDropdownPosition) {
						const t = this.entityElementRegistry.get(n.entityKey);
						if (t) {
							const {
								left: e,
								bottom: n,
								height: o
							} = t.getBoundingClientRect();
							this.updateSuggestionDropdownPosition({
								left: e,
								top: n,
								bottom: n - o
							})
						}
					}
					this.needSyncScroll && (Ki(this.needSyncScroll), this.needSyncScroll = null)
				}
				componentWillUnmount() {
					if (this.props.rteRef && this.props.rteRef(null), this.insertValidatedMedia = () => {}, this.props.isTypingIndicatorsWriteTestEnabled && this.setUserStoppedTyping.cancel(), this.editorRef) {
						this.editorRef.refs.editor.removeEventListener("scroll", this.hideTooltips)
					}
					this.editorRootStyleMutationObserver && (this.editorRootStyleMutationObserver.disconnect(), this.editorRootStyleMutationObserver = null)
				}
				UNSAFE_componentWillReceiveProps(t) {
					t.rteState !== this.props.rteState && t.rteState.isBound && t.rteState.editorState !== this.state.editorState && this.setState({
						editorState: t.rteState.editorState
					})
				}
				shouldComponentUpdate(t, e) {
					if (e !== this.state) return !0;
					if (!(t.rteState.isBound && t.rteState.editorState === this.state.editorState)) return !0;
					return !f()(t, this.props, (t, e, n) => "rteState" === n || void 0)
				}
				enterKeyBinding(t, e = !0) {
					const n = t.getCurrentContent(),
						o = t.getSelection(),
						r = o.getStartKey(),
						s = o.getEndKey(),
						i = o.getEndOffset(),
						c = n.getBlockForKey(r).getType(),
						a = n.getBlockForKey(s),
						l = a.getType(),
						d = i === a.getText().length;
					if (c === R.l || l === R.l) return B.EXEC_TABLE_ON_ENTER_HANDLER;
					if (o.isCollapsed()) {
						if (e && Object(Mo.d)(t)) return B.LINKIFY_ON_ENTER;
						if (Object(R.r)(l) && d) return B.BREAK_HEADER_ENTITY;
						if (Object(R.s)(l)) {
							if (pc.test(a.getText())) return a.getDepth() > 0 ? B.REDUCE_LIST_INDENT : B.REMOVE_EXTRA_LIST_ITEM
						} else if (l === R.e) {
							const t = n.getBlockBefore(s);
							if (t && t.getType() === R.e && pc.test(t.getText()) && pc.test(a.getText())) return B.RESET_CURRENT_AND_PREVIOUS_BLOCKS
						} else if (l === R.f) {
							const t = n.getBlockBefore(s),
								e = n.getBlockAfter(s);
							if (!a.getText() && t && t.getType() === R.f && !t.getText() && (!e || e.getType() !== R.f)) return B.RESET_CURRENT_AND_PREVIOUS_BLOCKS
						}
					}
				}
				getLinkForAutocomplete() {
					const {
						editorState: t,
						suppressAutocompleteForLink: e
					} = this.state;
					if (!this.isJustAutocompleteSelected && t.getSelection().getHasFocus()) {
						const n = Object(Mo.b)(t);
						if (n && n.entityKey !== e) return n
					}
				}
				renderInternalLinkSuggestionDropdown() {
					const {
						isChatPost: t
					} = this.props, e = this.getLinkForAutocomplete();
					return e ? p.a.createElement(Dn.b, {
						aboveParent: t,
						dropdown: !0,
						onSetPositionUpdater: this.setSuggestionDropdownPositionUpdater
					}, e.entityText.startsWith(S.f) && p.a.createElement(Xs, {
						onDropdownApi: this.setSuggestionDropdownApi,
						onSelect: this.onInternalSuggestionSelected,
						substring: e.internalName
					}), S.a.test(e.entityText) && p.a.createElement(ei, {
						onDropdownApi: this.setSuggestionDropdownApi,
						onSelect: this.onInternalSuggestionSelected,
						substring: e.internalName
					})) : null
				}
				render() {
					const {
						className: t,
						userCanUseEmojis: e,
						userCanUseGifs: n,
						allowMediaUploads: s = !1,
						dataTestId: i,
						destSubreddit: c,
						editorType: a,
						focusableContentRTEClassName: l,
						hideToolbar: u,
						rteState: h,
						isExpanded: m,
						isOverlay: g,
						isCommentBoxDesignEnabled: f,
						isTypingIndicatorsExperimentEnabled: y,
						onSubmit: E,
						placeholderText: S,
						shouldShowCommentGifsTooltip: C,
						showSubmitButton: k = !1,
						submitButtonClassName: T,
						toolbarPosition: x = "top",
						renderToolbar: j = this.renderToolbar,
						isTypingIndicatorsWriteTestEnabled: v
					} = this.props, {
						editorKey: _
					} = h, {
						containerRef: R,
						editorState: B,
						mediaToInsert: w,
						confirmModalOpen: K,
						isUserTyping: M
					} = this.state, L = this.props.readOnly || !!w, D = I(B), N = this.isEmpty(), F = j({
						allowMediaUploads: s,
						destSubreddit: c,
						editorKey: _,
						editorState: B,
						isOverlay: !!g,
						onChange: this.toolbarSetState,
						onFilesSelect: this.onFilesSelect,
						trackOnClick: this.props.trackToolbarClick,
						readOnly: L,
						onEmoteButtonClick: this.onToolbarEmoteButtonClick,
						onGifButtonClick: this.onToolbarGifButtonClick,
						onLinkButtonClick: this.onToolbarLinkButtonClick,
						onMarkdownButtonClick: this.onToolbarMarkdownSwitchClick,
						userCanUseEmojis: !!e,
						userCanUseGifs: !!n
					}), P = !u && (!f || m);
					return p.a.createElement(gc, {
						className: t,
						innerRef: this.setContainerRef
					}, v && M && p.a.createElement(O.a, {
						variables: this.realtimeGQLVariables,
						onData: d.a,
						queryKey: "userIsTypingOnPost"
					}), f && p.a.createElement("div", {
						className: ac.a.userIcon
					}, p.a.createElement(fc, null)), p.a.createElement(mc, {
						className: Object(b.a)(l, {
							[ac.a.showSubmitButton]: k,
							[ac.a.mExpanded]: m,
							[ac.a.mRedesign]: f,
							[ac.a.isTypingIndicatorsFocusableContent]: y
						}),
						noBorder: this.props.noBorder,
						isFocused: this.isFocused(),
						ref: this.setFocusableContentRef
					}, P && "top" === x && F, R && p.a.createElement(bo, {
						editorState: B,
						readOnly: L,
						onChange: this.onChange,
						onSetApi: this.setTableToolbarControllerApi,
						rteDomRef: R
					}), p.a.createElement("div", {
						className: Object(b.a)(ac.a.editorWrapper, {
							[ac.a.hasInitialHeight]: !!this.props.initialHeight,
							[ac.a.hasInitialMinHeight]: !!this.props.initialMinHeight,
							[ac.a.noBorder]: !!this.props.noBorder,
							[ac.a.isTypingIndicatorsEditor]: y
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
							__html: `\n                .${nc.b}[${nc.d}="${D}-0-0"]::after {\n                  bottom: 0;\n                  color: var(--newCommunityTheme-actionIcon);\n                  content: '${S}';\n                  cursor: text;\n                  left: 0;\n                  position: absolute;\n                  top: 0;\n                }\n              `
						}
					}), p.a.createElement(_r, {
						allowMediaUploads: s && !L,
						onBlockMove: this.onBlockMove,
						onFilesDrop: this.onFilesDrop,
						editorState: B,
						onChange: this.onChange
					}, p.a.createElement(Co.Provider, {
						value: this.entityElementRegistry
					}, p.a.createElement(o.Editor, {
						readOnly: L,
						ref: this.setEditorRef,
						blockRendererFn: this.blockRendererFn,
						blockRenderMap: this.blockRenderMap,
						editorKey: _,
						editorState: B,
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
						customStyleMap: xs()
					})))), P && "bottom" === x && F, p.a.createElement(hs, {
						containerRef: R,
						editorState: B,
						entityElementRegistry: this.entityElementRegistry,
						onSetApi: this.setLinksControllerApi,
						onChange: this.onChange,
						isTooltipAbove: y,
						preventFocusScroll: y
					}), a === Wt.a.Comment && c && p.a.createElement(Ao, {
						editorState: B,
						onChange: this.onChange,
						onSetApi: this.setEmotesTooltipApi,
						subreddit: c,
						userCanUseEmojis: !!e
					}), (C || n) && c && p.a.createElement(rr, {
						editorState: B,
						onChange: this.onChange,
						onSetApi: this.setGifTooltipApi,
						preventSearchBoxScrollOnMount: y,
						subreddit: c,
						userCanUseGifs: !!n
					}), this.renderInternalLinkSuggestionDropdown(), k && p.a.createElement(oe.e, {
						"aria-label": r.fbt._("submit", null, {
							hk: "12XoZ8"
						}),
						className: Object(b.a)(T, ac.a.insetSubmitButton, {
							[ac.a.emptyContent]: N,
							[ac.a.focusedContent]: this.isFocused()
						}),
						disabled: N,
						onClick: E,
						tabIndex: -1,
						type: "submit"
					}, p.a.createElement(sc.a, null))), K && p.a.createElement(A.a, {
						toggleModal: this.toggleConfirmModal,
						onConfirm: this.handleSwitchToMarkdownMode,
						actionText: r.fbt._("Continue", null, {
							hk: "3aoEeD"
						}),
						cancelActionText: r.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}),
						headerText: r.fbt._("Switch to Markdown", null, {
							hk: "3zGkKa"
						}),
						modalText: r.fbt._("Switching to markdown will remove any images, gifs or videos from your post.", null, {
							hk: "3rlwkB"
						}),
						trackClick: () => {}
					}))
				}
			}
			e.a = yc(Object(Ps.b)(t => p.a.createElement(Ec, lc({
				key: t.rteState.editorKey
			}, t))))
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/ImagePreview/index.m.less": function(t, e, n) {
			t.exports = {
				Img: "_1gJwMe53cjYITkMu0Ve8j-",
				img: "_1gJwMe53cjYITkMu0Ve8j-",
				Component: "_3VYFd7PKhTJ-0i22YsgFPv",
				component: "_3VYFd7PKhTJ-0i22YsgFPv"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/Placeholder/index.m.less": function(t, e, n) {
			t.exports = {
				Message: "_3cyJHYsdZdz4RWdmrzyYx-",
				message: "_3cyJHYsdZdz4RWdmrzyYx-",
				Component: "_3JSUHg1gLhxUj4PB_Pgw8a",
				component: "_3JSUHg1gLhxUj4PB_Pgw8a"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/StatusBar/index.m.less": function(t, e, n) {
			t.exports = {
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
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/VideoPreview/index.m.less": function(t, e, n) {
			t.exports = {
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
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/index.m.less": function(t, e, n) {
			t.exports = {
				statusBar: "_33CSkXq7gXeXCM2zSal9BN",
				container: "_1FMEfWD94pPZ_HdEN_e7Xy",
				isCompact: "_3-T8BPflZuKw_F2VRPDbcX",
				isUploaded: "_3Lj2c902Oeb7yL_jYu9v5L",
				isSelected: "Eaps2a9y_jwhKHth8v14G",
				imagePreview: "_2nlrFrYbO0bIKFeZ3HMbn_",
				placeholder: "_1-LSy7nvfNGWVhRWwwQu6A",
				videoPreview: "_2MumquPHY8gruoy6114twC",
				alignCenter: "_3U9f0TNBM1K2bggm3KMHTk"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/SelectionHook/index.m.less": function(t, e, n) {
			t.exports = {
				HiddenDiv: "_13RYjdyxMuKrkV_EtlOjhg",
				hiddenDiv: "_13RYjdyxMuKrkV_EtlOjhg"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/Toolbar/index.m.less": function(t, e, n) {
			t.exports = {
				container: "_3hDtN0e5U4EpahGe25ye-b",
				alignCenter: "Vh7FGvkGyl5SeyJP4J1GG",
				content: "_3wXzBVn-uBvRcixZwQWkNX",
				FormatterButton: "_6DRydZXlG3Ko7_4xxYUhW",
				formatterButton: "_6DRydZXlG3Ko7_4xxYUhW",
				ToolbarContent: "_3qUkCQkbZvTB6uBQEQQfSZ",
				toolbarContent: "_3qUkCQkbZvTB6uBQEQQfSZ"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/index.m.less": function(t, e, n) {
			t.exports = {
				MediaContainer: "_12ZUhulrgf1BAChnRZHmZt",
				mediaContainer: "_12ZUhulrgf1BAChnRZHmZt",
				Container: "DK9d46mm9FgC8mFWPGlG_",
				container: "DK9d46mm9FgC8mFWPGlG_"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaCaption/index.m.less": function(t, e, n) {
			t.exports = {
				wrapper: "_2eZK2IABgFqGZLMYPxwoNY"
			}
		},
		"./src/reddit/components/RichTextEditor/media/helpers.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return o
			})), n.d(e, "q", (function() {
				return b
			})), n.d(e, "h", (function() {
				return y
			})), n.d(e, "r", (function() {
				return E
			})), n.d(e, "l", (function() {
				return S
			})), n.d(e, "k", (function() {
				return C
			})), n.d(e, "n", (function() {
				return k
			})), n.d(e, "p", (function() {
				return O
			})), n.d(e, "d", (function() {
				return x
			})), n.d(e, "c", (function() {
				return j
			})), n.d(e, "e", (function() {
				return v
			})), n.d(e, "m", (function() {
				return R
			})), n.d(e, "g", (function() {
				return B
			})), n.d(e, "j", (function() {
				return I
			})), n.d(e, "i", (function() {
				return w
			})), n.d(e, "o", (function() {
				return A
			})), n.d(e, "b", (function() {
				return K
			})), n.d(e, "f", (function() {
				return L
			}));
			var o, r = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/immutable/dist/immutable.js"),
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
			! function(t) {
				t[t.Image = 0] = "Image", t[t.AnimatedImage = 1] = "AnimatedImage", t[t.Video = 2] = "Video"
			}(o || (o = {}));
			const b = t => t !== u.a.Comment,
				y = t => {
					if (!Object(f.o)(t.getType())) return;
					const e = t.getData(),
						n = e.get("mediaAsset"),
						o = e.get("uploadInfo");
					if (!n && !o) return;
					const r = e.get("thumbnail");
					return {
						makeGif: e.get("makeGif"),
						thumbnail: r,
						uploadInfo: o,
						mediaAsset: n
					}
				},
				E = (t, e, n) => {
					let o = t.getCurrentContent();
					const i = o.getBlockForKey(e),
						c = y(i),
						a = c && c.uploadInfo;
					if (!a) throw new Error("Block must contain `uploadInfo` data");
					if (n.makeGif === c.makeGif && n.thumbnail === c.thumbnail) return t;
					const l = Object(s.Map)(n),
						d = o.getBlockMap().toKeyedSeq().filter(t => {
							const e = y(t);
							return !!e && !!e.uploadInfo && e.uploadInfo.uploadKey === a.uploadKey
						}).map(t => t.mergeIn(["data"], l));
					return o = (o = o.mergeIn(["blockMap"], d)).merge({
						selectionAfter: t.getSelection()
					}), r.EditorState.push(t, o, m.b)
				},
				S = (t, e, n, o) => {
					let i = t.getCurrentContent();
					const a = c()(e.map(t => {
						const e = Object(d.f)(t.metadata.mimetype),
							n = (t => {
								if (t && t.metadata.videoFirstFrameUrl) {
									return {
										url: t.metadata.videoFirstFrameUrl,
										time: 0
									}
								}
							})(t);
						return [new r.ContentBlock({
							key: Object(r.genKey)(),
							type: f.a,
							data: Object(s.Map)({
								uploadInfo: {
									mediaType: e,
									uploadKey: t.key
								},
								thumbnail: n
							})
						}), new r.ContentBlock({
							key: Object(r.genKey)(),
							type: f.j
						})]
					}));
					i = Object(g.f)(i, n, a, o);
					const u = r.EditorState.push(t, i, m.e),
						p = l()(a);
					return r.EditorState.forceSelection(u, Object(g.b)(p, !0))
				},
				C = (t, e, n, i, c, a, l, d) => {
					const u = new r.ContentBlock({
							key: Object(r.genKey)(),
							type: f.a,
							data: Object(s.Map)({
								mediaAsset: {
									type: o.AnimatedImage,
									assetId: Object(p.c)(e, i),
									imageUrl: n,
									width: c,
									height: a
								}
							})
						}),
						h = Object(g.f)(t.getCurrentContent(), l, [u], d);
					let b = r.EditorState.push(t, h, m.e);
					b = r.EditorState.forceSelection(b, Object(g.b)(u, !0));
					const y = u.getKey();
					return b.getCurrentContent().getBlockAfter(y) || (b = K(b, y)), b
				};

			function k(t, e) {
				return t.isCollapsed() && t.getStartKey() === e && 0 === t.getStartOffset() && 0 === t.getEndOffset()
			}

			function O(t, e) {
				const n = t.getCurrentContent().getBlockAfter(e);
				return r.EditorState.forceSelection(t, Object(g.b)(n, !0))
			}
			const T = (t, e) => {
					const n = t.getBlockAfter(e);
					return t = Object(g.i)(t, e), n && Object(f.u)(n.getType()) && (t = Object(g.i)(t, n.getKey())), t
				},
				x = (t, e, n = !0) => {
					let o = t.getCurrentContent();
					o = T(o, e);
					let s = n ? r.EditorState.push(t, o, m.f) : r.EditorState.set(t, {
						currentContent: o
					});
					return s = r.EditorState.forceSelection(s, o.getSelectionAfter())
				},
				j = t => {
					let e = t.getCurrentContent();
					_(e).forEach(t => {
						e = T(e, t.getKey())
					});
					const n = r.EditorState.push(t, e, m.f);
					return r.EditorState.forceSelection(n, e.getSelectionAfter())
				},
				v = t => {
					let e = t.getCurrentContent();
					const n = t.getSelection();
					e = r.Modifier.removeRange(e, n, "forward");
					let o = r.EditorState.push(t, e, m.f);
					return o = r.EditorState.forceSelection(o, e.getSelectionAfter())
				},
				_ = t => t.getBlockMap().toSeq().filter(t => !!t && !!y(t)),
				R = (t, e) => t.getBlockMap().toSeq().filter(t => {
					const n = y(t),
						o = n && n.uploadInfo && n.uploadInfo.uploadKey;
					return !(!o || e[o] && e[o].url)
				}).isEmpty(),
				B = t => {
					const e = _(t),
						n = {
							gifvideo: 0,
							image: 0,
							video: 0,
							total: 0
						};
					return e.forEach(t => {
						const e = y(t);
						let r;
						r = e.makeGif ? "gifvideo" : e.uploadInfo && "video" === e.uploadInfo.mediaType || e.mediaAsset && e.mediaAsset.type === o.Video ? "video" : "image", n[r]++, n.total++
					}), n
				},
				I = t => !_(t).isEmpty(),
				w = (t, e) => {
					const n = _(t).map(t => {
						const n = y(t),
							{
								uploadInfo: o,
								thumbnail: r
							} = n;
						if (!o || !r) return;
						const s = M(n),
							i = e[s];
						return i && i.url ? void 0 : {
							...r,
							uploadKey: s
						}
					}).filter(Boolean).toArray();
					return n.length ? n : void 0
				},
				A = (t, e, n, o) => {
					let s = t.getCurrentContent();
					const i = s.getBlockForKey(e),
						c = s.getBlockAfter(e),
						a = [i];
					if (c && Object(f.u)(c.getType()) && a.push(c), a.find(t => t.getKey() === n)) return;
					const d = a.reduce((t, e) => t.remove(e.getKey()), s.getBlockMap());
					s = s.set("blockMap", d), s = Object(g.f)(s, n, a, o);
					const u = r.EditorState.push(t, s, m.e);
					return r.EditorState.forceSelection(u, Object(g.b)(l()(a), !0))
				},
				K = (t, e, n = g.a.after) => {
					const o = Object(g.h)(),
						s = Object(g.f)(t.getCurrentContent(), e, [o], n),
						i = r.EditorState.push(t, s, m.e);
					return r.EditorState.forceSelection(i, r.SelectionState.createEmpty(o.getKey()))
				},
				M = t => t.thumbnail && t.uploadInfo ? `${t.uploadInfo.uploadKey}-thumbnail-${t.thumbnail.time}` : "",
				L = (t, e) => {
					let n = "",
						o = "";
					if (t.uploadInfo) {
						const {
							uploadKey: r
						} = t.uploadInfo, s = e[r];
						s && s.url && (n = Object(h.b)(s.url));
						const i = e[M(t)];
						i && i.url && (o = Object(h.b)(i.url))
					}
					return {
						assetId: n,
						thumbnailAssetId: o
					}
				}
		},
		"./src/reddit/components/RichTextEditor/spoiler/decorator.m.less": function(t, e, n) {
			t.exports = {
				spoiler: "_1AlhnBqYYVTQbTr33YViyK"
			}
		},
		"./src/reddit/components/RichTextEditor/spoiler/helpers.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return s
			})), n.d(e, "a", (function() {
				return i
			}));
			var o = n("./src/lib/forEachGroup/index.ts"),
				r = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const s = t => t.getStyle().has(r.k.SPOILER);

			function i(t, e, n) {
				const r = t.getCharacterList();
				Object(o.a)(r, {
					keyFn: s
				}, (t, n, o, r) => {
					n && e(o, r)
				})
			}
		},
		"./src/reddit/components/RichTextEditor/table/Renderer/index.m.less": function(t, e, n) {
			t.exports = {
				Cell: "_1J5sneEp0XXo0pFsMN7Kjs",
				cell: "_1J5sneEp0XXo0pFsMN7Kjs",
				Row: "_2Hd-Rc7z9gTKIz6JUGhbcl",
				row: "_2Hd-Rc7z9gTKIz6JUGhbcl",
				Table: "_9QFGu47IyMX1ID1xQid-8",
				table: "_9QFGu47IyMX1ID1xQid-8",
				isFakeSelectionActive: "_1QXaG0_iXh-LFDkah9HqP3"
			}
		},
		"./src/reddit/components/RichTextEditor/table/Toolbar/index.m.less": function(t, e, n) {
			t.exports = {
				formatterButton: "_1dNavKEU0lSO4mo9fYWTPm",
				ToolbarContent: "_1yPmb5QUbyAQX1wIs4FYQI",
				toolbarContent: "_1yPmb5QUbyAQX1wIs4FYQI",
				tooltip: "_3fnB5glctifL-mkYhH6aA1"
			}
		},
		"./src/reddit/components/RichTextEditor/table/ToolbarController/index.m.less": function(t, e, n) {
			t.exports = {
				ActionButton: "_2g2bsszGVtKe_XRKcRrpQi",
				actionButton: "_2g2bsszGVtKe_XRKcRrpQi",
				isPressed: "_2WwwYG59S_TJRq7FSdTVKK",
				ToolbarWrapper: "_3rXrpMuvoGNBbLE7TQQCB9",
				toolbarWrapper: "_3rXrpMuvoGNBbLE7TQQCB9"
			}
		},
		"./src/reddit/components/RichTextEditor/table/helpers.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return a
			})), n.d(e, "g", (function() {
				return l
			})), n.d(e, "m", (function() {
				return u
			})), n.d(e, "n", (function() {
				return p
			})), n.d(e, "j", (function() {
				return h
			})), n.d(e, "l", (function() {
				return m
			})), n.d(e, "f", (function() {
				return g
			})), n.d(e, "k", (function() {
				return f
			})), n.d(e, "c", (function() {
				return b
			})), n.d(e, "h", (function() {
				return y
			})), n.d(e, "b", (function() {
				return E
			})), n.d(e, "i", (function() {
				return S
			})), n.d(e, "e", (function() {
				return C
			})), n.d(e, "o", (function() {
				return k
			})), n.d(e, "d", (function() {
				return O
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./node_modules/immutable/dist/immutable.js"),
				s = n("./src/reddit/models/RichTextJson/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/helpers/sliceContiguousBlocks.ts"),
				c = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const a = {
					[s.e]: "left",
					[s.f]: "right",
					[s.d]: "center"
				},
				l = t => {
					const e = t.getData();
					return {
						colIndex: e.get("colIndex"),
						rowIndex: e.get("rowIndex"),
						colCount: e.get("colCount"),
						alignment: e.get("alignment")
					}
				},
				d = ["data"],
				u = (t, e) => t.mergeIn(d, e),
				p = (t, e, n) => t.merge({
					text: t.getText().slice(e, n),
					characterList: t.getCharacterList().slice(e, n)
				}),
				h = (t, e, n = "", r) => {
					const s = e.map(t => t.getText()).join(n),
						i = n ? r || o.CharacterMetadata.create() : null,
						c = [];
					return e.forEach(t => {
						c.push(...t.getCharacterList().toArray()), i && e.length > 1 && c.push(i)
					}), t.merge({
						text: s,
						characterList: c
					})
				},
				m = (t, e) => {
					const n = [];
					for (let s = 0; s < e; s++)
						for (let e = 0; e < t; e++) n.push(new o.ContentBlock({
							key: Object(o.genKey)(),
							type: c.l,
							data: Object(r.Map)({
								colCount: t,
								colIndex: e,
								rowIndex: s
							})
						}));
					return n
				},
				g = (t, e) => ({
					minCol: Math.min(t.colIndex, e.colIndex),
					minRow: Math.min(t.rowIndex, e.rowIndex),
					maxCol: Math.max(t.colIndex, e.colIndex),
					maxRow: Math.max(t.rowIndex, e.rowIndex)
				}),
				f = (t, e) => {
					const {
						minCol: n,
						minRow: o,
						maxCol: r,
						maxRow: s
					} = g(t, e);
					return (t, e) => o <= t && t <= s && n <= e && e <= r
				},
				b = (t, e) => t.rowIndex < e.rowIndex ? -1 : t.rowIndex > e.rowIndex ? 1 : t.colIndex - e.colIndex,
				y = (t, e) => t === e || !(!t || !e) && 0 === b(t, e),
				E = (t, e) => b(l(t), l(e)),
				S = t => {
					if (Object(c.v)(t.getType())) {
						return 0 === l(t).rowIndex
					}
					return !1
				},
				C = (t, e, n) => {
					const o = (e, n) => {
						if (e) {
							const o = Object(i.a)(t, e);
							return o && n && -1 !== o.blocks.indexOf(n) ? [o, o] : [o, n ? Object(i.a)(t, n) : null]
						}
						return n ? o(n, null).reverse() : [null, null]
					};
					return o(Object(c.v)(e.getType()) ? e : null, Object(c.v)(n.getType()) ? n : null)
				},
				k = (t, e, n, o = !1) => {
					const r = {
						isBackward: o
					};
					return e && (r.anchorKey = e.getKey(), r.anchorOffset = o ? e.getLength() : 0), n && (r.focusKey = n.getKey(), r.focusOffset = o ? 0 : n.getLength()), t.merge(r)
				},
				O = t => {
					if (!t.length) return [];
					const e = t[0].length;
					return t.map((t, n) => t.map((t, o) => u(t, {
						rowIndex: n,
						colIndex: o,
						colCount: e
					})))
				}
		},
		"./src/reddit/components/ThumbnailSelector/index.m.less": function(t, e, n) {
			t.exports = {
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
		"./src/reddit/components/ThumbnailSelector/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/debounce.js"),
				s = n.n(r),
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
				C = Object(p.a)(u.a.div("Component", E.a)),
				k = u.a.wrapped(b.a, "TitleRow", E.a),
				O = u.a.wrapped(f.a, "Close", E.a),
				T = u.a.div("CloseWrapper", E.a),
				x = u.a.div("ThumbnailsContainer", E.a),
				j = u.a.img("Image", E.a),
				v = t => l.a.createElement("div", {
					className: Object(d.a)(E.a.thumbnail, Object(g.a)({
						isLoading: t.isLoading
					}), {
						[E.a.isSelected]: t.isSelected
					}),
					onClick: t.onClick,
					ref: t.elementRef
				}, t.thumbnail.url && l.a.createElement(j, {
					src: t.thumbnail.url
				})),
				_ = u.a.wrapped(b.a, "ButtonRow", E.a),
				R = h.l,
				B = u.a.wrapped(h.o, "CancelButton", E.a),
				I = (t, e) => {
					if (1 === t) return [0];
					const n = c()(0, e, e / (t - 1));
					return n.push(e), n.map(t => +t.toFixed(2))
				};
			class w extends l.a.Component {
				constructor(t) {
					super(t), this.isThumbnailsAreGenerating = !1, this.setSelectedElementRef = t => this.selectedElement = t, this.setThumbnails = s()(t => this.setState({
						thumbnails: t
					}), 100), this.scrollIntoView = () => {
						this.selectedElement && this.selectedElement.scrollIntoView({})
					}, this.setSelected = t => {
						this.setState({
							selectedIndex: t
						})
					}, this.onSelectButton = () => {
						const {
							selectedIndex: t
						} = this.state, e = this.state.thumbnails[t];
						this.props.onSelect({
							time: e.time,
							url: e.url
						})
					};
					const {
						thumbnailsCount: e = S,
						selected: n,
						videoDuration: o
					} = this.props, r = I(e, o).map(t => ({
						time: t,
						url: n && n.time === t ? n.url : void 0
					})), i = n ? r.findIndex(t => n.time === t.time) : -1;
					this.state = {
						thumbnails: r,
						selectedIndex: i
					}
				}
				componentDidMount() {
					this.scrollIntoView(), this.props.isOpen && this.generateVideoThumbnails()
				}
				componentDidUpdate(t) {
					this.props.isOpen && !t.isOpen && (this.scrollIntoView(), this.generateVideoThumbnails())
				}
				async generateVideoThumbnails() {
					const {
						thumbnails: t
					} = this.state;
					if (this.isThumbnailsAreGenerating || !t.find(t => !t.url)) return;
					this.isThumbnailsAreGenerating = !0;
					const e = document.createElement("video"),
						n = document.createElement("canvas");
					await Object(m.o)(e, this.props.videoSource);
					let o = 0;
					e.currentTime = t[o].time, await Object(m.d)(e, n, e => (t[o].url = e.dataUrl, o++, this.setThumbnails(t), o < t.length ? t[o].time : null)), this.setState({
						thumbnails: t
					}), this.isThumbnailsAreGenerating = !1
				}
				render() {
					if (!this.props.isOpen) return null;
					const {
						selectedIndex: t,
						thumbnails: e
					} = this.state;
					return l.a.createElement(C, {
						withOverlay: !0
					}, l.a.createElement(k, null, o.fbt._("Choose thumbnail", null, {
						hk: "XlI0H"
					}), l.a.createElement(T, {
						onClick: this.props.onToggleModal
					}, l.a.createElement(O, null))), l.a.createElement(x, null, e.map((e, n) => l.a.createElement(v, {
						key: n,
						elementRef: n === t ? this.setSelectedElementRef : void 0,
						isLoading: !e.url,
						onClick: () => this.setSelected(n),
						isSelected: n === t,
						thumbnail: e
					}))), l.a.createElement(_, null, l.a.createElement(B, {
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
			e.a = w
		},
		"./src/reddit/components/TypingIndicators/constants.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return o
			})), n.d(e, "b", (function() {
				return r
			})), n.d(e, "c", (function() {
				return s
			})), n.d(e, "d", (function() {
				return i
			})), n.d(e, "f", (function() {
				return c
			})), n.d(e, "g", (function() {
				return a
			})), n.d(e, "e", (function() {
				return l
			}));
			const o = 2e3,
				r = 3e4,
				s = 36,
				i = 2,
				c = 6,
				a = 1e4,
				l = 1e4
		},
		"./src/reddit/controls/SubredditDropdown/index.m.less": function(t, e, n) {
			t.exports = {
				entry: "BR2J4z5ndMj6r3-QW2hHI",
				mIsFocused: "_2KXTnIrbZ1Fr5F4nZyXeKS",
				list: "_17g61LC45mhwjs-g79qbZK"
			}
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			})), n.d(e, "b", (function() {
				return i
			}));
			var o = n("./src/config.ts"),
				r = n("./src/reddit/endpoints/governance/requester.ts");
			const s = (t, e) => Object(r.a)(t, {
					method: "post",
					endpoint: `${o.a.metaUrl}/orders`,
					data: {
						price: "0",
						currency: "usd",
						products: [{
							productId: e.productId,
							quantity: "1"
						}],
						subredditId: e.subredditId
					}
				}),
				i = (t, e) => Object(r.a)(t, {
					method: "get",
					endpoint: `${o.a.metaUrl}/product-collections/${e}?types=emotes_pack`
				})
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return l
			})), n.d(e, "b", (function() {
				return d
			})), n.d(e, "d", (function() {
				return u
			})), n.d(e, "e", (function() {
				return p
			})), n.d(e, "c", (function() {
				return h
			}));
			var o = n("./src/config.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
				s = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/endpoints/governance/requester.ts"),
				c = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				a = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function l(t, e) {
				return Object(i.a)(t, {
					endpoint: `${o.a.metaUrl}/communities/${e.subredditId}/me`,
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

			function d(t, e) {
				return Object(i.a)(t, {
					endpoint: `${o.a.metaUrl}/ps/me/braintree-client-tokens`,
					method: "post",
					data: {
						username: e && e.username
					}
				})
			}

			function u(t, e) {
				return Object(i.a)(t, {
					endpoint: `${o.a.metaUrl}/orders`,
					method: "post",
					data: {
						currency: "usd",
						orderTarget: "special_membership",
						price: e.trial ? "0" : e.price,
						products: [{
							productId: e.productId,
							quantity: "1"
						}],
						providerArgs: {
							paymentNonce: e.nonce,
							savePaymentMethod: !0
						},
						providerName: "braintree",
						subredditId: e.subredditId,
						targetArgs: {
							renew: !0,
							receiverName: e.username
						}
					}
				})
			}

			function p(t, e) {
				return Object(i.a)(Object(r.a)(t, [s.a]), {
					endpoint: `${t.apiUrl}/api/info?id=${e.join(",")}`,
					method: "get"
				}).then(t => {
					if (t.ok) {
						const e = t.body.data.children.map(({
							data: t
						}) => Object(a.a)(t)).reduce((t, e) => (t[e.id] = e, t), {});
						return {
							...t,
							body: e
						}
					}
					return t
				})
			}
			async function h(t, e) {
				const n = await Object(i.a)(t, {
					endpoint: `${o.a.metaUrl}/orders`,
					method: "post",
					data: {
						...e,
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
		"./src/reddit/endpoints/economics/subredditPremium.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return d
			})), n.d(e, "b", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/merge.js"),
				r = n.n(o),
				s = n("./src/config.ts"),
				i = n("./src/reddit/endpoints/governance/badges.ts"),
				c = n("./src/reddit/endpoints/governance/community.ts"),
				a = n("./src/reddit/endpoints/governance/products/badges.ts"),
				l = n("./src/reddit/endpoints/governance/requester.ts");
			async function d(t, e, n) {
				const o = {
						subredditId: e,
						badges: {},
						errors: {},
						collections: {},
						products: {},
						subscription: void 0,
						userOwnedBadges: []
					},
					d = function(t, e) {
						return Object(l.a)(t, {
							method: "get",
							endpoint: `${s.a.metaUrl}/product-collections/${e}?types=badge`
						})
					}(t, e),
					u = Object(c.a)(t, {
						subredditId: e
					}),
					p = Object(a.b)(t, e),
					h = Object(i.c)(t, e, n),
					[m, g, f, b] = await Promise.all([d, u, p, h]);
				if (m.ok ? o.collections = m.body : o.errors.collections = m.error, g.ok) {
					const t = g.body;
					o.subscription = t.specialMemberships, o.communityRaw = t
				}
				return f.ok ? o.products = f.body : o.errors.products = f.error, b.ok ? (r()(o.badges, b.body.badges), o.userOwnedBadges = b.body.userOwnedBadges) : o.errors.userBadges = b.error, o
			}
			const u = (t, e) => Object(l.a)(t, {
				endpoint: `${s.a.metaUrl}/products/${e}?types=badge,membership`,
				method: "delete"
			})
		},
		"./src/reddit/endpoints/governance/community.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return i
			}));
			var o = n("./src/config.ts"),
				r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");

			function i(t, e) {
				return Object(s.a)(t, {
					endpoint: `${o.a.metaUrl}/communities/${e.subredditId}/me`,
					method: r.jb.GET
				})
			}
		},
		"./src/reddit/helpers/richTextEditor/index.ts": function(t, e, n) {
			"use strict";
			var o;
			n.d(e, "a", (function() {
					return o
				})),
				function(t) {
					t[t.Post = 0] = "Post", t[t.Comment = 1] = "Comment"
				}(o || (o = {}))
		},
		"./src/reddit/selectors/editorContent.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			}));
			var o = n("./src/reddit/actions/postCreation/constants.ts");
			const r = (t, e) => t.creations.api.editor.converting.pending[e || o.k]
		},
		"./src/reddit/selectors/gold/enabledFeatures.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return a
			})), n.d(e, "a", (function() {
				return l
			})), n.d(e, "c", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/featureFlags/index.ts"),
				s = n("./src/reddit/selectors/economics.ts"),
				i = n("./src/reddit/selectors/gold/powerups/index.ts"),
				c = n("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const a = Object(o.a)(r.d.spEmotes, s.b, i.h, (t, e, n) => {
					if (n) return !0;
					const o = !(!e || !Object.keys(e).length);
					return t && o
				}),
				l = Object(o.a)(s.b, i.i, i.j, i.h, (t, e, n, o) => {
					if (o) return [...e, ...n].slice(0, 3);
					let r = [];
					for (const s of t || [])
						if ((r = [...r, ...Object.values(s.emotes)]).length > 3) break;
					return r.slice(0, 3)
				}),
				d = Object(o.a)(r.d.spGiphy, i.h, c.b, (t, e, n) => t || e && n)
		},
		"./src/reddit/selectors/products.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			})), n.d(e, "b", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/reddit/models/Product/index.ts");
			const r = (t, e) => {
					const n = t.products.models[e];
					if (n && n.type === o.a.Badge) return n
				},
				s = (t, {
					productId: e
				}) => {
					const n = t.products.models[e];
					if (n) {
						const o = n.subredditId,
							r = Object.keys(t.user.ownedBadges[o] || {}),
							s = t.badges.models,
							i = Date.now();
						let c = !1;
						return r.forEach(t => {
							const n = s[t];
							n && n.type === e && n.endsAt > i && (c = !0)
						}), c
					}
					return !1
				}
		},
		"./src/redditGQL/operations/SubredditTypeaheadSearch.json": function(t) {
			t.exports = JSON.parse('{"id":"20edc5ee12df"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatMessageInput~MembershipPaywallPage~RichTextEditor.b60fb17086f26e45f2d5.js.map