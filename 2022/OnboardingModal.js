// https://www.redditstatic.com/desktop2x/OnboardingModal.59d993e87042dedecc75.js
// Retrieved at 3/24/2022, 3:40:05 PM by Reddit Dataminer v1.0.0
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
		"./src/lib/pageTitle/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				a = n("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				o = n("./src/reddit/selectors/countrySites.ts"),
				i = n("./src/reddit/selectors/meta.ts");
			const c = (e, t) => {
				const {
					languageCode: n
				} = Object(o.b)(e), c = Object(i.i)(e) || r.DEFAULT_LOCALE, d = Object(s.isPseudoLocale)(c) ? r.DEFAULT_LOCALE : c;
				if (n) {
					const e = Object(a.d)(n, d.substring(0, 2));
					return t + (e ? ` - ${e}` : "")
				}
				return t
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
			const u = () => async (e, t, {
				gqlContext: n
			}) => {
				var s, r;
				const a = await (e => Object(o.a)(e, {
					...i
				}))(n());
				if (!a.ok) return;
				const c = a.body,
					d = (({
						accountDefinedGender: e,
						accountGenderCategory: t
					}) => ({
						definedGender: e,
						genderCategory: t
					}))(null === (r = null === (s = null == c ? void 0 : c.data) || void 0 === s ? void 0 : s.piiIdentity) || void 0 === r ? void 0 : r.gender);
				d && e(m(d))
			}, m = Object(r.a)(l.a), p = e => async (t, n, {
				gqlContext: r
			}) => {
				const i = {
					customGender: e.definedGender,
					genderEnum: e.genderCategory
				};
				(await ((e, t) => Object(o.a)(e, {
					...c,
					variables: t
				}))(r(), {
					input: i
				})).ok ? (t(b(e)), t(Object(a.f)({
					kind: d.b.SuccessCommunity,
					text: s.fbt._("Changes saved", null, {
						hk: "2isjrZ"
					})
				}))) : (t(f()), t(Object(a.f)({
					kind: d.b.Error,
					text: s.fbt._("Changes failed to save", null, {
						hk: "XrtIq"
					})
				})))
			}, b = Object(r.a)(l.b), f = Object(r.a)(l.c)
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
				return O
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "b", (function() {
				return y
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
			const f = Object(r.a)(o.g),
				h = Object(r.a)(o.e),
				g = Object(r.a)(o.h),
				x = Object(r.a)(o.c),
				O = Object(r.a)(o.f),
				v = Object(r.a)(o.j),
				C = Object(r.a)(o.i),
				E = () => async (e, t, {
					gqlContext: n
				}) => {
					const r = t(),
						a = Object(m.e)(r),
						o = Object(m.d)(r),
						d = Object(b.O)(r);
					if (a || !o) return;
					e(g());
					let p = !1;
					try {
						const t = d ? s.LoggedInGeo : s.LoggedOutGeo,
							r = await ((e, t, n) => Object(i.a)(e, {
								...c,
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
								if (j(t)) {
									e(x({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), p = !0
								} else if (k(t)) {
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
									e(f(m)), p = !0
								}
							} else p = !1
						}
					} catch (O) {
						p = !1
					}
					p || e(h({
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
						s = t && t.type;
					return !!(n && !j(e) && s === d.GEO && n[0] && n[0].recommendedSubreddit && n[0].interactedSubreddit)
				}, y = () => async (e, t, n) => {
					var s, r;
					const o = t(),
						i = Object(m.g)(o);
					if (Object(m.f)(o) || null === i || "client" === i) {
						const n = null === (r = null === (s = Object(p.b)(t())) || void 0 === s ? void 0 : s.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
							i = Object(b.P)(o);
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
				return Ce
			})), n.d(t, "frontpageLoaded", (function() {
				return Ee
			})), n.d(t, "frontpageFailed", (function() {
				return _e
			})), n.d(t, "frontpageDataRequested", (function() {
				return je
			})), n.d(t, "frontpageRequestedHelper", (function() {
				return ke
			})), n.d(t, "frontpageRequested", (function() {
				return Ne
			})), n.d(t, "frontpageReloaded", (function() {
				return Se
			})), n.d(t, "morePostsPending", (function() {
				return Te
			})), n.d(t, "morePostsLoaded", (function() {
				return we
			})), n.d(t, "morePostsFailed", (function() {
				return Re
			})), n.d(t, "morePostsRequested", (function() {
				return Pe
			})), n.d(t, "refreshFeed", (function() {
				return Le
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
				f = n("./src/reddit/constants/graphql.ts"),
				h = n("./src/reddit/helpers/getPostLimitForMobile/index.ts"),
				g = n("./src/reddit/models/Live/index.ts"),
				x = n("./src/reddit/models/Onboarding/index.ts"),
				O = n("./src/reddit/models/Post/index.ts"),
				v = n("./src/reddit/helpers/graphql/normalizeInterestTopicsFromGql/index.ts"),
				C = n("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				E = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				_ = n("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				j = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				k = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				y = n("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				N = n("./src/reddit/models/FeedElement/index.ts");

			function I(e) {
				return e.__typename === N.a.FreeNftFeedElement
			}
			var S = n("./src/reddit/models/NotificationInbox/index.ts"),
				T = n("./src/reddit/selectors/experiments/econ/marketplace.ts"),
				w = n("./src/reddit/selectors/experiments/inAppNotification.ts"),
				R = n("./src/reddit/selectors/experiments/onboarding.ts"),
				P = n("./src/reddit/helpers/chooseVariant/index.ts"),
				L = n("./src/reddit/selectors/experiments/utils.ts");
			const G = e => {
				const t = Object(P.c)(e, {
					experimentEligibilitySelector: P.a,
					experimentName: b.Nb
				});
				return !!Object(L.a)(t)
			};
			var M = n("./src/reddit/selectors/platform.ts"),
				F = n("./src/reddit/selectors/user.ts"),
				A = n("./src/redditGQL/operations/Frontpage.json"),
				D = n("./src/lib/initializeClient/installReducer.ts"),
				B = n("./src/reddit/reducers/features/marketplace/index.ts");
			Object(D.a)({
				features: {
					marketplace: B.a
				}
			});
			const q = (e, t) => {
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
					} = t, p = Object(R.b)(e), g = Object(F.Y)(e) || Object(F.P)(e), x = Object(w.a)(e), O = Object(M.q)(e), v = {
						adContext: {
							layout: i ? i.toUpperCase() : f.a.Card,
							reddaid: e.user.reddaid,
							distance: a
						},
						feedRankingContext: {
							servingId: m
						},
						forceGeopopular: !0,
						includeCommunityDUs: !1,
						includeInterestTopics: !!p && !Object(b.Bf)(p),
						includeFeaturedAnnouncements: !0,
						includeLiveEvents: !0,
						includeIdentity: g && !(null === (s = null === (n = e.user.account) || void 0 === n ? void 0 : n.karma) || void 0 === s ? void 0 : s.total),
						includePostRecommendations: G(e),
						includeFreeMarketplaceElement: Object(T.a)(e),
						includeSubredditQuestions: g,
						recentPostIds: e.posts.recent,
						notificationContext: {
							variant: null == x ? void 0 : x.toLowerCase()
						}
					};
					return l && (v.sort = l.toUpperCase()), u && (v.range = u.toUpperCase()), o ? v.pageSize = Object(h.a)(i) : d && (v.pageSize = d), O && O.ad && (v.forceAds = {
						ad: O.ad
					}), r && (v.after = Object(c.a)(r)), v
				},
				W = async (e, t, n, s) => {
					const r = Date.now(),
						a = await ((e, t) => Object(u.a)(e, {
							...A,
							variables: t
						}, {
							traceRequestName: "get_frontpage"
						}))(e, t),
						o = Date.now();
					let i;
					try {
						const e = Date.now();
						i = (({
							trendingSubreddits: e = [],
							identity: t,
							home: n,
							featuredAnnouncements: s,
							recentPosts: r = []
						}) => {
							var a, o;
							const i = [],
								c = [];
							let d, u, m, b;
							const f = {
									postIds: [],
									postInstances: {},
									posts: {},
									postFlair: {},
									profiles: {},
									subreddits: {}
								},
								h = e => {
									if (f.posts[e.id]) return e.id;
									const t = Object(E.f)(e);
									f.posts[t.id] = t;
									const {
										crosspostRoot: n
									} = e;
									n && n.type === O.a.Post && n.postInfo && h(n.postInfo);
									let s = t.id;
									if (Object(O.l)(e)) f.profiles[e.profile.id] || (f.profiles[e.profile.id] = Object(j.a)(e.profile));
									else if (Object(O.n)(e)) f.subreddits[e.subreddit.id] || (f.subreddits[e.subreddit.id] = Object(k.a)(e.subreddit)), f.postFlair[e.subreddit.id] || (f.postFlair[e.subreddit.id] = Object(C.a)(e.subreddit));
									else if (Object(O.h)(e)) {
										const n = Object(E.b)(e);
										if (!n) return null;
										s = n, f.posts[n] = {
											...t,
											id: n,
											permalink: `${t.permalink}?instanceId=${encodeURIComponent(n)}`
										}, f.posts[t.id] || (f.posts[t.id] = {
											...t,
											events: []
										}), f.postInstances[e.id] || (f.postInstances[e.id] = []), f.postInstances[e.id].push(n)
									}
									return s
								};
							for (const l of e) {
								const e = Object(k.a)(l);
								f.subreddits[e.id] = e, i.push(e.id)
							}
							for (const [C, {
									node: _
								}] of n.elements.edges.entries())
								if (Object(O.k)(_)) {
									const e = h(_);
									e && f.postIds.push(e)
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
									const s = h(_.postInfo);
									s && (f.postIds.push(s), f.posts[s].recommendationContext = {
										content: Object(E.d)(e.richtext),
										source: {
											source: null == n ? void 0 : n.toLowerCase(),
											subredditId: null == t ? void 0 : t.id,
											subredditName: null == t ? void 0 : t.prefixedName
										}
									})
								}
							} else if (Object(g.c)(_) && !d) d = _;
							else if (Object(x.f)(_)) {
								const e = null === (a = null == _ ? void 0 : _.interestTopicRecommendations) || void 0 === a ? void 0 : a.recommendationTopics;
								if (e) {
									const t = Object(v.a)(e);
									t.topics.length && (m = {
										interests: t,
										index: C
									})
								}
							} else if (I(_) && !u) u = {
								element: _,
								index: n.elements.edges.findIndex(e => e.node === _)
							};
							else if (Object(S.d)(_) && (null === (o = null == _ ? void 0 : _.notifications) || void 0 === o ? void 0 : o.length)) b = {
								notifications: _.notifications,
								position: C,
								id: _.id
							};
							else {
								const e = `Received unhandled element type when processing frontpage data: "${_.__typename}"`;
								Object(l.b)() || console.warn(e), p.c.captureMessage(e)
							}
							for (const l of r) {
								if (!l) continue;
								const e = h(l);
								e && c.push(e)
							}
							const N = f.postIds.length - 1,
								T = N >= 0 ? f.postIds[N] : "",
								w = n.elements.dist,
								R = n.elements.geoFilter;
							return {
								...f,
								account: t && Object(y.a)(t) || null,
								featuredLiveThread: d,
								marketplaceFeedElement: u,
								interestTopicRecommendations: m,
								announcements: s,
								notifications: b,
								preferences: t && t.preferences && Object(_.a)(t.preferences, t.interactions) || null,
								...0 !== i.length && {
									trendingSubredditIds: i
								},
								...0 !== c.length && {
									recentPostIds: c
								},
								token: T,
								...null !== w && {
									dist: w
								},
								...null !== R && {
									geoFilter: R
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
							name: d.s.FRONTPAGE,
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
			var V = n("./src/lib/pageTitle/index.ts"),
				Q = n("./src/lib/pageTitle/helpers.ts"),
				U = n("./src/reddit/actions/login.ts"),
				H = n("./src/reddit/actions/meta.ts"),
				z = n("./src/reddit/actions/platform.ts"),
				K = n("./src/reddit/actions/toaster.ts"),
				J = n("./src/reddit/constants/history.ts"),
				X = n("./src/reddit/constants/page.ts"),
				Z = n("./src/reddit/constants/parameters.ts"),
				Y = n("./src/reddit/constants/postLayout.ts"),
				$ = n("./src/reddit/contexts/PageLayer/index.tsx"),
				ee = n("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				te = n("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				ne = n("./src/reddit/models/Toast/index.ts"),
				se = n("./src/reddit/selectors/experiments/countrySites.ts"),
				re = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				ae = n("./src/reddit/selectors/frontpage.ts"),
				oe = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				ie = n("./src/reddit/selectors/runTimeEnvVars.ts"),
				ce = n("./src/lib/makeActionCreator/index.ts"),
				de = n("./src/lib/makeListingKey/index.ts"),
				le = n("./src/reddit/actions/ads/index.ts"),
				ue = n("./src/reddit/helpers/trackers/feed.ts"),
				me = n("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				pe = n("./src/reddit/actions/seo/linksModule.ts"),
				be = n("./src/reddit/selectors/seo/linksModule.ts"),
				fe = n("./src/reddit/actions/publicAccessNetwork/api.ts"),
				he = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				ge = n("./src/reddit/helpers/filterListingResponse/index.ts"),
				xe = n("./src/reddit/actions/frontpage/constants.ts"),
				Oe = n("./node_modules/uuid/v4.js"),
				ve = n.n(Oe);
			const Ce = Object(ce.a)(xe.c),
				Ee = Object(ce.a)(xe.b),
				_e = Object(ce.a)(xe.a),
				je = (e, t) => async (n, r, a) => {
					var i, c, d, l;
					const u = r();
					if (u.listings.postOrder.api.pending[e]) return;
					const p = Y.e[Object($.R)(u, {})];
					t.isMobile = Object(o.e)(u.meta.userAgent), t.recentPostIds = u.posts.recent, t.layout = p, t.useMockData = !!u.platform.currentPage && (!!u.platform.currentPage.queryParams.useMockData && Object(ie.b)(u)), n(Ce({
						key: e
					})); {
						const e = u.platform.currentPage,
							n = e && e.url;
						n && (t.clickUrl = n)
					}
					const b = ve()();
					t.correlationId = b;
					const f = null === (c = null === (i = Object(M.b)(u)) || void 0 === i ? void 0 : i.routeMatch) || void 0 === c ? void 0 : c.route.chunk,
						h = Object(F.P)(u),
						g = await Object(m.i)(() => W(a.gqlContext(), q(u, t), Object(F.Y)(u), t.statsdPathsForExperiments), {
							name: "fetchFrontpageData",
							isLoggedIn: h,
							page: f
						});
					n(Object(z.n)(g.status));
					const x = `error-${e}`;
					if (g.ok && g.body) {
						const s = g.body;
						n(Ee({
							key: e,
							meta: u.meta,
							correlationId: b,
							...s
						})), n(K.g(x)), s.geoFilter && n(Object(H.k)(s.geoFilter)), n(Object(le.b)(me.a.FRONTPAGE));
						const a = null === (l = null === (d = Object(M.b)(u)) || void 0 === d ? void 0 : d.locationState) || void 0 === l ? void 0 : l[J.b.FeedLoadReason];
						Object(ue.b)(t.isRefresh ? J.a.UserRefresh : null != a ? a : J.a.InitialLoad)(r())
					} else {
						n(_e({
							error: g.error,
							key: e,
							...g.body
						})), n(K.f({
							id: x,
							kind: ne.b.Error,
							text: s.fbt._("Sorry, we couldn't load posts for this page.", null, {
								hk: "36ypKx"
							}),
							buttonText: s.fbt._("Retry", null, {
								hk: "1XMjgA"
							}),
							buttonAction: je(e, t)
						}));
						const a = g.error;
						Object(ue.a)(a ? `${g.status||"000"}: ${a.type}` : "000: UNKNOWN_ERROR")(r())
					}
				}, ke = (e, t) => async (n, s) => {
					var r;
					const o = s(),
						i = Object(ae.a)(o),
						{
							sort: c = i
						} = e.params,
						l = Object(de.a)(X.b, c, e.queryParams),
						u = o.listings.postOrder.ids[l],
						m = o.listings.postOrder.api.error[l],
						p = o.listings.postOrder.api.pending[l],
						b = Object(se.b)(o),
						f = Z.B in e.queryParams && e.queryParams[Z.B].toUpperCase() || "",
						h = f in d.hc && d.hc[f],
						g = V.e();
					if (p || u && !m && !t) return void(u && (n(z.m({
						title: b ? Object(Q.a)(o, g) : g
					})), (null === (r = o.listings.postOrder.correlationIds) || void 0 === r ? void 0 : r[l]) && n(z.o({
						correlationId: o.listings.postOrder.correlationIds[l]
					})), o.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						n(Object(le.b)(me.a.FRONTPAGE))
					})));
					const x = Object(ee.a)(o),
						O = Object(ee.b)(x),
						v = [Object(ee.c)(x)];
					await n(je(l, {
						...a()(e.queryParams, Z.m),
						...a()(e.queryParams, Z.l),
						limit: O,
						sort: c,
						statsdPathsForExperiments: v,
						t: Object(te.a)(c, h)
					})), n(z.m({
						title: b ? Object(Q.a)(o, g) : g
					})), Object(P.c)(o, {
						experimentEligibilitySelector: P.a,
						experimentName: "redesign_aa"
					});
					const C = Object(re.a)(o, {});
					Object(re.e)(C) && n(Object(U.j)())
				}, ye = () => async (e, t) => {
					var n, s;
					const r = t();
					if (Object(be.a)(r)) return;
					const a = null === (s = null === (n = Object(M.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === s ? void 0 : s.route.chunk,
						o = Object(F.P)(r);
					return Object(m.i)(() => e(Object(pe.d)()), {
						name: "frontpageLinksRequested",
						page: a,
						isLoggedIn: o
					})
				}, Ne = (e, t) => async n => {
					await Promise.all([n(Object(i.b)()), n(ke(e, t)), n(ye()), n(Object(fe.c)(he.R))])
				}, Ie = Object(ce.a)(xe.d), Se = e => async (t, n) => {
					const s = n(),
						r = s.platform.currentPage.routeMatch.match;
					Object(oe.o)(s) || Object(oe.u)(s) || (e || t(Ie()), await t(Ne(r, !0)))
				}, Te = Object(ce.a)(xe.g), we = Object(ce.a)(xe.f), Re = Object(ce.a)(xe.e), Pe = e => async (t, n, {
					gqlContext: s
				}) => {
					const r = n(),
						i = Object(ae.a)(r),
						{
							sort: c = i
						} = e,
						l = r.platform.currentPage ? r.platform.currentPage.queryParams : {},
						u = Object(de.a)(X.b, c, l),
						m = r.listings.postOrder.loadMore[u],
						p = l[Z.B] ? l[Z.B].toUpperCase() : "",
						b = p in d.hc && d.hc[p];
					if (m) {
						const e = r.listings.postOrder.api.pending[u],
							i = r.listings.postOrder.fetchedTokens,
							d = !(!i[u] || !i[u][m.token]);
						if (!e && !d) {
							t(Te({
								key: u,
								fetchedToken: m.token
							}));
							const e = !!r.platform.currentPage && !!r.platform.currentPage.queryParams.useMockData,
								i = Object(ee.a)(r),
								d = Y.a,
								p = [Object(ee.c)(i)],
								f = {
									after: m.token,
									dist: m.dist,
									...a()(l, Z.m),
									isMobile: Object(o.e)(r.meta.userAgent),
									limit: d,
									sort: c,
									t: Object(te.a)(c, b),
									layout: Y.e[Object($.R)(r, {})],
									useMockData: e
								}; {
								const e = r.platform.lastPage,
									t = e && e.url;
								t && (f.clickUrl = t)
							}
							f.correlationId = r.listings.postOrder.correlationIds[u];
							const h = () => W(s(), q(r, f), Object(F.Y)(r), p),
								g = await h(),
								x = {
									...g.body,
									...Object(ge.a)(r, u, g.body)
								};
							if (g.ok) t(we({
								key: u,
								fetchedToken: m.token,
								meta: r.meta,
								...x
							})), Object(ue.b)(J.a.NextPageLoad)(n());
							else {
								t(Re({
									key: u,
									error: g.error,
									fetchedToken: m.token,
									...x
								}));
								const e = g.error;
								Object(ue.a)(e ? `${g.status||"000"}: ${e.type}` : "000: UNKNOWN_ERROR")(n())
							}
						}
					}
				}, Le = e => async (t, n) => {
					const s = n(),
						r = Object(ae.a)(s),
						{
							sort: a = r
						} = e,
						o = s.platform.currentPage ? s.platform.currentPage.queryParams : {},
						i = Object(de.a)(X.b, a, o),
						c = o[Z.B] ? o[Z.B].toUpperCase() : "",
						l = c in d.hc && d.hc[c],
						u = Object(ee.a)(s),
						m = Object(ee.b)(u);
					await t(je(i, {
						limit: m,
						sort: a,
						t: Object(te.a)(a, l),
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
			t.a = ({
				colorIndex: e = 0,
				isSelected: t = !1,
				isSubtopic: n = !1,
				onClickHandler: s,
				topic: i
			}) => r.a.createElement(a.t, {
				className: Object(o.a)(d.a.InterestButton, {
					[d.a.Selected]: t
				}),
				kind: a.b.Button,
				onClick: s,
				style: l(e, t, n)
			}, i)
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
				l = n("./src/reddit/actions/frontpage/index.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/survey/index.ts"),
				p = n("./src/reddit/actions/toaster.ts"),
				b = n("./node_modules/fbt/lib/FbtPublic.js"),
				f = n("./src/lib/sentry/index.ts"),
				h = n("./src/reddit/actions/snoovatar.ts"),
				g = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				x = n("./src/reddit/hooks/useTracking.ts"),
				O = n("./src/reddit/models/Toast/index.ts"),
				v = n("./src/reddit/selectors/avatar.ts");
			var C = () => {
					const e = Object(i.e)(v.a),
						t = Object(i.d)(),
						n = Object(x.a)(),
						s = Object(i.e)(v.c);
					Object(a.useEffect)(() => {
						(null == e ? void 0 : e.csrf_token) || t(Object(h.c)())
					}, []);
					const r = Object(a.useCallback)(async () => {
							t(Object(h.d)())
						}, [t]),
						o = Object(a.useCallback)(async () => {
							if (n(Object(g.a)("save_and_continue")), e && s) {
								n(Object(g.e)("onboarding"));
								try {
									return await t(Object(h.e)(s.accessoryIds, {}, {
										set_avatar_to_profile: !0,
										source: "web_onboarding"
									})), !0
								} catch (r) {
									f.c.captureException(r)
								}
							}
							return t(Object(p.f)({
								kind: O.b.Error,
								text: b.fbt._("Unable to save avatar, please try again.", null, {
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
				E = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				_ = n("./src/reddit/components/Onboarding/Celebration.m.less"),
				j = n.n(_);
			const {
				fbt: k
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var y = () => o.a.createElement("div", {
					className: j.a.CelebrationBg
				}, o.a.createElement("div", {
					className: j.a.CelebrationTitle
				}, k._("We're happy you're here!", null, {
					hk: "1YMdHn"
				})), o.a.createElement("div", {
					className: j.a.CelebrationSubTitle
				}, k._("Your home feed is being created now…", null, {
					hk: "Onr1V"
				})), o.a.createElement("div", null, o.a.createElement(E.a, {
					className: j.a.LoadingSpinner,
					sizePx: 16
				}))),
				N = n("./src/reddit/components/Settings/GenderCollection/index.tsx"),
				I = n("./src/reddit/models/Gender/index.ts"),
				S = n("./src/lib/constants/index.ts"),
				T = n("./src/reddit/components/Onboarding/GenderCollection/GenderCollection.m.less"),
				w = n.n(T),
				R = n("./src/reddit/helpers/trackers/onboarding.ts");
			const P = {
					definedGender: null,
					genderCategory: I.a.OPT_OUT
				},
				L = e => e === I.a.USER_DEFINED;
			var G = ({
					selectedGenderOption: e,
					setSelectedGenderOption: t
				}) => {
					const n = Object(x.a)(),
						s = Object(a.useRef)(null),
						r = Object(a.useRef)([]),
						[i, c] = Object(a.useState)((null == e ? void 0 : e.definedGender) || "");
					Object(a.useEffect)(() => {
						n(Object(R.k)())
					}, [n]);
					const d = e => {
							var t;
							let n = null;
							return L(e) && (n = (null === (t = s.current) || void 0 === t ? void 0 : t.value) || "", c(n)), {
								definedGender: n,
								genderCategory: e
							}
						},
						l = Object(a.useCallback)(e => {
							var r;
							n(Object(R.h)()), t(d(e)), L(e) && (null === (r = s.current) || void 0 === r || r.focus())
						}, [n, t]),
						u = Object(a.useCallback)(e => {
							l(e.value), e.focus()
						}, [l]),
						m = Object(a.useCallback)(t => {
							if (!e || !L(e.genderCategory)) {
								const e = r.current[t];
								e && l(e.value)
							}
						}, [l, e]),
						p = (n, a) => {
							const c = L(n.key);
							return o.a.createElement("label", {
								key: n.key
							}, o.a.createElement("input", {
								checked: n.key === (null == e ? void 0 : e.genderCategory),
								className: w.a.genderRadioButton,
								"data-testid": n.key,
								id: `genderCollectionOption${a+1}`,
								name: "genderCollection",
								onChange: () => l(n.key),
								ref: e => r.current[a] = e,
								type: "radio",
								value: n.key
							}), c ? o.a.createElement("input", {
								className: w.a.genderUserDefinedInput,
								"data-testid": `${n.key}-input`,
								onChange: () => t(d(n.key)),
								onClick: () => m(a),
								onKeyDown: e => ((e, t) => {
									var n;
									const s = e.target;
									if (s) {
										if (S.h[e.key] && !s.value) {
											const n = r.current.length - 1;
											let s;
											(s = e.keyCode === S.h.ArrowUp || e.keyCode === S.h.ArrowLeft ? r.current[t ? t - 1 : n] : r.current[t === n ? 0 : t + 1]) && u(s)
										}
										e.keyCode === S.J && (null === (n = r.current[t]) || void 0 === n || n.focus())
									}
								})(e, a),
								placeholder: n.displayText,
								ref: s,
								tabIndex: -1,
								value: i
							}) : o.a.createElement("span", {
								className: w.a.genderOption
							}, n.displayText))
						};
					return o.a.createElement("div", null, Object(N.b)().map((e, t) => p(e, t)))
				},
				M = n("./src/reddit/constants/avatars.ts"),
				F = n("./src/reddit/controls/Button/index.tsx"),
				A = n("./src/reddit/icons/fonts/index.tsx"),
				D = n("./src/reddit/components/Onboarding/AvatarPicker/AvatarPicker.m.less"),
				B = n.n(D);
			const {
				fbt: q
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var W = ({
					avatarImage: e,
					fetchRandomAvatar: t
				}) => {
					const n = Object(x.a)();
					Object(a.useEffect)(() => {
						n(Object(g.n)())
					}, [n]);
					const s = Object(a.useCallback)(() => {
							n(Object(g.a)("randomize")), t()
						}, [n, t]),
						{
							legalCopy: r,
							learnMoreText: i,
							url: c
						} = M.a;
					return o.a.createElement("div", {
						className: B.a.avatarPicker
					}, o.a.createElement("div", {
						className: B.a.dynamicSizeWrapper
					}, e ? o.a.createElement("img", {
						"data-testid": "preview-image",
						src: `data:image/png;base64,${encodeURIComponent(e)}`,
						className: B.a.previewImage
					}) : o.a.createElement(E.a, {
						className: B.a.loader
					}), o.a.createElement("div", {
						className: B.a.legalTextContainer
					}, r(), o.a.createElement("a", {
						href: c,
						className: B.a.learnMoreLink
					}, i()))), o.a.createElement(F.t, {
						className: B.a.randomizeButton,
						priority: F.c.Secondary,
						onClick: s,
						Icon: Object(A.b)("random"),
						iconClassName: B.a.icon
					}, q._("Randomize", null, {
						hk: "uwAa8"
					})))
				},
				V = n("./node_modules/lodash/times.js"),
				Q = n.n(V),
				U = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				H = n("./src/reddit/icons/svgs/CommunityDefault/filled.tsx"),
				z = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				K = n("./src/reddit/icons/svgs/Positive/index.tsx"),
				J = n("./src/reddit/components/Onboarding/CommunityPicker.m.less"),
				X = n.n(J);
			const {
				fbt: Z
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Y = () => Z._("Recommended for you", null, {
				hk: "28LTkA"
			}), $ = ({
				community: e,
				schemeName: t,
				selected: n,
				toggleAll: s,
				toggleSelection: r
			}) => {
				const {
					communities: i
				} = e, [c, d] = Object(a.useState)(null);
				Object(a.useEffect)(() => {
					d(!i.find(e => !n[e.id]))
				}, [i, n]);
				const l = Object(a.useCallback)(() => {
					s(e.topicId, !c), d(!c)
				}, [e.topicId, c, s]);
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: X.a.RecommendedHeader
				}, o.a.createElement("span", {
					className: X.a.SectionTitle
				}, e.topicTitle), o.a.createElement("button", {
					onClick: l,
					className: X.a.SelectAllLink
				}, c && Z._("Deselect All", null, {
					hk: "4u0XYF"
				}), !c && null !== c && Z._("Select All", null, {
					hk: "3izh21"
				}))), o.a.createElement(o.a.Fragment, null, o.a.createElement(te, {
					communities: e.communities,
					communityId: e.topicId,
					schemeName: t,
					selected: n,
					toggleSelection: r,
					topicTitle: e.topicTitle
				})))
			}, ee = () => o.a.createElement(o.a.Fragment, null, Q()(5, e => o.a.createElement(U.a, {
				key: e,
				fullWidth: !0,
				large: !0
			}))), te = ({
				communities: e,
				communityId: t,
				schemeName: n,
				selected: s,
				topicTitle: r,
				toggleSelection: i
			}) => {
				const c = Object(x.a)(),
					[d, l] = Object(a.useState)(!1),
					u = e.length > 4,
					m = e.slice(0, d ? void 0 : 4),
					p = "recommended" === t ? "" : r,
					b = Object(a.useCallback)(() => {
						l(!0), c(Object(R.f)(r))
					}, [c, r]);
				return o.a.createElement(o.a.Fragment, null, m.map(e => o.a.createElement(ne, {
					communityId: e.id,
					description: e.description,
					icon: e.icon,
					isSelected: s[e.id],
					key: e.id,
					prefixedName: e.prefixedName,
					schemeName: n,
					toggleSelection: i,
					topicTitle: r
				})), u && !d && o.a.createElement(se, {
					text: p,
					showMore: b
				}))
			}, ne = ({
				communityId: e,
				description: t,
				icon: n,
				isSelected: s,
				prefixedName: r,
				schemeName: i,
				toggleSelection: c,
				topicTitle: l
			}) => {
				const u = Object(x.a)(),
					m = Object(a.useCallback)(() => {
						u(Object(R.d)(!s, l, r, i)), c(e)
					}, [e, s, r, i, u, c, l]);
				return o.a.createElement("div", {
					className: Object(d.a)(X.a.CommunityRow, {
						[X.a.Selected]: s
					}),
					onClick: m
				}, o.a.createElement("div", {
					className: X.a.IconSection
				}, n && o.a.createElement("img", {
					className: X.a.IconWrapper,
					src: n
				}), !n && o.a.createElement(H.a, {
					className: X.a.CommunityNoIcon
				})), o.a.createElement("div", {
					className: X.a.TextSection
				}, o.a.createElement("div", {
					className: X.a.Info
				}, r), o.a.createElement("div", {
					className: X.a.Description
				}, t)), o.a.createElement("div", {
					className: X.a.ButtonSection
				}, s && o.a.createElement(K.a, {
					className: X.a.SelectedIcon
				}), !s && o.a.createElement(z.a, {
					className: X.a.SelectIcon
				})))
			}, se = ({
				showMore: e,
				text: t
			}) => o.a.createElement("div", {
				className: X.a.MoreRecommendations
			}, o.a.createElement("button", {
				onClick: e
			}, !t && Z._("More recommendations", null, {
				hk: "3I8APZ"
			}), t && Z._("More in {topic-title}", [Z._param("topic-title", t)], {
				hk: "4afv7s"
			})));
			var re = ({
					communitiesByTopic: e,
					loadingCommunities: t,
					recommendedCommunities: n,
					selected: s,
					schemeName: r,
					toggleSelection: i,
					toggleAll: c
				}) => {
					const d = Object(x.a)();
					return Object(a.useEffect)(() => {
						d(Object(R.g)())
					}, [d]), o.a.createElement("div", {
						className: X.a.CommunityListWrapper
					}, n.length > 0 && o.a.createElement($, {
						community: {
							communities: n,
							topicId: "recommended",
							topicTitle: Y()
						},
						schemeName: r,
						selected: s,
						toggleAll: c,
						toggleSelection: i
					}), (!!e.length || t) && o.a.createElement(o.a.Fragment, null, t && o.a.createElement(ee, null), e.map(e => o.a.createElement($, {
						key: e.topicId,
						community: e,
						schemeName: r,
						selected: s,
						toggleAll: c,
						toggleSelection: i
					}))))
				},
				ae = n("./src/reddit/components/Onboarding/Interests/InterestPill.tsx"),
				oe = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				ie = n("./src/reddit/components/Onboarding/Interests/InterestPicker.m.less"),
				ce = n.n(ie);
			const {
				fbt: de
			} = n("./node_modules/fbt/lib/FbtPublic.js"), le = ({
				interests: e,
				schemeName: t,
				selected: n,
				toggleSelection: s,
				topicColor: r = null
			}) => {
				const i = Object(x.a)(),
					c = Object(a.useCallback)((e, n, r, a) => {
						i(Object(R.l)(!n, !r, a, t)), s(e)
					}, [t, i, s]);
				return o.a.createElement(o.a.Fragment, null, e.map((e, a) => {
					var i;
					const d = !!n[e.id],
						l = null !== r,
						u = e.topic;
					return o.a.createElement(o.a.Fragment, {
						key: e.id
					}, o.a.createElement(ae.a, {
						colorIndex: l && null != r ? r : a,
						isSelected: d,
						isSubtopic: l,
						key: e.id,
						onClickHandler: () => c(e, d, l, u),
						topic: u
					}), d && !!(null === (i = e.children) || void 0 === i ? void 0 : i.length) && o.a.createElement(le, {
						interests: e.children,
						schemeName: t,
						selected: n,
						toggleSelection: s,
						topicColor: a
					}))
				}))
			}, ue = () => {
				const e = Object(oe.b)({
					isLoading: !0
				});
				return o.a.createElement(o.a.Fragment, null, Q()(30, t => o.a.createElement("div", {
					key: t,
					className: Object(d.a)(ce.a.Placeholder, e)
				})))
			};
			var me = ({
					interests: e,
					schemeName: t,
					loadingInterests: n,
					selected: s,
					toggleSelection: r
				}) => {
					const i = Object(x.a)();
					return Object(a.useEffect)(() => {
						i(Object(R.o)())
					}, [i]), o.a.createElement("div", {
						className: ce.a.InterestListButtons
					}, n ? o.a.createElement(ue, null) : o.a.createElement(le, {
						interests: e,
						schemeName: t,
						selected: s,
						toggleSelection: r
					}))
				},
				pe = n("./src/reddit/components/Onboarding/index.m.less"),
				be = n.n(pe);
			const {
				fbt: fe
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var he;
			! function(e) {
				e.AVATAR = "avatar", e.CELEBRATION = "celebration", e.COMMUNITIES = "communities", e.GENDER = "gender", e.INTERESTS = "interests"
			}(he || (he = {}));
			const ge = ({
				activeStep: e,
				avatarImage: t,
				communitiesByTopic: n,
				fetchRandomAvatar: s,
				interests: r,
				loadingCommunities: i,
				loadingInterests: c,
				recommendedCommunities: d,
				selectedCommunities: l,
				selectedInterests: u,
				setSelectedCommunities: m,
				setSelectedInterests: p,
				selectedGenderOption: b,
				setSelectedGenderOption: f
			}) => {
				const h = Object(a.useRef)(null);
				Object(a.useEffect)(() => {
					var e, t;
					return null === (t = null === (e = h.current) || void 0 === e ? void 0 : e.scroll) || void 0 === t ? void 0 : t.call(e, 0, 0)
				}, [e]);
				const g = Object(a.useCallback)(e => {
						const t = l[e],
							n = {
								...l
							};
						t ? delete n[e] : n[e] = !0, m(n)
					}, [l, m]),
					x = Object(a.useCallback)((e, t) => {
						const s = {
								...l
							},
							r = e => e.forEach(e => {
								t ? s[e.id] = !0 : delete s[e.id]
							});
						if ("recommended" === e) r(d);
						else {
							const t = n.find(t => t.topicId === e);
							t && r(t.communities)
						}
						m(s)
					}, [n, d, l, m]),
					O = Object(a.useCallback)(e => {
						const {
							children: t,
							id: n
						} = e, s = u[n], r = {
							...u
						};
						s ? (delete r[n], s.forEach(e => delete r[e])) : r[n] = [...(null == t ? void 0 : t.map(e => e.id)) || []], p(r)
					}, [u, p]);
				return o.a.createElement("div", {
					className: be.a.SelectedComponent,
					ref: h
				}, e === he.GENDER && o.a.createElement(G, {
					selectedGenderOption: b,
					setSelectedGenderOption: f
				}), e === he.INTERESTS && o.a.createElement(me, {
					interests: r.topics,
					loadingInterests: c,
					schemeName: r.schemeName,
					selected: u,
					toggleSelection: O
				}), e === he.COMMUNITIES && o.a.createElement(re, {
					communitiesByTopic: n,
					loadingCommunities: i,
					recommendedCommunities: d,
					schemeName: r.schemeName,
					selected: l,
					toggleAll: x,
					toggleSelection: g
				}), e === he.AVATAR && o.a.createElement(W, {
					avatarImage: t,
					fetchRandomAvatar: s
				}))
			};
			var xe = n("./src/reddit/constants/experiments.ts"),
				Oe = n("./src/reddit/constants/modals.ts"),
				ve = n("./src/reddit/contexts/ApiContext.tsx"),
				Ce = n("./src/lib/makeGqlRequest/index.ts"),
				Ee = n("./node_modules/lodash/uniqBy.js"),
				_e = n.n(Ee),
				je = n("./src/reddit/customMiddleware/recentSubreddits.ts"),
				ke = n("./src/reddit/endpoints/economics/specialMembership.ts"),
				ye = n("./src/reddit/endpoints/subreddit/local.ts"),
				Ne = n("./src/reddit/endpoints/subreddit/subscriptions.ts");
			var Ie = n("./src/reddit/models/Onboarding/index.ts"),
				Se = n("./src/redditGQL/operations/InterestTopicsByIds.json");
			const Te = async (e, t) => {
				const n = await ((e, t) => {
					const n = {
						topicIds: [],
						schemeName: Ie.b,
						maxSubreddits: 10,
						...t
					};
					return Object(Ce.a)(e, {
						...Se,
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
				}) => {
					const t = [];
					return e.forEach(({
						node: e
					}) => {
						var n, s, r;
						const a = [];
						null === (r = null === (s = null === (n = e.topic) || void 0 === n ? void 0 : n.subreddits) || void 0 === s ? void 0 : s.edges) || void 0 === r || r.forEach(({
							node: e
						}) => {
							e.isSubscribed || a.push((({
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
							})(e))
						}), a.length && t.push({
							communities: a,
							topicId: e.id,
							topicTitle: e.topic.title
						})
					}), t
				})(e))(r) : null
			}, we = e => {
				var t;
				return {
					description: e.publicDescription,
					icon: e.communityIcon || (null === (t = e.icon) || void 0 === t ? void 0 : t.url),
					id: e.id,
					isSubscribed: e.isSubscribed,
					prefixedName: e.displayText
				}
			}, Re = async e => {
				var t;
				const n = await Object(ye.b)(e(), {
					first: 10
				});
				if (n && (null === (t = null == n ? void 0 : n.rankings) || void 0 === t ? void 0 : t.length)) {
					const {
						rankings: e,
						subreddits: t
					} = n;
					return e.map(({
						id: e
					}) => we(t[e]))
				}
				return null
			}, Pe = async e => {
				const t = Object(je.b)();
				if (null == t ? void 0 : t.length) {
					const n = t.map(e => e.id),
						s = await Object(ke.e)(e(), n);
					if (s.ok) return Object.values(s.body).map(we)
				}
				return null
			};
			var Le = n("./src/reddit/helpers/graphql/normalizeInterestTopicsFromGql/index.ts"),
				Ge = n("./src/redditGQL/operations/InterestTopics.json"),
				Me = n("./src/redditGQL/operations/UpdateTopicPreferences.json");
			const Fe = async e => {
				const t = await (e => {
					const t = {
						first: 500,
						maxChildren: 500,
						maxDepth: 2,
						schemeName: Ie.b
					};
					return Object(Ce.a)(e, {
						...Ge,
						variables: t
					})
				})(e());
				if (!t.ok) return null;
				const n = t.body,
					s = null == n ? void 0 : n.data.interestTopics;
				return s ? Object(Le.a)(s) : null
			}, Ae = (e, t) => ((e, t) => Object(Ce.a)(e, {
				...Me,
				variables: t
			}))(e(), {
				input: {
					selectedOnboardingTopicIds: t
				}
			});
			var De = n("./src/reddit/helpers/counters/onboarding.ts"),
				Be = n("./src/reddit/helpers/onboarding/reonboarding.ts"),
				qe = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				We = n("./src/reddit/icons/svgs/svgIcons.tsx"),
				Ve = n("./src/reddit/selectors/activeModal.ts"),
				Qe = n("./src/reddit/selectors/experiments/econ/index.ts"),
				Ue = n("./src/reddit/selectors/experiments/onboarding.ts"),
				He = n("./src/reddit/selectors/experiments/survey.ts"),
				ze = n("./src/reddit/selectors/onboarding.ts"),
				Ke = n("./src/reddit/actions/accountGender/index.ts"),
				Je = n("./src/reddit/actions/onboarding/index.ts");

			function Xe() {
				return (Xe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: Ze
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ye = e => e.type === Ie.c.REONBOARDING, $e = () => Object(p.f)({
				kind: O.b.Error,
				text: Ze._("Something went wrong", null, {
					hk: "22u7ha"
				})
			}), et = async (e, t) => {
				const n = {
					ok: !0,
					preSelectedCommunities: {},
					recommendedCommunities: []
				};
				try {
					n.recommendedCommunities = await (async (e, t) => {
						const n = [Re(t), Pe(e)],
							[s, r] = await Promise.all(n);
						return _e()([...r || [], ...s || []], e => e.id).filter(e => !e.isSubscribed)
					})(e, t)
				} catch (s) {
					n.ok = !1
				}
				return n
			}, tt = async (e, t, n, s) => {
				const r = Object.keys(n),
					a = Object.keys(s),
					o = [],
					i = {
						ok: !0,
						reload: !1
					};
				if (r.length && o.push(((e, t) => Object(Ne.c)(e(), {
						subredditIds: t,
						subscribe: !0
					}))(e, r)), a.length && o.push(Ae(t, a)), o.length) try {
					(await Promise.all(o)).some(({
						ok: e
					}) => !e) ? i.ok = !1 : i.reload = !0
				} catch (c) {
					i.ok = !1
				}
				return i
			}, nt = Object(c.a)(e => {
				const {
					gqlContext: t,
					apiContext: n
				} = e, s = Object(i.d)(), r = Object(x.a)(), c = Object(i.e)(Ve.a), p = Ye(c), b = p ? he.INTERESTS : he.GENDER, [f, h] = Object(a.useState)(b), [O, v] = Object(a.useState)(null), E = Object(i.e)(ze.a), [_, j] = Object(a.useState)(p), k = {
					topics: [],
					schemeName: void 0
				}, [N, S] = Object(a.useState)(k), [T, G] = Object(a.useState)(!1), [M, F] = Object(a.useState)(Ye(c) && (null == c ? void 0 : c.selectedInterests) || {}), [D, B] = Object(a.useState)(!1), [q, W] = Object(a.useState)([]), [V, Q] = Object(a.useState)([]), [U, H] = Object(a.useState)({}), {
					avatarImage: z,
					fetchRandomAvatar: K,
					saveAvatar: J
				} = C();
				Object(a.useEffect)(() => {
					(_ || E) && async function() {
						G(!0);
						const e = await Fe(t);
						G(!1), e && S(e)
					}()
				}, [_, E, t]), Object(a.useEffect)(() => {
					E && Object(De.a)(null == O ? void 0 : O.genderCategory, E.success)
				}, [E, O]);
				const X = Object(i.e)(Ue.a) === xe.fb.Removed;
				Object(a.useEffect)(() => {
					let e = !1;
					return async function() {
						let r = {
							ok: !0,
							preSelectedCommunities: {},
							recommendedCommunities: []
						};
						X || (r = await et(n, t));
						const {
							ok: a,
							preSelectedCommunities: o,
							recommendedCommunities: i
						} = r;
						a ? e || (H(o), Q(i)) : s($e())
					}(), () => {
						e = !0
					}
				}, [n, s, t]);
				const Z = Object(i.e)(e => Object(He.f)(e)),
					Y = Object(a.useCallback)(() => {
						s(Object(u.g)(Oe.a.ONBOARDING_MODAL_D2X)), Z && s(Object(m.g)()), p && (r(Object(R.m)()), Object(Be.a)())
					}, [s, p, Z, r]),
					$ = Object(a.useCallback)((e = 3e3) => setTimeout(Y, e), [Y]),
					ee = Object(a.useCallback)(() => {
						const e = Object.keys(M).filter(e => 0 === M[e].length || !M[e].find(e => M[e]));
						W([]), e.length && async function() {
							B(!0);
							const n = await Te(t, e);
							B(!1), n && W(n)
						}()
					}, [t, M]),
					te = Object(a.useCallback)(e => {
						G(!0), h(he.INTERESTS), s(Object(Ke.a)(e))
					}, [s]),
					ne = Object(a.useCallback)(async () => {
						r(Object(R.j)()), te(O || P)
					}, [te, O, r]),
					se = Object(a.useCallback)(async () => {
						r(Object(R.n)()), h(he.COMMUNITIES), ee()
					}, [ee, r]),
					re = Object(a.useCallback)(async () => {
						r(Object(R.e)()), K(), h(he.AVATAR);
						const e = await tt(n, t, U, M);
						e.ok ? e.reload && s(Object(l.frontpageReloaded)()) : s($e())
					}, [n, s, K, t, U, M, r]),
					ae = Object(a.useCallback)(() => {
						h(he.CELEBRATION), $()
					}, [$]),
					oe = Object(a.useCallback)(() => {
						J(), ae()
					}, [J, ae]),
					ie = (() => f === he.GENDER ? ne : f === he.INTERESTS ? se : f === he.COMMUNITIES ? re : oe)(),
					ce = Object(i.e)(e => f === he.AVATAR && !p && Object(Qe.c)(e));
				Object(a.useEffect)(() => {
					f !== he.AVATAR || ce || ae()
				}, [ce, f, ae]);
				const de = f !== b,
					le = Object(a.useCallback)(() => {
						f === he.INTERESTS ? (s(Object(Je.resetGenderUpdateState)()), j(!1), h(he.GENDER)) : f === he.COMMUNITIES ? h(he.INTERESTS) : f === he.AVATAR && h(he.COMMUNITIES)
					}, [f, s]),
					ue = f === he.GENDER || f === he.AVATAR,
					me = Object(a.useCallback)(() => {
						f === he.GENDER ? (r(Object(R.i)()), j(!0), h(he.INTERESTS)) : f === he.INTERESTS ? (r(Object(R.m)()), Y()) : f === he.AVATAR && (r(Object(g.a)("skip")), ae())
					}, [Y, r, f, ae]),
					pe = Object.keys(U).length,
					fe = Object.keys(M).length,
					ve = f === he.GENDER && !(e => !!e && (!L(null == e ? void 0 : e.genderCategory) || !!(e.definedGender && e.definedGender.length <= I.b)))(O) || f === he.INTERESTS && fe < (p ? 1 : 3) || f === he.COMMUNITIES && pe < 1;
				if (f === he.CELEBRATION || f === he.AVATAR && !ce) return o.a.createElement(y, null);
				let Ce;
				return p ? Ce = o.a.createElement("button", {
					"aria-label": Ze._("Close", null, {
						hk: "3XndV9"
					}),
					className: be.a.dismissButton,
					onClick: Y
				}, o.a.createElement(A.a, {
					name: "close"
				})) : ue && (Ce = o.a.createElement("button", {
					className: be.a.skipButton,
					onClick: me
				}, Ze._("Skip", null, {
					hk: "2S8Lme"
				}))), o.a.createElement("div", {
					className: be.a.container
				}, o.a.createElement("header", {
					className: be.a.header
				}, o.a.createElement("div", {
					className: be.a.headerBar
				}, o.a.createElement("div", null, de && o.a.createElement(We.d, {
					className: be.a.backButton,
					onClick: le
				})), o.a.createElement(qe.a, {
					className: be.a.snooIcon
				}), o.a.createElement("div", {
					className: be.a.skipOrDismissContainer
				}, Ce)), f === he.GENDER && o.a.createElement("div", {
					className: `${be.a.title} ${w.a.title}`
				}, Ze._("Which of the following best describes you?", null, {
					hk: "2hsRwl"
				})), f === he.INTERESTS && o.a.createElement("div", {
					className: be.a.title
				}, Ze._("What are you into?", null, {
					hk: "2hUwMd"
				})), f === he.COMMUNITIES && o.a.createElement("div", {
					className: be.a.title
				}, Ze._("Join some communities", null, {
					hk: "1iB29u"
				})), f === he.AVATAR && o.a.createElement("div", {
					className: be.a.title
				}, Ze._("Style your avatar", null, {
					hk: "15i2ld"
				})), f === he.GENDER && o.a.createElement("div", {
					className: w.a.subtitle
				}, Ze._("Reddit will never share this information and uses it to improve what content you see.", null, {
					hk: "4ievQt"
				})), f === he.INTERESTS && o.a.createElement("div", {
					className: be.a.subtitle
				}, p ? Ze._("Select topics to continue", null, {
					hk: "2LhE4e"
				}) : Ze._("Select three topics to continue", null, {
					hk: "oHYeb"
				})), f === he.AVATAR && o.a.createElement("div", {
					className: be.a.subtitle
				}, Ze._("This is how people will see you on Reddit.", null, {
					hk: "2SmAiC"
				}), o.a.createElement("br", null), Ze._("(You can change it later if you’d like.)", null, {
					hk: "1x9ZNL"
				}))), o.a.createElement(ge, {
					activeStep: f,
					avatarImage: z,
					communitiesByTopic: q,
					fetchRandomAvatar: K,
					interests: N,
					loadingCommunities: D,
					loadingInterests: T,
					recommendedCommunities: V,
					selectedCommunities: U,
					selectedGenderOption: O,
					selectedInterests: M,
					setSelectedCommunities: H,
					setSelectedGenderOption: v,
					setSelectedInterests: F
				}), o.a.createElement("div", {
					className: Object(d.a)(be.a.continueButtonWrapper, {
						[be.a.avatarPicker]: f === he.AVATAR
					})
				}, o.a.createElement("button", {
					className: be.a.continueButton,
					disabled: ve,
					onClick: ie
				}, Ze._("Continue", null, {
					hk: "15wNPy"
				}))))
			});
			t.default = Object(ve.b)(e => o.a.createElement(nt, Xe({}, e, {
				className: Object(d.a)(e.className, be.a.modal),
				onOverlayClick: r.a,
				overlayClassName: be.a.overlay
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
				return C
			})), n.d(t, "a", (function() {
				return E
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
			class f extends a.a.Component {
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
			var h = Object(o.a)(f),
				g = n("./src/reddit/components/Settings/shared/Dropdown/index.tsx"),
				x = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				O = n("./src/reddit/components/Settings/GenderCollection/index.m.less"),
				v = n.n(O);
			const C = () => [{
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
					return a.a.createElement(x.c, {
						label: s.fbt._("Gender", null, {
							hk: "1spCV5"
						}),
						subtext: s.fbt._("Reddit will never share this information and only uses it to improve what content you see.", null, {
							hk: "1PqDkg"
						})
					}, a.a.createElement("div", {
						className: v.a.wrapper
					}, a.a.createElement(g.a, {
						dropdownId: "gender-dropdown-id",
						items: C(),
						onSelect: this.onSelect,
						placeholder: s.fbt._("Select", null, {
							hk: "1zIGi5"
						}),
						selectedKey: i || ""
					})), e && a.a.createElement(h, {
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
				f = n.n(b);
			const h = Object(i.a)(l.a),
				g = Object(o.c)({
					isDropdownOpen: (e, t) => Object(p.b)(t.dropdownId)(e)
				}),
				x = Object(a.b)(g, (e, t) => ({
					openDropdown: () => {
						e(Object(d.h)({
							tooltipId: t.dropdownId
						}))
					}
				}));
			class O extends r.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onToggleDropdown = () => {
						this.props.openDropdown()
					}, this.renderLabel = e => r.a.createElement(u.b, {
						className: f.a.dropdownRow,
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
						className: Object(c.a)(f.a.container, e.className),
						onClick: this.onToggleDropdown,
						"data-testid": i
					}, r.a.createElement("div", {
						className: f.a.labelWrapper
					}, s(l), r.a.createElement("span", null, r.a.createElement(m.b, null))), r.a.createElement(h, {
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
				return ae
			})), n.d(t, "p", (function() {
				return oe
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
				return Oe
			})), n.d(t, "c", (function() {
				return ve
			})), n.d(t, "e", (function() {
				return Ce
			})), n.d(t, "h", (function() {
				return Ee
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
				f = n("./src/reddit/controls/Dropdown/Row.tsx"),
				h = n("./src/reddit/controls/FormFields/index.tsx"),
				g = n("./src/lib/lessComponent.tsx"),
				x = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				O = n("./src/reddit/controls/Select/index.m.less"),
				v = n.n(O);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const E = g.a.span("Wrapper", v.a),
				_ = g.a.select("Inner", v.a),
				j = g.a.wrapped(x.b, "Caret", v.a);

			function k({
				className: e,
				innerClassName: t,
				...n
			}) {
				const s = n.disabled ? {
					"data-disabled": n.disabled
				} : {};
				return r.a.createElement(E, {
					className: e
				}, r.a.createElement(_, C({
					className: t
				}, n)), r.a.createElement(j, C({
					isSubreddit: !0
				}, s)))
			}
			var y = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				N = n("./src/reddit/controls/Typography/index.tsx"),
				I = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				S = n("./src/reddit/icons/svgs/Circle/index.tsx"),
				T = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				w = n("./node_modules/lodash/range.js"),
				R = n.n(w),
				P = n("./src/reddit/controls/Button/index.tsx"),
				L = n("./src/reddit/layout/row/Inline/index.tsx"),
				G = n("./src/reddit/models/Flair/index.ts"),
				M = n("./src/reddit/selectors/tooltip.ts"),
				F = n("./src/reddit/selectors/user.ts"),
				A = n("./src/reddit/components/Settings/shared/Widgets.m.less"),
				D = n.n(A);

			function B() {
				return (B = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const q = Object(l.a)(b.a),
				W = g.a.wrapped(S.a, "Circle", D.a),
				V = g.a.h3("Label", D.a),
				Q = g.a.wrapped(N.c, "Subtext", D.a),
				U = g.a.wrapped(m.a, "HoverTooltip", D.a),
				H = g.a.div("ControlContainer", D.a),
				z = g.a.div("TextContainer", D.a),
				K = g.a.div("ActionContainer", D.a),
				J = ({
					className: e,
					direction: t,
					isCreateCommunity: n,
					inModal: s,
					isNightModeOn: a,
					disabled: o,
					indent: i,
					last: d,
					...l
				}) => r.a.createElement("div", B({}, l, {
					className: Object(c.a)(D.a.Wrapper, e, {
						[D.a.mColumn]: "column" === t,
						[D.a.mDisabled]: !!o,
						[D.a.mIndent]: !!i,
						[D.a.mLast]: !!d,
						[D.a.isCreateCommunity]: !!n,
						[D.a.inModal]: !!s,
						[D.a.isNightModeOn]: !!a
					})
				})),
				X = g.a.a("Link", D.a),
				Z = g.a.wrapped(X, "SubtextLink", D.a),
				Y = g.a.wrapped(T.a, "LinkIcon", D.a),
				$ = g.a.button("LinkButton", D.a),
				ee = g.a.wrapped(I.a, "ArrowRight", D.a),
				te = e => r.a.createElement(J, {
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					isCreateCommunity: e.isCreateCommunity,
					last: e.last
				}, r.a.createElement(z, {
					className: e.textContainerClassName
				}, r.a.createElement(V, null, e.label, e.isRequired && r.a.createElement(W, null)), r.a.createElement(Q, null, e.subtext)), r.a.createElement(K, null, e.children)),
				ne = g.a.div("StyledFlair", D.a),
				se = g.a.wrapped(ne, "SpoilerFlair", D.a),
				re = g.a.wrapped(ne, "NSFWFlair", D.a),
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
					return r.a.createElement(J, {
						className: e.className,
						disabled: e.disabled,
						indent: e.indent,
						last: e.last
					}, r.a.createElement(z, null, r.a.createElement(L.a, null, r.a.createElement("label", {
						htmlFor: t
					}, r.a.createElement(V, null, e.label))), r.a.createElement(Q, null, e.subtext)), r.a.createElement(K, null, r.a.createElement(H, null, e.tooltip && r.a.createElement(U, {
						tooltipContentClass: e.tooltipContentClassName,
						text: e.tooltip
					}), r.a.createElement(y.a, {
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
					isNightModeOn: F.cb
				}),
				pe = Object(a.b)(me)(e => r.a.createElement(J, {
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
				}, !e.inModal && r.a.createElement(L.a, null, r.a.createElement(V, null, e.label)), !e.hideSubtext && r.a.createElement(Q, null, " ", r.a.createElement(ue, {
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
				}), r.a.createElement(de, null, Object.keys(e.ticks).map((t, n) => r.a.createElement(le, {
					key: t,
					style: {
						color: t === e.value.toString() ? e.ticks[t].color : "#878A8C"
					}
				}, e.ticks[t].text))))))),
				be = e => r.a.createElement(J, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, r.a.createElement(z, null, r.a.createElement(L.a, null, r.a.createElement(V, null, e.label)), r.a.createElement(Q, null, e.subtext)), r.a.createElement(K, null, r.a.createElement(H, null, r.a.createElement(P.o, {
					onClick: e.onClick
				}, e.actionText)))),
				fe = e => r.a.createElement(J, {
					className: e.className,
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, r.a.createElement(z, null, r.a.createElement(X, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, e.label, r.a.createElement(Y, null)), r.a.createElement(Q, null, e.subtext)), r.a.createElement(K, null, r.a.createElement(X, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, r.a.createElement(ee, null)))),
				he = e => r.a.createElement(J, {
					className: e.className,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, r.a.createElement(z, null, r.a.createElement($, {
					onClick: e.onClick,
					className: Object(c.a)({
						[D.a.NoColor]: e.color && "none" === e.color
					})
				}, e.label), r.a.createElement(Q, null, e.subtext)), r.a.createElement(K, null, !!e.hintText && r.a.createElement("div", {
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
				ge = Object(i.c)({
					isOpen: (e, t) => Object(M.b)(t.id)(e)
				}),
				xe = Object(a.b)(ge, (e, t) => ({
					openDropdown: () => {
						e(Object(d.h)({
							tooltipId: t.id
						}))
					}
				}))(e => r.a.createElement(J, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, r.a.createElement(z, null, r.a.createElement(V, null, e.label), r.a.createElement(Q, null, e.subtext)), r.a.createElement(K, null, (e => r.a.createElement("div", {
					className: D.a.DropdownWrapper,
					onClick: e.openDropdown
				}, r.a.createElement("span", {
					className: D.a.Row,
					id: `SettingDropdown--${e.id}`
				}, e.displayTitle || e.selected), r.a.createElement(x.b, {
					className: D.a.DropdownTriangle
				}), r.a.createElement(q, {
					container: void 0,
					isOpen: e.isOpen,
					renderContentsHidden: !0,
					isOverlay: !1,
					tooltipId: `SettingDropdown--${e.id}`
				}, e.items.map((t, n) => r.a.createElement(f.b, {
					className: D.a.DropdownRow,
					displayText: e.displayItems ? e.displayItems[n] : t,
					isSelected: e.selected === t,
					onClick: () => e.onClick(t),
					key: "row--" + n,
					item: t
				}))), e.descriptions && r.a.createElement("div", {
					className: D.a.DescriptionsRow
				}, e.descriptions[e.items.indexOf(e.selected)] || e.displayItems && e.descriptions[e.displayItems.indexOf(e.selected)])))(e)))),
				Oe = ({
					disabled: e,
					last: t,
					onClick: n,
					onChange: a,
					...o
				}) => {
					const i = Object(s.useCallback)(e => a(e.target.value), [a]),
						{
							items: c
						} = o;
					return r.a.createElement(J, {
						disabled: e
					}, r.a.createElement(z, null, r.a.createElement("label", {
						htmlFor: o.id
					}, r.a.createElement(V, {
						className: o.labelClassname
					}, o.label)), r.a.createElement(Q, null, o.subtext)), r.a.createElement("div", {
						className: D.a.Wrapper__LineBreak
					}), r.a.createElement(J, {
						last: t,
						indent: !0,
						disabled: e
					}, r.a.createElement(k, {
						id: o.id,
						className: "redditStyle",
						disabled: e || o.inputDisabled,
						onChange: i,
						value: o.selected
					}, c.map(({
						value: e,
						displayName: t
					}) => r.a.createElement("option", {
						key: e,
						value: e
					}, t)))))
				},
				ve = e => r.a.createElement(J, {
					className: e.className,
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, r.a.createElement(z, null, r.a.createElement(V, null, e.label), r.a.createElement(Q, null, e.subtext)), r.a.createElement(K, null, e.children)),
				Ce = e => r.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, e.isCreateCommunity && r.a.createElement("span", {
					className: D.a.tag
				}, "r/"), r.a.createElement(h.a, {
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
				return f
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "j", (function() {
				return C
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
				f = s.a.div("FormGroupDescription", a.a),
				h = s.a.div("FormItem", a.a),
				g = s.a.h3("FormElementTitle", a.a),
				x = s.a.div("FormElementDescription", a.a),
				O = s.a.div("FormElementError", a.a),
				v = s.a.div("FormElementSubGroup", a.a),
				C = s.a.li("FormListItem", a.a)
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
				return O
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
				f = s.a.wrapped(a.a, "Checkbox", l.a),
				h = s.a.wrapped(o.a, "CheckboxSelected", l.a),
				g = s.a.textarea("Textarea", l.a),
				x = s.a.label("StyledLabel", l.a),
				O = s.a.input("StyledFileInput", l.a)
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
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				r = n.n(s),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
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
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class g extends o.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = r()(() => {
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
					return e.href ? o.a.createElement(c.a, h({}, t, {
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
					}), e.children && o.a.createElement("span", {
						className: n
					}, e.children), o.a.createElement("span", {
						className: Object(i.a)(f.a.text, e.textClassName)
					}, e.displayText)) : o.a.createElement(u.a, h({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: r()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? o.a.createElement("div", null, e.children) : o.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && o.a.createElement("span", {
						className: Object(i.a)(f.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && o.a.createElement(l.a, {
						className: f.a.checkmark
					}), e.showDropdownTriangle && o.a.createElement(d.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const n = Object(i.a)(f.a.row, e, {
					[f.a.mIsInteractive]: !t.noHover,
					[f.a.mIsSelected]: t.isSelected,
					[f.a.topics]: t.isTopicsStyle,
					[f.a.modNotes]: t.isModNotesStyle
				});
				return o.a.createElement(g, h({
					className: n
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				modNotes: "sK8_uuNiAqPNlw-HoD2HG",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
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
				return v
			})), n.d(t, "c", (function() {
				return C
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
					}, s.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				g = n("./src/reddit/controls/ErrorText/index.m.less"),
				x = n.n(g);
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
						className: Object(l.a)(x.a.wrapper, t)
					}, d.a.createElement("span", {
						className: x.a.description,
						ref: this.spanRef
					}, e), o && d.a.createElement("span", {
						className: x.a.moreText,
						onClick: this.toggleModal
					}, a), i && d.a.createElement(h, {
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
					}, o.map((e, t) => d.a.createElement(O, {
						className: n,
						errorModalTitle: s,
						key: t
					}, e))) : null
				},
				C = e => d.a.createElement(v, {
					fallbackMessage: s.fbt._("Something went wrong", null, {
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
				return f
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "d", (function() {
				return O
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
				f = e => {
					const {
						label: t,
						children: n,
						inputRef: s,
						className: o,
						...i
					} = e, c = void 0 !== e.value && "" !== e.value;
					return r.a.createElement("div", {
						className: Object(a.a)(u.a.inputWrapper, o, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: b
					}, r.a.createElement(p, m({
						"aria-invalid": e.isInvalid,
						innerRef: s
					}, i)), e.label && r.a.createElement("label", {
						className: Object(a.a)(u.a.label, {
							[u.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				h = e => {
					const {
						label: t,
						children: n,
						inputRef: s,
						isInvalid: o,
						className: i,
						redditStyle: c,
						...d
					} = e, l = void 0 !== e.value && "" !== e.value;
					return r.a.createElement("div", {
						className: Object(a.a)(u.a.inputMovingLabelWrapper, i, {
							[u.a.mIsInvalid]: o,
							[u.a.mIsRedditStyle]: c
						}),
						onClick: b
					}, r.a.createElement(p, m({
						innerRef: s
					}, d)), e.label && r.a.createElement("label", {
						className: Object(a.a)(u.a.label, {
							[u.a.mHasValue]: l
						})
					}, e.label), e.children)
				},
				g = e => r.a.createElement("div", {
					className: Object(a.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", r.a.createElement(c.a, {
					className: u.a.plus
				}));
			var x;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(x || (x = {}));
			class O extends r.a.Component {
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
						placeholder: s,
						errors: a = []
					} = this.props;
					return e.map((e, o) => r.a.createElement(f, {
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
					}, t && c && r.a.createElement(g, {
						onClick: this.addValue,
						text: o
					}), this.renderFields(), !t && c && r.a.createElement(g, {
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
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => r.a.createElement("div", {
				className: Object(a.a)(i.a.loadingIcon, t, {
					[i.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				},
				"data-testid": "LoadingIcon"
			})
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
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/InternalLink/index.tsx"),
				a = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				o = n.n(a);
			t.a = s.a.wrapped(r.a, "unstyledInternalLink", o.a)
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
						const t = e.body.data.children.map(({
							data: e
						}) => Object(c.a)(e)).reduce((e, t) => (e[t.id] = t, e), {});
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
			const r = ({
					edges: e,
					pageInfo: t
				}) => {
					const n = {},
						r = [];
					for (const {
							node: a,
							...o
						} of e) {
						const e = Object(s.a)(a);
						n[e.id] = e, r.push(o)
					}
					return {
						pageInfo: t,
						rankings: r,
						subreddits: n
					}
				},
				a = ({
					edges: e
				}) => {
					const t = {},
						n = [];
					for (const {
							node: r,
							...a
						} of e) {
						const e = Object(s.a)(r);
						t[e.id] = {
							...e,
							bannerBackgroundImage: r && r.styles && r.styles.bannerBackgroundImage
						}, n.push(a)
					}
					return {
						rankings: n,
						subreddits: t
					}
				},
				o = ({
					edges: e,
					pageInfo: t
				}) => {
					const n = {},
						r = [];
					let a = 0;
					for (const {
							node: o
						} of e) {
						const e = Object(s.a)(o);
						n[e.id] = {
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
						subreddits: n,
						pageInfo: t
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
			const o = ({
					isLoading: e
				}) => Object(s.a)(a.a.loadingBackground, {
					[a.a["m-loading"]]: e
				}),
				i = e => Object(s.a)(a.a.loadingBar, o(e))
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(a.b)("caret_down",e.isFilled)} ${e.className}`
			})
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
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = n.n(o);

			function c() {
				return (c = Object.assign || function(e) {
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
			}) => r.a.createElement("svg", c({
				className: Object(a.a)(i.a.dropdown, {
					[i.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n), r.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = d
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
				feedUnit: (e = i, t) => {
					switch (t.type) {
						case o.b: {
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
				claimStatus: (e = r, t) => {
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
				return Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.Fc
				}) === s.gd
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
					experimentName: s.Cb,
					experimentEligibilitySelector: a.e
				}) === s.V.topOfFeedWithCTAs,
				c = e => (e => Object(r.c)(e, {
					experimentName: s.Cb,
					experimentEligibilitySelector: a.e
				}) === s.V.topOfFeedNoCTAs)(e) || i(e),
				d = e => Object(r.c)(e, {
					experimentName: s.Cb,
					experimentEligibilitySelector: a.e
				}) === s.V.floatInFeed,
				l = e => {
					const t = Object(r.c)(e, {
						experimentName: s.Cb,
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
				return h
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "d", (function() {
				return C
			}));
			var s = n("./src/lib/objectSelector/index.ts"),
				r = n("./src/reddit/featureFlags/index.ts"),
				a = n("./src/reddit/selectors/posts.ts"),
				o = n("./src/reddit/selectors/subreddit.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const c = (e, t) => {
					const n = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (n) {
						const t = Object(o.S)(e, {
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
					const s = Object(o.W)(e, {
						subredditName: n.name
					});
					return s && s.postIds && s.postIds.length ? s.postIds : u
				}),
				p = (e, t) => {
					const n = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return n ? Object(o.S)(e, {
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
				f = [3],
				h = Object(s.a)((e, {
					existingDUPositions: t,
					listingProps: n
				}) => {
					const s = t.slice().sort();
					let r = -1;
					const o = Object(a.z)(e, {
							listingKey: n.listingKey
						}),
						i = [];
					return f.forEach(t => {
						let n = r + t;
						if (!(n >= o.length)) {
							for (; n < o.length && !b(e, n, t, o, s);) n += 1;
							n < o.length && (i.push(n), r = n)
						}
					}), i
				}),
				g = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				x = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				O = e => e.focusedVerticals.category,
				v = e => e.focusedVerticals.lastLoadedEnv,
				C = e => {
					const t = Object(i.O)(e),
						n = r.d.geoSubredditRecommendationDULoggedIn(e),
						s = r.d.geoSubredditRecommendationDULoggedOut(e);
					return t && n || !t && s
				}
		},
		"./src/redditGQL/operations/Frontpage.json": function(e) {
			e.exports = JSON.parse('{"id":"c1563c969810"}')
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
			e.exports = JSON.parse('{"id":"bd6082387469"}')
		},
		"./src/redditGQL/operations/UpdateAccountGender.json": function(e) {
			e.exports = JSON.parse('{"id":"670e8e8d3018"}')
		},
		"./src/redditGQL/operations/UpdateTopicPreferences.json": function(e) {
			e.exports = JSON.parse('{"id":"a48d141a1878"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OnboardingModal.59d993e87042dedecc75.js.map