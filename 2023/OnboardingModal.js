// https://www.redditstatic.com/desktop2x/OnboardingModal.da94f5fa75e6930b73a9.js
// Retrieved at 7/6/2023, 5:40:04 PM by Reddit Dataminer v1.0.0
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
					l = c(e, i);
				t = r(t), e -= i;
				for (var d = s(l, t); ++n < e;) t(n);
				return d
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
				return l
			})), n.d(t, "b", (function() {
				return d
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
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/GetAccountGender.json"),
				c = n("./src/redditGQL/operations/UpdateAccountGender.json");
			var l = n("./src/reddit/models/Toast/index.ts"),
				d = n("./src/reddit/actions/accountGender/constants.ts");
			const u = () => async (e, t, n) => {
				let {
					gqlContext: s
				} = n;
				var r, a;
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
					})(null === (a = null === (r = null == l ? void 0 : l.data) || void 0 === r ? void 0 : r.piiIdentity) || void 0 === a ? void 0 : a.gender);
				d && e(m(d))
			}, m = Object(r.a)(d.a), p = e => async (t, n, r) => {
				let {
					gqlContext: i
				} = r;
				const d = {
					customGender: e.definedGender,
					genderEnum: e.genderCategory
				};
				(await ((e, t) => Object(o.a)(e, {
					...c,
					variables: t
				}))(i(), {
					input: d
				})).ok ? (t(b(e)), t(Object(a.f)({
					kind: l.b.SuccessCommunity,
					text: s.fbt._("Changes saved", null, {
						hk: "2isjrZ"
					})
				}))) : (t(g()), t(Object(a.f)({
					kind: l.b.Error,
					text: s.fbt._("Changes failed to save", null, {
						hk: "XrtIq"
					})
				})))
			}, b = Object(r.a)(d.b), g = Object(r.a)(d.c)
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			})), n.d(t, "b", (function() {
				return w
			}));
			var s, r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/performanceTimings/index.tsx"),
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
				v = (e, t, n, s, r) => {
					const a = r.find(e => e <= t) || -1,
						o = r.find(e => e > t) || 1 / 0;
					return t !== o && t !== a && (!(a + n > t) && (!(t + n > o) && !((e, t, n) => {
						const s = n[t - 1],
							r = n[t],
							a = r && Object(b.F)(e, {
								postId: s
							}) || null,
							o = r && Object(b.F)(e, {
								postId: r
							}) || null;
						return a && a.isSponsored || o && o.isSponsored
					})(e, t, s)))
				},
				x = [3];
			Object(m.a)((e, t) => {
				let {
					existingDUPositions: n,
					listingProps: s
				} = t;
				const r = n.slice().sort();
				let a = -1;
				const o = Object(b.y)(e, {
						listingKey: s.listingKey
					}),
					i = [];
				return x.forEach(t => {
					let n = a + t;
					if (!(n >= o.length)) {
						for (; n < o.length && !v(e, n, t, o, r);) n += 1;
						n < o.length && (i.push(n), a = n)
					}
				}), i
			});
			var _ = n("./src/reddit/selectors/platform.ts");
			const E = Object(r.a)(o.f),
				C = Object(r.a)(o.d),
				j = Object(r.a)(o.g),
				k = Object(r.a)(o.c),
				S = Object(r.a)(o.e),
				y = (Object(r.a)(o.i), Object(r.a)(o.h), () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					const a = t(),
						o = (e => {
							return e.focusedVerticals.api.pending.focusedVerticalGqlPending
						})(a),
						l = (e => {
							const t = Object(f.R)(e),
								n = p.d.geoSubredditRecommendationDULoggedIn(e),
								s = p.d.geoSubredditRecommendationDULoggedOut(e);
							return t && n || !t && s
						})(a),
						m = Object(f.R)(a);
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
							}))(r(), t);
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
											interactedSubreddit: r,
											category: a
										} = n.focusRecommendations[0],
										o = [s, r],
										i = Object(u.d)(o),
										c = Object(d.b)(o),
										l = Object(u.c)(s),
										m = {
											recommendedSubredditIds: [s.id],
											interactedSubredditIds: [r.id],
											subreddits: i,
											subredditsAboutInfo: c,
											subredditTopContent: l,
											category: a,
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
					var s, r;
					const o = t(),
						i = (e => e.focusedVerticals.lastLoadedEnv)(o);
					if ((e => {
							return e.focusedVerticals.api.error.focusedVerticalGqlError
						})(o) || null === i || "client" === i) {
						const n = null === (r = null === (s = Object(_.b)(t())) || void 0 === s ? void 0 : s.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
							i = Object(f.S)(o);
						return Object(a.i)(() => e(y()), {
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
				return ye
			})), n.d(t, "frontpageLoaded", (function() {
				return Ne
			})), n.d(t, "frontpageFailed", (function() {
				return Te
			})), n.d(t, "frontpageFirstLoaded", (function() {
				return Ie
			})), n.d(t, "frontpageDataRequested", (function() {
				return we
			})), n.d(t, "frontpageRequestedHelper", (function() {
				return Pe
			})), n.d(t, "frontpageRequested", (function() {
				return Le
			})), n.d(t, "frontpageReloaded", (function() {
				return Ge
			})), n.d(t, "morePostsPending", (function() {
				return Ae
			})), n.d(t, "morePostsLoaded", (function() {
				return Be
			})), n.d(t, "morePostsFailed", (function() {
				return De
			})), n.d(t, "morePostsRequested", (function() {
				return Me
			})), n.d(t, "refreshFeed", (function() {
				return Ve
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/pick.js"),
				a = n.n(r),
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
				x = n("./src/reddit/helpers/ads/index.ts"),
				_ = n("./src/reddit/helpers/graphql/normalizeInterestTopicsFromGql/index.ts"),
				E = n("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				C = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				j = n("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				k = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				S = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				y = n("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				N = n("./src/reddit/models/FeedElement/index.ts");

			function T(e) {
				return e.__typename === N.a.FreeNftFeedElement
			}
			const I = ["body", "url", "title"];

			function w(e) {
				if (e.__typename === N.a.MerchandisingUnit) {
					const t = e,
						n = I.filter(e => null == t[e]);
					return !n.length || (p.c.withScope(e => {
						e.setExtra("announcementId", t.id), p.c.captureException(`Fields [${n.join(", ")}] missing from announcement.`)
					}), !1)
				}
				return !1
			}

			function P(e, t) {
				return {
					feedElement: e,
					feedPosition: t
				}
			}
			var R = n("./src/reddit/models/NotificationInbox/index.ts"),
				L = n("./src/reddit/selectors/adsSignals.ts"),
				F = n("./src/reddit/selectors/experiments/econ/marketplace.ts"),
				G = n("./src/reddit/selectors/experiments/onboarding.ts"),
				A = n("./src/reddit/selectors/frontpage.ts"),
				B = n("./src/reddit/selectors/platform.ts"),
				D = n("./src/reddit/selectors/user.ts"),
				M = n("./src/reddit/selectors/userPrefs.ts"),
				V = n("./src/redditGQL/operations/Frontpage.json"),
				q = n("./src/lib/initializeClient/installReducer.ts"),
				H = n("./src/reddit/reducers/features/marketplace/index.ts"),
				U = n("./src/redditGQL/types.ts");
			Object(q.a)({
				features: {
					marketplace: H.a
				}
			});
			const W = (e, t) => {
					var n, s;
					const {
						after: r,
						dist: a,
						isMobile: o,
						layout: i,
						limit: l,
						sort: d,
						t: u,
						correlationId: m
					} = t, p = Object(G.j)(e), h = Object(D.bb)(e) || Object(D.S)(e), O = Object(A.b)(e), v = Object(B.q)(e), {
						adsSeenCount: x,
						totalPostsSeenCount: _,
						sessionStartTime: E
					} = Object(L.a)(e), C = {
						adContext: {
							layout: i ? i.toUpperCase() : g.a.Card,
							distance: a,
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
						includeInterestTopics: !!p && !Object(b.Lg)(p),
						includeFeaturedAnnouncements: !0,
						includeLiveEvents: !0,
						includeIdentity: h && !(null === (s = null === (n = e.user.account) || void 0 === n ? void 0 : n.karma) || void 0 === s ? void 0 : s.total),
						includePostRecommendations: !0,
						includeFreeMarketplaceElement: Object(F.a)(e),
						includeSubredditQuestions: h,
						includeExposureEvents: !!t.isFirstLoad,
						recentPostIds: e.posts.recent
					};
					return O ? (C.sort = U.N.Best, C.feedRankingContext.variant = "lo_d2x_def_pop") : d && (C.sort = d.toUpperCase()), C.feedRankingContext.loggedOutAllowNsfw = Object(M.a)(e), u && (C.range = u.toUpperCase()), o ? C.pageSize = Object(f.a)(i) : l && (C.pageSize = l), v && v.ad && (C.forceAds = {
						ad: v.ad
					}), r && (C.after = Object(c.a)(r)), C
				},
				z = async (e, t, n, s) => {
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
							const l = [],
								u = [];
							let m, b, g, f;
							const N = {
									postIds: [],
									postInstances: {},
									posts: {},
									postFlair: {},
									profiles: {},
									subreddits: {},
									merchandisingUnitAnnouncements: []
								},
								I = e => {
									if (N.posts[e.id]) return e.id;
									const t = Object(C.f)(e);
									N.posts[t.id] = t;
									const {
										crosspostRoot: n
									} = e;
									n && n.type === v.a.Post && n.postInfo && I(n.postInfo), Object(v.o)(e).forEach(I);
									let s = t.id;
									if (Object(v.l)(e)) N.profiles[e.profile.id] || (N.profiles[e.profile.id] = Object(k.a)(e.profile));
									else if (Object(v.n)(e)) N.subreddits[e.subreddit.id] || (N.subreddits[e.subreddit.id] = Object(S.a)(e.subreddit)), N.postFlair[e.subreddit.id] || (N.postFlair[e.subreddit.id] = Object(E.a)(e.subreddit));
									else if (Object(v.h)(e)) {
										const n = Object(C.b)(e),
											r = e.impressionId;
										if (!n) return null;
										s = n;
										const a = Object(x.b)(t.permalink, n, r);
										N.posts[n] = {
											...t,
											id: n,
											permalink: a
										}, N.posts[t.id] || (N.posts[t.id] = {
											...t,
											events: []
										}), N.postInstances[e.id] || (N.postInstances[e.id] = []), N.postInstances[e.id].push(n)
									}
									return s
								};
							for (const d of t) {
								const e = Object(S.a)(d);
								N.subreddits[e.id] = e, l.push(e.id)
							}
							for (const [x, {
									node: E
								}] of s.elements.edges.entries())
								if (Object(v.k)(E)) {
									const e = I(E);
									e && N.postIds.push(e)
								} else if (Object(v.m)(E)) {
								if (!E.recommendationContext || !E.postInfo) {
									const e = "Received empty PostRecommendation element when processing frontpage data.";
									Object(d.b)() || console.warn(e), p.c.captureMessage(e);
									continue
								}
								const {
									content: e,
									isContextHidden: t,
									subreddit: n,
									typeIdentifier: s
								} = E.recommendationContext;
								if (E.postInfo && (null == e ? void 0 : e.richtext)) {
									const r = I(E.postInfo);
									r && (N.postIds.push(r), N.posts[r].recommendationContext = {
										content: Object(C.d)(e.richtext),
										isContextHidden: t,
										source: {
											source: null == s ? void 0 : s.toLowerCase(),
											subredditId: null == n ? void 0 : n.id,
											subredditName: null == n ? void 0 : n.prefixedName
										}
									})
								}
							} else if (Object(h.c)(E) && !m) m = E;
							else if (Object(O.g)(E)) {
								const e = null === (i = null == E ? void 0 : E.interestTopicRecommendations) || void 0 === i ? void 0 : i.recommendationTopics;
								if (e) {
									const t = Object(_.a)(e);
									t.topics.length && (g = {
										interests: t,
										index: x
									})
								}
							} else if (T(E) && !b) b = {
								element: E,
								index: s.elements.edges.findIndex(e => e.node === E)
							};
							else if (Object(R.d)(E) && (null === (c = null == E ? void 0 : E.notifications) || void 0 === c ? void 0 : c.length)) f = {
								notifications: E.notifications,
								position: x,
								id: E.id
							};
							else if (w(E)) null != E.id && N.merchandisingUnitAnnouncements.push(P(E, x));
							else {
								const e = `Received unhandled element type when processing frontpage data: "${E.__typename}"`;
								Object(d.b)() || console.warn(e), p.c.captureMessage(e)
							}
							for (const d of a) {
								if (!d) continue;
								const e = I(d);
								e && u.push(e)
							}
							const L = N.postIds.length - 1,
								F = L >= 0 ? N.postIds[L] : "",
								G = s.elements.dist,
								A = s.elements.geoFilter;
							return {
								...N,
								account: n && Object(y.a)(n) || null,
								featuredLiveThread: m,
								marketplaceFeedElement: b,
								interestTopicRecommendations: g,
								announcements: r,
								notifications: f,
								liveBarContent: o,
								preferences: n && n.preferences && Object(j.a)(n.preferences, n.interactions) || null,
								...0 !== l.length && {
									trendingSubredditIds: l
								},
								...0 !== u.length && {
									recentPostIds: u
								},
								token: F,
								...null !== G && {
									dist: G
								},
								...null !== A && {
									geoFilter: A
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
							name: l.t.FRONTPAGE,
							isLoggedIn: n,
							metrics: c,
							statsdPathsForExperiments: s
						})
					} catch (c) {
						const e = "Error normalizing front page posts";
						Object(d.b)() || console.error(e, c), p.c.captureException(c)
					}
					return {
						...a,
						body: i
					}
				};
			var Q = n("./src/lib/pageTitle/index.ts"),
				K = n("./src/lib/pageTitle/helpers.ts"),
				Y = n("./src/reddit/actions/login.ts"),
				X = n("./src/reddit/actions/meta.ts"),
				J = n("./src/reddit/actions/platform.ts"),
				Z = n("./src/reddit/actions/toaster.ts"),
				$ = n("./src/reddit/constants/history.ts"),
				ee = n("./src/reddit/constants/page.ts"),
				te = n("./src/reddit/constants/parameters.ts"),
				ne = n("./src/reddit/constants/postLayout.ts"),
				se = n("./src/reddit/contexts/PageLayer/index.tsx"),
				re = n("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				ae = n("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				oe = n("./src/reddit/models/Toast/index.ts"),
				ie = n("./src/reddit/selectors/experiments/chat.ts"),
				ce = n("./src/reddit/selectors/experiments/countrySites.ts"),
				le = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				de = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				ue = n("./src/reddit/selectors/runTimeEnvVars.ts"),
				me = n("./src/lib/makeActionCreator/index.ts"),
				pe = n("./src/lib/makeListingKey/index.ts"),
				be = n("./src/reddit/actions/ads/index.ts"),
				ge = n("./src/reddit/helpers/chooseVariant/index.ts"),
				fe = n("./src/reddit/helpers/counters/loggedOutOneFeed.ts"),
				he = n("./src/reddit/helpers/trackers/feed.ts"),
				Oe = n("./src/reddit/models/LoggedOutOneFeed/index.ts"),
				ve = n("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				xe = n("./src/reddit/actions/seo/linksModule.ts"),
				_e = n("./src/reddit/selectors/seo/linksModule.ts"),
				Ee = n("./src/lib/sample/index.ts"),
				Ce = n("./src/reddit/actions/liveBar/index.ts"),
				je = n("./src/reddit/helpers/filterListingResponse/index.ts"),
				ke = n("./src/reddit/actions/frontpage/constants.ts"),
				Se = n("./node_modules/uuid/dist/esm-browser/v4.js");
			const ye = Object(me.a)(ke.d),
				Ne = Object(me.a)(ke.c),
				Te = Object(me.a)(ke.a),
				Ie = Object(me.a)(ke.b),
				we = (e, t) => async (n, r, a) => {
					var i, c, l, d, u, p, b, g;
					const f = r();
					if (f.listings.postOrder.api.pending[e]) return;
					const h = ne.e[Object(se.U)(f, {})];
					t.isFirstLoad = f.frontPageFirstLoaded, t.isMobile = Object(o.e)(f.meta.userAgent), t.recentPostIds = f.posts.recent, t.layout = h, t.useMockData = !!f.platform.currentPage && (!!f.platform.currentPage.queryParams.useMockData && Object(ue.b)(f)), n(ye({
						key: e
					})), n(Ie(!1)); {
						const e = f.platform.currentPage,
							n = e && e.url;
						n && (t.clickUrl = n)
					}
					const O = Object(Se.a)();
					t.correlationId = O;
					const v = null === (c = null === (i = Object(B.b)(f)) || void 0 === i ? void 0 : i.routeMatch) || void 0 === c ? void 0 : c.route.chunk,
						x = Object(D.S)(f),
						_ = await Object(m.i)(() => z(a.gqlContext(), W(r(), t), Object(D.bb)(f), t.statsdPathsForExperiments), {
							name: "fetchFrontpageData",
							isLoggedIn: x,
							page: v
						});
					n(Object(J.o)(_.status));
					const E = `error-${e}`;
					if (_.ok && _.body) {
						const s = _.body;
						n(Ne({
							key: e,
							meta: f.meta,
							correlationId: O,
							...s
						})), n(Z.g(E)), s.geoFilter && n(Object(X.k)(s.geoFilter)), s.liveBarContent && n(Object(Ce.b)(Object(ie.b)(f) ? null !== (u = null === (d = null === (l = s.liveBarContent) || void 0 === l ? void 0 : l.items) || void 0 === d ? void 0 : d.edges.map(e => e.node)) && void 0 !== u ? u : [] : null === (p = s.liveBarContent.posts) || void 0 === p ? void 0 : p.map(e => ({
							post: e,
							__typename: "LiveBarTalk"
						})))), n(Object(be.b)(ve.a.FRONTPAGE));
						const a = null === (g = null === (b = Object(B.b)(f)) || void 0 === b ? void 0 : b.locationState) || void 0 === g ? void 0 : g[$.b.FeedLoadReason];
						Object(he.b)(t.isRefresh ? $.a.UserRefresh : null != a ? a : $.a.InitialLoad)(r())
					} else {
						n(Te({
							error: _.error,
							key: e,
							..._.body
						})), n(Z.f({
							id: E,
							kind: oe.b.Error,
							text: s.fbt._("Sorry, we couldn't load posts for this page.", null, {
								hk: "36ypKx"
							}),
							buttonText: s.fbt._("Retry", null, {
								hk: "1XMjgA"
							}),
							buttonAction: we(e, t)
						})), Object(Ee.a)(f, {
							rate: 14
						}) && Object(fe.a)(_.ok ? Oe.a.ParseError : Oe.a.XhrError, x ? Oe.b.LoggedIn : Oe.b.OneFeed);
						const a = _.error;
						Object(he.a)(a ? `${_.status||"000"}: ${a.type}` : "000: UNKNOWN_ERROR")(r())
					}
				}, Pe = (e, t) => async (n, s) => {
					var r;
					const o = s(),
						i = Object(A.a)(o),
						{
							sort: c = i
						} = e.params,
						d = Object(pe.a)(ee.b, c, e.queryParams),
						u = o.listings.postOrder.ids[d],
						m = o.listings.postOrder.api.error[d],
						p = o.listings.postOrder.api.pending[d],
						b = Object(ce.b)(o),
						g = te.H in e.queryParams && e.queryParams[te.H].toUpperCase() || "",
						f = g in l.oc && l.oc[g],
						h = Q.e();
					if (p || u && !m && !t) return void(u && (n(J.n({
						title: b ? Object(K.a)(o, h) : h
					})), (null === (r = o.listings.postOrder.correlationIds) || void 0 === r ? void 0 : r[d]) && n(J.p({
						correlationId: o.listings.postOrder.correlationIds[d]
					})), o.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						n(Object(be.b)(ve.a.FRONTPAGE))
					})));
					const O = Object(re.a)(o),
						v = Object(re.b)(O),
						x = [Object(re.c)(O)];
					await n(we(d, {
						...a()(e.queryParams, te.p),
						...a()(e.queryParams, te.o),
						limit: v,
						sort: c,
						statsdPathsForExperiments: x,
						t: Object(ae.a)(c, f)
					})), n(J.n({
						title: b ? Object(K.a)(o, h) : h
					})), Object(ge.c)(o, {
						experimentEligibilitySelector: ge.a,
						experimentName: "redesign_aa"
					});
					const _ = Object(le.a)(o, {});
					Object(le.e)(_) && n(Object(Y.openRegisterModal)())
				}, Re = () => async (e, t) => {
					var n, s;
					const r = t();
					if (Object(_e.a)(r)) return;
					const a = null === (s = null === (n = Object(B.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === s ? void 0 : s.route.chunk,
						o = Object(D.S)(r);
					return Object(m.i)(() => e(Object(xe.d)()), {
						name: "frontpageLinksRequested",
						page: a,
						isLoggedIn: o
					})
				}, Le = (e, t) => async n => {
					await Promise.all([n(Object(i.b)()), n(Pe(e, t)), n(Re())])
				}, Fe = Object(me.a)(ke.e), Ge = e => async (t, n) => {
					const s = n(),
						r = s.platform.currentPage.routeMatch.match;
					Object(de.p)(s) || Object(de.v)(s) || (e || t(Fe()), await t(Le(r, !0)))
				}, Ae = Object(me.a)(ke.h), Be = Object(me.a)(ke.g), De = Object(me.a)(ke.f), Me = e => async (t, n, s) => {
					let {
						gqlContext: r
					} = s;
					const i = n(),
						c = Object(A.a)(i),
						{
							sort: d = c
						} = e,
						u = i.platform.currentPage ? i.platform.currentPage.queryParams : {},
						m = Object(pe.a)(ee.b, d, u),
						p = i.listings.postOrder.loadMore[m],
						b = u[te.H] ? u[te.H].toUpperCase() : "",
						g = b in l.oc && l.oc[b];
					if (p) {
						const e = i.listings.postOrder.api.pending[m],
							s = i.listings.postOrder.fetchedTokens,
							c = !(!s[m] || !s[m][p.token]);
						if (!e && !c) {
							t(Ae({
								key: m,
								fetchedToken: p.token
							}));
							const e = !!i.platform.currentPage && !!i.platform.currentPage.queryParams.useMockData,
								s = Object(re.a)(i),
								c = ne.a,
								l = [Object(re.c)(s)],
								b = {
									after: p.token,
									dist: p.dist,
									...a()(u, te.p),
									isMobile: Object(o.e)(i.meta.userAgent),
									limit: c,
									sort: d,
									t: Object(ae.a)(d, g),
									layout: ne.e[Object(se.U)(i, {})],
									useMockData: e
								}; {
								const e = i.platform.lastPage,
									t = e && e.url;
								t && (b.clickUrl = t)
							}
							b.correlationId = i.listings.postOrder.correlationIds[m];
							const f = () => z(r(), W(i, b), Object(D.bb)(i), l),
								h = await f(),
								O = {
									...h.body,
									...Object(je.a)(i, m, h.body)
								};
							if (h.ok) t(Be({
								key: m,
								fetchedToken: p.token,
								meta: i.meta,
								...O
							})), Object(he.b)($.a.NextPageLoad)(n());
							else {
								t(De({
									key: m,
									error: h.error,
									fetchedToken: p.token,
									...O
								}));
								const e = h.error;
								Object(he.a)(e ? `${h.status||"000"}: ${e.type}` : "000: UNKNOWN_ERROR")(n())
							}
						}
					}
				}, Ve = e => async (t, n) => {
					const s = n(),
						r = Object(A.a)(s),
						{
							sort: a = r
						} = e,
						o = s.platform.currentPage ? s.platform.currentPage.queryParams : {},
						i = Object(pe.a)(ee.b, a, o),
						c = o[te.H] ? o[te.H].toUpperCase() : "",
						d = c in l.oc && l.oc[c],
						u = Object(re.a)(s),
						m = Object(re.b)(u);
					await t(we(i, {
						limit: m,
						sort: a,
						t: Object(ae.a)(a, d),
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
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => r.a.createElement(o.b, {
				className: Object(a.a)(e.className, c.a.container, e.text.length >= e.maxChars ? c.a.mOverflow : null)
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
				r = n.n(s),
				a = n("./src/reddit/controls/Button/index.tsx"),
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
				return r.a.createElement(a.t, {
					className: Object(o.a)(l.a.InterestButton, {
						[l.a.Selected]: n
					}),
					kind: a.b.Button,
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
				r = n.n(s),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
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
					Object(a.useEffect)(() => {
						(null == e ? void 0 : e.csrf_token) || t(Object(v.c)())
					}, []);
					const r = Object(a.useCallback)(async () => {
							t(Object(v.d)())
						}, [t]),
						o = Object(a.useCallback)(async () => {
							if (n(Object(x.a)("save_and_continue")), e && s) {
								n(Object(x.f)("onboarding"));
								try {
									return await t(Object(v.e)(s.accessoryIds, {}, {
										set_avatar_to_profile: !0,
										source: "web_onboarding"
									})), !0
								} catch (r) {
									O.c.captureException(r)
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
						fetchRandomAvatar: r,
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
						setSelectedGenderOption: r
					} = e;
					const i = Object(_.a)(),
						c = Object(I.b)();
					n && c.splice(3, 1);
					const l = Object(a.useRef)(null),
						d = Object(a.useRef)([]),
						[m, p] = Object(a.useState)((null == s ? void 0 : s.definedGender) || "");
					Object(a.useEffect)(() => {
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
						g = Object(a.useCallback)(e => {
							var t;
							i(Object(F.n)()), r(b(e)), A(e) && (null === (t = l.current) || void 0 === t || t.focus())
						}, [i, r]),
						f = Object(a.useCallback)(e => {
							g(e.value), e.focus()
						}, [g]),
						h = Object(a.useCallback)(e => {
							if (!s || !A(s.genderCategory)) {
								const t = d.current[e];
								t && g(t.value)
							}
						}, [g, s]),
						O = (e, n) => {
							const a = A(e.key);
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
							}), a ? o.a.createElement("input", {
								className: R.a.genderUserDefinedInput,
								"data-testid": `${e.key}-input`,
								onChange: () => r(b(e.key)),
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
										e.keyCode === u.L && (null === (n = d.current[t]) || void 0 === n || n.focus())
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
				fbt: H
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var U = e => {
					let {
						avatarImage: t,
						fetchRandomAvatar: n
					} = e;
					const s = Object(_.a)();
					Object(a.useEffect)(() => {
						s(Object(x.p)())
					}, [s]);
					const r = Object(a.useCallback)(() => {
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
						onClick: r,
						Icon: Object(M.b)("random"),
						iconClassName: q.a.icon
					}, H._("Randomize", null, {
						hk: "uwAa8"
					})))
				},
				W = n("./node_modules/lodash/times.js"),
				z = n.n(W);
			const Q = function(e) {
				return (/^(r\/)([^\s]+)/g.exec(e) || [])[2] || ""
			};
			var K = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				Y = n.n(K);
			const X = e => o.a.createElement("div", {
				className: Object(d.a)(Y.a.placeholderWrapper, e.fullWidth && Y.a.fullWidth, e.large && Y.a.large)
			}, o.a.createElement("span", {
				className: Y.a.subredditIconLoading
			}), o.a.createElement("span", {
				className: Y.a.subredditNameLoading
			}));
			var J = e => o.a.createElement("svg", {
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
				re = n("./src/reddit/components/Onboarding/CommunityPicker.m.less"),
				ae = n.n(re);
			const {
				fbt: oe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ie = () => oe._("Recommended for you", null, {
				hk: "28LTkA"
			}), ce = e => {
				let {
					community: t,
					schemeName: n,
					selected: s,
					toggleAll: r,
					toggleSelection: i,
					viewportRoot: c,
					setViewedCommunities: l,
					viewedCommunities: d
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
					className: ae.a.RecommendedHeader
				}, o.a.createElement("span", {
					className: ae.a.SectionTitle
				}, t.topicTitle), o.a.createElement("button", {
					onClick: b,
					className: ae.a.SelectAllLink
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
			}, le = () => o.a.createElement(o.a.Fragment, null, z()(5, e => o.a.createElement(X, {
				key: e,
				fullWidth: !0,
				large: !0
			}))), de = e => {
				let {
					communities: t,
					schemeName: n,
					selected: s,
					topicId: r,
					topicName: c,
					topicTitle: l,
					toggleSelection: d,
					viewportRoot: u,
					setViewedCommunities: m,
					viewedCommunities: p
				} = e;
				const b = Object(_.a)(),
					[g, f] = Object(a.useState)(!1),
					h = Object(i.e)(ee.fb),
					O = t.length > 4,
					v = t.slice(0, g ? void 0 : 4),
					x = "recommended" === r ? "" : l,
					E = Object(a.useCallback)(() => {
						f(!0), b(Object(F.k)(l, r))
					}, [b, l, r]);
				return o.a.createElement(o.a.Fragment, null, v.map(e => {
					const t = p.has(e.id);
					return o.a.createElement(se.a, {
						key: e.id,
						fireOnce: !0,
						viewportRoot: u,
						threshold: 1,
						rootMargin: "0px 0px -85px 0px",
						onEnter: t ? void 0 : Object(F.m)(l, Q(e.prefixedName), r, e.id, n),
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
						topicId: r,
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
				const f = Object(_.a)(),
					h = Object(a.useCallback)(() => {
						f(Object(F.i)(!i, g, p, Q(l), t, u)), m(t)
					}, [t, i, l, u, f, m, g, p]);
				return o.a.createElement("div", {
					className: Object(d.a)(ae.a.CommunityRow, {
						[ae.a.Selected]: i && !r,
						[ae.a.NightModeSelected]: i && r
					}),
					onClick: h
				}, o.a.createElement("div", {
					className: ae.a.IconSection
				}, s && o.a.createElement("img", {
					className: ae.a.IconWrapper,
					src: s
				}), !s && o.a.createElement(Z.a, {
					className: ae.a.CommunityNoIcon
				})), o.a.createElement("div", {
					className: ae.a.TextSection
				}, o.a.createElement("div", {
					className: ae.a.Info
				}, l, o.a.createElement(me, {
					language: c
				})), o.a.createElement("div", {
					className: ae.a.Description
				}, n)), o.a.createElement("div", {
					className: ae.a.ButtonSection
				}, i && o.a.createElement(J, {
					className: ae.a.SelectedIcon
				}), !i && o.a.createElement($, {
					className: ae.a.SelectedIcon
				})))
			}, me = e => {
				let {
					language: t
				} = e;
				if (!t) return null;
				const n = t.substring(0, 2).toUpperCase();
				return "EN" === n ? null : o.a.createElement("div", {
					className: ae.a.LangIndicator
				}, n)
			}, pe = e => {
				let {
					showMore: t,
					text: n
				} = e;
				return o.a.createElement("div", {
					className: ae.a.MoreRecommendations
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
						selected: r,
						schemeName: i,
						toggleSelection: c,
						toggleAll: l,
						viewportRoot: d
					} = e;
					const u = Object(_.a)();
					Object(a.useEffect)(() => {
						u(Object(F.l)())
					}, [u]);
					const [m, p] = Object(a.useState)(new Set);
					return o.a.createElement("div", {
						className: ae.a.CommunityListWrapper
					}, o.a.createElement("div", {
						className: ae.a.headerBarImproved
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
						selected: r,
						toggleAll: l,
						toggleSelection: c,
						setViewedCommunities: p,
						viewedCommunities: m,
						viewportRoot: d
					}), (!!t.length || n) && o.a.createElement(o.a.Fragment, null, n && o.a.createElement(le, null), t.map(e => o.a.createElement(ce, {
						key: e.topicId,
						community: e,
						schemeName: i,
						selected: r,
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
					toggleSelection: r,
					topicColor: i = null,
					viewportRoot: c = null,
					setViewedInterests: l,
					viewedInterests: d
				} = e;
				const u = Object(_.a)(),
					m = Object(a.useCallback)((e, t, s, a, o) => {
						u(Object(F.s)(!t, !s, a, o, n)), r(e)
					}, [n, u, r]);
				return o.a.createElement(o.a.Fragment, null, t.map((e, t) => {
					var a;
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
					}), b && !!(null === (a = e.children) || void 0 === a ? void 0 : a.length) && o.a.createElement(xe, {
						interests: e.children,
						schemeName: n,
						selected: s,
						toggleSelection: r,
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
						selected: r,
						toggleSelection: i,
						viewportRoot: c
					} = e;
					const l = Object(_.a)();
					Object(a.useEffect)(() => {
						l(Object(F.v)())
					}, [l]);
					const [d, u] = Object(a.useState)(new Set);
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
						selected: r,
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
				return o.a.createElement(o.a.Fragment, null, z()(n, e => o.a.createElement(X, {
					key: "loading-" + e,
					fullWidth: !0,
					large: !0
				})))
			}, Ie = e => {
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
				const p = Object(_.a)();
				return o.a.createElement("div", {
					className: Object(d.a)(je.a.LanguageRow, {
						[je.a.Selected]: a && !r,
						[je.a.NightModeSelected]: a && r
					}),
					onClick: () => {
						n && !a ? (u(Ne._("You’ve already selected the maximum of {amount} languages", [Ne._param("amount", 10)], {
							hk: "274yT2"
						})), i || (l(!0), setTimeout(() => {
							u(null), l(!1)
						}, 3e3))) : (p(s ? Object(F.F)(t, c.isoCode, !a) : Object(F.w)(t, c.isoCode, !a)), m(c.isoCode))
					},
					"data-testid": c.isoCode
				}, o.a.createElement("div", {
					className: je.a.FrontFlex
				}), o.a.createElement("div", {
					className: je.a.TextSection
				}, c.translatedDisplayName), o.a.createElement("div", {
					className: je.a.ButtonSection
				}, a && o.a.createElement(J, {
					className: je.a.SelectedIcon
				})))
			};
			var we = e => {
					let {
						languages: t,
						loadingLanguages: n,
						isLanguageCollectionSettings: s,
						selectedLanguages: r,
						setToastText: c,
						setShowAllLanguage: l,
						showAllLanguage: d,
						toggleLanguageSelection: u
					} = e;
					const [m, p] = Object(a.useState)(!1), b = Object(i.e)(ee.fb);
					let g = Object(i.e)(Se.h) === ke.qd.TopTwo;
					const f = Object(i.e)(Se.g) === ke.qd.TopTwo;
					g = g || f;
					const h = Object(i.e)(ye.b),
						O = Object(_.a)();
					Object(a.useEffect)(() => {
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
				He = e => e.firstPost.postSubmitted,
				Ue = e => Object(Ae.w)(e) ? Object(Ae.o)(e) : Object(Ae.x)(e) ? Object(Ae.o)(e) : [];
			var We, ze, Qe, Ke = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.POST_SCREEN = "post_screen", e.POST_CONFIRMATION_SCREEN = "post_confirmation"
			}(We || (We = {})),
			function(e) {
				e.ONBOARDING = "onboarding"
			}(ze || (ze = {})),
			function(e) {
				e.KARMA = "karma_link", e.SUBREDDIT = "subreddit_link"
			}(Qe || (Qe = {}));
			const Ye = e => {
					const t = Object(Se.a)(e);
					if (!t) return null;
					const n = Object(Fe.a)(e)[null == t ? void 0 : t.experimentName];
					return n ? {
						id: null == n ? void 0 : n.id,
						name: null == n ? void 0 : n.name,
						variant: (null == n ? void 0 : n.variant) || "",
						isOverride: !1
					} : null
				},
				Xe = (e, t) => ({
					...Object(Ke.d)(e),
					reason: t || De(e)
				}),
				Je = e => ({
					...Object(Ke.p)(e),
					actionInfo: Xe(e),
					source: ze.ONBOARDING,
					experiment: Ye(e)
				}),
				Ze = e => t => ({
					...Je(t),
					action: Le.c.CLICK,
					actionInfo: Xe(t, e),
					noun: We.POST_SCREEN
				}),
				$e = e => t => ({
					...Je(t),
					action: Le.c.VIEW,
					actionInfo: Xe(t, e),
					noun: We.POST_SCREEN
				}),
				et = e => t => ({
					...Je(t),
					action: Le.c.CLICK,
					actionInfo: Xe(t),
					noun: e
				});
			var tt = n("./src/reddit/models/User/index.ts"),
				nt = n("./src/config.ts"),
				st = n("./node_modules/lodash/cloneDeep.js"),
				rt = n.n(st);
			const at = {
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
				gt = rt()(ut);
			gt.withFullForm = !0, gt.step1.postBodyPrompts = [h.fbt._("If I were a fruit or vegetable I would be ...", null, {
				hk: "2N9IlX"
			})], gt.step1.postTitlePrompts = [h.fbt._("Hey, I am here to", null, {
				hk: "PkGAQ"
			}), h.fbt._("My superpower is", null, {
				hk: "1HriQk"
			})];
			const ft = e => e in at ? at[e] : null;
			var ht = (e, t) => {
					const n = (e => {
						return {
							[ke.nb.Default]: it,
							[ke.nb.FruitVeg]: ut,
							[ke.nb.Karma]: mt,
							[ke.nb.Interactive]: pt(e),
							[ke.nb.Randomizer]: bt,
							[ke.nb.FruitVegWithBody]: gt
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
						s = Object(i.e)(Se.b),
						r = s && ht(s.toString()),
						c = Object(i.e)(Se.a),
						l = ft((null == c ? void 0 : c.countryCode) || ""),
						d = Object(i.e)(ee.m),
						u = Object(i.e)(Se.e),
						m = d && Object(tt.e)(d) || "";
					if (Object(a.useEffect)(() => {
							n((() => e => ({
								...Je(e),
								action: Le.c.VIEW,
								actionInfo: Xe(e),
								noun: We.POST_CONFIRMATION_SCREEN
							}))())
						}, [n]), Object(a.useEffect)(() => {
							u && m && t(Pe.g(m))
						}, [m, t, u]), !r || !l) return null;
					const p = l.subredditName,
						{
							title: b,
							subTitle: g,
							iconText: f,
							icon: h,
							iconHeight: O,
							iconWidth: v,
							iconTextImg: x
						} = r.step2;
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
					apiContext: r
				} = s;
				const a = n(),
					o = ((e, t) => {
						const n = Object(Ae.b)(e, t.draftId),
							s = t.destSubreddit || n.destSubreddit;
						if (!n || !s.name) return;
						const r = Object(Ae.kb)(e),
							a = {
								...n,
								destSubreddit: s,
								gRecaptchaResponse: r,
								validate_on_submit: !0,
								postToTwitter: !1,
								title: De(e)
							},
							o = Me(e);
						return {
							...a,
							kind: Ge.p.MARKDOWN,
							markdown: o
						}
					})(a, e);
				if (!o) return;
				if (t(Object(It.b)(o)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(Ae.x)(a))) return;
				const i = await Object(wt.c)(r(), o);
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
						postTitlePlaceholders: r,
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
						E = Object(a.useRef)(null),
						C = Object(Re.b)();
					Object(a.useEffect)(() => {
						C($e(c[0].toString()))
					}, [c, C]), _ && (g = !1), f < c.length && (h = c[f].toString()), f < r.length && (O = r[f]), f < l.length && (v = l[f].toString());
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
								t = r[f];
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
					selected: r,
					text: i,
					setSelectedPredicate: c
				} = e;
				const l = Object(a.useRef)(null);
				return Object(a.useEffect)(() => {
					if (r && l.current) {
						const e = l.current.parentElement;
						e && (e.style.marginLeft = `${(e=>e?-1*(e.offsetLeft+e.clientWidth/2):0)(l.current)}px`)
					}
				}, [t, s, r]), o.a.createElement("span", {
					ref: l,
					className: Object(d.a)(vt.a.postPredicate, {
						[vt.a.postPredicate__dark]: n,
						[vt.a.selectedPredicate]: r
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
					return e.forEach((e, r) => {
						var a;
						const o = null == n ? void 0 : n[r],
							i = null === (a = null == t ? void 0 : t[r]) || void 0 === a ? void 0 : a[o];
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
					setCurrentPostTitle: r,
					setFirstEdit: c
				} = e;
				const l = Object(i.d)(),
					u = Object(Re.b)(),
					m = e => {
						l(Tt(b));
						const t = Mt(n, s, b);
						r(t), e && u(Ze(t))
					},
					p = new Array(s.length).fill(0);
				let b = Object(i.e)(qe) || p;
				Object(a.useEffect)(() => {
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
				fbt: Ht
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Ut = e => {
				let {
					postSubmittedCallback: t,
					hasSubmitButton: n
				} = e;
				const s = Object(Re.b)(),
					r = Object(i.e)(Me),
					c = Object(i.e)(De),
					l = Object(i.e)(Be),
					u = Object(i.d)(),
					m = Object(i.e)(Se.d),
					p = Object(i.e)(ee.fb),
					b = Object(i.e)(Se.f),
					g = Object(i.e)(Se.b),
					f = Object(i.e)(ee.m),
					h = g && ht(g.toString(), {
						username: null == f ? void 0 : f.displayText
					}),
					O = Object(i.e)(He),
					v = Object(i.e)(Se.a),
					x = ft((null == v ? void 0 : v.countryCode) || ""),
					_ = Object(i.e)(Ue),
					E = Object(Rt.a)();
				if (Object(a.useEffect)(() => {
						if (_.length) {
							const e = _[0];
							E(e), s((() => e => {
								var t;
								return {
									...Je(e),
									action: Le.c.ERROR,
									actionInfo: {
										...Object(Ke.d)(e),
										reason: `post: ${De(e)}, error: ${null===(t=Ue(e))||void 0===t?void 0:t[0]}`
									},
									noun: Le.b.POST
								}
							})())
						}
					}, [_, s, E]), Object(a.useEffect)(() => {
						x && u(yt(x))
					}, [u, x]), Object(a.useEffect)(() => {
						O && t && 0 === _.length && (s((() => e => ({
							...Je(e),
							action: Le.c.SUBMIT,
							actionInfo: Xe(e),
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
							r = e.length >= 5,
							a = n || t.length >= 3;
						return s && a && r
					})(c, r, C) || m,
					T = e => {
						u(kt(e))
					},
					I = e => {
						u(Nt(e)), !l && T(!0)
					},
					w = e => {
						u(St(e)), !l && T(!0)
					},
					P = Ht._("Post to r/{subredditName}", [Ht._param("subredditName", x.subredditName)], {
						hk: "3l2Epc"
					});
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: vt.a.firstPostBuilder
				}, !m && o.a.createElement(At, {
					currentPostTitle: c,
					currentPostBody: r,
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
				fbt: Wt
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
					continueFromFirstPostForm: r,
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
				const y = Object(a.useRef)(null);
				Object(a.useEffect)(() => {
					var e, t;
					return null === (t = null === (e = y.current) || void 0 === e ? void 0 : e.scroll) || void 0 === t ? void 0 : t.call(e, 0, 0)
				}, [t]);
				const N = Object(a.useCallback)(e => {
						const t = f[e],
							n = {
								...f
							};
						t ? delete n[e] : n[e] = !0, v(n)
					}, [f, v]),
					T = Object(a.useCallback)((e, t) => {
						const n = {
								...f
							},
							r = e => e.forEach(e => {
								t ? n[e.id] = !0 : delete n[e.id]
							});
						if ("recommended" === e) r(g);
						else {
							const t = s.find(t => t.topicId === e);
							t && r(t.communities)
						}
						v(n)
					}, [s, g, f, v]),
					I = Object(a.useCallback)(e => {
						const {
							children: t,
							id: n
						} = e, s = h[n], r = {
							...h
						};
						s ? (delete r[n], s.forEach(e => delete r[e])) : r[n] = [...(null == t ? void 0 : t.map(e => e.id)) || []], x(r)
					}, [h, x]),
					w = Object(a.useCallback)(e => {
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
					postSubmittedCallback: r
				}), t === zt.FIRST_POST_CONF && o.a.createElement(_t, null))
			};
			var Kt = n("./src/reddit/constants/modals.ts"),
				Yt = n("./src/reddit/contexts/ApiContext.tsx"),
				Xt = n("./src/lib/makeGqlRequest/index.ts"),
				Jt = n("./node_modules/lodash/uniqBy.js"),
				Zt = n.n(Jt),
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
						r = [];
					let a = 0;
					for (const {
							node: o
						} of t) {
						const e = Object(nn.a)(o);
						s[e.id] = {
							...e,
							publicDescription: null == o ? void 0 : o.publicDescriptionText,
							bannerBackgroundImage: o && o.styles && o.styles.bannerBackgroundImage
						}, r.push({
							id: e.id,
							rank: a
						}), a += 1
					}
					return {
						rankings: r,
						subreddits: s,
						pageInfo: n
					}
				},
				rn = (e, t) => Object(Xt.a)(e, {
					...tn,
					variables: t
				});
			var an = n("./src/reddit/endpoints/subreddit/subscriptions.ts");
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
					return Object(Xt.a)(e, {
						...cn,
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
					const n = await rn(e, t);
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
					return Object(Xt.a)(e, {
						...bn,
						variables: n
					})
				})(e(), t);
				if (!n.ok) return null;
				const s = n.body,
					r = null == s ? void 0 : s.data.interestTopics;
				return r ? Object(pn.a)(r) : null
			}, hn = (e, t) => ((e, t) => Object(Xt.a)(e, {
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
			} = n("./node_modules/fbt/lib/FbtPublic.js"), wn = e => e.type === on.d.REONBOARDING, Pn = () => Object(f.f)({
				kind: E.b.Error,
				text: In._("Something went wrong", null, {
					hk: "22u7ha"
				})
			}), Rn = async (e, t) => {
				const n = {
					ok: !0,
					preSelectedCommunities: {},
					recommendedCommunities: []
				};
				try {
					n.recommendedCommunities = await (async (e, t) => {
						const n = [un(t), mn(e)],
							[s, r] = await Promise.all(n);
						return Zt()([...r || [], ...s || []], e => e.id).filter(e => !e.isSubscribed)
					})(e, t)
				} catch (s) {
					n.ok = !1
				}
				return n
			}, Ln = async (e, t, n, s) => {
				const r = Object.keys(n),
					a = Object.keys(s),
					o = [],
					i = {
						ok: !0,
						reload: !1
					};
				if (r.length && o.push(((e, t) => Object(an.c)(e(), {
						subredditIds: t,
						subscribe: !0
					}))(e, r)), a.length && o.push(hn(t, a)), o.length) try {
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
				} = e, s = Object(i.d)(), r = Object(_.a)(), l = Object(i.e)(Cn.a), h = wn(l), O = (e => e.type === on.d.LANGUAGE_COLLECTION)(l);
				let v = h ? zt.INTERESTS : zt.GENDER;
				O && (v = zt.LANGUAGES);
				const [C, k] = Object(a.useState)(v), [S, y] = Object(a.useState)(null), N = Object(i.e)(Sn.a), [I, w] = Object(a.useState)(h), [P, L] = Object(a.useState)(!1), A = {
					topics: [],
					schemeName: void 0
				}, [B, D] = Object(a.useState)(A), [V, q] = Object(a.useState)(!1), [H, U] = Object(a.useState)(wn(l) && (null == l ? void 0 : l.selectedInterests) || {}), [W, z] = Object(a.useState)(!1), [Q, K] = Object(a.useState)([]), [Y, X] = Object(a.useState)([]), [Z, $] = Object(a.useState)({}), [te, se] = Object(a.useState)(0), [re, ae] = Object(a.useState)({
					sortedLanguages: []
				}), [oe, ie] = Object(a.useState)(!1), [ce, le] = Object(a.useState)({}), [de, ue] = Object(a.useState)(null), [me, pe] = Object(a.useState)(!1), {
					avatarImage: be,
					fetchRandomAvatar: ge,
					saveAvatar: fe
				} = j(), he = h ? on.c.REONBOARDING_BOTTOM_SHEET : on.c.ONBOARDING;
				Object(a.useEffect)(() => {
					(I || N) && async function() {
						q(!0);
						const e = await fn(t, he);
						q(!1), e && (se(Date.now() / u.Xb), D(e))
					}()
				}, [I, N, t, he]), Object(a.useEffect)(() => {
					N && Object(vn.a)(null == S ? void 0 : S.genderCategory, N.success)
				}, [N, S]);
				const Oe = Object(i.e)(Se.i) === ke.ob.Removed;
				Object(a.useEffect)(() => {
					let e = !1;
					return async function() {
						let r = {
							ok: !0,
							preSelectedCommunities: {},
							recommendedCommunities: []
						};
						Oe || (r = await Rn(n, t));
						const {
							ok: a,
							preSelectedCommunities: o,
							recommendedCommunities: i
						} = r;
						a ? e || ($(o), X(i)) : s(Pn())
					}(), () => {
						e = !0
					}
				}, [n, s, t, Oe]);
				const ve = Object(i.e)(ye.b),
					xe = Object(i.e)(ye.k),
					_e = Object(i.e)(Se.h),
					Ee = Object(i.e)(Se.g),
					Ce = _e === ke.qd.TopTwo || _e === ke.qd.All || Ee === ke.qd.TopTwo || Ee === ke.qd.All,
					je = Object(a.useCallback)(async e => {
						ie(!0);
						const n = await Object(On.c)(e, t, xe);
						if (ie(!1), n) {
							ae(n);
							const e = {};
							for (let t = 0; t < n.sortedLanguages.length; t++) n.sortedLanguages[t].selected && (e[n.sortedLanguages[t].isoCode] = !0);
							le(e)
						} else s(Pn())
					}, [s, t, xe]);
				Object(a.useEffect)(() => {
					O && je(On.a.ALL_KEY)
				}, [je, O]);
				const Ne = Object(a.useCallback)(async () => await Object(On.d)(t, ce), [t, ce]),
					Te = Object(i.e)(e => Object(jn.f)(e)),
					Ie = Object(i.e)(ee.U),
					we = Object(i.e)(ye.g),
					Pe = Object(i.e)(kn.a),
					Re = Pe === ke.qg.CloseOnboarding,
					Fe = Pe === ke.qg.SkipTopicSelection,
					Ge = Pe === ke.qg.SmartSignal,
					Ae = Object(a.useCallback)(() => {
						s(Object(b.g)(Kt.a.ONBOARDING_MODAL_D2X)), Te && s(Object(g.h)()), h && (r(Object(F.t)()), Object(xn.a)()), we && Ie && s(Object(m.startChangeUsernameFlow)())
					}, [s, Ie, we, h, Te, r]),
					Be = Object(a.useCallback)((function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1500;
						setTimeout(async () => {
							await s(Object(p.frontpageReloaded)()), setTimeout(Ae, e)
						}, e)
					}), [Ae, s]),
					De = Object(a.useCallback)(() => {
						const e = Object.keys(H).filter(e => 0 === H[e].length || !H[e].find(e => H[e]));
						K([]), e.length && async function() {
							z(!0);
							const n = await ln(t, he, e);
							z(!1), n && K(n)
						}()
					}, [t, H, he]),
					Me = Object(a.useCallback)(() => {
						k(zt.CELEBRATION), Be()
					}, [Be]),
					Ve = Object(a.useCallback)(() => {
						h ? Me() : (ge(), k(zt.AVATAR))
					}, [h, ge, Me]),
					qe = Object(a.useCallback)(e => {
						q(!0), k(zt.INTERESTS), s(Object(yn.a)(e))
					}, [s]),
					He = Object(a.useCallback)(async () => {
						r(Object(F.p)()), qe(S || G)
					}, [qe, S, r]),
					Ue = Object(a.useCallback)(async e => {
						r(Object(F.p)()), qe(e)
					}, [qe, r]),
					ze = Object(a.useCallback)(async () => {
						r(Object(F.u)());
						const e = Date.now() / u.Xb - te;
						Ge && e <= 5 ? (L(!0), U({}), Ve()) : (k(zt.COMMUNITIES), De())
					}, [De, r, Ve, te, Ge]),
					Ke = Object(a.useCallback)(async () => {
						r(Object(F.j)()), Ce ? (je(On.a.TOP_KEYS), k(zt.LANGUAGES)) : Ve(), (await Ln(n, t, Z, H)).ok || s(Pn())
					}, [n, s, je, Ve, t, Z, H, r, Ce]),
					Ye = Object(a.useCallback)(async () => {
						var e;
						const t = Object.keys(ce).join();
						r(Object(F.y)(ve, t)), Ve();
						const n = await Ne();
						(null === (e = null == n ? void 0 : n.updateSpokenLanguagesPreference) || void 0 === e ? void 0 : e.ok) || s(Pn())
					}, [ve, s, Ve, Ne, ce, r]),
					Ze = Object(a.useCallback)(() => {
						fe(), k(zt.FIRST_POST)
					}, [fe]),
					$e = C === (zt.FIRST_POST || zt.FIRST_POST_CONF),
					tt = Object(i.e)(e => $e && !h && Object(Se.c)(e)),
					nt = Object(i.e)(e => tt && Object(Se.b)(e) || ""),
					st = ht(nt.toString()),
					rt = Object(a.useCallback)(() => {
						k(zt.FIRST_POST_CONF)
					}, []),
					at = Object(a.useCallback)(() => {
						Me()
					}, [Me]);
				Object(a.useEffect)(() => {
					$e && !tt && Me()
				}, [$e, tt, Me]);
				const ot = (() => C === zt.GENDER ? He : C === zt.INTERESTS ? ze : C === zt.COMMUNITIES ? Ke : C === zt.LANGUAGES ? Ye : C === zt.AVATAR ? Ze : C === zt.FIRST_POST ? rt : at)(),
					it = C !== v && C !== zt.FIRST_POST_CONF,
					ct = Object(a.useCallback)(() => {
						C === zt.INTERESTS ? (s(Object(Nn.resetGenderUpdateState)()), w(!1), k(zt.GENDER)) : C === zt.COMMUNITIES ? k(zt.INTERESTS) : C === zt.LANGUAGES ? k(P ? zt.INTERESTS : zt.COMMUNITIES) : C === zt.AVATAR ? k(Ce ? zt.LANGUAGES : P ? zt.INTERESTS : zt.COMMUNITIES) : C === zt.FIRST_POST && (r((() => e => ({
							...Je(e),
							action: Le.c.BACK,
							actionInfo: Xe(e),
							noun: We.POST_SCREEN
						}))()), Ve())
					}, [C, s, Ve, P, r, Ce]),
					lt = (C === zt.GENDER || C === zt.LANGUAGES || C === zt.AVATAR || C === zt.FIRST_POST || Fe) && C !== zt.FIRST_POST_CONF,
					dt = Object(a.useCallback)(() => {
						C === zt.GENDER ? (r(Object(F.o)()), w(!0), k(zt.INTERESTS)) : C === zt.INTERESTS ? (r(Object(F.t)()), Fe ? (Ve(), L(!0)) : Ae()) : C === zt.LANGUAGES ? (r(Object(F.x)(ve)), Ve()) : C === zt.AVATAR ? (r(Object(x.a)("skip")), k(zt.FIRST_POST)) : C === zt.FIRST_POST && (r((() => e => ({
							...Je(e),
							action: Le.c.SKIP,
							actionInfo: Xe(e),
							noun: We.POST_SCREEN
						}))()), Me())
					}, [Ae, ve, r, C, Ve, Me, Fe]),
					ut = O,
					mt = Object.keys(Z).length,
					pt = Object.keys(H).length,
					bt = Object.keys(ce).length,
					gt = C === zt.INTERESTS && pt < (h ? 1 : 3) || C === zt.COMMUNITIES && mt < 1 || C === zt.LANGUAGES && bt > 10;
				if (C === zt.CELEBRATION) return o.a.createElement(T, null);
				let ft;
				h || Re || O ? ft = o.a.createElement("button", {
					"aria-label": In._("Close", null, {
						hk: "3XndV9"
					}),
					className: ne.a.dismissButton,
					onClick: Ae
				}, o.a.createElement(M.a, {
					name: "close"
				})) : !Re && lt && (ft = o.a.createElement("button", {
					className: ne.a.skipButton,
					onClick: dt
				}, In._("Skip", null, {
					hk: "2S8Lme"
				})));
				const Ot = C === zt.INTERESTS || C === zt.COMMUNITIES || C === zt.LANGUAGES;
				let vt = In._("Continue", null, {
					hk: "15wNPy"
				});
				ut ? vt = In._("Save", null, {
					hk: "1QmXEz"
				}) : C === zt.LANGUAGES && (vt = In._("Continue with {amount}", [In._param("amount", Object.keys(ce).length)], {
					hk: "16fdeF"
				}));
				const xt = C === zt.GENDER || C === zt.FIRST_POST;
				return o.a.createElement("div", {
					className: `${ne.a.container} ${C===zt.GENDER&&ne.a.containerImproved}`
				}, o.a.createElement("header", {
					className: ne.a.header
				}, o.a.createElement("div", {
					className: `\n            ${ne.a.headerBar}\n            ${Ot&&ne.a.noHeaderBar}\n            ${!Ot&&ne.a.headerBarImproved}\n          `
				}, o.a.createElement("div", null, it && o.a.createElement(En.f, {
					className: ne.a.backButton,
					"data-testid": "onboarding-back",
					onClick: ct
				})), o.a.createElement(_n.a, {
					className: ne.a.snooIcon
				}), o.a.createElement("div", {
					className: ne.a.skipOrDismissContainer
				}, ft)), C === zt.GENDER && o.a.createElement("div", {
					className: ne.a.title
				}, In._("About you", null, {
					hk: "35GAtt"
				})), C === zt.AVATAR && o.a.createElement("div", {
					className: ne.a.title
				}, In._("Style your avatar", null, {
					hk: "15i2ld"
				})), C === zt.GENDER && o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: ne.a.subtitle
				}, In._("Tell us about yourself to improve your recommendations and ads.", null, {
					hk: "tlFdQ"
				})), o.a.createElement("div", {
					className: R.a.prompt
				}, In._("How do you identify?", null, {
					hk: "1JAuh0"
				}))), C === zt.AVATAR && o.a.createElement("div", {
					className: ne.a.subtitle
				}, In._("This is how people will see you on Reddit.", null, {
					hk: "2SmAiC"
				}), o.a.createElement("br", null), In._("You can change it later if you’d like.", null, {
					hk: "34hXSo"
				})), C === zt.FIRST_POST && st && o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: ne.a.title
				}, st.step1.title), o.a.createElement("div", {
					className: ne.a.subtitle
				}, st.step1.subTitle, st.step1.subTitleLink && o.a.createElement(o.a.Fragment, null, o.a.createElement("br", null), o.a.createElement(c.a, {
					onClick: () => {
						r(et(Qe.KARMA))
					},
					to: {
						pathname: st.step1.subTitleLink
					},
					target: "_blank",
					rel: "noreferrer noopener",
					className: ne.a.externalLink
				}, st.step1.subTitleLinkText))))), o.a.createElement(Qt, {
					activeStep: C,
					autoProgressGenderCollection: Ue,
					avatarImage: be,
					communitiesByTopic: Q,
					continueFromFirstPostForm: rt,
					fetchRandomAvatar: ge,
					interests: B,
					isLanguageCollectionSettings: O,
					languages: re,
					loadingCommunities: W,
					loadingInterests: V,
					loadingLanguages: oe,
					recommendedCommunities: Y,
					selectedCommunities: Z,
					selectedGenderOption: S,
					selectedInterests: H,
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
				}, o.a.createElement(J, {
					className: ne.a.toastCheckIcon
				})), o.a.createElement("div", {
					className: ne.a.toastText
				}, de), o.a.createElement("div", {
					className: ne.a.toastFlex
				})), !xt && o.a.createElement("div", {
					className: Object(d.a)(ne.a.continueButtonWrapper, {
						[ne.a.avatarPicker]: C === zt.AVATAR
					})
				}, o.a.createElement("button", {
					className: ne.a.continueButton,
					disabled: gt,
					onClick: ut ? async () => {
						var e;
						if (s(Object(b.g)(Kt.a.ONBOARDING_MODAL_D2X)), C === zt.LANGUAGES) {
							const t = await Ne();
							(null === (e = null == t ? void 0 : t.updateSpokenLanguagesPreference) || void 0 === e ? void 0 : e.ok) ? (r(Object(F.G)(ve)), s(Object(f.f)({
								kind: E.b.SuccessCommunity,
								text: In._("Changes saved", null, {
									hk: "2isjrZ"
								})
							}))) : s(Pn())
						}
					} : ot
				}, vt)))
			});
			t.default = Object(Yt.b)(e => o.a.createElement(Fn, Tn({}, e, {
				className: Object(d.a)(e.className, ne.a.modal),
				onOverlayClick: r.a,
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
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
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
				return r.a.createElement("div", l({}, d, {
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
				return _
			})), n.d(t, "a", (function() {
				return E
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = n("./src/reddit/controls/FormFields/index.tsx"),
				d = n("./src/reddit/controls/TextButton/index.tsx"),
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
					})), a.a.createElement(d.a, {
						onClick: t,
						disabled: r
					}, a.a.createElement(c.b, null)))), a.a.createElement(c.l, null, a.a.createElement(l.b, {
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
						subtext: this.getGenderToggleCopy()
					}, a.a.createElement("div", {
						className: x.a.wrapper
					}, a.a.createElement(h.a, {
						dropdownId: "gender-dropdown-id",
						items: _(),
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
				O = Object(a.b)(h, (e, t) => ({
					openDropdown: () => {
						e(Object(l.h)({
							tooltipId: t.dropdownId
						}))
					}
				}));
			class v extends r.a.Component {
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
					} = this.props, l = n && {
						displayLabel: n,
						key: n
					}, d = t.find(e => e.key === o) || l || t[0];
					return r.a.createElement("div", {
						ref: this.setTooltipTargetRef,
						className: Object(c.a)(g.a.container, e.className),
						onClick: this.onToggleDropdown,
						"data-testid": i
					}, r.a.createElement("div", {
						className: g.a.labelWrapper
					}, s(d), r.a.createElement("span", null, r.a.createElement(m.b, null))), r.a.createElement(f, {
						tooltipTarget: this.tooltipTarget,
						isOpen: this.props.isDropdownOpen,
						renderContentsHidden: !0
					}, t.map(e => a(e, o === e.key))))
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
				return J
			})), n.d(t, "f", (function() {
				return $
			})), n.d(t, "m", (function() {
				return te
			})), n.d(t, "n", (function() {
				return ae
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
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
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
				const a = s.disabled ? {
					"data-disabled": s.disabled
				} : {};
				return r.a.createElement(E, {
					className: t
				}, r.a.createElement(C, _({
					className: n
				}, s)), r.a.createElement(j, _({
					isSubreddit: !0
				}, a)))
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
				H = h.a.h3("Label", D.a),
				U = h.a.wrapped(y.c, "Subtext", D.a),
				W = h.a.wrapped(m.a, "HoverTooltip", D.a),
				z = h.a.div("ControlContainer", D.a),
				Q = h.a.div("TextContainer", D.a),
				K = h.a.div("ActionContainer", D.a),
				Y = e => {
					let {
						className: t,
						direction: n,
						isCreateCommunity: s,
						inModal: a,
						isNightModeOn: o,
						disabled: i,
						indent: l,
						last: d,
						...u
					} = e;
					return r.a.createElement("div", M({}, u, {
						className: Object(c.a)(D.a.Wrapper, t, {
							[D.a.mColumn]: "column" === n,
							[D.a.mDisabled]: !!i,
							[D.a.mIndent]: !!l,
							[D.a.mLast]: !!d,
							[D.a.isCreateCommunity]: !!s,
							[D.a.inModal]: !!a,
							[D.a.isNightModeOn]: !!o
						})
					}))
				},
				X = h.a.a("Link", D.a),
				J = h.a.wrapped(X, "SubtextLink", D.a),
				Z = h.a.wrapped(I.a, "LinkIcon", D.a),
				$ = h.a.button("LinkButton", D.a),
				ee = h.a.wrapped(N.a, "ArrowRight", D.a),
				te = e => r.a.createElement(Y, {
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					isCreateCommunity: e.isCreateCommunity,
					last: e.last
				}, r.a.createElement(Q, {
					className: e.textContainerClassName
				}, r.a.createElement(H, null, e.label, e.isRequired && r.a.createElement(q, null)), r.a.createElement(U, null, e.subtext)), r.a.createElement(K, null, e.children)),
				ne = h.a.div("StyledFlair", D.a),
				se = h.a.wrapped(ne, "SpoilerFlair", D.a),
				re = h.a.wrapped(ne, "NSFWFlair", D.a),
				ae = e => {
					switch (e.flair) {
						case F.f.Nsfw:
							return r.a.createElement(re, null, "NSFW");
						case F.f.Spoiler:
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
					}, r.a.createElement(Q, null, r.a.createElement(L.a, null, r.a.createElement("label", {
						htmlFor: t,
						className: e.labelClassname
					}, r.a.createElement(H, null, e.label))), r.a.createElement(U, null, e.subtext)), r.a.createElement(K, null, r.a.createElement(z, null, e.tooltip && r.a.createElement(W, {
						tooltipContentClass: e.tooltipContentClassName,
						text: e.tooltip
					}), r.a.createElement(S.a, {
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
				pe = Object(a.b)(me)(e => {
					const t = Object(o.a)();
					return r.a.createElement(Y, {
						last: e.last,
						indent: e.indent,
						disabled: e.disabled,
						inModal: e.inModal,
						isNightModeOn: e.isNightModeOn,
						direction: e.direction,
						className: e.className
					}, r.a.createElement(Q, {
						style: {
							flex: 5
						}
					}, !e.inModal && r.a.createElement(L.a, null, r.a.createElement("label", {
						htmlFor: t
					}, r.a.createElement(H, {
						className: e.labelClassname
					}, e.label))), !e.hideSubtext && r.a.createElement(U, null, " ", r.a.createElement(ue, {
						style: {
							color: e.ticks[e.value].color
						}
					}, " ", e.ticks[e.value].text + ": ", " "), " ", e.subtext)), r.a.createElement(K, {
						style: {
							flex: 3,
							margin: "20px 20px 0 0"
						}
					}, r.a.createElement(ce, null, r.a.createElement(ie, {
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
					}), r.a.createElement(le, null, Object.keys(e.ticks).map((t, n) => r.a.createElement(de, {
						key: t,
						style: {
							color: t === e.value.toString() ? e.ticks[t].color : "#878A8C"
						}
					}, e.ticks[t].text))))))
				}),
				be = e => r.a.createElement(Y, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, r.a.createElement(Q, null, r.a.createElement(L.a, null, r.a.createElement(H, null, e.label)), r.a.createElement(U, null, e.subtext)), r.a.createElement(K, null, r.a.createElement(z, null, r.a.createElement(R.o, {
					onClick: e.onClick
				}, e.actionText)))),
				ge = e => r.a.createElement(Y, {
					className: e.className,
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, r.a.createElement(Q, null, r.a.createElement(X, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, e.label, r.a.createElement(Z, null)), r.a.createElement(U, null, e.subtext)), r.a.createElement(K, null, r.a.createElement(X, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, r.a.createElement(ee, null)))),
				fe = e => r.a.createElement(Y, {
					className: e.className,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, r.a.createElement(Q, null, r.a.createElement($, {
					onClick: e.onClick,
					className: Object(c.a)({
						[D.a.NoColor]: e.color && "none" === e.color
					})
				}, e.label), r.a.createElement(U, null, e.subtext)), r.a.createElement(K, null, !!e.hintText && r.a.createElement("div", {
					className: D.a.ActionHintText
				}, e.hintText), r.a.createElement($, {
					onClick: e.onClick,
					className: Object(c.a)({
						[D.a.NoColor]: e.color && "none" === e.color
					})
				}, r.a.createElement(ee, {
					className: Object(c.a)({
						[D.a.NoColor]: e.color && "none" === e.color
					})
				})))),
				he = Object(i.c)({
					isOpen: (e, t) => Object(G.b)(t.id)(e)
				}),
				Oe = Object(a.b)(he, (e, t) => ({
					openDropdown: () => {
						e(Object(l.h)({
							tooltipId: t.id
						}))
					}
				}))(e => r.a.createElement(Y, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, r.a.createElement(Q, null, r.a.createElement(H, null, e.label), r.a.createElement(U, null, e.subtext)), r.a.createElement(K, null, (e => r.a.createElement("div", {
					className: D.a.DropdownWrapper,
					onClick: e.openDropdown
				}, r.a.createElement("span", {
					className: D.a.Row,
					id: `SettingDropdown--${e.id}`
				}, e.displayTitle || e.selected), r.a.createElement(O.b, {
					className: D.a.DropdownTriangle
				}), r.a.createElement(V, {
					container: void 0,
					isOpen: e.isOpen,
					renderContentsHidden: !0,
					isOverlay: !1,
					tooltipId: `SettingDropdown--${e.id}`
				}, e.items.map((t, n) => r.a.createElement(g.b, {
					className: D.a.DropdownRow,
					displayText: e.displayItems ? e.displayItems[n] : t,
					isSelected: e.selected === t,
					onClick: () => e.onClick(t),
					key: "row--" + n,
					item: t
				}))), e.descriptions && r.a.createElement("div", {
					className: D.a.DescriptionsRow
				}, e.descriptions[e.items.indexOf(e.selected)] || e.displayItems && e.descriptions[e.displayItems.indexOf(e.selected)])))(e)))),
				ve = e => {
					let {
						disabled: t,
						last: n,
						onClick: a,
						onChange: o,
						...i
					} = e;
					const c = Object(s.useCallback)(e => o(e.target.value), [o]),
						{
							items: l
						} = i;
					return r.a.createElement(Y, {
						disabled: t
					}, r.a.createElement(Q, null, r.a.createElement("label", {
						htmlFor: i.id
					}, r.a.createElement(H, {
						className: i.labelClassname
					}, i.label)), r.a.createElement(U, null, i.subtext)), r.a.createElement("div", {
						className: D.a.Wrapper__LineBreak
					}), r.a.createElement(Y, {
						last: n,
						indent: !0,
						disabled: t
					}, r.a.createElement(k, {
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
						return r.a.createElement("option", {
							key: t,
							value: t
						}, n)
					}))))
				},
				xe = e => r.a.createElement(Y, {
					className: e.className,
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, r.a.createElement(Q, null, r.a.createElement(H, null, e.label), r.a.createElement(U, null, e.subtext)), r.a.createElement(K, null, e.children)),
				_e = e => r.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, e.isCreateCommunity && r.a.createElement("span", {
					className: D.a.tag
				}, "r/"), r.a.createElement(f.a, {
					className: e.isCreateCommunity ? D.a.input : void 0,
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
				Ee = e => r.a.createElement(te, {
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
					className: D.a.MultiLineInputSettingsBottomRow
				}, !e.hideCountdown && r.a.createElement(u.a, {
					maxChars: e.maxChars,
					text: e.value || ""
				}), !!e.actionLink && r.a.createElement("div", {
					className: D.a.ActionLinkContainer
				}, e.actionLink))),
				Ce = e => r.a.createElement(Y, {
					className: e.className,
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, r.a.createElement(Q, null, r.a.createElement(H, null, e.label), r.a.createElement(U, null, e.subtext)), r.a.createElement(K, null, r.a.createElement(X, {
					href: e.link,
					onClick: e.onClick,
					"aria-label": e.linkLabel
				}, r.a.createElement(ee, null))))
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
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				a = n.n(r);
			const o = s.a.section("FormPage", a.a),
				i = s.a.h1("HomePageTitle", a.a),
				c = s.a.button("HomePageBreadcrumb", a.a),
				l = s.a.div("HomePageGroup", a.a),
				d = s.a.h1("FormPageTitle", a.a),
				u = s.a.div("FormPageSection", a.a),
				m = s.a.div("FormGroup", a.a),
				p = s.a.h2("FormGroupTitle", a.a),
				b = s.a.div("FormElement", a.a),
				g = s.a.div("FormGroupDescription", a.a),
				f = s.a.div("FormItem", a.a),
				h = s.a.h3("FormElementTitle", a.a),
				O = s.a.div("FormElementDescription", a.a),
				v = s.a.div("FormElementError", a.a),
				x = s.a.div("FormElementSubGroup", a.a),
				_ = s.a.li("FormListItem", a.a)
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
				r = n("./src/reddit/controls/Input/ModalInput.tsx"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				o = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				l = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				d = n.n(l);
			const u = s.a.wrapped(r.a, "ModalInput", d.a),
				m = s.a.input("Input", d.a),
				p = s.a.wrapped(c.a, "RadioOn", d.a),
				b = s.a.wrapped(i.a, "RadioOff", d.a),
				g = s.a.wrapped(a.a, "Checkbox", d.a),
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
				return x
			})), n.d(t, "c", (function() {
				return _
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/uniqueId.js"),
				a = n.n(r),
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
					return l.a.createElement("div", {
						className: Object(d.a)(O.a.wrapper, t)
					}, l.a.createElement("span", {
						className: O.a.description,
						ref: this.spanRef
					}, e), o && l.a.createElement("span", {
						className: O.a.moreText,
						onClick: this.toggleModal
					}, a), i && l.a.createElement(f, {
						onConfirmed: this.toggleModal,
						title: r
					}, n || e))
				}
			}
			const x = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: s,
						fallbackMessage: r,
						messages: a = []
					} = e, o = a.length ? a : r ? [r] : [];
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
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
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
					return r.a.createElement("div", {
						className: Object(a.a)(u.a.inputMovingLabelWrapper, i, {
							[u.a.mIsInvalid]: o,
							[u.a.mIsRedditStyle]: c
						}),
						onClick: b
					}, r.a.createElement(p, m({
						innerRef: s
					}, l)), t && r.a.createElement("label", {
						className: Object(a.a)(u.a.label, {
							[u.a.mHasValue]: d
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
			class v extends r.a.Component {
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
					}, r.a.createElement(l.b, {
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
				r = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts"),
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
		"./src/reddit/endpoints/onboarding/languageSelections.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/makeGqlRequest/index.ts");
			var r, a = n("./src/redditGQL/operations/LanguageSelections.json"),
				o = n("./src/redditGQL/operations/UpdateSpokenLanguagesPreference.json");
			! function(e) {
				e.ALL_KEY = "all_languages_simple", e.SUGGESTED_KEY = "suggested_languages", e.TOP_KEYS = "top_languages"
			}(r || (r = {}));
			const i = (e, t) => {
					const n = {
						allKey: e,
						suggestedKey: r.SUGGESTED_KEY
					};
					return Object(s.a)(t, {
						...a,
						variables: n
					})
				},
				c = async e => {
					const t = await i(r.ALL_KEY, e());
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
					const a = s.body,
						o = null == a ? void 0 : a.data;
					if (o) {
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
							for (let l = 0; l < t.suggested.length; l++) {
								const r = t.suggested[l];
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
							for (let l = 0; l < t.all.length; l++) {
								const a = t.all[l];
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
						})(e === r.TOP_KEYS, o, n)
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
					const r = n.body;
					return null == r ? void 0 : r.data
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
		"./src/reddit/hooks/useToast.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/reddit/models/Toast/index.ts");

			function i() {
				const e = Object(r.d)();
				return Object(s.useCallback)(t => e(Object(a.f)(t)), [e])
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
		"./src/reddit/selectors/experiments/econ/marketplace.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const o = e => {
					return !(Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.Ke
					}) === s.Yd)
				},
				i = Object(a.a)(s.Le)
		},
		"./src/redditGQL/operations/Frontpage.json": function(e) {
			e.exports = JSON.parse('{"id":"d45d9e249839"}')
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
			e.exports = JSON.parse('{"id":"be09d1d59e65"}')
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OnboardingModal.da94f5fa75e6930b73a9.js.map