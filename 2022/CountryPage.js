// https://www.redditstatic.com/desktop2x/CountryPage.1e80e6d3a8c113550d5c.js
// Retrieved at 2/15/2022, 6:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CountryPage"], {
		"./src/reddit/actions/pages/countrySite/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "countrySiteHomeFeedPending", (function() {
				return O
			})), s.d(t, "countrySiteHomeFeedLoaded", (function() {
				return h
			})), s.d(t, "countrySiteHomeFeedFailed", (function() {
				return k
			})), s.d(t, "requestInternationalSiteHomeFeed", (function() {
				return v
			})), s.d(t, "internationalSiteHomePageRequested", (function() {
				return P
			})), s.d(t, "moreCountrySitePostsPending", (function() {
				return j
			})), s.d(t, "moreCountrySitePostsLoaded", (function() {
				return S
			})), s.d(t, "moreCountrySitePostsFailed", (function() {
				return L
			})), s.d(t, "moreInternationalSitePostsRequested", (function() {
				return _
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/lib/makeListingKey/index.ts"),
				d = s("./src/reddit/actions/pages/countrySite/constants.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/lib/makeGqlRequest/index.ts"),
				l = s("./src/redditGQL/operations/CountrySiteHomeFeed.json");
			const u = async (e, t) => {
				return await Object(c.a)(e, {
					...l,
					variables: t
				})
			};
			var p = s("./src/lib/env/index.ts"),
				g = s("./src/lib/sentry/index.ts"),
				m = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				y = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				b = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				x = s("./src/reddit/models/Post/index.ts"),
				f = e => {
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
						pageInfo: o,
						edges: r
					} = n;
					if (r) {
						t.pageInfo = o;
						for (const {
								node: e
							} of r) {
							if (!Object(x.k)(e)) {
								const t = `Received unhandled element type when processing Country Site feed data: "${e.__typename}"`;
								Object(p.b)() || console.warn(t), g.c.captureMessage(t);
								continue
							}
							const s = e;
							t.postIds.push(s.id);
							const {
								post: n,
								crosspost: o
							} = s && Object(y.a)(s);
							t.posts[n.id] = n, o && (t.posts[o.id] = o), Object(x.n)(s) && (t.subreddits[s.subreddit.id] || (t.subreddits[s.subreddit.id] = Object(b.a)(s.subreddit)), t.postFlair[s.subreddit.id] || (t.postFlair[s.subreddit.id] = Object(m.a)(s.subreddit)))
						}
					} else t.pageInfo = {
						endCursor: null,
						hasNextPage: !1,
						hasPreviousPage: !1,
						startCursor: null
					};
					return t.postIds.length && (t.dist = t.postIds.length), t.pageInfo.hasNextPage && (t.token = t.pageInfo.endCursor || ""), t
				},
				C = s("./src/reddit/models/Toast/index.ts");
			const O = Object(r.a)(d.c),
				h = Object(r.a)(d.b),
				k = Object(r.a)(d.a),
				v = (e, t, s) => async (o, r, {
					gqlContext: i
				}) => {
					const d = r(),
						c = d.listings.postOrder.ids[e],
						l = d.listings.postOrder.api.error[e];
					if (d.listings.postOrder.api.pending[e] || c && !l) return;
					const p = {
						languageCode: t,
						countryCode: s
					};
					o(O({
						key: e
					}));
					const g = await u(i(), p),
						{
							data: m
						} = g.body,
						y = `error-${e}`;
					if (g.ok && m) {
						const t = r(),
							s = f(m);
						o(h({
							key: e,
							meta: t.meta,
							...s
						})), o(a.g(y))
					} else o(k({
						key: e,
						error: g.error
					})), o(a.f({
						id: y,
						kind: C.b.Error,
						text: n.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "36ypKx"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1XMjgA"
						}),
						buttonAction: v(e, t, s)
					}))
				}, P = e => async t => {
					const {
						countryCode: s,
						languageCode: n
					} = e.params, r = Object(i.a)(d.d, o.W.HOT, {
						countryCode: s,
						languageCode: n
					});
					await t(v(r, n, s))
				}, j = Object(r.a)(d.g), S = Object(r.a)(d.f), L = Object(r.a)(d.e), _ = e => async (t, s, {
					gqlContext: n
				}) => {
					const r = s(),
						a = Object(i.a)(d.d, o.W.HOT, {
							countryCode: e.countryCode,
							languageCode: e.languageCode
						}),
						c = r.listings.postOrder.loadMore[a];
					if (c) {
						const o = r.listings.postOrder.api.pending[a],
							i = r.listings.postOrder.fetchedTokens,
							d = i[a] && i[a][c.token] || !1;
						if (!o && !d) {
							t(j({
								key: a,
								fetchedToken: c.token
							}));
							const o = {
									languageCode: e.languageCode,
									countryCode: e.countryCode,
									after: c.token
								},
								r = await u(n(), o),
								{
									data: i
								} = r.body;
							if (r.ok && i) {
								const e = s(),
									n = f(i);
								t(S({
									fetchedToken: c.token,
									key: a,
									meta: e.meta,
									...n
								}))
							} else t(L({
								key: a,
								error: r.error,
								fetchedToken: c.token
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
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/makeListingKey/index.ts"),
				c = s("./src/reddit/actions/pages/countrySite/index.ts"),
				l = s("./src/reddit/actions/pages/countrySite/constants.ts"),
				u = s("./src/reddit/components/JumpToContent/index.tsx"),
				p = s("./src/reddit/components/ListingPostList/index.tsx"),
				g = s("./src/reddit/components/SidebarContainer/index.tsx"),
				m = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				y = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/helpers/trackers/screenview.ts"),
				f = s("./src/reddit/layout/page/Listing/index.tsx"),
				C = s("./src/reddit/pages/Multireddit/index.tsx"),
				O = s("./src/lib/constants/index.ts"),
				h = s("./src/reddit/pages/CountrySitePage/index.m.less"),
				k = s.n(h);
			const v = Object(b.u)({
					pageLayer: e => e
				}),
				P = (e, {
					match: t
				}) => t.params.sort || O.W.HOT,
				j = (e, t) => {
					var s, n, o, r;
					const i = null === (n = null === (s = null == t ? void 0 : t.pageLayer) || void 0 === s ? void 0 : s.urlParams) || void 0 === n ? void 0 : n.countryCode,
						d = null === (r = null === (o = null == t ? void 0 : t.pageLayer) || void 0 === o ? void 0 : o.urlParams) || void 0 === r ? void 0 : r.languageCode,
						a = i ? `${d}-${i}` : `${d}`;
					return l.d + `--[cc:'${a}']`
				},
				S = Object(i.a)(P, j, (e, t) => Object(a.a)(t, e)),
				L = Object(i.c)({
					listingKey: S,
					listingName: j,
					sort: P
				}),
				_ = Object(r.b)(L, (e, t) => ({
					onLoadMorePosts: () => {
						var s, n, o, r;
						return e(c.moreInternationalSitePostsRequested({
							languageCode: (null === (n = null === (s = null == t ? void 0 : t.pageLayer) || void 0 === s ? void 0 : s.urlParams) || void 0 === n ? void 0 : n.languageCode) || "",
							countryCode: (null === (r = null === (o = null == t ? void 0 : t.pageLayer) || void 0 === o ? void 0 : o.urlParams) || void 0 === r ? void 0 : r.countryCode) || "",
							sort: t.match.params.sort || O.W.HOT
						}))
					}
				}));
			class F extends o.a.Component {
				constructor(e) {
					super(e), this.noPosts = () => o.a.createElement(C.EmptyMessage, {
						containsSubreddits: !0
					}), this.onListingViewed = (e, t) => Object(x.f)({
						key: this.props.listingKey,
						sort: this.props.sort,
						timerType: t,
						timerMillis: e,
						timeSort: O.ic
					})
				}
				render() {
					const {
						listingKey: e,
						listingName: t
					} = this.props, s = o.a.createElement(g.a, {
						className: k.a.sidebar
					}, o.a.createElement(m.a, {
						adComponentOnFakeOverlay: !0
					}));
					return o.a.createElement(f.a, {
						className: Object(d.a)(k.a.Container, this.props.className),
						fitPageToContent: !0,
						content: o.a.createElement(n.Fragment, null, o.a.createElement(u.a, null), o.a.createElement(p.a, {
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
			t.default = v(_(Object(y.c)(F)))
		},
		"./src/redditGQL/operations/CountrySiteHomeFeed.json": function(e) {
			e.exports = JSON.parse('{"id":"c628dcc63b33"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CountryPage.1e80e6d3a8c113550d5c.js.map