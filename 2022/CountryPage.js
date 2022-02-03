// https://www.redditstatic.com/desktop2x/CountryPage.2c0ab3de2d8ee0f1586d.js
// Retrieved at 2/3/2022, 4:50:13 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CountryPage"], {
		"./src/reddit/actions/pages/countrySite/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "countrySiteHomeFeedPending", (function() {
				return C
			})), s.d(t, "countrySiteHomeFeedLoaded", (function() {
				return h
			})), s.d(t, "countrySiteHomeFeedFailed", (function() {
				return k
			})), s.d(t, "requestCountrySiteHomeFeed", (function() {
				return j
			})), s.d(t, "countrySiteHomePageRequested", (function() {
				return P
			})), s.d(t, "moreCountrySitePostsPending", (function() {
				return S
			})), s.d(t, "moreCountrySitePostsLoaded", (function() {
				return L
			})), s.d(t, "moreCountrySitePostsFailed", (function() {
				return v
			})), s.d(t, "moreCountryPostsRequested", (function() {
				return _
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/lib/makeListingKey/index.ts"),
				d = s("./src/reddit/actions/pages/countrySite/constants.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/lib/makeGqlRequest/index.ts"),
				u = s("./src/redditGQL/operations/CountrySiteHomeFeed.json");
			const l = async (e, t) => {
				return await Object(c.a)(e, {
					...u,
					variables: t
				})
			};
			var p = s("./src/lib/env/index.ts"),
				m = s("./src/lib/sentry/index.ts"),
				g = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
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
						pageInfo: r,
						edges: o
					} = n;
					if (o) {
						t.pageInfo = r;
						for (const {
								node: e
							} of o) {
							if (!Object(x.k)(e)) {
								const t = `Received unhandled element type when processing Country Site feed data: "${e.__typename}"`;
								Object(p.b)() || console.warn(t), m.c.captureMessage(t);
								continue
							}
							const s = e;
							t.postIds.push(s.id);
							const {
								post: n,
								crosspost: r
							} = s && Object(y.a)(s);
							t.posts[n.id] = n, r && (t.posts[r.id] = r), Object(x.n)(s) && (t.subreddits[s.subreddit.id] || (t.subreddits[s.subreddit.id] = Object(b.a)(s.subreddit)), t.postFlair[s.subreddit.id] || (t.postFlair[s.subreddit.id] = Object(g.a)(s.subreddit)))
						}
					} else t.pageInfo = {
						endCursor: null,
						hasNextPage: !1,
						hasPreviousPage: !1,
						startCursor: null
					};
					return t.postIds.length && (t.dist = t.postIds.length), t.pageInfo.hasNextPage && (t.token = t.pageInfo.endCursor || ""), t
				},
				O = s("./src/reddit/models/Toast/index.ts");
			const C = Object(o.a)(d.c),
				h = Object(o.a)(d.b),
				k = Object(o.a)(d.a),
				j = (e, t) => async (s, r, {
					gqlContext: o
				}) => {
					const i = r(),
						d = i.listings.postOrder.ids[e],
						c = i.listings.postOrder.api.error[e];
					if (i.listings.postOrder.api.pending[e] || d && !c) return;
					const u = {
						countryCode: t
					};
					s(C({
						key: e
					}));
					const p = await l(o(), u),
						{
							data: m
						} = p.body,
						g = `error-${e}`;
					if (p.ok && m) {
						const t = r(),
							n = f(m);
						s(h({
							key: e,
							meta: t.meta,
							...n
						})), s(a.g(g))
					} else s(k({
						key: e,
						error: p.error
					})), s(a.f({
						id: g,
						kind: O.b.Error,
						text: n.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "36ypKx"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1XMjgA"
						}),
						buttonAction: j(e, t)
					}))
				}, P = e => async t => {
					const {
						countryCode: s
					} = e.params, n = Object(i.a)(d.d, r.W.HOT, {
						countryCode: s
					});
					await t(j(n, s))
				}, S = Object(o.a)(d.g), L = Object(o.a)(d.f), v = Object(o.a)(d.e), _ = e => async (t, s, {
					gqlContext: n
				}) => {
					const o = s(),
						a = Object(i.a)(d.d, r.W.HOT, {
							countryCode: e.countryCode
						}),
						c = o.listings.postOrder.loadMore[a];
					if (c) {
						const r = o.listings.postOrder.api.pending[a],
							i = o.listings.postOrder.fetchedTokens,
							d = i[a] && i[a][c.token] || !1;
						if (!r && !d) {
							t(S({
								key: a,
								fetchedToken: c.token
							}));
							const r = {
									countryCode: e.countryCode,
									after: c.token
								},
								o = await l(n(), r),
								{
									data: i
								} = o.body;
							if (o.ok && i) {
								const e = s(),
									n = f(i);
								t(L({
									fetchedToken: c.token,
									key: a,
									meta: e.meta,
									...n
								}))
							} else t(v({
								key: a,
								error: o.error,
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
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/makeListingKey/index.ts"),
				c = s("./src/reddit/actions/pages/countrySite/index.ts"),
				u = s("./src/reddit/actions/pages/countrySite/constants.ts"),
				l = s("./src/reddit/components/JumpToContent/index.tsx"),
				p = s("./src/reddit/components/ListingPostList/index.tsx"),
				m = s("./src/reddit/components/SidebarContainer/index.tsx"),
				g = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				y = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/helpers/trackers/screenview.ts"),
				f = s("./src/reddit/layout/page/Listing/index.tsx"),
				O = s("./src/reddit/pages/Multireddit/index.tsx"),
				C = s("./src/lib/constants/index.ts"),
				h = s("./src/reddit/pages/CountrySitePage/index.m.less"),
				k = s.n(h);
			const j = Object(b.u)({
					pageLayer: e => e
				}),
				P = (e, {
					match: t
				}) => t.params.sort || C.W.HOT,
				S = (e, t) => {
					var s, n;
					const r = null === (n = null === (s = null == t ? void 0 : t.pageLayer) || void 0 === s ? void 0 : s.urlParams) || void 0 === n ? void 0 : n.countryCode;
					return u.d + `--[cc:'${r}']`
				},
				L = Object(i.a)(P, S, (e, t) => Object(a.a)(t, e)),
				v = Object(i.c)({
					listingKey: L,
					listingName: S,
					sort: P
				}),
				_ = Object(o.b)(v, (e, t) => ({
					onLoadMorePosts: () => {
						var s, n;
						return e(c.moreCountryPostsRequested({
							countryCode: (null === (n = null === (s = null == t ? void 0 : t.pageLayer) || void 0 === s ? void 0 : s.urlParams) || void 0 === n ? void 0 : n.countryCode) || "",
							sort: t.match.params.sort || C.W.HOT
						}))
					}
				}));
			class F extends r.a.Component {
				constructor(e) {
					super(e), this.noPosts = () => r.a.createElement(O.EmptyMessage, {
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
					} = this.props, s = r.a.createElement(m.a, {
						className: k.a.sidebar
					}, r.a.createElement(g.a, {
						adComponentOnFakeOverlay: !0
					}));
					return r.a.createElement(f.a, {
						className: Object(d.a)(k.a.Container, this.props.className),
						fitPageToContent: !0,
						content: r.a.createElement(n.Fragment, null, r.a.createElement(l.a, null), r.a.createElement(p.a, {
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
			t.default = j(_(Object(y.c)(F)))
		},
		"./src/redditGQL/operations/CountrySiteHomeFeed.json": function(e) {
			e.exports = JSON.parse('{"id":"c628dcc63b33"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CountryPage.2c0ab3de2d8ee0f1586d.js.map