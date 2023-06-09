// https://www.redditstatic.com/desktop2x/ProfileOverview.8e3bc0d1844fb876acdb.js
// Retrieved at 6/8/2023, 8:50:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileOverview"], {
		"./src/lib/LiveChatActiveUsers/index.m.less": function(e, t, s) {
			e.exports = {
				liveChatActiveUsers: "_25wqhmS87KWZppCM1ZHphX"
			}
		},
		"./src/lib/LiveChatActiveUsersWithLiveLabel/index.m.less": function(e, t, s) {
			e.exports = {
				liveParticipation: "_3qjBuOjYOffFET145CIGgi"
			}
		},
		"./src/lib/LiveLabel/index.m.less": function(e, t, s) {
			e.exports = {
				LiveLabel: "_1-nQNZpTU7wWajQDxaSGx8",
				liveLabel: "_1-nQNZpTU7wWajQDxaSGx8"
			}
		},
		"./src/lib/makeOverviewConversationsItemKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = (e, t) => {
				return `overviewConversations--[profile:'${t}']--[post:'${e}']`
			}
		},
		"./src/lib/promo/withShowSignupUpsell.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			}));
			var n = s("./node_modules/react/index.js");

			function o() {
				return window
			}
			var r = s("./node_modules/lodash/debounce.js"),
				a = s.n(r),
				i = s("./src/reddit/constants/elementIds.ts"),
				d = s("./src/reddit/constants/experiments.ts"),
				c = s("./src/reddit/hooks/usePromoContext.ts"),
				l = s("./src/reddit/constants/promo.ts"),
				m = s("./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts");
			var u = function() {
					const e = Object(m.a)(d.id.Bottom_cell),
						t = Object(m.a)(d.id.Bottom_cell_dismissible),
						s = Object(m.a)(d.id.Bottom_cell_dismissible_immediate_trigger),
						n = Object(m.a)(d.id.Bottom_cell_signup_upsell_copy),
						o = Object(m.a)(d.id.Bottom_cell_surprise_install_copy),
						r = Object(m.a)(d.id.Bottom_sheet);
					return e || n || o ? l.b.SignupUpsellCell : t || s ? l.b.SignupUpsellCellDismissible : r ? l.b.SignupUpsellBottomSheet : null
				},
				p = s("./src/reddit/hooks/promo/useIsPromoShown.ts");
			const b = 250,
				h = 1e3;

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function f(e) {
				const t = e.displayName || e.name || "Component";

				function s(t) {
					const s = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b;
						const {
							showPromo: t
						} = Object(c.a)(), s = u(), r = Object(p.a)(s), l = Object(m.a)(d.id.Bottom_cell_dismissible_immediate_trigger);
						return n.useMemo(() => a()(() => {
							if (!r && s) {
								const e = document.getElementById(i.e),
									n = e ? e.scrollTop : o().scrollY,
									r = o().innerHeight,
									a = r / 3,
									d = 2 * r;
								n >= (l ? a : d) && t(s)
							}
						}, e, {
							maxWait: h
						}), [l, r, s, t, e])
					}();
					return n.createElement(e, x({
						showSignupUpsell: s
					}, t))
				}
				return s.displayName = `withShowSignupUpsell(${t})`, s
			}
		},
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/bulkActions/constants.ts");
			const r = Object(n.a)(o.c),
				a = Object(n.a)(o.b),
				i = Object(n.a)(o.a)
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return k
			})), s.d(t, "b", (function() {
				return N
			}));
			var n, o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/performanceTimings/index.tsx"),
				a = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(n || (n = {}));
			var c, l = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				m = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(c || (c = {}));
			var u = s("./src/lib/objectSelector/index.ts"),
				p = s("./src/reddit/featureFlags/index.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/subreddit.ts"),
				x = s("./src/reddit/selectors/user.ts");
			const f = [],
				v = (Object(u.a)((e, t) => {
					const s = v(e, t);
					if (!s) return f;
					const n = Object(h.bb)(e, {
						subredditName: s.name
					});
					return n && n.postIds && n.postIds.length ? n.postIds : f
				}), (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(h.X)(e, {
						subredditId: s
					}) : null
				}),
				O = (e, t, s, n, o) => {
					const r = o.find(e => e <= t) || -1,
						a = o.find(e => e > t) || 1 / 0;
					return t !== a && t !== r && (!(r + s > t) && (!(t + s > a) && !((e, t, s) => {
						const n = s[t - 1],
							o = s[t],
							r = o && Object(b.F)(e, {
								postId: n
							}) || null,
							a = o && Object(b.F)(e, {
								postId: o
							}) || null;
						return r && r.isSponsored || a && a.isSponsored
					})(e, t, n)))
				},
				g = [3];
			Object(u.a)((e, t) => {
				let {
					existingDUPositions: s,
					listingProps: n
				} = t;
				const o = s.slice().sort();
				let r = -1;
				const a = Object(b.y)(e, {
						listingKey: n.listingKey
					}),
					i = [];
				return g.forEach(t => {
					let s = r + t;
					if (!(s >= a.length)) {
						for (; s < a.length && !O(e, s, t, a, o);) s += 1;
						s < a.length && (i.push(s), r = s)
					}
				}), i
			});
			var E = s("./src/reddit/selectors/platform.ts");
			const C = Object(o.a)(a.f),
				j = Object(o.a)(a.d),
				y = Object(o.a)(a.g),
				_ = Object(o.a)(a.c),
				k = Object(o.a)(a.e),
				P = (Object(o.a)(a.i), Object(o.a)(a.h), () => async (e, t, s) => {
					let {
						gqlContext: o
					} = s;
					const r = t(),
						a = (e => {
							return e.focusedVerticals.api.pending.focusedVerticalGqlPending
						})(r),
						c = (e => {
							const t = Object(x.R)(e),
								s = p.d.geoSubredditRecommendationDULoggedIn(e),
								n = p.d.geoSubredditRecommendationDULoggedOut(e);
							return t && s || !t && n
						})(r),
						u = Object(x.R)(r);
					if (a || !c) return;
					e(y());
					let b = !1;
					try {
						const t = u ? n.LoggedInGeo : n.LoggedOutGeo,
							s = await ((e, t, s) => Object(i.a)(e, {
								...d,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(o(), t);
						if (s.ok && s.body) {
							const {
								data: t
							} = s.body;
							if (I(t)) {
								if (w(t)) {
									e(_({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), b = !0
								} else if (S(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: n,
											interactedSubreddit: o,
											category: r
										} = s.focusRecommendations[0],
										a = [n, o],
										i = Object(m.d)(a),
										d = Object(l.b)(a),
										c = Object(m.c)(n),
										u = {
											recommendedSubredditIds: [n.id],
											interactedSubredditIds: [o.id],
											subreddits: i,
											subredditsAboutInfo: d,
											subredditTopContent: c,
											category: r,
											lastLoadedEnv: "client"
										};
									e(C(u)), b = !0
								}
							} else b = !1
						}
					} catch (h) {
						b = !1
					}
					b || e(j({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}),
				I = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				},
				w = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				},
				S = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						n = t && t.type;
					return !!(s && !w(e) && n === c.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				},
				N = () => async (e, t, s) => {
					var n, o;
					const a = t(),
						i = (e => e.focusedVerticals.lastLoadedEnv)(a);
					if ((e => {
							return e.focusedVerticals.api.error.focusedVerticalGqlError
						})(a) || null === i || "client" === i) {
						const s = null === (o = null === (n = Object(E.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === o ? void 0 : o.route.chunk,
							i = Object(x.S)(a);
						return Object(r.i)(() => e(P()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: i
						})
					}
					if ("server" === i) return e(k({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/modQueue/realtime.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return P
			})), s.d(t, "c", (function() {
				return N
			})), s.d(t, "b", (function() {
				return R
			}));
			var n = s("./src/lib/makeGqlRequest/index.ts"),
				o = (s("./src/redditGQL/operations/LastModActionInSubreddit.json"), s("./src/redditGQL/operations/ModActivitySummaryByID.json")),
				r = s("./src/redditGQL/operations/SingleCommentById.json"),
				a = s("./src/redditGQL/operations/SinglePostInfoById.json");
			var i = s("./src/lib/initializeClient/installReducer.ts"),
				d = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/reddit/actions/comment/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/users.ts"),
				u = s("./src/reddit/endpoints/redditor/index.ts"),
				p = s("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				b = s("./src/reddit/helpers/graphql/normalizeModActivityFromGql/index.ts"),
				h = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				x = s("./src/reddit/helpers/isPost.ts"),
				f = s("./src/reddit/reducers/features/modActivitySummaries/index.ts"),
				v = s("./src/reddit/reducers/features/realtimeModqueue/index.ts"),
				O = s("./src/reddit/actions/modQueue/constants.ts");
			var g = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case O.o:
							return t.payload;
						default:
							return e
					}
				},
				E = s("./src/reddit/reducers/pages/modHub/index.ts"),
				C = s("./src/reddit/selectors/modQueue.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				y = s("./src/redditGQL/types.ts");
			Object(i.a)({
				pages: {
					modHub: E.a
				}
			}), Object(i.a)({
				features: {
					modActivitySummaries: f.a
				}
			}), Object(i.a)({
				features: {
					realtimeModqueue: v.a
				}
			}), Object(i.a)({
				features: {
					realtimeUpdateAnimationId: g
				}
			});
			const _ = Object(d.a)(O.l),
				k = e => async (t, s, r) => {
					let {
						gqlContext: a
					} = r;
					const i = await ((e, t) => Object(n.a)(e, {
							...o,
							variables: t
						}))(a(), {
							id: e
						}),
						d = Object(b.a)(i.body.data.subredditInfoById);
					t(_(d))
				}, P = e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n;
					e && t(k(e))
				}, I = Object(d.a)(O.m), w = (e, t) => {
					const s = (e => {
							var t, s;
							const {
								subredditName: n,
								pageName: o
							} = (null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || {}, r = (null === (s = e.platform.currentPage) || void 0 === s ? void 0 : s.queryParams) || {};
							return {
								page: (null == r ? void 0 : r.page) || "1",
								pageName: o,
								subredditName: n || (null == r ? void 0 : r.subreddit),
								queryParams: r
							}
						})(e),
						n = Object(C.d)(e, s);
					return null == n ? void 0 : n.includes(t)
				}, S = [y.x.ApproveComment, y.x.ApproveLink, y.x.RemoveComment, y.x.RemoveLink, y.x.SpamComment, y.x.SpamLink], N = e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n;
					var r, a;
					const {
						moderatorID: i,
						targetID: d,
						action: c
					} = null === (r = null == e ? void 0 : e.subscribe) || void 0 === r ? void 0 : r.data, l = s(), p = Object(j.k)(l), b = S.includes(c), h = i === p, x = w(l, d);
					if (!b || h || !x) return;
					const f = await Object(u.b)(o(), {
						id: i
					}) || (null === (a = Object(j.Cb)(l, {
						userId: i
					})) || void 0 === a ? void 0 : a.username);
					f && t(Object(m.z)(f)), t(I({
						targetID: d
					}))
				}, T = Object(d.a)(O.p), M = Object(d.a)(O.o), R = e => async (t, s, o) => {
					let {
						gqlContext: i
					} = o;
					var d, m, u, b, f, v;
					const O = Object(x.a)(e),
						g = s(),
						E = null === (m = null === (d = null == g ? void 0 : g.features) || void 0 === d ? void 0 : d.realtimeModqueue) || void 0 === m ? void 0 : m.toUpdate.includes(e),
						C = w(g, e);
					if (!E || !C) return;
					const j = O ? () => ((e, t) => Object(n.a)(e, {
							...a,
							variables: t
						}))(i(), {
							id: e
						}) : () => ((e, t) => Object(n.a)(e, {
							...r,
							variables: t
						}))(i(), {
							id: e
						}),
						y = await j();
					if (y.ok) {
						if (O) {
							const s = null === (b = null === (u = null == y ? void 0 : y.body) || void 0 === u ? void 0 : u.data) || void 0 === b ? void 0 : b.postInfoById;
							t(Object(l.Q)({
								[e]: Object(h.f)(s)
							}))
						} else {
							const s = null === (v = null === (f = null == y ? void 0 : y.body) || void 0 === f ? void 0 : f.data) || void 0 === v ? void 0 : v.commentById;
							t(Object(c.j)({
								[e]: Object(p.a)(s)
							}))
						}
						t(M(e)), t(T({
							targetID: e
						}))
					}
				}
		},
		"./src/reddit/actions/pages/profileOverview/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "profileOverviewConversationsPending", (function() {
				return ye
			})), s.d(t, "profileOverviewConversationsLoaded", (function() {
				return _e
			})), s.d(t, "profileOverviewConversationsFailed", (function() {
				return ke
			})), s.d(t, "profileOverviewChronoPending", (function() {
				return Pe
			})), s.d(t, "profileOverviewChronoLoaded", (function() {
				return Ie
			})), s.d(t, "profileOverviewChronoFailed", (function() {
				return we
			})), s.d(t, "profileOverviewConversationsRequested", (function() {
				return Se
			})), s.d(t, "profileOverviewRequested", (function() {
				return Ne
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/pick.js"),
				o = s.n(n),
				r = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/actions/moderatingSubreddits.ts"),
				i = s("./src/reddit/actions/pages/profileShared.ts"),
				d = s("./src/reddit/actions/subreddit.ts"),
				c = s("./src/config.ts"),
				l = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				m = s("./src/lib/makeApiRequest/index.ts"),
				u = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				p = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				b = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var h = s("./src/reddit/helpers/post/index.ts"),
				x = s("./src/reddit/constants/postLayout.ts"),
				f = s("./src/reddit/constants/parameters.ts"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				O = s("./src/reddit/selectors/listings.ts"),
				g = s("./src/reddit/selectors/profile.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				C = s("./src/lib/makeActionCreator/index.ts"),
				j = s("./src/reddit/actions/changeUsername.ts"),
				y = s("./src/reddit/actions/contentGate.ts"),
				_ = s("./src/reddit/actions/externalAccount.ts"),
				k = s("./src/reddit/actions/pinnedPost.ts"),
				P = s("./src/reddit/actions/platform.ts"),
				I = s("./src/reddit/actions/profile/index.ts"),
				w = s("./src/reddit/actions/trophyCase.ts"),
				S = s("./src/reddit/constants/errors.ts"),
				N = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				T = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				M = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				R = s("./src/lib/initializeClient/installReducer.ts"),
				L = s("./node_modules/redux/es/redux.js"),
				A = s("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const D = {};
			var F = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case M.c:
					case M.b:
					case A.c:
					case A.b: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case M.a:
					case A.a: {
						const {
							key: s,
							error: n
						} = t.payload;
						return {
							...e,
							[s]: n
						}
					}
					default:
						return e
				}
			};
			const B = {};
			var U = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : B,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case M.c:
						case A.c: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case M.b:
						case M.a:
						case A.b:
						case A.a: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				W = Object(L.c)({
					error: F,
					pending: U
				});
			const V = {};
			var z = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case M.b: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: {}
						}
					}
					case A.b: {
						const {
							key: s,
							fetchedToken: n
						} = t.payload, o = e[s];
						return {
							...e,
							[s]: {
								...o,
								[n]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const G = {};
			var H = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case M.b:
						case A.b: {
							const {
								key: s,
								overviewIds: n
							} = t.payload, o = e[s] || [];
							return {
								...e,
								[s]: [...o, ...n]
							}
						}
						default:
							return e
					}
				},
				K = s("./src/lib/omitKey/index.ts");
			const q = {};
			var Q = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case M.b:
						case A.b: {
							const {
								key: s,
								dist: n,
								token: o
							} = t.payload;
							return o ? {
								...e,
								[s]: {
									dist: n,
									token: o
								}
							} : Object(K.a)(e, s)
						}
						default:
							return e
					}
				},
				J = Object(L.c)({
					api: W,
					fetchedTokens: z,
					ids: H,
					loadMore: Q
				});
			const Z = {};
			var X = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Z,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case M.f:
					case M.e: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case M.d: {
						const {
							key: s,
							error: n
						} = t.payload;
						return {
							...e,
							[s]: n || {}
						}
					}
					default:
						return e
				}
			};
			const Y = {};
			var $ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Y,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case M.f: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case M.e:
						case M.d: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				ee = Object(L.c)({
					error: X,
					pending: $
				}),
				te = s("./src/reddit/actions/profileConversations.ts");
			const se = {};
			var ne = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : se,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case te.c:
					case te.b: {
						const {
							extraCommentsId: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case te.a: {
						const {
							extraCommentsId: s,
							error: n
						} = t.payload;
						return {
							...e,
							[s]: n || {}
						}
					}
					default:
						return e
				}
			};
			const oe = {};
			var re = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oe,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case te.c: {
							const {
								extraCommentsId: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case te.b:
						case te.a: {
							const {
								extraCommentsId: s
							} = t.payload;
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				ae = Object(L.c)({
					error: ne,
					pending: re
				});
			const ie = {};
			var de = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ie,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case M.e:
						case te.b:
						case te.e:
							return {
								...e, ...t.payload.extraComments
							};
						default:
							return e
					}
				},
				ce = Object(L.c)({
					api: ae,
					models: de
				}),
				le = s("./node_modules/lodash/mapValues.js"),
				me = s.n(le),
				ue = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				pe = s("./src/reddit/constants/comments.ts");
			const be = {};

			function he(e) {
				const t = e;
				return me()(t, e => {
					let {
						depth: t,
						next: s,
						prev: n
					} = e;
					return {
						depth: t,
						next: s,
						prev: n
					}
				})
			}
			const xe = (e, t, s) => {
				const n = {};
				for (const o in t) {
					const e = t[o],
						s = e.postId;
					n.hasOwnProperty(s) ? n[s] = {
						...n[s],
						[o]: e
					} : n[s] = {
						[o]: e
					}
				}
				for (const o in s) {
					const e = s[o],
						t = e.postId;
					n.hasOwnProperty(t) ? n[t] = {
						...n[t],
						[o]: e
					} : n[t] = {
						[t]: e
					}
				}
				return n
			};
			var fe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : be,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case M.e:
					case te.e: {
						const {
							comments: s,
							extraComments: n,
							postIds: o,
							profileName: r
						} = t.payload, a = xe(o, s, n), i = {};
						for (const e of o) {
							i[Object(ue.a)(e, r)] = a.hasOwnProperty(e) ? he(a[e]) : {}
						}
						return {
							...e,
							...i
						}
					}
					case te.b: {
						const {
							comments: s,
							commentLists: n,
							extraComments: o,
							extraCommentsId: r,
							postIds: a,
							profileName: i
						} = t.payload;
						if (0 === a.length) {
							const t = Object.keys(e).find(t => void 0 !== e[t][r]);
							if (!t) return e;
							const s = {
									...e[t]
								} [r].prev,
								n = s && s.id || "";
							return {
								...e,
								[t]: {
									...e[t],
									[n]: {
										...e[t][n],
										next: null
									}
								}
							}
						}
						const d = a[0],
							c = he(xe(a, s, o)[d]),
							l = Object(ue.a)(d, i),
							m = {
								...e[l]
							},
							u = m[r].prev,
							p = u && u.id || "",
							b = n[d].head,
							h = b && b.id || "",
							x = {
								id: h,
								type: pe.a.Comment
							},
							f = {
								...m,
								[p]: {
									...m[p],
									next: x
								},
								...c,
								[h]: {
									...c[h],
									prev: u
								}
							};
						return {
							...e,
							[l]: f
						}
					}
					default:
						return e
				}
			};
			const ve = {};
			var Oe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ve,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case M.e:
					case te.e: {
						const {
							commentLists: s,
							postIds: n,
							profileName: o
						} = t.payload, r = {};
						for (const e of n) {
							r[Object(ue.a)(e, o)] = s[e] && s[e].head ? s[e].head.id : null
						}
						return {
							...e,
							...r
						}
					}
					default:
						return e
				}
			};
			const ge = {};
			var Ee = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ge,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case M.e:
						case te.e: {
							const {
								postIds: s,
								profileName: n
							} = t.payload, o = {};
							for (const e of s) {
								o[Object(ue.a)(e, n)] = e
							}
							return {
								...e,
								...o
							}
						}
						default:
							return e
					}
				},
				Ce = Object(L.c)({
					api: ee,
					extraComments: ce,
					keyToCommentThreadLinkSets: fe,
					keyToHeadCommentId: Oe,
					keyToPostId: Ee
				}),
				je = Object(L.c)({
					chrono: J,
					conversations: Ce
				});
			Object(R.a)({
				pages: {
					profileOverview: je
				}
			});
			const ye = Object(C.a)(M.f),
				_e = Object(C.a)(M.e),
				ke = Object(C.a)(M.d),
				Pe = Object(C.a)(M.c),
				Ie = Object(C.a)(M.b),
				we = Object(C.a)(M.a),
				Se = (e, t, s, n) => async (n, o, a) => {
					const i = o(),
						d = !!i.listings.postOrder.ids[e],
						x = !!Object(O.c)(i, {
							listingKey: e
						});
					if (!!Object(O.d)(i, {
							listingKey: e
						}) || d && !x) return;
					n(ye({
						key: e
					}));
					const f = await Object(T.a)("profile", () => ((e, t, s) => Object(m.a)(e, {
							data: s,
							endpoint: Object(u.a)(Object(l.a)(Object(p.a)(Object(b.a)(`${c.a.gatewayUrl}/desktopapi/v1/user/${t}/conversations`)))),
							traceRequestName: "get_profile_conversations",
							method: r.ob.GET
						}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
							...e,
							body: {
								...e.body,
								pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
							}
						} : e))(a.apiContext(), t, s)),
						v = f.body;
					await Object(h.a)(a.gqlContext, v.posts).then(e => v.posts = e);
					const {
						pinned: E,
						postIds: C
					} = v;
					if (f.ok) {
						n(_e({
							key: e,
							meta: i.meta,
							profileName: t,
							...v,
							postIds: C
						}));
						const s = Object(g.o)(o(), t);
						n(Object(k.h)({
							profileId: s,
							pinned: E
						}))
					} else n(ke({
						account: f.body.data ? f.body.data.account : null,
						error: f.body.reason ? {
							type: f.body.reason
						} : f.error,
						key: e
					})), f.body.reason === S.a.DeletedProfile && n(Object(y.v)({
						profileName: t
					})), n(Object(P.o)(f.status))
				}, Ne = e => async (t, s, n) => {
					const {
						queryParams: c,
						params: l
					} = e, {
						sort: m,
						t: u
					} = Object(i.a)(s(), c), {
						profileName: p
					} = l;
					let b = !1;
					const h = x.e[Object(v.U)(s(), {})],
						O = p.toLowerCase(),
						C = {
							...o()(e.queryParams, f.p),
							sort: m,
							layout: h,
							t: u
						},
						y = [t(I.d(O))],
						k = Object(N.a)(O, r.Ab, m, e.queryParams);
					if (t(P.n({
							title: Te(s(), p)
						})), s().listings.postOrder.ids[k] && !s().listings.postOrder.api.error[k] ? b = !0 : y.push(t(Se(k, O, C, !0))), y.push(t(Object(a.b)())), await Promise.all(y), b) return;
					const S = s();
					if (!S.platform.currentPage) return;
					if (200 !== S.platform.currentPage.status) return;
					const T = Object(g.o)(s(), O);
					Object(E.U)(S) && Object(E.Y)(S, p) && t(Object(j.startChangeUsernameFlow)());
					const M = [t(Object(d.q)()), t(w.b(O, T)), t(I.b(O)), t(_.o(p)), t(I.i(p))];
					await Promise.all(M)
				}, Te = (e, t) => Object(g.s)(e, {
					profileName: t
				})
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "removalReasonsPending", (function() {
				return $
			})), s.d(t, "removalReasonsLoaded", (function() {
				return ee
			})), s.d(t, "removalReasonsFailed", (function() {
				return te
			})), s.d(t, "removalReasonsRequested", (function() {
				return se
			})), s.d(t, "removalReasonAddedPending", (function() {
				return ne
			})), s.d(t, "removalReasonAddedSuccess", (function() {
				return oe
			})), s.d(t, "removalReasonAddedFailed", (function() {
				return re
			})), s.d(t, "addRemovalReason", (function() {
				return ae
			})), s.d(t, "editRemovalReasonPending", (function() {
				return ie
			})), s.d(t, "editRemovalReasonSuccess", (function() {
				return de
			})), s.d(t, "editRemovalReasonFailed", (function() {
				return ce
			})), s.d(t, "editRemovalReason", (function() {
				return le
			})), s.d(t, "deleteRemovalReasonPending", (function() {
				return me
			})), s.d(t, "deleteRemovalReasonSuccess", (function() {
				return ue
			})), s.d(t, "deleteRemovalReasonFailed", (function() {
				return pe
			})), s.d(t, "deleteRemovalReason", (function() {
				return be
			})), s.d(t, "removedItemsSelected", (function() {
				return he
			})), s.d(t, "fetchReasonsAndOpenModal", (function() {
				return xe
			})), s.d(t, "removalReasonSubmittedPending", (function() {
				return fe
			})), s.d(t, "removalReasonSubmittedSuccess", (function() {
				return ve
			})), s.d(t, "removalReasonSubmittedFailed", (function() {
				return Oe
			})), s.d(t, "removalReasonMessagePending", (function() {
				return ge
			})), s.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return Ee
			})), s.d(t, "removalReasonPublicMessageSuccess", (function() {
				return Ce
			})), s.d(t, "removalReasonMessageFailed", (function() {
				return je
			})), s.d(t, "submitRemovalReason", (function() {
				return ye
			})), s.d(t, "submitBulkRemovalReason", (function() {
				return _e
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/initializeClient/installReducer.ts"),
				r = s("./node_modules/redux/es/redux.js");
			const a = "REMOVALREASONS__LOAD_SUCCESS",
				i = "REMOVALREASONS__ADD_PENDING",
				d = "REMOVALREASONS__ADD_SUCCESS",
				c = "REMOVALREASONS__ADD_FAILED",
				l = "REMOVALREASONS__EDIT_PENDING",
				m = "REMOVALREASONS__EDIT_SUCCESS",
				u = "REMOVALREASONS__EDIT_FAILED",
				p = "REMOVALREASONS__DELETE_PENDING",
				b = "REMOVALREASONS__DELETE_SUCCESS",
				h = "REMOVALREASONS__DELETE_FAILED";
			var x = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case a:
					case i:
					case d:
					case l:
					case m:
					case p:
					case b:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case c:
					case u:
					case h:
						return t.payload;
					default:
						return e
				}
			};
			var f = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "REMOVALREASONS__LOAD_PENDING":
						case i:
						case l:
						case p:
							return !0;
						case a:
						case "REMOVALREASONS__LOAD_FAILED":
						case d:
						case c:
						case m:
						case u:
						case b:
						case h:
							return !1;
						default:
							return e
					}
				},
				v = Object(r.c)({
					error: x,
					pending: f
				});
			const O = {};
			var g = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a: {
						const {
							response: s
						} = t.payload, {
							data: n
						} = s;
						return {
							...e,
							...n
						}
					}
					case d:
					case m: {
						const {
							reason: s
						} = t.payload;
						return {
							...e,
							[s.id]: s
						}
					}
					case b: {
						const {
							reasonId: s
						} = t.payload, {
							[s]: n,
							...o
						} = e;
						return o
					}
					default:
						return e
				}
			};
			const E = {};
			var C = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a: {
						const {
							subredditId: s,
							response: n
						} = t.payload, {
							order: o
						} = n;
						return {
							...e,
							[s]: o
						}
					}
					case d: {
						const {
							subredditId: s,
							reason: n
						} = t.payload;
						return {
							...e,
							[s]: [...e[s], n.id]
						}
					}
					case b: {
						const {
							subredditId: s,
							reasonId: n
						} = t.payload, o = [...e[s]].filter(e => e !== n);
						return {
							...e,
							[s]: o
						}
					}
					default:
						return e
				}
			};
			var j = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "REMOVALREASONS__REMOVEDITEMS_SELECTED": {
							const {
								subredditId: e,
								itemIds: s
							} = t.payload;
							return {
								itemIds: s,
								subredditId: e
							}
						}
						default:
							return e
					}
				},
				y = Object(r.c)({
					api: v,
					models: g,
					reasonOrder: C,
					removedItemIds: j
				}),
				_ = s("./src/lib/constants/index.ts"),
				k = s("./src/lib/makeActionCreator/index.ts"),
				P = s("./src/lib/makeCommentsPageKey/index.ts"),
				I = s("./src/lib/makeDraftKey/index.ts"),
				w = s("./src/reddit/actions/bulkActions/index.ts"),
				S = s("./src/reddit/actions/comment/index.ts"),
				N = s("./src/reddit/actions/comment/authoring.ts"),
				T = s("./src/reddit/actions/comment/moderation.ts"),
				M = s("./src/reddit/actions/modal.ts"),
				R = s("./src/reddit/actions/post.ts"),
				L = s("./src/reddit/actions/toaster.ts"),
				A = s("./src/reddit/constants/modals.ts"),
				D = s("./src/lib/makeApiRequest/index.ts"),
				F = s("./src/lib/omitHeaders/index.ts"),
				B = s("./src/reddit/constants/headers.ts"),
				U = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				W = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const V = (e, t) => Object(D.a)(Object(F.a)(e, [B.a]), {
					endpoint: Object(U.a)(`${e.apiUrl}/api/v1/modactions/removal_reasons/`),
					method: _.ob.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				z = (e, t, s) => Object(D.a)(Object(F.a)(e, [B.a]), {
					endpoint: Object(U.a)(Object(W.a)(`${e.apiUrl}/api/v1/modactions/removal_${s}_message/`)),
					method: _.ob.POST,
					type: "json",
					data: t
				});
			var G = s("./src/reddit/helpers/isPost.ts"),
				H = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				K = s("./src/reddit/helpers/routeKey/index.ts"),
				q = s("./src/reddit/models/ModQueue/index.ts"),
				Q = s("./src/reddit/models/PostDraft/index.ts"),
				J = s("./src/reddit/models/RemovalReason/index.ts"),
				Z = s("./src/reddit/models/Toast/index.ts"),
				X = s("./src/reddit/selectors/comments.ts"),
				Y = s("./src/reddit/selectors/platform.ts");
			Object(o.a)({
				features: {
					removalReasons: y
				}
			});
			const $ = Object(k.a)("REMOVALREASONS__LOAD_PENDING"),
				ee = Object(k.a)(a),
				te = Object(k.a)("REMOVALREASONS__LOAD_FAILED"),
				se = e => async (t, s, n) => {
					let {
						apiContext: o
					} = n;
					const r = s().subreddits.models[e].name;
					t($());
					const a = await ((e, t) => Object(D.a)(Object(F.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: _.ob.GET
					}))(o(), r);
					a.ok ? t(ee({
						subredditId: e,
						response: a.body
					})) : t(te(a.error))
				}, ne = Object(k.a)(i), oe = Object(k.a)(d), re = Object(k.a)(c), ae = (e, t) => async (s, o, r) => {
					let {
						apiContext: a
					} = r;
					const i = o().subreddits.models[e].name;
					s(ne());
					const d = await ((e, t, s) => Object(D.a)(Object(F.a)(e, [B.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons`),
						method: _.ob.POST,
						data: s
					}))(a(), i, t);
					if (d.ok) {
						const {
							id: o
						} = d.body, r = {
							...t,
							id: o
						};
						s(oe({
							subredditId: e,
							reason: r
						})), s(Object(L.f)({
							kind: Z.b.SuccessMod,
							text: n.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else s(re(d.error))
				}, ie = Object(k.a)(l), de = Object(k.a)(m), ce = Object(k.a)(u), le = (e, t) => async (s, o, r) => {
					let {
						apiContext: a
					} = r;
					const i = o().subreddits.models[e].name;
					s(ie());
					const d = await ((e, t, s) => Object(D.a)(Object(F.a)(e, [B.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${s.id}`),
						method: _.ob.PUT,
						data: {
							message: s.message,
							title: s.title
						}
					}))(a(), i, t);
					d.ok ? (s(de({
						subredditId: e,
						reason: t
					})), s(Object(L.f)({
						kind: Z.b.SuccessMod,
						text: n.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : s(ce(d.error))
				}, me = Object(k.a)(p), ue = Object(k.a)(b), pe = Object(k.a)(h), be = (e, t) => async (s, o, r) => {
					let {
						apiContext: a
					} = r;
					const i = o().subreddits.models[e].name;
					s(me());
					const d = await ((e, t, s) => Object(D.a)(Object(F.a)(e, [B.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${s}`),
						method: _.ob.DELETE
					}))(a(), i, t);
					d.ok ? (s(ue({
						subredditId: e,
						reasonId: t
					})), s(Object(L.f)({
						kind: Z.b.SuccessMod,
						text: n.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : s(pe(d.error))
				}, he = Object(k.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), xe = (e, t) => async (s, n, o) => {
					let {
						apiContext: r
					} = o;
					const a = n();
					a.features.removalReasons.reasonOrder[e] && a.features.removalReasons.reasonOrder[e].length > 0 || s(se(e)), s(he({
						subredditId: e,
						itemIds: t
					})), s(Object(M.i)(A.a.ADD_REMOVAL_REASON))
				}, fe = Object(k.a)("REMOVALREASONS__SUBMIT_PENDING"), ve = Object(k.a)("REMOVALREASONS__SUBMIT_SUCCESS"), Oe = Object(k.a)("REMOVALREASONS__SUBMIT_FAILED"), ge = Object(k.a)("REMOVALREASONS__MESSAGE_PENDING"), Ee = Object(k.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), Ce = Object(k.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), je = Object(k.a)("REMOVALREASONS__MESSAGE_FAILED"), ye = (e, t, s, n, o, r) => async (a, i, d) => {
					let {
						apiContext: c
					} = d;
					const l = i(),
						m = l.user.account && l.user.account.displayText,
						u = e[0],
						p = Object(G.a)(u) ? J.e.Post : J.e.Comment,
						b = p === J.e.Post ? l.posts.models[u] : l.features.comments.models[u],
						h = p === J.e.Post ? R.Q : S.j;
					if (!b || !m) return !1;
					a(fe()), a(h({
						[u]: {
							modNote: o,
							modRemovalReason: t && t.title,
							modReasonBy: m
						}
					}));
					const x = {
							itemIds: e,
							modNote: o,
							reasonId: t ? t.id : null
						},
						f = await V(c(), x);
					if (f.ok) {
						if (a(ve()), t) {
							a(ge());
							const o = {
									itemId: e,
									message: s,
									title: t.title,
									isLocked: r,
									type: n
								},
								i = await z(c(), Object(J.h)(o, p), p);
							if (i.ok) {
								if ([J.f.Public, J.f.PublicAsSubreddit].includes(n)) {
									if (a(Ce()), i.body) {
										const e = Object(H.a)(i.body),
											t = {
												comment: e,
												parentId: u
											},
											s = Object(Y.f)(l),
											n = l.platform.currentPage && l.platform.currentPage.routeMatch;
										let o = s && n && Object(K.a)(n, l, l.posts.models[e.postId]);
										if (o || (o = Object(P.a)(e.postId, null, {
												sort: _.w,
												hasSortParam: !0
											})), p === J.e.Post) {
											const s = Object(I.a)(Q.c.replyToPost, u);
											a(Object(N.r)({
												...t,
												headCommentId: Object(X.w)(l, {
													commentsPageKey: o
												}),
												commentsPageKey: o,
												draftKey: s
											}));
											const n = l.postStickiedComments.data[u];
											a(Object(T.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: o
											})), n && n !== e.id && a(Object(S.j)({
												[n]: {
													isStickied: !1
												}
											}))
										} else if (p === J.e.Comment) {
											const e = Object(I.a)(Q.c.replyToComment, b.id),
												s = Object(X.j)(l, {
													commentId: u,
													commentsPageKey: o
												});
											a(Object(N.p)({
												...t,
												parentCommentId: u,
												commentsPageKey: o,
												draftKey: e,
												depth: s + 1
											}))
										}
									}
								} else a(Ee());
								return !0
							}
							return a(je(i.error)), !1
						}
					} else a(Oe(f.error)), a(h({
						[u]: {
							modNote: b.modNote,
							modRemovalReason: b.modRemovalReason,
							modReasonBy: b.modReasonBy
						}
					}));
					return !1
				}, _e = (e, t, s, o, r) => async (a, i, d) => {
					let {
						apiContext: c
					} = d;
					const l = i(),
						m = l.user.account && l.user.account.displayText;
					if (!m) return;
					a(fe());
					const u = Object(L.f)({
							kind: Z.b.SuccessMod,
							text: n.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [n.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						p = {
							itemIds: e,
							modNote: r,
							reasonId: t ? t.id : null
						},
						b = await V(c(), p);
					if (b.ok) {
						const n = {
							ids: e,
							operation: q.a.RemovalReason,
							username: m,
							options: {
								modNote: r,
								removalReason: t && t.title
							}
						};
						if (a(Object(w.b)(n)), t) {
							const n = {
									itemId: e,
									message: s,
									title: t.title,
									type: o
								},
								r = await z(c(), Object(J.h)(n, J.e.Bulk), J.e.Bulk);
							r.ok ? (a(Ee()), a(u)) : a(je(r.error))
						} else a(u)
					} else a(Oe(b.error))
				}
		},
		"./src/reddit/components/AdSupplementaryText/index.m.less": function(e, t, s) {
			e.exports = {
				AdSupplementaryText: "_3aY2soNZuUlNJQkpdmox9M",
				adSupplementaryText: "_3aY2soNZuUlNJQkpdmox9M",
				Content: "dND6Q1_345dpzB_NMYBC8",
				content: "dND6Q1_345dpzB_NMYBC8",
				ExtraLarge: "uh_X09jq4S7lMKSY8ZDii",
				extraLarge: "uh_X09jq4S7lMKSY8ZDii",
				Large: "_1l7lMJqbov2T29ncxpJBlP",
				large: "_1l7lMJqbov2T29ncxpJBlP"
			}
		},
		"./src/reddit/components/AdSupplementaryText/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/models/Post/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/components/RichTextJson/index.tsx"),
				l = s("./src/reddit/constants/adEvents.ts"),
				m = s("./src/reddit/selectors/experiments/supportingLinkAds.ts"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				p = s("./src/reddit/components/AdSupplementaryText/index.m.less"),
				b = s.n(p);
			const h = e => {
				let t;
				switch (e) {
					case u.b.ExtraLarge:
						t = b.a.ExtraLarge;
						break;
					case u.b.Large:
						t = b.a.Large
				}
				return t
			};
			t.a = e => {
				let {
					post: t,
					size: s,
					className: n
				} = e;
				const u = Object(r.d)();
				if (!Object(r.e)(m.a) || !Object(i.B)(t) || !t.adSupplementaryText || "string" == typeof t.adSupplementaryText) return null;
				if (0 === t.adSupplementaryText.document.length) return null;
				return o.a.createElement("div", {
					className: Object(a.a)(n, b.a.AdSupplementaryText),
					"data-testid": `${t.id}-ad-supplementary-text`,
					onClick: e => {
						e.target instanceof HTMLAnchorElement && u(Object(d.y)(t, l.a.Click))
					}
				}, o.a.createElement(c.b, {
					className: Object(a.a)(b.a.Content, h(s)),
					content: t.adSupplementaryText,
					rtJsonElementProps: {
						renderingObjectInfo: void 0
					}
				}))
			}
		},
		"./src/reddit/components/CCM/ModPreviousActions/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2-D4Vessy5Hd1e5HAU1PK3",
				wrapperTitle: "aC6WYpmVvQIF_BZRtMI_W",
				row: "ax8JnexGOa4WYNYKwXlQs",
				icon: "_1fiz4BfaOlncADi00qAx_l",
				userIconWrapper: "_1ChqLpIvObEfBbb4d-hyah",
				userIcon: "_3nEX0mG3UGhbY0hR0Kqaag",
				details: "_3jKisheiLDnZzH5J_qln3x",
				title: "_1-LXaYXcvGUA9hhrrw587d",
				meta: "_3w_F6oDd1-ZDKgp3jo94ew",
				time: "_2820zMw8REXxmaotvSTjqt",
				userlink: "_2622vu9WjymZhKkDq78CfF"
			}
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/ads/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/getShortenedLink.ts"),
				c = s("./src/lib/hooks/usePrevious.ts"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				m = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				u = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				p = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				b = s("./src/reddit/components/CreatorStats/loader.tsx"),
				h = s("./src/reddit/components/Econ/Audio/index.m.less"),
				x = s.n(h),
				f = s("./src/reddit/components/Econ/Audio/MuteIcon.tsx");
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var O = () => o.a.createElement("div", {
					className: x.a.endedClassicContainer
				}, o.a.createElement(f.a, {
					className: x.a.muteIcon
				})),
				g = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				E = s("./src/reddit/components/ExpandoButton/index.tsx"),
				C = s("./src/reddit/components/Flatlist/index.tsx"),
				j = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				y = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				_ = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				k = s("./src/reddit/components/ModModeReports/index.tsx"),
				P = s("./src/reddit/components/ModModeReports/helpers.ts"),
				I = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				w = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				S = s("./src/reddit/components/PostContainer/index.tsx"),
				N = s("./src/reddit/components/PostMeta/index.tsx"),
				T = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				M = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				R = s("./src/reddit/components/PostTitle/index.tsx"),
				L = s("./src/reddit/components/PostTopMeta/index.tsx"),
				A = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				D = s("./src/reddit/models/Audio/index.ts"),
				F = s("./src/reddit/models/Media/index.ts"),
				B = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				U = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				W = s("./src/reddit/constants/postLayout.ts"),
				V = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				z = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				G = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				H = s("./src/reddit/helpers/search/renderMedia.tsx"),
				K = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				q = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				Q = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				J = s.n(Q),
				Z = s("./src/reddit/models/Post/index.ts"),
				X = s("./src/redditGQL/types.ts"),
				Y = s("./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx"),
				$ = s("./src/reddit/components/ClassicPost/index.m.less"),
				ee = s.n($);

			function te() {
				return (te = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const se = Object(i.a)(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: i,
					handleVote: h,
					isExpanded: x,
					inSubredditOrProfile: f,
					eventFactory: v,
					flairStyleTemplate: U,
					formatTitle: Q,
					hostPostData: $,
					isCheckboxSelected: se,
					isCurrentUserProfilePost: ne,
					isFrontpage: oe,
					isGalleryTileLayoutDefault: re,
					isLoggedIn: ae,
					isOverlay: ie,
					imageGalleryCurrentItem: de,
					moderatorPermissions: ce,
					modModeEnabled: le,
					onClickPost: me,
					onIgnoreReports: ue,
					onOpenReportsDropdown: pe,
					onSizeChanged: be,
					poll: he,
					post: xe,
					postId: fe,
					redditStyle: ve,
					scrollerItemRef: Oe,
					showBulkActionCheckbox: ge,
					showEditFlair: Ee,
					showMedia: Ce,
					shouldShowInsightsButton: je,
					subredditOrProfile: ye,
					toggleCheckbox: _e,
					userIsOp: ke,
					shouldShowGalleryTileOption: Pe,
					showCTAExperimentDesign: Ie
				} = e, we = Object(l.a)(), Se = Object(c.a)(x);
				Object(n.useEffect)(() => {
					be && Se !== x && be(xe.id)
				}, [x, be, xe.id, Se]);
				const Ne = ve ? void 0 : U,
					Te = s || void 0,
					Me = Object(G.a)(ce),
					Re = Object(V.a)(ce),
					Le = Object(z.a)(ce),
					Ae = le && G.a,
					De = Object(_.a)(xe),
					Fe = Object(P.c)(xe),
					Be = !!xe.media && xe.media.type === F.o.RTJSON,
					Ue = ke && Be,
					We = f && !Ce,
					Ve = !!xe.recommendationContext,
					ze = {
						flairStyleTemplate: Ne,
						post: xe,
						inSubredditOrProfile: f,
						isCurrentUserProfilePost: ne,
						isOverlay: ie,
						shouldShowSubscribeButton: !(oe && ae) || Ve && ae,
						subredditOrProfile: ye
					},
					Ge = Object(r.t)(xe, de),
					[He, Ke] = Object(n.useState)(!1),
					qe = Object(n.useCallback)(() => {
						Ke(!He), we(Object(q.d)(fe))
					}, [He, fe, we]);
				let Qe = o.a.createElement(B.a, {
					className: ee.a.classicThumbnail,
					crosspost: Te && xe,
					isMeta: xe.isMeta,
					post: Te || xe,
					redditStyle: ve,
					templatePlaceholderImage: Ne && Ne.postPlaceholderImage
				});
				Object(D.b)(xe) && (Qe = o.a.createElement(O, null));
				const Je = Object(Z.r)(xe);
				return o.a.createElement(S.b, {
					className: Object(a.a)(J.a.classicPostStyles, ee.a.postContainer, Object(K.a)(e), {
						[ee.a.shouldShowOverflow]: je
					}, t),
					isOverlay: ie,
					style: {
						...Object(K.d)(e),
						...Object(K.b)(Ne)
					},
					post: xe,
					onClick: me,
					eventFactory: v
				}, o.a.createElement(M.a, {
					model: xe,
					handleVote: h,
					showBulkActionCheckbox: ge,
					isCheckboxSelected: se,
					toggleCheckbox: _e,
					flairStyleTemplate: Ne,
					redditStyle: ve,
					postId: fe
				}), o.a.createElement(w.a, {
					className: je ? ee.a.shouldUseRoundedBorder : void 0,
					"data-click-id": "background",
					flairStyleTemplate: Ne
				}, o.a.createElement(g.a, {
					className: ee.a.eventMeta,
					post: xe
				}), o.a.createElement("div", {
					className: ee.a.mainBody
				}, o.a.createElement("div", {
					className: We ? ee.a.expandoContainer : ee.a.thumbnailContainer
				}, !We && Qe, o.a.createElement(E.a, {
					crosspost: Te,
					className: ee.a.rightExpando,
					isExpanded: !!x,
					post: xe,
					useMediaIcons: !1
				})), o.a.createElement("div", {
					className: Object(a.a)(ee.a.content, {
						[ee.a.showBulkActionCheckbox]: ge
					}),
					"data-click-id": "body"
				}, Je && o.a.createElement(I.a, {
					content: xe.recommendationContext.content,
					layout: W.g.Classic,
					post: xe
				}), o.a.createElement(R.c, {
					className: he ? ee.a.titleWithPoll : void 0,
					format: Q,
					poll: he,
					post: xe,
					redditStyle: ve,
					size: R.b.Medium,
					titleColor: Ne && Ne.postTitleColor,
					isOverlay: ie
				}, xe.source && !Te && !xe.isSurveyAd && o.a.createElement(A.a, {
					href: xe.source.url,
					isSponsored: xe.isSponsored,
					postId: xe.id,
					source: xe.source
				}, Object(d.a)(xe))), o.a.createElement(N.a, te({
					key: "PostMeta"
				}, ze)), le && Me && De && o.a.createElement(y.a, {
					thing: xe
				}), le && Me && Fe && o.a.createElement(k.a, {
					onIgnoreReports: ue,
					reportable: xe
				}), Object(r.v)(xe, de) && o.a.createElement(m.a, {
					ctaExperimentDesign: Ie && "classic",
					className: Object(a.a)(ee.a.adLinkWrapper, {
						[ee.a.ctaExperiment]: Ie
					})
				}, o.a.createElement(u.a, {
					post: xe,
					adLinkContent: Ge,
					ctaExperimentDesign: Ie && "classic"
				})), xe.discussionType === X.n.Chat && o.a.createElement(Y.a, {
					postId: xe.id
				}), o.a.createElement("div", {
					className: ee.a.flatlistContainer
				}, o.a.createElement(E.a, {
					className: ee.a.leftExpando,
					crosspost: Te,
					isExpanded: !!x,
					post: xe,
					useMediaIcons: !1
				}), o.a.createElement(p.a, {
					className: ee.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: Ne,
					model: xe,
					onVoteClick: h
				}), o.a.createElement(C.a, {
					className: ee.a.flatlistSeparator
				}), !xe.isSurveyAd && o.a.createElement(C.c, {
					className: ee.a.flatlist,
					currentUser: i,
					hasModFlairPerms: Re,
					hasModPostPerms: Me,
					hasModFullPerms: Le,
					hostPostData: $,
					isOverlay: !!ie,
					modModeEnabled: le,
					onClickInsightsButton: qe,
					onIgnoreReports: ue,
					onOpenReportsDropdown: pe,
					post: xe,
					shouldShowInsightsButton: je,
					showEditPost: Ue,
					showEditFlair: Ee,
					tooltipType: ie ? L.f.Lightbox : void 0,
					useFlatlistBreakpoints: Object(T.b)({
						editPost: !Ae,
						hide: !Ae,
						report: !Ae,
						mute: !Ae,
						save: !Ae
					})
				})), o.a.createElement(j.d, null))), Object(H.a)(xe, ee.a, Oe, x, Pe, re), ye && He && o.a.createElement(b.a, {
					className: ee.a.creatorStatsContainer,
					post: xe,
					subreddit: ye,
					isOwnProfileStats: !0
				})))
			});
			t.default = Object(U.a)(se)
		},
		"./src/reddit/components/CommentBodyExpander/index.m.less": function(e, t, s) {
			e.exports = {
				collapsedCommentWrapper: "_3eqiPvSIRa-NZBdZNmskLn",
				collapsedCommentLine: "_3w5mzp5LqE702onvC_Wok3",
				rtjCollapsed: "_1J7xT7G-fgDlzIqRgaBrrB",
				seeMore: "_3NPaMDmW2g_XhEdxfn6inI"
			}
		},
		"./src/reddit/components/CommentContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/higherOrderComponents/withClickTracking/index.tsx");
			const c = Object(a.c)({
					clickTrackingId: (e, t) => {
						let {
							comment: s
						} = t;
						return s.id
					}
				}),
				l = Object(r.b)(c);
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						children: t,
						className: s,
						comment: n,
						onClick: r,
						style: a
					} = this.props;
					return o.a.createElement("div", {
						className: Object(i.a)(s, `Comment ${n.id}`),
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: t => {
							!this.cancelClick && t.button < 2 && e(() => r && r(t, n))(t)
						},
						style: a
					}, t)
				}
			}
			t.a = l(Object(d.a)(m))
		},
		"./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				DropdownRow: "_2LNy1r5iuFMrf0PLh4UdV-",
				dropdownRow: "_2LNy1r5iuFMrf0PLh4UdV-",
				DeleteIcon: "_1iKLz-XMCxtewhk3nusoiP",
				deleteIcon: "_1iKLz-XMCxtewhk3nusoiP",
				PencilIcon: "_1bLoeor2W-QStNmx_KRhZL",
				pencilIcon: "_1bLoeor2W-QStNmx_KRhZL",
				ReportIcon: "_2cI15gf51WKaEHlpw-HjhG",
				reportIcon: "_2cI15gf51WKaEHlpw-HjhG",
				SavedIcon: "_4rjQO_f0JDhjAgz1a8hLR",
				savedIcon: "_4rjQO_f0JDhjAgz1a8hLR",
				SaveIcon: "XOeF-g_i5E2Oaxwt9wDdS",
				saveIcon: "XOeF-g_i5E2Oaxwt9wDdS",
				OverflowMenu: "_11rZyhzMB3OOh_i10q1kGT",
				overflowMenu: "_11rZyhzMB3OOh_i10q1kGT",
				ModToolsFlatlist: "_3y5_xjgWBNlHiMIlznzmOH",
				modToolsFlatlist: "_3y5_xjgWBNlHiMIlznzmOH",
				ModActionsMenu: "_2Ff8ezLTpKg92h7e8lIWkW",
				modActionsMenu: "_2Ff8ezLTpKg92h7e8lIWkW",
				Flatlist: "_1PB2jayxHhG493U6RP5qLr",
				flatlist: "_1PB2jayxHhG493U6RP5qLr",
				Button: "VFryWeVNuBPgqyjc5h68S",
				button: "VFryWeVNuBPgqyjc5h68S"
			}
		},
		"./src/reddit/components/Comments/ProfileComment/index.m.less": function(e, t, s) {
			e.exports = {
				TopMeta: "Ov9DvczDidxNqJMR_axF2",
				topMeta: "Ov9DvczDidxNqJMR_axF2",
				CommentBody: "_a5_x7qimk18YbGSwE8Fy",
				commentBody: "_a5_x7qimk18YbGSwE8Fy",
				ProfileCommentWrapper: "_2QR1H6z3qpmyHNdkMUnzVu",
				profileCommentWrapper: "_2QR1H6z3qpmyHNdkMUnzVu",
				isRemoved: "_7kIPhlgZcmDxoV_xaWnX9"
			}
		},
		"./src/reddit/components/Comments/ProfileComment/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/objectSelector/index.ts"),
				l = s("./node_modules/lodash/throttle.js"),
				m = s.n(l),
				u = s("./src/lib/fastdom/index.ts"),
				p = s("./src/reddit/components/CommentBodyExpander/index.m.less"),
				b = s.n(p);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = .75, f = 10 * d.M;
			class v extends o.a.Component {
				constructor(e) {
					super(e), this.commentElement = null, this.handleResize = m()(() => {
						if (this.state.expandToggled) return null;
						u.a.read(() => {
							(this.commentElement ? this.commentElement.offsetHeight : 0) <= this.props.height * (x + 1) && u.a.write(() => {
								this.setState({
									expandToggled: !0
								})
							})
						})
					}, f), this.onShowMore = e => {
						e.preventDefault(), this.setState({
							expandToggled: !0
						})
					}, this.state = {
						expandToggled: e.isExpanded
					}
				}
				render() {
					const {
						children: e,
						height: t
					} = this.props, {
						expandToggled: s
					} = this.state;
					return s ? o.a.createElement("div", null, e()) : o.a.createElement("div", {
						className: b.a.collapsedCommentWrapper
					}, o.a.createElement("div", {
						className: b.a.collapsedCommentLine,
						style: {
							height: t
						}
					}, o.a.createElement("div", {
						ref: e => this.commentElement = e
					}, e(b.a.rtjCollapsed))), o.a.createElement("a", {
						className: b.a.seeMore,
						onClick: this.onShowMore
					}, h._("see more", null, {
						hk: "1Cx4qU"
					})))
				}
				componentDidUpdate() {
					const {
						expandToggled: e
					} = this.state;
					e && window && window.removeEventListener("resize", this.handleResize)
				}
				componentDidMount() {
					var e, t;
					if (this.state.expandToggled) return null;
					!(null === (t = null === (e = this.commentElement) || void 0 === e ? void 0 : e.textContent) || void 0 === t ? void 0 : t.trim().includes("\n")) && (window.addEventListener("resize", this.handleResize), this.handleResize())
				}
				componentWillUnmount() {
					window && window.removeEventListener("resize", this.handleResize)
				}
			}
			var O = v,
				g = s("./node_modules/fbt/lib/FbtPublic.js"),
				E = s("./node_modules/lodash/noop.js"),
				C = s.n(E),
				j = s("./src/lib/makeCommentsPageKey/index.ts"),
				y = s("./src/lib/makeDraftKey/index.ts"),
				_ = s("./src/reddit/actions/comment/index.ts"),
				k = s("./src/reddit/actions/comment/authoring.ts"),
				P = s("./src/reddit/actions/comment/moderation.ts"),
				I = s("./src/reddit/actions/gold/modals.ts"),
				w = s("./src/reddit/actions/modal.ts"),
				S = s("./src/reddit/actions/reportFlow/index.ts"),
				N = s("./src/reddit/actions/toaster.ts"),
				T = s("./src/reddit/actions/tooltip.ts"),
				M = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				R = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				L = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				A = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				D = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				F = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				B = s("./src/reddit/components/ModModeReports/helpers.ts"),
				U = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				W = s("./src/reddit/contexts/InsideOverlay.tsx"),
				V = s("./src/reddit/contexts/PageLayer/index.tsx"),
				z = s("./src/reddit/helpers/correlationIdTracker.ts"),
				G = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				H = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				K = s("./src/reddit/helpers/overlay/index.ts"),
				q = s("./src/reddit/helpers/trackers/lightbox.ts"),
				Q = s("./src/reddit/models/PostDraft/index.ts"),
				J = s("./src/reddit/models/Comment/index.ts"),
				Z = s("./src/reddit/selectors/activeModalId.ts"),
				X = s("./src/reddit/selectors/comments.ts"),
				Y = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				$ = s("./src/reddit/selectors/moderatorPermissions.ts"),
				ee = s("./src/reddit/selectors/posts.ts"),
				te = s("./src/reddit/selectors/tooltip.ts"),
				se = s("./src/reddit/selectors/user.ts"),
				ne = s("./src/reddit/components/OverflowMenu/index.tsx"),
				oe = s("./src/reddit/components/ReportFlow/index.tsx"),
				re = s("./src/reddit/components/ReportFlow/new.tsx"),
				ae = s("./src/reddit/components/ShareMenu/index.tsx"),
				ie = s("./src/reddit/components/TrackingHelper/index.tsx"),
				de = s("./src/reddit/controls/Dropdown/Row.tsx"),
				ce = s("./src/reddit/helpers/trackers/modTools.ts"),
				le = s("./src/reddit/layout/row/Inline/index.tsx"),
				me = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				ue = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				pe = s("./src/reddit/icons/fonts/Report/index.tsx"),
				be = s("./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less"),
				he = s.n(be),
				xe = s("./src/lib/collectible-expressions/index.ts"),
				fe = s("./src/lib/constants/icons.ts"),
				ve = s("./src/lib/lessComponent.tsx"),
				Oe = s("./src/reddit/icons/fonts/index.tsx"),
				ge = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				Ee = s("./src/reddit/models/Toast/index.ts");
			const Ce = ve.a.wrapped(ne.b, "OverflowMenu", he.a),
				je = ve.a.wrapped(R.a, "ModToolsFlatlist", he.a),
				ye = ve.a.wrapped(F.a, "ModActionsMenu", he.a),
				_e = ve.a.wrapped(de.b, "DropdownRow", he.a),
				ke = ve.a.wrapped(le.a, "Flatlist", he.a),
				Pe = ve.a.button("Button", he.a),
				Ie = Object(V.v)(),
				we = e => `Comment-${e}--Modal--DeleteComment`,
				Se = e => `Distinguish--Dropdown--${e}`,
				Ne = (e, t) => `${e}--${t}-overflow-menu`,
				Te = e => `View--Reports--${e}`,
				Me = Object(a.c)({
					activeTooltipId: te.a,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Z.a)(e) === we(s.id)
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(X.E)(e, {
							commentId: s.postId
						})
					},
					isLoggedIn: se.S,
					moderatorPermissions: (e, t) => {
						let {
							comment: s
						} = t;
						return Object($.n)(e, {
							subredditId: s.subredditId
						})
					},
					currentUser: se.m,
					modModeEnabled: V.W,
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(ee.A)(e, {
							postId: s.postId
						})
					},
					commentPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(X.m)(e, {
							commentId: s.id
						})
					},
					reportFlowIsOpen: (e, t) => {
						let {
							comment: s
						} = t;
						var n, o;
						return (null === (o = null === (n = e.features) || void 0 === n ? void 0 : n.reportFlow) || void 0 === o ? void 0 : o.postOrCommentId) === s.id
					},
					subreddit: V.s,
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(ee.U)(e, {
							postId: s.postId
						})
					},
					reportingRevampEnabled: Y.a
				});
			class Re extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(ce.c)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleEdit = () => {
						const e = Object(G.a)(this.props.comment);
						Object(xe.a)(e) ? this.props.showToast({
							text: g.fbt._("Sorry, currently you cannot edit Collectible Expression comments on Web.", null, {
								hk: "4dlNfM"
							}),
							duration: 8e3,
							kind: Ee.b.SuccessLockComment
						}) : this.props.handleEdit(this.props.commentPermalink)
					}, this.handleIgnoreReports = () => {
						this.props.onIgnoreReports(), this.sendCommentReportEvent(this.props.comment.ignoreReports ? "restore_reports" : "ignore_reports")
					}, this.handleGild = async () => {
						const e = Object(z.d)(z.a.GildingFlow, !0);
						this.props.onGildClick(e);
						const {
							clickGildEvent: t
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(t(this.props.comment.id))
					}, this.handleModActionsMenu = () => this.props.sendEvent(Object(ce.c)("comment_mod_action_menu", this.props.comment.id)), this.handleOverflowMenuClick = () => this.props.sendEvent(Object(ce.c)("comment_overflow_menu", this.props.comment.id)), this.handleDelete = () => this.props.handleDelete(), this.handleReply = () => this.props.handleReply(this.props.commentPermalink), this.handleRestrictedButtonClick = () => {
						this.props.onToggleReportsDropdown(), this.sendCommentModEventWithName("comment_report_menu")
					}, this.handleSave = () => {
						this.props.comment.isSaved ? this.props.sendEvent(Object(ce.c)("unsave", this.props.comment.id)) : this.props.sendEvent(Object(ce.c)("save", this.props.comment.id)), this.props.onToggleSave()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(ce.d)(e, this.props.comment.id)), this.sendCommentEventWithName = e => this.props.sendEvent(Object(q.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentEventWithNameShare = () => this.sendCommentEventWithName("share"), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(ce.c)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(ce.g)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? o.a.createElement(re.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: oe.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : o.a.createElement(oe.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: oe.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					})
				}
				renderModTools() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: n,
						showModTools: r
					} = this.props, a = Object(H.a)(s), i = !!t && t.displayText === e.author;
					if (r && a) return n ? o.a.createElement(je, {
						comment: e,
						isCommentAuthor: i
					}) : o.a.createElement(ye, {
						dropdownId: `${e.id}-profile-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: this.handleModActionsMenu
					}, o.a.createElement(ue.a, null), o.a.createElement(M.a, {
						comment: e,
						tooltipId: `${e.id}-profile-mod-actions-menu`
					}))
				}
				renderReportsDropdown() {
					const {
						comment: e,
						modModeEnabled: t,
						showModTools: s
					} = this.props, n = Object(B.a)(e);
					if (s && Object(B.c)(e) && !t) return o.a.createElement(L.a, {
						text: `${n}`,
						onClick: this.handleRestrictedButtonClick,
						selected: this.props.activeTooltipId === Te(e.id),
						id: Te(e.id)
					}, o.a.createElement(U.a, {
						model: e,
						onIgnoreReports: this.handleIgnoreReports,
						tooltipId: Te(e.id)
					}), e.ignoreReports ? o.a.createElement(me.a, null) : o.a.createElement(pe.a, null))
				}
				renderDistinguishDropdown() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: n,
						onDistinguishComment: r,
						showModTools: a
					} = this.props, i = Object(H.a)(s), d = !!t && t.displayText === e.author, c = !!t && t.isEmployee;
					if (a && d && !e.bannedBy && (c || i && !n)) return o.a.createElement(L.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.activeTooltipId === Se(e.id)
					}, o.a.createElement(ge.a, null), o.a.createElement(D.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.activeTooltipId === Se(e.id),
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: c,
						isUserMod: i,
						onDistinguishComment: r,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Se(e.id)
					}))
				}
				render() {
					const {
						comment: e,
						commentPermalink: t,
						className: s,
						commentsPageKey: n,
						currentUser: r,
						deleteComment: a,
						isLoggedIn: i,
						isPendingDeletion: d,
						moderatorPermissions: c,
						postIsLocked: l,
						subreddit: m,
						toggleDeleteCommentModal: u
					} = this.props, p = Object(H.a)(c), b = !!r && r.displayText === e.author, h = (!l && !e.isLocked || p && i) && !Object(J.g)(e), x = r && e.isGildable && !Object(J.g)(e);
					return o.a.createElement("div", {
						className: s
					}, o.a.createElement(ke, null, h && o.a.createElement(Pe, {
						onClick: this.handleReply,
						disabled: d
					}, g.fbt._("Reply", null, {
						hk: "1xBqIs"
					})), x && o.a.createElement(Pe, {
						onClick: this.handleGild
					}, g.fbt._("Give Award", null, {
						hk: "pQJYk"
					})), o.a.createElement(ae.a, {
						dropdownId: `${n}--${e.id}-comment-share-menu`,
						permalink: t,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == m ? void 0 : m.type
					}, o.a.createElement(Pe, {
						onClick: this.sendCommentEventWithNameShare
					}, g.fbt._("share", null, {
						hk: "3YIXpa"
					}))), this.renderReportsDropdown(), o.a.createElement(Ce, {
						dropdownId: Ne(n, e.id),
						onClick: this.handleOverflowMenuClick
					}, !b && !d && o.a.createElement(_e, {
						displayText: g.fbt._("report", null, {
							hk: "ad7CE"
						}),
						onClick: this.props.onReportClick
					}, o.a.createElement(Oe.a, {
						name: fe.a.report
					})), o.a.createElement(_e, {
						displayText: e.isSaved ? g.fbt._("Unsave", null, {
							hk: "4kQcAP"
						}) : g.fbt._("Save", null, {
							hk: "4yMsMq"
						}),
						isSelected: e.isSaved,
						onClick: this.handleSave
					}, e.isSaved ? o.a.createElement(Oe.a, {
						name: fe.a.saved
					}) : o.a.createElement(Oe.a, {
						name: fe.a.save
					})), b && o.a.createElement(_e, {
						displayText: g.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: this.handleEdit
					}, o.a.createElement(Oe.a, {
						name: fe.a.edit
					})), b && o.a.createElement(_e, {
						displayText: g.fbt._("delete", null, {
							hk: "e8kvB"
						}),
						onClick: this.handleDelete
					}, o.a.createElement(Oe.a, {
						name: fe.a.delete
					}))), this.props.isConfirmModalOpen && o.a.createElement(A.a, {
						actionText: g.fbt._("Delete", null, {
							hk: "3hQAl"
						}),
						cancelActionText: g.fbt._("Keep", null, {
							hk: "3vWZkQ"
						}),
						headerText: g.fbt._("Delete comment", null, {
							hk: "2ErmbC"
						}),
						modalText: g.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "21h9zY"
						}),
						onConfirm: a,
						toggleModal: u,
						trackClick: C.a,
						withOverlay: !0
					}), this.renderModTools(), this.renderDistinguishDropdown()), this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var Le = Ie(Object(r.b)(Me, (e, t) => {
					let {
						comment: s,
						commentsPageKey: n
					} = t;
					return {
						deleteComment: () => n && e(Object(k.i)(s.id, s.postId)),
						onDistinguishComment: (t, n) => e(Object(P.b)(s.id, t, n)),
						onIgnoreReports: () => e(Object(P.g)(s.id)),
						onGildClick: t => e(Object(I.d)({
							correlationId: t,
							thingId: s.id
						})),
						onReportClick: () => e(Object(S.c)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(T.h)({
							tooltipId: Se(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(T.h)({
							tooltipId: Te(s.id)
						})),
						onToggleSave: () => e(Object(_.o)(s.id)),
						handleDelete: () => {
							e(Object(w.i)(we(s.id))), e(Object(T.h)({
								tooltipId: Ne(n, s.id)
							}))
						},
						handleEdit: t => {
							const n = Object(j.a)(s.postId, s.id, {}),
								o = {
									commentId: s.id,
									draftKey: Object(y.a)(Q.c.edit, s.id),
									text: s.bodyMD || "",
									commentMode: s.media && s.media.rteMode,
									commentsPageKey: n
								};
							e(Object(K.a)(t)), e(Object(k.g)(o))
						},
						handleReply: t => {
							const n = Object(j.a)(s.postId, s.id, {}),
								o = {
									parentCommentId: s.id,
									commentsPageKey: n
								};
							e(Object(K.a)(t)), e(Object(k.h)(o))
						},
						showToast: t => e(Object(N.f)(t)),
						toggleDeleteCommentModal: () => e(Object(w.i)(we(s.id)))
					}
				})(Object(ie.c)(Object(W.b)(Re)))),
				Ae = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				De = s("./src/reddit/components/RichTextJson/index.tsx"),
				Fe = s("./src/reddit/selectors/commentSelector.ts"),
				Be = s("./src/reddit/components/Comments/ProfileComment/index.m.less"),
				Ue = s.n(Be);
			const We = ve.a.wrapped(Ae.a, "TopMeta", Ue.a),
				Ve = ve.a.div("ProfileCommentWrapper", Ue.a),
				ze = ve.a.div("CommentBody", Ue.a),
				Ge = Object(r.b)(() => Object(a.c)({
					comment: (e, t) => Object(Fe.c)(e, t),
					flair: X.e
				})),
				He = Object(c.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.a = Ge(e => {
				const {
					comment: t,
					commentsPageKey: s,
					flair: n,
					isExpanded: r,
					showFlatlist: a,
					showModTools: c
				} = e, l = s => {
					var n;
					return o.a.createElement(De.b, {
						className: s,
						content: Object(G.a)(t),
						mediaMetadata: t.media && t.media.mediaMetadata,
						expressionAssetData: null === (n = t.media) || void 0 === n ? void 0 : n.expressionAssetData,
						rtJsonElementProps: He(e),
						mediaProps: {
							alignLeft: !0,
							renderSmallMedia: !0
						}
					})
				};
				return o.a.createElement(Ve, {
					className: Object(i.a)({
						[Ue.a.isRemoved]: !!t.bannedBy
					})
				}, o.a.createElement(We, {
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: t,
					commentsPageKey: s,
					flair: n,
					renderedInOverlay: !1
				}), o.a.createElement("div", null, !t.isDeleted && o.a.createElement(ze, null, r ? l() : o.a.createElement(O, {
					height: d.Zb,
					isExpanded: r
				}, l)), !t.isDeleted && a && o.a.createElement(Le, {
					comment: t,
					commentsPageKey: s,
					showModTools: c
				})))
			})
		},
		"./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const i = 5;

			function d(e) {
				const {
					post: t,
					postIds: s,
					subredditId: n
				} = e, d = Object(r.e)(e => e.subreddits.questions), c = Object(r.e)(e => e.posts.models);
				if (!s) return null;
				const l = s.indexOf(t.id);
				if (l < 0) return null;
				if (!p(t.id)) return null;
				const m = new Set;
				let u = !1;
				for (let o = 0, r = -999; o <= l; o += 1) {
					const e = s[o],
						t = c[e].belongsTo.id;
					p(e) && o - r >= i && !m.has(t) && (r = o, m.add(t), o === l && (u = !0))
				}
				return u ? o.a.createElement(a.a, {
					subredditId: n,
					inFeed: !0
				}) : null;

				function p(e) {
					var t;
					return (null === (t = d[c[e].belongsTo.id]) || void 0 === t ? void 0 : t.length) > 0
				}
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(n.a)({
				resolved: {},
				chunkName: () => "CommunityTopicSurvey",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: async () => s.e("CommunityTopicSurvey").then(s.bind(null, "./src/reddit/components/CommunityTopicSurvey/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CommunityTopicSurvey/index.tsx"
				}
			});
			t.a = o
		},
		"./src/reddit/components/CreatorStats/loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "CreatorStats",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("CreatorStats").then(s.bind(null, "./src/reddit/components/CreatorStats/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CreatorStats/index.tsx"
				}
			})
		},
		"./src/reddit/components/CrosspostBox/index.m.less": function(e, t, s) {
			e.exports = {
				mediaContainer: "P8p9Nku0-ZbYCsaCOSE2t",
				Container: "_2ED-O3JtIcOqp8iIL1G5cg",
				container: "_2ED-O3JtIcOqp8iIL1G5cg",
				PostMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				postMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				PostTitle: "_2akYJO5RtMK_ptA408seyG",
				postTitle: "_2akYJO5RtMK_ptA408seyG",
				FlatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				flatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				FlatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				flatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				FlatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				flatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				LinkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				linkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				Content: "_379A_08LTBsR4c8POTldR_",
				content: "_379A_08LTBsR4c8POTldR_",
				ThumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX",
				thumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX"
			}
		},
		"./src/reddit/components/CrosspostBox/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return y
			})), s.d(t, "a", (function() {
				return _
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				u = s("./src/reddit/components/PostMeta/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				h = s("./src/reddit/components/Thumbnail/index.tsx"),
				x = s("./src/lib/constants/index.ts"),
				f = s("./src/reddit/contexts/Post/index.tsx"),
				v = s("./src/reddit/selectors/posts.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/CrosspostBox/index.m.less"),
				E = s.n(g),
				C = s("./src/lib/lessComponent.tsx");

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const y = 8,
				_ = 1,
				k = C.a.div("Container", E.a),
				P = C.a.div("PostMetaWrapper", E.a),
				I = C.a.wrapped(p.c, "PostTitle", E.a),
				w = C.a.div("FlatList", E.a),
				S = C.a.div("FlatItem", E.a),
				N = C.a.span("FlatListDotSpacer", E.a),
				T = C.a.wrapped(k, "LinkContainer", E.a),
				M = C.a.div("Content", E.a),
				R = C.a.div("ThumbnailContainer", E.a),
				L = Object(d.c)({
					isCurrentUserProfilePost: v.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== x.Tb.TOPIC),
					shouldOpenPostInNewTab: O.lb
				}),
				A = Object(a.b)(L);
			t.c = Object(f.b)(A(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: n,
					mediaProps: o,
					post: a,
					subredditOrProfile: i
				} = e;
				if (!a) return null;
				const d = {
						post: a,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: n,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: i,
						tooltipType: `CrosspostBox--${o.isListing}`
					},
					c = t;
				return a && !a.media ? r.a.createElement(T, {
					className: c
				}, r.a.createElement(M, null, r.a.createElement(P, null, r.a.createElement(u.a, d)), D(a), a.source && r.a.createElement(b.a, {
					post: a
				}), B(e)), W(e)) : r.a.createElement(k, {
					className: c
				}, r.a.createElement(P, null, r.a.createElement(u.a, d)), D(a), F(e), B(e))
			}));
			const D = e => r.a.createElement(I, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: p.b.Small
				}),
				F = e => {
					const {
						mediaProps: t,
						post: s
					} = e, n = {
						...t,
						post: s,
						crosspost: t.post
					};
					return r.a.createElement("div", null, r.a.createElement(m.a, j({}, n, {
						className: E.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				B = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return r.a.createElement(w, null, r.a.createElement(S, null, n.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [n.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), r.a.createElement(N, null), r.a.createElement(S, null, U(e)))
				},
				U = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: o
					} = t;
					return r.a.createElement(i.a, {
						"data-click-id": "comments",
						to: Object(c.a)(t.permalink, !0),
						target: s ? "_blank" : void 0
					}, n.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [n.fbt._plural(o, "comment count", Object(l.b)(o))], {
						hk: "xPYWL"
					}))
				},
				W = e => r.a.createElement(R, null, r.a.createElement(h.b, {
					post: e.post
				}))
		},
		"./src/reddit/components/Econ/Audio/MuteIcon.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => {
				let {
					className: t
				} = e;
				return o.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, o.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, o.a.createElement("path", {
					d: "M13.5,9.5v-5A3.493,3.493,0,0,0,6.723,3.3l6.724,6.723A3.524,3.524,0,0,0,13.5,9.5Z"
				}), o.a.createElement("path", {
					d: "M15.5,9.5a5.472,5.472,0,0,1-.436,2.144l1.487,1.486A7.428,7.428,0,0,0,17.5,9.5Z"
				}), o.a.createElement("path", {
					d: "M2.341,4.1,6.5,8.258V9.5A3.5,3.5,0,0,0,10,13a3.441,3.441,0,0,0,1.059-.183l1.529,1.529A5.449,5.449,0,0,1,10,15,5.506,5.506,0,0,1,4.5,9.5h-2A7.5,7.5,0,0,0,9,16.925V18H7.581v2h4.838V18H11V16.925a7.388,7.388,0,0,0,3.026-1.141l1.044,1.044,1.414-1.414L3.755,2.686Z"
				})))
			}
		},
		"./src/reddit/components/Econ/Audio/async.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("index~reddit-components-Econ-Prediction"), s.e("index")]).then(s.bind(null, "./src/reddit/components/Econ/Audio/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Audio/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/Audio/index.m.less": function(e, t, s) {
			e.exports = {
				liveContainer: "reBgd-KYxGiWr_ZyzPgr_",
				userRow: "poHPrsWD-JtPCRh7foOm-",
				isListener: "_3DcaFqbAKhkVLYT6i2vxLy",
				speakerRings: "_1XlH7yy1d0pGBQ0hDDAaDv",
				listener: "_3fwbxY1I7EhKfr8MK7xT0S",
				speaker: "_1zEocOo_0euorSuKdx4-t2",
				snoovatar: "_23HWId-tu5O6LulDxLoVD1",
				userIcon: "Xzl_H3G7Qyd756Y0rQz4w",
				classic: "_2XdJHCLvUWJ2gdGBnugD5t",
				buttonContainer: "_2yhW3k4B2CUUSvt-3mqV3S",
				muteContainer: "_3mxKqH41iEa2lxIov7Eup-",
				muteIcon: "_18bneLE5nnOdUrY8P-eepo",
				fullRow: "_2cJzNEK-EGk9V7LDTIEFb-",
				endedContainer: "_21e_ZHJXEi7zMZ6XWWBz",
				nightMode: "z6LY0qX0g0puWE-RPF8XB",
				liveClassicContainer: "_3JLTqaLlFv8aPfzi9eQazu",
				classicSpeaker: "QsNKjj4EDQH2hYFYQB6T4",
				snoovatarHeadshotContainer: "_28VC5AU-z3J-h80HdMusUT",
				endedClassicContainer: "_2YXJIDv8TLzRj5vNdYs-_t",
				metaStatus: "OvWqIzFfbWF0I-5FMZ18I",
				isLive: "_3Vqz8YzNczoVWpOtpwXAit",
				processingButton: "nxYqAuGeco2RA9q0e9ECw"
			}
		},
		"./src/reddit/components/Econ/Marketplace/ShowcaseCollectionViewModal/async.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = s("./src/reddit/constants/modals.ts");
			const d = () => Promise.all([s.e("vendors~Avatar~CollectiblesShowcaseUnit~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceCla~cd1771e1"), s.e("vendors~Avatar~ChatPost~CollectiblesShowcaseUnit~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProf~7d152600"), s.e("vendors~Avatar~CollectiblesShowcaseUnit~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~S~bb3e1fe2"), s.e("ShowcaseCollectionViewModal")]).then(s.bind(null, "./src/reddit/components/Econ/Marketplace/ShowcaseCollectionViewModal/index.tsx")),
				c = Object(n.a)(d, {
					ssr: !1
				});
			Object(a.b)(i.a.X_SHOWCASE_COLLECTION_VIEW_MODAL, e => r.a.createElement(c, {
				onClose: e,
				onOverlayClick: e
			}))
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("index~reddit-components-Econ-Prediction"), s.e("index")]).then(s.bind(null, "./src/reddit/components/Econ/Prediction/TournamentPostBody/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/TournamentPostBody/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2y7BouacdnDeKNuREDVkim",
				title: "KaBtU0qanIOVW0UniJKIe",
				label: "VmuxKqetMFPty4Vt4EAOj",
				participants: "_331K_coiMcnNskYgCaneWt",
				badge: "_29aHDAbliwom5yyuyhXsFc",
				live: "_15J6TjGStJy2YuJAIf8TW4",
				ended: "_3K1ErD5uCGRM98kPQaJ_Nv",
				awards: "_3jKFKIS1X6GZ6MOcUdAy08"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			}));
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				c = s("./src/reddit/selectors/posts.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts");
			const {
				fbt: m
			} = s("./node_modules/fbt/lib/FbtPublic.js"), u = e => {
				let {
					participantsCount: t
				} = e;
				return m._({
					"*": "· {total participated users} players",
					_1: "· {total participated users} player"
				}, [m._param("total participated users", Object(l.b)(t)), m._plural(t)], {
					hk: "1yrPLH"
				})
			};
			var p = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less"),
				b = s.n(p);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = e => {
				let {
					post: t
				} = e;
				const s = t.predictionTournament,
					o = s.status === d.a.Live,
					l = s.status === d.a.Closed,
					m = Object(a.e)(e => Object(c.U)(e, {
						postId: t.id
					}));
				return r.a.createElement("div", {
					className: b.a.container
				}, r.a.createElement("div", {
					className: b.a.label
				}, r.a.createElement("span", null, null == m ? void 0 : m.displayText), o && r.a.createElement("span", {
					className: Object(n.a)(b.a.badge, b.a.live)
				}, h._("Live", null, {
					hk: "1G2P1W"
				})), l && r.a.createElement("span", {
					className: Object(n.a)(b.a.badge, b.a.ended)
				}, h._("Ended", null, {
					hk: "4s3hco"
				})), void 0 !== s.totalParticipantsCount && r.a.createElement(u, {
					participantsCount: s.totalParticipantsCount
				}), r.a.createElement(i.a, {
					className: b.a.awards,
					thing: t
				})), r.a.createElement("h3", {
					className: b.a.title
				}, s.name))
			}
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, s) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				u = s("./src/reddit/helpers/path/index.ts"),
				p = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/models/Post/index.ts"),
				f = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				v = s("./src/telemetry/models/Outbound.ts"),
				O = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				g = s("./src/reddit/components/ExpandoButton/index.m.less"),
				E = s.n(g);
			const C = Object(a.b)(null, (e, t) => ({
					toggle: () => e(Object(l.w)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.Z)(Object(u.b)(t.permalink), t.id))
				})),
				j = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const n = Object(d.a)(E.a.icon, E.a.hideOnHover);
					if (t) return r.a.createElement(b.a, {
						name: "crosspost",
						className: n
					});
					if (s.pollData) return r.a.createElement(b.a, {
						name: "poll_post",
						className: n
					});
					if (s.audioRoom) return r.a.createElement(b.a, {
						name: "audio",
						className: n
					});
					switch (e) {
						case h.o.GIFVIDEO:
							return r.a.createElement(b.a, {
								name: "gif_post",
								className: n
							});
						case h.o.IMAGE:
							return r.a.createElement(b.a, {
								name: "image_post",
								className: n
							});
						case h.o.TEXT:
						case h.o.RTJSON:
							return r.a.createElement(b.a, {
								name: "text_post",
								className: n
							});
						case h.o.VIDEO:
							return r.a.createElement(b.a, {
								name: "video_post",
								className: n
							});
						case h.o.GALLERY:
							return r.a.createElement(b.a, {
								name: "media_gallery",
								className: n
							});
						case h.o.EMBED:
						default:
							return r.a.createElement(b.a, {
								name: "embed",
								className: n
							})
					}
				};
			t.a = C(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: o,
					isCommentsPage: l,
					isExpanded: u,
					post: h,
					toggle: g,
					useMediaIcons: C
				} = e, y = s || h, _ = Object(a.e)(f.b), k = Object(a.e)(f.c), P = t => {
					(_ || k) && (t.preventDefault(), e.showModalOnPostLinkClick(y))
				}, I = y.media, w = Object(x.q)(h), S = o && !!s;
				return I && !w && !(("rtjson" === I.type || "text" === I.type || "liveaudio" === I.type) && !Object(p.a)(y)) || !!h.pollData ? r.a.createElement("button", {
					"aria-expanded": !!u,
					"aria-haspopup": !0,
					"aria-label": n.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(d.a)(t, E.a.outer),
					"data-click-id": u ? "expando_close" : "expando_open",
					"data-adclicklocation": O.a.MEDIA,
					onClick: g
				}, u ? r.a.createElement(b.a, {
					name: "collapse",
					className: E.a.icon
				}) : C ? r.a.createElement(r.a.Fragment, null, j(y.media && y.media.type, S, h), r.a.createElement(b.a, {
					name: "expand",
					className: Object(d.a)(E.a.icon, E.a.showOnHover)
				})) : r.a.createElement(b.a, {
					name: "expand",
					className: E.a.icon
				})) : y.source && y.source.url ? r.a.createElement(m.b, {
					"aria-label": n.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(d.a)(t, E.a.outer),
					"data-click-id": "expando_open",
					href: y.source.url,
					isSponsored: h.isSponsored,
					postId: h.id,
					source: h.source,
					sourceElement: l ? v.SourceElement.PostImage : v.SourceElement.ListingPostImage,
					target: "_blank"
				}, r.a.createElement(b.a, {
					name: "external_link",
					className: Object(d.a)(E.a.icon, E.a.outboundLinkIcon)
				})) : r.a.createElement(i.a, {
					"aria-label": n.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(d.a)(t, E.a.outer),
					"data-click-id": "expando_open",
					to: Object(c.a)(y.permalink),
					rel: "nofollow",
					onClick: P
				}, r.a.createElement(b.a, {
					name: "text_post",
					className: E.a.icon
				}))
			})
		},
		"./src/reddit/components/InfoBanners/PostRemovalBanner/helpers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "e", (function() {
				return O
			})), s.d(t, "c", (function() {
				return g
			}));
			var n = s("./src/config.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/reddit/icons/svgs/ClearFilled/index.tsx"),
				i = s("./src/reddit/icons/svgs/ModRemove/index.tsx"),
				d = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				c = s("./src/reddit/models/Post/index.ts"),
				l = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				m = s.n(l);
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js"), p = e => {
				let t;
				switch (e) {
					case c.g.AntiEvilOps:
					case c.g.AutomodFiltered:
					case c.g.CommunityOps:
					case c.g.ContentTakedown:
					case c.g.CopyrightTakedown:
					case c.g.Reddit:
						t = a.a;
						break;
					case c.g.AuthorDeleted:
					case c.g.Author:
						t = d.b;
						break;
					case c.g.Moderator:
						t = i.a;
						break;
					default:
						t = a.a
				}
				return r.a.createElement(t, {
					className: m.a.icon
				})
			}, b = e => {
				let t;
				switch (e) {
					case c.g.AntiEvilOps:
					case c.g.AutomodFiltered:
					case c.g.CommunityOps:
					case c.g.ContentTakedown:
					case c.g.CopyrightTakedown:
					case c.g.Reddit:
						t = "clear_fill";
						break;
					case c.g.AuthorDeleted:
					case c.g.Author:
						t = "delete_fill";
						break;
					case c.g.Moderator:
						t = "mod_fill";
						break;
					default:
						t = "clear_fill"
				}
				return t
			}, h = () => u._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [u._param("=User Agreement", r.a.createElement("a", {
				className: m.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, u._("User Agreement", null, {
				hk: "3MHgRl"
			}))), u._param("=Content Policy", r.a.createElement("a", {
				className: m.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, u._("Content Policy", null, {
				hk: "3UZthQ"
			})))], {
				hk: "4g3zuW"
			}), x = () => u._("Reddit administrators occasionally remove posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [u._param("=User Agreement", r.a.createElement("a", {
				className: m.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, u._("User Agreement", null, {
				hk: "yMHtU"
			}))), u._param("=Content Policy", r.a.createElement("a", {
				className: m.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, u._("Content Policy", null, {
				hk: "2dCXGu"
			})))], {
				hk: "2DLuNP"
			}), f = (e, t) => {
				switch (e) {
					case c.g.AntiEvilOps:
						return u._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
							hk: "2ZqyRT"
						});
					case c.g.Author:
						return u._("Sorry, this post was removed by the person who originally posted it.", null, {
							hk: "4IRCN"
						});
					case c.g.AuthorDeleted:
						return u._("Sorry, this post was deleted by the person who originally posted it.", null, {
							hk: "4emmIp"
						});
					case c.g.AutomodFiltered:
						return u._("Post is awaiting moderator approval.", null, {
							hk: "wdGOr"
						});
					case c.g.CommunityOps:
						return u._("Sorry, this post was removed by Reddit's Community team.", null, {
							hk: "3fs5lF"
						});
					case c.g.ContentTakedown:
						return u._("Sorry, this post was removed by Reddit.", null, {
							hk: "3XSuKc"
						});
					case c.g.CopyrightTakedown:
						return u._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
							hk: "1TbEDT"
						});
					case c.g.Moderator:
						return u._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [u._param("subredditName", t)], {
							hk: "12NWKq"
						});
					case c.g.Reddit:
						return u._("Sorry, this post was removed by Reddit's spam filters.", null, {
							hk: "10ItEu"
						});
					default:
						return u._("Sorry, this post has been removed", null, {
							hk: "11sG9V"
						})
				}
			}, v = (e, t) => {
				switch (e) {
					case c.g.AntiEvilOps:
						return r.a.createElement(h, null);
					case c.g.AuthorDeleted:
					case c.g.Author:
						return u._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
							hk: "2OBDBc"
						});
					case c.g.AutomodFiltered:
						return u._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [u._param("=[subreddit name]", r.a.createElement("a", {
							className: m.a.link,
							href: `${n.a.redditUrl}/r/${t}`,
							target: "_blank",
							rel: "noopener noreferrer"
						}, u._("{subreddit name}", [u._param("subreddit name", `r/${t}`)], {
							hk: "2o22vl"
						})))], {
							hk: "3dxuEW"
						});
					case c.g.CommunityOps:
						return u._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
							hk: "uPiHS"
						});
					case c.g.ContentTakedown:
						return r.a.createElement(x, null);
					case c.g.CopyrightTakedown:
						return u._("This content was removed in response to a copyright claim by a third party.", null, {
							hk: "2e8fhi"
						});
					case c.g.Moderator:
						return u._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
							hk: "QXZPk"
						});
					case c.g.Reddit:
					default:
						return u._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
							hk: "3vUmEz"
						})
				}
			}, O = (e, t, s) => {
				switch (e) {
					case c.g.AntiEvilOps:
						return u._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
							hk: "3a8CyR"
						});
					case c.g.Author:
						return u._("This post was removed by the person who originally posted it.", null, {
							hk: "2lyUgL"
						});
					case c.g.AuthorDeleted:
						return u._("This post was deleted by the person who originally posted it.", null, {
							hk: "16LeiH"
						});
					case c.g.AutomodFiltered:
						return u._("This post was reported by automod, and is waiting for your review.", null, {
							hk: "2E46dR"
						});
					case c.g.CommunityOps:
						return u._("This post was removed by Reddit admin, u/{username}.", [u._param("username", t)], {
							hk: "34nHWu"
						});
					case c.g.ContentTakedown:
						return u._("This post was removed by Reddit.", null, {
							hk: "3uR3iw"
						});
					case c.g.CopyrightTakedown:
						return u._("This post was removed by Reddit's Legal Operations team.", null, {
							hk: "Ukfj"
						});
					case c.g.Moderator:
						return u._("This post was removed by r/{subredditName} moderator, u/{username}.", [u._param("subredditName", s), u._param("username", t)], {
							hk: "270bcn"
						});
					case c.g.Reddit:
						return u._("This post was removed by Reddit's spam filters.", null, {
							hk: "1k3lsh"
						});
					default:
						return u._("This post was removed by Reddit's spam filters.", null, {
							hk: "3oxS8r"
						})
				}
			}, g = e => {
				switch (e) {
					case c.g.AntiEvilOps:
						return r.a.createElement(h, null);
					case c.g.AuthorDeleted:
					case c.g.Author:
						return u._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
							hk: "2KZLgT"
						});
					case c.g.AutomodFiltered:
						return u._("It won’t show up in your community feed until you or another moderator approve it.", null, {
							hk: "2X5ECb"
						});
					case c.g.CommunityOps:
						return u._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask} .", [u._param("=just ask", r.a.createElement("a", {
							className: m.a.link,
							href: `${n.a.redditUrl}/message/compose/?to=r/reddit.com`,
							target: "_blank",
							rel: "noopener noreferrer"
						}, u._("just ask", null, {
							hk: "jn9ip"
						})))], {
							hk: "3hMocZ"
						});
					case c.g.ContentTakedown:
						return r.a.createElement(x, null);
					case c.g.CopyrightTakedown:
						return u._("This content was removed in response to a copyright claim by a third party.", null, {
							hk: "7jiV"
						});
					case c.g.Moderator:
						return u._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
							hk: "22qJOB"
						});
					case c.g.Reddit:
						return u._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
							hk: "3S3oDL"
						});
					default:
						return u._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
							hk: "uKfHK"
						})
				}
			}
		},
		"./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less": function(e, t, s) {
			e.exports = {
				BannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				bannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				icon: "S7CavmS-v3qdubhT9asIc",
				link: "FmwbWt4ZwkxbQbR-0vj1G"
			}
		},
		"./src/reddit/components/LargePost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1RYN-7H8gYctjOQeL8p2Q7",
				topCompactPost: "_34QdMmLlbOcjhKm_jp-r3s",
				bottomCompactPost: "_2IWrSJK7OQ27rTgV_N2Zu4",
				creatorStatsContainer: "_29kkIwCUHX4r6IdznhyYEE",
				shouldShowOverflow: "_24r9i5ZTqf6P77tAstM-O3",
				shouldUseRoundedBorder: "_3LGrZR10DLu8LvoWRwzdHL",
				backgroundWrapper: "_11R7M_VOgKO1RJyRSRErT3",
				isEvent: "_3js7RHbLSHKV13qUFCVIhb",
				flatListContainer: "_1ixsU4oQRnNfZ91jhBU74y",
				noProposal: "_3KYCJ3N4w1YmvpFMo_3zcn",
				postMediaWrapper: "STit0dLageRsa2yR4te_b",
				postTitle: "_3wiKjmhpIpoTE2r5KCm2o6",
				adSupplementaryText: "DUmvFvjh1QvOsvx-YlMOO",
				proposal: "_2dkCPUHQTdBWU2B0dYnkRb",
				mHasNotVoted: "_5iUKicC_Y0zWFXvBBtVQJ",
				mGAPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mGaPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mPollIsClosed: "_3sj79JhIvASSGVklMeKgTl",
				adLinkWrapper: "_115kZaIAhrTbhLHOXtz01X",
				adsGalleryDisplayLink: "_3g19_IiwClMjxmNOrShwZw",
				horizontalVotes: "uFwpR-OdmueYZxdY_rEDX",
				modModeBannerWrapper: "_2-DmB4WujtcouWxnfbaGXw",
				liveLabel: "_1HHtbJesYWFlnffF_u9U5U",
				realtimeAnimation: "AtOuz7HaZcKodxvKABuOw",
				realtimeFade: "Uuedk2mN8afhHTXUH825B",
				isNightMode: "_1Qs6zz6oqdrQbR7yE_ntfY",
				realtimeFadeNight: "hjNeLkbGFHNdcoj6SGxE0",
				realtimeUpdated: "_2U6P_aTp-ha87x11OgMyff"
			}
		},
		"./src/reddit/components/LargePost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "RelatedCommunitiesRecommendationsUnit", (function() {
				return Ge
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				c = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				l = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				m = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				u = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/components/Econ/Audio/async.ts"),
				h = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				x = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				f = s("./src/reddit/components/IntuitivePostTypes/OptionalText.tsx"),
				v = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				O = s("./src/reddit/hooks/useTracking.ts"),
				g = s("./src/reddit/models/Media/index.ts"),
				E = s("./src/reddit/models/Post/index.ts"),
				C = s("./src/reddit/models/Vote/index.ts"),
				j = s("./src/reddit/selectors/activeModalId.ts"),
				y = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				_ = s("./src/reddit/selectors/moderatorPermissions.ts"),
				k = s("./src/reddit/selectors/posts.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				I = s("./src/lib/ads/index.ts"),
				w = s("./src/lib/classNames/index.ts"),
				S = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				N = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				T = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				M = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				R = s("./src/reddit/components/AdSupplementaryText/index.tsx"),
				L = s("./src/reddit/components/BoostPost/index.ts"),
				A = s("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				D = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				F = s("./src/reddit/components/CreatorStats/loader.tsx"),
				B = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				U = s("./src/reddit/components/Flatlist/index.tsx"),
				W = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				V = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				z = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				G = s("./src/reddit/components/ModModeReports/index.tsx"),
				H = s("./src/reddit/components/ModModeReports/helpers.ts"),
				K = s("./src/reddit/components/ModQueueActionBar/index.tsx"),
				q = s("./src/reddit/components/ModQueueActionBar/ModQueuePostStats.tsx"),
				Q = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				J = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				Z = s("./src/reddit/components/PostContainer/index.tsx"),
				X = s("./src/reddit/components/PostLeftRail/index.tsx"),
				Y = s("./src/reddit/components/PostMedia/index.tsx"),
				$ = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				ee = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				te = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				se = s.n(te);
			const {
				fbt: ne
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var oe = () => o.a.createElement("div", {
					className: se.a.container
				}, o.a.createElement(ee.a, {
					className: se.a.pinnedIcon,
					isFilled: !0
				}), o.a.createElement("span", {
					className: se.a.metaText
				}, ne._("pinned by moderators", null, {
					hk: "1qU8t4"
				}))),
				re = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				ae = s("./src/reddit/components/PostTitle/index.tsx"),
				ie = s("./src/reddit/components/PostTopLine/index.tsx"),
				de = s("./src/reddit/components/RelatedCommunitiesRecommendations/index.tsx"),
				ce = s("./src/reddit/components/SourceLink/index.tsx"),
				le = s("./src/reddit/constants/postLayout.ts"),
				me = s("./src/reddit/contexts/InsideOverlay.tsx"),
				ue = s("./src/reddit/contexts/PageLayer/index.tsx"),
				pe = s("./src/reddit/contexts/Post/index.tsx"),
				be = s("./src/reddit/helpers/isCrosspost.ts"),
				he = s("./src/reddit/helpers/path/index.ts"),
				xe = s("./src/reddit/helpers/postEvent.ts"),
				fe = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ve = s.n(fe),
				Oe = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				ge = s("./src/reddit/hooks/useClickSourceData.ts"),
				Ee = s("./src/reddit/models/Audio/index.ts"),
				Ce = s("./src/reddit/selectors/experiments/intuitivePostTypes.ts"),
				je = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				ye = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				_e = s("./src/reddit/constants/experiments.ts"),
				ke = s("./src/reddit/helpers/chooseVariant/index.ts"),
				Pe = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const Ie = Object(i.a)(k.M, e => e.some(Pe.c)),
				we = Object(i.a)(Ie, e => e),
				Se = (e, t) => Object(ke.c)(e, {
					experimentName: _e.vd,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && we(e, {
							listingKey: s
						})
					}
				});
			var Ne = s("./src/reddit/selectors/experiments/index.ts");

			function Te(e) {
				return e === _e.Bf.Minimalist || e === _e.Bf.Description || e === _e.Bf.HotnessSignals
			}
			var Me = s("./src/reddit/selectors/modQueue.ts"),
				Re = s("./src/reddit/selectors/postFlair.ts"),
				Le = s("./src/reddit/selectors/i18n/index.ts"),
				Ae = s("./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx"),
				De = s("./src/reddit/components/LargePost/index.m.less"),
				Fe = s.n(De);

			function Be() {
				return (Be = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Ue = e => {
					let {
						className: t,
						disableVisited: s,
						children: n,
						...r
					} = e;
					return o.a.createElement(N.a, Be({}, r, {
						className: Object(w.a)(t, Fe.a.styledLink, {
							[Fe.a.isVisitedEnabled]: !s
						})
					}), n)
				},
				We = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(k.M)(e, {
						listingKey: s
					}) : void 0
				},
				Ve = Object(r.b)(() => Object(i.c)({
					autoplayPref: P.d,
					isModQueueDisplayEnabled: e => Object(Me.b)(e, !0),
					activeModalId: j.a,
					hideNSFWPref: P.H,
					flairStyleTemplate: ue.Y,
					isBlurredPreview: ye.b,
					isCurrentUserProfilePost: k.l,
					isLoggedIn: P.S,
					isActive: k.j,
					moderatorPermissions: _.m,
					modModeEnabled: ue.W,
					posts: We,
					postHeightVariant: Se,
					shouldShowNsfwListingBelow: Le.b,
					showEditFlair: Re.a,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subreddit: s
						} = t;
						return !!s && Object(_.i)(e, s.id)
					},
					isOptionalTextEnabled: Ce.a,
					showCTAExperimentDesign: y.a,
					isUpdatedContent: (e, t) => {
						let {
							postId: s
						} = t;
						var n, o;
						return !!(null === (o = null === (n = e.features) || void 0 === n ? void 0 : n.realtimeModqueue) || void 0 === o ? void 0 : o.updated.includes(s))
					},
					showRealtimeUpdateAnimation: (e, t) => {
						let {
							postId: s
						} = t;
						var n;
						return (null === (n = e.features) || void 0 === n ? void 0 : n.realtimeUpdateAnimationId) === s
					},
					isNightMode: P.fb
				}), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const n = t === C.a.upvoted ? Object(u.ib)(s) : Object(u.v)(s);
							e(n)
						},
						onIgnoreReports: () => e(Object(u.eb)(s)),
						onOpenReportsDropdown: t => e(Object(p.h)({
							tooltipId: t
						}))
					}
				}),
				ze = o.a.memo(e => {
					const {
						handlePostLinkClick: t,
						postPermalink: s,
						disableVisited: n,
						shouldOpenPostInNewTab: r,
						shouldStylePostAfterVisitLink: a,
						children: i
					} = e;
					return a ? o.a.createElement(Ue, {
						"data-click-id": "body",
						target: r ? "_blank" : void 0,
						disableVisited: n,
						to: s,
						onClick: t
					}, e.children) : o.a.createElement(o.a.Fragment, null, i)
				}),
				Ge = e => {
					const {
						isEnabled: t,
						variant: s
					} = Object(r.e)(e => (e => {
						const t = Object(ke.c)(e, {
							experimentEligibilitySelector: Ne.e,
							experimentName: _e.Kc
						}) || _e.V.Control1;
						return {
							isEnabled: Te(t),
							variant: t
						}
					})(e), r.c);
					return t ? o.a.createElement(de.b, Be({}, e, {
						variant: s,
						pageType: de.a.Home
					})) : null
				},
				He = o.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: i,
						currentUser: p,
						eventFactory: C,
						flairStyleTemplate: j,
						forceLoadMedia: y,
						hideNSFWPref: _,
						hostPostData: k,
						imageGalleryCurrentItem: N,
						inSubredditOrProfile: ee = !1,
						isBlurredPreview: te,
						isCommentsPage: se,
						isCurrentUserProfilePost: ne,
						isFrontpage: de,
						isGalleryTileLayoutDefault: me,
						isModWithUserNotesPermissions: pe,
						isLoggedIn: fe,
						isOverlay: Ce,
						isTopicPage: ye,
						isCommentCountAnimationEnabled: ke,
						isVoteCountAnimationEnabled: Pe,
						isCountAnimShadowTestEnabled: Ie,
						listingIndex: we,
						listingKey: Se,
						moderatorPermissions: Ne,
						modModeEnabled: Te,
						onClickPost: Me,
						onIgnoreReports: Re,
						onOpenReportsDropdown: Le,
						post: De,
						postHeightVariant: Be,
						scrollerItemRef: Ue,
						shouldShowGalleryTileOption: We,
						shouldShowInsightsButton: Ve,
						shouldShowNsfwListingBelow: He,
						showEditFlair: Ke,
						subredditOrProfile: qe,
						userIsOp: Qe,
						postId: Je,
						postIds: Ze,
						onceInViewport: Xe,
						isOptionalTextEnabled: Ye,
						showCTAExperimentDesign: $e,
						isModQueueDisplayEnabled: et,
						showRealtimeUpdateAnimation: tt,
						isUpdatedContent: st,
						isNightMode: nt,
						onSubscribe: ot = (() => {})
					} = e, rt = Object(O.a)(), at = Object(ue.ib)(), it = Object(r.e)(e => Object(ue.G)(e, {
						pageLayer: at
					})), dt = !!e.redditStyle || !!e["data-redditstyle"], ct = dt ? void 0 : j, lt = Object(l.a)(Ne), mt = Te && lt, ut = Object(d.a)(Ne), pt = Object(c.a)(Ne), bt = Object(H.c)(De), ht = Object(z.a)(De), xt = !!De.media && De.media.type === g.o.RTJSON, ft = Qe && xt, vt = s ? s - X.a : void 0, Ot = !!De.recommendationContext, gt = !(de && fe || ye) || Ot && fe, Et = (e => e === _e.rf.OnlyTitles)(Be) && !Object(be.a)(De), Ct = (e => e === _e.rf.MediumHeight)(Be) && !Object(be.a)(De), jt = (e => {
						var t;
						const {
							post: s,
							postIds: n,
							posts: o
						} = e;
						if (!Object(E.v)(s) || (null === (t = s.pollData) || void 0 === t ? void 0 : t.isPrediction)) return;
						const r = n && 0 === n.indexOf(s.id),
							a = n && 1 === n.indexOf(s.id),
							i = o && o[1] && Object(E.v)(o[1]);
						return {
							hasTopCompactPostStyles: r && i,
							hasBottomCompactPostStyles: a,
							showPinnnedHeader: r
						}
					})(e), yt = Object(r.d)(), _t = Object(r.e)(je.b), kt = Object(r.e)(je.c), Pt = Object(r.e)(P.lb), It = Object(ge.a)(), wt = De.permalink, St = e.isCommentPermalink ? Object(he.b)(wt) : Object(S.a)(wt, void 0, It), Nt = !!(null == k ? void 0 : k.shouldShowLinkedPosts), Tt = (!ee || Nt || He) && !De.isSponsored, Mt = Object(I.t)(De, N), Rt = Object(n.useRef)(null), Lt = Object(n.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && (null == Xe || Xe(we))
						})
					}, [Xe, we]);
					Object(v.a)(Rt, Lt);
					const [At, Dt] = Object(n.useState)(!1), Ft = Object(n.useCallback)(() => {
						Dt(!At), rt(Object(Oe.d)(Je))
					}, [At, rt, Je]), Bt = !!(te && (null == qe ? void 0 : qe.isNSFW)), Ut = Object(n.useRef)({
						renderingObjectInfo: De
					}), Wt = Object(n.useCallback)(e => {
						(_t || kt) && (e.preventDefault(), yt(Object(u.Z)(Object(he.b)(De.permalink), De.id)))
					}, [yt, _t, kt, De.id, De.permalink]), Vt = De && De.media && (De.media.type === g.o.TEXT || De.media.type === g.o.RTJSON), zt = Object(E.r)(De), [Gt, Ht] = Object(n.useState)(!1);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(Z.b, {
						className: Object(w.a)(Fe.a.container, i, ve.a.largeAndMediumPostStyles, ve.a.largeAndMediumActiveStyles, Object(m.a)(e), {
							[ve.a.mUseRedditTheme]: dt,
							[Fe.a.topCompactPost]: jt && jt.hasTopCompactPostStyles,
							[Fe.a.bottomCompactPost]: jt && jt.hasBottomCompactPostStyles,
							[Fe.a.shouldShowOverflow]: Ve,
							[Fe.a.realtimeAnimation]: tt,
							[Fe.a.realtimeUpdated]: st,
							[Fe.a.isNightMode]: nt
						}),
						isOverlay: Ce,
						style: et && (tt || st) ? nt ? {
							backgroundColor: "#030303"
						} : {
							backgroundColor: "#F0F5F9"
						} : Object(m.b)(e.flairStyleTemplate),
						post: De,
						onClick: Me,
						eventFactory: C
					}, o.a.createElement("div", {
						ref: Rt
					}), o.a.createElement(re.a, {
						model: De,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						isCountAnimShadowTestEnabled: Ie,
						isVoteCountAnimation: Pe,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: ct,
						redditStyle: dt,
						postId: Je
					}), o.a.createElement(J.a, {
						className: Object(w.a)(Fe.a.backgroundWrapper, {
							[Fe.a.isEvent]: Object(xe.a)(De),
							[Fe.a.shouldUseRoundedBorder]: Ve,
							[Fe.a.realtimeAnimation]: tt,
							[Fe.a.realtimeUpdated]: st,
							[Fe.a.isNightMode]: nt
						}),
						"data-click-id": "background",
						flairStyleTemplate: ct,
						post: De,
						redditStyle: dt,
						overrideBackgroundColor: et && (tt || st) ? nt ? {
							backgroundColor: "#030303"
						} : {
							backgroundColor: "#F0F5F9"
						} : void 0
					}, o.a.createElement(B.a, {
						post: De
					}), jt && jt.showPinnnedHeader && o.a.createElement(oe, null), Object(a.c)(De) && o.a.createElement(o.a.Fragment, null, o.a.createElement(x.a, {
						post: De
					}), o.a.createElement(h.a, {
						post: De
					})), !Object(a.c)(De) && o.a.createElement(o.a.Fragment, null, zt && o.a.createElement(Q.a, {
						content: De.recommendationContext.content,
						layout: le.g.Large,
						post: De
					}), o.a.createElement(ie.a, {
						className: Fe.a.postTopLine,
						hideNSFWPref: _,
						hostPostData: k,
						iconClassName: Fe.a.postTopLineIcon,
						inSubredditOrProfile: ee,
						isCommentsPage: !!se,
						isCompactPinnedPost: !!jt,
						isCurrentUserProfilePost: ne,
						isModWithUserNotesPermissions: pe,
						isOverlay: !!Ce,
						isTopicPage: !!ye,
						listingKey: Se,
						post: De,
						shouldShowSubscribeButton: gt,
						showSubreddit: Tt,
						showSubredditIcon: !0,
						subredditOrProfile: qe,
						onSubscribed: () => {
							Ht(!0), ot()
						}
					}), o.a.createElement(ae.c, {
						className: Fe.a.postTitle,
						post: De,
						redditStyle: dt,
						size: ae.b.Large,
						titleColor: ct && ct.postTitleColor,
						isOverlay: Ce
					}), o.a.createElement(R.a, {
						className: Fe.a.adSupplementaryText,
						post: De,
						size: ae.b.Large
					}), De.source && !De.isSponsored && !Bt && o.a.createElement(o.a.Fragment, null, o.a.createElement(ce.a, {
						className: Fe.a.sourceLink,
						post: De
					}), Ye && De.media && De.media.type !== g.o.TEXT && De.media.type !== g.o.IMAGE && De.media.richtextContent && o.a.createElement(f.a, {
						content: De.media.richtextContent,
						rtJsonElementProps: Ut.current
					}))), o.a.createElement("div", {
						className: Fe.a.postMediaWrapper
					}, !jt && o.a.createElement(ze, {
						handlePostLinkClick: Wt,
						postPermalink: St,
						disableVisited: e.disableVisited,
						shouldOpenPostInNewTab: Pt,
						shouldStylePostAfterVisitLink: Vt
					}, o.a.createElement(Y.a, {
						isGalleryTileLayoutDefault: me,
						isListing: !0,
						isMediumHeight: Ct,
						isNotCardView: !!Ce,
						isTitleOnly: Et,
						showCentered: !0,
						flairStyleTemplate: ct,
						post: De,
						availableWidth: vt,
						shouldLoad: y,
						scrollerItemRef: Ue,
						autoplayPref: t,
						shouldShowGalleryTileOption: We
					}))), Object(I.v)(De, N) && o.a.createElement(T.a, {
						className: Fe.a.adLinkWrapper,
						ctaExperimentDesign: $e && "card"
					}, o.a.createElement(M.a, {
						post: De,
						adLinkContent: Mt,
						ctaExperimentDesign: $e && "card"
					})), Te && lt && ht && !et && o.a.createElement("div", {
						className: Fe.a.modModeBannerWrapper
					}, o.a.createElement(V.a, {
						thing: De
					})), Te && lt && bt && !et && o.a.createElement("div", {
						className: Fe.a.modModeBannerWrapper
					}, o.a.createElement(G.a, {
						onIgnoreReports: Re,
						reportable: De
					})), Object(Ee.b)(De) && o.a.createElement(b.a, null), o.a.createElement(W.d, null), et && o.a.createElement(q.a, {
						post: De
					}), De.discussionType === E.b.Chat && o.a.createElement(Ae.a, {
						postId: De.id,
						className: Fe.a.liveLabel
					}), o.a.createElement("div", {
						className: Fe.a.flatListContainer
					}, o.a.createElement(D.a, {
						className: Fe.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: ct,
						model: De,
						onVoteClick: e.handleVote
					}), !De.isSurveyAd && (et ? o.a.createElement(K.a, {
						content: De,
						listingKey: Se,
						hostPostData: k
					}) : o.a.createElement(U.c, {
						currentUser: p,
						hasModFlairPerms: ut,
						hasModFullPerms: pt,
						hasModPostPerms: lt,
						hostPostData: k,
						isCommentCountAnimation: ke,
						isCountAnimShadowTestEnabled: Ie,
						isLargePost: !0,
						isOverlay: !!Ce,
						listingKey: Se,
						modModeEnabled: Te,
						onClickInsightsButton: Ft,
						onIgnoreReports: Re,
						onOpenReportsDropdown: Le,
						post: De,
						shouldShowInsightsButton: Ve,
						showEditPost: ft,
						showEditFlair: Ke,
						useFlatlistBreakpoints: Object($.b)({
							editPost: !1,
							save: !mt,
							hide: !1,
							report: !1,
							mute: !1
						})
					}))), qe && At && o.a.createElement(F.a, {
						className: Fe.a.creatorStatsContainer,
						post: De,
						subreddit: qe,
						isOwnProfileStats: !0
					})), (Object(E.s)(De) || it) && Object(L.e)(De, p) && o.a.createElement(L.a, {
						postId: Je,
						user: p
					}), de && o.a.createElement(A.a, {
						post: De,
						postIds: null != Ze ? Ze : [],
						subredditId: null == qe ? void 0 : qe.id
					})), de && zt && Gt && qe && o.a.createElement(Ge, {
						postId: De.id,
						subredditId: qe.id,
						subredditDisplayText: qe.displayText,
						onDismiss: () => {
							Ht(!1)
						}
					}))
				});
			He.displayName = "LargePostMemoized";
			t.default = Object(pe.b)(Ve(Object(me.b)(He)))
		},
		"./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return O
			}));
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/lib/LiveChatActiveUsers/index.m.less"),
				d = s.n(i);
			const c = e => {
				let {
					userCount: t
				} = e;
				return a.a.createElement("span", {
					className: d.a.liveChatActiveUsers
				}, t > 1 ? o.fbt._("{userCount} here now", [o.fbt._param("userCount", `${t}`)], {
					hk: "4pUoKA"
				}) : o.fbt._("join now", null, {
					hk: "3JGiBG"
				}))
			};
			var l = s("./src/lib/LiveLabel/index.m.less"),
				m = s.n(l);
			const u = () => a.a.createElement("span", {
				className: m.a.LiveLabel
			}, o.fbt._("LIVE", null, {
				hk: "1N5y3d"
			}));
			var p = s("./src/lib/LiveChatActiveUsersWithLiveLabel/index.m.less"),
				b = s.n(p);
			const h = e => {
				let {
					userCount: t = 0,
					className: s
				} = e;
				return a.a.createElement("div", {
					className: Object(n.a)(b.a.liveParticipation, s)
				}, a.a.createElement(u, null), a.a.createElement(c, {
					userCount: t
				}))
			};
			var x = s("./node_modules/react-redux/es/index.js"),
				f = s("./src/reddit/selectors/chat.ts"),
				v = s("./src/reddit/selectors/experiments/chat.ts");
			const O = e => {
				let {
					postId: t,
					className: s
				} = e;
				const n = Object(x.e)(e => Object(f.a)(e, t));
				return Object(x.e)(v.f) ? a.a.createElement(h, {
					userCount: n,
					className: s
				}) : null
			}
		},
		"./src/reddit/components/MiniCardPost/Flatlist/index.m.less": function(e, t, s) {
			e.exports = {
				flatlistContainer: "_3TV1zxvLEbF8phHfZ17hyU",
				shareIcon: "_2-No1ECt3Twm8oRh3GhL5T",
				shareMenu: "_1Y9kO8WxKheHpQbgAgYk9P",
				shareText: "_3ZNfZZMmSFZUWWm-nHK327",
				HorizontalVotes: "c9IwhuiqPbgYHi-fLlAUH",
				horizontalVotes: "c9IwhuiqPbgYHi-fLlAUH",
				score: "_3O9hIPB_M3zadlrD7rXaEG",
				ShareButton: "_3VIaRwebVBflQjPct1Wz6l",
				shareButton: "_3VIaRwebVBflQjPct1Wz6l"
			}
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_35Bx3s8VlFspHwPlg1MaHt",
				subredditNameLink: "_20yDd2SHTuiJkQnTV4zehJ",
				subredditIcon: "_32Ni_aGBoPzRxNSy5eC_ck",
				CrosspostIcon: "y4hzYjyQqdKpwuDyNnLeW",
				crosspostIcon: "y4hzYjyQqdKpwuDyNnLeW"
			}
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				d = s("./src/reddit/components/SubredditIcon/index.tsx"),
				c = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				l = s("./src/reddit/helpers/name/index.ts"),
				m = s("./src/reddit/icons/fonts/index.tsx"),
				u = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				p = s.n(u);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: o,
					post: u,
					subredditOrProfile: b
				} = e;
				return r.a.createElement("div", {
					className: Object(a.a)(p.a.container, t)
				}, r.a.createElement(c.a, {
					className: p.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: b.url
				}, r.a.createElement(d.b, {
					className: p.a.subredditIcon,
					shouldHideNsfwIcon: o,
					subredditOrProfile: b
				}), r.a.createElement("span", null, b.displayText)), ((e, t) => {
					if (t) return r.a.createElement("div", {
						role: "img",
						"aria-label": n.fbt._("Crossposted by{author}from{community}", [n.fbt._param("author", Object(l.e)(e)), n.fbt._param("community", t.displayText)], {
							hk: "2OZoR0"
						})
					}, r.a.createElement(m.a, {
						name: "crosspost",
						className: p.a.CrosspostIcon
					}))
				})(u.author, s), b && b.isQuarantined && r.a.createElement(i.a, null))
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1HoOlmppFDBC4s5XWY-Qcd",
				thumbnail: "_1XZerRCUnHmbtEN1gqPwnw",
				thumbnailContainer: "_3fS9xUAmm4zWkzfM1ce7Jk",
				thumbnailLinkIcon: "_2JCMpuchwaEmL9S0QsJ9Ok",
				thumbnailLinkText: "_2vJWD7kgxbAQRGL328NxHg",
				thumbnailOutboundLinkIcon: "_4GTpE-l9TNXVeix3ZOE-_"
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Thumbnail/index.tsx"),
				i = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				d = s.n(i);

			function c(e) {
				const {
					source: t
				} = e.post;
				return o.a.createElement("div", {
					className: Object(r.a)(d.a.container, e.className)
				}, o.a.createElement(a.b, {
					className: Object(r.a)(d.a.thumbnail, e.thumbnailClassName),
					containerClassName: Object(r.a)(d.a.thumbnailContainer, e.thumbnailContainerClassName),
					linkIconClassName: Object(r.a)(d.a.thumbnailLinkIcon, e.thumbnailLinkIconClassName),
					linkTextClassName: d.a.thumbnailLinkText,
					outboundLinkIconClassName: d.a.thumbnailOutboundLinkIcon,
					post: e.post,
					showContentType: e.showPlaceholderContentType,
					templatePlaceholderImage: e.templatePlaceholderImage,
					text: t ? t.url : "",
					usePreview: e.usePreview
				}))
			}
		},
		"./src/reddit/components/MiniCardPost/index.m.less": function(e, t, s) {
			e.exports = {
				flexSpacer: "_3FMwep96W9D-wkC9u2Pc0L",
				backgroundWrapper: "_2yVioz8mzc0YBV2JyNXzRj",
				innerContainer: "_3mrITcnODXcvMf9oonBXeD",
				metaLine: "_20xUo-97VDWkydk8rn74dR",
				media: "_1qlC_L_v_Aher9NBsvBIMR",
				mediaWrapper: "_1UmG626eNsebZt_eyKdDL4",
				postTitleCompact: "_3wSK3_gZiuaUZtqPKu9z3M",
				mediaImageBox: "Xqhz61TRPUo_ek11O2hcV",
				videoStyles: "LAwAnSnoexNeHoqZmXdLD",
				mediaImageBoxContentImage: "_2t6Z9GgOnrWn2b5Ndv_T5K",
				postContainer: "_3Ud8ZDEFc0kXFg6R9KhDPS"
			}
		},
		"./src/reddit/components/ModQueueActionBar/ModQueuePostStats.m.less": function(e, t, s) {
			e.exports = {
				postStats: "_1jp_fxyDvcILOETMxKs9aZ"
			}
		},
		"./src/reddit/components/ModQueueActionBar/ModQueuePostStats.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/reddit/components/ModQueueActionBar/ModQueuePostStats.m.less"),
				i = s.n(a);
			const d = e => {
				let {
					post: t
				} = e;
				var s;
				return r.a.createElement("p", {
					className: i.a.postStats
				}, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(t.numComments, "number")], {
					hk: "wt9T0"
				}), " • ", n.fbt._({
					"*": "{number} awards",
					_1: "1 award"
				}, [n.fbt._plural((null === (s = t.allAwardings) || void 0 === s ? void 0 : s.length) || 0, "number")], {
					hk: "1ldRJO"
				}))
			}
		},
		"./src/reddit/components/ModQueueActionBar/StatusDisplays/FilteredStatusDisplay.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return U
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/icons/fonts/index.tsx"),
				c = s("./src/reddit/models/ModQueueTrigger/index.ts"),
				l = s("./src/reddit/components/RichTextJson/index.tsx"),
				m = s("./src/reddit/constants/things.ts"),
				u = s("./src/reddit/selectors/telemetry.ts");
			const p = e => t => ({
					source: "moderator",
					action: "click",
					noun: e.isCorrect ? "filter_is_correct" : "filter_is_incorrect",
					...b(e, t)
				}),
				b = (e, t) => {
					const s = e.contentId.startsWith(m.a) ? e.contentId : "",
						n = e.contentId.startsWith(m.b) ? e.contentId : "";
					return {
						comment: s ? Object(u.h)({
							state: t,
							commentId: s
						}) : null,
						post: n ? Object(u.K)(t, n) : null,
						filter: {
							reference: {
								name: e.filterName
							}
						},
						subreddit: Object(u.ob)(t, e.contentId),
						...u.o(t)
					}
				};
			var h = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				x = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/constants/localStorage.ts")),
				f = s("./src/reddit/hooks/useLocalStorage.ts"),
				v = s("./src/reddit/hooks/useUserContext.ts");
			const O = () => {
				var e, t;
				const s = `${null!==(t=null===(e=Object(v.a)().currentUser)||void 0===e?void 0:e.id)&&void 0!==t?t:""}-${x.b.SAFETY_FILTER_FEEDBACK_CONTENT_IDS}`,
					[n, o] = Object(f.a)(s, []);
				return {
					contentIds: new Set(n),
					addContentId: e => {
						const t = [...n, e];
						t.length > 50 && t.shift(), o(t)
					}
				}
			};
			var g = s("./src/reddit/hooks/useTracking.ts");
			const E = {
				threshold: [.5]
			};
			var C = e => {
					const t = Object(n.useRef)(null),
						s = Object(g.a)(),
						{
							contentIds: r
						} = O(),
						a = Object(n.useCallback)(t => {
							t.forEach(t => {
								let {
									intersectionRatio: n
								} = t;
								n >= .5 && !r.has(e.contentId) && s((e => t => ({
									source: "modqueue",
									action: "view",
									noun: "hitl_filter_feedback",
									...b(e, t)
								}))({
									...e
								}))
							})
						}, [s, e, r]);
					return Object(h.a)(t, a, E), o.a.createElement("div", {
						ref: t
					}, e.children)
				},
				j = s("./src/reddit/constants/experiments.ts"),
				y = s("./src/reddit/hooks/useExperimentVariant.ts"),
				_ = s("./src/reddit/hooks/useMounted.ts"),
				k = s("./src/reddit/components/ModQueueActionBar/helpers.ts"),
				P = s("./node_modules/lodash/debounce.js"),
				I = s.n(P),
				w = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				S = s("./src/reddit/hooks/useInfoTextTooltip.ts");
			const N = e => {
				let {
					confidence: t,
					children: s
				} = e;
				const n = Object(S.a)({
						placement: "top-end"
					}),
					i = I()(n.hide, 500);
				return o.a.createElement("div", {
					onMouseEnter: () => {
						n.show(), i.cancel()
					},
					onMouseLeave: i
				}, o.a.createElement("button", {
					onClick: e => {
						e.stopPropagation(), n.toggle()
					},
					className: "text-12 text-neutral-content mr-sm hover:underline",
					ref: n.target.ref
				}, o.a.createElement("span", {
					className: Object(a.a)("inline-block mr-2xs h-xs w-xs rounded-full", {
						"bg-alert-caution": t === c.a.LOW,
						"bg-success-background": t === c.a.HIGH
					})
				}), function(e) {
					switch (e) {
						case c.a.LOW:
							return r.fbt._("Low Confidence", null, {
								hk: "1woV5A"
							});
						case c.a.HIGH:
							return r.fbt._("High Confidence", null, {
								hk: "2UzCkt"
							})
					}
				}(t)), o.a.createElement(w.a, {
					popperProps: n.popperProps,
					arrowProps: n.arrowProps,
					visible: n.visible,
					className: "max-w-[230px] font-semibold text-12"
				}, o.a.createElement("div", {
					className: "py-xs flex gap-x-xs",
					onClick: e => e.stopPropagation()
				}, o.a.createElement(d.a, {
					name: "info_fill"
				}), o.a.createElement("div", null, s))))
			};
			var T = s("./src/reddit/components/TrackingHelper/index.tsx"),
				M = s("./src/reddit/components/ModQueueActionBar/StatusDisplays/SafetyFilterFeedbackPrompt.m.less"),
				R = s.n(M);
			const L = e => {
				let {
					filterName: t,
					contentId: s
				} = e;
				const a = Object(T.b)(),
					{
						addContentId: i
					} = O(),
					[d, c] = Object(n.useState)(!1),
					l = e => t => {
						t.stopPropagation(), i(s), c(!0), a(e)
					};
				return o.a.createElement("div", {
					className: R.a.feedbackPromptContainer
				}, o.a.createElement("p", {
					className: R.a.feedbackPrompt
				}, d ? r.fbt._("Thanks for your feedback!", null, {
					hk: "3ImVsP"
				}) : r.fbt._("Was this accurate?", null, {
					hk: "370juX"
				})), !d && o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
					"aria-label": "feedback response yes",
					className: R.a.feedbackPromptButton,
					onClick: l(p({
						isCorrect: !0,
						filterName: t,
						contentId: s
					}))
				}, r.fbt._("Yes", null, {
					hk: "QULVC"
				})), o.a.createElement("span", {
					className: R.a.feedbackButtonMiddot
				}, "·"), o.a.createElement("button", {
					"aria-label": "feedback response no",
					className: R.a.feedbackPromptButton,
					onClick: l(p({
						isCorrect: !1,
						filterName: t,
						contentId: s
					}))
				}, r.fbt._("No", null, {
					hk: "4zGto5"
				}))))
			};
			var A = s("./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less"),
				D = s.n(A);
			const F = e => {
					if (e) try {
						return JSON.parse(e)
					} catch {
						return
					}
				},
				B = e => {
					let {
						reasonRichText: t,
						reason: s,
						feedbackPrompt: n
					} = e;
					const a = Object(_.a)();
					if (n) {
						if (!a) return o.a.createElement("p", {
							className: D.a.reasonText
						}, r.fbt._("Loading filter reason…", null, {
							hk: "K3Ipd"
						}));
						if (!n.feedbackSent) return o.a.createElement(C, n, o.a.createElement(L, n))
					}
					return t ? o.a.createElement(l.b, {
						content: t,
						rtJsonElementProps: {}
					}) : s ? o.a.createElement("p", {
						className: D.a.reasonText
					}, s) : null
				},
				U = e => {
					let {
						content: t
					} = e;
					const s = Object(y.a)(j.re) === j.Wd,
						{
							contentIds: m
						} = O(),
						u = Object(n.useMemo)(() => {
							var e, n, o, a, d, l;
							const u = [];
							(null === (e = t.modQueueTriggers) || void 0 === e ? void 0 : e.length) || t.bannedBy !== i.l || u.push({
								icon: "bot_fill",
								heading: r.fbt._("Blocked by AutoMod", null, {
									hk: "XZuzM"
								})
							});
							for (const i of t.modQueueTriggers || []) switch (i.type) {
								case c.b.AUTOMOD:
									u.push({
										icon: "bot_fill",
										heading: r.fbt._("Blocked by AutoMod", null, {
											hk: "XZuzM"
										}),
										reason: i.message
									});
									break;
								case c.b.SHADOWBANNED_SUBMITTER:
									u.push({
										icon: "ban_fill",
										heading: r.fbt._("Blocked by Automatic Filter", null, {
											hk: "2iaUCM"
										}),
										reason: i.message
									});
									break;
								case c.b.HATEFUL_CONTENT:
									u.push({
										icon: "mod_mode_fill",
										heading: s ? r.fbt._("Blocked for Harassment", null, {
											hk: "1FQFpi"
										}) : r.fbt._("Blocked by Automatic Filter", null, {
											hk: "4vu7uy"
										}),
										reason: i.message,
										feedbackPrompt: s ? {
											filterName: k.b.HarassingContent,
											feedbackSent: m.has(t.id),
											contentId: t.id
										} : void 0
									});
									break;
								case c.b.CROWD_CONTROL:
									u.push({
										icon: "crowd_control",
										heading: r.fbt._("Blocked by Crowd Control", null, {
											hk: "6LNvT"
										}),
										reason: i.message
									});
									break;
								case c.b.BAN_EVASION:
									u.push({
										icon: "ban_fill",
										heading: r.fbt._("Blocked by Ban Evasion Protection", null, {
											hk: "1unYu9"
										}),
										reason: i.message,
										reasonRichText: F(null === (o = null === (n = i.details) || void 0 === n ? void 0 : n.recencyExplanation) || void 0 === o ? void 0 : o.richtext),
										confidence: null === (a = i.details) || void 0 === a ? void 0 : a.confidence,
										confidenceExplanation: F(null === (l = null === (d = i.details) || void 0 === d ? void 0 : d.confidenceExplanation) || void 0 === l ? void 0 : l.richtext)
									})
							}
							return u
						}, [t.modQueueTriggers, t.bannedBy, t.id, s]);
					return o.a.createElement("div", {
						className: D.a.filteredWrapper
					}, u.map((e, t) => {
						const {
							heading: s,
							reason: n,
							icon: r,
							confidence: i,
							confidenceExplanation: c
						} = e;
						return o.a.createElement("div", {
							key: `${s}-${n}-${t}`,
							className: D.a.filteredRow
						}, o.a.createElement(d.a, {
							isFilled: !0,
							name: r,
							className: Object(a.a)(D.a.coloredIcon, D.a.icon)
						}), o.a.createElement("div", {
							className: D.a.statusText
						}, o.a.createElement("div", {
							className: D.a.statusMeta
						}, o.a.createElement("p", {
							className: D.a.status
						}, s), i && c && o.a.createElement(N, {
							confidence: i
						}, o.a.createElement(l.b, {
							className: D.a.tooltipContent,
							content: c,
							rtJsonElementProps: {}
						}))), o.a.createElement(B, e)))
					}))
				}
		},
		"./src/reddit/components/ModQueueActionBar/StatusDisplays/SafetyFilterFeedbackPrompt.m.less": function(e, t, s) {
			e.exports = {
				feedbackPromptContainer: "_3RtSyVCC6P8Sf0jcGpvCf-",
				feedbackPrompt: "_32ku9VINzkoa2aCNXzXAdB",
				feedbackPromptButton: "_3xtpwUZ-CWdFHk89lj-iQD",
				feedbackButtonMiddot: "_2urD2Oe4XFQoyHKHwdlc5y"
			}
		},
		"./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2qFtoxD1OfFOBkQIQeIP5N",
				opened: "_3kWeXZJizg6u4Rpq5Bx2k6",
				openable: "_1jr1ZpXLdZNEfWwHwMp3UW",
				filteredWrapper: "_1aoTzKKtmlGCr-UYW5QI5O",
				filteredRow: "_eBNIEsnbYySvkxjmpt2P",
				reportedWrapper: "_1rfFSNr23RcUWm7d90DpDo",
				reportMeta: "_32zOxnfn5FxzpA0vNAYP7J",
				ignoreButton: "_3qPfB3L3JEpdPsa2KJ6I6Y",
				ignoreButtonIcon: "_2xeI0-KXBryv89ds5re0ac",
				reported: "_37f_VPQZEbIxZBhfy_wkzt",
				icon: "OYsuhocczx0FWqSu4etye",
				approved: "_3PA1NUdBncNEoWXl9e53aE",
				statusText: "_3trW-r5LnijGIrjgDF1u2M",
				status: "_3Q6W_eSDsN-BhormvQBcRr",
				statusMeta: "_3Qp7V0IlguVisBYUCEDLwX",
				tooltipContent: "_1SLswtlo8BWHAgKgT5Nsj_",
				reasonText: "_7YNYpwZk3KH6oXU4KhoGd",
				snoozabledButton: "_3Rixx0Z51qJ71wGmQ8UtQj",
				userIconWrapper: "_3vnCHVExwDbhdlwSh9BV9k",
				userIcon: "_1O-L18qAEJqcxeYP7bE4mK",
				filteredExplanationIcon: "a13uMv6sihYo-UyNBZDo8",
				snoozableDropdown: "_3L6lZrroGMf7wnI2DFJDJx",
				snoozeIcon: "BUoPqJh1q6Pv_Vf5bsKyT",
				caretButton: "_1iROd0ZxfCEcEidNiygaYB",
				caretIcon: "-vF-jMhpa_XhPJ_ntG1Hv",
				userlink: "_2iRjlf0DdO9rVaTZpfwvHA"
			}
		},
		"./src/reddit/components/ModQueueActionBar/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return c
			}));
			var n, o, r = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/helpers/isPost.ts"),
				i = s("./src/reddit/models/Post/index.ts"),
				d = s("./src/reddit/components/ModModeFilteredReason/helpers.ts");
			! function(e) {
				e.UNMODERATED = "UNMODERATED", e.APPROVED = "APPROVED", e.REMOVED = "REMOVED", e.SPAM = "SPAM", e.REPORTED = "REPORTED", e.FILTERED = "FILTERED"
			}(n || (n = {})),
			function(e) {
				e.HarassingContent = "harassing_content"
			}(o || (o = {}));
			const c = e => e.isRemoved && (!e.bannedBy || e.bannedBy === r.l) || !e.isRemoved && Object(d.a)(e) ? n.FILTERED : e.isRemoved || Object(a.b)(e) && [i.g.AntiEvilOps, i.g.CommunityOps, i.g.ContentTakedown, i.g.CopyrightTakedown, i.g.Reddit].indexOf(e.removedByCategory) > -1 ? n.REMOVED : e.isSpam ? n.SPAM : (e.numReports || 0) > 0 ? n.REPORTED : e.isApproved ? n.APPROVED : n.UNMODERATED
		},
		"./src/reddit/components/ModQueueActionBar/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "zF_-R5xzOOncUiSyzLSC9",
				actionBar: "NMY-KfFuIWlYboZZZ8EcY",
				overflowButton: "zctszRbdSXb3WEChmk-o9",
				button: "_3W9WNfkd8zxnn_VGjf4UnY",
				approve: "_3mPdPTYWWZwCYwh4wijZvJ",
				icon: "_1H-LK0KAgKuxT0BkJSN-51",
				overflowHeading: "_2DEP4U6JV7ZNOcbW94l3tb",
				dropdownRow: "_1dFDaRKdCA0DGOYecpQXWF"
			}
		},
		"./src/reddit/components/ModQueueActionBar/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return Re
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/actions/modQueue/realtime.ts"),
				c = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				l = s("./src/reddit/components/ReportFlow/new.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				p = s("./src/reddit/helpers/isPost.ts"),
				b = s("./src/reddit/helpers/trackers/modTools.ts"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				x = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				f = s("./src/reddit/hooks/useTracking.ts"),
				v = s("./src/reddit/icons/fonts/index.tsx"),
				O = s("./src/reddit/models/Post/index.ts"),
				g = s("./src/reddit/actions/comment/moderation.ts"),
				E = s("./src/reddit/actions/modal.ts"),
				C = s("./src/reddit/actions/post.ts"),
				j = s("./src/reddit/actions/postFlair.ts"),
				y = s("./src/reddit/actions/removalReasons/index.ts"),
				_ = s("./src/reddit/selectors/activeModal.ts"),
				k = s("./src/reddit/selectors/moderatorPermissions.ts"),
				P = s("./src/reddit/components/ModQueueActionBar/helpers.ts"),
				I = s("./src/reddit/components/ModQueueActionBar/index.m.less"),
				w = s.n(I),
				S = s("./src/lib/classNames/index.ts"),
				N = s("./src/lib/constants/icons.ts"),
				T = s("./src/reddit/actions/gold/modals.ts"),
				M = s("./src/reddit/actions/reportFlow/index.ts"),
				R = s("./src/reddit/components/GiveAwardTooltip/index.tsx"),
				L = s("./src/reddit/components/OverflowMenu/index.tsx"),
				A = s("./src/reddit/constants/modals.ts"),
				D = s("./src/reddit/controls/Dropdown/Row.tsx"),
				F = s("./src/reddit/helpers/correlationIdTracker.ts"),
				B = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				U = s("./src/reddit/helpers/trackers/gild.ts"),
				W = s("./src/reddit/selectors/comments.ts"),
				V = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				z = s("./src/reddit/selectors/user.ts"),
				G = s("./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx"),
				H = s("./src/devPlatform/constants.ts");
			const K = (e, t) => Object(b.c)(t, e),
				q = (e, t) => e ? t ? n.fbt._("Unlock Comments", null, {
					hk: "zGuti"
				}) : n.fbt._("Lock Comments", null, {
					hk: "1QO9cp"
				}) : t ? n.fbt._("Unlock thread", null, {
					hk: "SqzQU"
				}) : n.fbt._("Lock thread", null, {
					hk: "3drB04"
				});
			var Q = e => {
					let {
						content: t,
						hostPostData: s,
						listingKey: d,
						moderatorPermissions: c
					} = e;
					var l, m;
					const u = Object(f.a)(),
						x = Object(a.d)(),
						O = Object(p.b)(t),
						j = Object(a.e)(z.k),
						y = Object(a.e)(z.P),
						_ = Object(a.e)(V.b),
						k = Object(B.a)(c),
						P = O ? h.n : K,
						I = t.authorId === j,
						Q = y && I,
						J = (null === (l = t.distinguishType) || void 0 === l ? void 0 : l.toLowerCase()) === i.I.ADMIN,
						Z = (null === (m = t.distinguishType) || void 0 === m ? void 0 : m.toLowerCase()) === i.I.MODERATOR,
						X = Object(o.useCallback)(() => {
							const e = O ? C.D : g.c;
							x(e(t.id));
							const s = t.isLocked ? "unlock" : "lock";
							u(O ? P(t.id, s) : Object(b.j)(t.id, s, "mod_menu"))
						}, [P, u, x, t, O]),
						Y = Object(o.useCallback)(e => {
							u(Object(h.n)(t.id, e, "post", d, s, void 0))
						}, [u, d, s, t]),
						$ = Object(o.useCallback)(() => {
							var e;
							const s = t.isStickied ? "unsticky" : "sticky";
							O ? (x(Object(C.gb)(t.id)), u(Object(b.n)(s, t.id))) : (x(Object(g.b)(t.id, (null === (e = t.distinguishType) || void 0 === e ? void 0 : e.toLowerCase()) || "", !t.isStickied)), u(Object(b.j)(t.id, s, "mod_menu")))
						}, [u, x, t, O]),
						ee = Object(o.useCallback)(() => {
							O && (x(Object(C.I)(t.id)), u(Object(b.n)(t.isOriginalContent ? "unmark_original_content" : "mark_original_content", t.id)))
						}, [u, x, t, O]),
						te = Object(o.useCallback)(() => {
							O && (x(Object(C.F)(t.id)), Object(b.n)(t.isNSFW ? "unmark_nsfw" : "mark_nsfw", t.id))
						}, [x, t, O]),
						se = Object(o.useCallback)(() => {
							O && (x(Object(E.i)(A.a.CROWD_CONTROL)), x(Object(C.t)(t.id)))
						}, [x, t, O]),
						ne = Object(a.e)(e => Object(W.m)(e, {
							commentId: t.id
						})),
						oe = Object(o.useCallback)(() => {
							const e = O ? t.permalink : ne;
							e && (x(Object(C.C)(e)), O ? Y("copy") : u(Object(b.j)(t.id, "share", "mod_menu")))
						}, [Y, x, t, O, ne, u]),
						re = Object(o.useCallback)(async () => {
							if (!O) return;
							const e = Object(F.d)(F.a.GildingFlow, !0);
							x(Object(T.d)({
								awardId: null == _ ? void 0 : _.id,
								correlationId: e,
								thingId: t.id
							})), u(Object(U.clickGildEvent)(t.id))
						}, [u, x, t, _, O]),
						ae = Object(o.useCallback)(() => {
							x(Object(M.c)(t.id)), O ? Y("report") : u(Object(b.j)(t.id, "report", "mod_menu"))
						}, [Y, x, t, O, u]),
						ie = Object(o.useCallback)(() => {
							var e;
							O && (x(Object(C.db)(t.id, !t.hidden, !1, !0)), Y((null === (e = t) || void 0 === e ? void 0 : e.hidden) ? "unhide" : "hide"))
						}, [Y, x, t, O]),
						de = Object(o.useCallback)(() => {
							const e = O ? C.S : g.e;
							x(e(t.id, !0)), u(O ? Object(b.n)("spam", t.id) : Object(b.j)(t.id, "remove_as_spam", "mod_menu"))
						}, [u, x, t, O]),
						ce = Object(o.useCallback)(e => {
							const s = O ? C.u : g.b;
							x(s(t.id, e));
							const n = e === i.I.ADMIN ? "distinguish_as_admin" : e === i.I.MODERATOR ? "distinguish_as_mod" : "undistinguish";
							u(Object(b.j)(t.id, n, "mod_menu"))
						}, [x, t, O, u]);
					return r.a.createElement(L.b, {
						dropdownId: `modqueue-item-overflow-${t.id}`,
						className: w.a.overflowButton,
						icon: r.a.createElement(v.a, {
							name: N.a.overflow_horizontal,
							isFilled: !0
						})
					}, r.a.createElement("h6", {
						className: Object(S.a)("text-neutral-content-weak", w.a.overflowHeading)
					}, n.fbt._("Moderation", null, {
						hk: "2NlyQQ"
					})), !t.isRemoved && !t.isSpam && r.a.createElement(r.a.Fragment, null, r.a.createElement(D.b, {
						className: w.a.dropdownRow,
						displayText: n.fbt._("Remove as spam", null, {
							hk: "3jqLzv"
						}),
						onClick: de
					}, r.a.createElement(v.a, {
						name: N.a.spam
					})), O && r.a.createElement(D.b, {
						className: w.a.dropdownRow,
						displayText: t.isStickied ? n.fbt._("Unsticky Post", null, {
							hk: "3Y6DOH"
						}) : n.fbt._("Sticky Post", null, {
							hk: "RNgCH"
						}),
						onClick: $
					}, r.a.createElement(v.a, {
						name: t.isStickied ? N.a.unpin : N.a.pin
					}))), r.a.createElement(D.b, {
						className: w.a.dropdownRow,
						onClick: X,
						displayText: q(O, !!(null == t ? void 0 : t.isLocked))
					}, r.a.createElement(v.a, {
						name: N.a.lock,
						isFilled: null == t ? void 0 : t.isLocked
					})), I && r.a.createElement(D.b, {
						className: w.a.dropdownRow,
						displayText: Z ? n.fbt._("Undistinguish as a mod", null, {
							hk: "2Nmjxw"
						}) : n.fbt._("Distinguish as a mod", null, {
							hk: "35wmCr"
						}),
						onClick: () => ce(Z ? "" : i.I.MODERATOR)
					}, r.a.createElement(v.a, {
						name: Z ? N.a.distinguish_fill : N.a.distinguish
					})), Q && r.a.createElement(D.b, {
						className: w.a.dropdownRow,
						displayText: J ? n.fbt._("Undistinguish as an admin", null, {
							hk: "BHAJd"
						}) : n.fbt._("Distinguish as an admin", null, {
							hk: "3gaPvB"
						}),
						onClick: () => ce(J ? "" : i.I.ADMIN)
					}, r.a.createElement(v.a, {
						name: J ? N.a.distinguish_fill : N.a.distinguish
					})), !O && (J || Z) && I && r.a.createElement(D.b, {
						className: w.a.dropdownRow,
						displayText: t.isStickied ? n.fbt._("Unsticky the comment", null, {
							hk: "18TByd"
						}) : n.fbt._("Sticky the comment", null, {
							hk: "3roZIi"
						}),
						onClick: $
					}, r.a.createElement(v.a, {
						name: t.isStickied ? N.a.unpin : N.a.pin
					})), O && !t.crosspostParentId && r.a.createElement(D.b, {
						className: w.a.dropdownRow,
						onClick: ee,
						displayText: t.isOriginalContent ? n.fbt._("Remove OC Mark", null, {
							hk: "1R9sR"
						}) : n.fbt._("Mark as OC", null, {
							hk: "31GUJ2"
						})
					}, r.a.createElement(v.a, {
						name: N.a.original
					})), O && r.a.createElement(D.b, {
						className: w.a.dropdownRow,
						onClick: te,
						displayText: t.isNSFW ? n.fbt._("Mark as SFW", null, {
							hk: "rvDBl"
						}) : n.fbt._("Mark as NSFW", null, {
							hk: "1q4nut"
						})
					}, r.a.createElement(v.a, {
						name: N.a.nsfw
					})), O && k && "subreddit" === t.belongsTo.type && r.a.createElement(D.b, {
						className: w.a.dropdownRow,
						displayText: n.fbt._("Adjust crowd control", null, {
							hk: "4Drg85"
						}),
						onClick: se
					}, r.a.createElement(v.a, {
						name: N.a.crowd_control
					})), r.a.createElement(G.a, {
						contextType: Object(p.a)(t.id) ? H.a.POST : H.a.COMMENT,
						contextData: t,
						moderator: !0,
						isOnModQueueOverflowMenu: !0
					}), r.a.createElement("h6", {
						className: Object(S.a)("text-neutral-content-weak", w.a.overflowHeading)
					}, n.fbt._("Other", null, {
						hk: "2543kN"
					})), r.a.createElement(D.b, {
						className: w.a.dropdownRow,
						displayText: n.fbt._("Share", null, {
							hk: "3L9n7l"
						}),
						onClick: oe
					}, r.a.createElement(v.a, {
						name: N.a.share
					})), O && r.a.createElement(D.b, {
						className: w.a.dropdownRow,
						onClick: re,
						displayText: n.fbt._("Award", null, {
							hk: "4hkt8T"
						})
					}, r.a.createElement(v.a, {
						name: N.a.award
					}), r.a.createElement(R.a, {
						postOrComment: t,
						tooltipId: `modqueue-item-award-${t.id}`
					})), r.a.createElement(D.b, {
						className: w.a.dropdownRow,
						displayText: n.fbt._("Report", null, {
							hk: "1FAnQb"
						}),
						onClick: ae
					}, r.a.createElement(v.a, {
						name: N.a.report
					})), O && r.a.createElement(D.b, {
						className: w.a.dropdownRow,
						onClick: ie,
						displayText: t.hidden ? n.fbt._("Unhide", null, {
							hk: "3L7lXA"
						}) : n.fbt._("Hide", null, {
							hk: "19RA4b"
						})
					}, r.a.createElement(v.a, {
						name: N.a.hide
					})), r.a.createElement(G.a, {
						contextType: Object(p.a)(t.id) ? H.a.POST : H.a.COMMENT,
						contextData: t,
						moderator: !1,
						isOnModQueueOverflowMenu: !0
					}))
				},
				J = s("./src/reddit/helpers/trackers/modListing.ts"),
				Z = s("./src/config.ts"),
				X = s("./src/reddit/components/UserIcon/index.tsx"),
				Y = s("./src/reddit/helpers/name/index.ts"),
				$ = s("./src/reddit/constants/intlSupport.ts"),
				ee = s("./src/reddit/helpers/graphql/helpers.ts"),
				te = s("./src/reddit/hooks/useLocale.ts");

			function se(e) {
				return new Date(Date.now()).getFullYear() === e.getFullYear()
			}
			var ne = function(e) {
					let {
						date: t,
						...s
					} = e;
					const o = Object(te.a)(),
						a = "string" == typeof t ? Object(ee.g)(t) / i.Xb : t,
						d = new Date(a * i.Xb);
					if (!$.a) return r.a.createElement(r.a.Fragment, null, d.toLocaleString());
					const c = new Intl.DateTimeFormat(o, {
							month: "short",
							day: "numeric",
							year: se(d) ? void 0 : "numeric"
						}),
						l = new Intl.DateTimeFormat(o, {
							minute: "numeric",
							hour: "numeric"
						}),
						m = function(e) {
							const t = new Date(Date.now());
							return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()
						}(d) ? n.fbt._("Today", null, {
							hk: "1sZpnp"
						}) : c.format(d),
						u = l.format(d);
					return n.fbt._("{date} at {time}", [n.fbt._param("date", m), n.fbt._param("time", u)], {
						hk: "Ot5zO"
					})
				},
				oe = s("./src/reddit/components/ModQueueActivitySummaryCards/helpers.ts"),
				re = s("./src/reddit/components/CCM/ModPreviousActions/index.m.less"),
				ae = s.n(re);
			var ie = e => {
				let {
					className: t,
					modAction: s,
					postOrCommentId: n
				} = e;
				var o, a, i, d, c;
				const l = (null === (o = s.moderatorInfo) || void 0 === o ? void 0 : o.displayName) || "",
					m = (null === (i = null === (a = s.moderatorInfo) || void 0 === a ? void 0 : a.icon) || void 0 === i ? void 0 : i.url) || "",
					u = !!(null === (c = null === (d = s.moderatorInfo) || void 0 === d ? void 0 : d.profile) || void 0 === c ? void 0 : c.isNsfw),
					b = Object(p.a)(n);
				return r.a.createElement("div", {
					className: Object(S.a)(t, ae.a.row)
				}, r.a.createElement("div", {
					className: ae.a.userIconWrapper
				}, r.a.createElement(X.a, {
					className: ae.a.userIcon,
					iconUrl: m,
					userName: l,
					isNSFW: u
				})), r.a.createElement("div", {
					className: ae.a.details
				}, r.a.createElement("h3", {
					className: ae.a.title
				}, Object(oe.a)(s.action, b ? "SubredditPost" : "")), r.a.createElement("p", {
					className: ae.a.meta
				}, r.a.createElement("a", {
					className: ae.a.userlink,
					href: `${Z.a.redditUrl}/user/${l}`,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => e.stopPropagation()
				}, Object(Y.e)(l)))), r.a.createElement("span", {
					className: ae.a.time
				}, r.a.createElement(ne, {
					date: s.createdAt
				})))
			};
			var de = e => {
				let {
					className: t,
					reportAction: s
				} = e;
				return r.a.createElement("div", {
					className: Object(S.a)(t, ae.a.row)
				}, r.a.createElement(v.a, {
					isFilled: !0,
					name: "report_fill",
					className: ae.a.icon
				}), r.a.createElement("div", {
					className: ae.a.details
				}, r.a.createElement("h3", {
					className: ae.a.title
				}, n.fbt._("Reported for", null, {
					hk: "pm0ot"
				})), !!s.reason && r.a.createElement("p", {
					className: ae.a.meta
				}, s.reason)), r.a.createElement("span", {
					className: ae.a.time
				}, r.a.createElement(ne, {
					date: s.createdAt
				})))
			};
			var ce = e => {
					const t = Object(a.e)(t => {
						var s, n;
						const o = null === (n = null === (s = null == t ? void 0 : t.features) || void 0 === s ? void 0 : s.modPreviousActions) || void 0 === n ? void 0 : n.order[e.postOrCommentId];
						if (o && o.length) return o.map(e => {
							var s, n;
							return null === (n = null === (s = null == t ? void 0 : t.features) || void 0 === s ? void 0 : s.modPreviousActions) || void 0 === n ? void 0 : n.models[e]
						})
					});
					return t ? r.a.createElement("div", {
						className: Object(S.a)(e.className, ae.a.wrapper)
					}, r.a.createElement("h2", {
						className: ae.a.wrapperTitle
					}, n.fbt._("Recent actions", null, {
						hk: "PAtYM"
					})), t.map(t => "ModAction" === (null == t ? void 0 : t.__typename) ? r.a.createElement(ie, {
						modAction: t,
						key: t.id,
						postOrCommentId: e.postOrCommentId
					}) : "ReportAction" === (null == t ? void 0 : t.__typename) ? r.a.createElement(de, {
						reportAction: t,
						key: t.id
					}) : null)) : null
				},
				le = s("./src/reddit/components/HumanDate/index.tsx"),
				me = s("./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less"),
				ue = s.n(me);
			const pe = e => {
				let {
					content: t
				} = e;
				var s;
				const o = (null == t ? void 0 : t.approvedBy) || "",
					i = Object(a.e)(e => (null == t ? void 0 : t.approvedBy) ? Object(z.Db)(e, {
						userName: o
					}) : null),
					d = t.approvedAtUTC ? (null === (s = t.approvedAtUTC) || void 0 === s ? void 0 : s.toString().length) > 10 ? t.approvedAtUTC / 1e3 : t.approvedAtUTC : null;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: ue.a.userIconWrapper
				}, r.a.createElement(X.a, {
					className: Object(S.a)(ue.a.userIcon),
					iconUrl: null == i ? void 0 : i.accountIcon,
					userName: o,
					isNSFW: !!(null == i ? void 0 : i.isNSFW)
				})), r.a.createElement("div", {
					className: ue.a.statusText
				}, r.a.createElement("p", {
					className: ue.a.status
				}, n.fbt._("Approved", null, {
					hk: "4d15LY"
				})), r.a.createElement("p", null, r.a.createElement("a", {
					className: ue.a.userlink,
					href: `${Z.a.redditUrl}/user/${o}`,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => e.stopPropagation()
				}, Object(Y.e)(o)), d && r.a.createElement(r.a.Fragment, null, " ", r.a.createElement(le.d, {
					seconds: d
				})))))
			};
			var be = s("./src/reddit/components/ModQueueActionBar/StatusDisplays/FilteredStatusDisplay.tsx"),
				he = s("./src/reddit/components/InfoBanners/PostRemovalBanner/helpers.tsx"),
				xe = s("./src/reddit/selectors/subreddit.ts");
			const fe = e => {
				let {
					content: t
				} = e;
				var s;
				const o = Object(a.e)(e => (null == t ? void 0 : t.bannedBy) && "string" == typeof(null == t ? void 0 : t.bannedBy) ? Object(z.Db)(e, {
						userName: null == t ? void 0 : t.bannedBy
					}) : null),
					i = Object(p.b)(t),
					d = Object(a.e)(e => Object(xe.X)(e, {
						subredditId: i ? t.belongsTo.id : t.subredditId
					})),
					c = Object(a.e)(e => {
						var t, s, n, o;
						return (null === (s = null === (t = e.user) || void 0 === t ? void 0 : t.account) || void 0 === s ? void 0 : s.isAdmin) || (null === (o = null === (n = e.user) || void 0 === n ? void 0 : n.account) || void 0 === o ? void 0 : o.isEmployee)
					}),
					l = i && t.removedByCategory ? t.removedByCategory : null,
					m = l ? Object(he.b)(l) : "clear_fill",
					u = t.bannedAtUTC ? (null === (s = t.bannedAtUTC) || void 0 === s ? void 0 : s.toString().length) > 10 ? t.bannedAtUTC / 1e3 : t.bannedAtUTC : null,
					b = ![O.g.AntiEvilOps, O.g.CommunityOps, O.g.ContentTakedown, O.g.CopyrightTakedown, O.g.Reddit].includes(l) || c;
				return r.a.createElement(r.a.Fragment, null, o && b ? r.a.createElement("div", {
					className: ue.a.userIconWrapper
				}, r.a.createElement(X.a, {
					className: Object(S.a)(ue.a.userIcon),
					iconUrl: o.accountIcon,
					userName: o.username,
					isNSFW: o.isNSFW
				})) : r.a.createElement(v.a, {
					isFilled: !0,
					name: m,
					className: Object(S.a)(ue.a.coloredIcon, ue.a.icon)
				}), r.a.createElement("div", {
					className: ue.a.statusText
				}, r.a.createElement("p", {
					className: ue.a.status
				}, n.fbt._("Removed{spam}{reason}", [n.fbt._param("spam", t.isSpam ? " as spam" : ""), n.fbt._param("reason", t.modRemovalReason ? `: ${t.modRemovalReason}` : "")], {
					hk: "3BGtSz"
				})), r.a.createElement("p", null, b && (null == o ? void 0 : o.username) ? r.a.createElement(r.a.Fragment, null, r.a.createElement("a", {
					className: ue.a.userlink,
					href: `${Z.a.redditUrl}/user/${o.username}`,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => e.stopPropagation()
				}, Object(Y.e)(o.username)), u && r.a.createElement(r.a.Fragment, null, " ", r.a.createElement(le.d, {
					seconds: u
				}))) : l && Object(he.e)(l, (null == o ? void 0 : o.username) || null, d.name))))
			};
			var ve = s("./src/reddit/components/Reports/SnoozableReport/index.tsx"),
				Oe = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				ge = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Ee = s("./src/reddit/icons/fonts/helpers.tsx");
			s("./src/reddit/icons/fonts/Admin/index.tsx"), s("./src/reddit/icons/fonts/Approve/index.tsx"), s("./src/reddit/icons/fonts/Archived/index.tsx"), s("./src/reddit/icons/fonts/Calendar/index.tsx"), s("./src/reddit/icons/fonts/Clock/index.tsx"), s("./src/reddit/icons/fonts/Clear/index.tsx"), s("./src/reddit/icons/fonts/Coin/index.tsx"), s("./src/reddit/icons/fonts/Comment/index.tsx"), s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"), s("./src/reddit/icons/fonts/Downvote/index.tsx"), s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"), s("./src/reddit/icons/fonts/Envelope/index.tsx"), s("./src/reddit/icons/fonts/Expand/index.tsx"), s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"), s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"), s("./src/reddit/icons/fonts/Gift/index.tsx");
			var Ce = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx");
			s("./src/reddit/icons/fonts/Info/index.tsx"), s("./src/reddit/icons/fonts/Live/index.tsx"), s("./src/reddit/icons/fonts/Lock/index.tsx");
			s("./src/reddit/icons/fonts/ModActions/index.tsx"), s("./src/reddit/icons/fonts/ModSettings/index.tsx");
			var je = s("./src/reddit/icons/fonts/Op/index.m.less"),
				ye = s.n(je),
				_e = s("./src/lib/lessComponent.tsx");
			_e.a.wrapped(e => r.a.createElement("i", {
				className: `${Object(Ee.b)("author",e.isFilled)} ${e.className}`,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(Ee.a, null, e.desc)), "OpIcon", ye.a), s("./src/reddit/icons/fonts/OutboundLink/index.tsx"), s("./src/reddit/icons/fonts/Pencil/index.tsx");
			var ke = s("./src/reddit/icons/fonts/Photos/index.m.less"),
				Pe = s.n(ke);
			_e.a.wrapped(e => r.a.createElement("i", {
				className: `${Object(Ee.b)("image_post",e.isFilled)} ${e.className}`
			}), "PhotoIcon", Pe.a), s("./src/reddit/icons/fonts/Premium/index.tsx"), s("./src/reddit/icons/fonts/Remove/index.tsx");
			var Ie = s("./src/reddit/icons/fonts/Report/index.tsx"),
				we = (s("./src/reddit/icons/fonts/Share/index.tsx"), s("./src/reddit/icons/fonts/Spam/index.tsx"), s("./src/reddit/icons/fonts/Sticky/index.tsx"), s("./src/reddit/icons/fonts/Tag/index.tsx"), s("./src/reddit/icons/fonts/Text/index.m.less")),
				Se = s.n(we);
			_e.a.wrapped(e => r.a.createElement("i", {
				className: `${Object(Ee.b)("text_post",e.isFilled)} ${e.className}`
			}), "TextIcon", Se.a), s("./src/reddit/icons/fonts/Upvote/index.tsx");
			const Ne = e => {
					let {
						content: t
					} = e;
					const s = Object(ge.b)(),
						i = Object(a.d)(),
						d = Object(o.useCallback)(() => {
							const e = Object(p.a)(t.id),
								n = e ? C.eb : g.g,
								o = t.ignoreReports ? "restore_reports" : "ignore_reports",
								r = e ? Object(b.l)(o, t.id) : Object(b.k)(o, t.id);
							i(n(t.id)), s(r)
						}, [t.id, t.ignoreReports, s, i]),
						c = (t.modReportsDismissed && t.modReportsDismissed.length || 0) + (t.userReportsDismissed && t.userReportsDismissed.length || 0);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(v.a, {
						isFilled: !0,
						name: "report_fill",
						className: Object(S.a)(ue.a.coloredIcon, ue.a.icon)
					}), r.a.createElement("div", {
						className: ue.a.reportedWrapper
					}, !!t.modReports.length && r.a.createElement("div", {
						className: ue.a.statusText
					}, r.a.createElement("p", {
						className: ue.a.status
					}, n.fbt._({
						"*": "{number of reports} Mod Reports",
						_1: "1 Mod Report"
					}, [n.fbt._plural(t.modReports.length, "number of reports")], {
						hk: "P5w8P"
					})), t.modReports.map((e, t) => {
						let [s, n] = e;
						return r.a.createElement("p", {
							key: `${s}-${n}-${t}`
						}, Object(Y.e)(n), ": ", s)
					})), !!t.userReports.length && r.a.createElement("div", {
						className: ue.a.statusText
					}, r.a.createElement("div", {
						className: ue.a.reportMeta
					}, r.a.createElement("p", {
						className: ue.a.status
					}, n.fbt._({
						"*": "{number of reports} Reports",
						_1: "1 Report"
					}, [n.fbt._plural(t.userReports.reduce((e, t) => {
						let [, s] = t;
						return s + e
					}, 0), "number of reports")], {
						hk: "1l1xMH"
					})), !c && r.a.createElement(Oe.c, {
						className: ue.a.ignoreButton,
						onClick: d,
						text: t.ignoreReports ? n.fbt._("Restore Reports", null, {
							hk: "2O219R"
						}) : n.fbt._("ignore reports", null, {
							hk: "48jlNW"
						})
					}, t.ignoreReports ? r.a.createElement(Ie.a, {
						className: ue.a.ignoreButtonIcon
					}) : r.a.createElement(Ce.a, {
						className: ue.a.ignoreButtonIcon
					}))), t.userReports.map((e, s) => {
						let [n, o, a, i] = e;
						return n ? void 0 !== a && i ? r.a.createElement(ve.a, {
							key: `user-${n}`,
							reason: n,
							amount: o,
							reportedThingId: t.id,
							isSnoozed: a,
							useNewFormat: !0,
							className: ue.a.snoozabledButton,
							dropdownClassName: ue.a.snoozableDropdown,
							iconClassName: ue.a.snoozeIcon
						}) : r.a.createElement("p", {
							key: `user-${n}`
						}, n, " (", o, ")") : null
					}))))
				},
				Te = e => {
					let {
						content: t
					} = e;
					const s = Object(P.c)(t),
						n = Object(o.useMemo)(() => {
							switch (s) {
								case P.a.APPROVED:
									return r.a.createElement(pe, {
										content: t
									});
								case P.a.REMOVED:
								case P.a.SPAM:
									return r.a.createElement(fe, {
										content: t
									});
								case P.a.FILTERED:
									return r.a.createElement(be.a, {
										content: t
									});
								case P.a.REPORTED:
									return r.a.createElement(Ne, {
										content: t
									});
								default:
									return r.a.createElement(o.Fragment, null)
							}
						}, [s, t]),
						[i, d] = Object(o.useState)(!1),
						c = Object(f.a)(),
						l = Object(o.useCallback)(e => {
							var n;
							e.stopPropagation(), d(!i), c(Object(J.e)((null === (n = t.belongsTo) || void 0 === n ? void 0 : n.id) || t.subredditId, s, Object(p.a)(t.id), !i))
						}, [c, t, i, d, s]),
						m = Object(a.e)(e => {
							var s, n;
							return !!(null === (n = null === (s = null == e ? void 0 : e.features) || void 0 === s ? void 0 : s.modPreviousActions) || void 0 === n ? void 0 : n.order[t.id])
						});
					return s === P.a.UNMODERATED ? null : r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(S.a)(ue.a.wrapper, {
							[ue.a.approved]: s === P.a.APPROVED,
							[ue.a.reported]: s === P.a.REPORTED,
							[ue.a.opened]: i,
							[ue.a.openable]: m
						}),
						onClick: m ? l : void 0
					}, n, m && r.a.createElement("button", {
						className: ue.a.caretButton
					}, r.a.createElement(v.a, {
						name: i ? N.a.caret_up : N.a.caret_down,
						className: ue.a.caretIcon
					}))), m && i && r.a.createElement(ce, {
						className: ue.a.previousActions,
						postOrCommentId: t.id
					}))
				},
				Me = (e, t) => Object(b.c)(t, e),
				Re = e => {
					let {
						content: t,
						listingKey: s,
						hostPostData: b
					} = e;
					const I = Object(f.a)(),
						S = Object(a.d)(),
						N = Object(P.c)(t),
						T = Object(a.e)(_.b),
						M = Object(p.b)(t),
						R = Object(a.e)(e => {
							var s, n;
							return (null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === n ? void 0 : n.postOrCommentId) === t.id
						}),
						L = Object(a.e)(e => Object(k.m)(e, {
							postId: t.id
						})),
						A = Object(u.a)(L),
						[D, F] = Object(o.useState)(!1),
						B = Object(a.e)(e => {
							var s, n;
							return null === (n = null === (s = null == e ? void 0 : e.features) || void 0 === s ? void 0 : s.realtimeModqueue) || void 0 === n ? void 0 : n.toUpdate.includes(t.id)
						}),
						U = Object(o.useRef)(null),
						W = Object(o.useCallback)(e => {
							e.forEach(e => {
								const {
									isIntersecting: t,
									intersectionRatio: s
								} = e;
								s >= .5 ? F(!0) : t || F(!1)
							})
						}, []);
					D && B && S(Object(d.b)(t.id));
					const V = Object(o.useMemo)(() => ({
						threshold: [.5]
					}), []);
					Object(x.a)(U, W, V);
					const z = [P.a.REPORTED, P.a.FILTERED, P.a.UNMODERATED].includes(N),
						G = [P.a.APPROVED, P.a.UNMODERATED, P.a.REPORTED].includes(N),
						H = M && A,
						K = N === P.a.REMOVED && Object(p.b)(t) && t.removedByCategory === O.g.Reddit && !t.isRemoved && !t.isApproved,
						q = N === P.a.FILTERED || K,
						J = N === P.a.REMOVED && !t.modRemovalReason && !q,
						Z = [P.a.REMOVED, P.a.SPAM].indexOf(N) > -1,
						X = M ? h.n : Me,
						Y = Object(o.useCallback)(() => {
							const e = M ? C.r : g.a;
							S(e(t.id)), I(X(t.id, "approve"))
						}, [I, S, t, M, X]),
						$ = Object(o.useCallback)(() => {
							const e = M ? C.S : g.e;
							S(e(t.id, !1)), t.isRemoved && t.bannedBy === i.l ? I(X(t.id, "confirm_remove")) : I(X(t.id, "remove"))
						}, [I, S, t, M, X]),
						ee = Object(o.useCallback)(() => {
							S(Object(y.fetchReasonsAndOpenModal)(M ? t.belongsTo.id : t.subredditId, [t.id]))
						}, [t, M, S]),
						te = Object(o.useCallback)(() => {
							S(Object(E.i)(Object(c.b)(t.id, !1))), I(Object(h.n)(t.id, "post_flair_picker"))
						}, [I, S, t]),
						se = Object(o.useCallback)(e => {
							let {
								previewFlair: s,
								selectedTemplateId: n
							} = e;
							M && S(Object(j.h)({
								post: t,
								previewFlair: s,
								selectedTemplateId: n
							}))
						}, [S, M, t]);
					return r.a.createElement("div", {
						className: w.a.wrapper,
						"data-testid": "modqueue-action-bar",
						ref: U
					}, r.a.createElement(Te, {
						content: t
					}), r.a.createElement("div", {
						className: w.a.actionBar
					}, z && r.a.createElement(m.t, {
						className: [w.a.button, w.a.approve].join(" "),
						Icon: Object(v.b)("checkmark"),
						iconPosition: m.h.L,
						iconClassName: w.a.icon,
						onClick: Y,
						text: n.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), G && r.a.createElement(m.t, {
						className: w.a.button,
						Icon: Object(v.b)("close"),
						iconPosition: m.h.L,
						iconClassName: w.a.icon,
						onClick: $,
						text: n.fbt._("Remove", null, {
							hk: "2IDWyI"
						})
					}), J && r.a.createElement(m.t, {
						className: w.a.button,
						onClick: ee,
						text: n.fbt._("Add Removal Reason", null, {
							hk: "2htsXM"
						})
					}), q && r.a.createElement(m.t, {
						className: w.a.button,
						Icon: Object(v.b)("close"),
						iconPosition: m.h.L,
						iconClassName: w.a.icon,
						onClick: $,
						text: n.fbt._("Confirm Removal", null, {
							hk: "1v0rxC"
						})
					}), Z && r.a.createElement(m.t, {
						className: w.a.button,
						Icon: Object(v.b)("checkmark"),
						iconPosition: m.h.L,
						iconClassName: w.a.icon,
						onClick: Y,
						text: n.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), H && r.a.createElement(m.t, {
						className: w.a.button,
						Icon: Object(v.b)("tag"),
						priority: m.c.Plain,
						iconPosition: m.h.L,
						iconClassName: w.a.icon,
						onClick: te,
						text: n.fbt._("Flair", null, {
							hk: "4968fn"
						})
					}), M && T === Object(c.b)(t.id, !1) && r.a.createElement(c.a, {
						flairs: t.flair,
						subredditId: t.belongsTo.id,
						modalId: Object(c.b)(t.id, !1),
						onFlairChanged: se
					}), r.a.createElement(Q, {
						content: t,
						hostPostData: b,
						listingKey: s,
						moderatorPermissions: L
					}), R && r.a.createElement(l.a, {
						withOverlay: !0,
						postId: M ? t.id : void 0,
						commentId: M ? void 0 : t.id
					})))
				}
		},
		"./src/reddit/components/ModQueueActivitySummaryCards/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/redditGQL/types.ts");
			const r = (e, t) => {
				switch (e) {
					case o.x.AddNote:
						return n.fbt._("Added mod note", null, {
							hk: "4EQdI3"
						});
					case o.x.AddRemovalReason:
						return n.fbt._("Added removal reason", null, {
							hk: "3sDuRA"
						});
					case o.x.AdjustPostCrowdControlLevel:
						return n.fbt._("Adjusted post crowd control level", null, {
							hk: "3Ru27s"
						});
					case o.x.EnablePostCrowdControlFilter:
						return n.fbt._("Enabled post crowd control level", null, {
							hk: "bnrbt"
						});
					case o.x.DisablePostCrowdControlFilter:
						return n.fbt._("Disabled post crowd control level", null, {
							hk: "3Pn8Cm"
						});
					case o.x.ApproveComment:
						return n.fbt._("Approved comment", null, {
							hk: "15N4AH"
						});
					case o.x.ApproveLink:
						return n.fbt._("Approved post", null, {
							hk: "2pHeO6"
						});
					case o.x.BanUser:
						return n.fbt._("Banned user", null, {
							hk: "30ZUto"
						});
					case o.x.Collections:
						return n.fbt._("Collections", null, {
							hk: "4DLN5q"
						});
					case o.x.DeleteNote:
						return n.fbt._("Deleted mod note", null, {
							hk: "24mUGI"
						});
					case o.x.Distinguish:
						return "SubredditPost" === t ? n.fbt._("Post distinguished", null, {
							hk: "1EzjPd"
						}) : n.fbt._("Comment distinguished", null, {
							hk: "3TNqQa"
						});
					case o.x.EditFlair:
						return "SubredditPost" === t ? n.fbt._("Post flair edited", null, {
							hk: "2oj67i"
						}) : n.fbt._("User flair edited", null, {
							hk: "2WAVS8"
						});
					case o.x.IgnoreReports:
						return "SubredditPost" === t ? n.fbt._("Post reports ignored", null, {
							hk: "1HbgCS"
						}) : n.fbt._("Comment reports ignored", null, {
							hk: "3eLRwL"
						});
					case o.x.Lock:
						return "SubredditPost" === t ? n.fbt._("Post locked", null, {
							hk: "45Huvj"
						}) : n.fbt._("Comment locked", null, {
							hk: "2HzroI"
						});
					case o.x.MarkNsfw:
						return n.fbt._("Toggled post NSFW", null, {
							hk: "eAiVp"
						});
					case o.x.MarkOriginalContent:
						return n.fbt._("Toggled post Original Content", null, {
							hk: "46B0Bk"
						});
					case o.x.MuteUser:
						return n.fbt._("Muted user", null, {
							hk: "31YWRG"
						});
					case o.x.RemoveComment:
						return n.fbt._("Removed comment", null, {
							hk: "2qfmzC"
						});
					case o.x.RemoveLink:
						return n.fbt._("Removed post", null, {
							hk: "2leMij"
						});
					case o.x.SetContestMode:
						return n.fbt._("Set post contest mode", null, {
							hk: "2iE074"
						});
					case o.x.SetSuggestedsort:
						return n.fbt._("Set post suggested sort", null, {
							hk: "3zw33Q"
						});
					case o.x.ShowComment:
						return n.fbt._("Showed comment", null, {
							hk: "1xvaXS"
						});
					case o.x.SpamComment:
						return n.fbt._("Marked comment as spam", null, {
							hk: "E6CLe"
						});
					case o.x.SpamLink:
						return n.fbt._("Removed post as spam", null, {
							hk: "1Al2xz"
						});
					case o.x.Spoiler:
						return n.fbt._("Added spoiler tag", null, {
							hk: "254Axx"
						});
					case o.x.Sticky:
						return "SubredditPost" === t ? n.fbt._("Post stickied", null, {
							hk: "4m9DRx"
						}) : n.fbt._("Comment stickied", null, {
							hk: "1JIPzu"
						});
					case o.x.UnbanUser:
						return n.fbt._("Unbanned user", null, {
							hk: "3U4olT"
						});
					case o.x.Unlock:
						return "SubredditPost" === t ? n.fbt._("Post unlocked", null, {
							hk: "3IXrG"
						}) : n.fbt._("Comment unlocked", null, {
							hk: "4v2jmJ"
						});
					case o.x.UnmuteUser:
						return n.fbt._("Unmuted user", null, {
							hk: "2aB30x"
						});
					case o.x.UnsetContestMode:
						return n.fbt._("Unset post contest mode", null, {
							hk: "W4Yjf"
						});
					case o.x.UnsnoozeReports:
						return "SubredditPost" === t ? n.fbt._("Post unsnoozed", null, {
							hk: "3jp8zr"
						}) : n.fbt._("Comment unsnoozed", null, {
							hk: "2x01Eq"
						});
					case o.x.Unspoiler:
						return n.fbt._("Removed spoiler tag", null, {
							hk: "2GvhDn"
						});
					case o.x.Unsticky:
						return "SubredditPost" === t ? n.fbt._("Post unstickied", null, {
							hk: "KXoHl"
						}) : n.fbt._("Comment unstickied", null, {
							hk: "dpEKC"
						});
					case o.x.UpdateRemovalReason:
					case o.x.WikiBanned:
					case o.x.WikiContributor:
					case o.x.WikiPageListed:
					case o.x.WikiPermLevel:
					case o.x.WikiRevise:
					case o.x.WikiUnbanned:
					case o.x.AcceptModeratorInvite:
					case o.x.AddCommunityTopics:
					case o.x.AddContributor:
					case o.x.AddModerator:
					case o.x.CreateAward:
					case o.x.CreateScheduledPost:
					case o.x.CreateRemovalReason:
					case o.x.CommunityStyling:
					case o.x.CommunityWidgets:
					case o.x.CreateRule:
					case o.x.DeleteAward:
					case o.x.DeleteRule:
					case o.x.DeleteScheduledPost:
					case o.x.DeleteOverriddenClassification:
					case o.x.DeleteRemovalReason:
					case o.x.DisableAward:
					case o.x.EditPostRequirements:
					case o.x.EditRule:
					case o.x.EditScheduledPost:
					case o.x.EditSettings:
					case o.x.EnableAward:
					case o.x.Events:
					case o.x.HiddenAward:
					case o.x.InviteModerator:
					case o.x.InviteSubscriber:
					case o.x.ModAwardGiven:
					case o.x.ModmailEnrollment:
					case o.x.OverrideClassification:
					case o.x.RemoveCommunityTopics:
					case o.x.RemoveContributor:
					case o.x.RemoveModerator:
					case o.x.RemoveWikiContributor:
					case o.x.ReorderModerators:
					case o.x.ReorderRules:
					case o.x.SetPermissions:
					case o.x.SnoozeReports:
					case o.x.SubmitContentRatingSurvey:
					case o.x.SubmitScheduledPost:
					case o.x.UnignoreReports:
					case o.x.UninviteModerator:
					default:
						return n.fbt._("Last mod action", null, {
							hk: "S9AMb"
						})
				}
			}
		},
		"./src/reddit/components/NotificationButton/index.m.less": function(e, t, s) {
			e.exports = {
				notificationButton: "_3KTYozwt91D81Yub-OQ4S3",
				icon: "SDzveG4fJf98RLE5vll2w",
				NotificationIcon: "H8V0P3uvgDxt7ZbIFf_Tv",
				notificationIcon: "H8V0P3uvgDxt7ZbIFf_Tv",
				NotificationIconFilled: "_13arOxnT-uyZ238frHLRM2",
				notificationIconFilled: "_13arOxnT-uyZ238frHLRM2"
			}
		},
		"./src/reddit/components/NotificationButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				i = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				d = s("./src/reddit/icons/fonts/index.tsx"),
				c = s("./src/reddit/components/NotificationButton/index.m.less"),
				l = s.n(c);
			t.a = e => {
				const t = Object(i.a)(),
					{
						isFilled: s,
						onClick: n,
						hasTooltip: c,
						tooltipText: m,
						className: u
					} = e;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
					className: Object(r.a)(l.a.notificationButton, u),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: n
				}, o.a.createElement(d.a, {
					name: "notification",
					isFilled: s,
					className: l.a.icon,
					"aria-label": m
				})), c && o.a.createElement(a.a, {
					popperProps: t.popperProps,
					arrowProps: t.arrowProps,
					visible: t.visible
				}, m))
			}
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.m.less": function(e, t, s) {
			e.exports = {
				RecommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				recommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				classicLayout: "_3gsfwiq-rM6zSz9YoMlnJ0",
				compactLayout: "_9huHAs0mdMzeF-pUhJbwX",
				largeLayout: "_3hWVRt6y8PqOoC2VuZETZI"
			}
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/components/RichTextJson/index.tsx"),
				d = s("./src/reddit/constants/postLayout.ts"),
				c = s("./src/reddit/hooks/useRecommendationPostContext.ts"),
				l = s("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				m = s.n(l);
			const u = Object(a.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = e => {
				let {
					content: t,
					layout: s,
					post: n
				} = e;
				return Object(c.a)().hideRecommendationContext ? null : o.a.createElement(i.b, {
					className: Object(r.a)(m.a.RecommendationContextStyles, {
						[m.a.classicLayout]: s === d.g.Classic,
						[m.a.compactLayout]: s === d.g.Compact,
						[m.a.largeLayout]: s === d.g.Large
					}),
					content: t,
					rtJsonElementProps: u(n),
					useExplicitTextColor: !0
				})
			}
		},
		"./src/reddit/components/OverviewCommentPost/index.m.less": function(e, t, s) {
			e.exports = {
				overviewCommentPost: "_32w108aFIBi3H0DKCU4OI7",
				banned: "_3P8_MTWuehQOXRUhWBpwB0",
				reported: "_1Z7-lWgZwHw4sBG3rO44v7",
				InternalLink: "_31VWB3vSkv19o3I7RVE710",
				internalLink: "_31VWB3vSkv19o3I7RVE710",
				Wrapper: "_2otRz3OtuWajw1RleFDJ5P",
				wrapper: "_2otRz3OtuWajw1RleFDJ5P",
				Row: "_1InmLYfaOm6m9MZ8wKxM-0",
				row: "_1InmLYfaOm6m9MZ8wKxM-0",
				CommentIcon: "y05plmPkDK7RiRh8b3b8-",
				commentIcon: "y05plmPkDK7RiRh8b3b8-",
				TitleContainer: "_2ng_YqEhC3QLYqZyRIQ9qB",
				titleContainer: "_2ng_YqEhC3QLYqZyRIQ9qB",
				PostTitleContainer: "_13Ww4V9LL9wHYik5hp8VM4",
				postTitleContainer: "_13Ww4V9LL9wHYik5hp8VM4",
				PostTitle: "_2b_IHdM91weRNGmXfrTYvn",
				postTitle: "_2b_IHdM91weRNGmXfrTYvn",
				postTitleOutboundLink: "_3heiUGSIAJO43_Ertq1e2F",
				postTitleTitle: "_3gWN_jC4sfo4uQ61ZRgOO",
				PostTopMeta: "_3yzuVD_JNtr4EBJ_OesIvh",
				postTopMeta: "_3yzuVD_JNtr4EBJ_OesIvh",
				MetaSeparator: "_3RjYJMG6TaMnSwb88daQ7W",
				metaSeparator: "_3RjYJMG6TaMnSwb88daQ7W",
				postTopMetaMetaSeparator: "_2IhK-xvBLjMsX4HZ-T6j-W"
			}
		},
		"./src/reddit/components/OverviewCommentPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/components/PostContainer/index.tsx"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				p = s("./src/reddit/components/PostTopMeta/index.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/contexts/Post/index.tsx"),
				x = s("./src/reddit/controls/InternalLink/index.tsx"),
				f = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				v = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				O = s.n(v),
				g = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				E = s("./src/reddit/selectors/commentSelector.ts"),
				C = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				j = s("./src/reddit/components/OverviewCommentPost/index.m.less"),
				y = s.n(j);
			const {
				fbt: _
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = c.a.wrapped(x.default, "InternalLink", y.a), P = c.a.div("Wrapper", y.a), I = c.a.div("Row", y.a), w = c.a.wrapped(g.a, "CommentIcon", y.a), S = c.a.div("TitleContainer", y.a), N = c.a.div("PostTitleContainer", y.a), T = c.a.wrapped(u.c, "PostTitle", y.a), M = c.a.wrapped(p.g, "PostTopMeta", y.a), R = c.a.wrapped(p.a, "MetaSeparator", y.a), L = Object(r.b)(() => Object(a.c)({
				comment: E.c,
				isBlockingInterstitialEnabled: C.b,
				isBlockingInterstitialV2Enabled: C.b
			}), e => ({
				showModalOnAuthorLinkClick: t => e(Object(l.bb)(t))
			})), A = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = e;
				if (s) return o.a.createElement(n.Fragment, null, o.a.createElement(R, null), o.a.createElement(M, {
					metaSeparatorClassName: y.a.postTopMetaMetaSeparator,
					post: t,
					showSub: !0,
					showTimestamp: !1,
					subredditOrProfile: s
				}))
			}, D = e => {
				const {
					comment: t,
					profileName: s,
					isBlockingInterstitialEnabled: n,
					isBlockingInterstitialV2Enabled: r,
					showModalOnAuthorLinkClick: a
				} = e;
				if (!t) return null;
				const i = s || t.author,
					d = `/user/${i}/`;
				return o.a.createElement(k, {
					"data-click-id": "user",
					to: d,
					onClick: e => {
						(n || r) && (e.preventDefault(), a(d))
					}
				}, i)
			};
			t.a = Object(d.a)(Object(h.b)(L(Object(b.c)(e => {
				const {
					className: t,
					eventFactory: s,
					onClickPost: n,
					post: r
				} = e;
				return o.a.createElement(m.b, {
					className: Object(i.a)(O.a.compactPostStyles, y.a.overviewCommentPost, {
						[y.a.banned]: !!e.post.bannedBy,
						[y.a.reported]: !e.post.bannedBy && !!e.post.numReports && e.post.numReports > 0
					}, t),
					post: r,
					onClick: n,
					eventFactory: s
				}, o.a.createElement(P, {
					style: {
						background: Object(f.e)(e)
					}
				}, o.a.createElement(I, null, o.a.createElement(w, null), o.a.createElement(S, null, _._("{postAuthor} commented on {postTitle} {postMeta}", [_._param("postAuthor", D({
					...e
				})), _._param("postTitle", o.a.createElement(N, null, o.a.createElement(T, {
					outboundLinkClassName: y.a.postTitleOutboundLink,
					post: r,
					size: u.b.Small,
					titleClassName: y.a.postTitleTitle
				}))), _._param("postMeta", A(e))], {
					hk: "d6l8e"
				})))))
			}))))
		},
		"./src/reddit/components/OverviewConversationsPost/Border/index.m.less": function(e, t, s) {
			e.exports = {
				border: "_1lhlKOukuHHzZKIlnXcHmQ",
				isFirst: "_2o6nV_ET0Jis6_EzEHx9K3",
				isLast: "_1C2mkyHj-MAuIndy8vJIU5"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/Border/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/OverviewConversationsPost/Border/index.m.less"),
				i = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					isFirst: s,
					isLast: n,
					...a
				} = e;
				return o.a.createElement("div", d({
					className: Object(r.a)(i.a.border, {
						[i.a.isFirst]: s,
						[i.a.isLast]: n
					}, t)
				}, a))
			}
		},
		"./src/reddit/components/OverviewConversationsPost/ExtraCommentsItem/index.m.less": function(e, t, s) {
			e.exports = {
				ExtraCommentsItemWrapper: "_3S95u6JHFnb4s3dszwei2-",
				extraCommentsItemWrapper: "_3S95u6JHFnb4s3dszwei2-",
				ExtraComments: "_35d97uauE52jtrUNWw8B4i",
				extraComments: "_35d97uauE52jtrUNWw8B4i",
				ExtraCommentsInteractive: "lQv8U3Ne_-BQ6fbAfxKIS",
				extraCommentsInteractive: "lQv8U3Ne_-BQ6fbAfxKIS"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less": function(e, t, s) {
			e.exports = {
				ProfileOwnerCommentWrapper: "_3CecFEZvC8MFSvLsfuVYUs",
				profileOwnerCommentWrapper: "_3CecFEZvC8MFSvLsfuVYUs",
				CommentContentWrapper: "hpOP1hjcTLrw1L2rfRtMP",
				commentContentWrapper: "hpOP1hjcTLrw1L2rfRtMP",
				Wrapper: "_2OpuabFjFVU3UZ4jcP58gJ",
				wrapper: "_2OpuabFjFVU3UZ4jcP58gJ",
				isFirst: "_3bYCCkSa6xxUYDEPgIa7w5",
				isLast: "_3TNQpNlZH2M4X50sedpaIG",
				isAwarded: "_2UgLKr67bDuCg6zs7UOCoN",
				isNightmodeOn: "_3ZqQTMfjWU3NV-dAfa8O9E",
				CommentSeparator: "_1mvcEtI04YyIVKsT-vUkiN",
				commentSeparator: "_1mvcEtI04YyIVKsT-vUkiN"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/times.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/constants/gold.ts"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/components/CommentContainer/index.tsx"),
				p = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				b = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/helpers/getClickInfo.ts"),
				x = s("./src/reddit/selectors/commentSelector.ts"),
				f = s("./src/reddit/selectors/communityAwards.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				g = s.n(O);
			const E = m.a.div("ProfileOwnerCommentWrapper", g.a),
				C = m.a.div("CommentContentWrapper", g.a),
				j = m.a.div("Wrapper", g.a),
				y = m.a.div("CommentSeparator", g.a),
				_ = Object(i.b)(() => Object(d.c)({
					comment: (e, t) => Object(x.c)(e, t),
					isAwarded: (e, t) => {
						const s = Object(x.c)(e, t);
						return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
							const s = Object(f.a)(e, t);
							return s && s.coinPrice >= c.g
						})
					},
					isNightmodeOn: v.fb
				}), e => ({
					openPost: t => e(Object(b.K)(t))
				}));
			class k extends a.a.Component {
				render() {
					const {
						comment: e,
						commentId: t,
						depth: s,
						openPost: n,
						isAwarded: r,
						isFirst: i,
						isLast: d,
						isNightmodeOn: c,
						profileName: m,
						showModTools: p
					} = this.props, b = m === e.author ? P : I;
					return a.a.createElement(u.a, {
						comment: e,
						onClick: (e, t) => {
							n({
								postOrComment: t,
								clickInfo: Object(h.a)(e),
								queryParams: {
									context: 3
								}
							}), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, a.a.createElement(j, {
						className: Object(l.a)({
							[g.a.isFirst]: i,
							[g.a.isLast]: d,
							[g.a.isAwarded]: r,
							[g.a.isNightmodeOn]: c
						})
					}, o()(s + 1, e => a.a.createElement(y, {
						key: e
					})), a.a.createElement(C, null, b(t, m, p))))
				}
			}
			const P = (e, t, s) => a.a.createElement(E, null, I(e, t, s, !0, !0)),
				I = function(e, t, s) {
					let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
						o = arguments.length > 4 ? arguments[4] : void 0;
					return a.a.createElement(p.a, {
						commentId: e,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: n,
						showModTools: s,
						isExpanded: !!o
					})
				};
			t.a = _(k)
		},
		"./src/reddit/components/OverviewConversationsPost/index.m.less": function(e, t, s) {
			e.exports = {
				BackgroundWrapper: "_3aoyec8unb9DkDxSv2XOMX",
				backgroundWrapper: "_3aoyec8unb9DkDxSv2XOMX",
				ClassicPost: "tAHXx8uORoJlmgLFgqJEP",
				classicPost: "tAHXx8uORoJlmgLFgqJEP",
				OverviewCommentPost: "_1jbHcnuv4MQLOov7BuufdI",
				overviewCommentPost: "_1jbHcnuv4MQLOov7BuufdI",
				OverviewLargePost: "_3DVTWNXPKtpQAozvDhjI89",
				overviewLargePost: "_3DVTWNXPKtpQAozvDhjI89",
				OverviewConversationsPost: "_3KGXodqw9Ht3MoBpe8_gzB",
				overviewConversationsPost: "_3KGXodqw9Ht3MoBpe8_gzB",
				shouldShowOverflow: "_39DoGlFlWC7-ZGIOESFdw0"
			}
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return se
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				a = s("./src/reddit/components/Media/index.tsx"),
				i = s("./src/reddit/models/Post/index.ts"),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/constants/adEvents.ts"),
				m = s("./src/reddit/constants/experiments.ts"),
				u = s("./src/reddit/helpers/chooseVariant/index.ts"),
				p = s("./node_modules/reselect/es/index.js");
			const b = Object(p.a)(e => Object(u.c)(e, {
				experimentEligibilitySelector: u.a,
				experimentName: m.Dc
			}), e => e === m.Wd);
			var h = s("./node_modules/fbt/lib/FbtPublic.js"),
				x = s("./src/lib/classNames/index.ts"),
				f = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				v = s("./src/reddit/components/SubredditIcon/index.tsx"),
				O = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less"),
				C = s.n(E);
			const j = e => {
				let {
					postId: t,
					className: s
				} = e;
				const n = Object(d.e)(e => Object(O.F)(e, {
						postId: t
					})),
					r = Object(d.e)(e => "subreddit" === (null == n ? void 0 : n.belongsTo.type) ? Object(g.X)(e, {
						subredditId: n.belongsTo.id
					}) : null);
				return r ? o.a.createElement(f.a, {
					className: Object(x.a)(C.a.link, s),
					to: r.url
				}, h.fbt._("Posts via", null, {
					hk: "23e8m8"
				}), o.a.createElement(v.b, {
					className: C.a.subredditIcon,
					shouldHideNsfwIcon: !0,
					subredditOrProfile: r
				}), o.a.createElement("span", {
					className: C.a.subredditName
				}, r.displayText)) : null
			};
			var y = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				_ = s("./src/reddit/connectors/PostViewable/index.ts"),
				k = s("./src/reddit/contexts/PageLayer/index.tsx"),
				P = s("./src/reddit/contexts/Post/index.tsx"),
				I = s("./src/reddit/helpers/path/index.ts"),
				w = s("./src/reddit/hooks/useClickSourceData.ts"),
				S = s("./src/reddit/hooks/useIsOverlay.ts"),
				N = s("./src/reddit/hooks/usePageLayer.ts"),
				T = s("./src/lib/prettyPrintNumber/index.ts"),
				M = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less"),
				R = s.n(M);
			const L = e => {
				let {
					post: t
				} = e;
				const s = `${Object(T.b)(t.score)} ${h.fbt._("upvotes",null,{hk:"wJqPp"})}`,
					n = `${Object(T.b)(t.numComments)} ${h.fbt._("comments",null,{hk:"30aUyh"})}`;
				return o.a.createElement("div", {
					className: R.a.postInformation
				}, o.a.createElement("h5", {
					className: R.a.title
				}, t.title), o.a.createElement("div", {
					className: R.a.interactions
				}, o.a.createElement("p", null, s), o.a.createElement("p", null, n)))
			};
			var A = s("./src/lib/isUrl/index.ts"),
				D = s("./src/reddit/actions/profile/index.ts"),
				F = s("./src/reddit/components/Thumbnail/index.tsx"),
				B = s("./src/reddit/components/UserIcon/index.tsx"),
				U = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				W = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				V = s("./src/reddit/selectors/profile.ts"),
				z = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less"),
				G = s.n(z);
			const H = e => {
				let {
					post: t
				} = e;
				var s, r, a, i;
				const c = Object(d.d)(),
					l = Object(d.e)(Object(V.l)(t.author)),
					m = Object(n.useMemo)(() => Object(F.c)({
						post: t
					}), [t]),
					u = Object(n.useMemo)(() => Object(A.a)(m), [m]);
				Object(n.useEffect)(() => {
					u || c(Object(D.d)(t.author))
				}, [c, t.author, u]);
				const p = !u && Object(W.a)(null === (s = null == l ? void 0 : l.icon) || void 0 === s ? void 0 : s.url),
					b = Object(U.c)(null === (r = null == l ? void 0 : l.icon) || void 0 === r ? void 0 : r.url);
				return o.a.createElement("div", {
					className: G.a.media
				}, u ? o.a.createElement(F.b, {
					post: t,
					url: m,
					className: G.a.mediaThumbnail,
					removeLink: !0,
					containerClassName: G.a.mediaThumbnailContainer
				}) : null, !u && (null === (a = null == l ? void 0 : l.icon) || void 0 === a ? void 0 : a.url) && o.a.createElement("div", {
					className: G.a.userIconContainer
				}, o.a.createElement(B.a, {
					className: Object(x.a)({
						[G.a.snoovatarUserIcon]: p,
						[G.a.defaultUserIcon]: b
					}, G.a.userIcon),
					iconUrl: null === (i = null == l ? void 0 : l.icon) || void 0 === i ? void 0 : i.url,
					userName: l.name,
					wrapperClassName: G.a.userIconWrapper,
					isNSFW: !1
				})))
			};
			var K = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPost/index.m.less"),
				q = s.n(K);
			const Q = Object(_.a)(null);
			var J = Object(P.b)(Q(e => {
					let {
						post: t
					} = e;
					const s = Object(N.a)(),
						n = Object(S.a)(),
						r = Object(w.a)(),
						a = Object(k.x)(s) && !n;
					return o.a.createElement(f.a, {
						"data-testid": `promoted-user-post-${t.id}`,
						to: a ? Object(I.b)(t.permalink) : Object(y.a)(t.permalink, !1, r)
					}, o.a.createElement("div", {
						className: q.a.container
					}, o.a.createElement(L, {
						post: t
					}), o.a.createElement(H, {
						post: t
					})))
				})),
				Z = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPosts/index.m.less"),
				X = s.n(Z);
			const Y = e => {
				let {
					postIds: t
				} = e;
				const s = t.map(e => o.a.createElement(J, {
					postId: e,
					key: e
				}));
				return o.a.createElement("div", {
					className: X.a.container
				}, s)
			};
			var $ = s("./src/reddit/components/PromotedUserPostsAd/index.m.less"),
				ee = s.n($);
			const te = e => {
				let {
					post: t
				} = e;
				const s = Object(d.d)();
				if (!Object(d.e)(b) || !t.adPromotedUserPostIds || 0 === t.adPromotedUserPostIds.length) return null;
				const [n] = t.adPromotedUserPostIds;
				return o.a.createElement("div", {
					className: ee.a.container,
					onClick: () => s(Object(c.y)(t, l.a.Click))
				}, o.a.createElement(Y, {
					postIds: t.adPromotedUserPostIds
				}), o.a.createElement(j, {
					postId: n,
					className: ee.a.communityLink
				}))
			};

			function se(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? o.a.createElement(r.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * r.b - 2 * r.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : Object(i.B)(t) && Object(i.A)(t) ? o.a.createElement(te, {
					post: t
				}) : o.a.createElement(a.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR",
				SubscribeButton: "_2r87gmhJ9n0MsylKHkgDcp",
				subscribeButton: "_2r87gmhJ9n0MsylKHkgDcp",
				addModNote: "CUh9f8Zri7XfZRUI18jS5"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/selectors/moderatorPermissions.ts"),
				i = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/components/CCM/AddModNoteCTA/index.tsx"),
				c = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				m = s("./src/reddit/components/PostBadges/index.tsx"),
				u = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				h = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				x = s("./src/reddit/constants/posts.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				O = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/hooks/useClickSourceData.ts"),
				E = s("./src/reddit/models/Subreddit/index.ts"),
				C = s("./src/reddit/components/PostMeta/index.m.less"),
				j = s.n(C);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: C,
					isOverlay: y,
					isTopicPage: _,
					post: k,
					shouldShowSubscribeButton: P,
					subredditOrProfile: I,
					tooltipType: w
				} = e, S = !!_, N = Object(g.a)(), T = Object(r.e)(e => !!I && Object(a.i)(e, I.id));
				return o.a.createElement("div", {
					className: j.a.metaContainer
				}, !n && !k.isSponsored && I && o.a.createElement(c.a, {
					postId: k.id,
					subredditName: I.name
				}, o.a.createElement(b.a, {
					className: j.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: I.url,
						state: N
					}
				}, I.displayText)), I && I.isQuarantined && o.a.createElement(p.a, null), !n && !k.isSponsored && I && P && !C && o.a.createElement(h.a, {
					className: j.a.SubscribeButton,
					getEventFactory: e => Object(O.n)(k.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: I.name,
						type: Object(E.i)(I) ? x.a.PROFILE : x.a.SUBREDDIT
					},
					postId: k.id,
					size: f.d.XXS,
					small: !0
				}), !n && !k.isSponsored && o.a.createElement(v.b, null), !n && !k.isSponsored && o.a.createElement(l.h, {
					type: k.belongsTo.type,
					id: k.belongsTo.id
				}), o.a.createElement(u.g, {
					className: j.a.postTopMeta,
					flairStyleTemplate: t,
					post: k,
					tooltipType: w,
					isModWithUserNotesPermissions: T
				}), o.a.createElement(m.a, {
					displayText: I ? I.displayText : null,
					inSubredditOrProfile: !!n,
					post: k,
					tooltipType: w
				}), !S && o.a.createElement(i.a, {
					hideCta: s,
					thing: k,
					tooltipType: y ? u.f.Lightbox : void 0
				}), T && o.a.createElement(d.a, {
					postOrComment: k,
					className: j.a.addModNote
				}))
			}
		},
		"./src/reddit/components/PostPinnedHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_203iZ8LUuIrz_IJbiOAJDH",
				pinnedIcon: "_2xKvAjjyhpXElWBVqyWyml",
				metaText: "rewiG9XNj_xqkQDcyR88j"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, s) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo",
				allowPointerEvents: "_2iiIcja5xIjg-5sI4ECvcV",
				checkbox: "_25sIJZLIxTa3eolXDWieo5"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/PostLeftRail/index.tsx"),
				i = s("./src/reddit/components/VerticalVotes/index.tsx"),
				d = s("./src/reddit/controls/Checkbox/index.tsx"),
				c = s("./src/reddit/helpers/isPost.ts"),
				l = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				m = s("./src/reddit/components/PostRailAndVotes/index.m.less"),
				u = s.n(m);
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: n = !1,
					isCheckboxSelected: m = !1,
					isCountAnimShadowTestEnabled: p,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: h,
					redditStyle: x,
					isOverlay: f,
					isVoteCountAnimation: v,
					postId: O,
					shouldShowUpvoteRatioOnHover: g
				} = e, E = `upvote-button-${t.id}${f?"-overlay":""}`;
				return o.a.createElement(a.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: x
				}, n && o.a.createElement(d.a, {
					className: u.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), o.a.createElement(i.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: s,
					redditStyle: x,
					upvoteTooltipId: E,
					isVoteCountAnimation: v,
					isCountAnimShadowTestEnabled: p,
					postId: O,
					scoreClassName: Object(r.a)(u.a.score, {
						[u.a.allowPointerEvents]: g
					}),
					shouldShowUpvoteRatioOnHover: g
				}))
			}
		},
		"./src/reddit/components/PostTopLine/index.m.less": function(e, t, s) {
			e.exports = {
				everythingElseWrapper: "cZPZhMe-UCZ8htPodMyJ5",
				outboundLinkIcon: "_3z6z1xnp828wcarJXfzzjr",
				postBadges: "_2wFk1qX4e1cxk8Pkw1rAHk",
				postTopMeta: "nU4Je7n-eSXStTBAPMYt8",
				subredditIcon: "_1WX5Y5qFVBTdr6hCPpARDB",
				subredditIconWrapper: "_2dr_3pZUCk8KfJ-x0txT_l",
				container: "_14-YvdFiW5iVvfe5wdgmET",
				SubscribeButton: "_35dG7dsi4xKTT-_2MB74qq",
				subscribeButton: "_35dG7dsi4xKTT-_2MB74qq",
				addModNote: "_2ELu43PpvGnJxizg4n_k9E"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/components/CCM/AddModNoteCTA/index.tsx"),
				l = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				m = s("./src/reddit/components/NotificationButton/index.tsx"),
				u = s("./src/reddit/components/PostBadges/index.tsx"),
				p = s("./src/reddit/components/PostTopMeta/index.tsx"),
				b = s("./src/reddit/components/SubredditIcon/index.tsx"),
				h = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				x = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				f = s("./src/reddit/constants/posts.ts"),
				v = s("./src/reddit/controls/Button/index.tsx"),
				O = s("./src/reddit/controls/OutboundLink/index.tsx"),
				g = s("./src/reddit/helpers/trackers/post.ts"),
				E = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				C = s("./src/reddit/models/Media/index.ts"),
				j = s("./src/reddit/models/Subreddit/index.ts"),
				y = s("./src/reddit/selectors/experiments/shredditParity.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/components/PostTopLine/index.m.less"),
				P = s.n(k);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: s,
					forceOpenInNewTab: o,
					hideNSFWPref: k,
					hostPostData: I,
					iconClassName: w,
					inSubredditOrProfile: S,
					isCommentsPage: N,
					isCompactPinnedPost: T,
					isCurrentUserProfilePost: M,
					isModQueuePage: R,
					isModWithUserNotesPermissions: L,
					isOverlay: A,
					isTopicPage: D,
					listingKey: F,
					post: B,
					shouldShowSubscribeButton: U,
					showCornerOutboundLink: W,
					showSubreddit: V,
					showSubredditIcon: z,
					subredditOrProfile: G,
					isFollowed: H,
					shouldShowFollowButton: K,
					onFollowPostClick: q,
					onSubscribed: Q
				} = e;
				const J = D,
					Z = G && Object(j.i)(G),
					X = Object(a.e)(e => {
						if (!Z) return !0;
						const t = Object(_.Jb)(e, B.author || "");
						return !t || t.enableFollowers
					}),
					Y = Object(a.e)(y.a);
				return r.a.createElement("div", {
					className: Object(i.a)(P.a.container, t)
				}, V && G && r.a.createElement("div", {
					className: P.a.subredditIconWrapper
				}, r.a.createElement(h.a, {
					"data-click-id": "subreddit",
					to: G.url
				}, z && r.a.createElement(b.b, {
					className: Object(i.a)(P.a.subredditIcon, w),
					shouldHideNsfwIcon: k,
					subredditOrProfile: G
				}))), r.a.createElement("div", {
					className: P.a.everythingElseWrapper
				}, V && r.a.createElement(l.h, {
					type: B.belongsTo.type,
					id: B.belongsTo.id
				}), r.a.createElement(p.g, {
					className: P.a.postTopMeta,
					forceOpenInNewTab: o,
					flairStyleTemplate: s,
					isModWithUserNotesPermissions: L,
					tooltipType: A ? p.f.Lightbox : void 0,
					post: B,
					showSub: V,
					subredditOrProfile: G
				}), r.a.createElement(u.a, {
					className: P.a.postBadges,
					displayText: G ? G.displayText : null,
					inSubredditOrProfile: S,
					isCompactPinnedPost: T,
					post: B,
					tooltipType: A ? p.f.Lightbox : void 0
				}), !J && r.a.createElement(d.a, {
					isPostDetail: N,
					thing: B,
					tooltipType: A ? p.f.Lightbox : void 0
				}), L && r.a.createElement(c.a, {
					postOrComment: B,
					className: P.a.addModNote
				})), G && X && V && U && !M && r.a.createElement(x.a, {
					className: P.a.SubscribeButton,
					getEventFactory: e => (Q && !e && Q(), Object(g.n)(B.id, e ? "unsubscribe" : "subscribe", "post", F, I)),
					identifier: {
						name: G.name,
						type: Z ? f.a.PROFILE : f.a.SUBREDDIT
					},
					postId: B.id,
					size: v.d.XS,
					priority: Y ? v.c.Secondary : void 0,
					isShredditParityEnabled: Y
				}), W && r.a.createElement(O.b, {
					isSponsored: B.isSponsored,
					postId: B.id,
					href: Object(C.E)(B),
					source: B.source
				}, r.a.createElement(E.a, {
					className: P.a.outboundLinkIcon
				})), K && X && r.a.createElement(m.a, {
					isFilled: !!H,
					onClick: q,
					hasTooltip: !0,
					tooltipText: n.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}))
			}
		},
		"./src/reddit/components/ProfilePinnedPosts/Placeholder/Education.m.less": function(e, t, s) {
			e.exports = {
				container: "_1j2O3iNM1HoiXK7B2dmp7b",
				description: "_1izt0pKGHoMq6qSvK4cAIn",
				gotIt: "_3uIlo4RbXf8gjMYw0yP_Jj"
			}
		},
		"./src/reddit/components/ProfilePinnedPosts/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3aof1UDvKACEvKW4EMZ299",
				pin: "_2KRDWSbw-bvKgY9GSzhGAx",
				title: "_3mWek_rCoNZ3KHXxqDuM88"
			}
		},
		"./src/reddit/components/ProfilePinnedPosts/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_274hVfCVJjK6-eGJKLQjgQ",
				item: "fuCmx3adjKY3tXA4Zfx2p",
				title: "jY9rAXGpPzcDUv1AnLGAD"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FLO1Nek2YpspMr4ozmJCU"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less": function(e, t, s) {
			e.exports = {
				link: "_2sOYhKsA_6kr-jal5uxghX",
				subredditName: "Y6X1Z6XpPZ42HHxG6iPUg",
				subredditIcon: "_3KW4JGkWWYds_QkhJav3lV"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less": function(e, t, s) {
			e.exports = {
				postInformation: "_1ykNwWxnTMBSi_9FpI1aS9",
				interactions: "_17rAVV4Z_xjSbW2Dnzd6GG",
				title: "_1hY0DyJaLGV23_ZN7lGZLl"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less": function(e, t, s) {
			e.exports = {
				media: "N08zT4c39PJ7xCbcR2dhy",
				mediaThumbnail: "_9U9c34f1Ov1YZrnCNbH_e",
				mediaThumbnailContainer: "OBfGp3Y3pfXQbQtgTek4B",
				userIconContainer: "_1Xl-Y2ofyQhQDptuCNW3gg",
				userIconWrapper: "F_vBi78s0CDuAiX2g82hg",
				userIcon: "_3Ba5v_JdXj-iGcinxrYkz6",
				defaultUserIcon: "_2Jv4FE0k7dgPuiylbWWXJg",
				snoovatarUserIcon: "X3oFujh1WDeA5ZdMgFl_h"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPosts/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2trYWJQru0_I7CsxK5kt7W"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/index.m.less": function(e, t, s) {
			e.exports = {
				container: "sMTOozCI4j186nHWW2jp4",
				communityLink: "_1iVqrl2JSOJGHlr6UhojWd"
			}
		},
		"./src/reddit/components/RelatedCommunitiesRecommendations/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return q
			})), s.d(t, "b", (function() {
				return Q
			}));
			var n, o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/hooks/useTracking.ts"),
				c = s("./src/reddit/icons/svgs/Close/index.tsx"),
				l = s("./node_modules/react-redux/es/index.js"),
				m = s("./src/lib/prettyPrintNumber/index.ts"),
				u = s("./src/reddit/components/SubredditIcon/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/constants/tracking.ts"),
				x = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.CLOSE = "close", e.SHOW_MORE = "show_more", e.TITLE_SUBREDDIT = "title_subreddit", e.RECOMMENDATION_MODULE = "recommendation_module", e.SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe"
			}(n || (n = {}));
			const f = "related_community_recommendations_v1",
				v = (e, t) => {
					let {
						postId: s,
						subredditId: n,
						variant: o,
						numberItems: r,
						seenItems: a,
						seen: i = !0,
						modelVersion: d = f,
						pageType: c
					} = e;
					return {
						...x.o(t),
						post: s ? x.K(t, s) : void 0,
						source: "cdd_discovery_unit",
						actionInfo: {
							pageType: c,
							reason: n
						},
						discoveryUnit: {
							id: "related_communities_recommendations",
							name: d,
							type: o
						},
						visibility: {
							number_items: r,
							number_seen_items: a.length,
							seen_items: a,
							seen: i
						}
					}
				};
			var O = s("./src/reddit/constants/experiments.ts"),
				g = s("./src/reddit/controls/InternalLink/index.tsx"),
				E = s("./src/lib/initializeClient/installReducer.ts"),
				C = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/actions/relatedCommunitiesRecommendations/constants.ts"));
			const j = {
				subreddits: [],
				error: null,
				loaded: !1,
				pending: !1
			};
			var y = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case C.b: {
							const {
								subredditId: s
							} = t.payload;
							return {
								...e,
								[s]: {
									...e[s],
									pending: !0
								}
							}
						}
						case C.c: {
							const {
								subredditId: s,
								subreddits: n = {},
								modelVersion: o
							} = t.payload;
							return {
								...e,
								[s]: {
									...e[s],
									modelVersion: o,
									subreddits: Object.keys(n),
									error: null,
									loaded: !0,
									pending: !1
								}
							}
						}
						case C.a: {
							const {
								subredditId: s
							} = t.payload;
							return {
								...e,
								[s]: {
									...e[s],
									error: t.payload,
									loaded: !0,
									pending: !1
								}
							}
						}
						default:
							return e
					}
				},
				_ = s("./src/reddit/selectors/subreddit.ts"),
				k = s("./node_modules/reselect/es/index.js");
			Object(E.a)({
				features: {
					relatedCommunitiesRecommendations: y
				}
			});
			const P = Object(k.a)([(e, t) => {
					var s, n, o;
					return null !== (o = null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.relatedCommunitiesRecommendations) || void 0 === n ? void 0 : n[t]) && void 0 !== o ? o : j
				}], e => e),
				I = Object(k.a)([(e, t) => P(e, t)], e => {
					var t;
					return null !== (t = null == e ? void 0 : e.subreddits) && void 0 !== t ? t : []
				}),
				w = Object(k.a)([e => e, _.fb], (e, t) => t.map(t => ({
					...t,
					...Object(_.y)(e, {
						subredditId: t.id
					})
				})));
			var S = s("./src/config.ts");
			const {
				fbt: N
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var T, M = e => {
				let {
					seed: t
				} = e;
				const s = Math.min(3 * (t + 1), 37),
					n = [s, s + 1, s + 2];
				return a.a.createElement("div", {
					"data-testid": "avatar-group"
				}, null == n ? void 0 : n.map((e, t) => a.a.createElement("img", {
					key: e,
					className: "w-[16px] h-[20px] ml-[-4px] first:ml-0",
					src: `${S.a.assetPath}/img/talk/avatars/${e}.png`,
					alt: N._("Online members", null, {
						hk: "3uJPWb"
					})
				})))
			};

			function R(e) {
				switch (e) {
					case O.Bf.Minimalist:
					case O.zf.Minimalist:
					case O.Af.Minimalist:
						return T.MINIMALIST;
					case O.Bf.HotnessSignals:
					case O.zf.SocialSignals:
					case O.Af.SocialSignals:
						return T.SIGNALS;
					case O.Bf.Description:
					case O.zf.Description:
					case O.Af.Description:
						return T.DESCRIPTION
				}
				return T.MINIMALIST
			}! function(e) {
				e[e.MINIMALIST = 0] = "MINIMALIST", e[e.SIGNALS = 1] = "SIGNALS", e[e.DESCRIPTION = 2] = "DESCRIPTION"
			}(T || (T = {}));
			const L = e => {
				let {
					recommendedCommunities: t,
					numberOfVisibleItems: s,
					variant: r,
					postId: c,
					originalSubredditId: f,
					pageType: O,
					columnLayout: E = "single",
					dismissCallback: C
				} = e;
				const j = Object(d.a)(),
					y = Object(l.e)(e => w(e, {
						subredditIds: t
					})),
					_ = {
						postId: c,
						subredditId: f,
						variant: r,
						numberItems: t.length,
						seenItems: t.slice(0, s),
						pageType: O
					},
					k = R(r);
				return a.a.createElement("ul", {
					className: `pb-[8px] ${"double"===E&&"grid gap-4 grid-cols-2"}`,
					"data-testid": "recommended-community-list"
				}, y.map((e, t) => {
					let {
						id: r,
						subscribers: d,
						accountsActive: c,
						icon: l,
						communityIcon: f,
						name: O,
						url: y,
						displayText: P,
						publicDescription: I
					} = e;
					if (t >= s) return null;
					const w = o.fbt._({
							"*": "{Number of subscribers} members",
							_1: "{Number of subscribers} member"
						}, [o.fbt._param("Number of subscribers", Object(m.b)(d)), o.fbt._plural(d)], {
							hk: "3fAm5T"
						}),
						S = c ? `• ${o.fbt._("{Number of subscribers online} Online",[o.fbt._param("Number of subscribers online",Object(m.b)(c))],{hk:"4s9dx5"})}` : "",
						N = () => {
							C && C(), j(((e, t, s) => o => ({
								...v(e, o),
								subreddit: x.mb(o, t),
								action: h.c.CLICK,
								noun: n.TITLE_SUBREDDIT,
								actionInfo: {
									...v(e, o).actionInfo,
									position: s
								}
							}))(_, r, t))
						};
					return a.a.createElement("li", {
						key: r,
						className: "px-[16px] py-[8px] flex items-start"
					}, a.a.createElement("div", {
						onClick: N
					}, a.a.createElement(u.b, {
						iconUrl: (null == l ? void 0 : l.url) || f,
						className: "block !w-[32px] !h-[32px] rounded-full !text-[32px] !leading-none",
						linkTo: y || `/${P}`
					})), a.a.createElement("div", {
						className: `${"single"===E&&"truncate"} flex flex-col w-100`
					}, a.a.createElement("div", {
						className: "flex items-start"
					}, a.a.createElement("div", {
						className: "ml-[8px] min-w-0"
					}, a.a.createElement(g.default, {
						className: "text-[14px] leading-[16px] font-semibold text-neutral-content-strong truncate",
						to: y || `/${P}`,
						onClick: N
					}, P, a.a.createElement("div", {
						className: "mt-[4px] text-[12px] leading-[14px] font-normal text-neutral-content-weak truncate"
					}, k === T.MINIMALIST && w, (k === T.SIGNALS || k === T.DESCRIPTION) && a.a.createElement("div", {
						className: "flex gap-x-xs justify-start items-center"
					}, a.a.createElement(M, {
						seed: t
					}), a.a.createElement("div", null, `${w} ${S}`))))), a.a.createElement(p.a, {
						doNotHideOtherSubscribeButtons: !0,
						className: "ml-auto mt-[2px]",
						postId: r,
						identifier: {
							name: O,
							type: b.a.SUBREDDIT
						},
						size: i.d.XS,
						getEventFactory: e => e ? ((e, t, s) => o => ({
							...v(e, o),
							subreddit: x.mb(o, t),
							action: h.c.CLICK,
							noun: n.SUBREDDIT_UNSUBSCRIBE,
							actionInfo: {
								...v(e, o).actionInfo,
								position: s
							}
						}))(_, r, t) : ((e, t, s) => o => ({
							...v(e, o),
							subreddit: x.mb(o, t),
							action: h.c.CLICK,
							noun: n.SUBREDDIT_SUBSCRIBE,
							actionInfo: {
								...v(e, o).actionInfo,
								position: s
							}
						}))(_, r, t)
					})), k === T.DESCRIPTION && a.a.createElement("div", {
						className: `pt-[4px] ml-[8px] pr-sm text-[12px] leading-[14px] font-normal text-neutral-content-weak ${"double"===E?"[-webkit-line-clamp:3] [text-overflow:ellipsis] [display:-webkit-box] [-webkit-box-orient:vertical] max-h-[4.143em] overflow-hidden":"truncate"}`
					}, a.a.createElement(g.default, {
						to: y || `/${P}`,
						onClick: N
					}, I))))
				}))
			};
			var A = s("./src/lib/makeActionCreator/index.ts"),
				D = s("./src/lib/makeGqlRequest/index.ts"),
				F = s("./src/lib/makeRequest/index.ts"),
				B = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				U = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				W = s("./src/redditGQL/operations/GetRelatedCommunityRecommendations.json");
			const V = async (e, t) => {
				const s = await Object(D.a)(e, {
					...W,
					variables: t
				});
				if (!Object(F.c)(s)) throw new Error("Encountered an error while fetching live discovery content");
				return (e => {
					var t, s, n, o;
					const r = {
						modelVersion: null !== (s = null === (t = null == e ? void 0 : e.relatedCommunityRecommendations) || void 0 === t ? void 0 : t.modelVersion) && void 0 !== s ? s : "related_community_recommendations_v1",
						aboutInfo: {},
						models: {}
					};
					return null === (o = null === (n = null == e ? void 0 : e.relatedCommunityRecommendations) || void 0 === n ? void 0 : n.recommendations) || void 0 === o ? void 0 : o.reduce((e, t) => e = {
						...e,
						models: {
							...e.models,
							[t.id]: Object(U.a)(t)
						},
						aboutInfo: {
							...e.aboutInfo,
							...Object(B.a)(t)
						}
					}, r)
				})(s.body.data)
			};
			Object(E.a)({
				features: {
					relatedCommunitiesRecommendations: y
				}
			});
			const z = Object(A.a)(C.b),
				G = Object(A.a)(C.c),
				H = Object(A.a)(C.a),
				K = e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n;
					t(z({
						subredditId: e
					}));
					try {
						const s = await V(o(), {
							subredditId: e
						});
						t(G({
							subredditId: e,
							modelVersion: s.modelVersion,
							subreddits: s.models,
							subredditAboutInfo: s.aboutInfo
						}))
					} catch (r) {
						t(H({
							subredditId: e,
							ApiError: r
						}))
					}
				};
			var q;
			! function(e) {
				e.Home = "home", e.Profile = "profile", e.Community = "community"
			}(q || (q = {}));
			const Q = e => {
				let {
					subredditDisplayText: t,
					variant: s,
					postId: m,
					subredditId: u,
					onDismiss: p,
					pageType: b
				} = e;
				const x = R(s),
					f = function(e) {
						let {
							pageType: t,
							activeUIVariant: s
						} = e;
						switch (t) {
							case q.Profile:
							case q.Community:
								return s === T.MINIMALIST ? "double" : "single";
							case q.Home:
							default:
								return "single"
						}
					}({
						pageType: b,
						activeUIVariant: x
					}),
					O = function(e, t) {
						return "double" === t ? e === T.DESCRIPTION ? 2 : 4 : 3
					}(x, f),
					[g, E] = Object(r.useState)(O),
					C = Object(d.a)(),
					{
						recommendations: j,
						fetchPending: y,
						recommendationsLoaded: _,
						fetchError: k,
						modelVersion: w
					} = function(e) {
						let {
							subredditId: t
						} = e;
						const s = Object(l.d)(),
							n = Object(l.e)(e => I(e, t)),
							{
								pending: o,
								loaded: a,
								error: i,
								modelVersion: d
							} = Object(l.e)(e => P(e, t)),
							c = !a && !o;
						return Object(r.useEffect)(() => {
							c && s(K(t))
						}, [s, t, c]), {
							recommendations: n,
							fetchPending: o,
							recommendationsLoaded: a,
							fetchError: i,
							modelVersion: d
						}
					}({
						subredditId: u
					}),
					S = g < (j.length || 0),
					N = Object(r.useMemo)(() => !_ || y ? null : k || j.length <= 0 ? {
						modelVersion: w,
						seen: !1,
						postId: m,
						subredditId: u,
						variant: s,
						numberItems: 0,
						seenItems: [],
						pageType: b
					} : {
						modelVersion: w,
						seen: !0,
						postId: m,
						subredditId: u,
						variant: s,
						numberItems: j.length,
						seenItems: j.slice(0, O),
						pageType: b
					}, [_, y, k, j, w, m, u, s, O, b]);
				if (Object(r.useEffect)(() => {
						C && N && C((e => t => ({
							...v(e, t),
							action: h.c.VIEW,
							noun: n.RECOMMENDATION_MODULE
						}))(N))
					}, [C, N]), !_ || j.length <= 0) return null;
				return a.a.createElement("div", {
					className: "bg-[color:var(--newCommunityTheme-body)] mb-[10px] border border-solid border-[color:var(--newCommunityTheme-postLine)] rounded-[4px]"
				}, a.a.createElement("div", {
					className: "px-[16px] py-[8px] flex items-center"
				}, a.a.createElement("h3", {
					className: "text-[14px] leading-[20px] font-semibold text-neutral-content-strong truncate min-w-0"
				}, o.fbt._("Similar to {subreddit display text}", [o.fbt._param("subreddit display text", t)], {
					hk: "2ZdEdB"
				})), a.a.createElement("button", {
					className: "ml-auto w-[16px] h-[16px] inline-block",
					"aria-label": o.fbt._("Hide Recommended Communities", null, {
						hk: "1D8cvx"
					}),
					onClick: () => {
						p(), N && C((e => t => ({
							...v(e, t),
							action: h.c.CLICK,
							noun: n.CLOSE
						}))({
							...N,
							seenItems: null == j ? void 0 : j.slice(0, g)
						}))
					}
				}, a.a.createElement(c.a, {
					className: "block w-full h-full text-neutral-content-weak",
					fill: "currentColor"
				}))), a.a.createElement(a.a.Fragment, null, a.a.createElement(L, {
					recommendedCommunities: j,
					numberOfVisibleItems: g,
					postId: m,
					originalSubredditId: u,
					variant: s,
					pageType: b,
					columnLayout: f,
					dismissCallback: p
				}), S && a.a.createElement("div", {
					className: "flex items-center justify-center pb-[8px]"
				}, a.a.createElement(i.a, {
					kind: i.b.Button,
					priority: i.c.Tertiary,
					onClick: () => {
						const e = g + O;
						E(e), C((e => t => ({
							...v(e, t),
							action: h.c.CLICK,
							noun: n.SHOW_MORE
						}))({
							...N,
							seenItems: null == j ? void 0 : j.slice(0, e)
						}))
					}
				}, o.fbt._("Show more", null, {
					hk: "2kAGl6"
				})))))
			}
		},
		"./src/reddit/components/Reports/SnoozableReport/index.m.less": function(e, t, s) {
			e.exports = {
				ReportContainer: "rcWKqpRVFFbdiL-fFemgZ",
				reportContainer: "rcWKqpRVFFbdiL-fFemgZ",
				DropdownLabelContainer: "_3rsZ2ZF99dXi8CxIvlUnna",
				dropdownLabelContainer: "_3rsZ2ZF99dXi8CxIvlUnna",
				DropdownLabel: "_1NxoOUgmzKH04lLU9O6O6z",
				dropdownLabel: "_1NxoOUgmzKH04lLU9O6O6z",
				mActive: "_1mwLBQ-SAEJSG4hvYZzPUO",
				SnoozeButton: "_1QMSuJL3vFpEsGhWHllIQ5",
				snoozeButton: "_1QMSuJL3vFpEsGhWHllIQ5",
				SnoozeButtonContent: "tGdUIanRrFFgVZrnBwdl5",
				snoozeButtonContent: "tGdUIanRrFFgVZrnBwdl5"
			}
		},
		"./src/reddit/components/Reports/SnoozableReport/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/actions/comment/moderation.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/index.tsx"),
				h = s("./src/reddit/controls/Dropdown/Row.tsx"),
				x = s("./src/reddit/helpers/isComment.ts"),
				f = s("./src/reddit/helpers/trackers/modTools.ts"),
				v = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				O = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				g = s("./src/reddit/icons/svgs/Clock/index.tsx"),
				E = s("./src/reddit/icons/svgs/Undo/index.tsx"),
				C = s("./src/reddit/selectors/tooltip.ts"),
				j = s("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				y = s.n(j);
			const {
				fbt: _
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = (e, t) => `SnoozableReport--${t}--${e}`, P = Object(r.b)(() => Object(a.c)({
				isDropdownOpen: (e, t) => Object(C.b)(k(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(m.h)({
					tooltipId: k(t.reason, t.reportedThingId)
				})),
				toggleSnooze: s => {
					Object(x.a)(t.reportedThingId) ? e(Object(c.h)(t.reportedThingId, t.reason, s)) : e(Object(l.fb)(t.reportedThingId, t.reason, s))
				}
			})), I = Object(u.a)(b.a);
			class w extends o.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onSnoozeButtonClick = () => {
						const e = this.props.isSnoozed ? d.kc.None : d.kc.Snoozed;
						this.props.toggleSnooze(e);
						const t = Object(f.p)(Object(x.a)(this.props.reportedThingId), this.props.isSnoozed, this.props.reportedThingId, this.props.reason);
						this.props.sendEvent(t)
					}
				}
				render() {
					const {
						reason: e,
						amount: t,
						reportedThingId: s,
						openDropdown: n,
						isDropdownOpen: r,
						isSnoozed: a,
						useNewFormat: d,
						className: c,
						dropdownClassName: l,
						iconClassName: m
					} = this.props, u = k(e, s);
					return o.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, o.a.createElement(h.b, {
						id: u,
						className: Object(i.a)(y.a.DropdownLabelContainer, c),
						onClick: n
					}, o.a.createElement("label", {
						htmlFor: u,
						className: y.a.DropdownLabel
					}, a ? _._("Reporter snoozed", null, {
						hk: "1rCWql"
					}) : d ? `${e} (${t})` : `${t}: ${e}`, r ? o.a.createElement(O.a, null) : o.a.createElement(v.a, null))), o.a.createElement(I, {
						isOpen: r,
						tooltipTarget: this.tooltipTarget,
						renderContentsHidden: !0,
						isOverlay: !1
					}, o.a.createElement("button", {
						className: Object(i.a)(y.a.SnoozeButton, l),
						onClick: this.onSnoozeButtonClick
					}, o.a.createElement("div", {
						className: y.a.SnoozeButtonContent
					}, a ? o.a.createElement(o.a.Fragment, null, o.a.createElement(E.a, {
						className: m
					}), _._("Undo snoozing reports from this user", null, {
						hk: "1CloXT"
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(g.a, {
						className: m
					}), _._("Snooze reports from this user for 7 days", null, {
						hk: "1i0sOW"
					}))))))
				}
			}
			t.a = P(Object(p.c)(w))
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/tooltip.ts"),
				i = s("./src/reddit/models/Vote/index.ts"),
				d = s("./src/reddit/contexts/InsideOverlay.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/contexts/Post/index.tsx"),
				m = s("./src/reddit/selectors/activeModalId.ts"),
				u = s("./src/reddit/selectors/chatPost.ts"),
				p = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				b = s("./src/reddit/selectors/moderatorPermissions.ts"),
				h = s("./src/reddit/selectors/postFlair.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				f = s("./src/reddit/selectors/user.ts");
			const v = {
					autoplayPref: f.d,
					activeModalId: m.a,
					crosspost: x.d,
					isActive: x.j,
					isChatPost: u.d,
					isCurrentUserProfilePost: x.l,
					isExpanded: x.m,
					isLoggedIn: f.S,
					moderatorPermissions: b.m,
					modModeEnabled: c.W,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: h.a,
					showMedia: c.t,
					flairStyleTemplate: c.Y,
					showCTAExperimentDesign: p.a
				},
				O = Object(n.b)(() => Object(o.c)(v), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const n = t === i.a.upvoted ? Object(r.ib)(s) : Object(r.v)(s);
							e(n)
						},
						onIgnoreReports: () => e(Object(r.eb)(s)),
						onOpenReportsDropdown: t => e(Object(a.h)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: e => e.title
				}));
			t.a = e => Object(l.b)(O(Object(d.b)(e)))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return k
			})), s.d(t, "b", (function() {
				return I
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/actions/ads/index.ts"),
				i = s("./src/reddit/actions/focusedVerticals/index.ts"),
				d = s("./src/reddit/actions/gold/tooltips.ts"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				m = s("./src/reddit/actions/survey/index.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				x = s("./src/reddit/components/PostList/Placeholder.tsx"),
				f = s("./src/reddit/featureFlags/index.ts"),
				v = s("./src/reddit/selectors/experiments/survey.ts"),
				O = s("./src/reddit/selectors/listings.ts"),
				g = s("./src/reddit/selectors/posts.ts"),
				E = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/selectors/tracking.ts"),
				j = s("./src/reddit/selectors/user.ts");

			function y() {
				return Object(p.v)({
					currentProfileName: p.j,
					isCommentPermalink: p.x,
					isCommentsPage: p.y,
					isFrontpage: p.B,
					isProfilePostListing: p.N,
					isTopicPage: p.T,
					pageLayer: e => e
				})
			}
			const _ = y(),
				k = {
					apiError: O.c,
					apiPending: O.d,
					measureScrollFPS: f.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.U)(e, t),
					loadMore: O.g,
					postsById: g.S,
					postIds: Object(r.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: o
						} = t;
						return Object(g.C)(e, s, n, o)
					}),
					subredditsById: E.eb,
					viewportDataLoaded: C.b,
					pageReferrer: p.X,
					postListPlaceholderComponent: () => x.a,
					isNpsScrollSurveyEnabled: v.e,
					isLoggedIn: j.S
				},
				P = Object(o.c)(k),
				I = e => ({
					onBottomViewed: (t, s) => e(l.c(t, s)),
					onFirstPostChanged: t => e(Object(d.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(a.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(i.a)({
							lastLoadedEnv: "server"
						})), e(c.K(t))
					},
					fireAdPixelsOfType: (t, s) => {
						e(c.y(t, s))
					},
					trackOnPostEnteredViewport: (t, s, n, o) => {
						e(c.M(t, n, o))
					},
					trackOnPostExitedViewport: (t, s, n, o) => {
						e(c.N(t, n, o))
					},
					showModalOnScroll: () => e(c.ab()),
					surveyTriggerScrollCounted: () => e(Object(m.m)())
				}),
				w = e => Object(b.b)({
					...e
				}),
				S = (e, t, s, n) => {
					const {
						listingKey: o,
						hostPostData: r,
						listingBelowVariant: a
					} = n;
					return Object(h.n)(e, t, "post", o, r, a, void 0)
				},
				N = Object(n.b)(P, I, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: w,
					postClickEventFactory: S
				}));
			t.a = e => Object(u.c)(_(N(e)))
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/postFlair.ts"),
				i = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				m = s("./src/reddit/selectors/moderatorPermissions.ts"),
				u = s("./src/reddit/selectors/postFlair.ts"),
				p = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(n.b)(() => Object(o.c)({
				activeModalId: l.a,
				autoplayPref: b.d,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				flairStyleTemplate: c.Y,
				hideNSFWPref: b.H,
				isActive: p.j,
				moderatorPermissions: m.m,
				modModeEnabled: c.W,
				showEditFlair: u.a
			}), (e, t) => {
				let {
					postId: s
				} = t;
				return {
					dispatchFlairChanged: t => {
						let {
							post: s,
							previewFlair: n,
							selectedTemplateId: o
						} = t;
						return e(Object(a.h)({
							post: s,
							previewFlair: n,
							selectedTemplateId: o
						}))
					},
					handleVote: t => {
						const n = t === d.a.upvoted ? Object(r.ib)(s) : Object(r.v)(s);
						e(n)
					},
					onIgnoreReports: () => e(Object(r.eb)(s)),
					onOpenReportsDropdown: t => e(Object(i.h)({
						tooltipId: t
					}))
				}
			}, (e, t, s) => ({
				...s,
				...e,
				...t,
				onFlairChanged: e => {
					let {
						previewFlair: n,
						selectedTemplateId: o
					} = e;
					return t.dispatchFlairChanged({
						post: s.post,
						previewFlair: n,
						selectedTemplateId: o
					})
				}
			}), {
				forwardRef: !0
			});
			t.a = h
		},
		"./src/reddit/constants/gold.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "d", (function() {
				return r
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "f", (function() {
				return i
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "i", (function() {
				return c
			})), s.d(t, "h", (function() {
				return l
			})), s.d(t, "g", (function() {
				return m
			}));
			const n = "ModerationPage--Modal--AddAward",
				o = "ModerationPage--Modal--DeleteAwardConfirmation",
				r = 20,
				a = 4,
				i = 1e4,
				d = .2,
				c = .1,
				l = .1,
				m = 500
		},
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = o.a.createContext(() => () => {})
		},
		"./src/reddit/helpers/graphql/normalizeModActivityFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const o = e => {
				const {
					moderation: t,
					...s
				} = e, {
					lastModAction: o,
					activeModerators: r
				} = (null == t ? void 0 : t.modActivitySummary) || {}, a = [], i = {};
				null == r || r.edges.map(e => {
					if (!(null == e ? void 0 : e.node)) return;
					const {
						lastModAction: t,
						moderator: s
					} = e.node;
					if (!s) return;
					const n = null == s ? void 0 : s.id;
					n && (a.push(n), i[n] || (i[n] = {
						info: {},
						lastModAction: {}
					}), i[n].info = s, i[n].lastModAction = {
						...t
					})
				});
				const d = {
					lastModAction: o,
					activeMods: a
				};
				return {
					subreddit: Object(n.a)(s),
					summary: {
						sub: d,
						mods: i
					}
				}
			}
		},
		"./src/reddit/helpers/search/renderMedia.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/PostMedia/index.tsx");
			const a = (e, t, s, n, r, a) => n ? e.crosspostRootId ? o.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, i(e, s, r, a)) : i(e, s, r, a) : null,
				i = (e, t, s, n) => o.a.createElement(r.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: n,
					isListing: !0,
					isNotCardView: !0,
					post: e,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					shouldShowGalleryTileOption: s,
					showCentered: !0,
					showFull: !0
				})
		},
		"./src/reddit/helpers/trackers/creatorStats.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return i
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "a", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			}));
			var n = s("./src/reddit/components/CreatorStats/helpers.ts"),
				o = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const a = e => {
					switch (e) {
						case n.b.Available:
							return "insights_shown";
						case n.b.NotAvailableYet:
							return "not_enough_views";
						case n.b.NotAvailable:
							return "post_too_old";
						case n.b.Expired:
							return "insights_expired";
						default:
							return ""
					}
				},
				i = (e, t) => s => ({
					...Object(r.o)(s),
					action: o.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(r.lb)(s),
					post: Object(r.K)(s, e),
					userSubreddit: Object(r.ub)(s),
					actionInfo: Object(r.d)(s, {
						reason: a(t)
					})
				}),
				d = (e, t) => s => ({
					...Object(r.o)(s),
					action: o.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(r.K)(s, t),
					subreddit: Object(r.lb)(s),
					userSubreddit: Object(r.ub)(s)
				}),
				c = e => {
					switch (e) {
						case n.b.Available:
							return "stats";
						case n.b.NotAvailableYet:
							return "not_enough_views";
						case n.b.NotAvailable:
						case n.b.Expired:
							return "no_data";
						case n.b.Quarantined:
							return "quarantined";
						default:
							return ""
					}
				},
				l = e => t => ({
					...Object(r.o)(t),
					action: o.c.CLICK,
					noun: "post_stats",
					source: "post",
					actionInfo: Object(r.d)(t, {
						pageType: "profile"
					}),
					post: Object(r.K)(t, e, void 0, 0),
					profile: Object(r.T)(t)
				}),
				m = (e, t, s) => n => ({
					...Object(r.o)(n),
					action: o.c.LOAD,
					noun: "insights",
					source: "post_stats",
					actionInfo: Object(r.d)(n, {
						reason: c(t)
					}),
					post: Object(r.K)(n, e, void 0, s)
				}),
				u = (e, t, s, n, a, i) => d => ({
					...Object(r.o)(d),
					action: o.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(r.d)(d, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(r.K)(d, e, void 0, i),
					subreddit: Object(r.lb)(d),
					outbound: {
						postId: s,
						url: t,
						subredditId: n,
						subredditName: a
					}
				}),
				p = (e, t, s) => n => ({
					...Object(r.o)(n),
					action: o.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(r.d)(n, {
						pageType: "post_stats",
						reason: c(t)
					}),
					post: Object(r.K)(n, e, void 0, s),
					subreddit: Object(r.lb)(n)
				})
		},
		"./src/reddit/helpers/trackers/marketplace/display-collectibles.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				o = s("./src/reddit/helpers/trackers/snoovatar.ts");
			const r = e => {
				let {
					sendEvent: t,
					user: s,
					pageType: r,
					isDisplayCollectiblesEnabled: a
				} = e;
				const i = Object(n.b)(s.accountIcon);
				a && i || t(Object(o.m)({
					user: s,
					pageType: r,
					userHasNft: i
				}))
			}
		},
		"./src/reddit/helpers/trackers/modListing.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return o
			})), s.d(t, "f", (function() {
				return r
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "e", (function() {
				return c
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const o = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "hide_subreddit"
				}),
				r = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "unhide_subreddit"
				}),
				a = e => t => ({
					source: "r_mod",
					action: "click",
					noun: e ? "unfiltered_subreddits" : "filtered_subreddits"
				}),
				i = (e, t) => s => ({
					source: "moderator",
					action: "view",
					noun: "activemod_details",
					...Object(n.o)(s),
					actionInfo: {
						pageType: "moderation_pages_modqueue",
						paneName: e ? "general_queue" : "community"
					},
					subreddit: {
						name: t.toLowerCase(),
						...Object(n.nb)(s, t)
					}
				}),
				d = (e, t, s) => o => ({
					source: "moderator",
					action: "click",
					noun: "subreddit_filter",
					...Object(n.o)(o),
					actionInfo: {
						pageType: "moderation_pages_modqueue",
						paneName: s ? "activity_card" : "queue_filters",
						reason: e ? "active" : "inactive"
					},
					subreddit: {
						name: t.toLowerCase(),
						...Object(n.nb)(o, t)
					}
				}),
				c = (e, t, s, o) => r => ({
					source: "moderator",
					action: "click",
					noun: o ? "expand_previous_actions" : "collapse_previous_actions",
					...Object(n.o)(r),
					actionInfo: {
						pageType: "moderation_pages_modqueue",
						paneName: s ? "post" : "comment",
						reason: t
					},
					subreddit: Object(n.mb)(r, e)
				})
		},
		"./src/reddit/hooks/promo/useIsPromoShown.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/constants/promo.ts"),
				o = s("./src/reddit/hooks/usePromoContext.ts");

			function r(e) {
				const {
					promos: t
				} = Object(o.a)();
				return !!e && t.get(e) === n.a.Shown
			}
		},
		"./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/selectors/experiments/signupUpsellExperiment.ts");

			function r(e) {
				const t = Object(n.e)(o.a) === e,
					s = Object(n.e)(o.c) === e,
					r = Object(n.e)(o.e) === e;
				return t || s || r
			}
		},
		"./src/reddit/hooks/usePromoContext.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s("./src/reddit/contexts/Promo/index.ts");
			t.a = function() {
				return Object(n.useContext)(o.a)
			}
		},
		"./src/reddit/icons/fonts/Clear/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("clear", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Clock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("history", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("expand", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less": function(e, t, s) {
			e.exports = {
				CollapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI",
				collapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				i = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: `${Object(r.b)("collapse",e.isFilled)} ${e.className}`,
				onClick: e.onClick,
				title: e.title
			}), "CollapseIcon", i.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, t, s) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				i = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: `${Object(r.b)("expand",e.isFilled)} ${e.className}`,
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", i.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/ModSettings/index.m.less": function(e, t, s) {
			e.exports = {
				ModSettings: "_3-SW6hQX6gXK9G4FM74obr",
				modSettings: "_3-SW6hQX6gXK9G4FM74obr"
			}
		},
		"./src/reddit/icons/fonts/ModSettings/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/ModSettings/index.m.less"),
				d = s.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(d.a.ModSettings, Object(a.b)("mod", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, t, s) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/fonts/Pencil/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("edit",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Photos/index.m.less": function(e, t, s) {
			e.exports = {
				PhotoIcon: "_1LWQVKh7NQLbKMIz2io1Di",
				photoIcon: "_1LWQVKh7NQLbKMIz2io1Di"
			}
		},
		"./src/reddit/icons/fonts/Text/index.m.less": function(e, t, s) {
			e.exports = {
				TextIcon: "_5UHlAh7zBZ6migrBJeld3",
				textIcon: "_5UHlAh7zBZ6migrBJeld3"
			}
		},
		"./src/reddit/icons/svgs/ClearFilled/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				onMouseUp: e.onMouseUp,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, o.a.createElement("path", {
				d: "M20 2.5C10.3 2.5 2.5 10.3 2.5 20c0 9.7 7.8 17.5 17.5 17.5S37.5 29.7 37.5 20C37.5 10.3 29.7 2.5 20 2.5zM24.2 27.7L20 23.5l-4.2 4.2c-1.1 1.1-2.5 1.1-3.5 0-1.1-1.1-1.1-2.4 0-3.5l4.2-4.2-4.2-4.2c-1.1-1.1-1.1-2.5 0-3.5 1.1-1.1 2.4-1.1 3.5 0l4.2 4.2 4.2-4.2c1.1-1.1 2.5-1.1 3.5 0 1.1 1.1 1.1 2.4 0 3.5L23.5 20l4.2 4.2c1.1 1.1 1.1 2.5 0 3.5C26.7 28.8 25.3 28.8 24.2 27.7z"
			}))
		},
		"./src/reddit/icons/svgs/Clock/index.m.less": function(e, t, s) {
			e.exports = {
				clock: "_3dezPhiKJXkVFXj94zLKcs"
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Clock/index.m.less"),
				i = s.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.clock, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), o.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/ModRemove/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M13.0303,11.4697 C13.3233,11.7627 13.3233,12.2377 13.0303,12.5307 C12.8843,12.6767 12.6923,12.7497 12.5003,12.7497 C12.3083,12.7497 12.1163,12.6767 11.9693,12.5307 L10.0003,10.5607 L8.0303,12.5307 C7.8843,12.6767 7.6923,12.7497 7.5003,12.7497 C7.3083,12.7497 7.1163,12.6767 6.9693,12.5307 C6.6763,12.2377 6.6763,11.7627 6.9693,11.4697 L8.9393,9.4997 L6.9693,7.5307 C6.6763,7.2377 6.6763,6.7627 6.9693,6.4697 C7.2623,6.1767 7.7373,6.1767 8.0303,6.4697 L10.0003,8.4397 L11.9693,6.4697 C12.2623,6.1767 12.7373,6.1767 13.0303,6.4697 C13.3233,6.7627 13.3233,7.2377 13.0303,7.5307 L11.0603,9.4997 L13.0303,11.4697 Z M17.2753,3.0377 L10.2753,1.0377 C10.0953,0.9877 9.9053,0.9877 9.7253,1.0377 L2.7253,3.0377 C2.2963,3.1607 2.0003,3.5537 2.0003,3.9997 L2.0003,10.9997 C2.0003,16.6887 9.4093,18.8707 9.7253,18.9617 C9.8153,18.9877 9.9073,18.9997 10.0003,18.9997 C10.0923,18.9997 10.1853,18.9877 10.2753,18.9617 C10.5903,18.8707 18.0003,16.6887 18.0003,10.9997 L18.0003,3.9997 C18.0003,3.5537 17.7043,3.1607 17.2753,3.0377 L17.2753,3.0377 Z",
				id: "path-1"
			})))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = s.n(a);
			const d = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), o.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = d
		},
		"./src/reddit/icons/svgs/Undo/index.m.less": function(e, t, s) {
			e.exports = {
				undo: "_2sBykNOXv7XBQtHHHAB1JB"
			}
		},
		"./src/reddit/icons/svgs/Undo/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Undo/index.m.less"),
				i = s.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.undo, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,2.375H6.726L8.4.98,7.6.02l-3,2.5a.625.625,0,0,0,0,.96l3,2.5.8-.96L6.726,3.625H10A6.375,6.375,0,1,1,3.625,10H2.375A7.625,7.625,0,1,0,10,2.375ZM5.976,3,6,2.98v.04Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "d", (function() {
				return r
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "h", (function() {
				return m
			}));
			var n = s("./src/reddit/helpers/isPost.ts");
			const o = 50,
				r = 50,
				a = 1e4,
				i = 100;
			var d, c;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public", e.PublicAsSubreddit = "public_as_subreddit"
			}(d || (d = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(c || (c = {}));
			const l = e => 1 === e.length ? Object(n.a)(e[0]) ? c.Post : c.Comment : c.Bulk,
				m = (e, t) => {
					return {
						[t === c.Bulk ? "item_ids" : "item_id"]: e.itemId,
						message: e.message,
						title: e.title,
						type: e.type,
						lock_comment: e.isLocked
					}
				}
		},
		"./src/reddit/pages/ProfileOverview/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/lodash/fromPairs.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/lib/isFakeSubreddit/index.ts"),
				m = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				u = s("./src/higherOrderComponents/withLSWatcher.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/lib/constants/index.ts"),
				h = s("./src/lib/promo/withShowSignupUpsell.tsx"),
				x = s("./src/reddit/actions/modal.ts"),
				f = s("./src/reddit/actions/nsfwBlocking/async.tsx"),
				v = s("./src/reddit/actions/pages/profileOverview/index.ts"),
				O = s("./src/reddit/actions/pages/profileShared.ts"),
				g = s("./src/reddit/actions/profileConversations.ts"),
				E = s("./src/lib/initializeClient/installReducer.ts"),
				C = s("./src/lib/makeActionCreator/index.ts"),
				j = s("./src/reddit/actions/activeCommunitiesOnProfile/constants.ts"),
				y = s("./src/lib/makeGqlRequest/index.ts"),
				_ = s("./src/lib/makeRequest/index.ts"),
				k = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				P = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				I = s("./src/redditGQL/operations/GetTopKarmaSubreddits.json");
			const w = async (e, t) => {
				const s = await Object(y.a)(e, {
					...I,
					variables: t
				});
				if (!Object(_.c)(s)) throw new Error("Encountered an error while fetching active communities");
				return (e => {
					var t, s;
					return null === (s = null === (t = null == e ? void 0 : e.redditorInfoByName) || void 0 === t ? void 0 : t.activeSubreddits) || void 0 === s ? void 0 : s.reduce((e, t) => {
						var s;
						return e = {
							...e,
							models: {
								...e.models,
								[t.id]: Object(P.a)(t)
							},
							aboutInfo: {
								...e.aboutInfo,
								[t.id]: {
									...Object(k.a)(t)[t.id],
									bannerBackgroundImage: null === (s = t.styles) || void 0 === s ? void 0 : s.bannerBackgroundImage
								}
							}
						}
					}, {
						aboutInfo: {},
						models: {}
					})
				})(s.body.data)
			};
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			const S = {
				subreddits: [],
				error: null,
				requested: !1
			};
			var N = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = arguments.length > 1 ? arguments[1] : void 0;
				var s;
				switch (t.type) {
					case j.b: {
						const {
							username: s
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								requested: !0
							}
						}
					}
					case j.c: {
						const {
							username: s,
							subreddits: n = {}
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								subreddits: Object.keys(n),
								error: null
							}
						}
					}
					case j.a: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								error: null === (s = t.payload) || void 0 === s ? void 0 : s.ApiError
							}
						}
					}
					default:
						return e
				}
			};
			Object(E.a)({
				features: {
					activeCommunitiesOnProfile: N
				}
			});
			const T = Object(C.a)(j.b),
				M = Object(C.a)(j.c),
				R = Object(C.a)(j.a),
				L = e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n;
					t(T({
						username: e
					}));
					try {
						const s = await w(o(), {
							username: e
						});
						t(M({
							username: e,
							subreddits: s.models,
							subredditAboutInfo: s.aboutInfo
						}))
					} catch (r) {
						t(R({
							username: e,
							ApiError: r
						}))
					}
				};
			var A = s("./src/reddit/selectors/subreddit.ts");
			Object(E.a)({
				features: {
					activeCommunitiesOnProfile: N
				}
			});
			const D = Object(d.a)([(e, t) => {
					var s, n, o;
					return null !== (o = null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.activeCommunitiesOnProfile) || void 0 === n ? void 0 : n[t]) && void 0 !== o ? o : S
				}], e => e),
				F = Object(d.a)([(e, t) => D(e, t)], e => {
					var t;
					return null !== (t = null == e ? void 0 : e.subreddits) && void 0 !== t ? t : []
				}),
				B = Object(d.a)([e => e, A.fb], (e, t) => t.map(t => ({
					...t,
					...Object(A.y)(e, {
						subredditId: t.id
					})
				})));
			var U = s("./src/lib/constants/icons.ts"),
				W = s("./src/lib/prettyPrintNumber/index.ts"),
				V = s("./node_modules/lodash/debounce.js"),
				z = s.n(V),
				G = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				H = s("./src/reddit/constants/posts.ts"),
				K = s("./src/reddit/controls/Button/index.tsx"),
				q = s("./src/reddit/controls/InternalLink/index.tsx"),
				Q = s("./src/reddit/icons/fonts/index.tsx"),
				J = s("./src/reddit/components/SubredditIcon/index.tsx");
			const {
				fbt: Z
			} = s("./node_modules/fbt/lib/FbtPublic.js"), X = (e, t) => {
				var s;
				if (!t || !e) return;
				let n = e.getBoundingClientRect().left - t.getBoundingClientRect().left;
				(null === (s = e.dataset) || void 0 === s ? void 0 : s.position) && parseInt(e.dataset.position, 10) > t.children.length - 4 && (n = t.scrollWidth), t.scroll({
					left: n,
					behavior: "smooth"
				})
			}, Y = e => {
				let {
					subredditIds: t
				} = e;
				const s = Object(i.e)(e => B(e, {
						subredditIds: t
					})),
					n = Object(r.createRef)(),
					[o, d] = Object(r.useState)(null),
					[c, l] = Object(r.useState)(null);
				Object(r.useEffect)(() => {
					const e = n.current;
					if (!e) return;
					const t = z()(() => {
						const t = (e => {
							const t = e.getBoundingClientRect();
							return Array.from(e.children).filter(e => {
								const s = e.getBoundingClientRect();
								return s.left >= t.left && s.right <= t.right
							})
						})(e);
						t.length > 0 && (l((e => {
							const t = e[e.length - 1].nextElementSibling;
							return t instanceof HTMLElement ? t : null
						})(t)), d((e => {
							let t = e[0].previousElementSibling;
							return (null == t ? void 0 : t.previousElementSibling) && (t = t.previousElementSibling), t instanceof HTMLElement ? t : null
						})(t)))
					}, 200);
					return t(), e.addEventListener("scroll", t), () => {
						e.removeEventListener("scroll", t)
					}
				}, [n]);
				const m = Object(r.useCallback)(() => X(c, n.current), [c, n]),
					u = Object(r.useCallback)(() => X(o, n.current), [o, n]);
				return a.a.createElement("div", {
					"aria-label": "carousel",
					className: "overflow-hidden relative"
				}, a.a.createElement("div", {
					className: "flex gap-xs overflow-x-scroll snap-mandatory scrollbar-hide snap-x",
					ref: n
				}, s.map((e, t) => a.a.createElement("div", {
					className: `w-1/4 shrink-0 grow-0 border-box ${t<s.length-1?"snap-start":"snap-end"}`,
					id: e.id,
					key: e.id,
					"data-position": t
				}, a.a.createElement($, {
					key: e.id,
					subreddit: e
				})))), Boolean(o) && a.a.createElement("button", {
					className: "absolute h-[40px] w-[40px] leading-10 left-sm top-1/2 mt-[-20px] shadow-[0px_0px_4px_rgba(0,0,0,0.3)] transition-transform rounded-full bg-neutral-background",
					onClick: u,
					"aria-label": Z._("previous items", null, {
						hk: "44uTrz"
					})
				}, a.a.createElement(Q.a, {
					name: U.a.back_fill
				})), Boolean(c) && a.a.createElement("button", {
					className: "absolute h-[40px] w-[40px] leading-10 right-sm top-1/2 mt-[-20px] shadow-[0px_0px_4px_rgba(0,0,0,0.3)] transition-transform rounded-full bg-neutral-background",
					onClick: m,
					"aria-label": Z._("next items", null, {
						hk: "4EEfgp"
					})
				}, a.a.createElement(Q.a, {
					name: U.a.forward_fill
				})))
			}, $ = e => {
				let {
					subreddit: t
				} = e;
				if (!t) return null;
				const {
					subscribers: s,
					primaryColor: n,
					displayText: o,
					icon: r,
					communityIcon: i,
					url: d,
					bannerBackgroundImage: c,
					isNSFW: l
				} = t;
				return a.a.createElement("div", {
					className: "w-100 bg-[color:var(--newCommunityTheme-body)] border border-solid border-neutral-border-weak rounded-[4px]"
				}, a.a.createElement(q.default, {
					to: d || `/${o}`
				}, a.a.createElement("div", {
					className: "overflow-hidden w-100 h-2xl rounded-t-[4px] bg-center bg-cover",
					style: {
						backgroundColor: n || "var(--color-secondary-background)",
						backgroundImage: `url(${c})`
					}
				})), a.a.createElement("div", {
					className: "mt-[-40px] text-center"
				}, a.a.createElement("div", {
					className: "bg-neutral-background block rounded-full m-auto w-[52px] h-[52px] overflow-hidden"
				}, a.a.createElement(J.b, {
					iconUrl: (null == r ? void 0 : r.url) || i,
					primaryColor: n || "bg-neutral-background",
					className: "!w-[52px] !h-[52px] !text-[52px] !leading-none bg-neutral-background",
					linkTo: d || `/${o}`,
					shouldHideNsfwIcon: l
				})), a.a.createElement(q.default, {
					to: d || `/${o}`
				}, a.a.createElement("div", {
					className: "py-md px-sm font-normal text-neutral-content-weak truncate"
				}, a.a.createElement("div", {
					className: "text-[12px] font-semibold text-neutral-content-strong truncate mb-2xs"
				}, o), a.a.createElement("p", {
					className: "text-[12px] leading-[14px]"
				}, Z._({
					"*": "{number} members",
					_1: "1 member"
				}, [Z._plural(s, "number", Object(W.b)(s))], {
					hk: "4yqFU9"
				}))))), a.a.createElement("div", {
					className: "m-xs mt-0 flex"
				}, a.a.createElement(ee, {
					subreddit: t
				})))
			}, ee = e => {
				let {
					subreddit: t
				} = e;
				const s = Object(i.e)(e => Object(A.jb)(e, {
					identifier: {
						name: t.name,
						type: H.a.SUBREDDIT
					}
				}));
				return a.a.createElement(G.a, {
					doNotHideOtherSubscribeButtons: !0,
					priority: s ? K.c.Secondary : K.c.Primary,
					className: "grow",
					postId: t.id,
					size: K.d.XS,
					identifier: {
						name: t.name,
						type: H.a.SUBREDDIT
					}
				})
			}, {
				fbt: te
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			const se = e => {
				let {
					username: t
				} = e;
				const {
					requested: s,
					error: n,
					subredditIds: o
				} = function(e) {
					let {
						username: t
					} = e;
					const s = Object(i.d)(),
						n = Object(i.e)(e => F(e, t)),
						{
							requested: o,
							error: a
						} = Object(i.e)(e => D(e, t));
					return Object(r.useEffect)(() => {
						o || s(L(t))
					}, [s, t, o]), {
						requested: o,
						error: a,
						subredditIds: n
					}
				}({
					username: t
				});
				return !s || n || o.length < 1 ? null : a.a.createElement("div", {
					className: "bg-[color:var(--newCommunityTheme-body)] mb-xs border border-solid border-[color:var(--newCommunityTheme-postLine)] rounded-[4px] px-[16px] py-[8px] pb-sm"
				}, a.a.createElement("h3", {
					className: "text-[12px] leading-[20px] text-[color:var(--newCommunityTheme-actionIcon)] truncate min-w-0 mb-xs"
				}, te._("Active in these communities", null, {
					hk: "t1wkw"
				})), a.a.createElement("hr", {
					className: "mb-sm mx-lg border-none mx-l h-[1px] bg-neutral-border-weak"
				}), a.a.createElement(Y, {
					subredditIds: o
				}))
			};
			var ne = s("./src/reddit/components/ContentGate/index.tsx"),
				oe = s("./src/reddit/components/Econ/Marketplace/ShowcaseCollectionViewModal/async.tsx"),
				re = s("./src/reddit/components/EmptyProfile/index.ts"),
				ae = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				ie = s("./src/reddit/components/JumpToContent/index.tsx"),
				de = s("./src/reddit/components/PostList/index.tsx"),
				ce = s("./src/reddit/components/TrackingHelper/index.tsx"),
				le = s("./src/lib/classNames/index.ts"),
				me = s("./src/lib/isPinnedAdminPost/index.ts"),
				ue = s("./src/lib/lessComponent.tsx"),
				pe = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				be = s("./node_modules/lodash/last.js"),
				he = s.n(be);
			var xe = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				fe = s("./src/reddit/selectors/posts.ts"),
				ve = s("./src/reddit/components/ClassicPost/index.tsx"),
				Oe = s("./src/reddit/components/LargePost/index.tsx"),
				ge = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				Ee = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				Ce = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				je = s("./src/reddit/selectors/profile.ts"),
				ye = s("./src/reddit/components/OverviewConversationsPost/ExtraCommentsItem/index.m.less"),
				_e = s.n(ye);
			const {
				fbt: ke
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Pe = ue.a.div("ExtraCommentsItemWrapper", _e.a), Ie = ue.a.p("ExtraComments", _e.a), we = ue.a.wrapped(Ie, "ExtraCommentsInteractive", _e.a);
			var Se = Object(i.b)(() => Object(d.c)({
					extraCommentsItem: je.d,
					extraCommentsPending: (e, t) => {
						const {
							extraCommentsId: s
						} = t, {
							extraComments: n
						} = e.pages.profileOverview.conversations;
						return !!n.api.pending[s]
					}
				}), (e, t) => {
					let {
						profileName: s
					} = t;
					return {
						extraCommentsClicked: t => e(Object(g.g)(s, t.postId, t.id))
					}
				})(e => {
					let {
						extraCommentsClicked: t,
						extraCommentsItem: s,
						extraCommentsPending: n
					} = e;
					return a.a.createElement(Pe, null, n ? a.a.createElement(Ie, null, ke._("Loading...", null, {
						hk: "47z90C"
					})) : a.a.createElement(Ce.a.Consumer, null, e => a.a.createElement(we, {
						onClick: e => {
							t(s), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, ke._("Load more comments", null, {
						hk: "1jXJxb"
					}))))
				}),
				Ne = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				Te = s("./src/reddit/contexts/Post/index.tsx"),
				Me = s("./src/reddit/hooks/useTheme.ts"),
				Re = s("./src/reddit/constants/postLayout.ts"),
				Le = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				Ae = s.n(Le),
				De = s("./src/reddit/constants/experiments.ts"),
				Fe = s("./src/reddit/helpers/chooseVariant/index.ts"),
				Be = s("./src/reddit/selectors/experiments/index.ts");

			function Ue(e) {
				return e === De.zf.Minimalist || e === De.zf.Description || e === De.zf.SocialSignals
			}
			var We = s("./src/reddit/components/RelatedCommunitiesRecommendations/index.tsx"),
				Ve = s("./src/reddit/components/OverviewConversationsPost/index.m.less"),
				ze = s.n(Ve);

			function Ge() {
				return (Ge = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const He = ue.a.div("BackgroundWrapper", ze.a),
				Ke = ue.a.wrapped(ve.default, "ClassicPost", ze.a),
				qe = ue.a.wrapped(ge.a, "OverviewCommentPost", ze.a),
				Qe = e => {
					const {
						isEnabled: t,
						variant: s
					} = Object(i.e)(e => (e => {
						const t = Object(Fe.c)(e, {
							experimentEligibilitySelector: Be.e,
							experimentName: De.Lc
						}) || De.V.Control1;
						return {
							isEnabled: Ue(t),
							variant: t
						}
					})(e), i.c);
					return t ? a.a.createElement(We.b, Ge({}, e, {
						variant: s,
						pageType: We.a.Profile
					})) : null
				},
				Je = Object(i.b)(() => Object(d.c)({
					commentThreadLinkSets: (e, t) => {
						let {
							postId: s,
							currentProfileName: n
						} = t;
						const o = n ? n.toLowerCase() : "",
							r = Object(pe.a)(s, o);
						return e.pages.profileOverview.conversations.keyToCommentThreadLinkSets[r]
					},
					headComment: (e, t) => {
						let {
							postId: s,
							currentProfileName: n
						} = t;
						const o = n ? n.toLowerCase() : "",
							r = Object(pe.a)(s, o);
						return e.pages.profileOverview.conversations.keyToHeadCommentId[r]
					},
					isInitiallyPinned: (e, t) => {
						let {
							postId: s,
							currentProfileName: n
						} = t;
						return !!n && Object(fe.p)(e, s, n)
					},
					isPinned: (e, t) => {
						let {
							postId: s,
							currentProfileName: n
						} = t;
						return !!n && Object(fe.r)(e, s, n)
					},
					profileName: (e, t) => {
						let {
							currentProfileName: s
						} = t;
						if (s) return ((e, t) => {
							const {
								users: s
							} = e, n = t.toLowerCase(), o = s.models[n];
							return o ? o.username : void 0
						})(e, s)
					},
					layout: p.U
				})),
				Ze = ue.a.wrapped(Oe.default, "OverviewLargePost", ze.a),
				Xe = Je(e => {
					const {
						availableWidth: t,
						className: s,
						commentThreadLinkSets: n,
						eventFactory: o,
						forceLoadMedia: d,
						headComment: c,
						isInitiallyPinned: l,
						isPinned: m,
						isScrolling: u,
						last: p,
						layout: b,
						onClickPost: h,
						onSizeChanged: x,
						pageLayer: f,
						post: v,
						postId: O,
						profileName: g,
						scrollerItemRef: E,
						shouldShowInsightsButton: C
					} = e, j = {
						last: p,
						onClickPost: h,
						postId: O
					}, [y, _] = Object(r.useState)(!1), k = Object(i.e)(e => Object(fe.U)(e, {
						postId: O
					})), P = Object(i.e)(e => !!g && Object(je.k)(e, {
						profileName: g
					}));
					if (!g) return null;
					const I = g === v.author,
						w = Object(me.a)(m, v.distinguishType);
					if (!I && !c && !w) return null;
					const S = c ? function(e) {
							const t = [],
								s = e.length;
							for (let n = 0; n < s; n++) {
								(0 === n || e[n - 1].depth !== e[n].depth - 1) && t.push([]), he()(t).push(e[n])
							}
							return t
						}(function(e, t) {
							const s = [];
							let n = t,
								o = "comment";
							for (; n;) {
								const t = e[n];
								s.push({
									id: n,
									depth: t.depth,
									type: o
								}), t.next ? (n = t.next.id, o = t.next.type) : n = void 0
							}
							return s
						}(n, c)) : [],
						N = S.length - 1;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: Object(le.a)(Ae.a.largeAndMediumActiveStyles, Ae.a.largeAndMediumPostStyles, ze.a.OverviewConversationsPost, s),
						style: {
							...Object(xe.b)(),
							...Object(xe.d)(e)
						}
					}, a.a.createElement(Ee.a, {
						className: C ? ze.a.shouldShowOverflow : void 0,
						isFirst: !0,
						isLast: N < 0,
						key: v.id
					}, !I && !!c && a.a.createElement(qe, Ge({}, j, {
						commentId: c,
						key: v.id,
						profileName: g
					})), (I || w) && (b === Re.g.Classic ? a.a.createElement(Ke, {
						availableWidth: t,
						eventFactory: o,
						inSubredditOrProfile: !1,
						isOverlay: !1,
						isScrolling: u,
						forceLoadMedia: d,
						last: p,
						onClickPost: h,
						onSizeChanged: x,
						pageLayer: f,
						postId: O,
						scrollerItemRef: E
					}) : a.a.createElement(Ze, {
						availableWidth: t,
						eventFactory: o,
						isScrolling: u,
						isFrontpage: !1,
						forceLoadMedia: d,
						last: p,
						onClickPost: h,
						onSizeChanged: x,
						pageLayer: f,
						postId: O,
						scrollerItemRef: E,
						shouldShowInsightsButton: C,
						onSubscribe: () => _(!0)
					}))), a.a.createElement(He, {
						style: {
							background: Object(xe.e)(e)
						}
					}, !l && S.map((e, t) => a.a.createElement(Ee.a, {
						isLast: t === N,
						key: `${t}-isLast[${t===N}]`
					}, e.map((t, s) => {
						const n = 0 === s,
							o = s === e.length - 1;
						return "comment" === t.type ? a.a.createElement(Ne.a, {
							commentId: t.id,
							depth: t.depth,
							isFirst: n,
							isLast: o,
							key: t.id,
							profileName: g,
							showModTools: !0
						}) : a.a.createElement(Se, {
							extraCommentsId: t.id,
							key: t.id,
							profileName: g
						})
					}))))), y && P && k && a.a.createElement(Qe, {
						postId: O,
						subredditId: k.id,
						subredditDisplayText: k.displayText,
						onDismiss: () => {
							_(!1)
						}
					}))
				});
			var Ye = Object(Te.b)((function(e) {
					var t;
					const s = Object(Me.a)(),
						n = Object(p.ib)();
					return a.a.createElement(Xe, Ge({
						theme: null !== (t = e.theme) && void 0 !== t ? t : s,
						currentProfileName: Object(p.j)(n),
						pageLayer: n
					}, e))
				})),
				$e = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				et = s("./src/reddit/helpers/trackers/post.ts"),
				tt = s("./src/reddit/selectors/tracking.ts"),
				st = s("./src/reddit/connectors/PostList/index.ts");
			const nt = Object(d.c)({
					...st.d,
					postIds: fe.N,
					viewportDataLoaded: tt.b
				}),
				ot = Object(st.c)(),
				rt = Object(i.b)(nt, st.b, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(et.n)(e, t),
					postComponentForLayout: e => {
						let {
							post: t
						} = e;
						return t.isBlank ? $e.a : Ye
					}
				}));
			var at = (e => Object(ce.c)(ot(rt(e))))(de.a),
				it = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				dt = s("./src/reddit/actions/post.ts"),
				ct = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				lt = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				mt = s("./src/reddit/components/Media/index.tsx"),
				ut = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				pt = s("./src/reddit/components/PostContainer/index.tsx"),
				bt = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				ht = s("./src/reddit/components/PostTitle/index.tsx"),
				xt = s("./src/reddit/connectors/miniCardPost.ts"),
				ft = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				vt = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Ot = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				gt = s("./src/reddit/models/Media/index.ts"),
				Et = s("./src/reddit/models/Post/index.ts"),
				Ct = s("./node_modules/fbt/lib/FbtPublic.js"),
				jt = s("./src/reddit/components/CommentsLink/index.tsx"),
				yt = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				_t = s("./src/reddit/components/Flatlist/index.tsx"),
				kt = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				Pt = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				It = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				wt = s("./src/reddit/components/ShareMenu/index.tsx"),
				St = s("./src/reddit/icons/fonts/Share/index.tsx"),
				Nt = s("./src/reddit/models/User/index.ts"),
				Tt = s("./src/reddit/components/MiniCardPost/Flatlist/index.m.less"),
				Mt = s.n(Tt);
			const Rt = "-MiniCardModMenu",
				Lt = "-MiniCardOverflowMenu",
				At = "-MiniCardShareMenu",
				Dt = ue.a.wrapped(yt.a, "HorizontalVotes", Mt.a),
				Ft = ue.a.button("ShareButton", Mt.a),
				Bt = Object(p.v)({
					currentProfileName: p.j,
					isCommentPermalink: p.x,
					isCommentsPage: p.y,
					isProfilePostListing: p.N,
					pageLayer: e => e
				}),
				Ut = Object(d.c)({
					layout: p.U,
					subreddit: p.s
				});
			var Wt = Bt(Object(i.b)(Ut, {})(Object(ce.c)(e => {
					const {
						currentProfileName: t,
						className: s,
						currentUser: n,
						handleVote: o,
						hasModFlairPerms: r,
						hasModFullPerms: i,
						hasModPostPerms: d,
						isCommentsPage: c,
						isCommentPermalink: l,
						isOverlay: m,
						isProfilePostListing: u,
						isSticky: p,
						layout: b,
						modModeEnabled: h,
						onCommentsClick: x,
						post: f,
						sendEvent: v,
						showEditFlair: O,
						showEditPost: g,
						subreddit: E
					} = e, C = e => v(Object(et.n)(f.id, e)), j = f.postId, y = Object(_t.d)(Rt, f.id, m, p), _ = !!n && Object(Nt.e)(n) === f.author;
					return a.a.createElement("div", {
						className: Object(le.a)(Mt.a.flatlistContainer, s)
					}, a.a.createElement(Dt, {
						compact: !1,
						model: f,
						onVoteClick: o,
						scoreClassName: Mt.a.score
					}), a.a.createElement(jt.a, {
						hasModPostPerms: d,
						isCommentsPage: c,
						isCommentPermalink: l,
						isOverlay: m,
						postId: f.id,
						modModeEnabled: h,
						numComments: f.numComments,
						type: Re.g.Compact,
						onClick: x,
						isSponsored: f.isSponsored,
						impressionId: f.impressionId
					}), a.a.createElement(wt.a, {
						className: Mt.a.shareMenu,
						dropdownId: Object(_t.d)(At, f.id, m, p),
						permalink: f.permalink,
						post: f,
						sendEventWithName: C,
						subredditType: null == E ? void 0 : E.type
					}, a.a.createElement(Ft, null, a.a.createElement(St.a, {
						className: Mt.a.shareIcon
					}), a.a.createElement("span", {
						className: Mt.a.shareText
					}, Ct.fbt._("share", null, {
						hk: "mmJV5"
					})))), d && a.a.createElement(kt.a, {
						dropdownId: y,
						onClick: () => C("post_mod_action_menu")
					}, a.a.createElement(_t.b, {
						className: Mt.a.modActionsIcon
					}), a.a.createElement(Pt.a, {
						canEditFlair: r && !!O,
						hasModPostPerms: d,
						hasModFullPerms: i,
						isOverlay: !!m,
						isPostAuthor: _,
						modModeEnabled: h,
						post: f,
						tooltipId: y
					})), a.a.createElement(It.a, {
						currentProfileName: t,
						isCommentsPage: c,
						isOverlay: !!m,
						isProfilePostListing: u,
						layout: b,
						pageLayer: e.pageLayer,
						permalink: f.permalink,
						postId: j,
						dropdownId: Object(_t.d)(Lt, f.id, m, p),
						isFixed: p,
						sendEvent: v,
						showEditPost: !!g,
						showEditFlair: !!O,
						useFlatlistBreakpoints: Object(It.b)({
							editPost: !1,
							save: !1,
							hide: !1,
							report: !1,
							mute: !1
						})
					}))
				}))),
				Vt = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				zt = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				Gt = s("./src/reddit/components/MiniCardPost/index.m.less"),
				Ht = s.n(Gt);
			var Kt = Object(p.v)()(Object(Te.b)(Object(xt.a)(Object(ct.a)(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: n,
						crosspostRoot: o,
						crosspostSubredditOrProfile: r,
						currentUser: i,
						eventFactory: d,
						flairStyleTemplate: c,
						forceLoadMedia: l,
						hideNSFWPref: m,
						moderatorPermissions: u,
						modModeEnabled: p,
						onClickPost: b,
						post: h,
						scrollerItemRef: x,
						shouldPause: f,
						showMetaLine: v = !0,
						showEditFlair: O,
						subredditOrProfile: g,
						userIsOp: E
					} = e, {
						media: C
					} = o || h, j = C && C.type, y = Object(bt.b)(h.id), _ = j === gt.o.RTJSON, k = E && _, P = Object(Ot.a)(u), I = Object(ft.a)(u), w = Object(vt.a)(u), S = C && j !== gt.o.RTJSON && j !== gt.o.TEXT, N = j === gt.o.VIDEO || j === gt.o.GIFVIDEO, T = Object(Et.q)(h), M = C && a.a.createElement(mt.a, {
						autoplayPref: t,
						availableWidth: s,
						className: Ht.a.media,
						imageBoxClassName: Object(le.a)(Ht.a.mediaImageBox, {
							[Ht.a.videoStyles]: N
						}),
						imageBoxContentImageClassName: Ht.a.mediaImageBoxContentImage,
						forceAspectRatio: gt.b,
						isListing: !0,
						isMiniCard: !0,
						isNotCardView: !0,
						post: o || h,
						scrollerItemRef: x,
						shouldPause: f,
						shouldLoad: l,
						showCentered: !0,
						showFull: !1
					});
					return a.a.createElement(pt.b, {
						className: Object(le.a)(Ht.a.postContainer, Ae.a.largeAndMediumActiveStyles, Ae.a.largeAndMediumPostStyles, Object(xe.a)(e), n),
						style: {
							...Object(xe.b)(e.flairStyleTemplate),
							...Object(xe.d)(e)
						},
						post: h,
						onClick: b,
						eventFactory: d
					}, a.a.createElement(ut.a, {
						className: Ht.a.backgroundWrapper,
						flairStyleTemplate: c
					}, S && M, a.a.createElement("div", {
						className: Ht.a.innerContainer
					}, T && a.a.createElement(zt.a, {
						post: h,
						templatePlaceholderImage: c ? c.postPlaceholderImage : void 0
					}), a.a.createElement(ht.c, {
						className: Ht.a.postTitleCompact,
						hideSourceLink: !0,
						post: h,
						size: ht.b.Large,
						titleColor: c && c.postTitleColor
					}), v && g && a.a.createElement(Vt.a, {
						className: Ht.a.metaLine,
						crosspostSubredditOrProfile: r,
						hideNSFWPref: m,
						post: h,
						subredditOrProfile: g
					}), !S && a.a.createElement("div", {
						className: Ht.a.mediaWrapper
					}, M), a.a.createElement("div", {
						className: Ht.a.flexSpacer
					}), a.a.createElement(Wt, {
						currentUser: i,
						handleVote: e.handleVote,
						hasModFlairPerms: I,
						hasModFullPerms: w,
						hasModPostPerms: P,
						modModeEnabled: p,
						post: h,
						showEditFlair: O,
						showEditPost: k
					}))), e.activeModalId === y && a.a.createElement(bt.a, {
						flairs: h.flair,
						subredditId: h.belongsTo.id,
						modalId: y,
						onFlairChanged: e.onFlairChanged
					}), a.a.createElement(lt.d, null))
				})))),
				qt = s("./src/reddit/helpers/getClickInfo.ts"),
				Qt = s("./src/reddit/helpers/localStorage/index.ts"),
				Jt = s("./src/reddit/selectors/user.ts"),
				Zt = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/index.m.less"),
				Xt = s.n(Zt);
			const {
				fbt: Yt
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var $t = e => a.a.createElement("div", {
					className: Object(le.a)(Xt.a.container, e.className)
				}, a.a.createElement(Q.a, {
					name: "pin",
					className: Xt.a.pin
				}), a.a.createElement("div", {
					className: Xt.a.title
				}, Yt._("Show off that karma!", null, {
					hk: "2yqUT7"
				})), e.children),
				es = s("./src/reddit/controls/TextButton/index.tsx"),
				ts = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/Education.m.less"),
				ss = s.n(ts);
			const {
				fbt: ns
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var os = e => a.a.createElement($t, {
					className: Object(le.a)(ss.a.container, e.className)
				}, a.a.createElement("div", {
					className: ss.a.description
				}, ns._('Pin a post from your feed using the "..." at the bottom of each post', null, {
					hk: "4lkJRB"
				})), a.a.createElement(es.a, {
					className: ss.a.gotIt,
					onClick: e.onGotItClick
				}, ns._("OK, I got it", null, {
					hk: "1JMx7x"
				}))),
				rs = s("./src/reddit/components/ProfilePinnedPosts/index.m.less"),
				as = s.n(rs);
			const {
				fbt: is
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ds = 320, cs = 300, ls = Object(d.c)({
				arePinnedPostsLoaded: fe.a,
				currentUser: Jt.m,
				pinnedPostIds: fe.O
			}), ms = Object(i.b)(ls, e => ({
				openPost: t => e(Object(dt.K)(t))
			}));
			class us extends a.a.Component {
				constructor() {
					super(...arguments), this.containerRef = null, this.state = {
						showEducation: !1,
						pauseMedia: !1
					}, this.setContainerRef = e => this.containerRef = e, this.handleScroll = z()(() => {
						if (!this.containerRef) return;
						const e = this.containerRef.getBoundingClientRect();
						e.bottom < cs ? this.pauseMedia() : e.top > 0 && this.playMedia()
					}, 250, {
						leading: !0
					}), this.playMedia = () => {
						this.setState(e => e.pauseMedia ? {
							pauseMedia: !1
						} : null)
					}, this.pauseMedia = () => {
						this.setState(e => e.pauseMedia ? null : {
							pauseMedia: !0
						})
					}, this.onGotItClick = () => {
						Object(Qt.Ub)(), this.setState({
							showEducation: !1
						})
					}, this.onClickPost = (e, t) => {
						this.props.openPost({
							postOrComment: t,
							clickInfo: Object(qt.a)(e)
						})
					}, this.renderPost = e => a.a.createElement(Kt, {
						postId: e,
						key: e,
						availableWidth: ds,
						className: Object(le.a)(as.a.item, as.a.miniCardPost),
						forceLoadMedia: !this.state.pauseMedia,
						onClickPost: this.onClickPost,
						shouldPause: this.state.pauseMedia
					})
				}
				componentDidMount() {
					this.setState({
						showEducation: !Object(Qt.R)()
					}), document.addEventListener("scroll", this.handleScroll), this.handleScroll()
				}
				componentWillUnmount() {
					document.removeEventListener("scroll", this.handleScroll)
				}
				render() {
					const {
						arePinnedPostsLoaded: e,
						pinnedPostIds: t,
						children: s
					} = this.props;
					if (!e) return null;
					const n = !!this.props.currentUser && this.props.profileName === Object(Nt.e)(this.props.currentUser),
						o = t.length > 0,
						r = !o && this.state.showEducation && n;
					if (!o && !r) return null;
					const i = n && this.props.pinnedPostIds.length % 2 != 0;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: as.a.title
					}, is._("Pinned posts", null, {
						hk: "3prRc3"
					})), r ? a.a.createElement(os, {
						className: Object(le.a)(as.a.item, as.a.education),
						onGotItClick: this.onGotItClick
					}) : a.a.createElement("div", {
						ref: this.setContainerRef,
						className: as.a.container
					}, t.map(this.renderPost), i && a.a.createElement($t, {
						className: as.a.item
					})), s)
				}
			}
			var ps = Object(p.v)()(ms(us)),
				bs = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				hs = s("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				xs = s("./src/reddit/constants/modals.ts"),
				fs = s("./src/reddit/helpers/name/index.ts"),
				vs = s("./src/reddit/helpers/trackers/marketplace/display-collectibles.ts"),
				Os = s("./src/reddit/helpers/trackers/screenview.ts"),
				gs = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				Es = s("./src/reddit/layout/page/Listing/index.tsx"),
				Cs = s("./src/reddit/models/ContentGate.ts"),
				js = s("./src/reddit/pages/ProfileBlockInterstitial/index.tsx"),
				ys = s("./src/reddit/routes/profileOverview/index.ts");
			const _s = e => {
				return (Object(Fe.c)(e, {
					experimentEligibilitySelector: Be.e,
					experimentName: De.wb
				}) || De.V.Control1) === De.Wd
			};
			var ks = s("./src/reddit/selectors/experiments/econ/index.ts"),
				Ps = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				Is = s("./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts"),
				ws = s("./src/reddit/selectors/platform.ts");

			function Ss() {
				return (Ss = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Ns = (e, t) => {
					let {
						location: s
					} = t;
					return o()([...Object(c.a)(s.search)])
				},
				Ts = Object(p.v)(),
				Ms = Object(d.c)({
					isOwnProfile: p.G,
					over18Prefs: Jt.mb,
					layout: p.U,
					user: (e, t) => {
						let {
							match: s
						} = t;
						return Object(Jt.Db)(e, {
							userName: s.params.profileName
						})
					},
					isDisplayCollectiblesEnabled: ks.o
				}),
				Rs = Object(d.a)(Ms, Ns, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.profileName
				}, (e, t) => {
					let {
						match: s
					} = t;
					return Object(je.k)(e, {
						profileName: s.params.profileName
					})
				}, (e, t) => Object(O.a)(e, Ns(0, t)), (e, t) => {
					let {
						match: s
					} = t;
					return !Object(fe.n)(e, {
						profileName: s.params.profileName
					})
				}, Jt.S, (e, t) => {
					let {
						match: s
					} = t;
					return Object(Jt.h)(e, b.qc + s.params.profileName)
				}, (e, t) => {
					let {
						match: s
					} = t;
					return {
						isBlocked: Object(Jt.N)(e, {
							profileName: s.params.profileName
						})
					}
				}, Ps.g, Is.a, ws.b, (e, t, s, n, o, r, a, i, d, c, l, u) => {
					let {
						sort: p,
						t: h
					} = o, {
						isBlocked: x
					} = d;
					var f, v;
					const O = b.Ab,
						g = Object(m.a)(s, O, p, t),
						{
							sort: E
						} = t;
					return {
						contentGateInfo: i,
						isLoggedIn: a,
						isProfileNSFW: !!n && n.isNSFW,
						listingKey: g,
						profileName: s,
						shouldShowPinnedPostsSection: r && !E,
						sort: p,
						timeSort: h,
						avatar: null === (f = null == n ? void 0 : n.icon) || void 0 === f ? void 0 : f.url,
						isBlocked: x,
						...e,
						nsfwBlockingExperiment: c,
						showNewDesignBlocking: l,
						isDisplayCollectiblesUrl: (null === (v = null == u ? void 0 : u.routeMatch) || void 0 === v ? void 0 : v.match.path) === ys.a
					}
				}),
				Ls = e => {
					let {
						username: t
					} = e;
					const s = Object(i.e)(_s);
					return t && s ? a.a.createElement(se, {
						username: t
					}) : null
				},
				As = Object(i.b)(Rs, (e, t) => ({
					onLoadMoreConversationsItems: () => e(g.h({
						profileName: t.match.params.profileName,
						sort: t.match.params.sort
					})),
					onLayoutChange: () => e(Object(v.profileOverviewRequested)({
						...t.match,
						queryParams: o()([...Object(c.a)(t.location.search)])
					})),
					openNsfwModal: () => e(Object(f.a)()),
					openShowcaseModal: t => e(Object(x.h)(xs.a.X_SHOWCASE_COLLECTION_VIEW_MODAL, {
						telemetryReason: "deeplink",
						profileUserName: t
					}))
				}));
			class Ds extends a.a.Component {
				constructor(e) {
					super(e), this.renderNoPosts = () => a.a.createElement(re.c, {
						profileName: this.props.profileName,
						timeSort: this.props.timeSort
					})
				}
				componentDidMount() {
					this.props.isProfileNSFW && !this.props.isOwnProfile && this.props.nsfwBlockingExperiment === Ps.a.Blurred ? this.props.openNsfwModal() : this.props.isLoggedIn && this.props.isDisplayCollectiblesUrl && Object(oe.a)().then(() => this.props.openShowcaseModal(this.props.profileName))
				}
				UNSAFE_componentWillUpdate(e) {
					this.props.layout !== e.layout && e.onLayoutChange(), e.user && e.user !== this.props.user && Object(vs.a)({
						sendEvent: e.sendEvent,
						user: e.user,
						pageType: "profile",
						isDisplayCollectiblesEnabled: e.isDisplayCollectiblesEnabled
					})
				}
				render() {
					const {
						avatar: e,
						contentGateInfo: t,
						isBlocked: s,
						isOwnProfile: n,
						isProfileNSFW: o,
						listingKey: r,
						nsfwBlockingExperiment: i,
						onLayoutChange: d,
						over18Prefs: c,
						pageLayer: m,
						profileName: u,
						shouldShowPinnedPostsSection: p,
						showSignupUpsell: h,
						sort: x,
						timeSort: f,
						showNewDesignBlocking: v
					} = this.props;
					if (!m) return null;
					if (t && t.profileDeleted) return a.a.createElement(ne.default, {
						contentGateType: Cs.a.ProfileDeleted,
						profileName: u
					});
					if (t && t.profileSuspended) return a.a.createElement(ne.default, {
						contentGateType: Cs.a.ProfileSuspended,
						profileName: u
					});
					if (451 === m.status || t && t.profileBlockedForLegalReason) return a.a.createElement(ne.default, {
						contentGateType: Cs.a.ProfileBlockedForLegalReason,
						profileName: u
					});
					const O = m.queryParams && "true" === m.queryParams.consent;
					if (403 === m.status || s && !O) return a.a.createElement(js.a, {
						username: u,
						avatar: e
					});
					if (404 === m.status) return a.a.createElement(ne.default, {
						contentGateType: Cs.a.ProfileDoesNotExist,
						profileName: u
					});
					if (!u) return null;
					const g = u.toLowerCase(),
						E = `/user/${u}/`,
						C = {
							listingKey: r,
							listingName: g
						};
					if (o && !n && i === Ps.a.NoPreview && v) return a.a.createElement(hs.a, {
						contentTitle: Object(fs.e)(u)
					});
					if (!c && o && !n && i !== Ps.a.Blurred) return a.a.createElement(ne.default, {
						subredditName: u,
						contentGateType: Cs.a.Nsfw
					});
					const j = {
							inSubredditOrProfile: !Object(l.a)(u),
							listingKey: r,
							listingName: g,
							listingViewed: (e, t) => Object(Os.p)(r, x, t, e, f),
							noPostsComponent: this.renderNoPosts,
							onScroll: h,
							onTryAgain: d
						},
						y = {
							sort: x,
							baseUrl: E,
							sortOptions: b.Gb,
							timeSort: f
						},
						_ = a.a.createElement(a.a.Fragment, null, p && a.a.createElement(ps, {
							profileName: u
						}), a.a.createElement(ae.a, y), a.a.createElement(Ls, {
							username: u
						}), a.a.createElement(at, Ss({}, j, {
							excludePinnedPosts: p,
							onLoadMore: this.props.onLoadMoreConversationsItems,
							shouldShowInsightsButton: this.props.isOwnProfile
						})));
					return a.a.createElement(Es.a, {
						className: this.props.className,
						fitPageToContent: !0,
						contentNavBar: a.a.createElement(a.a.Fragment, null, a.a.createElement(it.a, {
							profileName: u,
							viewBlockedConsent: O
						})),
						content: a.a.createElement(a.a.Fragment, null, a.a.createElement(ie.a, null), _),
						sidebar: a.a.createElement(bs.a, Ss({}, C, {
							profileName: u
						}))
					})
				}
			}
			t.default = Ts(As(Object(u.a)(Object(h.a)(Object(gs.d)(Object(ce.c)(Ds))))))
		},
		"./src/reddit/reducers/features/modActivitySummaries/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/actions/modQueue/constants.ts");
			t.a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case n.l: {
						const {
							summary: s,
							subreddit: n
						} = t.payload;
						return {
							...e,
							[n.id]: {
								...e[n.id],
								...s
							}
						}
					}
					case n.i:
					case n.f:
					case n.r:
					case n.u:
					case n.A: {
						const {
							response: s
						} = t.payload;
						return {
							...e,
							...s.modActivitySummaries
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/features/realtimeModqueue/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/redux/es/redux.js"),
				o = s("./src/reddit/actions/modQueue/constants.ts");
			var r = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.m: {
							const {
								targetID: s
							} = t.payload;
							return e.includes(s) ? e : [...e, s]
						}
						case o.p: {
							const {
								targetID: s
							} = t.payload, n = e.indexOf(s);
							return n > -1 && e.splice(n, 1), e
						}
						default:
							return e
					}
				},
				a = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/actions/comment/constants.ts")),
				i = s("./src/reddit/actions/platform.ts"),
				d = s("./src/reddit/actions/post.ts");
			const c = ["isApproved", "isRemoved", "isSpam"];
			var l = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.q:
					case d.k: {
						const s = t.payload;
						return Object.keys(s).map(t => {
							const n = Object.keys(s[t]);
							let o = !1;
							n.map(e => {
								c.includes(e) && (o = !0)
							}), !e.includes(t) && o && (e = [...e, t])
						}), e
					}
					case o.p: {
						const {
							targetID: s
						} = t.payload;
						return e.includes(s) ? e : [...e, s]
					}
					case i.g:
						return [];
					default:
						return e
				}
			};
			t.a = Object(n.c)({
				toUpdate: r,
				updated: l
			})
		},
		"./src/reddit/selectors/experiments/signupUpsellExperiment.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "d", (function() {
				return b
			})), s.d(t, "f", (function() {
				return h
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				a = s("./src/reddit/selectors/meta.ts"),
				i = s("./src/reddit/selectors/experiments/index.ts");
			const d = Object(n.a)(a.h, a.d, i.e, (e, t, s) => !e && !t && !s);

			function c(e, t) {
				return s => Object(r.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: d,
					throttledVariants: {
						[o.id.Bottom_cell_dismissible]: e,
						[o.id.Bottom_cell_dismissible_immediate_trigger]: e,
						[o.id.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const l = c(o.Gb, !0),
				m = c(o.Hb, !0),
				u = c(o.Ib, !0),
				p = c(o.Gb, !1),
				b = c(o.Hb, !1),
				h = c(o.Ib, !1)
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/selectors/chatPost.ts"),
				a = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const i = e => {
					const t = Object(a.a)(e);
					return Boolean(t) && !Object(o.Bg)(t)
				},
				d = Object(n.a)(i, r.d, (e, t) => e && !t)
		},
		"./src/redditGQL/operations/GetRelatedCommunityRecommendations.json": function(e) {
			e.exports = JSON.parse('{"id":"1a3f607eabf6"}')
		},
		"./src/redditGQL/operations/GetTopKarmaSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"6a81cf281cfc"}')
		},
		"./src/redditGQL/operations/LastModActionInSubreddit.json": function(e) {
			e.exports = JSON.parse('{"id":"7888d2d30843"}')
		},
		"./src/redditGQL/operations/ModActivitySummaryByID.json": function(e) {
			e.exports = JSON.parse('{"id":"d968e053a7b8"}')
		},
		"./src/redditGQL/operations/SingleCommentById.json": function(e) {
			e.exports = JSON.parse('{"id":"7e1a2a69e2d6"}')
		},
		"./src/redditGQL/operations/SinglePostInfoById.json": function(e) {
			e.exports = JSON.parse('{"id":"7226f3bb6e27"}')
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"be09d1d59e65"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileOverview.8e3bc0d1844fb876acdb.js.map