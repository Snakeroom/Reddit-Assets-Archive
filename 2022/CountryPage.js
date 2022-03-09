// https://www.redditstatic.com/desktop2x/CountryPage.c9c1293d3a3e37944775.js
// Retrieved at 3/9/2022, 11:10:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CountryPage"], {
		"./src/lib/pageTitle/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				r = s("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				o = s("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				i = s("./src/reddit/selectors/countrySites.ts"),
				d = s("./src/reddit/selectors/meta.ts");
			const a = (e, t) => {
				const {
					languageCode: s
				} = Object(i.b)(e), a = Object(d.i)(e) || r.DEFAULT_LOCALE, c = Object(n.isPseudoLocale)(a) ? r.DEFAULT_LOCALE : a;
				if (s) {
					const e = Object(o.c)(s, c.substring(0, 2));
					return t + (e ? ` - ${e}` : "")
				}
				return t
			}
		},
		"./src/reddit/actions/pages/countrySite/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "countrySiteHomeFeedPending", (function() {
				return k
			})), s.d(t, "countrySiteHomeFeedLoaded", (function() {
				return S
			})), s.d(t, "countrySiteHomeFeedFailed", (function() {
				return _
			})), s.d(t, "requestInternationalSiteHomeFeed", (function() {
				return F
			})), s.d(t, "internationalSiteHomePageRequested", (function() {
				return T
			})), s.d(t, "moreCountrySitePostsPending", (function() {
				return E
			})), s.d(t, "moreCountrySitePostsLoaded", (function() {
				return w
			})), s.d(t, "moreCountrySitePostsFailed", (function() {
				return q
			})), s.d(t, "moreInternationalSitePostsRequested", (function() {
				return A
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/lib/makeListingKey/index.ts"),
				d = s("./src/lib/pageTitle/index.ts"),
				a = s("./src/lib/pageTitle/helpers.ts"),
				c = s("./src/reddit/actions/pages/countrySite/constants.ts"),
				l = s("./src/reddit/actions/platform.ts"),
				u = s("./src/reddit/actions/toaster.ts"),
				p = s("./src/lib/makeGqlRequest/index.ts"),
				g = s("./src/redditGQL/operations/CountrySiteHomeFeed.json");
			const m = async (e, t) => {
				return await Object(p.a)(e, {
					...g,
					variables: t
				})
			};
			var b = s("./src/lib/env/index.ts"),
				y = s("./src/lib/sentry/index.ts"),
				x = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				O = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				f = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				C = s("./src/reddit/models/Post/index.ts"),
				j = e => {
					const t = {
						dist: 0,
						pageInfo: null,
						postFlair: {},
						postIds: [],
						postInstances: {},
						posts: {},
						subreddits: {},
						token: void 0
					};
					if (!e) return t;
					const {
						countryFeed: s
					} = e, {
						posts: n
					} = s, {
						pageInfo: r,
						edges: o
					} = n;
					if (o) {
						t.pageInfo = r;
						for (const {
								node: e
							} of o) {
							if (!Object(C.k)(e)) {
								const t = `Received unhandled element type when processing Country Site feed data: "${e.__typename}"`;
								Object(b.b)() || console.warn(t), y.c.captureMessage(t);
								continue
							}
							const s = e;
							t.postIds.push(s.id);
							const {
								post: n,
								crosspost: r
							} = s && Object(O.a)(s);
							t.posts[n.id] = n, r && (t.posts[r.id] = r), Object(C.n)(s) && (t.subreddits[s.subreddit.id] || (t.subreddits[s.subreddit.id] = Object(f.a)(s.subreddit)), t.postFlair[s.subreddit.id] || (t.postFlair[s.subreddit.id] = Object(x.a)(s.subreddit)))
						}
					} else t.pageInfo = {
						endCursor: null,
						hasNextPage: !1,
						hasPreviousPage: !1,
						startCursor: null
					};
					return t.postIds.length && (t.dist = t.postIds.length), t.pageInfo.hasNextPage && (t.token = t.pageInfo.endCursor || ""), t
				},
				h = s("./src/reddit/helpers/locales.ts"),
				v = s("./src/reddit/models/Toast/index.ts"),
				L = s("./src/reddit/selectors/experiments/countrySites.ts"),
				P = s("./src/reddit/selectors/meta.ts");
			const k = Object(o.a)(c.c),
				S = Object(o.a)(c.b),
				_ = Object(o.a)(c.a),
				F = (e, t, s) => async (r, o, {
					gqlContext: i
				}) => {
					const d = o(),
						a = d.listings.postOrder.ids[e],
						c = d.listings.postOrder.api.error[e];
					if (d.listings.postOrder.api.pending[e] || a && !c) return;
					const l = {
						languageCode: t,
						countryCode: s
					};
					r(k({
						key: e
					}));
					const p = await m(i(), l);
					Object(P.d)(d) && t && Object(L.c)(d) && await Object(h.a)(t, r);
					const {
						data: g
					} = p.body, b = `error-${e}`;
					if (p.ok && g) {
						const t = o(),
							s = j(g);
						r(S({
							key: e,
							meta: t.meta,
							...s
						})), r(u.g(b))
					} else r(_({
						key: e,
						error: p.error
					})), r(u.f({
						id: b,
						kind: v.b.Error,
						text: n.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "36ypKx"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1XMjgA"
						}),
						buttonAction: F(e, t, s)
					}))
				}, T = e => async (t, s) => {
					const n = s(),
						{
							countryCode: o,
							languageCode: u
						} = e.params,
						p = Object(i.a)(c.d, r.W.HOT, {
							countryCode: o,
							languageCode: u
						});
					t(Object(l.m)({
						title: Object(a.a)(n, Object(d.e)())
					})), await t(F(p, u, o))
				}, E = Object(o.a)(c.g), w = Object(o.a)(c.f), q = Object(o.a)(c.e), A = e => async (t, s, {
					gqlContext: n
				}) => {
					const o = s(),
						d = Object(i.a)(c.d, r.W.HOT, {
							countryCode: e.countryCode,
							languageCode: e.languageCode
						}),
						a = o.listings.postOrder.loadMore[d];
					if (a) {
						const r = o.listings.postOrder.api.pending[d],
							i = o.listings.postOrder.fetchedTokens,
							c = i[d] && i[d][a.token] || !1;
						if (!r && !c) {
							t(E({
								key: d,
								fetchedToken: a.token
							}));
							const r = {
									languageCode: e.languageCode,
									countryCode: e.countryCode,
									after: a.token
								},
								o = await m(n(), r),
								{
									data: i
								} = o.body;
							if (o.ok && i) {
								const e = s(),
									n = j(i);
								t(w({
									fetchedToken: a.token,
									key: d,
									meta: e.meta,
									...n
								}))
							} else t(q({
								key: d,
								error: o.error,
								fetchedToken: a.token
							}))
						}
					}
				}
		},
		"./src/reddit/pages/CountrySitePage/index.m.less": function(e, t, s) {
			e.exports = {
				sidebar: "_1KGcr7YNqRX6y8WBtfrlA9"
			}
		},
		"./src/reddit/pages/CountrySitePage/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/makeListingKey/index.ts"),
				c = s("./src/reddit/actions/pages/countrySite/index.ts"),
				l = s("./src/reddit/actions/pages/countrySite/constants.ts"),
				u = s("./src/reddit/components/JumpToContent/index.tsx"),
				p = s("./src/reddit/components/ListingPostList/index.tsx"),
				g = s("./src/reddit/components/SidebarContainer/index.tsx"),
				m = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				y = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/helpers/trackers/screenview.ts"),
				O = s("./src/reddit/layout/page/Listing/index.tsx"),
				f = s("./src/reddit/pages/Multireddit/index.tsx"),
				C = s("./src/lib/constants/index.ts"),
				j = s("./src/reddit/pages/CountrySitePage/index.m.less"),
				h = s.n(j);
			const v = Object(y.u)({
					pageLayer: e => e
				}),
				L = (e, {
					match: t
				}) => t.params.sort || C.W.HOT,
				P = (e, t) => {
					var s, n, r, o;
					const i = null === (n = null === (s = null == t ? void 0 : t.pageLayer) || void 0 === s ? void 0 : s.urlParams) || void 0 === n ? void 0 : n.countryCode,
						d = null === (o = null === (r = null == t ? void 0 : t.pageLayer) || void 0 === r ? void 0 : r.urlParams) || void 0 === o ? void 0 : o.languageCode,
						a = i ? `${d}-${i}` : `${d}`;
					return l.d + `--[cc:'${a}']`
				},
				k = Object(i.a)(L, P, (e, t) => Object(a.a)(t, e)),
				S = Object(i.c)({
					listingKey: k,
					listingName: P,
					sort: L
				}),
				_ = Object(o.b)(S, (e, t) => ({
					onLoadMorePosts: () => {
						var s, n, r, o;
						return e(c.moreInternationalSitePostsRequested({
							languageCode: (null === (n = null === (s = null == t ? void 0 : t.pageLayer) || void 0 === s ? void 0 : s.urlParams) || void 0 === n ? void 0 : n.languageCode) || "",
							countryCode: (null === (o = null === (r = null == t ? void 0 : t.pageLayer) || void 0 === r ? void 0 : r.urlParams) || void 0 === o ? void 0 : o.countryCode) || "",
							sort: t.match.params.sort || C.W.HOT
						}))
					}
				}));
			class F extends r.a.Component {
				constructor(e) {
					super(e), this.noPosts = () => r.a.createElement(f.EmptyMessage, {
						containsSubreddits: !0
					}), this.onListingViewed = (e, t) => Object(x.f)({
						key: this.props.listingKey,
						sort: this.props.sort,
						timerType: t,
						timerMillis: e,
						timeSort: C.ic
					})
				}
				render() {
					const {
						listingKey: e,
						listingName: t
					} = this.props, s = r.a.createElement(g.a, {
						className: h.a.sidebar
					}, r.a.createElement(m.a, {
						adComponentOnFakeOverlay: !0
					}));
					return r.a.createElement(O.a, {
						className: Object(d.a)(h.a.Container, this.props.className),
						fitPageToContent: !0,
						content: r.a.createElement(n.Fragment, null, r.a.createElement(u.a, null), r.a.createElement(p.a, {
							noPostsComponent: this.noPosts,
							listingKey: e,
							listingName: t,
							listingViewed: this.onListingViewed,
							onLoadMore: this.props.onLoadMorePosts
						})),
						sidebar: s
					})
				}
			}
			t.default = v(_(Object(b.c)(F)))
		},
		"./src/redditGQL/operations/CountrySiteHomeFeed.json": function(e) {
			e.exports = JSON.parse('{"id":"ddedd4659f26"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CountryPage.c9c1293d3a3e37944775.js.map