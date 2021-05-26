// https://www.redditstatic.com/desktop2x/Frontpage.1c39410950bee68c913e.js
// Retrieved at 5/26/2021, 11:00:05 AM by Reddit Dataminer v1.0.0
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
					var i = n(s, a),
						o = e[i];
					e[i] = e[s], e[s] = o
				}
				return e.length = t, e
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arraySampleSize.js"),
				r = s("./node_modules/lodash/_baseSampleSize.js"),
				a = s("./node_modules/lodash/isArray.js"),
				i = s("./node_modules/lodash/_isIterateeCall.js"),
				o = s("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, s) {
				return t = (s ? i(e, t, s) : void 0 === t) ? 1 : o(t), (a(e) ? n : r)(e, t)
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
		"./src/graphql/operations/Frontpage.json": function(e) {
			e.exports = JSON.parse('{"id":"6a0ecb95bab8"}')
		},
		"./src/graphql/operations/GetNearbySubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"26ddd553d11e"}')
		},
		"./src/graphql/operations/TopSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"bc611d08f6ef"}')
		},
		"./src/reddit/actions/frontpage/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "frontpagePending", (function() {
				return oe
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
				i = s("./src/lib/getParsedUserAgent/index.ts"),
				o = s("./src/reddit/actions/actionBarAnimation/index.ts"),
				c = s("./src/reddit/actions/focusedVerticals/index.ts"),
				d = s("./src/reddit/components/CountAnimation/helpers.ts"),
				l = s("./src/reddit/constants/experiments.ts"),
				u = s("./src/graphql/operations/Frontpage.json"),
				m = s("./src/lib/base64/index.ts"),
				p = s("./src/lib/constants/index.ts"),
				b = s("./src/lib/makeGqlRequest/index.ts"),
				h = s("./src/lib/performanceTimings/index.tsx"),
				g = s("./src/reddit/constants/graphql.ts"),
				f = s("./src/reddit/helpers/getPostLimitForMobile/index.ts"),
				y = s("./src/lib/env/index.ts"),
				x = s("./src/lib/sentry/index.ts"),
				_ = s("./src/reddit/models/Live/index.ts"),
				k = s("./src/reddit/models/Post/index.ts"),
				v = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				j = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				O = s("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				E = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				N = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				C = s("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				S = s("./src/reddit/selectors/meta.ts"),
				P = s("./src/reddit/selectors/platform.ts"),
				w = s("./src/reddit/selectors/user.ts");
			const T = (e, t) => {
					const {
						after: s,
						dist: n,
						isMobile: r,
						layout: a,
						limit: i,
						sort: o,
						t: c
					} = t, d = Object(w.Q)(e) || Object(w.J)(e), l = Object(P.o)(e), u = Object.values(p.w).map(e => e), b = Object(S.b)(e), h = u.includes(b) ? b : p.w.Everywhere, y = {
						adContext: {
							layout: a ? a.toUpperCase() : g.a.Card,
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
						region: h
					};
					return o && (y.sort = o.toUpperCase()), c && (y.range = c.toUpperCase()), r ? y.pageSize = Object(f.a)(a) : i && (y.pageSize = i), l && l.ad && (y.forceAds = {
						ad: l.ad
					}), s && (y.after = Object(m.a)(s)), y
				},
				A = async (e, t, s, n) => {
					const r = Date.now(),
						a = await ((e, t) => Object(b.a)(e, {
							...u,
							variables: t
						}, {
							traceRequestName: "get_frontpage"
						}))(e, t),
						i = Date.now();
					let o;
					try {
						const e = Date.now();
						o = (({
							trendingSubreddits: e = [],
							identity: t,
							home: s,
							featuredAnnouncements: n,
							recentPosts: r = []
						}) => {
							const a = [],
								i = [];
							let o;
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
									const t = Object(j.e)(e);
									c.posts[t.id] = t;
									const {
										crosspostRoot: s
									} = e;
									s && s.type === k.a.Post && s.postInfo && d(s.postInfo);
									let n = t.id;
									if (Object(k.l)(e)) c.profiles[e.profile.id] || (c.profiles[e.profile.id] = Object(E.a)(e.profile));
									else if (Object(k.m)(e)) c.subreddits[e.subreddit.id] || (c.subreddits[e.subreddit.id] = Object(N.a)(e.subreddit)), c.postFlair[e.subreddit.id] || (c.postFlair[e.subreddit.id] = Object(v.a)(e.subreddit));
									else if (Object(k.h)(e)) {
										const s = Object(j.b)(e);
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
								if (Object(k.k)(p)) {
									const e = d(p);
									e && c.postIds.push(e)
								} else if (Object(_.c)(p) && !o) o = p;
							else {
								const e = `Received unhandled element type when processing frontpage data: "${p.__typename}"`;
								Object(y.b)() || console.warn(e), x.c.captureMessage(e)
							}
							for (const p of r) {
								if (!p) continue;
								const e = d(p);
								e && i.push(e)
							}
							const l = c.postIds.length - 1,
								u = l >= 0 ? c.postIds[l] : "",
								m = s.elements.dist;
							return {
								...c,
								account: t && Object(C.a)(t) || null,
								featuredLiveThread: o,
								announcements: n,
								preferences: t && t.preferences && Object(O.a)(t.preferences, t.interactions) || null,
								...0 !== a.length && {
									trendingSubredditIds: a
								},
								...0 !== i.length && {
									recentPostIds: i
								},
								token: u,
								...null !== m && {
									dist: m
								}
							}
						})(a.body.data);
						const t = Date.now(),
							c = [{
								duration: i - r,
								logKeyType: h.a.gqlFetchTiming
							}, {
								duration: t - e,
								logKeyType: h.a.gqlNormalizationTiming
							}];
						Object(h.h)({
							name: p.p.FRONTPAGE,
							isLoggedIn: s,
							metrics: c,
							statsdPathsForExperiments: n
						})
					} catch (c) {}
					return {
						...a,
						body: o
					}
				};
			var I = s("./src/lib/pageTitle.ts"),
				F = s("./src/reddit/actions/login.ts"),
				L = s("./src/reddit/actions/platform.ts"),
				D = s("./src/reddit/actions/toaster.ts"),
				B = s("./src/reddit/constants/page.ts"),
				R = s("./src/reddit/constants/parameters.ts"),
				U = s("./src/reddit/constants/postLayout.ts"),
				M = s("./src/reddit/contexts/PageLayer/index.tsx"),
				W = s("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				q = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				V = s("./src/reddit/models/Toast/index.ts"),
				G = s("./src/reddit/selectors/experiments/index.ts"),
				H = s("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				K = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				Q = s("./src/reddit/selectors/frontpage.ts"),
				z = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				J = s("./src/reddit/selectors/runTimeEnvVars.ts"),
				Z = s("./src/lib/makeActionCreator/index.ts"),
				Y = s("./src/lib/makeListingKey/index.ts"),
				X = s("./src/reddit/actions/ads/index.ts"),
				$ = s("./src/reddit/helpers/chooseVariant/index.ts"),
				ee = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				te = s("./src/reddit/actions/seo/linksModule.ts"),
				se = s("./src/reddit/selectors/seo/linksModule.ts"),
				ne = s("./src/reddit/actions/publicAccessNetwork/api.ts"),
				re = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				ae = s("./src/reddit/helpers/filterListingResponse/index.ts"),
				ie = s("./src/reddit/actions/frontpage/constants.ts");
			const oe = Object(Z.a)(ie.c),
				ce = Object(Z.a)(ie.b),
				de = Object(Z.a)(ie.a),
				le = (e, t) => async (s, r, a) => {
					var c, u;
					const m = r();
					if (m.listings.postOrder.api.pending[e]) return;
					const p = U.e[Object(M.O)(m, {})];
					t.isMobile = Object(i.e)(m.meta.userAgent), t.recentPostIds = m.posts.recent, t.layout = p, t.useMockData = !!m.platform.currentPage && (!!m.platform.currentPage.queryParams.useMockData && Object(J.b)(m)), s(oe({
						key: e
					})); {
						const e = m.platform.currentPage,
							s = e && e.url;
						s && (t.clickUrl = s)
					}
					const b = null === (u = null === (c = Object(P.b)(m)) || void 0 === c ? void 0 : c.routeMatch) || void 0 === u ? void 0 : u.route.chunk,
						g = Object(w.J)(m),
						f = await Object(h.i)(() => A(a.gqlContext(), T(m, t), Object(w.Q)(m), t.statsdPathsForExperiments), {
							name: "fetchFrontpageData",
							isLoggedIn: g,
							page: b
						});
					s(Object(L.m)(f.status));
					const y = `error-${e}`;
					if (f.ok) {
						const t = f.body;
						if (s(ce({
								key: e,
								meta: m.meta,
								...t
							})), Object(K.b)(m)) {
							const {
								postIds: e,
								posts: n
							} = t, r = Object(G.d)(m, {
								experimentName: l.yc
							});
							s(Object(o.a)(Object(d.c)(e, n, null == r ? void 0 : r.variant)))
						}
						s(D.g(y)), s(Object(X.b)(ee.a.FRONTPAGE))
					} else s(de({
						error: f.error,
						key: e,
						...f.body
					})), s(D.f({
						id: y,
						kind: V.b.Error,
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
						i = Object(Q.a)(r),
						{
							sort: o = i
						} = e.params,
						c = Object(Y.a)(B.a, o, e.queryParams),
						d = r.listings.postOrder.ids[c],
						l = r.listings.postOrder.api.error[c],
						u = r.listings.postOrder.api.pending[c],
						m = R.x in e.queryParams && e.queryParams[R.x].toUpperCase() || "",
						b = m in p.Yb && p.Yb[m];
					if (u || d && !l && !t) return void(d && (s(L.l({
						title: I.c()
					})), r.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						s(Object(X.b)(ee.a.FRONTPAGE))
					})));
					const h = Object(W.a)(r),
						g = Object(W.b)(h),
						f = [Object(W.c)(h)];
					await s(le(c, {
						...a()(e.queryParams, R.l),
						...a()(e.queryParams, R.k),
						limit: g,
						sort: o,
						statsdPathsForExperiments: f,
						t: Object(q.a)(o, b)
					})), s(L.l({
						title: I.c()
					})), Object($.c)(r, {
						experimentEligibilitySelector: $.a,
						experimentName: "redesign_aa"
					});
					const y = Object(H.a)(r, {});
					Object(H.e)(y) && s(Object(F.j)())
				}, me = () => async (e, t) => {
					var s, n;
					const r = t();
					if (Object(se.a)(r)) return;
					const a = null === (n = null === (s = Object(P.b)(t())) || void 0 === s ? void 0 : s.routeMatch) || void 0 === n ? void 0 : n.route.chunk,
						i = Object(w.J)(r);
					return Object(h.i)(() => e(Object(te.d)()), {
						name: "frontpageLinksRequested",
						page: a,
						isLoggedIn: i
					})
				}, pe = (e, t) => async s => {
					await Promise.all([s(Object(c.b)()), s(ue(e, t)), s(me()), s(Object(ne.c)(re.R))])
				}, be = Object(Z.a)(ie.d), he = e => async (t, s) => {
					const n = s(),
						r = n.platform.currentPage.routeMatch.match;
					Object(z.o)(n) || Object(z.u)(n) || (e || t(be()), await t(pe(r, !0)))
				}, ge = Object(Z.a)(ie.g), fe = Object(Z.a)(ie.f), ye = Object(Z.a)(ie.e), xe = e => async (t, s, {
					gqlContext: n
				}) => {
					const r = s(),
						c = Object(Q.a)(r),
						{
							sort: u = c
						} = e,
						m = r.platform.currentPage ? r.platform.currentPage.queryParams : {},
						b = Object(Y.a)(B.a, u, m),
						h = r.listings.postOrder.loadMore[b],
						g = m[R.x] ? m[R.x].toUpperCase() : "",
						f = g in p.Yb && p.Yb[g];
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
								p = [Object(W.c)(s)],
								g = {
									after: h.token,
									dist: h.dist,
									...a()(m, R.l),
									isMobile: Object(i.e)(r.meta.userAgent),
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
							const y = () => A(n(), T(r, g), Object(w.Q)(r), p),
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
									})), Object(K.b)(r)) {
									const {
										postIds: e,
										posts: s
									} = _, n = Object(G.d)(r, {
										experimentName: l.yc
									});
									t(Object(o.a)(Object(d.c)(e, s, null == n ? void 0 : n.variant)))
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
						i = n.platform.currentPage ? n.platform.currentPage.queryParams : {},
						o = Object(Y.a)(B.a, a, i),
						c = i[R.x] ? i[R.x].toUpperCase() : "",
						d = c in p.Yb && p.Yb[c],
						l = Object(W.a)(n),
						u = Object(W.b)(l);
					await t(le(o, {
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
				i = s("./src/reddit/endpoints/subreddit/local.ts"),
				o = s("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
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
					const h = t === a.k ? async function() {
						const t = await Object(i.a)(r(), e);
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
						const t = await Object(o.a)(r(), e);
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
			class i {
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
			var o = s("./src/reddit/actions/focusedVerticals/constants.ts"),
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
					const p = new i;
					return m = {
						estHeight: o.d,
						id: `focused-vertical-recommendation-${t}-${s}-${n}`,
						trackOnEnteredViewport() {
							p.publish(o.b)
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
				i = s("./src/reddit/components/DiscoveryUnit/Layout/index.m.less"),
				o = s.n(i);
			class c extends r.a.Component {
				render() {
					return r.a.createElement("div", {
						className: Object(a.a)(o.a.heroContainer, this.props.className)
					}, r.a.createElement("div", {
						className: Object(a.a)(o.a.header, this.props.headerClassName)
					}, this.props.header), r.a.createElement("div", {
						className: Object(a.a)(this.props.hidePadding ? o.a.bodyHidePadding : o.a.body, this.props.bodyClassName)
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
				i = s.n(a),
				o = s("./src/config.ts"),
				c = s("./src/reddit/components/FakeBannerAd/index.m.less"),
				d = s.n(c),
				l = s("./src/lib/lessComponent.tsx");
			const u = l.a.wrapped(e => i.a.createElement("div", {
					className: e.className,
					ref: e.bannerRef
				}, e.children), "BannerContainer", d.a),
				m = l.a.wrapped(e => i.a.createElement("img", {
					className: e.className,
					src: e.src
				}), "FakeBannerAdImage", d.a),
				p = "GoogleAd HomeAds InArticleAd LeftAd SidebarAd ad-300-250 ad-banner adbar adbox1 ads-area adsense-ad box_ad googad",
				b = .5;
			class h extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.bannerRef = i.a.createRef(), this.state = {
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
					} = this.state, a = s ? i.a.createElement(m, {
						src: o.a.assetPath + t
					}) : i.a.createElement(r.a, {
						onChange: this.handleVisibilityChange,
						threshold: b
					}, i.a.createElement(m, {
						src: o.a.assetPath + t
					}));
					return i.a.createElement(u, {
						bannerRef: this.bannerRef,
						className: p,
						"data-before-content": n.fbt._("advertisement", null, {
							hk: "4b2OD7"
						})
					}, i.a.createElement("a", {
						href: o.a.redditUrl + e,
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
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/selectors/live.ts");
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
					const e = Object(i.e)(o.a, (e, t) => e && t && e[0].id === t[0].id || !1),
						t = Object(i.e)(o.b);
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
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/random.js"),
				a = s.n(r),
				i = s("./node_modules/lodash/shuffle.js"),
				o = s.n(i),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				l = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/reselect/es/index.js"),
				m = s("./src/reddit/actions/subreddit.ts"),
				p = s("./src/reddit/actions/subreddit/topSubreddits.ts"),
				b = s("./src/reddit/components/IdCard/async.tsx"),
				h = s("./node_modules/react-router-redux/es/index.js"),
				g = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				f = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				y = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/icons/fonts/index.tsx"),
				_ = s("./src/reddit/icons/svgs/Premium/index.tsx"),
				k = s("./src/reddit/components/PremiumCTA/index.m.less"),
				v = s.n(k);
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class O extends d.a.Component {
				render() {
					const {
						className: e,
						isInIcons2020: t,
						onClickPremium: s
					} = this.props;
					return d.a.createElement(g.a, null, d.a.createElement(f.a, {
						className: e,
						contentOnly: !0
					}, d.a.createElement("div", {
						className: v.a.wrapper
					}, t ? d.a.createElement(x.a, {
						name: "premium",
						isFilled: !0,
						className: v.a.icon
					}) : d.a.createElement(_.a, {
						className: v.a.icon
					}), d.a.createElement("div", {
						className: v.a.content
					}, d.a.createElement("div", {
						className: v.a.title
					}, j._("Reddit Premium", null, {
						hk: "39JIKQ"
					})), d.a.createElement("div", {
						className: v.a.description
					}, j._("The best Reddit experience, with monthly Coins", null, {
						hk: "2n1ct3"
					}))), d.a.createElement(y.h, {
						className: v.a.cta,
						onClick: s
					}, j._("Try Now", null, {
						hk: "2HeiOg"
					})))))
				}
			}
			var E = Object(l.b)(void 0, e => ({
					onClickPremium: () => e(Object(h.b)("/premium"))
				}))(O),
				N = s("./src/lib/classNames/index.ts"),
				C = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				S = s("./src/reddit/controls/InternalLink/index.tsx"),
				P = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				w = s("./src/reddit/components/SEOSidebarLinks/index.m.less"),
				T = s.n(w);
			const A = ({
					to: e,
					title: t
				}) => d.a.createElement(C.a, {
					subredditName: t,
					tooltipPosition: ["right", "top"]
				}, d.a.createElement(S.a, {
					className: T.a.Link,
					to: e,
					title: t
				}, t)),
				I = ({
					title: e,
					isOpened: t,
					isExpanded: s,
					children: r,
					onToggle: a,
					onExpand: i
				}) => d.a.createElement("div", {
					className: Object(N.a)(T.a.Section, {
						[T.a.opened]: t,
						[T.a.expanded]: s
					})
				}, d.a.createElement("div", {
					className: T.a.SectionHeader,
					onClick: a
				}, d.a.createElement("div", {
					className: T.a.SectionTitle
				}, e), d.a.createElement(P.a, {
					className: T.a.SectionChevron
				})), d.a.createElement("div", {
					className: T.a.SectionBody
				}, d.a.createElement("div", {
					className: T.a.SectionContent
				}, r), d.a.createElement("div", {
					className: T.a.SectionFooter
				}, d.a.createElement(y.o, {
					className: T.a.SectionButton,
					onClick: i
				}, s ? n.fbt._("Less", null, {
					hk: "PF0lJ"
				}) : n.fbt._("See more", null, {
					hk: "439kAh"
				})))));
			class F extends d.a.Component {
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
					}) => d.a.createElement(A, {
						key: t,
						to: e,
						title: t
					}), this.renderSection = (e, t) => d.a.createElement(I, {
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
					if (t) return d.a.createElement(f.a, {
						className: Object(N.a)(T.a.Widget, e),
						contentOnly: !0
					}, t.map(this.renderSection))
				}
			}
			var L = F,
				D = s("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				B = s("./src/reddit/components/SidebarContainer/index.tsx"),
				R = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				U = s("./node_modules/lodash/sampleSize.js"),
				M = s.n(U),
				W = s("./node_modules/request-idle-callback/index.js"),
				q = s("./src/lib/constants/index.ts"),
				V = s("./src/reddit/components/SubredditIcon/index.tsx"),
				G = s("./src/reddit/constants/localStorage.ts"),
				H = s("./src/reddit/contexts/ApiContext.tsx"),
				K = s("./src/reddit/featureFlags/component.tsx"),
				Q = s("./src/reddit/helpers/localStorage/index.ts"),
				z = s("./src/reddit/helpers/name/index.ts"),
				J = s("./src/lib/makeApiRequest/index.ts"),
				Z = s("./src/lib/omitHeaders/index.ts"),
				Y = s("./src/reddit/constants/headers.ts");
			const X = e => Object(J.a)(Object(Z.a)(e, [Y.a]), {
				endpoint: `${e.apiUrl}/api/multi/user/CommunityAdoptionBot/m/adoption_week/`,
				method: q.eb.GET,
				type: "json"
			});
			var $ = s("./src/reddit/components/SubredditAdoptionWidget/index.m.less"),
				ee = s.n($);
			const {
				fbt: te
			} = s("./node_modules/fbt/lib/FbtPublic.js"), se = 3, ne = 30 * q.fb, re = "SubredditAdoption";
			class ae extends d.a.Component {
				constructor() {
					super(...arguments), this.state = {
						subredditNames: []
					}
				}
				async getSubredditForAdoption() {
					let e = ae.cachedData || Object(Q.w)(G.b.SUBREDDITS_FOR_ADOPTION_STORE) || null;
					if (!e || Date.now() - e.fetchedAt > ne) {
						const t = await X(this.props.apiContext());
						t.ok && (e = {
							subreddits: t.body.data.subreddits.map(e => e.name),
							fetchedAt: Date.now()
						}, Object(Q.ub)(G.b.SUBREDDITS_FOR_ADOPTION_STORE, e))
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
					return e.length ? d.a.createElement("div", {
						className: ee.a.container
					}, d.a.createElement("div", {
						className: ee.a.main
					}, d.a.createElement("div", {
						className: ee.a.title
					}, d.a.createElement(V.b, {
						className: ee.a.icon
					}), te._("International Subreddit Adoption Week", null, {
						hk: "487Ffc"
					})), d.a.createElement("div", {
						className: ee.a.description
					}, te._("{subreddits list} and more are looking for moderators!", [te._param("subreddits list", d.a.createElement("strong", null, e.map(z.c).join(", ") + (e.length > 1 ? "," : "")))], {
						hk: "2Tb946"
					}))), d.a.createElement(y.k, {
						className: ee.a.button,
						to: `/r/${re}?utm_source=reddit&utm_medium=fp_banner&utm_campaign=subreddit_adoption_week`
					}, te._("Go Now", null, {
						hk: "LCCmX"
					}))) : null
				}
			}
			ae.cachedData = null;
			var ie = Object(K.a)("srAdoptionWeek", Object(H.b)(ae)),
				oe = s("./src/reddit/components/TopSubredditsWidget/Container.tsx"),
				ce = s("./src/reddit/actions/post.ts"),
				de = s("./src/reddit/components/MiniPost/index.tsx"),
				le = s("./src/reddit/components/Widgets/Base/index.tsx");
			class ue extends d.a.Component {
				render() {
					return d.a.createElement("div", null, d.a.createElement(le.a, null, this.props.headerText), this.props.posts.map(e => d.a.createElement(de.a, {
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
			const fe = Object(l.b)(null, (e, t) => ({
					openLightbox: t => () => e(Object(pe.a)(t.permalink)),
					clearLinks: () => e(Object(ce.r)())
				})),
				ye = ge.a.button("ClearButton", he.a);
			class xe extends d.a.Component {
				render() {
					return d.a.createElement(le.b, null, d.a.createElement(me, {
						className: this.props.className,
						headerText: n.fbt._("Recent posts", null, {
							hk: "1olaOT"
						}),
						posts: this.props.posts
					}), d.a.createElement(ye, {
						onClick: this.props.clearLinks
					}, n.fbt._("Clear", null, {
						hk: "1RMjjy"
					})))
				}
			}
			var _e = fe(xe),
				ke = s("./src/reddit/selectors/posts.ts");
			const ve = Object(u.c)({
				recentPosts: ke.O
			});
			var je = Object(l.b)(ve, (e, t) => ({
					openLightbox: t => () => e(Object(pe.a)(t.permalink))
				}))(({
					className: e,
					recentPosts: t
				}) => t && t.length ? d.a.createElement(g.a, null, d.a.createElement(_e, {
					className: e,
					headerText: n.fbt._("Recent posts", null, {
						hk: "1olaOT"
					}),
					posts: t
				})) : null),
				Oe = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Ee = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				Ne = s("./src/reddit/selectors/subreddit.ts");
			var Ce = Object(l.b)(Object(u.c)({
					communities: Ne.f
				}))(Object(Oe.c)(e => d.a.createElement(Ee.b, {
					className: e.className,
					communities: e.communities,
					getClickEventFactory: e.getClickEventFactory,
					getSubscribeEventFactoryHandler: e.getSubscribeEventFactoryHandler,
					sendEvent: e.sendEvent,
					title: e.title
				}))),
				Se = s("./src/config.ts"),
				Pe = s("./src/lib/env/index.ts"),
				we = s("./src/reddit/controls/Chip/index.tsx"),
				Te = s("./src/reddit/helpers/trackers/widgets.ts"),
				Ae = s("./src/reddit/hooks/useTracking.ts");
			const Ie = [{
				getName: () => n.fbt._("Fashion", null, {
					hk: "4tXmOZ"
				}),
				url: "fashion"
			}, {
				getName: () => n.fbt._("Movies", null, {
					hk: "42bzfq"
				}),
				url: "movie"
			}, {
				getName: () => n.fbt._("Television", null, {
					hk: "4CMqPm"
				}),
				url: "television"
			}, {
				getName: () => n.fbt._("Comedy", null, {
					hk: "1ehWvG"
				}),
				url: "comedy"
			}, {
				getName: () => n.fbt._("Books", null, {
					hk: "13uutx"
				}),
				url: "book"
			}, {
				getName: () => n.fbt._("Gaming", null, {
					hk: "2mozPB"
				}),
				url: "gaming"
			}, {
				getName: () => n.fbt._("Science", null, {
					hk: "4u0516"
				}),
				url: "science"
			}, {
				getName: () => n.fbt._("Animals and Pets", null, {
					hk: "3TIGi8"
				}),
				url: "animals_and_pets"
			}, {
				getName: () => n.fbt._("Nature", null, {
					hk: "WhmJu"
				}),
				url: "nature"
			}, {
				getName: () => n.fbt._("Travel", null, {
					hk: "3PHfih"
				}),
				url: "travel"
			}, {
				getName: () => n.fbt._("Sports", null, {
					hk: "3GJvo1"
				}),
				url: "sports"
			}, {
				getName: () => n.fbt._("Memes", null, {
					hk: "4lL42P"
				}),
				url: "internet_culture_and_memes"
			}, {
				getName: () => n.fbt._("Music", null, {
					hk: "15iqrr"
				}),
				url: "music"
			}, {
				getName: () => n.fbt._("Crafts and DIY", null, {
					hk: "1JGKiO"
				}),
				url: "crafts_and_diy"
			}, {
				getName: () => n.fbt._("Technology", null, {
					hk: "2eXPke"
				}),
				url: "technology"
			}, {
				getName: () => n.fbt._("Art", null, {
					hk: "3cl8al"
				}),
				url: "art"
			}, {
				getName: () => n.fbt._("Hobbies", null, {
					hk: "3uC7Vw"
				}),
				url: "hobby"
			}, {
				getName: () => n.fbt._("Gardening", null, {
					hk: "2Uozgr"
				}),
				url: "gardening"
			}, {
				getName: () => n.fbt._("Art Garfunkel", null, {
					hk: "l1iiQ"
				}),
				url: "art_garfunkel"
			}, {
				getName: () => n.fbt._("Tree Frogs", null, {
					hk: "KVS4d"
				}),
				url: "tree_frog"
			}, {
				getName: () => n.fbt._("Adventure Novels", null, {
					hk: "3vbZt6"
				}),
				url: "adventure_novel"
			}, {
				getName: () => n.fbt._("Learning and Education", null, {
					hk: "3wIdG"
				}),
				url: "learning_and_education"
			}, {
				getName: () => n.fbt._("Family", null, {
					hk: "1GgG8Z"
				}),
				url: "family"
			}, {
				getName: () => n.fbt._("Q&A", null, {
					hk: "4En8Hj"
				}),
				url: "qa"
			}, {
				getName: () => n.fbt._("Health", null, {
					hk: "RF6iN"
				}),
				url: "health"
			}, {
				getName: () => n.fbt._("Fitness", null, {
					hk: "JczBr"
				}),
				url: "fitness"
			}, {
				getName: () => n.fbt._("History", null, {
					hk: "2bULhT"
				}),
				url: "history"
			}, {
				getName: () => n.fbt._("Activism", null, {
					hk: "2PWJIy"
				}),
				url: "activism"
			}, {
				getName: () => n.fbt._("Cars", null, {
					hk: "4dnuOx"
				}),
				url: "cars_and_motor_vehicles"
			}, {
				getName: () => n.fbt._("Beauty and Makeup", null, {
					hk: "4ncOsg"
				}),
				url: "beauty_and_makeup"
			}, {
				getName: () => n.fbt._("Philosophy", null, {
					hk: "MNowu"
				}),
				url: "ethics_and_philosophy"
			}, {
				getName: () => n.fbt._("Food and Drink", null, {
					hk: "19vNV9"
				}),
				url: "food_and_drink"
			}, {
				getName: () => n.fbt._("Religion", null, {
					hk: "4aCX5k"
				}),
				url: "religion"
			}, {
				getName: () => n.fbt._("World News", null, {
					hk: "4lETuR"
				}),
				url: "world_news"
			}, {
				getName: () => n.fbt._("Politics", null, {
					hk: "41ePs3"
				}),
				url: "politics"
			}, {
				getName: () => n.fbt._("Meta", null, {
					hk: "1SKBT1"
				}),
				url: "meta_reddit"
			}, {
				getName: () => n.fbt._("Tabletop RPGs", null, {
					hk: "1zUqUF"
				}),
				url: "tabletop_roleplaying_game"
			}, {
				getName: () => n.fbt._("Marketplace and Deals", null, {
					hk: "1qiYgm"
				}),
				url: "marketplace_and_deals"
			}, {
				getName: () => n.fbt._("Finance and Economics", null, {
					hk: "rZrtS"
				}),
				url: "business_economics_and_finance"
			}, {
				getName: () => n.fbt._("Galaxy Quest", null, {
					hk: "1XkOK1"
				}),
				url: "galaxy_quest"
			}, {
				getName: () => n.fbt._("Math", null, {
					hk: "17VRuh"
				}),
				url: "mathematics"
			}, {
				getName: () => n.fbt._("Crypto", null, {
					hk: "1KATZ1"
				}),
				url: "cryptocurrency"
			}];
			var Fe = s("./src/reddit/components/Widgets/Aggregate/TopicsList/index.m.less"),
				Le = s.n(Fe);
			const De = () => {
					const e = `${Se.a.assetPath}/img/banner/banner-medium@2x.png`,
						t = n.fbt._("Find Your Next Community!", null, {
							hk: "4tZ6vB"
						}),
						s = {
							backgroundImage: `url(${e})`
						};
					return d.a.createElement("div", {
						className: Le.a.banner,
						style: s
					}, d.a.createElement("h2", {
						className: Le.a.bannerText
					}, t))
				},
				Be = e => `/t/${e}?activeTab=communities`,
				Re = e => {
					const t = e.topic.getName();
					return d.a.createElement("div", {
						className: Le.a.itemContainer
					}, d.a.createElement(we.a, {
						to: Be(e.topic.url),
						onClick: () => e.sendEvent(Object(Te.c)(t))
					}, t))
				};
			var Ue = d.a.memo(e => {
					const t = Object(Ae.a)();
					Object(c.useEffect)(() => t(Object(Te.d)()), []);
					const s = Ie.map(e => ({
						value: e,
						sort: Object(Pe.d)() ? .5 : Math.random()
					})).sort((e, t) => e.sort - t.sort).map(e => e.value).slice(0, 10);
					return d.a.createElement(f.a, {
						className: e.className,
						noGradient: !0,
						styles: e.widget && e.widget.styles,
						widgetKind: e.widget && e.widget.kind
					}, d.a.createElement(De, null), d.a.createElement("div", {
						className: Le.a.container
					}, s.map(e => d.a.createElement(Re, {
						key: e.url,
						topic: e,
						sendEvent: t
					}))))
				}),
				Me = s("./src/reddit/constants/experiments.ts"),
				We = s("./src/reddit/constants/subredditLeaderboard.ts"),
				qe = s("./src/reddit/constants/tracking.ts"),
				Ve = s("./src/reddit/selectors/telemetry.ts"),
				Ge = s("./src/reddit/selectors/widgets.ts"),
				He = s("./src/telemetry/models/Subreddit.ts");
			const Ke = e => t => s => ({
					...Ve.defaults(s),
					...Object(Ge.b)(s, e),
					source: "trending_community_card",
					action: qe.c.CLICK,
					noun: Object(He.getSubscribeEventNoun)(e.type, t)
				}),
				Qe = e => t => ({
					...Ve.defaults(t),
					...Object(Ge.b)(t, e),
					source: "trending_community_card",
					action: qe.c.CLICK,
					noun: "community"
				});
			var ze = s("./src/reddit/models/GoodContent/index.ts"),
				Je = s("./src/reddit/helpers/chooseVariant/index.ts");

			function Ze(e) {
				return Object(Je.c)(e, {
					experimentEligibilitySelector: Je.a,
					experimentName: Me.r
				})
			}
			var Ye = s("./src/reddit/selectors/experiments/coreStyles.ts"),
				Xe = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				$e = s("./src/reddit/selectors/user.ts");
			var et = s("./src/reddit/selectors/experiments/uiSimplification.ts"),
				tt = s("./src/reddit/selectors/seo/linksModule.ts"),
				st = s("./src/reddit/selectors/subredditLeaderboard.ts");
			s("./src/reddit/components/TopSubredditsWidget/index.tsx"), s("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx");
			var nt = s("./src/reddit/helpers/createBannerProperties/index.ts");
			const rt = "c1020",
				at = "videos",
				it = Object(u.c)({
					isMod: $e.K,
					isLoggedIn: $e.I,
					shouldShowLocalRecommendations: e => !1 !== e.user.prefs.showLocationBasedRecommendations,
					trendingSubredditIds: Ne.db,
					currentUser: $e.i,
					frontpageLinks: tt.b,
					isOver18: $e.cb,
					isUISimplificationAllItemsVariant: et.b,
					isInBFFSLeaderboardExperiment: function(e) {
						return Ze(e) === Me.q.RotateEven
					},
					isInIcons2020: Ye.a,
					bffsLeaderboardVariant: Ze,
					inRpanTopVideoEntrypointExperiment: Xe.e,
					rankings: e => Object(Ne.P)(e, rt),
					shouldShowTopicsWidget: e => {
						const t = Object(Xe.e)(e),
							s = !!Object(Ne.P)(e, rt);
						return (!t || !s) && (!Object(et.b)(e) && function(e) {
							return Object(Je.c)(e, {
								experimentEligibilitySelector: $e.J,
								experimentName: Me.Y
							}) === Me.Kb
						}(e))
					}
				}),
				ot = e => !((e.inRpanTopVideoEntrypointExperiment ? !e.rankings : !e.trendingSubredditIds.length) || e.currentUser && !e.currentUser.showTrending || e.isUISimplificationAllItemsVariant || e.shouldShowTopicsWidget),
				ct = e => !(!e.currentUser || !e.currentUser.showRecentPosts),
				dt = e => !(e.currentUser && (!e.currentUser || e.currentUser.isGold)),
				lt = e => {
					const {
						bffsLeaderboardVariant: t,
						isInBFFSLeaderboardExperiment: s,
						shouldShowLocalRecommendations: n
					} = e;
					let r, i, c, d, l;
					s && t === Me.q.RotateEven ? (r = We.t, i = We.m, c = We.r, d = We.a) : (r = We.s, i = We.i, c = We.q, d = []), l = [r, ...d, ...c], n && l.unshift(i);
					const u = l[a()(l.length - 1)];
					l = [], u.id !== r.id && l.push(r), n && u.id !== i.id && l.push(i);
					let m = [...d, ...c];
					return m = m.filter(e => e.id !== u.id), l = [...l, ...o()(m).slice(0, 4 - l.length)], {
						category: u,
						categories: l
					}
				};
			class ut extends d.a.Component {
				constructor(e) {
					super(e), this.componentDidMount = async () => {
						this.setState({
							isMounted: !0
						})
					}, this.getVideoSubredditIds = () => {
						if (!this.props.rankings) return;
						let e = [];
						const t = {
							t5_2fqotw: "RedditMasterClasses",
							t5_2ry83: "whereintheworld",
							t5_2dptgf: "TheYouShow",
							t5_2dptrd: "RedditSessions",
							t5_2r7gr: "talentShow",
							t5_2dpthm: "RedditInTheKitchen",
							t5_2dpu97: "GlamourSchool",
							t5_2q0682: "readwithme",
							t5_2dptqa: "TheGamerLounge",
							t5_32g3v: "AnimalsOnReddit",
							t5_2vh7th: "tabletoplive",
							t5_2tmxc: "shortcircuit",
							t5_2dpsxy: "TheArtistStudio"
						};
						if (!(e = this.props.rankings.slice(0, 5).map(e => e.id)).some(e => -1 !== Object.keys(t).indexOf(e))) {
							const s = Object.keys(t)[a()(Object.keys(t).length - 1)];
							e.push(s), this.props.subredditAboutRequested(t[s])
						}
						return e
					};
					const {
						category: t,
						categories: s
					} = lt(e);
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
						isLoggedIn: r,
						isOver18: a,
						listingName: i,
						trendingSubredditIds: o,
						isUISimplificationAllItemsVariant: c,
						inRpanTopVideoEntrypointExperiment: l,
						isInIcons2020: u,
						shouldShowTopicsWidget: m
					} = this.props, {
						category: p,
						categories: h
					} = this.state, f = !c, y = !c, x = this.getVideoSubredditIds();
					return d.a.createElement(B.a, {
						className: t,
						"data-testid": "frontpage-sidebar"
					}, f && d.a.createElement(oe.a, {
						categories: h,
						category: p,
						first: 5,
						isOver18: a,
						shouldDisplayDelta: !this.props.isMod && p.id !== We.k,
						to: p.path
					}), d.a.createElement(D.a, {
						placement: q.c.ABOVE_THE_FOLD,
						listingName: i,
						removeSidebarSpacer: !f,
						position: nt.a.FIRST,
						sizes: q.h,
						placementIndex: e++
					}), dt(this.props) && d.a.createElement(E, {
						isInIcons2020: u
					}), ot(this.props) && d.a.createElement(g.a, null, d.a.createElement(Ce, {
						getClickEventFactory: Qe,
						getSubscribeEventFactoryHandler: Ke,
						subredditIds: l && x ? x : o,
						title: l ? n.fbt._("Top Video Communities", null, {
							hk: "SSdYX"
						}) : n.fbt._("Trending Communities", null, {
							hk: "2WTgEw"
						})
					})), m && d.a.createElement(g.a, null, d.a.createElement(Ue, null)), r && d.a.createElement(g.a, null, d.a.createElement(b.a, {
						listingName: i
					})), ct(this.props) && d.a.createElement(je, null), s && y && d.a.createElement(g.a, null, d.a.createElement(L, {
						links: s
					})), d.a.createElement(R.a, {
						adComponent: d.a.createElement(D.a, {
							placement: q.c.BELOW_THE_FOLD,
							listingName: i,
							position: nt.a.BOTTOM,
							sizes: q.n,
							placementIndex: e++
						})
					}, r && d.a.createElement(ie, null)))
				}
			}
			const mt = Object(l.b)(it, e => ({
				fetchTopSubreddits: () => {
					const t = {
							categoryId: rt,
							filter: {
								includeUnrated: !1,
								isBlacklistedSubredditsExcluded: !0,
								isNsfwExcluded: !0,
								isDiscoverable: !0,
								maxRating: ze.b.PG13
							},
							isOnlyModIncluded: !1
						},
						s = Object(st.d)(rt, at);
					e(Object(p.a)(t, s))
				},
				subredditAboutRequested: t => e(Object(m.u)(t))
			}));
			t.default = mt(ut)
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
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
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
			const y = Object(o.a)(e => e, b.F, b.d, (e, t, s) => {
					return {
						crosspost: s,
						post: t,
						subredditOrProfile: Object(h.M)(e, {
							identifier: t.belongsTo
						})
					}
				}),
				x = Object(i.b)(y, (e, t) => ({
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
						subredditSameLine: i,
						crowdControlPreview: o
					} = this.props;
					return a.a.createElement("div", {
						className: Object(c.a)(f.a.container, e, o ? f.a.crowdControlPreview : null),
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
							[f.a.isSingleLine]: i
						})
					}, s && r && r.displayText && a.a.createElement(u.a, {
						className: f.a.SubredditLink,
						to: r.url,
						onClick: this.onClickSubreddit
					}, r.displayText), i && a.a.createElement("div", {
						className: f.a.separator
					}), !o && a.a.createElement("div", null, a.a.createElement("span", {
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
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				o = s("./src/reddit/helpers/styles/mixins/index.tsx"),
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
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: i,
					post: c,
					redditStyle: u,
					theme: m,
					...p
				} = e;
				return r.a.createElement("div", l({
					className: Object(a.a)(d.a.backgroundWrapper, s),
					style: Object(o.c)(n, e),
					onClick: i
				}, p), t)
			})
		},
		"./src/reddit/components/PremiumCTA/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_1b1Jalg2nxA_Z-BjKXRfAV",
				icon: "_3-m5rOa3loUClNwpCv1uWU",
				content: "_1LofvgShcWAGgRJOa2IRlf",
				title: "_17PUokUAvL3YJx6EyPdD9d",
				description: "rn1KP8t9htFxyeAF8fdJ4",
				cta: "_1Cg0rke34k99vLcCo_aCP1"
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
				i = s("./src/higherOrderComponents/makeAsync.tsx"),
				o = s("./src/lib/classNames/index.ts"),
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
				className: Object(o.a)(e, h.a.container, h.a.placeholder, h.a.large, p.a.largeAndMediumPostStyles)
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
				className: Object(o.a)(h.a.thumbnail, h.a.loading)
			})))));
			var y = ({
				className: e,
				layout: t
			}) => t === u.g.Classic ? r.a.createElement(c.b, {
				className: Object(o.a)(e, h.a.classicPostPlaceholder),
				isLoading: !0
			}) : t === u.g.Compact ? r.a.createElement(d.a, {
				className: Object(o.a)(e, h.a.compactPostPlaceholder),
				isLoading: !0
			}) : r.a.createElement(f, {
				className: e
			});
			const x = Object(i.a)({
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
			const v = e => e === u.g.Classic ? 88 : e === u.g.Compact ? 42 : 340,
				j = new a.a(20),
				O = e => {
					const t = `rpan-${e.layout}-${e.listingKey}`,
						s = j.get(t);
					if (s) return s;
					const n = E(e.desiredIndex, e.children),
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
				E = (e, t) => {
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
				compact: "_2mQGWgGIa1tOb-9mH8lvcG",
				verticalVotes: "_3Q8HLP8Cv_uongOZe_uVp2",
				score: "_1c8HaTqXDAT7pYLrFLAWFt",
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
				i = s("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				o = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less"),
				c = s.n(o);

			function d(e) {
				const {
					className: t,
					id: s,
					layoutBodyClassName: n,
					showCardView: o
				} = e, d = {
					[c.a["m-card"]]: o
				};
				return r.a.createElement("div", {
					id: s,
					className: Object(a.a)(c.a.container, d, t)
				}, r.a.createElement(i.a, {
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
				i = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				o = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				c = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less"),
				l = s.n(d);
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js"), m = () => r.a.createElement(i.a, {
				className: l.a.duHeader
			}, u._("Trending today", null, {
				hk: "3rOxuO"
			})), p = Object(c.a)({
				isLoading: !0
			});
			t.a = e => r.a.createElement(o.a, {
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
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
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
				E = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(f.F)(e.media) && e.media.content)),
				N = [{
					img: "/img/house-ads/eatcheapandhealthy.png",
					href: "/r/eatcheapandhealthy"
				}, {
					img: "/img/house-ads/streetwear.png",
					href: "/r/streetwear"
				}, {
					img: "/img/house-ads/castiron.png",
					href: "/r/castiron"
				}],
				C = Object(p.c)(class extends o.a.Component {
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
						const e = a()(0, N.length - 1),
							{
								img: t,
								href: s
							} = N[e],
							{
								className: n,
								placement: r,
								redditStyle: i
							} = this.props;
						return o.a.createElement(O, {
							className: n,
							contentOnly: !0,
							redditStyle: i
						}, o.a.createElement(u.a, {
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
				redditStyle: i,
				awaitingBrandSafetyCheck: c,
				forceHouseAd: d,
				removeSidebarSpacer: l
			}) {
				const u = l ? o.a.Fragment : m.a;
				return c || !E(t) && !d ? null : o.a.createElement(u, null, d ? o.a.createElement(C, {
					className: e,
					redditStyle: i,
					placement: a
				}) : o.a.createElement(k, {
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
				i = s("./src/reddit/contexts/PageLayer/index.tsx"),
				o = s("./src/reddit/selectors/brandSafety.ts"),
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
			const m = Object(i.t)();
			t.a = m(Object(a.b)((e, {
				listingName: t,
				pageLayer: s
			}) => {
				const n = Object(o.b)(e, {
						listingName: t,
						pageLayer: s
					}),
					r = Object(d.A)(e) || Object(c.a)(e),
					a = Object(o.e)(e);
				return {
					canShowAd: n && !r,
					awaitingBrandSafetyCheck: !Object(o.c)(e),
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
			const i = s("./src/lib/lessComponent.tsx").a.wrapped(n.a, "SubredditName", a.a);
			t.a = i
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, s) {
			e.exports = {
				BaseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				baseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/reddit/controls/Button/index.tsx"),
				o = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = s("./src/reddit/components/SubscribeButton/Base.m.less"),
				d = s.n(c),
				l = s("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const m = ({
					border: e,
					small: t,
					...s
				}) => a.a.createElement(i.q, u({}, s, {
					priority: e ? i.b.Primary : i.b.Plain,
					className: Object(l.a)(s.className, d.a.BaseButton),
					size: t ? i.c.S : i.c.M
				})),
				p = e => a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? n.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : n.fbt._("Following", null, {
					hk: "1wQlVR"
				})), a.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
				}, "subreddit" === e ? n.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : n.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				b = ({
					buttonType: e,
					border: t,
					small: s,
					...n
				}) => a.a.createElement(i.q, u({}, n, {
					priority: t ? i.b.Secondary : i.b.Plain,
					className: Object(l.a)(n.className, d.a.BaseButton),
					size: s ? i.c.S : i.c.M,
					text: p(e)
				}));
			class h extends a.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? (this.props.onUnsubscribe(), this.props.afterUnsubscribeAction && this.props.afterUnsubscribeAction()) : (this.props.onSubscribe(), this.props.enableNotificationTooltipAfterSubscription && this.props.enableNotificationTooltipAfterSubscription()), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						id: s,
						small: n = !1,
						isFullWidth: r = !1
					} = this.props, i = {
						border: e,
						className: t,
						onClick: this.onClick,
						small: n,
						isFullWidth: r
					};
					return this.props.userIsSubscriber ? a.a.createElement(b, u({}, i, {
						buttonType: this.props.identifier.type
					})) : a.a.createElement(m, u({}, i, {
						id: s
					}), this.props.children, Object(o.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js");
			const r = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				a = {
					subredditActions: {
						subscribe: () => n.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => n.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => n.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => n.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => n.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => n.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				i = ({
					type: e,
					key: t
				}) => a[r({
					type: e
				})][t]()
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/TrackingHelper/index.tsx"),
				r = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = s("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(r.a)(Object(n.c)(a.a))
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
				i = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/components/TabBadger/Loader.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/selectors/platform.ts"),
				l = s("./src/reddit/selectors/posts.ts");
			const u = Object(i.c)({
					postCount: l.K,
					previousPageIsOverlay: d.n,
					tabBadged: e => e.tabBadged
				}),
				m = Object(a.b)(u);
			t.a = m(Object(c.c)(e => 0 === e.postCount ? null : r.a.createElement(o.a, {
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
				i = s("./src/reddit/components/TrackingHelper/index.tsx"),
				o = s("./src/reddit/constants/subredditLeaderboard.ts"),
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
					if (s !== o.k)(s || s === o.f) && h(this.props.gqlContext(), {
						categoryId: s,
						filter: p.a,
						first: t
					}).then(e => {
						const t = e && e.rankings,
							s = e && e.subreddits,
							n = this.props.category && this.props.category.name || o.c;
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
							[o.l]: {
								rankings: s,
								subreddits: n
							}
						}))
					}
				}
				render() {
					const {
						category: e
					} = this.props, t = e && e.name, s = e && e.displayText, n = t || o.c, i = this.state[n], c = i ? i.rankings : [], d = i ? i.subreddits : {}, l = c && c[0] && c[0].id, u = d && d[l], m = !(u && u.isNSFW) || this.props.isOver18;
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
			t.a = Object(c.b)(Object(i.c)(g))
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/prettyPrintNumber/index.ts"),
				d = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = s("./src/reddit/components/SubredditIcon/index.tsx"),
				u = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				m = s("./src/reddit/icons/fonts/index.tsx"),
				p = s("./src/reddit/icons/svgs/Triangle/index.tsx"),
				b = s("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				h = s.n(b);
			const g = e => a.a.createElement(a.a.Fragment, null, a.a.createElement(l.b, {
					className: h.a.subredditIcon,
					subredditOrProfile: e.subreddit
				}), a.a.createElement("span", {
					className: h.a.subredditDetailsContainer
				}, e.large ? a.a.createElement(d.a, {
					subredditName: e.subreddit.name
				}, a.a.createElement("span", {
					className: h.a.regularText
				}, e.subreddit.displayText)) : a.a.createElement("span", {
					className: h.a.regularText
				}, e.subreddit.displayText), null === e.rank && a.a.createElement("span", {
					className: h.a.smallText
				}, n.fbt._("This community hasn't been ranked yet.", null, {
					hk: "4CmlZJ"
				})))),
				f = e => {
					const t = Object(u.a)(),
						s = Object(o.a)(h.a.subredditRankItem, e.large && h.a.large),
						n = e.delta && e.delta > 0,
						r = null === e.rank || void 0 === e.rank ? "--" : (e => {
							const t = Object(c.b)(e);
							if (t.length > 3) {
								return `${t.split(".")[0]}k`
							}
							return t
						})(e.rank + 1),
						d = e.delta ? n ? "#46D160" : "#EA0027" : "transparent";
					return a.a.createElement("li", {
						className: h.a.listItem,
						key: e.subreddit.displayText
					}, a.a.createElement(i.a, {
						className: s,
						onMouseDown: e.onItemClick,
						rel: "noopener",
						target: "_blank",
						to: e.subreddit.url
					}, a.a.createElement("div", {
						className: h.a.subredditRankItemColumn
					}, !e.hasTagline && a.a.createElement("span", {
						className: h.a.rankText
					}, r), !e.hasTagline && t ? a.a.createElement(m.a, {
						className: h.a.arrow,
						name: n ? "caret_up" : "caret_down",
						isFilled: !0,
						style: {
							color: d
						}
					}) : a.a.createElement(p.a, {
						className: Object(o.a)(h.a.arrow, !n && h.a.negative),
						style: {
							fill: d
						}
					}), a.a.createElement(g, {
						large: e.large,
						rank: e.rank,
						subreddit: e.subreddit
					})), e.shouldDisplayDelta && a.a.createElement("span", {
						className: h.a.regularText
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
				i = s("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				o = s.n(i);
			const c = e => r.a.createElement("div", {
				className: Object(a.a)(o.a.placeholderWrapper, e.large && o.a.large)
			}, r.a.createElement("span", {
				className: o.a.subredditIconLoading
			}), r.a.createElement("span", {
				className: o.a.subredditNameLoading
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
				i = s("./node_modules/lodash/times.js"),
				o = s.n(i),
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
						a = e.categoryName === g.l && g.i.path ? g.i.path : g.g;
					return d.a.createElement("div", {
						className: Object(m.a)(e.className, j.a.communityBanner, s),
						style: r
					}, t && d.a.createElement("h2", {
						className: j.a.communityBannerText
					}, d.a.createElement(l.a, {
						onMouseDown: () => e.onSendEventClick("banner", e.categoryName || g.e),
						to: a
					}, e.categoryName ? ((e, t) => e === g.l ? n.fbt._("Communities Near You", null, {
						hk: "ZMVOK"
					}) : d.a.createElement(d.a.Fragment, null, n.fbt._("Top", null, {
						hk: "4bbkOp"
					}), d.a.createElement("span", {
						className: j.a.categoryName
					}, " ", t || e, " "), n.fbt._("Communities", null, {
						hk: "2rXjVR"
					})))(e.categoryName, e.categoryDisplayText) : n.fbt._("Today's Top Growing Communities", null, {
						hk: "2U7TDT"
					}))))
				},
				E = e => {
					const {
						category: t
					} = e, {
						gradients: s
					} = t, r = !!(!e.rankings || !e.rankings.length) && j.a.communityBannerPlaceholder, a = s && Array.isArray(s) && 2 === s.length ? {
						background: `linear-gradient(246.35deg, ${s[0]} 0%, ${s[1]} 100%)`
					} : void 0, i = t.path ? t.path : g.g, o = t.image ? `${t.image}.png` : "magnifying-glass-snoo.png";
					return d.a.createElement("div", {
						className: Object(m.a)(e.className, j.a.taglineBanner, r)
					}, d.a.createElement("div", {
						className: j.a.taglineBannerBackground,
						style: a
					}, d.a.createElement(l.a, {
						onMouseDown: () => e.onSendEventClick("banner", t.name || g.e),
						to: i
					}, d.a.createElement("h2", {
						className: j.a.taglineBannerText
					}, d.a.createElement("img", {
						className: j.a.taglineBannerImage,
						src: `${u.a.assetPath}/img/discovery/${o}`
					}), t.tagline ? (e => d.a.createElement("span", {
						className: j.a.categoryName
					}, n.fbt._("{tagline}", [n.fbt._param("tagline", e)], {
						hk: "3QDJDU"
					})))(t.tagline) : n.fbt._("Today's Top Growing Communities", null, {
						hk: "2U7TDT"
					})))))
				},
				N = e => d.a.createElement("ol", null, e.rankings && e.rankings.map((t, s) => {
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
				C = d.a.createElement(d.a.Fragment, null, o()(5, e => d.a.createElement(b.a, {
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
					wide: t.name === g.l
				}, t.name ? t.name === g.l ? g.j : t.displayText || t.name : n.fbt._("Top", null, {
					hk: "2rw7Gx"
				})))))
			};
			t.b = e => {
				const {
					subreddits: t,
					rankings: s,
					categoryName: n,
					categoryDisplayText: r,
					category: i,
					categories: o
				} = e, l = Object(k.a)();
				Object(c.useEffect)(() => {
					l(Object(_.d)(n || g.e))
				}, []);
				const m = a()(s),
					p = t && m && t[m.id],
					b = `${u.a.assetPath}/img/leaderboard/banner-background.png`,
					f = p ? p.bannerBackgroundImage || b : void 0,
					y = e.to || n && P(n, i.path),
					x = i && i.tagline,
					v = i && i.gradients && Array.isArray(i.gradients) && 2 === i.gradients.length ? i.gradients[1] : void 0;
				return d.a.createElement(h.a, {
					className: e.className,
					contentOnly: !0
				}, x && d.a.createElement(E, {
					category: i,
					onSendEventClick: e.onSendEventClick,
					rankings: s
				}), !x && d.a.createElement(O, {
					bannerBackgroundImage: f,
					categoryName: n,
					categoryDisplayText: r,
					onSendEventClick: e.onSendEventClick,
					rankings: s,
					shouldDisplayBannerImg: e.shouldDisplayBannerImg
				}), d.a.createElement(N, {
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
				}), o && d.a.createElement(w, {
					activeCategoryName: n,
					categories: o,
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
				i = s("./src/reddit/components/SEOTitle/index.tsx"),
				o = s("./src/reddit/components/Widgets/Base/index.m.less"),
				c = s.n(o);
			const d = a.a.div("WidgetBackground", c.a),
				l = a.a.wrapped(({
					children: e,
					...t
				}) => r.a.createElement("div", t, r.a.createElement(i.b, {
					type: i.a.Widget
				}, e)), "WidgetHeader", c.a);
			t.b = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement(d, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return S
			})), s.d(t, "a", (function() {
				return w
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/Flair/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/index.tsx"),
				m = s("./src/reddit/actions/subscription/index.ts");
			var p = Object(i.b)(null, (e, t) => {
					const s = t.widget.id || void 0;
					return {
						onSubscribe: () => e(m.d([t.identifier], !0, s)),
						onSubscriptionsRequested: () => e(m.e()),
						onUnsubscribe: () => e(m.d([t.identifier], !1, s))
					}
				})(s("./src/reddit/components/SubscribeButton/Base.tsx").a),
				b = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				y = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				x = s("./src/reddit/icons/fonts/index.tsx"),
				_ = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				k = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				v = s("./src/reddit/models/Flair/index.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				E = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				N = s.n(E);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const S = e => a.a.createElement(b.a, {
					className: Object(d.a)(N.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, a.a.createElement("div", {
					className: N.a.container
				}, e.isLoading ? a.a.createElement(f.a, {
					className: N.a.loadingIcon,
					sizePx: 32
				}) : a.a.createElement(a.a.Fragment, null, e.isError ? a.a.createElement("p", {
					className: N.a.errorMsg
				}, e.errorMsg || n.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : a.a.createElement(a.a.Fragment, null, e.communities.map(t => a.a.createElement(w, C({
					key: t.name
				}, t, {
					getSubscribeEventFactory: e.getSubscribeEventFactoryHandler ? e.getSubscribeEventFactoryHandler(t) : void 0,
					widget: e.widget,
					sendEvent: e.sendEvent,
					type: t.type || "subreddit",
					buttonDisabled: e.itemButtonDisabled,
					isLoading: e.loadingItemName && e.loadingItemName.toLowerCase() === t.name.toLowerCase() || !1,
					isNSFW: t.isNSFW,
					onCommunityNameClick: e.getClickEventFactory ? () => e.sendEvent(e.getClickEventFactory(t)) : void 0,
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && a.a.createElement(g.q, {
					className: N.a.bottomButton,
					kind: g.a.Button,
					priority: g.b.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				P = Object(c.c)({
					hideNSFWPref: j.B,
					nightmode: j.V
				}),
				w = Object(i.b)(P)(e => {
					const t = Object(y.a)();
					return a.a.createElement("div", {
						className: Object(d.a)(N.a.communityItemContainer, {
							[N.a.withBottomFlair]: e.isNSFW
						})
					}, a.a.createElement(k.a, {
						className: N.a.communityItemExpandCenter,
						widthRight: h.t
					}, a.a.createElement("div", {
						className: N.a.iconContainer
					}, e.communityIcon || e.iconUrl ? a.a.createElement("img", {
						className: N.a.subredditIcon,
						src: e.iconUrl || e.communityIcon
					}) : t ? a.a.createElement(x.a, {
						name: "community",
						isFilled: !e.nightmode,
						className: Object(d.a)(N.a.defaultCommunityIcon, {
							[N.a.mNightmode]: e.nightmode
						})
					}) : a.a.createElement(_.a, {
						className: N.a.planetIcon,
						"data-redditstyle": !0
					})), a.a.createElement("div", {
						className: N.a.communityDescriptionContainer
					}, a.a.createElement(o.a, {
						className: N.a.communityName,
						onClick: e.onCommunityNameClick,
						title: Object(O.b)(e.name, e.type),
						to: Object(O.a)(e.name, e.type)
					}, Object(O.b)(e.name, e.type)), a.a.createElement("div", {
						className: N.a.communityInfoContainer
					}, !!e.subscribers && a.a.createElement("p", {
						className: N.a.subscriberCount
					}, n.fbt._({
						"*": "{number} members",
						_1: "1 member"
					}, [n.fbt._plural(e.subscribers, "number")], {
						hk: "6i1wh"
					})), e.isNSFW && a.a.createElement(l.b, {
						className: N.a.nsfwFlair,
						flair: {
							type: v.f.Nsfw,
							text: "nsfw"
						}
					}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? a.a.createElement(f.a, {
						className: Object(d.a)(N.a.communityCta, N.a.smallLoadingIcon),
						sizePx: 12
					}) : a.a.createElement(g.q, {
						className: Object(d.a)(N.a.communityCta, {
							[N.a.showOnHover]: e.showTertiaryButtonOnHover
						}),
						disabled: e.buttonDisabled,
						onClick: () => e.onTertiaryButtonClick(e)
					}, e.tertiaryButtonText) : e.widget ? a.a.createElement(p, {
						disabled: e.buttonDisabled,
						getEventFactory: e.getSubscribeEventFactory,
						identifier: {
							name: e.name,
							type: e.type
						},
						sendEvent: e.sendEvent,
						small: !0,
						userIsSubscriber: !!e.isSubscribed,
						widget: e.widget
					}) : a.a.createElement(u.a, {
						disabled: e.buttonDisabled,
						getEventFactory: e.getSubscribeEventFactory,
						identifier: {
							name: e.name,
							type: e.type
						},
						small: !0
					})), !!e.description && a.a.createElement("p", {
						title: e.description,
						className: N.a.communityDescription
					}, e.description))
				})
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/posts.ts"),
				r = s("./src/reddit/helpers/name/index.ts");

			function a(e, t) {
				return (t === n.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function i(e, t) {
				return t === n.a.PROFILE ? Object(r.d)(e) : Object(r.c)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, s) {
			e.exports = {
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				showOnHover: "_1kul3JsqY5kjVe9kzGy4bV",
				communityItemExpandCenter: "oP8RhN61VEXVL8e6SIxK_",
				communityDescriptionContainer: "_3jEbHrUmHtMsZcfN-z_GpD",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				withBottomFlair: "_14n0HZvxiP1OqS51zI7Sy3",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				nsfwFlair: "_3wQmfxeBovEB3M5pcwt-pv",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6",
				defaultCommunityIcon: "_1yiD4Wxo0icHUUftoUrBiM",
				mNightmode: "_1yugRWTZEox55lEcLyzzAo"
			}
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/subscription/index.ts"),
				i = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(n.b)(() => Object(r.c)({
				userIsSubscriber: i.hb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(a.d([t], !0)),
				onSubscriptionsRequested: () => e(a.e()),
				onUnsubscribe: () => e(a.d([t], !1))
			}))
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
				return i
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "o", (function() {
				return d
			})), s.d(t, "p", (function() {
				return l
			})), s.d(t, "n", (function() {
				return u
			})), s.d(t, "k", (function() {
				return m
			})), s.d(t, "l", (function() {
				return p
			})), s.d(t, "j", (function() {
				return b
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "s", (function() {
				return g
			})), s.d(t, "i", (function() {
				return f
			})), s.d(t, "q", (function() {
				return y
			})), s.d(t, "t", (function() {
				return x
			})), s.d(t, "m", (function() {
				return _
			})), s.d(t, "r", (function() {
				return k
			})), s.d(t, "a", (function() {
				return v
			})), s.d(t, "h", (function() {
				return j
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js");
			const r = "DEFAULT",
				a = "",
				i = "All Communities",
				o = n.fbt._("All Communities", null, {
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
				j = ["Sports", "Gaming", "News", "TV", "Aww", "Memes", "Pics & Gifs", "Travel", "Tech", "Music"]
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
				i = s("./src/reddit/controls/Button/index.tsx"),
				o = s("./src/reddit/controls/Chip/index.m.less"),
				c = s.n(o);

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
					kind: i.a.InternalLink,
					to: e.to
				} : {};
				return r.a.createElement(i.q, d({
					className: Object(a.a)(c.a.Chip, {
						[c.a.isWide]: e.wide
					}),
					onClick: e.onClick,
					priority: i.b.Tertiary,
					size: i.c.XS,
					text: e.children
				}, t))
			}
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/LoadingIcon/index.m.less"),
				o = s.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: s = 10
			}) => r.a.createElement("div", {
				className: Object(a.a)(o.a.loadingIcon, t, {
					[o.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${s}px`
				}
			})
		},
		"./src/reddit/endpoints/subreddit/local.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/graphql/operations/GetNearbySubreddits.json"),
				r = s("./src/lib/makeGqlRequest/index.ts");
			t.a = (e, t) => Object(r.a)(e, {
				...n,
				variables: t
			})
		},
		"./src/reddit/endpoints/subreddit/topSubreddits.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/graphql/operations/TopSubreddits.json"),
				r = s("./src/lib/makeGqlRequest/index.ts");
			t.a = (e, t) => Object(r.a)(e, {
				...n,
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
				i = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/featureFlags/index.ts");

			function c(e, t, s) {
				const n = Object(i.c)({
					featureEnabled: t => o.d[e](t)
				});
				return Object(a.b)(n)(e => {
					const {
						featureEnabled: n,
						...a
					} = e, i = a;
					return n ? r.a.createElement(t, i) : void 0 !== s ? r.a.createElement(s, i) : null
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
				return i
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
							...i
						} of e) {
						const e = Object(n.a)(a);
						s[e.id] = e, r.push(i)
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
				i = ({
					edges: e,
					pageInfo: t
				}) => {
					const s = {},
						r = [];
					let a = 0;
					for (const {
							node: i
						} of e) {
						const e = Object(n.a)(i);
						s[e.id] = {
							...e,
							bannerBackgroundImage: i && i.styles && i.styles.bannerBackgroundImage
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
				i = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				o = s("./src/reddit/models/Theme/index.ts"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const u = {},
				m = e => Object(o.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(o.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(o.g)(e.postBackgroundColor, null, null)
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
					const t = Object(a.a)(Object(r.a)(e), i.a.actionIcon, i.b.actionIcon);
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
				return E
			})), s.d(t, "r", (function() {
				return N
			})), s.d(t, "x", (function() {
				return C
			})), s.d(t, "F", (function() {
				return S
			})), s.d(t, "s", (function() {
				return P
			})), s.d(t, "c", (function() {
				return w
			})), s.d(t, "k", (function() {
				return T
			})), s.d(t, "b", (function() {
				return A
			})), s.d(t, "d", (function() {
				return I
			})), s.d(t, "e", (function() {
				return F
			})), s.d(t, "v", (function() {
				return L
			})), s.d(t, "E", (function() {
				return D
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
				i = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(n || (n = {}));
			const o = (e, t) => {
					if (t) {
						const s = i.media(e, t.post.id),
							n = i.post(e, t.post.id),
							r = i.subreddit(e);
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
						subreddit: i.subreddit(e)
					}
				},
				c = (e, t, s) => {
					if (!t || !s) return;
					const n = Object(a.j)(e, {
							streamIdFromPath: t.post.id
						}),
						i = t.chat_disabled || s.chatState === r.a.None;
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
						chatState: i ? r.a.None : r.a.Compact,
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
					...o(e)
				}),
				u = () => e => ({
					source: "stream_du",
					action: "click",
					noun: "show_less",
					...o(e)
				}),
				m = (e, t) => s => ({
					source: "stream_du",
					action: "click",
					noun: "enlarge",
					...o(s, e),
					actionInfo: i.actionInfo(s, {
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
						...o(s, e)
					}
				}),
				b = (e, t) => s => ({
					source: "stream_player",
					action: "heartbeat",
					noun: "stream",
					playback: c(s, e, t),
					...d(s),
					...o(s, e)
				}),
				h = (e, t) => s => ({
					source: "stream_player",
					action: "play",
					noun: "stream",
					playback: c(s, e, t),
					...d(s),
					...o(s, e)
				}),
				g = (e, t) => s => ({
					source: "stream_player",
					action: "complete",
					noun: "stream",
					playback: c(s, e, t),
					...d(s),
					...o(s, e)
				}),
				f = (e, t, s) => n => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(n, t, s),
					...d(n),
					...o(n, t)
				}),
				y = (e, t, s, n) => r => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(r, t, s),
					...d(r),
					...o(r, t),
					actionInfo: i.actionInfo(r, {
						referralId: n
					})
				}),
				x = (e, t, s) => n => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(n, t, s),
					...d(n),
					...o(n, t)
				}),
				_ = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "stream_from_desktop",
					...d(t),
					...o(t, e)
				}),
				k = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "upvote",
					playback: c(s, e, t),
					...d(s),
					...o(s, e)
				}),
				v = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: c(s, e, t),
					...d(s),
					...o(s, e)
				}),
				j = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: c(s, e, t),
					...d(s),
					...o(s, e)
				}),
				O = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: c(s, e, t),
					...o(s, e)
				}),
				E = e => t => {
					const s = Object(a.l)(t, e);
					return {
						source: "stream_chat",
						action: "click",
						noun: "send_chat",
						...o(t, s)
					}
				},
				N = (e, t, s) => n => ({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					},
					playback: c(n, t, s),
					...o(n, t)
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
					profile: i.profile(t),
					screen: i.screen(t),
					...o(t, e)
				}),
				P = e => t => {
					const s = o(t, e);
					return {
						source: "post",
						action: "consume",
						noun: "post",
						profile: i.profile(t),
						screen: i.screen(t),
						...s
					}
				},
				w = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "follow",
					...o(t, e)
				}),
				T = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "subscribe",
					...o(t, e),
					targetSubreddit: i.subreddit(t)
				}),
				A = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "close",
					playback: c(s, e, t),
					...o(s, e)
				}),
				I = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "pause",
					playback: c(s, e, t),
					...o(s, e)
				}),
				F = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: c(s, e, t),
					...o(s, e)
				}),
				L = (e, t) => s => ({
					source: "stream_player",
					action: "mute",
					noun: "volume",
					playback: c(s, e, t),
					...o(s, e)
				}),
				D = (e, t) => s => ({
					source: "stream_player",
					action: "unmute",
					noun: "volume",
					playback: c(s, e, t),
					...o(s, e)
				}),
				B = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: c(s, e, t),
					...o(s, e)
				}),
				R = (e, t) => s => ({
					source: "stream_player",
					action: "swipe",
					noun: "next",
					playback: c(s, e, t),
					...o(s, e),
					...d(s)
				}),
				U = (e, t) => s => ({
					source: "stream_player",
					action: "swipe",
					noun: "previous",
					playback: c(s, e, t),
					...o(s, e),
					...d(s)
				}),
				M = (e, t) => s => ({
					source: "rpanstudio_banner",
					action: "click",
					noun: e,
					...o(s, t),
					...d(s)
				}),
				W = (e, t) => s => ({
					source: "rpanstudio_modal",
					action: "click",
					noun: e,
					...o(s, t),
					...d(s)
				})
		},
		"./src/reddit/helpers/trackers/subredditLeaderboard.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "e", (function() {
				return o
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
				i = (e, t, s) => a => ({
					...r.defaults(a),
					action: "click",
					noun: e,
					source: "leaderboard_featured_category",
					subreddit: {
						categoryName: Object(n.d)(t),
						name: s && s.toLowerCase()
					}
				}),
				o = (e, t) => s => ({
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
				c = (e, t, s, a) => i => ({
					...r.defaults(i),
					action: "click",
					actionInfo: {
						...r.actionInfo(i),
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
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, s) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Menu/index.m.less"),
				o = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: `${Object(a.b)("menu",e.isFilled)} ${e.className}`
			}), "MenuIcon", o.a);
			t.a = c
		},
		"./src/reddit/icons/svgs/Triangle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 10 8",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M4.152 1.3568C4.54367 0.730128 5.45633 0.730129 5.848 1.3568L9.04375 6.47C9.46003 7.13605 8.98119 8 8.19575 8H1.80425C1.01881 8 0.539969 7.13605 0.956249 6.47L4.152 1.3568Z"
			})))
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, s) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = s.n(o);
			t.a = Object(a.a)(e => r.a.createElement("div", {
				className: Object(i.a)(c.a.expandedCenterContainer, e.className)
			}, r.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), r.a.createElement("div", {
				className: c.a.center
			}, Array.isArray(e.children) && e.children[1]), r.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
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
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
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
				E = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				N = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx"),
				C = s("./src/reddit/components/TabBadger/index.tsx"),
				S = s("./src/reddit/components/TrackingHelper/index.tsx"),
				P = s("./src/reddit/constants/parameters.ts"),
				w = s("./src/reddit/constants/postLayout.ts"),
				T = s("./src/reddit/contexts/PageLayer/index.tsx"),
				A = s("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				I = s("./src/reddit/helpers/trackers/screenview.ts"),
				F = s("./src/reddit/layout/page/Listing/index.tsx"),
				L = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				D = s("./src/reddit/selectors/experiments/trending.ts"),
				B = s("./src/reddit/selectors/experiments/uiSimplification.ts"),
				R = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				U = s("./src/reddit/selectors/frontpage.ts"),
				M = s("./src/reddit/selectors/meta.ts"),
				W = s("./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts"),
				q = s("./src/reddit/selectors/user.ts"),
				V = s("./src/lib/constants/index.ts"),
				G = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				H = s("./src/lib/objectSelector/index.ts"),
				K = s("./src/reddit/constants/page.ts"),
				Q = s("./src/reddit/pages/Frontpage/index.m.less"),
				z = s.n(Q);

			function J() {
				return (J = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: Z
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Y = Object(T.t)(), X = Object(d.c)({
				queryParams: Object(H.a)((e, {
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
				geopopular: q.m
			}), ee = Object(d.c)({
				isActionBarAnimationEnabled: L.b,
				isInTrendingEntrypointExperiment: D.a,
				isLoggedIn: q.J,
				isPopular: T.C,
				isRpanDuVisible: e => Object(W.a)(e, {
					listingName: G.R
				}),
				rpanInjectionIndex: e => Object(W.b)(e, {
					listingName: G.R
				}),
				layout: T.O,
				isInUISimplificationI18NExperiment: B.a
			}), te = () => Object(d.a)($, X, ee, e => Object(W.a)(e, {
				listingName: G.R
			}), e => Object(W.b)(e, {
				listingName: G.R
			}), e => e, A.a, ({
				countryMeta: e,
				geopopular: t
			}, {
				queryParams: s,
				sort: n
			}, r, a, i, o, c) => {
				const d = P.x in s && s[P.x].toUpperCase(),
					l = "string" == typeof d && d in V.Yb ? V.Yb[d] : V.Zb,
					u = Object(p.a)(K.a, n, s),
					m = e || V.w.Everywhere,
					b = t || m,
					h = P.h in s ? s[P.h].toUpperCase() : b,
					g = [];
				return a && g.push(i), {
					cardViewExperimentVariant: c,
					countrySort: h,
					listingKey: u,
					sort: n,
					timeSort: l,
					focusedVerticalPositions: Object(R.b)(o, g, {
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
			}), ae = e => o.a.createElement(re, J({}, e, {
				fallback: o.a.createElement(N.a, {
					showCardView: !!e.showCardView
				})
			}));
			class ie extends o.a.Component {
				constructor(e) {
					super(e), this.componentDidMount = () => {
						const {
							cardViewExperimentVariant: e,
							isLoggedIn: t,
							sort: s
						} = this.props;
						m.a.read(() => {
							const n = `${b.c.FrontPage}-${s}`,
								r = [Object(A.c)(e)];
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
					}, N = {};
					if (c === w.g.Large && e.forEach((e, t) => {
							N[e] = Object(g.a)({
								numInstance: t,
								layout: c,
								listingKey: d,
								listingName: K.b,
								listingPosition: e
							})
						}), a) {
						const {
							child: e,
							idx: t
						} = Object(O.a)({
							children: N,
							desiredIndex: u,
							layout: c,
							listingKey: d,
							listingName: G.R,
							sendEvent: m
						});
						N[t] = e
					}
					const S = o.a.createElement(x.default, {
						className: z.a.sidebar,
						listingKey: d,
						listingName: K.b
					});
					return o.a.createElement(F.a, {
						className: Object(l.a)(z.a.Container, this.props.className),
						fitPageToContent: !0,
						trendingUnit: b && o.a.createElement(ae, {
							showCardView: c === w.g.Large
						}),
						content: o.a.createElement(i.Fragment, null, b && o.a.createElement(E.a, {
							className: z.a.duHeader
						}, Z._("Popular posts", null, {
							hk: "36DJb4"
						})), o.a.createElement(y.a, null), n && o.a.createElement(k.a, null), o.a.createElement(_.a, h), o.a.createElement(v.a, null), o.a.createElement(C.a, {
							listingKey: this.props.listingKey,
							shortTimer: !0,
							handlePillClick: this.props.refreshFeed
						}), o.a.createElement(j.a, {
							injectChildren: N,
							noPostsComponent: () => o.a.createElement(f.a, {
								listingName: K.b,
								sort: this.props.sort
							}),
							key: "listing",
							listingKey: d,
							listingName: K.b,
							listingViewed: (e, t) => Object(I.f)(d, this.props.sort, t, e, this.props.timeSort),
							onLoadMore: this.props.onLoadMorePosts,
							isActionBarAnimationEnabled: t
						})),
						sidebar: S
					})
				}
			}
			t.default = Y(ne(Object(S.c)(ie)))
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
				i = s("./src/reddit/selectors/subreddit.ts"),
				o = s("./src/reddit/selectors/user.ts"),
				c = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				d = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const l = Object(n.a)(c.a, (e, {
					listingName: t
				}) => {
					const s = Object(o.ub)(e);
					if (!s) return !1;
					let n;
					if (-1 === [a.R, "r/popular"].indexOf(t)) {
						const r = t.replace(/^r\//, ""),
							a = Object(i.F)(e, r),
							o = s.subreddit[a];
						if (!o) return !1;
						n = o
					} else n = s;
					if (!n.rpanDuDismissalTime) return !1;
					return new Date(n.rpanDuDismissalTime).getTime() > Date.now() - 30 * r.x
				}, (e, {
					listingName: t
				}) => t, (e, {
					listingName: t
				}) => Object(d.m)(e, {
					subreddit: t
				}), d.k, (e, {
					sort: t
				}) => t, (e, t, s, n, a, i) => i !== r.R.AWARDED && (!!e && (!a.isPermanentlyCanceled && (!t && (!!n && n.show_discovery_unit))))),
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
				return E
			})), s.d(t, "i", (function() {
				return S
			})), s.d(t, "d", (function() {
				return A
			})), s.d(t, "h", (function() {
				return I
			})), s.d(t, "k", (function() {
				return F
			})), s.d(t, "c", (function() {
				return L
			})), s.d(t, "f", (function() {
				return D
			})), s.d(t, "a", (function() {
				return U
			})), s.d(t, "j", (function() {
				return M
			})), s.d(t, "b", (function() {
				return W
			})), s.d(t, "e", (function() {
				return q
			})), s.d(t, "g", (function() {
				return V
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				i = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				o = s("./src/reddit/selectors/posts.ts"),
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
							r = B(n, i.a.ENDED) ? i.a.ENDED : n,
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
							r = B(n, i.a.ENDED) ? i.a.ENDED : n,
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
				}) => t, (e, t) => u(t.listingName)(e, t), k, b, o.h, (e, t, s, n, r) => {
					const o = [];
					if (e) {
						const t = Object(a.g)(e);
						s[t] && o.push(t)
					}
					const c = o.concat(t),
						d = [...new Set(c)],
						l = new Set([...n, ...r]);
					return d.filter(e => {
						const t = s[e];
						return !l.has(e) && !t.post.isHidden && t.stream.state !== i.a.KILLED && t.stream.state !== i.a.PURGED
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
				E = Object(n.a)(k, O, (e, t) => {
					const s = t[0];
					if (s) return e[s]
				}),
				N = Object(n.a)(f, (e, {
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
						a = r.find(e => e.stream.state === i.a.IS_LIVE);
					if (a) return a.post.id;
					const o = r.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (n.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return o ? o.post.id : void 0
				}),
				S = Object(r.a)(Object(n.a)(C, k, (e, t) => e ? t[e] : void 0)),
				P = Object(n.a)((e, {
					streamIdFromPath: t
				}) => t ? Object(a.g)(t) : void 0, C, b, o.h, (e, {
					related: t,
					streamIdFromPath: s,
					subreddit: n
				}) => O(e, {
					listingName: t || n,
					streamIdFromPath: s
				}), (e, t, s, n, r) => !e || s.includes(e) || n.includes(e) ? t || r[0] : e),
				w = Object(n.a)(g, f, N, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				T = Object(n.a)(g, f, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				A = Object(r.a)(Object(n.a)(P, k, (e, t) => e ? t[e] : void 0)),
				I = Object(r.a)(Object(n.a)(w, k, (e, t) => e ? t[e] : void 0)),
				F = Object(r.a)(Object(n.a)(T, k, (e, t) => e ? t[e] : void 0)),
				L = (Object(r.a)(Object(n.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, k, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => ({
					...t[s],
					preloadedPreviewUrl: e[s]
				})))), Object(n.a)(P, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				D = Object(n.a)((e, {
					streamIdFromPath: t
				}) => t ? v(e, t) : void 0, e => !e || e.chat_disabled);

			function B(e, t) {
				const s = {
					[i.a.NOT_STARTED]: 0,
					[i.a.PUBLISHED]: 1,
					[i.a.IS_LIVE]: 2,
					[i.a.DISCONNECTED]: 2,
					[i.a.ENDED]: 3,
					[i.a.KILLED]: 4,
					[i.a.PURGED]: 4
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
					return r === i.a.IS_LIVE || r === i.a.DISCONNECTED ? U.LIVE : r === i.a.ENDED && n.stream.vod_accessible ? U.VOD : U.UNAVAILABLE
				}),
				W = Object(n.a)(A, M, m.b, c.b, c.o, (e, t, s, n, r) => s ? n : e ? t === U.LIVE || t === U.VOD ? e.stream.hls_url : r : void 0),
				q = Object(n.a)(A, M, R, (e, t, s) => e ? t === U.LIVE ? e.broadcast_time : t === U.VOD && s < e.broadcast_time ? s : 0 : 0),
				V = (e, t) => {
					const s = p(e);
					return !!s && s[t] && s[t].chat_disabled
				}
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const i = e => e.publicAccessNetwork.theaterSettings,
				o = Object(n.a)(i, a.n, (e, t) => t && !e.isIntroFinished),
				c = Object(n.a)(i, e => e.lastChatActivityUtcTs),
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
				i = s("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => r.e[Object(a.O)(e, {})] === r.d.Card,
				c = e => Object(i.c)(e, {
					experimentEligibilitySelector: o,
					experimentName: n.K
				}) === n.ab.Treatment
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
				return i
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "a", (function() {
				return c
			}));
			var n = s("./src/reddit/constants/subredditLeaderboard.ts"),
				r = s("./src/reddit/selectors/category.ts");
			const a = (e, t) => e.subreddits.rankingsPageInfo && e.subreddits.rankingsPageInfo[t] && e.subreddits.rankingsPageInfo[t].hasPreviousPage,
				i = (e, t) => e.subreddits.rankingsPageInfo && e.subreddits.rankingsPageInfo[t] && e.subreddits.rankingsPageInfo[t].hasNextPage,
				o = (e, t) => t === n.p ? n.o : t === n.l ? n.k : e || n.c,
				c = (e, t) => {
					const s = e.subreddits.rankings,
						n = t && Object(r.f)(e, {
							categoryName: t
						}),
						a = s[o(n && n.id || null, t)];
					return !(!a || !a.length)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Frontpage.1c39410950bee68c913e.js.map