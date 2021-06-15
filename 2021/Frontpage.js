// https://www.redditstatic.com/desktop2x/Frontpage.64bbd63bac3d0f53713e.js
// Retrieved at 6/15/2021, 3:40:09 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Frontpage"], {
		"./node_modules/lodash/_arraySampleSize.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseClamp.js"),
				r = s("./node_modules/lodash/_copyArray.js"),
				a = s("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, t) {
				return a(r(e), n(t, 0, e.length))
			}
		},
		"./node_modules/lodash/_arrayShuffle.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_copyArray.js"),
				r = s("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e) {
				return r(n(e))
			}
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, s) {
				return e == e && (void 0 !== s && (e = e <= s ? e : s), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseSampleSize.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseClamp.js"),
				r = s("./node_modules/lodash/_shuffleSelf.js"),
				a = s("./node_modules/lodash/values.js");
			e.exports = function(e, t) {
				var s = a(e);
				return r(s, n(t, 0, s.length))
			}
		},
		"./node_modules/lodash/_baseShuffle.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_shuffleSelf.js"),
				r = s("./node_modules/lodash/values.js");
			e.exports = function(e) {
				return n(r(e))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, t) {
				var s = -1,
					r = e.length,
					a = r - 1;
				for (t = void 0 === t ? r : t; ++s < t;) {
					var o = n(s, a),
						i = e[o];
					e[o] = e[s], e[s] = i
				}
				return e.length = t, e
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arraySampleSize.js"),
				r = s("./node_modules/lodash/_baseSampleSize.js"),
				a = s("./node_modules/lodash/isArray.js"),
				o = s("./node_modules/lodash/_isIterateeCall.js"),
				i = s("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, s) {
				return t = (s ? o(e, t, s) : void 0 === t) ? 1 : i(t), (a(e) ? n : r)(e, t)
			}
		},
		"./node_modules/lodash/shuffle.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayShuffle.js"),
				r = s("./node_modules/lodash/_baseShuffle.js"),
				a = s("./node_modules/lodash/isArray.js");
			e.exports = function(e) {
				return (a(e) ? n : r)(e)
			}
		},
		"./src/reddit/actions/frontpage/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "frontpagePending", (function() {
				return ie
			})), s.d(t, "frontpageLoaded", (function() {
				return ce
			})), s.d(t, "frontpageFailed", (function() {
				return de
			})), s.d(t, "frontpageDataRequested", (function() {
				return le
			})), s.d(t, "frontpageRequestedHelper", (function() {
				return ue
			})), s.d(t, "frontpageRequested", (function() {
				return pe
			})), s.d(t, "frontpageReloaded", (function() {
				return he
			})), s.d(t, "morePostsPending", (function() {
				return ge
			})), s.d(t, "morePostsLoaded", (function() {
				return fe
			})), s.d(t, "morePostsFailed", (function() {
				return ye
			})), s.d(t, "morePostsRequested", (function() {
				return xe
			})), s.d(t, "refreshFeed", (function() {
				return _e
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/pick.js"),
				a = s.n(r),
				o = s("./src/lib/getParsedUserAgent/index.ts"),
				i = s("./src/reddit/actions/actionBarAnimation/index.ts"),
				c = s("./src/reddit/actions/focusedVerticals/index.ts"),
				d = s("./src/reddit/components/CountAnimation/helpers.ts"),
				l = s("./src/reddit/constants/experiments.ts"),
				u = s("./src/lib/base64/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/makeGqlRequest/index.ts"),
				b = s("./src/lib/performanceTimings/index.tsx"),
				h = s("./src/reddit/constants/graphql.ts"),
				g = s("./src/reddit/helpers/getPostLimitForMobile/index.ts"),
				f = s("./src/lib/env/index.ts"),
				y = s("./src/lib/sentry/index.ts"),
				x = s("./src/reddit/models/Live/index.ts"),
				_ = s("./src/reddit/models/Post/index.ts"),
				k = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				v = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				j = s("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				O = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				N = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				E = s("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				C = s("./src/reddit/selectors/meta.ts"),
				S = s("./src/reddit/selectors/platform.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				w = s("./src/redditGQL/operations/Frontpage.json");
			const A = (e, t) => {
					const {
						after: s,
						dist: n,
						isMobile: r,
						layout: a,
						limit: o,
						sort: i,
						t: c
					} = t, d = Object(P.R)(e) || Object(P.K)(e), l = Object(S.o)(e), p = Object.values(m.y).map(e => e), b = Object(C.b)(e), f = p.includes(b) ? b : m.y.Everywhere, y = {
						adContext: {
							layout: a ? a.toUpperCase() : h.a.Card,
							reddaid: e.user.reddaid,
							distance: n
						},
						forceGeopopular: !0,
						includeCommunityDUs: !1,
						includeFeaturedAnnouncements: !0,
						includeLiveEvents: !0,
						includeIdentity: d && !e.user.account,
						includePostRecommendations: !1,
						includeSubredditQuestions: d,
						recentPostIds: e.posts.recent,
						region: f
					};
					return i && (y.sort = i.toUpperCase()), c && (y.range = c.toUpperCase()), r ? y.pageSize = Object(g.a)(a) : o && (y.pageSize = o), l && l.ad && (y.forceAds = {
						ad: l.ad
					}), s && (y.after = Object(u.a)(s)), y
				},
				T = async (e, t, s, n) => {
					const r = Date.now(),
						a = await ((e, t) => Object(p.a)(e, {
							...w,
							variables: t
						}, {
							traceRequestName: "get_frontpage"
						}))(e, t),
						o = Date.now();
					let i;
					try {
						const e = Date.now();
						i = (({
							trendingSubreddits: e = [],
							identity: t,
							home: s,
							featuredAnnouncements: n,
							recentPosts: r = []
						}) => {
							const a = [],
								o = [];
							let i;
							const c = {
									postIds: [],
									postInstances: {},
									posts: {},
									postFlair: {},
									profiles: {},
									subreddits: {}
								},
								d = e => {
									if (c.posts[e.id]) return e.id;
									const t = Object(v.e)(e);
									c.posts[t.id] = t;
									const {
										crosspostRoot: s
									} = e;
									s && s.type === _.a.Post && s.postInfo && d(s.postInfo);
									let n = t.id;
									if (Object(_.l)(e)) c.profiles[e.profile.id] || (c.profiles[e.profile.id] = Object(O.a)(e.profile));
									else if (Object(_.m)(e)) c.subreddits[e.subreddit.id] || (c.subreddits[e.subreddit.id] = Object(N.a)(e.subreddit)), c.postFlair[e.subreddit.id] || (c.postFlair[e.subreddit.id] = Object(k.a)(e.subreddit));
									else if (Object(_.h)(e)) {
										const s = Object(v.b)(e);
										if (!s) return null;
										n = s, c.posts[s] = {
											...t,
											id: s,
											permalink: `${t.permalink}?instanceId=${encodeURIComponent(s)}`
										}, c.posts[t.id] || (c.posts[t.id] = {
											...t,
											events: []
										}), c.postInstances[e.id] || (c.postInstances[e.id] = []), c.postInstances[e.id].push(s)
									}
									return n
								};
							for (const p of e) {
								const e = Object(N.a)(p);
								c.subreddits[e.id] = e, a.push(e.id)
							}
							for (const {
									node: p
								} of s.elements.edges)
								if (Object(_.k)(p)) {
									const e = d(p);
									e && c.postIds.push(e)
								} else if (Object(x.c)(p) && !i) i = p;
							else {
								const e = `Received unhandled element type when processing frontpage data: "${p.__typename}"`;
								Object(f.b)() || console.warn(e), y.c.captureMessage(e)
							}
							for (const p of r) {
								if (!p) continue;
								const e = d(p);
								e && o.push(e)
							}
							const l = c.postIds.length - 1,
								u = l >= 0 ? c.postIds[l] : "",
								m = s.elements.dist;
							return {
								...c,
								account: t && Object(E.a)(t) || null,
								featuredLiveThread: i,
								announcements: n,
								preferences: t && t.preferences && Object(j.a)(t.preferences, t.interactions) || null,
								...0 !== a.length && {
									trendingSubredditIds: a
								},
								...0 !== o.length && {
									recentPostIds: o
								},
								token: u,
								...null !== m && {
									dist: m
								}
							}
						})(a.body.data);
						const t = Date.now(),
							c = [{
								duration: o - r,
								logKeyType: b.a.gqlFetchTiming
							}, {
								duration: t - e,
								logKeyType: b.a.gqlNormalizationTiming
							}];
						Object(b.h)({
							name: m.q.FRONTPAGE,
							isLoggedIn: s,
							metrics: c,
							statsdPathsForExperiments: n
						})
					} catch (c) {}
					return {
						...a,
						body: i
					}
				};
			var I = s("./src/lib/pageTitle.ts"),
				D = s("./src/reddit/actions/login.ts"),
				L = s("./src/reddit/actions/platform.ts"),
				F = s("./src/reddit/actions/toaster.ts"),
				B = s("./src/reddit/constants/page.ts"),
				R = s("./src/reddit/constants/parameters.ts"),
				U = s("./src/reddit/constants/postLayout.ts"),
				M = s("./src/reddit/contexts/PageLayer/index.tsx"),
				W = s("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				q = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				G = s("./src/reddit/models/Toast/index.ts"),
				V = s("./src/reddit/selectors/experiments/index.ts"),
				K = s("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				H = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				Q = s("./src/reddit/selectors/frontpage.ts"),
				J = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				z = s("./src/reddit/selectors/runTimeEnvVars.ts"),
				Z = s("./src/lib/makeActionCreator/index.ts"),
				X = s("./src/lib/makeListingKey/index.ts"),
				Y = s("./src/reddit/actions/ads/index.ts"),
				$ = s("./src/reddit/helpers/chooseVariant/index.ts"),
				ee = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				te = s("./src/reddit/actions/seo/linksModule.ts"),
				se = s("./src/reddit/selectors/seo/linksModule.ts"),
				ne = s("./src/reddit/actions/publicAccessNetwork/api.ts"),
				re = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				ae = s("./src/reddit/helpers/filterListingResponse/index.ts"),
				oe = s("./src/reddit/actions/frontpage/constants.ts");
			const ie = Object(Z.a)(oe.c),
				ce = Object(Z.a)(oe.b),
				de = Object(Z.a)(oe.a),
				le = (e, t) => async (s, r, a) => {
					var c, u;
					const m = r();
					if (m.listings.postOrder.api.pending[e]) return;
					const p = U.e[Object(M.O)(m, {})];
					t.isMobile = Object(o.e)(m.meta.userAgent), t.recentPostIds = m.posts.recent, t.layout = p, t.useMockData = !!m.platform.currentPage && (!!m.platform.currentPage.queryParams.useMockData && Object(z.b)(m)), s(ie({
						key: e
					})); {
						const e = m.platform.currentPage,
							s = e && e.url;
						s && (t.clickUrl = s)
					}
					const h = null === (u = null === (c = Object(S.b)(m)) || void 0 === c ? void 0 : c.routeMatch) || void 0 === u ? void 0 : u.route.chunk,
						g = Object(P.K)(m),
						f = await Object(b.i)(() => T(a.gqlContext(), A(m, t), Object(P.R)(m), t.statsdPathsForExperiments), {
							name: "fetchFrontpageData",
							isLoggedIn: g,
							page: h
						});
					s(Object(L.m)(f.status));
					const y = `error-${e}`;
					if (f.ok) {
						const t = f.body;
						if (s(ce({
								key: e,
								meta: m.meta,
								...t
							})), Object(H.b)(m)) {
							const {
								postIds: e,
								posts: n
							} = t, r = Object(V.d)(m, {
								experimentName: l.Hc
							});
							s(Object(i.a)(Object(d.c)(e, n, null == r ? void 0 : r.variant)))
						}
						s(F.g(y)), s(Object(Y.b)(ee.a.FRONTPAGE))
					} else s(de({
						error: f.error,
						key: e,
						...f.body
					})), s(F.f({
						id: y,
						kind: G.b.Error,
						text: n.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "36ypKx"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1XMjgA"
						}),
						buttonAction: le(e, t)
					}))
				}, ue = (e, t) => async (s, n) => {
					const r = n(),
						o = Object(Q.a)(r),
						{
							sort: i = o
						} = e.params,
						c = Object(X.a)(B.a, i, e.queryParams),
						d = r.listings.postOrder.ids[c],
						l = r.listings.postOrder.api.error[c],
						u = r.listings.postOrder.api.pending[c],
						p = R.x in e.queryParams && e.queryParams[R.x].toUpperCase() || "",
						b = p in m.bc && m.bc[p];
					if (u || d && !l && !t) return void(d && (s(L.l({
						title: I.c()
					})), r.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						s(Object(Y.b)(ee.a.FRONTPAGE))
					})));
					const h = Object(W.a)(r),
						g = Object(W.b)(h),
						f = [Object(W.c)(h)];
					await s(le(c, {
						...a()(e.queryParams, R.l),
						...a()(e.queryParams, R.k),
						limit: g,
						sort: i,
						statsdPathsForExperiments: f,
						t: Object(q.a)(i, b)
					})), s(L.l({
						title: I.c()
					})), Object($.c)(r, {
						experimentEligibilitySelector: $.a,
						experimentName: "redesign_aa"
					});
					const y = Object(K.a)(r, {});
					Object(K.e)(y) && s(Object(D.j)())
				}, me = () => async (e, t) => {
					var s, n;
					const r = t();
					if (Object(se.a)(r)) return;
					const a = null === (n = null === (s = Object(S.b)(t())) || void 0 === s ? void 0 : s.routeMatch) || void 0 === n ? void 0 : n.route.chunk,
						o = Object(P.K)(r);
					return Object(b.i)(() => e(Object(te.d)()), {
						name: "frontpageLinksRequested",
						page: a,
						isLoggedIn: o
					})
				}, pe = (e, t) => async s => {
					await Promise.all([s(Object(c.b)()), s(ue(e, t)), s(me()), s(Object(ne.c)(re.R))])
				}, be = Object(Z.a)(oe.d), he = e => async (t, s) => {
					const n = s(),
						r = n.platform.currentPage.routeMatch.match;
					Object(J.o)(n) || Object(J.u)(n) || (e || t(be()), await t(pe(r, !0)))
				}, ge = Object(Z.a)(oe.g), fe = Object(Z.a)(oe.f), ye = Object(Z.a)(oe.e), xe = e => async (t, s, {
					gqlContext: n
				}) => {
					const r = s(),
						c = Object(Q.a)(r),
						{
							sort: u = c
						} = e,
						p = r.platform.currentPage ? r.platform.currentPage.queryParams : {},
						b = Object(X.a)(B.a, u, p),
						h = r.listings.postOrder.loadMore[b],
						g = p[R.x] ? p[R.x].toUpperCase() : "",
						f = g in m.bc && m.bc[g];
					if (h) {
						const e = r.listings.postOrder.api.pending[b],
							s = r.listings.postOrder.fetchedTokens,
							c = !(!s[b] || !s[b][h.token]);
						if (!e && !c) {
							t(ge({
								key: b,
								fetchedToken: h.token
							}));
							const e = !!r.platform.currentPage && !!r.platform.currentPage.queryParams.useMockData,
								s = Object(W.a)(r),
								c = U.a,
								m = [Object(W.c)(s)],
								g = {
									after: h.token,
									dist: h.dist,
									...a()(p, R.l),
									isMobile: Object(o.e)(r.meta.userAgent),
									limit: c,
									sort: u,
									t: Object(q.a)(u, f),
									layout: U.e[Object(M.O)(r, {})],
									useMockData: e
								}; {
								const e = r.platform.lastPage,
									t = e && e.url;
								t && (g.clickUrl = t)
							}
							const y = () => T(n(), A(r, g), Object(P.R)(r), m),
								x = await y(),
								_ = {
									...x.body,
									...Object(ae.a)(r, b, x.body)
								};
							if (x.ok) {
								if (t(fe({
										key: b,
										fetchedToken: h.token,
										meta: r.meta,
										..._
									})), Object(H.b)(r)) {
									const {
										postIds: e,
										posts: s
									} = _, n = Object(V.d)(r, {
										experimentName: l.Hc
									});
									t(Object(i.a)(Object(d.c)(e, s, null == n ? void 0 : n.variant)))
								}
							} else t(ye({
								key: b,
								error: x.error,
								fetchedToken: h.token,
								..._
							}))
						}
					}
				}, _e = e => async (t, s) => {
					const n = s(),
						r = Object(Q.a)(n),
						{
							sort: a = r
						} = e,
						o = n.platform.currentPage ? n.platform.currentPage.queryParams : {},
						i = Object(X.a)(B.a, a, o),
						c = o[R.x] ? o[R.x].toUpperCase() : "",
						d = c in m.bc && m.bc[c],
						l = Object(W.a)(n),
						u = Object(W.b)(l);
					await t(le(i, {
						limit: u,
						sort: a,
						t: Object(q.a)(a, d)
					}))
				}
		},
		"./src/reddit/actions/subreddit/topSubreddits.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/subreddit/constants.ts"),
				a = s("./src/reddit/constants/subredditLeaderboard.ts"),
				o = s("./src/reddit/endpoints/subreddit/local.ts"),
				i = s("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				c = s("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts");
			const d = Object(n.a)(r.m),
				l = Object(n.a)(r.l),
				u = Object(n.a)(r.k),
				m = Object(n.a)(r.a),
				p = Object(n.a)(r.b),
				b = Object(n.a)(r.c),
				h = (e, t) => async (s, n, {
					gqlContext: r
				}) => {
					s(d());
					const h = t === a.l ? async function() {
						const t = await Object(o.a)(r(), e);
						if (!t.ok) {
							const e = t.error;
							return s(u({
								error: e
							})), null
						}
						const n = t.body,
							a = n && n.data && n.data.nearbySubreddits;
						return Object(c.a)(a)
					}: async function() {
						const t = await Object(i.a)(r(), e);
						if (!t.ok) {
							const e = t.error;
							return void s(u({
								error: e
							}))
						}
						const n = t.body,
							a = n && n.data && n.data.subredditLeaderboard;
						return Object(c.b)(a)
					}, g = await h();
					if (!g) return;
					const {
						pageInfo: f,
						rankings: y,
						subreddits: x
					} = g;
					s(m({
						subreddits: x
					})), s(p({
						categoryRankingsKey: t,
						rankings: y
					})), s(b({
						categoryRankingsKey: t,
						pageInfo: f
					})), s(l())
				}
		},
		"./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/ScrollChildFactory.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/LRUCache/index.ts");
			class o {
				constructor() {
					this.listenerMap = {}
				}
				_resetListenerMap() {
					this.listenerMap = {}
				}
				_resetKey(e) {
					this.listenerMap[e] = []
				}
				reset(e) {
					e ? this._resetKey(e) : this._resetListenerMap()
				}
				addListeners(e, ...t) {
					this.listenerMap[e] || (this.listenerMap[e] = []), this.listenerMap[e].push(...t)
				}
				removeListeners(e, ...t) {
					if (!this.listenerMap[e] || !this.listenerMap[e].length) return !1;
					const s = t.length,
						n = this.listenerMap[e].length;
					return this.listenerMap[e] = this.listenerMap[e].filter(e => !t.includes(e)), this.listenerMap[e].length - n === s
				}
				publish(e) {
					return !(!this.listenerMap[e] || !this.listenerMap[e].length) && (this.listenerMap[e].forEach(e => e()), !0)
				}
			}
			var i = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				c = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/async.tsx"),
				d = s("./src/reddit/constants/page.ts");
			const l = new a.a(50),
				u = e => {
					const {
						numInstance: t,
						layout: s,
						listingKey: n,
						listingPosition: a
					} = e, u = `focused-vertical-recommendation-${t}-${s}-${n}`;
					let m = l.get(u);
					if (m) return m;
					const p = new o;
					return m = {
						estHeight: i.d,
						id: `focused-vertical-recommendation-${t}-${s}-${n}`,
						trackOnEnteredViewport() {
							p.publish(i.b)
						},
						render: () => r.a.createElement(c.a, {
							listingPosition: a,
							numInstance: t,
							listingKey: n,
							listingName: d.b,
							pubsub: p
						})
					}, l.set(u, m), m
				}
		},
		"./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-DiscoveryUnit-CommunityCrossPollination-FocusedVerticals-CommunityDescWithPosts",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-DiscoveryUnit-CommunityCrossPollination-FocusedVerticals-CommunityDescWithPosts").then(s.bind(null, "./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/FocusedVerticals/CommunityDescWithPosts/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/FocusedVerticals/CommunityDescWithPosts/index.tsx"
				}
			});
			t.a = r
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3lILa1kmfAauhn7UzHzjLJ",
				heroContainer: "_2xvhS-vDti9NRsRHMeqFmX",
				smallContainer: "_11h2c3EwgJFkGto36dozz7",
				oldContainer: "_24S-GP9dX3BODxJwehVvRx",
				header: "_3UiOKr6dA-zB_4O4l14Icx",
				bodyHidePadding: "M4vA4bj3WWpggduxPTpBA",
				body: "_1l2RfnlEvwmRPfDwe46NRR"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/DiscoveryUnit/Layout/index.m.less"),
				i = s.n(o);
			class c extends r.a.Component {
				render() {
					return r.a.createElement("div", {
						className: Object(a.a)(i.a.heroContainer, this.props.className)
					}, r.a.createElement("div", {
						className: Object(a.a)(i.a.header, this.props.headerClassName)
					}, this.props.header), r.a.createElement("div", {
						className: Object(a.a)(this.props.hidePadding ? i.a.bodyHidePadding : i.a.body, this.props.bodyClassName)
					}, this.props.children))
				}
			}
			t.a = c
		},
		"./src/reddit/components/FakeBannerAd/index.m.less": function(e, t, s) {
			e.exports = {
				BannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				bannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				FakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_",
				fakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_"
			}
		},
		"./src/reddit/components/FakeBannerAd/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./src/config.ts"),
				c = s("./src/reddit/components/FakeBannerAd/index.m.less"),
				d = s.n(c),
				l = s("./src/lib/lessComponent.tsx");
			const u = l.a.wrapped(e => o.a.createElement("div", {
					className: e.className,
					ref: e.bannerRef
				}, e.children), "BannerContainer", d.a),
				m = l.a.wrapped(e => o.a.createElement("img", {
					className: e.className,
					src: e.src
				}), "FakeBannerAdImage", d.a),
				p = "GoogleAd HomeAds InArticleAd LeftAd SidebarAd ad-300-250 ad-banner adbar adbox1 ads-area adsense-ad box_ad googad",
				b = .5;
			class h extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.bannerRef = o.a.createRef(), this.state = {
						sentOncePerRender: !1
					}, this.handleVisibilityChange = e => {
						if (!(e.intersectionRatio < b || this.state.sentOncePerRender)) {
							const e = this.bannerRef && this.bannerRef.current,
								t = e ? e.offsetWidth : null,
								s = e ? e.offsetHeight : null;
							this.props.trackSidebarHouseAdViewability(t, s), this.setState({
								sentOncePerRender: !0
							})
						}
					}
				}
				render() {
					const {
						href: e,
						img: t
					} = this.props, {
						sentOncePerRender: s
					} = this.state, a = s ? o.a.createElement(m, {
						src: i.a.assetPath + t
					}) : o.a.createElement(r.a, {
						onChange: this.handleVisibilityChange,
						threshold: b
					}, o.a.createElement(m, {
						src: i.a.assetPath + t
					}));
					return o.a.createElement(u, {
						bannerRef: this.bannerRef,
						className: p,
						"data-before-content": n.fbt._("advertisement", null, {
							hk: "4b2OD7"
						})
					}, o.a.createElement("a", {
						href: i.a.redditUrl + e,
						target: "_blank",
						rel: "noopener noreferrer"
					}, a))
				}
			}
		},
		"./src/reddit/components/FeaturedLiveEntrypoint/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/live.ts");
			const c = Object(n.a)({
					resolved: {},
					chunkName: () => "FeaturedLiveEntrypointAnnouncementsCarousel",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("FeaturedLiveEntrypointAnnouncementsCarousel").then(s.bind(null, "./src/reddit/components/FeaturedLiveEntrypoint/AnnouncementsCarousel/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/FeaturedLiveEntrypoint/AnnouncementsCarousel/index.tsx"
					}
				}),
				d = Object(n.a)({
					resolved: {},
					chunkName: () => "FeaturedLiveEntrypointAnnouncement",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("FeaturedLiveEntrypointAnnouncement").then(s.bind(null, "./src/reddit/components/FeaturedLiveEntrypoint/LiveThread/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/FeaturedLiveEntrypoint/LiveThread/index.tsx"
					}
				}),
				l = () => {
					const e = Object(o.e)(i.a, (e, t) => e && t && e[0].id === t[0].id || !1),
						t = Object(o.e)(i.b);
					return t ? a.a.createElement(d, {
						featuredLiveThread: t
					}) : e && e.length ? a.a.createElement(c, {
						announcements: e
					}) : null
				};
			t.a = l
		},
		"./src/reddit/components/FrontpageSidebar/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/lodash/random.js"),
				r = s.n(n),
				a = s("./node_modules/lodash/shuffle.js"),
				o = s.n(a),
				i = s("./node_modules/react/index.js"),
				c = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				u = s("./node_modules/reselect/es/index.js"),
				m = s("./src/reddit/actions/subreddit.ts"),
				p = s("./src/reddit/actions/subreddit/topSubreddits.ts"),
				b = s("./src/reddit/components/IdCard/async.tsx"),
				h = s("./node_modules/react-router-redux/es/index.js"),
				g = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				f = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				y = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/icons/fonts/index.tsx"),
				_ = s("./src/reddit/components/PremiumCTA/index.m.less"),
				k = s.n(_);
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class j extends c.a.Component {
				render() {
					const {
						className: e,
						onClickPremium: t
					} = this.props;
					return c.a.createElement(g.a, null, c.a.createElement(f.a, {
						className: e,
						contentOnly: !0
					}, c.a.createElement("div", {
						className: k.a.wrapper
					}, c.a.createElement("div", {
						className: k.a.contentWrapper
					}, c.a.createElement(x.a, {
						name: "premium",
						isFilled: !0,
						className: k.a.icon
					}), c.a.createElement("div", {
						className: k.a.content
					}, c.a.createElement("div", {
						className: k.a.title
					}, v._("Reddit Premium", null, {
						hk: "39JIKQ"
					})), c.a.createElement("div", {
						className: k.a.description
					}, v._("The best Reddit experience, with monthly Coins", null, {
						hk: "2n1ct3"
					})))), c.a.createElement(y.h, {
						isFullWidth: !0,
						onClick: t
					}, v._("Try Now", null, {
						hk: "2HeiOg"
					})))))
				}
			}
			var O = Object(d.b)(void 0, e => ({
					onClickPremium: () => e(Object(h.b)("/premium"))
				}))(j),
				N = s("./node_modules/fbt/lib/FbtPublic.js"),
				E = s("./src/lib/classNames/index.ts"),
				C = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				S = s("./src/reddit/controls/InternalLink/index.tsx"),
				P = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				w = s("./src/reddit/components/SEOSidebarLinks/index.m.less"),
				A = s.n(w);
			const T = ({
					to: e,
					title: t
				}) => c.a.createElement(C.a, {
					subredditName: t,
					tooltipPosition: ["right", "top"]
				}, c.a.createElement(S.a, {
					className: A.a.Link,
					to: e,
					title: t
				}, t)),
				I = ({
					title: e,
					isOpened: t,
					isExpanded: s,
					children: n,
					onToggle: r,
					onExpand: a
				}) => c.a.createElement("div", {
					className: Object(E.a)(A.a.Section, {
						[A.a.opened]: t,
						[A.a.expanded]: s
					})
				}, c.a.createElement("div", {
					className: A.a.SectionHeader,
					onClick: r
				}, c.a.createElement("div", {
					className: A.a.SectionTitle
				}, e), c.a.createElement(P.a, {
					className: A.a.SectionChevron
				})), c.a.createElement("div", {
					className: A.a.SectionBody
				}, c.a.createElement("div", {
					className: A.a.SectionContent
				}, n), c.a.createElement("div", {
					className: A.a.SectionFooter
				}, c.a.createElement(y.o, {
					className: A.a.SectionButton,
					onClick: a
				}, s ? N.fbt._("Less", null, {
					hk: "PF0lJ"
				}) : N.fbt._("See more", null, {
					hk: "439kAh"
				})))));
			class D extends c.a.Component {
				constructor() {
					super(...arguments), this.state = {
						openedSection: 0,
						isSectionExpanded: !1
					}, this.onToggle = e => {
						this.setState(({
							openedSection: t
						}) => t === e ? {
							openedSection: -1,
							isSectionExpanded: !1
						} : {
							openedSection: e,
							isSectionExpanded: !1
						})
					}, this.onExpand = () => {
						this.setState(({
							isSectionExpanded: e
						}) => ({
							isSectionExpanded: !e
						}))
					}, this.renderLink = ({
						url: e,
						title: t
					}) => c.a.createElement(T, {
						key: t,
						to: e,
						title: t
					}), this.renderSection = (e, t) => c.a.createElement(I, {
						key: e.title,
						title: e.title,
						isOpened: this.isOpened(t),
						isExpanded: this.isExpanded(t),
						onToggle: () => this.onToggle(t),
						onExpand: this.onExpand
					}, e.links.map(this.renderLink))
				}
				isOpened(e) {
					return this.state.openedSection === e
				}
				isExpanded(e) {
					return this.state.isSectionExpanded && this.isOpened(e)
				}
				render() {
					const {
						className: e,
						links: t
					} = this.props;
					if (t) return c.a.createElement(f.a, {
						className: Object(E.a)(A.a.Widget, e),
						contentOnly: !0
					}, t.map(this.renderSection))
				}
			}
			var L = D,
				F = s("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				B = s("./src/reddit/components/SidebarContainer/index.tsx"),
				R = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				U = s("./node_modules/lodash/sampleSize.js"),
				M = s.n(U),
				W = s("./node_modules/request-idle-callback/index.js"),
				q = s("./src/lib/constants/index.ts"),
				G = s("./src/reddit/components/SubredditIcon/index.tsx"),
				V = s("./src/reddit/constants/localStorage.ts"),
				K = s("./src/reddit/contexts/ApiContext.tsx"),
				H = s("./src/reddit/featureFlags/component.tsx"),
				Q = s("./src/reddit/helpers/localStorage/index.ts"),
				J = s("./src/reddit/helpers/name/index.ts"),
				z = s("./src/lib/makeApiRequest/index.ts"),
				Z = s("./src/lib/omitHeaders/index.ts"),
				X = s("./src/reddit/constants/headers.ts");
			const Y = e => Object(z.a)(Object(Z.a)(e, [X.a]), {
				endpoint: `${e.apiUrl}/api/multi/user/CommunityAdoptionBot/m/adoption_week/`,
				method: q.hb.GET,
				type: "json"
			});
			var $ = s("./src/reddit/components/SubredditAdoptionWidget/index.m.less"),
				ee = s.n($);
			const {
				fbt: te
			} = s("./node_modules/fbt/lib/FbtPublic.js"), se = 3, ne = 30 * q.ib, re = "SubredditAdoption";
			class ae extends c.a.Component {
				constructor() {
					super(...arguments), this.state = {
						subredditNames: []
					}
				}
				async getSubredditForAdoption() {
					let e = ae.cachedData || Object(Q.y)(V.b.SUBREDDITS_FOR_ADOPTION_STORE) || null;
					if (!e || Date.now() - e.fetchedAt > ne) {
						const t = await Y(this.props.apiContext());
						t.ok && (e = {
							subreddits: t.body.data.subreddits.map(e => e.name),
							fetchedAt: Date.now()
						}, Object(Q.yb)(V.b.SUBREDDITS_FOR_ADOPTION_STORE, e))
					}
					return ae.cachedData = e, e ? e.subreddits : []
				}
				componentDidMount() {
					Object(W.requestIdleCallback)(async () => {
						const e = await this.getSubredditForAdoption();
						this.setState({
							subredditNames: M()(e, se)
						})
					})
				}
				render() {
					const {
						subredditNames: e
					} = this.state;
					return e.length ? c.a.createElement("div", {
						className: ee.a.container
					}, c.a.createElement("div", {
						className: ee.a.main
					}, c.a.createElement("div", {
						className: ee.a.title
					}, c.a.createElement(G.b, {
						className: ee.a.icon
					}), te._("International Subreddit Adoption Week", null, {
						hk: "487Ffc"
					})), c.a.createElement("div", {
						className: ee.a.description
					}, te._("{subreddits list} and more are looking for moderators!", [te._param("subreddits list", c.a.createElement("strong", null, e.map(J.c).join(", ") + (e.length > 1 ? "," : "")))], {
						hk: "2Tb946"
					}))), c.a.createElement(y.k, {
						className: ee.a.button,
						to: `/r/${re}?utm_source=reddit&utm_medium=fp_banner&utm_campaign=subreddit_adoption_week`
					}, te._("Go Now", null, {
						hk: "LCCmX"
					}))) : null
				}
			}
			ae.cachedData = null;
			var oe = Object(H.a)("srAdoptionWeek", Object(K.b)(ae)),
				ie = s("./src/reddit/components/TopSubredditsWidget/Container.tsx"),
				ce = s("./src/reddit/actions/post.ts"),
				de = s("./src/reddit/components/MiniPost/index.tsx"),
				le = s("./src/reddit/components/Widgets/Base/index.tsx");
			class ue extends c.a.Component {
				render() {
					return c.a.createElement("div", null, c.a.createElement(le.a, null, this.props.headerText), this.props.posts.map(e => c.a.createElement(de.a, {
						key: e.id,
						postId: e.id
					})))
				}
			}
			var me = ue,
				pe = s("./src/reddit/helpers/overlay/index.ts"),
				be = s("./src/reddit/components/Widgets/Aggregate/RecentPosts/PostsList.m.less"),
				he = s.n(be),
				ge = s("./src/lib/lessComponent.tsx");
			const fe = Object(d.b)(null, (e, t) => ({
					openLightbox: t => () => e(Object(pe.a)(t.permalink)),
					clearLinks: () => e(Object(ce.r)())
				})),
				ye = ge.a.button("ClearButton", he.a);
			class xe extends c.a.Component {
				render() {
					return c.a.createElement(le.b, null, c.a.createElement(me, {
						className: this.props.className,
						headerText: N.fbt._("Recent posts", null, {
							hk: "1olaOT"
						}),
						posts: this.props.posts
					}), c.a.createElement(ye, {
						onClick: this.props.clearLinks
					}, N.fbt._("Clear", null, {
						hk: "1RMjjy"
					})))
				}
			}
			var _e = fe(xe),
				ke = s("./src/reddit/selectors/posts.ts");
			const ve = Object(u.c)({
				recentPosts: ke.O
			});
			var je = Object(d.b)(ve, (e, t) => ({
					openLightbox: t => () => e(Object(pe.a)(t.permalink))
				}))(({
					className: e,
					recentPosts: t
				}) => t && t.length ? c.a.createElement(g.a, null, c.a.createElement(_e, {
					className: e,
					headerText: N.fbt._("Recent posts", null, {
						hk: "1olaOT"
					}),
					posts: t
				})) : null),
				Oe = s("./src/config.ts"),
				Ne = s("./src/lib/env/index.ts"),
				Ee = s("./src/reddit/controls/Chip/index.tsx"),
				Ce = s("./src/reddit/helpers/trackers/widgets.ts"),
				Se = s("./src/reddit/hooks/useTracking.ts");
			const Pe = [{
				getName: () => N.fbt._("Fashion", null, {
					hk: "4tXmOZ"
				}),
				url: "fashion"
			}, {
				getName: () => N.fbt._("Movies", null, {
					hk: "42bzfq"
				}),
				url: "movie"
			}, {
				getName: () => N.fbt._("Television", null, {
					hk: "4CMqPm"
				}),
				url: "television"
			}, {
				getName: () => N.fbt._("Comedy", null, {
					hk: "1ehWvG"
				}),
				url: "comedy"
			}, {
				getName: () => N.fbt._("Books", null, {
					hk: "13uutx"
				}),
				url: "book"
			}, {
				getName: () => N.fbt._("Gaming", null, {
					hk: "2mozPB"
				}),
				url: "gaming"
			}, {
				getName: () => N.fbt._("Science", null, {
					hk: "4u0516"
				}),
				url: "science"
			}, {
				getName: () => N.fbt._("Animals and Pets", null, {
					hk: "3TIGi8"
				}),
				url: "animals_and_pets"
			}, {
				getName: () => N.fbt._("Nature", null, {
					hk: "WhmJu"
				}),
				url: "nature"
			}, {
				getName: () => N.fbt._("Travel", null, {
					hk: "3PHfih"
				}),
				url: "travel"
			}, {
				getName: () => N.fbt._("Sports", null, {
					hk: "3GJvo1"
				}),
				url: "sports"
			}, {
				getName: () => N.fbt._("Memes", null, {
					hk: "4lL42P"
				}),
				url: "internet_culture_and_memes"
			}, {
				getName: () => N.fbt._("Music", null, {
					hk: "15iqrr"
				}),
				url: "music"
			}, {
				getName: () => N.fbt._("Crafts and DIY", null, {
					hk: "1JGKiO"
				}),
				url: "crafts_and_diy"
			}, {
				getName: () => N.fbt._("Technology", null, {
					hk: "2eXPke"
				}),
				url: "technology"
			}, {
				getName: () => N.fbt._("Art", null, {
					hk: "3cl8al"
				}),
				url: "art"
			}, {
				getName: () => N.fbt._("Hobbies", null, {
					hk: "3uC7Vw"
				}),
				url: "hobby"
			}, {
				getName: () => N.fbt._("Gardening", null, {
					hk: "2Uozgr"
				}),
				url: "gardening"
			}, {
				getName: () => N.fbt._("Art Garfunkel", null, {
					hk: "l1iiQ"
				}),
				url: "art_garfunkel"
			}, {
				getName: () => N.fbt._("Tree Frogs", null, {
					hk: "KVS4d"
				}),
				url: "tree_frog"
			}, {
				getName: () => N.fbt._("Adventure Novels", null, {
					hk: "3vbZt6"
				}),
				url: "adventure_novel"
			}, {
				getName: () => N.fbt._("Learning and Education", null, {
					hk: "3wIdG"
				}),
				url: "learning_and_education"
			}, {
				getName: () => N.fbt._("Family", null, {
					hk: "1GgG8Z"
				}),
				url: "family"
			}, {
				getName: () => N.fbt._("Q&A", null, {
					hk: "4En8Hj"
				}),
				url: "qa"
			}, {
				getName: () => N.fbt._("Health", null, {
					hk: "RF6iN"
				}),
				url: "health"
			}, {
				getName: () => N.fbt._("Fitness", null, {
					hk: "JczBr"
				}),
				url: "fitness"
			}, {
				getName: () => N.fbt._("History", null, {
					hk: "2bULhT"
				}),
				url: "history"
			}, {
				getName: () => N.fbt._("Activism", null, {
					hk: "2PWJIy"
				}),
				url: "activism"
			}, {
				getName: () => N.fbt._("Cars", null, {
					hk: "4dnuOx"
				}),
				url: "cars_and_motor_vehicles"
			}, {
				getName: () => N.fbt._("Beauty and Makeup", null, {
					hk: "4ncOsg"
				}),
				url: "beauty_and_makeup"
			}, {
				getName: () => N.fbt._("Philosophy", null, {
					hk: "MNowu"
				}),
				url: "ethics_and_philosophy"
			}, {
				getName: () => N.fbt._("Food and Drink", null, {
					hk: "19vNV9"
				}),
				url: "food_and_drink"
			}, {
				getName: () => N.fbt._("Religion", null, {
					hk: "4aCX5k"
				}),
				url: "religion"
			}, {
				getName: () => N.fbt._("World News", null, {
					hk: "4lETuR"
				}),
				url: "world_news"
			}, {
				getName: () => N.fbt._("Politics", null, {
					hk: "41ePs3"
				}),
				url: "politics"
			}, {
				getName: () => N.fbt._("Meta", null, {
					hk: "1SKBT1"
				}),
				url: "meta_reddit"
			}, {
				getName: () => N.fbt._("Tabletop RPGs", null, {
					hk: "1zUqUF"
				}),
				url: "tabletop_roleplaying_game"
			}, {
				getName: () => N.fbt._("Marketplace and Deals", null, {
					hk: "1qiYgm"
				}),
				url: "marketplace_and_deals"
			}, {
				getName: () => N.fbt._("Finance and Economics", null, {
					hk: "rZrtS"
				}),
				url: "business_economics_and_finance"
			}, {
				getName: () => N.fbt._("Galaxy Quest", null, {
					hk: "1XkOK1"
				}),
				url: "galaxy_quest"
			}, {
				getName: () => N.fbt._("Math", null, {
					hk: "17VRuh"
				}),
				url: "mathematics"
			}, {
				getName: () => N.fbt._("Crypto", null, {
					hk: "1KATZ1"
				}),
				url: "cryptocurrency"
			}];
			var we = s("./src/reddit/components/Widgets/Aggregate/TopicsList/index.m.less"),
				Ae = s.n(we);
			const Te = () => {
					const e = `${Oe.a.assetPath}/img/banner/banner-medium@2x.png`,
						t = N.fbt._("Find Your Next Community!", null, {
							hk: "4tZ6vB"
						}),
						s = {
							backgroundImage: `url(${e})`
						};
					return c.a.createElement("div", {
						className: Ae.a.banner,
						style: s
					}, c.a.createElement("h2", {
						className: Ae.a.bannerText
					}, t))
				},
				Ie = e => `/t/${e}?activeTab=communities`,
				De = e => {
					const t = e.topic.getName();
					return c.a.createElement("div", {
						className: Ae.a.itemContainer
					}, c.a.createElement(Ee.a, {
						to: Ie(e.topic.url),
						onClick: () => e.sendEvent(Object(Ce.c)(t))
					}, t))
				};
			var Le = c.a.memo(e => {
					const t = Object(Se.a)();
					Object(i.useEffect)(() => t(Object(Ce.d)()), []);
					const s = Pe.map(e => ({
						value: e,
						sort: Object(Ne.d)() ? .5 : Math.random()
					})).sort((e, t) => e.sort - t.sort).map(e => e.value).slice(0, 10);
					return c.a.createElement(f.a, {
						className: e.className,
						noGradient: !0,
						styles: e.widget && e.widget.styles,
						widgetKind: e.widget && e.widget.kind
					}, c.a.createElement(Te, null), c.a.createElement("div", {
						className: Ae.a.container
					}, s.map(e => c.a.createElement(De, {
						key: e.url,
						topic: e,
						sendEvent: t
					}))))
				}),
				Fe = s("./src/reddit/constants/experiments.ts"),
				Be = s("./src/reddit/constants/subredditLeaderboard.ts"),
				Re = s("./src/reddit/models/GoodContent/index.ts"),
				Ue = s("./src/reddit/helpers/chooseVariant/index.ts");

			function Me(e) {
				return Object(Ue.c)(e, {
					experimentEligibilitySelector: Ue.a,
					experimentName: Fe.t
				})
			}
			var We = s("./src/reddit/selectors/experiments/utils.ts");
			const qe = Object(u.a)(e => Object(Ue.c)(e, {
					experimentName: Fe.qc,
					experimentEligibilitySelector: Ue.a
				}), We.a),
				Ge = Object(u.a)(qe, e => e === Fe.sc.Enabled);
			var Ve = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				Ke = s("./src/reddit/selectors/user.ts");
			var He = s("./src/reddit/selectors/experiments/uiSimplification.ts"),
				Qe = s("./src/reddit/selectors/seo/linksModule.ts"),
				Je = s("./src/reddit/selectors/subreddit.ts"),
				ze = s("./src/reddit/selectors/subredditLeaderboard.ts");
			s("./src/reddit/components/TopSubredditsWidget/index.tsx"), s("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx");
			var Ze = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				Xe = s("./src/reddit/selectors/meta.ts");
			const Ye = "c1020",
				$e = "videos",
				et = Object(u.c)({
					isMod: Ke.L,
					isLoggedIn: Ke.J,
					shouldShowLocalRecommendations: e => !1 !== e.user.prefs.showLocationBasedRecommendations,
					currentUser: Ke.j,
					frontpageLinks: Qe.b,
					isOver18: Ke.db,
					isUISimplificationAllItemsVariant: He.b,
					isInBFFSLeaderboardExperiment: function(e) {
						return Me(e) === Fe.s.RotateEven
					},
					bffsLeaderboardVariant: Me,
					inRpanTopVideoEntrypointExperiment: Ve.e,
					rankings: e => Object(Je.O)(e, Ye),
					shouldShowTopicsWidget: e => {
						const t = Object(Ve.e)(e),
							s = !!Object(Je.O)(e, Ye);
						return (!t || !s) && (!Object(He.b)(e) && function(e) {
							return Object(Ue.c)(e, {
								experimentEligibilitySelector: Ke.K,
								experimentName: Fe.db
							}) === Fe.Qb
						}(e))
					},
					isNavbarLikeMwebEnabled: l.a,
					locale: Xe.i,
					isInLeaderboardTakeoverExperiment: Ge
				}),
				tt = e => !(!e.currentUser || !e.currentUser.showRecentPosts),
				st = e => !(e.currentUser && (!e.currentUser || e.currentUser.isGold)),
				nt = e => {
					const {
						bffsLeaderboardVariant: t,
						isInBFFSLeaderboardExperiment: s,
						shouldShowLocalRecommendations: n,
						isInLeaderboardTakeoverExperiment: a
					} = e;
					if (a) {
						const e = [...Be.h];
						return {
							category: e[r()(e.length - 1)],
							categories: e
						}
					}
					let i, c, d, l, u;
					s && t === Fe.s.RotateEven ? (i = Be.u, c = Be.n, d = Be.s, l = Be.a) : (i = Be.t, c = Be.j, d = Be.r, l = []), u = [i, ...l, ...d], n && u.unshift(c);
					const m = u[r()(u.length - 1)];
					u = [], m.id !== i.id && u.push(i), n && m.id !== c.id && u.push(c);
					let p = [...l, ...d];
					return p = p.filter(e => e.id !== m.id), u = [...u, ...o()(p).slice(0, 4 - u.length)], {
						category: m,
						categories: u
					}
				};
			class rt extends c.a.Component {
				constructor(e) {
					super(e), this.componentDidMount = async () => {
						this.setState({
							isMounted: !0
						})
					};
					const {
						category: t,
						categories: s
					} = nt(e);
					!e.rankings && e.inRpanTopVideoEntrypointExperiment && e.fetchTopSubreddits(), this.state = {
						isMounted: !1,
						category: t,
						categories: s
					}
				}
				render() {
					let e = 0;
					const {
						className: t,
						frontpageLinks: s,
						isLoggedIn: n,
						isOver18: r,
						listingName: a,
						isUISimplificationAllItemsVariant: o,
						shouldShowTopicsWidget: i,
						isNavbarLikeMwebEnabled: d
					} = this.props, {
						category: l,
						categories: u
					} = this.state, m = !o, p = !o && !d;
					return c.a.createElement(B.a, {
						className: t,
						"data-testid": "frontpage-sidebar"
					}, m && c.a.createElement(ie.a, {
						categories: u,
						category: l,
						first: 5,
						isOver18: r,
						shouldDisplayDelta: !this.props.isMod && l.id !== Be.l,
						to: l.path
					}), c.a.createElement(F.a, {
						placement: q.c.ABOVE_THE_FOLD,
						listingName: a,
						removeSidebarSpacer: !m,
						position: Ze.a.FIRST,
						sizes: q.h,
						placementIndex: e++
					}), st(this.props) && c.a.createElement(O, null), i && c.a.createElement(g.a, null, c.a.createElement(Le, null)), n && c.a.createElement(g.a, null, c.a.createElement(b.a, {
						listingName: a
					})), tt(this.props) && c.a.createElement(je, null), s && p && c.a.createElement(g.a, null, c.a.createElement(L, {
						links: s
					})), c.a.createElement(R.a, {
						adComponent: c.a.createElement(F.a, {
							placement: q.c.BELOW_THE_FOLD,
							listingName: a,
							position: Ze.a.BOTTOM,
							sizes: q.n,
							placementIndex: e++
						})
					}, n && c.a.createElement(oe, null)))
				}
			}
			const at = Object(d.b)(et, e => ({
				fetchTopSubreddits: () => {
					const t = {
							categoryId: Ye,
							filter: {
								includeUnrated: !1,
								isBlacklistedSubredditsExcluded: !0,
								isNsfwExcluded: !0,
								isDiscoverable: !0,
								maxRating: Re.b.PG13
							},
							isOnlyModIncluded: !1
						},
						s = Object(ze.d)(Ye, $e);
					e(Object(p.a)(t, s))
				},
				subredditAboutRequested: t => e(Object(m.u)(t))
			}));
			t.default = at(rt)
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("IdCard").then(s.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/InFeedPostCreation/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-InFeedPostCreation",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-InFeedPostCreation").then(s.bind(null, "./src/reddit/components/InFeedPostCreation/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/InFeedPostCreation/index.tsx"
				}
			})
		},
		"./src/reddit/components/MiniPost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3fWuhJ6bVet7XJT5A0mZM2",
				title: "_2uR1aBUWmKIo8Fcg-D7bPi",
				crowdControlPreview: "_1R-_n2amB7t3lRrMWDZFYz",
				thumbnailContainer: "tN3XUE_42h_qcAw7KSnlh",
				postDetails: "_2mURCICbBWv1kFMX2GPzA_",
				SubredditLink: "_3g8BYpbdZDmGNwV4UIA3GI",
				subredditLink: "_3g8BYpbdZDmGNwV4UIA3GI",
				subAndMeta: "_3GMQrxl5pvXDUEFvUjr9Qh",
				isSingleLine: "dZATEZTPQCHPtvhujPV0L",
				separator: "_2q6RJ3jSwGkeuWcg6aU-nY",
				meta: "KoclPkialOte6pOEsb4vx"
			}
		},
		"./src/reddit/components/MiniPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/prettyPrintNumber/index.ts"),
				l = s("./src/lib/timeAgo/index.ts"),
				u = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				m = s("./src/reddit/components/Thumbnail/index.tsx"),
				p = s("./src/reddit/helpers/overlay/index.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/subreddit.ts"),
				g = s("./src/reddit/components/MiniPost/index.m.less"),
				f = s.n(g);
			const y = Object(i.a)(e => e, b.F, b.d, (e, t, s) => {
					return {
						crosspost: s,
						post: t,
						subredditOrProfile: Object(h.L)(e, {
							identifier: t.belongsTo
						})
					}
				}),
				x = Object(o.b)(y, (e, t) => ({
					openLightbox: t => e(Object(p.a)(t.permalink))
				}));
			class _ extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							containerOnClick: e,
							openLightbox: t,
							openLinksNewTab: s,
							post: n
						} = this.props;
						s ? window.open(n.permalink) : t(n), e && e()
					}, this.onClickSubreddit = e => {
						const {
							openLinksNewTab: t,
							subredditOnClick: s,
							subredditOrProfile: n
						} = this.props;
						e.stopPropagation(), t && n && (e.preventDefault(), window.open(n.url)), s && s()
					}, this.onClickThumbnail = e => {
						const {
							thumbnailOnClick: t
						} = this.props;
						e.stopPropagation(), t && t()
					}
				}
				render() {
					const {
						className: e,
						post: t,
						showSubreddit: s = !1,
						subredditOrProfile: r,
						subredditSameLine: o,
						crowdControlPreview: i
					} = this.props;
					return a.a.createElement("div", {
						className: Object(c.a)(f.a.container, e, i ? f.a.crowdControlPreview : null),
						onClick: this.onClickContainer
					}, a.a.createElement("div", {
						className: f.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, a.a.createElement(m.a, {
						post: t
					})), a.a.createElement("div", {
						className: f.a.postDetails
					}, a.a.createElement("p", {
						className: f.a.title,
						title: t.title
					}, t.title), a.a.createElement("div", {
						className: Object(c.a)(f.a.subAndMeta, {
							[f.a.isSingleLine]: o
						})
					}, s && r && r.displayText && a.a.createElement(u.a, {
						className: f.a.SubredditLink,
						to: r.url,
						onClick: this.onClickSubreddit
					}, r.displayText), o && a.a.createElement("div", {
						className: f.a.separator
					}), !i && a.a.createElement("div", null, a.a.createElement("span", {
						className: f.a.meta
					}, n.fbt._({
						"*": "{number} points",
						_1: "1 point"
					}, [n.fbt._plural(t.score, "number", Object(d.b)(t.score))], {
						hk: "1Jm6il"
					})), a.a.createElement("span", {
						className: f.a.meta
					}, n.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [n.fbt._plural(t.numComments, "number", Object(d.b)(t.numComments))], {
						hk: "2jjoyt"
					})), a.a.createElement("span", {
						className: f.a.meta
					}, Object(l.a)(t.created / 1e3, !0))))))
				}
			}
			t.a = x(_)
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(o.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: o,
					post: c,
					redditStyle: u,
					theme: m,
					...p
				} = e;
				return r.a.createElement("div", l({
					className: Object(a.a)(d.a.backgroundWrapper, s),
					style: Object(i.c)(n, e),
					onClick: o
				}, p), t)
			})
		},
		"./src/reddit/components/PremiumCTA/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_1b1Jalg2nxA_Z-BjKXRfAV",
				contentWrapper: "_1ms8iFlWXJNWcT29GKsv69",
				icon: "_3-m5rOa3loUClNwpCv1uWU",
				content: "_1LofvgShcWAGgRJOa2IRlf",
				title: "_17PUokUAvL3YJx6EyPdD9d",
				description: "rn1KP8t9htFxyeAF8fdJ4"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return O
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/LRUCache/index.ts"),
				o = s("./src/higherOrderComponents/makeAsync.tsx"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				d = s("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				l = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				u = s("./src/reddit/constants/postLayout.ts"),
				m = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				p = s.n(m),
				b = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				h = s.n(b);
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js"), f = ({
				className: e
			}) => r.a.createElement("div", {
				className: Object(i.a)(e, h.a.container, h.a.placeholder, h.a.large, p.a.largeAndMediumPostStyles)
			}, r.a.createElement(l.a, {
				className: h.a.backgroundWrapper
			}, r.a.createElement("div", {
				className: h.a.titleAndDescriptionContainer
			}, r.a.createElement("h3", {
				className: h.a.title
			}, g._("Top broadcast", null, {
				hk: "HADCh"
			}))), r.a.createElement("div", {
				className: h.a.body
			}, r.a.createElement("div", {
				className: h.a.previewContainer
			}, r.a.createElement("div", {
				className: Object(i.a)(h.a.thumbnail, h.a.loading)
			})))));
			var y = ({
				className: e,
				layout: t
			}) => t === u.g.Classic ? r.a.createElement(c.b, {
				className: Object(i.a)(e, h.a.classicPostPlaceholder),
				isLoading: !0
			}) : t === u.g.Compact ? r.a.createElement(d.a, {
				className: Object(i.a)(e, h.a.compactPostPlaceholder),
				isLoading: !0
			}) : r.a.createElement(f, {
				className: e
			});
			const x = Object(o.a)({
				ErrorComponent: () => null,
				LoadingComponent: ({
					className: e,
					layout: t
				}) => r.a.createElement(y, {
					className: e,
					layout: t
				}),
				getComponent: () => Promise.all([s.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), s.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), s.e("RpanListingUnit")]).then(s.bind(null, "./src/reddit/components/PublicAccessNetwork/ListingUnit/index.tsx")).then(e => e.default)
			});
			var _ = e => r.a.createElement(x, e),
				k = s("./src/reddit/helpers/trackers/rpan.ts");
			const v = e => e === u.g.Classic ? 84 : e === u.g.Compact ? 42 : 340,
				j = new a.a(20),
				O = e => {
					const t = `rpan-${e.layout}-${e.listingKey}`,
						s = j.get(t);
					if (s) return s;
					const n = N(e.desiredIndex, e.children),
						a = {
							child: {
								id: t,
								estHeight: v(e.layout),
								trackOnEnteredViewport: () => e.sendEvent(Object(k.G)()),
								render: ({
									className: t
								}) => r.a.createElement(_, {
									className: t,
									layout: e.layout,
									listingName: e.listingName
								})
							},
							idx: n
						};
					return j.set(t, a), a
				},
				N = (e, t) => {
					const s = new Set(Object.keys(t).map(e => parseInt(e, 10)));
					for (; s.has(e);) e++;
					return e
				}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1EG7_Cm18ANvUvJ4rJdRgQ",
				leftRail: "_2GllO2Gk7c6od_GL_uNYcO",
				backgroundWrapper: "_3qQRMrsougg399HF8ZDsfl",
				header: "_25K6Ujp7eqOAHEdYuHm3pY",
				titleAndDescriptionContainer: "lQm93MTLO_P-uDIe2PRl3",
				title: "_1eNkAwmWuXZFmNLfie958",
				description: "fTm7r0gvPYKH7pWZpQbgm",
				overflowMenu: "_1g1tKbaVucAvOc7c2mO--M",
				overflowItemIconWrapper: "yw5ALrlWcD8wfh7tIB4Jl",
				overflowItemText: "fxp6qlPWJ76riedygoUS7",
				hideIcon: "_1YoM6AZ3m3ETysTwNLrh3N",
				flatListContainer: "_2psTIDB-4cySf4KyON03mz",
				flatlistSeparator: "_1q8ZrSYLuE8Stn2AL2N4mJ",
				expandoButton: "_2OUloQpdxYXyrn8kPE4iAu",
				videoIcon: "_1uKWYPTIE0QxbdTkW9En19",
				expandoIcon: "_2m0hG8zpYJ2W34yfcu_PGL",
				bigExpando: "qecjZnTfgEjCTlYKgqrl0",
				bigExpandoIcon: "_8ViGpsDZkJ4aNM6aVyan0",
				previewContainer: "_1N144m-88joWY3ZwzWRjrl",
				thumbnail: "A8CAQWacAEq_Pwee5F5IZ",
				placeholder: "_3XAxDMGyfQtOCP0nwHqdLt",
				gradientAnimation: "_3Jz-b55_o5VWDQ42wh1-rr",
				glimmer: "_1HSyAH-KtED8iH51buUWfa",
				loading: "_3Hsr_kP1TY2ld8xQG-XqAL",
				infoContainer: "_2aNPePbQCJ2-xyqF693-oh",
				broadcastTitle: "_2PtVDFQbkz3Sh1f_ppShzf",
				watchingCount: "VT9OiuLNsb6RZcYm86q9G",
				titlePlaceholder: "_3DC7-C7eSLDyl1gxOp5IFX",
				large: "hrQ5rXDbyl6t3TIXxENXB",
				body: "_1jrhjWiRPpBMVjEPmkDP26",
				previewLink: "_2ZFeLyTw6PIP6lE1S9c4Js",
				classic: "_3Rb0d4ST3qYLtk7GE1D2Ku",
				thumbnailContainer: "_1UGYtZeEoz8fDy4G-b4pqk",
				main: "_12iec8OZ9gJJtQR8nSC2se",
				score: "_1c8HaTqXDAT7pYLrFLAWFt",
				compact: "_2mQGWgGIa1tOb-9mH8lvcG",
				verticalVotes: "_3Q8HLP8Cv_uongOZe_uVp2",
				horizontalVotes: "_3dLEcgpoUWjqaG1vVXlfYR",
				compactPostPlaceholder: "jw9TfhViHYwiaSOWfhKRa",
				classicPostPlaceholder: "_2lnslGhr0-HKZXmHDCzAU7",
				upvoteAnimation: "_1MEw3CaNaAuwCohG-n7UPc",
				liveStatus: "_1YeXsBJft9g02XQNAzcPWD"
			}
		},
		"./src/reddit/components/SEOSidebarLinks/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "_2P7APx0UZzT7G61J3taHT1",
				titleFontH2: "RwS_Oc-tCzFs9JqbyJt7y",
				titleFontH3: "_3efLiav9fPpnRcDjg9Gwg",
				titleFontH4: "_3hvxMzKYjdkuu40CSxKjAu",
				titleFontH5: "_3WpmjCstbhZ90uNfolTEpK",
				titleFontH6: "_2aXJlh_wJ7xa9WJa1Ffc1Q",
				metadataFont: "_2uQdSEwqQ-dgsfQ5DUyRNy",
				flairFont: "_2_0QEUNGrG4wZY0ofsNi1h",
				labelsFont: "Ak2Fs_jf7fnNIs6Xajto6",
				actionFont: "_2yOueT_7JFLAAiCNPTQjfk",
				smallButtonFont: "_1j9G7RzwWzCEXRfBup8qCr",
				largeButtonFont: "_21SizvLABo7WuGdVrlWB3E",
				strongTextFont: "_1rRA9Vf6uOXrFjUcJJcmOL",
				tabFont: "_1nbCityPGTvrop_yKHkhp_",
				buttonFontXS: "_3RerbBqI5ohWwQKBd8_-Ku",
				buttonFontXs: "_3RerbBqI5ohWwQKBd8_-Ku",
				buttonFontS: "_2wKWEQ-jbYxfuGUxCG8h09",
				buttonFontM: "gDNmuWsQQtIKbOsMxXWEo",
				buttonFontL: "_16efVdvn26v_1Oo2lbTnwG",
				buttonFontXL: "_2YqGgd9hmqUohHovWDx40Q",
				buttonFontXl: "_2YqGgd9hmqUohHovWDx40Q",
				bodyFontH1: "_1J85q0678QbXBAlUsUtzth",
				bodyFontH2: "-XsUf9E0eP4ePrgs3Yf81",
				bodyFontH3: "_22-90BPqugW8lJQPIjwpNd",
				bodyFontH4: "_2DU9sYq9m0gC27PMeSCeRK",
				bodyFontH5: "_2F6ZjEPUyXIS06JZc1JsHQ",
				bodyFontH6: "XnmQfbUmMrXwd2eQYT_6a",
				bodyFont: "_3Jp6jLYRWtZI2hmJA9eurC",
				bodyFontSmall: "_2eo_q38bKZsZzaxO_TC6ni",
				bodyFontMono: "_24Qs54CbgE_djlerYbZ1zl",
				Link: "_13rO9T2auFedwF7O7V72O6",
				link: "_13rO9T2auFedwF7O7V72O6",
				SectionHeader: "_2EUcwf_tbEz93vN5QWYP7O",
				sectionHeader: "_2EUcwf_tbEz93vN5QWYP7O",
				SectionTitle: "_2dowUVQFB6EDFymNiITj65",
				sectionTitle: "_2dowUVQFB6EDFymNiITj65",
				SectionChevron: "_2GbTYUvknqxuAWQI2Gnu2g",
				sectionChevron: "_2GbTYUvknqxuAWQI2Gnu2g",
				SectionBody: "_1dqZsiXZltYxbQcUoK1Z-Q",
				sectionBody: "_1dqZsiXZltYxbQcUoK1Z-Q",
				SectionContent: "_2jmnnhuP2AL87nZM3exPTR",
				sectionContent: "_2jmnnhuP2AL87nZM3exPTR",
				SectionFooter: "_3ZTxrJ36ejYA39ZNctzfrx",
				sectionFooter: "_3ZTxrJ36ejYA39ZNctzfrx",
				SectionButton: "dRr-wxcoswiadnFKXkm8G",
				sectionButton: "dRr-wxcoswiadnFKXkm8G",
				Section: "_2pK6e4VBPMQxDuw2kXyIIb",
				section: "_2pK6e4VBPMQxDuw2kXyIIb",
				opened: "_3U7bizV5Ex3dWwKwNODf9R",
				expanded: "_1Rwg1da6VQnIycp8lVYXom",
				Widget: "_3Fe8ia7wR8lbatMEJ6BchP",
				widget: "_3Fe8ia7wR8lbatMEJ6BchP"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less": function(e, t, s) {
			e.exports = {
				header: "_3ioMyxiI-wWgZFqBDVBh6r"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less"),
				a = s.n(r);
			t.a = n.a.div("header", a.a)
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1Pcih1cgtQusjyfxp7YPbP",
				"m-card": "Ab_CG1GZxb0mjtooTcgRC",
				mCard: "Ab_CG1GZxb0mjtooTcgRC",
				layout: "_2kSyv4gtHy2zfKKHU-4g7F",
				layoutBody: "_2OOX0Ul2XYOdHT0ojyBOUD",
				layoutHeader: "lUMtC2iyxpeA0-GrN-P2x"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				i = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less"),
				c = s.n(i);

			function d(e) {
				const {
					className: t,
					id: s,
					layoutBodyClassName: n,
					showCardView: i
				} = e, d = {
					[c.a["m-card"]]: i
				};
				return r.a.createElement("div", {
					id: s,
					className: Object(a.a)(c.a.container, d, t)
				}, r.a.createElement(o.a, {
					className: c.a.layout,
					bodyClassName: Object(a.a)(c.a.layoutBody, d, n),
					header: e.header,
					headerClassName: Object(a.a)(c.a.layoutHeader, d)
				}, e.children))
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				cardViewContainer: "_3SRia4h16KBodhRWPhm8Yn",
				container: "_3_c5cqV3WsdQo95Ql4El73",
				desc: "_3R8QK7DFEcDSPoSj255qHJ",
				one: "fLTQnOxtJpKvmnJh5ATHh",
				two: "_2c6Ke7Z35QpkUQA7b_RdMX",
				icon: "_1WvWGBpNLkD_JVC5Fdzz6n",
				name: "_3_bgt7LjReM2xalPiPzPhR",
				post: "_1K3CRPtfEoi_X2HCsP1PDn",
				layoutBody: "_1Hi56fRSBr7dTnQbwYoiBi"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				i = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				c = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less"),
				l = s.n(d);
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js"), m = () => r.a.createElement(o.a, {
				className: l.a.duHeader
			}, u._("Trending today", null, {
				hk: "3rOxuO"
			})), p = Object(c.a)({
				isLoading: !0
			});
			t.a = e => r.a.createElement(i.a, {
				className: e.className,
				header: m(),
				layoutBodyClassName: l.a.layoutBody,
				showCardView: e.showCardView
			}, Array.from({
				length: e.numberOfItems || 6
			}).map((e, t) => r.a.createElement("div", {
				className: l.a.post,
				key: `placeholder-post-${t}`
			}, r.a.createElement("div", {
				className: Object(a.a)(l.a.desc, l.a.one, p)
			}), r.a.createElement("div", {
				className: Object(a.a)(l.a.desc, l.a.two, p)
			}), r.a.createElement("div", {
				className: Object(a.a)(l.a.icon, p)
			}), r.a.createElement("div", {
				className: Object(a.a)(l.a.name, p)
			}))))
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less": function(e, t, s) {
			e.exports = {
				ThemedWidget: "avKlJzxZU3brq4nAX0_i1",
				themedWidget: "avKlJzxZU3brq4nAX0_i1"
			}
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/lodash/random.js"),
				a = s.n(r),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/config.ts"),
				u = s("./src/reddit/components/FakeBannerAd/index.tsx"),
				m = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = s("./src/reddit/helpers/adCount/index.ts"),
				g = s("./src/reddit/helpers/trackers/ads.ts"),
				f = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				x = s.n(y),
				_ = s("./src/lib/lessComponent.tsx");
			const k = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-SidebarNativeAd",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), s.e("reddit-components-SidebarNativeAd")]).then(s.bind(null, "./src/reddit/components/SidebarNativeAd/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/SidebarNativeAd/index.tsx"
					}
				}),
				v = Object(d.c)({
					post: (e, t) => {
						const {
							placement: s,
							placementIndex: n
						} = t, r = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(h.a)(s, r, n)]
					}
				}),
				j = Object(c.b)(v),
				O = _.a.wrapped(b.a, "ThemedWidget", x.a),
				N = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(f.F)(e.media) && e.media.content)),
				E = [{
					img: "/img/house-ads/eatcheapandhealthy.png",
					href: "/r/eatcheapandhealthy"
				}, {
					img: "/img/house-ads/streetwear.png",
					href: "/r/streetwear"
				}, {
					img: "/img/house-ads/castiron.png",
					href: "/r/castiron"
				}],
				C = Object(p.c)(class extends i.a.Component {
					shouldComponentUpdate(e) {
						const {
							className: t,
							redditStyle: s
						} = this.props;
						return t !== e.className || s !== e.redditStyle
					}
					trackViewability(e, t, s) {
						Math.random() <= l.a.telemetry.programmaticAdSampleRate && this.props.sendEvent(Object(g.b)(e, t, s))
					}
					render() {
						const e = a()(0, E.length - 1),
							{
								img: t,
								href: s
							} = E[e],
							{
								className: n,
								placement: r,
								redditStyle: o
							} = this.props;
						return i.a.createElement(O, {
							className: n,
							contentOnly: !0,
							redditStyle: o
						}, i.a.createElement(u.a, {
							img: t,
							href: s,
							trackSidebarHouseAdViewability: (e, t) => this.trackViewability(e, t, r)
						}))
					}
				});

			function S({
				className: e,
				post: t,
				placementIndex: s,
				refreshKey: n,
				listingName: r,
				placement: a,
				redditStyle: o,
				awaitingBrandSafetyCheck: c,
				forceHouseAd: d,
				removeSidebarSpacer: l
			}) {
				const u = l ? i.a.Fragment : m.a;
				return c || !N(t) && !d ? null : i.a.createElement(u, null, d ? i.a.createElement(C, {
					className: e,
					redditStyle: o,
					placement: a
				}) : i.a.createElement(k, {
					post: t,
					refreshKey: n,
					listingName: r,
					placement: a,
					placementIndex: s
				}))
			}
			t.a = j(S)
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/contexts/PageLayer/index.tsx"),
				i = s("./src/reddit/selectors/brandSafety.ts"),
				c = s("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				d = s("./src/reddit/selectors/user.ts"),
				l = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(o.t)();
			t.a = m(Object(a.b)((e, {
				listingName: t,
				pageLayer: s
			}) => {
				const n = Object(i.b)(e, {
						listingName: t,
						pageLayer: s
					}),
					r = Object(d.B)(e) || Object(c.a)(e),
					a = Object(i.e)(e);
				return {
					canShowAd: n && !r,
					awaitingBrandSafetyCheck: !Object(i.c)(e),
					isAdsDisabled: r,
					viewIsUnsafe: a
				}
			})(({
				canShowAd: e,
				isAdsDisabled: t,
				viewIsUnsafe: s,
				pageLayer: n,
				...a
			}) => !t && e && n ? r.a.createElement(l.a, u({
				forceHouseAd: s
			}, a)) : null))
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				r = s.n(n),
				a = s("./src/lib/lessComponent.tsx");
			t.a = a.a.div("Component", r.a)
		},
		"./src/reddit/components/SubredditAdoptionWidget/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_32gg9k8mE7XAO33Q0lKRlU",
				main: "_39QHoSGxWS9OKtoNU9jEE_",
				title: "_27oRfx5g78dJfAJl_8Npk3",
				icon: "_2t2xQcM_0PlqIR0rm5VRfJ",
				description: "_2HAYUIdDUchBheTwqmKIcq",
				button: "_3GA-tK1xBiDrxLJRZR3IIB"
			}
		},
		"./src/reddit/components/SubredditNameLink/index.m.less": function(e, t, s) {
			e.exports = {
				SubredditName: "_3ryJoIoycVkA88fy40qNJc",
				subredditName: "_3ryJoIoycVkA88fy40qNJc"
			}
		},
		"./src/reddit/components/SubredditNameLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				r = s("./src/reddit/components/SubredditNameLink/index.m.less"),
				a = s.n(r);
			const o = s("./src/lib/lessComponent.tsx").a.wrapped(n.a, "SubredditName", a.a);
			t.a = o
		},
		"./src/reddit/components/TabBadger/Loader.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-TabBadger-Component",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-TabBadger-Component").then(s.bind(null, "./src/reddit/components/TabBadger/Component.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/TabBadger/Component.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
		},
		"./src/reddit/components/TabBadger/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/TabBadger/Loader.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/selectors/platform.ts"),
				l = s("./src/reddit/selectors/posts.ts");
			const u = Object(o.c)({
					postCount: l.K,
					previousPageIsOverlay: d.n,
					tabBadged: e => e.tabBadged
				}),
				m = Object(a.b)(u);
			t.a = m(Object(c.c)(e => 0 === e.postCount ? null : r.a.createElement(i.a, {
				handlePillClick: e.handlePillClick,
				previousPageIsOverlay: e.previousPageIsOverlay,
				sendEvent: e.sendEvent,
				shortTimer: e.shortTimer,
				subredditName: e.subredditName,
				subscriberCount: e.subscriberCount,
				tabBadged: e.tabBadged
			})))
		},
		"./src/reddit/components/TopSubredditsWidget/Container.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/reddit/components/TopSubredditsWidget/index.tsx"),
				o = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/constants/subredditLeaderboard.ts"),
				c = s("./src/reddit/contexts/ApiContext.tsx"),
				d = s("./src/reddit/endpoints/subreddit/local.ts"),
				l = s("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				u = s("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts"),
				m = s("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				p = s("./src/reddit/models/GoodContent/index.ts");

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const h = async (e, t) => {
				const s = await Object(l.a)(e, t);
				if (s && s.ok) {
					const e = s.body,
						t = e && e.data && e.data.subredditLeaderboard;
					return Object(u.c)(t)
				}
			};
			class g extends r.a.Component {
				constructor(e) {
					super(e), this.sendEventClick = (e, t, s, n) => {
						this.props.sendEvent(Object(m.c)(e, t, s, n)), this.props.onSendEventClick && this.props.onSendEventClick(e, t, s, n)
					}, this.state = {}
				}
				componentDidMount() {
					this.fetchTopSubreddits()
				}
				componentDidUpdate(e) {
					const t = e.category && e.category.id,
						s = this.props && this.props.category && this.props.category.id,
						n = this.props.category && this.props.category.name;
					t !== s && n && !this.state[n] && this.fetchTopSubreddits()
				}
				async fetchTopSubreddits() {
					const {
						category: e,
						first: t
					} = this.props, s = e && e.id;
					if (s !== i.l)(s || s === i.f) && h(this.props.gqlContext(), {
						categoryId: s,
						filter: p.a,
						first: t
					}).then(e => {
						const t = e && e.rankings,
							s = e && e.subreddits,
							n = this.props.category && this.props.category.name || i.c;
						t && s && this.setState(e => ({
							...e,
							[n]: {
								rankings: t,
								subreddits: s
							}
						}))
					}).catch(e => console.error("Error >>>", e));
					else {
						const e = await async function(e, t) {
							const s = await Object(d.a)(e, t);
							if (s && s.ok) {
								const e = s.body,
									t = e && e.data && e.data.nearbySubreddits;
								return Object(u.a)(t)
							}
						}(this.props.gqlContext(), {
							first: t
						});
						if (!e) return;
						const {
							rankings: s,
							subreddits: n
						} = e;
						this.setState(e => ({
							...e,
							[i.m]: {
								rankings: s,
								subreddits: n
							}
						}))
					}
				}
				render() {
					const {
						category: e
					} = this.props, t = e && e.name, s = e && e.displayText, n = t || i.c, o = this.state[n], c = o ? o.rankings : [], d = o ? o.subreddits : {}, l = c && c[0] && c[0].id, u = d && d[l], m = !(u && u.isNSFW) || this.props.isOver18;
					return r.a.createElement(a.b, b({
						categoryName: t,
						categoryDisplayText: s,
						onSendEventClick: this.sendEventClick,
						rankings: c,
						shouldDisplayBannerImg: m,
						shouldDisplayDelta: this.props.shouldDisplayDelta,
						subreddits: d
					}, this.props))
				}
			}
			t.a = Object(c.b)(Object(o.c)(g))
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/prettyPrintNumber/index.ts"),
				d = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = s("./src/reddit/components/SubredditIcon/index.tsx"),
				u = s("./src/reddit/icons/fonts/index.tsx"),
				m = s("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				p = s.n(m);
			const b = e => a.a.createElement(a.a.Fragment, null, a.a.createElement(l.b, {
					className: p.a.subredditIcon,
					subredditOrProfile: e.subreddit
				}), a.a.createElement("span", {
					className: p.a.subredditDetailsContainer
				}, e.large ? a.a.createElement(d.a, {
					subredditName: e.subreddit.name
				}, a.a.createElement("span", {
					className: p.a.regularText
				}, e.subreddit.displayText)) : a.a.createElement("span", {
					className: p.a.regularText
				}, e.subreddit.displayText), null === e.rank && a.a.createElement("span", {
					className: p.a.smallText
				}, n.fbt._("This community hasn't been ranked yet.", null, {
					hk: "4CmlZJ"
				})))),
				h = e => {
					const t = Object(i.a)(p.a.subredditRankItem, e.large && p.a.large),
						s = e.delta && e.delta > 0,
						n = null === e.rank || void 0 === e.rank ? "--" : (e => {
							const t = Object(c.b)(e);
							if (t.length > 3) {
								return `${t.split(".")[0]}k`
							}
							return t
						})(e.rank + 1),
						r = e.delta ? s ? "#46D160" : "#EA0027" : "transparent";
					return a.a.createElement("li", {
						className: p.a.listItem,
						key: e.subreddit.displayText
					}, a.a.createElement(o.a, {
						className: t,
						onMouseDown: e.onItemClick,
						rel: "noopener",
						target: "_blank",
						to: e.subreddit.url
					}, a.a.createElement("div", {
						className: p.a.subredditRankItemColumn
					}, !e.hasTagline && a.a.createElement("span", {
						className: p.a.rankText
					}, n), !e.hasTagline && a.a.createElement(u.a, {
						className: p.a.arrow,
						name: s ? "caret_up" : "caret_down",
						isFilled: !0,
						style: {
							color: r
						}
					}), a.a.createElement(b, {
						large: e.large,
						rank: e.rank,
						subreddit: e.subreddit
					})), e.shouldDisplayDelta && a.a.createElement("span", {
						className: p.a.regularText
					}, e.delta ? Object(c.b)(Math.abs(e.delta)) : 0)))
				}
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				i = s.n(o);
			const c = e => r.a.createElement("div", {
				className: Object(a.a)(i.a.placeholderWrapper, e.large && i.a.large)
			}, r.a.createElement("span", {
				className: i.a.subredditIconLoading
			}), r.a.createElement("span", {
				className: i.a.subredditNameLoading
			}))
		},
		"./src/reddit/components/TopSubredditsWidget/index.m.less": function(e, t, s) {
			e.exports = {
				communityBanner: "_2-aCCpAklEV0DkVWrpodjE",
				communityBannerText: "_3t8QC0In-G5By0nAIZqfAZ",
				communityBannerCategoryName: "_3tu4wA7qDe2qAPwXNSHPo8",
				taglineBanner: "_1WuTyzo7KQobFlIJHW6Pik",
				taglineBannerBackground: "_34L_D1LSVWJ0ZjeqwrFnPj",
				taglineBannerImage: "pa_89rxjdi45gbVf0w9QR",
				taglineBannerText: "rpzag8Jvbaz6Pji3oRkWZ",
				footer: "_3fyECztJ8AQeIuhZWW-tNU",
				linkButton: "_1Q1oKEA1qDipo5Tk0b_YlY",
				categoryPicker: "_1O_evNy72kVXzYqUj80m_n",
				chipWrapper: "_1ZBD49ybfD0rTPX_Tp3Uz3",
				chip: "_3VVeutMKl2leQEGhurm7YN",
				taglineChip: "_2HZPVURuk0Na0mbosSZJDP",
				listItem: "_267lcOmg8VvXcoj9O0Q1TB",
				subredditRankItem: "_2ARwkAW45Urhf_fMfAMi5_",
				large: "_3WPeZCt6k7JXmTo4Kcf1vQ",
				regularText: "_3A9bf_kZ6VBA2VBRND5gvf",
				subredditIcon: "_3XIp3RTd4tSLZOvILNQorh",
				delta: "b8PFL61jVtugGDJnIQfBO",
				subredditRankItemColumn: "_2NS1CWm-CUQYu57CmZ05ep",
				subredditDetailsContainer: "_1XUTmupLRN-FTmJ6PQB7kO",
				categoryLink: "_25MytV8CK2IS_fK867Q3qH",
				rankText: "_2B-BDgM13P2SLJX-GZrxHV",
				smallText: "_3BO4rLcAUZY_jK4h2rZj7y",
				arrow: "ztLeQJcDYVKbL9h94QtI_",
				negative: "_3dHwI98vF7PVi8MmZFpeXj",
				communityBannerPlaceholder: "_2-cUhM9bP2B5FPfQsDLJGR",
				glimmer: "NJdRTjquS3Maw_lWbQTkw",
				placeholderWrapper: "_2jtVdXcFC3Ioe3B_hXF5Eh",
				subredditIconLoading: "_1F-hYShaC9dYxEEe3_TCGR",
				subredditNameLoading: "_YedzkdLjjcYoXUE26Cyb"
			}
		},
		"./src/reddit/components/TopSubredditsWidget/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return O
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/first.js"),
				a = s.n(r),
				o = s("./node_modules/lodash/times.js"),
				i = s.n(o),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				l = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				u = s("./src/config.ts"),
				m = s("./src/lib/classNames/index.ts"),
				p = s("./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx"),
				b = s("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				h = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				g = s("./src/reddit/constants/subredditLeaderboard.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				y = s("./src/reddit/controls/Chip/index.tsx"),
				x = s("./src/reddit/helpers/name/index.ts"),
				_ = s("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				k = s("./src/reddit/hooks/useTracking.ts"),
				v = s("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				j = s.n(v);
			const O = e => {
					const t = !(!e.rankings || !e.rankings.length),
						s = !t && j.a.communityBannerPlaceholder,
						r = e.bannerBackgroundImage && e.shouldDisplayBannerImg ? {
							backgroundImage: `url(${e.bannerBackgroundImage})`
						} : void 0,
						a = e.categoryName === g.m && g.j.path ? g.j.path : g.g;
					return d.a.createElement("div", {
						className: Object(m.a)(e.className, j.a.communityBanner, s),
						style: r
					}, t && d.a.createElement("h2", {
						className: j.a.communityBannerText
					}, d.a.createElement(l.a, {
						onMouseDown: () => e.onSendEventClick("banner", e.categoryName || g.e),
						to: a
					}, e.categoryName ? ((e, t) => e === g.m ? n.fbt._("Communities Near You", null, {
						hk: "ZMVOK"
					}) : n.fbt._("Top {categoryName} Communities", [n.fbt._param("categoryName", d.a.createElement("span", {
						className: j.a.categoryName
					}, " ", t || e, " "))], {
						hk: "X3A9z"
					}))(e.categoryName, e.categoryDisplayText) : n.fbt._("Today's Top Growing Communities", null, {
						hk: "2U7TDT"
					}))))
				},
				N = e => {
					const {
						category: t
					} = e, {
						gradients: s
					} = t, r = !!(!e.rankings || !e.rankings.length) && j.a.communityBannerPlaceholder, a = s && Array.isArray(s) && 2 === s.length ? {
						background: `linear-gradient(246.35deg, ${s[0]} 0%, ${s[1]} 100%)`
					} : void 0, o = t.path ? t.path : g.g, i = t.image ? `${t.image}.png` : "magnifying-glass-snoo.png";
					return d.a.createElement("div", {
						className: Object(m.a)(e.className, j.a.taglineBanner, r)
					}, d.a.createElement("div", {
						className: j.a.taglineBannerBackground,
						style: a
					}, d.a.createElement(l.a, {
						onMouseDown: () => e.onSendEventClick("banner", t.name || g.e),
						to: o
					}, d.a.createElement("h2", {
						className: j.a.taglineBannerText
					}, d.a.createElement("img", {
						className: j.a.taglineBannerImage,
						src: `${u.a.assetPath}/img/discovery/${i}`
					}), t.tagline ? (e => d.a.createElement("span", {
						className: j.a.categoryName
					}, n.fbt._("{tagline}", [n.fbt._param("tagline", e)], {
						hk: "3QDJDU"
					})))(t.tagline) : n.fbt._("Today's Top Growing Communities", null, {
						hk: "2U7TDT"
					})))))
				},
				E = e => d.a.createElement("ol", null, e.rankings && e.rankings.map((t, s) => {
					const n = e.subreddits[t.id];
					return d.a.createElement(p.a, {
						delta: t.rankDelta,
						hasTagline: e.hasTagline,
						key: t.id,
						large: e.large,
						onItemClick: () => e.onSendEventClick("subreddit", e.categoryName || g.e, n.name),
						rank: s,
						shouldDisplayDelta: e.shouldDisplayDelta,
						subreddit: n
					})
				}), !e.rankings.length && C),
				C = d.a.createElement(d.a.Fragment, null, i()(5, e => d.a.createElement(b.a, {
					key: e
				}))),
				S = e => {
					const t = e.isSecondaryButton ? f.n : f.k,
						s = e.linkColor ? {
							backgroundColor: e.linkColor,
							color: "white"
						} : void 0,
						r = e.isSecondaryButton ? e.categoryDisplayText ? n.fbt._("See All {categoryName}", [n.fbt._param("categoryName", e.categoryDisplayText)], {
							hk: "3mjiTN"
						}) : e.categoryName ? n.fbt._("See All {categoryName}", [n.fbt._param("categoryName", e.categoryName)], {
							hk: "3mjiTN"
						}) : n.fbt._("See All", null, {
							hk: "2OZax8"
						}) : n.fbt._("View All", null, {
							hk: "4vfmcB"
						});
					return d.a.createElement("div", {
						className: j.a.footer
					}, d.a.createElement(t, {
						className: j.a.linkButton,
						onMouseDown: () => e.onSendEventClick("button_cta", e.categoryName || g.e),
						to: e.to || "",
						style: s
					}, r))
				};

			function P(e, t) {
				return t || `${g.g}${Object(x.g)(e)}/`
			}
			const w = e => {
				return d.a.createElement("div", {
					className: j.a.categoryPicker
				}, e.categories && e.categories.map((t, s) => e.activeCategoryName === t.name ? null : d.a.createElement("span", {
					className: j.a.chipWrapper,
					key: t.name,
					onMouseDown: () => ((t, s) => e.onSendEventClick("bottom_leaderboards", t || g.e, void 0, s))(t.name, s + 1)
				}, d.a.createElement(y.a, {
					className: e.hasTagline ? j.a.taglineChip : j.a.chip,
					key: t.name,
					to: P(t.name, t.path),
					wide: t.name === g.m
				}, t.name ? t.name === g.m ? g.k : t.displayText || t.name : n.fbt._("Top", null, {
					hk: "2rw7Gx"
				})))))
			};
			t.b = e => {
				const {
					subreddits: t,
					rankings: s,
					categoryName: n,
					categoryDisplayText: r,
					category: o,
					categories: i
				} = e, l = Object(k.a)();
				Object(c.useEffect)(() => {
					l(Object(_.d)(n || g.e))
				}, []);
				const m = a()(s),
					p = t && m && t[m.id],
					b = `${u.a.assetPath}/img/leaderboard/banner-background.png`,
					f = p ? p.bannerBackgroundImage || b : void 0,
					y = e.to || n && P(n, o.path),
					x = o && o.tagline,
					v = o && o.gradients && Array.isArray(o.gradients) && 2 === o.gradients.length ? o.gradients[1] : void 0;
				return d.a.createElement(h.a, {
					className: e.className,
					contentOnly: !0
				}, x && d.a.createElement(N, {
					category: o,
					onSendEventClick: e.onSendEventClick,
					rankings: s
				}), !x && d.a.createElement(O, {
					bannerBackgroundImage: f,
					categoryName: n,
					categoryDisplayText: r,
					onSendEventClick: e.onSendEventClick,
					rankings: s,
					shouldDisplayBannerImg: e.shouldDisplayBannerImg
				}), d.a.createElement(E, {
					categoryName: n,
					hasTagline: !!x,
					large: e.large,
					onSendEventClick: e.onSendEventClick,
					rankings: s,
					shouldDisplayDelta: !1,
					subreddits: t
				}), d.a.createElement(S, {
					categoryName: n,
					categoryDisplayText: r,
					isSecondaryButton: e.isSecondaryButton,
					linkColor: v,
					onSendEventClick: e.onSendEventClick,
					to: y
				}), i && d.a.createElement(w, {
					activeCategoryName: n,
					categories: i,
					hasTagline: !!x,
					onSendEventClick: e.onSendEventClick
				}))
			}
		},
		"./src/reddit/components/Widgets/Aggregate/RecentPosts/PostsList.m.less": function(e, t, s) {
			e.exports = {
				ClearButton: "_3k5-X9mL_S9RJuKX2c3dFc",
				clearButton: "_3k5-X9mL_S9RJuKX2c3dFc"
			}
		},
		"./src/reddit/components/Widgets/Aggregate/TopicsList/index.m.less": function(e, t, s) {
			e.exports = {
				itemContainer: "_1ULKkr1Vw-TKylAevPBQl3",
				linkItem: "_1cK4Hfav56VzzWNW6SF7Kj",
				container: "_1rKh-fSjtA_kUJNOHsvtAZ",
				banner: "_2E8lSyj68M9zN75kARoqfq",
				bannerText: "_1giVw239PHkSdxzG2aP5wH"
			}
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/SEOTitle/index.tsx"),
				i = s("./src/reddit/components/Widgets/Base/index.m.less"),
				c = s.n(i);
			const d = a.a.div("WidgetBackground", c.a),
				l = a.a.wrapped(({
					children: e,
					...t
				}) => r.a.createElement("div", t, r.a.createElement(o.b, {
					type: o.a.Widget
				}, e)), "WidgetHeader", c.a);
			t.b = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement(d, null, e.children))
		},
		"./src/reddit/constants/chat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var n;
			! function(e) {
				e.None = "none", e.Compact = "compact", e.Full = "full_screen"
			}(n || (n = {}));
			var r;
			! function(e) {
				e.SubredditChatNotifcationFtux = "chat_subreddit_notification_ftux"
			}(r || (r = {}))
		},
		"./src/reddit/constants/subredditLeaderboard.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "p", (function() {
				return d
			})), s.d(t, "q", (function() {
				return l
			})), s.d(t, "o", (function() {
				return u
			})), s.d(t, "l", (function() {
				return m
			})), s.d(t, "m", (function() {
				return p
			})), s.d(t, "k", (function() {
				return b
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "t", (function() {
				return g
			})), s.d(t, "j", (function() {
				return f
			})), s.d(t, "r", (function() {
				return y
			})), s.d(t, "u", (function() {
				return x
			})), s.d(t, "n", (function() {
				return _
			})), s.d(t, "s", (function() {
				return k
			})), s.d(t, "h", (function() {
				return v
			})), s.d(t, "a", (function() {
				return j
			})), s.d(t, "i", (function() {
				return O
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js");
			const r = "DEFAULT",
				a = "",
				o = "All Communities",
				i = n.fbt._("All Communities", null, {
					hk: "1dfdfL"
				}),
				c = "top",
				d = "MOD",
				l = "moderating",
				u = n.fbt._("moderating", null, {
					hk: "34Ccgk"
				}),
				m = "LOCAL_COMMUNITIES",
				p = "near-you",
				b = n.fbt._("Near You", null, {
					hk: "2QTSPX"
				}),
				h = "/subreddits/leaderboard/",
				g = {
					id: a,
					name: a,
					path: `${h}`
				},
				f = {
					id: m,
					name: p,
					path: `${h}${p}/`
				},
				y = [{
					name: "Sports",
					displayText: n.fbt._("Sports", null, {
						hk: "41sK5Y"
					}),
					id: "c1015",
					path: `${h}sports/`
				}, {
					name: "News",
					displayText: n.fbt._("News", null, {
						hk: "5WND6"
					}),
					id: "c1009",
					path: `${h}news/`
				}, {
					name: "Gaming",
					displayText: n.fbt._("Gaming", null, {
						hk: "4qweUx"
					}),
					id: "c1019",
					path: `${h}gaming/`
				}, {
					name: "Aww",
					displayText: n.fbt._("Aww", null, {
						hk: "3qJjbL"
					}),
					id: "c1000",
					path: `${h}aww/`
				}],
				x = {
					id: a,
					name: a,
					path: `${h}`,
					image: "popcorn-snoo",
					tagline: n.fbt._("Trending communities are so hot right now", null, {
						hk: "1yqJn4"
					}),
					gradients: ["#63D4C3", "#3A8CEB"]
				},
				_ = {
					id: m,
					name: p,
					path: `${h}${p}/`,
					image: "magnifying-glass-snoo",
					tagline: n.fbt._("Local communities — See what’s near you", null, {
						hk: "s70l7"
					}),
					gradients: ["#63D4C3", "#3A8CEB"]
				},
				k = [{
					name: "Sports",
					displayText: n.fbt._("Sports", null, {
						hk: "11CI4F"
					}),
					id: "c1015",
					path: `${h}sports/`,
					image: "basketball-snoo",
					tagline: n.fbt._("Sports communities are the real MVP", null, {
						hk: "1zKdF8"
					}),
					gradients: ["#EF839E", "#7795F8"]
				}, {
					name: "News",
					displayText: n.fbt._("News", null, {
						hk: "17cLQ8"
					}),
					id: "c1009",
					path: `${h}news/`,
					image: "newsie-snoo",
					tagline: n.fbt._("News communities to keep you informed", null, {
						hk: "4pGDSm"
					}),
					gradients: ["#D72E33", "#A82455"]
				}, {
					name: "Gaming",
					displayText: n.fbt._("Gaming", null, {
						hk: "2aDSZz"
					}),
					id: "c1019",
					path: `${h}gaming/`,
					image: "esports-snoo",
					tagline: n.fbt._("Gaming communities taking it to the next level", null, {
						hk: "2zM7JE"
					}),
					gradients: ["#F08C3A", "#D72E33"]
				}, {
					name: "Aww",
					displayText: n.fbt._("Aww", null, {
						hk: "3ecS9m"
					}),
					id: "c1000",
					path: `${h}aww/`,
					image: "cat-snoo",
					tagline: n.fbt._("Aww communities — get in on this cuteness", null, {
						hk: "1uAb8e"
					}),
					gradients: ["#F3B54F", "#EC5428"]
				}],
				v = [{
					name: "E3 Gaming",
					displayText: n.fbt._("E3 Gaming", null, {
						hk: "289tR6"
					}),
					id: "c1034",
					path: `${h}e3/`
				}],
				j = [{
					name: "Beauty",
					displayText: n.fbt._("Beauty", null, {
						hk: "4mzjuL"
					}),
					id: "c1023",
					path: `${h}beauty/`,
					image: "makeup-snoo",
					tagline: n.fbt._("Beauty communities make us all look good", null, {
						hk: "2z1nzQ"
					}),
					gradients: ["#63D4C3", "#3A8CEB"]
				}, {
					name: "Fashion",
					displayText: n.fbt._("Fashion", null, {
						hk: "22tnM2"
					}),
					id: "c1002",
					path: `${h}fashion/`,
					image: "90s-nostalgia-snoo",
					tagline: n.fbt._("Fashion communities are always in style", null, {
						hk: "4pNEnH"
					}),
					gradients: ["#EF839E", "#7795F8"]
				}, {
					name: "Food",
					displayText: n.fbt._("Food", null, {
						hk: "2Bq28v"
					}),
					id: "c1003",
					path: `${h}food/`,
					image: "cookbooks-snoo",
					tagline: n.fbt._("Food communities to make you go mmmm", null, {
						hk: "3OGpOa"
					}),
					gradients: ["#D72E33", "#A82455"]
				}, {
					name: "Fitness",
					displayText: n.fbt._("Fitness", null, {
						hk: "4ruQRK"
					}),
					id: "c1006",
					path: `${h}health_and_fitness/`,
					image: "yoga-snoo",
					tagline: n.fbt._("Fitness communities that know how to work it", null, {
						hk: "3Ow48z"
					}),
					gradients: ["#63D4C3", "#3A8CEB"]
				}, {
					name: "Outdoors",
					displayText: n.fbt._("Outdoors", null, {
						hk: "1Can0U"
					}),
					id: "c1010",
					path: `${h}outdoors/`,
					image: "telescope-snoo",
					tagline: n.fbt._("Outdoor communities — they’re really out there", null, {
						hk: "1sfigF"
					}),
					gradients: ["#F08C3A", "#D72E33"]
				}, {
					name: "Relationships",
					displayText: n.fbt._("Relationships", null, {
						hk: "QnBO3"
					}),
					id: "c1013",
					path: `${h}relationships/`,
					image: "childrensbooks-snoo",
					tagline: n.fbt._("Relationship communities understand all the feels", null, {
						hk: "27KPX"
					}),
					gradients: ["#F08C3A", "#D72E33"]
				}],
				O = ["Sports", "Gaming", "News", "TV", "Aww", "Memes", "Pics & Gifs", "Travel", "Tech", "Music"]
		},
		"./src/reddit/controls/Chip/index.m.less": function(e, t, s) {
			e.exports = {
				Chip: "yO1xBdgBCFQNZudOlok9d",
				chip: "yO1xBdgBCFQNZudOlok9d",
				isWide: "_1lxXIK3bbUOKz-5A-FRakQ",
				active: "PrkN-68SZ_ce-8V-W4ciS"
			}
		},
		"./src/reddit/controls/Chip/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/controls/Button/index.tsx"),
				i = s("./src/reddit/controls/Chip/index.m.less"),
				c = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				const t = e.to ? {
					kind: o.a.InternalLink,
					to: e.to
				} : {};
				return r.a.createElement(o.q, d({
					className: Object(a.a)(c.a.Chip, {
						[c.a.isWide]: e.wide
					}),
					onClick: e.onClick,
					priority: o.b.Tertiary,
					size: o.c.XS,
					text: e.children
				}, t))
			}
		},
		"./src/reddit/endpoints/subreddit/local.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/makeGqlRequest/index.ts"),
				r = s("./src/redditGQL/operations/GetNearbySubreddits.json");
			t.a = (e, t) => Object(n.a)(e, {
				...r,
				variables: t
			})
		},
		"./src/reddit/endpoints/subreddit/topSubreddits.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/makeGqlRequest/index.ts"),
				r = s("./src/redditGQL/operations/TopSubreddits.json");
			t.a = (e, t) => Object(n.a)(e, {
				...r,
				variables: t
			})
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/featureFlags/index.ts");

			function c(e, t, s) {
				const n = Object(o.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(a.b)(n)(e => {
					const {
						featureEnabled: n,
						...a
					} = e, o = a;
					return n ? r.a.createElement(t, o) : void 0 !== s ? r.a.createElement(s, o) : null
				})
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/models/WhitelistStatus/index.ts");
			const r = (e, t) => {
				const s = e.some(e => e.isNSFW),
					r = t.some(e => e.wls === n.b.NO_ADS);
				return !s && !r
			}
		},
		"./src/reddit/helpers/createBannerProperties/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			s("./src/lib/isFakeSubreddit/index.ts"), s("./src/reddit/constants/postLayout.ts");
			Math.floor(100 * Math.random());
			var n;
			! function(e) {
				e.FIRST = "first", e.MIDDLE = "middle", e.BOTTOM = "bottom"
			}(n || (n = {}))
		},
		"./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return o
			}));
			s("./node_modules/lodash/isEmpty.js");
			var n = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const r = ({
					edges: e,
					pageInfo: t
				}) => {
					const s = {},
						r = [];
					for (const {
							node: a,
							...o
						} of e) {
						const e = Object(n.a)(a);
						s[e.id] = e, r.push(o)
					}
					return {
						pageInfo: t,
						rankings: r,
						subreddits: s
					}
				},
				a = ({
					edges: e
				}) => {
					const t = {},
						s = [];
					for (const {
							node: r,
							...a
						} of e) {
						const e = Object(n.a)(r);
						t[e.id] = {
							...e,
							bannerBackgroundImage: r && r.styles && r.styles.bannerBackgroundImage
						}, s.push(a)
					}
					return {
						rankings: s,
						subreddits: t
					}
				},
				o = ({
					edges: e,
					pageInfo: t
				}) => {
					const s = {},
						r = [];
					let a = 0;
					for (const {
							node: o
						} of e) {
						const e = Object(n.a)(o);
						s[e.id] = {
							...e,
							bannerBackgroundImage: o && o.styles && o.styles.bannerBackgroundImage
						}, r.push({
							id: e.id,
							rank: a
						}), a += 1
					}
					return {
						rankings: r,
						subreddits: s,
						pageInfo: t
					}
				}
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "d", (function() {
				return f
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				a = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				o = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = s("./src/reddit/models/Theme/index.ts"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const u = {},
				m = e => Object(i.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(i.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				b = e => Object(n.l)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				g = e => e.isActive ? l.a.mIsActive : void 0,
				f = e => {
					const t = Object(a.a)(Object(r.a)(e), o.a.actionIcon, o.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "G", (function() {
				return l
			})), s.d(t, "i", (function() {
				return u
			})), s.d(t, "j", (function() {
				return m
			})), s.d(t, "C", (function() {
				return p
			})), s.d(t, "z", (function() {
				return b
			})), s.d(t, "D", (function() {
				return h
			})), s.d(t, "B", (function() {
				return g
			})), s.d(t, "A", (function() {
				return f
			})), s.d(t, "t", (function() {
				return y
			})), s.d(t, "u", (function() {
				return x
			})), s.d(t, "w", (function() {
				return _
			})), s.d(t, "q", (function() {
				return k
			})), s.d(t, "o", (function() {
				return v
			})), s.d(t, "p", (function() {
				return j
			})), s.d(t, "n", (function() {
				return O
			})), s.d(t, "y", (function() {
				return N
			})), s.d(t, "r", (function() {
				return E
			})), s.d(t, "x", (function() {
				return C
			})), s.d(t, "F", (function() {
				return S
			})), s.d(t, "s", (function() {
				return P
			})), s.d(t, "c", (function() {
				return w
			})), s.d(t, "k", (function() {
				return A
			})), s.d(t, "b", (function() {
				return T
			})), s.d(t, "d", (function() {
				return I
			})), s.d(t, "e", (function() {
				return D
			})), s.d(t, "v", (function() {
				return L
			})), s.d(t, "E", (function() {
				return F
			})), s.d(t, "f", (function() {
				return B
			})), s.d(t, "l", (function() {
				return R
			})), s.d(t, "m", (function() {
				return U
			})), s.d(t, "g", (function() {
				return M
			})), s.d(t, "h", (function() {
				return W
			}));
			var n, r = s("./src/reddit/constants/chat.ts"),
				a = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(n || (n = {}));
			const i = (e, t) => {
					if (t) {
						const s = o.media(e, t.post.id),
							n = o.post(e, t.post.id),
							r = o.subreddit(e);
						if (t.post.authorInfo && n && (n.authorId = t.post.authorInfo.id), s) {
							s.streamPublicId = t.stream.stream_id, s.id = t.stream.stream_id;
							const n = Object(a.j)(e, {
								streamIdFromPath: t.post.id
							});
							n === a.a.LIVE ? s.type = "stream_live" : n === a.a.VOD ? s.type = "stream_vod" : n === a.a.UNAVAILABLE && (s.type = "stream_unavailable")
						}
						return {
							post: n,
							media: s,
							subreddit: r
						}
					}
					return {
						subreddit: o.subreddit(e)
					}
				},
				c = (e, t, s) => {
					if (!t || !s) return;
					const n = Object(a.j)(e, {
							streamIdFromPath: t.post.id
						}),
						o = t.chat_disabled || s.chatState === r.a.None;
					return {
						id: s.id,
						sessionDurationMs: s.sessionDurationMs,
						watchDurationMs: s.watchDurationMs,
						heartbeatDurationMs: s.heartbeatDurationMs,
						isLive: n === a.a.LIVE,
						playheadOffsetMs: s.playheadOffsetMs,
						timestampMs: s.timestampMs,
						startTimeMs: s.startTimeMs,
						volume: s.volume,
						chatState: o ? r.a.None : r.a.Compact,
						scrubbingStartMs: s.scrubbingStartMs,
						scrubbingEndMs: s.scrubbingEndMs,
						playerType: s.playerType
					}
				},
				d = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				l = () => e => ({
					source: "stream_du",
					action: "view",
					noun: "stream_du",
					...i(e)
				}),
				u = () => e => ({
					source: "stream_du",
					action: "click",
					noun: "show_less",
					...i(e)
				}),
				m = (e, t) => s => ({
					source: "stream_du",
					action: "click",
					noun: "enlarge",
					...i(s, e),
					actionInfo: o.actionInfo(s, {
						position: t || 0
					})
				}),
				p = (e, t) => s => ({
					source: "stream_player",
					action: "fail",
					noun: "stream",
					playback: c(s, e, t),
					...d(s),
					...e && {
						...i(s, e)
					}
				}),
				b = (e, t) => s => ({
					source: "stream_player",
					action: "heartbeat",
					noun: "stream",
					playback: c(s, e, t),
					...d(s),
					...i(s, e)
				}),
				h = (e, t) => s => ({
					source: "stream_player",
					action: "play",
					noun: "stream",
					playback: c(s, e, t),
					...d(s),
					...i(s, e)
				}),
				g = (e, t) => s => ({
					source: "stream_player",
					action: "complete",
					noun: "stream",
					playback: c(s, e, t),
					...d(s),
					...i(s, e)
				}),
				f = (e, t, s) => n => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(n, t, s),
					...d(n),
					...i(n, t)
				}),
				y = (e, t, s, n) => r => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(r, t, s),
					...d(r),
					...i(r, t),
					actionInfo: o.actionInfo(r, {
						referralId: n
					})
				}),
				x = (e, t, s) => n => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(n, t, s),
					...d(n),
					...i(n, t)
				}),
				_ = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "stream_from_desktop",
					...d(t),
					...i(t, e)
				}),
				k = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "upvote",
					playback: c(s, e, t),
					...d(s),
					...i(s, e)
				}),
				v = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: c(s, e, t),
					...d(s),
					...i(s, e)
				}),
				j = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: c(s, e, t),
					...d(s),
					...i(s, e)
				}),
				O = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: c(s, e, t),
					...i(s, e)
				}),
				N = e => t => {
					const s = Object(a.l)(t, e);
					return {
						source: "stream_chat",
						action: "click",
						noun: "send_chat",
						...i(t, s)
					}
				},
				E = (e, t, s) => n => ({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					},
					playback: c(n, t, s),
					...i(n, t)
				}),
				C = (e, t) => s => ({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: c(s, e, t),
					...d(s)
				}),
				S = e => t => ({
					source: "post",
					action: "view",
					noun: "post",
					profile: o.profile(t),
					screen: o.screen(t),
					...i(t, e)
				}),
				P = e => t => {
					const s = i(t, e);
					return {
						source: "post",
						action: "consume",
						noun: "post",
						profile: o.profile(t),
						screen: o.screen(t),
						...s
					}
				},
				w = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "follow",
					...i(t, e)
				}),
				A = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "subscribe",
					...i(t, e),
					targetSubreddit: o.subreddit(t)
				}),
				T = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "close",
					playback: c(s, e, t),
					...i(s, e)
				}),
				I = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "pause",
					playback: c(s, e, t),
					...i(s, e)
				}),
				D = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: c(s, e, t),
					...i(s, e)
				}),
				L = (e, t) => s => ({
					source: "stream_player",
					action: "mute",
					noun: "volume",
					playback: c(s, e, t),
					...i(s, e)
				}),
				F = (e, t) => s => ({
					source: "stream_player",
					action: "unmute",
					noun: "volume",
					playback: c(s, e, t),
					...i(s, e)
				}),
				B = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: c(s, e, t),
					...i(s, e)
				}),
				R = (e, t) => s => ({
					source: "stream_player",
					action: "swipe",
					noun: "next",
					playback: c(s, e, t),
					...i(s, e),
					...d(s)
				}),
				U = (e, t) => s => ({
					source: "stream_player",
					action: "swipe",
					noun: "previous",
					playback: c(s, e, t),
					...i(s, e),
					...d(s)
				}),
				M = (e, t) => s => ({
					source: "rpanstudio_banner",
					action: "click",
					noun: e,
					...i(s, t),
					...d(s)
				}),
				W = (e, t) => s => ({
					source: "rpanstudio_modal",
					action: "click",
					noun: e,
					...i(s, t),
					...d(s)
				})
		},
		"./src/reddit/helpers/trackers/subredditLeaderboard.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			}));
			var n = s("./src/reddit/constants/categories.tsx"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const a = e => t => ({
					...r.defaults(t),
					action: "click",
					noun: Object(n.d)(e),
					source: "leaderboard_category"
				}),
				o = (e, t, s) => a => ({
					...r.defaults(a),
					action: "click",
					noun: e,
					source: "leaderboard_featured_category",
					subreddit: {
						categoryName: Object(n.d)(t),
						name: s && s.toLowerCase()
					}
				}),
				i = (e, t) => s => ({
					...r.defaults(s),
					action: "click",
					noun: "subreddit",
					source: "leaderboard_subreddit",
					subreddit: {
						categoryName: Object(n.d)(t),
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				c = (e, t, s, a) => o => ({
					...r.defaults(o),
					action: "click",
					actionInfo: {
						...r.actionInfo(o),
						position: a && a
					},
					noun: e,
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(n.d)(t),
						name: s && s.toLowerCase()
					}
				}),
				d = (e, t) => s => ({
					...r.defaults(s),
					action: "view",
					noun: "leaderboard_right_rail",
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(n.d)(e),
						name: t && t.toLowerCase()
					}
				})
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, s) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = s.n(o);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const d = ({
				className: e,
				isSubreddit: t,
				...s
			}) => r.a.createElement("svg", c({
				className: Object(a.a)(i.a.dropdown, {
					[i.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s), r.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = d
		},
		"./src/reddit/models/GoodContent/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return r
			}));
			const n = {
					G: "G",
					NC17: "NC17",
					NOT_SHOWN_IN_THEATERS: "NOT_SHOWN_IN_THEATERS",
					PG: "PG",
					PG13: "PG13",
					R: "R"
				},
				r = {
					isBlacklistedSubredditsExcluded: !0,
					isNsfwExcluded: !0,
					maxRating: n.R
				}
		},
		"./src/reddit/models/PublicAccessNetwork/index.ts": function(e, t, s) {
			"use strict";
			var n;
			s.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.NOT_STARTED = "NOT_STARTED", e.PUBLISHED = "PUBLISHED", e.IS_LIVE = "IS_LIVE", e.DISCONNECTED = "DISCONNECTED", e.KILLED = "KILLED", e.PURGED = "PURGED", e.ENDED = "ENDED"
				}(n || (n = {}))
		},
		"./src/reddit/pages/Frontpage/index.m.less": function(e, t, s) {
			e.exports = {
				duHeader: "_1fauFKjg428h9E1m4B2Vr-",
				sidebar: "_10wb7d3rGvj56Gcs4IQWL5"
			}
		},
		"./src/reddit/pages/Frontpage/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/lodash/fromPairs.js"),
				a = s.n(r),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/extractQueryParams/index.ts"),
				m = s("./src/lib/fastdom/index.ts"),
				p = s("./src/lib/makeListingKey/index.ts"),
				b = s("./src/lib/performanceTimings/index.tsx"),
				h = s("./src/reddit/actions/frontpage/index.ts"),
				g = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/ScrollChildFactory.tsx"),
				f = s("./src/reddit/components/EmptySubreddit.tsx"),
				y = s("./src/reddit/components/FeaturedLiveEntrypoint/index.tsx"),
				x = s("./src/reddit/components/FrontpageSidebar/index.tsx"),
				_ = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				k = s("./src/reddit/components/InFeedPostCreation/async.tsx"),
				v = s("./src/reddit/components/JumpToContent/index.tsx"),
				j = s("./src/reddit/components/ListingPostList/index.tsx"),
				O = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx"),
				N = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				E = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx"),
				C = s("./src/reddit/components/TabBadger/index.tsx"),
				S = s("./src/reddit/components/TrackingHelper/index.tsx"),
				P = s("./src/reddit/constants/parameters.ts"),
				w = s("./src/reddit/constants/postLayout.ts"),
				A = s("./src/reddit/contexts/PageLayer/index.tsx"),
				T = s("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				I = s("./src/reddit/helpers/trackers/screenview.ts"),
				D = s("./src/reddit/layout/page/Listing/index.tsx"),
				L = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				F = s("./src/reddit/selectors/experiments/trending.ts"),
				B = s("./src/reddit/selectors/experiments/uiSimplification.ts"),
				R = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				U = s("./src/reddit/selectors/frontpage.ts"),
				M = s("./src/reddit/selectors/meta.ts"),
				W = s("./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts"),
				q = s("./src/reddit/selectors/user.ts"),
				G = s("./src/lib/constants/index.ts"),
				V = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				K = s("./src/lib/objectSelector/index.ts"),
				H = s("./src/reddit/constants/page.ts"),
				Q = s("./src/reddit/pages/Frontpage/index.m.less"),
				J = s.n(Q);

			function z() {
				return (z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: Z
			} = s("./node_modules/fbt/lib/FbtPublic.js"), X = Object(A.t)(), Y = Object(d.c)({
				queryParams: Object(K.a)((e, {
					location: t
				}) => a()([...Object(u.a)(t.search)])),
				sort: (e, {
					match: t
				}) => {
					const s = Object(U.a)(e);
					return t.params.sort || s
				}
			}), $ = Object(d.c)({
				countryMeta: M.b,
				geopopular: q.n
			}), ee = Object(d.c)({
				isActionBarAnimationEnabled: L.b,
				isInTrendingEntrypointExperiment: F.a,
				isLoggedIn: q.K,
				isPopular: A.C,
				isRpanDuVisible: e => Object(W.a)(e, {
					listingName: V.R
				}),
				rpanInjectionIndex: e => Object(W.b)(e, {
					listingName: V.R
				}),
				layout: A.O,
				isInUISimplificationI18NExperiment: B.a
			}), te = () => Object(d.a)($, Y, ee, e => Object(W.a)(e, {
				listingName: V.R
			}), e => Object(W.b)(e, {
				listingName: V.R
			}), e => e, T.a, ({
				countryMeta: e,
				geopopular: t
			}, {
				queryParams: s,
				sort: n
			}, r, a, o, i, c) => {
				const d = P.x in s && s[P.x].toUpperCase(),
					l = "string" == typeof d && d in G.bc ? G.bc[d] : G.cc,
					u = Object(p.a)(H.a, n, s),
					m = e || G.y.Everywhere,
					b = t || m,
					h = P.h in s ? s[P.h].toUpperCase() : b,
					g = [];
				return a && g.push(o), {
					cardViewExperimentVariant: c,
					countrySort: h,
					listingKey: u,
					sort: n,
					timeSort: l,
					focusedVerticalPositions: Object(R.b)(i, g, {
						listingKey: u
					}),
					...r
				}
			}), se = (e, t) => ({
				onLoadMorePosts: () => e(h.morePostsRequested({
					sort: t.match.params.sort
				})),
				refreshFeed: () => e(h.refreshFeed({
					sort: t.match.params.sort
				}))
			}), ne = Object(c.b)(te, se), re = Object(n.a)({
				resolved: {},
				chunkName: () => "Trending",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("Trending").then(s.bind(null, "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx"
				}
			}, {
				ssr: !1
			}), ae = e => i.a.createElement(re, z({}, e, {
				fallback: i.a.createElement(E.a, {
					showCardView: !!e.showCardView
				})
			}));
			class oe extends i.a.Component {
				constructor(e) {
					super(e), this.componentDidMount = () => {
						const {
							cardViewExperimentVariant: e,
							isLoggedIn: t,
							sort: s
						} = this.props;
						m.a.read(() => {
							const n = `${b.c.FrontPage}-${s}`,
								r = [Object(T.c)(e)];
							Object(b.d)(n, t, r)
						})
					}
				}
				render() {
					const {
						focusedVerticalPositions: e,
						isActionBarAnimationEnabled: t,
						isInTrendingEntrypointExperiment: s,
						isLoggedIn: n,
						isPopular: r,
						isRpanDuVisible: a,
						layout: c,
						listingKey: d,
						rpanInjectionIndex: u,
						sendEvent: m,
						isInUISimplificationI18NExperiment: p
					} = this.props, b = r && !n && s && !p, h = {
						baseUrl: "",
						countrySort: this.props.countrySort,
						sort: this.props.sort,
						timeSort: this.props.timeSort
					}, E = {};
					if (c === w.g.Large && e.forEach((e, t) => {
							E[e] = Object(g.a)({
								numInstance: t,
								layout: c,
								listingKey: d,
								listingName: H.b,
								listingPosition: e
							})
						}), a) {
						const {
							child: e,
							idx: t
						} = Object(O.a)({
							children: E,
							desiredIndex: u,
							layout: c,
							listingKey: d,
							listingName: V.R,
							sendEvent: m
						});
						E[t] = e
					}
					const S = i.a.createElement(x.default, {
						className: J.a.sidebar,
						listingKey: d,
						listingName: H.b
					});
					return i.a.createElement(D.a, {
						className: Object(l.a)(J.a.Container, this.props.className),
						fitPageToContent: !0,
						trendingUnit: b && i.a.createElement(ae, {
							showCardView: c === w.g.Large
						}),
						content: i.a.createElement(o.Fragment, null, b && i.a.createElement(N.a, {
							className: J.a.duHeader
						}, Z._("Popular posts", null, {
							hk: "36DJb4"
						})), i.a.createElement(y.a, null), n && i.a.createElement(k.a, null), i.a.createElement(_.a, h), i.a.createElement(v.a, null), i.a.createElement(C.a, {
							listingKey: this.props.listingKey,
							shortTimer: !0,
							handlePillClick: this.props.refreshFeed
						}), i.a.createElement(j.a, {
							injectChildren: E,
							noPostsComponent: () => i.a.createElement(f.a, {
								listingName: H.b,
								sort: this.props.sort
							}),
							key: "listing",
							listingKey: d,
							listingName: H.b,
							listingViewed: (e, t) => Object(I.f)(d, this.props.sort, t, e, this.props.timeSort),
							onLoadMore: this.props.onLoadMorePosts,
							isActionBarAnimationEnabled: t
						})),
						sidebar: S
					})
				}
			}
			t.default = X(ne(Object(S.c)(oe)))
		},
		"./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = s("./src/reddit/selectors/subreddit.ts"),
				i = s("./src/reddit/selectors/user.ts"),
				c = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				d = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const l = Object(n.a)(c.a, (e, {
					listingName: t
				}) => {
					const s = Object(i.vb)(e);
					if (!s) return !1;
					let n;
					if (-1 === [a.R, "r/popular"].indexOf(t)) {
						const r = t.replace(/^r\//, ""),
							a = Object(o.E)(e, r),
							i = s.subreddit[a];
						if (!i) return !1;
						n = i
					} else n = s;
					if (!n.rpanDuDismissalTime) return !1;
					return new Date(n.rpanDuDismissalTime).getTime() > Date.now() - 30 * r.z
				}, (e, {
					listingName: t
				}) => t, (e, {
					listingName: t
				}) => Object(d.m)(e, {
					subreddit: t
				}), d.k, (e, {
					sort: t
				}) => t, (e, t, s, n, a, o) => o !== r.U.AWARDED && (!!e && (!a.isPermanentlyCanceled && (!t && (!!n && n.show_discovery_unit))))),
				u = Object(n.a)((e, {
					listingName: t
				}) => t, (e, {
					listingName: t
				}) => Object(d.m)(e, {
					subreddit: t
				}), d.l, (e, t, s) => t ? t.discovery_unit_index : a.i)
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "l", (function() {
				return v
			})), s.d(t, "m", (function() {
				return N
			})), s.d(t, "i", (function() {
				return S
			})), s.d(t, "d", (function() {
				return T
			})), s.d(t, "h", (function() {
				return I
			})), s.d(t, "k", (function() {
				return D
			})), s.d(t, "c", (function() {
				return L
			})), s.d(t, "f", (function() {
				return F
			})), s.d(t, "a", (function() {
				return U
			})), s.d(t, "j", (function() {
				return M
			})), s.d(t, "b", (function() {
				return W
			})), s.d(t, "e", (function() {
				return q
			})), s.d(t, "g", (function() {
				return G
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				o = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				i = s("./src/reddit/selectors/posts.ts"),
				c = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				d = s("./node_modules/lodash/memoize.js");
			const l = e => e.publicAccessNetwork.listings,
				u = s.n(d)()(e => Object(r.a)(Object(n.a)(l, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var m = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const p = e => e.publicAccessNetwork.models,
				b = e => e.publicAccessNetwork.reports.reported,
				h = e => e.publicAccessNetwork.history,
				g = e => e.publicAccessNetwork.history.cursor,
				f = e => e.publicAccessNetwork.history.visitOrder,
				y = e => e.publicAccessNetwork.hlsStreams,
				x = Object(n.a)(y, e => e.ended),
				_ = Object(n.a)(y, e => e.removed),
				k = Object(n.a)(p, x, _, (e, t, s) => {
					const n = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const n = s.stream.state,
							r = B(n, o.a.ENDED) ? o.a.ENDED : n,
							a = s.stream.vod_accessible;
						return r === n && !0 === a ? e : {
							...e,
							[t]: {
								...s,
								stream: {
									...s.stream,
									state: r,
									vod_accessible: !0
								}
							}
						}
					}, e);
					return s.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const n = s.stream.state,
							r = B(n, o.a.ENDED) ? o.a.ENDED : n,
							a = s.stream.vod_accessible;
						return r === n && !1 === a ? e : {
							...e,
							[t]: {
								...s,
								stream: {
									...s.stream,
									state: r,
									vod_accessible: !1
								}
							}
						}
					}, n)
				}),
				v = (e, t) => {
					return k(e)[Object(a.g)(t)]
				},
				j = Object(n.a)((e, {
					streamIdFromPath: t
				}) => t, (e, t) => u(t.listingName)(e, t), k, b, i.h, (e, t, s, n, r) => {
					const i = [];
					if (e) {
						const t = Object(a.g)(e);
						s[t] && i.push(t)
					}
					const c = i.concat(t),
						d = [...new Set(c)],
						l = new Set([...n, ...r]);
					return d.filter(e => {
						const t = s[e];
						return !l.has(e) && !t.post.isHidden && t.stream.state !== o.a.KILLED && t.stream.state !== o.a.PURGED
					})
				}),
				O = Object(n.a)((e, {
					count: t
				}) => t, k, (e, {
					listingName: t,
					streamIdFromPath: s
				}) => j(e, {
					listingName: t,
					streamIdFromPath: s
				}), (e, t, s) => {
					const n = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? n.slice(0, e) : n
				}),
				N = Object(n.a)(k, O, (e, t) => {
					const s = t[0];
					if (s) return e[s]
				}),
				E = Object(n.a)(f, (e, {
					related: t,
					streamIdFromPath: s,
					subreddit: n
				}) => O(e, {
					listingName: t || n,
					streamIdFromPath: s
				}), (e, t) => {
					const s = new Set(e),
						n = t.filter(e => !s.has(e));
					if (n.length) return n[0]
				}),
				C = Object(n.a)((e, {
					streamIdFromPath: t
				}) => t, k, (e, {
					related: t,
					streamIdFromPath: s,
					subreddit: n
				}) => O(e, {
					listingName: t || n,
					streamIdFromPath: s
				}), h, (e, t, s, n) => {
					if (!s.length) return;
					const r = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						a = r.find(e => e.stream.state === o.a.IS_LIVE);
					if (a) return a.post.id;
					const i = r.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (n.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return i ? i.post.id : void 0
				}),
				S = Object(r.a)(Object(n.a)(C, k, (e, t) => e ? t[e] : void 0)),
				P = Object(n.a)((e, {
					streamIdFromPath: t
				}) => t ? Object(a.g)(t) : void 0, C, b, i.h, (e, {
					related: t,
					streamIdFromPath: s,
					subreddit: n
				}) => O(e, {
					listingName: t || n,
					streamIdFromPath: s
				}), (e, t, s, n, r) => !e || s.includes(e) || n.includes(e) ? t || r[0] : e),
				w = Object(n.a)(g, f, E, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				A = Object(n.a)(g, f, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				T = Object(r.a)(Object(n.a)(P, k, (e, t) => e ? t[e] : void 0)),
				I = Object(r.a)(Object(n.a)(w, k, (e, t) => e ? t[e] : void 0)),
				D = Object(r.a)(Object(n.a)(A, k, (e, t) => e ? t[e] : void 0)),
				L = (Object(r.a)(Object(n.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, k, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => ({
					...t[s],
					preloadedPreviewUrl: e[s]
				})))), Object(n.a)(P, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				F = Object(n.a)((e, {
					streamIdFromPath: t
				}) => t ? v(e, t) : void 0, e => !e || e.chat_disabled);

			function B(e, t) {
				const s = {
					[o.a.NOT_STARTED]: 0,
					[o.a.PUBLISHED]: 1,
					[o.a.IS_LIVE]: 2,
					[o.a.DISCONNECTED]: 2,
					[o.a.ENDED]: 3,
					[o.a.KILLED]: 4,
					[o.a.PURGED]: 4
				};
				return s[t] >= s[e]
			}
			const R = Object(n.a)(P, h, (e, t) => e && t.timestamps[e] || 0);
			var U;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(U || (U = {}));
			const M = Object(n.a)(P, k, m.b, (e, t, s) => {
					if (s) return U.INTRO;
					const n = e && t[e];
					if (!n) return U.UNAVAILABLE;
					const r = n.stream.state;
					return r === o.a.IS_LIVE || r === o.a.DISCONNECTED ? U.LIVE : r === o.a.ENDED && n.stream.vod_accessible ? U.VOD : U.UNAVAILABLE
				}),
				W = Object(n.a)(T, M, m.b, c.b, c.o, (e, t, s, n, r) => s ? n : e ? t === U.LIVE || t === U.VOD ? e.stream.hls_url : r : void 0),
				q = Object(n.a)(T, M, R, (e, t, s) => e ? t === U.LIVE ? e.broadcast_time : t === U.VOD && s < e.broadcast_time ? s : 0 : 0),
				G = (e, t) => {
					const s = p(e);
					return !!s && s[t] && s[t].chat_disabled
				}
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const o = e => e.publicAccessNetwork.theaterSettings,
				i = Object(n.a)(o, a.n, (e, t) => t && !e.isIntroFinished),
				c = Object(n.a)(o, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + r.a > Date.now()
		},
		"./src/reddit/selectors/experiments/adsCardViewHoldout.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/constants/postLayout.ts"),
				a = s("./src/reddit/contexts/PageLayer/index.tsx"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const i = e => r.e[Object(a.O)(e, {})] === r.d.Card,
				c = e => Object(o.c)(e, {
					experimentEligibilitySelector: i,
					experimentName: n.O
				}) === n.fb.Treatment
		},
		"./src/reddit/selectors/live.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return r
			}));
			const n = e => e.live.featured,
				r = e => e.live.announcements
		},
		"./src/reddit/selectors/subredditLeaderboard.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return a
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			}));
			var n = s("./src/reddit/constants/subredditLeaderboard.ts"),
				r = s("./src/reddit/selectors/category.ts");
			const a = (e, t) => e.subreddits.rankingsPageInfo && e.subreddits.rankingsPageInfo[t] && e.subreddits.rankingsPageInfo[t].hasPreviousPage,
				o = (e, t) => e.subreddits.rankingsPageInfo && e.subreddits.rankingsPageInfo[t] && e.subreddits.rankingsPageInfo[t].hasNextPage,
				i = (e, t) => t === n.q ? n.p : t === n.m ? n.l : e || n.c,
				c = (e, t) => {
					const s = e.subreddits.rankings,
						n = t && Object(r.f)(e, {
							categoryName: t
						}),
						a = s[i(n && n.id || null, t)];
					return !(!a || !a.length)
				}
		},
		"./src/redditGQL/operations/Frontpage.json": function(e) {
			e.exports = JSON.parse('{"id":"4ae1ac71ddb8"}')
		},
		"./src/redditGQL/operations/GetNearbySubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"26ddd553d11e"}')
		},
		"./src/redditGQL/operations/TopSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"bc611d08f6ef"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Frontpage.64bbd63bac3d0f53713e.js.map