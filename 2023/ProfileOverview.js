// https://www.redditstatic.com/desktop2x/ProfileOverview.501ddace9fb14b7d8af5.js
// Retrieved at 4/24/2023, 3:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileOverview", "ModQueuePages~reddit-components-MediumPost"], {
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
			var o = s("./node_modules/react/index.js");

			function n() {
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
					const e = Object(m.a)(d.bd.Bottom_cell),
						t = Object(m.a)(d.bd.Bottom_cell_dismissible),
						s = Object(m.a)(d.bd.Bottom_cell_dismissible_immediate_trigger),
						o = Object(m.a)(d.bd.Bottom_cell_signup_upsell_copy),
						n = Object(m.a)(d.bd.Bottom_cell_surprise_install_copy),
						r = Object(m.a)(d.bd.Bottom_sheet);
					return e || o || n ? l.b.SignupUpsellCell : t || s ? l.b.SignupUpsellCellDismissible : r ? l.b.SignupUpsellBottomSheet : null
				},
				p = s("./src/reddit/hooks/promo/useIsPromoShown.ts");
			const b = 250,
				h = 1e3;

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
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
						} = Object(c.a)(), s = u(), r = Object(p.a)(s), l = Object(m.a)(d.bd.Bottom_cell_dismissible_immediate_trigger);
						return o.useMemo(() => a()(() => {
							if (!r && s) {
								const e = document.getElementById(i.e),
									o = e ? e.scrollTop : n().scrollY,
									r = n().innerHeight,
									a = r / 3,
									d = 2 * r;
								o >= (l ? a : d) && t(s)
							}
						}, e, {
							maxWait: h
						}), [l, r, s, t, e])
					}();
					return o.createElement(e, x({
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
			var o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/bulkActions/constants.ts");
			const r = Object(o.a)(n.c),
				a = Object(o.a)(n.b),
				i = Object(o.a)(n.a)
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return k
			})), s.d(t, "b", (function() {
				return N
			}));
			var o, n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/performanceTimings/index.tsx"),
				a = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(o || (o = {}));
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
					const o = Object(h.bb)(e, {
						subredditName: s.name
					});
					return o && o.postIds && o.postIds.length ? o.postIds : f
				}), (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(h.X)(e, {
						subredditId: s
					}) : null
				}),
				O = (e, t, s, o, n) => {
					const r = n.find(e => e <= t) || -1,
						a = n.find(e => e > t) || 1 / 0;
					return t !== a && t !== r && (!(r + s > t) && (!(t + s > a) && !((e, t, s) => {
						const o = s[t - 1],
							n = s[t],
							r = n && Object(b.G)(e, {
								postId: o
							}) || null,
							a = n && Object(b.G)(e, {
								postId: n
							}) || null;
						return r && r.isSponsored || a && a.isSponsored
					})(e, t, o)))
				},
				g = [3];
			Object(u.a)((e, t) => {
				let {
					existingDUPositions: s,
					listingProps: o
				} = t;
				const n = s.slice().sort();
				let r = -1;
				const a = Object(b.z)(e, {
						listingKey: o.listingKey
					}),
					i = [];
				return g.forEach(t => {
					let s = r + t;
					if (!(s >= a.length)) {
						for (; s < a.length && !O(e, s, t, a, n);) s += 1;
						s < a.length && (i.push(s), r = s)
					}
				}), i
			});
			var E = s("./src/reddit/selectors/platform.ts");
			const C = Object(n.a)(a.f),
				y = Object(n.a)(a.d),
				j = Object(n.a)(a.g),
				_ = Object(n.a)(a.c),
				k = Object(n.a)(a.e),
				P = (Object(n.a)(a.i), Object(n.a)(a.h), () => async (e, t, s) => {
					let {
						gqlContext: n
					} = s;
					const r = t(),
						a = (e => {
							return e.focusedVerticals.api.pending.focusedVerticalGqlPending
						})(r),
						c = (e => {
							const t = Object(x.R)(e),
								s = p.d.geoSubredditRecommendationDULoggedIn(e),
								o = p.d.geoSubredditRecommendationDULoggedOut(e);
							return t && s || !t && o
						})(r),
						u = Object(x.R)(r);
					if (a || !c) return;
					e(j());
					let b = !1;
					try {
						const t = u ? o.LoggedInGeo : o.LoggedOutGeo,
							s = await ((e, t, s) => Object(i.a)(e, {
								...d,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(n(), t);
						if (s.ok && s.body) {
							const {
								data: t
							} = s.body;
							if (w(t)) {
								if (I(t)) {
									e(_({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), b = !0
								} else if (S(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: o,
											interactedSubreddit: n,
											category: r
										} = s.focusRecommendations[0],
										a = [o, n],
										i = Object(m.d)(a),
										d = Object(l.b)(a),
										c = Object(m.c)(o),
										u = {
											recommendedSubredditIds: [o.id],
											interactedSubredditIds: [n.id],
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
					b || e(y({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}),
				w = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				},
				I = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				},
				S = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						o = t && t.type;
					return !!(s && !I(e) && o === c.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				},
				N = () => async (e, t, s) => {
					var o, n;
					const a = t(),
						i = (e => e.focusedVerticals.lastLoadedEnv)(a);
					if ((e => {
							return e.focusedVerticals.api.error.focusedVerticalGqlError
						})(a) || null === i || "client" === i) {
						const s = null === (n = null === (o = Object(E.b)(t())) || void 0 === o ? void 0 : o.routeMatch) || void 0 === n ? void 0 : n.route.chunk,
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
				return M
			}));
			var o = s("./src/lib/makeGqlRequest/index.ts"),
				n = (s("./src/redditGQL/operations/LastModActionInSubreddit.json"), s("./src/redditGQL/operations/ModActivitySummaryByID.json")),
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
				y = s("./src/reddit/selectors/user.ts"),
				j = s("./src/redditGQL/types.ts");
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
					const i = await ((e, t) => Object(o.a)(e, {
							...n,
							variables: t
						}))(a(), {
							id: e
						}),
						d = Object(b.a)(i.body.data.subredditInfoById);
					t(_(d))
				}, P = e => async (t, s, o) => {
					let {
						gqlContext: n
					} = o;
					e && t(k(e))
				}, w = Object(d.a)(O.m), I = (e, t) => {
					const s = (e => {
							var t, s;
							const {
								subredditName: o,
								pageName: n
							} = (null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || {}, r = (null === (s = e.platform.currentPage) || void 0 === s ? void 0 : s.queryParams) || {};
							return {
								page: (null == r ? void 0 : r.page) || "1",
								pageName: n,
								subredditName: o || (null == r ? void 0 : r.subreddit),
								queryParams: r
							}
						})(e),
						o = Object(C.d)(e, s);
					return null == o ? void 0 : o.includes(t)
				}, S = [j.y.ApproveComment, j.y.ApproveLink, j.y.RemoveComment, j.y.RemoveLink, j.y.SpamComment, j.y.SpamLink], N = e => async (t, s, o) => {
					let {
						gqlContext: n
					} = o;
					var r, a;
					const {
						moderatorID: i,
						targetID: d,
						action: c
					} = null === (r = null == e ? void 0 : e.subscribe) || void 0 === r ? void 0 : r.data, l = s(), p = Object(y.k)(l), b = S.includes(c), h = i === p, x = I(l, d);
					if (!b || h || !x) return;
					const f = await Object(u.b)(n(), {
						id: i
					}) || (null === (a = Object(y.Bb)(l, {
						userId: i
					})) || void 0 === a ? void 0 : a.username);
					f && t(Object(m.z)(f)), t(w({
						targetID: d
					}))
				}, T = Object(d.a)(O.p), R = Object(d.a)(O.o), M = e => async (t, s, n) => {
					let {
						gqlContext: i
					} = n;
					var d, m, u, b, f, v;
					const O = Object(x.a)(e),
						g = s(),
						E = null === (m = null === (d = null == g ? void 0 : g.features) || void 0 === d ? void 0 : d.realtimeModqueue) || void 0 === m ? void 0 : m.toUpdate.includes(e),
						C = I(g, e);
					if (!E || !C) return;
					const y = O ? () => ((e, t) => Object(o.a)(e, {
							...a,
							variables: t
						}))(i(), {
							id: e
						}) : () => ((e, t) => Object(o.a)(e, {
							...r,
							variables: t
						}))(i(), {
							id: e
						}),
						j = await y();
					if (j.ok) {
						if (O) {
							const s = null === (b = null === (u = null == j ? void 0 : j.body) || void 0 === u ? void 0 : u.data) || void 0 === b ? void 0 : b.postInfoById;
							t(Object(l.Q)({
								[e]: Object(h.f)(s)
							}))
						} else {
							const s = null === (v = null === (f = null == j ? void 0 : j.body) || void 0 === f ? void 0 : f.data) || void 0 === v ? void 0 : v.commentById;
							t(Object(c.j)({
								[e]: Object(p.a)(s)
							}))
						}
						t(R(e)), t(T({
							targetID: e
						}))
					}
				}
		},
		"./src/reddit/actions/pages/profileOverview/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "profileOverviewConversationsPending", (function() {
				return je
			})), s.d(t, "profileOverviewConversationsLoaded", (function() {
				return _e
			})), s.d(t, "profileOverviewConversationsFailed", (function() {
				return ke
			})), s.d(t, "profileOverviewChronoPending", (function() {
				return Pe
			})), s.d(t, "profileOverviewChronoLoaded", (function() {
				return we
			})), s.d(t, "profileOverviewChronoFailed", (function() {
				return Ie
			})), s.d(t, "profileOverviewConversationsRequested", (function() {
				return Se
			})), s.d(t, "profileOverviewRequested", (function() {
				return Ne
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/lodash/pick.js"),
				n = s.n(o),
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
				y = s("./src/reddit/actions/changeUsername.ts"),
				j = s("./src/reddit/actions/contentGate.ts"),
				_ = s("./src/reddit/actions/externalAccount.ts"),
				k = s("./src/reddit/actions/pinnedPost.ts"),
				P = s("./src/reddit/actions/platform.ts"),
				w = s("./src/reddit/actions/profile/index.ts"),
				I = s("./src/reddit/actions/trophyCase.ts"),
				S = s("./src/reddit/constants/errors.ts"),
				N = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				T = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				R = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				M = s("./src/lib/initializeClient/installReducer.ts"),
				L = s("./node_modules/redux/es/redux.js"),
				A = s("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const D = {};
			var F = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case R.c:
					case R.b:
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
					case R.a:
					case A.a: {
						const {
							key: s,
							error: o
						} = t.payload;
						return {
							...e,
							[s]: o
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
						case R.c:
						case A.c: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case R.b:
						case R.a:
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
				V = Object(L.c)({
					error: F,
					pending: U
				});
			const W = {};
			var G = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : W,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case R.b: {
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
							fetchedToken: o
						} = t.payload, n = e[s];
						return {
							...e,
							[s]: {
								...n,
								[o]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const z = {};
			var H = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case R.b:
						case A.b: {
							const {
								key: s,
								overviewIds: o
							} = t.payload, n = e[s] || [];
							return {
								...e,
								[s]: [...n, ...o]
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
						case R.b:
						case A.b: {
							const {
								key: s,
								dist: o,
								token: n
							} = t.payload;
							return n ? {
								...e,
								[s]: {
									dist: o,
									token: n
								}
							} : Object(K.a)(e, s)
						}
						default:
							return e
					}
				},
				J = Object(L.c)({
					api: V,
					fetchedTokens: G,
					ids: H,
					loadMore: Q
				});
			const Z = {};
			var X = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Z,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case R.f:
					case R.e: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case R.d: {
						const {
							key: s,
							error: o
						} = t.payload;
						return {
							...e,
							[s]: o || {}
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
						case R.f: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case R.e:
						case R.d: {
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
			var oe = function() {
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
							error: o
						} = t.payload;
						return {
							...e,
							[s]: o || {}
						}
					}
					default:
						return e
				}
			};
			const ne = {};
			var re = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ne,
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
					error: oe,
					pending: re
				});
			const ie = {};
			var de = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ie,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case R.e:
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
						prev: o
					} = e;
					return {
						depth: t,
						next: s,
						prev: o
					}
				})
			}
			const xe = (e, t, s) => {
				const o = {};
				for (const n in t) {
					const e = t[n],
						s = e.postId;
					o.hasOwnProperty(s) ? o[s] = {
						...o[s],
						[n]: e
					} : o[s] = {
						[n]: e
					}
				}
				for (const n in s) {
					const e = s[n],
						t = e.postId;
					o.hasOwnProperty(t) ? o[t] = {
						...o[t],
						[n]: e
					} : o[t] = {
						[t]: e
					}
				}
				return o
			};
			var fe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : be,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case R.e:
					case te.e: {
						const {
							comments: s,
							extraComments: o,
							postIds: n,
							profileName: r
						} = t.payload, a = xe(n, s, o), i = {};
						for (const e of n) {
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
							commentLists: o,
							extraComments: n,
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
								o = s && s.id || "";
							return {
								...e,
								[t]: {
									...e[t],
									[o]: {
										...e[t][o],
										next: null
									}
								}
							}
						}
						const d = a[0],
							c = he(xe(a, s, n)[d]),
							l = Object(ue.a)(d, i),
							m = {
								...e[l]
							},
							u = m[r].prev,
							p = u && u.id || "",
							b = o[d].head,
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
					case R.e:
					case te.e: {
						const {
							commentLists: s,
							postIds: o,
							profileName: n
						} = t.payload, r = {};
						for (const e of o) {
							r[Object(ue.a)(e, n)] = s[e] && s[e].head ? s[e].head.id : null
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
						case R.e:
						case te.e: {
							const {
								postIds: s,
								profileName: o
							} = t.payload, n = {};
							for (const e of s) {
								n[Object(ue.a)(e, o)] = e
							}
							return {
								...e,
								...n
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
				ye = Object(L.c)({
					chrono: J,
					conversations: Ce
				});
			Object(M.a)({
				pages: {
					profileOverview: ye
				}
			});
			const je = Object(C.a)(R.f),
				_e = Object(C.a)(R.e),
				ke = Object(C.a)(R.d),
				Pe = Object(C.a)(R.c),
				we = Object(C.a)(R.b),
				Ie = Object(C.a)(R.a),
				Se = (e, t, s, o) => async (o, n, a) => {
					const i = n(),
						d = !!i.listings.postOrder.ids[e],
						x = !!Object(O.c)(i, {
							listingKey: e
						});
					if (!!Object(O.d)(i, {
							listingKey: e
						}) || d && !x) return;
					o(je({
						key: e
					}));
					const f = await Object(T.a)("profile", () => ((e, t, s) => Object(m.a)(e, {
							data: s,
							endpoint: Object(u.a)(Object(l.a)(Object(p.a)(Object(b.a)(`${c.a.gatewayUrl}/desktopapi/v1/user/${t}/conversations`)))),
							traceRequestName: "get_profile_conversations",
							method: r.pb.GET
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
						o(_e({
							key: e,
							meta: i.meta,
							profileName: t,
							...v,
							postIds: C
						}));
						const s = Object(g.o)(n(), t);
						o(Object(k.h)({
							profileId: s,
							pinned: E
						}))
					} else o(ke({
						account: f.body.data ? f.body.data.account : null,
						error: f.body.reason ? {
							type: f.body.reason
						} : f.error,
						key: e
					})), f.body.reason === S.a.DeletedProfile && o(Object(j.v)({
						profileName: t
					})), o(Object(P.o)(f.status))
				}, Ne = e => async (t, s, o) => {
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
							...n()(e.queryParams, f.q),
							sort: m,
							layout: h,
							t: u
						},
						j = [t(w.d(O))],
						k = Object(N.a)(O, r.Ab, m, e.queryParams);
					if (t(P.n({
							title: Te(s(), p)
						})), s().listings.postOrder.ids[k] && !s().listings.postOrder.api.error[k] ? b = !0 : j.push(t(Se(k, O, C, !0))), j.push(t(Object(a.b)())), await Promise.all(j), b) return;
					const S = s();
					if (!S.platform.currentPage) return;
					if (200 !== S.platform.currentPage.status) return;
					const T = Object(g.o)(s(), O);
					Object(E.U)(S) && Object(E.Y)(S, p) && t(Object(y.startChangeUsernameFlow)());
					const R = [t(Object(d.q)()), t(I.b(O, T)), t(w.b(O)), t(_.o(p)), t(w.i(p))];
					await Promise.all(R)
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
				return oe
			})), s.d(t, "removalReasonAddedSuccess", (function() {
				return ne
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
				return ye
			})), s.d(t, "submitRemovalReason", (function() {
				return je
			})), s.d(t, "submitBulkRemovalReason", (function() {
				return _e
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/initializeClient/installReducer.ts"),
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
							data: o
						} = s;
						return {
							...e,
							...o
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
							[s]: o,
							...n
						} = e;
						return n
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
							response: o
						} = t.payload, {
							order: n
						} = o;
						return {
							...e,
							[s]: n
						}
					}
					case d: {
						const {
							subredditId: s,
							reason: o
						} = t.payload;
						return {
							...e,
							[s]: [...e[s], o.id]
						}
					}
					case b: {
						const {
							subredditId: s,
							reasonId: o
						} = t.payload, n = [...e[s]].filter(e => e !== o);
						return {
							...e,
							[s]: n
						}
					}
					default:
						return e
				}
			};
			var y = function() {
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
				j = Object(r.c)({
					api: v,
					models: g,
					reasonOrder: C,
					removedItemIds: y
				}),
				_ = s("./src/lib/constants/index.ts"),
				k = s("./src/lib/makeActionCreator/index.ts"),
				P = s("./src/lib/makeCommentsPageKey/index.ts"),
				w = s("./src/lib/makeDraftKey/index.ts"),
				I = s("./src/reddit/actions/bulkActions/index.ts"),
				S = s("./src/reddit/actions/comment/index.ts"),
				N = s("./src/reddit/actions/comment/authoring.ts"),
				T = s("./src/reddit/actions/comment/moderation.ts"),
				R = s("./src/reddit/actions/modal.ts"),
				M = s("./src/reddit/actions/post.ts"),
				L = s("./src/reddit/actions/toaster.ts"),
				A = s("./src/reddit/constants/modals.ts"),
				D = s("./src/lib/makeApiRequest/index.ts"),
				F = s("./src/lib/omitHeaders/index.ts"),
				B = s("./src/reddit/constants/headers.ts"),
				U = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				V = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const W = (e, t) => Object(D.a)(Object(F.a)(e, [B.a]), {
					endpoint: Object(U.a)(`${e.apiUrl}/api/v1/modactions/removal_reasons/`),
					method: _.pb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				G = (e, t, s) => Object(D.a)(Object(F.a)(e, [B.a]), {
					endpoint: Object(U.a)(Object(V.a)(`${e.apiUrl}/api/v1/modactions/removal_${s}_message/`)),
					method: _.pb.POST,
					type: "json",
					data: t
				});
			var z = s("./src/reddit/helpers/isPost.ts"),
				H = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				K = s("./src/reddit/helpers/routeKey/index.ts"),
				q = s("./src/reddit/models/ModQueue/index.ts"),
				Q = s("./src/reddit/models/PostDraft/index.ts"),
				J = s("./src/reddit/models/RemovalReason/index.ts"),
				Z = s("./src/reddit/models/Toast/index.ts"),
				X = s("./src/reddit/selectors/comments.ts"),
				Y = s("./src/reddit/selectors/platform.ts");
			Object(n.a)({
				features: {
					removalReasons: j
				}
			});
			const $ = Object(k.a)("REMOVALREASONS__LOAD_PENDING"),
				ee = Object(k.a)(a),
				te = Object(k.a)("REMOVALREASONS__LOAD_FAILED"),
				se = e => async (t, s, o) => {
					let {
						apiContext: n
					} = o;
					const r = s().subreddits.models[e].name;
					t($());
					const a = await ((e, t) => Object(D.a)(Object(F.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: _.pb.GET
					}))(n(), r);
					a.ok ? t(ee({
						subredditId: e,
						response: a.body
					})) : t(te(a.error))
				}, oe = Object(k.a)(i), ne = Object(k.a)(d), re = Object(k.a)(c), ae = (e, t) => async (s, n, r) => {
					let {
						apiContext: a
					} = r;
					const i = n().subreddits.models[e].name;
					s(oe());
					const d = await ((e, t, s) => Object(D.a)(Object(F.a)(e, [B.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons`),
						method: _.pb.POST,
						data: s
					}))(a(), i, t);
					if (d.ok) {
						const {
							id: n
						} = d.body, r = {
							...t,
							id: n
						};
						s(ne({
							subredditId: e,
							reason: r
						})), s(Object(L.f)({
							kind: Z.b.SuccessMod,
							text: o.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else s(re(d.error))
				}, ie = Object(k.a)(l), de = Object(k.a)(m), ce = Object(k.a)(u), le = (e, t) => async (s, n, r) => {
					let {
						apiContext: a
					} = r;
					const i = n().subreddits.models[e].name;
					s(ie());
					const d = await ((e, t, s) => Object(D.a)(Object(F.a)(e, [B.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${s.id}`),
						method: _.pb.PUT,
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
						text: o.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : s(ce(d.error))
				}, me = Object(k.a)(p), ue = Object(k.a)(b), pe = Object(k.a)(h), be = (e, t) => async (s, n, r) => {
					let {
						apiContext: a
					} = r;
					const i = n().subreddits.models[e].name;
					s(me());
					const d = await ((e, t, s) => Object(D.a)(Object(F.a)(e, [B.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${s}`),
						method: _.pb.DELETE
					}))(a(), i, t);
					d.ok ? (s(ue({
						subredditId: e,
						reasonId: t
					})), s(Object(L.f)({
						kind: Z.b.SuccessMod,
						text: o.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : s(pe(d.error))
				}, he = Object(k.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), xe = (e, t) => async (s, o, n) => {
					let {
						apiContext: r
					} = n;
					const a = o();
					a.features.removalReasons.reasonOrder[e] && a.features.removalReasons.reasonOrder[e].length > 0 || s(se(e)), s(he({
						subredditId: e,
						itemIds: t
					})), s(Object(R.i)(A.a.ADD_REMOVAL_REASON))
				}, fe = Object(k.a)("REMOVALREASONS__SUBMIT_PENDING"), ve = Object(k.a)("REMOVALREASONS__SUBMIT_SUCCESS"), Oe = Object(k.a)("REMOVALREASONS__SUBMIT_FAILED"), ge = Object(k.a)("REMOVALREASONS__MESSAGE_PENDING"), Ee = Object(k.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), Ce = Object(k.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), ye = Object(k.a)("REMOVALREASONS__MESSAGE_FAILED"), je = (e, t, s, o, n, r) => async (a, i, d) => {
					let {
						apiContext: c
					} = d;
					const l = i(),
						m = l.user.account && l.user.account.displayText,
						u = e[0],
						p = Object(z.a)(u) ? J.e.Post : J.e.Comment,
						b = p === J.e.Post ? l.posts.models[u] : l.features.comments.models[u],
						h = p === J.e.Post ? M.Q : S.j;
					if (!b || !m) return !1;
					a(fe()), a(h({
						[u]: {
							modNote: n,
							modRemovalReason: t && t.title,
							modReasonBy: m
						}
					}));
					const x = {
							itemIds: e,
							modNote: n,
							reasonId: t ? t.id : null
						},
						f = await W(c(), x);
					if (f.ok) {
						if (a(ve()), t) {
							a(ge());
							const n = {
									itemId: e,
									message: s,
									title: t.title,
									isLocked: r,
									type: o
								},
								i = await G(c(), Object(J.h)(n, p), p);
							if (i.ok) {
								if ([J.f.Public, J.f.PublicAsSubreddit].includes(o)) {
									if (a(Ce()), i.body) {
										const e = Object(H.a)(i.body),
											t = {
												comment: e,
												parentId: u
											},
											s = Object(Y.f)(l),
											o = l.platform.currentPage && l.platform.currentPage.routeMatch;
										let n = s && o && Object(K.a)(o, l, l.posts.models[e.postId]);
										if (n || (n = Object(P.a)(e.postId, null, {
												sort: _.x,
												hasSortParam: !0
											})), p === J.e.Post) {
											const s = Object(w.a)(Q.c.replyToPost, u);
											a(Object(N.r)({
												...t,
												headCommentId: Object(X.w)(l, {
													commentsPageKey: n
												}),
												commentsPageKey: n,
												draftKey: s
											}));
											const o = l.postStickiedComments.data[u];
											a(Object(T.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: n
											})), o && o !== e.id && a(Object(S.j)({
												[o]: {
													isStickied: !1
												}
											}))
										} else if (p === J.e.Comment) {
											const e = Object(w.a)(Q.c.replyToComment, b.id),
												s = Object(X.j)(l, {
													commentId: u,
													commentsPageKey: n
												});
											a(Object(N.p)({
												...t,
												parentCommentId: u,
												commentsPageKey: n,
												draftKey: e,
												depth: s + 1
											}))
										}
									}
								} else a(Ee());
								return !0
							}
							return a(ye(i.error)), !1
						}
					} else a(Oe(f.error)), a(h({
						[u]: {
							modNote: b.modNote,
							modRemovalReason: b.modRemovalReason,
							modReasonBy: b.modReasonBy
						}
					}));
					return !1
				}, _e = (e, t, s, n, r) => async (a, i, d) => {
					let {
						apiContext: c
					} = d;
					const l = i(),
						m = l.user.account && l.user.account.displayText;
					if (!m) return;
					a(fe());
					const u = Object(L.f)({
							kind: Z.b.SuccessMod,
							text: o.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [o.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						p = {
							itemIds: e,
							modNote: r,
							reasonId: t ? t.id : null
						},
						b = await W(c(), p);
					if (b.ok) {
						const o = {
							ids: e,
							operation: q.a.RemovalReason,
							username: m,
							options: {
								modNote: r,
								removalReason: t && t.title
							}
						};
						if (a(Object(I.b)(o)), t) {
							const o = {
									itemId: e,
									message: s,
									title: t.title,
									type: n
								},
								r = await G(c(), Object(J.h)(o, J.e.Bulk), J.e.Bulk);
							r.ok ? (a(Ee()), a(u)) : a(ye(r.error))
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
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
					className: o
				} = e;
				const u = Object(r.d)();
				if (!Object(r.e)(m.a) || !Object(i.B)(t) || !t.adSupplementaryText || "string" == typeof t.adSupplementaryText) return null;
				if (0 === t.adSupplementaryText.document.length) return null;
				return n.a.createElement("div", {
					className: Object(a.a)(o, b.a.AdSupplementaryText),
					"data-testid": `${t.id}-ad-supplementary-text`,
					onClick: e => {
						e.target instanceof HTMLAnchorElement && u(Object(d.y)(t, l.a.Click))
					}
				}, n.a.createElement(c.b, {
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
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
				h = s("./node_modules/react-redux/es/index.js"),
				x = s("./src/reddit/models/Audio/index.ts"),
				f = s("./src/reddit/selectors/experiments/econ/index.ts"),
				v = s("./src/reddit/components/Econ/Audio/index.m.less"),
				O = s.n(v),
				g = s("./src/config.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/Econ/Audio/MuteIcon.tsx"),
				y = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.tsx");
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _ = () => Math.floor(10 * Math.random()) + 1;
			var k = e => {
					let {
						postId: t
					} = e;
					const s = Object(h.e)(E.fb),
						[r, i] = Object(o.useState)(!1),
						[d, c] = Object(o.useState)(_());
					return Object(o.useEffect)(() => {
						let e;
						const t = setInterval(() => {
							i(!0), e = setTimeout(() => i(!1), 3500), c(_())
						}, 6e3);
						return () => {
							clearInterval(t), clearTimeout(e)
						}
					}, []), n.a.createElement("div", {
						className: O.a.classicSpeaker
					}, r && n.a.createElement(y.a, {
						ringId: `${t}`,
						className: Object(a.a)(O.a.speakerRings, {
							[O.a.nightMode]: s
						}),
						ringClassName: "speakerRing",
						isAnimated: !0
					}), n.a.createElement("img", {
						key: `audioPostAvatar--${d}`,
						className: O.a.snoovatar,
						src: `${g.a.assetPath}/img/talk/avatars/${d}.png`,
						alt: j._("Reddit Talk", null, {
							hk: "XNl4V"
						})
					}), !r && n.a.createElement("div", {
						className: O.a.muteContainer
					}, n.a.createElement(C.a, {
						className: O.a.muteIcon
					})))
				},
				P = s("./src/reddit/components/Econ/Audio/UpcomingTalk/index.tsx");
			const {
				fbt: w
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var I = e => {
					let {
						post: t
					} = e;
					const {
						audioRoom: s,
						postId: o,
						author: r
					} = t;
					return Object(h.e)(f.m) && s.roomStatus === x.b.NotStarted ? n.a.createElement(P.a, {
						postId: o,
						author: r,
						roomId: s.roomId,
						isClassicView: !0
					}) : (null == s ? void 0 : s.isLive) ? n.a.createElement("a", {
						href: `https://www.reddit.com/talk/${s.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: O.a.liveClassicContainer,
						"data-testid": "audioroom-classic-live"
					}, n.a.createElement(k, {
						postId: o
					})) : n.a.createElement("div", {
						className: O.a.endedClassicContainer
					}, n.a.createElement(C.a, {
						className: O.a.muteIcon
					}))
				},
				S = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				N = s("./src/reddit/components/ExpandoButton/index.tsx"),
				T = s("./src/reddit/components/Flatlist/index.tsx"),
				R = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				M = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				L = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				A = s("./src/reddit/components/ModModeReports/index.tsx"),
				D = s("./src/reddit/components/ModModeReports/helpers.ts"),
				F = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				B = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				U = s("./src/reddit/components/PostContainer/index.tsx"),
				V = s("./src/reddit/components/PostMeta/index.tsx"),
				W = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				G = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				z = s("./src/reddit/components/PostTitle/index.tsx"),
				H = s("./src/reddit/components/PostTopMeta/index.tsx"),
				K = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				q = s("./src/reddit/models/Media/index.ts"),
				Q = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				J = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				Z = s("./src/reddit/constants/postLayout.ts"),
				X = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				Y = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				$ = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				ee = s("./src/reddit/helpers/search/renderMedia.tsx"),
				te = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				se = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				oe = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ne = s.n(oe),
				re = s("./src/reddit/models/Post/index.ts"),
				ae = s("./src/redditGQL/types.ts"),
				ie = s("./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx"),
				de = s("./src/reddit/components/ClassicPost/index.m.less"),
				ce = s.n(de);

			function le() {
				return (le = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const me = Object(i.a)(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: i,
					handleVote: h,
					isExpanded: f,
					inSubredditOrProfile: v,
					eventFactory: O,
					flairStyleTemplate: g,
					formatTitle: E,
					hostPostData: C,
					isCheckboxSelected: y,
					isCurrentUserProfilePost: j,
					isFrontpage: _,
					isGalleryTileLayoutDefault: k,
					isLoggedIn: P,
					isOverlay: w,
					imageGalleryCurrentItem: J,
					moderatorPermissions: oe,
					modModeEnabled: de,
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
					shouldShowInsightsButton: ye,
					subredditOrProfile: je,
					toggleCheckbox: _e,
					userIsOp: ke,
					shouldShowGalleryTileOption: Pe,
					showPromotedCTA: we,
					showCTAExperimentDesign: Ie
				} = e, Se = Object(l.a)(), Ne = Object(c.a)(f);
				Object(o.useEffect)(() => {
					be && Ne !== f && be(xe.id)
				}, [f, be, xe.id, Ne]);
				const Te = ve ? void 0 : g,
					Re = s || void 0,
					Me = Object($.a)(oe),
					Le = Object(X.a)(oe),
					Ae = Object(Y.a)(oe),
					De = de && $.a,
					Fe = Object(L.a)(xe),
					Be = Object(D.c)(xe),
					Ue = !!xe.media && xe.media.type === q.o.RTJSON,
					Ve = ke && Ue,
					We = v && !Ce,
					Ge = !!xe.recommendationContext,
					ze = {
						flairStyleTemplate: Te,
						post: xe,
						inSubredditOrProfile: v,
						isCurrentUserProfilePost: j,
						isOverlay: w,
						shouldShowSubscribeButton: !(_ && P) || Ge && P,
						subredditOrProfile: je
					},
					He = Object(r.t)(xe, J),
					[Ke, qe] = Object(o.useState)(!1),
					Qe = Object(o.useCallback)(() => {
						qe(!Ke), Se(Object(se.d)(fe))
					}, [Ke, fe, Se]);
				let Je = n.a.createElement(Q.a, {
					className: ce.a.classicThumbnail,
					crosspost: Re && xe,
					isMeta: xe.isMeta,
					post: Re || xe,
					redditStyle: ve,
					templatePlaceholderImage: Te && Te.postPlaceholderImage
				});
				Object(x.c)(xe) && (Je = n.a.createElement(I, {
					post: xe
				}));
				const Ze = Object(re.r)(xe);
				return n.a.createElement(U.b, {
					className: Object(a.a)(ne.a.classicPostStyles, ce.a.postContainer, Object(te.a)(e), {
						[ce.a.shouldShowOverflow]: ye
					}, t),
					isOverlay: w,
					style: {
						...Object(te.d)(e),
						...Object(te.b)(Te)
					},
					post: xe,
					onClick: me,
					eventFactory: O
				}, n.a.createElement(G.a, {
					model: xe,
					handleVote: h,
					showBulkActionCheckbox: ge,
					isCheckboxSelected: y,
					toggleCheckbox: _e,
					flairStyleTemplate: Te,
					redditStyle: ve,
					postId: fe
				}), n.a.createElement(B.a, {
					className: ye ? ce.a.shouldUseRoundedBorder : void 0,
					"data-click-id": "background",
					flairStyleTemplate: Te
				}, n.a.createElement(S.a, {
					className: ce.a.eventMeta,
					post: xe
				}), n.a.createElement("div", {
					className: ce.a.mainBody
				}, n.a.createElement("div", {
					className: We ? ce.a.expandoContainer : ce.a.thumbnailContainer
				}, !We && Je, n.a.createElement(N.a, {
					crosspost: Re,
					className: ce.a.rightExpando,
					isExpanded: !!f,
					post: xe,
					useMediaIcons: !1
				})), n.a.createElement("div", {
					className: Object(a.a)(ce.a.content, {
						[ce.a.showBulkActionCheckbox]: ge
					}),
					"data-click-id": "body"
				}, Ze && n.a.createElement(F.a, {
					content: xe.recommendationContext.content,
					layout: Z.g.Classic,
					post: xe
				}), n.a.createElement(z.c, {
					className: he ? ce.a.titleWithPoll : void 0,
					format: E,
					poll: he,
					post: xe,
					redditStyle: ve,
					size: z.b.Medium,
					titleColor: Te && Te.postTitleColor,
					isOverlay: w
				}, xe.source && !Re && !xe.isSurveyAd && n.a.createElement(K.a, {
					href: xe.source.url,
					isSponsored: xe.isSponsored,
					postId: xe.id,
					source: xe.source
				}, Object(d.a)(xe))), n.a.createElement(V.a, le({
					key: "PostMeta"
				}, ze)), de && Me && Fe && n.a.createElement(M.a, {
					thing: xe
				}), de && Me && Be && n.a.createElement(A.a, {
					onIgnoreReports: ue,
					reportable: xe
				}), we && Object(r.v)(xe, J) && n.a.createElement(m.a, {
					ctaExperimentDesign: Ie && "classic",
					className: Object(a.a)(ce.a.adLinkWrapper, {
						[ce.a.ctaExperiment]: Ie
					})
				}, n.a.createElement(u.a, {
					post: xe,
					adLinkContent: He,
					ctaExperimentDesign: Ie && "classic"
				})), xe.discussionType === ae.o.Chat && n.a.createElement(ie.a, {
					postId: xe.id
				}), n.a.createElement("div", {
					className: ce.a.flatlistContainer
				}, n.a.createElement(N.a, {
					className: ce.a.leftExpando,
					crosspost: Re,
					isExpanded: !!f,
					post: xe,
					useMediaIcons: !1
				}), n.a.createElement(p.a, {
					className: ce.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: Te,
					model: xe,
					onVoteClick: h
				}), n.a.createElement(T.a, {
					className: ce.a.flatlistSeparator
				}), !xe.isSurveyAd && n.a.createElement(T.c, {
					className: ce.a.flatlist,
					currentUser: i,
					hasModFlairPerms: Le,
					hasModPostPerms: Me,
					hasModFullPerms: Ae,
					hostPostData: C,
					isOverlay: !!w,
					modModeEnabled: de,
					onClickInsightsButton: Qe,
					onIgnoreReports: ue,
					onOpenReportsDropdown: pe,
					post: xe,
					shouldShowInsightsButton: ye,
					showEditPost: Ve,
					showEditFlair: Ee,
					tooltipType: w ? H.f.Lightbox : void 0,
					useFlatlistBreakpoints: Object(W.b)({
						editPost: !De,
						hide: !De,
						report: !De,
						mute: !De,
						save: !De
					})
				})), n.a.createElement(R.d, null))), Object(ee.a)(xe, ce.a, Oe, f, Pe, k), je && Ke && n.a.createElement(b.a, {
					className: ce.a.creatorStatsContainer,
					post: xe,
					subreddit: je,
					isOwnProfileStats: !0
				})))
			});
			t.default = Object(J.a)(me)
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
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
			class m extends n.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						children: t,
						className: s,
						comment: o,
						onClick: r,
						style: a
					} = this.props;
					return n.a.createElement("div", {
						className: Object(i.a)(s, `Comment ${o.id}`),
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: t => {
							!this.cancelClick && t.button < 2 && e(() => r && r(t, o))(t)
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = .75, f = 10 * d.N;
			class v extends n.a.Component {
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
					return s ? n.a.createElement("div", null, e()) : n.a.createElement("div", {
						className: b.a.collapsedCommentWrapper
					}, n.a.createElement("div", {
						className: b.a.collapsedCommentLine,
						style: {
							height: t
						}
					}, n.a.createElement("div", {
						ref: e => this.commentElement = e
					}, e(b.a.rtjCollapsed))), n.a.createElement("a", {
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
				y = s("./src/lib/makeCommentsPageKey/index.ts"),
				j = s("./src/lib/makeDraftKey/index.ts"),
				_ = s("./src/reddit/actions/comment/index.ts"),
				k = s("./src/reddit/actions/comment/authoring.ts"),
				P = s("./src/reddit/actions/comment/moderation.ts"),
				w = s("./src/reddit/actions/gold/modals.ts"),
				I = s("./src/reddit/actions/modal.ts"),
				S = s("./src/reddit/actions/reportFlow/index.ts"),
				N = s("./src/reddit/actions/tooltip.ts"),
				T = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				R = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				M = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				L = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				A = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				D = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				F = s("./src/reddit/components/ModModeReports/helpers.ts"),
				B = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				U = s("./src/reddit/contexts/InsideOverlay.tsx"),
				V = s("./src/reddit/contexts/PageLayer/index.tsx"),
				W = s("./src/reddit/helpers/correlationIdTracker.ts"),
				G = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				z = s("./src/reddit/helpers/overlay/index.ts"),
				H = s("./src/reddit/helpers/trackers/lightbox.ts"),
				K = s("./src/reddit/models/PostDraft/index.ts"),
				q = s("./src/reddit/models/Comment/index.ts"),
				Q = s("./src/reddit/selectors/activeModalId.ts"),
				J = s("./src/reddit/selectors/comments.ts"),
				Z = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				X = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Y = s("./src/reddit/selectors/posts.ts"),
				$ = s("./src/reddit/selectors/tooltip.ts"),
				ee = s("./src/reddit/selectors/user.ts"),
				te = s("./src/reddit/components/OverflowMenu/index.tsx"),
				se = s("./src/reddit/components/ReportFlow/index.tsx"),
				oe = s("./src/reddit/components/ReportFlow/new.tsx"),
				ne = s("./src/reddit/components/ShareMenu/index.tsx"),
				re = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ae = s("./src/reddit/controls/Dropdown/Row.tsx"),
				ie = s("./src/reddit/helpers/trackers/modTools.ts"),
				de = s("./src/reddit/layout/row/Inline/index.tsx"),
				ce = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				le = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				me = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ue = s("./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less"),
				pe = s.n(ue),
				be = s("./src/lib/constants/icons.ts"),
				he = s("./src/lib/lessComponent.tsx"),
				xe = s("./src/reddit/icons/fonts/index.tsx"),
				fe = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx");
			const ve = he.a.wrapped(te.b, "OverflowMenu", pe.a),
				Oe = he.a.wrapped(R.a, "ModToolsFlatlist", pe.a),
				ge = he.a.wrapped(D.a, "ModActionsMenu", pe.a),
				Ee = he.a.wrapped(ae.b, "DropdownRow", pe.a),
				Ce = he.a.wrapped(de.a, "Flatlist", pe.a),
				ye = he.a.button("Button", pe.a),
				je = Object(V.v)(),
				_e = e => `Comment-${e}--Modal--DeleteComment`,
				ke = e => `Distinguish--Dropdown--${e}`,
				Pe = (e, t) => `${e}--${t}-overflow-menu`,
				we = e => `View--Reports--${e}`,
				Ie = Object(a.c)({
					activeTooltipId: $.a,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Q.a)(e) === _e(s.id)
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(J.E)(e, {
							commentId: s.postId
						})
					},
					isLoggedIn: ee.S,
					moderatorPermissions: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(X.n)(e, {
							subredditId: s.subredditId
						})
					},
					currentUser: ee.m,
					modModeEnabled: V.W,
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Y.B)(e, {
							postId: s.postId
						})
					},
					commentPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(J.m)(e, {
							commentId: s.id
						})
					},
					reportFlowIsOpen: (e, t) => {
						let {
							comment: s
						} = t;
						var o, n;
						return (null === (n = null === (o = e.features) || void 0 === o ? void 0 : o.reportFlow) || void 0 === n ? void 0 : n.postOrCommentId) === s.id
					},
					subreddit: V.s,
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Y.V)(e, {
							postId: s.postId
						})
					},
					reportingRevampEnabled: Z.a
				});
			class Se extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(ie.c)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleEdit = () => this.props.handleEdit(this.props.commentPermalink), this.handleIgnoreReports = () => {
						this.props.onIgnoreReports(), this.sendCommentReportEvent(this.props.comment.ignoreReports ? "restore_reports" : "ignore_reports")
					}, this.handleGild = async () => {
						const e = Object(W.d)(W.a.GildingFlow, !0);
						this.props.onGildClick(e);
						const {
							clickGildEvent: t
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(t(this.props.comment.id))
					}, this.handleModActionsMenu = () => this.props.sendEvent(Object(ie.c)("comment_mod_action_menu", this.props.comment.id)), this.handleOverflowMenuClick = () => this.props.sendEvent(Object(ie.c)("comment_overflow_menu", this.props.comment.id)), this.handleDelete = () => this.props.handleDelete(), this.handleReply = () => this.props.handleReply(this.props.commentPermalink), this.handleRestrictedButtonClick = () => {
						this.props.onToggleReportsDropdown(), this.sendCommentModEventWithName("comment_report_menu")
					}, this.handleSave = () => {
						this.props.comment.isSaved ? this.props.sendEvent(Object(ie.c)("unsave", this.props.comment.id)) : this.props.sendEvent(Object(ie.c)("save", this.props.comment.id)), this.props.onToggleSave()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(ie.d)(e, this.props.comment.id)), this.sendCommentEventWithName = e => this.props.sendEvent(Object(H.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentEventWithNameShare = () => this.sendCommentEventWithName("share"), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(ie.c)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(ie.g)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? n.a.createElement(oe.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: se.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : n.a.createElement(se.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: se.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					})
				}
				renderModTools() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: o,
						showModTools: r
					} = this.props, a = Object(G.a)(s), i = !!t && t.displayText === e.author;
					if (r && a) return o ? n.a.createElement(Oe, {
						comment: e,
						isCommentAuthor: i
					}) : n.a.createElement(ge, {
						dropdownId: `${e.id}-profile-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: this.handleModActionsMenu
					}, n.a.createElement(le.a, null), n.a.createElement(T.a, {
						comment: e,
						tooltipId: `${e.id}-profile-mod-actions-menu`
					}))
				}
				renderReportsDropdown() {
					const {
						comment: e,
						modModeEnabled: t,
						showModTools: s
					} = this.props, o = Object(F.a)(e);
					if (s && Object(F.c)(e) && !t) return n.a.createElement(M.a, {
						text: `${o}`,
						onClick: this.handleRestrictedButtonClick,
						selected: this.props.activeTooltipId === we(e.id),
						id: we(e.id)
					}, n.a.createElement(B.a, {
						model: e,
						onIgnoreReports: this.handleIgnoreReports,
						tooltipId: we(e.id)
					}), e.ignoreReports ? n.a.createElement(ce.a, null) : n.a.createElement(me.a, null))
				}
				renderDistinguishDropdown() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: o,
						onDistinguishComment: r,
						showModTools: a
					} = this.props, i = Object(G.a)(s), d = !!t && t.displayText === e.author, c = !!t && t.isEmployee;
					if (a && d && !e.bannedBy && (c || i && !o)) return n.a.createElement(M.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.activeTooltipId === ke(e.id)
					}, n.a.createElement(fe.a, null), n.a.createElement(A.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.activeTooltipId === ke(e.id),
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: c,
						isUserMod: i,
						onDistinguishComment: r,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: ke(e.id)
					}))
				}
				render() {
					const {
						comment: e,
						commentPermalink: t,
						className: s,
						commentsPageKey: o,
						currentUser: r,
						deleteComment: a,
						isLoggedIn: i,
						isPendingDeletion: d,
						moderatorPermissions: c,
						postIsLocked: l,
						subreddit: m,
						toggleDeleteCommentModal: u
					} = this.props, p = Object(G.a)(c), b = !!r && r.displayText === e.author, h = (!l && !e.isLocked || p && i) && !Object(q.g)(e), x = r && e.isGildable && !Object(q.g)(e);
					return n.a.createElement("div", {
						className: s
					}, n.a.createElement(Ce, null, h && n.a.createElement(ye, {
						onClick: this.handleReply,
						disabled: d
					}, g.fbt._("Reply", null, {
						hk: "1xBqIs"
					})), x && n.a.createElement(ye, {
						onClick: this.handleGild
					}, g.fbt._("Give Award", null, {
						hk: "pQJYk"
					})), n.a.createElement(ne.a, {
						dropdownId: `${o}--${e.id}-comment-share-menu`,
						permalink: t,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == m ? void 0 : m.type
					}, n.a.createElement(ye, {
						onClick: this.sendCommentEventWithNameShare
					}, g.fbt._("share", null, {
						hk: "3YIXpa"
					}))), this.renderReportsDropdown(), n.a.createElement(ve, {
						dropdownId: Pe(o, e.id),
						onClick: this.handleOverflowMenuClick
					}, !b && !d && n.a.createElement(Ee, {
						displayText: g.fbt._("report", null, {
							hk: "ad7CE"
						}),
						onClick: this.props.onReportClick
					}, n.a.createElement(xe.a, {
						name: be.a.report
					})), n.a.createElement(Ee, {
						displayText: e.isSaved ? g.fbt._("Unsave", null, {
							hk: "4kQcAP"
						}) : g.fbt._("Save", null, {
							hk: "4yMsMq"
						}),
						isSelected: e.isSaved,
						onClick: this.handleSave
					}, e.isSaved ? n.a.createElement(xe.a, {
						name: be.a.saved
					}) : n.a.createElement(xe.a, {
						name: be.a.save
					})), b && n.a.createElement(Ee, {
						displayText: g.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: this.handleEdit
					}, n.a.createElement(xe.a, {
						name: be.a.edit
					})), b && n.a.createElement(Ee, {
						displayText: g.fbt._("delete", null, {
							hk: "e8kvB"
						}),
						onClick: this.handleDelete
					}, n.a.createElement(xe.a, {
						name: be.a.delete
					}))), this.props.isConfirmModalOpen && n.a.createElement(L.a, {
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
			var Ne = je(Object(r.b)(Ie, (e, t) => {
					let {
						comment: s,
						commentsPageKey: o
					} = t;
					return {
						deleteComment: () => o && e(Object(k.i)(s.id, s.postId)),
						onDistinguishComment: (t, o) => e(Object(P.b)(s.id, t, o)),
						onIgnoreReports: () => e(Object(P.g)(s.id)),
						onGildClick: t => e(Object(w.d)({
							correlationId: t,
							thingId: s.id
						})),
						onReportClick: () => e(Object(S.c)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(N.h)({
							tooltipId: ke(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(N.h)({
							tooltipId: we(s.id)
						})),
						onToggleSave: () => e(Object(_.o)(s.id)),
						handleDelete: () => {
							e(Object(I.i)(_e(s.id))), e(Object(N.h)({
								tooltipId: Pe(o, s.id)
							}))
						},
						handleEdit: t => {
							const o = Object(y.a)(s.postId, s.id, {}),
								n = {
									commentId: s.id,
									draftKey: Object(j.a)(K.c.edit, s.id),
									text: s.bodyMD || "",
									commentMode: s.media && s.media.rteMode,
									commentsPageKey: o
								};
							e(Object(z.a)(t)), e(Object(k.g)(n))
						},
						handleReply: t => {
							const o = Object(y.a)(s.postId, s.id, {}),
								n = {
									parentCommentId: s.id,
									commentsPageKey: o
								};
							e(Object(z.a)(t)), e(Object(k.h)(n))
						},
						toggleDeleteCommentModal: () => e(Object(I.i)(_e(s.id)))
					}
				})(Object(re.c)(Object(U.b)(Se)))),
				Te = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Re = s("./src/reddit/components/RichTextJson/index.tsx"),
				Me = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Le = s("./src/reddit/selectors/commentSelector.ts"),
				Ae = s("./src/reddit/components/Comments/ProfileComment/index.m.less"),
				De = s.n(Ae);
			const Fe = he.a.wrapped(Te.a, "TopMeta", De.a),
				Be = he.a.div("ProfileCommentWrapper", De.a),
				Ue = he.a.div("CommentBody", De.a),
				Ve = Object(r.b)(() => Object(a.c)({
					comment: (e, t) => Object(Le.c)(e, t),
					flair: J.e
				})),
				We = Object(c.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.a = Ve(e => {
				const {
					comment: t,
					commentsPageKey: s,
					flair: o,
					isExpanded: r,
					showFlatlist: a,
					showModTools: c
				} = e, l = s => n.a.createElement(Re.b, {
					className: s,
					content: Object(Me.a)(t),
					mediaMetadata: t.media && t.media.mediaMetadata,
					rtJsonElementProps: We(e),
					mediaProps: {
						alignLeft: !0,
						renderSmallMedia: !0
					}
				});
				return n.a.createElement(Be, {
					className: Object(i.a)({
						[De.a.isRemoved]: !!t.bannedBy
					})
				}, n.a.createElement(Fe, {
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: t,
					commentsPageKey: s,
					flair: o,
					renderedInOverlay: !1
				}), n.a.createElement("div", null, !t.isDeleted && n.a.createElement(Ue, null, r ? l() : n.a.createElement(O, {
					height: d.ac,
					isExpanded: r
				}, l)), !t.isDeleted && a && n.a.createElement(Ne, {
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const i = 5;

			function d(e) {
				const {
					post: t,
					postIds: s,
					subredditId: o
				} = e, d = Object(r.e)(e => e.subreddits.questions), c = Object(r.e)(e => e.posts.models);
				if (!s) return null;
				const l = s.indexOf(t.id);
				if (l < 0) return null;
				if (!p(t.id)) return null;
				const m = new Set;
				let u = !1;
				for (let n = 0, r = -999; n <= l; n += 1) {
					const e = s[n],
						t = c[e].belongsTo.id;
					p(e) && n - r >= i && !m.has(t) && (r = n, m.add(t), n === l && (u = !0))
				}
				return u ? n.a.createElement(a.a, {
					subredditId: o,
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
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = Object(o.a)({
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
			t.a = n
		},
		"./src/reddit/components/CreatorStats/loader.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
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
				return j
			})), s.d(t, "a", (function() {
				return _
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
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

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const j = 8,
				_ = 1,
				k = C.a.div("Container", E.a),
				P = C.a.div("PostMetaWrapper", E.a),
				w = C.a.wrapped(p.c, "PostTitle", E.a),
				I = C.a.div("FlatList", E.a),
				S = C.a.div("FlatItem", E.a),
				N = C.a.span("FlatListDotSpacer", E.a),
				T = C.a.wrapped(k, "LinkContainer", E.a),
				R = C.a.div("Content", E.a),
				M = C.a.div("ThumbnailContainer", E.a),
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
					isTopicPage: o,
					mediaProps: n,
					post: a,
					subredditOrProfile: i
				} = e;
				if (!a) return null;
				const d = {
						post: a,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: o,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: i,
						tooltipType: `CrosspostBox--${n.isListing}`
					},
					c = t;
				return a && !a.media ? r.a.createElement(T, {
					className: c
				}, r.a.createElement(R, null, r.a.createElement(P, null, r.a.createElement(u.a, d)), D(a), a.source && r.a.createElement(b.a, {
					post: a
				}), B(e)), V(e)) : r.a.createElement(k, {
					className: c
				}, r.a.createElement(P, null, r.a.createElement(u.a, d)), D(a), F(e), B(e))
			}));
			const D = e => r.a.createElement(w, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: p.b.Small
				}),
				F = e => {
					const {
						mediaProps: t,
						post: s
					} = e, o = {
						...t,
						post: s,
						crosspost: t.post
					};
					return r.a.createElement("div", null, r.a.createElement(m.a, y({}, o, {
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
					return r.a.createElement(I, null, r.a.createElement(S, null, o.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [o.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), r.a.createElement(N, null), r.a.createElement(S, null, U(e)))
				},
				U = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: n
					} = t;
					return r.a.createElement(i.a, {
						"data-click-id": "comments",
						to: Object(c.a)(t.permalink, !0),
						target: s ? "_blank" : void 0
					}, o.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [o.fbt._plural(n, "comment count", Object(l.b)(n))], {
						hk: "xPYWL"
					}))
				},
				V = e => r.a.createElement(M, null, r.a.createElement(h.b, {
					post: e.post
				}))
		},
		"./src/reddit/components/Econ/Audio/MuteIcon.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => {
				let {
					className: t
				} = e;
				return n.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, n.a.createElement("path", {
					d: "M13.5,9.5v-5A3.493,3.493,0,0,0,6.723,3.3l6.724,6.723A3.524,3.524,0,0,0,13.5,9.5Z"
				}), n.a.createElement("path", {
					d: "M15.5,9.5a5.472,5.472,0,0,1-.436,2.144l1.487,1.486A7.428,7.428,0,0,0,17.5,9.5Z"
				}), n.a.createElement("path", {
					d: "M2.341,4.1,6.5,8.258V9.5A3.5,3.5,0,0,0,10,13a3.441,3.441,0,0,0,1.059-.183l1.529,1.529A5.449,5.449,0,0,1,10,15,5.506,5.506,0,0,1,4.5,9.5h-2A7.5,7.5,0,0,0,9,16.925V18H7.581v2h4.838V18H11V16.925a7.388,7.388,0,0,0,3.026-1.141l1.044,1.044,1.414-1.414L3.755,2.686Z"
				})))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingInner.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => {
				let {
					className: t,
					ringId: s
				} = e;
				return n.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "49",
					height: "49",
					viewBox: "0 0 49 49",
					fill: "none"
				}, n.a.createElement("rect", {
					opacity: "0.8",
					x: "1",
					y: "1",
					width: "46",
					height: "46",
					rx: "23",
					stroke: `url(#paint0_linear_284_569805-${s})`,
					strokeWidth: "2"
				}), n.a.createElement("defs", null, n.a.createElement("linearGradient", {
					id: `paint0_linear_284_569805-${s}`,
					x1: "-4.24542",
					y1: "0.154669",
					x2: "55.6993",
					y2: "1.87207",
					gradientUnits: "userSpaceOnUse"
				}, n.a.createElement("stop", {
					stopColor: "#FF538C"
				}), n.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingMiddle.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => {
				let {
					className: t,
					ringId: s
				} = e;
				return n.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "56",
					height: "56",
					viewBox: "0 0 56 56",
					fill: "none"
				}, n.a.createElement("rect", {
					opacity: "0.5",
					x: "0.934437",
					y: "1.15466",
					width: "54",
					height: "54",
					rx: "27",
					stroke: `url(#paint0_linear_284_569806-${s})`
				}), n.a.createElement("defs", null, n.a.createElement("linearGradient", {
					id: `paint0_linear_284_569806-${s}`,
					x1: "-5.50082",
					y1: "0.65467",
					x2: "63.1858",
					y2: "2.62253",
					gradientUnits: "userSpaceOnUse"
				}, n.a.createElement("stop", {
					stopColor: "#FF538C"
				}), n.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingOuter.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => {
				let {
					className: t,
					ringId: s
				} = e;
				return n.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "64",
					height: "64",
					viewBox: "0 0 64 64",
					fill: "none"
				}, n.a.createElement("rect", {
					opacity: "0.3",
					x: "0.684437",
					y: "0.904663",
					width: "62.5",
					height: "62.5",
					rx: "31.25",
					stroke: `url(#paint0_linear_284_569807-${s})`,
					strokeWidth: "0.5"
				}), n.a.createElement("defs", null, n.a.createElement("linearGradient", {
					id: `paint0_linear_284_569807-${s}`,
					x1: "-6.36412",
					y1: "0.654671",
					x2: "72.3133",
					y2: "2.90877",
					gradientUnits: "userSpaceOnUse"
				}, n.a.createElement("stop", {
					stopColor: "#FF538C"
				}), n.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/index.m.less": function(e, t, s) {
			e.exports = {
				ringsContainer: "_3o_krdWfVVLOac1O-lVvTY",
				animated: "FTiJjjTo1ieOsSlT2EP08",
				fadein: "_2rEznjvY2VtmhBvzQVcKSA",
				reverb: "_4fN6nwGFX9KM3IkyL96J6",
				fadeout: "_2NIaOpVXH7sOwUsZ_g6ncE",
				innerRing: "fHWSRI59TPmnNbWLIicZp",
				middleRing: "_1GWX6vX1xdG3nZrRB4N5Yo",
				outerRing: "_24PG9NuvmXf9LT0ZIIzD8A"
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.m.less"),
				i = s.n(a),
				d = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingInner.tsx"),
				c = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingMiddle.tsx"),
				l = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingOuter.tsx");
			t.a = e => {
				let {
					className: t,
					ringClassName: s,
					ringId: o,
					isAnimated: a = !1
				} = e;
				return n.a.createElement("div", {
					className: Object(r.a)(i.a.ringsContainer, t, a ? i.a.animated : "")
				}, n.a.createElement(d.a, {
					ringId: o,
					className: Object(r.a)(i.a.innerRing, `${s}Inner`)
				}), n.a.createElement(c.a, {
					ringId: o,
					className: Object(r.a)(i.a.middleRing, `${s}Middle`)
				}), n.a.createElement(l.a, {
					ringId: o,
					className: Object(r.a)(i.a.outerRing, `${s}Outer`)
				}))
			}
		},
		"./src/reddit/components/Econ/Audio/UpcomingTalk/index.m.less": function(e, t, s) {
			e.exports = {
				upcomingTalkCard: "_1ng4vZrRsv4atm7KiZqzi",
				upcomingTalkContainer: "_2zQOetr4IrprS8H-cDkAyF",
				upcomingTalkInfo: "_1jr6igJaJjdBSf6gQILUHz",
				upcomingTalkLabel: "_24TGrjt1qFqchgJsm9regX",
				upcomingTalkHost: "_37h0RGkgWTCbecBmJVgL4V",
				StartTalkButton: "cw7J5pVSXn74JXDoOYlf",
				startTalkButton: "cw7J5pVSXn74JXDoOYlf",
				isNightMode: "jnzL83t6CY_CK_unbB0gI",
				MicrophoneIcon: "_2pbYJFUWfuaX3M5enGW62T",
				microphoneIcon: "_2pbYJFUWfuaX3M5enGW62T",
				hostAvatar: "_3QTjosw2bqonj6JPtDic5U",
				snoovatar: "_3YF-FxrjtGM2LtVtg_R8V_",
				snoovatarHeadshotContainer: "nU336w0rssAqUStSYM_xR",
				isImage: "_3qKfFw1Pvju3jBDzGxH6Wd",
				classicView: "_3BVeVQiYsH7FAegU2VUmV-",
				loadingIcon: "xmKaq8gXHdYMcfRximxGn"
			}
		},
		"./src/reddit/components/Econ/Audio/UpcomingTalk/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/actions/profile/index.ts"),
				d = s("./src/reddit/components/UserIcon/index.tsx"),
				c = s("./src/lib/eventTools/index.ts"),
				l = s("./src/reddit/constants/tracking.ts"),
				m = s("./src/reddit/selectors/postCreations.ts"),
				u = s("./src/reddit/selectors/telemetry.ts");
			var p = s("./src/reddit/hooks/useTracking.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.tsx"),
				x = s("./src/reddit/components/Econ/Audio/UpcomingTalk/index.m.less"),
				f = s.n(x),
				v = s("./src/config.ts"),
				O = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				E = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				C = s("./src/reddit/hooks/useGqlContext.ts");
			var y = e => n.a.createElement("svg", {
					width: "15",
					height: "19",
					viewBox: "0 0 15 19",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					d: "M8.125 15.9701V17.7501H9.925V19.0001H5.08V17.7501H6.88V15.9701C5.18411 15.8688 3.58787 15.1352 2.40663 13.9141C1.22538 12.6931 0.545039 11.0734 0.5 9.3751H1.75C1.80295 10.8493 2.43767 12.2424 3.51528 13.2497C4.59288 14.2571 6.02562 14.7965 7.5 14.7501C8.97438 14.7965 10.4071 14.2571 11.4847 13.2497C12.5623 12.2424 13.197 10.8493 13.25 9.3751H14.5C14.4551 11.0726 13.7754 12.6916 12.5952 13.9125C11.415 15.1334 9.82 15.8676 8.125 15.9701ZM3.5 8.9481V4.0481C3.5 2.98723 3.92143 1.96981 4.67157 1.21967C5.42172 0.469523 6.43913 0.0480957 7.5 0.0480957C8.56087 0.0480957 9.57828 0.469523 10.3284 1.21967C11.0786 1.96981 11.5 2.98723 11.5 4.0481V8.9481C11.5 10.009 11.0786 11.0264 10.3284 11.7765C9.57828 12.5267 8.56087 12.9481 7.5 12.9481C6.43913 12.9481 5.42172 12.5267 4.67157 11.7765C3.92143 11.0264 3.5 10.009 3.5 8.9481ZM4.75 8.9481C4.75 9.67744 5.03973 10.3769 5.55546 10.8926C6.07118 11.4084 6.77065 11.6981 7.5 11.6981C8.22935 11.6981 8.92882 11.4084 9.44454 10.8926C9.96027 10.3769 10.25 9.67744 10.25 8.9481V4.0481C10.25 3.31875 9.96027 2.61928 9.44454 2.10355C8.92882 1.58783 8.22935 1.2981 7.5 1.2981C6.77065 1.2981 6.07118 1.58783 5.55546 2.10355C5.03973 2.61928 4.75 3.31875 4.75 4.0481V8.9481Z"
				})),
				j = s("./src/reddit/endpoints/talk/index.ts"),
				_ = s("./src/reddit/actions/toaster.ts"),
				k = s("./src/reddit/models/Toast/index.ts"),
				P = s("./src/redditGQL/types.ts");
			const {
				fbt: w
			} = s("./node_modules/fbt/lib/FbtPublic.js"), I = () => n.a.createElement("span", {
				className: f.a.MicrophoneIcon
			}, n.a.createElement(y, null));
			var S = e => {
				let {
					roomId: t
				} = e;
				const s = Object(r.e)(b.fb),
					[i, d] = Object(o.useState)(!1),
					c = Object(r.d)(),
					p = Object(O.b)(),
					h = Object(C.a)();
				return n.a.createElement(g.t, {
					"data-testid": "audioroom-upcoming-start-talk",
					Icon: i ? E.a : I,
					iconClassName: i ? f.a.loadingIcon : "",
					className: Object(a.a)(f.a.StartTalkButton, {
						[f.a.isNightMode]: s
					}),
					priority: g.c.Secondary,
					size: g.d.M,
					iconPosition: g.h.L,
					disabled: i,
					text: n.a.createElement("span", {
						className: f.a.StartTalkButtonText
					}, w._("Start talk", null, {
						hk: "46EMgy"
					})),
					onClick: async () => {
						p((() => e => ({
							...u.o(e),
							source: "liveaudio",
							action: l.c.CLICK,
							noun: "go_live",
							subreddit: u.lb(e),
							liveAudioRoom: {
								title: Object(m.vb)(e),
								topicIds: Object(m.ub)(e).topics.map(e => e.id)
							}
						}))()), d(!0);
						const e = await Object(j.f)(h(), {
							input: {
								roomId: t
							}
						});
						if (!e.ok) return c(Object(_.f)({
							kind: k.b.Error,
							text: j.a[P.l.ServiceError]
						})), void d(!1);
						const s = Object(j.d)(e.body);
						if (null == s ? void 0 : s.errorState) return c(Object(_.f)({
							kind: k.b.Error,
							text: j.a[s.errorState.code] || j.a[P.l.ServiceError]
						})), void d(!1);
						(null == s ? void 0 : s.okState) && (window.location.href = `${v.a.redditUrl}/talk/${t}`)
					}
				})
			};
			const {
				fbt: N
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					author: t,
					postId: s,
					roomId: m,
					isClassicView: x = !1
				} = e;
				const v = Object(r.d)(),
					O = Object(p.a)(),
					g = Object(r.e)(b.H),
					E = Object(r.e)(b.fb),
					C = Object(r.e)(e => Object(b.Fb)(e, {
						postId: s
					})),
					y = Object(r.e)(e => Object(b.Cb)(e, {
						userName: t
					}));
				Object(o.useEffect)(() => {
					s && O && O((e => t => ({
						...u.o(t),
						source: "global",
						action: l.c.VIEW,
						noun: l.b.SCREEN,
						subreddit: u.lb(t),
						post: u.K(t, e),
						postEvent: {
							eventState: c.a.Future
						}
					}))(s))
				}, [O, s]), Object(o.useEffect)(() => {
					y || v(Object(i.d)(t))
				}, [v, t, s, y]);
				const j = () => n.a.createElement("div", {
					"data-testid": "audioroom-avatar-upcoming",
					key: `audioPostAvatar--${t}`,
					className: Object(a.a)(f.a.hostAvatar, {
						[f.a.classicView]: x
					})
				}, n.a.createElement("div", {
					className: f.a.snoovatar
				}, n.a.createElement(d.a, {
					userName: t,
					isNSFW: !g,
					className: f.a.isImage
				})), n.a.createElement(h.a, {
					ringId: `${s}`,
					className: Object(a.a)(f.a.hostRings, {
						[f.a.nightMode]: E
					}),
					ringClassName: "hostRing"
				}));
				return x ? n.a.createElement(j, null) : n.a.createElement("div", {
					className: f.a.upcomingTalkCard,
					"data-testid": "audioroom-card-upcoming"
				}, n.a.createElement("div", {
					className: f.a.upcomingTalkContainer
				}, n.a.createElement(j, null), n.a.createElement("div", {
					className: f.a.upcomingTalkInfo
				}, n.a.createElement("div", {
					className: f.a.upcomingTalkLabel
				}, N._("Upcoming Talk", null, {
					hk: "464Rq3"
				})), n.a.createElement("div", {
					className: f.a.upcomingTalkHost
				}, "u/", t), C && m && n.a.createElement(S, {
					roomId: m
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/async.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
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
		"./src/reddit/components/Econ/Marketplace/ShowcaseCollectionViewModal/async.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = s("./src/reddit/constants/modals.ts");
			const d = () => Promise.all([s.e("vendors~Avatar~CollectiblesShowcaseUnit~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceCla~cd1771e1"), s.e("vendors~Avatar~ChatPost~CollectiblesShowcaseUnit~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProf~7d152600"), s.e("vendors~Avatar~CollectiblesShowcaseUnit~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~S~bb3e1fe2"), s.e("ShowcaseCollectionViewModal")]).then(s.bind(null, "./src/reddit/components/Econ/Marketplace/ShowcaseCollectionViewModal/index.tsx")),
				c = Object(o.a)(d, {
					ssr: !1
				});
			Object(a.b)(i.a.X_SHOWCASE_COLLECTION_VIEW_MODAL, e => r.a.createElement(c, {
				onClose: e,
				onOverlayClick: e
			}))
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
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
			var o = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
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
					n = s.status === d.a.Live,
					l = s.status === d.a.Closed,
					m = Object(a.e)(e => Object(c.V)(e, {
						postId: t.id
					}));
				return r.a.createElement("div", {
					className: b.a.container
				}, r.a.createElement("div", {
					className: b.a.label
				}, r.a.createElement("span", null, null == m ? void 0 : m.displayText), n && r.a.createElement("span", {
					className: Object(o.a)(b.a.badge, b.a.live)
				}, h._("Live", null, {
					hk: "1G2P1W"
				})), l && r.a.createElement("span", {
					className: Object(o.a)(b.a.badge, b.a.ended)
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
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
				y = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const o = Object(d.a)(E.a.icon, E.a.hideOnHover);
					if (t) return r.a.createElement(b.a, {
						name: "crosspost",
						className: o
					});
					if (s.pollData) return r.a.createElement(b.a, {
						name: "poll_post",
						className: o
					});
					if (s.audioRoom) return r.a.createElement(b.a, {
						name: "audio",
						className: o
					});
					switch (e) {
						case h.o.GIFVIDEO:
							return r.a.createElement(b.a, {
								name: "gif_post",
								className: o
							});
						case h.o.IMAGE:
							return r.a.createElement(b.a, {
								name: "image_post",
								className: o
							});
						case h.o.TEXT:
						case h.o.RTJSON:
							return r.a.createElement(b.a, {
								name: "text_post",
								className: o
							});
						case h.o.VIDEO:
							return r.a.createElement(b.a, {
								name: "video_post",
								className: o
							});
						case h.o.GALLERY:
							return r.a.createElement(b.a, {
								name: "media_gallery",
								className: o
							});
						case h.o.EMBED:
						default:
							return r.a.createElement(b.a, {
								name: "embed",
								className: o
							})
					}
				};
			t.a = C(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: n,
					isCommentsPage: l,
					isExpanded: u,
					post: h,
					toggle: g,
					useMediaIcons: C
				} = e, j = s || h, _ = Object(a.e)(f.b), k = Object(a.e)(f.c), P = t => {
					(_ || k) && (t.preventDefault(), e.showModalOnPostLinkClick(j))
				}, w = j.media, I = Object(x.q)(h), S = n && !!s;
				return w && !I && !(("rtjson" === w.type || "text" === w.type || "liveaudio" === w.type) && !Object(p.a)(j)) || !!h.pollData ? r.a.createElement("button", {
					"aria-expanded": !!u,
					"aria-haspopup": !0,
					"aria-label": o.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(d.a)(t, E.a.outer),
					"data-click-id": u ? "expando_close" : "expando_open",
					"data-adclicklocation": O.a.MEDIA,
					onClick: g
				}, u ? r.a.createElement(b.a, {
					name: "collapse",
					className: E.a.icon
				}) : C ? r.a.createElement(r.a.Fragment, null, y(j.media && j.media.type, S, h), r.a.createElement(b.a, {
					name: "expand",
					className: Object(d.a)(E.a.icon, E.a.showOnHover)
				})) : r.a.createElement(b.a, {
					name: "expand",
					className: E.a.icon
				})) : j.source && j.source.url ? r.a.createElement(m.b, {
					"aria-label": o.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(d.a)(t, E.a.outer),
					"data-click-id": "expando_open",
					href: j.source.url,
					isSponsored: h.isSponsored,
					postId: h.id,
					source: h.source,
					sourceElement: l ? v.SourceElement.PostImage : v.SourceElement.ListingPostImage,
					target: "_blank"
				}, r.a.createElement(b.a, {
					name: "external_link",
					className: Object(d.a)(E.a.icon, E.a.outboundLinkIcon)
				})) : r.a.createElement(i.a, {
					"aria-label": o.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(d.a)(t, E.a.outer),
					"data-click-id": "expando_open",
					to: Object(c.a)(j.permalink),
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
			var o = s("./src/config.ts"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
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
							href: `${o.a.redditUrl}/r/${t}`,
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
							href: `${o.a.redditUrl}/message/compose/?to=r/reddit.com`,
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
				return He
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
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
				y = s("./src/reddit/selectors/activeModalId.ts"),
				j = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				_ = s("./src/reddit/selectors/moderatorPermissions.ts"),
				k = s("./src/reddit/selectors/posts.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				w = s("./src/lib/ads/index.ts"),
				I = s("./src/lib/classNames/index.ts"),
				S = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				N = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				T = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				R = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				M = s("./src/reddit/components/AdSupplementaryText/index.tsx"),
				L = s("./src/reddit/components/BoostPost/index.ts"),
				A = s("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				D = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				F = s("./src/reddit/components/CreatorStats/loader.tsx"),
				B = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				U = s("./src/reddit/components/Flatlist/index.tsx"),
				V = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				W = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				G = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				z = s("./src/reddit/components/ModModeReports/index.tsx"),
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
				fbt: oe
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var ne = () => n.a.createElement("div", {
					className: se.a.container
				}, n.a.createElement(ee.a, {
					className: se.a.pinnedIcon,
					isFilled: !0
				}), n.a.createElement("span", {
					className: se.a.metaText
				}, oe._("pinned by moderators", null, {
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
				ye = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				je = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				_e = s("./src/reddit/constants/experiments.ts"),
				ke = s("./src/reddit/helpers/chooseVariant/index.ts"),
				Pe = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const we = Object(i.a)(k.N, e => e.some(Pe.c)),
				Ie = Object(i.a)(we, e => e),
				Se = (e, t) => Object(ke.c)(e, {
					experimentName: _e.od,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && Ie(e, {
							listingKey: s
						})
					}
				});
			var Ne = s("./src/reddit/selectors/experiments/index.ts");

			function Te(e) {
				return e === _e.vf.Minimalist || e === _e.vf.Description || e === _e.vf.HotnessSignals
			}
			var Re = s("./src/reddit/selectors/modQueue.ts"),
				Me = s("./src/reddit/selectors/postFlair.ts"),
				Le = s("./src/reddit/selectors/showPromotedCTA.ts"),
				Ae = s("./src/reddit/selectors/i18n/index.ts"),
				De = s("./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx"),
				Fe = s("./src/reddit/components/LargePost/index.m.less"),
				Be = s.n(Fe);

			function Ue() {
				return (Ue = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Ve = e => {
					let {
						className: t,
						disableVisited: s,
						children: o,
						...r
					} = e;
					return n.a.createElement(N.a, Ue({}, r, {
						className: Object(I.a)(t, Be.a.styledLink, {
							[Be.a.isVisitedEnabled]: !s
						})
					}), o)
				},
				We = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(k.N)(e, {
						listingKey: s
					}) : void 0
				},
				Ge = Object(r.b)(() => Object(i.c)({
					autoplayPref: P.d,
					isModQueueDisplayEnabled: e => Object(Re.b)(e, !0),
					activeModalId: y.a,
					hideNSFWPref: P.H,
					flairStyleTemplate: ue.Y,
					isBlurredPreview: je.b,
					isCurrentUserProfilePost: k.l,
					isLoggedIn: P.S,
					isActive: k.j,
					showPromotedCTA: Le.a,
					moderatorPermissions: _.m,
					modModeEnabled: ue.W,
					posts: We,
					postHeightVariant: Se,
					shouldShowNsfwListingBelow: Ae.b,
					showEditFlair: Me.a,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subreddit: s
						} = t;
						return !!s && Object(_.i)(e, s.id)
					},
					isOptionalTextEnabled: Ce.a,
					showCTAExperimentDesign: j.a,
					isUpdatedContent: (e, t) => {
						let {
							postId: s
						} = t;
						var o, n;
						return !!(null === (n = null === (o = e.features) || void 0 === o ? void 0 : o.realtimeModqueue) || void 0 === n ? void 0 : n.updated.includes(s))
					},
					showRealtimeUpdateAnimation: (e, t) => {
						let {
							postId: s
						} = t;
						var o;
						return (null === (o = e.features) || void 0 === o ? void 0 : o.realtimeUpdateAnimationId) === s
					},
					isNightMode: P.fb
				}), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const o = t === C.a.upvoted ? Object(u.ib)(s) : Object(u.v)(s);
							e(o)
						},
						onIgnoreReports: () => e(Object(u.eb)(s)),
						onOpenReportsDropdown: t => e(Object(p.h)({
							tooltipId: t
						}))
					}
				}),
				ze = n.a.memo(e => {
					const {
						handlePostLinkClick: t,
						postPermalink: s,
						disableVisited: o,
						shouldOpenPostInNewTab: r,
						shouldStylePostAfterVisitLink: a,
						children: i
					} = e;
					return a ? n.a.createElement(Ve, {
						"data-click-id": "body",
						target: r ? "_blank" : void 0,
						disableVisited: o,
						to: s,
						onClick: t
					}, e.children) : n.a.createElement(n.a.Fragment, null, i)
				}),
				He = e => {
					const {
						isEnabled: t,
						variant: s
					} = Object(r.e)(e => (e => {
						const t = Object(ke.c)(e, {
							experimentEligibilitySelector: Ne.e,
							experimentName: _e.Dc
						}) || _e.S.Control1;
						return {
							isEnabled: Te(t),
							variant: t
						}
					})(e), r.c);
					return t ? n.a.createElement(de.b, Ue({}, e, {
						variant: s,
						pageType: de.a.Home
					})) : null
				},
				Ke = n.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: i,
						currentUser: p,
						eventFactory: C,
						flairStyleTemplate: y,
						forceLoadMedia: j,
						hideNSFWPref: _,
						hostPostData: k,
						imageGalleryCurrentItem: N,
						inSubredditOrProfile: ee = !1,
						isBlurredPreview: te,
						isCommentsPage: se,
						isCurrentUserProfilePost: oe,
						isFrontpage: de,
						isGalleryTileLayoutDefault: me,
						isModWithUserNotesPermissions: ue,
						isLoggedIn: pe,
						isOverlay: fe,
						isTopicPage: Ce,
						isCommentCountAnimationEnabled: je,
						isVoteCountAnimationEnabled: ke,
						isCountAnimShadowTestEnabled: Pe,
						listingIndex: we,
						listingKey: Ie,
						moderatorPermissions: Se,
						modModeEnabled: Ne,
						onClickPost: Te,
						onIgnoreReports: Re,
						onOpenReportsDropdown: Me,
						post: Le,
						postHeightVariant: Ae,
						scrollerItemRef: Fe,
						shouldShowGalleryTileOption: Ue,
						shouldShowInsightsButton: Ve,
						shouldShowNsfwListingBelow: We,
						showEditFlair: Ge,
						showPromotedCTA: Ke,
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
						isNightMode: ot,
						onSubscribe: nt = (() => {})
					} = e, rt = Object(O.a)(), at = !!e.redditStyle || !!e["data-redditstyle"], it = at ? void 0 : y, dt = Object(l.a)(Se), ct = Ne && dt, lt = Object(d.a)(Se), mt = Object(c.a)(Se), ut = Object(H.c)(Le), pt = Object(G.a)(Le), bt = !!Le.media && Le.media.type === g.o.RTJSON, ht = Qe && bt, xt = s ? s - X.a : void 0, ft = !!Le.recommendationContext, vt = !(de && pe || Ce) || ft && pe, Ot = (e => e === _e.jf.OnlyTitles)(Ae) && !Object(be.a)(Le), gt = (e => e === _e.jf.MediumHeight)(Ae) && !Object(be.a)(Le), Et = (e => {
						var t;
						const {
							post: s,
							postIds: o,
							posts: n
						} = e;
						if (!Object(E.v)(s) || (null === (t = s.pollData) || void 0 === t ? void 0 : t.isPrediction)) return;
						const r = o && 0 === o.indexOf(s.id),
							a = o && 1 === o.indexOf(s.id),
							i = n && n[1] && Object(E.v)(n[1]);
						return {
							hasTopCompactPostStyles: r && i,
							hasBottomCompactPostStyles: a,
							showPinnnedHeader: r
						}
					})(e), Ct = Object(r.d)(), yt = Object(r.e)(ye.b), jt = Object(r.e)(ye.c), _t = Object(r.e)(P.lb), kt = Object(ge.a)(), Pt = Le.permalink, wt = e.isCommentPermalink ? Object(he.b)(Pt) : Object(S.a)(Pt, void 0, kt), It = !!(null == k ? void 0 : k.shouldShowLinkedPosts), St = (!ee || It || We) && !Le.isSponsored, Nt = Object(w.t)(Le, N), Tt = Object(o.useRef)(null), Rt = Object(o.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && (null == Xe || Xe(we))
						})
					}, [Xe, we]);
					Object(v.a)(Tt, Rt);
					const [Mt, Lt] = Object(o.useState)(!1), At = Object(o.useCallback)(() => {
						Lt(!Mt), rt(Object(Oe.d)(Je))
					}, [Mt, rt, Je]), Dt = !!(te && (null == qe ? void 0 : qe.isNSFW)), Ft = Object(o.useRef)({
						renderingObjectInfo: Le
					}), Bt = Object(o.useCallback)(e => {
						(yt || jt) && (e.preventDefault(), Ct(Object(u.Z)(Object(he.b)(Le.permalink), Le.id)))
					}, [Ct, yt, jt, Le.id, Le.permalink]), Ut = Le && Le.media && (Le.media.type === g.o.TEXT || Le.media.type === g.o.RTJSON), Vt = Object(E.r)(Le), [Wt, Gt] = Object(o.useState)(!1);
					return n.a.createElement(n.a.Fragment, null, n.a.createElement(Z.b, {
						className: Object(I.a)(Be.a.container, i, ve.a.largeAndMediumPostStyles, ve.a.largeAndMediumActiveStyles, Object(m.a)(e), {
							[ve.a.mUseRedditTheme]: at,
							[Be.a.topCompactPost]: Et && Et.hasTopCompactPostStyles,
							[Be.a.bottomCompactPost]: Et && Et.hasBottomCompactPostStyles,
							[Be.a.shouldShowOverflow]: Ve,
							[Be.a.realtimeAnimation]: tt,
							[Be.a.realtimeUpdated]: st,
							[Be.a.isNightMode]: ot
						}),
						isOverlay: fe,
						style: et && (tt || st) ? ot ? {
							backgroundColor: "#030303"
						} : {
							backgroundColor: "#F0F5F9"
						} : Object(m.b)(e.flairStyleTemplate),
						post: Le,
						onClick: Te,
						eventFactory: C
					}, n.a.createElement("div", {
						ref: Tt
					}), n.a.createElement(re.a, {
						model: Le,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						isCountAnimShadowTestEnabled: Pe,
						isVoteCountAnimation: ke,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: it,
						redditStyle: at,
						postId: Je
					}), n.a.createElement(J.a, {
						className: Object(I.a)(Be.a.backgroundWrapper, {
							[Be.a.isEvent]: Object(xe.a)(Le),
							[Be.a.shouldUseRoundedBorder]: Ve,
							[Be.a.realtimeAnimation]: tt,
							[Be.a.realtimeUpdated]: st,
							[Be.a.isNightMode]: ot
						}),
						"data-click-id": "background",
						flairStyleTemplate: it,
						post: Le,
						redditStyle: at,
						overrideBackgroundColor: et && (tt || st) ? ot ? {
							backgroundColor: "#030303"
						} : {
							backgroundColor: "#F0F5F9"
						} : void 0
					}, n.a.createElement(B.a, {
						post: Le
					}), Et && Et.showPinnnedHeader && n.a.createElement(ne, null), Object(a.c)(Le) && n.a.createElement(n.a.Fragment, null, n.a.createElement(x.a, {
						post: Le
					}), n.a.createElement(h.a, {
						post: Le
					})), !Object(a.c)(Le) && n.a.createElement(n.a.Fragment, null, Vt && n.a.createElement(Q.a, {
						content: Le.recommendationContext.content,
						layout: le.g.Large,
						post: Le
					}), n.a.createElement(ie.a, {
						className: Be.a.postTopLine,
						hideNSFWPref: _,
						hostPostData: k,
						iconClassName: Be.a.postTopLineIcon,
						inSubredditOrProfile: ee,
						isCommentsPage: !!se,
						isCompactPinnedPost: !!Et,
						isCurrentUserProfilePost: oe,
						isModWithUserNotesPermissions: ue,
						isOverlay: !!fe,
						isTopicPage: !!Ce,
						listingKey: Ie,
						post: Le,
						shouldShowSubscribeButton: vt,
						showSubreddit: St,
						showSubredditIcon: !0,
						subredditOrProfile: qe,
						onSubscribed: () => {
							Gt(!0), nt()
						}
					}), n.a.createElement(ae.c, {
						className: Be.a.postTitle,
						post: Le,
						redditStyle: at,
						size: ae.b.Large,
						titleColor: it && it.postTitleColor,
						isOverlay: fe
					}), n.a.createElement(M.a, {
						className: Be.a.adSupplementaryText,
						post: Le,
						size: ae.b.Large
					}), Le.source && !Le.isSponsored && !Dt && n.a.createElement(n.a.Fragment, null, n.a.createElement(ce.a, {
						className: Be.a.sourceLink,
						post: Le
					}), Ye && Le.media && Le.media.type !== g.o.TEXT && Le.media.type !== g.o.IMAGE && Le.media.richtextContent && n.a.createElement(f.a, {
						content: Le.media.richtextContent,
						rtJsonElementProps: Ft.current
					}))), n.a.createElement("div", {
						className: Be.a.postMediaWrapper
					}, !Et && n.a.createElement(ze, {
						handlePostLinkClick: Bt,
						postPermalink: wt,
						disableVisited: e.disableVisited,
						shouldOpenPostInNewTab: _t,
						shouldStylePostAfterVisitLink: Ut
					}, n.a.createElement(Y.a, {
						isGalleryTileLayoutDefault: me,
						isListing: !0,
						isMediumHeight: gt,
						isNotCardView: !!fe,
						isTitleOnly: Ot,
						showCentered: !0,
						flairStyleTemplate: it,
						post: Le,
						availableWidth: xt,
						shouldLoad: j,
						scrollerItemRef: Fe,
						autoplayPref: t,
						shouldShowGalleryTileOption: Ue,
						showPromotedCTA: Ke
					}))), Ke && Object(w.v)(Le, N) && n.a.createElement(T.a, {
						className: Be.a.adLinkWrapper,
						ctaExperimentDesign: $e && "card"
					}, n.a.createElement(R.a, {
						post: Le,
						adLinkContent: Nt,
						ctaExperimentDesign: $e && "card"
					})), Ne && dt && pt && !et && n.a.createElement("div", {
						className: Be.a.modModeBannerWrapper
					}, n.a.createElement(W.a, {
						thing: Le
					})), Ne && dt && ut && !et && n.a.createElement("div", {
						className: Be.a.modModeBannerWrapper
					}, n.a.createElement(z.a, {
						onIgnoreReports: Re,
						reportable: Le
					})), Object(Ee.c)(Le) && n.a.createElement(b.a, {
						post: Le
					}), n.a.createElement(V.d, null), et && n.a.createElement(q.a, {
						post: Le
					}), Le.discussionType === E.b.Chat && n.a.createElement(De.a, {
						postId: Le.id,
						className: Be.a.liveLabel
					}), n.a.createElement("div", {
						className: Be.a.flatListContainer
					}, n.a.createElement(D.a, {
						className: Be.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: it,
						model: Le,
						onVoteClick: e.handleVote
					}), !Le.isSurveyAd && (et ? n.a.createElement(K.a, {
						content: Le,
						listingKey: Ie,
						hostPostData: k
					}) : n.a.createElement(U.c, {
						currentUser: p,
						hasModFlairPerms: lt,
						hasModFullPerms: mt,
						hasModPostPerms: dt,
						hostPostData: k,
						isCommentCountAnimation: je,
						isCountAnimShadowTestEnabled: Pe,
						isLargePost: !0,
						isOverlay: !!fe,
						listingKey: Ie,
						modModeEnabled: Ne,
						onClickInsightsButton: At,
						onIgnoreReports: Re,
						onOpenReportsDropdown: Me,
						post: Le,
						shouldShowInsightsButton: Ve,
						showEditPost: ht,
						showEditFlair: Ge,
						useFlatlistBreakpoints: Object($.b)({
							editPost: !1,
							save: !ct,
							hide: !1,
							report: !1,
							mute: !1
						})
					}))), qe && Mt && n.a.createElement(F.a, {
						className: Be.a.creatorStatsContainer,
						post: Le,
						subreddit: qe,
						isOwnProfileStats: !0
					})), Object(L.d)(Le, p) && n.a.createElement(L.a, {
						postId: Je,
						user: p
					}), de && n.a.createElement(A.a, {
						post: Le,
						postIds: null != Ze ? Ze : [],
						subredditId: null == qe ? void 0 : qe.id
					})), de && Vt && Wt && qe && n.a.createElement(He, {
						postId: Le.id,
						subredditId: qe.id,
						subredditDisplayText: qe.displayText,
						onDismiss: () => {
							Gt(!1)
						}
					}))
				});
			Ke.displayName = "LargePostMemoized";
			t.default = Object(pe.b)(Ge(Object(me.b)(Ke)))
		},
		"./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return O
			}));
			var o = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/fbt/lib/FbtPublic.js"),
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
				}, t > 1 ? n.fbt._("{userCount} here now", [n.fbt._param("userCount", `${t}`)], {
					hk: "4pUoKA"
				}) : n.fbt._("join now", null, {
					hk: "3JGiBG"
				}))
			};
			var l = s("./src/lib/LiveLabel/index.m.less"),
				m = s.n(l);
			const u = () => a.a.createElement("span", {
				className: m.a.LiveLabel
			}, n.fbt._("LIVE", null, {
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
					className: Object(o.a)(b.a.liveParticipation, s)
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
				const o = Object(x.e)(e => Object(f.a)(e, t));
				return Object(x.e)(v.e) ? a.a.createElement(h, {
					userCount: o,
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
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
					hideNSFWPref: n,
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
					shouldHideNsfwIcon: n,
					subredditOrProfile: b
				}), r.a.createElement("span", null, b.displayText)), ((e, t) => {
					if (t) return r.a.createElement("div", {
						role: "img",
						"aria-label": o.fbt._("Crossposted by{author}from{community}", [o.fbt._param("author", Object(l.e)(e)), o.fbt._param("community", t.displayText)], {
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Thumbnail/index.tsx"),
				i = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				d = s.n(i);

			function c(e) {
				const {
					source: t
				} = e.post;
				return n.a.createElement("div", {
					className: Object(r.a)(d.a.container, e.className)
				}, n.a.createElement(a.b, {
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/reddit/components/ModQueueActionBar/ModQueuePostStats.m.less"),
				i = s.n(a);
			const d = e => {
				let {
					post: t
				} = e;
				var s;
				return r.a.createElement("p", {
					className: i.a.postStats
				}, o.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [o.fbt._plural(t.numComments, "number")], {
					hk: "wt9T0"
				}), " • ", o.fbt._({
					"*": "{number} awards",
					_1: "1 award"
				}, [o.fbt._plural((null === (s = t.allAwardings) || void 0 === s ? void 0 : s.length) || 0, "number")], {
					hk: "1ldRJO"
				}))
			}
		},
		"./src/reddit/components/ModQueueActionBar/StatusDisplays/FilteredStatusDisplay.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return O
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/icons/fonts/index.tsx"),
				c = s("./src/reddit/models/ModQueueTrigger/index.ts"),
				l = s("./src/reddit/components/RichTextJson/index.tsx"),
				m = s("./node_modules/lodash/debounce.js"),
				u = s.n(m),
				p = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				b = s("./src/reddit/hooks/useInfoTextTooltip.ts");
			const h = e => {
				let {
					confidence: t,
					children: s
				} = e;
				const o = Object(b.a)({
						placement: "top-end"
					}),
					i = u()(o.hide, 500);
				return n.a.createElement("div", {
					onMouseEnter: () => {
						o.show(), i.cancel()
					},
					onMouseLeave: i
				}, n.a.createElement("button", {
					onClick: e => {
						e.stopPropagation(), o.toggle()
					},
					className: "text-12 text-neutral-content mr-sm hover:underline",
					ref: o.target.ref
				}, n.a.createElement("span", {
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
				}(t)), n.a.createElement(p.a, {
					popperProps: o.popperProps,
					arrowProps: o.arrowProps,
					visible: o.visible,
					className: "max-w-[230px] font-semibold text-12"
				}, n.a.createElement("div", {
					className: "py-xs flex gap-x-xs",
					onClick: e => e.stopPropagation()
				}, n.a.createElement(d.a, {
					name: "info_fill"
				}), n.a.createElement("div", null, s))))
			};
			var x = s("./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less"),
				f = s.n(x);
			const v = e => {
					if (e) try {
						return JSON.parse(e)
					} catch {
						return
					}
				},
				O = e => {
					let {
						content: t
					} = e;
					const s = Object(o.useMemo)(() => {
						var e, s, o, n, a, d;
						const l = [];
						(null === (e = t.modQueueTriggers) || void 0 === e ? void 0 : e.length) || t.bannedBy !== i.m || l.push({
							icon: "bot_fill",
							heading: r.fbt._("Blocked by AutoMod", null, {
								hk: "XZuzM"
							})
						});
						for (const i of t.modQueueTriggers || []) switch (i.type) {
							case c.b.AUTOMOD:
								l.push({
									icon: "bot_fill",
									heading: r.fbt._("Blocked by AutoMod", null, {
										hk: "XZuzM"
									}),
									reason: i.message
								});
								break;
							case c.b.SHADOWBANNED_SUBMITTER:
								l.push({
									icon: "ban_fill",
									heading: r.fbt._("Blocked by Automatic Filter", null, {
										hk: "2iaUCM"
									}),
									reason: i.message
								});
								break;
							case c.b.HATEFUL_CONTENT:
								l.push({
									icon: "mod_mode_fill",
									heading: r.fbt._("Blocked by Automatic Filter", null, {
										hk: "4vu7uy"
									}),
									reason: i.message
								});
								break;
							case c.b.CROWD_CONTROL:
								l.push({
									icon: "crowd_control",
									heading: r.fbt._("Blocked by Crowd Control", null, {
										hk: "6LNvT"
									}),
									reason: i.message
								});
								break;
							case c.b.BAN_EVASION:
								l.push({
									icon: "ban_fill",
									heading: r.fbt._("Blocked by Ban Evasion Protection", null, {
										hk: "1unYu9"
									}),
									reason: i.message,
									reasonRichText: v(null === (o = null === (s = i.details) || void 0 === s ? void 0 : s.recencyExplanation) || void 0 === o ? void 0 : o.richtext),
									confidence: null === (n = i.details) || void 0 === n ? void 0 : n.confidence,
									confidenceExplanation: v(null === (d = null === (a = i.details) || void 0 === a ? void 0 : a.confidenceExplanation) || void 0 === d ? void 0 : d.richtext)
								})
						}
						return l
					}, [t.modQueueTriggers, t.bannedBy]);
					return n.a.createElement("div", {
						className: f.a.filteredWrapper
					}, s.map((e, t) => {
						let {
							heading: s,
							reason: o,
							reasonRichText: r,
							icon: i,
							confidence: c,
							confidenceExplanation: m
						} = e;
						return n.a.createElement("div", {
							key: `${s}-${o}-${t}`,
							className: f.a.filteredRow
						}, n.a.createElement(d.a, {
							isFilled: !0,
							name: i,
							className: Object(a.a)(f.a.coloredIcon, f.a.icon)
						}), n.a.createElement("div", {
							className: f.a.statusText
						}, n.a.createElement("div", {
							className: f.a.statusMeta
						}, n.a.createElement("p", {
							className: f.a.status
						}, s), c && m && n.a.createElement(h, {
							confidence: c
						}, n.a.createElement(l.b, {
							className: f.a.tooltipContent,
							content: m,
							rtJsonElementProps: {}
						}))), r && n.a.createElement(l.b, {
							content: r,
							rtJsonElementProps: {}
						}), o && !r && n.a.createElement("p", {
							className: f.a.reasonText
						}, o)))
					}))
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
				return Me
			}));
			var o, n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/actions/modQueue/realtime.ts"),
				l = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				m = s("./src/reddit/components/ReportFlow/new.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				b = s("./src/reddit/helpers/isPost.ts"),
				h = s("./src/reddit/helpers/trackers/modTools.ts"),
				x = s("./src/reddit/helpers/trackers/post.ts"),
				f = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				v = s("./src/reddit/hooks/useTracking.ts"),
				O = s("./src/reddit/icons/fonts/index.tsx"),
				g = s("./src/reddit/models/Post/index.ts"),
				E = s("./src/reddit/actions/comment/moderation.ts"),
				C = s("./src/reddit/actions/modal.ts"),
				y = s("./src/reddit/actions/post.ts"),
				j = s("./src/reddit/actions/postFlair.ts"),
				_ = s("./src/reddit/actions/removalReasons/index.ts"),
				k = s("./src/reddit/selectors/activeModal.ts"),
				P = s("./src/reddit/selectors/moderatorPermissions.ts"),
				w = s("./src/reddit/components/ModModeFilteredReason/helpers.ts");
			! function(e) {
				e.UNMODERATED = "UNMODERATED", e.APPROVED = "APPROVED", e.REMOVED = "REMOVED", e.SPAM = "SPAM", e.REPORTED = "REPORTED", e.FILTERED = "FILTERED"
			}(o || (o = {}));
			const I = e => e.isRemoved && (!e.bannedBy || e.bannedBy === d.m) || !e.isRemoved && Object(w.a)(e) ? o.FILTERED : e.isRemoved || Object(b.b)(e) && [g.g.AntiEvilOps, g.g.CommunityOps, g.g.ContentTakedown, g.g.CopyrightTakedown, g.g.Reddit].indexOf(e.removedByCategory) > -1 ? o.REMOVED : e.isSpam ? o.SPAM : (e.numReports || 0) > 0 ? o.REPORTED : e.isApproved ? o.APPROVED : o.UNMODERATED;
			var S = s("./src/reddit/components/ModQueueActionBar/index.m.less"),
				N = s.n(S),
				T = s("./src/lib/classNames/index.ts"),
				R = s("./src/lib/constants/icons.ts"),
				M = s("./src/reddit/actions/gold/modals.ts"),
				L = s("./src/reddit/actions/reportFlow/index.ts"),
				A = s("./src/reddit/components/GiveAwardTooltip/index.tsx"),
				D = s("./src/reddit/components/OverflowMenu/index.tsx"),
				F = s("./src/reddit/constants/modals.ts"),
				B = s("./src/reddit/controls/Dropdown/Row.tsx"),
				U = s("./src/reddit/helpers/correlationIdTracker.ts"),
				V = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				W = s("./src/reddit/helpers/trackers/gild.ts"),
				G = s("./src/reddit/selectors/comments.ts"),
				z = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				H = s("./src/reddit/selectors/user.ts");
			const K = (e, t) => Object(h.c)(t, e),
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
						listingKey: o,
						moderatorPermissions: c
					} = e;
					var l, m;
					const u = Object(v.a)(),
						p = Object(i.d)(),
						f = Object(b.b)(t),
						g = Object(i.e)(H.k),
						j = Object(i.e)(H.P),
						_ = Object(i.e)(z.b),
						k = Object(V.a)(c),
						P = f ? x.n : K,
						w = t.authorId === g,
						I = j && w,
						S = (null === (l = t.distinguishType) || void 0 === l ? void 0 : l.toLowerCase()) === d.J.ADMIN,
						Q = (null === (m = t.distinguishType) || void 0 === m ? void 0 : m.toLowerCase()) === d.J.MODERATOR,
						J = Object(r.useCallback)(() => {
							const e = f ? y.D : E.c;
							p(e(t.id));
							const s = t.isLocked ? "unlock" : "lock";
							u(f ? P(t.id, s) : Object(h.j)(t.id, s, "mod_menu"))
						}, [P, u, p, t, f]),
						Z = Object(r.useCallback)(e => {
							u(Object(x.n)(t.id, e, "post", o, s, void 0))
						}, [u, o, s, t]),
						X = Object(r.useCallback)(() => {
							var e;
							const s = t.isStickied ? "unsticky" : "sticky";
							f ? (p(Object(y.gb)(t.id)), u(Object(h.n)(s, t.id))) : (p(Object(E.b)(t.id, (null === (e = t.distinguishType) || void 0 === e ? void 0 : e.toLowerCase()) || "", !t.isStickied)), u(Object(h.j)(t.id, s, "mod_menu")))
						}, [u, p, t, f]),
						Y = Object(r.useCallback)(() => {
							f && (p(Object(y.I)(t.id)), u(Object(h.n)(t.isOriginalContent ? "unmark_original_content" : "mark_original_content", t.id)))
						}, [u, p, t, f]),
						$ = Object(r.useCallback)(() => {
							f && (p(Object(y.F)(t.id)), Object(h.n)(t.isNSFW ? "unmark_nsfw" : "mark_nsfw", t.id))
						}, [p, t, f]),
						ee = Object(r.useCallback)(() => {
							f && (p(Object(C.i)(F.a.CROWD_CONTROL)), p(Object(y.t)(t.id)))
						}, [p, t, f]),
						te = Object(i.e)(e => Object(G.m)(e, {
							commentId: t.id
						})),
						se = Object(r.useCallback)(() => {
							const e = f ? t.permalink : te;
							e && (p(Object(y.C)(e)), f ? Z("copy") : u(Object(h.j)(t.id, "share", "mod_menu")))
						}, [Z, p, t, f, te, u]),
						oe = Object(r.useCallback)(async () => {
							if (!f) return;
							const e = Object(U.d)(U.a.GildingFlow, !0);
							p(Object(M.d)({
								awardId: null == _ ? void 0 : _.id,
								correlationId: e,
								thingId: t.id
							})), u(Object(W.clickGildEvent)(t.id))
						}, [u, p, t, _, f]),
						ne = Object(r.useCallback)(() => {
							p(Object(L.c)(t.id)), f ? Z("report") : u(Object(h.j)(t.id, "report", "mod_menu"))
						}, [Z, p, t, f, u]),
						re = Object(r.useCallback)(() => {
							var e;
							f && (p(Object(y.db)(t.id, !t.hidden, !1, !0)), Z((null === (e = t) || void 0 === e ? void 0 : e.hidden) ? "unhide" : "hide"))
						}, [Z, p, t, f]),
						ae = Object(r.useCallback)(() => {
							const e = f ? y.S : E.e;
							p(e(t.id, !0)), u(f ? Object(h.n)("spam", t.id) : Object(h.j)(t.id, "remove_as_spam", "mod_menu"))
						}, [u, p, t, f]),
						ie = Object(r.useCallback)(e => {
							const s = f ? y.u : E.b;
							p(s(t.id, e));
							const o = e === d.J.ADMIN ? "distinguish_as_admin" : e === d.J.MODERATOR ? "distinguish_as_mod" : "undistinguish";
							u(Object(h.j)(t.id, o, "mod_menu"))
						}, [p, t, f, u]);
					return a.a.createElement(D.b, {
						dropdownId: `modqueue-item-overflow-${t.id}`,
						className: N.a.overflowButton,
						icon: a.a.createElement(O.a, {
							name: R.a.overflow_horizontal,
							isFilled: !0
						})
					}, a.a.createElement("h6", {
						className: Object(T.a)("text-neutral-content-weak", N.a.overflowHeading)
					}, n.fbt._("Moderation", null, {
						hk: "2NlyQQ"
					})), !t.isRemoved && !t.isSpam && a.a.createElement(a.a.Fragment, null, a.a.createElement(B.b, {
						className: N.a.dropdownRow,
						displayText: n.fbt._("Remove as spam", null, {
							hk: "3jqLzv"
						}),
						onClick: ae
					}, a.a.createElement(O.a, {
						name: R.a.spam
					})), f && a.a.createElement(B.b, {
						className: N.a.dropdownRow,
						displayText: t.isStickied ? n.fbt._("Unsticky Post", null, {
							hk: "3Y6DOH"
						}) : n.fbt._("Sticky Post", null, {
							hk: "RNgCH"
						}),
						onClick: X
					}, a.a.createElement(O.a, {
						name: t.isStickied ? R.a.unpin : R.a.pin
					}))), a.a.createElement(B.b, {
						className: N.a.dropdownRow,
						onClick: J,
						displayText: q(f, !!(null == t ? void 0 : t.isLocked))
					}, a.a.createElement(O.a, {
						name: R.a.lock,
						isFilled: null == t ? void 0 : t.isLocked
					})), w && a.a.createElement(B.b, {
						className: N.a.dropdownRow,
						displayText: Q ? n.fbt._("Undistinguish as a mod", null, {
							hk: "2Nmjxw"
						}) : n.fbt._("Distinguish as a mod", null, {
							hk: "35wmCr"
						}),
						onClick: () => ie(Q ? "" : d.J.MODERATOR)
					}, a.a.createElement(O.a, {
						name: Q ? R.a.distinguish_fill : R.a.distinguish
					})), I && a.a.createElement(B.b, {
						className: N.a.dropdownRow,
						displayText: S ? n.fbt._("Undistinguish as an admin", null, {
							hk: "BHAJd"
						}) : n.fbt._("Distinguish as an admin", null, {
							hk: "3gaPvB"
						}),
						onClick: () => ie(S ? "" : d.J.ADMIN)
					}, a.a.createElement(O.a, {
						name: S ? R.a.distinguish_fill : R.a.distinguish
					})), !f && (S || Q) && w && a.a.createElement(B.b, {
						className: N.a.dropdownRow,
						displayText: t.isStickied ? n.fbt._("Unsticky the comment", null, {
							hk: "18TByd"
						}) : n.fbt._("Sticky the comment", null, {
							hk: "3roZIi"
						}),
						onClick: X
					}, a.a.createElement(O.a, {
						name: t.isStickied ? R.a.unpin : R.a.pin
					})), f && !t.crosspostParentId && a.a.createElement(B.b, {
						className: N.a.dropdownRow,
						onClick: Y,
						displayText: t.isOriginalContent ? n.fbt._("Remove OC Mark", null, {
							hk: "1R9sR"
						}) : n.fbt._("Mark as OC", null, {
							hk: "31GUJ2"
						})
					}, a.a.createElement(O.a, {
						name: R.a.original
					})), f && a.a.createElement(B.b, {
						className: N.a.dropdownRow,
						onClick: $,
						displayText: t.isNSFW ? n.fbt._("Mark as SFW", null, {
							hk: "rvDBl"
						}) : n.fbt._("Mark as NSFW", null, {
							hk: "1q4nut"
						})
					}, a.a.createElement(O.a, {
						name: R.a.nsfw
					})), f && k && "subreddit" === t.belongsTo.type && a.a.createElement(B.b, {
						className: N.a.dropdownRow,
						displayText: n.fbt._("Adjust crowd control", null, {
							hk: "4Drg85"
						}),
						onClick: ee
					}, a.a.createElement(O.a, {
						name: R.a.crowd_control
					})), a.a.createElement("h6", {
						className: Object(T.a)("text-neutral-content-weak", N.a.overflowHeading)
					}, n.fbt._("Other", null, {
						hk: "2543kN"
					})), a.a.createElement(B.b, {
						className: N.a.dropdownRow,
						displayText: n.fbt._("Share", null, {
							hk: "3L9n7l"
						}),
						onClick: se
					}, a.a.createElement(O.a, {
						name: R.a.share
					})), f && a.a.createElement(B.b, {
						className: N.a.dropdownRow,
						onClick: oe,
						displayText: n.fbt._("Award", null, {
							hk: "4hkt8T"
						})
					}, a.a.createElement(O.a, {
						name: R.a.award
					}), a.a.createElement(A.a, {
						postOrComment: t,
						tooltipId: `modqueue-item-award-${t.id}`
					})), a.a.createElement(B.b, {
						className: N.a.dropdownRow,
						displayText: n.fbt._("Report", null, {
							hk: "1FAnQb"
						}),
						onClick: ne
					}, a.a.createElement(O.a, {
						name: R.a.report
					})), f && a.a.createElement(B.b, {
						className: N.a.dropdownRow,
						onClick: re,
						displayText: t.hidden ? n.fbt._("Unhide", null, {
							hk: "3L7lXA"
						}) : n.fbt._("Hide", null, {
							hk: "19RA4b"
						})
					}, a.a.createElement(O.a, {
						name: R.a.hide
					})))
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
			var oe = function(e) {
					let {
						date: t,
						...s
					} = e;
					const o = Object(te.a)(),
						r = "string" == typeof t ? Object(ee.g)(t) / d.Yb : t,
						i = new Date(r * d.Yb);
					if (!$.a) return a.a.createElement(a.a.Fragment, null, i.toLocaleString());
					const c = new Intl.DateTimeFormat(o, {
							month: "short",
							day: "numeric",
							year: se(i) ? void 0 : "numeric"
						}),
						l = new Intl.DateTimeFormat(o, {
							minute: "numeric",
							hour: "numeric"
						}),
						m = function(e) {
							const t = new Date(Date.now());
							return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()
						}(i) ? n.fbt._("Today", null, {
							hk: "1sZpnp"
						}) : c.format(i),
						u = l.format(i);
					return n.fbt._("{date} at {time}", [n.fbt._param("date", m), n.fbt._param("time", u)], {
						hk: "Ot5zO"
					})
				},
				ne = s("./src/reddit/components/ModQueueActivitySummaryCards/helpers.ts"),
				re = s("./src/reddit/components/CCM/ModPreviousActions/index.m.less"),
				ae = s.n(re);
			var ie = e => {
				let {
					className: t,
					modAction: s,
					postOrCommentId: o
				} = e;
				var n, r, i, d, c;
				const l = (null === (n = s.moderatorInfo) || void 0 === n ? void 0 : n.displayName) || "",
					m = (null === (i = null === (r = s.moderatorInfo) || void 0 === r ? void 0 : r.icon) || void 0 === i ? void 0 : i.url) || "",
					u = !!(null === (c = null === (d = s.moderatorInfo) || void 0 === d ? void 0 : d.profile) || void 0 === c ? void 0 : c.isNsfw),
					p = Object(b.a)(o);
				return a.a.createElement("div", {
					className: Object(T.a)(t, ae.a.row)
				}, a.a.createElement("div", {
					className: ae.a.userIconWrapper
				}, a.a.createElement(X.a, {
					className: ae.a.userIcon,
					iconUrl: m,
					userName: l,
					isNSFW: u
				})), a.a.createElement("div", {
					className: ae.a.details
				}, a.a.createElement("h3", {
					className: ae.a.title
				}, Object(ne.a)(s.action, p ? "SubredditPost" : "")), a.a.createElement("p", {
					className: ae.a.meta
				}, a.a.createElement("a", {
					className: ae.a.userlink,
					href: `${Z.a.redditUrl}/user/${l}`,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => e.stopPropagation()
				}, Object(Y.e)(l)))), a.a.createElement("span", {
					className: ae.a.time
				}, a.a.createElement(oe, {
					date: s.createdAt
				})))
			};
			var de = e => {
				let {
					className: t,
					reportAction: s
				} = e;
				return a.a.createElement("div", {
					className: Object(T.a)(t, ae.a.row)
				}, a.a.createElement(O.a, {
					isFilled: !0,
					name: "report_fill",
					className: ae.a.icon
				}), a.a.createElement("div", {
					className: ae.a.details
				}, a.a.createElement("h3", {
					className: ae.a.title
				}, n.fbt._("Reported for", null, {
					hk: "pm0ot"
				})), !!s.reason && a.a.createElement("p", {
					className: ae.a.meta
				}, s.reason)), a.a.createElement("span", {
					className: ae.a.time
				}, a.a.createElement(oe, {
					date: s.createdAt
				})))
			};
			var ce = e => {
					const t = Object(i.e)(t => {
						var s, o;
						const n = null === (o = null === (s = null == t ? void 0 : t.features) || void 0 === s ? void 0 : s.modPreviousActions) || void 0 === o ? void 0 : o.order[e.postOrCommentId];
						if (n && n.length) return n.map(e => {
							var s, o;
							return null === (o = null === (s = null == t ? void 0 : t.features) || void 0 === s ? void 0 : s.modPreviousActions) || void 0 === o ? void 0 : o.models[e]
						})
					});
					return t ? a.a.createElement("div", {
						className: Object(T.a)(e.className, ae.a.wrapper)
					}, a.a.createElement("h2", {
						className: ae.a.wrapperTitle
					}, n.fbt._("Recent actions", null, {
						hk: "PAtYM"
					})), t.map(t => "ModAction" === (null == t ? void 0 : t.__typename) ? a.a.createElement(ie, {
						modAction: t,
						key: t.id,
						postOrCommentId: e.postOrCommentId
					}) : "ReportAction" === (null == t ? void 0 : t.__typename) ? a.a.createElement(de, {
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
					r = Object(i.e)(e => (null == t ? void 0 : t.approvedBy) ? Object(H.Cb)(e, {
						userName: o
					}) : null),
					d = t.approvedAtUTC ? (null === (s = t.approvedAtUTC) || void 0 === s ? void 0 : s.toString().length) > 10 ? t.approvedAtUTC / 1e3 : t.approvedAtUTC : null;
				return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: ue.a.userIconWrapper
				}, a.a.createElement(X.a, {
					className: Object(T.a)(ue.a.userIcon),
					iconUrl: null == r ? void 0 : r.accountIcon,
					userName: o,
					isNSFW: !!(null == r ? void 0 : r.isNSFW)
				})), a.a.createElement("div", {
					className: ue.a.statusText
				}, a.a.createElement("p", {
					className: ue.a.status
				}, n.fbt._("Approved", null, {
					hk: "4d15LY"
				})), a.a.createElement("p", null, a.a.createElement("a", {
					className: ue.a.userlink,
					href: `${Z.a.redditUrl}/user/${o}`,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => e.stopPropagation()
				}, Object(Y.e)(o)), d && a.a.createElement(a.a.Fragment, null, " ", a.a.createElement(le.d, {
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
				const o = Object(i.e)(e => (null == t ? void 0 : t.bannedBy) && "string" == typeof(null == t ? void 0 : t.bannedBy) ? Object(H.Cb)(e, {
						userName: null == t ? void 0 : t.bannedBy
					}) : null),
					r = Object(b.b)(t),
					d = Object(i.e)(e => Object(xe.X)(e, {
						subredditId: r ? t.belongsTo.id : t.subredditId
					})),
					c = Object(i.e)(e => {
						var t, s, o, n;
						return (null === (s = null === (t = e.user) || void 0 === t ? void 0 : t.account) || void 0 === s ? void 0 : s.isAdmin) || (null === (n = null === (o = e.user) || void 0 === o ? void 0 : o.account) || void 0 === n ? void 0 : n.isEmployee)
					}),
					l = r && t.removedByCategory ? t.removedByCategory : null,
					m = l ? Object(he.b)(l) : "clear_fill",
					u = t.bannedAtUTC ? (null === (s = t.bannedAtUTC) || void 0 === s ? void 0 : s.toString().length) > 10 ? t.bannedAtUTC / 1e3 : t.bannedAtUTC : null,
					p = ![g.g.AntiEvilOps, g.g.CommunityOps, g.g.ContentTakedown, g.g.CopyrightTakedown, g.g.Reddit].includes(l) || c;
				return a.a.createElement(a.a.Fragment, null, o && p ? a.a.createElement("div", {
					className: ue.a.userIconWrapper
				}, a.a.createElement(X.a, {
					className: Object(T.a)(ue.a.userIcon),
					iconUrl: o.accountIcon,
					userName: o.username,
					isNSFW: o.isNSFW
				})) : a.a.createElement(O.a, {
					isFilled: !0,
					name: m,
					className: Object(T.a)(ue.a.coloredIcon, ue.a.icon)
				}), a.a.createElement("div", {
					className: ue.a.statusText
				}, a.a.createElement("p", {
					className: ue.a.status
				}, n.fbt._("Removed{spam}{reason}", [n.fbt._param("spam", t.isSpam ? " as spam" : ""), n.fbt._param("reason", t.modRemovalReason ? `: ${t.modRemovalReason}` : "")], {
					hk: "3BGtSz"
				})), a.a.createElement("p", null, p && (null == o ? void 0 : o.username) ? a.a.createElement(a.a.Fragment, null, a.a.createElement("a", {
					className: ue.a.userlink,
					href: `${Z.a.redditUrl}/user/${o.username}`,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => e.stopPropagation()
				}, Object(Y.e)(o.username)), u && a.a.createElement(a.a.Fragment, null, " ", a.a.createElement(le.d, {
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
			var ye = s("./src/reddit/icons/fonts/Op/index.m.less"),
				je = s.n(ye),
				_e = s("./src/lib/lessComponent.tsx");
			_e.a.wrapped(e => a.a.createElement("i", {
				className: `${Object(Ee.b)("author",e.isFilled)} ${e.className}`,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, a.a.createElement(Ee.a, null, e.desc)), "OpIcon", je.a), s("./src/reddit/icons/fonts/OutboundLink/index.tsx"), s("./src/reddit/icons/fonts/Pencil/index.tsx");
			var ke = s("./src/reddit/icons/fonts/Photos/index.m.less"),
				Pe = s.n(ke);
			_e.a.wrapped(e => a.a.createElement("i", {
				className: `${Object(Ee.b)("image_post",e.isFilled)} ${e.className}`
			}), "PhotoIcon", Pe.a), s("./src/reddit/icons/fonts/Premium/index.tsx"), s("./src/reddit/icons/fonts/Remove/index.tsx");
			var we = s("./src/reddit/icons/fonts/Report/index.tsx"),
				Ie = (s("./src/reddit/icons/fonts/Share/index.tsx"), s("./src/reddit/icons/fonts/Spam/index.tsx"), s("./src/reddit/icons/fonts/Sticky/index.tsx"), s("./src/reddit/icons/fonts/Tag/index.tsx"), s("./src/reddit/icons/fonts/Text/index.m.less")),
				Se = s.n(Ie);
			_e.a.wrapped(e => a.a.createElement("i", {
				className: `${Object(Ee.b)("text_post",e.isFilled)} ${e.className}`
			}), "TextIcon", Se.a), s("./src/reddit/icons/fonts/Upvote/index.tsx");
			const Ne = e => {
					let {
						content: t
					} = e;
					const s = Object(ge.b)(),
						o = Object(i.d)(),
						d = Object(r.useCallback)(() => {
							const e = Object(b.a)(t.id),
								n = e ? y.eb : E.g,
								r = t.ignoreReports ? "restore_reports" : "ignore_reports",
								a = e ? Object(h.l)(r, t.id) : Object(h.k)(r, t.id);
							o(n(t.id)), s(a)
						}, [t.id, t.ignoreReports, s, o]),
						c = (t.modReportsDismissed && t.modReportsDismissed.length || 0) + (t.userReportsDismissed && t.userReportsDismissed.length || 0);
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(O.a, {
						isFilled: !0,
						name: "report_fill",
						className: Object(T.a)(ue.a.coloredIcon, ue.a.icon)
					}), a.a.createElement("div", {
						className: ue.a.reportedWrapper
					}, !!t.modReports.length && a.a.createElement("div", {
						className: ue.a.statusText
					}, a.a.createElement("p", {
						className: ue.a.status
					}, n.fbt._({
						"*": "{number of reports} Mod Reports",
						_1: "1 Mod Report"
					}, [n.fbt._plural(t.modReports.length, "number of reports")], {
						hk: "P5w8P"
					})), t.modReports.map((e, t) => {
						let [s, o] = e;
						return a.a.createElement("p", {
							key: `${s}-${o}-${t}`
						}, Object(Y.e)(o), ": ", s)
					})), !!t.userReports.length && a.a.createElement("div", {
						className: ue.a.statusText
					}, a.a.createElement("div", {
						className: ue.a.reportMeta
					}, a.a.createElement("p", {
						className: ue.a.status
					}, n.fbt._({
						"*": "{number of reports} Reports",
						_1: "1 Report"
					}, [n.fbt._plural(t.userReports.reduce((e, t) => {
						let [, s] = t;
						return s + e
					}, 0), "number of reports")], {
						hk: "1l1xMH"
					})), !c && a.a.createElement(Oe.c, {
						className: ue.a.ignoreButton,
						onClick: d,
						text: t.ignoreReports ? n.fbt._("Restore Reports", null, {
							hk: "2O219R"
						}) : n.fbt._("ignore reports", null, {
							hk: "48jlNW"
						})
					}, t.ignoreReports ? a.a.createElement(we.a, {
						className: ue.a.ignoreButtonIcon
					}) : a.a.createElement(Ce.a, {
						className: ue.a.ignoreButtonIcon
					}))), t.userReports.map((e, s) => {
						let [o, n, r, i] = e;
						return o ? void 0 !== r && i ? a.a.createElement(ve.a, {
							key: `user-${o}`,
							reason: o,
							amount: n,
							reportedThingId: t.id,
							isSnoozed: r,
							useNewFormat: !0,
							className: ue.a.snoozabledButton,
							dropdownClassName: ue.a.snoozableDropdown,
							iconClassName: ue.a.snoozeIcon
						}) : a.a.createElement("p", {
							key: `user-${o}`
						}, o, " (", n, ")") : null
					}))))
				},
				Te = e => {
					let {
						content: t
					} = e;
					const s = I(t),
						n = Object(r.useMemo)(() => {
							switch (s) {
								case o.APPROVED:
									return a.a.createElement(pe, {
										content: t
									});
								case o.REMOVED:
								case o.SPAM:
									return a.a.createElement(fe, {
										content: t
									});
								case o.FILTERED:
									return a.a.createElement(be.a, {
										content: t
									});
								case o.REPORTED:
									return a.a.createElement(Ne, {
										content: t
									});
								default:
									return a.a.createElement(r.Fragment, null)
							}
						}, [s, t]),
						[d, c] = Object(r.useState)(!1),
						l = Object(v.a)(),
						m = Object(r.useCallback)(e => {
							var o;
							e.stopPropagation(), c(!d), l(Object(J.e)((null === (o = t.belongsTo) || void 0 === o ? void 0 : o.id) || t.subredditId, s, Object(b.a)(t.id), !d))
						}, [l, t, d, c, s]),
						u = Object(i.e)(e => {
							var s, o;
							return !!(null === (o = null === (s = null == e ? void 0 : e.features) || void 0 === s ? void 0 : s.modPreviousActions) || void 0 === o ? void 0 : o.order[t.id])
						});
					return s === o.UNMODERATED ? null : a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: Object(T.a)(ue.a.wrapper, {
							[ue.a.approved]: s === o.APPROVED,
							[ue.a.reported]: s === o.REPORTED,
							[ue.a.opened]: d,
							[ue.a.openable]: u
						}),
						onClick: u ? m : void 0
					}, n, u && a.a.createElement("button", {
						className: ue.a.caretButton
					}, a.a.createElement(O.a, {
						name: d ? R.a.caret_up : R.a.caret_down,
						className: ue.a.caretIcon
					}))), u && d && a.a.createElement(ce, {
						className: ue.a.previousActions,
						postOrCommentId: t.id
					}))
				},
				Re = (e, t) => Object(h.c)(t, e),
				Me = e => {
					let {
						content: t,
						listingKey: s,
						hostPostData: h
					} = e;
					const w = Object(v.a)(),
						S = Object(i.d)(),
						T = I(t),
						R = Object(i.e)(k.b),
						M = Object(b.b)(t),
						L = Object(i.e)(e => {
							var s, o;
							return (null === (o = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === o ? void 0 : o.postOrCommentId) === t.id
						}),
						A = Object(i.e)(e => Object(P.m)(e, {
							postId: t.id
						})),
						D = Object(p.a)(A),
						[F, B] = Object(r.useState)(!1),
						U = Object(i.e)(e => {
							var s, o;
							return null === (o = null === (s = null == e ? void 0 : e.features) || void 0 === s ? void 0 : s.realtimeModqueue) || void 0 === o ? void 0 : o.toUpdate.includes(t.id)
						}),
						V = Object(r.useRef)(null),
						W = Object(r.useCallback)(e => {
							e.forEach(e => {
								const {
									isIntersecting: t,
									intersectionRatio: s
								} = e;
								s >= .5 ? B(!0) : t || B(!1)
							})
						}, []);
					F && U && S(Object(c.b)(t.id));
					const G = Object(r.useMemo)(() => ({
						threshold: [.5]
					}), []);
					Object(f.a)(V, W, G);
					const z = [o.REPORTED, o.FILTERED, o.UNMODERATED].includes(T),
						H = [o.APPROVED, o.UNMODERATED, o.REPORTED].includes(T),
						K = M && D,
						q = T === o.REMOVED && Object(b.b)(t) && t.removedByCategory === g.g.Reddit && !t.isRemoved && !t.isApproved,
						J = T === o.FILTERED || q,
						Z = T === o.REMOVED && !t.modRemovalReason && !J,
						X = [o.REMOVED, o.SPAM].indexOf(T) > -1,
						Y = M ? x.n : Re,
						$ = Object(r.useCallback)(() => {
							const e = M ? y.r : E.a;
							S(e(t.id)), w(Y(t.id, "approve"))
						}, [w, S, t, M, Y]),
						ee = Object(r.useCallback)(() => {
							const e = M ? y.S : E.e;
							S(e(t.id, !1)), t.isRemoved && t.bannedBy === d.m ? w(Y(t.id, "confirm_remove")) : w(Y(t.id, "remove"))
						}, [w, S, t, M, Y]),
						te = Object(r.useCallback)(() => {
							S(Object(_.fetchReasonsAndOpenModal)(M ? t.belongsTo.id : t.subredditId, [t.id]))
						}, [t, M, S]),
						se = Object(r.useCallback)(() => {
							S(Object(C.i)(Object(l.b)(t.id, !1))), w(Object(x.n)(t.id, "post_flair_picker"))
						}, [w, S, t]),
						oe = Object(r.useCallback)(e => {
							let {
								previewFlair: s,
								selectedTemplateId: o
							} = e;
							M && S(Object(j.h)({
								post: t,
								previewFlair: s,
								selectedTemplateId: o
							}))
						}, [S, M, t]);
					return a.a.createElement("div", {
						className: N.a.wrapper,
						"data-testid": "modqueue-action-bar",
						ref: V
					}, a.a.createElement(Te, {
						content: t
					}), a.a.createElement("div", {
						className: N.a.actionBar
					}, z && a.a.createElement(u.t, {
						className: [N.a.button, N.a.approve].join(" "),
						Icon: Object(O.b)("checkmark"),
						iconPosition: u.h.L,
						iconClassName: N.a.icon,
						onClick: $,
						text: n.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), H && a.a.createElement(u.t, {
						className: N.a.button,
						Icon: Object(O.b)("close"),
						iconPosition: u.h.L,
						iconClassName: N.a.icon,
						onClick: ee,
						text: n.fbt._("Remove", null, {
							hk: "2IDWyI"
						})
					}), Z && a.a.createElement(u.t, {
						className: N.a.button,
						onClick: te,
						text: n.fbt._("Add Removal Reason", null, {
							hk: "2htsXM"
						})
					}), J && a.a.createElement(u.t, {
						className: N.a.button,
						Icon: Object(O.b)("close"),
						iconPosition: u.h.L,
						iconClassName: N.a.icon,
						onClick: ee,
						text: n.fbt._("Confirm Removal", null, {
							hk: "1v0rxC"
						})
					}), X && a.a.createElement(u.t, {
						className: N.a.button,
						Icon: Object(O.b)("checkmark"),
						iconPosition: u.h.L,
						iconClassName: N.a.icon,
						onClick: $,
						text: n.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), K && a.a.createElement(u.t, {
						className: N.a.button,
						Icon: Object(O.b)("tag"),
						priority: u.c.Plain,
						iconPosition: u.h.L,
						iconClassName: N.a.icon,
						onClick: se,
						text: n.fbt._("Flair", null, {
							hk: "4968fn"
						})
					}), M && R === Object(l.b)(t.id, !1) && a.a.createElement(l.a, {
						flairs: t.flair,
						subredditId: t.belongsTo.id,
						modalId: Object(l.b)(t.id, !1),
						onFlairChanged: oe
					}), a.a.createElement(Q, {
						content: t,
						hostPostData: h,
						listingKey: s,
						moderatorPermissions: A
					}), L && a.a.createElement(m.a, {
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/redditGQL/types.ts");
			const r = (e, t) => {
				switch (e) {
					case n.y.AddNote:
						return o.fbt._("Added mod note", null, {
							hk: "4EQdI3"
						});
					case n.y.AddRemovalReason:
						return o.fbt._("Added removal reason", null, {
							hk: "3sDuRA"
						});
					case n.y.AdjustPostCrowdControlLevel:
						return o.fbt._("Adjusted post crowd control level", null, {
							hk: "3Ru27s"
						});
					case n.y.EnablePostCrowdControlFilter:
						return o.fbt._("Enabled post crowd control level", null, {
							hk: "bnrbt"
						});
					case n.y.DisablePostCrowdControlFilter:
						return o.fbt._("Disabled post crowd control level", null, {
							hk: "3Pn8Cm"
						});
					case n.y.ApproveComment:
						return o.fbt._("Approved comment", null, {
							hk: "15N4AH"
						});
					case n.y.ApproveLink:
						return o.fbt._("Approved post", null, {
							hk: "2pHeO6"
						});
					case n.y.BanUser:
						return o.fbt._("Banned user", null, {
							hk: "30ZUto"
						});
					case n.y.Collections:
						return o.fbt._("Collections", null, {
							hk: "4DLN5q"
						});
					case n.y.DeleteNote:
						return o.fbt._("Deleted mod note", null, {
							hk: "24mUGI"
						});
					case n.y.Distinguish:
						return "SubredditPost" === t ? o.fbt._("Post distinguished", null, {
							hk: "1EzjPd"
						}) : o.fbt._("Comment distinguished", null, {
							hk: "3TNqQa"
						});
					case n.y.EditFlair:
						return "SubredditPost" === t ? o.fbt._("Post flair edited", null, {
							hk: "2oj67i"
						}) : o.fbt._("User flair edited", null, {
							hk: "2WAVS8"
						});
					case n.y.IgnoreReports:
						return "SubredditPost" === t ? o.fbt._("Post reports ignored", null, {
							hk: "1HbgCS"
						}) : o.fbt._("Comment reports ignored", null, {
							hk: "3eLRwL"
						});
					case n.y.Lock:
						return "SubredditPost" === t ? o.fbt._("Post locked", null, {
							hk: "45Huvj"
						}) : o.fbt._("Comment locked", null, {
							hk: "2HzroI"
						});
					case n.y.MarkNsfw:
						return o.fbt._("Toggled post NSFW", null, {
							hk: "eAiVp"
						});
					case n.y.MarkOriginalContent:
						return o.fbt._("Toggled post Original Content", null, {
							hk: "46B0Bk"
						});
					case n.y.MuteUser:
						return o.fbt._("Muted user", null, {
							hk: "31YWRG"
						});
					case n.y.RemoveComment:
						return o.fbt._("Removed comment", null, {
							hk: "2qfmzC"
						});
					case n.y.RemoveLink:
						return o.fbt._("Removed post", null, {
							hk: "2leMij"
						});
					case n.y.SetContestMode:
						return o.fbt._("Set post contest mode", null, {
							hk: "2iE074"
						});
					case n.y.SetSuggestedsort:
						return o.fbt._("Set post suggested sort", null, {
							hk: "3zw33Q"
						});
					case n.y.ShowComment:
						return o.fbt._("Showed comment", null, {
							hk: "1xvaXS"
						});
					case n.y.SpamComment:
						return o.fbt._("Marked comment as spam", null, {
							hk: "E6CLe"
						});
					case n.y.SpamLink:
						return o.fbt._("Removed post as spam", null, {
							hk: "1Al2xz"
						});
					case n.y.Spoiler:
						return o.fbt._("Added spoiler tag", null, {
							hk: "254Axx"
						});
					case n.y.Sticky:
						return "SubredditPost" === t ? o.fbt._("Post stickied", null, {
							hk: "4m9DRx"
						}) : o.fbt._("Comment stickied", null, {
							hk: "1JIPzu"
						});
					case n.y.UnbanUser:
						return o.fbt._("Unbanned user", null, {
							hk: "3U4olT"
						});
					case n.y.Unlock:
						return "SubredditPost" === t ? o.fbt._("Post unlocked", null, {
							hk: "3IXrG"
						}) : o.fbt._("Comment unlocked", null, {
							hk: "4v2jmJ"
						});
					case n.y.UnmuteUser:
						return o.fbt._("Unmuted user", null, {
							hk: "2aB30x"
						});
					case n.y.UnsetContestMode:
						return o.fbt._("Unset post contest mode", null, {
							hk: "W4Yjf"
						});
					case n.y.UnsnoozeReports:
						return "SubredditPost" === t ? o.fbt._("Post unsnoozed", null, {
							hk: "3jp8zr"
						}) : o.fbt._("Comment unsnoozed", null, {
							hk: "2x01Eq"
						});
					case n.y.Unspoiler:
						return o.fbt._("Removed spoiler tag", null, {
							hk: "2GvhDn"
						});
					case n.y.Unsticky:
						return "SubredditPost" === t ? o.fbt._("Post unstickied", null, {
							hk: "KXoHl"
						}) : o.fbt._("Comment unstickied", null, {
							hk: "dpEKC"
						});
					case n.y.UpdateRemovalReason:
					case n.y.WikiBanned:
					case n.y.WikiContributor:
					case n.y.WikiPageListed:
					case n.y.WikiPermLevel:
					case n.y.WikiRevise:
					case n.y.WikiUnbanned:
					case n.y.AcceptModeratorInvite:
					case n.y.AddCommunityTopics:
					case n.y.AddContributor:
					case n.y.AddModerator:
					case n.y.CreateAward:
					case n.y.CreateScheduledPost:
					case n.y.CreateRemovalReason:
					case n.y.CommunityStyling:
					case n.y.CommunityWidgets:
					case n.y.CreateRule:
					case n.y.DeleteAward:
					case n.y.DeleteRule:
					case n.y.DeleteScheduledPost:
					case n.y.DeleteOverriddenClassification:
					case n.y.DeleteRemovalReason:
					case n.y.DisableAward:
					case n.y.EditPostRequirements:
					case n.y.EditRule:
					case n.y.EditScheduledPost:
					case n.y.EditSettings:
					case n.y.EnableAward:
					case n.y.Events:
					case n.y.HiddenAward:
					case n.y.InviteModerator:
					case n.y.InviteSubscriber:
					case n.y.ModAwardGiven:
					case n.y.ModmailEnrollment:
					case n.y.OverrideClassification:
					case n.y.RemoveCommunityTopics:
					case n.y.RemoveContributor:
					case n.y.RemoveModerator:
					case n.y.RemoveWikiContributor:
					case n.y.ReorderModerators:
					case n.y.ReorderRules:
					case n.y.SetPermissions:
					case n.y.SnoozeReports:
					case n.y.SubmitContentRatingSurvey:
					case n.y.SubmitScheduledPost:
					case n.y.UnignoreReports:
					case n.y.UninviteModerator:
					default:
						return o.fbt._("Last mod action", null, {
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
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
						onClick: o,
						hasTooltip: c,
						tooltipText: m,
						className: u
					} = e;
				return n.a.createElement(n.a.Fragment, null, n.a.createElement("button", {
					className: Object(r.a)(l.a.notificationButton, u),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: o
				}, n.a.createElement(d.a, {
					name: "notification",
					isFilled: s,
					className: l.a.icon,
					"aria-label": m
				})), c && n.a.createElement(a.a, {
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
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
					post: o
				} = e;
				return Object(c.a)().hideRecommendationContext ? null : n.a.createElement(i.b, {
					className: Object(r.a)(m.a.RecommendationContextStyles, {
						[m.a.classicLayout]: s === d.g.Classic,
						[m.a.compactLayout]: s === d.g.Compact,
						[m.a.largeLayout]: s === d.g.Large
					}),
					content: t,
					rtJsonElementProps: u(o),
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
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
				y = s("./src/reddit/components/OverviewCommentPost/index.m.less"),
				j = s.n(y);
			const {
				fbt: _
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = c.a.wrapped(x.default, "InternalLink", j.a), P = c.a.div("Wrapper", j.a), w = c.a.div("Row", j.a), I = c.a.wrapped(g.a, "CommentIcon", j.a), S = c.a.div("TitleContainer", j.a), N = c.a.div("PostTitleContainer", j.a), T = c.a.wrapped(u.c, "PostTitle", j.a), R = c.a.wrapped(p.g, "PostTopMeta", j.a), M = c.a.wrapped(p.a, "MetaSeparator", j.a), L = Object(r.b)(() => Object(a.c)({
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
				if (s) return n.a.createElement(o.Fragment, null, n.a.createElement(M, null), n.a.createElement(R, {
					metaSeparatorClassName: j.a.postTopMetaMetaSeparator,
					post: t,
					showSub: !0,
					showTimestamp: !1,
					subredditOrProfile: s
				}))
			}, D = e => {
				const {
					comment: t,
					profileName: s,
					isBlockingInterstitialEnabled: o,
					isBlockingInterstitialV2Enabled: r,
					showModalOnAuthorLinkClick: a
				} = e;
				if (!t) return null;
				const i = s || t.author,
					d = `/user/${i}/`;
				return n.a.createElement(k, {
					"data-click-id": "user",
					to: d,
					onClick: e => {
						(o || r) && (e.preventDefault(), a(d))
					}
				}, i)
			};
			t.a = Object(d.a)(Object(h.b)(L(Object(b.c)(e => {
				const {
					className: t,
					eventFactory: s,
					onClickPost: o,
					post: r
				} = e;
				return n.a.createElement(m.b, {
					className: Object(i.a)(O.a.compactPostStyles, j.a.overviewCommentPost, {
						[j.a.banned]: !!e.post.bannedBy,
						[j.a.reported]: !e.post.bannedBy && !!e.post.numReports && e.post.numReports > 0
					}, t),
					post: r,
					onClick: o,
					eventFactory: s
				}, n.a.createElement(P, {
					style: {
						background: Object(f.e)(e)
					}
				}, n.a.createElement(w, null, n.a.createElement(I, null), n.a.createElement(S, null, _._("{postAuthor} commented on {postTitle} {postMeta}", [_._param("postAuthor", D({
					...e
				})), _._param("postTitle", n.a.createElement(N, null, n.a.createElement(T, {
					outboundLinkClassName: j.a.postTitleOutboundLink,
					post: r,
					size: u.b.Small,
					titleClassName: j.a.postTitleTitle
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/OverviewConversationsPost/Border/index.m.less"),
				i = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					isFirst: s,
					isLast: o,
					...a
				} = e;
				return n.a.createElement("div", d({
					className: Object(r.a)(i.a.border, {
						[i.a.isFirst]: s,
						[i.a.isLast]: o
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
			var o = s("./node_modules/lodash/times.js"),
				n = s.n(o),
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
				y = m.a.div("Wrapper", g.a),
				j = m.a.div("CommentSeparator", g.a),
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
						openPost: o,
						isAwarded: r,
						isFirst: i,
						isLast: d,
						isNightmodeOn: c,
						profileName: m,
						showModTools: p
					} = this.props, b = m === e.author ? P : w;
					return a.a.createElement(u.a, {
						comment: e,
						onClick: (e, t) => {
							o({
								postOrComment: t,
								clickInfo: Object(h.a)(e),
								queryParams: {
									context: 3
								}
							}), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, a.a.createElement(y, {
						className: Object(l.a)({
							[g.a.isFirst]: i,
							[g.a.isLast]: d,
							[g.a.isAwarded]: r,
							[g.a.isNightmodeOn]: c
						})
					}, n()(s + 1, e => a.a.createElement(j, {
						key: e
					})), a.a.createElement(C, null, b(t, m, p))))
				}
			}
			const P = (e, t, s) => a.a.createElement(E, null, w(e, t, s, !0, !0)),
				w = function(e, t, s) {
					let o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
						n = arguments.length > 4 ? arguments[4] : void 0;
					return a.a.createElement(p.a, {
						commentId: e,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: o,
						showModTools: s,
						isExpanded: !!n
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
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
				experimentName: m.wc
			}), e => e === m.Pd);
			var h = s("./node_modules/fbt/lib/FbtPublic.js"),
				x = s("./src/lib/classNames/index.ts"),
				f = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				v = s("./src/reddit/components/SubredditIcon/index.tsx"),
				O = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less"),
				C = s.n(E);
			const y = e => {
				let {
					postId: t,
					className: s
				} = e;
				const o = Object(d.e)(e => Object(O.G)(e, {
						postId: t
					})),
					r = Object(d.e)(e => "subreddit" === (null == o ? void 0 : o.belongsTo.type) ? Object(g.X)(e, {
						subredditId: o.belongsTo.id
					}) : null);
				return r ? n.a.createElement(f.a, {
					className: Object(x.a)(C.a.link, s),
					to: r.url
				}, h.fbt._("Posts via", null, {
					hk: "23e8m8"
				}), n.a.createElement(v.b, {
					className: C.a.subredditIcon,
					shouldHideNsfwIcon: !0,
					subredditOrProfile: r
				}), n.a.createElement("span", {
					className: C.a.subredditName
				}, r.displayText)) : null
			};
			var j = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				_ = s("./src/reddit/connectors/PostViewable/index.ts"),
				k = s("./src/reddit/contexts/PageLayer/index.tsx"),
				P = s("./src/reddit/contexts/Post/index.tsx"),
				w = s("./src/reddit/helpers/path/index.ts"),
				I = s("./src/reddit/hooks/useClickSourceData.ts"),
				S = s("./src/reddit/hooks/useIsOverlay.ts"),
				N = s("./src/reddit/hooks/usePageLayer.ts"),
				T = s("./src/lib/prettyPrintNumber/index.ts"),
				R = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less"),
				M = s.n(R);
			const L = e => {
				let {
					post: t
				} = e;
				const s = `${Object(T.b)(t.score)} ${h.fbt._("upvotes",null,{hk:"wJqPp"})}`,
					o = `${Object(T.b)(t.numComments)} ${h.fbt._("comments",null,{hk:"30aUyh"})}`;
				return n.a.createElement("div", {
					className: M.a.postInformation
				}, n.a.createElement("h5", {
					className: M.a.title
				}, t.title), n.a.createElement("div", {
					className: M.a.interactions
				}, n.a.createElement("p", null, s), n.a.createElement("p", null, o)))
			};
			var A = s("./src/lib/isUrl/index.ts"),
				D = s("./src/reddit/actions/profile/index.ts"),
				F = s("./src/reddit/components/Thumbnail/index.tsx"),
				B = s("./src/reddit/components/UserIcon/index.tsx"),
				U = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				V = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				W = s("./src/reddit/selectors/profile.ts"),
				G = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less"),
				z = s.n(G);
			const H = e => {
				let {
					post: t
				} = e;
				var s, r, a, i;
				const c = Object(d.d)(),
					l = Object(d.e)(Object(W.l)(t.author)),
					m = Object(o.useMemo)(() => Object(F.c)({
						post: t
					}), [t]),
					u = Object(o.useMemo)(() => Object(A.a)(m), [m]);
				Object(o.useEffect)(() => {
					u || c(Object(D.d)(t.author))
				}, [c, t.author, u]);
				const p = !u && Object(V.a)(null === (s = null == l ? void 0 : l.icon) || void 0 === s ? void 0 : s.url),
					b = Object(U.c)(null === (r = null == l ? void 0 : l.icon) || void 0 === r ? void 0 : r.url);
				return n.a.createElement("div", {
					className: z.a.media
				}, u ? n.a.createElement(F.b, {
					post: t,
					url: m,
					className: z.a.mediaThumbnail,
					removeLink: !0,
					containerClassName: z.a.mediaThumbnailContainer
				}) : null, !u && (null === (a = null == l ? void 0 : l.icon) || void 0 === a ? void 0 : a.url) && n.a.createElement("div", {
					className: z.a.userIconContainer
				}, n.a.createElement(B.a, {
					className: Object(x.a)({
						[z.a.snoovatarUserIcon]: p,
						[z.a.defaultUserIcon]: b
					}, z.a.userIcon),
					iconUrl: null === (i = null == l ? void 0 : l.icon) || void 0 === i ? void 0 : i.url,
					userName: l.name,
					wrapperClassName: z.a.userIconWrapper,
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
						o = Object(S.a)(),
						r = Object(I.a)(),
						a = Object(k.x)(s) && !o;
					return n.a.createElement(f.a, {
						"data-testid": `promoted-user-post-${t.id}`,
						to: a ? Object(w.b)(t.permalink) : Object(j.a)(t.permalink, !1, r)
					}, n.a.createElement("div", {
						className: q.a.container
					}, n.a.createElement(L, {
						post: t
					}), n.a.createElement(H, {
						post: t
					})))
				})),
				Z = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPosts/index.m.less"),
				X = s.n(Z);
			const Y = e => {
				let {
					postIds: t
				} = e;
				const s = t.map(e => n.a.createElement(J, {
					postId: e,
					key: e
				}));
				return n.a.createElement("div", {
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
				const [o] = t.adPromotedUserPostIds;
				return n.a.createElement("div", {
					className: ee.a.container,
					onClick: () => s(Object(c.y)(t, l.a.Click))
				}, n.a.createElement(Y, {
					postIds: t.adPromotedUserPostIds
				}), n.a.createElement(y, {
					postId: o,
					className: ee.a.communityLink
				}))
			};

			function se(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? n.a.createElement(r.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * r.b - 2 * r.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : Object(i.B)(t) && Object(i.A)(t) ? n.a.createElement(te, {
					post: t
				}) : n.a.createElement(a.a, {
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
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
				y = s.n(C);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: o,
					isCurrentUserProfilePost: C,
					isOverlay: j,
					isTopicPage: _,
					post: k,
					shouldShowSubscribeButton: P,
					subredditOrProfile: w,
					tooltipType: I
				} = e, S = !!_, N = Object(g.a)(), T = Object(r.e)(e => !!w && Object(a.i)(e, w.id));
				return n.a.createElement("div", {
					className: y.a.metaContainer
				}, !o && !k.isSponsored && w && n.a.createElement(c.a, {
					postId: k.id,
					subredditName: w.name
				}, n.a.createElement(b.a, {
					className: y.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: w.url,
						state: N
					}
				}, w.displayText)), w && w.isQuarantined && n.a.createElement(p.a, null), !o && !k.isSponsored && w && P && !C && n.a.createElement(h.a, {
					className: y.a.SubscribeButton,
					getEventFactory: e => Object(O.n)(k.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: w.name,
						type: Object(E.i)(w) ? x.a.PROFILE : x.a.SUBREDDIT
					},
					postId: k.id,
					size: f.d.XXS,
					small: !0
				}), !o && !k.isSponsored && n.a.createElement(v.b, null), !o && !k.isSponsored && n.a.createElement(l.h, {
					type: k.belongsTo.type,
					id: k.belongsTo.id
				}), n.a.createElement(u.g, {
					className: y.a.postTopMeta,
					flairStyleTemplate: t,
					post: k,
					tooltipType: I,
					isModWithUserNotesPermissions: T
				}), n.a.createElement(m.a, {
					displayText: w ? w.displayText : null,
					inSubredditOrProfile: !!o,
					post: k,
					tooltipType: I
				}), !S && n.a.createElement(i.a, {
					hideCta: s,
					thing: k,
					tooltipType: j ? u.f.Lightbox : void 0
				}), T && n.a.createElement(d.a, {
					postOrComment: k,
					className: y.a.addModNote
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
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
					showBulkActionCheckbox: o = !1,
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
				return n.a.createElement(a.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: x
				}, o && n.a.createElement(d.a, {
					className: u.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), n.a.createElement(i.a, {
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
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
				y = s("./src/reddit/models/Subreddit/index.ts"),
				j = s("./src/reddit/selectors/experiments/shredditParity.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/components/PostTopLine/index.m.less"),
				P = s.n(k);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: s,
					forceOpenInNewTab: n,
					hideNSFWPref: k,
					hostPostData: w,
					iconClassName: I,
					inSubredditOrProfile: S,
					isCommentsPage: N,
					isCompactPinnedPost: T,
					isCurrentUserProfilePost: R,
					isModQueuePage: M,
					isModWithUserNotesPermissions: L,
					isOverlay: A,
					isTopicPage: D,
					listingKey: F,
					post: B,
					shouldShowSubscribeButton: U,
					showCornerOutboundLink: V,
					showSubreddit: W,
					showSubredditIcon: G,
					subredditOrProfile: z,
					isFollowed: H,
					shouldShowFollowButton: K,
					onFollowPostClick: q,
					onSubscribed: Q
				} = e;
				const J = D,
					Z = z && Object(y.i)(z),
					X = Object(a.e)(e => {
						if (!Z) return !0;
						const t = Object(_.Ib)(e, B.author || "");
						return !t || t.enableFollowers
					}),
					Y = Object(a.e)(j.a);
				return r.a.createElement("div", {
					className: Object(i.a)(P.a.container, t)
				}, W && z && r.a.createElement("div", {
					className: P.a.subredditIconWrapper
				}, r.a.createElement(h.a, {
					"data-click-id": "subreddit",
					to: z.url
				}, G && r.a.createElement(b.b, {
					className: Object(i.a)(P.a.subredditIcon, I),
					shouldHideNsfwIcon: k,
					subredditOrProfile: z
				}))), r.a.createElement("div", {
					className: P.a.everythingElseWrapper
				}, W && r.a.createElement(l.h, {
					type: B.belongsTo.type,
					id: B.belongsTo.id
				}), r.a.createElement(p.g, {
					className: P.a.postTopMeta,
					forceOpenInNewTab: n,
					flairStyleTemplate: s,
					isModWithUserNotesPermissions: L,
					tooltipType: A ? p.f.Lightbox : void 0,
					post: B,
					showSub: W,
					subredditOrProfile: z
				}), r.a.createElement(u.a, {
					className: P.a.postBadges,
					displayText: z ? z.displayText : null,
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
				})), z && X && W && U && !R && r.a.createElement(x.a, {
					className: P.a.SubscribeButton,
					getEventFactory: e => (Q && !e && Q(), Object(g.n)(B.id, e ? "unsubscribe" : "subscribe", "post", F, w)),
					identifier: {
						name: z.name,
						type: Z ? f.a.PROFILE : f.a.SUBREDDIT
					},
					postId: B.id,
					size: v.d.XS,
					priority: Y ? v.c.Secondary : void 0,
					isShredditParityEnabled: Y
				}), V && r.a.createElement(O.b, {
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
					tooltipText: o.fbt._("Follow post to stay updated", null, {
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
			var o, n = s("./node_modules/fbt/lib/FbtPublic.js"),
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
			}(o || (o = {}));
			const f = "related_community_recommendations_v1",
				v = (e, t) => {
					let {
						postId: s,
						subredditId: o,
						variant: n,
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
							reason: o
						},
						discoveryUnit: {
							id: "related_communities_recommendations",
							name: d,
							type: n
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
			const y = {
				subreddits: [],
				error: null,
				loaded: !1,
				pending: !1
			};
			var j = function() {
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
								subreddits: o = {},
								modelVersion: n
							} = t.payload;
							return {
								...e,
								[s]: {
									...e[s],
									modelVersion: n,
									subreddits: Object.keys(o),
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
					relatedCommunitiesRecommendations: j
				}
			});
			const P = Object(k.a)([(e, t) => {
					var s, o, n;
					return null !== (n = null === (o = null === (s = e.features) || void 0 === s ? void 0 : s.relatedCommunitiesRecommendations) || void 0 === o ? void 0 : o[t]) && void 0 !== n ? n : y
				}], e => e),
				w = Object(k.a)([(e, t) => P(e, t)], e => {
					var t;
					return null !== (t = null == e ? void 0 : e.subreddits) && void 0 !== t ? t : []
				}),
				I = Object(k.a)([e => e, _.fb], (e, t) => t.map(t => ({
					...t,
					...Object(_.y)(e, {
						subredditId: t.id
					})
				})));
			var S = s("./src/config.ts");
			const {
				fbt: N
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var T, R = e => {
				let {
					seed: t
				} = e;
				const s = Math.min(3 * (t + 1), 37),
					o = [s, s + 1, s + 2];
				return a.a.createElement("div", {
					"data-testid": "avatar-group"
				}, null == o ? void 0 : o.map((e, t) => a.a.createElement("img", {
					key: e,
					className: "w-[16px] h-[20px] ml-[-4px] first:ml-0",
					src: `${S.a.assetPath}/img/talk/avatars/${e}.png`,
					alt: N._("Online members", null, {
						hk: "3uJPWb"
					})
				})))
			};

			function M(e) {
				switch (e) {
					case O.vf.Minimalist:
					case O.tf.Minimalist:
					case O.uf.Minimalist:
						return T.MINIMALIST;
					case O.vf.HotnessSignals:
					case O.tf.SocialSignals:
					case O.uf.SocialSignals:
						return T.SIGNALS;
					case O.vf.Description:
					case O.tf.Description:
					case O.uf.Description:
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
				const y = Object(d.a)(),
					j = Object(l.e)(e => I(e, {
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
					k = M(r);
				return a.a.createElement("ul", {
					className: `pb-[8px] ${"double"===E&&"grid gap-4 grid-cols-2"}`,
					"data-testid": "recommended-community-list"
				}, j.map((e, t) => {
					let {
						id: r,
						subscribers: d,
						accountsActive: c,
						icon: l,
						communityIcon: f,
						name: O,
						url: j,
						displayText: P,
						publicDescription: w
					} = e;
					if (t >= s) return null;
					const I = n.fbt._({
							"*": "{Number of subscribers} members",
							_1: "{Number of subscribers} member"
						}, [n.fbt._param("Number of subscribers", Object(m.b)(d)), n.fbt._plural(d)], {
							hk: "3fAm5T"
						}),
						S = c ? `• ${n.fbt._("{Number of subscribers online} Online",[n.fbt._param("Number of subscribers online",Object(m.b)(c))],{hk:"4s9dx5"})}` : "",
						N = () => {
							C && C(), y(((e, t, s) => n => ({
								...v(e, n),
								subreddit: x.mb(n, t),
								action: h.c.CLICK,
								noun: o.TITLE_SUBREDDIT,
								actionInfo: {
									...v(e, n).actionInfo,
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
						linkTo: j || `/${P}`
					})), a.a.createElement("div", {
						className: `${"single"===E&&"truncate"} flex flex-col w-100`
					}, a.a.createElement("div", {
						className: "flex items-start"
					}, a.a.createElement("div", {
						className: "ml-[8px] min-w-0"
					}, a.a.createElement(g.default, {
						className: "text-[14px] leading-[16px] font-semibold text-neutral-content-strong truncate",
						to: j || `/${P}`,
						onClick: N
					}, P, a.a.createElement("div", {
						className: "mt-[4px] text-[12px] leading-[14px] font-normal text-neutral-content-weak truncate"
					}, k === T.MINIMALIST && I, (k === T.SIGNALS || k === T.DESCRIPTION) && a.a.createElement("div", {
						className: "flex gap-x-xs justify-start items-center"
					}, a.a.createElement(R, {
						seed: t
					}), a.a.createElement("div", null, `${I} ${S}`))))), a.a.createElement(p.a, {
						doNotHideOtherSubscribeButtons: !0,
						className: "ml-auto mt-[2px]",
						postId: r,
						identifier: {
							name: O,
							type: b.a.SUBREDDIT
						},
						size: i.d.XS,
						getEventFactory: e => e ? ((e, t, s) => n => ({
							...v(e, n),
							subreddit: x.mb(n, t),
							action: h.c.CLICK,
							noun: o.SUBREDDIT_UNSUBSCRIBE,
							actionInfo: {
								...v(e, n).actionInfo,
								position: s
							}
						}))(_, r, t) : ((e, t, s) => n => ({
							...v(e, n),
							subreddit: x.mb(n, t),
							action: h.c.CLICK,
							noun: o.SUBREDDIT_SUBSCRIBE,
							actionInfo: {
								...v(e, n).actionInfo,
								position: s
							}
						}))(_, r, t)
					})), k === T.DESCRIPTION && a.a.createElement("div", {
						className: `pt-[4px] ml-[8px] pr-sm text-[12px] leading-[14px] font-normal text-neutral-content-weak ${"double"===E?"[-webkit-line-clamp:3] [text-overflow:ellipsis] [display:-webkit-box] [-webkit-box-orient:vertical] max-h-[4.143em] overflow-hidden":"truncate"}`
					}, a.a.createElement(g.default, {
						to: j || `/${P}`,
						onClick: N
					}, w))))
				}))
			};
			var A = s("./src/lib/makeActionCreator/index.ts"),
				D = s("./src/lib/makeGqlRequest/index.ts"),
				F = s("./src/lib/makeRequest/index.ts"),
				B = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				U = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				V = s("./src/redditGQL/operations/GetRelatedCommunityRecommendations.json");
			const W = async (e, t) => {
				const s = await Object(D.a)(e, {
					...V,
					variables: t
				});
				if (!Object(F.c)(s)) throw new Error("Encountered an error while fetching live discovery content");
				return (e => {
					var t, s, o, n;
					const r = {
						modelVersion: null !== (s = null === (t = null == e ? void 0 : e.relatedCommunityRecommendations) || void 0 === t ? void 0 : t.modelVersion) && void 0 !== s ? s : "related_community_recommendations_v1",
						aboutInfo: {},
						models: {}
					};
					return null === (n = null === (o = null == e ? void 0 : e.relatedCommunityRecommendations) || void 0 === o ? void 0 : o.recommendations) || void 0 === n ? void 0 : n.reduce((e, t) => e = {
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
					relatedCommunitiesRecommendations: j
				}
			});
			const G = Object(A.a)(C.b),
				z = Object(A.a)(C.c),
				H = Object(A.a)(C.a),
				K = e => async (t, s, o) => {
					let {
						gqlContext: n
					} = o;
					t(G({
						subredditId: e
					}));
					try {
						const s = await W(n(), {
							subredditId: e
						});
						t(z({
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
				const x = M(s),
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
						recommendations: y,
						fetchPending: j,
						recommendationsLoaded: _,
						fetchError: k,
						modelVersion: I
					} = function(e) {
						let {
							subredditId: t
						} = e;
						const s = Object(l.d)(),
							o = Object(l.e)(e => w(e, t)),
							{
								pending: n,
								loaded: a,
								error: i,
								modelVersion: d
							} = Object(l.e)(e => P(e, t)),
							c = !a && !n;
						return Object(r.useEffect)(() => {
							c && s(K(t))
						}, [s, t, c]), {
							recommendations: o,
							fetchPending: n,
							recommendationsLoaded: a,
							fetchError: i,
							modelVersion: d
						}
					}({
						subredditId: u
					}),
					S = g < (y.length || 0),
					N = Object(r.useMemo)(() => !_ || j ? null : k || y.length <= 0 ? {
						modelVersion: I,
						seen: !1,
						postId: m,
						subredditId: u,
						variant: s,
						numberItems: 0,
						seenItems: [],
						pageType: b
					} : {
						modelVersion: I,
						seen: !0,
						postId: m,
						subredditId: u,
						variant: s,
						numberItems: y.length,
						seenItems: y.slice(0, O),
						pageType: b
					}, [_, j, k, y, I, m, u, s, O, b]);
				if (Object(r.useEffect)(() => {
						C && N && C((e => t => ({
							...v(e, t),
							action: h.c.VIEW,
							noun: o.RECOMMENDATION_MODULE
						}))(N))
					}, [C, N]), !_ || y.length <= 0) return null;
				return a.a.createElement("div", {
					className: "bg-[color:var(--newCommunityTheme-body)] mb-[10px] border border-solid border-[color:var(--newCommunityTheme-postLine)] rounded-[4px]"
				}, a.a.createElement("div", {
					className: "px-[16px] py-[8px] flex items-center"
				}, a.a.createElement("h3", {
					className: "text-[14px] leading-[20px] font-semibold text-neutral-content-strong truncate min-w-0"
				}, n.fbt._("Similar to {subreddit display text}", [n.fbt._param("subreddit display text", t)], {
					hk: "2ZdEdB"
				})), a.a.createElement("button", {
					className: "ml-auto w-[16px] h-[16px] inline-block",
					"aria-label": n.fbt._("Hide Recommended Communities", null, {
						hk: "1D8cvx"
					}),
					onClick: () => {
						p(), N && C((e => t => ({
							...v(e, t),
							action: h.c.CLICK,
							noun: o.CLOSE
						}))({
							...N,
							seenItems: null == y ? void 0 : y.slice(0, g)
						}))
					}
				}, a.a.createElement(c.a, {
					className: "block w-full h-full text-neutral-content-weak",
					fill: "currentColor"
				}))), a.a.createElement(a.a.Fragment, null, a.a.createElement(L, {
					recommendedCommunities: y,
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
							noun: o.SHOW_MORE
						}))({
							...N,
							seenItems: null == y ? void 0 : y.slice(0, e)
						}))
					}
				}, n.fbt._("Show more", null, {
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
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
				y = s("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				j = s.n(y);
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
			})), w = Object(u.a)(b.a);
			class I extends n.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onSnoozeButtonClick = () => {
						const e = this.props.isSnoozed ? d.lc.None : d.lc.Snoozed;
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
						openDropdown: o,
						isDropdownOpen: r,
						isSnoozed: a,
						useNewFormat: d,
						className: c,
						dropdownClassName: l,
						iconClassName: m
					} = this.props, u = k(e, s);
					return n.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, n.a.createElement(h.b, {
						id: u,
						className: Object(i.a)(j.a.DropdownLabelContainer, c),
						onClick: o
					}, n.a.createElement("label", {
						htmlFor: u,
						className: j.a.DropdownLabel
					}, a ? _._("Reporter snoozed", null, {
						hk: "1rCWql"
					}) : d ? `${e} (${t})` : `${t}: ${e}`, r ? n.a.createElement(O.a, null) : n.a.createElement(v.a, null))), n.a.createElement(w, {
						isOpen: r,
						tooltipTarget: this.tooltipTarget,
						renderContentsHidden: !0,
						isOverlay: !1
					}, n.a.createElement("button", {
						className: Object(i.a)(j.a.SnoozeButton, l),
						onClick: this.onSnoozeButtonClick
					}, n.a.createElement("div", {
						className: j.a.SnoozeButtonContent
					}, a ? n.a.createElement(n.a.Fragment, null, n.a.createElement(E.a, {
						className: m
					}), _._("Undo snoozing reports from this user", null, {
						hk: "1CloXT"
					})) : n.a.createElement(n.a.Fragment, null, n.a.createElement(g.a, {
						className: m
					}), _._("Snooze reports from this user for 7 days", null, {
						hk: "1i0sOW"
					}))))))
				}
			}
			t.a = P(Object(p.c)(I))
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
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
				f = s("./src/reddit/selectors/showPromotedCTA.ts"),
				v = s("./src/reddit/selectors/user.ts");
			const O = {
					autoplayPref: v.d,
					activeModalId: m.a,
					crosspost: x.d,
					isActive: x.j,
					isChatPost: u.d,
					isCurrentUserProfilePost: x.l,
					isExpanded: x.m,
					isLoggedIn: v.S,
					showPromotedCTA: f.a,
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
				g = Object(o.b)(() => Object(n.c)(O), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const o = t === i.a.upvoted ? Object(r.ib)(s) : Object(r.v)(s);
							e(o)
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
			t.a = e => Object(l.b)(g(Object(d.b)(e)))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return j
			})), s.d(t, "d", (function() {
				return k
			})), s.d(t, "b", (function() {
				return w
			}));
			var o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
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
				y = s("./src/reddit/selectors/user.ts");

			function j() {
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
			const _ = j(),
				k = {
					apiError: O.c,
					apiPending: O.d,
					measureScrollFPS: f.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.U)(e, t),
					loadMore: O.g,
					postsById: g.T,
					postIds: Object(r.a)((e, t) => {
						let {
							listingKey: s,
							listingName: o,
							inSubredditOrProfile: n
						} = t;
						return Object(g.D)(e, s, o, n)
					}),
					subredditsById: E.eb,
					viewportDataLoaded: C.a,
					pageReferrer: p.X,
					postListPlaceholderComponent: () => x.a,
					isNpsScrollSurveyEnabled: v.e,
					isLoggedIn: y.S
				},
				P = Object(n.c)(k),
				w = e => ({
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
					trackOnPostEnteredViewport: (t, s, o, n) => {
						e(c.M(t, o, n))
					},
					trackOnPostExitedViewport: (t, s, o, n) => {
						e(c.N(t, o, n))
					},
					showModalOnScroll: () => e(c.ab()),
					surveyTriggerScrollCounted: () => e(Object(m.m)())
				}),
				I = e => Object(b.b)({
					...e
				}),
				S = (e, t, s, o) => {
					const {
						listingKey: n,
						hostPostData: r,
						listingBelowVariant: a
					} = o;
					return Object(h.n)(e, t, "post", n, r, a, void 0)
				},
				N = Object(o.b)(P, w, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: I,
					postClickEventFactory: S
				}));
			t.a = e => Object(u.c)(_(N(e)))
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
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
			const h = Object(o.b)(() => Object(n.c)({
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
							previewFlair: o,
							selectedTemplateId: n
						} = t;
						return e(Object(a.h)({
							post: s,
							previewFlair: o,
							selectedTemplateId: n
						}))
					},
					handleVote: t => {
						const o = t === d.a.upvoted ? Object(r.ib)(s) : Object(r.v)(s);
						e(o)
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
						previewFlair: o,
						selectedTemplateId: n
					} = e;
					return t.dispatchFlairChanged({
						post: s.post,
						previewFlair: o,
						selectedTemplateId: n
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
				return o
			})), s.d(t, "b", (function() {
				return n
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
			const o = "ModerationPage--Modal--AddAward",
				n = "ModerationPage--Modal--DeleteAwardConfirmation",
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = n.a.createContext(() => () => {})
		},
		"./src/reddit/endpoints/talk/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "d", (function() {
				return b
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "f", (function() {
				return x
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = (s("./node_modules/uuid/dist/esm-browser/v4.js"), s("./src/lib/makeGqlRequest/index.ts")),
				r = s("./src/lib/makeRequest/index.ts"),
				a = (s("./src/reddit/models/Subreddit/index.ts"), s("./src/redditGQL/operations/CreateLiveAudioRoomOnProfile.json"), s("./src/redditGQL/operations/CreateLiveAudioRoomOrError.json"), s("./src/redditGQL/operations/GetAvailableAudioRoomTopics.json"), s("./src/redditGQL/operations/GetSubredditAllowedPostTypes.json")),
				i = s("./src/redditGQL/operations/GetUserProfileAllowedPostTypes.json"),
				d = (s("./src/redditGQL/operations/PrepareLiveAudioRoom.json"), s("./src/redditGQL/operations/PrepareLiveAudioRoomOnProfile.json"), s("./src/redditGQL/operations/ReportTalk.json")),
				c = s("./src/redditGQL/operations/StartLiveAudioRoom.json"),
				l = s("./src/redditGQL/types.ts");
			const m = (e, t) => Object(n.a)(e, {
					...d,
					variables: t
				}),
				u = async (e, t) => {
					const s = await Object(n.a)(e, {
						...a,
						variables: t
					});
					return !!Object(r.c)(s) && (s.body.data.subredditInfoById.allowedPostTypes || []).includes(l.N.Talk)
				}, p = async (e, t) => {
					var s, o;
					const a = await Object(n.a)(e, {
						...i,
						variables: t
					});
					return !!Object(r.c)(a) && (null !== (o = null === (s = a.body.data.profileByName) || void 0 === s ? void 0 : s.allowedPostTypes) && void 0 !== o ? o : []).includes(l.N.Talk)
				}, b = e => e.data.createAudioRoomOrError || e.data.createAudioRoomOnProfile || e.data.startAudioRoom, h = {
					[l.l.ServiceError]: o.fbt._("Something's wrong with the talk service right now. Check back later.", null, {
						hk: "3XqPJS"
					}),
					[l.l.UserNotAuthorized]: o.fbt._("You don't have permission to start talks in this community.", null, {
						hk: "1XY1Ss"
					}),
					[l.l.RoomLimitExceeded]: o.fbt._("You can only create three talks at one time. To continue, close a talk you're not using.", null, {
						hk: "3zPx9X"
					}),
					[l.l.ConcurrentRoomLimitExceeded]: o.fbt._("Too many talks are happening right now. Try again later.", null, {
						hk: "2LYXJx"
					}),
					[l.l.SubredditRoomLimitExceeded]: o.fbt._("This community can only host two talks at a time. Try again after one has ended.", null, {
						hk: "2mGf21"
					})
				}, x = (l.P.ServiceError, o.fbt._("Something's wrong with the talk service right now. Check back later.", null, {
					hk: "3XqPJS"
				}), l.P.UserNotAuthorized, o.fbt._("You don't have permission to start talks in this community.", null, {
					hk: "1XY1Ss"
				}), (e, t) => Object(n.a)(e, {
					...c,
					variables: t
				}))
		},
		"./src/reddit/helpers/graphql/normalizeModActivityFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const n = e => {
				const {
					moderation: t,
					...s
				} = e, {
					lastModAction: n,
					activeModerators: r
				} = (null == t ? void 0 : t.modActivitySummary) || {}, a = [], i = {};
				null == r || r.edges.map(e => {
					if (!(null == e ? void 0 : e.node)) return;
					const {
						lastModAction: t,
						moderator: s
					} = e.node;
					if (!s) return;
					const o = null == s ? void 0 : s.id;
					o && (a.push(o), i[o] || (i[o] = {
						info: {},
						lastModAction: {}
					}), i[o].info = s, i[o].lastModAction = {
						...t
					})
				});
				const d = {
					lastModAction: n,
					activeMods: a
				};
				return {
					subreddit: Object(o.a)(s),
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/PostMedia/index.tsx");
			const a = (e, t, s, o, r, a) => o ? e.crosspostRootId ? n.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, i(e, s, r, a)) : i(e, s, r, a) : null,
				i = (e, t, s, o) => n.a.createElement(r.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: o,
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
			var o = s("./src/reddit/components/CreatorStats/helpers.ts"),
				n = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const a = e => {
					switch (e) {
						case o.b.Available:
							return "insights_shown";
						case o.b.NotAvailableYet:
							return "not_enough_views";
						case o.b.NotAvailable:
							return "post_too_old";
						case o.b.Expired:
							return "insights_expired";
						default:
							return ""
					}
				},
				i = (e, t) => s => ({
					...Object(r.o)(s),
					action: n.c.VIEW,
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
					action: n.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(r.K)(s, t),
					subreddit: Object(r.lb)(s),
					userSubreddit: Object(r.ub)(s)
				}),
				c = e => {
					switch (e) {
						case o.b.Available:
							return "stats";
						case o.b.NotAvailableYet:
							return "not_enough_views";
						case o.b.NotAvailable:
						case o.b.Expired:
							return "no_data";
						case o.b.Quarantined:
							return "quarantined";
						default:
							return ""
					}
				},
				l = e => t => ({
					...Object(r.o)(t),
					action: n.c.CLICK,
					noun: "post_stats",
					source: "post",
					actionInfo: Object(r.d)(t, {
						pageType: "profile"
					}),
					post: Object(r.K)(t, e, void 0, 0),
					profile: Object(r.T)(t)
				}),
				m = (e, t, s) => o => ({
					...Object(r.o)(o),
					action: n.c.LOAD,
					noun: "insights",
					source: "post_stats",
					actionInfo: Object(r.d)(o, {
						reason: c(t)
					}),
					post: Object(r.K)(o, e, void 0, s)
				}),
				u = (e, t, s, o, a, i) => d => ({
					...Object(r.o)(d),
					action: n.c.CLICK,
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
						subredditId: o,
						subredditName: a
					}
				}),
				p = (e, t, s) => o => ({
					...Object(r.o)(o),
					action: n.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(r.d)(o, {
						pageType: "post_stats",
						reason: c(t)
					}),
					post: Object(r.K)(o, e, void 0, s),
					subreddit: Object(r.lb)(o)
				})
		},
		"./src/reddit/helpers/trackers/marketplace/display-collectibles.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				n = s("./src/reddit/helpers/trackers/snoovatar.ts");
			const r = e => {
				let {
					sendEvent: t,
					user: s,
					pageType: r,
					isDisplayCollectiblesEnabled: a
				} = e;
				const i = Object(o.b)(s.accountIcon);
				a && i || t(Object(n.m)({
					user: s,
					pageType: r,
					userHasNft: i
				}))
			}
		},
		"./src/reddit/helpers/trackers/modListing.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return n
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
			var o = s("./src/reddit/selectors/telemetry.ts");
			const n = () => e => ({
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
					...Object(o.o)(s),
					actionInfo: {
						pageType: "moderation_pages_modqueue",
						paneName: e ? "general_queue" : "community"
					},
					subreddit: {
						name: t.toLowerCase(),
						...Object(o.nb)(s, t)
					}
				}),
				d = (e, t, s) => n => ({
					source: "moderator",
					action: "click",
					noun: "subreddit_filter",
					...Object(o.o)(n),
					actionInfo: {
						pageType: "moderation_pages_modqueue",
						paneName: s ? "activity_card" : "queue_filters",
						reason: e ? "active" : "inactive"
					},
					subreddit: {
						name: t.toLowerCase(),
						...Object(o.nb)(n, t)
					}
				}),
				c = (e, t, s, n) => r => ({
					source: "moderator",
					action: "click",
					noun: n ? "expand_previous_actions" : "collapse_previous_actions",
					...Object(o.o)(r),
					actionInfo: {
						pageType: "moderation_pages_modqueue",
						paneName: s ? "post" : "comment",
						reason: t
					},
					subreddit: Object(o.mb)(r, e)
				})
		},
		"./src/reddit/hooks/promo/useIsPromoShown.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/reddit/constants/promo.ts"),
				n = s("./src/reddit/hooks/usePromoContext.ts");

			function r(e) {
				const {
					promos: t
				} = Object(n.a)();
				return !!e && t.get(e) === o.a.Shown
			}
		},
		"./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/reddit/selectors/experiments/signupUpsellExperiment.ts");

			function r(e) {
				const t = Object(o.e)(n.a) === e,
					s = Object(o.e)(n.c) === e,
					r = Object(o.e)(n.e) === e;
				return t || s || r
			}
		},
		"./src/reddit/hooks/usePromoContext.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s("./src/reddit/contexts/Promo/index.ts");
			t.a = function() {
				return Object(o.useContext)(n.a)
			}
		},
		"./src/reddit/icons/fonts/Clear/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("clear", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Clock/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("history", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				i = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				i = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: `${Object(r.b)("expand",e.isFilled)} ${e.className}`,
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", i.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/ModSettings/index.m.less"),
				d = s.n(i);
			t.a = e => n.a.createElement("i", {
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				onMouseUp: e.onMouseUp,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, n.a.createElement("path", {
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Clock/index.m.less"),
				i = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(i.a.clock, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), n.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/ModRemove/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = s.n(a);
			const d = e => n.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), n.a.createElement("path", {
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Undo/index.m.less"),
				i = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(i.a.undo, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,2.375H6.726L8.4.98,7.6.02l-3,2.5a.625.625,0,0,0,0,.96l3,2.5.8-.96L6.726,3.625H10A6.375,6.375,0,1,1,3.625,10H2.375A7.625,7.625,0,1,0,10,2.375ZM5.976,3,6,2.98v.04Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
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
			var o = s("./src/reddit/helpers/isPost.ts");
			const n = 50,
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
			const l = e => 1 === e.length ? Object(o.a)(e[0]) ? c.Post : c.Comment : c.Bulk,
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
			var o = s("./node_modules/lodash/fromPairs.js"),
				n = s.n(o),
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
				E = s("./src/reddit/components/BoostPost/index.ts"),
				C = s("./src/reddit/components/ContentGate/index.tsx"),
				y = s("./src/reddit/components/Econ/Marketplace/ShowcaseCollectionViewModal/async.tsx"),
				j = s("./src/reddit/components/EmptyProfile/index.ts"),
				_ = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				k = s("./src/reddit/components/JumpToContent/index.tsx"),
				P = s("./src/reddit/components/PostList/index.tsx"),
				w = s("./src/reddit/components/TrackingHelper/index.tsx"),
				I = s("./src/lib/classNames/index.ts"),
				S = s("./src/lib/isPinnedAdminPost/index.ts"),
				N = s("./src/lib/lessComponent.tsx"),
				T = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				R = s("./node_modules/lodash/last.js"),
				M = s.n(R);
			var L = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				A = s("./src/reddit/selectors/posts.ts"),
				D = s("./src/reddit/components/ClassicPost/index.tsx"),
				F = s("./src/reddit/components/LargePost/index.tsx"),
				B = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				U = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				V = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				W = s("./src/reddit/selectors/profile.ts"),
				G = s("./src/reddit/components/OverviewConversationsPost/ExtraCommentsItem/index.m.less"),
				z = s.n(G);
			const {
				fbt: H
			} = s("./node_modules/fbt/lib/FbtPublic.js"), K = N.a.div("ExtraCommentsItemWrapper", z.a), q = N.a.p("ExtraComments", z.a), Q = N.a.wrapped(q, "ExtraCommentsInteractive", z.a);
			var J = Object(i.b)(() => Object(d.c)({
					extraCommentsItem: W.d,
					extraCommentsPending: (e, t) => {
						const {
							extraCommentsId: s
						} = t, {
							extraComments: o
						} = e.pages.profileOverview.conversations;
						return !!o.api.pending[s]
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
						extraCommentsPending: o
					} = e;
					return a.a.createElement(K, null, o ? a.a.createElement(q, null, H._("Loading...", null, {
						hk: "47z90C"
					})) : a.a.createElement(V.a.Consumer, null, e => a.a.createElement(Q, {
						onClick: e => {
							t(s), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, H._("Load more comments", null, {
						hk: "1jXJxb"
					}))))
				}),
				Z = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				X = s("./src/reddit/contexts/Post/index.tsx"),
				Y = s("./src/reddit/hooks/useTheme.ts"),
				$ = s("./src/reddit/constants/postLayout.ts"),
				ee = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				te = s.n(ee),
				se = s("./src/reddit/constants/experiments.ts"),
				oe = s("./src/reddit/helpers/chooseVariant/index.ts"),
				ne = s("./src/reddit/selectors/experiments/index.ts");

			function re(e) {
				return e === se.tf.Minimalist || e === se.tf.Description || e === se.tf.SocialSignals
			}
			var ae = s("./src/reddit/components/RelatedCommunitiesRecommendations/index.tsx"),
				ie = s("./src/reddit/components/OverviewConversationsPost/index.m.less"),
				de = s.n(ie);

			function ce() {
				return (ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const le = N.a.div("BackgroundWrapper", de.a),
				me = N.a.wrapped(D.default, "ClassicPost", de.a),
				ue = N.a.wrapped(B.a, "OverviewCommentPost", de.a),
				pe = e => {
					const {
						isEnabled: t,
						variant: s
					} = Object(i.e)(e => (e => {
						const t = Object(oe.c)(e, {
							experimentEligibilitySelector: ne.e,
							experimentName: se.Ec
						}) || se.S.Control1;
						return {
							isEnabled: re(t),
							variant: t
						}
					})(e), i.c);
					return t ? a.a.createElement(ae.b, ce({}, e, {
						variant: s,
						pageType: ae.a.Profile
					})) : null
				},
				be = Object(i.b)(() => Object(d.c)({
					commentThreadLinkSets: (e, t) => {
						let {
							postId: s,
							currentProfileName: o
						} = t;
						const n = o ? o.toLowerCase() : "",
							r = Object(T.a)(s, n);
						return e.pages.profileOverview.conversations.keyToCommentThreadLinkSets[r]
					},
					headComment: (e, t) => {
						let {
							postId: s,
							currentProfileName: o
						} = t;
						const n = o ? o.toLowerCase() : "",
							r = Object(T.a)(s, n);
						return e.pages.profileOverview.conversations.keyToHeadCommentId[r]
					},
					isInitiallyPinned: (e, t) => {
						let {
							postId: s,
							currentProfileName: o
						} = t;
						return !!o && Object(A.p)(e, s, o)
					},
					isPinned: (e, t) => {
						let {
							postId: s,
							currentProfileName: o
						} = t;
						return !!o && Object(A.r)(e, s, o)
					},
					profileName: (e, t) => {
						let {
							currentProfileName: s
						} = t;
						if (s) return ((e, t) => {
							const {
								users: s
							} = e, o = t.toLowerCase(), n = s.models[o];
							return n ? n.username : void 0
						})(e, s)
					},
					layout: p.U
				})),
				he = N.a.wrapped(F.default, "OverviewLargePost", de.a),
				xe = be(e => {
					const {
						availableWidth: t,
						className: s,
						commentThreadLinkSets: o,
						eventFactory: n,
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
					} = e, y = {
						last: p,
						onClickPost: h,
						postId: O
					}, [j, _] = Object(r.useState)(!1), k = Object(i.e)(e => Object(A.V)(e, {
						postId: O
					})), P = Object(i.e)(e => !!g && Object(W.k)(e, {
						profileName: g
					}));
					if (!g) return null;
					const w = g === v.author,
						N = Object(S.a)(m, v.distinguishType);
					if (!w && !c && !N) return null;
					const T = c ? function(e) {
							const t = [],
								s = e.length;
							for (let o = 0; o < s; o++) {
								(0 === o || e[o - 1].depth !== e[o].depth - 1) && t.push([]), M()(t).push(e[o])
							}
							return t
						}(function(e, t) {
							const s = [];
							let o = t,
								n = "comment";
							for (; o;) {
								const t = e[o];
								s.push({
									id: o,
									depth: t.depth,
									type: n
								}), t.next ? (o = t.next.id, n = t.next.type) : o = void 0
							}
							return s
						}(o, c)) : [],
						R = T.length - 1;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: Object(I.a)(te.a.largeAndMediumActiveStyles, te.a.largeAndMediumPostStyles, de.a.OverviewConversationsPost, s),
						style: {
							...Object(L.b)(),
							...Object(L.d)(e)
						}
					}, a.a.createElement(U.a, {
						className: C ? de.a.shouldShowOverflow : void 0,
						isFirst: !0,
						isLast: R < 0,
						key: v.id
					}, !w && !!c && a.a.createElement(ue, ce({}, y, {
						commentId: c,
						key: v.id,
						profileName: g
					})), (w || N) && (b === $.g.Classic ? a.a.createElement(me, {
						availableWidth: t,
						eventFactory: n,
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
					}) : a.a.createElement(he, {
						availableWidth: t,
						eventFactory: n,
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
					}))), a.a.createElement(le, {
						style: {
							background: Object(L.e)(e)
						}
					}, !l && T.map((e, t) => a.a.createElement(U.a, {
						isLast: t === R,
						key: `${t}-isLast[${t===R}]`
					}, e.map((t, s) => {
						const o = 0 === s,
							n = s === e.length - 1;
						return "comment" === t.type ? a.a.createElement(Z.a, {
							commentId: t.id,
							depth: t.depth,
							isFirst: o,
							isLast: n,
							key: t.id,
							profileName: g,
							showModTools: !0
						}) : a.a.createElement(J, {
							extraCommentsId: t.id,
							key: t.id,
							profileName: g
						})
					}))))), j && P && k && a.a.createElement(pe, {
						postId: O,
						subredditId: k.id,
						subredditDisplayText: k.displayText,
						onDismiss: () => {
							_(!1)
						}
					}))
				});
			var fe = Object(X.b)((function(e) {
					var t;
					const s = Object(Y.a)(),
						o = Object(p.ib)();
					return a.a.createElement(xe, ce({
						theme: null !== (t = e.theme) && void 0 !== t ? t : s,
						currentProfileName: Object(p.j)(o),
						pageLayer: o
					}, e))
				})),
				ve = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				Oe = s("./src/reddit/helpers/trackers/post.ts"),
				ge = s("./src/reddit/selectors/tracking.ts"),
				Ee = s("./src/reddit/connectors/PostList/index.ts");
			const Ce = Object(d.c)({
					...Ee.d,
					postIds: A.O,
					viewportDataLoaded: ge.a
				}),
				ye = Object(Ee.c)(),
				je = Object(i.b)(Ce, Ee.b, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(Oe.n)(e, t),
					postComponentForLayout: e => {
						let {
							post: t
						} = e;
						return t.isBlank ? ve.a : fe
					}
				}));
			var _e = (e => Object(w.c)(ye(je(e))))(P.a),
				ke = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				Pe = s("./node_modules/lodash/debounce.js"),
				we = s.n(Pe),
				Ie = s("./src/reddit/actions/post.ts"),
				Se = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Ne = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				Te = s("./src/reddit/components/Media/index.tsx"),
				Re = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				Me = s("./src/reddit/components/PostContainer/index.tsx"),
				Le = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				Ae = s("./src/reddit/components/PostTitle/index.tsx"),
				De = s("./src/reddit/connectors/miniCardPost.ts"),
				Fe = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				Be = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Ue = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				Ve = s("./src/reddit/models/Media/index.ts"),
				We = s("./src/reddit/models/Post/index.ts"),
				Ge = s("./node_modules/fbt/lib/FbtPublic.js"),
				ze = s("./src/reddit/components/CommentsLink/index.tsx"),
				He = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				Ke = s("./src/reddit/components/Flatlist/index.tsx"),
				qe = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				Qe = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				Je = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Ze = s("./src/reddit/components/ShareMenu/index.tsx"),
				Xe = s("./src/reddit/icons/fonts/Share/index.tsx"),
				Ye = s("./src/reddit/models/User/index.ts"),
				$e = s("./src/reddit/components/MiniCardPost/Flatlist/index.m.less"),
				et = s.n($e);
			const tt = "-MiniCardModMenu",
				st = "-MiniCardOverflowMenu",
				ot = "-MiniCardShareMenu",
				nt = N.a.wrapped(He.a, "HorizontalVotes", et.a),
				rt = N.a.button("ShareButton", et.a),
				at = Object(p.v)({
					currentProfileName: p.j,
					isCommentPermalink: p.x,
					isCommentsPage: p.y,
					isProfilePostListing: p.N,
					pageLayer: e => e
				}),
				it = Object(d.c)({
					layout: p.U,
					subreddit: p.s
				});
			var dt = at(Object(i.b)(it, {})(Object(w.c)(e => {
					const {
						currentProfileName: t,
						className: s,
						currentUser: o,
						handleVote: n,
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
					} = e, C = e => v(Object(Oe.n)(f.id, e)), y = f.postId, j = Object(Ke.d)(tt, f.id, m, p), _ = !!o && Object(Ye.e)(o) === f.author;
					return a.a.createElement("div", {
						className: Object(I.a)(et.a.flatlistContainer, s)
					}, a.a.createElement(nt, {
						compact: !1,
						model: f,
						onVoteClick: n,
						scoreClassName: et.a.score
					}), a.a.createElement(ze.a, {
						hasModPostPerms: d,
						isCommentsPage: c,
						isCommentPermalink: l,
						isOverlay: m,
						postId: f.id,
						modModeEnabled: h,
						numComments: f.numComments,
						type: $.g.Compact,
						onClick: x
					}), a.a.createElement(Ze.a, {
						className: et.a.shareMenu,
						dropdownId: Object(Ke.d)(ot, f.id, m, p),
						permalink: f.permalink,
						post: f,
						sendEventWithName: C,
						subredditType: null == E ? void 0 : E.type
					}, a.a.createElement(rt, null, a.a.createElement(Xe.a, {
						className: et.a.shareIcon
					}), a.a.createElement("span", {
						className: et.a.shareText
					}, Ge.fbt._("share", null, {
						hk: "mmJV5"
					})))), d && a.a.createElement(qe.a, {
						dropdownId: j,
						onClick: () => C("post_mod_action_menu")
					}, a.a.createElement(Ke.b, {
						className: et.a.modActionsIcon
					}), a.a.createElement(Qe.a, {
						canEditFlair: r && !!O,
						hasModPostPerms: d,
						hasModFullPerms: i,
						isOverlay: !!m,
						isPostAuthor: _,
						modModeEnabled: h,
						post: f,
						tooltipId: j
					})), a.a.createElement(Je.a, {
						currentProfileName: t,
						isCommentsPage: c,
						isOverlay: !!m,
						isProfilePostListing: u,
						layout: b,
						pageLayer: e.pageLayer,
						permalink: f.permalink,
						postId: y,
						dropdownId: Object(Ke.d)(st, f.id, m, p),
						isFixed: p,
						sendEvent: v,
						showEditPost: !!g,
						showEditFlair: !!O,
						useFlatlistBreakpoints: Object(Je.b)({
							editPost: !1,
							save: !1,
							hide: !1,
							report: !1,
							mute: !1
						})
					}))
				}))),
				ct = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				lt = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				mt = s("./src/reddit/components/MiniCardPost/index.m.less"),
				ut = s.n(mt);
			var pt = Object(p.v)()(Object(X.b)(Object(De.a)(Object(Se.a)(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: o,
						crosspostRoot: n,
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
					} = n || h, y = C && C.type, j = Object(Le.b)(h.id), _ = y === Ve.o.RTJSON, k = E && _, P = Object(Ue.a)(u), w = Object(Fe.a)(u), S = Object(Be.a)(u), N = C && y !== Ve.o.RTJSON && y !== Ve.o.TEXT, T = y === Ve.o.VIDEO || y === Ve.o.GIFVIDEO, R = Object(We.q)(h), M = C && a.a.createElement(Te.a, {
						autoplayPref: t,
						availableWidth: s,
						className: ut.a.media,
						imageBoxClassName: Object(I.a)(ut.a.mediaImageBox, {
							[ut.a.videoStyles]: T
						}),
						imageBoxContentImageClassName: ut.a.mediaImageBoxContentImage,
						forceAspectRatio: Ve.b,
						isListing: !0,
						isMiniCard: !0,
						isNotCardView: !0,
						post: n || h,
						scrollerItemRef: x,
						shouldPause: f,
						shouldLoad: l,
						showCentered: !0,
						showFull: !1
					});
					return a.a.createElement(Me.b, {
						className: Object(I.a)(ut.a.postContainer, te.a.largeAndMediumActiveStyles, te.a.largeAndMediumPostStyles, Object(L.a)(e), o),
						style: {
							...Object(L.b)(e.flairStyleTemplate),
							...Object(L.d)(e)
						},
						post: h,
						onClick: b,
						eventFactory: d
					}, a.a.createElement(Re.a, {
						className: ut.a.backgroundWrapper,
						flairStyleTemplate: c
					}, N && M, a.a.createElement("div", {
						className: ut.a.innerContainer
					}, R && a.a.createElement(lt.a, {
						post: h,
						templatePlaceholderImage: c ? c.postPlaceholderImage : void 0
					}), a.a.createElement(Ae.c, {
						className: ut.a.postTitleCompact,
						hideSourceLink: !0,
						post: h,
						size: Ae.b.Large,
						titleColor: c && c.postTitleColor
					}), v && g && a.a.createElement(ct.a, {
						className: ut.a.metaLine,
						crosspostSubredditOrProfile: r,
						hideNSFWPref: m,
						post: h,
						subredditOrProfile: g
					}), !N && a.a.createElement("div", {
						className: ut.a.mediaWrapper
					}, M), a.a.createElement("div", {
						className: ut.a.flexSpacer
					}), a.a.createElement(dt, {
						currentUser: i,
						handleVote: e.handleVote,
						hasModFlairPerms: w,
						hasModFullPerms: S,
						hasModPostPerms: P,
						modModeEnabled: p,
						post: h,
						showEditFlair: O,
						showEditPost: k
					}))), e.activeModalId === j && a.a.createElement(Le.a, {
						flairs: h.flair,
						subredditId: h.belongsTo.id,
						modalId: j,
						onFlairChanged: e.onFlairChanged
					}), a.a.createElement(Ne.d, null))
				})))),
				bt = s("./src/reddit/helpers/getClickInfo.ts"),
				ht = s("./src/reddit/helpers/localStorage/index.ts"),
				xt = s("./src/reddit/selectors/user.ts"),
				ft = s("./src/reddit/icons/fonts/index.tsx"),
				vt = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/index.m.less"),
				Ot = s.n(vt);
			const {
				fbt: gt
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var Et = e => a.a.createElement("div", {
					className: Object(I.a)(Ot.a.container, e.className)
				}, a.a.createElement(ft.a, {
					name: "pin",
					className: Ot.a.pin
				}), a.a.createElement("div", {
					className: Ot.a.title
				}, gt._("Show off that karma!", null, {
					hk: "2yqUT7"
				})), e.children),
				Ct = s("./src/reddit/controls/TextButton/index.tsx"),
				yt = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/Education.m.less"),
				jt = s.n(yt);
			const {
				fbt: _t
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var kt = e => a.a.createElement(Et, {
					className: Object(I.a)(jt.a.container, e.className)
				}, a.a.createElement("div", {
					className: jt.a.description
				}, _t._('Pin a post from your feed using the "..." at the bottom of each post', null, {
					hk: "4lkJRB"
				})), a.a.createElement(Ct.a, {
					className: jt.a.gotIt,
					onClick: e.onGotItClick
				}, _t._("OK, I got it", null, {
					hk: "1JMx7x"
				}))),
				Pt = s("./src/reddit/components/ProfilePinnedPosts/index.m.less"),
				wt = s.n(Pt);
			const {
				fbt: It
			} = s("./node_modules/fbt/lib/FbtPublic.js"), St = 320, Nt = 300, Tt = Object(d.c)({
				arePinnedPostsLoaded: A.a,
				currentUser: xt.m,
				pinnedPostIds: A.P
			}), Rt = Object(i.b)(Tt, e => ({
				openPost: t => e(Object(Ie.K)(t))
			}));
			class Mt extends a.a.Component {
				constructor() {
					super(...arguments), this.containerRef = null, this.state = {
						showEducation: !1,
						pauseMedia: !1
					}, this.setContainerRef = e => this.containerRef = e, this.handleScroll = we()(() => {
						if (!this.containerRef) return;
						const e = this.containerRef.getBoundingClientRect();
						e.bottom < Nt ? this.pauseMedia() : e.top > 0 && this.playMedia()
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
						Object(ht.Qb)(), this.setState({
							showEducation: !1
						})
					}, this.onClickPost = (e, t) => {
						this.props.openPost({
							postOrComment: t,
							clickInfo: Object(bt.a)(e)
						})
					}, this.renderPost = e => a.a.createElement(pt, {
						postId: e,
						key: e,
						availableWidth: St,
						className: Object(I.a)(wt.a.item, wt.a.miniCardPost),
						forceLoadMedia: !this.state.pauseMedia,
						onClickPost: this.onClickPost,
						shouldPause: this.state.pauseMedia
					})
				}
				componentDidMount() {
					this.setState({
						showEducation: !Object(ht.P)()
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
					const o = !!this.props.currentUser && this.props.profileName === Object(Ye.e)(this.props.currentUser),
						n = t.length > 0,
						r = !n && this.state.showEducation && o;
					if (!n && !r) return null;
					const i = o && this.props.pinnedPostIds.length % 2 != 0;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: wt.a.title
					}, It._("Pinned posts", null, {
						hk: "3prRc3"
					})), r ? a.a.createElement(kt, {
						className: Object(I.a)(wt.a.item, wt.a.education),
						onGotItClick: this.onGotItClick
					}) : a.a.createElement("div", {
						ref: this.setContainerRef,
						className: wt.a.container
					}, t.map(this.renderPost), i && a.a.createElement(Et, {
						className: wt.a.item
					})), s)
				}
			}
			var Lt = Object(p.v)()(Rt(Mt)),
				At = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				Dt = s("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				Ft = s("./src/reddit/constants/modals.ts"),
				Bt = s("./src/reddit/helpers/name/index.ts"),
				Ut = s("./src/reddit/helpers/trackers/marketplace/display-collectibles.ts"),
				Vt = s("./src/reddit/helpers/trackers/screenview.ts"),
				Wt = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				Gt = s("./src/reddit/layout/page/Listing/index.tsx"),
				zt = s("./src/reddit/models/ContentGate.ts"),
				Ht = s("./src/reddit/pages/ProfileBlockInterstitial/index.tsx"),
				Kt = s("./src/reddit/routes/profileOverview/index.ts"),
				qt = s("./src/reddit/selectors/experiments/econ/index.ts"),
				Qt = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				Jt = s("./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts"),
				Zt = s("./src/reddit/selectors/platform.ts");

			function Xt() {
				return (Xt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Yt = (e, t) => {
					let {
						location: s
					} = t;
					return n()([...Object(c.a)(s.search)])
				},
				$t = Object(p.v)(),
				es = Object(d.c)({
					isOwnProfile: p.G,
					over18Prefs: xt.mb,
					layout: p.U,
					user: (e, t) => {
						let {
							match: s
						} = t;
						return Object(xt.Cb)(e, {
							userName: s.params.profileName
						})
					},
					isDisplayCollectiblesEnabled: qt.n
				}),
				ts = Object(d.a)(es, Yt, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.profileName
				}, (e, t) => {
					let {
						match: s
					} = t;
					return Object(W.k)(e, {
						profileName: s.params.profileName
					})
				}, (e, t) => Object(O.a)(e, Yt(0, t)), (e, t) => {
					let {
						match: s
					} = t;
					return !Object(A.n)(e, {
						profileName: s.params.profileName
					})
				}, xt.S, (e, t) => {
					let {
						match: s
					} = t;
					return Object(xt.h)(e, b.rc + s.params.profileName)
				}, (e, t) => {
					let {
						match: s
					} = t;
					return {
						isBlocked: Object(xt.N)(e, {
							profileName: s.params.profileName
						})
					}
				}, Qt.g, Jt.a, Zt.b, (e, t, s, o, n, r, a, i, d, c, l, u) => {
					let {
						sort: p,
						t: h
					} = n, {
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
						isProfileNSFW: !!o && o.isNSFW,
						listingKey: g,
						profileName: s,
						shouldShowPinnedPostsSection: r && !E,
						sort: p,
						timeSort: h,
						avatar: null === (f = null == o ? void 0 : o.icon) || void 0 === f ? void 0 : f.url,
						isBlocked: x,
						...e,
						nsfwBlockingExperiment: c,
						showNewDesignBlocking: l,
						isDisplayCollectiblesUrl: (null === (v = null == u ? void 0 : u.routeMatch) || void 0 === v ? void 0 : v.match.path) === Kt.a
					}
				}),
				ss = Object(i.b)(ts, (e, t) => ({
					onLoadMoreConversationsItems: () => e(g.h({
						profileName: t.match.params.profileName,
						sort: t.match.params.sort
					})),
					onLayoutChange: () => e(Object(v.profileOverviewRequested)({
						...t.match,
						queryParams: n()([...Object(c.a)(t.location.search)])
					})),
					openNsfwModal: () => e(Object(f.a)()),
					openShowcaseModal: t => e(Object(x.h)(Ft.a.X_SHOWCASE_COLLECTION_VIEW_MODAL, {
						telemetryReason: "deeplink",
						profileUserName: t
					}))
				}));
			class os extends a.a.Component {
				constructor(e) {
					super(e), this.renderNoPosts = () => a.a.createElement(j.c, {
						profileName: this.props.profileName,
						timeSort: this.props.timeSort
					})
				}
				componentDidMount() {
					this.props.isProfileNSFW && !this.props.isOwnProfile && this.props.nsfwBlockingExperiment === Qt.a.Blurred ? this.props.openNsfwModal() : this.props.isLoggedIn && this.props.isDisplayCollectiblesUrl && Object(y.a)().then(() => this.props.openShowcaseModal(this.props.profileName))
				}
				UNSAFE_componentWillUpdate(e) {
					this.props.layout !== e.layout && e.onLayoutChange(), e.user && e.user !== this.props.user && Object(Ut.a)({
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
						isOwnProfile: o,
						isProfileNSFW: n,
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
					if (t && t.profileDeleted) return a.a.createElement(C.default, {
						contentGateType: zt.a.ProfileDeleted,
						profileName: u
					});
					if (t && t.profileSuspended) return a.a.createElement(C.default, {
						contentGateType: zt.a.ProfileSuspended,
						profileName: u
					});
					if (451 === m.status || t && t.profileBlockedForLegalReason) return a.a.createElement(C.default, {
						contentGateType: zt.a.ProfileBlockedForLegalReason,
						profileName: u
					});
					const O = m.queryParams && "true" === m.queryParams.consent;
					if (403 === m.status || s && !O) return a.a.createElement(Ht.a, {
						username: u,
						avatar: e
					});
					if (404 === m.status) return a.a.createElement(C.default, {
						contentGateType: zt.a.ProfileDoesNotExist,
						profileName: u
					});
					if (!u) return null;
					const g = u.toLowerCase(),
						y = `/user/${u}/`,
						j = {
							listingKey: r,
							listingName: g
						};
					if (n && !o && i === Qt.a.NoPreview && v) return a.a.createElement(Dt.a, {
						contentTitle: Object(Bt.e)(u)
					});
					if (!c && n && !o && i !== Qt.a.Blurred) return a.a.createElement(C.default, {
						subredditName: u,
						contentGateType: zt.a.Nsfw
					});
					const P = {
							inSubredditOrProfile: !Object(l.a)(u),
							listingKey: r,
							listingName: g,
							listingViewed: (e, t) => Object(Vt.p)(r, x, t, e, f),
							noPostsComponent: this.renderNoPosts,
							onScroll: h,
							onTryAgain: d
						},
						w = {
							sort: x,
							baseUrl: y,
							sortOptions: b.Gb,
							timeSort: f
						},
						I = a.a.createElement(a.a.Fragment, null, p && a.a.createElement(Lt, {
							profileName: u
						}), a.a.createElement(_.a, w), a.a.createElement(E.b, null, a.a.createElement(_e, Xt({}, P, {
							excludePinnedPosts: p,
							onLoadMore: this.props.onLoadMoreConversationsItems,
							shouldShowInsightsButton: this.props.isOwnProfile
						}))));
					return a.a.createElement(Gt.a, {
						className: this.props.className,
						fitPageToContent: !0,
						contentNavBar: a.a.createElement(a.a.Fragment, null, a.a.createElement(ke.a, {
							profileName: u,
							viewBlockedConsent: O
						})),
						content: a.a.createElement(a.a.Fragment, null, a.a.createElement(k.a, null), I),
						sidebar: a.a.createElement(At.a, Xt({}, j, {
							profileName: u
						}))
					})
				}
			}
			t.default = $t(ss(Object(u.a)(Object(h.a)(Object(Wt.d)(Object(w.c)(os))))))
		},
		"./src/reddit/reducers/features/modActivitySummaries/index.ts": function(e, t, s) {
			"use strict";
			var o = s("./src/reddit/actions/modQueue/constants.ts");
			t.a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.l: {
						const {
							summary: s,
							subreddit: o
						} = t.payload;
						return {
							...e,
							[o.id]: {
								...e[o.id],
								...s
							}
						}
					}
					case o.i:
					case o.f:
					case o.r:
					case o.u:
					case o.A: {
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
			var o = s("./node_modules/redux/es/redux.js"),
				n = s("./src/reddit/actions/modQueue/constants.ts");
			var r = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case n.m: {
							const {
								targetID: s
							} = t.payload;
							return e.includes(s) ? e : [...e, s]
						}
						case n.p: {
							const {
								targetID: s
							} = t.payload, o = e.indexOf(s);
							return o > -1 && e.splice(o, 1), e
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
							const o = Object.keys(s[t]);
							let n = !1;
							o.map(e => {
								c.includes(e) && (n = !0)
							}), !e.includes(t) && n && (e = [...e, t])
						}), e
					}
					case n.p: {
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
			t.a = Object(o.c)({
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
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				a = s("./src/reddit/selectors/meta.ts"),
				i = s("./src/reddit/selectors/experiments/index.ts");
			const d = Object(o.a)(a.h, a.d, i.e, (e, t, s) => !e && !t && !s);

			function c(e, t) {
				return s => Object(r.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: d,
					throttledVariants: {
						[n.bd.Bottom_cell_dismissible]: e,
						[n.bd.Bottom_cell_dismissible_immediate_trigger]: e,
						[n.bd.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const l = c(n.Bb, !0),
				m = c(n.Cb, !0),
				u = c(n.Db, !0),
				p = c(n.Bb, !1),
				b = c(n.Cb, !1),
				h = c(n.Db, !1)
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return d
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/selectors/chatPost.ts"),
				a = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const i = e => {
					const t = Object(a.a)(e);
					return Boolean(t) && !Object(n.rg)(t)
				},
				d = Object(o.a)(i, r.d, (e, t) => e && !t)
		},
		"./src/redditGQL/operations/CreateLiveAudioRoomOnProfile.json": function(e) {
			e.exports = JSON.parse('{"id":"e35a47c6aa21"}')
		},
		"./src/redditGQL/operations/CreateLiveAudioRoomOrError.json": function(e) {
			e.exports = JSON.parse('{"id":"f1f366237119"}')
		},
		"./src/redditGQL/operations/GetAvailableAudioRoomTopics.json": function(e) {
			e.exports = JSON.parse('{"id":"05271fef4b69"}')
		},
		"./src/redditGQL/operations/GetRelatedCommunityRecommendations.json": function(e) {
			e.exports = JSON.parse('{"id":"1a3f607eabf6"}')
		},
		"./src/redditGQL/operations/GetSubredditAllowedPostTypes.json": function(e) {
			e.exports = JSON.parse('{"id":"f65cf1eba776"}')
		},
		"./src/redditGQL/operations/GetUserProfileAllowedPostTypes.json": function(e) {
			e.exports = JSON.parse('{"id":"34fa0ef8e099"}')
		},
		"./src/redditGQL/operations/LastModActionInSubreddit.json": function(e) {
			e.exports = JSON.parse('{"id":"7888d2d30843"}')
		},
		"./src/redditGQL/operations/ModActivitySummaryByID.json": function(e) {
			e.exports = JSON.parse('{"id":"d968e053a7b8"}')
		},
		"./src/redditGQL/operations/PrepareLiveAudioRoom.json": function(e) {
			e.exports = JSON.parse('{"id":"a04297924fc8"}')
		},
		"./src/redditGQL/operations/PrepareLiveAudioRoomOnProfile.json": function(e) {
			e.exports = JSON.parse('{"id":"649e9f8bd6d9"}')
		},
		"./src/redditGQL/operations/ReportTalk.json": function(e) {
			e.exports = JSON.parse('{"id":"139ca5b89cf9"}')
		},
		"./src/redditGQL/operations/SingleCommentById.json": function(e) {
			e.exports = JSON.parse('{"id":"7e8ad668620c"}')
		},
		"./src/redditGQL/operations/SinglePostInfoById.json": function(e) {
			e.exports = JSON.parse('{"id":"0b05c384fb49"}')
		},
		"./src/redditGQL/operations/StartLiveAudioRoom.json": function(e) {
			e.exports = JSON.parse('{"id":"6e7ab4bd4873"}')
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"655eef09fadc"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileOverview.501ddace9fb14b7d8af5.js.map