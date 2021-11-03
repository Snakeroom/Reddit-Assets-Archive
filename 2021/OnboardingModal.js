// https://www.redditstatic.com/desktop2x/OnboardingModal.f92bc11d0958c2c50311.js
// Retrieved at 11/3/2021, 2:10:04 PM by Reddit Dataminer v1.0.0
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
			const g = Object(s.a)(i.g),
				f = Object(s.a)(i.e),
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
				return ie
			})), n.d(t, "frontpageLoaded", (function() {
				return ce
			})), n.d(t, "frontpageFailed", (function() {
				return ae
			})), n.d(t, "frontpageDataRequested", (function() {
				return de
			})), n.d(t, "frontpageRequestedHelper", (function() {
				return le
			})), n.d(t, "frontpageRequested", (function() {
				return me
			})), n.d(t, "frontpageReloaded", (function() {
				return pe
			})), n.d(t, "morePostsPending", (function() {
				return ge
			})), n.d(t, "morePostsLoaded", (function() {
				return fe
			})), n.d(t, "morePostsFailed", (function() {
				return Oe
			})), n.d(t, "morePostsRequested", (function() {
				return je
			})), n.d(t, "refreshFeed", (function() {
				return he
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/pick.js"),
				o = n.n(s),
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
				I = n("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				_ = n("./src/reddit/selectors/platform.ts"),
				S = n("./src/reddit/selectors/user.ts"),
				x = n("./src/redditGQL/operations/Frontpage.json");
			const E = (e, t) => {
					var n, r;
					const {
						after: s,
						dist: o,
						isMobile: i,
						layout: c,
						limit: d,
						sort: l,
						t: u,
						correlationId: p
					} = t, g = Object(S.T)(e) || Object(S.K)(e), f = Object(_.p)(e), O = {
						adContext: {
							layout: c ? c.toUpperCase() : m.a.Card,
							reddaid: e.user.reddaid,
							distance: o
						},
						feedRankingContext: {
							servingId: p
						},
						forceGeopopular: !0,
						includeCommunityDUs: !1,
						includeFeaturedAnnouncements: !0,
						includeLiveEvents: !0,
						includeIdentity: g && !(null === (r = null === (n = e.user.account) || void 0 === n ? void 0 : n.karma) || void 0 === r ? void 0 : r.total),
						includePostRecommendations: !1,
						includeSubredditQuestions: g,
						recentPostIds: e.posts.recent
					};
					return l && (O.sort = l.toUpperCase()), u && (O.range = u.toUpperCase()), i ? O.pageSize = Object(b.a)(c) : d && (O.pageSize = d), f && f.ad && (O.forceAds = {
						ad: f.ad
					}), s && (O.after = Object(a.a)(s)), O
				},
				C = async (e, t, n, r) => {
					const s = Date.now(),
						o = await ((e, t) => Object(l.a)(e, {
							...x,
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
									const t = Object(h.e)(e);
									a.posts[t.id] = t;
									const {
										crosspostRoot: n
									} = e;
									n && n.type === O.a.Post && n.postInfo && d(n.postInfo);
									let r = t.id;
									if (Object(O.l)(e)) a.profiles[e.profile.id] || (a.profiles[e.profile.id] = Object(k.a)(e.profile));
									else if (Object(O.m)(e)) a.subreddits[e.subreddit.id] || (a.subreddits[e.subreddit.id] = Object(y.a)(e.subreddit)), a.postFlair[e.subreddit.id] || (a.postFlair[e.subreddit.id] = Object(j.a)(e.subreddit));
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
							for (const p of s) {
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
								duration: i - s,
								logKeyType: u.a.gqlFetchTiming
							}, {
								duration: t - e,
								logKeyType: u.a.gqlNormalizationTiming
							}];
						Object(u.h)({
							name: d.r.FRONTPAGE,
							isLoggedIn: n,
							metrics: a,
							statsdPathsForExperiments: r
						})
					} catch (a) {}
					return {
						...o,
						body: c
					}
				};
			var T = n("./src/lib/pageTitle.ts"),
				N = n("./src/reddit/actions/login.ts"),
				R = n("./src/reddit/actions/meta.ts"),
				P = n("./src/reddit/actions/platform.ts"),
				A = n("./src/reddit/actions/toaster.ts"),
				L = n("./src/reddit/constants/history.ts"),
				w = n("./src/reddit/constants/page.ts"),
				F = n("./src/reddit/constants/parameters.ts"),
				M = n("./src/reddit/constants/postLayout.ts"),
				q = n("./src/reddit/contexts/PageLayer/index.tsx"),
				B = n("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				V = n("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				D = n("./src/reddit/models/Toast/index.ts"),
				G = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				U = n("./src/reddit/selectors/frontpage.ts"),
				W = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				z = n("./src/reddit/selectors/runTimeEnvVars.ts"),
				Z = n("./src/lib/makeActionCreator/index.ts"),
				Q = n("./src/lib/makeListingKey/index.ts"),
				K = n("./src/reddit/actions/ads/index.ts"),
				X = n("./src/reddit/helpers/chooseVariant/index.ts"),
				J = n("./src/reddit/helpers/trackers/feed.ts"),
				H = n("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				Y = n("./src/reddit/actions/seo/linksModule.ts"),
				$ = n("./src/reddit/selectors/seo/linksModule.ts"),
				ee = n("./src/reddit/actions/publicAccessNetwork/api.ts"),
				te = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				ne = n("./src/reddit/helpers/filterListingResponse/index.ts"),
				re = n("./src/reddit/actions/frontpage/constants.ts"),
				se = n("./node_modules/uuid/v4.js"),
				oe = n.n(se);
			const ie = Object(Z.a)(re.c),
				ce = Object(Z.a)(re.b),
				ae = Object(Z.a)(re.a),
				de = (e, t) => async (n, s, o) => {
					var c, a, d, l;
					const m = s();
					if (m.listings.postOrder.api.pending[e]) return;
					const b = M.e[Object(q.Q)(m, {})];
					t.isMobile = Object(i.e)(m.meta.userAgent), t.recentPostIds = m.posts.recent, t.layout = b, t.useMockData = !!m.platform.currentPage && (!!m.platform.currentPage.queryParams.useMockData && Object(z.b)(m)), n(ie({
						key: e
					})); {
						const e = m.platform.currentPage,
							n = e && e.url;
						n && (t.clickUrl = n)
					}
					const p = oe()();
					t.correlationId = p;
					const g = null === (a = null === (c = Object(_.b)(m)) || void 0 === c ? void 0 : c.routeMatch) || void 0 === a ? void 0 : a.route.chunk,
						f = Object(S.K)(m),
						O = await Object(u.i)(() => C(o.gqlContext(), E(m, t), Object(S.T)(m), t.statsdPathsForExperiments), {
							name: "fetchFrontpageData",
							isLoggedIn: f,
							page: g
						});
					n(Object(P.n)(O.status));
					const j = `error-${e}`;
					if (O.ok) {
						const r = O.body;
						n(ce({
							key: e,
							meta: m.meta,
							correlationId: p,
							...r
						})), n(A.g(j)), r.geoFilter && n(Object(R.k)(r.geoFilter)), n(Object(K.b)(H.a.FRONTPAGE));
						const o = null === (l = null === (d = Object(_.b)(m)) || void 0 === d ? void 0 : d.locationState) || void 0 === l ? void 0 : l[L.b.FeedLoadReason];
						Object(J.b)(t.isRefresh ? L.a.UserRefresh : null != o ? o : L.a.InitialLoad)(s())
					} else {
						n(ae({
							error: O.error,
							key: e,
							...O.body
						})), n(A.f({
							id: j,
							kind: D.b.Error,
							text: r.fbt._("Sorry, we couldn't load posts for this page.", null, {
								hk: "36ypKx"
							}),
							buttonText: r.fbt._("Retry", null, {
								hk: "1XMjgA"
							}),
							buttonAction: de(e, t)
						}));
						const o = O.error;
						Object(J.a)(o ? `${O.status}:${o.type}` : "Failed to load post listing for frontpage")(s())
					}
				}, le = (e, t) => async (n, r) => {
					var s;
					const i = r(),
						c = Object(U.a)(i),
						{
							sort: a = c
						} = e.params,
						l = Object(Q.a)(w.b, a, e.queryParams),
						u = i.listings.postOrder.ids[l],
						m = i.listings.postOrder.api.error[l],
						b = i.listings.postOrder.api.pending[l],
						p = F.z in e.queryParams && e.queryParams[F.z].toUpperCase() || "",
						g = p in d.ec && d.ec[p];
					if (b || u && !m && !t) return void(u && (n(P.m({
						title: T.d()
					})), (null === (s = i.listings.postOrder.correlationIds) || void 0 === s ? void 0 : s[l]) && n(P.o({
						correlationId: i.listings.postOrder.correlationIds[l]
					})), i.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						n(Object(K.b)(H.a.FRONTPAGE))
					})));
					const f = Object(B.a)(i),
						O = Object(B.b)(f),
						j = [Object(B.c)(f)];
					await n(de(l, {
						...o()(e.queryParams, F.l),
						...o()(e.queryParams, F.k),
						limit: O,
						sort: a,
						statsdPathsForExperiments: j,
						t: Object(V.a)(a, g)
					})), n(P.m({
						title: T.d()
					})), Object(X.c)(i, {
						experimentEligibilitySelector: X.a,
						experimentName: "redesign_aa"
					});
					const h = Object(G.a)(i, {});
					Object(G.e)(h) && n(Object(N.k)())
				}, ue = () => async (e, t) => {
					var n, r;
					const s = t();
					if (Object($.a)(s)) return;
					const o = null === (r = null === (n = Object(_.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
						i = Object(S.K)(s);
					return Object(u.i)(() => e(Object(Y.d)()), {
						name: "frontpageLinksRequested",
						page: o,
						isLoggedIn: i
					})
				}, me = (e, t) => async n => {
					await Promise.all([n(Object(c.b)()), n(le(e, t)), n(ue()), n(Object(ee.c)(te.R))])
				}, be = Object(Z.a)(re.d), pe = e => async (t, n) => {
					const r = n(),
						s = r.platform.currentPage.routeMatch.match;
					Object(W.o)(r) || Object(W.u)(r) || (e || t(be()), await t(me(s, !0)))
				}, ge = Object(Z.a)(re.g), fe = Object(Z.a)(re.f), Oe = Object(Z.a)(re.e), je = e => async (t, n, {
					gqlContext: r
				}) => {
					const s = n(),
						c = Object(U.a)(s),
						{
							sort: a = c
						} = e,
						l = s.platform.currentPage ? s.platform.currentPage.queryParams : {},
						u = Object(Q.a)(w.b, a, l),
						m = s.listings.postOrder.loadMore[u],
						b = l[F.z] ? l[F.z].toUpperCase() : "",
						p = b in d.ec && d.ec[b];
					if (m) {
						const e = s.listings.postOrder.api.pending[u],
							c = s.listings.postOrder.fetchedTokens,
							d = !(!c[u] || !c[u][m.token]);
						if (!e && !d) {
							t(ge({
								key: u,
								fetchedToken: m.token
							}));
							const e = !!s.platform.currentPage && !!s.platform.currentPage.queryParams.useMockData,
								c = Object(B.a)(s),
								d = M.a,
								b = [Object(B.c)(c)],
								g = {
									after: m.token,
									dist: m.dist,
									...o()(l, F.l),
									isMobile: Object(i.e)(s.meta.userAgent),
									limit: d,
									sort: a,
									t: Object(V.a)(a, p),
									layout: M.e[Object(q.Q)(s, {})],
									useMockData: e
								}; {
								const e = s.platform.lastPage,
									t = e && e.url;
								t && (g.clickUrl = t)
							}
							g.correlationId = s.listings.postOrder.correlationIds[u];
							const f = () => C(r(), E(s, g), Object(S.T)(s), b),
								O = await f(),
								j = {
									...O.body,
									...Object(ne.a)(s, u, O.body)
								};
							if (O.ok) t(fe({
								key: u,
								fetchedToken: m.token,
								meta: s.meta,
								...j
							})), Object(J.b)(L.a.NextPageLoad)(n());
							else {
								t(Oe({
									key: u,
									error: O.error,
									fetchedToken: m.token,
									...j
								}));
								const e = O.error;
								Object(J.a)(e ? `${O.status}:${e.type}` : "More posts for frontpage failed")(n())
							}
						}
					}
				}, he = e => async (t, n) => {
					const r = n(),
						s = Object(U.a)(r),
						{
							sort: o = s
						} = e,
						i = r.platform.currentPage ? r.platform.currentPage.queryParams : {},
						c = Object(Q.a)(w.b, o, i),
						a = i[F.z] ? i[F.z].toUpperCase() : "",
						l = a in d.ec && d.ec[a],
						u = Object(B.a)(r),
						m = Object(B.b)(u);
					await t(de(c, {
						limit: m,
						sort: o,
						t: Object(V.a)(o, l),
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
						r = Object(c.e)(h.c);
					Object(o.useEffect)(() => {
						(null == e ? void 0 : e.csrf_token) || t(Object(g.c)())
					}, []);
					const s = Object(o.useCallback)(async () => {
							t(Object(g.d)())
						}, [t]),
						i = Object(o.useCallback)(async () => {
							if (n(Object(f.a)("save_and_continue")), e && r) try {
								return await t(Object(g.e)(r.accessoryIds, {}, {
									set_avatar_to_profile: !0,
									source: "web_onboarding"
								})), !0
							} catch (s) {
								p.c.captureException(s)
							}
							return t(Object(m.f)({
								kind: j.b.Error,
								text: b.fbt._("Unable to save avatar, please try again.", null, {
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
				k = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				y = n("./src/reddit/components/Onboarding/Celebration.m.less"),
				I = n.n(y);
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var S = () => i.a.createElement("div", {
					className: I.a.CelebrationBg
				}, i.a.createElement("div", {
					className: I.a.CelebrationTitle
				}, _._("We're happy you're here!", null, {
					hk: "1YMdHn"
				})), i.a.createElement("div", {
					className: I.a.CelebrationSubTitle
				}, _._("Your home feed is being created now…", null, {
					hk: "Onr1V"
				})), i.a.createElement("div", null, i.a.createElement(k.a, {
					className: I.a.LoadingSpinner,
					sizePx: 16
				}))),
				x = n("./src/reddit/constants/avatars.ts"),
				E = n("./src/reddit/controls/Button/index.tsx"),
				C = n("./src/reddit/icons/fonts/index.tsx"),
				T = n("./src/reddit/components/Onboarding/AvatarPicker/AvatarPicker.m.less"),
				N = n.n(T);
			const {
				fbt: R
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var P = ({
					avatarImage: e,
					fetchRandomAvatar: t
				}) => {
					const n = Object(O.a)();
					Object(o.useEffect)(() => {
						n(Object(f.m)())
					}, [n]);
					const r = Object(o.useCallback)(() => {
							n(Object(f.a)("randomize")), t()
						}, [n, t]),
						{
							legalCopy: s,
							learnMoreText: c,
							url: a
						} = x.a;
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
					}, s(), i.a.createElement("a", {
						href: a,
						className: N.a.learnMoreLink
					}, c()))), i.a.createElement(E.s, {
						className: N.a.randomizeButton,
						priority: E.b.Secondary,
						onClick: r,
						Icon: Object(C.b)("random"),
						iconClassName: N.a.icon
					}, R._("Randomize", null, {
						hk: "uwAa8"
					})))
				},
				A = n("./node_modules/lodash/times.js"),
				L = n.n(A),
				w = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				F = n("./src/reddit/helpers/trackers/onboarding.ts"),
				M = n("./src/reddit/icons/svgs/CommunityDefault/filled.tsx"),
				q = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				B = n("./src/reddit/icons/svgs/Positive/index.tsx"),
				V = n("./src/reddit/components/Onboarding/CommunityPicker.m.less"),
				D = n.n(V);
			const {
				fbt: G
			} = n("./node_modules/fbt/lib/FbtPublic.js"), U = () => G._("Recommended for you", null, {
				hk: "28LTkA"
			}), W = ({
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
					className: D.a.RecommendedHeader
				}, i.a.createElement("span", {
					className: D.a.SectionTitle
				}, e.topicTitle), i.a.createElement("button", {
					onClick: d,
					className: D.a.SelectAllLink
				}, c && G._("Deselect All", null, {
					hk: "4u0XYF"
				}), !c && null !== c && G._("Select All", null, {
					hk: "3izh21"
				}))), i.a.createElement(i.a.Fragment, null, i.a.createElement(Z, {
					communities: e.communities,
					communityId: e.topicId,
					selected: t,
					toggleSelection: r,
					topicTitle: e.topicTitle
				})))
			}, z = () => i.a.createElement(i.a.Fragment, null, L()(5, e => i.a.createElement(w.a, {
				key: e,
				fullWidth: !0,
				large: !0
			}))), Z = ({
				communities: e,
				communityId: t,
				selected: n,
				topicTitle: r,
				toggleSelection: s
			}) => {
				const c = Object(O.a)(),
					[a, d] = Object(o.useState)(!1),
					l = e.length > 4,
					u = e.slice(0, a ? void 0 : 4),
					m = "recommended" === t ? "" : r,
					b = Object(o.useCallback)(() => {
						d(!0), c(Object(F.f)(r))
					}, [c, r]);
				return i.a.createElement(i.a.Fragment, null, u.map(e => i.a.createElement(Q, {
					communityId: e.id,
					description: e.description,
					icon: e.icon,
					isSelected: n[e.id],
					key: e.id,
					prefixedName: e.prefixedName,
					toggleSelection: s,
					topicTitle: r
				})), l && !a && i.a.createElement(K, {
					text: m,
					showMore: b
				}))
			}, Q = ({
				communityId: e,
				description: t,
				icon: n,
				isSelected: r,
				prefixedName: s,
				toggleSelection: c,
				topicTitle: a
			}) => {
				const l = Object(O.a)(),
					u = Object(o.useCallback)(() => {
						l(Object(F.d)(!r, a, s)), c(e)
					}, [e, r, s, l, c, a]);
				return i.a.createElement("div", {
					className: Object(d.a)(D.a.CommunityRow, {
						[D.a.Selected]: r
					}),
					onClick: u
				}, i.a.createElement("div", {
					className: D.a.IconSection
				}, n && i.a.createElement("img", {
					className: D.a.IconWrapper,
					src: n
				}), !n && i.a.createElement(M.a, {
					className: D.a.CommunityNoIcon
				})), i.a.createElement("div", {
					className: D.a.TextSection
				}, i.a.createElement("div", {
					className: D.a.Info
				}, s), i.a.createElement("div", {
					className: D.a.Description
				}, t)), i.a.createElement("div", {
					className: D.a.ButtonSection
				}, r && i.a.createElement(B.a, {
					className: D.a.SelectedIcon
				}), !r && i.a.createElement(q.a, {
					className: D.a.SelectIcon
				})))
			}, K = ({
				showMore: e,
				text: t
			}) => i.a.createElement("div", {
				className: D.a.MoreRecommendations
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
					selected: r,
					toggleSelection: s,
					toggleAll: c
				}) => {
					const a = Object(O.a)();
					return Object(o.useEffect)(() => {
						a(Object(F.g)())
					}, [a]), i.a.createElement("div", {
						className: D.a.CommunityListWrapper
					}, n.length > 0 && i.a.createElement(W, {
						community: {
							communities: n,
							topicId: "recommended",
							topicTitle: U()
						},
						selected: r,
						toggleAll: c,
						toggleSelection: s
					}), (!!e.length || t) && i.a.createElement(i.a.Fragment, null, t && i.a.createElement(z, null), e.map(e => i.a.createElement(W, {
						key: e.topicId,
						community: e,
						selected: r,
						toggleAll: c,
						toggleSelection: s
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
				topicColor: r = null
			}) => i.a.createElement(i.a.Fragment, null, e.map((e, s) => {
				var o;
				const c = !!t[e.id],
					a = null !== r;
				return i.a.createElement(i.a.Fragment, {
					key: e.id
				}, i.a.createElement(te, {
					colorIndex: a && null != r ? r : s,
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
					topicColor: s
				}))
			})), te = ({
				colorIndex: e,
				interest: t,
				isSelected: n,
				isSubtopic: r,
				toggleSelection: s,
				topic: c
			}) => {
				const a = Object(O.a)(),
					l = Object(o.useCallback)(() => {
						a(Object(F.h)(!n, !r, c)), s(t)
					}, [t, n, r, a, s, c]);
				return i.a.createElement(E.s, {
					className: Object(d.a)(Y.a.InterestButton, {
						[Y.a.Selected]: n
					}),
					kind: E.a.Button,
					onClick: l,
					style: ne(e, n, r)
				}, c)
			}, ne = (e, t, n) => {
				if (!t && !n) return {};
				let r = re(e);
				return n && !t && (r = Object(J.f)(r, .25)), {
					backgroundColor: r
				}
			}, re = e => se[e % 7], se = ["#c08d41", "#ffa800", "#ff4500", "#ff3881", "#b44ac0", "#6a5cff", "#3690ea"];
			var oe = ({
					interests: e,
					selected: t,
					toggleSelection: n
				}) => {
					const r = Object(O.a)();
					return Object(o.useEffect)(() => {
						r(Object(F.k)())
					}, [r]), i.a.createElement("div", {
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
					g = Object(o.useCallback)((e, t) => {
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
					f = Object(o.useCallback)(e => {
						const {
							children: t,
							id: n
						} = e, r = l[n], s = {
							...l
						};
						r ? (delete s[n], r.forEach(e => delete s[e])) : s[n] = [...(null == t ? void 0 : t.map(e => e.id)) || []], m(s)
					}, [l, m]);
				return i.a.createElement("div", {
					className: ce.a.SelectedComponent,
					ref: b
				}, e === de.INTERESTS && i.a.createElement(oe, {
					interests: s,
					selected: l,
					toggleSelection: f
				}), e === de.COMMUNITIES && i.a.createElement(X, {
					communitiesByTopic: n,
					loadingCommunities: c,
					recommendedCommunities: a,
					selected: d,
					toggleAll: g,
					toggleSelection: p
				}), e === de.AVATAR && i.a.createElement(P, {
					avatarImage: t,
					fetchRandomAvatar: r
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
			}, Ie = e => {
				var t;
				return {
					description: e.publicDescription,
					icon: e.communityIcon || (null === (t = e.icon) || void 0 === t ? void 0 : t.url),
					id: e.id,
					prefixedName: e.displayText
				}
			}, _e = async e => {
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
					}) => Ie(t[e]))
				}
				return null
			}, Se = async e => {
				const t = Object(Oe.b)();
				if (null == t ? void 0 : t.length) {
					const n = t.map(e => e.id),
						r = await Object(je.e)(e(), n);
					if (r.ok) return Object.values(r.body).map(Ie)
				}
				return null
			}, xe = e => ({
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
							r = n.length <= 0,
							s = t.id,
							o = {
								id: s,
								isRoot: r,
								parents: n,
								title: t.topic.title
							};
						return r ? (e.topics.push(xe(o)), e.dict[s] = e.topics.length - 1) : n.forEach(t => {
							var n;
							const r = e.dict[t];
							if ("number" == typeof r) {
								null === (n = e.topics[r].children) || void 0 === n || n.push(xe(o))
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
					r = null == n ? void 0 : n.data.interestTopics;
				return r ? Ee(r) : null
			}, Re = (e, t) => ((e, t) => Object(pe.a)(e, {
				...Te,
				variables: t
			}))(e(), {
				input: {
					selectedOnboardingTopicIds: t
				}
			});
			var Pe = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				Ae = n("./src/reddit/icons/svgs/svgIcons.tsx"),
				Le = n("./src/reddit/selectors/experiments/econ/index.ts"),
				we = n("./src/reddit/selectors/experiments/onboarding.ts");

			function Fe() {
				return (Fe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
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
			}), Be = async (e, t, n) => {
				const r = {
					ok: !0,
					preSelectedCommunities: {},
					recommendedCommunities: []
				};
				try {
					r.recommendedCommunities = await (async (e, t) => {
						const n = [_e(t), Se(e)],
							[r, s] = await Promise.all(n);
						return fe()([...s || [], ...r || []], e => e.id)
					})(e, t), n || (r.preSelectedCommunities = r.recommendedCommunities.slice(0, 5).reduce((e, t) => (e[t.id] = !0, e), {}))
				} catch (s) {
					r.ok = !1
				}
				return r
			}, Ve = async (e, t, n, r) => {
				const s = Object.keys(n),
					o = Object.keys(r),
					i = [],
					c = {
						ok: !0,
						reload: !1
					};
				if (s.length && i.push(((e, t) => Object(ve.c)(e(), {
						subredditIds: t,
						subscribe: !0
					}))(e, s)), o.length && i.push(Re(t, o)), i.length) try {
					(await Promise.all(i)).some(({
						ok: e
					}) => !e) ? c.ok = !1 : c.reload = !0
				} catch (a) {
					c.ok = !1
				}
				return c
			}, De = Object(a.a)(e => {
				const {
					gqlContext: t,
					apiContext: n
				} = e, r = Object(c.d)(), s = Object(O.a)(), a = Object(c.e)(we.c), m = a === ue.He.Enabled_noskip || a === ue.He.Enabled_noskip_no_preselect, b = a === ue.He.Enabled_noskip_no_preselect, [p, g] = Object(o.useState)(de.INTERESTS), [j, h] = Object(o.useState)([]), [k, y] = Object(o.useState)({}), [I, _] = Object(o.useState)(!1), [x, E] = Object(o.useState)([]), [C, T] = Object(o.useState)([]), [N, R] = Object(o.useState)({}), {
					avatarImage: P,
					fetchRandomAvatar: A,
					saveAvatar: L
				} = v();
				Object(o.useEffect)(() => {
					!async function() {
						const e = await Ne(t);
						e && h(e)
					}()
				}, [t]), Object(o.useEffect)(() => {
					!async function() {
						const e = await Be(n, t, b),
							{
								ok: s,
								preSelectedCommunities: o,
								recommendedCommunities: i
							} = e;
						s ? (R(o), T(i)) : r(qe())
					}()
				}, [n, r, t, b]);
				const w = Object(o.useCallback)(() => r(Object(u.g)(me.a.ONBOARDING_MODAL_D2X)), [r]),
					M = Object(o.useCallback)((e = 3e3) => setTimeout(w, e), [w]),
					q = Object(o.useCallback)(() => {
						const e = Object.keys(k).filter(e => 0 === k[e].length || !k[e].find(e => k[e]));
						E([]), e.length && async function() {
							_(!0);
							const n = await ye(t, e);
							_(!1), n && E(n)
						}()
					}, [t, k]),
					B = Object(o.useCallback)(async () => {
						s(Object(F.j)()), g(de.COMMUNITIES), q()
					}, [q, s]),
					V = Object(o.useCallback)(async () => {
						s(Object(F.e)()), A(), g(de.AVATAR);
						const e = await Ve(n, t, N, k);
						e.ok ? e.reload && r(Object(l.frontpageReloaded)()) : r(qe())
					}, [n, r, A, t, N, k, s]),
					D = Object(o.useCallback)(() => {
						g(de.CELEBRATION), M()
					}, [M]),
					G = Object(o.useCallback)(() => {
						L(), D()
					}, [L, D]),
					U = (() => p === de.INTERESTS ? B : p === de.COMMUNITIES ? V : G)(),
					W = Object(c.e)(e => p === de.AVATAR && Object(Le.e)(e));
				Object(o.useEffect)(() => {
					p !== de.AVATAR || W || D()
				}, [W, p, D]);
				const z = Object(o.useCallback)(() => {
						p === de.COMMUNITIES ? g(de.INTERESTS) : p === de.AVATAR && g(de.COMMUNITIES)
					}, [p]),
					Z = Object(o.useCallback)(() => {
						p === de.INTERESTS ? (s(Object(F.i)()), w()) : p === de.AVATAR && (s(Object(f.a)("skip")), D())
					}, [w, s, p, D]),
					Q = [de.COMMUNITIES, de.AVATAR].includes(p),
					K = p === de.AVATAR || p === de.INTERESTS && !m,
					X = Object.keys(N).length,
					J = Object.keys(k).length,
					H = m && p === de.INTERESTS && J < 3 || p === de.COMMUNITIES && X < 1;
				return p === de.CELEBRATION || p === de.AVATAR && !W ? i.a.createElement(S, null) : i.a.createElement("div", {
					className: ce.a.container
				}, i.a.createElement("header", {
					className: ce.a.header
				}, i.a.createElement("div", {
					className: ce.a.headerBar
				}, i.a.createElement("div", null, Q && i.a.createElement(Ae.d, {
					className: ce.a.backButton,
					onClick: z
				})), i.a.createElement(Pe.a, {
					className: ce.a.snooIcon
				}), i.a.createElement("div", {
					className: ce.a.skipContainer
				}, K && i.a.createElement("button", {
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
					avatarImage: P,
					communitiesByTopic: x,
					fetchRandomAvatar: A,
					interests: j,
					loadingCommunities: I,
					recommendedCommunities: C,
					selectedCommunities: N,
					selectedInterests: k,
					setSelectedCommunities: R,
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
			t.default = Object(be.b)(e => i.a.createElement(De, Fe({}, e, {
				className: Object(d.a)(e.className, ce.a.modal),
				onOverlayClick: s.a,
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
				g = [3],
				f = Object(r.a)((e, {
					existingDUPositions: t,
					listingProps: n
				}) => {
					const r = t.slice().sort();
					let s = -1;
					const i = Object(o.A)(e, {
							listingKey: n.listingKey
						}),
						c = [];
					return g.forEach(t => {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OnboardingModal.f92bc11d0958c2c50311.js.map