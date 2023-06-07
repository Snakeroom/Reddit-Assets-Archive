// https://www.redditstatic.com/desktop2x/CountryPage.fcfa81468db89601ff1e.js
// Retrieved at 6/6/2023, 10:20:03 PM by Reddit Dataminer v1.0.0
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
			const b = async (e, t) => {
				return await Object(p.a)(e, {
					...g,
					variables: t
				})
			};
			var m = s("./src/lib/env/index.ts"),
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
								Object(m.b)() || console.warn(t), y.c.captureMessage(t);
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
				v = s("./src/reddit/models/Toast/index.ts"),
				k = s("./src/reddit/selectors/experiments/countrySites.ts"),
				P = s("./src/reddit/selectors/meta.ts");
			const S = Object(o.a)(c.c),
				L = Object(o.a)(c.b),
				_ = Object(o.a)(c.a),
				F = (e, t, s) => async (r, o, i) => {
					let {
						gqlContext: d
					} = i;
					const a = o(),
						c = a.listings.postOrder.ids[e],
						l = a.listings.postOrder.api.error[e];
					if (a.listings.postOrder.api.pending[e] || c && !l) return;
					const p = {
						languageCode: t,
						countryCode: s
					};
					r(S({
						key: e
					}));
					const g = await b(d(), p);
					Object(P.d)(a) && t && Object(k.f)(a) && await Object(j.a)(t, r);
					const {
						data: m
					} = g.body, y = `error-${e}`;
					if (g.ok && m) {
						const t = o(),
							s = h(m);
						r(L({
							key: e,
							meta: t.meta,
							...s
						})), r(u.g(y))
					} else r(_({
						key: e,
						error: g.error
					})), r(u.f({
						id: y,
						kind: v.b.Error,
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
						p = Object(i.a)(c.d, r.bb.HOT, {
							countryCode: o,
							languageCode: u
						});
					t(Object(l.n)({
						title: Object(a.a)(n, Object(d.e)())
					})), await t(F(p, u, o))
				}, T = Object(o.a)(c.g), q = Object(o.a)(c.f), H = Object(o.a)(c.e), I = e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n;
					const d = s(),
						a = Object(i.a)(c.d, r.bb.HOT, {
							countryCode: e.countryCode,
							languageCode: e.languageCode
						}),
						l = d.listings.postOrder.loadMore[a];
					if (l) {
						const n = d.listings.postOrder.api.pending[a],
							r = d.listings.postOrder.fetchedTokens,
							i = r[a] && r[a][l.token] || !1;
						if (!n && !i) {
							t(T({
								key: a,
								fetchedToken: l.token
							}));
							const n = {
									languageCode: e.languageCode,
									countryCode: e.countryCode,
									after: l.token
								},
								r = await b(o(), n),
								{
									data: i
								} = r.body;
							if (r.ok && i) {
								const e = s(),
									n = h(i);
								t(q({
									fetchedToken: l.token,
									key: a,
									meta: e.meta,
									...n
								}))
							} else t(H({
								key: a,
								error: r.error,
								fetchedToken: l.token
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
				b = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				y = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/helpers/trackers/screenview.ts"),
				f = s("./src/reddit/layout/page/Listing/index.tsx"),
				O = s("./src/reddit/pages/Multireddit/index.tsx"),
				C = s("./src/lib/constants/index.ts"),
				h = s("./src/reddit/pages/CountrySitePage/index.m.less"),
				j = s.n(h);
			const v = Object(y.v)({
					pageLayer: e => e
				}),
				k = (e, t) => {
					let {
						match: s
					} = t;
					return s.params.sort || C.bb.HOT
				},
				P = (e, t) => {
					var s, n, r, o;
					const i = null === (n = null === (s = null == t ? void 0 : t.pageLayer) || void 0 === s ? void 0 : s.urlParams) || void 0 === n ? void 0 : n.countryCode,
						d = null === (o = null === (r = null == t ? void 0 : t.pageLayer) || void 0 === r ? void 0 : r.urlParams) || void 0 === o ? void 0 : o.languageCode,
						a = i ? `${d}-${i}` : `${d}`;
					return l.d + "--[cc:" + `'${a}']`
				},
				S = Object(i.a)(k, P, (e, t) => Object(a.a)(t, e)),
				L = Object(i.c)({
					listingKey: S,
					listingName: P,
					sort: k
				}),
				_ = Object(o.b)(L, (e, t) => ({
					onLoadMorePosts: () => {
						var s, n, r, o;
						return e(c.moreInternationalSitePostsRequested({
							languageCode: (null === (n = null === (s = null == t ? void 0 : t.pageLayer) || void 0 === s ? void 0 : s.urlParams) || void 0 === n ? void 0 : n.languageCode) || "",
							countryCode: (null === (o = null === (r = null == t ? void 0 : t.pageLayer) || void 0 === r ? void 0 : r.urlParams) || void 0 === o ? void 0 : o.countryCode) || "",
							sort: t.match.params.sort || C.bb.HOT
						}))
					}
				}));
			class F extends r.a.Component {
				constructor(e) {
					super(e), this.noPosts = () => r.a.createElement(O.EmptyMessage, {
						containsSubreddits: !0
					}), this.onListingViewed = (e, t) => Object(x.e)({
						key: this.props.listingKey,
						sort: this.props.sort,
						timerType: t,
						timerMillis: e,
						timeSort: C.oc
					})
				}
				render() {
					const {
						listingKey: e,
						listingName: t
					} = this.props, s = r.a.createElement(g.a, {
						className: j.a.sidebar
					}, r.a.createElement(b.a, {
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
			t.default = v(_(Object(m.c)(F)))
		},
		"./src/redditGQL/operations/CountrySiteHomeFeed.json": function(e) {
			e.exports = JSON.parse('{"id":"e36801651a7f"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CountryPage.fcfa81468db89601ff1e.js.map