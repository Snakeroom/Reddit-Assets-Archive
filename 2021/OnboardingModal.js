// https://www.redditstatic.com/desktop2x/OnboardingModal.f21bae6a9a34447c1394.js
// Retrieved at 10/28/2021, 4:20:05 PM by Reddit Dataminer v1.0.0
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
				return v
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "b", (function() {
				return I
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
				v = Object(r.a)(i.j),
				k = Object(r.a)(i.i),
				y = () => async (e, t, {
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
							if (_(t)) {
								if (S(t)) {
									e(j({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), b = !0
								} else if (x(t)) {
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
				}, _ = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, S = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations;
					return !(!n || 0 !== n.length)
				}, x = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations,
						s = t && t.type;
					return !!(n && !S(e) && s === d.GEO && n[0] && n[0].recommendedSubreddit && n[0].interactedSubreddit)
				}, I = () => async (e, t, n) => {
					var s, r;
					const i = t(),
						c = Object(m.g)(i);
					if (Object(m.f)(i) || null === c || "client" === c) {
						const n = null === (r = null === (s = Object(b.b)(t())) || void 0 === s ? void 0 : s.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
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
				v = n("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				k = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				y = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				_ = n("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				S = n("./src/reddit/selectors/platform.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				I = n("./src/redditGQL/operations/Frontpage.json");
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
					} = t, p = Object(x.T)(e) || Object(x.K)(e), g = Object(S.p)(e), f = {
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
							...I,
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
									else if (Object(O.m)(e)) a.subreddits[e.subreddit.id] || (a.subreddits[e.subreddit.id] = Object(y.a)(e.subreddit)), a.postFlair[e.subreddit.id] || (a.postFlair[e.subreddit.id] = Object(j.a)(e.subreddit));
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
								const e = Object(y.a)(p);
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
								account: t && Object(_.a)(t) || null,
								featuredLiveThread: c,
								announcements: s,
								preferences: t && t.preferences && Object(v.a)(t.preferences, t.interactions) || null,
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
			var T = n("./src/lib/pageTitle.ts"),
				N = n("./src/reddit/actions/login.ts"),
				P = n("./src/reddit/actions/meta.ts"),
				R = n("./src/reddit/actions/platform.ts"),
				A = n("./src/reddit/actions/toaster.ts"),
				w = n("./src/reddit/constants/page.ts"),
				L = n("./src/reddit/constants/parameters.ts"),
				B = n("./src/reddit/constants/postLayout.ts"),
				M = n("./src/reddit/contexts/PageLayer/index.tsx"),
				q = n("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				F = n("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				D = n("./src/reddit/models/Toast/index.ts"),
				V = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				G = n("./src/reddit/selectors/frontpage.ts"),
				U = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				W = n("./src/reddit/selectors/runTimeEnvVars.ts"),
				z = n("./src/lib/makeActionCreator/index.ts"),
				Z = n("./src/lib/makeListingKey/index.ts"),
				K = n("./src/reddit/actions/ads/index.ts"),
				Q = n("./src/reddit/helpers/chooseVariant/index.ts"),
				X = n("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				J = n("./src/reddit/actions/seo/linksModule.ts"),
				H = n("./src/reddit/selectors/seo/linksModule.ts"),
				Y = n("./src/reddit/actions/publicAccessNetwork/api.ts"),
				$ = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				ee = n("./src/reddit/helpers/filterListingResponse/index.ts"),
				te = n("./src/reddit/actions/frontpage/constants.ts");
			const ne = Object(z.a)(te.c),
				se = Object(z.a)(te.b),
				re = Object(z.a)(te.a),
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
					const m = null === (a = null === (c = Object(S.b)(d)) || void 0 === c ? void 0 : c.routeMatch) || void 0 === a ? void 0 : a.route.chunk,
						b = Object(x.K)(d),
						p = await Object(u.i)(() => C(o.gqlContext(), E(d, t), Object(x.T)(d), t.statsdPathsForExperiments), {
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
						})), n(A.g(g)), t.geoFilter && n(Object(P.k)(t.geoFilter)), n(Object(K.b)(X.a.FRONTPAGE))
					} else n(re({
						error: p.error,
						key: e,
						...p.body
					})), n(A.f({
						id: g,
						kind: D.b.Error,
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
						i = Object(G.a)(r),
						{
							sort: c = i
						} = e.params,
						a = Object(Z.a)(w.b, c, e.queryParams),
						l = r.listings.postOrder.ids[a],
						u = r.listings.postOrder.api.error[a],
						m = r.listings.postOrder.api.pending[a],
						b = L.z in e.queryParams && e.queryParams[L.z].toUpperCase() || "",
						p = b in d.ec && d.ec[b];
					if (m || l && !u && !t) return void(l && (n(R.l({
						title: T.d()
					})), r.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						n(Object(K.b)(X.a.FRONTPAGE))
					})));
					const g = Object(q.a)(r),
						f = Object(q.b)(g),
						O = [Object(q.c)(g)];
					await n(oe(a, {
						...o()(e.queryParams, L.l),
						...o()(e.queryParams, L.k),
						limit: f,
						sort: c,
						statsdPathsForExperiments: O,
						t: Object(F.a)(c, p)
					})), n(R.l({
						title: T.d()
					})), Object(Q.c)(r, {
						experimentEligibilitySelector: Q.a,
						experimentName: "redesign_aa"
					});
					const j = Object(V.a)(r, {});
					Object(V.e)(j) && n(Object(N.k)())
				}, ce = () => async (e, t) => {
					var n, s;
					const r = t();
					if (Object(H.a)(r)) return;
					const o = null === (s = null === (n = Object(S.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === s ? void 0 : s.route.chunk,
						i = Object(x.K)(r);
					return Object(u.i)(() => e(Object(J.d)()), {
						name: "frontpageLinksRequested",
						page: o,
						isLoggedIn: i
					})
				}, ae = (e, t) => async n => {
					await Promise.all([n(Object(c.b)()), n(ie(e, t)), n(ce()), n(Object(Y.c)($.R))])
				}, de = Object(z.a)(te.d), le = e => async (t, n) => {
					const s = n(),
						r = s.platform.currentPage.routeMatch.match;
					Object(U.o)(s) || Object(U.u)(s) || (e || t(de()), await t(ae(r, !0)))
				}, ue = Object(z.a)(te.g), me = Object(z.a)(te.f), be = Object(z.a)(te.e), pe = e => async (t, n, {
					gqlContext: s
				}) => {
					const r = n(),
						c = Object(G.a)(r),
						{
							sort: a = c
						} = e,
						l = r.platform.currentPage ? r.platform.currentPage.queryParams : {},
						u = Object(Z.a)(w.b, a, l),
						m = r.listings.postOrder.loadMore[u],
						b = l[L.z] ? l[L.z].toUpperCase() : "",
						p = b in d.ec && d.ec[b];
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
								n = Object(q.a)(r),
								c = B.a,
								d = [Object(q.c)(n)],
								b = {
									after: m.token,
									dist: m.dist,
									...o()(l, L.l),
									isMobile: Object(i.e)(r.meta.userAgent),
									limit: c,
									sort: a,
									t: Object(F.a)(a, p),
									layout: B.e[Object(M.Q)(r, {})],
									useMockData: e
								}; {
								const e = r.platform.lastPage,
									t = e && e.url;
								t && (b.clickUrl = t)
							}
							const g = () => C(s(), E(r, b), Object(x.T)(r), d),
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
						r = Object(G.a)(s),
						{
							sort: o = r
						} = e,
						i = s.platform.currentPage ? s.platform.currentPage.queryParams : {},
						c = Object(Z.a)(w.b, o, i),
						a = i[L.z] ? i[L.z].toUpperCase() : "",
						l = a in d.ec && d.ec[a],
						u = Object(q.a)(s),
						m = Object(q.b)(u);
					await t(oe(c, {
						limit: m,
						sort: o,
						t: Object(F.a)(o, l)
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
				b = n("./node_modules/fbt/lib/FbtPublic.js"),
				p = n("./src/lib/sentry/index.ts"),
				g = n("./src/reddit/actions/snoovatar.ts"),
				f = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				O = n("./src/reddit/hooks/useTracking.ts"),
				j = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/selectors/avatar.ts");
			var v = () => {
					const e = Object(c.e)(h.a),
						t = Object(c.d)(),
						n = Object(O.a)(),
						s = Object(c.e)(h.c);
					Object(o.useEffect)(() => {
						(null == e ? void 0 : e.csrf_token) || t(Object(g.c)())
					}, []);
					const r = Object(o.useCallback)(async () => {
							t(Object(g.d)())
						}, [t]),
						i = Object(o.useCallback)(async () => {
							if (n(Object(f.a)("save_and_continue")), e && s) try {
								return await t(Object(g.e)(s.accessoryIds, {}, {
									set_avatar_to_profile: !0,
									source: "web_onboarding"
								})), !0
							} catch (r) {
								p.c.captureException(r)
							}
							return t(Object(m.f)({
								kind: j.b.Error,
								text: b.fbt._("Unable to save avatar, please try again.", null, {
									hk: "17FzD3"
								})
							})), !1
						}, [s, e, t, n]);
					return {
						avatarImage: (null == s ? void 0 : s.image) || null,
						fetchRandomAvatar: r,
						saveAvatar: i
					}
				},
				k = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				y = n("./src/reddit/components/Onboarding/Celebration.m.less"),
				_ = n.n(y);
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
				})), i.a.createElement("div", null, i.a.createElement(k.a, {
					className: _.a.LoadingSpinner,
					sizePx: 16
				}))),
				I = n("./src/reddit/constants/avatars.ts"),
				E = n("./src/reddit/controls/Button/index.tsx"),
				C = n("./src/reddit/icons/fonts/index.tsx"),
				T = n("./src/reddit/components/Onboarding/AvatarPicker/AvatarPicker.m.less"),
				N = n.n(T);
			const {
				fbt: P
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var R = ({
					avatarImage: e,
					fetchRandomAvatar: t
				}) => {
					const n = Object(O.a)();
					Object(o.useEffect)(() => {
						n(Object(f.m)())
					}, [n]);
					const s = Object(o.useCallback)(() => {
							n(Object(f.a)("randomize")), t()
						}, [n, t]),
						{
							legalCopy: r,
							learnMoreText: c,
							url: a
						} = I.a;
					return i.a.createElement("div", {
						className: N.a.avatarPicker
					}, i.a.createElement("div", {
						className: N.a.dynamicSizeWrapper
					}, e ? i.a.createElement("img", {
						"data-testid": "preview-image",
						src: `data:image/png;base64,${encodeURIComponent(e)}`,
						className: N.a.previewImage
					}) : i.a.createElement(k.a, {
						className: N.a.loader
					}), i.a.createElement("div", {
						className: N.a.legalTextContainer
					}, r(), i.a.createElement("a", {
						href: a,
						className: N.a.learnMoreLink
					}, c()))), i.a.createElement(E.s, {
						className: N.a.randomizeButton,
						priority: E.b.Secondary,
						onClick: s,
						Icon: Object(C.b)("random"),
						iconClassName: N.a.icon
					}, P._("Randomize", null, {
						hk: "uwAa8"
					})))
				},
				A = n("./node_modules/lodash/times.js"),
				w = n.n(A),
				L = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				B = n("./src/reddit/helpers/trackers/onboarding.ts"),
				M = n("./src/reddit/icons/svgs/CommunityDefault/filled.tsx"),
				q = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				F = n("./src/reddit/icons/svgs/Positive/index.tsx"),
				D = n("./src/reddit/components/Onboarding/CommunityPicker.m.less"),
				V = n.n(D);
			const {
				fbt: G
			} = n("./node_modules/fbt/lib/FbtPublic.js"), U = () => G._("Recommended for you", null, {
				hk: "28LTkA"
			}), W = ({
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
					className: V.a.RecommendedHeader
				}, i.a.createElement("span", {
					className: V.a.SectionTitle
				}, e.topicTitle), i.a.createElement("button", {
					onClick: d,
					className: V.a.SelectAllLink
				}, c && G._("Deselect All", null, {
					hk: "4u0XYF"
				}), !c && null !== c && G._("Select All", null, {
					hk: "3izh21"
				}))), i.a.createElement(i.a.Fragment, null, i.a.createElement(Z, {
					communities: e.communities,
					communityId: e.topicId,
					selected: t,
					toggleSelection: s,
					topicTitle: e.topicTitle
				})))
			}, z = () => i.a.createElement(i.a.Fragment, null, w()(5, e => i.a.createElement(L.a, {
				key: e,
				fullWidth: !0,
				large: !0
			}))), Z = ({
				communities: e,
				communityId: t,
				selected: n,
				topicTitle: s,
				toggleSelection: r
			}) => {
				const c = Object(O.a)(),
					[a, d] = Object(o.useState)(!1),
					l = e.length > 4,
					u = e.slice(0, a ? void 0 : 4),
					m = "recommended" === t ? "" : s,
					b = Object(o.useCallback)(() => {
						d(!0), c(Object(B.f)(s))
					}, [c, s]);
				return i.a.createElement(i.a.Fragment, null, u.map(e => i.a.createElement(K, {
					communityId: e.id,
					description: e.description,
					icon: e.icon,
					isSelected: n[e.id],
					key: e.id,
					prefixedName: e.prefixedName,
					toggleSelection: r,
					topicTitle: s
				})), l && !a && i.a.createElement(Q, {
					text: m,
					showMore: b
				}))
			}, K = ({
				communityId: e,
				description: t,
				icon: n,
				isSelected: s,
				prefixedName: r,
				toggleSelection: c,
				topicTitle: a
			}) => {
				const l = Object(O.a)(),
					u = Object(o.useCallback)(() => {
						l(Object(B.d)(!s, a, r)), c(e)
					}, [e, s, r, l, c, a]);
				return i.a.createElement("div", {
					className: Object(d.a)(V.a.CommunityRow, {
						[V.a.Selected]: s
					}),
					onClick: u
				}, i.a.createElement("div", {
					className: V.a.IconSection
				}, n && i.a.createElement("img", {
					className: V.a.IconWrapper,
					src: n
				}), !n && i.a.createElement(M.a, {
					className: V.a.CommunityNoIcon
				})), i.a.createElement("div", {
					className: V.a.TextSection
				}, i.a.createElement("div", {
					className: V.a.Info
				}, r), i.a.createElement("div", {
					className: V.a.Description
				}, t)), i.a.createElement("div", {
					className: V.a.ButtonSection
				}, s && i.a.createElement(F.a, {
					className: V.a.SelectedIcon
				}), !s && i.a.createElement(q.a, {
					className: V.a.SelectIcon
				})))
			}, Q = ({
				showMore: e,
				text: t
			}) => i.a.createElement("div", {
				className: V.a.MoreRecommendations
			}, i.a.createElement("button", {
				onClick: e
			}, !t && G._("More recommendations", null, {
				hk: "3I8APZ"
			}), t && G._("More in {topic-title}", [G._param("topic-title", t)], {
				hk: "4afv7s"
			})));
			var X = ({
					communitiesByTopic: e,
					loadingCommunities: t,
					recommendedCommunities: n,
					selected: s,
					toggleSelection: r,
					toggleAll: c
				}) => {
					const a = Object(O.a)();
					return Object(o.useEffect)(() => {
						a(Object(B.g)())
					}, [a]), i.a.createElement("div", {
						className: V.a.CommunityListWrapper
					}, n.length > 0 && i.a.createElement(W, {
						community: {
							communities: n,
							topicId: "recommended",
							topicTitle: U()
						},
						selected: s,
						toggleAll: c,
						toggleSelection: r
					}), (!!e.length || t) && i.a.createElement(i.a.Fragment, null, t && i.a.createElement(z, null), e.map(e => i.a.createElement(W, {
						key: e.topicId,
						community: e,
						selected: s,
						toggleAll: c,
						toggleSelection: r
					}))))
				},
				J = n("./node_modules/polished/dist/polished.es.js"),
				H = n("./src/reddit/components/Onboarding/InterestPicker.m.less"),
				Y = n.n(H);
			const {
				fbt: $
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ee = ({
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
				}, i.a.createElement(te, {
					colorIndex: a && null != s ? s : r,
					interest: e,
					isSelected: c,
					isSubtopic: a,
					key: e.id,
					toggleSelection: n,
					topic: e.topic
				}), c && !!(null === (o = e.children) || void 0 === o ? void 0 : o.length) && i.a.createElement(ee, {
					interests: e.children,
					selected: t,
					toggleSelection: n,
					topicColor: r
				}))
			})), te = ({
				colorIndex: e,
				interest: t,
				isSelected: n,
				isSubtopic: s,
				toggleSelection: r,
				topic: c
			}) => {
				const a = Object(O.a)(),
					l = Object(o.useCallback)(() => {
						a(Object(B.h)(!n, !s, c)), r(t)
					}, [t, n, s, a, r, c]);
				return i.a.createElement(E.s, {
					className: Object(d.a)(Y.a.InterestButton, {
						[Y.a.Selected]: n
					}),
					kind: E.a.Button,
					onClick: l,
					style: ne(e, n, s)
				}, c)
			}, ne = (e, t, n) => {
				if (!t && !n) return {};
				let s = se(e);
				return n && !t && (s = Object(J.f)(s, .25)), {
					backgroundColor: s
				}
			}, se = e => re[e % 7], re = ["#c08d41", "#ffa800", "#ff4500", "#ff3881", "#b44ac0", "#6a5cff", "#3690ea"];
			var oe = ({
					interests: e,
					selected: t,
					toggleSelection: n
				}) => {
					const s = Object(O.a)();
					return Object(o.useEffect)(() => {
						s(Object(B.k)())
					}, [s]), i.a.createElement("div", {
						className: Y.a.InterestListButtons
					}, i.a.createElement(ee, {
						interests: e,
						selected: t,
						toggleSelection: n
					}))
				},
				ie = n("./src/reddit/components/Onboarding/index.m.less"),
				ce = n.n(ie);
			const {
				fbt: ae
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var de;
			! function(e) {
				e.INTERESTS = "interests", e.COMMUNITIES = "communities", e.CELEBRATION = "celebration", e.AVATAR = "avatar"
			}(de || (de = {}));
			const le = ({
				activeStep: e,
				avatarImage: t,
				communitiesByTopic: n,
				fetchRandomAvatar: s,
				interests: r,
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
					g = Object(o.useCallback)((e, t) => {
						const s = {
								...d
							},
							r = e => e.forEach(e => {
								t ? s[e.id] = !0 : delete s[e.id]
							});
						if ("recommended" === e) r(a);
						else {
							const t = n.find(t => t.topicId === e);
							t && r(t.communities)
						}
						u(s)
					}, [n, a, d, u]),
					f = Object(o.useCallback)(e => {
						const {
							children: t,
							id: n
						} = e, s = l[n], r = {
							...l
						};
						s ? (delete r[n], s.forEach(e => delete r[e])) : r[n] = [...(null == t ? void 0 : t.map(e => e.id)) || []], m(r)
					}, [l, m]);
				return i.a.createElement("div", {
					className: ce.a.SelectedComponent,
					ref: b
				}, e === de.INTERESTS && i.a.createElement(oe, {
					interests: r,
					selected: l,
					toggleSelection: f
				}), e === de.COMMUNITIES && i.a.createElement(X, {
					communitiesByTopic: n,
					loadingCommunities: c,
					recommendedCommunities: a,
					selected: d,
					toggleAll: g,
					toggleSelection: p
				}), e === de.AVATAR && i.a.createElement(R, {
					avatarImage: t,
					fetchRandomAvatar: s
				}))
			};
			var ue = n("./src/reddit/constants/experiments.ts"),
				me = n("./src/reddit/constants/modals.ts"),
				be = n("./src/reddit/contexts/ApiContext.tsx"),
				pe = n("./src/lib/makeGqlRequest/index.ts"),
				ge = n("./node_modules/lodash/uniqBy.js"),
				fe = n.n(ge),
				Oe = n("./src/reddit/customMiddleware/recentSubreddits.ts"),
				je = n("./src/reddit/endpoints/economics/specialMembership.ts"),
				he = n("./src/reddit/endpoints/subreddit/local.ts"),
				ve = n("./src/reddit/endpoints/subreddit/subscriptions.ts");
			var ke = n("./src/redditGQL/operations/InterestTopicsByIds.json");
			const ye = async (e, t) => {
				const n = await ((e, t) => {
					const n = {
						topicIds: [],
						schemeName: "topic_chaining_icons",
						maxSubreddits: 10,
						...t
					};
					return Object(pe.a)(e, {
						...ke,
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
				const n = await Object(he.b)(e(), {
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
				const t = Object(Oe.b)();
				if (null == t ? void 0 : t.length) {
					const n = t.map(e => e.id),
						s = await Object(je.e)(e(), n);
					if (s.ok) return Object.values(s.body).map(_e)
				}
				return null
			}, Ie = e => ({
				id: e.id,
				topic: e.title,
				children: e.isRoot ? [] : null
			});
			var Ee = e => (({
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
						return s ? (e.topics.push(Ie(o)), e.dict[r] = e.topics.length - 1) : n.forEach(t => {
							var n;
							const s = e.dict[t];
							if ("number" == typeof s) {
								null === (n = e.topics[s].children) || void 0 === n || n.push(Ie(o))
							}
						}), e
					}, {
						topics: [],
						dict: {}
					}).topics
				})(e),
				Ce = n("./src/redditGQL/operations/InterestTopics.json"),
				Te = n("./src/redditGQL/operations/UpdateTopicPreferences.json");
			const Ne = async e => {
				const t = await (e => {
					const t = {
						first: 500,
						maxChildren: 500,
						maxDepth: 2,
						schemeName: "topic_chaining_icons"
					};
					return Object(pe.a)(e, {
						...Ce,
						variables: t
					})
				})(e());
				if (!t.ok) return null;
				const n = t.body,
					s = null == n ? void 0 : n.data.interestTopics;
				return s ? Ee(s) : null
			}, Pe = (e, t) => ((e, t) => Object(pe.a)(e, {
				...Te,
				variables: t
			}))(e(), {
				input: {
					selectedOnboardingTopicIds: t
				}
			});
			var Re = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				Ae = n("./src/reddit/icons/svgs/svgIcons.tsx"),
				we = n("./src/reddit/selectors/experiments/econ/index.ts"),
				Le = n("./src/reddit/selectors/experiments/onboarding.ts");

			function Be() {
				return (Be = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: Me
			} = n("./node_modules/fbt/lib/FbtPublic.js"), qe = () => Object(m.f)({
				kind: j.b.Error,
				text: Me._("Something went wrong", null, {
					hk: "22u7ha"
				})
			}), Fe = async (e, t, n) => {
				const s = {
					ok: !0,
					preSelectedCommunities: {},
					recommendedCommunities: []
				};
				try {
					s.recommendedCommunities = await (async (e, t) => {
						const n = [Se(t), xe(e)],
							[s, r] = await Promise.all(n);
						return fe()([...r || [], ...s || []], e => e.id)
					})(e, t), n || (s.preSelectedCommunities = s.recommendedCommunities.slice(0, 5).reduce((e, t) => (e[t.id] = !0, e), {}))
				} catch (r) {
					s.ok = !1
				}
				return s
			}, De = async (e, t, n, s) => {
				const r = Object.keys(n),
					o = Object.keys(s),
					i = [],
					c = {
						ok: !0,
						reload: !1
					};
				if (r.length && i.push(((e, t) => Object(ve.c)(e(), {
						subredditIds: t,
						subscribe: !0
					}))(e, r)), o.length && i.push(Pe(t, o)), i.length) try {
					(await Promise.all(i)).some(({
						ok: e
					}) => !e) ? c.ok = !1 : c.reload = !0
				} catch (a) {
					c.ok = !1
				}
				return c
			}, Ve = Object(a.a)(e => {
				const {
					gqlContext: t,
					apiContext: n
				} = e, s = Object(c.d)(), r = Object(O.a)(), a = Object(c.e)(Le.c), m = a === ue.Be.Enabled_noskip || a === ue.Be.Enabled_noskip_no_preselect, b = a === ue.Be.Enabled_noskip_no_preselect, [p, g] = Object(o.useState)(de.INTERESTS), [j, h] = Object(o.useState)([]), [k, y] = Object(o.useState)({}), [_, S] = Object(o.useState)(!1), [I, E] = Object(o.useState)([]), [C, T] = Object(o.useState)([]), [N, P] = Object(o.useState)({}), {
					avatarImage: R,
					fetchRandomAvatar: A,
					saveAvatar: w
				} = v();
				Object(o.useEffect)(() => {
					!async function() {
						const e = await Ne(t);
						e && h(e)
					}()
				}, [t]), Object(o.useEffect)(() => {
					!async function() {
						const e = await Fe(n, t, b),
							{
								ok: r,
								preSelectedCommunities: o,
								recommendedCommunities: i
							} = e;
						r ? (P(o), T(i)) : s(qe())
					}()
				}, [n, s, t, b]);
				const L = Object(o.useCallback)(() => s(Object(u.g)(me.a.ONBOARDING_MODAL_D2X)), [s]),
					M = Object(o.useCallback)((e = 3e3) => setTimeout(L, e), [L]),
					q = Object(o.useCallback)(() => {
						const e = Object.keys(k).filter(e => 0 === k[e].length || !k[e].find(e => k[e]));
						E([]), e.length && async function() {
							S(!0);
							const n = await ye(t, e);
							S(!1), n && E(n)
						}()
					}, [t, k]),
					F = Object(o.useCallback)(async () => {
						r(Object(B.j)()), g(de.COMMUNITIES), q()
					}, [q, r]),
					D = Object(o.useCallback)(async () => {
						r(Object(B.e)()), A(), g(de.AVATAR);
						const e = await De(n, t, N, k);
						e.ok ? e.reload && s(Object(l.frontpageReloaded)()) : s(qe())
					}, [n, s, A, t, N, k, r]),
					V = Object(o.useCallback)(() => {
						g(de.CELEBRATION), M()
					}, [M]),
					G = Object(o.useCallback)(() => {
						w(), V()
					}, [w, V]),
					U = (() => p === de.INTERESTS ? F : p === de.COMMUNITIES ? D : G)(),
					W = Object(c.e)(e => p === de.AVATAR && Object(we.e)(e));
				Object(o.useEffect)(() => {
					p !== de.AVATAR || W || V()
				}, [W, p, V]);
				const z = Object(o.useCallback)(() => {
						p === de.COMMUNITIES ? g(de.INTERESTS) : p === de.AVATAR && g(de.COMMUNITIES)
					}, [p]),
					Z = Object(o.useCallback)(() => {
						p === de.INTERESTS ? (r(Object(B.i)()), L()) : p === de.AVATAR && (r(Object(f.a)("skip")), V())
					}, [L, r, p, V]),
					K = [de.COMMUNITIES, de.AVATAR].includes(p),
					Q = p === de.AVATAR || p === de.INTERESTS && !m,
					X = Object.keys(N).length,
					J = Object.keys(k).length,
					H = m && p === de.INTERESTS && J < 3 || p === de.COMMUNITIES && X < 1;
				return p === de.CELEBRATION || p === de.AVATAR && !W ? i.a.createElement(x, null) : i.a.createElement("div", {
					className: ce.a.container
				}, i.a.createElement("header", {
					className: ce.a.header
				}, i.a.createElement("div", {
					className: ce.a.headerBar
				}, i.a.createElement("div", null, K && i.a.createElement(Ae.d, {
					className: ce.a.backButton,
					onClick: z
				})), i.a.createElement(Re.a, {
					className: ce.a.snooIcon
				}), i.a.createElement("div", {
					className: ce.a.skipContainer
				}, Q && i.a.createElement("button", {
					className: ce.a.skipButton,
					onClick: Z
				}, Me._("Skip", null, {
					hk: "2S8Lme"
				})))), i.a.createElement("div", {
					className: ce.a.title
				}, p === de.INTERESTS && Me._("What are you into?", null, {
					hk: "2hUwMd"
				}), p === de.COMMUNITIES && Me._("Join some communities", null, {
					hk: "1iB29u"
				}), p === de.AVATAR && Me._("Style your avatar", null, {
					hk: "15i2ld"
				})), p === de.INTERESTS && m && i.a.createElement("div", {
					className: ce.a.subtitle
				}, Me._("Select three topics to continue", null, {
					hk: "oHYeb"
				})), p === de.AVATAR && i.a.createElement("div", {
					className: ce.a.subtitle
				}, Me._("This is how people will see you on Reddit.", null, {
					hk: "2SmAiC"
				}), i.a.createElement("br", null), Me._("(You can change it later if you’d like.)", null, {
					hk: "1x9ZNL"
				}))), i.a.createElement(le, {
					activeStep: p,
					avatarImage: R,
					communitiesByTopic: I,
					fetchRandomAvatar: A,
					interests: j,
					loadingCommunities: _,
					recommendedCommunities: C,
					selectedCommunities: N,
					selectedInterests: k,
					setSelectedCommunities: P,
					setSelectedInterests: y
				}), i.a.createElement("div", {
					className: Object(d.a)(ce.a.continueButtonWrapper, {
						[ce.a.avatarPicker]: p === de.AVATAR
					})
				}, i.a.createElement("button", {
					className: ce.a.continueButton,
					disabled: H,
					onClick: U
				}, Me._("Continue", null, {
					hk: "15wNPy"
				}))))
			});
			t.default = Object(be.b)(e => i.a.createElement(Ve, Be({}, e, {
				className: Object(d.a)(e.className, ce.a.modal),
				onOverlayClick: r.a,
				overlayClassName: ce.a.overlay
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
		"./src/reddit/constants/avatars.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const r = {
				legalCopy: () => s.fbt._("Avatars and avatar visual elements © Reddit and its licensors.", null, {
					hk: "ZgN7P"
				}),
				learnMoreText: () => s.fbt._("Learn more", null, {
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
				return v
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
				v = e => e.focusedVerticals.lastLoadedEnv,
				k = e => {
					const t = Object(c.J)(e),
						n = r.d.geoSubredditRecommendationDULoggedIn(e),
						s = r.d.geoSubredditRecommendationDULoggedOut(e);
					return t && n || !t && s
				}
		},
		"./src/redditGQL/operations/Frontpage.json": function(e) {
			e.exports = JSON.parse('{"id":"ddce520e0441"}')
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
			e.exports = JSON.parse('{"id":"5c3cbc62be22"}')
		},
		"./src/redditGQL/operations/UpdateTopicPreferences.json": function(e) {
			e.exports = JSON.parse('{"id":"a48d141a1878"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OnboardingModal.f21bae6a9a34447c1394.js.map