// https://www.redditstatic.com/desktop2x/OnboardingModal.34e9a81f7e261d5418f9.js
// Retrieved at 4/20/2022, 3:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OnboardingModal"], {
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var n = Math.ceil,
				r = Math.max;
			e.exports = function(e, t, s, o) {
				for (var a = -1, i = r(n((t - e) / (s || 1)), 0), c = Array(i); i--;) c[o ? i : ++a] = e, e += s;
				return c
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseRange.js"),
				s = n("./node_modules/lodash/_isIterateeCall.js"),
				o = n("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, n, a) {
					return a && "number" != typeof a && s(t, n, a) && (n = a = void 0), t = o(t), void 0 === n ? (n = t, t = 0) : n = o(n), a = void 0 === a ? t < n ? 1 : -1 : o(a), r(t, n, a, e)
				}
			}
		},
		"./node_modules/lodash/range.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_createRange.js")();
			e.exports = r
		},
		"./node_modules/lodash/times.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseTimes.js"),
				s = n("./node_modules/lodash/_castFunction.js"),
				o = n("./node_modules/lodash/toInteger.js"),
				a = 9007199254740991,
				i = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = o(e)) < 1 || e > a) return [];
				var n = i,
					d = c(e, i);
				t = s(t), e -= i;
				for (var l = r(d, t); ++n < e;) t(n);
				return l
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var r = n("./node_modules/lodash/toString.js"),
				s = 0;
			e.exports = function(e) {
				var t = ++s;
				return r(e) + t
			}
		},
		"./node_modules/react-uid/dist/es2015/hooks.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			}));
			var r = n("./node_modules/react/index.js"),
				s = function() {
					var e = 1,
						t = new WeakMap,
						n = function(r, s) {
							return "number" == typeof r || "string" == typeof r ? s ? "idx-" + s : "val-" + r : t.has(r) ? "uid" + t.get(r) : (t.set(r, e++), n(r))
						};
					return n
				},
				o = (s(), function(e) {
					return void 0 === e && (e = ""), {
						value: 1,
						prefix: e,
						uid: s()
					}
				}),
				a = o(),
				i = r.createContext(o()),
				c = function() {
					return r.useState((e = r.useContext(i), {
						uid: n = function(e) {
							return e ? e.prefix : ""
						}(t = e || a) + function(e) {
							return e.value++
						}(t),
						gen: function(e) {
							return n + t.uid(e)
						}
					}));
					var e, t, n
				},
				d = function() {
					return c()[0].uid
				},
				l = function() {
					return c()[0].gen
				}
		},
		"./src/reddit/actions/accountGender/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return p
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/GetAccountGender.json"),
				c = n("./src/redditGQL/operations/UpdateAccountGender.json");
			var d = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/reddit/actions/accountGender/constants.ts");
			const u = () => async (e, t, n) => {
				let {
					gqlContext: r
				} = n;
				var s, o;
				const c = await (e => Object(a.a)(e, {
					...i
				}))(r());
				if (!c.ok) return;
				const d = c.body,
					l = (e => {
						let {
							accountDefinedGender: t,
							accountGenderCategory: n
						} = e;
						return {
							definedGender: t,
							genderCategory: n
						}
					})(null === (o = null === (s = null == d ? void 0 : d.data) || void 0 === s ? void 0 : s.piiIdentity) || void 0 === o ? void 0 : o.gender);
				l && e(m(l))
			}, m = Object(s.a)(l.a), p = e => async (t, n, s) => {
				let {
					gqlContext: i
				} = s;
				const l = {
					customGender: e.definedGender,
					genderEnum: e.genderCategory
				};
				(await ((e, t) => Object(a.a)(e, {
					...c,
					variables: t
				}))(i(), {
					input: l
				})).ok ? (t(b(e)), t(Object(o.f)({
					kind: d.b.SuccessCommunity,
					text: r.fbt._("Changes saved", null, {
						hk: "2isjrZ"
					})
				}))) : (t(f()), t(Object(o.f)({
					kind: d.b.Error,
					text: r.fbt._("Changes failed to save", null, {
						hk: "XrtIq"
					})
				})))
			}, b = Object(s.a)(l.b), f = Object(s.a)(l.c)
		},
		"./src/reddit/actions/economics/marketplace/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			const r = "ECON__MARKETPLACE_ITEM_CLAIMED",
				s = "ECON__MARKETPLACE_ITEMS_OUT_OF_STOCK"
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "b", (function() {
				return y
			}));
			var r, s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/performanceTimings/index.tsx"),
				a = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(r || (r = {}));
			var d, l = n("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(d || (d = {}));
			var m = n("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				p = n("./src/reddit/selectors/platform.ts"),
				b = n("./src/reddit/selectors/user.ts");
			const f = Object(s.a)(a.g),
				h = Object(s.a)(a.e),
				g = Object(s.a)(a.h),
				x = Object(s.a)(a.c),
				v = Object(s.a)(a.f),
				O = Object(s.a)(a.j),
				E = Object(s.a)(a.i),
				C = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const o = t(),
						a = Object(m.e)(o),
						d = Object(m.d)(o),
						p = Object(b.Q)(o);
					if (a || !d) return;
					e(g());
					let v = !1;
					try {
						const t = p ? r.LoggedInGeo : r.LoggedOutGeo,
							n = await ((e, t, n) => Object(i.a)(e, {
								...c,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(s(), t);
						if (n.ok && n.body) {
							const {
								data: t
							} = n.body;
							if (j(t)) {
								if (_(t)) {
									e(x({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), v = !0
								} else if (k(t)) {
									const n = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: r,
											interactedSubreddit: s,
											category: o
										} = n.focusRecommendations[0],
										a = [r, s],
										i = Object(u.d)(a),
										c = Object(l.b)(a),
										d = Object(u.c)(r),
										m = {
											recommendedSubredditIds: [r.id],
											interactedSubredditIds: [s.id],
											subreddits: i,
											subredditsAboutInfo: c,
											subredditTopContent: d,
											category: o,
											lastLoadedEnv: "client"
										};
									e(f(m)), v = !0
								}
							} else v = !1
						}
					} catch (O) {
						v = !1
					}
					v || e(h({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, j = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, _ = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations;
					return !(!n || 0 !== n.length)
				}, k = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations,
						r = t && t.type;
					return !!(n && !_(e) && r === d.GEO && n[0] && n[0].recommendedSubreddit && n[0].interactedSubreddit)
				}, y = () => async (e, t, n) => {
					var r, s;
					const a = t(),
						i = Object(m.g)(a);
					if (Object(m.f)(a) || null === i || "client" === i) {
						const n = null === (s = null === (r = Object(p.b)(t())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === s ? void 0 : s.route.chunk,
							i = Object(b.R)(a);
						return Object(o.i)(() => e(C()), {
							name: "getFocusedVerticalsRequested",
							page: n,
							isLoggedIn: i
						})
					}
					if ("server" === i) return e(v({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/frontpage/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "frontpagePending", (function() {
				return je
			})), n.d(t, "frontpageLoaded", (function() {
				return _e
			})), n.d(t, "frontpageFailed", (function() {
				return ke
			})), n.d(t, "frontpageDataRequested", (function() {
				return ye
			})), n.d(t, "frontpageRequestedHelper", (function() {
				return Ne
			})), n.d(t, "frontpageRequested", (function() {
				return Se
			})), n.d(t, "frontpageReloaded", (function() {
				return Te
			})), n.d(t, "morePostsPending", (function() {
				return Re
			})), n.d(t, "morePostsLoaded", (function() {
				return Pe
			})), n.d(t, "morePostsFailed", (function() {
				return Le
			})), n.d(t, "morePostsRequested", (function() {
				return Me
			})), n.d(t, "refreshFeed", (function() {
				return Ge
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/pick.js"),
				o = n.n(s),
				a = n("./src/lib/getParsedUserAgent/index.ts"),
				i = n("./src/reddit/actions/focusedVerticals/index.ts"),
				c = n("./src/lib/base64/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/env/index.ts"),
				u = n("./src/lib/makeGqlRequest/index.ts"),
				m = n("./src/lib/performanceTimings/index.tsx"),
				p = n("./src/lib/sentry/index.ts"),
				b = n("./src/reddit/constants/experiments.ts"),
				f = n("./src/reddit/constants/graphql.ts"),
				h = n("./src/reddit/helpers/getPostLimitForMobile/index.ts"),
				g = n("./src/reddit/models/Live/index.ts"),
				x = n("./src/reddit/models/Onboarding/index.ts"),
				v = n("./src/reddit/models/Post/index.ts"),
				O = n("./src/reddit/helpers/graphql/normalizeInterestTopicsFromGql/index.ts"),
				E = n("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				C = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				j = n("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				_ = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				k = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				y = n("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				N = n("./src/reddit/models/FeedElement/index.ts");

			function I(e) {
				return e.__typename === N.a.FreeNftFeedElement
			}
			var S = n("./src/reddit/models/NotificationInbox/index.ts"),
				w = n("./src/reddit/selectors/experiments/econ/marketplace.ts"),
				T = n("./src/reddit/selectors/experiments/inAppNotification.ts"),
				R = n("./src/reddit/selectors/experiments/loggedOutOneFeed.ts"),
				P = n("./src/reddit/selectors/experiments/onboarding.ts"),
				L = n("./src/reddit/helpers/chooseVariant/index.ts"),
				M = n("./src/reddit/selectors/experiments/utils.ts");
			const G = e => {
				const t = Object(L.c)(e, {
					experimentEligibilitySelector: L.a,
					experimentName: b.Wb
				});
				return !!Object(M.a)(t)
			};
			var F = n("./src/reddit/selectors/platform.ts"),
				A = n("./src/reddit/selectors/user.ts"),
				D = n("./src/redditGQL/operations/Frontpage.json"),
				B = n("./src/redditGQL/types.ts"),
				q = n("./src/lib/initializeClient/installReducer.ts"),
				V = n("./src/reddit/reducers/features/marketplace/index.ts");
			Object(q.a)({
				features: {
					marketplace: V.a
				}
			});
			const W = (e, t) => {
					var n, r;
					const {
						after: s,
						dist: o,
						isMobile: a,
						layout: i,
						limit: d,
						sort: l,
						t: u,
						correlationId: m
					} = t, p = Object(P.b)(e), g = Object(A.ab)(e) || Object(A.R)(e), x = Object(T.a)(e), v = Object(F.q)(e), O = Object(R.a)(e), E = {
						adContext: {
							layout: i ? i.toUpperCase() : f.a.Card,
							reddaid: e.user.reddaid,
							distance: o
						},
						feedRankingContext: {
							servingId: m
						},
						forceGeopopular: !0,
						includeCommunityDUs: !1,
						includeInterestTopics: !!p && !Object(b.If)(p),
						includeFeaturedAnnouncements: !0,
						includeLiveEvents: !0,
						includeIdentity: g && !(null === (r = null === (n = e.user.account) || void 0 === n ? void 0 : n.karma) || void 0 === r ? void 0 : r.total),
						includePostRecommendations: G(e) || O,
						includeFreeMarketplaceElement: Object(w.a)(e),
						includeSubredditQuestions: g,
						recentPostIds: e.posts.recent,
						notificationContext: {
							variant: null == x ? void 0 : x.toLowerCase()
						}
					};
					return O ? (E.sort = B.t.Best, E.feedRankingContext.variant = Object(R.b)(e)) : l && (E.sort = l.toUpperCase()), u && (E.range = u.toUpperCase()), a ? E.pageSize = Object(h.a)(i) : d && (E.pageSize = d), v && v.ad && (E.forceAds = {
						ad: v.ad
					}), s && (E.after = Object(c.a)(s)), E
				},
				Q = async (e, t, n, r) => {
					const s = Date.now(),
						o = await ((e, t) => Object(u.a)(e, {
							...D,
							variables: t
						}, {
							traceRequestName: "get_frontpage"
						}))(e, t),
						a = Date.now();
					let i;
					try {
						const e = Date.now();
						i = (e => {
							let {
								trendingSubreddits: t = [],
								identity: n,
								home: r,
								featuredAnnouncements: s,
								recentPosts: o = []
							} = e;
							var a, i;
							const c = [],
								d = [];
							let u, m, b, f;
							const h = {
									postIds: [],
									postInstances: {},
									posts: {},
									postFlair: {},
									profiles: {},
									subreddits: {}
								},
								N = e => {
									if (h.posts[e.id]) return e.id;
									const t = Object(C.f)(e);
									h.posts[t.id] = t;
									const {
										crosspostRoot: n
									} = e;
									n && n.type === v.a.Post && n.postInfo && N(n.postInfo);
									let r = t.id;
									if (Object(v.l)(e)) h.profiles[e.profile.id] || (h.profiles[e.profile.id] = Object(_.a)(e.profile));
									else if (Object(v.n)(e)) h.subreddits[e.subreddit.id] || (h.subreddits[e.subreddit.id] = Object(k.a)(e.subreddit)), h.postFlair[e.subreddit.id] || (h.postFlair[e.subreddit.id] = Object(E.a)(e.subreddit));
									else if (Object(v.h)(e)) {
										const n = Object(C.b)(e);
										if (!n) return null;
										r = n, h.posts[n] = {
											...t,
											id: n,
											permalink: `${t.permalink}?instanceId=${encodeURIComponent(n)}`
										}, h.posts[t.id] || (h.posts[t.id] = {
											...t,
											events: []
										}), h.postInstances[e.id] || (h.postInstances[e.id] = []), h.postInstances[e.id].push(n)
									}
									return r
								};
							for (const l of t) {
								const e = Object(k.a)(l);
								h.subreddits[e.id] = e, c.push(e.id)
							}
							for (const [E, {
									node: j
								}] of r.elements.edges.entries())
								if (Object(v.k)(j)) {
									const e = N(j);
									e && h.postIds.push(e)
								} else if (Object(v.m)(j)) {
								if (!j.recommendationContext || !j.postInfo) {
									const e = "Received empty PostRecommendation element when processing frontpage data.";
									Object(l.b)() || console.warn(e), p.c.captureMessage(e);
									continue
								}
								const {
									content: e,
									subreddit: t,
									typeIdentifier: n
								} = j.recommendationContext;
								if (j.postInfo && (null == e ? void 0 : e.richtext)) {
									const r = N(j.postInfo);
									r && (h.postIds.push(r), h.posts[r].recommendationContext = {
										content: Object(C.d)(e.richtext),
										source: {
											source: null == n ? void 0 : n.toLowerCase(),
											subredditId: null == t ? void 0 : t.id,
											subredditName: null == t ? void 0 : t.prefixedName
										}
									})
								}
							} else if (Object(g.c)(j) && !u) u = j;
							else if (Object(x.f)(j)) {
								const e = null === (a = null == j ? void 0 : j.interestTopicRecommendations) || void 0 === a ? void 0 : a.recommendationTopics;
								if (e) {
									const t = Object(O.a)(e);
									t.topics.length && (b = {
										interests: t,
										index: E
									})
								}
							} else if (I(j) && !m) m = {
								element: j,
								index: r.elements.edges.findIndex(e => e.node === j)
							};
							else if (Object(S.d)(j) && (null === (i = null == j ? void 0 : j.notifications) || void 0 === i ? void 0 : i.length)) f = {
								notifications: j.notifications,
								position: E,
								id: j.id
							};
							else {
								const e = `Received unhandled element type when processing frontpage data: "${j.__typename}"`;
								Object(l.b)() || console.warn(e), p.c.captureMessage(e)
							}
							for (const l of o) {
								if (!l) continue;
								const e = N(l);
								e && d.push(e)
							}
							const w = h.postIds.length - 1,
								T = w >= 0 ? h.postIds[w] : "",
								R = r.elements.dist,
								P = r.elements.geoFilter;
							return {
								...h,
								account: n && Object(y.a)(n) || null,
								featuredLiveThread: u,
								marketplaceFeedElement: m,
								interestTopicRecommendations: b,
								announcements: s,
								notifications: f,
								preferences: n && n.preferences && Object(j.a)(n.preferences, n.interactions) || null,
								...0 !== c.length && {
									trendingSubredditIds: c
								},
								...0 !== d.length && {
									recentPostIds: d
								},
								token: T,
								...null !== R && {
									dist: R
								},
								...null !== P && {
									geoFilter: P
								}
							}
						})(o.body.data);
						const t = Date.now(),
							c = [{
								duration: a - s,
								logKeyType: m.a.gqlFetchTiming
							}, {
								duration: t - e,
								logKeyType: m.a.gqlNormalizationTiming
							}];
						Object(m.h)({
							name: d.s.FRONTPAGE,
							isLoggedIn: n,
							metrics: c,
							statsdPathsForExperiments: r
						})
					} catch (c) {
						const e = "Error normalizing front page posts";
						Object(l.b)() || console.error(e, c), p.c.captureException(c)
					}
					return {
						...o,
						body: i
					}
				};
			var H = n("./src/lib/pageTitle/index.ts"),
				U = n("./src/lib/pageTitle/helpers.ts"),
				z = n("./src/reddit/actions/login.ts"),
				K = n("./src/reddit/actions/meta.ts"),
				J = n("./src/reddit/actions/platform.ts"),
				X = n("./src/reddit/actions/toaster.ts"),
				Z = n("./src/reddit/constants/history.ts"),
				Y = n("./src/reddit/constants/page.ts"),
				$ = n("./src/reddit/constants/parameters.ts"),
				ee = n("./src/reddit/constants/postLayout.ts"),
				te = n("./src/reddit/contexts/PageLayer/index.tsx"),
				ne = n("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				re = n("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				se = n("./src/reddit/models/Toast/index.ts"),
				oe = n("./src/reddit/selectors/experiments/countrySites.ts"),
				ae = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				ie = n("./src/reddit/selectors/frontpage.ts"),
				ce = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				de = n("./src/reddit/selectors/runTimeEnvVars.ts"),
				le = n("./src/lib/makeActionCreator/index.ts"),
				ue = n("./src/lib/makeListingKey/index.ts"),
				me = n("./src/reddit/actions/ads/index.ts"),
				pe = n("./src/reddit/helpers/trackers/feed.ts"),
				be = n("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				fe = n("./src/reddit/actions/seo/linksModule.ts"),
				he = n("./src/reddit/selectors/seo/linksModule.ts"),
				ge = n("./src/reddit/actions/publicAccessNetwork/api.ts"),
				xe = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				ve = n("./src/reddit/helpers/filterListingResponse/index.ts"),
				Oe = n("./src/reddit/actions/frontpage/constants.ts"),
				Ee = n("./node_modules/uuid/v4.js"),
				Ce = n.n(Ee);
			const je = Object(le.a)(Oe.c),
				_e = Object(le.a)(Oe.b),
				ke = Object(le.a)(Oe.a),
				ye = (e, t) => async (n, s, o) => {
					var i, c, d, l;
					const u = s();
					if (u.listings.postOrder.api.pending[e]) return;
					const p = ee.e[Object(te.R)(u, {})];
					t.isMobile = Object(a.e)(u.meta.userAgent), t.recentPostIds = u.posts.recent, t.layout = p, t.useMockData = !!u.platform.currentPage && (!!u.platform.currentPage.queryParams.useMockData && Object(de.b)(u)), n(je({
						key: e
					})); {
						const e = u.platform.currentPage,
							n = e && e.url;
						n && (t.clickUrl = n)
					}
					const b = Ce()();
					t.correlationId = b;
					const f = null === (c = null === (i = Object(F.b)(u)) || void 0 === i ? void 0 : i.routeMatch) || void 0 === c ? void 0 : c.route.chunk,
						h = Object(A.R)(u),
						g = await Object(m.i)(() => Q(o.gqlContext(), W(u, t), Object(A.ab)(u), t.statsdPathsForExperiments), {
							name: "fetchFrontpageData",
							isLoggedIn: h,
							page: f
						});
					n(Object(J.n)(g.status));
					const x = `error-${e}`;
					if (g.ok && g.body) {
						const r = g.body;
						n(_e({
							key: e,
							meta: u.meta,
							correlationId: b,
							...r
						})), n(X.g(x)), r.geoFilter && n(Object(K.k)(r.geoFilter)), n(Object(me.b)(be.a.FRONTPAGE));
						const o = null === (l = null === (d = Object(F.b)(u)) || void 0 === d ? void 0 : d.locationState) || void 0 === l ? void 0 : l[Z.b.FeedLoadReason];
						Object(pe.b)(t.isRefresh ? Z.a.UserRefresh : null != o ? o : Z.a.InitialLoad)(s())
					} else {
						n(ke({
							error: g.error,
							key: e,
							...g.body
						})), n(X.f({
							id: x,
							kind: se.b.Error,
							text: r.fbt._("Sorry, we couldn't load posts for this page.", null, {
								hk: "36ypKx"
							}),
							buttonText: r.fbt._("Retry", null, {
								hk: "1XMjgA"
							}),
							buttonAction: ye(e, t)
						}));
						const o = g.error;
						Object(pe.a)(o ? `${g.status||"000"}: ${o.type}` : "000: UNKNOWN_ERROR")(s())
					}
				}, Ne = (e, t) => async (n, r) => {
					var s;
					const a = r(),
						i = Object(ie.a)(a),
						{
							sort: c = i
						} = e.params,
						l = Object(ue.a)(Y.b, c, e.queryParams),
						u = a.listings.postOrder.ids[l],
						m = a.listings.postOrder.api.error[l],
						p = a.listings.postOrder.api.pending[l],
						b = Object(oe.b)(a),
						f = $.E in e.queryParams && e.queryParams[$.E].toUpperCase() || "",
						h = f in d.jc && d.jc[f],
						g = H.e();
					if (p || u && !m && !t) return void(u && (n(J.m({
						title: b ? Object(U.a)(a, g) : g
					})), (null === (s = a.listings.postOrder.correlationIds) || void 0 === s ? void 0 : s[l]) && n(J.o({
						correlationId: a.listings.postOrder.correlationIds[l]
					})), a.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						n(Object(me.b)(be.a.FRONTPAGE))
					})));
					const x = Object(ne.a)(a),
						v = Object(ne.b)(x),
						O = [Object(ne.c)(x)];
					await n(ye(l, {
						...o()(e.queryParams, $.n),
						...o()(e.queryParams, $.m),
						limit: v,
						sort: c,
						statsdPathsForExperiments: O,
						t: Object(re.a)(c, h)
					})), n(J.m({
						title: b ? Object(U.a)(a, g) : g
					})), Object(L.c)(a, {
						experimentEligibilitySelector: L.a,
						experimentName: "redesign_aa"
					});
					const E = Object(ae.a)(a, {});
					Object(ae.e)(E) && n(Object(z.j)())
				}, Ie = () => async (e, t) => {
					var n, r;
					const s = t();
					if (Object(he.a)(s)) return;
					const o = null === (r = null === (n = Object(F.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
						a = Object(A.R)(s);
					return Object(m.i)(() => e(Object(fe.d)()), {
						name: "frontpageLinksRequested",
						page: o,
						isLoggedIn: a
					})
				}, Se = (e, t) => async n => {
					await Promise.all([n(Object(i.b)()), n(Ne(e, t)), n(Ie()), n(Object(ge.c)(xe.R))])
				}, we = Object(le.a)(Oe.d), Te = e => async (t, n) => {
					const r = n(),
						s = r.platform.currentPage.routeMatch.match;
					Object(ce.o)(r) || Object(ce.u)(r) || (e || t(we()), await t(Se(s, !0)))
				}, Re = Object(le.a)(Oe.g), Pe = Object(le.a)(Oe.f), Le = Object(le.a)(Oe.e), Me = e => async (t, n, r) => {
					let {
						gqlContext: s
					} = r;
					const i = n(),
						c = Object(ie.a)(i),
						{
							sort: l = c
						} = e,
						u = i.platform.currentPage ? i.platform.currentPage.queryParams : {},
						m = Object(ue.a)(Y.b, l, u),
						p = i.listings.postOrder.loadMore[m],
						b = u[$.E] ? u[$.E].toUpperCase() : "",
						f = b in d.jc && d.jc[b];
					if (p) {
						const e = i.listings.postOrder.api.pending[m],
							r = i.listings.postOrder.fetchedTokens,
							c = !(!r[m] || !r[m][p.token]);
						if (!e && !c) {
							t(Re({
								key: m,
								fetchedToken: p.token
							}));
							const e = !!i.platform.currentPage && !!i.platform.currentPage.queryParams.useMockData,
								r = Object(ne.a)(i),
								c = ee.a,
								d = [Object(ne.c)(r)],
								b = {
									after: p.token,
									dist: p.dist,
									...o()(u, $.n),
									isMobile: Object(a.e)(i.meta.userAgent),
									limit: c,
									sort: l,
									t: Object(re.a)(l, f),
									layout: ee.e[Object(te.R)(i, {})],
									useMockData: e
								}; {
								const e = i.platform.lastPage,
									t = e && e.url;
								t && (b.clickUrl = t)
							}
							b.correlationId = i.listings.postOrder.correlationIds[m];
							const h = () => Q(s(), W(i, b), Object(A.ab)(i), d),
								g = await h(),
								x = {
									...g.body,
									...Object(ve.a)(i, m, g.body)
								};
							if (g.ok) t(Pe({
								key: m,
								fetchedToken: p.token,
								meta: i.meta,
								...x
							})), Object(pe.b)(Z.a.NextPageLoad)(n());
							else {
								t(Le({
									key: m,
									error: g.error,
									fetchedToken: p.token,
									...x
								}));
								const e = g.error;
								Object(pe.a)(e ? `${g.status||"000"}: ${e.type}` : "000: UNKNOWN_ERROR")(n())
							}
						}
					}
				}, Ge = e => async (t, n) => {
					const r = n(),
						s = Object(ie.a)(r),
						{
							sort: o = s
						} = e,
						a = r.platform.currentPage ? r.platform.currentPage.queryParams : {},
						i = Object(ue.a)(Y.b, o, a),
						c = a[$.E] ? a[$.E].toUpperCase() : "",
						l = c in d.jc && d.jc[c],
						u = Object(ne.a)(r),
						m = Object(ne.b)(u);
					await t(ye(i, {
						limit: m,
						sort: o,
						t: Object(re.a)(o, l),
						isRefresh: !0
					}))
				}
		},
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, n) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				i = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				c = n.n(i);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => s.a.createElement(a.b, {
				className: Object(o.a)(e.className, c.a.container, e.text.length >= e.maxChars ? c.a.mOverflow : null)
			}, d._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [d._plural(e.maxChars - e.text.length, "characters")], {
				hk: "V22sW"
			}))
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
		"./src/reddit/components/Onboarding/GenderCollection/GenderCollection.m.less": function(e, t, n) {
			e.exports = {
				title: "_3zKrU2hmb0AVKgBTLIT7QL",
				subtitle: "_31WKxmQes0ar6o2lWLenNz",
				hoverAndSelectedStyles: "_1srXBYU3Yp4KAaQWY5Bb02",
				active: "KntdV1m8mH3S5LtN4TsNh",
				genderRadioButton: "_31QeZMXp1_tQXkBzZgf6QG",
				genderOption: "T95_VBp5gV76hGtM3JdZS",
				genderUserDefinedInput: "_1L4NxeVzvoZ2NpBoMFz2RU",
				buttonStyles: "e6YKwZQifPpIvpBNgmf5Q",
				Icon: "_27E-_Qhbqb32rylGKiLqkd",
				icon: "_27E-_Qhbqb32rylGKiLqkd",
				isLeft: "uaESWVq-nVbQ-DNrSd_E0",
				isRight: "_1bvO5s8tuFuxBhZ5EzDSCG"
			}
		},
		"./src/reddit/components/Onboarding/Interests/InterestPicker.m.less": function(e, t, n) {
			e.exports = {
				InterestListButtons: "_3miLvWoAksppOIKDbHmCpH",
				interestListButtons: "_3miLvWoAksppOIKDbHmCpH",
				InterestButton: "_3oCL2oMbe3H81mue3bR1CQ",
				interestButton: "_3oCL2oMbe3H81mue3bR1CQ",
				sharedButtonStyles: "nGPPVLjaF9xHLhEfs0OCV",
				Selected: "_9bvUa3_8YwoacACdyRw_T",
				selected: "_9bvUa3_8YwoacACdyRw_T",
				Placeholder: "_3lj8QAQ0ABoP56baCrm__e",
				placeholder: "_3lj8QAQ0ABoP56baCrm__e",
				Icon: "_3DtgruA-lLYrQl-qbVEgJm",
				icon: "_3DtgruA-lLYrQl-qbVEgJm",
				isLeft: "_1U2p5JzQnPfAZNB3-974OG",
				isRight: "_3szUhYjG4tA4Hqfi9MD1fa",
				InterestPickerPreview: "_3mV_F85IUlHJXj6vglN9dL",
				interestPickerPreview: "_3mV_F85IUlHJXj6vglN9dL",
				Dismissed: "_3RAeTThkWAn32hs_GxGw58",
				dismissed: "_3RAeTThkWAn32hs_GxGw58",
				InterestPickerPreviewTopBorder: "_25lW6DMq80IbK6ieXPoFp_",
				interestPickerPreviewTopBorder: "_25lW6DMq80IbK6ieXPoFp_",
				InterestPickerPreviewHeader: "_3153esXkC4o22mmMb4NEwq",
				interestPickerPreviewHeader: "_3153esXkC4o22mmMb4NEwq",
				InterestListItem: "OuNwEANldIlJWdGdhx4Ah",
				interestListItem: "OuNwEANldIlJWdGdhx4Ah",
				Title: "_3rvplkPXZC8aONpCwbcmBN",
				title: "_3rvplkPXZC8aONpCwbcmBN",
				ChooseMore: "_3_KngAlh-KmD6kGmN3AnAs",
				chooseMore: "_3_KngAlh-KmD6kGmN3AnAs",
				CaretRight: "_1LQqSQrTWMFaG2ofR18jvF",
				caretRight: "_1LQqSQrTWMFaG2ofR18jvF",
				DismissButton: "_1g-0M7zTPIr2nIPPr-AHJh",
				dismissButton: "_1g-0M7zTPIr2nIPPr-AHJh"
			}
		},
		"./src/reddit/components/Onboarding/Interests/InterestPill.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./node_modules/polished/dist/polished.es.js"),
				c = n("./src/reddit/components/Onboarding/Interests/InterestPicker.m.less"),
				d = n.n(c);
			const l = (e, t, n) => {
					if (!t && !n) return {};
					let r = u(e);
					return n && !t && (r = Object(i.f)(r, .25)), {
						backgroundColor: r
					}
				},
				u = e => m[e % 7],
				m = ["#c08d41", "#ffa800", "#ff4500", "#ff3881", "#b44ac0", "#6a5cff", "#3690ea"];
			t.a = e => {
				let {
					colorIndex: t = 0,
					isSelected: n = !1,
					isSubtopic: r = !1,
					onClickHandler: i,
					topic: c
				} = e;
				return s.a.createElement(o.t, {
					className: Object(a.a)(d.a.InterestButton, {
						[d.a.Selected]: n
					}),
					kind: o.b.Button,
					onClick: i,
					style: l(t, n, r)
				}, c)
			}
		},
		"./src/reddit/components/Onboarding/Modal.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/noop.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/frontpage/index.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/survey/index.ts"),
				p = n("./src/reddit/actions/toaster.ts"),
				b = n("./node_modules/fbt/lib/FbtPublic.js"),
				f = n("./src/lib/sentry/index.ts"),
				h = n("./src/reddit/actions/snoovatar.ts"),
				g = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				x = n("./src/reddit/hooks/useTracking.ts"),
				v = n("./src/reddit/models/Toast/index.ts"),
				O = n("./src/reddit/selectors/avatar.ts");
			var E = () => {
					const e = Object(i.e)(O.a),
						t = Object(i.d)(),
						n = Object(x.a)(),
						r = Object(i.e)(O.c);
					Object(o.useEffect)(() => {
						(null == e ? void 0 : e.csrf_token) || t(Object(h.c)())
					}, []);
					const s = Object(o.useCallback)(async () => {
							t(Object(h.d)())
						}, [t]),
						a = Object(o.useCallback)(async () => {
							if (n(Object(g.a)("save_and_continue")), e && r) {
								n(Object(g.e)("onboarding"));
								try {
									return await t(Object(h.e)(r.accessoryIds, {}, {
										set_avatar_to_profile: !0,
										source: "web_onboarding"
									})), !0
								} catch (s) {
									f.c.captureException(s)
								}
							}
							return t(Object(p.f)({
								kind: v.b.Error,
								text: b.fbt._("Unable to save avatar, please try again.", null, {
									hk: "17FzD3"
								})
							})), !1
						}, [r, e, t, n]);
					return {
						avatarImage: (null == r ? void 0 : r.image) || null,
						fetchRandomAvatar: s,
						saveAvatar: a
					}
				},
				C = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				j = n("./src/reddit/components/Onboarding/Celebration.m.less"),
				_ = n.n(j);
			const {
				fbt: k
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var y = () => a.a.createElement("div", {
					className: _.a.CelebrationBg
				}, a.a.createElement("div", {
					className: _.a.CelebrationTitle
				}, k._("We're happy you're here!", null, {
					hk: "1YMdHn"
				})), a.a.createElement("div", {
					className: _.a.CelebrationSubTitle
				}, k._("Your home feed is being created now…", null, {
					hk: "Onr1V"
				})), a.a.createElement("div", null, a.a.createElement(C.a, {
					className: _.a.LoadingSpinner,
					sizePx: 16
				}))),
				N = n("./src/reddit/components/Settings/GenderCollection/index.tsx"),
				I = n("./src/reddit/models/Gender/index.ts"),
				S = n("./src/lib/constants/index.ts"),
				w = n("./src/reddit/components/Onboarding/GenderCollection/GenderCollection.m.less"),
				T = n.n(w),
				R = n("./src/reddit/helpers/trackers/onboarding.ts");
			const P = {
					definedGender: null,
					genderCategory: I.a.OPT_OUT
				},
				L = e => e === I.a.USER_DEFINED;
			var M = e => {
					let {
						selectedGenderOption: t,
						setSelectedGenderOption: n
					} = e;
					const r = Object(x.a)(),
						s = Object(o.useRef)(null),
						i = Object(o.useRef)([]),
						[c, d] = Object(o.useState)((null == t ? void 0 : t.definedGender) || "");
					Object(o.useEffect)(() => {
						r(Object(R.l)())
					}, [r]);
					const l = e => {
							var t;
							let n = null;
							return L(e) && (n = (null === (t = s.current) || void 0 === t ? void 0 : t.value) || "", d(n)), {
								definedGender: n,
								genderCategory: e
							}
						},
						u = Object(o.useCallback)(e => {
							var t;
							r(Object(R.i)()), n(l(e)), L(e) && (null === (t = s.current) || void 0 === t || t.focus())
						}, [r, n]),
						m = Object(o.useCallback)(e => {
							u(e.value), e.focus()
						}, [u]),
						p = Object(o.useCallback)(e => {
							if (!t || !L(t.genderCategory)) {
								const t = i.current[e];
								t && u(t.value)
							}
						}, [u, t]),
						b = (e, r) => {
							const o = L(e.key);
							return a.a.createElement("label", {
								key: e.key
							}, a.a.createElement("input", {
								checked: e.key === (null == t ? void 0 : t.genderCategory),
								className: T.a.genderRadioButton,
								"data-testid": e.key,
								id: `genderCollectionOption${r+1}`,
								name: "genderCollection",
								onChange: () => u(e.key),
								ref: e => i.current[r] = e,
								type: "radio",
								value: e.key
							}), o ? a.a.createElement("input", {
								className: T.a.genderUserDefinedInput,
								"data-testid": `${e.key}-input`,
								onChange: () => n(l(e.key)),
								onClick: () => p(r),
								onKeyDown: e => ((e, t) => {
									var n;
									const r = e.target;
									if (r) {
										if (S.h[e.key] && !r.value) {
											const n = i.current.length - 1;
											let r;
											(r = e.keyCode === S.h.ArrowUp || e.keyCode === S.h.ArrowLeft ? i.current[t ? t - 1 : n] : i.current[t === n ? 0 : t + 1]) && m(r)
										}
										e.keyCode === S.K && (null === (n = i.current[t]) || void 0 === n || n.focus())
									}
								})(e, r),
								placeholder: e.displayText,
								ref: s,
								tabIndex: -1,
								value: c
							}) : a.a.createElement("span", {
								className: T.a.genderOption
							}, e.displayText))
						};
					return a.a.createElement("div", null, Object(N.b)().map((e, t) => b(e, t)))
				},
				G = n("./src/reddit/constants/avatars.ts"),
				F = n("./src/reddit/controls/Button/index.tsx"),
				A = n("./src/reddit/icons/fonts/index.tsx"),
				D = n("./src/reddit/components/Onboarding/AvatarPicker/AvatarPicker.m.less"),
				B = n.n(D);
			const {
				fbt: q
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var V = e => {
					let {
						avatarImage: t,
						fetchRandomAvatar: n
					} = e;
					const r = Object(x.a)();
					Object(o.useEffect)(() => {
						r(Object(g.n)())
					}, [r]);
					const s = Object(o.useCallback)(() => {
							r(Object(g.a)("randomize")), n()
						}, [r, n]),
						{
							legalCopy: i,
							learnMoreText: c,
							url: d
						} = G.a;
					return a.a.createElement("div", {
						className: B.a.avatarPicker
					}, a.a.createElement("div", {
						className: B.a.dynamicSizeWrapper
					}, t ? a.a.createElement("img", {
						"data-testid": "preview-image",
						src: `data:image/png;base64,${encodeURIComponent(t)}`,
						className: B.a.previewImage
					}) : a.a.createElement(C.a, {
						className: B.a.loader
					}), a.a.createElement("div", {
						className: B.a.legalTextContainer
					}, i(), a.a.createElement("a", {
						href: d,
						className: B.a.learnMoreLink
					}, c()))), a.a.createElement(F.t, {
						className: B.a.randomizeButton,
						priority: F.c.Secondary,
						onClick: s,
						Icon: Object(A.b)("random"),
						iconClassName: B.a.icon
					}, q._("Randomize", null, {
						hk: "uwAa8"
					})))
				},
				W = n("./node_modules/lodash/times.js"),
				Q = n.n(W),
				H = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx");
			var U = n("./src/reddit/icons/svgs/CommunityDefault/filled.tsx"),
				z = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				K = n("./src/reddit/icons/svgs/Positive/index.tsx"),
				J = n("./src/reddit/components/TrackEnterExitViewport/index.tsx"),
				X = n("./src/reddit/components/Onboarding/CommunityPicker.m.less"),
				Z = n.n(X);
			const {
				fbt: Y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), $ = () => Y._("Recommended for you", null, {
				hk: "28LTkA"
			}), ee = e => {
				let {
					community: t,
					schemeName: n,
					selected: r,
					toggleAll: s,
					toggleSelection: i,
					viewportRoot: c,
					setViewedCommunities: d,
					viewedCommunities: l
				} = e;
				const {
					communities: u
				} = t, [m, p] = Object(o.useState)(null);
				Object(o.useEffect)(() => {
					p(!u.find(e => !r[e.id]))
				}, [u, r]);
				const b = Object(o.useCallback)(() => {
					s(t.topicId, !m), p(!m)
				}, [t.topicId, m, s]);
				return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: Z.a.RecommendedHeader
				}, a.a.createElement("span", {
					className: Z.a.SectionTitle
				}, t.topicTitle), a.a.createElement("button", {
					onClick: b,
					className: Z.a.SelectAllLink
				}, m && Y._("Deselect All", null, {
					hk: "4u0XYF"
				}), !m && null !== m && Y._("Select All", null, {
					hk: "3izh21"
				}))), a.a.createElement(a.a.Fragment, null, a.a.createElement(ne, {
					communities: t.communities,
					communityId: t.topicId,
					schemeName: n,
					selected: r,
					toggleSelection: i,
					topicTitle: t.topicTitle,
					viewportRoot: c,
					setViewedCommunities: d,
					viewedCommunities: l
				})))
			}, te = () => a.a.createElement(a.a.Fragment, null, Q()(5, e => a.a.createElement(H.a, {
				key: e,
				fullWidth: !0,
				large: !0
			}))), ne = e => {
				let {
					communities: t,
					communityId: n,
					schemeName: r,
					selected: s,
					topicTitle: i,
					toggleSelection: c,
					viewportRoot: d,
					setViewedCommunities: l,
					viewedCommunities: u
				} = e;
				const m = Object(x.a)(),
					[p, b] = Object(o.useState)(!1),
					f = t.length > 4,
					h = t.slice(0, p ? void 0 : 4),
					g = "recommended" === n ? "" : i,
					v = Object(o.useCallback)(() => {
						b(!0), m(Object(R.f)(i))
					}, [m, i]);
				return a.a.createElement(a.a.Fragment, null, h.map(e => {
					const t = u.has(e.id);
					return a.a.createElement(J.a, {
						key: e.id,
						fireOnce: !0,
						viewportRoot: d,
						threshold: 1,
						rootMargin: "0px 0px -85px 0px",
						onEnter: t ? void 0 : Object(R.h)(i, e.prefixedName, r),
						onEnterHandler: t => {
							l(new Set(u).add(e.id))
						}
					}, a.a.createElement(re, {
						communityId: e.id,
						description: e.description,
						icon: e.icon,
						isSelected: s[e.id],
						key: e.id,
						prefixedName: e.prefixedName,
						schemeName: r,
						toggleSelection: c,
						topicTitle: i
					}))
				}), f && !p && a.a.createElement(se, {
					text: g,
					showMore: v
				}))
			}, re = e => {
				let {
					communityId: t,
					description: n,
					icon: r,
					isSelected: s,
					prefixedName: i,
					schemeName: c,
					toggleSelection: l,
					topicTitle: u
				} = e;
				const m = Object(x.a)(),
					p = Object(o.useCallback)(() => {
						m(Object(R.d)(!s, u, i, c)), l(t)
					}, [t, s, i, c, m, l, u]);
				return a.a.createElement("div", {
					className: Object(d.a)(Z.a.CommunityRow, {
						[Z.a.Selected]: s
					}),
					onClick: p
				}, a.a.createElement("div", {
					className: Z.a.IconSection
				}, r && a.a.createElement("img", {
					className: Z.a.IconWrapper,
					src: r
				}), !r && a.a.createElement(U.a, {
					className: Z.a.CommunityNoIcon
				})), a.a.createElement("div", {
					className: Z.a.TextSection
				}, a.a.createElement("div", {
					className: Z.a.Info
				}, i), a.a.createElement("div", {
					className: Z.a.Description
				}, n)), a.a.createElement("div", {
					className: Z.a.ButtonSection
				}, s && a.a.createElement(K.a, {
					className: Z.a.SelectedIcon
				}), !s && a.a.createElement(z.a, {
					className: Z.a.SelectIcon
				})))
			}, se = e => {
				let {
					showMore: t,
					text: n
				} = e;
				return a.a.createElement("div", {
					className: Z.a.MoreRecommendations
				}, a.a.createElement("button", {
					onClick: t
				}, !n && Y._("More recommendations", null, {
					hk: "3I8APZ"
				}), n && Y._("More in {topic-title}", [Y._param("topic-title", n)], {
					hk: "4afv7s"
				})))
			};
			var oe = e => {
					let {
						communitiesByTopic: t,
						loadingCommunities: n,
						recommendedCommunities: r,
						selected: s,
						schemeName: i,
						toggleSelection: c,
						toggleAll: d,
						viewportRoot: l
					} = e;
					const u = Object(x.a)();
					Object(o.useEffect)(() => {
						u(Object(R.g)())
					}, [u]);
					const [m, p] = Object(o.useState)(new Set);
					return a.a.createElement("div", {
						className: Z.a.CommunityListWrapper
					}, r.length > 0 && a.a.createElement(ee, {
						community: {
							communities: r,
							topicId: "recommended",
							topicTitle: $()
						},
						schemeName: i,
						selected: s,
						toggleAll: d,
						toggleSelection: c,
						setViewedCommunities: p,
						viewedCommunities: m,
						viewportRoot: l
					}), (!!t.length || n) && a.a.createElement(a.a.Fragment, null, n && a.a.createElement(te, null), t.map(e => a.a.createElement(ee, {
						key: e.topicId,
						community: e,
						schemeName: i,
						selected: s,
						toggleAll: d,
						toggleSelection: c,
						setViewedCommunities: p,
						viewedCommunities: m,
						viewportRoot: l
					}))))
				},
				ae = n("./src/reddit/components/Onboarding/Interests/InterestPill.tsx"),
				ie = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				ce = n("./src/reddit/components/Onboarding/Interests/InterestPicker.m.less"),
				de = n.n(ce);
			const {
				fbt: le
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ue = e => {
				let {
					interests: t,
					schemeName: n,
					selected: r,
					toggleSelection: s,
					topicColor: i = null,
					viewportRoot: c = null,
					setViewedInterests: d,
					viewedInterests: l
				} = e;
				const u = Object(x.a)(),
					m = Object(o.useCallback)((e, t, r, o) => {
						u(Object(R.n)(!t, !r, o, n)), s(e)
					}, [n, u, s]);
				return a.a.createElement(a.a.Fragment, null, t.map((e, t) => {
					var o;
					const u = !!r[e.id],
						p = null !== i,
						b = e.topic,
						f = l.has(e.id);
					return a.a.createElement(a.a.Fragment, {
						key: e.id
					}, a.a.createElement(J.a, {
						fireOnce: !0,
						viewportRoot: c,
						threshold: 1,
						rootMargin: "0px 0px -85px 0px",
						onEnter: f ? void 0 : Object(R.m)(!p, b),
						onEnterHandler: t => {
							f || d(new Set(l).add(e.id))
						}
					}, a.a.createElement(ae.a, {
						colorIndex: p && null != i ? i : t,
						isSelected: u,
						isSubtopic: p,
						key: e.id,
						onClickHandler: () => m(e, u, p, b),
						topic: b
					}), u && !!(null === (o = e.children) || void 0 === o ? void 0 : o.length) && a.a.createElement(ue, {
						interests: e.children,
						schemeName: n,
						selected: r,
						toggleSelection: s,
						topicColor: t,
						setViewedInterests: d,
						viewedInterests: l
					})))
				}))
			}, me = () => {
				const e = Object(ie.b)({
					isLoading: !0
				});
				return a.a.createElement(a.a.Fragment, null, Q()(30, t => a.a.createElement("div", {
					key: t,
					className: Object(d.a)(de.a.Placeholder, e)
				})))
			};
			var pe = e => {
					let {
						interests: t,
						schemeName: n,
						loadingInterests: r,
						selected: s,
						toggleSelection: i,
						viewportRoot: c
					} = e;
					const d = Object(x.a)();
					Object(o.useEffect)(() => {
						d(Object(R.q)())
					}, [d]);
					const [l, u] = Object(o.useState)(new Set);
					return a.a.createElement("div", {
						className: de.a.InterestListButtons
					}, r ? a.a.createElement(me, null) : a.a.createElement(ue, {
						interests: t,
						schemeName: n,
						selected: s,
						toggleSelection: i,
						viewportRoot: c,
						setViewedInterests: u,
						viewedInterests: l
					}))
				},
				be = n("./src/reddit/components/Onboarding/index.m.less"),
				fe = n.n(be);
			const {
				fbt: he
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var ge;
			! function(e) {
				e.AVATAR = "avatar", e.CELEBRATION = "celebration", e.COMMUNITIES = "communities", e.GENDER = "gender", e.INTERESTS = "interests"
			}(ge || (ge = {}));
			const xe = e => {
				let {
					activeStep: t,
					avatarImage: n,
					communitiesByTopic: r,
					fetchRandomAvatar: s,
					interests: i,
					loadingCommunities: c,
					loadingInterests: d,
					recommendedCommunities: l,
					selectedCommunities: u,
					selectedInterests: m,
					setSelectedCommunities: p,
					setSelectedInterests: b,
					selectedGenderOption: f,
					setSelectedGenderOption: h
				} = e;
				const g = Object(o.useRef)(null);
				Object(o.useEffect)(() => {
					var e, t;
					return null === (t = null === (e = g.current) || void 0 === e ? void 0 : e.scroll) || void 0 === t ? void 0 : t.call(e, 0, 0)
				}, [t]);
				const x = Object(o.useCallback)(e => {
						const t = u[e],
							n = {
								...u
							};
						t ? delete n[e] : n[e] = !0, p(n)
					}, [u, p]),
					v = Object(o.useCallback)((e, t) => {
						const n = {
								...u
							},
							s = e => e.forEach(e => {
								t ? n[e.id] = !0 : delete n[e.id]
							});
						if ("recommended" === e) s(l);
						else {
							const t = r.find(t => t.topicId === e);
							t && s(t.communities)
						}
						p(n)
					}, [r, l, u, p]),
					O = Object(o.useCallback)(e => {
						const {
							children: t,
							id: n
						} = e, r = m[n], s = {
							...m
						};
						r ? (delete s[n], r.forEach(e => delete s[e])) : s[n] = [...(null == t ? void 0 : t.map(e => e.id)) || []], b(s)
					}, [m, b]);
				return a.a.createElement("div", {
					className: fe.a.SelectedComponent,
					ref: g
				}, t === ge.GENDER && a.a.createElement(M, {
					selectedGenderOption: f,
					setSelectedGenderOption: h
				}), t === ge.INTERESTS && a.a.createElement(pe, {
					interests: i.topics,
					loadingInterests: d,
					schemeName: i.schemeName,
					selected: m,
					toggleSelection: O,
					viewportRoot: g.current
				}), t === ge.COMMUNITIES && a.a.createElement(oe, {
					communitiesByTopic: r,
					loadingCommunities: c,
					recommendedCommunities: l,
					schemeName: i.schemeName,
					selected: u,
					toggleAll: v,
					toggleSelection: x,
					viewportRoot: g.current
				}), t === ge.AVATAR && a.a.createElement(V, {
					avatarImage: n,
					fetchRandomAvatar: s
				}))
			};
			var ve = n("./src/reddit/constants/experiments.ts"),
				Oe = n("./src/reddit/constants/modals.ts"),
				Ee = n("./src/reddit/contexts/ApiContext.tsx"),
				Ce = n("./src/lib/makeGqlRequest/index.ts"),
				je = n("./node_modules/lodash/uniqBy.js"),
				_e = n.n(je),
				ke = n("./src/reddit/customMiddleware/recentSubreddits.ts"),
				ye = n("./src/reddit/endpoints/economics/specialMembership.ts"),
				Ne = n("./src/reddit/endpoints/subreddit/local.ts"),
				Ie = n("./src/reddit/endpoints/subreddit/subscriptions.ts");
			var Se = n("./src/reddit/models/Onboarding/index.ts"),
				we = n("./src/redditGQL/operations/InterestTopicsByIds.json");
			const Te = async (e, t) => {
				const n = await ((e, t) => {
					const n = {
						topicIds: [],
						schemeName: Se.b,
						maxSubreddits: 10,
						...t
					};
					return Object(Ce.a)(e, {
						...we,
						variables: n
					})
				})(e(), {
					topicIds: t
				});
				if (!n.ok) return null;
				const r = n.body,
					s = null == r ? void 0 : r.data.interestTopicsByIds;
				return s ? (e => (e => {
					let {
						edges: t
					} = e;
					const n = [];
					return t.forEach(e => {
						let {
							node: t
						} = e;
						var r, s, o;
						const a = [];
						null === (o = null === (s = null === (r = t.topic) || void 0 === r ? void 0 : r.subreddits) || void 0 === s ? void 0 : s.edges) || void 0 === o || o.forEach(e => {
							let {
								node: t
							} = e;
							t.isSubscribed || a.push((e => {
								let {
									id: t,
									prefixedName: n,
									publicDescriptionText: r,
									styles: s
								} = e;
								var o;
								return {
									description: r,
									icon: s.icon || (null === (o = s.legacyIcon) || void 0 === o ? void 0 : o.url),
									id: t,
									prefixedName: n
								}
							})(t))
						}), a.length && n.push({
							communities: a,
							topicId: t.id,
							topicTitle: t.topic.title
						})
					}), n
				})(e))(s) : null
			}, Re = e => {
				var t;
				return {
					description: e.publicDescription,
					icon: e.communityIcon || (null === (t = e.icon) || void 0 === t ? void 0 : t.url),
					id: e.id,
					isSubscribed: e.isSubscribed,
					prefixedName: e.displayText
				}
			}, Pe = async e => {
				var t;
				const n = await Object(Ne.b)(e(), {
					first: 10
				});
				if (n && (null === (t = null == n ? void 0 : n.rankings) || void 0 === t ? void 0 : t.length)) {
					const {
						rankings: e,
						subreddits: t
					} = n;
					return e.map(e => {
						let {
							id: n
						} = e;
						return Re(t[n])
					})
				}
				return null
			}, Le = async e => {
				const t = Object(ke.b)();
				if (null == t ? void 0 : t.length) {
					const n = t.map(e => e.id),
						r = await Object(ye.e)(e(), n);
					if (r.ok) return Object.values(r.body).map(Re)
				}
				return null
			};
			var Me = n("./src/reddit/helpers/graphql/normalizeInterestTopicsFromGql/index.ts"),
				Ge = n("./src/redditGQL/operations/InterestTopics.json"),
				Fe = n("./src/redditGQL/operations/UpdateTopicPreferences.json");
			const Ae = async e => {
				const t = await (e => {
					const t = {
						first: 500,
						maxChildren: 500,
						maxDepth: 2,
						schemeName: Se.b
					};
					return Object(Ce.a)(e, {
						...Ge,
						variables: t
					})
				})(e());
				if (!t.ok) return null;
				const n = t.body,
					r = null == n ? void 0 : n.data.interestTopics;
				return r ? Object(Me.a)(r) : null
			}, De = (e, t) => ((e, t) => Object(Ce.a)(e, {
				...Fe,
				variables: t
			}))(e(), {
				input: {
					selectedOnboardingTopicIds: t
				}
			});
			var Be = n("./src/reddit/helpers/counters/onboarding.ts"),
				qe = n("./src/reddit/helpers/onboarding/reonboarding.ts"),
				Ve = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				We = n("./src/reddit/icons/svgs/svgIcons.tsx"),
				Qe = n("./src/reddit/selectors/activeModal.ts"),
				He = n("./src/reddit/selectors/experiments/econ/index.ts"),
				Ue = n("./src/reddit/selectors/experiments/onboarding.ts"),
				ze = n("./src/reddit/selectors/experiments/survey.ts"),
				Ke = n("./src/reddit/selectors/onboarding.ts"),
				Je = n("./src/reddit/actions/accountGender/index.ts"),
				Xe = n("./src/reddit/actions/onboarding/index.ts");

			function Ze() {
				return (Ze = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: Ye
			} = n("./node_modules/fbt/lib/FbtPublic.js"), $e = e => e.type === Se.c.REONBOARDING, et = () => Object(p.f)({
				kind: v.b.Error,
				text: Ye._("Something went wrong", null, {
					hk: "22u7ha"
				})
			}), tt = async (e, t) => {
				const n = {
					ok: !0,
					preSelectedCommunities: {},
					recommendedCommunities: []
				};
				try {
					n.recommendedCommunities = await (async (e, t) => {
						const n = [Pe(t), Le(e)],
							[r, s] = await Promise.all(n);
						return _e()([...s || [], ...r || []], e => e.id).filter(e => !e.isSubscribed)
					})(e, t)
				} catch (r) {
					n.ok = !1
				}
				return n
			}, nt = async (e, t, n, r) => {
				const s = Object.keys(n),
					o = Object.keys(r),
					a = [],
					i = {
						ok: !0,
						reload: !1
					};
				if (s.length && a.push(((e, t) => Object(Ie.c)(e(), {
						subredditIds: t,
						subscribe: !0
					}))(e, s)), o.length && a.push(De(t, o)), a.length) try {
					(await Promise.all(a)).some(e => {
						let {
							ok: t
						} = e;
						return !t
					}) ? i.ok = !1 : i.reload = !0
				} catch (c) {
					i.ok = !1
				}
				return i
			}, rt = Object(c.a)(e => {
				const {
					gqlContext: t,
					apiContext: n
				} = e, r = Object(i.d)(), s = Object(x.a)(), c = Object(i.e)(Qe.a), p = $e(c), b = p ? ge.INTERESTS : ge.GENDER, [f, h] = Object(o.useState)(b), [v, O] = Object(o.useState)(null), C = Object(i.e)(Ke.a), [j, _] = Object(o.useState)(p), k = {
					topics: [],
					schemeName: void 0
				}, [N, S] = Object(o.useState)(k), [w, M] = Object(o.useState)(!1), [G, F] = Object(o.useState)($e(c) && (null == c ? void 0 : c.selectedInterests) || {}), [D, B] = Object(o.useState)(!1), [q, V] = Object(o.useState)([]), [W, Q] = Object(o.useState)([]), [H, U] = Object(o.useState)({}), {
					avatarImage: z,
					fetchRandomAvatar: K,
					saveAvatar: J
				} = E();
				Object(o.useEffect)(() => {
					(j || C) && async function() {
						M(!0);
						const e = await Ae(t);
						M(!1), e && S(e)
					}()
				}, [j, C, t]), Object(o.useEffect)(() => {
					C && Object(Be.a)(null == v ? void 0 : v.genderCategory, C.success)
				}, [C, v]);
				const X = Object(i.e)(Ue.a) === ve.jb.Removed;
				Object(o.useEffect)(() => {
					let e = !1;
					return async function() {
						let s = {
							ok: !0,
							preSelectedCommunities: {},
							recommendedCommunities: []
						};
						X || (s = await tt(n, t));
						const {
							ok: o,
							preSelectedCommunities: a,
							recommendedCommunities: i
						} = s;
						o ? e || (U(a), Q(i)) : r(et())
					}(), () => {
						e = !0
					}
				}, [n, r, t]);
				const Z = Object(i.e)(e => Object(ze.f)(e)),
					Y = Object(o.useCallback)(() => {
						r(Object(u.g)(Oe.a.ONBOARDING_MODAL_D2X)), Z && r(Object(m.g)()), p && (s(Object(R.o)()), Object(qe.a)())
					}, [r, p, Z, s]),
					$ = Object(o.useCallback)((function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e3;
						return setTimeout(Y, e)
					}), [Y]),
					ee = Object(o.useCallback)(() => {
						const e = Object.keys(G).filter(e => 0 === G[e].length || !G[e].find(e => G[e]));
						V([]), e.length && async function() {
							B(!0);
							const n = await Te(t, e);
							B(!1), n && V(n)
						}()
					}, [t, G]),
					te = Object(o.useCallback)(e => {
						M(!0), h(ge.INTERESTS), r(Object(Je.a)(e))
					}, [r]),
					ne = Object(o.useCallback)(async () => {
						s(Object(R.k)()), te(v || P)
					}, [te, v, s]),
					re = Object(o.useCallback)(async () => {
						s(Object(R.p)()), h(ge.COMMUNITIES), ee()
					}, [ee, s]),
					se = Object(o.useCallback)(async () => {
						s(Object(R.e)()), K(), h(ge.AVATAR);
						const e = await nt(n, t, H, G);
						e.ok ? e.reload && r(Object(l.frontpageReloaded)()) : r(et())
					}, [n, r, K, t, H, G, s]),
					oe = Object(o.useCallback)(() => {
						h(ge.CELEBRATION), $()
					}, [$]),
					ae = Object(o.useCallback)(() => {
						J(), oe()
					}, [J, oe]),
					ie = (() => f === ge.GENDER ? ne : f === ge.INTERESTS ? re : f === ge.COMMUNITIES ? se : ae)(),
					ce = Object(i.e)(e => f === ge.AVATAR && !p && Object(He.c)(e));
				Object(o.useEffect)(() => {
					f !== ge.AVATAR || ce || oe()
				}, [ce, f, oe]);
				const de = f !== b,
					le = Object(o.useCallback)(() => {
						f === ge.INTERESTS ? (r(Object(Xe.resetGenderUpdateState)()), _(!1), h(ge.GENDER)) : f === ge.COMMUNITIES ? h(ge.INTERESTS) : f === ge.AVATAR && h(ge.COMMUNITIES)
					}, [f, r]),
					ue = f === ge.GENDER || f === ge.AVATAR,
					me = Object(o.useCallback)(() => {
						f === ge.GENDER ? (s(Object(R.j)()), _(!0), h(ge.INTERESTS)) : f === ge.INTERESTS ? (s(Object(R.o)()), Y()) : f === ge.AVATAR && (s(Object(g.a)("skip")), oe())
					}, [Y, s, f, oe]),
					pe = Object.keys(H).length,
					be = Object.keys(G).length,
					he = f === ge.GENDER && !(e => !!e && (!L(null == e ? void 0 : e.genderCategory) || !!(e.definedGender && e.definedGender.length <= I.b)))(v) || f === ge.INTERESTS && be < (p ? 1 : 3) || f === ge.COMMUNITIES && pe < 1;
				if (f === ge.CELEBRATION || f === ge.AVATAR && !ce) return a.a.createElement(y, null);
				let Ee;
				return p ? Ee = a.a.createElement("button", {
					"aria-label": Ye._("Close", null, {
						hk: "3XndV9"
					}),
					className: fe.a.dismissButton,
					onClick: Y
				}, a.a.createElement(A.a, {
					name: "close"
				})) : ue && (Ee = a.a.createElement("button", {
					className: fe.a.skipButton,
					onClick: me
				}, Ye._("Skip", null, {
					hk: "2S8Lme"
				}))), a.a.createElement("div", {
					className: fe.a.container
				}, a.a.createElement("header", {
					className: fe.a.header
				}, a.a.createElement("div", {
					className: fe.a.headerBar
				}, a.a.createElement("div", null, de && a.a.createElement(We.d, {
					className: fe.a.backButton,
					onClick: le
				})), a.a.createElement(Ve.a, {
					className: fe.a.snooIcon
				}), a.a.createElement("div", {
					className: fe.a.skipOrDismissContainer
				}, Ee)), f === ge.GENDER && a.a.createElement("div", {
					className: `${fe.a.title} ${T.a.title}`
				}, Ye._("Which of the following best describes you?", null, {
					hk: "2hsRwl"
				})), f === ge.INTERESTS && a.a.createElement("div", {
					className: fe.a.title
				}, Ye._("What are you into?", null, {
					hk: "2hUwMd"
				})), f === ge.COMMUNITIES && a.a.createElement("div", {
					className: fe.a.title
				}, Ye._("Join some communities", null, {
					hk: "1iB29u"
				})), f === ge.AVATAR && a.a.createElement("div", {
					className: fe.a.title
				}, Ye._("Style your avatar", null, {
					hk: "15i2ld"
				})), f === ge.GENDER && a.a.createElement("div", {
					className: T.a.subtitle
				}, Ye._("Reddit will never share this information and uses it to improve what content you see.", null, {
					hk: "4ievQt"
				})), f === ge.INTERESTS && a.a.createElement("div", {
					className: fe.a.subtitle
				}, p ? Ye._("Select topics to continue", null, {
					hk: "2LhE4e"
				}) : Ye._("Select three topics to continue", null, {
					hk: "oHYeb"
				})), f === ge.AVATAR && a.a.createElement("div", {
					className: fe.a.subtitle
				}, Ye._("This is how people will see you on Reddit.", null, {
					hk: "2SmAiC"
				}), a.a.createElement("br", null), Ye._("(You can change it later if you’d like.)", null, {
					hk: "1x9ZNL"
				}))), a.a.createElement(xe, {
					activeStep: f,
					avatarImage: z,
					communitiesByTopic: q,
					fetchRandomAvatar: K,
					interests: N,
					loadingCommunities: D,
					loadingInterests: w,
					recommendedCommunities: W,
					selectedCommunities: H,
					selectedGenderOption: v,
					selectedInterests: G,
					setSelectedCommunities: U,
					setSelectedGenderOption: O,
					setSelectedInterests: F
				}), a.a.createElement("div", {
					className: Object(d.a)(fe.a.continueButtonWrapper, {
						[fe.a.avatarPicker]: f === ge.AVATAR
					})
				}, a.a.createElement("button", {
					className: fe.a.continueButton,
					disabled: he,
					onClick: ie
				}, Ye._("Continue", null, {
					hk: "15wNPy"
				}))))
			});
			t.default = Object(Ee.b)(e => a.a.createElement(rt, Ze({}, e, {
				className: Object(d.a)(e.className, fe.a.modal),
				onOverlayClick: s.a,
				overlayClassName: fe.a.overlay
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
				skipOrDismissContainer: "_1m0iFpls1wkPZJVo38-LSh",
				skipButton: "_22ChQI9alXTuxk7yqwRt8l",
				continueButtonWrapper: "_1WVJEpE8EJml0oUkHbpF4R",
				avatarPicker: "_1lW2GsLAoo81KdU6SFWdTW",
				continueButton: "dK60vCQAai2JPR7mVZ4ir",
				SelectedComponent: "_1_rW7Yn-zqDSJD9D5Kd02K",
				selectedComponent: "_1_rW7Yn-zqDSJD9D5Kd02K"
			}
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				tooltip: "ki2VbfBhU-qxg1S6VyET6",
				above: "_8fNGSBGvr1Ds8PbrsUGzN",
				below: "_38gWvHp3NJkR5r5ftUfbFG",
				HoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2",
				hoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2"
			}
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less"),
				c = n.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = a.a.wrapped(e => {
				const {
					children: t,
					className: n,
					renderBelow: r,
					text: a,
					tooltipContentClass: i,
					...l
				} = e;
				return s.a.createElement("div", d({}, l, {
					className: Object(o.a)(c.a.container, n)
				}), a ? s.a.createElement("div", {
					className: Object(o.a)(c.a.tooltip, i, r ? c.a.below : c.a.above)
				}, a) : null, t)
			}, "HoverTooltip", c.a)
		},
		"./src/reddit/components/Settings/GenderCollection/Modal.m.less": function(e, t, n) {
			e.exports = {
				container: "eArEE0EdVdSMkd7iEV45z",
				customGenderInput: "_1qBFv0dRlNFrIa57ldyC1R"
			}
		},
		"./src/reddit/components/Settings/GenderCollection/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2CwwEMfiOvbI7QZVoQ6lQQ"
			}
		},
		"./src/reddit/components/Settings/GenderCollection/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return E
			})), n.d(t, "a", (function() {
				return C
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = n("./src/reddit/controls/FormFields/index.tsx"),
				l = n("./src/reddit/controls/TextButton/index.tsx"),
				u = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				m = n("./src/reddit/models/Gender/index.ts"),
				p = n("./src/reddit/components/Settings/GenderCollection/Modal.m.less"),
				b = n.n(p);
			class f extends o.a.Component {
				constructor(e) {
					super(e), this.handleCustomGenderChange = e => {
						const t = e.target.value || "";
						this.setState({
							customGenderInput: t
						})
					}, this.handleSubmit = async () => {
						const {
							onCloseModal: e,
							onConfirmModal: t
						} = this.props, {
							customGenderInput: n
						} = this.state;
						this.setState({
							isPending: !0
						}), await t(n), e()
					}, this.inputsAreValid = () => {
						const e = this.state.customGenderInput.trim();
						return e.length > 0 && e.length <= m.b
					}, this.state = {
						customGenderInput: e.definedGender || "",
						isPending: !1
					}
				}
				render() {
					const {
						className: e,
						onCloseModal: t
					} = this.props, {
						customGenderInput: n,
						isPending: s
					} = this.state;
					return o.a.createElement("section", {
						className: Object(i.a)(e, b.a.container)
					}, o.a.createElement(c.i, null, o.a.createElement(u.a, null, o.a.createElement(c.q, null, r.fbt._("I refer to myself as...", null, {
						hk: "4x0fpA"
					})), o.a.createElement(l.a, {
						onClick: t,
						disabled: s
					}, o.a.createElement(c.b, null)))), o.a.createElement(c.l, null, o.a.createElement(d.b, {
						placeholder: r.fbt._("Gender identity", null, {
							hk: "4lT15L"
						}),
						className: b.a.customGenderInput,
						disabled: s,
						maxLength: m.b,
						name: "customGender",
						onChange: this.handleCustomGenderChange,
						type: "text",
						value: n
					})), o.a.createElement(c.g, null, o.a.createElement(c.a, {
						onClick: t,
						disabled: s
					}, r.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(c.r, {
						disabled: !this.inputsAreValid() || s,
						onClick: this.handleSubmit
					}, r.fbt._("Confirm", null, {
						hk: "2eSs27"
					}))))
				}
			}
			var h = Object(a.a)(f),
				g = n("./src/reddit/components/Settings/shared/Dropdown/index.tsx"),
				x = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				v = n("./src/reddit/components/Settings/GenderCollection/index.m.less"),
				O = n.n(v);
			const E = () => [{
				key: m.a.FEMALE,
				displayText: r.fbt._("Woman", null, {
					hk: "3XLHa2"
				})
			}, {
				key: m.a.MALE,
				displayText: r.fbt._("Man", null, {
					hk: "1vgSwC"
				})
			}, {
				key: m.a.NON_BINARY,
				displayText: r.fbt._("Non-binary", null, {
					hk: "1d5O8v"
				})
			}, {
				key: m.a.USER_DEFINED,
				displayLabel: r.fbt._("Custom", null, {
					hk: "rTcBl"
				}),
				displayText: r.fbt._("I refer to myself as...", null, {
					hk: "3RVNst"
				})
			}, {
				key: m.a.OPT_OUT,
				displayText: r.fbt._("I prefer not to say", null, {
					hk: "UCJJ9"
				})
			}];
			class C extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isCustomGenderModalOpen: !1,
						pending: !1,
						tmpSelected: this.props.selected
					}, this.onSelect = async e => {
						const {
							onChange: t
						} = this.props, n = e.key;
						if (n === m.a.USER_DEFINED) return void this.openCustomGenderModal();
						const r = {
							definedGender: null,
							genderCategory: n
						};
						this.setState({
							pending: !0,
							tmpSelected: r
						}), await t(r), this.setState({
							pending: !1
						})
					}, this.onConfirmModal = async e => {
						const {
							onChange: t
						} = this.props, n = {
							definedGender: e,
							genderCategory: m.a.USER_DEFINED
						};
						await t(n)
					}, this.openCustomGenderModal = () => {
						this.setState({
							isCustomGenderModalOpen: !0
						})
					}, this.closeCustomGenderModal = () => {
						this.setState({
							isCustomGenderModalOpen: !1
						})
					}
				}
				render() {
					const {
						isCustomGenderModalOpen: e,
						pending: t,
						tmpSelected: n
					} = this.state, {
						selected: s
					} = this.props, {
						definedGender: a,
						genderCategory: i
					} = {
						...t ? n : s
					};
					return o.a.createElement(x.c, {
						label: r.fbt._("Gender", null, {
							hk: "1spCV5"
						}),
						subtext: r.fbt._("Reddit will never share this information and only uses it to improve what content you see.", null, {
							hk: "1PqDkg"
						})
					}, o.a.createElement("div", {
						className: O.a.wrapper
					}, o.a.createElement(g.a, {
						dropdownId: "gender-dropdown-id",
						items: E(),
						onSelect: this.onSelect,
						placeholder: r.fbt._("Select", null, {
							hk: "1zIGi5"
						}),
						selectedKey: i || ""
					})), e && o.a.createElement(h, {
						onCloseModal: this.closeCustomGenderModal,
						definedGender: a || "",
						onConfirmModal: this.onConfirmModal,
						onOverlayClick: this.closeCustomGenderModal,
						withOverlay: !0
					}))
				}
			}
		},
		"./src/reddit/components/Settings/shared/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2OI2GNt8U_hqISJzbsrb0Y",
				labelWrapper: "Mw10gImD3M_Xbm-yM9eyH",
				dropdownRow: "_183U1ds639-b2Av2n7Mdt_"
			}
		},
		"./src/reddit/components/Settings/shared/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/asTooltip.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/controls/Dropdown/index.tsx"),
				u = n("./src/reddit/controls/Dropdown/Row.tsx"),
				m = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				p = n("./src/reddit/selectors/tooltip.ts"),
				b = n("./src/reddit/components/Settings/shared/Dropdown/index.m.less"),
				f = n.n(b);
			const h = Object(i.a)(l.a),
				g = Object(a.c)({
					isDropdownOpen: (e, t) => Object(p.b)(t.dropdownId)(e)
				}),
				x = Object(o.b)(g, (e, t) => ({
					openDropdown: () => {
						e(Object(d.h)({
							tooltipId: t.dropdownId
						}))
					}
				}));
			class v extends s.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onToggleDropdown = () => {
						this.props.openDropdown()
					}, this.renderLabel = e => s.a.createElement(u.b, {
						className: f.a.dropdownRow,
						displayText: e.displayLabel || e.displayText,
						isSelected: !0,
						key: e.key,
						noHover: !0,
						noIcon: !e.icon
					}, e.contentJsx || e.icon), this.renderDropdownItem = (e, t) => s.a.createElement(u.b, {
						displayText: e.displayText,
						isSelected: t,
						key: e.key,
						noIcon: !e.icon,
						onClick: () => this.props.onSelect(e)
					}, e.contentJsx || e.icon)
				}
				render() {
					const {
						props: e
					} = this, {
						items: t,
						placeholder: n,
						renderLabel: r = this.renderLabel,
						renderItem: o = this.renderDropdownItem,
						selectedKey: a,
						dropdownId: i
					} = this.props, d = n && {
						displayLabel: n,
						key: n
					}, l = t.find(e => e.key === a) || d || t[0];
					return s.a.createElement("div", {
						ref: this.setTooltipTargetRef,
						className: Object(c.a)(f.a.container, e.className),
						onClick: this.onToggleDropdown,
						"data-testid": i
					}, s.a.createElement("div", {
						className: f.a.labelWrapper
					}, r(l), s.a.createElement("span", null, s.a.createElement(m.b, null))), s.a.createElement(h, {
						tooltipTarget: this.tooltipTarget,
						isOpen: this.props.isDropdownOpen,
						renderContentsHidden: !0
					}, t.map(e => o(e, a === e.key))))
				}
			}
			t.a = x(v)
		},
		"./src/reddit/components/Settings/shared/Widgets.m.less": function(e, t, n) {
			e.exports = {
				Label: "asxizthf5kZpmoY27VBKd",
				label: "asxizthf5kZpmoY27VBKd",
				HoverTooltip: "_1qQQ7O7znXpzgcC5RgQFtW",
				hoverTooltip: "_1qQQ7O7znXpzgcC5RgQFtW",
				ControlContainer: "_1kylDjSQ2hay_ez0zF7BEP",
				controlContainer: "_1kylDjSQ2hay_ez0zF7BEP",
				TextContainer: "_3dLmvT0hpACHFxhncqzCOr",
				textContainer: "_3dLmvT0hpACHFxhncqzCOr",
				inModal: "_2O2JPVgOlh8J6OW_9ur4BQ",
				ActionContainer: "_1oREjd5ToMFah-VfX5Zt1z",
				actionContainer: "_1oREjd5ToMFah-VfX5Zt1z",
				Wrapper: "_2f63as5b5FASHMqGd5P1o0",
				wrapper: "_2f63as5b5FASHMqGd5P1o0",
				isCreateCommunity: "_38bDTwLcytTCF-174R0UXB",
				mColumn: "_1HH_g-CLQB1BPcqOhZcakt",
				mLast: "_3Lu6XJyVbSLDVKDx-wue2g",
				mIndent: "_2D65jEbgD16ae_sJ8BG4AD",
				mDisabled: "LvI7FSBTGgYo2skaf18Zv",
				Subtext: "_1NdK7EwgYqUxJObBr3ym4o",
				subtext: "_1NdK7EwgYqUxJObBr3ym4o",
				RangeSlider: "_2J8tywkkd4Gotm3jZ2Gcv0",
				rangeSlider: "_2J8tywkkd4Gotm3jZ2Gcv0",
				isNightModeOn: "KUWYDFs7fIjkQNSOL_BR6",
				Wrapper__LineBreak: "wVinKyEoajEmwhqwINYGd",
				wrapperLineBreak: "wVinKyEoajEmwhqwINYGd",
				ActionHintText: "_2sMk-Gi9c8T3BKYlxSopql",
				actionHintText: "_2sMk-Gi9c8T3BKYlxSopql",
				Link: "oFObIzV6ZJDQuG09BXh8u",
				link: "oFObIzV6ZJDQuG09BXh8u",
				SubtextLink: "_3MGA27y-8plrsOsPbyYwgs",
				subtextLink: "_3MGA27y-8plrsOsPbyYwgs",
				LinkIcon: "_3gg7WkHbAGiySOBOzb9k6F",
				linkIcon: "_3gg7WkHbAGiySOBOzb9k6F",
				LinkButton: "_3I7YVr4pIJiOGmmJdgsEXK",
				linkButton: "_3I7YVr4pIJiOGmmJdgsEXK",
				ArrowRight: "_1oH-o0mDV86imeLnyfmCiD",
				arrowRight: "_1oH-o0mDV86imeLnyfmCiD",
				NoColor: "mI7WmWMma8pZnlYRHtE56",
				noColor: "mI7WmWMma8pZnlYRHtE56",
				StyledFlair: "_1F2irboi-xRChkhyndP6ct",
				styledFlair: "_1F2irboi-xRChkhyndP6ct",
				SpoilerFlair: "_3mkE4WZP2_bhfSQvrpeIka",
				spoilerFlair: "_3mkE4WZP2_bhfSQvrpeIka",
				NSFWFlair: "_1mPvZAvMvenP80lJ1RnQdE",
				nsfwFlair: "_1mPvZAvMvenP80lJ1RnQdE",
				DropdownWrapper: "_1D4YEzJAywC1b-Jx_on2cZ",
				dropdownWrapper: "_1D4YEzJAywC1b-Jx_on2cZ",
				DropdownRow: "_1ekKroexYAQllqx2MfTHbi",
				dropdownRow: "_1ekKroexYAQllqx2MfTHbi",
				Row: "_1QNl7IkO4tmBTG1Cp8_ZBk",
				row: "_1QNl7IkO4tmBTG1Cp8_ZBk",
				DropdownTriangle: "_2VFl8Aqe76Ulg9-x85FKpH",
				dropdownTriangle: "_2VFl8Aqe76Ulg9-x85FKpH",
				DescriptionsRow: "H3CGfLrRo4H9tQdWd5vG9",
				descriptionsRow: "H3CGfLrRo4H9tQdWd5vG9",
				Circle: "_20H2GFMG6B0Lai4Q3DhIE2",
				circle: "_20H2GFMG6B0Lai4Q3DhIE2",
				RangeSliderInput: "_2ieOPsoffMpHmDwvrKLRjg",
				rangeSliderInput: "_2ieOPsoffMpHmDwvrKLRjg",
				Ticks: "_3BLGt0e8kYgLHkUbAeXTWG",
				ticks: "_3BLGt0e8kYgLHkUbAeXTWG",
				TickText: "_1hEYjTFCxEu2ILobPvatAp",
				tickText: "_1hEYjTFCxEu2ILobPvatAp",
				PreSubText: "_2_hv6QgJ151j9WmCyETVfC",
				preSubText: "_2_hv6QgJ151j9WmCyETVfC",
				MultiLineInputSettingsBottomRow: "hgvQ7UQa9_0jmXSzQjqhF",
				multiLineInputSettingsBottomRow: "hgvQ7UQa9_0jmXSzQjqhF",
				ActionLinkContainer: "e4RehzaESS5nfk-O6pYoK",
				actionLinkContainer: "e4RehzaESS5nfk-O6pYoK",
				input: "_14_SnmD6g3FrozcKjTpqoH",
				tag: "_1GQzFyg5xYq94euL74ZaeJ"
			}
		},
		"./src/reddit/components/Settings/shared/Widgets.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "n", (function() {
				return Q
			})), n.d(t, "k", (function() {
				return J
			})), n.d(t, "o", (function() {
				return Z
			})), n.d(t, "f", (function() {
				return $
			})), n.d(t, "l", (function() {
				return te
			})), n.d(t, "m", (function() {
				return oe
			})), n.d(t, "p", (function() {
				return ae
			})), n.d(t, "j", (function() {
				return pe
			})), n.d(t, "b", (function() {
				return be
			})), n.d(t, "g", (function() {
				return fe
			})), n.d(t, "a", (function() {
				return he
			})), n.d(t, "d", (function() {
				return xe
			})), n.d(t, "i", (function() {
				return ve
			})), n.d(t, "c", (function() {
				return Oe
			})), n.d(t, "e", (function() {
				return Ee
			})), n.d(t, "h", (function() {
				return Ce
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-uid/dist/es2015/hooks.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/higherOrderComponents/asTooltip.tsx"),
				u = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				m = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				p = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				b = n("./src/reddit/controls/Dropdown/index.tsx"),
				f = n("./src/reddit/controls/Dropdown/Row.tsx"),
				h = n("./src/reddit/controls/FormFields/index.tsx"),
				g = n("./src/lib/lessComponent.tsx"),
				x = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				v = n("./src/reddit/controls/Select/index.m.less"),
				O = n.n(v);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const C = g.a.span("Wrapper", O.a),
				j = g.a.select("Inner", O.a),
				_ = g.a.wrapped(x.b, "Caret", O.a);

			function k(e) {
				let {
					className: t,
					innerClassName: n,
					...r
				} = e;
				const o = r.disabled ? {
					"data-disabled": r.disabled
				} : {};
				return s.a.createElement(C, {
					className: t
				}, s.a.createElement(j, E({
					className: n
				}, r)), s.a.createElement(_, E({
					isSubreddit: !0
				}, o)))
			}
			var y = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				N = n("./src/reddit/controls/Typography/index.tsx"),
				I = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				S = n("./src/reddit/icons/svgs/Circle/index.tsx"),
				w = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				T = n("./node_modules/lodash/range.js"),
				R = n.n(T),
				P = n("./src/reddit/controls/Button/index.tsx"),
				L = n("./src/reddit/layout/row/Inline/index.tsx"),
				M = n("./src/reddit/models/Flair/index.ts"),
				G = n("./src/reddit/selectors/tooltip.ts"),
				F = n("./src/reddit/selectors/user.ts"),
				A = n("./src/reddit/components/Settings/shared/Widgets.m.less"),
				D = n.n(A);

			function B() {
				return (B = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const q = Object(l.a)(b.a),
				V = g.a.wrapped(S.a, "Circle", D.a),
				W = g.a.h3("Label", D.a),
				Q = g.a.wrapped(N.c, "Subtext", D.a),
				H = g.a.wrapped(m.a, "HoverTooltip", D.a),
				U = g.a.div("ControlContainer", D.a),
				z = g.a.div("TextContainer", D.a),
				K = g.a.div("ActionContainer", D.a),
				J = e => {
					let {
						className: t,
						direction: n,
						isCreateCommunity: r,
						inModal: o,
						isNightModeOn: a,
						disabled: i,
						indent: d,
						last: l,
						...u
					} = e;
					return s.a.createElement("div", B({}, u, {
						className: Object(c.a)(D.a.Wrapper, t, {
							[D.a.mColumn]: "column" === n,
							[D.a.mDisabled]: !!i,
							[D.a.mIndent]: !!d,
							[D.a.mLast]: !!l,
							[D.a.isCreateCommunity]: !!r,
							[D.a.inModal]: !!o,
							[D.a.isNightModeOn]: !!a
						})
					}))
				},
				X = g.a.a("Link", D.a),
				Z = g.a.wrapped(X, "SubtextLink", D.a),
				Y = g.a.wrapped(w.a, "LinkIcon", D.a),
				$ = g.a.button("LinkButton", D.a),
				ee = g.a.wrapped(I.a, "ArrowRight", D.a),
				te = e => s.a.createElement(J, {
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					isCreateCommunity: e.isCreateCommunity,
					last: e.last
				}, s.a.createElement(z, {
					className: e.textContainerClassName
				}, s.a.createElement(W, null, e.label, e.isRequired && s.a.createElement(V, null)), s.a.createElement(Q, null, e.subtext)), s.a.createElement(K, null, e.children)),
				ne = g.a.div("StyledFlair", D.a),
				re = g.a.wrapped(ne, "SpoilerFlair", D.a),
				se = g.a.wrapped(ne, "NSFWFlair", D.a),
				oe = e => {
					switch (e.flair) {
						case M.f.Nsfw:
							return s.a.createElement(se, null, "NSFW");
						case M.f.Spoiler:
							return s.a.createElement(re, null, "SPOILER");
						default:
							return null
					}
				},
				ae = e => {
					const t = Object(a.a)();
					return s.a.createElement(J, {
						className: e.className,
						disabled: e.disabled,
						indent: e.indent,
						last: e.last
					}, s.a.createElement(z, null, s.a.createElement(L.a, null, s.a.createElement("label", {
						htmlFor: t
					}, s.a.createElement(W, null, e.label))), s.a.createElement(Q, null, e.subtext)), s.a.createElement(K, null, s.a.createElement(U, null, e.tooltip && s.a.createElement(H, {
						tooltipContentClass: e.tooltipContentClassName,
						text: e.tooltip
					}), s.a.createElement(y.a, {
						id: t,
						on: e.on,
						forceOn: e.forceOn,
						onToggle: e.onClick,
						disabled: e.disabled
					}))))
				},
				ie = g.a.input("RangeSliderInput", D.a),
				ce = g.a.div("RangeSlider", D.a),
				de = g.a.div("Ticks", D.a),
				le = g.a.div("TickText", D.a),
				ue = g.a.div("PreSubText", D.a),
				me = Object(i.c)({
					isNightModeOn: F.eb
				}),
				pe = Object(o.b)(me)(e => s.a.createElement(J, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled,
					inModal: e.inModal,
					isNightModeOn: e.isNightModeOn,
					direction: e.direction,
					className: e.className
				}, s.a.createElement(z, {
					style: {
						flex: 5
					}
				}, !e.inModal && s.a.createElement(L.a, null, s.a.createElement(W, null, e.label)), !e.hideSubtext && s.a.createElement(Q, null, " ", s.a.createElement(ue, {
					style: {
						color: e.ticks[e.value].color
					}
				}, " ", e.ticks[e.value].text + ": ", " "), " ", e.subtext)), s.a.createElement(K, {
					style: {
						flex: 3,
						margin: "20px 20px 0 0"
					}
				}, s.a.createElement(ce, null, s.a.createElement(ie, {
					style: {
						background: "linear-gradient(to right, " + R()(1, e.max + 1).map((t, n) => t <= e.value ? `${e.ticks[e.value].color} ${(t-1)/e.max*100}%,\n                    ${e.ticks[e.value].color} ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : t !== e.max ? `#c5c5c5 ${(t-1)/e.max*100}%, #c5c5c5 ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : `#c5c5c5 ${(t-1)/e.max*100}%`) + ", #C5C5C5 100%)"
					},
					className: "range-slider-input",
					type: "range",
					min: e.min,
					max: e.max,
					step: e.step,
					value: e.value,
					onChange: e.onChange,
					onInput: e.onChange,
					disabled: e.disabled
				}), s.a.createElement(de, null, Object.keys(e.ticks).map((t, n) => s.a.createElement(le, {
					key: t,
					style: {
						color: t === e.value.toString() ? e.ticks[t].color : "#878A8C"
					}
				}, e.ticks[t].text))))))),
				be = e => s.a.createElement(J, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, s.a.createElement(z, null, s.a.createElement(L.a, null, s.a.createElement(W, null, e.label)), s.a.createElement(Q, null, e.subtext)), s.a.createElement(K, null, s.a.createElement(U, null, s.a.createElement(P.o, {
					onClick: e.onClick
				}, e.actionText)))),
				fe = e => s.a.createElement(J, {
					className: e.className,
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, s.a.createElement(z, null, s.a.createElement(X, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, e.label, s.a.createElement(Y, null)), s.a.createElement(Q, null, e.subtext)), s.a.createElement(K, null, s.a.createElement(X, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, s.a.createElement(ee, null)))),
				he = e => s.a.createElement(J, {
					className: e.className,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, s.a.createElement(z, null, s.a.createElement($, {
					onClick: e.onClick,
					className: Object(c.a)({
						[D.a.NoColor]: e.color && "none" === e.color
					})
				}, e.label), s.a.createElement(Q, null, e.subtext)), s.a.createElement(K, null, !!e.hintText && s.a.createElement("div", {
					className: D.a.ActionHintText
				}, e.hintText), s.a.createElement($, {
					onClick: e.onClick,
					className: Object(c.a)({
						[D.a.NoColor]: e.color && "none" === e.color
					})
				}, s.a.createElement(ee, {
					className: Object(c.a)({
						[D.a.NoColor]: e.color && "none" === e.color
					})
				})))),
				ge = Object(i.c)({
					isOpen: (e, t) => Object(G.b)(t.id)(e)
				}),
				xe = Object(o.b)(ge, (e, t) => ({
					openDropdown: () => {
						e(Object(d.h)({
							tooltipId: t.id
						}))
					}
				}))(e => s.a.createElement(J, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, s.a.createElement(z, null, s.a.createElement(W, null, e.label), s.a.createElement(Q, null, e.subtext)), s.a.createElement(K, null, (e => s.a.createElement("div", {
					className: D.a.DropdownWrapper,
					onClick: e.openDropdown
				}, s.a.createElement("span", {
					className: D.a.Row,
					id: `SettingDropdown--${e.id}`
				}, e.displayTitle || e.selected), s.a.createElement(x.b, {
					className: D.a.DropdownTriangle
				}), s.a.createElement(q, {
					container: void 0,
					isOpen: e.isOpen,
					renderContentsHidden: !0,
					isOverlay: !1,
					tooltipId: `SettingDropdown--${e.id}`
				}, e.items.map((t, n) => s.a.createElement(f.b, {
					className: D.a.DropdownRow,
					displayText: e.displayItems ? e.displayItems[n] : t,
					isSelected: e.selected === t,
					onClick: () => e.onClick(t),
					key: "row--" + n,
					item: t
				}))), e.descriptions && s.a.createElement("div", {
					className: D.a.DescriptionsRow
				}, e.descriptions[e.items.indexOf(e.selected)] || e.displayItems && e.descriptions[e.displayItems.indexOf(e.selected)])))(e)))),
				ve = e => {
					let {
						disabled: t,
						last: n,
						onClick: o,
						onChange: a,
						...i
					} = e;
					const c = Object(r.useCallback)(e => a(e.target.value), [a]),
						{
							items: d
						} = i;
					return s.a.createElement(J, {
						disabled: t
					}, s.a.createElement(z, null, s.a.createElement("label", {
						htmlFor: i.id
					}, s.a.createElement(W, {
						className: i.labelClassname
					}, i.label)), s.a.createElement(Q, null, i.subtext)), s.a.createElement("div", {
						className: D.a.Wrapper__LineBreak
					}), s.a.createElement(J, {
						last: n,
						indent: !0,
						disabled: t
					}, s.a.createElement(k, {
						id: i.id,
						className: "redditStyle",
						disabled: t || i.inputDisabled,
						onChange: c,
						value: i.selected
					}, d.map(e => {
						let {
							value: t,
							displayName: n
						} = e;
						return s.a.createElement("option", {
							key: t,
							value: t
						}, n)
					}))))
				},
				Oe = e => s.a.createElement(J, {
					className: e.className,
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, s.a.createElement(z, null, s.a.createElement(W, null, e.label), s.a.createElement(Q, null, e.subtext)), s.a.createElement(K, null, e.children)),
				Ee = e => s.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, e.isCreateCommunity && s.a.createElement("span", {
					className: D.a.tag
				}, "r/"), s.a.createElement(h.a, {
					className: e.isCreateCommunity ? D.a.input : void 0,
					disabled: !!e.disabled,
					onChange: e.onChange,
					placeholder: e.placeholder,
					maxLength: e.maxChars,
					type: "text",
					value: e.value,
					onBlur: e.onBlur
				}), !e.hideCountdown && s.a.createElement(u.a, {
					maxChars: e.maxChars,
					text: e.value
				})),
				Ce = e => s.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, s.a.createElement(p.i, {
					disabled: !1,
					onChange: e.onChange,
					onFocus: e.onFocus,
					placeholder: e.placeholder,
					maxLength: e.maxChars,
					rows: e.rows || 4,
					style: {
						marginBottom: e.isCreateCommunity ? "4px" : 0,
						resize: e.isCreateCommunity ? "vertical" : "both"
					},
					value: e.value,
					onBlur: e.onBlur
				}), s.a.createElement("div", {
					className: D.a.MultiLineInputSettingsBottomRow
				}, !e.hideCountdown && s.a.createElement(u.a, {
					maxChars: e.maxChars,
					text: e.value || ""
				}), !!e.actionLink && s.a.createElement("div", {
					className: D.a.ActionLinkContainer
				}, e.actionLink)))
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, n) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				breadcrumbTitle: "_24r4TaTKqNLBGA3VgswFrN",
				HomePageGroup: "_306gA2lxjCHX44ssikUp3O",
				homePageGroup: "_306gA2lxjCHX44ssikUp3O",
				FormPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				formPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				FormPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				formPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				FormGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				formGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				FormGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				formGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				FormElement: "c5RWd-O3CYE-XSLdTyjtI",
				formElement: "c5RWd-O3CYE-XSLdTyjtI",
				FormGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				formGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				FormItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				formItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				FormElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				formElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				FormElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				formElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				FormElementError: "horIoLCod23xkzt7MmTpC",
				formElementError: "horIoLCod23xkzt7MmTpC",
				FormElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				formElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				FormListItem: "_2M7LQbQxH40ingJ9h9RslL",
				formListItem: "_2M7LQbQxH40ingJ9h9RslL"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return a
			})), n.d(t, "p", (function() {
				return i
			})), n.d(t, "n", (function() {
				return c
			})), n.d(t, "o", (function() {
				return d
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "j", (function() {
				return E
			}));
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				o = n.n(s);
			const a = r.a.section("FormPage", o.a),
				i = r.a.h1("HomePageTitle", o.a),
				c = r.a.button("HomePageBreadcrumb", o.a),
				d = r.a.div("HomePageGroup", o.a),
				l = r.a.h1("FormPageTitle", o.a),
				u = r.a.div("FormPageSection", o.a),
				m = r.a.div("FormGroup", o.a),
				p = r.a.h2("FormGroupTitle", o.a),
				b = r.a.div("FormElement", o.a),
				f = r.a.div("FormGroupDescription", o.a),
				h = r.a.div("FormItem", o.a),
				g = r.a.h3("FormElementTitle", o.a),
				x = r.a.div("FormElementDescription", o.a),
				v = r.a.div("FormElementError", o.a),
				O = r.a.div("FormElementSubGroup", o.a),
				E = r.a.li("FormListItem", o.a)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less": function(e, t, n) {
			e.exports = {
				ModalInput: "_2-UQO_nq1P8ACGIq0yZJRz",
				modalInput: "_2-UQO_nq1P8ACGIq0yZJRz",
				Input: "_1BJV17HgWhhC-BxrpqGjM",
				input: "_1BJV17HgWhhC-BxrpqGjM",
				Checkbox: "_29ZBtSa05ZCR4Sj1modCls",
				checkbox: "_29ZBtSa05ZCR4Sj1modCls",
				CheckboxSelected: "_1UmPxfh5dZu-x2VK6n61BM",
				checkboxSelected: "_1UmPxfh5dZu-x2VK6n61BM",
				iconStyles: "_349rJ1BueyeldYiZniwYOz",
				RadioOff: "_23-RdhX276B0bg5nrt0cpf",
				radioOff: "_23-RdhX276B0bg5nrt0cpf",
				RadioOn: "_2tv2vEpNmUbYbUPoOrSuAh",
				radioOn: "_2tv2vEpNmUbYbUPoOrSuAh",
				Textarea: "_2gchCc4pmLk-CHEErYmFaP",
				textarea: "_2gchCc4pmLk-CHEErYmFaP",
				StyledLabel: "_3X0DVhTjHSRuQBMvaWD4N",
				styledLabel: "_3X0DVhTjHSRuQBMvaWD4N",
				StyledFileInput: "_2kbxOlf5qlKAzRVdk0a0GN",
				styledFileInput: "_2kbxOlf5qlKAzRVdk0a0GN"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "g", (function() {
				return v
			}));
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/controls/Input/ModalInput.tsx"),
				o = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				a = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				l = n.n(d);
			const u = r.a.wrapped(s.a, "ModalInput", l.a),
				m = r.a.input("Input", l.a),
				p = r.a.wrapped(c.a, "RadioOn", l.a),
				b = r.a.wrapped(i.a, "RadioOff", l.a),
				f = r.a.wrapped(o.a, "Checkbox", l.a),
				h = r.a.wrapped(a.a, "CheckboxSelected", l.a),
				g = r.a.textarea("Textarea", l.a),
				x = r.a.label("StyledLabel", l.a),
				v = r.a.input("StyledFileInput", l.a)
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				i = n.n(a);
			const c = e => s.a.createElement("div", {
				className: Object(o.a)(i.a.placeholderWrapper, e.fullWidth && i.a.fullWidth, e.large && i.a.large)
			}, s.a.createElement("span", {
				className: i.a.subredditIconLoading
			}), s.a.createElement("span", {
				className: i.a.subredditNameLoading
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
		"./src/reddit/components/TrackEnterExitViewport/index.tsx": function(e, t, n) {
			"use strict";
			var r, s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-dom/index.js"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx");
			! function(e) {
				e[e.Visible = 0] = "Visible", e[e.NotVisible = 1] = "NotVisible"
			}(r || (r = {})), t.a = Object(i.c)(class extends o.a.Component {
				constructor() {
					super(...arguments), this.visibilityState = r.NotVisible, this.enterFired = !1, this.exitFired = !1
				}
				componentDidMount() {
					if (this.props.children) {
						const e = Object(a.findDOMNode)(this);
						e && "string" != typeof e && (this.observer = new IntersectionObserver(e => {
							e.forEach(e => {
								if (e.isIntersecting && this.visibilityState === r.NotVisible) {
									if (this.visibilityState = r.Visible, this.props.fireOnce && this.enterFired) return;
									this.props.onEnter && (this.props.sendEvent(this.props.onEnter), this.enterFired = !0), this.props.onEnterHandler && this.props.onEnterHandler(e)
								}
								if (!e.isIntersecting && this.visibilityState === r.Visible) {
									if (this.visibilityState = r.NotVisible, this.props.fireOnce && this.exitFired) return;
									this.props.onExit && (this.props.sendEvent(this.props.onExit), this.exitFired = !0)
								}
							})
						}, {
							threshold: this.props.threshold || .25,
							root: this.props.viewportRoot || null,
							rootMargin: this.props.rootMargin || "0px"
						}), this.observer.observe(e))
					}
				}
				componentWillUnmount() {
					this.observer && this.observer.disconnect()
				}
				render() {
					return this.props.children
				}
			})
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
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			var r = n("./node_modules/lodash/throttle.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.m.less"),
				p = n.n(m),
				b = n("./src/reddit/controls/Dropdown/row.m.less"),
				f = n.n(b);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			class g extends a.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = s()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, n = Object(i.a)(f.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? a.a.createElement(c.a, h({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href,
						disabled: e.disabled
					}), e.children && a.a.createElement("span", {
						className: n
					}, e.children), a.a.createElement("span", {
						className: Object(i.a)(f.a.text, e.textClassName)
					}, e.displayText)) : a.a.createElement(u.a, h({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: s()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? a.a.createElement("div", null, e.children) : a.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && a.a.createElement("span", {
						className: Object(i.a)(f.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && a.a.createElement(l.a, {
						className: f.a.checkmark
					}), e.showDropdownTriangle && a.a.createElement(d.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				let {
					className: t,
					...n
				} = e;
				const r = Object(i.a)(f.a.row, t, {
					[f.a.mIsInteractive]: !n.noHover,
					[f.a.mIsSelected]: n.isSelected,
					[f.a.topics]: n.isTopicsStyle
				});
				return a.a.createElement(g, h({
					className: r
				}, n))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				modNotes: "sK8_uuNiAqPNlw-HoD2HG",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			})), n.d(t, "c", (function() {
				return E
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/uniqueId.js"),
				o = n.n(s),
				a = n("./node_modules/raf/index.js"),
				i = n.n(a),
				c = n("./node_modules/react/index.js"),
				d = n.n(c),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/higherOrderComponents/asModal/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/layout/row/Inline/index.tsx"),
				b = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				f = n.n(b);
			var h = Object(u.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return d.a.createElement("div", {
						className: f.a.wrapper
					}, d.a.createElement(p.a, {
						className: f.a.titleRow
					}, n), d.a.createElement("div", {
						className: f.a.detailsContainer
					}, t), d.a.createElement(p.a, {
						className: f.a.buttonRow
					}, d.a.createElement(m.l, {
						className: f.a.confirmButton,
						onClick: e.onConfirmed
					}, r.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				g = n("./src/reddit/controls/ErrorText/index.m.less"),
				x = n.n(g);
			class v extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${o()()}`,
						isModalOpen: !1
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					i()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						className: t,
						errorModalBody: n,
						errorModalTitle: s = r.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: o = r.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: a,
						isModalOpen: i
					} = this.state;
					return d.a.createElement("div", {
						className: Object(l.a)(x.a.wrapper, t)
					}, d.a.createElement("span", {
						className: x.a.description,
						ref: this.spanRef
					}, e), a && d.a.createElement("span", {
						className: x.a.moreText,
						onClick: this.toggleModal
					}, o), i && d.a.createElement(h, {
						onConfirmed: this.toggleModal,
						title: s
					}, n || e))
				}
			}
			const O = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: r,
						fallbackMessage: s,
						messages: o = []
					} = e, a = o.length ? o : s ? [s] : [];
					return a.length ? d.a.createElement("div", {
						className: t
					}, a.map((e, t) => d.a.createElement(v, {
						className: n,
						errorModalTitle: r,
						key: t
					}, e))) : null
				},
				E = e => d.a.createElement(O, {
					fallbackMessage: r.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = v
		},
		"./src/reddit/controls/FormFields/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3CWuMoFPzdbJCxYJVmEw00",
				label: "J4DegnzzIY1-C2PFzYkrA",
				mHasValue: "t09kxBqaSw0Is_F5sUdQ1",
				inputWrapper: "_3TCLGRXxb1PXK-_sziBD2q",
				mIsInvalid: "_1pMjk4nL9CObVggXCSuELu",
				inputMovingLabelWrapper: "_2-meAmTwsZSCNYrpbEy7BX",
				mIsRedditStyle: "_3ONm7CsU4BtjX9jO5WYv2X",
				trash: "_2YUtyje1Y5rUty_3zgPOGM",
				trashContainer: "_2wjFyjW1rwWs4WFcSc7xNl",
				plus: "_3o11DwChSYlSiDT6FYqOIE",
				addValueButton: "_1Dm7EZTfDne90O5xANs501",
				multiInputWrapper: "_3CjWcr8XyX0xN32ADxPngu",
				errorText: "_2JNX-DiHbrfxhFYgkcBNaK"
			}
		},
		"./src/reddit/controls/FormFields/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "d", (function() {
				return v
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/ErrorText/index.tsx"),
				c = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				d = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				l = n("./src/reddit/controls/FormFields/index.m.less"),
				u = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const p = a.a.input("input", u.a),
				b = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				f = e => {
					let {
						label: t,
						children: n,
						inputRef: r,
						className: a,
						isInvalid: i,
						...c
					} = e;
					const d = void 0 !== c.value && "" !== c.value;
					return s.a.createElement("div", {
						className: Object(o.a)(u.a.inputWrapper, a, {
							[u.a.mIsInvalid]: i
						}),
						onClick: b
					}, s.a.createElement(p, m({
						"aria-invalid": i,
						innerRef: r
					}, c)), t && s.a.createElement("label", {
						className: Object(o.a)(u.a.label, {
							[u.a.mHasValue]: d
						})
					}, t), n)
				},
				h = e => {
					let {
						label: t,
						children: n,
						inputRef: r,
						isInvalid: a,
						className: i,
						redditStyle: c,
						...d
					} = e;
					const l = void 0 !== d.value && "" !== d.value;
					return s.a.createElement("div", {
						className: Object(o.a)(u.a.inputMovingLabelWrapper, i, {
							[u.a.mIsInvalid]: a,
							[u.a.mIsRedditStyle]: c
						}),
						onClick: b
					}, s.a.createElement(p, m({
						innerRef: r
					}, d)), t && s.a.createElement("label", {
						className: Object(o.a)(u.a.label, {
							[u.a.mHasValue]: l
						})
					}, t), n)
				},
				g = e => s.a.createElement("div", {
					className: Object(o.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", s.a.createElement(c.a, {
					className: u.a.plus
				}));
			var x;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(x || (x = {}));
			class v extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: x.ADD
						})
					}, this.updateValue = (e, t) => {
						const n = this.props.values.slice();
						n[t] = e.target.value, this.props.onChange(n)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							n = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: x.REMOVE,
							value: n,
							index: e
						})
					}
				}
				componentWillReceiveProps(e) {
					e.values.length > this.props.values.length && this.setState({
						addingNewInputs: !0
					})
				}
				componentDidUpdate() {
					this.focusedInput && this.state.addingNewInputs && (this.focusedInput.focus(), this.setState({
						addingNewInputs: !1
					}))
				}
				setInputRef(e, t) {
					this.state.addingNewInputs && (!this.props.buttonOnTop || this.props.buttonOnTop && !t) && (this.focusedInput = e)
				}
				renderFields() {
					const {
						values: e,
						disabled: t,
						label: n,
						placeholder: r,
						errors: o = []
					} = this.props;
					return e.map((e, a) => s.a.createElement(f, {
						inputRef: e => this.setInputRef(e, a),
						isInvalid: !!o[a],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, a),
						placeholder: r,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, s.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(a)
					}, s.a.createElement(d.b, {
						className: u.a.trash
					})), !!o[a] && s.a.createElement(i.b, {
						className: u.a.errorText
					}, o[a])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: n,
						maxLength: r,
						addValueText: a,
						disabled: i
					} = this.props;
					this.focusedInput = null;
					const c = !(!!r && n.length >= r) && !i;
					return s.a.createElement("div", {
						className: Object(o.a)(u.a.multiInputWrapper, e)
					}, t && c && s.a.createElement(g, {
						onClick: this.addValue,
						text: a
					}), this.renderFields(), !t && c && s.a.createElement(g, {
						onClick: this.addValue,
						text: a
					}))
				}
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
				a = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = n.n(a);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: r = 10
				} = e;
				return s.a.createElement("div", {
					className: Object(o.a)(i.a.loadingIcon, n, {
						[i.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${r}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/controls/Select/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "DuuuuIp9EubfvJyrdxytL",
				wrapper: "DuuuuIp9EubfvJyrdxytL",
				Caret: "_8fOXBcWxu_c3tlrAKMR3R",
				caret: "_8fOXBcWxu_c3tlrAKMR3R",
				Inner: "_3-_epznhOfLDNH3-plYM6l",
				inner: "_3-_epznhOfLDNH3-plYM6l",
				active: "wFEhEmBm9HI3jG6QDUnaw",
				redditStyle: "_2PDExzXmSTOdxzNjRB1Pww"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/controls/InternalLink/index.tsx"),
				o = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				a = n.n(o);
			t.a = r.a.wrapped(s.a, "unstyledInternalLink", a.a)
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
				return p
			}));
			var r = n("./src/config.ts"),
				s = n("./src/lib/omitHeaders/index.ts"),
				o = n("./src/reddit/constants/headers.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts"),
				i = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				c = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function d(e, t) {
				return Object(a.a)(e, {
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
				return Object(a.a)(e, {
					endpoint: `${r.a.metaUrl}/ps/me/braintree-client-tokens`,
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function u(e, t) {
				return Object(a.a)(e, {
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
				return Object(a.a)(Object(s.a)(e, [o.a]), {
					endpoint: `${e.apiUrl}/api/info?id=${t.join(",")}`,
					method: "get"
				}).then(e => {
					if (e.ok) {
						const t = e.body.data.children.map(e => {
							let {
								data: t
							} = e;
							return Object(c.a)(t)
						}).reduce((e, t) => (e[t.id] = t, e), {});
						return {
							...e,
							body: t
						}
					}
					return e
				})
			}
			async function p(e, t) {
				const n = await Object(a.a)(e, {
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
				if (!n.ok) throw new Error(`Error fetching provisional membership: ${Object(i.b)(n.error)}`);
				return n.body
			}
		},
		"./src/reddit/endpoints/subreddit/local.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/redditGQL/operations/GetNearbySubreddits.json"),
				o = n("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts");
			const a = (e, t) => Object(r.a)(e, {
				...s,
				variables: t
			});
			async function i(e, t) {
				const n = await a(e, t);
				if (n && n.ok) {
					const e = n.body,
						t = e && e.data && e.data.nearbySubreddits;
					return Object(o.a)(t)
				}
			}
			t.a = a
		},
		"./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			}));
			n("./node_modules/lodash/isEmpty.js");
			var r = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const s = e => {
					let {
						edges: t,
						pageInfo: n
					} = e;
					const s = {},
						o = [];
					for (const {
							node: a,
							...i
						} of t) {
						const e = Object(r.a)(a);
						s[e.id] = e, o.push(i)
					}
					return {
						pageInfo: n,
						rankings: o,
						subreddits: s
					}
				},
				o = e => {
					let {
						edges: t
					} = e;
					const n = {},
						s = [];
					for (const {
							node: o,
							...a
						} of t) {
						const e = Object(r.a)(o);
						n[e.id] = {
							...e,
							bannerBackgroundImage: o && o.styles && o.styles.bannerBackgroundImage
						}, s.push(a)
					}
					return {
						rankings: s,
						subreddits: n
					}
				},
				a = e => {
					let {
						edges: t,
						pageInfo: n
					} = e;
					const s = {},
						o = [];
					let a = 0;
					for (const {
							node: i
						} of t) {
						const e = Object(r.a)(i);
						s[e.id] = {
							...e,
							publicDescription: null == i ? void 0 : i.publicDescriptionText,
							bannerBackgroundImage: i && i.styles && i.styles.bannerBackgroundImage
						}, o.push({
							id: e.id,
							rank: a
						}), a += 1
					}
					return {
						rankings: o,
						subreddits: s,
						pageInfo: n
					}
				}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, n) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				o = n.n(s);
			const a = e => {
					let {
						isLoading: t
					} = e;
					return Object(r.a)(o.a.loadingBackground, {
						[o.a["m-loading"]]: t
					})
				},
				i = e => Object(r.a)(o.a.loadingBar, a(e))
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(o.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const d = e => {
				let {
					className: t,
					isSubreddit: n,
					...r
				} = e;
				return s.a.createElement("svg", c({
					className: Object(o.a)(i.a.dropdown, {
						[i.a.mRedditStyle]: !n
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r), s.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = d
		},
		"./src/reddit/models/Gender/index.ts": function(e, t, n) {
			"use strict";
			var r;
			n.d(t, "a", (function() {
					return r
				})), n.d(t, "b", (function() {
					return s
				})),
				function(e) {
					e.FEMALE = "FEMALE", e.MALE = "MALE", e.NON_BINARY = "NON_BINARY", e.OPT_OUT = "OPT_OUT", e.USER_DEFINED = "USER_DEFINED"
				}(r || (r = {}));
			const s = 50
		},
		"./src/reddit/reducers/features/marketplace/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/actions/economics/marketplace/constants.ts");
			const s = {};
			var o = n("./node_modules/redux/es/redux.js"),
				a = n("./src/reddit/actions/frontpage/constants.ts");
			const i = {
				id: null,
				title: "",
				description: "",
				buttonCtaText: "",
				feedIndex: 0
			};
			t.a = Object(o.c)({
				feedUnit: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.b: {
							const {
								marketplaceFeedElement: n
							} = t.payload;
							return n ? {
								id: n.element.id,
								title: n.element.unitTitle,
								description: n.element.unitDescription,
								buttonCtaText: n.element.buttonCtaText,
								feedIndex: n.index
							} : e
						}
						default:
							return e
					}
				},
				claimStatus: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.b: {
							const {
								claimId: n
							} = t.payload;
							return {
								...e,
								[n]: "claim_success"
							}
						}
						case r.a: {
							const {
								claimId: n
							} = t.payload;
							return {
								...e,
								[n]: "no_nfts_left"
							}
						}
						default:
							return e
					}
				}
			})
		},
		"./src/reddit/selectors/experiments/econ/marketplace.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				const t = (e => {
						return Object(s.c)(e, {
							experimentEligibilitySelector: s.a,
							experimentName: r.Vd
						}) === r.od
					})(e),
					n = Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.Ud
					}) === r.od;
				return t && !n
			}
		},
		"./src/reddit/selectors/experiments/inAppNotification.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/experiments/index.ts"),
				a = n("./src/reddit/selectors/experiments/utils.ts");
			const i = e => Object(s.c)(e, {
					experimentName: r.Jb,
					experimentEligibilitySelector: o.e
				}) === r.X.topOfFeedWithCTAs,
				c = e => (e => Object(s.c)(e, {
					experimentName: r.Jb,
					experimentEligibilitySelector: o.e
				}) === r.X.topOfFeedNoCTAs)(e) || i(e),
				d = e => Object(s.c)(e, {
					experimentName: r.Jb,
					experimentEligibilitySelector: o.e
				}) === r.X.floatInFeed,
				l = e => {
					const t = Object(s.c)(e, {
						experimentName: r.Jb,
						experimentEligibilitySelector: o.e
					});
					return Object(a.a)(t)
				}
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return c
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "g", (function() {
				return O
			})), n.d(t, "d", (function() {
				return E
			}));
			var r = n("./src/lib/objectSelector/index.ts"),
				s = n("./src/reddit/featureFlags/index.ts"),
				o = n("./src/reddit/selectors/posts.ts"),
				a = n("./src/reddit/selectors/subreddit.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const c = (e, t) => {
					const n = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (n) {
						const t = Object(a.T)(e, {
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
					const n = p(e, t);
					if (!n) return u;
					const r = Object(a.X)(e, {
						subredditName: n.name
					});
					return r && r.postIds && r.postIds.length ? r.postIds : u
				}),
				p = (e, t) => {
					const n = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return n ? Object(a.T)(e, {
						subredditId: n
					}) : null
				},
				b = (e, t, n, r, s) => {
					const a = s.find(e => e <= t) || -1,
						i = s.find(e => e > t) || 1 / 0;
					return t !== i && t !== a && (!(a + n > t) && (!(t + n > i) && !((e, t, n) => {
						const r = n[t - 1],
							s = n[t],
							a = s && Object(o.G)(e, {
								postId: r
							}) || null,
							i = s && Object(o.G)(e, {
								postId: s
							}) || null;
						return a && a.isSponsored || i && i.isSponsored
					})(e, t, r)))
				},
				f = [3],
				h = Object(r.a)((e, t) => {
					let {
						existingDUPositions: n,
						listingProps: r
					} = t;
					const s = n.slice().sort();
					let a = -1;
					const i = Object(o.z)(e, {
							listingKey: r.listingKey
						}),
						c = [];
					return f.forEach(t => {
						let n = a + t;
						if (!(n >= i.length)) {
							for (; n < i.length && !b(e, n, t, i, s);) n += 1;
							n < i.length && (c.push(n), a = n)
						}
					}), c
				}),
				g = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				x = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				v = e => e.focusedVerticals.category,
				O = e => e.focusedVerticals.lastLoadedEnv,
				E = e => {
					const t = Object(i.Q)(e),
						n = s.d.geoSubredditRecommendationDULoggedIn(e),
						r = s.d.geoSubredditRecommendationDULoggedOut(e);
					return t && n || !t && r
				}
		},
		"./src/redditGQL/operations/Frontpage.json": function(e) {
			e.exports = JSON.parse('{"id":"d8b6e0d85dd4"}')
		},
		"./src/redditGQL/operations/GetAccountGender.json": function(e) {
			e.exports = JSON.parse('{"id":"1508e05ea2ee"}')
		},
		"./src/redditGQL/operations/GetNearbySubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"aff6d12aa0c2"}')
		},
		"./src/redditGQL/operations/InterestTopics.json": function(e) {
			e.exports = JSON.parse('{"id":"6230e34beadf"}')
		},
		"./src/redditGQL/operations/InterestTopicsByIds.json": function(e) {
			e.exports = JSON.parse('{"id":"929678fdca35"}')
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"c10a566d5f55"}')
		},
		"./src/redditGQL/operations/UpdateAccountGender.json": function(e) {
			e.exports = JSON.parse('{"id":"670e8e8d3018"}')
		},
		"./src/redditGQL/operations/UpdateTopicPreferences.json": function(e) {
			e.exports = JSON.parse('{"id":"a48d141a1878"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OnboardingModal.34e9a81f7e261d5418f9.js.map