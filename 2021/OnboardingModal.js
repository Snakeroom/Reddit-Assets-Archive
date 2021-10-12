// https://www.redditstatic.com/desktop2x/OnboardingModal.7267f506b747f7df2f8b.js
// Retrieved at 10/12/2021, 11:00:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OnboardingModal"], {
		"./node_modules/lodash/times.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseTimes.js"),
				r = n("./node_modules/lodash/_castFunction.js"),
				o = n("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				c = 4294967295,
				a = Math.min;
			e.exports = function(e, t) {
				if ((e = o(e)) < 1 || e > i) return [];
				var n = c,
					d = a(e, c);
				t = r(t), e -= c;
				for (var l = s(d, t); ++n < e;) t(n);
				return l
			}
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "b", (function() {
				return _
			}));
			var s, r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/performanceTimings/index.tsx"),
				i = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(s || (s = {}));
			var d, l = n("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(d || (d = {}));
			var m = n("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				b = n("./src/reddit/selectors/platform.ts"),
				p = n("./src/reddit/selectors/user.ts");
			const g = Object(r.a)(i.g),
				f = Object(r.a)(i.e),
				O = Object(r.a)(i.h),
				j = Object(r.a)(i.c),
				h = Object(r.a)(i.f),
				y = Object(r.a)(i.j),
				k = Object(r.a)(i.i),
				v = () => async (e, t, {
					gqlContext: n
				}) => {
					const r = t(),
						o = Object(m.e)(r),
						i = Object(m.d)(r),
						d = Object(p.J)(r);
					if (o || !i) return;
					e(O());
					let b = !1;
					try {
						const t = d ? s.LoggedInGeo : s.LoggedOutGeo,
							r = await ((e, t, n) => Object(c.a)(e, {
								...a,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(n(), t);
						if (r.ok && r.body) {
							const {
								data: t
							} = r.body;
							if (S(t)) {
								if (x(t)) {
									e(j({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), b = !0
								} else if (I(t)) {
									const n = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: s,
											interactedSubreddit: r,
											category: o
										} = n.focusRecommendations[0],
										i = [s, r],
										c = Object(u.d)(i),
										a = Object(l.b)(i),
										d = Object(u.c)(s),
										m = {
											recommendedSubredditIds: [s.id],
											interactedSubredditIds: [r.id],
											subreddits: c,
											subredditsAboutInfo: a,
											subredditTopContent: d,
											category: o,
											lastLoadedEnv: "client"
										};
									e(g(m)), b = !0
								}
							} else b = !1
						}
					} catch (h) {
						b = !1
					}
					b || e(f({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, S = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, x = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations;
					return !(!n || 0 !== n.length)
				}, I = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations,
						s = t && t.type;
					return !!(n && !x(e) && s === d.GEO && n[0] && n[0].recommendedSubreddit && n[0].interactedSubreddit)
				}, _ = () => async (e, t, n) => {
					var s, r;
					const i = t(),
						c = Object(m.g)(i);
					if (Object(m.f)(i) || null === c || "client" === c) {
						const n = null === (r = null === (s = Object(b.b)(t())) || void 0 === s ? void 0 : s.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
							c = Object(p.K)(i);
						return Object(o.i)(() => e(v()), {
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
				return ne
			})), n.d(t, "frontpageLoaded", (function() {
				return se
			})), n.d(t, "frontpageFailed", (function() {
				return re
			})), n.d(t, "frontpageDataRequested", (function() {
				return oe
			})), n.d(t, "frontpageRequestedHelper", (function() {
				return ie
			})), n.d(t, "frontpageRequested", (function() {
				return ae
			})), n.d(t, "frontpageReloaded", (function() {
				return le
			})), n.d(t, "morePostsPending", (function() {
				return ue
			})), n.d(t, "morePostsLoaded", (function() {
				return me
			})), n.d(t, "morePostsFailed", (function() {
				return be
			})), n.d(t, "morePostsRequested", (function() {
				return pe
			})), n.d(t, "refreshFeed", (function() {
				return ge
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/pick.js"),
				o = n.n(r),
				i = n("./src/lib/getParsedUserAgent/index.ts"),
				c = n("./src/reddit/actions/focusedVerticals/index.ts"),
				a = n("./src/lib/base64/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/makeGqlRequest/index.ts"),
				u = n("./src/lib/performanceTimings/index.tsx"),
				m = n("./src/reddit/constants/graphql.ts"),
				b = n("./src/reddit/helpers/getPostLimitForMobile/index.ts"),
				p = n("./src/lib/env/index.ts"),
				g = n("./src/lib/sentry/index.ts"),
				f = n("./src/reddit/models/Live/index.ts"),
				O = n("./src/reddit/models/Post/index.ts"),
				j = n("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				h = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				y = n("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				k = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				v = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				S = n("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				x = n("./src/reddit/selectors/platform.ts"),
				I = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/redditGQL/operations/Frontpage.json");
			const E = (e, t) => {
					var n, s;
					const {
						after: r,
						dist: o,
						isMobile: i,
						layout: c,
						limit: d,
						sort: l,
						t: u
					} = t, p = Object(I.T)(e) || Object(I.K)(e), g = Object(x.p)(e), f = {
						adContext: {
							layout: c ? c.toUpperCase() : m.a.Card,
							reddaid: e.user.reddaid,
							distance: o
						},
						forceGeopopular: !0,
						includeCommunityDUs: !1,
						includeFeaturedAnnouncements: !0,
						includeLiveEvents: !0,
						includeIdentity: p && !(null === (s = null === (n = e.user.account) || void 0 === n ? void 0 : n.karma) || void 0 === s ? void 0 : s.total),
						includePostRecommendations: !1,
						includeSubredditQuestions: p,
						recentPostIds: e.posts.recent
					};
					return l && (f.sort = l.toUpperCase()), u && (f.range = u.toUpperCase()), i ? f.pageSize = Object(b.a)(c) : d && (f.pageSize = d), g && g.ad && (f.forceAds = {
						ad: g.ad
					}), r && (f.after = Object(a.a)(r)), f
				},
				C = async (e, t, n, s) => {
					const r = Date.now(),
						o = await ((e, t) => Object(l.a)(e, {
							..._,
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
							featuredAnnouncements: s,
							recentPosts: r = []
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
									const t = Object(h.e)(e);
									a.posts[t.id] = t;
									const {
										crosspostRoot: n
									} = e;
									n && n.type === O.a.Post && n.postInfo && d(n.postInfo);
									let s = t.id;
									if (Object(O.l)(e)) a.profiles[e.profile.id] || (a.profiles[e.profile.id] = Object(k.a)(e.profile));
									else if (Object(O.m)(e)) a.subreddits[e.subreddit.id] || (a.subreddits[e.subreddit.id] = Object(v.a)(e.subreddit)), a.postFlair[e.subreddit.id] || (a.postFlair[e.subreddit.id] = Object(j.a)(e.subreddit));
									else if (Object(O.h)(e)) {
										const n = Object(h.b)(e);
										if (!n) return null;
										s = n, a.posts[n] = {
											...t,
											id: n,
											permalink: `${t.permalink}?instanceId=${encodeURIComponent(n)}`
										}, a.posts[t.id] || (a.posts[t.id] = {
											...t,
											events: []
										}), a.postInstances[e.id] || (a.postInstances[e.id] = []), a.postInstances[e.id].push(n)
									}
									return s
								};
							for (const p of e) {
								const e = Object(v.a)(p);
								a.subreddits[e.id] = e, o.push(e.id)
							}
							for (const {
									node: j
								} of n.elements.edges)
								if (Object(O.k)(j)) {
									const e = d(j);
									e && a.postIds.push(e)
								} else if (Object(f.c)(j) && !c) c = j;
							else {
								const e = `Received unhandled element type when processing frontpage data: "${j.__typename}"`;
								Object(p.b)() || console.warn(e), g.c.captureMessage(e)
							}
							for (const p of r) {
								if (!p) continue;
								const e = d(p);
								e && i.push(e)
							}
							const l = a.postIds.length - 1,
								u = l >= 0 ? a.postIds[l] : "",
								m = n.elements.dist,
								b = n.elements.geoFilter;
							return {
								...a,
								account: t && Object(S.a)(t) || null,
								featuredLiveThread: c,
								announcements: s,
								preferences: t && t.preferences && Object(y.a)(t.preferences, t.interactions) || null,
								...0 !== o.length && {
									trendingSubredditIds: o
								},
								...0 !== i.length && {
									recentPostIds: i
								},
								token: u,
								...null !== m && {
									dist: m
								},
								...null !== b && {
									geoFilter: b
								}
							}
						})(o.body.data);
						const t = Date.now(),
							a = [{
								duration: i - r,
								logKeyType: u.a.gqlFetchTiming
							}, {
								duration: t - e,
								logKeyType: u.a.gqlNormalizationTiming
							}];
						Object(u.h)({
							name: d.r.FRONTPAGE,
							isLoggedIn: n,
							metrics: a,
							statsdPathsForExperiments: s
						})
					} catch (a) {}
					return {
						...o,
						body: c
					}
				};
			var N = n("./src/lib/pageTitle.ts"),
				T = n("./src/reddit/actions/login.ts"),
				P = n("./src/reddit/actions/meta.ts"),
				R = n("./src/reddit/actions/platform.ts"),
				w = n("./src/reddit/actions/toaster.ts"),
				L = n("./src/reddit/constants/page.ts"),
				q = n("./src/reddit/constants/parameters.ts"),
				B = n("./src/reddit/constants/postLayout.ts"),
				M = n("./src/reddit/contexts/PageLayer/index.tsx"),
				F = n("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				D = n("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				A = n("./src/reddit/models/Toast/index.ts"),
				G = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				V = n("./src/reddit/selectors/frontpage.ts"),
				U = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				W = n("./src/reddit/selectors/runTimeEnvVars.ts"),
				Z = n("./src/lib/makeActionCreator/index.ts"),
				K = n("./src/lib/makeListingKey/index.ts"),
				Q = n("./src/reddit/actions/ads/index.ts"),
				z = n("./src/reddit/helpers/chooseVariant/index.ts"),
				X = n("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				J = n("./src/reddit/actions/seo/linksModule.ts"),
				H = n("./src/reddit/selectors/seo/linksModule.ts"),
				Y = n("./src/reddit/actions/publicAccessNetwork/api.ts"),
				$ = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				ee = n("./src/reddit/helpers/filterListingResponse/index.ts"),
				te = n("./src/reddit/actions/frontpage/constants.ts");
			const ne = Object(Z.a)(te.c),
				se = Object(Z.a)(te.b),
				re = Object(Z.a)(te.a),
				oe = (e, t) => async (n, r, o) => {
					var c, a;
					const d = r();
					if (d.listings.postOrder.api.pending[e]) return;
					const l = B.e[Object(M.Q)(d, {})];
					t.isMobile = Object(i.e)(d.meta.userAgent), t.recentPostIds = d.posts.recent, t.layout = l, t.useMockData = !!d.platform.currentPage && (!!d.platform.currentPage.queryParams.useMockData && Object(W.b)(d)), n(ne({
						key: e
					})); {
						const e = d.platform.currentPage,
							n = e && e.url;
						n && (t.clickUrl = n)
					}
					const m = null === (a = null === (c = Object(x.b)(d)) || void 0 === c ? void 0 : c.routeMatch) || void 0 === a ? void 0 : a.route.chunk,
						b = Object(I.K)(d),
						p = await Object(u.i)(() => C(o.gqlContext(), E(d, t), Object(I.T)(d), t.statsdPathsForExperiments), {
							name: "fetchFrontpageData",
							isLoggedIn: b,
							page: m
						});
					n(Object(R.m)(p.status));
					const g = `error-${e}`;
					if (p.ok) {
						const t = p.body;
						n(se({
							key: e,
							meta: d.meta,
							...t
						})), n(w.g(g)), t.geoFilter && n(Object(P.k)(t.geoFilter)), n(Object(Q.b)(X.a.FRONTPAGE))
					} else n(re({
						error: p.error,
						key: e,
						...p.body
					})), n(w.f({
						id: g,
						kind: A.b.Error,
						text: s.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "36ypKx"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1XMjgA"
						}),
						buttonAction: oe(e, t)
					}))
				}, ie = (e, t) => async (n, s) => {
					const r = s(),
						i = Object(V.a)(r),
						{
							sort: c = i
						} = e.params,
						a = Object(K.a)(L.b, c, e.queryParams),
						l = r.listings.postOrder.ids[a],
						u = r.listings.postOrder.api.error[a],
						m = r.listings.postOrder.api.pending[a],
						b = q.y in e.queryParams && e.queryParams[q.y].toUpperCase() || "",
						p = b in d.dc && d.dc[b];
					if (m || l && !u && !t) return void(l && (n(R.l({
						title: N.d()
					})), r.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						n(Object(Q.b)(X.a.FRONTPAGE))
					})));
					const g = Object(F.a)(r),
						f = Object(F.b)(g),
						O = [Object(F.c)(g)];
					await n(oe(a, {
						...o()(e.queryParams, q.l),
						...o()(e.queryParams, q.k),
						limit: f,
						sort: c,
						statsdPathsForExperiments: O,
						t: Object(D.a)(c, p)
					})), n(R.l({
						title: N.d()
					})), Object(z.c)(r, {
						experimentEligibilitySelector: z.a,
						experimentName: "redesign_aa"
					});
					const j = Object(G.a)(r, {});
					Object(G.e)(j) && n(Object(T.k)())
				}, ce = () => async (e, t) => {
					var n, s;
					const r = t();
					if (Object(H.a)(r)) return;
					const o = null === (s = null === (n = Object(x.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === s ? void 0 : s.route.chunk,
						i = Object(I.K)(r);
					return Object(u.i)(() => e(Object(J.d)()), {
						name: "frontpageLinksRequested",
						page: o,
						isLoggedIn: i
					})
				}, ae = (e, t) => async n => {
					await Promise.all([n(Object(c.b)()), n(ie(e, t)), n(ce()), n(Object(Y.c)($.R))])
				}, de = Object(Z.a)(te.d), le = e => async (t, n) => {
					const s = n(),
						r = s.platform.currentPage.routeMatch.match;
					Object(U.o)(s) || Object(U.u)(s) || (e || t(de()), await t(ae(r, !0)))
				}, ue = Object(Z.a)(te.g), me = Object(Z.a)(te.f), be = Object(Z.a)(te.e), pe = e => async (t, n, {
					gqlContext: s
				}) => {
					const r = n(),
						c = Object(V.a)(r),
						{
							sort: a = c
						} = e,
						l = r.platform.currentPage ? r.platform.currentPage.queryParams : {},
						u = Object(K.a)(L.b, a, l),
						m = r.listings.postOrder.loadMore[u],
						b = l[q.y] ? l[q.y].toUpperCase() : "",
						p = b in d.dc && d.dc[b];
					if (m) {
						const e = r.listings.postOrder.api.pending[u],
							n = r.listings.postOrder.fetchedTokens,
							c = !(!n[u] || !n[u][m.token]);
						if (!e && !c) {
							t(ue({
								key: u,
								fetchedToken: m.token
							}));
							const e = !!r.platform.currentPage && !!r.platform.currentPage.queryParams.useMockData,
								n = Object(F.a)(r),
								c = B.a,
								d = [Object(F.c)(n)],
								b = {
									after: m.token,
									dist: m.dist,
									...o()(l, q.l),
									isMobile: Object(i.e)(r.meta.userAgent),
									limit: c,
									sort: a,
									t: Object(D.a)(a, p),
									layout: B.e[Object(M.Q)(r, {})],
									useMockData: e
								}; {
								const e = r.platform.lastPage,
									t = e && e.url;
								t && (b.clickUrl = t)
							}
							const g = () => C(s(), E(r, b), Object(I.T)(r), d),
								f = await g(),
								O = {
									...f.body,
									...Object(ee.a)(r, u, f.body)
								};
							f.ok ? t(me({
								key: u,
								fetchedToken: m.token,
								meta: r.meta,
								...O
							})) : t(be({
								key: u,
								error: f.error,
								fetchedToken: m.token,
								...O
							}))
						}
					}
				}, ge = e => async (t, n) => {
					const s = n(),
						r = Object(V.a)(s),
						{
							sort: o = r
						} = e,
						i = s.platform.currentPage ? s.platform.currentPage.queryParams : {},
						c = Object(K.a)(L.b, o, i),
						a = i[q.y] ? i[q.y].toUpperCase() : "",
						l = a in d.dc && d.dc[a],
						u = Object(F.a)(s),
						m = Object(F.b)(u);
					await t(oe(c, {
						limit: m,
						sort: o,
						t: Object(D.a)(o, l)
					}))
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
			var s = n("./node_modules/lodash/noop.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				c = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/frontpage/index.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = n("./src/reddit/components/Onboarding/Celebration.m.less"),
				g = n.n(p);
			const {
				fbt: f
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var O = () => i.a.createElement("div", {
					className: g.a.CelebrationBg
				}, i.a.createElement("div", {
					className: g.a.CelebrationTitle
				}, f._("We're happy you're here!", null, {
					hk: "1YMdHn"
				})), i.a.createElement("div", {
					className: g.a.CelebrationSubTitle
				}, f._("Your home feed is being created now…", null, {
					hk: "Onr1V"
				})), i.a.createElement("div", null, i.a.createElement(b.a, {
					className: g.a.LoadingSpinner,
					sizePx: 16
				}))),
				j = n("./node_modules/lodash/times.js"),
				h = n.n(j),
				y = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				k = n("./src/reddit/helpers/trackers/onboarding.ts"),
				v = n("./src/reddit/hooks/useTracking.ts"),
				S = n("./src/reddit/icons/svgs/CommunityDefault/filled.tsx"),
				x = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				I = n("./src/reddit/icons/svgs/Positive/index.tsx"),
				_ = n("./src/reddit/components/Onboarding/CommunityPicker.m.less"),
				E = n.n(_);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js"), N = () => C._("Recommended for you", null, {
				hk: "28LTkA"
			}), T = ({
				community: e,
				selected: t,
				toggleAll: n,
				toggleSelection: s
			}) => {
				const {
					communities: r
				} = e, [c, a] = Object(o.useState)(null);
				Object(o.useEffect)(() => {
					a(!r.find(e => !t[e.id]))
				}, [r, t]);
				const d = Object(o.useCallback)(() => {
					n(e.topicId, !c), a(!c)
				}, [e.topicId, c, n]);
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: E.a.RecommendedHeader
				}, i.a.createElement("span", {
					className: E.a.SectionTitle
				}, e.topicTitle), i.a.createElement("button", {
					onClick: d,
					className: E.a.SelectAllLink
				}, c && C._("Deselect All", null, {
					hk: "4u0XYF"
				}), !c && null !== c && C._("Select All", null, {
					hk: "3izh21"
				}))), i.a.createElement(i.a.Fragment, null, i.a.createElement(R, {
					communities: e.communities,
					communityId: e.topicId,
					selected: t,
					toggleSelection: s,
					topicTitle: e.topicTitle
				})))
			}, P = () => i.a.createElement(i.a.Fragment, null, h()(5, e => i.a.createElement(y.a, {
				key: e,
				fullWidth: !0,
				large: !0
			}))), R = ({
				communities: e,
				communityId: t,
				selected: n,
				topicTitle: s,
				toggleSelection: r
			}) => {
				const c = Object(v.a)(),
					[a, d] = Object(o.useState)(!1),
					l = e.length > 4,
					u = e.slice(0, a ? void 0 : 4),
					m = "recommended" === t ? "" : s,
					b = Object(o.useCallback)(() => {
						d(!0), c(Object(k.f)(s))
					}, [c, s]);
				return i.a.createElement(i.a.Fragment, null, u.map(e => i.a.createElement(w, {
					communityId: e.id,
					description: e.description,
					icon: e.icon,
					isSelected: n[e.id],
					key: e.id,
					prefixedName: e.prefixedName,
					toggleSelection: r,
					topicTitle: s
				})), l && !a && i.a.createElement(L, {
					text: m,
					showMore: b
				}))
			}, w = ({
				communityId: e,
				description: t,
				icon: n,
				isSelected: s,
				prefixedName: r,
				toggleSelection: c,
				topicTitle: a
			}) => {
				const l = Object(v.a)(),
					u = Object(o.useCallback)(() => {
						l(Object(k.d)(!s, a, r)), c(e)
					}, [e, s, r, l, c, a]);
				return i.a.createElement("div", {
					className: Object(d.a)(E.a.CommunityRow, {
						[E.a.Selected]: s
					}),
					onClick: u
				}, i.a.createElement("div", {
					className: E.a.IconSection
				}, n && i.a.createElement("img", {
					className: E.a.IconWrapper,
					src: n
				}), !n && i.a.createElement(S.a, {
					className: E.a.CommunityNoIcon
				})), i.a.createElement("div", {
					className: E.a.TextSection
				}, i.a.createElement("div", {
					className: E.a.Info
				}, r), i.a.createElement("div", {
					className: E.a.Description
				}, t)), i.a.createElement("div", {
					className: E.a.ButtonSection
				}, s && i.a.createElement(I.a, {
					className: E.a.SelectedIcon
				}), !s && i.a.createElement(x.a, {
					className: E.a.SelectIcon
				})))
			}, L = ({
				showMore: e,
				text: t
			}) => i.a.createElement("div", {
				className: E.a.MoreRecommendations
			}, i.a.createElement("button", {
				onClick: e
			}, !t && C._("More recommendations", null, {
				hk: "3I8APZ"
			}), t && C._("More in {topic-title}", [C._param("topic-title", t)], {
				hk: "4afv7s"
			})));
			var q = ({
					communitiesByTopic: e,
					loadingCommunities: t,
					recommendedCommunities: n,
					selected: s,
					toggleSelection: r,
					toggleAll: c
				}) => {
					const a = Object(v.a)();
					return Object(o.useEffect)(() => {
						a(Object(k.g)())
					}, [a]), i.a.createElement("div", {
						className: E.a.CommunityListWrapper
					}, n.length > 0 && i.a.createElement(T, {
						community: {
							communities: n,
							topicId: "recommended",
							topicTitle: N()
						},
						selected: s,
						toggleAll: c,
						toggleSelection: r
					}), (!!e.length || t) && i.a.createElement(i.a.Fragment, null, t && i.a.createElement(P, null), e.map(e => i.a.createElement(T, {
						key: e.topicId,
						community: e,
						selected: s,
						toggleAll: c,
						toggleSelection: r
					}))))
				},
				B = n("./node_modules/polished/dist/polished.es.js"),
				M = n("./src/reddit/controls/Button/index.tsx"),
				F = n("./src/reddit/components/Onboarding/InterestPicker.m.less"),
				D = n.n(F);
			const {
				fbt: A
			} = n("./node_modules/fbt/lib/FbtPublic.js"), G = ({
				interests: e,
				selected: t,
				toggleSelection: n,
				topicColor: s = null
			}) => i.a.createElement(i.a.Fragment, null, e.map((e, r) => {
				var o;
				const c = !!t[e.id],
					a = null !== s;
				return i.a.createElement(i.a.Fragment, {
					key: e.id
				}, i.a.createElement(V, {
					colorIndex: a && null != s ? s : r,
					interest: e,
					isSelected: c,
					isSubtopic: a,
					key: e.id,
					toggleSelection: n,
					topic: e.topic
				}), c && !!(null === (o = e.children) || void 0 === o ? void 0 : o.length) && i.a.createElement(G, {
					interests: e.children,
					selected: t,
					toggleSelection: n,
					topicColor: r
				}))
			})), V = ({
				colorIndex: e,
				interest: t,
				isSelected: n,
				isSubtopic: s,
				toggleSelection: r,
				topic: c
			}) => {
				const a = Object(v.a)(),
					l = Object(o.useCallback)(() => {
						a(Object(k.h)(!n, !s, c)), r(t)
					}, [t, n, s, a, r, c]);
				return i.a.createElement(M.s, {
					className: Object(d.a)(D.a.InterestButton, {
						[D.a.Selected]: n
					}),
					kind: M.a.Button,
					onClick: l,
					style: U(e, n, s)
				}, c)
			}, U = (e, t, n) => {
				if (!t && !n) return {};
				let s = W(e);
				return n && !t && (s = Object(B.f)(s, .25)), {
					backgroundColor: s
				}
			}, W = e => Z[e % 7], Z = ["#c08d41", "#ffa800", "#ff4500", "#ff3881", "#b44ac0", "#6a5cff", "#3690ea"];
			var K = ({
					interests: e,
					selected: t,
					toggleSelection: n
				}) => {
					const s = Object(v.a)();
					return Object(o.useEffect)(() => {
						s(Object(k.k)())
					}, [s]), i.a.createElement("div", {
						className: D.a.InterestListButtons
					}, i.a.createElement(G, {
						interests: e,
						selected: t,
						toggleSelection: n
					}))
				},
				Q = n("./src/reddit/components/Onboarding/index.m.less"),
				z = n.n(Q);
			const {
				fbt: X
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var J;
			! function(e) {
				e.INTERESTS = "interests", e.COMMUNITIES = "communities", e.CELEBRATION = "celebration"
			}(J || (J = {}));
			const H = ({
				activeStep: e,
				communitiesByTopic: t,
				interests: n,
				loadingCommunities: s,
				recommendedCommunities: r,
				selectedCommunities: c,
				selectedInterests: a,
				setSelectedCommunities: d,
				setSelectedInterests: l
			}) => {
				const u = Object(o.useRef)(null);
				Object(o.useEffect)(() => {
					var e;
					return null === (e = u.current) || void 0 === e ? void 0 : e.scroll(0, 0)
				}, [e]);
				const m = Object(o.useCallback)(e => {
						const t = c[e],
							n = {
								...c
							};
						t ? delete n[e] : n[e] = !0, d(n)
					}, [c, d]),
					b = Object(o.useCallback)((e, n) => {
						const s = {
								...c
							},
							o = e => e.forEach(e => {
								n ? s[e.id] = !0 : delete s[e.id]
							});
						if ("recommended" === e) o(r);
						else {
							const n = t.find(t => t.topicId === e);
							n && o(n.communities)
						}
						d(s)
					}, [t, r, c, d]),
					p = Object(o.useCallback)(e => {
						const {
							children: t,
							id: n
						} = e, s = a[n], r = {
							...a
						};
						s ? (delete r[n], s.forEach(e => delete r[e])) : r[n] = [...(null == t ? void 0 : t.map(e => e.id)) || []], l(r)
					}, [a, l]);
				return i.a.createElement("div", {
					className: z.a.SelectedComponent,
					ref: u
				}, e === J.INTERESTS && i.a.createElement(K, {
					interests: n,
					selected: a,
					toggleSelection: p
				}), e === J.COMMUNITIES && i.a.createElement(q, {
					communitiesByTopic: t,
					loadingCommunities: s,
					recommendedCommunities: r,
					selected: c,
					toggleAll: b,
					toggleSelection: m
				}))
			};
			var Y = n("./src/reddit/constants/experiments.ts"),
				$ = n("./src/reddit/constants/modals.ts"),
				ee = n("./src/reddit/contexts/ApiContext.tsx"),
				te = n("./src/lib/makeGqlRequest/index.ts"),
				ne = n("./node_modules/lodash/uniqBy.js"),
				se = n.n(ne),
				re = n("./src/reddit/customMiddleware/recentSubreddits.ts"),
				oe = n("./src/reddit/endpoints/economics/specialMembership.ts"),
				ie = n("./src/reddit/endpoints/subreddit/local.ts"),
				ce = n("./src/reddit/endpoints/subreddit/subscriptions.ts");
			var ae = n("./src/redditGQL/operations/InterestTopicsByIds.json");
			const de = async (e, t) => {
				const n = await ((e, t) => {
					const n = {
						topicIds: [],
						schemeName: "topic_chaining_icons",
						maxSubreddits: 10,
						...t
					};
					return Object(te.a)(e, {
						...ae,
						variables: n
					})
				})(e(), {
					topicIds: t
				});
				if (!n.ok) return null;
				const s = n.body,
					r = null == s ? void 0 : s.data.interestTopicsByIds;
				return r ? (e => (({
					edges: e
				}) => e.map(({
					node: e
				}) => {
					var t, n, s;
					return {
						topicId: e.id,
						topicTitle: e.topic.title,
						communities: (null === (s = null === (n = null === (t = e.topic) || void 0 === t ? void 0 : t.subreddits) || void 0 === n ? void 0 : n.edges) || void 0 === s ? void 0 : s.map(({
							node: e
						}) => (({
							id: e,
							prefixedName: t,
							publicDescriptionText: n,
							styles: s
						}) => {
							var r;
							return {
								description: n,
								icon: s.icon || (null === (r = s.legacyIcon) || void 0 === r ? void 0 : r.url),
								id: e,
								prefixedName: t
							}
						})(e))) || []
					}
				}))(e))(r) : null
			}, le = e => {
				var t;
				return {
					description: e.publicDescription,
					icon: e.communityIcon || (null === (t = e.icon) || void 0 === t ? void 0 : t.url),
					id: e.id,
					prefixedName: e.displayText
				}
			}, ue = async e => {
				var t;
				const n = await Object(ie.b)(e(), {
					first: 10
				});
				if (n && (null === (t = null == n ? void 0 : n.rankings) || void 0 === t ? void 0 : t.length)) {
					const {
						rankings: e,
						subreddits: t
					} = n;
					return e.map(({
						id: e
					}) => le(t[e]))
				}
				return null
			}, me = async e => {
				const t = Object(re.b)();
				if (null == t ? void 0 : t.length) {
					const n = t.map(e => e.id),
						s = await Object(oe.e)(e(), n);
					if (s.ok) return Object.values(s.body).map(le)
				}
				return null
			}, be = e => ({
				id: e.id,
				topic: e.title,
				children: e.isRoot ? [] : null
			});
			var pe = e => (({
					edges: e
				}) => {
					return e.reduce((e, {
						node: t
					}) => {
						const n = t.topic.parents.map(e => e.nodeId),
							s = n.length <= 0,
							r = t.id,
							o = {
								id: r,
								isRoot: s,
								parents: n,
								title: t.topic.title
							};
						return s ? (e.topics.push(be(o)), e.dict[r] = e.topics.length - 1) : n.forEach(t => {
							var n;
							const s = e.dict[t];
							if ("number" == typeof s) {
								null === (n = e.topics[s].children) || void 0 === n || n.push(be(o))
							}
						}), e
					}, {
						topics: [],
						dict: {}
					}).topics
				})(e),
				ge = n("./src/redditGQL/operations/InterestTopics.json"),
				fe = n("./src/redditGQL/operations/UpdateTopicPreferences.json");
			const Oe = async e => {
				const t = await (e => {
					const t = {
						first: 500,
						maxChildren: 500,
						maxDepth: 2,
						schemeName: "topic_chaining_icons"
					};
					return Object(te.a)(e, {
						...ge,
						variables: t
					})
				})(e());
				if (!t.ok) return null;
				const n = t.body,
					s = null == n ? void 0 : n.data.interestTopics;
				return s ? pe(s) : null
			}, je = (e, t) => ((e, t) => Object(te.a)(e, {
				...fe,
				variables: t
			}))(e(), {
				input: {
					selectedOnboardingTopicIds: t
				}
			});
			var he = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				ye = n("./src/reddit/icons/svgs/svgIcons.tsx"),
				ke = n("./src/reddit/models/Toast/index.ts"),
				ve = n("./src/reddit/selectors/experiments/onboarding.ts");

			function Se() {
				return (Se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: xe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ie = () => Object(m.f)({
				kind: ke.b.Error,
				text: xe._("Something went wrong", null, {
					hk: "22u7ha"
				})
			}), _e = async (e, t, n) => {
				const s = {
					ok: !0,
					preSelectedCommunities: {},
					recommendedCommunities: []
				};
				try {
					s.recommendedCommunities = await (async (e, t) => {
						const n = [ue(t), me(e)],
							[s, r] = await Promise.all(n);
						return se()([...r || [], ...s || []], e => e.id)
					})(e, t), n || (s.preSelectedCommunities = s.recommendedCommunities.slice(0, 5).reduce((e, t) => (e[t.id] = !0, e), {}))
				} catch (r) {
					s.ok = !1
				}
				return s
			}, Ee = async (e, t, n, s) => {
				const r = Object.keys(n),
					o = Object.keys(s),
					i = [],
					c = {
						ok: !0,
						reload: !1
					};
				if (r.length && i.push(((e, t) => Object(ce.c)(e(), {
						subredditIds: t,
						subscribe: !0
					}))(e, r)), o.length && i.push(je(t, o)), i.length) try {
					(await Promise.all(i)).some(({
						ok: e
					}) => !e) ? c.ok = !1 : c.reload = !0
				} catch (a) {
					c.ok = !1
				}
				return c
			}, Ce = Object(a.a)(e => {
				const {
					gqlContext: t,
					apiContext: n
				} = e, s = Object(c.d)(), r = Object(v.a)(), a = Object(c.e)(ve.c), d = a === Y.ze.Enabled_noskip || a === Y.ze.Enabled_noskip_no_preselect, m = a === Y.ze.Enabled_noskip_no_preselect, [b, p] = Object(o.useState)(J.INTERESTS), [g, f] = Object(o.useState)([]), [j, h] = Object(o.useState)({}), [y, S] = Object(o.useState)(!1), [x, I] = Object(o.useState)([]), [_, E] = Object(o.useState)([]), [C, N] = Object(o.useState)({});
				Object(o.useEffect)(() => {
					!async function() {
						const e = await Oe(t);
						e && f(e)
					}()
				}, [t]), Object(o.useEffect)(() => {
					!async function() {
						const e = await _e(n, t, m),
							{
								ok: r,
								preSelectedCommunities: o,
								recommendedCommunities: i
							} = e;
						r ? (N(o), E(i)) : s(Ie())
					}()
				}, [n, s, t, m]);
				const T = Object(o.useCallback)(() => s(Object(u.g)($.a.ONBOARDING_MODAL_D2X)), [s]),
					P = Object(o.useCallback)((e = 3e3) => setTimeout(T, e), [T]),
					R = Object(o.useCallback)(() => {
						const e = Object.keys(j).filter(e => 0 === j[e].length || !j[e].find(e => j[e]));
						I([]), e.length && async function() {
							S(!0);
							const n = await de(t, e);
							S(!1), n && I(n)
						}()
					}, [t, j]),
					w = Object(o.useCallback)(async () => {
						r(Object(k.j)()), p(J.COMMUNITIES), R()
					}, [R, r]),
					L = Object(o.useCallback)(async () => {
						r(Object(k.e)()), p(J.CELEBRATION);
						const e = await Ee(n, t, C, j);
						e.ok ? e.reload && s(Object(l.frontpageReloaded)()) : s(Ie()), P()
					}, [n, P, s, t, C, j, r]),
					q = b === J.INTERESTS ? w : L,
					B = Object(o.useCallback)(() => {
						b === J.COMMUNITIES && p(J.INTERESTS)
					}, [b]),
					M = Object(o.useCallback)(() => {
						r(Object(k.i)()), T()
					}, [T, r]),
					F = b === J.COMMUNITIES,
					D = b === J.INTERESTS && !d,
					A = Object.keys(C).length,
					G = Object.keys(j).length,
					V = d && b === J.INTERESTS && G < 3 || b === J.COMMUNITIES && A < 1;
				return b === J.CELEBRATION ? i.a.createElement(O, null) : i.a.createElement("div", {
					className: z.a.container
				}, i.a.createElement("header", {
					className: z.a.header
				}, i.a.createElement("div", {
					className: z.a.headerBar
				}, i.a.createElement("div", null, F && i.a.createElement(ye.d, {
					className: z.a.backButton,
					onClick: B
				})), i.a.createElement(he.a, {
					className: z.a.snooIcon
				}), i.a.createElement("div", {
					className: z.a.skipContainer
				}, D && i.a.createElement("button", {
					className: z.a.skipButton,
					onClick: M
				}, xe._("Skip", null, {
					hk: "2S8Lme"
				})))), i.a.createElement("div", {
					className: z.a.title
				}, b === J.INTERESTS && xe._("What are you into?", null, {
					hk: "2hUwMd"
				}), b === J.COMMUNITIES && xe._("Join some communities", null, {
					hk: "1iB29u"
				})), b === J.INTERESTS && d && i.a.createElement("div", {
					className: z.a.subtitle
				}, xe._("Select three topics to continue", null, {
					hk: "oHYeb"
				}))), i.a.createElement(H, {
					activeStep: b,
					communitiesByTopic: x,
					interests: g,
					loadingCommunities: y,
					recommendedCommunities: _,
					selectedCommunities: C,
					selectedInterests: j,
					setSelectedCommunities: N,
					setSelectedInterests: h
				}), i.a.createElement("div", {
					className: z.a.continueButtonWrapper
				}, i.a.createElement("button", {
					className: z.a.continueButton,
					disabled: V,
					onClick: q
				}, xe._("Continue", null, {
					hk: "15wNPy"
				}))))
			});
			t.default = Object(ee.b)(e => i.a.createElement(Ce, Se({}, e, {
				className: Object(d.a)(e.className, z.a.modal),
				onOverlayClick: r.a,
				overlayClassName: z.a.overlay
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				c = n.n(i);
			const a = e => r.a.createElement("div", {
				className: Object(o.a)(c.a.placeholderWrapper, e.fullWidth && c.a.fullWidth, e.large && c.a.large)
			}, r.a.createElement("span", {
				className: c.a.subredditIconLoading
			}), r.a.createElement("span", {
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
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = n.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => r.a.createElement("div", {
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
			var s = n("./src/config.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
				o = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/endpoints/governance/requester.ts"),
				c = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				a = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function d(e, t) {
				return Object(i.a)(e, {
					endpoint: `${s.a.metaUrl}/communities/${t.subredditId}/me`,
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
					endpoint: `${s.a.metaUrl}/ps/me/braintree-client-tokens`,
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function u(e, t) {
				return Object(i.a)(e, {
					endpoint: `${s.a.metaUrl}/orders`,
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
				return Object(i.a)(Object(r.a)(e, [o.a]), {
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
					endpoint: `${s.a.metaUrl}/orders`,
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
			var s = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/redditGQL/operations/GetNearbySubreddits.json"),
				o = n("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts");
			const i = (e, t) => Object(s.a)(e, {
				...r,
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
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			n("./node_modules/lodash/isEmpty.js");
			var s = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const r = ({
					edges: e,
					pageInfo: t
				}) => {
					const n = {},
						r = [];
					for (const {
							node: o,
							...i
						} of e) {
						const e = Object(s.a)(o);
						n[e.id] = e, r.push(i)
					}
					return {
						pageInfo: t,
						rankings: r,
						subreddits: n
					}
				},
				o = ({
					edges: e
				}) => {
					const t = {},
						n = [];
					for (const {
							node: r,
							...o
						} of e) {
						const e = Object(s.a)(r);
						t[e.id] = {
							...e,
							bannerBackgroundImage: r && r.styles && r.styles.bannerBackgroundImage
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
						r = [];
					let o = 0;
					for (const {
							node: i
						} of e) {
						const e = Object(s.a)(i);
						n[e.id] = {
							...e,
							publicDescription: null == i ? void 0 : i.publicDescriptionText,
							bannerBackgroundImage: i && i.styles && i.styles.bannerBackgroundImage
						}, r.push({
							id: e.id,
							rank: o
						}), o += 1
					}
					return {
						rankings: r,
						subreddits: n,
						pageInfo: t
					}
				}
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/CommunityDefault/filled.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), r.a.createElement("path", {
				d: "M16.5,2.924,11.264,15.551H9.91L15.461,2.139h.074a9.721,9.721,0,1,0,.967.785ZM8.475,8.435a1.635,1.635,0,0,0-.233.868v4.2H6.629V6.2H8.174v.93h.041a2.927,2.927,0,0,1,1.008-.745,3.384,3.384,0,0,1,1.453-.294,3.244,3.244,0,0,1,.7.068,1.931,1.931,0,0,1,.458.151l-.656,1.558a2.174,2.174,0,0,0-1.067-.246,2.159,2.159,0,0,0-.981.215A1.59,1.59,0,0,0,8.475,8.435Z"
			}))
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				c = n.n(i);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const d = ({
				className: e,
				isSubreddit: t,
				...n
			}) => r.a.createElement("svg", a({
				className: Object(o.a)(c.a.dropdown, {
					[c.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n), r.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = d
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
				return f
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "d", (function() {
				return k
			}));
			var s = n("./src/lib/objectSelector/index.ts"),
				r = n("./src/reddit/featureFlags/index.ts"),
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
				m = Object(s.a)((e, t) => {
					const n = b(e, t);
					if (!n) return u;
					const s = Object(i.U)(e, {
						subredditName: n.name
					});
					return s && s.postIds && s.postIds.length ? s.postIds : u
				}),
				b = (e, t) => {
					const n = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return n ? Object(i.Q)(e, {
						subredditId: n
					}) : null
				},
				p = (e, t, n, s, r) => {
					const i = r.find(e => e <= t) || -1,
						c = r.find(e => e > t) || 1 / 0;
					return t !== c && t !== i && (!(i + n > t) && (!(t + n > c) && !((e, t, n) => {
						const s = n[t - 1],
							r = n[t],
							i = r && Object(o.H)(e, {
								postId: s
							}) || null,
							c = r && Object(o.H)(e, {
								postId: r
							}) || null;
						return i && i.isSponsored || c && c.isSponsored
					})(e, t, s)))
				},
				g = [3],
				f = Object(s.a)((e, {
					existingDUPositions: t,
					listingProps: n
				}) => {
					const s = t.slice().sort();
					let r = -1;
					const i = Object(o.A)(e, {
							listingKey: n.listingKey
						}),
						c = [];
					return g.forEach(t => {
						let n = r + t;
						if (!(n >= i.length)) {
							for (; n < i.length && !p(e, n, t, i, s);) n += 1;
							n < i.length && (c.push(n), r = n)
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
				y = e => e.focusedVerticals.lastLoadedEnv,
				k = e => {
					const t = Object(c.J)(e),
						n = r.d.geoSubredditRecommendationDULoggedIn(e),
						s = r.d.geoSubredditRecommendationDULoggedOut(e);
					return t && n || !t && s
				}
		},
		"./src/redditGQL/operations/Frontpage.json": function(e) {
			e.exports = JSON.parse('{"id":"8420e2d12cf9"}')
		},
		"./src/redditGQL/operations/GetNearbySubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"70094bc311f7"}')
		},
		"./src/redditGQL/operations/InterestTopics.json": function(e) {
			e.exports = JSON.parse('{"id":"c49069ffb9a9"}')
		},
		"./src/redditGQL/operations/InterestTopicsByIds.json": function(e) {
			e.exports = JSON.parse('{"id":"a4ae094d69e5"}')
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"da00c26e96b1"}')
		},
		"./src/redditGQL/operations/UpdateTopicPreferences.json": function(e) {
			e.exports = JSON.parse('{"id":"a48d141a1878"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OnboardingModal.7267f506b747f7df2f8b.js.map