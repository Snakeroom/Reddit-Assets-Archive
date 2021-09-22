// https://www.redditstatic.com/desktop2x/ProfileOverview.1f390a0c6e1ef0ddcf3a.js
// Retrieved at 9/22/2021, 1:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileOverview"], {
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, s, o) {
				var r = s ? s.call(o, e, t) : void 0;
				if (void 0 !== r) return !!r;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var i = Object.keys(e),
					n = Object.keys(t);
				if (i.length !== n.length) return !1;
				for (var a = Object.prototype.hasOwnProperty.bind(t), d = 0; d < i.length; d++) {
					var c = i[d];
					if (!a(c)) return !1;
					var l = e[c],
						p = t[c];
					if (!1 === (r = s ? s.call(o, l, p, c) : void 0) || void 0 === r && l !== p) return !1
				}
				return !0
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
				return v
			}));
			var o = s("./node_modules/react/index.js");
			var r = s("./node_modules/lodash/debounce.js"),
				i = s.n(r),
				n = s("./src/reddit/constants/experiments.ts"),
				a = s("./src/reddit/constants/promo.ts"),
				d = s("./src/reddit/hooks/usePromoContext.ts"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/reddit/hooks/useExperimentVariant.ts"),
				p = s("./src/reddit/selectors/experiments/index.ts"),
				m = s("./src/reddit/selectors/meta.ts");
			const u = Object(c.a)(m.g, m.d, p.e, (e, t, s) => !e && !t && !s);

			function h(e) {
				const t = Object(l.a)(n.Z, u) === e,
					s = Object(l.a)(n.ab, u) === e,
					o = Object(l.a)(n.bb, u) === e;
				return t || s || o
			}
			const b = 250,
				f = 1e3;

			function g(e = b) {
				const {
					showPromo: t
				} = Object(d.a)(), s = function() {
					const e = h(n.ub.Bottom_cell),
						t = h(n.ub.Bottom_sheet);
					return e ? a.b.SignupUpsellCell : t ? a.b.SignupUpsellBottomSheet : null
				}(), r = o.useRef(!1);
				return o.useMemo(() => i()(e => {
					var o;
					if (!r.current && s && (null === (o = null == e ? void 0 : e.primaryChild) || void 0 === o ? void 0 : o.rectangle)) {
						const {
							top: o
						} = e.primaryChild.rectangle;
						o > 2 * window.innerHeight && (t(s), r.current = !0)
					}
				}, e, {
					maxWait: f
				}), [s, t, e])
			}

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}

			function v(e) {
				const t = e.displayName || e.name || "Component";

				function s(t) {
					const s = g();
					return o.createElement(e, y({
						showSignupUpsell: s
					}, t))
				}
				return s.displayName = `withShowSignupUpsell(${t})`, s
			}
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			})), s.d(t, "d", (function() {
				return x
			})), s.d(t, "c", (function() {
				return P
			})), s.d(t, "b", (function() {
				return I
			}));
			var o, r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/lib/performanceTimings/index.tsx"),
				n = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(o || (o = {}));
			var c, l = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				p = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(c || (c = {}));
			var m = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				u = s("./src/reddit/selectors/platform.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const b = Object(r.a)(n.g),
				f = Object(r.a)(n.e),
				g = Object(r.a)(n.h),
				y = Object(r.a)(n.c),
				v = Object(r.a)(n.f),
				x = Object(r.a)(n.j),
				P = Object(r.a)(n.i),
				C = () => async (e, t, {
					gqlContext: s
				}) => {
					const r = t(),
						i = Object(m.e)(r),
						n = Object(m.d)(r),
						c = Object(h.J)(r);
					if (i || !n) return;
					e(g());
					let u = !1;
					try {
						const t = c ? o.LoggedInGeo : o.LoggedOutGeo,
							r = await ((e, t, s) => Object(a.a)(e, {
								...d,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(s(), t);
						if (r.ok && r.body) {
							const {
								data: t
							} = r.body;
							if (O(t)) {
								if (j(t)) {
									e(y({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), u = !0
								} else if (w(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: o,
											interactedSubreddit: r,
											category: i
										} = s.focusRecommendations[0],
										n = [o, r],
										a = Object(p.d)(n),
										d = Object(l.b)(n),
										c = Object(p.c)(o),
										m = {
											recommendedSubredditIds: [o.id],
											interactedSubredditIds: [r.id],
											subreddits: a,
											subredditsAboutInfo: d,
											subredditTopContent: c,
											category: i,
											lastLoadedEnv: "client"
										};
									e(b(m)), u = !0
								}
							} else u = !1
						}
					} catch (v) {
						u = !1
					}
					u || e(f({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, O = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, j = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				}, w = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						o = t && t.type;
					return !!(s && !j(e) && o === c.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, I = () => async (e, t, s) => {
					var o, r;
					const n = t(),
						a = Object(m.g)(n);
					if (Object(m.f)(n) || null === a || "client" === a) {
						const s = null === (r = null === (o = Object(u.b)(t())) || void 0 === o ? void 0 : o.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
							a = Object(h.K)(n);
						return Object(i.i)(() => e(C()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(v({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/pages/profileOverview/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "profileOverviewConversationsPending", (function() {
				return xe
			})), s.d(t, "profileOverviewConversationsLoaded", (function() {
				return Pe
			})), s.d(t, "profileOverviewConversationsFailed", (function() {
				return Ce
			})), s.d(t, "profileOverviewChronoPending", (function() {
				return Oe
			})), s.d(t, "profileOverviewChronoLoaded", (function() {
				return je
			})), s.d(t, "profileOverviewChronoFailed", (function() {
				return we
			})), s.d(t, "profileOverviewConversationsRequested", (function() {
				return Ie
			})), s.d(t, "profileOverviewChronoRequested", (function() {
				return Se
			})), s.d(t, "profileOverviewRequested", (function() {
				return ke
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/lodash/pick.js"),
				r = s.n(o),
				i = s("./src/reddit/actions/moderatingSubreddits.ts"),
				n = s("./src/reddit/actions/pages/profileShared.ts"),
				a = s("./src/reddit/actions/subreddit.ts"),
				d = s("./src/reddit/endpoints/page/profileOverviewPage.ts"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/constants/postLayout.ts"),
				p = s("./src/reddit/constants/parameters.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/selectors/listings.ts"),
				h = s("./src/reddit/selectors/profile.ts"),
				b = s("./src/reddit/selectors/profileOverviewChronoItems.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				g = s("./src/lib/makeActionCreator/index.ts"),
				y = s("./src/reddit/actions/changeUsername.ts"),
				v = s("./src/reddit/actions/contentGate.ts"),
				x = s("./src/reddit/actions/externalAccount.ts"),
				P = s("./src/reddit/actions/gold/powerups.ts"),
				C = s("./src/reddit/actions/pinnedPost.ts"),
				O = s("./src/reddit/actions/platform.ts"),
				j = s("./src/reddit/actions/profile/index.ts"),
				w = s("./src/reddit/actions/trophyCase.ts"),
				I = s("./src/reddit/constants/errors.ts"),
				S = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				k = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				E = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				T = s("./src/lib/initializeClient/installReducer.ts"),
				_ = s("./node_modules/redux/es/redux.js"),
				N = s("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const L = {};
			var M = (e = L, t) => {
				switch (t.type) {
					case E.c:
					case E.b:
					case N.c:
					case N.b: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case E.a:
					case N.a: {
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
			const F = {};
			var R = (e = F, t) => {
					switch (t.type) {
						case E.c:
						case N.c: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case E.b:
						case E.a:
						case N.b:
						case N.a: {
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
				A = Object(_.c)({
					error: M,
					pending: R
				});
			const B = {};
			var V = (e = B, t) => {
				switch (t.type) {
					case E.b: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: {}
						}
					}
					case N.b: {
						const {
							key: s,
							fetchedToken: o
						} = t.payload, r = e[s];
						return {
							...e,
							[s]: {
								...r,
								[o]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const K = {};
			var U = (e = K, t) => {
					switch (t.type) {
						case E.b:
						case N.b: {
							const {
								key: s,
								overviewIds: o
							} = t.payload, r = e[s] || [];
							return {
								...e,
								[s]: [...r, ...o]
							}
						}
						default:
							return e
					}
				},
				W = s("./src/lib/omitKey/index.ts");
			const G = {};
			var D = (e = G, t) => {
					switch (t.type) {
						case E.b:
						case N.b: {
							const {
								key: s,
								dist: o,
								token: r
							} = t.payload;
							return r ? {
								...e,
								[s]: {
									dist: o,
									token: r
								}
							} : Object(W.a)(e, s)
						}
						default:
							return e
					}
				},
				H = Object(_.c)({
					api: A,
					fetchedTokens: V,
					ids: U,
					loadMore: D
				});
			const q = {};
			var z = (e = q, t) => {
				switch (t.type) {
					case E.f:
					case E.e: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case E.d: {
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
			const X = {};
			var Q = (e = X, t) => {
					switch (t.type) {
						case E.f: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case E.e:
						case E.d: {
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
				J = Object(_.c)({
					error: z,
					pending: Q
				}),
				Z = s("./src/reddit/actions/profileConversations.ts");
			const Y = {};
			var $ = (e = Y, t) => {
				switch (t.type) {
					case Z.c:
					case Z.b: {
						const {
							extraCommentsId: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case Z.a: {
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
			const ee = {};
			var te = (e = ee, t) => {
					switch (t.type) {
						case Z.c: {
							const {
								extraCommentsId: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case Z.b:
						case Z.a: {
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
				se = Object(_.c)({
					error: $,
					pending: te
				});
			const oe = {};
			var re = (e = oe, t) => {
					switch (t.type) {
						case E.e:
						case Z.b:
						case Z.e:
							return {
								...e, ...t.payload.extraComments
							};
						default:
							return e
					}
				},
				ie = Object(_.c)({
					api: se,
					models: re
				}),
				ne = s("./node_modules/lodash/mapValues.js"),
				ae = s.n(ne),
				de = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				ce = s("./src/reddit/constants/comments.ts");
			const le = {};

			function pe(e) {
				const t = e;
				return ae()(t, ({
					depth: e,
					next: t,
					prev: s
				}) => ({
					depth: e,
					next: t,
					prev: s
				}))
			}
			const me = (e, t, s) => {
				const o = {};
				for (const r in t) {
					const e = t[r],
						s = e.postId;
					o.hasOwnProperty(s) ? o[s] = {
						...o[s],
						[r]: e
					} : o[s] = {
						[r]: e
					}
				}
				for (const r in s) {
					const e = s[r],
						t = e.postId;
					o.hasOwnProperty(t) ? o[t] = {
						...o[t],
						[r]: e
					} : o[t] = {
						[t]: e
					}
				}
				return o
			};
			var ue = (e = le, t) => {
				switch (t.type) {
					case E.e:
					case Z.e: {
						const {
							comments: s,
							extraComments: o,
							postIds: r,
							profileName: i
						} = t.payload, n = me(r, s, o), a = {};
						for (const e of r) {
							a[Object(de.a)(e, i)] = n.hasOwnProperty(e) ? pe(n[e]) : {}
						}
						return {
							...e,
							...a
						}
					}
					case Z.b: {
						const {
							comments: s,
							commentLists: o,
							extraComments: r,
							extraCommentsId: i,
							postIds: n,
							profileName: a
						} = t.payload;
						if (0 === n.length) {
							const t = Object.keys(e).find(t => void 0 !== e[t][i]);
							if (!t) return e;
							const s = {
									...e[t]
								} [i].prev,
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
						const d = n[0],
							c = pe(me(n, s, r)[d]),
							l = Object(de.a)(d, a),
							p = {
								...e[l]
							},
							m = p[i].prev,
							u = m && m.id || "",
							h = o[d].head,
							b = h && h.id || "",
							f = {
								id: b,
								type: ce.a.Comment
							},
							g = {
								...p,
								[u]: {
									...p[u],
									next: f
								},
								...c,
								[b]: {
									...c[b],
									prev: m
								}
							};
						return {
							...e,
							[l]: g
						}
					}
					default:
						return e
				}
			};
			const he = {};
			var be = (e = he, t) => {
				switch (t.type) {
					case E.e:
					case Z.e: {
						const {
							commentLists: s,
							postIds: o,
							profileName: r
						} = t.payload, i = {};
						for (const e of o) {
							i[Object(de.a)(e, r)] = s[e] && s[e].head ? s[e].head.id : null
						}
						return {
							...e,
							...i
						}
					}
					default:
						return e
				}
			};
			const fe = {};
			var ge = (e = fe, t) => {
					switch (t.type) {
						case E.e:
						case Z.e: {
							const {
								postIds: s,
								profileName: o
							} = t.payload, r = {};
							for (const e of s) {
								r[Object(de.a)(e, o)] = e
							}
							return {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				ye = Object(_.c)({
					api: J,
					extraComments: ie,
					keyToCommentThreadLinkSets: ue,
					keyToHeadCommentId: be,
					keyToPostId: ge
				}),
				ve = Object(_.c)({
					chrono: H,
					conversations: ye
				});
			Object(T.a)({
				pages: {
					profileOverview: ve
				}
			});
			const xe = Object(g.a)(E.f),
				Pe = Object(g.a)(E.e),
				Ce = Object(g.a)(E.d),
				Oe = Object(g.a)(E.c),
				je = Object(g.a)(E.b),
				we = Object(g.a)(E.a),
				Ie = (e, t, s, o) => async (o, r, i) => {
					const n = r(),
						a = !!n.listings.postOrder.ids[e],
						c = !!Object(u.c)(n, {
							listingKey: e
						});
					if (!!Object(u.d)(n, {
							listingKey: e
						}) || a && !c) return;
					o(xe({
						key: e
					}));
					const l = await Object(k.a)("profile", () => Object(d.b)(i.apiContext(), t, s)),
						p = l.body,
						{
							pinned: m,
							postIds: b
						} = p;
					if (l.ok) {
						o(Pe({
							key: e,
							meta: n.meta,
							profileName: t,
							...p,
							postIds: b
						}));
						const s = Object(h.m)(r(), t);
						o(Object(C.h)({
							profileId: s,
							pinned: m
						}))
					} else o(Ce({
						account: l.body.data ? l.body.data.account : null,
						error: l.body.reason ? {
							type: l.body.reason
						} : l.error,
						key: e
					})), l.body.reason === I.a.DeletedProfile && o(Object(v.p)({
						profileName: t
					})), o(Object(O.m)(l.status))
				}, Se = (e, t, s, o) => async (o, r, i) => {
					const n = r(),
						a = !!Object(b.f)(n, {
							listingKey: e
						}).length,
						c = !!Object(b.a)(n, {
							listingKey: e
						});
					if (!!Object(b.b)(n, {
							listingKey: e
						}) || a && !c) return;
					o(Oe({
						key: e
					}));
					const l = await Object(k.a)("profile", () => Object(d.a)(i.apiContext(), t, s)),
						p = l.body,
						{
							pinned: m
						} = p;
					if (l.ok) {
						o(je({
							key: e,
							meta: n.meta,
							...p
						}));
						const s = Object(h.m)(r(), t);
						o(Object(C.h)({
							profileId: s,
							pinned: m
						}))
					} else o(we({
						account: l.body.data ? l.body.data.account : null,
						error: l.body.reason ? {
							type: l.body.reason
						} : l.error,
						key: e
					})), l.body.reason === I.a.DeletedProfile && o(Object(v.p)({
						profileName: t
					})), o(Object(O.m)(l.status))
				}, ke = e => async (t, s, o) => {
					const {
						queryParams: d,
						params: u
					} = e, {
						sort: b,
						t: g
					} = Object(n.a)(s(), d), {
						profileName: v
					} = u;
					let C = !1;
					const I = l.e[Object(m.Q)(s(), {})],
						k = v.toLowerCase(),
						E = {
							...r()(e.queryParams, p.l),
							sort: b,
							layout: I,
							t: g
						},
						T = [t(j.d(k))];
					if (I === l.e[l.g.Compact]) {
						const o = Object(S.a)(k, c.sb, b, e.queryParams);
						s().pages.profileOverview.chrono.ids[o] ? C = !0 : T.push(t(Se(o, k, E, !0)))
					} else {
						const o = Object(S.a)(k, c.tb, b, e.queryParams);
						s().listings.postOrder.ids[o] && !s().listings.postOrder.api.error[o] ? C = !0 : T.push(t(Ie(o, k, E, !0)))
					}
					if (T.push(t(Object(i.b)())), await Promise.all(T), C) return;
					const _ = s();
					if (!_.platform.currentPage) return;
					if (200 !== _.platform.currentPage.status) return;
					const N = Object(h.m)(s(), k),
						L = Object(f.ob)(_, {
							userName: v
						}).id;
					t(O.l({
						title: Ee(s(), v)
					})), Object(f.M)(_) && Object(f.P)(_, v) && t(Object(y.f)());
					const M = [t(Object(a.q)()), t(w.b(k, N)), t(j.b(k)), t(x.o(v)), t(j.g(v)), t(P.k(v, L))];
					await Promise.all(M)
				}, Ee = (e, t) => Object(h.q)(e, {
					profileName: t
				})
		},
		"./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const a = 5;

			function d(e) {
				const {
					post: t,
					postIds: s,
					subredditId: o
				} = e, d = Object(i.e)(e => e.subreddits.questions), c = Object(i.e)(e => e.posts.models);
				if (!s) return null;
				const l = s.indexOf(t.id);
				if (l < 0) return null;
				if (!u(t.id)) return null;
				const p = new Set;
				let m = !1;
				for (let r = 0, i = -999; r <= l; r += 1) {
					const e = s[r],
						t = c[e].belongsTo.id;
					u(e) && r - i >= a && !p.has(t) && (i = r, p.add(t), r === l && (m = !0))
				}
				return m ? r.a.createElement(n.a, {
					subredditId: o,
					inFeed: !0
				}) : null;

				function u(e) {
					var t;
					return (null === (t = d[c[e].belongsTo.id]) || void 0 === t ? void 0 : t.length) > 0
				}
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/async.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(o.a)({
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
			t.a = r
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
				predictions: "_2NCzRZuzUTspyIjeCOMgux",
				badge: "_29aHDAbliwom5yyuyhXsFc",
				live: "_15J6TjGStJy2YuJAIf8TW4",
				ended: "_3K1ErD5uCGRM98kPQaJ_Nv",
				awards: "_3jKFKIS1X6GZ6MOcUdAy08"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			}));
			var o = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				c = s("./src/reddit/selectors/experiments/econ/index.ts"),
				l = s("./src/reddit/selectors/posts.ts"),
				p = s("./src/lib/prettyPrintNumber/index.ts");
			const {
				fbt: m
			} = s("./node_modules/fbt/lib/FbtPublic.js"), u = ({
				tournamentStatus: e,
				participantsCount: t
			}) => 0 === t ? null : e === d.a.Live ? m._({
				"*": "· {total participated users} users predicting",
				_1: "· {total participated users} user predicting"
			}, [m._param("total participated users", Object(p.b)(t)), m._plural(t)], {
				hk: "1PPQpS"
			}) : e === d.a.Closed ? m._({
				"*": "· {total participated users} users predicted",
				_1: "· {total participated users} user predicted"
			}, [m._param("total participated users", Object(p.b)(t)), m._plural(t)], {
				hk: "4ehhqy"
			}) : null;
			var h = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less"),
				b = s.n(h);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js"), g = ({
				post: e
			}) => {
				const t = e.predictionTournament,
					s = t.status === d.a.Live,
					r = t.status === d.a.Closed,
					p = Object(n.e)(c.u),
					m = Object(n.e)(t => Object(l.U)(t, {
						postId: e.id
					}));
				return i.a.createElement("div", {
					className: b.a.container
				}, i.a.createElement("h3", {
					className: b.a.title
				}, t.name), i.a.createElement("div", {
					className: b.a.label
				}, i.a.createElement("span", null, p ? null == m ? void 0 : m.displayText : f._("Predictions Tournament", null, {
					hk: "sZ4UO"
				})), s && i.a.createElement("span", {
					className: Object(o.a)(b.a.badge, b.a.live)
				}, f._("Live", null, {
					hk: "1G2P1W"
				})), r && i.a.createElement("span", {
					className: Object(o.a)(b.a.badge, b.a.ended)
				}, f._("Ended", null, {
					hk: "4s3hco"
				})), p && i.a.createElement("span", {
					className: b.a.predictions
				}, i.a.createElement(u, {
					tournamentStatus: t.status,
					participantsCount: t.totalParticipantsCount
				}))), i.a.createElement(a.a, {
					className: b.a.awards,
					thing: e
				}))
			}
		},
		"./src/reddit/components/LargePost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1RYN-7H8gYctjOQeL8p2Q7",
				topCompactPost: "_34QdMmLlbOcjhKm_jp-r3s",
				bottomCompactPost: "_2IWrSJK7OQ27rTgV_N2Zu4",
				backgroundWrapper: "_11R7M_VOgKO1RJyRSRErT3",
				isEvent: "_3js7RHbLSHKV13qUFCVIhb",
				flatListContainer: "_1ixsU4oQRnNfZ91jhBU74y",
				noProposal: "_3KYCJ3N4w1YmvpFMo_3zcn",
				postMediaWrapper: "STit0dLageRsa2yR4te_b",
				postTitle: "_3wiKjmhpIpoTE2r5KCm2o6",
				proposal: "_2dkCPUHQTdBWU2B0dYnkRb",
				mHasNotVoted: "_5iUKicC_Y0zWFXvBBtVQJ",
				mGAPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mGaPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mPollIsClosed: "_3sj79JhIvASSGVklMeKgTl",
				adLinkWrapper: "_115kZaIAhrTbhLHOXtz01X",
				adsGalleryDisplayLink: "_3g19_IiwClMjxmNOrShwZw",
				horizontalVotes: "uFwpR-OdmueYZxdY_rEDX"
			}
		},
		"./src/reddit/components/LargePost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				c = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				l = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				p = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				m = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				h = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				b = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				f = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				g = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				y = s("./src/reddit/models/Media/index.ts"),
				v = s("./src/reddit/models/Post/index.ts"),
				x = s("./src/reddit/models/Vote/index.ts"),
				P = s("./src/reddit/selectors/activeModalId.ts"),
				C = s("./src/reddit/selectors/experiments/econ/index.ts"),
				O = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				j = s("./src/reddit/selectors/moderatorPermissions.ts"),
				w = s("./src/reddit/selectors/posts.ts"),
				I = s("./src/reddit/selectors/user.ts"),
				S = s("./src/lib/ads/index.ts"),
				k = s("./src/lib/classNames/index.ts"),
				E = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				T = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				_ = s("./src/reddit/components/AwardBadges/index.tsx"),
				N = s("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				L = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				M = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				F = s("./src/reddit/components/Flatlist/index.tsx"),
				R = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				A = s("./src/reddit/components/ModModeReports/index.tsx"),
				B = s("./src/reddit/components/ModModeReports/helpers.ts"),
				V = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				K = s("./src/reddit/components/PostContainer/index.tsx"),
				U = s("./src/reddit/components/PostLeftRail/index.tsx"),
				W = s("./src/reddit/components/PostMedia/index.tsx"),
				G = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				D = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				H = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				q = s.n(H);
			const {
				fbt: z
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var X = () => r.a.createElement("div", {
					className: q.a.container
				}, r.a.createElement(D.a, {
					className: q.a.pinnedIcon,
					isFilled: !0
				}), r.a.createElement("span", {
					className: q.a.metaText
				}, z._("pinned by moderators", null, {
					hk: "1qU8t4"
				}))),
				Q = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				J = s("./src/reddit/components/PostTitle/index.tsx"),
				Z = s("./src/reddit/components/PostTopLine/index.tsx"),
				Y = s("./src/reddit/components/SourceLink/index.tsx"),
				$ = s("./src/reddit/contexts/InsideOverlay.tsx"),
				ee = s("./src/reddit/contexts/PageLayer/index.tsx"),
				te = s("./src/reddit/contexts/Post/index.tsx"),
				se = s("./src/reddit/helpers/isCrosspost.ts"),
				oe = s("./src/reddit/helpers/postEvent.ts"),
				re = s("./src/reddit/constants/experiments.ts"),
				ie = s("./src/reddit/helpers/chooseVariant/index.ts"),
				ne = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const ae = Object(a.a)(w.N, e => e.some(ne.c)),
				de = Object(a.a)(ae, e => e),
				ce = (e, t) => Object(ie.c)(e, {
					experimentName: re.Fb,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && de(e, {
							listingKey: s
						})
					}
				});
			var le = s("./src/reddit/selectors/postFlair.ts"),
				pe = s("./src/reddit/selectors/showPromotedCTA.ts"),
				me = s("./src/reddit/components/PostTopMeta/index.tsx"),
				ue = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				he = s.n(ue),
				be = s("./src/reddit/selectors/i18n/index.ts"),
				fe = s("./src/reddit/components/LargePost/index.m.less"),
				ge = s.n(fe);
			const ye = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(w.N)(e, {
						listingKey: s
					}) : void 0
				},
				ve = Object(i.b)(() => Object(a.c)({
					autoplayPref: I.b,
					activeModalId: P.a,
					hideNSFWPref: I.C,
					flairStyleTemplate: ee.U,
					isCurrentUserProfilePost: w.l,
					isLoggedIn: I.K,
					isActive: w.j,
					showPromotedCTA: pe.b,
					moderatorPermissions: j.k,
					modModeEnabled: ee.S,
					posts: ye,
					postHeightVariant: ce,
					shouldShowNsfwListingBelow: be.b,
					showEditFlair: le.a,
					showAwardsPlaque: O.a,
					isTournamentPost: (e, {
						post: t
					}) => Boolean(t.predictionTournament) && Object(C.t)(e)
				}), (e, {
					postId: t
				}) => ({
					handleVote: s => {
						const o = s === x.a.upvoted ? Object(m.db)(t) : Object(m.w)(t);
						e(o)
					},
					onIgnoreReports: () => e(Object(m.Z)(t)),
					onOpenReportsDropdown: t => e(Object(u.h)({
						tooltipId: t
					}))
				})),
				xe = r.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: i,
						currentUser: a,
						eventFactory: m,
						flairStyleTemplate: u,
						forceLoadMedia: x,
						hideNSFWPref: P,
						hostPostData: C,
						imageGalleryCurrentItem: O,
						inSubredditOrProfile: j = !1,
						isCommentsPage: w,
						isCurrentUserProfilePost: I,
						isFrontpage: D,
						isGalleryTileLayoutDefault: H,
						isLoggedIn: q,
						isOverlay: z,
						isTopicPage: $,
						isTournamentPost: ee,
						isCommentCountAnimationEnabled: te,
						isVoteCountAnimationEnabled: ie,
						isCountAnimShadowTestEnabled: ne,
						listingIndex: ae,
						listingKey: de,
						moderatorPermissions: ce,
						modModeEnabled: le,
						onClickPost: pe,
						onIgnoreReports: ue,
						onOpenReportsDropdown: be,
						post: fe,
						postHeightVariant: ye,
						scrollerItemRef: ve,
						shouldShowGalleryTileOption: xe,
						shouldShowNsfwListingBelow: Pe,
						showAwardsPlaque: Ce,
						showEditFlair: Oe,
						showPromotedCTA: je,
						subredditOrProfile: we,
						userIsOp: Ie,
						postId: Se,
						postIds: ke,
						onceInViewport: Ee,
						triggerCelebratoryMoment: Te
					} = e, _e = !!e.redditStyle || !!e["data-redditstyle"], Ne = _e ? void 0 : u, Le = Object(l.a)(ce), Me = le && Le, Fe = Object(d.a)(ce), Re = Object(c.a)(ce), Ae = Object(B.c)(fe), Be = !!fe.media && fe.media.type === y.o.RTJSON, Ve = Ie && Be, Ke = s ? s - U.a : void 0, Ue = !(D && q || $), We = (e => e === re.wd.OnlyTitles)(ye) && !Object(se.a)(fe), Ge = (e => e === re.wd.MediumHeight)(ye) && !Object(se.a)(fe), De = (e => {
						const {
							post: t,
							postIds: s,
							posts: o
						} = e;
						if (!Object(v.q)(t)) return;
						const r = s && 0 === s.indexOf(t.id),
							i = s && 1 === s.indexOf(t.id),
							n = o && o[1] && Object(v.q)(o[1]);
						return {
							hasTopCompactPostStyles: r && n,
							hasBottomCompactPostStyles: i,
							showPinnnedHeader: r
						}
					})(e), He = !!(null == C ? void 0 : C.shouldShowLinkedPosts), qe = (!j || He || Pe) && !fe.isSponsored, ze = Object(S.t)(fe, O), {
						source: Xe
					} = ze, Qe = Object(o.useRef)(null), Je = Object(o.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && (null == Ee || Ee(ae))
						})
					}, [Ee, ae]);
					return Object(g.a)(Qe, Je), r.a.createElement(f.b, null, r.a.createElement(K.a, {
						className: Object(k.a)(ge.a.container, i, he.a.largeAndMediumPostStyles, he.a.largeAndMediumActiveStyles, Object(p.a)(e), {
							[he.a.mUseRedditTheme]: _e,
							promotedvideolink: fe.isSponsored && !(fe.media && y.a.has(fe.media.type)),
							[ge.a.topCompactPost]: De && De.hasTopCompactPostStyles,
							[ge.a.bottomCompactPost]: De && De.hasBottomCompactPostStyles
						}),
						isOverlay: z,
						style: Object(p.b)(e.flairStyleTemplate),
						post: fe,
						onClick: pe,
						eventFactory: m
					}, r.a.createElement("div", {
						ref: Qe
					}), r.a.createElement(Q.a, {
						model: fe,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						isCountAnimShadowTestEnabled: ne,
						isVoteCountAnimation: ie,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: Ne,
						redditStyle: _e,
						postId: Se,
						triggerCelebratoryMoment: Te
					}), r.a.createElement(V.a, {
						className: Object(k.a)(ge.a.backgroundWrapper, {
							[ge.a.isEvent]: Object(oe.a)(fe)
						}),
						"data-click-id": "background",
						flairStyleTemplate: Ne,
						post: fe,
						redditStyle: _e
					}, r.a.createElement(M.a, {
						post: fe
					}), De && De.showPinnnedHeader && r.a.createElement(X, null), ee && Object(n.c)(fe) && r.a.createElement(r.a.Fragment, null, r.a.createElement(b.a, {
						post: fe
					}), r.a.createElement(h.a, {
						post: fe
					})), !ee && r.a.createElement(r.a.Fragment, null, r.a.createElement(Z.a, {
						className: ge.a.postTopLine,
						hideAwards: Ce,
						hideNSFWPref: P,
						hostPostData: C,
						iconClassName: ge.a.postTopLineIcon,
						inSubredditOrProfile: j,
						isCommentsPage: !!w,
						isCompactPinnedPost: !!De,
						isCurrentUserProfilePost: I,
						isOverlay: !!z,
						isTopicPage: !!$,
						listingKey: de,
						post: fe,
						shouldShowSubscribeButton: Ue,
						showSubreddit: qe,
						showSubredditIcon: !0,
						subredditOrProfile: we
					}), r.a.createElement(J.c, {
						className: ge.a.postTitle,
						post: fe,
						redditStyle: _e,
						size: J.b.Large,
						titleColor: Ne && Ne.postTitleColor,
						isOverlay: z
					}), fe.source && !fe.isSponsored && !(fe.media && Object(y.G)(fe.media)) && r.a.createElement(Y.a, {
						className: ge.a.sourceLink,
						post: fe
					})), r.a.createElement("div", {
						className: ge.a.postMediaWrapper
					}, !De && r.a.createElement(W.a, {
						isGalleryTileLayoutDefault: H,
						isListing: !0,
						isMediumHeight: Ge,
						isNotCardView: !!z,
						isTitleOnly: We,
						showCentered: !0,
						flairStyleTemplate: Ne,
						post: fe,
						availableWidth: Ke,
						shouldLoad: x,
						scrollerItemRef: ve,
						autoplayPref: t,
						shouldShowGalleryTileOption: xe,
						showPromotedCTA: je
					})), je && Xe && Xe.url && r.a.createElement(E.a, {
						className: ge.a.adLinkWrapper
					}, r.a.createElement(T.a, {
						post: fe,
						adLinkContent: ze
					})), le && Le && Ae && r.a.createElement(A.a, {
						onIgnoreReports: ue,
						reportable: fe
					}), r.a.createElement(R.d, null), Ce && r.a.createElement(_.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !1,
						thing: fe,
						tooltipType: z ? me.c.Lightbox : void 0
					}), r.a.createElement("div", {
						className: ge.a.flatListContainer
					}, r.a.createElement(L.a, {
						className: ge.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: Ne,
						model: fe,
						onVoteClick: e.handleVote
					}), r.a.createElement(F.c, {
						currentUser: a,
						hasModFlairPerms: Fe,
						hasModFullPerms: Re,
						hasModPostPerms: Le,
						hostPostData: C,
						isCommentCountAnimation: te,
						isCountAnimShadowTestEnabled: ne,
						isLargePost: !0,
						isOverlay: !!z,
						listingKey: de,
						modModeEnabled: le,
						onIgnoreReports: ue,
						onOpenReportsDropdown: be,
						post: fe,
						showEditPost: Ve,
						showEditFlair: Oe,
						useFlatlistBreakpoints: Object(G.b)({
							editPost: !1,
							save: !Me,
							hide: !1,
							report: !1
						})
					}))), D && r.a.createElement(N.a, {
						post: fe,
						postIds: null != ke ? ke : [],
						subredditId: null == we ? void 0 : we.id
					})))
				});
			xe.displayName = "LargePostMemoized";
			t.default = Object(te.b)(ve(Object($.b)(xe)))
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
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				d = s("./src/reddit/components/SubredditIcon/index.tsx"),
				c = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				l = s("./src/reddit/helpers/name/index.ts"),
				p = s("./src/reddit/icons/fonts/index.tsx"),
				m = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				u = s.n(m);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: r,
					post: m,
					subredditOrProfile: h
				} = e;
				return i.a.createElement("div", {
					className: Object(n.a)(u.a.container, t)
				}, i.a.createElement(c.a, {
					className: u.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: h.url
				}, i.a.createElement(d.b, {
					className: u.a.subredditIcon,
					shouldHideNsfwIcon: r,
					subredditOrProfile: h
				}), i.a.createElement("span", null, h.displayText)), ((e, t) => {
					if (t) return i.a.createElement("div", {
						role: "img",
						"aria-label": o.fbt._("Crossposted by{author}from{community}", [o.fbt._param("author", Object(l.d)(e)), o.fbt._param("community", t.displayText)], {
							hk: "2OZoR0"
						})
					}, i.a.createElement(p.a, {
						name: "crosspost",
						className: u.a.CrosspostIcon
					}))
				})(m.author, s), h && h.isQuarantined && i.a.createElement(a.a, null))
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
				r = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/components/Thumbnail/index.tsx"),
				a = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				d = s.n(a);

			function c(e) {
				const {
					source: t
				} = e.post;
				return r.a.createElement("div", {
					className: Object(i.a)(d.a.container, e.className)
				}, r.a.createElement(n.a, {
					className: Object(i.a)(d.a.thumbnail, e.thumbnailClassName),
					containerClassName: Object(i.a)(d.a.thumbnailContainer, e.thumbnailContainerClassName),
					linkIconClassName: Object(i.a)(d.a.thumbnailLinkIcon, e.thumbnailLinkIconClassName),
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
				mediaImageBoxContentImage: "_2t6Z9GgOnrWn2b5Ndv_T5K",
				postContainer: "_3Ud8ZDEFc0kXFg6R9KhDPS"
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
				r = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				a = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				d = s("./src/reddit/icons/fonts/index.tsx"),
				c = s("./src/reddit/components/NotificationButton/index.m.less"),
				l = s.n(c);
			t.a = e => {
				const t = Object(a.a)(),
					{
						isFilled: s,
						onClick: o,
						hasTooltip: c,
						tooltipText: p,
						className: m
					} = e;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
					className: Object(i.a)(l.a.notificationButton, m),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: o
				}, r.a.createElement(d.a, {
					name: "notification",
					isFilled: s,
					className: l.a.icon,
					"aria-label": p
				})), c && r.a.createElement(n.a, {
					popperProps: t.popperProps,
					arrowProps: t.arrowProps,
					visible: t.visible
				}, p))
			}
		},
		"./src/reddit/components/OverviewChronoList/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_31Psg18W6Dm5EvcCqvaQm2",
				component: "_31Psg18W6Dm5EvcCqvaQm2",
				ComponentHasItems: "_1cKfMnE4GcGLgj5Xiz5PPb",
				componentHasItems: "_1cKfMnE4GcGLgj5Xiz5PPb"
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
				overviewConversationsPost: "_3KGXodqw9Ht3MoBpe8_gzB"
			}
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return Z
			})), s.d(t, "a", (function() {
				return $
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/history/esm/history.js"),
				r = s("./node_modules/lodash/debounce.js"),
				i = s.n(r),
				n = s("./node_modules/lodash/last.js"),
				a = s.n(n),
				d = s("./node_modules/lodash/throttle.js"),
				c = s.n(d),
				l = s("./node_modules/react/index.js"),
				p = s.n(l),
				m = s("./node_modules/shallowequal/index.js"),
				u = s.n(m),
				h = s("./src/lib/addQueryParams/index.ts"),
				b = s("./src/lib/ads/index.ts"),
				f = s("./src/lib/classNames/index.ts"),
				g = s("./src/lib/constants/index.ts"),
				y = s("./src/lib/fastdom/index.ts"),
				v = s("./src/lib/lessComponent.tsx"),
				x = s("./src/lib/opener/index.ts"),
				P = s("./src/lib/sentry/index.ts"),
				C = s("./src/reddit/components/PostList/LoadMore.tsx"),
				O = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				j = s("./src/reddit/components/Scroller/Simple.tsx"),
				w = s("./src/reddit/constants/adEvents.ts"),
				I = s("./src/reddit/constants/componentSizes.ts"),
				S = s("./src/reddit/constants/postLayout.ts"),
				k = s("./src/reddit/controls/InternalLink/index.tsx"),
				E = s("./src/reddit/controls/OutboundLink/index.tsx"),
				T = s("./src/reddit/helpers/getClickInfo.ts"),
				_ = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				N = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				L = s("./src/reddit/models/Media/index.ts"),
				M = s("./src/reddit/helpers/brandSafety/index.ts"),
				F = s("./src/reddit/helpers/trackers/ads.ts"),
				R = s("./src/lib/LRUCache/index.ts"),
				A = s("./src/telemetry/index.ts"),
				B = s("./src/telemetry/models/Timer.ts"),
				V = s("./src/reddit/components/PostList/index.m.less"),
				K = s.n(V);
			const {
				fbt: U
			} = s("./node_modules/fbt/lib/FbtPublic.js"), W = 500, G = new R.a(W), D = new R.a(W), H = new R.a(W), q = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5,
				SEARCH: 3
			}, z = v.a.div("SeeMore", K.a), X = v.a.wrapped(N.a, "ArrowRight", K.a), Q = (e, t, s, o, r, i, n, a, d) => {
				const c = `entered-${e}-${t}-${s?`last-${o}-${r}`:""}-${i}`;
				let l = G.get(c);
				return void 0 === l && (l = () => {
					s && n.onBottomViewed(o, r), n.trackOnPostEnteredViewport(e, t, a, d)
				}, G.set(c, l)), l
			}, J = (e, t, s, o, r) => {
				const i = `left-${e}-${t}`;
				let n = D.get(i);
				return void 0 === n && (n = i => {
					s.trackOnPostExitedViewport(e, t, i, o, r)
				}, D.set(i, n)), n
			}, Z = (e, t, s = !1) => {
				const o = `click-${e}`;
				let r = H.get(o);
				return void 0 === r && (r = (e, o, r, i, n) => {
					if (o.isSponsored) {
						t.fireAdPixelsOfType(o, w.a.Click);
						const {
							source: e
						} = Object(b.t)(o, i);
						if (e && e.outboundUrl) {
							let t = e.outboundUrl;
							r && (t = Object(E.a)(o.id, r, t).url), Object(F.a)(o, n), Object(x.e)(t, x.d.BLANK)
						}
					} else t.openPost({
						postOrComment: o,
						clickInfo: Object(T.a)(e),
						isFrontpage: s
					})
				}, H.set(o, r)), r
			}, Y = (e, t) => {
				const s = [...e];
				return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
					s.splice(e, 0, t[e])
				}), s
			};
			class $ extends p.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new R.a(W), this.surveyTriggerCounted = !1, this.timerId = void 0, this.viewportHeight = null, this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						const {
							isNpsScrollSurveyEnabled: t,
							onScroll: s,
							surveyTriggerScrollCounted: o
						} = this.props;
						this.dispatchBrandSafety(e), t && o && !this.surveyTriggerCounted && this.surveyTriggerListener(e), s && s(e)
					}, this.surveyTriggerListener = c()(({
						primaryChild: e
					}) => {
						this.viewportHeight && e && e.rectangle && e.rectangle.top > this.viewportHeight && (this.props.surveyTriggerScrollCounted && this.props.surveyTriggerScrollCounted(), this.surveyTriggerCounted = !0)
					}, 500), this.dispatchBrandSafety = i()(({
						getVisibleItemsInViewport: e
					}) => {
						const {
							postsById: t,
							subredditsById: s
						} = this.props, o = e(), r = [];
						o.forEach(e => r.push(e.id));
						const i = r.map(e => t[e]).filter(Boolean),
							n = i.map(e => s[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(M.a)(i, n))
					}, g.d, {
						leading: !0
					}), this.eventFactoryHandler = (e, t, s) => this.props.postClickEventFactory(e, t, s, this.props)
				}
				UNSAFE_componentWillMount() {
					void 0 !== this.timerId && A.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = A.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.viewportHeight = window.innerHeight, void 0 !== this.timerId) {
						const e = A.c.end(this.timerId);
						setTimeout(() => Object(A.b)(g.m.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					void 0 !== this.timerId && A.c.cancel(this.timerId), e.postIds.length && (this.timerId = A.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					var t, s;
					if (y.a.read(() => this.checkAndSendScreenview()), this.timerId && A.c.has(this.timerId)) {
						const e = A.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(A.b)(g.m.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
					this.props.listingKey !== e.listingKey && (this.surveyTriggerCounted = !1);
					const o = null === (t = this.props.postIds) || void 0 === t ? void 0 : t[0];
					o && o !== (null === (s = e.postIds) || void 0 === s ? void 0 : s[0]) && this.props.onFirstPostChanged(o)
				}
				componentWillUnmount() {
					this.timerId && A.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && a()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return A.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview() || !t) return;
					const o = A.c.end(e);
					setTimeout(() => {
						s(t(o, B.TimerType.InApp))
					}, 0)
				}
				showPlaceholder() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s
					} = this.props;
					return !s && (Boolean(e) || !1 !== t)
				}
				hasPosts() {
					return this.props.postIds.length > 0
				}
				isLoadingMore() {
					const {
						loadMore: e,
						postIds: t
					} = this.props;
					return Boolean(e && e.token) && t.length > 0
				}
				shouldComponentUpdate(e) {
					const {
						postsById: t,
						triggerNewPostPill: s,
						...o
					} = this.props, {
						postsById: r,
						triggerNewPostPill: i,
						...n
					} = e, a = Object.keys(o), d = Object.keys(n);
					if (d.length !== a.length) return !0;
					if (d.some(e => {
							let t = !1;
							return t = "function" == typeof o[e] || "object" == typeof o[e] ? !u()(o[e], n[e]) : o[e] !== n[e]
						})) return !0;
					if (t === r) return !1;
					if (s !== i) return !0;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: s
						} = this.props;
						return this.props.postIds.some((o, i) => {
							const n = 0 === i;
							return s({
								isFirstPost: n,
								layout: e,
								post: t[o]
							}) !== s({
								isFirstPost: n,
								layout: e,
								post: r[o]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, o) {
					const {
						currentProfileName: r,
						hostPostData: i,
						isCommentPermalink: n,
						isCommentsPage: a,
						isFrontpage: d,
						isProfilePostListing: c,
						isTopicPage: l,
						isCommentCountAnimationEnabled: m,
						isVoteCountAnimationEnabled: u,
						isCountAnimShadowTestEnabled: h,
						listingBelowVariant: b,
						listingKey: f,
						listingName: y,
						pageLayer: v,
						pageReferrer: x,
						redditStyle: C,
						shouldHideFlair: O,
						triggerCelebratoryMoment: j,
						triggerNewPostPill: w,
						postIds: I
					} = this.props, k = 0 === t, E = `post-${o}-${e}-${t}-${s?"last-index":""}-${y}-${f}-${x}`;
					let T;
					if (void 0 === (T = this.scrollChildCache.get(E))) {
						const {
							inSubredditOrProfile: N,
							postsById: M
						} = this.props, F = M[e], R = F.crosspostRootId && M[F.crosspostRootId] ? M[F.crosspostRootId] : F;
						F.crosspostRootId && !M[F.crosspostRootId] && P.c.withScope(e => {
							e.setExtra("errorType", g.s.API), e.setExtra("description", `Post ${F.id} is crosspost of ${F.crosspostRootId}, but ` + `${F.crosspostRootId} details are missing in the state`), P.c.captureMessage("Crosspost parent details are missing")
						});
						const A = this.props.postComponentForLayout({
							isCrosspost: !!F.crosspostRootId,
							isFirstPost: k,
							layout: o,
							post: R
						});
						let B = `post-list-item-[layout: ${o}]-[postId: ${e}]`;
						this.props.listingBelowVariant && f && (B += `--${f}`);
						const V = Q(e, o, s, f, y, x, this.props, t, this.props.hostPostData),
							K = J(e, o, this.props, t, v),
							U = Z(e, this.props, d),
							W = R.media && R.media.type === L.o.EMBED ? R.media.provider : null,
							G = m && !F.isSponsored,
							D = u && !F.isSponsored && !F.isScoreHidden,
							H = !F.isSponsored && !F.isArchived;
						T = {
							estHeight: Object(_.c)(F, o),
							id: e,
							isFocusable: !(!R.media || !(o === S.g.Large || o === S.g.Classic && Object(L.G)(R.media))) && (L.d.has(R.media.type) && (!W || !L.s.has(W)) && !R.isSpoiler),
							trackOnEnteredViewport: V,
							trackOnExitedViewport: K,
							render: ({
								className: o,
								height: m,
								width: u,
								remeasure: g,
								setScrollerChildRef: x,
								shouldLoadInitially: P
							}) => p.a.createElement(A, {
								className: o,
								currentProfileName: r,
								key: B,
								availableWidth: u,
								eventFactory: this.eventFactoryHandler,
								first: k,
								forceLoadMedia: P,
								hostPostData: i,
								inSubredditOrProfile: N,
								isCommentPermalink: n,
								isCommentsPage: a,
								isFrontpage: d,
								isProfilePostListing: c,
								isTopicPage: l,
								isCommentCountAnimationEnabled: G,
								isVoteCountAnimationEnabled: D,
								isCountAnimShadowTestEnabled: h,
								listingBelowVariant: b,
								listingIndex: t,
								listingKey: f,
								listingName: y,
								pageLayer: v,
								last: s,
								onClickPost: U,
								onSizeChanged: g,
								postId: e,
								postIds: I,
								redditStyle: C,
								sendEvent: this.props.sendEvent,
								scrollerItemRef: x,
								shouldHideFlair: O,
								triggerCelebratoryMoment: H ? j : void 0,
								onceInViewport: w
							})
						}, this.scrollChildCache.set(E, T)
					}
					return T
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return p.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: s,
						layout: o,
						onTryAgain: r,
						postListPlaceholderComponent: i
					} = this.props;
					if (s) return;
					const n = i;
					return p.a.createElement("div", {
						className: K.a.placeholder
					}, p.a.createElement(n, {
						className: t,
						isLoading: !e,
						layout: o
					}), !!e && p.a.createElement(O.a, {
						apiError: e,
						onTryAgain: r
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: o,
						loadMoreClassName: r,
						onLoadMore: i
					} = this.props;
					if (!s) return p.a.createElement("div", {
						className: K.a.placeholder
					}, p.a.createElement(C.a, {
						className: r,
						isLoading: !!t,
						layout: o,
						countOverride: q[o]
					}), !!e && p.a.createElement(O.a, {
						apiError: e,
						onTryAgain: i
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: r,
						isSerpExperimentOverride: i,
						isTruncated: n,
						layout: a,
						location: d,
						loadMore: c,
						postIds: m,
						postsById: u,
						onLoadMore: b
					} = this.props;
					let y = m.filter(e => Boolean(u[e])).map((e, t, s) => {
						const o = t === s.length - 1;
						return this.scrollChildForPost(e, t, o, a)
					});
					r && (y = Y(y, r));
					const v = this.props.measureScrollFPS ? `post-listings-${a}` : void 0,
						x = d ? Object(o.e)(d) : null,
						P = x || n;
					return p.a.createElement(l.Fragment, null, p.a.createElement(j.b, {
						innerRef: this.updateScrollerRef,
						className: P ? K.a.truncatedPostList : Object(f.a)(K.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: c && c.token ? c.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: b,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: v,
						viewportTopPadding: I.f
					}, y), !i && x && p.a.createElement(z, {
						className: K.a.seeMoreButton
					}, p.a.createElement(k.a, {
						className: K.a.seeMorePostsText,
						to: Object(h.a)(x, {
							type: g.Xb.Posts
						})
					}, U._("See More Posts", null, {
						hk: "3o0CqI"
					}), p.a.createElement(X, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			$.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: p.a.Fragment
			}
		},
		"./src/reddit/components/PostPinnedHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_203iZ8LUuIrz_IJbiOAJDH",
				pinnedIcon: "_2xKvAjjyhpXElWBVqyWyml",
				metaText: "rewiG9XNj_xqkQDcyR88j"
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
				subscribeButton: "_35dG7dsi4xKTT-_2MB74qq"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/NotificationButton/index.tsx"),
				p = s("./src/reddit/components/PostBadges/index.tsx"),
				m = s("./src/reddit/components/PostTopMeta/index.tsx"),
				u = s("./src/reddit/components/SubredditIcon/index.tsx"),
				h = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				b = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				f = s("./src/reddit/constants/posts.ts"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				y = s("./src/reddit/controls/OutboundLink/index.tsx"),
				v = s("./src/reddit/helpers/trackers/post.ts"),
				x = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				P = s("./src/reddit/models/Media/index.ts"),
				C = s("./src/reddit/models/Subreddit/index.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/PostTopLine/index.m.less"),
				w = s.n(j);
			t.a = ({
				className: e,
				flairStyleTemplate: t,
				forceOpenInNewTab: s,
				hideAwards: r,
				hideNSFWPref: j,
				hostPostData: I,
				iconClassName: S,
				inSubredditOrProfile: k,
				isCommentsPage: E,
				isCompactPinnedPost: T,
				isCurrentUserProfilePost: _,
				isOverlay: N,
				isTopicPage: L,
				listingKey: M,
				post: F,
				shouldShowSubscribeButton: R,
				showCornerOutboundLink: A,
				showSubreddit: B,
				showSubredditIcon: V,
				subredditOrProfile: K,
				isFollowed: U,
				shouldShowFollowButton: W,
				onFollowPostClick: G
			}) => {
				const D = r || L,
					H = K && Object(C.h)(K),
					q = Object(n.e)(e => {
						if (!H) return !0;
						const t = Object(O.ub)(e, F.author || "");
						return !t || t.enableFollowers
					});
				return i.a.createElement("div", {
					className: Object(a.a)(w.a.container, e)
				}, B && K && i.a.createElement("div", {
					className: w.a.subredditIconWrapper
				}, i.a.createElement(h.a, {
					"data-click-id": "subreddit",
					to: K.url
				}, V && i.a.createElement(u.b, {
					className: Object(a.a)(w.a.subredditIcon, S),
					shouldHideNsfwIcon: j,
					subredditOrProfile: K
				}))), i.a.createElement("div", {
					className: w.a.everythingElseWrapper
				}, B && i.a.createElement(c.h, {
					type: F.belongsTo.type,
					id: F.belongsTo.id
				}), i.a.createElement(m.d, {
					className: w.a.postTopMeta,
					forceOpenInNewTab: s,
					flairStyleTemplate: t,
					tooltipType: N ? m.c.Lightbox : void 0,
					post: F,
					showSub: B,
					subredditOrProfile: K
				}), i.a.createElement(p.a, {
					className: w.a.postBadges,
					displayText: K ? K.displayText : null,
					inSubredditOrProfile: k,
					isCompactPinnedPost: T,
					post: F,
					tooltipType: N ? m.c.Lightbox : void 0
				}), !D && i.a.createElement(d.a, {
					isPostDetail: E,
					thing: F,
					tooltipType: N ? m.c.Lightbox : void 0
				})), K && q && B && R && !_ && i.a.createElement(b.a, {
					className: w.a.SubscribeButton,
					getEventFactory: e => Object(v.h)(F.id, e ? "unsubscribe" : "subscribe", "post", M, I),
					identifier: {
						name: K.name,
						type: H ? f.a.PROFILE : f.a.SUBREDDIT
					},
					postId: F.id,
					size: g.c.XS
				}), A && i.a.createElement(y.b, {
					isSponsored: F.isSponsored,
					postId: F.id,
					href: Object(P.D)(F),
					source: F.source
				}, i.a.createElement(x.a, {
					className: w.a.outboundLinkIcon
				})), W && q && i.a.createElement(l.a, {
					isFilled: !!U,
					onClick: G,
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
		"./src/reddit/connectors/OverviewChronoList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return y
			}));
			var o = s("./node_modules/lodash/noop.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/actions/postList.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/helpers/isComment.ts"),
				m = s("./src/reddit/helpers/isPost.ts"),
				u = s("./src/reddit/helpers/trackers/post.ts"),
				h = s("./src/reddit/selectors/profileOverviewChronoItems.ts"),
				b = s("./src/reddit/selectors/subreddit.ts"),
				f = s("./src/reddit/selectors/tracking.ts"),
				g = s("./src/reddit/selectors/user.ts");
			const y = (e, t) => (e, t, s) => Object(p.a)(e) ? 120 : 47,
				v = Object(l.u)(),
				x = {
					apiError: h.a,
					apiPending: h.b,
					currentUser: g.k,
					layout: l.Q,
					loadMore: h.d,
					subredditsById: b.X,
					viewportDataLoaded: f.a,
					commentsById: h.g,
					itemIds: h.f,
					itemIdToPostId: h.e,
					postsById: h.h,
					estimateItemHeight: y
				},
				P = Object(n.c)(x),
				C = Object(i.b)(P, (e, t) => ({
					onBottomViewed: (t, s) => e(d.c(t, s)),
					openPost: t => {
						e(a.K(t))
					},
					trackOnPostEnteredViewport: (t, s) => {
						Object(m.a)(t) && e(a.N(t))
					},
					trackOnPostExitedViewport: (t, s, o) => {
						Object(m.a)(t) && e(a.O(t, o))
					},
					fireAdPixelsOfType: r.a
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(u.h)(e, t)
				}));
			t.a = e => Object(c.c)(v(C(e)))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return O
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "b", (function() {
				return S
			}));
			var o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/objectSelector/index.ts"),
				n = s("./src/reddit/actions/ads/index.ts"),
				a = s("./src/reddit/actions/focusedVerticals/index.ts"),
				d = s("./src/reddit/actions/gold/tooltips.ts"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				p = s("./src/reddit/actions/survey/index.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				b = s("./src/reddit/helpers/trackers/post.ts"),
				f = s("./src/reddit/components/PostList/Placeholder.tsx"),
				g = s("./src/reddit/featureFlags/index.ts"),
				y = s("./src/reddit/selectors/experiments/survey.ts"),
				v = s("./src/reddit/selectors/listings.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				P = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/selectors/tracking.ts");

			function O() {
				return Object(u.u)({
					currentProfileName: u.i,
					isCommentPermalink: u.w,
					isCommentsPage: u.x,
					isFrontpage: u.z,
					isProfilePostListing: u.K,
					isTopicPage: u.P,
					pageLayer: e => e
				})
			}
			const j = O(),
				w = {
					apiError: v.c,
					apiPending: v.d,
					measureScrollFPS: g.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(u.Q)(e, t),
					loadMore: v.g,
					postsById: x.S,
					postIds: Object(i.a)((e, {
						listingKey: t,
						listingName: s,
						inSubredditOrProfile: o
					}) => Object(x.E)(e, t, s, o)),
					subredditsById: P.X,
					viewportDataLoaded: C.a,
					pageReferrer: u.T,
					postListPlaceholderComponent: () => f.a,
					isNpsScrollSurveyEnabled: y.d
				},
				I = Object(r.c)(w),
				S = e => ({
					onBottomViewed: (t, s) => e(l.c(t, s)),
					onFirstPostChanged: t => e(Object(d.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(n.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(a.a)({
							lastLoadedEnv: "server"
						})), e(c.K(t))
					},
					fireAdPixelsOfType: (t, s) => {
						e(c.z(t, s))
					},
					trackOnPostEnteredViewport: (t, s, o, r) => {
						e(c.N(t, o, r))
					},
					trackOnPostExitedViewport: (t, s, o, r, i) => {
						e(c.O(t, o, r, i))
					},
					surveyTriggerScrollCounted: () => e(Object(p.i)())
				}),
				k = e => Object(h.b)({
					...e
				}),
				E = (e, t, s, o) => {
					const {
						listingKey: r,
						hostPostData: i,
						listingBelowVariant: n
					} = o;
					return Object(b.h)(e, t, "post", r, i, n, void 0)
				},
				T = Object(o.b)(I, S, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: k,
					postClickEventFactory: E
				}));
			t.a = e => Object(m.c)(j(T(e)))
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/post.ts"),
				n = s("./src/reddit/actions/postFlair.ts"),
				a = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				p = s("./src/reddit/selectors/moderatorPermissions.ts"),
				m = s("./src/reddit/selectors/postFlair.ts"),
				u = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const b = Object(o.b)(() => Object(r.c)({
				activeModalId: l.a,
				autoplayPref: h.b,
				crosspostRoot: u.d,
				crosspostSubredditOrProfile: u.e,
				flairStyleTemplate: c.U,
				hideNSFWPref: h.C,
				isActive: u.j,
				moderatorPermissions: p.k,
				modModeEnabled: c.S,
				showEditFlair: m.a
			}), (e, {
				postId: t
			}) => ({
				dispatchFlairChanged: ({
					post: t,
					previewFlair: s,
					selectedTemplateId: o
				}) => e(Object(n.h)({
					post: t,
					previewFlair: s,
					selectedTemplateId: o
				})),
				handleVote: s => {
					const o = s === d.a.upvoted ? Object(i.db)(t) : Object(i.w)(t);
					e(o)
				},
				onIgnoreReports: () => e(Object(i.Z)(t)),
				onOpenReportsDropdown: t => e(Object(a.h)({
					tooltipId: t
				}))
			}), (e, t, s) => ({
				...s,
				...e,
				...t,
				onFlairChanged: ({
					previewFlair: e,
					selectedTemplateId: o
				}) => t.dispatchFlairChanged({
					post: s.post,
					previewFlair: e,
					selectedTemplateId: o
				})
			}), {
				forwardRef: !0
			});
			t.a = b
		},
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);
			t.a = r.a.createContext(() => () => {})
		},
		"./src/reddit/endpoints/page/profileOverviewPage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return p
			}));
			var o = s("./src/config.ts"),
				r = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				i = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeApiRequest/index.ts"),
				a = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				d = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				c = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const l = (e, t, s) => Object(n.a)(e, {
					data: s,
					endpoint: Object(a.a)(Object(r.a)(Object(d.a)(Object(c.a)(`${o.a.gatewayUrl}/desktopapi/v1/user/${t}/conversations`)))),
					traceRequestName: "get_profile_conversations",
					method: i.ib.GET
				}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
					...e,
					body: {
						...e.body,
						pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
					}
				} : e),
				p = (e, t, s) => Object(n.a)(e, {
					data: s,
					endpoint: Object(a.a)(Object(r.a)(Object(c.a)(`${o.a.gatewayUrl}/desktopapi/v1/user/${t}/overview`))),
					method: i.ib.GET
				}).then(e => "pinned" in e.body ? e : "overviewIds" in e.body ? {
					...e,
					body: {
						...e.body,
						pinned: e.body.overviewIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
					}
				} : e)
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/reddit/models/WhitelistStatus/index.ts");
			const r = (e, t) => {
				const s = e.some(e => e.isNSFW),
					r = t.some(e => e.wls === o.b.NO_ADS);
				return !s && !r
			}
		},
		"./src/reddit/hooks/usePromoContext.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s("./src/reddit/contexts/Promo/index.ts");
			t.a = function() {
				return Object(o.useContext)(r.a)
			}
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", i({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/pages/ProfileOverview/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/lodash/fromPairs.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				n = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/lib/isFakeSubreddit/index.ts"),
				p = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/lib/constants/index.ts"),
				h = s("./src/lib/promo/withShowSignupUpsell.tsx"),
				b = s("./src/reddit/actions/pages/profileOverview/index.ts"),
				f = s("./src/reddit/actions/pages/profileShared.ts"),
				g = s("./src/reddit/actions/profileConversations.ts"),
				y = s("./node_modules/lodash/difference.js"),
				v = s.n(y),
				x = s("./node_modules/lodash/pick.js"),
				P = s.n(x),
				C = s("./src/lib/makeActionCreator/index.ts"),
				O = s("./src/reddit/selectors/profileOverviewChronoItems.ts"),
				j = s("./src/reddit/constants/parameters.ts"),
				w = s("./src/reddit/endpoints/page/profileOverviewPage.ts"),
				I = s("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const S = Object(C.a)(I.c),
				k = Object(C.a)(I.b),
				E = Object(C.a)(I.a);
			var T = s("./src/reddit/components/ContentGate/index.tsx"),
				_ = s("./src/reddit/components/EmptyProfile/index.ts"),
				N = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				L = s("./src/reddit/components/JumpToContent/index.tsx"),
				M = s("./src/lib/classNames/index.ts"),
				F = s("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				R = s("./src/reddit/components/ProfileItemList/index.tsx"),
				A = s("./src/reddit/connectors/OverviewChronoList/index.ts"),
				B = s("./src/reddit/components/OverviewChronoList/index.m.less"),
				V = s.n(B),
				K = s("./src/lib/lessComponent.tsx");

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const W = Object(A.a)(K.a.wrapped(e => {
				const {
					className: t,
					itemIds: s
				} = e, o = s.length > 0;
				return n.a.createElement(R.a, U({
					className: Object(M.a)(t, {
						[V.a.ComponentHasItems]: o
					})
				}, e))
			}, "Component", V.a));
			var G = e => n.a.createElement(W, U({}, e, {
					itemComponent: F.a
				})),
				D = s("./src/reddit/components/PostList/index.tsx"),
				H = s("./src/reddit/components/TrackingHelper/index.tsx"),
				q = s("./src/lib/isPinnedAdminPost/index.ts"),
				z = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				X = s("./node_modules/lodash/last.js"),
				Q = s.n(X);
			var J = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				Z = s("./src/reddit/selectors/posts.ts"),
				Y = s("./src/reddit/components/ClassicPost/index.tsx"),
				$ = s("./src/reddit/components/LargePost/index.tsx"),
				ee = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				te = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				se = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				oe = s("./src/reddit/selectors/profile.ts"),
				re = s("./src/reddit/components/OverviewConversationsPost/ExtraCommentsItem/index.m.less"),
				ie = s.n(re);
			const {
				fbt: ne
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ae = K.a.div("ExtraCommentsItemWrapper", ie.a), de = K.a.p("ExtraComments", ie.a), ce = K.a.wrapped(de, "ExtraCommentsInteractive", ie.a);
			var le = Object(a.b)(() => Object(d.c)({
					extraCommentsItem: oe.c,
					extraCommentsPending: (e, t) => {
						const {
							extraCommentsId: s
						} = t, {
							extraComments: o
						} = e.pages.profileOverview.conversations;
						return !!o.api.pending[s]
					}
				}), (e, {
					profileName: t
				}) => ({
					extraCommentsClicked: s => e(Object(g.g)(t, s.postId, s.id))
				}))(({
					extraCommentsClicked: e,
					extraCommentsItem: t,
					extraCommentsPending: s
				}) => n.a.createElement(ae, null, s ? n.a.createElement(de, null, ne._("Loading...", null, {
					hk: "47z90C"
				})) : n.a.createElement(se.a.Consumer, null, s => n.a.createElement(ce, {
					onClick: s => {
						e(t), s.stopPropagation(), s.nativeEvent.stopImmediatePropagation()
					}
				}, ne._("Load more comments", null, {
					hk: "1jXJxb"
				}))))),
				pe = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				me = s("./src/reddit/contexts/Post/index.tsx"),
				ue = s("./src/reddit/hooks/useTheme.ts"),
				he = s("./src/reddit/constants/postLayout.ts"),
				be = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				fe = s.n(be),
				ge = s("./src/reddit/components/OverviewConversationsPost/index.m.less"),
				ye = s.n(ge);

			function ve() {
				return (ve = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const xe = K.a.div("BackgroundWrapper", ye.a),
				Pe = K.a.wrapped(Y.default, "ClassicPost", ye.a),
				Ce = K.a.wrapped(ee.a, "OverviewCommentPost", ye.a),
				Oe = Object(a.b)(() => Object(d.c)({
					commentThreadLinkSets: (e, {
						postId: t,
						currentProfileName: s
					}) => {
						const o = s ? s.toLowerCase() : "",
							r = Object(z.a)(t, o);
						return e.pages.profileOverview.conversations.keyToCommentThreadLinkSets[r]
					},
					headComment: (e, {
						postId: t,
						currentProfileName: s
					}) => {
						const o = s ? s.toLowerCase() : "",
							r = Object(z.a)(t, o);
						return e.pages.profileOverview.conversations.keyToHeadCommentId[r]
					},
					isInitiallyPinned: (e, {
						postId: t,
						currentProfileName: s
					}) => !!s && Object(Z.p)(e, t, s),
					isPinned: (e, {
						postId: t,
						currentProfileName: s
					}) => !!s && Object(Z.r)(e, t, s),
					profileName: (e, {
						currentProfileName: t
					}) => {
						if (t) return ((e, t) => {
							const {
								users: s
							} = e, o = t.toLowerCase(), r = s.models[o];
							return r ? r.username : void 0
						})(e, t)
					},
					layout: m.Q
				})),
				je = K.a.wrapped($.default, "OverviewLargePost", ye.a),
				we = Oe(e => {
					const {
						availableWidth: t,
						className: s,
						commentThreadLinkSets: o,
						eventFactory: r,
						forceLoadMedia: i,
						headComment: a,
						isInitiallyPinned: d,
						isPinned: c,
						isScrolling: l,
						last: p,
						layout: m,
						onClickPost: u,
						onSizeChanged: h,
						pageLayer: b,
						post: f,
						postId: g,
						profileName: y,
						scrollerItemRef: v
					} = e, x = {
						last: p,
						onClickPost: u,
						postId: g
					};
					if (!y) return null;
					const P = y === f.author,
						C = Object(q.a)(c, f.distinguishType);
					if (!P && !a && !C) return null;
					const O = a ? function(e) {
							const t = [],
								s = e.length;
							for (let o = 0; o < s; o++) {
								(0 === o || e[o - 1].depth !== e[o].depth - 1) && t.push([]), Q()(t).push(e[o])
							}
							return t
						}(function(e, t) {
							const s = [];
							let o = t,
								r = "comment";
							for (; o;) {
								const t = e[o];
								s.push({
									id: o,
									depth: t.depth,
									type: r
								}), t.next ? (o = t.next.id, r = t.next.type) : o = void 0
							}
							return s
						}(o, a)) : [],
						j = O.length - 1;
					return n.a.createElement("div", {
						className: Object(M.a)(fe.a.largeAndMediumActiveStyles, fe.a.largeAndMediumPostStyles, ye.a.OverviewConversationsPost, s),
						style: {
							...Object(J.b)(),
							...Object(J.d)(e)
						}
					}, n.a.createElement(te.a, {
						isFirst: !0,
						isLast: j < 0,
						key: f.id
					}, !P && !!a && n.a.createElement(Ce, ve({}, x, {
						commentId: a,
						key: f.id,
						profileName: y
					})), (P || C) && (m === he.g.Classic ? n.a.createElement(Pe, {
						availableWidth: t,
						eventFactory: r,
						inSubredditOrProfile: !1,
						isOverlay: !1,
						isScrolling: l,
						forceLoadMedia: i,
						last: p,
						onClickPost: u,
						onSizeChanged: h,
						pageLayer: b,
						postId: g,
						scrollerItemRef: v
					}) : n.a.createElement(je, {
						availableWidth: t,
						eventFactory: r,
						isScrolling: l,
						isFrontpage: !1,
						forceLoadMedia: i,
						last: p,
						onClickPost: u,
						onSizeChanged: h,
						pageLayer: b,
						postId: g,
						scrollerItemRef: v
					}))), n.a.createElement(xe, {
						style: {
							background: Object(J.e)(e)
						}
					}, !d && O.map((e, t) => n.a.createElement(te.a, {
						isLast: t === j,
						key: `${t}-isLast[${t===j}]`
					}, e.map((t, s) => {
						const o = 0 === s,
							r = s === e.length - 1;
						return "comment" === t.type ? n.a.createElement(pe.a, {
							commentId: t.id,
							depth: t.depth,
							isFirst: o,
							isLast: r,
							key: t.id,
							profileName: y,
							showModTools: !0
						}) : n.a.createElement(le, {
							extraCommentsId: t.id,
							key: t.id,
							profileName: y
						})
					})))))
				});
			var Ie = Object(me.b)((function(e) {
					var t;
					const s = Object(ue.a)(),
						o = Object(m.db)();
					return n.a.createElement(we, ve({
						theme: null !== (t = e.theme) && void 0 !== t ? t : s,
						currentProfileName: Object(m.i)(o),
						pageLayer: o
					}, e))
				})),
				Se = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				ke = s("./src/reddit/helpers/trackers/post.ts"),
				Ee = s("./src/reddit/selectors/tracking.ts"),
				Te = s("./src/reddit/connectors/PostList/index.ts");
			const _e = Object(d.c)({
					...Te.d,
					postIds: Z.O,
					viewportDataLoaded: Ee.a
				}),
				Ne = Object(Te.c)(),
				Le = Object(a.b)(_e, Te.b, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(ke.h)(e, t),
					postComponentForLayout: ({
						post: e
					}) => e.isBlank ? Se.a : Ie
				}));
			var Me = (e => Object(H.c)(Ne(Le(e))))(D.a),
				Fe = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				Re = s("./node_modules/lodash/debounce.js"),
				Ae = s.n(Re),
				Be = s("./src/reddit/actions/post.ts"),
				Ve = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Ke = s("./src/lib/isUrl/index.ts"),
				Ue = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				We = s("./src/reddit/components/Media/index.tsx"),
				Ge = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				De = s("./src/reddit/components/PostContainer/index.tsx"),
				He = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				qe = s("./src/reddit/components/PostTitle/index.tsx"),
				ze = s("./src/reddit/connectors/miniCardPost.ts"),
				Xe = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				Qe = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Je = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				Ze = s("./src/reddit/models/Media/index.ts"),
				Ye = s("./node_modules/fbt/lib/FbtPublic.js"),
				$e = s("./src/reddit/components/CommentsLink/index.tsx"),
				et = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				tt = s("./src/reddit/components/Flatlist/index.tsx"),
				st = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				ot = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				rt = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				it = s("./src/reddit/components/ShareMenu/index.tsx"),
				nt = s("./src/reddit/icons/fonts/Share/index.tsx"),
				at = s("./src/reddit/models/User/index.ts"),
				dt = s("./src/reddit/components/MiniCardPost/Flatlist/index.m.less"),
				ct = s.n(dt);
			const lt = "-MiniCardModMenu",
				pt = "-MiniCardOverflowMenu",
				mt = "-MiniCardShareMenu",
				ut = K.a.wrapped(et.a, "HorizontalVotes", ct.a),
				ht = K.a.button("ShareButton", ct.a),
				bt = Object(m.u)({
					currentProfileName: m.i,
					isCommentPermalink: m.w,
					isCommentsPage: m.x,
					isProfilePostListing: m.K,
					pageLayer: e => e
				}),
				ft = Object(d.c)({
					layout: m.Q,
					subreddit: m.r
				});
			var gt = bt(Object(a.b)(ft, {})(Object(H.c)(e => {
					const {
						currentProfileName: t,
						className: s,
						currentUser: o,
						handleVote: r,
						hasModFlairPerms: i,
						hasModFullPerms: a,
						hasModPostPerms: d,
						isCommentsPage: c,
						isCommentPermalink: l,
						isOverlay: p,
						isProfilePostListing: m,
						isSticky: u,
						layout: h,
						modModeEnabled: b,
						onCommentsClick: f,
						post: g,
						sendEvent: y,
						showEditFlair: v,
						showEditPost: x,
						subreddit: P
					} = e, C = e => y(Object(ke.h)(g.id, e)), O = g.postId, j = Object(tt.d)(lt, g.id, p, u), w = !!o && Object(at.e)(o) === g.author;
					return n.a.createElement("div", {
						className: Object(M.a)(ct.a.flatlistContainer, s)
					}, n.a.createElement(ut, {
						compact: !1,
						model: g,
						onVoteClick: r,
						scoreClassName: ct.a.score
					}), n.a.createElement($e.a, {
						hasModPostPerms: d,
						isCommentsPage: c,
						isCommentPermalink: l,
						isOverlay: p,
						postId: g.id,
						modModeEnabled: b,
						numComments: g.numComments,
						type: he.g.Compact,
						onClick: f
					}), n.a.createElement(it.a, {
						className: ct.a.shareMenu,
						dropdownId: Object(tt.d)(mt, g.id, p, u),
						permalink: g.permalink,
						post: g,
						sendEventWithName: C,
						subredditType: null == P ? void 0 : P.type
					}, n.a.createElement(ht, null, n.a.createElement(nt.a, {
						className: ct.a.shareIcon
					}), n.a.createElement("span", {
						className: ct.a.shareText
					}, Ye.fbt._("share", null, {
						hk: "mmJV5"
					})))), d && n.a.createElement(st.a, {
						dropdownId: j,
						onClick: () => C("post_mod_action_menu")
					}, n.a.createElement(tt.b, {
						className: ct.a.modActionsIcon
					}), n.a.createElement(ot.a, {
						canEditFlair: i && !!v,
						hasModPostPerms: d,
						hasModFullPerms: a,
						isOverlay: !!p,
						isPostAuthor: w,
						modModeEnabled: b,
						post: g,
						tooltipId: j
					})), n.a.createElement(rt.a, {
						currentProfileName: t,
						isCommentsPage: c,
						isOverlay: !!p,
						isProfilePostListing: m,
						layout: h,
						pageLayer: e.pageLayer,
						permalink: g.permalink,
						postId: O,
						dropdownId: Object(tt.d)(pt, g.id, p, u),
						isFixed: u,
						sendEvent: y,
						showEditPost: !!x,
						showEditFlair: !!v,
						useFlatlistBreakpoints: Object(rt.b)({
							editPost: !1,
							save: !1,
							hide: !1,
							report: !1
						})
					}))
				}))),
				yt = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				vt = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				xt = s("./src/reddit/components/MiniCardPost/index.m.less"),
				Pt = s.n(xt);
			var Ct = Object(m.u)()(Object(me.b)(Object(ze.a)(Object(Ve.a)(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: o,
						crosspostRoot: r,
						crosspostSubredditOrProfile: i,
						currentUser: a,
						eventFactory: d,
						flairStyleTemplate: c,
						forceLoadMedia: l,
						hideNSFWPref: p,
						moderatorPermissions: m,
						modModeEnabled: u,
						onClickPost: h,
						post: b,
						scrollerItemRef: f,
						shouldPause: g,
						showMetaLine: y = !0,
						showEditFlair: v,
						subredditOrProfile: x,
						userIsOp: P
					} = e, {
						media: C
					} = r || b, O = C && C.type, j = Object(He.b)(b.id), w = O === Ze.o.RTJSON, I = P && w, S = Object(Je.a)(m), k = Object(Xe.a)(m), E = Object(Qe.a)(m), T = C && O !== Ze.o.RTJSON && O !== Ze.o.TEXT, _ = !C && !!b.source && Object(Ke.a)(b.source.url), N = C && n.a.createElement(We.a, {
						autoplayPref: t,
						availableWidth: s,
						className: Pt.a.media,
						imageBoxClassName: Pt.a.mediaImageBox,
						imageBoxContentImageClassName: Pt.a.mediaImageBoxContentImage,
						forceAspectRatio: Ze.c,
						isListing: !0,
						isMiniCard: !0,
						isNotCardView: !0,
						post: r || b,
						scrollerItemRef: f,
						shouldPause: g,
						shouldLoad: l,
						showCentered: !0,
						showFull: !1
					});
					return n.a.createElement(De.a, {
						className: Object(M.a)(Pt.a.postContainer, fe.a.largeAndMediumActiveStyles, fe.a.largeAndMediumPostStyles, Object(J.a)(e), o),
						style: {
							...Object(J.b)(e.flairStyleTemplate),
							...Object(J.d)(e)
						},
						post: b,
						onClick: h,
						eventFactory: d
					}, n.a.createElement(Ge.a, {
						className: Pt.a.backgroundWrapper,
						flairStyleTemplate: c
					}, T && N, n.a.createElement("div", {
						className: Pt.a.innerContainer
					}, _ && n.a.createElement(vt.a, {
						post: b,
						templatePlaceholderImage: c ? c.postPlaceholderImage : void 0
					}), n.a.createElement(qe.c, {
						className: Pt.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: b,
						size: qe.b.Large,
						titleColor: c && c.postTitleColor
					}), y && x && n.a.createElement(yt.a, {
						className: Pt.a.metaLine,
						crosspostSubredditOrProfile: i,
						hideNSFWPref: p,
						post: b,
						subredditOrProfile: x
					}), !T && n.a.createElement("div", {
						className: Pt.a.mediaWrapper
					}, N), n.a.createElement("div", {
						className: Pt.a.flexSpacer
					}), n.a.createElement(gt, {
						currentUser: a,
						handleVote: e.handleVote,
						hasModFlairPerms: k,
						hasModFullPerms: E,
						hasModPostPerms: S,
						modModeEnabled: u,
						post: b,
						showEditFlair: v,
						showEditPost: I
					}))), e.activeModalId === j && n.a.createElement(He.a, {
						flairs: b.flair,
						subredditId: b.belongsTo.id,
						modalId: j,
						onFlairChanged: e.onFlairChanged
					}), n.a.createElement(Ue.d, null))
				})))),
				Ot = s("./src/reddit/helpers/getClickInfo.ts"),
				jt = s("./src/reddit/helpers/localStorage/index.ts"),
				wt = s("./src/reddit/selectors/user.ts"),
				It = s("./src/reddit/icons/fonts/index.tsx"),
				St = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/index.m.less"),
				kt = s.n(St);
			const {
				fbt: Et
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var Tt = e => n.a.createElement("div", {
					className: Object(M.a)(kt.a.container, e.className)
				}, n.a.createElement(It.a, {
					name: "pin",
					className: kt.a.pin
				}), n.a.createElement("div", {
					className: kt.a.title
				}, Et._("Show off that karma!", null, {
					hk: "2yqUT7"
				})), e.children),
				_t = s("./src/reddit/controls/TextButton/index.tsx"),
				Nt = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/Education.m.less"),
				Lt = s.n(Nt);
			const {
				fbt: Mt
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var Ft = e => n.a.createElement(Tt, {
					className: Object(M.a)(Lt.a.container, e.className)
				}, n.a.createElement("div", {
					className: Lt.a.description
				}, Mt._('Pin a post from your feed using the "..." at the bottom of each post', null, {
					hk: "4lkJRB"
				})), n.a.createElement(_t.a, {
					className: Lt.a.gotIt,
					onClick: e.onGotItClick
				}, Mt._("OK, I got it", null, {
					hk: "1JMx7x"
				}))),
				Rt = s("./src/reddit/components/ProfilePinnedPosts/index.m.less"),
				At = s.n(Rt);
			const {
				fbt: Bt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Vt = 320, Kt = 300, Ut = Object(d.c)({
				arePinnedPostsLoaded: Z.a,
				currentUser: wt.k,
				pinnedPostIds: Z.P
			}), Wt = Object(a.b)(Ut, e => ({
				openPost: t => e(Object(Be.K)(t))
			}));
			class Gt extends n.a.Component {
				constructor() {
					super(...arguments), this.containerRef = null, this.state = {
						showEducation: !1,
						pauseMedia: !1
					}, this.setContainerRef = e => this.containerRef = e, this.handleScroll = Ae()(() => {
						if (!this.containerRef) return;
						const e = this.containerRef.getBoundingClientRect();
						e.bottom < Kt ? this.pauseMedia() : e.top > 0 && this.playMedia()
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
						Object(jt.Kb)(), this.setState({
							showEducation: !1
						})
					}, this.onClickPost = (e, t) => {
						this.props.openPost({
							postOrComment: t,
							clickInfo: Object(Ot.a)(e)
						})
					}, this.renderPost = e => n.a.createElement(Ct, {
						postId: e,
						key: e,
						availableWidth: Vt,
						className: Object(M.a)(At.a.item, At.a.miniCardPost),
						forceLoadMedia: !this.state.pauseMedia,
						onClickPost: this.onClickPost,
						shouldPause: this.state.pauseMedia
					})
				}
				componentDidMount() {
					this.setState({
						showEducation: !Object(jt.J)()
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
					const o = !!this.props.currentUser && this.props.profileName === Object(at.e)(this.props.currentUser),
						r = t.length > 0,
						i = !r && this.state.showEducation && o;
					if (!r && !i) return null;
					const a = o && this.props.pinnedPostIds.length % 2 != 0;
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: At.a.title
					}, Bt._("Pinned posts", null, {
						hk: "3prRc3"
					})), i ? n.a.createElement(Ft, {
						className: Object(M.a)(At.a.item, At.a.education),
						onGotItClick: this.onGotItClick
					}) : n.a.createElement("div", {
						ref: this.setContainerRef,
						className: At.a.container
					}, t.map(this.renderPost), a && n.a.createElement(Tt, {
						className: At.a.item
					})), s)
				}
			}
			var Dt = Object(m.u)()(Wt(Gt)),
				Ht = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				qt = s("./src/reddit/helpers/trackers/screenview.ts"),
				zt = s("./src/reddit/layout/page/Listing/index.tsx"),
				Xt = s("./src/reddit/models/ContentGate.ts"),
				Qt = s("./src/reddit/pages/ErrorPages/index.tsx");

			function Jt() {
				return (Jt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Zt = (e, {
					location: t
				}) => r()([...Object(c.a)(t.search)]),
				Yt = Object(m.u)(),
				$t = Object(d.a)(m.D, wt.eb, Zt, m.Q, (e, {
					match: t
				}) => t.params.profileName, (e, {
					match: t
				}) => t.params.sort, (e, {
					match: t
				}) => Object(oe.j)(e, {
					profileName: t.params.profileName
				}), (e, t) => Object(f.a)(e, Zt(0, t)), (e, {
					match: t
				}) => !Object(Z.n)(e, {
					profileName: t.params.profileName
				}), wt.K, (e, {
					match: t
				}) => Object(wt.f)(e, u.fc + t.params.profileName), (e, t, s, o, r, i, n, {
					sort: a,
					t: d
				}, c, l, m) => {
					const h = o === he.g.Compact ? u.sb : u.tb,
						b = Object(p.a)(r, h, a, s),
						{
							sort: f
						} = s;
					return {
						contentGateInfo: m,
						over18Prefs: t,
						isLoggedIn: l,
						isOwnProfile: e,
						isProfileNSFW: !!n && n.isNSFW,
						layout: o,
						listingKey: b,
						profileName: r,
						shouldShowPinnedPostsSection: c && !f,
						sort: a,
						timeSort: d
					}
				}),
				es = Object(a.b)($t, (e, t) => ({
					onLoadMoreChronoItems: () => e((() => async (e, t, {
						apiContext: s
					}) => {
						const o = t(),
							{
								currentPage: r
							} = o.platform;
						if (!r || !r.routeMatch) return;
						const {
							queryParams: i,
							params: n
						} = r.routeMatch.match, {
							sort: a,
							t: d
						} = Object(f.a)(o, i), {
							profileName: c
						} = n, l = Object(p.a)(c, u.sb, a, i), m = Object(O.d)(o, {
							listingKey: l
						});
						if (!m) return;
						const h = Object(O.b)(o, {
								listingKey: l
							}),
							b = Object(O.c)(o, {
								listingKey: l
							}),
							g = b && b[m.token];
						if (h || g) return;
						e(S({
							key: l,
							fetchedToken: m.token
						}));
						const y = await Object(w.a)(s(), c, {
							after: m.token,
							dist: m.dist,
							sort: a,
							t: d,
							...P()(i, j.l)
						});
						if (y.ok) {
							const t = Object(O.f)(o, {
									listingKey: l
								}),
								s = {
									...y.body,
									overviewIds: v()(y.body.overviewIds, t)
								};
							e(k({
								fetchedToken: m.token,
								key: l,
								meta: o.meta,
								...s
							}))
						} else e(E({
							error: y.error,
							fetchedToken: m.token,
							key: l,
							account: y.body.data ? y.body.data.account : null
						}))
					})((t.match.params.profileName, t.match.params.sort))),
					onLoadMoreConversationsItems: () => e(g.h({
						profileName: t.match.params.profileName,
						sort: t.match.params.sort
					})),
					onLayoutChange: () => e(Object(b.profileOverviewRequested)({
						...t.match,
						queryParams: r()([...Object(c.a)(t.location.search)])
					}))
				}));
			class ts extends n.a.Component {
				constructor() {
					super(...arguments), this.renderNoPosts = () => n.a.createElement(_.c, {
						profileName: this.props.profileName,
						timeSort: this.props.timeSort
					})
				}
				UNSAFE_componentWillUpdate(e) {
					this.props.layout !== e.layout && e.onLayoutChange()
				}
				render() {
					const {
						contentGateInfo: e,
						layout: t,
						over18Prefs: s,
						isOwnProfile: o,
						isProfileNSFW: r,
						listingKey: i,
						onLayoutChange: a,
						pageLayer: d,
						profileName: c,
						sort: p,
						shouldShowPinnedPostsSection: m,
						showSignupUpsell: h,
						timeSort: b
					} = this.props;
					if (!d) return null;
					if (e && e.profileDeleted) return n.a.createElement(T.default, {
						contentGateType: Xt.a.ProfileDeleted,
						profileName: c
					});
					if (e && e.profileSuspended) return n.a.createElement(T.default, {
						contentGateType: Xt.a.ProfileSuspended,
						profileName: c
					});
					if (451 === d.status || e && e.profileBlockedForLegalReason) return n.a.createElement(T.default, {
						contentGateType: Xt.a.ProfileBlockedForLegalReason,
						profileName: c
					});
					if (403 === d.status) return n.a.createElement(Qt.a, null);
					if (404 === d.status) return n.a.createElement(T.default, {
						contentGateType: Xt.a.ProfileDoesNotExist,
						profileName: c
					});
					if (!c) return null;
					const f = c.toLowerCase(),
						g = `/user/${c}/`,
						y = {
							listingKey: i,
							listingName: f
						};
					if (!s && r && !o) return n.a.createElement(T.default, {
						subredditName: c,
						contentGateType: Xt.a.Nsfw
					});
					const v = {
							inSubredditOrProfile: !Object(l.a)(c),
							listingKey: i,
							listingName: f,
							listingViewed: (e, t) => Object(qt.q)(i, p, t, e, b),
							noPostsComponent: this.renderNoPosts,
							onScroll: h,
							onTryAgain: a
						},
						x = {
							sort: p,
							baseUrl: g,
							sortOptions: u.yb,
							timeSort: b
						};
					let P;
					return P = t === he.g.Compact ? n.a.createElement(G, Jt({}, v, {
						onLoadMore: this.props.onLoadMoreChronoItems,
						onTryAgain: a
					})) : n.a.createElement(n.a.Fragment, null, m && n.a.createElement(Dt, {
						profileName: c
					}), n.a.createElement(N.a, x), n.a.createElement(Me, Jt({}, v, {
						excludePinnedPosts: m,
						onLoadMore: this.props.onLoadMoreConversationsItems
					}))), n.a.createElement(zt.a, {
						className: this.props.className,
						fitPageToContent: !0,
						contentNavBar: n.a.createElement(n.a.Fragment, null, n.a.createElement(Fe.a, {
							profileName: c
						})),
						content: n.a.createElement(n.a.Fragment, null, n.a.createElement(L.a, null), P),
						sidebar: n.a.createElement(Ht.a, Jt({}, y, {
							profileName: c
						}))
					})
				}
			}
			t.default = Yt(es(Object(h.a)(ts)))
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const i = e => {
				const t = Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: o.Pb
				});
				return !(!t || Object(o.ye)(t))
			}
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return d
			})), s.d(t, "h", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "k", (function() {
				return m
			})), s.d(t, "j", (function() {
				return u
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "e", (function() {
				return g
			})), s.d(t, "f", (function() {
				return y
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "g", (function() {
				return x
			})), s.d(t, "d", (function() {
				return P
			}));
			var o = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/reddit/featureFlags/index.ts"),
				i = s("./src/reddit/selectors/posts.ts"),
				n = s("./src/reddit/selectors/subreddit.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const d = (e, t) => {
					const s = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (s) {
						const t = Object(n.Q)(e, {
							subredditId: s
						});
						return t && t.displayText || ""
					}
					return ""
				},
				c = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				l = e => e.focusedVerticals.components.dismissed,
				p = [],
				m = Object(o.a)((e, t) => {
					const s = u(e, t);
					if (!s) return p;
					const o = Object(n.U)(e, {
						subredditName: s.name
					});
					return o && o.postIds && o.postIds.length ? o.postIds : p
				}),
				u = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(n.Q)(e, {
						subredditId: s
					}) : null
				},
				h = (e, t, s, o, r) => {
					const n = r.find(e => e <= t) || -1,
						a = r.find(e => e > t) || 1 / 0;
					return t !== a && t !== n && (!(n + s > t) && (!(t + s > a) && !((e, t, s) => {
						const o = s[t - 1],
							r = s[t],
							n = r && Object(i.H)(e, {
								postId: o
							}) || null,
							a = r && Object(i.H)(e, {
								postId: r
							}) || null;
						return n && n.isSponsored || a && a.isSponsored
					})(e, t, o)))
				},
				b = [3],
				f = Object(o.a)((e, {
					existingDUPositions: t,
					listingProps: s
				}) => {
					const o = t.slice().sort();
					let r = -1;
					const n = Object(i.A)(e, {
							listingKey: s.listingKey
						}),
						a = [];
					return b.forEach(t => {
						let s = r + t;
						if (!(s >= n.length)) {
							for (; s < n.length && !h(e, s, t, n, o);) s += 1;
							s < n.length && (a.push(s), r = s)
						}
					}), a
				}),
				g = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				y = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				v = e => e.focusedVerticals.category,
				x = e => e.focusedVerticals.lastLoadedEnv,
				P = e => {
					const t = Object(a.J)(e),
						s = r.d.geoSubredditRecommendationDULoggedIn(e),
						o = r.d.geoSubredditRecommendationDULoggedOut(e);
					return t && s || !t && o
				}
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				i = s("./src/reddit/selectors/chatPost.ts"),
				n = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const a = e => {
					const t = Object(n.a)(e);
					return Boolean(t) && !Object(r.ye)(t)
				},
				d = Object(o.a)(a, i.d, (e, t) => e && !t)
		},
		"./src/reddit/selectors/profileOverviewChronoItems.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "h", (function() {
				return h
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "c", (function() {
				return v
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/reddit/models/Flair/index.ts"),
				i = s("./src/reddit/models/PostCreationForm/index.ts"),
				n = s("./src/reddit/models/Vote/index.ts");
			const a = {
				t3_1: {
					approvedAtUTC: null,
					approvedBy: null,
					author: "that_one_guy",
					authorId: "t2_1234",
					authorIsBlocked: !1,
					awardCountsById: {},
					id: "t3_1",
					bannedAtUTC: null,
					bannedBy: null,
					belongsTo: {
						id: "t5_1",
						type: "subreddit"
					},
					contestMode: !1,
					created: 1492205391e4,
					crosspostParentId: null,
					crosspostRootId: null,
					discussionType: null,
					distinguishType: null,
					domain: "i.redd.it",
					events: [],
					flair: [],
					ignoreReports: !1,
					impressionId: null,
					impressionIdStr: null,
					isArchived: !1,
					isApproved: !1,
					isAuthorPremium: !1,
					isBlank: !1,
					isCreatedFromAdsUi: !1,
					isCrosspostable: !0,
					isEligibleForLinkedPosts: !1,
					isEligibleForQASchema: !1,
					isFollowed: !1,
					isGildable: !0,
					isLocked: !1,
					isMediaOnly: !1,
					isMeta: !1,
					isNSFW: !1,
					isOriginalContent: !1,
					isPinned: !1,
					isRemoved: !1,
					isSpam: !1,
					isSpoiler: !1,
					isSponsored: !1,
					isStickied: !1,
					liveCommentsWebsocket: "wss://reddit.com/live/1",
					media: {
						type: "image",
						content: "https://i.redd.it/iap6jbwjlosy.jpg",
						width: 100,
						height: 100,
						obfuscated: null,
						resolutions: []
					},
					modReports: [],
					numComments: 5,
					numCrossposts: 0,
					numReports: null,
					permalink: "https://www.reddit.com/r/listentothis/comments/6k2dyk/kerrin_connolly_nevermind_indieacousticpop_2017/",
					postCategories: [{
						categoryId: "c1009",
						categoryName: "News"
					}],
					preview: {
						url: "https://i.redditmedia.com/msdj41xc-LgU8OfIuLDP52FtgyyahbFAizi9mp-aBoI.jpg?s=931d28c1922e12dbf6a06a357cdf3ceb",
						width: 480,
						height: 360
					},
					previewComments: [{
						id: "t1_1",
						type: "top"
					}],
					postId: "t3_1",
					removedBy: null,
					removedByCategory: null,
					score: 23,
					isScoreHidden: !1,
					sendReplies: !1,
					source: null,
					suggestedSort: null,
					thumbnail: {
						url: "https://b.thumbs.redditmedia.com/KNGvoTjCbwN1iYV5lkb4TfZGXX22k--3WfeijolEreo.jpg",
						width: null,
						height: null
					},
					title: "A plain post",
					upvoteRatio: .1,
					userReports: [],
					viewCount: 1,
					voteState: 0
				},
				t3_2: {
					approvedAtUTC: null,
					approvedBy: null,
					author: "that_other_chick",
					authorId: "t2_1235",
					authorIsBlocked: !1,
					awardCountsById: {},
					id: "t3_2",
					bannedAtUTC: null,
					bannedBy: null,
					belongsTo: {
						id: "t5_100",
						type: "profile"
					},
					contestMode: !1,
					created: 1492205391e4,
					crosspostParentId: null,
					crosspostRootId: null,
					discussionType: null,
					distinguishType: null,
					domain: "i.redd.it",
					events: [],
					flair: [],
					ignoreReports: !1,
					impressionId: null,
					impressionIdStr: null,
					isArchived: !1,
					isApproved: !1,
					isAuthorPremium: !1,
					isBlank: !1,
					isCreatedFromAdsUi: !1,
					isCrosspostable: !0,
					isEligibleForLinkedPosts: !1,
					isEligibleForQASchema: !1,
					isFollowed: !1,
					isGildable: !0,
					isLocked: !1,
					isMediaOnly: !1,
					isMeta: !1,
					isNSFW: !1,
					isOriginalContent: !1,
					isPinned: !1,
					isRemoved: !1,
					isSpam: !1,
					isSpoiler: !1,
					isSponsored: !1,
					isStickied: !1,
					liveCommentsWebsocket: "wss://reddit.com/live/2",
					media: {
						content: "https://i.redd.it/d43skac7fqsy.jpg",
						type: "image",
						width: 100,
						height: 100,
						obfuscated: null,
						resolutions: []
					},
					modReports: [],
					numComments: 5,
					numCrossposts: 0,
					numReports: null,
					permalink: "https://www.reddit.com/r/listentothis/comments/6k2dyk/kerrin_connolly_nevermind_indieacousticpop_2017/",
					postCategories: [{
						categoryId: "c1009",
						categoryName: "News"
					}],
					previewComments: [{
						id: "t1_1",
						type: "top"
					}],
					postId: "t3_2",
					removedBy: null,
					removedByCategory: null,
					score: 23,
					isScoreHidden: !1,
					sendReplies: !1,
					source: null,
					suggestedSort: null,
					thumbnail: {
						url: "https://b.thumbs.redditmedia.com/KNGvoTjCbwN1iYV5lkb4TfZGXX22k--3WfeijolEreo.jpg",
						width: null,
						height: null
					},
					title: "Another not so plain post here.",
					upvoteRatio: .1,
					userReports: [],
					viewCount: 1,
					voteState: 1
				},
				t3_3: {
					approvedAtUTC: null,
					approvedBy: null,
					author: "person_number_three",
					authorId: "t2_1236",
					authorIsBlocked: !1,
					awardCountsById: {},
					id: "t3_3",
					bannedAtUTC: null,
					bannedBy: null,
					belongsTo: {
						id: "t5_1",
						type: "subreddit"
					},
					contestMode: !1,
					created: 1492205391e4,
					crosspostParentId: null,
					crosspostRootId: null,
					discussionType: null,
					distinguishType: null,
					domain: "i.redd.it",
					events: [],
					flair: [],
					ignoreReports: !1,
					impressionId: null,
					impressionIdStr: null,
					isArchived: !1,
					isApproved: !1,
					isAuthorPremium: !1,
					isBlank: !1,
					isCreatedFromAdsUi: !1,
					isCrosspostable: !0,
					isEligibleForLinkedPosts: !1,
					isEligibleForQASchema: !1,
					isFollowed: !1,
					isGildable: !0,
					isLocked: !1,
					isMediaOnly: !1,
					isMeta: !1,
					isNSFW: !1,
					isOriginalContent: !1,
					isPinned: !1,
					isRemoved: !1,
					isSpam: !1,
					isSpoiler: !1,
					isSponsored: !1,
					isStickied: !1,
					liveCommentsWebsocket: "wss://reddit.com/live/3",
					media: {
						content: "https://i.redd.it/d43skac7fqsy.jpg",
						type: "image",
						width: 100,
						height: 100,
						obfuscated: null,
						resolutions: []
					},
					modReports: [],
					numComments: 5,
					numCrossposts: 0,
					numReports: null,
					permalink: "https://www.reddit.com/r/listentothis/comments/6k2dyk/kerrin_connolly_nevermind_indieacousticpop_2017/",
					postCategories: [{
						categoryId: "c1009",
						categoryName: "News"
					}],
					preview: {
						url: "https://i.redditmedia.com/msdj41xc-LgU8OfIuLDP52FtgyyahbFAizi9mp-aBoI.jpg?s=931d28c1922e12dbf6a06a357cdf3ceb",
						width: 480,
						height: 360
					},
					previewComments: [{
						id: "t1_1",
						type: "top"
					}],
					postId: "t3_3",
					removedBy: null,
					removedByCategory: null,
					score: 23,
					isScoreHidden: !1,
					sendReplies: !1,
					source: null,
					suggestedSort: null,
					thumbnail: {
						url: "https://b.thumbs.redditmedia.com/KNGvoTjCbwN1iYV5lkb4TfZGXX22k--3WfeijolEreo.jpg",
						width: null,
						height: null
					},
					title: "Another plain post here.",
					upvoteRatio: .1,
					userReports: [],
					viewCount: 1,
					voteState: 1
				},
				t3_4: {
					approvedAtUTC: null,
					approvedBy: null,
					author: "this_user_is_the_best",
					authorId: "t2_1237",
					authorIsBlocked: !1,
					awardCountsById: {},
					id: "t3_4",
					bannedAtUTC: null,
					bannedBy: null,
					belongsTo: {
						id: "t5_100",
						type: "profile"
					},
					contestMode: !1,
					created: 1492205391e4,
					crosspostParentId: null,
					crosspostRootId: null,
					discussionType: null,
					distinguishType: null,
					domain: "i.redditmedia.com",
					events: [],
					flair: [{
						type: r.f.Text,
						text: "hello world"
					}, {
						type: r.f.Spoiler,
						text: "spoiler"
					}],
					ignoreReports: !1,
					impressionId: null,
					impressionIdStr: null,
					isArchived: !1,
					isApproved: !1,
					isAuthorPremium: !1,
					isBlank: !1,
					isCreatedFromAdsUi: !1,
					isCrosspostable: !0,
					isEligibleForLinkedPosts: !1,
					isEligibleForQASchema: !1,
					isFollowed: !1,
					isGildable: !0,
					isLocked: !1,
					isMediaOnly: !1,
					isMeta: !1,
					isNSFW: !1,
					isOriginalContent: !1,
					isPinned: !1,
					isRemoved: !1,
					isSpam: !1,
					isSpoiler: !1,
					isSponsored: !1,
					isStickied: !1,
					liveCommentsWebsocket: "wss://reddit.com/live/4",
					media: null,
					modReports: [],
					numComments: 5,
					numCrossposts: 0,
					numReports: null,
					permalink: "https://www.reddit.com/r/listentothis/comments/6k2dyk/kerrin_connolly_nevermind_indieacousticpop_2017/",
					postCategories: [{
						categoryId: "c1009",
						categoryName: "News"
					}],
					preview: {
						url: "https://i.redditmedia.com/msdj41xc-LgU8OfIuLDP52FtgyyahbFAizi9mp-aBoI.jpg?s=931d28c1922e12dbf6a06a357cdf3ceb",
						width: 480,
						height: 360
					},
					previewComments: [{
						id: "t1_1",
						type: "top"
					}],
					postId: "t3_4",
					removedBy: null,
					removedByCategory: null,
					score: 300,
					isScoreHidden: !1,
					sendReplies: !1,
					source: {
						displayText: "foobar.com",
						url: "http://foobar.com",
						outboundUrl: "http://foobar.com/foobar"
					},
					suggestedSort: null,
					thumbnail: {
						url: "https://b.thumbs.redditmedia.com/KNGvoTjCbwN1iYV5lkb4TfZGXX22k--3WfeijolEreo.jpg",
						width: null,
						height: null
					},
					title: "Hello world one two three four five six seven eight. See? I can count!",
					upvoteRatio: .1,
					userReports: [],
					viewCount: 1,
					voteState: 0
				},
				t3_5: {
					approvedAtUTC: null,
					approvedBy: null,
					author: "yet_another_cool_dude",
					authorId: "t2_1238",
					authorIsBlocked: !1,
					awardCountsById: {},
					id: "t3_5",
					bannedAtUTC: null,
					bannedBy: null,
					belongsTo: {
						id: "t5_1",
						type: "subreddit"
					},
					contestMode: !1,
					created: 1492205391e4,
					crosspostParentId: null,
					crosspostRootId: null,
					discussionType: null,
					distinguishType: null,
					domain: "self.listentothis",
					events: [],
					flair: [{
						type: r.f.Text,
						text: "hello world"
					}, {
						type: r.f.Spoiler,
						text: "spoiler"
					}],
					ignoreReports: !1,
					impressionId: null,
					impressionIdStr: null,
					isArchived: !1,
					isApproved: !1,
					isAuthorPremium: !1,
					isBlank: !1,
					isCreatedFromAdsUi: !1,
					isCrosspostable: !0,
					isEligibleForLinkedPosts: !1,
					isEligibleForQASchema: !1,
					isFollowed: !1,
					isGildable: !0,
					isLocked: !1,
					isMediaOnly: !1,
					isMeta: !1,
					isNSFW: !1,
					isOriginalContent: !1,
					isPinned: !1,
					isRemoved: !1,
					isSpam: !1,
					isSpoiler: !1,
					isSponsored: !1,
					isStickied: !1,
					liveCommentsWebsocket: "wss://reddit.com/live/5",
					media: {
						type: "text",
						rteMode: i.i.RICH_TEXT,
						markdownContent: "",
						content: "",
						obfuscated: null
					},
					modReports: [],
					numComments: 5,
					numCrossposts: 0,
					numReports: null,
					permalink: "https://www.reddit.com/r/listentothis/comments/6k2dyk/kerrin_connolly_nevermind_indieacousticpop_2017/",
					preview: {
						url: "https://i.redditmedia.com/msdj41xc-LgU8OfIuLDP52FtgyyahbFAizi9mp-aBoI.jpg?s=931d28c1922e12dbf6a06a357cdf3ceb",
						width: 480,
						height: 360
					},
					postCategories: [{
						categoryId: "c1009",
						categoryName: "News"
					}],
					previewComments: [{
						id: "t1_1",
						type: "top"
					}],
					postId: "t3_5",
					removedBy: null,
					removedByCategory: null,
					score: 300,
					isScoreHidden: !1,
					sendReplies: !1,
					source: null,
					suggestedSort: null,
					thumbnail: {
						url: "https://b.thumbs.redditmedia.com/KNGvoTjCbwN1iYV5lkb4TfZGXX22k--3WfeijolEreo.jpg",
						width: null,
						height: null
					},
					title: "This is an interesting post title",
					upvoteRatio: .1,
					userReports: [],
					viewCount: 1,
					voteState: 0
				},
				t3_6: {
					approvedAtUTC: null,
					approvedBy: null,
					author: "spez",
					authorId: "t2_1239",
					authorIsBlocked: !1,
					awardCountsById: {},
					id: "t3_6",
					bannedAtUTC: null,
					bannedBy: null,
					belongsTo: {
						id: "t5_100",
						type: "profile"
					},
					contestMode: !1,
					created: 1492205391e4,
					crosspostParentId: null,
					crosspostRootId: null,
					discussionType: null,
					distinguishType: null,
					domain: "self.listentothis",
					events: [],
					flair: [{
						type: r.f.Text,
						text: "hello world"
					}, {
						type: r.f.Spoiler,
						text: "spoiler"
					}],
					ignoreReports: !1,
					impressionId: null,
					impressionIdStr: null,
					isArchived: !1,
					isApproved: !1,
					isAuthorPremium: !1,
					isBlank: !1,
					isCreatedFromAdsUi: !1,
					isCrosspostable: !0,
					isEligibleForLinkedPosts: !1,
					isEligibleForQASchema: !1,
					isFollowed: !1,
					isGildable: !0,
					isLocked: !1,
					isMediaOnly: !1,
					isMeta: !1,
					isNSFW: !1,
					isOriginalContent: !1,
					isPinned: !1,
					isRemoved: !1,
					isSpam: !1,
					isSpoiler: !1,
					isSponsored: !1,
					isStickied: !1,
					liveCommentsWebsocket: "wss://reddit.com/live/6",
					media: {
						type: "text",
						rteMode: i.i.RICH_TEXT,
						markdownContent: "",
						content: "",
						obfuscated: null
					},
					modReports: [],
					numComments: 5,
					numCrossposts: 0,
					numReports: null,
					permalink: "https://www.reddit.com/r/listentothis/comments/6k2dyk/kerrin_connolly_nevermind_indieacousticpop_2017/",
					postCategories: [{
						categoryId: "c1009",
						categoryName: "News"
					}],
					preview: {
						url: "https://i.redditmedia.com/msdj41xc-LgU8OfIuLDP52FtgyyahbFAizi9mp-aBoI.jpg?s=931d28c1922e12dbf6a06a357cdf3ceb",
						width: 480,
						height: 360
					},
					previewComments: [{
						id: "t1_1",
						type: "top"
					}],
					postId: "t3_6",
					removedBy: null,
					removedByCategory: null,
					score: 300,
					isScoreHidden: !1,
					sendReplies: !1,
					source: null,
					suggestedSort: null,
					thumbnail: {
						url: "https://b.thumbs.redditmedia.com/KNGvoTjCbwN1iYV5lkb4TfZGXX22k--3WfeijolEreo.jpg",
						width: null,
						height: null
					},
					title: "This is an extremely interesting post title",
					upvoteRatio: .1,
					userReports: [],
					viewCount: 1,
					voteState: 0
				},
				abc12345: {
					approvedAtUTC: null,
					approvedBy: null,
					author: "spez",
					authorId: "t2_1240",
					authorIsBlocked: !1,
					awardCountsById: {},
					id: "t3_6",
					bannedAtUTC: null,
					bannedBy: null,
					belongsTo: {
						id: "t5_100",
						type: "profile"
					},
					contestMode: !1,
					created: 1492205391e4,
					crosspostParentId: null,
					crosspostRootId: null,
					discussionType: null,
					distinguishType: null,
					domain: "i.redditmedia.com",
					events: [{
						type: 1,
						url: "https://www.reddit.com/i.gif"
					}],
					flair: [{
						type: r.f.Text,
						text: "hello world"
					}, {
						type: r.f.Spoiler,
						text: "spoiler"
					}],
					ignoreReports: !1,
					impressionId: null,
					impressionIdStr: null,
					isArchived: !1,
					isApproved: !1,
					isAuthorPremium: !1,
					isBlank: !0,
					isCreatedFromAdsUi: !1,
					isCrosspostable: !0,
					isEligibleForLinkedPosts: !1,
					isEligibleForQASchema: !1,
					isFollowed: !1,
					isGildable: !0,
					isLocked: !1,
					isMediaOnly: !1,
					isMeta: !1,
					isNSFW: !1,
					isOriginalContent: !1,
					isPinned: !1,
					isRemoved: !1,
					isSpam: !1,
					isSpoiler: !1,
					isSponsored: !1,
					isStickied: !1,
					liveCommentsWebsocket: "wss://reddit.com/live/6",
					media: {
						type: "text",
						rteMode: i.i.RICH_TEXT,
						markdownContent: "",
						content: "",
						obfuscated: null
					},
					modReports: [],
					numComments: 5,
					numCrossposts: 0,
					numReports: null,
					permalink: "https://www.reddit.com/r/listentothis/comments/6k2dyk/kerrin_connolly_nevermind_indieacousticpop_2017/",
					postCategories: [{
						categoryId: "c1009",
						categoryName: "News"
					}],
					preview: {
						url: "https://i.redditmedia.com/msdj41xc-LgU8OfIuLDP52FtgyyahbFAizi9mp-aBoI.jpg?s=931d28c1922e12dbf6a06a357cdf3ceb",
						width: 480,
						height: 360
					},
					previewComments: [{
						id: "t1_1",
						type: "top"
					}],
					postId: "t3_3",
					removedBy: null,
					removedByCategory: null,
					score: 300,
					isScoreHidden: !1,
					sendReplies: !1,
					source: null,
					suggestedSort: null,
					thumbnail: {
						url: "https://b.thumbs.redditmedia.com/KNGvoTjCbwN1iYV5lkb4TfZGXX22k--3WfeijolEreo.jpg",
						width: null,
						height: null
					},
					title: "This is an extremely interesting post title",
					upvoteRatio: .1,
					userReports: [],
					viewCount: 1,
					voteState: 0
				}
			};
			d = {
				authorIsBlocked: !0,
				media: {
					type: "text",
					rteMode: i.i.RICH_TEXT,
					markdownContent: "",
					content: "This is content in a post.",
					obfuscated: null
				}
			}, n.a.notVoted;
			var d;
			var c = s("./src/reddit/helpers/isComment.ts");
			const l = Object(o.a)((e, {
					listingKey: t
				}) => {
					const s = e.posts.models;
					return p(e, {
						listingKey: t
					}).filter(e => {
						if (Object(c.a)(e)) return !0; {
							const t = s[e];
							return t && !t.hidden
						}
					})
				}),
				p = Object(o.a)((e, {
					listingKey: t
				}) => {
					const s = e.pages.profileOverview.chrono.ids[t];
					return s ? [...s] : []
				}),
				m = Object(o.a)((e, {
					listingKey: t
				}) => {
					return l(e, {
						listingKey: t
					}).reduce((t, s) => {
						const o = Object(c.a)(s) ? e.features.comments.models[s].postId : s;
						return t[s] = o, t
					}, {})
				}),
				u = (Object(o.a)((e, {
					listingKey: t
				}) => {
					const s = e.posts.models;
					return u(e, {
						listingKey: t
					}).filter(e => {
						const t = s[e];
						return t && !t.hidden
					})
				}), Object(o.a)((e, {
					listingKey: t
				}) => {
					return l(e, {
						listingKey: t
					}).map(t => Object(c.a)(t) ? e.features.comments.models[t].postId : t)
				})),
				h = Object(o.a)((e, {
					listingKey: t
				}) => {
					const s = e.posts.models,
						o = u(e, {
							listingKey: t
						}),
						r = {};
					return o.forEach(e => r[e] = s[e]), r
				}),
				b = Object(o.a)((e, {
					listingKey: t
				}) => {
					const s = e.features.comments.models,
						o = l(e, {
							listingKey: t
						}),
						r = {};
					return o.forEach(e => !!Object(c.a)(e) && (r[e] = s[e])), r
				}),
				f = (e, {
					listingKey: t
				}) => e.pages.profileOverview.chrono.api.error[t],
				g = (e, {
					listingKey: t
				}) => e.pages.profileOverview.chrono.api.pending[t],
				y = (e, {
					listingKey: t
				}) => e.pages.profileOverview.chrono.loadMore[t],
				v = (e, {
					listingKey: t
				}) => e.pages.profileOverview.chrono.fetchedTokens[t]
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"d5b9525ce2ca"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileOverview.1f390a0c6e1ef0ddcf3a.js.map