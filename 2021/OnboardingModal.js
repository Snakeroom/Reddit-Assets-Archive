// https://www.redditstatic.com/desktop2x/OnboardingModal.9499780d2b01257ebecc.js
// Retrieved at 12/13/2021, 9:40:05 AM by Reddit Dataminer v1.0.0
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
			const u = () => async (e, t, {
				gqlContext: n
			}) => {
				var r, s;
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
					}))(null === (s = null === (r = null == c ? void 0 : c.data) || void 0 === r ? void 0 : r.piiIdentity) || void 0 === s ? void 0 : s.gender);
				d && e(m(d))
			}, m = Object(s.a)(l.a), p = e => async (t, n, {
				gqlContext: s
			}) => {
				const i = {
					customGender: e.definedGender,
					genderEnum: e.genderCategory
				};
				(await ((e, t) => Object(o.a)(e, {
					...c,
					variables: t
				}))(s(), {
					input: i
				})).ok ? (t(b(e)), t(Object(a.f)({
					kind: d.b.SuccessCommunity,
					text: r.fbt._("Changes saved", null, {
						hk: "2isjrZ"
					})
				}))) : (t(f()), t(Object(a.f)({
					kind: d.b.Error,
					text: r.fbt._("Changes failed to save", null, {
						hk: "XrtIq"
					})
				})))
			}, b = Object(s.a)(l.b), f = Object(s.a)(l.c)
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "b", (function() {
				return k
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
			const f = Object(s.a)(o.g),
				g = Object(s.a)(o.e),
				h = Object(s.a)(o.h),
				x = Object(s.a)(o.c),
				O = Object(s.a)(o.f),
				v = Object(s.a)(o.j),
				E = Object(s.a)(o.i),
				C = () => async (e, t, {
					gqlContext: n
				}) => {
					const s = t(),
						a = Object(m.e)(s),
						o = Object(m.d)(s),
						d = Object(b.J)(s);
					if (a || !o) return;
					e(h());
					let p = !1;
					try {
						const t = d ? r.LoggedInGeo : r.LoggedOutGeo,
							s = await ((e, t, n) => Object(i.a)(e, {
								...c,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(n(), t);
						if (s.ok && s.body) {
							const {
								data: t
							} = s.body;
							if (_(t)) {
								if (j(t)) {
									e(x({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), p = !0
								} else if (y(t)) {
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
									e(f(m)), p = !0
								}
							} else p = !1
						}
					} catch (O) {
						p = !1
					}
					p || e(g({
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
				}, y = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations,
						r = t && t.type;
					return !!(n && !j(e) && r === d.GEO && n[0] && n[0].recommendedSubreddit && n[0].interactedSubreddit)
				}, k = () => async (e, t, n) => {
					var r, s;
					const o = t(),
						i = Object(m.g)(o);
					if (Object(m.f)(o) || null === i || "client" === i) {
						const n = null === (s = null === (r = Object(p.b)(t())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === s ? void 0 : s.route.chunk,
							i = Object(b.K)(o);
						return Object(a.i)(() => e(C()), {
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
				return de
			})), n.d(t, "frontpageLoaded", (function() {
				return le
			})), n.d(t, "frontpageFailed", (function() {
				return ue
			})), n.d(t, "frontpageDataRequested", (function() {
				return me
			})), n.d(t, "frontpageRequestedHelper", (function() {
				return pe
			})), n.d(t, "frontpageRequested", (function() {
				return fe
			})), n.d(t, "frontpageReloaded", (function() {
				return he
			})), n.d(t, "morePostsPending", (function() {
				return xe
			})), n.d(t, "morePostsLoaded", (function() {
				return Oe
			})), n.d(t, "morePostsFailed", (function() {
				return ve
			})), n.d(t, "morePostsRequested", (function() {
				return Ee
			})), n.d(t, "refreshFeed", (function() {
				return Ce
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
				b = n("./src/reddit/constants/graphql.ts"),
				f = n("./src/reddit/helpers/getPostLimitForMobile/index.ts"),
				g = n("./src/reddit/models/Live/index.ts"),
				h = n("./src/reddit/models/Post/index.ts"),
				x = n("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				O = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				v = n("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				E = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				C = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				_ = n("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				j = n("./src/reddit/constants/experiments.ts"),
				y = n("./src/reddit/helpers/chooseVariant/index.ts"),
				k = n("./src/reddit/selectors/experiments/utils.ts");
			const S = e => {
				const t = Object(y.c)(e, {
					experimentEligibilitySelector: y.a,
					experimentName: j.Ub
				});
				return !!Object(k.a)(t)
			};
			var I = n("./src/reddit/selectors/platform.ts"),
				N = n("./src/reddit/selectors/user.ts"),
				T = n("./src/redditGQL/operations/Frontpage.json");
			const w = (e, t) => {
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
					} = t, p = Object(N.T)(e) || Object(N.K)(e), g = Object(I.q)(e), h = {
						adContext: {
							layout: i ? i.toUpperCase() : b.a.Card,
							reddaid: e.user.reddaid,
							distance: a
						},
						feedRankingContext: {
							servingId: m
						},
						forceGeopopular: !0,
						includeCommunityDUs: !1,
						includeFeaturedAnnouncements: !0,
						includeLiveEvents: !0,
						includeIdentity: p && !(null === (r = null === (n = e.user.account) || void 0 === n ? void 0 : n.karma) || void 0 === r ? void 0 : r.total),
						includePostRecommendations: S(e),
						includeSubredditQuestions: p,
						recentPostIds: e.posts.recent
					};
					return l && (h.sort = l.toUpperCase()), u && (h.range = u.toUpperCase()), o ? h.pageSize = Object(f.a)(i) : d && (h.pageSize = d), g && g.ad && (h.forceAds = {
						ad: g.ad
					}), s && (h.after = Object(c.a)(s)), h
				},
				R = async (e, t, n, r) => {
					const s = Date.now(),
						a = await ((e, t) => Object(u.a)(e, {
							...T,
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
							featuredAnnouncements: r,
							recentPosts: s = []
						}) => {
							const a = [],
								o = [];
							let i;
							const c = {
									postIds: [],
									postInstances: {},
									posts: {},
									postFlair: {},
									profiles: {},
									subreddits: {}
								},
								d = e => {
									if (c.posts[e.id]) return e.id;
									const t = Object(O.f)(e);
									c.posts[t.id] = t;
									const {
										crosspostRoot: n
									} = e;
									n && n.type === h.a.Post && n.postInfo && d(n.postInfo);
									let r = t.id;
									if (Object(h.l)(e)) c.profiles[e.profile.id] || (c.profiles[e.profile.id] = Object(E.a)(e.profile));
									else if (Object(h.n)(e)) c.subreddits[e.subreddit.id] || (c.subreddits[e.subreddit.id] = Object(C.a)(e.subreddit)), c.postFlair[e.subreddit.id] || (c.postFlair[e.subreddit.id] = Object(x.a)(e.subreddit));
									else if (Object(h.h)(e)) {
										const n = Object(O.b)(e);
										if (!n) return null;
										r = n, c.posts[n] = {
											...t,
											id: n,
											permalink: `${t.permalink}?instanceId=${encodeURIComponent(n)}`
										}, c.posts[t.id] || (c.posts[t.id] = {
											...t,
											events: []
										}), c.postInstances[e.id] || (c.postInstances[e.id] = []), c.postInstances[e.id].push(n)
									}
									return r
								};
							for (const l of e) {
								const e = Object(C.a)(l);
								c.subreddits[e.id] = e, a.push(e.id)
							}
							for (const {
									node: x
								} of n.elements.edges)
								if (Object(h.k)(x)) {
									const e = d(x);
									e && c.postIds.push(e)
								} else if (Object(h.m)(x)) {
								if (!x.recommendationContext || !x.postInfo) {
									const e = "Received empty PostRecommendation element when processing frontpage data.";
									Object(l.b)() || console.warn(e), p.c.captureMessage(e);
									continue
								}
								const {
									content: e,
									subreddit: t,
									__typename: n
								} = x.recommendationContext;
								if (x.postInfo && (null == e ? void 0 : e.richtext)) {
									const r = d(x.postInfo);
									r && (c.postIds.push(r), c.posts[r].recommendationContext = {
										content: Object(O.d)(e.richtext),
										source: {
											source: null == n ? void 0 : n.toLowerCase(),
											subredditId: null == t ? void 0 : t.id,
											subredditName: null == t ? void 0 : t.prefixedName
										}
									})
								}
							} else if (Object(g.c)(x) && !i) i = x;
							else {
								const e = `Received unhandled element type when processing frontpage data: "${x.__typename}"`;
								Object(l.b)() || console.warn(e), p.c.captureMessage(e)
							}
							for (const l of s) {
								if (!l) continue;
								const e = d(l);
								e && o.push(e)
							}
							const u = c.postIds.length - 1,
								m = u >= 0 ? c.postIds[u] : "",
								b = n.elements.dist,
								f = n.elements.geoFilter;
							return {
								...c,
								account: t && Object(_.a)(t) || null,
								featuredLiveThread: i,
								announcements: r,
								preferences: t && t.preferences && Object(v.a)(t.preferences, t.interactions) || null,
								...0 !== a.length && {
									trendingSubredditIds: a
								},
								...0 !== o.length && {
									recentPostIds: o
								},
								token: m,
								...null !== b && {
									dist: b
								},
								...null !== f && {
									geoFilter: f
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
						...a,
						body: i
					}
				};
			var L = n("./src/lib/pageTitle.ts"),
				G = n("./src/reddit/actions/login.ts"),
				M = n("./src/reddit/actions/meta.ts"),
				P = n("./src/reddit/actions/platform.ts"),
				F = n("./src/reddit/actions/toaster.ts"),
				A = n("./src/reddit/constants/history.ts"),
				D = n("./src/reddit/constants/page.ts"),
				B = n("./src/reddit/constants/parameters.ts"),
				q = n("./src/reddit/constants/postLayout.ts"),
				V = n("./src/reddit/contexts/PageLayer/index.tsx"),
				W = n("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				Q = n("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				U = n("./src/reddit/models/Toast/index.ts"),
				H = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				z = n("./src/reddit/selectors/frontpage.ts"),
				K = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				J = n("./src/reddit/selectors/runTimeEnvVars.ts"),
				Z = n("./src/lib/makeActionCreator/index.ts"),
				Y = n("./src/lib/makeListingKey/index.ts"),
				X = n("./src/reddit/actions/ads/index.ts"),
				$ = n("./src/reddit/helpers/trackers/feed.ts"),
				ee = n("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				te = n("./src/reddit/actions/seo/linksModule.ts"),
				ne = n("./src/reddit/selectors/seo/linksModule.ts"),
				re = n("./src/reddit/actions/publicAccessNetwork/api.ts"),
				se = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				ae = n("./src/reddit/helpers/filterListingResponse/index.ts"),
				oe = n("./src/reddit/actions/frontpage/constants.ts"),
				ie = n("./node_modules/uuid/v4.js"),
				ce = n.n(ie);
			const de = Object(Z.a)(oe.c),
				le = Object(Z.a)(oe.b),
				ue = Object(Z.a)(oe.a),
				me = (e, t) => async (n, s, a) => {
					var i, c, d, l;
					const u = s();
					if (u.listings.postOrder.api.pending[e]) return;
					const p = q.e[Object(V.Q)(u, {})];
					t.isMobile = Object(o.e)(u.meta.userAgent), t.recentPostIds = u.posts.recent, t.layout = p, t.useMockData = !!u.platform.currentPage && (!!u.platform.currentPage.queryParams.useMockData && Object(J.b)(u)), n(de({
						key: e
					})); {
						const e = u.platform.currentPage,
							n = e && e.url;
						n && (t.clickUrl = n)
					}
					const b = ce()();
					t.correlationId = b;
					const f = null === (c = null === (i = Object(I.b)(u)) || void 0 === i ? void 0 : i.routeMatch) || void 0 === c ? void 0 : c.route.chunk,
						g = Object(N.K)(u),
						h = await Object(m.i)(() => R(a.gqlContext(), w(u, t), Object(N.T)(u), t.statsdPathsForExperiments), {
							name: "fetchFrontpageData",
							isLoggedIn: g,
							page: f
						});
					n(Object(P.n)(h.status));
					const x = `error-${e}`;
					if (h.ok && h.body) {
						const r = h.body;
						n(le({
							key: e,
							meta: u.meta,
							correlationId: b,
							...r
						})), n(F.g(x)), r.geoFilter && n(Object(M.k)(r.geoFilter)), n(Object(X.b)(ee.a.FRONTPAGE));
						const a = null === (l = null === (d = Object(I.b)(u)) || void 0 === d ? void 0 : d.locationState) || void 0 === l ? void 0 : l[A.b.FeedLoadReason];
						Object($.b)(t.isRefresh ? A.a.UserRefresh : null != a ? a : A.a.InitialLoad)(s())
					} else {
						n(ue({
							error: h.error,
							key: e,
							...h.body
						})), n(F.f({
							id: x,
							kind: U.b.Error,
							text: r.fbt._("Sorry, we couldn't load posts for this page.", null, {
								hk: "36ypKx"
							}),
							buttonText: r.fbt._("Retry", null, {
								hk: "1XMjgA"
							}),
							buttonAction: me(e, t)
						}));
						const a = h.error;
						Object($.a)(a ? `${h.status}:${a.type}` : "Failed to load post listing for frontpage")(s())
					}
				}, pe = (e, t) => async (n, r) => {
					var s;
					const o = r(),
						i = Object(z.a)(o),
						{
							sort: c = i
						} = e.params,
						l = Object(Y.a)(D.b, c, e.queryParams),
						u = o.listings.postOrder.ids[l],
						m = o.listings.postOrder.api.error[l],
						p = o.listings.postOrder.api.pending[l],
						b = B.A in e.queryParams && e.queryParams[B.A].toUpperCase() || "",
						f = b in d.fc && d.fc[b];
					if (p || u && !m && !t) return void(u && (n(P.m({
						title: L.e()
					})), (null === (s = o.listings.postOrder.correlationIds) || void 0 === s ? void 0 : s[l]) && n(P.o({
						correlationId: o.listings.postOrder.correlationIds[l]
					})), o.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						n(Object(X.b)(ee.a.FRONTPAGE))
					})));
					const g = Object(W.a)(o),
						h = Object(W.b)(g),
						x = [Object(W.c)(g)];
					await n(me(l, {
						...a()(e.queryParams, B.l),
						...a()(e.queryParams, B.k),
						limit: h,
						sort: c,
						statsdPathsForExperiments: x,
						t: Object(Q.a)(c, f)
					})), n(P.m({
						title: L.e()
					})), Object(y.c)(o, {
						experimentEligibilitySelector: y.a,
						experimentName: "redesign_aa"
					});
					const O = Object(H.a)(o, {});
					Object(H.e)(O) && n(Object(G.k)())
				}, be = () => async (e, t) => {
					var n, r;
					const s = t();
					if (Object(ne.a)(s)) return;
					const a = null === (r = null === (n = Object(I.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
						o = Object(N.K)(s);
					return Object(m.i)(() => e(Object(te.d)()), {
						name: "frontpageLinksRequested",
						page: a,
						isLoggedIn: o
					})
				}, fe = (e, t) => async n => {
					await Promise.all([n(Object(i.b)()), n(pe(e, t)), n(be()), n(Object(re.c)(se.R))])
				}, ge = Object(Z.a)(oe.d), he = e => async (t, n) => {
					const r = n(),
						s = r.platform.currentPage.routeMatch.match;
					Object(K.o)(r) || Object(K.u)(r) || (e || t(ge()), await t(fe(s, !0)))
				}, xe = Object(Z.a)(oe.g), Oe = Object(Z.a)(oe.f), ve = Object(Z.a)(oe.e), Ee = e => async (t, n, {
					gqlContext: r
				}) => {
					const s = n(),
						i = Object(z.a)(s),
						{
							sort: c = i
						} = e,
						l = s.platform.currentPage ? s.platform.currentPage.queryParams : {},
						u = Object(Y.a)(D.b, c, l),
						m = s.listings.postOrder.loadMore[u],
						p = l[B.A] ? l[B.A].toUpperCase() : "",
						b = p in d.fc && d.fc[p];
					if (m) {
						const e = s.listings.postOrder.api.pending[u],
							i = s.listings.postOrder.fetchedTokens,
							d = !(!i[u] || !i[u][m.token]);
						if (!e && !d) {
							t(xe({
								key: u,
								fetchedToken: m.token
							}));
							const e = !!s.platform.currentPage && !!s.platform.currentPage.queryParams.useMockData,
								i = Object(W.a)(s),
								d = q.a,
								p = [Object(W.c)(i)],
								f = {
									after: m.token,
									dist: m.dist,
									...a()(l, B.l),
									isMobile: Object(o.e)(s.meta.userAgent),
									limit: d,
									sort: c,
									t: Object(Q.a)(c, b),
									layout: q.e[Object(V.Q)(s, {})],
									useMockData: e
								}; {
								const e = s.platform.lastPage,
									t = e && e.url;
								t && (f.clickUrl = t)
							}
							f.correlationId = s.listings.postOrder.correlationIds[u];
							const g = () => R(r(), w(s, f), Object(N.T)(s), p),
								h = await g(),
								x = {
									...h.body,
									...Object(ae.a)(s, u, h.body)
								};
							if (h.ok) t(Oe({
								key: u,
								fetchedToken: m.token,
								meta: s.meta,
								...x
							})), Object($.b)(A.a.NextPageLoad)(n());
							else {
								t(ve({
									key: u,
									error: h.error,
									fetchedToken: m.token,
									...x
								}));
								const e = h.error;
								Object($.a)(e ? `${h.status}:${e.type}` : "More posts for frontpage failed")(n())
							}
						}
					}
				}, Ce = e => async (t, n) => {
					const r = n(),
						s = Object(z.a)(r),
						{
							sort: a = s
						} = e,
						o = r.platform.currentPage ? r.platform.currentPage.queryParams : {},
						i = Object(Y.a)(D.b, a, o),
						c = o[B.A] ? o[B.A].toUpperCase() : "",
						l = c in d.fc && d.fc[c],
						u = Object(W.a)(r),
						m = Object(W.b)(u);
					await t(me(i, {
						limit: m,
						sort: a,
						t: Object(Q.a)(a, l),
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
				isRight: "_3szUhYjG4tA4Hqfi9MD1fa"
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
				l = n("./src/reddit/actions/frontpage/index.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/survey/index.ts"),
				p = n("./src/reddit/actions/toaster.ts"),
				b = n("./node_modules/fbt/lib/FbtPublic.js"),
				f = n("./src/lib/sentry/index.ts"),
				g = n("./src/reddit/actions/snoovatar.ts"),
				h = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				x = n("./src/reddit/hooks/useTracking.ts"),
				O = n("./src/reddit/models/Toast/index.ts"),
				v = n("./src/reddit/selectors/avatar.ts");
			var E = () => {
					const e = Object(i.e)(v.a),
						t = Object(i.d)(),
						n = Object(x.a)(),
						r = Object(i.e)(v.c);
					Object(a.useEffect)(() => {
						(null == e ? void 0 : e.csrf_token) || t(Object(g.c)())
					}, []);
					const s = Object(a.useCallback)(async () => {
							t(Object(g.d)())
						}, [t]),
						o = Object(a.useCallback)(async () => {
							if (n(Object(h.a)("save_and_continue")), e && r) try {
								return await t(Object(g.e)(r.accessoryIds, {}, {
									set_avatar_to_profile: !0,
									source: "web_onboarding"
								})), !0
							} catch (s) {
								f.c.captureException(s)
							}
							return t(Object(p.f)({
								kind: O.b.Error,
								text: b.fbt._("Unable to save avatar, please try again.", null, {
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
				C = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				_ = n("./src/reddit/components/Onboarding/Celebration.m.less"),
				j = n.n(_);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var k = () => o.a.createElement("div", {
					className: j.a.CelebrationBg
				}, o.a.createElement("div", {
					className: j.a.CelebrationTitle
				}, y._("We're happy you're here!", null, {
					hk: "1YMdHn"
				})), o.a.createElement("div", {
					className: j.a.CelebrationSubTitle
				}, y._("Your home feed is being created now…", null, {
					hk: "Onr1V"
				})), o.a.createElement("div", null, o.a.createElement(C.a, {
					className: j.a.LoadingSpinner,
					sizePx: 16
				}))),
				S = n("./src/reddit/components/Settings/GenderCollection/index.tsx"),
				I = n("./src/reddit/models/Gender/index.ts"),
				N = n("./src/lib/constants/index.ts"),
				T = n("./src/reddit/components/Onboarding/GenderCollection/GenderCollection.m.less"),
				w = n.n(T),
				R = n("./src/reddit/helpers/trackers/onboarding.ts");
			const L = {
					definedGender: null,
					genderCategory: I.a.OPT_OUT
				},
				G = e => e === I.a.USER_DEFINED;
			var M = ({
					selectedGenderOption: e,
					setSelectedGenderOption: t
				}) => {
					const n = Object(x.a)(),
						r = Object(a.useRef)(null),
						s = Object(a.useRef)([]),
						[i, c] = Object(a.useState)((null == e ? void 0 : e.definedGender) || "");
					Object(a.useEffect)(() => {
						n(Object(R.k)())
					}, [n]);
					const d = e => {
							var t;
							let n = null;
							return G(e) && (n = (null === (t = r.current) || void 0 === t ? void 0 : t.value) || "", c(n)), {
								definedGender: n,
								genderCategory: e
							}
						},
						l = Object(a.useCallback)(e => {
							var s;
							n(Object(R.h)()), t(d(e)), G(e) && (null === (s = r.current) || void 0 === s || s.focus())
						}, [n, t]),
						u = Object(a.useCallback)(e => {
							l(e.value), e.focus()
						}, [l]),
						m = Object(a.useCallback)(t => {
							if (!e || !G(e.genderCategory)) {
								const e = s.current[t];
								e && l(e.value)
							}
						}, [l, e]),
						p = (n, a) => {
							const c = G(n.key);
							return o.a.createElement("label", {
								key: n.key
							}, o.a.createElement("input", {
								checked: n.key === (null == e ? void 0 : e.genderCategory),
								className: w.a.genderRadioButton,
								"data-testid": n.key,
								id: `genderCollectionOption${a+1}`,
								name: "genderCollection",
								onChange: () => l(n.key),
								ref: e => s.current[a] = e,
								type: "radio",
								value: n.key
							}), c ? o.a.createElement("input", {
								className: w.a.genderUserDefinedInput,
								"data-testid": `${n.key}-input`,
								onChange: () => t(d(n.key)),
								onClick: () => m(a),
								onKeyDown: e => ((e, t) => {
									var n;
									const r = e.target;
									if (r) {
										if (N.h[e.key] && !r.value) {
											const n = s.current.length - 1;
											let r;
											(r = e.keyCode === N.h.ArrowUp || e.keyCode === N.h.ArrowLeft ? s.current[t ? t - 1 : n] : s.current[t === n ? 0 : t + 1]) && u(r)
										}
										e.keyCode === N.J && (null === (n = s.current[t]) || void 0 === n || n.focus())
									}
								})(e, a),
								placeholder: n.displayText,
								ref: r,
								tabIndex: -1,
								value: i
							}) : o.a.createElement("span", {
								className: w.a.genderOption
							}, n.displayText))
						};
					return o.a.createElement("div", null, Object(S.b)().map((e, t) => p(e, t)))
				},
				P = n("./src/reddit/constants/avatars.ts"),
				F = n("./src/reddit/controls/Button/index.tsx"),
				A = n("./src/reddit/icons/fonts/index.tsx"),
				D = n("./src/reddit/components/Onboarding/AvatarPicker/AvatarPicker.m.less"),
				B = n.n(D);
			const {
				fbt: q
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var V = ({
					avatarImage: e,
					fetchRandomAvatar: t
				}) => {
					const n = Object(x.a)();
					Object(a.useEffect)(() => {
						n(Object(h.m)())
					}, [n]);
					const r = Object(a.useCallback)(() => {
							n(Object(h.a)("randomize")), t()
						}, [n, t]),
						{
							legalCopy: s,
							learnMoreText: i,
							url: c
						} = P.a;
					return o.a.createElement("div", {
						className: B.a.avatarPicker
					}, o.a.createElement("div", {
						className: B.a.dynamicSizeWrapper
					}, e ? o.a.createElement("img", {
						"data-testid": "preview-image",
						src: `data:image/png;base64,${encodeURIComponent(e)}`,
						className: B.a.previewImage
					}) : o.a.createElement(C.a, {
						className: B.a.loader
					}), o.a.createElement("div", {
						className: B.a.legalTextContainer
					}, s(), o.a.createElement("a", {
						href: c,
						className: B.a.learnMoreLink
					}, i()))), o.a.createElement(F.t, {
						className: B.a.randomizeButton,
						priority: F.c.Secondary,
						onClick: r,
						Icon: Object(A.b)("random"),
						iconClassName: B.a.icon
					}, q._("Randomize", null, {
						hk: "uwAa8"
					})))
				},
				W = n("./node_modules/lodash/times.js"),
				Q = n.n(W),
				U = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				H = n("./src/reddit/icons/svgs/CommunityDefault/filled.tsx"),
				z = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				K = n("./src/reddit/icons/svgs/Positive/index.tsx"),
				J = n("./src/reddit/components/Onboarding/CommunityPicker.m.less"),
				Z = n.n(J);
			const {
				fbt: Y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), X = () => Y._("Recommended for you", null, {
				hk: "28LTkA"
			}), $ = ({
				community: e,
				selected: t,
				toggleAll: n,
				toggleSelection: r
			}) => {
				const {
					communities: s
				} = e, [i, c] = Object(a.useState)(null);
				Object(a.useEffect)(() => {
					c(!s.find(e => !t[e.id]))
				}, [s, t]);
				const d = Object(a.useCallback)(() => {
					n(e.topicId, !i), c(!i)
				}, [e.topicId, i, n]);
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: Z.a.RecommendedHeader
				}, o.a.createElement("span", {
					className: Z.a.SectionTitle
				}, e.topicTitle), o.a.createElement("button", {
					onClick: d,
					className: Z.a.SelectAllLink
				}, i && Y._("Deselect All", null, {
					hk: "4u0XYF"
				}), !i && null !== i && Y._("Select All", null, {
					hk: "3izh21"
				}))), o.a.createElement(o.a.Fragment, null, o.a.createElement(te, {
					communities: e.communities,
					communityId: e.topicId,
					selected: t,
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
				selected: n,
				topicTitle: r,
				toggleSelection: s
			}) => {
				const i = Object(x.a)(),
					[c, d] = Object(a.useState)(!1),
					l = e.length > 4,
					u = e.slice(0, c ? void 0 : 4),
					m = "recommended" === t ? "" : r,
					p = Object(a.useCallback)(() => {
						d(!0), i(Object(R.f)(r))
					}, [i, r]);
				return o.a.createElement(o.a.Fragment, null, u.map(e => o.a.createElement(ne, {
					communityId: e.id,
					description: e.description,
					icon: e.icon,
					isSelected: n[e.id],
					key: e.id,
					prefixedName: e.prefixedName,
					toggleSelection: s,
					topicTitle: r
				})), l && !c && o.a.createElement(re, {
					text: m,
					showMore: p
				}))
			}, ne = ({
				communityId: e,
				description: t,
				icon: n,
				isSelected: r,
				prefixedName: s,
				toggleSelection: i,
				topicTitle: c
			}) => {
				const l = Object(x.a)(),
					u = Object(a.useCallback)(() => {
						l(Object(R.d)(!r, c, s)), i(e)
					}, [e, r, s, l, i, c]);
				return o.a.createElement("div", {
					className: Object(d.a)(Z.a.CommunityRow, {
						[Z.a.Selected]: r
					}),
					onClick: u
				}, o.a.createElement("div", {
					className: Z.a.IconSection
				}, n && o.a.createElement("img", {
					className: Z.a.IconWrapper,
					src: n
				}), !n && o.a.createElement(H.a, {
					className: Z.a.CommunityNoIcon
				})), o.a.createElement("div", {
					className: Z.a.TextSection
				}, o.a.createElement("div", {
					className: Z.a.Info
				}, s), o.a.createElement("div", {
					className: Z.a.Description
				}, t)), o.a.createElement("div", {
					className: Z.a.ButtonSection
				}, r && o.a.createElement(K.a, {
					className: Z.a.SelectedIcon
				}), !r && o.a.createElement(z.a, {
					className: Z.a.SelectIcon
				})))
			}, re = ({
				showMore: e,
				text: t
			}) => o.a.createElement("div", {
				className: Z.a.MoreRecommendations
			}, o.a.createElement("button", {
				onClick: e
			}, !t && Y._("More recommendations", null, {
				hk: "3I8APZ"
			}), t && Y._("More in {topic-title}", [Y._param("topic-title", t)], {
				hk: "4afv7s"
			})));
			var se = ({
					communitiesByTopic: e,
					loadingCommunities: t,
					recommendedCommunities: n,
					selected: r,
					toggleSelection: s,
					toggleAll: i
				}) => {
					const c = Object(x.a)();
					return Object(a.useEffect)(() => {
						c(Object(R.g)())
					}, [c]), o.a.createElement("div", {
						className: Z.a.CommunityListWrapper
					}, n.length > 0 && o.a.createElement($, {
						community: {
							communities: n,
							topicId: "recommended",
							topicTitle: X()
						},
						selected: r,
						toggleAll: i,
						toggleSelection: s
					}), (!!e.length || t) && o.a.createElement(o.a.Fragment, null, t && o.a.createElement(ee, null), e.map(e => o.a.createElement($, {
						key: e.topicId,
						community: e,
						selected: r,
						toggleAll: i,
						toggleSelection: s
					}))))
				},
				ae = n("./node_modules/polished/dist/polished.es.js"),
				oe = n("./src/reddit/components/Onboarding/Interests/InterestPicker.m.less"),
				ie = n.n(oe);
			const ce = (e, t, n) => {
					if (!t && !n) return {};
					let r = de(e);
					return n && !t && (r = Object(ae.f)(r, .25)), {
						backgroundColor: r
					}
				},
				de = e => le[e % 7],
				le = ["#c08d41", "#ffa800", "#ff4500", "#ff3881", "#b44ac0", "#6a5cff", "#3690ea"];
			var ue = ({
					colorIndex: e = 0,
					isSelected: t,
					isSubtopic: n,
					onClickHandler: r,
					topic: s
				}) => o.a.createElement(F.t, {
					className: Object(d.a)(ie.a.InterestButton, {
						[ie.a.Selected]: t
					}),
					kind: F.b.Button,
					onClick: r,
					style: ce(e, t, n)
				}, s),
				me = n("./src/reddit/helpers/styles/mixins/loading.ts");
			const {
				fbt: pe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), be = ({
				interests: e,
				selected: t,
				toggleSelection: n,
				topicColor: r = null
			}) => {
				const s = Object(x.a)(),
					i = Object(a.useCallback)((e, t, r, a) => {
						s(Object(R.l)(!t, !r, a)), n(e)
					}, [s, n]);
				return o.a.createElement(o.a.Fragment, null, e.map((e, s) => {
					var a;
					const c = !!t[e.id],
						d = null !== r,
						l = e.topic;
					return o.a.createElement(o.a.Fragment, {
						key: e.id
					}, o.a.createElement(ue, {
						colorIndex: d && null != r ? r : s,
						isSelected: c,
						isSubtopic: d,
						key: e.id,
						onClickHandler: () => i(e, c, d, l),
						topic: l
					}), c && !!(null === (a = e.children) || void 0 === a ? void 0 : a.length) && o.a.createElement(be, {
						interests: e.children,
						selected: t,
						toggleSelection: n,
						topicColor: s
					}))
				}))
			}, fe = () => {
				const e = Object(me.b)({
					isLoading: !0
				});
				return o.a.createElement(o.a.Fragment, null, Q()(30, t => o.a.createElement("div", {
					key: t,
					className: Object(d.a)(ie.a.Placeholder, e)
				})))
			};
			var ge = ({
					interests: e,
					loadingInterests: t,
					selected: n,
					toggleSelection: r
				}) => {
					const s = Object(x.a)();
					return Object(a.useEffect)(() => {
						s(Object(R.o)())
					}, [s]), o.a.createElement("div", {
						className: ie.a.InterestListButtons
					}, t ? o.a.createElement(fe, null) : o.a.createElement(be, {
						interests: e,
						selected: n,
						toggleSelection: r
					}))
				},
				he = n("./src/reddit/components/Onboarding/index.m.less"),
				xe = n.n(he);
			const {
				fbt: Oe
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var ve;
			! function(e) {
				e.AVATAR = "avatar", e.CELEBRATION = "celebration", e.COMMUNITIES = "communities", e.GENDER = "gender", e.INTERESTS = "interests"
			}(ve || (ve = {}));
			const Ee = ({
				activeStep: e,
				avatarImage: t,
				communitiesByTopic: n,
				fetchRandomAvatar: r,
				interests: s,
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
				const g = Object(a.useRef)(null);
				Object(a.useEffect)(() => {
					var e;
					return null === (e = g.current) || void 0 === e ? void 0 : e.scroll(0, 0)
				}, [e]);
				const h = Object(a.useCallback)(e => {
						const t = l[e],
							n = {
								...l
							};
						t ? delete n[e] : n[e] = !0, m(n)
					}, [l, m]),
					x = Object(a.useCallback)((e, t) => {
						const r = {
								...l
							},
							s = e => e.forEach(e => {
								t ? r[e.id] = !0 : delete r[e.id]
							});
						if ("recommended" === e) s(d);
						else {
							const t = n.find(t => t.topicId === e);
							t && s(t.communities)
						}
						m(r)
					}, [n, d, l, m]),
					O = Object(a.useCallback)(e => {
						const {
							children: t,
							id: n
						} = e, r = u[n], s = {
							...u
						};
						r ? (delete s[n], r.forEach(e => delete s[e])) : s[n] = [...(null == t ? void 0 : t.map(e => e.id)) || []], p(s)
					}, [u, p]);
				return o.a.createElement("div", {
					className: xe.a.SelectedComponent,
					ref: g
				}, e === ve.GENDER && o.a.createElement(M, {
					selectedGenderOption: b,
					setSelectedGenderOption: f
				}), e === ve.INTERESTS && o.a.createElement(ge, {
					interests: s,
					loadingInterests: c,
					selected: u,
					toggleSelection: O
				}), e === ve.COMMUNITIES && o.a.createElement(se, {
					communitiesByTopic: n,
					loadingCommunities: i,
					recommendedCommunities: d,
					selected: l,
					toggleAll: x,
					toggleSelection: h
				}), e === ve.AVATAR && o.a.createElement(V, {
					avatarImage: t,
					fetchRandomAvatar: r
				}))
			};
			var Ce = n("./src/reddit/constants/experiments.ts"),
				_e = n("./src/reddit/constants/modals.ts"),
				je = n("./src/reddit/contexts/ApiContext.tsx"),
				ye = n("./src/lib/makeGqlRequest/index.ts"),
				ke = n("./node_modules/lodash/uniqBy.js"),
				Se = n.n(ke),
				Ie = n("./src/reddit/customMiddleware/recentSubreddits.ts"),
				Ne = n("./src/reddit/endpoints/economics/specialMembership.ts"),
				Te = n("./src/reddit/endpoints/subreddit/local.ts"),
				we = n("./src/reddit/endpoints/subreddit/subscriptions.ts");
			var Re = n("./src/redditGQL/operations/InterestTopicsByIds.json");
			const Le = async (e, t) => {
				const n = await ((e, t) => {
					const n = {
						topicIds: [],
						schemeName: "topic_chaining_icons",
						maxSubreddits: 10,
						...t
					};
					return Object(ye.a)(e, {
						...Re,
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
			}, Ge = e => {
				var t;
				return {
					description: e.publicDescription,
					icon: e.communityIcon || (null === (t = e.icon) || void 0 === t ? void 0 : t.url),
					id: e.id,
					prefixedName: e.displayText
				}
			}, Me = async e => {
				var t;
				const n = await Object(Te.b)(e(), {
					first: 10
				});
				if (n && (null === (t = null == n ? void 0 : n.rankings) || void 0 === t ? void 0 : t.length)) {
					const {
						rankings: e,
						subreddits: t
					} = n;
					return e.map(({
						id: e
					}) => Ge(t[e]))
				}
				return null
			}, Pe = async e => {
				const t = Object(Ie.b)();
				if (null == t ? void 0 : t.length) {
					const n = t.map(e => e.id),
						r = await Object(Ne.e)(e(), n);
					if (r.ok) return Object.values(r.body).map(Ge)
				}
				return null
			}, Fe = e => ({
				id: e.id,
				topic: e.title,
				children: e.isRoot ? [] : null
			});
			var Ae = e => (({
					edges: e
				}) => {
					return e.reduce((e, {
						node: t
					}) => {
						const n = t.topic.parents.map(e => e.nodeId),
							r = n.length <= 0,
							s = t.id,
							a = {
								id: s,
								isRoot: r,
								parents: n,
								title: t.topic.title
							};
						return r ? (e.topics.push(Fe(a)), e.dict[s] = e.topics.length - 1) : n.forEach(t => {
							var n;
							const r = e.dict[t];
							if ("number" == typeof r) {
								null === (n = e.topics[r].children) || void 0 === n || n.push(Fe(a))
							}
						}), e
					}, {
						topics: [],
						dict: {}
					}).topics
				})(e),
				De = n("./src/redditGQL/operations/InterestTopics.json"),
				Be = n("./src/redditGQL/operations/UpdateTopicPreferences.json");
			const qe = async e => {
				const t = await (e => {
					const t = {
						first: 500,
						maxChildren: 500,
						maxDepth: 2,
						schemeName: "topic_chaining_icons"
					};
					return Object(ye.a)(e, {
						...De,
						variables: t
					})
				})(e());
				if (!t.ok) return null;
				const n = t.body,
					r = null == n ? void 0 : n.data.interestTopics;
				return r ? Ae(r) : null
			}, Ve = (e, t) => ((e, t) => Object(ye.a)(e, {
				...Be,
				variables: t
			}))(e(), {
				input: {
					selectedOnboardingTopicIds: t
				}
			});
			var We = n("./src/telemetry/helpers/sendCounter.ts");
			var Qe = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				Ue = n("./src/reddit/icons/svgs/svgIcons.tsx"),
				He = n("./src/reddit/selectors/experiments/econ/index.ts"),
				ze = n("./src/reddit/selectors/experiments/onboarding.ts"),
				Ke = n("./src/reddit/selectors/experiments/survey.ts"),
				Je = n("./src/reddit/selectors/onboarding.ts"),
				Ze = n("./src/reddit/actions/accountGender/index.ts"),
				Ye = n("./src/reddit/actions/onboarding/index.ts");

			function Xe() {
				return (Xe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: $e
			} = n("./node_modules/fbt/lib/FbtPublic.js"), et = () => Object(p.f)({
				kind: O.b.Error,
				text: $e._("Something went wrong", null, {
					hk: "22u7ha"
				})
			}), tt = async (e, t, n) => {
				const r = {
					ok: !0,
					preSelectedCommunities: {},
					recommendedCommunities: []
				};
				try {
					r.recommendedCommunities = await (async (e, t) => {
						const n = [Me(t), Pe(e)],
							[r, s] = await Promise.all(n);
						return Se()([...s || [], ...r || []], e => e.id)
					})(e, t), n || (r.preSelectedCommunities = r.recommendedCommunities.slice(0, 5).reduce((e, t) => (e[t.id] = !0, e), {}))
				} catch (s) {
					r.ok = !1
				}
				return r
			}, nt = async (e, t, n, r) => {
				const s = Object.keys(n),
					a = Object.keys(r),
					o = [],
					i = {
						ok: !0,
						reload: !1
					};
				if (s.length && o.push(((e, t) => Object(we.c)(e(), {
						subredditIds: t,
						subscribe: !0
					}))(e, s)), a.length && o.push(Ve(t, a)), o.length) try {
					(await Promise.all(o)).some(({
						ok: e
					}) => !e) ? i.ok = !1 : i.reload = !0
				} catch (c) {
					i.ok = !1
				}
				return i
			}, rt = Object(c.a)(e => {
				const {
					gqlContext: t,
					apiContext: n
				} = e, r = Object(i.d)(), s = Object(x.a)(), c = Object(i.e)(ze.d), p = c === Ce.pf.Enabled_noskip || c === Ce.pf.Enabled_noskip_no_preselect, b = c === Ce.pf.Enabled_noskip_no_preselect, f = Object(i.e)(ze.a) === Ce.mb.Enabled, g = f ? ve.GENDER : ve.INTERESTS, [O, v] = Object(a.useState)(g), [C, _] = Object(a.useState)(null), j = Object(i.e)(Je.a), [y, S] = Object(a.useState)(!f), [T, M] = Object(a.useState)([]), [P, F] = Object(a.useState)(!1), [A, D] = Object(a.useState)({}), [B, q] = Object(a.useState)(!1), [V, W] = Object(a.useState)([]), [Q, U] = Object(a.useState)([]), [H, z] = Object(a.useState)({}), {
					avatarImage: K,
					fetchRandomAvatar: J,
					saveAvatar: Z
				} = E();
				Object(a.useEffect)(() => {
					(y || j) && async function() {
						F(!0);
						const e = await qe(t);
						F(!1), e && M(e)
					}()
				}, [y, j, t]), Object(a.useEffect)(() => {
					j && ((e, t) => {
						Object(We.b)(N.n.Redesign, {
							type: We.a.GenderCollection,
							data: {
								gender: e,
								submitSuccess: t
							}
						})
					})(null == C ? void 0 : C.genderCategory, j.success)
				}, [j, C]), Object(a.useEffect)(() => {
					!async function() {
						const e = await tt(n, t, b),
							{
								ok: s,
								preSelectedCommunities: a,
								recommendedCommunities: o
							} = e;
						s ? (z(a), U(o)) : r(et())
					}()
				}, [n, r, t, b]);
				const Y = Object(i.e)(e => Object(Ke.f)(e)),
					X = Object(a.useCallback)(() => {
						r(Object(u.g)(_e.a.ONBOARDING_MODAL_D2X)), Y && r(Object(m.f)())
					}, [r, Y]),
					$ = Object(a.useCallback)((e = 3e3) => setTimeout(X, e), [X]),
					ee = Object(a.useCallback)(() => {
						const e = Object.keys(A).filter(e => 0 === A[e].length || !A[e].find(e => A[e]));
						W([]), e.length && async function() {
							q(!0);
							const n = await Le(t, e);
							q(!1), n && W(n)
						}()
					}, [t, A]),
					te = Object(a.useCallback)(e => {
						F(!0), v(ve.INTERESTS), r(Object(Ze.a)(e))
					}, [r]),
					ne = Object(a.useCallback)(async () => {
						s(Object(R.j)()), te(C || L)
					}, [te, C, s]),
					re = Object(a.useCallback)(async () => {
						s(Object(R.n)()), v(ve.COMMUNITIES), ee()
					}, [ee, s]),
					se = Object(a.useCallback)(async () => {
						s(Object(R.e)()), J(), v(ve.AVATAR);
						const e = await nt(n, t, H, A);
						e.ok ? e.reload && r(Object(l.frontpageReloaded)()) : r(et())
					}, [n, r, J, t, H, A, s]),
					ae = Object(a.useCallback)(() => {
						v(ve.CELEBRATION), $()
					}, [$]),
					oe = Object(a.useCallback)(() => {
						Z(), ae()
					}, [Z, ae]),
					ie = (() => O === ve.GENDER ? ne : O === ve.INTERESTS ? re : O === ve.COMMUNITIES ? se : oe)(),
					ce = Object(i.e)(e => O === ve.AVATAR && Object(He.e)(e));
				Object(a.useEffect)(() => {
					O !== ve.AVATAR || ce || ae()
				}, [ce, O, ae]);
				const de = O !== g,
					le = Object(a.useCallback)(() => {
						O === ve.INTERESTS && f ? (r(Object(Ye.resetGenderUpdateState)()), S(!1), v(ve.GENDER)) : O === ve.COMMUNITIES ? v(ve.INTERESTS) : O === ve.AVATAR && v(ve.COMMUNITIES)
					}, [O, r, f]),
					ue = O === ve.GENDER || O === ve.AVATAR || O === ve.INTERESTS && !p,
					me = Object(a.useCallback)(() => {
						O === ve.GENDER ? (s(Object(R.i)()), S(!0), v(ve.INTERESTS)) : O === ve.INTERESTS ? (s(Object(R.m)()), X()) : O === ve.AVATAR && (s(Object(h.a)("skip")), ae())
					}, [X, s, O, ae]),
					pe = Object.keys(H).length,
					be = Object.keys(A).length,
					fe = O === ve.GENDER && !(e => !!e && (!G(null == e ? void 0 : e.genderCategory) || !!(e.definedGender && e.definedGender.length <= I.b)))(C) || p && O === ve.INTERESTS && be < 3 || O === ve.COMMUNITIES && pe < 1;
				return O === ve.CELEBRATION || O === ve.AVATAR && !ce ? o.a.createElement(k, null) : o.a.createElement("div", {
					className: xe.a.container
				}, o.a.createElement("header", {
					className: xe.a.header
				}, o.a.createElement("div", {
					className: xe.a.headerBar
				}, o.a.createElement("div", null, de && o.a.createElement(Ue.d, {
					className: xe.a.backButton,
					onClick: le
				})), o.a.createElement(Qe.a, {
					className: xe.a.snooIcon
				}), o.a.createElement("div", {
					className: xe.a.skipContainer
				}, ue && o.a.createElement("button", {
					className: xe.a.skipButton,
					onClick: me
				}, $e._("Skip", null, {
					hk: "2S8Lme"
				})))), O === ve.GENDER && o.a.createElement("div", {
					className: `${xe.a.title} ${w.a.title}`
				}, $e._("Which of the following best describes you?", null, {
					hk: "2hsRwl"
				})), O === ve.INTERESTS && o.a.createElement("div", {
					className: xe.a.title
				}, $e._("What are you into?", null, {
					hk: "2hUwMd"
				})), O === ve.COMMUNITIES && o.a.createElement("div", {
					className: xe.a.title
				}, $e._("Join some communities", null, {
					hk: "1iB29u"
				})), O === ve.AVATAR && o.a.createElement("div", {
					className: xe.a.title
				}, $e._("Style your avatar", null, {
					hk: "15i2ld"
				})), O === ve.GENDER && o.a.createElement("div", {
					className: w.a.subtitle
				}, $e._("Reddit will never share this information and uses it to improve what content you see.", null, {
					hk: "4ievQt"
				})), O === ve.INTERESTS && p && o.a.createElement("div", {
					className: xe.a.subtitle
				}, $e._("Select three topics to continue", null, {
					hk: "oHYeb"
				})), O === ve.AVATAR && o.a.createElement("div", {
					className: xe.a.subtitle
				}, $e._("This is how people will see you on Reddit.", null, {
					hk: "2SmAiC"
				}), o.a.createElement("br", null), $e._("(You can change it later if you’d like.)", null, {
					hk: "1x9ZNL"
				}))), o.a.createElement(Ee, {
					activeStep: O,
					avatarImage: K,
					communitiesByTopic: V,
					fetchRandomAvatar: J,
					interests: T,
					loadingCommunities: B,
					loadingInterests: P,
					recommendedCommunities: Q,
					selectedCommunities: H,
					selectedGenderOption: C,
					selectedInterests: A,
					setSelectedCommunities: z,
					setSelectedGenderOption: _,
					setSelectedInterests: D
				}), o.a.createElement("div", {
					className: Object(d.a)(xe.a.continueButtonWrapper, {
						[xe.a.avatarPicker]: O === ve.AVATAR
					})
				}, o.a.createElement("button", {
					className: xe.a.continueButton,
					disabled: fe,
					onClick: ie
				}, $e._("Continue", null, {
					hk: "15wNPy"
				}))))
			});
			t.default = Object(je.b)(e => o.a.createElement(rt, Xe({}, e, {
				className: Object(d.a)(e.className, xe.a.modal),
				onOverlayClick: s.a,
				overlayClassName: xe.a.overlay
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
				return E
			})), n.d(t, "a", (function() {
				return C
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
			var g = Object(o.a)(f),
				h = n("./src/reddit/components/Settings/shared/Dropdown/index.tsx"),
				x = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				O = n("./src/reddit/components/Settings/GenderCollection/index.m.less"),
				v = n.n(O);
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
						items: E(),
						onSelect: this.onSelect,
						placeholder: r.fbt._("Select", null, {
							hk: "1zIGi5"
						}),
						selectedKey: i || ""
					})), e && a.a.createElement(g, {
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
				f = n.n(b);
			const g = Object(i.a)(l.a),
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
						renderItem: a = this.renderDropdownItem,
						selectedKey: o,
						dropdownId: i
					} = this.props, d = n && {
						displayLabel: n,
						key: n
					}, l = t.find(e => e.key === o) || d || t[0];
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
				return Y
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
				return ge
			})), n.d(t, "d", (function() {
				return xe
			})), n.d(t, "i", (function() {
				return Oe
			})), n.d(t, "c", (function() {
				return ve
			})), n.d(t, "e", (function() {
				return Ee
			})), n.d(t, "h", (function() {
				return Ce
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
				f = n("./src/reddit/controls/Dropdown/Row.tsx"),
				g = n("./src/reddit/controls/FormFields/index.tsx"),
				h = n("./src/lib/lessComponent.tsx"),
				x = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				O = n("./src/reddit/controls/Select/index.m.less"),
				v = n.n(O);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const C = h.a.span("Wrapper", v.a),
				_ = h.a.select("Inner", v.a),
				j = h.a.wrapped(x.b, "Caret", v.a);

			function y({
				className: e,
				innerClassName: t,
				...n
			}) {
				const r = n.disabled ? {
					"data-disabled": n.disabled
				} : {};
				return s.a.createElement(C, {
					className: e
				}, s.a.createElement(_, E({
					className: t
				}, n)), s.a.createElement(j, E({
					isSubreddit: !0
				}, r)))
			}
			var k = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				S = n("./src/reddit/controls/Typography/index.tsx"),
				I = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				N = n("./src/reddit/icons/svgs/Circle/index.tsx"),
				T = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				w = n("./node_modules/lodash/range.js"),
				R = n.n(w),
				L = n("./src/reddit/controls/Button/index.tsx"),
				G = n("./src/reddit/layout/row/Inline/index.tsx"),
				M = n("./src/reddit/models/Flair/index.ts"),
				P = n("./src/reddit/selectors/tooltip.ts"),
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
				V = h.a.wrapped(N.a, "Circle", D.a),
				W = h.a.h3("Label", D.a),
				Q = h.a.wrapped(S.c, "Subtext", D.a),
				U = h.a.wrapped(m.a, "HoverTooltip", D.a),
				H = h.a.div("ControlContainer", D.a),
				z = h.a.div("TextContainer", D.a),
				K = h.a.div("ActionContainer", D.a),
				J = ({
					className: e,
					direction: t,
					isCreateCommunity: n,
					inModal: r,
					isNightModeOn: a,
					disabled: o,
					indent: i,
					last: d,
					...l
				}) => s.a.createElement("div", B({}, l, {
					className: Object(c.a)(D.a.Wrapper, e, {
						[D.a.mColumn]: "column" === t,
						[D.a.mDisabled]: !!o,
						[D.a.mIndent]: !!i,
						[D.a.mLast]: !!d,
						[D.a.isCreateCommunity]: !!n,
						[D.a.inModal]: !!r,
						[D.a.isNightModeOn]: !!a
					})
				})),
				Z = h.a.a("Link", D.a),
				Y = h.a.wrapped(Z, "SubtextLink", D.a),
				X = h.a.wrapped(T.a, "LinkIcon", D.a),
				$ = h.a.button("LinkButton", D.a),
				ee = h.a.wrapped(I.a, "ArrowRight", D.a),
				te = e => s.a.createElement(J, {
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					isCreateCommunity: e.isCreateCommunity,
					last: e.last
				}, s.a.createElement(z, {
					className: e.textContainerClassName
				}, s.a.createElement(W, null, e.label, e.isRequired && s.a.createElement(V, null)), s.a.createElement(Q, null, e.subtext)), s.a.createElement(K, null, e.children)),
				ne = h.a.div("StyledFlair", D.a),
				re = h.a.wrapped(ne, "SpoilerFlair", D.a),
				se = h.a.wrapped(ne, "NSFWFlair", D.a),
				ae = e => {
					switch (e.flair) {
						case M.f.Nsfw:
							return s.a.createElement(se, null, "NSFW");
						case M.f.Spoiler:
							return s.a.createElement(re, null, "SPOILER");
						default:
							return null
					}
				},
				oe = e => {
					const t = Object(o.a)();
					return s.a.createElement(J, {
						className: e.className,
						disabled: e.disabled,
						indent: e.indent,
						last: e.last
					}, s.a.createElement(z, null, s.a.createElement(G.a, null, s.a.createElement("label", {
						htmlFor: t
					}, s.a.createElement(W, null, e.label))), s.a.createElement(Q, null, e.subtext)), s.a.createElement(K, null, s.a.createElement(H, null, e.tooltip && s.a.createElement(U, {
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
				ie = h.a.input("RangeSliderInput", D.a),
				ce = h.a.div("RangeSlider", D.a),
				de = h.a.div("Ticks", D.a),
				le = h.a.div("TickText", D.a),
				ue = h.a.div("PreSubText", D.a),
				me = Object(i.c)({
					isNightModeOn: F.X
				}),
				pe = Object(a.b)(me)(e => s.a.createElement(J, {
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
				}, !e.inModal && s.a.createElement(G.a, null, s.a.createElement(W, null, e.label)), !e.hideSubtext && s.a.createElement(Q, null, " ", s.a.createElement(ue, {
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
				}, s.a.createElement(z, null, s.a.createElement(G.a, null, s.a.createElement(W, null, e.label)), s.a.createElement(Q, null, e.subtext)), s.a.createElement(K, null, s.a.createElement(H, null, s.a.createElement(L.o, {
					onClick: e.onClick
				}, e.actionText)))),
				fe = e => s.a.createElement(J, {
					className: e.className,
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, s.a.createElement(z, null, s.a.createElement(Z, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, e.label, s.a.createElement(X, null)), s.a.createElement(Q, null, e.subtext)), s.a.createElement(K, null, s.a.createElement(Z, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, s.a.createElement(ee, null)))),
				ge = e => s.a.createElement(J, {
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
				he = Object(i.c)({
					isOpen: (e, t) => Object(P.b)(t.id)(e)
				}),
				xe = Object(a.b)(he, (e, t) => ({
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
				Oe = ({
					disabled: e,
					last: t,
					onClick: n,
					onChange: a,
					...o
				}) => {
					const i = Object(r.useCallback)(e => a(e.target.value), [a]),
						{
							items: c
						} = o;
					return s.a.createElement(J, {
						disabled: e
					}, s.a.createElement(z, null, s.a.createElement("label", {
						htmlFor: o.id
					}, s.a.createElement(W, {
						className: o.labelClassname
					}, o.label)), s.a.createElement(Q, null, o.subtext)), s.a.createElement("div", {
						className: D.a.Wrapper__LineBreak
					}), s.a.createElement(J, {
						last: t,
						indent: !0,
						disabled: e
					}, s.a.createElement(y, {
						id: o.id,
						className: "redditStyle",
						disabled: e || o.inputDisabled,
						onChange: i,
						value: o.selected
					}, c.map(({
						value: e,
						displayName: t
					}) => s.a.createElement("option", {
						key: e,
						value: e
					}, t)))))
				},
				ve = e => s.a.createElement(J, {
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
				}, "r/"), s.a.createElement(g.a, {
					className: e.isCreateCommunity ? D.a.input : void 0,
					disabled: !1,
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
				return g
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "j", (function() {
				return E
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
				f = r.a.div("FormGroupDescription", a.a),
				g = r.a.div("FormItem", a.a),
				h = r.a.h3("FormElementTitle", a.a),
				x = r.a.div("FormElementDescription", a.a),
				O = r.a.div("FormElementError", a.a),
				v = r.a.div("FormElementSubGroup", a.a),
				E = r.a.li("FormListItem", a.a)
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
				f = r.a.wrapped(a.a, "Checkbox", l.a),
				g = r.a.wrapped(o.a, "CheckboxSelected", l.a),
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
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var r = n("./node_modules/lodash/throttle.js"),
				s = n.n(r),
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

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			class h extends o.a.Component {
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
					return e.href ? o.a.createElement(c.a, g({}, t, {
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
					}, e.displayText)) : o.a.createElement(u.a, g({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: s()(this.handleMouseMove, 500)
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
					[f.a.topics]: t.isTopicsStyle
				});
				return o.a.createElement(h, g({
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
				return E
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
					}, a), i && d.a.createElement(g, {
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
				E = e => d.a.createElement(v, {
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
				return f
			})), n.d(t, "c", (function() {
				return g
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
				f = e => {
					const {
						label: t,
						children: n,
						inputRef: r,
						className: o,
						...i
					} = e, c = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(a.a)(u.a.inputWrapper, o, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: b
					}, s.a.createElement(p, m({
						"aria-invalid": e.isInvalid,
						innerRef: r
					}, i)), e.label && s.a.createElement("label", {
						className: Object(a.a)(u.a.label, {
							[u.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				g = e => {
					const {
						label: t,
						children: n,
						inputRef: r,
						isInvalid: o,
						className: i,
						redditStyle: c,
						...d
					} = e, l = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(a.a)(u.a.inputMovingLabelWrapper, i, {
							[u.a.mIsInvalid]: o,
							[u.a.mIsRedditStyle]: c
						}),
						onClick: b
					}, s.a.createElement(p, m({
						innerRef: r
					}, d)), e.label && s.a.createElement("label", {
						className: Object(a.a)(u.a.label, {
							[u.a.mHasValue]: l
						})
					}, e.label), e.children)
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
					return e.map((e, o) => s.a.createElement(f, {
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
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => s.a.createElement("div", {
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
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/controls/InternalLink/index.tsx"),
				a = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				o = n.n(a);
			t.a = r.a.wrapped(s.a, "unstyledInternalLink", o.a)
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
			const s = ({
					edges: e,
					pageInfo: t
				}) => {
					const n = {},
						s = [];
					for (const {
							node: a,
							...o
						} of e) {
						const e = Object(r.a)(a);
						n[e.id] = e, s.push(o)
					}
					return {
						pageInfo: t,
						rankings: s,
						subreddits: n
					}
				},
				a = ({
					edges: e
				}) => {
					const t = {},
						n = [];
					for (const {
							node: s,
							...a
						} of e) {
						const e = Object(r.a)(s);
						t[e.id] = {
							...e,
							bannerBackgroundImage: s && s.styles && s.styles.bannerBackgroundImage
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
						s = [];
					let a = 0;
					for (const {
							node: o
						} of e) {
						const e = Object(r.a)(o);
						n[e.id] = {
							...e,
							publicDescription: null == o ? void 0 : o.publicDescriptionText,
							bannerBackgroundImage: o && o.styles && o.styles.bannerBackgroundImage
						}, s.push({
							id: e.id,
							rank: a
						}), a += 1
					}
					return {
						rankings: s,
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
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				a = n.n(s);
			const o = ({
					isLoading: e
				}) => Object(r.a)(a.a.loadingBackground, {
					[a.a["m-loading"]]: e
				}),
				i = e => Object(r.a)(a.a.loadingBar, o(e))
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(a.b)("caret_down",e.isFilled)} ${e.className}`
			})
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
				return x
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "d", (function() {
				return E
			}));
			var r = n("./src/lib/objectSelector/index.ts"),
				s = n("./src/reddit/featureFlags/index.ts"),
				a = n("./src/reddit/selectors/posts.ts"),
				o = n("./src/reddit/selectors/subreddit.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const c = (e, t) => {
					const n = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (n) {
						const t = Object(o.R)(e, {
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
					const r = Object(o.V)(e, {
						subredditName: n.name
					});
					return r && r.postIds && r.postIds.length ? r.postIds : u
				}),
				p = (e, t) => {
					const n = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return n ? Object(o.R)(e, {
						subredditId: n
					}) : null
				},
				b = (e, t, n, r, s) => {
					const o = s.find(e => e <= t) || -1,
						i = s.find(e => e > t) || 1 / 0;
					return t !== i && t !== o && (!(o + n > t) && (!(t + n > i) && !((e, t, n) => {
						const r = n[t - 1],
							s = n[t],
							o = s && Object(a.H)(e, {
								postId: r
							}) || null,
							i = s && Object(a.H)(e, {
								postId: s
							}) || null;
						return o && o.isSponsored || i && i.isSponsored
					})(e, t, r)))
				},
				f = [3],
				g = Object(r.a)((e, {
					existingDUPositions: t,
					listingProps: n
				}) => {
					const r = t.slice().sort();
					let s = -1;
					const o = Object(a.A)(e, {
							listingKey: n.listingKey
						}),
						i = [];
					return f.forEach(t => {
						let n = s + t;
						if (!(n >= o.length)) {
							for (; n < o.length && !b(e, n, t, o, r);) n += 1;
							n < o.length && (i.push(n), s = n)
						}
					}), i
				}),
				h = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				x = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				O = e => e.focusedVerticals.category,
				v = e => e.focusedVerticals.lastLoadedEnv,
				E = e => {
					const t = Object(i.J)(e),
						n = s.d.geoSubredditRecommendationDULoggedIn(e),
						r = s.d.geoSubredditRecommendationDULoggedOut(e);
					return t && n || !t && r
				}
		},
		"./src/redditGQL/operations/Frontpage.json": function(e) {
			e.exports = JSON.parse('{"id":"5efdd2d787dd"}')
		},
		"./src/redditGQL/operations/GetAccountGender.json": function(e) {
			e.exports = JSON.parse('{"id":"1508e05ea2ee"}')
		},
		"./src/redditGQL/operations/GetNearbySubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"aff6d12aa0c2"}')
		},
		"./src/redditGQL/operations/InterestTopics.json": function(e) {
			e.exports = JSON.parse('{"id":"c49069ffb9a9"}')
		},
		"./src/redditGQL/operations/InterestTopicsByIds.json": function(e) {
			e.exports = JSON.parse('{"id":"a4ae094d69e5"}')
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"07269d01f4b6"}')
		},
		"./src/redditGQL/operations/UpdateAccountGender.json": function(e) {
			e.exports = JSON.parse('{"id":"670e8e8d3018"}')
		},
		"./src/redditGQL/operations/UpdateTopicPreferences.json": function(e) {
			e.exports = JSON.parse('{"id":"a48d141a1878"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OnboardingModal.9499780d2b01257ebecc.js.map