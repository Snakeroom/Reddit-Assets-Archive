// https://www.redditstatic.com/desktop2x/OnboardingModal.f90ec98feb53827f56ee.js
// Retrieved at 10/20/2022, 9:40:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OnboardingModal"], {
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var n = Math.ceil,
				r = Math.max;
			e.exports = function(e, t, s, a) {
				for (var o = -1, i = r(n((t - e) / (s || 1)), 0), c = Array(i); i--;) c[a ? i : ++o] = e, e += s;
				return c
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseRange.js"),
				s = n("./node_modules/lodash/_isIterateeCall.js"),
				a = n("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, n, o) {
					return o && "number" != typeof o && s(t, n, o) && (n = o = void 0), t = a(t), void 0 === n ? (n = t, t = 0) : n = a(n), o = void 0 === o ? t < n ? 1 : -1 : a(o), r(t, n, o, e)
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
				a = n("./node_modules/lodash/toInteger.js"),
				o = 9007199254740991,
				i = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = a(e)) < 1 || e > o) return [];
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
				a = (s(), function(e) {
					return void 0 === e && (e = ""), {
						value: 1,
						prefix: e,
						uid: s()
					}
				}),
				o = a(),
				i = r.createContext(a()),
				c = function() {
					return r.useState((e = r.useContext(i), {
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/GetAccountGender.json"),
				c = n("./src/redditGQL/operations/UpdateAccountGender.json");
			var d = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/reddit/actions/accountGender/constants.ts");
			const u = () => async (e, t, n) => {
				let {
					gqlContext: r
				} = n;
				var s, a;
				const c = await (e => Object(o.a)(e, {
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
					})(null === (a = null === (s = null == d ? void 0 : d.data) || void 0 === s ? void 0 : s.piiIdentity) || void 0 === a ? void 0 : a.gender);
				l && e(m(l))
			}, m = Object(s.a)(l.a), p = e => async (t, n, s) => {
				let {
					gqlContext: i
				} = s;
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
					text: r.fbt._("Changes saved", null, {
						hk: "2isjrZ"
					})
				}))) : (t(g()), t(Object(a.f)({
					kind: d.b.Error,
					text: r.fbt._("Changes failed to save", null, {
						hk: "XrtIq"
					})
				})))
			}, b = Object(s.a)(l.b), g = Object(s.a)(l.c)
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
				return O
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "b", (function() {
				return y
			}));
			var r, s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/performanceTimings/index.tsx"),
				o = n("./src/reddit/actions/focusedVerticals/constants.ts"),
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
			const g = Object(s.a)(o.g),
				f = Object(s.a)(o.e),
				h = Object(s.a)(o.h),
				x = Object(s.a)(o.c),
				O = Object(s.a)(o.f),
				v = Object(s.a)(o.j),
				C = Object(s.a)(o.i),
				E = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const a = t(),
						o = Object(m.e)(a),
						d = Object(m.d)(a),
						p = Object(b.P)(a);
					if (o || !d) return;
					e(h());
					let O = !1;
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
							if (_(t)) {
								if (j(t)) {
									e(x({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), O = !0
								} else if (k(t)) {
									const n = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: r,
											interactedSubreddit: s,
											category: a
										} = n.focusRecommendations[0],
										o = [r, s],
										i = Object(u.d)(o),
										c = Object(l.b)(o),
										d = Object(u.c)(r),
										m = {
											recommendedSubredditIds: [r.id],
											interactedSubredditIds: [s.id],
											subreddits: i,
											subredditsAboutInfo: c,
											subredditTopContent: d,
											category: a,
											lastLoadedEnv: "client"
										};
									e(g(m)), O = !0
								}
							} else O = !1
						}
					} catch (v) {
						O = !1
					}
					O || e(f({
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
				}, k = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations,
						r = t && t.type;
					return !!(n && !j(e) && r === d.GEO && n[0] && n[0].recommendedSubreddit && n[0].interactedSubreddit)
				}, y = () => async (e, t, n) => {
					var r, s;
					const o = t(),
						i = Object(m.g)(o);
					if (Object(m.f)(o) || null === i || "client" === i) {
						const n = null === (s = null === (r = Object(p.b)(t())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === s ? void 0 : s.route.chunk,
							i = Object(b.Q)(o);
						return Object(a.i)(() => e(E()), {
							name: "getFocusedVerticalsRequested",
							page: n,
							isLoggedIn: i
						})
					}
					if ("server" === i) return e(O({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/frontpage/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "frontpagePending", (function() {
				return Ie
			})), n.d(t, "frontpageLoaded", (function() {
				return Te
			})), n.d(t, "frontpageFailed", (function() {
				return we
			})), n.d(t, "frontpageFirstLoaded", (function() {
				return Re
			})), n.d(t, "frontpageDataRequested", (function() {
				return Le
			})), n.d(t, "frontpageRequestedHelper", (function() {
				return Ae
			})), n.d(t, "frontpageRequested", (function() {
				return Pe
			})), n.d(t, "frontpageReloaded", (function() {
				return Be
			})), n.d(t, "morePostsPending", (function() {
				return Me
			})), n.d(t, "morePostsLoaded", (function() {
				return De
			})), n.d(t, "morePostsFailed", (function() {
				return Ve
			})), n.d(t, "morePostsRequested", (function() {
				return qe
			})), n.d(t, "refreshFeed", (function() {
				return We
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/pick.js"),
				a = n.n(s),
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
				x = n("./src/reddit/models/Onboarding/index.ts"),
				O = n("./src/reddit/models/Post/index.ts"),
				v = n("./src/reddit/helpers/graphql/normalizeInterestTopicsFromGql/index.ts"),
				C = n("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				E = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				_ = n("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				j = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				k = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				y = n("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				S = n("./src/reddit/models/FeedElement/index.ts");

			function N(e) {
				return e.__typename === S.a.FreeNftFeedElement
			}

			function I(e) {
				return e.__typename === S.a.MerchandisingUnit
			}

			function T(e, t) {
				return {
					feedElement: e,
					feedPosition: t
				}
			}
			var w = n("./src/reddit/models/NotificationInbox/index.ts"),
				R = n("./src/reddit/selectors/adsSignals.ts"),
				L = n("./src/reddit/selectors/experiments/econ/marketplace.ts"),
				A = n("./src/reddit/selectors/experiments/inAppNotification.ts"),
				G = n("./src/reddit/selectors/experiments/loggedOutOneFeed.ts"),
				P = n("./src/reddit/selectors/experiments/onboarding.ts"),
				F = n("./src/reddit/selectors/frontpage.ts"),
				B = n("./src/reddit/selectors/platform.ts"),
				M = n("./src/reddit/selectors/user.ts"),
				D = n("./src/reddit/selectors/userPrefs.ts"),
				V = n("./src/redditGQL/operations/Frontpage.json"),
				q = n("./src/redditGQL/types.ts"),
				W = n("./src/lib/initializeClient/installReducer.ts"),
				U = n("./src/reddit/reducers/features/marketplace/index.ts");
			Object(W.a)({
				features: {
					marketplace: U.a
				}
			});
			const H = (e, t) => {
					var n, r;
					const {
						after: s,
						dist: a,
						isMobile: o,
						layout: i,
						limit: d,
						sort: l,
						t: u,
						correlationId: m
					} = t, p = Object(P.c)(e), h = Object(M.Z)(e) || Object(M.Q)(e), x = Object(A.a)(e), O = Object(B.q)(e), v = Object(G.c)(e), C = Object(G.g)(e), E = C === b.qb.LoggedOutUiOnly || C === b.qb.LoggedOutHomeDefpop, _ = Object(F.b)(e), {
						adsSeenCount: j,
						totalPostsSeenCount: k,
						sessionStartTime: y
					} = Object(R.a)(e), S = {
						adContext: {
							layout: i ? i.toUpperCase() : g.a.Card,
							distance: a,
							clientSignalSessionData: {
								adsSeenCount: j,
								totalPostsSeenCount: k,
								sessionStartTime: y
							}
						},
						feedRankingContext: {
							servingId: m
						},
						forceGeopopular: !0,
						includeCommunityDUs: !1,
						includeInterestTopics: !!p && !Object(b.tg)(p),
						includeFeaturedAnnouncements: !0,
						includeLiveEvents: !0,
						includeIdentity: h && !(null === (r = null === (n = e.user.account) || void 0 === n ? void 0 : n.karma) || void 0 === r ? void 0 : r.total),
						includePostRecommendations: h || v,
						includeFreeMarketplaceElement: Object(L.a)(e),
						includeSubredditQuestions: h,
						recentPostIds: e.posts.recent,
						notificationContext: {
							variant: null == x ? void 0 : x.toLowerCase()
						},
						enableMerchandisingUnitAnnouncements: !1
					};
					return v ? (E && (_ || C !== b.qb.LoggedOutHomeDefpop) || (S.sort = q.G.Best, S.feedRankingContext.variant = C), S.feedRankingContext.loggedOutAllowNsfw = Object(D.a)(e)) : l && (S.sort = l.toUpperCase()), u && (S.range = u.toUpperCase()), o ? S.pageSize = Object(f.a)(i) : d && (S.pageSize = d), O && O.ad && (S.forceAds = {
						ad: O.ad
					}), s && (S.after = Object(c.a)(s)), S
				},
				Q = async (e, t, n, r) => {
					const s = Date.now(),
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
								home: r,
								featuredAnnouncements: s,
								recentPosts: a = [],
								liveBarContent: o
							} = e;
							var i, c;
							const d = [],
								u = [];
							let m, b, g, f;
							const S = {
									postIds: [],
									postInstances: {},
									posts: {},
									postFlair: {},
									profiles: {},
									subreddits: {},
									merchandisingUnitAnnouncements: []
								},
								R = e => {
									if (S.posts[e.id]) return e.id;
									const t = Object(E.f)(e);
									S.posts[t.id] = t;
									const {
										crosspostRoot: n
									} = e;
									n && n.type === O.a.Post && n.postInfo && R(n.postInfo), Object(O.o)(e).forEach(R);
									let r = t.id;
									if (Object(O.l)(e)) S.profiles[e.profile.id] || (S.profiles[e.profile.id] = Object(j.a)(e.profile));
									else if (Object(O.n)(e)) S.subreddits[e.subreddit.id] || (S.subreddits[e.subreddit.id] = Object(k.a)(e.subreddit)), S.postFlair[e.subreddit.id] || (S.postFlair[e.subreddit.id] = Object(C.a)(e.subreddit));
									else if (Object(O.h)(e)) {
										const n = Object(E.b)(e);
										if (!n) return null;
										r = n, S.posts[n] = {
											...t,
											id: n,
											permalink: `${t.permalink}?instanceId=${encodeURIComponent(n)}`
										}, S.posts[t.id] || (S.posts[t.id] = {
											...t,
											events: []
										}), S.postInstances[e.id] || (S.postInstances[e.id] = []), S.postInstances[e.id].push(n)
									}
									return r
								};
							for (const l of t) {
								const e = Object(k.a)(l);
								S.subreddits[e.id] = e, d.push(e.id)
							}
							for (const [C, {
									node: _
								}] of r.elements.edges.entries())
								if (Object(O.k)(_)) {
									const e = R(_);
									e && S.postIds.push(e)
								} else if (Object(O.m)(_)) {
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
									const r = R(_.postInfo);
									r && (S.postIds.push(r), S.posts[r].recommendationContext = {
										content: Object(E.d)(e.richtext),
										source: {
											source: null == n ? void 0 : n.toLowerCase(),
											subredditId: null == t ? void 0 : t.id,
											subredditName: null == t ? void 0 : t.prefixedName
										}
									})
								}
							} else if (Object(h.c)(_) && !m) m = _;
							else if (Object(x.g)(_)) {
								const e = null === (i = null == _ ? void 0 : _.interestTopicRecommendations) || void 0 === i ? void 0 : i.recommendationTopics;
								if (e) {
									const t = Object(v.a)(e);
									t.topics.length && (g = {
										interests: t,
										index: C
									})
								}
							} else if (N(_) && !b) b = {
								element: _,
								index: r.elements.edges.findIndex(e => e.node === _)
							};
							else if (Object(w.d)(_) && (null === (c = null == _ ? void 0 : _.notifications) || void 0 === c ? void 0 : c.length)) f = {
								notifications: _.notifications,
								position: C,
								id: _.id
							};
							else if (I(_)) null != _.id && S.merchandisingUnitAnnouncements.push(T(_, C));
							else {
								const e = `Received unhandled element type when processing frontpage data: "${_.__typename}"`;
								Object(l.b)() || console.warn(e), p.c.captureMessage(e)
							}
							for (const l of a) {
								if (!l) continue;
								const e = R(l);
								e && u.push(e)
							}
							const L = S.postIds.length - 1,
								A = L >= 0 ? S.postIds[L] : "",
								G = r.elements.dist,
								P = r.elements.geoFilter;
							return {
								...S,
								account: n && Object(y.a)(n) || null,
								featuredLiveThread: m,
								marketplaceFeedElement: b,
								interestTopicRecommendations: g,
								announcements: s,
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
								duration: o - s,
								logKeyType: m.a.gqlFetchTiming
							}, {
								duration: t - e,
								logKeyType: m.a.gqlNormalizationTiming
							}];
						Object(m.h)({
							name: d.u.FRONTPAGE,
							isLoggedIn: n,
							metrics: c,
							statsdPathsForExperiments: r
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
			var z = n("./src/lib/pageTitle/index.ts"),
				X = n("./src/lib/pageTitle/helpers.ts"),
				K = n("./src/reddit/actions/login.ts"),
				J = n("./src/reddit/actions/meta.ts"),
				Z = n("./src/reddit/actions/platform.ts"),
				Y = n("./src/reddit/actions/toaster.ts"),
				$ = n("./src/reddit/constants/history.ts"),
				ee = n("./src/reddit/constants/page.ts"),
				te = n("./src/reddit/constants/parameters.ts"),
				ne = n("./src/reddit/constants/postLayout.ts"),
				re = n("./src/reddit/contexts/PageLayer/index.tsx"),
				se = n("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				ae = n("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				oe = n("./src/reddit/models/Toast/index.ts"),
				ie = n("./src/reddit/selectors/experiments/chat.ts"),
				ce = n("./src/reddit/selectors/experiments/countrySites.ts"),
				de = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				le = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				ue = n("./src/reddit/selectors/runTimeEnvVars.ts"),
				me = n("./src/lib/makeActionCreator/index.ts"),
				pe = n("./src/lib/makeListingKey/index.ts"),
				be = n("./src/reddit/actions/ads/index.ts"),
				ge = n("./src/reddit/helpers/chooseVariant/index.ts"),
				fe = n("./src/reddit/helpers/counters/loggedOutOneFeed.ts"),
				he = n("./src/reddit/helpers/trackers/feed.ts"),
				xe = n("./src/reddit/models/LoggedOutOneFeed/index.ts"),
				Oe = n("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				ve = n("./src/reddit/actions/seo/linksModule.ts"),
				Ce = n("./src/reddit/selectors/seo/linksModule.ts"),
				Ee = n("./src/reddit/actions/publicAccessNetwork/api.ts"),
				_e = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				je = n("./src/lib/sample/index.ts"),
				ke = n("./src/reddit/actions/liveBar/index.ts"),
				ye = n("./src/reddit/helpers/filterListingResponse/index.ts"),
				Se = n("./src/reddit/actions/frontpage/constants.ts"),
				Ne = n("./node_modules/uuid/dist/esm-browser/v4.js");
			const Ie = Object(me.a)(Se.d),
				Te = Object(me.a)(Se.c),
				we = Object(me.a)(Se.a),
				Re = Object(me.a)(Se.b),
				Le = (e, t) => async (n, s, a) => {
					var i, c, d, l, u, p, b, g;
					const f = s();
					if (f.listings.postOrder.api.pending[e]) return;
					const h = ne.e[Object(re.S)(f, {})];
					t.isMobile = Object(o.e)(f.meta.userAgent), t.recentPostIds = f.posts.recent, t.layout = h, t.useMockData = !!f.platform.currentPage && (!!f.platform.currentPage.queryParams.useMockData && Object(ue.b)(f)), n(Ie({
						key: e
					})), n(Re(!1)); {
						const e = f.platform.currentPage,
							n = e && e.url;
						n && (t.clickUrl = n)
					}
					const x = Object(Ne.a)();
					t.correlationId = x;
					const O = null === (c = null === (i = Object(B.b)(f)) || void 0 === i ? void 0 : i.routeMatch) || void 0 === c ? void 0 : c.route.chunk,
						v = Object(M.Q)(f),
						C = await Object(m.i)(() => Q(a.gqlContext(), H(s(), t), Object(M.Z)(f), t.statsdPathsForExperiments), {
							name: "fetchFrontpageData",
							isLoggedIn: v,
							page: O
						});
					n(Object(Z.n)(C.status));
					const E = `error-${e}`;
					if (C.ok && C.body) {
						const r = C.body;
						n(Te({
							key: e,
							meta: f.meta,
							correlationId: x,
							...r
						})), n(Y.g(E)), r.geoFilter && n(Object(J.k)(r.geoFilter)), r.liveBarContent && n(Object(ke.b)(Object(ie.a)(f) ? null !== (u = null === (l = null === (d = r.liveBarContent) || void 0 === d ? void 0 : d.items) || void 0 === l ? void 0 : l.edges.map(e => e.node)) && void 0 !== u ? u : [] : null === (p = r.liveBarContent.posts) || void 0 === p ? void 0 : p.map(e => ({
							post: e,
							__typename: "LiveBarTalk"
						})))), n(Object(be.b)(Oe.a.FRONTPAGE));
						const a = null === (g = null === (b = Object(B.b)(f)) || void 0 === b ? void 0 : b.locationState) || void 0 === g ? void 0 : g[$.b.FeedLoadReason];
						Object(he.b)(t.isRefresh ? $.a.UserRefresh : null != a ? a : $.a.InitialLoad)(s())
					} else {
						if (n(we({
								error: C.error,
								key: e,
								...C.body
							})), n(Y.f({
								id: E,
								kind: oe.b.Error,
								text: r.fbt._("Sorry, we couldn't load posts for this page.", null, {
									hk: "36ypKx"
								}),
								buttonText: r.fbt._("Retry", null, {
									hk: "1XMjgA"
								}),
								buttonAction: Le(e, t)
							})), Object(je.a)(f, {
								rate: 14
							})) {
							const e = Object(G.c)(f);
							Object(fe.a)(C.ok ? xe.a.ParseError : xe.a.XhrError, e ? xe.b.OneFeed : v ? xe.b.LoggedIn : xe.b.Popular)
						}
						const a = C.error;
						Object(he.a)(a ? `${C.status||"000"}: ${a.type}` : "000: UNKNOWN_ERROR")(s())
					}
				}, Ae = (e, t) => async (n, r) => {
					var s;
					const o = r(),
						i = Object(F.a)(o),
						{
							sort: c = i
						} = e.params,
						l = Object(pe.a)(ee.b, c, e.queryParams),
						u = o.listings.postOrder.ids[l],
						m = o.listings.postOrder.api.error[l],
						p = o.listings.postOrder.api.pending[l],
						b = Object(ce.b)(o),
						g = te.N in e.queryParams && e.queryParams[te.N].toUpperCase() || "",
						f = g in d.oc && d.oc[g],
						h = z.f();
					if (p || u && !m && !t) return void(u && (n(Z.m({
						title: b ? Object(X.a)(o, h) : h
					})), (null === (s = o.listings.postOrder.correlationIds) || void 0 === s ? void 0 : s[l]) && n(Z.o({
						correlationId: o.listings.postOrder.correlationIds[l]
					})), o.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						n(Object(be.b)(Oe.a.FRONTPAGE))
					})));
					const x = Object(se.a)(o),
						O = Object(se.b)(x),
						v = [Object(se.c)(x)];
					await n(Le(l, {
						...a()(e.queryParams, te.p),
						...a()(e.queryParams, te.o),
						limit: O,
						sort: c,
						statsdPathsForExperiments: v,
						t: Object(ae.a)(c, f)
					})), n(Z.m({
						title: b ? Object(X.a)(o, h) : h
					})), Object(ge.c)(o, {
						experimentEligibilitySelector: ge.a,
						experimentName: "redesign_aa"
					});
					const C = Object(de.a)(o, {});
					Object(de.e)(C) && n(Object(K.openRegisterModal)())
				}, Ge = () => async (e, t) => {
					var n, r;
					const s = t();
					if (Object(Ce.a)(s)) return;
					const a = null === (r = null === (n = Object(B.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
						o = Object(M.Q)(s);
					return Object(m.i)(() => e(Object(ve.d)()), {
						name: "frontpageLinksRequested",
						page: a,
						isLoggedIn: o
					})
				}, Pe = (e, t) => async n => {
					await Promise.all([n(Object(i.b)()), n(Ae(e, t)), n(Ge()), n(Object(Ee.c)(_e.R))])
				}, Fe = Object(me.a)(Se.e), Be = e => async (t, n) => {
					const r = n(),
						s = r.platform.currentPage.routeMatch.match;
					Object(le.o)(r) || Object(le.u)(r) || (e || t(Fe()), await t(Pe(s, !0)))
				}, Me = Object(me.a)(Se.h), De = Object(me.a)(Se.g), Ve = Object(me.a)(Se.f), qe = e => async (t, n, r) => {
					let {
						gqlContext: s
					} = r;
					const i = n(),
						c = Object(F.a)(i),
						{
							sort: l = c
						} = e,
						u = i.platform.currentPage ? i.platform.currentPage.queryParams : {},
						m = Object(pe.a)(ee.b, l, u),
						p = i.listings.postOrder.loadMore[m],
						b = u[te.N] ? u[te.N].toUpperCase() : "",
						g = b in d.oc && d.oc[b];
					if (p) {
						const e = i.listings.postOrder.api.pending[m],
							r = i.listings.postOrder.fetchedTokens,
							c = !(!r[m] || !r[m][p.token]);
						if (!e && !c) {
							t(Me({
								key: m,
								fetchedToken: p.token
							}));
							const e = !!i.platform.currentPage && !!i.platform.currentPage.queryParams.useMockData,
								r = Object(se.a)(i),
								c = ne.a,
								d = [Object(se.c)(r)],
								b = {
									after: p.token,
									dist: p.dist,
									...a()(u, te.p),
									isMobile: Object(o.e)(i.meta.userAgent),
									limit: c,
									sort: l,
									t: Object(ae.a)(l, g),
									layout: ne.e[Object(re.S)(i, {})],
									useMockData: e
								}; {
								const e = i.platform.lastPage,
									t = e && e.url;
								t && (b.clickUrl = t)
							}
							b.correlationId = i.listings.postOrder.correlationIds[m];
							const f = () => Q(s(), H(i, b), Object(M.Z)(i), d),
								h = await f(),
								x = {
									...h.body,
									...Object(ye.a)(i, m, h.body)
								};
							if (h.ok) t(De({
								key: m,
								fetchedToken: p.token,
								meta: i.meta,
								...x
							})), Object(he.b)($.a.NextPageLoad)(n());
							else {
								t(Ve({
									key: m,
									error: h.error,
									fetchedToken: p.token,
									...x
								}));
								const e = h.error;
								Object(he.a)(e ? `${h.status||"000"}: ${e.type}` : "000: UNKNOWN_ERROR")(n())
							}
						}
					}
				}, We = e => async (t, n) => {
					const r = n(),
						s = Object(F.a)(r),
						{
							sort: a = s
						} = e,
						o = r.platform.currentPage ? r.platform.currentPage.queryParams : {},
						i = Object(pe.a)(ee.b, a, o),
						c = o[te.N] ? o[te.N].toUpperCase() : "",
						l = c in d.oc && d.oc[c],
						u = Object(se.a)(r),
						m = Object(se.b)(u);
					await t(Le(i, {
						limit: m,
						sort: a,
						t: Object(ae.a)(a, l),
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
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/reducers/features/liveBar/index.ts");
			const o = "LIVEBAR__SET_LIVEBAR_POSTS";
			Object(r.a)({
				features: {
					liveBar: a.a
				}
			});
			const i = Object(s.a)(o)
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
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				i = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				c = n.n(i);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => s.a.createElement(o.b, {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/reddit/controls/Button/index.tsx"),
				o = n("./src/lib/classNames/index.ts"),
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
				return s.a.createElement(a.t, {
					className: Object(o.a)(d.a.InterestButton, {
						[d.a.Selected]: n
					}),
					kind: a.b.Button,
					onClick: i,
					style: l(t, n, r)
				}, c)
			}
		},
		"./src/reddit/components/Onboarding/LanguageCollection/LanguageCollection.m.less": function(e, t, n) {
			e.exports = {
				LanguageRow: "_1uqw13duLAypklZz9JuxH5",
				languageRow: "_1uqw13duLAypklZz9JuxH5",
				Selected: "C0ynfBku9Az2wYA9j1_PA",
				selected: "C0ynfBku9Az2wYA9j1_PA",
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
			var r = n("./node_modules/lodash/noop.js"),
				s = n.n(r),
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
				x = n("./src/reddit/actions/snoovatar.ts"),
				O = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				v = n("./src/reddit/hooks/useTracking.ts"),
				C = n("./src/reddit/models/Toast/index.ts"),
				E = n("./src/reddit/selectors/avatar.ts");
			var _ = () => {
					const e = Object(i.e)(E.a),
						t = Object(i.d)(),
						n = Object(v.a)(),
						r = Object(i.e)(E.c);
					Object(a.useEffect)(() => {
						(null == e ? void 0 : e.csrf_token) || t(Object(x.c)())
					}, []);
					const s = Object(a.useCallback)(async () => {
							t(Object(x.d)())
						}, [t]),
						o = Object(a.useCallback)(async () => {
							if (n(Object(O.a)("save_and_continue")), e && r) {
								n(Object(O.f)("onboarding"));
								try {
									return await t(Object(x.e)(r.accessoryIds, {}, {
										set_avatar_to_profile: !0,
										source: "web_onboarding"
									})), !0
								} catch (s) {
									h.c.captureException(s)
								}
							}
							return t(Object(g.f)({
								kind: C.b.Error,
								text: f.fbt._("Unable to save avatar, please try again.", null, {
									hk: "17FzD3"
								})
							})), !1
						}, [r, e, t, n]);
					return {
						avatarImage: (null == r ? void 0 : r.image) || null,
						fetchRandomAvatar: s,
						saveAvatar: o
					}
				},
				j = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				k = n("./src/reddit/components/Onboarding/Celebration.m.less"),
				y = n.n(k);
			const {
				fbt: S
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var N = () => o.a.createElement("div", {
					className: y.a.CelebrationBg
				}, o.a.createElement("div", {
					className: y.a.CelebrationTitle
				}, S._("We're happy you're here!", null, {
					hk: "1YMdHn"
				})), o.a.createElement("div", {
					className: y.a.CelebrationSubTitle
				}, S._("Your home feed is being created now…", null, {
					hk: "Onr1V"
				})), o.a.createElement("div", null, o.a.createElement(j.a, {
					className: y.a.LoadingSpinner,
					sizePx: 16
				}))),
				I = n("./src/reddit/components/Settings/GenderCollection/index.tsx"),
				T = n("./src/reddit/models/Gender/index.ts"),
				w = n("./src/reddit/components/Onboarding/GenderCollection/GenderCollection.m.less"),
				R = n.n(w),
				L = n("./src/reddit/constants/keycodes.ts"),
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
						selectedGenderOption: r,
						setSelectedGenderOption: s
					} = e;
					const i = Object(v.a)(),
						c = Object(I.b)();
					n && c.splice(3, 1);
					const d = Object(a.useRef)(null),
						u = Object(a.useRef)([]),
						[m, p] = Object(a.useState)((null == r ? void 0 : r.definedGender) || "");
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
							i(Object(A.n)()), s(b(e)), P(e) && (null === (t = d.current) || void 0 === t || t.focus())
						}, [i, s]),
						f = Object(a.useCallback)(e => {
							g(e.value), e.focus()
						}, [g]),
						h = Object(a.useCallback)(e => {
							if (!r || !P(r.genderCategory)) {
								const t = u.current[e];
								t && g(t.value)
							}
						}, [g, r]),
						x = (e, n) => {
							const a = P(e.key);
							return o.a.createElement("label", {
								key: e.key
							}, o.a.createElement("input", {
								checked: e.key === (null == r ? void 0 : r.genderCategory),
								className: R.a.genderRadioButton,
								"data-testid": e.key,
								id: `genderCollectionOption${n+1}`,
								name: "genderCollection",
								onChange: () => g(e.key),
								onClick: n => n.screenX && n.screenY ? t(b(e.key)) : null,
								onKeyDown: n => n.keyCode === L.a.Enter ? t(b(e.key)) : null,
								ref: e => u.current[n] = e,
								type: "radio",
								value: e.key
							}), a ? o.a.createElement("input", {
								className: R.a.genderUserDefinedInput,
								"data-testid": `${e.key}-input`,
								onChange: () => s(b(e.key)),
								onClick: () => h(n),
								onKeyDown: e => ((e, t) => {
									var n;
									const r = e.target;
									if (r) {
										if (l.i[e.key] && !r.value) {
											const n = u.current.length - 1;
											let r;
											(r = e.keyCode === l.i.ArrowUp || e.keyCode === l.i.ArrowLeft ? u.current[t ? t - 1 : n] : u.current[t === n ? 0 : t + 1]) && f(r)
										}
										e.keyCode === l.M && (null === (n = u.current[t]) || void 0 === n || n.focus())
									}
								})(e, n),
								placeholder: e.displayText,
								ref: d,
								tabIndex: -1,
								value: m
							}) : o.a.createElement("span", {
								className: `${R.a.genderOption} ${R.a.genderOptionImproved}`
							}, e.displayText))
						};
					return o.a.createElement("div", null, c.map((e, t) => x(e, t)))
				},
				B = n("./src/reddit/controls/Button/index.tsx"),
				M = n("./src/reddit/icons/fonts/index.tsx"),
				D = n("./src/reddit/components/Onboarding/AvatarPicker/AvatarPicker.m.less"),
				V = n.n(D);
			const {
				fbt: q
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var W = e => {
					let {
						avatarImage: t,
						fetchRandomAvatar: n
					} = e;
					const r = Object(v.a)();
					Object(a.useEffect)(() => {
						r(Object(O.o)())
					}, [r]);
					const s = Object(a.useCallback)(() => {
						r(Object(O.a)("randomize")), n()
					}, [r, n]);
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
					})), o.a.createElement(B.t, {
						className: V.a.randomizeButton,
						priority: B.c.Secondary,
						onClick: s,
						Icon: Object(M.b)("random"),
						iconClassName: V.a.icon
					}, q._("Randomize", null, {
						hk: "uwAa8"
					})))
				},
				U = n("./node_modules/lodash/times.js"),
				H = n.n(U);
			const Q = function(e) {
				return (/^(r\/)([^\s]+)/g.exec(e) || [])[2] || ""
			};
			var z = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx");
			var X = e => o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 18 13"
				}, o.a.createElement("path", {
					fill: "inherit",
					d: "M6.50011 12.583C6.40482 12.5833 6.31041 12.5648 6.22235 12.5284C6.13429 12.492 6.05433 12.4385 5.98711 12.371L0.558105 6.94198L1.44211 6.05798L6.50011 11.116L17.0581 0.557983L17.9421 1.44198L7.01211 12.371C6.94493 12.4383 6.86512 12.4917 6.77725 12.5281C6.68939 12.5644 6.5952 12.5831 6.50011 12.583Z"
				})),
				K = n("./src/reddit/icons/svgs/CommunityDefault/filled.tsx");
			var J = e => o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 18 18"
				}, o.a.createElement("path", {
					fill: "#4B6066",
					d: "M18 8.38H9.63V0H8.38V8.38H0V9.63H8.38V18H9.63V9.63H18V8.38Z"
				})),
				Z = n("./src/reddit/components/Onboarding/index.m.less"),
				Y = n.n(Z),
				$ = n("./src/reddit/components/TrackEnterExitViewport/index.tsx"),
				ee = n("./src/reddit/components/Onboarding/CommunityPicker.m.less"),
				te = n.n(ee);
			const {
				fbt: ne
			} = n("./node_modules/fbt/lib/FbtPublic.js"), re = () => ne._("Recommended for you", null, {
				hk: "28LTkA"
			}), se = e => {
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
				} = t, [m, p] = Object(a.useState)(null);
				Object(a.useEffect)(() => {
					p(!u.find(e => !r[e.id]))
				}, [u, r]);
				const b = Object(a.useCallback)(() => {
					s(t.topicId, !m), p(!m)
				}, [t.topicId, m, s]);
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: te.a.RecommendedHeader
				}, o.a.createElement("span", {
					className: te.a.SectionTitle
				}, t.topicTitle), o.a.createElement("button", {
					onClick: b,
					className: te.a.SelectAllLink
				}, m && ne._("Deselect All", null, {
					hk: "4u0XYF"
				}), !m && null !== m && ne._("Select All", null, {
					hk: "3izh21"
				}))), o.a.createElement(o.a.Fragment, null, o.a.createElement(oe, {
					communities: t.communities,
					schemeName: n,
					selected: r,
					toggleSelection: i,
					topicId: t.topicId,
					topicName: t.topicName,
					topicTitle: t.topicTitle,
					viewportRoot: c,
					setViewedCommunities: d,
					viewedCommunities: l
				})))
			}, ae = () => o.a.createElement(o.a.Fragment, null, H()(5, e => o.a.createElement(z.a, {
				key: e,
				fullWidth: !0,
				large: !0
			}))), oe = e => {
				let {
					communities: t,
					schemeName: n,
					selected: r,
					topicId: s,
					topicName: i,
					topicTitle: c,
					toggleSelection: d,
					viewportRoot: l,
					setViewedCommunities: u,
					viewedCommunities: m
				} = e;
				const p = Object(v.a)(),
					[b, g] = Object(a.useState)(!1),
					f = t.length > 4,
					h = t.slice(0, b ? void 0 : 4),
					x = "recommended" === s ? "" : c,
					O = Object(a.useCallback)(() => {
						g(!0), p(Object(A.k)(c, s))
					}, [p, c, s]);
				return o.a.createElement(o.a.Fragment, null, h.map(e => {
					const t = m.has(e.id);
					return o.a.createElement($.a, {
						key: e.id,
						fireOnce: !0,
						viewportRoot: l,
						threshold: 1,
						rootMargin: "0px 0px -85px 0px",
						onEnter: t ? void 0 : Object(A.m)(c, Q(e.prefixedName), s, e.id, n),
						onEnterHandler: t => {
							u(new Set(m).add(e.id))
						}
					}, o.a.createElement(ie, {
						communityId: e.id,
						description: e.description,
						icon: e.icon,
						isSelected: r[e.id],
						key: e.id,
						language: e.language,
						prefixedName: e.prefixedName,
						schemeName: n,
						toggleSelection: d,
						topicId: s,
						topicName: i,
						topicTitle: c
					}))
				}), f && !b && o.a.createElement(de, {
					text: x,
					showMore: O
				}))
			}, ie = e => {
				let {
					communityId: t,
					description: n,
					icon: r,
					isSelected: s,
					language: i,
					prefixedName: c,
					schemeName: l,
					toggleSelection: u,
					topicId: m,
					topicName: p,
					topicTitle: b
				} = e;
				const g = Object(v.a)(),
					f = Object(a.useCallback)(() => {
						g(Object(A.i)(!s, b, m, Q(c), t, l)), u(t)
					}, [t, s, c, l, g, u, b, m]);
				return o.a.createElement("div", {
					className: Object(d.a)(te.a.CommunityRow, {
						[te.a.Selected]: s
					}),
					onClick: f
				}, o.a.createElement("div", {
					className: te.a.IconSection
				}, r && o.a.createElement("img", {
					className: te.a.IconWrapper,
					src: r
				}), !r && o.a.createElement(K.a, {
					className: te.a.CommunityNoIcon
				})), o.a.createElement("div", {
					className: te.a.TextSection
				}, o.a.createElement("div", {
					className: te.a.Info
				}, c, o.a.createElement(ce, {
					language: i
				})), o.a.createElement("div", {
					className: te.a.Description
				}, n)), o.a.createElement("div", {
					className: te.a.ButtonSection
				}, s && o.a.createElement(X, {
					className: te.a.SelectedIcon
				}), !s && o.a.createElement(J, {
					className: te.a.SelectedIcon
				})))
			}, ce = e => {
				let {
					language: t
				} = e;
				if (!t) return null;
				const n = t.substring(0, 2).toUpperCase();
				return "EN" === n ? null : o.a.createElement("div", {
					className: te.a.LangIndicator
				}, n)
			}, de = e => {
				let {
					showMore: t,
					text: n
				} = e;
				return o.a.createElement("div", {
					className: te.a.MoreRecommendations
				}, o.a.createElement("button", {
					onClick: t
				}, ne._("Show more", null, {
					hk: "3uUa1R"
				})))
			};
			var le = e => {
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
					const u = Object(v.a)();
					Object(a.useEffect)(() => {
						u(Object(A.l)())
					}, [u]);
					const [m, p] = Object(a.useState)(new Set);
					return o.a.createElement("div", {
						className: te.a.CommunityListWrapper
					}, o.a.createElement("div", {
						className: te.a.headerBarImproved
					}, o.a.createElement("div", {
						className: Y.a.title
					}, ne._("Communities", null, {
						hk: "Gdzfs"
					})), o.a.createElement("div", {
						className: Y.a.subtitle
					}, ne._("Select a few to get started. You can update them later.", null, {
						hk: "2GcuTd"
					}))), r.length > 0 && o.a.createElement(se, {
						community: {
							communities: r,
							topicId: "recommended",
							topicTitle: re(),
							topicName: "recommended_for_you"
						},
						schemeName: i,
						selected: s,
						toggleAll: d,
						toggleSelection: c,
						setViewedCommunities: p,
						viewedCommunities: m,
						viewportRoot: l
					}), (!!t.length || n) && o.a.createElement(o.a.Fragment, null, n && o.a.createElement(ae, null), t.map(e => o.a.createElement(se, {
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
				ue = n("./src/reddit/components/Onboarding/Interests/InterestPill.tsx"),
				me = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				pe = n("./src/reddit/components/Onboarding/Interests/InterestPicker.m.less"),
				be = n.n(pe);
			const {
				fbt: ge
			} = n("./node_modules/fbt/lib/FbtPublic.js"), fe = e => {
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
				const u = Object(v.a)(),
					m = Object(a.useCallback)((e, t, r, a, o) => {
						u(Object(A.s)(!t, !r, a, o, n)), s(e)
					}, [n, u, s]);
				return o.a.createElement(o.a.Fragment, null, t.map((e, t) => {
					var a;
					const {
						id: u,
						topic: p
					} = e, b = !!r[u], g = null !== i, f = l.has(u);
					return o.a.createElement(o.a.Fragment, {
						key: e.id
					}, o.a.createElement($.a, {
						fireOnce: !0,
						viewportRoot: c,
						threshold: 1,
						rootMargin: "0px 0px -85px 0px",
						onEnter: f ? void 0 : Object(A.r)(!g, p, u, n),
						onEnterHandler: e => {
							f || d(new Set(l).add(u))
						}
					}, o.a.createElement(ue.a, {
						colorIndex: g && null != i ? i : t,
						isSelected: b,
						isSubtopic: g,
						key: u,
						onClickHandler: () => m(e, b, g, p, u),
						topic: p
					}), b && !!(null === (a = e.children) || void 0 === a ? void 0 : a.length) && o.a.createElement(fe, {
						interests: e.children,
						schemeName: n,
						selected: r,
						toggleSelection: s,
						topicColor: t,
						setViewedInterests: d,
						viewedInterests: l
					})))
				}))
			}, he = () => {
				const e = Object(me.b)({
					isLoading: !0
				});
				return o.a.createElement(o.a.Fragment, null, H()(30, t => o.a.createElement("div", {
					key: t,
					className: Object(d.a)(be.a.Placeholder, e)
				})))
			};
			var xe = e => {
					let {
						interests: t,
						schemeName: n,
						loadingInterests: r,
						selected: s,
						toggleSelection: i,
						viewportRoot: c
					} = e;
					const d = Object(v.a)();
					Object(a.useEffect)(() => {
						d(Object(A.v)())
					}, [d]);
					const [l, u] = Object(a.useState)(new Set);
					return o.a.createElement("div", {
						className: be.a.InterestListButtons
					}, o.a.createElement("div", {
						className: be.a.headerBarImproved
					}, o.a.createElement("div", {
						className: Y.a.title
					}, ge._("Interests", null, {
						hk: "3XVu2d"
					})), o.a.createElement("div", {
						className: Y.a.subtitle
					}, ge._("Pick 3 or more things you’d like to see in your home feed", null, {
						hk: "3TEuhg"
					}))), r ? o.a.createElement(he, null) : o.a.createElement(fe, {
						interests: t,
						schemeName: n,
						selected: s,
						toggleSelection: i,
						viewportRoot: c,
						setViewedInterests: u,
						viewedInterests: l
					}))
				},
				Oe = n("./src/reddit/components/Onboarding/LanguageCollection/LanguageCollection.m.less"),
				ve = n.n(Oe),
				Ce = n("./src/reddit/constants/experiments.ts"),
				Ee = n("./src/reddit/selectors/experiments/onboarding.ts");
			const {
				fbt: _e
			} = n("./node_modules/fbt/lib/FbtPublic.js"), je = e => {
				let {
					topTwoVariant: t
				} = e;
				const n = t ? 2 : 10;
				return o.a.createElement(o.a.Fragment, null, H()(n, e => o.a.createElement(z.a, {
					key: "loading-" + e,
					fullWidth: !0,
					large: !0
				})))
			}, ke = e => {
				let {
					isSelected: t,
					languageSelection: n,
					toggleLanguageSelection: r
				} = e;
				const s = Object(a.useCallback)(() => {
					r(n.isoCode)
				}, [n.isoCode, r]);
				return o.a.createElement("div", {
					className: Object(d.a)(ve.a.LanguageRow, {
						[ve.a.Selected]: t
					}),
					onClick: s,
					"data-testid": n.isoCode
				}, o.a.createElement("div", {
					className: ve.a.FrontFlex
				}), o.a.createElement("div", {
					className: ve.a.TextSection
				}, n.translatedDisplayName), o.a.createElement("div", {
					className: ve.a.ButtonSection
				}, t && o.a.createElement(X, {
					className: ve.a.SelectedIcon
				})))
			};
			var ye = e => {
				let {
					languages: t,
					loadingLanguages: n,
					selectedLanguages: r,
					toggleLanguageSelection: s
				} = e;
				const [c, d] = Object(a.useState)(!1), l = Object(i.e)(Ee.a) === Ce.ad.TopTwo, u = t.sortedLanguages.slice(0, !l || l && c ? void 0 : 2), m = Object(a.useCallback)(() => {
					d(!0)
				}, []);
				return o.a.createElement("div", {
					className: ve.a.LanguageListButtons
				}, o.a.createElement("div", {
					className: ve.a.HeaderBarImproved
				}, o.a.createElement("div", {
					className: Y.a.title
				}, _e._("See content in more languages", null, {
					hk: "35s0TM"
				})), o.a.createElement("div", {
					className: Y.a.subtitle
				}, _e._("Update your settings to make it easier to discover content in multiple languages", null, {
					hk: "x0jso"
				}))), n ? o.a.createElement(je, {
					topTwoVariant: l
				}) : o.a.createElement("div", null, u.map((e, t) => o.a.createElement(ke, {
					isSelected: r[e.isoCode],
					key: "onboarding-lang-" + t,
					languageSelection: e,
					toggleLanguageSelection: s
				})), l && !c && o.a.createElement("div", {
					className: ve.a.MoreLanguages
				}, o.a.createElement("button", {
					onClick: m
				}, _e._("Show more", null, {
					hk: "1zOy4z"
				})))))
			};
			const {
				fbt: Se
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Ne;
			! function(e) {
				e.AVATAR = "avatar", e.CELEBRATION = "celebration", e.COMMUNITIES = "communities", e.GENDER = "gender", e.INTERESTS = "interests", e.LANGUAGES = "languages"
			}(Ne || (Ne = {}));
			const Ie = e => {
				let {
					activeStep: t,
					avatarImage: n,
					communitiesByTopic: r,
					autoProgressGenderCollection: s,
					fetchRandomAvatar: i,
					interests: c,
					languages: d,
					loadingCommunities: l,
					loadingInterests: u,
					loadingLanguages: m,
					recommendedCommunities: p,
					selectedCommunities: b,
					selectedInterests: g,
					selectedLanguages: f,
					setSelectedCommunities: h,
					setSelectedInterests: x,
					selectedGenderOption: O,
					setSelectedGenderOption: v,
					setSelectedLanguages: C
				} = e;
				const E = Object(a.useRef)(null);
				Object(a.useEffect)(() => {
					var e, t;
					return null === (t = null === (e = E.current) || void 0 === e ? void 0 : e.scroll) || void 0 === t ? void 0 : t.call(e, 0, 0)
				}, [t]);
				const _ = Object(a.useCallback)(e => {
						const t = b[e],
							n = {
								...b
							};
						t ? delete n[e] : n[e] = !0, h(n)
					}, [b, h]),
					j = Object(a.useCallback)((e, t) => {
						const n = {
								...b
							},
							s = e => e.forEach(e => {
								t ? n[e.id] = !0 : delete n[e.id]
							});
						if ("recommended" === e) s(p);
						else {
							const t = r.find(t => t.topicId === e);
							t && s(t.communities)
						}
						h(n)
					}, [r, p, b, h]),
					k = Object(a.useCallback)(e => {
						const {
							children: t,
							id: n
						} = e, r = g[n], s = {
							...g
						};
						r ? (delete s[n], r.forEach(e => delete s[e])) : s[n] = [...(null == t ? void 0 : t.map(e => e.id)) || []], x(s)
					}, [g, x]),
					y = Object(a.useCallback)(e => {
						const t = f[e],
							n = {
								...f
							};
						t ? delete n[e] : n[e] = !0, C(n)
					}, [f, C]);
				return o.a.createElement("div", {
					className: `\n      ${Y.a.SelectedComponent}\n      ${t===Ne.AVATAR&&Y.a.SelectedComponentAvatar}\n    `,
					ref: E
				}, t === Ne.GENDER && o.a.createElement(F, {
					autoProgressGenderCollection: s,
					isFlowImprovement: !0,
					selectedGenderOption: O,
					setSelectedGenderOption: v
				}), t === Ne.INTERESTS && o.a.createElement(xe, {
					interests: c.topics,
					loadingInterests: u,
					schemeName: c.schemeName,
					selected: g,
					toggleSelection: k,
					viewportRoot: E.current
				}), t === Ne.COMMUNITIES && o.a.createElement(le, {
					communitiesByTopic: r,
					loadingCommunities: l,
					recommendedCommunities: p,
					schemeName: c.schemeName,
					selected: b,
					toggleAll: j,
					toggleSelection: _,
					viewportRoot: E.current
				}), t === Ne.LANGUAGES && o.a.createElement(ye, {
					languages: d,
					loadingLanguages: m,
					selectedLanguages: f,
					toggleLanguageSelection: y
				}), t === Ne.AVATAR && o.a.createElement(W, {
					avatarImage: n,
					fetchRandomAvatar: i
				}))
			};
			var Te = n("./src/reddit/constants/modals.ts"),
				we = n("./src/reddit/contexts/ApiContext.tsx"),
				Re = n("./src/lib/makeGqlRequest/index.ts"),
				Le = n("./node_modules/lodash/uniqBy.js"),
				Ae = n.n(Le),
				Ge = n("./src/reddit/customMiddleware/recentSubreddits.ts"),
				Pe = n("./src/reddit/endpoints/economics/specialMembership.ts"),
				Fe = n("./src/reddit/endpoints/subreddit/local.ts"),
				Be = n("./src/reddit/endpoints/subreddit/subscriptions.ts");
			var Me = n("./src/reddit/models/Onboarding/index.ts"),
				De = n("./src/redditGQL/operations/InterestTopicsByIds.json");
			const Ve = async (e, t, n) => {
				const r = await ((e, t, n) => {
					const r = {
						topicIds: [],
						schemeName: Me.b,
						maxSubreddits: 10,
						onboardingFlow: t,
						...n
					};
					return Object(Re.a)(e, {
						...De,
						variables: r
					})
				})(e(), t, {
					topicIds: n
				});
				if (!r.ok) return null;
				const s = r.body,
					a = null == s ? void 0 : s.data.interestTopicsByIds;
				return a ? (e => (e => {
					let {
						edges: t
					} = e;
					const n = [];
					return t.forEach(e => {
						let {
							node: t
						} = e;
						var r, s, a;
						const o = [];
						null === (a = null === (s = null === (r = t.topic) || void 0 === r ? void 0 : r.subreddits) || void 0 === s ? void 0 : s.edges) || void 0 === a || a.forEach(e => {
							let {
								node: t
							} = e;
							t.isSubscribed || o.push((e => {
								let {
									detectedLanguage: t,
									id: n,
									prefixedName: r,
									publicDescriptionText: s,
									styles: a
								} = e;
								var o;
								return {
									description: s,
									language: t,
									icon: a.icon || (null === (o = a.legacyIcon) || void 0 === o ? void 0 : o.url),
									id: n,
									prefixedName: r
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
			}, qe = e => {
				var t;
				return {
					description: e.publicDescription,
					language: null,
					icon: e.communityIcon || (null === (t = e.icon) || void 0 === t ? void 0 : t.url),
					id: e.id,
					isSubscribed: e.isSubscribed,
					prefixedName: e.displayText
				}
			}, We = async e => {
				var t;
				const n = await Object(Fe.b)(e(), {
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
						return qe(t[n])
					})
				}
				return null
			}, Ue = async e => {
				const t = Object(Ge.b)();
				if (null == t ? void 0 : t.length) {
					const n = t.map(e => e.id),
						r = await Object(Pe.e)(e(), n);
					if (r.ok) return Object.values(r.body).map(qe)
				}
				return null
			};
			var He = n("./src/reddit/helpers/graphql/normalizeInterestTopicsFromGql/index.ts"),
				Qe = n("./src/redditGQL/operations/InterestTopics.json"),
				ze = n("./src/redditGQL/operations/UpdateTopicPreferences.json");
			const Xe = async (e, t) => {
				const n = await ((e, t) => {
					const n = {
						first: 500,
						maxChildren: 500,
						maxDepth: 2,
						schemeName: Me.b,
						onboardingFlow: t
					};
					return Object(Re.a)(e, {
						...Qe,
						variables: n
					})
				})(e(), t);
				if (!n.ok) return null;
				const r = n.body,
					s = null == r ? void 0 : r.data.interestTopics;
				return s ? Object(He.a)(s) : null
			}, Ke = (e, t) => ((e, t) => Object(Re.a)(e, {
				...ze,
				variables: t
			}))(e(), {
				input: {
					selectedOnboardingTopicIds: t
				}
			});
			var Je = n("./src/redditGQL/operations/LanguageSelections.json"),
				Ze = n("./src/redditGQL/operations/UpdateSpokenLanguagesPreference.json");
			const Ye = async (e, t) => {
				const n = await (e => {
					const t = {
						allKey: "top_languages",
						suggestedKey: "suggested_languages"
					};
					return Object(Re.a)(e, {
						...Je,
						variables: t
					})
				})(e());
				if (!n.ok) return null;
				const r = n.body,
					s = null == r ? void 0 : r.data;
				return s ? ((e, t) => {
					let n, r, s = null;
					const a = {};
					if (n = e.suggested.filter(e => (a[e.isoCode] = !0, t !== e.isoCode || (s = e, !1))), r = e.all.filter(e => e.isoCode === t ? (s = e, !1) : !a[e.isoCode]), r = n.concat(r), null === s) {
						const e = t.split("-")[0];
						r = r.filter(t => t.isoCode !== e || (s = t, !1))
					}
					return s && r.unshift(s), {
						sortedLanguages: r
					}
				})(s, t) : null
			}, $e = async (e, t) => {
				const n = await ((e, t) => {
					const n = {
						input: {
							spokenLanguages: t
						}
					};
					return Object(Re.a)(e, {
						...Ze,
						variables: n
					})
				})(e(), Object.keys(t));
				if (!n.ok) return null;
				const r = n.body;
				return null == r ? void 0 : r.data
			};
			var et = n("./src/reddit/helpers/counters/onboarding.ts"),
				tt = n("./src/reddit/helpers/onboarding/reonboarding.ts"),
				nt = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				rt = n("./src/reddit/icons/svgs/svgIcons.tsx"),
				st = n("./src/reddit/selectors/activeModal.ts"),
				at = n("./src/reddit/selectors/experiments/econ/index.ts"),
				ot = n("./src/reddit/selectors/experiments/survey.ts"),
				it = n("./src/reddit/selectors/experiments/targetedOnboardingSkip.ts"),
				ct = n("./src/reddit/selectors/meta.ts"),
				dt = n("./src/reddit/selectors/onboarding.ts"),
				lt = n("./src/reddit/selectors/user.ts"),
				ut = n("./src/reddit/actions/accountGender/index.ts"),
				mt = n("./src/reddit/actions/onboarding/index.ts");

			function pt() {
				return (pt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: bt
			} = n("./node_modules/fbt/lib/FbtPublic.js"), gt = e => e.type === Me.d.REONBOARDING, ft = () => Object(g.f)({
				kind: C.b.Error,
				text: bt._("Something went wrong", null, {
					hk: "22u7ha"
				})
			}), ht = async (e, t) => {
				const n = {
					ok: !0,
					preSelectedCommunities: {},
					recommendedCommunities: []
				};
				try {
					n.recommendedCommunities = await (async (e, t) => {
						const n = [We(t), Ue(e)],
							[r, s] = await Promise.all(n);
						return Ae()([...s || [], ...r || []], e => e.id).filter(e => !e.isSubscribed)
					})(e, t)
				} catch (r) {
					n.ok = !1
				}
				return n
			}, xt = async (e, t, n, r) => {
				const s = Object.keys(n),
					a = Object.keys(r),
					o = [],
					i = {
						ok: !0,
						reload: !1
					};
				if (s.length && o.push(((e, t) => Object(Be.c)(e(), {
						subredditIds: t,
						subscribe: !0
					}))(e, s)), a.length && o.push(Ke(t, a)), o.length) try {
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
			}, Ot = Object(c.a)(e => {
				const {
					gqlContext: t,
					apiContext: n
				} = e, r = Object(i.d)(), s = Object(v.a)(), c = Object(i.e)(st.a), g = gt(c), f = g ? Ne.INTERESTS : Ne.GENDER, [h, x] = Object(a.useState)(f), [C, E] = Object(a.useState)(null), j = Object(i.e)(dt.a), [k, y] = Object(a.useState)(g), [S, I] = Object(a.useState)(!1), T = {
					topics: [],
					schemeName: void 0
				}, [w, L] = Object(a.useState)(T), [P, F] = Object(a.useState)(!1), [B, D] = Object(a.useState)(gt(c) && (null == c ? void 0 : c.selectedInterests) || {}), [V, q] = Object(a.useState)(!1), [W, U] = Object(a.useState)([]), [H, Q] = Object(a.useState)([]), [z, X] = Object(a.useState)({}), [K, J] = Object(a.useState)(0), [Z, $] = Object(a.useState)({
					sortedLanguages: []
				}), [ee, te] = Object(a.useState)(!1), [ne, re] = Object(a.useState)({}), {
					avatarImage: se,
					fetchRandomAvatar: ae,
					saveAvatar: oe
				} = _(), ie = g ? Me.c.REONBOARDING_BOTTOM_SHEET : Me.c.ONBOARDING;
				Object(a.useEffect)(() => {
					(k || j) && async function() {
						F(!0);
						const e = await Xe(t, ie);
						F(!1), e && (J(Date.now() / l.Xb), L(e))
					}()
				}, [k, j, t, ie]), Object(a.useEffect)(() => {
					j && Object(et.a)(null == C ? void 0 : C.genderCategory, j.success)
				}, [j, C]);
				const ce = Object(i.e)(Ee.b) === Ce.tb.Removed;
				Object(a.useEffect)(() => {
					let e = !1;
					return async function() {
						let s = {
							ok: !0,
							preSelectedCommunities: {},
							recommendedCommunities: []
						};
						ce || (s = await ht(n, t));
						const {
							ok: a,
							preSelectedCommunities: o,
							recommendedCommunities: i
						} = s;
						a ? e || (X(o), Q(i)) : r(ft())
					}(), () => {
						e = !0
					}
				}, [n, r, t, ce]);
				const de = Object(i.e)(ct.j),
					le = Object(i.e)(Ee.a),
					ue = le === Ce.ad.TopTwo || le === Ce.ad.All,
					me = Object(a.useCallback)(async () => {
						te(!0);
						const e = await Ye(t, de);
						if (te(!1), e) {
							if ($(e), e.sortedLanguages.length > 0 && (e.sortedLanguages[0].isoCode === de || e.sortedLanguages[0].isoCode === de.split("-")[0])) {
								const t = {};
								t[e.sortedLanguages[0].isoCode] = !0, re(t)
							}
						} else r(ft())
					}, [r, t, de]),
					pe = Object(a.useCallback)(async () => await $e(t, ne), [t, ne]),
					be = Object(i.e)(e => Object(ot.f)(e)),
					ge = Object(i.e)(lt.S),
					fe = Object(i.e)(ct.g),
					he = Object(i.e)(it.a),
					xe = he === Ce.ag.CloseOnboarding,
					Oe = he === Ce.ag.SkipTopicSelection,
					ve = he === Ce.ag.SmartSignal,
					_e = Object(a.useCallback)(() => {
						r(Object(p.g)(Te.a.ONBOARDING_MODAL_D2X)), be && r(Object(b.h)()), g && (s(Object(A.t)()), Object(tt.a)()), fe && ge && r(Object(u.startChangeUsernameFlow)())
					}, [r, ge, fe, g, be, s]),
					je = Object(a.useCallback)((function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1500;
						setTimeout(async () => {
							await r(Object(m.frontpageReloaded)()), setTimeout(_e, e)
						}, e)
					}), [_e, r]),
					ke = Object(a.useCallback)(() => {
						const e = Object.keys(B).filter(e => 0 === B[e].length || !B[e].find(e => B[e]));
						U([]), e.length && async function() {
							q(!0);
							const n = await Ve(t, ie, e);
							q(!1), n && U(n)
						}()
					}, [t, B, ie]),
					ye = Object(a.useCallback)(e => {
						F(!0), x(Ne.INTERESTS), r(Object(ut.a)(e))
					}, [r]),
					Se = Object(a.useCallback)(async () => {
						s(Object(A.p)()), ye(C || G)
					}, [ye, C, s]),
					we = Object(a.useCallback)(async e => {
						s(Object(A.p)()), ye(e)
					}, [ye, s]),
					Re = Object(a.useCallback)(async () => {
						s(Object(A.u)());
						const e = Date.now() / l.Xb - K;
						ve && e <= 5 ? (I(!0), D({}), ae(), x(Ne.AVATAR)) : (x(Ne.COMMUNITIES), ke())
					}, [ke, s, K, ve, ae]),
					Le = Object(a.useCallback)(async () => {
						s(Object(A.j)()), ue ? (me(), x(Ne.LANGUAGES)) : (ae(), x(Ne.AVATAR)), (await xt(n, t, z, B)).ok || r(ft())
					}, [n, r, me, ae, t, z, B, s, ue]),
					Ae = Object(a.useCallback)(async () => {
						ae(), x(Ne.AVATAR), await pe() || r(ft())
					}, [r, ae, pe]),
					Ge = Object(a.useCallback)(() => {
						x(Ne.CELEBRATION), je()
					}, [je]),
					Pe = Object(a.useCallback)(() => {
						oe(), Ge()
					}, [oe, Ge]),
					Fe = (() => h === Ne.GENDER ? Se : h === Ne.INTERESTS ? Re : h === Ne.COMMUNITIES ? Le : h === Ne.LANGUAGES ? Ae : Pe)(),
					Be = Object(i.e)(e => h === Ne.AVATAR && !g && Object(at.a)(e));
				Object(a.useEffect)(() => {
					h !== Ne.AVATAR || Be || Ge()
				}, [Be, h, Ge]);
				const De = h !== f,
					qe = Object(a.useCallback)(() => {
						h === Ne.INTERESTS ? (r(Object(mt.resetGenderUpdateState)()), y(!1), x(Ne.GENDER)) : h === Ne.COMMUNITIES ? x(Ne.INTERESTS) : h === Ne.LANGUAGES ? x(S ? Ne.INTERESTS : Ne.COMMUNITIES) : h === Ne.AVATAR && x(ue ? Ne.LANGUAGES : S ? Ne.INTERESTS : Ne.COMMUNITIES)
					}, [h, r, S, ue]),
					We = h === Ne.GENDER || h === Ne.LANGUAGES || h === Ne.AVATAR || Oe,
					Ue = Object(a.useCallback)(() => {
						h === Ne.GENDER ? (s(Object(A.o)()), y(!0), x(Ne.INTERESTS)) : h === Ne.INTERESTS ? (s(Object(A.t)()), Oe ? (ae(), x(Ne.AVATAR), I(!0)) : _e()) : h === Ne.LANGUAGES ? (ae(), x(Ne.AVATAR)) : h === Ne.AVATAR && (s(Object(O.a)("skip")), Ge())
					}, [_e, s, h, Ge, Oe, ae]),
					He = Object.keys(z).length,
					Qe = Object.keys(B).length,
					ze = Object.keys(ne).length,
					Ke = h === Ne.INTERESTS && Qe < (g ? 1 : 3) || h === Ne.COMMUNITIES && He < 1 || h === Ne.LANGUAGES && ze < 1 || ze > 10;
				if (h === Ne.CELEBRATION || h === Ne.AVATAR && !Be) return o.a.createElement(N, null);
				let Je;
				g || xe ? Je = o.a.createElement("button", {
					"aria-label": bt._("Close", null, {
						hk: "3XndV9"
					}),
					className: Y.a.dismissButton,
					onClick: _e
				}, o.a.createElement(M.a, {
					name: "close"
				})) : !xe && We && (Je = o.a.createElement("button", {
					className: Y.a.skipButton,
					onClick: Ue
				}, bt._("Skip", null, {
					hk: "2S8Lme"
				})));
				const Ze = h === Ne.INTERESTS || h === Ne.COMMUNITIES || h === Ne.LANGUAGES;
				return o.a.createElement("div", {
					className: `${Y.a.container} ${h===Ne.GENDER&&Y.a.containerImproved}`
				}, o.a.createElement("header", {
					className: Y.a.header
				}, o.a.createElement("div", {
					className: `\n            ${Y.a.headerBar}\n            ${Ze&&Y.a.noHeaderBar}\n            ${!Ze&&Y.a.headerBarImproved}\n          `
				}, o.a.createElement("div", null, De && o.a.createElement(rt.d, {
					className: Y.a.backButton,
					onClick: qe
				})), o.a.createElement(nt.a, {
					className: Y.a.snooIcon
				}), o.a.createElement("div", {
					className: Y.a.skipOrDismissContainer
				}, Je)), h === Ne.GENDER && o.a.createElement("div", {
					className: Y.a.title
				}, bt._("About you", null, {
					hk: "35GAtt"
				})), h === Ne.AVATAR && o.a.createElement("div", {
					className: Y.a.title
				}, bt._("Style your avatar", null, {
					hk: "15i2ld"
				})), h === Ne.GENDER && o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: Y.a.subtitle
				}, bt._("Tell us about yourself to start building your home feed.", null, {
					hk: "lpWI4"
				})), o.a.createElement("div", {
					className: R.a.prompt
				}, bt._("How do you identify?", null, {
					hk: "1JAuh0"
				}))), h === Ne.AVATAR && o.a.createElement("div", {
					className: Y.a.subtitle
				}, bt._("This is how people will see you on Reddit.", null, {
					hk: "2SmAiC"
				}), o.a.createElement("br", null), bt._("You can change it later if you’d like.", null, {
					hk: "34hXSo"
				}))), o.a.createElement(Ie, {
					activeStep: h,
					autoProgressGenderCollection: we,
					avatarImage: se,
					communitiesByTopic: W,
					fetchRandomAvatar: ae,
					interests: w,
					languages: Z,
					loadingCommunities: V,
					loadingInterests: P,
					loadingLanguages: ee,
					recommendedCommunities: H,
					selectedCommunities: z,
					selectedGenderOption: C,
					selectedInterests: B,
					selectedLanguages: ne,
					setSelectedCommunities: X,
					setSelectedGenderOption: E,
					setSelectedInterests: D,
					setSelectedLanguages: re
				}), !(h === Ne.GENDER) && o.a.createElement("div", {
					className: Object(d.a)(Y.a.continueButtonWrapper, {
						[Y.a.avatarPicker]: h === Ne.AVATAR
					})
				}, o.a.createElement("button", {
					className: Y.a.continueButton,
					disabled: Ke,
					onClick: Fe
				}, bt._("Continue", null, {
					hk: "15wNPy"
				}))))
			});
			t.default = Object(we.b)(e => o.a.createElement(Ot, pt({}, e, {
				className: Object(d.a)(e.className, Y.a.modal),
				onOverlayClick: s.a,
				overlayClassName: Y.a.overlay
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
				selectedComponentAvatar: "_3TCCVjlVGvWmajGcRZ4Aye"
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
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
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
			t.a = o.a.wrapped(e => {
				const {
					children: t,
					className: n,
					renderBelow: r,
					text: o,
					tooltipContentClass: i,
					...l
				} = e;
				return s.a.createElement("div", d({}, l, {
					className: Object(a.a)(c.a.container, n)
				}), o ? s.a.createElement("div", {
					className: Object(a.a)(c.a.tooltip, i, r ? c.a.below : c.a.above)
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
				return C
			})), n.d(t, "a", (function() {
				return E
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
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
						isPending: s
					} = this.state;
					return a.a.createElement("section", {
						className: Object(i.a)(e, b.a.container)
					}, a.a.createElement(c.i, null, a.a.createElement(u.a, null, a.a.createElement(c.q, null, r.fbt._("I refer to myself as...", null, {
						hk: "4x0fpA"
					})), a.a.createElement(l.a, {
						onClick: t,
						disabled: s
					}, a.a.createElement(c.b, null)))), a.a.createElement(c.l, null, a.a.createElement(d.b, {
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
					})), a.a.createElement(c.g, null, a.a.createElement(c.a, {
						onClick: t,
						disabled: s
					}, r.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), a.a.createElement(c.r, {
						disabled: !this.inputsAreValid() || s,
						onClick: this.handleSubmit
					}, r.fbt._("Confirm", null, {
						hk: "2eSs27"
					}))))
				}
			}
			var f = Object(o.a)(g),
				h = n("./src/reddit/components/Settings/shared/Dropdown/index.tsx"),
				x = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				O = n("./src/reddit/components/Settings/GenderCollection/index.m.less"),
				v = n.n(O);
			const C = () => [{
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
			class E extends a.a.Component {
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
						definedGender: o,
						genderCategory: i
					} = {
						...t ? n : s
					};
					return a.a.createElement(x.c, {
						label: r.fbt._("Gender", null, {
							hk: "1spCV5"
						}),
						subtext: r.fbt._("Reddit will never share this information and only uses it to improve what content you see.", null, {
							hk: "1PqDkg"
						})
					}, a.a.createElement("div", {
						className: v.a.wrapper
					}, a.a.createElement(h.a, {
						dropdownId: "gender-dropdown-id",
						items: C(),
						onSelect: this.onSelect,
						placeholder: r.fbt._("Select", null, {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
				x = Object(a.b)(h, (e, t) => ({
					openDropdown: () => {
						e(Object(d.h)({
							tooltipId: t.dropdownId
						}))
					}
				}));
			class O extends s.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onToggleDropdown = () => {
						this.props.openDropdown()
					}, this.renderLabel = e => s.a.createElement(u.b, {
						className: g.a.dropdownRow,
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
						renderItem: a = this.renderDropdownItem,
						selectedKey: o,
						dropdownId: i
					} = this.props, d = n && {
						displayLabel: n,
						key: n
					}, l = t.find(e => e.key === o) || d || t[0];
					return s.a.createElement("div", {
						ref: this.setTooltipTargetRef,
						className: Object(c.a)(g.a.container, e.className),
						onClick: this.onToggleDropdown,
						"data-testid": i
					}, s.a.createElement("div", {
						className: g.a.labelWrapper
					}, r(l), s.a.createElement("span", null, s.a.createElement(m.b, null))), s.a.createElement(f, {
						tooltipTarget: this.tooltipTarget,
						isOpen: this.props.isDropdownOpen,
						renderContentsHidden: !0
					}, t.map(e => a(e, o === e.key))))
				}
			}
			t.a = x(O)
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
				return U
			})), n.d(t, "k", (function() {
				return K
			})), n.d(t, "o", (function() {
				return Z
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
				return xe
			})), n.d(t, "i", (function() {
				return Oe
			})), n.d(t, "c", (function() {
				return ve
			})), n.d(t, "e", (function() {
				return Ce
			})), n.d(t, "h", (function() {
				return Ee
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
				x = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				O = n("./src/reddit/controls/Select/index.m.less"),
				v = n.n(O);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const E = h.a.span("Wrapper", v.a),
				_ = h.a.select("Inner", v.a),
				j = h.a.wrapped(x.b, "Caret", v.a);

			function k(e) {
				let {
					className: t,
					innerClassName: n,
					...r
				} = e;
				const a = r.disabled ? {
					"data-disabled": r.disabled
				} : {};
				return s.a.createElement(E, {
					className: t
				}, s.a.createElement(_, C({
					className: n
				}, r)), s.a.createElement(j, C({
					isSubreddit: !0
				}, a)))
			}
			var y = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				S = n("./src/reddit/controls/Typography/index.tsx"),
				N = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				I = n("./src/reddit/icons/svgs/Circle/index.tsx"),
				T = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				w = n("./node_modules/lodash/range.js"),
				R = n.n(w),
				L = n("./src/reddit/controls/Button/index.tsx"),
				A = n("./src/reddit/layout/row/Inline/index.tsx"),
				G = n("./src/reddit/models/Flair/index.ts"),
				P = n("./src/reddit/selectors/tooltip.ts"),
				F = n("./src/reddit/selectors/user.ts"),
				B = n("./src/reddit/components/Settings/shared/Widgets.m.less"),
				M = n.n(B);

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const V = Object(l.a)(b.a),
				q = h.a.wrapped(I.a, "Circle", M.a),
				W = h.a.h3("Label", M.a),
				U = h.a.wrapped(S.c, "Subtext", M.a),
				H = h.a.wrapped(m.a, "HoverTooltip", M.a),
				Q = h.a.div("ControlContainer", M.a),
				z = h.a.div("TextContainer", M.a),
				X = h.a.div("ActionContainer", M.a),
				K = e => {
					let {
						className: t,
						direction: n,
						isCreateCommunity: r,
						inModal: a,
						isNightModeOn: o,
						disabled: i,
						indent: d,
						last: l,
						...u
					} = e;
					return s.a.createElement("div", D({}, u, {
						className: Object(c.a)(M.a.Wrapper, t, {
							[M.a.mColumn]: "column" === n,
							[M.a.mDisabled]: !!i,
							[M.a.mIndent]: !!d,
							[M.a.mLast]: !!l,
							[M.a.isCreateCommunity]: !!r,
							[M.a.inModal]: !!a,
							[M.a.isNightModeOn]: !!o
						})
					}))
				},
				J = h.a.a("Link", M.a),
				Z = h.a.wrapped(J, "SubtextLink", M.a),
				Y = h.a.wrapped(T.a, "LinkIcon", M.a),
				$ = h.a.button("LinkButton", M.a),
				ee = h.a.wrapped(N.a, "ArrowRight", M.a),
				te = e => s.a.createElement(K, {
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					isCreateCommunity: e.isCreateCommunity,
					last: e.last
				}, s.a.createElement(z, {
					className: e.textContainerClassName
				}, s.a.createElement(W, null, e.label, e.isRequired && s.a.createElement(q, null)), s.a.createElement(U, null, e.subtext)), s.a.createElement(X, null, e.children)),
				ne = h.a.div("StyledFlair", M.a),
				re = h.a.wrapped(ne, "SpoilerFlair", M.a),
				se = h.a.wrapped(ne, "NSFWFlair", M.a),
				ae = e => {
					switch (e.flair) {
						case G.f.Nsfw:
							return s.a.createElement(se, null, "NSFW");
						case G.f.Spoiler:
							return s.a.createElement(re, null, "SPOILER");
						default:
							return null
					}
				},
				oe = e => {
					const t = Object(o.a)();
					return s.a.createElement(K, {
						className: e.className,
						disabled: e.disabled,
						indent: e.indent,
						last: e.last
					}, s.a.createElement(z, null, s.a.createElement(A.a, null, s.a.createElement("label", {
						htmlFor: t,
						className: e.labelClassname
					}, s.a.createElement(W, null, e.label))), s.a.createElement(U, null, e.subtext)), s.a.createElement(X, null, s.a.createElement(Q, null, e.tooltip && s.a.createElement(H, {
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
				ie = h.a.input("RangeSliderInput", M.a),
				ce = h.a.div("RangeSlider", M.a),
				de = h.a.div("Ticks", M.a),
				le = h.a.div("TickText", M.a),
				ue = h.a.span("PreSubText", M.a),
				me = Object(i.c)({
					isNightModeOn: F.db
				}),
				pe = Object(a.b)(me)(e => s.a.createElement(K, {
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
				}, !e.inModal && s.a.createElement(A.a, null, s.a.createElement(W, {
					className: e.labelClassname
				}, e.label)), !e.hideSubtext && s.a.createElement(U, null, " ", s.a.createElement(ue, {
					style: {
						color: e.ticks[e.value].color
					}
				}, " ", e.ticks[e.value].text + ": ", " "), " ", e.subtext)), s.a.createElement(X, {
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
				be = e => s.a.createElement(K, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, s.a.createElement(z, null, s.a.createElement(A.a, null, s.a.createElement(W, null, e.label)), s.a.createElement(U, null, e.subtext)), s.a.createElement(X, null, s.a.createElement(Q, null, s.a.createElement(L.o, {
					onClick: e.onClick
				}, e.actionText)))),
				ge = e => s.a.createElement(K, {
					className: e.className,
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, s.a.createElement(z, null, s.a.createElement(J, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, e.label, s.a.createElement(Y, null)), s.a.createElement(U, null, e.subtext)), s.a.createElement(X, null, s.a.createElement(J, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, s.a.createElement(ee, null)))),
				fe = e => s.a.createElement(K, {
					className: e.className,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, s.a.createElement(z, null, s.a.createElement($, {
					onClick: e.onClick,
					className: Object(c.a)({
						[M.a.NoColor]: e.color && "none" === e.color
					})
				}, e.label), s.a.createElement(U, null, e.subtext)), s.a.createElement(X, null, !!e.hintText && s.a.createElement("div", {
					className: M.a.ActionHintText
				}, e.hintText), s.a.createElement($, {
					onClick: e.onClick,
					className: Object(c.a)({
						[M.a.NoColor]: e.color && "none" === e.color
					})
				}, s.a.createElement(ee, {
					className: Object(c.a)({
						[M.a.NoColor]: e.color && "none" === e.color
					})
				})))),
				he = Object(i.c)({
					isOpen: (e, t) => Object(P.b)(t.id)(e)
				}),
				xe = Object(a.b)(he, (e, t) => ({
					openDropdown: () => {
						e(Object(d.h)({
							tooltipId: t.id
						}))
					}
				}))(e => s.a.createElement(K, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, s.a.createElement(z, null, s.a.createElement(W, null, e.label), s.a.createElement(U, null, e.subtext)), s.a.createElement(X, null, (e => s.a.createElement("div", {
					className: M.a.DropdownWrapper,
					onClick: e.openDropdown
				}, s.a.createElement("span", {
					className: M.a.Row,
					id: `SettingDropdown--${e.id}`
				}, e.displayTitle || e.selected), s.a.createElement(x.b, {
					className: M.a.DropdownTriangle
				}), s.a.createElement(V, {
					container: void 0,
					isOpen: e.isOpen,
					renderContentsHidden: !0,
					isOverlay: !1,
					tooltipId: `SettingDropdown--${e.id}`
				}, e.items.map((t, n) => s.a.createElement(g.b, {
					className: M.a.DropdownRow,
					displayText: e.displayItems ? e.displayItems[n] : t,
					isSelected: e.selected === t,
					onClick: () => e.onClick(t),
					key: "row--" + n,
					item: t
				}))), e.descriptions && s.a.createElement("div", {
					className: M.a.DescriptionsRow
				}, e.descriptions[e.items.indexOf(e.selected)] || e.displayItems && e.descriptions[e.displayItems.indexOf(e.selected)])))(e)))),
				Oe = e => {
					let {
						disabled: t,
						last: n,
						onClick: a,
						onChange: o,
						...i
					} = e;
					const c = Object(r.useCallback)(e => o(e.target.value), [o]),
						{
							items: d
						} = i;
					return s.a.createElement(K, {
						disabled: t
					}, s.a.createElement(z, null, s.a.createElement("label", {
						htmlFor: i.id
					}, s.a.createElement(W, {
						className: i.labelClassname
					}, i.label)), s.a.createElement(U, null, i.subtext)), s.a.createElement("div", {
						className: M.a.Wrapper__LineBreak
					}), s.a.createElement(K, {
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
				ve = e => s.a.createElement(K, {
					className: e.className,
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, s.a.createElement(z, null, s.a.createElement(W, null, e.label), s.a.createElement(U, null, e.subtext)), s.a.createElement(X, null, e.children)),
				Ce = e => s.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, e.isCreateCommunity && s.a.createElement("span", {
					className: M.a.tag
				}, "r/"), s.a.createElement(f.a, {
					className: e.isCreateCommunity ? M.a.input : void 0,
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
				Ee = e => s.a.createElement(te, {
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
					className: M.a.MultiLineInputSettingsBottomRow
				}, !e.hideCountdown && s.a.createElement(u.a, {
					maxChars: e.maxChars,
					text: e.value || ""
				}), !!e.actionLink && s.a.createElement("div", {
					className: M.a.ActionLinkContainer
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
				return x
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "j", (function() {
				return C
			}));
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				a = n.n(s);
			const o = r.a.section("FormPage", a.a),
				i = r.a.h1("HomePageTitle", a.a),
				c = r.a.button("HomePageBreadcrumb", a.a),
				d = r.a.div("HomePageGroup", a.a),
				l = r.a.h1("FormPageTitle", a.a),
				u = r.a.div("FormPageSection", a.a),
				m = r.a.div("FormGroup", a.a),
				p = r.a.h2("FormGroupTitle", a.a),
				b = r.a.div("FormElement", a.a),
				g = r.a.div("FormGroupDescription", a.a),
				f = r.a.div("FormItem", a.a),
				h = r.a.h3("FormElementTitle", a.a),
				x = r.a.div("FormElementDescription", a.a),
				O = r.a.div("FormElementError", a.a),
				v = r.a.div("FormElementSubGroup", a.a),
				C = r.a.li("FormListItem", a.a)
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
				return x
			})), n.d(t, "g", (function() {
				return O
			}));
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/controls/Input/ModalInput.tsx"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				o = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				l = n.n(d);
			const u = r.a.wrapped(s.a, "ModalInput", l.a),
				m = r.a.input("Input", l.a),
				p = r.a.wrapped(c.a, "RadioOn", l.a),
				b = r.a.wrapped(i.a, "RadioOff", l.a),
				g = r.a.wrapped(a.a, "Checkbox", l.a),
				f = r.a.wrapped(o.a, "CheckboxSelected", l.a),
				h = r.a.textarea("Textarea", l.a),
				x = r.a.label("StyledLabel", l.a),
				O = r.a.input("StyledFileInput", l.a)
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				i = n.n(o);
			const c = e => s.a.createElement("div", {
				className: Object(a.a)(i.a.placeholderWrapper, e.fullWidth && i.a.fullWidth, e.large && i.a.large)
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
			var r, s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./node_modules/react-dom/index.js"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx");
			! function(e) {
				e[e.Visible = 0] = "Visible", e[e.NotVisible = 1] = "NotVisible"
			}(r || (r = {})), t.a = Object(i.c)(class extends a.a.Component {
				constructor() {
					super(...arguments), this.visibilityState = r.NotVisible, this.enterFired = !1, this.exitFired = !1
				}
				componentDidMount() {
					if (this.props.children) {
						const e = Object(o.findDOMNode)(this);
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
				return C
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/uniqueId.js"),
				a = n.n(s),
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
					}, r.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				h = n("./src/reddit/controls/ErrorText/index.m.less"),
				x = n.n(h);
			class O extends d.a.Component {
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
						errorModalTitle: s = r.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: a = r.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: o,
						isModalOpen: i
					} = this.state;
					return d.a.createElement("div", {
						className: Object(l.a)(x.a.wrapper, t)
					}, d.a.createElement("span", {
						className: x.a.description,
						ref: this.spanRef
					}, e), o && d.a.createElement("span", {
						className: x.a.moreText,
						onClick: this.toggleModal
					}, a), i && d.a.createElement(f, {
						onConfirmed: this.toggleModal,
						title: s
					}, n || e))
				}
			}
			const v = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: r,
						fallbackMessage: s,
						messages: a = []
					} = e, o = a.length ? a : s ? [s] : [];
					return o.length ? d.a.createElement("div", {
						className: t
					}, o.map((e, t) => d.a.createElement(O, {
						className: n,
						errorModalTitle: r,
						key: t
					}, e))) : null
				},
				C = e => d.a.createElement(v, {
					fallbackMessage: r.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = O
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
				return O
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
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
						inputRef: r,
						className: o,
						isInvalid: i,
						...c
					} = e;
					const d = void 0 !== c.value && "" !== c.value;
					return s.a.createElement("div", {
						className: Object(a.a)(u.a.inputWrapper, o, {
							[u.a.mIsInvalid]: i
						}),
						onClick: b
					}, s.a.createElement(p, m({
						"aria-invalid": i,
						innerRef: r
					}, c)), t && s.a.createElement("label", {
						className: Object(a.a)(u.a.label, {
							[u.a.mHasValue]: d
						})
					}, t), n)
				},
				f = e => {
					let {
						label: t,
						children: n,
						inputRef: r,
						isInvalid: o,
						className: i,
						redditStyle: c,
						...d
					} = e;
					const l = void 0 !== d.value && "" !== d.value;
					return s.a.createElement("div", {
						className: Object(a.a)(u.a.inputMovingLabelWrapper, i, {
							[u.a.mIsInvalid]: o,
							[u.a.mIsRedditStyle]: c
						}),
						onClick: b
					}, s.a.createElement(p, m({
						innerRef: r
					}, d)), t && s.a.createElement("label", {
						className: Object(a.a)(u.a.label, {
							[u.a.mHasValue]: l
						})
					}, t), n)
				},
				h = e => s.a.createElement("div", {
					className: Object(a.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", s.a.createElement(c.a, {
					className: u.a.plus
				}));
			var x;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(x || (x = {}));
			class O extends s.a.Component {
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
						errors: a = []
					} = this.props;
					return e.map((e, o) => s.a.createElement(g, {
						inputRef: e => this.setInputRef(e, o),
						isInvalid: !!a[o],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, o),
						placeholder: r,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, s.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(o)
					}, s.a.createElement(d.b, {
						className: u.a.trash
					})), !!a[o] && s.a.createElement(i.b, {
						className: u.a.errorText
					}, a[o])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: n,
						maxLength: r,
						addValueText: o,
						disabled: i
					} = this.props;
					this.focusedInput = null;
					const c = !(!!r && n.length >= r) && !i;
					return s.a.createElement("div", {
						className: Object(a.a)(u.a.multiInputWrapper, e)
					}, t && c && s.a.createElement(h, {
						onClick: this.addValue,
						text: o
					}), this.renderFields(), !t && c && s.a.createElement(h, {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = n.n(o);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: r = 10
				} = e;
				return s.a.createElement("div", {
					className: Object(a.a)(i.a.loadingIcon, n, {
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
				a = n("./src/reddit/constants/headers.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts"),
				i = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				c = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function d(e, t) {
				return Object(o.a)(e, {
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
				return Object(o.a)(e, {
					endpoint: `${r.a.metaUrl}/ps/me/braintree-client-tokens`,
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function u(e, t) {
				return Object(o.a)(e, {
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
				return Object(o.a)(Object(s.a)(e, [a.a]), {
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
				a = n("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts");
			const o = (e, t) => Object(r.a)(e, {
				...s,
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
				return s
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return o
			}));
			n("./node_modules/lodash/isEmpty.js");
			var r = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const s = e => {
					let {
						edges: t,
						pageInfo: n
					} = e;
					const s = {},
						a = [];
					for (const {
							node: o,
							...i
						} of t) {
						const e = Object(r.a)(o);
						s[e.id] = e, a.push(i)
					}
					return {
						pageInfo: n,
						rankings: a,
						subreddits: s
					}
				},
				a = e => {
					let {
						edges: t
					} = e;
					const n = {},
						s = [];
					for (const {
							node: a,
							...o
						} of t) {
						const e = Object(r.a)(a);
						n[e.id] = {
							...e,
							bannerBackgroundImage: a && a.styles && a.styles.bannerBackgroundImage
						}, s.push(o)
					}
					return {
						rankings: s,
						subreddits: n
					}
				},
				o = e => {
					let {
						edges: t,
						pageInfo: n
					} = e;
					const s = {},
						a = [];
					let o = 0;
					for (const {
							node: i
						} of t) {
						const e = Object(r.a)(i);
						s[e.id] = {
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
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				a = n.n(s);
			const o = e => {
					let {
						isLoading: t
					} = e;
					return Object(r.a)(a.a.loadingBackground, {
						[a.a["m-loading"]]: t
					})
				},
				i = e => Object(r.a)(a.a.loadingBar, o(e))
		},
		"./src/reddit/icons/svgs/CommunityDefault/filled.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", a({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), s.a.createElement("path", {
				d: "M16.5,2.924,11.264,15.551H9.91L15.461,2.139h.074a9.721,9.721,0,1,0,.967.785ZM8.475,8.435a1.635,1.635,0,0,0-.233.868v4.2H6.629V6.2H8.174v.93h.041a2.927,2.927,0,0,1,1.008-.745,3.384,3.384,0,0,1,1.453-.294,3.244,3.244,0,0,1,.7.068,1.931,1.931,0,0,1,.458.151l-.656,1.558a2.174,2.174,0,0,0-1.067-.246,2.159,2.159,0,0,0-.981.215A1.59,1.59,0,0,0,8.475,8.435Z"
			}))
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
		"./src/reddit/reducers/features/liveBar/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/actions/liveBar/index.ts");
			const s = {
				items: []
			};
			t.a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.a:
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
			var r = n("./src/reddit/actions/economics/marketplace/constants.ts");
			const s = {};
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
				return a
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => {
				return !(Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: r.Ce
				}) === r.Rd)
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
				a = n("./src/reddit/selectors/experiments/index.ts"),
				o = n("./src/reddit/selectors/experiments/utils.ts");
			const i = e => Object(s.c)(e, {
					experimentName: r.Wb,
					experimentEligibilitySelector: a.e
				}) === r.eb.topOfFeedWithCTAs,
				c = e => (e => Object(s.c)(e, {
					experimentName: r.Wb,
					experimentEligibilitySelector: a.e
				}) === r.eb.topOfFeedNoCTAs)(e) || i(e),
				d = e => Object(s.c)(e, {
					experimentName: r.Wb,
					experimentEligibilitySelector: a.e
				}) === r.eb.floatInFeed,
				l = e => {
					const t = Object(s.c)(e, {
						experimentName: r.Wb,
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
				return x
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "d", (function() {
				return C
			}));
			var r = n("./src/lib/objectSelector/index.ts"),
				s = n("./src/reddit/featureFlags/index.ts"),
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
				m = Object(r.a)((e, t) => {
					const n = p(e, t);
					if (!n) return u;
					const r = Object(o.cb)(e, {
						subredditName: n.name
					});
					return r && r.postIds && r.postIds.length ? r.postIds : u
				}),
				p = (e, t) => {
					const n = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return n ? Object(o.Y)(e, {
						subredditId: n
					}) : null
				},
				b = (e, t, n, r, s) => {
					const o = s.find(e => e <= t) || -1,
						i = s.find(e => e > t) || 1 / 0;
					return t !== i && t !== o && (!(o + n > t) && (!(t + n > i) && !((e, t, n) => {
						const r = n[t - 1],
							s = n[t],
							o = s && Object(a.G)(e, {
								postId: r
							}) || null,
							i = s && Object(a.G)(e, {
								postId: s
							}) || null;
						return o && o.isSponsored || i && i.isSponsored
					})(e, t, r)))
				},
				g = [3],
				f = Object(r.a)((e, t) => {
					let {
						existingDUPositions: n,
						listingProps: r
					} = t;
					const s = n.slice().sort();
					let o = -1;
					const i = Object(a.z)(e, {
							listingKey: r.listingKey
						}),
						c = [];
					return g.forEach(t => {
						let n = o + t;
						if (!(n >= i.length)) {
							for (; n < i.length && !b(e, n, t, i, s);) n += 1;
							n < i.length && (c.push(n), o = n)
						}
					}), c
				}),
				h = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				x = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				O = e => e.focusedVerticals.category,
				v = e => e.focusedVerticals.lastLoadedEnv,
				C = e => {
					const t = Object(i.P)(e),
						n = s.d.geoSubredditRecommendationDULoggedIn(e),
						r = s.d.geoSubredditRecommendationDULoggedOut(e);
					return t && n || !t && r
				}
		},
		"./src/redditGQL/operations/Frontpage.json": function(e) {
			e.exports = JSON.parse('{"id":"3912514e1693"}')
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
			e.exports = JSON.parse('{"id":"25e33b051f29"}')
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OnboardingModal.f90ec98feb53827f56ee.js.map