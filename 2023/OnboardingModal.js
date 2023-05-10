// https://www.redditstatic.com/desktop2x/OnboardingModal.8b63aa91400690407f73.js
// Retrieved at 5/10/2023, 11:10:03 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OnboardingModal"], {
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var n = Math.ceil,
				s = Math.max;
			e.exports = function(e, t, a, r) {
				for (var o = -1, i = s(n((t - e) / (a || 1)), 0), c = Array(i); i--;) c[r ? i : ++o] = e, e += a;
				return c
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseRange.js"),
				a = n("./node_modules/lodash/_isIterateeCall.js"),
				r = n("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, n, o) {
					return o && "number" != typeof o && a(t, n, o) && (n = o = void 0), t = r(t), void 0 === n ? (n = t, t = 0) : n = r(n), o = void 0 === o ? t < n ? 1 : -1 : r(o), s(t, n, o, e)
				}
			}
		},
		"./node_modules/lodash/range.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_createRange.js")();
			e.exports = s
		},
		"./node_modules/lodash/times.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseTimes.js"),
				a = n("./node_modules/lodash/_castFunction.js"),
				r = n("./node_modules/lodash/toInteger.js"),
				o = 9007199254740991,
				i = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = r(e)) < 1 || e > o) return [];
				var n = i,
					l = c(e, i);
				t = a(t), e -= i;
				for (var d = s(l, t); ++n < e;) t(n);
				return d
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var s = n("./node_modules/lodash/toString.js"),
				a = 0;
			e.exports = function(e) {
				var t = ++a;
				return s(e) + t
			}
		},
		"./node_modules/react-uid/dist/es2015/hooks.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				a = function() {
					var e = 1,
						t = new WeakMap,
						n = function(s, a) {
							return "number" == typeof s || "string" == typeof s ? a ? "idx-" + a : "val-" + s : t.has(s) ? "uid" + t.get(s) : (t.set(s, e++), n(s))
						};
					return n
				},
				r = (a(), function(e) {
					return void 0 === e && (e = ""), {
						value: 1,
						prefix: e,
						uid: a()
					}
				}),
				o = r(),
				i = s.createContext(r()),
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
				l = function() {
					return c()[0].uid
				},
				d = function() {
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
				a = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/GetAccountGender.json"),
				c = n("./src/redditGQL/operations/UpdateAccountGender.json");
			var l = n("./src/reddit/models/Toast/index.ts"),
				d = n("./src/reddit/actions/accountGender/constants.ts");
			const u = () => async (e, t, n) => {
				let {
					gqlContext: s
				} = n;
				var a, r;
				const c = await (e => Object(o.a)(e, {
					...i
				}))(s());
				if (!c.ok) return;
				const l = c.body,
					d = (e => {
						let {
							accountDefinedGender: t,
							accountGenderCategory: n
						} = e;
						return {
							definedGender: t,
							genderCategory: n
						}
					})(null === (r = null === (a = null == l ? void 0 : l.data) || void 0 === a ? void 0 : a.piiIdentity) || void 0 === r ? void 0 : r.gender);
				d && e(m(d))
			}, m = Object(a.a)(d.a), p = e => async (t, n, a) => {
				let {
					gqlContext: i
				} = a;
				const d = {
					customGender: e.definedGender,
					genderEnum: e.genderCategory
				};
				(await ((e, t) => Object(o.a)(e, {
					...c,
					variables: t
				}))(i(), {
					input: d
				})).ok ? (t(b(e)), t(Object(r.f)({
					kind: l.b.SuccessCommunity,
					text: s.fbt._("Changes saved", null, {
						hk: "2isjrZ"
					})
				}))) : (t(g()), t(Object(r.f)({
					kind: l.b.Error,
					text: s.fbt._("Changes failed to save", null, {
						hk: "XrtIq"
					})
				})))
			}, b = Object(a.a)(d.b), g = Object(a.a)(d.c)
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			})), n.d(t, "b", (function() {
				return w
			}));
			var s, a = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/performanceTimings/index.tsx"),
				o = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(s || (s = {}));
			var l, d = n("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(l || (l = {}));
			var m = n("./src/lib/objectSelector/index.ts"),
				p = n("./src/reddit/featureFlags/index.ts"),
				b = n("./src/reddit/selectors/posts.ts"),
				g = n("./src/reddit/selectors/subreddit.ts"),
				f = n("./src/reddit/selectors/user.ts");
			const h = [],
				O = (Object(m.a)((e, t) => {
					const n = O(e, t);
					if (!n) return h;
					const s = Object(g.bb)(e, {
						subredditName: n.name
					});
					return s && s.postIds && s.postIds.length ? s.postIds : h
				}), (e, t) => {
					const n = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return n ? Object(g.X)(e, {
						subredditId: n
					}) : null
				}),
				v = (e, t, n, s, a) => {
					const r = a.find(e => e <= t) || -1,
						o = a.find(e => e > t) || 1 / 0;
					return t !== o && t !== r && (!(r + n > t) && (!(t + n > o) && !((e, t, n) => {
						const s = n[t - 1],
							a = n[t],
							r = a && Object(b.F)(e, {
								postId: s
							}) || null,
							o = a && Object(b.F)(e, {
								postId: a
							}) || null;
						return r && r.isSponsored || o && o.isSponsored
					})(e, t, s)))
				},
				x = [3];
			Object(m.a)((e, t) => {
				let {
					existingDUPositions: n,
					listingProps: s
				} = t;
				const a = n.slice().sort();
				let r = -1;
				const o = Object(b.y)(e, {
						listingKey: s.listingKey
					}),
					i = [];
				return x.forEach(t => {
					let n = r + t;
					if (!(n >= o.length)) {
						for (; n < o.length && !v(e, n, t, o, a);) n += 1;
						n < o.length && (i.push(n), r = n)
					}
				}), i
			});
			var _ = n("./src/reddit/selectors/platform.ts");
			const E = Object(a.a)(o.f),
				C = Object(a.a)(o.d),
				j = Object(a.a)(o.g),
				k = Object(a.a)(o.c),
				S = Object(a.a)(o.e),
				y = (Object(a.a)(o.i), Object(a.a)(o.h), () => async (e, t, n) => {
					let {
						gqlContext: a
					} = n;
					const r = t(),
						o = (e => {
							return e.focusedVerticals.api.pending.focusedVerticalGqlPending
						})(r),
						l = (e => {
							const t = Object(f.R)(e),
								n = p.d.geoSubredditRecommendationDULoggedIn(e),
								s = p.d.geoSubredditRecommendationDULoggedOut(e);
							return t && n || !t && s
						})(r),
						m = Object(f.R)(r);
					if (o || !l) return;
					e(j());
					let b = !1;
					try {
						const t = m ? s.LoggedInGeo : s.LoggedOutGeo,
							n = await ((e, t, n) => Object(i.a)(e, {
								...c,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(a(), t);
						if (n.ok && n.body) {
							const {
								data: t
							} = n.body;
							if (N(t)) {
								if (T(t)) {
									e(k({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), b = !0
								} else if (I(t)) {
									const n = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: s,
											interactedSubreddit: a,
											category: r
										} = n.focusRecommendations[0],
										o = [s, a],
										i = Object(u.d)(o),
										c = Object(d.b)(o),
										l = Object(u.c)(s),
										m = {
											recommendedSubredditIds: [s.id],
											interactedSubredditIds: [a.id],
											subreddits: i,
											subredditsAboutInfo: c,
											subredditTopContent: l,
											category: r,
											lastLoadedEnv: "client"
										};
									e(E(m)), b = !0
								}
							} else b = !1
						}
					} catch (g) {
						b = !1
					}
					b || e(C({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}),
				N = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				},
				T = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations;
					return !(!n || 0 !== n.length)
				},
				I = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations,
						s = t && t.type;
					return !!(n && !T(e) && s === l.GEO && n[0] && n[0].recommendedSubreddit && n[0].interactedSubreddit)
				},
				w = () => async (e, t, n) => {
					var s, a;
					const o = t(),
						i = (e => e.focusedVerticals.lastLoadedEnv)(o);
					if ((e => {
							return e.focusedVerticals.api.error.focusedVerticalGqlError
						})(o) || null === i || "client" === i) {
						const n = null === (a = null === (s = Object(_.b)(t())) || void 0 === s ? void 0 : s.routeMatch) || void 0 === a ? void 0 : a.route.chunk,
							i = Object(f.S)(o);
						return Object(r.i)(() => e(y()), {
							name: "getFocusedVerticalsRequested",
							page: n,
							isLoggedIn: i
						})
					}
					if ("server" === i) return e(S({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/frontpage/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "frontpagePending", (function() {
				return Se
			})), n.d(t, "frontpageLoaded", (function() {
				return ye
			})), n.d(t, "frontpageFailed", (function() {
				return Ne
			})), n.d(t, "frontpageFirstLoaded", (function() {
				return Te
			})), n.d(t, "frontpageDataRequested", (function() {
				return Ie
			})), n.d(t, "frontpageRequestedHelper", (function() {
				return we
			})), n.d(t, "frontpageRequested", (function() {
				return Re
			})), n.d(t, "frontpageReloaded", (function() {
				return Fe
			})), n.d(t, "morePostsPending", (function() {
				return Ge
			})), n.d(t, "morePostsLoaded", (function() {
				return Ae
			})), n.d(t, "morePostsFailed", (function() {
				return Be
			})), n.d(t, "morePostsRequested", (function() {
				return De
			})), n.d(t, "refreshFeed", (function() {
				return Me
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/pick.js"),
				r = n.n(a),
				o = n("./src/lib/getParsedUserAgent/index.ts"),
				i = n("./src/reddit/actions/focusedVerticals/index.ts"),
				c = n("./src/lib/base64/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/env/index.ts"),
				u = n("./src/lib/makeGqlRequest/index.ts"),
				m = n("./src/lib/performanceTimings/index.tsx"),
				p = n("./src/lib/sentry/index.ts"),
				b = n("./src/reddit/constants/experiments.ts"),
				g = n("./src/reddit/constants/graphql.ts"),
				f = n("./src/reddit/helpers/getPostLimitForMobile/index.ts"),
				h = n("./src/reddit/models/Live/index.ts"),
				O = n("./src/reddit/models/Onboarding/index.ts"),
				v = n("./src/reddit/models/Post/index.ts"),
				x = n("./src/reddit/helpers/graphql/normalizeInterestTopicsFromGql/index.ts"),
				_ = n("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				E = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				C = n("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				j = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				k = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				S = n("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				y = n("./src/reddit/models/FeedElement/index.ts");

			function N(e) {
				return e.__typename === y.a.FreeNftFeedElement
			}
			const T = ["body", "url", "title"];

			function I(e) {
				if (e.__typename === y.a.MerchandisingUnit) {
					const t = e,
						n = T.filter(e => null == t[e]);
					return !n.length || (p.c.withScope(e => {
						e.setExtra("announcementId", t.id), p.c.captureException(`Fields [${n.join(", ")}] missing from announcement.`)
					}), !1)
				}
				return !1
			}

			function w(e, t) {
				return {
					feedElement: e,
					feedPosition: t
				}
			}
			var P = n("./src/reddit/models/NotificationInbox/index.ts"),
				R = n("./src/reddit/selectors/adsSignals.ts"),
				L = n("./src/reddit/selectors/experiments/econ/marketplace.ts"),
				F = n("./src/reddit/selectors/experiments/onboarding.ts"),
				G = n("./src/reddit/selectors/frontpage.ts"),
				A = n("./src/reddit/selectors/platform.ts"),
				B = n("./src/reddit/selectors/user.ts"),
				D = n("./src/reddit/selectors/userPrefs.ts"),
				M = n("./src/redditGQL/operations/Frontpage.json"),
				V = n("./src/lib/initializeClient/installReducer.ts"),
				q = n("./src/reddit/reducers/features/marketplace/index.ts"),
				W = n("./src/redditGQL/types.ts");
			Object(V.a)({
				features: {
					marketplace: q.a
				}
			});
			const U = (e, t) => {
					var n, s;
					const {
						after: a,
						dist: r,
						isMobile: o,
						layout: i,
						limit: l,
						sort: d,
						t: u,
						correlationId: m
					} = t, p = Object(F.k)(e), h = Object(B.bb)(e) || Object(B.S)(e), O = Object(G.b)(e), v = Object(A.q)(e), {
						adsSeenCount: x,
						totalPostsSeenCount: _,
						sessionStartTime: E
					} = Object(R.a)(e), C = {
						adContext: {
							layout: i ? i.toUpperCase() : g.a.Card,
							distance: r,
							clientSignalSessionData: {
								adsSeenCount: x,
								totalPostsSeenCount: _,
								sessionStartTime: E
							}
						},
						feedRankingContext: {
							servingId: m
						},
						forceGeopopular: !0,
						includeCommunityDUs: !1,
						includeInterestTopics: !!p && !Object(b.pg)(p),
						includeFeaturedAnnouncements: !0,
						includeLiveEvents: !0,
						includeIdentity: h && !(null === (s = null === (n = e.user.account) || void 0 === n ? void 0 : n.karma) || void 0 === s ? void 0 : s.total),
						includePostRecommendations: !0,
						includeFreeMarketplaceElement: Object(L.a)(e),
						includeSubredditQuestions: h,
						includeExposureEvents: !!t.isFirstLoad,
						recentPostIds: e.posts.recent
					};
					return O ? (C.sort = W.L.Best, C.feedRankingContext.variant = "lo_d2x_def_pop") : d && (C.sort = d.toUpperCase()), C.feedRankingContext.loggedOutAllowNsfw = Object(D.a)(e), u && (C.range = u.toUpperCase()), o ? C.pageSize = Object(f.a)(i) : l && (C.pageSize = l), v && v.ad && (C.forceAds = {
						ad: v.ad
					}), a && (C.after = Object(c.a)(a)), C
				},
				H = async (e, t, n, s) => {
					const a = Date.now(),
						r = await ((e, t) => Object(u.a)(e, {
							...M,
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
								featuredAnnouncements: a,
								recentPosts: r = [],
								liveBarContent: o
							} = e;
							var i, c;
							const l = [],
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
								T = e => {
									if (y.posts[e.id]) return e.id;
									const t = Object(E.f)(e);
									y.posts[t.id] = t;
									const {
										crosspostRoot: n
									} = e;
									n && n.type === v.a.Post && n.postInfo && T(n.postInfo), Object(v.o)(e).forEach(T);
									let s = t.id;
									if (Object(v.l)(e)) y.profiles[e.profile.id] || (y.profiles[e.profile.id] = Object(j.a)(e.profile));
									else if (Object(v.n)(e)) y.subreddits[e.subreddit.id] || (y.subreddits[e.subreddit.id] = Object(k.a)(e.subreddit)), y.postFlair[e.subreddit.id] || (y.postFlair[e.subreddit.id] = Object(_.a)(e.subreddit));
									else if (Object(v.h)(e)) {
										const n = Object(E.b)(e);
										if (!n) return null;
										s = n, y.posts[n] = {
											...t,
											id: n,
											permalink: `${t.permalink}?p=1&instanceId=${encodeURIComponent(n)}`
										}, y.posts[t.id] || (y.posts[t.id] = {
											...t,
											events: []
										}), y.postInstances[e.id] || (y.postInstances[e.id] = []), y.postInstances[e.id].push(n)
									}
									return s
								};
							for (const d of t) {
								const e = Object(k.a)(d);
								y.subreddits[e.id] = e, l.push(e.id)
							}
							for (const [_, {
									node: C
								}] of s.elements.edges.entries())
								if (Object(v.k)(C)) {
									const e = T(C);
									e && y.postIds.push(e)
								} else if (Object(v.m)(C)) {
								if (!C.recommendationContext || !C.postInfo) {
									const e = "Received empty PostRecommendation element when processing frontpage data.";
									Object(d.b)() || console.warn(e), p.c.captureMessage(e);
									continue
								}
								const {
									content: e,
									isContextHidden: t,
									subreddit: n,
									typeIdentifier: s
								} = C.recommendationContext;
								if (C.postInfo && (null == e ? void 0 : e.richtext)) {
									const a = T(C.postInfo);
									a && (y.postIds.push(a), y.posts[a].recommendationContext = {
										content: Object(E.d)(e.richtext),
										isContextHidden: t,
										source: {
											source: null == s ? void 0 : s.toLowerCase(),
											subredditId: null == n ? void 0 : n.id,
											subredditName: null == n ? void 0 : n.prefixedName
										}
									})
								}
							} else if (Object(h.c)(C) && !m) m = C;
							else if (Object(O.g)(C)) {
								const e = null === (i = null == C ? void 0 : C.interestTopicRecommendations) || void 0 === i ? void 0 : i.recommendationTopics;
								if (e) {
									const t = Object(x.a)(e);
									t.topics.length && (g = {
										interests: t,
										index: _
									})
								}
							} else if (N(C) && !b) b = {
								element: C,
								index: s.elements.edges.findIndex(e => e.node === C)
							};
							else if (Object(P.d)(C) && (null === (c = null == C ? void 0 : C.notifications) || void 0 === c ? void 0 : c.length)) f = {
								notifications: C.notifications,
								position: _,
								id: C.id
							};
							else if (I(C)) null != C.id && y.merchandisingUnitAnnouncements.push(w(C, _));
							else {
								const e = `Received unhandled element type when processing frontpage data: "${C.__typename}"`;
								Object(d.b)() || console.warn(e), p.c.captureMessage(e)
							}
							for (const d of r) {
								if (!d) continue;
								const e = T(d);
								e && u.push(e)
							}
							const R = y.postIds.length - 1,
								L = R >= 0 ? y.postIds[R] : "",
								F = s.elements.dist,
								G = s.elements.geoFilter;
							return {
								...y,
								account: n && Object(S.a)(n) || null,
								featuredLiveThread: m,
								marketplaceFeedElement: b,
								interestTopicRecommendations: g,
								announcements: a,
								notifications: f,
								liveBarContent: o,
								preferences: n && n.preferences && Object(C.a)(n.preferences, n.interactions) || null,
								...0 !== l.length && {
									trendingSubredditIds: l
								},
								...0 !== u.length && {
									recentPostIds: u
								},
								token: L,
								...null !== F && {
									dist: F
								},
								...null !== G && {
									geoFilter: G
								}
							}
						})(r.body.data);
						const t = Date.now(),
							c = [{
								duration: o - a,
								logKeyType: m.a.gqlFetchTiming
							}, {
								duration: t - e,
								logKeyType: m.a.gqlNormalizationTiming
							}];
						Object(m.h)({
							name: l.u.FRONTPAGE,
							isLoggedIn: n,
							metrics: c,
							statsdPathsForExperiments: s
						})
					} catch (c) {
						const e = "Error normalizing front page posts";
						Object(d.b)() || console.error(e, c), p.c.captureException(c)
					}
					return {
						...r,
						body: i
					}
				};
			var z = n("./src/lib/pageTitle/index.ts"),
				Q = n("./src/lib/pageTitle/helpers.ts"),
				K = n("./src/reddit/actions/login.ts"),
				Y = n("./src/reddit/actions/meta.ts"),
				J = n("./src/reddit/actions/platform.ts"),
				X = n("./src/reddit/actions/toaster.ts"),
				Z = n("./src/reddit/constants/history.ts"),
				$ = n("./src/reddit/constants/page.ts"),
				ee = n("./src/reddit/constants/parameters.ts"),
				te = n("./src/reddit/constants/postLayout.ts"),
				ne = n("./src/reddit/contexts/PageLayer/index.tsx"),
				se = n("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				ae = n("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				re = n("./src/reddit/models/Toast/index.ts"),
				oe = n("./src/reddit/selectors/experiments/chat.ts"),
				ie = n("./src/reddit/selectors/experiments/countrySites.ts"),
				ce = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				le = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				de = n("./src/reddit/selectors/runTimeEnvVars.ts"),
				ue = n("./src/lib/makeActionCreator/index.ts"),
				me = n("./src/lib/makeListingKey/index.ts"),
				pe = n("./src/reddit/actions/ads/index.ts"),
				be = n("./src/reddit/helpers/chooseVariant/index.ts"),
				ge = n("./src/reddit/helpers/counters/loggedOutOneFeed.ts"),
				fe = n("./src/reddit/helpers/trackers/feed.ts"),
				he = n("./src/reddit/models/LoggedOutOneFeed/index.ts"),
				Oe = n("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				ve = n("./src/reddit/actions/seo/linksModule.ts"),
				xe = n("./src/reddit/selectors/seo/linksModule.ts"),
				_e = n("./src/lib/sample/index.ts"),
				Ee = n("./src/reddit/actions/liveBar/index.ts"),
				Ce = n("./src/reddit/helpers/filterListingResponse/index.ts"),
				je = n("./src/reddit/actions/frontpage/constants.ts"),
				ke = n("./node_modules/uuid/dist/esm-browser/v4.js");
			const Se = Object(ue.a)(je.d),
				ye = Object(ue.a)(je.c),
				Ne = Object(ue.a)(je.a),
				Te = Object(ue.a)(je.b),
				Ie = (e, t) => async (n, a, r) => {
					var i, c, l, d, u, p, b, g;
					const f = a();
					if (f.listings.postOrder.api.pending[e]) return;
					const h = te.e[Object(ne.U)(f, {})];
					t.isFirstLoad = f.frontPageFirstLoaded, t.isMobile = Object(o.e)(f.meta.userAgent), t.recentPostIds = f.posts.recent, t.layout = h, t.useMockData = !!f.platform.currentPage && (!!f.platform.currentPage.queryParams.useMockData && Object(de.b)(f)), n(Se({
						key: e
					})), n(Te(!1)); {
						const e = f.platform.currentPage,
							n = e && e.url;
						n && (t.clickUrl = n)
					}
					const O = Object(ke.a)();
					t.correlationId = O;
					const v = null === (c = null === (i = Object(A.b)(f)) || void 0 === i ? void 0 : i.routeMatch) || void 0 === c ? void 0 : c.route.chunk,
						x = Object(B.S)(f),
						_ = await Object(m.i)(() => H(r.gqlContext(), U(a(), t), Object(B.bb)(f), t.statsdPathsForExperiments), {
							name: "fetchFrontpageData",
							isLoggedIn: x,
							page: v
						});
					n(Object(J.o)(_.status));
					const E = `error-${e}`;
					if (_.ok && _.body) {
						const s = _.body;
						n(ye({
							key: e,
							meta: f.meta,
							correlationId: O,
							...s
						})), n(X.g(E)), s.geoFilter && n(Object(Y.k)(s.geoFilter)), s.liveBarContent && n(Object(Ee.b)(Object(oe.a)(f) ? null !== (u = null === (d = null === (l = s.liveBarContent) || void 0 === l ? void 0 : l.items) || void 0 === d ? void 0 : d.edges.map(e => e.node)) && void 0 !== u ? u : [] : null === (p = s.liveBarContent.posts) || void 0 === p ? void 0 : p.map(e => ({
							post: e,
							__typename: "LiveBarTalk"
						})))), n(Object(pe.b)(Oe.a.FRONTPAGE));
						const r = null === (g = null === (b = Object(A.b)(f)) || void 0 === b ? void 0 : b.locationState) || void 0 === g ? void 0 : g[Z.b.FeedLoadReason];
						Object(fe.b)(t.isRefresh ? Z.a.UserRefresh : null != r ? r : Z.a.InitialLoad)(a())
					} else {
						n(Ne({
							error: _.error,
							key: e,
							..._.body
						})), n(X.f({
							id: E,
							kind: re.b.Error,
							text: s.fbt._("Sorry, we couldn't load posts for this page.", null, {
								hk: "36ypKx"
							}),
							buttonText: s.fbt._("Retry", null, {
								hk: "1XMjgA"
							}),
							buttonAction: Ie(e, t)
						})), Object(_e.a)(f, {
							rate: 14
						}) && Object(ge.a)(_.ok ? he.a.ParseError : he.a.XhrError, x ? he.b.LoggedIn : he.b.OneFeed);
						const r = _.error;
						Object(fe.a)(r ? `${_.status||"000"}: ${r.type}` : "000: UNKNOWN_ERROR")(a())
					}
				}, we = (e, t) => async (n, s) => {
					var a;
					const o = s(),
						i = Object(G.a)(o),
						{
							sort: c = i
						} = e.params,
						d = Object(me.a)($.b, c, e.queryParams),
						u = o.listings.postOrder.ids[d],
						m = o.listings.postOrder.api.error[d],
						p = o.listings.postOrder.api.pending[d],
						b = Object(ie.b)(o),
						g = ee.J in e.queryParams && e.queryParams[ee.J].toUpperCase() || "",
						f = g in l.pc && l.pc[g],
						h = z.e();
					if (p || u && !m && !t) return void(u && (n(J.n({
						title: b ? Object(Q.a)(o, h) : h
					})), (null === (a = o.listings.postOrder.correlationIds) || void 0 === a ? void 0 : a[d]) && n(J.p({
						correlationId: o.listings.postOrder.correlationIds[d]
					})), o.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						n(Object(pe.b)(Oe.a.FRONTPAGE))
					})));
					const O = Object(se.a)(o),
						v = Object(se.b)(O),
						x = [Object(se.c)(O)];
					await n(Ie(d, {
						...r()(e.queryParams, ee.q),
						...r()(e.queryParams, ee.p),
						limit: v,
						sort: c,
						statsdPathsForExperiments: x,
						t: Object(ae.a)(c, f)
					})), n(J.n({
						title: b ? Object(Q.a)(o, h) : h
					})), Object(be.c)(o, {
						experimentEligibilitySelector: be.a,
						experimentName: "redesign_aa"
					});
					const _ = Object(ce.a)(o, {});
					Object(ce.e)(_) && n(Object(K.openRegisterModal)())
				}, Pe = () => async (e, t) => {
					var n, s;
					const a = t();
					if (Object(xe.a)(a)) return;
					const r = null === (s = null === (n = Object(A.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === s ? void 0 : s.route.chunk,
						o = Object(B.S)(a);
					return Object(m.i)(() => e(Object(ve.d)()), {
						name: "frontpageLinksRequested",
						page: r,
						isLoggedIn: o
					})
				}, Re = (e, t) => async n => {
					await Promise.all([n(Object(i.b)()), n(we(e, t)), n(Pe())])
				}, Le = Object(ue.a)(je.e), Fe = e => async (t, n) => {
					const s = n(),
						a = s.platform.currentPage.routeMatch.match;
					Object(le.p)(s) || Object(le.v)(s) || (e || t(Le()), await t(Re(a, !0)))
				}, Ge = Object(ue.a)(je.h), Ae = Object(ue.a)(je.g), Be = Object(ue.a)(je.f), De = e => async (t, n, s) => {
					let {
						gqlContext: a
					} = s;
					const i = n(),
						c = Object(G.a)(i),
						{
							sort: d = c
						} = e,
						u = i.platform.currentPage ? i.platform.currentPage.queryParams : {},
						m = Object(me.a)($.b, d, u),
						p = i.listings.postOrder.loadMore[m],
						b = u[ee.J] ? u[ee.J].toUpperCase() : "",
						g = b in l.pc && l.pc[b];
					if (p) {
						const e = i.listings.postOrder.api.pending[m],
							s = i.listings.postOrder.fetchedTokens,
							c = !(!s[m] || !s[m][p.token]);
						if (!e && !c) {
							t(Ge({
								key: m,
								fetchedToken: p.token
							}));
							const e = !!i.platform.currentPage && !!i.platform.currentPage.queryParams.useMockData,
								s = Object(se.a)(i),
								c = te.a,
								l = [Object(se.c)(s)],
								b = {
									after: p.token,
									dist: p.dist,
									...r()(u, ee.q),
									isMobile: Object(o.e)(i.meta.userAgent),
									limit: c,
									sort: d,
									t: Object(ae.a)(d, g),
									layout: te.e[Object(ne.U)(i, {})],
									useMockData: e
								}; {
								const e = i.platform.lastPage,
									t = e && e.url;
								t && (b.clickUrl = t)
							}
							b.correlationId = i.listings.postOrder.correlationIds[m];
							const f = () => H(a(), U(i, b), Object(B.bb)(i), l),
								h = await f(),
								O = {
									...h.body,
									...Object(Ce.a)(i, m, h.body)
								};
							if (h.ok) t(Ae({
								key: m,
								fetchedToken: p.token,
								meta: i.meta,
								...O
							})), Object(fe.b)(Z.a.NextPageLoad)(n());
							else {
								t(Be({
									key: m,
									error: h.error,
									fetchedToken: p.token,
									...O
								}));
								const e = h.error;
								Object(fe.a)(e ? `${h.status||"000"}: ${e.type}` : "000: UNKNOWN_ERROR")(n())
							}
						}
					}
				}, Me = e => async (t, n) => {
					const s = n(),
						a = Object(G.a)(s),
						{
							sort: r = a
						} = e,
						o = s.platform.currentPage ? s.platform.currentPage.queryParams : {},
						i = Object(me.a)($.b, r, o),
						c = o[ee.J] ? o[ee.J].toUpperCase() : "",
						d = c in l.pc && l.pc[c],
						u = Object(se.a)(s),
						m = Object(se.b)(u);
					await t(Ie(i, {
						limit: m,
						sort: r,
						t: Object(ae.a)(r, d),
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
				a = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/reducers/features/liveBar/index.ts");
			const o = "LIVEBAR__SET_LIVEBAR_POSTS";
			Object(s.a)({
				features: {
					liveBar: r.a
				}
			});
			const i = Object(a.a)(o)
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
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				i = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				c = n.n(i);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => a.a.createElement(o.b, {
				className: Object(r.a)(e.className, c.a.container, e.text.length >= e.maxChars ? c.a.mOverflow : null)
			}, l._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [l._plural(e.maxChars - e.text.length, "characters")], {
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
		"./src/reddit/components/Onboarding/FirstPost/FirstPost.m.less": function(e, t, n) {
			e.exports = {
				firstPostBuilder: "cx8SmayTuXGtaRlHUaHvG",
				formTitle: "_3HXvEhpReiFi_hBOzYzkVC",
				simplePostForm: "_2eEU5EzTiTIm1dOg7TObKP",
				simplePostForm__no_margin: "_1QE11nt4w2nJrzrXs7dE11",
				simplePostFormNoMargin: "_1QE11nt4w2nJrzrXs7dE11",
				formTextField: "_2-E6v2Y3P2G-R1n9QnUelP",
				formTextField__dark: "qoNwQz6BgVUcf-rZHftWp",
				formTextFieldDark: "qoNwQz6BgVUcf-rZHftWp",
				bodyTextarea: "_1ieN_Trvk8fiDVWHzsRV3M",
				titleTextarea: "_3ldjaKipP5LxcZId3g1ZI-",
				randomizerContent: "_3DPix1aXj6bzbvEgLPhZvU",
				randomizeButton: "_1NZFSiQ-i8LeKcAWEYhy7p",
				icon: "_2wpdpH2WO_Wneo3ZvmwQqR",
				interactivePostBuilder: "_2mQA_w2X8N-2HL97xB7WoH",
				interactivePostBuilderUnit: "_2dK2AhBOu9-hfZcAmw_XfQ",
				postPredicatesGroup__prompt: "BZ8mJoq_mI3j2eAEs2E-C",
				postPredicatesGroupPrompt: "BZ8mJoq_mI3j2eAEs2E-C",
				postPredicatesGroup: "_3pfsYV1ttbghaCSfAZmhcT",
				postPredicatesGroup__dark: "GcKqDnPTKlo5BYr77RQO4",
				postPredicatesGroupDark: "GcKqDnPTKlo5BYr77RQO4",
				postPredicatesGroupScroll: "_2xWV4W_mntt0IXHHrjcAMI",
				postPredicate: "_3yo21Jp6ZsoDFZ-gv_op80",
				selectedPredicate: "_32PXioxE3EddYb0J59vP71",
				postPredicate__dark: "_3sD-zbIB5qQN3ExZqh2FVw",
				postPredicateDark: "_3sD-zbIB5qQN3ExZqh2FVw",
				postPredicatesGroupNav: "_1biRquPujofKtuXhRVYAve",
				postPredicatesGroupNav__next: "_3NqYoKGVGkEj52JCvhVMI9",
				postPredicatesGroupNavNext: "_3NqYoKGVGkEj52JCvhVMI9",
				postPredicatesGroupNav__prev: "_2gA8A9NAP2Dp8sgQ5DDJ6w",
				postPredicatesGroupNavPrev: "_2gA8A9NAP2Dp8sgQ5DDJ6w",
				navIcon: "_3jSaW8DzYeOn3VB_yZV1t5",
				postPredicatesGroupNav__dark: "_3LHsziJG8uDCR6bvtDb_St",
				postPredicatesGroupNavDark: "_3LHsziJG8uDCR6bvtDb_St",
				continueButtonWrapper: "_3Q66S_XV5EDqzvOFeM25hN",
				continueButton: "_2LIsiAFdK2JOsQqRd49hFC",
				firstPostConfirmation: "tafrjxnXjbRijHqY7kCCf",
				iconText: "_2osb8I-dqAHFLjCVSRbBbQ",
				subtitle: "pumPS9xxNZxE5-2R09eCt",
				title: "V04KP2agwql1-ZEUfvDPb",
				snooThumbsUp: "_3COfiYmk5fDE8V1HDpQxto"
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
				a = n.n(s),
				r = n("./src/reddit/controls/Button/index.tsx"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./node_modules/polished/dist/polished.es.js"),
				c = n("./src/reddit/components/Onboarding/Interests/InterestPicker.m.less"),
				l = n.n(c);
			const d = (e, t, n) => {
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
				return a.a.createElement(r.t, {
					className: Object(o.a)(l.a.InterestButton, {
						[l.a.Selected]: n
					}),
					kind: r.b.Button,
					onClick: i,
					style: d(t, n, s)
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
				moreLanguages: "_34OOuEVRtCgQHxTw6Bm_SM",
				PromptContainer: "_2NBWDPVfLgJchMUSilY9hq",
				promptContainer: "_2NBWDPVfLgJchMUSilY9hq",
				PromptClose: "_1D3-VzG8d-pAsDFC2aDEqX",
				promptClose: "_1D3-VzG8d-pAsDFC2aDEqX",
				Close: "Z2DAjXDKT-rjUoOgPeR9b",
				close: "Z2DAjXDKT-rjUoOgPeR9b",
				PromptTitle: "_6pr2vYjViLknuzg7J_4II",
				promptTitle: "_6pr2vYjViLknuzg7J_4II",
				PromptSubtitle: "_1j479fpdJDH2JNDpssXW8Z",
				promptSubtitle: "_1j479fpdJDH2JNDpssXW8Z",
				PromptRow: "piSYz03CLXLD5jdQwPjUy",
				promptRow: "piSYz03CLXLD5jdQwPjUy",
				Dismiss: "Fssd937Pdx1KOrc1lhBS5",
				dismiss: "Fssd937Pdx1KOrc1lhBS5"
			}
		},
		"./src/reddit/components/Onboarding/Modal.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/noop.js"),
				a = n.n(s),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/constants/index.ts"),
				m = n("./src/reddit/actions/changeUsername.ts"),
				p = n("./src/reddit/actions/frontpage/index.ts"),
				b = n("./src/reddit/actions/modal.ts"),
				g = n("./src/reddit/actions/survey/index.ts"),
				f = n("./src/reddit/actions/toaster.ts"),
				h = n("./node_modules/fbt/lib/FbtPublic.js"),
				O = n("./src/lib/sentry/index.ts"),
				v = n("./src/reddit/actions/snoovatar.ts"),
				x = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				_ = n("./src/reddit/hooks/useTracking.ts"),
				E = n("./src/reddit/models/Toast/index.ts"),
				C = n("./src/reddit/selectors/avatar.ts");
			var j = () => {
					const e = Object(i.e)(C.a),
						t = Object(i.d)(),
						n = Object(_.a)(),
						s = Object(i.e)(C.c);
					Object(r.useEffect)(() => {
						(null == e ? void 0 : e.csrf_token) || t(Object(v.c)())
					}, []);
					const a = Object(r.useCallback)(async () => {
							t(Object(v.d)())
						}, [t]),
						o = Object(r.useCallback)(async () => {
							if (n(Object(x.a)("save_and_continue")), e && s) {
								n(Object(x.f)("onboarding"));
								try {
									return await t(Object(v.e)(s.accessoryIds, {}, {
										set_avatar_to_profile: !0,
										source: "web_onboarding"
									})), !0
								} catch (a) {
									O.c.captureException(a)
								}
							}
							return t(Object(f.f)({
								kind: E.b.Error,
								text: h.fbt._("Unable to save avatar, please try again.", null, {
									hk: "17FzD3"
								})
							})), !1
						}, [s, e, t, n]);
					return {
						avatarImage: (null == s ? void 0 : s.image) || null,
						fetchRandomAvatar: a,
						saveAvatar: o
					}
				},
				k = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				S = n("./src/reddit/components/Onboarding/Celebration.m.less"),
				y = n.n(S);
			const {
				fbt: N
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var T = () => o.a.createElement("div", {
					className: y.a.CelebrationBg
				}, o.a.createElement("div", {
					className: y.a.CelebrationTitle
				}, N._("We're happy you're here!", null, {
					hk: "1YMdHn"
				})), o.a.createElement("div", {
					className: y.a.CelebrationSubTitle
				}, N._("Your home feed is being created now…", null, {
					hk: "Onr1V"
				})), o.a.createElement("div", null, o.a.createElement(k.a, {
					className: y.a.LoadingSpinner,
					sizePx: 16
				}))),
				I = n("./src/reddit/components/Settings/GenderCollection/index.tsx"),
				w = n("./src/reddit/models/Gender/index.ts"),
				P = n("./src/reddit/components/Onboarding/GenderCollection/GenderCollection.m.less"),
				R = n.n(P),
				L = n("./src/reddit/constants/keycodes.ts"),
				F = n("./src/reddit/helpers/trackers/onboarding.ts");
			const G = {
					definedGender: null,
					genderCategory: w.a.OPT_OUT
				},
				A = e => e === w.a.USER_DEFINED;
			var B = e => {
					let {
						autoProgressGenderCollection: t,
						isFlowImprovement: n,
						selectedGenderOption: s,
						setSelectedGenderOption: a
					} = e;
					const i = Object(_.a)(),
						c = Object(I.b)();
					n && c.splice(3, 1);
					const l = Object(r.useRef)(null),
						d = Object(r.useRef)([]),
						[m, p] = Object(r.useState)((null == s ? void 0 : s.definedGender) || "");
					Object(r.useEffect)(() => {
						i(Object(F.q)())
					}, [i]);
					const b = e => {
							var t;
							let n = null;
							return A(e) && (n = (null === (t = l.current) || void 0 === t ? void 0 : t.value) || "", p(n)), {
								definedGender: n,
								genderCategory: e
							}
						},
						g = Object(r.useCallback)(e => {
							var t;
							i(Object(F.n)()), a(b(e)), A(e) && (null === (t = l.current) || void 0 === t || t.focus())
						}, [i, a]),
						f = Object(r.useCallback)(e => {
							g(e.value), e.focus()
						}, [g]),
						h = Object(r.useCallback)(e => {
							if (!s || !A(s.genderCategory)) {
								const t = d.current[e];
								t && g(t.value)
							}
						}, [g, s]),
						O = (e, n) => {
							const r = A(e.key);
							return o.a.createElement("label", {
								key: e.key
							}, o.a.createElement("input", {
								checked: e.key === (null == s ? void 0 : s.genderCategory),
								className: R.a.genderRadioButton,
								"data-testid": e.key,
								id: `genderCollectionOption${n+1}`,
								name: "genderCollection",
								onChange: () => g(e.key),
								onClick: n => n.screenX && n.screenY ? t(b(e.key)) : null,
								onKeyDown: n => n.keyCode === L.a.Enter ? t(b(e.key)) : null,
								ref: e => d.current[n] = e,
								type: "radio",
								value: e.key
							}), r ? o.a.createElement("input", {
								className: R.a.genderUserDefinedInput,
								"data-testid": `${e.key}-input`,
								onChange: () => a(b(e.key)),
								onClick: () => h(n),
								onKeyDown: e => ((e, t) => {
									var n;
									const s = e.target;
									if (s) {
										if (u.i[e.key] && !s.value) {
											const n = d.current.length - 1;
											let s;
											(s = e.keyCode === u.i.ArrowUp || e.keyCode === u.i.ArrowLeft ? d.current[t ? t - 1 : n] : d.current[t === n ? 0 : t + 1]) && f(s)
										}
										e.keyCode === u.M && (null === (n = d.current[t]) || void 0 === n || n.focus())
									}
								})(e, n),
								placeholder: e.displayText,
								ref: l,
								tabIndex: -1,
								value: m
							}) : o.a.createElement("span", {
								className: `${R.a.genderOption} ${R.a.genderOptionImproved}`
							}, e.displayText))
						};
					return o.a.createElement("div", null, c.map((e, t) => O(e, t)))
				},
				D = n("./src/reddit/controls/Button/index.tsx"),
				M = n("./src/reddit/icons/fonts/index.tsx"),
				V = n("./src/reddit/components/Onboarding/AvatarPicker/AvatarPicker.m.less"),
				q = n.n(V);
			const {
				fbt: W
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var U = e => {
					let {
						avatarImage: t,
						fetchRandomAvatar: n
					} = e;
					const s = Object(_.a)();
					Object(r.useEffect)(() => {
						s(Object(x.p)())
					}, [s]);
					const a = Object(r.useCallback)(() => {
						s(Object(x.a)("randomize")), n()
					}, [s, n]);
					return o.a.createElement("div", {
						className: q.a.avatarPicker
					}, o.a.createElement("div", {
						className: q.a.dynamicSizeWrapper
					}, t ? o.a.createElement("img", {
						"data-testid": "preview-image",
						src: `data:image/png;base64,${encodeURIComponent(t)}`,
						className: q.a.previewImage
					}) : o.a.createElement(k.a, {
						className: q.a.loader
					}), o.a.createElement("div", {
						className: q.a.avatarSpacing
					})), o.a.createElement(D.t, {
						className: q.a.randomizeButton,
						priority: D.c.Secondary,
						onClick: a,
						Icon: Object(M.b)("random"),
						iconClassName: q.a.icon
					}, W._("Randomize", null, {
						hk: "uwAa8"
					})))
				},
				H = n("./node_modules/lodash/times.js"),
				z = n.n(H);
			const Q = function(e) {
				return (/^(r\/)([^\s]+)/g.exec(e) || [])[2] || ""
			};
			var K = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				Y = n.n(K);
			const J = e => o.a.createElement("div", {
				className: Object(d.a)(Y.a.placeholderWrapper, e.fullWidth && Y.a.fullWidth, e.large && Y.a.large)
			}, o.a.createElement("span", {
				className: Y.a.subredditIconLoading
			}), o.a.createElement("span", {
				className: Y.a.subredditNameLoading
			}));
			var X = e => o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 18 13"
				}, o.a.createElement("path", {
					fill: "inherit",
					d: "M6.50011 12.583C6.40482 12.5833 6.31041 12.5648 6.22235 12.5284C6.13429 12.492 6.05433 12.4385 5.98711 12.371L0.558105 6.94198L1.44211 6.05798L6.50011 11.116L17.0581 0.557983L17.9421 1.44198L7.01211 12.371C6.94493 12.4383 6.86512 12.4917 6.77725 12.5281C6.68939 12.5644 6.5952 12.5831 6.50011 12.583Z"
				})),
				Z = n("./src/reddit/icons/svgs/CommunityDefault/filled.tsx");
			var $ = e => o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 18 18"
				}, o.a.createElement("path", {
					fill: "#4B6066",
					d: "M18 8.38H9.63V0H8.38V8.38H0V9.63H8.38V18H9.63V9.63H18V8.38Z"
				})),
				ee = n("./src/reddit/selectors/user.ts"),
				te = n("./src/reddit/components/Onboarding/index.m.less"),
				ne = n.n(te),
				se = n("./src/reddit/components/TrackEnterExitViewport/index.tsx"),
				ae = n("./src/reddit/components/Onboarding/CommunityPicker.m.less"),
				re = n.n(ae);
			const {
				fbt: oe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ie = () => oe._("Recommended for you", null, {
				hk: "28LTkA"
			}), ce = e => {
				let {
					community: t,
					schemeName: n,
					selected: s,
					toggleAll: a,
					toggleSelection: i,
					viewportRoot: c,
					setViewedCommunities: l,
					viewedCommunities: d
				} = e;
				const {
					communities: u
				} = t, [m, p] = Object(r.useState)(null);
				Object(r.useEffect)(() => {
					p(!u.find(e => !s[e.id]))
				}, [u, s]);
				const b = Object(r.useCallback)(() => {
					a(t.topicId, !m), p(!m)
				}, [t.topicId, m, a]);
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: re.a.RecommendedHeader
				}, o.a.createElement("span", {
					className: re.a.SectionTitle
				}, t.topicTitle), o.a.createElement("button", {
					onClick: b,
					className: re.a.SelectAllLink
				}, m && oe._("Deselect All", null, {
					hk: "4u0XYF"
				}), !m && null !== m && oe._("Select All", null, {
					hk: "3izh21"
				}))), o.a.createElement(o.a.Fragment, null, o.a.createElement(de, {
					communities: t.communities,
					schemeName: n,
					selected: s,
					toggleSelection: i,
					topicId: t.topicId,
					topicName: t.topicName,
					topicTitle: t.topicTitle,
					viewportRoot: c,
					setViewedCommunities: l,
					viewedCommunities: d
				})))
			}, le = () => o.a.createElement(o.a.Fragment, null, z()(5, e => o.a.createElement(J, {
				key: e,
				fullWidth: !0,
				large: !0
			}))), de = e => {
				let {
					communities: t,
					schemeName: n,
					selected: s,
					topicId: a,
					topicName: c,
					topicTitle: l,
					toggleSelection: d,
					viewportRoot: u,
					setViewedCommunities: m,
					viewedCommunities: p
				} = e;
				const b = Object(_.a)(),
					[g, f] = Object(r.useState)(!1),
					h = Object(i.e)(ee.fb),
					O = t.length > 4,
					v = t.slice(0, g ? void 0 : 4),
					x = "recommended" === a ? "" : l,
					E = Object(r.useCallback)(() => {
						f(!0), b(Object(F.k)(l, a))
					}, [b, l, a]);
				return o.a.createElement(o.a.Fragment, null, v.map(e => {
					const t = p.has(e.id);
					return o.a.createElement(se.a, {
						key: e.id,
						fireOnce: !0,
						viewportRoot: u,
						threshold: 1,
						rootMargin: "0px 0px -85px 0px",
						onEnter: t ? void 0 : Object(F.m)(l, Q(e.prefixedName), a, e.id, n),
						onEnterHandler: t => {
							m(new Set(p).add(e.id))
						}
					}, o.a.createElement(ue, {
						communityId: e.id,
						description: e.description,
						icon: e.icon,
						isNightMode: h,
						isSelected: s[e.id],
						key: e.id,
						language: e.language,
						prefixedName: e.prefixedName,
						schemeName: n,
						toggleSelection: d,
						topicId: a,
						topicName: c,
						topicTitle: l
					}))
				}), O && !g && o.a.createElement(pe, {
					text: x,
					showMore: E
				}))
			}, ue = e => {
				let {
					communityId: t,
					description: n,
					icon: s,
					isNightMode: a,
					isSelected: i,
					language: c,
					prefixedName: l,
					schemeName: u,
					toggleSelection: m,
					topicId: p,
					topicName: b,
					topicTitle: g
				} = e;
				const f = Object(_.a)(),
					h = Object(r.useCallback)(() => {
						f(Object(F.i)(!i, g, p, Q(l), t, u)), m(t)
					}, [t, i, l, u, f, m, g, p]);
				return o.a.createElement("div", {
					className: Object(d.a)(re.a.CommunityRow, {
						[re.a.Selected]: i && !a,
						[re.a.NightModeSelected]: i && a
					}),
					onClick: h
				}, o.a.createElement("div", {
					className: re.a.IconSection
				}, s && o.a.createElement("img", {
					className: re.a.IconWrapper,
					src: s
				}), !s && o.a.createElement(Z.a, {
					className: re.a.CommunityNoIcon
				})), o.a.createElement("div", {
					className: re.a.TextSection
				}, o.a.createElement("div", {
					className: re.a.Info
				}, l, o.a.createElement(me, {
					language: c
				})), o.a.createElement("div", {
					className: re.a.Description
				}, n)), o.a.createElement("div", {
					className: re.a.ButtonSection
				}, i && o.a.createElement(X, {
					className: re.a.SelectedIcon
				}), !i && o.a.createElement($, {
					className: re.a.SelectedIcon
				})))
			}, me = e => {
				let {
					language: t
				} = e;
				if (!t) return null;
				const n = t.substring(0, 2).toUpperCase();
				return "EN" === n ? null : o.a.createElement("div", {
					className: re.a.LangIndicator
				}, n)
			}, pe = e => {
				let {
					showMore: t,
					text: n
				} = e;
				return o.a.createElement("div", {
					className: re.a.MoreRecommendations
				}, o.a.createElement("button", {
					onClick: t
				}, oe._("Show more", null, {
					hk: "3uUa1R"
				})))
			};
			var be = e => {
					let {
						communitiesByTopic: t,
						loadingCommunities: n,
						recommendedCommunities: s,
						selected: a,
						schemeName: i,
						toggleSelection: c,
						toggleAll: l,
						viewportRoot: d
					} = e;
					const u = Object(_.a)();
					Object(r.useEffect)(() => {
						u(Object(F.l)())
					}, [u]);
					const [m, p] = Object(r.useState)(new Set);
					return o.a.createElement("div", {
						className: re.a.CommunityListWrapper
					}, o.a.createElement("div", {
						className: re.a.headerBarImproved
					}, o.a.createElement("div", {
						className: ne.a.title
					}, oe._("Communities", null, {
						hk: "Gdzfs"
					})), o.a.createElement("div", {
						className: ne.a.subtitle
					}, oe._("Select a few to get started. You can update them later.", null, {
						hk: "2GcuTd"
					}))), s.length > 0 && o.a.createElement(ce, {
						community: {
							communities: s,
							topicId: "recommended",
							topicTitle: ie(),
							topicName: "recommended_for_you"
						},
						schemeName: i,
						selected: a,
						toggleAll: l,
						toggleSelection: c,
						setViewedCommunities: p,
						viewedCommunities: m,
						viewportRoot: d
					}), (!!t.length || n) && o.a.createElement(o.a.Fragment, null, n && o.a.createElement(le, null), t.map(e => o.a.createElement(ce, {
						key: e.topicId,
						community: e,
						schemeName: i,
						selected: a,
						toggleAll: l,
						toggleSelection: c,
						setViewedCommunities: p,
						viewedCommunities: m,
						viewportRoot: d
					}))))
				},
				ge = n("./src/reddit/components/Onboarding/Interests/InterestPill.tsx"),
				fe = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				he = n("./src/reddit/components/Onboarding/Interests/InterestPicker.m.less"),
				Oe = n.n(he);
			const {
				fbt: ve
			} = n("./node_modules/fbt/lib/FbtPublic.js"), xe = e => {
				let {
					interests: t,
					schemeName: n,
					selected: s,
					toggleSelection: a,
					topicColor: i = null,
					viewportRoot: c = null,
					setViewedInterests: l,
					viewedInterests: d
				} = e;
				const u = Object(_.a)(),
					m = Object(r.useCallback)((e, t, s, r, o) => {
						u(Object(F.s)(!t, !s, r, o, n)), a(e)
					}, [n, u, a]);
				return o.a.createElement(o.a.Fragment, null, t.map((e, t) => {
					var r;
					const {
						id: u,
						topic: p
					} = e, b = !!s[u], g = null !== i, f = d.has(u);
					return o.a.createElement(o.a.Fragment, {
						key: e.id
					}, o.a.createElement(se.a, {
						fireOnce: !0,
						viewportRoot: c,
						threshold: 1,
						rootMargin: "0px 0px -85px 0px",
						onEnter: f ? void 0 : Object(F.r)(!g, p, u, n),
						onEnterHandler: e => {
							f || l(new Set(d).add(u))
						}
					}, o.a.createElement(ge.a, {
						colorIndex: g && null != i ? i : t,
						isSelected: b,
						isSubtopic: g,
						key: u,
						onClickHandler: () => m(e, b, g, p, u),
						topic: p
					}), b && !!(null === (r = e.children) || void 0 === r ? void 0 : r.length) && o.a.createElement(xe, {
						interests: e.children,
						schemeName: n,
						selected: s,
						toggleSelection: a,
						topicColor: t,
						setViewedInterests: l,
						viewedInterests: d
					})))
				}))
			}, _e = () => {
				const e = Object(fe.b)({
					isLoading: !0
				});
				return o.a.createElement(o.a.Fragment, null, z()(30, t => o.a.createElement("div", {
					key: t,
					className: Object(d.a)(Oe.a.Placeholder, e)
				})))
			};
			var Ee = e => {
					let {
						interests: t,
						schemeName: n,
						loadingInterests: s,
						selected: a,
						toggleSelection: i,
						viewportRoot: c
					} = e;
					const l = Object(_.a)();
					Object(r.useEffect)(() => {
						l(Object(F.v)())
					}, [l]);
					const [d, u] = Object(r.useState)(new Set);
					return o.a.createElement("div", {
						className: Oe.a.InterestListButtons
					}, o.a.createElement("div", {
						className: Oe.a.headerBarImproved
					}, o.a.createElement("div", {
						className: ne.a.title
					}, ve._("Interests", null, {
						hk: "3XVu2d"
					})), o.a.createElement("div", {
						className: ne.a.subtitle
					}, ve._("Pick 3 or more things you’d like to see in your home feed", null, {
						hk: "3TEuhg"
					}))), s ? o.a.createElement(_e, null) : o.a.createElement(xe, {
						interests: t,
						schemeName: n,
						selected: a,
						toggleSelection: i,
						viewportRoot: c,
						setViewedInterests: u,
						viewedInterests: d
					}))
				},
				Ce = n("./src/reddit/components/Onboarding/LanguageCollection/LanguageCollection.m.less"),
				je = n.n(Ce),
				ke = n("./src/reddit/constants/experiments.ts"),
				Se = n("./src/reddit/selectors/experiments/onboarding.ts"),
				ye = n("./src/reddit/selectors/meta.ts");
			const {
				fbt: Ne
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Te = e => {
				let {
					topTwoVariant: t
				} = e;
				const n = t ? 2 : 10;
				return o.a.createElement(o.a.Fragment, null, z()(n, e => o.a.createElement(J, {
					key: "loading-" + e,
					fullWidth: !0,
					large: !0
				})))
			}, Ie = e => {
				let {
					country: t,
					isAtLimit: n,
					isLanguageCollectionSettings: s,
					isNightMode: a,
					isSelected: r,
					isToastVisible: i,
					languageSelection: c,
					setIsToastVisible: l,
					setToastText: u,
					toggleLanguageSelection: m
				} = e;
				const p = Object(_.a)();
				return o.a.createElement("div", {
					className: Object(d.a)(je.a.LanguageRow, {
						[je.a.Selected]: r && !a,
						[je.a.NightModeSelected]: r && a
					}),
					onClick: () => {
						n && !r ? (u(Ne._("You’ve already selected the maximum of {amount} languages", [Ne._param("amount", 10)], {
							hk: "274yT2"
						})), i || (l(!0), setTimeout(() => {
							u(null), l(!1)
						}, 3e3))) : (p(s ? Object(F.F)(t, c.isoCode, !r) : Object(F.w)(t, c.isoCode, !r)), m(c.isoCode))
					},
					"data-testid": c.isoCode
				}, o.a.createElement("div", {
					className: je.a.FrontFlex
				}), o.a.createElement("div", {
					className: je.a.TextSection
				}, c.translatedDisplayName), o.a.createElement("div", {
					className: je.a.ButtonSection
				}, r && o.a.createElement(X, {
					className: je.a.SelectedIcon
				})))
			};
			var we = e => {
					let {
						languages: t,
						loadingLanguages: n,
						isLanguageCollectionSettings: s,
						selectedLanguages: a,
						setToastText: c,
						setShowAllLanguage: l,
						showAllLanguage: d,
						toggleLanguageSelection: u
					} = e;
					const [m, p] = Object(r.useState)(!1), b = Object(i.e)(ee.fb);
					let g = Object(i.e)(Se.i) === ke.hd.TopTwo;
					const f = Object(i.e)(Se.h) === ke.hd.TopTwo;
					g = g || f;
					const h = Object(i.e)(ye.b),
						O = Object(_.a)();
					Object(r.useEffect)(() => {
						O(s ? Object(F.H)(h) : Object(F.z)(h))
					}, [h, s, O]);
					const v = t.sortedLanguages.slice(0, s || !g || g && d ? void 0 : 2),
						x = Ne._("Update your settings to make it easier to discover content in up to {amount} languages", [Ne._param("amount", 10)], {
							hk: "11AxnO"
						});
					return o.a.createElement("div", {
						className: je.a.LanguageListButtons
					}, o.a.createElement("div", {
						className: je.a.HeaderBarImproved
					}, o.a.createElement("div", {
						className: ne.a.title
					}, Ne._("See content in more languages", null, {
						hk: "35s0TM"
					})), o.a.createElement("div", {
						className: ne.a.subtitle
					}, x)), n ? o.a.createElement(Te, {
						topTwoVariant: g
					}) : o.a.createElement("div", null, v.map((e, t) => o.a.createElement(Ie, {
						country: h,
						isAtLimit: 10 === Object.keys(a).length,
						isLanguageCollectionSettings: s,
						isNightMode: b,
						isSelected: a[e.isoCode],
						isToastVisible: m,
						key: "onboarding-lang-" + t,
						languageSelection: e,
						setIsToastVisible: p,
						setToastText: c,
						toggleLanguageSelection: u
					})), !s && g && !d && o.a.createElement("div", {
						className: je.a.MoreLanguages
					}, o.a.createElement("button", {
						onClick: () => {
							l(!0)
						}
					}, Ne._("Show more", null, {
						hk: "1zOy4z"
					})))))
				},
				Pe = n("./src/reddit/actions/profile/index.ts"),
				Re = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Le = n("./src/reddit/constants/tracking.ts"),
				Fe = n("./src/reddit/selectors/experiments/index.ts"),
				Ge = n("./src/reddit/models/PostCreationForm/index.ts"),
				Ae = n("./src/reddit/selectors/postCreations.ts");
			const Be = e => e.firstPost.firstFormEditEvent,
				De = e => e.firstPost.postTitle,
				Me = e => e.firstPost.postBody,
				Ve = e => e.firstPost.currentPromptIndex,
				qe = e => e.firstPost.selectedPredicatesInt,
				We = e => e.firstPost.postSubmitted,
				Ue = e => Object(Ae.w)(e) ? Object(Ae.o)(e) : Object(Ae.x)(e) ? Object(Ae.o)(e) : [];
			var He, ze, Qe, Ke = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.POST_SCREEN = "post_screen", e.POST_CONFIRMATION_SCREEN = "post_confirmation"
			}(He || (He = {})),
			function(e) {
				e.ONBOARDING = "onboarding"
			}(ze || (ze = {})),
			function(e) {
				e.KARMA = "karma_link", e.SUBREDDIT = "subreddit_link"
			}(Qe || (Qe = {}));
			const Ye = e => {
					const t = Object(Se.b)(e);
					if (!t) return null;
					const n = Object(Fe.a)(e)[null == t ? void 0 : t.experimentName];
					return n ? {
						id: null == n ? void 0 : n.id,
						name: null == n ? void 0 : n.name,
						variant: (null == n ? void 0 : n.variant) || "",
						isOverride: !1
					} : null
				},
				Je = (e, t) => ({
					...Object(Ke.d)(e),
					reason: t || De(e)
				}),
				Xe = e => ({
					...Object(Ke.o)(e),
					actionInfo: Je(e),
					source: ze.ONBOARDING,
					experiment: Ye(e)
				}),
				Ze = e => t => ({
					...Xe(t),
					action: Le.c.CLICK,
					actionInfo: Je(t, e),
					noun: He.POST_SCREEN
				}),
				$e = e => t => ({
					...Xe(t),
					action: Le.c.VIEW,
					actionInfo: Je(t, e),
					noun: He.POST_SCREEN
				}),
				et = e => t => ({
					...Xe(t),
					action: Le.c.CLICK,
					actionInfo: Je(t),
					noun: e
				});
			var tt = n("./src/reddit/models/User/index.ts"),
				nt = n("./src/config.ts"),
				st = n("./node_modules/lodash/cloneDeep.js"),
				at = n.n(st);
			const rt = {
					TEST: {
						subredditId: "t5_123",
						subredditName: "subreddit_test"
					},
					FR: {
						subredditId: "t5_5hmstz",
						subredditName: "monpremierpost"
					},
					BR: {
						subredditId: "t5_73nlu6",
						subredditName: "meuprimeiropost"
					}
				},
				ot = {
					title: h.fbt._("Create your first post", null, {
						hk: "eGHsx"
					}),
					subTitle: h.fbt._("Submit your post using the box below. Your post will be posted in", null, {
						hk: "Ctqwv"
					}),
					postTitlePrompts: [""],
					postTitlePlaceholders: [""],
					postBodyPrompts: [""],
					postTitlePredicates: [
						[]
					]
				},
				it = {
					withFullForm: !1,
					step1: {
						...ot
					},
					step2: {
						title: "",
						subTitle: "",
						icon: "",
						iconWidth: 0,
						iconHeight: 0,
						iconText: ""
					}
				},
				ct = {
					title: h.fbt._("You just made your first post!", null, {
						hk: "1eq39z"
					}),
					subTitle: h.fbt._("You can find it in", null, {
						hk: "3F3Kht"
					}),
					icon: `${nt.a.assetPath}/img/snoo-thumbsup.png`,
					iconWidth: 183,
					iconHeight: 250,
					iconText: ""
				},
				lt = {
					fruitVeg: h.fbt._("If you could be any fruit or vegetable, what would you choose?", null, {
						hk: "Yq5QK"
					}),
					top5: h.fbt._("Without saying the category, what are your top 5?", null, {
						hk: "1YBhoH"
					}),
					funFact: h.fbt._("What’s a fun fact few people know about you?", null, {
						hk: "2k4FjI"
					}),
					favThingPerson: h.fbt._("What is one thing or person you cannot live without?", null, {
						hk: "1pY9IG"
					}),
					laugh: h.fbt._("When was the last time you laughed so hard you cried?", null, {
						hk: "waXz8"
					})
				},
				dt = {
					fruitVeg: h.fbt._("I would be a…", null, {
						hk: "3y2efG"
					}),
					top5: h.fbt._("My top 5 are…", null, {
						hk: "Y4xp0"
					}),
					funFact: h.fbt._("Once, I…", null, {
						hk: "2a72l5"
					}),
					favThingPerson: h.fbt._("I cannot live without…", null, {
						hk: "poOyc"
					}),
					laugh: h.fbt._("Last time was…", null, {
						hk: "2pAykN"
					})
				},
				ut = {
					...it,
					step1: {
						...ot,
						title: h.fbt._("Create your first post", null, {
							hk: "4vGIbv"
						}),
						subTitle: h.fbt._("Here’s a prompt to get you started.", null, {
							hk: "3Vt3OW"
						}),
						postTitlePrompts: [lt.fruitVeg],
						postTitlePlaceholders: [dt.fruitVeg]
					},
					step2: {
						...ct
					}
				},
				mt = {
					withFullForm: !1,
					step1: {
						...ot,
						title: h.fbt._("Create your first post", null, {
							hk: "2PQk2m"
						}),
						subTitle: h.fbt._("When you make a post you’ll get +20 karma!", null, {
							hk: "7QJK4"
						}),
						postTitlePrompts: [lt.fruitVeg],
						postTitlePlaceholders: [dt.fruitVeg],
						subTitleLink: "https://reddit.zendesk.com/hc/articles/204511829-What-is-karma-",
						subTitleLinkText: h.fbt._("What is Karma?", null, {
							hk: "3ogDkN"
						})
					},
					step2: {
						...ct,
						iconText: h.fbt._("+20 karma is yours", null, {
							hk: "1srE0W"
						}),
						iconTextImg: `${nt.a.assetPath}/img/first-post/karma.png`
					}
				},
				pt = e => {
					const t = (null == e ? void 0 : e.username) ? h.fbt._("Hello, I’m u/{userName}. I’m here to", [h.fbt._param("userName", e.username)], {
						hk: "332r2x"
					}) : h.fbt._("Hello, I’m here to", null, {
						hk: "Oucxl"
					});
					return {
						withFullForm: !1,
						step1: {
							...ot,
							title: h.fbt._("Create your first post", null, {
								hk: "3pm9vf"
							}),
							subTitle: h.fbt._("Complete the sentences to build your introduction post.", null, {
								hk: "2LvaAi"
							}),
							postTitlePrompts: [t, h.fbt._("I bring to Reddit", null, {
								hk: "IY009"
							})],
							postBodyPrompts: [],
							postTitlePredicates: [
								[h.fbt._("find answers", null, {
									hk: "247G46"
								}), h.fbt._("connect with like folks", null, {
									hk: "4sXhk3"
								}), h.fbt._("discover fun facts", null, {
									hk: "XOLFy"
								}), h.fbt._("get breaking news", null, {
									hk: "2HuvIg"
								})],
								[h.fbt._("fun stories", null, {
									hk: "ZY9XA"
								}), h.fbt._("intriguing questions", null, {
									hk: "1w6IQQ"
								}), h.fbt._("quirky memes", null, {
									hk: "3O8yUs"
								})]
							]
						},
						step2: {
							...ct
						}
					}
				},
				bt = {
					withFullForm: !1,
					step1: {
						...ot,
						title: h.fbt._("Create your first post", null, {
							hk: "3pm9vf"
						}),
						subTitle: h.fbt._("Try one of these prompts to get you started.", null, {
							hk: "3mdsRW"
						}),
						postTitlePrompts: [lt.fruitVeg, lt.top5, lt.funFact, lt.favThingPerson, lt.laugh],
						postTitlePlaceholders: [dt.fruitVeg, dt.top5, dt.funFact, dt.favThingPerson, dt.laugh]
					},
					step2: {
						...ct
					}
				},
				gt = at()(ut);
			gt.withFullForm = !0, gt.step1.postBodyPrompts = [h.fbt._("If I were a fruit or vegetable I would be ...", null, {
				hk: "2N9IlX"
			})], gt.step1.postTitlePrompts = [h.fbt._("Hey, I am here to", null, {
				hk: "PkGAQ"
			}), h.fbt._("My superpower is", null, {
				hk: "1HriQk"
			})];
			const ft = e => e in rt ? rt[e] : null;
			var ht = (e, t) => {
					const n = (e => {
						return {
							[ke.lb.Default]: it,
							[ke.lb.FruitVeg]: ut,
							[ke.lb.Karma]: mt,
							[ke.lb.Interactive]: pt(e),
							[ke.lb.Randomizer]: bt,
							[ke.lb.FruitVegWithBody]: gt
						}
					})(t);
					return e in n ? n[e] : it
				},
				Ot = n("./src/reddit/components/Onboarding/FirstPost/FirstPost.m.less"),
				vt = n.n(Ot);
			const {
				fbt: xt
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var _t = e => {
					let {} = e;
					const t = Object(i.d)(),
						n = Object(Re.b)(),
						s = Object(i.e)(Se.c),
						a = s && ht(s.toString()),
						c = Object(i.e)(Se.b),
						l = ft((null == c ? void 0 : c.countryCode) || ""),
						d = Object(i.e)(ee.m),
						u = Object(i.e)(Se.f),
						m = d && Object(tt.e)(d) || "";
					if (Object(r.useEffect)(() => {
							n((() => e => ({
								...Xe(e),
								action: Le.c.VIEW,
								actionInfo: Je(e),
								noun: He.POST_CONFIRMATION_SCREEN
							}))())
						}, [n]), Object(r.useEffect)(() => {
							u && m && t(Pe.g(m))
						}, [m, t, u]), !a || !l) return null;
					const p = l.subredditName,
						{
							title: b,
							subTitle: g,
							iconText: f,
							icon: h,
							iconHeight: O,
							iconWidth: v,
							iconTextImg: x
						} = a.step2;
					return o.a.createElement("div", {
						className: vt.a.firstPostConfirmation
					}, o.a.createElement("header", {
						className: vt.a.header
					}, o.a.createElement("div", {
						className: vt.a.title
					}, b), o.a.createElement("div", {
						className: vt.a.subtitle
					}, g, " ", o.a.createElement("a", {
						onClick: () => {
							n(et(Qe.SUBREDDIT))
						},
						href: `/r/${p}/`,
						target: "_blank",
						rel: "noreferrer noopener",
						className: ne.a.externalLink,
						"data-testid": "subreddit-link"
					}, `r/${p}`))), o.a.createElement("div", null, o.a.createElement("div", {
						className: vt.a.snooThumbsUp,
						style: {
							backgroundImage: `url(${h})`,
							height: `${O}px`,
							width: `${v}px`
						}
					}, " "), f && o.a.createElement("div", {
						className: vt.a.iconText
					}, x && o.a.createElement("img", {
						src: x,
						alt: f
					}), f)))
				},
				Et = n("./src/lib/makeActionCreator/index.ts"),
				Ct = n("./src/reddit/actions/firstPost/constants.ts");
			const jt = Object(Et.a)(Ct.a),
				kt = Object(Et.a)(Ct.e),
				St = Object(Et.a)(Ct.b),
				yt = Object(Et.a)(Ct.c),
				Nt = Object(Et.a)(Ct.d),
				Tt = Object(Et.a)(Ct.f);
			var It = n("./src/reddit/actions/postCreation/submit.ts"),
				wt = n("./src/reddit/endpoints/post/create.ts");
			const Pt = e => async (t, n, s) => {
				let {
					apiContext: a
				} = s;
				const r = n(),
					o = ((e, t) => {
						const n = Object(Ae.b)(e, t.draftId),
							s = t.destSubreddit || n.destSubreddit;
						if (!n || !s.name) return;
						const a = Object(Ae.ib)(e),
							r = {
								...n,
								destSubreddit: s,
								gRecaptchaResponse: a,
								validate_on_submit: !0,
								postToTwitter: !1,
								title: De(e)
							},
							o = Me(e);
						return {
							...r,
							kind: Ge.p.MARKDOWN,
							markdown: o
						}
					})(r, e);
				if (!o) return;
				if (t(Object(It.b)(o)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(Ae.x)(r))) return;
				const i = await Object(wt.c)(a(), o);
				if (i.ok) {
					const e = i.body;
					t(Object(It.f)({
						draftId: o.draftId,
						response: e
					}))
				} else {
					if (!i.error || !i.error.type) return;
					const e = i.error;
					Object(It.a)(t, e)
				}
			};
			var Rt = n("./src/reddit/hooks/useToast.tsx"),
				Lt = n("./node_modules/lodash/debounce.js"),
				Ft = n.n(Lt);
			const {
				fbt: Gt
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var At = e => {
					let {
						currentPostTitle: t,
						currentPostBody: n,
						isNightModeOn: s,
						postTitlePlaceholders: a,
						postTitlePrompts: c,
						postBodyPrompts: l,
						setCurrentPostBody: u,
						setCurrentPostTitle: m,
						setFirstEdit: p,
						withFullForm: b,
						withRandomizer: g
					} = e;
					const f = Object(i.e)(Ve) || 0;
					let h = "",
						O = "",
						v = "";
					const x = Object(i.d)(),
						_ = 1 === c.length,
						E = Object(r.useRef)(null),
						C = Object(Re.b)();
					Object(r.useEffect)(() => {
						C($e(c[0].toString()))
					}, [c, C]), _ && (g = !1), f < c.length && (h = c[f].toString()), f < a.length && (O = a[f]), f < l.length && (v = l[f].toString());
					const j = Ft()(e => {
							m(e)
						}, 400),
						k = Ft()(e => {
							b || h && m(h), u(e)
						}, 400);
					return o.a.createElement("div", {
						className: Object(d.a)(vt.a.simplePostForm, {
							[vt.a.simplePostForm__no_margin]: g
						})
					}, g && o.a.createElement("div", {
						className: vt.a.randomizerContent
					}, o.a.createElement(D.t, {
						className: vt.a.randomizeButton,
						priority: D.c.Secondary,
						onClick: () => {
							if (_) return;
							const e = ((e, t) => {
									let n = e;
									for (; n === e;) n = Math.floor(Math.random() * t);
									return n
								})(f, c.length),
								t = a[f];
							x(jt(e)), m(""), u(""), E && E.current && (E.current.placeholder = t, E.current.value = ""), p(!1), C(Ze(c[e]))
						},
						Icon: Object(M.b)("random"),
						iconClassName: vt.a.icon,
						"data-testid": "promptRandomizeButton"
					}, Gt._("Find another prompt", null, {
						hk: "1dAOYB"
					}))), b && o.a.createElement(o.a.Fragment, null, o.a.createElement("textarea", {
						className: Object(d.a)(vt.a.formTextField, vt.a.titleTextarea, {
							[vt.a.formTextField__dark]: s
						}),
						"data-testid": "postTitleInput",
						onChange: e => j(e.currentTarget.value),
						placeholder: h,
						defaultValue: t
					}), o.a.createElement("textarea", {
						className: Object(d.a)(vt.a.formTextField, vt.a.bodyTextarea, {
							[vt.a.formTextField__dark]: s
						}),
						"data-testid": "postBodyInput",
						onChange: e => k(e.currentTarget.value),
						placeholder: v,
						defaultValue: n
					})), !b && o.a.createElement(o.a.Fragment, null, o.a.createElement("h2", {
						className: vt.a.formTitle,
						"data-testid": "postTitlePrompt"
					}, h), o.a.createElement("textarea", {
						className: Object(d.a)(vt.a.formTextField, vt.a.bodyTextarea, {
							[vt.a.formTextField__dark]: s
						}),
						"data-testid": "postBodyInput",
						onChange: e => k(e.currentTarget.value),
						placeholder: O,
						ref: E,
						defaultValue: n
					})))
				},
				Bt = n("./src/reddit/icons/svgs/ChevronDown/index.tsx");
			var Dt = e => {
				let {
					groupIndex: t,
					isNightModeOn: n,
					itemIndex: s,
					selected: a,
					text: i,
					setSelectedPredicate: c
				} = e;
				const l = Object(r.useRef)(null);
				return Object(r.useEffect)(() => {
					if (a && l.current) {
						const e = l.current.parentElement;
						e && (e.style.marginLeft = `${(e=>e?-1*(e.offsetLeft+e.clientWidth/2):0)(l.current)}px`)
					}
				}, [t, s, a]), o.a.createElement("span", {
					ref: l,
					className: Object(d.a)(vt.a.postPredicate, {
						[vt.a.postPredicate__dark]: n,
						[vt.a.selectedPredicate]: a
					}),
					key: `predicate-${t}-${s}`,
					onClick: e => {
						(e => {
							c(t, s)
						})()
					},
					"data-testid": `predicate-${t}-${s}`
				}, i)
			};
			const Mt = (e, t, n) => {
					const s = [];
					return e.forEach((e, a) => {
						var r;
						const o = null == n ? void 0 : n[a],
							i = null === (r = null == t ? void 0 : t[a]) || void 0 === r ? void 0 : r[o];
						if (!i) return "";
						s.push(`${e} ${i}.`)
					}), s.join(" ")
				},
				Vt = e => o.a.createElement("a", {
					className: e.className,
					"data-testid": `predicate-nav-${e.id}`,
					onClick: e.onClick,
					title: e.title
				}, o.a.createElement("i", {
					className: Object(d.a)(vt.a.navIcon)
				}, o.a.createElement(Bt.a, {
					className: vt.a.iconImage
				})));
			var qt = e => {
				let {
					isNightModeOn: t,
					postTitlePrompts: n,
					postTitlePredicates: s,
					setCurrentPostTitle: a,
					setFirstEdit: c
				} = e;
				const l = Object(i.d)(),
					u = Object(Re.b)(),
					m = e => {
						l(Tt(b));
						const t = Mt(n, s, b);
						a(t), e && u(Ze(t))
					},
					p = new Array(s.length).fill(0);
				let b = Object(i.e)(qe) || p;
				Object(r.useEffect)(() => {
					const e = Mt(n, s, b);
					u($e(e))
				}, [u]), 0 === b.length && (b = new Array(s.length).fill(0), m(!1), c(!0));
				const g = (e, t) => {
					b[e] = t, m(!0)
				};
				return o.a.createElement("div", {
					className: vt.a.interactivePostBuilder
				}, n.map((e, n) => o.a.createElement("div", {
					className: vt.a.interactivePostBuilderUnit,
					key: "predicate-group-" + n
				}, o.a.createElement("h2", {
					className: Object(d.a)(vt.a.formTitle, vt.a.postPredicatesGroup__prompt)
				}, e), o.a.createElement("div", {
					className: Object(d.a)(vt.a.postPredicatesGroup, {
						[vt.a.postPredicatesGroup__dark]: t
					})
				}, o.a.createElement("div", {
					className: vt.a.postPredicatesGroupScroll,
					"data-testid": "intPredicateGroup-scrollable-" + n
				}, s[n].map((e, s) => o.a.createElement(Dt, {
					groupIndex: n,
					key: `predicate-${n}-${s}`,
					isNightModeOn: t,
					itemIndex: s,
					selected: s === b[n],
					setSelectedPredicate: g,
					text: e
				}))), o.a.createElement("div", {
					className: vt.a.postPredicatesGroupNav
				}, b[n] >= 1 && o.a.createElement(Vt, {
					id: `prev-${n}`,
					title: h.fbt._("Previous", null, {
						hk: "1hVSvU"
					}),
					className: Object(d.a)(vt.a.postPredicatesGroupNav__prev, {
						[vt.a.postPredicatesGroupNav__dark]: t
					}),
					onClick: () => (e => {
						g(e, b[e] - 1)
					})(n)
				}), b[n] < s[n].length - 1 && o.a.createElement(Vt, {
					id: `next-${n}`,
					title: h.fbt._("Next", null, {
						hk: "2uDwtq"
					}),
					className: Object(d.a)(vt.a.postPredicatesGroupNav__next, {
						[vt.a.postPredicatesGroupNav__dark]: t
					}),
					onClick: () => (e => {
						g(e, b[e] + 1)
					})(n)
				}))))))
			};
			const {
				fbt: Wt
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Ut = e => {
				let {
					postSubmittedCallback: t,
					hasSubmitButton: n
				} = e;
				const s = Object(Re.b)(),
					a = Object(i.e)(Me),
					c = Object(i.e)(De),
					l = Object(i.e)(Be),
					u = Object(i.d)(),
					m = Object(i.e)(Se.e),
					p = Object(i.e)(ee.fb),
					b = Object(i.e)(Se.g),
					g = Object(i.e)(Se.c),
					f = Object(i.e)(ee.m),
					h = g && ht(g.toString(), {
						username: null == f ? void 0 : f.displayText
					}),
					O = Object(i.e)(We),
					v = Object(i.e)(Se.b),
					x = ft((null == v ? void 0 : v.countryCode) || ""),
					_ = Object(i.e)(Ue),
					E = Object(Rt.a)();
				if (Object(r.useEffect)(() => {
						if (_.length) {
							const e = _[0];
							E(e), s((() => e => {
								var t;
								return {
									...Xe(e),
									action: Le.c.ERROR,
									actionInfo: {
										...Object(Ke.d)(e),
										reason: `post: ${De(e)}, error: ${null===(t=Ue(e))||void 0===t?void 0:t[0]}`
									},
									noun: Le.b.POST
								}
							})())
						}
					}, [_, s, E]), Object(r.useEffect)(() => {
						x && u(yt(x))
					}, [u, x]), Object(r.useEffect)(() => {
						O && t && 0 === _.length && (s((() => e => ({
							...Xe(e),
							action: Le.c.SUBMIT,
							actionInfo: Je(e),
							noun: Le.b.POST
						}))()), t())
					}, [_, O, t, s]), !h || !x || !v) return null;
				const C = h.withFullForm,
					{
						postBodyPrompts: j,
						postTitlePlaceholders: k,
						postTitlePrompts: S,
						postTitlePredicates: y
					} = h.step1;
				if (!S.length) return null;
				const N = ((e, t, n) => {
						const s = !!e && !!t,
							a = e.length >= 5,
							r = n || t.length >= 3;
						return s && r && a
					})(c, a, C) || m,
					T = e => {
						u(kt(e))
					},
					I = e => {
						u(Nt(e)), !l && T(!0)
					},
					w = e => {
						u(St(e)), !l && T(!0)
					},
					P = Wt._("Post to r/{subredditName}", [Wt._param("subredditName", x.subredditName)], {
						hk: "3l2Epc"
					});
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: vt.a.firstPostBuilder
				}, !m && o.a.createElement(At, {
					currentPostTitle: c,
					currentPostBody: a,
					isNightModeOn: p,
					postBodyPrompts: j,
					postTitlePlaceholders: k,
					postTitlePrompts: S,
					setCurrentPostBody: w,
					setCurrentPostTitle: I,
					setFirstEdit: T,
					withFullForm: h.withFullForm,
					withRandomizer: b
				}), m && o.a.createElement(qt, {
					isNightModeOn: p,
					postTitlePrompts: S,
					postTitlePredicates: y || [
						[]
					],
					setCurrentPostBody: w,
					setCurrentPostTitle: I,
					setFirstEdit: T
				})), !!n && o.a.createElement("div", {
					className: Object(d.a)(vt.a.continueButtonWrapper)
				}, o.a.createElement("button", {
					className: vt.a.continueButton,
					disabled: !l || !N,
					onClick: () => {
						N && u(Pt({
							destSubreddit: {
								isProfile: !1,
								id: x.subredditId,
								name: x.subredditName
							},
							postFieldValidationPending: null
						}))
					}
				}, P)))
			};
			const {
				fbt: Ht
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var zt;
			! function(e) {
				e.AVATAR = "avatar", e.CELEBRATION = "celebration", e.COMMUNITIES = "communities", e.GENDER = "gender", e.INTERESTS = "interests", e.FIRST_POST = "first_post", e.FIRST_POST_CONF = "first_post_confirmation", e.LANGUAGES = "languages"
			}(zt || (zt = {}));
			const Qt = e => {
				let {
					activeStep: t,
					avatarImage: n,
					communitiesByTopic: s,
					continueFromFirstPostForm: a,
					autoProgressGenderCollection: i,
					fetchRandomAvatar: c,
					interests: l,
					isLanguageCollectionSettings: d,
					languages: u,
					loadingCommunities: m,
					loadingInterests: p,
					loadingLanguages: b,
					recommendedCommunities: g,
					selectedCommunities: f,
					selectedInterests: h,
					selectedLanguages: O,
					setSelectedCommunities: v,
					setSelectedInterests: x,
					selectedGenderOption: _,
					setSelectedGenderOption: E,
					setSelectedLanguages: C,
					setShowAllLanguage: j,
					setToastText: k,
					showAllLanguage: S
				} = e;
				const y = Object(r.useRef)(null);
				Object(r.useEffect)(() => {
					var e, t;
					return null === (t = null === (e = y.current) || void 0 === e ? void 0 : e.scroll) || void 0 === t ? void 0 : t.call(e, 0, 0)
				}, [t]);
				const N = Object(r.useCallback)(e => {
						const t = f[e],
							n = {
								...f
							};
						t ? delete n[e] : n[e] = !0, v(n)
					}, [f, v]),
					T = Object(r.useCallback)((e, t) => {
						const n = {
								...f
							},
							a = e => e.forEach(e => {
								t ? n[e.id] = !0 : delete n[e.id]
							});
						if ("recommended" === e) a(g);
						else {
							const t = s.find(t => t.topicId === e);
							t && a(t.communities)
						}
						v(n)
					}, [s, g, f, v]),
					I = Object(r.useCallback)(e => {
						const {
							children: t,
							id: n
						} = e, s = h[n], a = {
							...h
						};
						s ? (delete a[n], s.forEach(e => delete a[e])) : a[n] = [...(null == t ? void 0 : t.map(e => e.id)) || []], x(a)
					}, [h, x]),
					w = Object(r.useCallback)(e => {
						const t = O[e],
							n = {
								...O
							};
						t ? delete n[e] : n[e] = !0, C(n)
					}, [O, C]);
				return o.a.createElement("div", {
					className: `\n      ${ne.a.SelectedComponent}\n      ${t===zt.AVATAR&&ne.a.SelectedComponentAvatar}\n    `,
					ref: y
				}, t === zt.GENDER && o.a.createElement(B, {
					autoProgressGenderCollection: i,
					isFlowImprovement: !0,
					selectedGenderOption: _,
					setSelectedGenderOption: E
				}), t === zt.INTERESTS && o.a.createElement(Ee, {
					interests: l.topics,
					loadingInterests: p,
					schemeName: l.schemeName,
					selected: h,
					toggleSelection: I,
					viewportRoot: y.current
				}), t === zt.COMMUNITIES && o.a.createElement(be, {
					communitiesByTopic: s,
					loadingCommunities: m,
					recommendedCommunities: g,
					schemeName: l.schemeName,
					selected: f,
					toggleAll: T,
					toggleSelection: N,
					viewportRoot: y.current
				}), t === zt.LANGUAGES && o.a.createElement(we, {
					languages: u,
					loadingLanguages: b,
					isLanguageCollectionSettings: d,
					selectedLanguages: O,
					setToastText: k,
					setShowAllLanguage: j,
					showAllLanguage: S,
					toggleLanguageSelection: w
				}), t === zt.AVATAR && o.a.createElement(U, {
					avatarImage: n,
					fetchRandomAvatar: c
				}), t === zt.FIRST_POST && o.a.createElement(Ut, {
					hasSubmitButton: !0,
					postSubmittedCallback: a
				}), t === zt.FIRST_POST_CONF && o.a.createElement(_t, null))
			};
			var Kt = n("./src/reddit/constants/modals.ts"),
				Yt = n("./src/reddit/contexts/ApiContext.tsx"),
				Jt = n("./src/lib/makeGqlRequest/index.ts"),
				Xt = n("./node_modules/lodash/uniqBy.js"),
				Zt = n.n(Xt),
				$t = n("./src/reddit/customMiddleware/recentSubreddits.ts"),
				en = n("./src/reddit/endpoints/economics/specialMembership.ts"),
				tn = n("./src/redditGQL/operations/GetNearbySubreddits.json"),
				nn = (n("./node_modules/lodash/isEmpty.js"), n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"));
			const sn = e => {
					let {
						edges: t,
						pageInfo: n
					} = e;
					const s = {},
						a = [];
					let r = 0;
					for (const {
							node: o
						} of t) {
						const e = Object(nn.a)(o);
						s[e.id] = {
							...e,
							publicDescription: null == o ? void 0 : o.publicDescriptionText,
							bannerBackgroundImage: o && o.styles && o.styles.bannerBackgroundImage
						}, a.push({
							id: e.id,
							rank: r
						}), r += 1
					}
					return {
						rankings: a,
						subreddits: s,
						pageInfo: n
					}
				},
				an = (e, t) => Object(Jt.a)(e, {
					...tn,
					variables: t
				});
			var rn = n("./src/reddit/endpoints/subreddit/subscriptions.ts");
			var on = n("./src/reddit/models/Onboarding/index.ts"),
				cn = n("./src/redditGQL/operations/InterestTopicsByIds.json");
			const ln = async (e, t, n) => {
				const s = await ((e, t, n) => {
					const s = {
						topicIds: [],
						schemeName: on.b,
						maxSubreddits: 10,
						onboardingFlow: t,
						...n
					};
					return Object(Jt.a)(e, {
						...cn,
						variables: s
					})
				})(e(), t, {
					topicIds: n
				});
				if (!s.ok) return null;
				const a = s.body,
					r = null == a ? void 0 : a.data.interestTopicsByIds;
				return r ? (e => (e => {
					let {
						edges: t
					} = e;
					const n = [];
					return t.forEach(e => {
						let {
							node: t
						} = e;
						var s, a, r;
						const o = [];
						null === (r = null === (a = null === (s = t.topic) || void 0 === s ? void 0 : s.subreddits) || void 0 === a ? void 0 : a.edges) || void 0 === r || r.forEach(e => {
							let {
								node: t
							} = e;
							t.isSubscribed || o.push((e => {
								let {
									detectedLanguage: t,
									id: n,
									prefixedName: s,
									publicDescriptionText: a,
									styles: r
								} = e;
								var o;
								return {
									description: a,
									language: t,
									icon: r.icon || (null === (o = r.legacyIcon) || void 0 === o ? void 0 : o.url),
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
				})(e))(r) : null
			}, dn = e => {
				var t;
				return {
					description: e.publicDescription,
					language: null,
					icon: e.communityIcon || (null === (t = e.icon) || void 0 === t ? void 0 : t.url),
					id: e.id,
					isSubscribed: e.isSubscribed,
					prefixedName: e.displayText
				}
			}, un = async e => {
				var t;
				const n = await async function(e, t) {
					const n = await an(e, t);
					if (n && n.ok) {
						const e = n.body,
							t = e && e.data && e.data.nearbySubreddits;
						return sn(t)
					}
				}(e(), {
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
						return dn(t[n])
					})
				}
				return null
			}, mn = async e => {
				const t = Object($t.b)();
				if (null == t ? void 0 : t.length) {
					const n = t.map(e => e.id),
						s = await Object(en.e)(e(), n);
					if (s.ok) return Object.values(s.body).map(dn)
				}
				return null
			};
			var pn = n("./src/reddit/helpers/graphql/normalizeInterestTopicsFromGql/index.ts"),
				bn = n("./src/redditGQL/operations/InterestTopics.json"),
				gn = n("./src/redditGQL/operations/UpdateTopicPreferences.json");
			const fn = async (e, t) => {
				const n = await ((e, t) => {
					const n = {
						first: 500,
						maxChildren: 500,
						maxDepth: 2,
						schemeName: on.b,
						onboardingFlow: t
					};
					return Object(Jt.a)(e, {
						...bn,
						variables: n
					})
				})(e(), t);
				if (!n.ok) return null;
				const s = n.body,
					a = null == s ? void 0 : s.data.interestTopics;
				return a ? Object(pn.a)(a) : null
			}, hn = (e, t) => ((e, t) => Object(Jt.a)(e, {
				...gn,
				variables: t
			}))(e(), {
				input: {
					selectedOnboardingTopicIds: t
				}
			});
			var On = n("./src/reddit/endpoints/onboarding/languageSelections.ts"),
				vn = n("./src/reddit/helpers/counters/onboarding.ts"),
				xn = n("./src/reddit/helpers/onboarding/reonboarding.ts"),
				_n = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				En = n("./src/reddit/icons/svgs/svgIcons.tsx"),
				Cn = n("./src/reddit/selectors/activeModal.ts"),
				jn = n("./src/reddit/selectors/experiments/survey.ts"),
				kn = n("./src/reddit/selectors/experiments/targetedOnboardingSkip.ts"),
				Sn = n("./src/reddit/selectors/onboarding.ts"),
				yn = n("./src/reddit/actions/accountGender/index.ts"),
				Nn = n("./src/reddit/actions/onboarding/index.ts");

			function Tn() {
				return (Tn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: In
			} = n("./node_modules/fbt/lib/FbtPublic.js"), wn = e => e.type === on.d.REONBOARDING;
			const Pn = () => Object(f.f)({
					kind: E.b.Error,
					text: In._("Something went wrong", null, {
						hk: "22u7ha"
					})
				}),
				Rn = async (e, t) => {
					const n = {
						ok: !0,
						preSelectedCommunities: {},
						recommendedCommunities: []
					};
					try {
						n.recommendedCommunities = await (async (e, t) => {
							const n = [un(t), mn(e)],
								[s, a] = await Promise.all(n);
							return Zt()([...a || [], ...s || []], e => e.id).filter(e => !e.isSubscribed)
						})(e, t)
					} catch (s) {
						n.ok = !1
					}
					return n
				}, Ln = async (e, t, n, s) => {
					const a = Object.keys(n),
						r = Object.keys(s),
						o = [],
						i = {
							ok: !0,
							reload: !1
						};
					if (a.length && o.push(((e, t) => Object(rn.c)(e(), {
							subredditIds: t,
							subscribe: !0
						}))(e, a)), r.length && o.push(hn(t, r)), o.length) try {
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
				}, Fn = Object(l.a)(e => {
					const {
						gqlContext: t,
						apiContext: n
					} = e, s = Object(i.d)(), a = Object(_.a)(), l = Object(i.e)(Cn.a), h = wn(l), O = (e => e.type === on.d.LANGUAGE_COLLECTION)(l);
					let v = h ? zt.INTERESTS : zt.GENDER;
					O && (v = zt.LANGUAGES);
					const [C, k] = Object(r.useState)(v), [S, y] = Object(r.useState)(null), N = Object(i.e)(Sn.a), [I, w] = Object(r.useState)(h), [P, L] = Object(r.useState)(!1), A = {
						topics: [],
						schemeName: void 0
					}, [B, D] = Object(r.useState)(A), [V, q] = Object(r.useState)(!1), [W, U] = Object(r.useState)(wn(l) && (null == l ? void 0 : l.selectedInterests) || {}), [H, z] = Object(r.useState)(!1), [Q, K] = Object(r.useState)([]), [Y, J] = Object(r.useState)([]), [Z, $] = Object(r.useState)({}), [te, se] = Object(r.useState)(0), [ae, re] = Object(r.useState)({
						sortedLanguages: []
					}), [oe, ie] = Object(r.useState)(!1), [ce, le] = Object(r.useState)({}), [de, ue] = Object(r.useState)(null), [me, pe] = Object(r.useState)(!1), {
						avatarImage: be,
						fetchRandomAvatar: ge,
						saveAvatar: fe
					} = j(), he = h ? on.c.REONBOARDING_BOTTOM_SHEET : on.c.ONBOARDING;
					Object(r.useEffect)(() => {
						(I || N) && async function() {
							q(!0);
							const e = await fn(t, he);
							q(!1), e && (se(Date.now() / u.Yb), D(e))
						}()
					}, [I, N, t, he]), Object(r.useEffect)(() => {
						N && Object(vn.a)(null == S ? void 0 : S.genderCategory, N.success)
					}, [N, S]);
					const Oe = Object(i.e)(Se.j) === ke.mb.Removed;
					Object(r.useEffect)(() => {
						let e = !1;
						return async function() {
							let a = {
								ok: !0,
								preSelectedCommunities: {},
								recommendedCommunities: []
							};
							Oe || (a = await Rn(n, t));
							const {
								ok: r,
								preSelectedCommunities: o,
								recommendedCommunities: i
							} = a;
							r ? e || ($(o), J(i)) : s(Pn())
						}(), () => {
							e = !0
						}
					}, [n, s, t, Oe]);
					const ve = Object(i.e)(ye.b),
						xe = Object(i.e)(ye.k),
						_e = Object(i.e)(Se.i),
						Ee = Object(i.e)(Se.h),
						Ce = _e === ke.hd.TopTwo || _e === ke.hd.All || Ee === ke.hd.TopTwo || Ee === ke.hd.All,
						je = Object(r.useCallback)(async e => {
							ie(!0);
							const n = await Object(On.c)(e, t, xe);
							if (ie(!1), n) {
								re(n);
								const e = {};
								for (let t = 0; t < n.sortedLanguages.length; t++) n.sortedLanguages[t].selected && (e[n.sortedLanguages[t].isoCode] = !0);
								le(e)
							} else s(Pn())
						}, [s, t, xe]);
					Object(r.useEffect)(() => {
						O && je(On.a.ALL_KEY)
					}, [je, O]);
					const Ne = Object(r.useCallback)(async () => await Object(On.d)(t, ce), [t, ce]),
						Te = Object(i.e)(e => Object(jn.f)(e)),
						Ie = Object(i.e)(ee.U),
						we = Object(i.e)(ye.g),
						Pe = Object(i.e)(kn.a),
						Re = Pe === ke.Wf.CloseOnboarding,
						Fe = Pe === ke.Wf.SkipTopicSelection,
						Ge = Pe === ke.Wf.SmartSignal,
						Ae = Object(r.useCallback)(() => {
							s(Object(b.g)(Kt.a.ONBOARDING_MODAL_D2X)), Te && s(Object(g.h)()), h && (a(Object(F.t)()), Object(xn.a)()), we && Ie && s(Object(m.startChangeUsernameFlow)())
						}, [s, Ie, we, h, Te, a]),
						Be = Object(r.useCallback)((function() {
							let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1500;
							setTimeout(async () => {
								await s(Object(p.frontpageReloaded)()), setTimeout(Ae, e)
							}, e)
						}), [Ae, s]),
						De = Object(r.useCallback)(() => {
							const e = Object.keys(W).filter(e => 0 === W[e].length || !W[e].find(e => W[e]));
							K([]), e.length && async function() {
								z(!0);
								const n = await ln(t, he, e);
								z(!1), n && K(n)
							}()
						}, [t, W, he]),
						Me = Object(r.useCallback)(() => {
							k(zt.CELEBRATION), Be()
						}, [Be]),
						Ve = Object(r.useCallback)(() => {
							h ? Me() : (ge(), k(zt.AVATAR))
						}, [h, ge, Me]),
						qe = Object(i.e)(Se.a),
						We = Object(r.useCallback)(e => {
							q(!0), k(zt.INTERESTS), s(Object(yn.a)(e))
						}, [s]),
						Ue = Object(r.useCallback)(async () => {
							a(Object(F.p)()), We(S || G)
						}, [We, S, a]),
						ze = Object(r.useCallback)(async e => {
							a(Object(F.p)()), We(e)
						}, [We, a]),
						Ke = Object(r.useCallback)(async () => {
							a(Object(F.u)());
							const e = Date.now() / u.Yb - te;
							Ge && e <= 5 ? (L(!0), U({}), Ve()) : (k(zt.COMMUNITIES), De())
						}, [De, a, Ve, te, Ge]),
						Ye = Object(r.useCallback)(async () => {
							a(Object(F.j)()), Ce ? (je(On.a.TOP_KEYS), k(zt.LANGUAGES)) : Ve(), (await Ln(n, t, Z, W)).ok || s(Pn())
						}, [n, s, je, Ve, t, Z, W, a, Ce]),
						Ze = Object(r.useCallback)(async () => {
							var e;
							const t = Object.keys(ce).join();
							a(Object(F.y)(ve, t)), Ve();
							const n = await Ne();
							(null === (e = null == n ? void 0 : n.updateSpokenLanguagesPreference) || void 0 === e ? void 0 : e.ok) || s(Pn())
						}, [ve, s, Ve, Ne, ce, a]),
						$e = Object(r.useCallback)(() => {
							fe(), k(zt.FIRST_POST)
						}, [fe]),
						tt = C === (zt.FIRST_POST || zt.FIRST_POST_CONF),
						nt = Object(i.e)(e => tt && !h && Object(Se.d)(e)),
						st = Object(i.e)(e => nt && Object(Se.c)(e) || ""),
						at = ht(st.toString()),
						rt = Object(r.useCallback)(() => {
							k(zt.FIRST_POST_CONF)
						}, []),
						ot = Object(r.useCallback)(() => {
							Me()
						}, [Me]);
					Object(r.useEffect)(() => {
						tt && !nt && Me()
					}, [tt, nt, Me]);
					const it = (() => C === zt.GENDER ? Ue : C === zt.INTERESTS ? Ke : C === zt.COMMUNITIES ? Ye : C === zt.LANGUAGES ? Ze : C === zt.AVATAR ? $e : C === zt.FIRST_POST ? rt : ot)(),
						ct = C !== v && C !== zt.FIRST_POST_CONF,
						lt = Object(r.useCallback)(() => {
							C === zt.INTERESTS ? (s(Object(Nn.resetGenderUpdateState)()), w(!1), k(zt.GENDER)) : C === zt.COMMUNITIES ? k(zt.INTERESTS) : C === zt.LANGUAGES ? k(P ? zt.INTERESTS : zt.COMMUNITIES) : C === zt.AVATAR ? k(Ce ? zt.LANGUAGES : P ? zt.INTERESTS : zt.COMMUNITIES) : C === zt.FIRST_POST && (a((() => e => ({
								...Xe(e),
								action: Le.c.BACK,
								actionInfo: Je(e),
								noun: He.POST_SCREEN
							}))()), Ve())
						}, [C, s, Ve, P, a, Ce]),
						dt = (C === zt.GENDER || C === zt.LANGUAGES || C === zt.AVATAR || C === zt.FIRST_POST || Fe) && C !== zt.FIRST_POST_CONF,
						ut = Object(r.useCallback)(() => {
							C === zt.GENDER ? (a(Object(F.o)()), w(!0), k(zt.INTERESTS)) : C === zt.INTERESTS ? (a(Object(F.t)()), Fe ? (Ve(), L(!0)) : Ae()) : C === zt.LANGUAGES ? (a(Object(F.x)(ve)), Ve()) : C === zt.AVATAR ? (a(Object(x.a)("skip")), k(zt.FIRST_POST)) : C === zt.FIRST_POST && (a((() => e => ({
								...Xe(e),
								action: Le.c.SKIP,
								actionInfo: Je(e),
								noun: He.POST_SCREEN
							}))()), Me())
						}, [Ae, ve, a, C, Ve, Me, Fe]),
						mt = O,
						pt = Object.keys(Z).length,
						bt = Object.keys(W).length,
						gt = Object.keys(ce).length,
						ft = C === zt.INTERESTS && bt < (h ? 1 : 3) || C === zt.COMMUNITIES && pt < 1 || C === zt.LANGUAGES && gt > 10;
					if (C === zt.CELEBRATION) return o.a.createElement(T, null);
					let Ot;
					h || Re || O ? Ot = o.a.createElement("button", {
						"aria-label": In._("Close", null, {
							hk: "3XndV9"
						}),
						className: ne.a.dismissButton,
						onClick: Ae
					}, o.a.createElement(M.a, {
						name: "close"
					})) : !Re && dt && (Ot = o.a.createElement("button", {
						className: ne.a.skipButton,
						onClick: ut
					}, In._("Skip", null, {
						hk: "2S8Lme"
					})));
					const vt = C === zt.INTERESTS || C === zt.COMMUNITIES || C === zt.LANGUAGES;
					let xt = In._("Continue", null, {
						hk: "15wNPy"
					});
					mt ? xt = In._("Save", null, {
						hk: "1QmXEz"
					}) : C === zt.LANGUAGES && (xt = In._("Continue with {amount}", [In._param("amount", Object.keys(ce).length)], {
						hk: "16fdeF"
					}));
					const _t = C === zt.GENDER || C === zt.FIRST_POST;
					return o.a.createElement("div", {
						className: `${ne.a.container} ${C===zt.GENDER&&ne.a.containerImproved}`
					}, o.a.createElement("header", {
						className: ne.a.header
					}, o.a.createElement("div", {
						className: `\n            ${ne.a.headerBar}\n            ${vt&&ne.a.noHeaderBar}\n            ${!vt&&ne.a.headerBarImproved}\n          `
					}, o.a.createElement("div", null, ct && o.a.createElement(En.f, {
						className: ne.a.backButton,
						"data-testid": "onboarding-back",
						onClick: lt
					})), o.a.createElement(_n.a, {
						className: ne.a.snooIcon
					}), o.a.createElement("div", {
						className: ne.a.skipOrDismissContainer
					}, Ot)), C === zt.GENDER && o.a.createElement("div", {
						className: ne.a.title
					}, In._("About you", null, {
						hk: "35GAtt"
					})), C === zt.AVATAR && o.a.createElement("div", {
						className: ne.a.title
					}, In._("Style your avatar", null, {
						hk: "15i2ld"
					})), C === zt.GENDER && o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: ne.a.subtitle
					}, function(e) {
						switch (e) {
							case ke.We.Ads:
								return In._("Tell us about yourself to improve your recommendations and ads.", null, {
									hk: "tlFdQ"
								});
							case ke.We.AdsUpdateSettings:
								return In._("Tell us about yourself to improve your recommendations and ads. You can update this any time in settings.", null, {
									hk: "CbUFt"
								});
							default:
								return In._("Tell us about yourself to start building your home feed.", null, {
									hk: "2OlWjE"
								})
						}
					}(qe)), o.a.createElement("div", {
						className: R.a.prompt
					}, In._("How do you identify?", null, {
						hk: "1JAuh0"
					}))), C === zt.AVATAR && o.a.createElement("div", {
						className: ne.a.subtitle
					}, In._("This is how people will see you on Reddit.", null, {
						hk: "2SmAiC"
					}), o.a.createElement("br", null), In._("You can change it later if you’d like.", null, {
						hk: "34hXSo"
					})), C === zt.FIRST_POST && at && o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: ne.a.title
					}, at.step1.title), o.a.createElement("div", {
						className: ne.a.subtitle
					}, at.step1.subTitle, at.step1.subTitleLink && o.a.createElement(o.a.Fragment, null, o.a.createElement("br", null), o.a.createElement(c.a, {
						onClick: () => {
							a(et(Qe.KARMA))
						},
						to: {
							pathname: at.step1.subTitleLink
						},
						target: "_blank",
						rel: "noreferrer noopener",
						className: ne.a.externalLink
					}, at.step1.subTitleLinkText))))), o.a.createElement(Qt, {
						activeStep: C,
						autoProgressGenderCollection: ze,
						avatarImage: be,
						communitiesByTopic: Q,
						continueFromFirstPostForm: rt,
						fetchRandomAvatar: ge,
						interests: B,
						isLanguageCollectionSettings: O,
						languages: ae,
						loadingCommunities: H,
						loadingInterests: V,
						loadingLanguages: oe,
						recommendedCommunities: Y,
						selectedCommunities: Z,
						selectedGenderOption: S,
						selectedInterests: W,
						selectedLanguages: ce,
						setSelectedCommunities: $,
						setSelectedGenderOption: y,
						setSelectedInterests: U,
						setSelectedLanguages: le,
						setShowAllLanguage: pe,
						setToastText: ue,
						showAllLanguage: me
					}), de && o.a.createElement("div", {
						className: ne.a.toast
					}, o.a.createElement("div", {
						className: ne.a.toastIcon
					}, o.a.createElement(X, {
						className: ne.a.toastCheckIcon
					})), o.a.createElement("div", {
						className: ne.a.toastText
					}, de), o.a.createElement("div", {
						className: ne.a.toastFlex
					})), !_t && o.a.createElement("div", {
						className: Object(d.a)(ne.a.continueButtonWrapper, {
							[ne.a.avatarPicker]: C === zt.AVATAR
						})
					}, o.a.createElement("button", {
						className: ne.a.continueButton,
						disabled: ft,
						onClick: mt ? async () => {
							var e;
							if (s(Object(b.g)(Kt.a.ONBOARDING_MODAL_D2X)), C === zt.LANGUAGES) {
								const t = await Ne();
								(null === (e = null == t ? void 0 : t.updateSpokenLanguagesPreference) || void 0 === e ? void 0 : e.ok) ? (a(Object(F.G)(ve)), s(Object(f.f)({
									kind: E.b.SuccessCommunity,
									text: In._("Changes saved", null, {
										hk: "2isjrZ"
									})
								}))) : s(Pn())
							}
						} : it
					}, xt)))
				});
			t.default = Object(Yt.b)(e => o.a.createElement(Fn, Tn({}, e, {
				className: Object(d.a)(e.className, ne.a.modal),
				onOverlayClick: a.a,
				overlayClassName: ne.a.overlay
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
				externalLink: "_3xd92-3GxWaldBOz9zmiIm",
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
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less"),
				c = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
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
					...d
				} = e;
				return a.a.createElement("div", l({}, d, {
					className: Object(r.a)(c.a.container, n)
				}), o ? a.a.createElement("div", {
					className: Object(r.a)(c.a.tooltip, i, s ? c.a.below : c.a.above)
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
				return _
			})), n.d(t, "a", (function() {
				return E
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = n("./src/reddit/controls/FormFields/index.tsx"),
				d = n("./src/reddit/controls/TextButton/index.tsx"),
				u = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				m = n("./src/reddit/models/Gender/index.ts"),
				p = n("./src/reddit/components/Settings/GenderCollection/Modal.m.less"),
				b = n.n(p);
			class g extends r.a.Component {
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
						isPending: a
					} = this.state;
					return r.a.createElement("section", {
						className: Object(i.a)(e, b.a.container)
					}, r.a.createElement(c.i, null, r.a.createElement(u.a, null, r.a.createElement(c.q, null, s.fbt._("I refer to myself as...", null, {
						hk: "4x0fpA"
					})), r.a.createElement(d.a, {
						onClick: t,
						disabled: a
					}, r.a.createElement(c.b, null)))), r.a.createElement(c.l, null, r.a.createElement(l.b, {
						placeholder: s.fbt._("Gender identity", null, {
							hk: "4lT15L"
						}),
						className: b.a.customGenderInput,
						disabled: a,
						maxLength: m.b,
						name: "customGender",
						onChange: this.handleCustomGenderChange,
						type: "text",
						value: n
					})), r.a.createElement(c.g, null, r.a.createElement(c.a, {
						onClick: t,
						disabled: a
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(c.r, {
						disabled: !this.inputsAreValid() || a,
						onClick: this.handleSubmit
					}, s.fbt._("Confirm", null, {
						hk: "2eSs27"
					}))))
				}
			}
			var f = Object(o.a)(g),
				h = n("./src/reddit/components/Settings/shared/Dropdown/index.tsx"),
				O = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				v = n("./src/reddit/components/Settings/GenderCollection/index.m.less"),
				x = n.n(v);
			const _ = () => [{
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
			class E extends r.a.Component {
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
					}, this.getGenderToggleCopy = () => this.props.showUpdatedAccountGenderCopy ? s.fbt._("This information may be used to improve your recommendations and ads.", null, {
						hk: "3vtjqc"
					}) : s.fbt._("Reddit will never share this information and only uses it to improve what content you see.", null, {
						hk: "1PqDkg"
					})
				}
				render() {
					const {
						isCustomGenderModalOpen: e,
						pending: t,
						tmpSelected: n
					} = this.state, {
						selected: a
					} = this.props, {
						definedGender: o,
						genderCategory: i
					} = {
						...t ? n : a
					};
					return r.a.createElement(O.c, {
						label: s.fbt._("Gender", null, {
							hk: "1spCV5"
						}),
						subtext: this.getGenderToggleCopy()
					}, r.a.createElement("div", {
						className: x.a.wrapper
					}, r.a.createElement(h.a, {
						dropdownId: "gender-dropdown-id",
						items: _(),
						onSelect: this.onSelect,
						placeholder: s.fbt._("Select", null, {
							hk: "1zIGi5"
						}),
						selectedKey: i || ""
					})), e && r.a.createElement(f, {
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
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/asTooltip.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/reddit/controls/Dropdown/index.tsx"),
				u = n("./src/reddit/controls/Dropdown/Row.tsx"),
				m = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				p = n("./src/reddit/selectors/tooltip.ts"),
				b = n("./src/reddit/components/Settings/shared/Dropdown/index.m.less"),
				g = n.n(b);
			const f = Object(i.a)(d.a),
				h = Object(o.c)({
					isDropdownOpen: (e, t) => Object(p.b)(t.dropdownId)(e)
				}),
				O = Object(r.b)(h, (e, t) => ({
					openDropdown: () => {
						e(Object(l.h)({
							tooltipId: t.dropdownId
						}))
					}
				}));
			class v extends a.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onToggleDropdown = () => {
						this.props.openDropdown()
					}, this.renderLabel = e => a.a.createElement(u.b, {
						className: g.a.dropdownRow,
						displayText: e.displayLabel || e.displayText,
						isSelected: !0,
						key: e.key,
						noHover: !0,
						noIcon: !e.icon
					}, e.contentJsx || e.icon), this.renderDropdownItem = (e, t) => a.a.createElement(u.b, {
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
						renderItem: r = this.renderDropdownItem,
						selectedKey: o,
						dropdownId: i
					} = this.props, l = n && {
						displayLabel: n,
						key: n
					}, d = t.find(e => e.key === o) || l || t[0];
					return a.a.createElement("div", {
						ref: this.setTooltipTargetRef,
						className: Object(c.a)(g.a.container, e.className),
						onClick: this.onToggleDropdown,
						"data-testid": i
					}, a.a.createElement("div", {
						className: g.a.labelWrapper
					}, s(d), a.a.createElement("span", null, a.a.createElement(m.b, null))), a.a.createElement(f, {
						tooltipTarget: this.tooltipTarget,
						isOpen: this.props.isDropdownOpen,
						renderContentsHidden: !0
					}, t.map(e => r(e, o === e.key))))
				}
			}
			t.a = O(v)
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
			n.d(t, "o", (function() {
				return U
			})), n.d(t, "l", (function() {
				return Y
			})), n.d(t, "p", (function() {
				return X
			})), n.d(t, "f", (function() {
				return $
			})), n.d(t, "m", (function() {
				return te
			})), n.d(t, "n", (function() {
				return re
			})), n.d(t, "q", (function() {
				return oe
			})), n.d(t, "k", (function() {
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
				return ve
			})), n.d(t, "c", (function() {
				return xe
			})), n.d(t, "e", (function() {
				return _e
			})), n.d(t, "h", (function() {
				return Ee
			})), n.d(t, "j", (function() {
				return Ce
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-uid/dist/es2015/hooks.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/higherOrderComponents/asTooltip.tsx"),
				u = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				m = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				p = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				b = n("./src/reddit/controls/Dropdown/index.tsx"),
				g = n("./src/reddit/controls/Dropdown/Row.tsx"),
				f = n("./src/reddit/controls/FormFields/index.tsx"),
				h = n("./src/lib/lessComponent.tsx"),
				O = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				v = n("./src/reddit/controls/Select/index.m.less"),
				x = n.n(v);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const E = h.a.span("Wrapper", x.a),
				C = h.a.select("Inner", x.a),
				j = h.a.wrapped(O.b, "Caret", x.a);

			function k(e) {
				let {
					className: t,
					innerClassName: n,
					...s
				} = e;
				const r = s.disabled ? {
					"data-disabled": s.disabled
				} : {};
				return a.a.createElement(E, {
					className: t
				}, a.a.createElement(C, _({
					className: n
				}, s)), a.a.createElement(j, _({
					isSubreddit: !0
				}, r)))
			}
			var S = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				y = n("./src/reddit/controls/Typography/index.tsx"),
				N = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				T = n("./src/reddit/icons/svgs/Circle/index.tsx"),
				I = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				w = n("./node_modules/lodash/range.js"),
				P = n.n(w),
				R = n("./src/reddit/controls/Button/index.tsx"),
				L = n("./src/reddit/layout/row/Inline/index.tsx"),
				F = n("./src/reddit/models/Flair/index.ts"),
				G = n("./src/reddit/selectors/tooltip.ts"),
				A = n("./src/reddit/selectors/user.ts"),
				B = n("./src/reddit/components/Settings/shared/Widgets.m.less"),
				D = n.n(B);

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const V = Object(d.a)(b.a),
				q = h.a.wrapped(T.a, "Circle", D.a),
				W = h.a.h3("Label", D.a),
				U = h.a.wrapped(y.c, "Subtext", D.a),
				H = h.a.wrapped(m.a, "HoverTooltip", D.a),
				z = h.a.div("ControlContainer", D.a),
				Q = h.a.div("TextContainer", D.a),
				K = h.a.div("ActionContainer", D.a),
				Y = e => {
					let {
						className: t,
						direction: n,
						isCreateCommunity: s,
						inModal: r,
						isNightModeOn: o,
						disabled: i,
						indent: l,
						last: d,
						...u
					} = e;
					return a.a.createElement("div", M({}, u, {
						className: Object(c.a)(D.a.Wrapper, t, {
							[D.a.mColumn]: "column" === n,
							[D.a.mDisabled]: !!i,
							[D.a.mIndent]: !!l,
							[D.a.mLast]: !!d,
							[D.a.isCreateCommunity]: !!s,
							[D.a.inModal]: !!r,
							[D.a.isNightModeOn]: !!o
						})
					}))
				},
				J = h.a.a("Link", D.a),
				X = h.a.wrapped(J, "SubtextLink", D.a),
				Z = h.a.wrapped(I.a, "LinkIcon", D.a),
				$ = h.a.button("LinkButton", D.a),
				ee = h.a.wrapped(N.a, "ArrowRight", D.a),
				te = e => a.a.createElement(Y, {
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					isCreateCommunity: e.isCreateCommunity,
					last: e.last
				}, a.a.createElement(Q, {
					className: e.textContainerClassName
				}, a.a.createElement(W, null, e.label, e.isRequired && a.a.createElement(q, null)), a.a.createElement(U, null, e.subtext)), a.a.createElement(K, null, e.children)),
				ne = h.a.div("StyledFlair", D.a),
				se = h.a.wrapped(ne, "SpoilerFlair", D.a),
				ae = h.a.wrapped(ne, "NSFWFlair", D.a),
				re = e => {
					switch (e.flair) {
						case F.f.Nsfw:
							return a.a.createElement(ae, null, "NSFW");
						case F.f.Spoiler:
							return a.a.createElement(se, null, "SPOILER");
						default:
							return null
					}
				},
				oe = e => {
					const t = Object(o.a)();
					return a.a.createElement(Y, {
						className: e.className,
						disabled: e.disabled,
						indent: e.indent,
						last: e.last
					}, a.a.createElement(Q, null, a.a.createElement(L.a, null, a.a.createElement("label", {
						htmlFor: t,
						className: e.labelClassname
					}, a.a.createElement(W, null, e.label))), a.a.createElement(U, null, e.subtext)), a.a.createElement(K, null, a.a.createElement(z, null, e.tooltip && a.a.createElement(H, {
						tooltipContentClass: e.tooltipContentClassName,
						text: e.tooltip
					}), a.a.createElement(S.a, {
						id: t,
						on: e.on,
						forceOn: e.forceOn,
						onToggle: e.onClick,
						disabled: e.disabled
					}))))
				},
				ie = h.a.input("RangeSliderInput", D.a),
				ce = h.a.div("RangeSlider", D.a),
				le = h.a.div("Ticks", D.a),
				de = h.a.div("TickText", D.a),
				ue = h.a.span("PreSubText", D.a),
				me = Object(i.c)({
					isNightModeOn: A.fb
				}),
				pe = Object(r.b)(me)(e => {
					const t = Object(o.a)();
					return a.a.createElement(Y, {
						last: e.last,
						indent: e.indent,
						disabled: e.disabled,
						inModal: e.inModal,
						isNightModeOn: e.isNightModeOn,
						direction: e.direction,
						className: e.className
					}, a.a.createElement(Q, {
						style: {
							flex: 5
						}
					}, !e.inModal && a.a.createElement(L.a, null, a.a.createElement("label", {
						htmlFor: t
					}, a.a.createElement(W, {
						className: e.labelClassname
					}, e.label))), !e.hideSubtext && a.a.createElement(U, null, " ", a.a.createElement(ue, {
						style: {
							color: e.ticks[e.value].color
						}
					}, " ", e.ticks[e.value].text + ": ", " "), " ", e.subtext)), a.a.createElement(K, {
						style: {
							flex: 3,
							margin: "20px 20px 0 0"
						}
					}, a.a.createElement(ce, null, a.a.createElement(ie, {
						id: t,
						style: {
							background: "linear-gradient(to right, " + P()(1, e.max + 1).map((t, n) => t <= e.value ? `${e.ticks[e.value].color} ${(t-1)/e.max*100}%,\n                    ${e.ticks[e.value].color} ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : t !== e.max ? `#c5c5c5 ${(t-1)/e.max*100}%, #c5c5c5 ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : `#c5c5c5 ${(t-1)/e.max*100}%`) + ", #C5C5C5 100%)"
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
					}), a.a.createElement(le, null, Object.keys(e.ticks).map((t, n) => a.a.createElement(de, {
						key: t,
						style: {
							color: t === e.value.toString() ? e.ticks[t].color : "#878A8C"
						}
					}, e.ticks[t].text))))))
				}),
				be = e => a.a.createElement(Y, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, a.a.createElement(Q, null, a.a.createElement(L.a, null, a.a.createElement(W, null, e.label)), a.a.createElement(U, null, e.subtext)), a.a.createElement(K, null, a.a.createElement(z, null, a.a.createElement(R.o, {
					onClick: e.onClick
				}, e.actionText)))),
				ge = e => a.a.createElement(Y, {
					className: e.className,
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, a.a.createElement(Q, null, a.a.createElement(J, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, e.label, a.a.createElement(Z, null)), a.a.createElement(U, null, e.subtext)), a.a.createElement(K, null, a.a.createElement(J, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, a.a.createElement(ee, null)))),
				fe = e => a.a.createElement(Y, {
					className: e.className,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, a.a.createElement(Q, null, a.a.createElement($, {
					onClick: e.onClick,
					className: Object(c.a)({
						[D.a.NoColor]: e.color && "none" === e.color
					})
				}, e.label), a.a.createElement(U, null, e.subtext)), a.a.createElement(K, null, !!e.hintText && a.a.createElement("div", {
					className: D.a.ActionHintText
				}, e.hintText), a.a.createElement($, {
					onClick: e.onClick,
					className: Object(c.a)({
						[D.a.NoColor]: e.color && "none" === e.color
					})
				}, a.a.createElement(ee, {
					className: Object(c.a)({
						[D.a.NoColor]: e.color && "none" === e.color
					})
				})))),
				he = Object(i.c)({
					isOpen: (e, t) => Object(G.b)(t.id)(e)
				}),
				Oe = Object(r.b)(he, (e, t) => ({
					openDropdown: () => {
						e(Object(l.h)({
							tooltipId: t.id
						}))
					}
				}))(e => a.a.createElement(Y, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, a.a.createElement(Q, null, a.a.createElement(W, null, e.label), a.a.createElement(U, null, e.subtext)), a.a.createElement(K, null, (e => a.a.createElement("div", {
					className: D.a.DropdownWrapper,
					onClick: e.openDropdown
				}, a.a.createElement("span", {
					className: D.a.Row,
					id: `SettingDropdown--${e.id}`
				}, e.displayTitle || e.selected), a.a.createElement(O.b, {
					className: D.a.DropdownTriangle
				}), a.a.createElement(V, {
					container: void 0,
					isOpen: e.isOpen,
					renderContentsHidden: !0,
					isOverlay: !1,
					tooltipId: `SettingDropdown--${e.id}`
				}, e.items.map((t, n) => a.a.createElement(g.b, {
					className: D.a.DropdownRow,
					displayText: e.displayItems ? e.displayItems[n] : t,
					isSelected: e.selected === t,
					onClick: () => e.onClick(t),
					key: "row--" + n,
					item: t
				}))), e.descriptions && a.a.createElement("div", {
					className: D.a.DescriptionsRow
				}, e.descriptions[e.items.indexOf(e.selected)] || e.displayItems && e.descriptions[e.displayItems.indexOf(e.selected)])))(e)))),
				ve = e => {
					let {
						disabled: t,
						last: n,
						onClick: r,
						onChange: o,
						...i
					} = e;
					const c = Object(s.useCallback)(e => o(e.target.value), [o]),
						{
							items: l
						} = i;
					return a.a.createElement(Y, {
						disabled: t
					}, a.a.createElement(Q, null, a.a.createElement("label", {
						htmlFor: i.id
					}, a.a.createElement(W, {
						className: i.labelClassname
					}, i.label)), a.a.createElement(U, null, i.subtext)), a.a.createElement("div", {
						className: D.a.Wrapper__LineBreak
					}), a.a.createElement(Y, {
						last: n,
						indent: !0,
						disabled: t
					}, a.a.createElement(k, {
						id: i.id,
						className: "redditStyle",
						disabled: t || i.inputDisabled,
						onChange: c,
						value: i.selected
					}, l.map(e => {
						let {
							value: t,
							displayName: n
						} = e;
						return a.a.createElement("option", {
							key: t,
							value: t
						}, n)
					}))))
				},
				xe = e => a.a.createElement(Y, {
					className: e.className,
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, a.a.createElement(Q, null, a.a.createElement(W, null, e.label), a.a.createElement(U, null, e.subtext)), a.a.createElement(K, null, e.children)),
				_e = e => a.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, e.isCreateCommunity && a.a.createElement("span", {
					className: D.a.tag
				}, "r/"), a.a.createElement(f.a, {
					className: e.isCreateCommunity ? D.a.input : void 0,
					disabled: !!e.disabled,
					onChange: e.onChange,
					placeholder: e.placeholder,
					maxLength: e.maxChars,
					type: "text",
					value: e.value,
					onBlur: e.onBlur
				}), !e.hideCountdown && a.a.createElement(u.a, {
					maxChars: e.maxChars,
					text: e.value
				})),
				Ee = e => a.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, a.a.createElement(p.i, {
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
				}), a.a.createElement("div", {
					className: D.a.MultiLineInputSettingsBottomRow
				}, !e.hideCountdown && a.a.createElement(u.a, {
					maxChars: e.maxChars,
					text: e.value || ""
				}), !!e.actionLink && a.a.createElement("div", {
					className: D.a.ActionLinkContainer
				}, e.actionLink))),
				Ce = e => a.a.createElement(Y, {
					className: e.className,
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, a.a.createElement(Q, null, a.a.createElement(W, null, e.label), a.a.createElement(U, null, e.subtext)), a.a.createElement(K, null, a.a.createElement(J, {
					href: e.link,
					onClick: e.onClick,
					"aria-label": e.linkLabel
				}, a.a.createElement(ee, null))))
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
				return l
			})), n.d(t, "m", (function() {
				return d
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
				return v
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "j", (function() {
				return _
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				r = n.n(a);
			const o = s.a.section("FormPage", r.a),
				i = s.a.h1("HomePageTitle", r.a),
				c = s.a.button("HomePageBreadcrumb", r.a),
				l = s.a.div("HomePageGroup", r.a),
				d = s.a.h1("FormPageTitle", r.a),
				u = s.a.div("FormPageSection", r.a),
				m = s.a.div("FormGroup", r.a),
				p = s.a.h2("FormGroupTitle", r.a),
				b = s.a.div("FormElement", r.a),
				g = s.a.div("FormGroupDescription", r.a),
				f = s.a.div("FormItem", r.a),
				h = s.a.h3("FormElementTitle", r.a),
				O = s.a.div("FormElementDescription", r.a),
				v = s.a.div("FormElementError", r.a),
				x = s.a.div("FormElementSubGroup", r.a),
				_ = s.a.li("FormListItem", r.a)
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
				return v
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/Input/ModalInput.tsx"),
				r = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				o = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				l = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				d = n.n(l);
			const u = s.a.wrapped(a.a, "ModalInput", d.a),
				m = s.a.input("Input", d.a),
				p = s.a.wrapped(c.a, "RadioOn", d.a),
				b = s.a.wrapped(i.a, "RadioOff", d.a),
				g = s.a.wrapped(r.a, "Checkbox", d.a),
				f = s.a.wrapped(o.a, "CheckboxSelected", d.a),
				h = s.a.textarea("Textarea", d.a),
				O = s.a.label("StyledLabel", d.a),
				v = s.a.input("StyledFileInput", d.a)
		},
		"./src/reddit/components/TopSubredditsWidget/index.m.less": function(e, t, n) {
			e.exports = {
				communityBannerPlaceholder: "_2-cUhM9bP2B5FPfQsDLJGR",
				glimmer: "NJdRTjquS3Maw_lWbQTkw",
				placeholderWrapper: "_2jtVdXcFC3Ioe3B_hXF5Eh",
				large: "_3WPeZCt6k7JXmTo4Kcf1vQ",
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
			var s, a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-dom/index.js"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx");
			! function(e) {
				e[e.Visible = 0] = "Visible", e[e.NotVisible = 1] = "NotVisible"
			}(s || (s = {})), t.a = Object(i.c)(class extends r.a.Component {
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
				return x
			})), n.d(t, "c", (function() {
				return _
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/uniqueId.js"),
				r = n.n(a),
				o = n("./node_modules/raf/index.js"),
				i = n.n(o),
				c = n("./node_modules/react/index.js"),
				l = n.n(c),
				d = n("./src/lib/classNames/index.ts"),
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
					return l.a.createElement("div", {
						className: g.a.wrapper
					}, l.a.createElement(p.a, {
						className: g.a.titleRow
					}, n), l.a.createElement("div", {
						className: g.a.detailsContainer
					}, t), l.a.createElement(p.a, {
						className: g.a.buttonRow
					}, l.a.createElement(m.l, {
						className: g.a.confirmButton,
						onClick: e.onConfirmed
					}, s.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				h = n("./src/reddit/controls/ErrorText/index.m.less"),
				O = n.n(h);
			class v extends l.a.Component {
				constructor(e) {
					super(e), this.spanRef = l.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${r()()}`,
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
						errorModalTitle: a = s.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: r = s.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: o,
						isModalOpen: i
					} = this.state;
					return l.a.createElement("div", {
						className: Object(d.a)(O.a.wrapper, t)
					}, l.a.createElement("span", {
						className: O.a.description,
						ref: this.spanRef
					}, e), o && l.a.createElement("span", {
						className: O.a.moreText,
						onClick: this.toggleModal
					}, r), i && l.a.createElement(f, {
						onConfirmed: this.toggleModal,
						title: a
					}, n || e))
				}
			}
			const x = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: s,
						fallbackMessage: a,
						messages: r = []
					} = e, o = r.length ? r : a ? [a] : [];
					return o.length ? l.a.createElement("div", {
						className: t
					}, o.map((e, t) => l.a.createElement(v, {
						className: n,
						errorModalTitle: s,
						key: t
					}, e))) : null
				},
				_ = e => l.a.createElement(x, {
					fallbackMessage: s.fbt._("Something went wrong", null, {
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
				return g
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return v
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/ErrorText/index.tsx"),
				c = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = n("./src/reddit/controls/FormFields/index.m.less"),
				u = n.n(d);

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
					const l = void 0 !== c.value && "" !== c.value;
					return a.a.createElement("div", {
						className: Object(r.a)(u.a.inputWrapper, o, {
							[u.a.mIsInvalid]: i
						}),
						onClick: b
					}, a.a.createElement(p, m({
						"aria-invalid": i,
						innerRef: s
					}, c)), t && a.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: l
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
						...l
					} = e;
					const d = void 0 !== l.value && "" !== l.value;
					return a.a.createElement("div", {
						className: Object(r.a)(u.a.inputMovingLabelWrapper, i, {
							[u.a.mIsInvalid]: o,
							[u.a.mIsRedditStyle]: c
						}),
						onClick: b
					}, a.a.createElement(p, m({
						innerRef: s
					}, l)), t && a.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: d
						})
					}, t), n)
				},
				h = e => a.a.createElement("div", {
					className: Object(r.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", a.a.createElement(c.a, {
					className: u.a.plus
				}));
			var O;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(O || (O = {}));
			class v extends a.a.Component {
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
						errors: r = []
					} = this.props;
					return e.map((e, o) => a.a.createElement(g, {
						inputRef: e => this.setInputRef(e, o),
						isInvalid: !!r[o],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, o),
						placeholder: s,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, a.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(o)
					}, a.a.createElement(l.b, {
						className: u.a.trash
					})), !!r[o] && a.a.createElement(i.b, {
						className: u.a.errorText
					}, r[o])))
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
					return a.a.createElement("div", {
						className: Object(r.a)(u.a.multiInputWrapper, e)
					}, t && c && a.a.createElement(h, {
						onClick: this.addValue,
						text: o
					}), this.renderFields(), !t && c && a.a.createElement(h, {
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
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = n.n(o);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: s = 10
				} = e;
				return a.a.createElement("div", {
					className: Object(r.a)(i.a.loadingIcon, n, {
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
				return l
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			}));
			var s = n("./src/config.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				r = n("./src/reddit/constants/headers.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts"),
				i = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				c = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function l(e, t) {
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

			function d(e, t) {
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
				return Object(o.a)(Object(a.a)(e, [r.a]), {
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
		"./src/reddit/endpoints/onboarding/languageSelections.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/makeGqlRequest/index.ts");
			var a, r = n("./src/redditGQL/operations/LanguageSelections.json"),
				o = n("./src/redditGQL/operations/UpdateSpokenLanguagesPreference.json");
			! function(e) {
				e.ALL_KEY = "all_languages_simple", e.SUGGESTED_KEY = "suggested_languages", e.TOP_KEYS = "top_languages"
			}(a || (a = {}));
			const i = (e, t) => {
					const n = {
						allKey: e,
						suggestedKey: a.SUGGESTED_KEY
					};
					return Object(s.a)(t, {
						...r,
						variables: n
					})
				},
				c = async e => {
					const t = await i(a.ALL_KEY, e());
					if (!t.ok) return null;
					const n = t.body,
						s = null == n ? void 0 : n.data;
					return s ? (e => {
						const t = {},
							n = e.identity.preferences.spokenLanguages || [];
						return e.all.map(e => {
							t[e.isoCode] = e.translatedDisplayName
						}), {
							languages: t,
							preferences: n
						}
					})(s) : null
				}, l = async (e, t, n) => {
					const s = await i(e, t());
					if (!s.ok) return null;
					const r = s.body,
						o = null == r ? void 0 : r.data;
					if (o) {
						return ((e, t, n) => {
							let s = null,
								a = [];
							const r = [],
								o = [],
								i = {},
								c = {};
							if (!e) {
								t.identity.preferences.spokenLanguages.map(e => {
									c[e] = !0
								})
							}
							for (let l = 0; l < t.suggested.length; l++) {
								const a = t.suggested[l];
								if (i[a.isoCode] = !0, n === a.isoCode) s = a;
								else {
									if (!e && c[a.isoCode]) continue; {
										const t = !!(e || !e && c[a.isoCode]);
										r.push({
											selected: t,
											...a
										})
									}
								}
							}
							for (let l = 0; l < t.all.length; l++) {
								const r = t.all[l];
								r.isoCode === n ? (s = r, o.push({
									selected: !0,
									...r
								})) : !e && c[r.isoCode] ? o.push({
									selected: !0,
									...r
								}) : i[r.isoCode] || a.push({
									selected: !(e || !c[r.isoCode]),
									...r
								})
							}
							if (a = r.concat(a), null === s) {
								const e = n.split("-").shift();
								for (let t = 0; t < a.length; t++)
									if (a[t].isoCode === e) {
										s = a[t], a.splice(t, 1);
										break
									}
							}
							return s && ((e || !e && c[s.isoCode]) && (s.selected = !0), a.unshift(s)), e || (a = o.concat(a)), {
								sortedLanguages: a
							}
						})(e === a.TOP_KEYS, o, n)
					}
					return null
				}, d = async (e, t) => {
					const n = await ((e, t) => {
						const n = {
							input: {
								spokenLanguages: t
							}
						};
						return Object(s.a)(e, {
							...o,
							variables: n
						})
					})(e(), Object.keys(t));
					if (!n.ok) return null;
					const a = n.body;
					return null == a ? void 0 : a.data
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
				a = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = n.n(a);
			const o = e => {
					let {
						isLoading: t
					} = e;
					return Object(s.a)(r.a.loadingBackground, {
						[r.a["m-loading"]]: t
					})
				},
				i = e => Object(s.a)(r.a.loadingBar, o(e))
		},
		"./src/reddit/hooks/useToast.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				a = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/reddit/models/Toast/index.ts");

			function i() {
				const e = Object(a.d)();
				return Object(s.useCallback)(t => e(Object(r.f)(t)), [e])
			}

			function c() {
				const e = i();
				return Object(s.useCallback)((t, n) => e({
					duration: 5e3,
					kind: o.b.Error,
					...n,
					text: t
				}), [e])
			}
		},
		"./src/reddit/icons/svgs/CommunityDefault/filled.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", r({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), a.a.createElement("path", {
				d: "M16.5,2.924,11.264,15.551H9.91L15.461,2.139h.074a9.721,9.721,0,1,0,.967.785ZM8.475,8.435a1.635,1.635,0,0,0-.233.868v4.2H6.629V6.2H8.174v.93h.041a2.927,2.927,0,0,1,1.008-.745,3.384,3.384,0,0,1,1.453-.294,3.244,3.244,0,0,1,.7.068,1.931,1.931,0,0,1,.458.151l-.656,1.558a2.174,2.174,0,0,0-1.067-.246,2.159,2.159,0,0,0-.981.215A1.59,1.59,0,0,0,8.475,8.435Z"
			}))
		},
		"./src/reddit/models/Gender/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return a
				})),
				function(e) {
					e.FEMALE = "FEMALE", e.MALE = "MALE", e.NON_BINARY = "NON_BINARY", e.OPT_OUT = "OPT_OUT", e.USER_DEFINED = "USER_DEFINED"
				}(s || (s = {}));
			const a = 50
		},
		"./src/reddit/reducers/features/liveBar/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/actions/liveBar/index.ts");
			const a = {
				items: []
			};
			t.a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
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
		"./src/reddit/selectors/experiments/econ/marketplace.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const o = e => {
					return !(Object(a.c)(e, {
						experimentEligibilitySelector: a.a,
						experimentName: s.xe
					}) === s.Pd)
				},
				i = Object(r.a)(s.ye)
		},
		"./src/redditGQL/operations/Frontpage.json": function(e) {
			e.exports = JSON.parse('{"id":"8549ad3368a5"}')
		},
		"./src/redditGQL/operations/GetAccountGender.json": function(e) {
			e.exports = JSON.parse('{"id":"1508e05ea2ee"}')
		},
		"./src/redditGQL/operations/GetNearbySubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"1ea6a2fd1417"}')
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
			e.exports = JSON.parse('{"id":"655eef09fadc"}')
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OnboardingModal.8b63aa91400690407f73.js.map