// https://www.redditstatic.com/desktop2x/CountryPage.9298d6453e951d957032.js
// Retrieved at 3/28/2022, 10:30:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CountryPage"], {
		"./src/reddit/actions/pages/countrySite/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "countrySiteHomeFeedPending", (function() {
				return S
			})), s.d(t, "countrySiteHomeFeedLoaded", (function() {
				return L
			})), s.d(t, "countrySiteHomeFeedFailed", (function() {
				return _
			})), s.d(t, "requestInternationalSiteHomeFeed", (function() {
				return F
			})), s.d(t, "internationalSiteHomePageRequested", (function() {
				return w
			})), s.d(t, "moreCountrySitePostsPending", (function() {
				return T
			})), s.d(t, "moreCountrySitePostsLoaded", (function() {
				return q
			})), s.d(t, "moreCountrySitePostsFailed", (function() {
				return H
			})), s.d(t, "moreInternationalSitePostsRequested", (function() {
				return I
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
				f = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				O = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				C = s("./src/reddit/models/Post/index.ts"),
				h = e => {
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
							} = s && Object(f.a)(s);
							t.posts[n.id] = n, r && (t.posts[r.id] = r), Object(C.n)(s) && (t.subreddits[s.subreddit.id] || (t.subreddits[s.subreddit.id] = Object(O.a)(s.subreddit)), t.postFlair[s.subreddit.id] || (t.postFlair[s.subreddit.id] = Object(x.a)(s.subreddit)))
						}
					} else t.pageInfo = {
						endCursor: null,
						hasNextPage: !1,
						hasPreviousPage: !1,
						startCursor: null
					};
					return t.postIds.length && (t.dist = t.postIds.length), t.pageInfo.hasNextPage && (t.token = t.pageInfo.endCursor || ""), t
				},
				j = s("./src/reddit/helpers/locales.ts"),
				k = s("./src/reddit/models/Toast/index.ts"),
				v = s("./src/reddit/selectors/experiments/countrySites.ts"),
				P = s("./src/reddit/selectors/meta.ts");
			const S = Object(o.a)(c.c),
				L = Object(o.a)(c.b),
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
					r(S({
						key: e
					}));
					const p = await m(i(), l);
					Object(P.d)(d) && t && Object(v.e)(d) && await Object(j.a)(t, r);
					const {
						data: g
					} = p.body, b = `error-${e}`;
					if (p.ok && g) {
						const t = o(),
							s = h(g);
						r(L({
							key: e,
							meta: t.meta,
							...s
						})), r(u.g(b))
					} else r(_({
						key: e,
						error: p.error
					})), r(u.f({
						id: b,
						kind: k.b.Error,
						text: n.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "36ypKx"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1XMjgA"
						}),
						buttonAction: F(e, t, s)
					}))
				}, w = e => async (t, s) => {
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
				}, T = Object(o.a)(c.g), q = Object(o.a)(c.f), H = Object(o.a)(c.e), I = e => async (t, s, {
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
							t(T({
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
									n = h(i);
								t(q({
									fetchedToken: a.token,
									key: d,
									meta: e.meta,
									...n
								}))
							} else t(H({
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
				f = s("./src/reddit/layout/page/Listing/index.tsx"),
				O = s("./src/reddit/pages/Multireddit/index.tsx"),
				C = s("./src/lib/constants/index.ts"),
				h = s("./src/reddit/pages/CountrySitePage/index.m.less"),
				j = s.n(h);
			const k = Object(y.u)({
					pageLayer: e => e
				}),
				v = (e, {
					match: t
				}) => t.params.sort || C.W.HOT,
				P = (e, t) => {
					var s, n, r, o;
					const i = null === (n = null === (s = null == t ? void 0 : t.pageLayer) || void 0 === s ? void 0 : s.urlParams) || void 0 === n ? void 0 : n.countryCode,
						d = null === (o = null === (r = null == t ? void 0 : t.pageLayer) || void 0 === r ? void 0 : r.urlParams) || void 0 === o ? void 0 : o.languageCode,
						a = i ? `${d}-${i}` : `${d}`;
					return l.d + `--[cc:'${a}']`
				},
				S = Object(i.a)(v, P, (e, t) => Object(a.a)(t, e)),
				L = Object(i.c)({
					listingKey: S,
					listingName: P,
					sort: v
				}),
				_ = Object(o.b)(L, (e, t) => ({
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
					} = this.props, s = r.a.createElement(g.a, {
						className: j.a.sidebar
					}, r.a.createElement(m.a, {
						adComponentOnFakeOverlay: !0
					}));
					return r.a.createElement(f.a, {
						className: Object(d.a)(j.a.Container, this.props.className),
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
			t.default = k(_(Object(b.c)(F)))
		},
		"./src/redditGQL/operations/CountrySiteHomeFeed.json": function(e) {
			e.exports = JSON.parse('{"id":"f5e4dbb702a0"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CountryPage.9298d6453e951d957032.js.map