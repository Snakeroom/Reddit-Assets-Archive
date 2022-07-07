// https://www.redditstatic.com/desktop2x/OnboardingModal.a459676a7a795be882d0.js
// Retrieved at 7/7/2022, 4:10:13 PM by Reddit Dataminer v1.0.0
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
				return x
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "b", (function() {
				return k
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
				g = Object(s.a)(a.e),
				h = Object(s.a)(a.h),
				v = Object(s.a)(a.c),
				x = Object(s.a)(a.f),
				O = Object(s.a)(a.j),
				E = Object(s.a)(a.i),
				C = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const o = t(),
						a = Object(m.e)(o),
						d = Object(m.d)(o),
						p = Object(b.P)(o);
					if (a || !d) return;
					e(h());
					let x = !1;
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
									e(v({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), x = !0
								} else if (I(t)) {
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
									e(f(m)), x = !0
								}
							} else x = !1
						}
					} catch (O) {
						x = !1
					}
					x || e(g({
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
				}, I = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations,
						r = t && t.type;
					return !!(n && !j(e) && r === d.GEO && n[0] && n[0].recommendedSubreddit && n[0].interactedSubreddit)
				}, k = () => async (e, t, n) => {
					var r, s;
					const a = t(),
						i = Object(m.g)(a);
					if (Object(m.f)(a) || null === i || "client" === i) {
						const n = null === (s = null === (r = Object(p.b)(t())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === s ? void 0 : s.route.chunk,
							i = Object(b.Q)(a);
						return Object(o.i)(() => e(C()), {
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
				return ye
			})), n.d(t, "frontpageLoaded", (function() {
				return Se
			})), n.d(t, "frontpageFailed", (function() {
				return Ne
			})), n.d(t, "frontpageDataRequested", (function() {
				return we
			})), n.d(t, "frontpageRequestedHelper", (function() {
				return Te
			})), n.d(t, "frontpageRequested", (function() {
				return Fe
			})), n.d(t, "frontpageReloaded", (function() {
				return Ae
			})), n.d(t, "morePostsPending", (function() {
				return Le
			})), n.d(t, "morePostsLoaded", (function() {
				return Pe
			})), n.d(t, "morePostsFailed", (function() {
				return Me
			})), n.d(t, "morePostsRequested", (function() {
				return Be
			})), n.d(t, "refreshFeed", (function() {
				return De
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
				g = n("./src/reddit/helpers/getPostLimitForMobile/index.ts"),
				h = n("./src/reddit/models/Live/index.ts"),
				v = n("./src/reddit/models/Onboarding/index.ts"),
				x = n("./src/reddit/models/Post/index.ts"),
				O = n("./src/reddit/helpers/graphql/normalizeInterestTopicsFromGql/index.ts"),
				E = n("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				C = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				_ = n("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				j = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				I = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				k = n("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				y = n("./src/reddit/models/FeedElement/index.ts");

			function S(e) {
				return e.__typename === y.a.FreeNftFeedElement
			}
			var N = n("./src/reddit/models/NotificationInbox/index.ts"),
				w = n("./src/reddit/selectors/experiments/econ/marketplace.ts"),
				T = n("./src/reddit/selectors/experiments/inAppNotification.ts"),
				R = n("./src/reddit/selectors/experiments/loggedOutOneFeed.ts"),
				F = n("./src/reddit/selectors/experiments/onboarding.ts"),
				G = n("./src/reddit/helpers/chooseVariant/index.ts"),
				A = n("./src/reddit/selectors/experiments/utils.ts");
			const L = e => {
				const t = Object(G.c)(e, {
					experimentEligibilitySelector: G.a,
					experimentName: b.mc
				});
				return !!Object(A.a)(t)
			};
			var P = n("./src/reddit/selectors/platform.ts"),
				M = n("./src/reddit/selectors/user.ts"),
				B = n("./src/redditGQL/operations/Frontpage.json"),
				D = n("./src/redditGQL/types.ts"),
				V = n("./src/lib/initializeClient/installReducer.ts"),
				q = n("./src/reddit/reducers/features/marketplace/index.ts");
			Object(V.a)({
				features: {
					marketplace: q.a
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
					} = t, p = Object(F.c)(e), h = Object(M.Z)(e) || Object(M.Q)(e), v = Object(T.a)(e), x = Object(P.q)(e), O = Object(R.a)(e), E = {
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
						includeInterestTopics: !!p && !Object(b.Zf)(p),
						includeFeaturedAnnouncements: !0,
						includeLiveEvents: !0,
						includeIdentity: h && !(null === (r = null === (n = e.user.account) || void 0 === n ? void 0 : n.karma) || void 0 === r ? void 0 : r.total),
						includePostRecommendations: L(e) || O,
						includeFreeMarketplaceElement: Object(w.a)(e),
						includeSubredditQuestions: h,
						recentPostIds: e.posts.recent,
						notificationContext: {
							variant: null == v ? void 0 : v.toLowerCase()
						}
					};
					return O ? (E.sort = D.w.Best, E.feedRankingContext.variant = Object(R.b)(e)) : l && (E.sort = l.toUpperCase()), u && (E.range = u.toUpperCase()), a ? E.pageSize = Object(g.a)(i) : d && (E.pageSize = d), x && x.ad && (E.forceAds = {
						ad: x.ad
					}), s && (E.after = Object(c.a)(s)), E
				},
				H = async (e, t, n, r) => {
					const s = Date.now(),
						o = await ((e, t) => Object(u.a)(e, {
							...B,
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
								recentPosts: o = [],
								liveBarContent: a
							} = e;
							var i, c;
							const d = [],
								u = [];
							let m, b, f, g;
							const y = {
									postIds: [],
									postInstances: {},
									posts: {},
									postFlair: {},
									profiles: {},
									subreddits: {}
								},
								w = e => {
									if (y.posts[e.id]) return e.id;
									const t = Object(C.f)(e);
									y.posts[t.id] = t;
									const {
										crosspostRoot: n
									} = e;
									n && n.type === x.a.Post && n.postInfo && w(n.postInfo);
									let r = t.id;
									if (Object(x.l)(e)) y.profiles[e.profile.id] || (y.profiles[e.profile.id] = Object(j.a)(e.profile));
									else if (Object(x.n)(e)) y.subreddits[e.subreddit.id] || (y.subreddits[e.subreddit.id] = Object(I.a)(e.subreddit)), y.postFlair[e.subreddit.id] || (y.postFlair[e.subreddit.id] = Object(E.a)(e.subreddit));
									else if (Object(x.h)(e)) {
										const n = Object(C.b)(e);
										if (!n) return null;
										r = n, y.posts[n] = {
											...t,
											id: n,
											permalink: `${t.permalink}?instanceId=${encodeURIComponent(n)}`
										}, y.posts[t.id] || (y.posts[t.id] = {
											...t,
											events: []
										}), y.postInstances[e.id] || (y.postInstances[e.id] = []), y.postInstances[e.id].push(n)
									}
									return r
								};
							for (const l of t) {
								const e = Object(I.a)(l);
								y.subreddits[e.id] = e, d.push(e.id)
							}
							for (const [E, {
									node: _
								}] of r.elements.edges.entries())
								if (Object(x.k)(_)) {
									const e = w(_);
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
									const r = w(_.postInfo);
									r && (y.postIds.push(r), y.posts[r].recommendationContext = {
										content: Object(C.d)(e.richtext),
										source: {
											source: null == n ? void 0 : n.toLowerCase(),
											subredditId: null == t ? void 0 : t.id,
											subredditName: null == t ? void 0 : t.prefixedName
										}
									})
								}
							} else if (Object(h.c)(_) && !m) m = _;
							else if (Object(v.g)(_)) {
								const e = null === (i = null == _ ? void 0 : _.interestTopicRecommendations) || void 0 === i ? void 0 : i.recommendationTopics;
								if (e) {
									const t = Object(O.a)(e);
									t.topics.length && (f = {
										interests: t,
										index: E
									})
								}
							} else if (S(_) && !b) b = {
								element: _,
								index: r.elements.edges.findIndex(e => e.node === _)
							};
							else if (Object(N.d)(_) && (null === (c = null == _ ? void 0 : _.notifications) || void 0 === c ? void 0 : c.length)) g = {
								notifications: _.notifications,
								position: E,
								id: _.id
							};
							else {
								const e = `Received unhandled element type when processing frontpage data: "${_.__typename}"`;
								Object(l.b)() || console.warn(e), p.c.captureMessage(e)
							}
							for (const l of o) {
								if (!l) continue;
								const e = w(l);
								e && u.push(e)
							}
							const T = y.postIds.length - 1,
								R = T >= 0 ? y.postIds[T] : "",
								F = r.elements.dist,
								G = r.elements.geoFilter;
							return {
								...y,
								account: n && Object(k.a)(n) || null,
								featuredLiveThread: m,
								marketplaceFeedElement: b,
								interestTopicRecommendations: f,
								announcements: s,
								notifications: g,
								liveBarContent: a,
								preferences: n && n.preferences && Object(_.a)(n.preferences, n.interactions) || null,
								...0 !== d.length && {
									trendingSubredditIds: d
								},
								...0 !== u.length && {
									recentPostIds: u
								},
								token: R,
								...null !== F && {
									dist: F
								},
								...null !== G && {
									geoFilter: G
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
							name: d.r.FRONTPAGE,
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
			var Q = n("./src/lib/pageTitle/index.ts"),
				z = n("./src/lib/pageTitle/helpers.ts"),
				U = n("./src/reddit/actions/login.ts"),
				Z = n("./src/reddit/actions/meta.ts"),
				K = n("./src/reddit/actions/platform.ts"),
				J = n("./src/reddit/actions/toaster.ts"),
				X = n("./src/reddit/constants/history.ts"),
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
				pe = n("./src/reddit/helpers/counters/loggedOutOneFeed.ts"),
				be = n("./src/reddit/helpers/trackers/feed.ts"),
				fe = n("./src/reddit/models/LoggedOutOneFeed/index.ts"),
				ge = n("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				he = n("./src/reddit/actions/seo/linksModule.ts"),
				ve = n("./src/reddit/selectors/seo/linksModule.ts"),
				xe = n("./src/reddit/actions/publicAccessNetwork/api.ts"),
				Oe = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				Ee = n("./src/lib/sample/index.ts"),
				Ce = n("./src/reddit/actions/liveBar/index.ts"),
				_e = n("./src/reddit/helpers/filterListingResponse/index.ts"),
				je = n("./src/reddit/actions/frontpage/constants.ts"),
				Ie = n("./node_modules/uuid/v4.js"),
				ke = n.n(Ie);
			const ye = Object(le.a)(je.c),
				Se = Object(le.a)(je.b),
				Ne = Object(le.a)(je.a),
				we = (e, t) => async (n, s, o) => {
					var i, c, d, l, u, p;
					const b = s();
					if (b.listings.postOrder.api.pending[e]) return;
					const f = ee.e[Object(te.S)(b, {})];
					t.isMobile = Object(a.e)(b.meta.userAgent), t.recentPostIds = b.posts.recent, t.layout = f, t.useMockData = !!b.platform.currentPage && (!!b.platform.currentPage.queryParams.useMockData && Object(de.b)(b)), n(ye({
						key: e
					})); {
						const e = b.platform.currentPage,
							n = e && e.url;
						n && (t.clickUrl = n)
					}
					const g = ke()();
					t.correlationId = g;
					const h = null === (c = null === (i = Object(P.b)(b)) || void 0 === i ? void 0 : i.routeMatch) || void 0 === c ? void 0 : c.route.chunk,
						v = Object(M.Q)(b),
						x = await Object(m.i)(() => H(o.gqlContext(), W(b, t), Object(M.Z)(b), t.statsdPathsForExperiments), {
							name: "fetchFrontpageData",
							isLoggedIn: v,
							page: h
						});
					n(Object(K.n)(x.status));
					const O = `error-${e}`;
					if (x.ok && x.body) {
						const r = x.body;
						n(Se({
							key: e,
							meta: b.meta,
							correlationId: g,
							...r
						})), n(J.g(O)), r.geoFilter && n(Object(Z.k)(r.geoFilter)), r.liveBarContent && n(Object(Ce.b)(null !== (l = null === (d = r.liveBarContent) || void 0 === d ? void 0 : d.posts) && void 0 !== l ? l : [])), n(Object(me.b)(ge.a.FRONTPAGE));
						const o = null === (p = null === (u = Object(P.b)(b)) || void 0 === u ? void 0 : u.locationState) || void 0 === p ? void 0 : p[X.b.FeedLoadReason];
						Object(be.b)(t.isRefresh ? X.a.UserRefresh : null != o ? o : X.a.InitialLoad)(s())
					} else {
						n(Ne({
							error: x.error,
							key: e,
							...x.body
						})), n(J.f({
							id: O,
							kind: se.b.Error,
							text: r.fbt._("Sorry, we couldn't load posts for this page.", null, {
								hk: "36ypKx"
							}),
							buttonText: r.fbt._("Retry", null, {
								hk: "1XMjgA"
							}),
							buttonAction: we(e, t)
						})), Object(R.a)(b) && Object(Ee.a)(b, {
							rate: 14
						}) && Object(pe.a)(x.ok ? fe.a.ParseError : fe.a.XhrError);
						const o = x.error;
						Object(be.a)(o ? `${x.status||"000"}: ${o.type}` : "000: UNKNOWN_ERROR")(s())
					}
				}, Te = (e, t) => async (n, r) => {
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
						f = $.C in e.queryParams && e.queryParams[$.C].toUpperCase() || "",
						g = f in d.ic && d.ic[f],
						h = Q.e();
					if (p || u && !m && !t) return void(u && (n(K.m({
						title: b ? Object(z.a)(a, h) : h
					})), (null === (s = a.listings.postOrder.correlationIds) || void 0 === s ? void 0 : s[l]) && n(K.o({
						correlationId: a.listings.postOrder.correlationIds[l]
					})), a.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						n(Object(me.b)(ge.a.FRONTPAGE))
					})));
					const v = Object(ne.a)(a),
						x = Object(ne.b)(v),
						O = [Object(ne.c)(v)];
					await n(we(l, {
						...o()(e.queryParams, $.k),
						...o()(e.queryParams, $.j),
						limit: x,
						sort: c,
						statsdPathsForExperiments: O,
						t: Object(re.a)(c, g)
					})), n(K.m({
						title: b ? Object(z.a)(a, h) : h
					})), Object(G.c)(a, {
						experimentEligibilitySelector: G.a,
						experimentName: "redesign_aa"
					});
					const E = Object(ae.a)(a, {});
					Object(ae.e)(E) && n(Object(U.openRegisterModal)())
				}, Re = () => async (e, t) => {
					var n, r;
					const s = t();
					if (Object(ve.a)(s)) return;
					const o = null === (r = null === (n = Object(P.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
						a = Object(M.Q)(s);
					return Object(m.i)(() => e(Object(he.d)()), {
						name: "frontpageLinksRequested",
						page: o,
						isLoggedIn: a
					})
				}, Fe = (e, t) => async n => {
					await Promise.all([n(Object(i.b)()), n(Te(e, t)), n(Re()), n(Object(xe.c)(Oe.R))])
				}, Ge = Object(le.a)(je.d), Ae = e => async (t, n) => {
					const r = n(),
						s = r.platform.currentPage.routeMatch.match;
					Object(ce.o)(r) || Object(ce.u)(r) || (e || t(Ge()), await t(Fe(s, !0)))
				}, Le = Object(le.a)(je.g), Pe = Object(le.a)(je.f), Me = Object(le.a)(je.e), Be = e => async (t, n, r) => {
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
						b = u[$.C] ? u[$.C].toUpperCase() : "",
						f = b in d.ic && d.ic[b];
					if (p) {
						const e = i.listings.postOrder.api.pending[m],
							r = i.listings.postOrder.fetchedTokens,
							c = !(!r[m] || !r[m][p.token]);
						if (!e && !c) {
							t(Le({
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
									...o()(u, $.k),
									isMobile: Object(a.e)(i.meta.userAgent),
									limit: c,
									sort: l,
									t: Object(re.a)(l, f),
									layout: ee.e[Object(te.S)(i, {})],
									useMockData: e
								}; {
								const e = i.platform.lastPage,
									t = e && e.url;
								t && (b.clickUrl = t)
							}
							b.correlationId = i.listings.postOrder.correlationIds[m];
							const g = () => H(s(), W(i, b), Object(M.Z)(i), d),
								h = await g(),
								v = {
									...h.body,
									...Object(_e.a)(i, m, h.body)
								};
							if (h.ok) t(Pe({
								key: m,
								fetchedToken: p.token,
								meta: i.meta,
								...v
							})), Object(be.b)(X.a.NextPageLoad)(n());
							else {
								t(Me({
									key: m,
									error: h.error,
									fetchedToken: p.token,
									...v
								}));
								const e = h.error;
								Object(be.a)(e ? `${h.status||"000"}: ${e.type}` : "000: UNKNOWN_ERROR")(n())
							}
						}
					}
				}, De = e => async (t, n) => {
					const r = n(),
						s = Object(ie.a)(r),
						{
							sort: o = s
						} = e,
						a = r.platform.currentPage ? r.platform.currentPage.queryParams : {},
						i = Object(ue.a)(Y.b, o, a),
						c = a[$.C] ? a[$.C].toUpperCase() : "",
						l = c in d.ic && d.ic[c],
						u = Object(ne.a)(r),
						m = Object(ne.b)(u);
					await t(we(i, {
						limit: m,
						sort: o,
						t: Object(re.a)(o, l),
						isRefresh: !0
					}))
				}
		},
		"./src/reddit/actions/liveBar/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/reducers/features/liveBar/index.ts");
			const a = "LIVEBAR__SET_LIVEBAR_POSTS";
			Object(r.a)({
				features: {
					liveBar: o.a
				}
			});
			const i = Object(s.a)(a)
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
				avatarSpacing: "_1HdyqhDsitc_dk_jsSei7X",
				dynamicSizeWrapper: "_1pykqkDB2BSllN1eZhT_XE",
				previewImage: "_3im-E3gSVGoXU3e6gcNqo4",
				previewImageSpacing: "sAr6_Sa2XYfT5jireHfY2",
				loader: "_3wdFjura7xBHt6zxMSpFjm",
				randomizeButton: "_2Q_2oitWh5modqGvZBePJC",
				icon: "_3qJwIdgm0QU7z_VuH8giFl",
				randomizeButtonImproved: "_3h4jCVYDFbin_SgwnQ270L",
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
				headerBarImproved: "ZbrzdjOYMA6VpihcsfQ14",
				RecommendedHeader: "_1iDVgvQVKLoyDpsbnB3Wks",
				recommendedHeader: "_1iDVgvQVKLoyDpsbnB3Wks",
				SelectAllLink: "_3CPhqReN6aQjDfxC-MaWG4",
				selectAllLink: "_3CPhqReN6aQjDfxC-MaWG4",
				SelectAllLinkImproved: "_2NfAt7h-2pp36eOMBw831C",
				selectAllLinkImproved: "_2NfAt7h-2pp36eOMBw831C",
				SectionTitle: "_2rZrvBiGG74EOcrRa56xFY",
				sectionTitle: "_2rZrvBiGG74EOcrRa56xFY",
				SectionTitleImproved: "vBbV_AKepr6NzaitDbSku",
				sectionTitleImproved: "vBbV_AKepr6NzaitDbSku",
				IconWrapper: "_1Cvae_g1lbT2dlM39J6N2R",
				iconWrapper: "_1Cvae_g1lbT2dlM39J6N2R",
				CommunityRow: "_2h_rraB53rhUmsB6cnedRY",
				communityRow: "_2h_rraB53rhUmsB6cnedRY",
				Selected: "_2Wb_DytuCBtiMTgkGnOAps",
				selected: "_2Wb_DytuCBtiMTgkGnOAps",
				SelectedImproved: "_1wo4_pn8ZPNCw5NAcQ7alg",
				selectedImproved: "_1wo4_pn8ZPNCw5NAcQ7alg",
				ButtonSection: "_1NqRKRZcZbF3ik2-KoFyq4",
				buttonSection: "_1NqRKRZcZbF3ik2-KoFyq4",
				SelectIcon: "-j6EpjDSLcGv1RhitVdm-",
				selectIcon: "-j6EpjDSLcGv1RhitVdm-",
				SelectedIcon: "qCL1CsafVnfBcdMk3lj2X",
				selectedIcon: "qCL1CsafVnfBcdMk3lj2X",
				ImprovedIcon: "_3oWzVAfmLdhuStvcuhsFGI",
				improvedIcon: "_3oWzVAfmLdhuStvcuhsFGI",
				ButtonSectionImproved: "_3MyT_hg27o1jpclOt1zP7d",
				buttonSectionImproved: "_3MyT_hg27o1jpclOt1zP7d",
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
				moreRecommendations: "NWy0-XJnxMfzZud1EkVrZ",
				MoreRecommendationsImproved: "izsvEd2jCCs-MGGAqiK6Y",
				moreRecommendationsImproved: "izsvEd2jCCs-MGGAqiK6Y"
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
				genderRadioButtonImproved: "IqL-Te-L5XAAAoS5mE--_",
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
				l = n("./src/reddit/actions/changeUsername.ts"),
				u = n("./src/reddit/actions/frontpage/index.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/actions/survey/index.ts"),
				b = n("./src/reddit/actions/toaster.ts"),
				f = n("./node_modules/fbt/lib/FbtPublic.js"),
				g = n("./src/lib/sentry/index.ts"),
				h = n("./src/reddit/actions/snoovatar.ts"),
				v = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				x = n("./src/reddit/hooks/useTracking.ts"),
				O = n("./src/reddit/models/Toast/index.ts"),
				E = n("./src/reddit/selectors/avatar.ts");
			var C = () => {
					const e = Object(i.e)(E.a),
						t = Object(i.d)(),
						n = Object(x.a)(),
						r = Object(i.e)(E.c);
					Object(o.useEffect)(() => {
						(null == e ? void 0 : e.csrf_token) || t(Object(h.c)())
					}, []);
					const s = Object(o.useCallback)(async () => {
							t(Object(h.d)())
						}, [t]),
						a = Object(o.useCallback)(async () => {
							if (n(Object(v.a)("save_and_continue")), e && r) {
								n(Object(v.f)("onboarding"));
								try {
									return await t(Object(h.e)(r.accessoryIds, {}, {
										set_avatar_to_profile: !0,
										source: "web_onboarding"
									})), !0
								} catch (s) {
									g.c.captureException(s)
								}
							}
							return t(Object(b.f)({
								kind: O.b.Error,
								text: f.fbt._("Unable to save avatar, please try again.", null, {
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
				_ = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				j = n("./src/reddit/components/Onboarding/Celebration.m.less"),
				I = n.n(j);
			const {
				fbt: k
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var y = () => a.a.createElement("div", {
					className: I.a.CelebrationBg
				}, a.a.createElement("div", {
					className: I.a.CelebrationTitle
				}, k._("We're happy you're here!", null, {
					hk: "1YMdHn"
				})), a.a.createElement("div", {
					className: I.a.CelebrationSubTitle
				}, k._("Your home feed is being created now…", null, {
					hk: "Onr1V"
				})), a.a.createElement("div", null, a.a.createElement(_.a, {
					className: I.a.LoadingSpinner,
					sizePx: 16
				}))),
				S = n("./src/reddit/components/Settings/GenderCollection/index.tsx"),
				N = n("./src/reddit/models/Gender/index.ts"),
				w = n("./src/lib/constants/index.ts"),
				T = n("./src/reddit/components/Onboarding/GenderCollection/GenderCollection.m.less"),
				R = n.n(T),
				F = n("./src/reddit/helpers/trackers/onboarding.ts");
			const G = {
					definedGender: null,
					genderCategory: N.a.OPT_OUT
				},
				A = e => e === N.a.USER_DEFINED;
			var L = e => {
					let {
						autoProgressGenderCollection: t,
						isFlowImprovement: n,
						selectedGenderOption: r,
						setSelectedGenderOption: s
					} = e;
					const i = Object(x.a)(),
						c = Object(S.b)();
					n && c.splice(3, 1);
					const d = Object(o.useRef)(null),
						l = Object(o.useRef)([]),
						[u, m] = Object(o.useState)((null == r ? void 0 : r.definedGender) || "");
					Object(o.useEffect)(() => {
						i(Object(F.q)())
					}, [i]);
					const p = e => {
							var t;
							let n = null;
							return A(e) && (n = (null === (t = d.current) || void 0 === t ? void 0 : t.value) || "", m(n)), {
								definedGender: n,
								genderCategory: e
							}
						},
						b = Object(o.useCallback)(e => {
							var t;
							i(Object(F.n)()), s(p(e)), A(e) && (null === (t = d.current) || void 0 === t || t.focus())
						}, [i, s]),
						f = Object(o.useCallback)(e => {
							b(e.value), e.focus()
						}, [b]),
						g = Object(o.useCallback)(e => {
							if (!r || !A(r.genderCategory)) {
								const t = l.current[e];
								t && b(t.value)
							}
						}, [b, r]),
						h = (e, o) => {
							const i = A(e.key);
							return a.a.createElement("label", {
								key: e.key
							}, a.a.createElement("input", {
								checked: e.key === (null == r ? void 0 : r.genderCategory),
								className: `${R.a.genderRadioButton} ${n&&R.a.genderRadioButtonImproved}`,
								"data-testid": e.key,
								id: `genderCollectionOption${o+1}`,
								name: "genderCollection",
								onChange: () => b(e.key),
								onClick: () => n ? t(p(e.key)) : null,
								ref: e => l.current[o] = e,
								type: "radio",
								value: e.key
							}), i ? a.a.createElement("input", {
								className: R.a.genderUserDefinedInput,
								"data-testid": `${e.key}-input`,
								onChange: () => s(p(e.key)),
								onClick: () => g(o),
								onKeyDown: e => ((e, t) => {
									var n;
									const r = e.target;
									if (r) {
										if (w.g[e.key] && !r.value) {
											const n = l.current.length - 1;
											let r;
											(r = e.keyCode === w.g.ArrowUp || e.keyCode === w.g.ArrowLeft ? l.current[t ? t - 1 : n] : l.current[t === n ? 0 : t + 1]) && f(r)
										}
										e.keyCode === w.J && (null === (n = l.current[t]) || void 0 === n || n.focus())
									}
								})(e, o),
								placeholder: e.displayText,
								ref: d,
								tabIndex: -1,
								value: u
							}) : a.a.createElement("span", {
								className: `${R.a.genderOption} ${n&&R.a.genderOptionImproved}`
							}, e.displayText))
						};
					return a.a.createElement("div", null, c.map((e, t) => h(e, t)))
				},
				P = n("./src/reddit/constants/avatars.ts"),
				M = n("./src/reddit/controls/Button/index.tsx"),
				B = n("./src/reddit/icons/fonts/index.tsx"),
				D = n("./src/reddit/components/Onboarding/AvatarPicker/AvatarPicker.m.less"),
				V = n.n(D);
			const {
				fbt: q
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var W = e => {
					let {
						avatarImage: t,
						isFlowImprovement: n,
						fetchRandomAvatar: r
					} = e;
					const s = Object(x.a)();
					Object(o.useEffect)(() => {
						s(Object(v.o)())
					}, [s]);
					const i = Object(o.useCallback)(() => {
							s(Object(v.a)("randomize")), r()
						}, [s, r]),
						{
							legalCopy: c,
							learnMoreText: d,
							url: l
						} = P.a;
					return a.a.createElement("div", {
						className: V.a.avatarPicker
					}, a.a.createElement("div", {
						className: V.a.dynamicSizeWrapper
					}, t ? a.a.createElement("img", {
						"data-testid": "preview-image",
						src: `data:image/png;base64,${encodeURIComponent(t)}`,
						className: `${V.a.previewImage} ${n&&V.a.previewImageSpacing}`
					}) : a.a.createElement(_.a, {
						className: V.a.loader
					}), n ? a.a.createElement("div", {
						className: V.a.avatarSpacing
					}) : a.a.createElement("div", {
						className: V.a.legalTextContainer
					}, c(), a.a.createElement("a", {
						href: l,
						className: V.a.learnMoreLink
					}, d()))), a.a.createElement(M.t, {
						className: `${V.a.randomizeButton} ${n&&V.a.randomizeButtonImproved}`,
						priority: M.c.Secondary,
						onClick: i,
						Icon: Object(B.b)("random"),
						iconClassName: V.a.icon
					}, q._("Randomize", null, {
						hk: "uwAa8"
					})))
				},
				H = n("./node_modules/lodash/times.js"),
				Q = n.n(H);
			const z = function(e) {
				return (/^(r\/)([^\s]+)/g.exec(e) || [])[2] || ""
			};
			var U = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx");
			var Z = e => a.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 18 13"
				}, a.a.createElement("path", {
					fill: "inherit",
					d: "M6.50011 12.583C6.40482 12.5833 6.31041 12.5648 6.22235 12.5284C6.13429 12.492 6.05433 12.4385 5.98711 12.371L0.558105 6.94198L1.44211 6.05798L6.50011 11.116L17.0581 0.557983L17.9421 1.44198L7.01211 12.371C6.94493 12.4383 6.86512 12.4917 6.77725 12.5281C6.68939 12.5644 6.5952 12.5831 6.50011 12.583Z"
				})),
				K = n("./src/reddit/icons/svgs/CommunityDefault/filled.tsx"),
				J = n("./src/reddit/icons/svgs/Plus/index.tsx");
			var X = e => a.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 18 18"
				}, a.a.createElement("path", {
					fill: "#4B6066",
					d: "M18 8.38H9.63V0H8.38V8.38H0V9.63H8.38V18H9.63V9.63H18V8.38Z"
				})),
				Y = n("./src/reddit/icons/svgs/Positive/index.tsx"),
				$ = n("./src/reddit/components/Onboarding/index.m.less"),
				ee = n.n($),
				te = n("./src/reddit/components/TrackEnterExitViewport/index.tsx"),
				ne = n("./src/reddit/components/Onboarding/CommunityPicker.m.less"),
				re = n.n(ne);
			const {
				fbt: se
			} = n("./node_modules/fbt/lib/FbtPublic.js"), oe = () => se._("Recommended for you", null, {
				hk: "28LTkA"
			}), ae = e => {
				let {
					community: t,
					isFlowImprovement: n,
					schemeName: r,
					selected: s,
					toggleAll: i,
					toggleSelection: c,
					viewportRoot: d,
					setViewedCommunities: l,
					viewedCommunities: u
				} = e;
				const {
					communities: m
				} = t, [p, b] = Object(o.useState)(null);
				Object(o.useEffect)(() => {
					b(!m.find(e => !s[e.id]))
				}, [m, s]);
				const f = Object(o.useCallback)(() => {
					i(t.topicId, !p), b(!p)
				}, [t.topicId, p, i]);
				return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: re.a.RecommendedHeader
				}, a.a.createElement("span", {
					className: n ? re.a.SectionTitleImproved : re.a.SectionTitle
				}, t.topicTitle), a.a.createElement("button", {
					onClick: f,
					className: `${re.a.SelectAllLink} ${n&&re.a.SelectAllLinkImproved}`
				}, p && se._("Deselect All", null, {
					hk: "4u0XYF"
				}), !p && null !== p && se._("Select All", null, {
					hk: "3izh21"
				}))), a.a.createElement(a.a.Fragment, null, a.a.createElement(ce, {
					communities: t.communities,
					isFlowImprovement: n,
					schemeName: r,
					selected: s,
					toggleSelection: c,
					topicId: t.topicId,
					topicName: t.topicName,
					topicTitle: t.topicTitle,
					viewportRoot: d,
					setViewedCommunities: l,
					viewedCommunities: u
				})))
			}, ie = () => a.a.createElement(a.a.Fragment, null, Q()(5, e => a.a.createElement(U.a, {
				key: e,
				fullWidth: !0,
				large: !0
			}))), ce = e => {
				let {
					communities: t,
					isFlowImprovement: n,
					schemeName: r,
					selected: s,
					topicId: i,
					topicName: c,
					topicTitle: d,
					toggleSelection: l,
					viewportRoot: u,
					setViewedCommunities: m,
					viewedCommunities: p
				} = e;
				const b = Object(x.a)(),
					[f, g] = Object(o.useState)(!1),
					h = t.length > 4,
					v = t.slice(0, f ? void 0 : 4),
					O = "recommended" === i ? "" : d,
					E = Object(o.useCallback)(() => {
						g(!0), b(Object(F.k)(d, i))
					}, [b, d, i]);
				return a.a.createElement(a.a.Fragment, null, v.map(e => {
					const t = p.has(e.id);
					return a.a.createElement(te.a, {
						key: e.id,
						fireOnce: !0,
						viewportRoot: u,
						threshold: 1,
						rootMargin: "0px 0px -85px 0px",
						onEnter: t ? void 0 : Object(F.m)(d, z(e.prefixedName), i, e.id, r),
						onEnterHandler: t => {
							m(new Set(p).add(e.id))
						}
					}, a.a.createElement(de, {
						communityId: e.id,
						description: e.description,
						icon: e.icon,
						isFlowImprovement: n,
						isSelected: s[e.id],
						key: e.id,
						language: e.language,
						prefixedName: e.prefixedName,
						schemeName: r,
						toggleSelection: l,
						topicId: i,
						topicName: c,
						topicTitle: d
					}))
				}), h && !f && a.a.createElement(ue, {
					isFlowImprovement: n,
					text: O,
					showMore: E
				}))
			}, de = e => {
				let {
					communityId: t,
					description: n,
					icon: r,
					isFlowImprovement: s,
					isSelected: i,
					language: c,
					prefixedName: l,
					schemeName: u,
					toggleSelection: m,
					topicId: p,
					topicName: b,
					topicTitle: f
				} = e;
				const g = Object(x.a)(),
					h = Object(o.useCallback)(() => {
						g(Object(F.i)(!i, f, p, z(l), t, u)), m(t)
					}, [t, i, l, u, g, m, f, p]);
				return a.a.createElement("div", {
					className: Object(d.a)(re.a.CommunityRow, {
						[s ? re.a.SelectedImproved : re.a.Selected]: i
					}),
					onClick: h
				}, a.a.createElement("div", {
					className: re.a.IconSection
				}, r && a.a.createElement("img", {
					className: re.a.IconWrapper,
					src: r
				}), !r && a.a.createElement(K.a, {
					className: re.a.CommunityNoIcon
				})), a.a.createElement("div", {
					className: re.a.TextSection
				}, a.a.createElement("div", {
					className: re.a.Info
				}, l, a.a.createElement(le, {
					isFlowImprovement: s,
					language: c
				})), a.a.createElement("div", {
					className: re.a.Description
				}, n)), a.a.createElement("div", {
					className: `${re.a.ButtonSection} ${s&&re.a.ButtonSectionImproved}`
				}, s && i && a.a.createElement(Z, {
					className: re.a.ImprovedIcon
				}), s && !i && a.a.createElement(X, {
					className: re.a.ImprovedIcon
				}), !s && i && a.a.createElement(Y.a, {
					className: re.a.SelectedIcon
				}), !s && !i && a.a.createElement(J.a, {
					className: re.a.SelectIcon
				})))
			}, le = e => {
				let {
					isFlowImprovement: t,
					language: n
				} = e;
				if (!t || !n) return null;
				const r = n.substring(0, 2).toUpperCase();
				return "EN" === r ? null : a.a.createElement("div", {
					className: re.a.LangIndicator
				}, r)
			}, ue = e => {
				let {
					isFlowImprovement: t,
					showMore: n,
					text: r
				} = e;
				return a.a.createElement("div", {
					className: t ? re.a.MoreRecommendationsImproved : re.a.MoreRecommendations
				}, a.a.createElement("button", {
					onClick: n
				}, t && se._("Show more", null, {
					hk: "3uUa1R"
				}), !t && !r && se._("More recommendations", null, {
					hk: "3I8APZ"
				}), !t && r && se._("More in {topic-title}", [se._param("topic-title", r)], {
					hk: "4afv7s"
				})))
			};
			var me = e => {
					let {
						communitiesByTopic: t,
						isFlowImprovement: n,
						loadingCommunities: r,
						recommendedCommunities: s,
						selected: i,
						schemeName: c,
						toggleSelection: d,
						toggleAll: l,
						viewportRoot: u
					} = e;
					const m = Object(x.a)();
					Object(o.useEffect)(() => {
						m(Object(F.l)())
					}, [m]);
					const [p, b] = Object(o.useState)(new Set);
					return a.a.createElement("div", {
						className: re.a.CommunityListWrapper
					}, n && a.a.createElement("div", {
						className: re.a.headerBarImproved
					}, a.a.createElement("div", {
						className: ee.a.titleImproved
					}, se._("Communities", null, {
						hk: "Gdzfs"
					})), a.a.createElement("div", {
						className: ee.a.subtitleImproved
					}, se._("Select a few to get started. You can update them later.", null, {
						hk: "2GcuTd"
					}))), s.length > 0 && a.a.createElement(ae, {
						community: {
							communities: s,
							topicId: "recommended",
							topicTitle: oe(),
							topicName: "recommended_for_you"
						},
						isFlowImprovement: n,
						schemeName: c,
						selected: i,
						toggleAll: l,
						toggleSelection: d,
						setViewedCommunities: b,
						viewedCommunities: p,
						viewportRoot: u
					}), (!!t.length || r) && a.a.createElement(a.a.Fragment, null, r && a.a.createElement(ie, null), t.map(e => a.a.createElement(ae, {
						key: e.topicId,
						community: e,
						isFlowImprovement: n,
						schemeName: c,
						selected: i,
						toggleAll: l,
						toggleSelection: d,
						setViewedCommunities: b,
						viewedCommunities: p,
						viewportRoot: u
					}))))
				},
				pe = n("./src/reddit/components/Onboarding/Interests/InterestPill.tsx"),
				be = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				fe = n("./src/reddit/components/Onboarding/Interests/InterestPicker.m.less"),
				ge = n.n(fe);
			const {
				fbt: he
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ve = e => {
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
					m = Object(o.useCallback)((e, t, r, o, a) => {
						u(Object(F.s)(!t, !r, o, a, n)), s(e)
					}, [n, u, s]);
				return a.a.createElement(a.a.Fragment, null, t.map((e, t) => {
					var o;
					const {
						id: u,
						topic: p
					} = e, b = !!r[u], f = null !== i, g = l.has(u);
					return a.a.createElement(a.a.Fragment, {
						key: e.id
					}, a.a.createElement(te.a, {
						fireOnce: !0,
						viewportRoot: c,
						threshold: 1,
						rootMargin: "0px 0px -85px 0px",
						onEnter: g ? void 0 : Object(F.r)(!f, p, u, n),
						onEnterHandler: e => {
							g || d(new Set(l).add(u))
						}
					}, a.a.createElement(pe.a, {
						colorIndex: f && null != i ? i : t,
						isSelected: b,
						isSubtopic: f,
						key: u,
						onClickHandler: () => m(e, b, f, p, u),
						topic: p
					}), b && !!(null === (o = e.children) || void 0 === o ? void 0 : o.length) && a.a.createElement(ve, {
						interests: e.children,
						schemeName: n,
						selected: r,
						toggleSelection: s,
						topicColor: t,
						setViewedInterests: d,
						viewedInterests: l
					})))
				}))
			}, xe = () => {
				const e = Object(be.b)({
					isLoading: !0
				});
				return a.a.createElement(a.a.Fragment, null, Q()(30, t => a.a.createElement("div", {
					key: t,
					className: Object(d.a)(ge.a.Placeholder, e)
				})))
			};
			var Oe = e => {
				let {
					interests: t,
					isFlowImprovement: n,
					schemeName: r,
					loadingInterests: s,
					selected: i,
					toggleSelection: c,
					viewportRoot: d
				} = e;
				const l = Object(x.a)();
				Object(o.useEffect)(() => {
					l(Object(F.v)())
				}, [l]);
				const [u, m] = Object(o.useState)(new Set);
				return a.a.createElement("div", {
					className: ge.a.InterestListButtons
				}, n && a.a.createElement("div", {
					className: ge.a.headerBarImproved
				}, a.a.createElement("div", {
					className: ee.a.titleImproved
				}, he._("Interests", null, {
					hk: "3XVu2d"
				})), a.a.createElement("div", {
					className: ee.a.subtitleImproved
				}, he._("Pick 3 or more things you’d like to see in your home feed", null, {
					hk: "3TEuhg"
				}))), s ? a.a.createElement(xe, null) : a.a.createElement(ve, {
					interests: t,
					schemeName: r,
					selected: i,
					toggleSelection: c,
					viewportRoot: d,
					setViewedInterests: m,
					viewedInterests: u
				}))
			};
			const {
				fbt: Ee
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Ce;
			! function(e) {
				e.AVATAR = "avatar", e.CELEBRATION = "celebration", e.COMMUNITIES = "communities", e.GENDER = "gender", e.INTERESTS = "interests"
			}(Ce || (Ce = {}));
			const _e = e => {
				let {
					activeStep: t,
					avatarImage: n,
					communitiesByTopic: r,
					autoProgressGenderCollection: s,
					fetchRandomAvatar: i,
					interests: c,
					isFlowImprovement: d,
					loadingCommunities: l,
					loadingInterests: u,
					recommendedCommunities: m,
					selectedCommunities: p,
					selectedInterests: b,
					setSelectedCommunities: f,
					setSelectedInterests: g,
					selectedGenderOption: h,
					setSelectedGenderOption: v
				} = e;
				const x = Object(o.useRef)(null);
				Object(o.useEffect)(() => {
					var e, t;
					return null === (t = null === (e = x.current) || void 0 === e ? void 0 : e.scroll) || void 0 === t ? void 0 : t.call(e, 0, 0)
				}, [t]);
				const O = Object(o.useCallback)(e => {
						const t = p[e],
							n = {
								...p
							};
						t ? delete n[e] : n[e] = !0, f(n)
					}, [p, f]),
					E = Object(o.useCallback)((e, t) => {
						const n = {
								...p
							},
							s = e => e.forEach(e => {
								t ? n[e.id] = !0 : delete n[e.id]
							});
						if ("recommended" === e) s(m);
						else {
							const t = r.find(t => t.topicId === e);
							t && s(t.communities)
						}
						f(n)
					}, [r, m, p, f]),
					C = Object(o.useCallback)(e => {
						const {
							children: t,
							id: n
						} = e, r = b[n], s = {
							...b
						};
						r ? (delete s[n], r.forEach(e => delete s[e])) : s[n] = [...(null == t ? void 0 : t.map(e => e.id)) || []], g(s)
					}, [b, g]);
				return a.a.createElement("div", {
					className: `\n      ${ee.a.SelectedComponent}\n      ${t===Ce.AVATAR&&(d?ee.a.SelectedComponentAvatarImproved:ee.a.SelectedComponentAvatar)}\n    `,
					ref: x
				}, t === Ce.GENDER && a.a.createElement(L, {
					autoProgressGenderCollection: s,
					isFlowImprovement: d,
					selectedGenderOption: h,
					setSelectedGenderOption: v
				}), t === Ce.INTERESTS && a.a.createElement(Oe, {
					interests: c.topics,
					isFlowImprovement: d,
					loadingInterests: u,
					schemeName: c.schemeName,
					selected: b,
					toggleSelection: C,
					viewportRoot: x.current
				}), t === Ce.COMMUNITIES && a.a.createElement(me, {
					communitiesByTopic: r,
					isFlowImprovement: d,
					loadingCommunities: l,
					recommendedCommunities: m,
					schemeName: c.schemeName,
					selected: p,
					toggleAll: E,
					toggleSelection: O,
					viewportRoot: x.current
				}), t === Ce.AVATAR && a.a.createElement(W, {
					avatarImage: n,
					isFlowImprovement: d,
					fetchRandomAvatar: i
				}))
			};
			var je = n("./src/reddit/constants/experiments.ts"),
				Ie = n("./src/reddit/constants/modals.ts"),
				ke = n("./src/reddit/contexts/ApiContext.tsx"),
				ye = n("./src/lib/makeGqlRequest/index.ts"),
				Se = n("./node_modules/lodash/uniqBy.js"),
				Ne = n.n(Se),
				we = n("./src/reddit/customMiddleware/recentSubreddits.ts"),
				Te = n("./src/reddit/endpoints/economics/specialMembership.ts"),
				Re = n("./src/reddit/endpoints/subreddit/local.ts"),
				Fe = n("./src/reddit/endpoints/subreddit/subscriptions.ts");
			var Ge = n("./src/reddit/models/Onboarding/index.ts"),
				Ae = n("./src/redditGQL/operations/InterestTopicsByIds.json");
			const Le = async (e, t, n) => {
				const r = await ((e, t, n) => {
					const r = {
						topicIds: [],
						schemeName: Ge.b,
						maxSubreddits: 10,
						onboardingFlow: t,
						...n
					};
					return Object(ye.a)(e, {
						...Ae,
						variables: r
					})
				})(e(), t, {
					topicIds: n
				});
				if (!r.ok) return null;
				const s = r.body,
					o = null == s ? void 0 : s.data.interestTopicsByIds;
				return o ? (e => (e => {
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
									detectedLanguage: t,
									id: n,
									prefixedName: r,
									publicDescriptionText: s,
									styles: o
								} = e;
								var a;
								return {
									description: s,
									language: t,
									icon: o.icon || (null === (a = o.legacyIcon) || void 0 === a ? void 0 : a.url),
									id: n,
									prefixedName: r
								}
							})(t))
						}), a.length && n.push({
							communities: a,
							topicId: t.id,
							topicTitle: t.topic.title,
							topicName: t.topic.name
						})
					}), n
				})(e))(o) : null
			}, Pe = e => {
				var t;
				return {
					description: e.publicDescription,
					language: null,
					icon: e.communityIcon || (null === (t = e.icon) || void 0 === t ? void 0 : t.url),
					id: e.id,
					isSubscribed: e.isSubscribed,
					prefixedName: e.displayText
				}
			}, Me = async e => {
				var t;
				const n = await Object(Re.b)(e(), {
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
						return Pe(t[n])
					})
				}
				return null
			}, Be = async e => {
				const t = Object(we.b)();
				if (null == t ? void 0 : t.length) {
					const n = t.map(e => e.id),
						r = await Object(Te.e)(e(), n);
					if (r.ok) return Object.values(r.body).map(Pe)
				}
				return null
			};
			var De = n("./src/reddit/helpers/graphql/normalizeInterestTopicsFromGql/index.ts"),
				Ve = n("./src/redditGQL/operations/InterestTopics.json"),
				qe = n("./src/redditGQL/operations/UpdateTopicPreferences.json");
			const We = async (e, t) => {
				const n = await ((e, t) => {
					const n = {
						first: 500,
						maxChildren: 500,
						maxDepth: 2,
						schemeName: Ge.b,
						onboardingFlow: t
					};
					return Object(ye.a)(e, {
						...Ve,
						variables: n
					})
				})(e(), t);
				if (!n.ok) return null;
				const r = n.body,
					s = null == r ? void 0 : r.data.interestTopics;
				return s ? Object(De.a)(s) : null
			}, He = (e, t) => ((e, t) => Object(ye.a)(e, {
				...qe,
				variables: t
			}))(e(), {
				input: {
					selectedOnboardingTopicIds: t
				}
			});
			var Qe = n("./src/reddit/helpers/counters/onboarding.ts"),
				ze = n("./src/reddit/helpers/onboarding/reonboarding.ts"),
				Ue = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				Ze = n("./src/reddit/icons/svgs/svgIcons.tsx"),
				Ke = n("./src/reddit/selectors/activeModal.ts"),
				Je = n("./src/reddit/selectors/experiments/econ/index.ts"),
				Xe = n("./src/reddit/selectors/experiments/onboarding.ts"),
				Ye = n("./src/reddit/selectors/experiments/survey.ts"),
				$e = n("./src/reddit/selectors/meta.ts"),
				et = n("./src/reddit/selectors/onboarding.ts"),
				tt = n("./src/reddit/selectors/user.ts"),
				nt = n("./src/reddit/actions/accountGender/index.ts"),
				rt = n("./src/reddit/actions/onboarding/index.ts");

			function st() {
				return (st = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: ot
			} = n("./node_modules/fbt/lib/FbtPublic.js"), at = e => e.type === Ge.d.REONBOARDING, it = () => Object(b.f)({
				kind: O.b.Error,
				text: ot._("Something went wrong", null, {
					hk: "22u7ha"
				})
			}), ct = async (e, t) => {
				const n = {
					ok: !0,
					preSelectedCommunities: {},
					recommendedCommunities: []
				};
				try {
					n.recommendedCommunities = await (async (e, t) => {
						const n = [Me(t), Be(e)],
							[r, s] = await Promise.all(n);
						return Ne()([...s || [], ...r || []], e => e.id).filter(e => !e.isSubscribed)
					})(e, t)
				} catch (r) {
					n.ok = !1
				}
				return n
			}, dt = async (e, t, n, r) => {
				const s = Object.keys(n),
					o = Object.keys(r),
					a = [],
					i = {
						ok: !0,
						reload: !1
					};
				if (s.length && a.push(((e, t) => Object(Fe.c)(e(), {
						subredditIds: t,
						subscribe: !0
					}))(e, s)), o.length && a.push(He(t, o)), a.length) try {
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
			}, lt = Object(c.a)(e => {
				const {
					gqlContext: t,
					apiContext: n
				} = e, r = Object(i.d)(), s = Object(x.a)(), c = Object(i.e)(Ke.a), b = at(c), f = b ? Ce.INTERESTS : Ce.GENDER, [g, h] = Object(o.useState)(f), O = Object(i.e)(Xe.a), [E, _] = Object(o.useState)(null), j = Object(i.e)(et.a), [I, k] = Object(o.useState)(b), S = {
					topics: [],
					schemeName: void 0
				}, [w, T] = Object(o.useState)(S), [L, P] = Object(o.useState)(!1), [M, D] = Object(o.useState)(at(c) && (null == c ? void 0 : c.selectedInterests) || {}), [V, q] = Object(o.useState)(!1), [W, H] = Object(o.useState)([]), [Q, z] = Object(o.useState)([]), [U, Z] = Object(o.useState)({}), {
					avatarImage: K,
					fetchRandomAvatar: J,
					saveAvatar: X
				} = C(), Y = b ? Ge.c.REONBOARDING_BOTTOM_SHEET : Ge.c.ONBOARDING;
				Object(o.useEffect)(() => {
					(I || j) && async function() {
						P(!0);
						const e = await We(t, Y);
						P(!1), e && T(e)
					}()
				}, [I, j, t, Y]), Object(o.useEffect)(() => {
					j && Object(Qe.a)(null == E ? void 0 : E.genderCategory, j.success)
				}, [j, E]);
				const $ = Object(i.e)(Xe.b) === je.sb.Removed;
				Object(o.useEffect)(() => {
					let e = !1;
					return async function() {
						let s = {
							ok: !0,
							preSelectedCommunities: {},
							recommendedCommunities: []
						};
						$ || (s = await ct(n, t));
						const {
							ok: o,
							preSelectedCommunities: a,
							recommendedCommunities: i
						} = s;
						o ? e || (Z(a), z(i)) : r(it())
					}(), () => {
						e = !0
					}
				}, [n, r, t, $]);
				const te = Object(i.e)(e => Object(Ye.f)(e)),
					ne = Object(i.e)(tt.S),
					re = Object(i.e)($e.g),
					se = Object(o.useCallback)(() => {
						r(Object(m.g)(Ie.a.ONBOARDING_MODAL_D2X)), te && r(Object(p.g)()), b && (s(Object(F.t)()), Object(ze.a)()), re && ne && r(Object(l.startChangeUsernameFlow)())
					}, [r, ne, re, b, te, s]),
					oe = Object(o.useCallback)((function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1500;
						setTimeout(async () => {
							await r(Object(u.frontpageReloaded)()), setTimeout(se, e)
						}, e)
					}), [se, r]),
					ae = Object(o.useCallback)(() => {
						const e = Object.keys(M).filter(e => 0 === M[e].length || !M[e].find(e => M[e]));
						H([]), e.length && async function() {
							q(!0);
							const n = await Le(t, Y, e);
							q(!1), n && H(n)
						}()
					}, [t, M, Y]),
					ie = Object(o.useCallback)(e => {
						P(!0), h(Ce.INTERESTS), r(Object(nt.a)(e))
					}, [r]),
					ce = Object(o.useCallback)(async () => {
						s(Object(F.p)()), ie(E || G)
					}, [ie, E, s]),
					de = Object(o.useCallback)(async e => {
						s(Object(F.p)()), ie(e)
					}, [ie, s]),
					le = Object(o.useCallback)(async () => {
						s(Object(F.u)()), h(Ce.COMMUNITIES), ae()
					}, [ae, s]),
					ue = Object(o.useCallback)(async () => {
						s(Object(F.j)()), J(), h(Ce.AVATAR), (await dt(n, t, U, M)).ok || r(it())
					}, [n, r, J, t, U, M, s]),
					me = Object(o.useCallback)(() => {
						h(Ce.CELEBRATION), oe()
					}, [oe]),
					pe = Object(o.useCallback)(() => {
						X(), me()
					}, [X, me]),
					be = (() => g === Ce.GENDER ? ce : g === Ce.INTERESTS ? le : g === Ce.COMMUNITIES ? ue : pe)(),
					fe = Object(i.e)(e => g === Ce.AVATAR && !b && Object(Je.a)(e));
				Object(o.useEffect)(() => {
					g !== Ce.AVATAR || fe || me()
				}, [fe, g, me]);
				const ge = g !== f,
					he = Object(o.useCallback)(() => {
						g === Ce.INTERESTS ? (r(Object(rt.resetGenderUpdateState)()), k(!1), h(Ce.GENDER)) : g === Ce.COMMUNITIES ? h(Ce.INTERESTS) : g === Ce.AVATAR && h(Ce.COMMUNITIES)
					}, [g, r]),
					ve = g === Ce.GENDER || g === Ce.AVATAR,
					xe = Object(o.useCallback)(() => {
						g === Ce.GENDER ? (s(Object(F.o)()), k(!0), h(Ce.INTERESTS)) : g === Ce.INTERESTS ? (s(Object(F.t)()), se()) : g === Ce.AVATAR && (s(Object(v.a)("skip")), me())
					}, [se, s, g, me]),
					Oe = Object.keys(U).length,
					Ee = Object.keys(M).length,
					ke = g === Ce.GENDER && !(e => !!e && (!A(null == e ? void 0 : e.genderCategory) || !!(e.definedGender && e.definedGender.length <= N.b)))(E) || g === Ce.INTERESTS && Ee < (b ? 1 : 3) || g === Ce.COMMUNITIES && Oe < 1;
				if (g === Ce.CELEBRATION || g === Ce.AVATAR && !fe) return a.a.createElement(y, null);
				let ye;
				b ? ye = a.a.createElement("button", {
					"aria-label": ot._("Close", null, {
						hk: "3XndV9"
					}),
					className: ee.a.dismissButton,
					onClick: se
				}, a.a.createElement(B.a, {
					name: "close"
				})) : ve && (ye = a.a.createElement("button", {
					className: O ? ee.a.skipButtonImproved : ee.a.skipButton,
					onClick: xe
				}, ot._("Skip", null, {
					hk: "2S8Lme"
				})));
				const Se = O && (g === Ce.INTERESTS || g === Ce.COMMUNITIES);
				return a.a.createElement("div", {
					className: `${ee.a.container} ${O&&g===Ce.GENDER&&ee.a.containerImproved}`
				}, a.a.createElement("header", {
					className: ee.a.header
				}, a.a.createElement("div", {
					className: `\n            ${ee.a.headerBar}\n            ${Se&&ee.a.noHeaderBar}\n            ${O&&!Se&&ee.a.headerBarImproved}\n          `
				}, a.a.createElement("div", null, ge && a.a.createElement(Ze.d, {
					className: ee.a.backButton,
					onClick: he
				})), a.a.createElement(Ue.a, {
					className: ee.a.snooIcon
				}), a.a.createElement("div", {
					className: ee.a.skipOrDismissContainer
				}, ye)), g === Ce.GENDER && (O ? a.a.createElement("div", {
					className: ee.a.titleImproved
				}, ot._("About you", null, {
					hk: "35GAtt"
				})) : a.a.createElement("div", {
					className: `${ee.a.title} ${R.a.title}`
				}, ot._("Which of the following best describes you?", null, {
					hk: "2hsRwl"
				}))), g === Ce.INTERESTS && !O && a.a.createElement("div", {
					className: ee.a.title
				}, ot._("What are you into?", null, {
					hk: "2hUwMd"
				})), g === Ce.COMMUNITIES && !O && a.a.createElement("div", {
					className: ee.a.title
				}, ot._("Join some communities", null, {
					hk: "1iB29u"
				})), g === Ce.AVATAR && a.a.createElement("div", {
					className: O ? ee.a.titleImproved : ee.a.title
				}, ot._("Style your avatar", null, {
					hk: "15i2ld"
				})), g === Ce.GENDER && (O ? a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: ee.a.subtitleImproved
				}, ot._("Tell us about yourself to start building your home feed.", null, {
					hk: "lpWI4"
				})), a.a.createElement("div", {
					className: R.a.prompt
				}, ot._("How do you identify?", null, {
					hk: "1JAuh0"
				}))) : a.a.createElement("div", {
					className: R.a.subtitle
				}, ot._("Reddit will never share this information and uses it to improve what content you see.", null, {
					hk: "4ievQt"
				}))), g === Ce.INTERESTS && !O && a.a.createElement("div", {
					className: ee.a.subtitle
				}, b ? ot._("Select topics to continue", null, {
					hk: "2LhE4e"
				}) : ot._("Select three topics to continue", null, {
					hk: "oHYeb"
				})), g === Ce.AVATAR && a.a.createElement("div", {
					className: O ? ee.a.subtitleImproved : ee.a.subtitle
				}, ot._("This is how people will see you on Reddit.", null, {
					hk: "2SmAiC"
				}), a.a.createElement("br", null), ot._("(You can change it later if you’d like.)", null, {
					hk: "1x9ZNL"
				}))), a.a.createElement(_e, {
					activeStep: g,
					autoProgressGenderCollection: de,
					avatarImage: K,
					communitiesByTopic: W,
					fetchRandomAvatar: J,
					interests: w,
					isFlowImprovement: O,
					loadingCommunities: V,
					loadingInterests: L,
					recommendedCommunities: Q,
					selectedCommunities: U,
					selectedGenderOption: E,
					selectedInterests: M,
					setSelectedCommunities: Z,
					setSelectedGenderOption: _,
					setSelectedInterests: D
				}), !(g === Ce.GENDER && O) && a.a.createElement("div", {
					className: Object(d.a)(ee.a.continueButtonWrapper, {
						[ee.a.avatarPicker]: g === Ce.AVATAR
					})
				}, a.a.createElement("button", {
					className: `${ee.a.continueButton} ${O&&ee.a.continueButtonImproved}`,
					disabled: ke,
					onClick: be
				}, ot._("Continue", null, {
					hk: "15wNPy"
				}))))
			});
			t.default = Object(ke.b)(e => a.a.createElement(lt, st({}, e, {
				className: Object(d.a)(e.className, ee.a.modal),
				onOverlayClick: s.a,
				overlayClassName: ee.a.overlay
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
				titleImproved: "v2-q0zlZOZP_-MH4T_TTm",
				subtitleImproved: "_3bEWEMUN3O-F_yBtD7OB3x",
				backButton: "_1tj26oBtwO7xtDQfIgqLJ3",
				snooIcon: "_1AB-migzFEWi3jmiZp47-H",
				skipOrDismissContainer: "_1m0iFpls1wkPZJVo38-LSh",
				skipButton: "_22ChQI9alXTuxk7yqwRt8l",
				skipButtonImproved: "_1-zyEEwYZaB4xLRr99k7cj",
				continueButtonWrapper: "_1WVJEpE8EJml0oUkHbpF4R",
				avatarPicker: "_1lW2GsLAoo81KdU6SFWdTW",
				continueButton: "dK60vCQAai2JPR7mVZ4ir",
				continueButtonImproved: "EPtrsLMzZfqzMksnkqq_g",
				SelectedComponent: "_1_rW7Yn-zqDSJD9D5Kd02K",
				selectedComponent: "_1_rW7Yn-zqDSJD9D5Kd02K",
				SelectedComponentAvatar: "_3TCCVjlVGvWmajGcRZ4Aye",
				selectedComponentAvatar: "_3TCCVjlVGvWmajGcRZ4Aye",
				SelectedComponentAvatarImproved: "L-719wZv7btElgZCvkOZZ",
				selectedComponentAvatarImproved: "L-719wZv7btElgZCvkOZZ"
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
			var g = Object(a.a)(f),
				h = n("./src/reddit/components/Settings/shared/Dropdown/index.tsx"),
				v = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				x = n("./src/reddit/components/Settings/GenderCollection/index.m.less"),
				O = n.n(x);
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
					return o.a.createElement(v.c, {
						label: r.fbt._("Gender", null, {
							hk: "1spCV5"
						}),
						subtext: r.fbt._("Reddit will never share this information and only uses it to improve what content you see.", null, {
							hk: "1PqDkg"
						})
					}, o.a.createElement("div", {
						className: O.a.wrapper
					}, o.a.createElement(h.a, {
						dropdownId: "gender-dropdown-id",
						items: E(),
						onSelect: this.onSelect,
						placeholder: r.fbt._("Select", null, {
							hk: "1zIGi5"
						}),
						selectedKey: i || ""
					})), e && o.a.createElement(g, {
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
			const g = Object(i.a)(l.a),
				h = Object(a.c)({
					isDropdownOpen: (e, t) => Object(p.b)(t.dropdownId)(e)
				}),
				v = Object(o.b)(h, (e, t) => ({
					openDropdown: () => {
						e(Object(d.h)({
							tooltipId: t.dropdownId
						}))
					}
				}));
			class x extends s.a.Component {
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
					}, r(l), s.a.createElement("span", null, s.a.createElement(m.b, null))), s.a.createElement(g, {
						tooltipTarget: this.tooltipTarget,
						isOpen: this.props.isDropdownOpen,
						renderContentsHidden: !0
					}, t.map(e => o(e, a === e.key))))
				}
			}
			t.a = v(x)
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
				return H
			})), n.d(t, "k", (function() {
				return K
			})), n.d(t, "o", (function() {
				return X
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
				return ge
			})), n.d(t, "d", (function() {
				return ve
			})), n.d(t, "i", (function() {
				return xe
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
				g = n("./src/reddit/controls/FormFields/index.tsx"),
				h = n("./src/lib/lessComponent.tsx"),
				v = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				x = n("./src/reddit/controls/Select/index.m.less"),
				O = n.n(x);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const C = h.a.span("Wrapper", O.a),
				_ = h.a.select("Inner", O.a),
				j = h.a.wrapped(v.b, "Caret", O.a);

			function I(e) {
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
				}, s.a.createElement(_, E({
					className: n
				}, r)), s.a.createElement(j, E({
					isSubreddit: !0
				}, o)))
			}
			var k = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				y = n("./src/reddit/controls/Typography/index.tsx"),
				S = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				N = n("./src/reddit/icons/svgs/Circle/index.tsx"),
				w = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				T = n("./node_modules/lodash/range.js"),
				R = n.n(T),
				F = n("./src/reddit/controls/Button/index.tsx"),
				G = n("./src/reddit/layout/row/Inline/index.tsx"),
				A = n("./src/reddit/models/Flair/index.ts"),
				L = n("./src/reddit/selectors/tooltip.ts"),
				P = n("./src/reddit/selectors/user.ts"),
				M = n("./src/reddit/components/Settings/shared/Widgets.m.less"),
				B = n.n(M);

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
				q = h.a.wrapped(N.a, "Circle", B.a),
				W = h.a.h3("Label", B.a),
				H = h.a.wrapped(y.c, "Subtext", B.a),
				Q = h.a.wrapped(m.a, "HoverTooltip", B.a),
				z = h.a.div("ControlContainer", B.a),
				U = h.a.div("TextContainer", B.a),
				Z = h.a.div("ActionContainer", B.a),
				K = e => {
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
					return s.a.createElement("div", D({}, u, {
						className: Object(c.a)(B.a.Wrapper, t, {
							[B.a.mColumn]: "column" === n,
							[B.a.mDisabled]: !!i,
							[B.a.mIndent]: !!d,
							[B.a.mLast]: !!l,
							[B.a.isCreateCommunity]: !!r,
							[B.a.inModal]: !!o,
							[B.a.isNightModeOn]: !!a
						})
					}))
				},
				J = h.a.a("Link", B.a),
				X = h.a.wrapped(J, "SubtextLink", B.a),
				Y = h.a.wrapped(w.a, "LinkIcon", B.a),
				$ = h.a.button("LinkButton", B.a),
				ee = h.a.wrapped(S.a, "ArrowRight", B.a),
				te = e => s.a.createElement(K, {
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					isCreateCommunity: e.isCreateCommunity,
					last: e.last
				}, s.a.createElement(U, {
					className: e.textContainerClassName
				}, s.a.createElement(W, null, e.label, e.isRequired && s.a.createElement(q, null)), s.a.createElement(H, null, e.subtext)), s.a.createElement(Z, null, e.children)),
				ne = h.a.div("StyledFlair", B.a),
				re = h.a.wrapped(ne, "SpoilerFlair", B.a),
				se = h.a.wrapped(ne, "NSFWFlair", B.a),
				oe = e => {
					switch (e.flair) {
						case A.f.Nsfw:
							return s.a.createElement(se, null, "NSFW");
						case A.f.Spoiler:
							return s.a.createElement(re, null, "SPOILER");
						default:
							return null
					}
				},
				ae = e => {
					const t = Object(a.a)();
					return s.a.createElement(K, {
						className: e.className,
						disabled: e.disabled,
						indent: e.indent,
						last: e.last
					}, s.a.createElement(U, null, s.a.createElement(G.a, null, s.a.createElement("label", {
						htmlFor: t,
						className: e.labelClassname
					}, s.a.createElement(W, null, e.label))), s.a.createElement(H, null, e.subtext)), s.a.createElement(Z, null, s.a.createElement(z, null, e.tooltip && s.a.createElement(Q, {
						tooltipContentClass: e.tooltipContentClassName,
						text: e.tooltip
					}), s.a.createElement(k.a, {
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
					isNightModeOn: P.db
				}),
				pe = Object(o.b)(me)(e => s.a.createElement(K, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled,
					inModal: e.inModal,
					isNightModeOn: e.isNightModeOn,
					direction: e.direction,
					className: e.className
				}, s.a.createElement(U, {
					style: {
						flex: 5
					}
				}, !e.inModal && s.a.createElement(G.a, null, s.a.createElement(W, {
					className: e.labelClassname
				}, e.label)), !e.hideSubtext && s.a.createElement(H, null, " ", s.a.createElement(ue, {
					style: {
						color: e.ticks[e.value].color
					}
				}, " ", e.ticks[e.value].text + ": ", " "), " ", e.subtext)), s.a.createElement(Z, {
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
				}, s.a.createElement(U, null, s.a.createElement(G.a, null, s.a.createElement(W, null, e.label)), s.a.createElement(H, null, e.subtext)), s.a.createElement(Z, null, s.a.createElement(z, null, s.a.createElement(F.o, {
					onClick: e.onClick
				}, e.actionText)))),
				fe = e => s.a.createElement(K, {
					className: e.className,
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, s.a.createElement(U, null, s.a.createElement(J, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, e.label, s.a.createElement(Y, null)), s.a.createElement(H, null, e.subtext)), s.a.createElement(Z, null, s.a.createElement(J, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, s.a.createElement(ee, null)))),
				ge = e => s.a.createElement(K, {
					className: e.className,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, s.a.createElement(U, null, s.a.createElement($, {
					onClick: e.onClick,
					className: Object(c.a)({
						[B.a.NoColor]: e.color && "none" === e.color
					})
				}, e.label), s.a.createElement(H, null, e.subtext)), s.a.createElement(Z, null, !!e.hintText && s.a.createElement("div", {
					className: B.a.ActionHintText
				}, e.hintText), s.a.createElement($, {
					onClick: e.onClick,
					className: Object(c.a)({
						[B.a.NoColor]: e.color && "none" === e.color
					})
				}, s.a.createElement(ee, {
					className: Object(c.a)({
						[B.a.NoColor]: e.color && "none" === e.color
					})
				})))),
				he = Object(i.c)({
					isOpen: (e, t) => Object(L.b)(t.id)(e)
				}),
				ve = Object(o.b)(he, (e, t) => ({
					openDropdown: () => {
						e(Object(d.h)({
							tooltipId: t.id
						}))
					}
				}))(e => s.a.createElement(K, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, s.a.createElement(U, null, s.a.createElement(W, null, e.label), s.a.createElement(H, null, e.subtext)), s.a.createElement(Z, null, (e => s.a.createElement("div", {
					className: B.a.DropdownWrapper,
					onClick: e.openDropdown
				}, s.a.createElement("span", {
					className: B.a.Row,
					id: `SettingDropdown--${e.id}`
				}, e.displayTitle || e.selected), s.a.createElement(v.b, {
					className: B.a.DropdownTriangle
				}), s.a.createElement(V, {
					container: void 0,
					isOpen: e.isOpen,
					renderContentsHidden: !0,
					isOverlay: !1,
					tooltipId: `SettingDropdown--${e.id}`
				}, e.items.map((t, n) => s.a.createElement(f.b, {
					className: B.a.DropdownRow,
					displayText: e.displayItems ? e.displayItems[n] : t,
					isSelected: e.selected === t,
					onClick: () => e.onClick(t),
					key: "row--" + n,
					item: t
				}))), e.descriptions && s.a.createElement("div", {
					className: B.a.DescriptionsRow
				}, e.descriptions[e.items.indexOf(e.selected)] || e.displayItems && e.descriptions[e.displayItems.indexOf(e.selected)])))(e)))),
				xe = e => {
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
					return s.a.createElement(K, {
						disabled: t
					}, s.a.createElement(U, null, s.a.createElement("label", {
						htmlFor: i.id
					}, s.a.createElement(W, {
						className: i.labelClassname
					}, i.label)), s.a.createElement(H, null, i.subtext)), s.a.createElement("div", {
						className: B.a.Wrapper__LineBreak
					}), s.a.createElement(K, {
						last: n,
						indent: !0,
						disabled: t
					}, s.a.createElement(I, {
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
				Oe = e => s.a.createElement(K, {
					className: e.className,
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, s.a.createElement(U, null, s.a.createElement(W, null, e.label), s.a.createElement(H, null, e.subtext)), s.a.createElement(Z, null, e.children)),
				Ee = e => s.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, e.isCreateCommunity && s.a.createElement("span", {
					className: B.a.tag
				}, "r/"), s.a.createElement(g.a, {
					className: e.isCreateCommunity ? B.a.input : void 0,
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
					className: B.a.MultiLineInputSettingsBottomRow
				}, !e.hideCountdown && s.a.createElement(u.a, {
					maxChars: e.maxChars,
					text: e.value || ""
				}), !!e.actionLink && s.a.createElement("div", {
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
				return g
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "c", (function() {
				return x
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
				g = r.a.div("FormItem", o.a),
				h = r.a.h3("FormElementTitle", o.a),
				v = r.a.div("FormElementDescription", o.a),
				x = r.a.div("FormElementError", o.a),
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
				return g
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "g", (function() {
				return x
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
				g = r.a.wrapped(a.a, "CheckboxSelected", l.a),
				h = r.a.textarea("Textarea", l.a),
				v = r.a.label("StyledLabel", l.a),
				x = r.a.input("StyledFileInput", l.a)
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
			var g = Object(u.a)(e => {
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
				h = n("./src/reddit/controls/ErrorText/index.m.less"),
				v = n.n(h);
			class x extends d.a.Component {
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
						className: Object(l.a)(v.a.wrapper, t)
					}, d.a.createElement("span", {
						className: v.a.description,
						ref: this.spanRef
					}, e), a && d.a.createElement("span", {
						className: v.a.moreText,
						onClick: this.toggleModal
					}, o), i && d.a.createElement(g, {
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
					}, a.map((e, t) => d.a.createElement(x, {
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
				return f
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "d", (function() {
				return x
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
				g = e => {
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
				h = e => s.a.createElement("div", {
					className: Object(o.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", s.a.createElement(c.a, {
					className: u.a.plus
				}));
			var v;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(v || (v = {}));
			class x extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: v.ADD
						})
					}, this.updateValue = (e, t) => {
						const n = this.props.values.slice();
						n[t] = e.target.value, this.props.onChange(n)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							n = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: v.REMOVE,
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
					}, t && c && s.a.createElement(h, {
						onClick: this.addValue,
						text: a
					}), this.renderFields(), !t && c && s.a.createElement(h, {
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
				talks: []
			};
			t.a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.a:
						return {
							...e, talks: t.payload
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
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
					return !(Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.fe
					}) === r.zd)
				},
				a = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: r.ge
				}) === r.zd
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
					experimentName: r.Ub,
					experimentEligibilitySelector: o.e
				}) === r.fb.topOfFeedWithCTAs,
				c = e => (e => Object(s.c)(e, {
					experimentName: r.Ub,
					experimentEligibilitySelector: o.e
				}) === r.fb.topOfFeedNoCTAs)(e) || i(e),
				d = e => Object(s.c)(e, {
					experimentName: r.Ub,
					experimentEligibilitySelector: o.e
				}) === r.fb.floatInFeed,
				l = e => {
					const t = Object(s.c)(e, {
						experimentName: r.Ub,
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
				return g
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "c", (function() {
				return x
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
						const t = Object(a.U)(e, {
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
					const r = Object(a.Y)(e, {
						subredditName: n.name
					});
					return r && r.postIds && r.postIds.length ? r.postIds : u
				}),
				p = (e, t) => {
					const n = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return n ? Object(a.U)(e, {
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
				g = Object(r.a)((e, t) => {
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
				h = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				v = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				x = e => e.focusedVerticals.category,
				O = e => e.focusedVerticals.lastLoadedEnv,
				E = e => {
					const t = Object(i.P)(e),
						n = s.d.geoSubredditRecommendationDULoggedIn(e),
						r = s.d.geoSubredditRecommendationDULoggedOut(e);
					return t && n || !t && r
				}
		},
		"./src/redditGQL/operations/Frontpage.json": function(e) {
			e.exports = JSON.parse('{"id":"f7d0c97501a6"}')
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OnboardingModal.a459676a7a795be882d0.js.map