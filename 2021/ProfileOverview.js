// https://www.redditstatic.com/desktop2x/ProfileOverview.cadb9f470f6abd02118c.js
// Retrieved at 8/31/2021, 6:30:09 PM by Reddit Dataminer v1.0.0
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
				for (var d = Object.prototype.hasOwnProperty.bind(t), a = 0; a < i.length; a++) {
					var c = i[a];
					if (!d(c)) return !1;
					var l = e[c],
						m = t[c];
					if (!1 === (r = s ? s.call(o, l, m, c) : void 0) || void 0 === r && l !== m) return !1
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
				d = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(o || (o = {}));
			var c, l = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				m = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(c || (c = {}));
			var p = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
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
						i = Object(p.e)(r),
						n = Object(p.d)(r),
						c = Object(h.J)(r);
					if (i || !n) return;
					e(g());
					let u = !1;
					try {
						const t = c ? o.LoggedInGeo : o.LoggedOutGeo,
							r = await ((e, t, s) => Object(d.a)(e, {
								...a,
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
										d = Object(m.d)(n),
										a = Object(l.b)(n),
										c = Object(m.c)(o),
										p = {
											recommendedSubredditIds: [o.id],
											interactedSubredditIds: [r.id],
											subreddits: d,
											subredditsAboutInfo: a,
											subredditTopContent: c,
											category: i,
											lastLoadedEnv: "client"
										};
									e(b(p)), u = !0
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
						d = Object(p.g)(n);
					if (Object(p.f)(n) || null === d || "client" === d) {
						const s = null === (r = null === (o = Object(u.b)(t())) || void 0 === o ? void 0 : o.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
							d = Object(h.K)(n);
						return Object(i.i)(() => e(C()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: d
						})
					}
					if ("server" === d) return e(v({
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
				d = s("./src/reddit/actions/subreddit.ts"),
				a = s("./src/reddit/endpoints/page/profileOverviewPage.ts"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/constants/postLayout.ts"),
				m = s("./src/reddit/constants/parameters.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
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
				L = s("./node_modules/redux/es/redux.js"),
				N = s("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const _ = {};
			var M = (e = _, t) => {
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
				A = Object(L.c)({
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
			var W = (e = K, t) => {
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
				U = s("./src/lib/omitKey/index.ts");
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
							} : Object(U.a)(e, s)
						}
						default:
							return e
					}
				},
				H = Object(L.c)({
					api: A,
					fetchedTokens: V,
					ids: W,
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
				J = Object(L.c)({
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
				se = Object(L.c)({
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
				ie = Object(L.c)({
					api: se,
					models: re
				}),
				ne = s("./node_modules/lodash/mapValues.js"),
				de = s.n(ne),
				ae = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				ce = s("./src/reddit/constants/comments.ts");
			const le = {};

			function me(e) {
				const t = e;
				return de()(t, ({
					depth: e,
					next: t,
					prev: s
				}) => ({
					depth: e,
					next: t,
					prev: s
				}))
			}
			const pe = (e, t, s) => {
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
						} = t.payload, n = pe(r, s, o), d = {};
						for (const e of r) {
							d[Object(ae.a)(e, i)] = n.hasOwnProperty(e) ? me(n[e]) : {}
						}
						return {
							...e,
							...d
						}
					}
					case Z.b: {
						const {
							comments: s,
							commentLists: o,
							extraComments: r,
							extraCommentsId: i,
							postIds: n,
							profileName: d
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
						const a = n[0],
							c = me(pe(n, s, r)[a]),
							l = Object(ae.a)(a, d),
							m = {
								...e[l]
							},
							p = m[i].prev,
							u = p && p.id || "",
							h = o[a].head,
							b = h && h.id || "",
							f = {
								id: b,
								type: ce.a.Comment
							},
							g = {
								...m,
								[u]: {
									...m[u],
									next: f
								},
								...c,
								[b]: {
									...c[b],
									prev: p
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
							i[Object(ae.a)(e, r)] = s[e] && s[e].head ? s[e].head.id : null
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
								r[Object(ae.a)(e, o)] = e
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
				ye = Object(L.c)({
					api: J,
					extraComments: ie,
					keyToCommentThreadLinkSets: ue,
					keyToHeadCommentId: be,
					keyToPostId: ge
				}),
				ve = Object(L.c)({
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
						d = !!n.listings.postOrder.ids[e],
						c = !!Object(u.c)(n, {
							listingKey: e
						});
					if (!!Object(u.d)(n, {
							listingKey: e
						}) || d && !c) return;
					o(xe({
						key: e
					}));
					const l = await Object(k.a)("profile", () => Object(a.b)(i.apiContext(), t, s)),
						m = l.body,
						{
							pinned: p,
							postIds: b
						} = m;
					if (l.ok) {
						o(Pe({
							key: e,
							meta: n.meta,
							profileName: t,
							...m,
							postIds: b
						}));
						const s = Object(h.m)(r(), t);
						o(Object(C.h)({
							profileId: s,
							pinned: p
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
						d = !!Object(b.f)(n, {
							listingKey: e
						}).length,
						c = !!Object(b.a)(n, {
							listingKey: e
						});
					if (!!Object(b.b)(n, {
							listingKey: e
						}) || d && !c) return;
					o(Oe({
						key: e
					}));
					const l = await Object(k.a)("profile", () => Object(a.a)(i.apiContext(), t, s)),
						m = l.body,
						{
							pinned: p
						} = m;
					if (l.ok) {
						o(je({
							key: e,
							meta: n.meta,
							...m
						}));
						const s = Object(h.m)(r(), t);
						o(Object(C.h)({
							profileId: s,
							pinned: p
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
						queryParams: a,
						params: u
					} = e, {
						sort: b,
						t: g
					} = Object(n.a)(s(), a), {
						profileName: v
					} = u;
					let C = !1;
					const I = l.e[Object(p.Q)(s(), {})],
						k = v.toLowerCase(),
						E = {
							...r()(e.queryParams, m.l),
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
					const L = s();
					if (!L.platform.currentPage) return;
					if (200 !== L.platform.currentPage.status) return;
					const N = Object(h.m)(s(), k),
						_ = Object(f.ob)(L, {
							userName: v
						}).id;
					t(O.l({
						title: Ee(s(), v)
					})), Object(f.M)(L) && Object(f.P)(L, v) && t(Object(y.f)());
					const M = [t(Object(d.q)()), t(w.b(k, N)), t(j.b(k)), t(x.o(v)), t(j.g(v)), t(P.k(v, _))];
					await Promise.all(M)
				}, Ee = (e, t) => Object(h.q)(e, {
					profileName: t
				})
		},
		"./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const d = 5;

			function a(e) {
				const {
					post: t,
					postIds: s,
					subredditId: o
				} = e, a = Object(i.e)(e => e.subreddits.questions), c = Object(i.e)(e => e.posts.models);
				if (!s) return null;
				const l = s.indexOf(t.id);
				if (l < 0) return null;
				if (!u(t.id)) return null;
				const m = new Set;
				let p = !1;
				for (let r = 0, i = -999; r <= l; r += 1) {
					const e = s[r],
						t = c[e].belongsTo.id;
					u(e) && r - i >= d && !m.has(t) && (i = r, m.add(t), r === l && (p = !0))
				}
				return p ? r.a.createElement(n.a, {
					subredditId: o,
					inFeed: !0
				}) : null;

				function u(e) {
					var t;
					return (null === (t = a[c[e].belongsTo.id]) || void 0 === t ? void 0 : t.length) > 0
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
				badge: "_29aHDAbliwom5yyuyhXsFc",
				live: "_15J6TjGStJy2YuJAIf8TW4",
				ended: "_3K1ErD5uCGRM98kPQaJ_Nv",
				awards: "_3jKFKIS1X6GZ6MOcUdAy08"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var o = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				n = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				a = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less"),
				c = s.n(a);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), m = ({
				post: e
			}) => {
				const t = e.predictionTournament,
					s = t.status === d.a.Live,
					r = t.status === d.a.Closed;
				return i.a.createElement("div", {
					className: c.a.container
				}, i.a.createElement("h3", {
					className: c.a.title
				}, t.name), i.a.createElement("div", {
					className: c.a.label
				}, l._("Predictions Tournament", null, {
					hk: "sZ4UO"
				}), s && i.a.createElement("span", {
					className: Object(o.a)(c.a.badge, c.a.live)
				}, l._("Live", null, {
					hk: "1G2P1W"
				})), r && i.a.createElement("span", {
					className: Object(o.a)(c.a.badge, c.a.ended)
				}, l._("Ended", null, {
					hk: "4s3hco"
				}))), i.a.createElement(n.a, {
					className: c.a.awards,
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
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				c = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				l = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				m = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				p = s("./src/reddit/actions/post.ts"),
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
				L = s("./src/reddit/components/AwardBadges/index.tsx"),
				N = s("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				_ = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				M = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				F = s("./src/reddit/components/Flatlist/index.tsx"),
				R = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				A = s("./src/reddit/components/ModModeReports/index.tsx"),
				B = s("./src/reddit/components/ModModeReports/helpers.ts"),
				V = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				K = s("./src/reddit/components/PostContainer/index.tsx"),
				W = s("./src/reddit/components/PostLeftRail/index.tsx"),
				U = s("./src/reddit/components/PostMedia/index.tsx"),
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
			const de = Object(d.a)(w.N, e => e.some(ne.c)),
				ae = Object(d.a)(de, e => e),
				ce = (e, t) => Object(ie.c)(e, {
					experimentName: re.Ab,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && ae(e, {
							listingKey: s
						})
					}
				});
			var le = s("./src/reddit/selectors/postFlair.ts"),
				me = s("./src/reddit/selectors/showPromotedCTA.ts"),
				pe = s("./src/reddit/components/PostTopMeta/index.tsx"),
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
				ve = Object(i.b)(() => Object(d.c)({
					autoplayPref: I.b,
					activeModalId: P.a,
					hideNSFWPref: I.C,
					flairStyleTemplate: ee.U,
					isCurrentUserProfilePost: w.l,
					isLoggedIn: I.K,
					isActive: w.j,
					showPromotedCTA: me.b,
					moderatorPermissions: j.k,
					modModeEnabled: ee.S,
					posts: ye,
					postHeightVariant: ce,
					shouldShowNsfwListingBelow: be.b,
					showEditFlair: le.a,
					showAwardsPlaque: O.a,
					isTournamentPost: (e, {
						post: t
					}) => Boolean(t.predictionTournament) && Object(C.s)(e)
				}), (e, {
					postId: t
				}) => ({
					handleVote: s => {
						const o = s === x.a.upvoted ? Object(p.db)(t) : Object(p.w)(t);
						e(o)
					},
					onIgnoreReports: () => e(Object(p.Z)(t)),
					onOpenReportsDropdown: t => e(Object(u.h)({
						tooltipId: t
					}))
				})),
				xe = r.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: i,
						currentUser: d,
						eventFactory: p,
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
						listingIndex: de,
						listingKey: ae,
						moderatorPermissions: ce,
						modModeEnabled: le,
						onClickPost: me,
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
					} = e, Le = !!e.redditStyle || !!e["data-redditstyle"], Ne = Le ? void 0 : u, _e = Object(l.a)(ce), Me = le && _e, Fe = Object(a.a)(ce), Re = Object(c.a)(ce), Ae = Object(B.c)(fe), Be = !!fe.media && fe.media.type === y.o.RTJSON, Ve = Ie && Be, Ke = s ? s - W.a : void 0, We = !(D && q || $), Ue = (e => e === re.od.OnlyTitles)(ye) && !Object(se.a)(fe), Ge = (e => e === re.od.MediumHeight)(ye) && !Object(se.a)(fe), De = (e => {
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
							t && (null == Ee || Ee(de))
						})
					}, [Ee, de]);
					return Object(g.a)(Qe, Je), r.a.createElement(f.b, null, r.a.createElement(K.a, {
						className: Object(k.a)(ge.a.container, i, he.a.largeAndMediumPostStyles, he.a.largeAndMediumActiveStyles, Object(m.a)(e), {
							[he.a.mUseRedditTheme]: Le,
							promotedvideolink: fe.isSponsored && !(fe.media && y.a.has(fe.media.type)),
							[ge.a.topCompactPost]: De && De.hasTopCompactPostStyles,
							[ge.a.bottomCompactPost]: De && De.hasBottomCompactPostStyles
						}),
						isOverlay: z,
						style: Object(m.b)(e.flairStyleTemplate),
						post: fe,
						onClick: me,
						eventFactory: p
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
						redditStyle: Le,
						postId: Se,
						triggerCelebratoryMoment: Te
					}), r.a.createElement(V.a, {
						className: Object(k.a)(ge.a.backgroundWrapper, {
							[ge.a.isEvent]: Object(oe.a)(fe)
						}),
						"data-click-id": "background",
						flairStyleTemplate: Ne,
						post: fe,
						redditStyle: Le
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
						listingKey: ae,
						post: fe,
						shouldShowSubscribeButton: We,
						showSubreddit: qe,
						showSubredditIcon: !0,
						subredditOrProfile: we
					}), r.a.createElement(J.c, {
						className: ge.a.postTitle,
						post: fe,
						redditStyle: Le,
						size: J.b.Large,
						titleColor: Ne && Ne.postTitleColor,
						isOverlay: z
					}), fe.source && !fe.isSponsored && !(fe.media && Object(y.G)(fe.media)) && r.a.createElement(Y.a, {
						className: ge.a.sourceLink,
						post: fe
					})), r.a.createElement("div", {
						className: ge.a.postMediaWrapper
					}, !De && r.a.createElement(U.a, {
						isGalleryTileLayoutDefault: H,
						isListing: !0,
						isMediumHeight: Ge,
						isNotCardView: !!z,
						isTitleOnly: Ue,
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
					})), le && _e && Ae && r.a.createElement(A.a, {
						onIgnoreReports: ue,
						reportable: fe
					}), r.a.createElement(R.d, null), Ce && r.a.createElement(L.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !1,
						thing: fe,
						tooltipType: z ? pe.c.Lightbox : void 0
					}), r.a.createElement("div", {
						className: ge.a.flatListContainer
					}, r.a.createElement(_.a, {
						className: ge.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: Ne,
						model: fe,
						onVoteClick: e.handleVote
					}), r.a.createElement(F.c, {
						currentUser: d,
						hasModFlairPerms: Fe,
						hasModFullPerms: Re,
						hasModPostPerms: _e,
						hostPostData: C,
						isCommentCountAnimation: te,
						isCountAnimShadowTestEnabled: ne,
						isLargePost: !0,
						isOverlay: !!z,
						listingKey: ae,
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
				d = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				a = s("./src/reddit/components/SubredditIcon/index.tsx"),
				c = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				l = s("./src/reddit/helpers/name/index.ts"),
				m = s("./src/reddit/icons/fonts/index.tsx"),
				p = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				u = s.n(p);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: r,
					post: p,
					subredditOrProfile: h
				} = e;
				return i.a.createElement("div", {
					className: Object(n.a)(u.a.container, t)
				}, i.a.createElement(c.a, {
					className: u.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: h.url
				}, i.a.createElement(a.b, {
					className: u.a.subredditIcon,
					shouldHideNsfwIcon: r,
					subredditOrProfile: h
				}), i.a.createElement("span", null, h.displayText)), ((e, t) => {
					if (t) return i.a.createElement("div", {
						role: "img",
						"aria-label": o.fbt._("Crossposted by{author}from{community}", [o.fbt._param("author", Object(l.d)(e)), o.fbt._param("community", t.displayText)], {
							hk: "2OZoR0"
						})
					}, i.a.createElement(m.a, {
						name: "crosspost",
						className: u.a.CrosspostIcon
					}))
				})(p.author, s), h && h.isQuarantined && i.a.createElement(d.a, null))
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
				d = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				a = s.n(d);

			function c(e) {
				const {
					source: t
				} = e.post;
				return r.a.createElement("div", {
					className: Object(i.a)(a.a.container, e.className)
				}, r.a.createElement(n.a, {
					className: Object(i.a)(a.a.thumbnail, e.thumbnailClassName),
					containerClassName: Object(i.a)(a.a.thumbnailContainer, e.thumbnailContainerClassName),
					linkIconClassName: Object(i.a)(a.a.thumbnailLinkIcon, e.thumbnailLinkIconClassName),
					linkTextClassName: a.a.thumbnailLinkText,
					outboundLinkIconClassName: a.a.thumbnailOutboundLinkIcon,
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
				d = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				a = s("./src/reddit/icons/fonts/index.tsx"),
				c = s("./src/reddit/components/NotificationButton/index.m.less"),
				l = s.n(c);
			t.a = e => {
				const t = Object(d.a)(),
					{
						isFilled: s,
						onClick: o,
						hasTooltip: c,
						tooltipText: m,
						className: p
					} = e;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
					className: Object(i.a)(l.a.notificationButton, p),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: o
				}, r.a.createElement(a.a, {
					name: "notification",
					isFilled: s,
					className: l.a.icon,
					"aria-label": m
				})), c && r.a.createElement(n.a, {
					popperProps: t.popperProps,
					arrowProps: t.arrowProps,
					visible: t.visible
				}, m))
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
				d = s.n(n),
				a = s("./node_modules/lodash/throttle.js"),
				c = s.n(a),
				l = s("./node_modules/react/index.js"),
				m = s.n(l),
				p = s("./node_modules/shallowequal/index.js"),
				u = s.n(p),
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
				L = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				N = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				_ = s("./src/reddit/models/Media/index.ts"),
				M = s("./src/reddit/helpers/brandSafety/index.ts"),
				F = s("./src/reddit/helpers/trackers/ads.ts"),
				R = s("./src/lib/LRUCache/index.ts"),
				A = s("./src/telemetry/index.ts"),
				B = s("./src/telemetry/models/Timer.ts"),
				V = s("./src/reddit/components/PostList/index.m.less"),
				K = s.n(V);
			const {
				fbt: W
			} = s("./node_modules/fbt/lib/FbtPublic.js"), U = 500, G = new R.a(U), D = new R.a(U), H = new R.a(U), q = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5,
				SEARCH: 3
			}, z = v.a.div("SeeMore", K.a), X = v.a.wrapped(N.a, "ArrowRight", K.a), Q = (e, t, s, o, r, i, n, d, a) => {
				const c = `entered-${e}-${t}-${s?`last-${o}-${r}`:""}-${i}`;
				let l = G.get(c);
				return void 0 === l && (l = () => {
					s && n.onBottomViewed(o, r), n.trackOnPostEnteredViewport(e, t, d, a)
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
							r && (t = Object(E.a)(o.id, r, t).url), Object(F.a)(o, n), Object(x.d)(t, x.c.BLANK)
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
			class $ extends m.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new R.a(U), this.surveyTriggerCounted = !1, this.timerId = void 0, this.viewportHeight = null, this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						this.dispatchBrandSafety(e), this.props.isNpsScrollSurveyEnabled && this.props.surveyTriggerScrollCounted && !this.surveyTriggerCounted && this.surveyTriggerListener(e)
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
						t = e && d()(e);
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
					if (!this.shouldSendScreenview()) return;
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
					} = e, d = Object.keys(o), a = Object.keys(n);
					if (a.length !== d.length) return !0;
					if (a.some(e => {
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
						isCommentsPage: d,
						isFrontpage: a,
						isProfilePostListing: c,
						isTopicPage: l,
						isCommentCountAnimationEnabled: p,
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
							W = Z(e, this.props, a),
							U = R.media && R.media.type === _.o.EMBED ? R.media.provider : null,
							G = p && !F.isSponsored,
							D = u && !F.isSponsored && !F.isScoreHidden,
							H = !F.isSponsored && !F.isArchived;
						T = {
							estHeight: Object(L.c)(F, o),
							id: e,
							isFocusable: !(!R.media || !(o === S.g.Large || o === S.g.Classic && Object(_.G)(R.media))) && (_.d.has(R.media.type) && (!U || !_.s.has(U)) && !R.isSpoiler && !R.isNSFW),
							trackOnEnteredViewport: V,
							trackOnExitedViewport: K,
							render: ({
								className: o,
								height: p,
								width: u,
								remeasure: g,
								setScrollerChildRef: x,
								shouldLoadInitially: P
							}) => m.a.createElement(A, {
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
								isCommentsPage: d,
								isFrontpage: a,
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
								onClickPost: W,
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
					return m.a.createElement(e, null)
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
					return m.a.createElement("div", {
						className: K.a.placeholder
					}, m.a.createElement(n, {
						className: t,
						isLoading: !e,
						layout: o
					}), !!e && m.a.createElement(O.a, {
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
					if (!s) return m.a.createElement("div", {
						className: K.a.placeholder
					}, m.a.createElement(C.a, {
						className: r,
						isLoading: !!t,
						layout: o,
						countOverride: q[o]
					}), !!e && m.a.createElement(O.a, {
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
						layout: d,
						location: a,
						loadMore: c,
						postIds: p,
						postsById: u,
						onLoadMore: b
					} = this.props;
					let y = p.filter(e => Boolean(u[e])).map((e, t, s) => {
						const o = t === s.length - 1;
						return this.scrollChildForPost(e, t, o, d)
					});
					r && (y = Y(y, r));
					const v = this.props.measureScrollFPS ? `post-listings-${d}` : void 0,
						x = a ? Object(o.e)(a) : null,
						P = x || n;
					return m.a.createElement(l.Fragment, null, m.a.createElement(j.b, {
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
					}, y), !i && x && m.a.createElement(z, {
						className: K.a.seeMoreButton
					}, m.a.createElement(k.a, {
						className: K.a.seeMorePostsText,
						to: Object(h.a)(x, {
							type: g.Xb.Posts
						})
					}, W._("See More Posts", null, {
						hk: "3o0CqI"
					}), m.a.createElement(X, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			$.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: m.a.Fragment
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
				d = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/NotificationButton/index.tsx"),
				m = s("./src/reddit/components/PostBadges/index.tsx"),
				p = s("./src/reddit/components/PostTopMeta/index.tsx"),
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
				isCurrentUserProfilePost: L,
				isOverlay: N,
				isTopicPage: _,
				listingKey: M,
				post: F,
				shouldShowSubscribeButton: R,
				showCornerOutboundLink: A,
				showSubreddit: B,
				showSubredditIcon: V,
				subredditOrProfile: K,
				isFollowed: W,
				shouldShowFollowButton: U,
				onFollowPostClick: G
			}) => {
				const D = r || _,
					H = K && Object(C.h)(K),
					q = Object(n.e)(e => {
						if (!H) return !0;
						const t = Object(O.ub)(e, F.author || "");
						return !t || t.enableFollowers
					});
				return i.a.createElement("div", {
					className: Object(d.a)(w.a.container, e)
				}, B && K && i.a.createElement("div", {
					className: w.a.subredditIconWrapper
				}, i.a.createElement(h.a, {
					"data-click-id": "subreddit",
					to: K.url
				}, V && i.a.createElement(u.b, {
					className: Object(d.a)(w.a.subredditIcon, S),
					shouldHideNsfwIcon: j,
					subredditOrProfile: K
				}))), i.a.createElement("div", {
					className: w.a.everythingElseWrapper
				}, B && i.a.createElement(c.h, {
					type: F.belongsTo.type,
					id: F.belongsTo.id
				}), i.a.createElement(p.d, {
					className: w.a.postTopMeta,
					forceOpenInNewTab: s,
					flairStyleTemplate: t,
					tooltipType: N ? p.c.Lightbox : void 0,
					post: F,
					showSub: B,
					subredditOrProfile: K
				}), i.a.createElement(m.a, {
					className: w.a.postBadges,
					displayText: K ? K.displayText : null,
					inSubredditOrProfile: k,
					isCompactPinnedPost: T,
					post: F,
					tooltipType: N ? p.c.Lightbox : void 0
				}), !D && i.a.createElement(a.a, {
					isPostDetail: E,
					thing: F,
					tooltipType: N ? p.c.Lightbox : void 0
				})), K && q && B && R && !L && i.a.createElement(b.a, {
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
				})), U && q && i.a.createElement(l.a, {
					isFilled: !!W,
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
				d = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/postList.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/isComment.ts"),
				p = s("./src/reddit/helpers/isPost.ts"),
				u = s("./src/reddit/helpers/trackers/post.ts"),
				h = s("./src/reddit/selectors/profileOverviewChronoItems.ts"),
				b = s("./src/reddit/selectors/subreddit.ts"),
				f = s("./src/reddit/selectors/tracking.ts"),
				g = s("./src/reddit/selectors/user.ts");
			const y = (e, t) => (e, t, s) => Object(m.a)(e) ? 120 : 47,
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
					onBottomViewed: (t, s) => e(a.c(t, s)),
					openPost: t => {
						e(d.K(t))
					},
					trackOnPostEnteredViewport: (t, s) => {
						Object(p.a)(t) && e(d.N(t))
					},
					trackOnPostExitedViewport: (t, s, o) => {
						Object(p.a)(t) && e(d.O(t, o))
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
				d = s("./src/reddit/actions/focusedVerticals/index.ts"),
				a = s("./src/reddit/actions/gold/tooltips.ts"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				m = s("./src/reddit/actions/survey/index.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
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
					onFirstPostChanged: t => e(Object(a.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(n.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(d.a)({
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
					surveyTriggerScrollCounted: () => e(Object(m.i)())
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
			t.a = e => Object(p.c)(j(T(e)))
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/post.ts"),
				n = s("./src/reddit/actions/postFlair.ts"),
				d = s("./src/reddit/actions/tooltip.ts"),
				a = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				m = s("./src/reddit/selectors/moderatorPermissions.ts"),
				p = s("./src/reddit/selectors/postFlair.ts"),
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
				moderatorPermissions: m.k,
				modModeEnabled: c.S,
				showEditFlair: p.a
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
					const o = s === a.a.upvoted ? Object(i.db)(t) : Object(i.w)(t);
					e(o)
				},
				onIgnoreReports: () => e(Object(i.Z)(t)),
				onOpenReportsDropdown: t => e(Object(d.h)({
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
				return m
			}));
			var o = s("./src/config.ts"),
				r = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				i = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				a = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				c = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const l = (e, t, s) => Object(n.a)(e, {
					data: s,
					endpoint: Object(d.a)(Object(r.a)(Object(a.a)(Object(c.a)(`${o.a.gatewayUrl}/desktopapi/v1/user/${t}/conversations`)))),
					traceRequestName: "get_profile_conversations",
					method: i.ib.GET
				}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
					...e,
					body: {
						...e.body,
						pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
					}
				} : e),
				m = (e, t, s) => Object(n.a)(e, {
					data: s,
					endpoint: Object(d.a)(Object(r.a)(Object(c.a)(`${o.a.gatewayUrl}/desktopapi/v1/user/${t}/overview`))),
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
				d = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/lib/isFakeSubreddit/index.ts"),
				m = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/lib/constants/index.ts"),
				h = s("./src/reddit/actions/pages/profileOverview/index.ts"),
				b = s("./src/reddit/actions/pages/profileShared.ts"),
				f = s("./src/reddit/actions/profileConversations.ts"),
				g = s("./node_modules/lodash/difference.js"),
				y = s.n(g),
				v = s("./node_modules/lodash/pick.js"),
				x = s.n(v),
				P = s("./src/lib/makeActionCreator/index.ts"),
				C = s("./src/reddit/selectors/profileOverviewChronoItems.ts"),
				O = s("./src/reddit/constants/parameters.ts"),
				j = s("./src/reddit/endpoints/page/profileOverviewPage.ts"),
				w = s("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const I = Object(P.a)(w.c),
				S = Object(P.a)(w.b),
				k = Object(P.a)(w.a);
			var E = s("./src/reddit/components/ContentGate/index.tsx"),
				T = s("./src/reddit/components/EmptyProfile/index.ts"),
				L = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				N = s("./src/reddit/components/JumpToContent/index.tsx"),
				_ = s("./src/lib/classNames/index.ts"),
				M = s("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				F = s("./src/reddit/components/ProfileItemList/index.tsx"),
				R = s("./src/reddit/connectors/OverviewChronoList/index.ts"),
				A = s("./src/reddit/components/OverviewChronoList/index.m.less"),
				B = s.n(A),
				V = s("./src/lib/lessComponent.tsx");

			function K() {
				return (K = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const W = Object(R.a)(V.a.wrapped(e => {
				const {
					className: t,
					itemIds: s
				} = e, o = s.length > 0;
				return n.a.createElement(F.a, K({
					className: Object(_.a)(t, {
						[B.a.ComponentHasItems]: o
					})
				}, e))
			}, "Component", B.a));
			var U = e => n.a.createElement(W, K({}, e, {
					itemComponent: M.a
				})),
				G = s("./src/reddit/components/PostList/index.tsx"),
				D = s("./src/reddit/components/TrackingHelper/index.tsx"),
				H = s("./src/lib/isPinnedAdminPost/index.ts"),
				q = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				z = s("./node_modules/lodash/last.js"),
				X = s.n(z);
			var Q = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				J = s("./src/reddit/selectors/posts.ts"),
				Z = s("./src/reddit/components/ClassicPost/index.tsx"),
				Y = s("./src/reddit/components/LargePost/index.tsx"),
				$ = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				ee = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				te = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				se = s("./src/reddit/selectors/profile.ts"),
				oe = s("./src/reddit/components/OverviewConversationsPost/ExtraCommentsItem/index.m.less"),
				re = s.n(oe);
			const {
				fbt: ie
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ne = V.a.div("ExtraCommentsItemWrapper", re.a), de = V.a.p("ExtraComments", re.a), ae = V.a.wrapped(de, "ExtraCommentsInteractive", re.a);
			var ce = Object(d.b)(() => Object(a.c)({
					extraCommentsItem: se.c,
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
					extraCommentsClicked: s => e(Object(f.g)(t, s.postId, s.id))
				}))(({
					extraCommentsClicked: e,
					extraCommentsItem: t,
					extraCommentsPending: s
				}) => n.a.createElement(ne, null, s ? n.a.createElement(de, null, ie._("Loading...", null, {
					hk: "47z90C"
				})) : n.a.createElement(te.a.Consumer, null, s => n.a.createElement(ae, {
					onClick: s => {
						e(t), s.stopPropagation(), s.nativeEvent.stopImmediatePropagation()
					}
				}, ie._("Load more comments", null, {
					hk: "1jXJxb"
				}))))),
				le = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				me = s("./src/reddit/contexts/Post/index.tsx"),
				pe = s("./src/reddit/hooks/useTheme.ts"),
				ue = s("./src/reddit/constants/postLayout.ts"),
				he = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				be = s.n(he),
				fe = s("./src/reddit/components/OverviewConversationsPost/index.m.less"),
				ge = s.n(fe);

			function ye() {
				return (ye = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const ve = V.a.div("BackgroundWrapper", ge.a),
				xe = V.a.wrapped(Z.default, "ClassicPost", ge.a),
				Pe = V.a.wrapped($.a, "OverviewCommentPost", ge.a),
				Ce = Object(d.b)(() => Object(a.c)({
					commentThreadLinkSets: (e, {
						postId: t,
						currentProfileName: s
					}) => {
						const o = s ? s.toLowerCase() : "",
							r = Object(q.a)(t, o);
						return e.pages.profileOverview.conversations.keyToCommentThreadLinkSets[r]
					},
					headComment: (e, {
						postId: t,
						currentProfileName: s
					}) => {
						const o = s ? s.toLowerCase() : "",
							r = Object(q.a)(t, o);
						return e.pages.profileOverview.conversations.keyToHeadCommentId[r]
					},
					isInitiallyPinned: (e, {
						postId: t,
						currentProfileName: s
					}) => !!s && Object(J.p)(e, t, s),
					isPinned: (e, {
						postId: t,
						currentProfileName: s
					}) => !!s && Object(J.r)(e, t, s),
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
					layout: p.Q
				})),
				Oe = V.a.wrapped(Y.default, "OverviewLargePost", ge.a),
				je = Ce(e => {
					const {
						availableWidth: t,
						className: s,
						commentThreadLinkSets: o,
						eventFactory: r,
						forceLoadMedia: i,
						headComment: d,
						isInitiallyPinned: a,
						isPinned: c,
						isScrolling: l,
						last: m,
						layout: p,
						onClickPost: u,
						onSizeChanged: h,
						pageLayer: b,
						post: f,
						postId: g,
						profileName: y,
						scrollerItemRef: v
					} = e, x = {
						last: m,
						onClickPost: u,
						postId: g
					};
					if (!y) return null;
					const P = y === f.author,
						C = Object(H.a)(c, f.distinguishType);
					if (!P && !d && !C) return null;
					const O = d ? function(e) {
							const t = [],
								s = e.length;
							for (let o = 0; o < s; o++) {
								(0 === o || e[o - 1].depth !== e[o].depth - 1) && t.push([]), X()(t).push(e[o])
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
						}(o, d)) : [],
						j = O.length - 1;
					return n.a.createElement("div", {
						className: Object(_.a)(be.a.largeAndMediumActiveStyles, be.a.largeAndMediumPostStyles, ge.a.OverviewConversationsPost, s),
						style: {
							...Object(Q.b)(),
							...Object(Q.d)(e)
						}
					}, n.a.createElement(ee.a, {
						isFirst: !0,
						isLast: j < 0,
						key: f.id
					}, !P && !!d && n.a.createElement(Pe, ye({}, x, {
						commentId: d,
						key: f.id,
						profileName: y
					})), (P || C) && (p === ue.g.Classic ? n.a.createElement(xe, {
						availableWidth: t,
						eventFactory: r,
						inSubredditOrProfile: !1,
						isOverlay: !1,
						isScrolling: l,
						forceLoadMedia: i,
						last: m,
						onClickPost: u,
						onSizeChanged: h,
						pageLayer: b,
						postId: g,
						scrollerItemRef: v
					}) : n.a.createElement(Oe, {
						availableWidth: t,
						eventFactory: r,
						isScrolling: l,
						isFrontpage: !1,
						forceLoadMedia: i,
						last: m,
						onClickPost: u,
						onSizeChanged: h,
						pageLayer: b,
						postId: g,
						scrollerItemRef: v
					}))), n.a.createElement(ve, {
						style: {
							background: Object(Q.e)(e)
						}
					}, !a && O.map((e, t) => n.a.createElement(ee.a, {
						isLast: t === j,
						key: `${t}-isLast[${t===j}]`
					}, e.map((t, s) => {
						const o = 0 === s,
							r = s === e.length - 1;
						return "comment" === t.type ? n.a.createElement(le.a, {
							commentId: t.id,
							depth: t.depth,
							isFirst: o,
							isLast: r,
							key: t.id,
							profileName: y,
							showModTools: !0
						}) : n.a.createElement(ce, {
							extraCommentsId: t.id,
							key: t.id,
							profileName: y
						})
					})))))
				});
			var we = Object(me.b)((function(e) {
					var t;
					const s = Object(pe.a)(),
						o = Object(p.db)();
					return n.a.createElement(je, ye({
						theme: null !== (t = e.theme) && void 0 !== t ? t : s,
						currentProfileName: Object(p.i)(o),
						pageLayer: o
					}, e))
				})),
				Ie = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				Se = s("./src/reddit/helpers/trackers/post.ts"),
				ke = s("./src/reddit/selectors/tracking.ts"),
				Ee = s("./src/reddit/connectors/PostList/index.ts");
			const Te = Object(a.c)({
					...Ee.d,
					postIds: J.O,
					viewportDataLoaded: ke.a
				}),
				Le = Object(Ee.c)(),
				Ne = Object(d.b)(Te, Ee.b, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(Se.h)(e, t),
					postComponentForLayout: ({
						post: e
					}) => e.isBlank ? Ie.a : we
				}));
			var _e = (e => Object(D.c)(Le(Ne(e))))(G.a),
				Me = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				Fe = s("./node_modules/lodash/debounce.js"),
				Re = s.n(Fe),
				Ae = s("./src/reddit/actions/post.ts"),
				Be = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Ve = s("./src/lib/isUrl/index.ts"),
				Ke = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				We = s("./src/reddit/components/Media/index.tsx"),
				Ue = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				Ge = s("./src/reddit/components/PostContainer/index.tsx"),
				De = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				He = s("./src/reddit/components/PostTitle/index.tsx"),
				qe = s("./src/reddit/connectors/miniCardPost.ts"),
				ze = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				Xe = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Qe = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				Je = s("./src/reddit/models/Media/index.ts"),
				Ze = s("./node_modules/fbt/lib/FbtPublic.js"),
				Ye = s("./src/reddit/components/CommentsLink/index.tsx"),
				$e = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				et = s("./src/reddit/components/Flatlist/index.tsx"),
				tt = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				st = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				ot = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				rt = s("./src/reddit/components/ShareMenu/index.tsx"),
				it = s("./src/reddit/icons/fonts/Share/index.tsx"),
				nt = s("./src/reddit/models/User/index.ts"),
				dt = s("./src/reddit/components/MiniCardPost/Flatlist/index.m.less"),
				at = s.n(dt);
			const ct = "-MiniCardModMenu",
				lt = "-MiniCardOverflowMenu",
				mt = "-MiniCardShareMenu",
				pt = V.a.wrapped($e.a, "HorizontalVotes", at.a),
				ut = V.a.button("ShareButton", at.a),
				ht = Object(p.u)({
					currentProfileName: p.i,
					isCommentPermalink: p.w,
					isCommentsPage: p.x,
					isProfilePostListing: p.K,
					pageLayer: e => e
				}),
				bt = Object(a.c)({
					layout: p.Q,
					subreddit: p.r
				});
			var ft = ht(Object(d.b)(bt, {})(Object(D.c)(e => {
					const {
						currentProfileName: t,
						className: s,
						currentUser: o,
						handleVote: r,
						hasModFlairPerms: i,
						hasModFullPerms: d,
						hasModPostPerms: a,
						isCommentsPage: c,
						isCommentPermalink: l,
						isOverlay: m,
						isProfilePostListing: p,
						isSticky: u,
						layout: h,
						modModeEnabled: b,
						onCommentsClick: f,
						post: g,
						sendEvent: y,
						showEditFlair: v,
						showEditPost: x,
						subreddit: P
					} = e, C = e => y(Object(Se.h)(g.id, e)), O = g.postId, j = Object(et.d)(ct, g.id, m, u), w = !!o && Object(nt.e)(o) === g.author;
					return n.a.createElement("div", {
						className: Object(_.a)(at.a.flatlistContainer, s)
					}, n.a.createElement(pt, {
						compact: !1,
						model: g,
						onVoteClick: r,
						scoreClassName: at.a.score
					}), n.a.createElement(Ye.a, {
						hasModPostPerms: a,
						isCommentsPage: c,
						isCommentPermalink: l,
						isOverlay: m,
						postId: g.id,
						modModeEnabled: b,
						numComments: g.numComments,
						type: ue.g.Compact,
						onClick: f
					}), n.a.createElement(rt.a, {
						className: at.a.shareMenu,
						dropdownId: Object(et.d)(mt, g.id, m, u),
						permalink: g.permalink,
						post: g,
						sendEventWithName: C,
						subredditType: null == P ? void 0 : P.type
					}, n.a.createElement(ut, null, n.a.createElement(it.a, {
						className: at.a.shareIcon
					}), n.a.createElement("span", {
						className: at.a.shareText
					}, Ze.fbt._("share", null, {
						hk: "mmJV5"
					})))), a && n.a.createElement(tt.a, {
						dropdownId: j,
						onClick: () => C("post_mod_action_menu")
					}, n.a.createElement(et.b, {
						className: at.a.modActionsIcon
					}), n.a.createElement(st.a, {
						canEditFlair: i && !!v,
						hasModPostPerms: a,
						hasModFullPerms: d,
						isOverlay: !!m,
						isPostAuthor: w,
						modModeEnabled: b,
						post: g,
						tooltipId: j
					})), n.a.createElement(ot.a, {
						currentProfileName: t,
						isCommentsPage: c,
						isOverlay: !!m,
						isProfilePostListing: p,
						layout: h,
						pageLayer: e.pageLayer,
						permalink: g.permalink,
						postId: O,
						dropdownId: Object(et.d)(lt, g.id, m, u),
						isFixed: u,
						sendEvent: y,
						showEditPost: !!x,
						showEditFlair: !!v,
						useFlatlistBreakpoints: Object(ot.b)({
							editPost: !1,
							save: !1,
							hide: !1,
							report: !1
						})
					}))
				}))),
				gt = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				yt = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				vt = s("./src/reddit/components/MiniCardPost/index.m.less"),
				xt = s.n(vt);
			var Pt = Object(p.u)()(Object(me.b)(Object(qe.a)(Object(Be.a)(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: o,
						crosspostRoot: r,
						crosspostSubredditOrProfile: i,
						currentUser: d,
						eventFactory: a,
						flairStyleTemplate: c,
						forceLoadMedia: l,
						hideNSFWPref: m,
						moderatorPermissions: p,
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
					} = r || b, O = C && C.type, j = Object(De.b)(b.id), w = O === Je.o.RTJSON, I = P && w, S = Object(Qe.a)(p), k = Object(ze.a)(p), E = Object(Xe.a)(p), T = C && O !== Je.o.RTJSON && O !== Je.o.TEXT, L = !C && !!b.source && Object(Ve.a)(b.source.url), N = C && n.a.createElement(We.a, {
						autoplayPref: t,
						availableWidth: s,
						className: xt.a.media,
						imageBoxClassName: xt.a.mediaImageBox,
						imageBoxContentImageClassName: xt.a.mediaImageBoxContentImage,
						forceAspectRatio: Je.c,
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
					return n.a.createElement(Ge.a, {
						className: Object(_.a)(xt.a.postContainer, be.a.largeAndMediumActiveStyles, be.a.largeAndMediumPostStyles, Object(Q.a)(e), o),
						style: {
							...Object(Q.b)(e.flairStyleTemplate),
							...Object(Q.d)(e)
						},
						post: b,
						onClick: h,
						eventFactory: a
					}, n.a.createElement(Ue.a, {
						className: xt.a.backgroundWrapper,
						flairStyleTemplate: c
					}, T && N, n.a.createElement("div", {
						className: xt.a.innerContainer
					}, L && n.a.createElement(yt.a, {
						post: b,
						templatePlaceholderImage: c ? c.postPlaceholderImage : void 0
					}), n.a.createElement(He.c, {
						className: xt.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: b,
						size: He.b.Large,
						titleColor: c && c.postTitleColor
					}), y && x && n.a.createElement(gt.a, {
						className: xt.a.metaLine,
						crosspostSubredditOrProfile: i,
						hideNSFWPref: m,
						post: b,
						subredditOrProfile: x
					}), !T && n.a.createElement("div", {
						className: xt.a.mediaWrapper
					}, N), n.a.createElement("div", {
						className: xt.a.flexSpacer
					}), n.a.createElement(ft, {
						currentUser: d,
						handleVote: e.handleVote,
						hasModFlairPerms: k,
						hasModFullPerms: E,
						hasModPostPerms: S,
						modModeEnabled: u,
						post: b,
						showEditFlair: v,
						showEditPost: I
					}))), e.activeModalId === j && n.a.createElement(De.a, {
						flairs: b.flair,
						subredditId: b.belongsTo.id,
						modalId: j,
						onFlairChanged: e.onFlairChanged
					}), n.a.createElement(Ke.d, null))
				})))),
				Ct = s("./src/reddit/helpers/getClickInfo.ts"),
				Ot = s("./src/reddit/helpers/localStorage/index.ts"),
				jt = s("./src/reddit/selectors/user.ts"),
				wt = s("./src/reddit/icons/fonts/index.tsx"),
				It = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/index.m.less"),
				St = s.n(It);
			const {
				fbt: kt
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var Et = e => n.a.createElement("div", {
					className: Object(_.a)(St.a.container, e.className)
				}, n.a.createElement(wt.a, {
					name: "pin",
					className: St.a.pin
				}), n.a.createElement("div", {
					className: St.a.title
				}, kt._("Show off that karma!", null, {
					hk: "2yqUT7"
				})), e.children),
				Tt = s("./src/reddit/controls/TextButton/index.tsx"),
				Lt = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/Education.m.less"),
				Nt = s.n(Lt);
			const {
				fbt: _t
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var Mt = e => n.a.createElement(Et, {
					className: Object(_.a)(Nt.a.container, e.className)
				}, n.a.createElement("div", {
					className: Nt.a.description
				}, _t._('Pin a post from your feed using the "..." at the bottom of each post', null, {
					hk: "4lkJRB"
				})), n.a.createElement(Tt.a, {
					className: Nt.a.gotIt,
					onClick: e.onGotItClick
				}, _t._("OK, I got it", null, {
					hk: "1JMx7x"
				}))),
				Ft = s("./src/reddit/components/ProfilePinnedPosts/index.m.less"),
				Rt = s.n(Ft);
			const {
				fbt: At
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Bt = 320, Vt = 300, Kt = Object(a.c)({
				arePinnedPostsLoaded: J.a,
				currentUser: jt.k,
				pinnedPostIds: J.P
			}), Wt = Object(d.b)(Kt, e => ({
				openPost: t => e(Object(Ae.K)(t))
			}));
			class Ut extends n.a.Component {
				constructor() {
					super(...arguments), this.containerRef = null, this.state = {
						showEducation: !1,
						pauseMedia: !1
					}, this.setContainerRef = e => this.containerRef = e, this.handleScroll = Re()(() => {
						if (!this.containerRef) return;
						const e = this.containerRef.getBoundingClientRect();
						e.bottom < Vt ? this.pauseMedia() : e.top > 0 && this.playMedia()
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
						Object(Ot.Kb)(), this.setState({
							showEducation: !1
						})
					}, this.onClickPost = (e, t) => {
						this.props.openPost({
							postOrComment: t,
							clickInfo: Object(Ct.a)(e)
						})
					}, this.renderPost = e => n.a.createElement(Pt, {
						postId: e,
						key: e,
						availableWidth: Bt,
						className: Object(_.a)(Rt.a.item, Rt.a.miniCardPost),
						forceLoadMedia: !this.state.pauseMedia,
						onClickPost: this.onClickPost,
						shouldPause: this.state.pauseMedia
					})
				}
				componentDidMount() {
					this.setState({
						showEducation: !Object(Ot.J)()
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
					const o = !!this.props.currentUser && this.props.profileName === Object(nt.e)(this.props.currentUser),
						r = t.length > 0,
						i = !r && this.state.showEducation && o;
					if (!r && !i) return null;
					const d = o && this.props.pinnedPostIds.length % 2 != 0;
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: Rt.a.title
					}, At._("Pinned posts", null, {
						hk: "3prRc3"
					})), i ? n.a.createElement(Mt, {
						className: Object(_.a)(Rt.a.item, Rt.a.education),
						onGotItClick: this.onGotItClick
					}) : n.a.createElement("div", {
						ref: this.setContainerRef,
						className: Rt.a.container
					}, t.map(this.renderPost), d && n.a.createElement(Et, {
						className: Rt.a.item
					})), s)
				}
			}
			var Gt = Object(p.u)()(Wt(Ut)),
				Dt = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				Ht = s("./src/reddit/helpers/trackers/screenview.ts"),
				qt = s("./src/reddit/layout/page/Listing/index.tsx"),
				zt = s("./src/reddit/models/ContentGate.ts"),
				Xt = s("./src/reddit/pages/ErrorPages/index.tsx");

			function Qt() {
				return (Qt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Jt = (e, {
					location: t
				}) => r()([...Object(c.a)(t.search)]),
				Zt = Object(p.u)(),
				Yt = Object(a.a)(p.D, jt.eb, Jt, p.Q, (e, {
					match: t
				}) => t.params.profileName, (e, {
					match: t
				}) => t.params.sort, (e, {
					match: t
				}) => Object(se.j)(e, {
					profileName: t.params.profileName
				}), (e, t) => Object(b.a)(e, Jt(0, t)), (e, {
					match: t
				}) => !Object(J.n)(e, {
					profileName: t.params.profileName
				}), jt.K, (e, {
					match: t
				}) => Object(jt.f)(e, u.fc + t.params.profileName), (e, t, s, o, r, i, n, {
					sort: d,
					t: a
				}, c, l, p) => {
					const h = o === ue.g.Compact ? u.sb : u.tb,
						b = Object(m.a)(r, h, d, s),
						{
							sort: f
						} = s;
					return {
						contentGateInfo: p,
						over18Prefs: t,
						isLoggedIn: l,
						isOwnProfile: e,
						isProfileNSFW: !!n && n.isNSFW,
						layout: o,
						listingKey: b,
						profileName: r,
						shouldShowPinnedPostsSection: c && !f,
						sort: d,
						timeSort: a
					}
				}),
				$t = Object(d.b)(Yt, (e, t) => ({
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
							sort: d,
							t: a
						} = Object(b.a)(o, i), {
							profileName: c
						} = n, l = Object(m.a)(c, u.sb, d, i), p = Object(C.d)(o, {
							listingKey: l
						});
						if (!p) return;
						const h = Object(C.b)(o, {
								listingKey: l
							}),
							f = Object(C.c)(o, {
								listingKey: l
							}),
							g = f && f[p.token];
						if (h || g) return;
						e(I({
							key: l,
							fetchedToken: p.token
						}));
						const v = await Object(j.a)(s(), c, {
							after: p.token,
							dist: p.dist,
							sort: d,
							t: a,
							...x()(i, O.l)
						});
						if (v.ok) {
							const t = Object(C.f)(o, {
									listingKey: l
								}),
								s = {
									...v.body,
									overviewIds: y()(v.body.overviewIds, t)
								};
							e(S({
								fetchedToken: p.token,
								key: l,
								meta: o.meta,
								...s
							}))
						} else e(k({
							error: v.error,
							fetchedToken: p.token,
							key: l,
							account: v.body.data ? v.body.data.account : null
						}))
					})((t.match.params.profileName, t.match.params.sort))),
					onLoadMoreConversationsItems: () => e(f.h({
						profileName: t.match.params.profileName,
						sort: t.match.params.sort
					})),
					onLayoutChange: () => e(Object(h.profileOverviewRequested)({
						...t.match,
						queryParams: r()([...Object(c.a)(t.location.search)])
					}))
				}));
			class es extends n.a.Component {
				constructor() {
					super(...arguments), this.renderNoPosts = () => n.a.createElement(T.c, {
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
						onLayoutChange: d,
						pageLayer: a,
						profileName: c,
						sort: m,
						shouldShowPinnedPostsSection: p,
						timeSort: h
					} = this.props;
					if (!a) return null;
					if (e && e.profileDeleted) return n.a.createElement(E.default, {
						contentGateType: zt.a.ProfileDeleted,
						profileName: c
					});
					if (e && e.profileSuspended) return n.a.createElement(E.default, {
						contentGateType: zt.a.ProfileSuspended,
						profileName: c
					});
					if (451 === a.status || e && e.profileBlockedForLegalReason) return n.a.createElement(E.default, {
						contentGateType: zt.a.ProfileBlockedForLegalReason,
						profileName: c
					});
					if (403 === a.status) return n.a.createElement(Xt.a, null);
					if (404 === a.status) return n.a.createElement(E.default, {
						contentGateType: zt.a.ProfileDoesNotExist,
						profileName: c
					});
					if (!c) return null;
					const b = c.toLowerCase(),
						f = `/user/${c}/`,
						g = {
							listingKey: i,
							listingName: b
						};
					if (!s && r && !o) return n.a.createElement(E.default, {
						subredditName: c,
						contentGateType: zt.a.Nsfw
					});
					const y = {
							inSubredditOrProfile: !Object(l.a)(c),
							listingKey: i,
							listingName: b,
							listingViewed: (e, t) => Object(Ht.q)(i, m, t, e, h),
							noPostsComponent: this.renderNoPosts,
							onTryAgain: d
						},
						v = {
							sort: m,
							baseUrl: f,
							sortOptions: u.yb,
							timeSort: h
						};
					let x;
					return x = t === ue.g.Compact ? n.a.createElement(U, Qt({}, y, {
						onLoadMore: this.props.onLoadMoreChronoItems,
						onTryAgain: d
					})) : n.a.createElement(n.a.Fragment, null, p && n.a.createElement(Gt, {
						profileName: c
					}), n.a.createElement(L.a, v), n.a.createElement(_e, Qt({}, y, {
						excludePinnedPosts: p,
						onLoadMore: this.props.onLoadMoreConversationsItems
					}))), n.a.createElement(qt.a, {
						className: this.props.className,
						fitPageToContent: !0,
						contentNavBar: n.a.createElement(n.a.Fragment, null, n.a.createElement(Me.a, {
							profileName: c
						})),
						content: n.a.createElement(n.a.Fragment, null, n.a.createElement(N.a, null), x),
						sidebar: n.a.createElement(Dt.a, Qt({}, g, {
							profileName: c
						}))
					})
				}
			}
			t.default = Zt($t(es))
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
					experimentName: o.Jb
				});
				return !(!t || Object(o.me)(t))
			}
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return a
			})), s.d(t, "h", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "k", (function() {
				return p
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
				d = s("./src/reddit/selectors/user.ts");
			const a = (e, t) => {
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
				m = [],
				p = Object(o.a)((e, t) => {
					const s = u(e, t);
					if (!s) return m;
					const o = Object(n.U)(e, {
						subredditName: s.name
					});
					return o && o.postIds && o.postIds.length ? o.postIds : m
				}),
				u = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(n.Q)(e, {
						subredditId: s
					}) : null
				},
				h = (e, t, s, o, r) => {
					const n = r.find(e => e <= t) || -1,
						d = r.find(e => e > t) || 1 / 0;
					return t !== d && t !== n && (!(n + s > t) && (!(t + s > d) && !((e, t, s) => {
						const o = s[t - 1],
							r = s[t],
							n = r && Object(i.H)(e, {
								postId: o
							}) || null,
							d = r && Object(i.H)(e, {
								postId: r
							}) || null;
						return n && n.isSponsored || d && d.isSponsored
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
						d = [];
					return b.forEach(t => {
						let s = r + t;
						if (!(s >= n.length)) {
							for (; s < n.length && !h(e, s, t, n, o);) s += 1;
							s < n.length && (d.push(s), r = s)
						}
					}), d
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
					const t = Object(d.J)(e),
						s = r.d.geoSubredditRecommendationDULoggedIn(e),
						o = r.d.geoSubredditRecommendationDULoggedOut(e);
					return t && s || !t && o
				}
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return a
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				i = s("./src/reddit/selectors/chatPost.ts"),
				n = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const d = e => {
					const t = Object(n.a)(e);
					return Boolean(t) && !Object(r.me)(t)
				},
				a = Object(o.a)(d, i.d, (e, t) => e && !t)
		},
		"./src/reddit/selectors/profileOverviewChronoItems.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return l
			})), s.d(t, "e", (function() {
				return p
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
			const d = {
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
						rteMode: i.h.RICH_TEXT,
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
						rteMode: i.h.RICH_TEXT,
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
						rteMode: i.h.RICH_TEXT,
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
			a = {
				authorIsBlocked: !0,
				media: {
					type: "text",
					rteMode: i.h.RICH_TEXT,
					markdownContent: "",
					content: "This is content in a post.",
					obfuscated: null
				}
			}, n.a.notVoted;
			var a;
			var c = s("./src/reddit/helpers/isComment.ts");
			const l = Object(o.a)((e, {
					listingKey: t
				}) => {
					const s = e.posts.models;
					return m(e, {
						listingKey: t
					}).filter(e => {
						if (Object(c.a)(e)) return !0; {
							const t = s[e];
							return t && !t.hidden
						}
					})
				}),
				m = Object(o.a)((e, {
					listingKey: t
				}) => {
					const s = e.pages.profileOverview.chrono.ids[t];
					return s ? [...s] : []
				}),
				p = Object(o.a)((e, {
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
			e.exports = JSON.parse('{"id":"b1787cdf2fd4"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileOverview.cadb9f470f6abd02118c.js.map