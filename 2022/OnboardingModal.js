// https://www.redditstatic.com/desktop2x/OnboardingModal.c907250767184d74ba2a.js
// Retrieved at 10/25/2022, 1:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OnboardingModal"], {
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var n = Math.ceil,
				s = Math.max;
			e.exports = function(e, t, r, a) {
				for (var o = -1, i = s(n((t - e) / (r || 1)), 0), c = Array(i); i--;) c[a ? i : ++o] = e, e += r;
				return c
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseRange.js"),
				r = n("./node_modules/lodash/_isIterateeCall.js"),
				a = n("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, n, o) {
					return o && "number" != typeof o && r(t, n, o) && (n = o = void 0), t = a(t), void 0 === n ? (n = t, t = 0) : n = a(n), o = void 0 === o ? t < n ? 1 : -1 : a(o), s(t, n, o, e)
				}
			}
		},
		"./node_modules/lodash/range.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_createRange.js")();
			e.exports = s
		},
		"./node_modules/lodash/times.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseTimes.js"),
				r = n("./node_modules/lodash/_castFunction.js"),
				a = n("./node_modules/lodash/toInteger.js"),
				o = 9007199254740991,
				i = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = a(e)) < 1 || e > o) return [];
				var n = i,
					d = c(e, i);
				t = r(t), e -= i;
				for (var l = s(d, t); ++n < e;) t(n);
				return l
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var s = n("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return s(e) + t
			}
		},
		"./node_modules/react-uid/dist/es2015/hooks.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				r = function() {
					var e = 1,
						t = new WeakMap,
						n = function(s, r) {
							return "number" == typeof s || "string" == typeof s ? r ? "idx-" + r : "val-" + s : t.has(s) ? "uid" + t.get(s) : (t.set(s, e++), n(s))
						};
					return n
				},
				a = (r(), function(e) {
					return void 0 === e && (e = ""), {
						value: 1,
						prefix: e,
						uid: r()
					}
				}),
				o = a(),
				i = s.createContext(a()),
				c = function() {
					return s.useState((e = s.useContext(i), {
						uid: n = function(e) {
							return e ? e.prefix : ""
						}(t = e || o) + function(e) {
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/GetAccountGender.json"),
				c = n("./src/redditGQL/operations/UpdateAccountGender.json");
			var d = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/reddit/actions/accountGender/constants.ts");
			const u = () => async (e, t, n) => {
				let {
					gqlContext: s
				} = n;
				var r, a;
				const c = await (e => Object(o.a)(e, {
					...i
				}))(s());
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
					})(null === (a = null === (r = null == d ? void 0 : d.data) || void 0 === r ? void 0 : r.piiIdentity) || void 0 === a ? void 0 : a.gender);
				l && e(m(l))
			}, m = Object(r.a)(l.a), p = e => async (t, n, r) => {
				let {
					gqlContext: i
				} = r;
				const l = {
					customGender: e.definedGender,
					genderEnum: e.genderCategory
				};
				(await ((e, t) => Object(o.a)(e, {
					...c,
					variables: t
				}))(i(), {
					input: l
				})).ok ? (t(b(e)), t(Object(a.f)({
					kind: d.b.SuccessCommunity,
					text: s.fbt._("Changes saved", null, {
						hk: "2isjrZ"
					})
				}))) : (t(g()), t(Object(a.f)({
					kind: d.b.Error,
					text: s.fbt._("Changes failed to save", null, {
						hk: "XrtIq"
					})
				})))
			}, b = Object(r.a)(l.b), g = Object(r.a)(l.c)
		},
		"./src/reddit/actions/economics/marketplace/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}));
			const s = "ECON__MARKETPLACE_ITEM_CLAIMED",
				r = "ECON__MARKETPLACE_ITEMS_OUT_OF_STOCK"
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "b", (function() {
				return k
			}));
			var s, r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/performanceTimings/index.tsx"),
				o = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(s || (s = {}));
			var d, l = n("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(d || (d = {}));
			var m = n("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				p = n("./src/reddit/selectors/platform.ts"),
				b = n("./src/reddit/selectors/user.ts");
			const g = Object(r.a)(o.g),
				f = Object(r.a)(o.e),
				h = Object(r.a)(o.h),
				O = Object(r.a)(o.c),
				x = Object(r.a)(o.f),
				v = Object(r.a)(o.j),
				E = Object(r.a)(o.i),
				C = () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					const a = t(),
						o = Object(m.e)(a),
						d = Object(m.d)(a),
						p = Object(b.Q)(a);
					if (o || !d) return;
					e(h());
					let x = !1;
					try {
						const t = p ? s.LoggedInGeo : s.LoggedOutGeo,
							n = await ((e, t, n) => Object(i.a)(e, {
								...c,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(r(), t);
						if (n.ok && n.body) {
							const {
								data: t
							} = n.body;
							if (_(t)) {
								if (j(t)) {
									e(O({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), x = !0
								} else if (S(t)) {
									const n = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: s,
											interactedSubreddit: r,
											category: a
										} = n.focusRecommendations[0],
										o = [s, r],
										i = Object(u.d)(o),
										c = Object(l.b)(o),
										d = Object(u.c)(s),
										m = {
											recommendedSubredditIds: [s.id],
											interactedSubredditIds: [r.id],
											subreddits: i,
											subredditsAboutInfo: c,
											subredditTopContent: d,
											category: a,
											lastLoadedEnv: "client"
										};
									e(g(m)), x = !0
								}
							} else x = !1
						}
					} catch (v) {
						x = !1
					}
					x || e(f({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, _ = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, j = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations;
					return !(!n || 0 !== n.length)
				}, S = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations,
						s = t && t.type;
					return !!(n && !j(e) && s === d.GEO && n[0] && n[0].recommendedSubreddit && n[0].interactedSubreddit)
				}, k = () => async (e, t, n) => {
					var s, r;
					const o = t(),
						i = Object(m.g)(o);
					if (Object(m.f)(o) || null === i || "client" === i) {
						const n = null === (r = null === (s = Object(p.b)(t())) || void 0 === s ? void 0 : s.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
							i = Object(b.R)(o);
						return Object(a.i)(() => e(C()), {
							name: "getFocusedVerticalsRequested",
							page: n,
							isLoggedIn: i
						})
					}
					if ("server" === i) return e(x({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/frontpage/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "frontpagePending", (function() {
				return we
			})), n.d(t, "frontpageLoaded", (function() {
				return Le
			})), n.d(t, "frontpageFailed", (function() {
				return Re
			})), n.d(t, "frontpageFirstLoaded", (function() {
				return Ae
			})), n.d(t, "frontpageDataRequested", (function() {
				return Ge
			})), n.d(t, "frontpageRequestedHelper", (function() {
				return Pe
			})), n.d(t, "frontpageRequested", (function() {
				return Me
			})), n.d(t, "frontpageReloaded", (function() {
				return De
			})), n.d(t, "morePostsPending", (function() {
				return Ve
			})), n.d(t, "morePostsLoaded", (function() {
				return qe
			})), n.d(t, "morePostsFailed", (function() {
				return Ue
			})), n.d(t, "morePostsRequested", (function() {
				return We
			})), n.d(t, "refreshFeed", (function() {
				return He
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/pick.js"),
				a = n.n(r),
				o = n("./src/lib/getParsedUserAgent/index.ts"),
				i = n("./src/reddit/actions/focusedVerticals/index.ts"),
				c = n("./src/lib/base64/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/env/index.ts"),
				u = n("./src/lib/makeGqlRequest/index.ts"),
				m = n("./src/lib/performanceTimings/index.tsx"),
				p = n("./src/lib/sentry/index.ts"),
				b = n("./src/reddit/constants/experiments.ts"),
				g = n("./src/reddit/constants/graphql.ts"),
				f = n("./src/reddit/helpers/getPostLimitForMobile/index.ts"),
				h = n("./src/reddit/models/Live/index.ts"),
				O = n("./src/reddit/models/Onboarding/index.ts"),
				x = n("./src/reddit/models/Post/index.ts"),
				v = n("./src/reddit/helpers/graphql/normalizeInterestTopicsFromGql/index.ts"),
				E = n("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				C = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				_ = n("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				j = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				S = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				k = n("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				y = n("./src/reddit/models/FeedElement/index.ts");

			function N(e) {
				return e.__typename === y.a.FreeNftFeedElement
			}

			function I(e) {
				return e.__typename === y.a.MerchandisingUnit
			}

			function T(e, t) {
				return {
					feedElement: e,
					feedPosition: t
				}
			}
			var w = n("./src/reddit/models/NotificationInbox/index.ts"),
				L = n("./src/reddit/selectors/adsSignals.ts"),
				R = n("./src/reddit/selectors/experiments/econ/marketplace.ts"),
				A = n("./src/reddit/selectors/experiments/inAppNotification.ts"),
				G = n("./src/reddit/selectors/experiments/loggedOutOneFeed.ts"),
				P = n("./src/reddit/selectors/experiments/onboarding.ts"),
				F = n("./src/reddit/selectors/frontpage.ts"),
				M = n("./src/reddit/selectors/platform.ts"),
				B = n("./src/reddit/selectors/user.ts"),
				D = n("./src/reddit/selectors/userPrefs.ts"),
				V = n("./src/redditGQL/operations/Frontpage.json"),
				q = n("./src/redditGQL/types.ts"),
				U = n("./src/lib/initializeClient/installReducer.ts"),
				W = n("./src/reddit/reducers/features/marketplace/index.ts"),
				H = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const Q = Object(H.a)(b.Ud);
			Object(U.a)({
				features: {
					marketplace: W.a
				}
			});
			const z = (e, t) => {
					var n, s;
					const {
						after: r,
						dist: a,
						isMobile: o,
						layout: i,
						limit: d,
						sort: l,
						t: u,
						correlationId: m
					} = t, p = Object(P.c)(e), h = Object(B.ab)(e) || Object(B.R)(e), O = Object(A.a)(e), x = Object(M.q)(e), v = Object(G.c)(e), E = Object(G.g)(e), C = E === b.qb.LoggedOutUiOnly || E === b.qb.LoggedOutHomeDefpop, _ = Object(F.b)(e), {
						adsSeenCount: j,
						totalPostsSeenCount: S,
						sessionStartTime: k
					} = Object(L.a)(e), y = {
						adContext: {
							layout: i ? i.toUpperCase() : g.a.Card,
							distance: a,
							clientSignalSessionData: {
								adsSeenCount: j,
								totalPostsSeenCount: S,
								sessionStartTime: k
							}
						},
						feedRankingContext: {
							servingId: m
						},
						forceGeopopular: !0,
						includeCommunityDUs: !1,
						includeInterestTopics: !!p && !Object(b.vg)(p),
						includeFeaturedAnnouncements: !0,
						includeLiveEvents: !0,
						includeIdentity: h && !(null === (s = null === (n = e.user.account) || void 0 === n ? void 0 : n.karma) || void 0 === s ? void 0 : s.total),
						includePostRecommendations: h || v,
						includeFreeMarketplaceElement: Object(R.a)(e),
						includeSubredditQuestions: h,
						recentPostIds: e.posts.recent,
						notificationContext: {
							variant: null == O ? void 0 : O.toLowerCase()
						},
						enableMerchandisingUnitAnnouncements: Q(e)
					};
					return v ? (C && (_ || E !== b.qb.LoggedOutHomeDefpop) || (y.sort = q.H.Best, y.feedRankingContext.variant = E), y.feedRankingContext.loggedOutAllowNsfw = Object(D.a)(e)) : l && (y.sort = l.toUpperCase()), u && (y.range = u.toUpperCase()), o ? y.pageSize = Object(f.a)(i) : d && (y.pageSize = d), x && x.ad && (y.forceAds = {
						ad: x.ad
					}), r && (y.after = Object(c.a)(r)), y
				},
				K = async (e, t, n, s) => {
					const r = Date.now(),
						a = await ((e, t) => Object(u.a)(e, {
							...V,
							variables: t
						}, {
							traceRequestName: "get_frontpage"
						}))(e, t),
						o = Date.now();
					let i;
					try {
						const e = Date.now();
						i = (e => {
							let {
								trendingSubreddits: t = [],
								identity: n,
								home: s,
								featuredAnnouncements: r,
								recentPosts: a = [],
								liveBarContent: o
							} = e;
							var i, c;
							const d = [],
								u = [];
							let m, b, g, f;
							const y = {
									postIds: [],
									postInstances: {},
									posts: {},
									postFlair: {},
									profiles: {},
									subreddits: {},
									merchandisingUnitAnnouncements: []
								},
								L = e => {
									if (y.posts[e.id]) return e.id;
									const t = Object(C.f)(e);
									y.posts[t.id] = t;
									const {
										crosspostRoot: n
									} = e;
									n && n.type === x.a.Post && n.postInfo && L(n.postInfo), Object(x.o)(e).forEach(L);
									let s = t.id;
									if (Object(x.l)(e)) y.profiles[e.profile.id] || (y.profiles[e.profile.id] = Object(j.a)(e.profile));
									else if (Object(x.n)(e)) y.subreddits[e.subreddit.id] || (y.subreddits[e.subreddit.id] = Object(S.a)(e.subreddit)), y.postFlair[e.subreddit.id] || (y.postFlair[e.subreddit.id] = Object(E.a)(e.subreddit));
									else if (Object(x.h)(e)) {
										const n = Object(C.b)(e);
										if (!n) return null;
										s = n, y.posts[n] = {
											...t,
											id: n,
											permalink: `${t.permalink}?instanceId=${encodeURIComponent(n)}`
										}, y.posts[t.id] || (y.posts[t.id] = {
											...t,
											events: []
										}), y.postInstances[e.id] || (y.postInstances[e.id] = []), y.postInstances[e.id].push(n)
									}
									return s
								};
							for (const l of t) {
								const e = Object(S.a)(l);
								y.subreddits[e.id] = e, d.push(e.id)
							}
							for (const [E, {
									node: _
								}] of s.elements.edges.entries())
								if (Object(x.k)(_)) {
									const e = L(_);
									e && y.postIds.push(e)
								} else if (Object(x.m)(_)) {
								if (!_.recommendationContext || !_.postInfo) {
									const e = "Received empty PostRecommendation element when processing frontpage data.";
									Object(l.b)() || console.warn(e), p.c.captureMessage(e);
									continue
								}
								const {
									content: e,
									subreddit: t,
									typeIdentifier: n
								} = _.recommendationContext;
								if (_.postInfo && (null == e ? void 0 : e.richtext)) {
									const s = L(_.postInfo);
									s && (y.postIds.push(s), y.posts[s].recommendationContext = {
										content: Object(C.d)(e.richtext),
										source: {
											source: null == n ? void 0 : n.toLowerCase(),
											subredditId: null == t ? void 0 : t.id,
											subredditName: null == t ? void 0 : t.prefixedName
										}
									})
								}
							} else if (Object(h.c)(_) && !m) m = _;
							else if (Object(O.g)(_)) {
								const e = null === (i = null == _ ? void 0 : _.interestTopicRecommendations) || void 0 === i ? void 0 : i.recommendationTopics;
								if (e) {
									const t = Object(v.a)(e);
									t.topics.length && (g = {
										interests: t,
										index: E
									})
								}
							} else if (N(_) && !b) b = {
								element: _,
								index: s.elements.edges.findIndex(e => e.node === _)
							};
							else if (Object(w.d)(_) && (null === (c = null == _ ? void 0 : _.notifications) || void 0 === c ? void 0 : c.length)) f = {
								notifications: _.notifications,
								position: E,
								id: _.id
							};
							else if (I(_)) null != _.id && y.merchandisingUnitAnnouncements.push(T(_, E));
							else {
								const e = `Received unhandled element type when processing frontpage data: "${_.__typename}"`;
								Object(l.b)() || console.warn(e), p.c.captureMessage(e)
							}
							for (const l of a) {
								if (!l) continue;
								const e = L(l);
								e && u.push(e)
							}
							const R = y.postIds.length - 1,
								A = R >= 0 ? y.postIds[R] : "",
								G = s.elements.dist,
								P = s.elements.geoFilter;
							return {
								...y,
								account: n && Object(k.a)(n) || null,
								featuredLiveThread: m,
								marketplaceFeedElement: b,
								interestTopicRecommendations: g,
								announcements: r,
								notifications: f,
								liveBarContent: o,
								preferences: n && n.preferences && Object(_.a)(n.preferences, n.interactions) || null,
								...0 !== d.length && {
									trendingSubredditIds: d
								},
								...0 !== u.length && {
									recentPostIds: u
								},
								token: A,
								...null !== G && {
									dist: G
								},
								...null !== P && {
									geoFilter: P
								}
							}
						})(a.body.data);
						const t = Date.now(),
							c = [{
								duration: o - r,
								logKeyType: m.a.gqlFetchTiming
							}, {
								duration: t - e,
								logKeyType: m.a.gqlNormalizationTiming
							}];
						Object(m.h)({
							name: d.u.FRONTPAGE,
							isLoggedIn: n,
							metrics: c,
							statsdPathsForExperiments: s
						})
					} catch (c) {
						const e = "Error normalizing front page posts";
						Object(l.b)() || console.error(e, c), p.c.captureException(c)
					}
					return {
						...a,
						body: i
					}
				};
			var Y = n("./src/lib/pageTitle/index.ts"),
				J = n("./src/lib/pageTitle/helpers.ts"),
				X = n("./src/reddit/actions/login.ts"),
				Z = n("./src/reddit/actions/meta.ts"),
				$ = n("./src/reddit/actions/platform.ts"),
				ee = n("./src/reddit/actions/toaster.ts"),
				te = n("./src/reddit/constants/history.ts"),
				ne = n("./src/reddit/constants/page.ts"),
				se = n("./src/reddit/constants/parameters.ts"),
				re = n("./src/reddit/constants/postLayout.ts"),
				ae = n("./src/reddit/contexts/PageLayer/index.tsx"),
				oe = n("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				ie = n("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				ce = n("./src/reddit/models/Toast/index.ts"),
				de = n("./src/reddit/selectors/experiments/chat.ts"),
				le = n("./src/reddit/selectors/experiments/countrySites.ts"),
				ue = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				me = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				pe = n("./src/reddit/selectors/runTimeEnvVars.ts"),
				be = n("./src/lib/makeActionCreator/index.ts"),
				ge = n("./src/lib/makeListingKey/index.ts"),
				fe = n("./src/reddit/actions/ads/index.ts"),
				he = n("./src/reddit/helpers/chooseVariant/index.ts"),
				Oe = n("./src/reddit/helpers/counters/loggedOutOneFeed.ts"),
				xe = n("./src/reddit/helpers/trackers/feed.ts"),
				ve = n("./src/reddit/models/LoggedOutOneFeed/index.ts"),
				Ee = n("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				Ce = n("./src/reddit/actions/seo/linksModule.ts"),
				_e = n("./src/reddit/selectors/seo/linksModule.ts"),
				je = n("./src/reddit/actions/publicAccessNetwork/api.ts"),
				Se = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				ke = n("./src/lib/sample/index.ts"),
				ye = n("./src/reddit/actions/liveBar/index.ts"),
				Ne = n("./src/reddit/helpers/filterListingResponse/index.ts"),
				Ie = n("./src/reddit/actions/frontpage/constants.ts"),
				Te = n("./node_modules/uuid/dist/esm-browser/v4.js");
			const we = Object(be.a)(Ie.d),
				Le = Object(be.a)(Ie.c),
				Re = Object(be.a)(Ie.a),
				Ae = Object(be.a)(Ie.b),
				Ge = (e, t) => async (n, r, a) => {
					var i, c, d, l, u, p, b, g;
					const f = r();
					if (f.listings.postOrder.api.pending[e]) return;
					const h = re.e[Object(ae.S)(f, {})];
					t.isMobile = Object(o.e)(f.meta.userAgent), t.recentPostIds = f.posts.recent, t.layout = h, t.useMockData = !!f.platform.currentPage && (!!f.platform.currentPage.queryParams.useMockData && Object(pe.b)(f)), n(we({
						key: e
					})), n(Ae(!1)); {
						const e = f.platform.currentPage,
							n = e && e.url;
						n && (t.clickUrl = n)
					}
					const O = Object(Te.a)();
					t.correlationId = O;
					const x = null === (c = null === (i = Object(M.b)(f)) || void 0 === i ? void 0 : i.routeMatch) || void 0 === c ? void 0 : c.route.chunk,
						v = Object(B.R)(f),
						E = await Object(m.i)(() => K(a.gqlContext(), z(r(), t), Object(B.ab)(f), t.statsdPathsForExperiments), {
							name: "fetchFrontpageData",
							isLoggedIn: v,
							page: x
						});
					n(Object($.n)(E.status));
					const C = `error-${e}`;
					if (E.ok && E.body) {
						const s = E.body;
						n(Le({
							key: e,
							meta: f.meta,
							correlationId: O,
							...s
						})), n(ee.g(C)), s.geoFilter && n(Object(Z.k)(s.geoFilter)), s.liveBarContent && n(Object(ye.b)(Object(de.a)(f) ? null !== (u = null === (l = null === (d = s.liveBarContent) || void 0 === d ? void 0 : d.items) || void 0 === l ? void 0 : l.edges.map(e => e.node)) && void 0 !== u ? u : [] : null === (p = s.liveBarContent.posts) || void 0 === p ? void 0 : p.map(e => ({
							post: e,
							__typename: "LiveBarTalk"
						})))), n(Object(fe.b)(Ee.a.FRONTPAGE));
						const a = null === (g = null === (b = Object(M.b)(f)) || void 0 === b ? void 0 : b.locationState) || void 0 === g ? void 0 : g[te.b.FeedLoadReason];
						Object(xe.b)(t.isRefresh ? te.a.UserRefresh : null != a ? a : te.a.InitialLoad)(r())
					} else {
						if (n(Re({
								error: E.error,
								key: e,
								...E.body
							})), n(ee.f({
								id: C,
								kind: ce.b.Error,
								text: s.fbt._("Sorry, we couldn't load posts for this page.", null, {
									hk: "36ypKx"
								}),
								buttonText: s.fbt._("Retry", null, {
									hk: "1XMjgA"
								}),
								buttonAction: Ge(e, t)
							})), Object(ke.a)(f, {
								rate: 14
							})) {
							const e = Object(G.c)(f);
							Object(Oe.a)(E.ok ? ve.a.ParseError : ve.a.XhrError, e ? ve.b.OneFeed : v ? ve.b.LoggedIn : ve.b.Popular)
						}
						const a = E.error;
						Object(xe.a)(a ? `${E.status||"000"}: ${a.type}` : "000: UNKNOWN_ERROR")(r())
					}
				}, Pe = (e, t) => async (n, s) => {
					var r;
					const o = s(),
						i = Object(F.a)(o),
						{
							sort: c = i
						} = e.params,
						l = Object(ge.a)(ne.b, c, e.queryParams),
						u = o.listings.postOrder.ids[l],
						m = o.listings.postOrder.api.error[l],
						p = o.listings.postOrder.api.pending[l],
						b = Object(le.b)(o),
						g = se.N in e.queryParams && e.queryParams[se.N].toUpperCase() || "",
						f = g in d.oc && d.oc[g],
						h = Y.f();
					if (p || u && !m && !t) return void(u && (n($.m({
						title: b ? Object(J.a)(o, h) : h
					})), (null === (r = o.listings.postOrder.correlationIds) || void 0 === r ? void 0 : r[l]) && n($.o({
						correlationId: o.listings.postOrder.correlationIds[l]
					})), o.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						n(Object(fe.b)(Ee.a.FRONTPAGE))
					})));
					const O = Object(oe.a)(o),
						x = Object(oe.b)(O),
						v = [Object(oe.c)(O)];
					await n(Ge(l, {
						...a()(e.queryParams, se.p),
						...a()(e.queryParams, se.o),
						limit: x,
						sort: c,
						statsdPathsForExperiments: v,
						t: Object(ie.a)(c, f)
					})), n($.m({
						title: b ? Object(J.a)(o, h) : h
					})), Object(he.c)(o, {
						experimentEligibilitySelector: he.a,
						experimentName: "redesign_aa"
					});
					const E = Object(ue.a)(o, {});
					Object(ue.e)(E) && n(Object(X.openRegisterModal)())
				}, Fe = () => async (e, t) => {
					var n, s;
					const r = t();
					if (Object(_e.a)(r)) return;
					const a = null === (s = null === (n = Object(M.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === s ? void 0 : s.route.chunk,
						o = Object(B.R)(r);
					return Object(m.i)(() => e(Object(Ce.d)()), {
						name: "frontpageLinksRequested",
						page: a,
						isLoggedIn: o
					})
				}, Me = (e, t) => async n => {
					await Promise.all([n(Object(i.b)()), n(Pe(e, t)), n(Fe()), n(Object(je.c)(Se.R))])
				}, Be = Object(be.a)(Ie.e), De = e => async (t, n) => {
					const s = n(),
						r = s.platform.currentPage.routeMatch.match;
					Object(me.o)(s) || Object(me.u)(s) || (e || t(Be()), await t(Me(r, !0)))
				}, Ve = Object(be.a)(Ie.h), qe = Object(be.a)(Ie.g), Ue = Object(be.a)(Ie.f), We = e => async (t, n, s) => {
					let {
						gqlContext: r
					} = s;
					const i = n(),
						c = Object(F.a)(i),
						{
							sort: l = c
						} = e,
						u = i.platform.currentPage ? i.platform.currentPage.queryParams : {},
						m = Object(ge.a)(ne.b, l, u),
						p = i.listings.postOrder.loadMore[m],
						b = u[se.N] ? u[se.N].toUpperCase() : "",
						g = b in d.oc && d.oc[b];
					if (p) {
						const e = i.listings.postOrder.api.pending[m],
							s = i.listings.postOrder.fetchedTokens,
							c = !(!s[m] || !s[m][p.token]);
						if (!e && !c) {
							t(Ve({
								key: m,
								fetchedToken: p.token
							}));
							const e = !!i.platform.currentPage && !!i.platform.currentPage.queryParams.useMockData,
								s = Object(oe.a)(i),
								c = re.a,
								d = [Object(oe.c)(s)],
								b = {
									after: p.token,
									dist: p.dist,
									...a()(u, se.p),
									isMobile: Object(o.e)(i.meta.userAgent),
									limit: c,
									sort: l,
									t: Object(ie.a)(l, g),
									layout: re.e[Object(ae.S)(i, {})],
									useMockData: e
								}; {
								const e = i.platform.lastPage,
									t = e && e.url;
								t && (b.clickUrl = t)
							}
							b.correlationId = i.listings.postOrder.correlationIds[m];
							const f = () => K(r(), z(i, b), Object(B.ab)(i), d),
								h = await f(),
								O = {
									...h.body,
									...Object(Ne.a)(i, m, h.body)
								};
							if (h.ok) t(qe({
								key: m,
								fetchedToken: p.token,
								meta: i.meta,
								...O
							})), Object(xe.b)(te.a.NextPageLoad)(n());
							else {
								t(Ue({
									key: m,
									error: h.error,
									fetchedToken: p.token,
									...O
								}));
								const e = h.error;
								Object(xe.a)(e ? `${h.status||"000"}: ${e.type}` : "000: UNKNOWN_ERROR")(n())
							}
						}
					}
				}, He = e => async (t, n) => {
					const s = n(),
						r = Object(F.a)(s),
						{
							sort: a = r
						} = e,
						o = s.platform.currentPage ? s.platform.currentPage.queryParams : {},
						i = Object(ge.a)(ne.b, a, o),
						c = o[se.N] ? o[se.N].toUpperCase() : "",
						l = c in d.oc && d.oc[c],
						u = Object(oe.a)(s),
						m = Object(oe.b)(u);
					await t(Ge(i, {
						limit: m,
						sort: a,
						t: Object(ie.a)(a, l),
						isRefresh: !0
					}))
				}
		},
		"./src/reddit/actions/liveBar/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/reducers/features/liveBar/index.ts");
			const o = "LIVEBAR__SET_LIVEBAR_POSTS";
			Object(s.a)({
				features: {
					liveBar: a.a
				}
			});
			const i = Object(r.a)(o)
		},
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, n) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				i = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				c = n.n(i);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => r.a.createElement(o.b, {
				className: Object(a.a)(e.className, c.a.container, e.text.length >= e.maxChars ? c.a.mOverflow : null)
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
				avatarSpacing: "_1HdyqhDsitc_dk_jsSei7X",
				dynamicSizeWrapper: "_1pykqkDB2BSllN1eZhT_XE",
				previewImage: "_3im-E3gSVGoXU3e6gcNqo4",
				loader: "_3wdFjura7xBHt6zxMSpFjm",
				randomizeButton: "_2Q_2oitWh5modqGvZBePJC",
				icon: "_3qJwIdgm0QU7z_VuH8giFl"
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
				headerBarImproved: "ZbrzdjOYMA6VpihcsfQ14",
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
				NightModeSelected: "e1Isp3oHNLbUUHvUV5ohU",
				nightModeSelected: "e1Isp3oHNLbUUHvUV5ohU",
				ButtonSection: "_1NqRKRZcZbF3ik2-KoFyq4",
				buttonSection: "_1NqRKRZcZbF3ik2-KoFyq4",
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
				LangIndicator: "_2XpGOmia3Z_FPBc3cHUtVq",
				langIndicator: "_2XpGOmia3Z_FPBc3cHUtVq",
				MoreRecommendations: "NWy0-XJnxMfzZud1EkVrZ",
				moreRecommendations: "NWy0-XJnxMfzZud1EkVrZ"
			}
		},
		"./src/reddit/components/Onboarding/GenderCollection/GenderCollection.m.less": function(e, t, n) {
			e.exports = {
				title: "_3zKrU2hmb0AVKgBTLIT7QL",
				subtitle: "_31WKxmQes0ar6o2lWLenNz",
				prompt: "_2rX82jt-wu9koZ1-NTjxbY",
				hoverAndSelectedStyles: "_1srXBYU3Yp4KAaQWY5Bb02",
				active: "KntdV1m8mH3S5LtN4TsNh",
				genderRadioButton: "_31QeZMXp1_tQXkBzZgf6QG",
				genderOption: "T95_VBp5gV76hGtM3JdZS",
				genderUserDefinedInput: "_1L4NxeVzvoZ2NpBoMFz2RU",
				genderOptionImproved: "_2Rf2QhiOOcpOJ0rzit27GL",
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
				headerBarImproved: "_3WIacLhd307x2JsrQHXeSe",
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/controls/Button/index.tsx"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./node_modules/polished/dist/polished.es.js"),
				c = n("./src/reddit/components/Onboarding/Interests/InterestPicker.m.less"),
				d = n.n(c);
			const l = (e, t, n) => {
					if (!t && !n) return {};
					let s = u(e);
					return n && !t && (s = Object(i.f)(s, .25)), {
						backgroundColor: s
					}
				},
				u = e => m[e % 7],
				m = ["#c08d41", "#ffa800", "#ff4500", "#ff3881", "#b44ac0", "#6a5cff", "#3690ea"];
			t.a = e => {
				let {
					colorIndex: t = 0,
					isSelected: n = !1,
					isSubtopic: s = !1,
					onClickHandler: i,
					topic: c
				} = e;
				return r.a.createElement(a.t, {
					className: Object(o.a)(d.a.InterestButton, {
						[d.a.Selected]: n
					}),
					kind: a.b.Button,
					onClick: i,
					style: l(t, n, s)
				}, c)
			}
		},
		"./src/reddit/components/Onboarding/LanguageCollection/LanguageCollection.m.less": function(e, t, n) {
			e.exports = {
				LanguageRow: "_1uqw13duLAypklZz9JuxH5",
				languageRow: "_1uqw13duLAypklZz9JuxH5",
				Selected: "C0ynfBku9Az2wYA9j1_PA",
				selected: "C0ynfBku9Az2wYA9j1_PA",
				NightModeSelected: "_3JYkv3aRJq9WBVU_Qu_O3K",
				nightModeSelected: "_3JYkv3aRJq9WBVU_Qu_O3K",
				ButtonSection: "_2go248Acx87AyaspT-IqC3",
				buttonSection: "_2go248Acx87AyaspT-IqC3",
				SelectedIcon: "Nqikdy52FO7Ok8SC7YbBy",
				selectedIcon: "Nqikdy52FO7Ok8SC7YbBy",
				FrontFlex: "_3qzPnI-sCnXtXXzmiLCUzt",
				frontFlex: "_3qzPnI-sCnXtXXzmiLCUzt",
				TextSection: "_5Rt2rPaHLuyB5smTxh9cS",
				textSection: "_5Rt2rPaHLuyB5smTxh9cS",
				Placeholder: "_3gtRwVx6uS2xZaynYajI9O",
				placeholder: "_3gtRwVx6uS2xZaynYajI9O",
				Icon: "_1ym0rG9P61fqq5EGeggDEg",
				icon: "_1ym0rG9P61fqq5EGeggDEg",
				isLeft: "_1wilU6X1e2oYYu84p5M0Bn",
				isRight: "_1N6ONFJor0MYB1AANfCh8M",
				LanguageListButtons: "_2GUwrGUdKWdruRBy2ogOPv",
				languageListButtons: "_2GUwrGUdKWdruRBy2ogOPv",
				HeaderBarImproved: "sKUGLH9bgXYnkNvi71PD6",
				headerBarImproved: "sKUGLH9bgXYnkNvi71PD6",
				MoreLanguages: "_34OOuEVRtCgQHxTw6Bm_SM",
				moreLanguages: "_34OOuEVRtCgQHxTw6Bm_SM"
			}
		},
		"./src/reddit/components/Onboarding/Modal.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/noop.js"),
				r = n.n(s),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/reddit/actions/changeUsername.ts"),
				m = n("./src/reddit/actions/frontpage/index.ts"),
				p = n("./src/reddit/actions/modal.ts"),
				b = n("./src/reddit/actions/survey/index.ts"),
				g = n("./src/reddit/actions/toaster.ts"),
				f = n("./node_modules/fbt/lib/FbtPublic.js"),
				h = n("./src/lib/sentry/index.ts"),
				O = n("./src/reddit/actions/snoovatar.ts"),
				x = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				v = n("./src/reddit/hooks/useTracking.ts"),
				E = n("./src/reddit/models/Toast/index.ts"),
				C = n("./src/reddit/selectors/avatar.ts");
			var _ = () => {
					const e = Object(i.e)(C.a),
						t = Object(i.d)(),
						n = Object(v.a)(),
						s = Object(i.e)(C.c);
					Object(a.useEffect)(() => {
						(null == e ? void 0 : e.csrf_token) || t(Object(O.c)())
					}, []);
					const r = Object(a.useCallback)(async () => {
							t(Object(O.d)())
						}, [t]),
						o = Object(a.useCallback)(async () => {
							if (n(Object(x.a)("save_and_continue")), e && s) {
								n(Object(x.f)("onboarding"));
								try {
									return await t(Object(O.e)(s.accessoryIds, {}, {
										set_avatar_to_profile: !0,
										source: "web_onboarding"
									})), !0
								} catch (r) {
									h.c.captureException(r)
								}
							}
							return t(Object(g.f)({
								kind: E.b.Error,
								text: f.fbt._("Unable to save avatar, please try again.", null, {
									hk: "17FzD3"
								})
							})), !1
						}, [s, e, t, n]);
					return {
						avatarImage: (null == s ? void 0 : s.image) || null,
						fetchRandomAvatar: r,
						saveAvatar: o
					}
				},
				j = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				S = n("./src/reddit/components/Onboarding/Celebration.m.less"),
				k = n.n(S);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var N = () => o.a.createElement("div", {
					className: k.a.CelebrationBg
				}, o.a.createElement("div", {
					className: k.a.CelebrationTitle
				}, y._("We're happy you're here!", null, {
					hk: "1YMdHn"
				})), o.a.createElement("div", {
					className: k.a.CelebrationSubTitle
				}, y._("Your home feed is being created now…", null, {
					hk: "Onr1V"
				})), o.a.createElement("div", null, o.a.createElement(j.a, {
					className: k.a.LoadingSpinner,
					sizePx: 16
				}))),
				I = n("./src/reddit/components/Settings/GenderCollection/index.tsx"),
				T = n("./src/reddit/models/Gender/index.ts"),
				w = n("./src/reddit/components/Onboarding/GenderCollection/GenderCollection.m.less"),
				L = n.n(w),
				R = n("./src/reddit/constants/keycodes.ts"),
				A = n("./src/reddit/helpers/trackers/onboarding.ts");
			const G = {
					definedGender: null,
					genderCategory: T.a.OPT_OUT
				},
				P = e => e === T.a.USER_DEFINED;
			var F = e => {
					let {
						autoProgressGenderCollection: t,
						isFlowImprovement: n,
						selectedGenderOption: s,
						setSelectedGenderOption: r
					} = e;
					const i = Object(v.a)(),
						c = Object(I.b)();
					n && c.splice(3, 1);
					const d = Object(a.useRef)(null),
						u = Object(a.useRef)([]),
						[m, p] = Object(a.useState)((null == s ? void 0 : s.definedGender) || "");
					Object(a.useEffect)(() => {
						i(Object(A.q)())
					}, [i]);
					const b = e => {
							var t;
							let n = null;
							return P(e) && (n = (null === (t = d.current) || void 0 === t ? void 0 : t.value) || "", p(n)), {
								definedGender: n,
								genderCategory: e
							}
						},
						g = Object(a.useCallback)(e => {
							var t;
							i(Object(A.n)()), r(b(e)), P(e) && (null === (t = d.current) || void 0 === t || t.focus())
						}, [i, r]),
						f = Object(a.useCallback)(e => {
							g(e.value), e.focus()
						}, [g]),
						h = Object(a.useCallback)(e => {
							if (!s || !P(s.genderCategory)) {
								const t = u.current[e];
								t && g(t.value)
							}
						}, [g, s]),
						O = (e, n) => {
							const a = P(e.key);
							return o.a.createElement("label", {
								key: e.key
							}, o.a.createElement("input", {
								checked: e.key === (null == s ? void 0 : s.genderCategory),
								className: L.a.genderRadioButton,
								"data-testid": e.key,
								id: `genderCollectionOption${n+1}`,
								name: "genderCollection",
								onChange: () => g(e.key),
								onClick: n => n.screenX && n.screenY ? t(b(e.key)) : null,
								onKeyDown: n => n.keyCode === R.a.Enter ? t(b(e.key)) : null,
								ref: e => u.current[n] = e,
								type: "radio",
								value: e.key
							}), a ? o.a.createElement("input", {
								className: L.a.genderUserDefinedInput,
								"data-testid": `${e.key}-input`,
								onChange: () => r(b(e.key)),
								onClick: () => h(n),
								onKeyDown: e => ((e, t) => {
									var n;
									const s = e.target;
									if (s) {
										if (l.i[e.key] && !s.value) {
											const n = u.current.length - 1;
											let s;
											(s = e.keyCode === l.i.ArrowUp || e.keyCode === l.i.ArrowLeft ? u.current[t ? t - 1 : n] : u.current[t === n ? 0 : t + 1]) && f(s)
										}
										e.keyCode === l.M && (null === (n = u.current[t]) || void 0 === n || n.focus())
									}
								})(e, n),
								placeholder: e.displayText,
								ref: d,
								tabIndex: -1,
								value: m
							}) : o.a.createElement("span", {
								className: `${L.a.genderOption} ${L.a.genderOptionImproved}`
							}, e.displayText))
						};
					return o.a.createElement("div", null, c.map((e, t) => O(e, t)))
				},
				M = n("./src/reddit/controls/Button/index.tsx"),
				B = n("./src/reddit/icons/fonts/index.tsx"),
				D = n("./src/reddit/components/Onboarding/AvatarPicker/AvatarPicker.m.less"),
				V = n.n(D);
			const {
				fbt: q
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var U = e => {
					let {
						avatarImage: t,
						fetchRandomAvatar: n
					} = e;
					const s = Object(v.a)();
					Object(a.useEffect)(() => {
						s(Object(x.o)())
					}, [s]);
					const r = Object(a.useCallback)(() => {
						s(Object(x.a)("randomize")), n()
					}, [s, n]);
					return o.a.createElement("div", {
						className: V.a.avatarPicker
					}, o.a.createElement("div", {
						className: V.a.dynamicSizeWrapper
					}, t ? o.a.createElement("img", {
						"data-testid": "preview-image",
						src: `data:image/png;base64,${encodeURIComponent(t)}`,
						className: V.a.previewImage
					}) : o.a.createElement(j.a, {
						className: V.a.loader
					}), o.a.createElement("div", {
						className: V.a.avatarSpacing
					})), o.a.createElement(M.t, {
						className: V.a.randomizeButton,
						priority: M.c.Secondary,
						onClick: r,
						Icon: Object(B.b)("random"),
						iconClassName: V.a.icon
					}, q._("Randomize", null, {
						hk: "uwAa8"
					})))
				},
				W = n("./node_modules/lodash/times.js"),
				H = n.n(W);
			const Q = function(e) {
				return (/^(r\/)([^\s]+)/g.exec(e) || [])[2] || ""
			};
			var z = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx");
			var K = e => o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 18 13"
				}, o.a.createElement("path", {
					fill: "inherit",
					d: "M6.50011 12.583C6.40482 12.5833 6.31041 12.5648 6.22235 12.5284C6.13429 12.492 6.05433 12.4385 5.98711 12.371L0.558105 6.94198L1.44211 6.05798L6.50011 11.116L17.0581 0.557983L17.9421 1.44198L7.01211 12.371C6.94493 12.4383 6.86512 12.4917 6.77725 12.5281C6.68939 12.5644 6.5952 12.5831 6.50011 12.583Z"
				})),
				Y = n("./src/reddit/icons/svgs/CommunityDefault/filled.tsx");
			var J = e => o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 18 18"
				}, o.a.createElement("path", {
					fill: "#4B6066",
					d: "M18 8.38H9.63V0H8.38V8.38H0V9.63H8.38V18H9.63V9.63H18V8.38Z"
				})),
				X = n("./src/reddit/selectors/user.ts"),
				Z = n("./src/reddit/components/Onboarding/index.m.less"),
				$ = n.n(Z),
				ee = n("./src/reddit/components/TrackEnterExitViewport/index.tsx"),
				te = n("./src/reddit/components/Onboarding/CommunityPicker.m.less"),
				ne = n.n(te);
			const {
				fbt: se
			} = n("./node_modules/fbt/lib/FbtPublic.js"), re = () => se._("Recommended for you", null, {
				hk: "28LTkA"
			}), ae = e => {
				let {
					community: t,
					schemeName: n,
					selected: s,
					toggleAll: r,
					toggleSelection: i,
					viewportRoot: c,
					setViewedCommunities: d,
					viewedCommunities: l
				} = e;
				const {
					communities: u
				} = t, [m, p] = Object(a.useState)(null);
				Object(a.useEffect)(() => {
					p(!u.find(e => !s[e.id]))
				}, [u, s]);
				const b = Object(a.useCallback)(() => {
					r(t.topicId, !m), p(!m)
				}, [t.topicId, m, r]);
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: ne.a.RecommendedHeader
				}, o.a.createElement("span", {
					className: ne.a.SectionTitle
				}, t.topicTitle), o.a.createElement("button", {
					onClick: b,
					className: ne.a.SelectAllLink
				}, m && se._("Deselect All", null, {
					hk: "4u0XYF"
				}), !m && null !== m && se._("Select All", null, {
					hk: "3izh21"
				}))), o.a.createElement(o.a.Fragment, null, o.a.createElement(ie, {
					communities: t.communities,
					schemeName: n,
					selected: s,
					toggleSelection: i,
					topicId: t.topicId,
					topicName: t.topicName,
					topicTitle: t.topicTitle,
					viewportRoot: c,
					setViewedCommunities: d,
					viewedCommunities: l
				})))
			}, oe = () => o.a.createElement(o.a.Fragment, null, H()(5, e => o.a.createElement(z.a, {
				key: e,
				fullWidth: !0,
				large: !0
			}))), ie = e => {
				let {
					communities: t,
					schemeName: n,
					selected: s,
					topicId: r,
					topicName: c,
					topicTitle: d,
					toggleSelection: l,
					viewportRoot: u,
					setViewedCommunities: m,
					viewedCommunities: p
				} = e;
				const b = Object(v.a)(),
					[g, f] = Object(a.useState)(!1),
					h = Object(i.e)(X.eb),
					O = t.length > 4,
					x = t.slice(0, g ? void 0 : 4),
					E = "recommended" === r ? "" : d,
					C = Object(a.useCallback)(() => {
						f(!0), b(Object(A.k)(d, r))
					}, [b, d, r]);
				return o.a.createElement(o.a.Fragment, null, x.map(e => {
					const t = p.has(e.id);
					return o.a.createElement(ee.a, {
						key: e.id,
						fireOnce: !0,
						viewportRoot: u,
						threshold: 1,
						rootMargin: "0px 0px -85px 0px",
						onEnter: t ? void 0 : Object(A.m)(d, Q(e.prefixedName), r, e.id, n),
						onEnterHandler: t => {
							m(new Set(p).add(e.id))
						}
					}, o.a.createElement(ce, {
						communityId: e.id,
						description: e.description,
						icon: e.icon,
						isNightMode: h,
						isSelected: s[e.id],
						key: e.id,
						language: e.language,
						prefixedName: e.prefixedName,
						schemeName: n,
						toggleSelection: l,
						topicId: r,
						topicName: c,
						topicTitle: d
					}))
				}), O && !g && o.a.createElement(le, {
					text: E,
					showMore: C
				}))
			}, ce = e => {
				let {
					communityId: t,
					description: n,
					icon: s,
					isNightMode: r,
					isSelected: i,
					language: c,
					prefixedName: l,
					schemeName: u,
					toggleSelection: m,
					topicId: p,
					topicName: b,
					topicTitle: g
				} = e;
				const f = Object(v.a)(),
					h = Object(a.useCallback)(() => {
						f(Object(A.i)(!i, g, p, Q(l), t, u)), m(t)
					}, [t, i, l, u, f, m, g, p]);
				return o.a.createElement("div", {
					className: Object(d.a)(ne.a.CommunityRow, {
						[ne.a.Selected]: i && !r,
						[ne.a.NightModeSelected]: i && r
					}),
					onClick: h
				}, o.a.createElement("div", {
					className: ne.a.IconSection
				}, s && o.a.createElement("img", {
					className: ne.a.IconWrapper,
					src: s
				}), !s && o.a.createElement(Y.a, {
					className: ne.a.CommunityNoIcon
				})), o.a.createElement("div", {
					className: ne.a.TextSection
				}, o.a.createElement("div", {
					className: ne.a.Info
				}, l, o.a.createElement(de, {
					language: c
				})), o.a.createElement("div", {
					className: ne.a.Description
				}, n)), o.a.createElement("div", {
					className: ne.a.ButtonSection
				}, i && o.a.createElement(K, {
					className: ne.a.SelectedIcon
				}), !i && o.a.createElement(J, {
					className: ne.a.SelectedIcon
				})))
			}, de = e => {
				let {
					language: t
				} = e;
				if (!t) return null;
				const n = t.substring(0, 2).toUpperCase();
				return "EN" === n ? null : o.a.createElement("div", {
					className: ne.a.LangIndicator
				}, n)
			}, le = e => {
				let {
					showMore: t,
					text: n
				} = e;
				return o.a.createElement("div", {
					className: ne.a.MoreRecommendations
				}, o.a.createElement("button", {
					onClick: t
				}, se._("Show more", null, {
					hk: "3uUa1R"
				})))
			};
			var ue = e => {
					let {
						communitiesByTopic: t,
						loadingCommunities: n,
						recommendedCommunities: s,
						selected: r,
						schemeName: i,
						toggleSelection: c,
						toggleAll: d,
						viewportRoot: l
					} = e;
					const u = Object(v.a)();
					Object(a.useEffect)(() => {
						u(Object(A.l)())
					}, [u]);
					const [m, p] = Object(a.useState)(new Set);
					return o.a.createElement("div", {
						className: ne.a.CommunityListWrapper
					}, o.a.createElement("div", {
						className: ne.a.headerBarImproved
					}, o.a.createElement("div", {
						className: $.a.title
					}, se._("Communities", null, {
						hk: "Gdzfs"
					})), o.a.createElement("div", {
						className: $.a.subtitle
					}, se._("Select a few to get started. You can update them later.", null, {
						hk: "2GcuTd"
					}))), s.length > 0 && o.a.createElement(ae, {
						community: {
							communities: s,
							topicId: "recommended",
							topicTitle: re(),
							topicName: "recommended_for_you"
						},
						schemeName: i,
						selected: r,
						toggleAll: d,
						toggleSelection: c,
						setViewedCommunities: p,
						viewedCommunities: m,
						viewportRoot: l
					}), (!!t.length || n) && o.a.createElement(o.a.Fragment, null, n && o.a.createElement(oe, null), t.map(e => o.a.createElement(ae, {
						key: e.topicId,
						community: e,
						schemeName: i,
						selected: r,
						toggleAll: d,
						toggleSelection: c,
						setViewedCommunities: p,
						viewedCommunities: m,
						viewportRoot: l
					}))))
				},
				me = n("./src/reddit/components/Onboarding/Interests/InterestPill.tsx"),
				pe = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				be = n("./src/reddit/components/Onboarding/Interests/InterestPicker.m.less"),
				ge = n.n(be);
			const {
				fbt: fe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), he = e => {
				let {
					interests: t,
					schemeName: n,
					selected: s,
					toggleSelection: r,
					topicColor: i = null,
					viewportRoot: c = null,
					setViewedInterests: d,
					viewedInterests: l
				} = e;
				const u = Object(v.a)(),
					m = Object(a.useCallback)((e, t, s, a, o) => {
						u(Object(A.s)(!t, !s, a, o, n)), r(e)
					}, [n, u, r]);
				return o.a.createElement(o.a.Fragment, null, t.map((e, t) => {
					var a;
					const {
						id: u,
						topic: p
					} = e, b = !!s[u], g = null !== i, f = l.has(u);
					return o.a.createElement(o.a.Fragment, {
						key: e.id
					}, o.a.createElement(ee.a, {
						fireOnce: !0,
						viewportRoot: c,
						threshold: 1,
						rootMargin: "0px 0px -85px 0px",
						onEnter: f ? void 0 : Object(A.r)(!g, p, u, n),
						onEnterHandler: e => {
							f || d(new Set(l).add(u))
						}
					}, o.a.createElement(me.a, {
						colorIndex: g && null != i ? i : t,
						isSelected: b,
						isSubtopic: g,
						key: u,
						onClickHandler: () => m(e, b, g, p, u),
						topic: p
					}), b && !!(null === (a = e.children) || void 0 === a ? void 0 : a.length) && o.a.createElement(he, {
						interests: e.children,
						schemeName: n,
						selected: s,
						toggleSelection: r,
						topicColor: t,
						setViewedInterests: d,
						viewedInterests: l
					})))
				}))
			}, Oe = () => {
				const e = Object(pe.b)({
					isLoading: !0
				});
				return o.a.createElement(o.a.Fragment, null, H()(30, t => o.a.createElement("div", {
					key: t,
					className: Object(d.a)(ge.a.Placeholder, e)
				})))
			};
			var xe = e => {
					let {
						interests: t,
						schemeName: n,
						loadingInterests: s,
						selected: r,
						toggleSelection: i,
						viewportRoot: c
					} = e;
					const d = Object(v.a)();
					Object(a.useEffect)(() => {
						d(Object(A.v)())
					}, [d]);
					const [l, u] = Object(a.useState)(new Set);
					return o.a.createElement("div", {
						className: ge.a.InterestListButtons
					}, o.a.createElement("div", {
						className: ge.a.headerBarImproved
					}, o.a.createElement("div", {
						className: $.a.title
					}, fe._("Interests", null, {
						hk: "3XVu2d"
					})), o.a.createElement("div", {
						className: $.a.subtitle
					}, fe._("Pick 3 or more things you’d like to see in your home feed", null, {
						hk: "3TEuhg"
					}))), s ? o.a.createElement(Oe, null) : o.a.createElement(he, {
						interests: t,
						schemeName: n,
						selected: r,
						toggleSelection: i,
						viewportRoot: c,
						setViewedInterests: u,
						viewedInterests: l
					}))
				},
				ve = n("./src/reddit/components/Onboarding/LanguageCollection/LanguageCollection.m.less"),
				Ee = n.n(ve),
				Ce = n("./src/reddit/constants/experiments.ts"),
				_e = n("./src/reddit/selectors/experiments/onboarding.ts"),
				je = n("./src/reddit/selectors/meta.ts");
			const {
				fbt: Se
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ke = e => {
				let {
					topTwoVariant: t
				} = e;
				const n = t ? 2 : 10;
				return o.a.createElement(o.a.Fragment, null, H()(n, e => o.a.createElement(z.a, {
					key: "loading-" + e,
					fullWidth: !0,
					large: !0
				})))
			}, ye = e => {
				let {
					country: t,
					isAtLimit: n,
					isLanguageCollectionSettings: s,
					isNightMode: r,
					isSelected: a,
					isToastVisible: i,
					languageSelection: c,
					setIsToastVisible: l,
					setToastText: u,
					toggleLanguageSelection: m
				} = e;
				const p = Object(v.a)();
				return o.a.createElement("div", {
					className: Object(d.a)(Ee.a.LanguageRow, {
						[Ee.a.Selected]: a && !r,
						[Ee.a.NightModeSelected]: a && r
					}),
					onClick: () => {
						n && !a ? (u(Se._("You’ve already selected the maximum of {amount} languages", [Se._param("amount", 10)], {
							hk: "274yT2"
						})), i || (l(!0), setTimeout(() => {
							u(null), l(!1)
						}, 3e3))) : (p(s ? Object(A.F)(t, c.isoCode, !a) : Object(A.w)(t, c.isoCode, !a)), m(c.isoCode))
					},
					"data-testid": c.isoCode
				}, o.a.createElement("div", {
					className: Ee.a.FrontFlex
				}), o.a.createElement("div", {
					className: Ee.a.TextSection
				}, c.translatedDisplayName), o.a.createElement("div", {
					className: Ee.a.ButtonSection
				}, a && o.a.createElement(K, {
					className: Ee.a.SelectedIcon
				})))
			};
			var Ne = e => {
				let {
					languages: t,
					loadingLanguages: n,
					isLanguageCollectionSettings: s,
					selectedLanguages: r,
					setToastText: c,
					setShowAllLanguage: d,
					showAllLanguage: l,
					toggleLanguageSelection: u
				} = e;
				const [m, p] = Object(a.useState)(!1), b = Object(i.e)(X.eb), g = Object(i.e)(_e.a) === Ce.ad.TopTwo, f = Object(i.e)(je.b), h = Object(v.a)();
				Object(a.useEffect)(() => {
					h(s ? Object(A.H)(f) : Object(A.z)(f))
				}, [f, s, h]);
				const O = t.sortedLanguages.slice(0, s || !g || g && l ? void 0 : 2),
					x = Se._("Update your settings to make it easier to discover content in up to {amount} languages", [Se._param("amount", 10)], {
						hk: "11AxnO"
					});
				return o.a.createElement("div", {
					className: Ee.a.LanguageListButtons
				}, o.a.createElement("div", {
					className: Ee.a.HeaderBarImproved
				}, o.a.createElement("div", {
					className: $.a.title
				}, Se._("See content in more languages", null, {
					hk: "35s0TM"
				})), o.a.createElement("div", {
					className: $.a.subtitle
				}, x)), n ? o.a.createElement(ke, {
					topTwoVariant: g
				}) : o.a.createElement("div", null, O.map((e, t) => o.a.createElement(ye, {
					country: f,
					isAtLimit: 10 === Object.keys(r).length,
					isLanguageCollectionSettings: s,
					isNightMode: b,
					isSelected: r[e.isoCode],
					isToastVisible: m,
					key: "onboarding-lang-" + t,
					languageSelection: e,
					setIsToastVisible: p,
					setToastText: c,
					toggleLanguageSelection: u
				})), !s && g && !l && o.a.createElement("div", {
					className: Ee.a.MoreLanguages
				}, o.a.createElement("button", {
					onClick: () => {
						d(!0)
					}
				}, Se._("Show more", null, {
					hk: "1zOy4z"
				})))))
			};
			const {
				fbt: Ie
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Te;
			! function(e) {
				e.AVATAR = "avatar", e.CELEBRATION = "celebration", e.COMMUNITIES = "communities", e.GENDER = "gender", e.INTERESTS = "interests", e.LANGUAGES = "languages"
			}(Te || (Te = {}));
			const we = e => {
				let {
					activeStep: t,
					avatarImage: n,
					communitiesByTopic: s,
					autoProgressGenderCollection: r,
					fetchRandomAvatar: i,
					interests: c,
					isLanguageCollectionSettings: d,
					languages: l,
					loadingCommunities: u,
					loadingInterests: m,
					loadingLanguages: p,
					recommendedCommunities: b,
					selectedCommunities: g,
					selectedInterests: f,
					selectedLanguages: h,
					setSelectedCommunities: O,
					setSelectedInterests: x,
					selectedGenderOption: v,
					setSelectedGenderOption: E,
					setSelectedLanguages: C,
					setShowAllLanguage: _,
					setToastText: j,
					showAllLanguage: S
				} = e;
				const k = Object(a.useRef)(null);
				Object(a.useEffect)(() => {
					var e, t;
					return null === (t = null === (e = k.current) || void 0 === e ? void 0 : e.scroll) || void 0 === t ? void 0 : t.call(e, 0, 0)
				}, [t]);
				const y = Object(a.useCallback)(e => {
						const t = g[e],
							n = {
								...g
							};
						t ? delete n[e] : n[e] = !0, O(n)
					}, [g, O]),
					N = Object(a.useCallback)((e, t) => {
						const n = {
								...g
							},
							r = e => e.forEach(e => {
								t ? n[e.id] = !0 : delete n[e.id]
							});
						if ("recommended" === e) r(b);
						else {
							const t = s.find(t => t.topicId === e);
							t && r(t.communities)
						}
						O(n)
					}, [s, b, g, O]),
					I = Object(a.useCallback)(e => {
						const {
							children: t,
							id: n
						} = e, s = f[n], r = {
							...f
						};
						s ? (delete r[n], s.forEach(e => delete r[e])) : r[n] = [...(null == t ? void 0 : t.map(e => e.id)) || []], x(r)
					}, [f, x]),
					T = Object(a.useCallback)(e => {
						const t = h[e],
							n = {
								...h
							};
						t ? delete n[e] : n[e] = !0, C(n)
					}, [h, C]);
				return o.a.createElement("div", {
					className: `\n      ${$.a.SelectedComponent}\n      ${t===Te.AVATAR&&$.a.SelectedComponentAvatar}\n    `,
					ref: k
				}, t === Te.GENDER && o.a.createElement(F, {
					autoProgressGenderCollection: r,
					isFlowImprovement: !0,
					selectedGenderOption: v,
					setSelectedGenderOption: E
				}), t === Te.INTERESTS && o.a.createElement(xe, {
					interests: c.topics,
					loadingInterests: m,
					schemeName: c.schemeName,
					selected: f,
					toggleSelection: I,
					viewportRoot: k.current
				}), t === Te.COMMUNITIES && o.a.createElement(ue, {
					communitiesByTopic: s,
					loadingCommunities: u,
					recommendedCommunities: b,
					schemeName: c.schemeName,
					selected: g,
					toggleAll: N,
					toggleSelection: y,
					viewportRoot: k.current
				}), t === Te.LANGUAGES && o.a.createElement(Ne, {
					languages: l,
					loadingLanguages: p,
					isLanguageCollectionSettings: d,
					selectedLanguages: h,
					setToastText: j,
					setShowAllLanguage: _,
					showAllLanguage: S,
					toggleLanguageSelection: T
				}), t === Te.AVATAR && o.a.createElement(U, {
					avatarImage: n,
					fetchRandomAvatar: i
				}))
			};
			var Le = n("./src/reddit/constants/modals.ts"),
				Re = n("./src/reddit/contexts/ApiContext.tsx"),
				Ae = n("./src/lib/makeGqlRequest/index.ts"),
				Ge = n("./node_modules/lodash/uniqBy.js"),
				Pe = n.n(Ge),
				Fe = n("./src/reddit/customMiddleware/recentSubreddits.ts"),
				Me = n("./src/reddit/endpoints/economics/specialMembership.ts"),
				Be = n("./src/reddit/endpoints/subreddit/local.ts"),
				De = n("./src/reddit/endpoints/subreddit/subscriptions.ts");
			var Ve = n("./src/reddit/models/Onboarding/index.ts"),
				qe = n("./src/redditGQL/operations/InterestTopicsByIds.json");
			const Ue = async (e, t, n) => {
				const s = await ((e, t, n) => {
					const s = {
						topicIds: [],
						schemeName: Ve.b,
						maxSubreddits: 10,
						onboardingFlow: t,
						...n
					};
					return Object(Ae.a)(e, {
						...qe,
						variables: s
					})
				})(e(), t, {
					topicIds: n
				});
				if (!s.ok) return null;
				const r = s.body,
					a = null == r ? void 0 : r.data.interestTopicsByIds;
				return a ? (e => (e => {
					let {
						edges: t
					} = e;
					const n = [];
					return t.forEach(e => {
						let {
							node: t
						} = e;
						var s, r, a;
						const o = [];
						null === (a = null === (r = null === (s = t.topic) || void 0 === s ? void 0 : s.subreddits) || void 0 === r ? void 0 : r.edges) || void 0 === a || a.forEach(e => {
							let {
								node: t
							} = e;
							t.isSubscribed || o.push((e => {
								let {
									detectedLanguage: t,
									id: n,
									prefixedName: s,
									publicDescriptionText: r,
									styles: a
								} = e;
								var o;
								return {
									description: r,
									language: t,
									icon: a.icon || (null === (o = a.legacyIcon) || void 0 === o ? void 0 : o.url),
									id: n,
									prefixedName: s
								}
							})(t))
						}), o.length && n.push({
							communities: o,
							topicId: t.id,
							topicTitle: t.topic.title,
							topicName: t.topic.name
						})
					}), n
				})(e))(a) : null
			}, We = e => {
				var t;
				return {
					description: e.publicDescription,
					language: null,
					icon: e.communityIcon || (null === (t = e.icon) || void 0 === t ? void 0 : t.url),
					id: e.id,
					isSubscribed: e.isSubscribed,
					prefixedName: e.displayText
				}
			}, He = async e => {
				var t;
				const n = await Object(Be.b)(e(), {
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
						return We(t[n])
					})
				}
				return null
			}, Qe = async e => {
				const t = Object(Fe.b)();
				if (null == t ? void 0 : t.length) {
					const n = t.map(e => e.id),
						s = await Object(Me.e)(e(), n);
					if (s.ok) return Object.values(s.body).map(We)
				}
				return null
			};
			var ze = n("./src/reddit/helpers/graphql/normalizeInterestTopicsFromGql/index.ts"),
				Ke = n("./src/redditGQL/operations/InterestTopics.json"),
				Ye = n("./src/redditGQL/operations/UpdateTopicPreferences.json");
			const Je = async (e, t) => {
				const n = await ((e, t) => {
					const n = {
						first: 500,
						maxChildren: 500,
						maxDepth: 2,
						schemeName: Ve.b,
						onboardingFlow: t
					};
					return Object(Ae.a)(e, {
						...Ke,
						variables: n
					})
				})(e(), t);
				if (!n.ok) return null;
				const s = n.body,
					r = null == s ? void 0 : s.data.interestTopics;
				return r ? Object(ze.a)(r) : null
			}, Xe = (e, t) => ((e, t) => Object(Ae.a)(e, {
				...Ye,
				variables: t
			}))(e(), {
				input: {
					selectedOnboardingTopicIds: t
				}
			});
			var Ze, $e = n("./src/redditGQL/operations/LanguageSelections.json"),
				et = n("./src/redditGQL/operations/UpdateSpokenLanguagesPreference.json");
			! function(e) {
				e.ALL_KEY = "all_languages_simple", e.SUGGESTED_KEY = "suggested_languages", e.TOP_KEYS = "top_languages"
			}(Ze || (Ze = {}));
			const tt = async (e, t, n) => {
				const s = await ((e, t) => {
					const n = {
						allKey: e,
						suggestedKey: Ze.SUGGESTED_KEY
					};
					return Object(Ae.a)(t, {
						...$e,
						variables: n
					})
				})(e, t());
				if (!s.ok) return null;
				const r = s.body,
					a = null == r ? void 0 : r.data;
				if (a) {
					return ((e, t, n) => {
						let s = null,
							r = [];
						const a = [],
							o = [],
							i = {},
							c = {};
						if (!e) {
							t.identity.preferences.spokenLanguages.map(e => {
								c[e] = !0
							})
						}
						for (let d = 0; d < t.suggested.length; d++) {
							const r = t.suggested[d];
							if (i[r.isoCode] = !0, n === r.isoCode) s = r;
							else {
								if (!e && c[r.isoCode]) continue; {
									const t = !!(e || !e && c[r.isoCode]);
									a.push({
										selected: t,
										...r
									})
								}
							}
						}
						for (let d = 0; d < t.all.length; d++) {
							const a = t.all[d];
							a.isoCode === n ? (s = a, o.push({
								selected: !0,
								...a
							})) : !e && c[a.isoCode] ? o.push({
								selected: !0,
								...a
							}) : i[a.isoCode] || r.push({
								selected: !(e || !c[a.isoCode]),
								...a
							})
						}
						if (r = a.concat(r), null === s) {
							const e = n.split("-").shift();
							for (let t = 0; t < r.length; t++)
								if (r[t].isoCode === e) {
									s = r[t], r.splice(t, 1);
									break
								}
						}
						return s && ((e || !e && c[s.isoCode]) && (s.selected = !0), r.unshift(s)), e || (r = o.concat(r)), {
							sortedLanguages: r
						}
					})(e === Ze.TOP_KEYS, a, n)
				}
				return null
			}, nt = async (e, t) => {
				const n = await ((e, t) => {
					const n = {
						input: {
							spokenLanguages: t
						}
					};
					return Object(Ae.a)(e, {
						...et,
						variables: n
					})
				})(e(), Object.keys(t));
				if (!n.ok) return null;
				const s = n.body;
				return null == s ? void 0 : s.data
			};
			var st = n("./src/reddit/helpers/counters/onboarding.ts"),
				rt = n("./src/reddit/helpers/onboarding/reonboarding.ts"),
				at = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				ot = n("./src/reddit/icons/svgs/svgIcons.tsx"),
				it = n("./src/reddit/selectors/activeModal.ts"),
				ct = n("./src/reddit/selectors/experiments/econ/index.ts"),
				dt = n("./src/reddit/selectors/experiments/survey.ts"),
				lt = n("./src/reddit/selectors/experiments/targetedOnboardingSkip.ts"),
				ut = n("./src/reddit/selectors/onboarding.ts"),
				mt = n("./src/reddit/actions/accountGender/index.ts"),
				pt = n("./src/reddit/actions/onboarding/index.ts");

			function bt() {
				return (bt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: gt
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ft = e => e.type === Ve.d.REONBOARDING, ht = () => Object(g.f)({
				kind: E.b.Error,
				text: gt._("Something went wrong", null, {
					hk: "22u7ha"
				})
			}), Ot = async (e, t) => {
				const n = {
					ok: !0,
					preSelectedCommunities: {},
					recommendedCommunities: []
				};
				try {
					n.recommendedCommunities = await (async (e, t) => {
						const n = [He(t), Qe(e)],
							[s, r] = await Promise.all(n);
						return Pe()([...r || [], ...s || []], e => e.id).filter(e => !e.isSubscribed)
					})(e, t)
				} catch (s) {
					n.ok = !1
				}
				return n
			}, xt = async (e, t, n, s) => {
				const r = Object.keys(n),
					a = Object.keys(s),
					o = [],
					i = {
						ok: !0,
						reload: !1
					};
				if (r.length && o.push(((e, t) => Object(De.c)(e(), {
						subredditIds: t,
						subscribe: !0
					}))(e, r)), a.length && o.push(Xe(t, a)), o.length) try {
					(await Promise.all(o)).some(e => {
						let {
							ok: t
						} = e;
						return !t
					}) ? i.ok = !1 : i.reload = !0
				} catch (c) {
					i.ok = !1
				}
				return i
			}, vt = Object(c.a)(e => {
				const {
					gqlContext: t,
					apiContext: n
				} = e, s = Object(i.d)(), r = Object(v.a)(), c = Object(i.e)(it.a), f = ft(c), h = (e => e.type === Ve.d.LANGUAGE_COLLECTION)(c);
				let O = f ? Te.INTERESTS : Te.GENDER;
				h && (O = Te.LANGUAGES);
				const [C, j] = Object(a.useState)(O), [S, k] = Object(a.useState)(null), y = Object(i.e)(ut.a), [I, T] = Object(a.useState)(f), [w, R] = Object(a.useState)(!1), P = {
					topics: [],
					schemeName: void 0
				}, [F, M] = Object(a.useState)(P), [D, V] = Object(a.useState)(!1), [q, U] = Object(a.useState)(ft(c) && (null == c ? void 0 : c.selectedInterests) || {}), [W, H] = Object(a.useState)(!1), [Q, z] = Object(a.useState)([]), [Y, J] = Object(a.useState)([]), [Z, ee] = Object(a.useState)({}), [te, ne] = Object(a.useState)(0), [se, re] = Object(a.useState)({
					sortedLanguages: []
				}), [ae, oe] = Object(a.useState)(!1), [ie, ce] = Object(a.useState)({}), [de, le] = Object(a.useState)(null), [ue, me] = Object(a.useState)(!1), {
					avatarImage: pe,
					fetchRandomAvatar: be,
					saveAvatar: ge
				} = _(), fe = f ? Ve.c.REONBOARDING_BOTTOM_SHEET : Ve.c.ONBOARDING;
				Object(a.useEffect)(() => {
					(I || y) && async function() {
						V(!0);
						const e = await Je(t, fe);
						V(!1), e && (ne(Date.now() / l.Xb), M(e))
					}()
				}, [I, y, t, fe]), Object(a.useEffect)(() => {
					y && Object(st.a)(null == S ? void 0 : S.genderCategory, y.success)
				}, [y, S]);
				const he = Object(i.e)(_e.b) === Ce.tb.Removed;
				Object(a.useEffect)(() => {
					let e = !1;
					return async function() {
						let r = {
							ok: !0,
							preSelectedCommunities: {},
							recommendedCommunities: []
						};
						he || (r = await Ot(n, t));
						const {
							ok: a,
							preSelectedCommunities: o,
							recommendedCommunities: i
						} = r;
						a ? e || (ee(o), J(i)) : s(ht())
					}(), () => {
						e = !0
					}
				}, [n, s, t, he]);
				const Oe = Object(i.e)(je.b),
					xe = Object(i.e)(je.j),
					ve = Object(i.e)(_e.a),
					Ee = ve === Ce.ad.TopTwo || ve === Ce.ad.All,
					Se = Object(a.useCallback)(async e => {
						oe(!0);
						const n = await tt(e, t, xe);
						if (oe(!1), n) {
							re(n);
							const e = {};
							for (let t = 0; t < n.sortedLanguages.length; t++) n.sortedLanguages[t].selected && (e[n.sortedLanguages[t].isoCode] = !0);
							ce(e)
						} else s(ht())
					}, [s, t, xe]);
				Object(a.useEffect)(() => {
					h && Se(Ze.ALL_KEY)
				}, [Se, h]);
				const ke = Object(a.useCallback)(async () => await nt(t, ie), [t, ie]),
					ye = Object(i.e)(e => Object(dt.f)(e)),
					Ne = Object(i.e)(X.T),
					Ie = Object(i.e)(je.g),
					Re = Object(i.e)(lt.a),
					Ae = Re === Ce.cg.CloseOnboarding,
					Ge = Re === Ce.cg.SkipTopicSelection,
					Pe = Re === Ce.cg.SmartSignal,
					Fe = Object(a.useCallback)(() => {
						s(Object(p.g)(Le.a.ONBOARDING_MODAL_D2X)), ye && s(Object(b.h)()), f && (r(Object(A.t)()), Object(rt.a)()), Ie && Ne && s(Object(u.startChangeUsernameFlow)())
					}, [s, Ne, Ie, f, ye, r]),
					Me = Object(a.useCallback)((function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1500;
						setTimeout(async () => {
							await s(Object(m.frontpageReloaded)()), setTimeout(Fe, e)
						}, e)
					}), [Fe, s]),
					Be = Object(a.useCallback)(() => {
						const e = Object.keys(q).filter(e => 0 === q[e].length || !q[e].find(e => q[e]));
						z([]), e.length && async function() {
							H(!0);
							const n = await Ue(t, fe, e);
							H(!1), n && z(n)
						}()
					}, [t, q, fe]),
					De = Object(a.useCallback)(e => {
						V(!0), j(Te.INTERESTS), s(Object(mt.a)(e))
					}, [s]),
					qe = Object(a.useCallback)(async () => {
						r(Object(A.p)()), De(S || G)
					}, [De, S, r]),
					We = Object(a.useCallback)(async e => {
						r(Object(A.p)()), De(e)
					}, [De, r]),
					He = Object(a.useCallback)(async () => {
						r(Object(A.u)());
						const e = Date.now() / l.Xb - te;
						Pe && e <= 5 ? (R(!0), U({}), be(), j(Te.AVATAR)) : (j(Te.COMMUNITIES), Be())
					}, [Be, r, te, Pe, be]),
					Qe = Object(a.useCallback)(async () => {
						r(Object(A.j)()), Ee ? (Se(Ze.TOP_KEYS), j(Te.LANGUAGES)) : (be(), j(Te.AVATAR)), (await xt(n, t, Z, q)).ok || s(ht())
					}, [n, s, Se, be, t, Z, q, r, Ee]),
					ze = Object(a.useCallback)(async () => {
						var e;
						r(Object(A.y)(Oe)), be(), j(Te.AVATAR);
						const t = await ke();
						(null === (e = null == t ? void 0 : t.updateSpokenLanguagesPreference) || void 0 === e ? void 0 : e.ok) || s(ht())
					}, [Oe, s, be, ke, r]),
					Ke = Object(a.useCallback)(() => {
						j(Te.CELEBRATION), Me()
					}, [Me]),
					Ye = Object(a.useCallback)(() => {
						ge(), Ke()
					}, [ge, Ke]),
					Xe = (() => C === Te.GENDER ? qe : C === Te.INTERESTS ? He : C === Te.COMMUNITIES ? Qe : C === Te.LANGUAGES ? ze : Ye)(),
					$e = Object(i.e)(e => C === Te.AVATAR && !f && Object(ct.a)(e));
				Object(a.useEffect)(() => {
					C !== Te.AVATAR || $e || Ke()
				}, [$e, C, Ke]);
				const et = C !== O,
					bt = Object(a.useCallback)(() => {
						C === Te.INTERESTS ? (s(Object(pt.resetGenderUpdateState)()), T(!1), j(Te.GENDER)) : C === Te.COMMUNITIES ? j(Te.INTERESTS) : C === Te.LANGUAGES ? j(w ? Te.INTERESTS : Te.COMMUNITIES) : C === Te.AVATAR && j(Ee ? Te.LANGUAGES : w ? Te.INTERESTS : Te.COMMUNITIES)
					}, [C, s, w, Ee]),
					vt = C === Te.GENDER || C === Te.LANGUAGES || C === Te.AVATAR || Ge,
					Et = Object(a.useCallback)(() => {
						C === Te.GENDER ? (r(Object(A.o)()), T(!0), j(Te.INTERESTS)) : C === Te.INTERESTS ? (r(Object(A.t)()), Ge ? (be(), j(Te.AVATAR), R(!0)) : Fe()) : C === Te.LANGUAGES ? (r(Object(A.x)(Oe)), be(), j(Te.AVATAR)) : C === Te.AVATAR && (r(Object(x.a)("skip")), Ke())
					}, [Fe, Oe, r, C, Ke, Ge, be]),
					Ct = h,
					_t = Object.keys(Z).length,
					jt = Object.keys(q).length,
					St = Object.keys(ie).length,
					kt = C === Te.INTERESTS && jt < (f ? 1 : 3) || C === Te.COMMUNITIES && _t < 1 || C === Te.LANGUAGES && St > 10;
				if (C === Te.CELEBRATION || C === Te.AVATAR && !$e) return o.a.createElement(N, null);
				let yt;
				f || Ae || h ? yt = o.a.createElement("button", {
					"aria-label": gt._("Close", null, {
						hk: "3XndV9"
					}),
					className: $.a.dismissButton,
					onClick: Fe
				}, o.a.createElement(B.a, {
					name: "close"
				})) : !Ae && vt && (yt = o.a.createElement("button", {
					className: $.a.skipButton,
					onClick: Et
				}, gt._("Skip", null, {
					hk: "2S8Lme"
				})));
				const Nt = C === Te.INTERESTS || C === Te.COMMUNITIES || C === Te.LANGUAGES;
				let It = gt._("Continue", null, {
					hk: "15wNPy"
				});
				return Ct ? It = gt._("Save", null, {
					hk: "1QmXEz"
				}) : C === Te.LANGUAGES && (It = gt._("Continue with {amount}", [gt._param("amount", Object.keys(ie).length)], {
					hk: "16fdeF"
				})), o.a.createElement("div", {
					className: `${$.a.container} ${C===Te.GENDER&&$.a.containerImproved}`
				}, o.a.createElement("header", {
					className: $.a.header
				}, o.a.createElement("div", {
					className: `\n            ${$.a.headerBar}\n            ${Nt&&$.a.noHeaderBar}\n            ${!Nt&&$.a.headerBarImproved}\n          `
				}, o.a.createElement("div", null, et && o.a.createElement(ot.d, {
					className: $.a.backButton,
					"data-testid": "onboarding-back",
					onClick: bt
				})), o.a.createElement(at.a, {
					className: $.a.snooIcon
				}), o.a.createElement("div", {
					className: $.a.skipOrDismissContainer
				}, yt)), C === Te.GENDER && o.a.createElement("div", {
					className: $.a.title
				}, gt._("About you", null, {
					hk: "35GAtt"
				})), C === Te.AVATAR && o.a.createElement("div", {
					className: $.a.title
				}, gt._("Style your avatar", null, {
					hk: "15i2ld"
				})), C === Te.GENDER && o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: $.a.subtitle
				}, gt._("Tell us about yourself to start building your home feed.", null, {
					hk: "lpWI4"
				})), o.a.createElement("div", {
					className: L.a.prompt
				}, gt._("How do you identify?", null, {
					hk: "1JAuh0"
				}))), C === Te.AVATAR && o.a.createElement("div", {
					className: $.a.subtitle
				}, gt._("This is how people will see you on Reddit.", null, {
					hk: "2SmAiC"
				}), o.a.createElement("br", null), gt._("You can change it later if you’d like.", null, {
					hk: "34hXSo"
				}))), o.a.createElement(we, {
					activeStep: C,
					autoProgressGenderCollection: We,
					avatarImage: pe,
					communitiesByTopic: Q,
					fetchRandomAvatar: be,
					interests: F,
					isLanguageCollectionSettings: h,
					languages: se,
					loadingCommunities: W,
					loadingInterests: D,
					loadingLanguages: ae,
					recommendedCommunities: Y,
					selectedCommunities: Z,
					selectedGenderOption: S,
					selectedInterests: q,
					selectedLanguages: ie,
					setSelectedCommunities: ee,
					setSelectedGenderOption: k,
					setSelectedInterests: U,
					setSelectedLanguages: ce,
					setShowAllLanguage: me,
					setToastText: le,
					showAllLanguage: ue
				}), de && o.a.createElement("div", {
					className: $.a.toast
				}, o.a.createElement("div", {
					className: $.a.toastIcon
				}, o.a.createElement(K, {
					className: $.a.toastCheckIcon
				})), o.a.createElement("div", {
					className: $.a.toastText
				}, de), o.a.createElement("div", {
					className: $.a.toastFlex
				})), !(C === Te.GENDER) && o.a.createElement("div", {
					className: Object(d.a)($.a.continueButtonWrapper, {
						[$.a.avatarPicker]: C === Te.AVATAR
					})
				}, o.a.createElement("button", {
					className: $.a.continueButton,
					disabled: kt,
					onClick: Ct ? async () => {
						var e;
						if (s(Object(p.g)(Le.a.ONBOARDING_MODAL_D2X)), C === Te.LANGUAGES) {
							const t = await ke();
							(null === (e = null == t ? void 0 : t.updateSpokenLanguagesPreference) || void 0 === e ? void 0 : e.ok) ? (r(Object(A.G)(Oe)), s(Object(g.f)({
								kind: E.b.SuccessCommunity,
								text: gt._("Changes saved", null, {
									hk: "2isjrZ"
								})
							}))) : s(ht())
						}
					} : Xe
				}, It)))
			});
			t.default = Object(Re.b)(e => o.a.createElement(vt, bt({}, e, {
				className: Object(d.a)(e.className, $.a.modal),
				onOverlayClick: r.a,
				overlayClassName: $.a.overlay
			})))
		},
		"./src/reddit/components/Onboarding/index.m.less": function(e, t, n) {
			e.exports = {
				overlay: "_199HcTqT2ANvw-1B0onPUa",
				modal: "_1ph1IkMoPsBwo5F5FlxxD",
				container: "_2aK1Wp37TOccNSDJhJiDXo",
				containerImproved: "_3K5ph7yQ6HVMc8yArX6a0R",
				header: "_2kXox4Zf-SP3_6ZW9SamZi",
				headerBar: "_u6RyWmmLuKAseqaYeXL5",
				headerBarImproved: "_2c2QGiLwKLz2bt6lBbwC7s",
				noHeaderBar: "_21iUJYcJmV8aC74zCLgtDx",
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
				selectedComponent: "_1_rW7Yn-zqDSJD9D5Kd02K",
				SelectedComponentAvatar: "_3TCCVjlVGvWmajGcRZ4Aye",
				selectedComponentAvatar: "_3TCCVjlVGvWmajGcRZ4Aye",
				toast: "_28N8Ch9iBLjWxqhTYgOzta",
				toastCheckIcon: "zcJZPpj5Db1i2cEgqCzlf",
				toastFlex: "_3PxTwgozyNawWL1HdiaVjd",
				toastIcon: "_1rKEJAzrAM3Wq0uaYg9gMa",
				toastText: "_3f69IGGLWbYx69ucCQfqNx"
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less"),
				c = n.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = o.a.wrapped(e => {
				const {
					children: t,
					className: n,
					renderBelow: s,
					text: o,
					tooltipContentClass: i,
					...l
				} = e;
				return r.a.createElement("div", d({}, l, {
					className: Object(a.a)(c.a.container, n)
				}), o ? r.a.createElement("div", {
					className: Object(a.a)(c.a.tooltip, i, s ? c.a.below : c.a.above)
				}, o) : null, t)
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = n("./src/reddit/controls/FormFields/index.tsx"),
				l = n("./src/reddit/controls/TextButton/index.tsx"),
				u = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				m = n("./src/reddit/models/Gender/index.ts"),
				p = n("./src/reddit/components/Settings/GenderCollection/Modal.m.less"),
				b = n.n(p);
			class g extends a.a.Component {
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
						isPending: r
					} = this.state;
					return a.a.createElement("section", {
						className: Object(i.a)(e, b.a.container)
					}, a.a.createElement(c.i, null, a.a.createElement(u.a, null, a.a.createElement(c.q, null, s.fbt._("I refer to myself as...", null, {
						hk: "4x0fpA"
					})), a.a.createElement(l.a, {
						onClick: t,
						disabled: r
					}, a.a.createElement(c.b, null)))), a.a.createElement(c.l, null, a.a.createElement(d.b, {
						placeholder: s.fbt._("Gender identity", null, {
							hk: "4lT15L"
						}),
						className: b.a.customGenderInput,
						disabled: r,
						maxLength: m.b,
						name: "customGender",
						onChange: this.handleCustomGenderChange,
						type: "text",
						value: n
					})), a.a.createElement(c.g, null, a.a.createElement(c.a, {
						onClick: t,
						disabled: r
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), a.a.createElement(c.r, {
						disabled: !this.inputsAreValid() || r,
						onClick: this.handleSubmit
					}, s.fbt._("Confirm", null, {
						hk: "2eSs27"
					}))))
				}
			}
			var f = Object(o.a)(g),
				h = n("./src/reddit/components/Settings/shared/Dropdown/index.tsx"),
				O = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				x = n("./src/reddit/components/Settings/GenderCollection/index.m.less"),
				v = n.n(x);
			const E = () => [{
				key: m.a.FEMALE,
				displayText: s.fbt._("Woman", null, {
					hk: "3XLHa2"
				})
			}, {
				key: m.a.MALE,
				displayText: s.fbt._("Man", null, {
					hk: "1vgSwC"
				})
			}, {
				key: m.a.NON_BINARY,
				displayText: s.fbt._("Non-binary", null, {
					hk: "1d5O8v"
				})
			}, {
				key: m.a.USER_DEFINED,
				displayLabel: s.fbt._("Custom", null, {
					hk: "rTcBl"
				}),
				displayText: s.fbt._("I refer to myself as...", null, {
					hk: "3RVNst"
				})
			}, {
				key: m.a.OPT_OUT,
				displayText: s.fbt._("I prefer not to say", null, {
					hk: "UCJJ9"
				})
			}];
			class C extends a.a.Component {
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
						const s = {
							definedGender: null,
							genderCategory: n
						};
						this.setState({
							pending: !0,
							tmpSelected: s
						}), await t(s), this.setState({
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
						selected: r
					} = this.props, {
						definedGender: o,
						genderCategory: i
					} = {
						...t ? n : r
					};
					return a.a.createElement(O.c, {
						label: s.fbt._("Gender", null, {
							hk: "1spCV5"
						}),
						subtext: s.fbt._("Reddit will never share this information and only uses it to improve what content you see.", null, {
							hk: "1PqDkg"
						})
					}, a.a.createElement("div", {
						className: v.a.wrapper
					}, a.a.createElement(h.a, {
						dropdownId: "gender-dropdown-id",
						items: E(),
						onSelect: this.onSelect,
						placeholder: s.fbt._("Select", null, {
							hk: "1zIGi5"
						}),
						selectedKey: i || ""
					})), e && a.a.createElement(f, {
						onCloseModal: this.closeCustomGenderModal,
						definedGender: o || "",
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/asTooltip.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/controls/Dropdown/index.tsx"),
				u = n("./src/reddit/controls/Dropdown/Row.tsx"),
				m = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				p = n("./src/reddit/selectors/tooltip.ts"),
				b = n("./src/reddit/components/Settings/shared/Dropdown/index.m.less"),
				g = n.n(b);
			const f = Object(i.a)(l.a),
				h = Object(o.c)({
					isDropdownOpen: (e, t) => Object(p.b)(t.dropdownId)(e)
				}),
				O = Object(a.b)(h, (e, t) => ({
					openDropdown: () => {
						e(Object(d.h)({
							tooltipId: t.dropdownId
						}))
					}
				}));
			class x extends r.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onToggleDropdown = () => {
						this.props.openDropdown()
					}, this.renderLabel = e => r.a.createElement(u.b, {
						className: g.a.dropdownRow,
						displayText: e.displayLabel || e.displayText,
						isSelected: !0,
						key: e.key,
						noHover: !0,
						noIcon: !e.icon
					}, e.contentJsx || e.icon), this.renderDropdownItem = (e, t) => r.a.createElement(u.b, {
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
						renderLabel: s = this.renderLabel,
						renderItem: a = this.renderDropdownItem,
						selectedKey: o,
						dropdownId: i
					} = this.props, d = n && {
						displayLabel: n,
						key: n
					}, l = t.find(e => e.key === o) || d || t[0];
					return r.a.createElement("div", {
						ref: this.setTooltipTargetRef,
						className: Object(c.a)(g.a.container, e.className),
						onClick: this.onToggleDropdown,
						"data-testid": i
					}, r.a.createElement("div", {
						className: g.a.labelWrapper
					}, s(l), r.a.createElement("span", null, r.a.createElement(m.b, null))), r.a.createElement(f, {
						tooltipTarget: this.tooltipTarget,
						isOpen: this.props.isDropdownOpen,
						renderContentsHidden: !0
					}, t.map(e => a(e, o === e.key))))
				}
			}
			t.a = O(x)
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
				return W
			})), n.d(t, "k", (function() {
				return Y
			})), n.d(t, "o", (function() {
				return X
			})), n.d(t, "f", (function() {
				return $
			})), n.d(t, "l", (function() {
				return te
			})), n.d(t, "m", (function() {
				return ae
			})), n.d(t, "p", (function() {
				return oe
			})), n.d(t, "j", (function() {
				return pe
			})), n.d(t, "b", (function() {
				return be
			})), n.d(t, "g", (function() {
				return ge
			})), n.d(t, "a", (function() {
				return fe
			})), n.d(t, "d", (function() {
				return Oe
			})), n.d(t, "i", (function() {
				return xe
			})), n.d(t, "c", (function() {
				return ve
			})), n.d(t, "e", (function() {
				return Ee
			})), n.d(t, "h", (function() {
				return Ce
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-uid/dist/es2015/hooks.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/higherOrderComponents/asTooltip.tsx"),
				u = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				m = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				p = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				b = n("./src/reddit/controls/Dropdown/index.tsx"),
				g = n("./src/reddit/controls/Dropdown/Row.tsx"),
				f = n("./src/reddit/controls/FormFields/index.tsx"),
				h = n("./src/lib/lessComponent.tsx"),
				O = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				x = n("./src/reddit/controls/Select/index.m.less"),
				v = n.n(x);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const C = h.a.span("Wrapper", v.a),
				_ = h.a.select("Inner", v.a),
				j = h.a.wrapped(O.b, "Caret", v.a);

			function S(e) {
				let {
					className: t,
					innerClassName: n,
					...s
				} = e;
				const a = s.disabled ? {
					"data-disabled": s.disabled
				} : {};
				return r.a.createElement(C, {
					className: t
				}, r.a.createElement(_, E({
					className: n
				}, s)), r.a.createElement(j, E({
					isSubreddit: !0
				}, a)))
			}
			var k = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				y = n("./src/reddit/controls/Typography/index.tsx"),
				N = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				I = n("./src/reddit/icons/svgs/Circle/index.tsx"),
				T = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				w = n("./node_modules/lodash/range.js"),
				L = n.n(w),
				R = n("./src/reddit/controls/Button/index.tsx"),
				A = n("./src/reddit/layout/row/Inline/index.tsx"),
				G = n("./src/reddit/models/Flair/index.ts"),
				P = n("./src/reddit/selectors/tooltip.ts"),
				F = n("./src/reddit/selectors/user.ts"),
				M = n("./src/reddit/components/Settings/shared/Widgets.m.less"),
				B = n.n(M);

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const V = Object(l.a)(b.a),
				q = h.a.wrapped(I.a, "Circle", B.a),
				U = h.a.h3("Label", B.a),
				W = h.a.wrapped(y.c, "Subtext", B.a),
				H = h.a.wrapped(m.a, "HoverTooltip", B.a),
				Q = h.a.div("ControlContainer", B.a),
				z = h.a.div("TextContainer", B.a),
				K = h.a.div("ActionContainer", B.a),
				Y = e => {
					let {
						className: t,
						direction: n,
						isCreateCommunity: s,
						inModal: a,
						isNightModeOn: o,
						disabled: i,
						indent: d,
						last: l,
						...u
					} = e;
					return r.a.createElement("div", D({}, u, {
						className: Object(c.a)(B.a.Wrapper, t, {
							[B.a.mColumn]: "column" === n,
							[B.a.mDisabled]: !!i,
							[B.a.mIndent]: !!d,
							[B.a.mLast]: !!l,
							[B.a.isCreateCommunity]: !!s,
							[B.a.inModal]: !!a,
							[B.a.isNightModeOn]: !!o
						})
					}))
				},
				J = h.a.a("Link", B.a),
				X = h.a.wrapped(J, "SubtextLink", B.a),
				Z = h.a.wrapped(T.a, "LinkIcon", B.a),
				$ = h.a.button("LinkButton", B.a),
				ee = h.a.wrapped(N.a, "ArrowRight", B.a),
				te = e => r.a.createElement(Y, {
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					isCreateCommunity: e.isCreateCommunity,
					last: e.last
				}, r.a.createElement(z, {
					className: e.textContainerClassName
				}, r.a.createElement(U, null, e.label, e.isRequired && r.a.createElement(q, null)), r.a.createElement(W, null, e.subtext)), r.a.createElement(K, null, e.children)),
				ne = h.a.div("StyledFlair", B.a),
				se = h.a.wrapped(ne, "SpoilerFlair", B.a),
				re = h.a.wrapped(ne, "NSFWFlair", B.a),
				ae = e => {
					switch (e.flair) {
						case G.f.Nsfw:
							return r.a.createElement(re, null, "NSFW");
						case G.f.Spoiler:
							return r.a.createElement(se, null, "SPOILER");
						default:
							return null
					}
				},
				oe = e => {
					const t = Object(o.a)();
					return r.a.createElement(Y, {
						className: e.className,
						disabled: e.disabled,
						indent: e.indent,
						last: e.last
					}, r.a.createElement(z, null, r.a.createElement(A.a, null, r.a.createElement("label", {
						htmlFor: t,
						className: e.labelClassname
					}, r.a.createElement(U, null, e.label))), r.a.createElement(W, null, e.subtext)), r.a.createElement(K, null, r.a.createElement(Q, null, e.tooltip && r.a.createElement(H, {
						tooltipContentClass: e.tooltipContentClassName,
						text: e.tooltip
					}), r.a.createElement(k.a, {
						id: t,
						on: e.on,
						forceOn: e.forceOn,
						onToggle: e.onClick,
						disabled: e.disabled
					}))))
				},
				ie = h.a.input("RangeSliderInput", B.a),
				ce = h.a.div("RangeSlider", B.a),
				de = h.a.div("Ticks", B.a),
				le = h.a.div("TickText", B.a),
				ue = h.a.span("PreSubText", B.a),
				me = Object(i.c)({
					isNightModeOn: F.eb
				}),
				pe = Object(a.b)(me)(e => r.a.createElement(Y, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled,
					inModal: e.inModal,
					isNightModeOn: e.isNightModeOn,
					direction: e.direction,
					className: e.className
				}, r.a.createElement(z, {
					style: {
						flex: 5
					}
				}, !e.inModal && r.a.createElement(A.a, null, r.a.createElement(U, {
					className: e.labelClassname
				}, e.label)), !e.hideSubtext && r.a.createElement(W, null, " ", r.a.createElement(ue, {
					style: {
						color: e.ticks[e.value].color
					}
				}, " ", e.ticks[e.value].text + ": ", " "), " ", e.subtext)), r.a.createElement(K, {
					style: {
						flex: 3,
						margin: "20px 20px 0 0"
					}
				}, r.a.createElement(ce, null, r.a.createElement(ie, {
					style: {
						background: "linear-gradient(to right, " + L()(1, e.max + 1).map((t, n) => t <= e.value ? `${e.ticks[e.value].color} ${(t-1)/e.max*100}%,\n                    ${e.ticks[e.value].color} ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : t !== e.max ? `#c5c5c5 ${(t-1)/e.max*100}%, #c5c5c5 ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : `#c5c5c5 ${(t-1)/e.max*100}%`) + ", #C5C5C5 100%)"
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
				}), r.a.createElement(de, null, Object.keys(e.ticks).map((t, n) => r.a.createElement(le, {
					key: t,
					style: {
						color: t === e.value.toString() ? e.ticks[t].color : "#878A8C"
					}
				}, e.ticks[t].text))))))),
				be = e => r.a.createElement(Y, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, r.a.createElement(z, null, r.a.createElement(A.a, null, r.a.createElement(U, null, e.label)), r.a.createElement(W, null, e.subtext)), r.a.createElement(K, null, r.a.createElement(Q, null, r.a.createElement(R.o, {
					onClick: e.onClick
				}, e.actionText)))),
				ge = e => r.a.createElement(Y, {
					className: e.className,
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, r.a.createElement(z, null, r.a.createElement(J, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, e.label, r.a.createElement(Z, null)), r.a.createElement(W, null, e.subtext)), r.a.createElement(K, null, r.a.createElement(J, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, r.a.createElement(ee, null)))),
				fe = e => r.a.createElement(Y, {
					className: e.className,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, r.a.createElement(z, null, r.a.createElement($, {
					onClick: e.onClick,
					className: Object(c.a)({
						[B.a.NoColor]: e.color && "none" === e.color
					})
				}, e.label), r.a.createElement(W, null, e.subtext)), r.a.createElement(K, null, !!e.hintText && r.a.createElement("div", {
					className: B.a.ActionHintText
				}, e.hintText), r.a.createElement($, {
					onClick: e.onClick,
					className: Object(c.a)({
						[B.a.NoColor]: e.color && "none" === e.color
					})
				}, r.a.createElement(ee, {
					className: Object(c.a)({
						[B.a.NoColor]: e.color && "none" === e.color
					})
				})))),
				he = Object(i.c)({
					isOpen: (e, t) => Object(P.b)(t.id)(e)
				}),
				Oe = Object(a.b)(he, (e, t) => ({
					openDropdown: () => {
						e(Object(d.h)({
							tooltipId: t.id
						}))
					}
				}))(e => r.a.createElement(Y, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, r.a.createElement(z, null, r.a.createElement(U, null, e.label), r.a.createElement(W, null, e.subtext)), r.a.createElement(K, null, (e => r.a.createElement("div", {
					className: B.a.DropdownWrapper,
					onClick: e.openDropdown
				}, r.a.createElement("span", {
					className: B.a.Row,
					id: `SettingDropdown--${e.id}`
				}, e.displayTitle || e.selected), r.a.createElement(O.b, {
					className: B.a.DropdownTriangle
				}), r.a.createElement(V, {
					container: void 0,
					isOpen: e.isOpen,
					renderContentsHidden: !0,
					isOverlay: !1,
					tooltipId: `SettingDropdown--${e.id}`
				}, e.items.map((t, n) => r.a.createElement(g.b, {
					className: B.a.DropdownRow,
					displayText: e.displayItems ? e.displayItems[n] : t,
					isSelected: e.selected === t,
					onClick: () => e.onClick(t),
					key: "row--" + n,
					item: t
				}))), e.descriptions && r.a.createElement("div", {
					className: B.a.DescriptionsRow
				}, e.descriptions[e.items.indexOf(e.selected)] || e.displayItems && e.descriptions[e.displayItems.indexOf(e.selected)])))(e)))),
				xe = e => {
					let {
						disabled: t,
						last: n,
						onClick: a,
						onChange: o,
						...i
					} = e;
					const c = Object(s.useCallback)(e => o(e.target.value), [o]),
						{
							items: d
						} = i;
					return r.a.createElement(Y, {
						disabled: t
					}, r.a.createElement(z, null, r.a.createElement("label", {
						htmlFor: i.id
					}, r.a.createElement(U, {
						className: i.labelClassname
					}, i.label)), r.a.createElement(W, null, i.subtext)), r.a.createElement("div", {
						className: B.a.Wrapper__LineBreak
					}), r.a.createElement(Y, {
						last: n,
						indent: !0,
						disabled: t
					}, r.a.createElement(S, {
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
						return r.a.createElement("option", {
							key: t,
							value: t
						}, n)
					}))))
				},
				ve = e => r.a.createElement(Y, {
					className: e.className,
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, r.a.createElement(z, null, r.a.createElement(U, null, e.label), r.a.createElement(W, null, e.subtext)), r.a.createElement(K, null, e.children)),
				Ee = e => r.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, e.isCreateCommunity && r.a.createElement("span", {
					className: B.a.tag
				}, "r/"), r.a.createElement(f.a, {
					className: e.isCreateCommunity ? B.a.input : void 0,
					disabled: !!e.disabled,
					onChange: e.onChange,
					placeholder: e.placeholder,
					maxLength: e.maxChars,
					type: "text",
					value: e.value,
					onBlur: e.onBlur
				}), !e.hideCountdown && r.a.createElement(u.a, {
					maxChars: e.maxChars,
					text: e.value
				})),
				Ce = e => r.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, r.a.createElement(p.i, {
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
				}), r.a.createElement("div", {
					className: B.a.MultiLineInputSettingsBottomRow
				}, !e.hideCountdown && r.a.createElement(u.a, {
					maxChars: e.maxChars,
					text: e.value || ""
				}), !!e.actionLink && r.a.createElement("div", {
					className: B.a.ActionLinkContainer
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
				return o
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
				return g
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "j", (function() {
				return E
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				a = n.n(r);
			const o = s.a.section("FormPage", a.a),
				i = s.a.h1("HomePageTitle", a.a),
				c = s.a.button("HomePageBreadcrumb", a.a),
				d = s.a.div("HomePageGroup", a.a),
				l = s.a.h1("FormPageTitle", a.a),
				u = s.a.div("FormPageSection", a.a),
				m = s.a.div("FormGroup", a.a),
				p = s.a.h2("FormGroupTitle", a.a),
				b = s.a.div("FormElement", a.a),
				g = s.a.div("FormGroupDescription", a.a),
				f = s.a.div("FormItem", a.a),
				h = s.a.h3("FormElementTitle", a.a),
				O = s.a.div("FormElementDescription", a.a),
				x = s.a.div("FormElementError", a.a),
				v = s.a.div("FormElementSubGroup", a.a),
				E = s.a.li("FormListItem", a.a)
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
				return g
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "g", (function() {
				return x
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/Input/ModalInput.tsx"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				o = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				l = n.n(d);
			const u = s.a.wrapped(r.a, "ModalInput", l.a),
				m = s.a.input("Input", l.a),
				p = s.a.wrapped(c.a, "RadioOn", l.a),
				b = s.a.wrapped(i.a, "RadioOff", l.a),
				g = s.a.wrapped(a.a, "Checkbox", l.a),
				f = s.a.wrapped(o.a, "CheckboxSelected", l.a),
				h = s.a.textarea("Textarea", l.a),
				O = s.a.label("StyledLabel", l.a),
				x = s.a.input("StyledFileInput", l.a)
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				i = n.n(o);
			const c = e => r.a.createElement("div", {
				className: Object(a.a)(i.a.placeholderWrapper, e.fullWidth && i.a.fullWidth, e.large && i.a.large)
			}, r.a.createElement("span", {
				className: i.a.subredditIconLoading
			}), r.a.createElement("span", {
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
				handleOverflow: "_1mEfDz-ZrTiw9KxnSpAXBy",
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
			var s, r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-dom/index.js"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx");
			! function(e) {
				e[e.Visible = 0] = "Visible", e[e.NotVisible = 1] = "NotVisible"
			}(s || (s = {})), t.a = Object(i.c)(class extends a.a.Component {
				constructor() {
					super(...arguments), this.visibilityState = s.NotVisible, this.enterFired = !1, this.exitFired = !1
				}
				componentDidMount() {
					if (this.props.children) {
						const e = Object(o.findDOMNode)(this);
						e && "string" != typeof e && (this.observer = new IntersectionObserver(e => {
							e.forEach(e => {
								if (e.isIntersecting && this.visibilityState === s.NotVisible) {
									if (this.visibilityState = s.Visible, this.props.fireOnce && this.enterFired) return;
									this.props.onEnter && (this.props.sendEvent(this.props.onEnter), this.enterFired = !0), this.props.onEnterHandler && this.props.onEnterHandler(e)
								}
								if (!e.isIntersecting && this.visibilityState === s.Visible) {
									if (this.visibilityState = s.NotVisible, this.props.fireOnce && this.exitFired) return;
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
				return v
			})), n.d(t, "c", (function() {
				return E
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/uniqueId.js"),
				a = n.n(r),
				o = n("./node_modules/raf/index.js"),
				i = n.n(o),
				c = n("./node_modules/react/index.js"),
				d = n.n(c),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/higherOrderComponents/asModal/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/layout/row/Inline/index.tsx"),
				b = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				g = n.n(b);
			var f = Object(u.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return d.a.createElement("div", {
						className: g.a.wrapper
					}, d.a.createElement(p.a, {
						className: g.a.titleRow
					}, n), d.a.createElement("div", {
						className: g.a.detailsContainer
					}, t), d.a.createElement(p.a, {
						className: g.a.buttonRow
					}, d.a.createElement(m.l, {
						className: g.a.confirmButton,
						onClick: e.onConfirmed
					}, s.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				h = n("./src/reddit/controls/ErrorText/index.m.less"),
				O = n.n(h);
			class x extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${a()()}`,
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
						errorModalTitle: r = s.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: a = s.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: o,
						isModalOpen: i
					} = this.state;
					return d.a.createElement("div", {
						className: Object(l.a)(O.a.wrapper, t)
					}, d.a.createElement("span", {
						className: O.a.description,
						ref: this.spanRef
					}, e), o && d.a.createElement("span", {
						className: O.a.moreText,
						onClick: this.toggleModal
					}, a), i && d.a.createElement(f, {
						onConfirmed: this.toggleModal,
						title: r
					}, n || e))
				}
			}
			const v = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: s,
						fallbackMessage: r,
						messages: a = []
					} = e, o = a.length ? a : r ? [r] : [];
					return o.length ? d.a.createElement("div", {
						className: t
					}, o.map((e, t) => d.a.createElement(x, {
						className: n,
						errorModalTitle: s,
						key: t
					}, e))) : null
				},
				E = e => d.a.createElement(v, {
					fallbackMessage: s.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = x
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
				return g
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return x
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/ErrorText/index.tsx"),
				c = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				d = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				l = n("./src/reddit/controls/FormFields/index.m.less"),
				u = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const p = o.a.input("input", u.a),
				b = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				g = e => {
					let {
						label: t,
						children: n,
						inputRef: s,
						className: o,
						isInvalid: i,
						...c
					} = e;
					const d = void 0 !== c.value && "" !== c.value;
					return r.a.createElement("div", {
						className: Object(a.a)(u.a.inputWrapper, o, {
							[u.a.mIsInvalid]: i
						}),
						onClick: b
					}, r.a.createElement(p, m({
						"aria-invalid": i,
						innerRef: s
					}, c)), t && r.a.createElement("label", {
						className: Object(a.a)(u.a.label, {
							[u.a.mHasValue]: d
						})
					}, t), n)
				},
				f = e => {
					let {
						label: t,
						children: n,
						inputRef: s,
						isInvalid: o,
						className: i,
						redditStyle: c,
						...d
					} = e;
					const l = void 0 !== d.value && "" !== d.value;
					return r.a.createElement("div", {
						className: Object(a.a)(u.a.inputMovingLabelWrapper, i, {
							[u.a.mIsInvalid]: o,
							[u.a.mIsRedditStyle]: c
						}),
						onClick: b
					}, r.a.createElement(p, m({
						innerRef: s
					}, d)), t && r.a.createElement("label", {
						className: Object(a.a)(u.a.label, {
							[u.a.mHasValue]: l
						})
					}, t), n)
				},
				h = e => r.a.createElement("div", {
					className: Object(a.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", r.a.createElement(c.a, {
					className: u.a.plus
				}));
			var O;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(O || (O = {}));
			class x extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: O.ADD
						})
					}, this.updateValue = (e, t) => {
						const n = this.props.values.slice();
						n[t] = e.target.value, this.props.onChange(n)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							n = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: O.REMOVE,
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
						placeholder: s,
						errors: a = []
					} = this.props;
					return e.map((e, o) => r.a.createElement(g, {
						inputRef: e => this.setInputRef(e, o),
						isInvalid: !!a[o],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, o),
						placeholder: s,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, r.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(o)
					}, r.a.createElement(d.b, {
						className: u.a.trash
					})), !!a[o] && r.a.createElement(i.b, {
						className: u.a.errorText
					}, a[o])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: n,
						maxLength: s,
						addValueText: o,
						disabled: i
					} = this.props;
					this.focusedInput = null;
					const c = !(!!s && n.length >= s) && !i;
					return r.a.createElement("div", {
						className: Object(a.a)(u.a.multiInputWrapper, e)
					}, t && c && r.a.createElement(h, {
						onClick: this.addValue,
						text: o
					}), this.renderFields(), !t && c && r.a.createElement(h, {
						onClick: this.addValue,
						text: o
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = n.n(o);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: s = 10
				} = e;
				return r.a.createElement("div", {
					className: Object(a.a)(i.a.loadingIcon, n, {
						[i.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${s}px`
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
			var s = n("./src/config.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts"),
				i = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				c = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function d(e, t) {
				return Object(o.a)(e, {
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
				return Object(o.a)(e, {
					endpoint: `${s.a.metaUrl}/ps/me/braintree-client-tokens`,
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function u(e, t) {
				return Object(o.a)(e, {
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
				return Object(o.a)(Object(r.a)(e, [a.a]), {
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
				const n = await Object(o.a)(e, {
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
				if (!n.ok) throw new Error(`Error fetching provisional membership: ${Object(i.b)(n.error)}`);
				return n.body
			}
		},
		"./src/reddit/endpoints/subreddit/local.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/redditGQL/operations/GetNearbySubreddits.json"),
				a = n("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts");
			const o = (e, t) => Object(s.a)(e, {
				...r,
				variables: t
			});
			async function i(e, t) {
				const n = await o(e, t);
				if (n && n.ok) {
					const e = n.body,
						t = e && e.data && e.data.nearbySubreddits;
					return Object(a.a)(t)
				}
			}
			t.a = o
		},
		"./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return o
			}));
			n("./node_modules/lodash/isEmpty.js");
			var s = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const r = e => {
					let {
						edges: t,
						pageInfo: n
					} = e;
					const r = {},
						a = [];
					for (const {
							node: o,
							...i
						} of t) {
						const e = Object(s.a)(o);
						r[e.id] = e, a.push(i)
					}
					return {
						pageInfo: n,
						rankings: a,
						subreddits: r
					}
				},
				a = e => {
					let {
						edges: t
					} = e;
					const n = {},
						r = [];
					for (const {
							node: a,
							...o
						} of t) {
						const e = Object(s.a)(a);
						n[e.id] = {
							...e,
							bannerBackgroundImage: a && a.styles && a.styles.bannerBackgroundImage
						}, r.push(o)
					}
					return {
						rankings: r,
						subreddits: n
					}
				},
				o = e => {
					let {
						edges: t,
						pageInfo: n
					} = e;
					const r = {},
						a = [];
					let o = 0;
					for (const {
							node: i
						} of t) {
						const e = Object(s.a)(i);
						r[e.id] = {
							...e,
							publicDescription: null == i ? void 0 : i.publicDescriptionText,
							bannerBackgroundImage: i && i.styles && i.styles.bannerBackgroundImage
						}, a.push({
							id: e.id,
							rank: o
						}), o += 1
					}
					return {
						rankings: a,
						subreddits: r,
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
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				a = n.n(r);
			const o = e => {
					let {
						isLoading: t
					} = e;
					return Object(s.a)(a.a.loadingBackground, {
						[a.a["m-loading"]]: t
					})
				},
				i = e => Object(s.a)(a.a.loadingBar, o(e))
		},
		"./src/reddit/icons/svgs/CommunityDefault/filled.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", a({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), r.a.createElement("path", {
				d: "M16.5,2.924,11.264,15.551H9.91L15.461,2.139h.074a9.721,9.721,0,1,0,.967.785ZM8.475,8.435a1.635,1.635,0,0,0-.233.868v4.2H6.629V6.2H8.174v.93h.041a2.927,2.927,0,0,1,1.008-.745,3.384,3.384,0,0,1,1.453-.294,3.244,3.244,0,0,1,.7.068,1.931,1.931,0,0,1,.458.151l-.656,1.558a2.174,2.174,0,0,0-1.067-.246,2.159,2.159,0,0,0-.981.215A1.59,1.59,0,0,0,8.475,8.435Z"
			}))
		},
		"./src/reddit/models/Gender/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e.FEMALE = "FEMALE", e.MALE = "MALE", e.NON_BINARY = "NON_BINARY", e.OPT_OUT = "OPT_OUT", e.USER_DEFINED = "USER_DEFINED"
				}(s || (s = {}));
			const r = 50
		},
		"./src/reddit/reducers/features/liveBar/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/actions/liveBar/index.ts");
			const r = {
				items: []
			};
			t.a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.a:
						return {
							...e, items: t.payload
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/features/marketplace/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/actions/economics/marketplace/constants.ts");
			const r = {};
			var a = n("./node_modules/redux/es/redux.js"),
				o = n("./src/reddit/actions/frontpage/constants.ts");
			const i = {
				id: null,
				title: "",
				description: "",
				buttonCtaText: "",
				feedIndex: 0
			};
			t.a = Object(a.c)({
				feedUnit: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.c: {
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
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.b: {
							const {
								claimId: n
							} = t.payload;
							return {
								...e,
								[n]: "claim_success"
							}
						}
						case s.a: {
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
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => {
				return !(Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.Ae
				}) === s.Pd)
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
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts"),
				o = n("./src/reddit/selectors/experiments/utils.ts");
			const i = e => Object(r.c)(e, {
					experimentName: s.Vb,
					experimentEligibilitySelector: a.e
				}) === s.eb.topOfFeedWithCTAs,
				c = e => (e => Object(r.c)(e, {
					experimentName: s.Vb,
					experimentEligibilitySelector: a.e
				}) === s.eb.topOfFeedNoCTAs)(e) || i(e),
				d = e => Object(r.c)(e, {
					experimentName: s.Vb,
					experimentEligibilitySelector: a.e
				}) === s.eb.floatInFeed,
				l = e => {
					const t = Object(r.c)(e, {
						experimentName: s.Vb,
						experimentEligibilitySelector: a.e
					});
					return Object(o.a)(t)
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
				return f
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "d", (function() {
				return E
			}));
			var s = n("./src/lib/objectSelector/index.ts"),
				r = n("./src/reddit/featureFlags/index.ts"),
				a = n("./src/reddit/selectors/posts.ts"),
				o = n("./src/reddit/selectors/subreddit.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const c = (e, t) => {
					const n = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (n) {
						const t = Object(o.Y)(e, {
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
					const n = p(e, t);
					if (!n) return u;
					const s = Object(o.cb)(e, {
						subredditName: n.name
					});
					return s && s.postIds && s.postIds.length ? s.postIds : u
				}),
				p = (e, t) => {
					const n = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return n ? Object(o.Y)(e, {
						subredditId: n
					}) : null
				},
				b = (e, t, n, s, r) => {
					const o = r.find(e => e <= t) || -1,
						i = r.find(e => e > t) || 1 / 0;
					return t !== i && t !== o && (!(o + n > t) && (!(t + n > i) && !((e, t, n) => {
						const s = n[t - 1],
							r = n[t],
							o = r && Object(a.G)(e, {
								postId: s
							}) || null,
							i = r && Object(a.G)(e, {
								postId: r
							}) || null;
						return o && o.isSponsored || i && i.isSponsored
					})(e, t, s)))
				},
				g = [3],
				f = Object(s.a)((e, t) => {
					let {
						existingDUPositions: n,
						listingProps: s
					} = t;
					const r = n.slice().sort();
					let o = -1;
					const i = Object(a.z)(e, {
							listingKey: s.listingKey
						}),
						c = [];
					return g.forEach(t => {
						let n = o + t;
						if (!(n >= i.length)) {
							for (; n < i.length && !b(e, n, t, i, r);) n += 1;
							n < i.length && (c.push(n), o = n)
						}
					}), c
				}),
				h = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				O = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				x = e => e.focusedVerticals.category,
				v = e => e.focusedVerticals.lastLoadedEnv,
				E = e => {
					const t = Object(i.Q)(e),
						n = r.d.geoSubredditRecommendationDULoggedIn(e),
						s = r.d.geoSubredditRecommendationDULoggedOut(e);
					return t && n || !t && s
				}
		},
		"./src/redditGQL/operations/Frontpage.json": function(e) {
			e.exports = JSON.parse('{"id":"96a6aa6e18a7"}')
		},
		"./src/redditGQL/operations/GetAccountGender.json": function(e) {
			e.exports = JSON.parse('{"id":"1508e05ea2ee"}')
		},
		"./src/redditGQL/operations/GetNearbySubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"aff6d12aa0c2"}')
		},
		"./src/redditGQL/operations/InterestTopics.json": function(e) {
			e.exports = JSON.parse('{"id":"7637265b3b63"}')
		},
		"./src/redditGQL/operations/InterestTopicsByIds.json": function(e) {
			e.exports = JSON.parse('{"id":"c79807b42f04"}')
		},
		"./src/redditGQL/operations/LanguageSelections.json": function(e) {
			e.exports = JSON.parse('{"id":"40df26b7117b"}')
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"4f7ad6ca44ac"}')
		},
		"./src/redditGQL/operations/UpdateAccountGender.json": function(e) {
			e.exports = JSON.parse('{"id":"670e8e8d3018"}')
		},
		"./src/redditGQL/operations/UpdateSpokenLanguagesPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"6d0707c83164"}')
		},
		"./src/redditGQL/operations/UpdateTopicPreferences.json": function(e) {
			e.exports = JSON.parse('{"id":"a48d141a1878"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OnboardingModal.c907250767184d74ba2a.js.map