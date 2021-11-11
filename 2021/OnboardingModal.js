// https://www.redditstatic.com/desktop2x/OnboardingModal.417c0c55ec9db4299229.js
// Retrieved at 11/11/2021, 10:10:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OnboardingModal"], {
		"./node_modules/lodash/times.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseTimes.js"),
				s = n("./node_modules/lodash/_castFunction.js"),
				o = n("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				c = 4294967295,
				a = Math.min;
			e.exports = function(e, t) {
				if ((e = o(e)) < 1 || e > i) return [];
				var n = c,
					d = a(e, c);
				t = s(t), e -= c;
				for (var l = r(d, t); ++n < e;) t(n);
				return l
			}
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "b", (function() {
				return x
			}));
			var r, s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/performanceTimings/index.tsx"),
				i = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(r || (r = {}));
			var d, l = n("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(d || (d = {}));
			var m = n("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				b = n("./src/reddit/selectors/platform.ts"),
				p = n("./src/reddit/selectors/user.ts");
			const f = Object(s.a)(i.g),
				g = Object(s.a)(i.e),
				O = Object(s.a)(i.h),
				j = Object(s.a)(i.c),
				h = Object(s.a)(i.f),
				v = Object(s.a)(i.j),
				k = Object(s.a)(i.i),
				y = () => async (e, t, {
					gqlContext: n
				}) => {
					const s = t(),
						o = Object(m.e)(s),
						i = Object(m.d)(s),
						d = Object(p.J)(s);
					if (o || !i) return;
					e(O());
					let b = !1;
					try {
						const t = d ? r.LoggedInGeo : r.LoggedOutGeo,
							s = await ((e, t, n) => Object(c.a)(e, {
								...a,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(n(), t);
						if (s.ok && s.body) {
							const {
								data: t
							} = s.body;
							if (I(t)) {
								if (_(t)) {
									e(j({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), b = !0
								} else if (S(t)) {
									const n = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: r,
											interactedSubreddit: s,
											category: o
										} = n.focusRecommendations[0],
										i = [r, s],
										c = Object(u.d)(i),
										a = Object(l.b)(i),
										d = Object(u.c)(r),
										m = {
											recommendedSubredditIds: [r.id],
											interactedSubredditIds: [s.id],
											subreddits: c,
											subredditsAboutInfo: a,
											subredditTopContent: d,
											category: o,
											lastLoadedEnv: "client"
										};
									e(f(m)), b = !0
								}
							} else b = !1
						}
					} catch (h) {
						b = !1
					}
					b || e(g({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, I = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, _ = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations;
					return !(!n || 0 !== n.length)
				}, S = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations,
						r = t && t.type;
					return !!(n && !_(e) && r === d.GEO && n[0] && n[0].recommendedSubreddit && n[0].interactedSubreddit)
				}, x = () => async (e, t, n) => {
					var r, s;
					const i = t(),
						c = Object(m.g)(i);
					if (Object(m.f)(i) || null === c || "client" === c) {
						const n = null === (s = null === (r = Object(b.b)(t())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === s ? void 0 : s.route.chunk,
							c = Object(p.K)(i);
						return Object(o.i)(() => e(y()), {
							name: "getFocusedVerticalsRequested",
							page: n,
							isLoggedIn: c
						})
					}
					if ("server" === c) return e(h({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/frontpage/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "frontpagePending", (function() {
				return de
			})), n.d(t, "frontpageLoaded", (function() {
				return le
			})), n.d(t, "frontpageFailed", (function() {
				return ue
			})), n.d(t, "frontpageDataRequested", (function() {
				return me
			})), n.d(t, "frontpageRequestedHelper", (function() {
				return be
			})), n.d(t, "frontpageRequested", (function() {
				return fe
			})), n.d(t, "frontpageReloaded", (function() {
				return Oe
			})), n.d(t, "morePostsPending", (function() {
				return je
			})), n.d(t, "morePostsLoaded", (function() {
				return he
			})), n.d(t, "morePostsFailed", (function() {
				return ve
			})), n.d(t, "morePostsRequested", (function() {
				return ke
			})), n.d(t, "refreshFeed", (function() {
				return ye
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/pick.js"),
				o = n.n(s),
				i = n("./src/lib/getParsedUserAgent/index.ts"),
				c = n("./src/reddit/actions/focusedVerticals/index.ts"),
				a = n("./src/lib/base64/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/env/index.ts"),
				u = n("./src/lib/makeGqlRequest/index.ts"),
				m = n("./src/lib/performanceTimings/index.tsx"),
				b = n("./src/lib/sentry/index.ts"),
				p = n("./src/reddit/constants/graphql.ts"),
				f = n("./src/reddit/helpers/getPostLimitForMobile/index.ts"),
				g = n("./src/reddit/models/Live/index.ts"),
				O = n("./src/reddit/models/Post/index.ts"),
				j = n("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				h = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				v = n("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				k = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				y = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				I = n("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				_ = n("./src/reddit/constants/experiments.ts"),
				S = n("./src/reddit/helpers/chooseVariant/index.ts"),
				x = n("./src/reddit/selectors/experiments/utils.ts");
			const E = e => {
				const t = Object(S.c)(e, {
					experimentEligibilitySelector: S.a,
					experimentName: _.Jb
				});
				return !!Object(x.a)(t)
			};
			var C = n("./src/reddit/selectors/platform.ts"),
				T = n("./src/reddit/selectors/user.ts"),
				N = n("./src/redditGQL/operations/Frontpage.json");
			const R = (e, t) => {
					var n, r;
					const {
						after: s,
						dist: o,
						isMobile: i,
						layout: c,
						limit: d,
						sort: l,
						t: u,
						correlationId: m
					} = t, b = Object(T.T)(e) || Object(T.K)(e), g = Object(C.q)(e), O = {
						adContext: {
							layout: c ? c.toUpperCase() : p.a.Card,
							reddaid: e.user.reddaid,
							distance: o
						},
						feedRankingContext: {
							servingId: m
						},
						forceGeopopular: !0,
						includeCommunityDUs: !1,
						includeFeaturedAnnouncements: !0,
						includeLiveEvents: !0,
						includeIdentity: b && !(null === (r = null === (n = e.user.account) || void 0 === n ? void 0 : n.karma) || void 0 === r ? void 0 : r.total),
						includePostRecommendations: E(e),
						includeSubredditQuestions: b,
						recentPostIds: e.posts.recent
					};
					return l && (O.sort = l.toUpperCase()), u && (O.range = u.toUpperCase()), i ? O.pageSize = Object(f.a)(c) : d && (O.pageSize = d), g && g.ad && (O.forceAds = {
						ad: g.ad
					}), s && (O.after = Object(a.a)(s)), O
				},
				P = async (e, t, n, r) => {
					const s = Date.now(),
						o = await ((e, t) => Object(u.a)(e, {
							...N,
							variables: t
						}, {
							traceRequestName: "get_frontpage"
						}))(e, t),
						i = Date.now();
					let c;
					try {
						const e = Date.now();
						c = (({
							trendingSubreddits: e = [],
							identity: t,
							home: n,
							featuredAnnouncements: r,
							recentPosts: s = []
						}) => {
							const o = [],
								i = [];
							let c;
							const a = {
									postIds: [],
									postInstances: {},
									posts: {},
									postFlair: {},
									profiles: {},
									subreddits: {}
								},
								d = e => {
									if (a.posts[e.id]) return e.id;
									const t = Object(h.f)(e);
									a.posts[t.id] = t;
									const {
										crosspostRoot: n
									} = e;
									n && n.type === O.a.Post && n.postInfo && d(n.postInfo);
									let r = t.id;
									if (Object(O.l)(e)) a.profiles[e.profile.id] || (a.profiles[e.profile.id] = Object(k.a)(e.profile));
									else if (Object(O.n)(e)) a.subreddits[e.subreddit.id] || (a.subreddits[e.subreddit.id] = Object(y.a)(e.subreddit)), a.postFlair[e.subreddit.id] || (a.postFlair[e.subreddit.id] = Object(j.a)(e.subreddit));
									else if (Object(O.h)(e)) {
										const n = Object(h.b)(e);
										if (!n) return null;
										r = n, a.posts[n] = {
											...t,
											id: n,
											permalink: `${t.permalink}?instanceId=${encodeURIComponent(n)}`
										}, a.posts[t.id] || (a.posts[t.id] = {
											...t,
											events: []
										}), a.postInstances[e.id] || (a.postInstances[e.id] = []), a.postInstances[e.id].push(n)
									}
									return r
								};
							for (const l of e) {
								const e = Object(y.a)(l);
								a.subreddits[e.id] = e, o.push(e.id)
							}
							for (const {
									node: j
								} of n.elements.edges)
								if (Object(O.k)(j)) {
									const e = d(j);
									e && a.postIds.push(e)
								} else if (Object(O.m)(j)) {
								if (!j.recommendationContext || !j.postInfo) {
									const e = "Received empty PostRecommendation element when processing frontpage data.";
									Object(l.b)() || console.warn(e), b.c.captureMessage(e);
									continue
								}
								const {
									content: e,
									subreddit: t,
									__typename: n
								} = j.recommendationContext;
								if (j.postInfo && (null == e ? void 0 : e.richtext)) {
									const r = d(j.postInfo);
									r && (a.postIds.push(r), a.posts[r].recommendationContext = {
										content: Object(h.d)(e.richtext),
										source: {
											source: null == n ? void 0 : n.toLowerCase(),
											subredditId: null == t ? void 0 : t.id,
											subredditName: null == t ? void 0 : t.prefixedName
										}
									})
								}
							} else if (Object(g.c)(j) && !c) c = j;
							else {
								const e = `Received unhandled element type when processing frontpage data: "${j.__typename}"`;
								Object(l.b)() || console.warn(e), b.c.captureMessage(e)
							}
							for (const l of s) {
								if (!l) continue;
								const e = d(l);
								e && i.push(e)
							}
							const u = a.postIds.length - 1,
								m = u >= 0 ? a.postIds[u] : "",
								p = n.elements.dist,
								f = n.elements.geoFilter;
							return {
								...a,
								account: t && Object(I.a)(t) || null,
								featuredLiveThread: c,
								announcements: r,
								preferences: t && t.preferences && Object(v.a)(t.preferences, t.interactions) || null,
								...0 !== o.length && {
									trendingSubredditIds: o
								},
								...0 !== i.length && {
									recentPostIds: i
								},
								token: m,
								...null !== p && {
									dist: p
								},
								...null !== f && {
									geoFilter: f
								}
							}
						})(o.body.data);
						const t = Date.now(),
							a = [{
								duration: i - s,
								logKeyType: m.a.gqlFetchTiming
							}, {
								duration: t - e,
								logKeyType: m.a.gqlNormalizationTiming
							}];
						Object(m.h)({
							name: d.r.FRONTPAGE,
							isLoggedIn: n,
							metrics: a,
							statsdPathsForExperiments: r
						})
					} catch (a) {
						const e = "Error normalizing front page posts";
						Object(l.b)() || console.error(e, a), b.c.captureException(a)
					}
					return {
						...o,
						body: c
					}
				};
			var A = n("./src/lib/pageTitle.ts"),
				L = n("./src/reddit/actions/login.ts"),
				w = n("./src/reddit/actions/meta.ts"),
				F = n("./src/reddit/actions/platform.ts"),
				M = n("./src/reddit/actions/toaster.ts"),
				q = n("./src/reddit/constants/history.ts"),
				B = n("./src/reddit/constants/page.ts"),
				V = n("./src/reddit/constants/parameters.ts"),
				D = n("./src/reddit/constants/postLayout.ts"),
				G = n("./src/reddit/contexts/PageLayer/index.tsx"),
				U = n("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				W = n("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				z = n("./src/reddit/models/Toast/index.ts"),
				Z = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				Q = n("./src/reddit/selectors/frontpage.ts"),
				K = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				J = n("./src/reddit/selectors/runTimeEnvVars.ts"),
				X = n("./src/lib/makeActionCreator/index.ts"),
				H = n("./src/lib/makeListingKey/index.ts"),
				Y = n("./src/reddit/actions/ads/index.ts"),
				$ = n("./src/reddit/helpers/trackers/feed.ts"),
				ee = n("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				te = n("./src/reddit/actions/seo/linksModule.ts"),
				ne = n("./src/reddit/selectors/seo/linksModule.ts"),
				re = n("./src/reddit/actions/publicAccessNetwork/api.ts"),
				se = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				oe = n("./src/reddit/helpers/filterListingResponse/index.ts"),
				ie = n("./src/reddit/actions/frontpage/constants.ts"),
				ce = n("./node_modules/uuid/v4.js"),
				ae = n.n(ce);
			const de = Object(X.a)(ie.c),
				le = Object(X.a)(ie.b),
				ue = Object(X.a)(ie.a),
				me = (e, t) => async (n, s, o) => {
					var c, a, d, l;
					const u = s();
					if (u.listings.postOrder.api.pending[e]) return;
					const b = D.e[Object(G.Q)(u, {})];
					t.isMobile = Object(i.e)(u.meta.userAgent), t.recentPostIds = u.posts.recent, t.layout = b, t.useMockData = !!u.platform.currentPage && (!!u.platform.currentPage.queryParams.useMockData && Object(J.b)(u)), n(de({
						key: e
					})); {
						const e = u.platform.currentPage,
							n = e && e.url;
						n && (t.clickUrl = n)
					}
					const p = ae()();
					t.correlationId = p;
					const f = null === (a = null === (c = Object(C.b)(u)) || void 0 === c ? void 0 : c.routeMatch) || void 0 === a ? void 0 : a.route.chunk,
						g = Object(T.K)(u),
						O = await Object(m.i)(() => P(o.gqlContext(), R(u, t), Object(T.T)(u), t.statsdPathsForExperiments), {
							name: "fetchFrontpageData",
							isLoggedIn: g,
							page: f
						});
					n(Object(F.n)(O.status));
					const j = `error-${e}`;
					if (O.ok && O.body) {
						const r = O.body;
						n(le({
							key: e,
							meta: u.meta,
							correlationId: p,
							...r
						})), n(M.g(j)), r.geoFilter && n(Object(w.k)(r.geoFilter)), n(Object(Y.b)(ee.a.FRONTPAGE));
						const o = null === (l = null === (d = Object(C.b)(u)) || void 0 === d ? void 0 : d.locationState) || void 0 === l ? void 0 : l[q.b.FeedLoadReason];
						Object($.b)(t.isRefresh ? q.a.UserRefresh : null != o ? o : q.a.InitialLoad)(s())
					} else {
						n(ue({
							error: O.error,
							key: e,
							...O.body
						})), n(M.f({
							id: j,
							kind: z.b.Error,
							text: r.fbt._("Sorry, we couldn't load posts for this page.", null, {
								hk: "36ypKx"
							}),
							buttonText: r.fbt._("Retry", null, {
								hk: "1XMjgA"
							}),
							buttonAction: me(e, t)
						}));
						const o = O.error;
						Object($.a)(o ? `${O.status}:${o.type}` : "Failed to load post listing for frontpage")(s())
					}
				}, be = (e, t) => async (n, r) => {
					var s;
					const i = r(),
						c = Object(Q.a)(i),
						{
							sort: a = c
						} = e.params,
						l = Object(H.a)(B.b, a, e.queryParams),
						u = i.listings.postOrder.ids[l],
						m = i.listings.postOrder.api.error[l],
						b = i.listings.postOrder.api.pending[l],
						p = V.A in e.queryParams && e.queryParams[V.A].toUpperCase() || "",
						f = p in d.ec && d.ec[p];
					if (b || u && !m && !t) return void(u && (n(F.m({
						title: A.d()
					})), (null === (s = i.listings.postOrder.correlationIds) || void 0 === s ? void 0 : s[l]) && n(F.o({
						correlationId: i.listings.postOrder.correlationIds[l]
					})), i.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						n(Object(Y.b)(ee.a.FRONTPAGE))
					})));
					const g = Object(U.a)(i),
						O = Object(U.b)(g),
						j = [Object(U.c)(g)];
					await n(me(l, {
						...o()(e.queryParams, V.l),
						...o()(e.queryParams, V.k),
						limit: O,
						sort: a,
						statsdPathsForExperiments: j,
						t: Object(W.a)(a, f)
					})), n(F.m({
						title: A.d()
					})), Object(S.c)(i, {
						experimentEligibilitySelector: S.a,
						experimentName: "redesign_aa"
					});
					const h = Object(Z.a)(i, {});
					Object(Z.e)(h) && n(Object(L.k)())
				}, pe = () => async (e, t) => {
					var n, r;
					const s = t();
					if (Object(ne.a)(s)) return;
					const o = null === (r = null === (n = Object(C.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
						i = Object(T.K)(s);
					return Object(m.i)(() => e(Object(te.d)()), {
						name: "frontpageLinksRequested",
						page: o,
						isLoggedIn: i
					})
				}, fe = (e, t) => async n => {
					await Promise.all([n(Object(c.b)()), n(be(e, t)), n(pe()), n(Object(re.c)(se.R))])
				}, ge = Object(X.a)(ie.d), Oe = e => async (t, n) => {
					const r = n(),
						s = r.platform.currentPage.routeMatch.match;
					Object(K.o)(r) || Object(K.u)(r) || (e || t(ge()), await t(fe(s, !0)))
				}, je = Object(X.a)(ie.g), he = Object(X.a)(ie.f), ve = Object(X.a)(ie.e), ke = e => async (t, n, {
					gqlContext: r
				}) => {
					const s = n(),
						c = Object(Q.a)(s),
						{
							sort: a = c
						} = e,
						l = s.platform.currentPage ? s.platform.currentPage.queryParams : {},
						u = Object(H.a)(B.b, a, l),
						m = s.listings.postOrder.loadMore[u],
						b = l[V.A] ? l[V.A].toUpperCase() : "",
						p = b in d.ec && d.ec[b];
					if (m) {
						const e = s.listings.postOrder.api.pending[u],
							c = s.listings.postOrder.fetchedTokens,
							d = !(!c[u] || !c[u][m.token]);
						if (!e && !d) {
							t(je({
								key: u,
								fetchedToken: m.token
							}));
							const e = !!s.platform.currentPage && !!s.platform.currentPage.queryParams.useMockData,
								c = Object(U.a)(s),
								d = D.a,
								b = [Object(U.c)(c)],
								f = {
									after: m.token,
									dist: m.dist,
									...o()(l, V.l),
									isMobile: Object(i.e)(s.meta.userAgent),
									limit: d,
									sort: a,
									t: Object(W.a)(a, p),
									layout: D.e[Object(G.Q)(s, {})],
									useMockData: e
								}; {
								const e = s.platform.lastPage,
									t = e && e.url;
								t && (f.clickUrl = t)
							}
							f.correlationId = s.listings.postOrder.correlationIds[u];
							const g = () => P(r(), R(s, f), Object(T.T)(s), b),
								O = await g(),
								j = {
									...O.body,
									...Object(oe.a)(s, u, O.body)
								};
							if (O.ok) t(he({
								key: u,
								fetchedToken: m.token,
								meta: s.meta,
								...j
							})), Object($.b)(q.a.NextPageLoad)(n());
							else {
								t(ve({
									key: u,
									error: O.error,
									fetchedToken: m.token,
									...j
								}));
								const e = O.error;
								Object($.a)(e ? `${O.status}:${e.type}` : "More posts for frontpage failed")(n())
							}
						}
					}
				}, ye = e => async (t, n) => {
					const r = n(),
						s = Object(Q.a)(r),
						{
							sort: o = s
						} = e,
						i = r.platform.currentPage ? r.platform.currentPage.queryParams : {},
						c = Object(H.a)(B.b, o, i),
						a = i[V.A] ? i[V.A].toUpperCase() : "",
						l = a in d.ec && d.ec[a],
						u = Object(U.a)(r),
						m = Object(U.b)(u);
					await t(me(c, {
						limit: m,
						sort: o,
						t: Object(W.a)(o, l),
						isRefresh: !0
					}))
				}
		},
		"./src/reddit/components/Onboarding/AvatarPicker/AvatarPicker.m.less": function(e, t, n) {
			e.exports = {
				avatarPicker: "_3hOPwzt-RlvWy5pCNSrfid",
				dynamicSizeWrapper: "_1pykqkDB2BSllN1eZhT_XE",
				previewImage: "_3im-E3gSVGoXU3e6gcNqo4",
				loader: "_3wdFjura7xBHt6zxMSpFjm",
				randomizeButton: "_2Q_2oitWh5modqGvZBePJC",
				icon: "_3qJwIdgm0QU7z_VuH8giFl",
				legalTextContainer: "_1Pd7GfPL253U_FwjIu2E7Y",
				learnMoreLink: "_2Gcmom9va4gj9K9ecfJ3Iy"
			}
		},
		"./src/reddit/components/Onboarding/Celebration.m.less": function(e, t, n) {
			e.exports = {
				CelebrationBg: "_1KnJNL2Cr78kGIdRGm9RKx",
				celebrationBg: "_1KnJNL2Cr78kGIdRGm9RKx",
				CelebrationSubTitle: "IqRif5VG5bSJqPyXOkPNL",
				celebrationSubTitle: "IqRif5VG5bSJqPyXOkPNL",
				CelebrationTitle: "_2UXWDXRGHlHoXi3XDcIDWI",
				celebrationTitle: "_2UXWDXRGHlHoXi3XDcIDWI",
				LoadingSpinner: "_2i7LkKbPK63nGZdxNMH0zo",
				loadingSpinner: "_2i7LkKbPK63nGZdxNMH0zo"
			}
		},
		"./src/reddit/components/Onboarding/CommunityPicker.m.less": function(e, t, n) {
			e.exports = {
				CommunityListWrapper: "_2Wo_HJzscKSDIMd3X4gC0B",
				communityListWrapper: "_2Wo_HJzscKSDIMd3X4gC0B",
				RecommendedHeader: "_1iDVgvQVKLoyDpsbnB3Wks",
				recommendedHeader: "_1iDVgvQVKLoyDpsbnB3Wks",
				SelectAllLink: "_3CPhqReN6aQjDfxC-MaWG4",
				selectAllLink: "_3CPhqReN6aQjDfxC-MaWG4",
				SectionTitle: "_2rZrvBiGG74EOcrRa56xFY",
				sectionTitle: "_2rZrvBiGG74EOcrRa56xFY",
				IconWrapper: "_1Cvae_g1lbT2dlM39J6N2R",
				iconWrapper: "_1Cvae_g1lbT2dlM39J6N2R",
				CommunityRow: "_2h_rraB53rhUmsB6cnedRY",
				communityRow: "_2h_rraB53rhUmsB6cnedRY",
				Selected: "_2Wb_DytuCBtiMTgkGnOAps",
				selected: "_2Wb_DytuCBtiMTgkGnOAps",
				ButtonSection: "_1NqRKRZcZbF3ik2-KoFyq4",
				buttonSection: "_1NqRKRZcZbF3ik2-KoFyq4",
				SelectIcon: "-j6EpjDSLcGv1RhitVdm-",
				selectIcon: "-j6EpjDSLcGv1RhitVdm-",
				SelectedIcon: "qCL1CsafVnfBcdMk3lj2X",
				selectedIcon: "qCL1CsafVnfBcdMk3lj2X",
				IconSection: "_3HD772KmG6zFYrp-phffhs",
				iconSection: "_3HD772KmG6zFYrp-phffhs",
				CommunityNoIcon: "_1kA4ko4R2jbMdjrxj5ZFC6",
				communityNoIcon: "_1kA4ko4R2jbMdjrxj5ZFC6",
				TextSection: "_2HOk-hV8mziql3ZudqMSVZ",
				textSection: "_2HOk-hV8mziql3ZudqMSVZ",
				Info: "_2RXOvj4MZObqPwFtQJL9mQ",
				info: "_2RXOvj4MZObqPwFtQJL9mQ",
				Description: "_2SRRCa9I9CuWJI7T304VX9",
				description: "_2SRRCa9I9CuWJI7T304VX9",
				MoreRecommendations: "NWy0-XJnxMfzZud1EkVrZ",
				moreRecommendations: "NWy0-XJnxMfzZud1EkVrZ"
			}
		},
		"./src/reddit/components/Onboarding/InterestPicker.m.less": function(e, t, n) {
			e.exports = {
				InterestListButtons: "pmzkEc33397N3O9imxyFw",
				interestListButtons: "pmzkEc33397N3O9imxyFw",
				InterestButton: "_1mYkaEiXp4yPgQyCP6UUSz",
				interestButton: "_1mYkaEiXp4yPgQyCP6UUSz",
				Selected: "OKdudKOC-hVqPCRkBf_xu",
				selected: "OKdudKOC-hVqPCRkBf_xu"
			}
		},
		"./src/reddit/components/Onboarding/Modal.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/noop.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				c = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/frontpage/index.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/survey/index.ts"),
				b = n("./src/reddit/actions/toaster.ts"),
				p = n("./node_modules/fbt/lib/FbtPublic.js"),
				f = n("./src/lib/sentry/index.ts"),
				g = n("./src/reddit/actions/snoovatar.ts"),
				O = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				j = n("./src/reddit/hooks/useTracking.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				v = n("./src/reddit/selectors/avatar.ts");
			var k = () => {
					const e = Object(c.e)(v.a),
						t = Object(c.d)(),
						n = Object(j.a)(),
						r = Object(c.e)(v.c);
					Object(o.useEffect)(() => {
						(null == e ? void 0 : e.csrf_token) || t(Object(g.c)())
					}, []);
					const s = Object(o.useCallback)(async () => {
							t(Object(g.d)())
						}, [t]),
						i = Object(o.useCallback)(async () => {
							if (n(Object(O.a)("save_and_continue")), e && r) try {
								return await t(Object(g.e)(r.accessoryIds, {}, {
									set_avatar_to_profile: !0,
									source: "web_onboarding"
								})), !0
							} catch (s) {
								f.c.captureException(s)
							}
							return t(Object(b.f)({
								kind: h.b.Error,
								text: p.fbt._("Unable to save avatar, please try again.", null, {
									hk: "17FzD3"
								})
							})), !1
						}, [r, e, t, n]);
					return {
						avatarImage: (null == r ? void 0 : r.image) || null,
						fetchRandomAvatar: s,
						saveAvatar: i
					}
				},
				y = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				I = n("./src/reddit/components/Onboarding/Celebration.m.less"),
				_ = n.n(I);
			const {
				fbt: S
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var x = () => i.a.createElement("div", {
					className: _.a.CelebrationBg
				}, i.a.createElement("div", {
					className: _.a.CelebrationTitle
				}, S._("We're happy you're here!", null, {
					hk: "1YMdHn"
				})), i.a.createElement("div", {
					className: _.a.CelebrationSubTitle
				}, S._("Your home feed is being created now…", null, {
					hk: "Onr1V"
				})), i.a.createElement("div", null, i.a.createElement(y.a, {
					className: _.a.LoadingSpinner,
					sizePx: 16
				}))),
				E = n("./src/reddit/constants/avatars.ts"),
				C = n("./src/reddit/controls/Button/index.tsx"),
				T = n("./src/reddit/icons/fonts/index.tsx"),
				N = n("./src/reddit/components/Onboarding/AvatarPicker/AvatarPicker.m.less"),
				R = n.n(N);
			const {
				fbt: P
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var A = ({
					avatarImage: e,
					fetchRandomAvatar: t
				}) => {
					const n = Object(j.a)();
					Object(o.useEffect)(() => {
						n(Object(O.m)())
					}, [n]);
					const r = Object(o.useCallback)(() => {
							n(Object(O.a)("randomize")), t()
						}, [n, t]),
						{
							legalCopy: s,
							learnMoreText: c,
							url: a
						} = E.a;
					return i.a.createElement("div", {
						className: R.a.avatarPicker
					}, i.a.createElement("div", {
						className: R.a.dynamicSizeWrapper
					}, e ? i.a.createElement("img", {
						"data-testid": "preview-image",
						src: `data:image/png;base64,${encodeURIComponent(e)}`,
						className: R.a.previewImage
					}) : i.a.createElement(y.a, {
						className: R.a.loader
					}), i.a.createElement("div", {
						className: R.a.legalTextContainer
					}, s(), i.a.createElement("a", {
						href: a,
						className: R.a.learnMoreLink
					}, c()))), i.a.createElement(C.t, {
						className: R.a.randomizeButton,
						priority: C.c.Secondary,
						onClick: r,
						Icon: Object(T.b)("random"),
						iconClassName: R.a.icon
					}, P._("Randomize", null, {
						hk: "uwAa8"
					})))
				},
				L = n("./node_modules/lodash/times.js"),
				w = n.n(L),
				F = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				M = n("./src/reddit/helpers/trackers/onboarding.ts"),
				q = n("./src/reddit/icons/svgs/CommunityDefault/filled.tsx"),
				B = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				V = n("./src/reddit/icons/svgs/Positive/index.tsx"),
				D = n("./src/reddit/components/Onboarding/CommunityPicker.m.less"),
				G = n.n(D);
			const {
				fbt: U
			} = n("./node_modules/fbt/lib/FbtPublic.js"), W = () => U._("Recommended for you", null, {
				hk: "28LTkA"
			}), z = ({
				community: e,
				selected: t,
				toggleAll: n,
				toggleSelection: r
			}) => {
				const {
					communities: s
				} = e, [c, a] = Object(o.useState)(null);
				Object(o.useEffect)(() => {
					a(!s.find(e => !t[e.id]))
				}, [s, t]);
				const d = Object(o.useCallback)(() => {
					n(e.topicId, !c), a(!c)
				}, [e.topicId, c, n]);
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: G.a.RecommendedHeader
				}, i.a.createElement("span", {
					className: G.a.SectionTitle
				}, e.topicTitle), i.a.createElement("button", {
					onClick: d,
					className: G.a.SelectAllLink
				}, c && U._("Deselect All", null, {
					hk: "4u0XYF"
				}), !c && null !== c && U._("Select All", null, {
					hk: "3izh21"
				}))), i.a.createElement(i.a.Fragment, null, i.a.createElement(Q, {
					communities: e.communities,
					communityId: e.topicId,
					selected: t,
					toggleSelection: r,
					topicTitle: e.topicTitle
				})))
			}, Z = () => i.a.createElement(i.a.Fragment, null, w()(5, e => i.a.createElement(F.a, {
				key: e,
				fullWidth: !0,
				large: !0
			}))), Q = ({
				communities: e,
				communityId: t,
				selected: n,
				topicTitle: r,
				toggleSelection: s
			}) => {
				const c = Object(j.a)(),
					[a, d] = Object(o.useState)(!1),
					l = e.length > 4,
					u = e.slice(0, a ? void 0 : 4),
					m = "recommended" === t ? "" : r,
					b = Object(o.useCallback)(() => {
						d(!0), c(Object(M.f)(r))
					}, [c, r]);
				return i.a.createElement(i.a.Fragment, null, u.map(e => i.a.createElement(K, {
					communityId: e.id,
					description: e.description,
					icon: e.icon,
					isSelected: n[e.id],
					key: e.id,
					prefixedName: e.prefixedName,
					toggleSelection: s,
					topicTitle: r
				})), l && !a && i.a.createElement(J, {
					text: m,
					showMore: b
				}))
			}, K = ({
				communityId: e,
				description: t,
				icon: n,
				isSelected: r,
				prefixedName: s,
				toggleSelection: c,
				topicTitle: a
			}) => {
				const l = Object(j.a)(),
					u = Object(o.useCallback)(() => {
						l(Object(M.d)(!r, a, s)), c(e)
					}, [e, r, s, l, c, a]);
				return i.a.createElement("div", {
					className: Object(d.a)(G.a.CommunityRow, {
						[G.a.Selected]: r
					}),
					onClick: u
				}, i.a.createElement("div", {
					className: G.a.IconSection
				}, n && i.a.createElement("img", {
					className: G.a.IconWrapper,
					src: n
				}), !n && i.a.createElement(q.a, {
					className: G.a.CommunityNoIcon
				})), i.a.createElement("div", {
					className: G.a.TextSection
				}, i.a.createElement("div", {
					className: G.a.Info
				}, s), i.a.createElement("div", {
					className: G.a.Description
				}, t)), i.a.createElement("div", {
					className: G.a.ButtonSection
				}, r && i.a.createElement(V.a, {
					className: G.a.SelectedIcon
				}), !r && i.a.createElement(B.a, {
					className: G.a.SelectIcon
				})))
			}, J = ({
				showMore: e,
				text: t
			}) => i.a.createElement("div", {
				className: G.a.MoreRecommendations
			}, i.a.createElement("button", {
				onClick: e
			}, !t && U._("More recommendations", null, {
				hk: "3I8APZ"
			}), t && U._("More in {topic-title}", [U._param("topic-title", t)], {
				hk: "4afv7s"
			})));
			var X = ({
					communitiesByTopic: e,
					loadingCommunities: t,
					recommendedCommunities: n,
					selected: r,
					toggleSelection: s,
					toggleAll: c
				}) => {
					const a = Object(j.a)();
					return Object(o.useEffect)(() => {
						a(Object(M.g)())
					}, [a]), i.a.createElement("div", {
						className: G.a.CommunityListWrapper
					}, n.length > 0 && i.a.createElement(z, {
						community: {
							communities: n,
							topicId: "recommended",
							topicTitle: W()
						},
						selected: r,
						toggleAll: c,
						toggleSelection: s
					}), (!!e.length || t) && i.a.createElement(i.a.Fragment, null, t && i.a.createElement(Z, null), e.map(e => i.a.createElement(z, {
						key: e.topicId,
						community: e,
						selected: r,
						toggleAll: c,
						toggleSelection: s
					}))))
				},
				H = n("./node_modules/polished/dist/polished.es.js"),
				Y = n("./src/reddit/components/Onboarding/InterestPicker.m.less"),
				$ = n.n(Y);
			const {
				fbt: ee
			} = n("./node_modules/fbt/lib/FbtPublic.js"), te = ({
				interests: e,
				selected: t,
				toggleSelection: n,
				topicColor: r = null
			}) => i.a.createElement(i.a.Fragment, null, e.map((e, s) => {
				var o;
				const c = !!t[e.id],
					a = null !== r;
				return i.a.createElement(i.a.Fragment, {
					key: e.id
				}, i.a.createElement(ne, {
					colorIndex: a && null != r ? r : s,
					interest: e,
					isSelected: c,
					isSubtopic: a,
					key: e.id,
					toggleSelection: n,
					topic: e.topic
				}), c && !!(null === (o = e.children) || void 0 === o ? void 0 : o.length) && i.a.createElement(te, {
					interests: e.children,
					selected: t,
					toggleSelection: n,
					topicColor: s
				}))
			})), ne = ({
				colorIndex: e,
				interest: t,
				isSelected: n,
				isSubtopic: r,
				toggleSelection: s,
				topic: c
			}) => {
				const a = Object(j.a)(),
					l = Object(o.useCallback)(() => {
						a(Object(M.h)(!n, !r, c)), s(t)
					}, [t, n, r, a, s, c]);
				return i.a.createElement(C.t, {
					className: Object(d.a)($.a.InterestButton, {
						[$.a.Selected]: n
					}),
					kind: C.b.Button,
					onClick: l,
					style: re(e, n, r)
				}, c)
			}, re = (e, t, n) => {
				if (!t && !n) return {};
				let r = se(e);
				return n && !t && (r = Object(H.f)(r, .25)), {
					backgroundColor: r
				}
			}, se = e => oe[e % 7], oe = ["#c08d41", "#ffa800", "#ff4500", "#ff3881", "#b44ac0", "#6a5cff", "#3690ea"];
			var ie = ({
					interests: e,
					selected: t,
					toggleSelection: n
				}) => {
					const r = Object(j.a)();
					return Object(o.useEffect)(() => {
						r(Object(M.k)())
					}, [r]), i.a.createElement("div", {
						className: $.a.InterestListButtons
					}, i.a.createElement(te, {
						interests: e,
						selected: t,
						toggleSelection: n
					}))
				},
				ce = n("./src/reddit/components/Onboarding/index.m.less"),
				ae = n.n(ce);
			const {
				fbt: de
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var le;
			! function(e) {
				e.INTERESTS = "interests", e.COMMUNITIES = "communities", e.CELEBRATION = "celebration", e.AVATAR = "avatar"
			}(le || (le = {}));
			const ue = ({
				activeStep: e,
				avatarImage: t,
				communitiesByTopic: n,
				fetchRandomAvatar: r,
				interests: s,
				loadingCommunities: c,
				recommendedCommunities: a,
				selectedCommunities: d,
				selectedInterests: l,
				setSelectedCommunities: u,
				setSelectedInterests: m
			}) => {
				const b = Object(o.useRef)(null);
				Object(o.useEffect)(() => {
					var e;
					return null === (e = b.current) || void 0 === e ? void 0 : e.scroll(0, 0)
				}, [e]);
				const p = Object(o.useCallback)(e => {
						const t = d[e],
							n = {
								...d
							};
						t ? delete n[e] : n[e] = !0, u(n)
					}, [d, u]),
					f = Object(o.useCallback)((e, t) => {
						const r = {
								...d
							},
							s = e => e.forEach(e => {
								t ? r[e.id] = !0 : delete r[e.id]
							});
						if ("recommended" === e) s(a);
						else {
							const t = n.find(t => t.topicId === e);
							t && s(t.communities)
						}
						u(r)
					}, [n, a, d, u]),
					g = Object(o.useCallback)(e => {
						const {
							children: t,
							id: n
						} = e, r = l[n], s = {
							...l
						};
						r ? (delete s[n], r.forEach(e => delete s[e])) : s[n] = [...(null == t ? void 0 : t.map(e => e.id)) || []], m(s)
					}, [l, m]);
				return i.a.createElement("div", {
					className: ae.a.SelectedComponent,
					ref: b
				}, e === le.INTERESTS && i.a.createElement(ie, {
					interests: s,
					selected: l,
					toggleSelection: g
				}), e === le.COMMUNITIES && i.a.createElement(X, {
					communitiesByTopic: n,
					loadingCommunities: c,
					recommendedCommunities: a,
					selected: d,
					toggleAll: f,
					toggleSelection: p
				}), e === le.AVATAR && i.a.createElement(A, {
					avatarImage: t,
					fetchRandomAvatar: r
				}))
			};
			var me = n("./src/reddit/constants/experiments.ts"),
				be = n("./src/reddit/constants/modals.ts"),
				pe = n("./src/reddit/contexts/ApiContext.tsx"),
				fe = n("./src/lib/makeGqlRequest/index.ts"),
				ge = n("./node_modules/lodash/uniqBy.js"),
				Oe = n.n(ge),
				je = n("./src/reddit/customMiddleware/recentSubreddits.ts"),
				he = n("./src/reddit/endpoints/economics/specialMembership.ts"),
				ve = n("./src/reddit/endpoints/subreddit/local.ts"),
				ke = n("./src/reddit/endpoints/subreddit/subscriptions.ts");
			var ye = n("./src/redditGQL/operations/InterestTopicsByIds.json");
			const Ie = async (e, t) => {
				const n = await ((e, t) => {
					const n = {
						topicIds: [],
						schemeName: "topic_chaining_icons",
						maxSubreddits: 10,
						...t
					};
					return Object(fe.a)(e, {
						...ye,
						variables: n
					})
				})(e(), {
					topicIds: t
				});
				if (!n.ok) return null;
				const r = n.body,
					s = null == r ? void 0 : r.data.interestTopicsByIds;
				return s ? (e => (({
					edges: e
				}) => e.map(({
					node: e
				}) => {
					var t, n, r;
					return {
						topicId: e.id,
						topicTitle: e.topic.title,
						communities: (null === (r = null === (n = null === (t = e.topic) || void 0 === t ? void 0 : t.subreddits) || void 0 === n ? void 0 : n.edges) || void 0 === r ? void 0 : r.map(({
							node: e
						}) => (({
							id: e,
							prefixedName: t,
							publicDescriptionText: n,
							styles: r
						}) => {
							var s;
							return {
								description: n,
								icon: r.icon || (null === (s = r.legacyIcon) || void 0 === s ? void 0 : s.url),
								id: e,
								prefixedName: t
							}
						})(e))) || []
					}
				}))(e))(s) : null
			}, _e = e => {
				var t;
				return {
					description: e.publicDescription,
					icon: e.communityIcon || (null === (t = e.icon) || void 0 === t ? void 0 : t.url),
					id: e.id,
					prefixedName: e.displayText
				}
			}, Se = async e => {
				var t;
				const n = await Object(ve.b)(e(), {
					first: 10
				});
				if (n && (null === (t = null == n ? void 0 : n.rankings) || void 0 === t ? void 0 : t.length)) {
					const {
						rankings: e,
						subreddits: t
					} = n;
					return e.map(({
						id: e
					}) => _e(t[e]))
				}
				return null
			}, xe = async e => {
				const t = Object(je.b)();
				if (null == t ? void 0 : t.length) {
					const n = t.map(e => e.id),
						r = await Object(he.e)(e(), n);
					if (r.ok) return Object.values(r.body).map(_e)
				}
				return null
			}, Ee = e => ({
				id: e.id,
				topic: e.title,
				children: e.isRoot ? [] : null
			});
			var Ce = e => (({
					edges: e
				}) => {
					return e.reduce((e, {
						node: t
					}) => {
						const n = t.topic.parents.map(e => e.nodeId),
							r = n.length <= 0,
							s = t.id,
							o = {
								id: s,
								isRoot: r,
								parents: n,
								title: t.topic.title
							};
						return r ? (e.topics.push(Ee(o)), e.dict[s] = e.topics.length - 1) : n.forEach(t => {
							var n;
							const r = e.dict[t];
							if ("number" == typeof r) {
								null === (n = e.topics[r].children) || void 0 === n || n.push(Ee(o))
							}
						}), e
					}, {
						topics: [],
						dict: {}
					}).topics
				})(e),
				Te = n("./src/redditGQL/operations/InterestTopics.json"),
				Ne = n("./src/redditGQL/operations/UpdateTopicPreferences.json");
			const Re = async e => {
				const t = await (e => {
					const t = {
						first: 500,
						maxChildren: 500,
						maxDepth: 2,
						schemeName: "topic_chaining_icons"
					};
					return Object(fe.a)(e, {
						...Te,
						variables: t
					})
				})(e());
				if (!t.ok) return null;
				const n = t.body,
					r = null == n ? void 0 : n.data.interestTopics;
				return r ? Ce(r) : null
			}, Pe = (e, t) => ((e, t) => Object(fe.a)(e, {
				...Ne,
				variables: t
			}))(e(), {
				input: {
					selectedOnboardingTopicIds: t
				}
			});
			var Ae = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				Le = n("./src/reddit/icons/svgs/svgIcons.tsx"),
				we = n("./src/reddit/selectors/experiments/econ/index.ts"),
				Fe = n("./src/reddit/selectors/experiments/onboarding.ts"),
				Me = n("./src/reddit/selectors/experiments/survey.ts");

			function qe() {
				return (qe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: Be
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ve = () => Object(b.f)({
				kind: h.b.Error,
				text: Be._("Something went wrong", null, {
					hk: "22u7ha"
				})
			}), De = async (e, t, n) => {
				const r = {
					ok: !0,
					preSelectedCommunities: {},
					recommendedCommunities: []
				};
				try {
					r.recommendedCommunities = await (async (e, t) => {
						const n = [Se(t), xe(e)],
							[r, s] = await Promise.all(n);
						return Oe()([...s || [], ...r || []], e => e.id)
					})(e, t), n || (r.preSelectedCommunities = r.recommendedCommunities.slice(0, 5).reduce((e, t) => (e[t.id] = !0, e), {}))
				} catch (s) {
					r.ok = !1
				}
				return r
			}, Ge = async (e, t, n, r) => {
				const s = Object.keys(n),
					o = Object.keys(r),
					i = [],
					c = {
						ok: !0,
						reload: !1
					};
				if (s.length && i.push(((e, t) => Object(ke.c)(e(), {
						subredditIds: t,
						subscribe: !0
					}))(e, s)), o.length && i.push(Pe(t, o)), i.length) try {
					(await Promise.all(i)).some(({
						ok: e
					}) => !e) ? c.ok = !1 : c.reload = !0
				} catch (a) {
					c.ok = !1
				}
				return c
			}, Ue = Object(a.a)(e => {
				const {
					gqlContext: t,
					apiContext: n
				} = e, r = Object(c.d)(), s = Object(j.a)(), a = Object(c.e)(Fe.c), b = a === me.ff.Enabled_noskip || a === me.ff.Enabled_noskip_no_preselect, p = a === me.ff.Enabled_noskip_no_preselect, [f, g] = Object(o.useState)(le.INTERESTS), [h, v] = Object(o.useState)([]), [y, I] = Object(o.useState)({}), [_, S] = Object(o.useState)(!1), [E, C] = Object(o.useState)([]), [T, N] = Object(o.useState)([]), [R, P] = Object(o.useState)({}), {
					avatarImage: A,
					fetchRandomAvatar: L,
					saveAvatar: w
				} = k();
				Object(o.useEffect)(() => {
					!async function() {
						const e = await Re(t);
						e && v(e)
					}()
				}, [t]), Object(o.useEffect)(() => {
					!async function() {
						const e = await De(n, t, p),
							{
								ok: s,
								preSelectedCommunities: o,
								recommendedCommunities: i
							} = e;
						s ? (P(o), N(i)) : r(Ve())
					}()
				}, [n, r, t, p]);
				const F = Object(c.e)(e => Object(Me.f)(e)),
					q = Object(o.useCallback)(() => {
						r(Object(u.g)(be.a.ONBOARDING_MODAL_D2X)), F && r(Object(m.f)())
					}, [r, F]),
					B = Object(o.useCallback)((e = 3e3) => setTimeout(q, e), [q]),
					V = Object(o.useCallback)(() => {
						const e = Object.keys(y).filter(e => 0 === y[e].length || !y[e].find(e => y[e]));
						C([]), e.length && async function() {
							S(!0);
							const n = await Ie(t, e);
							S(!1), n && C(n)
						}()
					}, [t, y]),
					D = Object(o.useCallback)(async () => {
						s(Object(M.j)()), g(le.COMMUNITIES), V()
					}, [V, s]),
					G = Object(o.useCallback)(async () => {
						s(Object(M.e)()), L(), g(le.AVATAR);
						const e = await Ge(n, t, R, y);
						e.ok ? e.reload && r(Object(l.frontpageReloaded)()) : r(Ve())
					}, [n, r, L, t, R, y, s]),
					U = Object(o.useCallback)(() => {
						g(le.CELEBRATION), B()
					}, [B]),
					W = Object(o.useCallback)(() => {
						w(), U()
					}, [w, U]),
					z = (() => f === le.INTERESTS ? D : f === le.COMMUNITIES ? G : W)(),
					Z = Object(c.e)(e => f === le.AVATAR && Object(we.e)(e));
				Object(o.useEffect)(() => {
					f !== le.AVATAR || Z || U()
				}, [Z, f, U]);
				const Q = Object(o.useCallback)(() => {
						f === le.COMMUNITIES ? g(le.INTERESTS) : f === le.AVATAR && g(le.COMMUNITIES)
					}, [f]),
					K = Object(o.useCallback)(() => {
						f === le.INTERESTS ? (s(Object(M.i)()), q()) : f === le.AVATAR && (s(Object(O.a)("skip")), U())
					}, [q, s, f, U]),
					J = [le.COMMUNITIES, le.AVATAR].includes(f),
					X = f === le.AVATAR || f === le.INTERESTS && !b,
					H = Object.keys(R).length,
					Y = Object.keys(y).length,
					$ = b && f === le.INTERESTS && Y < 3 || f === le.COMMUNITIES && H < 1;
				return f === le.CELEBRATION || f === le.AVATAR && !Z ? i.a.createElement(x, null) : i.a.createElement("div", {
					className: ae.a.container
				}, i.a.createElement("header", {
					className: ae.a.header
				}, i.a.createElement("div", {
					className: ae.a.headerBar
				}, i.a.createElement("div", null, J && i.a.createElement(Le.d, {
					className: ae.a.backButton,
					onClick: Q
				})), i.a.createElement(Ae.a, {
					className: ae.a.snooIcon
				}), i.a.createElement("div", {
					className: ae.a.skipContainer
				}, X && i.a.createElement("button", {
					className: ae.a.skipButton,
					onClick: K
				}, Be._("Skip", null, {
					hk: "2S8Lme"
				})))), i.a.createElement("div", {
					className: ae.a.title
				}, f === le.INTERESTS && Be._("What are you into?", null, {
					hk: "2hUwMd"
				}), f === le.COMMUNITIES && Be._("Join some communities", null, {
					hk: "1iB29u"
				}), f === le.AVATAR && Be._("Style your avatar", null, {
					hk: "15i2ld"
				})), f === le.INTERESTS && b && i.a.createElement("div", {
					className: ae.a.subtitle
				}, Be._("Select three topics to continue", null, {
					hk: "oHYeb"
				})), f === le.AVATAR && i.a.createElement("div", {
					className: ae.a.subtitle
				}, Be._("This is how people will see you on Reddit.", null, {
					hk: "2SmAiC"
				}), i.a.createElement("br", null), Be._("(You can change it later if you’d like.)", null, {
					hk: "1x9ZNL"
				}))), i.a.createElement(ue, {
					activeStep: f,
					avatarImage: A,
					communitiesByTopic: E,
					fetchRandomAvatar: L,
					interests: h,
					loadingCommunities: _,
					recommendedCommunities: T,
					selectedCommunities: R,
					selectedInterests: y,
					setSelectedCommunities: P,
					setSelectedInterests: I
				}), i.a.createElement("div", {
					className: Object(d.a)(ae.a.continueButtonWrapper, {
						[ae.a.avatarPicker]: f === le.AVATAR
					})
				}, i.a.createElement("button", {
					className: ae.a.continueButton,
					disabled: $,
					onClick: z
				}, Be._("Continue", null, {
					hk: "15wNPy"
				}))))
			});
			t.default = Object(pe.b)(e => i.a.createElement(Ue, qe({}, e, {
				className: Object(d.a)(e.className, ae.a.modal),
				onOverlayClick: s.a,
				overlayClassName: ae.a.overlay
			})))
		},
		"./src/reddit/components/Onboarding/index.m.less": function(e, t, n) {
			e.exports = {
				overlay: "_199HcTqT2ANvw-1B0onPUa",
				modal: "_1ph1IkMoPsBwo5F5FlxxD",
				container: "_2aK1Wp37TOccNSDJhJiDXo",
				header: "_2kXox4Zf-SP3_6ZW9SamZi",
				headerBar: "_u6RyWmmLuKAseqaYeXL5",
				title: "_2RClZCR0YjGTPowbzG7r82",
				subtitle: "_3c6sCbWOfRTQVFdIbmh-XP",
				backButton: "_1tj26oBtwO7xtDQfIgqLJ3",
				snooIcon: "_1AB-migzFEWi3jmiZp47-H",
				skipContainer: "_1duXMT_5mFDCg4o1igoAF6",
				skipButton: "_22ChQI9alXTuxk7yqwRt8l",
				continueButtonWrapper: "_1WVJEpE8EJml0oUkHbpF4R",
				avatarPicker: "_1lW2GsLAoo81KdU6SFWdTW",
				continueButton: "dK60vCQAai2JPR7mVZ4ir",
				SelectedComponent: "_1_rW7Yn-zqDSJD9D5Kd02K",
				selectedComponent: "_1_rW7Yn-zqDSJD9D5Kd02K"
			}
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				c = n.n(i);
			const a = e => s.a.createElement("div", {
				className: Object(o.a)(c.a.placeholderWrapper, e.fullWidth && c.a.fullWidth, e.large && c.a.large)
			}, s.a.createElement("span", {
				className: c.a.subredditIconLoading
			}), s.a.createElement("span", {
				className: c.a.subredditNameLoading
			}))
		},
		"./src/reddit/components/TopSubredditsWidget/index.m.less": function(e, t, n) {
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
				handleOverflow: "_1mEfDz-ZrTiw9KxnSpAXBy",
				categoryLink: "_25MytV8CK2IS_fK867Q3qH",
				rankText: "_2B-BDgM13P2SLJX-GZrxHV",
				smallText: "_3BO4rLcAUZY_jK4h2rZj7y",
				arrow: "ztLeQJcDYVKbL9h94QtI_",
				negative: "_3dHwI98vF7PVi8MmZFpeXj",
				communityBannerPlaceholder: "_2-cUhM9bP2B5FPfQsDLJGR",
				glimmer: "NJdRTjquS3Maw_lWbQTkw",
				placeholderWrapper: "_2jtVdXcFC3Ioe3B_hXF5Eh",
				subredditIconLoading: "_1F-hYShaC9dYxEEe3_TCGR",
				subredditNameLoading: "_YedzkdLjjcYoXUE26Cyb",
				fullWidth: "_1MG43W0qN1RYkFlwxoV_tQ",
				LeaderboardSubscribeButton: "_3wMZok1UIz3pr0AAF2ZOTy",
				leaderboardSubscribeButton: "_3wMZok1UIz3pr0AAF2ZOTy",
				noDelta: "-i9ZUMkweo4ZSITdQHUmw",
				WidgetSubscribeButton: "yPMIo9D78wpfNZYMbQXM8",
				widgetSubscribeButton: "yPMIo9D78wpfNZYMbQXM8"
			}
		},
		"./src/reddit/constants/avatars.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
			const s = {
				legalCopy: () => r.fbt._("Avatars and avatar visual elements © Reddit and its licensors.", null, {
					hk: "ZgN7P"
				}),
				learnMoreText: () => r.fbt._("Learn more", null, {
					hk: "1rlvT"
				}),
				url: "https://reddit.zendesk.com/hc/en-us/articles/360050641932"
			}
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = n.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => s.a.createElement("div", {
				className: Object(o.a)(c.a.loadingIcon, t, {
					[c.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return b
			}));
			var r = n("./src/config.ts"),
				s = n("./src/lib/omitHeaders/index.ts"),
				o = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/endpoints/governance/requester.ts"),
				c = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				a = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function d(e, t) {
				return Object(i.a)(e, {
					endpoint: `${r.a.metaUrl}/communities/${t.subredditId}/me`,
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
				return Object(i.a)(e, {
					endpoint: `${r.a.metaUrl}/ps/me/braintree-client-tokens`,
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function u(e, t) {
				return Object(i.a)(e, {
					endpoint: `${r.a.metaUrl}/orders`,
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

			function m(e, t) {
				return Object(i.a)(Object(s.a)(e, [o.a]), {
					endpoint: `${e.apiUrl}/api/info?id=${t.join(",")}`,
					method: "get"
				}).then(e => {
					if (e.ok) {
						const t = e.body.data.children.map(({
							data: e
						}) => Object(a.a)(e)).reduce((e, t) => (e[t.id] = t, e), {});
						return {
							...e,
							body: t
						}
					}
					return e
				})
			}
			async function b(e, t) {
				const n = await Object(i.a)(e, {
					endpoint: `${r.a.metaUrl}/orders`,
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
		"./src/reddit/endpoints/subreddit/local.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			}));
			var r = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/redditGQL/operations/GetNearbySubreddits.json"),
				o = n("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts");
			const i = (e, t) => Object(r.a)(e, {
				...s,
				variables: t
			});
			async function c(e, t) {
				const n = await i(e, t);
				if (n && n.ok) {
					const e = n.body,
						t = e && e.data && e.data.nearbySubreddits;
					return Object(o.a)(t)
				}
			}
			t.a = i
		},
		"./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			n("./node_modules/lodash/isEmpty.js");
			var r = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const s = ({
					edges: e,
					pageInfo: t
				}) => {
					const n = {},
						s = [];
					for (const {
							node: o,
							...i
						} of e) {
						const e = Object(r.a)(o);
						n[e.id] = e, s.push(i)
					}
					return {
						pageInfo: t,
						rankings: s,
						subreddits: n
					}
				},
				o = ({
					edges: e
				}) => {
					const t = {},
						n = [];
					for (const {
							node: s,
							...o
						} of e) {
						const e = Object(r.a)(s);
						t[e.id] = {
							...e,
							bannerBackgroundImage: s && s.styles && s.styles.bannerBackgroundImage
						}, n.push(o)
					}
					return {
						rankings: n,
						subreddits: t
					}
				},
				i = ({
					edges: e,
					pageInfo: t
				}) => {
					const n = {},
						s = [];
					let o = 0;
					for (const {
							node: i
						} of e) {
						const e = Object(r.a)(i);
						n[e.id] = {
							...e,
							publicDescription: null == i ? void 0 : i.publicDescriptionText,
							bannerBackgroundImage: i && i.styles && i.styles.bannerBackgroundImage
						}, s.push({
							id: e.id,
							rank: o
						}), o += 1
					}
					return {
						rankings: s,
						subreddits: n,
						pageInfo: t
					}
				}
		},
		"./src/reddit/icons/svgs/CommunityDefault/filled.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", o({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), s.a.createElement("path", {
				d: "M16.5,2.924,11.264,15.551H9.91L15.461,2.139h.074a9.721,9.721,0,1,0,.967.785ZM8.475,8.435a1.635,1.635,0,0,0-.233.868v4.2H6.629V6.2H8.174v.93h.041a2.927,2.927,0,0,1,1.008-.745,3.384,3.384,0,0,1,1.453-.294,3.244,3.244,0,0,1,.7.068,1.931,1.931,0,0,1,.458.151l-.656,1.558a2.174,2.174,0,0,0-1.067-.246,2.159,2.159,0,0,0-.981.215A1.59,1.59,0,0,0,8.475,8.435Z"
			}))
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return a
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "j", (function() {
				return b
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "d", (function() {
				return k
			}));
			var r = n("./src/lib/objectSelector/index.ts"),
				s = n("./src/reddit/featureFlags/index.ts"),
				o = n("./src/reddit/selectors/posts.ts"),
				i = n("./src/reddit/selectors/subreddit.ts"),
				c = n("./src/reddit/selectors/user.ts");
			const a = (e, t) => {
					const n = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (n) {
						const t = Object(i.Q)(e, {
							subredditId: n
						});
						return t && t.displayText || ""
					}
					return ""
				},
				d = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				l = e => e.focusedVerticals.components.dismissed,
				u = [],
				m = Object(r.a)((e, t) => {
					const n = b(e, t);
					if (!n) return u;
					const r = Object(i.U)(e, {
						subredditName: n.name
					});
					return r && r.postIds && r.postIds.length ? r.postIds : u
				}),
				b = (e, t) => {
					const n = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return n ? Object(i.Q)(e, {
						subredditId: n
					}) : null
				},
				p = (e, t, n, r, s) => {
					const i = s.find(e => e <= t) || -1,
						c = s.find(e => e > t) || 1 / 0;
					return t !== c && t !== i && (!(i + n > t) && (!(t + n > c) && !((e, t, n) => {
						const r = n[t - 1],
							s = n[t],
							i = s && Object(o.H)(e, {
								postId: r
							}) || null,
							c = s && Object(o.H)(e, {
								postId: s
							}) || null;
						return i && i.isSponsored || c && c.isSponsored
					})(e, t, r)))
				},
				f = [3],
				g = Object(r.a)((e, {
					existingDUPositions: t,
					listingProps: n
				}) => {
					const r = t.slice().sort();
					let s = -1;
					const i = Object(o.A)(e, {
							listingKey: n.listingKey
						}),
						c = [];
					return f.forEach(t => {
						let n = s + t;
						if (!(n >= i.length)) {
							for (; n < i.length && !p(e, n, t, i, r);) n += 1;
							n < i.length && (c.push(n), s = n)
						}
					}), c
				}),
				O = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				j = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				h = e => e.focusedVerticals.category,
				v = e => e.focusedVerticals.lastLoadedEnv,
				k = e => {
					const t = Object(c.J)(e),
						n = s.d.geoSubredditRecommendationDULoggedIn(e),
						r = s.d.geoSubredditRecommendationDULoggedOut(e);
					return t && n || !t && r
				}
		},
		"./src/redditGQL/operations/Frontpage.json": function(e) {
			e.exports = JSON.parse('{"id":"3eef17bc180f"}')
		},
		"./src/redditGQL/operations/GetNearbySubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"aff6d12aa0c2"}')
		},
		"./src/redditGQL/operations/InterestTopics.json": function(e) {
			e.exports = JSON.parse('{"id":"c49069ffb9a9"}')
		},
		"./src/redditGQL/operations/InterestTopicsByIds.json": function(e) {
			e.exports = JSON.parse('{"id":"a4ae094d69e5"}')
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"f8a400eb97dd"}')
		},
		"./src/redditGQL/operations/UpdateTopicPreferences.json": function(e) {
			e.exports = JSON.parse('{"id":"a48d141a1878"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OnboardingModal.417c0c55ec9db4299229.js.map